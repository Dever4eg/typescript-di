export class DIKey<T> {
    public readonly id: Symbol;

    constructor(key: string) {
        this.id = Symbol(key);
    }
}
