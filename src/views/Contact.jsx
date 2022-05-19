import React from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, {optionAltheaMap} from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'Contact',
    description: "",
}

function Contact(props) {



    const center = {lat: 48.578400795751236, lng: 7.732016368872886};

    return (
        <React.Fragment>

            <Helmet>
                <title>Althea - Contact</title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Map*/}
            <Map
                googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                defaultZoom={10}
                options={optionAltheaMap}
                height="80vh"
                defaultCenter={center}
                showMarker
            />

            {/*Start Contact Form && Info Box*/}
            <Container className="section-margin">
                <DsnGrid col={1} colTablet={1}>
                    <InfoBox className="background-section p-30"/>
                    {/*<ContactForm/>*/}
                </DsnGrid>
            </Container>
            <Footer/>


        </React.Fragment>
    );
}

export default Contact;