"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function JGTSLandingGreen() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <ThemeApplier theme={theme} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        
      `}</style>

      {/* THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <Image src="/icon-jgts.png" alt="Logo JGTS" width={86} height={86} />
        {/* <div className="nav-logo">
          JGTS <span className="nav-logo-accent">—</span> Imobiliária
        </div> */}
        <ul className="nav-center">
          <li>
            <a onClick={() => scrollTo("servicos")}>Serviços</a>
          </li>
          <li>
            <a onClick={() => scrollTo("sobre")}>Sobre</a>
          </li>
          {/* <li>
            <a onClick={() => scrollTo("valores")}>Valores</a>
          </li> */}
          <li>
            <a onClick={() => scrollTo("contacto")}>Contacto</a>
          </li>
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("contacto")}>
          Fale Connosco
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-left">
          <div className="eyebrow fade-up">
            Imobiliária E.I. — Maputo · Boane
          </div>
          <h1 className="hero-title fade-up delay-1">
            O imóvel certo
            <br />
            <span className="line-indent">
              para <em>cada sonho.</em>
            </span>
          </h1>
          <p className="hero-desc fade-up delay-2">
            Avaliações profissionais, compra, venda e arrendamento de imóveis —
            com confiança, rigor e valorização justa do seu patrimônio.
          </p>
          <div className="hero-btns fade-up delay-3">
            <button className="btn-filled" onClick={() => scrollTo("contacto")}>
              Consultar Agora
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo("servicos")}
            >
              Ver Serviços
            </button>
          </div>
          <div className="hero-tags fade-up delay-4">
            {[
              "Flats",
              "Vivendas",
              "Edifícios Comerciais",
              "Quintas",
              "Terrenos",
              "Apartamentos",
            ].map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-inner">
            <div className="hero-arch">
              <svg
                width="140"
                height="160"
                viewBox="0 0 100 120"
                fill="none"
                style={{ opacity: 0.13 }}
              >
                <path
                  d="M50 5 L95 45 L85 45 L85 110 L60 110 L60 80 L40 80 L40 110 L15 110 L15 45 L5 45 Z"
                  stroke="#1D7A48"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="42"
                  y="60"
                  width="16"
                  height="24"
                  stroke="#1D7A48"
                  strokeWidth="0.8"
                  fill="none"
                />
                <line
                  x1="50"
                  y1="60"
                  x2="50"
                  y2="84"
                  stroke="#1D7A48"
                  strokeWidth="0.5"
                />
                <line
                  x1="42"
                  y1="72"
                  x2="58"
                  y2="72"
                  stroke="#1D7A48"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">Experiência</div>
              <div className="hero-card-val">10+</div>
              <div className="hero-card-sub">Anos no mercado</div>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-num">5</span>
              <span className="hero-badge-label">Tipos de imóvel</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-track">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="marquee-item">
                Compra <span className="marquee-dot" /> Venda{" "}
                <span className="marquee-dot" />
                Arrendamento <span className="marquee-dot" /> Avaliação{" "}
                <span className="marquee-dot" />
                Terrenos <span className="marquee-dot" /> Investimento
              </span>
            ))}
        </div>
      </div>

      {/* SLOGAN */}
      <div className="slogan-section">
        <Image
          src="/jgts-icon.png"
          alt="Ícone de casa"
          width={200}
          height={200}
        />
        {/* <div className="slogan-side-label">
          Icone
          <br />
          oficial
          <br />
          JGTS
        </div> */}
        <blockquote className="slogan-quote">
          JGTS — Imobiliária:
          <br />
          Onde o seu sonho encontra endereço.
        </blockquote>
      </div>

      {/* SERVICES */}
      <section id="servicos" className="section">
        <div className="services-header">
          <div>
            <div className="label-tag">O que fazemos</div>
            <h2 className="sec-title">
              Soluções <em>imobiliárias</em>
              <br />
              completas
            </h2>
          </div>
          <p className="services-intro">
            Da avaliação profissional ao acompanhamento pós-venda, oferecemos um
            serviço completo para quem quer comprar, vender, arrendar ou
            investir em imóveis em Moçambique — sempre com qualidade e
            segurança.
          </p>
        </div>
        <div className="services-grid">
          {[
            {
              n: "01",
              title: "Avaliação Profissional",
              desc: "Avaliações precisas e imparciais de flats, vivendas, edifícios comerciais, quintas e espaços agrícolas. Valorização justa do seu patrimônio.",
            },
            {
              n: "02",
              title: "Compra & Venda",
              desc: "Facilitamos a compra e venda de imóveis residenciais e comerciais — desde zonas nobres até opções acessíveis em zonas em desenvolvimento.",
            },
            {
              n: "03",
              title: "Arrendamento",
              desc: "Gestão completa de contratos de aluguer para casas, apartamentos e espaços comerciais, com segurança jurídica e acompanhamento dedicado.",
            },
            {
              n: "04",
              title: "Venda de Terrenos",
              desc: "Terrenos para habitação, comércio, investimento ou outros tipos de actividade. Localizações estratégicas em Maputo e Boane.",
            },
            {
              n: "05",
              title: "Consultoria de Investimento",
              desc: "Orientação especializada para investidores que pretendem diversificar o portfólio com activos imobiliários seguros e rentáveis.",
            },
            {
              n: "06",
              title: "Documentação & Processos",
              desc: "Acompanhamento de toda a documentação e processos legais envolvidos em transacções imobiliárias, com transparência.",
            },
          ].map((s) => (
            <div key={s.n} className="service-card">
              <div className="svc-num">{s.n}</div>
              <div className="svc-title">{s.title}</div>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="section section-alt">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-corner-el" />
            <div className="about-frame">
              <div className="about-frame-inner">
                <svg
                  width="120"
                  height="160"
                  viewBox="0 0 100 130"
                  fill="none"
                  style={{ opacity: 0.15 }}
                >
                  <rect
                    x="5"
                    y="60"
                    width="90"
                    height="65"
                    stroke="#1D7A48"
                    strokeWidth="1"
                  />
                  <path
                    d="M50 10 L95 60 L5 60 Z"
                    stroke="#1D7A48"
                    strokeWidth="1"
                    fill="none"
                  />
                  <rect
                    x="38"
                    y="88"
                    width="24"
                    height="37"
                    stroke="#1D7A48"
                    strokeWidth="0.7"
                    fill="none"
                  />
                  <rect
                    x="12"
                    y="75"
                    width="22"
                    height="18"
                    stroke="#1D7A48"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <rect
                    x="66"
                    y="75"
                    width="22"
                    height="18"
                    stroke="#1D7A48"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="about-float-card">
              <span className="about-float-num">E.I.</span>
              <span className="about-float-label">Empresa Individual</span>
            </div>
          </div>
          <div>
            <div className="label-tag">Sobre a JGTS</div>
            <h2 className="sec-title">
              Trabalhamos para <em>encontrar</em>
              <br />o imóvel certo
            </h2>
            <div className="green-line" />
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.85",
                color: "var(--text-muted)",
                marginBottom: "14px",
              }}
            >
              Na JGTS – Imobiliária, E.I. trabalhamos para encontrar o imóvel
              certo para cada cliente. Dispomos de casas, apartamentos e espaços
              comerciais para venda e aluguer, desde imóveis de alto padrão em
              zonas nobres até opções acessíveis em zonas em desenvolvimento,
              sempre com qualidade e segurança.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.85",
                color: "var(--text-muted)",
              }}
            >
              Também tratamos da venda de terrenos adequados para habitação,
              comércio, investimento ou outros tipos de actividade. Se procura
              comprar, vender, arrendar ou investir — fale connosco.
            </p>
            <div className="mv-tabs">
              {[
                {
                  label: "Missão",
                  text: "Oferecer soluções imobiliárias de forma ética e segura, através da competência e do comprometimento do trabalho em equipe, proporcionando um atendimento diferenciado e contribuindo para a felicidade e qualidade de vida das famílias.",
                },
                {
                  label: "Visão",
                  text: "Tornar-se referência no ramo imobiliário através do respeito ao ser humano e ao meio ambiente, adaptação ao mercado, inovação, capacitação e desenvolvimento, para proporcionar mais experiências únicas.",
                },
              ].map((mv) => (
                <div key={mv.label} className="mv-tab">
                  <div className="mv-tab-label">{mv.label}</div>
                  <p className="mv-tab-text">{mv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="valores" className="section section-alt2">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            marginBottom: "64px",
          }}
        >
          <div>
            <div className="label-tag">Os nossos valores</div>
            <h2 className="sec-title">
              Princípios que <em>orientam</em>
              <br />
              cada decisão
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.85",
              color: "var(--text-muted)",
              alignSelf: "end",
            }}
          >
            Os nossos valores reflectem o compromisso com a excelência no
            atendimento e a integridade em cada transacção imobiliária que
            realizamos.
          </p>
        </div>
        <div className="values-grid">
          {[
            {
              n: "01",
              title: "Confiança",
              desc: "Zelamos pelo respeito aos clientes e parceiros em cada processo.",
            },
            {
              n: "02",
              title: "Transparência",
              desc: "Comunicação clara em todo o processo de compra, venda e locação.",
            },
            {
              n: "03",
              title: "Trabalho em Equipe",
              desc: "Valorizamos a colaboração e o crescimento conjunto.",
            },
            {
              n: "04",
              title: "Ética & Rigor",
              desc: "Conduta profissional exemplar em acções e palavras, sem excepção.",
            },
            {
              n: "05",
              title: "Capacitação",
              desc: "Desenvolvimento contínuo da equipa para melhor servir os nossos clientes.",
            },
            {
              n: "06",
              title: "Eficiência",
              desc: "Atingir objectivos honrando compromissos com máxima eficiência.",
            },
            {
              n: "07",
              title: "Satisfação",
              desc: "Experiência única de realizar o sonho da casa própria.",
            },
            {
              n: "08",
              title: "Diversificação",
              desc: "Portfólio diversificado para servir todos os perfis de clientes.",
            },
          ].map((v) => (
            <div key={v.n} className="value-card">
              <div className="value-num">{v.n}</div>
              <div className="value-icon-line" />
              <div className="value-title">{v.title}</div>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="section">
        <div className="diff-layout">
          <div className="diff-sticky">
            <div className="label-tag">Diferenciais</div>
            <h2 className="sec-title">
              Por que escolher
              <br />a <em>JGTS?</em>
            </h2>
            <div className="green-line" />
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.85",
                color: "var(--text-muted)",
              }}
            >
              O que nos distingue no mercado imobiliário moçambicano é a
              combinação de experiência, ética e um atendimento verdadeiramente
              personalizado.
            </p>
          </div>
          <div className="diff-list">
            {[
              {
                title: "Relacionamento de Confiança",
                desc: "Construímos relações duradouras baseadas na honestidade e transparência, colocando sempre os interesses do cliente em primeiro lugar.",
              },
              {
                title: "Experiência no Mercado",
                desc: "Amplo conhecimento do mercado imobiliário moçambicano, especialmente nas regiões de Maputo e Boane.",
              },
              {
                title: "Ética e Credibilidade",
                desc: "Todas as nossas transacções são conduzidas com máxima integridade, garantindo segurança jurídica para todas as partes envolvidas.",
              },
              {
                title: "Parcerias de Sucesso",
                desc: "Rede consolidada de parceiros estratégicos que nos permite oferecer as melhores oportunidades do mercado.",
              },
              {
                title: "Diversificação de Produtos",
                desc: "Portfólio diversificado que cobre habitação residencial, espaços comerciais, terrenos e propriedades agrícolas.",
              },
              {
                title: "Atendimento Diferenciado",
                desc: "Cada cliente recebe atenção personalizada, com acompanhamento em todas as etapas do processo imobiliário.",
              },
            ].map((d, i) => (
              <div key={d.title} className="diff-item">
                <div className="diff-num">0{i + 1}</div>
                <div>
                  <div className="diff-title">{d.title}</div>
                  <p className="diff-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: 0 }}>
        <div className="contact-wrap">
          <div className="contact-info">
            <div className="label-tag">Fale Connosco</div>
            <h2 className="sec-title">
              Pronto para
              <br />
              <em>encontrar o seu</em>
              <br />
              imóvel?
            </h2>
            <p>
              Contacte-nos hoje mesmo. A nossa equipa está pronta para ajudá-lo
              a encontrar o imóvel certo para as suas necessidades.
            </p>
            <div className="contact-list">
              <div className="c-item">
                <div className="c-icon">📞</div>
                <div>
                  {/* <div className="c-val">+258 82 832 9180</div> */}
                  <div className="c-val">+258 84 106 7083</div>
                  <div className="c-val">+258 87 210 6708</div>
                </div>
              </div>
              <div className="c-item">
                <div className="c-icon">✉️</div>
                <div className="c-val">joaquimd564@gmail.com</div>
              </div>
              <div className="c-item">
                <div className="c-icon">📍</div>
                <div className="c-val">Maputo — Boane, Moçambique</div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <div className="form-title">
              Envie uma <em>mensagem</em>
            </div>
            <div className="form-grid">
              <div className="field">
                <label className="field-label">Nome</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="O seu nome"
                />
              </div>
              <div className="field">
                <label className="field-label">Telefone</label>
                <input
                  className="field-input"
                  type="tel"
                  placeholder="+258 ..."
                />
              </div>
            </div>
            <div className="field">
              <label className="field-label">Email</label>
              <input
                className="field-input"
                type="email"
                placeholder="email@exemplo.com"
              />
            </div>
            <div className="field">
              <label className="field-label">Serviço de interesse</label>
              <select className="field-select">
                <option value="">Selecionar serviço</option>
                <option>Avaliação de Imóvel</option>
                <option>Compra de Imóvel</option>
                <option>Venda de Imóvel</option>
                <option>Arrendamento</option>
                <option>Venda de Terreno</option>
                <option>Consultoria de Investimento</option>
              </select>
            </div>
            <div className="field">
              <label className="field-label">Mensagem</label>
              <textarea
                className="field-textarea"
                placeholder="Descreva o que procura..."
              />
            </div>
            <button className="btn-submit">Enviar Mensagem</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          JGTS <span className="footer-logo-accent">—</span> Imobiliária, E.I.
        </div>
        <div className="footer-center">
          &quot;Onde o seu sonho encontra endereço.&quot;
        </div>
        <div className="footer-right">
          © {new Date().getFullYear()} JGTS Imobiliária.
          <br />
          Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}

function ThemeApplier({ theme }: { theme: "light" | "dark" }) {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return null;
}
