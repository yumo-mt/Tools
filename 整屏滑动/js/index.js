var oBox = document.getElementById("box");
var List = document.getElementById("list");
var sTop = (document.documentElement.clientHeight || document.body.clientHeight);
var oDivs = oBox.getElementsByClassName('list-son');
var flag = true;
var temp = null;
var step = 0;
var spot = document.getElementById("spot");
var spotLis = spot.getElementsByTagName('li');
oBox.style.height = (document.documentElement.clientHeight || document.body.clientHeight) + 'px';
oBox.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + 'px';
for (var i = 0; i < oDivs.length; i++) {
	oDivs[i].style.height = (document.documentElement.clientHeight || document.body.clientHeight) + 'px';
	oDivs[i].style.width = (document.documentElement.clientWidth || document.body.clientWidth) + 'px';
}
list.style.height = oDivs[0].offsetHeight * oDivs.length + 'px';
addEvent(document, 'mousewheel',function(e){move(5,callback,e)});
addEvent(document, 'DOMMouseScroll',function(e){move(5,callback,e)});
var callback = function(){
	//console.log(step)
}
function move(num,callback,e) {
	num = num - 1;
	e = window.event||e;
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
	e.preventDefault ? e.preventDefault() : e.returnValue = false;
	if (!flag) return;
	temp = e.wheelDelta ? e.wheelDelta : e.detail;
	if (e.wheelDelta) {
		if (temp < 0) {
			step > -num ? step-- : step = -num;
		} else {
			step++;
			if (step > 0) {
				step = 0
			}
		}
	} else {
		if (temp > 0) {
			step > -num ? step-- : step = -num;
		} else {
			step++;
			if (step > 0) {
				step = 0
			}
		}
	}
	changSpot(step)
	animate(list, {
		top: step * sTop
	}, 600, 24, callback)
	 checkPosition(col)
	flag = false;
	setTimeout(function() {
		flag = true;
	}, 1000);
	 
};

function changSpot(n) {
	n = -n;
	for (var i = 0; i < spotLis.length; i++) {
		spotLis[i].className = ''
	};
	spotLis[n].className = 'tar';
}

function addEvent(obj, xEvent, fn) {
	if (obj.attachEvent) {
		obj.attachEvent('on' + xEvent, fn);
	} else {
		obj.addEventListener(xEvent, fn, false);
	}
};
