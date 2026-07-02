/** Live interactive Supademo demo embed.
 *
 *  The embed_v2 player renders its OWN browser-window chrome (traffic lights +
 *  caption + viewport) and sizes that unit to whatever box we give it — fitting to
 *  height and centering horizontally, painting the leftover as a TRANSPARENT
 *  letterbox. Its effective ratio also drifts with width (fixed-height chrome), so
 *  no outer frame ratio can hug it at every size. Rather than fight that with a
 *  second frame (which produced the visible side-gap "double frame"), we let the
 *  player's own window be the frame and sit it on the page — any letterbox is
 *  transparent and blends into the page background. `aspect` (the demo's recording
 *  ratio, from fetch_aspects.mjs) is used only to keep that letterbox minimal. */
const DEFAULT_ASPECT = "3828 / 1962"; // 1.95 — the most common Souvenir recording ratio
export default function SupademoEmbed({ demoId, title, aspect }: { demoId?: string; title: string; aspect?: string }) {
  const ratio = aspect || DEFAULT_ASPECT;
  if (!demoId) {
    return (
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-[var(--r-xl)] border border-line bg-dark-bg"
        style={{ aspectRatio: ratio, boxShadow: "var(--shadow-float)" }}
      >
        <span className="absolute right-4 top-4 rounded-[var(--r-pill)] bg-[var(--dark-surface)] px-3 py-1 font-sans text-[var(--text-micro)] font-medium text-dark-ink-muted">
          Interactive demo · coming soon
        </span>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--dark-surface)]" style={{ boxShadow: "var(--shadow-md)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="ml-1"><path d="M6 4l14 8-14 8V4z" fill="var(--dark-ink)" /></svg>
        </span>
      </div>
    );
  }
  return (
    <div className="relative" style={{ aspectRatio: ratio }}>
      <iframe
        src={`https://app.supademo.com/embed/${demoId}?embed_v=2`}
        title={title}
        loading="lazy"
        allow="clipboard-write"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
