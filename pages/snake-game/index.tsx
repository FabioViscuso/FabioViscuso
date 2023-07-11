import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import init, {
  World,
  GameStatus,
  InitOutput,
} from "../../public/pkg/snake_game";
import { touchListeners } from "../../lib/snakeGame/touchListeners";
import { keypressListeners } from "../../lib/snakeGame/keypressListeners";


export default function SnakeGamePage() {
    const { t } = useTranslation("page-new-postit");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameStatus, setGameStatus] = useState<GameStatus | undefined>(
        undefined
        );
        

  const initializeSnakeGame = async () => {
    try {
      const wasm: InitOutput = await init();

      // Build world
      const CELL_SIZE = 20;
      const WORLD_WIDTH = 8;
      const SNAKE_SPAWN_INDEX = Math.floor(
        Math.random() * (WORLD_WIDTH * WORLD_WIDTH)
      );
      const snakeWorld = World.new(WORLD_WIDTH, SNAKE_SPAWN_INDEX);

      // Build canvas
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (canvas && context) {
        canvas.height = WORLD_WIDTH * CELL_SIZE;
        canvas.width = WORLD_WIDTH * CELL_SIZE;

        const drawPoints = () => {
          pointsCounter.textContent = String(snakeWorld.points());
        };

        const drawStatus = () => {
          statusTextLabel.textContent = snakeWorld.game_status_tostring();
        };

        const drawWorld = () => {
          context.beginPath();
          for (let x = 0; x <= WORLD_WIDTH; x++) {
            context.moveTo(CELL_SIZE * x, 0);
            context.lineTo(CELL_SIZE * x, WORLD_WIDTH * CELL_SIZE);
          }

          for (let y = 0; y <= WORLD_WIDTH; y++) {
            context.moveTo(0, CELL_SIZE * y);
            context.lineTo(WORLD_WIDTH * CELL_SIZE, CELL_SIZE * y);
          }

          context.stroke();
        };

        const drawSnake = () => {
          const snakeCells = new Uint32Array(
            wasm.memory.buffer,
            snakeWorld.snake_cells(),
            snakeWorld.get_snake_lenght()
          );

          snakeCells.forEach((cell, i) => {
            const col = cell % WORLD_WIDTH;
            const row = Math.floor(cell / WORLD_WIDTH);

            context.fillStyle = i === 0 ? "#DBF9B8" : "#87A878";
            context.beginPath();
            context.fillRect(
              col * CELL_SIZE,
              row * CELL_SIZE,
              CELL_SIZE,
              CELL_SIZE
            );
          });

          context.stroke();
        };

        const drawReward = () => {
          const rewardCellIndex = snakeWorld.reward_cell()!;
          const col = rewardCellIndex % WORLD_WIDTH;
          const row = Math.floor(rewardCellIndex / WORLD_WIDTH);

          context.fillStyle = "#FFD700";
          context.beginPath();
          context.fillRect(
            col * CELL_SIZE,
            row * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
          );
          context.stroke();
        };

        const drawActors = () => {
          drawWorld();
          drawSnake();
          drawReward();
          drawStatus();
          drawPoints();
        };

        const gameLoop = () => {
          const status = snakeWorld.game_status();
          setGameStatus(status);

          if (status === GameStatus.Won) {
            button.textContent = "Another round?";
            return;
          } else if (status === GameStatus.Lost) {
            button.textContent = "Try again!";
            return;
          }

          const refreshSpeedFPS = 3;

          setTimeout(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snakeWorld.step();
            drawActors();
            requestAnimationFrame(gameLoop);
          }, 1000 / refreshSpeedFPS);
        };

        const button = document.getElementById(
          "game-panel__control"
        ) as HTMLButtonElement;
        const statusTextLabel = document.getElementById(
          "game-panel__info__status"
        )!;
        const pointsCounter = document.getElementById(
          "game-panel__score__points"
        )!;

        if (gameStatus === undefined) {
          snakeWorld.start_game();
          drawStatus();
          gameLoop();
        } else {
          location.reload();
        }

        keypressListeners(snakeWorld);
        touchListeners(snakeWorld);

        drawActors();
      }
    } catch (error) {
      console.error("Error loading WebAssembly module:", error);
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content="snake game built in rust" />
      </Head>
      <div className="h-screen flex flex-col justify-center items-center">
        <div id="game-panel" className="flex flex-col items-start">
          <div id="game-panel__info" className="flex">
            <p id="game-panel__info__label">Status:</p>
            <p id="game-panel__info__status"></p>
          </div>
          <div id="game-panel__score" className="flex">
            <p id="game-panel__score__label">Score:</p>
            <p id="game-panel__score__points"></p>
          </div>
          <button
            onClick={initializeSnakeGame}
            id="game-panel__control"
            type="button"
            className="p-4 bg-green-300 rounded-xl border border-slate-500 self-center"
          >
            {gameStatus === undefined ? "Play" : "Stop"}
          </button>
        </div>
        <canvas ref={canvasRef} id="snake-game-canvas"></canvas>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-new-postit"])),
    },
  };
}
