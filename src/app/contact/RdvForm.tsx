"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "ok" | "error";

const MOTIFS = [
  "Examen de vue",
  "Essayage de montures",
  "Ajustement / réparation",
  "Sur mesure",
  "Autre",
];

export function RdvForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/rdv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Erreur");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur réseau");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Nom" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Téléphone" name="phone" type="tel" required />
        <SelectField
          label="Motif"
          name="motif"
          options={MOTIFS}
          required
        />
      </div>
      <Field
        label="Date souhaitée"
        name="date"
        type="date"
        required={false}
      />
      <TextareaField
        label="Message (facultatif)"
        name="message"
        rows={4}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "inline-flex items-center justify-center px-8 py-4 text-[12px] tracking-widest uppercase border transition-colors",
            submitting
              ? "border-line text-ink-soft cursor-wait"
              : "border-ink bg-ink text-ivory hover:bg-accent hover:border-accent",
          )}
          style={{ letterSpacing: "0.22em" }}
        >
          {submitting ? "Envoi…" : "Envoyer la demande"}
        </button>

        {status === "ok" ? (
          <p className="text-sm text-accent">
            Merci, votre demande a bien été envoyée. Nous vous
            répondons sous 24 h ouvrées.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : null}
      </div>

      <p className="text-xs text-ink-soft pt-4 border-t border-line">
        Les informations recueillies servent uniquement à traiter votre
        demande de rendez-vous. Voir notre{" "}
        <a className="underline" href="/confidentialite">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-ink-soft">
        {label} {required ? "*" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-line py-3 text-ink text-base focus:border-accent focus:outline-none transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-ink-soft">
        {label} {required ? "*" : ""}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-3 w-full bg-transparent border-b border-line py-3 text-ink text-base focus:border-accent focus:outline-none transition-colors appearance-none"
      >
        <option value="" disabled>
          Choisir…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  rows,
}: {
  label: string;
  name: string;
  rows: number;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-ink-soft">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="mt-3 w-full bg-transparent border-b border-line py-3 text-ink text-base focus:border-accent focus:outline-none transition-colors resize-none"
      />
    </label>
  );
}
