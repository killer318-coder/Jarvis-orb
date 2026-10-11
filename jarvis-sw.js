// Minimal service worker: it only makes the app installable.
// It caches nothing, so every update loads fresh.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
