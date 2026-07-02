import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";

import recargaBanner from "@/assets/recarga-banner.png.asset.json";
import recargaFeed from "@/assets/recarga-feed.png.asset.json";
import recargaFeed2 from "@/assets/recarga-feed2.png.asset.json";
import indiqueCta from "@/assets/indique-cta.png.asset.json";
import indiqueBase from "@/assets/indique-base.png.asset.json";
import indiqueBanner from "@/assets/indique-banner.png.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio · Antonio Fontes" },
      {
        name: "description",
        content:
          "Peças de copywriting para BrasilCard e BOLT — campanhas Recarga Rápida e Indique um Amigo.",
      },
      { property: "og:title", content: "Portfólio · Antonio Fontes" },
      {
        property: "og:description",
        content: "Campanhas Recarga Rápida e Indique um Amigo — BrasilCard/BOLT.",
      },
    ],
  }),
  component: Portfolio,
});

type Piece = {
  title: string;
  format: string;
  src: string;
  copy: string;
  note?: string;
};

type Campaign = {
  slug: string;
  name: string;
  intro: string;
  pieces: Piece[];
};

const campaigns: Campaign[] = [
  {
    slug: "recarga-rapida",
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
        title: "Conectado em qualquer hora — Feed Instagram",
        format: "Feed Instagram",
        src: recargaFeed2.url,
        copy:
          "Conectado em qualquer hora, qualquer lugar. Com o App BrasilCard Cliente, você faz recargas em segundos! Mais praticidade e liberdade!",
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
    slug: "indique-um-amigo",
    name: "Indique um Amigo",
    intro:
      "Campanha de indicação com regra de conversão direta — R$20 de desconto por indicação aprovada, até 55 indicações por cliente (R$1.100 em desconto acumulável).",
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
        note: '"120 mil amigos indicados" é dado institucional da marca, não KPI pessoal.',
      },
    ],
  },
];

function Portfolio() {
  return (
    <>
      <SiteNav />
      <main className="container-page py-14">
        <section className="pb-10 border-b border-border">
          <p className="text-cyan text-xs tracking-[0.25em] uppercase mb-4">
            Portfólio · BrasilCard | BOLT
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-[0.95]">
            Campanhas <span className="italic text-cyan">de copy</span>
            <br /> em produção.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Peças produzidas na experiência{" "}
            <Link to="/" className="text-cyan hover:underline">
              Analista de Comunicação e Marketing — BrasilCard | BOLT
            </Link>
            . Todas com autorização confirmada do gestor da BrasilCard e do designer.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Crédito obrigatório em cada peça:{" "}
            <span className="text-foreground">
              Copywriting: Antonio Fontes · Design: Marcello Castro
            </span>
          </p>
        </section>

        {campaigns.map((c) => (
          <section key={c.slug} className="mt-16">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="text-cyan text-xs tracking-[0.25em] uppercase mb-2">
                  Campanha
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl">
                  {c.name}
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl">{c.intro}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {c.pieces.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl overflow-hidden bg-surface border border-border flex flex-col"
                >
                  <div className="bg-background/40 aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-cyan">
                        {p.format}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg leading-snug">
                      {p.title}
                    </h3>
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
          </section>
        ))}

        <section className="mt-20 p-8 md:p-12 rounded-xl bg-surface border border-border flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl">
              Quer conversar sobre uma vaga ou projeto?
            </h2>
            <p className="text-muted-foreground mt-2">
              Envie a descrição — adapto o currículo mantendo os fatos exatamente como estão documentados.
            </p>
          </div>
          <a
            href="mailto:comfontes@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan text-primary-foreground font-medium hover:opacity-90 transition"
          >
            comfontes@gmail.com
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
