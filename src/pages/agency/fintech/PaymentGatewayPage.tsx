import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const PaymentGatewayPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Payment Gateway"
        title="Payment Gateway Integration Services"
        intro="Protect your business with our secure payment gateway integration services. Accept payments from all major credit cards and debit cards."
        image="/img/templates/services/fintech/payment-gateway.webp"
      />
      <Features
        title="Payment Gateway Development"
        intro="We develop secure payment gateway solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Integrate Payment Gateway?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default PaymentGatewayPage;
