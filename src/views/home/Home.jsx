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
            <Footer/>

        </React.Fragment>

    );
}


export default MainDemo;