export default function RelatorioSemanalUltra() {
  const campanhas = [
    {
      nome: "CADASTRO TODOS OS VÍDEOS",
      objetivo: "Geração de leads via formulário",
      destaque: "Leads mais qualificados",
      leads: 73,
      custoPorLead: "R$ 22,55",
      orcamentoDiario: "R$ 150,00",
      valorInvestido: "R$ 1.646,09",
      impressoes: "39.959",
      alcance: "22.059",
      contatosMensagem: 21,
      novosContatos: 17,
      analise: [
        "Bom desempenho na geração de leads via formulário.",
        "Volume de conversões consistente com o investimento realizado.",
        "Indica público com interesse real, já que o preenchimento do formulário exige maior intenção.",
        "Estrutura sólida para captação de leads mais qualificados.",
      ],
      recomendacoes: [
        "Manter a estrutura atual, dado o bom desempenho.",
        "Testar pequenas variações de criativos para ampliar volume.",
        "Avaliar otimizações pontuais no formulário sem perder qualidade do lead.",
      ],
    },
    {
      nome: "Nova | MSG | Wpp | LL — Cópia",
      objetivo: "Conversas iniciadas via WhatsApp",
      destaque: "Volume e escala",
      resultados: 350,
      custoPorResultado: "R$ 15,08",
      valorInvestido: "R$ 5.278,15",
      impressoes: "168.612",
      alcance: "74.345",
      contatosMensagem: 404,
      novosContatos: 334,
      analise: [
        "Forte volume de interações e alcance expressivo.",
        "Alto número de novos contatos gerados.",
        "Estratégia eficaz para iniciar conversas e ampliar a base de potenciais clientes.",
        "Boa performance em escala.",
      ],
      recomendacoes: [
        "Manter e escalar gradualmente o investimento.",
        "Criar fluxos de atendimento para qualificação dos contatos.",
        "Explorar respostas rápidas e automações para ganho de eficiência.",
      ],
    },
  ];

  const cardsResumo = [
    {
      titulo: "Leads gerados",
      valor: "73",
      apoio: "Campanha de cadastro",
    },
    {
      titulo: "Conversas iniciadas",
      valor: "350",
      apoio: "Campanha de mensagens",
    },
    {
      titulo: "Novos contatos",
      valor: "351",
      apoio: "Soma das duas campanhas",
    },
    {
      titulo: "Investimento total",
      valor: "R$ 6.924,24",
      apoio: "Período analisado",
    },
  ];

  const insights = [
    "A campanha de cadastro demonstra boa capacidade de geração de leads qualificados.",
    "O modelo de formulário contribui para captar usuários com maior nível de interesse.",
    "A campanha de mensagens apresenta alto engajamento e volume de contatos iniciados.",
    "As duas campanhas cumprem bem seus objetivos dentro de estratégias diferentes e complementares.",
  ];

  const recomendacoesGerais = [
    "Preservar a campanha de cadastro como base de captação qualificada.",
    "Escalar a campanha de mensagens com controle de atendimento para não perder oportunidade.",
    "Organizar o funil comercial para separar contato iniciado de lead realmente aproveitado.",
    "Acompanhar semanalmente custo, volume, qualidade e evolução do atendimento comercial.",
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#57595d]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="relative mb-8 overflow-hidden rounded-[36px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f97316]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-[#9ca3af]/10 blur-3xl" />

          <div className="relative grid gap-8 p-8 md:grid-cols-[1.35fr,0.85fr] md:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <BrandMark />
                <div>
                  <div className="text-3xl font-light tracking-tight md:text-5xl">
                    <span className="font-extrabold text-[#f97316]">ultra</span>
                    <span className="font-light text-[#8f949f]">implantes</span>
                  </div>
                  <div className="text-sm text-[#6b7280] md:text-base">
                    Tratamentos Odontológicos
                  </div>
                </div>
              </div>

              <div className="mb-4 inline-flex items-center rounded-full border border-[#f97316]/15 bg-[#fff4ec] px-4 py-1.5 text-sm font-medium text-[#f97316]">
                Relatório semanal • Osasco
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#4b5563] md:text-5xl">
                Desempenho das campanhas com leitura executiva clara, elegante e alinhada à marca.
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#6b7280] md:text-lg">
                Este painel reúne resultados, análise e próximos passos das campanhas ativas,
                mantendo uma apresentação mais premium para uso interno e para reuniões estratégicas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-[28px] border border-[#f97316]/10 bg-gradient-to-br from-[#fff7f1] to-white p-6">
                <p className="text-sm text-[#f97316]">Leitura principal</p>
                <p className="mt-2 text-2xl font-semibold text-[#4b5563]">Qualidade e escala convivendo bem</p>
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  A campanha de cadastro reforça intenção real. A campanha de mensagens amplia presença e volume de contatos.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#5b6068] p-6 text-white">
                <p className="text-sm text-white/70">Posicionamento</p>
                <p className="mt-2 text-2xl font-semibold">Base sólida para crescimento</p>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  O momento é de preservar o que performa, refinar abordagem comercial e aumentar eficiência no atendimento.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cardsResumo.map((card) => (
            <div
              key={card.titulo}
              className="rounded-[28px] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-[#f97316]" />
              <p className="text-sm font-medium text-[#8f949f]">{card.titulo}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-[#4b5563]">{card.valor}</p>
              <p className="mt-2 text-sm text-[#6b7280]">{card.apoio}</p>
            </div>
          ))}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-2">
          {campanhas.map((campanha) => (
            <article
              key={campanha.nome}
              className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
            >
              <div className="border-b border-black/5 bg-gradient-to-r from-[#fff7f1] to-white px-7 py-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#f97316] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {campanha.objetivo}
                  </span>
                  <span className="rounded-full bg-[#edf0f3] px-3 py-1 text-xs font-medium text-[#6b7280]">
                    {campanha.destaque}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#4b5563]">{campanha.nome}</h2>
              </div>

              <div className="p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {campanha.leads !== undefined && (
                    <MetricCard label="Leads gerados" value={String(campanha.leads)} />
                  )}
                  {campanha.resultados !== undefined && (
                    <MetricCard label="Resultados" value={String(campanha.resultados)} />
                  )}
                  {campanha.custoPorLead && (
                    <MetricCard label="Custo por lead" value={campanha.custoPorLead} />
                  )}
                  {campanha.custoPorResultado && (
                    <MetricCard label="Custo por resultado" value={campanha.custoPorResultado} />
                  )}
                  {campanha.orcamentoDiario && (
                    <MetricCard label="Orçamento diário" value={campanha.orcamentoDiario} />
                  )}
                  <MetricCard label="Valor investido" value={campanha.valorInvestido} />
                  <MetricCard label="Impressões" value={campanha.impressoes} />
                  <MetricCard label="Alcance" value={campanha.alcance} />
                  <MetricCard
                    label="Contatos por mensagem"
                    value={String(campanha.contatosMensagem)}
                  />
                  <MetricCard label="Novos contatos" value={String(campanha.novosContatos)} />
                </div>

                <div className="mt-7 grid gap-5 lg:grid-cols-2">
                  <div className="rounded-[24px] bg-[#f7f8fa] p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8f949f]">
                      Análise
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5f6670]">
                      {campanha.analise.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[#f97316]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] bg-[#fff5ee] p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f97316]">
                      Recomendações
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5f6670]">
                      {campanha.recomendacoes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[#f97316]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-[1fr,1fr]">
          <div className="rounded-[32px] bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-[#f97316]" />
              <h2 className="text-2xl font-semibold tracking-tight text-[#4b5563]">Principais insights</h2>
            </div>

            <div className="grid gap-4">
              {insights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[22px] border border-black/5 bg-[#fafafa] p-4"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#f97316] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-[#5f6670]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#5b6068] to-[#717784] p-7 text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-3">
                <BrandMark small light />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Direcionamento estratégico</h2>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-white/78">
              O desenho ideal para a próxima semana é simples: manter conversão, melhorar tratamento dos contatos e organizar o funil para ganho real de resultado comercial.
            </p>

            <div className="mt-6 space-y-4">
              {recomendacoesGerais.map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-white/92">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="rounded-[30px] border border-[#f97316]/15 bg-white px-6 py-5 text-sm text-[#6b7280] shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
          Apresentação formatada com linguagem visual inspirada na identidade da Ultra Implantes, usando a base cinza clara, cinza institucional e laranja da marca.
        </footer>
      </div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-[22px] border border-black/5 bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
      <p className="text-sm text-[#8f949f]">{label}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-[#4b5563]">{value}</p>
    </div>
  );
}

function BrandMark({ small = false, light = false }) {
  const size = small ? 28 : 54;
  const orange = light ? "#ffffff" : "#f97316";
  const gray = light ? "rgba(255,255,255,0.85)" : "#9ca3af";

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="34" cy="11" r="7" fill={orange} />
      <path
        d="M18 18.5C10.5 26.5 8.5 38 12.2 48.5C16.5 60.7 28 68 40.5 67.2C50 66.6 58.4 62 64 54.7L50.4 41.1C47.5 44.9 43 47.4 38 47.7C29.7 48.3 22 43.4 19.1 35.5C17.2 30.1 18 24.3 21.1 20.1L18 18.5Z"
        fill={gray}
        transform="translate(-6 -6)"
      />
      <path
        d="M52.5 20.5C56.8 26.8 58.3 34.8 56.7 42.4L40.8 39.1C41.6 35.6 40.9 31.9 38.8 29.1L52.5 20.5Z"
        fill={light ? "rgba(255,255,255,0.75)" : "#f97316"}
        transform="translate(-6 -6)"
      />
    </svg>
  );
}
