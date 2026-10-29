import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const Icon = {
  leaf: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 20c0-8 5-14 16-16-1 11-7 16-16 16Z" />
      <path d="M4 20c3-5 7-9 12-12" />
    </svg>
  ),
  thermo: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M10 4a2 2 0 1 1 4 0v9.3a4 4 0 1 1-4 0V4Z" />
      <path d="M12 9v6" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  mill: (p: IconProps) => (
    <svg {...base(p)}>
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  ),
  flask: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  ),
  seal: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3l2.2 1.8 2.8-.3 1 2.6 2.6 1-.3 2.8L22 13l-1.8 2.2.3 2.8-2.6 1-1 2.6-2.8-.3L12 23l-2.2-1.8-2.8.3-1-2.6-2.6-1 .3-2.8L2 13l1.8-2.2-.3-2.8 2.6-1 1-2.6 2.8.3L12 3Z" />
      <path d="m9 13 2 2 4-4.5" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base({ strokeWidth: 2.2, ...p })}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  ),
  x: (p: IconProps) => (
    <svg {...base({ strokeWidth: 2, ...p })}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  plus: (p: IconProps) => (
    <svg {...base({ strokeWidth: 2, ...p })}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  minus: (p: IconProps) => (
    <svg {...base({ strokeWidth: 2, ...p })}>
      <path d="M5 12h14" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.8, ...p })}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  ),
  cart: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.7, ...p })}>
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.5l-6 3.3 1.3-6.7-5-4.6 6.8-.8L12 2.5Z" />
    </svg>
  ),
  chevron: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.8, ...p })}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.8, ...p })}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  ),
  truck: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.5" />
      <circle cx="17" cy="17.5" r="1.5" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4l-.5-.3-1.9-.9c-.2-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.4Z" />
    </svg>
  ),
  instagram: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.7, ...p })}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.7, ...p })}>
      <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8Z" />
    </svg>
  ),
  tiktok: (p: IconProps) => (
    <svg {...base({ strokeWidth: 1.7, ...p })}>
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.5" />
      <path d="M14 4c.5 2.5 2.3 4 4.5 4.3" />
    </svg>
  ),
  sparkle: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
