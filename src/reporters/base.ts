import type { ILogMessage, LogFormatter, UniLoggerOptions } from "@/types"
import process from "node:process"

export class BaseReporter {
  formatters: LogFormatter[] = []

  constructor(opts: UniLoggerOptions) {
    this.formatters = opts.formatters
  }

  write(message: ILogMessage): void {
    const { log } = message

    process.stdout.write(log)
  }
}
