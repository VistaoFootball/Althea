import React from 'react';
import {dsnCN} from "../../../hooks/helper";
import { useTranslation } from "react-i18next";

function MenuContent({className}) {

    const { t } = useTranslation();

    const socialData = [
        {link: "#0", name: "Dribbble."},
        {link: "#0", name: "Behance."},
        {link: "#0", name: "Linkedin."},
        {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">{t("main-address")}</h5>
                    <p>
                        20 Boulevard de Lyon<br/> 67000 Strasbourg<br/> France
                    </p>
                    <br/>
                    <h5 className="sm-title-block mb-10">{t("address")}</h5>
                    <p>
                    Plot No, 619, Street Number 6, Pocket E, Sector 27,<br/> Noida<br/> India 201301
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:info@dsngrid.com"
                           data-hover-text="info@dsngrid.com">althea.info@gmail.com</a>
                    </p>
                </div>
            </div>
            {/*
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
                
            </div>
            */}
        </div>
    );
}

export default MenuContent;