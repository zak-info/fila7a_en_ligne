"use client";
import { useTranslations, useLocale } from "next-intl";

const JustText = ({ text, default: defaultLocale, force }) => {
    const currentLocale = useLocale();

    const localeToUse = force || currentLocale || defaultLocale;

    // Get translations for the determined locale
    const t = useTranslations("Accueille");

    // ✅ Get translation
    const translatedText = t(text);

    return <>{translatedText === `Accueille.${text}` ? text : translatedText}</>;
};

export default JustText;
