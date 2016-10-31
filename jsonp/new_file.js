(function() {
	//调用方式： jsonp(www.baidu.com,{key:value},jsonpcallback,callback);
	this.jsonp = function(url, data, jsonpcallback, callback) {

		var cbName = 'cb' + count++;
		var callbackName = 'window.jsonp.' + cbName;
		window.jsonp[cbName] = function(data) {
			try {
				callback(data);
			} finally {
				script.parentNode.removeChild(script);
				delete window.jsonp[cbName];
			}
		}
		var script = document.createElement('script');
		var src = tools.padStringToUrl(url, data);
		src = tools.padStringToUrl(src,jsonpcallback+'='+callbackName)
		console.log(src)
		script.src = src;
		script.async = 'async';
		script.type = 'type/javascript';
		document.documentElement.appendChild(script);

	};
		var count = 1;
	var tools ={
		//将数据拼接到url后面
		padStringToUrl: function(url,data) {
			if(!data) {
				return url;
			};
			var reg = /\?/;
			if(reg.test(url)) {
				url = url + '&' + this.encodeToUrlString(data);
			} else {
				url = url + '?' + this.encodeToUrlString(data)
			}
			 
			return url;
			

		},
		//将数据转为querystring格式
		//{key:value}===> key=value
		encodeToUrlString: function(data) {
			if(typeof data === 'string') {
				return data;
			};
			if(!data) {
				return '';
			}
			var ary = [];
			for(var key in data) {
				if(!data.hasOwnProperty(key)) continue;
				ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			return ary.join('&');
		}

	}

})()
