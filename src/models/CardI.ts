export interface CardI {
    getName(): string;
    getValue(): number;
    getUpsideDown(): boolean;
    getImage(): string;
    rotate(): void;
}
