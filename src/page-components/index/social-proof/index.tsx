import { tw } from 'twind';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Thiago Moraes de Souza`,
    company: `Plin Soluções`,
    image: `/images/thiago.jpeg`,
    text: `TODO`,
  },
  {
    name: `João Gabriel`,
    company: `Pontaltech`,
    image: `/images/joao.jpeg`,
    text: `TODO`,
  },
  {
    name: `Diogo Mendes`,
    company: `B2ML Sistemas`,
    image: `/images/diogo.jpeg`,
    text: `TODO`,
  },
];

const SocialProof = () => (
  <div className={tw(`container mx-auto my-8`)} id="depoimentos">
    <div className={tw(`max-w-7xl mx-auto`)}>
      <section>
        {socialProofs.map((socialProof) => (
          <div className={tw(`relative bg-white`)}>
            <Quote className={tw(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`)} />
            <div className={tw(`pt-20 px-6 md:px-0`)}>
              <p className={tw(`text-gray-600 text-base pb-6`)}>{socialProof.text}</p>
              <div className={tw(`flex items-center justify-between`)}>
                <div className={tw(`flex items-center pb-12`)}>
                  <div className={tw(`h-12 w-12`)}>
                    <img
                      src={socialProof.image}
                      alt={socialProof.name}
                      className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                      height={48}
                      width={48}
                    />
                  </div>
                  <p className={tw(`text-gray-600 font-bold ml-3`)}>
                    {socialProof.name} <br />
                    <span className={tw(`text-gray-600 text-base font-light`)}>{socialProof.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default SocialProof;
