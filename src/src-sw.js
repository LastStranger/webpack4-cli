workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.routing.registerNavigationRoute(
    // Assuming '/single-page-app.html' has been precached,
    // look up its corresponding cache key.
    workbox.precaching.getCacheKeyForURL('/index.html')
);
// workbox.routing.registerRoute(
//     new RegExp('http://localhost:3456/'),
//     new workbox.strategies.StaleWhileRevalidate()
//     // new workbox.strategies.NetworkFirst()
// );
//add in src/src-sw.js
// workbox.routing.registerRoute(
//     /https:\/\/api\.exchangeratesapi\.io\/latest/,
//     // /http:\/\/localhost:3456\/one/,
//     new workbox.strategies.NetworkFirst({
//         cacheName: "currencies",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 10 * 60 // 10 minutes
//             })
//     ]
//
//     })
// );
