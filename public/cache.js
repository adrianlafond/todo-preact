const cacheName = 'pg-reader-v1.0.0';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.url.startsWith('http://localhost:3010')) {
    console.log('fetch event')
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the cache first
      return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
          console.log('return cache')
          return cachedResponse;
        }

        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          console.log('fetch')
          // Add the network response to the cache for later visits
          cache.put(event.request, fetchedResponse.clone());

          // Return the network response
          return fetchedResponse;
        });
      });
    }));
  // } else {
  //   return;
  // }
});