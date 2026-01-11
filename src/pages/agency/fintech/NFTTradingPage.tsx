import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const NFTTradingPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="NFT Trading"
        title="NFT Trading Platforms Development"
        intro="Lead in the realm of digital assets with secure, scalable, and user-centric NFT exchange platforms. Liquidity, performance, and regulatory adherence."
        image="/img/templates/services/fintech/nft-trading.webp"
      />
      <Features
        title="NFT Trading Platform Development"
        intro="We build secure and scalable NFT trading platforms."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your NFT Trading Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default NFTTradingPage;
