export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5"
      style={{ background:'var(--surface-1)' }}>
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
          <circle cx="30" cy="30" r="26" stroke="var(--border)" strokeWidth="2"/>
          <circle cx="30" cy="30" r="26" stroke="var(--accent)" strokeWidth="2"
            strokeDasharray="60 100" strokeLinecap="round"
            style={{ animation:'loadSpin 1.2s linear infinite', transformOrigin:'center' }}/>
        </svg>
      </div>
      <span className="font-mono text-xs tracking-widest" style={{ color:'var(--accent)' }}>LOADING</span>
    </div>
  )
}
