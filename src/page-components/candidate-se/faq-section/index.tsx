import { tw } from 'twind';

const socialProofs = [
  {
    title: `Como faço para me candidatar?`,
    text: `Basta preencher o formulário nesse site e aguardar nosso contato: `,
    url: `https://forms.gle/Vy2deWjnebt6FAaW9`,
  },
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
      <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>F.A.Q.</h4>
      <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Perguntas Frequentes</p>
    </div>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <section>
        {socialProofs.map((socialProof) => (
          <div className={tw(`relative bg-white`)}>
            <div className={tw(`pt-10 px-6 md:px-0`)}>
              <h4 className={tw(`text-2xl lg:text-4xl font-bold tracking-tight text-gray-900`)}>
                {`${socialProof.nro}. ${socialProof.title}`}
              </h4>
              <p className={tw(`text-gray-600 text-base`)}>
                {socialProof.text}
                {socialProof.url && (
                  <a
                    href={socialProof.url}
                    target="_blank"
                    rel="noreferrer"
                    className={tw(`text-indigo-600 underline`)}
                  >
                    {socialProof.url}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  </div>
);
