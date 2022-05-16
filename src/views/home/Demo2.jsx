import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import HeaderNormal from "../../components/header/HeaderNormal";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceOne";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import HeroSection from "../../components/hero-section/HeroSection";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import {Helmet} from "react-helmet";
import '../../table.css';

const heroContent = {
    title: "DIGITAL CREATIVE AGENCY",
    description: `We Bring Ideas To Life`,

}

function Demo2(props) {
    return (
        <>
            <Helmet>
                <title>Droow - Portfolio & Agency React Template </title>
            </Helmet>
            <HeaderNormal className="background-section" description={heroContent.description}>
                {heroContent.title}
            </HeaderNormal>

            {/*Start Portfolio Swiper*/}
            <Container className="under-header section-margin">
                <Row>
                    <Col lg={{span: 8, offset: 4}}>
                        <PortfolioSwiper desktop={{slidesPerView: 2.5}} grabCursor/>
                    </Col>
                </Row>
            </Container>
            {/*End Portfolio Swiper*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
            <table>
<thead>
    <tr>
        <th></th>
        <th ><div >Premium</div><span>400</span> $ /par mois<span></span> </th>
        <th ><div >Business</div>500 $ <span>/par mois</span></th>
        <th ><div >Platine</div>700 $ <span>/par mois</span></th>
    </tr>
</thead>
<tbody>
    
    <tr class="header">
        <td></td>
        
        <td ><span>20</span> MOTS CLÉS<br/> <span>3</span> MONTH <button>RENSEIGNEZ-VOUS MAINTENANT</button></td>
        <td ><span>35</span> MOTS CLÉS<br/> <span>3</span> MONTH <button>RENSEIGNEZ-VOUS MAINTENANT</button></td>
        <td ><span>50</span> MOTS CLÉS<br/> <span>3</span> MONTH <button>RENSEIGNEZ-VOUS MAINTENANT</button></td>
    </tr>
    <tr class="header" colspan="5">
        <td>Optimisation de la page</td>
    </tr>
    <tr>
        
        <td>Développement de méta-informations</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Mise en œuvre des balises méta</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Canonisation</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Optimisation du chargement des pages du site Web</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Optimisation des balises d'en-tête</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Nettoyage et optimisation du code HTML</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Structuration et optimisation des liens internes</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>

        <td>Optimisation des balises H des pages</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Optimisation des images et des liens hypertexte</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Robots.Txt Création/Analyse</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Plan du site HTML et XML</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Outils Google pour les webmasters</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Google Analytics</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Résolution des pages mortes</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Résolution des liens brisés</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Optimisation de l'amélioration HTML du webmaster</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>

        <td>Vérification des erreurs de validation W3c</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Optimisation du schéma</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Optimisation des balises ALT</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>

        <td>Création, soumission et authentification de plan de site XML sur</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Analyse des problèmes internes du site Web</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Soumission manuelle au moteur de recherche</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Optimisation et création de nouvelles pages</td>
        
        <td>5</td>
        <td>dix</td>
        <td>15</td>
    </tr>
    <tr>

        <td>Suggestion de structure d'URL</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Examen du contenu du site Web</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Consultation de conception de site Web</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Vérification de la compatibilité mobile</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Analyse et optimisation des liens de pied de page</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Analyse approfondie du site</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>

        <td>Vérification de la duplication du contenu</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Analyse initiale des backlinks</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Vérification des pénalités Google</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Analyse de la concurrence</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    <td>Optimisation hors page</td>
    </tr>
    <tr>
    <td>&nbsp;Création de liens</td>
    </tr>
    <tr>
        
        <td>Soumission manuelle du répertoire</td>
    
        <td>100</td>
        <td>100</td>
        <td>100</td>
    </tr>
    <tr>
        
        <td>Soumission de signet social</td>
        
        <td>80</td>
        <td>80</td>
        <td>80</td>
    </tr>
    <tr>
        
        <td>Soumission d'images</td>
        
        <td>5</td>
        <td>5</td>
        <td>5</td>
    </tr>
    <tr>
    
        <td>Optimisation des listes d'entreprises</td>
        
        <td>dix</td>
        <td>dix</td>
        <td>dix</td>
    </tr>
    <tr>
    <td>Marketing de contenu</td>
    </tr>
    <tr>
        
        <td>Création d'articles</td>
        
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
    
        <td>Syndication d'articles</td>
        
        <td>30</td>
        <td>40</td>
        <td>50</td>
    </tr>
    <tr>
    
        <td>Optimisation de la syndication des articles</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Création de blogs (Blogspot.Com,Livejournal.Com,Wordpress.Com,Tumblr.Com)</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
    
        <td>Syndication de blogs</td>
        
        <td>12</td>
        <td>15</td>
        <td>20</td>
    </tr>
    <tr>
        
        <td>Optimisation de la syndication de blogs</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Création de communiqué de presse</td>
    
        <td>1</td>
        <td>2</td>
        <td>2</td>
    </tr>
    <tr>
        
        <td>Syndication des communiqués de presse</td>
        
        <td>3</td>
        <td>6</td>
        <td>6</td>
    </tr>
    <tr>
        
        <td>Optimisation de la syndication des communiqués de presse</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Marketing de contenu haut de gamme</td>
        
        <td>non</td>
        <td>non</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Infographie Marketing</td>
        
        <td>non</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Soumissions classifiées</td>
        
        <td>50</td>
        <td>60</td>
        <td>80</td>
    </tr>
    <tr>
        
        <td>Création PDF</td>
        
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        
        <td>Syndication PDF</td>
        
        <td>5</td>
        <td>dix</td>
        <td>20</td>
    </tr>
    <tr>
        
        <td>Syndication PPT (fournie par Clinet)</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Création RSS (fournie par Clinet)</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Soumissions RSS</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Création vidéo (fournie par Clinet)</td>
        
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        
        <td>Soumissions vidéo</td>
        
        <td>dix</td>
        <td>20</td>
        <td>30</td>
    </tr>
    <tr>
        
        <td>Marketing vidéo (fourni par Clinet)</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr class="header">
        <td>Optimisation client</td>
    </tr>
    <tr>
        
        <td>Suite des visiteurs en direct</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Optimisation du taux de rebond</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Optimisation du taux de conversion</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Service client de chat en direct</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr class="header">
        <td>Rapport mensuel</td>
    </tr>
    <tr>
        
        <td>Rapport sur le classement des moteurs de recherche</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Rapport Google Analytics</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Rapport de classement des mots clés</td>
    
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
    <tr>
        
        <td>Rapport de lien retour SEO</td>
        
        <td>oui</td>
        <td>oui</td>
        <td>oui</td>
    </tr>
</tbody>
</table>
            </Container>
            {/*End Service Section*/}

            {/*Start Box Info Center Content*/}
            <div className="p-relative section-margin v-dark-head text-center">
                <ParallaxImage src="/assets/img/skills-2.jpg" heightMobile="50vh" heightTable="100vh" overlay={0}/>
                <FadeUpTrigger tag={Container} className="v-middle z-index-1">
                    <h2>People a Lift</h2>
                    <p className="m-w570 mt-20 dsn-auto">
                        When the Escalators Died in Stockholm’s Subway, Reebok Was
                        There to Give People a Lift.Literally
                    </p>
                    <ButtonPopup className="mt-20" href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                </FadeUpTrigger>
            </div>
            {/*End Box Info Center Content*/}

            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
                <HeroSection/>
            </Container>
            {/*End Hero Section*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <TitleCover>Droow</TitleCover>
                <FadeUpTrigger tag={DsnGrid} col={1} rowGap={30} rowGapTablet={20}>
                    <h2 className='title-section border-line-left'>
                        Time Tag Watch.
                    </h2>
                    <h6>
                        Sometimes, we need to check the time, wondering when our work or meeting will finish,
                        without getting caught by others.
                    </h6>
                    <p>
                        To avoid your boss’s staring eye, you should not roll your eyes to check the time. The Time
                        Tag Watch is a consummately appropriate for it. Those tags do the role of the hands of the
                        watch. By rotating the face of the watch not the hands, it gets harder to be damaged. It
                        provides you with experience to feel the time at the end of your finger without damaging
                        your watch.
                    </p>
                    <div className="button-box">
                        <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Team*/}
            <Container className="section-margin dsn-right-container">
                <TitleSection description="our team">
                    The best team ever!
                </TitleSection>
                <Team loop grabCursor/>
            </Container>
            {/*End Team*/}

            <NextPageContent className="section-margin"/>
            <Footer/>

        </>
    );
}

export default Demo2;