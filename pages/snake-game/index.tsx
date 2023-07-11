import { useEffect, useRef } from "react";
import Head from "next/head";
// import translation function
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// import game logic
import init, {
  World,
  Direction,
  GameStatus,
  InitOutput,
} from "../../public/pkg/snake_game";

export default function SnakeGamePage() {
  const { t } = useTranslation("page-new-postit");
  const canvasRef = useRef(null);

  useEffect(() => {
    const initializeSnakeGame = async () => {
      try {
        const wasm: InitOutput = await init();

        // Build world
        const CELL_SIZE = 20;
        const WORLD_WIDTH = 8;
        const SNAKE_SPAWN_INDEX = Math.floor(
          Math.random() * (WORLD_WIDTH * WORLD_WIDTH)
        );
        const world = World.new(WORLD_WIDTH, SNAKE_SPAWN_INDEX);

        // Build canvas
        const canvas = document.getElementById(
          "snake-game-canvas"
        ) as HTMLCanvasElement;
        const context = canvas.getContext("2d")!;
        canvas.height = WORLD_WIDTH * CELL_SIZE;
        canvas.width = WORLD_WIDTH * CELL_SIZE;

        // UI -- Bindings
        const button = document.getElementById(
          "game-panel__control"
        )! as HTMLButtonElement;
        const statusTextLabel = document.getElementById(
          "game-panel__info__status"
        )!;
        const pointsCounter = document.getElementById(
          "game-panel__score__points"
        )!;

        const drawPoints = () => {
          pointsCounter.textContent = String(world.points());
        };

        const drawStatus = () => {
          statusTextLabel.textContent = world.game_status_tostring();
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
            world.snake_cells(),
            world.get_snake_lenght()
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
          const rewardCellIndex = world.reward_cell()!;
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
          const gameStatus = world.game_status();
          if (gameStatus === GameStatus.Won) {
            button.textContent = "Another round?";
            return;
          } else if (gameStatus === GameStatus.Lost) {
            button.textContent = "Try again!";
            return;
          }

          const refreshSpeedFPS = 3;

          setTimeout(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            world.step();
            drawActors();
            requestAnimationFrame(gameLoop);
          }, 1000 / refreshSpeedFPS);
        };

        button.addEventListener("click", (event) => {
          event.preventDefault();
          const gameStatus = world.game_status();
          if (gameStatus === undefined) {
            world.start_game();
            drawStatus();
            button.textContent = "Stop";
            gameLoop();
          } else {
            location.reload();
          }
        });

        document.addEventListener("keydown", (e) => {
          const key = e.code;
          if (key === "ArrowUp" || key === "KeyW") {
            world.change_direction(Direction.Up);
          } else if (key === "ArrowDown" || key === "KeyS") {
            world.change_direction(Direction.Down);
          } else if (key === "ArrowLeft" || key === "KeyA") {
            world.change_direction(Direction.Left);
          } else if (key === "ArrowRight" || key === "KeyD") {
            world.change_direction(Direction.Right);
          } else {
            console.log("Invalid key");
          }
        });

        // Add touch events for mobile swipe
        let initialX: number | null = null;
        let initialY: number | null = null;

        const startTouch = (e: TouchEvent) => {
          initialX = e.touches[0].clientX;
          initialY = e.touches[0].clientY;
        };

        const moveTouch = (e: TouchEvent) => {
          if (initialX === null || initialY === null) {
            return;
          }

          const currentX = e.touches[0].clientX;
          const currentY = e.touches[0].clientY;

          const diffX = initialX - currentX;
          const diffY = initialY - currentY;

          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
              // swiped left
              world.change_direction(Direction.Left);
            } else {
              // swiped right
              world.change_direction(Direction.Right);
            }
          } else {
            if (diffY > 0) {
              // swiped up
              world.change_direction(Direction.Up);
            } else {
              // swiped down
              world.change_direction(Direction.Down);
            }
          }

          initialX = null;
          initialY = null;

          e.preventDefault();
        };

        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);

        drawActors();
      } catch (error) {
        console.error("Error loading WebAssembly module:", error);
      }
    };

    initializeSnakeGame();
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="snake game built in rust" />
      </Head>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div id="game-panel">
          <div id="game-panel__info">
            <p id="game-panel__info__label">Status:</p>
            <p id="game-panel__info__status"></p>
          </div>
          <div id="game-panel__score">
            <p id="game-panel__score__label">Score:</p>
            <p id="game-panel__score__points"></p>
          </div>
          <button id="game-panel__control" type="button">Play</button>
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
