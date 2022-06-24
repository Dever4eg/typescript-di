import {DIKey} from "./key";

type Provider<T> = (container: DIContainer) => T;

export class DIContainer {
    private values = new Map<DIKey<any>, any>();
    private providers = new Map<DIKey<any>, Provider<any>>();

    setProvider<T>(key: DIKey<T>, provider: Provider<T>) {
        this.providers.set(key, provider);
    }

    get<T>(key: DIKey<T>): T {
        if(this.values.has(key)) {
            return this.values.get(key) as T;
        }

        if (this.providers.has(key)) {
            const provider = this.providers.get(key) as Provider<T>;
            return provider(this);
        }
    }

    put<T>(key: DIKey<T>, value: T): void {
        this.values.set(key, value);
    }
}
