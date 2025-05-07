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
      [Direction.EAST]: { xx: 1, yy: 0 },
      [Direction.SOUTH]: { xx: 0, yy: -1 },
      [Direction.WEST]: { xx: -1, yy: 0 },
      [Direction.NORTH]: { xx: 0, yy: 1 },
    };
    const movement = directionMovement[this.dd as Direction];
    this.xx += movement.xx;
    this.yy += movement.yy;
  }

  position(): string {
    return `${this.xx} ${this.yy} ${this.dd}`;
  }
}
