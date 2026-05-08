"use client";

import { useState } from "react";

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  servico: string;
  mensagem: string;
};

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = {
  nome: "",
  telefone: "",
  email: "",
  servico: "",
  mensagem: "",
};

const SERVICOS = [
  "Avaliação de Imóvel",
  "Compra de Imóvel",
  "Venda de Imóvel",
  "Arrendamento",
  "Venda de Terreno",
  "Consultoria de Investimento",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear error on change
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!form.telefone.trim()) newErrors.telefone = "Telefone é obrigatório";
    if (!form.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    if (!form.mensagem.trim()) newErrors.mensagem = "Mensagem é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        .contact-form-wrap {
          background: var(--surface);
          padding: 80px 72px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 40px;
        }
        .form-title em {
          font-style: italic;
          color: var(--green);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .field {
          margin-bottom: 24px;
        }

        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 13px 16px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
        }
        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: var(--green);
          background: var(--surface);
        }
        .field-input.has-error,
        .field-select.has-error,
        .field-textarea.has-error {
          border-color: #e05c5c;
        }

        .field-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B8272' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        .field-select option {
          background: var(--surface);
          color: var(--text);
        }

        .field-textarea {
          resize: none;
          height: 90px;
        }

        .field-error {
          font-size: 11px;
          color: #e05c5c;
          margin-top: 5px;
          display: block;
        }

        .btn-submit {
          background: var(--green);
          color: #fff;
          padding: 16px;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.3s;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .btn-submit:hover:not(:disabled) {
          background: var(--green-dark);
          transform: translateY(-2px);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-feedback {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
          padding: 14px 18px;
          border-radius: 2px;
          font-size: 14px;
        }
        .form-feedback.success {
          background: var(--green-pale);
          color: var(--green);
          border: 1px solid rgba(29,122,72,0.2);
        }
        .form-feedback.error {
          background: #fff0f0;
          color: #c0392b;
          border: 1px solid rgba(224,92,92,0.2);
        }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .contact-form-wrap { padding: 64px 24px; }
          .form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-form-wrap">
        <div className="form-title">
          Envie uma <em>mensagem</em>
        </div>

        <div className="form-grid">
          <div className="field">
            <label className="field-label">Nome</label>
            <input
              className={`field-input${errors.nome ? " has-error" : ""}`}
              type="text"
              placeholder="O seu nome"
              value={form.nome}
              onChange={set("nome")}
            />
            {errors.nome && <span className="field-error">{errors.nome}</span>}
          </div>

          <div className="field">
            <label className="field-label">Telefone</label>
            <input
              className={`field-input${errors.telefone ? " has-error" : ""}`}
              type="tel"
              placeholder="+258 ..."
              value={form.telefone}
              onChange={set("telefone")}
            />
            {errors.telefone && (
              <span className="field-error">{errors.telefone}</span>
            )}
          </div>
        </div>

        <div className="field">
          <label className="field-label">Email</label>
          <input
            className={`field-input${errors.email ? " has-error" : ""}`}
            type="email"
            placeholder="email@exemplo.com"
            value={form.email}
            onChange={set("email")}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label className="field-label">Serviço de interesse</label>
          <select
            className="field-select"
            value={form.servico}
            onChange={set("servico")}
          >
            <option value="">Selecionar serviço</option>
            {SERVICOS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="field-label">Mensagem</label>
          <textarea
            className={`field-textarea${errors.mensagem ? " has-error" : ""}`}
            placeholder="Descreva o que procura..."
            value={form.mensagem}
            onChange={set("mensagem")}
          />
          {errors.mensagem && (
            <span className="field-error">{errors.mensagem}</span>
          )}
        </div>

        <button
          className="btn-submit"
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <span className="spinner" />A enviar...
            </>
          ) : (
            "Enviar Mensagem"
          )}
        </button>

        {status === "success" && (
          <div className="form-feedback success">
            ✓ Mensagem enviada com sucesso! Entraremos em contacto brevemente.
          </div>
        )}
        {status === "error" && (
          <div className="form-feedback error">
            ✗ Erro ao enviar. Tente novamente ou contacte-nos directamente pelo
            telefone.
          </div>
        )}
      </div>
    </>
  );
}
