import { Direction, Instruction } from './Rover';

export class RoverState {
  xx: number = 0;
  yy: number = 0;
  dd: string = Direction.NORTH;

  changeDirection(instruction: Instruction) {
    const directions = [
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST,
    ];
    const currentDirectionIndex = directions.indexOf(this.dd as Direction);
    if (instruction === Instruction.LEFT) {
      const directionToTheLeft =
        (currentDirectionIndex - 1 + directions.length) % directions.length;
      this.dd = directions[directionToTheLeft];
    }
    if (instruction === Instruction.RIGHT) {
      const directionToTheRight =
        (currentDirectionIndex + 1) % directions.length;
      this.dd = directions[directionToTheRight];
    }
  }

  moveToCurrentDirection() {
    const directionMovement = {
      [Direction.EAST]: { toRight: 1, toUp: 0 },
      [Direction.SOUTH]: { toRight: 0, toUp: -1 },
      [Direction.WEST]: { toRight: -1, toUp: 0 },
      [Direction.NORTH]: { toRight: 0, toUp: 1 },
    };
    const movement = directionMovement[this.dd as Direction];
    this.xx += movement.toRight;
    this.yy += movement.toUp;
  }

  position(): string {
    return `${this.xx} ${this.yy} ${this.dd}`;
  }
}
