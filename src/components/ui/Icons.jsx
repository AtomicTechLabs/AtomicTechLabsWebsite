/**
 * All SVG icons used across the site.
 * No emojis — clean, scalable, theme-friendly.
 */

const base = "transition-colors duration-200"

export function IconRobot({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="10" y="18" width="28" height="22" rx="4" stroke={color} strokeWidth="2.2"/>
      <rect x="17" y="24" width="5" height="5" rx="1.5" fill={color}/>
      <rect x="26" y="24" width="5" height="5" rx="1.5" fill={color}/>
      <path d="M20 33h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 18V12" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="24" cy="10" r="2.5" stroke={color} strokeWidth="2"/>
      <path d="M10 28H5M38 28h5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <rect x="16" y="40" width="4" height="5" rx="1" fill={color}/>
      <rect x="28" y="40" width="4" height="5" rx="1" fill={color}/>
    </svg>
  )
}

export function IconGraduate({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M24 8L44 18L24 28L4 18L24 8Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M14 23v10c0 4 4.5 8 10 8s10-4 10-8V23" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M44 18v10" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="44" cy="30" r="2" fill={color}/>
    </svg>
  )
}

export function IconBuilding({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="6" y="14" width="24" height="30" rx="2" stroke={color} strokeWidth="2.2"/>
      <rect x="30" y="24" width="12" height="20" rx="2" stroke={color} strokeWidth="2.2"/>
      <rect x="12" y="20" width="5" height="5" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="21" y="20" width="5" height="5" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="12" y="30" width="5" height="5" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="21" y="30" width="5" height="5" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="16" y="38" width="8" height="6" rx="1" stroke={color} strokeWidth="1.8"/>
      <path d="M6 44h36" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconWifi({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M6 18C12.5 11.5 20 8 24 8s11.5 3.5 18 10" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M11 24c3.5-3.5 8-6 13-6s9.5 2.5 13 6" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M16 30c2-2 5-4 8-4s6 2 8 4" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
      <circle cx="24" cy="38" r="3" fill={color}/>
    </svg>
  )
}

export function IconChip({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="14" y="14" width="20" height="20" rx="3" stroke={color} strokeWidth="2.2"/>
      <rect x="18" y="18" width="12" height="12" rx="1.5" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5"/>
      <path d="M18 8v6M24 8v6M30 8v6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 34v6M24 34v6M30 34v6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 18h6M8 24h6M8 30h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 18h6M34 24h6M34 30h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconBrain({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M24 38C14 38 8 32 8 24c0-4 2-8 5-10" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M24 38c10 0 16-6 16-14 0-4-2-8-5-10" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M13 14c0-5.5 4.5-10 11-10s11 4.5 11 10" stroke={color} strokeWidth="2.2"/>
      <path d="M16 20c-3 0-5 2-5 4s2 4 5 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 20c3 0 5 2 5 4s-2 4-5 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 22c0-2 1.5-4 4-4s4 2 4 4v4c0 2-1.5 4-4 4s-4-2-4-4v-4Z" stroke={color} strokeWidth="1.8"/>
      <circle cx="24" cy="24" r="2" fill={color}/>
    </svg>
  )
}

export function IconTrophy({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M16 6h16v18c0 5-3.5 9-8 9s-8-4-8-9V6Z" stroke={color} strokeWidth="2.2"/>
      <path d="M16 10H8v4c0 4 3.5 7 8 8" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 10h8v4c0 4-3.5 7-8 8" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M24 33v6" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M16 42h16" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M19 16l2 5 3-7 3 7 2-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconSchool({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M6 20L24 10l18 10v24H6V20Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
      <rect x="18" y="30" width="12" height="14" rx="1.5" stroke={color} strokeWidth="2"/>
      <rect x="10" y="22" width="7" height="7" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="31" y="22" width="7" height="7" rx="1" stroke={color} strokeWidth="1.8"/>
      <path d="M24 10V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="5" r="2" fill={color}/>
    </svg>
  )
}

export function IconCircuit({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="6" y="6" width="10" height="10" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="32" y="6" width="10" height="10" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="6" y="32" width="10" height="10" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="32" y="32" width="10" height="10" rx="2" stroke={color} strokeWidth="2"/>
      <path d="M16 11h6v6h8v-6h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 37h6v-6h8v6h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16v6h6v8h-6v6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M37 16v6h-6v8h6v6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="3" fill={color}/>
    </svg>
  )
}

export function IconProject({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="6" y="10" width="36" height="30" rx="3" stroke={color} strokeWidth="2.2"/>
      <path d="M6 18h36" stroke={color} strokeWidth="2"/>
      <circle cx="12" cy="14" r="2" fill={color}/>
      <circle cx="18" cy="14" r="2" fill={color}/>
      <circle cx="24" cy="14" r="2" fill={color}/>
      <path d="M14 26h8M14 31h12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 24l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconSensor({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2.2"/>
      <path d="M11 11a18 18 0 0 0 0 26" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M37 11a18 18 0 0 1 0 26" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M16 16a11 11 0 0 0 0 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 16a11 11 0 0 1 0 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="2.5" fill={color}/>
    </svg>
  )
}

export function IconFactory({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M4 40V22l10-8v8l10-8v8l10-8v26H4Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
      <rect x="34" y="20" width="10" height="20" rx="1.5" stroke={color} strokeWidth="2"/>
      <rect x="8" y="30" width="5" height="7" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="17" y="30" width="5" height="7" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="26" y="30" width="5" height="7" rx="1" stroke={color} strokeWidth="1.8"/>
      <path d="M38 12v8" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M4 40h40" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconCert({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <rect x="6" y="8" width="28" height="36" rx="3" stroke={color} strokeWidth="2.2"/>
      <path d="M12 18h16M12 24h16M12 30h10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="36" cy="34" r="8" fill="var(--surface-2)" stroke={color} strokeWidth="2"/>
      <path d="M32 34l2.5 2.5L40 31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconMapPin({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8"/>
    </svg>
  )
}

export function IconPhone({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function IconMail({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M2 8l10 6 10-6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function IconClock({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/>
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconCheck({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconArrow({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconStar({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={`${base} ${className}`}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
    </svg>
  )
}

export function IconMenu({ size = 22, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconClose({ size = 22, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconChevron({ size = 14, color = "currentColor", className = "", direction = "down" }) {
  const r = { down:'0', up:'180deg', left:'90deg', right:'-90deg' }[direction]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={`${base} ${className}`}
      style={{ transform:`rotate(${r})`, transition:'transform 0.3s' }}>
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconSearch({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`}>
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8"/>
      <path d="M16.5 16.5L21 21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconLightning({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${base} ${className}`}>
      <path d="M28 6L12 26h14l-6 16 22-24H28L28 6Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Extra icons for Gallery & About ── */
export function IconAward({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="12" stroke={color} strokeWidth="2.2"/>
      <path d="M16 30l-4 12 12-5 12 5-4-12" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M24 13v7M20 17h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
export function IconPlant({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 40V22" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M24 22c0-8 8-14 16-12-2 8-10 12-16 12z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.12"/>
      <path d="M24 30c0-6-6-10-12-9 1 6 6 9 12 9z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.12"/>
    </svg>
  )
}
export function IconCar({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="4" y="20" width="40" height="16" rx="4" stroke={color} strokeWidth="2.2"/>
      <path d="M10 20l5-10h18l5 10" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
      <circle cx="14" cy="36" r="4" stroke={color} strokeWidth="2"/>
      <circle cx="34" cy="36" r="4" stroke={color} strokeWidth="2"/>
      <path d="M14 20h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
export function IconPCB({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="3" stroke={color} strokeWidth="2.2"/>
      <rect x="16" y="16" width="16" height="16" rx="2" stroke={color} strokeWidth="2"/>
      <path d="M6 18h4M6 24h4M6 30h4M38 18h4M38 24h4M38 30h4M18 6v4M24 6v4M30 6v4M18 38v4M24 38v4M30 38v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
export function IconArm({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="10" cy="38" r="5" stroke={color} strokeWidth="2.2"/>
      <path d="M10 33l6-14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="19" r="3" stroke={color} strokeWidth="2"/>
      <path d="M16 16l12-8" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="28" cy="8" r="3" stroke={color} strokeWidth="2"/>
      <path d="M31 8l7 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
export function IconTemp({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 28V12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="34" r="6" stroke={color} strokeWidth="2.2"/>
      <circle cx="24" cy="34" r="3" fill={color}/>
      <rect x="20" y="8" width="8" height="26" rx="4" stroke={color} strokeWidth="2"/>
      <path d="M28 16h4M28 20h4M28 24h4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
export function IconHome2({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 24L24 8l18 16" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20v20h10v-12h8v12h10V20" stroke={color} strokeWidth="2.2" strokeLinejoin="round"/>
    </svg>
  )
}
export function IconFire({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 42c-7 0-13-5-13-13 0-5 3-9 6-12 0 5 3 7 3 7s2-5 1-9c5 3 8 9 8 9s2-4 1-7c5 4 7 9 7 12 0 8-6 13-13 13z"
        stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.1"/>
      <path d="M24 42c-4 0-7-3-7-7 0-3 2-5 3-6 0 3 2 4 2 4s1-3 1-5c3 2 4 5 4 5s1-2 0-4c3 2 4 5 4 6 0 4-3 7-7 7z"
        fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}
export function IconChart({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 38h36M6 38V10" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M13 26l8-8 8 6 9-12" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="13" cy="26" r="2.5" fill={color}/>
      <circle cx="21" cy="18" r="2.5" fill={color}/>
      <circle cx="29" cy="24" r="2.5" fill={color}/>
      <circle cx="38" cy="12" r="2.5" fill={color}/>
    </svg>
  )
}
export function IconCloud({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M36 34H14a8 8 0 110-16 10 10 0 0119.5 4A6 6 0 1136 34z"
        stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.08"/>
      <path d="M22 34v8M26 34v8M19 42h10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
export function IconNetwork({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="12" r="4" stroke={color} strokeWidth="2"/>
      <circle cx="10" cy="36" r="4" stroke={color} strokeWidth="2"/>
      <circle cx="38" cy="36" r="4" stroke={color} strokeWidth="2"/>
      <path d="M24 16v6M24 22l-10 10M24 22l10 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="22" r="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}
export function IconLock({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="10" y="22" width="28" height="20" rx="4" stroke={color} strokeWidth="2.2"/>
      <path d="M16 22v-6a8 8 0 1116 0v6" stroke={color} strokeWidth="2.2"/>
      <circle cx="24" cy="32" r="3" fill={color}/>
      <path d="M24 35v4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
export function IconSchoolBuilding({ size=32, color="currentColor", className="" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="20" width="36" height="22" rx="2" stroke={color} strokeWidth="2.2"/>
      <path d="M24 8L6 20h36L24 8z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
      <rect x="20" y="30" width="8" height="12" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="10" y="26" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8"/>
      <rect x="32" y="26" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8"/>
      <path d="M24 8v-4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
