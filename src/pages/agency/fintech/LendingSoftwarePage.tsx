import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const LendingSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Lending Software"
        title="Custom Lending Software Development"
        intro="Streamline lending operations and empower borrowers with custom loan origination systems, credit risk management, and tracking systems."
        image="/img/templates/services/fintech/lending-software.webp"
      />
      <Features
        title="Lending Platform Development"
        intro="We develop comprehensive lending software solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Lending Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default LendingSoftwarePage;
