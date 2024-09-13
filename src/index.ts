import { BaseReporter } from "./reporters/base"
import { LogLevel } from "./types"

const test = new BaseReporter({
  formatters: [],
  environment: "node",
  level: LogLevel.INFO,
})

test.write({
  level: LogLevel.INFO,
  log: "Hello, world!",
})
