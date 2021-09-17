/* eslint-disable react/style-prop-object */
import { tw } from 'twind';

const socialProofs = [
  {
    title: `Como funciona o curso?`,
    text: `O curso tem a duração de 1 a 2 meses, dependendo do progresso da
    turma, sendo um intensivão de 6 horas por dia, das 9h da manhã até as 16h da
    tarde, com 1h de pausa para o almoço.`,
  },
  {
    title: `Quanto custa?`,
    text: `Sim, é claro que não é gratuito (bom de mais pra ser de graça, não
    é mesmo?), MAS FIQUE CALMO! Você só paga depois que conseguir um emprego na
    área. O valor do curso é de 1 salário seu, parcelado em até 6 vezes. Por
    exemplo, nós conseguimos um emprego para onde seu salário bruto é de
    R$ 3.500,00 e você decida parcelar em 6 vezes. Você pagaria R$ 583,00 por
    mês, durante os próximos 6 meses.`,
  },
  {
    title: `O que acontece se eu não conseguir um emprego?`,
    text: `O curso sai 100% de graça! Isso mesmo, se você não conseguir um
    emprego na área, você não paga um centavo!`,
  },
  {
    title: `Quais as formas de pagamento aceitas?`,
    text: `No momento aceitamos apenas Pix.`,
  },
  {
    title: `Até quando as inscrições ficam abertas??`,
    text: `Até dia 01/10/2021, ou até fecharmos a turma de 4 alunos.`,
  },
  {
    title: `Porque o site é tão mal feito?`,
    text: `Como essa é nossa primeira turma oficial, nós focamos muito mais em
    estruturar um conteúdo de qualidade para formar nossos alunos, então acabou
    não sobrando tempo para fazer um site bonitinho. Sabemos que isso não inspira
    muita confiança, mas o currículo de nossos professores vale mais do que
    qualquer site, isso nós garantimos 😉`,
  },
].map((question, index) => ({
  ...question,
  nro: index + 1,
}));

export const FaqSection = () => (
  <div className={tw(`container mx-auto my-8`)} id="faq">
    <div className={tw(`mb-16 text-center`)}>
      <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
        Curso FullStack Da Techmmunity
      </h4>
      <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Candidate-se!</p>
    </div>
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <iframe
        title="Candidate-se"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdjE3Ypkq74CF1UujIOZQhConrqPzh2XGmktDEZpTyEFrf3wg/viewform?embedded=true"
        width="640"
        height="1800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Carregando…
      </iframe>
    </div>
    <div className={tw(`mb-16 text-center`)}>
      <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>F.A.Q.</h4>
      <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Perguntas Frequentes</p>
    </div>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <section>
        {socialProofs.map((socialProof) => (
          <div className={tw(`relative bg-white`)} key={socialProof.nro}>
            <div className={tw(`pt-10 px-6 md:px-0`)}>
              <h4 className={tw(`text-2xl lg:text-4xl font-bold tracking-tight text-gray-900`)}>
                {`${socialProof.nro}. ${socialProof.title}`}
              </h4>
              <p className={tw(`text-gray-600 text-base`)}>{socialProof.text}</p>
            </div>
          </div>
        ))}
        <div className={tw(`relative bg-white`)}>
          <div className={tw(`pt-10 px-6 md:px-0`)}>
            <h4 className={tw(`text-2xl lg:text-4xl font-bold tracking-tight text-gray-900`)}>
              {`${socialProofs.length}. Tenho mais duvidas, quem pode me ajudar?`}
            </h4>
            <p className={tw(`text-gray-600 text-base`)}>
              Basta enviar uma mensagem para o Henrique{` `}
              <a
                href="https://wa.me/5511978569934"
                target="_blank"
                rel="noreferrer"
                className={tw(`text-indigo-600 underline`)}
              >
                no Whatsapp (+5511978569934)
              </a>
              {` `}
              ou
              {` `}
              <a
                href="https://discord.com/channels/@me/705572674713157684"
                target="_blank"
                rel="noreferrer"
                className={tw(`text-indigo-600 underline`)}
              >
                no Discord (razal#0894)
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);
