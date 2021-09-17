import { NextSeo } from 'next-seo';
import { DefaultLayout } from '@/layouts/default';
import { FaqSection } from '@/page-components/candidate-se/faq-section';

export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo
        title="Techmmunity - Candidate-se ao nosso curso!"
        description="Agarre a chance de mudar de vida e conseguir um emprego na area dos seus sonhos!"
      />
      <main>
        <FaqSection />
      </main>
    </DefaultLayout>
  );
}
