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
            <TitleSection description="Services">
                {t("services-title")}
                </TitleSection>
            </HeaderNormal>

            {/*Start Slider Portfolio*
            <SliderPortfolio tag="header" className="mb-section"/>
            {/*End Slider Portfolio*/}


            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
            </Container>
            {/*End Hero Section*/}


            {/*Start Service Section*/}
            <Container className="section-margin">
                <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30}/>
            </Container>
            {/*End Service Section*/}

            {/*Start Box Right Info
            <HeroSectionTow className="section-margin text-center"/>
            {/*End Box Right Info*/}


            {/*Start Portfolio Swiper*
            <Container as={TitleSection} description="Our Work">
                Creative Portfolio Designs
            </Container>
            <PortfolioSwiper grabCursor/>
            {/*End Portfolio Swiper*/}


            {/*Start Box Info With Image*
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <TitleCover>Droow</TitleCover>
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                                Time Tag Watch.
                            </h2>
                            <h6 ref={ref}>
                                Sometimes, we need to check the time, wondering when our work or meeting will finish,
                                without getting caught by others.
                            </h6>
                            <p ref={ref}>
                                To avoid your boss’s staring eye, you should not roll your eyes to check the time. The
                                Time
                                Tag Watch is a consummately appropriate for it. Those tags do the role of the hands of
                                the
                                watch. By rotating the face of the watch not the hands, it gets harder to be damaged. It
                                provides you with experience to feel the time at the end of your finger without damaging
                                your watch.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                            </div>

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}



            <NextPageContent className="section-margin"/>
            <Footer/>

        </React.Fragment>

    );
}


export default MainDemo;