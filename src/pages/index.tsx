import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Techmmunity - Encontre talentos para seu negocio"
        description="Encontre os profissionais com o match perfeito para o seu negocio!"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        {/* <CasesSection /> */}
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
