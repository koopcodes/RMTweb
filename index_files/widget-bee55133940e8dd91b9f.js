!(function(e) {
	function t(t) {
		for (
			var r, i, s = t[0], c = t[1], u = t[2], d = 0, p = [];
			d < s.length;
			d++
		)
			(i = s[d]), a[i] && p.push(a[i][0]), (a[i] = 0);
		for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
		for (l && l(t); p.length; ) p.shift()();
		return o.push.apply(o, u || []), n();
	}
	function n() {
		for (var e, t = 0; t < o.length; t++) {
			for (var n = o[t], r = !0, s = 1; s < n.length; s++) {
				var c = n[s];
				0 !== a[c] && (r = !1);
			}
			r && (o.splice(t--, 1), (e = i((i.s = n[0]))));
		}
		return e;
	}
	var r = {},
		a = { 2: 0 };
	var o = [];
	function i(t) {
		if (r[t]) return r[t].exports;
		var n = (r[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
	}
	(i.e = function(e) {
		var t = [],
			n = a[e];
		if (0 !== n)
			if (n) t.push(n[2]);
			else {
				var r = new Promise(function(t, r) {
					n = a[e] = [t, r];
				});
				t.push((n[2] = r));
				var o = document.getElementsByTagName('head')[0],
					s = document.createElement('script');
				(s.charset = 'utf-8'),
					(s.timeout = 120),
					i.nc && s.setAttribute('nonce', i.nc),
					(s.src = (function(e) {
						return (
							i.p +
							'assets/' +
							({}[e] || e) +
							'-' +
							{ 0: 'a03f0c2f67e8e514a3b8' }[e] +
							'.js'
						);
					})(e));
				var c = setTimeout(function() {
					u({ type: 'timeout', target: s });
				}, 12e4);
				function u(t) {
					(s.onerror = s.onload = null), clearTimeout(c);
					var n = a[e];
					if (0 !== n) {
						if (n) {
							var r = t && ('load' === t.type ? 'missing' : t.type),
								o = t && t.target && t.target.src,
								i = new Error(
									'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'
								);
							(i.type = r), (i.request = o), n[1](i);
						}
						a[e] = void 0;
					}
				}
				(s.onerror = s.onload = u), o.appendChild(s);
			}
		return Promise.all(t);
	}),
		(i.m = e),
		(i.c = r),
		(i.d = function(e, t, n) {
			i.o(e, t) ||
				Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: n,
				});
		}),
		(i.r = function(e) {
			Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(i.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return i.d(t, 'a', t), t;
		}),
		(i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = '/deploy/assets/'),
		(i.oe = function(e) {
			throw (console.error(e), e);
		});
	var s = (window.driftWebpackJsonp = window.driftWebpackJsonp || []),
		c = s.push.bind(s);
	(s.push = t), (s = s.slice());
	for (var u = 0; u < s.length; u++) t(s[u]);
	var l = c;
	o.push([1896, 1]), n();
})({
	100: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return r;
		}),
			n.d(t, 'd', function() {
				return a;
			}),
			n.d(t, 'a', function() {
				return o;
			}),
			n.d(t, 'b', function() {
				return i;
			}),
			n.d(t, 'f', function() {
				return s;
			}),
			n.d(t, 'g', function() {
				return c;
			}),
			n.d(t, 'e', function() {
				return u;
			});
		var r = 'SHOW_WELCOME_MESSAGE',
			a = 'SHOW_WELCOME_MESSAGE_DONE',
			o = 'HIDE_WELCOME_MESSAGE',
			i = 'HIDE_WELCOME_MESSAGE_DONE',
			s = 'WELCOME_MESSAGE_MOUSE_ENTER',
			c = 'WELCOME_MESSAGE_MOUSE_LEAVE',
			u = 'WELCOME_MESSAGE_HIDE_ON_STARTUP';
	},
	101: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(12),
				c = n.n(s),
				u = n(15),
				l = n(40),
				d = n.n(l),
				p = n(17),
				_ = n(21),
				f = n(363),
				m = n.n(f),
				b = n(27),
				g = n.n(b),
				h = n(53),
				v = n(28),
				E = n(18),
				y = n(955),
				O = n.n(y),
				C = n(41),
				T = n(381),
				I = n.n(T);
			t.a = g()(
				Object(p.connect)(
					function(e) {
						return {
							utmSource: e.Targeting.page.hostname,
							isEmbeddedMessenger: Object(v.g)(e),
						};
					},
					function(e) {
						return {
							actions: Object(_.bindActionCreators)({ trackClick: h.b }, e),
						};
					}
				),
				m()({
					onClick: function(e) {
						return function(t) {
							t.stopPropagation(),
								e.actions.trackClick({
									view: e.utmContent,
									ctaType: 'branding',
								});
						};
					},
				})
			)(function(t) {
				var n = t.className,
					r = t.message,
					o = void 0 === r ? C.a.poweredBy : r,
					s = t.utmContent,
					l = t.utmSource,
					p = void 0 === l ? 'widget' : l,
					_ = t.onClick,
					f = t.isEmbeddedMessenger,
					m = i()(t, [
						'className',
						'message',
						'utmContent',
						'utmSource',
						'onClick',
						'isEmbeddedMessenger',
					]),
					b = {
						utm_source: p,
						utm_medium: 'web-widget',
						utm_campaign: 'widget-referral',
						utm_content: s,
					},
					g = e.createElement(d.a, { className: I.a.BoltIcon, src: O.a }),
					h = e.createElement(
						'div',
						{ className: I.a.Drift },
						e.createElement('span', { className: I.a.Drift }, 'Drift')
					),
					v = e.createElement(
						u.b,
						a()({}, o, { values: { bolt: g, drift: h } })
					);
				return e.createElement(
					'a',
					a()(
						{
							className: c()('flex', I.a.Branding, n, { floating: f }),
							href: 'https://www.drift.com/powered-by/?' + Object(E.c)(b),
							tabIndex: '1000',
							target: '_blank',
							onClick: _,
						},
						m
					),
					v
				);
			});
		}.call(this, n(0)));
	},
	102: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return o;
		}),
			n.d(t, 'a', function() {
				return i;
			}),
			n.d(t, 'b', function() {
				return s;
			}),
			n.d(t, 'c', function() {
				return c;
			});
		var r = n(846),
			a = n(264),
			o = function(e) {
				return e.DriftUser.driftUsersById;
			},
			i = function(e, t) {
				return o(e)[t.agentId];
			},
			s = function(e, t) {
				var n = t.agentId;
				return (function(e) {
					return e.DriftUser.agentStatusById;
				})(e).get(n, new a.a({ agentId: n }));
			},
			c = function(e) {
				return Object(r.a)(o(e), function(e) {
					return e.bot && 'ENABLED' === e.status;
				});
			};
	},
	104: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return a;
		}),
			n.d(t, 'b', function() {
				return o;
			}),
			n.d(t, 'c', function() {
				return i;
			});
		var r = n(3),
			a = Object(r.Record)({
				slots: Object(r.Set)(),
				slotDuration: '',
				agentTimeZone: null,
				nextRequestStartFrom: null,
			}),
			o = Object(r.Record)({
				id: null,
				url: null,
				availabilitySlot: null,
				slotDuration: 0,
				agentId: null,
				bookingAgentId: null,
				conversationId: null,
				endUserTimeZone: null,
				agentTimeZone: null,
			}),
			i = Object(r.Record)({
				pending: !1,
				error: !1,
				success: !1,
				message: null,
				lastFetched: null,
			});
	},
	107: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return r;
		}),
			n.d(t, 'c', function() {
				return a;
			}),
			n.d(t, 'a', function() {
				return o;
			}),
			n.d(t, 'e', function() {
				return i;
			}),
			n.d(t, 'f', function() {
				return s;
			}),
			n.d(t, 'd', function() {
				return c;
			});
		var r = 'FETCH_ATTACHMENT_PENDING',
			a = 'FETCH_ATTACHMENT_SUCCESS',
			o = 'FETCH_ATTACHMENT_FAILURE',
			i = 'UPLOAD_ATTACHMENT_PENDING',
			s = 'UPLOAD_ATTACHMENT_SUCCESS',
			c = 'UPLOAD_ATTACHMENT_FAILURE';
	},
	108: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		});
		var r = n(2),
			a = n.n(r);
		function o() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			return a()({}, e, t);
		}
	},
	1112: function(e, t, n) {},
	113: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return o;
		}),
			n.d(t, 'f', function() {
				return i;
			}),
			n.d(t, 'e', function() {
				return s;
			}),
			n.d(t, 'a', function() {
				return c;
			}),
			n.d(t, 'c', function() {
				return u;
			}),
			n.d(t, 'b', function() {
				return l;
			});
		var r = n(5),
			a = n(46),
			o = Object(r.b)(a.f),
			i = (Object(r.b)(a.h), Object(r.b)(a.i)),
			s = Object(r.b)(a.g),
			c = Object(r.b)(a.a),
			u = Object(r.b)(a.c),
			l = Object(r.b)(a.b);
	},
	114: function(e, t, n) {
		'use strict';
		n.d(t, 'g', function() {
			return c;
		}),
			n.d(t, 'e', function() {
				return u;
			}),
			n.d(t, 'f', function() {
				return d;
			}),
			n.d(t, 'b', function() {
				return p;
			}),
			n.d(t, 'c', function() {
				return f;
			}),
			n.d(t, 'd', function() {
				return b;
			}),
			n.d(t, 'a', function() {
				return g;
			});
		var r = n(20),
			a = n(9),
			o = n(46),
			i = n(22),
			s = n(6),
			c = function(e) {
				return Object(r.a)(e, 'Targeting.geo.gdprApplicable', !0);
			},
			u = function(e) {
				return 'CA' === Object(r.a)(e, 'Targeting.geo.country', null);
			},
			l = function(e) {
				return Object(r.a)(Object(i.g)(e), 'dataProtection', {});
			},
			d = function(e) {
				var t = Object(r.a)(e, ['Targeting', 'query', o.j], !1),
					n = Object(r.a)(Object(i.g)(e), o.j, !1);
				return !0 === t || 'true' === t || !0 === n;
			},
			p = function(e) {
				return Object(r.a)(l(e), 'targeting', o.d.NONE);
			},
			_ = function(e) {
				return Object(r.a)(l(e), 'default', 'en');
			},
			f = function() {
				return o.e;
			},
			m = function(e) {
				return e.split('-')[0];
			},
			b = Object(a.createSelector)(
				[
					_,
					function(e) {
						return Object(r.a)(l(e), 'policies', {});
					},
					function(e) {
						return navigator
							? navigator && void 0 != navigator.languages
								? (function(e) {
										return m(e[0]);
								  })(navigator.languages)
								: navigator.language
								? m(navigator.language)
								: _(e)
							: _(e);
					},
				],
				function(e, t, n) {
					return Object(r.a)(t, n, Object(r.a)(t, e));
				}
			),
			g = Object(a.createSelector)([s.o, f], function(e, t) {
				var n = !0 === Object(r.a)(e, ['externallyModifiedAttributes', t]);
				return e.didConsentToRequestedConsentId || n;
			});
	},
	1147: function(e, t) {
		e.exports =
			'<svg width="25" height="26" viewBox="0 0 25 26" xmlns="http://www.w3.org/2000/svg"><path d="M23.54 26h-5.174a1.048 1.048 0 0 1-1.035-1.06V1.59c0-.586.464-1.062 1.036-1.062h5.173c.57 0 1.034.476 1.034 1.062v23.35c0 .585-.463 1.06-1.035 1.06zM22.504 2.65H19.4v21.227h3.105V2.65zM15.262 26H10.09a1.048 1.048 0 0 1-1.036-1.06V14.324c0-.585.463-1.06 1.035-1.06h5.172c.572 0 1.035.475 1.035 1.06V24.94c0 .585-.463 1.06-1.035 1.06zm-1.034-10.613h-3.104v8.49h3.104v-8.49zM6.985 26H1.812a1.048 1.048 0 0 1-1.034-1.06V9.02c0-.587.462-1.062 1.034-1.062h5.173c.572 0 1.035.475 1.035 1.06v15.92c0 .587-.463 1.062-1.035 1.062zM5.95 10.08H2.848v13.797H5.95V10.08z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1148: function(e, t) {
		e.exports =
			'<svg width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg"><path d="M23.987 24.98H1.514a1.03 1.03 0 0 1-1.022-1.04V1.06C.492.484.95.02 1.514.02h22.473a1.03 1.03 0 0 1 1.02 1.04v22.88a1.03 1.03 0 0 1-1.02 1.04zM22.965 2.1H2.535v20.8h20.43V2.1zM7.26 11.687l4.343 3.538 6.508-7.57a1.01 1.01 0 0 1 1.443-.1c.424.38.466 1.036.095 1.47l-7.15 8.32a1.01 1.01 0 0 1-1.407.127l-5.107-4.16a1.054 1.054 0 0 1-.16-1.463 1.01 1.01 0 0 1 1.436-.162z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1149: function(e, t) {
		e.exports =
			'<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.748 18.23H5.873l-3.78 4.808a1.016 1.016 0 0 1-1.135.333 1.04 1.04 0 0 1-.684-.98V4.662c0-2.27 1.813-4.116 4.043-4.116h16.43c2.23 0 4.043 1.846 4.043 4.116v9.45c0 2.27-1.813 4.116-4.042 4.116zm2-13.567c0-1.122-.898-2.036-2-2.036H4.318c-1.104 0-2 .914-2 2.036v14.761l2.266-2.885c.012-.016.03-.022.043-.037.048-.055.104-.095.162-.138.05-.04.097-.08.154-.106.055-.028.114-.04.173-.057.07-.02.14-.04.212-.043.017 0 .033-.01.052-.01h15.366c1.102 0 2-.915 2-2.037v-9.45zM18.66 8.868H6.404a1.03 1.03 0 0 1-1.02-1.04c0-.574.456-1.04 1.02-1.04H18.66a1.03 1.03 0 0 1 1.023 1.04 1.03 1.03 0 0 1-1.022 1.04zM6.404 9.908h8.172a1.03 1.03 0 0 1 1.022 1.04 1.03 1.03 0 0 1-1.022 1.04H6.403a1.03 1.03 0 0 1-1.02-1.04c0-.574.456-1.04 1.02-1.04z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1150: function(e, t) {
		e.exports =
			'<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M23.295 24.412a.987.987 0 0 1-1.123-.43L19.9 20.358H9.527c-1.392 0-2.523-1.153-2.523-2.57V16.3c0-.563.448-1.02 1-1.02.553 0 1 .457 1 1.02v1.485c0 .295.235.533.523.533h10.92c.036 0 .067.018.103.022a.96.96 0 0 1 .527.224.984.984 0 0 1 .14.15c.023.026.054.043.073.075l.725 1.154V9.7a.528.528 0 0 0-.523-.532h-1.48c-.55 0-1-.457-1-1.02 0-.56.45-1.018 1-1.018h1.48c1.392 0 2.524 1.152 2.524 2.57V23.433c0 .452-.293.85-.72.978zM14.49 13.226H4.116L1.844 16.85a.997.997 0 0 1-1.124.43 1.017 1.017 0 0 1-.72-.978V2.57C0 1.152 1.132 0 2.523 0H14.49c1.39 0 2.52 1.152 2.52 2.57v8.085c0 1.418-1.13 2.57-2.52 2.57zm.52-10.656a.528.528 0 0 0-.52-.532H2.522c-.288 0-.522.24-.522.532v10.242l.726-1.153c.02-.032.05-.05.07-.076a.897.897 0 0 1 .296-.256.92.92 0 0 1 .372-.118c.037-.004.068-.022.104-.022h10.92c.288 0 .522-.238.522-.533V2.57z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1151: function(e, t) {
		e.exports =
			'<svg width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><path d="M22.465 22.085c-.53 0-.88-.44-.88-.98v-1.062L6.186 17.136v3.97a.97.97 0 0 1-.958.98.968.968 0 0 1-.96-.98v-4.332l-2.103-.397C1.2 16.195.44 15.265.44 14.26V8.39c0-1.005.76-1.935 1.727-2.117l19.417-3.668v-1.06c0-.54.352-.98.88-.98a.97.97 0 0 1 .96.98v19.56a.97.97 0 0 1-.96.98zm-.88-17.49L2.514 8.197c-.065.012-.16.127-.16.194v5.87c0 .065.095.182.16.193l19.07 3.6V4.596z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1152: function(e, t) {
		e.exports =
			'<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.788 24.5C6.168 24.5.78 19.117.78 12.5S6.167.5 12.788.5c6.622 0 12.008 5.383 12.008 12s-5.386 12-12.008 12zm9.956-11h-9.542l-6.74 6.74a9.958 9.958 0 0 0 6.326 2.26c5.18 0 9.452-3.953 9.956-9zm-19.962-1c0 2.398.85 4.6 2.264 6.325l6.742-6.74V2.55c-5.05.504-9.006 4.774-9.006 9.95zM13.79 2.55v8.95h8.954c-.47-4.717-4.235-8.48-8.955-8.95z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1153: function(e, t) {
		e.exports =
			'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.354 2.117L11.64 15.775a.977.977 0 0 1-.703.34h-.04a.976.976 0 0 1-.688-.286L5.326 10.95a.975.975 0 1 1 1.38-1.38l4.136 4.133L21.873.847a.977.977 0 0 1 1.48 1.27zm-9.45 2.21H2.136L2.113 21.97l17.675-.002v-11.76c0-.54.333-.92.873-.92s.976.436.976.974v12.682c0 .54-.436.976-.975.976H1.138a.976.976 0 0 1-.977-.976V3.434c0-.54.438-.977.977-.977h12.69c.54 0 .976.437.976.976 0 .538-.36.895-.9.895z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1154: function(e, t) {
		e.exports =
			'<svg width="26" height="23" viewBox="0 0 26 23" xmlns="http://www.w3.org/2000/svg"><path d="M23.348 17.854H10.56l-3.78 4.72a1.02 1.02 0 0 1-1.136.327 1.02 1.02 0 0 1-.683-.962v-4.084H2.92a2.044 2.044 0 0 1-2.043-2.04V2.54C.875 1.416 1.79.5 2.918.5h20.43c1.127 0 2.043.916 2.043 2.042v13.27a2.044 2.044 0 0 1-2.042 2.042zm0-15.312H2.918v13.27h3.064c.564 0 1.022.458 1.022 1.02v2.196l2.267-2.832c.013-.015.03-.02.043-.035.048-.053.105-.093.163-.136.05-.037.098-.077.154-.103.055-.026.114-.038.175-.054.07-.02.138-.038.21-.042.02 0 .034-.01.053-.01h13.28V2.54zM5.982 10.708c0-.563.458-1.02 1.022-1.02h8.172a1.022 1.022 0 0 1 0 2.04H7.004a1.022 1.022 0 0 1-1.022-1.02zm0-3.062c0-.564.458-1.02 1.022-1.02h12.258a1.022 1.022 0 0 1 0 2.04H7.004a1.022 1.022 0 0 1-1.022-1.02z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1155: function(e, t) {
		e.exports =
			'<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M22.814 12.25h-1.362v3.063a1.02 1.02 0 0 1-1.744.72L15.92 12.25H11.92c-.94 0-1.703-.785-1.703-1.75V1.75c0-.965.764-1.75 1.703-1.75h10.896c.938 0 1.702.785 1.702 1.75v8.75c0 .965-.764 1.75-1.702 1.75zm-.34-10.208H12.257v8.166h4.086a1.032 1.032 0 0 1 .723.3l2.342 2.34v-1.62c0-.562.456-1.02 1.02-1.02h2.043V2.042zM8.17 10.208h-6.13v8.167h2.044c.564 0 1.022.457 1.022 1.02v1.62l2.34-2.34a1.022 1.022 0 0 1 .724-.3h4.086V14.29a1.02 1.02 0 0 1 2.043 0v4.377c0 .965-.763 1.75-1.702 1.75H8.595L4.808 24.2a1.022 1.022 0 0 1-1.743-.72v-3.063H1.702c-.938 0-1.702-.785-1.702-1.75v-8.75c0-.965.764-1.75 1.702-1.75h6.47a1.022 1.022 0 0 1 0 2.04z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1156: function(e, t) {
		e.exports =
			'<svg width="26" height="21" viewBox="0 0 26 21" xmlns="http://www.w3.org/2000/svg"><path d="M25.11 9.16a4.084 4.084 0 0 1-4.087 4.075v4.076a1.017 1.017 0 0 1-1.02 1.018 1.03 1.03 0 0 1-.508-.133l-6.915-3.94H6.722v5.092a1.02 1.02 0 0 1-1.02 1.02 1.02 1.02 0 0 1-1.023-1.02v-5.093H2.635a2.042 2.042 0 0 1-2.043-2.037V6.104c0-1.123.916-2.038 2.043-2.038h9.944l6.915-3.94a1.02 1.02 0 0 1 1.528.884v4.075A4.086 4.086 0 0 1 25.11 9.16zM4.68 6.104H2.635v6.113H4.68V6.104zm14.3-3.338L13.358 5.97a.984.984 0 0 1-.543.116c-.03.003-.058.018-.09.018H6.724v6.113h6.128c.022 0 .04.01.06.01.068.005.132.023.2.042.066.016.13.032.192.062.018.01.038.008.056.018l5.622 3.205V2.765zm2.043 4.357v4.075a2.044 2.044 0 0 0 2.043-2.038 2.043 2.043 0 0 0-2.043-2.037z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1157: function(e, t) {
		e.exports =
			'<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.964 15.697a4.105 4.105 0 0 0 2.1-2.088c.16-.36.83-.698 1.225-.698h6.003c.297 0 .54.237.73.464.19.226.268.525.215.815-.9 4.867-4.792 8.737-9.69 9.63a.994.994 0 0 1-1.18-.976l.002-6.24c0-.392.233-.748.594-.907zm9.33-4.772h-6.005c-.396 0-1.067-.158-1.227-.517a4.068 4.068 0 0 0-3.71-2.414c-2.226 0-4.037 1.802-4.037 4.015a4.04 4.04 0 0 0 2.428 3.687c.36.16.54.794.54 1.188v5.96c0 .294-.078.574-.306.763a1 1 0 0 1-.82.212C4.43 22.774.272 17.806.272 12.01.272 5.386 5.692 0 12.354 0c5.833 0 10.83 4.132 11.884 9.827a.994.994 0 0 1-.215.815c-.19.226-.433.283-.73.283z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1158: function(e, t) {
		e.exports =
			'<svg width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg"><path d="M7.61 17.4c.78.825 2.09.836 2.882.02L23.645 3.88a1.99 1.99 0 0 0-.042-2.818 1.994 1.994 0 0 0-2.818.042L9.07 13.134 4.135 7.9a1.994 1.994 0 0 0-2.817-.086 1.99 1.99 0 0 0-.086 2.816l6.377 6.77z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1159: function(e, t) {
		e.exports =
			'<svg width="25" height="23" viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M24.892 9.953c0-5.5-5.476-9.953-12.258-9.953C5.854 0 .376 4.452.376 9.953c0 3.318 1.987 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.843 4.084-.142.14-.17.368-.114.567a.524.524 0 0 0 .482.312c2.95 0 5.334-1.93 6.61-3.206.654.086 1.363.142 2.072.142 6.782 0 12.258-4.452 12.258-9.953zm-5.128-.286H7.506a1.022 1.022 0 0 1 0-2.042h12.258a1.022 1.022 0 0 1 0 2.042zm-12.258 2.02h8.172a1.022 1.022 0 0 1 0 2.042H7.506a1.022 1.022 0 0 1 0-2.043z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1160: function(e, t) {
		e.exports =
			'<svg width="25" height="23" viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1161: function(e, t) {
		e.exports =
			'<svg width="21" height="18" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.096 11.3V6.5c0-.828.656-1.648 1.466-1.83l13.044-2.944A1.248 1.248 0 0 1 18.856.5c.69 0 1.25.562 1.25 1.252v14.996c0 .692-.554 1.252-1.25 1.252a1.253 1.253 0 0 1-1.25-1.226L9.15 14.866l-.377 1.97a.967.967 0 0 1-1.167.765l-3.527-.75c-.543-.114-.983-.663-.985-1.213l-.01-4.34.01.003zM.094 6.008C.094 5.45.538 5 1.094 5c.553 0 1 .457 1 1.008v6.484c0 .557-.443 1.008-1 1.008-.552 0-1-.457-1-1.008V6.008zm4.33 7.784l3.54.81-.23 1.31a.476.476 0 0 1-.578.386l-2.26-.48a.636.636 0 0 1-.49-.61l.018-1.416z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1162: function(e, t) {
		e.exports =
			'<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M13.712.443v6.12a6.07 6.07 0 0 1 4.716 4.725h6.128c-.57-5.715-5.13-10.274-10.844-10.845z"></path><path d="M11.288.443C5.174 1.053.383 6.228.383 12.5c0 6.682 5.435 12.117 12.117 12.117 2.906 0 5.567-1.037 7.657-2.748l-4.33-4.333a5.995 5.995 0 0 1-3.327 1.02A6.066 6.066 0 0 1 6.44 12.5c0-2.926 2.087-5.373 4.848-5.936V.444z"></path><path d="M21.87 20.156a12.05 12.05 0 0 0 2.686-6.444H18.44a6.014 6.014 0 0 1-.897 2.117l4.327 4.325z"></path></g></svg>';
	},
	1163: function(e, t) {
		e.exports =
			'<svg width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg"><path d="M10.792 15.365a1.23 1.23 0 0 0 1.807.014l8.25-8.69c.48-.506.468-1.315-.027-1.807a1.23 1.23 0 0 0-1.768.027l-7.345 7.723L8.612 9.27a1.23 1.23 0 0 0-1.767-.056 1.298 1.298 0 0 0-.053 1.806l4 4.345zM1.45.178C.76.178.2.75.2 1.456v20.19c0 .704.56 1.276 1.25 1.276h19.004c.69 0 1.25-.572 1.25-1.277v-5.878c0-.706-.56-1.278-1.25-1.278s-1.25.57-1.25 1.277v4.6L2.7 20.36l.004-17.626h8.498c.69 0 1.25-.572 1.25-1.278 0-.706-.56-1.278-1.25-1.278H1.45z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1164: function(e, t) {
		e.exports =
			'<svg width="25" height="23" viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M20.46 17.73H5.596L1.82 22.545a1.014 1.014 0 0 1-1.136.334A1.04 1.04 0 0 1 0 21.893V4.142C0 1.87 1.812.02 4.04.02h16.42c2.228 0 4.04 1.85 4.04 4.122v9.465c0 2.273-1.812 4.122-4.04 4.122zm-2.085-9.376H6.125c-.564 0-1.02-.467-1.02-1.042S5.56 6.27 6.125 6.27h12.25c.563 0 1.02.467 1.02 1.042s-.457 1.042-1.02 1.042zm-12.25 2.062h8.167c.563 0 1.02.466 1.02 1.04 0 .576-.457 1.043-1.02 1.043H6.125c-.564 0-1.02-.47-1.02-1.044s.456-1.04 1.02-1.04z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1165: function(e, t) {
		e.exports =
			'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1166: function(e, t) {
		e.exports =
			'<svg width="26" height="17" viewBox="0 0 55 34" xmlns="http://www.w3.org/2000/svg"><path d="M5.403 26.03A4.508 4.508 0 0 0 5 26.008a5 5 0 0 1-1.734-9.69c.54-.2 26.505-12.064 26.505-12.064 1.514-.69 2.932.08 3.182 1.718l3.596 23.573c.25 1.64-.848 2.677-2.452 2.323 0 0-6.97-1.55-14.115-3.057C18.96 31.83 16.175 34 12.9 34c-4.142 0-7.5-3.47-7.5-7.75 0-.073 0-.146.003-.22zm11.438 2.09L9 26.6s.002.54.005.607a4 4 0 0 0 7.836.914zM40.965 9.253l10-5.5A2 2 0 1 0 49.036.248l-10 5.5a2 2 0 1 0 1.928 3.504zm.987 17.17l10.5 3a2 2 0 1 0 1.1-3.845l-10.5-3a2 2 0 1 0-1.1 3.846zm-.098-8.078l10.5-1.875a2 2 0 0 0-.704-3.94l-10.5 1.876a2 2 0 0 0 .704 3.938z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	1168: function(e, t, n) {
		e.exports = n.p + 'static/images/ea0564c445bc8415ec461367cc78cd01.svg';
	},
	1169: function(e, t, n) {
		e.exports = n.p + 'static/images/f4bf4c520d8e139ef455abfb7e6225d6.svg';
	},
	1171: function(e, t, n) {},
	1174: function(e, t, n) {},
	1177: function(e, t) {
		e.exports =
			'<svg width="40" height="29" viewBox="0 0 40 29" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M.3.5c-.185.182-.3.434-.3.713v26.504c0 .55.452.998 1.01.998h37.98c.56 0 1.01-.447 1.01-.998V1.213c0-.28-.115-.53-.302-.712L20.724 18.528c-.394.374-1.048.38-1.448 0L.3.5z"></path><path d="M3.5 0h33L20.73 14.964c-.403.382-1.06.38-1.46 0L3.5 0z"></path></g></svg>';
	},
	1200: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22 24H2a2 2 0 0 1-2-2v-6a1 1 0 0 1 2 0v6h20v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2zm-9.29-6.3a1 1 0 0 1-1.41 0l-5-5a1 1 0 1 1 1.41-1.4L11 14.58V1a1 1 0 0 1 2 0v13.58l3.29-3.29a1 1 0 1 1 1.41 1.41l-5 5z"></path></svg>';
	},
	1227: function(e, t) {
		e.exports =
			'<svg viewBox="0 0 82 60" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M0 9.35C0 4.2 4.14 0 9.26 0H72.5c5.12 0 9.27 4.2 9.27 9.35v40.53c0 5.17-4.14 9.36-9.26 9.36H9.28c-5.1 0-9.26-4.2-9.26-9.36V9.35zm9.25-4.67h63.27c2.55 0 4.62 2.08 4.62 4.67V49.9c0 2.57-2.07 4.66-4.62 4.66H9.25c-2.55 0-4.62-2.08-4.62-4.67V9.33c0-2.58 2.07-4.67 4.62-4.67z"></path><path d="M34.67 32.86L2.4 10.56c-.9-.62-1.13-1.86-.52-2.76.6-.9 1.98-2 2.88-1.37l32.27 22.3c2.43 1.68 5.57 1.68 8 0L77.3 6.43c.9-.62 1.97.46 2.58 1.37.62.9.4 2.14-.5 2.76L47.1 32.86c-1.88 1.3-4.05 1.96-6.2 1.96-2.18 0-4.35-.65-6.23-1.96z"></path></g></svg>';
	},
	125: function(e, t, n) {
		'use strict';
		var r = n(34),
			a = function(e) {
				return (function(e) {
					for (
						var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 4,
							n =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: '0';
						e.length < t;

					)
						e = n + e;
					return e;
				})(e.toString(16), 4, '0');
			};
		t.a = function() {
			var e = window.crypto || window.msCrypto;
			if (e && e.getRandomValues)
				try {
					return (function(e) {
						var t = new window.Uint16Array(8);
						return (
							e.getRandomValues(t),
							(t[3] = (4095 & t[3]) | 16384),
							(t[4] = (16383 & t[4]) | 32768),
							[
								a(t[0]) + a(t[1]),
								a(t[2]),
								a(t[3]),
								a(t[4]),
								a(t[5]) + a(t[6]) + a(t[7]),
							].join('-')
						);
					})(e);
				} catch (e) {
					r.a.log("Couldn't generate uuid from Crypto", e);
				}
			'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
				var t = (16 * Math.random()) | 0;
				return ('x' === e ? t : (3 & t) | 8).toString(16);
			});
		};
	},
	126: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return a;
		}),
			n.d(t, 'd', function() {
				return o;
			}),
			n.d(t, 'a', function() {
				return i;
			}),
			n.d(t, 'b', function() {
				return s;
			});
		var r = function(e) {
				return '@@widget/typing/' + e;
			},
			a = r('TYPING'),
			o = r('TYPING_FINISHED'),
			i = r('END_USER_TYPING'),
			s = r('END_USER_TYPING_FINISHED');
	},
	133: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					8
				),
				babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
				),
				react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17),
				redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21),
				classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_8__
				),
				react_hotkeys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(453),
				react_hotkeys__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					react_hotkeys__WEBPACK_IMPORTED_MODULE_9__
				),
				react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					585
				),
				react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__
				),
				utils_linkify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(948),
				react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					124
				),
				react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_12__
				),
				_BrandingCopy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(101),
				_ComposerMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(947),
				_Drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(946),
				_EmojiPicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(944),
				_ConnectionStatus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					941
				),
				_SendMessageButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					940
				),
				recompose_compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					27
				),
				recompose_compose__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
					recompose_compose__WEBPACK_IMPORTED_MODULE_19__
				),
				Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					47
				),
				Widget_modules_Bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					74
				),
				Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					22
				),
				Widget_modules_Consent_selectors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					114
				),
				Widget_selectors__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6),
				Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					16
				),
				Widget_modules_rating_selectors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
					220
				),
				Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
					28
				),
				utils_color__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(160),
				react_dropzone__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(938),
				react_dropzone__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(
					react_dropzone__WEBPACK_IMPORTED_MODULE_29__
				),
				_messages__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(258),
				_AttachmentUploadProgress__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
					841
				),
				utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
					32
				),
				lodash_es_get__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(20),
				_style_styl__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(273),
				_style_styl__WEBPACK_IMPORTED_MODULE_34___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_34__
				),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
					40
				),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_35___default = __webpack_require__.n(
					svg_inline_react__WEBPACK_IMPORTED_MODULE_35__
				),
				_svg_inline_removeTags_true_removeSVGTagAttrs_false_images_paper_plane_solid_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
					584
				),
				_svg_inline_removeTags_true_removeSVGTagAttrs_false_images_paper_plane_solid_svg__WEBPACK_IMPORTED_MODULE_36___default = __webpack_require__.n(
					_svg_inline_removeTags_true_removeSVGTagAttrs_false_images_paper_plane_solid_svg__WEBPACK_IMPORTED_MODULE_36__
				),
				_React = React,
				Component = _React.Component,
				dom = _React.DOM,
				component = _React.createElement,
				PropTypes = _React.PropTypes,
				Composer = (function(_Component) {
					function Composer(props) {
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
							this,
							Composer
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.getShouldRenderEnterPrompt = _this.getShouldRenderEnterPrompt.bind(
								_this
							)),
							(_this.handleInputChange = _this.handleInputChange.bind(_this)),
							(_this.handleFocus = _this.handleFocus.bind(_this)),
							(_this.handleBlur = _this.handleBlur.bind(_this)),
							(_this.handleComposerMouseDown = _this.handleComposerMouseDown.bind(
								_this
							)),
							(_this.handleAttachmentIconClick = _this.handleAttachmentIconClick.bind(
								_this
							)),
							(_this.handleEmojiMenuButtonClick = _this.handleEmojiMenuButtonClick.bind(
								_this
							)),
							(_this.handleEmojiSelect = _this.handleEmojiSelect.bind(_this)),
							(_this.handleSubmit = _this.handleSubmit.bind(_this));
						var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
							this,
							(
								Composer.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(
									Composer
								)
							).call(this, props)
						);
						return (
							(_this.shouldRenderNewComposer = function() {
								var e = _this.props,
									t = e.conversation,
									n = e.hasConversationRatingGate;
								return e.isEmbeddedMessenger || (n && t && t.get('id'));
							}),
							(_this.shouldRenderNewEnterPrompt = function() {
								var e = _this.props,
									t = e.conversation,
									n = e.hasConversationRatingGate;
								return e.isEmbeddedMessenger || (n && t && t.get('id'));
							}),
							(_this.getTextAreaClassName = function() {
								return _this.shouldRenderNewComposer()
									? _style_styl__WEBPACK_IMPORTED_MODULE_34___default.a[
											'Composer-textarea'
									  ]
									: '' +
											classnames__WEBPACK_IMPORTED_MODULE_8___default()(
												_style_styl__WEBPACK_IMPORTED_MODULE_34___default.a[
													'Composer-textarea'
												],
												_this.props.size
											);
							}),
							(_this.state = { input: '', focus: !1, emojiDrawerActive: !1 }),
							babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
								_this
							)
						);
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
							Composer,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(
							Composer,
							null,
							[
								{
									key: 'initClass',
									value: function() {
										(this.propTypes = {
											onSubmit: PropTypes.func,
											onChange: PropTypes.func,
											onFocus: PropTypes.func,
											onInputMouseDown: PropTypes.func,
											onUploadAttachment: PropTypes.func,
											conversation: PropTypes.object,
											conversationLastDriftUser: PropTypes.object,
											placeholder: PropTypes.string,
											activeColor: PropTypes.string,
											showBranding: PropTypes.bool,
											hasActiveBorderOnFocus: PropTypes.bool,
											isAway: PropTypes.bool,
											size: PropTypes.oneOf(['medium', 'large']),
											variant: PropTypes.oneOf(['regular', 'minimal']),
											minRows: PropTypes.number,
											maxRows: PropTypes.number,
											autoFocus: PropTypes.bool,
											disabled: PropTypes.bool,
											disabledPrompt: PropTypes.bool,
											connectionStatus: PropTypes.oneOf([
												'pending',
												'failure',
												'success',
											]).isRequired,
											actions: PropTypes.shape({
												bootstrapEndUser: PropTypes.func.isRequired,
											}).isRequired,
										}),
											(this.defaultProps = {
												showBranding: !0,
												isAway: !1,
												size: 'large',
												variant: 'regular',
												autoFocus: !0,
												disabled: !1,
												disabledPrompt: !1,
												minRows: 1,
												maxRows: 5,
												hasActiveBorderOnFocus: !0,
											});
									},
								},
							]
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(
							Composer,
							[
								{
									key: 'renderBranding',
									value: function() {
										return dom.div(
											{
												key: 'branding',
												className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
													'flex',
													this.props.variant,
													_style_styl__WEBPACK_IMPORTED_MODULE_34___default.a
														.Branding
												),
											},
											component(_BrandingCopy__WEBPACK_IMPORTED_MODULE_13__.a, {
												utmContent: this.props.utmContent,
											})
										);
									},
								},
								{
									key: 'renderEnterPrompt',
									value: function() {
										var e = this.props,
											t = e.connectionStatus,
											n = e.activeColor,
											r = e.isAway,
											a = e.isEmbeddedMessenger;
										return 'success' === t && this.shouldRenderNewEnterPrompt()
											? React.createElement(
													'div',
													{
														key: 'enter-prompt',
														className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
															'new-enter-prompt',
															{ 'new-enter-prompt-clp': a }
														),
													},
													React.createElement(
														'button',
														{
															className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
																'send-button',
																{ 'send-button-clp': a }
															),
															onClick: this.handleSubmit,
															tabIndex: '1000',
														},
														React.createElement(
															svg_inline_react__WEBPACK_IMPORTED_MODULE_35___default.a,
															{
																src:
																	_svg_inline_removeTags_true_removeSVGTagAttrs_false_images_paper_plane_solid_svg__WEBPACK_IMPORTED_MODULE_36___default.a,
															}
														)
													)
											  )
											: dom.div(
													{ key: 'enter-prompt', className: 'enter-prompt' },
													'success' === t
														? component(
																_SendMessageButton__WEBPACK_IMPORTED_MODULE_18__.a,
																{
																	color: n,
																	isAway: r,
																	onClick: this.handleSubmit,
																}
														  )
														: component(
																_ConnectionStatus__WEBPACK_IMPORTED_MODULE_17__.a,
																{ style: { marginTop: '2px' } }
														  )
											  );
									},
								},
								{
									key: 'getShouldRenderEnterPrompt',
									value: function() {
										return this.state.input.trim().length > 0;
									},
								},
								{
									key: 'composerStyle',
									value: function() {
										return this.props.isEmbeddedMessenger
											? 'floating'
											: this.shouldRenderNewComposer()
											? 'compact'
											: 'default';
									},
								},
								{
									key: 'shouldRenderActiveComposerBorderColor',
									value: function() {
										return (
											this.props.hasActiveBorderOnFocus &&
											this.state.focus &&
											!this.props.disabled &&
											!this.shouldRenderNewComposer() &&
											!this.props.isEmbeddedMessenger
										);
									},
								},
								{
									key: 'renderComposer',
									value: function() {
										var e,
											t = this,
											n = this.composerStyle();
										return dom.div(
											{
												className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
													'Composer',
													this.props.variant,
													n,
													((e = {}),
													babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														_style_styl__WEBPACK_IMPORTED_MODULE_34___default.a
															.hasActiveBorderOnFocus,
														this.props.hasActiveBorderOnFocus
													),
													babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														'disabled',
														this.props.disabled && this.props.disabledPrompt
													),
													babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														'mobile',
														Object(
															utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_32__.d
														)()
													),
													e)
												),
												style: {
													borderTopColor: this.shouldRenderActiveComposerBorderColor()
														? '' + this.props.activeColor
														: void 0,
												},
											},
											null != this.props.conversation &&
												this.props.allowFileUpload &&
												component(
													_AttachmentUploadProgress__WEBPACK_IMPORTED_MODULE_31__.a,
													{ uploadNewFile: this.handleAttachmentIconClick }
												),
											dom.div(
												{ className: 'flex-column' },
												component(
													react_hotkeys__WEBPACK_IMPORTED_MODULE_9__.HotKeys,
													{
														keyMap: { onEnter: ['enter'] },
														handlers: { onEnter: this.handleSubmit },
														className: 'enter-to-send',
													},
													component(
														react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10___default.a,
														{
															ref: function(e) {
																return (t.textarea = e);
															},
															className: this.getTextAreaClassName(),
															disabled: this.props.disabled,
															minRows: this.props.minRows,
															maxRows: this.props.maxRows,
															tabIndex: 1e3,
															placeholder: this.props.placeholder,
															size: this.props.size,
															autoFocus: this.props.autoFocus,
															onChange: this.handleInputChange,
															onFocus: this.handleFocus,
															onBlur: this.handleBlur,
															onMouseDown: this.props.onInputMouseDown,
														}
													)
												),
												dom.div(
													{
														className:
															_style_styl__WEBPACK_IMPORTED_MODULE_34___default
																.a['Composer-footer'],
													},
													component(
														_ComposerMenu__WEBPACK_IMPORTED_MODULE_14__.a,
														{
															color: this.props.activeColor,
															floating: this.props.isEmbeddedMessenger,
															allowAttachments:
																null != this.props.conversation &&
																this.props.allowFileUpload,
															allowEmoji: null != this.props.conversation,
															disabled: this.props.disabled,
															onAttachmentClick: this.handleAttachmentIconClick,
															onEmojiClick: this.handleEmojiMenuButtonClick,
															emojiDrawerActive: this.state.emojiDrawerActive,
														}
													),
													dom.div(
														{ className: 'footer' },
														component(
															react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_12___default.a,
															{
																transitionName: 'footer',
																transitionEnterTimeout: 150,
																transitionLeaveTimeout: 150,
															},
															t.getShouldRenderEnterPrompt()
																? t.renderEnterPrompt()
																: t.props.showBranding
																? t.renderBranding()
																: void 0
														)
													)
												),
												dom.div(
													{},
													component(
														react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_12___default.a,
														{
															transitionName: 'footer',
															transitionEnterTimeout: 150,
															transitionLeaveTimeout: 150,
														},
														(function() {
															if (
																Object(
																	lodash_es_get__WEBPACK_IMPORTED_MODULE_33__.a
																)(
																	t.props,
																	'currentConsentPolicy.privacyPolicyAlwaysOn'
																) ||
																t.props.isEmbeddedMessenger
															) {
																var e = Object(
																		lodash_es_get__WEBPACK_IMPORTED_MODULE_33__.a
																	)(
																		t.props,
																		'currentConsentPolicy.privacyPolicyLink'
																	),
																	n = Object(
																		lodash_es_get__WEBPACK_IMPORTED_MODULE_33__.a
																	)(
																		t.props,
																		'currentConsentPolicy.privacyPolicyLinkText'
																	);
																if (e)
																	return React.createElement(
																		'div',
																		{ className: 'privacy-footer' },
																		React.createElement(
																			'a',
																			{
																				href: e,
																				target: '_blank',
																				className: 'privacy-footer-link',
																			},
																			n || 'Privacy Policy'
																		)
																	);
															}
														})()
													)
												),
												component(
													_Drawer__WEBPACK_IMPORTED_MODULE_15__.a,
													{ isOpen: this.state.emojiDrawerActive },
													component(
														_EmojiPicker__WEBPACK_IMPORTED_MODULE_16__.a,
														{ onSelect: this.handleEmojiSelect }
													)
												)
											)
										);
									},
								},
								{
									key: 'handleInputChange',
									value: function(e) {
										var t = e.target.value;
										return (
											this.setState({ input: t }),
											this.props.onChange && this.props.onChange(t)
										);
									},
								},
								{
									key: 'handleFocus',
									value: function() {
										return (
											this.setState({ focus: !0, emojiDrawerActive: !1 }),
											this.props.actions.bootstrapEndUser(),
											this.props.onFocus && this.props.onFocus()
										);
									},
								},
								{
									key: 'handleBlur',
									value: function() {
										return (
											this.setState({ focus: !1 }),
											this.props.onBlur && this.props.onBlur()
										);
									},
								},
								{
									key: 'handleComposerMouseDown',
									value: function(e) {
										return 'function' == typeof this.props.onInputMouseDown
											? this.props.onInputMouseDown(e)
											: void 0;
									},
								},
								{
									key: 'handleAttachmentIconClick',
									value: function() {
										return this.dropZone.open();
									},
								},
								{
									key: 'handleEmojiMenuButtonClick',
									value: function() {
										return this.setState(function(e) {
											return { emojiDrawerActive: !e.emojiDrawerActive };
										});
									},
								},
								{
									key: 'handleEmojiSelect',
									value: function(e) {
										return this.setState(function(t) {
											var n = t.input + ' ' + e.native + ' ';
											return (
												(this.textarea.value = n),
												{ emojiDrawerActive: !1, input: n }
											);
										});
									},
								},
								{
									key: 'handleSubmit',
									value: function(e) {
										if ((e.preventDefault(), !this.props.disabled)) {
											var t = this.textarea.value.trim();
											return t && 'success' === this.props.connectionStatus
												? (this.setState({ input: '', emojiDrawerActive: !1 }),
												  (this.textarea.value = ''),
												  this.props.onSubmit &&
														this.props.onSubmit(
															Object(
																utils_linkify__WEBPACK_IMPORTED_MODULE_11__.a
															)(t)
														))
												: void 0;
										}
									},
								},
								{
									key: 'render',
									value: function() {
										var e,
											t = this;
										return null != this.props.conversation &&
											this.props.allowFileUpload
											? component(
													react_dropzone__WEBPACK_IMPORTED_MODULE_29___default.a,
													{
														ref: function(e) {
															return (t.dropZone = e);
														},
														className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
															_style_styl__WEBPACK_IMPORTED_MODULE_34___default
																.a['Composer-dropzone'],
															((e = {}),
															babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
																e,
																this.props.continuousBackgroundGradient,
																this.props.isEmbeddedMessenger &&
																	!Object(
																		utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_32__.d
																	)()
															),
															babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
																e,
																'floating',
																this.props.isEmbeddedMessenger
															),
															babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
																e,
																'mobile',
																Object(
																	utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_32__.d
																)()
															),
															e)
														),
														activeClassName: 'active',
														activeStyle: {
															backgroundColor: Object(
																utils_color__WEBPACK_IMPORTED_MODULE_28__.d
															)(this.props.activeColor, 0.05),
														},
														disableClick: !0,
														disablePreview: !0,
														onDrop: this.props.onUploadAttachment,
													},
													this.renderComposer()
											  )
											: this.renderComposer();
									},
								},
							]
						),
						Composer
					);
				})(Component);
			Composer.initClass();
			var mapStateToProps = function(e) {
					return {
						currentConsentPolicy: Widget_modules_Consent_selectors__WEBPACK_IMPORTED_MODULE_23__.d(
							e
						),
						showBranding: Object(
							Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_22__.m
						)(e),
						connectionStatus: Object(
							Widget_selectors__WEBPACK_IMPORTED_MODULE_24__.i
						)(e),
						isAway: !Object(
							Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_25__.i
						)(e),
						allowFileUpload: Object(
							Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_22__.b
						)(e),
						hasConversationRatingGate: Object(
							Widget_modules_rating_selectors__WEBPACK_IMPORTED_MODULE_26__.b
						)(e),
						isEmbeddedMessenger: Object(
							Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_27__.g
						)(e),
						continuousBackgroundGradient: Object(
							Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_27__.c
						)(e),
					};
				},
				mapDispatchToProps = function(e) {
					return {
						actions: Object(
							redux__WEBPACK_IMPORTED_MODULE_7__.bindActionCreators
						)(
							{
								bootstrapEndUser:
									Widget_modules_Bootstrap__WEBPACK_IMPORTED_MODULE_21__.a,
							},
							e
						),
					};
				};
			__webpack_exports__.a = recompose_compose__WEBPACK_IMPORTED_MODULE_19___default()(
				_messages__WEBPACK_IMPORTED_MODULE_30__.a,
				Object(Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_20__.a)([
					'activeColor',
				]),
				Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(
					mapStateToProps,
					mapDispatchToProps
				)
			)(Composer);
		}.call(this, __webpack_require__(0)));
	},
	134: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(301),
				o = n(300),
				i = function(t) {
					var n = t.user,
						r = t.color,
						i = t.shape,
						s = t.size,
						c = t.style;
					if (n && n.bot && !n.avatarUrl) {
						var u = 'square' === i ? 'rect' : i;
						return e.createElement(o.a, {
							className: 'Avatar',
							type: u,
							color: r,
							style: c,
						});
					}
					return e.createElement(a.a, { user: n, size: s, shape: i, style: c });
				};
			(i.displayName = 'AvatarOrBotAvatar'),
				(i.propTypes = {
					user: r.PropTypes.object,
					color: r.PropTypes.string,
					shape: r.PropTypes.oneOf(['circle', 'square']),
					size: r.PropTypes.oneOf([
						'small',
						'medium',
						'large',
						'extra-large',
						'jumbo',
					]),
					style: r.PropTypes.object,
				}),
				(i.defaultProps = { shape: 'circle', size: 'small' }),
				(t.a = i);
		}.call(this, n(0)));
	},
	135: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return f;
		}),
			n.d(t, 'b', function() {
				return m;
			}),
			n.d(t, 'f', function() {
				return b;
			}),
			n.d(t, 'e', function() {
				return g;
			}),
			n.d(t, 'd', function() {
				return h;
			});
		var r = n(2),
			a = n.n(r),
			o = n(105),
			i = n(5),
			s = n(18),
			c = n(34),
			u = n(23),
			l = n(231),
			d = n(4),
			p = n(457),
			_ = {
				fetchGeolocationPending: Object(i.b)(d.N),
				fetchGeolocationSuccess: Object(i.b)(d.O),
				fetchGeolocationFailure: Object(i.b)(d.M),
			},
			f = function() {
				return fetch(u.e + '/geo', { method: 'GET', headers: Object(s.e)() });
			},
			m = function() {
				return function(e) {
					return (
						e(_.fetchGeolocationPending()),
						f()
							.then(function(t) {
								200 === t.status
									? t.json().then(function(t) {
											e(_.fetchGeolocationSuccess(t));
									  })
									: t.text().then(function(t) {
											c.a.info('location for end user not found', t),
												e(_.fetchGeolocationFailure());
									  });
							})
							.catch(function(t) {
								c.a.warn('failed to fetch geolocation data for end user', t),
									e(_.fetchGeolocationFailure());
							})
					);
				};
			},
			b = function(e) {
				return { type: d.Z, payload: e };
			},
			g = function(e) {
				return { type: d.Y, payload: e };
			},
			h = function(e) {
				return { type: d.X, payload: e };
			};
		t.a = function() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.a,
				t = arguments[1];
			switch (t.type) {
				case d.Pa:
					var n = Object(o.a)({}, e, t.payload, { geo: e.geo });
					return (n.cookies = t.payload.cookies || {}), n;
				case d.N:
					return a()({}, e, { geo: a()({}, e.geo, { status: t.type }) });
				case d.O:
					return a()({}, e, {
						geo: a()({}, e.geo, t.payload, { status: t.type }),
					});
				case d.M:
					return a()({}, e, { geo: a()({}, e.geo, { status: t.type }) });
				case d.Z:
					return t.payload.scrollPct > e.scroll.scrollPct
						? a()({}, e, { scroll: a()({}, t.payload) })
						: e;
				case d.Y:
					var r = t.payload || {},
						i =
							r.clientY / r.windowHeight < 0.5 &&
							(function(e) {
								return Date.now() / 1e3 - e.visits.last;
							})(e) > 5;
					return a()({}, e, {
						mouse: { over: !1 },
						exitIntent: e.exitIntent || i,
					});
				case d.X:
					return a()({}, e, { mouse: { over: !0 } });
				case l.a:
					return a()({}, e, { session: a()({}, e.session, { outbound: !0 }) });
				default:
					return e;
			}
		};
	},
	136: function(e, t, n) {
		'use strict';
		n.r(t);
		var r = n(2),
			a = n.n(r),
			o = n(158),
			i = { active: !1, dismissed: !1, triggeredFromWidgetAPI: !1 },
			s = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments[1];
				switch (t.type) {
					case o.c:
						return a()({}, e, {
							active: !0,
							dismissed: !1,
							triggeredFromWidgetAPI: t.payload.triggeredFromWidgetAPI || !1,
						});
					case o.a:
						return a()({}, e, { active: !1, dismissed: !0 });
					case o.b:
						return a()({}, e, { dismissed: !1 });
					default:
						return e;
				}
			},
			c = n(64),
			u = n.n(c),
			l = n(5),
			d = n(97),
			p = n(170),
			_ = {
				showAwayMessage: Object(l.b)(o.c),
				showAwayMessageDone: Object(l.b)(o.d),
				hideAwayMessage: Object(l.b)(o.a),
				hideAwayMessageDone: Object(l.b)(o.b),
			},
			f = void 0,
			m = u.a.resolve(),
			b = function(e) {
				return function(t) {
					return (
						f && (clearTimeout(f), (f = void 0)),
						t(Object(d.hideWelcomeMessage)()).then(function() {
							return (
								t(Object(p.b)(e)),
								t(_.showAwayMessage(e)),
								new u.a(function(e) {
									f = setTimeout(function() {
										t(_.showAwayMessageDone()), e();
									}, 220);
								})
							);
						})
					);
				};
			},
			g = function() {
				return function(e, t) {
					return t().AwayMessage.active
						? (f && (clearTimeout(f), (f = void 0)),
						  e(_.hideAwayMessage()),
						  (m = new u.a(function(t) {
								f = setTimeout(function() {
									e(Object(p.b)()), e(_.hideAwayMessageDone()), t();
								}, 220);
						  })))
						: m;
				};
			};
		n.d(t, 'default', function() {
			return s;
		}),
			n.d(t, 'showAwayMessage', function() {
				return b;
			}),
			n.d(t, 'hideAwayMessage', function() {
				return g;
			});
	},
	139: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'b', function() {
				return a;
			});
		var r = 'END_USER',
			a = 'LEAD';
	},
	140: function(e, t, n) {
		'use strict';
		n.d(t, 'e', function() {
			return a;
		}),
			n.d(t, 'b', function() {
				return o;
			}),
			n.d(t, 'a', function() {
				return i;
			}),
			n.d(t, 'd', function() {
				return s;
			}),
			n.d(t, 'c', function() {
				return c;
			});
		var r = function(e) {
				return '@@widget/cards/' + e;
			},
			a = r('UPDATE_LINKS'),
			o = r('FETCH_LINKS_FOR_MESSAGE'),
			i = r('FETCH_LINK'),
			s = r('FETCH_LINK_SUCCESS'),
			c = r('FETCH_LINK_FAILURE');
	},
	141: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'e', function() {
				return a;
			}),
			n.d(t, 'c', function() {
				return o;
			}),
			n.d(t, 'd', function() {
				return i;
			}),
			n.d(t, 'b', function() {
				return s;
			});
		var r = 'EVERYONE',
			a = 'VISITORS',
			o = 'SEGMENT',
			i = 'USERS',
			s = 'NONE';
	},
	146: function(e, t, n) {
		'use strict';
		var r = n(2),
			a = n.n(r),
			o = n(485),
			i = n.n(o),
			s = n(90),
			c = n(238),
			u = n(98),
			l = n(459),
			d = n(78),
			p = n(147),
			_ = n(35),
			f = n(189),
			m = n(62),
			b = n(187),
			g = n(458),
			h = n(84),
			v = n(968),
			E = n(967),
			y = n(291),
			O = n(43),
			C = n.n(O),
			T = n(9),
			I = (n(255), n(470), n(50), n(966)),
			M = n.n(I),
			P = (n(85), n(34)),
			A = (n(186), new Date());
		A.setFullYear(A.getFullYear() + 2);
		n(842), n(457);
		var S = function(e) {
				if (e) {
					try {
						e = M()(e, {
							normalizeProtocol: !0,
							stripFragment: !1,
							stripWWW: !0,
							removeQueryParameters: [],
							removeTrailingSlash: !0,
						});
					} catch (t) {
						P.a.warn("Could not parse URL '" + e + "'");
					}
					return e.replace(/^https?:\/\//, '');
				}
				console.warn('Targeting condition is empty, check playbook targeting');
			},
			D = function(e) {
				return parseInt(e);
			},
			w = n(466),
			k = n(16),
			R = n(66),
			j = n(156),
			N = n(155);
		n.d(t, 'b', function() {
			return re;
		}),
			n.d(t, 'a', function() {
				return oe;
			});
		var B = function(e) {
				return e.Targeting;
			},
			U = function(e) {
				return B(e).visits;
			},
			L = Object(T.createSelector)(
				function(e) {
					return Object(k.f)(e).teamAvailabilities;
				},
				function(e) {
					return Object(l.a)(e, 'id');
				}
			),
			W = [
				'geoCountryCode',
				'getCountryCode',
				'geoState',
				'geoMetroCode',
				'geoIp',
			],
			x = /(?!)/,
			F = function(e, t, n) {
				return { matched: e(n.get(t), !0), actualValue: n.get(t) };
			},
			H = function(e, t, n) {
				return { matched: e(t, n), actualValue: n };
			},
			K = function(e, t) {
				return Object(s.a)(e, function(e) {
					return t === e;
				});
			},
			q = function(e, t) {
				return !K(e, t);
			},
			z = function(e, t) {
				return e === t;
			},
			G = function(e, t) {
				return e !== t;
			},
			V = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
				return (
					Object(_.a)(e) || (e = [e]),
					Object(s.a)(e, function(e) {
						return e.test(t);
					})
				);
			},
			Y = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
				return !V(e, t);
			},
			Z = function(e, t) {
				return t < e;
			},
			J = function(e, t) {
				return t > e;
			},
			Q = function(e, t) {
				return !!e.min && !!e.max && t >= e.min && t <= e.max;
			},
			X = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
				return Object(s.a)(e, function(e) {
					return -1 !== t.indexOf(e);
				});
			},
			$ = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
				return Object(c.a)(e, function(e) {
					return -1 === t.indexOf(e);
				});
			},
			ee = function(e) {
				return (arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: {})[e];
			},
			te = { isMatch: V, notIsMatch: Y },
			ne = {
				device: {
					fn: function(e, t, n) {
						return void 0 !== n && n.device
							? { matched: e(t, n.device), actualValue: n.device }
							: { matched: !1, actualValue: void 0, reason: 'DEVICE_UNKNOWN' };
					},
					selector: B,
					operands: { isAnyOf: K, notIsAnyOf: q },
				},
				siteVisits: {
					fn: function(e, t, n) {
						return void 0 !== n && n.visits && void 0 !== n.visits.sessionCount
							? {
									matched: e(t, n.visits.sessionCount),
									actualValue: n.visits.sessionCount,
							  }
							: { matched: !1, actualValue: 0, reason: 'NO_PREVIOUS_VISIT' };
					},
					typeFn: D,
					selector: B,
					operands: {
						is: z,
						notIs: G,
						lessThan: Z,
						greaterThan: J,
						isBetween: Q,
					},
				},
				daysSinceLastVisit: {
					fn: function(e, t, n) {
						if (!(n && n.visits && n.visits.previousSessionEndedAt))
							return {
								matched: !1,
								actualValue: 0,
								reason: 'NO_PREVIOUS_VISIT',
							};
						var r = C()().diff(1e3 * n.visits.previousSessionEndedAt, 'days');
						return { matched: e(t, r), actualValue: r };
					},
					typeFn: D,
					selector: B,
					operands: {
						is: z,
						notIs: G,
						lessThan: Z,
						greaterThan: J,
						isBetween: Q,
					},
				},
				url: {
					fn: function(e, t, n) {
						return { matched: e(t, n.page.url), actualValue: n.page.url };
					},
					typeFn: S,
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isMatch: V,
						notIsMatch: Y,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				urlPath: {
					fn: function(e, t, n) {
						return { matched: e(t, n.page.path), actualValue: n.page.path };
					},
					typeFn: S,
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				urlHost: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.page.hostname),
							actualValue: n.page.hostname,
						};
					},
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				urlQuery: {
					fn: function(e, t, n) {
						Object(_.a)(t) || (t = [t]);
						var r = Object(h.a)(t, function(e) {
								return e.indexOf('=') > 0;
							}),
							a = Object(d.a)(r, function(e) {
								return e.split('=', 2);
							}),
							o = Object(d.a)(a, function(e) {
								return { key: e[0].toLowerCase(), val: e[1] };
							}),
							i = Object(v.a)(o, 'key'),
							u = Object(E.a)(i, function(e) {
								return Object(d.a)(e, 'val');
							});
						return Object(p.default)(u)
							? { matched: !0, actualValue: n.query, reason: 'INVALID_KEY' }
							: {
									matched: (e === q || e === $ ? c.a : s.a)(u, function(t, r) {
										return e(t, n.query[r]);
									}),
									actualValue: n.query,
							  };
					},
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				referrer: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.page.referrer),
							actualValue: n.page.referrer,
						};
					},
					typeFn: S,
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				geoCountryCode: {
					fn: function(e, t, n) {
						return { matched: e(t, n.geo.country), actualValue: n.geo.country };
					},
					selector: B,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				geoState: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.geo.subdivision),
							actualValue: n.geo.subdivision,
						};
					},
					selector: B,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				geoMetroCode: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.geo.metroCode),
							actualValue: n.geo.metroCode,
						};
					},
					typeFn: D,
					selector: B,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				geoIp: {
					fn: function(e, t, n) {
						return { matched: e(t, n.geo.ip), actualValue: n.geo.ip };
					},
					selector: B,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				scrollPct: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.scroll.scrollPct),
							actualValue: n.scroll.scrollPct,
						};
					},
					typeFn: function(e) {
						return parseInt(e) / 100;
					},
					selector: B,
					operands: { lessThan: Z, greaterThan: J, isBetween: Q },
				},
				secondsOnPage: {
					fn: function(e, t, n) {
						return { matched: e(t, n), actualValue: n };
					},
					typeFn: D,
					selector: function(e) {
						return (
							Date.now() / 1e3 -
							(function(e) {
								return U(e).currentPageViewStarted;
							})(e)
						);
					},
					operands: { lessThan: Z, greaterThan: J, isBetween: Q },
				},
				secondsOnSite: {
					fn: function(e, t, n) {
						return { matched: e(t, n), actualValue: n };
					},
					typeFn: D,
					selector: function(e) {
						return (
							Date.now() / 1e3 -
							(function(e) {
								return U(e).currentSessionStartedAt;
							})(e)
						);
					},
					operands: { lessThan: Z, greaterThan: J, isBetween: Q },
				},
				mouseOver: {
					fn: function(e, t, n) {
						return { matched: e(t, n.mouse.over), actualValue: n.mouse.over };
					},
					selector: B,
					operands: { is: z, notIs: G },
				},
				online: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.online),
							actualValue: n.online,
							reason: n,
						};
					},
					selector: k.b,
					operands: { is: z, notIs: G },
				},
				clearbit: { fn: F, selector: j.c, operands: { clearbit: z } },
				demandbase: { fn: F, selector: N.c, operands: { demandbase: z } },
				exitIntent: {
					fn: H,
					selector: function(e) {
						return B(e).exitIntent;
					},
					operands: { is: z },
				},
				outboundSession: {
					fn: function(e, t, n) {
						return {
							matched: e(t, n.session.outbound),
							actualValue: n.session.outbound,
						};
					},
					selector: B,
					operands: { is: z, notIs: G },
				},
				autoAssigneeId: {
					fn: H,
					selector: k.d,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				targetAccount: { fn: H, selector: R.e, operands: { is: z, notIs: G } },
				targetAccountOwnerId: {
					fn: H,
					selector: R.b,
					operands: { is: z, notIs: G, isAnyOf: K, notIsAnyOf: q },
				},
				cookie: {
					fn: function(e, t, n) {
						Object(_.a)(t) || (t = [t]);
						var r = t.filter(function(e) {
							return !!e;
						});
						if (Object(p.default)(r))
							return {
								matched: !0,
								reason: 'EMPTY_VALUES',
								actualValue: '__REDACTED__',
							};
						var a = n.cookies || {};
						return {
							matched: (e === q || e === $ ? c.a : s.a)(r, function(t) {
								var n = t.split('='),
									r = i()(n),
									o = r[0],
									s = r.slice(1);
								if (s.length) {
									var c = s.join('=');
									return e([c], a[o]);
								}
								return e === z || e === K || e === X
									? !Object(b.a)(a[o])
									: (e === G || e === q || e === $) && Object(b.a)(a[o]);
							}),
							actualValue: '__REDACTED__',
						};
					},
					selector: B,
					operands: {
						is: z,
						notIs: G,
						isAnyOf: K,
						notIsAnyOf: q,
						includesAnyOf: X,
						notIncludesAnyOf: $,
					},
				},
				teamAvailability: {
					fn: function(e, t, n) {
						var r = {};
						return (
							Object(u.a)(t, function(t) {
								r[t] = e(t, n);
							}),
							{
								matched: Object(s.a)(Object(y.a)(r), function(e) {
									return e;
								}),
								actualValue: r,
							}
						);
					},
					selector: function(e) {
						var t = {},
							n = {},
							r = (function(e) {
								return Object(k.f)(e).teams;
							})(e),
							a = L(e);
						return (
							Object(u.a)(r, function(r) {
								if ('ALWAYS_OFFLINE' !== r.teamAvailabilityMode) {
									var o = !0;
									if (
										'CUSTOM_HOURS' === r.teamAvailabilityMode &&
										r.teamAvailabilityId
									) {
										if (Object(g.a)(n[r.teamAvailabilityId])) {
											var i = a[r.teamAvailabilityId];
											n[r.teamAvailabilityId] = Object(w.a)(
												i.timezone,
												i.openHours
											);
										}
										o = n[r.teamAvailabilityId];
									}
									t[r.id] = r.autoOffline ? o && Object(k.r)(r.members)(e) : o;
								} else t[r.id] = !1;
							}),
							t
						);
					},
					operands: {
						isAvailable: ee,
						isNotAvailable: function(e) {
							var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return !ee(e, t);
						},
					},
				},
			};
		ne.getCountryCode = a()({}, ne.geoCountryCode);
		var re = function(e) {
				return Object(s.a)(e, function(e) {
					return Object(s.a)(e, function(e) {
						return Object(f.a)(W, e.field);
					});
				});
			},
			ae = function(e, t) {
				var n = ne[e.field];
				if (!n)
					return {
						matched: !1,
						reason: 'MISSING_CONDITION_FIELD',
						condition: e,
					};
				if (!(e.operator in n.operands))
					return {
						matched: !1,
						reason: 'MISSING_CONDITION_OPERATOR',
						condition: e,
					};
				n.selector && (t = n.selector(t));
				var r = (function(e, t, n) {
						return (
							te[n] &&
								(e = function(e) {
									try {
										return new RegExp(e);
									} catch (e) {
										return x;
									}
								}),
							e
								? Object(_.a)(t)
									? Object(d.a)(t, e)
									: Object(m.a)(t)
									? t
									: e(t)
								: t
						);
					})(n.typeFn, e.value, e.operator),
					o = n.operands[e.operator];
				return a()(
					{ reason: 'CONDITION_EVALUATED', condition: e },
					n.fn(o, r, t, !0)
				);
			},
			oe = function(e, t) {
				var n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
				if (Object(p.default)(e))
					return {
						matched: !0,
						reason: 'EMPTY_CONDITION_SETS',
						ignoredConditions: n,
						conditionSets: [],
					};
				var r = {
					reason: 'CONDITIONS_EVALUATED',
					ignoredConditions: n,
					conditionSets: [],
				};
				return (
					(r.conditionSets = Object(d.a)(e, function(e) {
						var r = { reason: 'CONDITIONS_EVALUATED' };
						return (
							(r.evaluatedConditions = Object(d.a)(e, function(e) {
								return Object(f.a)(n, e.field)
									? { matched: !0, reason: 'IGNORED_CONDITION', condition: e }
									: ae(e, t);
							})),
							(r.matched = Object(c.a)(r.evaluatedConditions, function(e) {
								return e.matched;
							})),
							r
						);
					})),
					(r.matched = Object(s.a)(r.conditionSets, function(e) {
						return e.matched;
					})),
					r
				);
			};
	},
	155: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return m;
		}),
			n.d(t, 'c', function() {
				return b;
			}),
			n.d(t, 'a', function() {
				return g;
			}),
			n.d(t, 'd', function() {
				return v;
			}),
			n.d(t, 'e', function() {
				return O;
			}),
			n.d(t, 'f', function() {
				return C;
			});
		var r = n(9),
			a = n(20),
			o = n(236),
			i = n(159),
			s = n(84),
			c = n(235),
			u = n(78),
			l = n(3),
			d = n(6),
			p = n(66),
			_ = Object(l.Set)(['targetAccount', 'targetAccountOwnerId']),
			f = function(e) {
				return e.Enrichment.demandbase;
			},
			m = function(e) {
				return f(e).get('statusByKey');
			},
			b = function(e) {
				return f(e).get('valuesByKey');
			},
			g = Object(r.createSelector)(d.l, function(e) {
				var t = Object(a.a)(e, 'campaigns', []),
					n = Object(a.a)(e, 'rules', []),
					r = t.map(function(e) {
						return e.conditions;
					}),
					l = n.map(function(e) {
						return e.conditions;
					}),
					d = Object(i.a)(Object(o.a)(r, l, e.theme.conditions)),
					p = Object(s.a)(d, function(e) {
						return 'demandbase' === e.field;
					});
				return Object(c.a)(
					Object(u.a)(p, function(e) {
						return e.value;
					})
				);
			}),
			h = Object(r.createSelector)(d.l, function(e) {
				var t = Object(a.a)(e, 'theme.conditions', []),
					n = Object(i.a)(t),
					r = Object(s.a)(n, function(e) {
						return 'demandbase' === e.field;
					});
				return Object(c.a)(
					Object(u.a)(r, function(e) {
						return e.value;
					})
				);
			}),
			v = Object(r.createSelector)(d.A, p.d, function(e, t) {
				return !e || t;
			}),
			E = Object(r.createSelector)(d.l, function(e) {
				var t = e.campaigns.map(function(e) {
						return e.conditions;
					}),
					n = e.rules.map(function(e) {
						return e.conditions;
					}),
					r = Object(i.a)(Object(o.a)(t, n, e.theme.conditions));
				return (
					Object(s.a)(r, function(e) {
						return _.has(e.field);
					}).length > 0
				);
			}),
			y = Object(r.createSelector)(d.l, function(e) {
				var t = Object(i.a)(e.theme.conditions);
				return (
					Object(s.a)(t, function(e) {
						return _.has(e.field);
					}).length > 0
				);
			}),
			O = Object(r.createSelector)(g, m, E, p.d, function(e, t, n, r) {
				return (
					!!r ||
					(!(n && !r) &&
						e.every(function(e) {
							return 'success' === t.get(e);
						}))
				);
			}),
			C = Object(r.createSelector)(h, m, y, p.d, function(e, t, n, r) {
				return (
					!!r ||
					(!(n && !r) &&
						e.every(function(e) {
							return 'success' === t.get(e);
						}))
				);
			});
	},
	156: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return m;
		}),
			n.d(t, 'c', function() {
				return b;
			}),
			n.d(t, 'a', function() {
				return g;
			}),
			n.d(t, 'd', function() {
				return y;
			}),
			n.d(t, 'e', function() {
				return O;
			}),
			n.d(t, 'f', function() {
				return C;
			});
		var r = n(9),
			a = n(3),
			o = n(238),
			i = n(236),
			s = n(159),
			c = n(84),
			u = n(235),
			l = n(78),
			d = n(6),
			p = n(66),
			_ = Object(a.Set)(['targetAccount', 'targetAccountOwnerId']),
			f = function(e) {
				return e.Enrichment.clearbit;
			},
			m = function(e) {
				return f(e).get('statusByKey');
			},
			b = function(e) {
				return f(e).get('valuesByKey');
			},
			g = Object(r.createSelector)(d.l, function(e) {
				var t = e.campaigns.map(function(e) {
						return e.conditions;
					}),
					n = e.rules.map(function(e) {
						return e.conditions;
					}),
					r = Object(s.a)(Object(i.a)(t, n, e.theme.conditions)),
					a = Object(c.a)(r, function(e) {
						return 'clearbit' === e.field;
					});
				return Object(u.a)(
					Object(l.a)(a, function(e) {
						return e.value;
					})
				);
			}),
			h = Object(r.createSelector)(d.l, function(e) {
				var t = e.campaigns.map(function(e) {
						return e.conditions;
					}),
					n = e.rules.map(function(e) {
						return e.conditions;
					}),
					r = Object(s.a)(Object(i.a)(t, n, e.theme.conditions));
				return (
					Object(c.a)(r, function(e) {
						return _.has(e.field);
					}).length > 0
				);
			}),
			v = Object(r.createSelector)(d.l, function(e) {
				var t = Object(s.a)(e.theme.conditions),
					n = Object(c.a)(t, function(e) {
						return 'clearbit' === e.field;
					});
				return Object(u.a)(
					Object(l.a)(n, function(e) {
						return e.value;
					})
				);
			}),
			E = Object(r.createSelector)(d.l, function(e) {
				var t = Object(s.a)(e.theme.conditions);
				return (
					Object(c.a)(t, function(e) {
						return _.has(e.field);
					}).length > 0
				);
			}),
			y = Object(r.createSelector)(d.A, p.d, function(e, t) {
				return !e || t;
			}),
			O = Object(r.createSelector)(g, m, h, p.d, function(e, t, n, r) {
				return (
					!!r ||
					(!(n && !r) &&
						Object(o.a)(e, function(e) {
							return 'success' === t.get(e);
						}))
				);
			}),
			C = Object(r.createSelector)(v, m, E, p.d, function(e, t, n, r) {
				return (
					!(n && !r) &&
					Object(o.a)(e, function(e) {
						return 'success' === t.get(e);
					})
				);
			});
	},
	158: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return r;
		}),
			n.d(t, 'd', function() {
				return a;
			}),
			n.d(t, 'a', function() {
				return o;
			}),
			n.d(t, 'b', function() {
				return i;
			});
		var r = 'SHOW_AWAY_MESSAGE',
			a = 'SHOW_AWAY_MESSAGE_DONE',
			o = 'HIDE_AWAY_MESSAGE',
			i = 'HIDE_AWAY_MESSAGE_DONE';
	},
	1584: function(e, t) {
		e.exports =
			'<svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path d="M8.455 16.5c-.19 0-.378-.076-.522-.226-.29-.303-.29-.792 0-1.093l7.66-8.013c.57-.597.885-1.392.885-2.236 0-.844-.315-1.638-.886-2.235-1.18-1.233-3.097-1.232-4.275 0L2.433 11.99c-.5.525-.742 1.03-.715 1.502.026.46.303.815.467.985.275.29.573.41.908.364.42-.054.903-.356 1.398-.874l6.973-7.295c.288-.3.755-.3 1.043 0 .29.303.29.793 0 1.093l-6.97 7.296c-.74.773-1.5 1.215-2.26 1.314-.797.104-1.535-.175-2.135-.804-.537-.562-.856-1.267-.896-1.985-.054-.933.332-1.836 1.144-2.686l8.885-9.297c1.754-1.836 4.61-1.836 6.363 0 .85.888 1.318 2.07 1.318 3.328s-.468 2.44-1.318 3.33l-7.66 8.014c-.143.15-.332.226-.52.226z" fill-rule="evenodd"></path></svg>';
	},
	1596: function(e, t) {
		e.exports =
			'<svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>';
	},
	1598: function(e, t, n) {},
	16: function(e, t, n) {
		'use strict';
		var r = n(9),
			a = n(27),
			o = n.n(a),
			i = n(73),
			s = n.n(i),
			c = s()({ ON: 'ON', OFF: 'OFF', AWAY: 'AWAY' }),
			u = s()({ AUTO: 'AUTO', MANUAL: 'MANUAL' }),
			l = n(466),
			d = n(160),
			p = n(187),
			_ = n(588),
			f = n(843);
		n.d(t, 'k', function() {
			return m;
		}),
			n.d(t, 'a', function() {
				return b;
			}),
			n.d(t, 'h', function() {
				return g;
			}),
			n.d(t, 'l', function() {
				return h;
			}),
			n.d(t, 'f', function() {
				return v;
			}),
			n.d(t, 'g', function() {
				return y;
			}),
			n.d(t, 'q', function() {
				return C;
			}),
			n.d(t, 'p', function() {
				return T;
			}),
			n.d(t, 's', function() {
				return S;
			}),
			n.d(t, 'o', function() {
				return D;
			}),
			n.d(t, 'e', function() {
				return w;
			}),
			n.d(t, 'n', function() {
				return k;
			}),
			n.d(t, 'm', function() {
				return j;
			}),
			n.d(t, 'd', function() {
				return N;
			}),
			n.d(t, 'c', function() {
				return B;
			}),
			n.d(t, 'j', function() {
				return U;
			}),
			n.d(t, 'r', function() {
				return H;
			}),
			n.d(t, 'b', function() {
				return G;
			}),
			n.d(t, 'i', function() {
				return V;
			});
		var m = function(e) {
				return e.Bootstrap.orgId;
			},
			b = function(e) {
				return e.Bootstrap.anonymousId;
			},
			g = function(e) {
				return e.Bootstrap.externalId;
			},
			h = function(e) {
				return e.Bootstrap.sessionId;
			},
			v = function(e) {
				return e.Bootstrap.embedConfiguration;
			},
			E = function(e) {
				return v(e).theme;
			},
			y = function(e) {
				return e.Bootstrap.embedId;
			},
			O = function(e) {
				return v(e).gates || {};
			},
			C = function(e) {
				return O(e).has_bot_landing_pages || !1;
			},
			T = function(e) {
				return O(e).has_consolidated_welcome_msg || !1;
			},
			I = function(e) {
				return E(e).foregroundColor;
			},
			M = function(e) {
				return E(e).backgroundColor;
			},
			P = function(e) {
				return E(e).availabilityBasedOnline;
			},
			A = function(e) {
				return v(e).team || [];
			},
			S = function(e) {
				return !!v(e).showBranding;
			},
			D = function(e) {
				return !!E(e).showWelcomeMessage;
			},
			w = function(e) {
				return E(e).captureEmail;
			},
			k = function(e) {
				var t = E(e).welcomeMessageDelay;
				return Object(p.a)(t) ? 5e3 : t;
			},
			R = Object(r.createSelector)(
				[
					function(e) {
						return E(e).textColor;
					},
					I,
					M,
				],
				function(e, t, n) {
					return e
						? Object(d.b)(e)
						: /ffffff|000000/i.test(t)
						? Object(d.b)(t)
						: Object(d.c)(n);
				}
			),
			j = Object(r.createStructuredSelector)({
				foregroundColor: o()(d.b, I),
				backgroundColor: o()(d.b, M),
				activeColor: o()(d.b, function(e) {
					return E(e).activeColor;
				}),
				textColor: o()(d.b, R),
			}),
			N = function(e) {
				return v(e).autoAssigneeId;
			},
			B = function(e) {
				return v(e).autoAssignee;
			},
			U = function(e) {
				return !!v(e).profileMode;
			},
			L = function(e) {
				return v(e).doNotDisturbUsers || [];
			},
			W = function(e) {
				var t = e.team,
					n = e.doNotDisturbUserIds,
					r = t
						.filter(function(e) {
							return 'ENABLED' === e.status;
						})
						.filter(function(e) {
							return !e.bot;
						})
						.map(function(e) {
							return e.id;
						});
				return Object(_.a)(r, n).length > 0;
			},
			x = Object(r.createSelector)([A, L], function(e, t) {
				return W({ team: e, doNotDisturbUserIds: t });
			}),
			F = Object(r.createSelector)([A, L], function(e, t) {
				var n = t,
					r = Object(_.a)(
						e
							.filter(function(e) {
								return 'ENABLED' === e.status;
							})
							.filter(function(e) {
								return !e.bot;
							})
							.map(function(e) {
								return e.id;
							}),
						t
					);
				return {
					awayOrDoNotDisturbUsers: n,
					availableUsers: r,
					available: r.length > 0,
				};
			}),
			H = function(e) {
				return Object(r.createSelector)([A, L], function(t, n) {
					var r = Object(f.a)(t, e, function(e, t) {
						return e.id === t;
					});
					return W({ team: r, doNotDisturbUserIds: n });
				});
			},
			K = Object(r.createSelector)(E, function(e) {
				var t = e.timezone,
					n = e.openHours;
				return Object(l.a)(t, n);
			}),
			q = function(e) {
				return v(e).widgetStatus;
			},
			z = function(e) {
				return v(e).widgetMode;
			},
			G = Object(r.createSelector)([E, K, q, z, F, P], function(
				e,
				t,
				n,
				r,
				a,
				o
			) {
				return (function(e) {
					var t = e.theme,
						n = e.widgetStatus,
						r = void 0 === n ? c.ON : n,
						a = e.widgetMode,
						o = e.isOpenForBusiness,
						i = void 0 === o || o,
						s = e.agentsAvailability,
						l = void 0 === s ? { available: !0 } : s,
						d = e.availabilityBasedOnline,
						p = void 0 !== d && d;
					return a === u.MANUAL
						? { online: r === c.ON, reason: 'MANUAL' }
						: a === u.AUTO
						? i
							? p
								? {
										online: l.available,
										reason: 'AUTO_ONLINE_HOURS_USER_AVAILABILITY',
										hours: { timezone: t.timezone, openHours: t.openHours },
										agentsAvailability: l,
								  }
								: {
										online: !0,
										reason: 'AUTO_ONLINE_HOURS',
										hours: { timezone: t.timezone, openHours: t.openHours },
								  }
							: {
									online: !1,
									reason: 'AUTO_OFFLINE_HOURS',
									hours: { timezone: t.timezone, openHours: t.openHours },
							  }
						: { online: r === c.ON && i, reason: 'STATUS_HOURS' };
				})({
					theme: e,
					isOpenForBusiness: t,
					widgetStatus: n,
					widgetMode: r,
					agentsAvailability: a,
					availabilityBasedOnline: o,
				});
			}),
			V = Object(r.createSelector)([K, q, z, x, P], function(e, t, n, r, a) {
				return (function(e) {
					var t = e.widgetStatus,
						n = void 0 === t ? c.ON : t,
						r = e.widgetMode,
						a = e.isOpenForBusiness,
						o = void 0 === a || a,
						i = e.areAgentsAvailable,
						s = void 0 === i || i,
						l = e.availabilityBasedOnline,
						d = void 0 !== l && l;
					return r === u.MANUAL
						? n === c.ON
						: r === u.AUTO
						? !!o && (!d || s)
						: n === c.ON && o;
				})({
					isOpenForBusiness: e,
					widgetStatus: t,
					widgetMode: n,
					areAgentsAvailable: r,
					availabilityBasedOnline: a,
				});
			});
	},
	160: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		}),
			n.d(t, 'd', function() {
				return i;
			}),
			n.d(t, 'c', function() {
				return s;
			}),
			n.d(t, 'b', function() {
				return l;
			});
		var r = n(103),
			a = n.n(r);
		function o(e) {
			return (function(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: 0.2,
					n = c(e),
					r = a()(n, 3),
					o = r[0],
					i = r[1],
					s = r[2],
					l = u(Math.floor(o * (1 + t))),
					d = u(Math.floor(i * (1 + t))),
					p = u(Math.floor(s * (1 + t)));
				return (function(e, t, n) {
					return (
						'#' +
						(function(e) {
							var t =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: 6,
								n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: '0';
							for (; e.length < t; ) e = n + e;
							return e;
						})(((e << 16) + (t << 8) + n).toString(16))
					);
				})(l, d, p);
			})(
				e,
				-(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.2)
			);
		}
		function i(e) {
			var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.8,
				n = c(e),
				r = a()(n, 3);
			return 'rgba(' + r[0] + ', ' + r[1] + ', ' + r[2] + ', ' + t + ')';
		}
		function s() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: '#FFFFFF',
				t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: '#FFFFFF',
				n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: '#333333',
				r = c(e),
				o = a()(r, 3);
			return (function(e, t, n) {
				return 1 - (0.299 * e + 0.587 * t + 0.114 * n) / 255 < 0.5;
			})(o[0], o[1], o[2])
				? n
				: t;
		}
		function c(e) {
			var t = ('' + e).replace(/#/, '');
			if (3 !== t.length && 6 !== t.length)
				throw new Error(e + ' is not a valid hex color value');
			var n = void 0,
				r = void 0,
				o = void 0;
			if (3 === t.length) {
				var i = Array.prototype.map.call(t, function(e) {
						return e + e;
					}),
					s = a()(i, 3);
				(n = s[0]), (r = s[1]), (o = s[2]);
			} else (n = t.slice(0, 2)), (r = t.slice(2, 4)), (o = t.slice(4, 6));
			return [n, r, o].map(function(e) {
				return parseInt(e, 16);
			});
		}
		function u(e) {
			var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
			return Math.min(Math.max(e, t), n);
		}
		function l(e) {
			if (e) return /^#/.test(e) ? e : '#' + e;
		}
	},
	1604: function(e, t, n) {
		e.exports = {
			ConversationListContainer: '_2rrEOGdBxK80K18DLhivYl',
			ConversationList: '_2I2_82eb2Vas3Wt04fA0rd',
			ConversationListHalfHeight: 'bxc0p6AK7As0EQ1xfTHdf',
			ConversationListEmpty: '_2nH8B3mAPpT9TL3U_bs1Lr',
			ConversationListBranding: '_1itnVkACH8hJb2XKCA1Eqv',
		};
	},
	1609: function(e, t, n) {
		e.exports = {
			ConversationListItem: '_6xzcxI3eyfhrannXMgTze',
			ConversationListItem__media: '_1LeY9mVXL7JZlFfS47Lk_c',
			ConversationListItem__content: '_1n_-0oBCOx-U76ZiFaPpi1',
			ConversationListItem__metadata: 'c-Rjowup4BDei1n_iiRrn',
			ConversationListItem__name: '_1S_4DRrCwt_9ALEPi_crj_',
			ConversationListItem__timestamp: '_3t2edw3XhIvYtZ3YLppLnP',
			ConversationListItem__preview: '_2L-sgKVa1443FiArEBNJWV',
			UnreadCountBadgeContainer: '_3VwiPmVztDDqnQRoP96kxj',
		};
	},
	161: function(e, t, n) {
		e.exports = {
			Container: '_3rFYHyeAg3meOhdz2al1n-',
			Header: 'nU8iBIlb3Pnpdfah8T0xS',
			Body: 'dp2Cn7rCPUkibY9nD2WFj',
			Title: '_3LgOTzOP49NkcKVg-VuAeA',
			Menu: '_1t1gRyGlfXe220eYtsZnFt',
			MenuItems: '_1cDOQdBdNV_UGt3VZw4UNU',
			MenuItem: '_1LsV8HQQ8Vayk_EI_Q5g-p',
			HeaderContent: '_1X08QP3Susvzc8-3v9gfn_',
			AvatarsList: '_26rE0K5J_Yqs69s-astsZ4',
			MultiAvatars: '_3lC_SnrooeO6smEP1P4Gig',
			AvatarWrapper: '_35gbWwd6NmCpOxwxnmjUkQ',
		};
	},
	1611: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.74 313.74"><path class="color" d="M0 0h313.74v313.74H0z"></path><path opacity=".85" fill="#fff" d="M0 0h313.74v313.74H0z"></path><path class="color" d="M270.9 172.59c-2 19.33-7.93 38.06-21.17 52.94-22.77 25.6-59.36 37.54-93 37.54-31.31 0-64.65-11.14-87.84-32.74C45.34 208.43 42 182.24 42 151.92c.05-16.06 1.23-33.27 12.76-45.7 17.06-18.39 47.33-21.37 70.84-23 10.34-.74 20.71-1 31.07-1 43.67 0 109.74 1.09 114.25 56.65a185.85 185.85 0 0 1-.02 33.72z"></path><path opacity=".2" d="M271 138.82c-.93-11.48-4.51-20.63-10-27.93a92.31 92.31 0 0 1 6.68 34.41c0 60.72-59.75 110-133.46 110a161.06 161.06 0 0 1-30.91-3 138.68 138.68 0 0 0 53.4 10.8c33.66 0 70.25-11.94 93-37.54 13.24-14.88 19.19-33.61 21.17-52.94a185.85 185.85 0 0 0 .12-33.8z"></path><ellipse cx="156.87" cy="154.71" rx="93.96" ry="37.64" fill="#fff"></ellipse><path class="color" d="M125.74 83.12c10.34-.73 20.71-1 31.08-1 12.65 0 27.18.1 41.55 1.58a52.64 52.64 0 0 0-83 .26c3.55-.33 7.03-.6 10.37-.84z"></path><path d="M125.74 83.12c10.34-.73 20.71-1 31.08-1 12.65 0 27.18.1 41.55 1.58a52.64 52.64 0 0 0-83 .26c3.55-.33 7.03-.6 10.37-.84z" fill="#222" opacity=".2"></path><path class="color" d="M156.87 51.75a17.1 17.1 0 0 1-2.78-.24v12.1c.92 0 1.85-.07 2.78-.07s1.85 0 2.77.07v-12.1a17 17 0 0 1-2.77.24z"></path><path opacity=".2" d="M156.87 51.75a17.1 17.1 0 0 1-2.78-.24v12.1c.92 0 1.85-.07 2.78-.07s1.85 0 2.77.07v-12.1a17 17 0 0 1-2.77.24z"></path><ellipse fill="#000" opacity=".6" cx="115.23" cy="154.71" rx="15.87" ry="15.72"></ellipse><ellipse fill="#000" opacity=".6" cx="198.51" cy="154.71" rx="15.87" ry="15.72"></ellipse><circle class="color" cx="156.87" cy="35.24" r="16.47"></circle><path class="color" d="M234.77 313.74c-10.29-24.46-35.63-41.66-77.9-41.66s-67.62 17.2-77.9 41.66z"></path></svg>';
	},
	1612: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.74 313.74"><path class="color" d="M0 0h313.74v313.74H0z"></path><path opacity=".85" fill="#fff" d="M0 0h313.74v313.74H0z"></path><path class="color" d="M276.67 190.46c-2.08 20.5-8.34 40.36-22.25 56.15-23.91 27.14-62.36 39.81-97.71 39.81-32.9 0-67.92-11.82-92.3-34.72-24.71-23.23-28.27-51-28.18-83.17.05-17 1.29-35.29 13.4-48.47 17.93-19.5 49.73-22.67 74.43-24.45 10.86-.78 21.76-1.06 32.65-1.06 45.87 0 115.28 1.15 120 60.09a199.36 199.36 0 0 1-.04 35.82z"></path><path opacity=".2" d="M276.73 154.64c-1-12.18-4.73-21.88-10.46-29.63a98.93 98.93 0 0 1 7 36.5c0 64.4-62.77 116.61-140.2 116.61A167.59 167.59 0 0 1 100.6 275a144.57 144.57 0 0 0 56.11 11.45c35.35 0 73.8-12.67 97.71-39.81 13.91-15.79 20.17-35.65 22.25-56.15a199.36 199.36 0 0 0 .06-35.85z"></path><ellipse cx="156.87" cy="171.49" rx="98.71" ry="39.92" fill="#fff"></ellipse><path class="color" d="M124.17 95.56c10.86-.78 21.76-1.06 32.65-1.06 13.29 0 28.55.1 43.65 1.67a55 55 0 0 0-87.21.28c3.74-.35 7.4-.63 10.91-.89z"></path><path d="M124.17 95.56c10.86-.78 21.76-1.06 32.65-1.06 13.29 0 28.55.1 43.65 1.67a55 55 0 0 0-87.21.28c3.74-.35 7.4-.63 10.91-.89z" fill="#222" opacity=".2"></path><path class="color" d="M156.87 62.29A17.71 17.71 0 0 1 154 62v12.87c1-.05 1.94-.08 2.92-.08s1.95 0 2.91.08V62a17.49 17.49 0 0 1-2.96.29z"></path><path opacity=".2" d="M156.87 62.29A17.71 17.71 0 0 1 154 62v12.87c1-.05 1.94-.08 2.92-.08s1.95 0 2.91.08V62a17.49 17.49 0 0 1-2.96.29z"></path><circle fill="#000" opacity=".6" cx="113.12" cy="171.49" r="16.68"></circle><circle fill="#000" opacity=".6" cx="200.62" cy="171.49" r="16.68"></circle><circle class="color" cx="156.87" cy="45.56" r="16.47"></circle></svg>';
	},
	1613: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.74 313.74"><path class="color" d="M0 0h313.74v313.74H0z"></path><path opacity=".85" fill="#fff" d="M0 0h313.74v313.74H0z"></path><path class="color" d="M125.74 94.12c10.34-.73 20.71-1 31.08-1 12.65 0 27.18.1 41.55 1.58a52.64 52.64 0 0 0-83 .26c3.55-.33 7.03-.6 10.37-.84z"></path><path d="M125.74 94.12c10.34-.73 20.71-1 31.08-1 12.65 0 27.18.1 41.55 1.58a52.64 52.64 0 0 0-83 .26c3.55-.33 7.03-.6 10.37-.84z" opacity=".2" fill="#222"></path><rect class="color" x="36.8" y="91.8" width="240.14" height="150.54" rx="18.56" ry="18.56"></rect><ellipse cx="156.87" cy="157.71" rx="93.96" ry="37.64" fill="#fff"></ellipse><path class="color" d="M156.87 62.75a17.1 17.1 0 0 1-2.78-.24v12.1c.92 0 1.85-.07 2.78-.07s1.85 0 2.77.07v-12.1a17 17 0 0 1-2.77.24z"></path><path d="M156.87 62.75a17.1 17.1 0 0 1-2.78-.24v12.1c.92 0 1.85-.07 2.78-.07s1.85 0 2.77.07v-12.1a17 17 0 0 1-2.77.24z" opacity=".2"></path><ellipse fill="#000" opacity=".6" cx="115.23" cy="157.71" rx="15.87" ry="15.72"></ellipse><ellipse fill="#000" opacity=".6" cx="198.51" cy="157.71" rx="15.87" ry="15.72"></ellipse><circle class="color" cx="156.87" cy="46.24" r="16.47"></circle><path class="color" d="M239.1 313.74c-5.29-32.24-31.64-56.86-82.23-56.86s-76.94 24.62-82.24 56.86z"></path></svg>';
	},
	1614: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.74 313.74"><path class="color" d="M0 0h313.74v313.74H0z"></path><path opacity=".85" fill="#fff" d="M0 0h313.74v313.74H0z"></path><path class="color" d="M126.43 104.87c10.11-.73 20.25-1 30.39-1 12.37 0 26.58.09 40.63 1.54a51.45 51.45 0 0 0-81.16.26c3.47-.31 6.88-.57 10.14-.8z"></path><path d="M126.43 104.87c10.11-.73 20.25-1 30.39-1 12.37 0 26.58.09 40.63 1.54a51.45 51.45 0 0 0-81.16.26c3.47-.31 6.88-.57 10.14-.8z" opacity=".2" fill="#222"></path><rect class="color" x="39.47" y="102.59" width="234.8" height="147.2" rx="18.56" ry="18.56"></rect><ellipse cx="156.87" cy="167.04" rx="91.87" ry="36.8" fill="#fff"></ellipse><path class="color" d="M156.87 74.19a16.37 16.37 0 0 1-2.72-.24v11.84c.9-.05 1.81-.08 2.72-.08s1.81 0 2.71.08V74a16.25 16.25 0 0 1-2.71.19z"></path><path d="M156.87 74.19a16.37 16.37 0 0 1-2.72-.24v11.84c.9-.05 1.81-.08 2.72-.08s1.81 0 2.71.08V74a16.25 16.25 0 0 1-2.71.19z" opacity=".2"></path><ellipse fill="#000" opacity=".6" cx="116.15" cy="167.04" rx="15.52" ry="15.37"></ellipse><ellipse fill="#000" opacity=".6" cx="197.58" cy="167.04" rx="15.52" ry="15.37"></ellipse><circle class="color" cx="156.87" cy="58.05" r="16.1"></circle></svg>';
	},
	1615: function(e, t) {
		e.exports =
			'<svg viewBox="0 0 277 276" xmlns="http://www.w3.org/2000/svg"><g transform="translate(.22 .462)" fill="none" fill-rule="evenodd"><rect class="color" x="1.78" y="1.538" width="273" height="272.443" rx="10"></rect><path d="M185.99 275.256h80.127a9.988 9.988 0 0 0 9.991-9.991V10.246c0-5.517-4.473-9.99-9.99-9.99H10.536a9.988 9.988 0 0 0-9.991 9.99v255.019c0 5.517 4.473 9.99 9.99 9.99H86.46V260.75c4.152-20.961 21.273-37.27 42.671-40.255v-10.092H57.319c-4.68 0-8.453-3.773-8.453-8.427v-97.758c0-4.647 3.78-8.428 8.445-8.428h64.862V82.035h13.745V58.33c-5.339-1.888-9.164-6.983-9.164-12.971 0-7.596 6.154-13.754 13.746-13.754 7.59 0 13.745 6.158 13.745 13.754 0 5.988-3.825 11.083-9.164 12.97v23.706h13.745V95.79h60.264c4.669 0 8.462 3.773 8.462 8.428v97.758c0 4.647-3.785 8.427-8.454 8.427H144.18v10.223c21.024 3.31 37.756 19.512 41.81 40.24v14.39z" fill="#FFF" opacity=".85"></path><rect fill="#FFF" x="72.994" y="123.785" width="131.425" height="41.376" rx="10"></rect><ellipse class="color" opacity=".5" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse class="color" opacity=".5" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse></g></svg>';
	},
	1616: function(e, t, n) {
		var r = {
			'./bot1.svg': 1615,
			'./bot2.svg': 1614,
			'./bot3.svg': 1613,
			'./bot4.svg': 1612,
			'./bot5.svg': 1611,
		};
		function a(e) {
			var t = o(e);
			return n(t);
		}
		function o(e) {
			var t = r[e];
			if (!(t + 1)) {
				var n = new Error('Cannot find module "' + e + '".');
				throw ((n.code = 'MODULE_NOT_FOUND'), n);
			}
			return t;
		}
		(a.keys = function() {
			return Object.keys(r);
		}),
			(a.resolve = o),
			(e.exports = a),
			(a.id = 1616);
	},
	162: function(e, t, n) {
		e.exports = {
			ConversationRatingVeil: 'UOKq4On8PgXOrZzGS2wLv',
			ConversationRatingContainer: '_1bHpREXagXijQ_1zyW4vqL',
			ConversationRatingContainerInitial: '_2YurJIJw-btlfTo3A0b77_',
			ConversationRatingHeader: '_3WcVuCkmFctmsEjXnFl78W',
			ConversationRatingClose: 'dg0V50Ax24821RNiPYd11',
			ConversationRatingEmojis: '_2PCcWEkOaLTMVA3TcoNCFd',
			ConversationRatingEmoji: '_3zx95hQySX0uWGDIsZuuIL',
			ConversationRatingEmojiSelected: '_1Th7k6JIx11c35ikunLFxM',
			ConversationRatingFeedback: '_3vN22SAK7kngI-kUGisDQR',
			ConversationRatingFeedbackContainer: '_3lill54Eyy3-7aCSr7Nr4e',
			ConversationRatingSubmitIcon: 'aNRmd8G1ncoJg5S1NPnKe',
		};
	},
	1641: function(e, t) {},
	1647: function(e, t) {},
	170: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return o;
		}),
			n.d(t, 'a', function() {
				return i;
			});
		var r = n(318),
			a = n(5),
			o = Object(a.b)(r.b),
			i = Object(a.b)(r.a);
	},
	171: function(e, t, n) {
		e.exports = {
			Container: 'pCiQAZMYqHTI5ddPdq8M-',
			Header: '_3OsXm3rYFhc3lRhVG4kEwJ',
			Header__avatar__border: '_3BMOGSG2gLVIzcGX0nv33h',
			Header__avatar: '_2zlkHGKHicD3WaGbjyDN0i',
			Header__name: '_3RoHcdAQCQXtFjvvPDzjsA',
			Header__title: '_1YEeBntD3-M4IatGVsHqV8',
			ConsolidatedWelcomeMsgBody: '_2Fteti-zwRHoaAFanLB8AU',
			Body: '_18JYqrC8X6hfhvBm_B-mjz',
		};
	},
	18: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return d;
		}),
			n.d(t, 'e', function() {
				return p;
			}),
			n.d(t, 'd', function() {
				return _;
			}),
			n.d(t, 'c', function() {
				return f;
			}),
			n.d(t, 'b', function() {
				return g;
			});
		var r = n(255),
			a = n.n(r),
			o = n(88),
			i = n.n(o),
			s = n(98),
			c = n(35),
			u = n(105),
			l = n(34),
			d = function(e) {
				return u.a.apply(null, [{}].concat(i()(a()(e))));
			},
			p = function() {
				return { 'Content-Type': 'application/json' };
			},
			_ = function() {
				return { 'Content-Type': 'application/x-www-form-urlencoded' };
			},
			f = function(e) {
				var t = [];
				for (var n in e) {
					var r = e[n];
					Object(c.a)(r)
						? Object(s.a)(r, function(e) {
								return t.push(
									encodeURIComponent(n) + '=' + encodeURIComponent(e)
								);
						  })
						: null != r &&
						  t.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
				}
				return t.join('&');
			},
			m = function(e) {
				return 200 <= e.status && e.status < 300
					? e
					: e.json().then(function(t) {
							var n = new Error(e.statusText);
							throw ((n.response = e), (n.responseData = t), n);
					  });
			},
			b = function(e) {
				switch (e.status) {
					case 101:
					case 204:
					case 205:
					case 304:
						return;
					default:
						return e.json();
				}
			},
			g = function(e, t) {
				return fetch(e, t)
					.then(m)
					.then(b)
					.catch(function(n) {
						throw (l.a.error(n, {
							request: { url: e, options: t },
							response: n.response,
						}),
						n.responseData || n);
					});
			};
	},
	183: function(e, t, n) {
		'use strict';
		var r = n(228),
			a = n(204),
			o = n(197),
			i = n(39),
			s = n(1),
			c = (n(117),
			n(142),
			n(214),
			n(143),
			n(127),
			n(60),
			n(79),
			n(244),
			n(651),
			n(18)),
			u = n(140),
			l = Object(i.combineEpics)(
				function(e, t) {
					return e
						.ofType(u.b)
						.flatMap(function(e) {
							return Object(o.getHrefsByMessageId)(t.getState())
								.get(e.payload)
								.toSet()
								.filter(function(e) {
									return !Object(o.getLinksByHref)(t.getState()).has(e);
								});
						})
						.map(r.fetchLink);
				},
				function(e) {
					return e.ofType(u.a).mergeMap(function(e) {
						var t = {
							key: 'f0f2cc6ba50c77794e5c5eb2930f3fd5',
							url: e.payload,
							omit_script: 1,
							iframe: 1,
						};
						return s.Observable.ajax({
							url: '//iframe.ly/api/iframely?' + Object(c.c)(t),
							method: 'GET',
							crossDomain: !0,
							responseType: 'json',
						})
							.map(function(t) {
								return Object(
									r.fetchLinkSuccess
								)({ href: e.payload, data: t.response });
							})
							.catch(function(t) {
								return s.Observable.of(
									Object(r.fetchLinkFailure)({ href: e.payload, error: t })
								);
							});
					}, 1);
				}
			);
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'd', function() {
				return a;
			}),
			n.d(t, 'e', function() {
				return o;
			}),
			n.d(t, 'c', function() {
				return l;
			}),
			n.d(t, 'b', function() {
				return o.default;
			});
	},
	1834: function(e, t, n) {
		'use strict';
		n.r(t),
			function(e) {
				var t = n(485),
					r = n.n(t),
					a = n(64),
					o = n.n(a),
					i = n(88),
					s = n.n(i),
					c = n(81),
					u = n.n(c),
					l = n(147),
					d = n(189),
					p = n(78),
					_ = n(84),
					f = n(977),
					m = n(34),
					b = n(849),
					g = n(74),
					h = n(135),
					v = n(190),
					E = n(587),
					y = n(16),
					O = n(51);
				n(1797).polyfill(), n(1796);
				var C = null,
					T = function(e) {
						C = new E.a({
							orgId: Object(y.k)(e),
							inboxId: Object(O.d)(e),
							userId: Object(y.h)(e),
							anonymousId: Object(y.a)(e),
						});
					},
					I = function(e) {
						return (function(e) {
							var t = e.embedId,
								n = e.alternateEmbedIds;
							return !n || Object(l.default)(n)
								? o.a.resolve(t)
								: Object(h.c)()
										.then(function(e) {
											return 200 === e.status ? e.json() : {};
										})
										.then(function(e) {
											var r = e.country,
												a = Object(p.a)(n, function(e, t) {
													return !!Object(d.a)(e, r) && t;
												}),
												o = Object(_.a)(a, function(e) {
													return !!e;
												});
											return (r && o.length && o[0]) || t;
										})
										.catch(function() {
											return t;
										});
						})({ embedId: e.embedId, alternateEmbedIds: e.alternateEmbedIds })
							.then(function(e) {
								return Object(g.b)(e).promise;
							})
							.then(function(e) {
								window.parent.postMessage(
									{ type: 'iframeConfigV1', payload: { embed: e } },
									'*'
								);
							});
					},
					M = function(t) {
						var a = t.debugEnabled,
							i = t.showWidgetOnBoot,
							c = t.welcomeMessageDismissed,
							l = t.initialState,
							d = t.eventQueue,
							p = void 0 === d ? [] : d;
						(window.__DRIFTT_DEBUG__ = a),
							n(983),
							Object(b.a)(),
							(C = new E.a({
								orgId: Object(y.k)(l),
								inboxId: Object(O.d)(l),
								userId: Object(y.h)(l),
								anonymousId: Object(y.a)(l),
								isDebug: a,
							}));
						var _ = p.map(function(e) {
								var t = r()(e),
									n = t[0],
									a = t.slice(1);
								return P.apply(void 0, [n].concat(s()(a)));
							}),
							g = function() {
								var t = document.getElementById('root');
								(l.Event.trackQueue = C.getTrackQueue()),
									u.a.render(
										e.createElement(f.a, {
											initialState: l,
											showWidget: i,
											welcomeMessageDismissed: c,
										}),
										t
									);
							};
						o.a
							.all(_)
							.then(function() {
								g();
							})
							.catch(function(e) {
								m.a.warn('Event API request failed', e), g();
							});
					},
					P = function(e) {
						for (
							var t,
								n,
								r = arguments.length,
								a = Array(r > 1 ? r - 1 : 0),
								i = 1;
							i < r;
							i++
						)
							a[i - 1] = arguments[i];
						switch (
							(C ||
								m.a.warn.apply(
									m.a,
									['Widget event API has not been initialized yet', e].concat(a)
								),
							e)
						) {
							case 'identify':
								return (t = C).identify.apply(t, a);
							case 'track':
								return (n = C).track.apply(n, a);
							default:
								return o.a.resolve();
						}
					};
				window.addEventListener(
					'message',
					function(e) {
						if (e.source === window.parent) {
							var t = e.data;
							switch (t.type) {
								case 'widgetConfigV1':
									I(t.payload);
									break;
								case 'iframeInit':
								case 'widgetInitV1':
									M(t.payload);
									break;
								case v.d:
									T(t.payload);
									break;
								case 'widgetEventV1':
									P.apply(void 0, s()(t.payload));
							}
						}
					},
					!1
				),
					window.parent.postMessage({ type: 'iframeReady' }, '*');
			}.call(this, n(0));
	},
	185: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return p;
		}),
			n.d(t, 'a', function() {
				return _;
			}),
			n.d(t, 'b', function() {
				return f;
			}),
			n.d(t, 'c', function() {
				return h;
			}),
			n.d(t, 'e', function() {
				return v;
			});
		var r = n(9),
			a = n(3),
			o = n(6),
			i = n(76),
			s = n(66),
			c = n(22),
			u = n(146),
			l = n(191),
			d = function(e) {
				return e.CampaignTargeting;
			},
			p = function(e) {
				return d(e).enrollmentEnabled;
			},
			_ = function(e) {
				return d(e).bulkEnrollStatus;
			},
			f = Object(r.createSelector)(
				[
					function(e) {
						return d(e).targetingAuditLog;
					},
				],
				function(e) {
					return e.get('campaigns');
				}
			),
			m = Object(r.createSelector)(
				[
					i.c,
					function(e) {
						return d(e).enrolledCampaignIds;
					},
					i.h,
				],
				function(e, t, n) {
					return e
						.keySeq()
						.toSet()
						.union(t, n);
				}
			),
			b = Object(r.createSelector)([c.l, m], function(e, t) {
				return e.filter(function(e) {
					return !t.has(e.id);
				});
			}),
			g = (Object(r.createSelector)([b], function(e) {
				return Object(a.Set)(
					e.map(function(e) {
						return e.id;
					})
				);
			}),
			Object(r.createSelector)([b, o.j, o.w, s.c], function(e, t, n, r) {
				return e
					.filter(function(e) {
						return l.b(e);
					})
					.filter(function(e) {
						return l.c(e);
					})
					.filter(function(e) {
						return l.a(e, t, n, r);
					});
			})),
			h = function(e) {
				return g(e).filter(function(t) {
					return Object(u.a)(t.conditions, e, ['secondsOnPage']).matched;
				});
			},
			v = Object(r.createSelector)([h], function(e) {
				return e.length > 0;
			});
	},
	1895: function(e, t, n) {
		n(1894), n(1887), n(1865), n(1844), n(1841), n(1839), n(1836);
	},
	1896: function(e, t, n) {
		n(1895), (e.exports = n(1834));
	},
	19: function(e, t, n) {
		'use strict';
		n.d(t, 'N', function() {
			return a;
		}),
			n.d(t, 'v', function() {
				return o;
			}),
			n.d(t, 'm', function() {
				return i;
			}),
			n.d(t, 'o', function() {
				return s;
			}),
			n.d(t, 'n', function() {
				return c;
			}),
			n.d(t, 'g', function() {
				return u;
			}),
			n.d(t, 'i', function() {
				return l;
			}),
			n.d(t, 'h', function() {
				return d;
			}),
			n.d(t, 'j', function() {
				return p;
			}),
			n.d(t, 'l', function() {
				return _;
			}),
			n.d(t, 'k', function() {
				return f;
			}),
			n.d(t, 'q', function() {
				return m;
			}),
			n.d(t, 's', function() {
				return b;
			}),
			n.d(t, 'r', function() {
				return g;
			}),
			n.d(t, 'F', function() {
				return h;
			}),
			n.d(t, 'b', function() {
				return v;
			}),
			n.d(t, 'd', function() {
				return E;
			}),
			n.d(t, 'e', function() {
				return y;
			}),
			n.d(t, 'c', function() {
				return O;
			}),
			n.d(t, 'E', function() {
				return C;
			}),
			n.d(t, 'H', function() {
				return T;
			}),
			n.d(t, 'I', function() {
				return I;
			}),
			n.d(t, 'G', function() {
				return M;
			}),
			n.d(t, 'J', function() {
				return P;
			}),
			n.d(t, 'L', function() {
				return A;
			}),
			n.d(t, 'M', function() {
				return S;
			}),
			n.d(t, 'K', function() {
				return D;
			}),
			n.d(t, 'A', function() {
				return w;
			}),
			n.d(t, 'f', function() {
				return k;
			}),
			n.d(t, 'a', function() {
				return R;
			}),
			n.d(t, 'B', function() {
				return j;
			}),
			n.d(t, 'D', function() {
				return N;
			}),
			n.d(t, 'C', function() {
				return B;
			}),
			n.d(t, 'O', function() {
				return U;
			}),
			n.d(t, 'R', function() {
				return L;
			}),
			n.d(t, 'Q', function() {
				return W;
			}),
			n.d(t, 'P', function() {
				return x;
			}),
			n.d(t, 'p', function() {
				return F;
			}),
			n.d(t, 'z', function() {
				return H;
			}),
			n.d(t, 't', function() {
				return K;
			}),
			n.d(t, 'u', function() {
				return q;
			}),
			n.d(t, 'y', function() {
				return z;
			}),
			n.d(t, 'w', function() {
				return G;
			}),
			n.d(t, 'x', function() {
				return V;
			});
		var r = function(e) {
				return '@@widget/message/' + e;
			},
			a = r('SELECT_CONVERSATION'),
			o = r('MARK_AS_READ'),
			i = r('FETCH_CONVERSATIONS'),
			s = r('FETCH_CONVERSATIONS_SUCCESS'),
			c = r('FETCH_CONVERSATIONS_FAILURE'),
			u = r('FETCH_CAMPAIGN_CONVERSATIONS'),
			l = r('FETCH_CAMPAIGN_CONVERSATIONS_SUCCESS'),
			d = r('FETCH_CAMPAIGN_CONVERSATIONS_FAILURE'),
			p = r('FETCH_CAMPAIGN_ENROLLMENT'),
			_ = r('FETCH_CAMPAIGN_ENROLLMENT_SUCCESS'),
			f = r('FETCH_CAMPAIGN_ENROLLMENT_FAILURE'),
			m = r('FETCH_MESSAGES'),
			b = r('FETCH_MESSAGES_SUCCESS'),
			g = r('FETCH_MESSAGES_FAILURE'),
			h = r('REQUEST_CREATE_CONVERSATION_EVENT'),
			v = r('CREATE_CONVERSATION_EVENT'),
			E = r('CREATE_CONVERSATION_EVENT_PENDING'),
			y = r('CREATE_CONVERSATION_EVENT_SUCCESS'),
			O = r('CREATE_CONVERSATION_EVENT_FAILURE'),
			C = r('REQUEST_CREATE_CONVERSATION'),
			T = r('REQUEST_CREATE_CONVERSATION_PENDING'),
			I = r('REQUEST_CREATE_CONVERSATION_SUCCESS'),
			M = r('REQUEST_CREATE_CONVERSATION_FAILURE'),
			P = r('REQUEST_CREATE_MESSAGE'),
			A = r('REQUEST_CREATE_MESSAGE_PENDING'),
			S = r('REQUEST_CREATE_MESSAGE_SUCCESS'),
			D = r('REQUEST_CREATE_MESSAGE_FAILURE'),
			w = r('RECEIVE_MESSAGE'),
			k = r('CREATE_MESSAGE'),
			R = r('CREATE_CONVERSATION'),
			j = r('RECORD_RTT'),
			N = r('RECORD_RTT_SUCCESS'),
			B = r('RECORD_RTT_FAILURE'),
			U = r('SLIDER_MESSAGE_DISMISSED'),
			L = r('UPDATE_UNREAD_CAMPAIGNS'),
			W = r('UPDATE_MOST_RECENTLY_READ_CAMPAIGN_CONVERSATION'),
			x = r('UNSET_MOST_RECENTLY_READ_CAMPAIGN_CONVERSATION'),
			F = r('FETCH_CONVERSATION_PERMACLOSE'),
			H = r('RECEIVE_CONVERSATION_PERMACLOSE'),
			K = r('HOLD_FOR_DELAY_MESSAGE_ID_INSERT'),
			q = r('HOLD_FOR_DELAY_MESSAGE_ID_REMOVE'),
			z = r('RECEIVE_CONVERSATION'),
			G = r('RECEIVE_CAMPAIGN_CONVERSATIONS'),
			V = r('RECEIVE_CAMPAIGN_ENROLLMENT');
	},
	190: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return a;
		}),
			n.d(t, 'e', function() {
				return o;
			}),
			n.d(t, 'f', function() {
				return i;
			}),
			n.d(t, 'c', function() {
				return s;
			}),
			n.d(t, 'd', function() {
				return c;
			}),
			n.d(t, 'a', function() {
				return u;
			});
		var r = function(e) {
				return '@@drift/api/' + e;
			},
			a = r('OVERRIDE_EMBED_CONFIGURATION'),
			o = r('START_SCHEDULE_MEETING_FLOW'),
			i = r('UPDATE_END_USER_ATTRIBUTES'),
			s = r('REFRESH_TARGETING'),
			c = r('REPLACE_STATE'),
			u = r('DISCONNECT');
	},
	191: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return s;
		}),
			n.d(t, 'a', function() {
				return c;
			}),
			n.d(t, 'b', function() {
				return u;
			});
		var r = n(141),
			a = n(139),
			o = n(263),
			i = n(20),
			s = function(e) {
				return !l(e) || new Date().getTime() < e.attributes.runUntil;
			},
			c = function(e, t, n, s) {
				var c = e.audience,
					u = e.attributes,
					l = e.userListIds,
					d = Object(i.a)(u, 'excludedUserListIds', []),
					p = Object(i.a)(u, 'accountListIds', []),
					_ = Object(i.a)(u, 'excludedAccountListIds', []);
				if (Object(o.a)(d, n).length > 0 || Object(o.a)(_, s).length > 0)
					return !1;
				if (c === r.a) return !0;
				if (c === r.c)
					return Object(o.a)(l, n).length > 0 || Object(o.a)(p, s).length > 0;
				var f = !(!t || t.type !== a.a);
				return c === r.d ? f : c === r.e && !f;
			},
			u = function(e) {
				return 'CHAT' !== e.type;
			},
			l = function(e) {
				return (
					e &&
					e.attributes &&
					'UNTIL' === e.attributes.delivery &&
					e.attributes.runUntil > 0
				);
			};
	},
	197: function(e, t, n) {
		'use strict';
		n.r(t),
			n.d(t, 'getCardState', function() {
				return l;
			}),
			n.d(t, 'getHrefsByMessageId', function() {
				return d;
			}),
			n.d(t, 'getLinksByHref', function() {
				return p;
			});
		var r,
			a = n(8),
			o = n.n(a),
			i = n(5),
			s = n(3),
			c = n(140),
			u = n(204);
		t.default = Object(i.c)(
			((r = {}),
			o()(r, c.e, function(e, t) {
				return e.mergeIn(['hrefsByMessageId'], t.payload);
			}),
			o()(r, c.a, function(e, t) {
				return e.setIn(
					['linksByHref', t.payload],
					new u.Link({ href: t.payload })
				);
			}),
			o()(r, c.d, function(e, t) {
				return e.setIn(
					['linksByHref', t.payload.href],
					new u.Link({
						href: t.payload.href,
						data: new u.LinkData({
							url: t.payload.data.url,
							meta: new u.LinkDataMeta(t.payload.data.meta),
							links: Object(s.fromJS)(t.payload.data.links),
							rel: Object(s.List)(t.payload.data.rel),
							html: t.payload.data.html,
						}),
						status: 'success',
					})
				);
			}),
			o()(r, c.c, function(e, t) {
				return e.setIn(
					['linksByHref', t.payload.href],
					new u.Link({ href: t.payload.href, status: 'failure' })
				);
			}),
			r),
			new u.CardState()
		);
		var l = function(e) {
				return e.Cards;
			},
			d = function(e) {
				return l(e).hrefsByMessageId;
			},
			p = function(e) {
				return l(e).linksByHref;
			};
	},
	199: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(0),
				i = n(12),
				s = n.n(i),
				c = n(43),
				u = n.n(c),
				l = n(32),
				d = n(316),
				p = n.n(d);
			function _(t) {
				var n,
					r = t.className,
					o = t.position,
					i = t.createdAt,
					c = t.children,
					d = t.color,
					_ = t.isEmbeddedMessenger,
					f = t.backgroundColor,
					m = Object(l.d)();
				return e.createElement(
					'div',
					{
						className: s()(
							r,
							((n = {}),
							a()(n, p.a.MessageBody, !0),
							a()(n, p.a['MessageBody--left'], 'left' === o),
							a()(n, p.a['MessageBody--right'], 'right' === o),
							a()(n, 'floating', _),
							a()(n, 'mobile', m),
							n)
						),
						style: {
							color: _ && 'right' === o ? void 0 : d,
							backgroundColor:
								_ && 'right' === o ? 'rgba(255, 255, 255, 0.75)' : f,
							padding: _ && !m ? '12px 14px' : void 0,
						},
						title: u()(i).format('LLL'),
					},
					c
				);
			}
			(_.propTypes = {
				className: o.PropTypes.string,
				children: o.PropTypes.node,
				position: o.PropTypes.oneOf(['left', 'right']).isRequired,
				color: o.PropTypes.string,
				backgroundColor: o.PropTypes.string,
				isStartConversationPrompt: o.PropTypes.bool,
			}),
				(t.a = _);
		}.call(this, n(0)));
	},
	203: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'c', function() {
				return a;
			}),
			n.d(t, 'b', function() {
				return o;
			});
		var r = 'FETCH_AGENT_STATUS',
			a = 'FETCH_AGENT_STATUS_SUCCESS',
			o = 'FETCH_AGENT_STATUS_FAIL';
	},
	204: function(e, t, n) {
		'use strict';
		n.r(t),
			n.d(t, 'CardState', function() {
				return m;
			}),
			n.d(t, 'LinkDataMeta', function() {
				return b;
			}),
			n.d(t, 'LinkData', function() {
				return g;
			}),
			n.d(t, 'Link', function() {
				return h;
			});
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(3),
			f = [
				'player',
				'thumbnail',
				'app',
				'image',
				'reader',
				'survey',
				'summary',
				'icon',
				'logo',
			],
			m = Object(_.Record)({
				hrefsByMessageId: Object(_.Map)(),
				linksByHref: Object(_.Map)(),
			}),
			b = Object(_.Record)({
				title: void 0,
				description: void 0,
				author_url: void 0,
				author: void 0,
				site: void 0,
				keywords: void 0,
			}),
			g = (function(e) {
				function t() {
					return (
						i()(this, t),
						l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'getPrimaryRel',
							value: function() {
								return this.rel
									.filter(function(e) {
										return -1 !== f.indexOf(e);
									})
									.first();
							},
						},
					]),
					t
				);
			})(
				Object(_.Record)({
					url: void 0,
					meta: new b(),
					links: Object(_.List)(),
					rel: Object(_.List)(),
					html: void 0,
				})
			),
			h = Object(_.Record)({ href: void 0, data: new g(), status: 'pending' });
	},
	205: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return d;
		}),
			n.d(t, 'f', function() {
				return p;
			}),
			n.d(t, 'a', function() {
				return _;
			}),
			n.d(t, 'c', function() {
				return f;
			}),
			n.d(t, 'e', function() {
				return m;
			}),
			n.d(t, 'd', function() {
				return b;
			});
		var r = n(43),
			a = n.n(r),
			o = n(20),
			i = n(48),
			s = n(125),
			c = n(51),
			u = n(102),
			l = n(41);
		function d(e, t) {
			return e < 60
				? e + ' ' + t.formatMessage(l.a.minutes)
				: 60 === e
				? '1 ' + t.formatMessage(l.a.hour)
				: a.a.duration(e / 60, 'hours').humanize();
		}
		function p(e) {
			return 60 * e * 1e3;
		}
		var _ = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			if (n) return !1;
			var a = Object(c.k)(e);
			return r && a ? a : Object(u.d)(e)[t];
		};
		function f(e, t) {
			var n = 'WELCOME_MESSAGE' === e.attributes.campaignDisplayType,
				r = e.attributes.title,
				a = e.body;
			return [
				r && !n && { id: Object(s.a)(), body: r, sender: t },
				a && { id: Object(s.a)(), body: a, sender: t },
			].filter(Boolean);
		}
		function m(e) {
			return (
				Object(o.a)(e, 'authorType') === i.a.USER &&
				Object(o.a)(e, 'attributes.offerSchedule', !1)
			);
		}
		var b = function(e) {
			switch (e) {
				case 'The requested slot cannot be in the past':
					return l.a.scheduleAMeetingTimePassedError;
				case 'The requested slot does not fall within agent-configured availability':
				case 'The requested slot does not respect the agent-configured minimum notice time':
				case 'The requested slot--padded by buffer time on both sides--conflicts with an existing event':
				case 'The requested slot--padded by buffer time on both sides--conflicts with an existing point-in-time event':
					return l.a.scheduleAMeetingAlreadyBookedError;
				default:
					return l.a.scheduleAMeetingError;
			}
		};
	},
	206: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return b;
		}),
			n.d(t, 'a', function() {
				return g;
			}),
			n.d(t, 'b', function() {
				return h;
			}),
			n.d(t, 'd', function() {
				return v;
			});
		var r = n(9),
			a = n(969),
			o = n(90),
			i = n(20),
			s = n(845),
			c = n(84),
			u = n(439),
			l = n(102),
			d = n(22),
			p = n(146),
			_ = [],
			f = Object(r.createSelector)(d.g, function(e) {
				return Object(i.a)(e, 'rules', _);
			}),
			m = Object(r.createSelector)(f, function(e) {
				var t = Object(c.a)(e, function(e) {
					return 'ENABLED' === e.status;
				});
				return Object(u.a)(t, function(e) {
					return e.priority;
				});
			}),
			b = Object(r.createSelector)(
				[
					m,
					function(e) {
						return e;
					},
				],
				function(e, t) {
					return e.filter(function(e) {
						return Object(p.a)(e.conditions, t).matched;
					});
				}
			),
			g = Object(r.createSelector)(b, function(e) {
				var t = e.filter(function(e) {
					return Object(i.a)(e, 'action.options.userIds', []).length > 0;
				});
				return Object(s.a)(t, 'priority');
			}),
			h = Object(r.createSelector)(m, function(e) {
				return Object(o.a)(e, function(e) {
					return Object(p.b)(e.conditions);
				});
			}),
			v = Object(r.createSelector)(g, function(e) {
				if (!e || !e.action) return [];
				var t = e.action;
				return 'PARTICIPANT' !== t.type ? [] : t.options.userIds;
			});
		Object(r.createSelector)([l.d, v], function() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
			return Object(a.a)(
				t
					.map(function(t) {
						return e[t];
					})
					.filter(Boolean)
					.filter(function(e) {
						return 'ENABLED' === e.status;
					})
			);
		});
	},
	208: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return s;
		}),
			n.d(t, 'b', function() {
				return l;
			});
		var r = n(138),
			a = n.n(r),
			o = n(98),
			i = n(599),
			s = i,
			c = i.reduce(function(e, t) {
				var n = t.name;
				return (
					t.zones.forEach(function(t) {
						var r = t.value,
							o = t.label;
						e[r] = {
							value: r,
							label: o,
							region: n,
							offset: a.a.tz.zone(r).utcOffset(Date.now()),
						};
					}),
					e
				);
			}, {}),
			u = (function() {
				var e = a.a.tz.guess();
				if (c[e]) return e;
				var t = a.a.tz.zone(e).utcOffset(Date.now()),
					n = null,
					r = Number.POSITIVE_INFINITY;
				return (
					Object(o.a)(c, function(a) {
						var o = a.value,
							i = a.offset,
							s = Math.abs(i - t),
							c = e.split('/')[0],
							u = o.split('/')[0];
						s < r
							? ((n = o), (r = s))
							: s === r && c === u && ((n = o), (r = s));
					}),
					n
				);
			})(),
			l = function() {
				return u;
			};
		t.a = c;
	},
	210: function(e, t, n) {
		e.exports = {
			Container: '_2gIyXoLnVqkRODc8-Wuf',
			Header: 'a5NDS7LoiAvlNJpPj-9iq',
			Header__avatar__border: '_1DzUdQtwHj8MXNcXXe0J9a',
			Header__avatar: '_2T7XSAtPh1O7Diz0PzwL9r',
			Header__name: '_2ItpHQBWWdxg_wZ-IKT4hh',
			Header__title: '_1OLj39BNVUwJgTHUC4WWFs',
			ConsolidatedWelcomeMsgBody: '_1d1kQhCn7N-dhYJR5Om0YC',
			Body: 'Q9ADV15pBKHfBEmiaUDgQ',
		};
	},
	211: function(e, t, n) {
		e.exports = {
			FloatingHeader: '_3SdzxAaRTCwRnMo58oPoYx',
			MessengerHeader: '_2JQ3OA7w-khuFjAIA3iC1o',
			HeaderTitle: '_1ANbkBTeyyXX8EdJEZ6i8M',
			HeaderActionButton: '_3B7vwmXduhrNI-jNCliy_m',
			MessengerHeaderHalfHeight: '_1AO8lsPBPnej5q26v9SG__',
		};
	},
	212: function(e, t, n) {
		e.exports = {
			FloatingHeader: '_3RlNoKG9JDiG_uV8o9hJFE',
			MessengerHeader: '_2q6fbfL2a_x6NOAAN0mcms',
			HeaderTitle: '_3UP9cAoYjE427-JsxJdACW',
			HeaderActionButton: '_1HKYXmGCYDfkrGicaUVeDw',
			MessengerHeaderHalfHeight: '_3mued41oghPaQSjOV2eKcI',
		};
	},
	22: function(e, t, n) {
		'use strict';
		n.d(t, 's', function() {
			return d;
		}),
			n.d(t, 'o', function() {
				return p;
			}),
			n.d(t, 'g', function() {
				return _;
			}),
			n.d(t, 'p', function() {
				return m;
			}),
			n.d(t, 'f', function() {
				return b;
			}),
			n.d(t, 'l', function() {
				return g;
			}),
			n.d(t, 'm', function() {
				return h;
			}),
			n.d(t, 'k', function() {
				return v;
			}),
			n.d(t, 'n', function() {
				return E;
			}),
			n.d(t, 't', function() {
				return O;
			}),
			n.d(t, 'q', function() {
				return C;
			}),
			n.d(t, 'u', function() {
				return T;
			}),
			n.d(t, 'b', function() {
				return I;
			}),
			n.d(t, 'c', function() {
				return M;
			}),
			n.d(t, 'd', function() {
				return P;
			}),
			n.d(t, 'i', function() {
				return A;
			}),
			n.d(t, 'e', function() {
				return S;
			}),
			n.d(t, 'h', function() {
				return D;
			}),
			n.d(t, 'j', function() {
				return w;
			}),
			n.d(t, 'a', function() {
				return k;
			}),
			n.d(t, 'r', function() {
				return R;
			});
		var r = n(9),
			a = n(76),
			o = n(141),
			i = n(439),
			s = n(20),
			c = n(147),
			u = n(90),
			l = function(e) {
				return e.Bootstrap;
			},
			d = function(e) {
				return l(e).isBootstrapping;
			},
			p = function(e) {
				return l(e).hasBootstrapped;
			},
			_ = function(e) {
				return l(e).embedConfiguration;
			},
			f = Object(r.createSelector)(_, function(e) {
				return e.gates || {};
			}),
			m = function(e) {
				return f(e).has_consolidated_welcome_msg || !1;
			},
			b = Object(r.createSelector)(
				[
					function(e) {
						return !1 !== _(e).campaignsEnabled;
					},
					function(e) {
						return _(e).campaigns;
					},
				],
				function(e, t) {
					return e ? t : [];
				}
			),
			g = Object(r.createSelector)(b, function(e) {
				return Object(i.a)(e, 'priority');
			}),
			h = function(e) {
				return !!_(e).showBranding;
			},
			v = function(e) {
				return _(e).organizationName;
			},
			E = function(e) {
				return _(e).theme;
			},
			y = function(e) {
				return E(e).audience;
			},
			O = Object(r.createSelector)(
				[
					y,
					function(e) {
						return E(e).userListIds;
					},
					b,
				],
				function(e, t, n) {
					return (
						(e === o.c && !Object(c.default)(t)) ||
						Object(u.a)(n, function(e) {
							return (
								!Object(c.default)(e.userListIds) ||
								!Object(c.default)(
									Object(s.a)(e, 'attributes.excludedUserListIds')
								)
							);
						})
					);
				}
			),
			C = Object(r.createSelector)([y, b], function(e, t) {
				var n = Object(u.a)(t, function(e) {
					return !Object(
						c.default
					)(Object(s.a)(e, 'attributes.accountListIds'));
				});
				return (
					!(e !== o.c || !n) ||
					Object(u.a)(t, function(e) {
						return !Object(
							c.default
						)(Object(s.a)(e, 'attributes.excludedAccountListIds'));
					})
				);
			}),
			T = function(e) {
				return E(e).showUnfurl;
			},
			I = function(e) {
				return E(e).allowEndUserFileUpload;
			},
			M = function(e) {
				return !E(e).disableNewConversations;
			},
			P = function(e) {
				return !E(e).disableSidebarClose;
			},
			A = function(e) {
				return l(e).externalId;
			},
			S = function(e) {
				return l(e).anonymousId;
			},
			D = function(e) {
				return l(e).endUserEmail;
			},
			w = function(e) {
				return l(e).oneshotToken;
			},
			k = function(e) {
				return !d(e) && !p(e);
			},
			R = function(e) {
				return Object(a.l)(e);
			};
	},
	220: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return a;
		}),
			n.d(t, 'b', function() {
				return o;
			});
		var r = n(6),
			a = function(e, t) {
				var n = t.conversationId;
				return (function(e) {
					return (function(e) {
						return e.Rating;
					})(e).latestRatingByConversationId;
				})(e).get(n);
			},
			o = function(e) {
				return Object(r.p)('has_conversation_rating')(e);
			};
	},
	221: function(e, t, n) {
		'use strict';
		var r = n(17),
			a = n(89),
			o = n(27),
			i = n.n(o),
			s = n(361),
			c = n.n(s),
			u = n(9),
			l = n(448);
		function d(e) {
			return e.Bootstrap.embedConfiguration.theme;
		}
		function p(e) {
			return d(e).iconUrl;
		}
		function _(e, t) {
			return t.avatarUrl;
		}
		function f(e, t) {
			return t.iconType;
		}
		function m() {
			return Object(u.createSelector)([p, l.a, _, f], function(e, t, n, r) {
				return r === a.a.DISMISS
					? r
					: n
					? a.a.IMAGE
					: r === a.a.CHAT && t
					? a.a.TYPING_INDICATOR
					: e
					? a.a.IMAGE
					: r;
			});
		}
		var b = i()(
			c()({ iconType: a.a.CHAT }),
			Object(r.connect)(function() {
				var e = m(),
					t = Object(u.createSelector)([m, p, _], function(e, t, n) {
						return n || (e !== a.a.TYPING_INDICATOR ? t : void 0);
					});
				return function(n, r) {
					var a = d(n),
						o = a.backgroundColor,
						i = a.foregroundColor;
					return {
						backgroundColor: o ? '#' + o : void 0,
						foregroundColor: i ? '#' + i : void 0,
						avatarUrl: t(n, r),
						iconStyle: (function(e) {
							return d(e).iconStyle;
						})(n),
						iconType: e(n, r),
					};
				};
			})
		);
		t.a = b(a.b);
	},
	223: function(e, t, n) {
		'use strict';
		var r = n(2),
			a = n.n(r),
			o = n(459),
			i = n(105),
			s = n(3),
			c = n(21),
			u = n(4),
			l = n(203),
			d = n(264),
			p = n(19),
			_ = n(297),
			f = u.F,
			m = u.I;
		var b = Object(c.combineReducers)({
				driftUsersById: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
					switch (t.type) {
						case m:
							return Object(i.a)({}, e, Object(o.a)(t.payload, 'id'));
						default:
							return e;
					}
				},
				organization: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t = arguments[1];
					switch (t.type) {
						case f:
							return a()({}, e, { organization: t.payload });
						default:
							return e;
					}
				},
				agentStatusById: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Object(s.Map)(),
						t = arguments[1];
					switch (t.type) {
						case l.a:
							var n = t.payload;
							return e.update(n, function() {
								return (arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: Object(d.a)()
								).set('agentId', n);
							});
						case l.c:
							return e.update(t.payload.agentId, function() {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: Object(d.a)();
								return Object(d.a)(t.payload).set(
									'lastActivityAt',
									Math.max(t.payload.lastActivityAt, e.lastActivityAt)
								);
							});
						case p.A:
							return (function(e, t) {
								var n = void 0;
								switch (t.type) {
									case p.A:
										n = Object(_.a)(t);
										break;
									default:
										return e;
								}
								return n
									? e.update(n.agentId, function() {
											var e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: Object(d.a)();
											return e.merge(n);
									  })
									: e;
							})(e, t);
						default:
							return e;
					}
				},
			}),
			g = n(360);
		n.d(t, 'a', function() {
			return b;
		}),
			n.d(t, !1, function() {}),
			n.d(t, 'c', function() {
				return g.d;
			}),
			n.d(t, 'b', function() {
				return g.a;
			}),
			n.d(t, !1, function() {
				return g.c;
			}),
			n.d(t, !1, function() {
				return g.b;
			});
	},
	228: function(e, t, n) {
		'use strict';
		n.r(t),
			n.d(t, 'updateLinks', function() {
				return o;
			}),
			n.d(t, 'fetchLinksForMessage', function() {
				return i;
			}),
			n.d(t, 'fetchLink', function() {
				return s;
			}),
			n.d(t, 'fetchLinkSuccess', function() {
				return c;
			}),
			n.d(t, 'fetchLinkFailure', function() {
				return u;
			});
		var r = n(5),
			a = n(140),
			o = Object(r.b)(a.e),
			i = Object(r.b)(a.b),
			s = Object(r.b)(a.a),
			c = Object(r.b)(a.d),
			u = Object(r.b)(a.c);
	},
	23: function(e, t, n) {
		'use strict';
		n(974);
		var r = n(73),
			a = n.n(r)()({ PROD: 'PRODUCTION', QA: 'MASTER', DEV: 'dev' });
		n.d(t, 'o', function() {
			return i;
		}),
			n.d(t, 'a', function() {
				return s;
			}),
			n.d(t, 'b', function() {
				return c;
			}),
			n.d(t, 'e', function() {
				return u;
			}),
			n.d(t, 'd', function() {
				return l;
			}),
			n.d(t, 'h', function() {
				return d;
			}),
			n.d(t, 'i', function() {
				return p;
			}),
			n.d(t, 'f', function() {
				return _;
			}),
			n.d(t, 'g', function() {
				return f;
			}),
			n.d(t, 'c', function() {
				return m;
			}),
			n.d(t, 'm', function() {
				return b;
			}),
			n.d(t, 'n', function() {
				return g;
			}),
			n.d(t, 'j', function() {
				return h;
			}),
			n.d(t, 'k', function() {
				return v;
			}),
			n.d(t, 'r', function() {
				return E;
			}),
			n.d(t, 't', function() {
				return y;
			}),
			n.d(t, 'q', function() {
				return O;
			}),
			n.d(t, 's', function() {
				return C;
			}),
			n.d(t, 'u', function() {
				return T;
			}),
			n.d(t, 'v', function() {
				return I;
			}),
			n.d(t, 'p', function() {
				return M;
			}),
			n.d(t, 'l', function() {
				return P;
			});
		var o = void 0,
			i = 'https://816fa28dc7cf492ba8ffa277d90f0345@app.getsentry.com/61707',
			s = (o =
				__ENV__ === a.PROD
					? {
							ATTACHMENTS_API_BASE: 'https://attachments.drift-files.com',
							AUTH_API_BASE: 'https://customer.api.drift.com',
							CUSTOMER_API_BASE: 'https://customer.api.drift.com',
							CONVERSATION_API_BASE: 'https://conversation.api.drift.com',
							EVENT_API_BASE: 'https://event.api.drift.com',
							IDENTIFY_API_BASE: 'https://identify.api.drift.com',
							EMBED_API_BASE: 'https://js.driftt.com',
							ENRICHMENT_API_BASE: 'https://enrichment.api.drift.com',
							CLIENT_ID: 'f6zuizdyhxrm7r',
							PRESENCE_API_BASE: 'https://ws.api.drift.com',
							PRESENCE_WSS_BASE: 'wss://ws.api.drift.com',
							MESSAGES_API_BASE: 'https://chat.api.drift.com',
							MESSAGES_WSS_BASE: 'wss://chat.api.drift.com',
							WS_CHAT_USE_SHARDS: !0,
							WS_LIVE_USE_SHARDS: !0,
							WS_CHAT_BASE: 'chat.api.drift.com',
							WS_LIVE_BASE: 'live.api.drift.com',
							WS_NUM_SHARDS: 50,
							WS_WSS_PROTOCOL: 'wss',
							WS_API_PROTOCOL: 'https',
							METRICS_API_BASE: 'https://metrics.api.drift.com',
					  }
					: {
							ATTACHMENTS_API_BASE: 'https://attachments.driftqa-files.com',
							AUTH_API_BASE: 'https://customer2.api.driftqa.com',
							CUSTOMER_API_BASE: 'https://customer2.api.driftqa.com',
							CONVERSATION_API_BASE: 'https://conversation2.api.driftqa.com',
							EVENT_API_BASE: 'https://event2.api.driftqa.com',
							IDENTIFY_API_BASE: 'https://identify.api.driftqa.com',
							EMBED_API_BASE: 'https://js.driftt.com',
							ENRICHMENT_API_BASE: 'https://enrichment.api.driftqa.com',
							CLIENT_ID: '5su4735sxsu7tx',
							PRESENCE_API_BASE: 'https://ws.api.driftqa.com',
							PRESENCE_WSS_BASE: 'wss://ws.api.driftqa.com',
							MESSAGES_API_BASE: 'https://ws.api.driftqa.com',
							MESSAGES_WSS_BASE: 'wss://ws.api.driftqa.com',
							WS_CHAT_USE_SHARDS: !0,
							WS_LIVE_USE_SHARDS: !0,
							WS_CHAT_BASE: 'chat.api.driftqa.com',
							WS_LIVE_BASE: 'live.api.driftqa.com',
							WS_NUM_SHARDS: 50,
							WS_WSS_PROTOCOL: 'wss',
							WS_API_PROTOCOL: 'https',
							METRICS_API_BASE: 'https://metrics.api.driftqa.com',
					  }).ATTACHMENTS_API_BASE,
			c = o.AUTH_API_BASE,
			u = o.CUSTOMER_API_BASE,
			l = o.CONVERSATION_API_BASE,
			d = o.EVENT_API_BASE,
			p = o.IDENTIFY_API_BASE,
			_ = o.EMBED_API_BASE,
			f = o.ENRICHMENT_API_BASE,
			m = o.CLIENT_ID,
			b = o.PRESENCE_API_BASE,
			g = o.PRESENCE_WSS_BASE,
			h = o.MESSAGES_API_BASE,
			v = o.MESSAGES_WSS_BASE,
			E = o.WS_CHAT_USE_SHARDS,
			y = o.WS_LIVE_USE_SHARDS,
			O = o.WS_CHAT_BASE,
			C = o.WS_LIVE_BASE,
			T = o.WS_NUM_SHARDS,
			I = o.WS_WSS_PROTOCOL,
			M = o.WS_API_PROTOCOL,
			P = o.METRICS_API_BASE;
	},
	231: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		});
		var r = (function(e) {
			return '@@widget/bootstrap/' + e;
		})('UPDATE_AUTO_ASSIGNEE_ID');
	},
	239: function(e, t, n) {
		'use strict';
		var r = n(73),
			a = n.n(r);
		t.a = a()({
			SERVER: 'SERVER',
			BROWSER: 'BROWSER',
			BROWSER_NO_AUDIENCE: 'BROWSER_NO_AUDIENCE',
		});
	},
	242: function(e, t, n) {
		e.exports = {
			CtaButton: '_2ZajEElzGyjC5x-w9A4u2E',
			Slider: '_38Iqt3QAkTLmTs9LW0Fw6N',
			DismissButton: '_2DVrrMF0tG7SXtA3Y7Ly3W',
			Headline: '_3-cmGLagwmFmgte107B6qm',
			Content: '_28eE3t3T7Q8yKv-AGGQBmw',
			FlexContentWrapper: '_1i487viXPyIE0Ahk3YR5TE',
			DismissButtonWrapper: '_2iAByz56BmBgYpB3vqyhzu',
		};
	},
	25: function(e, t, n) {
		'use strict';
		n.d(t, 'f', function() {
			return m;
		}),
			n.d(t, 'b', function() {
				return b;
			}),
			n.d(t, 'k', function() {
				return h;
			}),
			n.d(t, 't', function() {
				return E;
			}),
			n.d(t, 'g', function() {
				return C;
			}),
			n.d(t, 'e', function() {
				return M;
			}),
			n.d(t, 'h', function() {
				return k;
			}),
			n.d(t, 'j', function() {
				return R;
			}),
			n.d(t, 'a', function() {
				return j;
			}),
			n.d(t, 'c', function() {
				return L;
			}),
			n.d(t, 'd', function() {
				return W;
			}),
			n.d(t, 'i', function() {
				return H;
			}),
			n.d(t, 'l', function() {
				return K;
			}),
			n.d(t, 'm', function() {
				return z;
			}),
			n.d(t, 'n', function() {
				return G;
			}),
			n.d(t, 'u', function() {
				return V;
			}),
			n.d(t, 'o', function() {
				return Y;
			}),
			n.d(t, 'r', function() {
				return Z;
			}),
			n.d(t, 'v', function() {
				return J;
			}),
			n.d(t, 's', function() {
				return Q;
			}),
			n.d(t, 'p', function() {
				return X;
			}),
			n.d(t, 'q', function() {
				return $;
			});
		var r = n(3),
			a = n(9),
			o = n(48),
			i = n(22),
			s = n(52),
			c = n(239),
			u = n(16),
			l = n(66),
			d = n(68),
			p = n(28),
			_ = function(e) {
				return (function(e) {
					return (function(e) {
						return e.Targeting;
					})(e).visits;
				})(e).currentSessionStartedAt;
			},
			f = function(e) {
				return e.Message.get('conversationsById');
			},
			m = function(e, t) {
				return f(e).getIn([t, 'local']);
			},
			b = function(e, t) {
				return (function(e) {
					return e.Message.get('conversationIdToPermaclose');
				})(e).get(t);
			},
			g = function(e) {
				return e.Message.get('conversationFetchStatusById');
			},
			h = function(e) {
				return e.Message.get('conversationId');
			},
			v = function(e) {
				return e.Message.get('messagesById');
			},
			E = function() {
				return Object(a.createSelector)(
					[
						v,
						function(e, t) {
							return t.messageId;
						},
					],
					function(e, t) {
						return e.get(t);
					}
				);
			},
			y = function(e) {
				return e.Message.get('messageStatusById');
			},
			O = function(e) {
				return e.Message.get('messageIdsByConversationId');
			},
			C = function(e, t) {
				return O(e).get(t, Object(r.List)()).size;
			},
			T = function(e) {
				return e.DriftUser.driftUsersById;
			},
			I = function(e) {
				return e.EndUser.currentEndUser;
			},
			M = function(e) {
				return e.Message.get('heldForDelayMessageIds');
			},
			P = function(e) {
				return e.Campaign.activeCampaignsById;
			},
			A = function(e) {
				return e.Campaign.activeCampaignsNoAudienceById;
			},
			S = function(e, t, n) {
				var r = e.getIn(['attributes', 'origin']),
					a = e.getIn(['attributes', 'campaignId']);
				return (
					r === c.a.SERVER ||
					(r === c.a.BROWSER
						? t.has(a)
						: r !== c.a.BROWSER_NO_AUDIENCE || n.has(a))
				);
			},
			D = function(e) {
				return e === s.e || e === s.b || e === s.d;
			},
			w = Object(a.createSelector)(f, v, O, function(e, t, n) {
				return e
					.toList()
					.filter(function(e) {
						return D(e.get('type'));
					})
					.map(function(e) {
						return n
							.get(e.get('id'), Object(r.List)())
							.map(function(e) {
								return t.get(e);
							})
							.filter(function(e) {
								return D(e.get('type'));
							});
					})
					.filter(function(e) {
						return !e.isEmpty();
					})
					.map(function(e) {
						return e.first();
					});
			}),
			k = Object(a.createSelector)(w, y, P, A, i.f, function(e, t, n, r, a) {
				var o = a.map(function(e) {
					return e.id;
				});
				return e
					.filter(function(e) {
						return S(e, n, r);
					})
					.filter(function(e) {
						return t.getIn([e.get('id'), 'unread'], !0);
					})
					.sortBy(function(e) {
						var t = o.indexOf(e.getIn(['attributes', 'campaignId']));
						return -1 === t ? 1 / 0 : t;
					})
					.take(1)
					.map(function(e) {
						return e.toJS();
					})
					.first();
			}),
			R = Object(a.createSelector)(
				[
					w,
					function(e) {
						return e.Message.get('mostRecentlyReadCampaignConversationId');
					},
					_,
				],
				function(e, t, n) {
					return e
						.filter(function(e) {
							return t === e.get('conversationId');
						})
						.filter(function(e) {
							return e.get('createdAt') >= 1e3 * n;
						})
						.sortBy(function(e) {
							return e.get('createdAt');
						})
						.take(1)
						.map(function(e) {
							return e.toJS();
						})
						.first();
				}
			),
			j = Object(a.createSelector)(
				[
					v,
					P,
					A,
					_,
					function(e, t) {
						return t;
					},
				],
				function(e, t, n, r, a) {
					return e
						.filter(function(e) {
							return e.get('conversationId') === a.get('id');
						})
						.filter(function(e) {
							return S(e, t, n);
						})
						.filter(function(e) {
							return e.get('createdAt') >= 1e3 * r;
						})
						.some(function(e) {
							return d.b.includes(
								e.getIn(['attributes', 'campaignDisplayType'])
							);
						});
				}
			),
			N = (Object(a.createSelector)(v, function(e) {
				return e
					.valueSeq()
					.filter(function(e) {
						return e.hasIn(['attributes', 'campaignId']);
					})
					.map(function(e) {
						return e.getIn(['attributes', 'campaignId']);
					})
					.toSet();
			}),
			Object(a.createSelector)([f, v, _, y], function(e, t, n, a) {
				return (
					t
						.filter(function(t) {
							return !!t && e.get(t.get('conversationId')).get('type') === s.c;
						})
						.filter(function(e) {
							return e.get('createdAt') >= 1e3 * n;
						})
						.filter(function(e) {
							return !1 === a.getIn([e.get('id'), 'unread']);
						})
						.sortBy(function(e) {
							return e.get('createdAt');
						})
						.last() || Object(r.Map)()
				).get('conversationId');
			})),
			B = Object(a.createSelector)([f, v, O, y, P, A, N], function(
				e,
				t,
				n,
				a,
				i,
				c,
				u
			) {
				return e
					.toList()
					.filter(function(e) {
						return !e.get('local');
					})
					.filter(function(e) {
						return e.get('type') === s.c;
					})
					.filter(function(e) {
						var s = n
							.get(e.get('id'), Object(r.List)())
							.map(function(e) {
								return t.get(e);
							})
							.sortBy(function(e) {
								return e.get('id');
							})
							.filter(function(e) {
								return !!e;
							});
						if (s.isEmpty()) return !1;
						var u = s.first();
						return (
							!!u.getIn(['attributes', 'campaignId']) &&
							(!s.find(function(e) {
								var t = e.get('authorType');
								return t === o.a.END_USER || t === o.a.LEAD;
							}) &&
								(!S(u, i, c) || !a.getIn([u.get('id'), 'unread'], !1)))
						);
					})
					.filter(function(e) {
						return e.get('id') !== u;
					})
					.map(function(e) {
						return e.get('id');
					})
					.toSet();
			}),
			U = Object(a.createSelector)(f, v, O, B, function(e, t, n, a) {
				return e
					.toList()
					.filter(function(e) {
						return !e.get('local');
					})
					.filter(function(e) {
						return s.a.includes(e.get('type'));
					})
					.filter(function(e) {
						return !a.has(e.get('id'));
					})
					.sortBy(function(e) {
						return n
							.get(e.get('id'), Object(r.Set)())
							.map(function(e) {
								return t.get(e);
							})
							.map(function(e) {
								return e.get('createdAt');
							})
							.max();
					})
					.reverse();
			}),
			L = Object(a.createSelector)(U, function(e) {
				return e.filter(function(e) {
					return e.get('type') === s.c;
				});
			}),
			W = Object(a.createSelector)(U, v, O, function(e, t, n) {
				return e.reduce(function(e, a) {
					var o = n
						.get(a.get('id'), Object(r.Set)())
						.map(function(e) {
							return t.get(e);
						})
						.filter(function(e) {
							return 0 !== e.get('inboxId');
						})
						.toList()
						.getIn([0, 'inboxId'], 0);
					return e.set(o, e.get(o, Object(r.List)()).push(a));
				}, Object(r.Map)());
			}),
			x = Object(a.createSelector)(v, f, function(e, t) {
				return e
					.filter(function(e) {
						return e.get('type') === s.c;
					})
					.filter(function(e) {
						return e.get('authorType') === o.a.USER;
					})
					.filter(function(e) {
						return e.get('body') || !e.get('attachments').isEmpty();
					})
					.filter(function(e) {
						return t.has(e.get('conversationId'));
					});
			}),
			F = Object(a.createSelector)(x, y, B, function(e, t, n) {
				return e
					.filter(function(e) {
						return t.getIn([e.get('id'), 'unread'], !0);
					})
					.filter(function(e) {
						return !n.has(e.get('conversationId'));
					});
			}),
			H = Object(a.createSelector)(F, function(e) {
				return e
					.sortBy(function(e) {
						return e.get('createdAt');
					})
					.last();
			}),
			K = Object(a.createSelector)(F, function(e) {
				return e.size;
			}),
			q = function(e, t) {
				return t.conversationId || e.Message.get('conversationId');
			},
			z = function() {
				return Object(a.createSelector)(f, q, function(e, t) {
					return e.get(t);
				});
			},
			G = function() {
				return Object(a.createSelector)(g, q, function(e, t) {
					return e.get(t, !1);
				});
			},
			V = function() {
				return Object(a.createSelector)(O, v, q, function(e, t, n) {
					return e
						.get(n, Object(r.List)())
						.map(function(e) {
							return t.get(e);
						})
						.filter(function(e) {
							return e.get('type') !== s.h;
						})
						.sortBy(function(e) {
							return e.get('createdAt');
						})
						.sortBy(function(e) {
							return !!e.get('local');
						})
						.flatMap(function(e) {
							return e
								.getIn(['attributes', 'preMessages'], Object(r.List)())
								.map(function(t, n) {
									return e
										.delete('id')
										.set(
											'attributes',
											Object(r.Map)({
												widgetGuid:
													e.getIn(['attributes', 'widgetGuid']) + '-' + n,
												senders: t.get('senders', Object(r.List)()).map(r.Map),
											})
										)
										.set('body', t.get('body'))
										.set('sender', t.get('sender'))
										.set('authorId', t.getIn(['sender', 'id'], 0))
										.set('authorType', o.a.USER)
										.set('context', Object(r.Map)())
										.set('attachments', Object(r.List)())
										.set('isPreMessage', !0);
								})
								.push(e);
						});
				});
			},
			Y = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V();
				return Object(a.createSelector)(e, T, u.d, l.b, p.g, function(
					e,
					t,
					n,
					r,
					a
				) {
					var i = e
						.reverse()
						.filter(function(e) {
							return (
								e.get('authorType') === o.a.USER &&
								!e.getIn(['attributes', 'show_email_capture_card'], !1)
							);
						})
						.map(function(e) {
							return t[e.get('authorId')];
						})
						.toList();
					return a
						? i
								.filter(function(e) {
									return e;
								})
								.first()
						: i
								.push(t[n || r])
								.filter(function(e) {
									return e;
								})
								.first();
				});
			},
			Z = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V();
				return Object(a.createSelector)(e, function(e) {
					return e.last();
				});
			},
			J = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z();
				return Object(a.createSelector)(e, v, y, g, function(e, t, n, r) {
					var a = e.get('id');
					return r.get(a, !1)
						? t
								.filter(function(e) {
									return e.get('conversationId') === a;
								})
								.filter(function(e) {
									return n.getIn([e.get('id'), 'unread'], !1);
								})
								.filter(function(e) {
									return e.get('body') || !e.get('attachments').isEmpty();
								}).size
						: e.get('unreadMessages') || 0;
				});
			},
			Q = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z();
				return Object(a.createSelector)(e, T, I, function(e, t, n) {
					var r = e.get('authorId');
					return e.get('authorType') === o.a.USER ? t[r] : n;
				});
			},
			X = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V();
				return Object(a.createSelector)(e, function(e) {
					return e.toIndexedSeq().reduce(function(e, t, n, a) {
						var o = t.get('createdAt'),
							i = t.get('authorId'),
							s = t.get('authorType');
						if (
							t.getIn(['attributes', 'ratingPrompt'], !1) ||
							(t.getIn(['attributes', 'goalReached'], !1) &&
								'' === t.get('body'))
						)
							return e.push(r.List.of(t));
						var c = n > 0 && a.get(n - 1);
						if (c) {
							var u = i === c.get('authorId') && s === c.get('authorType'),
								l = Math.abs(c.get('createdAt', 0) - o) < 3e5,
								d =
									c.getIn(['attributes', 'goalReached'], !1) &&
									'' === c.get('body'),
								p = c.getIn(['attributes', 'conversationRating'], !1),
								_ = c.getIn(['attributes', 'ratingPrompt'], !1),
								f =
									c.getIn(['attributes', 'scheduleMeetingFlow'], !1) ||
									c.getIn(['attributes', 'presentSchedule'], !1) ||
									c.getIn(['attributes', 'offerSchedule'], !1);
							if (!u || !l || f || p || d || _) return e.push(r.List.of(t));
						}
						return e.update(-1, Object(r.List)(), function(e) {
							return e.push(t);
						});
					}, Object(r.List)());
				});
			},
			$ = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V();
				return Object(a.createSelector)(e, function(e) {
					var t = e
						.filter(function(e) {
							return e.get('authorType') === o.a.USER;
						})
						.filter(function(e) {
							return !e.get('isPreMessage');
						})
						.sortBy(function(e) {
							return e.get('createdAt');
						})
						.last();
					return t ? t.get('createdAt') : 0;
				});
			};
	},
	253: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return f;
		}),
			n.d(t, 'b', function() {
				return m;
			}),
			n.d(t, 'c', function() {
				return b;
			}),
			n.d(t, 'a', function() {
				return g;
			});
		var r = n(64),
			a = n.n(r),
			o = n(4),
			i = n(231),
			s = n(108),
			c = n(18),
			u = n(23),
			l = n(35),
			d = n(327),
			p = {
				externalId: void 0,
				anonymousId: void 0,
				embedConfiguration: {},
				embedConfigurationOverride: {},
				endUserEmail: void 0,
				endUserId: void 0,
				inboxId: void 0,
				isBootstrapping: !1,
				hasBootstrapped: !1,
				orgId: void 0,
				hasPreviouslyBootstrapped: !1,
				oneshotToken: void 0,
			},
			_ = function(e, t) {
				if (Object(l.a)(e)) return t;
			},
			f = function(e, t) {
				switch ((null == e && (e = p), null == t && (t = {}), t.type)) {
					case o.A:
						return Object(s.a)(e, { isBootstrapping: !0, hasBootstrapped: !1 });
					case o.B:
						return Object(s.a)(e, { isBootstrapping: !1, hasBootstrapped: !1 });
					case o.C:
						return Object(s.a)(e, { isBootstrapping: !1, hasBootstrapped: !0 });
					case o.L:
						return Object(s.a)(e, {
							embedConfiguration: Object(d.a)(
								{},
								t.payload.configuration,
								e.embedConfigurationOverride,
								_
							),
						});
					case o.Oa:
						return Object(s.a)(e, {
							embedConfiguration: Object(d.a)(
								{},
								e.embedConfiguration,
								t.payload,
								_
							),
							embedConfigurationOverride: Object(d.a)(
								{},
								e.embedConfigurationOverride,
								t.payload,
								_
							),
						});
					case i.a:
						return Object(s.a)(e, {
							embedConfiguration: Object(d.a)(
								{},
								e.embedConfiguration,
								{ autoAssigneeId: t.payload },
								_
							),
							embedConfigurationOverride: Object(d.a)(
								{},
								e.embedConfigurationOverride,
								{ autoAssigneeId: t.payload },
								_
							),
						});
					default:
						return e;
				}
			},
			m = function(e) {
				var t = 3e4 * Math.floor(new Date() / 3e4),
					n = u.f + '/embeds/' + t + '/' + e + '.json',
					r = Object(c.b)(n, { method: 'GET' });
				return { types: [o.K, o.L, o.J], promise: r };
			},
			b = function(e) {
				return { type: o.Oa, payload: e };
			},
			g = function() {
				return function(e, t) {
					var n = t();
					return n.Bootstrap.isBootstrapping || n.Bootstrap.hasBootstrapped
						? a.a.resolve()
						: e({ type: o.A });
				};
			};
	},
	257: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
				),
				classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_5__
				),
				react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15),
				immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
				immutable__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					immutable__WEBPACK_IMPORTED_MODULE_7__
				),
				Widget_components_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					134
				),
				_RotatingAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(933),
				_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(600),
				utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					32
				),
				_style_styl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(380),
				_style_styl__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_12__
				),
				dom = React.DOM,
				component = React.createElement,
				_React = React,
				Component = _React.Component,
				PropTypes = _React.PropTypes,
				MessageGroup = (function(_Component) {
					function MessageGroup() {
						var _ref, _this;
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
							this,
							MessageGroup
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.renderMultiSenderAvatars = _this.renderMultiSenderAvatars.bind(
								_this
							)),
							(_this.renderAgentAvatar = _this.renderAgentAvatar.bind(_this));
						for (
							var _len = arguments.length, args = Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							args[_key] = arguments[_key];
						return (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
							this,
							(_ref =
								MessageGroup.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
									MessageGroup
								)).call.apply(_ref, [this].concat(args))
						));
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							MessageGroup,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(
							MessageGroup,
							[
								{
									key: 'componentDidMount',
									value: function() {
										this.props.onComponentDidMount &&
											this.props.onComponentDidMount();
									},
								},
								{
									key: 'renderAgentInfoLine',
									value: function() {
										var e =
											this.props.senders.isEmpty() ||
											this.props.senders.every(function(e) {
												return !e.has('name');
											})
												? null != this.props.drifttUser
													? this.props.drifttUser.name
													: void 0
												: this.props.senders
														.map(function(e) {
															return e.get('name');
														})
														.filter(Boolean)
														.join(', ');
										return dom.div(
											{ className: 'info-line flex' },
											dom.div(
												{
													className:
														_style_styl__WEBPACK_IMPORTED_MODULE_12___default.a[
															'message-sender-name'
														],
												},
												e
											)
										);
									},
								},
								{
									key: 'renderEndUserStatusLine',
									value: function() {
										return this.props.isDelivered
											? this.props.isLastMessageGroup
												? dom.div(
														{ className: 'info-line flex' },
														dom.div(
															{
																className:
																	_style_styl__WEBPACK_IMPORTED_MODULE_12___default
																		.a['message-delivery-status'],
															},
															component(
																_messages__WEBPACK_IMPORTED_MODULE_10__.a
															)
														),
														dom.div(
															{
																className:
																	_style_styl__WEBPACK_IMPORTED_MODULE_12___default
																		.a['message-received-time'],
															},
															component(
																react_intl__WEBPACK_IMPORTED_MODULE_6__.e,
																{ value: this.props.createdAtTimestamp }
															)
														)
												  )
												: void 0
											: dom.div(
													{ className: 'info-line flex' },
													component(_messages__WEBPACK_IMPORTED_MODULE_10__.b)
											  );
									},
								},
								{
									key: 'renderMultiSenderAvatars',
									value: function() {
										return component(
											_RotatingAvatar__WEBPACK_IMPORTED_MODULE_9__.a,
											{ users: this.props.senders }
										);
									},
								},
								{
									key: 'renderAgentAvatar',
									value: function() {
										if (
											!(null != this.props.senders
												? this.props.senders.isEmpty()
												: void 0) &&
											!this.props.lastAgentResponseAt
										)
											return this.renderMultiSenderAvatars();
										var e = this.props.drifttUser,
											t = component(
												Widget_components_Avatar__WEBPACK_IMPORTED_MODULE_8__.a,
												{ user: e, color: this.props.backgroundColor }
											);
										return (null != e
										? e.publicProfileUrl
										: void 0)
											? dom.a({ href: e.publicProfileUrl, target: '_blank' }, t)
											: t;
									},
								},
								{
									key: 'render',
									value: function() {
										var e = this.props,
											t = e.isFromViewer,
											n = e.isStartConversationPrompt,
											r = e.hasConsolidatedWelcomeMsg,
											a = e.isEmbeddedMessenger;
										return r && n
											? null
											: dom.div(
													{
														className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(
															'Message',
															this.props.className,
															{
																'is-end-user': t,
																'is-last-message-group': this.props
																	.isLastMessageGroup,
																'is-start-convo-prompt': n,
																floating: a,
																mobile: Object(
																	utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_11__.d
																)(),
															}
														),
													},
													t ? void 0 : this.renderAgentAvatar(),
													dom.div(
														{ className: 'message-container flex-column' },
														t ? void 0 : this.renderAgentInfoLine(),
														dom.div(
															{
																className:
																	_style_styl__WEBPACK_IMPORTED_MODULE_12___default
																		.a['message-group'],
															},
															this.props.children
														),
														t ? this.renderEndUserStatusLine() : void 0
													)
											  );
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										(this.propTypes = {
											isLastMessageGroup: PropTypes.bool,
											isFromViewer: PropTypes.bool.isRequired,
											drifttUser: PropTypes.object,
											senders: PropTypes.object,
											lastAgentResponseAt: PropTypes.number,
											createdAtTimestamp: PropTypes.number,
											isDelivered: PropTypes.bool,
											backgroundColor: PropTypes.string,
											className: PropTypes.string,
											children: PropTypes.node,
											isStartConversationPrompt: PropTypes.bool,
										}),
											(this.defaultProps = {
												senders: Object(
													immutable__WEBPACK_IMPORTED_MODULE_7__.List
												)(),
											});
									},
								},
							]
						),
						MessageGroup
					);
				})(Component);
			MessageGroup.initClass(), (__webpack_exports__.a = MessageGroup);
		}.call(this, __webpack_require__(0)));
	},
	258: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'b', function() {
				return u;
			}),
				n.d(t, 'a', function() {
					return l;
				});
			var r = n(24),
				a = n.n(r),
				o = n(2),
				i = n.n(o),
				s = n(0),
				c = n(15),
				u = Object(c.h)({
					composerPlaceholder: {
						id: 'app.composer.placeholder',
						description: 'Placeholder text in the Composer',
						defaultMessage: 'Type your message…',
					},
					composerLeaveMessageForPlaceholder: {
						id: 'app.composer.leaveMessageForPlaceholder',
						description:
							'Placeholder text displayed in existing conversations when offline',
						defaultMessage: 'Leave a message for {name}',
					},
					composerLeaveMessagePlaceholder: {
						id: 'app.composer.leaveMessagePlaceholder',
						description:
							'Placeholder text displayed in new conversations when offline',
						defaultMessage: 'Leave a message…',
					},
					composerReplyToPlaceholder: {
						id: 'app.composer.replyToPlaceholder',
						description: 'Placeholder text displayed in existing conversations',
						defaultMessage: 'Reply to {name}',
					},
					composerLeaveMessage: {
						id: 'app.composer.leaveMessage',
						description: 'Action button to leave a message',
						defaultMessage: 'Leave Message',
					},
					composerSendMessage: {
						id: 'app.composer.sendMessage',
						description: 'Action button to send a message',
						defaultMessage: 'Send Message',
					},
					composerDisabledForConversation: {
						id: 'app.composer.disabledForConversation',
						description:
							'Disabled composer prompt forever for this conversation',
						defaultMessage: 'Cannot respond to this conversation',
					},
					composerDisabledUseButtons: {
						id: 'app.composer.disabledUseButtons',
						description:
							'Disabled composer prompt to point the user at buttons',
						defaultMessage: 'Choose an option above...',
					},
					composerBrandingChatWith: {
						id: 'app.composer.footer.chatWith',
						description: 'Alternate branding with simple chat prompt',
						defaultMessage: 'Chat with {orgName}',
					},
					returnKey: {
						id: 'system.key.return',
						description: 'The return key on the keyboard',
						defaultMessage: 'return',
					},
					enterKey: {
						id: 'system.key.enter',
						description: 'The enter key on the keyboard',
						defaultMessage: 'enter',
					},
					sendKeyHint: {
						id: 'app.composer.sendKeyHint',
						description:
							'Hint text for sending messages by hitting the return/enter key',
						defaultMessage: '{key} to send',
					},
				});
			function l(t) {
				var n = function(n) {
					var r = n.intl,
						o = n.conversationLastDriftUser,
						s = n.isAway,
						c = n.disabled,
						l = n.disabledPrompt,
						d = n.isConversationPermaclosed,
						p = a()(n, [
							'intl',
							'conversationLastDriftUser',
							'isAway',
							'disabled',
							'disabledPrompt',
							'isConversationPermaclosed',
						]),
						_ = void 0;
					return (
						(_ = d
							? r.formatMessage(u.composerDisabledForConversation)
							: c && l
							? r.formatMessage(u.composerDisabledUseButtons)
							: o && o.name
							? s
								? r.formatMessage(u.composerLeaveMessageForPlaceholder, {
										name: o.name,
								  })
								: r.formatMessage(u.composerReplyToPlaceholder, {
										name: o.name,
								  })
							: s
							? r.formatMessage(u.composerLeaveMessagePlaceholder)
							: r.formatMessage(u.composerPlaceholder)),
						e.createElement(
							t,
							i()(
								{ placeholder: _, isAway: s, disabled: c, disabledPrompt: l },
								p
							)
						)
					);
				};
				return (n.propTypes = { intl: c.j.isRequired }), Object(c.i)(n);
			}
			s.PropTypes.bool.isRequired;
		}.call(this, n(0)));
	},
	26: function(e, t, n) {
		'use strict';
		n.d(t, 'q', function() {
			return _;
		}),
			n.d(t, 'k', function() {
				return f;
			}),
			n.d(t, 'h', function() {
				return m;
			}),
			n.d(t, 'i', function() {
				return b;
			}),
			n.d(t, 'l', function() {
				return g;
			}),
			n.d(t, 'n', function() {
				return h;
			}),
			n.d(t, 'm', function() {
				return v;
			}),
			n.d(t, 'A', function() {
				return E;
			}),
			n.d(t, 'c', function() {
				return y;
			}),
			n.d(t, 'e', function() {
				return O;
			}),
			n.d(t, 'f', function() {
				return C;
			}),
			n.d(t, 'd', function() {
				return T;
			}),
			n.d(t, 'z', function() {
				return I;
			}),
			n.d(t, 'B', function() {
				return M;
			}),
			n.d(t, 'v', function() {
				return P;
			}),
			n.d(t, 'g', function() {
				return A;
			}),
			n.d(t, 'b', function() {
				return S;
			}),
			n.d(t, 'w', function() {
				return D;
			}),
			n.d(t, 'y', function() {
				return w;
			}),
			n.d(t, 'x', function() {
				return k;
			}),
			n.d(t, 'o', function() {
				return R;
			}),
			n.d(t, 'p', function() {
				return j;
			}),
			n.d(t, 'C', function() {
				return N;
			}),
			n.d(t, 'D', function() {
				return B;
			}),
			n.d(t, 'a', function() {
				return U;
			}),
			n.d(t, 'G', function() {
				return L;
			}),
			n.d(t, 'F', function() {
				return W;
			}),
			n.d(t, 'E', function() {
				return x;
			}),
			n.d(t, 'j', function() {
				return F;
			}),
			n.d(t, 'u', function() {
				return H;
			}),
			n.d(t, 't', function() {
				return K;
			}),
			n.d(t, 'r', function() {
				return q;
			}),
			n.d(t, 's', function() {
				return z;
			});
		var r = n(5),
			a = n(19),
			o = n(18),
			i = n(6),
			s = n(23),
			c = n(4),
			u = c.r,
			l = c.s,
			d = c.q,
			p = c.i,
			_ = Object(r.b)(a.v),
			f = (Object(r.b)(a.m), Object(r.b)(a.o)),
			m = (Object(r.b)(a.n), Object(r.b)(a.g), Object(r.b)(a.i)),
			b = (Object(r.b)(a.h), Object(r.b)(a.j), Object(r.b)(a.l)),
			g = (Object(r.b)(a.k), Object(r.b)(a.q)),
			h = Object(r.b)(a.s),
			v = Object(r.b)(a.r),
			E = Object(r.b)(a.F),
			y = Object(r.b)(a.b),
			O = Object(r.b)(a.d),
			C = Object(r.b)(a.e),
			T = Object(r.b)(a.c),
			I = Object(r.b)(a.E),
			M = (Object(r.b)(a.H),
			Object(r.b)(a.I),
			Object(r.b)(a.G),
			Object(r.b)(a.J)),
			P = (Object(r.b)(a.L),
			Object(r.b)(a.M),
			Object(r.b)(a.K),
			Object(r.b)(a.A)),
			A = Object(r.b)(a.f),
			S = Object(r.b)(a.a),
			D = Object(r.b)(a.B),
			w = Object(r.b)(a.D),
			k = Object(r.b)(a.C),
			R = Object(r.b)(a.t),
			j = Object(r.b)(a.u),
			N = function(e) {
				return function(t, n) {
					var r = {
							method: 'POST',
							headers: Object(o.a)([Object(o.e)(), Object(i.d)(n())]),
						},
						a = s.d + '/messages/' + e + '/read';
					return t({
						types: [u, l, d],
						promise: Object(o.b)(a, r),
						metadata: { messageId: e },
					});
				};
			},
			B = Object(r.b)(a.O),
			U = Object(r.b)(p),
			L = Object(r.b)(a.R),
			W = Object(r.b)(a.Q),
			x = Object(r.b)(a.P),
			F = Object(r.b)(a.p),
			H = Object(r.b)(a.z),
			K = Object(r.b)(a.y),
			q = Object(r.b)(a.w),
			z = Object(r.b)(a.x);
	},
	261: function(e, t, n) {
		'use strict';
		var r = n(611),
			a = n(610),
			o = function(e) {
				window &&
					(window.requestAnimationFrame && window.requestAnimationFrame(e),
					window.setTimeout(e, 0));
			},
			i = n(609);
		n.d(t, 'a', function() {
			return r.a;
		}),
			n.d(t, 'b', function() {
				return a.a;
			}),
			n.d(t, !1, function() {
				return o;
			}),
			n.d(t, 'c', function() {
				return i.a;
			});
	},
	262: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return o;
		}),
			n.d(t, 'd', function() {
				return i;
			}),
			n.d(t, 'a', function() {
				return s;
			}),
			n.d(t, 'b', function() {
				return c;
			});
		var r = n(5),
			a = n(126),
			o = Object(r.b)(a.c),
			i = Object(r.b)(a.d),
			s = Object(r.b)(a.a),
			c = Object(r.b)(a.b);
	},
	264: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		});
		var r = n(3),
			a = n(99),
			o = Object(r.Record)({
				agentId: null,
				lastActivityAt: null,
				online: !1,
				availability: a.b.OFFLINE,
			});
	},
	266: function(e, t, n) {
		'use strict';
		n.d(t, 'e', function() {
			return u;
		}),
			n.d(t, 'c', function() {
				return l;
			}),
			n.d(t, 'd', function() {
				return d;
			}),
			n.d(t, 'a', function() {
				return p;
			}),
			n.d(t, 'b', function() {
				return _;
			});
		var r = n(6),
			a = n(16),
			o = n(23),
			i = n(30),
			s = n(319),
			c = function(e, t) {
				var n = t.clusterName;
				return (function(e) {
					return e.Socket;
				})(e).get(n, Object(s.b)());
			},
			u = function(e, t) {
				return (
					'failure' ===
					(function(e, t) {
						return c(e, t).authenticateStatus;
					})(e, t)
				);
			},
			l = function(e, t) {
				var n = t.clusterName;
				switch (t.channelName) {
					case i.k.USER:
						return (
							'user:' +
							(function(e, t) {
								return c(e, t).userId;
							})(e, { clusterName: n })
						);
					case i.k.ORG_PUBLIC:
						return 'org:' + Object(a.k)(e);
				}
			},
			d = function(e, t) {
				switch (t.clusterName) {
					case i.l.PRESENCE:
						if (o.t) {
							var n = Object(a.k)(e),
								r = f(n);
							return o.v + '://' + n + '-' + r + '.' + o.s;
						}
						return o.n;
					case i.l.MESSAGES:
						if (o.r) {
							var s = Object(a.k)(e),
								c = f(s);
							return o.v + '://' + s + '-' + c + '.' + o.q;
						}
						return o.k;
				}
			},
			p = function(e, t) {
				switch (t.clusterName) {
					case i.l.PRESENCE:
						if (o.t) {
							var n = Object(a.k)(e),
								r = f(n);
							return o.p + '://' + n + '-' + r + '.' + o.s;
						}
						return o.m;
					case i.l.MESSAGES:
						if (o.r) {
							var s = Object(a.k)(e),
								c = f(s);
							return o.p + '://' + s + '-' + c + '.' + o.q;
						}
						return o.j;
				}
			},
			_ = function(e) {
				return Object(r.b)(e)
					? { access_token: Object(r.b)(e) }
					: { org_id: Object(a.k)(e), anon_id: Object(a.a)(e) };
			},
			f = function(e) {
				return e % o.u;
			};
	},
	267: function(e, t, n) {
		'use strict';
		var r = n(9),
			a = n(102),
			o = n(16),
			i = n(25),
			s = n(104);
		function c(e, t) {
			return (function(e) {
				return e.ScheduleMeeting.availabilityByAgentId;
			})(e).get(t.agentId, new s.a());
		}
		function u(e, t) {
			return (function(e) {
				return e.ScheduleMeeting.availabilityFetchStatusByAgentId;
			})(e).get(t.agentId, new s.c());
		}
		function l(e, t) {
			return (function(e) {
				return e.ScheduleMeeting.scheduleAppointmentFetchStatusByAgentId;
			})(e).get(t.agentId, new s.c());
		}
		var d = n(48);
		function p() {
			var e = Object(i.t)();
			return function(t, n) {
				var r = e(t, n);
				return r && r.getIn(['attributes', 'presentSchedule'], !1);
			};
		}
		function _() {
			var e = p(),
				t = Object(i.u)();
			return function(n, r) {
				var a = e(n, r);
				return 'number' == typeof a
					? a
					: t(n, r)
							.takeUntil(function(e) {
								return e.get('id') === r.messageId;
							})
							.map(function(e) {
								return e.getIn(['attributes', 'scheduleMeetingWith'], null);
							})
							.filter(Boolean)
							.last();
			};
		}
		function f() {
			var e = _(),
				t = Object(i.u)();
			return function(n, r) {
				var a = e(n, r),
					o = t(n, r)
						.takeUntil(function(e) {
							return e.get('id') === r.messageId;
						})
						.filter(function(e) {
							return !!e.getIn(['attributes', 'offerSchedule']);
						})
						.last();
				if (
					o &&
					o.getIn(['attributes', 'offerSchedule']) === a &&
					o.get('authorType') === d.a.USER
				)
					return o.get('authorId');
			};
		}
		function m() {
			var e = Object(i.u)();
			return function(t, n) {
				return e(t, n)
					.takeUntil(function(e) {
						return e.get('id') === n.messageId;
					})
					.map(function(e) {
						return e.getIn(['attributes', 'meetingType'], null);
					})
					.filter(Boolean)
					.last();
			};
		}
		function b() {
			var e = Object(i.u)();
			return function(t, n) {
				return e(t, n)
					.takeUntil(function(e) {
						return e.get('id') === n.messageId;
					})
					.map(function(e) {
						return e.getIn(['attributes', 'meetingSource'], null);
					})
					.filter(Boolean)
					.last();
			};
		}
		function g() {
			var e = _(),
				t = m(),
				n = (function() {
					var e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: _();
					return function(t, n) {
						var r = e(t, n);
						return Object(a.a)(t, { agentId: r });
					};
				})(e),
				d = (function() {
					var e = Object(i.u)();
					return function(t, n) {
						return e(t, n)
							.skipUntil(function(e) {
								return e.get('id') === n.messageId;
							})
							.map(function(e) {
								return e.getIn(['attributes', 'appointmentInfo'], null);
							})
							.filter(Boolean)
							.map(function(e) {
								return new s.b(e);
							})
							.first();
					};
				})();
			return Object(r.createStructuredSelector)({
				agentId: e,
				meetingType: t,
				agent: n,
				appointment: d,
				availabilityInfo: c,
				availabilityFetchStatus: u,
				scheduleAppointmentFetchStatus: l,
				showBranding: o.s,
			});
		}
		n.d(t, 'f', function() {
			return p;
		}),
			n.d(t, 'a', function() {
				return _;
			}),
			n.d(t, 'b', function() {
				return f;
			}),
			n.d(t, 'e', function() {
				return m;
			}),
			n.d(t, 'd', function() {
				return b;
			}),
			n.d(t, 'c', function() {
				return g;
			});
	},
	268: function(e, t, n) {
		e.exports = {
			sliderTransitionEnter: 'RleSeSSshUnxBU54Ju-Kg',
			sliderTransitionAppear: 'yZ8m6oJqdYiWLMMseLe71',
			sliderTransitionLeave: '_2REwem2ttd38R0rWXhgPB3',
			sliderTransitionLeaveActive: '_2PYlwCQUwR96W4dGlZoidv',
			sliderTransitionEnterActive: '_1A1yWaMm_2RUCDFzylxa4q',
			sliderTransitionAppearActive: '_1HkBS3rdb0dAn10UW3DlfS',
		};
	},
	269: function(e, t, n) {
		e.exports = {
			Container: 'gjK_A0k1m9YUi0X2ELNuM',
			Header: '_2xftig58XqbF4GSyHJqNWy',
			Form: '_1BquHi9sTWrb6uvZ2Dm_eW',
			Body: '_2havWONWU25Fa8_Gs4sngI',
			Input: '_2moH5hy0ThAmgSXPzJ85kL',
			SubmitButton: '_2W4Ow2Gh16tpJFVWkrr0zP',
		};
	},
	270: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'c', function() {
				return b;
			}),
				n.d(t, 'a', function() {
					return g;
				}),
				n.d(t, 'b', function() {
					return h;
				});
			var r = n(2),
				a = n.n(r),
				o = n(0),
				i = n(15),
				s = n(12),
				c = n.n(s),
				u = n(491),
				l = n(378),
				d = n.n(l),
				p = function(t) {
					var n = t.className;
					return e.createElement(
						'svg',
						{
							viewBox: '0 0 10 10',
							className: c()(d.a.ActivityIndicatorBadge, n),
						},
						e.createElement('ellipse', {
							cx: '50%',
							cy: '50%',
							rx: '50%',
							ry: '50%',
						})
					);
				};
			p.propTypes = { className: o.PropTypes.string };
			var _ = function() {
					return e.createElement(p, {
						className: d.a['ActivityIndicatorBadge--online'],
					});
				},
				f = function() {
					return e.createElement(p, {
						className: d.a['ActivityIndicatorBadge--offline'],
					});
				},
				m = function(t) {
					return e.createElement(
						'div',
						a()({}, t, {
							className: d.a.AgentActiveStatus,
							style: { color: t.foregroundColor },
						})
					);
				};
			m.propTypes = {
				children: o.PropTypes.node,
				foregroundColor: o.PropTypes.string,
			};
			var b = function(t) {
				var n = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: n },
					e.createElement(_, null),
					' ',
					e.createElement(i.b, u.a.userStatusOnline)
				);
			};
			b.propTypes = { foregroundColor: o.PropTypes.string };
			var g = function(t) {
				var n = t.time,
					r = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: r },
					e.createElement(
						i.b,
						a()({}, u.a.userStatusActive, {
							values: { time: e.createElement(i.d, { value: n }) },
						})
					)
				);
			};
			g.propTypes = {
				time: o.PropTypes.number.isRequired,
				foregroundColor: o.PropTypes.string,
			};
			var h = function(t) {
				var n = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: n },
					e.createElement(f, null),
					' ',
					e.createElement(i.b, u.a.userStatusOffline)
				);
			};
			h.propTypes = { foregroundColor: o.PropTypes.string };
		}.call(this, n(0)));
	},
	271: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'c', function() {
				return b;
			}),
				n.d(t, 'a', function() {
					return g;
				}),
				n.d(t, 'b', function() {
					return h;
				});
			var r = n(2),
				a = n.n(r),
				o = n(0),
				i = n(15),
				s = n(12),
				c = n.n(s),
				u = n(494),
				l = n(379),
				d = n.n(l),
				p = function(t) {
					var n = t.className;
					return e.createElement(
						'svg',
						{
							viewBox: '0 0 10 10',
							className: c()(d.a.ActivityIndicatorBadge, n),
						},
						e.createElement('ellipse', {
							cx: '50%',
							cy: '50%',
							rx: '50%',
							ry: '50%',
						})
					);
				};
			p.propTypes = { className: o.PropTypes.string };
			var _ = function() {
					return e.createElement(p, {
						className: d.a['ActivityIndicatorBadge--online'],
					});
				},
				f = function() {
					return e.createElement(p, {
						className: d.a['ActivityIndicatorBadge--offline'],
					});
				},
				m = function(t) {
					return e.createElement(
						'div',
						a()({}, t, {
							className: d.a.AgentActiveStatus,
							style: { color: t.foregroundColor },
						})
					);
				};
			m.propTypes = {
				children: o.PropTypes.node,
				foregroundColor: o.PropTypes.string,
			};
			var b = function(t) {
				var n = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: n },
					e.createElement(_, null),
					' ',
					e.createElement(i.b, u.a.userStatusOnline)
				);
			};
			b.propTypes = { foregroundColor: o.PropTypes.string };
			var g = function(t) {
				var n = t.time,
					r = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: r },
					e.createElement(
						i.b,
						a()({}, u.a.userStatusActive, {
							values: { time: e.createElement(i.d, { value: n }) },
						})
					)
				);
			};
			g.propTypes = {
				time: o.PropTypes.number.isRequired,
				foregroundColor: o.PropTypes.string,
			};
			var h = function(t) {
				var n = t.foregroundColor;
				return e.createElement(
					m,
					{ foregroundColor: n },
					e.createElement(f, null),
					' ',
					e.createElement(i.b, u.a.userStatusOffline)
				);
			};
			h.propTypes = { foregroundColor: o.PropTypes.string };
		}.call(this, n(0)));
	},
	272: function(e, t, n) {
		e.exports = {
			ConversationRatingCard: 'UU51zpqDdJnxspoHqCgQr',
			ConversationRatingCardHeader: 'b9EbJJlWdDanwbCwy29ea',
			ConversationRatingCardContent: '_37cOo7TC4b7L75kMUoro0P',
			ConversationRatingCardEmoji: 'ofouADkc5GPjkNIZD3ayE',
			ConversationRatingCardText: '_3kYIQY2UjnM3jEm9LBTETI',
			ConversationRatingCardFooter: 'eKbmoBVXiFdD7hVYoHuu-',
		};
	},
	273: function(e, t, n) {
		e.exports = {
			hasActiveBorderOnFocus: 'QThEDgEDT1-11mx5ScY8H',
			'Composer-textarea': '_1eY_aSnr3MDhZqacV8fugZ',
			'Composer-footer': '_3U7UDl0salhAfnh_5cngat',
			Branding: '_3cFC78pAuQUUGXB0th8eZP',
			'Composer-dropzone': '_1LQ2wLU8AfB3847pycmdlu',
		};
	},
	28: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return c;
		}),
			n.d(t, 'l', function() {
				return u;
			}),
			n.d(t, 'k', function() {
				return l;
			}),
			n.d(t, 'a', function() {
				return d;
			}),
			n.d(t, 'h', function() {
				return p;
			}),
			n.d(t, 'i', function() {
				return _;
			}),
			n.d(t, 'n', function() {
				return f;
			}),
			n.d(t, 'f', function() {
				return m;
			}),
			n.d(t, 'e', function() {
				return b;
			}),
			n.d(t, 'b', function() {
				return g;
			}),
			n.d(t, 'm', function() {
				return h;
			}),
			n.d(t, 'g', function() {
				return v;
			}),
			n.d(t, 'c', function() {
				return y;
			}),
			n.d(t, 'j', function() {
				return O;
			});
		var r = n(20),
			a = n(6),
			o = n(9),
			i = n(973),
			s = function(e) {
				return (function(e) {
					return e.Bootstrap;
				})(e).embedConfiguration;
			},
			c = function(e) {
				return Object(r.a)(e, ['UI', 'currentSidebarView']);
			},
			u = function(e) {
				return Object(r.a)(e, ['UI', 'sidebarOpen'], !1);
			},
			l = function(e) {
				return Object(r.a)(e, ['UI', 'showConsentTakeover'], !1);
			},
			d = function(e) {
				return Object(r.a)(e, ['UI', 'activationTakeoverOpen'], !1);
			},
			p = function(e) {
				return Object(r.a)(e, ['UI', 'iframeRepositionPending'], !1);
			},
			_ = function(e) {
				return Object(r.a)(e, ['UI', 'iframeSize'], !1);
			},
			f = function(e) {
				return Object(r.a)(e, ['UI', 'widgetVisible'], !1);
			},
			m = function(e) {
				return Object(r.a)(e, ['UI', 'emailCaptureSliderSubmitted']);
			},
			b = function(e) {
				return Object(r.a)(e, ['UI', 'emailCaptureSliderDismissed']);
			},
			g = function(e) {
				return Object(r.a)(e, ['UI', 'avatarUrl']);
			},
			h = function(e) {
				return (function(e) {
					return s(e).theme;
				})(e).widgetHalfHeight;
			},
			v = function(e) {
				return (
					(function(e) {
						return s(e).embeddedMode;
					})(e) &&
					(function(e) {
						return Object(a.p)('has_bot_landing_pages')(e);
					})(e)
				);
			},
			E = function(e) {
				return Object(r.a)(s(e), 'landingPageConfig', {});
			},
			y = Object(o.createSelector)(
				[
					function(e) {
						return Object(r.a)(E(e), 'firstGradientColor', '#F55C5C');
					},
					function(e) {
						return Object(r.a)(E(e), 'secondGradientColor', '#C755D5');
					},
				],
				function(e, t) {
					return Object(i.css)({
						backgroundImage: 'linear-gradient(135deg, ' + e + ', ' + t + ')',
						'backgroundSize:': 'cover',
						backgroundPosition: 'center',
						backgroundAttachment: 'fixed',
					});
				}
			),
			O = function(e) {
				return Object(r.a)(E(e), 'isHypergrowthPage', !1);
			};
	},
	288: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return f;
		}),
			n.d(t, 'c', function() {
				return m;
			}),
			n.d(t, 'e', function() {
				return b;
			}),
			n.d(t, 'f', function() {
				return g;
			}),
			n.d(t, 'b', function() {
				return h;
			}),
			n.d(t, 'a', function() {
				return v;
			});
		var r = n(64),
			a = n.n(r),
			o = n(5),
			i = n(100),
			s = n(136),
			c = n(170),
			u = n(187),
			l = {
				showWelcomeMessage: Object(o.b)(i.c),
				showWelcomeMessageDone: Object(o.b)(i.d),
				hideWelcomeMessage: Object(o.b)(i.a),
				hideWelcomeMessageDone: Object(o.b)(i.b),
				mouseEnter: Object(o.b)(i.f),
				mouseLeave: Object(o.b)(i.g),
			},
			d = void 0,
			p = void 0,
			_ = a.a.resolve(),
			f = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.slide,
					n = e.avatar,
					r = e.avatarUrl,
					o = e.message,
					i = e.sender,
					p = e.showAvatar,
					_ = e.inboxId,
					f = e.attributes,
					m = e.autoFocus,
					b = void 0 !== m && m,
					g = e.msgFromFirstPopup,
					h = void 0 !== g && g,
					v = e.triggeredFromWidgetAPI,
					E = void 0 !== v && v;
				return function(e, m) {
					var g = m(),
						v = t ? 'SLIDE' : void 0,
						y = n || p ? 'USER' : void 0,
						O = {
							inboxId: _,
							attributes: f,
							autoFocus: b,
							msgFromFirstPopup: h,
							triggeredFromWidgetAPI: E,
							transitionStyle: Object(u.a)(v)
								? g.WelcomeMessage.transitionStyle
								: v,
							avatarStyle: Object(u.a)(y) ? g.WelcomeMessage.avatarStyle : y,
							avatarUrl: r || g.WelcomeMessage.avatarUrl,
							sender: i || (r && { avatarUrl: r }),
							message: o || g.WelcomeMessage.message,
						};
					return (
						d && (clearTimeout(d), (d = void 0)),
						e(Object(s.hideAwayMessage)()).then(function() {
							return (
								e(Object(c.b)(O)),
								e(l.showWelcomeMessage(O)),
								new a.a(function(t) {
									d = setTimeout(function() {
										e(l.showWelcomeMessageDone(O)), t();
									}, 220);
								})
							);
						})
					);
				};
			},
			m = function() {
				return function(e, t) {
					var n = t();
					return n.WelcomeMessage.active || n.WelcomeMessage.hovered
						? (d && (clearTimeout(d), (d = void 0)),
						  e(l.hideWelcomeMessage()),
						  (_ = new a.a(function(t) {
								d = setTimeout(function() {
									e(Object(c.b)()), e(l.hideWelcomeMessageDone()), t();
								}, 220);
						  })))
						: _;
				};
			},
			b = function() {
				return function(e, t) {
					return (
						p && clearTimeout(p),
						(p = setTimeout(function() {
							var n = t().WelcomeMessage,
								r = n.active,
								a = n.hovered,
								o = n.dismissed;
							a || r || o || e(l.mouseEnter());
						}, 100)),
						a.a.resolve()
					);
				};
			},
			g = function() {
				return function(e, t) {
					return (
						p && clearTimeout(p),
						(p = setTimeout(function() {
							var n = t().WelcomeMessage,
								r = n.active,
								a = n.hovered,
								o = n.dismissed;
							!a || r || o || e(m());
						}, 100)),
						a.a.resolve()
					);
				};
			},
			h = Object(o.b)(i.e),
			v = function() {
				return function(e) {
					return e(h()), e(m());
				};
			};
	},
	29: function(e, t, n) {
		'use strict';
		n.r(t),
			n.d(t, 'openSidebar', function() {
				return x;
			}),
			n.d(t, 'closeSidebar', function() {
				return F;
			}),
			n.d(t, 'closeSidebarWithTween', function() {
				return H;
			}),
			n.d(t, 'closeSidebarAnimated', function() {
				return K;
			}),
			n.d(t, 'toggleSidebar', function() {
				return q;
			}),
			n.d(t, 'showWidget', function() {
				return z;
			}),
			n.d(t, 'hideWidget', function() {
				return G;
			}),
			n.d(t, 'expandWidget', function() {
				return V;
			}),
			n.d(t, 'collapseWidget', function() {
				return Y;
			}),
			n.d(t, 'setSidebarView', function() {
				return Z;
			}),
			n.d(t, 'goToNewConversation', function() {
				return J;
			}),
			n.d(t, 'goToConversationList', function() {
				return Q;
			}),
			n.d(t, 'goToSelectedConversation', function() {
				return X;
			}),
			n.d(t, 'goToNewConversationOnline', function() {
				return $;
			}),
			n.d(t, 'goToNewConversationOffline', function() {
				return ee;
			}),
			n.d(t, 'goToNewConversationForCampaign', function() {
				return te;
			}),
			n.d(t, 'displayActivationTakeover', function() {
				return ne;
			}),
			n.d(t, 'closeActivationTakeover', function() {
				return re;
			}),
			n.d(t, 'displayConsentTakeover', function() {
				return ae;
			}),
			n.d(t, 'emailCaptureSliderSubmitted', function() {
				return oe;
			}),
			n.d(t, 'emailCaptureSliderDismissed', function() {
				return ie;
			}),
			n.d(t, 'emailCaptureSliderCleared', function() {
				return se;
			}),
			n.d(t, 'showTypingIndicatorButtonIcon', function() {
				return ce;
			}),
			n.d(t, 'clearTypingIndicatorButtonIcon', function() {
				return ue;
			}),
			n.d(t, 'setIdentifiedConversation', function() {
				return le;
			}),
			n.d(t, 'iframeResizeDone', function() {
				return de;
			}),
			n.d(t, 'iframeResize', function() {
				return pe;
			}),
			n.d(t, 'iframeOverrideSize', function() {
				return _e;
			}),
			n.d(t, 'openChat', function() {
				return fe;
			}),
			n.d(t, 'hideChat', function() {
				return me;
			}),
			n.d(t, 'showWelcomeOrAwayMessage', function() {
				return be;
			});
		var r = n(64),
			a = n.n(r),
			o = n(3),
			i = n(4),
			s = n(16),
			c = n(52),
			u = n(25),
			l = n(42),
			d = n(97),
			p = n(136),
			_ = n(32),
			f = n(170),
			m = n(51),
			b = i.Na,
			g = i.e,
			h = i.f,
			v = i.Ta,
			E = i.Aa,
			y = i.z,
			O = i.g,
			C = i.T,
			T = i.S,
			I = i.V,
			M = i.Ra,
			P = i.Ja,
			A = i.Ka,
			S = i.Qa,
			D = i.Da,
			w = i.Ca,
			k = i.Ba,
			R = i.La,
			j = i.d,
			N = i.Ma,
			B = i.Sa,
			U = i.v,
			L = i.u,
			W = i.t,
			x = function() {
				return { type: b };
			},
			F = function() {
				return { type: g };
			},
			H = function() {
				return { type: h };
			},
			K = function() {
				return function(e, t) {
					return t().UI.sidebarOpen
						? e(H()).then(function() {
								return new a.a(function(t) {
									setTimeout(function() {
										e(F()), t();
									}, 200);
								});
						  })
						: a.a.resolve();
				};
			},
			q = function() {
				return function(e, t) {
					return t().UI.sidebarOpen ? e(F()) : e(x());
				};
			},
			z = function() {
				return { type: v };
			},
			G = function() {
				return { type: E };
			},
			V = function() {
				return { type: y };
			},
			Y = function() {
				return { type: O };
			},
			Z = function(e) {
				return { type: M, payload: { view: e } };
			},
			J = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return function(t, n) {
					var r = n(),
						a = Object(s.i)(r);
					if (Object(_.b)()) {
						var o = {
							avatarUrl: e.avatarUrl || r.WelcomeMessage.avatarUrl,
							message: e.message || r.WelcomeMessage.message,
							sender: e.sender || r.WelcomeMessage.sender,
						};
						return t(Object(f.b)(o)), t($(e));
					}
					return t(K()).then(function() {
						return t(
							a ? Object(d.showWelcomeMessage)(e) : Object(p.showAwayMessage)(e)
						);
					});
				};
			},
			Q = function() {
				return { type: T };
			},
			X = function() {
				return { type: I };
			},
			$ = function(e) {
				return { type: C, payload: e };
			},
			ee = function() {
				return function(e) {
					return e(Z(P)).then(function() {
						return e(x());
					});
				};
			},
			te = function(e) {
				return function(t) {
					return t(Object(f.a)(e))
						.then(function() {
							return t(Z(A));
						})
						.then(function() {
							return t(x());
						});
				};
			},
			ne = function() {
				return { type: R };
			},
			re = function() {
				return { type: j };
			},
			ae = function() {
				return { type: N };
			},
			oe = function() {
				return { type: U };
			},
			ie = function() {
				return { type: L };
			},
			se = function() {
				return { type: W };
			},
			ce = function() {
				return { type: B, payload: { showTypingIndicatorButtonIcon: !0 } };
			},
			ue = function() {
				return { type: B, payload: { showTypingIndicatorButtonIcon: !1 } };
			},
			le = function(e) {
				return { type: S, payload: { conversationId: e } };
			},
			de = function(e, t) {
				return { type: D, payload: { width: e, height: t } };
			},
			pe = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return { type: w, payload: { size: e, repositionPending: t } };
			},
			_e = function(e) {
				return { type: k, payload: { overrides: e } };
			},
			fe = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return function(t, n) {
					var r = n(),
						a = e.inboxId || Object(m.e)(r),
						i = Object(u.d)(r),
						_ = Object(s.i)(r),
						f = i.get(a, Object(o.List)());
					if (!f.isEmpty()) {
						var b = f.first(),
							g = f
								.filter(function(e) {
									return e.get('type') === c.c;
								})
								.first();
						if (g) return t(Object(l.f)(g.get('id')));
						if (b.get('type') === c.b && Object(u.a)(r, b))
							return t(Object(l.h)(b));
					}
					return t(
						_ ? Object(d.showWelcomeMessage)(e) : Object(p.showAwayMessage)(e)
					);
				};
			},
			me = function() {
				return function(e, t) {
					var n = t();
					return n.UI.sidebarOpen
						? e(K())
						: n.WelcomeMessage.active
						? e(Object(d.hideWelcomeMessage)())
						: n.AwayMessage.active
						? e(Object(p.hideAwayMessage)())
						: a.a.resolve();
				};
			},
			be = function(e) {
				return function(t, n) {
					return Object(s.i)(n())
						? t(Object(d.showWelcomeMessage)(e))
						: t(Object(p.showAwayMessage)(e));
				};
			};
	},
	293: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		});
		var r = (function(e) {
			return '@@widget/visibility/' + e;
		})('SET_VISIBILITY');
	},
	294: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(200),
				m = n.n(f),
				b = n(124),
				g = n.n(b),
				h = n(445),
				v = n.n(h),
				E = n(221),
				y = n(374),
				O = n.n(y),
				C = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.handleResize = function(e) {
								var t = e.width,
									n = e.height;
								r.props.onResize && r.props.onResize({ width: t, height: n });
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'shouldComponentUpdate',
								value: function(e, t) {
									return v()(this, e, t);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.children,
										r = t.onClick;
									return e.createElement(
										m.a,
										{
											onMeasure: this.handleResize,
											whitelist: ['width', 'height'],
										},
										e.createElement(
											'div',
											{ className: O.a.Container },
											e.createElement(
												g.a,
												{
													className: O.a.TransitionGroup,
													transitionName: 'fade',
													transitionAppear: !0,
													transitionAppearTimeout: 220,
													transitionEnterTimeout: 220,
													transitionLeaveTimeout: 220,
												},
												e.createElement(
													'div',
													{
														key: 'widget-button',
														className: O.a.WidgetButtonContainer,
													},
													e.createElement(E.a, {
														className: O.a.WidgetButton,
														iconType: n ? 'DISMISS' : void 0,
														onClick: r,
													})
												),
												n
											)
										)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(C.propTypes = {
				children: _.PropTypes.node,
				onResize: _.PropTypes.func,
				onClick: _.PropTypes.func,
			}),
				(t.a = C);
		}.call(this, n(0)));
	},
	295: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(200),
				m = n.n(f),
				b = n(221),
				g = n(124),
				h = n.n(g),
				v = n(445),
				E = n.n(v),
				y = n(488),
				O = n.n(y),
				C = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.handleResize = function(e) {
								var t = e.width,
									n = e.height;
								r.props.onResize && r.props.onResize({ width: t, height: n });
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'shouldComponentUpdate',
								value: function(e, t) {
									return E()(this, e, t);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.children,
										r = t.onClick;
									return e.createElement(
										m.a,
										{
											onMeasure: this.handleResize,
											whitelist: ['width', 'height'],
										},
										e.createElement(
											'div',
											{ className: O.a.Container },
											e.createElement(
												h.a,
												{
													className: O.a.Transition,
													style: { width: '100%' },
													transitionName: 'fade',
													transitionAppear: !0,
													transitionAppearTimeout: 220,
													transitionEnterTimeout: 220,
													transitionLeaveTimeout: 220,
												},
												n
											),
											e.createElement(b.a, {
												ariaMessage: this.props.ariaMessage,
												className: O.a.WidgetButton,
												iconType: n ? 'DISMISS' : void 0,
												onClick: r,
											})
										)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(C.propTypes = {
				children: _.PropTypes.node,
				onResize: _.PropTypes.func,
				onClick: _.PropTypes.func,
				ariaMessage: _.PropTypes.string,
			}),
				(t.a = C);
		}.call(this, n(0)));
	},
	296: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return c;
		}),
			n.d(t, 'a', function() {
				return u;
			}),
			n.d(t, 'c', function() {
				return l;
			});
		var r = n(899),
			a = n(23),
			o = n(18),
			i = n(6),
			s = n(107),
			c = function(e) {
				return function(t, n) {
					var r = a.a + '/attachments?' + Object(o.c)({ id: e }),
						c = Object(o.b)(r, { method: 'GET', headers: Object(i.d)(n()) });
					return t({
						types: [s.b, s.c, s.a],
						promise: c,
						metadata: { ids: e },
					});
				};
			},
			u = function() {
				return function(e) {
					return e({
						type: s.d,
						error: { responseData: { message: 'AttachmentSizeException' } },
					});
				};
			},
			l = function(e, t) {
				return function(n, c) {
					var u = new FormData();
					u.append('conversationId', e), u.append('file', t);
					var l = a.a + '/attachments',
						d = Object(o.b)(l, {
							method: 'POST',
							headers: Object(i.d)(c()),
							contentType: 'multipart/form-data',
							body: u,
						});
					return n({
						types: [s.e, s.f, s.d],
						promise: d,
						metadata: { localId: Object(r.a)(), conversationId: e, file: t },
					});
				};
			};
	},
	297: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return l;
		}),
			n.d(t, 'b', function() {
				return f;
			});
		var r,
			a = n(8),
			o = n.n(a),
			i = n(3),
			s = n(48),
			c = n(52),
			u = n(57);
		function l(e) {
			var t = e.payload;
			return t.authorType !== s.a.USER
				? null
				: { agentId: t.authorId, lastActivityAt: t.createdAt };
		}
		var d = Object(i.Map)(
				((r = {}),
				o()(r, c.b, Object(i.Set)([u.a, u.e, u.b])),
				o()(r, c.d, Object(i.Set)([u.e, u.b])),
				o()(r, c.e, Object(i.Set)([u.b])),
				r)
			),
			p = Object(i.Map)(o()({}, c.e, Object(i.Set)([c.i]))),
			_ = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: Object(i.List)();
				if (e.size <= 1) return !1;
				var t = e.first(),
					n = e.slice(1);
				if ('Read' === t.get('viewerRecipientStatus')) return !1;
				var r = t.get('type'),
					a = d.get(r, Object(i.Set)()),
					o = p.get(r, Object(i.Set)());
				return !!n.find(function(e) {
					var t = e.get('type');
					return (
						o.contains(t) ||
						('CONVERSATION_EVENT' === t &&
							a.has(e.getIn(['conversationEvent', 'type'])))
					);
				});
			};
		function f(e) {
			return e
				.map(function(e) {
					var t = e.get('messages').sortBy(function(e) {
						return e.get('createdAt');
					});
					return e.set('messages', t);
				})
				.map(function(e) {
					var t = e.get('messages');
					if (_(t)) {
						var n = i.List.of(
							t.first().set('viewerRecipientStatus', 'Read')
						).concat(t.slice(1));
						return e.set('messages', n);
					}
					return e;
				});
		}
	},
	298: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		});
		var r = (function(e) {
			return '@@widget/rating/' + e;
		})('RATE_CONVERSATION');
	},
	30: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return i;
		}),
			n.d(t, 'c', function() {
				return s;
			}),
			n.d(t, 'd', function() {
				return c;
			}),
			n.d(t, 'b', function() {
				return u;
			}),
			n.d(t, 'e', function() {
				return l;
			}),
			n.d(t, 'f', function() {
				return d;
			}),
			n.d(t, 'g', function() {
				return p;
			}),
			n.d(t, 'i', function() {
				return _;
			}),
			n.d(t, 'j', function() {
				return f;
			}),
			n.d(t, 'h', function() {
				return m;
			}),
			n.d(t, 'l', function() {
				return b;
			}),
			n.d(t, 'k', function() {
				return g;
			});
		var r = n(73),
			a = n.n(r),
			o = function(e) {
				return '@@widget/socket/' + e;
			},
			i = o('AUTHENTICATE'),
			s = o('AUTHENTICATE_PENDING'),
			c = o('AUTHENTICATE_SUCCESS'),
			u = o('AUTHENTICATE_FAILURE'),
			l = o('CONNECT'),
			d = o('DISCONNECT'),
			p = o('JOIN_CHANNEL'),
			_ = o('JOIN_CHANNEL_PENDING'),
			f = o('JOIN_CHANNEL_SUCCESS'),
			m = o('JOIN_CHANNEL_FAILURE'),
			b = a()({ PRESENCE: 'PRESENCE', MESSAGES: 'MESSAGES' }),
			g = a()({
				USER: 'USER',
				ORG_PUBLIC: 'ORG_PUBLIC',
				ORG_PRIVATE: 'ORG_PRIVATE',
			});
	},
	300: function(e, t, n) {
		'use strict';
		var r = n(2),
			a = n.n(r),
			o = n(12),
			i = n.n(o),
			s = n(0),
			c = n.n(s),
			u = n(40),
			l = n.n(u),
			d = n(17),
			p = n(6),
			_ = n(957),
			f = n.n(_),
			m = function(e) {
				var t = e.version,
					r = e.color,
					o = e.className,
					s = e.type,
					u = void 0 === s ? 'circle' : s,
					d = e.style;
				return c.a.createElement(
					'div',
					{
						className: i()(f.a.BotAvatar, o, { circle: 'circle' === u }),
						style: a()({ color: r }, d),
					},
					c.a.createElement(l.a, { src: n(1616)('./bot' + t + '.svg') })
				);
			};
		m.propTypes = {
			color: s.PropTypes.string.isRequired,
			className: s.PropTypes.string,
			style: s.PropTypes.object,
			type: s.PropTypes.oneOf(['circle', 'rect']),
			version: s.PropTypes.number.isRequired,
		};
		t.a = Object(d.connect)(function(e) {
			return { version: Object(p.e)(e) };
		})(m);
	},
	31: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return a;
		}),
			n.d(t, 'c', function() {
				return o;
			}),
			n.d(t, 'b', function() {
				return i;
			}),
			n.d(t, 'a', function() {
				return s;
			}),
			n.d(t, 'e', function() {
				return c;
			});
		var r = function(e) {
				return '@@metrics/' + e;
			},
			a = r('TRACK_IMPRESSION'),
			o = r('TRACK_CLICK'),
			i = r('STORE_WIDGET_INIT_TIME'),
			s = r('BULK_SEND_METRIC'),
			c = {
				CONVERSATION_COMPOSER: 'conversation-composer',
				TAKEOVER: 'takeover',
				WELCOME_MESSAGE_COMPOSER: 'welcome-message-composer',
				AWAY_MESSAGE_COMPOSER: 'away-message-composer',
				NEW_CONVERSATION_EMAIL_CAPTURE: 'new-conversation-email-capture',
				NEW_CONVERSATION_AWAY_COMPOSER: 'new-conversation-away-composer',
				NEW_CONVERSATION_COMPOSER: 'new-conversation-composer',
				MESSAGE_CALLOUT_BOT: 'message-callout-bot',
				MESSAGE_CALLOUT_USER: 'message-callout-user',
				SLIDER_CALLOUT: 'slider-callout',
				SLIDER_EXPANDED: 'slider-expanded',
				CONVERSATION_LIST: 'conversation-list',
				CONVERSATION_LIST_EMPTY: 'conversation-list-empty',
				EMAIL_CAPTURE_UNSUBMITTED: 'email-capture-unsubmitted',
				EMAIL_CAPTURE_SUBMITTED: 'email-capture-submitted',
				CONSENT_MODAL: 'consent-modal',
				SCHEDULING_CARD: 'scheduling-card',
			};
	},
	316: function(e, t, n) {
		e.exports = {
			fullWidth: '_260JxFRVlO8nvMgwlq0zEL',
			MessageBody: 'XnctIpXq756HWNS1GLwPT',
			'MessageBody--left': '_2toCY614f8S_5Lg3RAl613',
			'MessageBody--right': '_32rZvM63nnZZRBScmIZIjJ',
		};
	},
	317: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return o;
		}),
			n.d(t, 'a', function() {
				return i;
			});
		var r = n(5),
			a = n(367),
			o = Object(r.b)(a.a),
			i = Object(r.b)(a.b);
	},
	318: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return r;
		}),
			n.d(t, 'a', function() {
				return a;
			});
		var r = 'ConversationUI.SET_OVERRIDES',
			a = 'ConversationUI.SET_CAMPAIGN_MESSAGE';
	},
	319: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return a;
		}),
			n.d(t, 'a', function() {
				return o;
			});
		var r = n(3),
			a = Object(r.Record)({
				userId: void 0,
				userIpAddress: void 0,
				sessionToken: void 0,
				socket: void 0,
				authenticateStatus: void 0,
				channels: Object(r.Map)(),
			}),
			o = Object(r.Record)({ channel: void 0, onMessageSubject: void 0 });
	},
	32: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return o;
		}),
			n.d(t, 'c', function() {
				return i;
			}),
			n.d(t, 'd', function() {
				return s;
			}),
			n.d(t, 'a', function() {
				return c;
			});
		var r = n(85),
			a = n.n(r),
			o = function() {
				return a.a && /Android|iOS|Windows Phone/i.test(a.a.os.family);
			},
			i = function() {
				return a.a && /iOS/i.test(a.a.os.family);
			},
			s = function() {
				return screen.width < 768;
			},
			c = function() {
				return a.a && /iOS|OS X/i.test(a.a.os.family);
			};
	},
	323: function(e, t, n) {
		e.exports = {
			Slider: '_2d_Bp-Kt5gkBPBdwssn49b',
			DismissButton: '_6eWTYUKsxoA_IdO5RL7zQ',
			Content: '_1QMEkp0zgBS93G6kHWmAHJ',
			FlexContentWrapper: 'l82_D_KImuLA5zRjJBNjH',
			DismissButtonWrapper: 'mTzHPSKdhS7SRFrqMCAlW',
		};
	},
	324: function(e, t, n) {
		e.exports = {
			CalloutTail: '_2IOZNDmRPpIkWq7_LHNMMH',
			Callout: '_2Am0IsT9lH_Ptdj-CW2uiy',
			hasClickHandler: '_1w6YXZ6Lh2aJD2goJRtLx3',
			hasTail: '_2hJjohH-EqiCHgHG2iPxnD',
			Content: '_2fl3RiMFMzxYgTM_TjTg8I',
		};
	},
	325: function(e, t, n) {
		e.exports = {
			Wrapper: 'AsmHNMwa8V6JFxwzpR6dG',
			SliderLayout: '_3GvcBFnnOqEvAbpxb4K9_',
			WidgetButton: 'j8lkf_ta2sl2WMvjiqiaK',
			Content: '-zOcMNdFsi7uCebRFihg7',
			UnreadCountBadgeWrapper: '_2zlCNz6GWncyQ9b6a9KhmX',
		};
	},
	326: function(e, t, n) {
		e.exports = {
			Form: '_1RZF2oOoMSrHbqfyfJycCL',
			Body: '_1KRtdPbS_KRGx5MzxXrHJY',
			Input: '_1XHHWJuwaCBjEeVyO_8ivL',
			Title: '_1p-B9iMcG2bC1ObqDZi2p8',
			SubmitButton: '_3M5mTrdRQcrgoxTsoKAXTL',
		};
	},
	328: function(e, t, n) {
		e.exports = {
			ComposerMenu: 'I2Y_Gw71BZf3YTJx23Iu2',
			ComposerMenuItem: '_3S9isv8S9Biq6Z_VIUdDgW',
			Attachment: '_28Z4Rplsugcrb8Zz8n36Ix',
			EmojiIcon: '_2JwaxVSnbRscs1uFN1uSnk',
			ComposerMenuItemActive: '_28uG9Lj5itx52NpBHEPpWR',
		};
	},
	34: function(e, t, n) {
		'use strict';
		var r = null;
		r = n(260);
		var a = {
			info: function() {
				if (window.__DRIFTT_DEBUG__) {
					var e = Array.prototype.slice.call(arguments);
					return e.unshift('Drift - '), console.info.apply(console, e);
				}
			},
			log: function() {
				if (window.__DRIFTT_DEBUG__) {
					var e = Array.prototype.slice.call(arguments);
					return e.unshift('Drift - '), console.log.apply(console, e);
				}
			},
			warn: function() {
				if (window.__DRIFTT_DEBUG__) {
					var e = Array.prototype.slice.call(arguments);
					return e.unshift('Drift - '), console.warn.apply(console, e);
				}
			},
			error: function(e, t) {
				return (
					null == t && (t = {}),
					(function(e, t) {
						if (
							(null == t && (t = {}),
							(null != r ? r.isSetup() : void 0) &&
								!window.Raven &&
								!window.RavenConfig)
						)
							r.captureException(e, t);
					})(e, t),
					console.error('Drift - ', e)
				);
			},
		};
		t.a = a;
	},
	359: function(e, t) {
		e.exports =
			'<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path d="M9.502 8.5l7.29 7.29c.277.278.277.727 0 1.003-.137.138-.32.207-.5.207s-.362-.07-.5-.207L8.5 9.503l-7.29 7.29c-.14.138-.32.207-.5.207-.183 0-.364-.07-.502-.207-.277-.276-.277-.725 0-1.002l7.29-7.29-7.29-7.29C-.07.932-.07.483.208.206c.277-.276.725-.276 1 0L8.5 7.497l7.29-7.29c.277-.276.725-.276 1.002 0 .277.277.277.726 0 1.002L9.502 8.5z" fill-rule="evenodd"></path></svg>';
	},
	36: function(e, t, n) {
		'use strict';
		var r,
			a,
			o = n(8),
			i = n.n(o),
			s = n(105),
			c = n(73),
			u = n.n(c)()({
				buttonOffset: '24px',
				buttonDimension: '52px',
				buttonContainerDimension: '62px',
				minimizedHeight: '76px',
				minimizedWithPreviewWidth: '360px',
				minimizedWithExpandedPreviewWidth: '384px',
				minimizedWithExpandedPreviewHeight: '100%',
				buttonRecentMessageWidth: '288px',
				buttonRecentMessageHeight: '64px',
				buttonNPSHeight: '176px',
				buttonNPSWidth: '304px',
				sidebarWidth: '360px',
				sidebarHeight: '100%',
				sidebarHalfHeight: '80%',
				sidebarHalfHeightWidth: '400px',
				sliderMaxWidth: '456px',
				sliderMaxHeight: '33vh',
			});
		n.d(t, 'i', function() {
			return _;
		}),
			n.d(t, 'n', function() {
				return m;
			}),
			n.d(t, 'j', function() {
				return g;
			}),
			n.d(t, 'k', function() {
				return v;
			}),
			n.d(t, 'q', function() {
				return y;
			}),
			n.d(t, 'r', function() {
				return C;
			}),
			n.d(t, 'f', function() {
				return I;
			}),
			n.d(t, 'g', function() {
				return P;
			}),
			n.d(t, 'h', function() {
				return S;
			}),
			n.d(t, 'l', function() {
				return w;
			}),
			n.d(t, 'e', function() {
				return R;
			}),
			n.d(t, 'm', function() {
				return N;
			}),
			n.d(t, 'p', function() {
				return U;
			}),
			n.d(t, 'a', function() {
				return W;
			}),
			n.d(t, 'b', function() {
				return F;
			}),
			n.d(t, 'c', function() {
				return K;
			}),
			n.d(t, 'd', function() {
				return z;
			}),
			n.d(t, 'o', function() {
				return V;
			});
		var l = {
				default: {
					display: 'block',
					position: 'fixed',
					top: 'auto',
					left: 'auto',
					bottom: 0,
					right: 0,
					width: 0,
					height: 0,
					visibility: 'visible',
					border: 'none',
					'z-index': 2147483647,
					'max-height': '100vh',
					'max-width': '100vw',
					transition: 'none',
					background: 'none transparent',
					opacity: 1,
				},
			},
			d = {
				default: {
					display: 'block',
					width: '100%',
					height: '100%',
					visibility: 'visible',
					border: 'none',
					'z-index': 2147483647,
					transition: 'none',
					background: 'none transparent',
					opacity: 1,
					position: 'unset',
				},
			},
			p = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
				return Object(s.a)({}, t, e);
			},
			_ = 'hidden',
			f = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: 0,
					right: 0,
					width: 0,
					height: 0,
					visibility: 'hidden',
				},
			}),
			m = 'slider',
			b = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: u.sliderMaxWidth,
					height: u.sliderMaxHeight,
					'max-width': '100%',
					border: 'none',
				},
				mobile: { bottom: 0, right: 0, width: '100%', 'max-width': '320px' },
			}),
			g = 'sidebar-closed',
			h = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: u.minimizedHeight,
					height: u.minimizedHeight,
					border: 'none',
				},
				mobile: { bottom: 0, right: 0 },
			}),
			v = 'sidebar-closed-with-preview',
			E = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: u.minimizedWithExpandedPreviewWidth,
					height: u.minimizedHeight,
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			y = 'sidebar-closed-with-welcome-message',
			O = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: u.minimizedHeight,
					height: u.minimizedHeight,
				},
				mobile: { bottom: 0, right: 0 },
			}),
			C = 'sidebar-closed-with-welcome-message-expanded',
			T = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: '420px',
					height: u.minimizedHeight,
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			I = 'sidebar-closed-with-away-message',
			M = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: u.minimizedHeight,
					height: u.minimizedHeight,
				},
				mobile: { bottom: 0, right: 0 },
			}),
			P = 'sidebar-closed-with-away-message-expanded',
			A = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: u.buttonOffset,
					right: u.buttonOffset,
					width: '420px',
					height: u.minimizedHeight,
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			S = 'sidebar-closed-with-email-capture-slider',
			D = p({
				default: {
					top: 'auto',
					left: 'auto',
					bottom: 0,
					right: 0,
					width: '450px',
					height: 0,
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			w = 'sidebar-opened',
			k = p({
				default: {
					bottom: 0,
					right: 0,
					top: 0,
					left: 'auto',
					width: u.sidebarWidth,
					height: '100%',
				},
				mobile: { width: '100%' },
			}),
			R = 'embedded-messenger',
			j = (function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
				return Object(s.a)({}, t, e);
			})({ default: {}, mobile: { width: '100%' } }),
			N = 'sidebar-opened-half-height',
			B = p({
				default: {
					bottom: 0,
					right: 0,
					width: u.sidebarHalfHeightWidth,
					height: u.sidebarHalfHeight,
				},
				mobile: { width: '100%', height: '100%' },
			}),
			U = 'iframe-takeover',
			L = p({
				default: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					width: '100%',
					height: '100%',
				},
			}),
			W = 'activation-takeover',
			x = p({
				default: {
					top: 0,
					right: 0,
					'background-color': 'rgba(255, 255, 255, 0.8)',
					width: '100%',
					height: '100%',
				},
			}),
			F = 'consent-takeover-large',
			H = p({
				default: {
					bottom: 0,
					right: 0,
					top: 0,
					left: 'auto',
					width: u.sidebarWidth,
					height: '100%',
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			K = 'consent-takeover-large-half-height',
			q = p({
				default: {
					bottom: 0,
					right: 0,
					left: 'auto',
					width: u.sidebarWidth,
					height: u.sidebarHalfHeight,
				},
				mobile: { bottom: 0, right: 0, width: '100%', height: '100%' },
			}),
			z = 'consent-takeover-small',
			G = p({
				default: {
					bottom: 0,
					right: 0,
					left: 'auto',
					width: '430px',
					height: '50%',
					'min-height': '300px',
				},
				mobile: { bottom: 0, right: 0, width: '100%' },
			}),
			V = ((r = {}),
			i()(r, _, f),
			i()(r, U, L),
			i()(r, w, k),
			i()(r, N, B),
			i()(r, R, j),
			i()(r, y, O),
			i()(r, C, T),
			i()(r, I, M),
			i()(r, P, A),
			i()(r, m, b),
			i()(r, g, h),
			i()(r, v, E),
			i()(r, W, x),
			i()(r, F, H),
			i()(r, K, q),
			i()(r, z, G),
			i()(r, S, D),
			r);
		(a = {}),
			i()(a, _, 'drift-widget-hidden'),
			i()(a, U, 'drift-widget-takeover'),
			i()(a, w, 'drift-widget-sidebar'),
			i()(a, N, 'drift-widget-sidebar-half-height'),
			i()(a, R, 'drift-widget-embedded-messenger'),
			i()(a, y, 'drift-widget-welcome-online'),
			i()(a, C, 'drift-widget-welcome-expanded-online'),
			i()(a, I, 'drift-widget-welcome-away'),
			i()(a, P, 'drift-widget-welcome-expanded-away'),
			i()(a, m, 'drift-widget-slider'),
			i()(a, g, 'drift-widget-nps'),
			i()(a, v, 'drift-widget-nps-preview'),
			i()(a, W, 'drift-widget-activation-takeover'),
			i()(a, F, 'drift-widget-consent-large-takeover'),
			i()(a, K, 'drift-widget-consent-large-half-height-takeover'),
			i()(a, z, 'drift-widget-consent-small-takeover'),
			i()(a, S, 'drift-widget-email-capture');
	},
	360: function(e, t, n) {
		'use strict';
		n.d(t, 'd', function() {
			return p;
		}),
			n.d(t, 'a', function() {
				return _;
			}),
			n.d(t, 'c', function() {
				return f;
			}),
			n.d(t, 'b', function() {
				return m;
			});
		var r = n(5),
			a = n(6),
			o = n(18),
			i = n(23),
			s = n(4),
			c = n(203),
			u = (s.D, s.F, s.E, s.G),
			l = s.I,
			d = s.H,
			p = function(e) {
				return function(t, n) {
					var r = { method: 'GET', headers: Object(a.d)(n()) },
						s = i.e + '/organizations/' + e + '/users',
						c = Object(o.b)(
							s +
								'?' +
								Object(o.c)({
									avatar_fm: 'png',
									avatar_fit: 'max',
									avatar_w: '200',
									avatar_h: '200',
									status: ['ENABLED', 'INVITED', 'ARCHIVED'],
								}),
							r
						);
					return t({ types: [u, l, d], promise: c });
				};
			},
			_ = Object(r.b)(c.a),
			f = Object(r.b)(c.c),
			m = Object(r.b)(c.b);
	},
	366: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return c;
		}),
			n.d(t, 'b', function() {
				return u;
			}),
			n.d(t, 'c', function() {
				return l;
			});
		var r = n(9),
			a = n(16),
			o = n(185),
			i = n(36),
			s = function(e) {
				return e.WelcomeMessage;
			},
			c = function(e) {
				return s(e).msgFromFirstPopup;
			},
			u = function(e) {
				return s(e).triggeredFromWidgetAPI;
			},
			l = Object(r.createSelector)(
				a.o,
				function(e) {
					return e.UI.iframeSize;
				},
				function(e) {
					return s(e).active;
				},
				function(e) {
					return s(e).hideOnStartup;
				},
				a.i,
				o.e,
				a.p,
				function(e, t, n, r, a, o, s) {
					return e && a && !o && !n && !r && t === i.q && !s;
				}
			);
	},
	367: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'b', function() {
				return a;
			});
		var r = 'TRACKING_DONE',
			a = 'TRACK_EVENT';
	},
	368: function(e, t, n) {
		e.exports = {
			IdentifyCard: '_2NhAQGASt95mN0N9Uw1wZl',
			'IdentifyCard__email-icon': '_2CjOtLocbghUNr5tUXWtmr',
			IdentifyForm: '_1Gtju_Jekx_uqFMJML29ZR',
			IdentifyForm__inputwrapper: 'u5Y-cGMB2OcQ8eo_68yAh',
			IdentifyForm__input: 'gFknHIaOy5Etwu2ZPk6ht',
			IdentifyForm__submit: '_1pX4AgCirrd3ONwyrdTrtK',
			IdentifyForm__label: '_1xnWH0aQJFEhmp915uALhK',
			CompletionView: 'NdzlnN8ACoaRODFkjM_W3',
		};
	},
	374: function(e, t, n) {
		e.exports = {
			TransitionGroup: '_1bqdrLsJSZt9zFJWH9azSb',
			Container: '_30us5AS2WYfPMXSfbW1-5E',
			WidgetButtonContainer: 'BPdyB1KwQdtQbyI2ko2_3',
			WidgetButton: '_1xDOR96s4kIDrWxVqKC3m0',
		};
	},
	375: function(e, t, n) {
		e.exports = {
			WidgetButton: '_2So8ItJQ9P6IqaCUlCO-2f',
			clickable: '_3S6qOFxcrgO0yM2f9_l6JZ',
			avatar: '_1gnOKXWkiErWpwukGzkFAe',
			svgIcon: '_1ZSagdd_Wbj_ZKw0RkZfOn',
		};
	},
	376: function(e, t, n) {
		'use strict';
		var r = n(15);
		t.a = Object(r.h)({
			notLikely: {
				id: 'app.campaign.nps.notLikely',
				description: 'Low probability of a recommendation',
				defaultMessage: 'not likely',
			},
			veryLikely: {
				id: 'app.campaign.nps.veryLikely',
				description: 'High probability of a recommendation',
				defaultMessage: 'very likely',
			},
			feedbackApproval: {
				id: 'app.campaign.nps.feedbackApproval',
				description: 'Thanks the user for submitting feedback',
				defaultMessage: 'Thank you for your feedback!',
			},
			detractorFeedbackApproval: {
				id: 'app.campaign.nps.detractorFeedbackApproval',
				description:
					'Extra approval message displayed to users who submit low ratings',
				defaultMessage: 'It will help us improve your experience.',
			},
		});
	},
	377: function(e, t, n) {
		e.exports = {
			Messenger__container: '_26BwwWs7l4ACBKqmd9q6C8',
			Messenger: '_1Ye1l5vAr1Tazvm0Te2dMq',
			MessengerEmbedded: '_3r70s4tnbMNGN-csA73Pzc',
			MessengerHalfHeight: 'Rz2_VPzS2obCn6hMWoDC',
		};
	},
	378: function(e, t, n) {
		e.exports = {
			AgentActiveStatus: '_3k58VuQSoZOr-U3kBFY2iC',
			ActivityIndicatorBadge: '_3YLsRq_Fnu44zP0-WwRmrd',
			'ActivityIndicatorBadge--online': 'C_XwFZBu2Rw5YvjEesQyW',
			'ActivityIndicatorBadge--offline': '_3bXu_W896glgB9_fgOy26j',
		};
	},
	379: function(e, t, n) {
		e.exports = {
			AgentActiveStatus: '_37hFI_u8PFoRpSs6Q_vgxR',
			ActivityIndicatorBadge: '_31TIzmDvvmDrZg8EOTHP3y',
			'ActivityIndicatorBadge--online': 'mEXm__nW0AApYkQYQ--L5',
			'ActivityIndicatorBadge--offline': '_3kgxNpYJsb6GjfIDiw-BMp',
		};
	},
	380: function(e, t, n) {
		e.exports = {
			'message-group': '_3iSRjLN2dsY4MaA37q42qF',
			'message-delivery-status': 'fIVIDqWTfBZxDK66r2FkY',
			'message-sender-name': 'g5tb3lvyuppRWZTfTorn_',
			'message-sent-time': 'OrIEn7LQioRJcGljQcWxS',
			'message-received-time': '_3SLe3BQPvLES7-geI_b_yD',
		};
	},
	381: function(e, t, n) {
		e.exports = {
			Branding: '_3RTrQ3IDR23myw-Pih9iTm',
			Drift: '_2DnvFT67sVeWYiwhwHqUWR',
			BoltIcon: '_2-Nax0W7eNYVpRQlg-K1Ud',
		};
	},
	4: function(e, t, n) {
		'use strict';
		n.d(t, 'Ea', function() {
			return r;
		}),
			n.d(t, 'A', function() {
				return a;
			}),
			n.d(t, 'C', function() {
				return o;
			}),
			n.d(t, 'B', function() {
				return i;
			}),
			n.d(t, 'K', function() {
				return s;
			}),
			n.d(t, 'L', function() {
				return c;
			}),
			n.d(t, 'J', function() {
				return u;
			}),
			n.d(t, 'Oa', function() {
				return l;
			}),
			n.d(t, 'D', function() {
				return d;
			}),
			n.d(t, 'F', function() {
				return p;
			}),
			n.d(t, 'E', function() {
				return _;
			}),
			n.d(t, 'T', function() {
				return f;
			}),
			n.d(t, 'S', function() {
				return m;
			}),
			n.d(t, 'V', function() {
				return b;
			}),
			n.d(t, 'U', function() {
				return g;
			}),
			n.d(t, 'Ra', function() {
				return h;
			}),
			n.d(t, 'G', function() {
				return v;
			}),
			n.d(t, 'I', function() {
				return E;
			}),
			n.d(t, 'H', function() {
				return y;
			}),
			n.d(t, 'a', function() {
				return O;
			}),
			n.d(t, 'c', function() {
				return C;
			}),
			n.d(t, 'b', function() {
				return T;
			}),
			n.d(t, 'Q', function() {
				return I;
			}),
			n.d(t, 'R', function() {
				return M;
			}),
			n.d(t, 'P', function() {
				return P;
			}),
			n.d(t, 'N', function() {
				return A;
			}),
			n.d(t, 'O', function() {
				return S;
			}),
			n.d(t, 'M', function() {
				return D;
			}),
			n.d(t, 'Xa', function() {
				return w;
			}),
			n.d(t, 'x', function() {
				return k;
			}),
			n.d(t, 'y', function() {
				return R;
			}),
			n.d(t, 'w', function() {
				return j;
			}),
			n.d(t, 'Na', function() {
				return N;
			}),
			n.d(t, 'e', function() {
				return B;
			}),
			n.d(t, 'f', function() {
				return U;
			}),
			n.d(t, 'Ta', function() {
				return L;
			}),
			n.d(t, 'Aa', function() {
				return W;
			}),
			n.d(t, 'z', function() {
				return x;
			}),
			n.d(t, 'g', function() {
				return F;
			}),
			n.d(t, 'Da', function() {
				return H;
			}),
			n.d(t, 'Ca', function() {
				return K;
			}),
			n.d(t, 'Ba', function() {
				return q;
			}),
			n.d(t, 'Sa', function() {
				return z;
			}),
			n.d(t, 'La', function() {
				return G;
			}),
			n.d(t, 'd', function() {
				return V;
			}),
			n.d(t, 'Ga', function() {
				return Y;
			}),
			n.d(t, 'h', function() {
				return Z;
			}),
			n.d(t, 'Ia', function() {
				return J;
			}),
			n.d(t, 'Ja', function() {
				return Q;
			}),
			n.d(t, 'Ka', function() {
				return X;
			}),
			n.d(t, 'Qa', function() {
				return $;
			}),
			n.d(t, 'Ha', function() {
				return ee;
			}),
			n.d(t, 'Ma', function() {
				return te;
			}),
			n.d(t, 'Fa', function() {
				return ne;
			}),
			n.d(t, 'W', function() {
				return re;
			}),
			n.d(t, 'Z', function() {
				return ae;
			}),
			n.d(t, 'Y', function() {
				return oe;
			}),
			n.d(t, 'X', function() {
				return ie;
			}),
			n.d(t, 'Pa', function() {
				return se;
			}),
			n.d(t, 'Ua', function() {
				return ce;
			}),
			n.d(t, 'Wa', function() {
				return ue;
			}),
			n.d(t, 'Va', function() {
				return le;
			}),
			n.d(t, 'p', function() {
				return de;
			}),
			n.d(t, 'n', function() {
				return pe;
			}),
			n.d(t, 'o', function() {
				return _e;
			}),
			n.d(t, 'm', function() {
				return fe;
			}),
			n.d(t, 'i', function() {
				return me;
			}),
			n.d(t, 'r', function() {
				return be;
			}),
			n.d(t, 's', function() {
				return ge;
			}),
			n.d(t, 'q', function() {
				return he;
			}),
			n.d(t, 'k', function() {
				return ve;
			}),
			n.d(t, 'l', function() {
				return Ee;
			}),
			n.d(t, 'j', function() {
				return ye;
			}),
			n.d(t, 'v', function() {
				return Oe;
			}),
			n.d(t, 'u', function() {
				return Ce;
			}),
			n.d(t, 't', function() {
				return Te;
			});
		var r = 'INITIALIZE_API',
			a = 'FETCH_BOOTSTRAP',
			o = 'FETCH_BOOTSTRAP_SUCCESS',
			i = 'FETCH_BOOTSTRAP_FAIL',
			s = 'FETCH_EMBED_CONFIGURATION_PENDING',
			c = 'FETCH_EMBED_CONFIGURATION_SUCCESS',
			u = 'FETCH_EMBED_CONFIGURATION_FAILURE',
			l = 'OVERRIDE_EMBED_CONFIGURATION',
			d = 'FETCH_DRIFTT_ORG',
			p = 'FETCH_DRIFTT_ORG_SUCCESS',
			_ = 'FETCH_DRIFTT_ORG_FAIL',
			f = 'GO_TO_NEW_CONVERSATION',
			m = 'GO_TO_LIST',
			b = 'GO_TO_SELECTED_CONVERSATION',
			g = 'GO_TO_OFFLINE_FEEDBACK',
			h = 'SET_SIDERBAR_VIEW',
			v = 'FETCH_DRIFTT_USERS',
			E = 'FETCH_DRIFTT_USERS_SUCCESS',
			y = 'FETCH_DRIFTT_USERS_FAIL',
			O = 'AUTHENTICATE_END_USER',
			C = 'AUTHENTICATE_END_USER_SUCCESS',
			T = 'AUTHENTICATE_END_USER_FAIL',
			I = 'FETCH_SEGMENT_MEMBERSHIP_PENDING',
			M = 'FETCH_SEGMENT_MEMBERSHIP_SUCCESS',
			P = 'FETCH_SEGMENT_MEMBERSHIP_FAILURE',
			A = 'FETCH_GEOLOCATION_PENDING',
			S = 'FETCH_GEOLOCATION_SUCCESS',
			D = 'FETCH_GEOLOCATION_FAILURE',
			w = 'UPDATE_ACTIVE_CAMPAIGNS',
			k = 'ENROLL_IN_CAMPAIGN_PENDING',
			R = 'ENROLL_IN_CAMPAIGN_SUCCESS',
			j = 'ENROLL_IN_CAMPAIGN_FAILURE',
			N = 'OPEN_SIDEBAR',
			B = 'CLOSE_SIDEBAR',
			U = 'CLOSE_SIDEBAR_WITH_TWEEN',
			L = 'SHOW_WIDGET',
			W = 'HIDE_WIDGET',
			x = 'EXPAND_WIDGET',
			F = 'COLLAPSE_WIDGET',
			H = 'IFRAME_RESIZE_DONE',
			K = 'IFRAME_RESIZE',
			q = 'IFRAME_OVERRIDE_SIZE',
			z = 'SHOW_TYPING_INDICATOR_BUTTON_ICON',
			G = 'OPEN_ACTIVATION_TAKEOVER',
			V = 'CLOSE_ACTIVATION_TAKEOVER',
			Y = 'LIST',
			Z = 'CONVERSATION',
			J = 'NEW_CONVERSATION',
			Q = 'NEW_CONVERSATION_AWAY',
			X = 'NEW_CONVERSATION_CAMPAIGN',
			$ = 'SET_IDENTIFIED_CONVERSATION',
			ee = 'LOADING',
			te = 'OPEN_CONSENT_TAKEOVER',
			ne = 'LAZY_CAMPAIGN_EVALUATION',
			re = 'HANDLE_POST_MESSAGE',
			ae = 'HANDLE_WINDOW_SCROLL',
			oe = 'HANDLE_WINDOW_MOUSE_LEAVE',
			ie = 'HANDLE_WINDOW_MOUSE_ENTER',
			se = 'REFRESH_TARGETING',
			ce = 'SUBMIT_OFFLINE_FEEDBACK',
			ue = 'SUBMIT_OFFLINE_FEEDBACK_SUCCESS',
			le = 'SUBMIT_OFFLINE_FEEDBACK_FAIL',
			de = 'DRIFT_ENQUEUE_MESSAGE',
			pe = 'DRIFT_CREATE_MESSAGE_PENDING',
			_e = 'DRIFT_CREATE_MESSAGE_SUCCESS',
			fe = 'DRIFT_CREATE_MESSAGE_FAILURE',
			me = 'DRIFT_BUTTON_CLICKED',
			be = 'DRIFT_SEND_READ_RECEIPT_PENDING',
			ge = 'DRIFT_SEND_READ_RECEIPT_SUCCESS',
			he = 'DRIFT_SEND_READ_RECEIPT_FAILURE',
			ve = 'DRIFT_CREATE_CONVERSATION_PENDING',
			Ee = 'DRIFT_CREATE_CONVERSATION_SUCCESS',
			ye = 'DRIFT_CREATE_CONVERSATION_FAILURE',
			Oe = 'EMAIL_CAPTURE_SLIDER_SUBMITTED',
			Ce = 'EMAIL_CAPTURE_SLIDER_DISMISSED',
			Te = 'EMAIL_CAPTURE_SLIDER_CLEARED';
	},
	42: function(e, t, n) {
		'use strict';
		n.d(t, 'f', function() {
			return z;
		}),
			n.d(t, 'h', function() {
				return G;
			}),
			n.d(t, 'i', function() {
				return V;
			}),
			n.d(t, 'g', function() {
				return Z;
			}),
			n.d(t, 'c', function() {
				return J;
			}),
			n.d(t, 'd', function() {
				return Q;
			}),
			n.d(t, 'b', function() {
				return X;
			}),
			n.d(t, 'a', function() {
				return $;
			});
		var r = n(50),
			a = n.n(r),
			o = n(8),
			i = n.n(o),
			s = n(2),
			c = n.n(s),
			u = n(64),
			l = n.n(u),
			d = n(103),
			p = n.n(d),
			_ = n(3),
			f = n.n(_),
			m = n(125),
			b = n(18),
			g = n(23),
			h = n(6),
			v = n(51),
			E = n(185),
			y = n(16),
			O = n(25),
			C = n(66),
			T = n(76),
			I = n(206),
			M = n(26),
			P = n(19),
			A = n(52),
			S = n(4),
			D = n(29),
			w = S.p,
			k = S.n,
			R = S.o,
			j = S.m,
			N = S.k,
			B = S.l,
			U = S.j,
			L = S.h,
			W = S.r,
			x = Object(_.Map)({
				conversationId: -1,
				conversationsById: Object(_.Map)(),
				conversationFetchStatusById: Object(_.Map)(),
				messageIdsByConversationId: Object(_.Map)(),
				messagesById: Object(_.Map)(),
				messageStatusById: Object(_.Map)(),
				receivedMessageIds: Object(_.Set)(),
				heldForDelayMessageIds: Object(_.Set)(),
				enrolledCampaignsById: Object(_.Map)(),
				unreadCampaignIds: Object(_.Set)(),
				conversationsFetchStatus: void 0,
				campaignConversationsFetchStatus: void 0,
				campaignEnrollmentFetchStatus: void 0,
				mostRecentlyReadCampaignConversationId: void 0,
				conversationIdToPermaclose: Object(_.Map)(),
			}),
			F = function(e) {
				var t = e.id,
					n = e.type,
					r = void 0 === n ? A.c : n,
					a = e.createdAt,
					o = void 0 === a ? Date.now() : a,
					i = e.local,
					s = void 0 !== i && i;
				return f.a
					.Map()
					.set('id', t)
					.set('type', r)
					.set('participants', f.a.List())
					.set('createdAt', o)
					.set('local', s)
					.set('unreadMessages', 0)
					.set('participantIds', f.a.List());
			},
			H = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = t
						.map(function(e) {
							return (function(e) {
								return f.a.Map({
									id: e.get('id'),
									unread: 'Read' !== e.get('viewerRecipientStatus'),
									statusByUser: f.a.Map(),
								});
							})(e);
						})
						.reduce(function(e, t) {
							var n = !e.getIn([t.get('id'), 'unread'], !0) || !t.get('unread');
							return e.set(t.get('id'), t.set('unread', !n));
						}, e.get('messageStatusById'));
				return (e = e.mergeIn(['messageStatusById'], r)), (e = K(e, t, n));
			},
			K = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = (t = t.map(function(e) {
						return e.set('local', e.get('local', !1));
					})).reduce(function(e, t) {
						return e.set(t.get('id'), t);
					}, f.a.Map()),
					a = t.reduce(function(e, t) {
						var n = t.get('conversationId'),
							r = t.get('id');
						if (e.has(n)) {
							var a = t.getIn(['attributes', 'widgetGuid']),
								o = e.get(n);
							return t.get('id') !== a && o.has(a)
								? e.set(n, o.delete(a).add(t.get('id')))
								: e.set(n, o.add(t.get('id')));
						}
						return e.set(n, f.a.Set([r]));
					}, e.get('messageIdsByConversationId'));
				e = (e = e.mergeIn(['messagesById'], r)).mergeIn(
					['messageIdsByConversationId'],
					a
				);
				var o = t
					.filter(function(e) {
						return e.get('conversationId');
					})
					.filter(function(t) {
						return !e.hasIn(['conversationsById', t.get('conversationId')]);
					})
					.groupBy(function(e) {
						return e.get('conversationId');
					})
					.mapEntries(function(e) {
						var t = p()(e, 2),
							n = t[0],
							r = t[1].get(0);
						return [
							n,
							F({
								id: r.get('conversationId'),
								type: r.get('type'),
								createdAt: r.get('createdAt'),
							}),
						];
					});
				if (((e = e.mergeIn(['conversationsById'], o)), n)) {
					var i = t
						.filter(function(e) {
							return e.get('conversationId');
						})
						.groupBy(function(e) {
							return e.get('conversationId');
						})
						.keySeq()
						.reduce(function(e, t) {
							return e.set(t, !0);
						}, e.get('conversationFetchStatusById'));
					e = e.mergeIn(['conversationFetchStatusById'], i);
				}
				return e;
			},
			q = function(e, t) {
				var n = t.map(function(e) {
						var t = e.getIn(['attributes', 'widgetGuid']);
						return e
							.set('createdAt', e.get('localCreatedAt', Date.now()))
							.set('conversationId', e.get('conversationId', t))
							.set('id', t)
							.set('local', !0)
							.setIn(['attributes', 'preview'], e.get('body', ''));
					}),
					r = n.reduce(function(e, t) {
						return e.set(t.get('id'), t);
					}, f.a.Map()),
					a = n.groupBy(function(e) {
						return e.get('conversationId');
					}),
					o = a.reduce(function(e, t, n) {
						var r = t
							.map(function(e) {
								return e.get('id');
							})
							.toSet()
							.union(e.get(n, f.a.Set()));
						return e.set(n, r);
					}, e.get('messageIdsByConversationId')),
					i = a
						.filter(function(e, t) {
							return t === e.getIn([0, 'id']);
						})
						.map(function(e, t) {
							return F({
								id: t,
								type: e.getIn([0, 'type']),
								createdAt: e.getIn([0, 'createdAt']),
								local: !0,
							});
						})
						.reduce(function(e, t) {
							return e.set(t.get('id'), t);
						}, f.a.Map());
				return (e = (e = (e = e.mergeIn(['messagesById'], r)).mergeIn(
					['messageIdsByConversationId'],
					o
				)).mergeIn(['conversationsById'], i));
			},
			z = function(e) {
				return function(t) {
					t(V(e)), t(Object(D.goToSelectedConversation)());
				};
			},
			G = function(e) {
				return function(t) {
					t(M.F(e.get('id')));
				};
			},
			V = function(e) {
				return function(t) {
					t(M.j({ conversationId: e })),
						t({ type: P.N, payload: { id: e } }),
						t(Y(e)),
						t(Object(D.setSidebarView)(L));
				};
			},
			Y = function(e) {
				return function(t, n) {
					var r = n();
					if (r.Message.getIn(['conversationFetchStatusById', e], !1))
						return l.a.resolve();
					var a = r.Message.getIn(['conversationsById', e]);
					a && !a.get('local') && t(M.l({ conversationId: e }));
				};
			},
			Z = function(e) {
				return function(t, n) {
					n()
						.Message.getIn(['messageIdsByConversationId', e], f.a.List())
						.forEach(function(e) {
							t(M.q({ messageId: e }));
						});
				};
			},
			J = function(e) {
				var t = e.conversationId,
					n = e.body,
					r = e.type,
					o = void 0 === r ? A.c : r,
					s = e.attachments,
					u = void 0 === s ? [] : s,
					l = e.attributes,
					d = void 0 === l ? {} : l,
					p = e.createdAt,
					_ = void 0 === p ? Date.now() : p,
					f = e.localId,
					v = void 0 === f ? Object(m.a)() : f;
				return function(e, r) {
					var s,
						l = r(),
						p = Object(h.j)(l),
						f = Object(I.a)(l),
						m = Object(I.c)(l),
						P = Object(y.j)(l),
						S = Object(T.g)(l, { conversationId: t }),
						D = Object(y.d)(l) || Object(C.b)(l),
						N = Object(C.a)(l),
						B = {
							conversationId: t,
							body: n,
							type: o,
							authorId: p.id,
							authorType: p.type,
							attributes: c()(
								((s = {}),
								i()(s, A.f, !Object(y.i)(l)),
								i()(s, 'clientTimestamp', Date.now()),
								i()(s, 'widgetGuid', v),
								i()(s, 'integrations', l.Integration),
								i()(s, 'autoAssigneeId', D),
								i()(s, 'accountId', N),
								s),
								d
							),
							context: Object(h.u)(l),
							localCreatedAt: _,
							attachments: u,
						};
					if (
						(f && f.id && (B.attributes.targetingRuleId = f.id),
						m &&
							m.length > 0 &&
							(B.attributes.targetingRuleIds = m.map(function(e) {
								return e.id;
							})),
						S && !B.attributes.questionId && (B.attributes.questionId = S),
						P && (B.attributes.profileMode = !0),
						Object(O.g)(l, t) <= 2 &&
							(B.attributes.campaignTargetingAuditLog = Object(E.b)(l)),
						l.Message.getIn(['conversationsById', t, 'local']))
					)
						return e({ type: w, metadata: { conversationId: t, message: B } });
					var U = {
							method: 'POST',
							headers: Object(b.a)([Object(b.e)(), Object(h.d)(l)]),
							body: a()(B),
						},
						L = g.d + '/conversations/' + t + '/messages';
					return (
						e(M.g(B)),
						e({
							types: [k, R, j],
							promise: Object(b.b)(L, U),
							metadata: { conversationId: t, message: B },
						})
					);
				};
			},
			Q = function(e) {
				return function(t) {
					t(M.B(e));
				};
			},
			X = function(e) {
				var t = e.body,
					n = e.attachments,
					r = void 0 === n ? [] : n,
					o = e.attributes,
					s = void 0 === o ? {} : o,
					u = e.inboxId,
					l = e.options,
					d = void 0 === l ? { goToConversation: !0 } : l,
					p = e.to,
					_ = void 0 === p ? null : p,
					f = e.status;
				return function(e, n) {
					var o,
						l = n(),
						p = Object(h.j)(l),
						O = null !== _ ? { to: _ } : Object(T.b)(l),
						P = Object(y.j)(l),
						S = Object(I.a)(l),
						D = Object(I.c)(l),
						w = Object(y.d)(l) || Object(C.b)(l),
						k = Object(C.a)(l),
						R = Object(E.b)(l),
						j = c()(
							{
								body: t,
								inboxId: u || Object(v.e)(l),
								type: A.c,
								authorId: p.id,
								authorType: p.type,
								attributes: c()(
									((o = {}),
									i()(o, A.f, !Object(y.i)(l)),
									i()(o, 'clientTimestamp', Date.now()),
									i()(o, 'widgetGuid', Object(m.a)()),
									i()(o, 'integrations', l.Integration),
									i()(o, 'autoAssigneeId', w),
									i()(o, 'accountId', k),
									i()(o, 'campaignTargetingAuditLog', R),
									o),
									Object(v.c)(l),
									s
								),
							},
							O,
							{ context: Object(h.u)(l), attachments: r, status: f }
						);
					S && S.id && (j.attributes.targetingRuleId = S.id),
						D &&
							D.length > 0 &&
							(j.attributes.targetingRuleIds = D.map(function(e) {
								return e.id;
							})),
						P && (j.attributes.profileMode = !0);
					var L = {
							method: 'POST',
							headers: Object(b.a)([Object(b.e)(), Object(h.d)(l)]),
							body: a()(j),
						},
						W = g.d + '/messages';
					return (
						e(M.b(j)),
						e({
							types: [N, B, U],
							promise: Object(b.b)(W, L),
							metadata: {
								localConversationId: j.attributes.widgetGuid,
								message: j,
								options: d,
							},
						})
					);
				};
			},
			$ = function(e) {
				return function(t) {
					t(M.z(e));
				};
			};
		t.e = function() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
				t = arguments[1];
			switch (t.type) {
				case P.N:
					return e.set('conversationId', t.payload.id);
				case w:
					return q(e, Object(_.fromJS)([t.metadata.message]));
				case k:
				case N:
					return q(e, Object(_.fromJS)([t.metadata.message]));
				case R:
				case B:
				case P.e:
					return H(e, Object(_.fromJS)([t.payload]), !0);
				case P.A:
					return (function(e, t) {
						var n = e.get('receivedMessageIds');
						return (
							(e = e.set('receivedMessageIds', n.add(t.id))),
							H(e, Object(_.fromJS)([t]))
						);
					})(e, t.payload);
				case W:
					return (function(e, t) {
						return e.setIn(['messageStatusById', t, 'unread'], !1);
					})(e, t.metadata.messageId);
				case P.i:
					return (function(e, t) {
						var n = t.flatMap(function(e) {
								return e.get('messages');
							}),
							r = t
								.map(function(e) {
									return e
										.get('conversation')
										.set('unreadMessages', e.get('unreadMessages'));
								})
								.reduce(function(e, t) {
									return e.set(t.get('id'), t);
								}, f.a.Map()),
							a = r.reduce(function(e, t) {
								return e.set(t.get('id'), e.get(t.get('id'), !1));
							}, e.get('conversationFetchStatusById'));
						return (e = (e = (e = (e = H(e, n)).mergeIn(
							['conversationsById'],
							r
						)).mergeIn(['conversationFetchStatusById'], a)).set(
							'campaignConversationsFetchStatus',
							'success'
						));
					})(e, t.payload);
				case P.o:
					return (function(e, t) {
						var n = t
								.flatMap(function(e) {
									return [e.get('lastMessage'), e.get('lastAgentMessage')];
								})
								.filter(function(e) {
									return !!e;
								}),
							r = t
								.map(function(e) {
									return e
										.get('conversation')
										.set('unreadMessages', e.get('unreadMessages'));
								})
								.reduce(function(e, t) {
									return e.set(t.get('id'), t);
								}, f.a.Map()),
							a = r.reduce(function(e, t) {
								return e.set(t.get('id'), e.get(t.get('id'), !1));
							}, e.get('conversationFetchStatusById'));
						return (
							(e = (e = (e = e.mergeIn(['conversationsById'], r)).mergeIn(
								['conversationFetchStatusById'],
								a
							)).set('conversationsFetchStatus', 'success')),
							(e = H(e, n))
						);
					})(e, t.payload);
				case P.l:
					return e
						.set('enrolledCampaignsById', t.payload)
						.set('campaignEnrollmentFetchStatus', 'success');
				case P.n:
					return e.set('conversationsFetchStatus', 'failure');
				case P.h:
					return e.set('campaignConversationsFetchStatus', 'failure');
				case P.k:
					return e.set('campaignEnrollmentFetchStatus', 'failure');
				case P.s:
					return H(e, t.payload, !0);
				case P.R:
					return e.set('unreadCampaignIds', t.payload);
				case P.Q:
					return e.set('mostRecentlyReadCampaignConversationId', t.payload);
				case P.P:
					return e.set('mostRecentlyReadCampaignConversationId', void 0);
				case P.z:
					return e.setIn(
						['conversationIdToPermaclose', t.payload.conversationId],
						t.payload.isPermaclosed
					);
				case P.t:
					return e.set(
						'heldForDelayMessageIds',
						e.get('heldForDelayMessageIds').add(t.payload.messageId)
					);
				case P.u:
					return e.set(
						'heldForDelayMessageIds',
						e.get('heldForDelayMessageIds').delete(t.payload.messageId)
					);
				default:
					return e;
			}
		};
	},
	423: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return l;
			});
			var r = n(0),
				a = n(442),
				o = n(101),
				i = n(12),
				s = n.n(i),
				c = n(91),
				u = n.n(c),
				l = function(t) {
					var n = t.thankYouHeadline,
						r = t.thankYouMessageNode,
						i = t.avatarUrl,
						s = t.showBranding;
					return e.createElement(
						'div',
						null,
						e.createElement(
							'div',
							{ className: 'flex-center', style: { paddingBottom: '1rem' } },
							e.createElement(
								'div',
								{ className: 'flex-column flex-1' },
								e.createElement(
									'div',
									{ className: u.a.EmailCaptureSlider__Bubble__Title },
									n
								),
								e.createElement(
									'div',
									{ className: u.a.EmailCaptureSlider__Bubble__Copy },
									r
								)
							),
							i ? e.createElement(a.a, { avatarUrl: i }) : null
						),
						e.createElement(
							'div',
							{ className: 'flex-center' },
							s
								? e.createElement(o.a, {
										utmContent: 'email-capture-submitted',
								  })
								: null
						)
					);
				};
			(l.propTypes = {
				thankYouHeadline: r.PropTypes.string,
				thankYouMessageNode: r.PropTypes.node,
				avatarUrl: r.PropTypes.string,
				showBranding: r.PropTypes.bool,
			}),
				(l.defaultProps = { showBranding: !0 }),
				(l.displayName = 'EmailCaptureSliderSubmittedInner');
			var d = function(t) {
				return e.createElement(
					'div',
					{ className: s()('flex-1', u.a.EmailCaptureSlider__Bubble) },
					e.createElement(l, t)
				);
			};
			(d.propTypes = {
				thankYouHeadline: r.PropTypes.string,
				thankYouMessageNode: r.PropTypes.node,
				avatarUrl: r.PropTypes.string,
				showBranding: r.PropTypes.bool,
				branding: r.PropTypes.element,
			}),
				(d.defaultProps = { showBranding: !0 }),
				(d.displayName = 'EmailCaptureSliderSubmitted');
		}.call(this, n(0)));
	},
	424: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return S;
			});
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(124),
				m = n.n(f),
				b = n(101),
				g = n(299),
				h = n.n(g),
				v = n(442),
				E = n(857),
				y = n(12),
				O = n.n(y),
				C = n(91),
				T = n.n(C),
				I = n(230),
				M = function(t) {
					var n = t.showBranding,
						r = t.organizationName;
					return e.createElement(
						'div',
						{
							className: O()(
								'flex-center',
								'dsg-Regular',
								'color-gray-dark',
								T.a.EmailCaptureSlider__Bubble__Branding
							),
						},
						n
							? e.createElement(b.a, {
									utmContent: 'email-capture-unsubmitted',
							  })
							: e.createElement('span', null, r)
					);
				};
			(M.propTypes = {
				showBranding: _.PropTypes.bool,
				branding: _.PropTypes.element,
				organizationName: _.PropTypes.string,
				isAppleDevice: _.PropTypes.bool,
			}),
				(M.displayName = 'BrandingCopyOrOrgName');
			var P = function(t) {
				var n = t.isAppleDevice;
				return e.createElement(
					'div',
					{
						className: O()(
							'flex-center',
							'dsg-Regular',
							'color-gray-dark',
							T.a.EmailCaptureSlider__Bubble__EnterPrompt
						),
					},
					e.createElement(E.a, { isAppleDevice: n })
				);
			};
			(P.propTypes = { isAppleDevice: _.PropTypes.bool }),
				(P.displayName = 'EnterPrompt');
			var A = (function(t) {
				function n() {
					var e, t, r, o;
					i()(this, n);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(t = r = l()(
							this,
							(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
						)),
						(r.state = { input: '', errorOverride: !1 }),
						(r.getValueLink = function() {
							return { value: r.state.value, requestChange: r.handleChange };
						}),
						(r.handleChange = function(e) {
							r.setState({ input: e, errorOverride: !1 }),
								r.props.onChange && r.props.onChange(e);
						}),
						(r.handleSubmit = function(e) {
							e.preventDefault(),
								r.isValid()
									? r.props.onSubmit && r.props.onSubmit(r.state.input)
									: r.setState({ errorOverride: !0 });
						}),
						(r.isValid = function() {
							return Object(I.isEmail)(r.state.input);
						}),
						(o = t),
						l()(r, o)
					);
				}
				return (
					p()(n, t),
					c()(n, [
						{
							key: 'render',
							value: function() {
								var t = this.props,
									n = t.showBranding,
									r = t.organizationName,
									a = t.isAppleDevice,
									o = this.state.input.length > 0;
								return e.createElement(
									'div',
									{
										className: O()(
											T.a.EmailCaptureSlider__Bubble__Composer,
											'flex-column'
										),
									},
									e.createElement(
										'form',
										{ onSubmit: this.handleSubmit },
										e.createElement(h.a, {
											placeholder: 'name@example.com',
											size: 'small',
											errorOverride: this.state.errorOverride,
											isValid: this.isValid(),
											valueLink: this.getValueLink(),
										})
									),
									e.createElement(
										'div',
										{ className: T.a.EmailCaptureSlider__Bubble__Footer },
										e.createElement(
											m.a,
											{
												transitionName: 'footer',
												transitionEnterTimeout: 250,
												transitionLeaveTimeout: 250,
											},
											o
												? null
												: e.createElement(M, {
														showBranding: n,
														organizationName: r,
												  }),
											o ? e.createElement(P, { isAppleDevice: a }) : null
										)
									)
								);
							},
						},
					]),
					n
				);
			})(_.Component);
			(A.propTypes = {
				showBranding: _.PropTypes.bool,
				branding: _.PropTypes.element,
				organizationName: _.PropTypes.string,
				isAppleDevice: _.PropTypes.bool,
				onChange: _.PropTypes.func,
				onSubmit: _.PropTypes.func,
			}),
				(A.displayName = 'Composer');
			var S = function(t) {
				var n = t.title,
					r = t.bodyNode,
					a = t.avatarUrl,
					o = t.showBranding,
					i = t.organizationName,
					s = t.isAppleDevice,
					c = t.onSubmit;
				return e.createElement(
					'div',
					null,
					e.createElement(
						'div',
						{ className: 'flex-center' },
						e.createElement(
							'div',
							{ className: 'flex-column flex-1' },
							e.createElement(
								'div',
								{ className: T.a.EmailCaptureSlider__Bubble__Title },
								n
							),
							e.createElement(
								'div',
								{ className: T.a.EmailCaptureSlider__Bubble__Copy },
								r
							)
						),
						a ? e.createElement(v.a, { avatarUrl: a }) : null
					),
					e.createElement(A, {
						onSubmit: c,
						showBranding: o,
						organizationName: i,
						isAppleDevice: s,
					})
				);
			};
			(S.propTypes = {
				title: _.PropTypes.string,
				bodyNode: _.PropTypes.node,
				avatarUrl: _.PropTypes.string,
				showBranding: _.PropTypes.bool,
				organizationName: _.PropTypes.string,
				isAppleDevice: _.PropTypes.bool,
				onChange: _.PropTypes.func,
				onSubmit: _.PropTypes.func,
			}),
				(S.defaultProps = { showBranding: !0, isAppleDevice: !1 }),
				(S.displayName = 'EmailCaptureSliderUnsubmittedInner');
			var D = function(t) {
				return e.createElement(
					'div',
					{ className: O()('flex-1', T.a.EmailCaptureSlider__Bubble) },
					e.createElement(S, t)
				);
			};
			(D.propTypes = {
				title: _.PropTypes.string,
				bodyNode: _.PropTypes.node,
				avatarUrl: _.PropTypes.string,
				showBranding: _.PropTypes.bool,
				organizationName: _.PropTypes.string,
				isAppleDevice: _.PropTypes.bool,
				onChange: _.PropTypes.func,
				onSubmit: _.PropTypes.func,
			}),
				(D.defaultProps = { showBranding: !0, isAppleDevice: !1 }),
				(D.displayName = 'EmailCaptureSliderUnsubmitted');
		}.call(this, n(0)));
	},
	425: function(e, t, n) {
		e.exports = n.p + 'static/images/4a3c1161b81f906ccb7e41df6b548811.svg';
	},
	426: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		});
		var r = n(5),
			a = n(298),
			o = Object(r.b)(a.a);
	},
	427: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(15),
				u = n(41),
				l = n(299),
				d = n.n(l),
				p = n(151);
			n(1498), n(1496);
			var _ = n(368),
				f = function(t) {
					var n = t.activeBorderColor,
						r = t.error,
						o = t.valid,
						s = i()(t, ['activeBorderColor', 'error', 'valid']);
					return e.createElement(
						d.a,
						a()({}, s, {
							className: _.IdentifyForm__input,
							wrapperProps: { style: { borderColor: n } },
							size: 'small',
							type: 'email',
							error: !o,
							isValid: o,
							invalidLabel: r,
							required: 'true',
						})
					);
				};
			f.propTypes = {
				error: s.PropTypes.string,
				valid: s.PropTypes.bool.isRequired,
				activeBorderColor: s.PropTypes.string.isRequired,
			};
			var m = function(t) {
				var n = t.activeColor,
					r = t.backgroundColor,
					o = t.color,
					i = t.fields.email,
					s = t.handleSubmit,
					l = t.submitting;
				return e.createElement(
					'form',
					{ className: _.IdentifyForm, onSubmit: s },
					e.createElement(
						'label',
						{ className: _.IdentifyForm__label },
						e.createElement(c.b, u.a.emailAddressInputLabel)
					),
					e.createElement(
						'div',
						{ className: _.IdentifyForm__inputwrapper },
						e.createElement(
							f,
							a()({ activeBorderColor: n }, i, { disabled: l })
						),
						e.createElement(
							'button',
							{
								className: _.IdentifyForm__submit,
								type: 'submit',
								style: { backgroundColor: r, color: o },
								disabled: l,
							},
							l
								? e.createElement(p.a, { size: 'small', color: o })
								: e.createElement(c.b, u.a.submitButtonLabel)
						)
					)
				);
			};
			(m.propTypes = {
				backgroundColor: s.PropTypes.string.isRequired,
				color: s.PropTypes.string.isRequired,
				activeColor: s.PropTypes.string.isRequired,
				fields: s.PropTypes.shape({ email: s.PropTypes.object.isRequired }),
				handleSubmit: s.PropTypes.func.isRequired,
				submitting: s.PropTypes.bool.isRequired,
			}),
				(t.a = m);
		}.call(this, n(0)));
	},
	436: function(e, t, n) {
		'use strict';
		var r = n(5),
			a = (function(e) {
				return '@@widget/conversationRating/' + e;
			})('SUBMIT_RATING'),
			o = Object(r.b)(a),
			i = n(39),
			s = (n(60), n(120), n(42)),
			c = Object(i.combineEpics)(function(e) {
				return e
					.ofType(a)
					.pluck('payload')
					.map(function(e) {
						return Object(
							s.d
						)({ conversationId: e.conversationId, body: '', attributes: { conversationRating: { ratingValue: e.ratingValue, ratingText: e.ratingText, ratingPrompt: e.ratingPrompt } } });
					});
			});
		n.d(t, 'b', function() {
			return o;
		}),
			n.d(t, 'a', function() {
				return c;
			});
	},
	44: function(e, t, n) {
		e.exports = {
			'button-reset': '_2FYNTm1he93yxXavAmGSuD',
			BaseButton: '_3wbrM6B-FEHqjoJgQ3sZ2M _2FYNTm1he93yxXavAmGSuD',
			BaseButtonLabel: '_1BJ1zCiuMmvEBx24-GjHo7',
			Container: 'KNiqR1D4pHbWvb1gcOaxw',
			SchedulingFlowCard: '_3CuSuV0l0jA1xjAwUL65A8',
			CardHeader: 'eTx_QRq78PccaIR9Cf-CH',
			CardHeaderTitle: '_1hJ46q0Bxqjirp1JeKAEZH',
			CalendarCheckIcon: 'pclK60G2ZEULbZxLJj9P-',
			CardContent: 'Z3Cm-ndvHJf4tJS8hNN5f',
			SectionHeader: 'wFa8vHxi8N8VcoWv4y6gB',
			SectionHeaderMenu: '_3DvtU_sonkCxCrqGWxhxsC',
			BackButton: '_1R5tjbilpsecEwNiBB_gNO _2FYNTm1he93yxXavAmGSuD',
			BackButtonIcon: '_26xa8GPdZLVhbAwpNi6Ciy',
			SectionHeading: '_3AleUkoeabC9s-0qvJN1c6',
			AgentInfo: '_388HevgIVi69q-9pJ6XPIp',
			AgentName: '_2fbBVSwfOn2UQExPYIvdfy',
			OptionLabel: '_2HLst1pamWQ_9Iaa-Ve1Vl',
			DateOption: '_3KlCUOWsR464QIwle5RsUB',
			DateOptionWeekday: '_1mWK2j4t7h7u5ikG6bPSbE',
			DateOptionDate: '_24PWN1UsHY7MBI3hbyQPGl',
			DateOptionRadio: '_3kRO6QbyyeB3YspHif6Fty',
			DateOptionsList: 'EY32GEl3vcoJNsyyguYfR',
			TimeOption: '_2MjbhMh2ot65gxFxE1FgE8',
			TimeOptionLabel: '_1EwXaNT1EKVEQ0i_CiAToO',
			TimeOptionsList: '_2gHjjqQFSEIfXRaZSpirI-',
			FilterableTZList: '_2B1rSiN-dw6hMJCsIWOwhA',
			TZSearch: '_3VGuxLe8fZyUe5l4LIIUGG',
			TZOption: '_17PQ9PktK7AqkFknSkS_By',
			TZRegion: '_1zjuNo7eyVUlVweKqMvnbX',
			TZSearchInput: '_116jV85r_49oOQ_qKQogUx',
			TZRadio: '_2x4Ooy3t2zkV0yOA28Uiqm',
			AppointmentInfo: '_1GfHwsqwsANjckn37HXiVM',
			ConfirmButton: '_3JnI9mq0rR9B2qf-gTdsIk _2FYNTm1he93yxXavAmGSuD',
			ConfirmButtonLabel: '_2KPlMhPrZXytUF9ebHZ8m9',
			LinkButton: '_1fTRNlhVdsIjJmcNEUJcGZ _2FYNTm1he93yxXavAmGSuD',
			BaseOption: '_3CIlGanzxWLpVgvoyKWocv',
			BaseOptionLabel: '_2V6pNWZzvW4whjwx38l_8R',
			BaseOptionRadioInput: '_2ekK1dav7U2y3JZHx85nca',
			ThemedBaseOption: 'g1OWcwCWtPoJAUrQq49bP',
			LoadingMessage: '_1lL-WeQqg3DcdWo5Pgomdv',
			ErrorMessage: '_1F_PE7aNWV7PvOwulDcCLK',
			ErrorMessageCopy: '-W7I80NIsu3pEzupF1don',
			ErrorRetryButton: '_16ZNqjZpsJQj1UoWw2Gnss',
			PaginationControls: '_1JVVGfXZfGQWjvCoYloTV9',
		};
	},
	441: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return s;
		}),
			n.d(t, 'a', function() {
				return c;
			});
		var r = n(2),
			a = n.n(r),
			o = n(4),
			i = { hasInitialized: !1 },
			s = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
				switch (arguments[1].type) {
					case o.Ea:
						return a()({}, e, { hasInitialized: !0 });
					default:
						return e;
				}
			},
			c = function() {
				return { type: o.Ea };
			};
	},
	442: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(91),
				o = n.n(a),
				i = function(t) {
					var n = t.avatarUrl;
					return e.createElement('div', {
						className: o.a.EmailCaptureSlider__Bubble__Avatar,
						style: { backgroundImage: 'url(' + n + ')' },
					});
				};
			(i.propTypes = { avatarUrl: r.PropTypes.string.isRequired }), (t.a = i);
		}.call(this, n(0)));
	},
	443: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return l;
			});
			var r = n(2),
				a = n.n(r),
				o = n(0),
				i = n(124),
				s = n.n(i),
				c = n(268),
				u = n.n(c),
				l = function(t) {
					return e.createElement(
						s.a,
						a()({}, t, {
							transitionName: {
								enter: u.a.sliderTransitionEnter,
								enterActive: u.a.sliderTransitionEnterActive,
								appear: u.a.sliderTransitionAppear,
								appearActive: u.a.sliderTransitionAppearActive,
								leave: u.a.sliderTransitionLeave,
								leaveActive: u.a.sliderTransitionLeaveActive,
							},
							transitionAppear: !0,
							transitionAppearTimeout: 250,
							transitionEnterTimeout: 250,
							transitionLeaveTimeout: 200,
						})
					);
				};
			l.propTypes = { children: o.PropTypes.node };
		}.call(this, n(0)));
	},
	444: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(200),
				m = n.n(f),
				b = n(446),
				g = n(221),
				h = n(89),
				v = n(325),
				E = n.n(v),
				y = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.handleMeasure = function(e) {
								var t = e.width,
									n = e.height;
								r.props.onResize && r.props.onResize({ width: t, height: n });
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									return e.createElement(
										m.a,
										{
											onMeasure: this.handleMeasure,
											whitelist: ['width', 'height'],
										},
										this.props.children
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			y.propTypes = {
				onResize: _.PropTypes.func.isRequired,
				children: _.PropTypes.node.isRequired,
			};
			var O = (function(t) {
				function n() {
					return (
						i()(this, n),
						l()(this, (n.__proto__ || a()(n)).apply(this, arguments))
					);
				}
				return (
					p()(n, t),
					c()(n, [
						{
							key: 'render',
							value: function() {
								var t = this.props,
									n = t.children,
									r = t.avatarUrl,
									a = t.bot,
									o = t.onWidgetClick,
									i = t.iconType,
									s = t.onResize;
								return e.createElement(
									'div',
									{ className: E.a.Wrapper },
									e.createElement(
										y,
										{ onResize: s },
										e.createElement(
											'div',
											{ className: E.a.SliderLayout },
											e.createElement(g.a, {
												className: E.a.WidgetButton,
												onClick: o,
												iconType: i,
												avatarUrl: r,
												bot: a,
											}),
											e.createElement(
												'div',
												{ className: E.a.UnreadCountBadgeWrapper },
												e.createElement(b.a, null)
											),
											e.createElement('div', { className: E.a.Content }, n)
										)
									)
								);
							},
						},
					]),
					n
				);
			})(_.Component);
			(O.propTypes = {
				children: _.PropTypes.node,
				avatarUrl: _.PropTypes.string,
				bot: _.PropTypes.bool,
				onWidgetClick: _.PropTypes.func,
				onResize: _.PropTypes.func,
				iconType: _.PropTypes.oneOf([h.a.ANNOUNCEMENT, h.a.NPS, h.a.CHAT]),
			}),
				(t.a = O);
		}.call(this, n(0)));
	},
	446: function(e, t, n) {
		'use strict';
		var r = n(17),
			a = n(456),
			o = n(25);
		t.a = Object(r.connect)(function(e) {
			return { count: Object(o.l)(e) };
		})(a.a);
	},
	447: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(17),
				a = n(151),
				o = n(27),
				i = n.n(o),
				s = n(157),
				c = n.n(s),
				u = n(47),
				l = n(257),
				d = n(199),
				p = n(906),
				_ = n(28),
				f = n(48),
				m = e.createElement(
					d.a,
					{ position: 'left' },
					e.createElement(a.a, {
						style: { minHeight: '1.375rem' },
						color: 'gray',
					})
				);
			t.a = i()(
				Object(r.connect)(function(e, t) {
					return {
						drifttUser: Object(p.a)(e, t),
						isEmbeddedMessenger: Object(_.g)(e),
						onComponentDidMount: t.onComponentDidMount
							? t.onComponentDidMount
							: null,
					};
				}),
				Object(u.a)(['backgroundColor']),
				c()({ authorType: f.a.USER, isFromViewer: !1, children: m })
			)(l.a);
		}.call(this, n(0)));
	},
	448: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return s;
		}),
			n.d(t, 'a', function() {
				return c;
			});
		var r = n(9),
			a = n(3),
			o = n(48),
			i = function(e) {
				return (function(e) {
					return e.Typing;
				})(e).typingUsersByConversationId;
			},
			s = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: function(e, t) {
								var n = t.conversationId;
								return i(e).get(n, Object(a.Set)());
						  };
				return Object(r.createSelector)(e, function(e) {
					return e
						.map(function(e) {
							return { type: e.first(), id: e.last() };
						})
						.filter(function(e) {
							return e.type === o.a.USER;
						})
						.map(function(e) {
							return e.id;
						})
						.toArray();
				});
			},
			c = Object(r.createSelector)(i, function(e) {
				return e.reduce(function(e, t) {
					return e || !t.isEmpty();
				}, !1);
			});
	},
	449: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					8
				),
				babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
				),
				react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17),
				redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21),
				recompose_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					27
				),
				recompose_compose__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					recompose_compose__WEBPACK_IMPORTED_MODULE_8__
				),
				recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					111
				),
				recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9__
				),
				recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					229
				),
				recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10__
				),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					56
				),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					recompose_branch__WEBPACK_IMPORTED_MODULE_11__
				),
				classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_12__
				),
				_SVGButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(495),
				_ConversationTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					918
				),
				_ExperimentalHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					916
				),
				_modules_DriftUser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					223
				),
				_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(908),
				Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					25
				),
				modules_UI__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29),
				Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					16
				),
				Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					22
				),
				Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					47
				),
				utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					32
				),
				Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					28
				),
				Widget_modules_rating_selectors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					220
				),
				_style_styl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(211),
				_style_styl__WEBPACK_IMPORTED_MODULE_26___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_26__
				),
				_React = React,
				Component = _React.Component,
				component = _React.createElement,
				PropTypes = _React.PropTypes,
				ConversationListButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Go to your list of past conversations',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_26___default.a
								.HeaderActionButton,
						svgString: __webpack_require__(503),
						onClick: t,
					});
				},
				ComposeButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Start a new conversation',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_26___default.a
								.HeaderActionButton,
						onClick: t,
						svgString: __webpack_require__(614),
					});
				},
				CloseButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Close the Chat Widget',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_26___default.a
								.HeaderActionButton,
						onClick: t,
						svgString: __webpack_require__(359),
					});
				},
				Header = (function(_Component) {
					function Header() {
						var _ref4, _this;
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
							this,
							Header
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.handleComposeButtonClick = _this.handleComposeButtonClick.bind(
								_this
							)),
							(_this.handleListButtonClick = _this.handleListButtonClick.bind(
								_this
							));
						for (
							var _len = arguments.length, args = Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							args[_key] = arguments[_key];
						return (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
							this,
							(_ref4 =
								Header.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(
									Header
								)).call.apply(_ref4, [this].concat(args))
						));
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
							Header,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							Header,
							[
								{
									key: 'componentWillMount',
									value: function() {
										var e = this.props,
											t = e.lastDriftUser,
											n = e.shouldRenderAgentStatus,
											r = null != t ? t.id : void 0;
										if (null != r && n)
											return this.props.actions.fetchAgentStatus(r);
									},
								},
								{
									key: 'componentWillReceiveProps',
									value: function(e) {
										var t = e.lastDriftUser,
											n = e.shouldRenderAgentStatus,
											r = null != t ? t.id : void 0,
											a =
												(null != this.props.lastDriftUser
													? this.props.lastDriftUser.id
													: void 0) !== r;
										if (null != r && a && n)
											return this.props.actions.fetchAgentStatus(r);
									},
								},
								{
									key: 'getConversationTitle',
									value: function() {
										var e = this.props,
											t = e.organizationName,
											n = e.backgroundColor,
											r = e.lastDriftUser,
											a = e.isOnline,
											o = e.shouldRenderAgentStatus,
											i = e.currentSidebarView,
											s = e.lastAgentResponseAt;
										return [
											'NEW_CONVERSATION',
											'NEW_CONVERSATION_AWAY',
											'NEW_CONVERSATION_CAMPAIGN',
										].includes(i)
											? t
											: 'CONVERSATION' === i
											? React.createElement(
													_ConversationTitle__WEBPACK_IMPORTED_MODULE_14__.a,
													{
														driftUser: s ? r : void 0,
														orgName: t,
														backgroundColor: n,
														isOnline: a,
														shouldRenderAgentStatus: o,
													}
											  )
											: void 0;
									},
								},
								{
									key: 'handleComposeButtonClick',
									value: function() {
										return this.props.actions.goToNewConversation({
											autoFocus: !0,
										});
									},
								},
								{
									key: 'handleListButtonClick',
									value: function() {
										return this.props.actions.goToConversationList();
									},
								},
								{
									key: 'render',
									value: function() {
										var e = this.props,
											t = e.theme,
											n = e.hasWidgetHalfHeight,
											r = n ? '#' + t.backgroundColor : '#ffffff',
											a = n ? '#' + t.foregroundColor : '#9A9A9A';
										return React.createElement(
											'div',
											{
												className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(
													{
														'widget-header-mobile': Object(
															utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
														)(),
													},
													t.widgetHalfHeight
														? _style_styl__WEBPACK_IMPORTED_MODULE_26___default
																.a.MessengerHeaderHalfHeight
														: _style_styl__WEBPACK_IMPORTED_MODULE_26___default
																.a.MessengerHeader
												),
												style: { backgroundColor: r, color: a },
											},
											[
												'CONVERSATION',
												'NEW_CONVERSATION',
												'NEW_CONVERSATION_AWAY',
												'NEW_CONVERSATION_CAMPAIGN',
											].includes(this.props.currentSidebarView)
												? [
														React.createElement(
															'div',
															{
																key: 'title',
																className:
																	_style_styl__WEBPACK_IMPORTED_MODULE_26___default
																		.a.HeaderTitle,
															},
															this.getConversationTitle()
														),
														(this.props.allowNewConversations ||
															this.props.numConversations > 1) &&
															React.createElement(ConversationListButton, {
																key: 'list-button',
																onClick: this.handleListButtonClick,
															}),
												  ]
												: [
														React.createElement(
															'div',
															{
																key: 'title',
																className:
																	_style_styl__WEBPACK_IMPORTED_MODULE_26___default
																		.a.HeaderTitle,
															},
															React.createElement(
																_messages__WEBPACK_IMPORTED_MODULE_17__.a,
																null
															)
														),
														this.props.allowNewConversations &&
															React.createElement(ComposeButton, {
																key: 'compose-button',
																onClick: this.handleComposeButtonClick,
															}),
												  ],
											this.props.allowSidebarClose &&
												React.createElement(CloseButton, {
													onClick: this.props.onCloseButtonClicked,
												})
										);
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										this.propTypes = {
											onCloseButtonClicked: PropTypes.func.isRequired,
											lastDriftUser: PropTypes.object,
											shouldRenderAgentStatus: PropTypes.bool.isRequired,
											theme: PropTypes.shape({
												backgroundColor: PropTypes.string,
												foregroundColor: PropTypes.string,
												textColor: PropTypes.string,
												activeColor: PropTypes.string,
												widgetBackgroundColor: PropTypes.string,
												widgetHalfHeight: PropTypes.bool,
											}),
										};
									},
								},
							]
						),
						Header
					);
				})(Component);
			Header.initClass();
			var FloatingHeader = function(e) {
					return React.createElement('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(
							_style_styl__WEBPACK_IMPORTED_MODULE_26___default.a
								.FloatingHeader,
							babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
								{
									hypergrowthTheme: e.isHypergrowthTheme,
									mobile: Object(
										utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
									)(),
								},
								e.continuousBackgroundGradient,
								e.isEmbeddedMessenger &&
									e.isHypergrowthTheme &&
									!Object(
										utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
									)()
							)
						),
					});
				},
				makeMapStateToProps = function() {
					var e = Object(
							Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.o
						)(),
						t = Object(
							Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.q
						)();
					return function(n, r) {
						var a = Object(
								Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_20__.i
							)(n),
							o = e(n, r),
							i = t(n, r);
						return {
							currentSidebarView: n.UI.currentSidebarView,
							numConversations: Object(
								Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.c
							)(n).size,
							allowNewConversations: Object(
								Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__.c
							)(n),
							allowSidebarClose: Object(
								Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__.d
							)(n),
							organizationName: n.Bootstrap.embedConfiguration.organizationName,
							lastDriftUser: o,
							lastAgentResponseAt: i,
							isOnline: a,
							shouldRenderAgentStatus: !(null != o ? o.bot : void 0) && i > 0,
							isHypergrowthTheme: Object(
								Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__.j
							)(n),
							continuousBackgroundGradient: Object(
								Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__.c
							)(n),
							hasExperimentalHeader: Object(
								Widget_modules_rating_selectors__WEBPACK_IMPORTED_MODULE_25__.b
							)(n),
						};
					};
				},
				mapDispatchToProps = function(e) {
					return {
						actions: Object(
							redux__WEBPACK_IMPORTED_MODULE_7__.bindActionCreators
						)(
							{
								goToConversationList:
									modules_UI__WEBPACK_IMPORTED_MODULE_19__.goToConversationList,
								goToNewConversation:
									modules_UI__WEBPACK_IMPORTED_MODULE_19__.goToNewConversation,
								fetchAgentStatus:
									_modules_DriftUser__WEBPACK_IMPORTED_MODULE_16__.b,
							},
							e
						),
					};
				};
			__webpack_exports__.a = recompose_compose__WEBPACK_IMPORTED_MODULE_8___default()(
				Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(
					makeMapStateToProps,
					mapDispatchToProps
				),
				Object(Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_22__.a)([
					'backgroundColor',
					'activeColor',
				]),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default()(function(e) {
					return !e.isEmbeddedMessenger && e.hasExperimentalHeader;
				}, recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10___default()(
					_ExperimentalHeader__WEBPACK_IMPORTED_MODULE_15__.a
				)),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default()(function(e) {
					return (
						e.isEmbeddedMessenger &&
						!Object(utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d)() &&
						!e.isHypergrowthTheme
					);
				}, recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9___default.a),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default()(function(e) {
					return (
						e.isEmbeddedMessenger &&
						(Object(utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d)() ||
							e.isHypergrowthTheme)
					);
				}, recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10___default()(
					FloatingHeader
				))
			)(Header);
		}.call(this, __webpack_require__(0)));
	},
	45: function(e, t, n) {
		'use strict';
		n.d(t, 'j', function() {
			return r;
		}),
			n.d(t, 'f', function() {
				return a;
			}),
			n.d(t, 'h', function() {
				return o;
			}),
			n.d(t, 'g', function() {
				return i;
			}),
			n.d(t, 'b', function() {
				return s;
			}),
			n.d(t, 'i', function() {
				return c;
			}),
			n.d(t, 'c', function() {
				return u;
			}),
			n.d(t, 'e', function() {
				return l;
			}),
			n.d(t, 'd', function() {
				return d;
			}),
			n.d(t, 'a', function() {
				return p;
			}),
			n.d(t, 'l', function() {
				return _;
			}),
			n.d(t, 'k', function() {
				return f;
			});
		var r = 'REQUEST_IDENTIFY_LEAD',
			a = 'IDENTIFY_LEAD',
			o = 'IDENTIFY_LEAD_SUCCESS',
			i = 'IDENTIFY_LEAD_FAIL',
			s = 'EMAIL_CAPTURE_SUCCESS',
			c = 'REQUEST_IDENTIFY_END_USER',
			u = 'IDENTIFY_END_USER',
			l = 'IDENTIFY_END_USER_SUCCESS',
			d = 'IDENTIFY_END_USER_FAIL',
			p = 'BOOSTRAP_END_USER_SUCCESS',
			_ = 'UPDATE_PRIMARY_ID',
			f = 'UPDATE_AUTH_IDENTITY';
	},
	450: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		}),
			n.d(t, 'b', function() {
				return i;
			});
		var r = n(6),
			a = n(25),
			o = function(e) {
				return Object(r.p)('CONVERSATION_RATINGS')(e);
			};
		function i(e, t) {
			var n = Object(a.t)()(e, t);
			return n && n.getIn(['attributes', 'conversationRating'], !1);
		}
	},
	451: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(88),
				c = n.n(s),
				u = n(13),
				l = n.n(u),
				d = n(10),
				p = n.n(d),
				_ = n(11),
				f = n.n(_),
				m = n(7),
				b = n.n(m),
				g = n(14),
				h = n.n(g),
				v = n(0),
				E = n(17),
				y = n(21),
				O = n(3),
				C = n(27),
				T = n.n(C),
				I = n(56),
				M = n.n(I),
				P = n(111),
				A = n.n(P),
				S = n(229),
				D = n.n(S),
				w = n(257),
				k = n(931),
				R = n(929),
				j = n(924),
				N = n(922),
				B = n(921),
				U = n(919),
				L = n(844),
				W = n(48),
				x = n(47),
				F = n(6),
				H = n(28),
				K = n(183),
				q = n(22),
				z = n(42),
				G = n(76),
				V = 'https://embed.vidyard.com',
				Y = [
					'YouTube',
					'Vimeo',
					'ViewedIt',
					'Vidyard',
					'Vidyard GoVideo',
					'Wistia, Inc.',
					'GIPHY',
				];
			function Z(e) {
				var t = e.data.getPrimaryRel();
				return (
					'summary' === t ||
					('player' === t &&
						(-1 !== Y.indexOf(e.data.meta.site) ||
							(e.data.url && e.data.url.includes(V))))
				);
			}
			var J = function(e) {
					return e.getIn(['attributes', 'widgetGuid']) || e.get('id');
				},
				Q = (function(t) {
					function n() {
						var t, r, a, o;
						p()(this, n);
						for (var i = arguments.length, s = Array(i), u = 0; u < i; u++)
							s[u] = arguments[u];
						return (
							(r = a = b()(
								this,
								(t = n.__proto__ || l()(n)).call.apply(t, [this].concat(s))
							)),
							(a.handleMessageButtonClick = function(e) {
								var t = e.label;
								a.props.actions.createMessage({
									conversationId: a.props.conversationId,
									body: t,
									attributes: { buttonClicked: !0 },
								});
							}),
							(a.renderMessage = function(t) {
								var n = J(t),
									r = a.props.hrefsByMessageId
										.get(t.get('id'), Object(O.Set)())
										.map(function(e) {
											return a.props.linksByHref.get(e, new K.d.Link());
										})
										.filter(function(e) {
											return !!e && 'success' === e.status && e.data.html;
										})
										.filter(Z)
										.map(function(t) {
											return e.createElement(k.a, {
												key: 'c:' + n + ':' + t.href,
												card: t,
											});
										})
										.toArray(),
									o = e.createElement(B.a, {
										key: 'm:' + n,
										message: t,
										isStartConversationPrompt:
											a.props.isStartConversationPrompt,
										renderButtons: function() {
											return t && a.renderButtons(t);
										},
										cards: a.props.showUnfurl && r,
									});
								return a.props.showUnfurl && !a.props.isEmbeddedMessenger
									? [o].concat(c()(r))
									: [o];
							}),
							(a.renderButtons = function(t) {
								var n = a.props,
									r = n.isLastMessageGroup,
									o = n.isEmbeddedMessenger,
									i = t.getIn(['attributes', 'buttons'], Object(O.List)());
								return i.isEmpty() || !r
									? null
									: e.createElement(U.a, {
											key: 'buttons',
											buttons: i,
											onClick: a.handleMessageButtonClick,
											isEmbeddedMessenger: o,
									  });
							}),
							(a.renderAttachment = function(t, n) {
								return e.createElement(L.a, {
									key: 'a:' + n,
									attachmentId: n,
									message: t,
								});
							}),
							(o = r),
							b()(a, o)
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.messages,
										o = n.isFromViewer,
										s = n.drifttUser,
										c = n.lastAgentResponseAt,
										u = n.senders,
										l = n.isStartConversationPrompt,
										d = n.isEmbeddedMessenger,
										p = n.isAnyHeldForDelay,
										_ = i()(n, [
											'messages',
											'isFromViewer',
											'drifttUser',
											'lastAgentResponseAt',
											'senders',
											'isStartConversationPrompt',
											'isEmbeddedMessenger',
											'isAnyHeldForDelay',
										]),
										f = r.last(),
										m = f && f.get('createdAt', Date.now()),
										b = !(!f || f.get('local'));
									return e.createElement(
										'div',
										null,
										e.createElement(
											w.a,
											a()({}, _, {
												isFromViewer: o,
												drifttUser: s,
												senders: u,
												lastAgentResponseAt: c,
												createdAtTimestamp: m,
												isDelivered: b,
												isStartConversationPrompt: l,
												isEmbeddedMessenger: d,
												continuousBackgroundGradient: this.props
													.continuousBackgroundGradient,
											}),
											r.flatMap(function(e) {
												var n = t.renderMessage(e),
													r = e
														.get('attachments', Object(O.List)())
														.map(function(n) {
															return t.renderAttachment(e, n);
														});
												return O.List.of(n).concat(r);
											})
										),
										f &&
											f.get('id') &&
											e.createElement(R.a, {
												conversationId: this.props.conversationId,
												messageId: f.get('id'),
											}),
										f &&
											f.get('id') &&
											e.createElement(j.a, {
												conversationId: this.props.conversationId,
												messageId: f.get('id'),
												message: f,
											}),
										f && !d && !p && this.renderButtons(f)
									);
								},
							},
						]),
						n
					);
				})(v.Component);
			Q.propTypes = a()({}, w.a.propTypes, {
				messages: v.PropTypes.instanceOf(O.List).isRequired,
				linksByHref: v.PropTypes.instanceOf(O.Map),
				hrefsByMessageId: v.PropTypes.instanceOf(O.Map),
			});
			var X = M()(function(e) {
					return (function(e) {
						return (
							e &&
							!e.get('isPreMessage', !1) &&
							(e.getIn(['attributes', 'scheduleMeetingFlow'], !1) ||
								e.getIn(['attributes', 'offerSchedule'])) &&
							!e.getIn(['attributes', 'appointmentInfo'])
						);
					})(e.messages.first());
				}, D()(N.a)),
				$ = M()(function(e) {
					var t = e.messages;
					return (
						e.isFromViewer && !!t.getIn([0, 'attributes', 'appointmentInfo'])
					);
				}, A.a),
				ee = M()(function(e) {
					var t = e.messages;
					return (
						e.isFromViewer &&
						(function(e) {
							return (
								e &&
								!e.get('isPreMessage', !1) &&
								e.getIn(['attributes', 'startInteraction'], !1)
							);
						})(t.first())
					);
				}, A.a),
				te = M()(function(e) {
					return e.isEveryMessageHeldForDelay;
				}, A.a);
			t.a = T()(
				Object(E.connect)(
					function(e, t) {
						var n = void 0,
							r = Object(F.c)(e),
							a = t.messages.get(0);
						a.getIn(['sender', 'id'])
							? (n = r[a.getIn(['sender', 'id'])])
							: a.get('sender')
							? (n = a.get('sender').toJS())
							: a.get('authorId') && (n = r[a.get('authorId')]);
						var o = n || a.get('authorType', W.a.USER) === W.a.USER;
						return {
							drifttUser: n,
							senders: a
								.getIn(['attributes', 'senders'], Object(O.List)())
								.map(O.Map)
								.map(function(e) {
									var t = r[e.get('id')];
									return t ? e.merge(t) : e;
								}),
							linksByHref: K.e.getLinksByHref(e),
							hrefsByMessageId: K.e.getHrefsByMessageId(e),
							isFromViewer: !o,
							showUnfurl: Object(q.u)(e),
							hasConsolidatedWelcomeMsg: Object(q.p)(e),
							isEmbeddedMessenger: Object(H.g)(e),
							continuousBackgroundGradient: Object(H.c)(e),
							isEveryMessageHeldForDelay: Object(G.e)(e, t.messages),
							isAnyHeldForDelay: Object(G.d)(e),
						};
					},
					function(e) {
						return {
							actions: Object(y.bindActionCreators)({ createMessage: z.d }, e),
						};
					}
				),
				X,
				$,
				ee,
				te,
				Object(x.a)(['backgroundColor'])
			)(Q);
		}.call(this, n(0)));
	},
	454: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(40),
				a = n.n(r);
			n(1598);
			var o = n(1596);
			t.a = function() {
				return e.createElement(a.a, { src: o });
			};
		}.call(this, n(0)));
	},
	456: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(12),
				o = n.n(a),
				i = n(956),
				s = n.n(i),
				c = n(56),
				u = n.n(c),
				l = n(111),
				d = n.n(l),
				p = function(t) {
					var n = t.count,
						r = t.max,
						a = t.className;
					return e.createElement(
						'div',
						{ className: o()(s.a.Badge, a) },
						n > r ? r + '+' : n
					);
				};
			(p.propTypes = {
				count: r.PropTypes.number.isRequired,
				max: r.PropTypes.number,
				className: r.PropTypes.string,
			}),
				(p.defaultProps = { max: 99 });
			var _ = u()(function(e) {
				return e.count < 1;
			}, d.a);
			t.a = _(p);
		}.call(this, n(0)));
	},
	457: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return a;
		}),
			n.d(t, 'b', function() {
				return o;
			});
		var r = n(105),
			a = {
				visits: {
					first: void 0,
					last: void 0,
					count: void 0,
					sessionCount: void 0,
					currentPageViewStarted: void 0,
					currentSessionStartedAt: void 0,
					previousSessionStartedAt: void 0,
					previousSessionEndedAt: void 0,
				},
				geo: {
					status: void 0,
					country: void 0,
					subdivision: void 0,
					metroCode: void 0,
					city: void 0,
					latitude: void 0,
					logitude: void 0,
					ip: void 0,
					gdprApplicable: void 0,
				},
				referrer: {
					original: void 0,
					previous: void 0,
					current: void 0,
					currentDomain: void 0,
					currentSearch: void 0,
				},
				ad: {
					source: void 0,
					name: void 0,
					medium: void 0,
					content: void 0,
					term: void 0,
				},
				page: {
					path: void 0,
					hostname: void 0,
					url: void 0,
					search: void 0,
					title: void 0,
					referrer: void 0,
					href: void 0,
				},
				os: {
					name: void 0,
					version: void 0,
					architecture: void 0,
					family: void 0,
				},
				scroll: {
					windowHeight: void 0,
					scrollHeight: void 0,
					scrollTop: void 0,
					scrollPct: 0,
				},
				mouse: { over: !0 },
				exitIntent: !1,
				device: void 0,
				timezone: void 0,
				locale: void 0,
				query: void 0,
				session: { outbound: void 0 },
				cookies: {},
			},
			o = function(e) {
				return Object(r.a)({}, a, e);
			};
	},
	46: function(e, t, n) {
		'use strict';
		n.d(t, 'f', function() {
			return a;
		}),
			n.d(t, 'h', function() {
				return o;
			}),
			n.d(t, 'i', function() {
				return i;
			}),
			n.d(t, 'g', function() {
				return s;
			}),
			n.d(t, 'a', function() {
				return c;
			}),
			n.d(t, 'c', function() {
				return u;
			}),
			n.d(t, 'b', function() {
				return l;
			}),
			n.d(t, 'd', function() {
				return d;
			}),
			n.d(t, 'e', function() {
				return p;
			}),
			n.d(t, 'j', function() {
				return _;
			});
		var r = function(e) {
				return '@@widget/consent/' + e;
			},
			a = r('RECORD_CONSENT'),
			o = r('RECORD_CONSENT_PENDING'),
			i = r('RECORD_CONSENT_SUCCESS'),
			s = r('RECORD_CONSENT_FAILURE'),
			c = r('ACTIVATE_PRIVACY_POLICY_FLOW'),
			u = r('COMPLETE_PRIVACY_POLICY_FLOW'),
			l = r('CANCEL_PRIVACY_POLICY_FLOW'),
			d = {
				NONE: 'NONE',
				EU: 'EU',
				CANADA: 'CANADA',
				EU_CANADA: 'EU_CANADA',
				ALL: 'ALL',
			},
			p = 'has_consent',
			_ = 'test_drift_consent_form';
	},
	466: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return p;
		});
		var r = n(138),
			a = n.n(r),
			o = n(90),
			i = n(189),
			s = n(34),
			c = [
				'MONDAY',
				'TUESDAY',
				'WEDNESDAY',
				'THURSDAY',
				'FRIDAY',
				'SATURDAY',
				'SUNDAY',
			],
			u = ['SATURDAY', 'SUNDAY'],
			l = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
			d = [],
			p = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'America/New_York',
					t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
					n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: a.a;
				try {
					return _(e, t, n);
				} catch (e) {
					return s.a.error(e), !1;
				}
			},
			_ = function(e, t, n) {
				var r = n(),
					a = r.tz(e).isoWeekday(),
					s = c[a - 1];
				return Object(o.a)(t, function(t) {
					var a = t.dayOfWeek,
						o = t.opens,
						c = t.closes;
					if (
						!(function(e, t) {
							return (
								t === e ||
								'EVERYDAY' === t ||
								('WEEKENDS' === t && Object(i.a)(u, e)) ||
								('WEEKDAYS' === t && Object(i.a)(l, e))
							);
						})(s, a)
					)
						return !1;
					var d = f(e, o, n),
						p = f(e, c, n);
					return d && p && r.isBetween(d, p);
				});
			},
			f = function(e, t, n) {
				var r = n().tz(e),
					o = a.a.tz(t, 'HH:mm:ss', !0, e);
				return o.isValid()
					? r
							.hours(o.hours())
							.minutes(o.minutes())
							.seconds(o.seconds())
					: void 0;
			};
	},
	47: function(e, t, n) {
		'use strict';
		var r = n(17),
			a = n(27),
			o = n.n(a),
			i = n(438),
			s = n(16);
		t.a = function() {
			var e =
				arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: ['foregroundColor', 'backgroundColor', 'activeColor', 'textColor'];
			return Object(r.connect)(
				o()(
					(function(e) {
						return function(t) {
							return Object(i.a)(t, e);
						};
					})(e),
					s.m
				),
				function() {
					return {};
				}
			);
		};
	},
	48: function(e, t, n) {
		'use strict';
		var r = n(188),
			a = n.n(r);
		t.a = a()({ USER: null, LEAD: null, END_USER: null });
	},
	487: function(e, t, n) {
		e.exports = {
			ConsentTakeover: '_3pJDypd4eTFWMheaCJPess',
			ConsentTakeoverHalfHeight: '_3m4BrQ8W-uZiQLJNcbHZjc',
			ConsentTakeoverShared: '_1GVxWBOu_0FWc426RdlKgC',
		};
	},
	488: function(e, t, n) {
		e.exports = {
			Container: '_2ngXYtlcHXA-EjBwuz_RKI',
			Transition: '_3KIigMno8L7h1L-RI5I_KX',
			WidgetButton: '_364Vk0R65B1GXViJwyA9fM',
		};
	},
	489: function(e, t, n) {
		e.exports = {
			OfflineHeading: '_14ASLnf5BPTWEGU9IgsrFJ',
			DottedLine: 'cPx7fV6w1fhdiwZNS3D4o',
			Prompt: '_1N1-IXr_IIS_x7j0xl4qsU',
		};
	},
	490: function(e, t, n) {
		e.exports = {
			ConversationTitle: '_3Od12OkuqmiBg_BLEkjKPm',
			ConversationInfo: '_3t8Ui3BLTc1n911VXcy-pt',
			AgentName: '_2LKFBgmZC0n5yfOp07G3Pu',
		};
	},
	491: function(e, t, n) {
		'use strict';
		var r = n(15);
		t.a = Object(r.h)({
			userStatusOnline: {
				id: 'app.user.status.online',
				description: 'Indicates a user is currently online',
				defaultMessage: 'online now',
			},
			userStatusActive: {
				id: 'app.user.status.active',
				description: 'Indicates when a user was last active',
				defaultMessage: 'active {time}',
			},
			userStatusOffline: {
				id: 'app.user.status.offline',
				description: 'Indicates a user is currently offline',
				defaultMessage: 'offline now',
			},
		});
	},
	492: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
				),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					svg_inline_react__WEBPACK_IMPORTED_MODULE_5__
				),
				_React = React,
				Component = _React.Component,
				PropTypes = _React.PropTypes,
				dom = _React.DOM,
				component = _React.createElement,
				SVGButton = (function(_Component) {
					function SVGButton() {
						var _ref, _this;
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
							this,
							SVGButton
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.handleMouseEnter = _this.handleMouseEnter.bind(_this)),
							(_this.handleMouseLeave = _this.handleMouseLeave.bind(_this));
						for (
							var _len = arguments.length, args = Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							args[_key] = arguments[_key];
						return (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
							this,
							(_ref =
								SVGButton.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
									SVGButton
								)).call.apply(_ref, [this].concat(args))
						));
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							SVGButton,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(
							SVGButton,
							[
								{
									key: 'handleMouseEnter',
									value: function() {
										return this.setState({ isHover: !0 });
									},
								},
								{
									key: 'handleMouseLeave',
									value: function() {
										return this.setState({ isHover: !1 });
									},
								},
								{
									key: 'render',
									value: function() {
										return dom.button(
											{
												className: this.props.className,
												'aria-label': this.props['aria-label'],
												onMouseEnter: this.handleMouseEnter,
												onMouseLeave: this.handleMouseLeave,
												onClick: this.props.onClick,
												tabIndex: '2000',
											},
											component(
												svg_inline_react__WEBPACK_IMPORTED_MODULE_5___default.a,
												{ className: 'flex', src: this.props.svgString }
											),
											this.props.label
										);
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										(this.propTypes = {
											svgString: PropTypes.string.isRequired,
											onClick: PropTypes.func,
											className: PropTypes.string,
											label: PropTypes.node,
										}),
											(this.prototype.state = { isHover: !1 });
									},
								},
							]
						),
						SVGButton
					);
				})(Component);
			SVGButton.initClass(), (__webpack_exports__.a = SVGButton);
		}.call(this, __webpack_require__(0)));
	},
	493: function(e, t, n) {
		e.exports = {
			ConversationTitle: '_13D55mV8-UrIeHe3542c5Z',
			ConversationInfo: '_36EUaubw4WKVxQr4salQz3',
			AgentName: '_2RxlcvvR2zUm0P9hrXSFPF',
		};
	},
	494: function(e, t, n) {
		'use strict';
		var r = n(15);
		t.a = Object(r.h)({
			userStatusOnline: {
				id: 'app.user.status.online',
				description: 'Indicates a user is currently online',
				defaultMessage: 'online now',
			},
			userStatusActive: {
				id: 'app.user.status.active',
				description: 'Indicates when a user was last active',
				defaultMessage: 'active {time}',
			},
			userStatusOffline: {
				id: 'app.user.status.offline',
				description: 'Indicates a user is currently offline',
				defaultMessage: 'offline now',
			},
		});
	},
	495: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
				),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40),
				svg_inline_react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					svg_inline_react__WEBPACK_IMPORTED_MODULE_5__
				),
				_React = React,
				Component = _React.Component,
				PropTypes = _React.PropTypes,
				dom = _React.DOM,
				component = _React.createElement,
				SVGButton = (function(_Component) {
					function SVGButton() {
						var _ref, _this;
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
							this,
							SVGButton
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.handleMouseEnter = _this.handleMouseEnter.bind(_this)),
							(_this.handleMouseLeave = _this.handleMouseLeave.bind(_this));
						for (
							var _len = arguments.length, args = Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							args[_key] = arguments[_key];
						return (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
							this,
							(_ref =
								SVGButton.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
									SVGButton
								)).call.apply(_ref, [this].concat(args))
						));
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							SVGButton,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(
							SVGButton,
							[
								{
									key: 'handleMouseEnter',
									value: function() {
										return this.setState({ isHover: !0 });
									},
								},
								{
									key: 'handleMouseLeave',
									value: function() {
										return this.setState({ isHover: !1 });
									},
								},
								{
									key: 'render',
									value: function() {
										return dom.button(
											{
												className: this.props.className,
												'aria-label': this.props['aria-label'],
												onMouseEnter: this.handleMouseEnter,
												onMouseLeave: this.handleMouseLeave,
												onClick: this.props.onClick,
												tabIndex: '2000',
											},
											component(
												svg_inline_react__WEBPACK_IMPORTED_MODULE_5___default.a,
												{ className: 'flex', src: this.props.svgString }
											),
											this.props.label
										);
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										(this.propTypes = {
											svgString: PropTypes.string.isRequired,
											onClick: PropTypes.func,
											className: PropTypes.string,
											label: PropTypes.node,
										}),
											(this.prototype.state = { isHover: !1 });
									},
								},
							]
						),
						SVGButton
					);
				})(Component);
			SVGButton.initClass(), (__webpack_exports__.a = SVGButton);
		}.call(this, __webpack_require__(0)));
	},
	496: function(e, t, n) {
		e.exports = {
			Attachment: '_1s5skBjrux5CEa1Bch52vc',
			ImageAttachment: '_1_s1xRh1jwvKAveVfdw6CO',
			DownloadIcon: '_1h38PnGZh_GWLg08O1q0oG',
		};
	},
	497: function(e, t, n) {
		e.exports = {
			Button: '_2A4qgMu28j4D9meg_bI3j8',
			ButtonGroup: 'JrHI08VEuJ93Fe9SHf1EV',
			ButtonGroupButtons: 'WHPsCOigZpsybSK2TV9Fk',
		};
	},
	498: function(e, t, n) {
		e.exports = {
			SchedulingFlowHeading: '_1Nm69fofuV94SKypLglmKa',
			DottedLine: '_1ioBcx2Rpr_Fk-CwuMCGL2',
			SchedulingFlowHeadingCopy: '_2DZu_2bnwzBWOx7yP_P17o',
		};
	},
	500: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		});
		var r = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				e = e.slice(0);
				for (var n = [], r = a(t), o = e.length, i = 0; i < o; i++)
					n[i] = e.splice(r() % e.length, 1)[0];
				return n;
			},
			a = function(e) {
				return function() {
					return 1073741823 & (e = (1103515245 * e + 12345) % 2147483647);
				};
			};
	},
	503: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" width="21" height="5" viewBox="0 0 21 5"><g fill="currentColor" fill-rule="evenodd"><circle cx="18.5" cy="2.5" r="2.5"></circle><circle cx="10.5" cy="2.5" r="2.5"></circle><circle cx="2.5" cy="2.5" r="2.5"></circle></g></svg>';
	},
	51: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'd', function() {
				return E;
			}),
				n.d(t, 'e', function() {
					return S;
				}),
				n.d(t, 'j', function() {
					return R;
				}),
				n.d(t, 'a', function() {
					return j;
				}),
				n.d(t, 'i', function() {
					return N;
				}),
				n.d(t, 'k', function() {
					return L;
				}),
				n.d(t, 'f', function() {
					return H;
				}),
				n.d(t, 'h', function() {
					return K;
				}),
				n.d(t, 'l', function() {
					return q;
				}),
				n.d(t, 'g', function() {
					return z;
				}),
				n.d(t, 'c', function() {
					return V;
				}),
				n.d(t, 'b', function() {
					return Y;
				});
			var r = n(88),
				a = n.n(r),
				o = n(2),
				i = n.n(o),
				s = n(9),
				c = n(6),
				u = n(15),
				l = n(3),
				d = n(500),
				p = n(41),
				_ = n(16),
				f = n(66),
				m = n(970),
				b = n(206),
				g = n(99),
				h = function(e) {
					return e.ConversationUI;
				},
				v = function(e) {
					return e.Bootstrap.embedConfiguration.theme;
				},
				E = function(e) {
					return e.Bootstrap.embedConfiguration.inboxId;
				},
				y = Object(s.createSelector)(
					[
						function(e) {
							return e.Bootstrap.embedConfiguration.onCallUsers;
						},
						c.L,
					],
					function(e, t) {
						return Object(d.a)(e, t);
					}
				),
				O = Object(s.createSelector)([c.k, c.L], function(e, t) {
					var n = Object(l.Map)(e)
						.valueSeq()
						.filter(function(e) {
							return e.status === g.a;
						})
						.filter(function(e) {
							return !e.bot;
						})
						.toArray();
					return Object(d.a)(n, t);
				}),
				C = Object(s.createSelector)([b.d, c.L], function(e, t) {
					return Object(d.a)(e, t);
				}),
				T = function(e) {
					return Object(l.Set)(
						e.Bootstrap.embedConfiguration.doNotDisturbUsers || []
					);
				},
				I = Object(s.createSelector)(h, function(e) {
					return e.message;
				}),
				M = Object(s.createSelector)(h, function(e) {
					return e.thankYouMessage;
				}),
				P = Object(s.createSelector)(h, function(e) {
					return e.sender;
				}),
				A = Object(s.createSelector)(h, function(e) {
					return e.inboxId;
				}),
				S = Object(s.createSelector)(A, E, function(e, t) {
					return e || t;
				}),
				D = Object(s.createSelector)(v, function(e) {
					return e.welcomeMessage;
				}),
				w = Object(s.createSelector)(v, function(e) {
					return e.awayMessage;
				}),
				k = Object(s.createSelector)(v, function(e) {
					return e.confirmationMessage;
				}),
				R = Object(s.createSelector)(I, D, function(t, n) {
					return t || n || e.createElement(u.b, p.a.welcomeMessage);
				}),
				j = Object(s.createSelector)(I, w, function(t, n) {
					return t || n || e.createElement(u.b, p.a.defaultAwayMessageCopy);
				}),
				N = Object(s.createSelector)(M, k, function(e, t) {
					return e || t;
				}),
				B = Object(s.createSelector)([c.z, c.y, c.k], function(e, t, n) {
					return e !== m.a.CUSTOM
						? Object(l.List)()
						: Object(l.List)(t)
								.map(function(e) {
									return n[e];
								})
								.filter(function(e) {
									return !!e;
								})
								.filter(function(e) {
									return e.status === g.a;
								});
				}),
				U = Object(s.createSelector)([O, T], function(e, t) {
					if ((e = Object(l.List)(e)).isEmpty()) return Object(l.List)();
					if (!t.isEmpty()) {
						var n = e.filter(function(e) {
							return !t.has(e.id);
						});
						n.isEmpty() || (e = n);
					}
					var r = e.filter(function(e) {
						return !!e.avatarUrl;
					});
					return r.isEmpty() ? e.take(3) : r.take(3);
				}),
				L = Object(s.createSelector)([P, c.k, _.d, _.c, f.b], function(
					e,
					t,
					n,
					r,
					a
				) {
					if (e) return e.id && t[e.id] ? i()({}, t[e.id], e) : e;
					var o = n || a;
					return o && t[o] ? t[o] : r;
				}),
				W = Object(s.createSelector)([c.k, y, C, T], function(e, t, n, r) {
					var o = l.List.of
						.apply(l.List, a()(n))
						.map(function(t) {
							return e[parseInt(t, 10)];
						})
						.filter(function(e) {
							return !!e;
						})
						.filter(function(e) {
							return 'ENABLED' === e.status;
						})
						.filter(function(e) {
							return !r.has(e.id);
						})
						.toList();
					return o.isEmpty()
						? l.List.of
								.apply(l.List, a()(t))
								.map(function(t) {
									return e[parseInt(t, 10)];
								})
								.filter(function(e) {
									return !!e;
								})
								.filter(function(e) {
									return 'ENABLED' === e.status;
								})
								.filter(function(e) {
									return !r.has(e.id);
								})
								.toList()
						: o;
				}),
				x = Object(s.createSelector)([c.k, y, C], function(e, t, n) {
					return l.OrderedSet.of
						.apply(l.OrderedSet, a()(n).concat(a()(t)))
						.map(function(t) {
							return e[parseInt(t, 10)];
						})
						.filter(function(e) {
							return e && 'ENABLED' === e.status;
						})
						.toList();
				}),
				F = Object(s.createSelector)([W, x, c.B], function(e, t, n) {
					var r = n ? e : t;
					if (r.count() > 1) {
						var a = r.filter(function(e) {
							return !!e.name;
						});
						if (!a.isEmpty()) return a.take(3);
					}
					return r.take(3);
				}),
				H = Object(s.createSelector)([F, U], function(e, t) {
					return e.isEmpty() ? (t.isEmpty() ? Object(l.List)() : t) : e;
				}),
				K = (Object(s.createSelector)([B, H], function(e, t) {
					return e.isEmpty() ? t : e;
				}),
				Object(s.createSelector)([c.k, L, F, B, U], function(e, t, n, r, a) {
					return t
						? l.List.of(t)
						: r.isEmpty()
						? n.isEmpty()
							? a.isEmpty()
								? Object(l.List)()
								: a
							: n
						: r;
				})),
				q = function(e) {
					return !!L(e);
				},
				z = Object(s.createSelector)(K, function(e) {
					return e.first();
				}),
				G = Object(l.Set)(['isLiveWelcomeMessage', 'isLiveConversation']),
				V = Object(s.createSelector)(h, function(e) {
					return Object(l.Map)(e.attributes)
						.filter(function(e, t) {
							return G.has(t);
						})
						.toObject();
				}),
				Y = function(e) {
					return h(e).campaign;
				};
		}.call(this, n(0)));
	},
	52: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return a;
		}),
			n.d(t, 'b', function() {
				return o;
			}),
			n.d(t, 'e', function() {
				return i;
			}),
			n.d(t, 'd', function() {
				return s;
			}),
			n.d(t, 'i', function() {
				return c;
			}),
			n.d(t, 'h', function() {
				return u;
			}),
			n.d(t, 'f', function() {
				return l;
			}),
			n.d(t, 'g', function() {
				return d;
			}),
			n.d(t, 'a', function() {
				return p;
			});
		var r = n(3),
			a = 'CHAT',
			o = 'ANNOUNCEMENT',
			i = 'NPS_QUESTION',
			s = 'EMAIL_CAPTURE',
			c = 'NPS_RESPONSE',
			u = 'CHAT_RATING',
			l = 'sentOfflineHours',
			d = 'sentWelcomeMessage',
			p = Object(r.Set)([a, o]);
	},
	53: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return o;
		}),
			n.d(t, 'b', function() {
				return i;
			}),
			n.d(t, 'a', function() {
				return s;
			});
		var r = n(5),
			a = n(31),
			o = Object(r.b)(a.d),
			i = Object(r.b)(a.c),
			s = Object(r.b)(a.a);
	},
	57: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return r;
		}),
			n.d(t, 'd', function() {
				return a;
			}),
			n.d(t, 'a', function() {
				return o;
			}),
			n.d(t, 'e', function() {
				return i;
			}),
			n.d(t, 'c', function() {
				return s;
			});
		var r = 'DISMISSED',
			a = 'OPENED',
			o = 'CLICKED',
			i = 'SUBMITTED',
			s = 'LEAD_CAPTURED';
	},
	58: function(e, t, n) {
		'use strict';
		n.d(t, 'i', function() {
			return a;
		}),
			n.d(t, 'a', function() {
				return o;
			}),
			n.d(t, 'c', function() {
				return i;
			}),
			n.d(t, 'b', function() {
				return s;
			}),
			n.d(t, 'e', function() {
				return c;
			}),
			n.d(t, 'h', function() {
				return u;
			}),
			n.d(t, 'f', function() {
				return l;
			}),
			n.d(t, 'g', function() {
				return d;
			}),
			n.d(t, 'd', function() {
				return p;
			});
		var r = n(73),
			a = 'START_SCHEDULE_MEETING_FLOW',
			o = 'FETCH_AGENT_AVAILABILITY',
			i = 'FETCH_AGENT_AVAILABILITY_SUCCESS',
			s = 'FETCH_AGENT_AVAILABILITY_FAILURE',
			c = 'SCHEDULE_APPOINTMENT',
			u = 'SCHEDULE_APPOINTMENT_SUCCESS',
			l = 'SCHEDULE_APPOINTMENT_FAILURE',
			d = 'SCHEDULE_APPOINTMENT_RESET',
			p = n.n(r)()({
				CALENDAR_DROP: 'CALENDAR_DROP',
				EMAIL_DROP: 'EMAIL_DROP',
				PLAYBOOK_DROP: 'PLAYBOOK_DROP',
				PROFILE_DROP: 'PROFILE_DROP',
				PROFILE_LINK: 'PROFILE_LINK',
				RESCHEDULE: 'RESCHEDULE',
				SEQUENCE_DROP: 'SEQUENCE_DROP',
				NONE: 'NONE',
			});
	},
	584: function(e, t) {
		e.exports =
			'<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"><path d="M12.975.38c.014.043.02.087.024.132v.06c-.004.048-.014.095-.03.14-.006.017-.007.032-.014.046L7.252 12.692c-.09.19-.28.308-.49.308-.216-.002-.406-.127-.493-.32l-.537-3.41C5.56 8.18 4.55 7.1 3.478 6.86l-3.2-.72c-.18-.1-.287-.293-.277-.5.012-.206.138-.39.328-.47L12.248.04 12.3.026c.05-.015.098-.025.148-.026.02 0 .038 0 .058.003.046.004.09.013.132.028l.055.02c.056.027.11.06.154.107.053.053.085.11.11.168.008.018.013.036.018.055z" fill-rule="evenodd"></path></svg>';
	},
	587: function(e, t, n) {
		'use strict';
		var r = n(2),
			a = n.n(r),
			o = n(50),
			i = n.n(o),
			s = n(88),
			c = n.n(s),
			u = n(10),
			l = n.n(u),
			d = n(85),
			p = n.n(d),
			_ = n(23),
			f = {
				X_WWW_FORM: 'application/x-www-form-urlencoded',
				JSON: 'application/json',
				FORM_DATA: 'multipart/form-data',
			},
			m = { Accept: f.JSON, 'Content-Type': f.JSON },
			b = function() {
				var e = this;
				(this.identify = function(t) {
					var n =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						r =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {},
						a = _.i + '/identify',
						o = {
							orgId: e.orgId,
							userId: t || e.userId,
							anonymousId: e.anonymousId,
							isDebug: e.isDebug,
							attributes: n,
							options: r,
							context: e.context,
						};
					return fetch(a, { method: 'POST', headers: m, body: i()(o) });
				}),
					(this.track = function(t) {
						var n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							r =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: {};
						e.trackQueue.push({
							orgId: e.orgId,
							inboxId: e.inboxId,
							userId: e.userId,
							anonymousId: e.anonymousId,
							isDebug: e.isDebug,
							event: t,
							attributes: n,
							context: a()({}, e.context, r),
						});
					}),
					(this.getTrackQueue = function() {
						return e.trackQueue.toArray();
					});
			};
		t.a = function e(t) {
			var n = t.orgId,
				r = t.inboxId,
				a = t.userId,
				o = t.anonymousId,
				i = t.isDebug;
			l()(this, e),
				b.call(this),
				(this.orgId = n),
				(this.inboxId = r),
				(this.userId = a),
				(this.anonymousId = o),
				(this.isDebug = i),
				(this.context = (function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: navigator.userAgent,
						t = p.a.parse(e);
					return {
						name: t.name,
						version: t.version,
						layout: t.layout,
						manufacturer: t.manufacturer,
						prerelease: t.prerelease,
						product: t.product,
						os: {
							architecture: t.os.architecture,
							family: t.os.family,
							version: t.os.version,
							description: t.os.toString(),
						},
						description: t.description,
					};
				})()),
				(this.trackQueue = new function e(t) {
					var n = this,
						r = t.size;
					l()(this, e),
						(this._increment = function() {
							return (n.index = ++n.index % n.size);
						}),
						(this.toArray = function() {
							return [].concat(c()(n.array));
						}),
						(this.push = function(e) {
							(n.array[n.index] = e), n._increment();
						}),
						(this.index = 0),
						(this.size = r || 1e3),
						(this.array = []);
				}(1e3));
		};
	},
	589: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return o;
		});
		var r = n(5),
			a = n(293),
			o = Object(r.b)(a.a);
	},
	591: function(e, t, n) {
		e.exports = {
			ProductAnnouncement: 'eqJMjTsDNkY1v6BlxYjUH',
			ProductAnnouncement__Content: 'i_OL8cDcbVl4LYt-hEWbS',
		};
	},
	593: function(e, t, n) {
		e.exports = {
			PAWelcomeMessage: '_3gUiTwmzgT2WLvc1k0OexA',
			CampaignBody: '_13Q6DiuLVRniTBl3tr77ut',
			CtaButton: '_2ycNsAxtfLGehxFv5VZZU1',
		};
	},
	594: function(e, t, n) {
		e.exports = {
			DismissButton: '_1lVdwgQwG8iYSXC1rtIUn-',
			DismissButtonIcon: '_3sY_jwfgYHGUb3-n-s6cwm',
		};
	},
	595: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(12),
				m = n.n(f),
				b = n(40),
				g = n.n(b),
				h = n(15),
				v = n(230),
				E = n(41),
				y = n(326),
				O = n.n(y),
				C = n(613),
				T = (function(t) {
					function n(t) {
						i()(this, n);
						var r = l()(this, (n.__proto__ || a()(n)).call(this, t));
						return (
							(r.handleChange = function(e) {
								r.setState({ email: e.target.value });
							}),
							(r.handleSubmit = function(e) {
								e.preventDefault(),
									r.isValid()
										? r.props.onSubmit &&
										  r.props.onSubmit({ email: r.state.email })
										: r.setState({ error: !0 });
							}),
							(r.isValid = function() {
								return !!r.state.email && Object(v.isEmail)(r.state.email);
							}),
							(r.renderLabel = function() {
								return r.state.error
									? e.createElement(
											'label',
											{ className: 'dsg-Label--pink' },
											e.createElement(h.b, E.a.invalidEmail)
									  )
									: e.createElement(
											'label',
											{ className: 'dsg-Label--gray' },
											e.createElement(h.b, E.a.emailAddressInputLabel)
									  );
							}),
							(r.state = {
								email: (t.endUser && t.endUser.email) || '',
								error: void 0,
							}),
							r
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									if (this.inputNode) {
										this.inputNode.focus();
										var e = this.inputNode.value;
										(this.inputNode.value = ''), (this.inputNode.value = e);
									}
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.backgroundColor,
										a = n.textColor,
										o = this.isValid();
									return e.createElement(
										'form',
										{ className: O.a.Form, onSubmit: this.handleSubmit },
										e.createElement(
											'div',
											{ className: O.a.Body },
											this.renderLabel(),
											e.createElement(
												'div',
												{ className: 'flex', style: { marginTop: '8px' } },
												e.createElement(g.a, { className: 'flex', src: C }),
												e.createElement('input', {
													ref: function(e) {
														t.inputNode = e;
													},
													className: m()('dsg-Body', O.a.Input),
													placeholder: 'email@example.com',
													value: this.state.email,
													onChange: this.handleChange,
												})
											)
										),
										e.createElement(
											'button',
											{
												className: m()('flex-center', O.a.SubmitButton),
												style: {
													backgroundColor: o ? r : void 0,
													color: o ? a : void 0,
												},
											},
											e.createElement(
												'span',
												{ style: { textAlign: 'center', width: '100%' } },
												e.createElement(h.b, E.a.submitButtonLabel)
											)
										)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(T.renderTitle = function() {
				return e.createElement(
					'div',
					{ className: O.a.Title },
					e.createElement(h.b, E.a.asyncMessageContactPrompt)
				);
			}),
				(t.a = T);
		}.call(this, n(0)));
	},
	596: function(e, t, n) {
		e.exports = {
			Icon: 'm9jUk9iUHZGwBFKeSwsl6',
			DismissIcon: '_1vgXyPPHy0LhWlp5E8zmnn',
		};
	},
	597: function(e, t, n) {
		e.exports = {
			MobileComposer: '_2Mj-GUkNW-VFx-Y8vO8iBU',
			Input: '_3mpwY9rd_nsVcik0oXWuzA',
		};
	},
	598: function(e, t, n) {
		e.exports = {
			Container: '_3RH8Q-8c5XIGfvVfqKz27T',
			Icon: '_29T_JaBgZGCnXBwhROzS5w',
		};
	},
	599: function(e) {
		e.exports = [
			{
				name: 'US/Canada',
				zones: [
					{ label: 'Pacific Time - US & Canada', value: 'America/Los_Angeles' },
					{ label: 'Mountain Time - US & Canada', value: 'America/Denver' },
					{ label: 'Central Time - US & Canada', value: 'America/Chicago' },
					{ label: 'Eastern Time - US & Canada', value: 'America/New_York' },
					{ label: 'Atlantic Time', value: 'America/Halifax' },
					{ label: 'Alaska Time', value: 'America/Anchorage' },
					{ label: 'Arizona Time', value: 'America/Phoenix' },
					{ label: 'Newfoundland Time', value: 'America/St_Johns' },
					{ label: 'Hawaii Time', value: 'Pacific/Honolulu' },
				],
			},
			{
				name: 'Europe',
				zones: [
					{ label: 'GMT+01:00 Central European Time', value: 'Europe/Berlin' },
					{
						label: 'GMT+02:00 Eastern European Time',
						value: 'Europe/Helsinki',
					},
					{
						label: 'GMT+00:00 UK, Ireland, Lisbon Time',
						value: 'Europe/London',
					},
					{ label: 'GMT+03:00 Moscow, Minsk Time', value: 'Europe/Minsk' },
					{ label: 'GMT+03:00 Yerevan Time', value: 'Europe/Moscow' },
				],
			},
			{
				name: 'America',
				zones: [
					{ label: 'GMT-10:00 America/Adak', value: 'America/Adak' },
					{
						label: 'GMT-03:00 Buenos Aires Time',
						value: 'America/Argentina/Buenos_Aires',
					},
					{ label: 'GMT-04:00 Asuncion Time', value: 'America/Asuncion' },
					{
						label: 'GMT-05:00 Bogota, Jamaica, Lima Time',
						value: 'America/Bogota',
					},
					{
						label: 'GMT-04:00 America/Campo_Grande',
						value: 'America/Campo_Grande',
					},
					{ label: 'GMT-04:00 Caracas Time', value: 'America/Caracas' },
					{ label: 'GMT-03:00 America/Godthab', value: 'America/Godthab' },
					{ label: 'GMT-04:00 Atlantic Time', value: 'America/Goose_Bay' },
					{
						label: 'GMT-06:00 Saskatchewan, Guatemala, Costa Rica Time',
						value: 'America/Guatemala',
					},
					{ label: 'GMT-05:00 America/Havana', value: 'America/Havana' },
					{ label: 'GMT-07:00 America/Mazatlan', value: 'America/Mazatlan' },
					{ label: 'GMT-06:00 Mexico City Time', value: 'America/Mexico_City' },
					{ label: 'GMT-03:00 Montevideo Time', value: 'America/Montevideo' },
					{ label: 'GMT-03:00 America/Miquelon', value: 'America/Miquelon' },
					{ label: 'GMT-02:00 America/Noronha', value: 'America/Noronha' },
					{ label: 'GMT-04:00 Santiago Time', value: 'America/Santiago' },
					{
						label: 'GMT-08:00 America/Santa_Isabel',
						value: 'America/Santa_Isabel',
					},
					{
						label: 'GMT-04:00 Atlantic Standard Time',
						value: 'America/Santo_Domingo',
					},
					{ label: 'GMT-03:00 Brasilia Time', value: 'America/Sao_Paulo' },
				],
			},
			{
				name: 'Africa',
				zones: [
					{ label: 'GMT+02:00 Africa/Cairo', value: 'Africa/Cairo' },
					{
						label: 'GMT+02:00 Central Africa Time',
						value: 'Africa/Johannesburg',
					},
					{ label: 'GMT+01:00 West Africa Time', value: 'Africa/Lagos' },
					{ label: 'GMT+01:00 Africa/Windhoek', value: 'Africa/Windhoek' },
				],
			},
			{
				name: 'Asia',
				zones: [
					{ label: 'GMT+02:00 Syria, Jordan Time', value: 'Asia/Amman' },
					{
						label: 'GMT+03:00 Baghdad, East Africa Time',
						value: 'Asia/Baghdad',
					},
					{ label: 'GMT+04:00 Asia/Baku', value: 'Asia/Baku' },
					{ label: 'GMT+02:00 Jordan, Lebanon Time', value: 'Asia/Beirut' },
					{ label: 'GMT+02:00 Asia/Damascus', value: 'Asia/Damascus' },
					{ label: 'GMT+06:00 Asia/Dhaka', value: 'Asia/Dhaka' },
					{ label: 'GMT+04:00 Dubai Time', value: 'Asia/Dubai' },
					{ label: 'GMT+02:00 Asia/Gaza', value: 'Asia/Gaza' },
					{ label: 'GMT+08:00 Asia/Irkutsk', value: 'Asia/Irkutsk' },
					{ label: 'GMT+07:00 Indochina Time', value: 'Asia/Jakarta' },
					{ label: 'GMT+02:00 Israel Time', value: 'Asia/Jerusalem' },
					{ label: 'GMT+04:30 Kabul Time', value: 'Asia/Kabul' },
					{ label: 'GMT+12:00 Pacific/Majuro', value: 'Asia/Kamchatka' },
					{ label: 'GMT+05:00 Pakistan, Maldives Time', value: 'Asia/Karachi' },
					{ label: 'GMT+05:45 Kathmandu Time', value: 'Asia/Kathmandu' },
					{ label: 'GMT+05:30 India, Sri Lanka Time', value: 'Asia/Kolkata' },
					{
						label: 'GMT+07:00 China, Singapore, Perth Time',
						value: 'Asia/Krasnoyarsk',
					},
					{ label: 'GMT+06:00 Asia/Omsk', value: 'Asia/Omsk' },
					{ label: 'GMT+06:30 Asia/Rangoon', value: 'Asia/Rangoon' },
					{
						label: 'GMT+08:00 China, Singapore, Perth',
						value: 'Asia/Shanghai',
					},
					{ label: 'GMT+03:30 Tehran Time', value: 'Asia/Tehran' },
					{ label: 'GMT+09:00 Japan, Korea Time', value: 'Asia/Tokyo' },
					{ label: 'GMT+10:00 Asia/Vladivostok', value: 'Asia/Vladivostok' },
					{ label: 'GMT+09:00 Asia/Yakutsk', value: 'Asia/Yakutsk' },
					{ label: 'GMT+05:00 Asia/Dhaka', value: 'Asia/Yekaterinburg' },
					{ label: 'GMT+04:00 Asia/Yerevan', value: 'Asia/Yerevan' },
				],
			},
			{
				name: 'Atlantic',
				zones: [
					{ label: 'GMT-01:00 Azores Time', value: 'Atlantic/Azores' },
					{ label: 'GMT-01:00 Cape Verde Time', value: 'Atlantic/Cape_Verde' },
				],
			},
			{
				name: 'Australia',
				zones: [
					{ label: 'GMT+09:30 Adelaide Time', value: 'Australia/Adelaide' },
					{ label: 'GMT+10:00 Brisbane Time', value: 'Australia/Brisbane' },
					{ label: 'GMT+09:30 Australia/Darwin', value: 'Australia/Darwin' },
					{ label: 'GMT+08:45 Australia/Eucla', value: 'Australia/Eucla' },
					{
						label: 'GMT+10:30 Australia/Lord_Howe',
						value: 'Australia/Lord_Howe',
					},
					{ label: 'GMT+08:00 Australia/Perth', value: 'Australia/Perth' },
					{
						label: 'GMT+10:00 Sydney, Melbourne Time',
						value: 'Australia/Sydney',
					},
				],
			},
			{ name: 'UTC', zones: [{ label: 'GMT+00:00 UTC Time', value: 'UTC' }] },
			{
				name: 'Pacific',
				zones: [
					{ label: 'GMT-11:00 Pacific/Apia', value: 'Pacific/Apia' },
					{ label: 'GMT+12:00 Auckland Time', value: 'Pacific/Auckland' },
					{ label: 'GMT+12:45 Pacific/Chatham', value: 'Pacific/Chatham' },
					{ label: 'GMT-06:00 Pacific/Easter', value: 'Pacific/Easter' },
					{ label: 'GMT+12:00 Pacific/Fiji', value: 'Pacific/Fiji' },
					{ label: 'GMT-09:00 Pacific/Gambier', value: 'Pacific/Gambier' },
					{
						label: 'GMT+14:00 Pacific/Kiritimati',
						value: 'Pacific/Kiritimati',
					},
					{ label: 'GMT+12:00 Pacific/Majuro', value: 'Asia/Kamchatka' },
					{ label: 'GMT-10:30 Pacific/Marquesas', value: 'Pacific/Marquesas' },
					{ label: 'GMT+11:00 Pacific/Norfolk', value: 'Pacific/Norfolk' },
					{ label: 'GMT+11:00 Pacific/Noumea', value: 'Pacific/Noumea' },
					{ label: 'GMT-11:00 Pacific/Pago_Pago', value: 'Pacific/Pago_Pago' },
					{ label: 'GMT-08:00 Pacific/Pitcairn', value: 'Pacific/Pitcairn' },
					{ label: 'GMT+12:00 Pacific/Tarawa', value: 'Pacific/Tarawa' },
					{ label: 'GMT+13:00 Pacific/Tongatapu', value: 'Pacific/Tongatapu' },
				],
			},
		];
	},
	6: function(e, t, n) {
		'use strict';
		n.d(t, 'j', function() {
			return _;
		}),
			n.d(t, 'G', function() {
				return f;
			}),
			n.d(t, 'm', function() {
				return m;
			}),
			n.d(t, 'n', function() {
				return b;
			}),
			n.d(t, 'c', function() {
				return g;
			}),
			n.d(t, 'k', function() {
				return h;
			}),
			n.d(t, 'x', function() {
				return v;
			}),
			n.d(t, 'w', function() {
				return E;
			}),
			n.d(t, 'K', function() {
				return y;
			}),
			n.d(t, 'l', function() {
				return O;
			}),
			n.d(t, 'q', function() {
				return C;
			}),
			n.d(t, 'p', function() {
				return T;
			}),
			n.d(t, 'J', function() {
				return I;
			}),
			n.d(t, 'B', function() {
				return M;
			}),
			n.d(t, 'D', function() {
				return P;
			}),
			n.d(t, 'A', function() {
				return A;
			}),
			n.d(t, 'F', function() {
				return S;
			}),
			n.d(t, 'f', function() {
				return D;
			}),
			n.d(t, 'C', function() {
				return w;
			}),
			n.d(t, 'g', function() {
				return k;
			}),
			n.d(t, 'h', function() {
				return R;
			}),
			n.d(t, 'v', function() {
				return j;
			}),
			n.d(t, 'E', function() {
				return N;
			}),
			n.d(t, 'r', function() {
				return B;
			}),
			n.d(t, 'u', function() {
				return U;
			}),
			n.d(t, 'a', function() {
				return L;
			}),
			n.d(t, 'i', function() {
				return W;
			}),
			n.d(t, 'H', function() {
				return x;
			}),
			n.d(t, 'I', function() {
				return F;
			}),
			n.d(t, 'M', function() {
				return H;
			}),
			n.d(t, 'L', function() {
				return K;
			}),
			n.d(t, 'e', function() {
				return q;
			}),
			n.d(t, 'z', function() {
				return z;
			}),
			n.d(t, 'y', function() {
				return G;
			}),
			n.d(t, 't', function() {
				return V;
			}),
			n.d(t, 'o', function() {
				return Y;
			}),
			n.d(t, 'b', function() {
				return Z;
			}),
			n.d(t, 's', function() {
				return J;
			}),
			n.d(t, 'd', function() {
				return Q;
			});
		var r = n(103),
			a = n.n(r),
			o = n(9),
			i = n(20),
			s = n(469),
			c = n(139),
			u = (n(239), n(99)),
			l = n(25),
			d = n(4),
			p = n(52),
			_ = function(e) {
				return e.EndUser.currentEndUser;
			},
			f = Object(o.createSelector)(_, function(e) {
				return e && e.type === c.a;
			}),
			m = Object(o.createSelector)(_, function(e) {
				return e && e.email;
			}),
			b = Object(o.createSelector)(_, function(e) {
				return e && e.id;
			}),
			g = (Object(o.createSelector)(_, function(e) {
				return e && e.type === c.b;
			}),
			function(e) {
				return e.DriftUser.driftUsersById;
			}),
			h = g,
			v = (Object(o.createSelector)(h, function(e) {
				return Object(s.a)(e, function(e) {
					return e && e.status === u.a;
				});
			}),
			function(e) {
				return e.Targeting;
			}),
			E = function(e) {
				return e.EndUser.segmentMembership;
			},
			y = function(e) {
				return !!e.EndUser.segmentMembershipFetched;
			},
			O = function(e) {
				return e.Bootstrap.embedConfiguration;
			},
			C = function(e) {
				return O(e).gates;
			},
			T = function(e) {
				return function(t) {
					return !!C(t)[e];
				};
			},
			I = function(e) {
				return function(t) {
					return !!(function(e) {
						return O(e).integrations.connections;
					})(t)[e];
				};
			},
			M = T('CENTRALIZED_ROUTING'),
			P = T('geolocation_disabled'),
			A = T('ABM'),
			S = function(e) {
				return e.Bootstrap.embedConfiguration.chatEnabled;
			},
			D = function(e) {
				return e.Bootstrap.embedConfiguration.theme.audience;
			},
			w = function(e) {
				return e.Bootstrap.embedConfiguration.theme
					.enableChatIfConversationHistory;
			},
			k = function(e) {
				return e.Bootstrap.embedConfiguration.theme.conditions;
			},
			R = function(e) {
				return e.Bootstrap.embedConfiguration.theme.userListIds;
			},
			j = Object(o.createSelector)(l.i, l.h, l.j, function(e, t, n) {
				if (e) return { type: 'RECENT_MESSAGE_PREVIEW', message: e.toJS() };
				if (t)
					switch (t.type) {
						case 'EMAIL_CAPTURE':
							return { type: p.d, message: t };
						case p.e:
							return {
								type: 'NPS_PREVIEW',
								message: t,
								attributes: t.attributes,
							};
						case p.b:
							return {
								type: 'ANNOUNCEMENT_PREVIEW',
								message: t,
								attributes: t.attributes,
							};
					}
				if (n)
					switch (n.type) {
						case p.b:
							return {
								type: 'ANNOUNCEMENT_PREVIEW',
								message: n,
								attributes: n.attributes,
							};
					}
				return { type: 'NO_PREVIEW' };
			}),
			N = function(e) {
				return e.Event.hasPreviouslyIdentified;
			},
			B = function(e) {
				return e.UI.identifiedConversationId;
			},
			U = Object(o.createSelector)(v, function(e) {
				return {
					userAgent: e.userAgent,
					locale: e.locale,
					os: e.os,
					campaign: e.ad,
					page: e.page,
					timezone: e.timezone,
					influencingCampaignId: e.influencingCampaignId,
					influencingSignatureId: e.influencingSignatureId,
					influencingAgentId: e.influencingAgentId,
				};
			});
		function L(e) {
			var t = e.Bootstrap,
				n = t.isBootstrapping,
				r = t.hasBootstrapped,
				a = t.externalId;
			return !n && !r && !!a;
		}
		function W(e) {
			var t = e.Bootstrap,
				n = t.hasBootstrapped,
				r = t.isBootstrapping;
			return n ? 'success' : r ? 'pending' : 'failure';
		}
		var x = function(e) {
				var t = Object(i.a)(e, 'Targeting.geo.status');
				return t === d.O || t === d.M;
			},
			F = function(e) {
				return Object(i.a)(e, 'Targeting.geo.status') === d.N;
			},
			H = function(e, t) {
				var n = e.Bootstrap,
					r = n.hasBootstrapped,
					a = n.isBootstrapping,
					o = n.externalId,
					i = n.anonymousId,
					s = t.Bootstrap,
					c = s.externalId,
					u = s.anonymousId;
				return (!r && !a) || (c ? c !== o : !!u && u !== i);
			},
			K = function(e) {
				return (
					Object(i.a)(e, 'Targeting.visits.currentSessionStartedAt') ||
					Object(i.a)(e, 'Targeting.visits.last', 0)
				);
			},
			q = function(e) {
				return T('has_new_bot_avatars')(e) ? (K(e) % 5) + 1 : 1;
			},
			z = function(e) {
				return e.Bootstrap.embedConfiguration.theme.userListMode;
			},
			G = function(e) {
				return e.Bootstrap.embedConfiguration.theme.userList;
			},
			V = function(e) {
				return e.Bootstrap.embedConfiguration.locale || 'en';
			},
			Y = (Object(o.createSelector)(V, function(e) {
				var t = e.split('-');
				return a()(t, 1)[0];
			}),
			function(e) {
				return e.EndUser;
			}),
			Z = Object(o.createSelector)(Y, function(e) {
				return e.authToken;
			}),
			J = Object(o.createSelector)(Y, function(e) {
				return e.leadEmail;
			}),
			Q = Object(o.createSelector)(Z, function(e) {
				return e ? { Authorization: 'bearer ' + e } : {};
			});
	},
	600: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return s;
			}),
				n.d(t, 'b', function() {
					return c;
				});
			var r = n(2),
				a = n.n(r),
				o = n(15),
				i = Object(o.h)({
					delivered: {
						id: 'app.message.deliveryStatus.delivered',
						description:
							'Indicates that a message has been delivered to its recipients',
						defaultMessage: 'Delivered',
					},
					sending: {
						id: 'app.message.deliveryStatus.sending',
						description:
							'Indicates that a message is being sent to its recipients',
						defaultMessage: 'Sending...',
					},
				}),
				s = function(t) {
					return e.createElement(o.b, a()({}, t, i.delivered));
				},
				c = function(t) {
					return e.createElement(o.b, a()({}, t, i.sending));
				};
		}.call(this, n(0)));
	},
	602: function(e, t, n) {
		'use strict';
		var r = n(758);
		n.d(t, 'b', function() {
			return r.a;
		});
		var a = n(621);
		n.d(t, 'a', function() {
			return a.a;
		});
		n(427);
	},
	606: function(e, t, n) {
		e.exports = {
			ModalContainer: '_3jz_GKfIMeBIUmbvoYyFpi',
			RocketGif: 'fmp2WVAcQ9tAD_uPBMlXy',
		};
	},
	609: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(81),
				g = n(875),
				h = n.n(g),
				v = n(12),
				E = n.n(v),
				y = n(874),
				O = n.n(y),
				C = (function(t) {
					function n(e) {
						c()(this, n);
						var t = p()(this, (n.__proto__ || i()(n)).call(this, e));
						return (
							(t.handleWheel = function(e) {
								var n = void 0;
								try {
									n = Object(b.findDOMNode)(t);
								} catch (e) {
									return void console.error(e);
								}
								if (n)
									return e.deltaY < 0 && 0 === n.scrollTop
										? (e.preventDefault(), !1)
										: e.deltaY > 0 &&
										  n.clientHeight + n.scrollTop + e.deltaY >= n.scrollHeight
										? (e.preventDefault(), !1)
										: void 0;
							}),
							(t.handleWheel = h()(t.handleWheel, 100)),
							t
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'render',
								value: function() {
									return e.createElement(
										'div',
										a()({}, this.props, {
											className: E()(
												O.a.ScrollableContent,
												this.props.className
											),
										}),
										this.props.children
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			(C.propTypes = {
				className: m.PropTypes.string,
				children: m.PropTypes.node,
			}),
				(t.a = C);
		}.call(this, n(0)));
	},
	610: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return f;
			});
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(12),
				u = n.n(c),
				l = n(425),
				d = n.n(l),
				p = n(594),
				_ = n.n(p);
			function f(t) {
				var n = t.className,
					r = i()(t, ['className']);
				return e.createElement(
					'button',
					a()({}, r, {
						className: u()(_.a.DismissButton, n),
						title: 'Dismiss',
						'aria-label': 'Dismiss',
					}),
					e.createElement('img', {
						className: _.a.DismissButtonIcon,
						src: d.a,
						alt: '×',
					})
				);
			}
			f.propTypes = {
				className: s.PropTypes.string,
				onClick: s.PropTypes.func.isRequired,
			};
		}.call(this, n(0)));
	},
	611: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(8),
				i = n.n(o),
				s = n(24),
				c = n.n(s),
				u = n(0),
				l = n(12),
				d = n.n(l),
				p = n(324),
				_ = n.n(p),
				f = e.createElement('span', { className: _.a.CalloutTail });
			function m(t) {
				var n,
					r = t.className,
					o = t.children,
					s = t.hasTail,
					u = t.onClick,
					l = c()(t, ['className', 'children', 'hasTail', 'onClick']);
				return e.createElement(
					'div',
					a()({}, l, {
						onClick: u,
						className: d()(
							_.a.Callout,
							((n = {}),
							i()(n, _.a.hasTail, s),
							i()(n, _.a.hasClickHandler, u),
							n),
							r
						),
					}),
					s && f,
					e.createElement('div', { className: _.a.Content }, o)
				);
			}
			(m.propTypes = {
				onClick: u.PropTypes.func,
				className: u.PropTypes.string,
				children: u.PropTypes.node,
				hasTail: u.PropTypes.bool,
			}),
				(m.defaultProps = { hasTail: !0 }),
				(t.a = m);
		}.call(this, n(0)));
	},
	612: function(e, t) {
		e.exports =
			'<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path d="M16.726 15.402c.365.366.365.96 0 1.324-.178.178-.416.274-.663.274-.246 0-.484-.096-.663-.274L8.323 9.648h.353L1.6 16.726c-.177.178-.416.274-.663.274-.246 0-.484-.096-.663-.274-.365-.365-.365-.958 0-1.324L7.35 8.324v.35L.275 1.6C-.09 1.233-.09.64.274.274c.367-.365.96-.365 1.326 0l7.076 7.078h-.353L15.4.274c.366-.365.96-.365 1.326 0 .365.366.365.958 0 1.324L9.65 8.675v-.35l7.076 7.077z" fill="#FFF" fill-rule="evenodd"></path></svg>';
	},
	613: function(e, t) {
		e.exports =
			'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M14.875 12.75H2.125C.953 12.75 0 11.797 0 10.625v-8.5C0 .953.953 0 2.125 0h12.75C16.047 0 17 .953 17 2.125v8.5c0 1.172-.953 2.125-2.125 2.125zm-12.75-1.417h12.75c.39 0 .708-.318.708-.708V2.27L8.945 7.633c-.13.105-.287.158-.445.158-.158 0-.315-.053-.445-.158L1.417 2.27v8.355c0 .39.318.708.708.708zm12.26-9.916H2.614L8.5 6.173l5.884-4.756z" fill="#CCC" fill-rule="evenodd"></path></svg>';
	},
	614: function(e, t) {
		e.exports =
			'<svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M18.972 3.296c-.004.035-.023.064-.032.096-.012.044-.024.086-.043.127-.028.057-.064.106-.103.153-.018.023-.026.05-.046.07l-7.93 7.908c-.014.013-.032.018-.046.03-.04.035-.084.06-.13.087-.048.026-.094.052-.146.07-.016.004-.03.017-.047.02l-3.174.793c-.063.016-.128.024-.192.024-.208 0-.41-.082-.56-.23-.197-.2-.277-.484-.21-.753l.794-3.163c.004-.018.017-.03.024-.05.016-.05.04-.094.068-.142.026-.046.052-.09.086-.13.012-.013.017-.032.03-.045l7.93-7.91c.025-.022.055-.03.08-.05.042-.033.083-.064.13-.087.05-.025.102-.04.155-.055.03-.008.055-.025.085-.03.17-.023 1.665-.205 2.578.77.893.95.722 2.342.7 2.498zM17.114 1.88c-.224-.24-.66-.297-.958-.298l-7.562 7.54-.42 1.673 1.677-.418 7.564-7.54c-.004-.285-.06-.704-.3-.958zm-7.51 1.225H1.6v14.372h14.404V9.492c0-.436.16-.772.597-.772.44 0 .794.353.794.79v8.7c0 .436-.355.79-.793.79H.74C.3 19 0 18.712 0 18.275V2.307c0-.437.302-.705.74-.705h8.723c.438 0 .793.354.793.792 0 .436-.216.71-.653.71z" fill-rule="evenodd"></path></svg>';
	},
	621: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(17),
				c = n(0),
				u = n(15),
				l = n(257),
				d = n(199),
				p = n(48),
				_ = n(28),
				f = function(t) {
					var n = t.emailCaptureMessage,
						r = t.sender,
						o = t.createdAt,
						s = i()(t, ['emailCaptureMessage', 'sender', 'createdAt']);
					return e.createElement(
						l.a,
						a()(
							{
								authorType: p.a.USER,
								drifttUser: r,
								createdAtTimestamp: o,
								isFromViewer: !1,
							},
							s
						),
						e.createElement(d.a, { position: 'left' }, n)
					);
				};
			(f.displayName = 'AutoMessage'),
				(f.propTypes = {
					createdAt: c.PropTypes.number.isRequired,
					emailCaptureMessage: c.PropTypes.node.isRequired,
					sender: c.PropTypes.object.isRequired,
				}),
				(f.defaultProps = {
					emailCaptureMessage: e.createElement(function() {
						return e.createElement(u.b, {
							id: 'app.automessage.emailCaptureMessage',
							description:
								'Message sent to the user asking them for their email address',
							defaultMessage:
								"Hey there! We're excited to help you out. Let us know your email address so that we can follow up in case we get disconnected.",
						});
					}, null),
				});
			t.a = Object(s.connect)(function(e) {
				return { isEmbeddedMessenger: Object(_.g)(e) };
			})(f);
		}.call(this, n(0)));
	},
	66: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return i;
		}),
			n.d(t, 'd', function() {
				return s;
			}),
			n.d(t, 'a', function() {
				return c;
			}),
			n.d(t, 'b', function() {
				return u;
			}),
			n.d(t, 'e', function() {
				return l;
			});
		var r = n(3),
			a = function(e) {
				return e.Accounts;
			},
			o = function(e) {
				return a(e).account;
			},
			i = function(e) {
				return (a(e).accountSegments || Object(r.List)()).toArray();
			},
			s = function(e) {
				return a(e).fetched;
			},
			c = function(e) {
				return o(e).get('accountId');
			},
			u = function(e) {
				return o(e).get('ownerId');
			},
			l = function(e) {
				return o(e).get('targeted');
			};
	},
	68: function(e, t, n) {
		'use strict';
		n.d(t, 'g', function() {
			return o;
		}),
			n.d(t, 'c', function() {
				return i;
			}),
			n.d(t, 'f', function() {
				return s;
			}),
			n.d(t, 'e', function() {
				return c;
			}),
			n.d(t, 'd', function() {
				return u;
			}),
			n.d(t, 'a', function() {
				return l;
			}),
			n.d(t, 'h', function() {
				return d;
			}),
			n.d(t, 'b', function() {
				return p;
			});
		var r = n(3),
			a = function(e) {
				return '@@widget/targeting/' + e;
			},
			o = a('DISABLE_ENROLLMENT'),
			i = a('BULK_ENROLL'),
			s = a('BULK_ENROLL_SUCCESS'),
			c = a('BULK_ENROLL_PENDING'),
			u = a('BULK_ENROLL_FAILED'),
			l = a('ADD_ENROLLED_CAMPAIGN_IDS'),
			d = a('UPDATE_CAMPAIGNS_TARGETING_AUDIT_LOG'),
			p = Object(r.Set)(['WELCOME_MESSAGE']);
	},
	74: function(e, t, n) {
		'use strict';
		var r = n(253);
		n.d(t, 'a', function() {
			return r.a;
		}),
			n.d(t, 'b', function() {
				return r.b;
			}),
			n.d(t, 'c', function() {
				return r.c;
			}),
			n.d(t, 'd', function() {
				return r.d;
			});
	},
	758: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(15),
				u = n(40),
				l = n.n(u),
				d = n(12),
				p = n.n(d),
				_ = n(935),
				f = n(934),
				m = n(368),
				b = n.n(m),
				g = Object(c.h)({
					emailCapturedSuccess: {
						id: 'app.automessage.emailCapturedSuccess',
						description:
							'Shown after a user provides their email address for followup',
						defaultMessage: 'Thanks for submitting your email',
					},
				}),
				h = function(t) {
					var r = t.fill;
					return e.createElement(l.a, {
						className: b.a['IdentifyCard__email-icon'],
						src: n(1227),
						style: { fill: r },
					});
				};
			h.propTypes = { fill: e.PropTypes.string.isRequired };
			var v = function(t) {
				var n = t.backgroundColor;
				return e.createElement(
					'div',
					{ className: p()(b.a.CompletionView, 'flex-column', 'flex-center') },
					e.createElement(h, { fill: n }),
					e.createElement(
						'p',
						{ className: 'dsg-Title' },
						e.createElement(c.b, g.emailCapturedSuccess)
					)
				);
			};
			v.propTypes = { backgroundColor: e.PropTypes.string.isRequired };
			var E = function(t) {
				var n = t.backgroundColor,
					r = t.className,
					o = t.hasIdentified,
					s = t.conversationId,
					c = i()(t, [
						'backgroundColor',
						'className',
						'hasIdentified',
						'conversationId',
					]),
					u = o
						? e.createElement(v, { backgroundColor: n })
						: e.createElement(f.a, { conversationId: s });
				return e.createElement(
					_.a,
					a()({ className: p()(b.a.IdentifyCard, r) }, c),
					u
				);
			};
			(E.displayName = 'IdentifyCard'),
				(E.propTypes = {
					backgroundColor: s.PropTypes.string.isRequired,
					className: s.PropTypes.string,
					hasIdentified: s.PropTypes.bool.isRequired,
					conversationId: s.PropTypes.any.isRequired,
				}),
				(t.a = E);
		}.call(this, n(0)));
	},
	76: function(e, t, n) {
		'use strict';
		n.d(t, 'b', function() {
			return d;
		}),
			n.d(t, 'g', function() {
				return p;
			}),
			n.d(t, 'n', function() {
				return _;
			}),
			n.d(t, 'm', function() {
				return f;
			}),
			n.d(t, 'k', function() {
				return m;
			}),
			n.d(t, 'i', function() {
				return b;
			}),
			n.d(t, 'j', function() {
				return g;
			}),
			n.d(t, 'c', function() {
				return h;
			}),
			n.d(t, 'a', function() {
				return v;
			}),
			n.d(t, 'h', function() {
				return E;
			}),
			n.d(t, 'l', function() {
				return y;
			}),
			n.d(t, 'f', function() {
				return C;
			}),
			n.d(t, 'e', function() {
				return T;
			}),
			n.d(t, 'd', function() {
				return I;
			});
		var r = n(9),
			a = n(3),
			o = n(16),
			i = n(25),
			s = n(66),
			c = n(266),
			u = n(30),
			l = n(48),
			d = Object(r.createSelector)(o.d, o.c, s.b, function(e, t, n) {
				var r = e || n;
				return r
					? { to: { id: r, type: l.a.USER } }
					: t && t.email
					? { to: { email: t.email } }
					: void 0;
			}),
			p = function(e, t) {
				var n = t.conversationId,
					r = Object(i.r)()(e, { conversationId: n });
				if (r && r.get('authorType') === l.a.USER)
					return r.getIn(['attributes', 'questionId']);
			},
			_ = function() {
				var e = Object(i.r)();
				return function(t, n) {
					var r = n.conversationId,
						a = e(t, { conversationId: r });
					return !!(
						a &&
						a.get('authorType') === l.a.USER &&
						(a.getIn(['attributes', 'questionId']) ||
							a.getIn(['attributes', 'isHelpFlow'])) &&
						a.getIn(['attributes', 'isButtonOnly']) &&
						a.getIn(['attributes', 'buttons']) &&
						a.getIn(['attributes', 'buttons']).size > 0
					);
				};
			},
			f = function(e, t) {
				var n = t.messageId;
				return (
					e.Message.hasIn(['messagesById', n]) &&
					e.Message.getIn(['messageStatusById', n, 'unread'], !0)
				);
			},
			m = function(e) {
				return 'success' === e.Message.get('conversationsFetchStatus');
			},
			b = function(e) {
				return 'success' === e.Message.get('campaignConversationsFetchStatus');
			},
			g = function(e) {
				return 'success' === e.Message.get('campaignEnrollmentFetchStatus');
			},
			h = function(e) {
				return e.Message.get('enrolledCampaignsById');
			},
			v = function(e, t) {
				var n = t.conversationId;
				return (function(e) {
					return e.Message.get('conversationsById', Object(a.Map)());
				})(e).get(n, Object(a.Map)());
			},
			E = function(e) {
				return e.Message.get('unreadCampaignIds');
			},
			y = function(e) {
				return (
					Object(c.e)(e, { clusterName: u.l.MESSAGES }) ||
					(function(e) {
						return 'failure' === e.Message.get('conversationsFetchStatus');
					})(e)
				);
			},
			O = function(e) {
				return e.Message.get('heldForDelayMessageIds');
			},
			C = function(e, t) {
				return O(e).has(t);
			},
			T = function(e, t) {
				return t.every(function(t) {
					return C(e, t.get('id'));
				});
			},
			I = function(e) {
				return O(e).count() > 0;
			};
	},
	840: function(e, t, n) {
		'use strict';
		var r = n(2),
			a = n.n(r),
			o = n(24),
			i = n.n(o),
			s = n(17),
			c = n(27),
			u = n.n(c),
			l = n(94),
			d = n.n(l),
			p = n(56),
			_ = n.n(p),
			f = n(111),
			m = n.n(f),
			b = n(447),
			g = n(9),
			h = n(25),
			v = n(102),
			E = 3e5;
		function y() {
			var e = Object(h.u)();
			return Object(g.createSelector)([e, v.c, h.e], function(e, t, n) {
				var r = e.toList();
				return (
					(function(e, t) {
						var n = e.findLastIndex(function(e) {
							return (
								'USER' !== e.get('authorType') &&
								e.getIn(['attributes', 'scheduleMeetingFlow'], !1) &&
								!e.getIn(['attributes', 'appointmentInfo']) &&
								Date.now() - e.get('createdAt') < E
							);
						});
						return (
							n > -1 &&
							e
								.slice(n)
								.filter(function(e) {
									return e.get('authorId') === t.id;
								})
								.isEmpty()
						);
					})(r, t) ||
					(function(e, t) {
						var n = e.findLastIndex(function(e) {
							return (
								'USER' !== e.get('authorType') &&
								e.getIn(['attributes', 'startInteraction'], !1) &&
								Date.now() - e.get('createdAt') < E
							);
						});
						return (
							n > -1 &&
							e
								.slice(n)
								.filter(function(e) {
									return e.get('authorId') === t.id;
								})
								.isEmpty()
						);
					})(r, t) ||
					r.some(function(e) {
						return n.has(e.get('id'));
					})
				);
			});
		}
		t.a = u()(
			Object(s.connect)(
				function() {
					var e = y();
					return function(t, n) {
						return { shouldRender: e(t, n), botUser: Object(v.c)(t, n) };
					};
				},
				function() {
					return {};
				}
			),
			_()(function(e) {
				return !e.shouldRender || !e.botUser;
			}, m.a),
			d()(function(e) {
				var t = e.botUser,
					n = i()(e, ['botUser']);
				return a()({}, n, { userId: t.id });
			})
		)(b.a);
	},
	841: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(40),
			b = n.n(m),
			g = n(937),
			h = n(17),
			v = n(20),
			E = n(107),
			y = function(e) {
				return Object(v.a)(e, ['Attachment', 'status']) === E.d;
			},
			O = n(359),
			C = (function(e) {
				function t(e) {
					i()(this, t);
					var n = l()(this, (t.__proto__ || a()(t)).call(this, e));
					return (
						(n.renderMessage = function() {
							var e = n.props,
								t = e.isUploadInProgress,
								r = e.isUploadFailed,
								a = e.isSizeFailure,
								o = e.uploadNewFile;
							return t
								? f.a.createElement(
										'div',
										{ className: 'attachment-upload-progress-message' },
										'Uploading attachment…'
								  )
								: r
								? f.a.createElement(
										'div',
										{ className: 'attachment-upload-progress-message' },
										a
											? 'Attachment upload failed because the file is larger than 25MB'
											: 'Attachment upload failed.',
										f.a.createElement(
											'button',
											{ className: 'attachment-retry', onClick: o },
											'Upload new file'
										)
								  )
								: void 0;
						}),
						(n.renderActions = function() {
							return f.a.createElement(
								'div',
								{ className: 'attachment-upload-progress-actions' },
								f.a.createElement(
									'button',
									{
										className: 'attachment-upload-progress-action dismiss',
										onClick: function() {
											return n.setState({ dismissed: !0 });
										},
									},
									f.a.createElement(b.a, { src: O })
								)
							);
						}),
						(n.state = { dismissed: !1 }),
						n
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								(this.props.isUploadInProgress === e.isUploadInProgress &&
									this.props.fileUploadFailed === e.fileUploadFailed) ||
									this.setState({ dismissed: !1 });
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.isUploadInProgress,
									n = e.isUploadFailed;
								return (!t && !n) || this.state.dismissed
									? null
									: f.a.createElement(
											'div',
											{ className: g.AttachmentUploadProgress },
											f.a.createElement(
												'div',
												{
													className: n
														? 'attachment-upload-failed'
														: 'attachment-upload-progress',
												},
												this.renderMessage(),
												this.renderActions()
											)
									  );
							},
						},
					]),
					t
				);
			})(_.Component);
		t.a = Object(h.connect)(function(e) {
			return {
				isUploadInProgress: (function(e) {
					return Object(v.a)(e, ['Attachment', 'status']) === E.e;
				})(e),
				isUploadFailed: y(e),
				isSizeFailure: (function(e) {
					return (
						y &&
						'AttachmentSizeException' ===
							Object(v.a)(e, ['Attachment', 'error', 'responseData', 'message'])
					);
				})(e),
			};
		})(C);
	},
	844: function(e, t, n) {
		'use strict';
		var r = n(17),
			a = n(27),
			o = n.n(a),
			i = n(56),
			s = n.n(i),
			c = n(111),
			u = n.n(c),
			l = n(198),
			d = n.n(l),
			p = n(8),
			_ = n.n(p),
			f = n(13),
			m = n.n(f),
			b = n(10),
			g = n.n(b),
			h = n(11),
			v = n.n(h),
			E = n(7),
			y = n.n(E),
			O = n(14),
			C = n.n(O),
			T = n(0),
			I = n.n(T),
			M = n(12),
			P = n.n(M),
			A = n(199),
			S = n(40),
			D = n.n(S),
			w = n(496),
			k = n.n(w),
			R = n(1200),
			j = function(e) {
				var t = e.backgroundColor,
					n = e.color;
				return I.a.createElement(D.a, {
					style: { backgroundColor: t, color: n },
					className: k.a.DownloadIcon,
					src: R,
				});
			};
		j.propTypes = {
			backgroundColor: T.PropTypes.string,
			color: T.PropTypes.string,
		};
		var N = (function(e) {
				function t() {
					var e, n, r, a;
					g()(this, t);
					for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
						i[s] = arguments[s];
					return (
						(n = r = y()(
							this,
							(e = t.__proto__ || m()(t)).call.apply(e, [this].concat(i))
						)),
						(r.onDownloadClick = function() {
							var e = r.props,
								t = e.fileName,
								n = e.onClick,
								a = e.href,
								o = document.createElement('a');
							o.setAttribute('href', a),
								o.setAttribute('download', t),
								o.setAttribute('target', '_blank'),
								o.setAttribute('rel', 'noopener noreferrer nofollow'),
								document.body.appendChild(o),
								o.click(),
								document.body.removeChild(o),
								n && n();
						}),
						(r.isImage = function(e, t) {
							return t && /image/.test(e) && 'image/svg+xml' !== e;
						}),
						(a = n),
						y()(r, a)
					);
				}
				return (
					C()(t, e),
					v()(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.isFromViewer,
									n = e.fileName,
									r = e.color,
									a = e.backgroundColor,
									o = e.mimeType,
									i = e.previewUrl,
									s = this.isImage(o, i);
								return I.a.createElement(
									A.a,
									{
										className: P()(
											k.a.Attachment,
											_()({}, k.a.ImageAttachment, s && i)
										),
										backgroundColor: s && i ? void 0 : a,
										color: r,
										position: t ? 'right' : 'left',
									},
									I.a.createElement(
										'div',
										{ onClick: this.onDownloadClick },
										s
											? i &&
													I.a.createElement('img', { src: i, alt: n, title: n })
											: I.a.createElement(
													'span',
													{ style: { color: r } },
													I.a.createElement(j, null),
													n
											  )
									)
								);
							},
						},
					]),
					t
				);
			})(T.Component),
			B = N;
		(N.propTypes = {
			mimeType: T.PropTypes.string.isRequired,
			fileName: T.PropTypes.string.isRequired,
			previewUrl: T.PropTypes.string,
			isFromViewer: T.PropTypes.bool,
			href: T.PropTypes.string,
			onClick: T.PropTypes.func,
			backgroundColor: T.PropTypes.string,
			color: T.PropTypes.string,
		}),
			(N.defaultProps = { isFromViewer: !0 });
		var U = n(47),
			L = n(9),
			W = function(e) {
				return e.Attachment.attachmentsById;
			},
			x = n(6),
			F = o()(
				Object(U.a)(['backgroundColor', 'textColor']),
				d()('textColor', 'color')
			);
		t.a = o()(
			Object(r.connect)(function() {
				var e = Object(L.createSelector)(
					[
						W,
						function(e, t) {
							return t.attachmentId;
						},
					],
					function(e, t) {
						return e[t];
					}
				);
				return function(t, n) {
					var r = e(t, n);
					if (!r || 'success' !== r.status) return {};
					var a = r.url,
						o = r.previewUrl,
						i = r.metadata,
						s = void 0 === i ? {} : i,
						c = s.mimeType,
						u = s.fileName,
						l = n.message,
						d = Object(x.j)(t);
					return {
						href: a,
						previewUrl: o,
						mimeType: c,
						fileName: u,
						isFromViewer:
							l.get('authorId') === d.id && l.get('authorType') === d.type,
					};
				};
			}),
			s()(function(e) {
				return e.isFromViewer;
			}, F),
			s()(function(e) {
				return !e.href;
			}, u.a)
		)(B);
	},
	847: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(12),
			b = n.n(m),
			g = n(21),
			h = n(17),
			v = n(2),
			E = n.n(v),
			y = n(24),
			O = n.n(y),
			C = n(972),
			T = n.n(C),
			I = n(606),
			M = n.n(I);
		function P(e) {
			var t = e.children,
				n = e.onClick,
				r = O()(e, ['children', 'onClick']);
			return f.a.createElement(
				'div',
				E()({}, r, { className: 'bg-teal dsg-LargeButton', onClick: n }),
				t
			);
		}
		P.propTypes = {
			children: _.PropTypes.any,
			onClick: _.PropTypes.func.isRequired,
		};
		var A = f.a.createElement('img', {
			className: M.a.RocketGif,
			src: T.a,
			alt: 'rocket gif',
			title: '🚀',
		});
		function S(e) {
			var t = e.onCtaClick;
			return f.a.createElement(
				'div',
				{ className: M.a.ModalContainer + ' flex-column' },
				A,
				f.a.createElement(
					'h1',
					{ className: 'dsg-h1 dsg-medium-weight color-blue' },
					"Ayyyy! It's working!"
				),
				f.a.createElement(
					'p',
					{ className: 'dsg-h3 dsg-medium-weight' },
					"Great job! Feel free to send yourself a test chat if you'd like"
				),
				f.a.createElement(P, { onClick: t }, 'close window')
			);
		}
		S.propTypes = { onCtaClick: _.PropTypes.func.isRequired };
		var D = n(29);
		var w,
			k = Object(h.connect)(null, function(e) {
				return Object(
					g.bindActionCreators
				)({ onCtaClick: D.closeActivationTakeover }, e);
			})(S),
			R = n(963),
			j = n(8),
			N = n.n(j),
			B = n(124),
			U = n.n(B),
			L = n(962),
			W = n(951),
			x = n(449),
			F = n(897),
			H = n(894),
			K = n(889),
			q = n(887),
			z = n(28),
			G = n(22),
			V = n(4),
			Y = n(16),
			Z = n(377),
			J = n.n(Z),
			Q = ((w = {}),
			N()(w, V.h, W.a),
			N()(w, V.Ga, L.a),
			N()(w, V.Ia, F.a),
			N()(w, V.Ja, H.a),
			N()(w, V.Ka, K.a),
			N()(w, V.Ha, q.a),
			w),
			X = function(e) {
				var t = e.children,
					n = e.onCloseClick,
					r = e.theme,
					a = e.hasWidgetHalfHeight,
					o = e.isEmbeddedMessenger;
				return f.a.createElement(
					'div',
					{
						className: b()(
							o
								? J.a.MessengerEmbedded
								: r.widgetHalfHeight
								? J.a.MessengerHalfHeight
								: J.a.Messenger
						),
					},
					f.a.createElement(
						'div',
						{ className: 'messenger-content' },
						!o &&
							f.a.createElement(x.a, {
								onCloseButtonClicked: n,
								theme: r,
								hasWidgetHalfHeight: a,
							}),
						t
					)
				);
			};
		(X.propTypes = {
			children: _.PropTypes.node,
			onCloseClick: _.PropTypes.func,
			theme: _.PropTypes.shape({
				backgroundColor: _.PropTypes.string,
				foregroundColor: _.PropTypes.string,
				textColor: _.PropTypes.string,
				activeColor: _.PropTypes.string,
				widgetBackgroundColor: _.PropTypes.string,
				widgetHalfHeight: _.PropTypes.bool,
			}),
			organizationName: _.PropTypes.string,
			hasWidgetHalfHeight: _.PropTypes.bool,
		}),
			(X.displayName = 'Messenger');
		var $ = (function(e) {
			function t() {
				var e, n, r, o;
				i()(this, t);
				for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
					c[u] = arguments[u];
				return (
					(n = r = l()(
						this,
						(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
					)),
					(r.handleCloseClick = function() {
						r.props.actions.closeSidebarWithTween(),
							setTimeout(r.props.actions.closeSidebar, 200);
					}),
					(r.getView = function() {
						var e = r.props,
							t = e.view,
							n = e.isAway;
						return e.isEmbeddedMessenger
							? Q[V.h]
							: t === V.Ia && n
							? Q[V.Ja]
							: Q[t];
					}),
					(o = n),
					l()(r, o)
				);
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'renderMessenger',
						value: function() {
							var e = this.getView(),
								t = this.props,
								n = t.theme,
								r = t.isEmbeddedMessenger,
								a = t.organizationName;
							return f.a.createElement(
								X,
								{
									onCloseClick: this.handleCloseClick,
									theme: n,
									hasWidgetHalfHeight: n.widgetHalfHeight,
									isEmbeddedMessenger: r,
								},
								f.a.createElement(e, { organizationName: a, theme: n })
							);
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this.props,
								t = e.sidebarOpen;
							return e.isEmbeddedMessenger
								? this.renderMessenger()
								: t &&
										f.a.createElement(
											U.a,
											{
												className: J.a.Messenger__container,
												transitionName: 'messengerSlide',
												transitionAppear: !0,
												transitionAppearTimeout: 200,
												transitionEnterTimeout: 200,
												transitionLeaveTimeout: 200,
											},
											this.renderMessenger()
										);
						},
					},
				]),
				t
			);
		})(_.Component);
		$.propTypes = {
			view: _.PropTypes.oneOf([V.h, V.Ga, V.Ia, V.Ja, V.Ka, V.Ha]),
			sidebarOpen: f.a.PropTypes.bool,
			isAway: _.PropTypes.bool,
			actions: _.PropTypes.shape({
				closeSidebar: _.PropTypes.func,
				closeSidebarWithTween: _.PropTypes.func,
			}),
			theme: _.PropTypes.shape({
				backgroundColor: _.PropTypes.string,
				foregroundColor: _.PropTypes.string,
				textColor: _.PropTypes.string,
				activeColor: _.PropTypes.string,
				widgetBackgroundColor: _.PropTypes.string,
				widgetHalfHeight: _.PropTypes.bool,
			}),
		};
		var ee = Object(h.connect)(
				function(e) {
					return {
						view: z.d(e),
						sidebarOpen: z.l(e),
						isAway: !Object(Y.i)(e),
						theme: Object(G.n)(e),
						isEmbeddedMessenger: z.g(e),
						organizationName: Object(G.k)(e),
					};
				},
				function(e) {
					return {
						actions: Object(g.bindActionCreators)(
							{
								closeSidebar: D.closeSidebar,
								closeSidebarWithTween: D.closeSidebarWithTween,
							},
							e
						),
					};
				}
			)($),
			te = n(886),
			ne = n(144),
			re = n.n(ne),
			ae = n(27),
			oe = n.n(ae),
			ie = n(81),
			se = n(3),
			ce = n(133),
			ue = n(258),
			le = n(101),
			de = n(597),
			pe = n.n(de),
			_e = (function(e) {
				function t() {
					return (
						i()(this, t),
						l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.placeholder,
									n = e.autoFocus,
									r = e.onMouseDown,
									a = e.style,
									o = e.showBranding,
									i = e.utmContent;
								return f.a.createElement(
									'div',
									{ className: pe.a.MobileComposer, onMouseDown: r, style: a },
									f.a.createElement('input', {
										className: pe.a.Input,
										placeholder: t,
										autoFocus: n,
									}),
									o && f.a.createElement(le.a, { utmContent: i })
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		(_e.propTypes = {
			placeholder: _.PropTypes.string,
			autoFocus: _.PropTypes.bool,
			onMouseDown: _.PropTypes.func,
			style: _.PropTypes.object,
			showBranding: _.PropTypes.bool,
			isAway: _.PropTypes.bool,
		}),
			(_e.defaultProps = {
				isAway: !1,
				placeholder: 'Type your message…',
				autoFocus: !1,
				showBranding: !1,
			});
		var fe = _e,
			me = (function(e) {
				function t() {
					return (
						i()(this, t),
						l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'render',
							value: function() {
								return f.a.createElement(fe, this.props);
							},
						},
					]),
					t
				);
			})(_.Component),
			be = oe()(
				Object(h.connect)(function(e) {
					return { isAway: !Object(Y.i)(e), showBranding: Object(G.m)(e) };
				}),
				ue.a
			)(me),
			ge = n(47),
			he = n(295),
			ve = n(294),
			Ee = n(134),
			ye = n(301),
			Oe = n(161),
			Ce = n.n(Oe),
			Te = function(e) {
				var t = e.user,
					n = void 0 === t ? {} : t,
					r = e.backgroundColor;
				return f.a.createElement(
					'div',
					{ className: Ce.a.AvatarWrapper },
					f.a.createElement(Ee.a, {
						user: n,
						color: r,
						style: { borderColor: r },
						shape: 'circle',
					})
				);
			};
		function Ie(e) {
			var t = e.children,
				n = O()(e, ['children']);
			return f.a.createElement(
				'div',
				E()({}, n, { className: Ce.a.MenuItem }),
				t
			);
		}
		function Me(e) {
			var t = e.children,
				n = O()(e, ['children']);
			return f.a.createElement(
				'div',
				E()({ className: Ce.a.Menu }, n),
				f.a.createElement(
					'div',
					{ className: Ce.a.MenuItems },
					_.Children.map(t, function(e) {
						return f.a.createElement(Ie, null, e);
					})
				)
			);
		}
		function Pe(e) {
			var t = e.children;
			return (
				_.Children.count(t) > 0 &&
				f.a.createElement(
					'div',
					{ className: Ce.a.AvatarsList },
					_.Children.toArray(t).reverse()
				)
			);
		}
		(Te.propTypes = {
			backgroundColor: _.PropTypes.string,
			user: _.PropTypes.object,
		}),
			(Ie.propTypes = { children: _.PropTypes.node }),
			(Me.propTypes = { children: _.PropTypes.node }),
			(Pe.propTypes = { children: _.PropTypes.node });
		var Ae = (function(e) {
			function t() {
				var e, n, r, o;
				i()(this, t);
				for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
					c[u] = arguments[u];
				return (
					(n = r = l()(
						this,
						(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
					)),
					(r.renderAvatar = function(e) {
						var t = e.id,
							n = e.publicProfileUrl,
							a = { user: e, backgroundColor: r.props.backgroundColor };
						return n
							? f.a.createElement(
									'a',
									{ key: t, href: n, target: '_blank' },
									f.a.createElement(Te, a)
							  )
							: f.a.createElement(Te, E()({ key: t }, a));
					}),
					(o = n),
					l()(r, o)
				);
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'renderUserAvatars',
						value: function() {
							var e = this.props.users;
							return !e || e.isEmpty()
								? null
								: 1 !== e.size || Object(ye.b)(e.first()) || e.first().bot
								? f.a.createElement(Pe, null, e.map(this.renderAvatar))
								: null;
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this.props,
								t = e.backgroundColor,
								n = e.foregroundColor,
								r = e.title,
								a = e.children,
								o = e.users,
								i = e.menu,
								s = o && !o.isEmpty(),
								c = o && o.size > 1;
							return f.a.createElement(
								'div',
								{
									className: b()(Ce.a.Container, N()({}, Ce.a.MultiAvatars, c)),
									style: { backgroundColor: t, color: n },
								},
								(s || r) &&
									f.a.createElement(
										'div',
										{ className: Ce.a.Header },
										f.a.createElement(
											'div',
											{ className: Ce.a.HeaderContent },
											this.renderUserAvatars(),
											r &&
												f.a.createElement(
													'div',
													{ className: Ce.a.Title, style: { color: n } },
													r
												)
										),
										f.a.createElement(Me, null, i)
									),
								f.a.createElement('div', { className: Ce.a.Body }, a)
							);
						},
					},
				]),
				t
			);
		})(_.Component);
		(Ae.propTypes = {
			title: _.PropTypes.node,
			message: _.PropTypes.node,
			menu: _.PropTypes.node,
			children: _.PropTypes.node,
			users: _.PropTypes.object,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
		}),
			(Ae.defaultProps = { users: Object(se.List)() });
		var Se = Ae,
			De = n(40),
			we = n.n(De),
			ke = n(596),
			Re = n.n(ke),
			je = n(503),
			Ne = n(612),
			Be = { onClick: _.PropTypes.func };
		function Ue(e, t, n) {
			e && void 0 === t && ((t = e), (e = null));
			var r = function(e) {
				var n = e.className,
					r = e.style,
					a = e.onClick,
					o = O()(e, ['className', 'style', 'onClick']);
				return f.a.createElement(
					we.a,
					E()({}, o, {
						style: r,
						className: b()(Re.a.Icon, n),
						element: 'div',
						onClick: a,
						src: t,
					})
				);
			};
			return (
				e && (r.displayName = 'Icon(' + e + ')'),
				(r.defaultProps = E()({}, n)),
				(r.propTypes = E()({}, Be)),
				r
			);
		}
		var Le = Ue('Profile', je),
			We = Ue('Dismiss', Ne, { className: Re.a.DismissIcon }),
			xe = Le,
			Fe = n(880),
			He = n(878),
			Ke = n.n(He),
			qe = (function(e) {
				function t() {
					return (
						i()(this, t),
						l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'renderMenu',
							value: function() {
								var e = this.props,
									t = e.showProfileIcon,
									n = e.showDismissIcon,
									r = e.onProfileClick,
									a = e.onDismissClick;
								return [
									t && f.a.createElement(xe, { key: 'profile', onClick: r }),
									n && f.a.createElement(We, { key: 'dismiss', onClick: a }),
								].filter(Boolean);
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.title,
									n = e.users,
									r = e.message,
									a = e.backgroundColor,
									o = e.foregroundColor,
									i = e.children;
								return f.a.createElement(
									'div',
									{ className: Ke.a.Container },
									f.a.createElement(
										Fe.a,
										null,
										f.a.createElement(
											Se,
											{
												title: t,
												users: n,
												backgroundColor: a,
												foregroundColor: o,
												menu: this.renderMenu(),
											},
											r
										),
										i
									)
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		(qe.propTypes = {
			title: _.PropTypes.node,
			message: _.PropTypes.node,
			children: _.PropTypes.node,
			users: _.PropTypes.object,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			showProfileIcon: _.PropTypes.bool,
			onProfileClick: _.PropTypes.func,
			showDismissIcon: _.PropTypes.bool,
			onDismissClick: _.PropTypes.func,
		}),
			(qe.defaultProps = { users: Object(se.List)() });
		var ze = qe;
		function Ge(e) {
			var t = e.users,
				n = e.separator,
				r = Object(se.List)(t);
			return f.a.createElement(
				'div',
				null,
				r
					.map(function(e) {
						var t = e.id,
							n = e.name,
							r = e.publicProfileUrl;
						return r
							? f.a.createElement('a', { key: t, href: r, target: '_blank' }, n)
							: f.a.createElement('span', { key: t }, n);
					})
					.interleave(
						r.map(function(e, t) {
							return f.a.createElement('span', { key: 'sep-' + t }, n);
						})
					)
					.butLast()
			);
		}
		(Ge.propTypes = {
			users: _.PropTypes.object,
			separator: _.PropTypes.string,
		}),
			(Ge.defaultProps = { users: Object(se.List)(), separator: ', ' });
		var Ve = n(52),
			Ye = n(32),
			Ze = n(42),
			Je = n(97),
			Qe = n(25),
			Xe = n(51),
			$e = n(366),
			et = n(53),
			tt = n(31),
			nt = (function(e) {
				function t() {
					var e, n, r, o;
					i()(this, t);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(n = r = l()(
							this,
							(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
						)),
						(r.handleResize = function(e) {
							var t = e.height;
							r.props.actions.iframeOverrideSize({ height: t + 'px' });
						}),
						(r.handleClick = function() {
							r.props.welcomeMessageActive
								? r.props.actions.dismissWelcomeMessage()
								: r.props.actions.openChat({ autoFocus: !0 });
						}),
						(r.getCalloutMessage = function() {
							return r.props.welcomeMessageActive
								? 'Close the Chat Widget'
								: 'Begin an instant message conversation';
						}),
						(r.handleInputMouseDown = function(e) {
							Object(Ye.b)() &&
								(e.preventDefault(),
								r.props.actions.dismissWelcomeMessage(),
								r.props.actions.goToNewConversation({
									sentWelcomeMessage: !0,
								}));
						}),
						(r.handleProfileClick = function() {
							r.props.actions.hideWelcomeMessage(),
								r.props.actions.goToConversationList();
						}),
						(r.handleSubmit = function(e) {
							var t;
							r.props.actions.dismissWelcomeMessage(),
								r.props.actions.createConversation({
									body: e,
									attributes: ((t = {}),
									N()(t, Ve.g, !0),
									N()(t, 'isFirstPopup', r.props.isFirstPopup),
									N()(t, 'isTriggeredFromAPI', r.props.isTriggeredFromAPI),
									N()(t, 'onlineReason', r.props.onlineReason),
									N()(t, 'preMessages', [
										{
											body: r.linkifiedMessageContent,
											sender: r.props.sender,
											senders: r.props.users,
										},
									]),
									t),
								});
						}),
						(o = n),
						l()(r, o)
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'componentWillMount',
							value: function() {
								this.props.welcomeMessageActive &&
									this.props.actions.trackImpression({
										view: tt.e.WELCOME_MESSAGE_COMPOSER,
									});
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								!this.props.welcomeMessageActive &&
									e.welcomeMessageActive &&
									this.props.actions.trackImpression({
										view: tt.e.WELCOME_MESSAGE_COMPOSER,
									});
							},
						},
						{
							key: 'renderMessage',
							value: function() {
								var e = this;
								return f.a.createElement(
									re.a,
									{
										ref: function(t) {
											e._bodyNode = t;
										},
										properties: {
											target: '_blank',
											rel: 'noopener noreferrer nofollower',
										},
									},
									this.props.message
								);
							},
						},
						{
							key: 'renderComposer',
							value: function() {
								var e = tt.e.WELCOME_MESSAGE_COMPOSER;
								return Object(Ye.b)()
									? f.a.createElement(be, {
											style: { borderRadius: '0' },
											onMouseDown: this.handleInputMouseDown,
											utmContent: e,
									  })
									: f.a.createElement(ce.a, {
											size: 'medium',
											variant: 'minimal',
											minRows: 2,
											maxRows: 5,
											autoFocus: this.props.shouldAutoFocusComposer,
											onSubmit: this.handleSubmit,
											onInputMouseDown: this.handleInputMouseDown,
											hasActiveBorderOnFocus: !1,
											utmContent: e,
									  });
							},
						},
						{
							key: 'renderTitle',
							value: function() {
								var e = this.props,
									t = e.organizationName,
									n = e.users;
								return !n ||
									n.isEmpty() ||
									(1 === n.size && !n.first().name) ||
									n.every(function(e) {
										return !e.name;
									})
									? f.a.createElement('span', null, t)
									: f.a.createElement(Ge, { users: n });
							},
						},
						{
							key: 'renderWelcomeMessage',
							value: function() {
								if (!this.props.welcomeMessageActive) return null;
								var e = this.props,
									t = e.backgroundColor,
									n = e.foregroundColor,
									r = e.users,
									a = e.showProfileIcon;
								return f.a.createElement(
									ze,
									{
										message: this.renderMessage(),
										title: this.renderTitle(),
										users: r,
										backgroundColor: t,
										foregroundColor: n,
										showProfileIcon: a,
										onProfileClick: this.handleProfileClick,
										showDismissIcon: Object(Ye.b)(),
										onDismissClick: this.handleClick,
									},
									this.renderComposer()
								);
							},
						},
						{
							key: 'render',
							value: function() {
								var e = Object(Ye.b)() ? ve.a : he.a;
								return f.a.createElement(
									e,
									{
										ariaMessage: this.getCalloutMessage(),
										onResize: this.handleResize,
										onClick: this.handleClick,
									},
									this.renderWelcomeMessage()
								);
							},
						},
						{
							key: 'linkifiedMessageContent',
							get: function() {
								return Object(ie.findDOMNode)(this._bodyNode).innerHTML;
							},
						},
					]),
					t
				);
			})(_.Component);
		(nt.propTypes = {
			welcomeMessageActive: _.PropTypes.bool,
			sender: _.PropTypes.object,
			users: _.PropTypes.object,
			organizationName: _.PropTypes.string,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			showProfileIcon: _.PropTypes.bool,
			onProfileClick: _.PropTypes.func,
			shouldAutoFocusComposer: _.PropTypes.bool,
			isFirstPopup: _.PropTypes.bool,
			isTriggeredFromAPI: _.PropTypes.bool,
			actions: _.PropTypes.shape({
				showWelcomeMessage: _.PropTypes.func.isRequired,
				hideWelcomeMessage: _.PropTypes.func.isRequired,
				dismissWelcomeMessage: _.PropTypes.func.isRequired,
				openChat: _.PropTypes.func.isRequired,
				openSidebar: _.PropTypes.func.isRequired,
				iframeOverrideSize: _.PropTypes.func.isRequired,
				createConversation: _.PropTypes.func.isRequired,
				goToConversationList: _.PropTypes.func.isRequired,
				goToNewConversation: _.PropTypes.func.isRequired,
			}),
		}),
			(nt.defaultProps = { users: Object(se.List)() });
		var rt = oe()(
				Object(ge.a)(['activeColor', 'backgroundColor', 'foregroundColor']),
				Object(h.connect)(
					function(e) {
						return {
							welcomeMessageActive: e.WelcomeMessage.active,
							shouldAutoFocusComposer: e.WelcomeMessage.autoFocus,
							showProfileIcon: !Object(Qe.c)(e).isEmpty(),
							message: Object(Xe.j)(e),
							sender: Object(Xe.g)(e),
							users: Object(Xe.h)(e),
							isFirstPopup: Object($e.a)(e),
							isTriggeredFromAPI: Object($e.b)(e),
							organizationName: Object(G.k)(e),
							onlineReason: Object(Y.b)(e),
						};
					},
					function(e) {
						return {
							actions: Object(g.bindActionCreators)(
								{
									showWelcomeMessage: Je.showWelcomeMessage,
									hideWelcomeMessage: Je.hideWelcomeMessage,
									dismissWelcomeMessage: Je.dismissWelcomeMessage,
									createConversation: Ze.a,
									openChat: D.openChat,
									openSidebar: D.openSidebar,
									goToConversationList: D.goToConversationList,
									goToNewConversation: D.goToNewConversation,
									iframeOverrideSize: D.iframeOverrideSize,
									trackImpression: et.c,
								},
								e
							),
						};
					}
				)
			)(nt),
			at = n(595),
			ot = (function(e) {
				function t() {
					var e, n, r, o;
					i()(this, t);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(n = r = l()(
							this,
							(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
						)),
						(r.state = { step: 1, body: void 0, email: void 0 }),
						(r.handleComposerSubmit = function(e) {
							(r.preMessageBody = Object(ie.findDOMNode)(
								r._bodyNode
							).innerHTML),
								r.setState({ body: e, step: 2 });
						}),
						(r.handleEmailCaptureSubmit = function(e) {
							var t = e.email,
								n = r.props,
								a = n.onSubmit,
								o = n.sender,
								i = n.users;
							a &&
								a({
									body: r.state.body,
									attributes: {
										preMessages: [
											{ body: r.preMessageBody, sender: o, senders: i },
										],
									},
									email: t,
								});
						}),
						(o = n),
						l()(r, o)
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'renderMessage',
							value: function() {
								var e = this;
								switch (this.state.step) {
									case 1:
										return f.a.createElement(
											re.a,
											{
												ref: function(t) {
													e._bodyNode = t;
												},
												properties: {
													target: '_blank',
													rel: 'noopener noreferrer nofollower',
												},
											},
											this.props.message
										);
									case 2:
										return at.a.renderTitle();
									default:
										return;
								}
							},
						},
						{
							key: 'renderTitle',
							value: function() {
								var e = this.props,
									t = e.organizationName,
									n = e.users;
								return this.state.step > 1
									? null
									: !n ||
									  n.isEmpty() ||
									  (1 === n.size && !n.first().name) ||
									  n.every(function(e) {
											return !e.name;
									  })
									? f.a.createElement('span', null, t)
									: f.a.createElement(Ge, { users: this.props.users });
							},
						},
						{
							key: 'renderStep',
							value: function() {
								var e = tt.e.AWAY_MESSAGE_COMPOSER;
								if (this.props.isMobile)
									return f.a.createElement(be, {
										onMouseDown: this.props.onInputMouseDown,
										utmContent: e,
									});
								switch (this.state.step) {
									case 1:
										return f.a.createElement(ce.a, {
											size: 'medium',
											variant: 'minimal',
											isAway: !0,
											minRows: 2,
											maxRows: 5,
											autoFocus: !1,
											onSubmit: this.handleComposerSubmit,
											hasActiveBorderOnFocus: !1,
											utmContent: e,
										});
									case 2:
										return f.a.createElement(at.a, {
											backgroundColor: this.props.backgroundColor,
											textColor: this.props.textColor,
											endUser: this.props.endUser,
											onSubmit: this.handleEmailCaptureSubmit,
										});
									default:
										return;
								}
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.users,
									n = e.backgroundColor,
									r = e.foregroundColor,
									a = e.showProfileIcon,
									o = e.onProfileClick,
									i = e.showDismissIcon,
									s = e.onDismissClick;
								return f.a.createElement(
									ze,
									{
										users: 1 === this.state.step ? t : void 0,
										backgroundColor: n,
										foregroundColor: r,
										showProfileIcon: 1 === this.state.step && a,
										onProfileClick: o,
										title: this.renderTitle(),
										message: this.renderMessage(),
										showDismissIcon: i,
										onDismissClick: s,
									},
									this.renderStep()
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		(ot.propTypes = {
			isMobile: _.PropTypes.bool,
			awayMessageActive: _.PropTypes.bool,
			sender: _.PropTypes.object,
			users: _.PropTypes.object,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			textColor: _.PropTypes.string,
			showProfileIcon: _.PropTypes.bool,
			organizationName: _.PropTypes.string,
			onProfileClick: _.PropTypes.func,
			showDismissIcon: _.PropTypes.bool,
			onDismissClick: _.PropTypes.func,
			onInputMouseDown: _.PropTypes.func,
			onSubmit: _.PropTypes.func,
		}),
			(ot.defaultProps = { users: Object(se.List)() });
		var it = ot,
			st = n(136),
			ct = n(92),
			ut = (function(e) {
				function t() {
					var e, n, r, o;
					i()(this, t);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(n = r = l()(
							this,
							(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
						)),
						(r.handleResize = function(e) {
							var t = e.height;
							r.props.actions.iframeOverrideSize({ height: t + 'px' });
						}),
						(r.handleClick = function() {
							r.props.awayMessageActive
								? r.props.actions.hideAwayMessage()
								: r.props.actions.openChat();
						}),
						(r.handleProfileClick = function() {
							r.props.actions.hideAwayMessage(),
								r.props.actions.goToConversationList();
						}),
						(r.handleInputMouseDown = function(e) {
							Object(Ye.b)() &&
								(e.preventDefault(),
								r.props.actions.hideAwayMessage(),
								r.props.actions.goToNewConversation());
						}),
						(r.handleSubmit = function(e) {
							var t = e.body,
								n = e.attributes,
								a = void 0 === n ? {} : n,
								o = e.email,
								i = r.props,
								s = i.orgId,
								c = i.endUser,
								u = i.anonymousId,
								l = i.isTriggeredFromAPI,
								d = i.onlineReason;
							(c && 'LEAD' !== c.type) || r.props.actions.identifyLead(s, u, o),
								r.props.actions.createConversation({
									body: t,
									attributes: E()({}, a, {
										email: o,
										isTriggeredFromAPI: l,
										onlineReason: d,
									}),
								}),
								setTimeout(function() {
									r.props.actions.hideAwayMessage();
								}, 2500);
						}),
						(o = n),
						l()(r, o)
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'componentWillMount',
							value: function() {
								this.props.awayMessageActive &&
									this.props.actions.trackImpression({
										view: tt.e.AWAY_MESSAGE_COMPOSER,
									});
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								!this.props.awayMessageActive &&
									e.awayMessageActive &&
									this.props.actions.trackImpression({
										view: tt.e.AWAY_MESSAGE_COMPOSER,
									});
							},
						},
						{
							key: 'renderAwayMessage',
							value: function() {
								if (!this.props.awayMessageActive) return null;
								var e = this.props,
									t = e.endUser,
									n = e.backgroundColor,
									r = e.foregroundColor,
									a = e.textColor,
									o = e.users,
									i = e.sender,
									s = e.message,
									c = e.showProfileIcon,
									u = e.organizationName;
								return f.a.createElement(it, {
									isMobile: Object(Ye.b)(),
									message: s,
									endUser: t,
									users: o,
									sender: i,
									backgroundColor: n,
									foregroundColor: r,
									textColor: a,
									showProfileIcon: c,
									organizationName: u,
									onProfileClick: this.handleProfileClick,
									showDismissIcon: Object(Ye.b)(),
									onDismissClick: this.handleClick,
									onSubmit: this.handleSubmit,
									onInputMouseDown: this.handleInputMouseDown,
								});
							},
						},
						{
							key: 'render',
							value: function() {
								var e = Object(Ye.b)() ? ve.a : he.a;
								return f.a.createElement(
									e,
									{ onResize: this.handleResize, onClick: this.handleClick },
									this.renderAwayMessage()
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		ut.propTypes = {
			welcomeMessageActive: _.PropTypes.bool,
			users: _.PropTypes.object,
			sender: _.PropTypes.object,
			message: _.PropTypes.node,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			textColor: _.PropTypes.string,
			awayMessageActive: _.PropTypes.bool,
			showProfileIcon: _.PropTypes.bool,
			endUser: _.PropTypes.object,
			anonymousId: _.PropTypes.string,
			orgId: _.PropTypes.number,
			organizationName: _.PropTypes.string,
			isTriggeredFromAPI: _.PropTypes.bool,
			actions: _.PropTypes.shape({
				showAwayMessage: _.PropTypes.func.isRequired,
				hideAwayMessage: _.PropTypes.func.isRequired,
				iframeOverrideSize: _.PropTypes.func.isRequired,
				createConversation: _.PropTypes.func.isRequired,
				identifyLead: _.PropTypes.func.isRequired,
				goToConversationList: _.PropTypes.func.isRequired,
				goToNewConversation: _.PropTypes.func.isRequired,
				openChat: _.PropTypes.func.isRequired,
			}),
		};
		var lt = oe()(
				Object(ge.a)([
					'activeColor',
					'textColor',
					'foregroundColor',
					'backgroundColor',
				]),
				Object(h.connect)(
					function(e) {
						return {
							awayMessageActive: e.AwayMessage.active,
							showProfileIcon: !Object(Qe.c)(e).isEmpty(),
							orgId: e.Bootstrap.orgId,
							endUser: e.EndUser.currentEndUser,
							anonymousId: e.Bootstrap.anonymousId,
							message: Object(Xe.a)(e),
							thankYouMessage: Object(Xe.i)(e),
							organizationName: Object(G.k)(e),
							sender: Object(Xe.g)(e),
							users: Object(Xe.h)(e),
							isTriggeredFromAPI: (function(e) {
								return (function(e) {
									return e.AwayMessage;
								})(e).triggeredFromWidgetAPI;
							})(e),
							onlineReason: Object(Y.b)(e),
						};
					},
					function(e) {
						return {
							actions: Object(g.bindActionCreators)(
								{
									showAwayMessage: st.showAwayMessage,
									hideAwayMessage: st.hideAwayMessage,
									createConversation: Ze.a,
									iframeOverrideSize: D.iframeOverrideSize,
									identifyLead: ct.e,
									goToConversationList: D.goToConversationList,
									goToNewConversation: D.goToNewConversation,
									openChat: D.openChat,
									trackImpression: et.c,
								},
								e
							),
						};
					}
				)
			)(ut),
			dt = n(877),
			pt = n(290),
			_t = n(593),
			ft = n.n(_t),
			mt = (function(e) {
				function t() {
					return (
						i()(this, t),
						l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'renderComposer',
							value: function() {
								var e = tt.e.WELCOME_MESSAGE_COMPOSER;
								return this.props.isMobile
									? f.a.createElement(be, {
											onMouseDown: this.props.onInputMouseDown,
											utmContent: e,
									  })
									: f.a.createElement(ce.a, {
											size: 'medium',
											variant: 'minimal',
											minRows: 1,
											maxRows: 5,
											autoFocus: !1,
											onSubmit: this.props.onComposerSubmit,
											hasActiveBorderOnFocus: !1,
											utmContent: e,
									  });
							},
						},
						{
							key: 'renderCtaButton',
							value: function() {
								var e = this.props,
									t = e.ctaCopy,
									n = e.onCtaClick,
									r = e.ctaHref,
									a = e.activeColor;
								return f.a.createElement(
									pt.a,
									{
										hollow: !0,
										className: ft.a.CtaButton,
										href: r,
										onClick: n,
										brandPrimary: a,
										style: { borderWidth: '0px' },
									},
									t
								);
							},
						},
						{
							key: 'renderCta',
							value: function() {
								switch (this.props.ctaType) {
									case 'SCHEDULE_MEETING':
									case 'LINK_TO_URL':
										return this.renderCtaButton();
									case 'CHAT_RESPONSE':
										return this.renderComposer();
									default:
										return null;
								}
							},
						},
						{
							key: 'renderTitle',
							value: function() {
								var e = this.props,
									t = e.organizationName,
									n = e.users;
								return !n ||
									n.isEmpty() ||
									(1 === n.size && !n.first().name) ||
									n.every(function(e) {
										return !e.name;
									})
									? f.a.createElement('span', null, t)
									: f.a.createElement(Ge, { users: n });
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.content,
									n = e.users,
									r = e.backgroundColor,
									a = e.foregroundColor,
									o = e.showDismissIcon,
									i = e.onDismissClick;
								return f.a.createElement(
									'div',
									{ style: { position: 'relative' } },
									f.a.createElement(
										ze,
										{
											backgroundColor: r,
											foregroundColor: a,
											users: n,
											title: this.renderTitle(),
											message: f.a.createElement('div', {
												className: ft.a.CampaignBody,
												dangerouslySetInnerHTML: { __html: t },
											}),
											showDismissIcon: o,
											onDismissClick: i,
										},
										this.renderCta()
									)
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		mt.propTypes = {
			isMobile: _.PropTypes.bool,
			sender: _.PropTypes.object,
			users: _.PropTypes.object,
			content: _.PropTypes.string,
			ctaType: _.PropTypes.string,
			ctaCopy: _.PropTypes.string,
			onCtaClick: _.PropTypes.func,
			ctaHref: _.PropTypes.string,
			backgroundColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			activeColor: _.PropTypes.string,
			organizationName: _.PropTypes.string,
			showProfileIcon: _.PropTypes.bool,
			onProfileClick: _.PropTypes.func,
			showDismissIcon: _.PropTypes.bool,
			onDismissClick: _.PropTypes.func,
			onInputMouseDown: _.PropTypes.func,
			onComposerSubmit: _.PropTypes.func,
		};
		var bt = mt,
			gt = n(6),
			ht = n(288),
			vt = n(26),
			Et = n(57),
			yt = n(96),
			Ot = n(125),
			Ct = (function(e) {
				function t() {
					var e, n, r, o;
					i()(this, t);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(n = r = l()(
							this,
							(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
						)),
						(r.state = { dismissed: !1 }),
						(r.handleInputMouseDown = function(e) {
							e.preventDefault();
							var t = r.props,
								n = t.ctaType,
								a = t.isMobile;
							if ('CHAT_RESPONSE' === n && a) {
								var o = r.props,
									i = o.content,
									s = o.message,
									c = o.sender,
									u = o.campaignId;
								r.props.actions.hideOnStartup(),
									r.props.actions.goToNewConversationForCampaign({
										inboxId: s.inboxId,
										campaignId: u,
										messages: [{ id: Object(Ot.a)(), body: i, sender: c }],
										campaignMessage: s,
									}),
									r.props.actions.markAsRead({ messageId: s.id });
							}
						}),
						(r.handleComposerSubmit = function(e) {
							var t = r.props,
								n = t.message,
								a = t.campaignId,
								o = t.content,
								i = t.sender,
								s = t.users;
							r.props.actions.hideOnStartup(),
								r.props.actions.createConversation({
									body: e,
									inboxId: n.inboxId,
									attributes: {
										relatedCampaignId: a,
										preMessages: [
											{ id: Object(Ot.a)(), body: o, sender: i, senders: s },
										],
									},
								}),
								r.props.actions.createConversationEvent({
									conversationId: n.conversationId,
									type: Et.e,
								}),
								r.props.actions.markAsRead({ messageId: n.id }),
								r.props.actions.unsetMostRecentlyReadCampaignConversation();
						}),
						(r.handleCtaClick = function() {
							var e = r.props,
								t = e.message,
								n = e.sender;
							r.props.actions.hideOnStartup(),
								r.props.actions.createConversationEvent({
									conversationId: t.conversationId,
									type: Et.a,
								}),
								r.props.actions.markAsRead({ messageId: t.id }),
								'LINK_TO_URL' === r.props.ctaType &&
									Object(Ye.c)() &&
									window.open(r.props.ctaHref, '_blank'),
								r.props.actions.unsetMostRecentlyReadCampaignConversation(),
								'SCHEDULE_MEETING' === r.props.ctaType &&
									r.props.actions.startScheduleMeetingFlow(n.id, {
										campaignMessage: t,
									});
						}),
						(r.handleDismissClick = function() {
							var e = r.props.message;
							r.props.actions.hideOnStartup(),
								r.setState({ dismissed: !0 }, function() {
									window.setTimeout(function() {
										r.props.actions.createConversationEvent({
											conversationId: e.conversationId,
											type: Et.b,
										}),
											r.props.actions.markAsRead({ messageId: e.id }),
											r.props.actions.unsetMostRecentlyReadCampaignConversation();
									}, 220);
								});
						}),
						(r.handleResize = function(e) {
							var t = e.height;
							r.props.actions.iframeOverrideSize({ height: t + 'px' });
						}),
						(o = n),
						l()(r, o)
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'componentWillMount',
							value: function() {
								this.props.actions.trackImpression({
									view: tt.e.WELCOME_MESSAGE_COMPOSER,
								});
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.content,
									n = e.backgroundColor,
									r = e.foregroundColor,
									a = e.organizationName,
									o = e.activeColor,
									i = e.ctaCopy,
									s = e.ctaHref,
									c = e.ctaType,
									u = e.users,
									l = e.isOnline,
									d = Object(Ye.b)(),
									p = d ? ve.a : he.a;
								return f.a.createElement(
									p,
									{
										onResize: this.handleResize,
										onClick: this.handleDismissClick,
									},
									!this.state.dismissed &&
										f.a.createElement(bt, {
											users: u,
											content: t,
											ctaCopy: i,
											ctaHref: s,
											ctaType: c,
											backgroundColor: n,
											foregroundColor: r,
											activeColor: o,
											isOnline: l,
											isMobile: d,
											showDismissIcon: d,
											organizationName: a,
											onComposerSubmit: this.handleComposerSubmit,
											onInputMouseDown: this.handleInputMouseDown,
											onDismissClick: this.handleDismissClick,
											onCtaClick: this.handleCtaClick,
										})
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		(Ct.propTypes = {
			message: _.PropTypes.object.isRequired,
			sender: _.PropTypes.object,
			users: _.PropTypes.object,
			campaignId: _.PropTypes.number.isRequired,
			avatarUrl: _.PropTypes.string,
			content: _.PropTypes.node,
			ctaType: _.PropTypes.oneOf([
				'LINK_TO_URL',
				'CHAT_RESPONSE',
				'SCHEDULE_MEETING',
			]),
			ctaCopy: _.PropTypes.string,
			ctaHref: _.PropTypes.string,
			backgroundColor: _.PropTypes.string.isRequired,
			foregroundColor: _.PropTypes.string.isRequired,
			activeColor: _.PropTypes.string.isRequired,
			isOnline: _.PropTypes.bool.isRequired,
			isMobile: _.PropTypes.bool,
			organizationName: _.PropTypes.string,
			actions: _.PropTypes.shape({
				createConversation: _.PropTypes.func.isRequired,
				iframeOverrideSize: _.PropTypes.func.isRequired,
				markAsRead: _.PropTypes.func.isRequired,
				createConversationEvent: _.PropTypes.func.isRequired,
				startScheduleMeetingFlow: _.PropTypes.func.isRequired,
				goToNewConversationForCampaign: _.PropTypes.func.isRequired,
				hideOnStartup: _.PropTypes.func.isRequired,
				unsetMostRecentlyReadCampaignConversation: _.PropTypes.func.isRequired,
			}),
		}),
			(Ct.defaultProps = { isMobile: Object(Ye.b)() });
		var Tt = oe()(
				Object(ge.a)(['backgroundColor', 'foregroundColor', 'activeColor']),
				Object(h.connect)(
					function(e, t) {
						var n = t.message,
							r = n.attributes,
							a = r.cta,
							o = r.senderId,
							i = r.noSenderId,
							s = r.campaignId,
							c = r.automaticSender,
							u =
								!!o &&
								(function(e, t) {
									var n =
											arguments.length > 2 &&
											void 0 !== arguments[2] &&
											arguments[2],
										r =
											arguments.length > 3 &&
											void 0 !== arguments[3] &&
											arguments[3];
									if (n) return !1;
									var a = Object(Xe.k)(e);
									return r && a ? a : Object(gt.k)(e)[t];
								})(e, o, i, c),
							l = u ? se.List.of(u) : Object(Xe.f)(e),
							d = l.first();
						return {
							campaignId: s,
							message: n,
							content: n.body,
							sender: d,
							ctaCopy: a && a.copy,
							ctaType: a && a.CtaType,
							ctaHref: a && a.UrlLink,
							isOnline: Object(Y.i)(e, t),
							users: l,
							organizationName: Object(G.k)(e),
						};
					},
					function(e) {
						return {
							actions: Object(g.bindActionCreators)(
								{
									iframeOverrideSize: D.iframeOverrideSize,
									goToNewConversationForCampaign:
										D.goToNewConversationForCampaign,
									markAsRead: vt.q,
									createConversationEvent: vt.c,
									startScheduleMeetingFlow: yt.h,
									createConversation: Ze.a,
									hideOnStartup: ht.b,
									unsetMostRecentlyReadCampaignConversation: vt.E,
									trackImpression: et.c,
								},
								e
							),
						};
					}
				)
			)(Ct),
			It = n(254),
			Mt = n.n(It),
			Pt = n(113),
			At = n(114),
			St = n(300),
			Dt = n(487),
			wt = n.n(Dt),
			kt = n(359),
			Rt = n.n(kt),
			jt = n(873),
			Nt = n.n(jt),
			Bt = { width: '35px', height: '35px' },
			Ut = (function(e) {
				function t(e) {
					i()(this, t);
					var n = l()(this, (t.__proto__ || a()(t)).call(this, e));
					return (n.state = { hovered: !1 }), n;
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'style',
							value: function() {
								var e = this.props.backgroundColor || '9A9A9A';
								return this.state.hovered
									? {
											backgroundColor: '#' + e,
											borderColor: '#' + e,
											color: 'white',
									  }
									: {
											backgroundColor: 'white',
											borderColor: '#' + e,
											color: '#' + e,
									  };
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this;
								return f.a.createElement(
									'button',
									{
										className: this.props.className,
										onMouseOver: function() {
											return e.setState({ hovered: !0 });
										},
										onMouseOut: function() {
											return e.setState({ hovered: !1 });
										},
										onClick: this.props.onClick,
										style: this.style(),
									},
									this.props.children
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		Ut.propTypes = {
			className: _.PropTypes.string,
			backgroundColor: _.PropTypes.string,
			children: _.PropTypes.string,
			onClick: _.PropTypes.func,
		};
		var Lt = (function(e) {
			function t(e) {
				i()(this, t);
				var n = l()(this, (t.__proto__ || a()(t)).call(this, e));
				return (n.state = { denied: !1 }), n;
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'handleClick',
						value: function() {
							return this.props.actions.recordConsent();
						},
					},
					{
						key: 'handleCloseTakeover',
						value: function() {
							var e = this;
							this.props.actions.cancelPrivacyPolicyFlow(),
								this.props.emailCaptureSliderSubmitted
									? (this.props.actions.emailCaptureSliderDismissed(),
									  setTimeout(function() {
											e.props.actions.emailCaptureSliderCleared(),
												e.props.actions.markAsRead({
													messageId: e.props.message.id,
												});
									  }, 1e3))
									: (this.props.actions.closeSidebarWithTween(),
									  setTimeout(this.props.actions.closeSidebar, 200));
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props.widgetHalfHeight;
							return f.a.createElement(
								'div',
								{
									className: b()(
										t ? wt.a.ConsentTakeoverHalfHeight : wt.a.ConsentTakeover,
										wt.a.ConsentTakeoverShared,
										{ small: this.props.emailCaptureSliderSubmitted }
									),
								},
								f.a.createElement(
									'div',
									{ className: 'consent-takeover-content' },
									f.a.createElement(
										'div',
										{ className: 'consent-content' },
										f.a.createElement(
											'div',
											{ className: 'header' },
											f.a.createElement(
												'div',
												{ className: 'flex' },
												this.state.denied &&
													f.a.createElement(
														'div',
														{
															className: 'go-back',
															onClick: function() {
																return e.setState({ denied: !1 });
															},
														},
														f.a.createElement(we.a, { src: Nt.a })
													),
												f.a.createElement(
													'div',
													{
														className: b()('title', {
															'denied-state': this.state.denied,
														}),
													},
													f.a.createElement(St.a, {
														className: 'Avatar',
														type: 'circle',
														style: Bt,
														color: '#' + this.props.backgroundColor,
													}),
													f.a.createElement(
														'div',
														{ className: 'bot-name' },
														'Data Protection Bot'
													)
												)
											),
											f.a.createElement(
												'div',
												{
													className: 'dismiss',
													onClick: function() {
														return e.handleCloseTakeover();
													},
												},
												f.a.createElement(we.a, { src: Rt.a })
											)
										),
										f.a.createElement(
											'div',
											{ className: 'body-wrapper' },
											f.a.createElement(
												'div',
												{ className: 'body' },
												this.state.denied
													? this.props.consentDeclinedMessage
													: f.a.createElement(
															'div',
															null,
															this.props.consentMessage,
															this.props.privacyPolicyLink &&
																f.a.createElement(
																	'span',
																	null,
																	f.a.createElement('br', null),
																	f.a.createElement('br', null),
																	f.a.createElement(
																		'a',
																		{
																			href: this.props.privacyPolicyLink,
																			target: '_blank',
																			rel: 'noopener noreferrer',
																		},
																		this.props.privacyPolicyLinkText ||
																			this.props.privacyPolicyLink
																	)
																)
													  )
											)
										),
										f.a.createElement(
											'div',
											{ className: 'footer' },
											!this.state.denied &&
												f.a.createElement(
													'div',
													{ className: 'gdpr-consent-buttons' },
													f.a.createElement(
														Ut,
														{
															className: 'accept',
															backgroundColor: this.props.backgroundColor,
															onClick: function() {
																return e.handleClick();
															},
														},
														this.props.giveConsentLabel
													),
													f.a.createElement(
														Ut,
														{
															onClick: function() {
																e.setState({ denied: !0 });
															},
														},
														this.props.declineConsentLabel
													)
												)
										)
									),
									this.props.showBranding &&
										f.a.createElement(
											'div',
											{ className: 'consent-footer' },
											f.a.createElement(le.a, {
												utmContent: tt.e.CONSENT_MODAL,
											})
										)
								)
							);
						},
					},
				]),
				t
			);
		})(_.Component);
		Lt.propTypes = {
			message: _.PropTypes.object,
			backgroundColor: _.PropTypes.string,
			showBranding: _.PropTypes.bool,
			consentMessage: _.PropTypes.string,
			privacyPolicyLink: _.PropTypes.string,
			privacyPolicyLinkText: _.PropTypes.string,
			consentDeclinedMessage: _.PropTypes.string,
			viewOptInButtonLabel: _.PropTypes.string,
			giveConsentLabel: _.PropTypes.string,
			declineConsentLabel: _.PropTypes.string,
			emailCaptureSliderSubmitted: _.PropTypes.bool,
			actions: _.PropTypes.shape({
				markAsRead: _.PropTypes.func.isRequired,
				recordConsent: _.PropTypes.func.isRequired,
				cancelPrivacyPolicyFlow: _.PropTypes.func.isRequired,
				closeSidebar: _.PropTypes.func.isRequired,
				closeSidebarWithTween: _.PropTypes.func.isRequired,
				emailCaptureSliderDismissed: _.PropTypes.func.isRequired,
				emailCaptureSliderCleared: _.PropTypes.func.isRequired,
			}),
			widgetHalfHeight: _.PropTypes.bool,
		};
		var Wt = Object(h.connect)(function(e) {
				return { widgetHalfHeight: Object(z.m)(e) };
			})(Lt),
			xt = oe()(
				Object(h.connect)(
					function(e) {
						var t = Object(At.d)(e);
						return {
							message: Object(gt.v)(e).message,
							backgroundColor: Object(G.n)(e).backgroundColor,
							emailCaptureSliderSubmitted: Object(z.f)(e),
							showBranding: Object(G.m)(e),
							consentMessage: t.message,
							privacyPolicyLink: t.privacyPolicyLink,
							privacyPolicyLinkText: t.privacyPolicyLinkText,
							consentDeclinedMessage: t.consentDeclinedMessage,
							consentConfirmationMessage: t.consentConfirmationMessage,
							viewOptInButtonLabel: t.viewOptInButtonLabel,
							giveConsentLabel: t.giveConsentLabel,
							declineConsentLabel: t.declineConsentLabel,
						};
					},
					function(e) {
						return {
							actions: Object(g.bindActionCreators)(
								{
									markAsRead: vt.q,
									recordConsent: Pt.d,
									cancelPrivacyPolicyFlow: Pt.b,
									closeSidebar: D.closeSidebar,
									closeSidebarWithTween: D.closeSidebarWithTween,
									emailCaptureSliderDismissed: D.emailCaptureSliderDismissed,
									emailCaptureSliderCleared: D.emailCaptureSliderCleared,
									trackImpression: et.c,
								},
								e
							),
						};
					}
				),
				Mt()({
					componentWillMount: function() {
						this.props.actions.trackImpression({ view: tt.e.CONSENT_MODAL });
					},
				})
			)(Wt),
			Ft = n(872),
			Ht = n(869),
			Kt = n(859),
			qt = n(441),
			zt = n(36),
			Gt = n(59),
			Vt = n.n(Gt),
			Yt = n(73),
			Zt = n.n(Yt);
		n(1112);
		Object(Ye.b)() &&
			Object(Ye.a)() &&
			(function(e) {
				var t = e.createElement,
					n = [
						'clientX',
						'clientY',
						'pageX',
						'pageY',
						'screenX',
						'screenY',
						'radiusX',
						'radiusY',
					],
					r = { downPos: {}, lastPos: {} },
					a = function(e) {
						if (!e) return !1;
						var t = e.getAttribute('disabled');
						return !1 !== t && null !== t;
					},
					o = function(e, t) {
						var n = t || e.currentTarget;
						n && !a(n) && n.focus();
					},
					i = {
						input: function(e) {
							o(e), e.stopPropagation();
						},
						textarea: function(e) {
							o(e), e.stopPropagation();
						},
						select: function(e) {
							o(e), e.stopPropagation();
						},
						label: function(e) {
							var t = void 0,
								n = e.currentTarget.getAttribute('for');
							(t = n
								? document.getElementById(n)
								: e.currentTarget.querySelectorAll(
										'input, textarea, select'
								  )[0]) && o(e, t);
						},
					},
					s = function(e, t) {
						if (('function' == typeof t.persist && t.persist(), e))
							for (var r = 0; r < n.length; r += 1) {
								var a = n[r];
								t[a] = e[a];
							}
					},
					c = function(e) {
						r.invalid = (e.touches && e.touches.length > 1) || r.invalid;
					},
					u = function(e, t) {
						var n = !(
							!r.touched &&
							(!r.lastTouchDate || new Date().getTime() > r.lastTouchDate + 1e3)
						);
						n && t.target !== r.target && t.preventDefault(),
							'function' != typeof e || n || e(t),
							'click' === t.type &&
								((r.invalid = !1), (r.touched = !1), (r.moved = !1));
					},
					l = function(e, t) {
						var n = {};
						for (var o in t) n[o] = t[o];
						return (
							(n.onClick = u.bind(null, t.onClick)),
							(n.onMouseDown = u.bind(null, t.onMouseDown)),
							(n.onMouseMove = u.bind(null, t.onMouseMove)),
							(n.onMouseUp = u.bind(null, t.onMouseUp)),
							(n.onTouchStart = function(e, t) {
								(r.invalid = !1),
									(r.moved = !1),
									(r.touched = !0),
									(r.target = t.target),
									(r.lastTouchDate = new Date().getTime()),
									s(t.touches[0], r.downPos),
									s(t.touches[0], r.lastPos),
									c(t),
									'function' == typeof e && e(t);
							}.bind(null, t.onTouchStart)),
							(n.onTouchMove = function(e, t) {
								(r.touched = !0),
									(r.lastTouchDate = new Date().getTime()),
									s(t.touches[0], r.lastPos),
									c(t),
									(Math.abs(r.downPos.clientX - r.lastPos.clientX) > 8 ||
										Math.abs(r.downPos.clientY - r.lastPos.clientY) > 8) &&
										(r.moved = !0),
									'function' == typeof e && e(t);
							}.bind(null, t.onTouchMove)),
							(n.onTouchEnd = function(e, t, n, o) {
								if (
									((r.touched = !0),
									(r.lastTouchDate = new Date().getTime()),
									c(o),
									'function' == typeof e && e(o),
									!r.invalid && !r.moved)
								) {
									var u = o.currentTarget.getBoundingClientRect();
									r.lastPos.clientX - (r.lastPos.radiusX || 0) <= u.right &&
										r.lastPos.clientX + (r.lastPos.radiusX || 0) >= u.left &&
										r.lastPos.clientY - (r.lastPos.radiusY || 0) <= u.bottom &&
										r.lastPos.clientY + (r.lastPos.radiusY || 0) >= u.top &&
										(a(o.currentTarget) ||
											(function(e) {
												return e.classList.contains('disable-fastclick');
											})(o.currentTarget) ||
											('function' == typeof t &&
												(s(r.lastPos, o),
												(function(e) {
													'function' == typeof e.persist && e.persist(),
														(e.fastclick = !0),
														(e.type = 'click'),
														(e.button = 0);
												})(o),
												t(o)),
											!o.defaultPrevented && i[n] && i[n](o)));
								}
							}.bind(null, t.onTouchEnd, t.onClick, e)),
							'function' == typeof Zt.a && Zt()(n),
							n
						);
					};
				if (
					((e.createElement = function() {
						var e = Array.prototype.slice.call(arguments),
							n = e[0],
							r = e[1];
						return (
							n &&
								'string' == typeof n &&
								((r && 'function' == typeof r.onClick) || i[n]) &&
								(e[1] = l(n, r || {})),
							t.apply(null, e)
						);
					}),
					'object' === Vt()(e.DOM))
				)
					for (var d in e.DOM) e.DOM[d] = e.createElement.bind(null, d);
			})(f.a);
		var Jt = (function(e) {
			function t() {
				return (
					i()(this, t),
					l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
				);
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'componentWillMount',
						value: function() {
							if (!this.props.hasInitializedApi)
								return this.props.actions.initializeApi();
						},
					},
					{
						key: 'renderWelcomeMessage',
						value: function() {
							if (
								[zt.q, zt.r].includes(this.props.iframeSize) &&
								'ANNOUNCEMENT_PREVIEW' !==
									(null != this.props.preview
										? this.props.preview.type
										: void 0)
							)
								return Object(_.createElement)(rt, { key: 'welcome-message' });
						},
					},
					{
						key: 'renderAwayMessage',
						value: function() {
							if ([zt.f, zt.g].includes(this.props.iframeSize))
								return Object(_.createElement)(lt, { key: 'away-message' });
						},
					},
					{
						key: 'renderMinimized',
						value: function() {
							var e = this.props,
								t = e.activationTakeoverOpen,
								n = e.preview;
							if ([zt.j, zt.k].includes(this.props.iframeSize))
								return Object(_.createElement)(te.a, {
									key: n.message.id,
									message: n.message,
									className: b()({ 'iframe-full-screen': t }),
								});
						},
					},
					{
						key: 'renderMessenger',
						value: function() {
							if (
								this.props.iframeSize === zt.l ||
								this.props.iframeSize === zt.m ||
								this.props.iframeSize === zt.e
							)
								return Object(_.createElement)(ee, { key: 'messenger' });
						},
					},
					{
						key: 'renderActivationTakeover',
						value: function() {
							if (this.props.activationTakeoverOpen)
								return Object(_.createElement)(k, {
									key: 'activation-takeover',
								});
						},
					},
					{
						key: 'renderConsentTakeover',
						value: function() {
							var e = this.props.iframeSize;
							if (
								(e === zt.b || e === zt.d || e === zt.c) &&
								this.props.showConsentTakeover
							)
								return _.DOM.div(
									{
										className: b()(
											'widget-container',
											{ 'widget-container-mobile': Object(Ye.d)() },
											'body-font',
											this.props.fontFamily
										),
									},
									Object(_.createElement)(xt, { key: 'consent-takeover' })
								);
						},
					},
					{
						key: 'renderTakeover',
						value: function() {
							var e = this.props,
								t = e.iframeSize,
								n = e.preview;
							if (
								t === zt.p &&
								'ANNOUNCEMENT_PREVIEW' === (null != n ? n.type : void 0)
							)
								return Object(_.createElement)(Ht.a, {
									key: n.message.id,
									message: n.message,
								});
						},
					},
					{
						key: 'renderEmailCaptureSlider',
						value: function() {
							var e = this.props,
								t = e.iframeSize,
								n = e.preview;
							if (
								t === zt.h &&
								'EMAIL_CAPTURE' === (null != n ? n.type : void 0)
							)
								return Object(_.createElement)(Kt.a, {
									key: n.message.id,
									message: n.message,
								});
						},
					},
					{
						key: 'renderPAWelcomeMessage',
						value: function() {
							var e = this.props,
								t = e.iframeSize,
								n = e.preview;
							if (
								t === zt.r &&
								'ANNOUNCEMENT_PREVIEW' === (null != n ? n.type : void 0)
							)
								return Object(_.createElement)(Tt, {
									key: n.message.id,
									message: n.message,
								});
						},
					},
					{
						key: 'renderPASlider',
						value: function() {
							var e = this.props,
								t = e.iframeSize,
								n = e.preview;
							if (
								t === zt.n &&
								'ANNOUNCEMENT_PREVIEW' === (null != n ? n.type : void 0)
							)
								return Object(_.createElement)(dt.a, {
									key: n.message.id,
									message: n.message,
								});
						},
					},
					{
						key: 'renderMessageSlider',
						value: function() {
							var e = this.props,
								t = e.iframeSize,
								n = e.latestMessage,
								r = e.preview;
							if (
								t === zt.n &&
								n &&
								'RECENT_MESSAGE_PREVIEW' === (null != r ? r.type : void 0)
							)
								return Object(_.createElement)(Ft.a, {
									key: n.get('id'),
									message: n,
									conversationId: n.get('conversationId'),
								});
						},
					},
					{
						key: 'render',
						value: function() {
							return _.DOM.div(
								{
									className: b()(
										'widget-container',
										{ 'widget-container-mobile': Object(Ye.d)() },
										'body-font',
										this.props.fontFamily
									),
								},
								Object(_.createElement)(R.a),
								this.props.iframeRepositionPending
									? void 0
									: [
											this.renderWelcomeMessage(),
											this.renderAwayMessage(),
											this.renderEmailCaptureSlider(),
											this.renderMessenger(),
											this.renderPAWelcomeMessage() ||
												this.renderPASlider() ||
												this.renderMessageSlider() ||
												this.renderMinimized(),
											this.renderActivationTakeover(),
											this.renderTakeover(),
											this.renderConsentTakeover(),
									  ]
							);
						},
					},
				]),
				t
			);
		})(_.Component);
		Jt.propTypes = {
			fontFamily: _.PropTypes.string,
			hasInitializedApi: _.PropTypes.any,
			preview: _.PropTypes.any,
			iframeSize: _.PropTypes.string,
			activationTakeoverOpen: _.PropTypes.any,
			latestMessage: _.PropTypes.object,
			iframeRepositionPending: _.PropTypes.any,
			showConsentTakeover: _.PropTypes.any,
			actions: _.PropTypes.shape({ initializeApi: _.PropTypes.func.isRequired })
				.isRequired,
		};
		t.a = Object(h.connect)(
			function(e) {
				return {
					activationTakeoverOpen: z.a(e),
					latestMessage: Object(Qe.i)(e),
					hasInitializedApi: e.API.hasInitialized,
					preview: Object(gt.v)(e),
					fontFamily: e.Bootstrap.embedConfiguration.theme.fontFamily,
					iframeRepositionPending: z.h(e),
					iframeSize: z.i(e),
					sidebarOpen: z.l(e),
					widgetVisible: z.n(e),
					showConsentTakeover: z.k(e),
					isEmbeddedMessenger: z.g(e),
				};
			},
			function(e) {
				return {
					actions: Object(g.bindActionCreators)({ initializeApi: qt.a }, e),
				};
			}
		)(Jt);
	},
	848: function(e, t, n) {
		'use strict';
		var r = n(88),
			a = n.n(r),
			o = n(21),
			i = n(5),
			s = '@@HYDRATE_STATE',
			c = Object(i.b)(s);
		var u,
			l = n(452),
			d = n(2),
			p = n.n(d),
			_ = n(318),
			f = {
				message: void 0,
				sender: void 0,
				thankYouMessage: void 0,
				campaign: void 0,
				inboxId: void 0,
				attributes: void 0,
			},
			m = n(50),
			b = n.n(m),
			g = n(23),
			h = n(18),
			v = n(6),
			E = n(108),
			y = n(4),
			O = n(3),
			C = y.Xa,
			T = y.x,
			I = y.y,
			M = y.w,
			P = {
				activeCampaignsById: Object(O.Map)(),
				activeCampaignsNoAudienceById: Object(O.Map)(),
			},
			A = n(98),
			S = n(365),
			D = n(189),
			w = n(107),
			k = { attachmentsById: {} },
			R = function(e, t) {
				var n = { status: t, metadata: e },
					r = e.publicUrl;
				return (
					(n = p()({}, n, { url: r })),
					(function(e) {
						return Object(D.a)(e, 'image');
					})(e.mimeType) && (n = p()({}, n, { previewUrl: r })),
					n
				);
			},
			j = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments[1],
					n = Object(S.a)(e.attachmentsById);
				switch (t.type) {
					case w.b:
						return (
							Object(A.a)(t.metadata.ids, function(e) {
								n[e] = p()({}, n[e], {
									status: 'pending',
									metadata: { id: e },
								});
							}),
							p()({}, e, { attachmentsById: n })
						);
					case w.c:
						return (
							Object(A.a)(t.payload, function(e) {
								n[e.id] = p()({}, n[e.id], R(e, 'success'));
							}),
							p()({}, e, { attachmentsById: n })
						);
					case w.a:
						return (
							Object(A.a)(t.metadata.ids, function(e) {
								n[e] = p()({}, n[e], { status: 'failure' });
							}),
							p()({}, e, { attachmentsById: n })
						);
					case w.e:
						return p()({}, e, {
							attachmentsById: n,
							status: t.type,
							error: null,
						});
					case w.f:
						var r = t.payload;
						return (
							(n[r.id] = p()({}, n[r.id], R(r, 'success'))),
							p()({}, e, { attachmentsById: n, status: t.type, error: null })
						);
					case w.d:
						return p()({}, e, {
							attachmentsById: n,
							status: t.type,
							error: t.error,
						});
					default:
						return e;
				}
			},
			N = n(92),
			B = n(135),
			U = n(74),
			L = n(223),
			W = function(e) {
				return '@@widget/externalApi/' + e;
			},
			x = W('WIDGET_API'),
			F = W('EXTERNAL_IDENTIFY_SUCCESS'),
			H = n(45),
			K = function(e) {
				return '@@widget/attributes/' + e;
			},
			q = K('UPDATE_END_USER_ATTRIBUTES'),
			z = K('UPDATE_END_USER_ATTRIBUTES_PENDING'),
			G = K('UPDATE_END_USER_ATTRIBUTES_SUCCESS'),
			V = K('UPDATE_END_USER_ATTRIBUTES_FAILURE'),
			Y = n(46),
			Z = y.c,
			J = y.R,
			Q = {
				currentEndUser: void 0,
				authToken: void 0,
				segmentMembership: [],
				segmentMembershipFetched: !1,
				leadEmail: void 0,
				didConsentToRequestedConsentId: !1,
				externallyModifiedAttributes: void 0,
			},
			X = function(e, t) {
				switch ((null == e && (e = Q), t.type)) {
					case Z:
						var n = t.payload,
							r = n.accessToken,
							a = n.endUser,
							o = n.didConsentToRequestedConsentId;
						return Object(E.a)(e, {
							authToken: r,
							currentEndUser: a,
							didConsentToRequestedConsentId: !!o,
						});
					case H.f:
						return Object(E.a)(e, { leadEmail: t.metadata.email });
					case H.b:
						var i = t.payload.email;
						return Object(E.a)(e, {
							leadEmail: i,
							currentEndUser: Object(E.a)(e.currentEndUser, { email: i }),
						});
					case J:
						return Object(E.a)(e, {
							segmentMembership: t.payload,
							segmentMembershipFetched: !0,
						});
					case Y.i:
						return Object(E.a)(e, { didConsentToRequestedConsentId: !0 });
					case F:
						var s = t.payload.attributes;
						return Object(E.a)(e, {
							externallyModifiedAttributes: p()(
								{},
								e.externallyModifiedAttributes,
								s
							),
						});
					case G:
						var c = t.payload.toJS().attributes;
						return Object(E.a)(e, {
							externallyModifiedAttributes: p()(
								{},
								e.externallyModifiedAttributes,
								c
							),
						});
					default:
						return e;
				}
			},
			$ = n(590),
			ee = n.n($),
			te = y.Na,
			ne = y.e,
			re = y.f,
			ae = y.Ta,
			oe = y.Aa,
			ie = y.z,
			se = y.g,
			ce = y.T,
			ue = y.S,
			le = y.V,
			de = y.U,
			pe = y.Ra,
			_e = y.Ga,
			fe = y.h,
			me = y.Ia,
			be = y.Ja,
			ge = y.Ha,
			he = y.Qa,
			ve = y.Da,
			Ee = y.Ca,
			ye = y.Ba,
			Oe = y.La,
			Ce = y.Ma,
			Te = y.Sa,
			Ie = y.v,
			Me = y.u,
			Pe = y.t,
			Ae = {
				sidebarOpen: !1,
				sidebarTweening: !1,
				widgetVisible: window.__DRIFTT_SHOW_WIDGET_ON_BOOT__,
				widgetExpanded: !1,
				currentSidebarView: ge,
				sentWelcomeMessage: !1,
				identifiedConversationId: void 0,
				iframeSize: void 0,
				iframeOverrides: void 0,
				iframeRepositionPending: !1,
				iframeWidth: void 0,
				iframeHeight: void 0,
				activationTakeoverOpen: !1,
				showTypingIndicatorButtonIcon: !1,
				emailCaptureSliderSubmitted: !1,
				emailCaptureSliderDismissed: !1,
				avatarUrl: void 0,
			},
			Se = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
					t = arguments[1];
				switch (t.type) {
					case te:
						return p()({}, e, {
							sidebarOpen: !0,
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case ne:
						return p()({}, e, {
							sidebarOpen: !1,
							sidebarTweening: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case re:
						return p()({}, e, {
							sidebarOpen: !1,
							sidebarTweening: !0,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case ae:
						return p()({}, e, {
							widgetVisible: !0,
							sidebarOpen: !1,
							sidebarTweening: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case oe:
						return p()({}, e, {
							widgetVisible: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case ie:
						return p()({}, e, {
							widgetExpanded: !0,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case se:
						return p()({}, e, {
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
						});
					case ce:
						return p()({}, e, {
							sidebarOpen: !0,
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
							currentSidebarView: me,
							sentWelcomeMessage: ee()(t.payload, 'sentWelcomeMessage', !1),
							avatarUrl: ee()(t.payload, 'avatarUrl'),
						});
					case de:
						return p()({}, e, {
							sidebarOpen: !0,
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
							currentSidebarView: be,
						});
					case ue:
						return p()({}, e, {
							sidebarOpen: !0,
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
							currentSidebarView: _e,
						});
					case le:
						return p()({}, e, {
							sidebarOpen: !0,
							widgetExpanded: !1,
							activationTakeoverOpen: !1,
							showConsentTakeover: !1,
							currentSidebarView: fe,
						});
					case he:
						var n = t.payload.conversationId;
						return p()({}, e, { identifiedConversationId: n });
					case H.b:
						return p()({}, e, {
							identifiedConversationId: t.payload.conversationId,
						});
					case pe:
						var r = t.payload.view;
						return p()({}, e, { currentSidebarView: r });
					case ve:
						return p()({}, e, {
							iframeRepositionPending: !1,
							iframeWidth: t.payload.width,
							iframeHeight: t.payload.height,
						});
					case Ee:
						return p()({}, e, {
							iframeSize: t.payload.size,
							iframeOverrides: void 0,
							iframeRepositionPending:
								t.payload.repositionPending || e.iframeRepositionPending,
						});
					case ye:
						return p()({}, e, { iframeOverrides: t.payload.overrides });
					case Oe:
						return p()({}, e, { activationTakeoverOpen: !0 });
					case Ce:
						return p()({}, e, { showConsentTakeover: !0 });
					case Y.c:
						return p()({}, e, { showConsentTakeover: !1 });
					case Y.b:
						return p()({}, e, {
							showConsentTakeover: !1,
							emailCaptureSliderSubmitted: !1,
							emailCaptureSliderDismissed: !1,
						});
					case Te:
						return p()({}, e, {
							showTypingIndicatorButtonIcon:
								t.payload.showTypingIndicatorButtonIcon,
						});
					case Ie:
						return p()({}, e, { emailCaptureSliderSubmitted: !0 });
					case Me:
						return p()({}, e, { emailCaptureSliderDismissed: !0 });
					case Pe:
						return p()({}, e, {
							emailCaptureSliderSubmitted: !1,
							emailCaptureSliderDismissed: !1,
						});
					default:
						return e;
				}
			},
			De = n(97),
			we = n(136),
			ke = n(441),
			Re = n(42),
			je = n(8),
			Ne = n.n(je),
			Be = n(24),
			Ue = n.n(Be),
			Le = {},
			We = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
					t = arguments[1];
				switch (t.type) {
					case 'INTEGRATION_EVENT':
						var n = t.payload,
							r = n.integration,
							a = Ue()(n, ['integration']);
						return p()({}, e, Ne()({}, r, a));
					default:
						return e;
				}
			},
			xe = n(73),
			Fe = n.n(xe),
			He = function(e) {
				return '@@widget/presence/' + e;
			},
			Ke = He('AUTHENTICATE'),
			qe = He('AUTHENTICATE_PENDING'),
			ze = He('AUTHENTICATE_SUCCESS'),
			Ge = He('AUTHENTICATE_FAILURE'),
			Ve = He('CONNECT'),
			Ye = He('DISCONNECT'),
			Ze = He('READY_STATE_CHANGED'),
			Je = He('SEND_PACKET'),
			Qe = He('RECEIVE_PACKET'),
			Xe = He('UPDATE_PRESENCE'),
			$e = He('JOIN_ROOM_SUCCESS'),
			et = He('JOIN_ROOM_FAILURE'),
			tt = Fe()({ CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 }),
			nt = (Object(i.b)(Ke),
			Object(i.b)(qe),
			Object(i.b)(ze),
			Object(i.b)(Ge),
			Object(i.b)(Ve),
			Object(i.b)(Ye)),
			rt = (Object(i.b)(Ze), Object(i.b)(Je)),
			at = (Object(i.b)(Qe), Object(i.b)(Xe)),
			ot = (Object(i.b)($e), Object(i.b)(et), n(9)),
			it = n(16),
			st = Object(O.Record)({
				userId: void 0,
				userIpAddress: void 0,
				sessionToken: void 0,
				readyState: tt.CLOSED,
			}),
			ct = Object(i.c)(
				((u = {}),
				Ne()(u, ze, function(e, t) {
					return e
						.set('userIpAddress', t.payload.remote_ip)
						.set('userId', t.payload.user_id)
						.set('sessionToken', t.payload.session_token);
				}),
				Ne()(u, Ze, function(e, t) {
					return e.set('readyState', t.payload);
				}),
				u),
				new st()
			),
			ut = function(e) {
				return e.Presence;
			},
			lt = Object(v.p)('has_presence'),
			dt = Object(v.p)('has_presence_beta'),
			pt = Object(v.p)('has_live_track'),
			_t = function(e) {
				return lt(e) || dt(e);
			},
			ft = Object(ot.createSelector)(v.j, v.s, function(e, t) {
				return {
					userType: e && e.type,
					userId: e && e.id,
					email: (e && e.email) || t,
				};
			}),
			mt = Object(ot.createSelector)(v.x, function(e) {
				return {
					userAgent: navigator.userAgent,
					page: e.page,
					visits: e.visits,
					referrer: e.referrer,
					ad: e.ad,
					os: e.os,
					geo: e.geo,
					timezone: e.timezone,
					locale: e.locale,
				};
			}),
			bt = Object(ot.createSelector)(
				function(e) {
					return ut(e).userIpAddress;
				},
				ft,
				function(e) {
					return {
						externalId: e.Bootstrap.externalId,
						anonymousId: e.Bootstrap.anonymousId,
					};
				},
				mt,
				function(e, t, n, r) {
					return p()({ ip: e }, t, n, r);
				}
			),
			gt = n(39),
			ht = n(1),
			vt = n(71),
			Et = (n(127), n(60), n(120), n(244), Object(i.b)(x)),
			yt = Object(i.b)(F),
			Ot = n(26),
			Ct = n(30),
			Tt = Object(i.b)(Ct.a),
			It = (Object(i.b)(Ct.c), Object(i.b)(Ct.d)),
			Mt = Object(i.b)(Ct.b),
			Pt = Object(i.b)(Ct.e),
			At = (Object(i.b)(Ct.f), Object(i.b)(Ct.g)),
			St = Object(i.b)(Ct.i),
			Dt = Object(i.b)(Ct.j),
			wt = Object(i.b)(Ct.h),
			kt = y.Ea,
			Rt = y.Pa,
			jt = y.c,
			Nt = y.O,
			Bt = Object(gt.combineEpics)(
				function(e) {
					return e.ofType(jt).map(function() {
						return Tt({ clusterName: Ct.l.PRESENCE });
					});
				},
				function(e, t) {
					return e
						.ofType(kt)
						.filter(function() {
							return _t(t.getState());
						})
						.filter(function() {
							return !Object(v.D)(t.getState());
						})
						.map(B.b);
				},
				function(e) {
					return e
						.ofType(Ct.i)
						.pluck('payload')
						.filter(function(e) {
							return e.clusterName === Ct.l.PRESENCE;
						})
						.filter(function(e) {
							return e.channelName === Ct.k.USER;
						})
						.switchMap(function(e) {
							var t = e.channel,
								n = e.onMessageSubject;
							return ht.Observable.create(function(e) {
								n.subscribe({
									next: function(t) {
										var n = t.event,
											r = t.payload;
										n &&
											r &&
											n.startsWith('widget:') &&
											r.body &&
											e.next(Et({ method: n.substring(7), options: r.body }));
									},
								}),
									t.on('conversation:start', function(t) {
										var n = t.body;
										e.next(Object(De.showWelcomeMessage)(n));
									}),
									t.on('change', function(t) {
										var n = t.body,
											r = n.type,
											a = n.object,
											o = n.data;
										'CREATE' === r &&
											a &&
											'MESSAGE' === a.type &&
											e.next(Object(Ot.v)(o));
									});
							});
						});
				},
				function(e, t) {
					return e
						.ofType(Ct.j)
						.pluck('payload')
						.filter(function(e) {
							return e.clusterName === Ct.l.PRESENCE;
						})
						.filter(function(e) {
							return e.channelName === Ct.k.USER;
						})
						.switchMap(function(n) {
							var r = n.channel;
							return ht.Observable.create(function() {
								var n = e.ofType(Je),
									a = new vt.Subscription();
								if (pt(t.getState())) {
									var o = function() {
										r.push('live:track', bt(t.getState()));
									};
									o(),
										a.add(
											n.subscribe({
												next: function() {
													o();
												},
											})
										);
								}
								var i = function() {
									r.push('presence:update', bt(t.getState()));
								};
								return (
									i(),
									a.add(
										n.subscribe({
											next: function() {
												i();
											},
										})
									),
									function() {
										a.unsubscribe();
									}
								);
							});
						});
				},
				function(e) {
					return e.ofType(jt, H.f, Rt, Nt).map(function() {
						return at();
					});
				},
				function(e, t) {
					return e
						.ofType(Xe)
						.filter(function() {
							return _t(t.getState());
						})
						.map(function() {
							return bt(t.getState());
						})
						.map(function() {
							return rt();
						});
				}
			),
			Ut = n(183),
			Lt = n(96),
			Wt = n(104),
			xt = n(58);
		function Ft(e, t, n, r, a) {
			return function() {
				var o =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: Object(O.Map)(),
					i =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					s = i.type;
				if (s !== e && s !== t && s !== n && s !== a) return o;
				var c = r(i);
				return o.update(c, function(r) {
					return (function() {
						var r =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: new Wt.c(),
							o =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
						switch (o.type) {
							case a:
								return new Wt.c();
							case e:
								return r.merge({
									pending: !0,
									success: !1,
									error: !1,
									lastFetched: +new Date(),
								});
							case t:
								return r.merge({ pending: !1, success: !0 });
							case n:
								return r.merge({
									pending: !1,
									error: !0,
									message:
										o.payload && o.payload.error && o.payload.error.message,
								});
							default:
								return r;
						}
					})(r, i);
				});
			};
		}
		var Ht = function(e) {
				return e.payload.agentId;
			},
			Kt = Ft(xt.a, xt.c, xt.b, Ht),
			qt = Ft(xt.e, xt.h, xt.f, Ht, xt.g);
		var zt,
			Gt,
			Vt,
			Yt,
			Zt,
			Jt,
			Qt,
			Xt,
			$t,
			en = Object(o.combineReducers)({
				availabilityByAgentId: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Object(O.Map)(),
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						n = t.type,
						r = t.payload;
					switch (n) {
						case xt.a:
						case xt.c:
							return e.update(r.agentId, function(e) {
								return (function() {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: new Wt.a(),
										t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {},
										n = t.type,
										r = t.payload;
									switch (n) {
										case xt.c:
											var a = Object(O.Set)(r.availability.slots);
											return e
												.set('agentTimeZone', r.availability.agentTimezone)
												.update('slots', function(e) {
													return e.union(a).sort();
												})
												.set('slotDuration', r.availability.slotDuration)
												.set('nextRequestStartFrom', a.max());
										default:
											return e;
									}
								})(e, t);
							});
						default:
							return e;
					}
				},
				availabilityFetchStatusByAgentId: Kt,
				appointmentsByConversationId: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Object(O.Map)(),
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						n = t.type,
						r = t.payload;
					switch (n) {
						case xt.h:
							return e.update(r.conversationId, new Wt.b(), function() {
								return new Wt.b(p()({}, t.payload));
							});
						default:
							return e;
					}
				},
				scheduleAppointmentFetchStatusByAgentId: qt,
			}),
			tn = (n(519), n(213), n(117), n(142), n(79), n(666), n(642), n(102)),
			nn = n(22),
			rn = n(205),
			an = n(112),
			on = n.n(an),
			sn = n(167),
			cn = n.n(sn),
			un = Object(h.e)(),
			ln = g.e + '/scheduling',
			dn = (function() {
				var e = cn()(
					on.a.mark(function e(t, n) {
						var r,
							a,
							o,
							i =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: {};
						return on.a.wrap(
							function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(r = i.meetingType),
												(a = i.start),
												(o =
													ln +
													'/' +
													n +
													'/availability?' +
													Object(h.c)({ meetingType: r, start: a })),
												(e.next = 4),
												Object(h.b)(o, {
													method: 'GET',
													headers: p()({}, un, {
														Authorization: 'bearer ' + t,
													}),
												})
											);
										case 4:
											return e.abrupt('return', e.sent);
										case 5:
										case 'end':
											return e.stop();
									}
							},
							e,
							this
						);
					})
				);
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(),
			pn = (function() {
				var e = cn()(
					on.a.mark(function e(t) {
						var n,
							r = t.accessToken,
							a = t.agentId,
							o = t.availabilitySlot,
							i = t.conversationId,
							s = t.meetingType,
							c = t.meetingSource;
						return on.a.wrap(
							function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n =
													ln +
													'/' +
													a +
													'/schedule?' +
													Object(h.c)({
														conversationId: i,
														meetingType: s,
														meetingSource: c,
													})),
												(e.next = 3),
												Object(h.b)(n, {
													method: 'POST',
													headers: p()({}, un, {
														Authorization: 'bearer ' + r,
													}),
													body: b()(o),
												})
											);
										case 3:
											return e.abrupt('return', e.sent);
										case 4:
										case 'end':
											return e.stop();
									}
							},
							e,
							this
						);
					})
				);
				return function(t) {
					return e.apply(this, arguments);
				};
			})(),
			_n = Object(gt.combineEpics)(
				function(e, t) {
					return e.ofType(xt.a).mergeMap(function(e) {
						var n = e.payload,
							r = n.agentId,
							a = n.meetingType,
							o = n.start,
							i = Object(v.b)(t.getState());
						return ht.Observable.fromPromise(
							dn(i, r, { meetingType: a, start: o })
						)
							.map(function(e) {
								return { availability: e, agentId: r, meetingType: a };
							})
							.map(Lt.c)
							.catch(function(e) {
								return ht.Observable.of(
									Object(Lt.b)({ error: e, agentId: r, meetingType: a })
								);
							});
					});
				},
				function(e, t) {
					return e.ofType(xt.e).mergeMap(function(e) {
						var n = e.payload,
							r = n.agentId,
							a = n.availabilitySlot,
							o = n.conversationId,
							i = n.meetingType,
							s = n.meetingSource,
							c = Object(v.b)(t.getState());
						return ht.Observable.fromPromise(
							pn({
								accessToken: c,
								agentId: r,
								availabilitySlot: a,
								conversationId: o,
								meetingType: i,
								meetingSource: s,
							})
						)
							.map(function(t) {
								return Object(Lt.g)(p()({}, e.payload, t));
							})
							.catch(function(t) {
								return ht.Observable.of(
									Object(Lt.e)(
										p()({}, e.payload, {
											error: new Error(t.message),
											meetingType: i,
										})
									)
								);
							});
					});
				},
				function(e, t) {
					return e
						.ofType(xt.i)
						.waitForBootstrap(e, t)
						.map(function(e) {
							return {
								agentId: e.payload.agentId,
								campaignMessage: e.payload.campaignMessage,
								meetingType: e.payload.meetingType,
								meetingSource: e.payload.meetingSource,
								widgetApiTriggered: e.payload.widgetApiTriggered,
							};
						})
						.filter(function(e) {
							return e.agentId;
						})
						.map(function(e) {
							var n = e.agentId,
								r = Ue()(e, ['agentId']),
								a = Object(tn.a)(t.getState(), { agentId: n });
							if (!a)
								throw new Error('Couldn\'t find agent with id "' + n + '"');
							return p()({ agent: a }, r);
						})
						.throttle(function() {
							return e.ofType(y.l).race(ht.Observable.timer(1e3));
						})
						.mergeMap(function(n) {
							return Object(v.b)(t.getState())
								? ht.Observable.of(n)
								: e.ofType(y.c).map(function() {
										return n;
								  });
						})
						.map(function(e) {
							var n = Object(v.m)(t.getState());
							return n ? p()({}, e, { endUserEmail: n }) : e;
						})
						.map(function(e) {
							var n = e.agent,
								r = e.campaignMessage,
								a = e.meetingType,
								o = e.meetingSource,
								i = e.endUserEmail,
								s = e.widgetApiTriggered,
								c = {
									body: '',
									attributes: {
										scheduleMeetingFlow: !0,
										scheduleMeetingWith: n.id,
										widgetApiTriggered: s,
										meetingType: a,
										meetingSource: o,
										endUserEmail: i,
									},
									status: 'BULK_SENT',
								};
							if (!r) return c;
							var u = r.attributes,
								l = u.senderId,
								d = u.noSenderId,
								_ = u.automaticSender;
							return p()({}, c, {
								inboxId: r.inboxId,
								attributes: p()({}, c.attributes, {
									relatedCampaignId: r.attributes.campaignId,
									preMessages: Object(rn.c)(
										r,
										Object(rn.a)(t.getState(), l, d, _)
									),
								}),
							});
						})
						.map(function(e) {
							return Object(Re.a)(e);
						});
				},
				function(e) {
					return e.ofType(xt.h).map(function(e) {
						var t = new Wt.b(e.payload);
						return Object(
							Re.d
						)({ conversationId: t.conversationId, body: '', attributes: { scheduleMeetingFlow: !0, scheduleMeetingWith: e.payload.agentId, meetingType: e.payload.meetingType, appointmentInfo: t.toJSON() } });
					});
				},
				function(e, t) {
					return e
						.ofType(xt.i)
						.filter(function() {
							return !Object(nn.o)(t.getState());
						})
						.filter(function() {
							return Object(nn.a)(t.getState());
						})
						.map(function() {
							return Object(U.a)();
						});
				}
			),
			fn = (n(215), n(679), n(126)),
			mn = n(262),
			bn = Object(gt.combineEpics)(
				function(e) {
					return e
						.ofType(fn.c)
						.pluck('payload')
						.mergeMap(function(t) {
							var n = t.userId,
								r = t.userType,
								a = t.conversationId;
							return ht.Observable.merge(
								e.ofType(fn.c, fn.d).filter(function(e) {
									return (
										e.payload.userId === n &&
										e.payload.userType === r &&
										e.payload.conversationId === a
									);
								}),
								ht.Observable.timer(5e3)
							)
								.first()
								.filter(function(e) {
									return !e;
								})
								.map(function() {
									return mn.d({ userId: n, userType: r, conversationId: a });
								});
						});
				},
				function(e) {
					return e
						.ofType(Ct.i)
						.pluck('payload')
						.filter(function(e) {
							return e.clusterName === Ct.l.MESSAGES;
						})
						.filter(function(e) {
							return e.channelName === Ct.k.USER;
						})
						.switchMap(function(e) {
							var t = e.channel;
							return ht.Observable.create(function(e) {
								t.on('typing:started', function(t) {
									e.next(mn.c(t));
								}),
									t.on('typing:finished', function(t) {
										e.next(mn.d(t));
									});
							});
						});
				},
				function(e, t) {
					return e
						.ofType(Ct.j)
						.pluck('payload')
						.filter(function(e) {
							return e.clusterName === Ct.l.MESSAGES;
						})
						.filter(function(e) {
							return e.channelName === Ct.k.USER;
						})
						.switchMap(function(n) {
							var r = n.channel,
								a = e.ofType(fn.a, fn.b).map(function(e) {
									var n = e.type,
										r = e.payload,
										a = Object(v.j)(t.getState());
									return {
										event: n === fn.a ? 'typing:started' : 'typing:finished',
										data: p()(
											{ userId: a.id, userType: a.type, participants: [] },
											r
										),
									};
								});
							return ht.Observable.create(function() {
								var e = new vt.Subscription();
								return (
									e.add(
										a.subscribe({
											next: function(e) {
												var t = e.event,
													n = e.data;
												r.push(t, n);
											},
										})
									),
									function() {
										e.unsubscribe();
									}
								);
							});
						});
				}
			),
			gn = Object(O.Record)({ typingUsersByConversationId: Object(O.Map)() }),
			hn = Object(i.c)(
				((zt = {}),
				Ne()(zt, fn.c, function(e, t) {
					var n = t.payload,
						r = n.userId,
						a = n.userType,
						o = n.conversationId;
					return e.updateIn(['typingUsersByConversationId', o], function() {
						return (arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: Object(O.Set)()
						).add(Object(O.List)([a, r]));
					});
				}),
				Ne()(zt, fn.d, function(e, t) {
					var n = t.payload,
						r = n.userId,
						a = n.userType,
						o = n.conversationId;
					return e.updateIn(['typingUsersByConversationId', o], function() {
						return (arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: Object(O.Set)()
						).remove(Object(O.List)([a, r]));
					});
				}),
				zt),
				gn()
			),
			vn = n(86),
			En = n(853),
			yn = (n(246), n(34)),
			On = n(266),
			Cn = (n(143),
			n(508),
			n(390),
			(Gt = {}),
			Ne()(Gt, Ct.l.MESSAGES, [Ct.k.USER]),
			Ne()(Gt, Ct.l.PRESENCE, [Ct.k.USER]),
			Gt),
			Tn = function(e) {
				return Object(gt.combineEpics)(
					function(t, n) {
						return t
							.ofType(Ct.a)
							.pluck('payload')
							.filter(function(t) {
								return t.clusterName === e;
							})
							.map(function() {
								var t = n.getState();
								return {
									apiBaseUrl: On.a(t, { clusterName: e }),
									authParams: On.b(t, { clusterName: e }),
								};
							})
							.switchMap(function(t) {
								return (function(e) {
									var t = e.apiBaseUrl,
										n = e.authParams;
									return ht.Observable.ajax({
										url: t + '/api/auth',
										method: 'POST',
										crossDomain: !0,
										responseType: 'json',
										headers: Object(h.e)(),
										body: b()(n),
									})
										.retryWhen(function(e) {
											return e
												.scan(function(e, t) {
													if (e >= 3) throw t;
													return e + 1;
												}, 0)
												.mergeMap(function(e) {
													return ht.Observable.timer(2 ^ (1e3 * e));
												});
										})
										.map(function(e) {
											return {
												userIpAddress: e.response.remote_ip,
												userId: e.response.user_id,
												sessionToken: e.response.session_token,
											};
										});
								})(t)
									.map(function(t) {
										return It(p()({ clusterName: e }, t));
									})
									.catch(function(t) {
										return (
											yn.a.warn(
												'Failed to authenticate to presence API -',
												t.xhr && t.xhr.response
											),
											ht.Observable.of(Mt({ clusterName: e, error: t }))
										);
									});
							});
					},
					function(t, n) {
						return t
							.ofType(Ct.d)
							.pluck('payload')
							.filter(function(t) {
								return t.clusterName === e;
							})
							.switchMap(function(r) {
								var a = r.sessionToken,
									o = t
										.ofType(Ct.g)
										.pluck('payload')
										.filter(function(t) {
											return t.clusterName === e;
										});
								return ht.Observable.create(function(t) {
									var r = new En.Socket(
											On.d(n.getState(), { clusterName: e }) + '/ws',
											{ params: { session_token: a } }
										),
										i = new vt.Subscription();
									return (
										i.add(
											o.subscribe({
												next: function(a) {
													var o = a.channelName,
														i = r.channel(
															On.c(n.getState(), {
																clusterName: e,
																channelName: o,
															}),
															(function(e) {
																var t = e.clusterName,
																	n = e.state;
																return t
																	? n
																		? t === Ct.l.PRESENCE
																			? {}
																			: {
																					bootstrap: t === Ct.l.MESSAGES,
																					sessionId: Object(it.l)(n),
																					campaignIds: Object(nn.l)(n).map(
																						function(e) {
																							return e.id;
																						}
																					),
																					accessToken: Object(v.b)(n),
																			  }
																		: (yn.a.error('state is required'), {})
																	: (yn.a.error('clusterName is required'), {});
															})({ clusterName: e, state: n.getState() })
														),
														s = new vn.Subject();
													(i.onMessage = function(e, t, n) {
														return s.next({ event: e, payload: t, ref: n }), t;
													}),
														t.next(
															St({
																clusterName: e,
																channelName: o,
																channel: i,
																onMessageSubject: s,
															})
														),
														i
															.join()
															.receive('ok', function() {
																t.next(
																	Dt({
																		clusterName: e,
																		channelName: o,
																		channel: i,
																	})
																);
															})
															.receive('error', function(n) {
																t.next(
																	wt({
																		clusterName: e,
																		channelName: o,
																		channel: i,
																		error: n,
																	})
																);
															})
															.receive('timeout', function() {
																t.next(
																	wt({
																		clusterName: e,
																		channelName: o,
																		channel: i,
																		error:
																			'The request has timed out. please try again later',
																	})
																);
															});
												},
											})
										),
										r.connect(),
										t.next(Pt({ clusterName: e, socket: r })),
										function() {
											r.disconnect(function() {
												i.unsubscribe();
											});
										}
									);
								}).takeUntil(t.ofType(Ct.f));
							});
					},
					function(t) {
						return t
							.ofType(Ct.e)
							.pluck('payload')
							.filter(function(t) {
								return t.clusterName === e;
							})
							.flatMap(function(e) {
								var t = e.clusterName;
								return Cn[t].map(function(e) {
									return At({ clusterName: t, channelName: e });
								});
							});
					}
				);
			},
			In = Object(gt.combineEpics)(Tn(Ct.l.MESSAGES), Tn(Ct.l.PRESENCE)),
			Mn = n(319),
			Pn = Object(i.c)(
				((Vt = {}),
				Ne()(Vt, Ct.d, function(e, t) {
					var n = t.payload,
						r = n.clusterName,
						a = n.userIpAddress,
						o = n.userId,
						i = n.sessionToken;
					return e.set(
						r,
						Object(Mn.b)({
							userIpAddress: a,
							userId: o,
							sessionToken: i,
							authenticateStatus: 'success',
						})
					);
				}),
				Ne()(Vt, Ct.b, function(e, t) {
					var n = t.payload.clusterName;
					return e.set(n, Object(Mn.b)({ authenticateStatus: 'failure' }));
				}),
				Ne()(Vt, Ct.e, function(e, t) {
					var n = t.payload,
						r = n.clusterName,
						a = n.socket;
					return e.setIn([r, 'socket'], a);
				}),
				Ne()(Vt, Ct.i, function(e, t) {
					var n = t.payload,
						r = n.clusterName,
						a = n.channelName,
						o = n.channel,
						i = n.onMessageSubject;
					return e.setIn(
						[r, 'channels', a],
						Object(Mn.a)({ channel: o, onMessageSubject: i })
					);
				}),
				Vt),
				Object(O.Map)()
			),
			An = n(293),
			Sn = Object(i.c)(
				Ne()({}, An.a, function(e, t) {
					return t.payload;
				}),
				!0
			),
			Dn = Object(o.combineReducers)({ visible: Sn }),
			wn = n(68),
			kn = Object(i.c)(
				((Yt = {}),
				Ne()(Yt, wn.g, function() {
					return !1;
				}),
				Ne()(Yt, wn.f, function(e, t) {
					return (
						0 ===
						t.payload.filter(function(e) {
							return 'SENT' === e.status;
						}).length
					);
				}),
				Ne()(Yt, y.Pa, function() {
					return !0;
				}),
				Yt),
				!0
			),
			Rn = Object(i.c)(
				((Zt = {}),
				Ne()(Zt, wn.a, function(e, t) {
					return e.union(t.payload);
				}),
				Ne()(Zt, wn.f, function(e, t) {
					var n = t.payload
						.filter(function(e) {
							return 'NOT_EVALUATED' !== e.status;
						})
						.map(function(e) {
							return e.campaignId;
						});
					return e.union(n);
				}),
				Ne()(Zt, y.Pa, function() {
					return Object(O.Set)();
				}),
				Zt),
				Object(O.Set)()
			),
			jn = Object(i.c)(
				((Jt = {}),
				Ne()(Jt, wn.e, function(e, t) {
					return t.type;
				}),
				Ne()(Jt, wn.d, function(e, t) {
					return t.type;
				}),
				Ne()(Jt, wn.f, function(e, t) {
					return t.type;
				}),
				Jt),
				!1
			),
			Nn = Object(i.c)(
				Ne()({}, wn.h, function(e, t) {
					var n = t.payload.map(function(e) {
						return {
							campaignId: e.campaign.id,
							priority: e.campaign.attributes.priority,
							campaignReenrollmentType:
								e.campaign.attributes.campaignReenrollmentType,
							segments: {
								accountListIds: e.campaign.attributes.accountListIds,
								excludedAccountListIds:
									e.campaign.attributes.excludedAccountListIds,
								excludedUserListIds: e.campaign.attributes.excludedUserListIds,
								userListIds: e.campaign.attributes.userListIds,
							},
							targetingAuditLog: e.targetingAuditLog,
						};
					});
					return e.set('campaigns', n);
				}),
				Object(O.Map)({ campaigns: [], routingRules: [] })
			),
			Bn = Object(o.combineReducers)({
				enrollmentEnabled: kn,
				enrolledCampaignIds: Rn,
				bulkEnrollStatus: jn,
				targetingAuditLog: Nn,
			}),
			Un = function(e) {
				return '@@widget/enrichment/clearbit/' + e;
			},
			Ln = Un('EVALUATE_CLEARBIT_TARGETING_CONDITIONS'),
			Wn = Un('EVALUATE_CLEARBIT_TARGETING_CONDITIONS_SUCCESS'),
			xn = Un('EVALUATE_CLEARBIT_TARGETING_CONDITIONS_FAILURE'),
			Fn = function(e) {
				return '@@widget/enrichment/demandbase/' + e;
			},
			Hn = Fn('EVALUATE_DEMANDBASE_TARGETING_CONDITIONS'),
			Kn = Fn('EVALUATE_DEMANDBASE_TARGETING_CONDITIONS_SUCCESS'),
			qn = Fn('EVALUATE_DEMANDBASE_TARGETING_CONDITIONS_FAILED'),
			zn = Object(i.c)(
				Ne()({}, Object(i.a)(Wn, xn, Kn, qn), function() {
					return !0;
				}),
				!1
			),
			Gn = Object(i.c)(
				Ne()({}, Object(i.a)(Wn, Kn), function(e, t) {
					return t.payload.get('account', Object(O.Map)());
				}),
				Object(O.Map)()
			),
			Vn = Object(i.c)(
				Ne()({}, Object(i.a)(Wn, Kn), function(e, t) {
					return t.payload.get('segments', Object(O.List)());
				}),
				Object(O.List)()
			),
			Yn = Object(o.combineReducers)({
				fetched: zn,
				account: Gn,
				accountSegments: Vn,
			}),
			Zn = function(e) {
				return '@@widget/enrichment/clearbit/' + e;
			},
			Jn = Zn('ENRICH_BOOTSTRAPPED_END_USER'),
			Qn = Zn('ENRICH_BOOTSTRAPPED_END_USER_SUCCESS'),
			Xn = (Object(i.b)(Jn), Object(i.b)(Qn)),
			$n = (n(214), Object(i.b)(Hn)),
			er = Object(i.b)(Kn),
			tr = Object(i.b)(qn),
			nr = n(155),
			rr = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType(y.c)
						.filter(function() {
							return Object(v.J)('demandbase')(t.getState());
						})
						.filter(function() {
							return !Object(nr.d)(t.getState()) || !Object(nr.e)(t.getState());
						})
						.map(function() {
							var e = t.getState(),
								n = Object(nr.b)(e);
							return Object(nr.a)(e).filter(function(e) {
								return 'success' !== n.get(e);
							});
						})
						.map(function(e) {
							return $n({ conditions: e });
						});
				},
				function(e, t) {
					return e
						.ofType(Hn)
						.pluck('payload')
						.mergeMap(function(e) {
							var n = e.conditions,
								r = e.endUserEmail,
								a = t.getState();
							return (function(e) {
								var t = e.params,
									n = e.encryptedConditions;
								return ht.Observable.ajax({
									url:
										g.e + '/targeting/enrichment/demandbase?' + Object(h.c)(t),
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)()]),
									body: b()(n),
								}).map(function(e) {
									return e.response;
								});
							})({
								params: {
									orgId: Object(it.k)(a),
									email: r || Object(v.m)(a),
									endUserId: Object(v.n)(a),
								},
								encryptedConditions: n,
							})
								.map(function(e) {
									return er(Object(O.fromJS)(e));
								})
								.catch(function() {
									return ht.Observable.of(tr(n));
								});
						});
				},
				function(e, t) {
					return e
						.ofType(N.a, H.b)
						.filter(function() {
							return Object(v.J)('demandbase')(t.getState());
						})
						.map(function() {
							var e = t.getState();
							return $n({
								conditions: Object(nr.a)(e),
								endUserEmail: Object(v.s)(e),
							});
						});
				}
			),
			ar = Object(i.c)(
				((Qt = {}),
				Ne()(Qt, Hn, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.conditions.forEach(function(t) {
							e.setIn(['statusByKey', t], 'pending');
						});
					});
				}),
				Ne()(Qt, qn, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.forEach(function(t) {
							e.setIn(['statusByKey', t], 'failure'),
								e.setIn(['valuesByKey', t], Object(O.Map)());
						});
					});
				}),
				Ne()(Qt, Kn, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.get('conditions').forEach(function(t, n) {
							e.setIn(['statusByKey', n], 'success'),
								e.setIn(['valuesByKey', n], t);
						});
					});
				}),
				Qt),
				Object(O.Map)({
					statusByKey: Object(O.Map)(),
					valuesByKey: Object(O.Map)(),
				})
			),
			or = Object(i.b)(Ln),
			ir = Object(i.b)(Wn),
			sr = Object(i.b)(xn),
			cr = n(156),
			ur = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType(y.c)
						.filter(function() {
							return !Object(v.J)('demandbase')(t.getState());
						})
						.filter(function() {
							return !Object(cr.d)(t.getState()) || !Object(cr.e)(t.getState());
						})
						.map(function() {
							var e = t.getState(),
								n = Object(cr.b)(e);
							return Object(cr.a)(e).filter(function(e) {
								return 'success' !== n.get(e);
							});
						})
						.map(function(e) {
							return or({ conditions: e });
						});
				},
				function(e, t) {
					return e
						.ofType(Ln)
						.pluck('payload')
						.mergeMap(function(e) {
							var n = e.conditions,
								r = e.endUserEmail,
								a = t.getState();
							return (function(e) {
								var t = e.params,
									n = e.encryptedConditions;
								return ht.Observable.ajax({
									url: g.e + '/targeting/enrichment/clearbit?' + Object(h.c)(t),
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)()]),
									body: b()(n),
								}).map(function(e) {
									return e.response;
								});
							})({
								params: {
									orgId: Object(it.k)(a),
									email: r || Object(v.m)(a),
									endUserId: Object(v.n)(a),
								},
								encryptedConditions: n,
							})
								.map(function(e) {
									return ir(Object(O.fromJS)(e));
								})
								.catch(function() {
									return ht.Observable.of(sr(n));
								});
						});
				},
				function(e, t) {
					return e
						.ofType(N.a, H.b)
						.filter(function() {
							return !Object(v.J)('demandbase')(t.getState());
						})
						.map(function() {
							var e = t.getState();
							return or({
								conditions: Object(cr.a)(e),
								endUserEmail: Object(v.s)(e),
							});
						});
				}
			),
			lr = Object(i.c)(
				((Xt = {}),
				Ne()(Xt, Ln, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.conditions.forEach(function(t) {
							e.setIn(['statusByKey', t], 'pending');
						});
					});
				}),
				Ne()(Xt, xn, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.forEach(function(t) {
							e.setIn(['statusByKey', t], 'failure'),
								e.setIn(['valuesByKey', t], !1);
						});
					});
				}),
				Ne()(Xt, Wn, function(e, t) {
					return e.withMutations(function(e) {
						t.payload.get('conditions').forEach(function(t, n) {
							e.setIn(['statusByKey', n], 'success'),
								e.setIn(['valuesByKey', n], t);
						});
					});
				}),
				Xt),
				Object(O.Map)({
					statusByKey: Object(O.Map)(),
					valuesByKey: Object(O.Map)(),
				})
			),
			dr = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType(y.c)
						.filter(function() {
							return (
								Object(v.J)('demandbase')(t.getState()) ||
								Object(v.J)('clearbit_reveal')(t.getState())
							);
						})
						.mergeMap(function() {
							var e = t.getState();
							return (function(e) {
								var t = e.params,
									n = e.authHeader;
								return ht.Observable.ajax({
									url: g.g + '/enrich/contact?' + Object(h.c)(t),
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), n]),
								});
							})({
								params: { email: Object(v.m)(e), endUserId: Object(v.n)(e) },
								authHeader: Object(v.d)(e),
							}).map(function() {
								return Xn();
							});
						});
				},
				rr,
				ur
			),
			pr = Object(o.combineReducers)({ demandbase: ar, clearbit: lr }),
			_r = (n(426), n(220), n(52)),
			fr = n(298),
			mr = Object(gt.combineEpics)(function(e) {
				return e
					.ofType(fr.a)
					.pluck('payload')
					.map(function(e) {
						var t = e.conversationId,
							n = e.rating;
						return Object(
							Re.d
						)({ conversationId: t, type: _r.h, attributes: { rating: n } });
					});
			}),
			br = n(19),
			gr = Object(i.c)(
				(($t = {}),
				Ne()($t, br.o, function(e, t) {
					var n = t.payload;
					return e.withMutations(function(e) {
						n.forEach(function(t) {
							var n = t.getIn(['latestRating', 'attributes', 'rating']);
							n && e.set(t.getIn(['conversation', 'id']), n);
						});
					});
				}),
				Ne()($t, fr.a, function(e, t) {
					var n = t.payload,
						r = n.conversationId,
						a = n.rating;
					return e.set(r, a);
				}),
				$t),
				Object(O.Map)()
			),
			hr = Object(o.combineReducers)({ latestRatingByConversationId: gr }),
			vr = n(31),
			Er = Object(i.c)(
				Ne()({}, vr.b, function(e, t) {
					return { widgetInitTimestamp: t.payload.timestamp };
				}),
				{ widgetInitTimestamp: null }
			),
			yr = n(78),
			Or = n(469),
			Cr = n(458),
			Tr = n(852),
			Ir = n(20),
			Mr = (n(332), n(715), n(32)),
			Pr = n(53),
			Ar = function(e) {
				return (function(e) {
					return e.Metrics;
				})(e).widgetInitTimestamp;
			},
			Sr = function(e, t) {
				return t + '=' + e;
			},
			Dr = function(e, t) {
				return (
					e +
					':' +
					Object(yr.a)(Object(Or.a)(t, Object(Tr.a)(Cr.a)), Sr).join(';')
				);
			},
			wr = ht.Observable.interval(5e3).take(1),
			kr = ht.Observable.interval(1e3),
			Rr = ht.Observable.concat(wr, kr),
			jr = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType(vr.d)
						.pluck('payload')
						.map(
							(function(e) {
								return function(t) {
									var n = t.view,
										r = t.botAvatarVersion,
										a = Object(it.s)(e),
										o = Object(it.k)(e),
										i = Object(v.t)(e);
									return {
										value: 1,
										dimensions: { type: 'counter' },
										metric: Dr('widget.impression', {
											view: n,
											locale: i,
											mobile: Object(Mr.b)(),
											branding_enabled: a,
											org_1: 1 === o,
											bot_avatar_version_v2: r,
										}),
									};
								};
							})(t.getState())
						)
						.map(Pr.a);
				},
				function(e, t) {
					return e
						.ofType(vr.c)
						.pluck('payload')
						.map(
							(function(e) {
								return function(t) {
									var n = t.view,
										r = t.ctaType,
										a = t.botAvatarVersion,
										o = Object(it.s)(e),
										i = Object(it.k)(e),
										s = Object(v.t)(e);
									return {
										value: 1,
										dimensions: { type: 'counter' },
										metric: Dr('widget.click', {
											view: n,
											locale: s,
											cta_type: r,
											mobile: Object(Mr.b)(),
											branding_enabled: o,
											org_1: 1 === i,
											bot_avatar_version_v2: a,
										}),
									};
								};
							})(t.getState())
						)
						.map(Pr.a);
				},
				function(e, t) {
					return e
						.ofType(wn.e)
						.pluck('payload')
						.mergeMap(function(n) {
							var r = n.enrollSentAt,
								a = n.enrollPayload,
								o = Object(Ir.a)(a, 'campaignIds.0');
							if (!o) return ht.Observable.empty();
							var i = e
									.ofType(br.A)
									.pluck('payload')
									.filter(function(e) {
										return Object(Ir.a)(e, 'attributes.campaignId') === o;
									}),
								s = e
									.ofType(wn.f)
									.pluck('payload', '0')
									.filter(function(e) {
										return e.campaignId === o && 'NOT_SENT' === e.status;
									})
									.do(function() {
										yn.a.log(
											'Canceling scheduled timeout for failed campaign send ' +
												o
										);
									});
							return ht.Observable.merge(i, ht.Observable.timer(15e3))
								.first()
								.map(function(e) {
									var n = !e,
										a = Date.now() - r;
									return (
										n
											? yn.a.warn(
													'Campaign:' + o + ' rtt took ' + a + 'ms to display'
											  )
											: yn.a.log(
													'Campaign:' + o + ' rtt took ' + a + 'ms to display'
											  ),
										{
											metric: Dr('widget.campaign.rtt', {
												isTimeout: n,
												org_1: 1 === Object(it.k)(t.getState()),
											}),
											value: a,
											dimensions: { type: 'timer' },
										}
									);
								})
								.map(Pr.a)
								.takeUntil(s);
						});
				},
				function(e, t) {
					return e
						.ofType(y.C)
						.map(
							(function(e) {
								return function() {
									return {
										value: Date.now() - Ar(e),
										dimensions: {
											type: 'bucket',
											buckets: '500, 1000, 2000, 5000',
										},
										metric: Dr('widget.loadTime.buckets', {
											mobile: Object(Mr.b)(),
											type: 'bootstrap',
											org_1: 1 === Object(it.k)(e),
										}),
									};
								};
							})(t.getState())
						)
						.map(Pr.a);
				},
				function(e, t) {
					return e
						.ofType(vr.a)
						.pluck('payload')
						.buffer(Rr)
						.filter(function(e) {
							return e.length > 0;
						})
						.mergeMap(function(e) {
							return (function(e) {
								var t = e.metrics,
									n = e.authorizationHeader;
								return ht.Observable.ajax({
									url: g.l + '/monitoring/metrics/add/bulk',
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), n]),
									body: t,
								});
							})({
								authorizationHeader: Object(v.d)(t.getState()),
								metrics: e,
							}).catch(function(e) {
								return (
									yn.a.warn('Bulk send metric failed', e), ht.Observable.empty()
								);
							});
						})
						.mergeMap(function() {
							return ht.Observable.empty();
						});
				},
				function(e, t) {
					return e
						.ofType(wn.f)
						.take(1)
						.map(
							(function(e) {
								return function() {
									return {
										value: Date.now() - Ar(e),
										dimensions: {
											type: 'bucket',
											buckets: '500, 1000, 2000, 5000',
										},
										metric: Dr('widget.loadTime.buckets', {
											mobile: Object(Mr.b)(),
											type: 'bulkenroll',
											org_1: 1 === Object(it.k)(e),
										}),
									};
								};
							})(t.getState())
						)
						.map(Pr.a);
				}
			),
			Nr = Object(o.combineReducers)({
				Bootstrap: U.d,
				ConversationUI: function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: f,
						t = arguments[1];
					switch (t.type) {
						case _.b:
							var n = t.payload || {},
								r = n.message,
								a = n.sender,
								o = n.thankYouMessage,
								i = n.inboxId,
								s = n.attributes;
							return p()({}, e, {
								message: r,
								sender: a,
								thankYouMessage: o,
								inboxId: i,
								attributes: s,
							});
						case _.a:
							return p()({}, e, { campaign: t.payload });
						default:
							return e;
					}
				},
				Campaign: function(e, t) {
					switch ((null == e && (e = P), null == t && (t = {}), t.type)) {
						case C:
							return Object(E.a)(e, t.payload);
						default:
							return e;
					}
				},
				Attachment: j,
				DriftUser: L.a,
				EndUser: X,
				UI: Se,
				API: ke.b,
				Event: N.b,
				form: l.reducer,
				Targeting: B.a,
				Message: Re.e,
				WelcomeMessage: De.default,
				AwayMessage: we.default,
				Integration: We,
				Presence: ct,
				Cards: Ut.b,
				Enrichment: pr,
				ScheduleMeeting: en,
				Typing: hn,
				Socket: Pn,
				Visibility: Dn,
				CampaignTargeting: Bn,
				Accounts: Yn,
				Rating: hr,
				Metrics: Er,
			}),
			Br = n(851),
			Ur = n.n(Br),
			Lr = n(438),
			Wr = n(260),
			xr = n.n(Wr),
			Fr = (function() {
				var e = cn()(
					on.a.mark(function e(t, n) {
						var r;
						return on.a.wrap(
							function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (xr.a.isSetup()) {
												e.next = 2;
												break;
											}
											return e.abrupt('return');
										case 2:
											(e.t0 = n.type),
												(e.next = e.t0 === y.c ? 5 : e.t0 === y.b ? 8 : 10);
											break;
										case 5:
											return (
												(r = t.EndUser.currentEndUser) &&
													xr.a.setUserContext(
														Object(Lr.a)(r, [
															'name',
															'id',
															'orgId',
															'status',
															'type',
															'externalId',
															'email',
															'avatarUrl',
														])
													),
												e.abrupt('break', 10)
											);
										case 8:
											return xr.a.setUserContext(), e.abrupt('break', 10);
										case 10:
										case 'end':
											return e.stop();
									}
							},
							e,
							this
						);
					})
				);
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(),
			Hr = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						return (
							Fr(a, n).catch(function(e) {
								yn.a.error(e, { action: n });
							}),
							r
						);
					};
				};
			},
			Kr = n(146),
			qr = n(185),
			zr = n(191),
			Gr = Object(i.b)(wn.g),
			Vr = Object(i.b)(wn.c),
			Yr = Object(i.b)(wn.f),
			Zr = Object(i.b)(wn.e),
			Jr = Object(i.b)(wn.d),
			Qr = Object(i.b)(wn.h),
			Xr = (Object(i.b)(wn.a), n(206)),
			$r = n(66),
			ea = n(263),
			ta = n(187),
			na = n(141),
			ra = n(25),
			aa = n(76),
			oa = Object(ot.createSelector)(
				v.g,
				function(e) {
					return e;
				},
				v.H,
				cr.f,
				nr.f,
				function(e, t, n, r, a) {
					return (
						!(!n && Object(Kr.b)(e)) &&
						(!!r &&
							(!(Object(v.J)('demandbase') && !a) &&
								Object(Kr.a)(e, t).matched))
					);
				}
			),
			ia = Object(ot.createSelector)(
				[Object(v.p)('show_chat_existing_conversations'), v.C],
				function(e, t) {
					return Object(ta.a)(t) ? e : !!t;
				}
			),
			sa = Object(ot.createSelector)(ra.c, ia, function(e, t) {
				return t && !e.isEmpty();
			}),
			ca = Object(ot.createSelector)(
				[v.G, v.F, oa, v.f, v.h, v.w, sa],
				function(e, t, n, r, a, o, i) {
					return (function(e) {
						var t = e.isEndUser,
							n = void 0 !== t && t,
							r = e.isChatEnabled,
							a = void 0 === r || r,
							o = e.isChatTargeted,
							i = void 0 === o || o,
							s = e.audience,
							c = void 0 === s ? na.a : s,
							u = e.segments,
							l = void 0 === u ? [] : u,
							d = e.segmentMembership,
							p = void 0 === d ? [] : d,
							_ = e.hasExistingConversations;
						return (
							!(void 0 === _ || !_) ||
							(!!a &&
								!!i &&
								(c === na.a ||
									(c !== na.b &&
										(!(c !== na.d || !n) ||
											(c === na.c && Object(ea.a)(l, p).length > 0)))))
						);
					})({
						isEndUser: e,
						isChatEnabled: t,
						isChatTargeted: n,
						audience: r,
						segments: a,
						segmentMembership: o,
						hasExistingConversations: i,
					});
				}
			),
			ua = Object(ot.createSelector)(aa.k, aa.i, aa.j, function(e, t, n) {
				return e && t && n;
			}),
			la = n(28),
			da = n(236),
			pa = n(159),
			_a = n(84),
			fa = n(291),
			ma = n(235),
			ba = n(90),
			ga = n(369),
			ha = function(e) {
				var t = e.getState(),
					n = t.Bootstrap.embedConfiguration,
					r = (function(e) {
						return (
							Date.now() / 1e3 -
							(function(e) {
								return (function(e) {
									return (function(e) {
										return e.Targeting;
									})(e).visits;
								})(e).currentSessionStartedAt;
							})(e)
						);
					})(t),
					a = Object(yr.a)(Object(nn.l)(t), function(e) {
						return e.conditions;
					}),
					o = Object(da.a)(a, n.theme.conditions),
					i = Object(pa.a)(o),
					s = Object(_a.a)(i, function(e) {
						return 'secondsOnPage' === e.field || 'secondsOnSite' === e.field;
					}),
					c = Object(yr.a)(s, function(e) {
						switch (e.field) {
							case 'secondsOnPage':
								return e.value;
							case 'secondsOnSite':
								return e.value - Math.floor(r);
						}
					}),
					u = Object(ma.a)(Object(yr.a)(c), function(e) {
						return Math.max(e, 0);
					});
				Object(A.a)(u, function(t) {
					setTimeout(function() {
						va(e);
					}, 1e3 * t);
				});
			},
			va = function(e) {
				var t = e.getState();
				if (
					(function(e) {
						if (Object(v.H)(e)) return !1;
						if (Object(v.D)(e)) return !1;
						var t = e.Bootstrap.embedConfiguration,
							n = Object(ba.a)(Object(nn.l)(e), function(e) {
								return Object(Kr.b)(e.conditions);
							}),
							r = Object(Kr.b)(t.theme.conditions),
							a = Object(Xr.b)(e);
						return n || r || a;
					})(t)
				)
					Object(v.I)(t) || e.dispatch(Object(B.b)());
				else if (
					Object(cr.e)(t) &&
					(!Object(v.J)('demandbase') || Object(nr.e)(t))
				) {
					var n = (function(e) {
						return Object(_a.a)(Object(nn.l)(e), function(t) {
							return (
								zr.b(t) &&
								zr.c(t) &&
								zr.a(t, Object(v.j)(e), Object(v.w)(e), Object($r.c)(e))
							);
						}).map(function(t) {
							return {
								campaign: t,
								targetingAuditLog: Object(Kr.a)(t.conditions, e),
							};
						});
					})(t);
					e.dispatch(Qr(n));
					var r = Object(O.fromJS)(
							Object(yr.a)(
								Object(_a.a)(n, function(e) {
									return e.targetingAuditLog.matched;
								}),
								function(e) {
									return e.campaign;
								}
							)
						).reduce(function(e, t) {
							return e.set(t.get('id'), t);
						}, Object(O.Map)()),
						a = (function(e) {
							var t = Object(_a.a)(Object(nn.l)(e), function(t) {
								return (
									zr.b(t) && zr.c(t) && Object(Kr.a)(t.conditions, e).matched
								);
							});
							return Object(fa.a)(t);
						})(t),
						o = Object(O.fromJS)(a).reduce(function(e, t) {
							return e.set(t.get('id'), t);
						}, Object(O.Map)());
					e.dispatch(
						(function(e) {
							var t = e.activeCampaignsById,
								n = e.activeCampaignsNoAudienceById;
							return {
								type: C,
								payload: {
									activeCampaignsById: t,
									activeCampaignsNoAudienceById: n,
								},
							};
						})({ activeCampaignsById: r, activeCampaignsNoAudienceById: o })
					);
					var i = Object(qr.c)(t);
					if (0 !== i.length)
						if (t.Bootstrap.hasBootstrapped) {
							if (
								ua(t) &&
								(Object(v.K)(t) || !Object(nn.t)(t)) &&
								(Object($r.d)(t) || !Object(nn.q)(t))
							) {
								var s = i[0];
								Object(qr.d)(t) &&
									r.has(s.id) &&
									e.dispatch(
										Vr({ campaignIds: [s.id], sessionId: Object(it.l)(t) })
									);
							}
						} else t.Bootstrap.isBootstrapping || e.dispatch(Object(U.a)());
				}
			},
			Ea = Object(ga.a)(va, 1e3),
			ya = Object(ga.a)(function(e) {
				var t = Object(it.g)(e.getState());
				t && e.dispatch(Object(U.b)(t));
			}, 3e4),
			Oa = function() {
				return { type: y.Fa };
			},
			Ca = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						if (Object(la.g)(a)) return r;
						switch (n.type) {
							case y.Ea:
								!(function(e) {
									setTimeout(function() {
										e.dispatch(Oa());
									}, 2e3);
								})(e),
									ha(e);
								break;
							case y.Fa:
							case y.C:
							case br.l:
							case y.R:
								va(e);
								break;
							case y.O:
							case y.M:
								va(e);
								break;
							case Wn:
							case xn:
							case Kn:
							case qn:
								va(e);
								break;
							case y.L:
							case y.Oa:
								va(e);
								break;
							case y.Pa:
								ha(e), va(e), ya(e);
								break;
							case y.Z:
							case y.X:
							case y.Y:
								Ea(e);
						}
						return r;
					};
				};
			},
			Ta = n(64),
			Ia = n.n(Ta),
			Ma = n(105),
			Pa = n(190),
			Aa = n(231),
			Sa = n(48),
			Da = n(100),
			wa = n(158),
			ka = n(57),
			Ra = n(93),
			ja = n(29),
			Na = function(e) {
				return '@@widget/interaction/' + e;
			},
			Ba = Na('START_BOT_INTERACTION'),
			Ua = Na('SDK_START_BOT_INTERACTION'),
			La = Object(i.b)(Ba),
			Wa = Object(i.b)(Ua),
			xa = Object(O.Set)(),
			Fa = function(e) {
				return !xa.has(e) && ((xa = xa.add(e)), !0);
			},
			Ha = 0;
		var Ka = function(e) {
			return { type: '@@SDK/EVENT', data: e };
		};
		function qa() {
			var e =
				arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			if (!e || e.type !== br.e)
				throw new Error(
					'Cannot create campaign event message for action of type ' +
						(function(e) {
							try {
								return null == e ? b()(e) : b()(e.type);
							} catch (t) {
								return '' + e.type;
							}
						})(e)
				);
			var t = Object(Ir.a)(e, 'payload.conversationEvent.type', null),
				n = Object(Ir.a)(e, 'payload.attributes.campaignId', null);
			if (n && t) {
				var r = { campaignId: n };
				switch (t) {
					case ka.a:
						return { type: 'campaign:click', payload: r };
					case ka.e:
						return { type: 'campaign:submit', payload: r };
					case ka.d:
						return { type: 'campaign:open', payload: r };
					case ka.b:
						return { type: 'campaign:dismiss', payload: r };
				}
			}
			return null;
		}
		function za(e) {
			var t = e.user;
			return t
				? {
						type: 'scheduling:requestMeeting',
						payload: { teamMember: { id: t.id, name: t.name } },
				  }
				: null;
		}
		var Ga = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						!(function(e) {
							var t = Object(ra.l)(e);
							Ha !== t &&
								(window.parent.postMessage(
									Ka({
										type: 'notification',
										payload: { notificationCount: t },
									}),
									'*'
								),
								(Ha = t));
						})(a);
						var o = {
							data: {
								sidebarOpen: a.UI.sidebarOpen,
								widgetVisible: a.UI.widgetVisible,
								isOnline: Object(it.i)(a),
							},
						};
						switch (n.type) {
							case y.Ea:
								window.parent.postMessage(
									Ka({ type: 'ready', payload: o }),
									'*'
								);
								break;
							case br.A:
								if (
									(function(e) {
										return Fa(e.id);
									})(n.payload)
								) {
									var i = (function(e, t) {
										var n =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: {};
										if (!(e && e.type && e.payload && e.type === br.A))
											return null;
										var r = Object(Ir.a)(e, 'payload.authorType'),
											a = Object(Ir.a)(e, 'payload.authorId'),
											o = r === Sa.a.USER && a && Object(v.k)(t)[a];
										return o
											? {
													type: 'message',
													payload: p()({}, n, {
														conversationId: Object(Ir.a)(
															e,
															'payload.conversationId'
														),
														inboxId: Object(Ir.a)(e, 'payload.inboxId'),
														teamMember: { id: o.id, name: o.name },
													}),
											  }
											: null;
									})(n, a, o);
									if (
										(i && window.parent.postMessage(Ka(i), '*'),
										Object(rn.e)(n.payload))
									) {
										var u = Object(Ir.a)(n, 'payload.attributes.offerSchedule'),
											l = Object(v.k)(a)[u],
											d = l && Ka(za({ user: l }));
										d && window.parent.postMessage(d, '*');
									}
								}
								break;
							case br.e:
								var _ = qa(n);
								_ &&
									window.parent.postMessage(
										Ka({ type: _.type, payload: p()({}, o, _.payload) }),
										'*'
									);
								break;
							case y.La:
								window.parent.postMessage(
									Ka({ type: 'activationSuccess' }),
									'*'
								);
								break;
							case y.d:
								window.parent.postMessage(Ka({ type: 'activationClose' }), '*');
								break;
							case Da.d:
								window.parent.postMessage(
									Ka({ type: 'welcomeMessage:open' }),
									'*'
								);
								break;
							case Da.b:
								window.parent.postMessage(
									Ka({ type: 'welcomeMessage:close' }),
									'*'
								);
								break;
							case wa.d:
								window.parent.postMessage(
									Ka({ type: 'awayMessage:open' }),
									'*'
								);
								break;
							case wa.b:
								window.parent.postMessage(
									Ka({ type: 'awayMessage:close' }),
									'*'
								);
								break;
							case br.O:
								window.parent.postMessage(
									Ka({ type: 'sliderMessage:close', payload: n.payload }),
									'*'
								);
								break;
							case y.l:
								var f = Ka({
									type: 'startConversation',
									payload: p()({}, o, {
										conversationId: Object(Ir.a)(n, 'payload.conversationId'),
										inboxId: Object(Ir.a)(n, 'payload.inboxId'),
									}),
								});
								window.parent.postMessage(f, '*');
								break;
							case y.o:
								window.parent.postMessage(
									Ka({
										type: 'message:sent',
										payload: p()({}, o, {
											conversationId: Object(Ir.a)(n, 'payload.conversationId'),
											inboxId: Object(Ir.a)(n, 'payload.inboxId'),
										}),
									}),
									'*'
								);
								break;
							case H.h:
								window.parent.postMessage(
									Object(Ra.g)({
										endUser: {
											email: n.payload.attributes.email,
											type: 'LEAD',
										},
									}),
									'*'
								);
								break;
							case H.b:
								window.parent.postMessage(
									Object(Ra.g)({
										endUser: { email: n.payload.email, type: 'LEAD' },
									}),
									'*'
								);
								break;
							case y.C:
								window.parent.postMessage(Object(Ra.a)(), '*');
								break;
							case Da.e:
								window.parent.postMessage(n, '*');
								break;
							case xt.i:
								var m = Object(v.k)(a)[n.payload.agentId],
									b = m && Ka(za({ user: m }));
								b && window.parent.postMessage(b, '*');
								break;
							case xt.h:
								window.parent.postMessage(
									Ka(
										(function(e, t) {
											if (!(e && e.type && e.payload && e.type === xt.h))
												return null;
											var n = new Wt.b(e.payload),
												r = Object(v.k)(t)[n.agentId];
											return r
												? {
														type: 'scheduling:meetingBooked',
														payload: {
															conversationId: n.conversationId,
															teamMember: { id: r.id, name: r.name },
															meeting: {
																time: n.availabilitySlot,
																duration: n.slotDuration,
																timeZone: n.agentTimeZone,
															},
														},
												  }
												: null;
										})(n, a)
									),
									'*'
								);
								break;
							case y.i:
								window.parent.postMessage(
									Ka(
										(function(e) {
											if (!(e && e.type && e.payload && e.type === y.i))
												return null;
											var t = e.payload,
												n = t.conversationId,
												r = t.attributes,
												a = t.body;
											return {
												type: 'conversation:buttonClicked',
												payload: {
													conversationId: n,
													messageId: t.id,
													createdAt: t.createdAt,
													authorId: t.authorId,
													questionId: r.questionId,
													buttonBody: a,
												},
											};
										})(n)
									),
									'*'
								);
								break;
							case H.l:
							case H.k:
							case Aa.a:
								window.parent.postMessage(n, '*');
								break;
							case y.W:
								!(function(e, t) {
									var n = e.getState(),
										r = t.type,
										a = t.payload;
									switch (r) {
										case 'openActivationTakeover':
											return e.dispatch(ja.displayActivationTakeover());
										case 'scroll':
											return e.dispatch(Object(B.f)(a));
										case 'mouseLeave':
											return e.dispatch(Object(B.e)(a));
										case 'mouseEnter':
											return e.dispatch(Object(B.d)(a));
										case 'slugChange':
											return e.dispatch(La(a));
										case 'iframeResized':
											return e.dispatch(
												ja.iframeResizeDone(
													window.innerWidth,
													window.innerHeight
												)
											);
										case 'integrationEvent':
											return e.dispatch({
												type: 'INTEGRATION_EVENT',
												payload: a,
											});
										case Pa.a:
											return e.dispatch(nt());
										case y.Oa:
										case Pa.b:
											return e.dispatch(Object(U.c)(a));
										case y.Pa:
										case Pa.c:
											return e.dispatch({ type: y.Pa, payload: a });
										case s:
										case Pa.d:
											if (!Object(v.M)(n, a))
												return void yn.a.log(
													'Not rehydrating store due to matching identifiers'
												);
											var o = Object(Ma.a)({}, n.UI, a.UI, {
													currentSidebarView: y.Ha,
												}),
												i = Object(Ma.a)(
													{},
													n.WelcomeMessage,
													a.WelcomeMessage
												),
												u = Object(Ma.a)({}, n.AwayMessage, a.AwayMessage),
												l = Object(Ma.a)({}, n.Targeting, a.Targeting),
												d = Object(Ma.a)({}, n.DriftUser, a.DriftUser),
												_ = Object(Ma.a)(
													{},
													{
														externallyModifiedAttributes:
															n.EndUser.externallyModifiedAttributes,
													}
												),
												f = p()({}, a, {
													UI: o,
													WelcomeMessage: i,
													AwayMessage: u,
													DriftUser: d,
													Targeting: l,
													EndUser: _,
												});
											return e.dispatch(c(f)).then(function() {
												var t = n.Bootstrap.embedConfigurationOverride;
												return t ? e.dispatch(Object(U.c)(t)) : Ia.a.resolve();
											});
										default:
											e.dispatch(Et({ method: r, options: a }));
									}
								})(e, n.payload);
								break;
							case s:
								Object(v.a)(a) && e.dispatch(Object(U.a)());
						}
						return r;
					};
				};
			},
			Va = n(103),
			Ya = n.n(Va);
		var Za = n(296),
			Ja = function(e, t, n) {
				var r = [],
					a = Object(O.Map)();
				Object(A.a)(e, function(e) {
					e.attachments &&
						Object(A.a)(e.attachments, function(e) {
							t.Attachment.attachmentsById[e] || r.push(e);
						});
					var n = (function(e) {
						if (e.attributes && e.attributes.supportBotLinks) return [];
						var t = [],
							n = new DOMParser().parseFromString(e.body || '', 'text/html');
						return (
							Object(A.a)(n.getElementsByTagName('a'), function(e) {
								/^mailto:/.test(e.href) || t.push(e.href);
							}),
							t
						);
					})(e);
					n.length > 0 && (a = a.set(e.id, Object(O.Set)(n)));
				}),
					a.isEmpty() || n.dispatch(Ut.a.updateLinks(a)),
					r.length > 0 && n.dispatch(Object(Za.b)(r));
			},
			Qa = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						switch (n.type) {
							case br.s:
								Ja(n.payload.toJS(), a, e);
								break;
							case br.A:
								Ja([n.payload], a, e);
								break;
							case y.k:
								n.metadata.options.goToConversation &&
									e.dispatch(Object(Re.f)(n.metadata.localConversationId));
								break;
							case y.l:
								a.Message.getIn(
									[
										'messageIdsByConversationId',
										n.metadata.localConversationId,
									],
									Object(O.List)()
								)
									.filter(function(e) {
										return e !== n.metadata.localConversationId;
									})
									.map(function(e) {
										return a.Message.getIn(['messagesById', e]);
									})
									.sortBy(function(e) {
										return e.get('createdAt');
									})
									.forEach(function(t) {
										e.dispatch(
											Object(Re.d)({
												conversationId: n.payload.conversationId,
												body: t.get('body'),
												attachments: t.get('attachments').toJS(),
												createdAt: t.get('createdAt'),
												localId: t.getIn(['attributes', 'widgetGuid']),
											})
										);
									}),
									n.metadata.options.goToConversation &&
										e.dispatch(Object(Re.f)(n.payload.conversationId));
						}
						return r;
					};
				};
			},
			Xa = new Audio(n(984)),
			$a = function(e, t) {
				(function(e) {
					return !eo.has(e) && ((eo = eo.add(e)), !0);
				})(t.id) &&
					e.Bootstrap.embedConfiguration.theme.soundNotificationEnabled &&
					(function(e, t) {
						return (
							('hidden' === document.visibilityState || !e.UI.sidebarOpen) &&
							t &&
							'CHAT' === t.type &&
							t.authorType === Sa.a.USER
						);
					})(e, t) &&
					Xa.play();
			},
			eo = Object(O.Set)(),
			to = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						switch (n.type) {
							case br.A:
								!(function(e, t) {
									$a(e, t);
								})(a, n.payload);
						}
						return r;
					};
				};
			},
			no = n(36),
			ro = Object(ot.createSelector)(
				function(e) {
					return e.WelcomeMessage;
				},
				function(e) {
					return e.active || e.hovered || e.dismissed;
				}
			),
			ao = Object(ot.createSelector)(
				function(e) {
					return e.AwayMessage;
				},
				function(e) {
					return e.active || e.dismissed;
				}
			),
			oo = Object(ot.createSelector)(
				[
					function(e) {
						return e.UI;
					},
					v.v,
					it.i,
					ca,
					ro,
					ao,
					v.q,
					la.f,
					la.m,
					la.g,
				],
				function(e, t, n, r, a, o, i, s, c, u) {
					return (function(e) {
						var t = e.UI,
							n = void 0 === t ? {} : t,
							r = e.preview,
							a = void 0 === r ? {} : r,
							o = e.isOnline,
							i = void 0 === o || o,
							s = e.isAudienceTargeted,
							c = void 0 !== s && s,
							u = e.isWelcomeMessageVisible,
							l = void 0 !== u && u,
							d = e.isAwayMessageVisible,
							p = void 0 !== d && d,
							_ = e.emailCaptureSliderSubmitted,
							f = void 0 !== _ && _,
							m = e.widgetHalfHeight,
							b = void 0 !== m && m,
							g = e.embeddedMessenger,
							h = void 0 !== g && g;
						return n.activationTakeoverOpen
							? no.a
							: n.showConsentTakeover && !f
							? b
								? no.c
								: no.b
							: n.showConsentTakeover && f
							? no.d
							: h
							? no.e
							: n.sidebarOpen || n.sidebarTweening
							? b
								? no.m
								: no.l
							: 'EMAIL_CAPTURE' === a.type
							? no.h
							: 'ANNOUNCEMENT_PREVIEW' === a.type &&
							  a.attributes &&
							  'WELCOME_MESSAGE' === a.attributes.campaignDisplayType
							? no.r
							: a.attributes && 'TAKEOVER' === a.attributes.campaignDisplayType
							? no.p
							: 'ANNOUNCEMENT_PREVIEW' === a.type ||
							  'RECENT_MESSAGE_PREVIEW' === a.type
							? no.n
							: 'NO_PREVIEW' !== a.type
							? no.k
							: l
							? no.r
							: p
							? no.g
							: n.widgetVisible && c
							? i
								? no.q
								: no.f
							: no.i;
					})({
						UI: e,
						preview: t,
						isOnline: n,
						isAudienceTargeted: r,
						isWelcomeMessageVisible: a,
						isAwayMessageVisible: o,
						gates: i,
						emailCaptureSliderSubmitted: s,
						widgetHalfHeight: c,
						embeddedMessenger: u,
					});
				}
			),
			io = n(850);
		var so = function(e) {
				return function(t) {
					return function(n) {
						var r = e.getState(),
							a = t(n),
							o = e.getState(),
							i = oo(o);
						return (
							o.UI.iframeSize !== i
								? (window.parent.postMessage(
										{ type: 'changeSize', displayType: i },
										'*'
								  ),
								  i === no.l
										? window.parent.postMessage(
												{ type: 'enableSidebarModal' },
												'*'
										  )
										: o.UI.iframeSize === no.l &&
										  window.parent.postMessage(
												{ type: 'disableSidebarModal' },
												'*'
										  ),
								  e.dispatch(
										Object(ja.iframeResize)(
											i,
											(function(e, t) {
												if (!e || !t) return !0;
												var n = no.o[e].default,
													r = no.o[t].default;
												return (
													n.top !== r.top ||
													n.left !== r.left ||
													n.bottom !== r.bottom ||
													n.right !== r.right
												);
											})(i, o.UI.iframeSize)
										)
								  ))
								: n.type === y.Ba &&
								  (function(e, t) {
										return !Object(io.a)(
											e.UI.iframeOverrides,
											t.UI.iframeOverrides
										);
								  })(o, r) &&
								  window.parent.postMessage(
										{
											type: 'changeSize',
											displayType: i,
											overrides: o.UI.iframeOverrides,
										},
										'*'
								  ),
							a
						);
					};
				};
			},
			co = function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							a = e.getState();
						if (n && n.type)
							switch (n.type) {
								case N.a:
									var o = Object(ra.k)(a);
									e.dispatch(Object(ja.setIdentifiedConversation)(o));
									break;
								case br.o:
									if (a.UI.currentSidebarView === y.Ha) {
										var i = Object(ra.c)(a);
										i.isEmpty()
											? e.dispatch(Object(ja.setSidebarView)(y.Ia))
											: e.dispatch(Object(Re.i)(i.getIn([0, 'id'])));
									}
							}
						return r;
					};
				};
			},
			uo = n(370),
			lo = n.n(uo),
			po = Object(i.b)(q),
			_o = Object(i.b)(z),
			fo = Object(i.b)(G),
			mo = Object(i.b)(V),
			bo = n(317),
			go = Object(gt.combineEpics)(function(e, t) {
				return e
					.ofType(x)
					.map(function(e) {
						return e.payload;
					})
					.map(function(e) {
						var n = e.method,
							r = e.options,
							a = void 0 === r ? {} : r;
						switch (n) {
							case 'showWidget':
							case 'hideWidget':
							case 'showWelcomeOrAwayMessage':
							case 'openChat':
							case 'hideChat':
							case 'openSidebar':
							case 'closeSidebar':
							case 'toggleSidebar':
							case 'goToNewConversation':
							case 'goToConversationList':
								return ja[n](lo()(a, { triggeredFromWidgetAPI: !0 }));
							case 'showWelcomeMessage':
							case 'hideWelcomeMessage':
								return De[n](lo()(a, { triggeredFromWidgetAPI: !0 }));
							case 'showAwayMessage':
							case 'hideAwayMessage':
								return we[n](lo()(a, { triggeredFromWidgetAPI: !0 }));
							case 'enrollInCampaign':
								return (function(e) {
									var t = e.campaignId,
										n = e.attributes;
									return function(e, r) {
										var a = g.d + '/campaigns/' + t + '/enroll',
											o = Object(h.b)(a, {
												method: 'POST',
												body: b()({ attributes: n }),
												headers: Object(h.a)([Object(h.e)(), Object(v.d)(r())]),
											});
										return e({ types: [T, I, M], promise: o });
									};
								})(a);
							case 'bootstrapEndUser':
								return Object(U.a)();
							case q:
							case Pa.f:
								return po(a);
							case 'startInteraction':
								return Object(it.q)(t.getState())
									? Wa(a)
									: (yn.a.warn('Unknown widget API call: ' + n), null);
							case xt.i:
							case Pa.e:
								return a && a.agentId
									? (yn.a.info(
											'Starting schedule meeting flow for agent id = ' +
												a.agentId +
												'…'
									  ),
									  Object(Lt.h)(a.agentId, {
											meetingType: a.meetingType,
											meetingSource: a.meetingSource,
											widgetApiTriggered: !0,
									  }))
									: (yn.a.warn(
											'Malformed ' + n + " payload. Expects 'agentId'",
											a
									  ),
									  null);
							case 'widgetEventV1':
								var o = Ya()(a, 4),
									i = o[0],
									s = o[1],
									c = o[2],
									u = o[3];
								return 'identify' === i
									? yt({ attributes: c })
									: 'track' === i
									? Object(bo.a)({ event: s, attributes: c, context: u })
									: null;
							default:
								return yn.a.warn('Unknown widget API call: ' + n), null;
						}
					})
					.mergeMap(function(e) {
						return e ? ht.Observable.of(e) : ht.Observable.empty();
					});
			}),
			ho = n(436),
			vo = !1,
			Eo = function(e, t) {
				return e.mergeMap(function() {
					var e = t.getState(),
						n = e.UI.sidebarOpen,
						r = {
							data: {
								sidebarOpen: n,
								widgetVisible: e.UI.widgetVisible,
								isOnline: Object(it.i)(e),
							},
						};
					if (n !== vo) {
						vo = n;
						var a = n ? 'sidebarOpen' : 'sidebarClose';
						window.parent.postMessage(
							(function(e) {
								return { type: '@@SDK/EVENT', data: e };
							})({ type: a, payload: r }),
							'*'
						);
					}
					return ht.Observable.empty();
				});
			},
			yo = function(e) {
				return function(t) {
					return Object(nn.f)(t).find(function(t) {
						return t.attributes.interactionId === e;
					});
				};
			},
			Oo = function(e, t) {
				var n = {
					body: '',
					attributes: {
						withGreeting: !0,
						startInteraction: e,
						isFromConversationalLandingPage:
							arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					},
					status: 'BULK_SENT',
					options: {
						goToConversation:
							!(arguments.length > 3 && void 0 !== arguments[3]) ||
							arguments[3],
					},
				};
				return t && (n.inboxId = t.inboxId), n;
			},
			Co = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType(Ba)
						.waitForBootstrap(e, t)
						.pluck('payload')
						.map(function(e) {
							return (function(e) {
								return function(t) {
									var n = Object(v.l)(t).interactionSlugMap;
									return n && n[e];
								};
							})(e.slug.replace(/^#/, ''))(t.getState());
						})
						.filter(function(e) {
							return !!e;
						})
						.map(function(e) {
							return Object(Re.a)(Oo(e, yo(e)(t.getState())));
						});
				},
				function(e, t) {
					return e
						.ofType(Ba, Ua)
						.filter(function() {
							return !Object(nn.o)(t.getState());
						})
						.filter(function() {
							return Object(nn.a)(t.getState());
						})
						.map(function() {
							return Object(U.a)();
						});
				},
				function(e, t) {
					return e
						.ofType(Ua)
						.waitForBootstrap(e, t)
						.pluck('payload')
						.filter(function(e) {
							return !!e.interactionId;
						})
						.map(function(e) {
							var n = e.interactionId,
								r = e.isFromConversationalLandingPage,
								a = e.goToConversation,
								o = void 0 === a || a;
							return Object(Re.a)(Oo(n, yo(n)(t.getState()), r, o));
						});
				}
			),
			To = n(203),
			Io = n(360),
			Mo = Object(h.e)(),
			Po = (function() {
				var e = cn()(
					on.a.mark(function e(t, n) {
						return on.a.wrap(
							function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												Object(h.b)(g.d + '/agents/' + n + '/status', {
													method: 'GET',
													headers: p()({}, Mo, {
														Authorization: 'bearer ' + t,
													}),
												})
											);
										case 1:
										case 'end':
											return e.stop();
									}
							},
							e,
							this
						);
					})
				);
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(),
			Ao = function(e, t) {
				return e
					.ofType(To.a)
					.pluck('payload')
					.mergeMap(function(e) {
						var n = Object(v.b)(t.getState());
						return ht.Observable.fromPromise(Po(n, e))
							.map(function(t) {
								return Io.c(p()({}, t, { agentId: e }));
							})
							.catch(function(t) {
								return ht.Observable.of(Io.b({ error: t, agentId: e }));
							});
					});
			},
			So = (n(720), n(696), n(638), n(701), n(628), n(297)),
			Do = n(113),
			wo = Object(O.Set)(),
			ko = Object(gt.combineEpics)(
				function(e, t) {
					var n = t.dispatch;
					return e.ofType(br.J).mergeMap(function(t) {
						var r = t.payload;
						return (
							n(Object(Do.a)()),
							e
								.ofType(Y.c)
								.first()
								.map(function() {
									return Object(Re.c)(r);
								})
								.takeUntil(e.ofType(Y.b))
						);
					});
				},
				function(e, t) {
					var n = t.dispatch;
					return e.ofType(br.E).mergeMap(function(t) {
						var r = t.payload;
						return (
							n(Object(Do.a)()),
							e
								.ofType(Y.c)
								.first()
								.map(function() {
									return Object(Re.b)(r);
								})
								.takeUntil(e.ofType(Y.b))
						);
					});
				},
				function(e, t) {
					return e
						.ofType(br.v)
						.map(function(e) {
							return e.payload.messageId;
						})
						.filter(function(e) {
							return Object(aa.m)(t.getState(), { messageId: e });
						})
						.mergeMap(function(n) {
							return (function(e) {
								return (function(e) {
									return e.Visibility;
								})(e).visible;
							})(t.getState())
								? ht.Observable.of(n)
								: e
										.ofType(An.a)
										.filter(function(e) {
											return !!e.payload;
										})
										.map(function() {
											return n;
										})
										.first();
						})
						.map(function(e) {
							return Ot.C(e);
						});
				},
				function(e) {
					return e
						.ofType(br.y)
						.pluck('payload')
						.map(function(e) {
							return e.conversation
								? Ot.k(Object(O.fromJS)([e.conversation]))
								: Ot.k(Object(O.fromJS)([]));
						});
				},
				function(e) {
					return e
						.ofType(br.w)
						.pluck('payload')
						.map(function(e) {
							return Object(O.fromJS)(e.campaigns);
						})
						.map(So.b)
						.map(Ot.h);
				},
				function(e) {
					return e
						.ofType(br.x)
						.pluck('payload')
						.map(function(e) {
							return Ot.i(Object(O.fromJS)(e));
						});
				},
				function(e, t) {
					return e
						.ofType(br.q)
						.map(function(e) {
							return p()({}, e.payload, {
								authorizationHeader: Object(v.d)(t.getState()),
							});
						})
						.mergeMap(function(e) {
							return (function(e) {
								var t = e.conversationId,
									n = e.authorizationHeader;
								return ht.Observable.ajax({
									url:
										g.d +
										'/conversations/' +
										t +
										'/messages?' +
										Object(h.c)({ withReceipts: !0 }),
									method: 'GET',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), n]),
								}).map(function(e) {
									return Object(O.fromJS)(e.response);
								});
							})(e)
								.map(function(e) {
									return Ot.n(e);
								})
								.catch(function(e) {
									return ht.Observable.of(Ot.m(e));
								});
						});
				},
				function(e) {
					return e.ofType(br.f, br.a).mergeMap(function(t) {
						var n = t.type === br.a,
							r = t.payload,
							a = Object(Ir.a)(r, 'attributes.widgetGuid'),
							o = Object(Ir.a)(r, 'attributes.clientTimestamp'),
							i = e
								.ofType(br.A)
								.pluck('payload')
								.filter(function(e) {
									return Object(Ir.a)(e, 'attributes.widgetGuid') === a;
								})
								.filter(function() {
									return !wo.has(a);
								}),
							s = e
								.ofType(n ? y.j : y.m)
								.pluck('metadata', 'message')
								.filter(function(e) {
									return Object(Ir.a)(e, 'attributes.widgetGuid') === a;
								})
								.do(function() {
									yn.a.log(
										'Canceling scheduled timeout for failed message send ' + a
									);
								});
						return ht.Observable.merge(i, ht.Observable.timer(15e3))
							.first()
							.mergeMap(function(e) {
								var t = Date.now() - o;
								if (t < 0)
									return (
										yn.a.warn('not logging negative message round trip time'),
										ht.Observable.empty()
									);
								wo = wo.add(a);
								var r = !e;
								return (
									r
										? yn.a.warn(
												'message took longer than timeout: ' +
													t +
													'ms, newConvo=' +
													n +
													', timeout=' +
													r
										  )
										: yn.a.log(
												'message round trip time: ' +
													t +
													'ms, newConvo=' +
													n +
													', timeout=' +
													r
										  ),
									ht.Observable.of(
										Ot.w({
											isFirstMessage: n,
											isTimeout: r,
											roundTripMilliseconds: t,
										})
									)
								);
							})
							.takeUntil(s);
					});
				},
				function(e, t) {
					return e
						.ofType(br.B)
						.map(function(e) {
							return p()({}, e.payload, {
								authorizationHeader: Object(v.d)(t.getState()),
							});
						})
						.mergeMap(function(e) {
							return (function(e) {
								var t = e.isFirstMessage,
									n = e.isTimeout,
									r = e.roundTripMilliseconds,
									a = e.authorizationHeader,
									o = [],
									i = t ? 'conversationRoundTripTime' : 'messageRoundTripTime';
								return (
									o.push({ name: i, value: r }),
									n && o.push({ name: i + '-timeout', value: 1 }),
									ht.Observable.ajax({
										url: g.d + '/stats/widget',
										method: 'POST',
										crossDomain: !0,
										responseType: 'json',
										headers: Object(h.a)([Object(h.e)(), a]),
										body: b()(o),
									})
								);
							})(e)
								.map(function() {
									return Ot.y();
								})
								.catch(function(e) {
									return ht.Observable.of(Ot.x(e));
								});
						});
				},
				function(e) {
					return e
						.ofType(Ct.i)
						.pluck('payload')
						.filter(function(e) {
							return e.clusterName === Ct.l.MESSAGES;
						})
						.filter(function(e) {
							return e.channelName === Ct.k.USER;
						})
						.switchMap(function(e) {
							var t = e.channel;
							return ht.Observable.create(function(e) {
								t.on('change', function(t) {
									var n = t.body,
										r = n.type,
										a = n.object,
										o = n.data;
									'CREATE' === r &&
										a &&
										'MESSAGE' === a.type &&
										e.next(Object(Ot.v)(o));
								}),
									t.on('event', function(t) {
										var n = t.body,
											r = n.type,
											a = n.data;
										'emailCapture' === r && e.next(Object(Ra.b)(a));
									}),
									t.on('conversationPermaclose', function(t) {
										var n = t.conversationId;
										e.next(Ot.u({ isPermaclosed: !0, conversationId: n }));
									}),
									t.on('conversation', function(t) {
										e.next(Ot.t(t));
									}),
									t.on('campaign-conversations', function(t) {
										e.next(Ot.r(t));
									}),
									t.on('campaign-enrollment', function(t) {
										e.next(Ot.s(t));
									});
							});
						});
				},
				function(e) {
					return e.ofType(y.c).map(function() {
						return Tt({ clusterName: Ct.l.MESSAGES });
					});
				},
				function(e, t) {
					var n = t.dispatch;
					return e.ofType(br.F).mergeMap(function(t) {
						var r = t.payload;
						return (
							n(Object(Do.a)()),
							e
								.ofType(Y.c)
								.first()
								.map(function() {
									return Ot.c(r);
								})
								.takeUntil(e.ofType(Y.b))
						);
					});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(br.b)
						.pluck('payload')
						.mergeMap(function(e) {
							return (function(e) {
								var t = e.conversationId,
									n = e.type,
									r = e.authorizationHeader,
									a = e.conversationEventExtra,
									o = void 0 === a ? void 0 : a;
								return ht.Observable.ajax({
									url: g.d + '/conversations/' + t + '/messages',
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), r]),
									body: b()({
										type: 'CONVERSATION_EVENT',
										conversationEvent: p()({ type: n }, o),
									}),
								}).map(function(e) {
									return e.response;
								});
							})(p()({}, e, { authorizationHeader: Object(v.d)(n()) }))
								.map(function(e) {
									return Ot.f(e);
								})
								.startWith(Ot.e(e))
								.catch(function(t) {
									return ht.Observable.of(Ot.d(p()({}, e, { error: t })));
								});
						});
				},
				function(e) {
					return e
						.ofType(y.l)
						.pluck('payload')
						.mergeMap(function(e) {
							var t = e.attributes,
								n = t.email,
								r = t.integrations;
							return n
								? ht.Observable.of(
										Ot.c({
											conversationId: e.conversationId,
											type: ka.c,
											conversationEventExtra: {
												email: n,
												leadCapture: {
													email: n,
													integrations: r,
													context: e.context,
												},
											},
										})
								  )
								: ht.Observable.empty();
						});
				},
				function(e) {
					return e
						.ofType(br.i)
						.pluck('payload')
						.map(function(e) {
							return e
								.filter(function(e) {
									return (
										'Read' !== e.getIn(['messages', 0, 'viewerRecipientStatus'])
									);
								})
								.map(function(e) {
									return e.get('conversation');
								})
								.filter(function(e) {
									return !!e.get('campaignId');
								})
								.reduce(function(e, t) {
									return e.add(t.get('campaignId'));
								}, Object(O.Set)());
						})
						.map(function(e) {
							return Ot.G(e);
						});
				},
				function(e) {
					return e
						.ofType(y.o)
						.pluck('payload')
						.mergeMap(function(e) {
							return e.attributes.buttonClicked
								? ht.Observable.of(Ot.a(e))
								: ht.Observable.empty();
						});
				},
				function(e, t) {
					return e
						.ofType(br.p)
						.pluck('payload')
						.filter(function(e) {
							var n = e.conversationId;
							return !Object(ra.f)(t.getState(), n);
						})
						.switchMap(function(e) {
							return (function(e) {
								var t = e.conversationId,
									n = e.authorizationHeader;
								return ht.Observable.ajax({
									url: g.d + '/conversations/' + t + '/permaclosed',
									method: 'GET',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), n]),
								})
									.map(function(e) {
										return !!e.response.sentMessage;
									})
									.catch(function() {
										return !1;
									});
							})(p()({}, e, { authorizationHeader: Object(v.d)(t.getState()) }))
								.timeout(2e3)
								.map(function(t) {
									return Ot.u({
										isPermaclosed: t,
										conversationId: e.conversationId,
									});
								})
								.catch(function() {
									return ht.Observable.of(
										Ot.u({
											isPermaclosed: !1,
											conversationId: e.conversationId,
										})
									);
								});
						});
				},
				function(e, t) {
					return e
						.ofType(br.A)
						.pluck('payload')
						.filter(function(e) {
							return Object(Ir.a)(e, 'attributes.delayMilliseconds', !1);
						})
						.filter(function(e) {
							return Object(tn.c)(t.getState()).id === e.authorId;
						})
						.mergeMap(function(e) {
							var t = Object(Ir.a)(e, 'attributes.delayMilliseconds', 0);
							return t > 500
								? ht.Observable.concat(
										ht.Observable.of(Ot.o({ messageId: e.id })),
										ht.Observable.of(Ot.p({ messageId: e.id })).delay(t)
								  )
								: ht.Observable.empty();
						});
				}
			),
			Ro = function(e) {
				return '@@widget/integration/' + e;
			},
			jo = Ro('IDENTIFY_BY_HUBSPOT_UTK'),
			No = Ro('IDENTIFY_BY_HUBSPOT_UTK_SUCCESS'),
			Bo = Ro('IDENTIFY_BY_HUBSPOT_UTK_FAILURE'),
			Uo = Ro('IDENTIFY_BY_MARKETO_MUNCHKIN'),
			Lo = Ro('IDENTIFY_BY_MARKETO_MUNCHKIN_SUCCESS'),
			Wo = Ro('IDENTIFY_BY_MARKETO_MUNCHKIN_FAILURE'),
			xo = (Object(i.b)(jo), Object(i.b)(No)),
			Fo = Object(i.b)(Bo),
			Ho = (Object(i.b)(Uo), Object(i.b)(Lo)),
			Ko = Object(i.b)(Wo),
			qo = Object(gt.combineEpics)(
				function(e, t) {
					return e
						.ofType('INTEGRATION_EVENT')
						.pluck('payload')
						.filter(function(e) {
							return 'hubspot' === e.integration;
						})
						.filter(function(e) {
							return !!e.isNewUtk;
						})
						.map(function(e) {
							var n = t.getState();
							return {
								utk: e.utk,
								orgId: n.Bootstrap.orgId,
								anonId: n.Bootstrap.anonymousId,
							};
						})
						.mergeMap(function(e) {
							return (function(e) {
								return ht.Observable.ajax({
									url: g.e + '/integrations/hubspot/utk',
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)()]),
									body: b()(e),
								})
									.map(function(e) {
										return e.response;
									})
									.map(function(e) {
										if (e.email) return e;
										throw new Error('No identity for utk');
									});
							})(e)
								.retryWhen(function(e) {
									return e
										.scan(function(e, t) {
											if (e >= 3) throw t;
											return e + 1;
										}, 0)
										.mergeMap(function(e) {
											return ht.Observable.timer(5e3 * e);
										});
								})
								.map(function(e) {
									return xo(e);
								})
								.catch(function(e) {
									return ht.Observable.of(Fo(e));
								});
						});
				},
				function(e) {
					return e
						.ofType(No)
						.pluck('payload')
						.filter(function(e) {
							return !!e.email;
						})
						.map(function() {
							return Object(U.a)();
						});
				},
				function(e, t) {
					return e
						.ofType('INTEGRATION_EVENT')
						.pluck('payload')
						.filter(function(e) {
							return 'marketo' === e.integration;
						})
						.filter(function(e) {
							return !!e.isNewMunchkinCookie;
						})
						.map(function(e) {
							var n = t.getState();
							return {
								munchkin: e.munchkinValue,
								orgId: n.Bootstrap.orgId,
								anonId: n.Bootstrap.anonymousId,
							};
						})
						.mergeMap(function(e) {
							return (function(e) {
								return ht.Observable.ajax({
									url: g.e + '/integrations/marketo/munchkin',
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)()]),
									body: b()(e),
								})
									.map(function(e) {
										return e.response;
									})
									.map(function(e) {
										if (e.email) return e;
										throw new Error('No identity for munchkin');
									});
							})(e)
								.retryWhen(function(e) {
									return e
										.scan(function(e, t) {
											if (e >= 3) throw t;
											return e + 1;
										}, 0)
										.mergeMap(function(e) {
											return ht.Observable.timer(5e3 * e);
										});
								})
								.map(function(e) {
									return Ho(e);
								})
								.catch(function(e) {
									return ht.Observable.of(Ko(e));
								});
						});
				},
				function(e) {
					return e
						.ofType(Lo)
						.pluck('payload')
						.filter(function(e) {
							return !!e.email;
						})
						.map(function() {
							return Object(U.a)();
						});
				}
			),
			zo = n(253),
			Go = n(186),
			Vo = y.a,
			Yo = y.c,
			Zo = y.b,
			Jo = y.Q,
			Qo = y.R,
			Xo = y.P,
			$o = function(e) {
				var t = e.externalId,
					n = e.email,
					r = e.anonymousId,
					a = e.orgId,
					o = e.oneshotToken,
					i = e.consentId,
					s = {};
				s =
					null != t
						? { user_id: t, email: n, oneshot_token: o }
						: { lead_id: r, oneshot_token: o };
				var c = {
						method: 'POST',
						headers: Object(h.d)(),
						body: Object(h.c)(
							Object(Go.default)({}, s, {
								org_id: a,
								grant_type: 'sdk',
								redirect_uri: 'http://localhost:3000/',
								client_id: g.c,
								skip_layer: !0,
								consent_id: i,
							})
						),
					},
					u = Object(h.b)(g.b + '/oauth/token', c);
				return { types: [Vo, Yo, Zo], promise: u };
			},
			ei = n(114),
			ti = Object(i.b)(Aa.a),
			ni = n(139),
			ri = [br.n, Ct.b],
			ai = Object(gt.combineEpics)(
				function(e, t) {
					return e.ofType(y.L, y.C).switchMap(function() {
						return ht.Observable.timer(3e5, 6e5)
							.map(function() {
								return Object(it.g)(t.getState());
							})
							.map(function(e) {
								return Object(zo.b)(e);
							});
					});
				},
				function(e, t) {
					var n = t.getState;
					return e.ofType(y.c).map(function() {
						return Object(L.c)(Object(it.k)(n()));
					});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(y.c)
						.filter(function() {
							return !Object(v.K)(n()) && nn.t(n());
						})
						.map(function() {
							var e = n();
							return (function(e, t) {
								return function(n, r) {
									var a = {
											method: 'GET',
											headers: Object(h.a)([Object(h.e)(), Object(v.d)(r())]),
										},
										o = Object(h.b)(
											g.e + '/end_users/' + e + '/memberships?orgId=' + t,
											a
										);
									return n({ types: [Jo, Qo, Xo], promise: o });
								};
							})(Object(v.j)(e).id, Object(it.k)(e));
						});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(y.Ea)
						.filter(function() {
							return nn.a(n());
						})
						.map(function() {
							return Object(zo.a)();
						});
				},
				function(e, t) {
					var n = t.getState;
					return e.ofType(y.A).map(function() {
						var e = n(),
							t = Object(it.k)(e),
							r = nn.i(e),
							a = nn.e(e),
							o = nn.h(e),
							i = nn.j(e),
							s = Object(ei.c)(e);
						return $o(
							r
								? {
										externalId: r,
										email: o,
										orgId: t,
										oneshotToken: i,
										consentId: s,
								  }
								: {
										anonymousId: a,
										email: o,
										orgId: t,
										oneshotToken: i,
										consentId: s,
								  }
						);
					});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(y.c)
						.pluck('payload', 'endUser')
						.mergeMap(function(e) {
							var t = e.primaryIdentity,
								r = e.type,
								a = n(),
								o = nn.i(a),
								i = nn.e(a);
							return (
								o
									? t !== o && r === ni.a && (o = t)
									: t !== i && (r === ni.a ? (o = t) : r === ni.b && (i = t)),
								ht.Observable.of(
									Object(Ra.h)({ externalId: o, anonymousId: i })
								)
							);
						});
				},
				function(e) {
					return e.ofType(y.c).switchMap(function() {
						return e
							.ofType(br.o)
							.first()
							.map(function() {
								return { type: y.C };
							});
					});
				},
				function(e, t) {
					var n = t.getState;
					return e.ofType
						.apply(e, ri)
						.filter(function() {
							return nn.s(n());
						})
						.filter(function() {
							return nn.r(n());
						})
						.map(function() {
							return { type: y.B };
						});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(y.c)
						.filter(function() {
							return !!nn.j(n());
						})
						.pluck('payload', 'endUser')
						.mergeMap(function(e) {
							var t = e.primaryIdentity,
								r = e.type,
								a = n(),
								o = nn.i(a),
								i = nn.e(a);
							if (o) {
								if (t !== o) {
									if (r === ni.a)
										return ht.Observable.of(Object(Ra.i)({ externalId: t }));
									console.warn(
										'Cannot convert end user type from END_USER to LEAD'
									);
								}
							} else if (t !== i) {
								if (r === ni.a)
									return ht.Observable.of(Object(Ra.i)({ externalId: t }));
								if (r === ni.b)
									return ht.Observable.of(Object(Ra.i)({ anonymousId: t }));
								console.warn('Unknown end user type', r);
							}
							return ht.Observable.empty();
						});
				},
				function(e, t) {
					var n = t.getState;
					return e
						.ofType(y.c)
						.filter(function() {
							return !!nn.j(n());
						})
						.pluck('payload', 'assignedAgentId')
						.filter(function(e) {
							return !!e;
						})
						.map(function(e) {
							return ti(e);
						});
				}
			),
			oi = (n(719), n(366)),
			ii = n(288),
			si = Object(gt.combineEpics)(function(e, t) {
				return e
					.ofType(y.Ca)
					.filter(function(e) {
						return e.payload.size !== no.i;
					})
					.first()
					.filter(function(e) {
						return e.payload.size === no.q;
					})
					.mergeMap(function() {
						return ht.Observable.race(
							ht.Observable.timer(Object(it.n)(t.getState())),
							e.ofType(y.Ca)
						)
							.first()
							.filter(function(e) {
								return !e;
							})
							.filter(function() {
								return Object(oi.c)(t.getState());
							})
							.map(function() {
								return ii.d({ forceMobilePopUp: !0, msgFromFirstPopup: !0 });
							});
					});
			}),
			ci = Object(gt.combineEpics)(
				function(e) {
					return e
						.ofType(y.Ca)
						.pluck('payload', 'size')
						.filter(function(e) {
							return (
								e === no.n ||
								e === no.g ||
								e === no.r ||
								e === no.h ||
								e === no.p ||
								e === no.k
							);
						})
						.first()
						.map(Gr);
				},
				function(e, t) {
					return e
						.ofType(wn.c)
						.filter(function() {
							return Object(qr.a)(t.getState()) !== wn.e;
						})
						.pluck('payload')
						.mergeMap(function(e) {
							return ht.Observable.ajax({
								url: g.d + '/campaigns/bulk_enroll',
								method: 'POST',
								crossDomain: !0,
								responseType: 'json',
								headers: Object(h.a)([
									Object(h.e)(),
									Object(v.d)(t.getState()),
								]),
								body: b()(e),
							})
								.pluck('response')
								.map(Yr)
								.startWith(Zr({ enrollSentAt: Date.now(), enrollPayload: e }))
								.catch(function() {
									return ht.Observable.of(Jr());
								});
						});
				}
			),
			ui = Object(gt.combineEpics)(function(e, t) {
				return e
					.ofType(q)
					.pluck('payload')
					.map(function(e) {
						return {
							orgId: Object(it.k)(t.getState()),
							userId: Object(it.h)(t.getState()),
							anonymousId: Object(it.a)(t.getState()),
							attributes: e,
						};
					})
					.mergeMap(function(e) {
						return (function(e) {
							var t = e.attributes,
								n = e.orgId,
								r = e.userId,
								a = e.anonymousId;
							return ht.Observable.ajax({
								url: g.h + '/identify',
								method: 'POST',
								crossDomain: !0,
								responseType: 'json',
								headers: Object(h.a)([Object(h.e)()]),
								body: b()({
									orgId: n,
									userId: r,
									anonymousId: a,
									attributes: t,
								}),
							}).map(function(e) {
								return Object(O.fromJS)(e.response);
							});
						})(e)
							.map(function(e) {
								return fo(e);
							})
							.startWith(_o({ attributes: e.attributes }))
							.catch(function(e) {
								return ht.Observable.of(mo(e));
							});
					});
			}),
			li = [
				Object(gt.combineEpics)(
					function(e, t) {
						var n = t.getState;
						return e.ofType(Y.f).mergeMap(function() {
							var e = n(),
								t = ei.d(e).message,
								r = ei.c(e);
							return (function(e) {
								var t = e.endUserId,
									n = e.consentId,
									r = e.message,
									a = e.authorizationHeader;
								return ht.Observable.ajax({
									url: g.e + '/end_users/' + t + '/consent',
									method: 'POST',
									crossDomain: !0,
									responseType: 'json',
									headers: Object(h.a)([Object(h.e)(), a]),
									body: b()({ consentId: n, message: r }),
								});
							})({
								endUserId: Object(v.j)(e).id,
								consentId: r,
								message: t,
								authorizationHeader: Object(v.d)(e),
							})
								.map(function() {
									return Do.f();
								})
								.catch(function(e) {
									return ht.Observable.of(Do.e(e));
								});
						});
					},
					function(e, t) {
						var n = t.getState,
							r = t.dispatch;
						return e
							.ofType(Y.a)
							.filter(function() {
								return !Object(la.k)(n());
							})
							.mergeMap(function() {
								var t = n(),
									a = ei.b(t),
									o = function(n) {
										var a = function() {
											return n()
												? (r(Object(ja.displayConsentTakeover)()),
												  e
														.ofType(Y.i)
														.map(function() {
															return Do.c();
														})
														.takeUntil(e.ofType(Y.b)))
												: r(Do.c());
										};
										return Object(v.H)(t)
											? a()
											: (Object(v.I)(t) || r(Object(B.b)()),
											  e.ofType(y.O, y.M).mergeMap(a));
									};
								return ei.a(t) || (!ei.f(t) && a === Y.d.NONE)
									? r(Do.c())
									: ei.f(t) || a === Y.d.ALL
									? (r(Object(ja.displayConsentTakeover)()),
									  e
											.ofType(Y.i)
											.map(function() {
												return Do.c();
											})
											.takeUntil(e.ofType(Y.b)))
									: a === Y.d.EU
									? o(function() {
											return ei.g(n());
									  })
									: a === Y.d.CANADA
									? o(function() {
											return ei.e(n());
									  })
									: a === Y.d.EU_CANADA
									? o(function() {
											return ei.e(n()) || ei.g(n());
									  })
									: ht.Observable.empty();
							});
					}
				),
				N.c,
				Bt,
				Ut.c,
				go,
				_n,
				dr,
				bn,
				ko,
				qo,
				In,
				ai,
				Co,
				Ao,
				si,
				ci,
				ui,
				Eo,
				mr,
				jr,
				ho.a,
			],
			di = gt.combineEpics.apply(void 0, li);
		var pi = Object(gt.createEpicMiddleware)(di),
			_i = [
				Ur.a,
				function(e) {
					var t = this,
						n = e.dispatch,
						r = e.getState;
					return function(e) {
						return (function() {
							var a = cn()(
								on.a.mark(function a(o) {
									var i, s, c, u, l, d, _, f;
									return on.a.wrap(
										function(t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														if ('function' != typeof o) {
															t.next = 2;
															break;
														}
														return t.abrupt('return', o(n, r));
													case 2:
														if (
															((i = o.promise),
															(s = o.types),
															(c = Ue()(o, ['promise', 'types'])),
															i)
														) {
															t.next = 5;
															break;
														}
														return t.abrupt('return', e(o));
													case 5:
														return (
															(u = Ya()(s, 3)),
															(l = u[0]),
															(d = u[1]),
															(_ = u[2]),
															n(p()({}, c, { type: l })),
															(t.prev = 7),
															(t.next = 10),
															i
														);
													case 10:
														return (
															(f = t.sent),
															t.abrupt(
																'return',
																n(p()({}, c, { payload: f, type: d }))
															)
														);
													case 14:
														return (
															(t.prev = 14),
															(t.t0 = t.catch(7)),
															yn.a.error(t.t0, { action: o }),
															t.abrupt(
																'return',
																n(p()({}, c, { error: t.t0, type: _ }))
															)
														);
													case 18:
													case 'end':
														return t.stop();
												}
										},
										a,
										t,
										[[7, 14]]
									);
								})
							);
							return function(e) {
								return a.apply(this, arguments);
							};
						})();
					};
				},
				Hr,
				Ga,
				Qa,
				to,
				Ca,
				co,
				so,
				pi,
			];
		function fi(e) {
			var t = void 0;
			t = Object(o.compose)(o.applyMiddleware.apply(void 0, a()(_i)));
			var n = (function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
				return function(n, r) {
					switch (r.type) {
						case t:
							return e(r.payload, r);
						default:
							return e(n, r);
					}
				};
			})(Nr);
			return Object(o.createStore)(n, e, t);
		}
		n.d(t, 'a', function() {
			return fi;
		});
	},
	849: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return _;
		});
		var r = n(2),
			a = n.n(r),
			o = n(260),
			i = n.n(o),
			s = n(23),
			c = [
				/https?:\/\/((js|www)\.)?driftt?\.com/,
				/https?:\/\/((customer|event|conversation)\.)(dev\.)?api\.driftt?\.com/,
				/https?:\/\/s3\.amazonaws\.com\/js-driftt?-com/,
			],
			u = [
				/graph\.facebook\.com/i,
				/connect\.facebook\.net\/en_US\/all\.js/i,
				/extensions\//i,
				/^chrome:\/\//i,
				/^file:\/\//i,
			],
			l = [
				'Error in websocket connection',
				'Failed to fetch',
				'Network request failed',
			];
		var d = 0.1;
		function p() {
			return (
				(function(e) {
					return /^https?:\/\/(.+\.)?drift\.com/.test(e);
				})(document.referrer) && Math.random() <= d
			);
		}
		var _ = function() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = a()(
					{
						logger: 'drift-sdk-js',
						release: __BUILD_ID__,
						whitelistUrls: c,
						ignoreUrls: u,
						ignoreErrors: l,
						shouldSendCallback: p,
					},
					e
				);
			i.a.config(s.o, t).install();
		};
	},
	854: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return h;
		});
		var r = n(112),
			a = n.n(r),
			o = n(88),
			i = n.n(o),
			s = n(167),
			c = n.n(s),
			u = n(15),
			l = n(43),
			d = n.n(l),
			p = n(3),
			_ = n(34),
			f = Object(p.Set)([
				'en',
				'es',
				'de',
				'de-DE',
				'de-DE-formal',
				'hi',
				'hu',
				'et',
				'is',
				'nl',
				'pt',
				'pt-PT',
				'pt-BR',
				'sv',
				'zh',
				'fr',
				'it',
				'tr',
				'ru',
				'pl',
				'sl',
				'da',
				'fi',
				'hr',
				'ko',
				'nb',
				'ro',
				'sr',
				'th',
				'vi',
				'ja',
				'ka',
			]);
		function m(e) {
			for (; !f.includes(e) && -1 !== e.indexOf('-'); )
				e = e.substring(0, e.lastIndexOf('-'));
			if (f.includes(e)) return e;
			throw new Error('Unsupported locale ' + e);
		}
		function b() {
			var e =
				arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'en';
			switch (e) {
				case 'en':
					return n(1108);
				case 'es':
					return n(1107);
				case 'et':
					return n(1106);
				case 'de':
				case 'de-DE':
				case 'de-DE-formal':
					return n(1105);
				case 'hi':
					return n(1104);
				case 'hu':
					return n(1103);
				case 'is':
					return n(1102);
				case 'nl':
					return n(1101);
				case 'pt':
				case 'pt-PT':
				case 'pt-BR':
					return n(1100);
				case 'sv':
					return n(1099);
				case 'zh':
					return n(1098);
				case 'fr':
					return n(1097);
				case 'it':
					return n(1096);
				case 'pl':
					return n(1095);
				case 'ru':
					return n(1094);
				case 'tr':
					return n(1093);
				case 'sl':
					return n(1092);
				case 'da':
					return n(1091);
				case 'fi':
					return n(1090);
				case 'hr':
					return n(1089);
				case 'ko':
					return n(1088);
				case 'nb':
					return n(1087);
				case 'ro':
					return n(1086);
				case 'sr':
					return n(1085);
				case 'th':
					return n(1084);
				case 'vi':
					return n(1083);
				case 'ja':
					return n(1082);
				case 'ka':
					return n(1081);
				default:
					throw new Error('Unsupported locale "' + e + '"');
			}
		}
		function g() {
			var e =
				arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'en';
			switch (e) {
				case 'en':
					break;
				case 'es':
					return n(1080);
				case 'et':
					return n(1079);
				case 'de':
				case 'de-DE':
				case 'de-DE-formal':
					return n(1078);
				case 'hi':
					return n(1077);
				case 'hu':
					return n(1076);
				case 'is':
					return n(1075);
				case 'nl':
					return n(1074);
				case 'pt':
				case 'pt-PT':
					return n(1073);
				case 'pt-BR':
					return n(1072);
				case 'sv':
					return n(1071);
				case 'zh':
					return n(1070);
				case 'fr':
					return n(1069);
				case 'it':
					return n(1068);
				case 'pl':
					return n(1067);
				case 'ru':
					return n(1066);
				case 'tr':
					return n(1065);
				case 'sl':
					return n(1064);
				case 'da':
					return n(1063);
				case 'fi':
					return n(1062);
				case 'hr':
					return n(1061);
				case 'ko':
					return n(1060);
				case 'nb':
					return n(1059);
				case 'ro':
					return n(1058);
				case 'sr':
					return n(1057);
				case 'th':
					return n(1056);
				case 'vi':
					return n(1055);
				case 'ja':
					return n(1054);
				case 'ka':
					return n(1053);
				default:
					throw new Error('Unsupported locale "' + e + '"');
			}
		}
		var h = (function() {
			var e = c()(
				a.a.mark(function e() {
					var t,
						n =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: 'en';
					return a.a.wrap(
						function(e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										(e.prev = 0), (n = m(n)), (e.next = 7);
										break;
									case 4:
										throw ((e.prev = 4),
										(e.t0 = e.catch(0)),
										new Error('Unsupported locale ' + n));
									case 7:
										(e.prev = 7),
											(t = b(n)),
											Object(u.g)([].concat(i()(t))),
											(e.next = 16);
										break;
									case 12:
										throw ((e.prev = 12),
										(e.t1 = e.catch(7)),
										_.a.warn(
											'Failed to load react-intl locale data for "' + n + '"'
										),
										e.t1);
									case 16:
										(e.prev = 16), g(n), d.a.locale(n), (e.next = 25);
										break;
									case 21:
										throw ((e.prev = 21),
										(e.t2 = e.catch(16)),
										_.a.warn(
											'Failed to load moment locale data for "' + n + '"'
										),
										e.t2);
									case 25:
									case 'end':
										return e.stop();
								}
						},
						e,
						this,
						[[0, 4], [7, 12], [16, 21]]
					);
				})
			);
			return function() {
				return e.apply(this, arguments);
			};
		})();
	},
	855: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(103),
				b = n.n(m),
				g = n(0),
				h = n(17),
				v = n(15),
				E = n(3),
				y = n(34),
				O = n(6),
				C = n(854),
				T = n(1052),
				I = n(1051),
				M = n(1050),
				P = n(1049),
				A = n(1048),
				S = n(1047),
				D = n(1046),
				w = n(1045),
				k = n(1044),
				R = n(1043),
				j = n(1042),
				N = n(1041),
				B = n(1040),
				U = n(1039),
				L = n(1038),
				W = n(1037),
				x = n(1036),
				F = n(1035),
				H = n(1034),
				K = n(1033),
				q = n(1032),
				z = n(1031),
				G = n(1030),
				V = n(1029),
				Y = n(1028),
				Z = n(1027),
				J = n(1026),
				Q = {
					en: T,
					es: I,
					et: M,
					de: P,
					'de-DE-formal': A,
					fr: B,
					it: U,
					hi: S,
					hu: n(1025),
					is: n(1024),
					nl: D,
					pt: w,
					'pt-BR': k,
					'pt-PT': w,
					sv: R,
					zh: j,
					'zh-HK': N,
					pl: L,
					ru: W,
					tr: x,
					sl: F,
					da: H,
					fi: K,
					hr: q,
					ko: z,
					nb: G,
					ro: V,
					sr: Y,
					th: Z,
					vi: J,
					ja: n(1023),
					ka: n(1022),
				};
			var X = (function(t) {
				function n(e) {
					c()(this, n);
					var t = p()(this, (n.__proto__ || i()(n)).call(this, e));
					return (
						(t.polyfillLocale = function(e) {
							Object(C.a)(e)
								.then(function() {
									t.setState({ locale: e, locales: t.state.locales.add(e) });
								})
								.catch(function(t) {
									for (
										var n = arguments.length,
											r = Array(n > 1 ? n - 1 : 0),
											o = 1;
										o < n;
										o++
									)
										r[o - 1] = arguments[o];
									y.a.error(t, a()({ locale: e }, r));
								});
						}),
						(t.state = { locale: void 0, locales: Object(E.Set)() }),
						t
					);
				}
				return (
					f()(n, t),
					l()(n, [
						{
							key: 'componentWillMount',
							value: function() {
								this.polyfillLocale(this.props.locale);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								this.props.locale !== e.locale &&
									(this.state.locales.includes(e.locale)
										? this.setState({ locale: e.locale })
										: this.polyfillLocale(e.locale));
							},
						},
						{
							key: 'render',
							value: function() {
								var t = this.state.locale;
								if (t) {
									var n = t.split('-'),
										r = b()(n, 1)[0],
										a = Q[t] || Q[r];
									return e.createElement(
										v.f,
										{
											locale: (function(e) {
												var t = e.split('-'),
													n = b()(t, 2),
													r = n[0],
													a = n[1];
												return a ? r + '-' + a : r;
											})(t),
											messages: a,
										},
										this.props.children
									);
								}
								return e.createElement('div', null);
							},
						},
					]),
					n
				);
			})(g.Component);
			(X.propTypes = {
				locale: g.PropTypes.string,
				children: g.PropTypes.node.isRequired,
			}),
				(X.defaultProps = { locale: 'en' }),
				(t.a = Object(h.connect)(function(e) {
					return { locale: Object(O.t)(e) };
				})(X));
		}.call(this, n(0)));
	},
	857: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return c;
			});
			var r = n(2),
				a = n.n(r),
				o = n(0),
				i = n(15),
				s = Object(i.h)({
					returnKey: {
						id: 'system.key.return',
						description: 'The return key on the keyboard',
						defaultMessage: 'return',
					},
					enterKey: {
						id: 'system.key.enter',
						description: 'The enter key on the keyboard',
						defaultMessage: 'enter',
					},
					submitKeyHint: {
						id: 'app.composer.submitKeyHint',
						description:
							'Hint text for submitting the form by hitting the return/enter key',
						defaultMessage: '{key} to submit',
					},
				});
			function c(t) {
				var n = t.isAppleDevice ? s.returnKey : s.enterKey,
					r = e.createElement(
						'span',
						{ className: 'dsg-bold-weight' },
						e.createElement(i.b, n)
					);
				return e.createElement(
					i.b,
					a()({}, s.submitKeyHint, { values: { key: r } })
				);
			}
			c.propTypes = { isAppleDevice: o.PropTypes.bool };
		}.call(this, n(0)));
	},
	858: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(13),
				c = n.n(s),
				u = n(10),
				l = n.n(u),
				d = n(11),
				p = n.n(d),
				_ = n(7),
				f = n.n(_),
				m = n(14),
				b = n.n(m),
				g = n(0),
				h = n(424),
				v = n(423),
				E = n(856),
				y = n.n(E),
				O = n(12),
				C = n.n(O),
				T = n(91),
				I = n.n(T),
				M = n(425),
				P = (function(t) {
					function n() {
						var e, t, r, a;
						l()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = f()(
								this,
								(e = n.__proto__ || c()(n)).call.apply(e, [this].concat(i))
							)),
							(r.state = { hoverDismiss: !1 }),
							(r.scheduleSyncIframe = function() {
								window.requestAnimationFrame &&
									window.requestAnimationFrame(function() {
										r.syncIframe();
									}),
									window.setTimeout(function() {
										r.syncIframe();
									}, 0);
							}),
							(r.syncIframe = function() {
								if (r.node) {
									var e = r.node.offsetHeight,
										t = r.node.offsetWidth;
									r.props.onResize && r.props.onResize({ width: t, height: e });
								}
							}),
							(r.handleDismissMouseEnter = function() {
								r.setState({ hoverDismiss: !0 });
							}),
							(r.handleDismissMouseLeave = function() {
								r.setState({ hoverDismiss: !1 });
							}),
							(a = t),
							f()(r, a)
						);
					}
					return (
						b()(n, t),
						p()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.scheduleSyncIframe();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function() {
									this.scheduleSyncIframe();
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.className,
										o = n.style,
										s = i()(n, ['className', 'style']),
										c = s.brandColor,
										u = s.onDismiss,
										l = s.dismissed,
										d = s.submitted,
										p = s.isAppleDevice,
										_ = {
											backgroundColor: this.state.hoverDismiss ? '#' + c : null,
										},
										f = l ? I.a.slideOut : I.a.slideIn;
									return e.createElement(
										'div',
										{
											ref: function(e) {
												t.node = e;
											},
											className: C()(r, I.a.EmailCaptureSlider, f),
											style: o,
										},
										e.createElement(
											'div',
											{
												className: C()(
													'flex-1',
													I.a.EmailCaptureSlider__Bubble
												),
											},
											e.createElement(
												y.a,
												{
													transitionName: 'cross-fade',
													transitionEnterTimeout: 250,
													transitionLeaveTimeout: 250,
												},
												d
													? e.createElement(v.a, a()({ key: 'submitted' }, s))
													: e.createElement(
															h.a,
															a()({ key: 'unsubmitted', isAppleDevice: p }, s)
													  )
											)
										),
										e.createElement(
											'div',
											{
												className: C()(
													'flex-center',
													I.a.EmailCaptureSlider__Dismiss
												),
												style: _,
												onMouseEnter: this.handleDismissMouseEnter,
												onMouseLeave: this.handleDismissMouseLeave,
												onClick: u,
											},
											e.createElement('img', { src: M })
										)
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			(P.propTypes = {
				className: g.PropTypes.string,
				style: g.PropTypes.object,
				bodyNode: g.PropTypes.node,
				title: g.PropTypes.string,
				thankYouMessageNode: g.PropTypes.node,
				thankYouHeadline: g.PropTypes.string,
				organizationName: g.PropTypes.string,
				showBranding: g.PropTypes.bool,
				brandColor: g.PropTypes.string,
				avatarUrl: g.PropTypes.string,
				dismissed: g.PropTypes.bool,
				submitted: g.PropTypes.bool,
				isAppleDevice: g.PropTypes.bool,
				onSubmit: g.PropTypes.func,
				onDismiss: g.PropTypes.func,
				onResize: g.PropTypes.func,
			}),
				(P.defaultProps = { brandColor: '0176FF', isAppleDevice: !1 }),
				(t.a = P);
		}.call(this, n(0)));
	},
	859: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(13),
				c = n.n(s),
				u = n(10),
				l = n.n(u),
				d = n(11),
				p = n.n(d),
				_ = n(7),
				f = n.n(_),
				m = n(14),
				b = n.n(m),
				g = n(0),
				h = n(17),
				v = n(21),
				E = n(858),
				y = n(6),
				O = n(29),
				C = n(28),
				T = n(92),
				I = n(32),
				M = n(57),
				P = n(26),
				A = (function(t) {
					function n() {
						var e, t, r, a;
						l()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = f()(
								this,
								(e = n.__proto__ || c()(n)).call.apply(e, [this].concat(i))
							)),
							(r.handleResize = function(e) {
								var t = e.height;
								r.props.actions.iframeOverrideSize({ height: t + 'px' });
							}),
							(r.handleDismiss = function() {
								r.props.emailCaptureSliderDismissed ||
									(r.props.actions.emailCaptureSliderDismissed(),
									setTimeout(function() {
										r.props.actions.createConversationEvent({
											conversationId: r.props.conversationId,
											type: M.b,
										}),
											r.props.actions.emailCaptureSliderCleared(),
											r.props.actions.markAsRead({
												messageId: r.props.messageId,
											});
									}, 1e3));
							}),
							(r.handleSubmit = function(e) {
								if (!r.props.emailCaptureSliderSubmitted) {
									var t = r.props,
										n = t.orgId,
										a = t.externalId,
										o = t.anonymousId,
										i = t.currentEndUser,
										s = t.integrations,
										c = t.context;
									i && 'LEAD' !== i.type
										? i &&
										  'END_USER' === i.type &&
										  r.props.actions.identifyEndUser(n, a, e, {
												_lastCampaignId: r.props.campaignId,
										  })
										: r.props.actions.identifyLead(n, o, e, {
												_lastCampaignId: r.props.campaignId,
										  }),
										r.props.actions.emailCaptureSliderSubmitted(),
										r.props.actions.requestCreateConversationEvent({
											conversationId: r.props.conversationId,
											type: M.c,
											conversationEventExtra: {
												email: e,
												leadCapture: { email: e, integrations: s, context: c },
											},
										}),
										r.props.actions.requestCreateConversationEvent({
											conversationId: r.props.conversationId,
											type: M.e,
										});
								}
							}),
							(a = t),
							f()(r, a)
						);
					}
					return (
						b()(n, t),
						p()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.body,
										r = t.thankYouMessage,
										o = t.sender,
										s = t.emailCaptureSliderSubmitted,
										c = t.emailCaptureSliderDismissed,
										u = i()(t, [
											'body',
											'thankYouMessage',
											'sender',
											'emailCaptureSliderSubmitted',
											'emailCaptureSliderDismissed',
										]),
										l = e.createElement('div', {
											dangerouslySetInnerHTML: { __html: n },
										}),
										d = e.createElement('div', {
											dangerouslySetInnerHTML: { __html: r },
										}),
										p = o ? o.avatarUrl : null;
									return e.createElement(
										E.a,
										a()(
											{
												onResize: this.handleResize,
												onDismiss: this.handleDismiss,
												onSubmit: this.handleSubmit,
												bodyNode: l,
												thankYouMessageNode: d,
												avatarUrl: p,
												isAppleDevice: Object(I.a)(),
												submitted: s,
												dismissed: c,
											},
											u
										)
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			A.propTypes = {
				orgId: g.PropTypes.number,
				externalId: g.PropTypes.string,
				anonymousId: g.PropTypes.string,
				currentEndUser: g.PropTypes.shape({ type: g.PropTypes.string }),
				organizationName: g.PropTypes.string,
				showBranding: g.PropTypes.bool,
				brandColor: g.PropTypes.string,
				messageId: g.PropTypes.number,
				conversationId: g.PropTypes.number,
				campaignId: g.PropTypes.number,
				body: g.PropTypes.string,
				title: g.PropTypes.string,
				thankYouMessage: g.PropTypes.string,
				thankYouHeadline: g.PropTypes.string,
				integrations: g.PropTypes.object,
				context: g.PropTypes.object,
				sender: g.PropTypes.shape({ avatarUrl: g.PropTypes.string }),
				emailCaptureSliderSubmitted: g.PropTypes.any,
				emailCaptureSliderDismissed: g.PropTypes.any,
				actions: g.PropTypes.shape({
					identifyEndUser: g.PropTypes.func.isRequired,
					identifyLead: g.PropTypes.func.isRequired,
					iframeOverrideSize: g.PropTypes.func.isRequired,
					markAsRead: g.PropTypes.func.isRequired,
					createConversationEvent: g.PropTypes.func.isRequired,
					requestCreateConversationEvent: g.PropTypes.func.isRequired,
					emailCaptureSliderSubmitted: g.PropTypes.func.isRequired,
					emailCaptureSliderDismissed: g.PropTypes.func.isRequired,
					emailCaptureSliderCleared: g.PropTypes.func.isRequired,
				}),
			};
			t.a = Object(h.connect)(
				function(e, t) {
					var n = e.Bootstrap,
						r = n.orgId,
						a = n.externalId,
						o = n.anonymousId,
						i = n.embedConfiguration,
						s = i.organizationName,
						c = i.showBranding,
						u = i.integrations,
						l = i.theme.backgroundColor,
						d = e.EndUser.currentEndUser,
						p = t.message,
						_ = p.attributes,
						f = p.body,
						m = _.title,
						b = _.thankYouMessage,
						g = _.thankYouHeadline,
						h = _.senderId,
						v = _.noSenderId,
						E = _.campaignId,
						O = !v && h,
						T = O ? e.DriftUser.driftUsersById[O] : null;
					return {
						orgId: r,
						externalId: a,
						anonymousId: o,
						organizationName: s,
						showBranding: c,
						currentEndUser: d,
						messageId: p.id,
						conversationId: p.conversationId,
						body: f,
						title: m,
						thankYouMessage: b,
						thankYouHeadline: g,
						sender: T,
						campaignId: E,
						brandColor: l,
						integrations: u,
						context: Object(y.u)(e),
						connectionStatus: Object(y.i)(e),
						emailCaptureSliderSubmitted: C.f(e),
						emailCaptureSliderDismissed: C.e(e),
					};
				},
				function(e) {
					return {
						actions: Object(v.bindActionCreators)(
							{
								identifyLead: T.e,
								identifyEndUser: T.d,
								markAsRead: P.q,
								createConversationEvent: P.c,
								requestCreateConversationEvent: P.A,
								emailCaptureSliderSubmitted: O.emailCaptureSliderSubmitted,
								emailCaptureSliderDismissed: O.emailCaptureSliderDismissed,
								emailCaptureSliderCleared: O.emailCaptureSliderCleared,
								iframeOverrideSize: O.iframeOverrideSize,
							},
							e
						),
					};
				}
			)(A);
		}.call(this, n(0)));
	},
	860: function(e, t, n) {
		'use strict';
		var r = n(17),
			a = n(364);
		t.a = Object(r.connect)(function(e, t) {
			var n = t.agentId,
				r = e.Bootstrap.embedConfiguration.organizationName,
				a = e.DriftUser.driftUsersById[n];
			return a ? { displayName: a.name, orgName: r, sender: a } : {};
		})(a.c);
	},
	868: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(12),
				o = n.n(a),
				i = n(453),
				s = n(364),
				c = n(591),
				u = n.n(c),
				l = function(t) {
					var n = t.body,
						r = t.ctaCopy,
						a = t.ctaHref,
						c = t.headline,
						l = t.onCloseClick,
						d = t.onCtaClick,
						p = t.primaryColor,
						_ = t.secondaryColor,
						f = t.showBranding,
						m = t.brandingContent,
						b = t.theme,
						g = t.children;
					return e.createElement(
						i.HotKeys,
						{
							keyMap: { onEscape: ['escape'] },
							handlers: { onEscape: l },
							style: { width: '100%', height: '100%' },
						},
						e.createElement(
							'div',
							{
								className: o()(
									u.a.ProductAnnouncement,
									'fadeIn',
									'flex-column',
									'flex-center'
								),
							},
							e.createElement(
								s.a,
								{ onCloseClick: l, theme: b },
								e.createElement(
									s.b,
									{
										headline: c,
										theme: b,
										primaryColor: p,
										secondaryColor: _,
										onCtaClick: d,
										ctaCopy: r,
										ctaHref: a,
										brandingContent: m,
										showBranding: f,
									},
									e.createElement(
										'div',
										{ className: u.a.ProductAnnouncement__Content },
										e.createElement('div', {
											dangerouslySetInnerHTML: { __html: n },
										})
									),
									g
								)
							)
						)
					);
				};
			(l.propTypes = {
				body: r.PropTypes.string.isRequired,
				ctaCopy: r.PropTypes.string,
				ctaHref: r.PropTypes.string,
				headline: r.PropTypes.string.isRequired,
				onCloseClick: r.PropTypes.func,
				onCtaClick: r.PropTypes.func,
				primaryColor: r.PropTypes.string,
				secondaryColor: r.PropTypes.string,
				theme: r.PropTypes.string,
				showBranding: r.PropTypes.bool,
				brandingContent: r.PropTypes.node,
				children: r.PropTypes.any,
			}),
				(t.a = l);
		}.call(this, n(0)));
	},
	869: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(73),
				b = n.n(m),
				g = n(0),
				h = n(21),
				v = n(17),
				E = n(101),
				y = n(868),
				O = n(860),
				C = n(29),
				T = n(26),
				I = n(57),
				M = n(96),
				P = n(125),
				A = n(53),
				S = n(31),
				D = n(32),
				w = b()({ LIGHT: 'LIGHT', DARK: 'DARK' }),
				k = e.createElement(E.a, { utmContent: S.e.TAKEOVER }),
				R = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.handleCtaClick = function() {
								switch (
									(r.props.actions.createConversationEvent({
										conversationId: r.props.message.conversationId,
										type: I.a,
									}),
									r.props.actions.markAsRead({ messageId: r.props.message.id }),
									'LINK_TO_URL' === r.props.ctaType &&
										Object(D.c)() &&
										window.open(r.props.ctaHref, '_blank'),
									r.props.ctaType)
								) {
									case 'CHAT_RESPONSE':
										return r.handleChatResponseCtaClick();
									case 'SCHEDULE_MEETING':
										return r.handleScheduleMeetingCtaClick();
								}
							}),
							(r.handleChatResponseCtaClick = function() {
								if ('CHAT_RESPONSE' === r.props.ctaType) {
									var e = r.props,
										t = e.body,
										n = e.headline,
										a = e.senderId,
										o = e.campaignId,
										i = e.inboxId;
									r.props.actions.goToNewConversationForCampaign({
										campaignId: o,
										inboxId: i,
										campaignMessage: r.props.message,
										messages: [
											{ id: Object(P.a)(), body: n, sender: { id: a } },
											{ id: Object(P.a)(), body: t, sender: { id: a } },
										],
									});
								}
							}),
							(r.handleScheduleMeetingCtaClick = function() {
								'SCHEDULE_MEETING' === r.props.ctaType &&
									r.props.senderId &&
									r.props.actions.startScheduleMeetingFlow(r.props.senderId, {
										campaignMessage: r.props.message,
									});
							}),
							(r.handleCloseClick = function() {
								r.props.actions.createConversationEvent({
									conversationId: r.props.message.conversationId,
									type: I.b,
								}),
									r.props.actions.markAsRead({ messageId: r.props.message.id });
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.props.actions.trackImpression({ view: S.e.TAKEOVER }),
										this.props.actions.createConversationEvent({
											conversationId: this.props.message.conversationId,
											type: I.d,
										});
								},
							},
							{
								key: 'renderSenderInfo',
								value: function() {
									var t = this.props.senderId;
									if (t) return e.createElement(O.a, { agentId: t });
								},
							},
							{
								key: 'render',
								value: function() {
									return e.createElement(
										y.a,
										a()(
											{
												onCtaClick: this.handleCtaClick,
												onCloseClick: this.handleCloseClick,
												brandingContent: k,
											},
											this.props
										),
										this.renderSenderInfo()
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			(R.propTypes = {
				campaignId: g.PropTypes.number,
				inboxId: g.PropTypes.number,
				body: g.PropTypes.string,
				headline: g.PropTypes.string,
				message: g.PropTypes.object,
				theme: g.PropTypes.oneOf([w.LIGHT, w.DARK]),
				ctaCopy: g.PropTypes.string,
				ctaType: g.PropTypes.oneOf([
					'LINK_TO_URL',
					'CHAT_RESPONSE',
					'SCHEDULE_MEETING',
				]),
				ctaHref: g.PropTypes.string,
				senderId: g.PropTypes.number,
				showBranding: g.PropTypes.bool,
				actions: g.PropTypes.shape({
					createConversationEvent: g.PropTypes.func.isRequired,
					goToNewConversationForCampaign: g.PropTypes.func.isRequired,
					startScheduleMeetingFlow: g.PropTypes.func.isRequired,
					markAsRead: g.PropTypes.func.isRequired,
				}),
			}),
				(t.a = Object(v.connect)(
					function(e, t) {
						var n = e.Bootstrap.embedConfiguration,
							r = t.message,
							a = r.authorId,
							o = r.inboxId,
							i = r.body,
							s = r.attributes,
							c = s.cta,
							u = s.title,
							l = s.campaignTheme,
							d = s.senderId,
							p = s.noSenderId;
						return {
							campaignId: s.campaignId,
							message: r,
							inboxId: o,
							body: i,
							headline: u,
							senderId: !p && (d || a),
							theme: l,
							ctaCopy: c && c.copy,
							ctaType: c && c.CtaType,
							ctaHref: c && c.UrlLink,
							primaryColor: '#' + n.theme.backgroundColor,
							secondaryColor: '#' + n.theme.foregroundColor,
							showBranding: n.showBranding,
						};
					},
					function(e) {
						return {
							actions: Object(h.bindActionCreators)(
								{
									createConversationEvent: T.c,
									goToNewConversationForCampaign:
										C.goToNewConversationForCampaign,
									startScheduleMeetingFlow: M.h,
									markAsRead: T.q,
									trackImpression: A.c,
								},
								e
							),
						};
					}
				)(R));
		}.call(this, n(0)));
	},
	870: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(261),
				m = n(443),
				b = n(323),
				g = n.n(b),
				h = (function(t) {
					function n() {
						return (
							i()(this, n),
							l()(this, (n.__proto__ || a()(n)).apply(this, arguments))
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.onClick,
										r = t.onDismissClick,
										a = t.children;
									return e.createElement(
										'div',
										{ className: g.a.Slider },
										e.createElement(
											m.a,
											null,
											e.createElement(
												'div',
												{ className: g.a.FlexContentWrapper, key: 'slider' },
												e.createElement(
													'div',
													{ className: g.a.DismissButtonWrapper },
													e.createElement(f.b, {
														className: g.a.DismissButton,
														onClick: r,
													})
												),
												e.createElement(
													f.a,
													{ onClick: n },
													e.createElement('div', { className: g.a.Content }, a)
												)
											)
										)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(h.propTypes = {
				children: _.PropTypes.node,
				onClick: _.PropTypes.func.isRequired,
				onDismissClick: _.PropTypes.func.isRequired,
			}),
				(t.a = h);
		}.call(this, n(0)));
	},
	871: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(0),
				i = n(15),
				s = Object(i.h)({
					attachmentCount: {
						id: 'app.message.attachmentCount',
						description: "Displays a messages's number of attachments",
						defaultMessage:
							'{count, plural,\n        =0 {No attachments}\n        one {1 attachment}\n        other {# attachments}\n      }',
					},
				}),
				c = function(t) {
					return e.createElement(
						i.b,
						a()({}, s.attachmentCount, { values: { count: t.count } })
					);
				};
			(c.propTypes = { count: o.PropTypes.number.isRequired }), (t.a = c);
		}.call(this, n(0)));
	},
	872: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(21),
				g = n(17),
				h = n(20),
				v = n(444),
				E = n(871),
				y = n(870),
				O = n(89),
				C = n(29),
				T = n(42),
				I = n(6),
				M = n(16),
				P = n(26),
				A = n(76),
				S = n(53),
				D = n(31),
				w = function(t) {
					var n = t.attachmentCount,
						r = t.messagePreview,
						a = t.maxLength;
					if ('string' == typeof r) {
						var o = r.length > a ? r.trim().slice(0, a) + '…' : r.trim();
						if (o) return e.createElement('span', null, o);
					}
					return n > 0
						? e.createElement(E.a, { count: n })
						: e.createElement(
								'span',
								null,
								e.createElement('em', null, 'No preview')
						  );
				};
			(w.propTypes = {
				messagePreview: m.PropTypes.string,
				attachmentCount: m.PropTypes.number,
				maxLength: m.PropTypes.number,
			}),
				(w.defaultProps = { attachmentCount: 0, maxLength: 100 });
			var k = (function(t) {
				function n() {
					var e, t, r, a;
					c()(this, n);
					for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
						s[u] = arguments[u];
					return (
						(t = r = p()(
							this,
							(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
						)),
						(r.handleClick = function() {
							var e = r.props,
								t = e.actions,
								n = e.view,
								a = e.botAvatarVersion,
								o = e.message;
							t.trackClick({
								ctaType: 'content',
								view: n,
								botAvatarVersion: a,
							}),
								t.markConversationAsRead(o.get('conversationId')),
								t.goToConversation(o.get('conversationId'));
						}),
						(r.handleDismissClick = function() {
							var e = r.props,
								t = e.actions,
								n = e.botAvatarVersion,
								a = e.view,
								o = e.driftUsersById,
								i = e.message,
								s = e.conversation;
							t.trackClick({
								ctaType: 'dismiss',
								view: a,
								botAvatarVersion: n,
							});
							var c = o[i.get('authorId')];
							t.sliderMessageDismissed({
								botMessage: c && !!c.bot,
								userInteractedWithConversation:
									'BULK_SENT' === !s.get('status'),
							}),
								t.markConversationAsRead(i.get('conversationId'));
						}),
						(r.handleResize = function() {
							var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {},
								t = e.height,
								n = e.width;
							r.props.actions.iframeOverrideSize({
								height: t ? t + 'px' : void 0,
								width: n ? n + 'px' : void 0,
							});
						}),
						(a = t),
						p()(r, a)
					);
				}
				return (
					f()(n, t),
					l()(n, [
						{
							key: 'componentWillMount',
							value: function() {
								var e = this.props,
									t = e.actions,
									n = e.botAvatarVersion,
									r = e.view;
								t.trackImpression({ view: r, botAvatarVersion: n });
							},
						},
						{
							key: 'render',
							value: function() {
								var t = this.props,
									n = t.message,
									r = t.avatarUrl,
									a = t.bot,
									o = t.name,
									i = t.showNewCallout,
									s = n.get('attachments').size,
									c = n.getIn(['attributes', 'preview']);
								return e.createElement(
									v.a,
									{
										avatarUrl: r,
										bot: a,
										iconType: O.a.CHAT,
										onResize: this.handleResize,
										onWidgetClick: this.handleClick,
									},
									e.createElement(
										y.a,
										{
											onClick: this.handleClick,
											name: o,
											bot: a,
											onDismissClick: this.handleDismissClick,
											showNewCallout: i,
											showBranding: M.s,
										},
										e.createElement(w, {
											attachmentCount: s,
											messagePreview: c,
										})
									)
								);
							},
						},
					]),
					n
				);
			})(m.Component);
			(k.propTypes = {
				message: m.PropTypes.object.isRequired,
				avatarUrl: m.PropTypes.string,
				bot: m.PropTypes.bool,
				name: m.PropTypes.string.isRequired,
				conversation: m.PropTypes.object,
				driftUsersById: m.PropTypes.object,
				actions: m.PropTypes.shape({
					iframeOverrideSize: m.PropTypes.func.isRequired,
					goToConversation: m.PropTypes.func.isRequired,
					markConversationAsRead: m.PropTypes.func.isRequired,
					sliderMessageDismissed: m.PropTypes.func.isRequired,
				}),
			}),
				(t.a = Object(g.connect)(
					function(e, t) {
						var n = e.DriftUser.driftUsersById[t.message.get('authorId')],
							r = t.message.get('conversationId'),
							o = n && n.bot;
						return a()(
							{
								showBranding: Object(M.s)(e),
								avatarUrl: n && n.avatarUrl,
								bot: n && n.bot,
								name: Object(h.a)(n, 'name', ''),
								conversation: Object(A.a)(e, { conversationId: r }),
								driftUsersById: Object(I.k)(e),
								view: o ? D.e.MESSAGE_CALLOUT_BOT : D.e.MESSAGE_CALLOUT_USER,
								botAvatarVersion: o ? Object(I.e)(e) : void 0,
							},
							'bot',
							o
						);
					},
					function(e) {
						return {
							actions: Object(b.bindActionCreators)(
								{
									iframeOverrideSize: C.iframeOverrideSize,
									goToConversation: T.f,
									markConversationAsRead: T.g,
									sliderMessageDismissed: P.D,
									trackImpression: S.c,
									trackClick: S.b,
								},
								e
							),
						};
					}
				)(k));
		}.call(this, n(0)));
	},
	873: function(e, t) {
		e.exports =
			'<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.285 17a.738.738 0 0 0 .528-.216.637.637 0 0 0-.044-.942L2.77 9l7.998-6.842c.29-.249.31-.67.044-.942a.751.751 0 0 0-1.01-.04L1.232 8.508a.65.65 0 0 0-.232.49c0 .188.084.366.232.492l8.57 7.334c.138.117.31.175.483.175z" stroke="#CCC" stroke-width=".667" fill="#CCC" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
	},
	874: function(e, t, n) {
		e.exports = { ScrollableContent: '_3qJrcSln-TzTgp5jAZsvE-' };
	},
	876: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(2),
				f = n.n(_),
				m = n(24),
				b = n.n(m),
				g = n(0),
				h = n(12),
				v = n.n(h),
				E = n(290),
				y = n(261),
				O = n(443),
				C = n(242),
				T = n.n(C),
				I = function(t) {
					var n = t.className,
						r = t.onClick,
						a = t.href,
						o = t.backgroundColor,
						i = t.color,
						s = b()(t, [
							'className',
							'onClick',
							'href',
							'backgroundColor',
							'color',
						]);
					return e.createElement(
						E.a,
						f()(
							{
								className: v()(T.a.CtaButton, n, { 'disable-fastclick': a }),
								href: a,
								onClick: r,
								style: {
									backgroundColor: o,
									color: i,
									lineHeight: '18px',
									height: 'initial',
									padding: '8px',
								},
							},
							s
						)
					);
				};
			I.propTypes = {
				className: g.PropTypes.string,
				onClick: g.PropTypes.func,
				href: g.PropTypes.string,
				backgroundColor: g.PropTypes.string,
				color: g.PropTypes.string,
			};
			var M = function(t) {
					var n = t.children,
						r = b()(t, ['children']);
					return e.createElement(
						'div',
						f()({}, r, { className: v()(T.a.Headline, 'dsg-medium-weight') }),
						n
					);
				},
				P = (function(t) {
					function n() {
						return (
							i()(this, n),
							l()(this, (n.__proto__ || a()(n)).apply(this, arguments))
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.content,
										r = t.ctaCopy,
										a = t.headline,
										o = t.isExpanded,
										i = t.onCtaClick,
										s = t.ctaHref,
										c = t.onClick,
										u = t.onDismissClick,
										l = t.primaryColor,
										d = t.secondaryColor;
									if (!n || !a) return null;
									var p = o && r && (s || i),
										_ = {
											onClick: i,
											href: s,
											brandPrimary: l,
											brandSecondary: d,
											children: r,
										};
									return e.createElement(
										'div',
										{ className: T.a.Slider },
										e.createElement(
											O.a,
											null,
											e.createElement(
												'div',
												{ className: T.a.FlexContentWrapper, key: 'slider' },
												e.createElement(
													'div',
													{ className: T.a.DismissButtonWrapper },
													e.createElement(y.b, {
														className: T.a.DismissButton,
														onClick: u,
													})
												),
												e.createElement(
													y.a,
													{ hasTail: !p, onClick: c },
													e.createElement(M, null, a),
													o &&
														e.createElement(y.c, { className: T.a.Content }, n),
													p && e.createElement(I, _)
												)
											)
										)
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			(P.propTypes = {
				content: g.PropTypes.node,
				ctaCopy: g.PropTypes.string,
				headline: g.PropTypes.string,
				isExpanded: g.PropTypes.bool,
				ctaHref: g.PropTypes.string,
				onCtaClick: g.PropTypes.func,
				onClick: g.PropTypes.func,
				onDismissClick: g.PropTypes.func.isRequired,
				primaryColor: g.PropTypes.string,
				secondaryColor: g.PropTypes.string,
			}),
				(P.defaultProps = { isExpanded: !1 }),
				(t.a = P);
		}.call(this, n(0)));
	},
	877: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(21),
				m = n(17),
				b = n(444),
				g = n(876),
				h = n(89),
				v = n(6),
				E = n(29),
				y = n(26),
				O = n(57),
				C = n(125),
				T = n(96),
				I = n(53),
				M = n(31),
				P = n(32),
				A = function(e) {
					var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: 'px';
					return /(\d+)(r?em|%|px|vh|vw)$/.test(e) ? e : '' + e + t;
				},
				S = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.state = { isExpanded: !1 }),
							(r.handleChatResponseCtaClick = function() {
								if ('CHAT_RESPONSE' === r.props.ctaType) {
									var e = r.props,
										t = e.message,
										n = e.headline,
										a = e.sender,
										o = e.campaignId;
									r.props.actions.goToNewConversationForCampaign({
										inboxId: t.inboxId,
										campaignId: o,
										campaignMessage: t,
										messages: [
											{ id: Object(C.a)(), body: n, sender: a },
											{ id: Object(C.a)(), body: t.body, sender: a },
										],
									});
								}
							}),
							(r.handleScheduleMeetingCtaClick = function() {
								'SCHEDULE_MEETING' === r.props.ctaType &&
									r.props.sender &&
									r.props.actions.startScheduleMeetingFlow(r.props.sender.id, {
										campaignMessage: r.props.message,
									});
							}),
							(r.handleCtaClick = function() {
								switch (
									(r.props.actions.trackClick({
										ctaType: 'cta',
										view: M.e.SLIDER_EXPANDED,
									}),
									r.props.actions.createConversationEvent({
										conversationId: r.props.message.conversationId,
										type: O.a,
									}),
									r.props.actions.markAsRead({ messageId: r.props.message.id }),
									'LINK_TO_URL' === r.props.ctaType &&
										Object(P.c)() &&
										window.open(r.props.ctaHref, '_blank'),
									r.props.ctaType)
								) {
									case 'CHAT_RESPONSE':
										return r.handleChatResponseCtaClick();
									case 'SCHEDULE_MEETING':
										return r.handleScheduleMeetingCtaClick();
								}
							}),
							(r.handleDismissClick = function() {
								r.props.actions.trackClick({
									ctaType: 'dismiss',
									view: r.state.isExpanded
										? M.e.SLIDER_EXPANDED
										: M.e.SLIDER_CALLOUT,
								}),
									r.props.actions.createConversationEvent({
										conversationId: r.props.message.conversationId,
										type: O.b,
									}),
									r.props.actions.markAsRead({ messageId: r.props.message.id });
							}),
							(r.handleClick = function() {
								r.state.isExpanded ||
									(r.props.actions.trackClick({
										ctaType: 'content',
										view: M.e.SLIDER_CALLOUT,
									}),
									r.setState({ isExpanded: !0 }),
									r.props.actions.trackImpression({
										view: M.e.SLIDER_EXPANDED,
									}),
									r.props.actions.createConversationEvent({
										conversationId: r.props.message.conversationId,
										type: O.d,
									}));
							}),
							(r.handleResize = function() {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: {},
									t = e.height,
									n = e.width;
								r.props.actions.iframeOverrideSize({
									height: A(t, 'px'),
									width: A(n, 'px'),
								});
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'componentWillMount',
								value: function() {
									this.props.actions.trackImpression({
										view: M.e.SLIDER_CALLOUT,
									});
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.content,
										r = t.headline,
										a = t.primaryColor,
										o = t.secondaryColor,
										i = t.avatarUrl,
										s = t.ctaCopy,
										c = t.ctaHref,
										u = this.state.isExpanded,
										l = u ? void 0 : this.handleClick;
									return e.createElement(
										b.a,
										{
											avatarUrl: i,
											iconType: h.a.ANNOUNCEMENT,
											onWidgetClick: l,
											onResize: this.handleResize,
										},
										e.createElement(g.a, {
											content: n,
											headline: r,
											ctaCopy: s,
											ctaHref: c,
											primaryColor: a,
											secondaryColor: o,
											isExpanded: u,
											onClick: l,
											onDismissClick: this.handleDismissClick,
											onCtaClick: this.handleCtaClick,
										})
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(S.propTypes = {
				message: _.PropTypes.object.isRequired,
				sender: _.PropTypes.object,
				campaignId: _.PropTypes.number.isRequired,
				headline: _.PropTypes.string.isRequired,
				avatarUrl: _.PropTypes.string,
				content: _.PropTypes.node,
				ctaType: _.PropTypes.oneOf([
					'LINK_TO_URL',
					'CHAT_RESPONSE',
					'SCHEDULE_MEETING',
				]),
				ctaCopy: _.PropTypes.string,
				ctaHref: _.PropTypes.string,
				primaryColor: _.PropTypes.string,
				secondaryColor: _.PropTypes.string,
				actions: _.PropTypes.shape({
					iframeOverrideSize: _.PropTypes.func.isRequired,
					goToNewConversationForCampaign: _.PropTypes.func.isRequired,
					startScheduleMeetingFlow: _.PropTypes.func.isRequired,
					markAsRead: _.PropTypes.func.isRequired,
					createConversationEvent: _.PropTypes.func.isRequired,
				}),
			}),
				(t.a = Object(m.connect)(
					function(t, n) {
						var r = Object(v.l)(t).theme,
							a = r.backgroundColor,
							o = r.foregroundColor,
							i = n.message,
							s = i.attributes,
							c = s.cta,
							u = s.title,
							l = s.senderId,
							d = s.noSenderId,
							p = s.campaignId,
							_ = !d && l && Object(v.k)(t)[l];
						return {
							campaignId: p,
							message: i,
							content: e.createElement('div', {
								dangerouslySetInnerHTML: { __html: i.body },
							}),
							sender: _,
							ctaCopy: c && c.copy,
							ctaType: c && c.CtaType,
							ctaHref: c && c.UrlLink,
							avatarUrl: _ && _.avatarUrl,
							headline: u,
							primaryColor: a && '#' + a,
							secondaryColor: o && '#' + o,
						};
					},
					function(e) {
						return {
							actions: Object(f.bindActionCreators)(
								{
									iframeOverrideSize: E.iframeOverrideSize,
									goToNewConversationForCampaign:
										E.goToNewConversationForCampaign,
									startScheduleMeetingFlow: T.h,
									markAsRead: y.q,
									createConversationEvent: y.c,
									trackImpression: I.c,
									trackClick: I.b,
								},
								e
							),
						};
					}
				)(S));
		}.call(this, n(0)));
	},
	878: function(e, t, n) {
		e.exports = { Container: '_1_OkBQ8wzMdsYC_9TqA1_1' };
	},
	879: function(e, t, n) {
		e.exports = { WelcomeMessageCard: '_1b8HzQM8nmpP_VSMq7OnIz' };
	},
	880: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return l;
			});
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(879),
				u = n.n(c);
			function l(t) {
				var n = t.children,
					r = i()(t, ['children']);
				return e.createElement(
					'div',
					a()({ className: u.a.WelcomeMessageCard }, r),
					n
				);
			}
			l.propTypes = { children: s.PropTypes.node };
		}.call(this, n(0)));
	},
	881: function(e, t, n) {
		e.exports = { UnreadCountBadgeWrapper: '_33pYdbFiRwcStQ9-M9UKRm' };
	},
	882: function(e, t, n) {
		'use strict';
		var r = {
			getSenderId: function(e) {
				var t = e.authorId,
					n = e.attributes.senderId;
				return !e.attributes.noSenderId && (n || t);
			},
		};
		t.a = r;
	},
	884: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
				),
				lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					365
				),
				lodash_es_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(455),
				lodash_es_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					186
				),
				classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_8__
				),
				imagesloaded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(883),
				imagesloaded__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					imagesloaded__WEBPACK_IMPORTED_MODULE_9__
				),
				redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21),
				react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17),
				react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15),
				shared_web_src_helpers_InputHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					583
				),
				shared_web_src_helpers_InputHelpers__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					shared_web_src_helpers_InputHelpers__WEBPACK_IMPORTED_MODULE_13__
				),
				modules_UI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29),
				_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(376),
				_style_styl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1171),
				_style_styl__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_16__
				),
				_React = React,
				Component = _React.Component,
				dom = _React.DOM,
				PropTypes = _React.PropTypes,
				component = _React.createElement,
				NPSExpanded = (function(_Component) {
					function NPSExpanded(props) {
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
							this,
							NPSExpanded
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.syncIframe = _this.syncIframe.bind(_this)),
							(_this.renderRatingStep = _this.renderRatingStep.bind(_this)),
							(_this.renderFreeResponseStep = _this.renderFreeResponseStep.bind(
								_this
							)),
							(_this.renderThankYouStep = _this.renderThankYouStep.bind(_this)),
							(_this.handleSubmitClick = _this.handleSubmitClick.bind(_this)),
							(_this.inputChanged = _this.inputChanged.bind(_this));
						var ctaParams = props.message.attributes.cta;
						return (
							(_this.state = {
								freeInput: '',
								isHoveredByRating: [],
								ctaCopy: null != ctaParams ? ctaParams.copy : void 0,
								driftMessage: props.message,
							}),
							babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								_this
							)
						);
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							NPSExpanded,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							NPSExpanded,
							null,
							[
								{
									key: 'initClass',
									value: function() {
										this.propTypes = {
											message: PropTypes.object.isRequired,
											npsStep: PropTypes.number,
											selectedRating: PropTypes.number,
										};
									},
								},
							]
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							NPSExpanded,
							[
								{
									key: 'componentDidMount',
									value: function() {
										return (
											(this._timer = window.setTimeout(this.syncIframe, 0)),
											(this._imagesLoaded = imagesloaded__WEBPACK_IMPORTED_MODULE_9___default()(
												this._node
											)),
											this._imagesLoaded.on('progress', this.syncIframe)
										);
									},
								},
								{
									key: 'componentDidUpdate',
									value: function(e) {
										if (
											(this._timer && window.clearTimeout(this._timer),
											(this._timer = window.setTimeout(this.syncIframe, 0)),
											e.npsStep !== this.props.npsStep)
										)
											return setTimeout(this.syncIframe, 0);
									},
								},
								{
									key: 'componentWillUnmount',
									value: function() {
										return (
											this._timer && window.clearTimeout(this._timer),
											this._imagesLoaded.off('progress', this.syncIframe)
										);
									},
								},
								{
									key: 'syncIframe',
									value: function() {
										if (this._node) {
											var e = this._node.offsetHeight + 75;
											return this.props.actions.iframeOverrideSize({
												height: e + 'px',
											});
										}
									},
								},
								{
									key: 'renderRatingStep',
									value: function() {
										var e = this;
										return dom.div(
											{},
											dom.div(
												{ className: 'ratings' },
												Object(lodash_es_times__WEBPACK_IMPORTED_MODULE_6__.a)(
													11,
													function(t) {
														var n = e.state.isHoveredByRating[t];
														return dom.div(
															{
																key: t,
																className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(
																	'rating',
																	{ hovered: n }
																),
																style: {
																	backgroundColor: n
																		? '#' + e.props.theme.backgroundColor
																		: void 0,
																},
																onClick: function() {
																	return e.props.onSubmitNumericResponse(t);
																},
																onMouseOver: function() {
																	var n = Object(
																		lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__.a
																	)(e.state.isHoveredByRating);
																	return (
																		(n[t] = !0),
																		e.setState({ isHoveredByRating: n })
																	);
																},
																onMouseOut: function() {
																	var n = Object(
																		lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__.a
																	)(e.state.isHoveredByRating);
																	return (
																		(n[t] = !1),
																		e.setState({ isHoveredByRating: n })
																	);
																},
															},
															component(
																react_intl__WEBPACK_IMPORTED_MODULE_12__.c,
																{ value: t }
															)
														);
													}
												)
											),
											dom.div(
												{ className: 'labels' },
												component(
													react_intl__WEBPACK_IMPORTED_MODULE_12__.b,
													Object(
														lodash_es_assign__WEBPACK_IMPORTED_MODULE_7__.default
													)(
														{},
														_messages__WEBPACK_IMPORTED_MODULE_15__.a.notLikely
													)
												),
												component(
													react_intl__WEBPACK_IMPORTED_MODULE_12__.b,
													Object(
														lodash_es_assign__WEBPACK_IMPORTED_MODULE_7__.default
													)(
														{},
														_messages__WEBPACK_IMPORTED_MODULE_15__.a.veryLikely
													)
												)
											)
										);
									},
								},
								{
									key: 'renderFreeResponseStep',
									value: function() {
										return dom.div(
											{},
											dom.textarea({
												valueLink: {
													value: this.state.freeInput,
													requestChange: this.inputChanged,
												},
												onKeyDown: Object(
													shared_web_src_helpers_InputHelpers__WEBPACK_IMPORTED_MODULE_13__.makeOnCommandEnterKeyHandler
												)(this.submitNPSTextResponse),
											}),
											dom.button(
												{
													style: {
														backgroundColor:
															'#' + this.props.theme.backgroundColor,
													},
													onClick: this.handleSubmitClick,
													disabled: !this.state.freeInput,
												},
												this.state.ctaCopy
											)
										);
									},
								},
								{
									key: 'renderThankYouStep',
									value: function() {
										var e = component(
											react_intl__WEBPACK_IMPORTED_MODULE_12__.b,
											Object(
												lodash_es_assign__WEBPACK_IMPORTED_MODULE_7__.default
											)(
												{},
												_messages__WEBPACK_IMPORTED_MODULE_15__.a
													.feedbackApproval
											)
										);
										if (this.props.selectedRating > 6) {
											var t = void 0;
											return (
												(t =
													this.props.selectedRating > 8
														? __webpack_require__(1169)
														: __webpack_require__(1168)),
												dom.div(
													{ className: 'thank-you-container' },
													dom.img({ src: t }),
													dom.div({ className: 'note' }, e)
												)
											);
										}
										return dom.div(
											{ className: 'thank-you-sorry-container' },
											dom.div({ className: 'note' }, e),
											dom.div(
												{},
												component(
													react_intl__WEBPACK_IMPORTED_MODULE_12__.b,
													Object(
														lodash_es_assign__WEBPACK_IMPORTED_MODULE_7__.default
													)(
														{},
														_messages__WEBPACK_IMPORTED_MODULE_15__.a
															.detractorFeedbackApproval
													)
												)
											)
										);
									},
								},
								{
									key: 'getStep',
									value: function() {
										switch (this.props.npsStep) {
											case 0:
												return {
													render: this.renderRatingStep,
													class: 'rating-step',
												};
											case 1:
												return {
													render: this.renderFreeResponseStep,
													class: 'free-response-step',
												};
											case 2:
												return {
													render: this.renderThankYouStep,
													class: 'thank-you-step',
												};
										}
									},
								},
								{
									key: 'render',
									value: function() {
										var e = this,
											t = this.getStep();
										return dom.div(
											{
												className: 'NPSExpanded minimized-expanded ' + t.class,
												ref: function(t) {
													return (e._node = t);
												},
											},
											t.render()
										);
									},
								},
								{
									key: 'handleSubmitClick',
									value: function() {
										return this.props.onSubmitTextResponse(
											this.state.freeInput
										);
									},
								},
								{
									key: 'inputChanged',
									value: function(e) {
										return this.setState({ freeInput: e });
									},
								},
							]
						),
						NPSExpanded
					);
				})(Component);
			NPSExpanded.initClass();
			var mapStateToProps = function(e) {
					return {
						endUser: e.EndUser.currentEndUser,
						theme: e.Bootstrap.embedConfiguration.theme,
					};
				},
				mapDispatchToProps = function(e) {
					return {
						actions: Object(
							redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators
						)(
							{
								iframeOverrideSize:
									modules_UI__WEBPACK_IMPORTED_MODULE_14__.iframeOverrideSize,
							},
							e
						),
					};
				};
			__webpack_exports__.a = Object(
				react_redux__WEBPACK_IMPORTED_MODULE_11__.connect
			)(mapStateToProps, mapDispatchToProps)(NPSExpanded);
		}.call(this, __webpack_require__(0)));
	},
	885: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = (n(1174), e.DOM),
				f = e,
				m = f.Component,
				b = f.PropTypes,
				g = (function(e) {
					function t() {
						return (
							i()(this, t),
							l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
						);
					}
					return (
						p()(t, e),
						c()(
							t,
							[
								{
									key: 'getText',
									value: function() {
										return 0 === this.props.npsStep
											? null != this.props.message.attributes
												? this.props.message.attributes.preview
												: void 0
											: 1 === this.props.npsStep
											? null != this.props.message.attributes
												? this.props.message.attributes.followUpMessage
												: void 0
											: 'Thanks!';
									},
								},
								{
									key: 'render',
									value: function() {
										return _.div(
											{ className: 'NPSPreview minimized-preview-content' },
											_.div({ className: 'nps-question' }, this.getText())
										);
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										this.propTypes = {
											message: b.object.isRequired,
											npsStep: b.number.isRequired,
										};
									},
								},
							]
						),
						t
					);
				})(m);
			g.initClass(), (t.a = g);
		}.call(this, n(0)));
	},
	886: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
				),
				classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_5__
				),
				redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21),
				react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17),
				_NPSPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(885),
				_NPSExpanded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(884),
				Widget_containers_WidgetButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					221
				),
				Widget_containers_UnreadCountBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					446
				),
				modules_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42),
				modules_Conversation_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					52
				),
				Widget_modules_Message_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					26
				),
				Widget_components_WidgetButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					89
				),
				_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(882),
				_style_styl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(881),
				_style_styl__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_17__
				),
				_React = React,
				Component = _React.Component,
				dom = _React.DOM,
				component = _React.createElement,
				PropTypes = _React.PropTypes,
				getSenderId = _helpers__WEBPACK_IMPORTED_MODULE_16__.a.getSenderId,
				Minimized = (function(_Component) {
					function Minimized(props) {
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
							this,
							Minimized
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.markAsRead = _this.markAsRead.bind(_this)),
							(_this.handleSubmitNumericResponse = _this.handleSubmitNumericResponse.bind(
								_this
							)),
							(_this.handleSubmitTextResponse = _this.handleSubmitTextResponse.bind(
								_this
							));
						var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
							this,
							(
								Minimized.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
									Minimized
								)
							).call(this, props)
						);
						return (
							(_this.state = { npsStep: 0, npsRating: void 0 }),
							babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								_this
							)
						);
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							Minimized,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							Minimized,
							null,
							[
								{
									key: 'initClass',
									value: function() {
										(this.propTypes = {
											totalUnreadCount: PropTypes.number,
											previewMessage: PropTypes.object,
											previewSender: PropTypes.object,
											style: PropTypes.object,
										}),
											(this.defaultProps = { totalUnreadCount: 0 });
									},
								},
							]
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							Minimized,
							[
								{
									key: 'renderPreviewContent',
									value: function() {
										return component(
											_NPSPreview__WEBPACK_IMPORTED_MODULE_8__.a,
											{
												message: this.props.previewMessage,
												npsStep: this.state.npsStep,
											}
										);
									},
								},
								{
									key: 'renderExpandedContent',
									value: function() {
										return component(
											_NPSExpanded__WEBPACK_IMPORTED_MODULE_9__.a,
											{
												message: this.props.previewMessage,
												npsStep: this.state.npsStep,
												selectedRating: this.state.npsRating,
												onSubmitNumericResponse: this
													.handleSubmitNumericResponse,
												onSubmitTextResponse: this.handleSubmitTextResponse,
											}
										);
									},
								},
								{
									key: 'getIconType',
									value: function() {
										return Widget_components_WidgetButton__WEBPACK_IMPORTED_MODULE_15__
											.a.NPS;
									},
								},
								{
									key: 'markAsRead',
									value: function() {
										return this.props.actions.markAsRead({
											messageId: this.props.previewMessage.id,
										});
									},
								},
								{
									key: 'handleSubmitNumericResponse',
									value: function(e) {
										return (
											this.setState({ npsStep: 1, npsRating: e }),
											this.props.actions.createMessage({
												conversationId: this.props.previewMessage
													.conversationId,
												body: e,
												type:
													modules_Conversation_Constants__WEBPACK_IMPORTED_MODULE_13__.i,
												attributes: { numericResponse: e },
											})
										);
									},
								},
								{
									key: 'handleSubmitTextResponse',
									value: function(e) {
										var t = this;
										return (
											this.setState({ npsStep: 2 }),
											this.props.actions.createMessage({
												conversationId: this.props.previewMessage
													.conversationId,
												body: e,
												type:
													modules_Conversation_Constants__WEBPACK_IMPORTED_MODULE_13__.i,
												attributes: { textResponse: e },
											}),
											setTimeout(function() {
												return t.props.actions.markAsRead({
													messageId: t.props.previewMessage.id,
												});
											}, 2e3)
										);
									},
								},
								{
									key: 'render',
									value: function() {
										return dom.div(
											{
												className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(
													'Minimized',
													this.props.className
												),
											},
											dom.div(
												{ className: 'minimized-content type-nps-preview' },
												dom.div(
													{
														className: 'minimized-preview',
														onClick: this.handlePreviewClick,
													},
													this.renderPreviewContent(),
													component(
														Widget_containers_WidgetButton__WEBPACK_IMPORTED_MODULE_10__.a,
														{
															iconType: this.getIconType(),
															avatarUrl:
																null != this.props.previewSender
																	? this.props.previewSender.avatarUrl
																	: void 0,
														}
													)
												),
												this.renderExpandedContent()
											),
											dom.div(
												{
													className: 'dismiss-button',
													onClick: this.markAsRead,
												},
												dom.img({ src: __webpack_require__(425) })
											),
											this.props.totalUnreadCount > 0
												? dom.div(
														{
															className:
																_style_styl__WEBPACK_IMPORTED_MODULE_17___default
																	.a.UnreadCountBadgeWrapper,
														},
														component(
															Widget_containers_UnreadCountBadge__WEBPACK_IMPORTED_MODULE_11__.a
														)
												  )
												: void 0
										);
									},
								},
							]
						),
						Minimized
					);
				})(Component);
			Minimized.initClass();
			var mapStateToProps = function(e, t) {
					var n = void 0,
						r = t.message,
						a = getSenderId(r);
					return (
						a && (n = e.DriftUser.driftUsersById[a]),
						{ previewMessage: r, previewSender: n }
					);
				},
				mapDispatchToProps = function(e) {
					return {
						actions: Object(
							redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators
						)(
							{
								markAsRead:
									Widget_modules_Message_actions__WEBPACK_IMPORTED_MODULE_14__.q,
								createMessage: modules_Message__WEBPACK_IMPORTED_MODULE_12__.d,
							},
							e
						),
					};
				};
			__webpack_exports__.a = Object(
				react_redux__WEBPACK_IMPORTED_MODULE_7__.connect
			)(mapStateToProps, mapDispatchToProps)(Minimized);
		}.call(this, __webpack_require__(0)));
	},
	887: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(454);
			t.a = function() {
				return e.createElement(
					'div',
					{ className: 'flex-column flex-1' },
					e.createElement(
						'div',
						{ className: 'flex-1 flex-center' },
						e.createElement(r.a, null)
					)
				);
			};
		}.call(this, n(0)));
	},
	888: function(e, t, n) {
		e.exports = { NewConversationCampaign: 'vqwyEgk0Xfa_pE8GRUe9P' };
	},
	889: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(3),
				m = n(17),
				b = n(21),
				g = n(133),
				h = n(451),
				v = n(51),
				E = n(170),
				y = n(42),
				O = n(26),
				C = n(53),
				T = n(31),
				I = n(57),
				M = n(888),
				P = n.n(M),
				A = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.handleSubmit = function(e) {
								var t = r.props.campaign,
									n = t.inboxId,
									a = t.campaignId,
									o = t.messages,
									i = t.campaignMessage;
								r.props.actions.createConversation({
									body: e,
									inboxId: n,
									attributes: { relatedCampaignId: a, preMessages: o },
								}),
									i &&
										r.props.actions.createConversationEvent({
											conversationId: i.conversationId,
											type: I.e,
										});
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'componentWillMount',
								value: function() {
									this.props.actions.trackImpression({
										view: T.e.CONVERSATION_COMPOSER,
									});
								},
							},
							{
								key: 'componentWillUnmount',
								value: function() {
									this.props.actions.setCampaignMessage();
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props.theme;
									return e.createElement(
										'div',
										{ className: P.a.NewConversationCampaign },
										e.createElement(
											'div',
											{
												className: 'flex-1 Conversation',
												style: {
													backgroundColor: '#' + t.widgetBackgroundColor,
												},
											},
											e.createElement(h.a, {
												messages: Object(f.fromJS)(
													this.props.campaign.messages
												),
											})
										),
										e.createElement(g.a, {
											onSubmit: this.handleSubmit,
											utmContent: T.e.CONVERSATION_COMPOSER,
										})
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			A.propTypes = {
				campaign: _.PropTypes.shape({
					inboxId: _.PropTypes.number,
					campaignId: _.PropTypes.number,
					messages: _.PropTypes.array,
					campaignMessage: _.PropTypes.object,
				}).isRequired,
				actions: _.PropTypes.shape({
					createConversation: _.PropTypes.func.isRequired,
					createConversationEvent: _.PropTypes.func.isRequired,
					setCampaignMessage: _.PropTypes.func.isRequired,
					trackImpression: _.PropTypes.func.isRequired,
				}),
				theme: _.PropTypes.shape({
					backgroundColor: _.PropTypes.string,
					foregroundColor: _.PropTypes.string,
					textColor: _.PropTypes.string,
					activeColor: _.PropTypes.string,
					widgetBackgroundColor: _.PropTypes.string,
					widgetHalfHeight: _.PropTypes.bool,
				}),
			};
			t.a = Object(m.connect)(
				function(e) {
					return { campaign: Object(v.b)(e) };
				},
				function(e) {
					return {
						actions: Object(b.bindActionCreators)(
							{
								createConversation: y.a,
								createConversationEvent: O.c,
								setCampaignMessage: E.a,
								trackImpression: C.c,
							},
							e
						),
					};
				}
			)(A);
		}.call(this, n(0)));
	},
	89: function(e, t, n) {
		'use strict';
		(function(e) {
			n.d(t, 'a', function() {
				return v;
			});
			var r = n(169),
				a = n.n(r),
				o = n(8),
				i = n.n(o),
				s = n(0),
				c = n(40),
				u = n.n(c),
				l = n(12),
				d = n.n(l),
				p = n(188),
				_ = n.n(p),
				f = n(151),
				m = n(300),
				b = n(375),
				g = n.n(b),
				h = _()({ SOLID1: null, SOLID2: null, OUTLINE1: null, OUTLINE2: null }),
				v = _()({
					NPS: null,
					CHAT: null,
					SURVEY: null,
					FEEDBACK: null,
					ANNOUNCEMENT: null,
					TYPING_INDICATOR: null,
					IMAGE: null,
					DISMISS: null,
				}),
				E = n(612),
				y = {
					SOLID1: {
						ANNOUNCEMENT: n(1166),
						CHAT: n(1165),
						FEEDBACK: n(1164),
						NPS: n(1163),
						SURVEY: n(1162),
						DISMISS: E,
					},
					SOLID2: {
						ANNOUNCEMENT: n(1161),
						CHAT: n(1160),
						FEEDBACK: n(1159),
						NPS: n(1158),
						SURVEY: n(1157),
						DISMISS: E,
					},
					OUTLINE1: {
						ANNOUNCEMENT: n(1156),
						CHAT: n(1155),
						FEEDBACK: n(1154),
						NPS: n(1153),
						SURVEY: n(1152),
						DISMISS: E,
					},
					OUTLINE2: {
						ANNOUNCEMENT: n(1151),
						CHAT: n(1150),
						FEEDBACK: n(1149),
						NPS: n(1148),
						SURVEY: n(1147),
						DISMISS: E,
					},
				},
				O = function(t) {
					var n = t.className,
						r = t.backgroundColor,
						a = t.foregroundColor,
						o = t.iconStyle,
						s = t.iconType,
						c = t.avatarUrl,
						l = t.bot,
						p = t.onClick,
						_ = t.onMouseEnter,
						b = t.onMouseLeave,
						h = t.ariaMessage,
						E = (y[o] || y.SOLID1)[s],
						O = null;
					return (
						s !== v.IMAGE &&
							(O =
								s === v.TYPING_INDICATOR
									? e.createElement(f.a, { color: '#FFF', size: 'small' })
									: l
									? e.createElement(m.a, {
											className: 'Avatar',
											color: r,
											type: 'rect',
									  })
									: e.createElement(u.a, { className: g.a.svgIcon, src: E })),
						e.createElement(
							'button',
							{
								className: d()(
									g.a.WidgetButton,
									'flex-center',
									s,
									i()({}, g.a.avatar, s === v.IMAGE),
									i()({}, g.a.clickable, p),
									n
								),
								'aria-label': h,
								style: {
									backgroundColor: r,
									backgroundImage:
										s === v.IMAGE && c ? 'url(' + c + ')' : void 0,
									fill: a,
								},
								onClick: p,
								onMouseEnter: _,
								onMouseLeave: b,
							},
							O
						)
					);
				};
			(O.displayName = 'WidgetButton'),
				(O.propTypes = {
					className: s.PropTypes.string,
					backgroundColor: s.PropTypes.string,
					foregroundColor: s.PropTypes.string,
					iconStyle: s.PropTypes.oneOf(a()(h)),
					iconType: s.PropTypes.oneOf(a()(v)),
					avatarUrl: s.PropTypes.string,
					bot: s.PropTypes.bool,
					onClick: s.PropTypes.func,
					onMouseEnter: s.PropTypes.func,
					onMouseLeave: s.PropTypes.func,
				}),
				(O.defaultProps = {
					iconStyle: h.SOLID1,
					iconType: v.CHAT,
					foregroundColor: '#FFFFFF',
				}),
				(t.b = O);
		}.call(this, n(0)));
	},
	890: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(15),
				i = n(40),
				s = n.n(i),
				c = n(41),
				u = n(598),
				l = n.n(u),
				d = n(1177);
			t.a = function(t) {
				var n = t.backgroundColor,
					r = t.email,
					i = t.thankYouMessage;
				return e.createElement(
					'div',
					{ className: l.a.Container },
					e.createElement(s.a, {
						className: l.a.Icon,
						src: d,
						style: { color: n },
					}),
					i ||
						e.createElement(
							o.b,
							a()({}, c.a.asyncMessageThankYou, {
								values: {
									email: e.createElement(
										'span',
										{ style: { fontWeight: 600 } },
										r
									),
								},
							})
						)
				);
			};
		}.call(this, n(0)));
	},
	891: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(15),
				m = n(299),
				b = n.n(m),
				g = n(40),
				h = n.n(g),
				v = n(41),
				E = n(230),
				y = n(12),
				O = n.n(y),
				C = n(269),
				T = n.n(C),
				I = n(613),
				M = (function(t) {
					function n(e) {
						i()(this, n);
						var t = l()(this, (n.__proto__ || a()(n)).call(this, e));
						return (
							(t.handleChange = function(e) {
								t.setState({ email: e.target.value });
							}),
							(t.handleSubmit = function(e) {
								e.preventDefault(),
									t.isValid()
										? t.props.onSubmit &&
										  t.props.onSubmit({ email: t.state.email })
										: t.setState({ error: !0 });
							}),
							(t.isValid = function() {
								return !!t.state.email && Object(E.isEmail)(t.state.email);
							}),
							(t.state = {
								email: (e.endUser && e.endUser.email) || '',
								error: void 0,
							}),
							t
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.backgroundColor,
										r = t.textColor,
										a = this.isValid();
									return e.createElement(
										'div',
										{ className: T.a.Container },
										e.createElement(
											'div',
											{ className: T.a.Header },
											e.createElement(f.b, v.a.asyncMessageContactPrompt)
										),
										e.createElement(
											'form',
											{ className: T.a.Form, onSubmit: this.handleSubmit },
											e.createElement(
												'div',
												{ className: T.a.Body },
												e.createElement(
													b.a,
													{
														className: T.a.Input,
														placeholder: this.state.email
															? void 0
															: 'email@domain.com',
														value: this.state.email,
														onChange: this.handleChange,
														label: e.createElement(
															f.b,
															v.a.emailAddressInputLabel
														),
														invalidLabel:
															!a && e.createElement(f.b, v.a.invalidEmail),
														errorOverride: this.state.error,
														childrenFirst: !0,
														isValid: a,
														type: 'email',
														autoFocus: !0,
														autoCapitalize: 'none',
														size: 'medium',
													},
													e.createElement(h.a, {
														className: 'flex icon',
														src: I,
													})
												)
											),
											e.createElement(
												'button',
												{
													className: O()('flex-center', T.a.SubmitButton),
													style: { backgroundColor: a ? n : void 0, color: r },
												},
												e.createElement(
													'span',
													{ style: { textAlign: 'center', width: '100%' } },
													e.createElement(f.b, v.a.submitButtonLabel)
												)
											)
										)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			t.a = M;
		}.call(this, n(0)));
	},
	892: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(81),
				g = n(12),
				h = n.n(g),
				v = n(17),
				E = n(133),
				y = n(144),
				O = n.n(y),
				C = n(22),
				T = n(31),
				I = n(171),
				M = n.n(I),
				P = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.handleSubmit = function(e) {
								r.props.onSubmit &&
									r.props.onSubmit({
										body: e,
										attributes: {
											preMessages: [
												{
													body: Object(b.findDOMNode)(r._bodyNode).innerHTML,
													sender: r.props.sender,
												},
											],
										},
									});
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'renderAvatar',
								value: function() {
									var t = this.props,
										n = t.sender,
										r = (n = void 0 === n ? {} : n).title,
										a = n.avatarUrl,
										o = n.publicProfileUrl,
										i = t.overrideAvatarUrl,
										s = t.backgroundColor,
										c = i || a,
										u =
											a &&
											e.createElement(
												'div',
												{
													className: h()(M.a.Header__avatar__border, {
														small: !r,
													}),
													style: { borderColor: s },
												},
												e.createElement('div', {
													className: M.a.Header__avatar,
													style: { backgroundImage: 'url(' + c + ')' },
												})
											);
									return u && o
										? e.createElement('a', { href: o, target: '_blank' }, u)
										: u;
								},
							},
							{
								key: 'renderName',
								value: function() {
									var t = this.props,
										n = t.sender,
										r = (n = void 0 === n ? {} : n).name,
										a = n.publicProfileUrl,
										o = t.organizationName;
									return e.createElement(
										'span',
										{ className: M.a.Header__name },
										a
											? e.createElement('a', { href: a, target: '_blank' }, r)
											: r || o
									);
								},
							},
							{
								key: 'renderHeader',
								value: function() {
									var t = this.props,
										n = t.sender,
										r = (n = void 0 === n ? {} : n).title,
										a = t.hasConsolidatedWelcomeMsg,
										o = t.overrideAvatarUrl,
										i = t.hasOverrideSender,
										s = !!o;
									return e.createElement(
										'div',
										null,
										!!a &&
											(s || i) &&
											e.createElement(
												'div',
												{ className: M.a.Header },
												this.renderAvatar(),
												e.createElement(
													'div',
													{ className: 'flex-column' },
													this.renderName(),
													r &&
														e.createElement(
															'span',
															{ className: M.a.Header__title },
															r
														)
												)
											),
										!a &&
											e.createElement(
												'div',
												{ className: M.a.Header },
												this.renderAvatar(),
												e.createElement(
													'div',
													{ className: 'flex-column' },
													this.renderName(),
													r &&
														e.createElement(
															'span',
															{ className: M.a.Header__title },
															r
														)
												)
											)
									);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.awayMessage,
										o = n.showBranding,
										i = n.organizationName,
										s = n.connectionStatus,
										c = n.onChange,
										u = n.hasConsolidatedWelcomeMsg;
									return e.createElement(
										'div',
										{ className: M.a.Container },
										this.renderHeader(),
										e.createElement(
											'div',
											{
												className: h()(
													M.a.Body,
													a()({}, M.a.ConsolidatedWelcomeMsgBody, u)
												),
											},
											e.createElement(
												O.a,
												{
													ref: function(e) {
														t._bodyNode = e;
													},
													properties: {
														target: '_blank',
														rel: 'noopener noreferrer nofollower',
													},
												},
												r
											)
										),
										e.createElement(E.a, {
											size: 'medium',
											variant: 'minimal',
											showBranding: o,
											isAway: !0,
											minRows: 1,
											maxRows: 5,
											organizationName: i,
											autoFocus: !0,
											connectionStatus: s,
											onChange: c,
											onSubmit: this.handleSubmit,
											utmContent: T.e.NEW_CONVERSATION_AWAY_COMPOSER,
										})
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			t.a = Object(v.connect)(function(e) {
				return { hasConsolidatedWelcomeMsg: Object(C.p)(e) };
			})(P);
		}.call(this, n(0)));
	},
	893: function(e, t, n) {
		e.exports = { AsyncMessage: '_2TapetCnEUXrUAlyKj7G3H' };
	},
	894: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(169),
				a = n.n(r),
				o = n(2),
				i = n.n(o),
				s = n(13),
				c = n.n(s),
				u = n(10),
				l = n.n(u),
				d = n(11),
				p = n.n(d),
				_ = n(7),
				f = n.n(_),
				m = n(14),
				b = n.n(m),
				g = n(0),
				h = n(893),
				v = n.n(h),
				E = n(17),
				y = n(137),
				O = n(21),
				C = n(47),
				T = n(48),
				I = n(42),
				M = n(92),
				P = n(6),
				A = n(51),
				S = n(28),
				D = n(53),
				w = n(31),
				k = n(101),
				R = n(892),
				j = n(891),
				N = n(890),
				B = (function(t) {
					function n() {
						var e, t, r, a;
						l()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = f()(
								this,
								(e = n.__proto__ || c()(n)).call.apply(e, [this].concat(i))
							)),
							(r.state = {
								step: 1,
								body: void 0,
								attributes: void 0,
								email: void 0,
							}),
							(r.handleSubmit = function(e) {
								var t = e.body,
									n = e.attributes;
								r.props.actions.trackImpression({
									view: w.e.NEW_CONVERSATION_EMAIL_CAPTURE,
								}),
									r.setState({ body: t, attributes: n, step: 2 });
							}),
							(r.handleEmailCaptureSubmit = function(e) {
								var t = e.email,
									n = r.props,
									a = n.orgId,
									o = n.endUser,
									i = n.anonymousId;
								(o && 'LEAD' !== o.type) ||
									r.props.actions.identifyLead(a, i, t),
									r.props.actions.createConversation({
										body: r.state.body,
										attributes: r.state.attributes,
									});
							}),
							(a = t),
							f()(r, a)
						);
					}
					return (
						b()(n, t),
						p()(n, [
							{
								key: 'componentWillMount',
								value: function() {
									this.props.actions.trackImpression({
										view: w.e.NEW_CONVERSATION_AWAY_COMPOSER,
									});
								},
							},
							{
								key: 'renderStep',
								value: function() {
									switch (this.state.step) {
										case 1:
											return e.createElement(
												R.a,
												i()({}, this.props, { onSubmit: this.handleSubmit })
											);
										case 2:
											return e.createElement(
												j.a,
												i()({}, this.props, {
													onSubmit: this.handleEmailCaptureSubmit,
												})
											);
										case 3:
											return e.createElement(
												N.a,
												i()({}, this.props, { email: this.state.email })
											);
									}
								},
							},
							{
								key: 'renderBranding',
								value: function() {
									return (
										!!this.props.showBranding &&
										(1 !== this.state.step &&
											e.createElement(k.a, {
												style: { marginTop: '16px' },
												utmContent: w.e.NEW_CONVERSATION_EMAIL_CAPTURE,
											}))
									);
								},
							},
							{
								key: 'render',
								value: function() {
									return e.createElement(
										'div',
										{
											className: v.a.AsyncMessage,
											style: {
												backgroundColor: '#' + this.props.widgetBackgroundColor,
											},
										},
										this.renderStep(),
										this.renderBranding()
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			B.propTypes = {
				sender: g.PropTypes.shape({
					name: g.PropTypes.string,
					title: g.PropTypes.string,
					avatarUrl: g.PropTypes.string,
				}),
				awayMessage: g.PropTypes.node,
				thankYouMessage: g.PropTypes.node,
				showBranding: g.PropTypes.bool,
				connectionStatus: g.PropTypes.string,
				overrideAvatarUrl: g.PropTypes.string,
				orgId: g.PropTypes.number,
				endUser: g.PropTypes.shape({ type: g.PropTypes.oneOf(a()(T.a)) }),
				anonymousId: g.PropTypes.string,
				actions: g.PropTypes.shape({
					createConversation: g.PropTypes.func.isRequired,
					identifyLead: g.PropTypes.func.isRequired,
				}),
				widgetBackgroundColor: g.PropTypes.string,
			};
			t.a = Object(y.compose)(
				Object(C.a)(['activeColor', 'textColor', 'backgroundColor']),
				Object(E.connect)(
					function(e) {
						return {
							sender: Object(A.g)(e),
							hasOverrideSender: Object(A.l)(e),
							awayMessage: Object(A.a)(e),
							thankYouMessage: Object(A.i)(e),
							showBranding: !!e.Bootstrap.embedConfiguration.showBranding,
							connectionStatus: Object(P.i)(e),
							orgId: e.Bootstrap.orgId,
							endUser: e.EndUser.currentEndUser,
							anonymousId: e.Bootstrap.anonymousId,
							organizationName: e.Bootstrap.embedConfiguration.organizationName,
							overrideAvatarUrl: Object(S.b)(e),
						};
					},
					function(e) {
						return {
							actions: Object(O.bindActionCreators)(
								{
									createConversation: I.a,
									identifyLead: M.e,
									trackImpression: D.c,
								},
								e
							),
						};
					}
				)
			)(B);
		}.call(this, n(0)));
	},
	895: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(81),
				g = n(12),
				h = n.n(g),
				v = n(17),
				E = n(21),
				y = n(53),
				O = n(31),
				C = n(133),
				T = n(144),
				I = n.n(T),
				M = n(210),
				P = n.n(M),
				A = n(22),
				S = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.handleSubmit = function(e) {
								r.props.onSubmit &&
									r.props.onSubmit({
										body: e,
										attributes: {
											sentWelcomeMessage: r.props.sentWelcomeMessage,
											preMessages: [
												{
													body: Object(b.findDOMNode)(r._bodyNode).innerHTML,
													sender: r.props.sender,
												},
											],
										},
									});
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'componentWillMount',
								value: function() {
									this.props.actions.trackImpression({
										view: O.e.NEW_CONVERSATION_COMPOSER,
									});
								},
							},
							{
								key: 'renderAvatar',
								value: function() {
									var t = this.props,
										n = t.sender,
										r = (n = void 0 === n ? {} : n).title,
										a = n.avatarUrl,
										o = n.publicProfileUrl,
										i = t.backgroundColor,
										s =
											a &&
											e.createElement(
												'div',
												{
													className: h()(P.a.Header__avatar__border, {
														small: !r,
													}),
													style: { borderColor: i },
												},
												e.createElement('div', {
													className: P.a.Header__avatar,
													style: { backgroundImage: 'url(' + a + ')' },
												})
											);
									return s && o
										? e.createElement('a', { href: o, target: '_blank' }, s)
										: s;
								},
							},
							{
								key: 'renderName',
								value: function() {
									var t = this.props,
										n = t.sender,
										r = (n = void 0 === n ? {} : n).name,
										a = n.publicProfileUrl,
										o = t.organizationName;
									return e.createElement(
										'span',
										{ className: P.a.Header__name },
										a
											? e.createElement('a', { href: a, target: '_blank' }, r)
											: r || o
									);
								},
							},
							{
								key: 'renderHeader',
								value: function() {
									var t = this.props.sender,
										n = (t = void 0 === t ? {} : t).title;
									return e.createElement(
										'div',
										null,
										e.createElement(
											'div',
											{ className: P.a.Header },
											this.renderAvatar(),
											e.createElement(
												'div',
												{ className: 'flex-column' },
												this.renderName(),
												n &&
													e.createElement(
														'span',
														{ className: P.a.Header__title },
														n
													)
											)
										)
									);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.message,
										o = n.showBranding,
										i = n.organizationName,
										s = n.connectionStatus,
										c = n.onChange,
										u = n.hasConsolidatedWelcomeMsg;
									return e.createElement(
										'div',
										{ className: P.a.Container },
										this.renderHeader(),
										e.createElement(
											'div',
											{
												className: h()(
													P.a.Body,
													a()({}, P.a.ConsolidatedWelcomeMsgBody, u)
												),
											},
											e.createElement(
												I.a,
												{
													ref: function(e) {
														t._bodyNode = e;
													},
													properties: {
														target: '_blank',
														rel: 'noopener noreferrer nofollower',
													},
												},
												r
											)
										),
										e.createElement(C.a, {
											size: 'medium',
											variant: 'minimal',
											showBranding: o,
											minRows: 1,
											maxRows: 5,
											organizationName: i,
											autoFocus: !0,
											connectionStatus: s,
											onChange: c,
											onSubmit: this.handleSubmit,
											utmContent: O.e.NEW_CONVERSATION_COMPOSER,
										})
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			t.a = Object(v.connect)(
				function(e) {
					return { hasConsolidatedWelcomeMsg: Object(A.p)(e) };
				},
				function(e) {
					return {
						actions: Object(E.bindActionCreators)({ trackImpression: y.c }, e),
					};
				}
			)(S);
		}.call(this, n(0)));
	},
	896: function(e, t, n) {
		e.exports = { SyncMessage: '_2ypiAK4FPsbkjz6t21g2BV' };
	},
	897: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(169),
				a = n.n(r),
				o = n(2),
				i = n.n(o),
				s = n(13),
				c = n.n(s),
				u = n(10),
				l = n.n(u),
				d = n(11),
				p = n.n(d),
				_ = n(7),
				f = n.n(_),
				m = n(14),
				b = n.n(m),
				g = n(0),
				h = n(896),
				v = n.n(h),
				E = n(17),
				y = n(137),
				O = n(21),
				C = n(47),
				T = n(48),
				I = n(42),
				M = n(6),
				P = n(51),
				A = n(28),
				S = n(895),
				D = (function(t) {
					function n() {
						return (
							l()(this, n),
							f()(this, (n.__proto__ || c()(n)).apply(this, arguments))
						);
					}
					return (
						b()(n, t),
						p()(n, [
							{
								key: 'render',
								value: function() {
									return e.createElement(
										'div',
										{ className: v.a.SyncMessage },
										e.createElement(
											S.a,
											i()({}, this.props, {
												onSubmit: this.props.actions.createConversation,
											})
										)
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			D.propTypes = {
				senderName: g.PropTypes.string,
				senderTitle: g.PropTypes.string,
				senderAvatarUrl: g.PropTypes.string,
				showBranding: g.PropTypes.bool,
				connectionStatus: g.PropTypes.string,
				overrideAvatarUrl: g.PropTypes.string,
				orgId: g.PropTypes.number,
				endUser: g.PropTypes.shape({ type: g.PropTypes.oneOf(a()(T.a)) }),
				anonymousId: g.PropTypes.string,
				actions: g.PropTypes.shape({
					createConversation: g.PropTypes.func.isRequired,
				}),
			};
			t.a = Object(y.compose)(
				Object(C.a)(['activeColor', 'textColor', 'backgroundColor']),
				Object(E.connect)(
					function(e) {
						return {
							message: Object(P.j)(e),
							sender: Object(P.g)(e),
							showBranding: !!e.Bootstrap.embedConfiguration.showBranding,
							connectionStatus: Object(M.i)(e),
							orgId: e.Bootstrap.orgId,
							endUser: e.EndUser.currentEndUser,
							anonymousId: e.Bootstrap.anonymousId,
							organizationName: e.Bootstrap.embedConfiguration.organizationName,
							sentWelcomeMessage: e.UI.sentWelcomeMessage,
							overrideAvatarUrl: Object(A.b)(e),
							hasOverrideSender: Object(P.l)(e),
						};
					},
					function(e) {
						return {
							actions: Object(O.bindActionCreators)(
								{ createConversation: I.a },
								e
							),
						};
					}
				)
			)(D);
		}.call(this, n(0)));
	},
	898: function(e, t, n) {
		e.exports = { TimestampHeader: '_8snJWqrr4MdPqCYvbjnmw' };
	},
	900: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return u;
		});
		var r = n(9),
			a = n(25),
			o = n(16),
			i = n(6),
			s = n(139);
		function c() {
			var e = (arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: {}
				).getFirstEndUserMessage,
				t =
					void 0 === e
						? (function() {
								var e = (arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {}
									).getMessages,
									t = void 0 === e ? Object(a.u)() : e;
								return Object(r.createSelector)([t, i.j], function(e, t) {
									if (e)
										return e.find(function(e) {
											return (
												e.get('authorType') === t.type &&
												e.get('authorId') === t.id
											);
										});
								});
						  })()
						: e;
			return Object(r.createSelector)(t, function(e) {
				return e && e.get('local', !1);
			});
		}
		var u = function() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = e.getShouldShowEmailCaptureCard,
				n =
					void 0 === t
						? (function() {
								var e = (arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {}
									).getMessages,
									t = void 0 === e ? Object(a.u)() : e;
								return Object(r.createSelector)([t], function(e) {
									return e.some(function(e) {
										return e.getIn(
											['attributes', 'show_email_capture_card'],
											!1
										);
									});
								});
						  })()
						: t,
				u = e.getIsLocalConversation,
				l = void 0 === u ? c() : u,
				d = e.getConversation,
				p = void 0 === d ? Object(a.m)() : d;
			return Object(r.createSelector)([i.j, i.E, p, i.r, n, l, o.e], function(
				e,
				t,
				n,
				r
			) {
				var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
					o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
				return (
					(!(arguments.length > 6 && void 0 !== arguments[6]) ||
						arguments[6]) &&
					a &&
					!o &&
					e &&
					e.type === s.b &&
					!e.email &&
					!t &&
					(!r || (n && n.get('id') === r))
				);
			});
		};
	},
	901: function(e, t) {
		e.exports =
			'<svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Widget" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-15"><circle id="Oval-2-Copy-3" fill="#0A5BFF" cx="12.5" cy="12.5" r="12.5"></circle><g id="Group-2-Copy-5" transform="translate(6.000000, 7.000000)" fill="#FFFFFF"><path d="M11.9771213,0.351102019 C11.9896838,0.390771945 11.9967188,0.430944022 11.9987288,0.472622552 C11.9997338,0.491704288 12.0007388,0.509279572 11.9992313,0.528361309 C11.9967188,0.572550593 11.9866688,0.615735576 11.9715938,0.658418407 C11.9670714,0.672478634 11.9655639,0.686538861 11.9595339,0.700096937 C11.9575239,0.703611994 6.69385044,11.7157826 6.69385044,11.7157826 C6.61093816,11.8900289 6.43506363,12 6.24260665,12 C6.04261218,11.9979914 5.86673765,11.8829988 5.78633787,11.7057395 L4.00045764,7.73874695 L0.25784764,5.66888069 C0.0910180859,5.57648491 -0.00847664823,5.39721702 0.000568327598,5.20639966 C0.0106183007,5.01558229 0.127197989,4.84736172 0.302570021,4.77203908 L11.3067881,0.0367555182 C11.3294006,0.0292232538 11.341963,0.0282189519 11.354023,0.0242017442 C11.3992479,0.0101415173 11.4444727,0.00110280005 11.4907026,9.84981275e-05 C11.5087926,-0.000403652833 11.5258775,0.00110280005 11.5439675,0.00260925293 C11.5861774,0.00612430965 11.6263773,0.014660876 11.6660747,0.0287211029 C11.6831596,0.0342447634 11.6997421,0.039266273 11.7163245,0.0467985374 C11.7680819,0.0714039345 11.8168243,0.102537294 11.8585316,0.144717975 C11.9077765,0.193928769 11.9374239,0.245650318 11.9610414,0.299882622 C11.9680763,0.316955754 11.9720963,0.333526736 11.9771213,0.351102019 Z" id="Shape"></path></g></g></g></svg>';
	},
	902: function(e, t, n) {
		'use strict';
		var r = n(8),
			a = n.n(r),
			o = n(13),
			i = n.n(o),
			s = n(10),
			c = n.n(s),
			u = n(11),
			l = n.n(u),
			d = n(7),
			p = n.n(d),
			_ = n(14),
			f = n.n(_),
			m = n(0),
			b = n.n(m),
			g = n(40),
			h = n.n(g),
			v = n(12),
			E = n.n(v),
			y = n(162),
			O = n.n(y),
			C = n(901),
			T = n.n(C),
			I = [
				{ emoji: '😠', value: 1 },
				{ emoji: '🙁', value: 2 },
				{ emoji: '😐', value: 3 },
				{ emoji: '😊', value: 4 },
				{ emoji: '😍', value: 5 },
			],
			M = (function(e) {
				function t(e) {
					c()(this, t);
					var n = p()(this, (t.__proto__ || i()(t)).call(this, e));
					return (
						(n.selectRating = function(e) {
							n.setState({ ratingValue: e.value });
						}),
						(n.onRatingTextChange = function(e) {
							n.setState({ ratingText: e.target.value });
						}),
						(n.onKeyDown = function(e) {
							(13 != e.which && 13 != e.keyCode) ||
								(e.preventDefault(), n.submitRating());
						}),
						(n.submitRating = function() {
							var e = n.state,
								t = e.ratingValue,
								r = e.ratingText;
							n.props.submitRating({ ratingValue: t, ratingText: r });
						}),
						(n.state = { ratingValue: null, mounted: !1, ratingText: '' }),
						n
					);
				}
				return (
					f()(t, e),
					l()(t, [
						{
							key: 'componentDidMount',
							value: function() {
								var e = this;
								setTimeout(function() {
									e.setState({ mounted: !0 });
								}, 3e3);
							},
						},
						{
							key: 'renderRatings',
							value: function() {
								var e = this,
									t = this.state.ratingValue;
								return I.map(function(n) {
									return b.a.createElement(
										'div',
										{
											className: E()(
												O.a.ConversationRatingEmoji,
												a()(
													{},
													O.a.ConversationRatingEmojiSelected,
													n.value === t
												)
											),
											onClick: function() {
												return e.selectRating(n);
											},
											key: n.value,
										},
										n.emoji
									);
								});
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.state,
									t = e.ratingValue,
									n = e.mounted,
									r = e.ratingText,
									o = this.props,
									i = o.onDismiss,
									s = o.message,
									c = o.theme,
									u = s.getIn(
										['attributes', 'ratingPrompt', 'ratingPromptMessage'],
										'How was your conversation with Driftbot?'
									);
								return b.a.createElement(
									'div',
									null,
									n &&
										b.a.createElement('div', {
											className: O.a.ConversationRatingVeil,
										}),
									b.a.createElement(
										'div',
										{
											className: E()(
												O.a.ConversationRatingContainer,
												a()({}, O.a.ConversationRatingContainerInitial, !n)
											),
										},
										b.a.createElement(
											'div',
											{
												className: O.a.ConversationRatingHeader,
												style: {
													backgroundColor: '#' + c.backgroundColor,
													color: '#' + c.textColor,
												},
											},
											b.a.createElement(
												'div',
												{ className: O.a.ConversationRatingClose, onClick: i },
												'X'
											),
											u
										),
										b.a.createElement(
											'div',
											{ className: O.a.ConversationRatingEmojis },
											this.renderRatings()
										),
										t &&
											b.a.createElement(
												'div',
												{ className: O.a.ConversationRatingFeedbackContainer },
												b.a.createElement('textarea', {
													className: O.a.ConversationRatingFeedback,
													placeholder: 'Tell us more...',
													value: r,
													onChange: this.onRatingTextChange,
													onKeyDown: this.onKeyDown,
												}),
												b.a.createElement(h.a, {
													className: O.a.ConversationRatingSubmitIcon,
													src: T.a,
													onClick: this.submitRating,
												})
											)
									)
								);
							},
						},
					]),
					t
				);
			})(m.Component);
		t.a = M;
	},
	903: function(e, t, n) {
		'use strict';
		var r = n(0),
			a = n.n(r),
			o = n(12),
			i = n.n(o),
			s = n(17),
			c = n(6),
			u = n(28),
			l = n(489),
			d = n.n(l),
			p = function() {
				return a.a.createElement(
					'svg',
					{
						className: d.a.DottedLine,
						x: '0px',
						y: '0px',
						width: '400px',
						height: '10',
						viewBox: '0 0 400 1',
					},
					a.a.createElement('line', {
						x1: '0',
						y1: '0.5',
						x2: '400',
						y2: '0.5',
					})
				);
			},
			_ = function(e) {
				var t = e.endUserEmail,
					n = e.isEmbeddedMessenger;
				return a.a.createElement(
					'div',
					{ className: i()(d.a.OfflineHeading, { floating: n }) },
					a.a.createElement(p, null),
					a.a.createElement(
						'div',
						{ className: d.a.Prompt },
						'The team is out right now, but they’ll get back to you ',
						a.a.createElement(
							'span',
							null,
							t
								? a.a.createElement(
										'span',
										null,
										'at ',
										a.a.createElement(
											'span',
											{ className: 'dsg-medium-weight' },
											t
										)
								  )
								: 'soon'
						)
					)
				);
			};
		(_.propTypes = { endUserEmail: r.PropTypes.string }),
			(t.a = Object(s.connect)(function(e) {
				return {
					endUserEmail: Object(c.m)(e),
					isEmbeddedMessenger: Object(u.g)(e),
				};
			})(_));
	},
	904: function(e, t, n) {
		e.exports = { TimestampHeader: '_1trdmLCx1n1kWgTx0skYlm' };
	},
	905: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(2),
				f = n.n(_),
				m = n(0),
				b = n(15),
				g = n(43),
				h = n.n(g),
				v = n(12),
				E = n.n(v),
				y = n(904),
				O = n.n(y),
				C = b.e,
				T = function(t) {
					return e.createElement(
						b.a,
						f()({}, t, { weekday: 'short', hour: 'numeric', minute: 'numeric' })
					);
				},
				I = function(t) {
					return e.createElement(
						b.a,
						f()({}, t, {
							month: 'short',
							day: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
						})
					);
				},
				M = function(t) {
					return e.createElement(
						b.a,
						f()({}, t, {
							year: 'numeric',
							month: 'numeric',
							day: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
						})
					);
				};
			function P(e, t) {
				if (e === t) return !0;
				var n = new Date(e).getTime(),
					r = new Date(t).getTime();
				return isFinite(n) && isFinite(r) && n === r;
			}
			var A = (function(t) {
				function n() {
					var e, t, r, o;
					i()(this, n);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(t = r = l()(
							this,
							(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
						)),
						(r.state = { now: Date.now() }),
						(o = t),
						l()(r, o)
					);
				}
				return (
					p()(n, t),
					c()(n, [
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								P(this.props.value, e.value) ||
									this.setState({ now: Date.now() });
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function(e, t) {
								return (
									!P(e.value, this.props.value) || !P(t.now, this.state.now)
								);
							},
						},
						{
							key: 'render',
							value: function() {
								var t = h()(this.props.value),
									n = h()(this.state.now),
									r = t.format('llll'),
									a = (function(e) {
										var t =
												arguments.length > 1 && void 0 !== arguments[1]
													? arguments[1]
													: h()(),
											n = e.clone().startOf('day'),
											r = t.clone().startOf('day');
										return n.isSame(r)
											? C
											: r.diff(n, 'weeks') < 1
											? T
											: r.diff(n, 'years') < 1
											? I
											: M;
									})(t, n);
								return e.createElement(
									'time',
									{
										className: E()(O.a.TimestampHeader, {
											floating: this.props.isEmbeddedMessenger,
										}),
										dateTime: r,
										title: r,
									},
									e.createElement(a, { value: t })
								);
							},
						},
					]),
					n
				);
			})(m.Component);
			(A.propTypes = { value: m.PropTypes.number.isRequired }), (t.a = A);
		}.call(this, n(0)));
	},
	906: function(e, t, n) {
		'use strict';
		function r(e, t) {
			return e.DriftUser.driftUsersById[t.userId];
		}
		n.d(t, 'a', function() {
			return r;
		});
	},
	907: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(17),
				m = n(448),
				b = n(447),
				g = (function(t) {
					function n() {
						return (
							i()(this, n),
							l()(this, (n.__proto__ || a()(n)).apply(this, arguments))
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'componentDidUpdate',
								value: function() {
									this.props.onChange && this.props.onChange();
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props.users;
									return e.createElement(
										'div',
										{ className: 'flex-column' },
										t.map(function(t) {
											return (
												t && e.createElement(b.a, { key: 'ti:' + t, userId: t })
											);
										})
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(g.propTypes = {
				conversationId: _.PropTypes.any,
				users: _.PropTypes.array.isRequired,
				onChange: _.PropTypes.func,
			}),
				(t.a = Object(f.connect)(function() {
					var e = Object(m.b)();
					return function(t, n) {
						return { users: e(t, n) };
					};
				})(g));
		}.call(this, n(0)));
	},
	908: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return i;
		});
		var r = n(0),
			a = n.n(r),
			o = n(15),
			i = function() {
				return a.a.createElement(o.b, {
					id: 'app.header.title.conversations',
					description: 'Navbar title for the Conversations view',
					defaultMessage: 'Conversations',
				});
			};
	},
	909: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return i;
		});
		var r = n(0),
			a = n.n(r),
			o = n(15),
			i = function() {
				return a.a.createElement(o.b, {
					id: 'app.header.title.conversations',
					description: 'Navbar title for the Conversations view',
					defaultMessage: 'Conversations',
				});
			};
	},
	91: function(e, t, n) {
		e.exports = {
			EmailCaptureSlider: 'hlkxMak8Yvpp7V519uudV',
			slideIn: '_2SEavUeJqz6PR_rJ-IPDON',
			slideOut: '_25uAckjayZunvaVUvA5W5e',
			EmailCaptureSlider__Dismiss: '_3inhtsIN78nmA6N8jOPVLo',
			EmailCaptureSlider__Bubble: 'Q4qmwGdkW-OAZ0fdaN_km',
			EmailCaptureSlider__Bubble__Title: '_29vw7TuPr8BvnPmQim9SyX',
			EmailCaptureSlider__Bubble__Copy: '_2Ej7ht9o4AZE9uomjoYcM4',
			EmailCaptureSlider__Bubble__Composer: '_3NF-ok9QLIxL_8hJP-wqln',
			EmailCaptureSlider__Bubble__Footer: '_3me6Qx7Oc-d8q01pJiZkW-',
			EmailCaptureSlider__Bubble__Branding: '_30acjYOY3KpZb6rcrQtycV',
			EmailCaptureSlider__Bubble__EnterPrompt: '_3E3EblP2v3zR0EF0iqybmm',
			EmailCaptureSlider__Bubble__Avatar: 'TSuRK-6Q45wskduuptJBi',
		};
	},
	910: function(e, t) {
		e.exports =
			'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><g fill="#9A9A9A" fill-rule="nonzero"><path d="M3.306 0h-2.2C.496 0 0 .49 0 1.095v6.56C0 8.26.496 8.75 1.106 8.75h2.2c.61 0 1.106-.491 1.106-1.095v-6.56C4.412.49 3.915 0 3.306 0zm-2.2 7.875a.22.22 0 0 1-.222-.22v-6.56c0-.121.1-.22.222-.22h2.2c.122 0 .222.099.222.22v6.56c0 .122-.1.22-.222.22h-2.2z"></path><path d="M12.176 0H6.63c-.283 0-.565.064-.818.185L4.273.92a.429.429 0 0 0-.205.587.467.467 0 0 0 .614.196l1.54-.737a.951.951 0 0 1 .409-.092h5.545c.167 0 .322.086.406.225l.516.865c.646 1.08.987 2.31.987 3.554v1.48c0 .483-.41.876-.916.876H9.725a.925.925 0 0 0-.756.384.84.84 0 0 0-.091.813c.42 1.003.632 2.06.632 3.14v.508c0 .223-.19.405-.424.405h-.284a.423.423 0 0 1-.408-.294l-.179-.6A9.838 9.838 0 0 0 6.32 8.723a2.39 2.39 0 0 0-1.843-.847H3.105a.448.448 0 0 0-.458.438c0 .241.205.437.458.437h1.372c.442 0 .853.19 1.13.52a8.98 8.98 0 0 1 1.728 3.202l.18.6c.163.546.692.928 1.287.928h.284c.739 0 1.339-.574 1.339-1.28v-.507a8.94 8.94 0 0 0-.698-3.466l3.442.003C14.179 8.75 15 7.965 15 7V5.518a7.78 7.78 0 0 0-1.108-3.989l-.516-.864a1.398 1.398 0 0 0-1.2-.666z"></path></g></svg>';
	},
	911: function(e, t) {
		e.exports =
			'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><g fill="#9A9A9A" fill-rule="nonzero"><path d="M3.306 14h-2.2C.496 14 0 13.51 0 12.905v-6.56C0 5.74.496 5.25 1.106 5.25h2.2c.61 0 1.106.491 1.106 1.095v6.56c0 .604-.497 1.095-1.106 1.095zm-2.2-7.875a.22.22 0 0 0-.222.22v6.56c0 .121.1.22.222.22h2.2a.221.221 0 0 0 .222-.22v-6.56a.22.22 0 0 0-.222-.22h-2.2z"></path><path d="M12.176 14H6.63c-.283 0-.565-.064-.818-.185l-1.54-.736a.429.429 0 0 1-.205-.588.467.467 0 0 1 .614-.195l1.54.737c.127.06.268.092.409.092h5.545a.473.473 0 0 0 .406-.225l.516-.865c.646-1.08.987-2.31.987-3.554v-1.48c0-.483-.41-.876-.916-.876H9.725a.925.925 0 0 1-.756-.384.84.84 0 0 1-.091-.813c.42-1.003.632-2.06.632-3.14V1.28a.415.415 0 0 0-.424-.405h-.284a.423.423 0 0 0-.408.294l-.179.6A9.838 9.838 0 0 1 6.32 5.277a2.39 2.39 0 0 1-1.843.847H3.105a.448.448 0 0 1-.458-.438c0-.241.205-.437.458-.437h1.372c.442 0 .853-.19 1.13-.52a8.98 8.98 0 0 0 1.728-3.202l.18-.6C7.678.382 8.207 0 8.802 0h.284c.739 0 1.339.574 1.339 1.28v.507a8.94 8.94 0 0 1-.698 3.466l3.442-.003C14.179 5.25 15 6.035 15 7v1.481a7.78 7.78 0 0 1-1.108 3.989l-.516.864c-.246.41-.706.666-1.2.666z"></path></g></svg>';
	},
	912: function(e, t, n) {
		e.exports = { Rating: '_21i6UqYcDluUdT_JQp4YOh' };
	},
	913: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(17),
			b = n(21),
			g = n(137),
			h = n(243),
			v = n.n(h),
			E = n(40),
			y = n.n(E),
			O = n(426),
			C = n(220),
			T = n(25),
			I = n(912),
			M = n(911),
			P = n.n(M),
			A = n(910),
			S = n.n(A),
			D = (function(e) {
				function t(e) {
					i()(this, t);
					var n = l()(this, (t.__proto__ || a()(t)).call(this, e));
					return (
						(n.getButtonColor = function(e, t) {
							var r = n.props,
								a = r.disabled,
								o = r.hasWidgetHalfHeight,
								i = r.activeColor,
								s = r.foregroundColor;
							return a
								? 'inherit'
								: e
								? o
									? s
									: i
								: t
								? o
									? v()(s)
											.alpha(0.75)
											.toString()
									: v()(i)
											.alpha(0.75)
											.toString()
								: o
								? v()(s)
										.alpha(0.6)
										.toString()
								: 'rgb(154,154,154)';
						}),
						(n.getButtonBackground = function(e, t) {
							var r = n.props,
								a = r.disabled,
								o = r.hasWidgetHalfHeight,
								i = r.activeColor,
								s = r.foregroundColor;
							return a
								? 'inherit'
								: e
								? o
									? v()(s)
											.alpha(0.1)
											.toString()
									: v()(i)
											.alpha(0.1)
											.toString()
								: t
								? o
									? v()(s)
											.alpha(0.1)
											.toString()
									: v()(i)
											.alpha(0.05)
											.toString()
								: void 0;
						}),
						(n.state = { isThumbsUpHovered: !1, isThumbsDownHovered: !1 }),
						n
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'render',
							value: function() {
								var e = this,
									t = this.props,
									n = t.conversationRating,
									r = t.onThumbsUp,
									a = t.onThumbsDown,
									o = t.disabled,
									i = this.state,
									s = i.isThumbsUpHovered,
									c = i.isThumbsDownHovered;
								return f.a.createElement(
									'div',
									{ className: 'rate-buttons' },
									f.a.createElement(
										'button',
										{
											className: 'rate-button',
											style: {
												color: this.getButtonColor('THUMBS_UP' === n, s),
												background: this.getButtonBackground(
													'THUMBS_UP' === n,
													s
												),
											},
											onClick: r,
											disabled: o,
											onMouseEnter: function() {
												return e.setState({ isThumbsUpHovered: !0 });
											},
											onMouseLeave: function() {
												return e.setState({ isThumbsUpHovered: !1 });
											},
											onFocus: function() {
												return e.setState({ isThumbsUpHovered: !0 });
											},
											onBlur: function() {
												return e.setState({ isThumbsUpHovered: !1 });
											},
											tabIndex: '1000',
											'aria-label': 'Give a positive conversation rating',
										},
										f.a.createElement(y.a, {
											className: 'rate-icon thumbs-up',
											src: P.a,
										})
									),
									f.a.createElement(
										'button',
										{
											className: 'rate-button',
											style: {
												color: this.getButtonColor('THUMBS_DOWN' === n, c),
												background: this.getButtonBackground(
													'THUMBS_DOWN' === n,
													c
												),
											},
											onClick: a,
											disabled: o,
											onMouseEnter: function() {
												return e.setState({ isThumbsDownHovered: !0 });
											},
											onMouseLeave: function() {
												return e.setState({ isThumbsDownHovered: !1 });
											},
											onFocus: function() {
												return e.setState({ isThumbsDownHovered: !0 });
											},
											onBlur: function() {
												return e.setState({ isThumbsDownHovered: !1 });
											},
											tabIndex: '1000',
											'aria-label': 'Give a negative conversation rating',
										},
										f.a.createElement(y.a, {
											className: 'rate-icon thumbs-down',
											src: S.a,
										})
									)
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		D.PropTypes = {
			onThumbsUp: _.PropTypes.func.isRequired,
			onThumbsDown: _.PropTypes.func.isRequired,
			conversationRating: _.PropTypes.string,
			activeColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			disabled: _.PropTypes.bool,
			hasWidgetHalfHeight: _.PropTypes.bool,
		};
		var w = (function(e) {
			function t() {
				var e, n, r, o;
				i()(this, t);
				for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
					c[u] = arguments[u];
				return (
					(n = r = l()(
						this,
						(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
					)),
					(r.onRatingClick = function(e) {
						var t = r.props,
							n = t.conversationRating,
							a = t.rateConversation;
						n !== e && a(e);
					}),
					(o = n),
					l()(r, o)
				);
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props,
								n = t.conversationRating,
								r = t.activeColor,
								a = t.foregroundColor,
								o = t.disabled,
								i = t.hasWidgetHalfHeight;
							return f.a.createElement(
								'div',
								{ className: I.Rating },
								f.a.createElement(D, {
									activeColor: r,
									foregroundColor: a,
									conversationRating: n,
									onThumbsUp: function() {
										return !o && e.onRatingClick('THUMBS_UP');
									},
									onThumbsDown: function() {
										return !o && e.onRatingClick('THUMBS_DOWN');
									},
									hasWidgetHalfHeight: i,
								})
							);
						},
					},
				]),
				t
			);
		})(_.Component);
		w.PropTypes = {
			rateConversation: _.PropTypes.func.isRequired,
			conversationRating: _.PropTypes.string,
			activeColor: _.PropTypes.string,
			foregroundColor: _.PropTypes.string,
			disabled: _.PropTypes.bool,
		};
		t.a = Object(g.compose)(
			Object(m.connect)(
				function(e) {
					var t = Object(T.k)(e);
					return {
						conversationId: t,
						conversationRating: Object(C.a)(e, { conversationId: t }),
					};
				},
				function(e) {
					return {
						actions: Object(b.bindActionCreators)({ rateConversation: O.a }, e),
					};
				}
			),
			Object(g.branch)(function(e) {
				return !e.conversationId;
			}, g.renderNothing),
			Object(g.withProps)(function(e) {
				return {
					rateConversation: function(t) {
						e.actions.rateConversation({
							conversationId: e.conversationId,
							rating: t,
						});
					},
					activeColor: e.hasWidgetHalfHeight
						? e.foregroundColor
						: e.activeColor,
				};
			})
		)(w);
	},
	914: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(17),
				u = n(270),
				l = n(99),
				d = n(102),
				p = n(6),
				_ = n(22),
				f = 9e5,
				m = 72e5,
				b = {
					availability: s.PropTypes.oneOf([
						l.b.AVAILABLE,
						l.b.OFFLINE,
						l.b.ON_CALL,
					]),
					lastActivityAt: s.PropTypes.number,
					foregroundColor: s.PropTypes.string,
				};
			function g(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
				return (
					(arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: Date.now()) -
						e <=
					t
				);
			}
			function h(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
				return (
					(arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: Date.now()) -
						e >=
					t
				);
			}
			function v(t) {
				var n = t.lastActivityAt,
					r = t.availability,
					a = t.foregroundColor;
				return r === l.b.OFFLINE || h(n)
					? e.createElement(u.b, { foregroundColor: a })
					: g(n)
					? e.createElement(u.c, { foregroundColor: a })
					: e.createElement(u.a, { time: n, foregroundColor: a });
			}
			function E(t) {
				var n = t.lastActivityAt,
					r = t.availability,
					a = t.foregroundColor;
				return r === l.b.ON_CALL || g(n)
					? e.createElement(u.c, { foregroundColor: a })
					: h(n)
					? e.createElement(u.b, { foregroundColor: a })
					: e.createElement(u.a, { time: n, foregroundColor: a });
			}
			function y(t) {
				var n = t.hasCentralizedRouting,
					r = t.availability,
					o = t.theme,
					s = i()(t, ['hasCentralizedRouting', 'availability', 'theme']);
				if (!r) return e.createElement('div', null);
				var c = o.foregroundColor;
				return n
					? e.createElement(v, a()({}, s, { foregroundColor: c }))
					: e.createElement(E, a()({}, s, { foregroundColor: c }));
			}
			(v.propTypes = b),
				(E.propTypes = b),
				(y.propTypes = a()({}, b, { hasCentralizedRouting: s.PropTypes.bool })),
				(t.a = Object(c.connect)(function(e, t) {
					var n = Object(d.b)(e, t);
					return {
						availability: n.availability,
						lastActivityAt: n.lastActivityAt,
						hasCentralizedRouting: Object(p.B)(e),
						theme: Object(_.n)(e),
					};
				})(y));
		}.call(this, n(0)));
	},
	915: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(134),
				o = n(914),
				i = n(490),
				s = n.n(i);
			var c = function(t) {
				var n = t.driftUser,
					r = t.orgName,
					i = t.backgroundColor,
					c = t.shouldRenderAgentStatus,
					u =
						n &&
						(n.avatarUrl || n.bot) &&
						e.createElement(a.a, { shape: 'circle', user: n, color: i });
				return e.createElement(
					'div',
					{ className: s.a.ConversationTitle },
					u &&
						(n.publicProfileUrl
							? e.createElement(
									'a',
									{ href: n.publicProfileUrl, target: '_blank' },
									u
							  )
							: u),
					e.createElement(
						'div',
						{ className: s.a.ConversationInfo },
						e.createElement(
							'div',
							{ className: s.a.AgentName },
							(function(e, t) {
								if (e) {
									if (e.name) return e.name;
									if (t) return t + ' Team Member';
								}
								return t;
							})(n, r)
						),
						c && n && !n.bot && e.createElement(o.a, { agentId: n.id })
					)
				);
			};
			(c.propTypes = {
				driftUser: r.PropTypes.object,
				orgName: r.PropTypes.string.isRequired,
				backgroundColor: r.PropTypes.string,
				isOnline: r.PropTypes.bool,
				shouldRenderAgentStatus: r.PropTypes.bool,
			}),
				(c.defaultProps = { shouldRenderAgentStatus: !1 }),
				(t.a = c);
		}.call(this, n(0)));
	},
	916: function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function(React) {
			var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					8
				),
				babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					13
				),
				babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					10
				),
				babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					11
				),
				babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					7
				),
				babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					14
				),
				babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
				),
				react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17),
				redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21),
				recompose_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					27
				),
				recompose_compose__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					recompose_compose__WEBPACK_IMPORTED_MODULE_8__
				),
				recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					111
				),
				recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9__
				),
				recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					229
				),
				recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10__
				),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					56
				),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					recompose_branch__WEBPACK_IMPORTED_MODULE_11__
				),
				classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12),
				classnames__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					classnames__WEBPACK_IMPORTED_MODULE_12__
				),
				_SVGButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(492),
				_ConversationTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					915
				),
				Widget_components_Rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					913
				),
				_modules_DriftUser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					223
				),
				_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(909),
				Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					25
				),
				modules_UI__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29),
				Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					16
				),
				Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					22
				),
				Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					47
				),
				utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					32
				),
				Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					28
				),
				_style_styl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(212),
				_style_styl__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
					_style_styl__WEBPACK_IMPORTED_MODULE_25__
				),
				_React = React,
				Component = _React.Component,
				component = _React.createElement,
				PropTypes = _React.PropTypes,
				ConversationListButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Go to your list of past conversations',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_25___default.a
								.HeaderActionButton,
						svgString: __webpack_require__(503),
						onClick: t,
					});
				},
				ComposeButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Start a new conversation',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_25___default.a
								.HeaderActionButton,
						onClick: t,
						svgString: __webpack_require__(614),
					});
				},
				CloseButton = function(e) {
					var t = e.onClick;
					return component(_SVGButton__WEBPACK_IMPORTED_MODULE_13__.a, {
						'aria-label': 'Close the Chat Widget',
						className:
							_style_styl__WEBPACK_IMPORTED_MODULE_25___default.a
								.HeaderActionButton,
						onClick: t,
						svgString: __webpack_require__(359),
					});
				},
				ExperimentalHeader = (function(_Component) {
					function ExperimentalHeader() {
						var _ref4, _this;
						babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
							this,
							ExperimentalHeader
						);
						var _this,
							thisFn = function() {
								return _this;
							}.toString(),
							thisName = thisFn
								.slice(thisFn.indexOf('return') + 6 + 1, thisFn.indexOf(';'))
								.trim();
						eval(thisName + ' = this;'),
							(_this.handleComposeButtonClick = _this.handleComposeButtonClick.bind(
								_this
							)),
							(_this.handleListButtonClick = _this.handleListButtonClick.bind(
								_this
							));
						for (
							var _len = arguments.length, args = Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							args[_key] = arguments[_key];
						return (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
							this,
							(_ref4 =
								ExperimentalHeader.__proto__ ||
								babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(
									ExperimentalHeader
								)).call.apply(_ref4, [this].concat(args))
						));
					}
					return (
						babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
							ExperimentalHeader,
							_Component
						),
						babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
							ExperimentalHeader,
							[
								{
									key: 'componentWillMount',
									value: function() {
										var e = this.props,
											t = e.lastDriftUser,
											n = e.shouldRenderAgentStatus,
											r = null != t ? t.id : void 0;
										if (null != r && n)
											return this.props.actions.fetchAgentStatus(r);
									},
								},
								{
									key: 'componentWillReceiveProps',
									value: function(e) {
										var t = e.lastDriftUser,
											n = e.shouldRenderAgentStatus,
											r = null != t ? t.id : void 0,
											a =
												(null != this.props.lastDriftUser
													? this.props.lastDriftUser.id
													: void 0) !== r;
										if (null != r && a && n)
											return this.props.actions.fetchAgentStatus(r);
									},
								},
								{
									key: 'getConversationTitle',
									value: function() {
										var e = this.props,
											t = e.organizationName,
											n = e.backgroundColor,
											r = e.lastDriftUser,
											a = e.isOnline,
											o = e.shouldRenderAgentStatus,
											i = e.lastAgentResponseAt;
										return React.createElement(
											_ConversationTitle__WEBPACK_IMPORTED_MODULE_14__.a,
											{
												driftUser: i ? r : void 0,
												orgName: t,
												backgroundColor: n,
												isOnline: a,
												shouldRenderAgentStatus: o,
											}
										);
									},
								},
								{
									key: 'handleComposeButtonClick',
									value: function() {
										return this.props.actions.goToNewConversation({
											autoFocus: !0,
										});
									},
								},
								{
									key: 'handleListButtonClick',
									value: function() {
										return this.props.actions.goToConversationList();
									},
								},
								{
									key: 'render',
									value: function() {
										var e = this.props,
											t = e.theme,
											n = e.hasWidgetHalfHeight,
											r = e.activeColor,
											a = n ? '#' + t.backgroundColor : '#ffffff',
											o = n ? '#' + t.foregroundColor : '#9A9A9A',
											i = n ? 'rgba(255,255,255,0.2)' : '#eeeeee';
										return React.createElement(
											'div',
											{
												className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(
													{
														'widget-header-mobile': Object(
															utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
														)(),
													},
													t.widgetHalfHeight
														? _style_styl__WEBPACK_IMPORTED_MODULE_25___default
																.a.MessengerHeaderHalfHeight
														: _style_styl__WEBPACK_IMPORTED_MODULE_25___default
																.a.MessengerHeader
												),
												style: { backgroundColor: a, color: o },
											},
											React.createElement(
												'div',
												{ className: 'HEADER-A' },
												[
													'CONVERSATION',
													'NEW_CONVERSATION',
													'NEW_CONVERSATION_AWAY',
													'NEW_CONVERSATION_CAMPAIGN',
												].includes(this.props.currentSidebarView)
													? [
															React.createElement(
																'div',
																{
																	key: 'title',
																	className:
																		_style_styl__WEBPACK_IMPORTED_MODULE_25___default
																			.a.HeaderTitle,
																},
																this.props.organizationName
															),
															(this.props.allowNewConversations ||
																this.props.numConversations > 1) &&
																React.createElement(ConversationListButton, {
																	key: 'list-button',
																	onClick: this.handleListButtonClick,
																}),
													  ]
													: [
															React.createElement(
																'div',
																{
																	key: 'title',
																	className:
																		_style_styl__WEBPACK_IMPORTED_MODULE_25___default
																			.a.HeaderTitle,
																},
																React.createElement(
																	_messages__WEBPACK_IMPORTED_MODULE_17__.a,
																	null
																)
															),
															this.props.allowNewConversations &&
																React.createElement(ComposeButton, {
																	key: 'compose-button',
																	onClick: this.handleComposeButtonClick,
																}),
													  ],
												this.props.allowSidebarClose &&
													React.createElement(CloseButton, {
														onClick: this.props.onCloseButtonClicked,
													})
											),
											'CONVERSATION' === this.props.currentSidebarView &&
												React.createElement(
													'div',
													{
														className: 'HEADER-B',
														style: { borderTopColor: i },
													},
													React.createElement(
														'div',
														null,
														this.getConversationTitle()
													),
													React.createElement(
														'div',
														null,
														React.createElement(
															Widget_components_Rating__WEBPACK_IMPORTED_MODULE_15__.a,
															{
																activeColor: r,
																foregroundColor: '#' + t.foregroundColor,
																hasWidgetHalfHeight: n,
															}
														)
													)
												)
										);
									},
								},
							],
							[
								{
									key: 'initClass',
									value: function() {
										this.propTypes = {
											onCloseButtonClicked: PropTypes.func.isRequired,
											lastDriftUser: PropTypes.object,
											shouldRenderAgentStatus: PropTypes.bool.isRequired,
											theme: PropTypes.shape({
												backgroundColor: PropTypes.string,
												foregroundColor: PropTypes.string,
												textColor: PropTypes.string,
												activeColor: PropTypes.string,
												widgetBackgroundColor: PropTypes.string,
												widgetHalfHeight: PropTypes.bool,
											}),
										};
									},
								},
							]
						),
						ExperimentalHeader
					);
				})(Component);
			ExperimentalHeader.initClass();
			var FloatingHeader = function(e) {
					return React.createElement('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(
							_style_styl__WEBPACK_IMPORTED_MODULE_25___default.a
								.FloatingHeader,
							babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
								{
									hypergrowthTheme: e.isHypergrowthTheme,
									mobile: Object(
										utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
									)(),
								},
								e.continuousBackgroundGradient,
								e.isEmbeddedMessenger &&
									e.isHypergrowthTheme &&
									!Object(
										utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d
									)()
							)
						),
					});
				},
				makeMapStateToProps = function() {
					var e = Object(
							Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.o
						)(),
						t = Object(
							Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.q
						)();
					return function(n, r) {
						var a = Object(
								Widget_selectors_bootstrap__WEBPACK_IMPORTED_MODULE_20__.i
							)(n),
							o = e(n, r),
							i = t(n, r);
						return {
							currentSidebarView: n.UI.currentSidebarView,
							numConversations: Object(
								Widget_selectors_messages__WEBPACK_IMPORTED_MODULE_18__.c
							)(n).size,
							allowNewConversations: Object(
								Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__.c
							)(n),
							allowSidebarClose: Object(
								Widget_modules_Bootstrap_selectors__WEBPACK_IMPORTED_MODULE_21__.d
							)(n),
							organizationName: n.Bootstrap.embedConfiguration.organizationName,
							lastDriftUser: o,
							lastAgentResponseAt: i,
							isOnline: a,
							shouldRenderAgentStatus: !(null != o ? o.bot : void 0) && i > 0,
							isHypergrowthTheme: Object(
								Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__.j
							)(n),
							continuousBackgroundGradient: Object(
								Widget_modules_UI_selectors__WEBPACK_IMPORTED_MODULE_24__.c
							)(n),
						};
					};
				},
				mapDispatchToProps = function(e) {
					return {
						actions: Object(
							redux__WEBPACK_IMPORTED_MODULE_7__.bindActionCreators
						)(
							{
								goToConversationList:
									modules_UI__WEBPACK_IMPORTED_MODULE_19__.goToConversationList,
								goToNewConversation:
									modules_UI__WEBPACK_IMPORTED_MODULE_19__.goToNewConversation,
								fetchAgentStatus:
									_modules_DriftUser__WEBPACK_IMPORTED_MODULE_16__.b,
							},
							e
						),
					};
				};
			__webpack_exports__.a = recompose_compose__WEBPACK_IMPORTED_MODULE_8___default()(
				Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(
					makeMapStateToProps,
					mapDispatchToProps
				),
				Object(Widget_containers_withTheme__WEBPACK_IMPORTED_MODULE_22__.a)([
					'backgroundColor',
					'activeColor',
				]),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default()(function(e) {
					return (
						e.isEmbeddedMessenger &&
						!Object(utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d)() &&
						!e.isHypergrowthTheme
					);
				}, recompose_renderNothing__WEBPACK_IMPORTED_MODULE_9___default.a),
				recompose_branch__WEBPACK_IMPORTED_MODULE_11___default()(function(e) {
					return (
						e.isEmbeddedMessenger &&
						(Object(utils_UserAgentHelpers__WEBPACK_IMPORTED_MODULE_23__.d)() ||
							e.isHypergrowthTheme)
					);
				}, recompose_renderComponent__WEBPACK_IMPORTED_MODULE_10___default()(
					FloatingHeader
				))
			)(ExperimentalHeader);
		}.call(this, __webpack_require__(0)));
	},
	917: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(17),
				u = n(271),
				l = n(99),
				d = n(102),
				p = n(6),
				_ = n(22),
				f = 9e5,
				m = 72e5,
				b = {
					availability: s.PropTypes.oneOf([
						l.b.AVAILABLE,
						l.b.OFFLINE,
						l.b.ON_CALL,
					]),
					lastActivityAt: s.PropTypes.number,
					foregroundColor: s.PropTypes.string,
				};
			function g(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
				return (
					(arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: Date.now()) -
						e <=
					t
				);
			}
			function h(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
				return (
					(arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: Date.now()) -
						e >=
					t
				);
			}
			function v(t) {
				var n = t.lastActivityAt,
					r = t.availability,
					a = t.foregroundColor;
				return r === l.b.OFFLINE || h(n)
					? e.createElement(u.b, { foregroundColor: a })
					: g(n)
					? e.createElement(u.c, { foregroundColor: a })
					: e.createElement(u.a, { time: n, foregroundColor: a });
			}
			function E(t) {
				var n = t.lastActivityAt,
					r = t.availability,
					a = t.foregroundColor;
				return r === l.b.ON_CALL || g(n)
					? e.createElement(u.c, { foregroundColor: a })
					: h(n)
					? e.createElement(u.b, { foregroundColor: a })
					: e.createElement(u.a, { time: n, foregroundColor: a });
			}
			function y(t) {
				var n = t.hasCentralizedRouting,
					r = t.availability,
					o = t.theme,
					s = i()(t, ['hasCentralizedRouting', 'availability', 'theme']);
				if (!r) return e.createElement('div', null);
				var c = o.foregroundColor;
				return n
					? e.createElement(v, a()({}, s, { foregroundColor: c }))
					: e.createElement(E, a()({}, s, { foregroundColor: c }));
			}
			(v.propTypes = b),
				(E.propTypes = b),
				(y.propTypes = a()({}, b, { hasCentralizedRouting: s.PropTypes.bool })),
				(t.a = Object(c.connect)(function(e, t) {
					var n = Object(d.b)(e, t);
					return {
						availability: n.availability,
						lastActivityAt: n.lastActivityAt,
						hasCentralizedRouting: Object(p.B)(e),
						theme: Object(_.n)(e),
					};
				})(y));
		}.call(this, n(0)));
	},
	918: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(134),
				o = n(917),
				i = n(493),
				s = n.n(i);
			var c = function(t) {
				var n = t.driftUser,
					r = t.orgName,
					i = t.backgroundColor,
					c = t.shouldRenderAgentStatus,
					u =
						n &&
						(n.avatarUrl || n.bot) &&
						e.createElement(a.a, { shape: 'circle', user: n, color: i });
				return e.createElement(
					'div',
					{ className: s.a.ConversationTitle },
					u &&
						(n.publicProfileUrl
							? e.createElement(
									'a',
									{ href: n.publicProfileUrl, target: '_blank' },
									u
							  )
							: u),
					e.createElement(
						'div',
						{ className: s.a.ConversationInfo },
						e.createElement(
							'div',
							{ className: s.a.AgentName },
							(function(e, t) {
								if (e) {
									if (e.name) return e.name;
									if (t) return t + ' Team Member';
								}
								return t;
							})(n, r)
						),
						c && n && !n.bot && e.createElement(o.a, { agentId: n.id })
					)
				);
			};
			(c.propTypes = {
				driftUser: r.PropTypes.object,
				orgName: r.PropTypes.string.isRequired,
				backgroundColor: r.PropTypes.string,
				isOnline: r.PropTypes.bool,
				shouldRenderAgentStatus: r.PropTypes.bool,
			}),
				(c.defaultProps = { shouldRenderAgentStatus: !1 }),
				(t.a = c);
		}.call(this, n(0)));
	},
	919: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(47),
				m = n(32),
				b = n(12),
				g = n.n(b),
				h = n(497),
				v = n.n(h),
				E = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.state = { hovered: !1 }),
							(r.handleClick = function() {
								var e = r.props,
									t = e.value,
									n = e.label,
									a = e.onClick;
								a && a({ value: t, label: n });
							}),
							(r.handleMouseEnter = function() {
								r.setState({ hovered: !0 });
							}),
							(r.handleMouseLeave = function() {
								r.setState({ hovered: !1 });
							}),
							(r.defaultStyles = function() {
								var e = r.props,
									t = e.backgroundColor,
									n = e.textColor,
									a = r.state.hovered;
								return {
									color: a ? n : t,
									border: '1px solid ' + t,
									backgroundColor: a ? t : n,
								};
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.label,
										r = t.isEmbeddedMessenger;
									return e.createElement(
										'button',
										{
											className: g()(v.a.Button, { floating: r }),
											style: r ? {} : this.defaultStyles(),
											onClick: this.handleClick,
											onMouseEnter: this.handleMouseEnter,
											onMouseLeave: this.handleMouseLeave,
											tabIndex: '1',
										},
										n
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			t.a = Object(f.a)(['backgroundColor', 'textColor'])(function(t) {
				var n = t.buttons,
					r = t.onClick,
					a = t.backgroundColor,
					o = t.textColor,
					i = t.isEmbeddedMessenger;
				return e.createElement(
					'div',
					{
						className: g()(v.a.ButtonGroup, {
							floating: i,
							mobile: Object(m.d)(),
						}),
					},
					e.createElement(
						'div',
						{ className: v.a.ButtonGroupButtons },
						n.map(function(t) {
							return e.createElement(E, {
								key: t.get('value'),
								value: t.get('value'),
								label: t.get('label'),
								backgroundColor: a,
								textColor: o,
								onClick: r,
								isEmbeddedMessenger: i,
							});
						})
					)
				);
			});
		}.call(this, n(0)));
	},
	92: function(e, t, n) {
		'use strict';
		var r = n(39),
			a = (n(60), n(79), n(215), n(246), n(45)),
			o = n(93),
			i = n(88),
			s = n.n(i),
			c = n(601),
			u = n(50),
			l = n.n(u),
			d = n(1),
			p = (n(143), n(18)),
			_ = n(23),
			f = function(e) {
				var t = e.authorizationHeader,
					n = e.body;
				return d.Observable.ajax({
					url: _.h + '/track',
					method: 'POST',
					crossDomain: !0,
					responseType: 'json',
					headers: Object(p.a)([Object(p.e)(), t]),
					body: l()(n),
				}).catch(function(e) {
					return (
						console.error('Unable to track event', e), d.Observable.empty()
					);
				});
			},
			m = n(317),
			b = n(367),
			g = n(6),
			h = n(16),
			v = n(51),
			E = n(4),
			y = Object(r.combineEpics)(
				function(e, t) {
					return e.ofType(E.c).mergeMap(function() {
						var e = t.getState(),
							n = (function(e) {
								return e.Event.trackQueue;
							})(e);
						return c.Observable.forkJoin
							.apply(
								c.Observable,
								s()(
									n.map(function(t) {
										return f({ body: t, authorizationHeader: Object(g.d)(e) });
									})
								)
							)
							.map(function() {
								return m.b();
							});
					});
				},
				function(e, t) {
					return e
						.ofType(b.b)
						.pluck('payload')
						.mergeMap(function(e) {
							var n = e.event,
								r = e.attributes,
								a = e.context,
								o = t.getState(),
								i = {
									orgId: Object(h.k)(o),
									inboxId: Object(v.d)(o),
									userId: Object(h.h)(o),
									anonymousId: Object(h.a)(o),
									event: n,
									attributes: r,
									context: a,
								};
							return f({ body: i, authorizationHeader: Object(g.d)(o) });
						})
						.map(function() {
							return m.b();
						})
						.catch(function() {
							return m.b();
						});
				}
			),
			O = n(46),
			C = n(113),
			T = Object(r.combineEpics)(
				function(e, t) {
					var n = t.dispatch;
					return e.ofType(a.i).mergeMap(function(t) {
						var r = t.payload;
						return (
							n(Object(C.a)()),
							e
								.ofType(O.c)
								.first()
								.map(function() {
									return o.c(r);
								})
								.takeUntil(e.ofType(O.b))
						);
					});
				},
				function(e, t) {
					var n = t.dispatch;
					return e.ofType(a.j).mergeMap(function(t) {
						var r = t.payload;
						return (
							n(Object(C.a)()),
							e
								.ofType(O.c)
								.first()
								.map(function() {
									return o.d(r);
								})
								.takeUntil(e.ofType(O.b))
						);
					});
				},
				y
			),
			I = n(2),
			M = n.n(I),
			P = E.Ua,
			A = E.Wa,
			S = E.Va,
			D = E.T,
			w = {
				isIdentifying: !1,
				hasIdentified: !1,
				hasPreviouslyIdentified: !1,
				offlineFeedbackIsSubmitting: !1,
				offlineFeedbackSubmitted: !1,
				trackQueue: [],
			},
			k = function() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w;
				switch (
					(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
						.type
				) {
					case a.f:
					case a.c:
						return M()({}, e, { isIdentifying: !0 });
					case a.h:
					case a.e:
					case a.b:
						return M()({}, e, { isIdentifying: !1, hasIdentified: !0 });
					case a.g:
					case a.d:
						return M()({}, e, { isIdentifying: !1, hasIdentified: !1 });
					case P:
						return M()({}, e, { offlineFeedbackIsSubmitting: !0 });
					case A:
						return M()({}, e, {
							offlineFeedbackIsSubmitting: !1,
							offlineFeedbackSubmitted: !0,
						});
					case S:
					case D:
						return M()({}, e, {
							offlineFeedbackIsSubmitting: !1,
							offlineFeedbackSubmitted: !1,
						});
					default:
						return e;
				}
			};
		n.d(t, 'c', function() {
			return T;
		}),
			n.d(t, 'b', function() {
				return k;
			}),
			n.d(t, !1, function() {
				return o.a;
			}),
			n.d(t, 'd', function() {
				return o.e;
			}),
			n.d(t, 'e', function() {
				return o.f;
			}),
			n.d(t, !1, function() {
				return o.g;
			}),
			n.d(t, 'a', function() {
				return a.h;
			});
	},
	920: function(e, t, n) {
		'use strict';
		function r(e) {
			if (!e) return !0;
			var t = new DOMParser().parseFromString(e, 'text/html'),
				n = !(t && t.body && t.body.innerText && t.body.innerText.trim()),
				r = (function(e) {
					return /<img.*?src=['"](.*?)['"]/.test(e);
				})(e);
			return (!n || !r) && n;
		}
		n.d(t, 'a', function() {
			return r;
		});
	},
	921: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(8),
				i = n.n(o),
				s = n(13),
				c = n.n(s),
				u = n(10),
				l = n.n(u),
				d = n(11),
				p = n.n(d),
				_ = n(7),
				f = n.n(_),
				m = n(14),
				b = n.n(m),
				g = n(0),
				h = n(17),
				v = n(27),
				E = n.n(v),
				y = n(56),
				O = n.n(y),
				C = n(198),
				T = n.n(C),
				I = n(21),
				M = n(12),
				P = n.n(M),
				A = n(3),
				S = n(373),
				D = n(35),
				w = n(920),
				k = n(47),
				R = n(199),
				j = n(6),
				N = n(26),
				B = n(197),
				U = n(228),
				L = n(28),
				W = n(316),
				x = n.n(W),
				F = n(137),
				H = n(76),
				K = (function(t) {
					function n() {
						var e, t, r, a;
						l()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = f()(
								this,
								(e = n.__proto__ || c()(n)).call.apply(e, [this].concat(i))
							)),
							(r.markAsRead = function() {
								var e = r.props.message;
								!e.get('local') &&
									e.get('id') &&
									r.props.actions.markAsRead({ messageId: e.get('id') });
							}),
							(a = t),
							f()(r, a)
						);
					}
					return (
						b()(n, t),
						p()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.markAsRead(),
										this.props.hrefs.isEmpty() ||
											this.props.actions.fetchLinksForMessage(
												this.props.message.get('id')
											);
								},
							},
							{
								key: 'componentDidUpdate',
								value: function(e) {
									e.message.get('local') &&
										!this.props.message.get('local') &&
										this.markAsRead(),
										Object(A.is)(e.hrefs, this.props.hrefs) ||
											this.props.actions.fetchLinksForMessage(
												this.props.message.get('id')
											);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.message,
										r = t.color,
										a = t.position,
										o = t.backgroundColor,
										s = t.isEmbeddedMessenger,
										c = t.renderButtons,
										u = t.cards,
										l = n.get('body');
									if (Object(S.a)(l) && Object(w.a)(l)) return null;
									var d = s && c && c(n);
									return e.createElement(
										R.a,
										{
											backgroundColor: o,
											color: r,
											position: a,
											isStartConversationPrompt: this.props
												.isStartConversationPrompt,
											createdAt: n.get('createdAt'),
											isEmbeddedMessenger: s,
											className: P()(i()({}, x.a.fullWidth, !!d)),
										},
										Object(S.a)(l)
											? e.createElement('div', {
													dangerouslySetInnerHTML: { __html: l },
											  })
											: l,
										s &&
											Object(D.a)(u) &&
											u.length > 0 &&
											e.createElement(
												'div',
												{ className: 'inline-cards-section' },
												u.map(function(t) {
													return e.createElement(
														'div',
														{ className: 'inline-card-container' },
														t
													);
												})
											),
										d &&
											e.createElement(
												'div',
												{ className: 'inline-response-buttons-section' },
												d
											)
									);
								},
							},
						]),
						n
					);
				})(g.Component);
			K.propTypes = a()({}, R.a.propTypes, {
				message: g.PropTypes.instanceOf(A.Map).isRequired,
				actions: g.PropTypes.shape({ markAsRead: g.PropTypes.func.isRequired })
					.isRequired,
			});
			var q = E()(
				Object(k.a)(['backgroundColor', 'textColor']),
				T()('textColor', 'color')
			);
			t.a = E()(
				Object(h.connect)(
					function() {
						return function(e, t) {
							var n = t.message,
								r = Object(j.j)(e),
								a =
									n.get('authorId') === r.id && n.get('authorType') === r.type;
							return {
								message: n,
								hrefs: Object(B.getHrefsByMessageId)(e).get(
									n.get('id'),
									Object(A.List)()
								),
								isFromViewer: a,
								position: a ? 'right' : 'left',
								isEmbeddedMessenger: Object(L.g)(e),
								isHeldForDelay: Object(H.f)(e, n.get('id')),
							};
						};
					},
					function(e) {
						return {
							actions: Object(I.bindActionCreators)(
								{
									markAsRead: N.q,
									fetchLinksForMessage: U.fetchLinksForMessage,
								},
								e
							),
						};
					}
				),
				O()(function(e) {
					return e.isHeldForDelay;
				}, F.renderNothing),
				O()(function(e) {
					return e.isFromViewer;
				}, q)
			)(K);
		}.call(this, n(0)));
	},
	922: function(e, t, n) {
		'use strict';
		var r = n(8),
			a = n.n(r),
			o = n(0),
			i = n.n(o),
			s = n(15),
			c = n(27),
			u = n.n(c),
			l = n(254),
			d = n.n(l),
			p = n(94),
			_ = n.n(p),
			f = n(17),
			m = n(12),
			b = n.n(m),
			g = n(21),
			h = n(26),
			v = n(41),
			E = n(498),
			y = n.n(E),
			O = function() {
				return i.a.createElement(
					'svg',
					{
						className: y.a.DottedLine,
						x: '0px',
						y: '0px',
						width: '400px',
						height: '10',
						viewBox: '0 0 400 1',
					},
					i.a.createElement('line', {
						x1: '0',
						y1: '0.5',
						x2: '400',
						y2: '0.5',
					})
				);
			};
		t.a = u()(
			_()(function(e) {
				var t = e.messages,
					n = e.isEmbeddedMessenger;
				return { message: t.first(), isEmbeddedMessenger: n };
			}),
			Object(f.connect)(null, function(e) {
				return Object(g.bindActionCreators)({ markAsRead: h.q }, e);
			}),
			d()({
				componentDidMount: function() {
					var e = this.props.message;
					!e.get('local') &&
						e.get('id') &&
						this.props.markAsRead({ messageId: e.get('id') });
				},
			})
		)(function(e) {
			var t = e.isEmbeddedMessenger,
				n = e.continuousBackgroundGradient;
			return i.a.createElement(
				'div',
				{ className: b()(y.a.SchedulingFlowHeading, { floating: t }) },
				i.a.createElement(O, null),
				i.a.createElement(
					'p',
					{ className: b()(y.a.SchedulingFlowHeadingCopy, a()({}, n, t)) },
					i.a.createElement(s.b, v.a.scheduleAMeeting)
				)
			);
		});
	},
	923: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(272),
			b = n.n(m),
			g = { 1: '😠', 2: '🙁', 3: '😐', 4: '😊', 5: '😍' },
			h = (function(e) {
				function t(e) {
					return i()(this, t), l()(this, (t.__proto__ || a()(t)).call(this, e));
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.message,
									n = e.theme,
									r = t.getIn(['attributes', 'conversationRating']).toJS(),
									a = r.ratingValue,
									o = r.ratingText,
									i = t
										.getIn(['attributes', 'conversationRating', 'ratingPrompt'])
										.toJS(),
									s = i.ratingPromptMessage,
									c = i.ratingAcknowledgement;
								return f.a.createElement(
									'div',
									{ className: b.a.ConversationRatingCard },
									f.a.createElement(
										'div',
										{
											className: b.a.ConversationRatingCardHeader,
											style: {
												backgroundColor: '#' + n.backgroundColor,
												color: '#' + n.textColor,
											},
										},
										s
									),
									f.a.createElement(
										'div',
										{ className: b.a.ConversationRatingCardContent },
										f.a.createElement(
											'div',
											{ className: b.a.ConversationRatingCardEmoji },
											g[a]
										),
										o &&
											f.a.createElement(
												'div',
												{ className: b.a.ConversationRatingCardText },
												o
											)
									),
									f.a.createElement(
										'div',
										{ className: b.a.ConversationRatingCardFooter },
										c
									)
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		t.a = h;
	},
	924: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(17),
				m = n(27),
				b = n.n(m),
				g = n(137),
				h = n(450),
				v = n(923),
				E = n(22),
				y = (function(t) {
					function n(e) {
						return (
							i()(this, n), l()(this, (n.__proto__ || a()(n)).call(this, e))
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.message,
										r = t.theme;
									return e.createElement(v.a, { message: n, theme: r });
								},
							},
						]),
						n
					);
				})(_.Component),
				O = b()(
					Object(f.connect)(function(e, t) {
						return {
							shouldRenderConversationRatingCard: Object(h.b)(e, t),
							theme: Object(E.n)(e),
						};
					}, null),
					Object(g.branch)(function(e) {
						return !e.shouldRenderConversationRatingCard;
					}, g.renderNothing)
				);
			t.a = O(y);
		}.call(this, n(0)));
	},
	925: function(e, t) {
		e.exports =
			'<svg width="54" height="50" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-38.7%" y="-38.2%" width="177.4%" height="176.4%" filterUnits="objectBoundingBox" id="a"><feGaussianBlur stdDeviation="3.984" in="SourceGraphic"></feGaussianBlur></filter></defs><g fill="none" fill-rule="evenodd"><path d="M26.154 3.991h2.36c1.312 0 2.374 1.085 2.374 2.425v5.091H0V6.417C0 5.076 1.067 3.99 2.38 3.99h2.356V1.683c0-.68.543-1.236 1.209-1.236.665 0 1.21.556 1.21 1.236v2.308h16.581V1.683c0-.68.544-1.236 1.21-1.236.664 0 1.209.556 1.209 1.236v2.308zm4.734 11.368v13.938c0 1.34-1.061 2.424-2.373 2.424H2.38C1.067 31.721 0 30.637 0 29.297V11.508h30.865l.023 3.851z" fill="#B4C3D8" filter="url(#a)" transform="translate(11 9)"></path><path d="M41.888 23.59v13.938c0 1.34-1.061 2.424-2.373 2.424H13.38c-1.312 0-2.379-1.084-2.379-2.424V19.74h30.865l.023 3.851z" fill="#FFF"></path><path d="M28.325 31.66l.013-7.318a1 1 0 0 0-1.002-1.001l-1.08.001a1 1 0 0 0-.999.999l-.013 7.317a1 1 0 0 0 1.002 1.002l1.081-.002a1 1 0 0 0 .998-.998zM28.331 35.664l.001-.66a1 1 0 0 0-1.002-1.002l-1.08.002a1 1 0 0 0-.999.998v.66a1 1 0 0 0 1 1.003l1.082-.002a1 1 0 0 0 .998-.999z" fill="#394F5A"></path><path d="M41.888 17.806v2.29H11v-5.092c0-1.34 1.067-2.424 2.379-2.424H39.514c1.312 0 2.374 1.084 2.374 2.424v2.802z" fill="#B5D2E1"></path><path d="M17.042 16.326c-.665 0-1.209-.557-1.209-1.237v-4.853c0-.68.544-1.236 1.21-1.236.664 0 1.209.556 1.209 1.236v4.853c0 .68-.545 1.237-1.21 1.237M35.935 16.326c-.665 0-1.21-.557-1.21-1.237v-4.853c0-.68.545-1.236 1.21-1.236.665 0 1.21.556 1.21 1.236v4.853c0 .68-.545 1.237-1.21 1.237" fill="#FFF"></path><path d="M27 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM53 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="#B5D2E1" stroke-width="1.68" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M43 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M49 31.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" fill="#B5D2E1"></path></g></svg>';
	},
	926: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 24 24"><path d="M22 24H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4V1c0-.55.45-1 1-1s1 .45 1 1v1h8V1c0-.55.45-1 1-1s1 .45 1 1v1h4c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2zM18 4v1c0 .55-.45 1-1 1s-1-.45-1-1V4H8v1c0 .55-.45 1-1 1s-1-.45-1-1V4H2v18h20V4h-4zm-6.4 13.65c-.18.22-.45.34-.73.35h-.02c-.28 0-.54-.1-.73-.3l-2.85-3.03c-.38-.4-.36-1.03.04-1.4.43-.4 1.06-.37 1.44.03l2.08 2.2 4.44-5.15c.36-.42 1-.47 1.4-.1.43.35.48.98.12 1.4l-5.16 6z" class="icon-calendar-check"></path></svg>';
	},
	927: function(e, t) {
		e.exports =
			'<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M1.575 11.4c-.874.872-.88 2.286-.015 3.168l9.67 9.844c.87.886 2.295.9 3.182.028.886-.87.9-2.295.028-3.182l-8.1-8.286 8.085-8.045c.88-.878.88-2.302.002-3.182-.878-.88-2.302-.88-3.182-.002L1.575 11.4z" fill-rule="evenodd"></path></svg>';
	},
	928: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(2),
				i = n.n(o),
				s = n(24),
				c = n.n(s),
				u = n(13),
				l = n.n(u),
				d = n(10),
				p = n.n(d),
				_ = n(11),
				f = n.n(_),
				m = n(7),
				b = n.n(m),
				g = n(14),
				h = n.n(g),
				v = n(0),
				E = n(17),
				y = n(15),
				O = n(12),
				C = n.n(O),
				T = n(40),
				I = n.n(T),
				M = n(3),
				P = n(138),
				A = n.n(P),
				S = n(56),
				D = n.n(S),
				w = n(27),
				k = n.n(w),
				R = n(582),
				j = n.n(R),
				N = n(363),
				B = n.n(N),
				U = n(198),
				L = n.n(U),
				W = n(94),
				x = n.n(W),
				F = n(581),
				H = n.n(F),
				K = n(361),
				q = n.n(K),
				z = n(157),
				G = n.n(z),
				V = n(254),
				Y = n.n(V),
				Z = n(151),
				J = n(28),
				Q = n(31),
				X = n(47),
				$ = n(101),
				ee = n(41),
				te = n(205),
				ne = n(134),
				re = n(208),
				ae = n(927),
				oe = n.n(ae),
				ie = n(926),
				se = n.n(ie),
				ce = n(925),
				ue = n.n(ce),
				le = n(44),
				de = n.n(le),
				pe = function(t) {
					var n = t.timeZone;
					return re.a[n]
						? e.createElement('span', null, re.a[n].label)
						: e.createElement('span', null, n);
				},
				_e = k()(
					H.a,
					G()(function(e) {
						var t = e.value;
						return { value: A()(t) };
					}),
					D()(
						function(e) {
							return e.timeZone;
						},
						G()(function(e) {
							var t = e.value,
								n = e.timeZone;
							return { value: t.tz(n) };
						})
					),
					D()(
						function(e) {
							return e.format;
						},
						G()(function(e) {
							var t = e.value,
								n = e.format;
							return { value: t.format(n) };
						})
					)
				)(function(t) {
					var n = t.value;
					return e.createElement('span', null, n);
				}),
				fe = function(t) {
					var n = t.className,
						r = t.children;
					return e.createElement(
						'div',
						{ className: C()(de.a.Container, n) },
						r
					);
				},
				me = (function(t) {
					function n() {
						return (
							p()(this, n),
							b()(this, (n.__proto__ || l()(n)).apply(this, arguments))
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.props.focusOnMount && this.buttonElement.focus();
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.children,
										a = c()(n, ['children']);
									return e.createElement(
										'button',
										i()({}, a, {
											ref: function(e) {
												t.buttonElement = e;
											},
										}),
										r
									);
								},
							},
						]),
						n
					);
				})(v.Component),
				be = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(
						function(e) {
							return e.isEmbeddedMessenger;
						},
						G()(function() {
							return { activeColor: 'rgba(34,34,34,0.80)' };
						}),
						Object(X.a)(['activeColor'])
					),
					x()(function(e) {
						var t = e.activeColor,
							n = e.style,
							r = void 0 === n ? {} : n,
							a = c()(e, ['activeColor', 'style']);
						return i()({}, a, {
							style: i()({}, r, { color: t, backgroundColor: t }),
						});
					})
				)(function(t) {
					var n = t.className,
						r = t.children,
						a = c()(t, ['className', 'children']);
					return e.createElement(
						'button',
						i()({}, a, {
							className: C()(de.a.BaseButton, n),
							type: 'button',
							tabIndex: '1',
						}),
						e.createElement('span', { className: de.a.BaseButtonLabel }, r)
					);
				}),
				ge = function(t) {
					var n = t.children,
						r = c()(t, ['children']);
					return e.createElement(
						be,
						i()({}, r, { className: de.a.ErrorRetryButton }),
						n
					);
				},
				he = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(function(e) {
						return !e.isEmbeddedMessenger;
					}, k()(
						Object(X.a)(['backgroundColor']),
						L()('backgroundColor', 'color')
					))
				)(Z.a),
				ve = function() {
					return e.createElement(
						'div',
						{ className: de.a.LoadingMessage },
						e.createElement(he, { size: 'large', color: 'rgba(34,34,34,0.80)' })
					);
				},
				Ee = function(t) {
					var n = t.onRetry,
						r = t.errorMessage,
						a = t.agent;
					return e.createElement(
						'div',
						{ className: de.a.ErrorMessage },
						e.createElement(I.a, { src: ue.a }),
						e.createElement(
							'div',
							{ className: de.a.ErrorMessageCopy },
							r
								? e.createElement(
										y.b,
										i()({}, Object(te.d)(r), { values: { name: a.name } })
								  )
								: e.createElement(y.b, ee.a.scheduleAMeetingError)
						),
						e.createElement(
							ge,
							{ onClick: n },
							e.createElement(y.b, ee.a.chooseNewTime)
						)
					);
				},
				ye = function(t) {
					var n = t.children;
					return e.createElement(fe, { className: de.a.OptionLabel }, n);
				},
				Oe = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(
						function(e) {
							return e.isEmbeddedMessenger;
						},
						G()(function() {
							return { activeColor: '#0176FF' };
						}),
						Object(X.a)(['activeColor'])
					),
					x()(function(e) {
						var t = e.activeColor,
							n = e.style,
							r = c()(e, ['activeColor', 'style']);
						return i()({}, r, { style: i()({}, n, { color: t }) });
					})
				)(function(t) {
					var n = t.children,
						r = t.tabIndex,
						a = void 0 === r ? '1' : r,
						o = t.className,
						s = c()(t, ['children', 'tabIndex', 'className']);
					return e.createElement(
						me,
						i()({}, s, {
							type: 'button',
							tabIndex: a,
							className: C()(de.a.LinkButton, o),
						}),
						n
					);
				}),
				Ce = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(
						function(e) {
							return e.isEmbeddedMessenger;
						},
						G()(function() {
							return { color: '#0176FF' };
						}),
						k()(Object(X.a)(['activeColor']), L()('activeColor', 'color'))
					),
					x()(function(e) {
						var t = e.color,
							n = e.style,
							r = void 0 === n ? {} : n,
							a = c()(e, ['color', 'style']);
						return i()({}, a, { style: i()({}, r, { color: t }) });
					})
				)(function(t) {
					return e.createElement(
						me,
						i()({}, t, {
							className: de.a.BackButton,
							type: 'button',
							tabIndex: '1',
							title: 'Back',
						}),
						e.createElement(
							'div',
							null,
							e.createElement(I.a, {
								raw: !0,
								className: de.a.BackButtonIcon,
								src: oe.a,
							})
						)
					);
				}),
				Te = function(t) {
					var n = t.children;
					return e.createElement(
						fe,
						null,
						e.createElement('div', { className: de.a.SectionHeader }, n)
					);
				},
				Ie = function(t) {
					var n = t.children;
					return e.createElement('div', { className: de.a.SectionHeading }, n);
				},
				Me = function(t) {
					var n = t.date,
						r = t.timeZone;
					return e.createElement(
						Ie,
						null,
						e.createElement(_e, { value: n, timeZone: r, format: 'dddd LL' })
					);
				},
				Pe = function(t) {
					var n = t.value,
						r = void 0 === n ? new Date() : n,
						a = t.checked,
						o = void 0 !== a && a,
						s = t.onChange,
						u = t.timeZone,
						l = c()(t, ['value', 'checked', 'onChange', 'timeZone']);
					return e.createElement(
						Se,
						i()({}, l, {
							className: de.a.TimeOption,
							value: r,
							onChange: s,
							checked: o,
						}),
						e.createElement(
							'div',
							{ className: de.a.TimeOptionLabel },
							e.createElement(_e, { value: r, timeZone: u, format: 'LT' })
						)
					);
				},
				Ae = function(t) {
					var n = t.className,
						r = t.value,
						a = t.onChange,
						o = t.tabIndex,
						s = void 0 === o ? '1' : o,
						u = t.children,
						l = c()(t, [
							'className',
							'value',
							'onChange',
							'tabIndex',
							'children',
						]);
					return e.createElement(
						me,
						i()({}, l, {
							tabIndex: s,
							className: C()(de.a.BaseOption, n),
							onClick: function() {
								return a(r);
							},
						}),
						e.createElement('div', { className: de.a.BaseOptionLabel }, u)
					);
				},
				Se = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(
						function(e) {
							return e.isEmbeddedMessenger;
						},
						x()(function(e) {
							var t = e.className,
								n = c()(e, ['className']);
							return i()({}, n, {
								className: C()(de.a.ThemedBaseOption, t, 'floating'),
							});
						}),
						k()(
							Object(X.a)(['activeColor']),
							x()(function(e) {
								var t = e.activeColor,
									n = e.style,
									r = void 0 === n ? {} : n,
									a = c()(e, ['activeColor', 'style']);
								return i()({}, a, { style: i()({}, r, { color: t }) });
							}),
							x()(function(e) {
								var t = e.className,
									n = c()(e, ['className']);
								return i()({}, n, { className: C()(de.a.ThemedBaseOption, t) });
							})
						)
					)
				)(Ae),
				De = function(t) {
					var n = t.value,
						r = t.onChange,
						a = t.selected,
						o = void 0 !== a && a,
						s = t.timeZone,
						u = c()(t, ['value', 'onChange', 'selected', 'timeZone']);
					return e.createElement(
						Se,
						i()({}, u, {
							className: de.a.DateOption,
							value: n,
							onChange: r,
							checked: o,
						}),
						e.createElement(
							'span',
							{ className: de.a.DateOptionWeekday },
							e.createElement(_e, { value: n, timeZone: s, format: 'dddd' })
						),
						e.createElement(
							'span',
							{ className: de.a.DateOptionDate },
							e.createElement(_e, { value: n, timeZone: s, format: 'LL' })
						)
					);
				},
				we = k()(
					q()({ step: 3, data: Object(M.OrderedSet)() }),
					j()('state', 'setState', { value: 0, navigated: !1 }),
					B()({
						onChange: function(e) {
							return function(t) {
								return function() {
									e.setState({ value: e.state.value + t, navigated: !0 });
								};
							};
						},
					}),
					G()(function(e) {
						var t = e.step,
							n = e.data,
							r = e.state,
							a = r.value;
						return {
							focusFirstItem: r.navigated,
							slice: n.slice(a * t, (a + 1) * t),
							showPrev: 0 !== a,
							showNext: a + 1 < Math.ceil(n.size / t),
						};
					}),
					Y()({
						componentWillUpdate: function(e) {
							e.onRequestMoreData &&
								this.props.value < e.value &&
								!e.data.isEmpty() &&
								!e.showNext &&
								e.onRequestMoreData();
						},
					})
				)(function(t) {
					var n = t.slice,
						r = t.showNext,
						a = t.showPrev,
						o = t.onChange,
						i = t.Builder,
						s = t.focusFirstItem;
					return e.createElement(
						'div',
						null,
						e.createElement(
							'div',
							null,
							e.createElement(i, { data: n, focusFirstItem: s })
						),
						e.createElement(
							'div',
							{ className: de.a.PaginationControls },
							a &&
								e.createElement(
									Oe,
									{ 'aria-label': 'previous', tabIndex: '1', onClick: o(-1) },
									e.createElement(y.b, ee.a.prev)
								),
							e.createElement('div', null),
							r &&
								e.createElement(
									Oe,
									{ tabIndex: '1', value: 1, onClick: o(1) },
									e.createElement(y.b, ee.a.next)
								)
						)
					);
				}),
				ke = function(t) {
					var n = t.value,
						r = t.onChange,
						a = t.placeholder;
					return e.createElement(
						'label',
						{ className: de.a.TZSearch },
						e.createElement('input', {
							tabIndex: '1',
							className: de.a.TZSearchInput,
							type: 'text',
							value: n,
							onChange: r,
							placeholder: a,
							autoComplete: 'off',
						})
					);
				},
				Re = (function(t) {
					function n() {
						var e, t, r, a;
						p()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = b()(
								this,
								(e = n.__proto__ || l()(n)).call.apply(e, [this].concat(i))
							)),
							(r.state = { searchValue: '' }),
							(r.handleSearchValueChange = function(e) {
								r.setState({ searchValue: e.target.value });
							}),
							(a = t),
							b()(r, a)
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.onChange,
										r = t.value,
										a = t.intl,
										o = this.state.searchValue,
										i = o.toLowerCase();
									return e.createElement(
										'div',
										{ className: de.a.FilterableTZList },
										e.createElement(ke, {
											value: o,
											onChange: this.handleSearchValueChange,
											placeholder: a.formatMessage(ee.a.searchTimeZones),
										}),
										re.c.map(function(t) {
											var a = t.zones.filter(function(e) {
												return -1 !== e.label.toLowerCase().indexOf(i);
											});
											if (a.length > 0)
												return e.createElement(
													'div',
													{ key: t.name + '-container' },
													e.createElement(
														'div',
														{ className: de.a.TZRegion, key: t.name },
														t.name
													),
													a.map(function(t) {
														return e.createElement(Ue, {
															key: t.value,
															value: t.value,
															label: t.label,
															checked: t.value === r,
															onChange: n,
														});
													})
												);
										})
									);
								},
							},
						]),
						n
					);
				})(v.Component);
			Re.propTypes = {
				value: v.PropTypes.string,
				onChange: v.PropTypes.func,
				intl: y.j.isRequired,
			};
			var je = Object(y.i)(Re),
				Ne = function(t) {
					var n = t.focusOnMount,
						r = t.onClick,
						a = t.timeZone;
					return e.createElement(
						Oe,
						{ focusOnMount: n, onClick: r, style: { textAlign: 'right' } },
						e.createElement(pe, { timeZone: a })
					);
				},
				Be = function(t) {
					var n = t.start,
						r = void 0 === n ? new Date() : n,
						a = t.end,
						o = void 0 === a ? new Date() : a,
						i = t.timeZone,
						s = void 0 === i ? Object(re.b)() : i;
					return e.createElement(
						'div',
						{ className: de.a.AppointmentInfo },
						e.createElement(
							'div',
							null,
							e.createElement(_e, { value: r, timeZone: s, format: 'LT' }),
							'—',
							e.createElement(_e, { value: o, timeZone: s, format: 'LT' })
						),
						e.createElement(
							'div',
							null,
							e.createElement(_e, { value: r, timeZone: s, format: 'dddd, LL' })
						),
						e.createElement('div', null, e.createElement(pe, { timeZone: s }))
					);
				},
				Ue = function(t) {
					var n,
						r = t.value,
						o = t.label,
						i = t.checked,
						s = t.onChange;
					return e.createElement(
						Ae,
						{
							className: C()(
								((n = {}),
								a()(n, de.a.TZOption, !0),
								a()(n, de.a.TZOption__Checked, !!i),
								n)
							),
							value: r,
							checked: i,
							onChange: s,
						},
						o
					);
				},
				Le = function(t) {
					var n = t.agent;
					return e.createElement(
						'div',
						{ className: de.a.AgentInfo },
						e.createElement('div', null, e.createElement(ne.a, { user: n })),
						e.createElement(
							'span',
							{ className: de.a.AgentName },
							n ? n.name : null
						)
					);
				},
				We = Object(y.i)(function(t) {
					var n = t.value,
						r = t.intl;
					return e.createElement('span', null, n && Object(te.b)(n, r));
				}),
				xe = function(t) {
					return e.createElement(
						I.a,
						i()({}, t, {
							raw: !0,
							className: de.a.CalendarCheckIcon,
							src: se.a,
						})
					);
				},
				Fe = k()(
					Object(E.connect)(function(e) {
						return { isEmbeddedMessenger: Object(J.g)(e) };
					}),
					D()(
						function(e) {
							return !!e.isEmbeddedMessenger;
						},
						G()(function() {
							return {
								backgroundColor: '#FAFAFA',
								color: '#000000',
								borderBottom: '1px solid #EEEEEE',
							};
						}),
						k()(
							Object(X.a)(['backgroundColor', 'textColor']),
							L()('textColor', 'color')
						)
					)
				)(function(t) {
					var n = t.slotDuration,
						r = t.color,
						a = t.backgroundColor,
						o = t.borderBottom;
					return e.createElement(
						'div',
						{
							className: de.a.CardHeader,
							style: { backgroundColor: a, color: r, borderBottom: o },
						},
						e.createElement(
							'div',
							{ className: de.a.CardHeaderTitle },
							e.createElement(xe, null),
							e.createElement(y.b, ee.a.scheduleAMeeting)
						),
						e.createElement(We, { value: n })
					);
				}),
				He = (function(t) {
					function n() {
						var e, t, r, a;
						p()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = b()(
								this,
								(e = n.__proto__ || l()(n)).call.apply(e, [this].concat(i))
							)),
							(r.scrollToTop = function() {
								r._nodeRef && (r._nodeRef.scrollTop = 0);
							}),
							(r.handleWheel = function(e) {
								e.stopPropagation();
							}),
							(a = t),
							b()(r, a)
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props.children;
									return e.createElement(
										'div',
										{
											ref: function(e) {
												t._nodeRef = e;
											},
											className: de.a.CardContent,
											onWheel: this.handleWheel,
										},
										n
									);
								},
							},
						]),
						n
					);
				})(v.Component);
			He.propTypes = { children: v.PropTypes.node };
			var Ke = function(t) {
					var n = t.children;
					return e.createElement(
						'div',
						{ className: de.a.SchedulingFlowCard },
						n
					);
				},
				qe = function(t) {
					var n = t.children,
						r = t.onClick;
					return e.createElement(
						be,
						{ className: de.a.ConfirmButton, onClick: r },
						n
					);
				},
				ze = function(t) {
					var n = t.agent,
						r = t.onChange,
						a = t.dates,
						o = void 0 === a ? Object(M.Set)() : a,
						i = t.timeZone,
						s = t.onTimeZoneButtonClick,
						c = t.onRequestMoreAvailability,
						u = t.shouldFocusContent;
					return e.createElement(
						'div',
						null,
						e.createElement(Te, null, e.createElement(Le, { agent: n })),
						e.createElement(
							ye,
							null,
							e.createElement(
								'span',
								null,
								e.createElement(y.b, ee.a.selectADay)
							),
							e.createElement(
								'span',
								null,
								e.createElement(Ne, {
									focusOnMount: u,
									timeZone: i,
									onClick: s,
								})
							)
						),
						e.createElement(we, {
							data: o,
							step: 3,
							onRequestMoreData: c,
							Builder: (function(t) {
								var n = t.timeZone,
									r = t.onChange;
								return function(t) {
									var a = t.data,
										o = t.focusFirstItem;
									return e.createElement(
										'div',
										{ className: de.a.DateOptionsList },
										a.map(function(t, a) {
											return e.createElement(De, {
												focusOnMount: 0 === a && o,
												key: a + '-' + t,
												value: t,
												timeZone: n,
												onChange: r,
											});
										})
									);
								};
							})({ timeZone: i, onChange: r }),
						})
					);
				},
				Ge = function(t) {
					var n = t.date,
						r = void 0 === n ? new Date() : n,
						a = t.times,
						o = void 0 === a ? Object(M.Set)() : a,
						i = t.timeZone,
						s = void 0 === i ? Object(re.b)() : i,
						c = t.onBackButtonClick,
						u = t.onTimeZoneButtonClick,
						l = t.onChange,
						d = t.value;
					return e.createElement(
						'div',
						null,
						e.createElement(
							Te,
							null,
							e.createElement(
								'div',
								{ className: de.a.SectionHeaderMenu },
								e.createElement(Ce, { focusOnMount: !0, onClick: c })
							),
							e.createElement(Me, { date: r, timeZone: s })
						),
						e.createElement(
							ye,
							null,
							e.createElement(
								'span',
								null,
								e.createElement(y.b, ee.a.selectATime)
							),
							e.createElement(
								'span',
								null,
								e.createElement(Ne, { timeZone: s, onClick: u })
							)
						),
						e.createElement(we, {
							data: o.toList(),
							step: 6,
							Builder: (function(t) {
								var n = t.timeZone,
									r = t.value,
									a = t.onChange;
								return function(t) {
									var o = t.data,
										i = t.focusFirstItem;
									return e.createElement(
										'div',
										{ className: de.a.TimeOptionsList },
										o.map(function(t, o) {
											return e.createElement(Pe, {
												focusOnMount: 0 === o && i,
												key: o + '-' + t,
												value: t,
												timeZone: n,
												checked: r === t,
												onChange: a,
											});
										})
									);
								};
							})({ value: d, timeZone: s, onChange: l }),
						})
					);
				},
				Ve = (function(t) {
					function n() {
						return (
							p()(this, n),
							b()(this, (n.__proto__ || l()(n)).apply(this, arguments))
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.value,
										r = void 0 === n ? Object(re.b)() : n,
										a = t.onBackButtonClick,
										o = t.onChange;
									return e.createElement(
										'div',
										null,
										e.createElement(
											Te,
											null,
											e.createElement(
												'div',
												{ className: de.a.SectionHeaderMenu },
												e.createElement(Ce, { focusOnMount: !0, onClick: a })
											),
											e.createElement(
												Ie,
												null,
												e.createElement(y.b, ee.a.timeZone)
											)
										),
										e.createElement(je, { value: r, onChange: o })
									);
								},
							},
						]),
						n
					);
				})(v.Component),
				Ye = (function(t) {
					function n() {
						return (
							p()(this, n),
							b()(this, (n.__proto__ || l()(n)).apply(this, arguments))
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.agent,
										r = t.start,
										a = t.end,
										o = t.timeZone,
										i = t.onBackButtonClick,
										s = t.onSubmit,
										c = t.isPending,
										u = void 0 !== c && c,
										l = t.isSuccess,
										d = void 0 !== l && l,
										p = t.showBranding;
									return e.createElement(
										'div',
										null,
										e.createElement(
											Te,
											null,
											e.createElement(
												'div',
												{ className: de.a.SectionHeaderMenu },
												!d &&
													e.createElement(Ce, {
														focusOnMount: !0,
														onClick: i,
														disabled: u,
													})
											),
											e.createElement(Le, { agent: n })
										),
										e.createElement(
											fe,
											null,
											e.createElement(Be, { start: r, end: a, timeZone: o })
										),
										!d &&
											e.createElement(
												fe,
												null,
												e.createElement(
													qe,
													{ disabled: u, onClick: s },
													e.createElement(y.b, ee.a.schedule)
												)
											),
										d &&
											p &&
											e.createElement(
												fe,
												null,
												e.createElement($.a, {
													className: 'flex-center scheduling-card-context',
													message: ee.a.meetingPoweredBy,
													utmContent: Q.e.SCHEDULING_CARD,
												})
											)
									);
								},
							},
						]),
						n
					);
				})(v.Component),
				Ze = (function(t) {
					function n() {
						var e, t, r, a;
						p()(this, n);
						for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
							i[s] = arguments[s];
						return (
							(t = r = b()(
								this,
								(e = n.__proto__ || l()(n)).call.apply(e, [this].concat(i))
							)),
							(r.state = { hasNavigated: !1 }),
							(a = t),
							b()(r, a)
						);
					}
					return (
						h()(n, t),
						f()(n, [
							{
								key: 'componentDidUpdate',
								value: function(e) {
									e.step !== this.props.step && this._contentRef.scrollToTop();
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function(e) {
									e.step === this.props.step ||
										this.state.hasNavigated ||
										this.setState({ hasNavigated: !0 });
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.agent,
										a = n.step,
										o = n.availableDates,
										i = n.availabilitySlots,
										s = n.slotDuration,
										c = n.selectedDate,
										u = n.selectedSlot,
										l = n.selectedTimeZoneName,
										d = n.showBranding,
										p = n.onDateChange,
										_ = n.onTimeChange,
										f = n.onTimeZoneChange,
										m = n.onBackButtonClick,
										b = n.onTimeZoneButtonClick,
										g = n.onSubmit,
										h = n.onRequestMoreAvailability,
										v = n.submitSuccess,
										E = n.isPending,
										y = n.error,
										O = n.errorMessage,
										C = n.onErrorRetryRequest,
										T = void 0;
									if (E) T = e.createElement(ve, null);
									else if (y)
										T = e.createElement(Ee, {
											agent: r,
											onRetry: C,
											errorMessage: O,
										});
									else
										switch (a) {
											case 'DATE_STEP':
												T = e.createElement(ze, {
													shouldFocusContent: this.state.hasNavigated,
													agent: r,
													onChange: p,
													dates: o,
													timeZone: l,
													onTimeZoneButtonClick: b,
													onRequestMoreAvailability: h,
												});
												break;
											case 'TIME_STEP':
												T = e.createElement(Ge, {
													date: c,
													times: i,
													timeZone: l,
													onChange: _,
													onTimeZoneButtonClick: b,
													onBackButtonClick: m,
												});
												break;
											case 'TZ_STEP':
												T = e.createElement(Ve, {
													value: l,
													onChange: f,
													onBackButtonClick: m,
												});
												break;
											case 'SUBMIT_STEP':
												T = e.createElement(Ye, {
													agent: r,
													start: u,
													end: u + Object(te.f)(s),
													timeZone: l,
													onBackButtonClick: m,
													onSubmit: g,
													submitPending: E,
													isSuccess: v,
													showBranding: d,
												});
												break;
											default:
												throw new Error('Unrecognized step "' + a + '"');
										}
									return e.createElement(
										Ke,
										null,
										e.createElement(Fe, { slotDuration: s }),
										e.createElement(
											He,
											{
												ref: function(e) {
													t._contentRef = e;
												},
											},
											T
										)
									);
								},
							},
						]),
						n
					);
				})(v.Component);
			(Ze.propTypes = {
				agent: v.PropTypes.object,
				step: v.PropTypes.oneOf([
					'DATE_STEP',
					'TIME_STEP',
					'TZ_STEP',
					'SUBMIT_STEP',
				]),
				shouldFocusContent: v.PropTypes.bool,
				availableDates: v.PropTypes.object,
				availabilitySlots: v.PropTypes.object,
				submitPending: v.PropTypes.bool,
				hasSubmitted: v.PropTypes.bool,
				onStepChange: v.PropTypes.func,
				onBackButtonClick: v.PropTypes.func,
				onErrorRetryRequest: v.PropTypes.func,
				onRequestMoreAvailability: v.PropTypes.func,
				onDateChange: v.PropTypes.func,
				onTimeChange: v.PropTypes.func,
				onTimeZoneChange: v.PropTypes.func,
				onSubmit: v.PropTypes.func,
			}),
				(Ze.defaultProps = {
					agent: null,
					availableDates: Object(M.Set)(),
					appointmentSlots: Object(M.Set)(),
					step: 'DATE_STEP',
					submitPending: !1,
					hasSubmitted: !1,
				}),
				(t.a = Ze);
		}.call(this, n(0)));
	},
	929: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(17),
				m = n(21),
				b = n(3),
				g = n(27),
				h = n.n(g),
				v = n(111),
				E = n.n(v),
				y = n(56),
				O = n.n(y),
				C = n(94),
				T = n.n(C),
				I = n(138),
				M = n.n(I),
				P = n(31),
				A = n(53),
				S = n(26),
				D = n(928),
				w = n(96),
				k = n(104),
				R = n(267),
				j = n(208),
				N = function(e) {
					return e.appointment && e.appointment.availabilitySlot
						? 'SUBMIT_STEP'
						: 'DATE_STEP';
				},
				B = (function(t) {
					function n(e) {
						i()(this, n);
						var t = l()(this, (n.__proto__ || a()(n)).call(this, e));
						U.call(t);
						var r =
							(e.appointment && e.appointment.endUserTimeZone) ||
							e.defaultTimeZoneName;
						return (
							(t.state = {
								currentStep: N(e),
								history: Object(b.Stack)(),
								selectedTimeZoneName: r,
								selectedDate: null,
								selectedSlot:
									(e.appointment && e.appointment.availabilitySlot) || null,
								availabilitySlotsByDate: t.computeAvailabilitySlotsByDate(
									e.availabilityInfo.slots,
									r
								),
							}),
							t
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'computeAvailabilitySlotsByDate',
								value: function(e, t) {
									return e.groupBy(function(e) {
										return M.a
											.tz(e, t)
											.startOf('day')
											.valueOf();
									});
								},
							},
							{
								key: 'computeAvailability',
								value: function(e) {
									var t = this;
									this.setState(function(n) {
										return {
											availabilitySlotsByDate: t.computeAvailabilitySlotsByDate(
												e,
												n.selectedTimeZoneName
											),
										};
									});
								},
							},
							{
								key: 'computeSelectedDate',
								value: function(e, t, n) {
									var r = M.a.tz.zone(t).utcOffset(e),
										a = M.a.tz.zone(n).utcOffset(e);
									return M()(e).add(a - r, 'minutes');
								},
							},
							{
								key: 'componentDidMount',
								value: function() {
									this.props.actions.trackImpression({
										view: P.e.SCHEDULING_CARD,
									}),
										this.props.appointment ||
											this.props.actions.fetchAgentAvailability(
												this.props.agentId,
												{ meetingType: this.props.meetingType }
											),
										this.props.actions.markAsRead({
											messageId: this.props.messageId,
										});
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function(e) {
									e.availabilityInfo.slots.equals(
										this.props.availabilityInfo.slots
									) || this.computeAvailability(e.availabilityInfo.slots);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.agent,
										r = t.availabilityInfo,
										a = t.availabilityFetchStatus,
										o = t.scheduleAppointmentFetchStatus,
										i = t.appointment,
										s = t.showBranding,
										c = t.shouldFocusContent,
										u = this.state,
										l = u.currentStep,
										d = u.selectedDate,
										p = u.selectedSlot,
										_ = u.selectedTimeZoneName,
										f = u.availabilitySlotsByDate,
										m = i && i.availabilitySlot,
										g = (i && i.slotDuration) || r.slotDuration,
										h = f.keySeq().toList(),
										v = f.get(d, Object(b.Set)()),
										E = !m && ((f.isEmpty() && a.pending) || o.pending),
										y = !m && (a.error || o.error),
										O = y && o.message;
									return e.createElement(D.a, {
										agent: n,
										step: l,
										shouldFocusContent: c,
										selectedDate: d,
										selectedSlot: p,
										selectedTimeZoneName: _,
										slotDuration: g,
										availableDates: h,
										availabilitySlots: v,
										onDateChange: this.handleDateChange,
										onTimeChange: this.handleTimeChange,
										onTimeZoneChange: this.handleTimeZoneChange,
										onTimeZoneButtonClick: this.handleTimeZoneButtonClick,
										onBackButtonClick: this.handleBackButtonClick,
										onErrorRetryRequest: this.handleErrorRetryRequest,
										onSubmit: this.handleSubmit,
										onRequestMoreAvailability: this
											.handleRequestMoreAvailability,
										isPending: E,
										submitSuccess: m,
										error: y,
										errorMessage: O,
										showBranding: s,
									});
								},
							},
						]),
						n
					);
				})(_.Component);
			(B.propTypes = {
				agentId: _.PropTypes.number,
				bookingAgentId: _.PropTypes.number,
				meetingType: _.PropTypes.string,
				meetingSource: _.PropTypes.string,
				messageId: _.PropTypes.number,
				conversationId: _.PropTypes.number,
				showBranding: _.PropTypes.bool,
				actions: _.PropTypes.object,
				agent: _.PropTypes.object,
				appointment: _.PropTypes.object,
				availabilityInfo: _.PropTypes.object,
				defaultTimeZoneName: _.PropTypes.string,
				availabilityFetchStatus: _.PropTypes.object,
				scheduleAppointmentFetchStatus: _.PropTypes.object,
			}),
				(B.defaultProps = {
					availabilityInfo: new k.a(),
					defaultTimeZoneName: Object(j.b)(),
				});
			var U = function() {
					var e = this;
					(this.handleTimeZoneChange = function(t) {
						var n = e.computeAvailabilitySlotsByDate(
							e.props.availabilityInfo.slots,
							t
						);
						e.setState(function(r) {
							var a = e.computeSelectedDate(
									r.selectedDate,
									r.selectedTimeZoneName,
									t
								),
								o = n.get(a, Object(b.Set)());
							return {
								selectedTimeZoneName: t,
								availabilitySlotsByDate: n,
								selectedDate: o.isEmpty() ? null : a,
								currentStep: o.isEmpty() ? 'DATE_STEP' : r.history.peek(),
								history: r.history.pop(),
							};
						});
					}),
						(this.handleTimeChange = function(t) {
							var n = parseInt(t, 10);
							e.setState(function(e) {
								return {
									selectedSlot: n,
									currentStep: 'SUBMIT_STEP',
									history: e.history.push(e.currentStep),
								};
							});
						}),
						(this.handleDateChange = function(t) {
							var n = parseInt(t, 10);
							e.setState(function(e) {
								return {
									selectedDate: n,
									currentStep: 'TIME_STEP',
									history: e.history.push(e.currentStep),
								};
							});
						}),
						(this.handleSubmit = function() {
							e.props.actions.scheduleAppointment({
								conversationId: e.props.conversationId,
								agentId: e.props.agentId,
								bookingAgentId: e.props.bookingAgentId,
								availabilitySlot: e.state.selectedSlot,
								slotDuration: e.props.availabilityInfo.slotDuration,
								agentTimeZone: e.props.availabilityInfo.agentTimeZone,
								endUserTimeZone: e.state.selectedTimeZoneName,
								meetingType: e.props.meetingType,
								meetingSource: e.props.meetingSource,
							});
						}),
						(this.handleTimeZoneButtonClick = function() {
							e.setState(function(e) {
								return {
									currentStep: 'TZ_STEP',
									history: e.history.push(e.currentStep),
								};
							});
						}),
						(this.handleBackButtonClick = function() {
							e.setState(function(e) {
								return {
									currentStep: e.history.peek(),
									history: e.history.pop(),
								};
							});
						}),
						(this.handleErrorRetryRequest = function() {
							e.props.availabilityFetchStatus.error
								? e.props.actions.fetchAgentAvailability(e.props.agentId, {
										meetingType: e.props.meetingType,
								  })
								: e.props.scheduleAppointmentFetchStatus.error &&
								  (e.props.actions.scheduleAppointmentReset({
										agentId: e.props.agentId,
								  }),
								  e.setState(function(e) {
										return {
											currentStep: 'DATE_STEP',
											history: e.history.push(e.currentStep),
										};
								  }));
						}),
						(this.handleRequestMoreAvailability = function() {
							var t = e.props,
								n = t.availabilityFetchStatus,
								r = t.meetingType,
								a = t.agentId,
								o = t.availabilityInfo;
							n.pending ||
								e.props.actions.fetchAgentAvailability(a, {
									meetingType: r,
									start: o.nextRequestStartFrom,
								});
						});
				},
				L = h()(
					Object(f.connect)(function() {
						var e = Object(R.f)(),
							t = Object(R.a)(),
							n = Object(R.b)(),
							r = Object(R.e)(),
							a = Object(R.d)();
						return function(o, i) {
							return {
								shouldRenderSchedulingCard: e(o, i),
								agentId: t(o, i),
								bookingAgentId: n(o, i),
								meetingType: r(o, i),
								meetingSource: a(o, i),
							};
						};
					}),
					O()(
						function(e) {
							return !e.shouldRenderSchedulingCard;
						},
						E.a,
						Object(f.connect)(R.c, function(e) {
							return {
								actions: Object(m.bindActionCreators)(
									{
										markAsRead: S.q,
										fetchAgentAvailability: w.a,
										scheduleAppointment: w.d,
										trackImpression: A.c,
										scheduleAppointmentReset: w.f,
									},
									e
								),
							};
						})
					),
					T()(function(e) {
						return e;
					})
				);
			t.a = L(B);
		}.call(this, n(0)));
	},
	93: function(e, t, n) {
		'use strict';
		n.d(t, 'c', function() {
			return _;
		}),
			n.d(t, 'd', function() {
				return f;
			}),
			n.d(t, 'e', function() {
				return m;
			}),
			n.d(t, 'f', function() {
				return b;
			}),
			n.d(t, 'b', function() {
				return v;
			}),
			n.d(t, 'g', function() {
				return E;
			}),
			n.d(t, 'a', function() {
				return y;
			}),
			n.d(t, 'i', function() {
				return O;
			}),
			n.d(t, 'h', function() {
				return C;
			});
		var r = n(64),
			a = n.n(r),
			o = n(2),
			i = n.n(o),
			s = n(50),
			c = n.n(s),
			u = n(5),
			l = n(45),
			d = n(18),
			p = n(23),
			_ = function(e) {
				var t = e.orgId,
					n = e.userId,
					r = e.email,
					a = e.attributes,
					o = void 0 === a ? {} : a,
					s = e.options,
					u = void 0 === s ? {} : s,
					_ = e.context,
					f = void 0 === _ ? {} : _,
					m = Object(d.b)(p.h + '/identify', {
						method: 'post',
						headers: Object(d.e)(),
						body: c()({
							orgId: t,
							userId: n,
							attributes: i()({}, o, { email: r }),
							options: u,
							context: f,
						}),
					});
				return { types: [l.c, l.e, l.d], promise: m };
			},
			f = function(e) {
				var t = e.orgId,
					n = e.anonymousId,
					r = e.email,
					o = e.attributes,
					s = void 0 === o ? {} : o,
					u = e.options,
					_ = void 0 === u ? {} : u,
					f = e.context,
					m = void 0 === f ? {} : f,
					b = Object(d.b)(p.h + '/identify', {
						method: 'post',
						headers: Object(d.e)(),
						body: c()({
							orgId: t,
							anonymousId: n,
							attributes: i()({}, s, { email: r }),
							options: _,
							context: m,
						}),
					}).then(function(e) {
						return a.a.resolve(e);
					});
				return {
					types: [l.f, l.h, l.g],
					promise: b,
					metadata: { orgId: t, anonymousId: n, email: r },
				};
			},
			m = function(e, t, n) {
				var r =
						arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					a =
						arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
					o =
						arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
				return function(i) {
					return i(
						g({
							orgId: e,
							userId: t,
							email: n,
							attributes: r,
							options: a,
							context: o,
						})
					);
				};
			},
			b = function(e, t, n) {
				var r =
						arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					a =
						arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
					o =
						arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
				return function(i) {
					return i(
						h({
							orgId: e,
							anonymousId: t,
							email: n,
							attributes: r,
							options: a,
							context: o,
						})
					);
				};
			},
			g = Object(u.b)(l.i),
			h = Object(u.b)(l.j),
			v = Object(u.b)(l.b),
			E = Object(u.b)(l.h),
			y = Object(u.b)(l.a),
			O = Object(u.b)(l.l),
			C = Object(u.b)(l.k);
	},
	930: function(e, t, n) {
		e.exports = { LinkCard: 'BZrglS3c9vP7JRKEo7Cpe' };
	},
	931: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(3),
				m = n(12),
				b = n.n(m),
				g = n(27),
				h = n.n(g),
				v = n(47),
				E = n(144),
				y = n.n(E),
				O = n(930),
				C = n.n(O),
				T = ['GIPHY'],
				I = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.state = { expanded: !1, hideThumbnail: !1 }),
							(r.handleExpandClick = function(e) {
								e.preventDefault(),
									r.setState({ expanded: !0 }),
									r.titleElement.focus();
							}),
							(r.handleImageError = function() {
								r.setState({ hideThumbnail: !0 });
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'renderBody',
								value: function() {
									var t = this.props.card,
										n = this.state.hideThumbnail,
										r = t.data.getPrimaryRel();
									if ('player' === r)
										return e.createElement('div', {
											style: { overflow: 'hidden' },
											dangerouslySetInnerHTML: { __html: t.data.html },
										});
									if ('summary' === r) {
										var a = t.data.links
											.get('thumbnail', Object(f.List)())
											.first();
										if (a && !n) {
											var o =
												a.getIn(['media', 'width']) /
													a.getIn(['media', 'height']) >
												1.05
													? 'thumbnail-landscape'
													: 'thumbnail-square';
											return e.createElement(
												'div',
												{ className: 'flex-center ' + o },
												e.createElement(
													'a',
													{ tabIndex: '1', href: t.data.url, target: '_blank' },
													e.createElement('img', {
														src: a.get('href'),
														onError: this.handleImageError,
													})
												)
											);
										}
									}
								},
							},
							{
								key: 'renderDescription',
								value: function() {
									var t = this.props.card.data.meta.description,
										n = t.length > 200;
									return this.state.expanded || !n
										? e.createElement(
												y.a,
												{
													properties: {
														target: '_blank',
														rel: 'noopener noreferrer nofollower',
													},
												},
												t
										  )
										: e.createElement(
												'span',
												null,
												t.substring(0, 200),
												'... ',
												e.createElement(
													'button',
													{ tabIndex: '1', onClick: this.handleExpandClick },
													'read more'
												)
										  );
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.props,
										r = n.card,
										a = n.activeColor,
										o = r.data.getPrimaryRel(),
										i = r.data.links
											.get('icon', Object(f.List)())
											.filter(function(e) {
												return e.getIn(['media', 'width'], 0) >= 16;
											})
											.sortBy(function(e) {
												return e.getIn(['media', 'width'], 0);
											})
											.first();
									return e.createElement(
										'div',
										{ className: b()(C.a.LinkCard, o) },
										this.renderBody(),
										!T.includes(r.data.meta.site) &&
											e.createElement(
												'div',
												{ className: 'info' },
												e.createElement(
													'div',
													{ className: 'title', style: { color: a } },
													e.createElement(
														'a',
														{
															ref: function(e) {
																t.titleElement = e;
															},
															tabIndex: '1',
															href: r.data.url,
															target: '_blank',
														},
														r.data.meta.title
													)
												),
												r.data.meta.description &&
													e.createElement(
														'div',
														{ className: 'description' },
														this.renderDescription()
													),
												r.data.meta.site &&
													e.createElement(
														'div',
														{ className: 'site' },
														i &&
															e.createElement('div', {
																style: {
																	backgroundImage: 'url(' + i.get('href') + ')',
																	backgroundSize: 'contain',
																	backgroundRepeat: 'none',
																	width: '16px',
																	height: '16px',
																	marginRight: '5px',
																},
															}),
														r.data.meta.site
													)
											)
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(I.propTypes = {
				card: _.PropTypes.object.isRequired,
				activeColor: _.PropTypes.string,
			}),
				(t.a = h()(Object(v.a)(['activeColor']))(I));
		}.call(this, n(0)));
	},
	932: function(e, t, n) {
		e.exports = { RotatingAvatar: '_2Vlp7p2d9AyXpeqr17k0LG' };
	},
	933: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(3),
			b = n(134),
			g = n(932),
			h = n.n(g),
			v = (function(e) {
				function t() {
					var e, n, r, o;
					i()(this, t);
					for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
						c[u] = arguments[u];
					return (
						(n = r = l()(
							this,
							(e = t.__proto__ || a()(t)).call.apply(e, [this].concat(c))
						)),
						(r.state = { tick: 0 }),
						(r.handleTick = function() {
							r.setState(function(e) {
								return { tick: e.tick + 1 };
							});
						}),
						(o = n),
						l()(r, o)
					);
				}
				return (
					p()(t, e),
					c()(t, [
						{
							key: 'componentDidMount',
							value: function() {
								window &&
									(this.intervalId = window.setInterval(
										this.handleTick,
										this.props.delay
									));
							},
						},
						{
							key: 'componentWillUnmount',
							value: function() {
								window && window.clearInterval(this.intervalId);
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this.props.users,
									t = e.get(this.state.tick % e.size);
								return f.a.createElement(
									'div',
									{ className: h.a.RotatingAvatar },
									f.a.createElement(b.a, {
										user: m.Map.isMap(t) ? t.toObject() : t,
									})
								);
							},
						},
					]),
					t
				);
			})(_.Component);
		(v.propTypes = { users: _.PropTypes.object, delay: _.PropTypes.number }),
			(v.defaultProps = { users: Object(m.List)(), delay: 2e3 }),
			(t.a = v);
	},
	934: function(e, t, n) {
		'use strict';
		var r = n(24),
			a = n.n(r),
			o = n(2),
			i = n.n(o),
			s = n(21),
			c = n(452),
			u = n(15),
			l = n(230),
			d = n(27),
			p = n.n(d),
			_ = n(94),
			f = n.n(_),
			m = n(362),
			b = n.n(m),
			g = n(41),
			h = n(47),
			v = n(427),
			E = n(92),
			y = n(26),
			O = n(57),
			C = n(6);
		var T = p()(
			u.i,
			f()(function(e) {
				var t = e.intl,
					n = a()(e, ['intl']);
				return i()({}, n, {
					requiredFieldErrorCopy: t.formatMessage(g.a.requiredField),
					invalidEmailErrorCopy: t.formatMessage(g.a.invalidEmail),
				});
			})
		);
		var I = Object(c.reduxForm)(
			{
				form: 'identifyLead',
				fields: ['email'],
				validate: function(e, t) {
					return {
						email: (function(e, t) {
							return e
								? Object(l.isEmail)(e)
									? void 0
									: t.invalidEmailErrorCopy
								: t.requiredFieldErrorCopy;
						})(e.email, t),
					};
				},
			},
			function(e) {
				return {
					anonymousId: e.Bootstrap.anonymousId,
					orgId: e.Bootstrap.orgId,
					integrations: e.Integration,
					messageContext: Object(C.u)(e),
				};
			},
			function(e) {
				return Object(s.bindActionCreators)(
					{ identifyLead: E.e, requestCreateConversationEvent: y.A },
					e
				);
			},
			function(e, t, n) {
				var r = e.anonymousId,
					a = e.orgId,
					o = e.integrations,
					s = e.messageContext,
					c = n.conversationId,
					u = t.identifyLead,
					l = t.requestCreateConversationEvent;
				return i()({}, n, e, t, {
					onSubmit: function(e) {
						u(a, r, e.email),
							l({
								type: O.c,
								conversationId: c,
								conversationEventExtra: {
									email: e.email,
									leadCapture: { email: e.email, integrations: o, context: s },
								},
							});
					},
				});
			}
		);
		t.a = p()(
			Object(h.a)(['activeColor', 'backgroundColor', 'foregroundColor']),
			b()({ foregroundColor: 'color' }),
			T,
			I
		)(v.a);
	},
	936: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(17),
				u = n(27),
				l = n.n(u),
				d = n(362),
				p = n.n(d),
				_ = n(602),
				f = n(51),
				m = n(47),
				b = function(e) {
					return { name: e, type: 'LEAD', socialProfile: {} };
				},
				g = function(t) {
					var n = t.backgroundColor,
						r = t.color,
						a = t.emailCaptureMessage,
						o = t.hasIdentified,
						s = t.sender,
						c = t.defaultSender,
						u = t.createdAt,
						l = t.conversationId,
						d = i()(t, [
							'backgroundColor',
							'color',
							'emailCaptureMessage',
							'hasIdentified',
							'sender',
							'defaultSender',
							'createdAt',
							'conversationId',
						]);
					return e.createElement(
						'div',
						d,
						e.createElement(_.a, {
							sender: s || c,
							emailCaptureMessage: a,
							createdAt: u,
						}),
						e.createElement(_.b, {
							backgroundColor: n,
							color: r,
							hasIdentified: o,
							conversationId: l,
						})
					);
				};
			(g.propTypes = a()(
				{
					backgroundColor: s.PropTypes.string.isRequired,
					color: s.PropTypes.string.isRequired,
					emailCaptureMessage: s.PropTypes.string,
					hasIdentified: s.PropTypes.bool.isRequired,
					sender: s.PropTypes.object.isRequired,
					createdAt: s.PropTypes.number.isRequired,
					conversationId: s.PropTypes.any.isRequired,
				},
				'sender',
				s.PropTypes.object
			)),
				(t.a = l()(
					Object(m.a)(['activeColor', 'textColor']),
					p()({ activeColor: 'backgroundColor', textColor: 'color' }),
					Object(c.connect)(
						function(e) {
							var t = e.Bootstrap.embedConfiguration,
								n = t.theme,
								r = t.organizationName;
							return {
								emailCaptureMessage: n.emailCaptureMessage || void 0,
								hasIdentified: e.Event.hasIdentified,
								defaultSender: Object(f.g)(e) || b(r),
							};
						},
						function() {
							return {};
						}
					)
				)(g));
		}.call(this, n(0)));
	},
	937: function(e, t, n) {
		e.exports = { AttachmentUploadProgress: '_33TDt3NvX83jBkNZLft_M6' };
	},
	939: function(e, t, n) {
		e.exports = { SendButton: 'qrX9HNxW57u0nYVlv67Fb' };
	},
	940: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(40),
				m = n.n(f),
				b = n(15),
				g = n(160),
				h = n(258),
				v = n(939),
				E = n.n(v),
				y = n(584),
				O = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.state = { hover: !1 }),
							(r.handleMouseEnter = function() {
								r.setState({ hover: !0 });
							}),
							(r.handleMouseLeave = function() {
								r.setState({ hover: !1 });
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.isAway,
										r = t.onClick;
									return e.createElement(
										'button',
										{
											className: E.a.SendButton,
											style: { color: this.color },
											onClick: r,
											onMouseEnter: this.handleMouseEnter,
											onMouseLeave: this.handleMouseLeave,
											tabIndex: '1000',
										},
										e.createElement(m.a, { className: 'flex', src: y }),
										e.createElement(
											'span',
											null,
											n
												? e.createElement(b.b, h.b.composerLeaveMessage)
												: e.createElement(b.b, h.b.composerSendMessage)
										)
									);
								},
							},
							{
								key: 'color',
								get: function() {
									var e = this.props.color;
									if (e) return this.state.hover ? Object(g.a)(e, 0.2) : e;
								},
							},
						]),
						n
					);
				})(_.Component);
			(O.propTypes = {
				color: _.PropTypes.string.isRequired,
				isAway: _.PropTypes.bool,
				onClick: _.PropTypes.func,
			}),
				(O.defaultProps = { isAway: !1 }),
				(t.a = O);
		}.call(this, n(0)));
	},
	941: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(17),
				m = n(21),
				b = n(12),
				g = n.n(b),
				h = n(15),
				v = n(151),
				E = n(74),
				y = n(6),
				O = n(41),
				C = function(t) {
					var n = t.className,
						r = t.style,
						a = t.children;
					return e.createElement(
						'div',
						{ className: g()(n, 'flex'), style: r },
						a
					);
				},
				T = function(t) {
					var n = t.className,
						r = t.style;
					return e.createElement(
						C,
						{ className: n, style: r },
						e.createElement(h.b, O.a.connected)
					);
				},
				I = function(t) {
					var n = t.className,
						r = t.style,
						a = t.dotSize;
					return e.createElement(
						C,
						{ className: n, style: r },
						e.createElement(h.b, O.a.connecting),
						e.createElement(v.a, {
							size: a,
							color: '#ccc',
							style: { marginLeft: '3px' },
						})
					);
				},
				M = function(t) {
					var n = t.className,
						r = t.style,
						a = t.onRetryClick;
					return e.createElement(
						C,
						{ className: n, style: r },
						e.createElement(h.b, O.a.connectionFailed),
						e.createElement(
							'a',
							{ style: { marginLeft: '4px' }, onClick: a },
							e.createElement(h.b, O.a.connectionRetry)
						)
					);
				},
				P = (function(t) {
					function n() {
						var e, t, r, o;
						i()(this, n);
						for (var s = arguments.length, c = Array(s), u = 0; u < s; u++)
							c[u] = arguments[u];
						return (
							(t = r = l()(
								this,
								(e = n.__proto__ || a()(n)).call.apply(e, [this].concat(c))
							)),
							(r.handleRetryClick = function() {
								r.props.actions.bootstrapEndUser();
							}),
							(o = t),
							l()(r, o)
						);
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.className,
										r = t.style,
										a = t.status,
										o = t.dotSize;
									return 'success' === a
										? e.createElement(T, { className: n, style: r })
										: 'pending' === a
										? e.createElement(I, { className: n, style: r, dotSize: o })
										: e.createElement(M, {
												className: n,
												style: r,
												onRetryClick: this.handleRetryClick,
										  });
								},
							},
						]),
						n
					);
				})(_.Component);
			(P.propTypes = {
				className: _.PropTypes.string,
				style: _.PropTypes.object,
				status: _.PropTypes.oneOf(['pending', 'failure', 'success']).isRequired,
				dotSize: _.PropTypes.oneOf(['extra-small', 'small', 'medium']),
				actions: _.PropTypes.shape({
					bootstrapEndUser: _.PropTypes.func.isRequired,
				}),
			}),
				(P.defaultProps = { dotSize: 'extra-small' });
			t.a = Object(f.connect)(
				function(e) {
					return { status: Object(y.i)(e) };
				},
				function(e) {
					return {
						actions: Object(m.bindActionCreators)({ bootstrapEndUser: E.a }, e),
					};
				}
			)(P);
		}.call(this, n(0)));
	},
	942: function(e, t, n) {
		e.exports = { EmojiPicker: '_6UgR56zBr73EKEfK2r-A9' };
	},
	943: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return O;
		});
		var r = n(2),
			a = n.n(r),
			o = n(64),
			i = n.n(o),
			s = n(169),
			c = n.n(s),
			u = n(13),
			l = n.n(u),
			d = n(10),
			p = n.n(d),
			_ = n(11),
			f = n.n(_),
			m = n(7),
			b = n.n(m),
			g = n(14),
			h = n.n(g),
			v = n(0),
			E = n.n(v),
			y = (function(e) {
				function t() {
					p()(this, t);
					var e = b()(this, (t.__proto__ || l()(t)).apply(this, arguments));
					return (e.state = { isLoaded: !1 }), e;
				}
				return (
					h()(t, e),
					f()(t, [
						{
							key: 'componentDidMount',
							value: function() {
								(this._isMounted = !0), this.load();
							},
						},
						{
							key: 'componentDidUpdate',
							value: function(e) {
								if (this.props.modules === e.modules) return null;
								this.load();
							},
						},
						{
							key: 'componentWillUnmount',
							value: function() {
								this._isMounted = !1;
							},
						},
						{
							key: 'load',
							value: function() {
								var e = this;
								this.setState({ isLoaded: !1 });
								var t = this.props.modules,
									n = c()(t);
								i.a
									.all(
										n.map(function(e) {
											return t[e]();
										})
									)
									.then(function(e) {
										return n.reduce(function(t, n, r) {
											return (t[n] = e[r]), t;
										}, {});
									})
									.then(function(t) {
										if (!e._isMounted) return null;
										e.setState({ modules: t, isLoaded: !0 });
									});
							},
						},
						{
							key: 'render',
							value: function() {
								return this.state.isLoaded
									? E.a.Children.only(this.props.children(this.state.modules))
									: null;
							},
						},
					]),
					t
				);
			})(E.a.Component);
		y.propTypes = { children: E.a.PropTypes.func.isRequired };
		var O = function(e, t) {
			return function(n) {
				return E.a.createElement(y, { modules: t }, function(t) {
					return E.a.createElement(e, a()({}, t, n));
				});
			};
		};
	},
	944: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(24),
				i = n.n(o),
				s = n(0),
				c = n(943),
				u = n(942),
				l = n.n(u),
				d = function(t) {
					var n = t.Picker,
						r = t.onSelect,
						o = i()(t, ['Picker', 'onSelect']);
					return e.createElement(
						'div',
						{ className: l.a.EmojiPicker },
						e.createElement(
							n,
							a()(
								{
									color: '#333333',
									onClick: r,
									emojiSize: 20,
									sheetSize: 20,
									title: '',
								},
								o
							)
						)
					);
				};
			(d.propTypes = { onSelect: s.PropTypes.func }),
				(t.a = Object(c.a)(d, {
					Picker: function() {
						return n
							.e(0)
							.then(function() {
								var e = n(1897);
								return 'object' == typeof e && e && e.__esModule
									? e
									: Object.assign({}, 'object' == typeof e && e, {
											default: e,
									  });
							})
							.then(function(e) {
								return e.Picker;
							});
					},
				}));
		}.call(this, n(0)));
	},
	945: function(e, t, n) {
		e.exports = { Drawer: '_32On7MvQDqcYybZOg6WO19' };
	},
	946: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(0),
				a = n(945),
				o = n.n(a),
				i = function(t) {
					var n = t.isOpen,
						r = void 0 !== n && n,
						a = t.children;
					return e.createElement(
						'div',
						{ className: o.a.Drawer },
						r ? a : null
					);
				};
			(i.propTypes = { isOpen: r.PropTypes.bool, children: r.PropTypes.node }),
				(t.a = i);
		}.call(this, n(0)));
	},
	947: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(0),
				i = n(12),
				s = n.n(i),
				c = n(40),
				u = n.n(c),
				l = n(328),
				d = n.n(l),
				p = n(1584),
				_ = function(t) {
					var n = t.color,
						r = t.floating,
						a = t.onClick,
						o = t.disabled;
					return e.createElement(
						'button',
						{
							className: s()(d.a.Attachment, { floating: r }),
							style: { color: n },
							onClick: function(e) {
								return !o && a && a(e);
							},
							disabled: o,
							tabIndex: '1000',
							'aria-label': 'Send an attachment',
						},
						e.createElement(u.a, { className: 'flex', src: p })
					);
				},
				f = function(t) {
					var n = t.color,
						r = t.floating,
						a = t.onClick,
						o = t.disabled,
						i = t.width,
						c = void 0 === i ? 18 : i,
						u = t.height,
						l = void 0 === u ? 18 : u;
					return e.createElement(
						'button',
						{
							'aria-label': 'Add an Emoji to your conversation',
							className: s()(d.a.EmojiIcon, { floating: r }),
							style: { color: n },
							onClick: function(e) {
								return !o && a && a(e);
							},
							disabled: o,
							tabIndex: '1000',
						},
						e.createElement(
							'svg',
							{
								preserveAspectRatio: 'xMidYMid',
								viewBox: '0 0 24 24',
								style: { width: c, height: l },
							},
							e.createElement('path', {
								d:
									'M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.9 0-5.56-1.75-6.9-4.57-.24-.5-.03-1.1.47-1.33.5-.24 1.1-.03 1.33.47C7.9 16.67 9.86 18 12 18c2.15 0 4.1-1.3 5.1-3.43.23-.5.83-.7 1.33-.47.5.23.7.83.47 1.33C17.58 18.25 14.93 20 12 20zm4-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
							})
						)
					);
				},
				m = function(t) {
					var n = t.isActive,
						r = void 0 !== n && n,
						o = t.children;
					return e.createElement(
						'li',
						{
							className: s()(
								d.a.ComposerMenuItem,
								a()({}, d.a.ComposerMenuItemActive, r)
							),
						},
						o
					);
				},
				b = function(t) {
					var n = t.color,
						r = t.floating,
						a = t.allowAttachments,
						o = t.allowEmoji,
						i = t.onAttachmentClick,
						s = t.onEmojiClick,
						c = t.emojiDrawerActive,
						u = t.disabled;
					return e.createElement(
						'ul',
						{ className: d.a.ComposerMenu },
						a &&
							e.createElement(
								m,
								null,
								e.createElement(_, {
									color: n,
									onClick: i,
									disabled: u,
									floating: r,
								})
							),
						o &&
							e.createElement(
								m,
								{ isActive: c },
								e.createElement(f, {
									color: n,
									onClick: s,
									disabled: u,
									floating: r,
								})
							)
					);
				};
			(b.propTypes = {
				color: o.PropTypes.string.isRequired,
				floating: o.PropTypes.bool,
				allowAttachments: o.PropTypes.bool,
				allowEmoji: o.PropTypes.bool,
				onAttachmentClick: o.PropTypes.func,
				onEmojiClick: o.PropTypes.func,
				emojiDrawerActive: o.PropTypes.bool,
			}),
				(t.a = b);
		}.call(this, n(0)));
	},
	948: function(e, t, n) {
		'use strict';
		var r = n(144);
		r.linkify.add('ftp:', null),
			(t.a = function(e) {
				if ('' === e) return '';
				var t = 0,
					n = [];
				(r.linkify.match(e) || []).forEach(function(r) {
					r.index > t &&
						n.push(document.createTextNode(e.substring(t, r.index)));
					var a = document.createElement('a');
					a.setAttribute('href', r.url),
						a.setAttribute('target', '_blank'),
						(a.textContent = r.text),
						n.push(a),
						(t = r.lastIndex);
				}),
					t < e.length && n.push(document.createTextNode(e.substring(t)));
				var a = document.createElement('span');
				return (
					n.forEach(function(e) {
						a.appendChild(e);
					}),
					a.outerHTML
				);
			});
	},
	951: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(81),
				g = n(17),
				h = n(21),
				v = n(3),
				E = n(12),
				y = n.n(E),
				O = n(200),
				C = n.n(O),
				T = n(32),
				I = n(454),
				M = n(124),
				P = n.n(M),
				A = n(369),
				S = n(133),
				D = n(936),
				w = n(451),
				k = n(449),
				R = n(42),
				j = n(48),
				N = n(907),
				B = n(905),
				U = n(840),
				L = n(903),
				W = n(902),
				x = n(6),
				F = n(16),
				H = n(25),
				K = n(76),
				q = n(900),
				z = n(296),
				G = n(262),
				V = n(53),
				Y = n(436),
				Z = n(31),
				J = n(28),
				Q = n(450),
				X = n(898),
				$ = n.n(X),
				ee = 26214400,
				te = 100,
				ne = 250,
				re = 54e5,
				ae = (function(t) {
					function n(t) {
						c()(this, n);
						var r = p()(this, (n.__proto__ || i()(n)).call(this, t));
						return (
							(r.handleTypingIndicatorsChange = function() {
								r.isScrolledToBottom && r.scrollToBottom();
							}),
							(r.checkIfScrolledToBottom = function() {
								var e = Object(b.findDOMNode)(r.messagesNode);
								return (
									!!e && e.scrollTop + e.offsetHeight > e.scrollHeight - te
								);
							}),
							(r.scrollToBottom = function() {
								var e = Object(b.findDOMNode)(r.messagesNode);
								e && (e.scrollTop = e.scrollHeight);
							}),
							(r.handleWheel = function(e) {
								var t = Object(b.findDOMNode)(r.messagesNode);
								t &&
									(e.deltaY < 0 && 0 === t.scrollTop && e.preventDefault(),
									e.deltaY > 0 &&
										t.clientHeight + t.scrollTop + e.deltaY >= t.scrollHeight &&
										((t.scrollTop = t.scrollHeight), e.preventDefault()));
							}),
							(r.handleComposerChange = Object(A.a)(function(e) {
								e
									? r.props.actions.endUserTyping({
											conversationId: r.props.conversationId,
									  })
									: r.props.actions.endUserTypingFinished({
											conversationId: r.props.conversationId,
									  });
							}, ne)),
							(r.sendMessage = function(e, t) {
								return r.props.actions.createMessage({
									conversationId: r.props.conversationId,
									body: e,
									attachments: t,
								});
							}),
							(r.onComposerSubmit = function(e) {
								r.sendMessage(e),
									r.handleComposerChange.cancel(),
									r.props.actions.endUserTypingFinished({
										conversationId: r.props.conversationId,
									});
							}),
							(r.onUploadAttachment = function(e) {
								var t = r.props.conversationId;
								if (e && !(e.length < 1)) {
									var n = function(e) {
										e &&
											e.payload &&
											e.payload.id &&
											r.sendMessage('', [e.payload.id]);
									};
									e.map(function(e) {
										return e.size > ee
											? r.props.actions.attachmentTooLarge()
											: (function(e) {
													return r.props.actions.uploadAttachment(t, e);
											  })(e).then(n);
									});
								}
							}),
							(r.getEmailCaptureSender = function(e) {
								var t = e.findIndex(function(e) {
									return (
										e
											.get('messages')
											.first()
											.get('authorType') === j.a.USER
									);
								});
								if (-1 === t) return null;
								var n = e.get(t).get('messages');
								return n && n.count() && n.first().get('sender')
									? n
											.first()
											.get('sender')
											.toObject()
									: null;
							}),
							(r.shouldHideMessageGroup = function(e) {
								return (
									e.get &&
									e.get('messages').find(function(e) {
										return (
											e.getIn &&
											(e.getIn(['attributes', 'show_email_capture_card'], !1) ||
												e.getIn(['attributes', 'ratingPrompt'], !1) ||
												(e.getIn(['attributes', 'goalReached'], !1) &&
													'' === e.get('body')))
										);
									})
								);
							}),
							(r.renderMessages = function() {
								var t = r.props.groupedMessages.map(function(e) {
									return Object(
										v.Map
									)({ key: 'mg:' + (e.first().getIn(['attributes', 'widgetGuid']) || e.first().get('id')), firstCreatedAt: e.first().get('createdAt'), lastCreatedAt: e.last().get('createdAt'), messages: e });
								});
								if (r.shouldRenderIdentifyCard()) {
									var n = t.findIndex(function(e) {
										var t = e
											.get('messages')
											.first()
											.get('authorType');
										return t === j.a.END_USER || t === j.a.LEAD;
									});
									if (-1 !== n) {
										var a = r.getEmailCaptureSender(t),
											o = t.get(n);
										if (o.get('messages').count() > 1) {
											var i = o.get('messages').first(),
												s = o.get('messages').rest();
											t = t.splice(
												n,
												1,
												Object(v.Map)({
													key:
														'mg:' +
														(i.getIn(['attributes', 'widgetGuid']) ||
															i.get('id')),
													firstCreatedAt: i.get('createdAt'),
													lastCreatedAt: i.get('createdAt'),
													messages: v.List.of(i),
												}),
												Object(v.Map)({
													key:
														'mg:' +
														(i.getIn(['attributes', 'widgetGuid']) ||
															i.get('id')) +
														'-emailcapture',
													firstCreatedAt: i.get('createdAt'),
													lastCreatedAt: i.get('createdAt'),
													messages: v.List.of(r.renderIdentifyCard(a)),
													raw: !0,
												}),
												Object(v.Map)({
													key:
														'mg:' +
														(s.first().getIn(['attributes', 'widgetGuid']) ||
															s.first().get('id')),
													firstCreatedAt: s.first().get('createdAt'),
													lastCreatedAt: s.last().get('createdAt'),
													messages: s,
												})
											);
										} else {
											var c = o.get('messages').first();
											t = t.insert(
												n + 1,
												Object(v.Map)({
													key:
														'mg:' +
														(c.getIn(['attributes', 'widgetGuid']) ||
															c.get('id')) +
														'-emailcapture',
													firstCreatedAt: c.get('createdAt'),
													lastCreatedAt: c.get('createdAt'),
													messages: v.List.of(r.renderIdentifyCard(a)),
													raw: !0,
												})
											);
										}
									}
								}
								var u = r.props.messages.some(function(e) {
									return e.getIn([
										'attributes',
										'conversationStartedByEndUser',
									]);
								});
								return t.reduce(function(n, a, o, i) {
									if (r.shouldHideMessageGroup(a)) return n;
									if (a.get('raw')) return n.concat(a.get('messages'));
									var s = void 0,
										c =
											(o > 0 && i.getIn([o - 1, 'lastCreatedAt'])) ||
											Date.now(),
										l = a.get('firstCreatedAt');
									Math.abs(c - l) > re &&
										(s = e.createElement(
											'div',
											{
												className: $.a.TimestampHeader,
												key: 'db:' + a.get('key', l),
											},
											e.createElement(B.a, {
												value: l,
												isEmbeddedMessenger: r.props.isEmbeddedMessenger,
											})
										));
									var d = u && 0 === o,
										p = e.createElement(w.a, {
											key: a.get('key'),
											conversationId: r.props.conversationId,
											messages: a.get('messages'),
											isStartConversationPrompt: d,
											isLastMessageGroup: o === t.size - 1,
											lastAgentResponseAt: r.props.lastAgentResponseAt,
										});
									return s ? n.push(v.List.of(s, p)) : n.push(v.List.of(p));
								}, Object(v.List)());
							}),
							(r.submitConversationRating = function(e) {
								var t = e.ratingValue,
									n = e.ratingText,
									a = r.props.messages,
									o = a.last().get('conversationId'),
									i = a.last().getIn(['attributes', 'ratingPrompt'], null);
								r.props.actions.submitRating({
									conversationId: o,
									ratingText: n,
									ratingValue: t,
									ratingPrompt: i,
								});
							}),
							(r.dismissConversationRating = function() {
								r.setState({ dismissedConversationRating: !0 });
							}),
							(r.handleComposerMeasured = function(e) {
								var t = e.height;
								r.setState({ composerHeight: t });
							}),
							(r.state = { composerHeight: null }),
							r
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.scrollToBottom(),
										(this.isScrolledToBottom = !0),
										this.props.actions.trackImpression({
											view: Z.e.CONVERSATION_COMPOSER,
										});
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function() {
									this.isScrolledToBottom = this.checkIfScrolledToBottom();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function() {
									this.isScrolledToBottom && this.scrollToBottom();
								},
							},
							{
								key: 'shouldRenderIdentifyCard',
								value: function() {
									return (
										this.props.shouldShowIdentifyCard &&
										!this.getConversationFetchIsPending() &&
										this.props.messages.size > 0 &&
										!this.props.messages.first().get('local', !1)
									);
								},
							},
							{
								key: 'shouldRenderConversationRating',
								value: function() {
									var e = this.state.dismissedConversationRating,
										t = this.props,
										n = t.messages,
										r = t.hasConversationRatingGate,
										a = t.isEmbeddedMessenger;
									return (
										r &&
										!a &&
										!e &&
										n.last().getIn(['attributes', 'ratingPrompt'], !1)
									);
								},
							},
							{
								key: 'renderIdentifyCard',
								value: function(t) {
									var n = this.props,
										r = n.conversationId,
										a = n.messages;
									return e.createElement(D.a, {
										sender: t,
										key: 'IdentifyCard-' + r,
										conversationId: r,
										createdAt: a.first().get('createdAt'),
									});
								},
							},
							{
								key: 'getConversationFetchIsPending',
								value: function() {
									var e = this.props,
										t = e.conversation,
										n = e.conversationIsFetched;
									return !(t.get('local', !1) || n);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this,
										n = this.state.composerHeight,
										r = this.props,
										o = r.conversation,
										i = r.conversationId,
										s = r.showBranding,
										c = r.organizationName,
										u = r.isAway,
										l = r.offlineMessageCopy,
										d = r.conversationLastDriftUser,
										p = r.connectionStatus,
										_ = r.lastAgentResponseAt,
										f = r.isButtonOnlyQuestion,
										m = r.theme,
										b = r.isEmbeddedMessenger,
										g = r.continuousBackgroundGradient,
										h = r.isHypergrowthTheme,
										v = r.isConversationPermaclosed,
										E = r.messages;
									if (!o) return null;
									var O = this.getConversationFetchIsPending(),
										M = !O && u && Date.now() - _ > 3e5;
									return e.createElement(
										'div',
										{
											className: y()(
												'Conversation',
												a()({ floating: b, mobile: Object(T.d)() }, g, b)
											),
										},
										b &&
											e.createElement(k.a, {
												isEmbeddedMessenger: b,
												theme: m,
											}),
										e.createElement(
											'div',
											{
												className: 'messages',
												style: {
													backgroundColor: b
														? 'transparent'
														: '#' + m.widgetBackgroundColor,
												},
												ref: function(e) {
													t.messagesNode = e;
												},
												onWheel: this.handleWheel,
											},
											e.createElement(
												'div',
												{
													className: 'messages-content-wrapper',
													style: {
														marginTop: b && h && !Object(T.d)() ? 135 : void 0,
														marginBottom:
															b && !Object(T.d)() && n ? n - 10 : void 0,
													},
												},
												O
													? e.createElement(
															'div',
															{
																className: 'flex-center',
																style: { height: '100%' },
															},
															e.createElement(I.a, null)
													  )
													: e.createElement(
															P.a,
															{
																transitionName: 'transition-fade',
																transitionEnterTimeout: 200,
																transitionLeaveTimeout: 200,
															},
															this.renderMessages(),
															e.createElement(U.a, {
																onComponentDidMount: this
																	.handleTypingIndicatorsChange,
															})
													  ),
												M && e.createElement(L.a, null),
												e.createElement(N.a, {
													conversationId: i,
													onChange: this.handleTypingIndicatorsChange,
												})
											)
										),
										this.shouldRenderConversationRating() &&
											e.createElement(
												C.a,
												{
													onMeasure: this.handleComposerMeasured,
													whitelist: ['width', 'height'],
												},
												e.createElement(W.a, {
													onDismiss: this.dismissConversationRating,
													botName: d.name,
													message: E.last(),
													submitRating: this.submitConversationRating,
													theme: m,
												})
											),
										e.createElement(
											C.a,
											{
												onMeasure: this.handleComposerMeasured,
												whitelist: ['width', 'height'],
											},
											e.createElement(S.a, {
												onSubmit: this.onComposerSubmit,
												onChange: this.handleComposerChange,
												onUploadAttachment: this.onUploadAttachment,
												conversation: o,
												conversationLastDriftUser: d,
												showBranding: s,
												organizationName: c,
												isAway: u,
												offlineMessageCopy: l,
												connectionStatus: p,
												autoFocus: !Object(T.b)(),
												disabled: O || f || v,
												disabledPrompt: f || v,
												isConversationPermaclosed: v,
												utmContent: Z.e.CONVERSATION_COMPOSER,
											})
										)
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			(ae.propTypes = {
				conversationId: m.PropTypes.any.isRequired,
				conversation: m.PropTypes.object.isRequired,
				conversationLastDriftUser: m.PropTypes.object,
				showBranding: m.PropTypes.bool.isRequired,
				organizationName: m.PropTypes.string.isRequired,
				isAway: m.PropTypes.bool.isRequired,
				offlineMessageCopy: m.PropTypes.string,
				messages: m.PropTypes.instanceOf(v.OrderedSet).isRequired,
				groupedMessages: m.PropTypes.instanceOf(v.List),
				driftUsersById: m.PropTypes.object.isRequired,
				attachmentsById: m.PropTypes.object.isRequired,
				shouldShowIdentifyCard: m.PropTypes.bool.isRequired,
				connectionStatus: m.PropTypes.string.isRequired,
				conversationIsFetched: m.PropTypes.bool.isRequired,
				lastAgentResponseAt: m.PropTypes.number.isRequired,
				isButtonOnlyQuestion: m.PropTypes.bool.isRequired,
				actions: m.PropTypes.shape({
					uploadAttachment: m.PropTypes.func.isRequired,
					createMessage: m.PropTypes.func.isRequired,
					endUserTyping: m.PropTypes.func.isRequired,
					endUserTypingFinished: m.PropTypes.func.isRequired,
				}),
				theme: m.PropTypes.shape({
					backgroundColor: m.PropTypes.string,
					foregroundColor: m.PropTypes.string,
					textColor: m.PropTypes.string,
					activeColor: m.PropTypes.string,
					widgetBackgroundColor: m.PropTypes.string,
					widgetHalfHeight: m.PropTypes.bool,
				}),
			}),
				(ae.defaultProps = { groupedMessages: Object(v.List)() });
			t.a = Object(g.connect)(
				function() {
					var e = Object(q.a)(),
						t = Object(H.u)(),
						n = Object(H.m)(),
						r = Object(H.o)(),
						a = Object(H.n)(),
						o = Object(H.p)(),
						i = Object(H.q)(),
						s = Object(K.n)();
					return function(c, u) {
						var l = n(c, u);
						if (!l) return {};
						var d = t(c, u),
							p = Object(x.k)(c),
							_ = c.Attachment.attachmentsById;
						return {
							conversation: l,
							conversationId: l.get('id'),
							conversationLastDriftUser: r(c, u),
							showBranding: c.Bootstrap.embedConfiguration.showBranding,
							organizationName: c.Bootstrap.embedConfiguration.organizationName,
							isAway: !Object(F.i)(c),
							messages: d,
							driftUsersById: p,
							attachmentsById: _,
							shouldShowIdentifyCard: e(c, u),
							connectionStatus: Object(x.i)(c),
							conversationIsFetched: a(c, u),
							groupedMessages: o(c, u),
							lastAgentResponseAt: i(c, u),
							isButtonOnlyQuestion: s(c, u),
							isEmbeddedMessenger: Object(J.g)(c, u),
							continuousBackgroundGradient: Object(J.c)(c),
							isHypergrowthTheme: Object(J.j)(c),
							locale: Object(x.t)(c),
							isConversationPermaclosed: Object(H.b)(c, l.get('id')),
							hasConversationRatingGate: Object(Q.a)(c),
						};
					};
				},
				function(e) {
					return {
						actions: Object(h.bindActionCreators)(
							{
								uploadAttachment: z.c,
								attachmentTooLarge: z.a,
								createMessage: R.d,
								endUserTyping: G.a,
								endUserTypingFinished: G.b,
								trackImpression: V.c,
								submitRating: Y.b,
							},
							e
						),
					};
				}
			)(ae);
		}.call(this, n(0)));
	},
	952: function(e, t, n) {
		e.exports = n.p + 'static/images/7d9823479ae657b2c34fc2abd5417a78.svg';
	},
	955: function(e, t) {
		e.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.15 12.64"><g data-name="Layer 2"><g data-name="Layer 1"><path fill="#fcf4a0" d="M6.58.75L.75 7.06h3.54l-1.95 4.83L8.4 5.24H4.57L6.58.75z"></path><path d="M6.58.75l-2 4.49H8.4l-6.06 6.65 2-4.83H.75L6.58.75m0-.75a.67.67 0 0 0-.37.11.65.65 0 0 0-.21.13L.2 6.55a.75.75 0 0 0 .55 1.26h2.43l-1.54 3.8a.76.76 0 0 0 .3.92.8.8 0 0 0 .4.11.74.74 0 0 0 .55-.24L9 5.75a.75.75 0 0 0-.6-1.26H5.73L7.24 1.1a.68.68 0 0 0 .09-.35.75.75 0 0 0-.74-.75zm0 1.5z" fill="#f4a51f"></path></g></g></svg>';
	},
	956: function(e, t, n) {
		e.exports = { Badge: '_23adWK3Uprf4Ktba9B88ed' };
	},
	957: function(e, t, n) {
		e.exports = { BotAvatar: '_2ttjAv_FrMPLIE0mDM9dok' };
	},
	959: function(e, t, n) {
		'use strict';
		var r = n(13),
			a = n.n(r),
			o = n(10),
			i = n.n(o),
			s = n(11),
			c = n.n(s),
			u = n(7),
			l = n.n(u),
			d = n(14),
			p = n.n(d),
			_ = n(0),
			f = n.n(_),
			m = n(15),
			b = n(43),
			g = n.n(b),
			h = n(134),
			v = n(456),
			E = n(1609),
			y = Object(m.h)({
				personalPronoun: {
					id: 'app.user.personalPronoun',
					description: 'Second-person personal pronoun for the current user',
					defaultMessage: 'You',
				},
			}),
			O = function(e) {
				var t = e.sender,
					n = e.organizationName;
				if (!t)
					return f.a.createElement(
						'div',
						{ className: E.ConversationListItem__name },
						n
					);
				var r = t.name || t.email || f.a.createElement(m.b, y.personalPronoun);
				return f.a.createElement(
					'div',
					{ className: E.ConversationListItem__name },
					r
				);
			};
		O.propTypes = {
			sender: _.PropTypes.shape({
				name: _.PropTypes.string,
				type: _.PropTypes.string,
				email: _.PropTypes.string,
			}),
			organizationName: _.PropTypes.string,
		};
		var C = function(e) {
			var t = e.timestamp,
				n = void 0;
			if (t) {
				var r = g()(t),
					a = g()(),
					o = g()().subtract(1, 'day');
				n = r.isSame(a, 'day')
					? f.a.createElement(m.e, { value: r })
					: r.isSame(o, 'day')
					? f.a.createElement(m.d, { value: o, units: 'day' })
					: f.a.createElement(m.a, { value: r });
			}
			return f.a.createElement(
				'div',
				{ className: E.ConversationListItem__timestamp, title: t },
				n
			);
		};
		C.propTypes = { timestamp: _.PropTypes.number };
		var T = (function(e) {
			function t() {
				return (
					i()(this, t),
					l()(this, (t.__proto__ || a()(t)).apply(this, arguments))
				);
			}
			return (
				p()(t, e),
				c()(t, [
					{
						key: 'componentDidMount',
						value: function() {
							this.props.isFirstConversation && this.listItem.focus();
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props,
								n = t.lastMessage,
								r = t.lastMessageSender,
								a = t.unreadMessageCount,
								o = t.organizationName,
								i = t.backgroundColor,
								s = t.onClick;
							return f.a.createElement(
								'button',
								{
									ref: function(t) {
										e.listItem = t;
									},
									className: E.ConversationListItem,
									onClick: s,
									tabIndex: '1',
								},
								f.a.createElement(
									'div',
									{ className: E.ConversationListItem__media },
									f.a.createElement(h.a, {
										user: r,
										color: i,
										size: 'large',
										shape: 'circle',
									}),
									f.a.createElement(
										'div',
										{ className: E.UnreadCountBadgeContainer },
										f.a.createElement(v.a, { count: a })
									)
								),
								f.a.createElement(
									'div',
									{ className: E.ConversationListItem__content },
									f.a.createElement(
										'div',
										{ className: E.ConversationListItem__metadata + ' flex' },
										f.a.createElement(O, { sender: r, organizationName: o }),
										f.a.createElement(C, { timestamp: n.get('createdAt') })
									),
									f.a.createElement(
										'div',
										{ className: E.ConversationListItem__preview },
										n.getIn(['attributes', 'preview'])
									)
								)
							);
						},
					},
				]),
				t
			);
		})(_.Component);
		(T.propTypes = {
			lastMessage: _.PropTypes.object,
			lastMessageSender: _.PropTypes.object,
			unreadMessageCount: _.PropTypes.number,
			organizationName: _.PropTypes.string,
			backgroundColor: _.PropTypes.string,
			isFirstConversation: _.PropTypes.bool,
			onClick: _.PropTypes.func,
		}),
			(t.a = T);
	},
	96: function(e, t, n) {
		'use strict';
		n.d(t, 'h', function() {
			return s;
		}),
			n.d(t, 'a', function() {
				return c;
			}),
			n.d(t, 'c', function() {
				return u;
			}),
			n.d(t, 'b', function() {
				return l;
			}),
			n.d(t, 'd', function() {
				return d;
			}),
			n.d(t, 'g', function() {
				return p;
			}),
			n.d(t, 'e', function() {
				return _;
			}),
			n.d(t, 'f', function() {
				return f;
			});
		var r = n(2),
			a = n.n(r),
			o = n(5),
			i = n(58);
		function s(e) {
			var t =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			return { type: i.i, payload: a()({ agentId: e }, t) };
		}
		function c(e) {
			var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = t.meetingType,
				r = t.start;
			return { type: i.a, payload: { agentId: e, meetingType: n, start: r } };
		}
		var u = Object(o.b)(i.c),
			l = Object(o.b)(i.b);
		function d(e) {
			var t = e.conversationId,
				n = e.agentId,
				r = e.bookingAgentId,
				a = e.availabilitySlot,
				o = e.slotDuration,
				s = e.endUserTimeZone,
				c = e.agentTimeZone,
				u = e.meetingType,
				l = e.meetingSource,
				d = void 0 === l ? i.d.PLAYBOOK_DROP : l;
			return {
				type: i.e,
				payload: {
					agentId: n,
					bookingAgentId: r,
					conversationId: t,
					availabilitySlot: a,
					slotDuration: o,
					endUserTimeZone: s,
					agentTimeZone: c,
					meetingType: u,
					meetingSource: d,
				},
			};
		}
		var p = Object(o.b)(i.h),
			_ = Object(o.b)(i.f),
			f = Object(o.b)(i.g);
	},
	960: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(17),
				g = n(27),
				h = n.n(g),
				v = n(959),
				E = n(25),
				y = n(47),
				O = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.onClick = function() {
								r.props.onClick && r.props.onClick(r.props.conversationId);
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'render',
								value: function() {
									return e.createElement(
										v.a,
										a()({}, this.props, { onClick: this.onClick })
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			O.propTypes = {
				conversationId: m.PropTypes.node,
				lastMessage: m.PropTypes.object,
				lastMessageSender: m.PropTypes.object,
				unreadMessageCount: m.PropTypes.number,
				organizationName: m.PropTypes.string,
				onClick: m.PropTypes.func,
			};
			t.a = h()(
				Object(y.a)(['backgroundColor']),
				Object(b.connect)(function() {
					var e = Object(E.r)(),
						t = Object(E.s)(e),
						n = Object(E.v)();
					return function(r, a) {
						return {
							lastMessage: e(r, a),
							lastMessageSender: t(r, a),
							unreadMessageCount: n(r, a),
							organizationName: r.Bootstrap.embedConfiguration.organizationName,
						};
					};
				})
			)(O);
		}.call(this, n(0)));
	},
	961: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(8),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(12),
				g = n.n(b),
				h = n(960),
				v = n(101),
				E = n(290),
				y = n(952),
				O = n.n(y),
				C = n(1604),
				T = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.state = { listOverflowing: !1 }),
							(r.handleWheel = function(e) {
								var t = r.elem;
								t &&
									(e.deltaY < 0 && 0 === t.scrollTop && e.preventDefault(),
									e.deltaY > 0 &&
										t.clientHeight + t.scrollTop + e.deltaY >= t.scrollHeight &&
										((t.scrollTop = t.scrollHeight), e.preventDefault()));
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									this.checkListOverflow();
								},
							},
							{
								key: 'checkListOverflow',
								value: function() {
									var e = this.elem;
									this.setState({
										listOverflowing: e.offsetHeight < e.scrollHeight,
									});
								},
							},
							{
								key: 'renderList',
								value: function() {
									var t = this,
										n = this.props,
										r = n.theme,
										o = n.conversations,
										i = n.onConversationClick;
									return e.createElement(
										'div',
										{
											className: g()(
												C.ConversationList,
												a()(
													{},
													C.ConversationListHalfHeight,
													r.widgetHalfHeight
												)
											),
											style: { backgroundColor: '#' + r.widgetBackgroundColor },
											ref: function(e) {
												t.elem = e;
											},
											onWheel: this.handleWheel,
										},
										o.map(function(t, n) {
											return e.createElement(h.a, {
												key: t.get('id'),
												conversationId: t.get('id'),
												onClick: i,
												isFirstConversation: 0 === n,
											});
										})
									);
								},
							},
							{
								key: 'renderEmpty',
								value: function() {
									var t = this.props,
										n = t.onNewConversationClick,
										r = t.theme,
										a = t.organizationName;
									return e.createElement(
										'div',
										{ className: C.ConversationListEmpty },
										e.createElement('img', { src: O.a }),
										e.createElement(
											'p',
											null,
											'You don’t have any conversations with ',
											a,
											' yet!'
										),
										e.createElement(
											E.a,
											{
												onClick: n,
												style: {
													backgroundColor: '#' + r.backgroundColor,
													color: '#' + r.textColor,
													borderColor: '#' + r.backgroundColor,
												},
											},
											'Start a Conversation'
										)
									);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props,
										n = t.view,
										r = t.conversations,
										a = t.showBranding,
										o = this.state.listOverflowing;
									return e.createElement(
										'div',
										{ className: C.ConversationListContainer },
										r.isEmpty() ? this.renderEmpty() : this.renderList(),
										a &&
											e.createElement(
												'div',
												{
													className: g()(C.ConversationListBranding, {
														'show-shadow': o,
													}),
												},
												e.createElement(v.a, { utmContent: n })
											)
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			(T.propTypes = {
				conversations: m.PropTypes.object.isRequired,
				onConversationClick: m.PropTypes.func,
				showBranding: m.PropTypes.bool.isRequired,
				theme: m.PropTypes.shape({
					backgroundColor: m.PropTypes.string,
					foregroundColor: m.PropTypes.string,
					textColor: m.PropTypes.string,
					activeColor: m.PropTypes.string,
					widgetBackgroundColor: m.PropTypes.string,
					widgetHalfHeight: m.PropTypes.bool,
				}),
			}),
				(t.a = T);
		}.call(this, n(0)));
	},
	962: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(2),
				a = n.n(r),
				o = n(13),
				i = n.n(o),
				s = n(10),
				c = n.n(s),
				u = n(11),
				l = n.n(u),
				d = n(7),
				p = n.n(d),
				_ = n(14),
				f = n.n(_),
				m = n(0),
				b = n(17),
				g = n(21),
				h = n(961),
				v = n(42),
				E = n(29),
				y = n(25),
				O = n(22),
				C = n(31),
				T = n(53),
				I = (function(t) {
					function n() {
						var e, t, r, a;
						c()(this, n);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
							s[u] = arguments[u];
						return (
							(t = r = p()(
								this,
								(e = n.__proto__ || i()(n)).call.apply(e, [this].concat(s))
							)),
							(r.handleConversationClick = function(e) {
								r.props.actions.goToConversation(e);
							}),
							(r.handleNewConversationClick = function() {
								r.props.actions.goToNewConversation({ autoFocus: !0 });
							}),
							(a = t),
							p()(r, a)
						);
					}
					return (
						f()(n, t),
						l()(n, [
							{
								key: 'componentWillMount',
								value: function() {
									var e = this.props,
										t = e.view;
									e.actions.trackImpression({ view: t });
								},
							},
							{
								key: 'render',
								value: function() {
									return e.createElement(
										h.a,
										a()(
											{
												onConversationClick: this.handleConversationClick,
												onNewConversationClick: this.handleNewConversationClick,
											},
											this.props
										)
									);
								},
							},
						]),
						n
					);
				})(m.Component);
			I.propTypes = {
				conversations: m.PropTypes.object,
				actions: m.PropTypes.shape({
					goToConversation: m.PropTypes.func.isRequired,
				}).isRequired,
			};
			t.a = Object(b.connect)(
				function(e) {
					var t = Object(y.c)(e);
					return {
						conversations: t,
						showBranding: Object(O.m)(e),
						view: t.isEmpty()
							? C.e.CONVERSATION_LIST_EMPTY
							: C.e.CONVERSATION_LIST,
					};
				},
				function(e) {
					return {
						actions: Object(g.bindActionCreators)(
							{
								goToConversation: v.f,
								goToNewConversation: E.goToNewConversation,
								trackImpression: T.c,
							},
							e
						),
					};
				}
			)(I);
		}.call(this, n(0)));
	},
	963: function(e, t, n) {
		'use strict';
		(function(e) {
			var n = [400, 500, 600];
			t.a = function() {
				return e.createElement(
					'div',
					{ style: { position: 'fixed', left: -1e4, visibility: 'hidden' } },
					n.map(function(t) {
						return e.createElement('span', {
							key: t,
							style: { fontWeight: t },
						});
					})
				);
			};
		}.call(this, n(0)));
	},
	97: function(e, t, n) {
		'use strict';
		n.r(t);
		var r = n(2),
			a = n.n(r),
			o = n(188),
			i = n.n(o),
			s = n(100),
			c = i()({ FADE: null, SLIDE: null }),
			u = i()({ NONE: null, USER: null }),
			l = {
				hideOnStartup: !!window.__DRIFTT_WELCOME_MESSAGE_DISMISSED__,
				active: !1,
				hovered: !1,
				dismissed: !1,
				transitionStyle: c.FADE,
				avatarStyle: u.NONE,
				avatarUrl: void 0,
				sender: void 0,
				message: void 0,
				msgFromFirstPopup: !1,
				triggeredFromWidgetAPI: !1,
			},
			d = function() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments[1];
				switch (t.type) {
					case s.c:
						return a()({}, e, {
							active: !0,
							hovered: !1,
							dismissed: !1,
							autoFocus: t.payload.autoFocus,
							transitionStyle: t.payload.transitionStyle,
							avatarStyle: t.payload.avatarStyle,
							message: t.payload.message,
							sender: t.payload.sender,
							avatarUrl: t.payload.avatarUrl,
							msgFromFirstPopup: t.payload.msgFromFirstPopup,
							triggeredFromWidgetAPI: t.payload.triggeredFromWidgetAPI,
						});
					case s.a:
						return a()({}, e, {
							active: !1,
							hovered: !1,
							dismissed: !0,
							avatarStyle: u.NONE,
							message: void 0,
							sender: void 0,
							avatarUrl: void 0,
						});
					case s.b:
						return a()({}, e, { dismissed: !1, transitionStyle: c.FADE });
					case s.f:
						return a()({}, e, { hovered: !0 });
					case s.g:
						return a()({}, e, { hovered: !1 });
					case s.e:
						return a()({}, e, { hideOnStartup: !0 });
					default:
						return e;
				}
			},
			p = n(288);
		n.d(t, 'default', function() {
			return d;
		}),
			n.d(t, 'showWelcomeMessage', function() {
				return p.d;
			}),
			n.d(t, 'hideWelcomeMessage', function() {
				return p.c;
			}),
			n.d(t, 'welcomeMessageMouseEnter', function() {
				return p.e;
			}),
			n.d(t, 'welcomeMessageMouseLeave', function() {
				return p.f;
			}),
			n.d(t, 'hideOnStartup', function() {
				return p.b;
			}),
			n.d(t, 'dismissWelcomeMessage', function() {
				return p.a;
			});
	},
	970: function(e, t, n) {
		'use strict';
		var r = n(188),
			a = n.n(r);
		t.a = a()({ RANDOM: null, CUSTOM: null });
	},
	971: function(e, t) {},
	972: function(e, t, n) {
		e.exports = n.p + 'static/images/5b2e73908697ec9884c23551d0822dd1.gif';
	},
	977: function(e, t, n) {
		'use strict';
		(function(e) {
			var r = n(13),
				a = n.n(r),
				o = n(10),
				i = n.n(o),
				s = n(11),
				c = n.n(s),
				u = n(7),
				l = n.n(u),
				d = n(14),
				p = n.n(d),
				_ = n(0),
				f = n(17),
				m = n(20),
				b = (n(981), n(847)),
				g = n(855),
				h = n(29),
				v = n(97),
				E = n(848),
				y = n(589),
				O = n(4),
				C = (function(t) {
					function n(e) {
						i()(this, n);
						var t = l()(this, (n.__proto__ || a()(n)).call(this, e));
						(t.handleMessage = function(e) {
							e.source === window.parent &&
								t.store.dispatch({ type: O.W, payload: e.data });
						}),
							(t.handleVisibilityChange = function() {
								t.store.dispatch(
									Object(y.a)('visible' === document.visibilityState)
								);
							}),
							(t.store = Object(E.a)(e.initialState)),
							t.store.dispatch(
								Object(y.a)('visible' === document.visibilityState)
							),
							e.showWidget && t.store.dispatch(Object(h.showWidget)()),
							e.welcomeMessageDismissed &&
								t.store.dispatch(Object(v.hideOnStartup)());
						var r = Object(m.a)(
							e.initialState,
							'Bootstrap.embedConfiguration.team'
						);
						return r && t.store.dispatch({ type: O.I, payload: r }), t;
					}
					return (
						p()(n, t),
						c()(n, [
							{
								key: 'componentDidMount',
								value: function() {
									window.addEventListener &&
										(window.addEventListener('message', this.handleMessage, !1),
										document.addEventListener(
											'visibilitychange',
											this.handleVisibilityChange,
											!1
										));
								},
							},
							{
								key: 'componentWillUnmount',
								value: function() {
									(this.store = void 0),
										window.removeEventListener &&
											(window.removeEventListener(
												'message',
												this.handleMessage,
												!1
											),
											document.removeEventListener(
												'visibilitychange',
												this.handleVisibilityChange,
												!1
											));
								},
							},
							{
								key: 'render',
								value: function() {
									return e.createElement(
										f.Provider,
										{ store: this.store },
										e.createElement(g.a, null, e.createElement(b.a, null))
									);
								},
							},
						]),
						n
					);
				})(_.Component);
			(C.propTypes = {
				initialState: _.PropTypes.object,
				showWidget: _.PropTypes.bool,
				welcomeMessageDismissed: _.PropTypes.bool,
			}),
				(t.a = C);
		}.call(this, n(0)));
	},
	981: function(e, t, n) {
		'use strict';
		var r = n(1),
			a = (n(117), n(6)),
			o = n(22),
			i = n(4);
		(r.Observable.prototype.waitForAuth = function(e, t) {
			var n = e.ofType(i.c);
			return this.mergeMap(function(e) {
				return Object(a.b)(t.getState())
					? r.Observable.of(e)
					: n.map(function() {
							return e;
					  });
			});
		}),
			(r.Observable.prototype.waitForBootstrap = function(e, t) {
				var n = e.ofType(i.C);
				return this.mergeMap(function(e) {
					return Object(o.o)(t.getState())
						? r.Observable.of(e)
						: n.map(function() {
								return e;
						  });
				});
			});
	},
	983: function(e, t, n) {},
	984: function(e, t, n) {
		e.exports = n.p + 'static/audio/52284660f7abf8538f64d3f7b857f505.mp3';
	},
	99: function(e, t, n) {
		'use strict';
		n.d(t, 'a', function() {
			return r;
		}),
			n.d(t, 'b', function() {
				return a;
			});
		var r = 'ENABLED',
			a = { ON_CALL: 'ON_CALL', AVAILABLE: 'AVAILABLE', OFFLINE: 'OFFLINE' };
	},
});
