import { RoverState } from './RoverState';

export class Rover {
  constructor(startingPosition: string) {
    const parsedStartingPosition = startingPosition.split(' ');
    if (parsedStartingPosition.length >= 3) {
      // could be instanceOf later
      this.rs.xx = parseInt(parsedStartingPosition[0], 10);
      this.rs.yy = parseInt(parsedStartingPosition[1], 10);
      this.rs.dd = parsedStartingPosition[2][0];
    }
  }

  public go(cms: string): void {
    for (let i = 0; i < cms.length; i++) {
      const c = cms[i];
      if (c === 'L') {
        if (this.rs.dd === 'E') {
          this.rs.dd = 'N';
        } else if (this.rs.dd === 'N') {
          this.rs.dd = 'W';
        } else if (this.rs.dd === 'W') {
          this.rs.dd = 'S';
        } else if (this.rs.dd === 'S') {
          this.rs.dd = 'E';
        }
      } else if (c === 'R') {
        if (this.rs.dd === 'E') {
          this.rs.dd = 'S';
        } else if (this.rs.dd === 'S') {
          this.rs.dd = 'W';
        } else if (this.rs.dd === 'W') {
          this.rs.dd = 'N';
        } else if (this.rs.dd === 'N') {
          this.rs.dd = 'E';
        }
      } else if (c === 'M') {
        if (this.rs.dd === 'E') {
          this.rs.xx++;
        }
        if (this.rs.dd === 'S') {
          this.rs.yy--;
        }
        if (this.rs.dd === 'W') {
          this.rs.xx--;
        }
        if (this.rs.dd === 'N') {
          this.rs.yy++;
        }
      }
    }
  }

  public get XYD(): string {
    return `${this.rs.xx} ${this.rs.yy} ${this.rs.dd}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private rs: RoverState = new RoverState();
}
