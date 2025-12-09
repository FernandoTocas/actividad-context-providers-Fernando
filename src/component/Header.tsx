import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import es from "../locales/es.json";
import en from "../locales/en.json";
const translations = { es, en } as const;
export default function Header() {
    // TODO
    //const {t} = useLanguage();
    /* --------------------------- */
    // Eliminar
    const language = "es";
    const t = (key:string):string => {
        // @ts-ignore
        return translations[language][key];
    }
    /* --------------------------- */

    return (
        <header
            className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
            <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-lg font-bold">{t("title")}</h1>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher/>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}