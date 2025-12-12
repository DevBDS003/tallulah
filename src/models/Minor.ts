import { LanguageManager } from "../internacionalization/languageManager";
import { CardI } from "./CardI";
import { Symbols } from "./unionInternacionalization";

export class CardMinor implements CardI {
    private value: number;
    private name: string;
    private image: string;
    private back: string;
    private show: string;
    private symbol: Symbols;
    private languageManager: LanguageManager;
    constructor(value: number, image: string, back: string, symbol: number) {
        this.value = value;
        this.image = image;
        this.back = back;
        this.show = back;
        this.symbol = symbol;
        this.languageManager = LanguageManager.getInstance();
        this.name =
            this.languageManager.getMinors()[value] +
            this.languageManager.getSymbols()[symbol];
    }
    swap(): void {
        if (this.show == this.back) {
            this.show = this.image;
        } else {
            this.show = this.back;
        }
    }
    //getter/setter
    public getName(): string {
        return this.name;
    }
    public getShow(): string {
        return this.show;
    }
    public getValue(): number {
        return this.value;
    }
    public getSymbol(): number {
        return this.symbol;
    }
}
