export as namespace timeToRead;

declare namespace TimeToRead {
  export interface TimeToReadOptions {
    wpm?: number;
    cjkCpm?: number;
  }

  export interface TimeToReadReturn {
    readingTime: number;
    enReadingTime: number;
    cjkReadingTime: number;
    wordCount: number;
    cjkCount: number;
  }
}

declare function TimeToRead(content: string, options?: TimeToRead.TimeToReadOptions): TimeToRead.TimeToReadReturn;

export = TimeToRead;
