import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const DigitalWalletPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Digital Wallet"
        title="Digital Wallet App Development Services"
        intro="Secure, trusted mobile and web e-wallet solutions for businesses & their clients. Convenient payments at your fingertips!"
        image="/img/templates/services/fintech/digital-wallet.webp"
      />
      <Features
        title="Digital Wallet Development"
        intro="We develop secure and user-friendly digital wallet applications."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Digital Wallet?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default DigitalWalletPage;
