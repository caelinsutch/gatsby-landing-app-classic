import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../common/theme';
import { ResetCSS } from '../common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/Main/Navbar';
import Banner from '../containers/Main/Banner';
import Customer from '../containers/Main/Customer';
import KeyFeatures from '../containers/Main/KeyFeatures';
import AppSlider from '../containers/Main/AppSlider';
import Features from '../containers/Main/Features';
import DesignedAndBuilt from '../containers/Main/DesignedAndBuilt';
import FeatureTab from '../containers/Main/FeatureTab';
import PricingPolicy from '../containers/Main/PricingPolicy';
import Testimonial from '../containers/Main/Testimonial';
import Faq from '../containers/Main/Faq';
import JoinTrail from '../containers/Main/JoinTrail';
import Footer from '../containers/Main/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/Main/mainStyle';

import SEO from '../components/seo';

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="App Classic" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/*<Customer />*/}
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            {/*<Testimonial />*/}
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
