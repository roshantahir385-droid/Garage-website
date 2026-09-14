/**
 * Single source of truth for every contact method on the site.
 * Every button, card, and floating CTA imports from here — never
 * hardcode a number, email, or link anywhere else.
 */

// ---- Raw contact details -------------------------------------------------

export const WHATSAPP_NUMBER = "+15109732570"; // display format
const WHATSAPP_NUMBER_DIGITS = "15109732570"; // wa.me requires digits only

export const GMAIL_ADDRESS = "growthavenueco1@gmail.com";

// Fill this in once you have it — e.g. SNAPCHAT_USERNAME = "yourhandle".
// Until it's set, the Snapchat CTA stays hidden rather than pointing
// anywhere fake or broken.
export const SNAPCHAT_USERNAME = "PUT_MY_SNAPCHAT_USERNAME_HERE";

const hasSnapchat =
  SNAPCHAT_USERNAME.trim().length > 0 &&
  SNAPCHAT_USERNAME !== "PUT_MY_SNAPCHAT_USERNAME_HERE";

// ---- Pre-filled messages ---------------------------------------------------

const DEFAULT_WHATSAPP_MESSAGE = `Hey! I found your website and I'd like to discuss working with you.

Name:
Service I'm interested in:
Budget:
Project details:`;

const DEFAULT_EMAIL_SUBJECT = "Project Inquiry";

const DEFAULT_EMAIL_BODY = `Hey,

I found your website and I'm interested in working with you.

Name:
Business / Brand:
Service I'm interested in:
Budget:
Project details:

Looking forward to discussing the project.`;

// ---- Link builders ----------------------------------------------------

/** wa.me deep link, optionally with a custom pre-filled message. */
export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${text}`;
}

/** mailto: link, optionally with a custom subject/body (e.g. from the form). */
export function getEmailLink(
  subject: string = DEFAULT_EMAIL_SUBJECT,
  body: string = DEFAULT_EMAIL_BODY
) {
  return `mailto:${GMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Snapchat deep link (opens the app on mobile, falls back to web). */
export function getSnapchatLink() {
  return `https://www.snapchat.com/add/${SNAPCHAT_USERNAME}`;
}

export const contact = {
  whatsapp: {
    number: WHATSAPP_NUMBER,
    href: getWhatsAppLink(),
    label: "Book on WhatsApp",
  },
  email: {
    address: GMAIL_ADDRESS,
    href: getEmailLink(),
    label: "Email Me",
  },
  snapchat: {
    username: SNAPCHAT_USERNAME,
    href: hasSnapchat ? getSnapchatLink() : null,
    label: "Message on Snapchat",
    enabled: hasSnapchat,
  },
} as const;
