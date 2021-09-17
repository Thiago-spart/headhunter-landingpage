import Head from 'next/head';
import { tw } from 'twind';
import Footer from '@/components/footer';

interface IProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>{children}</div>
    <Footer />
  </div>
);
