import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const InsuranceSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Insurance Software"
        title="Insurance Software Development Services"
        intro="Tailored insurance software solutions, optimizing underwriting, claims processing, policy management, and risk assessment."
        image="/img/templates/services/fintech/insurance-software.webp"
      />
      <Features
        title="Insurance Platform Development"
        intro="We develop comprehensive insurance software solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Insurance Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default InsuranceSoftwarePage;
