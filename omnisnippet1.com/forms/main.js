! function() {
    "use strict";
    var n = "omnisend-forms-tracking-pixels-container",
        e = function() {
            return e = Object.assign || function(n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }, e.apply(this, arguments)
        },
        t = function(n) {
            var t = r(),
                o = t.shop,
                i = t.brand,
                c = t.user,
                u = t.cookies,
                a = t.navigation;
            return function(n) {
                return new URLSearchParams((t = n, Object.keys(t).filter((function(n) {
                    return null !== t[n] && void 0 !== t[n] && "" !== t[n]
                })).reduce((function(n, r) {
                    var o;
                    return e(e({}, n), ((o = {})[r] = t[r], o))
                }), {}))).toString();
                var t
            }({
                timestamp: (new Date).getTime().toString(),
                shopType: o.getShopType(),
                shopID: o.getShopID(),
                shopHostname: o.getShopHostName(),
                brandID: i.getBrandID(),
                formID: n,
                anonymousID: c.getAnonymousID(),
                sessionID: c.getSessionID(),
                contactID: u.get("omnisendContactID"),
                pageTitle: a.getPageTitle(),
                pageURL: a.getPageUrl()
            })
        };

    function r() {
        var n = window._omnisend.config.formsAPIHost;
        return {
            brand: {
                getBrandID: function() {
                    var n;
                    return null === (n = window._omnisend.brandSettings) || void 0 === n ? void 0 : n.brandID
                }
            },
            forms: {
                checkIfWindowIsClear: function() {
                    return window._omnisend.forms.isWindowClear
                },
                setWindowClearance: function(n) {
                    window._omnisend.forms.isWindowClear = n
                },
                getApiHost: function() {
                    return n
                },
                getFormsLoadEndpoint: function(e) {
                    return "".concat(n, "REST/forms/v1/renderedForms?brandID=").concat(e)
                },
                getTrackViewEndpoint: function(e) {
                    return "".concat(n, "REST/forms/v1/track/view?").concat(t(e))
                },
                getTrackInteractionEndpoint: function(e) {
                    return "".concat(n, "REST/forms/v1/track/interaction?").concat(t(e))
                }
            },
            navigation: {
                redirect: function(n) {
                    window.location.href = n
                },
                getPageTitle: function() {
                    return window.document.title
                },
                getPageUrl: function() {
                    return window.location.href
                }
            },
            cookies: {
                set: function(n, e, t) {
                    var r = void 0 === t ? {} : t,
                        o = r.expiration,
                        i = void 0 === o ? 365 * window._omnisend.cookies.DAY : o,
                        c = r.sessionOnly;
                    window._omnisend.cookies.set(n, e, c ? void 0 : i)
                },
                get: function(n) {
                    return window._omnisend.cookies.get(n)
                }
            },
            shop: {
                getShopType: function() {
                    return window._omnisend.shopType
                },
                getShopID: function() {
                    return window._omnisend.shopID
                },
                getShopHostName: function() {
                    return window._omnisend.shopHostname
                }
            },
            user: {
                getAnonymousID: function() {
                    return window._omnisend.user.anonymousID
                },
                getSessionID: function() {
                    return window._omnisend.user.sessionID
                }
            }
        }
    }
    var o, i = function(n) {
            return "omnisend-form-".concat(n)
        },
        c = function(e) {
            return new Promise((function(t, r) {
                var o = document.createElement("img");
                o.setAttribute("src", e), o.addEventListener("load", (function() {
                    t(null)
                })), o.addEventListener("error", (function() {
                    r()
                })), document.getElementById(n).appendChild(o)
            }))
        },
        u = function(n) {
            return c(r().forms.getTrackInteractionEndpoint(n))
        },
        a = function(n) {
            r().cookies.set("".concat(i(n), "-closed-at"), (new Date).toISOString())
        };
    ! function(n) {
        n.redirect = "redirect"
    }(o || (o = {}));
    var s = {
            triedToClose: !1,
            loadTime: Date.now(),
            pageViewCount: 0,
            scrolledPercent: f()
        },
        l = [];

    function f() {
        return Math.round(100 * window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) || 0
    }

    function d(n) {
        return void 0 !== n
    }

    function v(n) {
        var e = r().cookies.get("".concat(i(n.id), "-closed-at"));
        return e ? new Date(e).getTime() : 0
    }

    function p(n) {
        var e, t = null === (e = n.targeting) || void 0 === e ? void 0 : e.urlMatch;
        if (!t) return !0;
        var r = t.includes,
            o = void 0 === r ? [] : r,
            i = t.excludes,
            c = void 0 === i ? [] : i,
            u = window.location.href,
            a = !o.length || o.some((function(n) {
                return u.includes(n)
            })),
            s = !c.length || c.every((function(n) {
                return !u.includes(n)
            }));
        return a && s
    }

    function m(n) {
        var e, t = null === (e = n.targeting) || void 0 === e ? void 0 : e.display;
        if (!t) return !0;
        if (!Object.keys(t).length) return !0;
        var r = s,
            o = r.scrolledPercent,
            i = r.loadTime,
            c = r.pageViewCount,
            u = r.triedToClose,
            a = t.afterScrollDown,
            l = t.afterTime,
            f = t.afterViewedPageCount,
            v = t.onExit;
        return [function() {
            return d(a) && a <= o
        }, function() {
            return d(l) && i + l <= Date.now()
        }, function() {
            return d(f) && c >= f
        }, function() {
            return d(v) && v === u
        }].some((function(n) {
            return n()
        }))
    }

    function w(n) {
        var e, t = null === (e = n.targeting) || void 0 === e ? void 0 : e.frequency,
            r = v(n);
        return t ? r + t <= Date.now() : !r
    }
    var h = function(n, e, t, r) {
            return new(t || (t = Promise))((function(o, i) {
                function c(n) {
                    try {
                        a(r.next(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function u(n) {
                    try {
                        a(r.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function a(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(c, u)
                }
                a((r = r.apply(n, e || [])).next())
            }))
        },
        g = function(n, e) {
            var t, r, o, i, c = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function u(i) {
                return function(u) {
                    return function(i) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = e.call(n, c)
                        } catch (n) {
                            i = [6, n], r = 0
                        } finally {
                            t = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        },
        y = function(n, e, t) {
            void 0 === t && (t = !1), n.addEventListener("click", (function r() {
                e(), t && n.removeEventListener("click", r)
            })), n.addEventListener("keydown", (function r(o) {
                "Enter" !== o.key && " " !== o.key || (o.preventDefault(), e(), t && n.removeEventListener("keydown", r))
            }))
        },
        b = function(n, e, t) {
            e && e.forEach((function(e) {
                var i, c = n.querySelector((i = e.targetID, "#omnisend-form-action-".concat(i)));
                e.type === o.redirect && c && y(c, (function() {
                    return function(n, e) {
                        return t = void 0, o = void 0, c = function() {
                            return function(n, e) {
                                var t, r, o, i, c = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (t) throw new TypeError("Generator is already executing.");
                                            for (; c;) try {
                                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return c.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        c.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = c.ops.pop(), c.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                            c = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            c.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && c.label < o[1]) {
                                                            c.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && c.label < o[2]) {
                                                            c.label = o[2], c.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && c.ops.pop(), c.trys.pop();
                                                        continue
                                                }
                                                i = e.call(n, c)
                                            } catch (n) {
                                                i = [6, n], r = 0
                                            } finally {
                                                t = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return a(e), [4, u(e)];
                                    case 1:
                                        return t.sent(), r().navigation.redirect(n), [2]
                                }
                            }))
                        }, new((i = Promise) || (i = Promise))((function(n, e) {
                            function r(n) {
                                try {
                                    a(c.next(n))
                                } catch (n) {
                                    e(n)
                                }
                            }

                            function u(n) {
                                try {
                                    a(c.throw(n))
                                } catch (n) {
                                    e(n)
                                }
                            }

                            function a(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(n) {
                                    n(t)
                                }))).then(r, u)
                            }
                            a((c = c.apply(t, o || [])).next())
                        }));
                        var t, o, i, c
                    }(e.settings.url, t)
                }))
            }))
        },
        k = function(n) {
            var e = n.form,
                t = n.element;
            return h(void 0, void 0, void 0, (function() {
                return g(this, (function(n) {
                    var o;
                    return r().forms.setWindowClearance(!1),
                        function(n, e) {
                            var t = n.querySelector("#".concat(i(e), "-close-action"));
                            t && y(t, (function() {
                                return n = e, document.getElementById(i(n)).setAttribute("style", "display: none"), r().forms.setWindowClearance(!0), void a(n);
                                var n
                            }), !0)
                        }(t, e.id), b(t, e.actions, e.id), t.setAttribute("style", ""), o = e.id, c(r().forms.getTrackViewEndpoint(o)), [2]
                }))
            }))
        };

    function I(n) {
        var e = r();
        r().forms.checkIfWindowIsClear() && n.filter((function(n) {
            return (e = n.form).targeting ? [p, m, w].every((function(n) {
                return n(e)
            })) : !v(e);
            var e
        })).forEach((function(n) {
            e.forms.checkIfWindowIsClear() && k(n)
        }))
    }
    h(void 0, void 0, Promise, (function() {
        var e, t, o, c, u;
        return g(this, (function(a) {
            switch (a.label) {
                case 0:
                    return window.addEventListener("mouseout", (function(n) {
                        n.y < 0 && (s.triedToClose = !0, l.forEach((function(n) {
                            return n(s)
                        })))
                    })), window.addEventListener("scroll", (function() {
                        var n = f();
                        n <= s.scrolledPercent || (s.scrolledPercent = n, l.forEach((function(n) {
                            return n(s)
                        })))
                    })), w = r().cookies, h = (parseInt(w.get("page-views"), 10) || 0) + 1, w.set("page-views", h.toString(), {
                        sessionOnly: !0
                    }), s.pageViewCount = h, [4, (d = void 0, v = void 0, p = Promise, m = function() {
                        var n, e, t, o;
                        return function(n, e) {
                            var t, r, o, i, c = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (t) throw new TypeError("Generator is already executing.");
                                        for (; c;) try {
                                            if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return c.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    c.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = c.ops.pop(), c.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        c = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        c.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && c.label < o[1]) {
                                                        c.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && c.label < o[2]) {
                                                        c.label = o[2], c.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && c.ops.pop(), c.trys.pop();
                                                    continue
                                            }
                                            i = e.call(n, c)
                                        } catch (n) {
                                            i = [6, n], r = 0
                                        } finally {
                                            t = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = r(), e = n.brand, t = n.forms, (o = e.getBrandID()) ? [4, fetch(t.getFormsLoadEndpoint(o))] : [2, Promise.resolve([])];
                                case 1:
                                    return [2, i.sent().json()]
                            }
                        }))
                    }, new(p || (p = Promise))((function(n, e) {
                        function t(n) {
                            try {
                                o(m.next(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function r(n) {
                            try {
                                o(m.throw(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function o(e) {
                            var o;
                            e.done ? n(e.value) : (o = e.value, o instanceof p ? o : new p((function(n) {
                                n(o)
                            }))).then(t, r)
                        }
                        o((m = m.apply(d, v || [])).next())
                    })))];
                case 1:
                    return (e = a.sent().filter((function(n) {
                        return !!n.html
                    }))).length ? (t = document.getElementById("omnisend-dynamic-container"), (o = document.createElement("div")).setAttribute("id", "omnisend-forms-container"), (c = document.createElement("div")).setAttribute("id", n), t.appendChild(o), t.appendChild(c), u = [], e.forEach((function(n) {
                        var e = function(n) {
                            var e = document.createElement("div");
                            return e.setAttribute("id", i(n.id)), e.setAttribute("style", "display: none"), e.innerHTML = n.html, e
                        }(n);
                        o.appendChild(e), u.push({
                            form: n,
                            element: e
                        })
                    })), g = function() {
                        return I(u)
                    }, l.push(g), setInterval((function() {
                        I(u)
                    }), 1e3), [2]) : [2]
            }
            var d, v, p, m, w, h, g
        }))
    }))
}();
//# sourceMappingURL=main.js.map