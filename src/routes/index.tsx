import { createBrowserRouter } from "react-router-dom";
import AgencyLayout from "@/Layout/AgencyLayout";
import NotFound from "@pages/not-found";

// Agency Pages
import HomePage from "@pages/agency/HomePage";
import AIDevelopmentPage from "@pages/agency/AIDevelopmentPage";
import ContactPage from "@pages/agency/ContactPage";
import WebDevelopmentPage from "@pages/agency/WebDevelopmentPage";
import MobileAppDevelopmentPage from "@pages/agency/MobileAppDevelopmentPage";
import CustomSoftwarePage from "@pages/agency/CustomSoftwarePage";
import SaaSDevelopmentPage from "@pages/agency/SaaSDevelopmentPage";
import DatabaseDevelopmentPage from "@pages/agency/DatabaseDevelopmentPage";
import FintechDevelopmentPage from "@pages/agency/FintechDevelopmentPage";
import UIUXDesignPage from "@pages/agency/UIUXDesignPage";
import PortfolioPage from "@pages/agency/PortfolioPage";
import SinglePortfolioPage from "@pages/agency/SinglePortfolioPage";
import OurTechPage from "@pages/agency/OurTechPage";
import AboutPage from "@pages/agency/AboutPage";
import MissionVisionPage from "@pages/agency/MissionVisionPage";
import TeamPage from "@pages/agency/TeamPage";
import CompanyValuesPage from "@pages/agency/CompanyValuesPage";
import DevelopmentProcessPage from "@pages/agency/DevelopmentProcessPage";
import IndustryAwardsPage from "@pages/agency/IndustryAwardsPage";

// Fintech Service Pages
import TradingSoftwarePage from "@pages/agency/fintech/TradingSoftwarePage";
import InsuranceSoftwarePage from "@pages/agency/fintech/InsuranceSoftwarePage";
import BankingSoftwarePage from "@pages/agency/fintech/BankingSoftwarePage";
import FinancialSoftwarePage from "@pages/agency/fintech/FinancialSoftwarePage";
import MobileBankingPage from "@pages/agency/fintech/MobileBankingPage";
import AccountingSoftwarePage from "@pages/agency/fintech/AccountingSoftwarePage";
import BlockchainDevelopmentPage from "@pages/agency/fintech/BlockchainDevelopmentPage";
import AssetManagementPage from "@pages/agency/fintech/AssetManagementPage";
import NFTTradingPage from "@pages/agency/fintech/NFTTradingPage";
import LendingSoftwarePage from "@pages/agency/fintech/LendingSoftwarePage";
import PaymentGatewayPage from "@pages/agency/fintech/PaymentGatewayPage";
import CryptocurrencyExchangePage from "@pages/agency/fintech/CryptocurrencyExchangePage";
import DigitalWalletPage from "@pages/agency/fintech/DigitalWalletPage";

const router = createBrowserRouter([
  // Agency Website Routes
  {
    element: <AgencyLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/ai-development",
        element: <AIDevelopmentPage />,
      },
      {
        path: "/web-development",
        element: <WebDevelopmentPage />,
      },
      {
        path: "/mobile-app-development",
        element: <MobileAppDevelopmentPage />,
      },
      {
        path: "/custom-software-development",
        element: <CustomSoftwarePage />,
      },
      {
        path: "/saas-development",
        element: <SaaSDevelopmentPage />,
      },
      {
        path: "/database-development",
        element: <DatabaseDevelopmentPage />,
      },
      {
        path: "/fintech-software-development",
        element: <FintechDevelopmentPage />,
      },
      // Fintech Service Routes
      {
        path: "/trading-software-development-services",
        element: <TradingSoftwarePage />,
      },
      {
        path: "/fintech/custom-insurance-software-development-services",
        element: <InsuranceSoftwarePage />,
      },
      {
        path: "/fintech/banking-software-development",
        element: <BankingSoftwarePage />,
      },
      {
        path: "/fintech/custom-financial-software-development-services",
        element: <FinancialSoftwarePage />,
      },
      {
        path: "/fintech/mobile-banking-app-development",
        element: <MobileBankingPage />,
      },
      {
        path: "/fintech/accounting-software-development-services",
        element: <AccountingSoftwarePage />,
      },
      {
        path: "/custom-blockchain-development",
        element: <BlockchainDevelopmentPage />,
      },
      {
        path: "/fintech/wealth-investment-management-software",
        element: <AssetManagementPage />,
      },
      {
        path: "/custom-nft-trading-platforms-development",
        element: <NFTTradingPage />,
      },
      {
        path: "/fintech/lending-software-development-services",
        element: <LendingSoftwarePage />,
      },
      {
        path: "/fintech/digital-wallet-app-development",
        element: <DigitalWalletPage />,
      },
      {
        path: "/fintech/payment-gateway-integration",
        element: <PaymentGatewayPage />,
      },
      {
        path: "/fintech/cryptocurrency-exchange-development",
        element: <CryptocurrencyExchangePage />,
      },
                   {
               path: "/ui-ux",
               element: <UIUXDesignPage />,
             },
             {
               path: "/portfolio",
               element: <PortfolioPage />,
             },
             {
               path: "/portfolio/:slug",
               element: <SinglePortfolioPage />,
             },
             {
               path: "/our-tech",
               element: <OurTechPage />,
             },
             {
               path: "/about",
               element: <AboutPage />,
             },
             {
               path: "/mission-vision",
               element: <MissionVisionPage />,
             },
             {
               path: "/team",
               element: <TeamPage />,
             },
             {
               path: "/company-values",
               element: <CompanyValuesPage />,
             },
             {
               path: "/development-process",
               element: <DevelopmentProcessPage />,
             },
             {
               path: "/industry-awards",
               element: <IndustryAwardsPage />,
             },
             {
               path: "/contact",
               element: <ContactPage />,
             },
             {
               path: "*",
               element: <NotFound />,
             },
    ],
  },
]);

export default router; 