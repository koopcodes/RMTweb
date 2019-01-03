!(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: (e.amplitude = t());
})(this, function() {
	'use strict';
	function e(e, t) {
		return (t = { exports: {} }), e(t, t.exports), t.exports;
	}
	function t(e, t, n) {
		if (!(e < t))
			return e < 1.5 * t
				? Math.floor(e / t) + ' ' + n
				: Math.ceil(e / t) + ' ' + n + 's';
	}
	function n() {
		var e;
		try {
			e = document.cookie;
		} catch (e) {
			return (
				'undefined' != typeof console &&
					'function' == typeof console.error &&
					console.error(e.stack || e),
				{}
			);
		}
		return (function(e) {
			var t,
				n = {},
				r = e.split(/ *; */);
			if ('' == r[0]) return n;
			for (var i = 0; i < r.length; ++i)
				(t = r[i].split('=')), (n[o(t[0])] = o(t[1]));
			return n;
		})(e);
	}
	function r(e) {
		try {
			return encodeURIComponent(e);
		} catch (t) {
			T('error `encode(%o)` - %o', e, t);
		}
	}
	function o(e) {
		try {
			return decodeURIComponent(e);
		} catch (t) {
			T('error `decode(%o)` - %o', e, t);
		}
	}
	function i(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function s(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function a(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function u(e) {
		var t = (this.__data__ = new le(e));
		this.size = t.size;
	}
	function c(e, t, n, r, o) {
		e !== t &&
			Et(
				t,
				function(i, s) {
					if (xe(i)) o || (o = new _t()), Sn(e, t, s, n, c, r, o);
					else {
						var a = r ? r(e[s], i, s + '', e, t, o) : void 0;
						void 0 === a && (a = i), It(e, s, a);
					}
				},
				In
			);
	}
	function p(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	function l(e) {
		switch (typeof e) {
			case 'string':
				return e;
			case 'boolean':
				return e ? 'true' : 'false';
			case 'number':
				return isFinite(e) ? e : '';
			default:
				return '';
		}
	}
	function f(e, t, n, r) {
		return (
			(t = t || '&'),
			(n = n || '='),
			null === e && (e = void 0),
			'object' == typeof e
				? d(Vn(e), function(r) {
						var o = encodeURIComponent(l(r)) + n;
						return Ln(e[r])
							? d(e[r], function(e) {
									return o + encodeURIComponent(l(e));
							  }).join(t)
							: o + encodeURIComponent(l(e[r]));
				  }).join(t)
				: r
				? encodeURIComponent(l(r)) + n + encodeURIComponent(l(e))
				: ''
		);
	}
	function d(e, t) {
		if (e.map) return e.map(t);
		for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
		return n;
	}
	function h(e, t, n, r) {
		(t = t || '&'), (n = n || '=');
		var o = {};
		if ('string' != typeof e || 0 === e.length) return o;
		var i = /\+/g;
		e = e.split(t);
		var s = 1e3;
		r && 'number' == typeof r.maxKeys && (s = r.maxKeys);
		var a = e.length;
		s > 0 && a > s && (a = s);
		for (var u = 0; u < a; ++u) {
			var c,
				l,
				f,
				d,
				h = e[u].replace(i, '%20'),
				g = h.indexOf(n);
			g >= 0
				? ((c = h.substr(0, g)), (l = h.substr(g + 1)))
				: ((c = h), (l = '')),
				(f = decodeURIComponent(c)),
				(d = decodeURIComponent(l)),
				p(o, f) ? (Ln(o[f]) ? o[f].push(d) : (o[f] = [o[f], d])) : (o[f] = d);
		}
		return o;
	}
	var g,
		v =
			'undefined' != typeof window
				? window
				: 'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: {},
		y = (e(function(e, t) {
			(function() {
				function n(e, t) {
					function o(e) {
						if (o[e] !== v) return o[e];
						var n;
						if ('bug-string-char-index' == e) n = 'a' != 'a'[0];
						else if ('json' == e) n = o('json-stringify') && o('json-parse');
						else {
							var r,
								i = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
							if ('json-stringify' == e) {
								var u = t.stringify,
									p = 'function' == typeof u && _;
								if (p) {
									(r = function() {
										return 1;
									}).toJSON = r;
									try {
										p =
											'0' === u(0) &&
											'0' === u(new s()) &&
											'""' == u(new a()) &&
											u(m) === v &&
											u(v) === v &&
											u() === v &&
											'1' === u(r) &&
											'[1]' == u([r]) &&
											'[null]' == u([v]) &&
											'null' == u(null) &&
											'[null,null,null]' == u([v, m, null]) &&
											u({ a: [r, !0, !1, null, '\0\b\n\f\r\t'] }) == i &&
											'1' === u(null, r) &&
											'[\n 1,\n 2\n]' == u([1, 2], null, 1) &&
											'"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) &&
											'"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) &&
											'"-000001-01-01T00:00:00.000Z"' ==
												u(new c(-621987552e5)) &&
											'"1969-12-31T23:59:59.999Z"' == u(new c(-1));
									} catch (e) {
										p = !1;
									}
								}
								n = p;
							}
							if ('json-parse' == e) {
								var l = t.parse;
								if ('function' == typeof l)
									try {
										if (0 === l('0') && !l(!1)) {
											var f = 5 == (r = l(i)).a.length && 1 === r.a[0];
											if (f) {
												try {
													f = !l('"\t"');
												} catch (e) {}
												if (f)
													try {
														f = 1 !== l('01');
													} catch (e) {}
												if (f)
													try {
														f = 1 !== l('1.');
													} catch (e) {}
											}
										}
									} catch (e) {
										f = !1;
									}
								n = f;
							}
						}
						return (o[e] = !!n);
					}
					e || (e = i.Object()), t || (t = i.Object());
					var s = e.Number || i.Number,
						a = e.String || i.String,
						u = e.Object || i.Object,
						c = e.Date || i.Date,
						p = e.SyntaxError || i.SyntaxError,
						l = e.TypeError || i.TypeError,
						f = e.Math || i.Math,
						d = e.JSON || i.JSON;
					'object' == typeof d &&
						d &&
						((t.stringify = d.stringify), (t.parse = d.parse));
					var h,
						g,
						v,
						y = u.prototype,
						m = y.toString,
						_ = new c(-0xc782b5b800cec);
					try {
						_ =
							-109252 == _.getUTCFullYear() &&
							0 === _.getUTCMonth() &&
							1 === _.getUTCDate() &&
							10 == _.getUTCHours() &&
							37 == _.getUTCMinutes() &&
							6 == _.getUTCSeconds() &&
							708 == _.getUTCMilliseconds();
					} catch (e) {}
					if (!o('json')) {
						var b = o('bug-string-char-index');
						if (!_)
							var w = f.floor,
								I = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
								E = function(e, t) {
									return (
										I[t] +
										365 * (e - 1970) +
										w((e - 1969 + (t = +(t > 1))) / 4) -
										w((e - 1901 + t) / 100) +
										w((e - 1601 + t) / 400)
									);
								};
						if (
							((h = y.hasOwnProperty) ||
								(h = function(e) {
									var t,
										n = {};
									return (
										((n.__proto__ = null), (n.__proto__ = { toString: 1 }), n)
											.toString != m
											? (h = function(e) {
													var t = this.__proto__,
														n = e in ((this.__proto__ = null), this);
													return (this.__proto__ = t), n;
											  })
											: ((t = n.constructor),
											  (h = function(e) {
													var n = (this.constructor || t).prototype;
													return e in this && !(e in n && this[e] === n[e]);
											  })),
										(n = null),
										h.call(this, e)
									);
								}),
							(g = function(e, t) {
								var n,
									o,
									i,
									s = 0;
								((n = function() {
									this.valueOf = 0;
								}).prototype.valueOf = 0),
									(o = new n());
								for (i in o) h.call(o, i) && s++;
								return (
									(n = o = null),
									s
										? (g =
												2 == s
													? function(e, t) {
															var n,
																r = {},
																o = '[object Function]' == m.call(e);
															for (n in e)
																(o && 'prototype' == n) ||
																	h.call(r, n) ||
																	!(r[n] = 1) ||
																	!h.call(e, n) ||
																	t(n);
													  }
													: function(e, t) {
															var n,
																r,
																o = '[object Function]' == m.call(e);
															for (n in e)
																(o && 'prototype' == n) ||
																	!h.call(e, n) ||
																	(r = 'constructor' === n) ||
																	t(n);
															(r || h.call(e, (n = 'constructor'))) && t(n);
													  })
										: ((o = [
												'valueOf',
												'toString',
												'toLocaleString',
												'propertyIsEnumerable',
												'isPrototypeOf',
												'hasOwnProperty',
												'constructor',
										  ]),
										  (g = function(e, t) {
												var n,
													i,
													s = '[object Function]' == m.call(e),
													a =
														(!s &&
															'function' != typeof e.constructor &&
															r[typeof e.hasOwnProperty] &&
															e.hasOwnProperty) ||
														h;
												for (n in e)
													(s && 'prototype' == n) || !a.call(e, n) || t(n);
												for (i = o.length; (n = o[--i]); a.call(e, n) && t(n));
										  })),
									g(e, t)
								);
							}),
							!o('json-stringify'))
						) {
							var S = {
									92: '\\\\',
									34: '\\"',
									8: '\\b',
									12: '\\f',
									10: '\\n',
									13: '\\r',
									9: '\\t',
								},
								C = function(e, t) {
									return ('000000' + (t || 0)).slice(-e);
								},
								O = function(e) {
									for (
										var t = '"',
											n = 0,
											r = e.length,
											o = !b || r > 10,
											i = o && (b ? e.split('') : e);
										n < r;
										n++
									) {
										var s = e.charCodeAt(n);
										switch (s) {
											case 8:
											case 9:
											case 10:
											case 12:
											case 13:
											case 34:
											case 92:
												t += S[s];
												break;
											default:
												if (s < 32) {
													t += '\\u00' + C(2, s.toString(16));
													break;
												}
												t += o ? i[n] : e.charAt(n);
										}
									}
									return t + '"';
								},
								N = function(e, t, n, r, o, i, s) {
									var a, u, c, p, f, d, y, _, b, I, S, T, A, j, x, P;
									try {
										a = t[e];
									} catch (e) {}
									if ('object' == typeof a && a)
										if (
											'[object Date]' != (u = m.call(a)) ||
											h.call(a, 'toJSON')
										)
											'function' == typeof a.toJSON &&
												(('[object Number]' != u &&
													'[object String]' != u &&
													'[object Array]' != u) ||
													h.call(a, 'toJSON')) &&
												(a = a.toJSON(e));
										else if (a > -1 / 0 && a < 1 / 0) {
											if (E) {
												for (
													f = w(a / 864e5), c = w(f / 365.2425) + 1970 - 1;
													E(c + 1, 0) <= f;
													c++
												);
												for (
													p = w((f - E(c, 0)) / 30.42);
													E(c, p + 1) <= f;
													p++
												);
												(f = 1 + f - E(c, p)),
													(y =
														w((d = ((a % 864e5) + 864e5) % 864e5) / 36e5) % 24),
													(_ = w(d / 6e4) % 60),
													(b = w(d / 1e3) % 60),
													(I = d % 1e3);
											} else
												(c = a.getUTCFullYear()),
													(p = a.getUTCMonth()),
													(f = a.getUTCDate()),
													(y = a.getUTCHours()),
													(_ = a.getUTCMinutes()),
													(b = a.getUTCSeconds()),
													(I = a.getUTCMilliseconds());
											a =
												(c <= 0 || c >= 1e4
													? (c < 0 ? '-' : '+') + C(6, c < 0 ? -c : c)
													: C(4, c)) +
												'-' +
												C(2, p + 1) +
												'-' +
												C(2, f) +
												'T' +
												C(2, y) +
												':' +
												C(2, _) +
												':' +
												C(2, b) +
												'.' +
												C(3, I) +
												'Z';
										} else a = null;
									if ((n && (a = n.call(t, e, a)), null === a)) return 'null';
									if ('[object Boolean]' == (u = m.call(a))) return '' + a;
									if ('[object Number]' == u)
										return a > -1 / 0 && a < 1 / 0 ? '' + a : 'null';
									if ('[object String]' == u) return O('' + a);
									if ('object' == typeof a) {
										for (j = s.length; j--; ) if (s[j] === a) throw l();
										if (
											(s.push(a),
											(S = []),
											(x = i),
											(i += o),
											'[object Array]' == u)
										) {
											for (A = 0, j = a.length; A < j; A++)
												(T = N(A, a, n, r, o, i, s)),
													S.push(T === v ? 'null' : T);
											P = S.length
												? o
													? '[\n' + i + S.join(',\n' + i) + '\n' + x + ']'
													: '[' + S.join(',') + ']'
												: '[]';
										} else
											g(r || a, function(e) {
												var t = N(e, a, n, r, o, i, s);
												t !== v && S.push(O(e) + ':' + (o ? ' ' : '') + t);
											}),
												(P = S.length
													? o
														? '{\n' + i + S.join(',\n' + i) + '\n' + x + '}'
														: '{' + S.join(',') + '}'
													: '{}');
										return s.pop(), P;
									}
								};
							t.stringify = function(e, t, n) {
								var o, i, s, a;
								if (r[typeof t] && t)
									if ('[object Function]' == (a = m.call(t))) i = t;
									else if ('[object Array]' == a) {
										s = {};
										for (
											var u, c = 0, p = t.length;
											c < p;
											u = t[c++],
												('[object String]' == (a = m.call(u)) ||
													'[object Number]' == a) &&
													(s[u] = 1)
										);
									}
								if (n)
									if ('[object Number]' == (a = m.call(n))) {
										if ((n -= n % 1) > 0)
											for (o = '', n > 10 && (n = 10); o.length < n; o += ' ');
									} else
										'[object String]' == a &&
											(o = n.length <= 10 ? n : n.slice(0, 10));
								return N('', ((u = {}), (u[''] = e), u), i, s, o, '', []);
							};
						}
						if (!o('json-parse')) {
							var T,
								A,
								j = a.fromCharCode,
								x = {
									92: '\\',
									34: '"',
									47: '/',
									98: '\b',
									116: '\t',
									110: '\n',
									102: '\f',
									114: '\r',
								},
								P = function() {
									throw ((T = A = null), p());
								},
								k = function() {
									for (var e, t, n, r, o, i = A, s = i.length; T < s; )
										switch ((o = i.charCodeAt(T))) {
											case 9:
											case 10:
											case 13:
											case 32:
												T++;
												break;
											case 123:
											case 125:
											case 91:
											case 93:
											case 58:
											case 44:
												return (e = b ? i.charAt(T) : i[T]), T++, e;
											case 34:
												for (e = '@', T++; T < s; )
													if ((o = i.charCodeAt(T)) < 32) P();
													else if (92 == o)
														switch ((o = i.charCodeAt(++T))) {
															case 92:
															case 34:
															case 47:
															case 98:
															case 116:
															case 110:
															case 102:
															case 114:
																(e += x[o]), T++;
																break;
															case 117:
																for (t = ++T, n = T + 4; T < n; T++)
																	((o = i.charCodeAt(T)) >= 48 && o <= 57) ||
																		(o >= 97 && o <= 102) ||
																		(o >= 65 && o <= 70) ||
																		P();
																e += j('0x' + i.slice(t, T));
																break;
															default:
																P();
														}
													else {
														if (34 == o) break;
														for (
															o = i.charCodeAt(T), t = T;
															o >= 32 && 92 != o && 34 != o;

														)
															o = i.charCodeAt(++T);
														e += i.slice(t, T);
													}
												if (34 == i.charCodeAt(T)) return T++, e;
												P();
											default:
												if (
													((t = T),
													45 == o && ((r = !0), (o = i.charCodeAt(++T))),
													o >= 48 && o <= 57)
												) {
													for (
														48 == o &&
															(o = i.charCodeAt(T + 1)) >= 48 &&
															o <= 57 &&
															P(),
															r = !1;
														T < s && (o = i.charCodeAt(T)) >= 48 && o <= 57;
														T++
													);
													if (46 == i.charCodeAt(T)) {
														for (
															n = ++T;
															n < s && (o = i.charCodeAt(n)) >= 48 && o <= 57;
															n++
														);
														n == T && P(), (T = n);
													}
													if (101 == (o = i.charCodeAt(T)) || 69 == o) {
														for (
															(43 != (o = i.charCodeAt(++T)) && 45 != o) || T++,
																n = T;
															n < s && (o = i.charCodeAt(n)) >= 48 && o <= 57;
															n++
														);
														n == T && P(), (T = n);
													}
													return +i.slice(t, T);
												}
												if ((r && P(), 'true' == i.slice(T, T + 4)))
													return (T += 4), !0;
												if ('false' == i.slice(T, T + 5)) return (T += 5), !1;
												if ('null' == i.slice(T, T + 4)) return (T += 4), null;
												P();
										}
									return '$';
								},
								R = function(e) {
									var t, n;
									if (('$' == e && P(), 'string' == typeof e)) {
										if ('@' == (b ? e.charAt(0) : e[0])) return e.slice(1);
										if ('[' == e) {
											for (t = []; ']' != (e = k()); n || (n = !0))
												n && (',' == e ? ']' == (e = k()) && P() : P()),
													',' == e && P(),
													t.push(R(e));
											return t;
										}
										if ('{' == e) {
											for (t = {}; '}' != (e = k()); n || (n = !0))
												n && (',' == e ? '}' == (e = k()) && P() : P()),
													(',' != e &&
														'string' == typeof e &&
														'@' == (b ? e.charAt(0) : e[0]) &&
														':' == k()) ||
														P(),
													(t[e.slice(1)] = R(k()));
											return t;
										}
										P();
									}
									return e;
								},
								F = function(e, t, n) {
									var r = U(e, t, n);
									r === v ? delete e[t] : (e[t] = r);
								},
								U = function(e, t, n) {
									var r,
										o = e[t];
									if ('object' == typeof o && o)
										if ('[object Array]' == m.call(o))
											for (r = o.length; r--; ) F(o, r, n);
										else
											g(o, function(e) {
												F(o, e, n);
											});
									return n.call(e, t, o);
								};
							t.parse = function(e, t) {
								var n, r;
								return (
									(T = 0),
									(A = '' + e),
									(n = R(k())),
									'$' != k() && P(),
									(T = A = null),
									t && '[object Function]' == m.call(t)
										? U(((r = {}), (r[''] = n), r), '', t)
										: n
								);
							};
						}
					}
					return (t.runInContext = n), t;
				}
				var r = { function: !0, object: !0 },
					o = r.object && t && !t.nodeType && t,
					i = (r[typeof window] && window) || this,
					s = o && r.object && e && !e.nodeType && 'object' == typeof v && v;
				if (
					(!s || (s.global !== s && s.window !== s && s.self !== s) || (i = s),
					o)
				)
					n(i, o);
				else {
					var a = i.JSON,
						u = i.JSON3,
						c = !1,
						p = n(
							i,
							(i.JSON3 = {
								noConflict: function() {
									return (
										c ||
											((c = !0), (i.JSON = a), (i.JSON3 = u), (a = u = null)),
										p
									);
								},
							})
						);
					i.JSON = { parse: p.parse, stringify: p.stringify };
				}
			}.call(v));
		}),
		{
			DEFAULT_INSTANCE: '$default_instance',
			API_VERSION: 2,
			MAX_STRING_LENGTH: 4096,
			MAX_PROPERTY_KEYS: 1e3,
			IDENTIFY_EVENT: '$identify',
			GROUP_IDENTIFY_EVENT: '$groupidentify',
			LAST_EVENT_ID: 'amplitude_lastEventId',
			LAST_EVENT_TIME: 'amplitude_lastEventTime',
			LAST_IDENTIFY_ID: 'amplitude_lastIdentifyId',
			LAST_SEQUENCE_NUMBER: 'amplitude_lastSequenceNumber',
			SESSION_ID: 'amplitude_sessionId',
			DEVICE_ID: 'amplitude_deviceId',
			OPT_OUT: 'amplitude_optOut',
			USER_ID: 'amplitude_userId',
			COOKIE_TEST: 'amplitude_cookie_test',
			REVENUE_EVENT: 'revenue_amount',
			REVENUE_PRODUCT_ID: '$productId',
			REVENUE_QUANTITY: '$quantity',
			REVENUE_PRICE: '$price',
			REVENUE_REVENUE_TYPE: '$revenueType',
			AMP_DEVICE_ID_PARAM: 'amp_device_id',
		}),
		m = {
			encode: function(e) {
				for (var t = '', n = 0; n < e.length; n++) {
					var r = e.charCodeAt(n);
					r < 128
						? (t += String.fromCharCode(r))
						: r > 127 && r < 2048
						? ((t += String.fromCharCode((r >> 6) | 192)),
						  (t += String.fromCharCode((63 & r) | 128)))
						: ((t += String.fromCharCode((r >> 12) | 224)),
						  (t += String.fromCharCode(((r >> 6) & 63) | 128)),
						  (t += String.fromCharCode((63 & r) | 128)));
				}
				return t;
			},
			decode: function(e) {
				for (var t = '', n = 0, r = 0, o = 0, i = 0; n < e.length; )
					(r = e.charCodeAt(n)) < 128
						? ((t += String.fromCharCode(r)), n++)
						: r > 191 && r < 224
						? ((o = e.charCodeAt(n + 1)),
						  (t += String.fromCharCode(((31 & r) << 6) | (63 & o))),
						  (n += 2))
						: ((o = e.charCodeAt(n + 1)),
						  (i = e.charCodeAt(n + 2)),
						  (t += String.fromCharCode(
								((15 & r) << 12) | ((63 & o) << 6) | (63 & i)
						  )),
						  (n += 3));
				return t;
			},
		},
		_ = {
			_keyStr:
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			encode: function(e) {
				try {
					if (window.btoa && window.atob)
						return window.btoa(unescape(encodeURIComponent(e)));
				} catch (e) {}
				return _._encode(e);
			},
			_encode: function(e) {
				var t,
					n,
					r,
					o,
					i,
					s,
					a,
					u = '',
					c = 0;
				for (e = m.encode(e); c < e.length; )
					(o = (t = e.charCodeAt(c++)) >> 2),
						(i = ((3 & t) << 4) | ((n = e.charCodeAt(c++)) >> 4)),
						(s = ((15 & n) << 2) | ((r = e.charCodeAt(c++)) >> 6)),
						(a = 63 & r),
						isNaN(n) ? (s = a = 64) : isNaN(r) && (a = 64),
						(u =
							u +
							_._keyStr.charAt(o) +
							_._keyStr.charAt(i) +
							_._keyStr.charAt(s) +
							_._keyStr.charAt(a));
				return u;
			},
			decode: function(e) {
				try {
					if (window.btoa && window.atob)
						return decodeURIComponent(escape(window.atob(e)));
				} catch (e) {}
				return _._decode(e);
			},
			_decode: function(e) {
				var t,
					n,
					r,
					o,
					i,
					s,
					a = '',
					u = 0;
				for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ''); u < e.length; )
					(t =
						(_._keyStr.indexOf(e.charAt(u++)) << 2) |
						((o = _._keyStr.indexOf(e.charAt(u++))) >> 4)),
						(n =
							((15 & o) << 4) | ((i = _._keyStr.indexOf(e.charAt(u++))) >> 2)),
						(r = ((3 & i) << 6) | (s = _._keyStr.indexOf(e.charAt(u++)))),
						(a += String.fromCharCode(t)),
						64 !== i && (a += String.fromCharCode(n)),
						64 !== s && (a += String.fromCharCode(r));
				return (a = m.decode(a));
			},
		},
		b = e(function(e, t) {
			(t.parse = function(e) {
				var t = document.createElement('a');
				return (
					(t.href = e),
					{
						href: t.href,
						host: t.host || location.host,
						port:
							'0' === t.port || '' === t.port
								? (function(e) {
										switch (e) {
											case 'http:':
												return 80;
											case 'https:':
												return 443;
											default:
												return location.port;
										}
								  })(t.protocol)
								: t.port,
						hash: t.hash,
						hostname: t.hostname || location.hostname,
						pathname:
							'/' != t.pathname.charAt(0) ? '/' + t.pathname : t.pathname,
						protocol:
							t.protocol && ':' != t.protocol ? t.protocol : location.protocol,
						search: t.search,
						query: t.search.slice(1),
					}
				);
			}),
				(t.isAbsolute = function(e) {
					return 0 == e.indexOf('//') || !!~e.indexOf('://');
				}),
				(t.isRelative = function(e) {
					return !t.isAbsolute(e);
				}),
				(t.isCrossDomain = function(e) {
					e = t.parse(e);
					var n = t.parse(window.location.href);
					return (
						e.hostname !== n.hostname ||
						e.port !== n.port ||
						e.protocol !== n.protocol
					);
				});
		}),
		w = 1e3,
		I = 60 * w,
		E = 60 * I,
		S = 24 * E,
		C = 365.25 * S,
		O = function(e, n) {
			n = n || {};
			var r = typeof e;
			if ('string' === r && e.length > 0)
				return (function(e) {
					if (!((e = String(e)).length > 100)) {
						var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
							e
						);
						if (t) {
							var n = parseFloat(t[1]);
							switch ((t[2] || 'ms').toLowerCase()) {
								case 'years':
								case 'year':
								case 'yrs':
								case 'yr':
								case 'y':
									return n * C;
								case 'days':
								case 'day':
								case 'd':
									return n * S;
								case 'hours':
								case 'hour':
								case 'hrs':
								case 'hr':
								case 'h':
									return n * E;
								case 'minutes':
								case 'minute':
								case 'mins':
								case 'min':
								case 'm':
									return n * I;
								case 'seconds':
								case 'second':
								case 'secs':
								case 'sec':
								case 's':
									return n * w;
								case 'milliseconds':
								case 'millisecond':
								case 'msecs':
								case 'msec':
								case 'ms':
									return n;
								default:
									return;
							}
						}
					}
				})(e);
			if ('number' === r && !1 === isNaN(e))
				return n.long
					? (function(e) {
							return (
								t(e, S, 'day') ||
								t(e, E, 'hour') ||
								t(e, I, 'minute') ||
								t(e, w, 'second') ||
								e + ' ms'
							);
					  })(e)
					: (function(e) {
							return e >= S
								? Math.round(e / S) + 'd'
								: e >= E
								? Math.round(e / E) + 'h'
								: e >= I
								? Math.round(e / I) + 'm'
								: e >= w
								? Math.round(e / w) + 's'
								: e + 'ms';
					  })(e);
			throw new Error(
				'val is not a non-empty string or a valid number. val=' +
					JSON.stringify(e)
			);
		},
		N = e(function(e, t) {
			function n(e) {
				function n() {
					if (n.enabled) {
						var e = n,
							r = +new Date(),
							i = r - (o || r);
						(e.diff = i), (e.prev = o), (e.curr = r), (o = r);
						for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
							s[a] = arguments[a];
						(s[0] = t.coerce(s[0])), 'string' != typeof s[0] && s.unshift('%O');
						var u = 0;
						(s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
							if ('%%' === n) return n;
							u++;
							var o = t.formatters[r];
							if ('function' == typeof o) {
								var i = s[u];
								(n = o.call(e, i)), s.splice(u, 1), u--;
							}
							return n;
						})),
							t.formatArgs.call(e, s);
						(n.log || t.log || console.log.bind(console)).apply(e, s);
					}
				}
				var o;
				return (
					(n.namespace = e),
					(n.enabled = t.enabled(e)),
					(n.useColors = t.useColors()),
					(n.color = (function(e) {
						var n,
							r = 0;
						for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
						return t.colors[Math.abs(r) % t.colors.length];
					})(e)),
					(n.destroy = r),
					'function' == typeof t.init && t.init(n),
					t.instances.push(n),
					n
				);
			}
			function r() {
				var e = t.instances.indexOf(this);
				return -1 !== e && (t.instances.splice(e, 1), !0);
			}
			((t = e.exports = n.debug = n.default = n).coerce = function(e) {
				return e instanceof Error ? e.stack || e.message : e;
			}),
				(t.disable = function() {
					t.enable('');
				}),
				(t.enable = function(e) {
					t.save(e), (t.names = []), (t.skips = []);
					var n,
						r = ('string' == typeof e ? e : '').split(/[\s,]+/),
						o = r.length;
					for (n = 0; n < o; n++)
						r[n] &&
							('-' === (e = r[n].replace(/\*/g, '.*?'))[0]
								? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
								: t.names.push(new RegExp('^' + e + '$')));
					for (n = 0; n < t.instances.length; n++) {
						var i = t.instances[n];
						i.enabled = t.enabled(i.namespace);
					}
				}),
				(t.enabled = function(e) {
					if ('*' === e[e.length - 1]) return !0;
					var n, r;
					for (n = 0, r = t.skips.length; n < r; n++)
						if (t.skips[n].test(e)) return !1;
					for (n = 0, r = t.names.length; n < r; n++)
						if (t.names[n].test(e)) return !0;
					return !1;
				}),
				(t.humanize = O),
				(t.instances = []),
				(t.names = []),
				(t.skips = []),
				(t.formatters = {});
		}),
		T = e(function(e, t) {
			function n() {
				var e;
				try {
					e = t.storage.debug;
				} catch (e) {}
				return (
					!e &&
						'undefined' != typeof process &&
						'env' in process &&
						(e = process.env.DEBUG),
					e
				);
			}
			((t = e.exports = N).log = function() {
				return (
					'object' == typeof console &&
					console.log &&
					Function.prototype.apply.call(console.log, console, arguments)
				);
			}),
				(t.formatArgs = function(e) {
					var n = this.useColors;
					if (
						((e[0] =
							(n ? '%c' : '') +
							this.namespace +
							(n ? ' %c' : ' ') +
							e[0] +
							(n ? '%c ' : ' ') +
							'+' +
							t.humanize(this.diff)),
						n)
					) {
						var r = 'color: ' + this.color;
						e.splice(1, 0, r, 'color: inherit');
						var o = 0,
							i = 0;
						e[0].replace(/%[a-zA-Z%]/g, function(e) {
							'%%' !== e && (o++, '%c' === e && (i = o));
						}),
							e.splice(i, 0, r);
					}
				}),
				(t.save = function(e) {
					try {
						null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
					} catch (e) {}
				}),
				(t.load = n),
				(t.useColors = function() {
					return (
						!(
							'undefined' == typeof window ||
							!window.process ||
							'renderer' !== window.process.type
						) ||
						(('undefined' == typeof navigator ||
							!navigator.userAgent ||
							!navigator.userAgent
								.toLowerCase()
								.match(/(edge|trident)\/(\d+)/)) &&
							(('undefined' != typeof document &&
								document.documentElement &&
								document.documentElement.style &&
								document.documentElement.style.WebkitAppearance) ||
								('undefined' != typeof window &&
									window.console &&
									(window.console.firebug ||
										(window.console.exception && window.console.table))) ||
								('undefined' != typeof navigator &&
									navigator.userAgent &&
									navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
									parseInt(RegExp.$1, 10) >= 31) ||
								('undefined' != typeof navigator &&
									navigator.userAgent &&
									navigator.userAgent
										.toLowerCase()
										.match(/applewebkit\/(\d+)/))))
					);
				}),
				(t.storage =
					'undefined' != typeof chrome && void 0 !== chrome.storage
						? chrome.storage.local
						: (function() {
								try {
									return window.localStorage;
								} catch (e) {}
						  })()),
				(t.colors = [
					'#0000CC',
					'#0000FF',
					'#0033CC',
					'#0033FF',
					'#0066CC',
					'#0066FF',
					'#0099CC',
					'#0099FF',
					'#00CC00',
					'#00CC33',
					'#00CC66',
					'#00CC99',
					'#00CCCC',
					'#00CCFF',
					'#3300CC',
					'#3300FF',
					'#3333CC',
					'#3333FF',
					'#3366CC',
					'#3366FF',
					'#3399CC',
					'#3399FF',
					'#33CC00',
					'#33CC33',
					'#33CC66',
					'#33CC99',
					'#33CCCC',
					'#33CCFF',
					'#6600CC',
					'#6600FF',
					'#6633CC',
					'#6633FF',
					'#66CC00',
					'#66CC33',
					'#9900CC',
					'#9900FF',
					'#9933CC',
					'#9933FF',
					'#99CC00',
					'#99CC33',
					'#CC0000',
					'#CC0033',
					'#CC0066',
					'#CC0099',
					'#CC00CC',
					'#CC00FF',
					'#CC3300',
					'#CC3333',
					'#CC3366',
					'#CC3399',
					'#CC33CC',
					'#CC33FF',
					'#CC6600',
					'#CC6633',
					'#CC9900',
					'#CC9933',
					'#CCCC00',
					'#CCCC33',
					'#FF0000',
					'#FF0033',
					'#FF0066',
					'#FF0099',
					'#FF00CC',
					'#FF00FF',
					'#FF3300',
					'#FF3333',
					'#FF3366',
					'#FF3399',
					'#FF33CC',
					'#FF33FF',
					'#FF6600',
					'#FF6633',
					'#FF9900',
					'#FF9933',
					'#FFCC00',
					'#FFCC33',
				]),
				(t.formatters.j = function(e) {
					try {
						return JSON.stringify(e);
					} catch (e) {
						return '[UnexpectedJSONParseError]: ' + e.message;
					}
				}),
				t.enable(n());
		})('cookie'),
		A = function(e, t, o) {
			switch (arguments.length) {
				case 3:
				case 2:
					return (function(e, t, n) {
						n = n || {};
						var o = r(e) + '=' + r(t);
						null == t && (n.maxage = -1),
							n.maxage && (n.expires = new Date(+new Date() + n.maxage)),
							n.path && (o += '; path=' + n.path),
							n.domain && (o += '; domain=' + n.domain),
							n.expires && (o += '; expires=' + n.expires.toUTCString()),
							n.secure && (o += '; secure'),
							(document.cookie = o);
					})(e, t, o);
				case 1:
					return (function(e) {
						return n()[e];
					})(e);
				default:
					return n();
			}
		},
		j = e(function(e, t) {
			function n(e) {
				for (var n = t.cookie, r = t.levels(e), o = 0; o < r.length; ++o) {
					var i = r[o],
						s = { domain: '.' + i };
					if ((n('__tld__', 1, s), n('__tld__')))
						return n('__tld__', null, s), i;
				}
				return '';
			}
			var r = b.parse;
			(n.levels = function(e) {
				var t = r(e).hostname.split('.'),
					n = t[t.length - 1],
					o = [];
				if (4 === t.length && n === parseInt(n, 10)) return o;
				if (t.length <= 1) return o;
				for (var i = t.length - 2; i >= 0; --i) o.push(t.slice(i).join('.'));
				return o;
			}),
				(n.cookie = A),
				(t = e.exports = n);
		}),
		x =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function(e) {
						return typeof e;
				  }
				: function(e) {
						return e &&
							'function' == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  },
		P = Object.prototype.toString,
		k = function(e) {
			switch (P.call(e)) {
				case '[object Date]':
					return 'date';
				case '[object RegExp]':
					return 'regexp';
				case '[object Arguments]':
					return 'arguments';
				case '[object Array]':
					return 'array';
				case '[object Error]':
					return 'error';
			}
			return null === e
				? 'null'
				: void 0 === e
				? 'undefined'
				: e != e
				? 'nan'
				: e && 1 === e.nodeType
				? 'element'
				: 'undefined' != typeof Buffer &&
				  'function' == typeof Buffer.isBuffer &&
				  Buffer.isBuffer(e)
				? 'buffer'
				: void 0 ===
				  (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
				? 'undefined'
				: x(e);
		},
		R = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
		F = R.WARN,
		U = {
			error: function(e) {
				F >= R.ERROR && D(e);
			},
			warn: function(e) {
				F >= R.WARN && D(e);
			},
			info: function(e) {
				F >= R.INFO && D(e);
			},
		},
		D = function(e) {
			try {
				console.log('[Amplitude] ' + e);
			} catch (e) {}
		},
		q = function(e) {
			return 'string' === k(e) && e.length > y.MAX_STRING_LENGTH
				? e.substring(0, y.MAX_STRING_LENGTH)
				: e;
		},
		M = function(e) {
			var t = k(e);
			if ('object' !== t)
				return (
					U.error(
						'Error: invalid properties format. Expecting Javascript object, received ' +
							t +
							', ignoring'
					),
					{}
				);
			if (Object.keys(e).length > y.MAX_PROPERTY_KEYS)
				return (
					U.error('Error: too many properties (more than 1000), ignoring'), {}
				);
			var n = {};
			for (var r in e)
				if (e.hasOwnProperty(r)) {
					var o = r,
						i = k(o);
					'string' !== i &&
						((o = String(o)),
						U.warn(
							'WARNING: Non-string property key, received type ' +
								i +
								', coercing to string "' +
								o +
								'"'
						));
					var s = V(o, e[r]);
					null !== s && (n[o] = s);
				}
			return n;
		},
		L = [
			'null',
			'nan',
			'undefined',
			'function',
			'arguments',
			'regexp',
			'element',
		],
		V = function e(t, n) {
			var r = k(n);
			if (-1 !== L.indexOf(r))
				U.warn(
					'WARNING: Property key "' +
						t +
						'" with invalid value type ' +
						r +
						', ignoring'
				),
					(n = null);
			else if ('error' === r)
				(n = String(n)),
					U.warn(
						'WARNING: Property key "' +
							t +
							'" with value type error, coercing to ' +
							n
					);
			else if ('array' === r) {
				for (var o = [], i = 0; i < n.length; i++) {
					var s = n[i],
						a = k(s);
					'array' !== a && 'object' !== a
						? o.push(e(t, s))
						: U.warn(
								'WARNING: Cannot have ' +
									a +
									' nested in an array property value, skipping'
						  );
				}
				n = o;
			} else 'object' === r && (n = M(n));
			return n;
		},
		z = function(e, t) {
			var n = k(t);
			if ('string' === n) return t;
			if ('date' === n || 'number' === n || 'boolean' === n)
				return (
					(t = String(t)),
					U.warn(
						'WARNING: Non-string groupName, received type ' +
							n +
							', coercing to string "' +
							t +
							'"'
					),
					t
				);
			if ('array' === n) {
				for (var r = [], o = 0; o < t.length; o++) {
					var i = t[o],
						s = k(i);
					'array' !== s && 'object' !== s
						? 'string' === s
							? r.push(i)
							: ('date' !== s && 'number' !== s && 'boolean' !== s) ||
							  ((i = String(i)),
							  U.warn(
									'WARNING: Non-string groupName, received type ' +
										s +
										', coercing to string "' +
										i +
										'"'
							  ),
							  r.push(i))
						: U.warn('WARNING: Skipping nested ' + s + ' in array groupName');
				}
				return r;
			}
			U.warn(
				'WARNING: Non-string groupName, received type ' +
					n +
					'. Please use strings or array of strings for groupName'
			);
		},
		G = {
			setLogLevel: function(e) {
				F = R[e] || F;
			},
			getLogLevel: function() {
				return F;
			},
			log: U,
			isEmptyString: function(e) {
				return !e || 0 === e.length;
			},
			getQueryParam: function(e, t) {
				e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
				var n = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(t);
				return null === n
					? void 0
					: decodeURIComponent(n[1].replace(/\+/g, ' '));
			},
			sessionStorageEnabled: function() {
				try {
					if (window.sessionStorage) return !0;
				} catch (e) {}
				return !1;
			},
			truncate: function e(t) {
				if ('array' === k(t)) for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
				else if ('object' === k(t))
					for (var r in t) t.hasOwnProperty(r) && (t[r] = e(t[r]));
				else t = q(t);
				return t;
			},
			validateGroups: function(e) {
				var t = k(e);
				if ('object' !== t)
					return (
						U.error(
							'Error: invalid groups format. Expecting Javascript object, received ' +
								t +
								', ignoring'
						),
						{}
					);
				var n = {};
				for (var r in e)
					if (e.hasOwnProperty(r)) {
						var o = r,
							i = k(o);
						'string' !== i &&
							((o = String(o)),
							U.warn(
								'WARNING: Non-string groupType, received type ' +
									i +
									', coercing to string "' +
									o +
									'"'
							));
						var s = z(o, e[r]);
						null !== s && (n[o] = s);
					}
				return n;
			},
			validateInput: function(e, t, n) {
				return (
					k(e) === n ||
					(U.error(
						'Invalid ' +
							t +
							' input type. Expected ' +
							n +
							' but received ' +
							k(e)
					),
					!1)
				);
			},
			validateProperties: M,
		},
		B = { expirationDays: void 0, domain: void 0 },
		K = function(e) {
			var t = '';
			return (
				B.domain &&
					(t = '.' === B.domain.charAt(0) ? B.domain.substring(1) : B.domain),
				e + t
			);
		},
		$ = function(e) {
			try {
				for (
					var t = K(e) + '=', n = document.cookie.split(';'), r = null, o = 0;
					o < n.length;
					o++
				) {
					for (var i = n[o]; ' ' === i.charAt(0); )
						i = i.substring(1, i.length);
					if (0 === i.indexOf(t)) {
						r = i.substring(t.length, i.length);
						break;
					}
				}
				return r ? JSON.parse(_.decode(r)) : null;
			} catch (e) {
				return null;
			}
		},
		J = function(e, t) {
			try {
				return W(K(e), _.encode(JSON.stringify(t)), B), !0;
			} catch (e) {
				return !1;
			}
		},
		W = function(e, t, n) {
			var r = null !== t ? n.expirationDays : -1;
			if (r) {
				var o = new Date();
				o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), (r = o);
			}
			var i = e + '=' + t;
			r && (i += '; expires=' + r.toUTCString()),
				(i += '; path=/'),
				n.domain && (i += '; domain=' + n.domain),
				(document.cookie = i);
		},
		Y = function(e) {
			try {
				return W(K(e), null, B), !0;
			} catch (e) {
				return !1;
			}
		},
		Q = {
			reset: function() {
				B = { expirationDays: void 0, domain: void 0 };
			},
			options: function(e) {
				if (0 === arguments.length) return B;
				(e = e || {}), (B.expirationDays = e.expirationDays);
				var t = G.isEmptyString(e.domain)
						? '.' + j(window.location.href)
						: e.domain,
					n = Math.random();
				(B.domain = t), J('amplitude_test', n);
				var r = $('amplitude_test');
				(r && r === n) || (t = null), Y('amplitude_test'), (B.domain = t);
			},
			get: $,
			set: J,
			remove: Y,
		};
	if (
		(function() {
			var e,
				t = new Date();
			try {
				return (
					window.localStorage.setItem(t, t),
					(e = window.localStorage.getItem(t) === String(t)),
					window.localStorage.removeItem(t),
					e
				);
			} catch (e) {}
			return !1;
		})()
	)
		g = window.localStorage;
	else if (window.globalStorage)
		try {
			g = window.globalStorage[window.location.hostname];
		} catch (e) {}
	else {
		var X = document.createElement('div'),
			H = 'localStorage';
		(X.style.display = 'none'),
			document.getElementsByTagName('head')[0].appendChild(X),
			X.addBehavior &&
				(X.addBehavior('#default#userdata'),
				(g = {
					length: 0,
					setItem: function(e, t) {
						X.load(H),
							X.getAttribute(e) || this.length++,
							X.setAttribute(e, t),
							X.save(H);
					},
					getItem: function(e) {
						return X.load(H), X.getAttribute(e);
					},
					removeItem: function(e) {
						X.load(H),
							X.getAttribute(e) && this.length--,
							X.removeAttribute(e),
							X.save(H);
					},
					clear: function() {
						X.load(H);
						for (
							var e, t = 0;
							(e = X.XMLDocument.documentElement.attributes[t++]);

						)
							X.removeAttribute(e.name);
						X.save(H), (this.length = 0);
					},
					key: function(e) {
						return X.load(H), X.XMLDocument.documentElement.attributes[e];
					},
				}),
				X.load(H),
				(g.length = X.XMLDocument.documentElement.attributes.length));
	}
	g ||
		(g = {
			length: 0,
			setItem: function(e, t) {},
			getItem: function(e) {},
			removeItem: function(e) {},
			clear: function() {},
			key: function(e) {},
		});
	var Z = g,
		ee = function() {
			this.storage = null;
		};
	(ee.prototype._cookiesEnabled = function() {
		var e,
			t = String(new Date());
		try {
			return (
				Q.set(y.COOKIE_TEST, t),
				(e = Q.get(y.COOKIE_TEST) === t),
				Q.remove(y.COOKIE_TEST),
				e
			);
		} catch (e) {}
		return !1;
	}),
		(ee.prototype.getStorage = function() {
			if (null !== this.storage) return this.storage;
			if (this._cookiesEnabled()) this.storage = Q;
			else {
				this.storage = {
					_options: { expirationDays: void 0, domain: void 0 },
					reset: function() {
						this._options = { expirationDays: void 0, domain: void 0 };
					},
					options: function(e) {
						return 0 === arguments.length
							? this._options
							: ((e = e || {}),
							  (this._options.expirationDays =
									e.expirationDays || this._options.expirationDays),
							  (this._options.domain =
									e.domain || this._options.domain || window.location.hostname),
							  this._options);
					},
					get: function(e) {
						try {
							return JSON.parse(Z.getItem('amp_cookiestore_' + e));
						} catch (e) {}
						return null;
					},
					set: function(e, t) {
						try {
							return Z.setItem('amp_cookiestore_' + e, JSON.stringify(t)), !0;
						} catch (e) {}
						return !1;
					},
					remove: function(e) {
						try {
							Z.removeItem('amp_cookiestore_' + e);
						} catch (e) {
							return !1;
						}
					},
				};
			}
			return this.storage;
		});
	var te = function() {
		(this.userPropertiesOperations = {}), (this.properties = []);
	};
	(te.prototype.add = function(e, t) {
		return (
			'number' === k(t) || 'string' === k(t)
				? this._addOperation('$add', e, t)
				: G.log.error(
						'Unsupported type for value: ' +
							k(t) +
							', expecting number or string'
				  ),
			this
		);
	}),
		(te.prototype.append = function(e, t) {
			return this._addOperation('$append', e, t), this;
		}),
		(te.prototype.clearAll = function() {
			return Object.keys(this.userPropertiesOperations).length > 0
				? (this.userPropertiesOperations.hasOwnProperty('$clearAll') ||
						G.log.error(
							'Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll'
						),
				  this)
				: ((this.userPropertiesOperations.$clearAll = '-'), this);
		}),
		(te.prototype.prepend = function(e, t) {
			return this._addOperation('$prepend', e, t), this;
		}),
		(te.prototype.set = function(e, t) {
			return this._addOperation('$set', e, t), this;
		}),
		(te.prototype.setOnce = function(e, t) {
			return this._addOperation('$setOnce', e, t), this;
		}),
		(te.prototype.unset = function(e) {
			return this._addOperation('$unset', e, '-'), this;
		}),
		(te.prototype._addOperation = function(e, t, n) {
			this.userPropertiesOperations.hasOwnProperty('$clearAll')
				? G.log.error(
						'This identify already contains a $clearAll operation, skipping operation ' +
							e
				  )
				: -1 === this.properties.indexOf(t)
				? (this.userPropertiesOperations.hasOwnProperty(e) ||
						(this.userPropertiesOperations[e] = {}),
				  (this.userPropertiesOperations[e][t] = n),
				  this.properties.push(t))
				: G.log.error(
						'User property "' +
							t +
							'" already used in this identify, skipping operation ' +
							e
				  );
		});
	var ne = e(function(e) {
			!(function(t) {
				function n(e, t) {
					var n = (65535 & e) + (65535 & t);
					return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
				}
				function r(e, t, r, o, i, s) {
					return n(
						(function(e, t) {
							return (e << t) | (e >>> (32 - t));
						})(n(n(t, e), n(o, s)), i),
						r
					);
				}
				function o(e, t, n, o, i, s, a) {
					return r((t & n) | (~t & o), e, t, i, s, a);
				}
				function i(e, t, n, o, i, s, a) {
					return r((t & o) | (n & ~o), e, t, i, s, a);
				}
				function s(e, t, n, o, i, s, a) {
					return r(t ^ n ^ o, e, t, i, s, a);
				}
				function a(e, t, n, o, i, s, a) {
					return r(n ^ (t | ~o), e, t, i, s, a);
				}
				function u(e, t) {
					(e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
					var r,
						u,
						c,
						p,
						l,
						f = 1732584193,
						d = -271733879,
						h = -1732584194,
						g = 271733878;
					for (r = 0; r < e.length; r += 16)
						(u = f),
							(c = d),
							(p = h),
							(l = g),
							(d = a(
								(d = a(
									(d = a(
										(d = a(
											(d = s(
												(d = s(
													(d = s(
														(d = s(
															(d = i(
																(d = i(
																	(d = i(
																		(d = i(
																			(d = o(
																				(d = o(
																					(d = o(
																						(d = o(
																							d,
																							(h = o(
																								h,
																								(g = o(
																									g,
																									(f = o(
																										f,
																										d,
																										h,
																										g,
																										e[r],
																										7,
																										-680876936
																									)),
																									d,
																									h,
																									e[r + 1],
																									12,
																									-389564586
																								)),
																								f,
																								d,
																								e[r + 2],
																								17,
																								606105819
																							)),
																							g,
																							f,
																							e[r + 3],
																							22,
																							-1044525330
																						)),
																						(h = o(
																							h,
																							(g = o(
																								g,
																								(f = o(
																									f,
																									d,
																									h,
																									g,
																									e[r + 4],
																									7,
																									-176418897
																								)),
																								d,
																								h,
																								e[r + 5],
																								12,
																								1200080426
																							)),
																							f,
																							d,
																							e[r + 6],
																							17,
																							-1473231341
																						)),
																						g,
																						f,
																						e[r + 7],
																						22,
																						-45705983
																					)),
																					(h = o(
																						h,
																						(g = o(
																							g,
																							(f = o(
																								f,
																								d,
																								h,
																								g,
																								e[r + 8],
																								7,
																								1770035416
																							)),
																							d,
																							h,
																							e[r + 9],
																							12,
																							-1958414417
																						)),
																						f,
																						d,
																						e[r + 10],
																						17,
																						-42063
																					)),
																					g,
																					f,
																					e[r + 11],
																					22,
																					-1990404162
																				)),
																				(h = o(
																					h,
																					(g = o(
																						g,
																						(f = o(
																							f,
																							d,
																							h,
																							g,
																							e[r + 12],
																							7,
																							1804603682
																						)),
																						d,
																						h,
																						e[r + 13],
																						12,
																						-40341101
																					)),
																					f,
																					d,
																					e[r + 14],
																					17,
																					-1502002290
																				)),
																				g,
																				f,
																				e[r + 15],
																				22,
																				1236535329
																			)),
																			(h = i(
																				h,
																				(g = i(
																					g,
																					(f = i(
																						f,
																						d,
																						h,
																						g,
																						e[r + 1],
																						5,
																						-165796510
																					)),
																					d,
																					h,
																					e[r + 6],
																					9,
																					-1069501632
																				)),
																				f,
																				d,
																				e[r + 11],
																				14,
																				643717713
																			)),
																			g,
																			f,
																			e[r],
																			20,
																			-373897302
																		)),
																		(h = i(
																			h,
																			(g = i(
																				g,
																				(f = i(
																					f,
																					d,
																					h,
																					g,
																					e[r + 5],
																					5,
																					-701558691
																				)),
																				d,
																				h,
																				e[r + 10],
																				9,
																				38016083
																			)),
																			f,
																			d,
																			e[r + 15],
																			14,
																			-660478335
																		)),
																		g,
																		f,
																		e[r + 4],
																		20,
																		-405537848
																	)),
																	(h = i(
																		h,
																		(g = i(
																			g,
																			(f = i(
																				f,
																				d,
																				h,
																				g,
																				e[r + 9],
																				5,
																				568446438
																			)),
																			d,
																			h,
																			e[r + 14],
																			9,
																			-1019803690
																		)),
																		f,
																		d,
																		e[r + 3],
																		14,
																		-187363961
																	)),
																	g,
																	f,
																	e[r + 8],
																	20,
																	1163531501
																)),
																(h = i(
																	h,
																	(g = i(
																		g,
																		(f = i(
																			f,
																			d,
																			h,
																			g,
																			e[r + 13],
																			5,
																			-1444681467
																		)),
																		d,
																		h,
																		e[r + 2],
																		9,
																		-51403784
																	)),
																	f,
																	d,
																	e[r + 7],
																	14,
																	1735328473
																)),
																g,
																f,
																e[r + 12],
																20,
																-1926607734
															)),
															(h = s(
																h,
																(g = s(
																	g,
																	(f = s(f, d, h, g, e[r + 5], 4, -378558)),
																	d,
																	h,
																	e[r + 8],
																	11,
																	-2022574463
																)),
																f,
																d,
																e[r + 11],
																16,
																1839030562
															)),
															g,
															f,
															e[r + 14],
															23,
															-35309556
														)),
														(h = s(
															h,
															(g = s(
																g,
																(f = s(f, d, h, g, e[r + 1], 4, -1530992060)),
																d,
																h,
																e[r + 4],
																11,
																1272893353
															)),
															f,
															d,
															e[r + 7],
															16,
															-155497632
														)),
														g,
														f,
														e[r + 10],
														23,
														-1094730640
													)),
													(h = s(
														h,
														(g = s(
															g,
															(f = s(f, d, h, g, e[r + 13], 4, 681279174)),
															d,
															h,
															e[r],
															11,
															-358537222
														)),
														f,
														d,
														e[r + 3],
														16,
														-722521979
													)),
													g,
													f,
													e[r + 6],
													23,
													76029189
												)),
												(h = s(
													h,
													(g = s(
														g,
														(f = s(f, d, h, g, e[r + 9], 4, -640364487)),
														d,
														h,
														e[r + 12],
														11,
														-421815835
													)),
													f,
													d,
													e[r + 15],
													16,
													530742520
												)),
												g,
												f,
												e[r + 2],
												23,
												-995338651
											)),
											(h = a(
												h,
												(g = a(
													g,
													(f = a(f, d, h, g, e[r], 6, -198630844)),
													d,
													h,
													e[r + 7],
													10,
													1126891415
												)),
												f,
												d,
												e[r + 14],
												15,
												-1416354905
											)),
											g,
											f,
											e[r + 5],
											21,
											-57434055
										)),
										(h = a(
											h,
											(g = a(
												g,
												(f = a(f, d, h, g, e[r + 12], 6, 1700485571)),
												d,
												h,
												e[r + 3],
												10,
												-1894986606
											)),
											f,
											d,
											e[r + 10],
											15,
											-1051523
										)),
										g,
										f,
										e[r + 1],
										21,
										-2054922799
									)),
									(h = a(
										h,
										(g = a(
											g,
											(f = a(f, d, h, g, e[r + 8], 6, 1873313359)),
											d,
											h,
											e[r + 15],
											10,
											-30611744
										)),
										f,
										d,
										e[r + 6],
										15,
										-1560198380
									)),
									g,
									f,
									e[r + 13],
									21,
									1309151649
								)),
								(h = a(
									h,
									(g = a(
										g,
										(f = a(f, d, h, g, e[r + 4], 6, -145523070)),
										d,
										h,
										e[r + 11],
										10,
										-1120210379
									)),
									f,
									d,
									e[r + 2],
									15,
									718787259
								)),
								g,
								f,
								e[r + 9],
								21,
								-343485551
							)),
							(f = n(f, u)),
							(d = n(d, c)),
							(h = n(h, p)),
							(g = n(g, l));
					return [f, d, h, g];
				}
				function c(e) {
					var t,
						n = '',
						r = 32 * e.length;
					for (t = 0; t < r; t += 8)
						n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
					return n;
				}
				function p(e) {
					var t,
						n = [];
					for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
						n[t] = 0;
					var r = 8 * e.length;
					for (t = 0; t < r; t += 8)
						n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
					return n;
				}
				function l(e) {
					var t,
						n,
						r = '';
					for (n = 0; n < e.length; n += 1)
						(t = e.charCodeAt(n)),
							(r +=
								'0123456789abcdef'.charAt((t >>> 4) & 15) +
								'0123456789abcdef'.charAt(15 & t));
					return r;
				}
				function f(e) {
					return unescape(encodeURIComponent(e));
				}
				function d(e) {
					return (function(e) {
						return c(u(p(e), 8 * e.length));
					})(f(e));
				}
				function h(e, t) {
					return (function(e, t) {
						var n,
							r,
							o = p(e),
							i = [],
							s = [];
						for (
							i[15] = s[15] = void 0,
								o.length > 16 && (o = u(o, 8 * e.length)),
								n = 0;
							n < 16;
							n += 1
						)
							(i[n] = 909522486 ^ o[n]), (s[n] = 1549556828 ^ o[n]);
						return (
							(r = u(i.concat(p(t)), 512 + 8 * t.length)),
							c(u(s.concat(r), 640))
						);
					})(f(e), f(t));
				}
				function g(e, t, n) {
					return t
						? n
							? h(t, e)
							: (function(e, t) {
									return l(h(e, t));
							  })(t, e)
						: n
						? d(e)
						: (function(e) {
								return l(d(e));
						  })(e);
				}
				e.exports ? (e.exports = g) : (t.md5 = g);
			})(v);
		}),
		re = function() {
			(this.__data__ = []), (this.size = 0);
		},
		oe = function(e, t) {
			return e === t || (e != e && t != t);
		},
		ie = function(e, t) {
			for (var n = e.length; n--; ) if (oe(e[n][0], t)) return n;
			return -1;
		},
		se = Array.prototype.splice,
		ae = function(e) {
			var t = this.__data__,
				n = ie(t, e);
			return !(
				n < 0 ||
				(n == t.length - 1 ? t.pop() : se.call(t, n, 1), --this.size, 0)
			);
		},
		ue = function(e) {
			var t = this.__data__,
				n = ie(t, e);
			return n < 0 ? void 0 : t[n][1];
		},
		ce = function(e) {
			return ie(this.__data__, e) > -1;
		},
		pe = function(e, t) {
			var n = this.__data__,
				r = ie(n, e);
			return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
		};
	(i.prototype.clear = re),
		(i.prototype.delete = ae),
		(i.prototype.get = ue),
		(i.prototype.has = ce),
		(i.prototype.set = pe);
	var le = i,
		fe = function() {
			(this.__data__ = new le()), (this.size = 0);
		},
		de = function(e) {
			var t = this.__data__,
				n = t.delete(e);
			return (this.size = t.size), n;
		},
		he = function(e) {
			return this.__data__.get(e);
		},
		ge = function(e) {
			return this.__data__.has(e);
		},
		ve = 'object' == typeof v && v && v.Object === Object && v,
		ye = 'object' == typeof self && self && self.Object === Object && self,
		me = ve || ye || Function('return this')(),
		_e = me.Symbol,
		be = Object.prototype,
		we = be.hasOwnProperty,
		Ie = be.toString,
		Ee = _e ? _e.toStringTag : void 0,
		Se = function(e) {
			var t = we.call(e, Ee),
				n = e[Ee];
			try {
				e[Ee] = void 0;
				var r = !0;
			} catch (e) {}
			var o = Ie.call(e);
			return r && (t ? (e[Ee] = n) : delete e[Ee]), o;
		},
		Ce = Object.prototype.toString,
		Oe = function(e) {
			return Ce.call(e);
		},
		Ne = '[object Null]',
		Te = '[object Undefined]',
		Ae = _e ? _e.toStringTag : void 0,
		je = function(e) {
			return null == e
				? void 0 === e
					? Te
					: Ne
				: Ae && Ae in Object(e)
				? Se(e)
				: Oe(e);
		},
		xe = function(e) {
			var t = typeof e;
			return null != e && ('object' == t || 'function' == t);
		},
		Pe = '[object AsyncFunction]',
		ke = '[object Function]',
		Re = '[object GeneratorFunction]',
		Fe = '[object Proxy]',
		Ue = function(e) {
			if (!xe(e)) return !1;
			var t = je(e);
			return t == ke || t == Re || t == Pe || t == Fe;
		},
		De = me['__core-js_shared__'],
		qe = (function() {
			var e = /[^.]+$/.exec((De && De.keys && De.keys.IE_PROTO) || '');
			return e ? 'Symbol(src)_1.' + e : '';
		})(),
		Me = function(e) {
			return !!qe && qe in e;
		},
		Le = Function.prototype.toString,
		Ve = function(e) {
			if (null != e) {
				try {
					return Le.call(e);
				} catch (e) {}
				try {
					return e + '';
				} catch (e) {}
			}
			return '';
		},
		ze = /^\[object .+?Constructor\]$/,
		Ge = Function.prototype,
		Be = Object.prototype,
		Ke = Ge.toString,
		$e = Be.hasOwnProperty,
		Je = RegExp(
			'^' +
				Ke.call($e)
					.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						'$1.*?'
					) +
				'$'
		),
		We = function(e) {
			return !(!xe(e) || Me(e)) && (Ue(e) ? Je : ze).test(Ve(e));
		},
		Ye = function(e, t) {
			return null == e ? void 0 : e[t];
		},
		Qe = function(e, t) {
			var n = Ye(e, t);
			return We(n) ? n : void 0;
		},
		Xe = Qe(me, 'Map'),
		He = Qe(Object, 'create'),
		Ze = function() {
			(this.__data__ = He ? He(null) : {}), (this.size = 0);
		},
		et = function(e) {
			var t = this.has(e) && delete this.__data__[e];
			return (this.size -= t ? 1 : 0), t;
		},
		tt = '__lodash_hash_undefined__',
		nt = Object.prototype.hasOwnProperty,
		rt = function(e) {
			var t = this.__data__;
			if (He) {
				var n = t[e];
				return n === tt ? void 0 : n;
			}
			return nt.call(t, e) ? t[e] : void 0;
		},
		ot = Object.prototype.hasOwnProperty,
		it = function(e) {
			var t = this.__data__;
			return He ? void 0 !== t[e] : ot.call(t, e);
		},
		st = '__lodash_hash_undefined__',
		at = function(e, t) {
			var n = this.__data__;
			return (
				(this.size += this.has(e) ? 0 : 1),
				(n[e] = He && void 0 === t ? st : t),
				this
			);
		};
	(s.prototype.clear = Ze),
		(s.prototype.delete = et),
		(s.prototype.get = rt),
		(s.prototype.has = it),
		(s.prototype.set = at);
	var ut = s,
		ct = function() {
			(this.size = 0),
				(this.__data__ = {
					hash: new ut(),
					map: new (Xe || le)(),
					string: new ut(),
				});
		},
		pt = function(e) {
			var t = typeof e;
			return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
				? '__proto__' !== e
				: null === e;
		},
		lt = function(e, t) {
			var n = e.__data__;
			return pt(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
		},
		ft = function(e) {
			var t = lt(this, e).delete(e);
			return (this.size -= t ? 1 : 0), t;
		},
		dt = function(e) {
			return lt(this, e).get(e);
		},
		ht = function(e) {
			return lt(this, e).has(e);
		},
		gt = function(e, t) {
			var n = lt(this, e),
				r = n.size;
			return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
		};
	(a.prototype.clear = ct),
		(a.prototype.delete = ft),
		(a.prototype.get = dt),
		(a.prototype.has = ht),
		(a.prototype.set = gt);
	var vt = a,
		yt = 200,
		mt = function(e, t) {
			var n = this.__data__;
			if (n instanceof le) {
				var r = n.__data__;
				if (!Xe || r.length < yt - 1)
					return r.push([e, t]), (this.size = ++n.size), this;
				n = this.__data__ = new vt(r);
			}
			return n.set(e, t), (this.size = n.size), this;
		};
	(u.prototype.clear = fe),
		(u.prototype.delete = de),
		(u.prototype.get = he),
		(u.prototype.has = ge),
		(u.prototype.set = mt);
	var _t = u,
		bt = (function() {
			try {
				var e = Qe(Object, 'defineProperty');
				return e({}, '', {}), e;
			} catch (e) {}
		})(),
		wt = function(e, t, n) {
			'__proto__' == t && bt
				? bt(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
				: (e[t] = n);
		},
		It = function(e, t, n) {
			((void 0 === n || oe(e[t], n)) && (void 0 !== n || t in e)) ||
				wt(e, t, n);
		},
		Et = (function(e) {
			return function(t, n, r) {
				for (var o = -1, i = Object(t), s = r(t), a = s.length; a--; ) {
					var u = s[e ? a : ++o];
					if (!1 === n(i[u], u, i)) break;
				}
				return t;
			};
		})(),
		St = e(function(e, t) {
			var n = t && !t.nodeType && t,
				r = n && !0 && e && !e.nodeType && e,
				o = r && r.exports === n ? me.Buffer : void 0,
				i = o ? o.allocUnsafe : void 0;
			e.exports = function(e, t) {
				if (t) return e.slice();
				var n = e.length,
					r = i ? i(n) : new e.constructor(n);
				return e.copy(r), r;
			};
		}),
		Ct = me.Uint8Array,
		Ot = function(e) {
			var t = new e.constructor(e.byteLength);
			return new Ct(t).set(new Ct(e)), t;
		},
		Nt = function(e, t) {
			var n = t ? Ot(e.buffer) : e.buffer;
			return new e.constructor(n, e.byteOffset, e.length);
		},
		Tt = function(e, t) {
			var n = -1,
				r = e.length;
			for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
			return t;
		},
		At = Object.create,
		jt = (function() {
			function e() {}
			return function(t) {
				if (!xe(t)) return {};
				if (At) return At(t);
				e.prototype = t;
				var n = new e();
				return (e.prototype = void 0), n;
			};
		})(),
		xt = function(e, t) {
			return function(n) {
				return e(t(n));
			};
		},
		Pt = xt(Object.getPrototypeOf, Object),
		kt = Object.prototype,
		Rt = function(e) {
			var t = e && e.constructor;
			return e === (('function' == typeof t && t.prototype) || kt);
		},
		Ft = function(e) {
			return 'function' != typeof e.constructor || Rt(e) ? {} : jt(Pt(e));
		},
		Ut = function(e) {
			return null != e && 'object' == typeof e;
		},
		Dt = '[object Arguments]',
		qt = function(e) {
			return Ut(e) && je(e) == Dt;
		},
		Mt = Object.prototype,
		Lt = Mt.hasOwnProperty,
		Vt = Mt.propertyIsEnumerable,
		zt = qt(
			(function() {
				return arguments;
			})()
		)
			? qt
			: function(e) {
					return Ut(e) && Lt.call(e, 'callee') && !Vt.call(e, 'callee');
			  },
		Gt = Array.isArray,
		Bt = 9007199254740991,
		Kt = function(e) {
			return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= Bt;
		},
		$t = function(e) {
			return null != e && Kt(e.length) && !Ue(e);
		},
		Jt = function(e) {
			return Ut(e) && $t(e);
		},
		Wt = function() {
			return !1;
		},
		Yt = e(function(e, t) {
			var n = t && !t.nodeType && t,
				r = n && !0 && e && !e.nodeType && e,
				o = r && r.exports === n ? me.Buffer : void 0,
				i = (o ? o.isBuffer : void 0) || Wt;
			e.exports = i;
		}),
		Qt = '[object Object]',
		Xt = Function.prototype,
		Ht = Object.prototype,
		Zt = Xt.toString,
		en = Ht.hasOwnProperty,
		tn = Zt.call(Object),
		nn = function(e) {
			if (!Ut(e) || je(e) != Qt) return !1;
			var t = Pt(e);
			if (null === t) return !0;
			var n = en.call(t, 'constructor') && t.constructor;
			return 'function' == typeof n && n instanceof n && Zt.call(n) == tn;
		},
		rn = {};
	(rn['[object Float32Array]'] = rn['[object Float64Array]'] = rn[
		'[object Int8Array]'
	] = rn['[object Int16Array]'] = rn['[object Int32Array]'] = rn[
		'[object Uint8Array]'
	] = rn['[object Uint8ClampedArray]'] = rn['[object Uint16Array]'] = rn[
		'[object Uint32Array]'
	] = !0),
		(rn['[object Arguments]'] = rn['[object Array]'] = rn[
			'[object ArrayBuffer]'
		] = rn['[object Boolean]'] = rn['[object DataView]'] = rn[
			'[object Date]'
		] = rn['[object Error]'] = rn['[object Function]'] = rn[
			'[object Map]'
		] = rn['[object Number]'] = rn['[object Object]'] = rn[
			'[object RegExp]'
		] = rn['[object Set]'] = rn['[object String]'] = rn[
			'[object WeakMap]'
		] = !1);
	var on = function(e) {
			return Ut(e) && Kt(e.length) && !!rn[je(e)];
		},
		sn = function(e) {
			return function(t) {
				return e(t);
			};
		},
		an = e(function(e, t) {
			var n = t && !t.nodeType && t,
				r = n && !0 && e && !e.nodeType && e,
				o = r && r.exports === n && ve.process,
				i = (function() {
					try {
						return o && o.binding && o.binding('util');
					} catch (e) {}
				})();
			e.exports = i;
		}),
		un = an && an.isTypedArray,
		cn = un ? sn(un) : on,
		pn = Object.prototype.hasOwnProperty,
		ln = function(e, t, n) {
			var r = e[t];
			(pn.call(e, t) && oe(r, n) && (void 0 !== n || t in e)) || wt(e, t, n);
		},
		fn = function(e, t, n, r) {
			var o = !n;
			n || (n = {});
			for (var i = -1, s = t.length; ++i < s; ) {
				var a = t[i],
					u = r ? r(n[a], e[a], a, n, e) : void 0;
				void 0 === u && (u = e[a]), o ? wt(n, a, u) : ln(n, a, u);
			}
			return n;
		},
		dn = function(e, t) {
			for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
			return r;
		},
		hn = 9007199254740991,
		gn = /^(?:0|[1-9]\d*)$/,
		vn = function(e, t) {
			return (
				!!(t = null == t ? hn : t) &&
				('number' == typeof e || gn.test(e)) &&
				e > -1 &&
				e % 1 == 0 &&
				e < t
			);
		},
		yn = Object.prototype.hasOwnProperty,
		mn = function(e, t) {
			var n = Gt(e),
				r = !n && zt(e),
				o = !n && !r && Yt(e),
				i = !n && !r && !o && cn(e),
				s = n || r || o || i,
				a = s ? dn(e.length, String) : [],
				u = a.length;
			for (var c in e)
				(!t && !yn.call(e, c)) ||
					(s &&
						('length' == c ||
							(o && ('offset' == c || 'parent' == c)) ||
							(i &&
								('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
							vn(c, u))) ||
					a.push(c);
			return a;
		},
		_n = function(e) {
			var t = [];
			if (null != e) for (var n in Object(e)) t.push(n);
			return t;
		},
		bn = Object.prototype.hasOwnProperty,
		wn = function(e) {
			if (!xe(e)) return _n(e);
			var t = Rt(e),
				n = [];
			for (var r in e)
				('constructor' != r || (!t && bn.call(e, r))) && n.push(r);
			return n;
		},
		In = function(e) {
			return $t(e) ? mn(e, !0) : wn(e);
		},
		En = function(e) {
			return fn(e, In(e));
		},
		Sn = function(e, t, n, r, o, i, s) {
			var a = e[n],
				u = t[n],
				c = s.get(u);
			if (c) It(e, n, c);
			else {
				var p = i ? i(a, u, n + '', e, t, s) : void 0,
					l = void 0 === p;
				if (l) {
					var f = Gt(u),
						d = !f && Yt(u),
						h = !f && !d && cn(u);
					(p = u),
						f || d || h
							? Gt(a)
								? (p = a)
								: Jt(a)
								? (p = Tt(a))
								: d
								? ((l = !1), (p = St(u, !0)))
								: h
								? ((l = !1), (p = Nt(u, !0)))
								: (p = [])
							: nn(u) || zt(u)
							? ((p = a),
							  zt(a) ? (p = En(a)) : (!xe(a) || (r && Ue(a))) && (p = Ft(u)))
							: (l = !1);
				}
				l && (s.set(u, p), o(p, u, r, i, s), s.delete(u)), It(e, n, p);
			}
		},
		Cn = c,
		On = function(e) {
			return e;
		},
		Nn = function(e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		},
		Tn = Math.max,
		An = function(e, t, n) {
			return (
				(t = Tn(void 0 === t ? e.length - 1 : t, 0)),
				function() {
					for (
						var r = arguments, o = -1, i = Tn(r.length - t, 0), s = Array(i);
						++o < i;

					)
						s[o] = r[t + o];
					o = -1;
					for (var a = Array(t + 1); ++o < t; ) a[o] = r[o];
					return (a[t] = n(s)), Nn(e, this, a);
				}
			);
		},
		jn = function(e) {
			return function() {
				return e;
			};
		},
		xn = bt
			? function(e, t) {
					return bt(e, 'toString', {
						configurable: !0,
						enumerable: !1,
						value: jn(t),
						writable: !0,
					});
			  }
			: On,
		Pn = 800,
		kn = 16,
		Rn = Date.now,
		Fn = (function(e) {
			var t = 0,
				n = 0;
			return function() {
				var r = Rn(),
					o = kn - (r - n);
				if (((n = r), o > 0)) {
					if (++t >= Pn) return arguments[0];
				} else t = 0;
				return e.apply(void 0, arguments);
			};
		})(xn),
		Un = function(e, t) {
			return Fn(An(e, t, On), e + '');
		},
		Dn = function(e, t, n) {
			if (!xe(n)) return !1;
			var r = typeof t;
			return (
				!!('number' == r
					? $t(n) && vn(t, n.length)
					: 'string' == r && t in n) && oe(n[t], e)
			);
		},
		qn = function(e) {
			return Un(function(t, n) {
				var r = -1,
					o = n.length,
					i = o > 1 ? n[o - 1] : void 0,
					s = o > 2 ? n[2] : void 0;
				for (
					i = e.length > 3 && 'function' == typeof i ? (o--, i) : void 0,
						s && Dn(n[0], n[1], s) && ((i = o < 3 ? void 0 : i), (o = 1)),
						t = Object(t);
					++r < o;

				) {
					var a = n[r];
					a && e(t, a, r, i);
				}
				return t;
			});
		},
		Mn = qn(function(e, t, n) {
			Cn(e, t, n);
		}),
		Ln =
			Array.isArray ||
			function(e) {
				return '[object Array]' === Object.prototype.toString.call(e);
			},
		Vn =
			Object.keys ||
			function(e) {
				var t = [];
				for (var n in e)
					Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
				return t;
			},
		zn = { encode: f, stringify: f, decode: h, parse: h },
		Gn = function(e, t) {
			(this.url = e), (this.data = t || {});
		};
	Gn.prototype.send = function(e) {
		if (!!window.XDomainRequest) {
			var t = new window.XDomainRequest();
			t.open('POST', this.url, !0),
				(t.onload = function() {
					e(200, t.responseText);
				}),
				(t.onerror = function() {
					'Request Entity Too Large' === t.responseText
						? e(413, t.responseText)
						: e(500, t.responseText);
				}),
				(t.ontimeout = function() {}),
				(t.onprogress = function() {}),
				t.send(zn.stringify(this.data));
		} else {
			var n = new XMLHttpRequest();
			n.open('POST', this.url, !0),
				(n.onreadystatechange = function() {
					4 === n.readyState && e(n.status, n.responseText);
				}),
				n.setRequestHeader(
					'Content-Type',
					'application/x-www-form-urlencoded; charset=UTF-8'
				),
				n.send(zn.stringify(this.data));
		}
	};
	var Bn = function() {
		(this._price = null),
			(this._productId = null),
			(this._quantity = 1),
			(this._revenueType = null),
			(this._properties = null);
	};
	(Bn.prototype.setProductId = function(e) {
		return (
			'string' !== k(e)
				? G.log.error(
						'Unsupported type for productId: ' + k(e) + ', expecting string'
				  )
				: G.isEmptyString(e)
				? G.log.error('Invalid empty productId')
				: (this._productId = e),
			this
		);
	}),
		(Bn.prototype.setQuantity = function(e) {
			return (
				'number' !== k(e)
					? G.log.error(
							'Unsupported type for quantity: ' + k(e) + ', expecting number'
					  )
					: (this._quantity = parseInt(e)),
				this
			);
		}),
		(Bn.prototype.setPrice = function(e) {
			return (
				'number' !== k(e)
					? G.log.error(
							'Unsupported type for price: ' + k(e) + ', expecting number'
					  )
					: (this._price = e),
				this
			);
		}),
		(Bn.prototype.setRevenueType = function(e) {
			return (
				'string' !== k(e)
					? G.log.error(
							'Unsupported type for revenueType: ' + k(e) + ', expecting string'
					  )
					: (this._revenueType = e),
				this
			);
		}),
		(Bn.prototype.setEventProperties = function(e) {
			return (
				'object' !== k(e)
					? G.log.error(
							'Unsupported type for eventProperties: ' +
								k(e) +
								', expecting object'
					  )
					: (this._properties = G.validateProperties(e)),
				this
			);
		}),
		(Bn.prototype._isValidRevenue = function() {
			return (
				'number' === k(this._price) ||
				(G.log.error('Invalid revenue, need to set price field'), !1)
			);
		}),
		(Bn.prototype._toJSONObject = function() {
			var e = 'object' === k(this._properties) ? this._properties : {};
			return (
				null !== this._productId && (e[y.REVENUE_PRODUCT_ID] = this._productId),
				null !== this._quantity && (e[y.REVENUE_QUANTITY] = this._quantity),
				null !== this._price && (e[y.REVENUE_PRICE] = this._price),
				null !== this._revenueType &&
					(e[y.REVENUE_REVENUE_TYPE] = this._revenueType),
				e
			);
		});
	var Kn = e(function(e, t) {
			!(function(n, r) {
				var o = 'model',
					i = 'name',
					s = 'type',
					a = 'vendor',
					u = 'version',
					c = 'mobile',
					p = 'tablet',
					l = {
						extend: function(e, t) {
							var n = {};
							for (var r in e)
								t[r] && t[r].length % 2 == 0
									? (n[r] = t[r].concat(e[r]))
									: (n[r] = e[r]);
							return n;
						},
						has: function(e, t) {
							return (
								'string' == typeof e &&
								-1 !== t.toLowerCase().indexOf(e.toLowerCase())
							);
						},
						lowerize: function(e) {
							return e.toLowerCase();
						},
						major: function(e) {
							return 'string' == typeof e ? e.split('.')[0] : void 0;
						},
					},
					f = {
						rgx: function() {
							for (
								var e, t, n, r, o, i, s, a = 0, u = arguments;
								a < u.length && !i;

							) {
								var c = u[a],
									p = u[a + 1];
								if (void 0 === e) {
									e = {};
									for (r in p)
										p.hasOwnProperty(r) &&
											('object' == typeof (o = p[r])
												? (e[o[0]] = void 0)
												: (e[o] = void 0));
								}
								for (t = n = 0; t < c.length && !i; )
									if ((i = c[t++].exec(this.getUA())))
										for (r = 0; r < p.length; r++)
											(s = i[++n]),
												'object' == typeof (o = p[r]) && o.length > 0
													? 2 == o.length
														? 'function' == typeof o[1]
															? (e[o[0]] = o[1].call(this, s))
															: (e[o[0]] = o[1])
														: 3 == o.length
														? 'function' != typeof o[1] ||
														  (o[1].exec && o[1].test)
															? (e[o[0]] = s ? s.replace(o[1], o[2]) : void 0)
															: (e[o[0]] = s
																	? o[1].call(this, s, o[2])
																	: void 0)
														: 4 == o.length &&
														  (e[o[0]] = s
																? o[3].call(this, s.replace(o[1], o[2]))
																: void 0)
													: (e[o] = s || void 0);
								a += 2;
							}
							return e;
						},
						str: function(e, t) {
							for (var n in t)
								if ('object' == typeof t[n] && t[n].length > 0) {
									for (var r = 0; r < t[n].length; r++)
										if (l.has(t[n][r], e)) return '?' === n ? void 0 : n;
								} else if (l.has(t[n], e)) return '?' === n ? void 0 : n;
							return e;
						},
					},
					d = {
						browser: {
							oldsafari: {
								version: {
									'1.0': '/8',
									1.2: '/1',
									1.3: '/3',
									'2.0': '/412',
									'2.0.2': '/416',
									'2.0.3': '/417',
									'2.0.4': '/419',
									'?': '/',
								},
							},
							name: { 'Opera Mobile': 'Opera Mobi', 'IE Mobile': 'IEMobile' },
						},
						device: {
							amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
							sprint: {
								model: { 'Evo Shift 4G': '7373KT' },
								vendor: { HTC: 'APA', Sprint: 'Sprint' },
							},
						},
						os: {
							windows: {
								version: {
									ME: '4.90',
									'NT 3.11': 'NT3.51',
									'NT 4.0': 'NT4.0',
									2000: 'NT 5.0',
									XP: ['NT 5.1', 'NT 5.2'],
									Vista: 'NT 6.0',
									7: 'NT 6.1',
									8: 'NT 6.2',
									8.1: 'NT 6.3',
									10: ['NT 6.4', 'NT 10.0'],
									RT: 'ARM',
								},
								name: { 'Windows Phone': 'Windows Phone OS' },
							},
						},
					},
					h = {
						browser: [
							[
								/(opera\smini)\/([\w\.-]+)/i,
								/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
								/(opera).+version\/([\w\.]+)/i,
								/(opera)[\/\s]+([\w\.]+)/i,
							],
							[i, u],
							[/(OPiOS)[\/\s]+([\w\.]+)/i],
							[[i, 'Opera Mini'], u],
							[/\s(opr)\/([\w\.]+)/i],
							[[i, 'Opera'], u],
							[
								/(kindle)\/([\w\.]+)/i,
								/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
								/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
								/(?:ms|\()(ie)\s([\w\.]+)/i,
								/(rekonq)\/([\w\.]+)*/i,
								/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i,
							],
							[i, u],
							[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
							[[i, 'IE'], u],
							[/(edge)\/((\d+)?[\w\.]+)/i],
							[i, u],
							[/(yabrowser)\/([\w\.]+)/i],
							[[i, 'Yandex'], u],
							[/(comodo_dragon)\/([\w\.]+)/i],
							[[i, /_/g, ' '], u],
							[
								/((?:android.+)crmo|crios)\/([\w\.]+)/i,
								/android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i,
							],
							[[i, 'Chrome Mobile'], u],
							[
								/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
								/(qqbrowser)[\/\s]?([\w\.]+)/i,
							],
							[i, u],
							[
								/(uc\s?browser)[\/\s]?([\w\.]+)/i,
								/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
								/JUC.+(ucweb)[\/\s]?([\w\.]+)/i,
							],
							[[i, 'UCBrowser'], u],
							[/(dolfin)\/([\w\.]+)/i],
							[[i, 'Dolphin'], u],
							[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
							[u, [i, 'MIUI Browser']],
							[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
							[u, [i, 'Android Browser']],
							[/FBAV\/([\w\.]+);/i],
							[u, [i, 'Facebook']],
							[/fxios\/([\w\.-]+)/i],
							[u, [i, 'Firefox']],
							[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
							[u, [i, 'Mobile Safari']],
							[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
							[u, i],
							[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
							[i, [u, f.str, d.browser.oldsafari.version]],
							[/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
							[i, u],
							[/(blackberry)\\s?\/([\w\.]+)/i],
							[[i, 'BlackBerry'], u],
							[/(navigator|netscape)\/([\w\.-]+)/i],
							[[i, 'Netscape'], u],
							[
								/(swiftfox)/i,
								/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
								/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
								/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
								/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
								/(links)\s\(([\w\.]+)/i,
								/(gobrowser)\/?([\w\.]+)*/i,
								/(ice\s?browser)\/v?([\w\._]+)/i,
								/(mosaic)[\/\s]([\w\.]+)/i,
							],
							[i, u],
						],
						cpu: [
							[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
							[['architecture', 'amd64']],
							[/(ia32(?=;))/i],
							[['architecture', l.lowerize]],
							[/((?:i[346]|x)86)[;\)]/i],
							[['architecture', 'ia32']],
							[/windows\s(ce|mobile);\sppc;/i],
							[['architecture', 'arm']],
							[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
							[['architecture', /ower/, '', l.lowerize]],
							[/(sun4\w)[;\)]/i],
							[['architecture', 'sparc']],
							[
								/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
							],
							[['architecture', l.lowerize]],
						],
						device: [
							[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
							[o, a, [s, p]],
							[/applecoremedia\/[\w\.]+ \((ipad)/],
							[o, [a, 'Apple'], [s, p]],
							[/(apple\s{0,1}tv)/i],
							[[o, 'Apple TV'], [a, 'Apple']],
							[
								/(archos)\s(gamepad2?)/i,
								/(hp).+(touchpad)/i,
								/(kindle)\/([\w\.]+)/i,
								/\s(nook)[\w\s]+build\/(\w+)/i,
								/(dell)\s(strea[kpr\s\d]*[\dko])/i,
							],
							[a, o, [s, p]],
							[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
							[o, [a, 'Amazon'], [s, p]],
							[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
							[[o, f.str, d.device.amazon.model], [a, 'Amazon'], [s, c]],
							[/\((ip[honed|\s\w*]+);.+(apple)/i],
							[o, a, [s, c]],
							[/\((ip[honed|\s\w*]+);/i],
							[o, [a, 'Apple'], [s, c]],
							[
								/(blackberry)[\s-]?(\w+)/i,
								/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
								/(hp)\s([\w\s]+\w)/i,
								/(asus)-?(\w+)/i,
							],
							[a, o, [s, c]],
							[/\(bb10;\s(\w+)/i],
							[o, [a, 'BlackBerry'], [s, c]],
							[
								/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i,
							],
							[o, [a, 'Asus'], [s, p]],
							[
								/(sony)\s(tablet\s[ps])\sbuild\//i,
								/(sony)?(?:sgp.+)\sbuild\//i,
							],
							[[a, 'Sony'], [o, 'Xperia Tablet'], [s, p]],
							[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
							[[a, 'Sony'], [o, 'Xperia Phone'], [s, c]],
							[/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
							[a, o, [s, 'console']],
							[/android.+;\s(shield)\sbuild/i],
							[o, [a, 'Nvidia'], [s, 'console']],
							[/(playstation\s[34portablevi]+)/i],
							[o, [a, 'Sony'], [s, 'console']],
							[/(sprint\s(\w+))/i],
							[
								[a, f.str, d.device.sprint.vendor],
								[o, f.str, d.device.sprint.model],
								[s, c],
							],
							[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
							[a, o, [s, p]],
							[
								/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
								/(zte)-(\w+)*/i,
								/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i,
							],
							[a, [o, /_/g, ' '], [s, c]],
							[/(nexus\s9)/i],
							[o, [a, 'HTC'], [s, p]],
							[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
							[o, [a, 'Microsoft'], [s, 'console']],
							[/(kin\.[onetw]{3})/i],
							[[o, /\./g, ' '], [a, 'Microsoft'], [s, c]],
							[
								/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
								/mot[\s-]?(\w+)*/i,
								/(XT\d{3,4}) build\//i,
								/(nexus\s[6])/i,
							],
							[o, [a, 'Motorola'], [s, c]],
							[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
							[o, [a, 'Motorola'], [s, p]],
							[
								/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
								/((SM-T\w+))/i,
							],
							[[a, 'Samsung'], o, [s, p]],
							[
								/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
								/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
								/sec-((sgh\w+))/i,
							],
							[[a, 'Samsung'], o, [s, c]],
							[/(samsung);smarttv/i],
							[a, o, [s, 'smarttv']],
							[/\(dtv[\);].+(aquos)/i],
							[o, [a, 'Sharp'], [s, 'smarttv']],
							[/sie-(\w+)*/i],
							[o, [a, 'Siemens'], [s, c]],
							[/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
							[[a, 'Nokia'], o, [s, c]],
							[/android\s3\.[\s\w;-]{10}(a\d{3})/i],
							[o, [a, 'Acer'], [s, p]],
							[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
							[[a, 'LG'], o, [s, p]],
							[/(lg) netcast\.tv/i],
							[a, o, [s, 'smarttv']],
							[/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
							[o, [a, 'LG'], [s, c]],
							[/android.+(ideatab[a-z0-9\-\s]+)/i],
							[o, [a, 'Lenovo'], [s, p]],
							[/linux;.+((jolla));/i],
							[a, o, [s, c]],
							[/((pebble))app\/[\d\.]+\s/i],
							[a, o, [s, 'wearable']],
							[/android.+;\s(glass)\s\d/i],
							[o, [a, 'Google'], [s, 'wearable']],
							[
								/android.+(\w+)\s+build\/hm\1/i,
								/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
								/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i,
							],
							[[o, /_/g, ' '], [a, 'Xiaomi'], [s, c]],
							[/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
							[[s, l.lowerize], a, o],
						],
						engine: [
							[/windows.+\sedge\/([\w\.]+)/i],
							[u, [i, 'EdgeHTML']],
							[
								/(presto)\/([\w\.]+)/i,
								/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
								/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
								/(icab)[\/\s]([23]\.[\d\.]+)/i,
							],
							[i, u],
							[/rv\:([\w\.]+).*(gecko)/i],
							[u, i],
						],
						os: [
							[/microsoft\s(windows)\s(vista|xp)/i],
							[i, u],
							[
								/(windows)\snt\s6\.2;\s(arm)/i,
								/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
							],
							[[i, f.str, d.os.windows.name], [u, f.str, d.os.windows.version]],
							[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
							[[i, 'Windows'], [u, f.str, d.os.windows.version]],
							[/\((bb)(10);/i],
							[[i, 'BlackBerry'], u],
							[
								/(blackberry)\w*\/?([\w\.]+)*/i,
								/(tizen)[\/\s]([\w\.]+)/i,
								/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
								/linux;.+(sailfish);/i,
							],
							[i, u],
							[/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
							[[i, 'Symbian'], u],
							[/\((series40);/i],
							[i],
							[/mozilla.+\(mobile;.+gecko.+firefox/i],
							[[i, 'Firefox OS'], u],
							[
								/(nintendo|playstation)\s([wids34portablevu]+)/i,
								/(mint)[\/\s\(]?(\w+)*/i,
								/(mageia|vectorlinux)[;\s]/i,
								/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
								/(hurd|linux)\s?([\w\.]+)*/i,
								/(gnu)\s?([\w\.]+)*/i,
							],
							[[i, 'Linux'], u],
							[/(cros)\s[\w]+\s([\w\.]+\w)/i],
							[[i, 'Chromium OS'], u],
							[/(sunos)\s?([\w\.]+\d)*/i],
							[[i, 'Solaris'], u],
							[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
							[[i, 'Linux'], u],
							[/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
							[[i, 'iPhone'], [u, /_/g, '.']],
							[/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
							[[i, 'iPad'], [u, /_/g, '.']],
							[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
							[[i, 'iOS'], [u, /_/g, '.']],
							[
								/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
								/(macintosh|mac(?=_powerpc)\s)/i,
							],
							[[i, 'Mac'], [u, /_/g, '.']],
							[
								/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
								/(haiku)\s(\w+)/i,
								/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
								/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
								/(unix)\s?([\w\.]+)*/i,
							],
							[i, u],
						],
					},
					g = function(e, t) {
						if (!(this instanceof g)) return new g(e, t).getResult();
						var r =
								e ||
								(n && n.navigator && n.navigator.userAgent
									? n.navigator.userAgent
									: ''),
							o = t ? l.extend(h, t) : h;
						return (
							(this.getBrowser = function() {
								var e = f.rgx.apply(this, o.browser);
								return (e.major = l.major(e.version)), e;
							}),
							(this.getCPU = function() {
								return f.rgx.apply(this, o.cpu);
							}),
							(this.getDevice = function() {
								return f.rgx.apply(this, o.device);
							}),
							(this.getEngine = function() {
								return f.rgx.apply(this, o.engine);
							}),
							(this.getOS = function() {
								return f.rgx.apply(this, o.os);
							}),
							(this.getResult = function() {
								return {
									ua: this.getUA(),
									browser: this.getBrowser(),
									engine: this.getEngine(),
									os: this.getOS(),
									device: this.getDevice(),
									cpu: this.getCPU(),
								};
							}),
							(this.getUA = function() {
								return r;
							}),
							(this.setUA = function(e) {
								return (r = e), this;
							}),
							this
						);
					};
				(g.VERSION = '0.7.10'),
					(g.BROWSER = { NAME: i, MAJOR: 'major', VERSION: u }),
					(g.CPU = { ARCHITECTURE: 'architecture' }),
					(g.DEVICE = {
						MODEL: o,
						VENDOR: a,
						TYPE: s,
						CONSOLE: 'console',
						MOBILE: c,
						SMARTTV: 'smarttv',
						TABLET: p,
						WEARABLE: 'wearable',
						EMBEDDED: 'embedded',
					}),
					(g.ENGINE = { NAME: i, VERSION: u }),
					(g.OS = { NAME: i, VERSION: u }),
					e.exports && (t = e.exports = g),
					(t.UAParser = g);
				var v = n.jQuery || n.Zepto;
				if (void 0 !== v) {
					var y = new g();
					(v.ua = y.getResult()),
						(v.ua.get = function() {
							return y.getUA();
						}),
						(v.ua.set = function(e) {
							y.setUA(e);
							var t = y.getResult();
							for (var n in t) v.ua[n] = t[n];
						});
				}
			})('object' == typeof window ? window : v);
		}),
		$n = function e(t) {
			return t
				? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
				: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
		},
		Jn = {
			apiEndpoint: 'api.amplitude.com',
			batchEvents: !1,
			cookieExpiration: 3650,
			cookieName: 'amplitude_id',
			deviceIdFromUrlParam: !1,
			domain: '',
			eventUploadPeriodMillis: 3e4,
			eventUploadThreshold: 30,
			forceHttps: !0,
			includeGclid: !1,
			includeReferrer: !1,
			includeUtm: !1,
			language: {
				language:
					(navigator &&
						((navigator.languages && navigator.languages[0]) ||
							navigator.language ||
							navigator.userLanguage)) ||
					void 0,
			}.language,
			logLevel: 'WARN',
			optOut: !1,
			platform: 'Web',
			savedMaxCount: 1e3,
			saveEvents: !0,
			saveParamsReferrerOncePerSession: !0,
			sessionTimeout: 18e5,
			trackingOptions: {
				city: !0,
				country: !0,
				device_model: !0,
				dma: !0,
				ip_address: !0,
				language: !0,
				os_name: !0,
				os_version: !0,
				platform: !0,
				region: !0,
				version_name: !0,
			},
			unsentKey: 'amplitude_unsent',
			unsentIdentifyKey: 'amplitude_unsent_identify',
			uploadBatchSize: 100,
		},
		Wn = function(e) {
			(this._instanceName = G.isEmptyString(e)
				? y.DEFAULT_INSTANCE
				: e.toLowerCase()),
				(this._legacyStorageSuffix =
					this._instanceName === y.DEFAULT_INSTANCE
						? ''
						: '_' + this._instanceName),
				(this._unsentEvents = []),
				(this._unsentIdentifys = []),
				(this._ua = new Kn(navigator.userAgent).getResult()),
				(this.options = Mn({}, Jn)),
				(this.cookieStorage = new ee().getStorage()),
				(this._q = []),
				(this._sending = !1),
				(this._updateScheduled = !1),
				(this._eventId = 0),
				(this._identifyId = 0),
				(this._lastEventTime = null),
				(this._newSession = !1),
				(this._sequenceNumber = 0),
				(this._sessionId = null),
				(this._userAgent = (navigator && navigator.userAgent) || null);
		};
	(Wn.prototype.Identify = te),
		(Wn.prototype.Revenue = Bn),
		(Wn.prototype.init = function(e, t, n, r) {
			if ('string' !== k(e) || G.isEmptyString(e))
				G.log.error('Invalid apiKey. Please re-initialize with a valid apiKey');
			else
				try {
					(this.options.apiKey = e),
						(this._storageSuffix = '_' + e + this._legacyStorageSuffix),
						Yn(this.options, n),
						'string' === k(this.options.logLevel) &&
							G.setLogLevel(this.options.logLevel);
					var o = rr(this);
					if (
						((this._apiPropertiesTrackingOptions =
							Object.keys(o).length > 0 ? { tracking_options: o } : {}),
						this.cookieStorage.options({
							expirationDays: this.options.cookieExpiration,
							domain: this.options.domain,
						}),
						(this.options.domain = this.cookieStorage.options().domain),
						this._instanceName === y.DEFAULT_INSTANCE && Qn(this),
						Xn(this),
						(this.options.deviceId =
							('object' === k(n) &&
								'string' === k(n.deviceId) &&
								!G.isEmptyString(n.deviceId) &&
								n.deviceId) ||
							(this.options.deviceIdFromUrlParam &&
								this._getDeviceIdFromUrlParam(this._getUrlParams())) ||
							this.options.deviceId ||
							$n() + 'R'),
						(this.options.userId =
							('string' === k(t) && !G.isEmptyString(t) && t) ||
							('number' === k(t) && t.toString()) ||
							this.options.userId ||
							null),
						this.options.saveEvents)
					) {
						(this._unsentEvents = this._loadSavedUnsentEvents(
							this.options.unsentKey
						)),
							(this._unsentIdentifys = this._loadSavedUnsentEvents(
								this.options.unsentIdentifyKey
							));
						for (var i = 0; i < this._unsentEvents.length; i++) {
							var s = this._unsentEvents[i].event_properties,
								a = this._unsentEvents[i].groups;
							(this._unsentEvents[i].event_properties = G.validateProperties(
								s
							)),
								(this._unsentEvents[i].groups = G.validateGroups(a));
						}
						for (var u = 0; u < this._unsentIdentifys.length; u++) {
							var c = this._unsentIdentifys[u].user_properties,
								p = this._unsentIdentifys[u].groups;
							(this._unsentIdentifys[u].user_properties = G.validateProperties(
								c
							)),
								(this._unsentIdentifys[u].groups = G.validateGroups(p));
						}
					}
					var l = new Date().getTime();
					(!this._sessionId ||
						!this._lastEventTime ||
						l - this._lastEventTime > this.options.sessionTimeout) &&
						((this._newSession = !0),
						(this._sessionId = l),
						this.options.saveParamsReferrerOncePerSession &&
							this._trackParamsAndReferrer()),
						this.options.saveParamsReferrerOncePerSession ||
							this._trackParamsAndReferrer(),
						(this._lastEventTime = l),
						Zn(this),
						this._sendEventsIfReady();
				} catch (e) {
					G.log.error(e);
				} finally {
					'function' === k(r) && r(this);
				}
		}),
		(Wn.prototype._trackParamsAndReferrer = function() {
			this.options.includeUtm && this._initUtmData(),
				this.options.includeReferrer && this._saveReferrer(this._getReferrer()),
				this.options.includeGclid && this._saveGclid(this._getUrlParams());
		});
	var Yn = function e(t, n) {
		if ('object' === k(n)) {
			var r = function(r) {
				if (t.hasOwnProperty(r)) {
					var o = n[r],
						i = k(t[r]);
					G.validateInput(o, r + ' option', i) &&
						('boolean' === i
							? (t[r] = !!o)
							: ('string' === i && !G.isEmptyString(o)) ||
							  ('number' === i && o > 0)
							? (t[r] = o)
							: 'object' === i && e(t[r], o));
				}
			};
			for (var o in n) n.hasOwnProperty(o) && r(o);
		}
	};
	(Wn.prototype.runQueuedFunctions = function() {
		for (var e = 0; e < this._q.length; e++) {
			var t = this[this._q[e][0]];
			'function' === k(t) && t.apply(this, this._q[e].slice(1));
		}
		this._q = [];
	}),
		(Wn.prototype._apiKeySet = function(e) {
			return (
				!G.isEmptyString(this.options.apiKey) ||
				(G.log.error(
					'Invalid apiKey. Please set a valid apiKey with init() before calling ' +
						e
				),
				!1)
			);
		}),
		(Wn.prototype._loadSavedUnsentEvents = function(e) {
			var t = this._getFromStorage(Z, e),
				n = this._parseSavedUnsentEventsString(t, e),
				r = this._getFromStorageLegacy(Z, e),
				o = this._parseSavedUnsentEventsString(r, e).concat(n);
			return (
				this._removeFromLegacyStorage(Z, e),
				this._setInStorage(Z, e, JSON.stringify(o)),
				o
			);
		}),
		(Wn.prototype._removeFromLegacyStorage = function(e, t) {
			e.removeItem(t + this._legacyStorageSuffix);
		}),
		(Wn.prototype._parseSavedUnsentEventsString = function(e, t) {
			if (G.isEmptyString(e)) return [];
			if ('string' === k(e))
				try {
					var n = JSON.parse(e);
					if ('array' === k(n)) return n;
				} catch (e) {}
			return (
				G.log.error(
					'Unable to load ' + t + ' events. Restart with a new empty queue.'
				),
				[]
			);
		}),
		(Wn.prototype.isNewSession = function() {
			return this._newSession;
		}),
		(Wn.prototype.getSessionId = function() {
			return this._sessionId;
		}),
		(Wn.prototype.nextEventId = function() {
			return this._eventId++, this._eventId;
		}),
		(Wn.prototype.nextIdentifyId = function() {
			return this._identifyId++, this._identifyId;
		}),
		(Wn.prototype.nextSequenceNumber = function() {
			return this._sequenceNumber++, this._sequenceNumber;
		}),
		(Wn.prototype._unsentCount = function() {
			return this._unsentEvents.length + this._unsentIdentifys.length;
		}),
		(Wn.prototype._sendEventsIfReady = function(e) {
			return (
				0 !== this._unsentCount() &&
				(this.options.batchEvents
					? this._unsentCount() >= this.options.eventUploadThreshold
						? (this.sendEvents(e), !0)
						: (this._updateScheduled ||
								((this._updateScheduled = !0),
								setTimeout(
									function() {
										(this._updateScheduled = !1), this.sendEvents();
									}.bind(this),
									this.options.eventUploadPeriodMillis
								)),
						  !1)
					: (this.sendEvents(e), !0))
			);
		}),
		(Wn.prototype._getFromStorage = function(e, t) {
			return e.getItem(t + this._storageSuffix);
		}),
		(Wn.prototype._getFromStorageLegacy = function(e, t) {
			return e.getItem(t + this._legacyStorageSuffix);
		}),
		(Wn.prototype._setInStorage = function(e, t, n) {
			e.setItem(t + this._storageSuffix, n);
		});
	var Qn = function(e) {
			var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
			if (
				'object' !== k(t) &&
				((t = e.cookieStorage.get(
					e.options.cookieName + e._legacyStorageSuffix
				)),
				!('object' === k(t) && t.deviceId && t.sessionId && t.lastEventTime))
			) {
				var n = function(e) {
						var t = Z.getItem(e);
						return Z.removeItem(e), t;
					},
					r =
						('string' === k(e.options.apiKey) &&
							'_' + e.options.apiKey.slice(0, 6)) ||
						'',
					o = n(y.DEVICE_ID + r),
					i = n(y.USER_ID + r),
					s = n(y.OPT_OUT + r);
				null !== s && void 0 !== s && (s = 'true' === String(s));
				var a = parseInt(n(y.SESSION_ID)),
					u = parseInt(n(y.LAST_EVENT_TIME)),
					c = parseInt(n(y.LAST_EVENT_ID)),
					p = parseInt(n(y.LAST_IDENTIFY_ID)),
					l = parseInt(n(y.LAST_SEQUENCE_NUMBER)),
					f = function(e) {
						return 'object' === k(t) && t[e];
					};
				(e.options.deviceId = f('deviceId') || o),
					(e.options.userId = f('userId') || i),
					(e._sessionId = f('sessionId') || a || e._sessionId),
					(e._lastEventTime = f('lastEventTime') || u || e._lastEventTime),
					(e._eventId = f('eventId') || c || e._eventId),
					(e._identifyId = f('identifyId') || p || e._identifyId),
					(e._sequenceNumber = f('sequenceNumber') || l || e._sequenceNumber),
					(e.options.optOut = s || !1),
					t &&
						void 0 !== t.optOut &&
						null !== t.optOut &&
						(e.options.optOut = 'true' === String(t.optOut)),
					Zn(e);
			}
		},
		Xn = function(e) {
			var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
			if ('object' === k(t)) Hn(e, t);
			else {
				var n = e.cookieStorage.get(
					e.options.cookieName + e._legacyStorageSuffix
				);
				'object' === k(n) &&
					(e.cookieStorage.remove(
						e.options.cookieName + e._legacyStorageSuffix
					),
					Hn(e, n));
			}
		},
		Hn = function(e, t) {
			t.deviceId && (e.options.deviceId = t.deviceId),
				t.userId && (e.options.userId = t.userId),
				null !== t.optOut &&
					void 0 !== t.optOut &&
					(e.options.optOut = t.optOut),
				t.sessionId && (e._sessionId = parseInt(t.sessionId)),
				t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime)),
				t.eventId && (e._eventId = parseInt(t.eventId)),
				t.identifyId && (e._identifyId = parseInt(t.identifyId)),
				t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber));
		},
		Zn = function(e) {
			e.cookieStorage.set(e.options.cookieName + e._storageSuffix, {
				deviceId: e.options.deviceId,
				userId: e.options.userId,
				optOut: e.options.optOut,
				sessionId: e._sessionId,
				lastEventTime: e._lastEventTime,
				eventId: e._eventId,
				identifyId: e._identifyId,
				sequenceNumber: e._sequenceNumber,
			});
		};
	Wn.prototype._initUtmData = function(e, t) {
		e = e || this._getUrlParams();
		var n = (function(e, t) {
			var n = e
					? '?' +
					  e
							.split('.')
							.slice(-1)[0]
							.replace(/\|/g, '&')
					: '',
				r = function(e, t, n, r) {
					return G.getQueryParam(e, t) || G.getQueryParam(n, r);
				},
				o = r('utm_source', t, 'utmcsr', n),
				i = r('utm_medium', t, 'utmcmd', n),
				s = r('utm_campaign', t, 'utmccn', n),
				a = r('utm_term', t, 'utmctr', n),
				u = r('utm_content', t, 'utmcct', n),
				c = {},
				p = function(e, t) {
					G.isEmptyString(t) || (c[e] = t);
				};
			return (
				p('utm_source', o),
				p('utm_medium', i),
				p('utm_campaign', s),
				p('utm_term', a),
				p('utm_content', u),
				c
			);
		})((t = t || this.cookieStorage.get('__utmz')), e);
		er(this, n);
	};
	var er = function(e, t) {
		if ('object' === k(t) && 0 !== Object.keys(t).length) {
			var n = new te();
			for (var r in t)
				t.hasOwnProperty(r) &&
					(n.setOnce('initial_' + r, t[r]), n.set(r, t[r]));
			e.identify(n);
		}
	};
	(Wn.prototype._getReferrer = function() {
		return document.referrer;
	}),
		(Wn.prototype._getUrlParams = function() {
			return location.search;
		}),
		(Wn.prototype._saveGclid = function(e) {
			var t = G.getQueryParam('gclid', e);
			if (!G.isEmptyString(t)) {
				er(this, { gclid: t });
			}
		}),
		(Wn.prototype._getDeviceIdFromUrlParam = function(e) {
			return G.getQueryParam(y.AMP_DEVICE_ID_PARAM, e);
		}),
		(Wn.prototype._getReferringDomain = function(e) {
			if (G.isEmptyString(e)) return null;
			var t = e.split('/');
			return t.length >= 3 ? t[2] : null;
		}),
		(Wn.prototype._saveReferrer = function(e) {
			if (!G.isEmptyString(e)) {
				var t = { referrer: e, referring_domain: this._getReferringDomain(e) };
				er(this, t);
			}
		}),
		(Wn.prototype.saveEvents = function() {
			try {
				this._setInStorage(
					Z,
					this.options.unsentKey,
					JSON.stringify(this._unsentEvents)
				);
			} catch (e) {}
			try {
				this._setInStorage(
					Z,
					this.options.unsentIdentifyKey,
					JSON.stringify(this._unsentIdentifys)
				);
			} catch (e) {}
		}),
		(Wn.prototype.setDomain = function(e) {
			if (G.validateInput(e, 'domain', 'string'))
				try {
					this.cookieStorage.options({ domain: e }),
						(this.options.domain = this.cookieStorage.options().domain),
						Xn(this),
						Zn(this);
				} catch (e) {
					G.log.error(e);
				}
		}),
		(Wn.prototype.setUserId = function(e) {
			try {
				(this.options.userId = (void 0 !== e && null !== e && '' + e) || null),
					Zn(this);
			} catch (e) {
				G.log.error(e);
			}
		}),
		(Wn.prototype.setGroup = function(e, t) {
			if (
				this._apiKeySet('setGroup()') &&
				G.validateInput(e, 'groupType', 'string') &&
				!G.isEmptyString(e)
			) {
				var n = {};
				n[e] = t;
				var r = new te().set(e, t);
				this._logEvent(
					y.IDENTIFY_EVENT,
					null,
					null,
					r.userPropertiesOperations,
					n,
					null,
					null,
					null
				);
			}
		}),
		(Wn.prototype.setOptOut = function(e) {
			if (G.validateInput(e, 'enable', 'boolean'))
				try {
					(this.options.optOut = e), Zn(this);
				} catch (e) {
					G.log.error(e);
				}
		}),
		(Wn.prototype.setSessionId = function(e) {
			if (G.validateInput(e, 'sessionId', 'number'))
				try {
					(this._sessionId = e), Zn(this);
				} catch (e) {
					G.log.error(e);
				}
		}),
		(Wn.prototype.resetSessionId = function() {
			this.setSessionId(new Date().getTime());
		}),
		(Wn.prototype.regenerateDeviceId = function() {
			this.setDeviceId($n() + 'R');
		}),
		(Wn.prototype.setDeviceId = function(e) {
			if (G.validateInput(e, 'deviceId', 'string'))
				try {
					G.isEmptyString(e) || ((this.options.deviceId = '' + e), Zn(this));
				} catch (e) {
					G.log.error(e);
				}
		}),
		(Wn.prototype.setUserProperties = function(e) {
			if (
				this._apiKeySet('setUserProperties()') &&
				G.validateInput(e, 'userProperties', 'object')
			) {
				var t = G.truncate(G.validateProperties(e));
				if (0 !== Object.keys(t).length) {
					var n = new te();
					for (var r in t) t.hasOwnProperty(r) && n.set(r, t[r]);
					this.identify(n);
				}
			}
		}),
		(Wn.prototype.clearUserProperties = function() {
			if (this._apiKeySet('clearUserProperties()')) {
				var e = new te();
				e.clearAll(), this.identify(e);
			}
		});
	var tr = function(e, t) {
		for (var n = 0; n < t._q.length; n++) {
			var r = e[t._q[n][0]];
			'function' === k(r) && r.apply(e, t._q[n].slice(1));
		}
		return e;
	};
	(Wn.prototype.identify = function(e, t) {
		if (this._apiKeySet('identify()'))
			if (
				('object' === k(e) && e.hasOwnProperty('_q') && (e = tr(new te(), e)),
				e instanceof te)
			) {
				if (Object.keys(e.userPropertiesOperations).length > 0)
					return this._logEvent(
						y.IDENTIFY_EVENT,
						null,
						null,
						e.userPropertiesOperations,
						null,
						null,
						null,
						t
					);
				'function' === k(t) &&
					t(0, 'No request sent', { reason: 'No user property operations' });
			} else
				G.log.error(
					'Invalid identify input type. Expected Identify object but saw ' +
						k(e)
				),
					'function' === k(t) &&
						t(0, 'No request sent', { reason: 'Invalid identify input type' });
		else
			'function' === k(t) &&
				t(0, 'No request sent', { reason: 'API key is not set' });
	}),
		(Wn.prototype.groupIdentify = function(e, t, n, r) {
			if (this._apiKeySet('groupIdentify()'))
				if (G.validateInput(e, 'group_type', 'string') && !G.isEmptyString(e))
					if (null !== t && void 0 !== t)
						if (
							('object' === k(n) &&
								n.hasOwnProperty('_q') &&
								(n = tr(new te(), n)),
							n instanceof te)
						) {
							if (Object.keys(n.userPropertiesOperations).length > 0)
								return this._logEvent(
									y.GROUP_IDENTIFY_EVENT,
									null,
									null,
									null,
									(function(e, t, n) {
										return (
											t in e
												? Object.defineProperty(e, t, {
														value: n,
														enumerable: !0,
														configurable: !0,
														writable: !0,
												  })
												: (e[t] = n),
											e
										);
									})({}, e, t),
									n.userPropertiesOperations,
									null,
									r
								);
							'function' === k(r) &&
								r(0, 'No request sent', {
									reason: 'No group property operations',
								});
						} else
							G.log.error(
								'Invalid identify input type. Expected Identify object but saw ' +
									k(n)
							),
								'function' === k(r) &&
									r(0, 'No request sent', {
										reason: 'Invalid identify input type',
									});
					else
						'function' === k(r) &&
							r(0, 'No request sent', { reason: 'Invalid group name' });
				else
					'function' === k(r) &&
						r(0, 'No request sent', { reason: 'Invalid group type' });
			else
				'function' === k(r) &&
					r(0, 'No request sent', { reason: 'API key is not set' });
		}),
		(Wn.prototype.setVersionName = function(e) {
			G.validateInput(e, 'versionName', 'string') &&
				(this.options.versionName = e);
		}),
		(Wn.prototype._logEvent = function(e, t, n, r, o, i, s, a) {
			if ((Xn(this), e))
				if (this.options.optOut)
					'function' === k(a) &&
						a(0, 'No request sent', { reason: 'optOut is set to true' });
				else
					try {
						var u;
						u =
							e === y.IDENTIFY_EVENT || e === y.GROUP_IDENTIFY_EVENT
								? this.nextIdentifyId()
								: this.nextEventId();
						var c = this.nextSequenceNumber(),
							p = 'number' === k(s) ? s : new Date().getTime();
						(!this._sessionId ||
							!this._lastEventTime ||
							p - this._lastEventTime > this.options.sessionTimeout) &&
							(this._sessionId = p),
							(this._lastEventTime = p),
							Zn(this),
							(r = r || {});
						var l = Mn({}, this._apiPropertiesTrackingOptions);
						(n = Mn(l, n || {})), (t = t || {}), (o = o || {}), (i = i || {});
						var f = {
							device_id: this.options.deviceId,
							user_id: this.options.userId,
							timestamp: p,
							event_id: u,
							session_id: this._sessionId || -1,
							event_type: e,
							version_name: nr(this, 'version_name')
								? this.options.versionName || null
								: null,
							platform: nr(this, 'platform') ? this.options.platform : null,
							os_name: nr(this, 'os_name')
								? this._ua.browser.name || null
								: null,
							os_version: nr(this, 'os_version')
								? this._ua.browser.major || null
								: null,
							device_model: nr(this, 'device_model')
								? this._ua.os.name || null
								: null,
							language: nr(this, 'language') ? this.options.language : null,
							api_properties: n,
							event_properties: G.truncate(G.validateProperties(t)),
							user_properties: G.truncate(G.validateProperties(r)),
							uuid: $n(),
							library: { name: 'amplitude-js', version: '4.5.2' },
							sequence_number: c,
							groups: G.truncate(G.validateGroups(o)),
							group_properties: G.truncate(G.validateProperties(i)),
							user_agent: this._userAgent,
						};
						return (
							e === y.IDENTIFY_EVENT || e === y.GROUP_IDENTIFY_EVENT
								? (this._unsentIdentifys.push(f),
								  this._limitEventsQueued(this._unsentIdentifys))
								: (this._unsentEvents.push(f),
								  this._limitEventsQueued(this._unsentEvents)),
							this.options.saveEvents && this.saveEvents(),
							this._sendEventsIfReady(a) ||
								'function' !== k(a) ||
								a(0, 'No request sent', {
									reason: 'No events to send or upload queued',
								}),
							u
						);
					} catch (e) {
						G.log.error(e);
					}
			else
				'function' === k(a) &&
					a(0, 'No request sent', { reason: 'Missing eventType' });
		});
	var nr = function(e, t) {
			return !!e.options.trackingOptions[t];
		},
		rr = function(e) {
			for (
				var t = ['city', 'country', 'dma', 'ip_address', 'region'],
					n = {},
					r = 0;
				r < t.length;
				r++
			) {
				var o = t[r];
				nr(e, o) || (n[o] = !1);
			}
			return n;
		};
	(Wn.prototype._limitEventsQueued = function(e) {
		e.length > this.options.savedMaxCount &&
			e.splice(0, e.length - this.options.savedMaxCount);
	}),
		(Wn.prototype.logEvent = function(e, t, n) {
			return this.logEventWithTimestamp(e, t, null, n);
		}),
		(Wn.prototype.logEventWithTimestamp = function(e, t, n, r) {
			return this._apiKeySet('logEvent()')
				? G.validateInput(e, 'eventType', 'string')
					? G.isEmptyString(e)
						? ('function' === k(r) &&
								r(0, 'No request sent', { reason: 'Missing eventType' }),
						  -1)
						: this._logEvent(e, t, null, null, null, null, n, r)
					: ('function' === k(r) &&
							r(0, 'No request sent', { reason: 'Invalid type for eventType' }),
					  -1)
				: ('function' === k(r) &&
						r(0, 'No request sent', { reason: 'API key not set' }),
				  -1);
		}),
		(Wn.prototype.logEventWithGroups = function(e, t, n, r) {
			return this._apiKeySet('logEventWithGroups()')
				? G.validateInput(e, 'eventType', 'string')
					? this._logEvent(e, t, null, null, n, null, null, r)
					: ('function' === k(r) &&
							r(0, 'No request sent', { reason: 'Invalid type for eventType' }),
					  -1)
				: ('function' === k(r) &&
						r(0, 'No request sent', { reason: 'API key not set' }),
				  -1);
		});
	var or = function(e) {
		return !isNaN(parseFloat(e)) && isFinite(e);
	};
	(Wn.prototype.logRevenueV2 = function(e) {
		if (this._apiKeySet('logRevenueV2()'))
			if (
				('object' === k(e) && e.hasOwnProperty('_q') && (e = tr(new Bn(), e)),
				e instanceof Bn)
			) {
				if (e && e._isValidRevenue())
					return this.logEvent(y.REVENUE_EVENT, e._toJSONObject());
			} else
				G.log.error(
					'Invalid revenue input type. Expected Revenue object but saw ' + k(e)
				);
	}),
		(Wn.prototype.logRevenue = function(e, t, n) {
			return this._apiKeySet('logRevenue()') && or(e) && (void 0 === t || or(t))
				? this._logEvent(
						y.REVENUE_EVENT,
						{},
						{
							productId: n,
							special: 'revenue_amount',
							quantity: t || 1,
							price: e,
						},
						null,
						null,
						null,
						null,
						null
				  )
				: -1;
		}),
		(Wn.prototype.removeEvents = function(e, t) {
			ir(this, '_unsentEvents', e), ir(this, '_unsentIdentifys', t);
		});
	var ir = function(e, t, n) {
		if (!(n < 0)) {
			for (var r = [], o = 0; o < e[t].length; o++)
				e[t][o].event_id > n && r.push(e[t][o]);
			e[t] = r;
		}
	};
	(Wn.prototype.sendEvents = function(e) {
		if (this._apiKeySet('sendEvents()'))
			if (this.options.optOut)
				'function' === k(e) &&
					e(0, 'No request sent', { reason: 'optOut is set to true' });
			else if (0 !== this._unsentCount())
				if (this._sending)
					'function' === k(e) &&
						e(0, 'No request sent', { reason: 'Request already in progress' });
				else {
					this._sending = !0;
					var t =
							(this.options.forceHttps
								? 'https'
								: 'https:' === window.location.protocol
								? 'https'
								: 'http') +
							'://' +
							this.options.apiEndpoint +
							'/',
						n = Math.min(this._unsentCount(), this.options.uploadBatchSize),
						r = this._mergeEventsAndIdentifys(n),
						o = r.maxEventId,
						i = r.maxIdentifyId,
						s = JSON.stringify(r.eventsToSend),
						a = new Date().getTime(),
						u = {
							client: this.options.apiKey,
							e: s,
							v: y.API_VERSION,
							upload_time: a,
							checksum: ne(y.API_VERSION + this.options.apiKey + s + a),
						},
						c = this;
					new Gn(t, u).send(function(t, r) {
						c._sending = !1;
						try {
							200 === t && 'success' === r
								? (c.removeEvents(o, i),
								  c.options.saveEvents && c.saveEvents(),
								  c._sendEventsIfReady(e) || 'function' !== k(e) || e(t, r))
								: 413 === t
								? (1 === c.options.uploadBatchSize && c.removeEvents(o, i),
								  (c.options.uploadBatchSize = Math.ceil(n / 2)),
								  c.sendEvents(e))
								: 'function' === k(e) && e(t, r);
						} catch (e) {}
					});
				}
			else
				'function' === k(e) &&
					e(0, 'No request sent', { reason: 'No events to send' });
		else
			'function' === k(e) &&
				e(0, 'No request sent', { reason: 'API key not set' });
	}),
		(Wn.prototype._mergeEventsAndIdentifys = function(e) {
			for (var t = [], n = 0, r = -1, o = 0, i = -1; t.length < e; ) {
				var s,
					a = o >= this._unsentIdentifys.length,
					u = n >= this._unsentEvents.length;
				if (u && a) {
					G.log.error(
						'Merging Events and Identifys, less events and identifys than expected'
					);
					break;
				}
				a
					? (r = (s = this._unsentEvents[n++]).event_id)
					: u
					? (i = (s = this._unsentIdentifys[o++]).event_id)
					: !('sequence_number' in this._unsentEvents[n]) ||
					  this._unsentEvents[n].sequence_number <
							this._unsentIdentifys[o].sequence_number
					? (r = (s = this._unsentEvents[n++]).event_id)
					: (i = (s = this._unsentIdentifys[o++]).event_id),
					t.push(s);
			}
			return { eventsToSend: t, maxEventId: r, maxIdentifyId: i };
		}),
		(Wn.prototype.setGlobalUserProperties = function(e) {
			this.setUserProperties(e);
		}),
		(Wn.prototype.__VERSION__ = '4.5.2');
	var sr = xt(Object.keys, Object),
		ar = Object.prototype.hasOwnProperty,
		ur = function(e) {
			if (!Rt(e)) return sr(e);
			var t = [];
			for (var n in Object(e)) ar.call(e, n) && 'constructor' != n && t.push(n);
			return t;
		},
		cr = function(e) {
			return $t(e) ? mn(e) : ur(e);
		},
		pr = Object.prototype.hasOwnProperty,
		lr = qn(function(e, t) {
			if (Rt(t) || $t(t)) fn(t, cr(t), e);
			else for (var n in t) pr.call(t, n) && ln(e, n, t[n]);
		}),
		fr = function() {
			(this.options = lr({}, Jn)), (this._q = []), (this._instances = {});
		};
	(fr.prototype.Identify = te),
		(fr.prototype.Revenue = Bn),
		(fr.prototype.getInstance = function(e) {
			e = G.isEmptyString(e) ? y.DEFAULT_INSTANCE : e.toLowerCase();
			var t = this._instances[e];
			return void 0 === t && ((t = new Wn(e)), (this._instances[e] = t)), t;
		}),
		(fr.prototype.init = function(e, t, n, r) {
			this.getInstance().init(
				e,
				t,
				n,
				function(e) {
					(this.options = e.options), 'function' === k(r) && r(e);
				}.bind(this)
			);
		}),
		(fr.prototype.runQueuedFunctions = function() {
			for (var e = 0; e < this._q.length; e++) {
				var t = this[this._q[e][0]];
				'function' === k(t) && t.apply(this, this._q[e].slice(1));
			}
			this._q = [];
			for (var n in this._instances)
				this._instances.hasOwnProperty(n) &&
					this._instances[n].runQueuedFunctions();
		}),
		(fr.prototype.isNewSession = function() {
			return this.getInstance().isNewSession();
		}),
		(fr.prototype.getSessionId = function() {
			return this.getInstance().getSessionId();
		}),
		(fr.prototype.nextEventId = function() {
			return this.getInstance().nextEventId();
		}),
		(fr.prototype.nextIdentifyId = function() {
			return this.getInstance().nextIdentifyId();
		}),
		(fr.prototype.nextSequenceNumber = function() {
			return this.getInstance().nextSequenceNumber();
		}),
		(fr.prototype.saveEvents = function() {
			this.getInstance().saveEvents();
		}),
		(fr.prototype.setDomain = function(e) {
			this.getInstance().setDomain(e);
		}),
		(fr.prototype.setUserId = function(e) {
			this.getInstance().setUserId(e);
		}),
		(fr.prototype.setGroup = function(e, t) {
			this.getInstance().setGroup(e, t);
		}),
		(fr.prototype.setOptOut = function(e) {
			this.getInstance().setOptOut(e);
		}),
		(fr.prototype.regenerateDeviceId = function() {
			this.getInstance().regenerateDeviceId();
		}),
		(fr.prototype.setDeviceId = function(e) {
			this.getInstance().setDeviceId(e);
		}),
		(fr.prototype.setUserProperties = function(e) {
			this.getInstance().setUserProperties(e);
		}),
		(fr.prototype.clearUserProperties = function() {
			this.getInstance().clearUserProperties();
		}),
		(fr.prototype.identify = function(e, t) {
			this.getInstance().identify(e, t);
		}),
		(fr.prototype.setVersionName = function(e) {
			this.getInstance().setVersionName(e);
		}),
		(fr.prototype.logEvent = function(e, t, n) {
			return this.getInstance().logEvent(e, t, n);
		}),
		(fr.prototype.logEventWithGroups = function(e, t, n, r) {
			return this.getInstance().logEventWithGroups(e, t, n, r);
		}),
		(fr.prototype.logRevenueV2 = function(e) {
			return this.getInstance().logRevenueV2(e);
		}),
		(fr.prototype.logRevenue = function(e, t, n) {
			return this.getInstance().logRevenue(e, t, n);
		}),
		(fr.prototype.removeEvents = function(e, t) {
			this.getInstance().removeEvents(e, t);
		}),
		(fr.prototype.sendEvents = function(e) {
			this.getInstance().sendEvents(e);
		}),
		(fr.prototype.setGlobalUserProperties = function(e) {
			this.getInstance().setUserProperties(e);
		}),
		(fr.prototype.__VERSION__ = '4.5.2');
	var dr = window.amplitude || {},
		hr = new fr();
	hr._q = dr._q || [];
	for (var gr in dr._iq)
		dr._iq.hasOwnProperty(gr) && (hr.getInstance(gr)._q = dr._iq[gr]._q || []);
	return hr;
});
