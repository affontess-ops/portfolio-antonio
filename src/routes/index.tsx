import { createFileRoute } from "@tanstack/react-router";

import recargaBanner from "@/assets/recarga-banner.png.asset.json";
import recargaFeed from "@/assets/recarga-feed.png.asset.json";
import recargaFeed2 from "@/assets/recarga-feed2.png.asset.json";
import indiqueCta from "@/assets/indique-cta.png.asset.json";
import indiqueBase from "@/assets/indique-base.png.asset.json";
import indiqueBanner from "@/assets/indique-banner.png.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

// ============ DATA (only validated numbers) ============

const heroTags = [
  "Copywriting",
  "Redação Estratégica",
  "Marketing de Conteúdo",
  "Planejamento Editorial",
  "Comunicação Institucional",
  "Branding",
];

const heroStats = [
  { num: "10", suf: "+", label: "Anos de experiência" },
  { num: "16.4", suf: "k", label: "Lojistas impactados" },
  { num: "19", suf: "", label: "Grupos de WhatsApp" },
];

const numbers = [
  { big: "16.400", desc: "Lojistas e vendedores impactados nos grupos de WhatsApp", ctx: "19 grupos de WhatsApp · BrasilCard + BOLT" },
  { big: "5x", desc: "Aumento na conversão de campanhas sazonais", ctx: "De 1% para 5% no WhatsApp Business · jan a mai/2026" },
  { big: "5", desc: "Campanhas sazonais executadas nos últimos 6 meses", ctx: "Carnaval, Dia das Mães, São João, Mês do Consumidor, Copa" },
  { big: "1.400%", desc: "Crescimento de seguidores no Instagram", ctx: "De 306 para 4.586 em 8 meses · cliente privado" },
  { big: "04", desc: "Gestões municipais no Piauí atendidas", ctx: "Comunicação digital · 2019 a 2025" },
  { big: "86%", desc: "Aproveitamento em releases estratégicos", ctx: "R2 Assessoria · acima da média de mercado" },
];

type Piece = { badge: string; client: string; src: string; alt: string };

const campaigns: { name: string; intro: string; strategy: string; pieces: Piece[] }[] = [
  {
    name: "Recarga Rápida",
    intro:
      "Campanha para incentivar o uso da funcionalidade de recarga de celular dentro do App BrasilCard Cliente. Peças integradas de feed e site com o mesmo território visual.",
    strategy:
      "Estratégia focada em reduzir fricção percebida: linguagem direta, gatilho de conveniência (‘na palma da mão’) e call-to-action único para migrar o hábito da loja física para o app. Peças de feed e banner mantêm consistência visual para reforçar reconhecimento em pontos de contato diferentes.",
    pieces: [
      {
        badge: "Feed · Instagram",
        client: "BrasilCard · Cliente Final",
        src: recargaFeed.url,
        alt: "Peça de feed da campanha Recarga Rápida no Instagram",
      },
      {
        badge: "Feed · Instagram",
        client: "BrasilCard · Cliente Final",
        src: recargaFeed2.url,
        alt: "Segunda peça de feed da campanha Recarga Rápida",
      },
      {
        badge: "Banner · Site Institucional",
        client: "BrasilCard · Cliente Final",
        src: recargaBanner.url,
        alt: "Banner do site institucional da campanha Recarga Rápida",
      },
    ],
  },
  {
    name: "Indique um Amigo",
    intro:
      "Campanha de indicação com regra de conversão direta — R$20 de desconto por indicação aprovada, até 55 indicações por cliente (R$1.100 acumulável).",
    strategy:
      "Estratégia de crescimento orgânico via prova social e recompensa mensurável. A mecânica é apresentada de forma explícita (valor por indicação e teto acumulável) para eliminar dúvidas na conversão, e o tom conversacional aproxima o benefício da rotina do cliente, transformando o próprio usuário em canal de aquisição.",
    pieces: [
      {
        badge: "Feed · CTA",
        client: "BrasilCard · Cliente Final",
        src: indiqueCta.url,
        alt: "Peça CTA da campanha Indique um Amigo",
      },
      {
        badge: "Feed · Arte base",
        client: "BrasilCard · Cliente Final",
        src: indiqueBase.url,
        alt: "Arte base da campanha Indique um Amigo",
      },
      {
        badge: "Banner · Institucional",
        client: "BrasilCard · Cliente Final",
        src: indiqueBanner.url,
        alt: "Banner institucional da campanha Indique um Amigo",
      },
    ],
  },
];

