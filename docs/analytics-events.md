# GA4 event taxonomy

All events fire via `trackEvent()` / `<TrackCTA>` (`src/lib/gtag.ts`,
`src/components/analytics/`). GA only runs in **production** (`NODE_ENV=production`),
so local dev and previews never send events. Route-change `page_view`s are sent
automatically by `src/components/analytics/Analytics.tsx`.

## CTA events

| Event | Params | Fires from |
|---|---|---|
| `get_started_click` | `location` | Home hero, nav (desktop), product heroes (`brain`, `assistants`, `chatspace`, `slack`, `individuals`, `teams`) |
| `book_demo_click` | `location` | Home hero, home final CTA, product heroes, shared `FinalCTABand` (`final_cta_band`), mega-menu |
| `sign_in_click` | `location` | Nav (`nav`, `mobile_nav`) |
| `discord_click` | `location` | Home final CTA, `FinalCTABand` |
| `pricing_cta_click` | `plan`, `cta` | Pricing plan cards (Free / Team / Custom) |
| `nav_menu_click` | `link_label`, `location` | Mega-menu cards + footer-of-menu links, mobile nav links |
| `footer_nav_click` | `link_label`, `group` | Site footer column links |
| `footer_legal_click` | `link_label` | Site footer legal links (Terms, Privacy, …) |
| `contact_form_submitted` | `location` | Contact page form submit (`contact_page`) |

## Recommended key events (mark as conversions in GA4)

In GA4 → Admin → Events, toggle "Mark as key event" for the high-intent ones:

- **`book_demo_click`** — primary conversion.
- **`get_started_click`** — primary conversion.
- **`pricing_cta_click`** — softer / mid-funnel conversion.
- **`contact_form_submitted`** — form-fill conversion.

The rest (`nav_menu_click`, `footer_*`, `discord_click`, `sign_in_click`) are
navigation/engagement signals — useful for path analysis, not conversions.

## Not yet wired (need product surfaces to exist first)

Form-submission conversions from the strategy doc — `demo_request_submitted`,
`signup_completed` — require the actual forms / thank-you pages. Add
`trackEvent("demo_request_submitted")` on submit success (or fire on a
`/thank-you-*` page view) once those exist. (`contact_form_submitted` is now
wired — see above.)

## Adding a new CTA event

- **Client component:** `import { trackEvent } from "@/lib/gtag"` then
  `onClick={() => trackEvent("name", { location: "…" })}`.
- **Server component:** wrap the CTA in
  `<TrackCTA event="name" params={{ … }}>…</TrackCTA>` (renders `display:contents`,
  no layout impact).
