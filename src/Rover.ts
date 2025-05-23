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
      this.roverState.xCoordinate = this.parseCoordinate(
        parsedStartingPosition[Position.X]
      );
      this.roverState.yCoordinate = this.parseCoordinate(
        parsedStartingPosition[Position.Y]
      );
      this.roverState.direction =
        parsedStartingPosition[Position.DIRECTION][Position.X];
    }
  }

  private parseCoordinate(parsedStartingPosition: string) {
    return parseInt(parsedStartingPosition, DECIMAL_NUMBER);
  }

  public go(instructions: string): void {
    const instructionArray = instructions.split('');
    instructionArray.forEach((instructionValue) => {
      if (
        instructionValue === Instruction.LEFT ||
        instructionValue === Instruction.RIGHT
      ) {
        this.roverState.changeDirection(instructionValue);
      } else if (instructionValue === Instruction.MOVE) {
        this.roverState.moveToCurrentDirection();
      }
    });
  }

  public pos(): string {
    return this.roverState.position();
  }
}
