// public/sw.js
// Basic service worker for PWA functionality
const CACHE_NAME = 'nuamana-pwa-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached response or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Handle push notifications
self.addEventListener('push', function(event) {
  let payload = {};
  
  if (event.data) {
    payload = event.data.json();
  }

  const options = {
    body: payload.body || 'Default body',
    icon: payload.icon || '/icon-192x192.png',
    badge: payload.badge || '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    }
  };

  event.waitUntil(
    self.registration.showNotification(payload.title || 'New notification', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});