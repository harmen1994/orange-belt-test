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
        if (this.roverState.dd === 'E') {
          this.roverState.dd = 'N';
        } else if (this.roverState.dd === 'N') {
          this.roverState.dd = 'W';
        } else if (this.roverState.dd === 'W') {
          this.roverState.dd = 'S';
        } else if (this.roverState.dd === 'S') {
          this.roverState.dd = 'E';
        }
      } else if (instructionValue === Instruction.RIGHT) {
        if (this.roverState.dd === 'E') {
          this.roverState.dd = 'S';
        } else if (this.roverState.dd === 'S') {
          this.roverState.dd = 'W';
        } else if (this.roverState.dd === 'W') {
          this.roverState.dd = 'N';
        } else if (this.roverState.dd === 'N') {
          this.roverState.dd = 'E';
        }
      } else if (instructionValue === Instruction.MOVE) {
        if (this.roverState.dd === 'E') {
          this.roverState.xx++;
        }
        if (this.roverState.dd === 'S') {
          this.roverState.yy--;
        }
        if (this.roverState.dd === 'W') {
          this.roverState.xx--;
        }
        if (this.roverState.dd === 'N') {
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
