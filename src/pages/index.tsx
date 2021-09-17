import { NextSeo } from 'next-seo';
import Navigation from '@/components/navigation';
import { DefaultLayout } from '@/layouts/default';
import Header from '@/page-components/index/header';
import VideoSection from '@/page-components/index/video-section';
import ListSection from '@/page-components/index/list-section';
import FeatureSection from '@/page-components/index/feature-section';
import SocialProof from '@/page-components/index/social-proof';
import PricingTable from '@/page-components/index/pricing-table';

export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo
        title="Techmmunity - Encontre talentos para seu negocio"
        description="Encontre os profissionais com o match perfeito para o seu negocio!"
      />
      <Navigation />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <SocialProof />
        <PricingTable />
      </main>
    </DefaultLayout>
  );
}
