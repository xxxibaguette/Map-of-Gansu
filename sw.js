const CACHE_NAME = 'history-map-clean-v1.4';

// 核心资源列表
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './data.js',
    './map.jpg',
    // Leaflet 核心库
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css',
    'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css',
    'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js',
    // 标记点图标资源
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
];

// 1. 安装阶段：下载并缓存资源
self.addEventListener('install', (event) => {
    self.skipWaiting(); // 强制跳过等待，立即生效
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] 正在构建离线缓存...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. 激活阶段：清理旧版本缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[SW] 清理旧缓存:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. 拦截请求：缓存优先策略
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // 如果缓存命中了，直接返回缓存内容
            if (cachedResponse) {
                return cachedResponse;
            }
            // 否则通过网络请求
            return fetch(event.request);
        })
    );

});
