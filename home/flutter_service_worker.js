'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1c9191373b49bcf226eaa89516e03214",
".git/config": "35339cc09436510902e6c2752fead32e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5dc00c8b454d23d0fd16773e9db6daaf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2e9345dd6c19cdaed3be9527b0ca6ee",
".git/logs/refs/heads/main": "5eb5bb49b98699c6b335b448f1d214bb",
".git/logs/refs/remotes/origin/main": "6fa2169832e6356406ea639cf0459c2a",
".git/objects/04/0878ad6572c71b44f08cf9420abeb26d3a6ffd": "638b4e10c583f4ec4dbc3d2a2e866fa7",
".git/objects/06/0d4433c8ae587c42a8f77eab9e42d4a3b4f491": "7961c0dd1335b5b22a9c144f34f70c3a",
".git/objects/06/4416747d433b9e689d362a15608c542f5b04ba": "e151702f8611c8d672765d2e525e9f6f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/845580ea2ae69f1a86489e1d5bf1b237845bc6": "80796c01023ef452d0e3e605b7786629",
".git/objects/0d/7874829d0d66792001969d9c13f36f199c1d01": "204c039068940a53f0452742af29ebc2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/be4f3935da974b8e5f33f93ce66284372cc6bd": "c5a994b65fed8bc8d699f76644855467",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/09c94518bfac1e2c3254fd96291982ae6ec608": "992d69e657d0d7b8349c45c469db37d1",
".git/objects/1d/825c015b277d21ac6e057ab46a597cc5465c86": "35387a8cf410cf6c59ec8944f32942bf",
".git/objects/1e/f8421fb86f89321b25aa4e8781efb9ae602d5b": "8e9f949ccb81187810078ce1c62dd0ea",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f272e096acbe78629d21742c7e7208d8977c4e": "e6f68e5c598738cd0d8a1369384b42c3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/fa379dfbc84302b300dcaf68d4bedb91ccf39a": "301d82dcf7a41a77caeffa5650f1434f",
".git/objects/30/cda839b0a1466c4b9af6a97777cfbe7269e703": "1aaa6280622e7e80c84b5a56bb04729f",
".git/objects/34/1f8c2390cddff05cef8732ae0caded2a1d2dda": "43ce177957103104a7dc3bda67d0ee41",
".git/objects/35/df54cc618d0ae004db589d23d6172c456f75f6": "1121c149ff83ce3fa5d7e42d167b4d8b",
".git/objects/3b/c8e70173f1241b3d3e6a76ba866a3074969f16": "cc785f379f61a945e1ed2d53807b8181",
".git/objects/3d/e1a2be6400ec641d9121cf7102eb50a188a27d": "a481d3914bb9b9c3a329db0185d98672",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/3b31443bb4b0babc32e96dfb26eb8fa482eade": "900ad85c39fdb9093aa8eb4e45799fa2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/bdd1ff4e53c28a2a7bd74f0a6b5f9c3049b9b2": "269b5825f9295b57c6d4d3595e8f10b5",
".git/objects/51/55d358d65a23d83cd996ef4b198c4b51aa8dfb": "2a0eba89abc4c536c40333555b33f32f",
".git/objects/55/67bc6664fae94ee28bab9866d2e3d9169520ed": "a4153bbefc0341e5bc1c306f9e8a933e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/1e247b009f8f754b8edbd86949f7fbc60e26ad": "7012376f0eee761819d7caeeaece71e1",
".git/objects/62/737b21fca93734a88861055b68c4fa348dc136": "2389bb38875485ae3c21ed046fd98c35",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/424638b6366f70e9504047cfb5016d6f29bba8": "313f0c7e2c00e028a9eb72aa73db5f95",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/02573bb071bf96d8ea38de62f868a384b92d0d": "38a0f524e0b933fd3f942cab53bad65b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/85/03d17425beb4b9f3dbcfff926228a5666919da": "baad30ba523c2d3bb0bac2b4fd9c39df",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/e6fc7c3ea29476e9e0bb4c4dc2ac7e365595ac": "7af0d32a3c35637141f51153039ff1ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7a32ab0822434d3d63fe4d2b8850070e20389c": "0f86b3212884ed0b9794eead47ad5cff",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/851c264ef32f99f9169b2b1e96c6ca2c0542d4": "f008e6ace4b6d0ed107ea40bbb1bec3d",
".git/objects/9c/5274943f8fc6ececa8d7a34835e5fc655935cf": "0ba3faa515e2c4a07681bea31d50a069",
".git/objects/9d/6a567926edb54d70f41acb60dacfeef0be12d5": "03f30c00e45345b9cb0f23a8dab2d338",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/ae/603a59d2eaf778fabdc234b132f7ac7d4cae6c": "d36c0b3b69c1e249b066e142ce8af096",
".git/objects/ae/89e9795067a20356333ab39309042f1dcb3898": "8fbae6348b9cb787419bd095217996b3",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/1a00494893a210fca24070a16d078e03b5e0a4": "5cd744d1887768dfe4ae5e8957316171",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/4969649ee722dcc9ba2cb6809e5bfc2c8e193a": "b5447b0768befe9d358f8946c4f3d7c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4c13f62a4a663b89709108fa04fc5dc3608c89": "c86edf1ba8033b70c4cfe0c4410942ff",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/108bd14835f142d3e0cec2eea0fa35bf3d54ff": "75f435008d22bd2dcaba056e7f79e7df",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/8bbe8f998859369d655b495a2e25014b1642ec": "89eb6053ff9fa9f579bb9b66bf186bd9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/68d827f1273f804c96a7282acb45fe86ad54f0": "6f253eaf5d12aadec2904e62a714baa0",
".git/objects/df/0abcbe7f0985f11875e3e5704bb541748aef08": "02e40dc86922d800c98a44def84118d0",
".git/objects/e1/44ce5ea54eff7fb29eb48bb1b2d602b1fa7e9d": "f2031e8eebb309ea187daee5cd6edaaa",
".git/objects/e3/ed4443a7ce541616bad04ae041b7fa42019204": "c6bb7e2c1cb2c3a5e94c537a3cbe4314",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/128a00ac8faa37d0d2b1825542c34d8cd26b22": "bc853debb343bfdf580ca5161a8ff9c3",
".git/objects/f5/52b7092def1c5fbc49bbc51e25b061f076e24e": "389c1e5b4bc1fb7b9de6d5dc96528b24",
".git/objects/fa/6791151704b9c99171241d25c0746b9046acd2": "d77497a096bb032529c07f297f4815a5",
".git/objects/fc/44a90023f2db44f980479f1790cd20a58123c0": "10cba2212c0ea55f6c2f8acc13159af3",
".git/refs/heads/main": "e8294ecfc51f534e91d22eb3ae797024",
".git/refs/remotes/origin/main": "e8294ecfc51f534e91d22eb3ae797024",
"assets/AssetManifest.bin": "b32cc8be144f33e84836268a2dcd7168",
"assets/AssetManifest.bin.json": "f35667a883639ad48e291c8e58ce69e4",
"assets/AssetManifest.json": "20ae3cdfcd7cddfc696a3d573e93f100",
"assets/assets/images/blure/bgprofile.jpg": "bd38ef0077288b37dc3b36e49b0d0dac",
"assets/assets/images/profile/person.png": "b94352a28ddcbdb6362f1330437feff6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "514f5ea3393adfe01cb0708620ae4b1a",
"assets/NOTICES": "fec3616dc614747f6395a313147a8c68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "63777d201dbdd140bc05873d6d9dcd28",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a4a9275ffe8bdc136f5461fcf458292",
"/": "6a4a9275ffe8bdc136f5461fcf458292",
"main.dart.js": "76157e864d2374524e99f61e072c91d2",
"manifest.json": "3c84965aec7ee3d7c47f2b5c39aef308",
"README.md": "a982d1ba5b4ce83dc84c02a2e161dc5f",
"version.json": "62ebc72ae5bee62119e907d34ed5f258"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
