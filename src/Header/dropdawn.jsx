import React from "react";
import {useTranslation} from "react-i18next";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import uzbTranslations from '../locales/uzb.json';
import rusTranslations from '../locales/rus.json';
import engTranslations from '../locales/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: engTranslations}, uz: {translation: uzbTranslations}, ru: {translation: rusTranslations},
        }, lng: 'uz', // Default til
        fallbackLng: 'uz', interpolation: {
            escapeValue: false,
        },
    });

const LanguageSelector = () => {
    const {i18n} = useTranslation();

    // Tilni tanlash va menyuni yopish
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (<div className="group">
        <div>
            <button
                type="button"
                className="inline-flex text-white  px-4 py-2  text-sm font-medium "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
            >
                {i18n.language === 'en' && "EN"}
                {i18n.language === 'uz' && "UZ"}
                {i18n.language === 'ru' && "RU"}
            </button>
        </div>
        {/* Dropdown menyusi */}
        <div
            className="origin-top-right absolute hidden group-hover:block"
            role="menu"

            aria-labelledby="menu-button"
        >
            <div className="py-1 backdrop-blur-2xl rounded-[15px]" role="none">
                <button
                    onClick={() => changeLanguage('en')}
                    className="block px-4 py-2 text-sm  border-b text-gray-50 border-transparent hover:text-gray-50 hover:border-y-white w-full"
                    role="menuitem"
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage('uz')}
                    className="block px-4 py-2 text-sm text-gray-50 border-b border-transparent hover:border-y-white w-full hover:text-gray-50"
                    role="menuitem"
                >
                    O'zbek
                </button>
                <button
                    onClick={() => changeLanguage('ru')}
                    className="block px-4 py-2 text-sm border-b text-gray-50 border-transparent hover:text-gray-50 hover:border-y-white w-full"
                    role="menuitem"
                >
                    Русский
                </button>
            </div>
        </div>
    </div>);
};

export default LanguageSelector;
