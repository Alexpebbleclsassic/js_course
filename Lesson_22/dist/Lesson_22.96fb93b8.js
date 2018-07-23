// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationApi = function () {
	function LocationApi() {
		_classCallCheck(this, LocationApi);
	}

	_createClass(LocationApi, [{
		key: "getMyIp",
		value: function getMyIp() {
			return fetch("https://api.ipify.org?format=json").then(function (res) {
				if (res.status === 200) {
					return res.json();
				}

				return Promise.reject(res.status);
			});
		}
	}, {
		key: "getMyLocation",
		value: function getMyLocation(my_ip) {
			return fetch("https://freegeoip.net/json/" + my_ip).then(function (res) {
				if (res.status === 200) {
					return res.json();
				}

				return Promise.reject(res.status);
			});
		}
	}]);

	return LocationApi;
}();

exports.default = LocationApi;
},{}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = function () {
	function Dom() {
		_classCallCheck(this, Dom);

		this.preloader = document.getElementsByClassName("preloader");
		this.locationBlock = document.getElementById("location_block");

		this.country = document.getElementById("country");
		this.region = document.getElementById("region");
		this.city = document.getElementById("city");
		this.latitude = document.getElementById("latitude");
		this.longitude = document.getElementById("longitude");
	}

	_createClass(Dom, [{
		key: "showPreloader",
		value: function showPreloader() {
			var _this = this;

			setTimeout(function () {
				for (var i = 0; i < _this.preloader.length; i += 1) {
					_this.preloader[i].classList.remove("done");
				}
			}, 500);
		}
	}, {
		key: "hidePreloader",
		value: function hidePreloader() {
			var _this2 = this;

			setTimeout(function () {
				for (var i = 0; i < _this2.preloader.length; i += 1) {
					_this2.preloader[i].classList.add("done");
				}
			}, 500);
		}
	}, {
		key: "setCoordinates",
		value: function setCoordinates(coordinates) {
			this.country.innerHTML = coordinates.country_name;
			this.region.innerHTML = coordinates.region_name;
			this.city.innerHTML = coordinates.city;
			this.latitude.innerHTML = coordinates.latitude;
			this.longitude.innerHTML = coordinates.longitude;

			this.locationBlock.classList.remove("done");
		}
	}]);

	return Dom;
}();

exports.default = Dom;
},{}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weather = function () {
    function Weather() {
        _classCallCheck(this, Weather);

        this.weatherBlock = document.getElementById("weather_block");
        this.weatherIcon = document.getElementById("weather_icon");
        this.weatherImg = document.createElement("img");
        this.description = document.getElementById("description");
        this.temperature = document.getElementById("temperature");
        this.maxTemp = document.getElementById("max_temp");
        this.mixTemp = document.getElementById("min_temp");
        this.humidity = document.getElementById("humidity");
        this.pressure = document.getElementById("pressure");
        this.winds = document.getElementById("wind_speed");
    }

    _createClass(Weather, [{
        key: "getWeather",
        value: function getWeather(city, api_key) {
            this.city = city;
            return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&appid=" + api_key).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }

                return Promise.reject(res.status);
            });
        }
    }, {
        key: "setWeather",
        value: function setWeather(weatherData) {
            this.weatherBlock.classList.remove("done");
            this.iconNumber = weatherData.weather[0].icon;
            this.path = "http://openweathermap.org/img/w/" + this.iconNumber + ".png";
            this.weatherImg.setAttribute("src", this.path);
            this.weatherIcon.appendChild(this.weatherImg);

            this.description.innerHTML = weatherData.weather[0].description;
            this.temperature.innerHTML = weatherData.main.temp + " ºC";
            this.maxTemp.innerHTML = weatherData.main.temp_max + " ºC";
            this.mixTemp.innerHTML = weatherData.main.temp_min + " ºC";
            this.humidity.innerHTML = weatherData.main.humidity + " %";
            this.pressure.innerHTML = weatherData.main.pressure + " гПа";
            this.winds.innerHTML = weatherData.wind.speed + " м/с";
        }
    }]);

    return Weather;
}();

exports.default = Weather;
},{}],2:[function(require,module,exports) {
"use strict";

var _location_api = require("./location_api");

var _location_api2 = _interopRequireDefault(_location_api);

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _weather_api = require("./weather_api");

var _weather_api2 = _interopRequireDefault(_weather_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loc = new _location_api2.default();
var dom = new _dom2.default();
var weather = new _weather_api2.default();

var btnLocation = document.getElementById("location");
var btnWeather = document.getElementById("weather");
var api_key = "6ac809cc8b65c3df15d21efbd6e9c06a";

btnLocation.addEventListener("click", function () {
	dom.showPreloader();
	loc.getMyIp().then(function (res) {
		return loc.getMyLocation(res.ip);
	}).then(function (res) {
		return dom.setCoordinates(res);
	}).then(function (res) {
		return dom.hidePreloader();
	}).catch(function (error) {
		return console.log(error);
	});
});

btnWeather.addEventListener("click", function () {
	dom.showPreloader();
	var inputCity = document.getElementById("input_city");
	if (inputCity.value) {
		weather.getWeather(inputCity.value, api_key).then(function (res) {
			return weather.setWeather(res);
		}).then(function (res) {
			return dom.hidePreloader();
		}).catch(function (error) {
			return console.log(error);
		});
	} else {
		loc.getMyIp().then(function (res) {
			return loc.getMyLocation(res.ip);
		}).then(function (res) {
			return weather.getWeather(res.city, api_key);
		}).then(function (res) {
			return weather.setWeather(res);
		}).then(function (res) {
			return dom.hidePreloader();
		}).catch(function (error) {
			return console.log(error);
		});
	}
});
},{"./location_api":3,"./dom":4,"./weather_api":5}],6:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49882' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[6,2], null)
//# sourceMappingURL=/Lesson_22.96fb93b8.map