import { LanguageManager } from "../internacionalization/languageManager";
import { CardI } from "./CardI";

export class CardMajor implements CardI {
    private value: number;
    private name: string;
    private image: string;
    private upsideDown: boolean;
    private languageManager: LanguageManager;
    constructor(value: number, image: string, upsideDown: boolean) {
        this.value = value;
        this.image = image;
        this.upsideDown = upsideDown;
        this.languageManager = LanguageManager.getInstance();
        this.name =
            this.languageManager.getMajors()[value]+` (${value})`;
    }
    public rotate(): void {
        this.upsideDown = !this.upsideDown;
    }
    //getter/setter
    public getImage(): string {
        return this.image;
    }
    public getName(): string {
        return this.name;
    }
    public getUpsideDown(): boolean {
        return this.upsideDown;
    }
    public getValue(): number {
        return this.value;
    }
}