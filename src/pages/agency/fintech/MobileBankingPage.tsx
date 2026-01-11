import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const MobileBankingPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Mobile Banking"
        title="Custom Mobile Banking App Development"
        intro="Build a cutting-edge mobile banking app with seasoned fintech developers and UX designers. Leverage our decade of experience."
        image="/img/templates/services/fintech/mobile-banking.webp"
      />
      <Features
        title="Mobile Banking App Development"
        intro="We create secure and user-friendly mobile banking applications."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Mobile Banking App?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default MobileBankingPage;
