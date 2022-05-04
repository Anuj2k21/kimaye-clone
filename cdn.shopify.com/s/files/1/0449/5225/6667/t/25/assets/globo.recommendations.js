window.jQuery || function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        var i = [],
            n = t.document,
            r = i.slice,
            o = i.concat,
            s = i.push,
            a = i.indexOf,
            l = {},
            u = l.toString,
            c = l.hasOwnProperty,
            d = {},
            h = "2.2.3",
            p = function(t, e) {
                return new p.fn.init(t, e)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            g = /^-ms-/,
            m = /-([\da-z])/gi,
            v = function(t, e) {
                return e.toUpperCase()
            };

        function y(t) {
            var e = !!t && "length" in t && t.length,
                i = p.type(t);
            return "function" !== i && !p.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        p.fn = p.prototype = {
            jquery: h,
            constructor: p,
            selector: "",
            length: 0,
            toArray: function() {
                return r.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : r.call(this)
            },
            pushStack: function(t) {
                var e = p.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return p.each(this, t)
            },
            map: function(t) {
                return this.pushStack(p.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(r.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: i.sort,
            splice: i.splice
        }, p.extend = p.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], s !== (n = t[e]) && (u && n && (p.isPlainObject(n) || (r = p.isArray(n))) ? (r ? (r = !1, o = i && p.isArray(i) ? i : []) : o = i && p.isPlainObject(i) ? i : {}, s[e] = p.extend(u, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, p.extend({
            expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === p.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !p.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
                if (t.constructor && !c.call(t, "constructor") && !c.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || c.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[u.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = p.trim(t)) && (1 === t.indexOf("use strict") ? ((e = n.createElement("script")).text = t, n.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(g, "ms-").replace(m, v)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, n = 0;
                if (y(t))
                    for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(f, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : s.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : a.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, o = t.length, s = !i; o > r; r++) !e(t[r], r) !== s && n.push(t[r]);
                return n
            },
            map: function(t, e, i) {
                var n, r, s = 0,
                    a = [];
                if (y(t))
                    for (n = t.length; n > s; s++) null != (r = e(t[s], s, i)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
                return o.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), p.isFunction(t) ? (n = r.call(arguments, 2), (o = function() {
                    return t.apply(e || this, n.concat(r.call(arguments)))
                }).guid = t.guid = t.guid || p.guid++, o) : void 0
            },
            now: Date.now,
            support: d
        }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            l["[object " + e + "]"] = e.toLowerCase()
        });
        var x = function(t) {
            var e, i, n, r, o, s, a, l, u, c, d, h, p, f, g, m, v, y, x, w = "sizzle" + 1 * new Date,
                _ = t.document,
                b = 0,
                T = 0,
                C = ot(),
                S = ot(),
                P = ot(),
                L = function(t, e) {
                    return t === e && (d = !0), 0
                },
                R = 1 << 31,
                q = {}.hasOwnProperty,
                D = [],
                k = D.pop,
                j = D.push,
                E = D.push,
                N = D.slice,
                O = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                $ = "[\\x20\\t\\r\\n\\f]",
                G = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                M = "\\[" + $ + "*(" + G + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + G + "))|)" + $ + "*\\]",
                F = ":(" + G + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                I = new RegExp($ + "+", "g"),
                z = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                H = new RegExp("^" + $ + "*," + $ + "*"),
                B = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                W = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
                V = new RegExp(F),
                U = new RegExp("^" + G + "$"),
                X = {
                    ID: new RegExp("^#(" + G + ")"),
                    CLASS: new RegExp("^\\.(" + G + ")"),
                    TAG: new RegExp("^(" + G + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + A + ")$", "i"),
                    needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                },
                J = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
                it = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                nt = function() {
                    h()
                };
            try {
                E.apply(D = N.call(_.childNodes), _.childNodes), D[_.childNodes.length].nodeType
            } catch (t) {
                E = {
                    apply: D.length ? function(t, e) {
                        j.apply(t, N.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function rt(t, e, n, r) {
                var o, a, u, c, d, f, v, y, b = e && e.ownerDocument,
                    T = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return n;
                if (!r && ((e ? e.ownerDocument || e : _) !== p && h(e), e = e || p, g)) {
                    if (11 !== T && (f = Z.exec(t)))
                        if (o = f[1]) {
                            if (9 === T) {
                                if (!(u = e.getElementById(o))) return n;
                                if (u.id === o) return n.push(u), n
                            } else if (b && (u = b.getElementById(o)) && x(e, u) && u.id === o) return n.push(u), n
                        } else {
                            if (f[2]) return E.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = f[3]) && i.getElementsByClassName && e.getElementsByClassName) return E.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (i.qsa && !P[t + " "] && (!m || !m.test(t))) {
                        if (1 !== T) b = e, y = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((c = e.getAttribute("id")) ? c = c.replace(tt, "\\$&") : e.setAttribute("id", c = w), a = (v = s(t)).length, d = U.test(c) ? "#" + c : "[id='" + c + "']"; a--;) v[a] = d + " " + gt(v[a]);
                            y = v.join(","), b = K.test(t) && pt(e.parentNode) || e
                        }
                        if (y) try {
                            return E.apply(n, b.querySelectorAll(y)), n
                        } catch (t) {} finally {
                            c === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(z, "$1"), e, n, r)
            }

            function ot() {
                var t = [];
                return function e(i, r) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                }
            }

            function st(t) {
                return t[w] = !0, t
            }

            function at(t) {
                var e = p.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function lt(t, e) {
                for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
            }

            function ut(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || R) - (~t.sourceIndex || R);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ct(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function dt(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function ht(t) {
                return st(function(e) {
                    return e = +e, st(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function pt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = rt.support = {}, o = rt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, h = rt.setDocument = function(t) {
                    var e, r, s = t ? t.ownerDocument || t : _;
                    return s !== p && 9 === s.nodeType && s.documentElement ? (f = (p = s).documentElement, g = !o(p), (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt)), i.attributes = at(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = at(function(t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = at(function(t) {
                        return f.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), i.getById ? (n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete n.find.ID, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                        return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
                    }, v = [], m = [], (i.qsa = Q.test(p.querySelectorAll)) && (at(function(t) {
                        f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + $ + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + $ + "*(?:value|" + A + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), at(function(t) {
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + $ + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
                        i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", F)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), x = e || Q.test(f.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, L = e ? function(t, e) {
                        if (t === e) return d = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === _ && x(_, t) ? -1 : e === p || e.ownerDocument === _ && x(_, e) ? 1 : c ? O(c, t) - O(c, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return d = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!r || !o) return t === p ? -1 : e === p ? 1 : r ? -1 : o ? 1 : c ? O(c, t) - O(c, e) : 0;
                        if (r === o) return ut(t, e);
                        for (i = t; i = i.parentNode;) s.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? ut(s[n], a[n]) : s[n] === _ ? -1 : a[n] === _ ? 1 : 0
                    }, p) : p
                }, rt.matches = function(t, e) {
                    return rt(t, null, null, e)
                }, rt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== p && h(t), e = e.replace(W, "='$1']"), i.matchesSelector && g && !P[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return rt(e, p, null, [t]).length > 0
                }, rt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== p && h(t), x(t, e)
                }, rt.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && h(t);
                    var r = n.attrHandle[e.toLowerCase()],
                        o = r && q.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                    return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, rt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, rt.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        o = 0;
                    if (d = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(L), d) {
                        for (; e = t[o++];) e === t[o] && (r = n.push(o));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return c = null, t
                }, r = rt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += r(e);
                    return i
                }, (n = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: X,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + $ + ")" + t + "(" + $ + "|$)")) && C(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(n) {
                                var r = rt.attr(n, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(I, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var u, c, d, h, p, f, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    x = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (h = e; h = h[g];)
                                                if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (x = (p = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === b && u[1]) && u[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (x = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++x && h === e) {
                                                c[t] = [b, p, x];
                                                break
                                            }
                                    } else if (y && (x = p = (u = (c = (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === b && u[1]), !1 === x)
                                        for (;
                                            (h = ++p && h && h[g] || (x = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++x || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [b, x]), h !== e)););
                                    return (x -= r) === n || x % n == 0 && x / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                            return r[w] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, i) {
                                for (var n, o = r(t, e), s = o.length; s--;) t[n = O(t, o[s])] = !(i[n] = o[s])
                            }) : function(t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: st(function(t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(z, "$1"));
                            return n[w] ? st(function(t, e, i, r) {
                                for (var o, s = n(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: st(function(t) {
                            return function(e) {
                                return rt(t, e).length > 0
                            }
                        }),
                        contains: st(function(t) {
                            return t = t.replace(et, it),
                                function(e) {
                                    return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                                }
                        }),
                        lang: st(function(t) {
                            return U.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === f
                        },
                        focus: function(t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function(t) {
                            return Y.test(t.nodeName)
                        },
                        input: function(t) {
                            return J.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ht(function() {
                            return [0]
                        }),
                        last: ht(function(t, e) {
                            return [e - 1]
                        }),
                        eq: ht(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: ht(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: ht(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: ht(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: ht(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = ct(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[e] = dt(e);

            function ft() {}

            function gt(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function mt(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = T++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, o)
                } : function(e, i, s) {
                    var a, l, u, c = [b, o];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if ((a = (l = (u = e[w] || (e[w] = {}))[e.uniqueID] || (u[e.uniqueID] = {}))[n]) && a[0] === b && a[1] === o) return c[2] = a[2];
                                if (l[n] = c, c[2] = t(e, i, s)) return !0
                            }
                }
            }

            function vt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function yt(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), u && e.push(a)));
                return s
            }

            function xt(t, e, i, n, r, o) {
                return n && !n[w] && (n = xt(n)), r && !r[w] && (r = xt(r, o)), st(function(o, s, a, l) {
                    var u, c, d, h = [],
                        p = [],
                        f = s.length,
                        g = o || function(t, e, i) {
                            for (var n = 0, r = e.length; r > n; n++) rt(t, e[n], i);
                            return i
                        }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !o && e ? g : yt(g, h, t, a, l),
                        v = i ? r || (o ? t : f || n) ? [] : s : m;
                    if (i && i(m, v, a, l), n)
                        for (u = yt(v, p), n(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(m[p[c]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                r(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(d = v[c]) && (u = r ? O(o, d) : h[c]) > -1 && (o[u] = !(s[u] = d))
                        }
                    } else v = yt(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, l) : E.apply(s, v)
                })
            }

            function wt(t) {
                for (var e, i, r, o = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, c = mt(function(t) {
                        return t === e
                    }, a, !0), d = mt(function(t) {
                        return O(e, t) > -1
                    }, a, !0), h = [function(t, i, n) {
                        var r = !s && (n || i !== u) || ((e = i).nodeType ? c(t, i, n) : d(t, i, n));
                        return e = null, r
                    }]; o > l; l++)
                    if (i = n.relative[t[l].type]) h = [mt(vt(h), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (r = ++l; o > r && !n.relative[t[r].type]; r++);
                            return xt(l > 1 && vt(h), l > 1 && gt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), i, r > l && wt(t.slice(l, r)), o > r && wt(t = t.slice(r)), o > r && gt(t))
                        }
                        h.push(i)
                    }
                return vt(h)
            }

            function _t(t, e) {
                var i = e.length > 0,
                    r = t.length > 0,
                    o = function(o, s, a, l, c) {
                        var d, f, m, v = 0,
                            y = "0",
                            x = o && [],
                            w = [],
                            _ = u,
                            T = o || r && n.find.TAG("*", c),
                            C = b += null == _ ? 1 : Math.random() || .1,
                            S = T.length;
                        for (c && (u = s === p || s || c); y !== S && null != (d = T[y]); y++) {
                            if (r && d) {
                                for (f = 0, s || d.ownerDocument === p || (h(d), a = !g); m = t[f++];)
                                    if (m(d, s || p, a)) {
                                        l.push(d);
                                        break
                                    }
                                c && (b = C)
                            }
                            i && ((d = !m && d) && v--, o && x.push(d))
                        }
                        if (v += y, i && y !== v) {
                            for (f = 0; m = e[f++];) m(x, w, s, a);
                            if (o) {
                                if (v > 0)
                                    for (; y--;) x[y] || w[y] || (w[y] = k.call(l));
                                w = yt(w)
                            }
                            E.apply(l, w), c && !o && w.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                        }
                        return c && (b = C, u = _), x
                    };
                return i ? st(o) : o
            }
            return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, s = rt.tokenize = function(t, e) {
                var i, r, o, s, a, l, u, c = S[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = n.preFilter; a;) {
                    for (s in i && !(r = H.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = B.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(z, " ")
                        }), a = a.slice(i.length)), n.filter) !(r = X[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? rt.error(t) : S(t, l).slice(0)
            }, a = rt.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = P[t + " "];
                if (!o) {
                    for (e || (e = s(t)), i = e.length; i--;)(o = wt(e[i]))[w] ? n.push(o) : r.push(o);
                    (o = P(t, _t(r, n))).selector = t
                }
                return o
            }, l = rt.select = function(t, e, r, o) {
                var l, u, c, d, h, p = "function" == typeof t && t,
                    f = !o && s(t = p.selector || t);
                if (r = r || [], 1 === f.length) {
                    if ((u = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && i.getById && 9 === e.nodeType && g && n.relative[u[1].type]) {
                        if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])) return r;
                        p && (e = e.parentNode), t = t.slice(u.shift().value.length)
                    }
                    for (l = X.needsContext.test(t) ? 0 : u.length; l-- && (c = u[l], !n.relative[d = c.type]);)
                        if ((h = n.find[d]) && (o = h(c.matches[0].replace(et, it), K.test(u[0].type) && pt(e.parentNode) || e))) {
                            if (u.splice(l, 1), !(t = o.length && gt(u))) return E.apply(r, o), r;
                            break
                        }
                }
                return (p || a(t, f))(o, e, !g, r, !e || K.test(t) && pt(e.parentNode) || e), r
            }, i.sortStable = w.split("").sort(L).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = at(function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("div"))
            }), at(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), i.attributes && at(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || lt("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), at(function(t) {
                return null == t.getAttribute("disabled")
            }) || lt(A, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), rt
        }(t);
        p.find = x, p.expr = x.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = x.uniqueSort, p.text = x.getText, p.isXMLDoc = x.isXML, p.contains = x.contains;
        var w = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && p(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            _ = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            b = p.expr.match.needsContext,
            T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            C = /^.[^:#\[\.,]*$/;

        function S(t, e, i) {
            if (p.isFunction(e)) return p.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return p.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (C.test(e)) return p.filter(e, t, i);
                e = p.filter(e, t)
            }
            return p.grep(t, function(t) {
                return a.call(e, t) > -1 !== i
            })
        }
        p.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, p.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (p.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) p.find(t, r[e], n);
                return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(S(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(S(this, t || [], !0))
            },
            is: function(t) {
                return !!S(this, "string" == typeof t && b.test(t) ? p(t) : t || [], !1).length
            }
        });
        var P, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function(t, e, i) {
            var r, o;
            if (!t) return this;
            if (i = i || P, "string" == typeof t) {
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), T.test(r[1]) && p.isPlainObject(e))
                        for (r in e) p.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return (o = n.getElementById(r[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = n, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
        }).prototype = p.fn, P = p(n);
        var R = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        p.fn.extend({
            has: function(t) {
                var e = p(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (p.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], s = b.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? a.call(p(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), p.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return w(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return w(t, "parentNode", i)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return w(t, "nextSibling")
            },
            prevAll: function(t) {
                return w(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return w(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return w(t, "previousSibling", i)
            },
            siblings: function(t) {
                return _((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || p.merge([], t.childNodes)
            }
        }, function(t, e) {
            p.fn[t] = function(i, n) {
                var r = p.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = p.filter(n, r)), this.length > 1 && (q[t] || p.uniqueSort(r), R.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var k, j = /\S+/g;

        function E() {
            n.removeEventListener("DOMContentLoaded", E), t.removeEventListener("load", E), p.ready()
        }
        p.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return p.each(t.match(j) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : p.extend({}, t);
            var e, i, n, r, o = [],
                s = [],
                a = -1,
                l = function() {
                    for (r = t.once, n = e = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                            p.each(i, function(i, n) {
                                p.isFunction(n) ? t.unique && u.has(n) || o.push(n) : n && n.length && "string" !== p.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return p.each(arguments, function(t, e) {
                            for (var i;
                                (i = p.inArray(e, o, i)) > -1;) o.splice(i, 1), a >= i && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? p.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = i = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = s = [], i || (o = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, p.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return p.Deferred(function(i) {
                                p.each(e, function(e, o) {
                                    var s = p.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && p.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? p.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, p.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    n[o[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, o = 0,
                    s = r.call(arguments),
                    a = s.length,
                    l = 1 !== a || t && p.isFunction(t.promise) ? a : 0,
                    u = 1 === l ? t : p.Deferred(),
                    c = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? r.call(arguments) : o, n === e ? u.notifyWith(i, n) : --l || u.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > o; o++) s[o] && p.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, e)).done(c(o, n, s)).fail(u.reject) : --l;
                return l || u.resolveWith(n, s), u.promise()
            }
        }), p.fn.ready = function(t) {
            return p.ready.promise().done(t), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? p.readyWait++ : p.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== t && --p.readyWait > 0 || (k.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready"))))
            }
        }), p.ready.promise = function(e) {
            return k || (k = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(p.ready) : (n.addEventListener("DOMContentLoaded", E), t.addEventListener("load", E))), k.promise(e)
        }, p.ready.promise();
        var N = function(t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == i;
                if ("object" === p.type(i))
                    for (a in r = !0, i) N(t, e, a, i[a], !0, o, s);
                else if (void 0 !== n && (r = !0, p.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                        return u.call(p(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : u ? e.call(t) : l ? e(t[0], i) : o
            },
            O = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

        function A() {
            this.expando = p.expando + A.uid++
        }
        A.uid = 1, A.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!O(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, O(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, p.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        p.isArray(e) ? n = e.concat(e.map(p.camelCase)) : (r = p.camelCase(e), e in o ? n = [e, r] : n = (n = r) in o ? [n] : n.match(j) || []), i = n.length;
                        for (; i--;) delete o[n[i]]
                    }(void 0 === e || p.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !p.isEmptyObject(e)
            }
        };
        var $ = new A,
            G = new A,
            M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            F = /[A-Z]/g;

        function I(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(F, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : M.test(i) ? p.parseJSON(i) : i)
                    } catch (t) {}
                    G.set(t, e, i)
                } else i = void 0;
            return i
        }
        p.extend({
            hasData: function(t) {
                return G.hasData(t) || $.hasData(t)
            },
            data: function(t, e, i) {
                return G.access(t, e, i)
            },
            removeData: function(t, e) {
                G.remove(t, e)
            },
            _data: function(t, e, i) {
                return $.access(t, e, i)
            },
            _removeData: function(t, e) {
                $.remove(t, e)
            }
        }), p.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = G.get(o), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), I(o, n, r[n])));
                        $.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    G.set(this, t)
                }) : N(this, function(e) {
                    var i, n;
                    if (o && void 0 === e) {
                        if (void 0 !== (i = G.get(o, t) || G.get(o, t.replace(F, "-$&").toLowerCase()))) return i;
                        if (n = p.camelCase(t), void 0 !== (i = G.get(o, n))) return i;
                        if (void 0 !== (i = I(o, n, void 0))) return i
                    } else n = p.camelCase(t), this.each(function() {
                        var i = G.get(this, n);
                        G.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && G.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    G.remove(this, t)
                })
            }
        }), p.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = $.get(t, e), i && (!n || p.isArray(i) ? n = $.access(t, e, p.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = p.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = p._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, function() {
                    p.dequeue(t, e)
                }, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return $.get(t, i) || $.access(t, i, {
                    empty: p.Callbacks("once memory").add(function() {
                        $.remove(t, [e + "queue", i])
                    })
                })
            }
        }), p.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = p.queue(this, t, e);
                    p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    p.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = p.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = $.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            H = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
            B = ["Top", "Right", "Bottom", "Left"],
            W = function(t, e) {
                return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
            };

        function V(t, e, i, n) {
            var r, o = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return p.css(t, e, "")
                },
                l = a(),
                u = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                c = (p.cssNumber[e] || "px" !== u && +l) && H.exec(p.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], i = i || [], c = +l || 1;
                do {
                    c /= o = o || ".5", p.style(t, e, c + u)
                } while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
        }
        var U = /^(?:checkbox|radio)$/i,
            X = /<([\w:-]+)/,
            J = /^$|\/(?:java|ecma)script/i,
            Y = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function Q(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], i) : i
        }

        function Z(t, e) {
            for (var i = 0, n = t.length; n > i; i++) $.set(t[i], "globalEval", !e || $.get(e[i], "globalEval"))
        }
        Y.optgroup = Y.option, Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead, Y.th = Y.td;
        var K = /<|&#?\w+;/;

        function tt(t, e, i, n, r) {
            for (var o, s, a, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, g = t.length; g > f; f++)
                if ((o = t[f]) || 0 === o)
                    if ("object" === p.type(o)) p.merge(h, o.nodeType ? [o] : o);
                    else if (K.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (X.exec(o) || ["", ""])[1].toLowerCase(), l = Y[a] || Y._default, s.innerHTML = l[1] + p.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                p.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(o));
            for (d.textContent = "", f = 0; o = h[f++];)
                if (n && p.inArray(o, n) > -1) r && r.push(o);
                else if (u = p.contains(o.ownerDocument, o), s = Q(d.appendChild(o), "script"), u && Z(s), i)
                for (c = 0; o = s[c++];) J.test(o.type || "") && i.push(o);
            return d
        }! function() {
            var t = n.createDocumentFragment().appendChild(n.createElement("div")),
                e = n.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var et = /^key/,
            it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function ot() {
            return !1
        }

        function st() {
            try {
                return n.activeElement
            } catch (t) {}
        }

        function at(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) at(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = ot;
            else if (!r) return t;
            return 1 === o && (s = r, (r = function(t) {
                return p().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = p.guid++)), t.each(function() {
                p.event.add(this, e, r, n, i)
            })
        }
        p.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, u, c, d, h, f, g, m, v = $.get(t);
                if (v)
                    for (i.handler && (i = (o = i).handler, r = o.selector), i.guid || (i.guid = p.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                            return void 0 !== p && p.event.triggered !== e.type ? p.event.dispatch.apply(t, arguments) : void 0
                        }), u = (e = (e || "").match(j) || [""]).length; u--;) f = m = (a = nt.exec(e[u]) || [])[1], g = (a[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, c = p.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && p.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, g, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, u, c, d, h, f, g, m, v = $.hasData(t) && $.get(t);
                if (v && (l = v.events)) {
                    for (u = (e = (e || "").match(j) || [""]).length; u--;)
                        if (f = m = (a = nt.exec(e[u]) || [])[1], g = (a[2] || "").split(".").sort(), f) {
                            for (d = p.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, g, v.handle) || p.removeEvent(t, f, v.handle), delete l[f])
                        } else
                            for (f in l) p.event.remove(t, f + e[u], i, n, !0);
                    p.isEmptyObject(l) && $.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = p.event.fix(t);
                var e, i, n, o, s, a = [],
                    l = r.call(arguments),
                    u = ($.get(this, "events") || {})[t.type] || [],
                    c = p.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (a = p.event.handlers.call(this, t, u), e = 0;
                        (o = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((p.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) void 0 === n[r = (o = e[i]).selector + " "] && (n[r] = o.needsContext ? p(r, this).index(l) > -1 : p.find(r, this, null, [l]).length), n[r] && n.push(o);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, r, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || n).documentElement, o = i.body, t.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[p.expando]) return t;
                var e, i, r, o = t.type,
                    s = t,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = it.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new p.Event(s), e = r.length; e--;) t[i = r[e]] = s[i];
                return t.target || (t.target = n), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== st() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === st() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return p.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, p.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, p.Event = function(t, e) {
            return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : ot) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e)
        }, p.Event.prototype = {
            constructor: p.Event,
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = rt, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = rt, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = rt, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            p.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        r = t.handleObj;
                    return n && (n === this || p.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), p.fn.extend({
            on: function(t, e, i, n) {
                return at(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return at(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = ot), this.each(function() {
                    p.event.remove(this, t, i, e)
                })
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ut = /<script|<style|<link/i,
            ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dt = /^true\/(.*)/,
            ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function pt(t, e) {
            return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function ft(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function gt(t) {
            var e = dt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function mt(t, e) {
            var i, n, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if ($.hasData(t) && (o = $.access(t), s = $.set(e, o), u = o.events))
                    for (r in delete s.handle, s.events = {}, u)
                        for (i = 0, n = u[r].length; n > i; i++) p.event.add(e, r, u[r][i]);
                G.hasData(t) && (a = G.access(t), l = p.extend({}, a), G.set(e, l))
            }
        }

        function vt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && U.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function yt(t, e, i, n) {
            e = o.apply([], e);
            var r, s, a, l, u, c, h = 0,
                f = t.length,
                g = f - 1,
                m = e[0],
                v = p.isFunction(m);
            if (v || f > 1 && "string" == typeof m && !d.checkClone && ct.test(m)) return t.each(function(r) {
                var o = t.eq(r);
                v && (e[0] = m.call(this, r, o.html())), yt(o, e, i, n)
            });
            if (f && (s = (r = tt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                for (l = (a = p.map(Q(r, "script"), ft)).length; f > h; h++) u = r, h !== g && (u = p.clone(u, !0, !0), l && p.merge(a, Q(u, "script"))), i.call(t[h], u, h);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, p.map(a, gt), h = 0; l > h; h++) u = a[h], J.test(u.type || "") && !$.access(u, "globalEval") && p.contains(c, u) && (u.src ? p._evalUrl && p._evalUrl(u.src) : p.globalEval(u.textContent.replace(ht, "")))
            }
            return t
        }

        function xt(t, e, i) {
            for (var n, r = e ? p.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || p.cleanData(Q(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && Z(Q(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        p.extend({
            htmlPrefilter: function(t) {
                return t.replace(lt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = p.contains(t.ownerDocument, t);
                if (!(d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
                    for (s = Q(a), n = 0, r = (o = Q(t)).length; r > n; n++) vt(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || Q(t), s = s || Q(a), n = 0, r = o.length; r > n; n++) mt(o[n], s[n]);
                    else mt(t, a);
                return (s = Q(a, "script")).length > 0 && Z(s, !l && Q(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = p.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (O(i)) {
                        if (e = i[$.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
                            i[$.expando] = void 0
                        }
                        i[G.expando] && (i[G.expando] = void 0)
                    }
            }
        }), p.fn.extend({
            domManip: yt,
            detach: function(t) {
                return xt(this, t, !0)
            },
            remove: function(t) {
                return xt(this, t)
            },
            text: function(t) {
                return N(this, function(t) {
                    return void 0 === t ? p.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return yt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return yt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = pt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (p.cleanData(Q(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return p.clone(this, t, e)
                })
            },
            html: function(t) {
                return N(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ut.test(t) && !Y[(X.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = p.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(Q(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return yt(this, arguments, function(e) {
                    var i = this.parentNode;
                    p.inArray(this, t) < 0 && (p.cleanData(Q(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            p.fn[t] = function(t) {
                for (var i, n = [], r = p(t), o = r.length - 1, a = 0; o >= a; a++) i = a === o ? this : this.clone(!0), p(r[a])[e](i), s.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var wt, _t = {
            HTML: "block",
            BODY: "block"
        };

        function bt(t, e) {
            var i = p(e.createElement(t)).appendTo(e.body),
                n = p.css(i[0], "display");
            return i.detach(), n
        }

        function Tt(t) {
            var e = n,
                i = _t[t];
            return i || ("none" !== (i = bt(t, e)) && i || ((e = (wt = (wt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = bt(t, e), wt.detach()), _t[t] = i), i
        }
        var Ct = /^margin/,
            St = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
            Pt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Lt = function(t, e, i, n) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                for (o in r = i.apply(t, n || []), e) t.style[o] = s[o];
                return r
            },
            Rt = n.documentElement;

        function qt(t, e, i) {
            var n, r, o, s, a = t.style;
            return "" !== (s = (i = i || Pt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== s || p.contains(t.ownerDocument, t) || (s = p.style(t, e)), i && !d.pixelMarginRight() && St.test(s) && Ct.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function Dt(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }! function() {
            var e, i, r, o, s = n.createElement("div"),
                a = n.createElement("div");
            if (a.style) {
                function l() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Rt.appendChild(s);
                    var n = t.getComputedStyle(a);
                    e = "1%" !== n.top, o = "2px" === n.marginLeft, i = "4px" === n.width, a.style.marginRight = "50%", r = "4px" === n.marginRight, Rt.removeChild(s)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), p.extend(d, {
                    pixelPosition: function() {
                        return l(), e
                    },
                    boxSizingReliable: function() {
                        return null == i && l(), i
                    },
                    pixelMarginRight: function() {
                        return null == i && l(), r
                    },
                    reliableMarginLeft: function() {
                        return null == i && l(), o
                    },
                    reliableMarginRight: function() {
                        var e, i = a.appendChild(n.createElement("div"));
                        return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Rt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Rt.removeChild(s), a.removeChild(i), e
                    }
                })
            }
        }();
        var kt = /^(none|table(?!-c[ea]).+)/,
            jt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Et = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Nt = ["Webkit", "O", "Moz", "ms"],
            Ot = n.createElement("div").style;

        function At(t) {
            if (t in Ot) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Nt.length; i--;)
                if ((t = Nt[i] + e) in Ot) return t
        }

        function $t(t, e, i) {
            var n = H.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Gt(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += p.css(t, i + B[o], !0, r)), n ? ("content" === i && (s -= p.css(t, "padding" + B[o], !0, r)), "margin" !== i && (s -= p.css(t, "border" + B[o] + "Width", !0, r))) : (s += p.css(t, "padding" + B[o], !0, r), "padding" !== i && (s += p.css(t, "border" + B[o] + "Width", !0, r)));
            return s
        }

        function Mt(e, i, r) {
            var o = !0,
                s = "width" === i ? e.offsetWidth : e.offsetHeight,
                a = Pt(e),
                l = "border-box" === p.css(e, "boxSizing", !1, a);
            if (n.msFullscreenElement && t.top !== t && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= s || null == s) {
                if ((0 > (s = qt(e, i, a)) || null == s) && (s = e.style[i]), St.test(s)) return s;
                o = l && (d.boxSizingReliable() || s === e.style[i]), s = parseFloat(s) || 0
            }
            return s + Gt(e, i, r || (l ? "border" : "content"), o, a) + "px"
        }

        function Ft(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)(n = t[s]).style && (o[s] = $.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && W(n) && (o[s] = $.access(n, "olddisplay", Tt(n.nodeName)))) : (r = W(n), "none" === i && r || $.set(n, "olddisplay", r ? i : p.css(n, "display"))));
            for (s = 0; a > s; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function It(t, e, i, n, r) {
            return new It.prototype.init(t, e, i, n, r)
        }
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = qt(t, "opacity");
                            return "" === i ? "1" : i
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
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = p.camelCase(e),
                        l = t.style;
                    return e = p.cssProps[a] || (p.cssProps[a] = At(a) || a), s = p.cssHooks[e] || p.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : ("string" === (o = typeof i) && (r = H.exec(i)) && r[1] && (i = V(t, e, r), o = "number"), void(null != i && i == i && ("number" === o && (i += r && r[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = p.camelCase(e);
                return e = p.cssProps[a] || (p.cssProps[a] = At(a) || a), (s = p.cssHooks[e] || p.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = qt(t, e, n)), "normal" === r && e in Et && (r = Et[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
            }
        }), p.each(["height", "width"], function(t, e) {
            p.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? kt.test(p.css(t, "display")) && 0 === t.offsetWidth ? Lt(t, jt, function() {
                        return Mt(t, e, n)
                    }) : Mt(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r, o = n && Pt(t),
                        s = n && Gt(t, e, n, "border-box" === p.css(t, "boxSizing", !1, o), o);
                    return s && (r = H.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = p.css(t, e)), $t(0, i, s)
                }
            }
        }), p.cssHooks.marginLeft = Dt(d.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - Lt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), p.cssHooks.marginRight = Dt(d.reliableMarginRight, function(t, e) {
            return e ? Lt(t, {
                display: "inline-block"
            }, qt, [t, "marginRight"]) : void 0
        }), p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            p.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + B[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, Ct.test(t) || (p.cssHooks[t + e].set = $t)
        }), p.fn.extend({
            css: function(t, e) {
                return N(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (p.isArray(e)) {
                        for (n = Pt(t), r = e.length; r > s; s++) o[e[s]] = p.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return Ft(this, !0)
            },
            hide: function() {
                return Ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    W(this) ? p(this).show() : p(this).hide()
                })
            }
        }), p.Tween = It, It.prototype = {
            constructor: It,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || p.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (p.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = It.propHooks[this.prop];
                return t && t.get ? t.get(this) : It.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = It.propHooks[this.prop];
                return this.options.duration ? this.pos = e = p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : It.propHooks._default.set(this), this
            }
        }, It.prototype.init.prototype = It.prototype, It.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    p.fx.step[t.prop] ? p.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop] ? t.elem[t.prop] = t.now : p.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, It.propHooks.scrollTop = It.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, p.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, p.fx = It.prototype.init, p.fx.step = {};
        var zt, Ht, Bt = /^(?:toggle|show|hide)$/,
            Wt = /queueHooks$/;

        function Vt() {
            return t.setTimeout(function() {
                zt = void 0
            }), zt = p.now()
        }

        function Ut(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) r["margin" + (i = B[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function Xt(t, e, i) {
            for (var n, r = (Jt.tweeners[e] || []).concat(Jt.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function Jt(t, e, i) {
            var n, r, o = 0,
                s = Jt.prefilters.length,
                a = p.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = zt || Vt(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), o = 0, s = u.tweens.length; s > o; o++) u.tweens[o].run(n);
                    return a.notifyWith(t, [u, n, i]), 1 > n && s ? i : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: p.extend({}, e),
                    opts: p.extend(!0, {
                        specialEasing: {},
                        easing: p.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: zt || Vt(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = p.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (function(t, e) {
                    var i, n, r, o, s;
                    for (i in t)
                        if (r = e[n = p.camelCase(i)], o = t[i], p.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (s = p.cssHooks[n]) && "expand" in s)
                            for (i in o = s.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = r);
                        else e[n] = r
                }(c, u.opts.specialEasing); s > o; o++)
                if (n = Jt.prefilters[o].call(u, t, c, u.opts)) return p.isFunction(n.stop) && (p._queueHooks(u.elem, u.opts.queue).stop = p.proxy(n.stop, n)), n;
            return p.map(c, Xt, u), p.isFunction(u.opts.start) && u.opts.start.call(t, u), p.fx.timer(p.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        p.Animation = p.extend(Jt, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return V(i.elem, t, H.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    p.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(j);
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], Jt.tweeners[i] = Jt.tweeners[i] || [], Jt.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, r, o, s, a, l, u, c = this,
                        d = {},
                        h = t.style,
                        f = t.nodeType && W(t),
                        g = $.get(t, "fxshow");
                    for (n in i.queue || (null == (a = p._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || l()
                        }), a.unqueued++, c.always(function() {
                            c.always(function() {
                                a.unqueued--, p.queue(t, "fx").length || a.empty.fire()
                            })
                        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = p.css(t, "display")) ? $.get(t, "olddisplay") || Tt(t.nodeName) : u) && "none" === p.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", c.always(function() {
                            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                        })), e)
                        if (r = e[n], Bt.exec(r)) {
                            if (delete e[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                f = !0
                            }
                            d[n] = g && g[n] || p.style(t, n)
                        } else u = void 0;
                    if (p.isEmptyObject(d)) "inline" === ("none" === u ? Tt(t.nodeName) : u) && (h.display = u);
                    else
                        for (n in g ? "hidden" in g && (f = g.hidden) : g = $.access(t, "fxshow", {}), o && (g.hidden = !f), f ? p(t).show() : c.done(function() {
                                p(t).hide()
                            }), c.done(function() {
                                var e;
                                for (e in $.remove(t, "fxshow"), d) p.style(t, e, d[e])
                            }), d) s = Xt(f ? g[n] : 0, n, c), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
                }],
                prefilter: function(t, e) {
                    e ? Jt.prefilters.unshift(t) : Jt.prefilters.push(t)
                }
            }), p.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? p.extend({}, t) : {
                    complete: i || !i && e || p.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !p.isFunction(e) && e
                };
                return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
                }, n
            }, p.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(W).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = p.isEmptyObject(t),
                        o = p.speed(e, i, n),
                        s = function() {
                            var e = Jt(this, p.extend({}, t), o);
                            (r || $.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = p.timers,
                            s = $.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && Wt.test(r) && n(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                        !e && i || p.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = $.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            o = p.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, p.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), p.each(["toggle", "show", "hide"], function(t, e) {
                var i = p.fn[e];
                p.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Ut(e, !0), t, n, r)
                }
            }), p.each({
                slideDown: Ut("show"),
                slideUp: Ut("hide"),
                slideToggle: Ut("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                p.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), p.timers = [], p.fx.tick = function() {
                var t, e = 0,
                    i = p.timers;
                for (zt = p.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || p.fx.stop(), zt = void 0
            }, p.fx.timer = function(t) {
                p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
            }, p.fx.interval = 13, p.fx.start = function() {
                Ht || (Ht = t.setInterval(p.fx.tick, p.fx.interval))
            }, p.fx.stop = function() {
                t.clearInterval(Ht), Ht = null
            }, p.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, p.fn.delay = function(e, i) {
                return e = p.fx && p.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                    var r = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = n.createElement("input"),
                    e = n.createElement("select"),
                    i = e.appendChild(n.createElement("option"));
                t.type = "checkbox", d.checkOn = "" !== t.value, d.optSelected = i.selected, e.disabled = !0, d.optDisabled = !i.disabled, (t = n.createElement("input")).value = "t", t.type = "radio", d.radioValue = "t" === t.value
            }();
        var Yt, Qt = p.expr.attrHandle;
        p.fn.extend({
            attr: function(t, e) {
                return N(this, p.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    p.removeAttr(this, t)
                })
            }
        }), p.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? p.prop(t, e, i) : (1 === o && p.isXMLDoc(t) || (e = e.toLowerCase(), r = p.attrHooks[e] || (p.expr.match.bool.test(e) ? Yt : void 0)), void 0 !== i ? null === i ? void p.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = p.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!d.radioValue && "radio" === e && p.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(j);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), Yt = {
            set: function(t, e, i) {
                return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = Qt[e] || p.find.attr;
            Qt[e] = function(t, e, n) {
                var r, o;
                return n || (o = Qt[e], Qt[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Qt[e] = o), r
            }
        });
        var Zt = /^(?:input|select|textarea|button)$/i,
            Kt = /^(?:a|area)$/i;
        p.fn.extend({
            prop: function(t, e) {
                return N(this, p.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[p.propFix[t] || t]
                })
            }
        }), p.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && p.isXMLDoc(t) || (e = p.propFix[e] || e, r = p.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = p.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Zt.test(t.nodeName) || Kt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), d.optSelected || (p.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            p.propFix[this.toLowerCase()] = this
        });
        var te = /[\t\r\n\f]/g;

        function ee(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        p.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (p.isFunction(t)) return this.each(function(e) {
                    p(this).addClass(t.call(this, e, ee(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(j) || []; i = this[l++];)
                        if (r = ee(i), n = 1 === i.nodeType && (" " + r + " ").replace(te, " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r !== (a = p.trim(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (p.isFunction(t)) return this.each(function(e) {
                    p(this).removeClass(t.call(this, e, ee(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(j) || []; i = this[l++];)
                        if (r = ee(i), n = 1 === i.nodeType && (" " + r + " ").replace(te, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            r !== (a = p.trim(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : p.isFunction(t) ? this.each(function(i) {
                    p(this).toggleClass(t.call(this, i, ee(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i)
                        for (n = 0, r = p(this), o = t.match(j) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ee(this)) && $.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : $.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + ee(i) + " ").replace(te, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ie = /\r/g,
            ne = /[\x20\t\r\n\f]+/g;
        p.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, p(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : p.isArray(r) && (r = p.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = p.valHooks[r.type] || p.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(ie, "") : null == i ? "" : i : void 0
            }
        }), p.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = p.find.attr(t, "value");
                        return null != e ? e : p.trim(p.text(t)).replace(ne, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (((i = n[l]).selected || l === r) && (d.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
                                if (e = p(i).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = p.makeArray(e), s = r.length; s--;)((n = r[s]).selected = p.inArray(p.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = {
                set: function(t, e) {
                    return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) > -1 : void 0
                }
            }, d.checkOn || (p.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var re = /^(?:focusinfocus|focusoutblur)$/;
        p.extend(p.event, {
            trigger: function(e, i, r, o) {
                var s, a, l, u, d, h, f, g = [r || n],
                    m = c.call(e, "type") ? e.type : e,
                    v = c.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !re.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[p.expando] ? e : new p.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), i = null == i ? [e] : p.makeArray(i, [e]), f = p.event.special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, i))) {
                    if (!o && !f.noBubble && !p.isWindow(r)) {
                        for (u = f.delegateType || m, re.test(u + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (r.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || t)
                    }
                    for (s = 0;
                        (a = g[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? u : f.bindType || m, (h = ($.get(a, "events") || {})[e.type] && $.get(a, "handle")) && h.apply(a, i), (h = d && a[d]) && h.apply && O(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), i) || !O(r) || d && p.isFunction(r[m]) && !p.isWindow(r) && ((l = r[d]) && (r[d] = null), p.event.triggered = m, r[m](), p.event.triggered = void 0, l && (r[d] = l)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = p.extend(new p.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                p.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
            }
        }), p.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    p.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? p.event.trigger(t, e, i, !0) : void 0
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            p.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), p.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), d.focusin = "onfocusin" in t, d.focusin || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                p.event.simulate(e, t.target, p.event.fix(t))
            };
            p.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = $.access(n, e);
                    r || n.addEventListener(t, i, !0), $.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = $.access(n, e) - 1;
                    r ? $.access(n, e, r) : (n.removeEventListener(t, i, !0), $.remove(n, e))
                }
            }
        });
        var oe = t.location,
            se = p.now(),
            ae = /\?/;
        p.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, p.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), i
        };
        var le = /#.*$/,
            ue = /([?&])_=[^&]*/,
            ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:GET|HEAD)$/,
            he = /^\/\//,
            pe = {},
            fe = {},
            ge = "*/".concat("*"),
            me = n.createElement("a");

        function ve(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(j) || [];
                if (p.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function ye(t, e, i, n) {
            var r = {},
                o = t === fe;

            function s(a) {
                var l;
                return r[a] = !0, p.each(t[a] || [], function(t, a) {
                    var u = a(e, i, n);
                    return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
                }), l
            }
            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }

        function xe(t, e) {
            var i, n, r = p.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && p.extend(!0, t, n), t
        }
        me.href = oe.href, p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: oe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(oe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ge,
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
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? xe(xe(t, p.ajaxSettings), e) : xe(p.ajaxSettings, t)
            },
            ajaxPrefilter: ve(pe),
            ajaxTransport: ve(fe),
            ajax: function(e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var r, o, s, a, l, u, c, d, h = p.ajaxSetup({}, i),
                    f = h.context || h,
                    g = h.context && (f.nodeType || f.jquery) ? p(f) : p.event,
                    m = p.Deferred(),
                    v = p.Callbacks("once memory"),
                    y = h.statusCode || {},
                    x = {},
                    w = {},
                    _ = 0,
                    b = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === _) {
                                if (!a)
                                    for (a = {}; e = ce.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return _ || (t = w[i] = w[i] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return _ || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > _)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return r && r.abort(e), C(0, e), this
                        }
                    };
                if (m.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, h.url = ((e || h.url || oe.href) + "").replace(le, "").replace(he, oe.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(j) || [""], null == h.crossDomain) {
                    u = n.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = me.protocol + "//" + me.host != u.protocol + "//" + u.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), ye(pe, h, i, T), 2 === _) return T;
                for (d in (c = p.event && h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !de.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ae.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = ue.test(o) ? o.replace(ue, "$1_=" + se++) : o + (ae.test(o) ? "&" : "?") + "_=" + se++)), h.ifModified && (p.lastModified[o] && T.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && T.setRequestHeader("If-None-Match", p.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, T, h) || 2 === _)) return T.abort();
                for (d in b = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[d](h[d]);
                if (r = ye(fe, h, i, T)) {
                    if (T.readyState = 1, c && g.trigger("ajaxSend", [T, h]), 2 === _) return T;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = 1, r.send(x, C)
                    } catch (t) {
                        if (!(2 > _)) throw t;
                        C(-1, t)
                    }
                } else C(-1, "No Transport");

                function C(e, i, n, a) {
                    var u, d, x, w, b, C = i;
                    2 !== _ && (_ = 2, l && t.clearTimeout(l), r = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (w = function(t, e, i) {
                        for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (r in a)
                                if (a[r] && a[r].test(n)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0] in i) o = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
                    }(h, T, n)), w = function(t, e, i, n) {
                        var r, o, s, a, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                        for (o = c.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                                for (r in u)
                                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(h, w, T, u), u ? (h.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (p.lastModified[o] = b), (b = T.getResponseHeader("etag")) && (p.etag[o] = b)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, d = w.data, u = !(x = w.error))) : (x = C, !e && C || (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (i || C) + "", u ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, x]), T.statusCode(y), y = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? d : x]), v.fireWith(f, [T, C]), c && (g.trigger("ajaxComplete", [T, h]), --p.active || p.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(t, e, i) {
                return p.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return p.get(t, void 0, e, "script")
            }
        }), p.each(["get", "post"], function(t, e) {
            p[e] = function(t, i, n, r) {
                return p.isFunction(i) && (r = r || n, n = i, i = void 0), p.ajax(p.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, p.isPlainObject(t) && t))
            }
        }), p._evalUrl = function(t) {
            return p.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, p.fn.extend({
            wrapAll: function(t) {
                var e;
                return p.isFunction(t) ? this.each(function(e) {
                    p(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = p(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return p.isFunction(t) ? this.each(function(e) {
                    p(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = p(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = p.isFunction(t);
                return this.each(function(i) {
                    p(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            }
        }), p.expr.filters.hidden = function(t) {
            return !p.expr.filters.visible(t)
        }, p.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var we = /%20/g,
            _e = /\[\]$/,
            be = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            Ce = /^(?:input|select|textarea|keygen)/i;

        function Se(t, e, i, n) {
            var r;
            if (p.isArray(e)) p.each(e, function(e, r) {
                i || _e.test(t) ? n(t, r) : Se(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== p.type(e)) n(t, e);
            else
                for (r in e) Se(t + "[" + r + "]", e[r], i, n)
        }
        p.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) Se(i, t[i], e, r);
            return n.join("&").replace(we, "+")
        }, p.fn.extend({
            serialize: function() {
                return p.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = p.prop(this, "elements");
                    return t ? p.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !p(this).is(":disabled") && Ce.test(this.nodeName) && !Te.test(t) && (this.checked || !U.test(t))
                }).map(function(t, e) {
                    var i = p(this).val();
                    return null == i ? null : p.isArray(i) ? p.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(be, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(be, "\r\n")
                    }
                }).get()
            }
        }), p.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Pe = {
                0: 200,
                1223: 204
            },
            Le = p.ajaxSettings.xhr();
        d.cors = !!Le && "withCredentials" in Le, d.ajax = Le = !!Le, p.ajaxTransport(function(e) {
            var i, n;
            return d.cors || Le && !e.crossDomain ? {
                send: function(r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Pe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return p.globalEval(t), t
                }
            }
        }), p.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), p.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain) return {
                send: function(r, o) {
                    e = p("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), n.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Re = [],
            qe = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Re.pop() || p.expando + "_" + se++;
                return this[t] = !0, t
            }
        }), p.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = !1 !== e.jsonp && (qe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qe, "$1" + r) : !1 !== e.jsonp && (e.url += (ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || p.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === o ? p(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Re.push(r)), s && p.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), p.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || n;
            var r = T.exec(t),
                o = !i && [];
            return r ? [e.createElement(r[1])] : (r = tt([t], e, o), o && o.length && p(o).remove(), p.merge([], r.childNodes))
        };
        var De = p.fn.load;

        function ke(t) {
            return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        p.fn.load = function(t, e, i) {
            if ("string" != typeof t && De) return De.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = p.trim(t.slice(a)), t = t.slice(0, a)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && p.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            p.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), p.expr.filters.animated = function(t) {
            return p.grep(p.timers, function(e) {
                return t === e.elem
            }).length
        }, p.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, u = p.css(t, "position"),
                    c = p(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), o = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (n = c.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, p.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
            }
        }, p.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    p.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                return o ? (e = o.documentElement, p.contains(e, n) ? (r = n.getBoundingClientRect(), i = ke(o), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === p.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (n = t.offset()), n.top += p.css(t[0], "borderTopWidth", !0), n.left += p.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - p.css(i, "marginTop", !0),
                        left: e.left - n.left - p.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === p.css(t, "position");) t = t.offsetParent;
                    return t || Rt
                })
            }
        }), p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            p.fn[t] = function(n) {
                return N(this, function(t, n, r) {
                    var o = ke(t);
                    return void 0 === r ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }), p.each(["top", "left"], function(t, e) {
            p.cssHooks[e] = Dt(d.pixelPosition, function(t, i) {
                return i ? (i = qt(t, e), St.test(i) ? p(t).position()[e] + "px" : i) : void 0
            })
        }), p.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            p.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                p.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (!0 === n || !0 === r ? "margin" : "border");
                    return N(this, function(e, i, n) {
                        var r;
                        return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? p.css(e, i, s) : p.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), p.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return p
        });
        var je = t.jQuery,
            Ee = t.$;
        return p.noConflict = function(e) {
            return t.$ === p && (t.$ = Ee), e && t.jQuery === p && (t.jQuery = je), p
        }, e || (t.jQuery = t.$ = p), p
    }),
    function(t, e, i, n) {
        function r(e, i) {
            this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(r.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(r.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(r), t.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = r ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    r = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    s = n.loop && i.length ? n.rewind ? r : Math.max(r, o) : 0,
                    a = "",
                    l = "";
                for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, o = []; ++i < e;) n = o[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, o.push(n + r * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], r.prototype.initialize = function() {
            var e, i, r;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, r = this.$element.children(i).width(), e.length && r <= 0 && this.preloadAutoWidthImages(e));
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                r = null;
            i ? (t.each(i, function(t) {
                t <= e && t > n && (n = Number(t))
            }), "function" == typeof(r = t.extend({}, this.options, i[n])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, r.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), r = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(r), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function(t) {
            switch (t = t || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, r.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? n = {
                x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            } : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, r.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, r.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                r = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function(e, i) {
            var n = -1,
                r = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
                return "left" === i && e > s - 30 && e < s + 30 ? n = t : "right" === i && e > s - r - 30 && e < s - r + 30 ? n = t + 1 : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - r) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
        }, r.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, r.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, r.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, r.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, r.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function(t, e) {
            var i = this._items.length,
                r = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + r) && (t = ((t - r / 2) % i + i) % i + r / 2), t
        }, r.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, r.prototype.maximum = function(t) {
            var e, i, n, r = this.settings,
                o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                o = e + 1
            } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, r.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, r.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, r.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, r.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                r = i + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? r + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null
            })
        }, r.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, r.prototype.coordinates = function(e) {
            var i, r = 1,
                o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * r) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, r.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, r.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                r = t - this.relative(i),
                o = (r > 0) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (n = (((t = i + r) - a) % s + s) % s + a) !== t && n - r <= l && n - r > 0 && (i = n - r, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, r.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, r.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, r.prototype.onTransitionEnd = function(t) {
            if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, r.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function(e, i) {
            var r = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, r.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, r.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, r.prototype.destroy = function() {
            for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : t < i;
                case ">":
                    return n ? t < i : t > i;
                case ">=":
                    return n ? t <= i : t >= i;
                case "<=":
                    return n ? t >= i : t <= i
            }
        }, r.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, r.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, r.prototype.trigger = function(e, i, n, o, s) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                u = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(u)
            }), this.register({
                type: r.Type.Event,
                name: e
            }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
        }, r.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, r.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, r.prototype.register = function(e) {
            if (e.type === r.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, r.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, r.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, r.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, r.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, r.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.gFOwlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new r(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    o.register({
                        type: r.Type.Event,
                        name: i
                    }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, o))
                })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            })
        }, t.fn.gFOwlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var t, i;
            for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && -1 * n || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r, s = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); r++ < n;) this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o)), a), o++
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            lazyLoad: !1
        }, r.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                r = n && n.find(".owl-lazy");
            !r || t.inArray(n.get(0), this._loaded) > -1 || (r.each(t.proxy(function(i, n) {
                var r, o = t(n),
                    s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", {
                    element: o,
                    url: s
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                    o.css("opacity", 1), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : ((r = new Image).onload = t.proxy(function() {
                    o.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this), r.src = s)
            }, this)), this._loaded.push(n.get(0)))
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, r.prototype.update = function() {
            var e, i = this._core._current,
                n = i + this._core.settings.items,
                r = this._core.$stage.children().toArray().slice(i, n),
                o = [];
            t.each(r, function(e, i) {
                o.push(t(i).height())
            }), e = Math.max.apply(null, o), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, r.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if ((n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[s] = {
                type: i,
                id: n,
                width: r,
                height: o
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, r.prototype.thumbnail = function(e, i) {
            var n, r, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                s = e.find("img"),
                a = "src",
                l = "",
                u = this._core.settings,
                c = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                    n = u.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                    e.after(n),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return c(s.attr(a)), s.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(r)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t[0].thumbnail_large, c(r)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t.framegrab_url, c(r)
                }
            })
        }, r.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function(e) {
            var i, n = t(e.target).closest("." + this._core.settings.itemClass),
                r = this._videos[n.attr("data-video")],
                o = r.width || "100%",
                s = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === r.type ? i = '<iframe width="' + o + '" height="' + s + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&rel=0&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + o + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + s + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, r.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(s)), o && r.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, r.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, r.prototype._getNextTimeout = function(n, r) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, r.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, r.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, r.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var r = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function() {
            var e, i = this._core.settings;
            for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                    var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                    e.preventDefault(), this.to(n, i.dotsSpeed)
                }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
        }, r.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, r.prototype.update = function() {
            var t, e, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                    if (e >= s || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(r, t - i),
                                end: t - i + s - 1
                            }), Math.min(r, t - i) === r) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, r.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                r = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, r.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, r.prototype.getPosition = function(e) {
            var i, n, r = this._core.settings;
            return "page" == r.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += r.slideBy : i -= r.slideBy), i
        }, r.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, r.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, r.prototype.to = function(e, i, n) {
            var r;
            !n && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var r = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    r = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }, this))
        };
        r.Defaults = {
            URLhashListener: !1
        }, r.prototype.destroy = function() {
            var i, n;
            for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function r(e, i) {
            var r = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
                if (s[e] !== n) return r = !i || e, !1
            }), r
        }

        function o(t) {
            return r(t, !0)
        }
        var s = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            u = function() {
                return !!r("transform")
            },
            c = function() {
                return !!r("perspective")
            },
            d = function() {
                return !!r("animation")
            };
        (function() {
            return !!r("transition")
        })() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), d() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u() && (t.support.transform = new String(o("transform")), t.support.transform3d = c())
    }(window.Zepto || window.jQuery, window, document);
var GurLiquid = {
    author: "Matt McCray <darthapo@gmail.com>",
    version: "1.3.2",
    readTemplateFile: function(t) {
        throw "This GurLiquid context does not allow includes."
    },
    registerFilters: function(t) {
        GurLiquid.Template.registerFilter(t)
    },
    parse: function(t) {
        return GurLiquid.Template.parse(t)
    },
    extensions: {}
};
GurLiquid.extensions.object = {}, GurLiquid.extensions.object.update = function(t) {
        for (var e in t) this[e] = t[e];
        return this
    }, GurLiquid.extensions.object.hasKey = function(t) {
        return !!this[t]
    }, GurLiquid.extensions.object.hasValue = function(t) {
        for (var e in this)
            if (this[e] == t) return !0;
        return !1
    }, GurLiquid.extensions.object.isEmpty = function(t) {
        if (!t || "" === GurLiquid.extensions.stringTools.strip(t.toString())) return !0;
        if (t.length && t.length > 0) return !1;
        if ("number" == typeof t) return !1;
        for (var e in t)
            if (t[e]) return !1;
        return !0
    }, GurLiquid.extensions.stringTools = {}, GurLiquid.extensions.stringTools.capitalize = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()
    }, GurLiquid.extensions.stringTools.strip = function(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }, GurLiquid.extensions.arrayTools = {}, GurLiquid.extensions.arrayTools.last = function(t) {
        return t[t.length - 1]
    }, GurLiquid.extensions.arrayTools.indexOf = function(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] == e) return i;
        return -1
    }, GurLiquid.extensions.arrayTools.map = function(t, e) {
        var i = t.length;
        if ("function" != typeof e) throw "GurLiquid.extensions.arrayTools.map requires first argument to be a function";
        for (var n = new Array(i), r = arguments[2], o = 0; o < i; o++) o in t && (n[o] = e.call(r, t[o], o, t));
        return n
    }, GurLiquid.extensions.arrayTools.flatten = function(t) {
        for (var e = t.length, i = [], n = 0; n < e; n++) t[n] instanceof Array ? i = i.concat(t[n]) : i.push(t[n]);
        return i
    }, GurLiquid.extensions.arrayTools.each = function(t, e) {
        var i = t.length;
        if ("function" != typeof e) throw "GurLiquid.extensions.arrayTools.each requires first argument to be a function";
        for (var n = arguments[2], r = 0; r < i; r++) r in t && e.call(n, t[r], r, t);
        return null
    }, GurLiquid.extensions.arrayTools.include = function(t, e) {
        return t.length, GurLiquid.extensions.arrayTools.indexOf(t, e) >= 0
    },
    function() {
        var t = !1,
            e = /xyz/.test(function() {
                xyz
            }) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, this.Class.extend = function(i) {
            var n = this.prototype;
            t = !0;
            var r = new this;
            for (var o in t = !1, i) r[o] = "function" == typeof i[o] && "function" == typeof n[o] && e.test(i[o]) ? function(t, e) {
                return function() {
                    var i = this._super;
                    this._super = n[t];
                    var r = e.apply(this, arguments);
                    return this._super = i, r
                }
            }(o, i[o]) : i[o];

            function s() {
                !t && this.init && this.init.apply(this, arguments)
            }
            return s.prototype = r, s.prototype.constructor = s, s.extend = arguments.callee, s
        }
    }.call(GurLiquid), GurLiquid.Tag = GurLiquid.Class.extend({
        init: function(t, e, i) {
            this.tagName = t, this.markup = e, this.nodelist = this.nodelist || [], this.parse(i)
        },
        parse: function(t) {},
        render: function(t) {
            return ""
        }
    }), GurLiquid.Block = GurLiquid.Tag.extend({
        init: function(t, e, i) {
            this.blockName = t, this.blockDelimiter = "end" + this.blockName, this._super(t, e, i)
        },
        parse: function(t) {
            this.nodelist || (this.nodelist = []), this.nodelist.length = 0;
            var e = t.shift();
            for (t.push(""); t.length;) {
                if (/^\{\%/.test(e)) {
                    var i = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
                    if (!i) throw "Tag '" + e + "' was not properly terminated with: %}";
                    if (this.blockDelimiter == i[1]) return void this.endTag();
                    i[1] in GurLiquid.Template.tags ? this.nodelist.push(new GurLiquid.Template.tags[i[1]](i[1], i[2], t)) : this.unknownTag(i[1], i[2], t)
                } else /^\{\{/.test(e) ? this.nodelist.push(this.createVariable(e)) : this.nodelist.push(e);
                e = t.shift()
            }
            this.assertMissingDelimitation()
        },
        endTag: function() {},
        unknownTag: function(t, e, i) {
            switch (t) {
                case "else":
                    throw this.blockName + " tag does not expect else tag";
                case "end":
                    throw "'end' is not a valid delimiter for " + this.blockName + " tags. use " + this.blockDelimiter;
                default:
                    throw "Unknown tag: " + t
            }
        },
        createVariable: function(t) {
            var e = t.match(/^\{\{(.*)\}\}$/);
            if (e) return new GurLiquid.Variable(e[1]);
            throw "Variable '" + t + "' was not properly terminated with: }}"
        },
        render: function(t) {
            return this.renderAll(this.nodelist, t)
        },
        renderAll: function(t, e) {
            return GurLiquid.extensions.arrayTools.map(t || [], function(t, i) {
                var n = "";
                try {
                    n = t.render ? t.render(e) : t
                } catch (t) {
                    n = e.handleError(t)
                }
                return n
            })
        },
        assertMissingDelimitation: function() {
            throw this.blockName + " tag was never closed"
        }
    }), GurLiquid.Document = GurLiquid.Block.extend({
        init: function(t) {
            this.blockDelimiter = [], this.parse(t)
        },
        assertMissingDelimitation: function() {}
    }), GurLiquid.Strainer = GurLiquid.Class.extend({
        init: function(t) {
            this.context = t
        },
        respondTo: function(t) {
            return !(t = t.toString()).match(/^__/) && !GurLiquid.extensions.arrayTools.include(GurLiquid.Strainer.requiredMethods, t) && t in this
        }
    }), GurLiquid.Strainer.filters = {}, GurLiquid.Strainer.globalFilter = function(t) {
        for (var e in t) GurLiquid.Strainer.filters[e] = t[e]
    }, GurLiquid.Strainer.requiredMethods = ["respondTo", "context"], GurLiquid.Strainer.create = function(t) {
        var e = new GurLiquid.Strainer(t);
        for (var i in GurLiquid.Strainer.filters) e[i] = GurLiquid.Strainer.filters[i];
        return e
    }, GurLiquid.Context = GurLiquid.Class.extend({
        init: function(t, e, i) {
            this.scopes = [t || {}], this.registers = e || {}, this.errors = [], this.rethrowErrors = i, this.strainer = GurLiquid.Strainer.create(this)
        },
        get: function(t) {
            return this.resolve(t)
        },
        set: function(t, e) {
            this.scopes[0][t] = e
        },
        hasKey: function(t) {
            return !!this.resolve(t)
        },
        push: function() {
            var t = {};
            return this.scopes.unshift(t), t
        },
        merge: function(t) {
            return GurLiquid.extensions.object.update.call(this.scopes[0], t)
        },
        pop: function() {
            if (1 == this.scopes.length) throw "Context stack error";
            return this.scopes.shift()
        },
        stack: function(t, e) {
            var i = null;
            this.push();
            try {
                i = t.apply(e || this.strainer)
            } finally {
                this.pop()
            }
            return i
        },
        invoke: function(t, e) {
            return this.strainer.respondTo(t) ? this.strainer[t].apply(this.strainer, e) : 0 == e.length ? null : e[0]
        },
        resolve: function(t) {
            switch (t) {
                case null:
                case "nil":
                case "null":
                case "":
                    return null;
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "blank":
                case "empty":
                    return "";
                default:
                    if (/^'(.*)'$/.test(t)) return t.replace(/^'(.*)'$/, "$1");
                    if (/^"(.*)"$/.test(t)) return t.replace(/^"(.*)"$/, "$1");
                    if (/^(\d+)$/.test(t)) return parseInt(t.replace(/^(\d+)$/, "$1"));
                    if (/^(\d[\d\.]+)$/.test(t)) return parseFloat(t.replace(/^(\d[\d\.]+)$/, "$1"));
                    if (/^\((\S+)\.\.(\S+)\)$/.test(t)) {
                        var e = t.match(/^\((\S+)\.\.(\S+)\)$/),
                            i = parseInt(e[1]),
                            n = parseInt(e[2]),
                            r = [];
                        if (isNaN(i) || isNaN(n)) {
                            i = e[1].charCodeAt(0);
                            for (var o = (n = e[2].charCodeAt(0)) - i + 1, s = 0; s < o; s++) r.push(String.fromCharCode(s + i))
                        } else
                            for (o = n - i + 1, s = 0; s < o; s++) r.push(s + i);
                        return r
                    }
                    return this.variable(t)
            }
        },
        findVariable: function(t) {
            for (var e = 0; e < this.scopes.length; e++) {
                var i = this.scopes[e];
                if (i && void 0 !== i[t]) {
                    var n = i[t];
                    return "function" == typeof n && (n = n.apply(this), i[t] = n), n && this._isObject(n) && "toGurLiquid" in n && (n = n.toGurLiquid()), n && this._isObject(n) && "setContext" in n && n.setContext(self), n
                }
            }
            return null
        },
        variable: function(t) {
            if ("string" != typeof t) return null;
            var e = t.match(/\[[^\]]+\]|(?:[\w\-]\??)+/g),
                i = e.shift(),
                n = i.match(/^\[(.*)\]$/);
            n && (i = this.resolve(n[1]));
            var r = this.findVariable(i),
                o = this;
            return r && GurLiquid.extensions.arrayTools.each(e, function(t) {
                var e = t.match(/^\[(.*)\]$/);
                if (e) t = o.resolve(e[1]), "function" == typeof r[t] && (r[t] = r[t].apply(this)), r = r[t], o._isObject(r) && "toGurLiquid" in r && (r = r.toGurLiquid());
                else {
                    if ((o._isObject(r) || "hash" == typeof r) && t in r) {
                        var i = r[t];
                        "function" == typeof i && (i = r[t] = i.apply(o)), r = o._isObject(i) && "toGurLiquid" in i ? i.toGurLiquid() : i
                    } else if (/^\d+$/.test(t)) {
                        var n = parseInt(t);
                        "function" == typeof r[n] && (r[n] = r[n].apply(o)), r = o._isObject(r) && o._isObject(r[n]) && "toGurLiquid" in r[n] ? r[n].toGurLiquid() : r[n]
                    } else {
                        if (!r || "function" != typeof r[t] || !GurLiquid.extensions.arrayTools.include(["length", "size", "first", "last"], t)) return r = null;
                        "toGurLiquid" in (r = r[t].apply(t)) && (r = r.toGurLiquid())
                    }
                    o._isObject(r) && "setContext" in r && r.setContext(o)
                }
            }), r
        },
        addFilters: function(t) {
            t = GurLiquid.extensions.arrayTools.flatten(t), GurLiquid.extensions.arrayTools.each(t, function(t) {
                if (!this._isObject(t)) throw "Expected object but got: " + typeof t;
                this.strainer.addMethods(t)
            })
        },
        handleError: function(t) {
            if (this.errors.push(t), this.rethrowErrors) throw t;
            return "GurLiquid error: " + (t.message ? t.message : t.description ? t.description : t)
        },
        _isObject: function(t) {
            return null != t && "object" == typeof t
        }
    }), GurLiquid.Template = GurLiquid.Class.extend({
        init: function() {
            this.root = null, this.registers = {}, this.assigns = {}, this.errors = [], this.rethrowErrors = !1
        },
        parse: function(t) {
            return this.root = new GurLiquid.Document(GurLiquid.Template.tokenize(t)), this
        },
        render: function() {
            if (!this.root) return "";
            var t = {
                    ctx: arguments[0],
                    filters: arguments[1],
                    registers: arguments[2]
                },
                e = null;
            t.ctx instanceof GurLiquid.Context ? (e = t.ctx, this.assigns = e.assigns, this.registers = e.registers) : (t.ctx && GurLiquid.extensions.object.update.call(this.assigns, t.ctx), t.registers && GurLiquid.extensions.object.update.call(this.registers, t.registers), e = new GurLiquid.Context(this.assigns, this.registers, this.rethrowErrors)), t.filters && e.addFilters(arg.filters);
            try {
                return this.root.render(e).join("")
            } finally {
                this.errors = e.errors
            }
        },
        renderWithErrors: function() {
            var t = this.rethrowErrors;
            this.rethrowErrors = !0;
            var e = this.render.apply(this, arguments);
            return this.rethrowErrors = t, e
        }
    }), GurLiquid.Template.tags = {}, GurLiquid.Template.registerTag = function(t, e) {
        GurLiquid.Template.tags[t] = e
    }, GurLiquid.Template.registerFilter = function(t) {
        GurLiquid.Strainer.globalFilter(t)
    }, GurLiquid.Template.tokenize = function(t) {
        var e = t.split(/(\{\%.*?\%\}|\{\{.*?\}\}?)/);
        return "" == e[0] && e.shift(), e
    }, GurLiquid.Template.parse = function(t) {
        return (new GurLiquid.Template).parse(t)
    }, GurLiquid.Variable = GurLiquid.Class.extend({
        init: function(t) {
            this.markup = t, this.name = null, this.filters = [];
            var e = this,
                i = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)/);
            if (i) {
                this.name = i[1];
                var n = t.match(/\|\s*(.*)/);
                if (n) {
                    var r = n[1].split(/\|/);
                    GurLiquid.extensions.arrayTools.each(r, function(t) {
                        var i = t.match(/\s*(\w+)/);
                        if (i) {
                            var n = i[1],
                                r = [];
                            GurLiquid.extensions.arrayTools.each(GurLiquid.extensions.arrayTools.flatten(t.match(/(?:[:|,]\s*)("[^"]+"|'[^']+'|[^\s,|]+)/g) || []), function(t) {
                                var e = t.match(/^[\s|:|,]*(.*?)[\s]*$/);
                                e && r.push(e[1])
                            }), e.filters.push([n, r])
                        }
                    })
                }
            }
        },
        render: function(t) {
            if (null == this.name) return "";
            var e = t.get(this.name);
            return GurLiquid.extensions.arrayTools.each(this.filters, function(i) {
                var n = i[0],
                    r = GurLiquid.extensions.arrayTools.map(i[1] || [], function(e) {
                        return t.get(e)
                    });
                r.unshift(e), e = t.invoke(n, r)
            }), e
        }
    }), GurLiquid.Condition = GurLiquid.Class.extend({
        init: function(t, e, i) {
            this.left = t, this.operator = e, this.right = i, this.childRelation = null, this.childCondition = null, this.attachment = null
        },
        evaluate: function(t) {
            t = t || new GurLiquid.Context;
            var e = this.interpretCondition(this.left, this.right, this.operator, t);
            switch (this.childRelation) {
                case "or":
                    return e || this.childCondition.evaluate(t);
                case "and":
                    return e && this.childCondition.evaluate(t);
                default:
                    return e
            }
        },
        or: function(t) {
            this.childRelation = "or", this.childCondition = t
        },
        and: function(t) {
            this.childRelation = "and", this.childCondition = t
        },
        attach: function(t) {
            return this.attachment = t, this.attachment
        },
        isElse: !1,
        interpretCondition: function(t, e, i, n) {
            if (!i) return n.get(t);
            if (t = n.get(t), e = n.get(e), !(i = GurLiquid.Condition.operators[i])) throw "Unknown operator " + i;
            return i(t, e)
        },
        toString: function() {
            return "<Condition " + this.left + " " + this.operator + " " + this.right + ">"
        }
    }), GurLiquid.Condition.operators = {
        "==": function(t, e) {
            return t == e
        },
        "=": function(t, e) {
            return t == e
        },
        "!=": function(t, e) {
            return t != e
        },
        "<>": function(t, e) {
            return t != e
        },
        "<": function(t, e) {
            return t < e
        },
        ">": function(t, e) {
            return t > e
        },
        "<=": function(t, e) {
            return t <= e
        },
        ">=": function(t, e) {
            return t >= e
        },
        contains: function(t, e) {
            return "[object Array]" === Object.prototype.toString.call(t) ? GurLiquid.extensions.arrayTools.indexOf(t, e) >= 0 : t.match(e)
        },
        hasKey: function(t, e) {
            return GurLiquid.extensions.object.hasKey.call(t, e)
        },
        hasValue: function(t, e) {
            return GurLiquid.extensions.object.hasValue.call(t, e)
        }
    }, GurLiquid.ElseCondition = GurLiquid.Condition.extend({
        isElse: !0,
        evaluate: function(t) {
            return !0
        },
        toString: function() {
            return "<ElseCondition>"
        }
    }), GurLiquid.Drop = GurLiquid.Class.extend({
        setContext: function(t) {
            this.context = t
        },
        beforeMethod: function(t) {},
        invokeDrop: function(t) {
            var e = this.beforeMethod();
            return !e && t in this && (e = this[t].apply(this)), e
        },
        hasKey: function(t) {
            return !0
        }
    });
var split, hackObjectEach = function(t) {
    if ("function" != typeof t) throw "Object.each requires first argument to be a function";
    var e = 0,
        i = arguments[1];
    for (var n in this) {
        var r = this[n],
            o = [n, r];
        o.key = n, o.value = r, t.call(i, o, e, this), e++
    }
    return null
};
GurLiquid.Template.registerTag("assign", GurLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)\s*=\s*(.+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'assign' - Valid syntax: assign [var] = [source]";
            this.to = n[1], this.from = n[2], this._super(t, e, i)
        },
        render: function(t) {
            var e = new GurLiquid.Variable(this.from);
            return GurLiquid.extensions.arrayTools.last(t.scopes)[this.to.toString()] = e.render(t), ""
        }
    })), GurLiquid.Template.registerTag("cache", GurLiquid.Block.extend({
        tagSyntax: /(\w+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'cache' - Valid syntax: cache [var]";
            this.to = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e = this._super(t);
            return GurLiquid.extensions.arrayTools.last(t.scopes)[this.to] = GurLiquid.extensions.arrayTools.flatten([e]).join(""), ""
        }
    })), GurLiquid.Template.registerTag("capture", GurLiquid.Block.extend({
        tagSyntax: /(\w+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'capture' - Valid syntax: capture [var]";
            this.to = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e = this._super(t);
            return GurLiquid.extensions.arrayTools.last(t.scopes)[this.to.toString()] = GurLiquid.extensions.arrayTools.flatten([e]).join(""), ""
        }
    })), GurLiquid.Template.registerTag("case", GurLiquid.Block.extend({
        tagSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)/,
        tagWhenSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)(?:(?:\s+or\s+|\s*\,\s*)("[^"]+"|'[^']+'|[^\s,|]+.*))?/,
        init: function(t, e, i) {
            this.blocks = [], this.nodelist = [];
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'case' - Valid syntax: case [condition]";
            this.left = n[1], this._super(t, e, i)
        },
        unknownTag: function(t, e, i) {
            switch (t) {
                case "when":
                    this.recordWhenCondition(e);
                    break;
                case "else":
                    this.recordElseCondition(e);
                    break;
                default:
                    this._super(t, e, i)
            }
        },
        render: function(t) {
            var e = this,
                i = [],
                n = !0;
            return t.stack(function() {
                for (var r = 0; r < e.blocks.length; r++) {
                    var o = e.blocks[r];
                    if (o.isElse) return 1 == n && (i = GurLiquid.extensions.arrayTools.flatten([i, e.renderAll(o.attachment, t)])), i;
                    o.evaluate(t) && (n = !1, i = GurLiquid.extensions.arrayTools.flatten([i, e.renderAll(o.attachment, t)]))
                }
            }), i
        },
        recordWhenCondition: function(t) {
            for (; t;) {
                var e = t.match(this.tagWhenSyntax);
                if (!e) throw "Syntax error in tag 'case' - Valid when condition: {% when [condition] [or condition2...] %} ";
                t = e[2];
                var i = new GurLiquid.Condition(this.left, "==", e[1]);
                this.blocks.push(i), this.nodelist = i.attach([])
            }
        },
        recordElseCondition: function(t) {
            if ("" != GurLiquid.extensions.stringTools.strip(t || "")) throw "Syntax error in tag 'case' - Valid else condition: {% else %} (no parameters) ";
            var e = new GurLiquid.ElseCondition;
            this.blocks.push(e), this.nodelist = e.attach([])
        }
    })), GurLiquid.Template.registerTag("comment", GurLiquid.Block.extend({
        render: function(t) {
            return ""
        }
    })), GurLiquid.Template.registerTag("cycle", GurLiquid.Tag.extend({
        tagSimpleSyntax: /"[^"]+"|'[^']+'|[^\s,|]+/,
        tagNamedSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)\s*\:\s*(.*)/,
        init: function(t, e, i) {
            var n;
            if (n = e.match(this.tagNamedSyntax)) this.variables = this.variablesFromString(n[2]), this.name = n[1];
            else {
                if (!(n = e.match(this.tagSimpleSyntax))) throw "Syntax error in 'cycle' - Valid syntax: cycle [name :] var [, var2, var3 ...]";
                this.variables = this.variablesFromString(e), this.name = "'" + this.variables.toString() + "'"
            }
            this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = t.get(e.name),
                n = "";
            return t.registers.cycle || (t.registers.cycle = {}), t.registers.cycle[i] || (t.registers.cycle[i] = 0), t.stack(function() {
                var r = t.registers.cycle[i],
                    o = t.get(e.variables[r]);
                (r += 1) == e.variables.length && (r = 0), t.registers.cycle[i] = r, n = o
            }), n
        },
        variablesFromString: function(t) {
            return GurLiquid.extensions.arrayTools.map(t.split(","), function(t) {
                var e = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)\s*/);
                return e[1] ? e[1] : null
            })
        }
    })), GurLiquid.Template.registerTag("for", GurLiquid.Block.extend({
        tagSyntax: /(\w+)\s+in\s+((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'for loop' - Valid syntax: for [item] in [collection]";
            this.variableName = n[1], this.collectionName = n[2], this.name = this.variableName + "-" + this.collectionName, this.attributes = {}, e.replace(this.tagSyntax, "");
            var r = e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
            r && GurLiquid.extensions.arrayTools.each(r, function(t) {
                t = t.split(":"), this.attributes[GurLiquid.extensions.stringTools.strip(t[0])] = GurLiquid.extensions.stringTools.strip(t[1])
            }, this), this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = [],
                n = t.get(this.collectionName) || [],
                r = [0, n.length];
            if (t.registers.for || (t.registers.for = {}), this.attributes.limit || this.attributes.offset) {
                var o, s, a, l = null;
                r = [a = "continue" == this.attributes.offset ? t.registers.for[this.name] : t.get(this.attributes.offset) || 0, (s = (o = t.get(this.attributes.limit)) ? a + o + 1 : n.length) - 1], t.registers.for[this.name] = s
            }
            return (l = n.slice(r[0], r[1])) && 0 != l.length ? (t.stack(function() {
                var n = l.length;
                GurLiquid.extensions.arrayTools.each(l, function(r, o) {
                    t.set(e.variableName, r), t.set("forloop", {
                        name: e.name,
                        length: n,
                        index: o + 1,
                        index0: o,
                        rindex: n - o,
                        rindex0: n - o - 1,
                        first: 0 == o,
                        last: o == n - 1
                    }), i.push((e.renderAll(e.nodelist, t) || []).join(""))
                })
            }), GurLiquid.extensions.arrayTools.flatten([i]).join("")) : ""
        }
    })), GurLiquid.Template.registerTag("if", GurLiquid.Block.extend({
        tagSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)\s*([=!<>a-z_]+)?\s*("[^"]+"|'[^']+'|[^\s,|]+)?/,
        init: function(t, e, i) {
            this.nodelist = [], this.blocks = [], this.pushBlock("if", e), this._super(t, e, i)
        },
        unknownTag: function(t, e, i) {
            GurLiquid.extensions.arrayTools.include(["elsif", "else"], t) ? this.pushBlock(t, e) : this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                for (var n = 0; n < e.blocks.length; n++) {
                    var r = e.blocks[n];
                    if (r.evaluate(t)) return void(i = e.renderAll(r.attachment, t))
                }
            }), GurLiquid.extensions.arrayTools.flatten([i]).join("")
        },
        pushBlock: function(t, e) {
            var i;
            if ("else" == t) i = new GurLiquid.ElseCondition;
            else {
                var n = e.split(/\b(and|or)\b/).reverse();
                if (!(o = n.shift().match(this.tagSyntax))) throw "Syntax Error in tag '" + t + "' - Valid syntax: " + t + " [expression]";
                for (var r = new GurLiquid.Condition(o[1], o[2], o[3]); n.length > 0;) {
                    var o, s = n.shift();
                    if (!(o = n.shift().match(this.tagSyntax))) throw "Syntax Error in tag '" + t + "' - Valid syntax: " + t + " [expression]";
                    var a = new GurLiquid.Condition(o[1], o[2], o[3]);
                    a[s](r), r = a
                }
                i = r
            }
            i.attach([]), this.blocks.push(i), this.nodelist = i.attachment
        }
    })), GurLiquid.Template.registerTag("ifchanged", GurLiquid.Block.extend({
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                var n = e.renderAll(e.nodelist, t).join("");
                n != t.registers.ifchanged && (i = n, t.registers.ifchanged = i)
            }), i
        }
    })), GurLiquid.Template.registerTag("include", GurLiquid.Tag.extend({
        tagSyntax: /((?:"[^"]+"|'[^']+'|[^\s,|]+)+)(\s+(?:with|for)\s+((?:"[^"]+"|'[^']+'|[^\s,|]+)+))?/,
        init: function(t, e, i) {
            var n = (e || "").match(this.tagSyntax);
            if (!n) throw "Error in tag 'include' - Valid syntax: include '[template]' (with|for) [object|collection]";
            this.templateName = n[1], this.templateNameVar = this.templateName.substring(1, this.templateName.length - 1), this.variableName = n[3], this.attributes = {};
            var r = e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
            r && GurLiquid.extensions.arrayTools.each(r, function(t) {
                t = t.split(":"), this.attributes[GurLiquid.extensions.stringTools.strip(t[0])] = GurLiquid.extensions.stringTools.strip(t[1])
            }, this), this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = GurLiquid.readTemplateFile(t.get(this.templateName)),
                n = GurLiquid.parse(i),
                r = t.get(this.variableName || this.templateNameVar),
                o = "";
            return t.stack(function() {
                e.attributes.each = hackObjectEach, e.attributes.each(function(e) {
                    t.set(e.key, t.get(e.value))
                }), r instanceof Array ? o = GurLiquid.extensions.arrayTools.map(r, function(i) {
                    return t.set(e.templateNameVar, i), n.render(t)
                }) : (t.set(e.templateNameVar, r), o = n.render(t))
            }), o = GurLiquid.extensions.arrayTools.flatten([o]).join("")
        }
    })), GurLiquid.Template.registerTag("unless", GurLiquid.Template.tags.if.extend({
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                if ((r = e.blocks[0]).evaluate(t))
                    for (var n = 1; n < e.blocks.length; n++) {
                        var r;
                        if ((r = e.blocks[n]).evaluate(t)) return void(i = e.renderAll(r.attachment, t))
                    } else i = e.renderAll(r.attachment, t)
            }), GurLiquid.extensions.arrayTools.flatten([i]).join("")
        }
    })), GurLiquid.Template.registerTag("raw", GurLiquid.Block.extend({
        parse: function(t) {
            this.nodelist || (this.nodelist = []), this.nodelist.length = 0;
            var e = t.shift();
            for (t.push(""); t.length;) {
                if (/^\{\%/.test(e)) {
                    var i = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
                    if (i && this.blockDelimiter == i[1]) return void this.endTag()
                }
                this.nodelist.push(e || ""), e = t.shift()
            }
            this.assertMissingDelimitation()
        },
        render: function(t) {
            return this.nodelist.join("")
        }
    })), GurLiquid.Template.registerTag("increment", GurLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (console.log(t, e, i), console.log(n[1]), !n) throw "Syntax error in 'assign' - Valid syntax: increment [var]";
            this.name = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e, i = this.name;
            return t.registers.increment || (t.registers.increment = {}), t.registers.increment[i] || (t.registers.increment[i] = 0), e = String(t.registers.increment[i]), t.registers.increment[i]++, e
        }
    })), GurLiquid.Template.registerTag("decrement", GurLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (console.log(t, e, i), console.log(n[1]), !n) throw "Syntax error in 'assign' - Valid syntax: decrement [var]";
            this.name = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e, i = this.name;
            return t.registers.decrement || (t.registers.decrement = {}), t.registers.decrement[i] || (t.registers.decrement[i] = -1), e = String(t.registers.decrement[i]), t.registers.decrement[i]--, e
        }
    })),
    function(t) {
        var e = function(t, e) {
            function i(t, e) {
                return void 0 === t ? e : t
            }

            function n(t, e, n, r) {
                if (e = i(e, 2), n = i(n, ","), r = i(r, "."), isNaN(t) || null == t) return 0;
                var o = (t = (Shopify && Shopify.currency && Shopify.currency.rate && 1 != parseFloat(Shopify.currency.rate) ? Math.ceil(t * parseFloat(Shopify.currency.rate) / 100) : t / 100).toFixed(e)).split(".");
                return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + (o[1] ? r + o[1] : "")
            }
            "string" == typeof t && (t = t.replace(".", ""));
            var r = "",
                o = /\{\{\s*(\w+)\s*\}\}/,
                s = e;
            switch (s.match(o)[1]) {
                case "amount":
                    r = n(t, 2);
                    break;
                case "amount_no_decimals":
                    r = n(t, 0);
                    break;
                case "amount_with_comma_separator":
                    r = n(t, 2, ".", ",");
                    break;
                case "amount_with_space_separator":
                    r = n(t, 2, " ", ",");
                    break;
                case "amount_with_period_and_space_separator":
                    r = n(t, 2, " ", ".");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    r = n(t, 0, ".", ",");
                    break;
                case "amount_no_decimals_with_space_separator":
                    r = n(t, 0, ".", "");
                    break;
                case "amount_with_space_separator":
                    r = n(t, 2, ",", "");
                    break;
                case "amount_with_apostrophe_separator":
                    r = n(t, 2, "'", ".")
            }
            return s.replace(o, r)
        };
        t.Template.registerFilter({
            _HTML_ESCAPE_MAP: {
                "&": "&amp;",
                ">": "&gt;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            size: function(t) {
                return t.length ? t.length : 0
            },
            downcase: function(t) {
                return t.toString().toLowerCase()
            },
            upcase: function(t) {
                return t.toString().toUpperCase()
            },
            capitalize: function(e) {
                return t.extensions.stringTools.capitalize(e.toString())
            },
            handle: function(t) {
                return t.toLowerCase().replace(/("|'|\\|\(|\)|\[|\])/g, "").replace(/\W+/g, "-").replace(/^-+|-+$/g, "")
            },
            escape: function(t) {
                var e = this;
                return t.replace(/[&<>"']/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            h: function(t) {
                var e = this;
                return t.replace(/[&<>"']/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            default: function(e, i) {
                return t.extensions.object.isEmpty(e) ? i : e
            },
            truncate: function(t, e, i) {
                return t && "" != t ? (e = e || 50, i = i || "...", t.slice(0, e), t.length > e ? t.slice(0, e) + i : t) : ""
            },
            replace: function(t, e, i) {
                if (!t || "" == t) return "";
                e = parseInt(e || 15), i = i || "...";
                var n = t.toString().split(" "),
                    r = Math.max(e, 0);
                return n.length > r ? n.slice(0, r).join(" ") + i : t
            },
            truncate_words: function(t, e, i) {
                if (!t || "" == t) return "";
                e = parseInt(e || 15), i = i || "...";
                var n = t.toString().split(" "),
                    r = Math.max(e, 0);
                return n.length > r ? n.slice(0, r).join(" ") + i : t
            },
            strip_html: function(t) {
                return t.toString().replace(/<.*?>/g, "")
            },
            strip_newlines: function(t) {
                return t.toString().replace(/\n/g, "")
            },
            join: function(t, e) {
                return e = e || " ", Array.isArray(t) ? t.join(e) : t
            },
            split: function(t, e) {
                return e = e || " ", t.split(e)
            },
            sort: function(t) {
                return t.sort()
            },
            custom_sort: function(t) {
                return t.sort(function(t, e) {
                    return parseInt(t) - parseInt(e)
                })
            },
            reverse: function(t) {
                return t.reverse()
            },
            replace: function(t, e, i) {
                return i = i || "", t.toString().replace(new RegExp(e, "g"), i)
            },
            replace_first: function(t, e, i) {
                return i = i || "", t.toString().replace(new RegExp(e, ""), i)
            },
            newline_to_br: function(t) {
                return t.toString().replace(/\n/g, "<br/>\n")
            },
            date: function(t, e) {
                var i;
                return t instanceof Date && (i = t), i instanceof Date || "now" != t || (i = new Date), i instanceof Date || "number" != typeof t || (i = new Date(1e3 * t)), i instanceof Date || "string" != typeof t || (i = new Date(Date.parse(t))), i instanceof Date ? "%s" == e ? Math.round(i.getTime() / 1e3) : i.strftime(e) : t
            },
            first: function(t) {
                return t[0]
            },
            last: function(t) {
                return (t = t)[t.length - 1]
            },
            minus: function(t, e) {
                return (Number(t) || 0) - (Number(e) || 0)
            },
            plus: function(t, e) {
                return (Number(t) || 0) + (Number(e) || 0)
            },
            times: function(t, e) {
                return (Number(t) || 0) * (Number(e) || 0)
            },
            divided_by: function(t, e) {
                return (Number(t) || 0) / (Number(e) || 0)
            },
            modulo: function(t, e) {
                return (Number(t) || 0) % (Number(e) || 0)
            },
            map: function(t, e) {
                t = t || [];
                for (var i = [], n = 0; n < t.length; n++) i.push(t[n][e]);
                return i
            },
            escape_once: function(t) {
                var e = this;
                return t.replace(/["><']|&(?!([a-zA-Z]+|(#\d+));)/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            remove: function(t, e) {
                return t.toString().replace(new RegExp(e, "g"), "")
            },
            remove_first: function(t, e) {
                return t.toString().replace(e, "")
            },
            prepend: function(t, e) {
                return "" + (e || "").toString() + (t || "").toString()
            },
            append: function(t, e) {
                return "" + (t || "").toString() + (e || "").toString()
            },
            money: function(t) {
                return e(t, window.moneyFormat)
            },
            money_with_currency: function(t) {
                return e(t, window.moneyFormat)
            },
            money_without_trailing_zeros: function(t) {
                return e(t, window.moneyFormat)
            },
            money_without_currency: function(t) {
                return e(t, window.moneyFormat)
            },
            round: function(t) {
                return parseInt(Math.round(t))
            },
            floor: function(t) {
                return parseInt(Math.floor(t))
            },
            ceil: function(t) {
                return parseInt(Math.ceil(t))
            },
            img_url: function(t, e, i) {
                i = i || !1;
                var n = t.split(".").pop(),
                    r = t.lastIndexOf(n) - 1;
                return t.slice(0, r) + "_" + e + t.slice(r)
            },
            img_ladyload_url: function(t, e) {
                e = e || !1;
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_{width}x" + t.slice(n)
            },
            img_lazyload_url: function(t, e) {
                e = e || !1;
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_{width}x" + t.slice(n)
            },
            file_img_url: function(t, e, i) {
                i = i || !1, i = t.split(".").pop();
                var n = t.lastIndexOf(i) - 1;
                return t = t.slice(0, n) + "_" + e + t.slice(n), window.filesUrl + t
            },
            crop: function(t, e) {
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_crop_" + e + t.slice(n)
            },
            json: function(t) {
                return JSON.stringify(t)
            },
            parseJson: function(t) {
                return JSON.parse(t)
            },
            asset_img_url: function(t, e) {
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t = t.slice(0, n) + "_" + e + t.slice(n), window.assetsUrl + t
            },
            asset_url: function(t) {
                return window.assetsUrl + t
            }
        })
    }(GurLiquid), (new Date).strftime || (Date.ext = {}, Date.ext.util = {}, Date.ext.util.xPad = function(t, e, i) {
        for (void 0 === i && (i = 10); parseInt(t, 10) < i && i > 1; i /= 10) t = e.toString() + t;
        return t.toString()
    }, Date.prototype.locale = "en-GB", document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang && (Date.prototype.locale = document.getElementsByTagName("html")[0].lang), Date.ext.locales = {}, Date.ext.locales.en = {
        a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        c: "%a %d %b %Y %T %Z",
        p: ["AM", "PM"],
        P: ["am", "pm"],
        x: "%d/%m/%y",
        X: "%T"
    }, "undefined" != typeof JSON ? Date.ext.locales["en-US"] = JSON.parse(JSON.stringify(Date.ext.locales.en)) : Date.ext.locales["en-US"] = Date.ext.locales.en, Date.ext.locales["en-US"].c = "%a %d %b %Y %r %Z", Date.ext.locales["en-US"].x = "%D", Date.ext.locales["en-US"].X = "%r", Date.ext.locales["en-GB"] = Date.ext.locales.en, Date.ext.locales["en-AU"] = Date.ext.locales["en-GB"], Date.ext.formats = {
        a: function(t) {
            return Date.ext.locales[t.locale].a[t.getDay()]
        },
        A: function(t) {
            return Date.ext.locales[t.locale].A[t.getDay()]
        },
        b: function(t) {
            return Date.ext.locales[t.locale].b[t.getMonth()]
        },
        B: function(t) {
            return Date.ext.locales[t.locale].B[t.getMonth()]
        },
        c: "toLocaleString",
        C: function(t) {
            return Date.ext.util.xPad(parseInt(t.getFullYear() / 100, 10), 0)
        },
        d: ["getDate", "0"],
        e: ["getDate", " "],
        g: function(t) {
            return Date.ext.util.xPad(parseInt(Date.ext.util.G(t) / 100, 10), 0)
        },
        G: function(t) {
            var e = t.getFullYear(),
                i = parseInt(Date.ext.formats.V(t), 10),
                n = parseInt(Date.ext.formats.W(t), 10);
            return n > i ? e++ : 0 === n && i >= 52 && e--, e
        },
        H: ["getHours", "0"],
        I: function(t) {
            var e = t.getHours() % 12;
            return Date.ext.util.xPad(0 === e ? 12 : e, 0)
        },
        j: function(t) {
            var e = t - new Date(t.getFullYear() + "/1/1 GMT");
            e += 6e4 * t.getTimezoneOffset();
            var i = parseInt(e / 6e4 / 60 / 24, 10) + 1;
            return Date.ext.util.xPad(i, 0, 100)
        },
        m: function(t) {
            return Date.ext.util.xPad(t.getMonth() + 1, 0)
        },
        M: ["getMinutes", "0"],
        p: function(t) {
            return Date.ext.locales[t.locale].p[t.getHours() >= 12 ? 1 : 0]
        },
        P: function(t) {
            return Date.ext.locales[t.locale].P[t.getHours() >= 12 ? 1 : 0]
        },
        S: ["getSeconds", "0"],
        u: function(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        },
        U: function(t) {
            var e = parseInt(Date.ext.formats.j(t), 10),
                i = 6 - t.getDay(),
                n = parseInt((e + i) / 7, 10);
            return Date.ext.util.xPad(n, 0)
        },
        V: function(t) {
            var e = parseInt(Date.ext.formats.W(t), 10),
                i = new Date(t.getFullYear() + "/1/1").getDay(),
                n = e + (i > 4 || i <= 1 ? 0 : 1);
            return 53 == n && new Date(t.getFullYear() + "/12/31").getDay() < 4 ? n = 1 : 0 === n && (n = Date.ext.formats.V(new Date(t.getFullYear() - 1 + "/12/31"))), Date.ext.util.xPad(n, 0)
        },
        w: "getDay",
        W: function(t) {
            var e = parseInt(Date.ext.formats.j(t), 10),
                i = 7 - Date.ext.formats.u(t),
                n = parseInt((e + i) / 7, 10);
            return Date.ext.util.xPad(n, 0, 10)
        },
        y: function(t) {
            return Date.ext.util.xPad(t.getFullYear() % 100, 0)
        },
        Y: "getFullYear",
        z: function(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : "+") + Date.ext.util.xPad(parseInt(Math.abs(e / 60), 10), 0) + Date.ext.util.xPad(e % 60, 0)
        },
        Z: function(t) {
            return t.toString().replace(/^.*\(([^)]+)\)$/, "$1")
        },
        "%": function(t) {
            return "%"
        }
    }, Date.ext.aggregates = {
        c: "locale",
        D: "%m/%d/%y",
        h: "%b",
        n: "\n",
        r: "%I:%M:%S %p",
        R: "%H:%M",
        t: "\t",
        T: "%H:%M:%S",
        x: "locale",
        X: "locale"
    }, Date.ext.aggregates.z = Date.ext.formats.z(new Date), Date.ext.aggregates.Z = Date.ext.formats.Z(new Date), Date.ext.unsupported = {}, Date.prototype.strftime = function(t) {
        this.locale in Date.ext.locales || (this.locale.replace(/-[a-zA-Z]+$/, "") in Date.ext.locales ? this.locale = this.locale.replace(/-[a-zA-Z]+$/, "") : this.locale = "en-GB");
        for (var e = this; t.match(/%[cDhnrRtTxXzZ]/);) t = t.replace(/%([cDhnrRtTxXzZ])/g, function(t, i) {
            var n = Date.ext.aggregates[i];
            return "locale" == n ? Date.ext.locales[e.locale][i] : n
        });
        var i = t.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g, function(t, i) {
            var n = Date.ext.formats[i];
            return "string" == typeof n ? e[n]() : "function" == typeof n ? n.call(e, e) : "object" == typeof n && "string" == typeof n[0] ? Date.ext.util.xPad(e[n[0]](), n[1]) : i
        });
        return e = null, i
    }), split = split || function(t) {
        var e, i = String.prototype.split,
            n = void 0 === /()??/.exec("")[1];
        return e = function(t, e, r) {
            if ("[object RegExp]" !== Object.prototype.toString.call(e)) return i.call(t, e, r);
            var o, s, a, l, u = [],
                c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                d = 0;
            for (e = new RegExp(e.source, c + "g"), t += "", n || (o = new RegExp("^" + e.source + "$(?!\\s)", c)), r = void 0 === r ? -1 >>> 0 : r >>> 0;
                (s = e.exec(t)) && !((a = s.index + s[0].length) > d && (u.push(t.slice(d, s.index)), !n && s.length > 1 && s[0].replace(o, function() {
                    for (var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (s[t] = void 0)
                }), s.length > 1 && s.index < t.length && Array.prototype.push.apply(u, s.slice(1)), l = s[0].length, d = a, u.length >= r));) e.lastIndex === s.index && e.lastIndex++;
            return d === t.length ? !l && e.test("") || u.push("") : u.push(t.slice(d)), u.length > r ? u.slice(0, r) : u
        }, String.prototype.split = function(t, i) {
            return e(this, t, i)
        }, e
    }(), "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = GurLiquid), exports.GurLiquid = GurLiquid),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e = /\+/g;

        function i(t) {
            return o.raw ? t : encodeURIComponent(t)
        }

        function n(t) {
            return i(o.json ? JSON.stringify(t) : String(t))
        }

        function r(i, n) {
            var r = o.raw ? i : function(t) {
                0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return t = decodeURIComponent(t.replace(e, " ")), o.json ? JSON.parse(t) : t
                } catch (t) {}
            }(i);
            return t.isFunction(n) ? n(r) : r
        }
        var o = t.cookie = function(e, s, a) {
            if (arguments.length > 1 && !t.isFunction(s)) {
                if ("number" == typeof(a = t.extend({}, o.defaults, a)).expires) {
                    var l = a.expires,
                        u = a.expires = new Date;
                    u.setMilliseconds(u.getMilliseconds() + 864e5 * l)
                }
                return document.cookie = [i(e), "=", n(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            for (var c, d = e ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; p < f; p++) {
                var g = h[p].split("="),
                    m = (c = g.shift(), o.raw ? c : decodeURIComponent(c)),
                    v = g.join("=");
                if (e === m) {
                    d = r(v, s);
                    break
                }
                e || void 0 === (v = r(v)) || (d[m] = v)
            }
            return d
        };
        o.defaults = {}, t.removeCookie = function(e, i) {
            return t.cookie(e, "", t.extend({}, i, {
                expires: -1
            })), !t.cookie(e)
        }
    }),
    function(gPR) {
        globoPersonalizedRecommendations = function(t) {
            this.apiUrl = t.apiUrl, this.alternateApiUrl = t.alternateApiUrl, this.shop = t.shop, this.shopNumber = t.shopNumber, this.domain = t.domain, this.page = t.page, this.customer = t.customer, this.basis_collection_handle = t.basis_collection_handle, this.translation = t.translation, this.settings = t.settings, this.productBoughtTogether = t.productBoughtTogether, this.productRelated = t.productRelated, this.cart = t.cart, this.discounted_ids = t.discounted_ids, this.discount_min_amount = parseFloat(t.discount_min_amount), this.data = t.data, this.widgets = t.widgets, this.manualRecommendations = t.manualRecommendations, this.boughtTogetherIds = t.boughtTogetherIds, this.trendingProducts = t.trendingProducts, this.recentlyViewedProducts = [], this.view_name = t.view_name, this.cart_properties_name = t.cart_properties_name, this.exclude_tags = [], this.hidden_tags = [], this.visible_tags = [], this.moneyFormat = t.moneyFormat, this.limit = Math.max(this.cart.limit, this.productRelated.limit, this.productBoughtTogether.limit), this.product = t.product || null, this.no_image_url = t.no_image_url, this.relatedProducts = {}
        }, globoPersonalizedRecommendations.prototype.init = function() {
            (new Date).getTime();
            var t = this;
            if (t.settings.exclude_tags && (t.exclude_tags = t.settings.exclude_tags.split(/\r?\n/)), t.settings.hidden_tags && (t.hidden_tags = t.settings.hidden_tags.split(/\r?\n/)), t.settings.visible_tags && (t.visible_tags = t.settings.visible_tags.split(/\r?\n/)), t.parseRecentlyViewedProducts(), t.data.collections && t.data.collections.length && (t.data.collections = t.data.collections.filter(function(t, e, i) {
                    return i.indexOf(t) == e
                })), t.data.tags && t.data.tags.length && (t.data.tags = t.data.tags.filter(function(t, e, i) {
                    return i.indexOf(t) == e
                })), "product" == t.page) {
                var e = !0;
                if (t.visible_tags.length > 0 && 0 == t.visible_tags.filter(function(e) {
                        return t.data.tags.indexOf(e) > -1
                    }).length && (e = !1), t.hidden_tags.length > 0 && t.hidden_tags.filter(function(e) {
                        return t.data.tags.indexOf(e) > -1
                    }).length > 0 && (e = !1), t.productBoughtTogether.enable && e) {
                    t.productBoughtTogether.relatedProducts = [], t.productBoughtTogether.id = "ga-product_bought_together";
                    var i = t.getDeferredStuff(t.productBoughtTogether, t.data);
                    gPR.when.apply(null, i).done(function() {
                        let e = t.getBoxProducts(t.productBoughtTogether, t.data);
                        if (e.length) {
                            t.productBoughtTogether.template.this_item && 1 != t.productBoughtTogether.template.id && t.product.available && e.unshift(t.product);
                            var i = t.buildBoxHTML(t.productBoughtTogether, e),
                                n = function(e) {
                                    gPR("#globoRecommendationsForm, .globoRecommendationsForm").length ? gPR("#globoRecommendationsForm, .globoRecommendationsForm").html(e) : gPR('form[action*="/cart/add"]:visible:first, form[action*="/checkout"]:visible:first').length ? gPR('<div id="productBoughtTogether">' + e + "</div>").insertAfter('form[action*="/cart/add"]:visible:first, form[action*="/checkout"]:visible:first') : gPR(".globoRecommendationsBottom").append('<div id="globoRecommendationsForm">' + e + "</div>"), 1 == parseInt(t.productBoughtTogether.template.id) && t.initOwlCarousel("#ga-product_bought_together")
                                };
                            "complete" == document.readyState ? n(i) : gPR(document).ready(function() {
                                n(i)
                            })
                        }
                    })
                }
                if (t.productRelated.enable && e) {
                    t.productRelated.relatedProducts = [], t.productRelated.id = "ga-product_related";
                    i = t.getDeferredStuff(t.productRelated, t.data);
                    gPR.when.apply(null, i).done(function() {
                        let e = t.getBoxProducts(t.productRelated, t.data);
                        if (e.length) {
                            t.productRelated.template.this_item && 1 != t.productRelated.template.id && t.product.available && e.unshift(t.product);
                            var i = t.buildBoxHTML(t.productRelated, e),
                                n = function(e) {
                                    gPR("#globoRecommendationsFooterCustom, .globoRecommendationsFooterCustom").length ? gPR("#globoRecommendationsFooterCustom, .globoRecommendationsFooterCustom").html(e) : gPR("#globoRecommendationsFooter").length ? gPR(".globoRecommendationsFooter").append('<div id="globoRecommendationsFooter">' + e + "</div>") : gPR(".globoRecommendationsBottom").length && gPR(".globoRecommendationsBottom").append('<div id="globoRecommendationsFooter">' + e + "</div>"), 1 == parseInt(t.productRelated.template.id) && t.initOwlCarousel("#ga-product_related")
                                };
                            "complete" == document.readyState ? n(i) : gPR(document).ready(function() {
                                n(i)
                            })
                        }
                    })
                }
            } else if ("cart" == t.page && t.cart.enable) {
                t.cart.id = "ga-cart", t.cart.relatedProducts = [];
                i = t.getDeferredStuff(t.cart, t.data);
                gPR.when.apply(null, i).done(function() {
                    let e = t.getBoxProducts(t.cart, t.data);
                    if (e.length) {
                        var i = t.buildBoxHTML(t.cart, e),
                            n = function(e) {
                                gPR("#globoCart").length ? gPR("#globoCart").html(e) : gPR("#globoRecommendationsFooterCustom, .globoRecommendationsFooterCustom").length ? gPR("#globoRecommendationsFooterCustom, .globoRecommendationsFooterCustom").html(e) : gPR("#globoRecommendationsFooter").length ? gPR(".globoRecommendationsFooter").append('<div id="globoRecommendationsFooter">' + e + "</div>") : gPR(".globoRecommendationsBottom").length && gPR(".globoRecommendationsBottom").append('<div id="globoRecommendationsFooter">' + e + "</div>"), 1 == parseInt(t.cart.template.id) && t.initOwlCarousel("#ga-cart")
                            };
                        "complete" == document.readyState ? n(i) : gPR(document).ready(function() {
                            n(i)
                        })
                    }
                })
            }
            t.renderWidgets(), t.initEvents(), "product" == t.page && this.addProductToRecentlyViewedProducts(t.product)
        }, globoPersonalizedRecommendations.prototype.parseRecentlyViewedProducts = function() {
            let t = localStorage.getItem("recentlyViewedProducts" + (null != this.customer ? this.customer : ""));
            if (recentlyViewedProducts = t ? JSON.parse(t) : [], null != this.customer) {
                let t = localStorage.getItem("recentlyViewedProducts");
                guestViewedProducts = t ? JSON.parse(t) : [], recentlyViewedProducts = recentlyViewedProducts.concat(guestViewedProducts), localStorage.removeItem("recentlyViewedProducts"), localStorage.setItem("recentlyViewedProducts" + this.customer, JSON.stringify(recentlyViewedProducts))
            }
            this.recentlyViewedProducts = recentlyViewedProducts
        }, globoPersonalizedRecommendations.prototype.addProductToRecentlyViewedProducts = function(t) {
            var e = this;
            0 == t.tags.filter(function(t) {
                return -1 != e.exclude_tags.indexOf(t)
            }).length && (e.recentlyViewedProducts = e.recentlyViewedProducts.filter(function(e, i) {
                return i < 100 && e.handle != t.handle
            }), e.recentlyViewedProducts.unshift(t), localStorage.setItem("recentlyViewedProducts" + (null != e.customer ? e.customer : ""), JSON.stringify(e.recentlyViewedProducts)))
        }, globoPersonalizedRecommendations.prototype.deleteRecentlyViewedProducts = function() {
            localStorage.removeItem("recentlyViewedProducts" + (null != app.customer ? app.customer : ""))
        }, globoPersonalizedRecommendations.prototype.renderWidgets = function() {
            var t = this,
                e = t.exclude_tags.length ? t.exclude_tags.map(t => ' AND -tag:"' + t + '"').join("") : "";
            gPR.each(t.widgets, function(i, n) {
                n.idNumber = n.id, n.id = "wigget_" + n.id;
                var r = "index" == t.page && n.positions.indexOf("index_top") > -1 || "collection" == t.page && n.positions.indexOf("collection_top") > -1 || "product" == t.page && n.positions.indexOf("product_top") > -1 || "cart" == t.page && n.positions.indexOf("cart_top") > -1 || "search" == t.page && n.positions.indexOf("search_top") > -1,
                    o = "index" == t.page && n.positions.indexOf("index_bottom") > -1 || "collection" == t.page && n.positions.indexOf("collection_bottom") > -1 || "product" == t.page && n.positions.indexOf("product_bottom") > -1 || "cart" == t.page && n.positions.indexOf("cart_bottom") > -1 || "search" == t.page && n.positions.indexOf("search_bottom") > -1;
                if (r || o || gPR(".globo_widget_" + n.idNumber).length)
                    if (o && gPR(".globoRecommendationsBottom").first().append('<div class="globo_widget globo_widget_' + n.idNumber + '"></div>'), r && gPR(".globoRecommendationsTop").first().append('<div class="globo_widget globo_widget_' + n.idNumber + '"></div>'), "best_selling" == n.conditions.type) gPR.ajax({
                        url: window.location.origin + "/collections/" + t.basis_collection_handle + "?sort_by=best-selling&view=" + t.view_name,
                        method: "GET",
                        dataType: "html",
                        success: function(e) {
                            if (e.length) {
                                var i = JSON.parse(e);
                                n.random && (i = i.sort(function() {
                                    return .5 - Math.random()
                                })), i = i.filter(function(e) {
                                    return 0 == e.tags.filter(function(e) {
                                        return -1 != t.exclude_tags.indexOf(e)
                                    }).length
                                });
                                var r = t.buildBoxHTML(n, i.slice(0, n.limit));
                                gPR(".globo_widget_" + n.idNumber).html(r), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                            }
                        }
                    });
                    else if ("newest" == n.conditions.type) gPR.ajax({
                    url: window.location.origin + "/collections/" + t.basis_collection_handle + "?sort_by=created-descending&view=" + t.view_name,
                    method: "GET",
                    dataType: "html",
                    success: function(e) {
                        var i = JSON.parse(e);
                        if (n.random && (i = i.sort(function() {
                                return .5 - Math.random()
                            })), (i = i.filter(function(e) {
                                return 0 == e.tags.filter(function(e) {
                                    return -1 != t.exclude_tags.indexOf(e)
                                }).length
                            })).length) {
                            var r = t.buildBoxHTML(n, i.slice(0, n.limit));
                            gPR(".globo_widget_" + n.idNumber).html(r), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                        }
                    }
                });
                else if ("trending" == n.conditions.type) {
                    if (t.trendingProducts.length > 0) {
                        var s = t.trendingProducts.map(t => 'id:"' + t + '"').join(" OR ");
                        gPR.ajax({
                            url: window.location.origin + "/search",
                            method: "POST",
                            dataType: "json",
                            data: {
                                q: s + e,
                                view: t.view_name,
                                type: "product",
                                options: {
                                    unavailable_products: t.settings.sold_out ? "show" : "hide"
                                }
                            },
                            success: function(e) {
                                if (e.length) {
                                    n.random && (e = e.sort(function() {
                                        return .5 - Math.random()
                                    }));
                                    var i = t.buildBoxHTML(n, e.slice(0, n.limit));
                                    gPR(".globo_widget_" + n.idNumber).html(i), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                                }
                            }
                        })
                    }
                } else if ("collection" == n.conditions.type && n.conditions.condition) gPR.ajax({
                    url: window.location.origin + "/collections/" + n.conditions.condition.handle + "?view=" + t.view_name,
                    method: "GET",
                    dataType: "html",
                    success: function(e) {
                        var i = JSON.parse(e);
                        if (n.random && (i = i.sort(function() {
                                return .5 - Math.random()
                            })), (i = i.filter(function(e) {
                                return 0 == e.tags.filter(function(e) {
                                    return -1 != t.exclude_tags.indexOf(e)
                                }).length
                            })).length) {
                            var r = t.buildBoxHTML(n, i.slice(0, n.limit));
                            gPR(".globo_widget_" + n.idNumber).html(r), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                        }
                    }
                });
                else if ("vendor" == n.conditions.type && n.conditions.condition) gPR.ajax({
                    url: window.location.origin + "/search",
                    method: "POST",
                    dataType: "json",
                    data: {
                        q: 'vendor:"' + n.conditions.condition + '"' + e,
                        view: t.view_name,
                        type: "product",
                        options: {
                            unavailable_products: t.settings.sold_out ? "show" : "hide"
                        }
                    },
                    success: function(e) {
                        if (e.length) {
                            n.random && (e = e.sort(function() {
                                return .5 - Math.random()
                            }));
                            var i = t.buildBoxHTML(n, e.slice(0, n.limit));
                            gPR(".globo_widget_" + n.idNumber).html(i), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                        }
                    }
                });
                else if ("type" == n.conditions.type && n.conditions.condition) gPR.ajax({
                    url: window.location.origin + "/search",
                    method: "POST",
                    dataType: "json",
                    data: {
                        q: 'product_type:"' + n.conditions.condition + '"' + e,
                        view: t.view_name,
                        type: "product",
                        options: {
                            unavailable_products: t.settings.sold_out ? "show" : "hide"
                        }
                    },
                    success: function(e) {
                        if (e.length) {
                            n.random && (e = e.sort(function() {
                                return .5 - Math.random()
                            }));
                            var i = t.buildBoxHTML(n, e.slice(0, n.limit));
                            gPR(".globo_widget_" + n.idNumber).html(i), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                        }
                    }
                });
                else if ("tag" == n.conditions.type && n.conditions.condition) gPR.ajax({
                    url: window.location.origin + "/search",
                    method: "POST",
                    dataType: "json",
                    data: {
                        q: 'tag:"' + n.conditions.condition + '"' + e,
                        view: t.view_name,
                        type: "product",
                        options: {
                            unavailable_products: t.settings.sold_out ? "show" : "hide"
                        }
                    },
                    success: function(e) {
                        if (e.length) {
                            n.random && (e = e.sort(function() {
                                return .5 - Math.random()
                            }));
                            var i = t.buildBoxHTML(n, e.slice(0, n.limit));
                            gPR(".globo_widget_" + n.idNumber).html(i), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                        }
                    }
                });
                else if ("recently" == n.conditions.type && t.recentlyViewedProducts.length) {
                    var a = t.buildBoxHTML(n, t.recentlyViewedProducts);
                    gPR(".globo_widget_" + n.idNumber).html(a), 1 == parseInt(n.template.id) && t.initOwlCarousel("#" + n.id)
                }
            })
        }, globoPersonalizedRecommendations.prototype.buildBoxHTML = function(t, e) {
            return GurLiquid.parse(gPR("#globoRecommendationsTemplate").html()).render({
                box: t,
                products: e,
                translation: this.translation,
                settings: this.settings,
                cur_product_id: this.product ? this.product.id : null,
                no_image_url: this.no_image_url
            })
        }, globoPersonalizedRecommendations.prototype.getParameterByName = function(t, e) {
            e = e || window.location.href, t = t.replace(/[\[\]]/g, "\\$&");
            var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        }, globoPersonalizedRecommendations.prototype.addCartCallback = function(t, e) {
            console.log("addCartCallbackhere");
            console.log(this.settings.redirect), this.settings.redirect ? (console.log(e ? window.location.origin + "/discount/" + e + "?redirect=/cart" : window.location.origin + "/cart"), window.location.replace(e ? window.location.origin + "/discount/" + e + "?redirect=/cart" : window.location.origin + "/cart")) : e ? gPR.ajax({
                url: "/discount/" + result.code,
                complete: function() {
                    gPR.ajax({
                        url: "/cart.js",
                        type: "get",
                        dataType: "json",
                        success: function(e) {
                            window.dispatchEvent(new CustomEvent("globoRelatedProductsUpdateCart", {
                                detail: {
                                    cart: e,
                                    ids: t
                                }
                            }))
                        }
                    })
                }
            }) : gPR.ajax({
                url: "/cart.js",
                type: "get",
                dataType: "json",
                success: function(e) {
                    window.dispatchEvent(new CustomEvent("globoRelatedProductsUpdateCart", {
                        detail: {
                            cart: e,
                            ids: t
                        }
                    }))
                }
            })
        }, globoPersonalizedRecommendations.prototype.createDiscountCode = function(t) {
            var e = this,
                i = gPR.cookie("discountCode"),
                n = Math.round((new Date).getTime() / 1e3),
                r = e.discounted_ids.reduce((t, e) => Number(t) + Number(e), 0);
            r = Number(r) + Number(n);
            var o = {
                ids: e.discounted_ids,
                shop: e.shop,
                signature: r,
                timestamp: n,
                amount: e.discount_min_amount
            };
            i && (o.code = i), gPR.ajax({
                url: e.apiUrl + "/createDiscountCode",
                method: "GET",
                dataType: "jsonp",
                data: o,
                success: function(n) {
                    n.success ? (i && n.code == i || gPR.cookie("discountCode", n.code, {
                        expires: 7
                    }), e.addCartCallback(t, n.code)) : e.addCartCallback(t, !1)
                }
            })
        }, globoPersonalizedRecommendations.prototype.owlCarouselFix = function() {
            var t = this,
                e = window.pageYOffset,
                i = e + gPR(window).innerHeight();
            gPR(".ga-carousel").each(function() {
                var n = gPR(this);
                if (t.settings.carousel_autoplay) {
                    var r = n.offset().top,
                        o = n.offset().top + n.outerHeight();
                    i > r && e < o ? n.trigger("play.owl.autoplay") : n.trigger("stop.owl.autoplay")
                }
                var s = 0,
                    a = 0;
                n.find(".ga-product_title, .ga-product_price-container").css({
                    height: "auto",
                    "min-height": "0"
                }), n.find(".ga-product_title").each(function() {
                    s = gPR(this).height() > s ? gPR(this).height() : s
                }), n.find(".ga-product_title").css("min-height", s + "px"), n.find(".ga-product_price-container").each(function() {
                    a = gPR(this).height() > a ? gPR(this).height() : a
                }), n.find(".ga-product_price-container").css("min-height", a + "px"), n.find(".ga-product_variant_select:not(.ga-hide)").length > 0 && n.find(".ga-product_variant_select.ga-hide").addClass("ga-hidden")
            })
        }, globoPersonalizedRecommendations.prototype.calcBoxTotal = function(t) {
            t.find(".selectedItem").each(function() {
                var e = gPR(this);
                e.is(":checked") ? (e.closest("li").removeClass("ga-deactive").find(".ga-product_variant_select").prop("disabled", !1), t.find("#ga-product_" + e.val()).removeClass("ga-deactive")) : (e.closest("li").addClass("ga-deactive").find(".ga-product_variant_select").prop("disabled", !0), t.find("#ga-product_" + e.val()).addClass("ga-deactive"))
            }), 0 == t.find(".selectedItem:checked").length ? t.find(".ga-product-form").addClass("ga-hide") : t.find(".ga-product-form").removeClass("ga-hide");
            var e = 0;
            t.find(".ga-product_variant_select:enabled").each(function() {
                e += gPR(this).is("input") ? gPR(this).data("price") : parseFloat(gPR(this).find("option:selected").data("price"))
            });
            var i = GurLiquid.parse("{{ total_price | money }}").render({
                total_price: e
            });
            t.find(".ga-product_totalprice").html(i)
        }, globoPersonalizedRecommendations.prototype.initOwlCarousel = function(t) {
            var e = this;
            0 == t ? gPR(".ga-carousel").each(function() {
                var t = gPR(this);
                gPR(this).find(".ga-product").length;
                t.gFOwlCarousel({
                    items: e.settings.carousel_items,
                    responsive: {
                        0: {
                            items: e.settings.carousel_items <= 1 ? e.settings.carousel_items : 1
                        },
                        350: {
                            items: e.settings.carousel_items <= 2 ? e.settings.carousel_items : 2
                        },
                        600: {
                            items: e.settings.carousel_items <= 3 ? e.settings.carousel_items : 3
                        },
                        768: {
                            items: e.settings.carousel_items <= 4 ? e.settings.carousel_items : 4
                        },
                        992: {
                            items: e.settings.carousel_items <= 5 ? e.settings.carousel_items : 5
                        },
                        1200: {
                            items: e.settings.carousel_items <= 6 ? e.settings.carousel_items : 6
                        }
                    },
                    responsiveBaseElement: t.closest(".ga-products-box"),
                    nav: !0,
                    dots: !1,
                    loop: e.settings.carousel_loop,
                    autoplay: e.settings.carousel_autoplay,
                    navText: ['<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill-rule="evenodd"></path></svg>', '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16" fill-rule="evenodd"></path></svg>'],
                    autoplayTimeout: 3e3,
                    autoplaySpeed: 1e3,
                    autoplayHoverPause: !0,
                    onInitialized: e.owlCarouselFix(),
                    onResized: e.owlCarouselFix()
                })
            }) : (console.log(t + " .ga-carousel"), gPR(t + " .ga-carousel").gFOwlCarousel({
                items: e.settings.carousel_items,
                responsive: {
                    0: {
                        items: e.settings.carousel_items <= 1 ? e.settings.carousel_items : 1
                    },
                    350: {
                        items: e.settings.carousel_items <= 2 ? e.settings.carousel_items : 2
                    },
                    600: {
                        items: e.settings.carousel_items <= 3 ? e.settings.carousel_items : 3
                    },
                    768: {
                        items: e.settings.carousel_items <= 4 ? e.settings.carousel_items : 4
                    },
                    992: {
                        items: e.settings.carousel_items <= 5 ? e.settings.carousel_items : 5
                    },
                    1200: {
                        items: e.settings.carousel_items <= 6 ? e.settings.carousel_items : 6
                    }
                },
                responsiveBaseElement: gPR(t).closest(".ga-products-box"),
                nav: !0,
                dots: !1,
                loop: e.settings.carousel_loop,
                autoplay: e.settings.carousel_autoplay,
                navText: ['<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill-rule="evenodd"></path></svg>', '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16" fill-rule="evenodd"></path></svg>'],
                autoplayTimeout: 3e3,
                autoplaySpeed: 1e3,
                autoplayHoverPause: !0,
                onInitialized: e.owlCarouselFix(),
                onResized: e.owlCarouselFix()
            }))
        }, globoPersonalizedRecommendations.prototype.initEvents = function() {
            var app = this;
            app.initOwlCarousel(!1), gPR(document).on("change", ".selectedItem", function(t) {
                var e = gPR(t.target).closest(".ga-products-box");
                app.calcBoxTotal(e)
            }), gPR(document).on("change", ".ga-product_variant_select", function(t) {
                var e = gPR(t.target),
                    i = parseFloat(e.find("option:selected").attr("data-price")),
                    n = parseFloat(e.find("option:selected").attr("data-compare_at_price")),
                    r = e.closest(".ga-products-box"),
                    o = e.closest("li"),
                    s = o.data("product-id"),
                    a = e.find("option:selected").data("image");
                if (r.find("img.ga-product_image_" + s).attr("src", a), r.find("div.ga-product_image_" + s).css("background-image", "url(" + a + ")"), o.find(".ga-product_price").html(GurLiquid.parse("{{ price | money }}").render({
                        price: i
                    })), n > 0 && n > i) {
                    var l = GurLiquid.parse("{{ compare_at_price | money }}").render({
                        compare_at_price: n
                    });
                    o.find(".ga-product_oldprice").length > 0 ? o.find(".ga-product_oldprice").html(l) : o.find(".ga-product_price-container").append('<s class="ga-product_oldprice">' + l + "</s>")
                } else o.find(".ga-product_oldprice").remove();
                var u = 0;
                r.find(".ga-product_variant_select:enabled").each(function() {
                    u += gPR(this).is("input") ? gPR(this).data("price") : parseFloat(gPR(this).find("option:selected").data("price"))
                });
                l = GurLiquid.parse("{{ total_price | money }}").render({
                    total_price: u
                });
                r.find(".ga-product_totalprice").html(l)
            }), gPR(document).on("click", ".ga-product", function(t) {
                gPR.post(app.alternateApiUrl + "/statistical/clicked/1", {
                    shop: app.shopNumber
                })
            }), gPR(document).on("click", ".ga-addalltocart", function(event) {
                var button = gPR(event.target),
                    ids = [],
                    items = [],
                    wiggetTitle = button.closest(".ga-products-box").find(".ga-title").text() || "Untitled",
                    wiggetId = button.closest(".ga-products-box").attr("id");
                "ga-product_bought_together" == wiggetId ? wiggetTitle = "Frequently Bought Together" : "ga-product_related" != wiggetId && "ga-cart" != wiggetId || (wiggetTitle = "Related products"), button.closest(".ga-products-box").find(".ga-product_variant_select:enabled").each(function() {
                    var t = gPR(this).val().toString();
                    ids.push(t), items.push({
                        id: t,
                        properties: {
                            [app.cart_properties_name]: wiggetTitle
                        }
                    })
                }), gPR.post(app.alternateApiUrl + "/statistical/added/" + ids.length, {
                    shop: app.shopNumber
                }), gPR.ajax({
                    url: "/cart/add.js",
                    type: "post",
                    dataType: "json",
                    data: {
                        items: items
                    },
                    beforeSend: function(t, e) {
                        button.prop("disabled", !0)
                    },
                    success: function(t) {
                        t.items.forEach(function(t) {
                            -1 == app.discounted_ids.indexOf(t.product_id.toString()) && (app.discounted_ids.push(t.product_id.toString()), app.discount_min_amount += parseFloat(t.final_line_price))
                        }), button.text(button.data("added")), setTimeout(function() {
                            button.text(button.data("add")).prop("disabled", !1)
                        }, 3e3), app.settings.discount.enable ? app.createDiscountCode(ids) : app.addCartCallback(ids, !1), window.dispatchEvent(new Event("globoRelatedProductsAddedProductsToCart"))
                    },
                    error: function error(XMLHttpRequest, textStatus) {
                        var data = eval("(" + XMLHttpRequest.responseText + ")");
                        data.message && (alert(data.message + ": " + data.description), button.prop("disabled", !1))
                    },
                    complete: function() {
                        button.prop("disabled", !1)
                    }
                })
            }), gPR(document).on("click", ".ga-product_addtocart", function(event) {
                var button = gPR(event.target),
                    wiggetTitle = button.closest(".ga-products-box").find(".ga-title").text() || "Untitled",
                    wiggetId = button.closest(".ga-products-box").attr("id");
                "ga-product_bought_together" == wiggetId ? wiggetTitle = "Frequently Bought Together" : "ga-product_related" != wiggetId && "ga-cart" != wiggetId || (wiggetTitle = "Related products");
                var id = button.closest(".ga-product").find(".ga-product_variant_select").val();
                gPR.post(app.alternateApiUrl + "/statistical/added/1", {
                    shop: app.shopNumber
                }), gPR.ajax({
                    url: "/cart/add.js",
                    type: "post",
                    dataType: "json",
                    data: {
                        items: [{
                            id: id,
                            properties: {
                                [app.cart_properties_name]: wiggetTitle
                            }
                        }]
                    },
                    beforeSend: function(t, e) {
                        button.prop("disabled", !0)
                    },
                    success: function(t) {
                        -1 == app.discounted_ids.indexOf(t.items[0].product_id.toString()) && (app.discounted_ids.push(t.items[0].product_id.toString()), app.discount_min_amount += parseFloat(t.items[0].final_line_price)), button.text(button.data("added")), setTimeout(function() {
                            button.text(button.data("add")).prop("disabled", !1)
                        }, 3e3), app.settings.discount.enable ? app.createDiscountCode([id]) : app.addCartCallback([id], !1), window.dispatchEvent(new Event("globoRelatedProductsAddedProductsToCart"))
                    },
                    error: function error(XMLHttpRequest, textStatus) {
                        var data = eval("(" + XMLHttpRequest.responseText + ")");
                        data.message && alert(data.message + ": " + data.description), button.prop("disabled", !1)
                    },
                    complete: function() {
                        button.prop("disabled", !1)
                    }
                })
            });
            var variantIdSelector = gPR('form[action*="/cart/add"]:visible:first [name="id"], form[action*="/checkout"]:visible:first [name="id"]');
            "product" == app.page && variantIdSelector.length && gPR('[data-product-id="' + app.product.id + '"]').length && (gPR('.ga-products-box [data-product-id="' + app.product.id + '"] .ga-product_variant_select').val(variantIdSelector.val()).change(), gPR(document).on("change", 'form[action*="/cart/add"]:visible:first input, form[action*="/checkout"]:visible:first input, form[action*="/cart/add"]:visible:first select:not(.ga-product_variant_select), form[action*="/checkout"]:visible:first select:not(.ga-product_variant_select)', function() {
                gPR('.ga-products-box [data-product-id="' + app.product.id + '"] .ga-product_variant_select').val(variantIdSelector.val()).change()
            })), gPR(window).scroll(function() {
                app.owlCarouselFix(!0, !1)
            })
        }, globoPersonalizedRecommendations.prototype.getBoxProducts = function(t, e = {}) {
            var i = this,
                n = [],
                r = [],
                o = t.conditions;
            return gPR.each(o, function(o, s) {
                if ("product" == i.page && "manual" == s.id && i.product.id && i.manualRecommendations[i.product.id]) gPR.each(i.manualRecommendations[i.product.id], function(o, a) {
                    gPR.each(i.relatedProducts[s.id], function(i, o) {
                        if (!t.random && r.length >= t.limit || t.random && r.length >= 4 * t.limit) return !1;
                        a.toString() == o.id.toString() && -1 == r.indexOf(o.id.toString()) && -1 == e.ids.indexOf(o.id.toString()) && (r.push(o.id.toString()), n.push(o))
                    })
                });
                else {
                    let o = []; - 1 != ["bought_together", "global", "random"].indexOf(s.id) && i.relatedProducts[s.id] ? o = i.relatedProducts[s.id] : "product_bought_together" == t.type && i.productBoughtTogether.relatedProducts[s.id] ? o = i.productBoughtTogether.relatedProducts[s.id] : "product_related" == t.type && i.productRelated.relatedProducts[s.id] ? o = i.productRelated.relatedProducts[s.id] : "cart" == t.type && i.cart.relatedProducts[s.id] && (o = i.cart.relatedProducts[s.id]), o.length && gPR.each(o, function(i, o) {
                        if (!t.random && r.length >= t.limit || t.random && r.length >= 4 * t.limit) return !1; - 1 == r.indexOf(o.id.toString()) && -1 == e.ids.indexOf(o.id.toString()) && (r.push(o.id.toString()), n.push(o))
                    })
                }
            }), n = n.filter(function(t) {
                return 0 == t.tags.filter(function(t) {
                    return -1 != i.exclude_tags.indexOf(t)
                }).length
            }), n = t.random ? i.shuffle(n).slice(0, t.limit) : n.slice(0, t.limit)
        }, globoPersonalizedRecommendations.prototype.getDeferredStuff = function(t, e) {
            var i = this,
                n = [],
                r = i.exclude_tags.length ? i.exclude_tags.map(t => ' AND -tag:"' + t + '"').join("") : "",
                o = t.conditions.filter(function(t) {
                    return t.status
                });
            return console.log(o), gPR.each(o, function(o, s) {
                if ("bought_together" == s.id) {
                    var a = [],
                        l = [];
                    if ("cart" == i.page ? Object.keys(i.boughtTogetherIds).forEach(function(t) {
                            !1 !== i.boughtTogetherIds[t] ? a = a.concat(i.boughtTogetherIds[t]) : l.push(t)
                        }) : "product" == i.page && (!1 !== i.boughtTogetherIds[i.product.id] ? a = a.concat(i.boughtTogetherIds[i.product.id]) : l.push(i.product.id)), a.length) {
                        a = a.map(t => 'id:"' + t + '"');
                        n.push(gPR.ajax({
                            url: window.location.origin + "/search",
                            method: "POST",
                            dataType: "json",
                            data: {
                                q: a.join(" OR ") + r,
                                view: i.view_name,
                                type: "product",
                                options: {
                                    unavailable_products: i.settings.sold_out ? "show" : "hide"
                                }
                            },
                            success: function(t) {
                                i.relatedProducts.hasOwnProperty(s.id) ? i.relatedProducts[s.id] = i.relatedProducts[s.id].concat(t) : i.relatedProducts[s.id] = t
                            }
                        }))
                    }
                    l.length && n.push(gPR.ajax({
                        url: i.apiUrl + "/getBoughtTogetherProducts",
                        method: "GET",
                        dataType: "json",
                        data: {
                            shop: i.shop,
                            product_ids: l,
                            view: i.view_name,
                            limit: 4 * i.limit
                        },
                        success: function(t) {
                            i.relatedProducts.hasOwnProperty(s.id) ? i.relatedProducts[s.id] = i.relatedProducts[s.id].concat(t.data) : i.relatedProducts[s.id] = t.data
                        }
                    }))
                } else if ("manual" == s.id && e.ids.length) {
                    var u = [];
                    if (gPR.each(e.ids, function(t, e) {
                            var n = i.manualRecommendations[e] || [];
                            u = u.concat(n)
                        }), u.length) {
                        u = u.map(t => 'id:"' + t + '"');
                        n.push(gPR.ajax({
                            url: window.location.origin + "/search",
                            method: "POST",
                            dataType: "json",
                            data: {
                                q: u.join(" OR ") + r,
                                view: i.view_name,
                                type: "product",
                                options: {
                                    unavailable_products: i.settings.sold_out ? "show" : "hide"
                                }
                            },
                            success: function(t) {
                                i.relatedProducts[s.id] = t
                            }
                        }))
                    }
                } else if ("vendor" == s.id && e.vendors.length) {
                    var c = [];
                    if ("same" == s.type) c = e.vendors;
                    else if ("related" == s.type && s.rules && s.rules.length)
                        for (var d = 0; d < s.rules.length; d++)
                            if (-1 != e.vendors.indexOf(s.rules[d].vendor) && s.rules[d].related.length) {
                                c = s.rules[d].related;
                                break
                            }
                    c.length && n.push(gPR.ajax({
                        url: window.location.origin + "/search",
                        method: "POST",
                        dataType: "json",
                        data: {
                            q: c.map(t => 'vendor:"' + t + '"').join(" OR ") + r,
                            view: i.view_name,
                            type: "product",
                            options: {
                                unavailable_products: i.settings.sold_out ? "show" : "hide"
                            }
                        },
                        success: function(e) {
                            "product_bought_together" == t.type ? i.productBoughtTogether.relatedProducts[s.id] = e : "product_related" == t.type ? i.productRelated.relatedProducts[s.id] = e : "cart" == t.type && (i.cart.relatedProducts[s.id] = e)
                        }
                    }))
                } else if ("type" == s.id && e.types.length) {
                    var h = [];
                    if ("same" == s.type) h = e.types;
                    else "related" == s.type && s.rules && s.rules.length && s.rules.map(t => {
                        -1 != e.types.indexOf(t.type) && t.related.length && (h = h.concat(t.related))
                    });
                    h.length && n.push(gPR.ajax({
                        url: window.location.origin + "/search",
                        method: "POST",
                        dataType: "json",
                        data: {
                            q: h.map(t => 'product_type:"' + t + '"').join(" OR ") + r,
                            view: i.view_name,
                            type: "product",
                            options: {
                                unavailable_products: i.settings.sold_out ? "show" : "hide"
                            }
                        },
                        success: function(e) {
                            "product_bought_together" == t.type ? i.productBoughtTogether.relatedProducts[s.id] = e : "product_related" == t.type ? i.productRelated.relatedProducts[s.id] = e : "cart" == t.type && (i.cart.relatedProducts[s.id] = e)
                        }
                    }))
                } else if ("collection" == s.id && e.collections.length) {
                    var p = e.collections,
                        f = "";
                    if ("same" == s.type) {
                        if (s.rules && s.rules.length) {
                            s.rules.reverse();
                            for (d = 0; d < s.rules.length; d++)
                                if (-1 != p.indexOf(s.rules[d].handle)) {
                                    f = s.rules[d].handle;
                                    break
                                }
                        }
                        "" == f && (f = p[0])
                    } else if ("related" == s.type && s.rules && s.rules.length)
                        for (d = 0; d < s.rules.length; d++)
                            if (-1 != p.indexOf(s.rules[d].collection.handle)) {
                                f = s.rules[d].related.handle;
                                break
                            }
                    "" != f && n.push(gPR.ajax({
                        url: window.location.origin + "/collections/" + f + "?view=" + i.view_name,
                        method: "GET",
                        dataType: "html",
                        success: function(e) {
                            "product_bought_together" == t.type ? i.productBoughtTogether.relatedProducts[s.id] = JSON.parse(e) : "product_related" == t.type ? i.productRelated.relatedProducts[s.id] = JSON.parse(e) : "cart" == t.type && (i.cart.relatedProducts[s.id] = JSON.parse(e))
                        }
                    }))
                } else if ("tags" == s.id) {
                    if (e.tags.length) {
                        var g = [];
                        if ("same" == s.type) {
                            if (s.rules && s.rules.length) {
                                s.rules.reverse();
                                for (d = 0; d < s.rules.length; d++)
                                    if (-1 != e.tags.indexOf(s.rules[d])) {
                                        g = [s.rules[d]];
                                        break
                                    }
                            }
                            0 == g.length && (g = e.tags)
                        } else if ("related" == s.type && s.rules && s.rules.length)
                            for (d = 0; d < s.rules.length; d++)
                                if (-1 != e.tags.indexOf(s.rules[d].tag)) {
                                    g = g.concat(s.rules[d].related);
                                    break
                                }
                        if (g.length) {
                            if ((g = g.map(t => 'tag:"' + t + '"')).length < 6)(g = i.combine(g, 1)).reverse(), g = g.map(t => t.length > 1 ? "(" + t.join(" AND ") + ")" : t.join(" AND "));
                            n.push(gPR.ajax({
                                url: window.location.origin + "/search",
                                method: "POST",
                                dataType: "json",
                                data: {
                                    q: g.join(" OR ") + r,
                                    view: i.view_name,
                                    type: "product",
                                    options: {
                                        unavailable_products: i.settings.sold_out ? "show" : "hide"
                                    }
                                },
                                success: function(e) {
                                    "product_bought_together" == t.type ? i.productBoughtTogether.relatedProducts[s.id] = e : "product_related" == t.type ? i.productRelated.relatedProducts[s.id] = e : "cart" == t.type && (i.cart.relatedProducts[s.id] = e)
                                }
                            }))
                        }
                    }
                } else "global" == s.id ? n.push(gPR.ajax({
                    url: window.location.origin + "/search",
                    method: "POST",
                    dataType: "json",
                    data: {
                        q: 'tag:"Recommendation" OR tag:"recommendation"' + r,
                        view: i.view_name,
                        type: "product",
                        options: {
                            unavailable_products: i.settings.sold_out ? "show" : "hide"
                        }
                    },
                    success: function(t) {
                        i.relatedProducts[s.id] = t
                    }
                })) : "random" == s.id && n.push(gPR.ajax({
                    url: window.location.origin + "/collections/all?sort_by=created-descending&view=" + i.view_name,
                    method: "GET",
                    dataType: "html",
                    success: function(t) {
                        i.relatedProducts[s.id] = i.shuffle(JSON.parse(t))
                    }
                }))
            }), n
        }, globoPersonalizedRecommendations.prototype.combine = function(t, e) {
            for (var i = function(t, e, n, r) {
                    if (0 != t)
                        for (var o = 0; o < e.length; o++) i(t - 1, e.slice(o + 1), n.concat([e[o]]), r);
                    else n.length > 0 && (r[r.length] = n)
                }, n = [], r = e; r < t.length; r++) i(r, t, [], n);
            return n.push(t), n
        }, globoPersonalizedRecommendations.prototype.shuffle = function(t) {
            var e, i, n;
            for (n = t.length - 1; n > 0; n--) e = Math.floor(Math.random() * (n + 1)), i = t[n], t[n] = t[e], t[e] = i;
            return t
        }
    }(jQuery);