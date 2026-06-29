import type { SVGProps } from 'react';

export function ZebradsLogo({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zebrads"
      {...props}
    >
      <defs>
        <pattern
          id="zebra-stripe"
          width="6"
          height="36"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-12)"
        >
          <rect width="3" height="36" fill="currentColor" />
        </pattern>
        <clipPath id="zebra-mark">
          <path d="M2 4 L30 4 L30 12 L14 28 L30 28 L30 32 L2 32 L2 24 L18 8 L2 8 Z" />
        </clipPath>
      </defs>
      <g>
        <rect
          x="0"
          y="0"
          width="32"
          height="36"
          fill="url(#zebra-stripe)"
          clipPath="url(#zebra-mark)"
        />
        <circle cx="26" cy="9" r="2.2" fill="var(--zebra-amber)" />
      </g>
      <text
        x="40"
        y="26"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        ZEBRADS
      </text>
    </svg>
  );
}
