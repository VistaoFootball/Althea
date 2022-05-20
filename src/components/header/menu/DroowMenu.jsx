import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../../languageSelect";
import Contact from "../../../views/Contact";


const menuContent = [
    {to: "/", name: <Home></Home>},
    {to: "/about", name: <About></About>},
    {to: "/services", name: <Services></Services>},
    {to: "/technologies", name: <Technologies></Technologies>},
    {to: "/contact", name: <ContactR></ContactR>},
];

const AltheaMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }
    
    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                {/*<MenuContent className="section-margin"/>*/}
            </Navbar.Collapse>
        </Navbar>
    );

}

AltheaMenu.defaultProps = {
    hamburger: false
}

export function Home() {
    const { t, i18n } = useTranslation();
return <a>{t("home")}</a>
}

export function About() {
    const { t, i18n } = useTranslation();
return <a>{t("about-us")}</a>
}

export function Services() {
    const { t, i18n } = useTranslation();
return <a>{t("services")}</a>
}

export function Technologies() {
    const { t, i18n } = useTranslation();
return <a>{t("technologies")}</a>
}

export function ContactR() {
    const { t, i18n } = useTranslation();
return <a>{t("contact")}</a>
}

export default AltheaMenu;