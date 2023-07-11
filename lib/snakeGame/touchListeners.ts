import {
  World,
  Direction,
} from "../../public/pkg/snake_game";

export function touchListeners(snakeWorld: World) {
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
        snakeWorld.change_direction(Direction.Left);
      } else {
        // swiped right
        snakeWorld.change_direction(Direction.Right);
      }
    } else {
      if (diffY > 0) {
        // swiped up
        snakeWorld.change_direction(Direction.Up);
      } else {
        // swiped down
        snakeWorld.change_direction(Direction.Down);
      }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };

  document.addEventListener("touchstart", startTouch, false);
  document.addEventListener("touchmove", moveTouch, false);
}
