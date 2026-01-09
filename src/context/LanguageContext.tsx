/*import es from "../locales/es.json";
import en from "../locales/en.json";
import { createContext, useEffect, useState } from "react";

const translations = { es, en } as const;

type Language = "es" | "en";


type LanguajeProviderProps = {
    initialLang: Language;
}

const LanguajeContext = createContext<{ t: typeof translations[Language]; language: Language; setLanguage: (lang: Language) => void } | undefined>(undefined);

export function useLenguaje({initialLang}: LanguajeProviderProps) {

    //DEFINO LAS CONSTANTES PARA EL ESTADO DEL IDIOMA
    const [language, setLanguage] = useState<Language>(initialLang);
    const t = translations[language];

    //RETORNO EL OBJETO CON LAS FUNCIONES Y EL ESTADO
    return { t, language, setLanguage };
    
 useEffect(() => {
    console.log(`El idioma ha cambiado a: ${language}`);
 }, [language]);
}*/