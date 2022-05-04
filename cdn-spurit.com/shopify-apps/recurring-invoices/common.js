if ("undefined" === typeof Spurit) var Spurit = {};
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
"undefined" === typeof Spurit.recurringInvoices.snippet && (Spurit.recurringInvoices.snippet = {
    shopHash: "",
    folderStore: "",
    folderCss: "",
    cdnHostPath: "",
    cdnJsLibsPath: "",
    product: {
        variants: []
    },
    cart: {}
});
Spurit.recurringInvoices.appConfig = {
    selectorPickerUrl: Spurit.recurringInvoices.snippet.cdnHostPath + "all-apps/selector-picker-4.x.js",
    selectorPickerCmd: "sign=recurring-invoices",
    jsGlobal: Spurit.recurringInvoices.snippet.cdnJsLibsPath + "spurit.global-2.x.min.js",
    cssStatic: Spurit.recurringInvoices.snippet.folderCss + "common.css",
    cssDynamic: Spurit.recurringInvoices.snippet.folderStore + Spurit.recurringInvoices.snippet.shopHash + ".css?" + Math.random(),
    jsDynamic: Spurit.recurringInvoices.snippet.folderStore +
        Spurit.recurringInvoices.snippet.shopHash + ".js?" + Math.random()
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.constants = new function() {
    this.APP_NAME = "recurringInvoices";
    this.SIGN_ORDER_TAG = "Recurring Invoice";
    this.DISCOUNT_PERCENT = "percentage";
    this.DISCOUNT_FIXED = "fixed_amount";
    this.POSITION_BEFORE = "before";
    this.POSITION_INSIDE = "inside";
    this.POSITION_AFTER = "after";
    this.PERIOD_WEEKS = "weeks";
    this.PERIOD_MONTHS = "months";
    this.SCHEDULE_TYPE_FIXED = "fixed";
    this.SCHEDULE_TYPE_CUSTOM = "custom";
    this.PLACEMENT_DISCOUNT = ":discount";
    this.LINE_ITEM_PROP_PERIODICITY = "Recurring"
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
"undefined" === typeof Spurit.recurringInvoices.translation && (Spurit.recurringInvoices.translation = {
    select_periodicity: "Select frequency:",
    weeks: "Weeks",
    months: "Months",
    weekly: "Weekly",
    monthly: "Monthly",
    custom: "Custom"
});
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.lib = new function() {
    var g = this,
        q = window.location.search.replace("?", "").split("&").reduce(function(b, c) {
            var h = c.split("=");
            b[decodeURIComponent(h[0])] = decodeURIComponent(h[1]);
            return b
        }, {});
    this._GET = function() {
        return q
    };
    this.scrollPos = function() {
        var b = document.documentElement,
            c = document.body;
        return {
            left: (b && b.scrollLeft || c && c.scrollLeft || 0) - (b.clientLeft || 0),
            top: (b && b.scrollTop || c && c.scrollTop || 0) - (b.clientTop || 0)
        }
    };
    this.wrList = function(b) {
        return new function(c) {
            this.forEach =
                function(h, d) {
                    if (null == c) console.error("Argument is null or not defined");
                    else {
                        var a = Object(c);
                        if ("undefined" === typeof a.length) console.error(a + " don't have length attribute");
                        else {
                            var f = a.length >>> 0;
                            if ("function" !== typeof h) console.error('"' + h + '" is not a function');
                            else {
                                var l;
                                1 < arguments.length && (l = d);
                                for (var k = 0; k < f;) {
                                    if (k in a) {
                                        var u = a[k];
                                        if (!1 === h.call(l, u, k, a)) break
                                    }
                                    k++
                                }
                            }
                        }
                    }
                }
        }(b)
    };
    this.wrElement = function(b) {
        return new function(c) {
            var h = this;
            this.addHandler = function(d, a, f) {
                "" !== d && (-1 !== d.indexOf(",") ?
                    g.wrList(d.split(",")).forEach(function(l) {
                        h.addHandler(l, a, f)
                    }) : -1 !== d.indexOf(" ") ? g.wrList(d.split(" ")).forEach(function(l) {
                        h.addHandler(l, a, f)
                    }) : c.addEventListener ? c.addEventListener(d, a, f ? f : !1) : c.attachEvent ? c.attachEvent("on" + d, a) : c["on" + d] = a)
            };
            this.onChangeContents = function(d) {
                if (c === window || c === document) g.onLoad(function() {
                    g.wrElement(document.body).onChangeContents(d)
                });
                else(new MutationObserver(function(a) {
                    d(a)
                })).observe(c, {
                    childList: !0,
                    subtree: !0
                })
            };
            this.size = function() {
                return c === window ? {
                    w: window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth,
                    h: window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight
                } : "undefined" !== typeof c.offsetWidth ? {
                    w: c.offsetWidth,
                    h: c.offsetHeight
                } : {
                    w: 0,
                    h: 0
                }
            };
            this.pos = function() {
                function d(f) {
                    f = f.getBoundingClientRect();
                    var l = document.body,
                        k = document.documentElement;
                    return {
                        x: Math.round(f.left + (window.pageXOffset ||
                            k.scrollLeft || l.scrollLeft) - (k.clientLeft || l.clientLeft || 0)),
                        y: Math.round(f.top + (window.pageYOffset || k.scrollTop || l.scrollTop) - (k.clientTop || l.clientTop || 0))
                    }
                }

                function a(f) {
                    if ("undefined" === typeof f.offsetTop) return {
                        x: 0,
                        y: 0
                    };
                    for (var l = 0, k = 0; f;) l += parseFloat(f.offsetTop), k += parseFloat(f.offsetLeft), f = f.offsetParent;
                    return {
                        x: Math.round(k),
                        y: Math.round(l)
                    }
                }
                return c.getBoundingClientRect ? d(c) : a(c)
            }
        }(b)
    };
    this.wrEvent = function(b) {
        return new function(c) {
            this.cancelDefault = function() {
                c.stopPropagation ? c.stopPropagation() :
                    c.cancelBubble = !0;
                c.preventDefault ? c.preventDefault() : c.returnValue = !1
            };
            this.mouseCoords = function() {
                if (!(c instanceof MouseEvent)) return {
                    x: 0,
                    y: 0
                };
                if (null === c.pageX && null !== c.clientX) {
                    var h = g.scrollPos();
                    c.pageX = c.clientX + h.left;
                    c.pageY = c.clientY + h.top
                }
                return {
                    x: c.pageX,
                    y: c.pageY
                }
            }
        }(b)
    };
    this.onLoad = function(b) {
        "complete" === document.readyState || "interactive" === document.readyState && !/MSIE *\d+\.\w+/i.test(window.navigator.userAgent) || "loaded" === document.readyState ? b() : g.wrElement(document).addHandler("DOMContentLoaded",
            function() {
                b()
            })
    };
    var n = {};
    this.loadStatic = function(b, c, h) {
        "function" !== typeof c && (c = function() {});
        if (Array.isArray(b)) {
            b.length || c();
            var d = 0;
            g.wrList(b).forEach(function(f) {
                g.loadStatic(f, function() {
                    d++;
                    d === b.length && c()
                }, h)
            })
        } else if ("undefined" !== typeof n[b]) c();
        else {
            "js" !== h && "css" !== h && (h = b.toLowerCase().split("?")[0].split("#")[0].split(".").pop());
            "js" !== h && "css" !== h && (console.error('Undefined type of static file "' + b + '"'), n[b] = 1, c());
            if ("js" === h) {
                var a = document.createElement("script");
                a.type =
                    "text/javascript"
            } else a = document.createElement("link"), a.type = "text/css", a.rel = "stylesheet";
            a.readyState ? a.onreadystatechange = function() {
                if ("loaded" === a.readyState || "complete" === a.readyState) a.onreadystatechange = null, n[b] = 1, c()
            } : a.onload = function() {
                n[b] = 1;
                c()
            };
            "js" === h ? a.src = b : a.href = b;
            document.getElementsByTagName("head")[0].appendChild(a)
        }
    };
    this.ajax = function(b, c, h, d) {
        "string" !== typeof b && (b = "GET");
        c += (-1 == c.indexOf("?") ? "?" : "&") + "hash=" + Math.random();
        "undefined" === typeof h && (h = null);
        null !== h &&
            "string" !== typeof h && (h = JSON.stringify(h));
        if ("undefined" !== typeof XMLHttpRequest) var a = new XMLHttpRequest;
        else console.warn("XMLHttpRequest is not supported"), a = null;
        if (!a) return console.error("Ajax is not supports"), !1;
        a.open(b, c, !0);
        "function" == typeof d && (a.onreadystatechange = function() {
            4 === a.readyState && d(a.responseText, a.status, a.statusText)
        });
        "POST" === b && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        a.setRequestHeader("X-Requested-With", "xmlhttprequest");
        a.send(h);
        return !0
    };
    this.http_build_query = function(b) {
        var c, h = [],
            d = function(f, l) {
                var k, u = [];
                !0 === l ? l = "1" : !1 === l && (l = "0");
                if (null !== l) {
                    if ("object" === typeof l) {
                        for (k in l) "undefined" !== typeof l[k] && null !== l[k] && u.push(d(f + "[" + k + "]", l[k]));
                        return u.join("&")
                    }
                    if ("function" !== typeof l) return encodeURIComponent(f) + "=" + encodeURIComponent(l);
                    throw Error("There was an error processing for http_build_query().");
                }
                return ""
            };
        for (c in b) {
            var a = b[c];
            a = d(c, a);
            "" !== a && h.push(a)
        }
        return h.join("&")
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.selectorPicker = new function() {
    var g = Spurit.recurringInvoices.lib;
    this.needToDisplay = function() {
        return -1 !== document.location.search.indexOf(Spurit.recurringInvoices.appConfig.selectorPickerCmd)
    };
    this.display = function() {
        "object" === typeof Spurit.recurringInvoices.snippet && "object" === typeof Spurit.recurringInvoices.snippet.cart && 1 !== Spurit.recurringInvoices.snippet.cart.items.length && "undefined" !== typeof g._GET().vid ? g.ajax("POST", "/cart/clear.js", null, function() {
            g.ajax("POST",
                "/cart/add.js", "quantity=1&id=" + g._GET().vid,
                function() {
                    document.location.reload()
                })
        }) : g.loadStatic(Spurit.recurringInvoices.appConfig.selectorPickerUrl)
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.shopConfig = new function() {
    var g = Spurit.recurringInvoices.appConfig,
        q = Spurit.recurringInvoices.constants,
        n = Spurit.recurringInvoices.lib,
        b = {
            offers: [],
            setting: {}
        },
        c = {},
        h = {};
    this.load = function(d) {
        n.loadStatic(g.jsDynamic, function() {
            "undefined" === typeof Spurit.recurringInvoices.config ? console.error('Error while loading dynamic JS-file "' + g.jsDynamic + '" with shop config. Property "Spurit.recurringInvoices.config" is undefined') : (b = Spurit.recurringInvoices.config, n.wrList(b.offers).forEach(function(a) {
                h[a.id] =
                    a;
                a.schedule.customOptions = {
                    weekly: a.schedule.custom_option_weekly,
                    monthly: a.schedule.custom_option_monthly,
                    any: a.schedule.custom_option_any,
                    length: Number(a.schedule.custom_option_weekly) + Number(a.schedule.custom_option_monthly) + Number(a.schedule.custom_option_any)
                };
                0 === a.schedule.customOptions.length && (a.schedule.customOptions.any = !0, a.schedule.customOptions.length = 1);
                n.wrList(a.products).forEach(function(f) {
                    c[f] = a.id
                })
            }), "function" === typeof d && d())
        })
    };
    this.offerByPid = function(d) {
        return "undefined" !==
            typeof c[d] ? h[c[d]] : null
    };
    this.productPageSelectors = function() {
        var d = {
            position: b.setting.product_page_position,
            selector: b.setting.product_page_selector
        };
        1 === parseInt(b.setting.product_page_auto) && (d.selector = "");
        var a = {
            selector: b.setting.product_addtocart_selector
        };
        1 === parseInt(b.setting.product_addtocart_auto) && (a.selector = "");
        return {
            widget: d,
            button: a
        }
    };
    this.productPageWidget = function(d) {
        d.discount_on ? (d.discount_type === q.DISCOUNT_PERCENT ? d = d.discount_value.replace(".00", "") + "%" : (d = Spurit.global.prices.convertFromShopCurrencyToCart(d.discount_value),
            d = Spurit.global.prices.money.format(d)), d = b.setting.widget_text_option2.replace(q.PLACEMENT_DISCOUNT, this.getWidgetText(d))) : d = b.setting.widget_text_option2_no_discount;
        var a = !("undefined" !== typeof b.setting.widget_default_enabled && 0 === parseInt(b.setting.widget_default_enabled));
        return {
            optionBuyDefault: b.setting.widget_text_option1,
            optionBuyWithSubscription: d,
            optionBuyWithSubscriptionComment: b.setting.widget_text_option2_comment,
            enabled: a
        }
    };
    this.getWidgetText = function(d) {
        return '<span class="SRI-widget-discount">' +
            d + "</span>"
    };
    this.cartPageSelectors = function() {
        var d = {
            subtotal: b.setting.cart_selector_subtotal
        };
        1 === parseInt(b.setting.cart_selector_auto) && (d.subtotal = "");
        return d
    };
    this.cartAjaxSelectors = function() {
        var d = {
            subtotal: b.setting.cart_ajax_selector_subtotal,
            checkout: "undefined" !== typeof b.setting.cart_ajax_selector_checkout ? b.setting.cart_ajax_selector_checkout : ""
        };
        if ("undefined" !== typeof window.Spurit.recurringInvoices.snippet.selectors) {
            var a = window.Spurit.recurringInvoices.snippet.selectors;
            "string" ===
            typeof a.cart_ajax_selector_subtotal && (d.subtotal += (d.subtotal ? ", " : "") + a.cart_ajax_selector_subtotal);
            "string" === typeof a.cart_ajax_selector_checkout && (d.checkout += (d.checkout ? ", " : "") + a.cart_ajax_selector_checkout)
        }
        1 === parseInt(b.setting.cart_ajax_selector_auto) && (d.subtotal = "");
        return d
    };
    this.orderTag = function() {
        return "undefined" !== typeof b.setting.order_tag_name ? b.setting.order_tag_name : ""
    };
    this.buttonsLoadingText = function() {
        return "undefined" !== typeof b.setting.buttons_loading_text ? b.setting.buttons_loading_text :
            "Loading..."
    };
    this.ajaxCartEnabled = function() {
        return "undefined" !== typeof b.setting.cart_ajax_enabled ? !!parseInt(b.setting.cart_ajax_enabled) : !1
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.htmlMarkers = new function() {
    this.markAsOriginal = function(g) {
        g.setAttribute("data-recurring-ivoices-original", "1")
    };
    this.markedAsOriginal = function(g) {
        return g.hasAttribute("data-recurring-ivoices-original")
    };
    this.markAsCreated = function(g) {
        g.setAttribute("data-recurring-ivoices-created", "1")
    };
    this.markedAsCreated = function(g) {
        return g.hasAttribute("data-recurring-ivoices-created")
    };
    this.selectorOriginal = function(g) {
        "undefined" === typeof g && (g = "*");
        return g + "[data-recurring-ivoices-original]"
    };
    this.selectorNotOriginal = function(g) {
        "undefined" === typeof g && (g = "*");
        return g + ":not([data-recurring-ivoices-original])"
    };
    this.selectorCreated = function(g) {
        "undefined" === typeof g && (g = "*");
        return g + "[data-recurring-ivoices-created]"
    };
    this.selectorNotCreated = function(g) {
        "undefined" === typeof g && (g = "*");
        return g + ":not([data-recurring-ivoices-created])"
    };
    this.selectorNotOriginalOrCreated = function(g) {
        return this.selectorNotOriginal(this.selectorNotCreated(g))
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.productPageApp = new function() {
    function g() {
        Spurit.global.selectors.add(l.productPageSelectors().button.selector, "product_add_to_cart");
        Spurit.global.atc.onBeforeEventPrevented(function(e, m) {
            return !!b().subscription
        });
        Spurit.global.atc.onBefore(function(e, m, p, t, v) {
            e = b();
            p.length && e.valid && e.subscription ? (c(m), p[0].properties[f.LINE_ITEM_PROP_PERIODICITY] = e.periodValue + " " + e.periodType, "function" === typeof window.Spurit.recurringInvoices.onAddToCart ? v(1, p) : v(0, p)) : v(0)
        });
        Spurit.global.atc.onAfter(function(e,
            m, p, t) {
            h(m);
            if ("function" === typeof window.Spurit.recurringInvoices.onAddToCart) window.Spurit.recurringInvoices.onAddToCart()
        })
    }

    function q(e, m) {
        w || (w = document.createElement("div"));
        m === f.POSITION_BEFORE ? e.parentNode.insertBefore(w, e) : m === f.POSITION_INSIDE ? e.appendChild(w) : m === f.POSITION_AFTER && (e.nextElementSibling ? q(e.nextElementSibling, f.POSITION_BEFORE) : q(e.parentNode, f.POSITION_INSIDE))
    }

    function n() {
        for (var e = !1, m = w.parentNode; m.tagName && "BODY" !== m.tagName;) {
            if ("FORM" === m.tagName) {
                e = !0;
                break
            }
            m =
                m.parentNode
        }
        m = l.productPageWidget(k);
        var p = "undefined" === typeof k.hidden_one_time_purchase || !1 === k.hidden_one_time_purchase;
        w.innerHTML = '<div class="SRI-widget ' + (p ? "" : " hidden-one-time-purchase") + '"><div><label><input type="radio" name="sri-option" value="0" ' + (!m.enabled && p ? "checked" : "") + "> " + m.optionBuyDefault + '</label></div><div><label><input type="radio" name="sri-option" value="1" ' + (m.enabled || !p ? "checked" : "") + "> " + m.optionBuyWithSubscription + "</label><" + (e ? "div" : "form") + ' class="SRI-widget-form" id="sri-subscribe-form"><div class="SRI-widget-comment">' +
            m.optionBuyWithSubscriptionComment + "</div>" + function() {
                if (k.schedule.type === f.SCHEDULE_TYPE_FIXED) return '<input type="hidden" id="sri-period-type" value="' + k.schedule.fixed_period_type + '"><input type="hidden" id="sri-period-value" value="' + k.schedule.fixed_period_value + '">';
                if (k.schedule.type === f.SCHEDULE_TYPE_CUSTOM) {
                    if (1 === k.schedule.customOptions.length && (k.schedule.customOptions.weekly || k.schedule.customOptions.monthly)) return '<input type="hidden" id="sri-period-type" value="' + (k.schedule.customOptions.weekly ?
                        f.PERIOD_WEEKS : f.PERIOD_MONTHS) + '"><input type="hidden" id="sri-period-value" value="1">';
                    if (1 === k.schedule.customOptions.length && k.schedule.customOptions.any) return "<div><div>" + Spurit.recurringInvoices.translation.select_periodicity + '</div><div><input type="number" id="sri-period-value" value="1" min="1" max="100"><select id="sri-period-type"><option value="' + f.PERIOD_WEEKS + '">' + Spurit.recurringInvoices.translation.weeks + '</option><option value="' + f.PERIOD_MONTHS + '">' + Spurit.recurringInvoices.translation.months +
                        "</option></select></div></div>";
                    var t = "";
                    k.schedule.customOptions.weekly && (t += '<div><label><input type="radio" name="sri-period-option" value="weekly"> ' + Spurit.recurringInvoices.translation.weekly + "</label></div>");
                    k.schedule.customOptions.monthly && (t += '<div><label><input type="radio" name="sri-period-option" value="monthly"> ' + Spurit.recurringInvoices.translation.monthly + "</label></div>");
                    t += '<input type="hidden" id="sri-period-type" value="' + (k.schedule.customOptions.weekly ? f.PERIOD_WEEKS : f.PERIOD_MONTHS) +
                        '"><input type="hidden" id="sri-period-value" value="1">';
                    return "<div><div>" + Spurit.recurringInvoices.translation.select_periodicity + "</div><div>" + t + "</div></div>"
                }
            }() + "</" + (e ? "div" : "form") + "></div></div>";
        a.onLoad(function() {
            var t = document.querySelector("#sri-subscribe-form");
            if (t) {
                t.style.display = document.querySelector('input[name="sri-option"][value="1"]').checked ? "" : "none";
                a.wrList(document.querySelectorAll('input[name="sri-option"]')).forEach(function(r) {
                    a.wrElement(r).addHandler("change click keyup",
                        function() {
                            r.checked && (t.style.display = "1" === r.value ? "" : "none")
                        })
                });
                var v = document.querySelector("#sri-period-type"),
                    y = document.querySelector("#sri-period-value"),
                    x = document.querySelector("#sri-period-custom-container");
                if (v && y) {
                    var z = function(r) {
                            r.checked && ("weekly" === r.value ? (x && (x.style.display = "none"), v.value = f.PERIOD_WEEKS, y.value = "1") : "monthly" === r.value ? (x && (x.style.display = "none"), v.value = f.PERIOD_MONTHS, y.value = "1") : "any" === r.value && x && (x.style.display = ""))
                        },
                        A = !1;
                    a.wrList(document.querySelectorAll('input[name="sri-period-option"]')).forEach(function(r) {
                        A ||
                            (A = !0, r.checked = !0);
                        a.wrElement(r).addHandler("change click keyup", function() {
                            z(r)
                        });
                        z(r)
                    })
                }
            }
        })
    }

    function b() {
        var e = {
                valid: !0,
                subscription: !1,
                periodType: f.PERIOD_WEEKS,
                periodValue: 1
            },
            m = document.querySelector("#sri-subscribe-form");
        if (!m) return e;
        var p = document.querySelector('input[name="sri-option"][value="1"]');
        if (!p || !p.checked) return e;
        p = m.querySelector("input#sri-period-type, select#sri-period-type");
        if (!p) return e;
        e.periodType = p.value;
        e.periodType !== f.PERIOD_WEEKS && e.periodType !== f.PERIOD_MONTHS &&
            (e.periodType = f.PERIOD_WEEKS);
        m = m.querySelector("input#sri-period-value, select#sri-period-value");
        if (!m) return e;
        e.periodValue = Math.abs(parseInt(m.value));
        if (!e.periodValue || isNaN(e.periodValue)) e.periodValue = 1;
        e.subscription = !0;
        return e
    }

    function c(e) {
        "undefined" !== typeof e.innerHTML && e.innerHTML ? e.children && e.children.length ? a.wrList(e.querySelectorAll("*")).forEach(function(m) {
            m.children.length || "" === m.innerHTML.trim() || (m.setAttribute("data-sri-text-original", encodeURIComponent(m.innerHTML)),
                m.innerHTML = l.buttonsLoadingText())
        }) : (e.setAttribute("data-sri-text-original", encodeURIComponent(e.innerHTML)), e.innerHTML = l.buttonsLoadingText()) : "undefined" !== typeof e.value && e.value && (e.setAttribute("data-sri-text-original", encodeURIComponent(e.value)), e.value = l.buttonsLoadingText())
    }

    function h(e) {
        e.hasAttribute("data-sri-text-original") && ("undefined" !== typeof e.innerHTML && e.innerHTML ? e.innerHTML = decodeURIComponent(e.getAttribute("data-sri-text-original")) : "undefined" !== typeof e.value && e.value &&
            (e.value = decodeURIComponent(e.getAttribute("data-sri-text-original"))));
        a.wrList(e.querySelectorAll("[data-sri-text-original]")).forEach(function(m) {
            m.innerHTML = decodeURIComponent(m.getAttribute("data-sri-text-original"))
        })
    }
    var d = Spurit.recurringInvoices.appConfig,
        a = Spurit.recurringInvoices.lib,
        f = Spurit.recurringInvoices.constants,
        l = Spurit.recurringInvoices.shopConfig,
        k, u, w;
    this.checkPage = function() {
        return "object" === typeof Spurit.recurringInvoices.snippet && "object" === typeof Spurit.recurringInvoices.snippet.product
    };
    this.staticFiles = function() {
        return [d.cssStatic, d.cssDynamic]
    };
    this.run = function() {
        k = l.offerByPid(Spurit.recurringInvoices.snippet.product.id);
        if (null !== k) a.onLoad(function() {
            if (u = document.querySelector(l.productPageSelectors().widget.selector)) q(u, l.productPageSelectors().widget.position), n(), g()
        })
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
Spurit.recurringInvoices.cartPageApp = new function() {
    function g() {
        var h = !1;
        n.wrList(q.getItems()).forEach(function(a) {
            if (a.properties && "undefined" !== typeof a.properties[b.LINE_ITEM_PROP_PERIODICITY]) {
                var f = c.offerByPid(a.product_id);
                f && (h = !0, f.discount_on && (f.discount_type === b.DISCOUNT_FIXED ? a.addFixedDiscount(f.discount_value, b.APP_NAME) : a.addPercentDiscount(f.discount_value, b.APP_NAME)))
            }
        });
        if (h) {
            var d = [b.SIGN_ORDER_TAG];
            c.orderTag() && d.push(c.orderTag());
            Spurit.global.checkout.setTags(d.join(","),
                b.APP_NAME)
        }
    }
    var q, n = Spurit.recurringInvoices.lib,
        b = Spurit.recurringInvoices.constants,
        c = Spurit.recurringInvoices.shopConfig;
    this.checkPage = function() {
        return "object" === typeof Spurit.recurringInvoices.snippet && "object" === typeof Spurit.recurringInvoices.snippet.cart && Spurit.recurringInvoices.snippet.cart.items.length
    };
    this.run = function() {
        q = Spurit.global.cartPool.getAdapter(b.APP_NAME);
        this.checkPage() && Spurit.global.selectors.add(c.cartPageSelectors().subtotal, "cart_subtotal");
        c.cartAjaxSelectors().subtotal &&
            Spurit.global.selectors.add(c.cartAjaxSelectors().subtotal, "cart_subtotal");
        q.onChange(function() {
            g()
        });
        g()
    }
};
"undefined" === typeof Spurit && (Spurit = {});
"undefined" === typeof Spurit.recurringInvoices && (Spurit.recurringInvoices = {});
(function() {
    function g() {
        if (Spurit.recurringInvoices.selectorPicker.needToDisplay()) Spurit.recurringInvoices.selectorPicker.display();
        else {
            var q = Spurit.recurringInvoices.lib,
                n = Spurit.recurringInvoices.productPageApp,
                b = Spurit.recurringInvoices.cartPageApp;
            Spurit.recurringInvoices.shopConfig.load(function() {
                n.checkPage() && q.loadStatic(n.staticFiles(), function() {
                    n.run()
                });
                b.run()
            })
        }
    }
    Spurit.recurringInvoices.lib.loadStatic(Spurit.recurringInvoices.appConfig.jsGlobal, function() {
        Spurit.global.onReady(["cart",
            "checkout", "atc", "selectors", "prices"
        ], g, {
            checkout: {
                app_id: Spurit.recurringInvoices.snippet.appId,
                app_name: Spurit.recurringInvoices.constants.APP_NAME,
                hash: Spurit.recurringInvoices.snippet.shopHash
            }
        })
    }, "js")
})();