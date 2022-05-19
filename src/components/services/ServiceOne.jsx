import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";
import { useTranslation } from "react-i18next";

const ServicesDetails = [
    {
        icon: 'assets/img/services/search-engine.png',
        title: <ServiceTitle1></ServiceTitle1>,
        description: <Service1></Service1>,
    },
    {
        icon: 'assets/img/services/mobile-app.png',
        title: <ServiceTitle2></ServiceTitle2>,
        description: <Service2></Service2>,
    },
    {
        icon: 'assets/img/services/internet-of-things.png',
        title: <ServiceTitle3></ServiceTitle3>,
        description: <Service3></Service3>,
    },
    {
        icon: 'assets/img/services/web-app.png',
        title: <ServiceTitle4></ServiceTitle4>,
        description: <Service4></Service4>,
    },
    {
        icon: 'assets/img/services/cloud-computing.png',
        title: <ServiceTitle5></ServiceTitle5>,
        description: <Service5></Service5>,
    },
    {
        icon: 'assets/img/services/social-media-optimization.png',
        title: <ServiceTitle6></ServiceTitle6>,
        description: <Service6></Service6>,
    },
    {
        icon: 'assets/img/services/blockchain.png',
        title: <ServiceTitle7></ServiceTitle7>,
        description: <Service7></Service7>,
    },
    {
        icon: 'assets/img/services/pay-per-click.png',
        title: <ServiceTitle8></ServiceTitle8>,
        description: <Service8></Service8>,
    },
]

export function ServiceTitle1() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-1")}</p>
}

export function Service1() {
    const { t, i18n } = useTranslation();
return <p>{t("service1")}</p>
}

export function ServiceTitle2() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-2")}</p>
}

export function Service2() {
    const { t, i18n } = useTranslation();
return <p>{t("service2")}</p>
}

export function ServiceTitle3() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-3")}</p>
}

export function Service3() {
    const { t, i18n } = useTranslation();
return <p>{t("service3")}</p>
}

export function ServiceTitle4() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-4")}</p>
}

export function Service4() {
    const { t, i18n } = useTranslation();
return <p>{t("service4")}</p>
}

export function ServiceTitle5() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-5")}</p>
}

export function Service5() {
    const { t, i18n } = useTranslation();
return <p>{t("service5")}</p>
}

export function ServiceTitle6() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-6")}</p>
}

export function Service6() {
    const { t, i18n } = useTranslation();
return <p>{t("service6")}</p>
}

export function ServiceTitle7() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-7")}</p>
}

export function Service7() {
    const { t, i18n } = useTranslation();
return <p>{t("service7")}</p>
}

export function ServiceTitle8() {
    const { t, i18n } = useTranslation();
return <p>{t("service-title-8")}</p>
}

export function Service8() {
    const { t, i18n } = useTranslation();
return <p>{t("service8")}</p>
}
const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );

    
};

export default ServiceOne