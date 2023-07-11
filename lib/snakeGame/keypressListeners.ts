import {
    World,
    Direction,
  } from "../../public/pkg/snake_game";

export function keypressListeners(snakeWorld: World) {
    document.addEventListener("keydown", (e) => {
        const key = e.code;
        if (key === "ArrowUp" || key === "KeyW") {
          snakeWorld.change_direction(Direction.Up);
        } else if (key === "ArrowDown" || key === "KeyS") {
          snakeWorld.change_direction(Direction.Down);
        } else if (key === "ArrowLeft" || key === "KeyA") {
          snakeWorld.change_direction(Direction.Left);
        } else if (key === "ArrowRight" || key === "KeyD") {
          snakeWorld.change_direction(Direction.Right);
        } else {
          console.log("Invalid key");
        }
      });
}