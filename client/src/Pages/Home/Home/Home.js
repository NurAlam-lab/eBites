import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CookSpotlight from '../CookSpotlight/CookSpotlight';
import Foodies from '../Foodies/Foodies';
import JoinWithUs from '../JoinWithUs/JoinWithUs';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import ToSellFood from '../ToSellFood/ToSellFood';
import WhyeBites from '../WhyeBites/WhyeBites';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <ToSellFood></ToSellFood>
            <CookSpotlight></CookSpotlight>
            <WhyeBites></WhyeBites>
            <JoinWithUs></JoinWithUs>
            <Foodies></Foodies>

        </div>
    );
};

export default Home;