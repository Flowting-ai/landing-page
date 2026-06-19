// Central destinations for the marketing site's CTAs. The product app lives on
// app.getsouvenir.com (Auth0-gated Next.js app); marketing links cross over to it.
export const APP_URL = "https://app.getsouvenir.com";

// Auth0 login route. `screen_hint=signup` opens Auth0's signup view; without it
// you land on the login view (both are served by /auth/login in the app).
export const LOGIN_URL = `${APP_URL}/auth/login`;
export const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup`;

// Book-a-demo / talk-to-sales scheduling link.
export const DEMO_URL = "https://calendar.app.google/bkSbQ7BYNZBaZ4uX9";
