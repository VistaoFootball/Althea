import React from 'react';
import NavLink from "../button/NavLink";
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from "react-i18next";

function MenuFooter({className, ...restProps}) {
    const { t } = useTranslation();

    const paginate = [
        {link: "/Althea", title: <p>{t("home")}</p>},
        {link: "/about", title: <p>{t("about-us")}</p>},
        {link: "/services", title: <p>{t("services")}</p>},
        {link: "/technologies", title: <p>{t("technologies")}</p>},
        {link: "/contact", title: <p>{t("contact")}</p>},
    ];
    return (
        <ul className={dsnCN('col-menu', className)} {...restProps}>
            {
                paginate.map(
                    (item, i) =>
                        <li key={i}><NavLink to={item.link}>{item.title}</NavLink></li>
                )
            }
        </ul>
    );
}

export default MenuFooter;