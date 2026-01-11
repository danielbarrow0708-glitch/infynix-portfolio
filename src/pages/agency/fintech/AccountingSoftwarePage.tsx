import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const AccountingSoftwarePage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Accounting Software"
        title="Accounting Software Development Services"
        intro="Save time and money by automating bookkeeping processes in your business. General ledger solutions, inventory management platforms & more."
        image="/img/templates/services/fintech/accounting-software.webp"
      />
      <Features
        title="Accounting Platform Development"
        intro="We develop comprehensive accounting software solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Accounting Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default AccountingSoftwarePage;
