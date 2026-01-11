import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const FinancialSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Financial Software"
        title="Custom Financial Software Development"
        intro="AI, no-code, low-code - we create custom financial software solutions that match the needs of both fintech startups and well-established financial institutions."
        image="/img/templates/services/fintech/financial-software.webp"
      />
      <Features
        title="Financial Platform Development"
        intro="We develop custom financial software solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Financial Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default FinancialSoftwarePage;
