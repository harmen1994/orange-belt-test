import { RoverState } from './RoverState';

enum Position {
  X = 0,
  Y = 1,
  DIRECTION = 2,
}
const DECIMAL_NUMBER = 10;

enum Instruction {
  LEFT = 'L',
  RIGHT = 'R',
  MOVE = 'M',
}

enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}

export class Rover {
  constructor(startingPosition: string) {
    const parsedStartingPosition = startingPosition.split(' ');
    if (parsedStartingPosition.length >= 3) {
      // could be instanceOf later
      this.roverState.xx = parseInt(
        parsedStartingPosition[Position.X],
        DECIMAL_NUMBER
      );
      this.roverState.yy = parseInt(
        parsedStartingPosition[Position.Y],
        DECIMAL_NUMBER
      );
      this.roverState.dd =
        parsedStartingPosition[Position.DIRECTION][Position.X];
    }
  }

  public go(instructions: string): void {
    for (
      let instructionKey = 0;
      instructionKey < instructions.length;
      instructionKey++
    ) {
      const instructionValue = instructions[instructionKey];
      // 💩 extract the ifs and elses later
      if (instructionValue === Instruction.LEFT) {
        this.changeDirection(Instruction.LEFT);
      } else if (instructionValue === Instruction.RIGHT) {
        this.changeDirection(Instruction.RIGHT);
      } else if (instructionValue === Instruction.MOVE) {
        if (this.roverState.dd === Direction.EAST) {
          this.roverState.xx++;
        }
        if (this.roverState.dd === Direction.SOUTH) {
          this.roverState.yy--;
        }
        if (this.roverState.dd === Direction.WEST) {
          this.roverState.xx--;
        }
        if (this.roverState.dd === Direction.NORTH) {
          this.roverState.yy++;
        }
      }
    }
  }

  private changeDirection(instruction: Instruction) {
    const directions = [
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST,
    ];
    const currentDirectionIndex = directions.indexOf(
      this.roverState.dd as Direction
    );
    if (instruction === Instruction.LEFT) {
      const directionToTheLeft =
        (currentDirectionIndex - 1 + directions.length) % directions.length;
      this.roverState.dd = directions[directionToTheLeft];
    }
    if (instruction === Instruction.RIGHT) {
      const directionToTheRight =
        (currentDirectionIndex + 1) % directions.length;
      this.roverState.dd = directions[directionToTheRight];
    }
  }

  public pos(): string {
    return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.dd}`;
  }

  private roverState: RoverState = new RoverState();
}
