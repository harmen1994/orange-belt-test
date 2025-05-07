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
  SOUTH = 'S',
  EAST = 'E',
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
        if (this.roverState.dd === Direction.EAST) {
          this.roverState.dd = Direction.NORTH;
        } else if (this.roverState.dd === Direction.NORTH) {
          this.roverState.dd = Direction.WEST;
        } else if (this.roverState.dd === Direction.WEST) {
          this.roverState.dd = Direction.SOUTH;
        } else if (this.roverState.dd === Direction.SOUTH) {
          this.roverState.dd = Direction.EAST;
        }
      } else if (instructionValue === Instruction.RIGHT) {
        if (this.roverState.dd === Direction.EAST) {
          this.roverState.dd = Direction.SOUTH;
        } else if (this.roverState.dd === Direction.SOUTH) {
          this.roverState.dd = Direction.WEST;
        } else if (this.roverState.dd === Direction.WEST) {
          this.roverState.dd = Direction.NORTH;
        } else if (this.roverState.dd === Direction.NORTH) {
          this.roverState.dd = Direction.EAST;
        }
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

  public get XYD(): string {
    return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.dd}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private roverState: RoverState = new RoverState();
}
