import { Direction, Instruction } from './Rover';

export class RoverState {
  xCoordinate: number = 0;
  yCoordinate: number = 0;
  direction: string = Direction.NORTH;

  changeDirection(instruction: Instruction) {
    const directions = [
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST,
    ];
    const currentDirectionIndex = directions.indexOf(
      this.direction as Direction
    );
    if (instruction === Instruction.LEFT) {
      const directionToTheLeft =
        (currentDirectionIndex - 1 + directions.length) % directions.length;
      this.direction = directions[directionToTheLeft];
    }
    if (instruction === Instruction.RIGHT) {
      const directionToTheRight =
        (currentDirectionIndex + 1) % directions.length;
      this.direction = directions[directionToTheRight];
    }
  }

  moveToCurrentDirection() {
    const directionMovement = {
      [Direction.EAST]: { toRight: 1, toUp: 0 },
      [Direction.SOUTH]: { toRight: 0, toUp: -1 },
      [Direction.WEST]: { toRight: -1, toUp: 0 },
      [Direction.NORTH]: { toRight: 0, toUp: 1 },
    };
    const movement = directionMovement[this.direction as Direction];
    this.xCoordinate += movement.toRight;
    this.yCoordinate += movement.toUp;
  }

  position(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