type Exp = { year: string; yearSub: string; company: string; role: string; bullets: string[]; kpis: { v: string; l: string }[] };

const experiences: Exp[] = [
  {
    year: "2025",
    yearSub: "Fev · atual",
    company: "BrasilCard | BOLT",
    role: "Assistente de Comunicação e Marketing",
    bullets: [
      "Contribuí para o aumento da conversão de campanhas sazonais de kits promocionais, que evoluiu de 1% para 5% (WhatsApp Business) e de 1% para 4% (Google Forms) entre janeiro e maio de 2026, via otimização de briefing e copy.",
      "Planejo e executo campanhas de incentivo para base de cerca de 16.400 lojistas e vendedores, incluindo bonificação por ativação de cartões (R$8 a R$15 por cartão, com bônus total superior a R$1.500 para alto volume), crediário com bônus de 1% sobre a primeira compra e campanha de indicação (R$20 por indicação, até 55 por cliente).",
      "Organizei, administrei e executei 5 campanhas sazonais em 6 meses (Carnaval, Dia das Mães, São João, Mês do Consumidor, Copa), produzindo briefings, copy e kits de campanha para públicos de alcance nacional.",
      "Gerencio comunicação em 19 grupos de WhatsApp corporativo (cerca de 16.400 lojistas e vendedores impactados), centralizando distribuição de conteúdo, briefings e materiais de campanha.",
    ],
    kpis: [
      { v: "5x", l: "Conversão sazonal" },
      { v: "16.4k", l: "Lojistas impactados" },
      { v: "19", l: "Grupos de WhatsApp" },
    ],
  },
  {
    year: "2019",
    yearSub: "2019 a 2025 · 6 anos",
    company: "Freelancer · Teresina, PI · Remoto",
    role: "Consultor de Comunicação e Marketing Digital",
    bullets: [
      "Escalei a base de seguidores de cliente no Instagram de 306 para 4.586 (crescimento de 1.400%) em 8 meses, via estratégia editorial e produção diária construída do zero.",
      "Conduzi comunicação digital para 4 gestões municipais no Piauí, com responsabilidade por posicionamento institucional e produção de conteúdo em alta frequência.",
      "Otimizei conteúdo para redes sociais e prestei consultoria de comunicação digital para carteira de clientes.",
      "Gerei cobertura espontânea em veículos de TV e portais regionais a partir de conteúdo digital produzido para clientes.",
    ],
    kpis: [
      { v: "+1.400%", l: "Seguidores em 8 meses" },
      { v: "4", l: "Gestões municipais" },
    ],
  },
  {
    year: "2016",
    yearSub: "2016 a 2017",
    company: "R2 Assessoria de Comunicação",
    role: "Analista de Comunicação e Conteúdo",
    bullets: [
      "Sustentei 82% de aproveitamento médio em releases enviados, atingindo 86% em contas estratégicas — acima da média de mercado do setor.",
      "Publiquei conteúdo institucional recorrente nos principais veículos impressos e digitais da região.",
    ],
    kpis: [
      { v: "86%", l: "Contas estratégicas" },
      { v: "82%", l: "Média em releases" },
    ],
  },
  {
    year: "2015",
    yearSub: "2015 a 2016",
    company: "Secretaria de Justiça do Piauí",
    role: "Analista de Comunicação Institucional",
    bullets: [
      "Atingi 85% de aproveitamento em publicações institucionais, com produção e análise diária de clipping (30+ inserções/dia).",
      "Redigi notas oficiais e conduzi posicionamento estratégico de ações institucionais e políticas públicas.",
    ],
    kpis: [
      { v: "85%", l: "Aproveitamento" },
      { v: "30+", l: "Inserções/dia" },
    ],
  },
];

