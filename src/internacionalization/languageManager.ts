import { Language } from "../models/Language";
import { MajorNamesEn, MinorNamesEn } from "./En/cards";
import { SymbolsEn } from "./En/symbolsEn";
import { MajorNamesPtBR, MinorNamesPtBR } from "./PtBr/cards";
import { SymbolsPtBR } from "./PtBr/symbolsPtBR";
class LanguageManager {
    private static instance: LanguageManager;
    private symbols: any;
    private minors: any;
    private majors: any;
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
    public getLanguage(): string {
        return Language[this.lang];
    }
}
