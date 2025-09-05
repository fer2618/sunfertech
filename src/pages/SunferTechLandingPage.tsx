import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Wrench,
  ShieldCheck,
  Battery,
  Smartphone,
  Clock,
  CreditCard,
  Star,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  Shield,
  CheckCircle2,
} from "lucide-react";

/**
 * SunferTech — Landing Page (React + TypeScript + Tailwind + Framer Motion)
 *
 * ✅ Destaque: serviço LEVA & TRAZ (coleta e entrega)
 * ✅ Em PT-BR e com CTAs prontos para WhatsApp
 * ✅ Formulário que já abre o WhatsApp com os dados preenchidos
 * ✅ Seções: Hero, Como funciona, Serviços, Diferenciais, Áreas, Avaliações, FAQ, CTA final, Footer
 * ✅ Componentização simples em um único arquivo para fácil copy/paste
 *
 * ▶️ Como usar:
 * 1) Garanta que Tailwind esteja configurado no seu projeto.
 * 2) Instale dependências (opcional, mas recomendado para os ícones/anim.):
 *    npm i framer-motion lucide-react
 * 3) Substitua as constantes WHATSAPP_NUMBER, BUSINESS_NAME e CITY conforme sua operação.
 * 4) (Opcional) Ajuste cores, fontes e logotipo no <NavBar />.
 */

