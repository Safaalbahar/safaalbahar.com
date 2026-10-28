
import React from 'react';
import { Helmet } from 'react-helmet';
import PremiumHeroBanner from '@/components/PremiumHeroBanner';
import AnimatedProductCards from '@/components/AnimatedProductCards';
import B2BAndB2CServices from '@/components/B2BAndB2CServices';
import DirectImporterFeature from '@/components/DirectImporterFeature';
import CustomerReachSection from '@/components/CustomerReachSection';
import AudienceSupportSection from '@/components/AudienceSupportSection';
import CustomerCareTeam from '@/components/CustomerCareTeam';
import CompanyProfileSection from '@/components/CompanyProfileSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Safa Al Bahar Trading Company | Global Food Service & Distribution Solutions</title>
        <meta name="description" content="Safa Al Bahar Trading Company is a leading direct food importer and premium supply partner for HORECA, hotels, restaurants, and catering across Saudi Arabia." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PremiumHeroBanner />
        <AnimatedProductCards />
        <DirectImporterFeature />
        <B2BAndB2CServices />
        <CustomerReachSection />
        <AudienceSupportSection />
        <CompanyProfileSection />
        <CustomerCareTeam />
      </div>
    </>
  );
};

export default Home;
