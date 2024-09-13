export interface ILogMessage {
  log: string
  level: string
}

export enum LogLevel {
  TRACE = "TRACE",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export type LogFormatter<T extends ILogMessage = ILogMessage> = (
  current: string,
  context: T
) => string

export type FormatterGen = (...opts: unknown[]) => LogFormatter

export interface UniLoggerOptions {
  level: LogLevel
  environment: "browser" | "node"
  formatters: LogFormatter[]
}
