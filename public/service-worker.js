const CACHE_NAME = 'kanzulhind-video-cache-v1';
const VIDEO_URL = 'https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/video.mp4';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(VIDEO_URL))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url === VIDEO_URL) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
}); 