(function() {
	var s = {};
	(function() {
		var c = /#|$/;
		function e(d) {
			var f = d.search(c),
				a;
			a: {
				for (a = 0; 0 <= (a = d.indexOf('fmt', a)) && a < f; ) {
					var b = d.charCodeAt(a - 1);
					if (38 == b || 63 == b)
						if (
							((b = d.charCodeAt(a + 3)), !b || 61 == b || 38 == b || 35 == b)
						)
							break a;
					a += 4;
				}
				a = -1;
			}
			if (0 > a) return null;
			b = d.indexOf('&', a);
			if (0 > b || b > f) b = f;
			a += 4;
			return decodeURIComponent(d.substr(a, b - a).replace(/\+/g, ' '));
		}
		function k(d, f, a) {
			function b() {
				--p;
				if (0 >= p) {
					var a;
					(a = d.GooglebQhCsO) || (a = {});
					var b = a[f];
					b && (delete a[f], (a = b[0]) && a.call && a());
				}
			}
			for (var p = a.length + 1, l = 0; l < a.length; l++) {
				var g = e(a[l]),
					h = null;
				(1 != g && 2 != g) ||
					!(g = d.document.getElementById('goog_conv_iframe')) ||
					g.src ||
					(h = g);
				h || (h = new Image());
				h.onload = b;
				h.src = a[l];
			}
			b();
		}
		var m = ['ss_'],
			n = s || this;
		m[0] in n ||
			'undefined' == typeof n.execScript ||
			n.execScript('var ' + m[0]);
		for (var q; m.length && (q = m.shift()); ) {
			var r;
			if ((r = !m.length)) r = void 0 !== k;
			r
				? (n[q] = k)
				: n[q] && n[q] !== Object.prototype[q]
				? (n = n[q])
				: (n = n[q] = {});
		}
	}.call(this));
	s.ss_(window, 'OjE1NDY0ODg3MjkxMTA', [
		'https://www.google.com/pagead/1p-user-list/1008273247/?random\x3d1546488729110\x26cv\x3d9\x26fst\x3d1546488000000\x26num\x3d1\x26guid\x3dON\x26eid\x3d659255991\x26u_h\x3d1440\x26u_w\x3d3440\x26u_ah\x3d1400\x26u_aw\x3d3439\x26u_cd\x3d24\x26u_his\x3d11\x26u_tz\x3d-480\x26u_java\x3dfalse\x26u_nplug\x3d3\x26u_nmime\x3d4\x26data\x3dtitle%3DDiscover%20the%20world%27s%20best%20design%20practices%E2%80%94DesignBetter.Co%3Bpath%3D%2F%3Bname%3DDiscover%20the%20world%27s%20best%20design%20practices%E2%80%94DesignBetter.Co%3Breferrer%3D%3Bsearch%3D%3Burl%3Dhttps%3A%2F%2Fwww.designbetter.co\x26sendb\x3d1\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fwww.designbetter.co%2F\x26tiba\x3dDiscover%20the%20world%27s%20best%20design%20practices%E2%80%94DesignBetter.Co\x26async\x3d1\x26fmt\x3d3\x26crd\x3dCITQGw\x26cdct\x3d2\x26is_vtc\x3d1\x26random\x3d4176771174\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d0\x26ipr\x3dy',
	]);
})();
