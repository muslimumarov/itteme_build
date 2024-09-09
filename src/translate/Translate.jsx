import React from 'react';
import "./translate.css";
import { useTranslation } from "react-i18next";
function Translate() {
    const { i18n } = useTranslation();
    const languages = localStorage.getItem("i18nextLng") || "uz";

    const handleChange = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("i18nextLng", language);
    };

    return (
        <div className="translate-wrap flex items-center space-x-5">
            <div className="translate-options text-[#FE7600] flex items-center space-x-5">
                <p
                    className={`inline font-semibold  cursor-pointer ${languages === 'uz' ? 'text-blue-500' : ''}`}
                    onClick={() => handleChange('uz')}
                >
                    Uzb
                </p>
                <p
                    className={`inline font-semibold cursor-pointer ${languages === 'en' ? 'text-blue-500' : ''}`}
                    onClick={() => handleChange('en')}
                >
                    En
                </p>
                <p
                    className={`inline font-semibold cursor-pointer ${languages === 'ru' ? 'text-blue-500' : ''}`}
                    onClick={() => handleChange('ru')}
                >
                    Ru
                </p>
            </div>
        </div>
    );
}

export default Translate;
