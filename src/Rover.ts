import { RoverState } from './RoverState';

const ITEMS_FOR_X_Y_DIRECTION = 3;
enum Position {
  X = 0,
  Y = 1,
  DIRECTION = 2,
}
const DECIMAL_NUMBER = 10;

export enum Instruction {
  LEFT = 'L',
  RIGHT = 'R',
  MOVE = 'M',
}

export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}

export class Rover {
  private roverState: RoverState;

  constructor(startingPosition: string) {
    this.roverState = new RoverState();
    const parsedStartingPosition = startingPosition.split(' ');
    if (parsedStartingPosition.length == ITEMS_FOR_X_Y_DIRECTION) {
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
      if (
        instructionValue === Instruction.LEFT ||
        instructionValue === Instruction.RIGHT
      ) {
        this.roverState.changeDirection(instructionValue);
      } else if (instructionValue === Instruction.MOVE) {
        this.roverState.moveToCurrentDirection();
      }
    }
  }

  public pos(): string {
    return this.roverState.position();
  }
}
