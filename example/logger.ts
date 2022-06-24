import {DIKey} from "../src/key";

export const ILoggerAdapterKey = new DIKey<LoggerAdapter>('LoggerAdapter');

export class LoggerAdapter {
    print(message: string): void {
        console.log(message)
    }
}

export const ILoggerKey = new DIKey<ILogger>('ILogger');

export interface ILogger {
    info(message: string): void;
}

export class Logger implements ILogger {
    constructor(protected adapter: LoggerAdapter) {}

    info(message: string): void {
        this.adapter.print(message);
    }
}

export const UserServiceKey = new DIKey<UserService>('UserService');

export class UserService {
    constructor(protected readonly logger: ILogger) {}
}