const skillBars = [
  { name: "Copywriting & Redação Estratégica", pct: 95 },
  { name: "Marketing de Conteúdo", pct: 92 },
  { name: "Comunicação Institucional", pct: 92 },
  { name: "Gestão de Redes Sociais", pct: 88 },
  { name: "WhatsApp Corporativo & Campanhas Digitais", pct: 90 },
  { name: "Branding & Planejamento Editorial", pct: 85 },
  { name: "KPIs & Métricas de Desempenho", pct: 80 },
];

const tools = ["Google Workspace", "Canva", "ClickUp", "Notion", "Trello"];

// ============ COMPONENT ============

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO — split layout like reference */}
      <section className="relative min-h-screen grid lg:grid-cols-[1.15fr_1fr]">
        {/* brand top-left */}
        <div className="absolute top-6 left-6 lg:left-10 z-20 font-display font-bold text-2xl tracking-tight">
          AF<span className="text-accent">.</span>
        </div>
        {/* contact top-right */}
        <div className="absolute top-6 right-6 lg:right-10 z-20 text-right text-[13px] leading-6 text-muted-foreground">
          <div>comfontes@gmail.com</div>
          <div>(86) 99997-4164</div>
          <div>Teresina · PI</div>
        </div>

        <div className="flex flex-col justify-center px-6 lg:px-16 pt-32 pb-20 relative">
          <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-8 flex items-center gap-4 font-medium">
            <span className="h-px w-10 bg-accent" />
            Copywriting · Marketing de Conteúdo
          </p>

          <h1 className="font-display font-extrabold leading-[0.85] text-[clamp(3.5rem,10vw,9rem)]">
            Antonio
            <br />
            <span className="italic font-bold text-accent block mt-2 skew-x-[-6deg] origin-left">
              Fontes
            </span>
          </h1>

          <p className="mt-10 text-lg leading-relaxed text-muted-foreground max-w-xl border-l-2 border-accent pl-5">
            Atuo há mais de 10 anos em Marketing e Comunicação, desenvolvendo estratégias,
            conteúdos e campanhas orientados a resultados. Minha experiência combina
            criatividade, estratégia e dados, com resultados como 1.400% de crescimento em
            audiência digital e até 5x mais conversão em campanhas sazonais. Sou mestre em
            Comunicação pela UFPI.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/antonio-fontes-curriculo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Baixar currículo (PDF)
            </a>
            <a
              href="/antonio-fontes-portfolio.pptx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-semibold text-sm tracking-wide hover:bg-accent/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Baixar portfólio (PPTX)
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 max-w-2xl">
            {heroTags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 border border-border rounded-full text-[10px] tracking-[0.18em] uppercase font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative bg-surface min-h-[420px] lg:min-h-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.55_0.28_265/0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,oklch(0.55_0.28_265/0.25),transparent_50%)]" />
          <div className="relative h-full flex items-center justify-center p-10 lg:p-16">
            <div className="text-center max-w-md">
              <div className="font-display italic text-accent text-8xl leading-none mb-4">“</div>
              <p className="font-display font-semibold text-3xl xl:text-4xl leading-tight">
                Copy com estratégia.
                <br />
                Conteúdo com{" "}
                <span className="italic text-accent">resultado.</span>
              </p>
              <div className="mt-10 text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
                Antonio Fontes · Teresina · PI
              </div>
            </div>
          </div>
        </div>

        {/* Hero stats bottom */}
        <div className="lg:col-span-2 border-t border-border">
          <div className="container-page grid grid-cols-3 divide-x divide-border">
            {heroStats.map((s) => (
              <div key={s.label} className="py-8 px-4 lg:px-8 first:pl-0 last:pr-0">
                <div className="font-display font-extrabold text-4xl md:text-6xl leading-none">
                  {s.num}
                  <em className="not-italic text-accent">{s.suf}</em>
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS — light background section */}
      <section className="bg-light text-light-foreground">
        <div className="container-page py-24 md:py-32">
          <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-6 flex items-center gap-4 font-medium">
            <span className="h-px w-10 bg-accent" />
            Resultados mensuráveis
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] max-w-5xl">
            Cada cargo tem um{" "}
            <em className="not-italic italic text-accent">número</em>{" "}
            que prova o impacto. Todos rastreáveis, nenhum inventado.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 border-t border-l border-light-foreground/10">
            {numbers.map((n) => (
              <div
                key={n.desc}
                className="relative overflow-hidden border-r border-b border-light-foreground/10 p-8 md:p-10 min-h-[260px]"
              >
                <div className="ghost-num">{n.big}</div>
                <div className="relative pt-16">
                  <div className="font-display font-extrabold text-5xl md:text-6xl text-accent leading-none">
                    {n.big}
                  </div>
                  <div className="mt-6 font-semibold text-base md:text-lg max-w-xs">
                    {n.desc}
                  </div>
                  <div className="mt-2 text-sm text-light-foreground/60">{n.ctx}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-page py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end mb-16">
          <div>
            <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-6 flex items-center gap-4 font-medium">
              <span className="h-px w-10 bg-accent" />
              Cases · Campanhas em produção
            </p>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
              Peças que <em className="italic not-italic text-accent italic">assinei</em>
              <br /> na BrasilCard e BOLT.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md lg:text-right">
            Todas com autorização confirmada do gestor da BrasilCard e do designer.
            <br />
            <span className="text-foreground">
              Copywriting: Antonio Fontes · Design: Marcello Castro
            </span>
          </p>
        </div>

        <div className="space-y-20">
          {campaigns.map((c) => (
            <div key={c.name}>
              <div className="flex items-baseline gap-6 mb-8 flex-wrap border-b border-border pb-6">
                <div className="text-accent text-[10px] tracking-[0.32em] uppercase">Campanha</div>
                <h3 className="font-display font-bold text-3xl md:text-4xl">{c.name}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">{c.intro}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {c.pieces.map((p) => {
                  const isBanner = p.badge.toLowerCase().includes("banner");
                  return (
                  <article
                    key={p.src}
                    className={`rounded-xl overflow-hidden bg-surface border border-border flex flex-col group ${isBanner ? "md:col-span-2" : ""}`}
                  >
                    <div className="relative overflow-hidden bg-background flex items-center justify-center p-4 min-h-[320px]">
                      <span className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-[10px] tracking-[0.2em] uppercase text-accent">
                        {p.badge}
                      </span>
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className="max-w-full max-h-[560px] w-auto h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex-1 flex flex-col gap-4">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-accent">
                        {p.client}
                      </div>
                      <h4 className="font-display font-bold text-2xl leading-tight">
                        {c.name}
                      </h4>
                      <div className="mt-auto pt-4 text-xs text-muted-foreground border-t border-border">
                        Copywriting: Antonio Fontes · Design: Marcello Castro
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>

              <div className="mt-8 p-6 md:p-8 rounded-xl bg-surface/60 border border-border max-w-4xl">
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-semibold">
                  Análise da estratégia
                </div>
                <p className="text-sm md:text-base leading-relaxed text-foreground/90">
                  {c.strategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* EXPERIENCE — alternating timeline */}
      <section className="container-page py-24 md:py-32 border-t border-border">
        <div className="max-w-4xl mb-20">
          <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-6 flex items-center gap-4 font-medium">
            <span className="h-px w-10 bg-accent" />
            Trajetória Profissional
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
            Dez anos entre{" "}
            <em className="italic text-accent">redação, campanha</em>{" "}
            e comunicação institucional.
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((e) => (
            <article
              key={e.company + e.role}
              className="grid gap-8 lg:grid-cols-[260px_1fr] items-start"
            >
              <div>
                <div className="p-8 rounded-xl bg-surface border border-border">
                  <div className="font-display font-extrabold text-6xl text-accent leading-none">
                    {e.year}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mt-3">
                    {e.yearSub}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                  {e.company}
                </div>
                <h3 className="font-display font-bold text-3xl mb-6">{e.role}</h3>
                <ul className="space-y-3 max-w-3xl">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 mt-8">
                  {e.kpis.map((k) => (
                    <div
                      key={k.l}
                      className="px-6 py-4 rounded-lg bg-surface border border-border"
                    >
                      <div className="font-display font-extrabold text-2xl text-accent leading-none">
                        {k.v}
                      </div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                        {k.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS + EDUCATION */}
      <section className="container-page py-24 md:py-32 border-t border-border">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-6 flex items-center gap-4 font-medium">
              <span className="h-px w-10 bg-accent" />
              Formação
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Base acadêmica sólida,
              <br />
              aplicada ao <em className="italic text-accent">mercado real.</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Jornalismo e Mestrado em Comunicação pela UFPI, método e teoria aplicados
              diretamente à criação de copy e estratégia de conteúdo para marcas com base
              nacional.
            </p>

            <div className="mt-10 space-y-4">
              <EduBlock
                degree="Mestrado em Comunicação"
                uni="Universidade Federal do Piauí — UFPI"
                year="2017 – 2019"
                note="Dedicação integral — sem gap de carreira nesse período."
              />
              <EduBlock
                degree="Graduação em Comunicação Social — Jornalismo"
                uni="Universidade Federal do Piauí — UFPI"
                year="2012 – 2015"
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Idiomas
                </div>
                <div className="text-lg">
                  Inglês <span className="text-muted-foreground">— Básico</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Ferramentas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-accent text-[11px] tracking-[0.32em] uppercase mb-6 flex items-center gap-4 font-medium">
              <span className="h-px w-10 bg-accent" />
              Especialização
            </p>
            <div className="mt-8 space-y-6">
              {skillBars.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-accent font-semibold">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page py-24 md:py-32">
        <div className="relative p-10 md:p-16 rounded-2xl bg-surface border border-border overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              Vamos criar algo
              <br />
              que <span className="italic text-accent">converte?</span>
            </h2>
            <p className="text-muted-foreground italic mt-6 text-lg">
              Copy com estratégia. Conteúdo com resultado.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <ContactLink label="E-mail" value="comfontes@gmail.com" href="mailto:comfontes@gmail.com" />
              <ContactLink label="WhatsApp" value="(86) 99997-4164" href="https://wa.me/5586999974164" />
              <ContactLink label="LinkedIn" value="antonio-fontes-silva" href="https://linkedin.com/in/antonio-fontes-silva" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container-page py-8 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} Antonio Fontes · Teresina · PI</div>
          <div>Portfólio · Copywriting & Marketing de Conteúdo</div>
        </div>
      </footer>
    </div>
  );
}

function EduBlock({
  degree,
  uni,
  year,
  note,
}: {
  degree: string;
  uni: string;
  year: string;
  note?: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-surface border border-border">
      <div className="text-[10px] text-accent tracking-[0.3em] uppercase">{year}</div>
      <div className="font-display font-bold text-lg mt-2">{degree}</div>
      <div className="text-sm text-muted-foreground mt-1">{uni}</div>
      {note && <div className="text-xs text-muted-foreground italic mt-3">{note}</div>}
    </div>
  );
}

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block p-5 rounded-lg bg-background border border-border hover:border-accent transition-colors"
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-medium truncate">{value}</div>
    </a>
  );
}
