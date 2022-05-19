import React from "react";


import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";


import SliderPortfolio from "../../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../../components/hero-section/HeroSection";
import ServiceOne from "../../components/services/ServiceOne";
import TitleSection from "../../components/heading/TitleSection";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogSwiper from "../../components/blog/BlogSwiper";
import WebDev from "../../components/brand-client/WebDev";
import MobileDev from "../../components/brand-client/MobileDev";
import FrontendDev from "../../components/brand-client/FrontendDev";
import FullstackDev from "../../components/brand-client/FullstackDev";
import BackendDev from "../../components/brand-client/BackendDev";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
import HeaderNormal from "../../components/header/HeaderNormal";
import { useTranslation } from "react-i18next";

const MainDemo = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>

            <Helmet>
                <title>Althea corp </title>
            </Helmet>

            <HeaderNormal className="background-section">
            <TitleSection description="technologies">
            {t("techno-title")}
                </TitleSection>
                <p style={{"font-size":"18px"}}>
                {t("techno-1")}
                </p>
                <p style={{"font-size":"18px"}}>
                {t("techno-2")}
                </p>
            </HeaderNormal>

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("web-dev")}>
                </TitleSection>
                <WebDev
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("mobile")}>
                </TitleSection>
                <MobileDev
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}            

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("backend")}>
                </TitleSection>
                <FrontendDev
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}            

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("full-stack")}>
                </TitleSection>
                <FullstackDev
                    col={4}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}            

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("backend")}>
                </TitleSection>
                <BackendDev
                    col={5}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}  

            <NextPageContent className="section-margin"/>
            <Footer/>

        </React.Fragment>

    );
}


export default MainDemo;