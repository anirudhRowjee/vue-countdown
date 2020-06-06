(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-countdown"] = factory();
	else
		root["vue-countdown"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_easytimer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_easytimer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_easytimer__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        seconds: Number,
        countdown: Boolean,
        message: String,
        date: String,
        units: Array,
        start: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            timer: null,
            time: '',
            label: this.message ? this.message : 'Time\'s up!',
            timerUnits: this.units ? this.units : ['hours', 'minutes', 'seconds'],
            timerOptions: {}
        };
    },


    computed: {
        parsedDate: function parsedDate() {
            if (!this.date) {
                return false;
            }

            return Date.parse(this.date);
        }
    },

    created: function created() {
        this.timer = new __WEBPACK_IMPORTED_MODULE_0_easytimer___default.a();

        var parsedDate = this.parsedDate;
        var now = Date.now();

        var seconds = this.seconds;
        this.timerOptions = {
            countdown: true
        };

        if (!parsedDate && this.date) {
            throw new Error('Please provide valid date');
        }

        if (now < parsedDate) {
            seconds = (parsedDate - now) / 1000;
        }

        this.timerOptions.startValues = {
            seconds: seconds
        };

        if (this.start) {
            this.timer.start(this.timerOptions);
        }

        this.time = this.timer.getTimeValues().toString(this.timerUnits);

        this.timer.addEventListener('secondsUpdated', this.onTimeChange.bind(this));
        this.timer.addEventListener('targetAchieved', this.onTimeExpire.bind(this));
    },


    methods: {
        onTimeChange: function onTimeChange() {
            this.time = this.timer.getTimeValues().toString(this.timerUnits);
            this.$emit('time-changed', this.time);
        },
        onTimeExpire: function onTimeExpire() {
            this.$emit('time-expire');

            this.time = this.label;
        }
    },

    watch: {
        start: function start(newValue) {
            if (newValue) {
                this.timer.start(this.timerOptions);
            } else {
                this.timer.stop();
            }
        }
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_countdown_vue__ = __webpack_require__(0);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00a14abe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_countdown_vue__ = __webpack_require__(5);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_countdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00a14abe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_countdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/vue-countdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00a14abe", Component.options)
  } else {
    hotAPI.reload("data-v-00a14abe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license easytimer.js v1.0
 * Created by Albert González
 * Licensed under The MIT License.
 *
* @class Timer
*/

var module;

var Timer = (

    function (module) {
        'use strict';

        /*
         * Polyfill por IE9, IE10 and IE11
         */
        var CustomEvent = typeof window !== 'undefined' ? window.CustomEvent : undefined;

        if (typeof window !== 'undefined' && typeof CustomEvent !== "function" ) {
            CustomEvent = function ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            };

            CustomEvent.prototype = window.Event.prototype;

            window.CustomEvent = CustomEvent;
        }

        /*
         * General functions, variables and constants
         */
        var SECOND_TENTHS_PER_SECOND = 10,
            SECONDS_PER_MINUTE = 60,
            SECOND_TENTHS_PER_MINUTE = 600,
            MINUTES_PER_HOUR = 60,
            SECONDS_PER_HOUR = 3600,
            SECOND_TENTHS_PER_HOUR = 36000,
            HOURS_PER_DAY = 24,

            SECOND_TENTHS_POSITION = 0,
            SECONDS_POSITION = 1,
            MINUTES_POSITION = 2,
            HOURS_POSITION = 3,
            DAYS_POSITION = 4,

            SECOND_TENTHS = 'secondTenths',
            SECONDS = 'seconds',
            MINUTES = 'minutes',
            HOURS = 'hours',
            DAYS = 'days',

            unitsInMilliseconds = {
                secondTenths: 100,
                seconds: 1000,
                minutes: 60000,
                hours: 3600000,
                days: 86400000
            },

            events = module && module.exports? __webpack_require__(4) : undefined,

            prototype;

        function hasDOM() {
            return typeof document !== 'undefined';
        }

        function hasEventEmitter() {
            return events;
        }

        function mod(number, module) {
            return ((number % module) + module) % module;
        }

        function leftPadding(string, padLength, character) {
            var i,
                characters = '';

            for (i = 0; i < padLength; i = i + 1) {
                characters += String(character);
            }

            return (characters + string).slice(-characters.length);
        }

        /**
         * [TimeCounter Stores the units counted by the timer]
         */
        function TimeCounter() {
            this.secondTenths = 0;
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
            this.days = 0;

            /**
             * [toString convert the counted values on a string]
             * @param  {[array]} units           [array with the units to display]
             * @param  {[string]} separator       [separator of the units]
             * @param  {[integer]} leftZeroPadding [number of zero padding]
             * @return {[string]}                 [result string]
             */
            this.toString = function(units, separator, leftZeroPadding) {
                units = units || ['hours', 'minutes', 'seconds'];
                separator = separator || ':';
                leftZeroPadding = leftZeroPadding || 2;

                var stringTime,
                    arrayTime = [],
                    i,
                    zeros = '';

                for (i = 0; i < leftZeroPadding; i = i + 1) {
                    zeros += '0';
                }

                for (i = 0; i < units.length; i = i + 1) {
                    if (this[units[i]] !== undefined) {
                        arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, '0'));
                    }
                }
                stringTime = arrayTime.join(separator);

                return stringTime;
            };
        }

        /**
         * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.
         * Can update time values with different time intervals: tenth of seconds,
         * seconds, minutes and hours.]
         */
        function Timer() {

            /*
             * PRIVATE Variables and Functions
             */
            var counters = new TimeCounter(),
                totalCounters =new TimeCounter(),

                intervalId,
                eventEmitter = hasDOM()? document.createElement('span') :
                    hasEventEmitter()? new events.EventEmitter() : undefined,
                running = false,
                paused = false,
                precision,
                valueToAdd,
                customCallback,
                timerConfig = {},
                target,
                startValues,
                countdown;

            function isCountdownTimer() {
                return timerConfig.countdown;
            }

            function updateCounters(counter, value) {
                counters[counter] += value;
                totalCounters[counter] += value;
            }

            function updateDays(value) {
                updateCounters(DAYS, value);

                dispatchEvent('daysUpdated');
            }

            function updateHours(value) {
                updateCounters(HOURS, value);

                counters.hours = mod(counters.hours, HOURS_PER_DAY);

                if ((isCountdownTimer() && counters.hours === HOURS_PER_DAY - 1) ||
                        (!isCountdownTimer() && counters.hours === 0)) {
                    updateDays(value);
                }

                if (precision === HOURS) {
                    totalCounters[MINUTES] += isCountdownTimer() ? -MINUTES_PER_HOUR : MINUTES_PER_HOUR;
                    totalCounters[SECONDS] += isCountdownTimer() ? -SECONDS_PER_HOUR : SECONDS_PER_HOUR;
                    totalCounters[SECOND_TENTHS] += isCountdownTimer() ? -SECOND_TENTHS_PER_HOUR : SECOND_TENTHS_PER_HOUR;
                }

                dispatchEvent('hoursUpdated');
            }

            function updateMinutes(value) {
                updateCounters(MINUTES, value);

                counters.minutes = mod(counters.minutes, MINUTES_PER_HOUR);

                if ((isCountdownTimer() && counters.minutes === MINUTES_PER_HOUR - 1) ||
                    (!isCountdownTimer() && counters.minutes === 0)) {
                    updateHours(value);
                }

                if (precision === MINUTES) {
                    totalCounters[SECONDS] += isCountdownTimer() ? -SECONDS_PER_MINUTE : SECONDS_PER_MINUTE;
                    totalCounters[SECOND_TENTHS] += isCountdownTimer() ? -SECOND_TENTHS_PER_MINUTE : SECOND_TENTHS_PER_MINUTE;
                }

                dispatchEvent('minutesUpdated');
            }

            function updateSeconds(value) {
                updateCounters(SECONDS, value);

                counters.seconds = mod(counters.seconds, SECONDS_PER_MINUTE);

                if ((isCountdownTimer() && counters.seconds === SECONDS_PER_MINUTE - 1) ||
                    (!isCountdownTimer() && counters.seconds === 0)) {
                    updateMinutes(value);
                }

                if (precision === SECONDS) {
                    totalCounters[SECOND_TENTHS] += isCountdownTimer() ? -SECOND_TENTHS_PER_SECOND : SECOND_TENTHS_PER_SECOND;
                }

                dispatchEvent('secondsUpdated');
            }

            function updateSecondTenths(value) {
                updateCounters(SECOND_TENTHS, value);

                counters.secondTenths = mod(counters.secondTenths, SECOND_TENTHS_PER_SECOND);

                if ((isCountdownTimer() && counters.secondTenths === SECOND_TENTHS_PER_SECOND - 1) ||
                    (!isCountdownTimer() && counters.secondTenths === 0)) {
                    updateSeconds(value);
                }

                dispatchEvent('secondTenthsUpdated');
            }

            function stopTimer() {
                clearInterval(intervalId);
                intervalId = undefined;
                running = false;
                paused = false;
            }

            function startTimer() {
                var callback,
                    interval = unitsInMilliseconds[precision];

                switch (precision) {
                case DAYS:
                    callback = updateDays;
                    break;
                case HOURS:
                    callback = updateHours;
                    break;
                case MINUTES:
                    callback =  updateMinutes;
                    break;
                case SECOND_TENTHS:
                    callback =  updateSecondTenths;
                    break;
                default:
                    callback = updateSeconds;
                }

                intervalId = setInterval(
                    function () {
                        callback(valueToAdd);
                        customCallback(counters);
                        if (isTargetAchieved()) {
                            dispatchEvent('targetAchieved');
                            stop();
                        }
                    },
                    interval
                );

                running = true;
                paused = false;
            }

            function isRegularTimerTargetAchieved() {
                return counters.hours > target[HOURS_POSITION]
                    || (counters.hours === target[HOURS_POSITION] && (counters.minutes > target[MINUTES_POSITION]
                        || (counters.minutes === target[MINUTES_POSITION]) && counters.seconds >= target[SECONDS_POSITION]));
            }

            function isCountdownTimerTargetAchieved() {
                return counters.hours < target[HOURS_POSITION]
                    || (counters.hours === target[HOURS_POSITION] && (counters.minutes < target[MINUTES_POSITION]
                    || (counters.minutes === target[MINUTES_POSITION] && (counters.seconds < target[SECONDS_POSITION]
                    || (counters.seconds === target[SECONDS_POSITION] && (counters.secondTenths < target[SECOND_TENTHS_POSITION]
                    || counters.secondTenths === target[SECOND_TENTHS_POSITION] ))))));
            }

            function isTargetAchieved() {
                return target instanceof Array &&
                    (timerConfig.countdown && isCountdownTimerTargetAchieved() || !timerConfig.countdown && isRegularTimerTargetAchieved());
            }

            function resetCounters() {
                for (var counter in counters) {
                    if(counters.hasOwnProperty(counter) && typeof counters[counter] === 'number'){
                        counters[counter] = 0;
                    }
                }

                for (var counter in totalCounters) {
                    if(totalCounters.hasOwnProperty(counter) && typeof totalCounters[counter] === 'number'){
                        totalCounters[counter] = 0;
                    }
                }
            }

            function setParams(params) {
                precision = params && typeof params.precision === 'string' ? params.precision : SECONDS;
                customCallback = params && typeof params.callback === 'function'? params.callback : function () {};
                valueToAdd = params && params.countdown === true? -1 : 1;
                countdown = params && params.countdown == true;
                if (params && (typeof params.target === 'object')) { setTarget(params.target)};
                if (params && (typeof params.startValues === 'object')) { setStartValues(params.startValues)};
                target = target || !countdown? target : [0, 0, 0, 0, 0];

                timerConfig = {
                    precision: precision,
                    callback: customCallback,
                    countdown: typeof params === 'object' && params.countdown == true,
                    target: target,
                    startValues: startValues
                }
            }

            function configInputValues(inputValues) {
                var secondTenths, seconds, minutes, hours, days, values;
                if (typeof inputValues === 'object') {
                    if (inputValues instanceof Array) {
                        if (inputValues.length != 5) {
                            throw new Error('Array size not valid');
                        }
                        values = inputValues;
                    } else {
                        values = [
                            inputValues.secondTenths || 0, inputValues.seconds || 0,
                            inputValues.minutes || 0, inputValues.hours || 0,
                            inputValues.days || 0
                        ];
                    }
                }

                for (var i = 0; i < inputValues.length; i = i + 1) {
                    if (inputValues[i] < 0) {
                        inputValues[i] = 0;
                    }
                }

                secondTenths = values[SECOND_TENTHS_POSITION];
                seconds = values[SECONDS_POSITION] + Math.floor(secondTenths / SECOND_TENTHS_PER_SECOND);
                minutes = values[MINUTES_POSITION] + Math.floor(seconds / SECONDS_PER_MINUTE);
                hours = values[HOURS_POSITION] + Math.floor(minutes / MINUTES_PER_HOUR);
                days = values[DAYS_POSITION] +  Math.floor(hours / HOURS_PER_DAY);

                values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;
                values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;
                values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;
                values[HOURS_POSITION] = hours % HOURS_PER_DAY;
                values[DAYS_POSITION] = days;

                return values;
            }

            function setTarget(inputTarget) {
                target = configInputValues(inputTarget);

            }

            function setStartValues(inputStartValues) {
                startValues = configInputValues(inputStartValues);
                counters.secondTenths = startValues[SECOND_TENTHS_POSITION];
                counters.seconds = startValues[SECONDS_POSITION];
                counters.minutes = startValues[MINUTES_POSITION];
                counters.hours = startValues[HOURS_POSITION]
                counters.days = startValues[DAYS_POSITION]

                totalCounters.days = counters.days;
                totalCounters.hours = totalCounters.days * HOURS_PER_DAY + counters.hours;
                totalCounters.minutes = totalCounters.hours * MINUTES_PER_HOUR + counters.minutes;
                totalCounters.seconds = totalCounters.minutes * SECONDS_PER_MINUTE + counters.seconds;
                totalCounters.secondTenths = totalCounters.seconds * SECOND_TENTHS_PER_SECOND + counters.secondTenths;
            }

            /*
             * PUBLIC functions
             */

            /**
             * [stop stops the timer and resets the counters. Dispatch stopped event]
             */
            function stop() {
                stopTimer();
                resetCounters();
                dispatchEvent('stopped');
            }

            /**
             * [start starts the timer configured by the params object. Dispatch started event]
             * @param  {[object]} params [Configuration parameters]
             */
            function start(params) {
                if (this.isRunning()) {
                    throw new Error('Timer already running');
                }

                if (!this.isPaused()) {
                    setParams(params);
                }
                if (!isTargetAchieved()) {
                    startTimer();
                    dispatchEvent('started');
                }
            }

            /**
             * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.
             * Dispatch paused event]
             * @return {[type]} [description]
             */
            function pause() {
                stopTimer();
                paused = true;
                dispatchEvent('paused');
            }

            /**
             * [addEventListener Adds event listener to the timer]
             * @param {[string]} event      [event to listen]
             * @param {[function]} listener   [the event listener function]
             */
            function addEventListener(event, listener) {
                if (hasDOM()) {
                    eventEmitter.addEventListener(event, listener);
                } else if (hasEventEmitter()) {
                    eventEmitter.on(event, listener)
                }
            }

            /**
             * [removeEventListener Removes event listener to the timer]
             * @param  {[string]} event    [event to remove listener]
             * @param  {[function]} listener [listener to remove]
             */
            function removeEventListener(event, listener) {
                if (hasDOM()) {
                    eventEmitter.removeEventListener(event, listener);
                } else if (hasEventEmitter()) {
                    eventEmitter.removeListener(event, listener);
                }
            }

            /**
             * [dispatchEvent dispatchs an event]
             * @param  {string} event [event to dispatch]
             */
            function dispatchEvent(event) {
                if (hasDOM()) {
                    eventEmitter.dispatchEvent(new CustomEvent(event));
                } else if (hasEventEmitter()) {
                    eventEmitter.emit(event)
                }
            }

            /**
             * [isRunning return true if the timer is running]
             * @return {Boolean}
             */
            function isRunning() {
                return running;
            }

            /**
             * [isPaused returns true if the timer is paused]
             * @return {Boolean}
             */
            function isPaused() {
                return paused;
            }

            /**
             * [getTimeValues returns the counter with the current timer values]
             * @return {[TimeCounter]}
             */
            function getTimeValues() {
                return counters;
            };

            /**
             * [getTotalTimeValues returns the counter with the current timer total values]
             * @return {[TimeCounter]}
             */
            function getTotalTimeValues() {
                return totalCounters;
            };

            /**
             * [getConfig returns the configuration paramameters]
             * @return {[type]}
             */
            function getConfig () {
                return timerConfig;
            };

            /**
             * Public API
             * Definition of Timer instance public functions
             */
            if (typeof this !== 'undefined') {
                this.start= start;

                this.pause = pause;

                this.stop = stop;

                this.isRunning = isRunning;

                this.isPaused = isPaused;

                this.getTimeValues = getTimeValues;

                this.getTotalTimeValues = getTotalTimeValues;

                this.getConfig = getConfig;

                this.addEventListener = addEventListener

                this.removeEventListener = removeEventListener;
            }

        };

        if (module && module.exports) {
            module.exports = Timer;
        } else if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return Timer;
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }

        return  Timer;
    }(module)
);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vue-countdown" }, [
    _c("div", { staticClass: "vue-countdown--time" }, [
      _vm._v("\n        " + _vm._s(_vm.time) + "\n    ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00a14abe", esExports)
  }
}

/***/ })
/******/ ]);
});