// 🔧 CONFIG — personalize aqui
const BUSINESS_NAME = "SunferTech";
const CITY = "Rio Claro e região"; // ajuste para sua cidade
const WHATSAPP_NUMBER = "5519971344065"; // ex.: 55DDDNUMERO (sem +)
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const AREAS = [
  "Centro",
  "Vilas/Condomínios próximos",
  "Bairros principais",
  "Zona Norte",
  "Zona Sul",
];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, duration: 0.5, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function classNames(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white shadow-sm">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-bold tracking-tight text-slate-900 text-lg">
              {BUSINESS_NAME}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#como-funciona" className="hover:text-slate-900">Como funciona</a>
            <a href="#servicos" className="hover:text-slate-900">Serviços</a>
            <a href="#diferenciais" className="hover:text-slate-900">Diferenciais</a>
            <a href="#areas" className="hover:text-slate-900">Áreas</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero agendar uma coleta para meu celular.")}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md"
            >
              Solicitar coleta <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <motion.div variants={item}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[12px] font-medium text-amber-700">
              <Truck className="h-3.5 w-3.5" /> Leva & traz incluso
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Assistência técnica <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">com coleta e entrega</span> no mesmo dia*
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Quebrou a tela? Bateria fraca? Buscamos seu aparelho em {CITY}, consertamos com peças de qualidade e devolvemos rapidinho. Sem sair de casa.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#agendar"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
              >
                Solicitar coleta agora <ArrowRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:shadow-sm"
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Preciso de um orçamento.")}`}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">*Sujeito à disponibilidade de agenda e tipo de reparo.</p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[{label:"Atendimentos",value:"5k+"},{label:"Satisfação",value:"4.9/5"},{label:"Garantia",value:"90 dias"}].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-100 bg-white/60 px-5 py-4 shadow-sm">
                  <dt className="text-xs text-slate-500">{s.label}</dt>
                  <dd className="text-xl font-bold text-slate-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div variants={item} className="relative">
            {/* Mockup card */}
            <div className="mx-auto max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Orçamento em minutos</p>
                  <p className="text-xs text-slate-500">Descreva o problema e receb[a] o valor estimado.</p>
                </div>
              </div>
              <QuickQuoteForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickQuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(AREAS[0]);
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");

  const canSubmit = name && phone && model && issue;

  const message = useMemo(() => {
    const lines = [
      `Olá, me chamo ${name}. Quero agendar um Orçamento.`,
      `Telefone: ${phone}`,
      `Bairro: ${area}`,
      `Modelo: ${model}`,
      `Problema: ${issue}`,
      `Origem: Site (${BUSINESS_NAME})`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [name, phone, area, model, issue]);

  return (
    <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          placeholder="Telefone (WhatsApp)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          {AREAS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <input
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          placeholder="Modelo do aparelho (ex.: iPhone 12)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <textarea
        className="min-h-[90px] w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
        placeholder="Descreva o problema (ex.: tela trincada, não carrega, molhou, bateria descarregando rápido...)"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          Dados protegidos. Envio direto via WhatsApp, sem formulário longo.
        </p>
        <a
          aria-disabled={!canSubmit}
          className={classNames(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-sm",
            canSubmit
              ? "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white hover:shadow-md"
              : "pointer-events-none bg-slate-200 text-slate-500"
          )}
          href={canSubmit ? `${WHATSAPP_BASE}?text=${message}` : undefined}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar coleta <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </form>
  );
}

function ComoFunciona() {
  const steps = [
    {
      title: "Solicite a coleta",
      desc: "Você agenda pelo site ou WhatsApp. Nosso time confirma a janela de atendimento.",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      title: "Buscamos seu aparelho",
      desc: "Motoboy faz a retirada com protocolo de segurança e checklist.",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Diagnóstico e aprovação",
      desc: "Enviamos orçamento transparente por mensagem. Só seguimos com sua autorização.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Conserto e devolução",
      desc: "Reparo por técnicos especialistas e devolução no endereço combinado.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Como funciona
          </h2>
          <p className="mt-3 text-slate-600">
            Serviço ponta a ponta com comodidade e segurança. Você só se preocupa em voltar a usar o celular.
          </p>
        </div>
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.li
              variants={item}
              key={s.title}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                {s.icon}
              </div>
              <p className="font-semibold text-slate-900">{i + 1}. {s.title}</p>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function Servicos() {
  const services = [
    {
      title: "Troca de Tela",
      icon: Smartphone,
      badge: "Mais solicitado",
      info: "Cristal original / premium",
      eta: "1–3h",
      price: "a partir de R$ 199",
    },
    {
      title: "Substituição de Bateria",
      icon: Battery,
      badge: "Garantia 90 dias",
      info: "Baterias com selo de qualidade",
      eta: "1–2h",
      price: "a partir de R$ 149",
    },
    {
      title: "Conector / Carga",
      icon: Wrench,
      badge: "Teste gratuito",
      info: "Limpeza e/ou troca do flex",
      eta: "1–2h",
      price: "sob consulta",
    },
    {
      title: "Diagnóstico Completo",
      icon: ShieldCheck,
      badge: "Sem compromisso",
      info: "Relatório e orçamento detalhado",
      eta: "até 24h",
      price: "gratuito",
    },
  ];

  return (
    <section id="servicos" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Serviços populares</h2>
          <p className="mt-3 text-slate-600">Trabalhamos com as principais marcas (Apple, Samsung, Xiaomi, Motorola e outras).</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{s.title}</p>
                  <p className="text-xs text-slate-500">{s.info}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  <Clock className="mr-1 inline h-4 w-4 align-[-2px]" /> {s.eta}
                </div>
                <div className="text-sm font-semibold text-slate-900">{s.price}</div>
              </div>
              {s.badge && (
                <span className="absolute -top-2 -right-2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
                  {s.badge}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
          >
            Ver disponibilidade <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const perks = [
    { icon: Truck, title: "Leva & traz incluso", desc: "Coleta e entrega com protocolo seguro e código de rastreio." },
    { icon: ShieldCheck, title: "Garantia de 90 dias", desc: "Padrão de qualidade em peças e mão de obra." },
    { icon: CreditCard, title: "Pagamento facilitado", desc: "Pix, cartão e parcelamento. Nota fiscal disponível." },
    { icon: Clock, title: "Agilidade real", desc: "Grande parte dos reparos é concluída no mesmo dia." },
    { icon: Wrench, title: "Técnicos especialistas", desc: "Experiência em multimarcas e diagnósticos precisos." },
    { icon: Shield, title: "Privacidade e segurança", desc: "Tratamos seus dados com confidencialidade." },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Por que {BUSINESS_NAME}?</h2>
          <p className="mt-3 text-slate-600">Não é só conserto. É experiência completa com transparência e conforto.</p>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {perks.map((p) => (
            <motion.li key={p.title} variants={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="font-semibold text-slate-900">{p.title}</p>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Atendimento em {CITY}</h2>
            <p className="mt-3 text-slate-600">Confira se seu bairro está na nossa rota. Se não estiver, fale com a gente que damos um jeito! ;)</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {AREAS.map((a) => (
                <li key={a} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800">
                  <MapPin className="h-4 w-4" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-slate-900">Horários</div>
              <div className="grid gap-2 text-sm text-slate-700">
                <div className="flex items-center justify-between"><span>Seg–Sex</span><span>09:00–18:00</span></div>
                <div className="flex items-center justify-between"><span>Sábado</span><span>09:00–13:00</span></div>
                <div className="flex items-center justify-between"><span>Domingo</span><span>plantão sob consulta</span></div>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                *Coletas agendadas até 16h (Seg–Sex) e 11h (Sáb) são priorizadas para o mesmo dia, sujeitas à disponibilidade.
              </div>
              <div className="mt-4">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero confirmar se meu bairro está na rota de coleta.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Confirmar cobertura <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Ana P.",
      text: "Buscou em casa e devolveu no mesmo dia! Tela ficou perfeita. Atendimento 10/10.",
      stars: 5,
    },
    {
      name: "Marcos R.",
      text: "Preço justo, orçamento transparente e sem empurrar serviço. Recomendo!",
      stars: 5,
    },
    {
      name: "Juliana T.",
      text: "Meu celular molhou e achei que tinha perdido. Recuperaram tudo!", 
      stars: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Avaliações de clientes</h2>
          <p className="mt-3 text-slate-600">Nosso compromisso é com o seu tempo e seu aparelho.</p>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.li key={r.name} variants={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-700">“{r.text}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{r.name}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quanto custa o serviço de leva e traz?",
      a: "A coleta e entrega estão inclusas nas regiões atendidas. Fora da área, cobramos uma taxa reduzida para cobrir o deslocamento.",
    },
    {
      q: "Vocês dão garantia?",
      a: "Sim, 90 dias para a maioria dos reparos e peças (exceto danos por impacto/umidade após o conserto).",
    },
    {
      q: "Quanto tempo leva para trocar a tela?",
      a: "Em média de 1 a 3 horas, dependendo do modelo e disponibilidade da peça.",
    },
    {
      q: "Como pago?",
      a: "Pix, cartão (crédito/débito) e parcelamento. Emitimos nota fiscal sob solicitação.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Perguntas frequentes</h2>
          <p className="mt-3 text-slate-600">Se não encontrar sua resposta, chama a gente no WhatsApp! ;)</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-100 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-slate-900">
                <span className="font-medium">{f.q}</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-600 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="agendar" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Vamos buscar seu celular?</h2>
          <p className="mt-3 text-slate-600">Clique abaixo e envie seus dados. Responderemos rapidinho para confirmar o horário.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero agendar uma coleta.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              Agendar pelo WhatsApp <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:shadow-sm"
            >
              Fazer orçamento rápido <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            {BUSINESS_NAME} — assistência técnica com leva & traz. Transparência, qualidade e agilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="font-bold text-slate-900">{BUSINESS_NAME}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Conserto de celulares com coleta e entrega. {CITY}.</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Contato</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp: {WHATSAPP_NUMBER.replace("5519991854940", "+5519991855940 ")}</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Atendimento: Seg–Sáb</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="text-slate-700 hover:text-slate-900">Serviços</a></li>
              <li><a href="#como-funciona" className="text-slate-700 hover:text-slate-900">Como funciona</a></li>
              <li><a href="#faq" className="text-slate-700 hover:text-slate-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Legal</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>© {new Date().getFullYear()} {BUSINESS_NAME}</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">
          Desenvolvido com ♥ 
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      title="Falar no WhatsApp"
      href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Preciso de ajuda com meu celular.")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export default function SunferTechLandingPage(): JSX.Element {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <NavBar />
      <Hero />
      <ComoFunciona />
      <Servicos />
      <Diferenciais />
      <Areas />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
