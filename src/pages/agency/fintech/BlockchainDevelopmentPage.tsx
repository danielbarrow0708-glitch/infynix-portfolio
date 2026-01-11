import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const BlockchainDevelopmentPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Blockchain"
        title="Custom Blockchain Development Services"
        intro="Everything you need to build blockchain products in one place: New blockchains, smart contracts, tokens, NFT, cryptocurrency exchanges."
        image="/img/templates/services/fintech/blockchain-development.webp"
      />
      <Features
        title="Blockchain Development"
        intro="We build comprehensive blockchain solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Blockchain Solution?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default BlockchainDevelopmentPage;
