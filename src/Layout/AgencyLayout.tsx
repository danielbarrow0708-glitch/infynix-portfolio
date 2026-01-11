import React from 'react';
import { Outlet } from 'react-router-dom';
import AgencyHeader from '../components/Agency/AgencyHeader';
import AgencyFooter from '../components/Agency/AgencyFooter';

const AgencyLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <AgencyHeader />
      <main>
        <Outlet />
      </main>
      <AgencyFooter />
    </div>
  );
};

export default AgencyLayout;

