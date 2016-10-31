/**
 * Created by manster on 2016/5/28.
 QQ:181867715
 */
(function() {
	var Effect = {
		//匀速
		Linear: function(t, b, c, d) {
			return c * t / d + b;
		},
		//指数衰减的反弹缓动
		Bounce: {
			easeIn: function(t, b, c, d) {
				return c - Effect.Bounce.easeOut(d - t, 0, c, d) + b;
			},
			easeOut: function(t, b, c, d) {
				if ((t /= d) < (1 / 2.75)) {
					return c * (7.5625 * t * t) + b;
				} else if (t < (2 / 2.75)) {
					return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
				} else if (t < (2.5 / 2.75)) {
					return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
				} else {
					return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
				}
			},
			easeInOut: function(t, b, c, d) {
				if (t < d / 2) {
					return Effect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
				}
				return Effect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
			}
		},
		//二次方的缓动
		Quad: {
			easeIn: function(t, b, c, d) {
				return c * (t /= d) * t + b;
			},
			easeOut: function(t, b, c, d) {
				return -c * (t /= d) * (t - 2) + b;
			},
			easeInOut: function(t, b, c, d) {
				if ((t /= d / 2) < 1) {
					return c / 2 * t * t + b;
				}
				return -c / 2 * ((--t) * (t - 2) - 1) + b;
			}
		},
		//三次方的缓动
		Cubic: {
			easeIn: function(t, b, c, d) {
				return c * (t /= d) * t * t + b;
			},
			easeOut: function(t, b, c, d) {
				return c * ((t = t / d - 1) * t * t + 1) + b;
			},
			easeInOut: function(t, b, c, d) {
				if ((t /= d / 2) < 1) {
					return c / 2 * t * t * t + b;
				}
				return c / 2 * ((t -= 2) * t * t + 2) + b;
			}
		},
		//四次方的缓动
		Quart: {
			easeIn: function(t, b, c, d) {
				return c * (t /= d) * t * t * t + b;
			},
			easeOut: function(t, b, c, d) {
				return -c * ((t = t / d - 1) * t * t * t - 1) + b;
			},
			easeInOut: function(t, b, c, d) {
				if ((t /= d / 2) < 1) {
					return c / 2 * t * t * t * t + b;
				}
				return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
			}
		},
		//五次方的缓动
		Quint: {
			easeIn: function(t, b, c, d) {
				return c * (t /= d) * t * t * t * t + b;
			},
			easeOut: function(t, b, c, d) {
				return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
			},
			easeInOut: function(t, b, c, d) {
				if ((t /= d / 2) < 1) {
					return c / 2 * t * t * t * t * t + b;
				}
				return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
			}
		},
		//正弦曲线的缓动
		Sine: {
			easeIn: function(t, b, c, d) {
				return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
			},
			easeOut: function(t, b, c, d) {
				return c * Math.sin(t / d * (Math.PI / 2)) + b;
			},
			easeInOut: function(t, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
			}
		},
		//指数曲线的缓动
		Expo: {
			easeIn: function(t, b, c, d) {
				return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
			},
			easeOut: function(t, b, c, d) {
				return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
			},
			easeInOut: function(t, b, c, d) {
				if (t == 0) return b;
				if (t == d) return b + c;
				if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			}
		},
		//圆形曲线的缓动
		Circ: {
			easeIn: function(t, b, c, d) {
				return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
			},
			easeOut: function(t, b, c, d) {
				return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
			},
			easeInOut: function(t, b, c, d) {
				if ((t /= d / 2) < 1) {
					return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
				}
				return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
			}
		},
		//超过范围的三次方缓动
		Back: {
			easeIn: function(t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c * (t /= d) * t * ((s + 1) * t - s) + b;
			},
			easeOut: function(t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
			},
			easeInOut: function(t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				if ((t /= d / 2) < 1) {
					return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
				}
				return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
			}
		},
		//指数衰减的正弦曲线缓动
		Elastic: {
			easeIn: function(t, b, c, d, a, p) {
				if (t == 0) return b;
				if ((t /= d) == 1) return b + c;
				if (!p) p = d * .3;
				var s;
				!a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			},
			easeOut: function(t, b, c, d, a, p) {
				if (t == 0) return b;
				if ((t /= d) == 1) return b + c;
				if (!p) p = d * .3;
				var s;
				!a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
				return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
			},
			easeInOut: function(t, b, c, d, a, p) {
				if (t == 0) return b;
				if ((t /= d / 2) == 2) return b + c;
				if (!p) p = d * (.3 * 1.5);
				var s;
				!a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
				if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
			}
		}
	};

	function move(curEle, target, duration, effect, callback) {

		var tempEffect = Effect.Linear;
		var ary = ["Linear", "Bounce-easeIn", "Bounce-easeOut", "Bounce-easeInOut", "Quad-easeIn", "Quad-easeOut", "Quad-easeInOut", "Cubic-easeIn", "Cubic-easeOut", "Cubic-easeInOut", "Quart-easeIn", "Quart-easeOut", "Quart-easeInOut", "Quint-easeIn", "Quint-easeOut", "Quint-easeInOut", "Sine-easeIn", "Sine-easeOut", "Sine-easeInOut", "Expo-easeIn", "Expo-easeOut", "Expo-easeInOut", "Circ-easeIn", "Circ-easeOut", "Circ-easeInOut", "Back-easeIn", "Back-easeOut", "Back-easeInOut", "Elastic-easeIn", "Elastic-easeOut", "Elastic-easeInOut"];
		//当effect传的是数字的话，把数字当做数组的索引取值；
		if (typeof effect === 'number') {
			var str = ary[effect % ary.length];
			ary = str.split('-');
			tempEffect = ary.length >= 2 ? Effect[ary[0]][ary[1]] : Effect[ary[0]];
		} else if (effect instanceof Array) { //当effect传的是数组，进行拼接      传的格式['Bounce','easeInOut']
			var ary1 = effect[0];
			var ary2 = effect[1];
			tempEffect = effect.length >= 2 ? Effect[ary1][ary2] : Effect[ary1];
		} else if (typeof effect === 'function') { //当effect传的是函数，把它直接赋给callback；
			callback = effect;
		}
		//开启一个定时器前先关闭没用的定时器；
		clearInterval(curEle.timer);
		//要给公式传参的参数初始值；
		var time = null;
		var begin = {};
		var change = {};
		duration = duration || 600;
		//为了拿到begin的初始值和change的初始值
		for (var attr in target) {

			//求当前元素的begin初始值；
			begin[attr] = getCss(curEle, attr);
			change[attr] = target[attr] - begin[attr];

		}
		//开启定时器，进行时间的不断累加；
		curEle.timer = setInterval(function() {
			//当累加的事件超过总时间时
			if (time >= duration) {
				//让元素的样式直接到达目标值；
				setCss(curEle, target);
				//停止定时器，并且后面语句不再执行；
				clearInterval(curEle.timer);
				callback && callback.call(curEle);
				return;
			}
			//不满足条件时，继续时间累加；
			time += 10;
			//通过公式求出元素的最新的位置，并设置最新位置；
			for (var attr in change) {
				//				console.log(attr)

				var curPos = tempEffect(time, begin[attr], change[attr], duration);
				setCss(curEle, attr, curPos);
			}
		}, 10);

	}

	function getCss(curEle, attr) {
		var val = null;
		var reg = null;
		if ('getComputedStyle' in window) { //高级浏览器
			val = getComputedStyle(curEle, null)[attr];
		} else { //低级浏览器
			if (attr == 'opacity') { // alpha(opacity=10)
				val = curEle.currentStyle['filter'];
				reg = /^alpha\(opacity[=:](\d+(?:\.\d+))?\)$/i;
				return reg.test(val) ? reg.exec(val)[1] / 100 : 1;
			} else {
				val = curEle.currentStyle[attr];
			}

		}
		reg = /^([+-]?\d+(\.\d+)?)(px|pt|em|rem)?$/i; //-200px +200px 22.33px px pt em rem
		// reg=/^((\+|-)?\d+(\.\d+)?)(px|pt|em|rem)?$/i;
		return reg.test(val) ? parseFloat(val) : val;
	}

	function setCss(ele, attr, val) {
		if (attr == "opacity") {
			ele.style.opacity = val;
			ele.style.filter = "alpha(opacity=" + val * 100 + ")";
		} else {
			ele.style[attr] = val + "px";
		}
	}
	//把闭包中封装好的方法通过window，让外面可以调用；
	window.animate = move;
})();
