import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  component: Curriculo,
});

const competencias = [
  "Copywriting",
  "Redação estratégica",
  "Planejamento editorial",
  "Otimização de conteúdo para redes sociais",
  "Comunicação institucional",
  "KPIs e métricas de desempenho",
  "Gestão de redes sociais",
  "WhatsApp corporativo",
  "Campanhas digitais",
  "Branding",
  "Briefing",
  "Google Workspace",
  "Canva",
  "ClickUp",
  "Notion",
  "Trello",
];

type Exp = {
  role: string;
  company: string;
  period: string;
  local?: string;
  bullets: string[];
};

const experiencias: Exp[] = [
  {
    role: "Analista de Comunicação e Marketing",
    company: "BrasilCard | BOLT",
    period: "Fev. 2025 – presente",
    bullets: [
      "Gerencio 19 grupos de WhatsApp corporativo (18 BrasilCard + 1 BOLT), com ~800 lojistas e vendedores por grupo (~15.200 no total).",
      "Executo e administro campanhas de incentivo à adesão e conversão para base de ~15.200 lojistas e vendedores, incluindo programa de bonificação e campanha de indicação com regra de conversão direta (R$20 de desconto por indicação, até 55 indicações por cliente).",
      "Organizei, administrei e executei 5 campanhas sazonais em 6 meses (Carnaval, Dia das Mães, São João, Mês do Consumidor, Copa), impactando a base de ~15.200 lojistas e vendedores.",
      "Produzo briefings, copy e kits de campanha para datas de alcance nacional.",
    ],
  },
  {
    role: "Consultor de Comunicação e Marketing Digital",
    company: "Freelancer",
    period: "2019 – 2025 (6 anos)",
    local: "Teresina, PI · Remoto",
    bullets: [
      "Escalei a base de seguidores de cliente no Instagram de 306 para 4.586 (crescimento de 1.400%) em 8 meses, via estratégia editorial e produção diária construída do zero.",
      "Conduzi comunicação digital para 4 gestões municipais no Piauí, com responsabilidade por posicionamento institucional e produção de conteúdo em alta frequência.",
      "Otimizei conteúdo para redes sociais e prestei consultoria de comunicação digital para carteira de clientes.",
      "Gerei cobertura espontânea em veículos de TV e portais regionais a partir de conteúdo digital produzido para clientes.",
    ],
  },
  {
    role: "Analista de Comunicação e Conteúdo",
    company: "R2 Assessoria de Comunicação",
    period: "2016 – 2017",
    bullets: [
      "Sustentei 82% de aproveitamento médio em releases enviados, atingindo 86% em contas estratégicas — acima da média de mercado do setor.",
      "Publiquei conteúdo institucional recorrente nos principais veículos impressos e digitais da região.",
    ],
  },
  {
    role: "Analista de Comunicação Institucional",
    company: "Secretaria de Justiça do Piauí",
    period: "2015 – 2016",
    bullets: [
      "Atingi 85% de aproveitamento em publicações institucionais, com produção e análise diária de clipping (30+ inserções/dia).",
      "Redigi notas oficiais e conduzi posicionamento estratégico de ações institucionais e políticas públicas.",
    ],
  },
];

function Curriculo() {
  return (
    <>
      <SiteNav />
      <main className="container-page py-14">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[1fr_auto] items-end pb-12 border-b border-border">
          <div>
            <p className="text-cyan text-xs tracking-[0.25em] uppercase mb-4">
              Currículo · ATS-friendly
            </p>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95]">
              Antonio<br />
              <span className="text-cyan italic font-normal">Fontes</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Analista de Marketing de Conteúdo
            </p>
          </div>
          <div className="text-sm text-muted-foreground space-y-1 md:text-right">
            <div>Teresina, PI</div>
            <a href="mailto:comfontes@gmail.com" className="block hover:text-cyan">comfontes@gmail.com</a>
            <a href="tel:+5586999974164" className="block hover:text-cyan">(86) 99997-4164</a>
            <a href="https://linkedin.com/in/antonio-fontes-silva" target="_blank" rel="noreferrer" className="block hover:text-cyan">
              linkedin.com/in/antonio-fontes-silva
            </a>
          </div>
        </section>

        {/* Resumo */}
        <Section title="Resumo Profissional">
          <p className="text-lg leading-relaxed text-foreground/90 max-w-4xl">
            Jornalista e mestre em Comunicação (UFPI), com 10+ anos desenvolvendo copywriting
            para campanhas, redes sociais, WhatsApp corporativo e comunicação institucional.
            Gerencio comunicação e campanhas de incentivo para base de ~15.200 lojistas e
            vendedores na BrasilCard/BOLT, em 19 grupos de WhatsApp corporativo.
          </p>
        </Section>

        {/* Competências */}
        <Section title="Competências">
          <div className="flex flex-wrap gap-2">
            {competencias.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-md bg-surface border border-border text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>

        {/* Experiência */}
        <Section title="Experiência Profissional">
          <div className="space-y-10">
            {experiencias.map((e) => (
              <article key={e.role + e.company} className="grid gap-4 md:grid-cols-[220px_1fr]">
                <div className="text-sm">
                  <div className="text-cyan font-medium">{e.period}</div>
                  {e.local && <div className="text-muted-foreground mt-1">{e.local}</div>}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl">{e.role}</h3>
                  <div className="text-muted-foreground text-sm mb-3">{e.company}</div>
                  <ul className="space-y-2">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-cyan mt-2 h-1 w-1 rounded-full bg-cyan shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Formação */}
        <Section title="Formação">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-surface border border-border">
              <div className="text-cyan text-sm">2017 – 2019</div>
              <div className="font-display font-semibold text-lg mt-1">Mestrado em Comunicação</div>
              <div className="text-muted-foreground text-sm mt-1">
                Universidade Federal do Piauí — UFPI
              </div>
              <div className="text-xs text-muted-foreground mt-2 italic">
                Dedicação integral — sem gap de carreira nesse período.
              </div>
            </div>
            <div className="p-6 rounded-lg bg-surface border border-border">
              <div className="text-cyan text-sm">2012 – 2015</div>
              <div className="font-display font-semibold text-lg mt-1">
                Graduação em Comunicação Social — Jornalismo
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                Universidade Federal do Piauí — UFPI
              </div>
            </div>
          </div>
        </Section>

        {/* Idiomas */}
        <Section title="Idiomas">
          <div className="flex gap-6 text-lg">
            <div>
              <span className="font-medium">Inglês</span>
              <span className="text-muted-foreground"> — Básico</span>
            </div>
          </div>
        </Section>

        {/* CTA portfólio */}
        <section className="mt-20 p-8 md:p-12 rounded-xl bg-surface border border-border flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl">
              Veja o portfólio de campanhas
            </h2>
            <p className="text-muted-foreground mt-2">
              Peças de copy para BrasilCard/BOLT — Recarga Rápida e Indique um Amigo.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Abrir portfólio →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display font-bold uppercase tracking-[0.18em] text-sm text-cyan mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
