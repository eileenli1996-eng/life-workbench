// 已弃用离线缓存。此文件仅用于在已注册旧 SW 的浏览器上将其注销，不再缓存任何资源。
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.skipWaiting());
