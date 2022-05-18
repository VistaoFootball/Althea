import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";
import { useTranslation } from "react-i18next";

const data = [
    {
        id: 1,
        title: <p><TitleSlide1></TitleSlide1></p>,
        slug: <SlugSlide1></SlugSlide1>,
        description: <TextSlide1></TextSlide1>,
        src: 'ReactAlthea/assets/img/project/project1/01.jpg',
        srcSlider: 'ReactAlthea/assets/img/project/project1/01.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: <p><TitleSlide2></TitleSlide2></p>,
        slug: <SlugSlide2></SlugSlide2>,
        src: 'ReactAlthea/assets/img/project/project2/02.jpg',
        srcSlider: 'ReactAlthea/assets/img/project/project2/02.jpg',
        description: <TextSlide2></TextSlide2>,
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: <p><TitleSlide3></TitleSlide3></p>,
        slug: <SlugSlide3></SlugSlide3>,
        src: 'ReactAlthea/assets/img/project/project3/03.jpg',
        srcSlider: 'ReactAlthea/assets/img/project/project3/03.jpg',
        description: <TextSlide3></TextSlide3>,
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: <p><TitleSlide4></TitleSlide4></p>,
        slug: <SlugSlide4></SlugSlide4>,
        src: 'ReactAlthea/assets/img/project/project4/04.jpg',
        srcSlider: 'ReactAlthea/assets/img/project/project4/04.jpg',
        description: <TextSlide4></TextSlide4>,
        overlay: 2,
        component: (props) => <ToastReel {...props}/>
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
}

export function SlugSlide1() {
    const { t, i18n } = useTranslation();
return <p>{t("SlugSlide1")}</p>
}

export function TitleSlide1() {
    const { t, i18n } = useTranslation();
return <p>{t("TitleSlide1")}</p>
}

export function TextSlide1() {
    const { t, i18n } = useTranslation();
return <p>{t("TextSlide1")}</p>
}

export function SlugSlide2() {
    const { t, i18n } = useTranslation();
return <p>{t("SlugSlide2")}</p>
}

export function TitleSlide2() {
    const { t, i18n } = useTranslation();
return <p>{t("TitleSlide2")}</p>
}

export function TextSlide2() {
    const { t, i18n } = useTranslation();
return <p>{t("TextSlide2")}</p>
}

export function SlugSlide3() {
    const { t, i18n } = useTranslation();
return <p>{t("SlugSlide3")}</p>
}

export function TitleSlide3() {
    const { t, i18n } = useTranslation();
return <p>{t("TitleSlide3")}</p>
}

export function TextSlide3() {
    const { t, i18n } = useTranslation();
return <p>{t("TextSlide3")}</p>
}

export function SlugSlide4() {
    const { t, i18n } = useTranslation();
return <p>{t("SlugSlide4")}</p>
}

export function TitleSlide4() {
    const { t, i18n } = useTranslation();
return <p>{t("TitleSlide4")}</p>
}

export function TextSlide4() {
    const { t, i18n } = useTranslation();
return <p>{t("TextSlide4")}</p>
}