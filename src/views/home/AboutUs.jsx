import React from "react";


import {Card, Container} from "react-bootstrap";
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
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../languageSelect";
import CheckIcon from '@mui/icons-material/Check';
import HeaderNormal from "../../components/header/HeaderNormalTow";

const MainDemo = () => {
  const { t } = useTranslation();

    return (
        <React.Fragment>

            <Helmet>
                <title>Althea corp</title>
            </Helmet>

            <HeaderNormal className="background-section">
            <TitleSection description={t("about-us")}>
                {t("TitleSlide2")}
                </TitleSection>
            </HeaderNormal>


                        {/*Start Box Info With Image*/}
                        <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                            {t("about-title")}
                            </h2>
                            <h6 ref={ref}>

                            </h6>
                            <p ref={ref}>
                            {t("about")}
                            </p>
                            <p ref={ref}>
                            {t("about-2")}
                            </p>
                            <p ref={ref}>
                            {t("about-3")}
                            </p>
                            {/*
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>*/}

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                            {t("choose-us-title")}
                            </h2>
                            <h6 ref={ref}>

                            </h6>
                            <p ref={ref}>
                            {t("choose-us")}
                            </p>
                            {/*
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>*/}

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                            {t("how-we-do-title")}
                            </h2>
                            <h6 ref={ref}>

                            </h6>
                            <p ref={ref}>
                            {t("how-we-do")}
                            </p>

                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("how-we-do-1")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("how-we-do-2")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("how-we-do-3")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("how-we-do-4")}
                            </p>
                            {/*
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>*/}

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}


                        {/*Start Box Info With Image*/}
                        <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                            {t("core-values-title")}
                            </h2>
                            <h6 ref={ref}>

                            </h6>
                            <p ref={ref}>
                            {t("core-values")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("core-value-1")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("core-value-2")}
                            </p>
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("core-value-3")}
                            </p>
  
                            <p ref={ref}><CheckIcon style={{marginBottom:"-5px"}}></CheckIcon>
                            {t("core-value-4")}
                            </p>
                            {/*
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>*/}

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

                        {/*Start Box Info With Image*/}
                        <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                            {t("what-clients-get-title")}
                            </h2>
                            <h6 ref={ref}>

                            </h6>

                            <p ref={ref}>
                            {t("what-clients-get")}
                            </p>

                            <p ref={ref}>
                            {t("what-clients-get-2")}
                            </p>
                            {/*
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>*/}

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Testimonial*
            <Container className="section-margin">
                <Testimonial autoHeight loop grabCursor title="Feedback from our clients."/>
            </Container>
            {/*End Testimonial*/}

            {/*Start Blog*
            <Container className="section-margin dsn-right-container">
                <TitleSection description="Latest News">
                    Latest & Greatest Post
                </TitleSection>
                <BlogSwiper grabCursor loop autoHeight/>
            </Container>
            {/*End Blog*/}

            {/*Start Brand*
            <Container className="section-margin">
                <TitleSection description="Our clients">
                    Your successful, our <br/> reputation
                </TitleSection>
                <WebDev
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            {/* 
            <NextPageContent className="section-margin"/>
            */}
            <Footer/>

        </React.Fragment>

    );
}


export default MainDemo;