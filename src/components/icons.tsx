/* Inline SVG icons reproduced from the Claude Design handoff.
   Kept as small components so the markup stays readable and reusable. */
import type { SVGProps } from "react";

/** Blueline logo mark — truck inside a box. `wheels` adds the two wheel circles. */
export function LogoMark({
  size = 22,
  wheels = true,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number; wheels?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2 7h11v8H2z" fill="#fff" />
      <path d="M13 10h4l3 3v2h-7z" fill="var(--color-accent)" />
      {wheels && (
        <>
          <circle cx="6.5" cy="16.5" r="2" fill="#fff" stroke="var(--color-blue)" strokeWidth="1.4" />
          <circle cx="16.5" cy="16.5" r="2" fill="#fff" stroke="var(--color-blue)" strokeWidth="1.4" />
        </>
      )}
    </svg>
  );
}

/** Telephone handset glyph (solid fill = currentColor). */
export function PhoneIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z" />
    </svg>
  );
}

/** Detailed WhatsApp glyph (bubble + handset). */
export function WhatsAppIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7L7 20.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.3-.1.6.5.8 1 1.3 1.7 1.8.6.4 1 .5 1.2.6.2.1.4.1.5-.1l.6-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.6-.1 1z" />
    </svg>
  );
}

/** Simplified WhatsApp bubble (used on CTAs and the floating button). */
export function WhatsAppBubble({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7L7 20.4A10 10 0 1 0 12 2z" />
    </svg>
  );
}

/** Check mark used on the hero trust chips. */
export function CheckIcon({ size = 14, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

/** Map pin (outline). */
export function PinIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
    </svg>
  );
}

/** Envelope (outline). */
export function MailIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 4h16v12H4z" />
      <path d="m4 7 8 5 8-5" />
    </svg>
  );
}

/** Right arrow (used on the "coming soon" coverage row). */
export function ArrowRight({ size = 22, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Hamburger menu. */
export function BurgerIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** Close (X) icon for the open mobile menu. */
export function CloseIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
