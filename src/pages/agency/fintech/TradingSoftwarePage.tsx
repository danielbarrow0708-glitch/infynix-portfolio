import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const TradingSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Trading Software"
        title="Trading Software Development Services"
        intro="Craft intuitive trading platforms for diverse financial assets, providing seamless transactions and real-time analytics to boost trading experiences."
        image="/img/templates/services/fintech/trading-software.webp"
      />
      <Features
        title="Trading Platform Development"
        intro="We build comprehensive trading solutions for various financial markets."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Trading Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default TradingSoftwarePage;
