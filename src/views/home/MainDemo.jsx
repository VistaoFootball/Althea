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


const MainDemo = () => {
  const { t } = useTranslation();

    return (
        <React.Fragment>

            <Helmet>
                <title>Althea corp</title>
            </Helmet>

            {/*Start Slider Portfolio*/}
            <SliderPortfolio tag="header" className="mb-section"></SliderPortfolio>
            {/*End Slider Portfolio*/}
  {/*Start Hero Section*
            <Container className="section-margin dsn-right-container">
                <HeroSection/>
            </Container>
            {/*End Hero Section*/}

            {/*Start Service Section*
            <Container className="section-margin">
                <TitleSection description="Our Services">
                    New Branding Agency
                </TitleSection>
                <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30}/>
            </Container>
            {/*End Service Section*/}

            {/*Start Box Right Info*
            <HeroSectionTow className="section-margin text-center"/>
            {/*End Box Right Info*/}


            {/*Start Portfolio Swiper*
            <Container as={TitleSection} description="Our Work">
                Creative Portfolio Designs
            </Container>
            <PortfolioSwiper grabCursor/>
            {/*End Portfolio Swiper*/}

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