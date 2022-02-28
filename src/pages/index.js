import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import HappyCustomer from 'sections/happy-customer.js';
import Blog from 'sections/blog';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Launchart has 3 founders experienced in Web3 and NFT Trading"
          description="All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects."
        />
        <Banner />
        {/* <Services />
        <UltimateFeatures /> */}
        <HappyCustomer/>
        <WorkHard />
        <Blog />
       
      </Layout>
    </ThemeProvider>
  );
}
