import { DIContainer } from "../src/di";
import {ILogger, ILoggerAdapterKey, ILoggerKey, Logger, LoggerAdapter, UserService, UserServiceKey} from "./logger";
import {DIKey} from "../src/key";

const container = new DIContainer();

const loggerFilePathKey = new DIKey<string>('logger.file.path');
container.put(loggerFilePathKey, '/tmp/di-test-logs');

container.setProvider(ILoggerAdapterKey, (): LoggerAdapter => new LoggerAdapter());

container.setProvider(ILoggerKey, (container: DIContainer): ILogger => {
    return new Logger(container.get(ILoggerAdapterKey));
})

container.setProvider(UserServiceKey, (container: DIContainer): UserService => {
    return new UserService(container.get(ILoggerKey));
})

const logger: ILogger = container.get(ILoggerKey)

logger.info('Hello world!');
