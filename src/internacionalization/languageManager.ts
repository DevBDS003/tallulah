import { Language } from "../models/Language";
import { MajorNamesEn, MinorNamesEn } from "./En/cards";
import { SymbolsEn } from "./En/symbolsEn";
import { MajorNamesPtBR, MinorNamesPtBR } from "./PtBr/cards";
import { SymbolsPtBR } from "./PtBr/symbolsPtBR";
export class LanguageManager {
    private static instance: LanguageManager;
    private symbols: any;
    private minors: string[];
    private majors: string[];
    private lang: number;
    private constructor() {
        this.symbols = SymbolsPtBR;
        this.minors = MinorNamesPtBR;
        this.majors = MajorNamesPtBR;
        this.lang = 0;
    }
    public static getInstance(): LanguageManager {
        if (!LanguageManager.instance) {
            LanguageManager.instance = new LanguageManager();
        }
        return LanguageManager.instance;
    }
    public setLanguage(lang: number): void {
        switch (lang) {
            case 0:
                this.symbols = SymbolsPtBR;
                this.minors = MinorNamesPtBR;
                this.majors = MajorNamesPtBR;
                this.lang = 0;
                break;
            case 1:
                this.symbols = SymbolsEn;
                this.minors = MinorNamesEn;
                this.majors = MajorNamesEn;
                this.lang = 0;
                break;
        }
    }
    public getMinors(): any {
        return this.minors;
    }
    public getSymbols(): any {
        return this.symbols;
    }
    public getMajors(): any {
        return this.majors;
    }
    public getLanguage(): string {
        return Language[this.lang];
    }
}
