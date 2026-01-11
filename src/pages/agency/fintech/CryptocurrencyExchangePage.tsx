import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const CryptocurrencyExchangePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Cryptocurrency Exchange"
        title="Cryptocurrency Exchange Development"
        intro="Build secure and scalable cryptocurrency exchanges with advanced trading features, liquidity management, and regulatory compliance."
        image="/img/templates/services/fintech/crypto-exchange.webp"
      />
      <Features
        title="Cryptocurrency Exchange Development"
        intro="We build secure and scalable cryptocurrency exchange platforms."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Cryptocurrency Exchange?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default CryptocurrencyExchangePage;
