import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation(); // Tarjima hook

    return (
        <div className="hero ">
            <h1 className="hero-title text-[86px] font-bold leading-[100px] text-white mb-[62px] pt-[170px]">ATAEV <br/>BAHODIR BUILD</h1>
            <p className="hero-text text-[18px] text-white  mb-[44px]">{t('hero-title')}</p>
            <button className="hero-button text-[15px] text-white inline-block mr-[17px]  px-2 py-2 border-[2px] border-white rounded-[25px]   hover:bg-gray-100 hover:text-black ">{t('hero-button-1')}</button>
            <button className="hero-button text-[15px] text-white  inline-block px-8 py-2 border-[2px] border-white rounded-[25px]   hover:bg-gray-100 hover:text-black">{t('hero-button-2')}</button>
        </div>
    );
}

export default Hero;
