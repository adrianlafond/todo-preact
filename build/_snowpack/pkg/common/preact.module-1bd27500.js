let n; let l; let u; let i; let o; let r; let f; const c = {}; const s = []; const a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i; const h = Array.isArray; function v (n, l) { for (const u in l)n[u] = l[u]; return n } function p (n) { const l = n.parentNode; l && l.removeChild(n) } function y (l, u, t) { let i; let o; let r; const f = {}; for (r in u)r == 'key' ? i = u[r] : r == 'ref' ? o = u[r] : f[r] = u[r]; if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), typeof l === 'function' && l.defaultProps != null) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]); return d(l, f, i, o, null) } function d (n, t, i, o, r) { const f = { type: n, props: t, key: i, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r == null ? ++u : r, __i: -1, __u: 0 }; return r == null && l.vnode != null && l.vnode(f), f } function g (n) { return n.children } function b (n, l) { this.props = n, this.context = l } function m (n, l) { if (l == null) return n.__ ? m(n.__, n.__i + 1) : null; for (var u; l < n.__k.length; l++) if ((u = n.__k[l]) != null && u.__e != null) return u.__e; return typeof n.type === 'function' ? m(n) : null } function k (n) { let l, u; if ((n = n.__) != null && n.__c != null) { for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if ((u = n.__k[l]) != null && u.__e != null) { n.__e = n.__c.base = u.__e; break } return k(n) } } function w (n) { (!n.__d && (n.__d = !0) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x) } function x () { let n, u, t, o, r, e, c, s, a; for (i.sort(f); n = i.shift();)n.__d && (u = i.length, o = void 0, e = (r = (t = n).__v).__e, s = [], a = [], (c = t.__P) && ((o = v({}, r)).__v = r.__v + 1, l.vnode && l.vnode(o), L(c, o, r, t.__n, void 0 !== c.ownerSVGElement, 32 & r.__u ? [e] : null, s, e == null ? m(r) : e, !!(32 & r.__u), a), o.__.__k[o.__i] = o, M(s, o, a), o.__e != e && k(o)), i.length > u && i.sort(f)); x.__r = 0 } function C (n, l, u, t, i, o, r, f, e, a, h) { let v; let p; let y; let d; let _; const g = t && t.__k || s; const b = l.length; for (u.__d = e, P(u, l, g), e = u.__d, v = 0; v < b; v++)(y = u.__k[v]) != null && typeof y !== 'boolean' && typeof y !== 'function' && (p = y.__i === -1 ? c : g[y.__i] || c, y.__i = v, L(n, y, p, i, o, r, f, e, a, h), d = y.__e, y.ref && p.ref != y.ref && (p.ref && z(p.ref, null, y), h.push(y.ref, y.__c || d, y)), _ == null && d != null && (_ = d), 65536 & y.__u || p.__k === y.__k ? e = S(y, e, n) : typeof y.type === 'function' && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609); u.__d = e, u.__e = _ } function P (n, l, u) { let t; let i; let o; let r; let f; const e = l.length; const c = u.length; let s = c; let a = 0; for (n.__k = [], t = 0; t < e; t++)(i = n.__k[t] = (i = l[t]) == null || typeof i === 'boolean' || typeof i === 'function' ? null : typeof i === 'string' || typeof i === 'number' || typeof i === 'bigint' || i.constructor == String ? d(null, i, null, null, i) : h(i) ? d(g, { children: i }, null, null, null) : i.__b > 0 ? d(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = n, i.__b = n.__b + 1, f = H(i, u, r = t + a, s), i.__i = f, o = null, f !== -1 && (s--, (o = u[f]) && (o.__u |= 131072)), o == null || o.__v === null ? (f == -1 && a--, typeof i.type !== 'function' && (i.__u |= 65536)) : f !== r && (f === r + 1 ? a++ : f > r ? s > e - r ? a += f - r : a-- : a = f < r && f == r - 1 ? f - r : 0, f !== t + a && (i.__u |= 65536))) : (o = u[t]) && o.key == null && o.__e && (o.__e == n.__d && (n.__d = m(o)), N(o, o, !1), u[t] = null, s--); if (s) for (t = 0; t < c; t++)(o = u[t]) != null && (131072 & o.__u) == 0 && (o.__e == n.__d && (n.__d = m(o)), N(o, o)) } function S (n, l, u) { let t, i; if (typeof n.type === 'function') { for (t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = S(t[i], l, u)); return l } return n.__e != l && (u.insertBefore(n.__e, l || null), l = n.__e), l && l.nextSibling } function H (n, l, u, t) { const i = n.key; const o = n.type; let r = u - 1; let f = u + 1; let e = l[u]; if (e === null || e && i == e.key && o === e.type) return u; if (t > (e != null && (131072 & e.__u) == 0 ? 1 : 0)) for (;r >= 0 || f < l.length;) { if (r >= 0) { if ((e = l[r]) && (131072 & e.__u) == 0 && i == e.key && o === e.type) return r; r-- } if (f < l.length) { if ((e = l[f]) && (131072 & e.__u) == 0 && i == e.key && o === e.type) return f; f++ } } return -1 } function I (n, l, u) { l[0] === '-' ? n.setProperty(l, u == null ? '' : u) : n[l] = u == null ? '' : typeof u !== 'number' || a.test(l) ? u : u + 'px' } function T (n, l, u, t, i) { let o; n:if (l === 'style') if (typeof u === 'string')n.style.cssText = u; else { if (typeof t === 'string' && (n.style.cssText = t = ''), t) for (l in t)u && l in u || I(n.style, l, ''); if (u) for (l in u)t && u[l] === t[l] || I(n.style, l, u[l]) } else if (l[0] === 'o' && l[1] === 'n')o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, '$1')), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = Date.now(), n.addEventListener(l, o ? D : A, o)) : n.removeEventListener(l, o ? D : A, o); else { if (i)l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's'); else if (l !== 'width' && l !== 'height' && l !== 'href' && l !== 'list' && l !== 'form' && l !== 'tabIndex' && l !== 'download' && l !== 'rowSpan' && l !== 'colSpan' && l !== 'role' && l in n) try { n[l] = u == null ? '' : u; break n } catch (n) {} typeof u === 'function' || (u == null || !1 === u && l[4] !== '-' ? n.removeAttribute(l) : n.setAttribute(l, u)) } } function A (n) { const u = this.l[n.type + !1]; if (n.t) { if (n.t <= u.u) return } else n.t = Date.now(); return u(l.event ? l.event(n) : n) } function D (n) { return this.l[n.type + !0](l.event ? l.event(n) : n) } function L (n, u, t, i, o, r, f, e, c, s) { let a; let p; let y; let d; let _; let m; let k; let w; let x; let P; let S; let $; let H; let I; let T; const A = u.type; if (void 0 !== u.constructor) return null; 128 & t.__u && (c = !!(32 & t.__u), r = [e = u.__e = t.__e]), (a = l.__b) && a(u); n:if (typeof A === 'function') try { if (w = u.props, x = (a = A.contextType) && i[a.__c], P = a ? x ? x.props.value : a.__ : i, t.__c ? k = (p = u.__c = t.__c).__ = p.__E : ('prototype' in A && A.prototype.render ? u.__c = p = new A(w, P) : (u.__c = p = new b(w, P), p.constructor = A, p.render = O), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = P, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), p.__s == null && (p.__s = p.state), A.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = v({}, p.__s)), v(p.__s, A.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y)A.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), p.componentDidMount != null && p.__h.push(p.componentDidMount); else { if (A.getDerivedStateFromProps == null && w !== d && p.componentWillReceiveProps != null && p.componentWillReceiveProps(w, P), !p.__e && (p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(w, p.__s, P) || u.__v === t.__v)) { for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) { n && (n.__ = u) }), S = 0; S < p._sb.length; S++)p.__h.push(p._sb[S]); p._sb = [], p.__h.length && f.push(p); break n }p.componentWillUpdate != null && p.componentWillUpdate(w, p.__s, P), p.componentDidUpdate != null && p.__h.push(function () { p.componentDidUpdate(d, _, m) }) } if (p.context = P, p.props = w, p.__P = n, p.__e = !1, $ = l.__r, H = 0, 'prototype' in A && A.prototype.render) { for (p.state = p.__s, p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), I = 0; I < p._sb.length; I++)p.__h.push(p._sb[I]); p._sb = [] } else do { p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), p.state = p.__s } while (p.__d && ++H < 25); p.state = p.__s, p.getChildContext != null && (i = v(v({}, i), p.getChildContext())), y || p.getSnapshotBeforeUpdate == null || (m = p.getSnapshotBeforeUpdate(d, _)), C(n, h(T = a != null && a.type === g && a.key == null ? a.props.children : a) ? T : [T], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__u &= -161, p.__h.length && f.push(p), k && (p.__E = p.__ = null) } catch (n) { u.__v = null, c || r != null ? (u.__e = e, u.__u |= c ? 160 : 32, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l.__e(n, u, t) } else r == null && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = j(t.__e, u, t, i, o, r, f, c, s); (a = l.diffed) && a(u) } function M (n, u, t) { u.__d = void 0; for (let i = 0; i < t.length; i++)z(t[i], t[++i], t[++i]); l.__c && l.__c(u, n), n.some(function (u) { try { n = u.__h, u.__h = [], n.some(function (n) { n.call(u) }) } catch (n) { l.__e(n, u.__v) } }) } function j (l, u, t, i, o, r, f, e, s) { let a; let v; let y; let d; let _; let g; let b; let k = t.props; const w = u.props; const x = u.type; if (x === 'svg' && (o = !0), r != null) for (a = 0; a < r.length; a++) if ((_ = r[a]) && 'setAttribute' in _ == !!x && (x ? _.localName === x : _.nodeType === 3)) { l = _, r[a] = null; break } if (l == null) { if (x === null) return document.createTextNode(w); l = o ? document.createElementNS('http://www.w3.org/2000/svg', x) : document.createElement(x, w.is && w), r = null, e = !1 } if (x === null)k === w || e && l.data === w || (l.data = w); else { if (r = r && n.call(l.childNodes), k = t.props || c, !e && r != null) for (k = {}, a = 0; a < l.attributes.length; a++)k[(_ = l.attributes[a]).name] = _.value; for (a in k)_ = k[a], a == 'children' || (a == 'dangerouslySetInnerHTML' ? y = _ : a === 'key' || a in w || T(l, a, null, _, o)); for (a in w)_ = w[a], a == 'children' ? d = _ : a == 'dangerouslySetInnerHTML' ? v = _ : a == 'value' ? g = _ : a == 'checked' ? b = _ : a === 'key' || e && typeof _ !== 'function' || k[a] === _ || T(l, a, _, k[a], o); if (v)e || y && (v.__html === y.__html || v.__html === l.innerHTML) || (l.innerHTML = v.__html), u.__k = []; else if (y && (l.innerHTML = ''), C(l, h(d) ? d : [d], u, t, i, o && x !== 'foreignObject', r, f, r ? r[0] : t.__k && m(t, 0), e, s), r != null) for (a = r.length; a--;)r[a] != null && p(r[a]); e || (a = 'value', void 0 !== g && (g !== l[a] || x === 'progress' && !g || x === 'option' && g !== k[a]) && T(l, a, g, k[a], !1), a = 'checked', void 0 !== b && b !== l[a] && T(l, a, b, k[a], !1)) } return l } function z (n, u, t) { try { typeof n === 'function' ? n(u) : n.current = u } catch (n) { l.__e(n, t) } } function N (n, u, t) { let i, o; if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || z(i, null, u)), (i = n.__c) != null) { if (i.componentWillUnmount) try { i.componentWillUnmount() } catch (n) { l.__e(n, u) }i.base = i.__P = null, n.__c = void 0 } if (i = n.__k) for (o = 0; o < i.length; o++)i[o] && N(i[o], u, t || typeof n.type !== 'function'); t || n.__e == null || p(n.__e), n.__ = n.__e = n.__d = void 0 } function O (n, l, u) { return this.constructor(n, u) } function q (u, t, i) { let o, r, f, e; l.__ && l.__(u, t), r = (o = typeof i === 'function') ? null : i && i.__k || t.__k, f = [], e = [], L(t, u = (!o && i || t).__k = y(g, null, [u]), r || c, c, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e) }n = s.slice, l = { __e: function (n, l, u, t) { for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try { if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i } catch (l) { n = l } throw n } }, u = 0, b.prototype.setState = function (n, l) { let u; u = this.__s != null && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), typeof n === 'function' && (n = n(v({}, u), this.props)), n && v(u, n), n != null && this.__v && (l && this._sb.push(l), w(this)) }, b.prototype.forceUpdate = function (n) { this.__v && (this.__e = !0, n && this.__h.push(n), w(this)) }, b.prototype.render = g, i = [], r = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) { return n.__v.__b - l.__v.__b }, x.__r = 0, 0

export { b, g, l, q, y }
