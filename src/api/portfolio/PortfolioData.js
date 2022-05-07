import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";


const data = [
    {
        id: 1,
        title: "Réalise tes rêves",
        slug: 'Althea Corp',
        category: ['Une mission'],
        description: "Le rêve est la promesse de l'aube et, donc du futur immédiat. Fais de ton rêve une réalité et fais de ta vie une source d'inspiration pour les autres",
        src: 'assets/img/project/project1/01.jpg',
        srcSlider: 'assets/img/project/project1/01.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Une équipe passionnée",
        slug: 'Produits',
        src: '/assets/img/project/project2/02.jpg',
        srcSlider: '/assets/img/project/project2/02.jpg',
        category: ['Nos produits'],
        description: "Une équipe d'experts, engagés à livrer des produits qui correspondent à vos besoins",
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Made in France",
        slug: 'Althea corp',
        src: '/assets/img/project/project3/03.jpg',
        srcSlider: '/assets/img/project/project3/03.jpg',
        category: [''],
        description: "Althea est une entreprise basée dans l'est de la France, en Alsace, à Strasbourg.",
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Passe à l'action",
        slug: 'contact',
        src: '/assets/img/project/project4/04.jpg',
        srcSlider: '/assets/img/project/project4/04.jpg',
        description: 'Trouver le bon partenaire technique peut tout changer, faites nous part de vos projets, partageons ensemble.',
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
};