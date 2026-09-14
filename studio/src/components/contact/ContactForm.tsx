import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { getEmailLink, getWhatsAppLink } from "@/config/contact";
import { budgetOptions, serviceOptions } from "@/data/contactOptions";
import { WhatsAppIcon, GmailIcon } from "@/components/ui/ContactIcons";
import { sanitizeField } from "@/lib/sanitize";

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  website: string;
  service: string;
  budget: string;
  details: string;
  // Honeypot: a field real visitors never see or fill in. Left blank by
  // humans, but often auto-filled by bots. If it's non-empty on submit,
  // we quietly treat the submission as spam instead of failing loudly
  // (which would just teach the bot to adapt).
  hp: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  website: "",
  service: "",
  budget: "",
  details: "",
  hp: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loosely matches real-world phone entry (digits, spaces, +, -, parens),
// requiring at least 7 digits — not a strict international validator,
// just enough to catch empty/garbage input.
const PHONE_PATTERN = /^[+()\d][\d\s().-]{6,}$/;

const inputStyles =
  "w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors duration-200 focus:border-accent/60";

const errorStyles = "border-red-400/60 focus:border-red-400/60";

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-ink-muted">
        {label}
        {optional && <span className="text-ink-faint"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [flaggedAsSpam, setFlaggedAsSpam] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!PHONE_PATTERN.test(form.phone.trim())) next.phone = "Enter a valid phone number.";
    if (!form.business.trim()) next.business = "Please enter your business or brand name.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.budget) next.budget = "Please select a budget range.";
    if (!form.details.trim()) next.details = "Tell me a bit about the project.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot: real visitors never fill this in. If it's filled, quietly
    // short-circuit as if the form succeeded, without building or sending
    // any real message content.
    if (form.hp.trim().length > 0) {
      setFlaggedAsSpam(true);
      setSubmitted(true);
      return;
    }

    const fieldErrors = validate();
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setSubmitted(true);
  }

  if (submitted && flaggedAsSpam) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white/[0.02] p-8 text-center sm:p-10">
        <h3 className="text-xl font-semibold text-ink">Got it — thank you.</h3>
        <p className="text-sm leading-relaxed text-ink-muted">
          Your inquiry has been received.
        </p>
      </div>
    );
  }

  if (submitted) {
    // Sanitized just before use: strips control characters and caps
    // length, since this text gets embedded directly into mailto:/wa.me
    // links. Client-side only — if a backend is added later, re-validate
    // and re-sanitize there too.
    const safe = {
      name: sanitizeField(form.name, "name"),
      business: sanitizeField(form.business, "business"),
      phone: sanitizeField(form.phone, "phone"),
      website: sanitizeField(form.website, "website"),
      service: sanitizeField(form.service, "service"),
      budget: sanitizeField(form.budget, "budget"),
      details: sanitizeField(form.details, "details"),
    };

    const summary = `Name: ${safe.name}
Business / Brand: ${safe.business}
Phone: ${safe.phone}
Website: ${safe.website || "—"}
Service: ${safe.service}
Budget: ${safe.budget}

Project details:
${safe.details}`;

    const whatsappMessage = `Hey! I just submitted a project inquiry on your website.\n\n${summary}`;
    const emailBody = `Hey,\n\nI just submitted a project inquiry on your website.\n\n${summary}\n\nLooking forward to discussing the project.`;

    return (
      <div className="flex flex-col gap-6 rounded-2xl border border-accent/30 bg-accent/[0.05] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-glow-sm">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ink">Got it — thank you.</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Your project details are ready to send. Pick whichever channel you'd like a reply
            on — WhatsApp is fastest.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 ease-cinematic hover:bg-accent-soft hover:shadow-glow focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          <a
            href={getEmailLink("Project Inquiry", emailBody)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-cinematic hover:border-accent/50 hover:text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <GmailIcon className="h-4 w-4" />
            Email Me
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
            setFlaggedAsSpam(false);
          }}
          className="text-xs text-ink-faint underline underline-offset-4 hover:text-ink-muted"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot field — hidden from sighted users and screen readers,
          skipped by keyboard tab order. Bots that auto-fill every input
          tend to fill this in; real visitors never see or touch it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.hp}
          onChange={(e) => update("hp", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputStyles} ${errors.name ? errorStyles : ""}`}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={`${inputStyles} ${errors.email ? errorStyles : ""}`}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={`${inputStyles} ${errors.phone ? errorStyles : ""}`}
            placeholder="+1 (555) 555-5555"
          />
        </Field>
        <Field label="Business / Brand" htmlFor="business" error={errors.business}>
          <input
            id="business"
            value={form.business}
            onChange={(e) => update("business", e.target.value)}
            aria-invalid={Boolean(errors.business)}
            className={`${inputStyles} ${errors.business ? errorStyles : ""}`}
            placeholder="Your business name"
          />
        </Field>
      </div>

      <Field label="Website" htmlFor="website" optional>
        <input
          id="website"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
          className={inputStyles}
          placeholder="yourwebsite.com"
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Service required" htmlFor="service" error={errors.service}>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            className={`${inputStyles} appearance-none ${errors.service ? errorStyles : ""}`}
          >
            <option value="" disabled className="bg-void">
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="bg-void">
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" htmlFor="budget" error={errors.budget}>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            aria-invalid={Boolean(errors.budget)}
            className={`${inputStyles} appearance-none ${errors.budget ? errorStyles : ""}`}
          >
            <option value="" disabled className="bg-void">
              Select a budget
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b} className="bg-void">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project description" htmlFor="details" error={errors.details}>
        <textarea
          id="details"
          rows={5}
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          aria-invalid={Boolean(errors.details)}
          className={`${inputStyles} ${errors.details ? errorStyles : ""}`}
          placeholder="What are you trying to build or grow?"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center self-start rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 ease-cinematic hover:bg-accent-soft hover:shadow-glow focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
      >
        Send inquiry
      </button>
    </form>
  );
}
