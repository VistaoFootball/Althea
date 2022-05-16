import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/search-engine.png',
        title: "Optimisation du moteur de recherche",
        description: "Le référencement est le processus par lequel les entreprises visent à améliorer non seulement la quantité mais aussi la qualité du trafic sur le site Web reçu des moteurs de recherche."
        ,
    },
    {
        icon: 'assets/img/services/mobile-app.png',
        title: "Développement d'applications mobiles",
        description: "Chez Althea, nous avons un large éventail d'expertise et de compétences pertinentes ainsi que la capacité d'identifier les tendances à venir et émergentes."
        ,
    },
    {
        icon: 'assets/img/services/internet-of-things.png',
        title: "Développement IoT",
        description: "L'Internet des objets utilise une technologie qui connecte tout, des fours à la gestion de l'ensemble d'un bâtiment."
    },
    {
        icon: 'assets/img/services/web-app.png',
        title: "Développement d'applications web",
        description: "Chez Althea, nous avons des années d'expérience dans la création d'une variété variée de produits numériques selon les exigences de temps et de budget de clients spécifiques."
    },
    {
        icon: 'assets/img/services/cloud-computing.png',
        title: "Cloud computing",
        description: "Un autre outil d'optimisation est le cloud computing, c'est-à-dire une façon d'utiliser des ordinateurs distants interconnectés."
    },
    {
        icon: 'assets/img/services/social-media-optimization.png',
        title: "Optimisation des réseaux sociaux",
        description: "Les plateformes de médias sociaux ne sont pas seulement un lieu de connexion avec les amis et la famille, mais aussi un lieu de connexion efficace avec les entreprises."
    },
    {
        icon: 'assets/img/services/blockchain.png',
        title: "Développement blockchain",
        description: "La technologie blockchain est sans aucun doute quelque chose dont tout le monde a entendu parler."
    },
    {
        icon: 'assets/img/services/pay-per-click.png',
        title: "Pay per Click",
        description: "Alors que le SEO et le SMO génèrent du trafic organique vers votre site Web, il existe des moyens de générer du trafic inorganique via des canaux payants."
    },
]

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