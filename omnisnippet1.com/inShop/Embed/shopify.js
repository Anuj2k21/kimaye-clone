// All rights reserved by Soundest Ltd. Look, but don't touch.
// https://www.omnisend.com/
// v3.4.1
if ("undefined" == typeof window.OMNISEND_EMBED_SHOPIFY_LOADED) {
    window.OMNISEND_EMBED_SHOPIFY_LOADED = !0;
    try {
        window._omnisend = function(n) {
                "use strict";
                return n.config = {
                    snippetVersion: "3.4.1",
                    snippetHost: "https://omnisnippet1.com/",
                    appHost: "https://app.omnisend.com/",
                    pickerAPIHost: "https://app.omnisend.com/",
                    eventsAPIHost: "https://events.soundestlink.com/",
                    cartAPIHost: "https://events.soundestlink.com/",
                    formsActionRegExp: /forms.soundestlink.com/i,
                    formsAPIHost: "https://forms.soundestlink.com/",
                    formsHost: "https://forms.soundestlink.com/",
                    wtAPIHost: "https://wt.soundestlink.com/",
                    pnHost: "https://pn.soundestlink.com/",
                    allowedOrigins: ["https://app.omnisend.com"],
                    developerCenterUrl: "https://www.omnisend.com/developers"
                }, n
            }(window._omnisend || {}), window._omnisend = window._omnisend || {}, _omnisend.shopType = "shopify", _omnisend.version = (new Date).toISOString().slice(0, 13),
            function() {
                "use strict";
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, n.src = window._omnisend.config.snippetHost + "inshop/launcher.js?v=" + _omnisend.version;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(n, s)
            }()
    } catch (ignore) {}
}