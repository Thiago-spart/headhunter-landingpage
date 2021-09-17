import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
      <p className={tw(`text-4xl text-indigo-500 font-bold`)}>TECHMMUNITY</p>
    </div>
  </footer>
);

export default Footer;
