// Northbrand hub service worker.
// Its only job is to exist: Chrome asks for one before it will offer the
// Add to Home Screen prompt. It deliberately caches nothing, so every
// visit loads the live page from northbrand.net exactly as before.
// TO CHANGE BEHAVIOR: if the hub ever needs offline support, this fetch
// handler is where a cache would go. Until then, keep it a pass-through.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) { event.respondWith(fetch(event.request)); });
