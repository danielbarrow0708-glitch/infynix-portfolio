import React from 'react';
import { HeaderBanner, Features, ContactSection } from '../../../components/Agency/Sections';

const AssetManagementPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        category="Asset Management"
        title="Custom Asset Management Software"
        intro="Create investment solutions that boost revenue and ease wealth management. Expertly designed to meet your financial goals."
        image="/img/templates/services/fintech/asset-management.webp"
      />
      <Features
        title="Asset Management Platform Development"
        intro="We develop comprehensive asset management solutions."
        features={[]}
        columns={3}
        backgroundColor="white"
      />
      <ContactSection 
        title="Ready to Build Your Asset Management Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default AssetManagementPage;
