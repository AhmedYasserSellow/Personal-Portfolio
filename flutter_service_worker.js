'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e04039a9a84e8d46886de27fed74fd0d",
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
".git/index": "e7c11dc8bd2ce5f2afa8812123fcea1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6f8ce4ef2625a9d45f1d76b11aeb431",
".git/logs/refs/heads/main": "4da18aad6ffdc0af95aad9079acea074",
".git/logs/refs/remotes/origin/main": "5ded2ef074e0bd303b1fe3f28ffd582b",
".git/objects/03/056266f8bb9d259bddcda6ad4fe5bf7aaf6316": "4f5953abf97e6ae0f7971c4404744f57",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/226675aba4167eaf79e729383d6ded2012d359": "a1fc93320ea78eeb32011df2ee734f96",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/c618f6cef4bd43a25be242354472aae99d37d8": "26d686faef2615ae2d0aa1c825dbd889",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1e/7114d59a4879b75f274e992a44b47e4585a9f6": "1ab70bba020d00eb0a74d99a222affd1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/6d7399bea2a20e0df79356eac292c2a88caa34": "ef64ba9ac7d9af60a4f239c16d3f0804",
".git/objects/26/ad8c96f14cdd73d78920100b0c6e46386bfa67": "7616d6cff285b193a31599bb46dedc13",
".git/objects/28/d167eec5db796b1a4af8c9f5c1014aa578813d": "73f40ae2498bf1fa280ae1cb94e39f37",
".git/objects/35/a701e0aaa70b97f7a44e8246ce4cf5591979f7": "6f28f501668f57258c759926e0627e62",
".git/objects/35/ab3852f009c15f0af4d98ab751a00e6f65bb98": "3490cef81125ce3489bfe181c13d7bc8",
".git/objects/45/547f7c048de2e5beb1977a2fdb376aca8ff069": "68b775f3ddc14d45a91099658e0cce0d",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/8c75ee254fbe584b71fa06e0c2a6a027b61a17": "c246e1dc3e57993b3a3646df0638bf3c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/62/986ed90ec8d3421a663cea2fdf6f73cdfbbe3b": "181dc4a5ac684be60d46970c652f8fa6",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/daf5ef1c120257b6f8551e8efb24becfafca2f": "fd4c539f6ce0324abf797b6347e6c870",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7f/714a3a975213f453dcb99b9747130413fe18a6": "7352f81009d216d3e86052bfb070c3d4",
".git/objects/7f/7cd9ec4287a06921369b5e204d0f370ce9943d": "d11ddc978868cdaf6434aa5e35f6e006",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/92/19caded26cce98f0e6ecf39030daac36062955": "f9d942913b8b519428996232850e4124",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/dbbf2096bff29d3fc178e76e8b505bbeedf6f7": "6fd4a1390bdd7f759bef224d03e61391",
".git/objects/9d/8bd5cde65b66fc273afab3122092001859a34e": "55c13dd985a424129a7ce319bf8da42a",
".git/objects/9e/16187c64d98bef0def89e97901f2d27e40e3e9": "486c2c79a04b842bec8de6f411f5d278",
".git/objects/9e/c8ddec7eb905a0d9409c8ad2cdc89307f883f3": "3d32e5e3a0d6c3e43a13e3a94d6ca86a",
".git/objects/9f/75f0f5321ca699e398882102bb763560ea2216": "7bc80bf5dca8581170ad5c54d1770a7c",
".git/objects/a0/66109d02071cb0d81246140401af8ea77177f2": "a10824e5ab64ee35371430a44107eb4e",
".git/objects/a1/38703557a6da47f9a1eb72350cb5cfd39db956": "f17b88f1301fcf492e9396c8c6f9d5fc",
".git/objects/a6/916c44d44a94f31a1c5730aa1f8b0d156b50ab": "6141d4ceb43ece8c4c68b0c779bb9274",
".git/objects/a8/80f417ba437f77e74d62e4d48c9829a48198da": "f1fc0b776f63b03eb5bddac96f2511a0",
".git/objects/ab/55f88a53fd939e42dd9d0eb0db5debd3626778": "11d85135919a4633b8f24430d68aa0ad",
".git/objects/ac/0703af38ced82626231df35dd7863f0fc3faa5": "ab5349a9afee2f5cbfc4e6965f6551ab",
".git/objects/ae/7b91dd1d0543e11a843cfd24e1dbd1af886fde": "6d5fe065ef62ff99fee295143af5ce23",
".git/objects/b1/5b843742e02119b6313a971d0652e5eb32dd75": "f019450fb28d6f11f54a0319a0b994a2",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b9/d474abcd2d97232007fa7fe2b730ae0b72baa2": "8cec556a470486d0c2a7454848fd9ad9",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/fb2194e66e402e0329825631e91c0b96147caa": "e27f67bd65d3d29142d0ef46cd57fcbf",
".git/objects/c0/1c215211472ca345a3606c3399a78bfe776550": "8c8307638853a50a72971b2f93ffafd5",
".git/objects/c5/2c49222ab62a79e540429fb43c2d7cc6a9565c": "ff035263ef0d3eecf220af26b8a21ac3",
".git/objects/c6/8a66f39571ac4988bd597f22310ad07961dd06": "2c35a18c32291bdf63db089e561955f1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/904aa062b5e84abed097f31fe1a887e80c63e6": "148cec93af12c0c37a0367451d0d72d0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/e057dfed10afc3e69674015d796ffdea3c9cae": "936998d6f6011ddf34455b0d6c97d325",
".git/objects/d9/491fece5358955400f38b9182ca2e8e2b1002a": "1d5cdfe643fd52b6e0d473d7dd2b11ec",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/df/db596e56aa0268fe5942b92c44fef02ff3c668": "0f40e341ba32bd73544df527005a4520",
".git/objects/e0/102085d0a2765b2c8e054bc4099eea32678bbf": "8c2ce9ea292461e417e8aeb5d0704f67",
".git/objects/e7/6e9849c65f47a76b60ed042e8d24ee0037e7b7": "40dbe7d2651f420beebe4426040a4c71",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/eb/d346f555a16ab31532f55955d72910047609c1": "2d3aeb382bee784da1dda7382333cbec",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/f9d59e9fd1d2576c2b58b72918f0cf824fbac0": "8596299f6e6f447de63eb305c5ae01b4",
".git/objects/f6/0d5fa3dd8597d2c7579d5f25a616049a3c4b59": "b24673f49bb608271f0927c4fa23e796",
".git/objects/f7/dd7b98e562dd219d5c7698235824ec6f371449": "ee580244926204c16d75f67f1d734a27",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fe/e527c9f7dd622d40325431830f0fc0abe4f424": "f92ff3e6ed0444090f565c3536a5b392",
".git/refs/heads/main": "a795c6b6917ff8fe64fe4b0f3c584bdd",
".git/refs/remotes/origin/main": "a795c6b6917ff8fe64fe4b0f3c584bdd",
"assets/AssetManifest.bin": "30b0aa428c33215864f4dd94bb4ff82e",
"assets/AssetManifest.bin.json": "7f645229d4286a290312ad62e9664b89",
"assets/AssetManifest.json": "c43654066353826e69ef179ada1f1ff6",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/icons/achievements.png": "d861e953849781c0703b968ce4c333ed",
"assets/assets/icons/certificate.png": "192ba34014e6019be796e7f84ab9e972",
"assets/assets/icons/envelope.png": "f97107c055b57d3a14914182b771960e",
"assets/assets/icons/id_card.png": "08eb04c0c439eb72c422f3cd47d84602",
"assets/assets/icons/project.png": "61617497f0dc404c1c896b8894599faf",
"assets/assets/images/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/cv.png": "940b59afadfeb974b2bcb56a2d57f84d",
"assets/assets/images/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/images/dash.png": "0361c09952d1c67d5f85b18c5aefeb37",
"assets/assets/images/discord.png": "328ab3cd65ad5c0882e9cd49e928be44",
"assets/assets/images/facebook.png": "e4da23704f27c9df07e6c21a13e28bfd",
"assets/assets/images/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/images/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/instagram.png": "0a2bccb8689eb15c7649f262b658048d",
"assets/assets/images/linkedin.png": "b3eba12407542f8e50f3645422a54314",
"assets/assets/images/my_image.jpg": "c941a0014bb892218682194c46e9e685",
"assets/assets/images/responsive.png": "e6c7261dbc945a61ee517e51b43729b1",
"assets/assets/images/threads.png": "149dabc4961d95585127690647dfa0e9",
"assets/assets/images/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/images/x.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "9a978e5a5a73229c1d7fc4cf629b8882",
"assets/fonts/MaterialIcons-Regular.otf": "4b22d5f0be9264c50cb231344f18de00",
"assets/NOTICES": "6caf395efbef9811d84312d6571bcd02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9812ac4b67a35b50f18c7c3b90d0d218",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "167f86b421df82a79d98d4bf42977da9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1bdc23d13d5e06bdfc114163b55a2f1e",
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
"favicon.png": "0361c09952d1c67d5f85b18c5aefeb37",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "53ae9f6ccbf3407557229be0813d4140",
"icons/Icon-192.png": "7e8e6432af923eaa0b2105cface12a1f",
"icons/Icon-512.png": "67e82135c593135ebef468ed754c159c",
"icons/Icon-maskable-192.png": "7e8e6432af923eaa0b2105cface12a1f",
"icons/Icon-maskable-512.png": "67e82135c593135ebef468ed754c159c",
"index.html": "72637001734a4fa75ac91824a52f5972",
"/": "72637001734a4fa75ac91824a52f5972",
"main.dart.js": "295f1b2d16aaf8dee35310d8949d57a9",
"manifest.json": "7d05c29961e70ec2faea38e15e560e45",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
