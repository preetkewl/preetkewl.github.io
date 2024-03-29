'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "edd1e54a67e13fe601da483c8d08e859",
"index.html": "15ba786d5640c8ceac9510da4875f00a",
"/": "15ba786d5640c8ceac9510da4875f00a",
"main.dart.js": "92d99d0edef3c87250783d088351d7b6",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ac437f237654b6f9c5ab860946dbfcb",
"assets/images/group.png": "1d14740b8448bb599668419312c6c333",
"assets/images/2.0x/group.png": "b8743e5b52cfde1705d6c35170cfb6b3",
"assets/images/2.0x/divider.png": "bf597fadd5803b035edfebd22fec34ee",
"assets/images/2.0x/theme.png": "525368324ae6fd0656a8c47d80c78736",
"assets/images/2.0x/logo_web.png": "b89f0cff48d67d13ef86cecc7a791192",
"assets/images/2.0x/menu.png": "9c15bdb5553a0698cbb26d58a145099c",
"assets/images/2.0x/logo.png": "a7bbdfbfe1f4ff18a5ab2b19976f0fb2",
"assets/images/2.0x/view.png": "ded1e0390ad239fde17753c269ccd4dd",
"assets/images/2.0x/sort.png": "f3b1e5a540de8582cebb13593a37426d",
"assets/images/2.0x/edit.png": "45814a8ab9b121614f9db843585ca6d5",
"assets/images/2.0x/monogram.png": "332b927051f0e38352eb59f7cfea6eb7",
"assets/images/divider.png": "6b12f89a14d09208ebc49176d304faf1",
"assets/images/theme.png": "248a5bd3221def3d38d4da6277eeb453",
"assets/images/3.0x/group.png": "01bf7d54c835f30e94a24db177117640",
"assets/images/3.0x/divider.png": "4e2b4aa763524e645d9002181f2cf0dc",
"assets/images/3.0x/theme.png": "01b8f75d0057e5cdc721e29e0650eeca",
"assets/images/3.0x/logo_web.png": "4060da4d45fa43a7f8fabc9590407437",
"assets/images/3.0x/menu.png": "d3b532b110d54eee2bf0289a9aa9a35f",
"assets/images/3.0x/logo.png": "0a82363611ba1e4c5ea9d213bc1a7fb1",
"assets/images/3.0x/view.png": "a341b9f76f629dfbe6716121333ed532",
"assets/images/3.0x/sort.png": "c8849d50cd06ddd8d2d7ecce7a434556",
"assets/images/3.0x/edit.png": "74670710049c2179bd38e05eb017064e",
"assets/images/3.0x/monogram.png": "ef6e6f2d7d14ea551439f1868493d985",
"assets/images/4.0x/monogram.png": "6165d5566edc1791240be28945d618d5",
"assets/images/logo_web.png": "02146f3d98e08c460307e322330bd235",
"assets/images/menu.png": "29eea6e1a1e66e0ce440d1e22d8cbdcb",
"assets/images/logo.png": "841818a3a5157ffe0c83315e2ba91d8f",
"assets/images/view.png": "27bbb8fcec9c2b292cfca6f50f4e1901",
"assets/images/sort.png": "838eaf08f9315da0586528e75e0fbc83",
"assets/images/edit.png": "4d2f19c03603baf0b2d85fb297f74320",
"assets/images/monogram.png": "c7860de140d72b8339f7aef208c70ab8",
"assets/AssetManifest.json": "399cd49c3d90ebef7c73363ada0d6afb",
"assets/NOTICES": "713c7b4115bbb99bcd5774965552be1d",
"assets/FontManifest.json": "36a7eeee8ec777fa9662f0bd25cf7dd6",
"assets/AssetManifest.bin.json": "6db5209788279a98e743ba3a1e575ed8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "08091c5a19148cac3c251932f00e32b8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b5bba9a71daae74968418a6e03ed7852",
"assets/fonts/ABCFavorit-Regular.ttf": "19bc2288a412354122c3ea4c844f5b08",
"assets/fonts/GT-Super-Display-Regular.ttf": "f3bd41625fa311d87cf288817015f28d",
"assets/fonts/ABCFavorit-Light.ttf": "7fc2fa1924bd70f3cf7e5db3ae83617a",
"assets/fonts/GT-Super-Text-Book-Italic.ttf": "b7dd16bda42892f4a4e42c17cfd5113f",
"assets/fonts/MaterialIcons-Regular.otf": "77e8518b9d006ec20df2751c46d9ad2e",
"assets/assets/images/men.svg": "839611f7c7cf388b15a4e19b64f3bc3b",
"assets/assets/images/profile.png": "922dde69be08fa8b62e97282616e430f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
