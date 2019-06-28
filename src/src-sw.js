workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    new RegExp('http://localhost:3456/'),
    new workbox.strategies.StaleWhileRevalidate()
);
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
