import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from "react-i18next";

function InfoBox({className}) {
    const { t } = useTranslation();
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>{t("new-project-title")}</h3>
            <p className="mt-10">
            {t("new-project-1")}
            </p>

            <ul className="mt-30">
                {/* 
                <li>
                    <span className="mr-10">Call Us</span>
                    <a href="tel:+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li>
                <li>
                    <span className="mr-10">Whatsapp</span>
                    <a href="http://wa.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li>
                */}
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:info@example.com" target="_blank" rel="noreferrer">althea.info@gmail.com</a>
                </li>
                <li>
                    <span className="mr-10">{t("main-address")}</span>
                    <a href="#0" target="_blank" rel="noreferrer">20 Boulevard de Lyon, 67000 Strasbourg, France</a>
                </li>
                <li>
                    <span className="mr-10">{t("address")}</span>
                    <a href="#0" target="_blank" rel="noreferrer">Plot No, 619, Street Number 6, Pocket E, Sector 27, Noida, India 201301</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;