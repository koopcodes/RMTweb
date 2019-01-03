module.exports = __NEXT_REGISTER_PAGE('/_error', function() {
	var e = webpackJsonp(
		[12],
		{
			197: function(e, t, r) {
				var n = r(241);
				var a = r(242);
				var o = r(250);
				function i(e) {
					return n(e) || a(e) || o();
				}
				e.exports = i;
			},
			240: function(e, t, r) {
				'use strict';
				var n = r(46);
				Object.defineProperty(t, '__esModule', { value: true });
				t.defaultHead = v;
				t.default = void 0;
				var a = n(r(202));
				var o = n(r(197));
				var i = n(r(61));
				var u = n(r(47));
				var l = n(r(48));
				var d = n(r(62));
				var c = n(r(63));
				var f = n(r(0));
				var s = n(r(1));
				var E = n(r(251));
				var p = (function(e) {
					(0, c.default)(t, e);
					function t() {
						(0, u.default)(this, t);
						return (0, d.default)(
							this,
							(t.__proto__ || (0, i.default)(t)).apply(this, arguments)
						);
					}
					(0, l.default)(t, [
						{
							key: 'render',
							value: function e() {
								return null;
							},
						},
					]);
					return t;
				})(f.default.Component);
				Object.defineProperty(p, 'contextTypes', {
					configurable: true,
					enumerable: true,
					writable: true,
					value: { headManager: s.default.object },
				});
				function v() {
					return [
						f.default.createElement('meta', {
							charSet: 'utf-8',
							className: 'next-head',
						}),
					];
				}
				function T(e) {
					var t;
					return (t = e
						.map(function(e) {
							return e.props.children;
						})
						.map(function(e) {
							return f.default.Children.toArray(e);
						})
						.reduce(function(e, t) {
							return e.concat(t);
						}, [])
						.reduce(function(e, t) {
							if (f.default.Fragment && t.type === f.default.Fragment)
								return e.concat(f.default.Children.toArray(t.props.children));
							return e.concat(t);
						}, [])
						.reverse()).concat
						.apply(t, (0, o.default)(v()))
						.filter(function(e) {
							return !!e;
						})
						.filter(O())
						.reverse()
						.map(function(e) {
							var t =
								(e.props && e.props.className ? e.props.className + ' ' : '') +
								'next-head';
							return f.default.cloneElement(e, { className: t });
						});
				}
				function _(e) {
					return e;
				}
				function R(e) {
					this.context &&
						this.context.headManager &&
						this.context.headManager.updateHead(e);
				}
				var h = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];
				function O() {
					var e = new a.default();
					var t = new a.default();
					var r = new a.default();
					var n = {};
					return function(o) {
						if (o.key && 0 === o.key.indexOf('.$')) {
							if (e.has(o.key)) return false;
							e.add(o.key);
						}
						switch (o.type) {
							case 'title':
							case 'base':
								if (t.has(o.type)) return false;
								t.add(o.type);
								break;
							case 'meta':
								for (var i = 0, u = h.length; i < u; i++) {
									var l = h[i];
									if (!o.props.hasOwnProperty(l)) continue;
									if ('charSet' === l) {
										if (r.has(l)) return false;
										r.add(l);
									} else {
										var d = o.props[l];
										var c = n[l] || new a.default();
										if (c.has(d)) return false;
										c.add(d);
										n[l] = c;
									}
								}
								break;
						}
						return true;
					};
				}
				var y = (0, E.default)(T, R, _)(p);
				t.default = y;
			},
			241: function(e, t) {
				function r(e) {
					if (Array.isArray(e)) {
						for (var t = 0, r = new Array(e.length); t < e.length; t++)
							r[t] = e[t];
						return r;
					}
				}
				e.exports = r;
			},
			242: function(e, t, r) {
				var n = r(243);
				var a = r(247);
				function o(e) {
					if (
						a(Object(e)) ||
						'[object Arguments]' === Object.prototype.toString.call(e)
					)
						return n(e);
				}
				e.exports = o;
			},
			243: function(e, t, r) {
				e.exports = r(244);
			},
			244: function(e, t, r) {
				r(189);
				r(245);
				e.exports = r(27).Array.from;
			},
			245: function(e, t, r) {
				'use strict';
				var n = r(188);
				var a = r(171);
				var o = r(203);
				var i = r(275);
				var u = r(276);
				var l = r(219);
				var d = r(246);
				var c = r(266);
				a(
					a.S +
						a.F *
							!r(277)(function(e) {
								Array.from(e);
							}),
					'Array',
					{
						from: function e(t) {
							var r = o(t);
							var a = 'function' == typeof this ? this : Array;
							var f = arguments.length;
							var s = f > 1 ? arguments[1] : void 0;
							var E = void 0 !== s;
							var p = 0;
							var v = c(r);
							var T, _, R, h;
							E && (s = n(s, f > 2 ? arguments[2] : void 0, 2));
							if (void 0 == v || (a == Array && u(v))) {
								T = l(r.length);
								for (_ = new a(T); T > p; p++) d(_, p, E ? s(r[p], p) : r[p]);
							} else
								for (h = v.call(r), _ = new a(); !(R = h.next()).done; p++)
									d(_, p, E ? i(h, s, [R.value, p], true) : R.value);
							_.length = p;
							return _;
						},
					}
				);
			},
			246: function(e, t, r) {
				'use strict';
				var n = r(183);
				var a = r(212);
				e.exports = function(e, t, r) {
					t in e ? n.f(e, t, a(0, r)) : (e[t] = r);
				};
			},
			247: function(e, t, r) {
				e.exports = r(248);
			},
			248: function(e, t, r) {
				r(214);
				r(189);
				e.exports = r(249);
			},
			249: function(e, t, r) {
				var n = r(220);
				var a = r(172)('iterator');
				var o = r(204);
				e.exports = r(27).isIterable = function(e) {
					var t = Object(e);
					return void 0 !== t[a] || '@@iterator' in t || o.hasOwnProperty(n(t));
				};
			},
			250: function(e, t) {
				function r() {
					throw new TypeError(
						'Invalid attempt to spread non-iterable instance'
					);
				}
				e.exports = r;
			},
			251: function(e, t, r) {
				'use strict';
				var n = r(169);
				var a = r(46);
				Object.defineProperty(t, '__esModule', { value: true });
				t.default = p;
				var o = a(r(61));
				var i = a(r(47));
				var u = a(r(48));
				var l = a(r(62));
				var d = a(r(63));
				var c = a(r(197));
				var f = a(r(202));
				var s = n(r(0));
				var E = r(114);
				function p(e, t, r) {
					if ('function' !== typeof e)
						throw new Error(
							'Expected reduceComponentsToState to be a function.'
						);
					if ('function' !== typeof t)
						throw new Error(
							'Expected handleStateChangeOnClient to be a function.'
						);
					if ('undefined' !== typeof r && 'function' !== typeof r)
						throw new Error(
							'Expected mapStateOnServer to either be undefined or a function.'
						);
					return function n(a) {
						if ('function' !== typeof a)
							throw new Error(
								'Expected WrappedComponent to be a React component.'
							);
						var p = new f.default();
						var v;
						function T(n) {
							v = e((0, c.default)(p));
							_.canUseDOM ? t.call(n, v) : r && (v = r(v));
						}
						var _ = (function(e) {
							(0, d.default)(t, e);
							function t() {
								(0, i.default)(this, t);
								return (0, l.default)(
									this,
									(t.__proto__ || (0, o.default)(t)).apply(this, arguments)
								);
							}
							(0, u.default)(
								t,
								[
									{
										key: 'componentWillMount',
										value: function e() {
											p.add(this);
											T(this);
										},
									},
									{
										key: 'componentDidUpdate',
										value: function e() {
											T(this);
										},
									},
									{
										key: 'componentWillUnmount',
										value: function e() {
											p.delete(this);
											T(this);
										},
									},
									{
										key: 'render',
										value: function e() {
											return s.default.createElement(
												a,
												null,
												this.props.children
											);
										},
									},
								],
								[
									{
										key: 'peek',
										value: function e() {
											return v;
										},
									},
									{
										key: 'rewind',
										value: function e() {
											if (t.canUseDOM)
												throw new Error(
													'You may only call rewind() on the server. Call peek() to read the current state.'
												);
											var r = v;
											v = void 0;
											p.clear();
											return r;
										},
									},
								]
							);
							return t;
						})(s.Component);
						Object.defineProperty(_, 'displayName', {
							configurable: true,
							enumerable: true,
							writable: true,
							value: 'SideEffect('.concat((0, E.getDisplayName)(a), ')'),
						});
						Object.defineProperty(_, 'contextTypes', {
							configurable: true,
							enumerable: true,
							writable: true,
							value: a.contextTypes,
						});
						Object.defineProperty(_, 'canUseDOM', {
							configurable: true,
							enumerable: true,
							writable: true,
							value: 'undefined' !== typeof window,
						});
						return _;
					};
				}
			},
			704: function(e, t, r) {
				e.exports = r(705);
			},
			705: function(e, t, r) {
				e.exports = r(706);
			},
			706: function(e, t, r) {
				e.exports = r(707);
			},
			707: function(e, t, r) {
				'use strict';
				var n = r(46);
				Object.defineProperty(t, '__esModule', { value: true });
				t.default = void 0;
				var a = n(r(61));
				var o = n(r(47));
				var i = n(r(48));
				var u = n(r(62));
				var l = n(r(63));
				var d = n(r(0));
				var c = n(r(1));
				var f = n(r(708));
				var s = n(r(240));
				var E = (function(e) {
					(0, l.default)(t, e);
					function t() {
						(0, o.default)(this, t);
						return (0, u.default)(
							this,
							(t.__proto__ || (0, a.default)(t)).apply(this, arguments)
						);
					}
					(0, i.default)(
						t,
						[
							{
								key: 'render',
								value: function e() {
									var t = this.props.statusCode;
									var r =
										404 === t
											? 'This page could not be found'
											: f.default[t] || 'An unexpected error has occurred';
									return d.default.createElement(
										'div',
										{ style: p.error },
										d.default.createElement(
											s.default,
											null,
											d.default.createElement('meta', {
												name: 'viewport',
												content: 'width=device-width, initial-scale=1.0',
											})
										),
										d.default.createElement(
											'div',
											null,
											d.default.createElement('style', {
												dangerouslySetInnerHTML: {
													__html: 'body { margin: 0 }',
												},
											}),
											t
												? d.default.createElement('h1', { style: p.h1 }, t)
												: null,
											d.default.createElement(
												'div',
												{ style: p.desc },
												d.default.createElement('h2', { style: p.h2 }, r, '.')
											)
										)
									);
								},
							},
						],
						[
							{
								key: 'getInitialProps',
								value: function e(t) {
									var r = t.res,
										n = t.err;
									var a = r ? r.statusCode : n ? n.statusCode : null;
									return { statusCode: a };
								},
							},
						]
					);
					return t;
				})(d.default.Component);
				t.default = E;
				Object.defineProperty(E, 'propTypes', {
					configurable: true,
					enumerable: true,
					writable: true,
					value: { statusCode: c.default.number },
				});
				var p = {
					error: {
						color: '#000',
						background: '#fff',
						fontFamily:
							'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
						height: '100vh',
						textAlign: 'center',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					},
					desc: {
						display: 'inline-block',
						textAlign: 'left',
						lineHeight: '49px',
						height: '49px',
						verticalAlign: 'middle',
					},
					h1: {
						display: 'inline-block',
						borderRight: '1px solid rgba(0, 0, 0,.3)',
						margin: 0,
						marginRight: '20px',
						padding: '10px 23px 10px 0',
						fontSize: '24px',
						fontWeight: 500,
						verticalAlign: 'top',
					},
					h2: {
						fontSize: '14px',
						fontWeight: 'normal',
						lineHeight: 'inherit',
						margin: 0,
						padding: 0,
					},
				};
			},
			708: function(e, t) {
				e.exports = {
					100: 'Continue',
					101: 'Switching Protocols',
					200: 'OK',
					201: 'Created',
					202: 'Accepted',
					203: 'Non-Authoritative Information',
					204: 'No Content',
					205: 'Reset Content',
					206: 'Partial Content',
					207: 'Multi Status',
					208: 'Already Reported',
					226: 'IM Used',
					300: 'Multiple Choices',
					301: 'Moved Permanently',
					302: 'Found',
					303: 'See Other',
					304: 'Not Modified',
					305: 'Use Proxy',
					306: 'Switch Proxy',
					307: 'Temporary Redirect',
					308: 'Permanent Redirect',
					400: 'Bad Request',
					401: 'Unauthorized',
					402: 'Payment Required',
					403: 'Forbidden',
					404: 'Not Found',
					405: 'Method Not Allowed',
					406: 'Not Acceptable',
					407: 'Proxy Authentication Required',
					408: 'Request Time-out',
					409: 'Conflict',
					410: 'Gone',
					411: 'Length Required',
					412: 'Precondition Failed',
					413: 'Request Entity Too Large',
					414: 'Request-URI Too Large',
					415: 'Unsupported Media Type',
					416: 'Requested Range not Satisfiable',
					417: 'Expectation Failed',
					418: "I'm a teapot",
					421: 'Misdirected Request',
					422: 'Unprocessable Entity',
					423: 'Locked',
					424: 'Failed Dependency',
					426: 'Upgrade Required',
					428: 'Precondition Required',
					429: 'Too Many Requests',
					431: 'Request Header Fields Too Large',
					451: 'Unavailable For Legal Reasons',
					500: 'Internal Server Error',
					501: 'Not Implemented',
					502: 'Bad Gateway',
					503: 'Service Unavailable',
					504: 'Gateway Time-out',
					505: 'HTTP Version not Supported',
					506: 'Variant Also Negotiates',
					507: 'Insufficient Storage',
					508: 'Loop Detected',
					510: 'Not Extended',
					511: 'Network Authentication Required',
					CONTINUE: 100,
					SWITCHING_PROTOCOLS: 101,
					OK: 200,
					CREATED: 201,
					ACCEPTED: 202,
					NON_AUTHORITATIVE_INFORMATION: 203,
					NO_CONTENT: 204,
					RESET_CONTENT: 205,
					PARTIAL_CONTENT: 206,
					MULTI_STATUS: 207,
					ALREADY_REPORTED: 208,
					IM_USED: 226,
					MULTIPLE_CHOICES: 300,
					MOVED_PERMANENTLY: 301,
					FOUND: 302,
					SEE_OTHER: 303,
					NOT_MODIFIED: 304,
					USE_PROXY: 305,
					SWITCH_PROXY: 306,
					TEMPORARY_REDIRECT: 307,
					PERMANENT_REDIRECT: 308,
					BAD_REQUEST: 400,
					UNAUTHORIZED: 401,
					PAYMENT_REQUIRED: 402,
					FORBIDDEN: 403,
					NOT_FOUND: 404,
					METHOD_NOT_ALLOWED: 405,
					NOT_ACCEPTABLE: 406,
					PROXY_AUTHENTICATION_REQUIRED: 407,
					REQUEST_TIMEOUT: 408,
					CONFLICT: 409,
					GONE: 410,
					LENGTH_REQUIRED: 411,
					PRECONDITION_FAILED: 412,
					REQUEST_ENTITY_TOO_LARGE: 413,
					REQUEST_URI_TOO_LONG: 414,
					UNSUPPORTED_MEDIA_TYPE: 415,
					REQUESTED_RANGE_NOT_SATISFIABLE: 416,
					EXPECTATION_FAILED: 417,
					IM_A_TEAPOT: 418,
					MISDIRECTED_REQUEST: 421,
					UNPROCESSABLE_ENTITY: 422,
					UPGRADE_REQUIRED: 426,
					PRECONDITION_REQUIRED: 428,
					LOCKED: 423,
					FAILED_DEPENDENCY: 424,
					TOO_MANY_REQUESTS: 429,
					REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
					UNAVAILABLE_FOR_LEGAL_REASONS: 451,
					INTERNAL_SERVER_ERROR: 500,
					NOT_IMPLEMENTED: 501,
					BAD_GATEWAY: 502,
					SERVICE_UNAVAILABLE: 503,
					GATEWAY_TIMEOUT: 504,
					HTTP_VERSION_NOT_SUPPORTED: 505,
					VARIANT_ALSO_NEGOTIATES: 506,
					INSUFFICIENT_STORAGE: 507,
					LOOP_DETECTED: 508,
					NOT_EXTENDED: 510,
					NETWORK_AUTHENTICATION_REQUIRED: 511,
				};
			},
		},
		[704]
	);
	return { page: e.default };
});
