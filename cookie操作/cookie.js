var cookie = {
	set: function(name, value, expires, path, domain) {
		if (typeof expires === "undefined") {
			expires = new Date(new Date().getTime() + (1000 * 60 * 60 * 24));
		}
		document.cookie = name + "=" + escape(value) + ((expires) ? ";expires=" + expires.toGMTString() : "") + ((path) ? ";path=" + path : ";path=/") + ((domain) ? ";domain=" + domain : "");
	},
	get: function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) {
			return unescape(arr[2]);
		}
		return null;
	},
	clear: function(name, path, domain) {
		if (this.get(name)) {
			document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
		}
	}
};