/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/28/hello-world/index.html","3ef00c5f52b2c62a93f8c86c1ed5fbf4"],["/2023/10/28/测试第一篇博客/index.html","7cf7f3fa4e8a494a89dfc5c015cc69b4"],["/2023/10/28/测试第二篇博客/index.html","4670b8ec4875d6931fc0bb1ee13f0803"],["/archives/2023/10/index.html","96550f1387c6dc75691b963b26c8f64c"],["/archives/2023/index.html","89f5d290b6e53e9f47649bd1aade1f20"],["/archives/index.html","b73a650602943d4e037d3caad997a418"],["/categories/test/index.html","59eba2c15bd56d8bf39b5dfbd928971e"],["/css/common/animated.css","08c347578b9d4abdad60ebc99157fe9a"],["/css/common/basic.css","4768af660b1c521216af688e3a85b483"],["/css/common/code-block/code-block.css","ce6f588e032a70e1aa75fc82ab47a6fb"],["/css/common/code-block/code-theme.css","01113ef1d1c374a8284aeb3ce4fcec8c"],["/css/common/code-block/highlight.css","c7671f65108d79cc527c4c3bf1828a61"],["/css/common/css-variables.css","0ce7df785dc49a71d2ad9f9f6c98eb62"],["/css/common/keep-style.css","b01bfac9ebd3ff81eb85c47ad80d68d6"],["/css/common/markdown.css","451a93584da68046d49fc4c4f19a3e17"],["/css/common/stylus-variables.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/tags/keep-button.css","e64b14e84930c1e1a6c1ee7fd39fb96e"],["/css/common/tags/keep-note.css","c91bc8cb13a6642c86c342ddfa2c630f"],["/css/common/tags/keep-tabs.css","218ef149b4c8db34b5b8babac174617e"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","de7917bbf59e5e2931f605d425b59410"],["/css/layout/category-content.css","5c37f066d6592c197a168369b0b82b11"],["/css/layout/category-list.css","07a7ac766159836d0780aa0cd4703e5e"],["/css/layout/home-content.css","99b156418057b0010fdde9e3cc7fb5d9"],["/css/layout/page.css","f4e8e13aac61aa860977a595fa78fb7b"],["/css/layout/tag-content.css","2ddbf9b29a55e3c801ce8b3b903eb86a"],["/css/style.css","14ea9f491d449d7da665dd7012dcbc26"],["/font/css/brands.min.css","32804996baacc18f6a2ebb3d2b3dc667"],["/font/css/fontawesome.min.css","cec5567ac2839f3a11b7cf23c59de2bf"],["/font/css/regular.min.css","c6e88d822a629554b8bcf7c40b1a9e52"],["/font/css/solid.min.css","b4b6a21001bc977da32ed4c246e356bc"],["/font/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/font/webfonts/fa-brands-400.woff2","005c9aa92b564b73b7582cc4f1fa49cb"],["/font/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/font/webfonts/fa-regular-400.woff2","747442fa76f1d9a31f9a54a2e8a4b448"],["/font/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/font/webfonts/fa-solid-900.woff2","d5e647388e2415268b700d3df2e30a0d"],["/font/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/font/webfonts/fa-v4compatibility.woff2","f20773a753bf1fbe9ccec04f90a470ea"],["/images/11.png","e4257b0836ee34b16db26b08c2fa410a"],["/images/QQ.png","90ffaa9aab43b92a1ab45feaf9ceacde"],["/images/avatar.svg","bbe59849762bcd2687b75a77d90a0885"],["/images/bg.svg","a2d1cf1ad2becdd79823541dae101fcd"],["/images/bilibili.svg","d333e1259b8c63556f52101242377a09"],["/images/csdn.svg","4de8039f10158ecaf16893e2cffe5832"],["/images/deploy-provider/aliyun.png","76a0420ed71a3fe7da06e024a0e7d893"],["/images/deploy-provider/gitee.png","1a1adc2570010a96efc5eea48e851c4d"],["/images/deploy-provider/github.png","9ff51e3e791b92646e64fea4097e6362"],["/images/deploy-provider/netlify.png","eb9e367355615cdeb909dd535bfc2202"],["/images/deploy-provider/tencent_cloud.png","9693e72d12f581715dffcaf5fe7be3f5"],["/images/deploy-provider/upyun.png","425d4a9c861d892e8a8e0defe38f840d"],["/images/deploy-provider/vercel.png","ada1daa9ef523662dea0cab3f6276762"],["/images/erweima.png","ca3e82633e053d88cb7f5a0fb8844c38"],["/images/logo/logo.svg","bbe59849762bcd2687b75a77d90a0885"],["/images/wechat.png","198ff16fd70957887b5472906587b564"],["/index.html","d187989be484ad03054f60ec644c8f0f"],["/js/back2top.js","5547a18714c956ce85282ddacd590fb1"],["/js/category-page.js","7780a25e17a3c389feca8b5c87a9d4e1"],["/js/code-block.js","74200c8238d6f35feea49c975174014c"],["/js/dark-light-toggle.js","f9697b37004d55d12361b03dca560f80"],["/js/header-shrink.js","71a79c59d320a10b78fc5664ae66dc84"],["/js/lazyload.js","f1e4b68ec3901ea8fe09b3ea38fb2ddb"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/links-page.js","75769dd643173f788d4b8475850a106a"],["/js/local-search.js","ae27e4d09740e3006f11f3caddea78a7"],["/js/main.js","273209db919b2f85374dfd2ef2e07682"],["/js/post/copyright-info.js","fcbd7748b1e2ba5addf08d8d1d4455eb"],["/js/post/post-helper.js","08fc806299facd45ca457964fa0fe8a4"],["/js/post/share.js","923f54816210e9fd4c19ede9c54fdb3f"],["/js/post/toc.js","7c410c52ab9f52833039ff1a6df58009"],["/js/utils.js","8a8892859feb656d2c1887ed282590fa"],["/sw-register.js","9e62f1aceda69fb60e596515facfb23d"],["/tags/ue5-c/index.html","a8dbb0ed38f66b43b6c41f2279a829d2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
