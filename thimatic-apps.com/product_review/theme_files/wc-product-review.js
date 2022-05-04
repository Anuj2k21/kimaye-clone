if (typeof window.th_product_rivyo == 'undefined') {

    /* jQuery v3.3.1 */
    if (typeof jQuery == 'undefined') {
        ! function(e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";
            var n = [],
                r = e.document,
                i = Object.getPrototypeOf,
                o = n.slice,
                a = n.concat,
                s = n.push,
                u = n.indexOf,
                l = {},
                c = l.toString,
                f = l.hasOwnProperty,
                p = f.toString,
                d = p.call(Object),
                h = {},
                g = function e(t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                y = function e(t) {
                    return null != t && t === t.window
                },
                v = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function m(e, t, n) {
                var i, o = (t = t || r).createElement("script");
                if (o.text = e, n)
                    for (i in v) n[i] && (o[i] = n[i]);
                t.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
            }
            var b = "3.3.1",
                w = function(e, t) {
                    return new w.fn.init(e, t)
                },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.fn = w.prototype = {
                jquery: "3.3.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return w.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(w.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, w.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e) {
                    m(e)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (C(e)) {
                        for (n = e.length; r < n; r++)
                            if (!1 === t.call(e[r], r, e[r])) break
                    } else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(T, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : u.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        s = [];
                    if (C(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                    return a.apply([], s)
                },
                guid: 1,
                support: h
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            });

            function C(e) {
                var t = !!e && "length" in e && e.length,
                    n = x(e);
                return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            var E = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    E = ae(),
                    k = ae(),
                    S = ae(),
                    D = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    N = {}.hasOwnProperty,
                    A = [],
                    j = A.pop,
                    q = A.push,
                    L = A.push,
                    H = A.slice,
                    O = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
                    W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    $ = new RegExp(M + "+", "g"),
                    B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    F = new RegExp("^" + M + "*," + M + "*"),
                    _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                    X = new RegExp(W),
                    U = new RegExp("^" + R + "$"),
                    V = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + P + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    K = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    re = function() {
                        p()
                    },
                    ie = me(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (e) {
                    L = {
                        apply: A.length ? function(e, t) {
                            q.apply(e, H.call(t))
                        } : function(e, t) {
                            var n = e.length,
                                r = 0;
                            while (e[n++] = t[r++]);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                        if (11 !== T && (f = J.exec(e)))
                            if (o = f[1]) {
                                if (9 === T) {
                                    if (!(l = t.getElementById(o))) return r;
                                    if (l.id === o) return r.push(l), r
                                } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                            } else {
                                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                            if (1 !== T) m = t, v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                                while (s--) h[s] = "#" + c + " " + ve(h[s]);
                                v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try {
                                return L.apply(r, m.querySelectorAll(v)), r
                            } catch (e) {} finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];

                    function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    return t
                }

                function se(e) {
                    return e[b] = !0, e
                }

                function ue(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function le(e, t) {
                    var n = e.split("|"),
                        i = n.length;
                    while (i--) r.attrHandle[n[i]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        while (n = n.nextSibling)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function de(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function he(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, r) {
                            var i, o = e([], n.length, t),
                                a = o.length;
                            while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ge(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }
                n = oe.support = {}, o = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, p = oe.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ue(function(e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    }), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                i = t.getElementsByName(e), r = 0;
                                while (o = i[r++])
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            while (n = o[i++]) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
                    }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
                    }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, D = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (i === o) return ce(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }, d) : d
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return oe(t, d, null, [e]).length > 0
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== d && p(e), x(e, t)
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, oe.escape = function(e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                        while (t = e[o++]) t === e[o] && (i = r.push(o));
                        while (i--) e.splice(r[i], 1)
                    }
                    return c = null, e
                }, i = oe.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        while (t = e[r++]) n += i(t);
                    return n
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    y = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    m = !u && !s,
                                    x = !1;
                                if (y) {
                                    if (o) {
                                        while (g) {
                                            p = t;
                                            while (p = p[g])
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                        x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                        while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [T, d, x];
                                                break
                                            }
                                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                        while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                            if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                var r, o = i(e, t),
                                    a = o.length;
                                while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[b] ? se(function(e, t, n, i) {
                                var o, a = r(e, null, i, []),
                                    s = e.length;
                                while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: se(function(e) {
                            return function(t) {
                                return oe(e, t).length > 0
                            }
                        }),
                        contains: se(function(e) {
                            return e = e.replace(Z, ee),
                                function(t) {
                                    return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                }
                        }),
                        lang: se(function(e) {
                            return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Y.test(e.nodeName)
                        },
                        input: function(e) {
                            return G.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: he(function() {
                            return [0]
                        }),
                        last: he(function(e, t) {
                            return [t - 1]
                        }),
                        eq: he(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: he(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: he(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq;
                for (t in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = pe(t);

                function ye() {}
                ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    s = e, u = [], l = r.preFilter;
                    while (s) {
                        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length));
                        for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
                };

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function me(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first ? function(t, n, i) {
                        while (t = t[r])
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var l, c, f, p = [T, s];
                        if (u) {
                            while (t = t[r])
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            while (t = t[r])
                                if (1 === t.nodeType || a)
                                    if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                        if (c[o] = p, p[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                    return n
                }

                function we(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function Te(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = a.length,
                            g = o || be(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !o && t ? g : we(g, p, e, s, u),
                            v = n ? i || (o ? e : h || r) ? [] : a : y;
                        if (n && n(y, v, s, u), r) {
                            l = we(v, d), r(l, [], s, u), c = l.length;
                            while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                        }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    l = [], c = v.length;
                                    while (c--)(f = v[c]) && l.push(y[c] = f);
                                    i(null, v = [], l, u)
                                }
                                c = v.length;
                                while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                            }
                        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
                    })
                }

                function Ce(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                            return e === t
                        }, s, !0), f = me(function(e) {
                            return O(t, e) > -1
                        }, s, !0), p = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o; i++)
                                    if (r.relative[e[i].type]) break;
                                return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                            }
                            p.push(n)
                        }
                    return xe(p)
                }

                function Ee(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                            var f, h, y, v = 0,
                                m = "0",
                                x = o && [],
                                b = [],
                                w = l,
                                C = o || i && r.find.TAG("*", c),
                                E = T += null == w ? 1 : Math.random() || .1,
                                k = C.length;
                            for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                if (i && f) {
                                    h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                                    while (y = e[h++])
                                        if (y(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        }
                                    c && (T = E)
                                }
                                n && ((f = !y && f) && v--, o && x.push(f))
                            }
                            if (v += m, n && m !== v) {
                                h = 0;
                                while (y = t[h++]) y(x, b, a, s);
                                if (o) {
                                    if (v > 0)
                                        while (m--) x[m] || b[m] || (b[m] = j.call(u));
                                    b = we(b)
                                }
                                L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                            }
                            return c && (T = E, l = w), x
                        };
                    return n ? se(o) : o
                }
                return s = oe.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = S[e + " "];
                    if (!o) {
                        t || (t = a(e)), n = t.length;
                        while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                        (o = S(e, Ee(i, r))).selector = e
                    }
                    return o
                }, u = oe.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" == typeof e && e,
                        d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        o = V.needsContext.test(e) ? 0 : u.length;
                        while (o--) {
                            if (l = u[o], r.relative[c = l.type]) break;
                            if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                                break
                            }
                        }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }), ue(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ue(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || le("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function(e) {
                    return null == e.getAttribute("disabled")
                }) || le(P, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(e);
            w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
            var k = function(e, t, n) {
                    var r = [],
                        i = void 0 !== n;
                    while ((e = e[t]) && 9 !== e.nodeType)
                        if (1 === e.nodeType) {
                            if (i && w(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                S = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                D = w.expr.match.needsContext;

            function N(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function j(e, t, n) {
                return g(t) ? w.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? w.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? w.grep(e, function(e) {
                    return u.call(t, e) > -1 !== n
                }) : w.filter(t, e, n)
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (w.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0))
                },
                is: function(e) {
                    return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
                }
            });
            var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || q, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                            for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, q = w(r);
            var H = /^(?:parents|prev(?:Until|All))/,
                O = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && w(e);
                    if (!D.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            });

            function P(e, t) {
                while ((e = e[t]) && 1 !== e.nodeType);
                return e
            }
            w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return k(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return k(e, "parentNode", n)
                },
                next: function(e) {
                    return P(e, "nextSibling")
                },
                prev: function(e) {
                    return P(e, "previousSibling")
                },
                nextAll: function(e) {
                    return k(e, "nextSibling")
                },
                prevAll: function(e) {
                    return k(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return k(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return k(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return S(e.firstChild)
                },
                contents: function(e) {
                    return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function R(e) {
                var t = {};
                return w.each(e.match(M) || [], function(e, n) {
                    t[n] = !0
                }), t
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? R(e) : w.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = i || e.once, r = t = !0; a.length; s = -1) {
                            n = a.shift();
                            while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                        }
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                w.each(n, function(n, r) {
                                    g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return w.each(arguments, function(e, t) {
                                var n;
                                while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            };

            function I(e) {
                return e
            }

            function W(e) {
                throw e
            }

            function $(e, t, n, r) {
                var i;
                try {
                    e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            "catch": function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred(function(t) {
                                    w.each(n, function(n, r) {
                                        var i = g(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, r, i) {
                                var o = 0;

                                function a(t, n, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            l = function() {
                                                var e, l;
                                                if (!(t < o)) {
                                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                                }
                                            },
                                            c = i ? l : function() {
                                                try {
                                                    l()
                                                } catch (e) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                                }
                                            };
                                        t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                                    }
                                }
                                return w.Deferred(function(e) {
                                    n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? w.extend(e, i) : i
                            }
                        },
                        o = {};
                    return w.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add, s && a.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[t[0] + "With"] = a.fireWith
                    }), i.promise(o), t && t.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = o.call(arguments),
                        a = w.Deferred(),
                        s = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                    while (n--) $(i[n], s(n), a.reject);
                    return a.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, w.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var F = w.Deferred();
            w.fn.ready = function(e) {
                return F.then(e)["catch"](function(e) {
                    w.readyException(e)
                }), this
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
                }
            }), w.ready.then = F.then;

            function _() {
                r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
            }
            "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
            var z = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === x(n)) {
                        i = !0;
                        for (s in n) z(e, t, s, n[s], !0, o, a)
                    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(w(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                X = /^-ms-/,
                U = /-([a-z])/g;

            function V(e, t) {
                return t.toUpperCase()
            }

            function G(e) {
                return e.replace(X, "ms-").replace(U, V)
            }
            var Y = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Q() {
                this.expando = w.expando + Q.uid++
            }
            Q.uid = 1, Q.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[G(t)] = n;
                    else
                        for (r in t) i[G(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                            while (n--) delete r[t[n]]
                        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var J = new Q,
                K = new Q,
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;

            function te(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
            }

            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = te(n)
                        } catch (e) {}
                        K.set(e, t, n)
                    } else n = void 0;
                return n
            }
            w.extend({
                hasData: function(e) {
                    return K.hasData(e) || J.hasData(e)
                },
                data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                removeData: function(e, t) {
                    K.remove(e, t)
                },
                _data: function(e, t, n) {
                    return J.access(e, t, n)
                },
                _removeData: function(e, t) {
                    J.remove(e, t)
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                            n = a.length;
                            while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                            J.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        K.set(this, e)
                    }) : z(this, function(t) {
                        var n;
                        if (o && void 0 === t) {
                            if (void 0 !== (n = K.get(o, e))) return n;
                            if (void 0 !== (n = ne(o, e))) return n
                        } else this.each(function() {
                            K.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        K.remove(this, e)
                    })
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = w._queueHooks(e, t),
                        a = function() {
                            w.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return J.get(e, n) || J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function() {
                            J.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        w.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = w.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"],
                ae = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
                },
                se = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                };

            function ue(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return w.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    u /= 2, l = l || c[3], c = +u || 1;
                    while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, w.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var le = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = le[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
            }

            function fe(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            w.fn.extend({
                show: function() {
                    return fe(this, !0)
                },
                hide: function() {
                    return fe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ae(this) ? w(this).show() : w(this).hide()
                    })
                }
            });
            var pe = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i,
                ge = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

            function ye(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
            }

            function ve(e, t) {
                for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
            }
            var me = /<|&#?\w+;/;

            function xe(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                        else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                f.textContent = "", d = 0;
                while (o = p[d++])
                    if (r && w.inArray(o, r) > -1) i && i.push(o);
                    else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                    c = 0;
                    while (o = a[c++]) he.test(o.type || "") && n.push(o)
                }
                return f
            }! function() {
                var e = r.createDocumentFragment().appendChild(r.createElement("div")),
                    t = r.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var be = r.documentElement,
                we = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function Ee() {
                return !0
            }

            function ke() {
                return !1
            }

            function Se() {
                try {
                    return r.activeElement
                } catch (e) {}
            }

            function De(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) De(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return w().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
                    w.event.add(this, t, i, r, n)
                })
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
                    if (y) {
                        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(M) || [""]).length;
                        while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && w.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
                    if (y && (u = y.events)) {
                        l = (t = (t || "").match(M) || [""]).length;
                        while (l--)
                            if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                                f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                                while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                            } else
                                for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                        w.isEmptyObject(u) && J.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t = w.event.fix(e),
                        n, r, i, o, a, s, u = new Array(arguments.length),
                        l = (J.get(this, "events") || {})[t.type] || [],
                        c = w.event.special[t.type] || {};
                    for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
                    if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                        s = w.event.handlers.call(this, t, l), n = 0;
                        while ((o = s[n++]) && !t.isPropagationStopped()) {
                            t.currentTarget = o.elem, r = 0;
                            while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                        }
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Se() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Se() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return N(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: ke,
                isPropagationStopped: ke,
                isImmediatePropagationStopped: ke,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                "char": !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), w.fn.extend({
                on: function(e, t, n, r) {
                    return De(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return De(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                        w.event.remove(this, e, n, t)
                    })
                }
            });
            var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ae = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
            }

            function He(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Oe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Pe(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in l)
                            for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
                    }
                    K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
                }
            }

            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function Re(e, t, n, r) {
                t = a.apply([], t);
                var i, o, s, u, l, c, f = 0,
                    p = e.length,
                    d = p - 1,
                    y = t[0],
                    v = g(y);
                if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
                    var o = e.eq(i);
                    v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
                });
                if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
                    if (u)
                        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
                }
                return e
            }

            function Ie(e, t, n) {
                for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Ne, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = w.contains(e.ownerDocument, e);
                    if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                        else Pe(e, s);
                    return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Y(n)) {
                            if (t = n[J.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[J.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return Ie(this, e, !0)
                },
                remove: function(e) {
                    return Ie(this, e)
                },
                text: function(e) {
                    return z(this, function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Re(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Re(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return w.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return z(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                $e = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                Be = new RegExp(oe.join("|"), "i");
            ! function() {
                function t() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                        var t = e.getComputedStyle(c);
                        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var i, o, a, s, u, l = r.createElement("div"),
                    c = r.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
                    boxSizingReliable: function() {
                        return t(), o
                    },
                    pixelBoxStyles: function() {
                        return t(), s
                    },
                    pixelPosition: function() {
                        return t(), i
                    },
                    reliableMarginLeft: function() {
                        return t(), u
                    },
                    scrollboxSize: function() {
                        return t(), a
                    }
                }))
            }();

            function Fe(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function _e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            var ze = /^(none|table(?!-c[ea]).+)/,
                Xe = /^--/,
                Ue = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ve = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ge = ["Webkit", "Moz", "ms"],
                Ye = r.createElement("div").style;

            function Qe(e) {
                if (e in Ye) return e;
                var t = e[0].toUpperCase() + e.slice(1),
                    n = Ge.length;
                while (n--)
                    if ((e = Ge[n] + t) in Ye) return e
            }

            function Je(e) {
                var t = w.cssProps[e];
                return t || (t = w.cssProps[e] = Qe(e) || e), t
            }

            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
            }

            function et(e, t, n) {
                var r = $e(e),
                    i = Fe(e, t, r),
                    o = "border-box" === w.css(e, "boxSizing", !1, r),
                    a = o;
                if (We.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Fe(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = G(t),
                            u = Xe.test(t),
                            l = e.style;
                        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = G(t);
                    return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), w.each(["height", "width"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                            return et(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, o = $e(e),
                            a = "border-box" === w.css(e, "boxSizing", !1, o),
                            s = r && Ze(e, t, r, a, o);
                        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
                    }
                }
            }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
            }), w.fn.extend({
                css: function(e, t) {
                    return z(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            });

            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i)
            }
            w.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, w.fx = tt.prototype.init, w.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/,
                ot = /queueHooks$/;

            function at() {
                rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
            }

            function st() {
                return e.setTimeout(function() {
                    nt = void 0
                }), nt = Date.now()
            }

            function ut(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function lt(e, t, n) {
                for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function ct(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    y = J.get(e, "fxshow");
                n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], it.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = !0
                        }
                        d[r] = y && y[r] || w.style(e, r)
                    }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
                    f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1;
                    for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                        display: l
                    }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r])
                    })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
                }
            }

            function ft(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function pt(e, t, n) {
                var r, i, o = 0,
                    a = pt.prefilters.length,
                    s = w.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (ft(c, l.opts.specialEasing); o < a; o++)
                    if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            w.Animation = w.extend(pt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, ie.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                    },
                    prefilters: [ct],
                    prefilter: function(e, t) {
                        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                    }
                }), w.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? w.extend({}, e) : {
                        complete: n || !n && t || g(e) && e,
                        duration: e,
                        easing: n && t || t && !g(t) && t
                    };
                    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                    }, r
                }, w.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = w.isEmptyObject(e),
                            o = w.speed(t, n, r),
                            a = function() {
                                var t = pt(this, w.extend({}, e), o);
                                (i || J.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = w.timers,
                                a = J.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || w.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = J.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = w.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), w.each(["toggle", "show", "hide"], function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                    }
                }), w.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    w.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), nt = void 0
                }, w.fx.timer = function(e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function() {
                    rt || (rt = !0, at())
                }, w.fx.stop = function() {
                    rt = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function(t, n) {
                    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = r.createElement("input"),
                        t = r.createElement("select").appendChild(r.createElement("option"));
                    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
                }();
            var dt, ht = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return z(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        w.removeAttr(this, e)
                    })
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && N(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(M);
                    if (i && 1 === e.nodeType)
                        while (n = i[r++]) e.removeAttribute(n)
                }
            }), dt = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = ht[t] || w.find.attr;
                ht[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
                }
            });
            var gt = /^(?:input|select|textarea|button)$/i,
                yt = /^(?:a|area)$/i;
            w.fn.extend({
                prop: function(e, t) {
                    return z(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[w.propFix[e] || e]
                    })
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), h.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                w.propFix[this.toLowerCase()] = this
            });

            function vt(e) {
                return (e.match(M) || []).join(" ")
            }

            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function xt(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
            }
            w.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) {
                        w(this).addClass(e.call(this, t, mt(this)))
                    });
                    if ((t = xt(e)).length)
                        while (n = this[u++])
                            if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                a = 0;
                                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = vt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) {
                        w(this).removeClass(e.call(this, t, mt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = xt(e)).length)
                        while (n = this[u++])
                            if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                a = 0;
                                while (o = t[a++])
                                    while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                                i !== (s = vt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                        w(this).toggleClass(e.call(this, n, mt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, a;
                        if (r) {
                            i = 0, o = w(this), a = xt(e);
                            while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++])
                        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = g(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
                    }
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : vt(w.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            var n, r, i = e.options,
                                o = w.makeArray(t),
                                a = i.length;
                            while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }, h.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), h.focusin = "onfocusin" in e;
            var wt = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function(e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(t, n, i, o) {
                    var a, s, u, l, c, p, d, h, v = [i || r],
                        m = f.call(t, "type") ? t.type : t,
                        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                        if (!o && !d.noBubble && !y(i)) {
                            for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                            u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                        }
                        a = 0;
                        while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t)
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        w.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0)
                }
            }), h.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                    }
                }
            });
            var Ct = e.location,
                Et = Date.now(),
                kt = /\?/;
            w.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
            };
            var St = /\[\]$/,
                Dt = /\r?\n/g,
                Nt = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;

            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) w.each(t, function(t, i) {
                    n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== x(t)) r(e, t);
                else
                    for (i in t) jt(e + "[" + i + "]", t[i], n, r)
            }
            w.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) jt(n, e[n], t, i);
                return r.join("&")
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
                    }).map(function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Dt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Dt, "\r\n")
                        }
                    }).get()
                }
            });
            var qt = /%20/g,
                Lt = /#.*$/,
                Ht = /([?&])_=[^&]*/,
                Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Mt = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                It = {},
                Wt = {},
                $t = "*/".concat("*"),
                Bt = r.createElement("a");
            Bt.href = Ct.href;

            function Ft(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(M) || [];
                    if (g(n))
                        while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function _t(e, t, n, r) {
                var i = {},
                    o = e === Wt;

                function a(s) {
                    var u;
                    return i[s] = !0, w.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function zt(e, t) {
                var n, r, i = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e
            }

            function Xt(e, t, n) {
                var r, i, o, a, s = e.contents,
                    u = e.dataTypes;
                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break
                        }
                if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
            }

            function Ut(e, t, n, r) {
                var i, o, a, s, u, l = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: Pt.test(Ct.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": $t,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(It),
                ajaxTransport: Ft(Wt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                        g = h.context || h,
                        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                        v = w.Deferred(),
                        m = w.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        T = {},
                        C = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!s) {
                                        s = {};
                                        while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                                    }
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return c ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) E.always(e[E.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return i && i.abort(t), k(0, t), this
                            }
                        };
                    if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                        l = r.createElement("a");
                        try {
                            l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
                    (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                    if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                        h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                            E.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1, i.send(b, k)
                        } catch (e) {
                            if (c) throw e;
                            k(-1, e)
                        }
                    } else k(-1, "No Transport");

                    function k(t, n, r, s) {
                        var l, p, d, b, T, C = n;
                        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }), w.each(["get", "post"], function(e, t) {
                w[t] = function(e, n, r, i) {
                    return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e))
                }
            }), w._evalUrl = function(e) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstElementChild) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each(function(t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each(function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        w(this).replaceWith(this.childNodes)
                    }), this
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e)
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Vt = {
                    0: 200,
                    1223: 204
                },
                Gt = w.ajaxSettings.xhr();
            h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
                var n, r;
                if (h.cors || Gt && !t.crossDomain) return {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }), w.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), w.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(i, o) {
                            t = w("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), r.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Yt = [],
                Qt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || w.expando + "_" + Et++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return a || w.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
                }), "script"
            }), h.createHTMLDocument = function() {
                var e = r.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), w.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var i, o, a;
                return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            }, w.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, function(t) {
                    return e === t.elem
                }).length
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = w.css(e, "position"),
                        f = w(e),
                        p = {};
                    "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        w.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                            while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - w.css(r, "marginTop", !0),
                            left: t.left - i.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent;
                        while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                        return e || be
                    })
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return z(this, function(e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), w.each(["top", "left"], function(e, t) {
                w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
                    if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
                })
            }), w.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(this, function(t, n, i) {
                            var o;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), w.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), w.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                }, i.guid = e.guid = e.guid || w.guid++, i
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0)
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, "function" == typeof define && define.amd && define("jquery", [], function() {
                return w
            });
            var Jt = e.jQuery,
                Kt = e.$;
            return w.noConflict = function(t) {
                return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
            }, t || (e.jQuery = e.$ = w), w
        });
    }

    /* jQuery Validation Plugin - v1.17.0 */
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                    c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.on("submit.validate", function(b) {
                    function d() {
                        var d, e;
                        return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() {
                var b, c, d;
                return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                    b = c.element(this) && b, b || (d = d.concat(c.errorList))
                }), c.errorList = d), b
            },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                    if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                            break;
                        case "remove":
                            return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                                i[b] = f[b], delete f[b]
                            }), i) : (delete e[j.name], f)
                    }
                    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                        required: h
                    }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                        remote: h
                    })), g
                }
            }
        }), a.extend(a.expr.pseudos || a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + a(b).val())
            },
            filled: function(b) {
                var c = a(b).val();
                return null !== c && !!a.trim("" + c)
            },
            unchecked: function(b) {
                return !a(b).prop("checked")
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c)
            } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                    return c
                })
            }), b)
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) {
                    this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
                },
                onfocusout: function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                onkeyup: function(b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
                },
                onclick: function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}."),
                step: a.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) {
                        "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                            d[c] = b
                        })
                    }), c = this.settings.rules, a.each(c, function(b, d) {
                        c[b] = a.validator.normalizeRule(d)
                    }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                element: function(b) {
                    var c, d, e = this.clean(b),
                        f = this.validationTargetFor(e),
                        g = this,
                        h = !0;
                    return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                        b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                    }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
                },
                showErrors: function(b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                            return {
                                message: a,
                                element: c.findByName(b)[0]
                            }
                        }), this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(b)
                },
                resetElements: function(a) {
                    var b;
                    if (this.settings.unhighlight)
                        for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                    else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(a) {
                    var b, c = 0;
                    for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                    return c
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                        return a.element.name === b.name
                    }).length && b
                },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var d = this.name || a(this).attr("name");
                        return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                    })
                },
                clean: function(b) {
                    return a(b)[0]
                },
                errors: function() {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = a([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                elementValue: function(b) {
                    var c, d, e = a(b),
                        f = b.type;
                    return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f, g = a(b).rules(),
                        h = a.map(g, function(a, b) {
                            return b
                        }).length,
                        i = !1,
                        j = this.elementValue(b);
                    if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
                        if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
                        delete g.normalizer
                    }
                    for (d in g) {
                        e = {
                            method: d,
                            parameters: g[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                                i = !0;
                                continue
                            }
                            if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1
                        } catch (k) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                        }
                    }
                    if (!i) return this.objectLength(g) && this.successList.push(b), !0
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) {
                    "string" == typeof c && (c = {
                        method: c
                    });
                    var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                        e = /\$?\{(\d+)\}/g;
                    return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
                },
                formatAndAdd: function(a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({
                        message: c,
                        element: a,
                        method: b.method
                    }), this.errorMap[a.name] = c, this.submitted[a.name] = c
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(b, c) {
                    var d, e, f, g, h = this.errorsFor(b),
                        i = this.idOrName(b),
                        j = a(b).attr("aria-describedby");
                    h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                        c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                    })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
                },
                errorsFor: function(b) {
                    var c = this.escapeCssMeta(this.idOrName(b)),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
                },
                escapeCssMeta: function(a) {
                    return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                validationTargetFor: function(b) {
                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                findByName: function(b) {
                    return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) {
                    return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
                },
                dependTypes: {
                    "boolean": function(a) {
                        return a
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length
                    },
                    "function": function(a, b) {
                        return a(b)
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                startRequest: function(b) {
                    this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(b, c) {
                    return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, {
                            method: c
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            normalizeAttributeRule: function(a, b, c, d) {
                /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
            },
            attributeRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
                }), a.each(["minlength", "maxlength"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
                },
                email: function(a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
                },
                url: function(a, b) {
                    return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
                },
                date: function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                },
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
                },
                number: function(a, b) {
                    return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e <= d
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d[0] && e <= d[1]
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                max: function(a, b, c) {
                    return this.optional(b) || a <= c
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1]
                },
                step: function(b, c, d) {
                    var e, f = a(c).attr("type"),
                        g = "Step attribute on input type " + f + " is not supported.",
                        h = ["text", "number", "range"],
                        i = new RegExp("\\b" + f + "\\b"),
                        j = f && !i.test(h.join()),
                        k = function(a) {
                            var b = ("" + a).match(/(?:\.(\d+))?$/);
                            return b && b[1] ? b[1].length : 0
                        },
                        l = function(a) {
                            return Math.round(a * Math.pow(10, e))
                        },
                        m = !0;
                    if (j) throw new Error(g);
                    return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                },
                remote: function(b, c, d, e) {
                    if (this.optional(c)) return "dependency-mismatch";
                    e = "string" == typeof e && e || "remote";
                    var f, g, h, i = this.previousValue(c, e);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                        url: d
                    } || d, h = a.param(a.extend({
                        data: b
                    }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        context: f.currentForm,
                        success: function(a) {
                            var d, g, h, j = a === !0 || "true" === a;
                            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                                method: e,
                                parameters: b
                            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        });
        var b, c = {};
        return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
        }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        }), a
    });

    /* jQuery Validation Plugin - v1.17.0 */
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        return function() {
            function b(a) {
                return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-ï¿½ï¿½ï¿½]*/g, "")
            }
            a.validator.addMethod("maxWords", function(a, c, d) {
                return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d
            }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function(a, c, d) {
                return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d
            }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function(a, c, d) {
                var e = b(a),
                    f = /\b\w+\b/g;
                return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
            }, a.validator.format("Please enter between {0} and {1} words."))
        }(), a.validator.addMethod("accept", function(b, c, d) {
            var e, f, g, h = "string" == typeof d ? d.replace(/\s/g, "") : "image/*",
                i = this.optional(c);
            if (i) return i;
            if ("file" === a(c).attr("type") && (h = h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), c.files && c.files.length))
                for (g = new RegExp(".?(" + h + ")$", "i"), e = 0; e < c.files.length; e++)
                    if (f = c.files[e], !f.type.match(g)) return !1;
            return !0
        }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function(a, b) {
            return this.optional(b) || /^\w+$/i.test(a)
        }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function(a, b) {
            if (this.optional(b)) return !0;
            if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
            var c, d, e, f = a.replace(/ /g, ""),
                g = 0,
                h = f.length;
            for (c = 0; c < h; c++) d = h - c, e = f.substring(c, c + 1), g += d * e;
            return g % 11 === 0
        }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function(b, c) {
            return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c)
        }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function(a, b) {
            return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())
        }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function(a, b) {
            "use strict";

            function c(a) {
                return a % 2 === 0
            }
            if (this.optional(b)) return !0;
            var d, e, f, g, h = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
                i = a.substring(0, 1),
                j = a.substring(1, 8),
                k = a.substring(8, 9),
                l = 0,
                m = 0,
                n = 0;
            if (9 !== a.length || !h.test(a)) return !1;
            for (d = 0; d < j.length; d++) e = parseInt(j[d], 10), c(d) ? (e *= 2, n += e < 10 ? e : e - 9) : m += e;
            return l = m + n, f = (10 - l.toString().substr(-1)).toString(), f = parseInt(f, 10) > 9 ? "0" : f, g = "JABCDEFGHI".substr(f, 1).toString(), i.match(/[ABEH]/) ? k === f : i.match(/[KPQS]/) ? k === g : k === f || k === g
        }, "Please specify a valid CIF number."), a.validator.addMethod("cpfBR", function(a) {
            if (a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== a.length) return !1;
            var b, c, d, e, f = 0;
            if (b = parseInt(a.substring(9, 10), 10), c = parseInt(a.substring(10, 11), 10), d = function(a, b) {
                    var c = 10 * a % 11;
                    return 10 !== c && 11 !== c || (c = 0), c === b
                }, "" === a || "00000000000" === a || "11111111111" === a || "22222222222" === a || "33333333333" === a || "44444444444" === a || "55555555555" === a || "66666666666" === a || "77777777777" === a || "88888888888" === a || "99999999999" === a) return !1;
            for (e = 1; e <= 9; e++) f += parseInt(a.substring(e - 1, e), 10) * (11 - e);
            if (d(f, b)) {
                for (f = 0, e = 1; e <= 10; e++) f += parseInt(a.substring(e - 1, e), 10) * (12 - e);
                return d(f, c)
            }
            return !1
        }, "Please specify a valid CPF number"), a.validator.addMethod("creditcard", function(a, b) {
            if (this.optional(b)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(a)) return !1;
            var c, d, e = 0,
                f = 0,
                g = !1;
            if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
            for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
            return e % 10 === 0
        }, "Please enter a valid credit card number."), a.validator.addMethod("creditcardtypes", function(a, b, c) {
            if (/[^0-9\-]+/.test(a)) return !1;
            a = a.replace(/\D/g, "");
            var d = 0;
            return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : !!(128 & d)
        }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function(a, b, c) {
            var d, e = "string" == typeof c,
                f = e ? c : c[0],
                g = !!e || c[1];
            return f = f.replace(/,/g, ""), f = g ? f + "]" : f + "]?", d = "^[" + f + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
        }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function(a, b) {
            return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)
        }, a.validator.messages.date), a.validator.addMethod("dateITA", function(a, b) {
            var c, d, e, f, g, h = !1,
                i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            return i.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0)), h = g.getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d) : h = !1, this.optional(b) || h
        }, a.validator.messages.date), a.validator.addMethod("dateNL", function(a, b) {
            return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
        }, a.validator.messages.date), a.validator.addMethod("extension", function(a, b, c) {
            return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i"))
        }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function(a, b) {
            return this.optional(b) || /^[0-9]{1,7}$/.test(a)
        }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function(a, b) {
            if (this.optional(b)) return !0;
            var c, d, e, f, g, h, i, j, k, l = a.replace(/ /g, "").toUpperCase(),
                m = "",
                n = !0,
                o = "",
                p = "",
                q = 5;
            if (l.length < q) return !1;
            if (c = l.substring(0, 2), h = {
                    AL: "\\d{8}[\\dA-Z]{16}",
                    AD: "\\d{8}[\\dA-Z]{12}",
                    AT: "\\d{16}",
                    AZ: "[\\dA-Z]{4}\\d{20}",
                    BE: "\\d{12}",
                    BH: "[A-Z]{4}[\\dA-Z]{14}",
                    BA: "\\d{16}",
                    BR: "\\d{23}[A-Z][\\dA-Z]",
                    BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                    CR: "\\d{17}",
                    HR: "\\d{17}",
                    CY: "\\d{8}[\\dA-Z]{16}",
                    CZ: "\\d{20}",
                    DK: "\\d{14}",
                    DO: "[A-Z]{4}\\d{20}",
                    EE: "\\d{16}",
                    FO: "\\d{14}",
                    FI: "\\d{14}",
                    FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    GE: "[\\dA-Z]{2}\\d{16}",
                    DE: "\\d{18}",
                    GI: "[A-Z]{4}[\\dA-Z]{15}",
                    GR: "\\d{7}[\\dA-Z]{16}",
                    GL: "\\d{14}",
                    GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                    HU: "\\d{24}",
                    IS: "\\d{22}",
                    IE: "[\\dA-Z]{4}\\d{14}",
                    IL: "\\d{19}",
                    IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    KZ: "\\d{3}[\\dA-Z]{13}",
                    KW: "[A-Z]{4}[\\dA-Z]{22}",
                    LV: "[A-Z]{4}[\\dA-Z]{13}",
                    LB: "\\d{4}[\\dA-Z]{20}",
                    LI: "\\d{5}[\\dA-Z]{12}",
                    LT: "\\d{16}",
                    LU: "\\d{3}[\\dA-Z]{13}",
                    MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                    MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                    MR: "\\d{23}",
                    MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                    MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    MD: "[\\dA-Z]{2}\\d{18}",
                    ME: "\\d{18}",
                    NL: "[A-Z]{4}\\d{10}",
                    NO: "\\d{11}",
                    PK: "[\\dA-Z]{4}\\d{16}",
                    PS: "[\\dA-Z]{4}\\d{21}",
                    PL: "\\d{24}",
                    PT: "\\d{21}",
                    RO: "[A-Z]{4}[\\dA-Z]{16}",
                    SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    SA: "\\d{2}[\\dA-Z]{18}",
                    RS: "\\d{18}",
                    SK: "\\d{20}",
                    SI: "\\d{15}",
                    ES: "\\d{20}",
                    SE: "\\d{20}",
                    CH: "\\d{5}[\\dA-Z]{12}",
                    TN: "\\d{20}",
                    TR: "\\d{5}[\\dA-Z]{17}",
                    AE: "\\d{3}\\d{16}",
                    GB: "[A-Z]{4}\\d{14}",
                    VG: "[\\dA-Z]{4}\\d{16}"
                }, g = h[c], "undefined" != typeof g && (i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", ""), !i.test(l))) return !1;
            for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) e = d.charAt(j), "0" !== e && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
            for (k = 0; k < m.length; k++) f = m.charAt(k), p = "" + o + f, o = p % 97;
            return 1 === o
        }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function(a, b) {
            return this.optional(b) || /^-?\d+$/.test(a)
        }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function(a, b) {
            return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
        }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function(a, b) {
            return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
        }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function(a, b) {
            return this.optional(b) || /^[a-z]+$/i.test(a)
        }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function(a, b) {
            return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
        }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function(a, b) {
            return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
        }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function(a, b) {
            return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
        }, "Please specify a valid mobile number"), a.validator.addMethod("netmask", function(a, b) {
            return this.optional(b) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(a)
        }, "Please enter a valid netmask."), a.validator.addMethod("nieES", function(a, b) {
            "use strict";
            if (this.optional(b)) return !0;
            var c, d = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),
                e = "TRWAGMYFPDXBNJZSQVHLCKET",
                f = a.substr(a.length - 1).toUpperCase();
            return a = a.toString().toUpperCase(), !(a.length > 10 || a.length < 9 || !d.test(a)) && (a = a.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2"), c = 9 === a.length ? a.substr(0, 8) : a.substr(0, 9), e.charAt(parseInt(c, 10) % 23) === f)
        }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function(a, b) {
            "use strict";
            return !!this.optional(b) || (a = a.toUpperCase(), !!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : !!/^[KLM]{1}/.test(a) && a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 1) % 23)))
        }, "Please specify a valid NIF number."), a.validator.addMethod("nipPL", function(a) {
            "use strict";
            if (a = a.replace(/[^0-9]/g, ""), 10 !== a.length) return !1;
            for (var b = [6, 5, 7, 2, 3, 4, 5, 6, 7], c = 0, d = 0; d < 9; d++) c += b[d] * a[d];
            var e = c % 11,
                f = 10 === e ? 0 : e;
            return f === parseInt(a[9], 10)
        }, "Please specify a valid NIP number."), a.validator.addMethod("notEqualTo", function(b, c, d) {
            return this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
        }, "Please enter a different value, values must not be the same."), a.validator.addMethod("nowhitespace", function(a, b) {
            return this.optional(b) || /^\S+$/i.test(a)
        }, "No white space please"), a.validator.addMethod("pattern", function(a, b, c) {
            return !!this.optional(b) || ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a))
        }, "Invalid format."), a.validator.addMethod("phoneNL", function(a, b) {
            return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
        }, "Please specify a valid phone number."), a.validator.addMethod("phonesUK", function(a, b) {
            return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
        }, "Please specify a valid uk phone number"), a.validator.addMethod("phoneUK", function(a, b) {
            return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
        }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function(a, b) {
            return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
        }, "Please specify a valid phone number"), a.validator.addMethod("postalcodeBR", function(a, b) {
            return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
        }, "Informe um CEP vï¿½lido."), a.validator.addMethod("postalCodeCA", function(a, b) {
            return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)
        }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeIT", function(a, b) {
            return this.optional(b) || /^\d{5}$/.test(a)
        }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function(a, b) {
            return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
        }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function(a, b) {
            return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
        }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
                h = e.filter(function() {
                    return g.elementValue(this)
                }).length >= d[0];
            return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
                g.element(this)
            }), e.data("being_validated", !1)), h
        }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
                h = e.filter(function() {
                    return g.elementValue(this)
                }).length,
                i = 0 === h || h >= d[0];
            return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
                g.element(this)
            }), e.data("being_validated", !1)), i
        }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), a.validator.addMethod("stateUS", function(a, b, c) {
            var d, e = "undefined" == typeof c,
                f = !e && "undefined" != typeof c.caseSensitive && c.caseSensitive,
                g = !e && "undefined" != typeof c.includeTerritories && c.includeTerritories,
                h = !e && "undefined" != typeof c.includeMilitary && c.includeMilitary;
            return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
        }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function(b, c, d) {
            return a(b).text().length >= d
        }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function(a, b) {
            return this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
        }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function(a, b) {
            return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
        }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function(a, b) {
            return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
        }, a.validator.messages.url), a.validator.addMethod("vinUS", function(a) {
            if (17 !== a.length) return !1;
            var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                k = 0;
            for (b = 0; b < 17; b++) {
                if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                    for (c = 0; c < h.length; c++)
                        if (d.toUpperCase() === h[c]) {
                            d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
                            break
                        }
                } else d *= e;
                k += d
            }
            return f = k % 11, 10 === f && (f = "X"), f === g
        }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function(a, b) {
            return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a)
        }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function(a, b) {
            return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
        }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"), a
    });

    /* jquery-match-height */
    ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e = -1,
            o = -1,
            n = function(t) {
                return parseFloat(t) || 0
            },
            a = function(e) {
                var o = 1,
                    a = t(e),
                    i = null,
                    r = [];
                return a.each(function() {
                    var e = t(this),
                        a = e.offset().top - n(e.css("margin-top")),
                        s = r.length > 0 ? r[r.length - 1] : null;
                    null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a
                }), r
            },
            i = function(e) {
                var o = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
            },
            r = t.fn.matchHeight = function(e) {
                var o = i(e);
                if (o.remove) {
                    var n = this;
                    return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                        e.elements = e.elements.not(n)
                    }), this
                }
                return this.length <= 1 && !o.target ? this : (r._groups.push({
                    elements: this,
                    options: o
                }), r._apply(this, o), this)
            };
        r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function(e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return u.each(function() {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), u.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                var e = t(this),
                    o = e.css("display");
                "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), l = a(h), h.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(l, function(e, o) {
                var a = t(o),
                    i = 0;
                if (s.target) i = s.target.outerHeight(!1);
                else {
                    if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                    a.each(function() {
                        var e = t(this),
                            o = e.attr("style"),
                            n = e.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var a = {
                            display: n
                        };
                        a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                    })
                }
                a.each(function() {
                    var e = t(this),
                        o = 0;
                    s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"))
                })
            }), u.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    n = o.attr("data-mh") || o.attr("data-match-height");
                n in e ? e[n] = e[n].add(o) : e[n] = o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
        var s = function(e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function(n, a) {
            if (a && "resize" === a.type) {
                var i = t(window).width();
                if (i === e) return;
                e = i;
            }
            n ? o === -1 && (o = setTimeout(function() {
                s(a), o = -1
            }, r._throttle)) : s(a)
        }, t(r._applyDataApi);
        var h = t.fn.on ? "on" : "bind";
        t(window)[h]("load", function(t) {
            r._update(!1, t)
        }), t(window)[h]("resize orientationchange", function(t) {
            r._update(!0, t)
        })
    });

    /* Masonry PACKAGED v4.2.1 */
    ! function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, r, a) {
            function h(t, e, n) {
                var o, r = "$()." + i + '("' + e + '")';
                return t.each(function(t, h) {
                    var u = a.data(h, i);
                    if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var d = u[e];
                    if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                    var l = d.apply(u, n);
                    o = void 0 === o ? l : o
                }), void 0 !== o ? o : t
            }

            function u(t, e) {
                t.each(function(t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
                })
            }
            a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return h(this, t, e)
                }
                return u(this, t), this
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            r = t.console,
            s = "undefined" == typeof r ? function() {} : function(t) {
                r.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                    var r = i[o],
                        s = n && n[r];
                    s && (this.off(t, r), delete n[r]), r.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; u > e; e++) {
                var i = h[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
            }
        }

        function r(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                    var c = h[l],
                        f = r[c],
                        m = parseFloat(f);
                    a[c] = isNaN(m) ? 0 : m
                }
                var p = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    E = d && s,
                    b = t(r.width);
                b !== !1 && (a.width = b + (E ? 0 : p + _));
                var x = t(r.height);
                return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = h.length,
            d = !1;
        return r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    h = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(h)),
                    d = s + "-options",
                    l = t.jQuery;
                u.forEach(function(t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                    }
                    var h = new e(t, i);
                    l && l.data(t, o, h)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            h = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s],
            u = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            d = n.prototype = Object.create(t.prototype);
        d.constructor = n, d._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.getSize = function() {
            this.size = e(this.element)
        }, d.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = u[i] || i;
                e[n] = t[i]
            }
        }, d.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                r = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
        }, d.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                r = i ? "left" : "right",
                s = i ? "right" : "left",
                a = this.position.x + t[o];
            e[r] = this.getXValue(a), e[s] = "";
            var h = n ? "paddingTop" : "paddingBottom",
                u = n ? "top" : "bottom",
                d = n ? "bottom" : "top",
                l = this.position.y + t[h];
            e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, d.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, d.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, d._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                h = e - n,
                u = {};
            u.transform = this.getTranslate(a, h), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, d.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, d.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, d._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, d.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var l = "opacity," + o(a);
        d.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: l,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(h, this, !1)
            }
        }, d.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, d.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var c = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, d.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
        }, d._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function() {
            this.css(f)
        }, d.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, d.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, d.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, d.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, d.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, d.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, d.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o) {
        "use strict";

        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++l;
            this.element.outlayerGUID = o, c[o] = this, this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o
        }
        var h = t.console,
            u = t.jQuery,
            d = function() {},
            l = 0,
            c = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = r.prototype;
        n.extend(f, e.prototype), f.option = function(t) {
            n.extend(this.options, t)
        }, f._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, f._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, f.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, f._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var r = e[o],
                    s = new i(r, this);
                n.push(s)
            }
            return n
        }, f._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, f.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, f.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, f._init = f.layout, f._resetLayout = function() {
            this.getSize()
        }, f.getSize = function() {
            this.size = i(this.element)
        }, f._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, f.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, f._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, f._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, f._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, f.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, f._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, f._postLayout = function() {
            this.resizeContainer()
        }, f.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, f._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                s++, s == r && i()
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void i();
            var s = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }, f.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var o = u.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, f.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, f.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, f.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, f.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, f._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, f._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, f._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, f._manageStamp = d, f._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return r
        }, f.handleEvent = n.handleEvent, f.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, f.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, f.onresize = function() {
            this.resize()
        }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, f.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, f.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, f.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, f.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, f.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, f.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, f.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, f.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, f.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, f.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, f.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, r.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e]
        }, r.create = function(t, e) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        };
        var m = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return n._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, n.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / n,
                s = n - o % n,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, n.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                    x: this.columnWidth * r.col,
                    y: r.y
                }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
            return s
        }, n._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, n._getTopColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
            return e
        }, n._getColGroupY = function(t, e) {
            if (2 > e) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, n._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols,
                n = t > 1 && i + t > this.cols;
            i = n ? 0 : i;
            var o = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, n._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                r = o ? n.left : n.right,
                s = r + i.outerWidth,
                a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var h = Math.floor(s / this.columnWidth);
            h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
        }, n._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, n._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    });

    /* Slick Slider JS */
    if (typeof jQuery().slick === 'undefined') {
        ! function(i) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
        }(function(i) {
            "use strict";
            var e = window.Slick || {};
            (e = function() {
                var e = 0;
                return function(t, o) {
                    var s, n = this;
                    n.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: i(t),
                        appendDots: i(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return i('<button type="button" />').text(t + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, n.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
                }
            }()).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
                var s = this;
                if ("boolean" == typeof t) o = t, t = null;
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e)
                }), s.$slidesCache = s.$slides, s.reinit()
            }, e.prototype.animateHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.animate({
                        height: e
                    }, i.options.speed)
                }
            }, e.prototype.animateSlide = function(e, t) {
                var o = {},
                    s = this;
                s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                    left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                    top: e
                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
                    animStart: s.currentLeft
                }).animate({
                    animStart: e
                }, {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function(i) {
                        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
                    },
                    complete: function() {
                        t && t.call()
                    }
                })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
                    s.disableTransition(), t.call()
                }, s.options.speed))
            }, e.prototype.getNavTarget = function() {
                var e = this,
                    t = e.options.asNavFor;
                return t && null !== t && (t = i(t).not(e.$slider)), t
            }, e.prototype.asNavFor = function(e) {
                var t = this.getNavTarget();
                null !== t && "object" == typeof t && t.each(function() {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0)
                })
            }, e.prototype.applyTransition = function(i) {
                var e = this,
                    t = {};
                !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
            }, e.prototype.autoPlay = function() {
                var i = this;
                i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function() {
                var i = this,
                    e = i.currentSlide + i.options.slidesToScroll;
                i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
            }, e.prototype.buildArrows = function() {
                var e = this;
                !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, e.prototype.buildDots = function() {
                var e, t, o = this;
                if (!0 === o.options.dots) {
                    for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                    o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
                }
            }, e.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
                }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
            }, e.prototype.buildRows = function() {
                var i, e, t, o, s, n, r, l = this;
                if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
                    for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                        var d = document.createElement("div");
                        for (e = 0; e < l.options.rows; e++) {
                            var a = document.createElement("div");
                            for (t = 0; t < l.options.slidesPerRow; t++) {
                                var c = i * r + (e * l.options.slidesPerRow + t);
                                n.get(c) && a.appendChild(n.get(c))
                            }
                            d.appendChild(a)
                        }
                        o.appendChild(d)
                    }
                    l.$slider.empty().append(o), l.$slider.children().children().children().css({
                        width: 100 / l.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, e.prototype.checkResponsive = function(e, t) {
                var o, s, n, r = this,
                    l = !1,
                    d = r.$slider.width(),
                    a = window.innerWidth || i(window).width();
                if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    s = null;
                    for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                    null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
                }
            }, e.prototype.changeSlide = function(e, t) {
                var o, s, n, r = this,
                    l = i(e.currentTarget);
                switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                    case "previous":
                        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                        break;
                    case "next":
                        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                        break;
                    case "index":
                        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function(i) {
                var e, t;
                if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
                else
                    for (var o in e) {
                        if (i < e[o]) {
                            i = t;
                            break
                        }
                        t = e[o]
                    }
                return i
            }, e.prototype.cleanUpEvents = function() {
                var e = this;
                e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
            }, e.prototype.cleanUpRows = function() {
                var i, e = this;
                e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
            }, e.prototype.clickHandler = function(i) {
                !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
            }, e.prototype.destroy = function(e) {
                var t = this;
                t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    i(this).attr("style", i(this).data("originalStyling"))
                }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
            }, e.prototype.disableTransition = function(i) {
                var e = this,
                    t = {};
                t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
            }, e.prototype.fadeSlide = function(i, e) {
                var t = this;
                !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                    zIndex: t.options.zIndex
                }), t.$slides.eq(i).animate({
                    opacity: 1
                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: t.options.zIndex
                }), e && setTimeout(function() {
                    t.disableTransition(i), e.call()
                }, t.options.speed))
            }, e.prototype.fadeSlideOut = function(i) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
            }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
                var e = this;
                null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
            }, e.prototype.focusHandler = function() {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function() {
                        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
                    }, 0)
                })
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }, e.prototype.getDotCount = function() {
                var i = this,
                    e = 0,
                    t = 0,
                    o = 0;
                if (!0 === i.options.infinite)
                    if (i.slideCount <= i.options.slidesToShow) ++o;
                    else
                        for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                else if (!0 === i.options.centerMode) o = i.slideCount;
                else if (i.options.asNavFor)
                    for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
                return o - 1
            }, e.prototype.getLeft = function(i) {
                var e, t, o, s, n = this,
                    r = 0;
                return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
            }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
                return this.options[i]
            }, e.prototype.getNavigableIndexes = function() {
                var i, e = this,
                    t = 0,
                    o = 0,
                    s = [];
                for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return s
            }, e.prototype.getSlick = function() {
                return this
            }, e.prototype.getSlideCount = function() {
                var e, t, o = this;
                return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
                }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(i)
                    }
                }, e)
            }, e.prototype.init = function(e) {
                var t = this;
                i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
            }, e.prototype.initADA = function() {
                var e = this,
                    t = Math.ceil(e.slideCount / e.options.slidesToShow),
                    o = e.getNavigableIndexes().filter(function(i) {
                        return i >= 0 && i < e.slideCount
                    });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                    var s = o.indexOf(t);
                    i(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + t,
                        tabindex: -1
                    }), -1 !== s && i(this).attr({
                        "aria-describedby": "slick-slide-control" + e.instanceUid + s
                    })
                }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                    var n = o[s];
                    i(this).attr({
                        role: "presentation"
                    }), i(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + e.instanceUid + s,
                        "aria-controls": "slick-slide" + e.instanceUid + n,
                        "aria-label": s + 1 + " of " + t,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                }).eq(e.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
                for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
                e.activateADA()
            }, e.prototype.initArrowEvents = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
            }, e.prototype.initDotEvents = function() {
                var e = this;
                !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                    message: "index"
                }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
            }, e.prototype.initSlideEvents = function() {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
            }, e.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
            }, e.prototype.initUI = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
            }, e.prototype.keyHandler = function(i) {
                var e = this;
                i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "next" : "previous"
                    }
                }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "previous" : "next"
                    }
                }))
            }, e.prototype.lazyLoad = function() {
                function e(e) {
                    i("img[data-lazy]", e).each(function() {
                        var e = i(this),
                            t = i(this).attr("data-lazy"),
                            o = i(this).attr("data-srcset"),
                            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        r.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, function() {
                                o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function() {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                }), n.$slider.trigger("lazyLoaded", [n, e, t])
                            })
                        }, r.onerror = function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                        }, r.src = t
                    })
                }
                var t, o, s, n = this;
                if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
                    for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
                e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
            }, e.prototype.loadSlider = function() {
                var i = this;
                i.setPosition(), i.$slideTrack.css({
                    opacity: 1
                }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
            }, e.prototype.next = e.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, e.prototype.orientationChange = function() {
                var i = this;
                i.checkResponsive(), i.setPosition()
            }, e.prototype.pause = e.prototype.slickPause = function() {
                var i = this;
                i.autoPlayClear(), i.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function() {
                var i = this;
                i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
            }, e.prototype.postSlide = function(e) {
                var t = this;
                t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
            }, e.prototype.prev = e.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, e.prototype.preventDefault = function(i) {
                i.preventDefault()
            }, e.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var t, o, s, n, r, l = this,
                    d = i("img[data-lazy]", l.$slider);
                d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                    s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
                }, r.onerror = function() {
                    e < 3 ? setTimeout(function() {
                        l.progressiveLazyLoad(e + 1)
                    }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
                }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
            }, e.prototype.refresh = function(e) {
                var t, o, s = this;
                o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
                    currentSlide: t
                }), s.init(), e || s.changeSlide({
                    data: {
                        message: "index",
                        index: t
                    }
                }, !1)
            }, e.prototype.registerBreakpoints = function() {
                var e, t, o, s = this,
                    n = s.options.responsive || null;
                if ("array" === i.type(n) && n.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (e in n)
                        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                            for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                            s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                        }
                    s.breakpoints.sort(function(i, e) {
                        return s.options.mobileFirst ? i - e : e - i
                    })
                }
            }, e.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
            }, e.prototype.resize = function() {
                var e = this;
                i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
                }, 50))
            }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
                var o = this;
                if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
                o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
            }, e.prototype.setCSS = function(i) {
                var e, t, o = this,
                    s = {};
                !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
            }, e.prototype.setDimensions = function() {
                var i = this;
                !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                    padding: "0px " + i.options.centerPadding
                }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
            }, e.prototype.setFade = function() {
                var e, t = this;
                t.$slides.each(function(o, s) {
                    e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    })
                }), t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                })
            }, e.prototype.setHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.css("height", e)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function() {
                var e, t, o, s, n, r = this,
                    l = !1;
                if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
                else if ("multiple" === n) i.each(o, function(i, e) {
                    r.options[i] = e
                });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                            r.options.responsive.push(s[t])
                        }
                l && (r.unload(), r.reinit())
            }, e.prototype.setPosition = function() {
                var i = this;
                i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
            }, e.prototype.setProps = function() {
                var i = this,
                    e = document.body.style;
                i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
            }, e.prototype.setSlideClasses = function(i) {
                var e, t, o, s, n = this;
                if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
                    var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                    e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
                } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
            }, e.prototype.setupInfinite = function() {
                var e, t, o, s = this;
                if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                    for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        i(this).attr("id", "")
                    })
                }
            }, e.prototype.interrupt = function(i) {
                var e = this;
                i || e.autoPlay(), e.interrupted = i
            }, e.prototype.selectHandler = function(e) {
                var t = this,
                    o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                    s = parseInt(o.attr("data-slick-index"));
                s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
            }, e.prototype.slideHandler = function(i, e, t) {
                var o, s, n, r, l, d = null,
                    a = this;
                if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                    if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                        a.postSlide(o)
                    }) : a.postSlide(o));
                    else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
                else {
                    if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s), void a.animateHeight();
                    !0 !== t ? a.animateSlide(d, function() {
                        a.postSlide(s)
                    }) : a.postSlide(s)
                }
            }, e.prototype.startLoad = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
            }, e.prototype.swipeDirection = function() {
                var i, e, t, o, s = this;
                return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
            }, e.prototype.swipeEnd = function(i) {
                var e, t, o = this;
                if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
                if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
                if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                    switch (t = o.swipeDirection()) {
                        case "left":
                        case "down":
                            e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                    }
                    "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
            }, e.prototype.swipeHandler = function(i) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i)
                }
            }, e.prototype.swipeMove = function(i) {
                var e, t, o, s, n, r, l = this;
                return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
            }, e.prototype.swipeStart = function(i) {
                var e, t = this;
                if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
                void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                var i = this;
                null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
            }, e.prototype.unload = function() {
                var e = this;
                i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function(i) {
                var e = this;
                e.$slider.trigger("unslick", [e, i]), e.destroy()
            }, e.prototype.updateArrows = function() {
                var i = this;
                Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, e.prototype.updateDots = function() {
                var i = this;
                null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
            }, e.prototype.visibility = function() {
                var i = this;
                i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
            }, i.fn.slick = function() {
                var i, t, o = this,
                    s = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                for (i = 0; i < r; i++)
                    if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
                return o
            }
        });
    }

    var $wc = jQuery.noConflict();

    window.th_product_rivyo = window.th_product_rivyo || {};
    $wc(document).ready(function() {
        var wc_shop_url = Shopify.shop;
        var page_url = window.location.href;
        var wc_product_handle = $wc('#wc_review_section').data('handle');
        var wc_product_id = $wc('#wc_review_section').data('product_id');
        var wc_product_limit = $wc('#wc_review_section').data('limit');
        var wc_product_grid_array = new Array();
        var wc_product_id_grid_array = new Array();
        var app_url = 'https://thimatic-apps.com/product_review/';
        var app_url_fronted = 'https://thimatic-apps.com/rivyo-app/api/';
        var loader_code = '<figure class="wc_review_section_loader wc_wf_cls"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="41.2637" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="24.8458" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></figure>';

        if (typeof wc_shop_url != 'undefined' && wc_shop_url != null) {
            wc_shop_url = wc_shop_url.replace(/^https?\:\/\//i, '');
        }

        function wc_add_stylesheet() {
            $wc.ajax({
                url: app_url + 'get_app_setting_css.php',
                type: 'post',
                dataType: 'json',
                data: {
                    shop: wc_shop_url
                },
                success: function(result) {
                    $wc("head").append(result.style);
                    $wc("body").append(result.popup_widget);
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
            $wc("head").append('<link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" type="text/css" media="all"><link href="https://thimatic-apps.com/product_review/theme_files/wc-review.css?v=2.1" rel="stylesheet" type="text/css" media="all"/>');
        }

        function product_badge_hover_effect() {
            var hover_badge = $wc('.hover_review_badge').html();
            if (hover_badge != null && hover_badge != '' && hover_badge != undefined) {
                var data_id = $wc('.hover_review_badge').data('class');
                $wc('.wc_product_badge_hover').attr('id', data_id).html(hover_badge);
            }
        }

        function get_product_review_badge(wc_product_grid_array, wc_product_id_grid_array) {
            $wc.ajax({
                url: app_url + 'get_review_rating_update.php',
                type: 'post',
                dataType: 'json',
                data: {
                    shop: wc_shop_url,
                    product_handles: wc_product_grid_array,
                    product_ids: wc_product_id_grid_array
                },
                success: function(result) {
                    $wc('.wc_product_review_badge').html(result.empty.html);
                    $wc.each(result, function(key, value) {
                        $wc('.wc_product_review_badge[data-handle="' + key + '"]').html(value.html);
                        $wc('.wc_product_review_badge[data-product_id="' + key + '"]').html(value.html);
                        product_badge_hover_effect();
                    });
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        function review_section_width() {
            var review_section_width = $wc('.easytabs-container').width();
            if (review_section_width > 767) {
                $wc('#wc_review_section').addClass('wc_review_full_width_section');
                $wc('#wc_review_section').removeClass('wc_review_half_width_section');
            } else {
                $wc('#wc_review_section').addClass('wc_review_half_width_section');
                $wc('#wc_review_section').removeClass('wc_review_full_width_section');
            }
        }

        if (typeof wc_shop_url != 'undefined' && wc_shop_url != null) {
            wc_add_stylesheet();
            if ($wc('.wc_product_review_badge').length > 0) {
                $wc('.wc_product_review_badge').each(function(idx, val) {
                    if ($wc(this).data('product_id')) {
                        wc_product_id_grid_array.push($wc(this).data('product_id'));
                    } else {
                        wc_product_grid_array.push($wc(this).data('handle'));
                    }
                    if (idx === ($wc('.wc_product_review_badge').length - 1)) {
                        get_product_review_badge(wc_product_grid_array, wc_product_id_grid_array);
                    }
                });
            }
        }

        function set_grid_height(load) {
            $wc('.wc_grid_equal_height').each(function() {
                $wc(this).find('.wc_grid_min_height').matchHeight({});
            });
            if ($wc('.wc_slider_lenght_3').hasClass('slick-slider')) {
                $wc('.wc_slider_lenght_3').slick('resize');
            }
        }

        function author_img_height() {
            $wc('.wc_author_figure').each(function() {
                var figure_height = $wc(this).width();
                $wc(this).height(figure_height);
            });
        }

        function wc_masonry_grid_event() {
            var $wc_grid_masonry = $wc('.wc_masonry').masonry({
                itemSelector: '.wc_review_grid_item',
                percentPosition: true
            });
            $wc_grid_masonry.masonry('reloadItems');
            $wc_grid_masonry.masonry();
        }

        function imageLoaded() {
            author_img_height();
            if ($wc(window).width() > 641) {
                set_grid_height();
            }
            wc_masonry_grid_event();
        }

        function wc_review_filter(select_val, rating_val, wc_product_limit, wc_load_more, filter_attribute = '') {
            if (rating_val == null) {
                var rating_val = '';
            }
            if (wc_product_id == undefined || wc_product_id == null || wc_product_id == '') {
                if (__st.p == 'product') {
                    wc_product_id = __st.rid;
                }
            }
            $wc.ajax({
                url: app_url + 'get_product_review_filter.php',
                type: 'post',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    product_handle: wc_product_handle,
                    product_id: wc_product_id,
                    limit: wc_product_limit,
                    page_url: page_url,
                    filter: select_val,
                    rating_val: rating_val,
                    load_more: wc_load_more,
                    filter_attribute: filter_attribute
                },
                beforeSend: function() {
                    if (wc_load_more == '') {
                        $wc('#wc_reviews_tab').html(loader_code);
                    }
                },
                success: function(result) {
                    if (wc_load_more != '') {
                        $wc('#wc_review_section .wc_review_app_paginate .wc_review_load_more').removeClass('wc_review_loading_content');
                        if ($wc('#wc_review_section .wc_masonry').length > 0) {
                            var $wc_grid_masonry = $wc('#wc_review_section .wc_masonry').masonry({
                                itemSelector: '.wc_review_grid_item',
                                percentPosition: true
                            });
                            var $append_element = $wc(result);
                            $wc_grid_masonry.append($append_element).masonry('appended', $append_element);
                        } else {
                            $wc('#wc_reviews_tab .wc_review_content_ul').append(result);
                            wc_masonry_grid_event();
                        }
                        var wc_current_page = parseInt($wc('#wc_review_section .wc_review_app_paginate .wc_review_load_more').attr('data-page_id'));
                        var wc_max_page = parseInt($wc('#wc_review_section .wc_review_app_paginate .wc_review_load_more').attr('data-total_page'));
                        if (wc_current_page === wc_max_page) {
                            $wc('#wc_review_section .wc_review_app_paginate').remove();
                        }
                    } else {
                        $wc('#wc_reviews_tab').html(result);
                        $wc('.wc_reviews_tabs .wc_tab_links li:first-child a span').text($wc('#total_view').attr('content'));
                        $wc('.wc_slider_lenght_3').slick('resize');
                    }
                    var images = $wc('#wc_review_section .wc_open_modal');
                    if ($wc('#wc_review_section .wc_top_img_open_modal').length > 0) {
                        images = $wc('#wc_review_section .wc_top_img_open_modal');
                    }
                    if (images.length == 0) {
                        imageLoaded();
                    } else {
                        images.each(function($th_index) {
                            if (this.complete) {
                                imageLoaded.call(this);
                            } else {
                                $wc(this).one('load', imageLoaded);
                            }
                            if ($th_index === images.length - 1) {
                                imageLoaded();
                            }
                        });
                    }
                    set_grid_height();
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        function wc_overall_review_update() {
            $wc.ajax({
                url: app_url + 'get_p_single_overall_review.php',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    product_handle: wc_product_handle
                },
                success: function(result) {
                    $wc('.wc_overall_review').html(result);
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        function wc_form_validation() {
            $wc.validator.addMethod('filesize', function(value, element, param) {
                return this.optional(element) || (element.files[0].size <= param)
            }, 'Image size must be less than 200KB');

            $wc("form[name='wc_submit_review']").validate({
                rules: {
                    name: 'required',
                    email: {
                        required: true,
                        email: true
                    },
                    rating: 'required',
                    customer_image: {
                        accept: 'image/jpg,image/jpeg,image/png',
                        filesize: 200000
                    },
                    review_img: {
                        accept: 'image/jpg,image/jpeg,image/png'
                    },
                    review_body: 'required'
                },
                errorPlacement: function(error, element) {
                    var name = $wc(element).attr('name');
                    error.appendTo($wc('#' + name + '_validate'));
                },
                submitHandler: function(form) {
                    var formElement = document.getElementById('wc_submit_review');
                    var $inputs = $wc('input[type="file"]:not([disabled])', formElement);
                    $inputs.each(function(_, input) {
                        if (input.files.length > 0) return
                        $wc(input).prop('disabled', true);
                    });
                    var formData = new FormData(formElement);
                    if (wc_product_id == undefined || wc_product_id == null || wc_product_id == '') {
                        if (__st.p == 'product') {
                            wc_product_id = __st.rid;
                        }
                    }
                    formData.append('product_id', wc_product_id);
                    $wc.ajax({
                        url: app_url + 'add_review.php',
                        type: 'POST',
                        dataType: 'json',
                        data: formData,
                        beforeSend: function() {
                            var loader_code_btn = '<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#fff" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg>';
                            $wc('.wc_review_submit_btn').html(loader_code_btn);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                        mimeType: 'multipart/form-data',
                        success: function(result) {
                            $wc('.wc_review_submit_btn').html('Submit Review');
                            if (result.error) {
                                $wc('.ajax_message_value').html('');
                                $wc('#wc_review_msg').append(result.message).show('medium');
                            } else {
                                $wc('.ajax_message_value').html('');
                                document.getElementById('wc_submit_review').reset();
                                $wc('#wc_review_msg').append(result.message).show('medium');
                                if (result.status == 'approve') {
                                    var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                                    var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                                    wc_review_filter(select_val, rating_val, 0, '');
                                    wc_overall_review_update();
                                    if ($wc('.wc_product_review_badge').length > 0) {
                                        $wc('.wc_product_review_badge').each(function(idx, val) {
                                            if ($wc(this).data('product_id')) {
                                                wc_product_id_grid_array.push($wc(this).data('product_id'));
                                            } else {
                                                wc_product_grid_array.push($wc(this).data('handle'));
                                            }
                                            if (idx === ($wc('.wc_product_review_badge').length - 1)) {
                                                get_product_review_badge(wc_product_grid_array, wc_product_id_grid_array);
                                            }
                                        });
                                    }
                                }
                                if (result.review_redirection == 'true') {
                                    window.location.href = result.redirect_page_link;
                                }
                            }
                            $inputs.prop('disabled', false);
                        },
                        error: function(XMLHttpRequest, textStatus) {
                            console.log(XMLHttpRequest);
                        }
                    });
                    return false;
                }
            });

            $wc("form[name='wc_submit_question']").validate({
                rules: {
                    name: 'required',
                    email: {
                        required: true,
                        email: true
                    },
                    question: 'required'
                },
                errorPlacement: function(error, element) {
                    var name = $wc(element).attr('name');
                    error.appendTo($wc('#' + name + '_que_validate'));
                },
                submitHandler: function(form) {
                    var formElement = document.getElementById('wc_submit_question');
                    var formData = new FormData(formElement);
                    if (wc_product_id == undefined || wc_product_id == null || wc_product_id == '') {
                        if (__st.p == 'product') {
                            wc_product_id = __st.rid;
                        }
                    }
                    formData.append('product_id', wc_product_id);
                    $wc.ajax({
                        url: app_url + 'add_question.php',
                        type: 'POST',
                        dataType: 'json',
                        data: formData,
                        beforeSend: function() {
                            var loader_code_btn = '<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#fff" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg>';
                            $wc('.wc_question_submit_btn').html(loader_code_btn);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                        mimeType: 'multipart/form-data',
                        success: function(result) {
                            $wc('.wc_question_submit_btn').html('Submit Question');
                            if (result.error) {
                                $wc('.ajax_message_value').html('');
                                $wc('#wc_que_msg').append(result.message).show('medium');
                            } else {
                                $wc('.ajax_message_value').html('');
                                document.getElementById('wc_submit_question').reset();
                                $wc('#wc_que_msg').append(result.message).show('medium');
                            }
                        },
                        error: function(XMLHttpRequest, textStatus) {
                            console.log(XMLHttpRequest);
                        }
                    });
                    return false;
                }
            });
        }

        $wc(document).on('click', '.wc_open_modal', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var wc_modal_code = '';
            var total_index = $wc(this).parents('ul.wc_review_image').attr('data-val');
            wc_modal_code += '<div id="wc_image_modal"><div class="wc_close_modal">&times;</div><div class="wc_modal_content"><div class="wc_modal_image">';
            if (total_index > 1) {
                wc_modal_code += '<span class="wc_prev_btn wc_next_prev_btn">&#10094;</span>';
            }
            wc_modal_code += '<figure class="wc_modal_figure"><img src="" alt="wc_modal_img" class="wc_modal_img" /></figure>';
            if (total_index > 1) {
                wc_modal_code += '<span class="wc_next_btn wc_next_prev_btn">&#10095;</span>';
            }
            wc_modal_code += '</div></div></div>';
            $wc('body').append(wc_modal_code);
            if (!$wc('#wc_image_modal').hasClass('wc_display_modal')) {
                var current_index = $wc(this).attr('data-index');
                var current_image = $wc(this).attr('data-src');
                $wc(this).parents('ul.wc_review_image').addClass('wc_current_modal_code');
                $wc('.wc_modal_image').find('figure img').attr('src', current_image);
                $wc('.wc_modal_image').find('figure').attr('data-index', current_index);
                $wc('.wc_modal_image').find('figure').attr('data-total', total_index);
                $wc('#wc_image_modal').addClass('wc_display_modal');
            }
            var win_height = $wc(window).height();
            win_height = win_height - 20;
            $wc('.wc_modal_image figure img').attr('style', 'max-height:' + win_height + 'px');
        });

        $wc(document).on('click', '.wc_top_img_open_modal', function(e) {
            var this_parents = $wc(this).parents('.wc_grid_main_section_outer');
            this_parents.find('.wc_open_modal[data-index="1"]').trigger('click');
        });

        function wc_modal_img_code(current_figure, next_index) {
            current_figure.attr('data-index', next_index);
            var find_class = '.wc_review_image_' + next_index;
            var temp_class = $wc('.wc_review_main_content ul.wc_current_modal_code').find(find_class);
            var next_image = temp_class.find('img').attr('data-src');
            current_figure.find('img').attr('src', next_image);
            var win_height = $wc(window).height();
            win_height = win_height - 20;
            $wc('.wc_modal_image figure img').attr('style', 'max-height:' + win_height + 'px');
        }

        $wc(document).on('click', '.wc_next_btn', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var current_figure = $wc(this).siblings('.wc_modal_figure');
            var current_index = current_figure.attr('data-index');
            var total_index = current_figure.attr('data-total');
            var next_index = '';
            if (parseInt(total_index) > current_index) {
                next_index = parseInt(current_index) + 1;
            } else {
                next_index = 1;
            }
            wc_modal_img_code(current_figure, next_index);
        });

        $wc(document).on('click', '.wc_prev_btn', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var current_figure = $wc(this).siblings('.wc_modal_figure');
            var current_index = current_figure.attr('data-index');
            var total_index = current_figure.attr('data-total');
            var next_index = parseInt(current_index) - 1;
            if (next_index == 0) {
                next_index = parseInt(total_index);
            } else {
                next_index = next_index;
            }
            wc_modal_img_code(current_figure, next_index);
        });

        $wc(document).on('click', '#wc_image_modal .wc_close_modal', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if ($wc('#wc_image_modal').hasClass('wc_display_modal')) {
                $wc('.wc_review_main_content ul.wc_current_modal_code').removeClass('wc_current_modal_code');
                $wc('#wc_image_modal').remove();
            }
        });

        $wc(document).mouseup(function(e) {
            var popup = $wc(".wc_next_prev_btn, .wc_modal_img");
            if (!$wc('.wc_open_modal').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
                if ($wc('#wc_image_modal').hasClass('wc_display_modal')) {
                    $wc("#wc_image_modal .wc_close_modal").trigger("click");
                }
            }
        });

        function wc_product_review() {
            if (wc_product_id == undefined || wc_product_id == null || wc_product_id == '') {
                if (__st.p == 'product') {
                    wc_product_id = __st.rid;
                }
            }
            $wc.ajax({
                url: app_url + 'get_product_data.php',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    product_handle: wc_product_handle,
                    product_id: wc_product_id,
                    page_url: page_url,
                    limit: wc_product_limit
                },
                beforeSend: function() {
                    $wc('#wc_review_section').html(loader_code);
                },
                success: function(result) {
                    $wc('#wc_review_section').html('');
                    $wc('#wc_review_section').html(result);
                    product_badge_hover_effect();
                    wc_form_validation();
                    wc_masonry_grid_event();
                    if ($wc('.wc_slider_lenght_3').hasClass('slick-slider')) {
                        $wc('.wc_slider_lenght_3').slick('resize');
                    }
                    var images = $wc('#wc_review_section .wc_open_modal');
                    if ($wc('#wc_review_section .wc_top_img_open_modal').length > 0) {
                        images = $wc('#wc_review_section .wc_top_img_open_modal');
                    }
                    if (images.length == 0) {
                        imageLoaded();
                    } else {
                        images.each(function($th_index) {
                            if (this.complete) {
                                imageLoaded.call(this);
                            } else {
                                $wc(this).one('load', imageLoaded);
                            }
                            if ($th_index === images.length - 1) {
                                imageLoaded();
                            }
                        });
                    }
                    if ($wc('.easytabs-container').length > 0) {
                        review_section_width();
                    }

                    $wc(document).on('click', '.wc_write_review_form', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        if ($wc('#wc_question_form:visible').length > 0) {
                            $wc('#wc_question_form').slideToggle(500);
                        }
                        $wc('#wc_product_review_form').slideToggle(500);
                    });

                    $wc(document).on('click', '.wc_ask_question_form', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        if ($wc('#wc_product_review_form:visible').length > 0) {
                            $wc('#wc_product_review_form').slideToggle(500);
                        }
                        $wc('#wc_question_form').slideToggle(500);
                    });

                    $wc(document).on('click', '.wc_tab_links a', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        var currentAttrValue = $wc(this).attr('data-tab');
                        $wc('.wc_reviews_tabs #' + currentAttrValue).slideDown(500).siblings().slideUp(500);
                        $wc(this).parent('li').addClass('wc_active').siblings().removeClass('wc_active');
                    });

                    $wc(document).on('click', '[data-click-rating]', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        $wc('.wc_star_graph_li.wc_selected_li').removeClass('wc_selected_li');
                        $wc(this).parents('li.wc_star_graph_li').addClass('wc_selected_li');
                        var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                        var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                        //wc_review_filter(select_val, rating_val, 0, '');
                        var filter_attribute = new Object();
                        $wc(".wc_filter_attribute .wc_review_form_filter_attribute").each(function(index) {
                            var selected_value = $wc(this).find('select').val();
                            if (selected_value != '') {
                                filter_attribute[$wc(this).find('select').attr('name')] = selected_value;
                            }
                        });
                        wc_review_filter(select_val, rating_val, 0, '', filter_attribute);
                    });

                    $wc(document).on('change', '.wc_review_listing_select select.wc_select_drop', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                        var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                        //wc_review_filter(select_val, rating_val, 0, '');
                        var filter_attribute = new Object();
                        $wc(".wc_filter_attribute .wc_review_form_filter_attribute").each(function(index) {
                            var selected_value = $wc(this).find('select').val();
                            if (selected_value != '') {
                                filter_attribute[$wc(this).find('select').attr('name')] = selected_value;
                            }
                        });
                        wc_review_filter(select_val, rating_val, 0, '', filter_attribute);
                    });

                    $wc(document).on('click', '#wc_review_section .wc_review_app_paginate .wc_page a', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        if (!$wc(this).hasClass('wc_disable')) {
                            var wc_product_limit = $wc(this).data('page_id');
                            var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                            var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                            $wc('html, body').animate({
                                scrollTop: $wc('#wc_review_section').offset().top - 50
                            }, 1000);
                            //wc_review_filter(select_val, rating_val, wc_product_limit, '');
                            var filter_attribute = new Object();
                            $wc(".wc_filter_attribute .wc_review_form_filter_attribute").each(function(index) {
                                var selected_value = $wc(this).find('select').val();
                                if (selected_value != '') {
                                    filter_attribute[$wc(this).find('select').attr('name')] = selected_value;
                                }
                            });
                            wc_review_filter(select_val, rating_val, wc_product_limit, '', filter_attribute);
                        }
                    });

                    $wc(document).on('click', '#wc_review_section .wc_review_app_paginate .wc_review_load_more', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        if (!$wc(this).hasClass('wc_review_loading_content')) {
                            $wc(this).addClass('wc_review_loading_content');
                        }
                        var filter_attribute = new Object();
                        $wc(".wc_filter_attribute .wc_review_form_filter_attribute").each(function(index) {
                            var selected_value = $wc(this).find('select').val();
                            if (selected_value != '') {
                                filter_attribute[$wc(this).find('select').attr('name')] = selected_value;
                            }
                        });
                        var wc_product_limit = $wc(this).attr('data-page_id');
                        var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                        var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                        wc_review_filter(select_val, rating_val, wc_product_limit, 'wc_load_more', filter_attribute);
                        wc_product_limit = parseInt(wc_product_limit) + 1;
                        $wc(this).attr('data-page_id', wc_product_limit);
                    });

                    $wc(document).on('change', '.wc_filter_attribute .wc_review_form_filter_attribute select', function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();

                        var filter_attribute = new Object();
                        $wc(".wc_filter_attribute .wc_review_form_filter_attribute").each(function(index) {
                            var selected_value = $wc(this).find('select').val();
                            if (selected_value != '') {
                                filter_attribute[$wc(this).find('select').attr('name')] = selected_value;
                            }
                        });

                        if (!$wc(this).hasClass('wc_review_loading_content')) {
                            $wc(this).addClass('wc_review_loading_content');
                        }
                        var wc_product_limit = $wc(this).attr('data-page_id');
                        var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                        var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                        wc_review_filter(select_val, rating_val, wc_product_limit, '', filter_attribute);
                    });

                    $wc(document).on('click', '.wc_que_like .like', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        var wc_like = $wc(this).data('like');
                        var $this = $wc(this);
                        $wc.ajax({
                            url: app_url + 'question_like_dislike.php',
                            type: 'post',
                            dataType: 'json',
                            data: {
                                shop: wc_shop_url,
                                question_id: $wc(this).data('question_id'),
                                like: wc_like
                            },
                            success: function(result) {
                                if (result.error == false) {
                                    $this.parents('.wc_que_like').find('li a:first-child .like_count_cls').html(result.Like);
                                    $this.parents('.wc_que_like').find('li a:last-child .like_count_cls').html(result.Dislike);
                                }
                            },
                            error: function(XMLHttpRequest, textStatus) {
                                console.log(XMLHttpRequest);
                            }
                        });
                    });
                    set_grid_height();
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        if ($wc('#wc_review_section').length > 0) {
            wc_product_review();
        }

        $wc(document).on('click', '.wc_review_like .like', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var wc_like = $wc(this).data('like');
            var $this = $wc(this);
            $wc.ajax({
                url: app_url + 'like_dislike.php',
                type: 'post',
                dataType: 'json',
                data: {
                    shop: wc_shop_url,
                    review_id: $wc(this).data('review_id'),
                    like: wc_like
                },
                success: function(result) {
                    if (result.error == false) {
                        $this.parents('.wc_review_like').find('li a:first-child .like_count_cls').html(result.Like);
                        $this.parents('.wc_review_like').find('li a:last-child .like_count_cls').html(result.Dislike);
                    }
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        });

        function wc_page_all_review(current_page, wc_load_more) {
            $wc.ajax({
                url: app_url + 'get_product_review_list.php',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    page_url: page_url,
                    limit: current_page,
                    load_more: wc_load_more
                },
                beforeSend: function() {
                    if (wc_load_more == '') {
                        $wc('#wc_all_review_page').html(loader_code);
                    }
                },
                success: function(result) {
                    if (wc_load_more != '') {
                        $wc('#wc_all_review_page .wc_review_app_paginate .wc_review_load_more').removeClass('wc_review_loading_content');
                        if ($wc('#wc_all_review_page .wc_masonry').length > 0) {
                            var $wc_grid_masonry = $wc('#wc_all_review_page .wc_masonry').masonry({
                                itemSelector: '.wc_review_grid_item',
                                percentPosition: true
                            });
                            var $append_element = $wc(result);
                            $wc_grid_masonry.append($append_element).masonry('appended', $append_element);
                        } else {
                            $wc('#wc_all_review_page ul.wc_review_content_ul').append(result);
                            wc_masonry_grid_event();
                        }
                        var wc_current_page = parseInt($wc('#wc_all_review_page .wc_review_app_paginate .wc_review_load_more').attr('data-page_id'));
                        var wc_max_page = parseInt($wc('#wc_all_review_page .wc_review_app_paginate .wc_review_load_more').attr('data-total_page'));
                        if (wc_current_page === wc_max_page) {
                            $wc('#wc_all_review_page .wc_review_app_paginate').remove();
                        }
                    } else {
                        $wc('#wc_all_review_page').html(result);
                        wc_masonry_grid_event();
                    }
                    var images = $wc('#wc_all_review_page .wc_open_modal');
                    if ($wc('#wc_all_review_page .wc_top_img_open_modal').length > 0) {
                        images = $wc('#wc_all_review_page .wc_top_img_open_modal');
                    }
                    if (images.length == 0) {
                        imageLoaded();
                    } else {
                        images.each(function($th_index) {
                            if (this.complete) {
                                imageLoaded.call(this);
                            } else {
                                $wc(this).one('load', imageLoaded);
                            }
                            if ($th_index === images.length - 1) {
                                imageLoaded();
                            }
                        });
                    }
                    set_grid_height();
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        if ($wc('#wc_all_review_page').length > 0) {
            var current_page = $wc('#wc_all_review_page').data('limit');
            wc_page_all_review(current_page, '');
        }

        $wc(document).on('click', '#wc_all_review_page .wc_review_app_paginate .wc_page_list a', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_disable')) {
                wc_page_all_review($wc(this).data('page_id'), '');
            }
        });

        $wc(document).on('click', '#wc_all_review_page .wc_review_app_paginate .wc_review_load_more', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_review_loading_content')) {
                $wc(this).addClass('wc_review_loading_content');
            }
            var wc_product_limit = $wc(this).attr('data-page_id');
            wc_page_all_review(wc_product_limit, 'wc_load_more');
            wc_product_limit = parseInt(wc_product_limit) + 1;
            $wc(this).attr('data-page_id', wc_product_limit);
        });

        function wc_testimonial_reviews() {
            $wc.ajax({
                url: app_url + 'get_product_review_testimonial.php',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url
                },
                beforeSend: function() {
                    $wc('.wc_testimonial_section').html(loader_code);
                },
                success: function(result) {
                    $wc('.wc_testimonial_section').html(result);
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        if ($wc('.wc_testimonial_section').length > 0) {
            wc_testimonial_reviews();
        }

        function wc_page_all_review_widget(current_page, wc_load_more) {
            $wc.ajax({
                url: app_url + 'get_product_review_list_widget.php',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    page_url: page_url,
                    limit: current_page,
                    load_more: wc_load_more
                },
                beforeSend: function() {
                    if (wc_load_more == '') {
                        $wc('#wc_all_review_widget_popup').html(loader_code);
                    }
                },
                success: function(result) {
                    if (wc_load_more != '') {
                        $wc('#wc_all_review_widget_popup .wc_review_app_paginate .wc_review_load_more').removeClass('wc_review_loading_content');
                        if ($wc('#wc_all_review_widget_popup .wc_masonry').length > 0) {
                            var $wc_grid_masonry = $wc('#wc_all_review_widget_popup .wc_masonry').masonry({
                                itemSelector: '.wc_review_grid_item',
                                percentPosition: true
                            });
                            var $append_element = $wc(result);
                            $wc_grid_masonry.append($append_element).masonry('appended', $append_element);
                        } else {
                            $wc('#wc_all_review_widget_popup ul.wc_review_content_ul').append(result);
                            wc_masonry_grid_event();
                        }
                        var wc_current_page = parseInt($wc('#wc_all_review_widget_popup .wc_review_app_paginate .wc_review_load_more').attr('data-page_id'));
                        var wc_max_page = parseInt($wc('#wc_all_review_widget_popup .wc_review_app_paginate .wc_review_load_more').attr('data-total_page'));
                        if (wc_current_page === wc_max_page) {
                            $wc('#wc_all_review_widget_popup .wc_review_app_paginate').remove();
                        }
                    } else {
                        $wc('#wc_all_review_widget_popup').html(result);
                        wc_masonry_grid_event();
                    }
                    var images = $wc('#wc_all_review_widget_popup .wc_open_modal');
                    if ($wc('#wc_all_review_widget_popup .wc_top_img_open_modal').length > 0) {
                        images = $wc('#wc_all_review_widget_popup .wc_top_img_open_modal');
                    }
                    if (images.length == 0) {
                        imageLoaded();
                    } else {
                        images.each(function($th_index) {
                            if (this.complete) {
                                imageLoaded.call(this);
                            } else {
                                $wc(this).one('load', imageLoaded);
                            }
                            if ($th_index === images.length - 1) {
                                imageLoaded();
                            }
                        });
                    }
                    set_grid_height();
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        $wc(document).on('click', '.wc_review_app_paginate .wc_page_list_widget a', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_disable')) {
                wc_page_all_review_widget($wc(this).data('page_id'), '');
            }
        });

        $wc(document).on('click', '#wc_all_review_widget_popup .wc_review_app_paginate .wc_review_load_more', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_review_loading_content')) {
                $wc(this).addClass('wc_review_loading_content');
            }
            var wc_product_limit = $wc(this).attr('data-page_id');
            wc_page_all_review_widget(wc_product_limit, 'wc_load_more');
            wc_product_limit = parseInt(wc_product_limit) + 1;
            $wc(this).attr('data-page_id', wc_product_limit);
        });

        function th_shop_badge(store_average) {
            $wc.ajax({
                url: app_url + 'get_shop_review_avg.php',
                type: 'GET',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    store_average: store_average
                },
                success: function(result) {
                    if (store_average === 1) {
                        $wc('.wc_store_average_section').html(result);
                    } else {
                        $wc('.wc_shop_review_badge').html(result);
                    }
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        function th_review_sidebar(bth_this) {
            $wc.ajax({
                url: app_url + 'ajax/ajax.php',
                type: 'POST',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    action: 'sidebar_widget_review'
                },
                success: function(result) {
                    $wc('.rivyo_sidebar_widget').html(result);
                    $wc('.rivyo_sidebar_widget ul').slick({
                        slide: 'li',
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        touchMove: true,
                        adaptiveHeight: true,
                        draggable: true,
                        arrows: false
                    });
                    setTimeout(function() {
                        var widget_height = $wc('.rivyo_sidebar_widget').outerHeight();
                        widget_height = widget_height + 70 + 50;
                        $wc('.wc_widget_loader_cls').remove();
                        if (bth_this.parent().hasClass('center_widget')) {
                            bth_this.parent().addClass('open_toggle').animate({
                                width: '150px'
                            });
                        } else {
                            bth_this.parent().addClass('open_toggle').animate({
                                height: widget_height + 'px'
                            });
                        }
                    }, 1000);
                    $wc('.rivyo_sidebar_widget ul').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        var widget_height = $wc('.rivyo_sidebar_widget li[data-slick-index="' + nextSlide + '"]').outerHeight();
                        widget_height = widget_height + 70 + 60;
                        bth_this.parent().animate({
                            height: widget_height + 'px'
                        });
                    });
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        if ($wc('.wc_store_average_section').length > 0) {
            var store_average = 1;
            th_shop_badge(store_average);
        }

        $wc(document).on('click', '.show_wc_model', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            $wc($wc(this).data('id')).show();
            var store_average = 0;
            th_shop_badge(store_average);
            wc_page_all_review_widget(0, '');
        });

        $wc(document).on('click', '#wc_modal .wc_close_modal', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            $wc($wc(this).parent('.wc_display_modal')).hide();
        });

        $wc(document).on('click', '.rivyo_close_sidebar', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            $wc('.rivyo_sidebar_widget').hide();
        });

        $wc(document).on('click', '.badge_widget .wc_shop_based_review', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var bth_this = $wc(this);
            if (bth_this.parent().hasClass('open_toggle')) {
                if (bth_this.parent().hasClass('center_widget')) {
                    bth_this.parent().removeClass('open_toggle').animate({
                        width: '0px'
                    });
                } else {
                    bth_this.parent().removeClass('open_toggle').animate({
                        height: '70px'
                    });
                }
                setTimeout(function() {
                    $wc('.rivyo_sidebar_widget ul').slick('unslick').find('li').hide();
                }, 1000);
            } else {
                var wc_widget_loader = '<div class="wc_widget_loader_cls"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="38.9533" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="22.5354" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></div>';
                $wc('.badge_widget').append(wc_widget_loader);
                th_review_sidebar(bth_this);
            }
        });

        /* Site review */
        function wc_site_review_form_validation() {
            $wc.validator.addMethod('filesize', function(value, element, param) {
                return this.optional(element) || (element.files[0].size <= param)
            }, 'Image size must be less than 200KB');

            $wc("form[name='wc_submit_site_review']").validate({
                rules: {
                    name: 'required',
                    email: {
                        required: true,
                        email: true
                    },
                    rating: 'required',
                    review_title: 'required',
                    review_img: {
                        accept: 'image/jpg,image/jpeg,image/png'
                    },
                    review_body: 'required'
                },
                errorPlacement: function(error, element) {
                    var name = $wc(element).attr('name');
                    error.appendTo($wc('#' + name + '_validate'));
                },
                submitHandler: function(form) {
                    var formElement = document.getElementById('wc_submit_site_review');
                    var $inputs = $wc('input[type="file"]:not([disabled])', formElement);
                    $inputs.each(function(_, input) {
                        if (input.files.length > 0) return
                        $wc(input).prop('disabled', true);
                    });
                    var formData = new FormData(formElement);
                    $wc.ajax({
                        url: app_url_fronted + 'add_site_review',
                        type: 'POST',
                        dataType: 'json',
                        data: formData,
                        beforeSend: function() {
                            var loader_code_btn = '<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#fff" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg>';
                            $wc('.wc_review_submit_btn').html(loader_code_btn);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                        mimeType: 'multipart/form-data',
                        success: function(result) {
                            $wc('.wc_review_submit_btn').html('Submit Review');
                            if (result.error) {
                                $wc('.ajax_message_value').html('');
                                $wc('#wc_review_msg').append(result.message).show('medium');
                            } else {
                                $wc('.ajax_message_value').html('');
                                document.getElementById('wc_submit_site_review').reset();
                                $wc('#wc_review_msg').append(result.message).show('medium');
                                if (result.status == 'approve') {
                                    var rating_val = $wc('.wc_star_graph_li.wc_selected_li').find('.wc_rating_filter').data('rating');
                                    var select_val = $wc('.wc_review_listing_select select.wc_select_drop').val();
                                }
                            }
                            if (result.review_redirection == 'true') {
                                window.location.href = result.redirect_page_link;
                            }
                            $inputs.prop('disabled', false);
                        },
                        error: function(XMLHttpRequest, textStatus) {
                            console.log(XMLHttpRequest);
                        }
                    });
                    return false;
                }
            });
        }

        function wc_page_site_review(current_page, wc_load_more = '') {
            $wc.ajax({
                url: app_url_fronted + 'get_site_review',
                type: 'get',
                dataType: 'html',
                data: {
                    shop: wc_shop_url,
                    page_url: page_url,
                    limit: current_page,
                    page: (parseInt(current_page) + 1),
                    load_more: wc_load_more
                },
                beforeSend: function() {
                    if (wc_load_more == '') {
                        $wc('#wc_store_review_page').html(loader_code);
                    }
                },
                success: function(result) {
                    if (wc_load_more != '') {
                        $wc('#wc_store_review_page .wc_review_app_paginate .wc_review_load_more').removeClass('wc_review_loading_content');
                        if ($wc('#wc_store_review_page .wc_masonry').length > 0) {
                            var $wc_grid_masonry = $wc('#wc_store_review_page .wc_masonry').masonry({
                                itemSelector: '.wc_review_grid_item',
                                percentPosition: true
                            });
                            var $append_element = $wc(result);
                            $wc_grid_masonry.append($append_element).masonry('appended', $append_element);
                        } else {
                            $wc('#wc_store_review_page ul.wc_review_content_ul').append(result);
                            wc_masonry_grid_event();
                        }
                        var wc_current_page = parseInt($wc('#wc_store_review_page .wc_review_app_paginate .wc_review_load_more').attr('data-page_id'));
                        var wc_max_page = parseInt($wc('#wc_store_review_page .wc_review_app_paginate .wc_review_load_more').attr('data-total_page'));
                        if (wc_current_page === wc_max_page) {
                            $wc('#wc_store_review_page .wc_review_app_paginate').remove();
                        }
                    } else {
                        $wc('#wc_store_review_page').html(result);
                        wc_masonry_grid_event();
                    }
                    $wc(document).on('click', '.wc_write_review_form', function(e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        $wc('#wc_product_review_form').slideToggle(500);
                    });
                    wc_site_review_form_validation();
                    var images = $wc('.wc_open_modal');
                    counter = images.length;
                    if (counter == 0) {
                        counter = 1;
                        imageLoaded();
                    } else {
                        images.each(function($th_index) {
                            if (this.complete) {
                                imageLoaded.call(this);
                            } else {
                                $wc(this).one('load', imageLoaded);
                            }
                            if ($th_index === images.length - 1) {
                                counter = 1;
                                imageLoaded();
                            }
                        });
                    }
                    set_grid_height('continue_load');
                },
                error: function(XMLHttpRequest, textStatus) {
                    console.log(XMLHttpRequest);
                }
            });
        }

        if ($wc('#wc_store_review_page').length > 0) {
            var current_page = $wc('#wc_store_review_page').data('limit');
            wc_page_site_review(current_page);
        }

        $wc(document).on('click', '#wc_store_review_page .wc_review_app_paginate .wc_review_load_more', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_review_loading_content')) {
                $wc(this).addClass('wc_review_loading_content');
            }
            var wc_product_limit = $wc(this).attr('data-page_id');
            wc_page_site_review(wc_product_limit, 'wc_load_more');
            wc_product_limit = parseInt(wc_product_limit) + 1;
            $wc(this).attr('data-page_id', wc_product_limit);
        });

        $wc(document).on('click', '.wc_review_app_paginate .wc_page_site_review_list a', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!$wc(this).hasClass('wc_disable')) {
                wc_page_site_review($wc(this).data('page_id'));
            }
            return false;
        });
        /* End Site review */

        if ($wc('#wc_review_section').length > 0) {
            $wc(document).on('click', '.wc_review_badge_inner', function(e) {
                e.preventDefault(), e.stopImmediatePropagation();
                $wc('html, body').animate({
                    scrollTop: $wc('#wc_review_section').offset().top - 50
                }, 1500);
            });
        }

        $wc(document).on('click', '.wc_product_review_badge', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            product_badge_hover_effect();
        });

        $wc(window).resize(function() {
            if ($wc('.easytabs-container').length > 0) {
                review_section_width();
            }
            author_img_height();
            set_grid_height();
            var win_height = $wc(window).height();
            win_height = win_height - 20;
            $wc('.wc_modal_image figure img').attr('style', 'max-height:' + win_height + 'px');
        });

        $wc(document).on('click', '.wc_review_toggle_btn', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            if ($wc('#wc_product_review_form:visible').length > 0) {
                $wc('#wc_product_review_form').slideToggle();
            }
            if ($wc('#wc_question_form:visible').length > 0) {
                $wc('#wc_question_form').slideToggle();
            }
            $wc('.wc_review_form_toggle_lyt_3').slideToggle('wc_toggle_active');
        });

        $wc(document).on('click', '.wc_review_read_more', function(e) {
            e.preventDefault(), e.stopImmediatePropagation();
            $wc(this).parent().html($wc(this).data('desc'));
            imageLoaded();
        });

        $wc(document).on('click', '.wc_filter_attribute a#wc_filter_attribute_title', function(e) {
            $wc('.wc_filter_attribute .wc_filter_attribute_wrapper').slideToggle('wc_filter_attribute_up');
            $wc(this).toggleClass('wc_filter_arrow_top');
            return false;
        });

        if (window.location.href.indexOf('wc_review_section_redirect=true') > -1) {
            $wc('html, body').animate({
                scrollTop: $wc('#wc_review_section').offset().top
            }, 'slow');
        }
    });

    $wc(window).on('load', function() {
        $wc('.wc_author_figure').each(function() {
            var figure_height = $wc(this).width();
            $wc(this).height(figure_height);
        });
        if ($wc(window).width() > 641) {
            $wc('.wc_grid_equal_height').each(function() {
                $wc(this).find('.wc_grid_min_height').matchHeight({});
            });
        }
    });

    var $ = $wc.noConflict();
}