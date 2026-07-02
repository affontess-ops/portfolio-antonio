import { createFileRoute } from "@tanstack/react-router";

import recargaBanner from "@/assets/recarga-banner.png.asset.json";
import recargaFeed from "@/assets/recarga-feed.png.asset.json";
import indiqueCta from "@/assets/indique-cta.png.asset.json";
import indiqueBase from "@/assets/indique-base.png.asset.json";
import indiqueBanner from "@/assets/indique-banner.png.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

// ---------------- DATA (100% validated, no invented numbers) ----------------

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
  { num: "15.2", suf: "k", label: "Lojistas e vendedores impactados" },
  { num: "19", suf: "", label: "Grupos de WhatsApp corporativo" },
];

const numbers = [
  {
    big: "15.200",
    desc: "Lojistas e vendedores sob comunicação direta",
    ctx: "19 grupos de WhatsApp · BrasilCard + BOLT",
  },
  {
    big: "5",
    desc: "Campanhas sazonais executadas em 6 meses",
    ctx: "Carnaval, Dia das Mães, São João, Mês do Consumidor, Copa",
  },
  {
    big: "1.400%",
    desc: "Crescimento de seguidores no Instagram",
    ctx: "De 306 para 4.586 em 8 meses · cliente privado",
  },
  {
    big: "4",
    desc: "Gestões municipais no Piauí atendidas",
    ctx: "Comunicação digital · 2019 a 2024",
  },
  {
    big: "86%",
    desc: "Aproveitamento em releases estratégicos",
    ctx: "R2 Assessoria · acima da média de mercado",
  },
  {
    big: "85%",
    desc: "Aproveitamento em publicações institucionais",
    ctx: "Secretaria de Justiça do Piauí · 30+ inserções/dia",
  },
];

type Piece = {
  title: string;
  format: string;
  src: string;
  copy: string;
  note?: string;
};

const campaigns: { name: string; intro: string; pieces: Piece[] }[] = [
  {
    name: "Recarga Rápida",
    intro:
      "Campanha para incentivar o uso da funcionalidade de recarga de celular dentro do App BrasilCard Cliente. Peças integradas de feed e site com o mesmo território visual.",
    pieces: [
      {
        title: "Recarga Rápida — Feed Instagram",
        format: "Feed Instagram",
        src: recargaFeed.url,
        copy:
          "Precisa de crédito no celular? Tá na palma da mão! Não dependa mais de loja física: faça a recarga do seu celular pelo App BrasilCard Cliente. Mais praticidade e liberdade!",
      },
      {
        title: "Recarga Rápida — Banner site",
        format: "Banner site",
        src: recargaBanner.url,
        copy:
          "Precisa de crédito no celular? Recarregue seu celular sem sair de casa! Use o App BrasilCard Cliente para fazer sua recarga com rapidez, segurança e zero burocracia. Faça agora no app!",
      },
    ],
  },
  {
    name: "Indique um Amigo",
    intro:
      "Campanha de indicação com regra de conversão direta — R$20 de desconto por indicação aprovada, até 55 indicações por cliente (R$1.100 acumulável).",
    pieces: [
      {
        title: "Indique um Amigo — Peça 1 (Feed Instagram)",
        format: "Feed Instagram",
        src: indiqueCta.url,
        copy:
          "Indique. Seu amigo ganha o cartão. Você ganha desconto. Até R$1.100 OFF. É só usar o App BrasilCard Cliente!!",
      },
      {
        title: "Indique um Amigo — Peça 2 CTA (Feed Instagram)",
        format: "Feed Instagram",
        src: indiqueBase.url,
        copy:
          "Quanto vale sua amizade? Aqui vale desconto na fatura. Cada amigo aprovado no BrasilCard te dá R$20 OFF. Indique no App BrasilCard Cliente.",
      },
      {
        title: "Indique um Amigo — Banner institucional",
        format: "Banner institucional",
        src: indiqueBanner.url,
        copy:
          "Economize ajudando quem você gosta! Indique amigos para o BrasilCard e ganhe R$20 de desconto por cada indicação aprovada. Já são mais de 120 mil amigos indicados. Use o app BrasilCard Cliente e acumule até R$1.100.",
        note: '"120 mil amigos indicados" é dado institucional da marca BrasilCard, não KPI pessoal.',
      },
    ],
  },
];

type Exp = {
  year: string;
  yearSub: string;
  company: string;
  role: string;
  bullets: string[];
  kpis?: { v: string; l: string }[];
};

