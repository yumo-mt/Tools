(function() {
	/**http://suggestion.baidu.com/su?wd=a&cb=window.jsonp.cb2     * jsonp请求
	 * @param {string} url jsonp地址
	 * @param {*} data 发送的数据
	 * @param {string} jsonpcallback jsonpcallback
	 * @param {Function} callback 回调函数
	 */
	//http://suggestion.baidu.com/su?wd=a&cb=window.jsonp.cb2
	this.jsonp = function(url, data, jsonpcallback, callback) {
		// 回调函数名,因为多次调用，名字最好不重复，避免覆盖问题，但是同时每次更改函数名的时候，请求的url地址中的函数名称也得改
		var cbName = 'cb' + counter++; //cb1 cb2 cb3
		// 构造全局函数名 放到jsonpcallback后面的
		var callbackName = 'window.jsonp.' + cbName;
		//window.jsonp.cb1
		//window.jsonp.cb2
		// 根据全局函数名 定义一个全局函数
		window.jsonp[cbName] = function(data) {
			try {
				callback(data);
			} finally {
				script.parentNode.removeChild(script); //为了避免占用内存，每次完成之后就把script标签删除掉就好了
				delete window.jsonp[cbName]; //同理将全局函数也一块删除掉
			}
		};
		// 往url后拼接参数
		var src = tools.padStringToURL(url, data);
		// 往url后拼接jsonpcallback
		src = tools.padStringToURL(src, jsonpcallback + '=' + callbackName);
		// 动态生成script标签并添加到html中
		var script = document.createElement('script');
		script.async = 'async';
		script.type = 'text/javascript';
		script.src = src;
		console.log(src)
		document.documentElement.appendChild(script);
	};

	// 计数器 每次调用jsonp方法 都累加1
	var counter = 1;

	var tools = {
		//将参数拼接到url之后
		padStringToURL: function(url, param) {
			param = this.encodeToURIString(param);
			if(!param) {
				return url;
			}
			return url + (/\?/.test(url) ? '&' : '?') + param;
		},
		//将数据转为querystring的格式
		encodeToURIString: function(data) {
			if(!data) {
				return '';
			}
			if(typeof data === 'string') {
				return data;
			}
			var arr = [];
			for(var n in data) {
				if(!data.hasOwnProperty(n)) continue;
				arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
			}
			return arr.join('&');
		}
	}
})();