import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguageSelector from "./dropdawn";
import AtaevLogo from "../images/ataev1.a8abd3c374603900fb01.png";
import PhoneLogo from "../images/download.png";
import mobilburger from "../images/mobil-burger.png";
import delet from "../images/delete.png";
import Translate from "../translate/Translate";

function Header() {
    const [isOpen, setIsOpen] = useState(false); // Menyu holatini boshqarish
    const {t} = useTranslation(); // Tarjima hook
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (<nav className="header-wrap mobil:bg-customGray md:bg-transparent
                    mobil:p-custom-padding  w-full bg-transparent left-0 fixed">
        <div className=" ">
            <div className="flex justify-between items-center h-16">
                {/* Desktop Menu */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-800 hover:text-gray-600  focus:outline-none focus:text-gray-600"
                        aria-label="toggle menu"
                        onClick={toggleMenu}
                    >
                        <img src={mobilburger} className='w-[35px]' alt="phone icon"/>
                    </button>
                </div>
                <img
                    src={AtaevLogo}
                    className="max-w-[110px] cm:block md:hidden"
                    alt="ataev logo"
                />
                <div className="phone-icon md:hidden">
                    <a href="tel:+998974839999">
                        <img src={PhoneLogo} className="w-[35px]" alt="phone nomer"/>
                    </a>
                </div>
                <div className="hidden md:flex items-center md:space-x-6 md:text-[11px]
                     lg:space-x-10 xl:space-x-14 xl:text-[16px] lg:text-[15px]  flex-1 justify-center">
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("information")}
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("about_us")}
                    </NavLink>
                    <NavLink
                        to="/enterprises"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("enterprises")}
                    </NavLink>
                    <div className="flex-shrink-0">
                        <NavLink
                            to="/"
                            className="text-xl nav-item font-bold "
                        >
                            <img src={AtaevLogo} className=" max-w-[110px] pb-2" alt="ataev logo"/>
                        </NavLink>

                    </div>

                    <NavLink
                        to="/advantages"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("our_advantages")}
                    </NavLink>
                    <NavLink
                        to="/news"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("news")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) => isActive ? "nav-item active" : "nav-item"}
                    >
                        {t("communication")}
                    </NavLink>
                    <LanguageSelector/>
                </div>

                {/* Mobile Menu Button (Burger Icon) */}
            </div>
            {/* Mobile Menu */}
            {isOpen && (<div className="md:hidden  relative  top-[-100px] z-50">
                <div
                    className="pl-[50px] pt-[50px] rounded-[19px] bg-Custo
                    text-[20px] absolute  top-[35px] h-screen left-[-40px] w-[280px]   space-y-5 ">
                    <button onClick={toggleMenu}>
                        <img src={delet}
                             className='absolute  bg-gray-100 rounded-full p-2 w-[35px] top-[10px] right-3'
                             alt="remove icon"/>
                    </button>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "block  nav-item active" : "block nav-item"}
                    >
                        {t("information")}
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? "block nav-item active" : "block nav-item"}
                    >
                        {t("about_us")}
                    </NavLink>
                    <NavLink
                        to="/enterprises"
                        className={({isActive}) => isActive ? "block nav-item active" : "block nav-item"}
                    >
                        {t("enterprises")}
                    </NavLink>
                    <NavLink
                        to="/advantages"
                        className={({isActive}) => isActive ? "block nav-item active" : "block nav-item"}
                    >
                        {t("our_advantages")}
                    </NavLink>
                    <NavLink
                        to="/news"
                        className={({isActive}) => isActive ? "block nav-item active" : "block nav-item"}
                    >
                        {t("news")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) => isActive ? "block nav-item active" : "block nav-item"}
                    >
                        <Translate/>
                    </NavLink>
                </div>
            </div>)}
        </div>
    </nav>);
}

export default Header;