const experiences: Exp[] = [
  {
    year: "2025",
    yearSub: "Fev · atual",
    company: "BrasilCard | BOLT",
    role: "Analista de Comunicação e Marketing",
    bullets: [
      "Gerencio 19 grupos de WhatsApp corporativo (18 BrasilCard + 1 BOLT), com ~800 lojistas e vendedores por grupo (~15.200 no total).",
      "Executo e administro campanhas de incentivo à adesão e conversão para base de ~15.200 lojistas e vendedores, incluindo programa de bonificação e campanha de indicação com regra de conversão direta (R$20 de desconto por indicação, até 55 indicações por cliente).",
      "Organizei, administrei e executei 5 campanhas sazonais em 6 meses (Carnaval, Dia das Mães, São João, Mês do Consumidor, Copa), impactando a base de ~15.200 lojistas e vendedores.",
      "Produzo briefings, copy e kits de campanha para datas de alcance nacional.",
    ],
    kpis: [
      { v: "15.2k", l: "Lojistas atendidos" },
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

const tools = [
  "Google Workspace",
  "Canva",
  "ClickUp",
  "Notion",
  "Trello",
];

// ---------------- COMPONENT ----------------

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative grid lg:grid-cols-2 min-h-screen">
        <div className="absolute top-6 left-6 lg:left-10 z-10 font-display font-bold text-2xl">
          AF<span className="text-cyan">.</span>
        </div>
        <div className="absolute top-6 right-6 lg:right-10 z-10 text-right text-sm space-y-1 text-muted-foreground">
          <div>comfontes@gmail.com</div>
          <div>(86) 99997-4164</div>
          <div>Teresina · PI</div>
        </div>

        <div className="flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16">
          <p className="text-cyan text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan" />
            Copywriting · Marketing de Conteúdo
          </p>
          <h1 className="font-display font-extrabold leading-[0.9] text-6xl md:text-7xl xl:text-8xl">
            Antonio
            <br />
            <span className="text-cyan italic font-semibold">Fontes</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl border-l-2 border-cyan pl-5">
            Jornalista e mestre em Comunicação (UFPI), com 10+ anos desenvolvendo
            copywriting para campanhas, redes sociais, WhatsApp corporativo e
            comunicação institucional. Hoje na BrasilCard e BOLT, com alcance nacional.
          </p>

          <div className="flex flex-wrap gap-2 mt-8 max-w-2xl">
            {heroTags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 border border-border rounded-full text-xs tracking-wider uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-2xl">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl">
                  {s.num}
                  <em className="not-italic text-cyan">{s.suf}</em>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-surface hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyan/10" />
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <div className="text-center max-w-md">
              <div className="font-display italic text-cyan text-6xl mb-6">“</div>
              <p className="font-display text-2xl xl:text-3xl leading-snug">
                Copy com estratégia.
                <br />
                Conteúdo com <span className="text-cyan italic">resultado.</span>
              </p>
              <div className="mt-10 text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Antonio Fontes · Teresina · PI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <SectionWrap>
        <SectionLabel>Resultados mensuráveis</SectionLabel>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl">
          Cada cargo na trajetória tem um <em className="text-cyan not-italic">número</em>{" "}
          que prova o impacto. Todos rastreáveis, nenhum inventado.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {numbers.map((n) => (
            <div
              key={n.desc}
              className="p-7 rounded-xl bg-surface border border-border hover:border-cyan/40 transition-colors"
            >
              <div className="font-display font-bold text-5xl text-cyan">{n.big}</div>
              <div className="mt-4 font-medium">{n.desc}</div>
              <div className="mt-2 text-sm text-muted-foreground">{n.ctx}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* PORTFOLIO */}
      <SectionWrap>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-4">
          <div>
            <SectionLabel>Cases · Campanhas em produção</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-3xl">
              Peças que <em className="text-cyan not-italic">assinei</em> na BrasilCard e BOLT.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Todas com autorização confirmada do gestor da BrasilCard e do designer.
            Crédito obrigatório em cada peça:{" "}
            <span className="text-foreground">
              Copywriting: Antonio Fontes · Design: Marcello Castro
            </span>
            .
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {campaigns.map((c) => (
            <div key={c.name}>
              <div className="flex items-baseline gap-6 mb-6 flex-wrap">
                <h3 className="font-display font-bold text-2xl md:text-3xl">{c.name}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">{c.intro}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {c.pieces.map((p) => (
                  <article
                    key={p.title}
                    className="rounded-xl overflow-hidden bg-surface border border-border flex flex-col group hover:border-cyan/40 transition-colors"
                  >
                    <div className="aspect-square overflow-hidden bg-background/60">
                      <img
                        src={p.src}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-3">
                      <span className="text-[10px] uppercase tracking-widest text-cyan">
                        {p.format}
                      </span>
                      <h4 className="font-display font-semibold text-lg leading-snug">
                        {p.title}
                      </h4>
                      <blockquote className="text-sm text-foreground/85 leading-relaxed border-l-2 border-cyan pl-3 italic">
                        “{p.copy}”
                      </blockquote>
                      {p.note && (
                        <p className="text-xs text-muted-foreground">{p.note}</p>
                      )}
                      <div className="mt-auto pt-3 text-xs text-muted-foreground border-t border-border">
                        Copywriting: Antonio Fontes · Design: Marcello Castro
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* EXPERIENCE */}
      <SectionWrap>
        <SectionLabel>Trajetória Profissional</SectionLabel>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl">
          Dez anos entre <em className="text-cyan not-italic">redação, campanha</em> e
          comunicação institucional.
        </h2>

        <div className="mt-14 space-y-14">
          {experiences.map((e, i) => (
            <article
              key={e.company + e.role}
              className={`grid gap-8 lg:grid-cols-[220px_1fr] ${i % 2 === 1 ? "lg:pl-14" : ""}`}
            >
              <div className="border-l-2 border-cyan pl-5 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-5 lg:border-cyan">
                <div className="font-display font-bold text-4xl text-cyan">{e.year}</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">
                  {e.yearSub}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {e.company}
                </div>
                <h3 className="font-display font-semibold text-2xl mb-4">{e.role}</h3>
                <ul className="space-y-3 max-w-3xl">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {e.kpis && (
                  <div className="flex flex-wrap gap-6 mt-6">
                    {e.kpis.map((k) => (
                      <div
                        key={k.l}
                        className="px-5 py-3 rounded-lg bg-surface border border-border"
                      >
                        <div className="font-display font-bold text-xl text-cyan">
                          {k.v}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{k.l}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionWrap>

      {/* SKILLS + EDUCATION */}
      <SectionWrap>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel>Formação</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              Base acadêmica sólida,
              <br />
              aplicada ao <em className="text-cyan not-italic">mercado real.</em>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Jornalismo e Mestrado em Comunicação pela UFPI, com método e teoria aplicados
              diretamente à criação de copy e estratégia de conteúdo.
            </p>

            <div className="mt-8 space-y-5">
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

            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Idiomas
              </div>
              <div className="text-lg">
                Inglês <span className="text-muted-foreground">— Básico</span>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Ferramentas
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-surface border border-border text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Especialização</SectionLabel>
            <div className="mt-6 space-y-5">
              {skillBars.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{s.name}</span>
                    <span className="text-cyan font-medium">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full bg-cyan rounded-full transition-all"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* CONTACT */}
      <SectionWrap>
        <div className="p-10 md:p-16 rounded-2xl bg-surface border border-border relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Vamos criar algo
              <br />
              que <span className="text-cyan italic">converte?</span>
            </h2>
            <p className="text-muted-foreground italic mt-4">
              Copy com estratégia. Conteúdo com resultado.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <ContactLink
                label="E-mail"
                value="comfontes@gmail.com"
                href="mailto:comfontes@gmail.com"
              />
              <ContactLink
                label="Telefone · WhatsApp"
                value="(86) 99997-4164"
                href="tel:+5586999974164"
              />
              <ContactLink
                label="LinkedIn"
                value="antonio-fontes-silva"
                href="https://linkedin.com/in/antonio-fontes-silva"
              />
            </div>
          </div>
        </div>
      </SectionWrap>

      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} Antonio Fontes · Teresina · PI</div>
          <div>Portfólio + Currículo · Copywriting & Marketing de Conteúdo</div>
        </div>
      </footer>
    </div>
  );
}

// ---------------- helpers ----------------

function SectionWrap({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-cyan text-xs tracking-[0.3em] uppercase mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-cyan" />
      {children}
    </p>
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
    <div className="p-5 rounded-lg bg-surface border border-border">
      <div className="text-xs text-cyan tracking-widest uppercase">{year}</div>
      <div className="font-display font-semibold text-lg mt-1">{degree}</div>
      <div className="text-sm text-muted-foreground mt-1">{uni}</div>
      {note && <div className="text-xs text-muted-foreground italic mt-2">{note}</div>}
    </div>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block p-5 rounded-lg bg-background border border-border hover:border-cyan transition-colors"
    >
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-medium truncate">{value}</div>
    </a>
  );
}
