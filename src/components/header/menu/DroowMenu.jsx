import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../../languageSelect";

const menuContent = [
    {name: "A propos", to: "/accueil"},
    {name: "Services", to: "/services"},
    {name: "Contact", to: "/contact"},

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

        const { t } = useTranslation();
    
    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <div className="language-select">
        <LanguageSelect />
    </div>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

AltheaMenu.defaultProps = {
    hamburger: false
}


export default AltheaMenu;