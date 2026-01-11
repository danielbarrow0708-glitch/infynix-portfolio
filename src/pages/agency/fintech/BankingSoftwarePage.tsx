import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const BankingSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Banking Software"
        title="Custom Banking Software Development"
        intro="Modernize banking services through mobile apps and blockchain integration. Improve customer experiences while maintaining security."
        image="/img/templates/services/fintech/banking-software.webp"
      />
      <Features
        title="Banking Platform Development"
        intro="We build modern banking solutions with security and compliance."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Banking Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default BankingSoftwarePage;
