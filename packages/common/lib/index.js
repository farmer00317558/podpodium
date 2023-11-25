var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    "use strict";
    module2.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module2) {
    "use strict";
    var bind = require_bind();
    var toString4 = Object.prototype.toString;
    function isArray5(val) {
      return toString4.call(val) === "[object Array]";
    }
    function isUndefined2(val) {
      return typeof val === "undefined";
    }
    function isBuffer3(val) {
      return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString4.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString3(val) {
      return typeof val === "string";
    }
    function isNumber3(val) {
      return typeof val === "number";
    }
    function isObject3(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString4.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate2(val) {
      return toString4.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString4.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString4.call(val) === "[object Blob]";
    }
    function isFunction3(val) {
      return toString4.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject3(val) && isFunction3(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach2(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray5(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray5(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach2(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach2(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray: isArray5,
      isArrayBuffer,
      isBuffer: isBuffer3,
      isFormData,
      isArrayBufferView,
      isString: isString3,
      isNumber: isNumber3,
      isObject: isObject3,
      isPlainObject,
      isUndefined: isUndefined2,
      isDate: isDate2,
      isFile,
      isBlob,
      isFunction: isFunction3,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach: forEach2,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function encode2(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode2(key) + "=" + encode2(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach2(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    "use strict";
    module2.exports = function enhanceError(error2, config2, code, request3, response) {
      error2.config = config2;
      if (code) {
        error2.code = code;
      }
      error2.request = request3;
      error2.response = response;
      error2.isAxiosError = true;
      error2.toJSON = function toJSON2() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error2;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module2) {
    "use strict";
    var enhanceError = require_enhanceError();
    module2.exports = function createError(message, config2, code, request3, response) {
      var error2 = new Error(message);
      return enhanceError(error2, config2, code, request3, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module2) {
    "use strict";
    var createError = require_createError();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write3(name, value, expires, path, domain2, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain2)) {
            cookie.push("domain=" + domain2);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read3(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write3() {
        },
        read: function read3() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    module2.exports = function xhrAdapter(config2) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config2.data;
        var requestHeaders = config2.headers;
        var responseType = config2.responseType;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request3 = new XMLHttpRequest();
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config2.baseURL, config2.url);
        request3.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
        request3.timeout = config2.timeout;
        function onloadend() {
          if (!request3) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request3 ? parseHeaders(request3.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request3.responseText : request3.response;
          var response = {
            data: responseData,
            status: request3.status,
            statusText: request3.statusText,
            headers: responseHeaders,
            config: config2,
            request: request3
          };
          settle(resolve, reject, response);
          request3 = null;
        }
        if ("onloadend" in request3) {
          request3.onloadend = onloadend;
        } else {
          request3.onreadystatechange = function handleLoad() {
            if (!request3 || request3.readyState !== 4) {
              return;
            }
            if (request3.status === 0 && !(request3.responseURL && request3.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request3.onabort = function handleAbort() {
          if (!request3) {
            return;
          }
          reject(createError("Request aborted", config2, "ECONNABORTED", request3));
          request3 = null;
        };
        request3.onerror = function handleError() {
          reject(createError("Network Error", config2, null, request3));
          request3 = null;
        };
        request3.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
          if (config2.timeoutErrorMessage) {
            timeoutErrorMessage = config2.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config2, config2.transitional && config2.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request3));
          request3 = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config2.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request3) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request3.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config2.withCredentials)) {
          request3.withCredentials = !!config2.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request3.responseType = config2.responseType;
        }
        if (typeof config2.onDownloadProgress === "function") {
          request3.addEventListener("progress", config2.onDownloadProgress);
        }
        if (typeof config2.onUploadProgress === "function" && request3.upload) {
          request3.upload.addEventListener("progress", config2.onUploadProgress);
        }
        if (config2.cancelToken) {
          config2.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request3) {
              return;
            }
            request3.abort();
            reject(cancel);
            request3 = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request3.send(requestData);
      });
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/capability.js
function blobConstructor() {
  if (typeof _blobConstructor !== "undefined") {
    return _blobConstructor;
  }
  try {
    new globalThis.Blob([new ArrayBuffer(1)]);
    _blobConstructor = true;
  } catch (e) {
    _blobConstructor = false;
  }
  return _blobConstructor;
}
function checkTypeSupport(type2) {
  if (!xhr) {
    xhr = new globalThis.XMLHttpRequest();
    xhr.open("GET", globalThis.location.host ? "/" : "https://example.com");
  }
  try {
    xhr.responseType = type2;
    return xhr.responseType === type2;
  } catch (e) {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
var hasFetch, _blobConstructor, xhr, haveArrayBuffer, haveSlice, arraybuffer, msstream, mozchunkedarraybuffer, overrideMimeType, vbArray;
var init_capability = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/capability.js"() {
    hasFetch = isFunction(globalThis.fetch) && isFunction(globalThis.ReadableStream);
    haveArrayBuffer = typeof globalThis.ArrayBuffer !== "undefined";
    haveSlice = haveArrayBuffer && isFunction(globalThis.ArrayBuffer.prototype.slice);
    arraybuffer = haveArrayBuffer && checkTypeSupport("arraybuffer");
    msstream = !hasFetch && haveSlice && checkTypeSupport("ms-stream");
    mozchunkedarraybuffer = !hasFetch && haveArrayBuffer && checkTypeSupport("moz-chunked-arraybuffer");
    overrideMimeType = isFunction(xhr.overrideMimeType);
    vbArray = isFunction(globalThis.VBArray);
    xhr = null;
  }
});

// node-modules-polyfills:process
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
function noop() {
}
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener, once, off, removeListener, removeAllListeners, emit, performance, performanceNow, startTime, browser$1, process_default;
var init_process = __esm({
  "node-modules-polyfills:process"() {
    cachedSetTimeout = defaultSetTimout;
    cachedClearTimeout = defaultClearTimeout;
    if (typeof globalThis.setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    }
    if (typeof globalThis.clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    }
    queue = [];
    draining = false;
    queueIndex = -1;
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    title = "browser";
    platform = "browser";
    browser = true;
    env = {};
    argv = [];
    version = "";
    versions = {};
    release = {};
    config = {};
    on = noop;
    addListener = noop;
    once = noop;
    off = noop;
    removeListener = noop;
    removeAllListeners = noop;
    emit = noop;
    performance = globalThis.performance || {};
    performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
    browser$1 = {
      nextTick,
      title,
      browser,
      env,
      argv,
      version,
      versions,
      on,
      addListener,
      once,
      off,
      removeListener,
      removeAllListeners,
      emit,
      binding,
      cwd,
      chdir,
      umask,
      hrtime,
      platform,
      release,
      config,
      uptime
    };
    process_default = browser$1;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits, inherits_default;
var init_inherits = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    if (typeof Object.create === "function") {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    inherits_default = inherits;
  }
});

// node-modules-polyfills:util
var util_exports = {};
__export(util_exports, {
  _extend: () => _extend,
  debuglog: () => debuglog,
  default: () => util_default,
  deprecate: () => deprecate,
  format: () => format,
  inherits: () => inherits_default,
  inspect: () => inspect,
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isBuffer: () => isBuffer,
  isDate: () => isDate,
  isError: () => isError,
  isFunction: () => isFunction2,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isUndefined: () => isUndefined,
  log: () => log
});
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(" ");
  }
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i++]);
      case "%d":
        return Number(args[i++]);
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return "[Circular]";
        }
      default:
        return x2;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += " " + x;
    } else {
      str += " " + inspect(x);
    }
  }
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(globalThis.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }
  if (process_default.noDeprecation === true) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process_default.throwDeprecation) {
        throw new Error(msg);
      } else if (process_default.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process_default.env.NODE_DEBUG || "";
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set, pid, msg);
      };
    } else {
      debugs[set] = function() {
      };
    }
  }
  return debugs[set];
}
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction2(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys2 = Object.keys(value);
  var visibleKeys = arrayToHash(keys2);
  if (ctx.showHidden) {
    keys2 = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys2.length === 0) {
    if (isFunction2(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base2 = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction2(value)) {
    var n = value.name ? ": " + value.name : "";
    base2 = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base2 = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base2 = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base2 = " " + formatError(value);
  }
  if (keys2.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base2 + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
  } else {
    output = keys2.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base2, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys2.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base2, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isSymbol(arg) {
  return typeof arg === "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction2(arg) {
  return typeof arg === "function";
}
function isPrimitive(arg) {
  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
}
function isBuffer(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
function timestamp() {
  var d = new Date();
  var time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(":");
  return [d.getDate(), months[d.getMonth()], time].join(" ");
}
function log() {
  console.log("%s - %s", timestamp(), format.apply(null, arguments));
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys2 = Object.keys(add);
  var i = keys2.length;
  while (i--) {
    origin[keys2[i]] = add[keys2[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var formatRegExp, debugs, debugEnviron, months, util_default;
var init_util = __esm({
  "node-modules-polyfills:util"() {
    init_process();
    init_inherits();
    formatRegExp = /%[sdj%]/g;
    debugs = {};
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    util_default = {
      inherits: inherits_default,
      _extend,
      log,
      isBuffer,
      isPrimitive,
      isFunction: isFunction2,
      isError,
      isDate,
      isObject,
      isRegExp,
      isUndefined,
      isSymbol,
      isString,
      isNumber,
      isNullOrUndefined,
      isNull,
      isBoolean,
      isArray,
      inspect,
      deprecate,
      format,
      debuglog
    };
  }
});

// node-modules-polyfills:events
function EventHandlers() {
}
function EventEmitter() {
  EventEmitter.init.call(this);
}
function $getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1, arg2, arg3);
  }
}
function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].apply(self, args);
  }
}
function _addListener(target, type2, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    if (events.newListener) {
      target.emit("newListener", type2, listener.listener ? listener.listener : listener);
      events = target._events;
    }
    existing = events[type2];
  }
  if (!existing) {
    existing = events[type2] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events[type2] = prepend ? [listener, existing] : [existing, listener];
    } else {
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + type2 + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type2;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn === "function" ? console.warn(e) : console.log(e);
}
function _onceWrap(target, type2, listener) {
  var fired = false;
  function g() {
    target.removeListener(type2, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}
function listenerCount(type2) {
  var events = this._events;
  if (events) {
    var evlistener = events[type2];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
}
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  var copy2 = new Array(i);
  while (i--)
    copy2[i] = arr[i];
  return copy2;
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
var domain, events_default;
var init_events = __esm({
  "node-modules-polyfills:events"() {
    "use strict";
    EventHandlers.prototype = Object.create(null);
    events_default = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.usingDomains = false;
    EventEmitter.prototype.domain = void 0;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.init = function() {
      this.domain = null;
      if (EventEmitter.usingDomains) {
        if (domain.active && !(this instanceof domain.Domain)) {
          this.domain = domain.active;
        }
      }
      if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
        this._events = new EventHandlers();
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      this._maxListeners = n;
      return this;
    };
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit2(type2) {
      var er, handler, len, args, i, events, domain2;
      var needDomainExit = false;
      var doError = type2 === "error";
      events = this._events;
      if (events)
        doError = doError && events.error == null;
      else if (!doError)
        return false;
      domain2 = this.domain;
      if (doError) {
        er = arguments[1];
        if (domain2) {
          if (!er)
            er = new Error('Uncaught, unspecified "error" event');
          er.domainEmitter = this;
          er.domain = domain2;
          er.domainThrown = false;
          domain2.emit("error", er);
        } else if (er instanceof Error) {
          throw er;
        } else {
          var err2 = new Error('Uncaught, unspecified "error" event. (' + er + ")");
          err2.context = er;
          throw err2;
        }
        return false;
      }
      handler = events[type2];
      if (!handler)
        return false;
      var isFn = typeof handler === "function";
      len = arguments.length;
      switch (len) {
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }
      if (needDomainExit)
        domain2.exit();
      return true;
    };
    EventEmitter.prototype.addListener = function addListener2(type2, listener) {
      return _addListener(this, type2, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type2, listener) {
      return _addListener(this, type2, listener, true);
    };
    EventEmitter.prototype.once = function once2(type2, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.on(type2, _onceWrap(this, type2, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type2, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type2, _onceWrap(this, type2, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener2(type2, listener) {
      var list, events, position, i, originalListener;
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      events = this._events;
      if (!events)
        return this;
      list = events[type2];
      if (!list)
        return this;
      if (list === listener || list.listener && list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type2];
          if (events.removeListener)
            this.emit("removeListener", type2, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length; i-- > 0; ) {
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (list.length === 1) {
          list[0] = void 0;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type2];
          }
        } else {
          spliceOne(list, position);
        }
        if (events.removeListener)
          this.emit("removeListener", type2, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners2(type2) {
      var listeners2, events;
      events = this._events;
      if (!events)
        return this;
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type2]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type2];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        for (var i = 0, key; i < keys2.length; ++i) {
          key = keys2[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }
      listeners2 = events[type2];
      if (typeof listeners2 === "function") {
        this.removeListener(type2, listeners2);
      } else if (listeners2) {
        do {
          this.removeListener(type2, listeners2[listeners2.length - 1]);
        } while (listeners2[0]);
      }
      return this;
    };
    EventEmitter.prototype.listeners = function listeners(type2) {
      var evlistener;
      var ret;
      var events = this._events;
      if (!events)
        ret = [];
      else {
        evlistener = events[type2];
        if (!evlistener)
          ret = [];
        else if (typeof evlistener === "function")
          ret = [evlistener.listener || evlistener];
        else
          ret = unwrapListeners(evlistener);
      }
      return ret;
    };
    EventEmitter.listenerCount = function(emitter, type2) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type2);
      } else {
        return listenerCount.call(emitter, type2);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
  }
});

// node-modules-polyfills:buffer
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer2.prototype;
  } else {
    if (that === null) {
      that = new Buffer2(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
    return new Buffer2(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer2.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray2(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read3(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read3(arr, i) === read3(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read3(arr, i + j) !== read3(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer2(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
var lookup, revLookup, Arr, inited, toString, isArray2, INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
var init_buffer = __esm({
  "node-modules-polyfills:buffer"() {
    lookup = [];
    revLookup = [];
    Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    inited = false;
    toString = {}.toString;
    isArray2 = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
    INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
    _kMaxLength = kMaxLength();
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
    }
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(null, size, fill2, encoding);
    };
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.isBuffer = isBuffer2;
    Buffer2.compare = function compare(a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray2(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString2() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b) {
      if (!internalIsBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect2() {
      var str = "";
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    Buffer2.prototype.write = function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8);
    };
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js
function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
var buffer_list_default;
var init_buffer_list = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js"() {
    init_buffer();
    buffer_list_default = BufferList;
    BufferList.prototype.push = function(v) {
      var entry = { data: v, next: null };
      if (this.length > 0)
        this.tail.next = entry;
      else
        this.head = entry;
      this.tail = entry;
      ++this.length;
    };
    BufferList.prototype.unshift = function(v) {
      var entry = { data: v, next: this.head };
      if (this.length === 0)
        this.tail = entry;
      this.head = entry;
      ++this.length;
    };
    BufferList.prototype.shift = function() {
      if (this.length === 0)
        return;
      var ret = this.head.data;
      if (this.length === 1)
        this.head = this.tail = null;
      else
        this.head = this.head.next;
      --this.length;
      return ret;
    };
    BufferList.prototype.clear = function() {
      this.head = this.tail = null;
      this.length = 0;
    };
    BufferList.prototype.join = function(s) {
      if (this.length === 0)
        return "";
      var p = this.head;
      var ret = "" + p.data;
      while (p = p.next) {
        ret += s + p.data;
      }
      return ret;
    };
    BufferList.prototype.concat = function(n) {
      if (this.length === 0)
        return Buffer2.alloc(0);
      if (this.length === 1)
        return this.head.data;
      var ret = Buffer2.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        p.data.copy(ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    };
  }
});

// node-modules-polyfills:string_decoder
function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error("Unknown encoding: " + encoding);
  }
}
function StringDecoder(encoding) {
  this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, "");
  assertEncoding(encoding);
  switch (this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case "base64":
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }
  this.charBuffer = new Buffer2(6);
  this.charReceived = 0;
  this.charLength = 0;
}
function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}
function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}
function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}
var isBufferEncoding;
var init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    init_buffer();
    isBufferEncoding = Buffer2.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = "";
      while (this.charLength) {
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return "";
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
          this.charLength += this.surrogateSize;
          charStr = "";
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = buffer.length >= 3 ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = "";
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js
function prependListener2(emitter, event, fn) {
  if (typeof emitter.prependListener === "function") {
    return emitter.prependListener(event, fn);
  } else {
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount2(emitter, type2) {
  return emitter.listeners(type2).length;
}
function ReadableState(options, stream) {
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = new buffer_list_default();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.ranOut = false;
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);
  this._readableState = new ReadableState(options, this);
  this.readable = true;
  if (options && typeof options.read === "function")
    this._read = options.read;
  events_default.call(this);
}
function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit("error", er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error("stream.push() after EOF");
      stream.emit("error", e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error("stream.unshift() after end event");
      stream.emit("error", _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }
      if (!addToFront)
        state.reading = false;
      if (!skipAdd) {
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit("data", chunk);
          stream.read(0);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront)
            state.buffer.unshift(chunk);
          else
            state.buffer.push(chunk);
          if (state.needReadable)
            emitReadable(stream);
        }
      }
      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }
  return needMoreData(state);
}
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended)
    return 0;
  if (state.objectMode)
    return 1;
  if (n !== n) {
    if (state.flowing && state.length)
      return state.buffer.head.data.length;
    else
      return state.length;
  }
  if (n > state.highWaterMark)
    state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length)
    return n;
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}
function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  return er;
}
function onEofChunk(stream, state) {
  if (state.ended)
    return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  emitReadable(stream);
}
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug("emitReadable", state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      nextTick(emitReadable_, stream);
    else
      emitReadable_(stream);
  }
}
function emitReadable_(stream) {
  debug("emit readable");
  stream.emit("readable");
  flow(stream);
}
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug("maybeReadMore read 0");
    stream.read(0);
    if (len === state.length)
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}
function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug("pipeOnDrain", state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners("data").length) {
      state.flowing = true;
      flow(src);
    }
  };
}
function nReadingNextTick(self) {
  debug("readable nexttick read 0");
  self.read(0);
}
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  if (!state.reading) {
    debug("resume read 0");
    stream.read(0);
  }
  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit("resume");
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}
function flow(stream) {
  var state = stream._readableState;
  debug("flow", state.flowing);
  while (state.flowing && stream.read() !== null) {
  }
}
function fromList(n, state) {
  if (state.length === 0)
    return null;
  var ret;
  if (state.objectMode)
    ret = state.buffer.shift();
  else if (!n || n >= state.length) {
    if (state.decoder)
      ret = state.buffer.join("");
    else if (state.buffer.length === 1)
      ret = state.buffer.head.data;
    else
      ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    ret = fromListPartial(n, state.buffer, state.decoder);
  }
  return ret;
}
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    ret = list.shift();
  } else {
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length)
      ret += str;
    else
      ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  if (state.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit("end");
  }
}
function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
function indexOf2(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x)
      return i;
  }
  return -1;
}
var debug, MAX_HWM;
var init_readable = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js"() {
    init_events();
    init_util();
    init_buffer_list();
    init_string_decoder();
    init_duplex();
    init_process();
    "use strict";
    Readable.ReadableState = ReadableState;
    debug = debuglog("stream");
    inherits_default(Readable, events_default);
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (!state.objectMode && typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer.from(chunk, encoding);
          encoding = "";
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", true);
    };
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    MAX_HWM = 8388608;
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = !pipeOpts || pipeOpts.end !== false;
      var endFn = doEnd ? onend2 : cleanup;
      if (state.endEmitted)
        nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        debug("onunpipe");
        if (readable === src) {
          cleanup();
        }
      }
      function onend2() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend2);
        src.removeListener("end", cleanup);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf2(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (listenerCount2(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener2(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var _i = 0; _i < len; _i++) {
          dests[_i].emit("unpipe", this);
        }
        return this;
      }
      var i = indexOf2(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = events_default.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ["error", "close", "destroy", "pause", "resume"];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js
function nop() {
}
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}
function WritableState(options, stream) {
  Object.defineProperty(this, "buffer", {
    get: deprecate(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  });
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function(er) {
    onwrite(stream, er);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new CorkedRequest(this);
}
function Writable(options) {
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);
  this._writableState = new WritableState(options, this);
  this.writable = true;
  if (options) {
    if (typeof options.write === "function")
      this._write = options.write;
    if (typeof options.writev === "function")
      this._writev = options.writev;
  }
  EventEmitter.call(this);
}
function writeAfterEnd(stream, cb) {
  var er = new Error("write after end");
  stream.emit("error", er);
  nextTick(cb, er);
}
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  if (chunk === null) {
    er = new TypeError("May not write null values to stream");
  } else if (!Buffer2.isBuffer(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  if (er) {
    stream.emit("error", er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}
function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
    chunk = Buffer2.from(chunk, encoding);
  }
  return chunk;
}
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer2.isBuffer(chunk))
    encoding = "buffer";
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  if (!ret)
    state.needDrain = true;
  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync)
    nextTick(cb, er);
  else
    cb(er);
  stream._writableState.errorEmitted = true;
  stream.emit("error", er);
}
function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    var finished = needFinish(state);
    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }
    if (sync) {
      nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}
function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit("drain");
  }
}
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;
  if (stream._writev && entry && entry.next) {
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }
    doWrite(stream, state, true, state.length, buffer, "", holder.finish);
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      if (state.writing) {
        break;
      }
    }
    if (entry === null)
      state.lastBufferedRequest = null;
  }
  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit("prefinish");
  }
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit("finish");
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}
function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      nextTick(cb);
    else
      stream.once("finish", cb);
  }
  state.ended = true;
  stream.writable = false;
}
function CorkedRequest(state) {
  var _this = this;
  this.next = null;
  this.entry = null;
  this.finish = function(err2) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err2);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
var init_writable = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js"() {
    init_util();
    init_buffer();
    init_events();
    init_duplex();
    init_process();
    Writable.WritableState = WritableState;
    inherits_default(Writable, EventEmitter);
    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (Buffer2.isBuffer(chunk))
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js
function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false)
    this.readable = false;
  if (options && options.writable === false)
    this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;
  this.once("end", onend);
}
function onend() {
  if (this.allowHalfOpen || this._writableState.ended)
    return;
  nextTick(onEndNT, this);
}
function onEndNT(self) {
  self.end();
}
var keys, method, v;
var init_duplex = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js"() {
    init_util();
    init_process();
    init_readable();
    init_writable();
    inherits_default(Duplex, Readable);
    keys = Object.keys(Writable.prototype);
    for (v = 0; v < keys.length; v++) {
      method = keys[v];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js
function TransformState(stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };
  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}
function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (!cb)
    return stream.emit("error", new Error("no writecb in Transform class"));
  ts.writechunk = null;
  ts.writecb = null;
  if (data !== null && data !== void 0)
    stream.push(data);
  cb(er);
  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);
  Duplex.call(this, options);
  this._transformState = new TransformState(this);
  var stream = this;
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.once("prefinish", function() {
    if (typeof this._flush === "function")
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}
function done(stream, er) {
  if (er)
    return stream.emit("error", er);
  var ws = stream._writableState;
  var ts = stream._transformState;
  if (ws.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (ts.transforming)
    throw new Error("Calling transform done when still transforming");
  return stream.push(null);
}
var init_transform = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js"() {
    init_duplex();
    init_util();
    inherits_default(Transform, Duplex);
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("Not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform.call(this, options);
}
var init_passthrough = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js"() {
    init_transform();
    init_util();
    inherits_default(PassThrough, Transform);
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node-modules-polyfills:stream
var stream_exports = {};
__export(stream_exports, {
  Duplex: () => Duplex,
  PassThrough: () => PassThrough,
  Readable: () => Readable,
  Stream: () => Stream,
  Transform: () => Transform,
  Writable: () => Writable,
  default: () => stream_default
});
function Stream() {
  events_default.call(this);
}
var stream_default;
var init_stream = __esm({
  "node-modules-polyfills:stream"() {
    init_events();
    init_util();
    init_duplex();
    init_readable();
    init_writable();
    init_transform();
    init_passthrough();
    inherits_default(Stream, events_default);
    Stream.Readable = Readable;
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;
    Stream.Stream = Stream;
    stream_default = Stream;
    Stream.prototype.pipe = function(dest, options) {
      var source = this;
      function ondata(chunk) {
        if (dest.writable) {
          if (dest.write(chunk) === false && source.pause) {
            source.pause();
          }
        }
      }
      source.on("data", ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on("drain", ondrain);
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend2);
        source.on("close", onclose);
      }
      var didOnEnd = false;
      function onend2() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        if (typeof dest.destroy === "function")
          dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (events_default.listenerCount(this, "error") === 0) {
          throw er;
        }
      }
      source.on("error", onerror);
      dest.on("error", onerror);
      function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend2);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
      }
      source.on("end", cleanup);
      source.on("close", cleanup);
      dest.on("close", cleanup);
      dest.emit("pipe", source);
      return dest;
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/response.js
function IncomingMessage(xhr2, response, mode) {
  var self = this;
  Readable.call(self);
  self._mode = mode;
  self.headers = {};
  self.rawHeaders = [];
  self.trailers = {};
  self.rawTrailers = [];
  self.on("end", function() {
    process.nextTick(function() {
      self.emit("close");
    });
  });
  var read3;
  if (mode === "fetch") {
    self._fetchResponse = response;
    self.url = response.url;
    self.statusCode = response.status;
    self.statusMessage = response.statusText;
    for (var header, _i, _it = response.headers[Symbol.iterator](); header = (_i = _it.next()).value, !_i.done; ) {
      self.headers[header[0].toLowerCase()] = header[1];
      self.rawHeaders.push(header[0], header[1]);
    }
    var reader = response.body.getReader();
    read3 = function() {
      reader.read().then(function(result) {
        if (self._destroyed)
          return;
        if (result.done) {
          self.push(null);
          return;
        }
        self.push(new Buffer(result.value));
        read3();
      });
    };
    read3();
  } else {
    self._xhr = xhr2;
    self._pos = 0;
    self.url = xhr2.responseURL;
    self.statusCode = xhr2.status;
    self.statusMessage = xhr2.statusText;
    var headers = xhr2.getAllResponseHeaders().split(/\r?\n/);
    headers.forEach(function(header2) {
      var matches = header2.match(/^([^:]+):\s*(.*)/);
      if (matches) {
        var key = matches[1].toLowerCase();
        if (key === "set-cookie") {
          if (self.headers[key] === void 0) {
            self.headers[key] = [];
          }
          self.headers[key].push(matches[2]);
        } else if (self.headers[key] !== void 0) {
          self.headers[key] += ", " + matches[2];
        } else {
          self.headers[key] = matches[2];
        }
        self.rawHeaders.push(matches[1], matches[2]);
      }
    });
    self._charset = "x-user-defined";
    if (!overrideMimeType) {
      var mimeType = self.rawHeaders["mime-type"];
      if (mimeType) {
        var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
        if (charsetMatch) {
          self._charset = charsetMatch[1].toLowerCase();
        }
      }
      if (!self._charset)
        self._charset = "utf-8";
    }
  }
}
var rStates;
var init_response = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/response.js"() {
    init_capability();
    init_util();
    init_stream();
    rStates = {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4
    };
    inherits_default(IncomingMessage, Readable);
    IncomingMessage.prototype._read = function() {
    };
    IncomingMessage.prototype._onXHRProgress = function() {
      var self = this;
      var xhr2 = self._xhr;
      var response = null;
      switch (self._mode) {
        case "text:vbarray":
          if (xhr2.readyState !== rStates.DONE)
            break;
          try {
            response = new globalThis.VBArray(xhr2.responseBody).toArray();
          } catch (e) {
          }
          if (response !== null) {
            self.push(new Buffer(response));
            break;
          }
        case "text":
          try {
            response = xhr2.responseText;
          } catch (e) {
            self._mode = "text:vbarray";
            break;
          }
          if (response.length > self._pos) {
            var newData = response.substr(self._pos);
            if (self._charset === "x-user-defined") {
              var buffer = new Buffer(newData.length);
              for (var i = 0; i < newData.length; i++)
                buffer[i] = newData.charCodeAt(i) & 255;
              self.push(buffer);
            } else {
              self.push(newData, self._charset);
            }
            self._pos = response.length;
          }
          break;
        case "arraybuffer":
          if (xhr2.readyState !== rStates.DONE || !xhr2.response)
            break;
          response = xhr2.response;
          self.push(new Buffer(new Uint8Array(response)));
          break;
        case "moz-chunked-arraybuffer":
          response = xhr2.response;
          if (xhr2.readyState !== rStates.LOADING || !response)
            break;
          self.push(new Buffer(new Uint8Array(response)));
          break;
        case "ms-stream":
          response = xhr2.response;
          if (xhr2.readyState !== rStates.LOADING)
            break;
          var reader = new globalThis.MSStreamReader();
          reader.onprogress = function() {
            if (reader.result.byteLength > self._pos) {
              self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))));
              self._pos = reader.result.byteLength;
            }
          };
          reader.onload = function() {
            self.push(null);
          };
          reader.readAsArrayBuffer(response);
          break;
      }
      if (self._xhr.readyState === rStates.DONE && self._mode !== "ms-stream") {
        self.push(null);
      }
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/to-arraybuffer.js
function to_arraybuffer_default(buf) {
  if (buf instanceof Uint8Array) {
    if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
      return buf.buffer;
    } else if (typeof buf.buffer.slice === "function") {
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
  }
  if (isBuffer2(buf)) {
    var arrayCopy = new Uint8Array(buf.length);
    var len = buf.length;
    for (var i = 0; i < len; i++) {
      arrayCopy[i] = buf[i];
    }
    return arrayCopy.buffer;
  } else {
    throw new Error("Argument must be a Buffer");
  }
}
var init_to_arraybuffer = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/to-arraybuffer.js"() {
    init_buffer();
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/request.js
function decideMode(preferBinary, useFetch) {
  if (hasFetch && useFetch) {
    return "fetch";
  } else if (mozchunkedarraybuffer) {
    return "moz-chunked-arraybuffer";
  } else if (msstream) {
    return "ms-stream";
  } else if (arraybuffer && preferBinary) {
    return "arraybuffer";
  } else if (vbArray && preferBinary) {
    return "text:vbarray";
  } else {
    return "text";
  }
}
function ClientRequest(opts) {
  var self = this;
  Writable.call(self);
  self._opts = opts;
  self._body = [];
  self._headers = {};
  if (opts.auth)
    self.setHeader("Authorization", "Basic " + new Buffer(opts.auth).toString("base64"));
  Object.keys(opts.headers).forEach(function(name) {
    self.setHeader(name, opts.headers[name]);
  });
  var preferBinary;
  var useFetch = true;
  if (opts.mode === "disable-fetch") {
    useFetch = false;
    preferBinary = true;
  } else if (opts.mode === "prefer-streaming") {
    preferBinary = false;
  } else if (opts.mode === "allow-wrong-content-type") {
    preferBinary = !overrideMimeType;
  } else if (!opts.mode || opts.mode === "default" || opts.mode === "prefer-fast") {
    preferBinary = true;
  } else {
    throw new Error("Invalid value for opts.mode");
  }
  self._mode = decideMode(preferBinary, useFetch);
  self.on("finish", function() {
    self._onFinish();
  });
}
function statusValid(xhr2) {
  try {
    var status2 = xhr2.status;
    return status2 !== null && status2 !== 0;
  } catch (e) {
    return false;
  }
}
var request_default, unsafeHeaders;
var init_request = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/http-lib/request.js"() {
    init_capability();
    init_util();
    init_response();
    init_stream();
    init_to_arraybuffer();
    request_default = ClientRequest;
    inherits_default(ClientRequest, Writable);
    unsafeHeaders = [
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "date",
      "dnt",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "user-agent",
      "via"
    ];
    ClientRequest.prototype.setHeader = function(name, value) {
      var self = this;
      var lowerName = name.toLowerCase();
      if (unsafeHeaders.indexOf(lowerName) !== -1)
        return;
      self._headers[lowerName] = {
        name,
        value
      };
    };
    ClientRequest.prototype.getHeader = function(name) {
      var self = this;
      return self._headers[name.toLowerCase()].value;
    };
    ClientRequest.prototype.removeHeader = function(name) {
      var self = this;
      delete self._headers[name.toLowerCase()];
    };
    ClientRequest.prototype._onFinish = function() {
      var self = this;
      if (self._destroyed)
        return;
      var opts = self._opts;
      var headersObj = self._headers;
      var body;
      if (opts.method === "POST" || opts.method === "PUT" || opts.method === "PATCH") {
        if (blobConstructor()) {
          body = new globalThis.Blob(self._body.map(function(buffer) {
            return to_arraybuffer_default(buffer);
          }), {
            type: (headersObj["content-type"] || {}).value || ""
          });
        } else {
          body = Buffer.concat(self._body).toString();
        }
      }
      if (self._mode === "fetch") {
        var headers = Object.keys(headersObj).map(function(name) {
          return [headersObj[name].name, headersObj[name].value];
        });
        globalThis.fetch(self._opts.url, {
          method: self._opts.method,
          headers,
          body,
          mode: "cors",
          credentials: opts.withCredentials ? "include" : "same-origin"
        }).then(function(response) {
          self._fetchResponse = response;
          self._connect();
        }, function(reason) {
          self.emit("error", reason);
        });
      } else {
        var xhr2 = self._xhr = new globalThis.XMLHttpRequest();
        try {
          xhr2.open(self._opts.method, self._opts.url, true);
        } catch (err2) {
          process.nextTick(function() {
            self.emit("error", err2);
          });
          return;
        }
        if ("responseType" in xhr2)
          xhr2.responseType = self._mode.split(":")[0];
        if ("withCredentials" in xhr2)
          xhr2.withCredentials = !!opts.withCredentials;
        if (self._mode === "text" && "overrideMimeType" in xhr2)
          xhr2.overrideMimeType("text/plain; charset=x-user-defined");
        Object.keys(headersObj).forEach(function(name) {
          xhr2.setRequestHeader(headersObj[name].name, headersObj[name].value);
        });
        self._response = null;
        xhr2.onreadystatechange = function() {
          switch (xhr2.readyState) {
            case rStates.LOADING:
            case rStates.DONE:
              self._onXHRProgress();
              break;
          }
        };
        if (self._mode === "moz-chunked-arraybuffer") {
          xhr2.onprogress = function() {
            self._onXHRProgress();
          };
        }
        xhr2.onerror = function() {
          if (self._destroyed)
            return;
          self.emit("error", new Error("XHR error"));
        };
        try {
          xhr2.send(body);
        } catch (err2) {
          process.nextTick(function() {
            self.emit("error", err2);
          });
          return;
        }
      }
    };
    ClientRequest.prototype._onXHRProgress = function() {
      var self = this;
      if (!statusValid(self._xhr) || self._destroyed)
        return;
      if (!self._response)
        self._connect();
      self._response._onXHRProgress();
    };
    ClientRequest.prototype._connect = function() {
      var self = this;
      if (self._destroyed)
        return;
      self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode);
      self.emit("response", self._response);
    };
    ClientRequest.prototype._write = function(chunk, encoding, cb) {
      var self = this;
      self._body.push(chunk);
      cb();
    };
    ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function() {
      var self = this;
      self._destroyed = true;
      if (self._response)
        self._response._destroyed = true;
      if (self._xhr)
        self._xhr.abort();
    };
    ClientRequest.prototype.end = function(data, encoding, cb) {
      var self = this;
      if (typeof data === "function") {
        cb = data;
        data = void 0;
      }
      Writable.prototype.end.call(self, data, encoding, cb);
    };
    ClientRequest.prototype.flushHeaders = function() {
    };
    ClientRequest.prototype.setTimeout = function() {
    };
    ClientRequest.prototype.setNoDelay = function() {
    };
    ClientRequest.prototype.setSocketKeepAlive = function() {
    };
  }
});

// node-modules-polyfills:punycode
function error(type2) {
  throw new RangeError(errors[type2]);
}
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  var parts = string.split("@");
  var result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  var labels = string.split(".");
  var encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function digitToBasic(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}
function encode(input) {
  var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
  input = ucs2decode(input);
  inputLength = input.length;
  n = initialN;
  delta = 0;
  bias = initialBias;
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  handledCPCount = basicLength = output.length;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < n && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        for (q = delta, k = base; ; k += base) {
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n;
  }
  return output.join("");
}
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode;
var init_punycode = __esm({
  "node-modules-polyfills:punycode"() {
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexNonASCII = /[^\x20-\x7E]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
  }
});

// node-modules-polyfills:querystring
function hasOwnProperty2(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function stringifyPrimitive(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
}
function stringify(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return map2(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray3(obj[k])) {
        return map2(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
}
function map2(xs, f) {
  if (xs.map)
    return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}
function parse(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty2(obj, k)) {
      obj[k] = v;
    } else if (isArray3(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
}
var isArray3, objectKeys;
var init_querystring = __esm({
  "node-modules-polyfills:querystring"() {
    isArray3 = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
    objectKeys = Object.keys || function(obj) {
      var res = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          res.push(key);
      }
      return res;
    };
  }
});

// node-modules-polyfills:url
var url_exports = {};
__export(url_exports, {
  Url: () => Url,
  default: () => url_default,
  format: () => urlFormat,
  parse: () => urlParse,
  resolve: () => urlResolve,
  resolveObject: () => urlResolveObject
});
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url)
    return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
function parse2(self, url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }
  var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, "/");
  url = uSplit.join(splitter);
  var rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self.path = rest;
      self.href = rest;
      self.pathname = simplePath[1];
      if (simplePath[2]) {
        self.search = simplePath[2];
        if (parseQueryString) {
          self.query = parse(self.search.substr(1));
        } else {
          self.query = self.search.substr(1);
        }
      } else if (parseQueryString) {
        self.search = "";
        self.query = {};
      }
      return self;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self.auth = decodeURIComponent(auth);
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;
    self.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    parseHost(self);
    self.hostname = self.hostname || "";
    var ipv6Hostname = self.hostname[0] === "[" && self.hostname[self.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = self.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part)
          continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = "/" + notHost.join(".") + rest;
            }
            self.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (self.hostname.length > hostnameMaxLen) {
      self.hostname = "";
    } else {
      self.hostname = self.hostname.toLowerCase();
    }
    if (!ipv6Hostname) {
      self.hostname = toASCII(self.hostname);
    }
    p = self.port ? ":" + self.port : "";
    var h = self.hostname || "";
    self.host = h + p;
    self.href += self.host;
    if (ipv6Hostname) {
      self.hostname = self.hostname.substr(1, self.hostname.length - 2);
      if (rest[0] !== "/") {
        rest = "/" + rest;
      }
    }
  }
  if (!unsafeProtocol[lowerProto]) {
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    self.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    self.search = rest.substr(qm);
    self.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self.query = parse(self.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    self.search = "";
    self.query = {};
  }
  if (rest)
    self.pathname = rest;
  if (slashedProtocol[lowerProto] && self.hostname && !self.pathname) {
    self.pathname = "/";
  }
  if (self.pathname || self.search) {
    p = self.pathname || "";
    var s = self.search || "";
    self.path = p + s;
  }
  self.href = format2(self);
  return self;
}
function urlFormat(obj) {
  if (isString(obj))
    obj = parse2({}, obj);
  return format2(obj);
}
function format2(self) {
  var auth = self.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var protocol = self.protocol || "", pathname = self.pathname || "", hash = self.hash || "", host = false, query = "";
  if (self.host) {
    host = auth + self.host;
  } else if (self.hostname) {
    host = auth + (self.hostname.indexOf(":") === -1 ? self.hostname : "[" + this.hostname + "]");
    if (self.port) {
      host += ":" + self.port;
    }
  }
  if (self.query && isObject(self.query) && Object.keys(self.query).length) {
    query = stringify(self.query);
  }
  var search = self.search || query && "?" + query || "";
  if (protocol && protocol.substr(-1) !== ":")
    protocol += ":";
  if (self.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = "//" + (host || "");
    if (pathname && pathname.charAt(0) !== "/")
      pathname = "/" + pathname;
  } else if (!host) {
    host = "";
  }
  if (hash && hash.charAt(0) !== "#")
    hash = "#" + hash;
  if (search && search.charAt(0) !== "?")
    search = "?" + search;
  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return protocol + host + pathname + search + hash;
}
function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}
function urlResolveObject(source, relative) {
  if (!source)
    return relative;
  return urlParse(source, false, true).resolveObject(relative);
}
function parseHost(self) {
  var host = self.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      self.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host)
    self.hostname = host;
}
var url_default, protocolPattern, portPattern, simplePathPattern, delims, unwise, autoEscape, nonHostChars, hostEndingChars, hostnameMaxLen, hostnamePartPattern, hostnamePartStart, unsafeProtocol, hostlessProtocol, slashedProtocol;
var init_url = __esm({
  "node-modules-polyfills:url"() {
    init_punycode();
    init_util();
    init_querystring();
    url_default = {
      parse: urlParse,
      resolve: urlResolve,
      resolveObject: urlResolveObject,
      format: urlFormat,
      Url
    };
    protocolPattern = /^([a-z0-9.+-]+:)/i;
    portPattern = /:[0-9]*$/;
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    autoEscape = ["'"].concat(unwise);
    nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    hostEndingChars = ["/", "?", "#"];
    hostnameMaxLen = 255;
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      return parse2(this, url, parseQueryString, slashesDenoteHost);
    };
    Url.prototype.format = function() {
      return format2(this);
    };
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    Url.prototype.resolveObject = function(relative) {
      if (isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      var relPath;
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys2 = Object.keys(relative);
          for (var v = 0; v < keys2.length; v++) {
            var k = keys2[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      relPath = relative.pathname && relative.pathname.split("/") || [];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      var authInHost;
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      return parseHost(this);
    };
  }
});

// node-modules-polyfills:http
var http_exports = {};
__export(http_exports, {
  Agent: () => Agent,
  METHODS: () => METHODS,
  STATUS_CODES: () => STATUS_CODES,
  default: () => http_default,
  get: () => get,
  request: () => request
});
function request(opts, cb) {
  if (typeof opts === "string")
    opts = urlParse(opts);
  var defaultProtocol = globalThis.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
  var protocol = opts.protocol || defaultProtocol;
  var host = opts.hostname || opts.host;
  var port = opts.port;
  var path = opts.path || "/";
  if (host && host.indexOf(":") !== -1)
    host = "[" + host + "]";
  opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path;
  opts.method = (opts.method || "GET").toUpperCase();
  opts.headers = opts.headers || {};
  var req = new request_default(opts);
  if (cb)
    req.on("response", cb);
  return req;
}
function get(opts, cb) {
  var req = request(opts, cb);
  req.end();
  return req;
}
function Agent() {
}
var METHODS, STATUS_CODES, http_default;
var init_http = __esm({
  "node-modules-polyfills:http"() {
    init_request();
    init_url();
    Agent.defaultMaxSockets = 4;
    METHODS = [
      "CHECKOUT",
      "CONNECT",
      "COPY",
      "DELETE",
      "GET",
      "HEAD",
      "LOCK",
      "M-SEARCH",
      "MERGE",
      "MKACTIVITY",
      "MKCOL",
      "MOVE",
      "NOTIFY",
      "OPTIONS",
      "PATCH",
      "POST",
      "PROPFIND",
      "PROPPATCH",
      "PURGE",
      "PUT",
      "REPORT",
      "SEARCH",
      "SUBSCRIBE",
      "TRACE",
      "UNLOCK",
      "UNSUBSCRIBE"
    ];
    STATUS_CODES = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Moved Temporarily",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Time-out",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Large",
      414: "Request-URI Too Large",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Time-out",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required"
    };
    http_default = {
      request,
      get,
      Agent,
      METHODS,
      STATUS_CODES
    };
  }
});

// node-modules-polyfills-commonjs:http
var require_http = __commonJS({
  "node-modules-polyfills-commonjs:http"(exports, module2) {
    var polyfill = (init_http(), http_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills:https
var https_exports = {};
__export(https_exports, {
  Agent: () => Agent2,
  METHODS: () => METHODS2,
  STATUS_CODES: () => STATUS_CODES2,
  default: () => https_default,
  get: () => get2,
  request: () => request2
});
function request2(opts, cb) {
  if (typeof opts === "string")
    opts = urlParse(opts);
  var defaultProtocol = globalThis.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
  var protocol = opts.protocol || defaultProtocol;
  var host = opts.hostname || opts.host;
  var port = opts.port;
  var path = opts.path || "/";
  if (host && host.indexOf(":") !== -1)
    host = "[" + host + "]";
  opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path;
  opts.method = (opts.method || "GET").toUpperCase();
  opts.headers = opts.headers || {};
  var req = new request_default(opts);
  if (cb)
    req.on("response", cb);
  return req;
}
function get2(opts, cb) {
  var req = request2(opts, cb);
  req.end();
  return req;
}
function Agent2() {
}
var METHODS2, STATUS_CODES2, https_default;
var init_https = __esm({
  "node-modules-polyfills:https"() {
    init_request();
    init_url();
    Agent2.defaultMaxSockets = 4;
    METHODS2 = [
      "CHECKOUT",
      "CONNECT",
      "COPY",
      "DELETE",
      "GET",
      "HEAD",
      "LOCK",
      "M-SEARCH",
      "MERGE",
      "MKACTIVITY",
      "MKCOL",
      "MOVE",
      "NOTIFY",
      "OPTIONS",
      "PATCH",
      "POST",
      "PROPFIND",
      "PROPPATCH",
      "PURGE",
      "PUT",
      "REPORT",
      "SEARCH",
      "SUBSCRIBE",
      "TRACE",
      "UNLOCK",
      "UNSUBSCRIBE"
    ];
    STATUS_CODES2 = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Moved Temporarily",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Time-out",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Large",
      414: "Request-URI Too Large",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Time-out",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required"
    };
    https_default = {
      request: request2,
      get: get2,
      Agent: Agent2,
      METHODS: METHODS2,
      STATUS_CODES: STATUS_CODES2
    };
  }
});

// node-modules-polyfills-commonjs:https
var require_https = __commonJS({
  "node-modules-polyfills-commonjs:https"(exports, module2) {
    var polyfill = (init_https(), https_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills-commonjs:url
var require_url = __commonJS({
  "node-modules-polyfills-commonjs:url"(exports, module2) {
    var polyfill = (init_url(), url_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills-commonjs:stream
var require_stream = __commonJS({
  "node-modules-polyfills-commonjs:stream"(exports, module2) {
    var polyfill = (init_stream(), stream_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills:assert
var assert_exports = {};
__export(assert_exports, {
  AssertionError: () => AssertionError,
  assert: () => ok,
  deepEqual: () => deepEqual,
  deepStrictEqual: () => deepStrictEqual,
  default: () => assert_default,
  doesNotThrow: () => doesNotThrow,
  equal: () => equal,
  fail: () => fail,
  ifError: () => ifError,
  notDeepEqual: () => notDeepEqual,
  notDeepStrictEqual: () => notDeepStrictEqual,
  notEqual: () => notEqual,
  notStrictEqual: () => notStrictEqual,
  ok: () => ok,
  strictEqual: () => strictEqual,
  throws: () => throws
});
function compare3(a, b) {
  if (a === b) {
    return 0;
  }
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function functionsHaveNames() {
  if (typeof _functionsHaveNames !== "undefined") {
    return _functionsHaveNames;
  }
  return _functionsHaveNames = function() {
    return function foo() {
    }.name === "foo";
  }();
}
function pToString(obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer2(arrbuf)) {
    return false;
  }
  if (typeof globalThis.ArrayBuffer !== "function") {
    return false;
  }
  if (typeof ArrayBuffer.isView === "function") {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
function assert(value, message) {
  if (!value)
    fail(value, true, message, "==", ok);
}
function getName(func) {
  if (!isFunction2(func)) {
    return;
  }
  if (functionsHaveNames()) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
function AssertionError(options) {
  this.name = "AssertionError";
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    var err2 = new Error();
    if (err2.stack) {
      var out = err2.stack;
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf("\n" + fn_name);
      if (idx >= 0) {
        var next_line = out.indexOf("\n", idx + 1);
        out = out.substring(next_line + 1);
      }
      this.stack = out;
    }
  }
}
function truncate(s, n) {
  if (typeof s === "string") {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect3(something) {
  if (functionsHaveNames() || !isFunction2(something)) {
    return inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ": " + rawname : "";
  return "[Function" + name + "]";
}
function getMessage(self) {
  return truncate(inspect3(self.actual), 128) + " " + self.operator + " " + truncate(inspect3(self.expected), 128);
}
function fail(actual, expected, message, operator, stackStartFunction) {
  throw new AssertionError({
    message,
    actual,
    expected,
    operator,
    stackStartFunction
  });
}
function ok(value, message) {
  if (!value)
    fail(value, true, message, "==", ok);
}
function equal(actual, expected, message) {
  if (actual != expected)
    fail(actual, expected, message, "==", equal);
}
function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, "!=", notEqual);
  }
}
function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, "deepEqual", deepEqual);
  }
}
function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, "deepStrictEqual", deepStrictEqual);
  }
}
function _deepEqual(actual, expected, strict, memos) {
  if (actual === expected) {
    return true;
  } else if (isBuffer2(actual) && isBuffer2(expected)) {
    return compare3(actual, expected) === 0;
  } else if (isDate(actual) && isDate(expected)) {
    return actual.getTime() === expected.getTime();
  } else if (isRegExp(actual) && isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
  } else if ((actual === null || typeof actual !== "object") && (expected === null || typeof expected !== "object")) {
    return strict ? actual === expected : actual == expected;
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare3(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
  } else if (isBuffer2(actual) !== isBuffer2(expected)) {
    return false;
  } else {
    memos = memos || { actual: [], expected: [] };
    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }
    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}
function isArguments(object) {
  return Object.prototype.toString.call(object) == "[object Arguments]";
}
function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === void 0 || b === null || b === void 0)
    return false;
  if (isPrimitive(a) || isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs)
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys2(a);
  var kb = objectKeys2(b);
  var key, i;
  if (ka.length !== kb.length)
    return false;
  ka.sort();
  kb.sort();
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}
function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, "notDeepEqual", notDeepEqual);
  }
}
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual);
  }
}
function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, "===", strictEqual);
  }
}
function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, "!==", notStrictEqual);
  }
}
function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }
  if (Object.prototype.toString.call(expected) == "[object RegExp]") {
    return expected.test(actual);
  }
  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
  }
  if (Error.isPrototypeOf(expected)) {
    return false;
  }
  return expected.call({}, actual) === true;
}
function _tryBlock(block) {
  var error2;
  try {
    block();
  } catch (e) {
    error2 = e;
  }
  return error2;
}
function _throws(shouldThrow, block, expected, message) {
  var actual;
  if (typeof block !== "function") {
    throw new TypeError('"block" argument must be a function');
  }
  if (typeof expected === "string") {
    message = expected;
    expected = null;
  }
  actual = _tryBlock(block);
  message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
  if (shouldThrow && !actual) {
    fail(actual, expected, "Missing expected exception" + message);
  }
  var userProvidedMessage = typeof message === "string";
  var isUnwantedException = !shouldThrow && isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;
  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, "Got unwanted exception" + message);
  }
  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
}
function throws(block, error2, message) {
  _throws(true, block, error2, message);
}
function doesNotThrow(block, error2, message) {
  _throws(false, block, error2, message);
}
function ifError(err2) {
  if (err2)
    throw err2;
}
var hasOwn, objectKeys2, pSlice, _functionsHaveNames, assert_default, regex;
var init_assert = __esm({
  "node-modules-polyfills:assert"() {
    init_buffer();
    init_util();
    hasOwn = Object.prototype.hasOwnProperty;
    objectKeys2 = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        if (hasOwn.call(obj, key))
          keys2.push(key);
      }
      return keys2;
    };
    pSlice = Array.prototype.slice;
    assert_default = assert;
    regex = /\s*function\s+([^\(\s]*)\s*/;
    assert.AssertionError = AssertionError;
    inherits_default(AssertionError, Error);
    assert.fail = fail;
    assert.ok = ok;
    assert.equal = equal;
    assert.notEqual = notEqual;
    assert.deepEqual = deepEqual;
    assert.deepStrictEqual = deepStrictEqual;
    assert.notDeepEqual = notDeepEqual;
    assert.notDeepStrictEqual = notDeepStrictEqual;
    assert.strictEqual = strictEqual;
    assert.notStrictEqual = notStrictEqual;
    assert.throws = throws;
    assert.doesNotThrow = doesNotThrow;
    assert.ifError = ifError;
  }
});

// node-modules-polyfills-commonjs:assert
var require_assert = __commonJS({
  "node-modules-polyfills-commonjs:assert"(exports, module2) {
    var polyfill = (init_assert(), assert_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// ../../node_modules/ms/index.js
var require_ms = __commonJS({
  "../../node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type2 = typeof val;
      if (type2 === "string" && val.length > 0) {
        return parse3(val);
      } else if (type2 === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse3(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../node_modules/debug/src/common.js"(exports, module2) {
    function setup(env2) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env2).forEach((key) => {
        createDebug[key] = env2[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug2(...args) {
          if (!debug2.enabled) {
            return;
          }
          const self = debug2;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format3) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format3];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug2.namespace = namespace;
        debug2.useColors = createDebug.useColors();
        debug2.color = createDebug.selectColor(namespace);
        debug2.extend = extend;
        debug2.destroy = createDebug.destroy;
        Object.defineProperty(debug2, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug2);
        }
        return debug2;
      }
      function extend(namespace, delimiter2) {
        const newDebug = createDebug(this.namespace + (typeof delimiter2 === "undefined" ? ":" : delimiter2) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// ../../node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error2) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error2) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error2) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error2) {
        return "[UnexpectedJSONParseError]: " + error2.message;
      }
    };
  }
});

// node-modules-polyfills:tty
var tty_exports = {};
__export(tty_exports, {
  ReadStream: () => ReadStream,
  WriteStream: () => WriteStream,
  default: () => tty_default,
  isatty: () => isatty
});
function isatty() {
  return false;
}
function ReadStream() {
  throw new Error("tty.ReadStream is not implemented");
}
function WriteStream() {
  throw new Error("tty.ReadStream is not implemented");
}
var tty_default;
var init_tty = __esm({
  "node-modules-polyfills:tty"() {
    tty_default = {
      isatty,
      ReadStream,
      WriteStream
    };
  }
});

// node-modules-polyfills-commonjs:tty
var require_tty = __commonJS({
  "node-modules-polyfills-commonjs:tty"(exports, module2) {
    var polyfill = (init_tty(), tty_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills-commonjs:util
var require_util = __commonJS({
  "node-modules-polyfills-commonjs:util"(exports, module2) {
    var polyfill = (init_util(), util_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node-modules-polyfills:os
var os_exports = {};
__export(os_exports, {
  EOL: () => EOL,
  arch: () => arch,
  cpus: () => cpus,
  default: () => os_default,
  endianness: () => endianness,
  freemem: () => freemem,
  getNetworkInterfaces: () => getNetworkInterfaces,
  hostname: () => hostname,
  loadavg: () => loadavg,
  networkInterfaces: () => networkInterfaces,
  platform: () => platform2,
  release: () => release2,
  tmpDir: () => tmpDir,
  tmpdir: () => tmpdir,
  totalmem: () => totalmem,
  type: () => type,
  uptime: () => uptime2
});
function endianness() {
  if (typeof _endianness === "undefined") {
    var a = new ArrayBuffer(2);
    var b = new Uint8Array(a);
    var c = new Uint16Array(a);
    b[0] = 1;
    b[1] = 2;
    if (c[0] === 258) {
      _endianness = "BE";
    } else if (c[0] === 513) {
      _endianness = "LE";
    } else {
      throw new Error("unable to figure out endianess");
    }
  }
  return _endianness;
}
function hostname() {
  if (typeof globalThis.location !== "undefined") {
    return globalThis.location.hostname;
  } else
    return "";
}
function loadavg() {
  return [];
}
function uptime2() {
  return 0;
}
function freemem() {
  return Number.MAX_VALUE;
}
function totalmem() {
  return Number.MAX_VALUE;
}
function cpus() {
  return [];
}
function type() {
  return "Browser";
}
function release2() {
  if (typeof globalThis.navigator !== "undefined") {
    return globalThis.navigator.appVersion;
  }
  return "";
}
function networkInterfaces() {
}
function getNetworkInterfaces() {
}
function arch() {
  return "javascript";
}
function platform2() {
  return "browser";
}
function tmpDir() {
  return "/tmp";
}
var _endianness, tmpdir, EOL, os_default;
var init_os = __esm({
  "node-modules-polyfills:os"() {
    tmpdir = tmpDir;
    EOL = "\n";
    os_default = {
      EOL,
      tmpdir,
      tmpDir,
      networkInterfaces,
      getNetworkInterfaces,
      release: release2,
      type,
      cpus,
      totalmem,
      freemem,
      uptime: uptime2,
      loadavg,
      hostname,
      endianness
    };
  }
});

// node-modules-polyfills-commonjs:os
var require_os = __commonJS({
  "node-modules-polyfills-commonjs:os"(exports, module2) {
    var polyfill = (init_os(), os_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// ../../node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv2 = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv2.indexOf(prefix + flag);
      const terminatorPosition = argv2.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// ../../node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require_os();
    var tty = require_tty();
    var hasFlag = require_has_flag();
    var { env: env2 } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env2) {
      if (env2.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env2.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env2.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env2.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env2.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version2 = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version2 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// ../../node_modules/debug/src/node.js
var require_node = __commonJS({
  "../../node_modules/debug/src/node.js"(exports, module2) {
    var tty = require_tty();
    var util = require_util();
    exports.init = init2;
    exports.log = log2;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error2) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} [0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log2(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init2(debug2) {
      debug2.inspectOpts = {};
      const keys2 = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys2.length; i++) {
        debug2.inspectOpts[keys2[i]] = exports.inspectOpts[keys2[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// ../../node_modules/debug/src/index.js
var require_src = __commonJS({
  "../../node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug2;
    module2.exports = function() {
      if (!debug2) {
        try {
          debug2 = require_src()("follow-redirects");
        } catch (error2) {
        }
        if (typeof debug2 !== "function") {
          debug2 = function() {
          };
        }
      }
      debug2.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    var url = require_url();
    var URL = url.URL;
    var http = require_http();
    var https = require_https();
    var Writable2 = require_stream().Writable;
    var assert3 = require_assert();
    var debug2 = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    function RedirectableRequest(options, responseCallback) {
      Writable2.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self = this;
      this._onNativeResponse = function(response) {
        self._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable2.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!isString3(data) && !isBuffer3(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction3(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (isFunction3(data)) {
        callback = data;
        data = encoding = null;
      } else if (isFunction3(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self._timeout) {
          clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
          self.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self._timeout) {
          clearTimeout(self._timeout);
          self._timeout = null;
        }
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        if (callback) {
          self.removeListener("timeout", callback);
        }
        if (!self.socket) {
          self._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }
      var request3 = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      request3._redirectable = this;
      for (var event of events) {
        request3.on(event, eventHandlers[event]);
      }
      this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : this._options.path;
      if (this._isRedirect) {
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error2) {
          if (request3 === self._currentRequest) {
            if (error2) {
              self.emit("error", error2);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request3.finished) {
                request3.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self._ended) {
              request3.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      abortRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          Host: response.req.getHeader("host")
        }, this._options.headers);
      }
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = url.parse(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, { host: currentHost }));
      var redirectUrl;
      try {
        redirectUrl = url.resolve(currentUrl, location);
      } catch (cause) {
        this.emit("error", new RedirectionError({ cause }));
        return;
      }
      debug2("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);
      if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
      }
      if (isFunction3(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode
        };
        var requestDetails = {
          url: currentUrl,
          method,
          headers: requestHeaders
        };
        try {
          beforeRedirect(this._options, responseDetails, requestDetails);
        } catch (err2) {
          this.emit("error", err2);
          return;
        }
        this._sanitizeOptions(this._options);
      }
      try {
        this._performRequest();
      } catch (cause) {
        this.emit("error", new RedirectionError({ cause }));
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request3(input, options, callback) {
          if (isString3(input)) {
            var parsed;
            try {
              parsed = urlToOptions(new URL(input));
            } catch (err2) {
              parsed = url.parse(input);
            }
            if (!isString3(parsed.protocol)) {
              throw new InvalidUrlError({ input });
            }
            input = parsed;
          } else if (URL && input instanceof URL) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (isFunction3(options)) {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString3(options.host) && !isString3(options.hostname)) {
            options.hostname = "::1";
          }
          assert3.equal(options.protocol, protocol, "protocol mismatch");
          debug2("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get3(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request3, configurable: true, enumerable: true, writable: true },
          get: { value: get3, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop2() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex2, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex2.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, message, baseClass) {
      function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }
      CustomError.prototype = new (baseClass || Error)();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      return CustomError;
    }
    function abortRequest(request3) {
      for (var event of events) {
        request3.removeListener(event, eventHandlers[event]);
      }
      request3.on("error", noop2);
      request3.abort();
    }
    function isSubdomain(subdomain, domain2) {
      assert3(isString3(subdomain) && isString3(domain2));
      var dot = subdomain.length - domain2.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain2);
    }
    function isString3(value) {
      return typeof value === "string" || value instanceof String;
    }
    function isFunction3(value) {
      return typeof value === "function";
    }
    function isBuffer3(value) {
      return typeof value === "object" && "length" in value;
    }
    module2.exports = wrap({ http, https });
    module2.exports.wrap = wrap;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/messages.js
var messages_default;
var init_messages = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/messages.js"() {
    messages_default = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/zstream.js
function ZStream() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var zstream_default;
var init_zstream = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/zstream.js"() {
    zstream_default = ZStream;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/utils.js
function arraySet(dest, src, src_offs, len, dest_offs) {
  if (src.subarray && dest.subarray) {
    dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
    return;
  }
  for (var i = 0; i < len; i++) {
    dest[dest_offs + i] = src[src_offs + i];
  }
}
var Buf8, Buf16, Buf32;
var init_utils = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/utils.js"() {
    "use strict";
    Buf8 = Uint8Array;
    Buf16 = Uint16Array;
    Buf32 = Int32Array;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/trees.js
function zero(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
function put_short(s, w) {
  s.pending_buf[s.pending++] = w & 255;
  s.pending_buf[s.pending++] = w >>> 8 & 255;
}
function send_bits(s, value, length) {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 65535;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 65535;
    s.bi_valid += length;
  }
}
function send_code(s, c, tree) {
  send_bits(s, tree[c * 2], tree[c * 2 + 1]);
}
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 255;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}
function gen_bitlen(s, desc) {
  var tree = desc.dyn_tree;
  var max_code = desc.max_code;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var extra = desc.stat_desc.extra_bits;
  var base2 = desc.stat_desc.extra_base;
  var max_length = desc.stat_desc.max_length;
  var h;
  var n, m;
  var bits;
  var xbits;
  var f;
  var overflow = 0;
  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }
  tree[s.heap[s.heap_max] * 2 + 1] = 0;
  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] = bits;
    if (n > max_code) {
      continue;
    }
    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base2) {
      xbits = extra[n - base2];
    }
    f = tree[n * 2];
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--;
    s.bl_count[bits + 1] += 2;
    s.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] !== bits) {
        s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
        tree[m * 2 + 1] = bits;
      }
      n--;
    }
  }
}
function gen_codes(tree, max_code, bl_count) {
  var next_code = new Array(MAX_BITS + 1);
  var code = 0;
  var bits;
  var n;
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = code + bl_count[bits - 1] << 1;
  }
  for (n = 0; n <= max_code; n++) {
    var len = tree[n * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n * 2] = bi_reverse(next_code[len]++, len);
  }
}
function tr_static_init() {
  var n;
  var bits;
  var length;
  var code;
  var dist;
  var bl_count = new Array(MAX_BITS + 1);
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  }
  _length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  }
  dist >>= 7;
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES + 1, bl_count);
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1] = 5;
    static_dtree[n * 2] = bi_reverse(n, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
}
function init_block(s) {
  var n;
  for (n = 0; n < L_CODES; n++) {
    s.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < D_CODES; n++) {
    s.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < BL_CODES; n++) {
    s.bl_tree[n * 2] = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}
function bi_windup(s) {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}
function copy_block(s, buf, len, header) {
  bi_windup(s);
  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
  arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}
function pqdownheap(s, tree, k) {
  var v = s.heap[k];
  var j = k << 1;
  while (j <= s.heap_len) {
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }
    s.heap[k] = s.heap[j];
    k = j;
    j <<= 1;
  }
  s.heap[k] = v;
}
function compress_block(s, ltree, dtree) {
  var dist;
  var lc;
  var lx = 0;
  var code;
  var extra;
  if (s.last_lit !== 0) {
    do {
      dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
      lc = s.pending_buf[s.l_buf + lx];
      lx++;
      if (dist === 0) {
        send_code(s, lc, ltree);
      } else {
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree);
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);
        }
        dist--;
        code = d_code(dist);
        send_code(s, code, dtree);
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);
        }
      }
    } while (lx < s.last_lit);
  }
  send_code(s, END_BLOCK, ltree);
}
function build_tree(s, desc) {
  var tree = desc.dyn_tree;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems = desc.stat_desc.elems;
  var n, m;
  var max_code = -1;
  var node;
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;
  for (n = 0; n < elems; n++) {
    if (tree[n * 2] !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] = 0;
    }
  }
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n = s.heap_len >> 1; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  node = elems;
  do {
    n = s.heap[1];
    s.heap[1] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1);
    m = s.heap[1];
    s.heap[--s.heap_max] = n;
    s.heap[--s.heap_max] = m;
    tree[node * 2] = tree[n * 2] + tree[m * 2];
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] = tree[m * 2 + 1] = node;
    s.heap[1] = node++;
    pqdownheap(s, tree, 1);
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[1];
  gen_bitlen(s, desc);
  gen_codes(tree, max_code, s.bl_count);
}
function scan_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2]++;
      }
      s.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function send_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function build_bl_tree(s) {
  var max_blindex;
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  build_tree(s, s.bl_desc);
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
}
function send_all_trees(s, lcodes, dcodes, blcodes) {
  var rank2;
  send_bits(s, lcodes - 257, 5);
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  for (rank2 = 0; rank2 < blcodes; rank2++) {
    send_bits(s, s.bl_tree[bl_order[rank2] * 2 + 1], 3);
  }
  send_tree(s, s.dyn_ltree, lcodes - 1);
  send_tree(s, s.dyn_dtree, dcodes - 1);
}
function detect_data_type(s) {
  var black_mask = 4093624447;
  var n;
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
}
function _tr_init(s) {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  init_block(s);
}
function _tr_stored_block(s, buf, stored_len, last) {
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
  copy_block(s, buf, stored_len, true);
}
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}
function _tr_flush_block(s, buf, stored_len, last) {
  var opt_lenb, static_lenb;
  var max_blindex = 0;
  if (s.level > 0) {
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }
    build_tree(s, s.l_desc);
    build_tree(s, s.d_desc);
    max_blindex = build_bl_tree(s);
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  init_block(s);
  if (last) {
    bi_windup(s);
  }
}
function _tr_tally(s, dist, lc) {
  s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
  s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
  s.last_lit++;
  if (dist === 0) {
    s.dyn_ltree[lc * 2]++;
  } else {
    s.matches++;
    dist--;
    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
    s.dyn_dtree[d_code(dist) * 2]++;
  }
  return s.last_lit === s.lit_bufsize - 1;
}
var Z_FIXED, Z_BINARY, Z_TEXT, Z_UNKNOWN, STORED_BLOCK, STATIC_TREES, DYN_TREES, MIN_MATCH, MAX_MATCH, LENGTH_CODES, LITERALS, L_CODES, D_CODES, BL_CODES, HEAP_SIZE, MAX_BITS, Buf_size, MAX_BL_BITS, END_BLOCK, REP_3_6, REPZ_3_10, REPZ_11_138, extra_lbits, extra_dbits, extra_blbits, bl_order, DIST_CODE_LEN, static_ltree, static_dtree, _dist_code, _length_code, base_length, base_dist, static_l_desc, static_d_desc, static_bl_desc, static_init_done;
var init_trees = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/trees.js"() {
    init_utils();
    "use strict";
    Z_FIXED = 4;
    Z_BINARY = 0;
    Z_TEXT = 1;
    Z_UNKNOWN = 2;
    STORED_BLOCK = 0;
    STATIC_TREES = 1;
    DYN_TREES = 2;
    MIN_MATCH = 3;
    MAX_MATCH = 258;
    LENGTH_CODES = 29;
    LITERALS = 256;
    L_CODES = LITERALS + 1 + LENGTH_CODES;
    D_CODES = 30;
    BL_CODES = 19;
    HEAP_SIZE = 2 * L_CODES + 1;
    MAX_BITS = 15;
    Buf_size = 16;
    MAX_BL_BITS = 7;
    END_BLOCK = 256;
    REP_3_6 = 16;
    REPZ_3_10 = 17;
    REPZ_11_138 = 18;
    extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
    extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
    bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    DIST_CODE_LEN = 512;
    static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    base_length = new Array(LENGTH_CODES);
    zero(base_length);
    base_dist = new Array(D_CODES);
    zero(base_dist);
    static_init_done = false;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/adler32.js
function adler32(adler, buf, len, pos) {
  var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  while (len !== 0) {
    n = len > 2e3 ? 2e3 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
}
var adler32_default;
var init_adler32 = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/adler32.js"() {
    adler32_default = adler32;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/crc32.js
function makeTable() {
  var c, table = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    }
    table[n] = c;
  }
  return table;
}
function crc32(crc, buf, len, pos) {
  var t = crcTable, end = pos + len;
  crc ^= -1;
  for (var i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  }
  return crc ^ -1;
}
var crcTable, crc32_default;
var init_crc32 = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/crc32.js"() {
    crcTable = makeTable();
    crc32_default = crc32;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/deflate.js
function err(strm, errorCode) {
  strm.msg = messages_default[errorCode];
  return errorCode;
}
function rank(f) {
  return (f << 1) - (f > 4 ? 9 : 0);
}
function zero2(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
function flush_pending(strm) {
  var s = strm.state;
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}
function flush_block_only(s, last) {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}
function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}
function putShortMSB(s, b) {
  s.pending_buf[s.pending++] = b >>> 8 & 255;
  s.pending_buf[s.pending++] = b & 255;
}
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_default(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32_default(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
}
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;
  var scan = s.strstart;
  var match;
  var len;
  var best_len = s.prev_length;
  var nice_match = s.nice_match;
  var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
  var _win = s.window;
  var wmask = s.w_mask;
  var prev = s.prev;
  var strend = s.strstart + MAX_MATCH2;
  var scan_end1 = _win[scan + best_len - 1];
  var scan_end = _win[scan + best_len];
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH2 - (strend - scan);
    scan = strend - MAX_MATCH2;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;
  do {
    more = s.window_size - s.lookahead - s.strstart;
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      s.block_start -= _w_size;
      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    if (s.lookahead + s.insert >= MIN_MATCH2) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
      while (s.insert) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH2 - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH2) {
          break;
        }
      }
    }
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
}
function deflate_stored(s, flush) {
  var max_block_size = 65535;
  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }
  for (; ; ) {
    if (s.lookahead <= 1) {
      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.strstart += s.lookahead;
    s.lookahead = 0;
    var max_start = s.block_start + max_block_size;
    if (s.strstart === 0 || s.strstart >= max_start) {
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.strstart > s.block_start) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_NEED_MORE;
}
function deflate_fast(s, flush) {
  var hash_head;
  var bflush;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH2) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH2 - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
    }
    if (s.match_length >= MIN_MATCH2) {
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH2);
      s.lookahead -= s.match_length;
      if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH2) {
        s.match_length--;
        do {
          s.strstart++;
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH2 - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
      }
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = s.strstart < MIN_MATCH2 - 1 ? s.strstart : MIN_MATCH2 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_slow(s, flush) {
  var hash_head;
  var bflush;
  var max_insert;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH2) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH2 - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH2 - 1;
    if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH2 && s.strstart - s.match_start > 4096)) {
        s.match_length = MIN_MATCH2 - 1;
      }
    }
    if (s.prev_length >= MIN_MATCH2 && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH2;
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH2);
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH2 - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH2 - 1;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s.match_available) {
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        flush_block_only(s, false);
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  if (s.match_available) {
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH2 - 1 ? s.strstart : MIN_MATCH2 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_rle(s, flush) {
  var bflush;
  var prev;
  var scan, strend;
  var _win = s.window;
  for (; ; ) {
    if (s.lookahead <= MAX_MATCH2) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH2 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH2 && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH2;
        do {
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH2 - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
    }
    if (s.match_length >= MIN_MATCH2) {
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH2);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_huff(s, flush) {
  var bflush;
  for (; ; ) {
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s.match_length = 0;
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
function lm_init(s) {
  s.window_size = 2 * s.w_size;
  zero2(s.head);
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH2 - 1;
  s.match_available = 0;
  s.ins_h = 0;
}
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Buf16(HEAP_SIZE2 * 2);
  this.dyn_dtree = new Buf16((2 * D_CODES2 + 1) * 2);
  this.bl_tree = new Buf16((2 * BL_CODES2 + 1) * 2);
  zero2(this.dyn_ltree);
  zero2(this.dyn_dtree);
  zero2(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Buf16(MAX_BITS2 + 1);
  this.heap = new Buf16(2 * L_CODES2 + 1);
  zero2(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Buf16(2 * L_CODES2 + 1);
  zero2(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function deflateResetKeep(strm) {
  var s;
  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN2;
  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
  }
  s.status = s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 : 1;
  s.last_flush = Z_NO_FLUSH;
  _tr_init(s);
  return Z_OK;
}
function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) {
    return Z_STREAM_ERROR;
  }
  var wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED2) {
    return err(strm, Z_STREAM_ERROR);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  var s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH2 - 1) / MIN_MATCH2);
  s.window = new Buf8(s.w_size * 2);
  s.head = new Buf16(s.hash_size);
  s.prev = new Buf16(s.w_size);
  s.lit_bufsize = 1 << memLevel + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Buf8(s.pending_buf_size);
  s.d_buf = 1 * s.lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
}
function deflate(strm, flush) {
  var old_flush, s;
  var beg, val;
  if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }
  s = strm.state;
  if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }
  s.strm = strm;
  old_flush = s.last_flush;
  s.last_flush = flush;
  if (s.status === INIT_STATE) {
    if (s.wrap === 2) {
      strm.adler = 0;
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) {
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      } else {
        put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
        put_byte(s, s.gzhead.time & 255);
        put_byte(s, s.gzhead.time >> 8 & 255);
        put_byte(s, s.gzhead.time >> 16 & 255);
        put_byte(s, s.gzhead.time >> 24 & 255);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, s.gzhead.os & 255);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 255);
          put_byte(s, s.gzhead.extra.length >> 8 & 255);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    } else {
      var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
      var level_flags = -1;
      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= level_flags << 6;
      if (s.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - header % 31;
      s.status = BUSY_STATE;
      putShortMSB(s, header);
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      strm.adler = 1;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      beg = s.pending;
      while (s.gzindex < (s.gzhead.extra.length & 65535)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 255);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    } else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    } else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_default(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    } else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        strm.adler = 0;
        s.status = BUSY_STATE;
      }
    } else {
      s.status = BUSY_STATE;
    }
  }
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s.last_flush = -1;
      return Z_OK;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
    var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
      }
      return Z_OK;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK) {
        _tr_stored_block(s, 0, 0, false);
        if (flush === Z_FULL_FLUSH) {
          zero2(s.head);
          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    }
  }
  if (flush !== Z_FINISH) {
    return Z_OK;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END;
  }
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 255);
    put_byte(s, strm.adler >> 8 & 255);
    put_byte(s, strm.adler >> 16 & 255);
    put_byte(s, strm.adler >> 24 & 255);
    put_byte(s, strm.total_in & 255);
    put_byte(s, strm.total_in >> 8 & 255);
    put_byte(s, strm.total_in >> 16 & 255);
    put_byte(s, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
  var status2;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  status2 = strm.state.status;
  if (status2 !== INIT_STATE && status2 !== EXTRA_STATE && status2 !== NAME_STATE && status2 !== COMMENT_STATE && status2 !== HCRC_STATE && status2 !== BUSY_STATE && status2 !== FINISH_STATE) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.state = null;
  return status2 === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
var Z_NO_FLUSH, Z_PARTIAL_FLUSH, Z_FULL_FLUSH, Z_FINISH, Z_BLOCK, Z_OK, Z_STREAM_END, Z_STREAM_ERROR, Z_DATA_ERROR, Z_BUF_ERROR, Z_DEFAULT_COMPRESSION, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED2, Z_UNKNOWN2, Z_DEFLATED, MAX_MEM_LEVEL, LENGTH_CODES2, LITERALS2, L_CODES2, D_CODES2, BL_CODES2, HEAP_SIZE2, MAX_BITS2, MIN_MATCH2, MAX_MATCH2, MIN_LOOKAHEAD, PRESET_DICT, INIT_STATE, EXTRA_STATE, NAME_STATE, COMMENT_STATE, HCRC_STATE, BUSY_STATE, FINISH_STATE, BS_NEED_MORE, BS_BLOCK_DONE, BS_FINISH_STARTED, BS_FINISH_DONE, OS_CODE, configuration_table;
var init_deflate = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/deflate.js"() {
    init_utils();
    init_trees();
    init_adler32();
    init_crc32();
    init_messages();
    Z_NO_FLUSH = 0;
    Z_PARTIAL_FLUSH = 1;
    Z_FULL_FLUSH = 3;
    Z_FINISH = 4;
    Z_BLOCK = 5;
    Z_OK = 0;
    Z_STREAM_END = 1;
    Z_STREAM_ERROR = -2;
    Z_DATA_ERROR = -3;
    Z_BUF_ERROR = -5;
    Z_DEFAULT_COMPRESSION = -1;
    Z_FILTERED = 1;
    Z_HUFFMAN_ONLY = 2;
    Z_RLE = 3;
    Z_FIXED2 = 4;
    Z_UNKNOWN2 = 2;
    Z_DEFLATED = 8;
    MAX_MEM_LEVEL = 9;
    LENGTH_CODES2 = 29;
    LITERALS2 = 256;
    L_CODES2 = LITERALS2 + 1 + LENGTH_CODES2;
    D_CODES2 = 30;
    BL_CODES2 = 19;
    HEAP_SIZE2 = 2 * L_CODES2 + 1;
    MAX_BITS2 = 15;
    MIN_MATCH2 = 3;
    MAX_MATCH2 = 258;
    MIN_LOOKAHEAD = MAX_MATCH2 + MIN_MATCH2 + 1;
    PRESET_DICT = 32;
    INIT_STATE = 42;
    EXTRA_STATE = 69;
    NAME_STATE = 73;
    COMMENT_STATE = 91;
    HCRC_STATE = 103;
    BUSY_STATE = 113;
    FINISH_STATE = 666;
    BS_NEED_MORE = 1;
    BS_BLOCK_DONE = 2;
    BS_FINISH_STARTED = 3;
    BS_FINISH_DONE = 4;
    OS_CODE = 3;
    configuration_table = [
      new Config(0, 0, 0, 0, deflate_stored),
      new Config(4, 4, 8, 4, deflate_fast),
      new Config(4, 5, 16, 8, deflate_fast),
      new Config(4, 6, 32, 32, deflate_fast),
      new Config(4, 4, 16, 16, deflate_slow),
      new Config(8, 16, 32, 32, deflate_slow),
      new Config(8, 16, 128, 128, deflate_slow),
      new Config(8, 32, 128, 256, deflate_slow),
      new Config(32, 128, 258, 1024, deflate_slow),
      new Config(32, 258, 258, 4096, deflate_slow)
    ];
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inffast.js
function inflate_fast(strm, start) {
  var state;
  var _in;
  var last;
  var _out;
  var beg;
  var end;
  var dmax;
  var wsize;
  var whave;
  var wnext;
  var s_window;
  var hold;
  var bits;
  var lcode;
  var dcode;
  var lmask;
  var dmask;
  var here;
  var op;
  var len;
  var dist;
  var from2;
  var from_source;
  var input, output;
  state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                    }
                    from2 = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from2 += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from2++];
                        } while (--op);
                        from2 = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from2 += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from2++];
                        } while (--op);
                        from2 = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from2++];
                          } while (--op);
                          from2 = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from2 += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from2++];
                        } while (--op);
                        from2 = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from2++];
                      output[_out++] = from_source[from2++];
                      output[_out++] = from_source[from2++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from2++];
                      if (len > 1) {
                        output[_out++] = from_source[from2++];
                      }
                    }
                  } else {
                    from2 = _out - dist;
                    do {
                      output[_out++] = output[from2++];
                      output[_out++] = output[from2++];
                      output[_out++] = output[from2++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from2++];
                      if (len > 1) {
                        output[_out++] = output[from2++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break top;
          }
          break;
        }
    } while (_in < last && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
}
var BAD, TYPE;
var init_inffast = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inffast.js"() {
    BAD = 30;
    TYPE = 12;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inftrees.js
function inflate_table(type2, lens, lens_index, codes2, table, table_index, work, opts) {
  var bits = opts.bits;
  var len = 0;
  var sym = 0;
  var min = 0, max = 0;
  var root = 0;
  var curr = 0;
  var drop = 0;
  var left = 0;
  var used = 0;
  var huff = 0;
  var incr;
  var fill2;
  var low;
  var mask;
  var next;
  var base2 = null;
  var base_index = 0;
  var end;
  var count = new Buf16(MAXBITS + 1);
  var offs = new Buf16(MAXBITS + 1);
  var extra = null;
  var extra_index = 0;
  var here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes2; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type2 === CODES || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0; sym < codes2; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type2 === CODES) {
    base2 = extra = work;
    end = 19;
  } else if (type2 === LENS) {
    base2 = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;
  } else {
    base2 = dbase;
    extra = dext;
    end = -1;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type2 === LENS && used > ENOUGH_LENS || type2 === DISTS && used > ENOUGH_DISTS) {
    return 1;
  }
  var i = 0;
  for (; ; ) {
    i++;
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base2[base_index + work[sym]];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill2 = 1 << curr;
    min = fill2;
    do {
      fill2 -= incr;
      table[next + (huff >> drop) + fill2] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill2 !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type2 === LENS && used > ENOUGH_LENS || type2 === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
}
var MAXBITS, ENOUGH_LENS, ENOUGH_DISTS, CODES, LENS, DISTS, lbase, lext, dbase, dext;
var init_inftrees = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inftrees.js"() {
    init_utils();
    MAXBITS = 15;
    ENOUGH_LENS = 852;
    ENOUGH_DISTS = 592;
    CODES = 0;
    LENS = 1;
    DISTS = 2;
    lbase = [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    lext = [
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    dbase = [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    dext = [
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inflate.js
function zswap32(q) {
  return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
}
function InflateState() {
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Buf16(320);
  this.work = new Buf16(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function inflateResetKeep(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR2;
  }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = new Buf32(ENOUGH_LENS2);
  state.distcode = state.distdyn = new Buf32(ENOUGH_DISTS2);
  state.sane = 1;
  state.back = -1;
  return Z_OK2;
}
function inflateReset(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR2;
  }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
  var wrap;
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR2;
  }
  state = strm.state;
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR2;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
  var ret;
  var state;
  if (!strm) {
    return Z_STREAM_ERROR2;
  }
  state = new InflateState();
  strm.state = state;
  state.window = null;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK2) {
    strm.state = null;
  }
  return ret;
}
function fixedtables(state) {
  if (virgin) {
    var sym;
    lenfix = new Buf32(512);
    distfix = new Buf32(32);
    sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inflate_table(LENS2, state.lens, 0, 288, lenfix, 0, state.work, {
      bits: 9
    });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inflate_table(DISTS2, state.lens, 0, 32, distfix, 0, state.work, {
      bits: 5
    });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}
function updatewindow(strm, src, end, copy2) {
  var dist;
  var state = strm.state;
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = new Buf8(state.wsize);
  }
  if (copy2 >= state.wsize) {
    arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy2) {
      dist = copy2;
    }
    arraySet(state.window, src, end - copy2, dist, state.wnext);
    copy2 -= dist;
    if (copy2) {
      arraySet(state.window, src, end - copy2, copy2, 0);
      state.wnext = copy2;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
}
function inflate(strm, flush) {
  var state;
  var input, output;
  var next;
  var put;
  var have, left;
  var hold;
  var bits;
  var _in, _out;
  var copy2;
  var from2;
  var from_source;
  var here = 0;
  var here_bits, here_op, here_val;
  var last_bits, last_op, last_val;
  var len;
  var ret;
  var hbuf = new Buf8(4);
  var opts;
  var n;
  var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR2;
  }
  state = strm.state;
  if (state.mode === TYPE2) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK2;
  inf_leave:
    for (; ; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_default(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD2;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED2) {
            strm.msg = "unknown compression method";
            state.mode = BAD2;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD2;
            break;
          }
          state.dmax = 1 << len;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE2;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED2) {
            strm.msg = "unknown compression method";
            state.mode = BAD2;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD2;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_default(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32_default(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_default(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_default(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        case EXTRA:
          if (state.flags & 1024) {
            copy2 = state.length;
            if (copy2 > have) {
              copy2 = have;
            }
            if (copy2) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Array(state.head.extra_len);
                }
                arraySet(state.head.extra, input, next, copy2, len);
              }
              if (state.flags & 512) {
                state.check = crc32_default(state.check, input, copy2, next);
              }
              have -= copy2;
              next += copy2;
              state.length -= copy2;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy2 = 0;
            do {
              len = input[next + copy2++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy2 < have);
            if (state.flags & 512) {
              state.check = crc32_default(state.check, input, copy2, next);
            }
            have -= copy2;
            next += copy2;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy2 = 0;
            do {
              len = input[next + copy2++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy2 < have);
            if (state.flags & 512) {
              state.check = crc32_default(state.check, input, copy2, next);
            }
            have -= copy2;
            next += copy2;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD2;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE2;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE2;
        case TYPE2:
          if (flush === Z_BLOCK2 || flush === Z_TREES) {
            break inf_leave;
          }
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD2;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD2;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case COPY_:
          state.mode = COPY;
        case COPY:
          copy2 = state.length;
          if (copy2) {
            if (copy2 > have) {
              copy2 = have;
            }
            if (copy2 > left) {
              copy2 = left;
            }
            if (copy2 === 0) {
              break inf_leave;
            }
            arraySet(output, input, next, copy2, put);
            have -= copy2;
            next += copy2;
            left -= copy2;
            put += copy2;
            state.length -= copy2;
            break;
          }
          state.mode = TYPE2;
          break;
        case TABLE:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD2;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = {
            bits: state.lenbits
          };
          ret = inflate_table(CODES2, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD2;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD2;
                  break;
                }
                len = state.lens[state.have - 1];
                copy2 = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy2 = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy2 = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy2 > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD2;
                break;
              }
              while (copy2--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD2) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD2;
            break;
          }
          state.lenbits = 9;
          opts = {
            bits: state.lenbits
          };
          ret = inflate_table(LENS2, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD2;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = {
            bits: state.distbits
          };
          ret = inflate_table(DISTS2, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD2;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case LEN_:
          state.mode = LEN;
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inflate_fast(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE2) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (; ; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE2;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD2;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        case LENEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        case DIST:
          for (; ; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD2;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        case DISTEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD2;
            break;
          }
          state.mode = MATCH;
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy2 = _out - left;
          if (state.offset > copy2) {
            copy2 = state.offset - copy2;
            if (copy2 > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD2;
                break;
              }
            }
            if (copy2 > state.wnext) {
              copy2 -= state.wnext;
              from2 = state.wsize - copy2;
            } else {
              from2 = state.wnext - copy2;
            }
            if (copy2 > state.length) {
              copy2 = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from2 = put - state.offset;
            copy2 = state.length;
          }
          if (copy2 > left) {
            copy2 = left;
          }
          left -= copy2;
          state.length -= copy2;
          do {
            output[put++] = from_source[from2++];
          } while (--copy2);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check = state.flags ? crc32_default(state.check, output, _out, put - _out) : adler32_default(state.check, output, _out, put - _out);
            }
            _out = left;
            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD2;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD2;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        case DONE:
          ret = Z_STREAM_END2;
          break inf_leave;
        case BAD2:
          ret = Z_DATA_ERROR2;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR;
        case SYNC:
        default:
          return Z_STREAM_ERROR2;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD2 && (state.mode < CHECK || flush !== Z_FINISH2)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = state.flags ? crc32_default(state.check, output, _out, strm.next_out - _out) : adler32_default(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE2 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH2) && ret === Z_OK2) {
    ret = Z_BUF_ERROR2;
  }
  return ret;
}
function inflateEnd(strm) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR2;
  }
  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK2;
}
var CODES2, LENS2, DISTS2, Z_FINISH2, Z_BLOCK2, Z_TREES, Z_OK2, Z_STREAM_END2, Z_NEED_DICT, Z_STREAM_ERROR2, Z_DATA_ERROR2, Z_MEM_ERROR, Z_BUF_ERROR2, Z_DEFLATED2, HEAD, FLAGS, TIME, OS, EXLEN, EXTRA, NAME, COMMENT, HCRC, DICTID, DICT, TYPE2, TYPEDO, STORED, COPY_, COPY, TABLE, LENLENS, CODELENS, LEN_, LEN, LENEXT, DIST, DISTEXT, MATCH, LIT, CHECK, LENGTH, DONE, BAD2, MEM, SYNC, ENOUGH_LENS2, ENOUGH_DISTS2, virgin, lenfix, distfix;
var init_inflate = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/inflate.js"() {
    init_utils();
    init_adler32();
    init_crc32();
    init_inffast();
    init_inftrees();
    "use strict";
    CODES2 = 0;
    LENS2 = 1;
    DISTS2 = 2;
    Z_FINISH2 = 4;
    Z_BLOCK2 = 5;
    Z_TREES = 6;
    Z_OK2 = 0;
    Z_STREAM_END2 = 1;
    Z_NEED_DICT = 2;
    Z_STREAM_ERROR2 = -2;
    Z_DATA_ERROR2 = -3;
    Z_MEM_ERROR = -4;
    Z_BUF_ERROR2 = -5;
    Z_DEFLATED2 = 8;
    HEAD = 1;
    FLAGS = 2;
    TIME = 3;
    OS = 4;
    EXLEN = 5;
    EXTRA = 6;
    NAME = 7;
    COMMENT = 8;
    HCRC = 9;
    DICTID = 10;
    DICT = 11;
    TYPE2 = 12;
    TYPEDO = 13;
    STORED = 14;
    COPY_ = 15;
    COPY = 16;
    TABLE = 17;
    LENLENS = 18;
    CODELENS = 19;
    LEN_ = 20;
    LEN = 21;
    LENEXT = 22;
    DIST = 23;
    DISTEXT = 24;
    MATCH = 25;
    LIT = 26;
    CHECK = 27;
    LENGTH = 28;
    DONE = 29;
    BAD2 = 30;
    MEM = 31;
    SYNC = 32;
    ENOUGH_LENS2 = 852;
    ENOUGH_DISTS2 = 592;
    virgin = true;
  }
});

// ../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/binding.js
var binding_exports = {};
__export(binding_exports, {
  DEFLATE: () => DEFLATE,
  DEFLATERAW: () => DEFLATERAW,
  GUNZIP: () => GUNZIP,
  GZIP: () => GZIP,
  INFLATE: () => INFLATE,
  INFLATERAW: () => INFLATERAW,
  NONE: () => NONE,
  UNZIP: () => UNZIP,
  Z_BEST_COMPRESSION: () => Z_BEST_COMPRESSION,
  Z_BEST_SPEED: () => Z_BEST_SPEED,
  Z_BINARY: () => Z_BINARY2,
  Z_BLOCK: () => Z_BLOCK3,
  Z_BUF_ERROR: () => Z_BUF_ERROR3,
  Z_DATA_ERROR: () => Z_DATA_ERROR3,
  Z_DEFAULT_COMPRESSION: () => Z_DEFAULT_COMPRESSION2,
  Z_DEFAULT_STRATEGY: () => Z_DEFAULT_STRATEGY,
  Z_DEFLATED: () => Z_DEFLATED3,
  Z_ERRNO: () => Z_ERRNO,
  Z_FILTERED: () => Z_FILTERED2,
  Z_FINISH: () => Z_FINISH3,
  Z_FIXED: () => Z_FIXED3,
  Z_FULL_FLUSH: () => Z_FULL_FLUSH2,
  Z_HUFFMAN_ONLY: () => Z_HUFFMAN_ONLY2,
  Z_NEED_DICT: () => Z_NEED_DICT2,
  Z_NO_COMPRESSION: () => Z_NO_COMPRESSION,
  Z_NO_FLUSH: () => Z_NO_FLUSH2,
  Z_OK: () => Z_OK3,
  Z_PARTIAL_FLUSH: () => Z_PARTIAL_FLUSH2,
  Z_RLE: () => Z_RLE2,
  Z_STREAM_END: () => Z_STREAM_END3,
  Z_STREAM_ERROR: () => Z_STREAM_ERROR3,
  Z_SYNC_FLUSH: () => Z_SYNC_FLUSH,
  Z_TEXT: () => Z_TEXT2,
  Z_TREES: () => Z_TREES2,
  Z_UNKNOWN: () => Z_UNKNOWN3,
  Zlib: () => Zlib
});
function Zlib(mode) {
  if (mode < DEFLATE || mode > UNZIP)
    throw new TypeError("Bad argument");
  this.mode = mode;
  this.init_done = false;
  this.write_in_progress = false;
  this.pending_close = false;
  this.windowBits = 0;
  this.level = 0;
  this.memLevel = 0;
  this.strategy = 0;
  this.dictionary = null;
}
function bufferSet(data, offset) {
  for (var i = 0; i < data.length; i++) {
    this[offset + i] = data[i];
  }
}
var NONE, DEFLATE, INFLATE, GZIP, GUNZIP, DEFLATERAW, INFLATERAW, UNZIP, Z_NO_FLUSH2, Z_PARTIAL_FLUSH2, Z_SYNC_FLUSH, Z_FULL_FLUSH2, Z_FINISH3, Z_BLOCK3, Z_TREES2, Z_OK3, Z_STREAM_END3, Z_NEED_DICT2, Z_ERRNO, Z_STREAM_ERROR3, Z_DATA_ERROR3, Z_BUF_ERROR3, Z_NO_COMPRESSION, Z_BEST_SPEED, Z_BEST_COMPRESSION, Z_DEFAULT_COMPRESSION2, Z_FILTERED2, Z_HUFFMAN_ONLY2, Z_RLE2, Z_FIXED3, Z_DEFAULT_STRATEGY, Z_BINARY2, Z_TEXT2, Z_UNKNOWN3, Z_DEFLATED3, status;
var init_binding = __esm({
  "../../node_modules/rollup-plugin-node-polyfills/polyfills/zlib-lib/binding.js"() {
    init_messages();
    init_zstream();
    init_deflate();
    init_inflate();
    NONE = 0;
    DEFLATE = 1;
    INFLATE = 2;
    GZIP = 3;
    GUNZIP = 4;
    DEFLATERAW = 5;
    INFLATERAW = 6;
    UNZIP = 7;
    Z_NO_FLUSH2 = 0;
    Z_PARTIAL_FLUSH2 = 1;
    Z_SYNC_FLUSH = 2;
    Z_FULL_FLUSH2 = 3;
    Z_FINISH3 = 4;
    Z_BLOCK3 = 5;
    Z_TREES2 = 6;
    Z_OK3 = 0;
    Z_STREAM_END3 = 1;
    Z_NEED_DICT2 = 2;
    Z_ERRNO = -1;
    Z_STREAM_ERROR3 = -2;
    Z_DATA_ERROR3 = -3;
    Z_BUF_ERROR3 = -5;
    Z_NO_COMPRESSION = 0;
    Z_BEST_SPEED = 1;
    Z_BEST_COMPRESSION = 9;
    Z_DEFAULT_COMPRESSION2 = -1;
    Z_FILTERED2 = 1;
    Z_HUFFMAN_ONLY2 = 2;
    Z_RLE2 = 3;
    Z_FIXED3 = 4;
    Z_DEFAULT_STRATEGY = 0;
    Z_BINARY2 = 0;
    Z_TEXT2 = 1;
    Z_UNKNOWN3 = 2;
    Z_DEFLATED3 = 8;
    Zlib.prototype.init = function(windowBits, level, memLevel, strategy, dictionary) {
      this.windowBits = windowBits;
      this.level = level;
      this.memLevel = memLevel;
      this.strategy = strategy;
      if (this.mode === GZIP || this.mode === GUNZIP)
        this.windowBits += 16;
      if (this.mode === UNZIP)
        this.windowBits += 32;
      if (this.mode === DEFLATERAW || this.mode === INFLATERAW)
        this.windowBits = -this.windowBits;
      this.strm = new zstream_default();
      var status2;
      switch (this.mode) {
        case DEFLATE:
        case GZIP:
        case DEFLATERAW:
          status2 = deflateInit2(this.strm, this.level, Z_DEFLATED3, this.windowBits, this.memLevel, this.strategy);
          break;
        case INFLATE:
        case GUNZIP:
        case INFLATERAW:
        case UNZIP:
          status2 = inflateInit2(this.strm, this.windowBits);
          break;
        default:
          throw new Error("Unknown mode " + this.mode);
      }
      if (status2 !== Z_OK3) {
        this._error(status2);
        return;
      }
      this.write_in_progress = false;
      this.init_done = true;
    };
    Zlib.prototype.params = function() {
      throw new Error("deflateParams Not supported");
    };
    Zlib.prototype._writeCheck = function() {
      if (!this.init_done)
        throw new Error("write before init");
      if (this.mode === NONE)
        throw new Error("already finalized");
      if (this.write_in_progress)
        throw new Error("write already in progress");
      if (this.pending_close)
        throw new Error("close is pending");
    };
    Zlib.prototype.write = function(flush, input, in_off, in_len, out, out_off, out_len) {
      this._writeCheck();
      this.write_in_progress = true;
      var self = this;
      process.nextTick(function() {
        self.write_in_progress = false;
        var res = self._write(flush, input, in_off, in_len, out, out_off, out_len);
        self.callback(res[0], res[1]);
        if (self.pending_close)
          self.close();
      });
      return this;
    };
    Zlib.prototype.writeSync = function(flush, input, in_off, in_len, out, out_off, out_len) {
      this._writeCheck();
      return this._write(flush, input, in_off, in_len, out, out_off, out_len);
    };
    Zlib.prototype._write = function(flush, input, in_off, in_len, out, out_off, out_len) {
      this.write_in_progress = true;
      if (flush !== Z_NO_FLUSH2 && flush !== Z_PARTIAL_FLUSH2 && flush !== Z_SYNC_FLUSH && flush !== Z_FULL_FLUSH2 && flush !== Z_FINISH3 && flush !== Z_BLOCK3) {
        throw new Error("Invalid flush value");
      }
      if (input == null) {
        input = new Buffer(0);
        in_len = 0;
        in_off = 0;
      }
      if (out._set)
        out.set = out._set;
      else
        out.set = bufferSet;
      var strm = this.strm;
      strm.avail_in = in_len;
      strm.input = input;
      strm.next_in = in_off;
      strm.avail_out = out_len;
      strm.output = out;
      strm.next_out = out_off;
      var status2;
      switch (this.mode) {
        case DEFLATE:
        case GZIP:
        case DEFLATERAW:
          status2 = deflate(strm, flush);
          break;
        case UNZIP:
        case INFLATE:
        case GUNZIP:
        case INFLATERAW:
          status2 = inflate(strm, flush);
          break;
        default:
          throw new Error("Unknown mode " + this.mode);
      }
      if (status2 !== Z_STREAM_END3 && status2 !== Z_OK3) {
        this._error(status2);
      }
      this.write_in_progress = false;
      return [strm.avail_in, strm.avail_out];
    };
    Zlib.prototype.close = function() {
      if (this.write_in_progress) {
        this.pending_close = true;
        return;
      }
      this.pending_close = false;
      if (this.mode === DEFLATE || this.mode === GZIP || this.mode === DEFLATERAW) {
        deflateEnd(this.strm);
      } else {
        inflateEnd(this.strm);
      }
      this.mode = NONE;
    };
    Zlib.prototype.reset = function() {
      switch (this.mode) {
        case DEFLATE:
        case DEFLATERAW:
          status = deflateReset(this.strm);
          break;
        case INFLATE:
        case INFLATERAW:
          status = inflateReset(this.strm);
          break;
      }
      if (status !== Z_OK3) {
        this._error(status);
      }
    };
    Zlib.prototype._error = function(status2) {
      this.onerror(messages_default[status2] + ": " + this.strm.msg, status2);
      this.write_in_progress = false;
      if (this.pending_close)
        this.close();
    };
  }
});

// node-modules-polyfills:zlib
var zlib_exports = {};
__export(zlib_exports, {
  Deflate: () => Deflate,
  DeflateRaw: () => DeflateRaw,
  Gunzip: () => Gunzip,
  Gzip: () => Gzip,
  Inflate: () => Inflate,
  InflateRaw: () => InflateRaw,
  Unzip: () => Unzip,
  Zlib: () => Zlib2,
  codes: () => codes,
  createDeflate: () => createDeflate,
  createDeflateRaw: () => createDeflateRaw,
  createGunzip: () => createGunzip,
  createGzip: () => createGzip,
  createInflate: () => createInflate,
  createInflateRaw: () => createInflateRaw,
  createUnzip: () => createUnzip,
  default: () => zlib_default,
  deflate: () => deflate2,
  deflateRaw: () => deflateRaw,
  deflateRawSync: () => deflateRawSync,
  deflateSync: () => deflateSync,
  gunzip: () => gunzip,
  gunzipSync: () => gunzipSync,
  gzip: () => gzip,
  gzipSync: () => gzipSync,
  inflate: () => inflate2,
  inflateRaw: () => inflateRaw,
  inflateRawSync: () => inflateRawSync,
  inflateSync: () => inflateSync,
  unzip: () => unzip,
  unzipSync: () => unzipSync
});
function assert2(a, msg) {
  if (!a) {
    throw new Error(msg);
  }
}
function createDeflate(o) {
  return new Deflate(o);
}
function createInflate(o) {
  return new Inflate(o);
}
function createDeflateRaw(o) {
  return new DeflateRaw(o);
}
function createInflateRaw(o) {
  return new InflateRaw(o);
}
function createGzip(o) {
  return new Gzip(o);
}
function createGunzip(o) {
  return new Gunzip(o);
}
function createUnzip(o) {
  return new Unzip(o);
}
function deflate2(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Deflate(opts), buffer, callback);
}
function deflateSync(buffer, opts) {
  return zlibBufferSync(new Deflate(opts), buffer);
}
function gzip(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gzip(opts), buffer, callback);
}
function gzipSync(buffer, opts) {
  return zlibBufferSync(new Gzip(opts), buffer);
}
function deflateRaw(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new DeflateRaw(opts), buffer, callback);
}
function deflateRawSync(buffer, opts) {
  return zlibBufferSync(new DeflateRaw(opts), buffer);
}
function unzip(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Unzip(opts), buffer, callback);
}
function unzipSync(buffer, opts) {
  return zlibBufferSync(new Unzip(opts), buffer);
}
function inflate2(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Inflate(opts), buffer, callback);
}
function inflateSync(buffer, opts) {
  return zlibBufferSync(new Inflate(opts), buffer);
}
function gunzip(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gunzip(opts), buffer, callback);
}
function gunzipSync(buffer, opts) {
  return zlibBufferSync(new Gunzip(opts), buffer);
}
function inflateRaw(buffer, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new InflateRaw(opts), buffer, callback);
}
function inflateRawSync(buffer, opts) {
  return zlibBufferSync(new InflateRaw(opts), buffer);
}
function zlibBuffer(engine, buffer, callback) {
  var buffers = [];
  var nread = 0;
  engine.on("error", onError);
  engine.on("end", onEnd);
  engine.end(buffer);
  flow2();
  function flow2() {
    var chunk;
    while ((chunk = engine.read()) !== null) {
      buffers.push(chunk);
      nread += chunk.length;
    }
    engine.once("readable", flow2);
  }
  function onError(err2) {
    engine.removeListener("end", onEnd);
    engine.removeListener("readable", flow2);
    callback(err2);
  }
  function onEnd() {
    var buf = Buffer.concat(buffers, nread);
    buffers = [];
    callback(null, buf);
    engine.close();
  }
}
function zlibBufferSync(engine, buffer) {
  if (typeof buffer === "string")
    buffer = new Buffer(buffer);
  if (!Buffer.isBuffer(buffer))
    throw new TypeError("Not a string or buffer");
  var flushFlag = binding2.Z_FINISH;
  return engine._processChunk(buffer, flushFlag);
}
function Deflate(opts) {
  if (!(this instanceof Deflate))
    return new Deflate(opts);
  Zlib2.call(this, opts, binding2.DEFLATE);
}
function Inflate(opts) {
  if (!(this instanceof Inflate))
    return new Inflate(opts);
  Zlib2.call(this, opts, binding2.INFLATE);
}
function Gzip(opts) {
  if (!(this instanceof Gzip))
    return new Gzip(opts);
  Zlib2.call(this, opts, binding2.GZIP);
}
function Gunzip(opts) {
  if (!(this instanceof Gunzip))
    return new Gunzip(opts);
  Zlib2.call(this, opts, binding2.GUNZIP);
}
function DeflateRaw(opts) {
  if (!(this instanceof DeflateRaw))
    return new DeflateRaw(opts);
  Zlib2.call(this, opts, binding2.DEFLATERAW);
}
function InflateRaw(opts) {
  if (!(this instanceof InflateRaw))
    return new InflateRaw(opts);
  Zlib2.call(this, opts, binding2.INFLATERAW);
}
function Unzip(opts) {
  if (!(this instanceof Unzip))
    return new Unzip(opts);
  Zlib2.call(this, opts, binding2.UNZIP);
}
function Zlib2(opts, mode) {
  this._opts = opts = opts || {};
  this._chunkSize = opts.chunkSize || binding2.Z_DEFAULT_CHUNK;
  Transform.call(this, opts);
  if (opts.flush) {
    if (opts.flush !== binding2.Z_NO_FLUSH && opts.flush !== binding2.Z_PARTIAL_FLUSH && opts.flush !== binding2.Z_SYNC_FLUSH && opts.flush !== binding2.Z_FULL_FLUSH && opts.flush !== binding2.Z_FINISH && opts.flush !== binding2.Z_BLOCK) {
      throw new Error("Invalid flush flag: " + opts.flush);
    }
  }
  this._flushFlag = opts.flush || binding2.Z_NO_FLUSH;
  if (opts.chunkSize) {
    if (opts.chunkSize < binding2.Z_MIN_CHUNK || opts.chunkSize > binding2.Z_MAX_CHUNK) {
      throw new Error("Invalid chunk size: " + opts.chunkSize);
    }
  }
  if (opts.windowBits) {
    if (opts.windowBits < binding2.Z_MIN_WINDOWBITS || opts.windowBits > binding2.Z_MAX_WINDOWBITS) {
      throw new Error("Invalid windowBits: " + opts.windowBits);
    }
  }
  if (opts.level) {
    if (opts.level < binding2.Z_MIN_LEVEL || opts.level > binding2.Z_MAX_LEVEL) {
      throw new Error("Invalid compression level: " + opts.level);
    }
  }
  if (opts.memLevel) {
    if (opts.memLevel < binding2.Z_MIN_MEMLEVEL || opts.memLevel > binding2.Z_MAX_MEMLEVEL) {
      throw new Error("Invalid memLevel: " + opts.memLevel);
    }
  }
  if (opts.strategy) {
    if (opts.strategy != binding2.Z_FILTERED && opts.strategy != binding2.Z_HUFFMAN_ONLY && opts.strategy != binding2.Z_RLE && opts.strategy != binding2.Z_FIXED && opts.strategy != binding2.Z_DEFAULT_STRATEGY) {
      throw new Error("Invalid strategy: " + opts.strategy);
    }
  }
  if (opts.dictionary) {
    if (!Buffer.isBuffer(opts.dictionary)) {
      throw new Error("Invalid dictionary: it should be a Buffer instance");
    }
  }
  this._binding = new binding2.Zlib(mode);
  var self = this;
  this._hadError = false;
  this._binding.onerror = function(message, errno) {
    self._binding = null;
    self._hadError = true;
    var error2 = new Error(message);
    error2.errno = errno;
    error2.code = binding2.codes[errno];
    self.emit("error", error2);
  };
  var level = binding2.Z_DEFAULT_COMPRESSION;
  if (typeof opts.level === "number")
    level = opts.level;
  var strategy = binding2.Z_DEFAULT_STRATEGY;
  if (typeof opts.strategy === "number")
    strategy = opts.strategy;
  this._binding.init(opts.windowBits || binding2.Z_DEFAULT_WINDOWBITS, level, opts.memLevel || binding2.Z_DEFAULT_MEMLEVEL, strategy, opts.dictionary);
  this._buffer = new Buffer(this._chunkSize);
  this._offset = 0;
  this._closed = false;
  this._level = level;
  this._strategy = strategy;
  this.once("end", this.close);
}
var binding2, codes, zlib_default;
var init_zlib = __esm({
  "node-modules-polyfills:zlib"() {
    init_stream();
    init_binding();
    init_util();
    binding2 = {};
    Object.keys(binding_exports).forEach(function(key) {
      binding2[key] = binding_exports[key];
    });
    binding2.Z_MIN_WINDOWBITS = 8;
    binding2.Z_MAX_WINDOWBITS = 15;
    binding2.Z_DEFAULT_WINDOWBITS = 15;
    binding2.Z_MIN_CHUNK = 64;
    binding2.Z_MAX_CHUNK = Infinity;
    binding2.Z_DEFAULT_CHUNK = 16 * 1024;
    binding2.Z_MIN_MEMLEVEL = 1;
    binding2.Z_MAX_MEMLEVEL = 9;
    binding2.Z_DEFAULT_MEMLEVEL = 8;
    binding2.Z_MIN_LEVEL = -1;
    binding2.Z_MAX_LEVEL = 9;
    binding2.Z_DEFAULT_LEVEL = binding2.Z_DEFAULT_COMPRESSION;
    codes = {
      Z_OK: binding2.Z_OK,
      Z_STREAM_END: binding2.Z_STREAM_END,
      Z_NEED_DICT: binding2.Z_NEED_DICT,
      Z_ERRNO: binding2.Z_ERRNO,
      Z_STREAM_ERROR: binding2.Z_STREAM_ERROR,
      Z_DATA_ERROR: binding2.Z_DATA_ERROR,
      Z_MEM_ERROR: binding2.Z_MEM_ERROR,
      Z_BUF_ERROR: binding2.Z_BUF_ERROR,
      Z_VERSION_ERROR: binding2.Z_VERSION_ERROR
    };
    Object.keys(codes).forEach(function(k) {
      codes[codes[k]] = k;
    });
    inherits_default(Zlib2, Transform);
    Zlib2.prototype.params = function(level, strategy, callback) {
      if (level < binding2.Z_MIN_LEVEL || level > binding2.Z_MAX_LEVEL) {
        throw new RangeError("Invalid compression level: " + level);
      }
      if (strategy != binding2.Z_FILTERED && strategy != binding2.Z_HUFFMAN_ONLY && strategy != binding2.Z_RLE && strategy != binding2.Z_FIXED && strategy != binding2.Z_DEFAULT_STRATEGY) {
        throw new TypeError("Invalid strategy: " + strategy);
      }
      if (this._level !== level || this._strategy !== strategy) {
        var self = this;
        this.flush(binding2.Z_SYNC_FLUSH, function() {
          self._binding.params(level, strategy);
          if (!self._hadError) {
            self._level = level;
            self._strategy = strategy;
            if (callback)
              callback();
          }
        });
      } else {
        process.nextTick(callback);
      }
    };
    Zlib2.prototype.reset = function() {
      return this._binding.reset();
    };
    Zlib2.prototype._flush = function(callback) {
      this._transform(new Buffer(0), "", callback);
    };
    Zlib2.prototype.flush = function(kind, callback) {
      var ws = this._writableState;
      if (typeof kind === "function" || kind === void 0 && !callback) {
        callback = kind;
        kind = binding2.Z_FULL_FLUSH;
      }
      if (ws.ended) {
        if (callback)
          process.nextTick(callback);
      } else if (ws.ending) {
        if (callback)
          this.once("end", callback);
      } else if (ws.needDrain) {
        var self = this;
        this.once("drain", function() {
          self.flush(callback);
        });
      } else {
        this._flushFlag = kind;
        this.write(new Buffer(0), "", callback);
      }
    };
    Zlib2.prototype.close = function(callback) {
      if (callback)
        process.nextTick(callback);
      if (this._closed)
        return;
      this._closed = true;
      this._binding.close();
      var self = this;
      process.nextTick(function() {
        self.emit("close");
      });
    };
    Zlib2.prototype._transform = function(chunk, encoding, cb) {
      var flushFlag;
      var ws = this._writableState;
      var ending = ws.ending || ws.ended;
      var last = ending && (!chunk || ws.length === chunk.length);
      if (!chunk === null && !Buffer.isBuffer(chunk))
        return cb(new Error("invalid input"));
      if (last)
        flushFlag = binding2.Z_FINISH;
      else {
        flushFlag = this._flushFlag;
        if (chunk.length >= ws.length) {
          this._flushFlag = this._opts.flush || binding2.Z_NO_FLUSH;
        }
      }
      this._processChunk(chunk, flushFlag, cb);
    };
    Zlib2.prototype._processChunk = function(chunk, flushFlag, cb) {
      var availInBefore = chunk && chunk.length;
      var availOutBefore = this._chunkSize - this._offset;
      var inOff = 0;
      var self = this;
      var async = typeof cb === "function";
      if (!async) {
        var buffers = [];
        var nread = 0;
        var error2;
        this.on("error", function(er) {
          error2 = er;
        });
        do {
          var res = this._binding.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
        } while (!this._hadError && callback(res[0], res[1]));
        if (this._hadError) {
          throw error2;
        }
        var buf = Buffer.concat(buffers, nread);
        this.close();
        return buf;
      }
      var req = this._binding.write(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
      req.buffer = chunk;
      req.callback = callback;
      function callback(availInAfter, availOutAfter) {
        if (self._hadError)
          return;
        var have = availOutBefore - availOutAfter;
        assert2(have >= 0, "have should not go down");
        if (have > 0) {
          var out = self._buffer.slice(self._offset, self._offset + have);
          self._offset += have;
          if (async) {
            self.push(out);
          } else {
            buffers.push(out);
            nread += out.length;
          }
        }
        if (availOutAfter === 0 || self._offset >= self._chunkSize) {
          availOutBefore = self._chunkSize;
          self._offset = 0;
          self._buffer = new Buffer(self._chunkSize);
        }
        if (availOutAfter === 0) {
          inOff += availInBefore - availInAfter;
          availInBefore = availInAfter;
          if (!async)
            return true;
          var newReq = self._binding.write(flushFlag, chunk, inOff, availInBefore, self._buffer, self._offset, self._chunkSize);
          newReq.callback = callback;
          newReq.buffer = chunk;
          return;
        }
        if (!async)
          return false;
        cb();
      }
    };
    inherits_default(Deflate, Zlib2);
    inherits_default(Inflate, Zlib2);
    inherits_default(Gzip, Zlib2);
    inherits_default(Gunzip, Zlib2);
    inherits_default(DeflateRaw, Zlib2);
    inherits_default(InflateRaw, Zlib2);
    inherits_default(Unzip, Zlib2);
    zlib_default = {
      codes,
      createDeflate,
      createInflate,
      createDeflateRaw,
      createInflateRaw,
      createGzip,
      createGunzip,
      createUnzip,
      deflate: deflate2,
      deflateSync,
      gzip,
      gzipSync,
      deflateRaw,
      deflateRawSync,
      unzip,
      unzipSync,
      inflate: inflate2,
      inflateSync,
      gunzip,
      gunzipSync,
      inflateRaw,
      inflateRawSync,
      Deflate,
      Inflate,
      Gzip,
      Gunzip,
      DeflateRaw,
      InflateRaw,
      Unzip,
      Zlib: Zlib2
    };
  }
});

// node-modules-polyfills-commonjs:zlib
var require_zlib = __commonJS({
  "node-modules-polyfills-commonjs:zlib"(exports, module2) {
    var polyfill = (init_zlib(), zlib_exports);
    if (polyfill && polyfill.default) {
      module2.exports = polyfill.default;
      for (let k in polyfill) {
        module2.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module2.exports = polyfill;
    }
  }
});

// node_modules/axios/package.json
var require_package = __commonJS({
  "node_modules/axios/package.json"(exports, module2) {
    module2.exports = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// node_modules/axios/lib/adapters/http.js
var require_http2 = __commonJS({
  "node_modules/axios/lib/adapters/http.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var buildFullPath = require_buildFullPath();
    var buildURL = require_buildURL();
    var http = require_http();
    var https = require_https();
    var httpFollow = require_follow_redirects().http;
    var httpsFollow = require_follow_redirects().https;
    var url = require_url();
    var zlib = require_zlib();
    var pkg = require_package();
    var createError = require_createError();
    var enhanceError = require_enhanceError();
    var isHttps = /https:?/;
    function setProxy(options, proxy, location) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.port = proxy.port;
      options.path = location;
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
      }
      options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        setProxy(redirection, proxy, redirection.href);
      };
    }
    module2.exports = function httpAdapter(config2) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var resolve = function resolve2(value) {
          resolvePromise(value);
        };
        var reject = function reject2(value) {
          rejectPromise(value);
        };
        var data = config2.data;
        var headers = config2.headers;
        if ("User-Agent" in headers || "user-agent" in headers) {
          if (!headers["User-Agent"] && !headers["user-agent"]) {
            delete headers["User-Agent"];
            delete headers["user-agent"];
          }
        } else {
          headers["User-Agent"] = "axios/" + pkg.version;
        }
        if (data && !utils.isStream(data)) {
          if (Buffer.isBuffer(data)) {
          } else if (utils.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils.isString(data)) {
            data = Buffer.from(data, "utf-8");
          } else {
            return reject(createError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config2));
          }
          headers["Content-Length"] = data.length;
        }
        var auth = void 0;
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password || "";
          auth = username + ":" + password;
        }
        var fullPath = buildFullPath(config2.baseURL, config2.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || "http:";
        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(":");
          var urlUsername = urlAuth[0] || "";
          var urlPassword = urlAuth[1] || "";
          auth = urlUsername + ":" + urlPassword;
        }
        if (auth) {
          delete headers.Authorization;
        }
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config2.httpsAgent : config2.httpAgent;
        var options = {
          path: buildURL(parsed.path, config2.params, config2.paramsSerializer).replace(/^\?/, ""),
          method: config2.method.toUpperCase(),
          headers,
          agent,
          agents: { http: config2.httpAgent, https: config2.httpsAgent },
          auth
        };
        if (config2.socketPath) {
          options.socketPath = config2.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }
        var proxy = config2.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + "_proxy";
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;
            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(",").map(function trim(s) {
                return s.trim();
              });
              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === "*") {
                  return true;
                }
                if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }
                return parsed.hostname === proxyElement;
              });
            }
            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port,
                protocol: parsedProxyUrl.protocol
              };
              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }
        if (proxy) {
          options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
          setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config2.transport) {
          transport = config2.transport;
        } else if (config2.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config2.maxRedirects) {
            options.maxRedirects = config2.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config2.maxBodyLength > -1) {
          options.maxBodyLength = config2.maxBodyLength;
        }
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted)
            return;
          var stream = res;
          var lastRequest = res.req || req;
          if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config2.decompress !== false) {
            switch (res.headers["content-encoding"]) {
              case "gzip":
              case "compress":
              case "deflate":
                stream = stream.pipe(zlib.createUnzip());
                delete res.headers["content-encoding"];
                break;
            }
          }
          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config: config2,
            request: lastRequest
          };
          if (config2.responseType === "stream") {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            var totalResponseBytes = 0;
            stream.on("data", function handleStreamData(chunk) {
              responseBuffer.push(chunk);
              totalResponseBytes += chunk.length;
              if (config2.maxContentLength > -1 && totalResponseBytes > config2.maxContentLength) {
                stream.destroy();
                reject(createError("maxContentLength size of " + config2.maxContentLength + " exceeded", config2, null, lastRequest));
              }
            });
            stream.on("error", function handleStreamError(err2) {
              if (req.aborted)
                return;
              reject(enhanceError(err2, config2, null, lastRequest));
            });
            stream.on("end", function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config2.responseType !== "arraybuffer") {
                responseData = responseData.toString(config2.responseEncoding);
                if (!config2.responseEncoding || config2.responseEncoding === "utf8") {
                  responseData = utils.stripBOM(responseData);
                }
              }
              response.data = responseData;
              settle(resolve, reject, response);
            });
          }
        });
        req.on("error", function handleRequestError(err2) {
          if (req.aborted && err2.code !== "ERR_FR_TOO_MANY_REDIRECTS")
            return;
          reject(enhanceError(err2, config2, null, req));
        });
        if (config2.timeout) {
          var timeout = parseInt(config2.timeout, 10);
          if (isNaN(timeout)) {
            reject(createError("error trying to parse `config.timeout` to int", config2, "ERR_PARSE_TIMEOUT", req));
            return;
          }
          req.setTimeout(timeout, function handleRequestTimeout() {
            req.abort();
            reject(createError("timeout of " + timeout + "ms exceeded", config2, config2.transitional && config2.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", req));
          });
        }
        if (config2.cancelToken) {
          config2.cancelToken.promise.then(function onCanceled(cancel) {
            if (req.aborted)
              return;
            req.abort();
            reject(cancel);
          });
        }
        if (utils.isStream(data)) {
          data.on("error", function handleStreamError(err2) {
            reject(enhanceError(err2, config2, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_http2();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status2) {
        return status2 >= 200 && status2 < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform4(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    function throwIfCancellationRequested(config2) {
      if (config2.cancelToken) {
        config2.cancelToken.throwIfRequested();
      }
    }
    module2.exports = function dispatchRequest(config2) {
      throwIfCancellationRequested(config2);
      config2.headers = config2.headers || {};
      config2.data = transformData.call(config2, config2.data, config2.headers, config2.transformRequest);
      config2.headers = utils.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config2.headers[method];
      });
      var adapter = config2.adapter || defaults.adapter;
      return adapter(config2).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config2);
        response.data = transformData.call(config2, response.data, response.headers, config2.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config2);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config3 = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config3[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config3;
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    "use strict";
    var pkg = require_package();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type2, i) {
      validators[type2] = function validator(thing) {
        return typeof thing === type2 || "a" + (i < 1 ? "n " : " ") + type2;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version2, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version2.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }
    validators.transitional = function transitional(validator, version2, message) {
      var isDeprecated = version2 && isOlderVersion(version2);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed in " + version2));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys2 = Object.keys(options);
      var i = keys2.length;
      while (i-- > 0) {
        var opt = keys2[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      isOlderVersion,
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request3(config2) {
      if (typeof config2 === "string") {
        config2 = arguments[1] || {};
        config2.url = arguments[0];
      } else {
        config2 = config2 || {};
      }
      config2 = mergeConfig(this.defaults, config2);
      if (config2.method) {
        config2.method = config2.method.toLowerCase();
      } else if (this.defaults.method) {
        config2.method = this.defaults.method.toLowerCase();
      } else {
        config2.method = "get";
      }
      var transitional = config2.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config2);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config2;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error2) {
          onRejected(error2);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error2) {
        return Promise.reject(error2);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config2) {
      config2 = mergeConfig(this.defaults, config2);
      return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data: (config2 || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString4() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios3 = createInstance(defaults);
    axios3.Axios = Axios;
    axios3.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios3.defaults, instanceConfig));
    };
    axios3.Cancel = require_Cancel();
    axios3.CancelToken = require_CancelToken();
    axios3.isCancel = require_isCancel();
    axios3.all = function all(promises) {
      return Promise.all(promises);
    };
    axios3.spread = require_spread();
    axios3.isAxiosError = require_isAxiosError();
    module2.exports = axios3;
    module2.exports.default = axios3;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module2) {
    module2.exports = require_axios();
  }
});

// ../../node_modules/axios/lib/helpers/bind.js
var require_bind2 = __commonJS({
  "../../node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    "use strict";
    module2.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// ../../node_modules/axios/lib/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/axios/lib/utils.js"(exports, module2) {
    "use strict";
    var bind = require_bind2();
    var toString4 = Object.prototype.toString;
    function isArray5(val) {
      return toString4.call(val) === "[object Array]";
    }
    function isUndefined2(val) {
      return typeof val === "undefined";
    }
    function isBuffer3(val) {
      return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString4.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString3(val) {
      return typeof val === "string";
    }
    function isNumber3(val) {
      return typeof val === "number";
    }
    function isObject3(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString4.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate2(val) {
      return toString4.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString4.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString4.call(val) === "[object Blob]";
    }
    function isFunction3(val) {
      return toString4.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject3(val) && isFunction3(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach2(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray5(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray5(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach2(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach2(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray: isArray5,
      isArrayBuffer,
      isBuffer: isBuffer3,
      isFormData,
      isArrayBufferView,
      isString: isString3,
      isNumber: isNumber3,
      isObject: isObject3,
      isPlainObject,
      isUndefined: isUndefined2,
      isDate: isDate2,
      isFile,
      isBlob,
      isFunction: isFunction3,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach: forEach2,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// ../../node_modules/axios/lib/helpers/buildURL.js
var require_buildURL2 = __commonJS({
  "../../node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    function encode2(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode2(key) + "=" + encode2(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// ../../node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager2 = __commonJS({
  "../../node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled,
        rejected
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach2(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// ../../node_modules/axios/lib/core/transformData.js
var require_transformData2 = __commonJS({
  "../../node_modules/axios/lib/core/transformData.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = function transformData(data, headers, fns) {
      utils.forEach(fns, function transform4(fn) {
        data = fn(data, headers);
      });
      return data;
    };
  }
});

// ../../node_modules/axios/lib/cancel/isCancel.js
var require_isCancel2 = __commonJS({
  "../../node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// ../../node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName2 = __commonJS({
  "../../node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// ../../node_modules/axios/lib/core/enhanceError.js
var require_enhanceError2 = __commonJS({
  "../../node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    "use strict";
    module2.exports = function enhanceError(error2, config2, code, request3, response) {
      error2.config = config2;
      if (code) {
        error2.code = code;
      }
      error2.request = request3;
      error2.response = response;
      error2.isAxiosError = true;
      error2.toJSON = function toJSON2() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error2;
    };
  }
});

// ../../node_modules/axios/lib/core/createError.js
var require_createError2 = __commonJS({
  "../../node_modules/axios/lib/core/createError.js"(exports, module2) {
    "use strict";
    var enhanceError = require_enhanceError2();
    module2.exports = function createError(message, config2, code, request3, response) {
      var error2 = new Error(message);
      return enhanceError(error2, config2, code, request3, response);
    };
  }
});

// ../../node_modules/axios/lib/core/settle.js
var require_settle2 = __commonJS({
  "../../node_modules/axios/lib/core/settle.js"(exports, module2) {
    "use strict";
    var createError = require_createError2();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// ../../node_modules/axios/lib/helpers/cookies.js
var require_cookies2 = __commonJS({
  "../../node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write3(name, value, expires, path, domain2, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain2)) {
            cookie.push("domain=" + domain2);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read3(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write3() {
        },
        read: function read3() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// ../../node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL2 = __commonJS({
  "../../node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// ../../node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs2 = __commonJS({
  "../../node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// ../../node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath2 = __commonJS({
  "../../node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL2();
    var combineURLs = require_combineURLs2();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// ../../node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders2 = __commonJS({
  "../../node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// ../../node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin2 = __commonJS({
  "../../node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// ../../node_modules/axios/lib/adapters/xhr.js
var require_xhr2 = __commonJS({
  "../../node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var settle = require_settle2();
    var cookies = require_cookies2();
    var buildURL = require_buildURL2();
    var buildFullPath = require_buildFullPath2();
    var parseHeaders = require_parseHeaders2();
    var isURLSameOrigin = require_isURLSameOrigin2();
    var createError = require_createError2();
    module2.exports = function xhrAdapter(config2) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config2.data;
        var requestHeaders = config2.headers;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request3 = new XMLHttpRequest();
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config2.baseURL, config2.url);
        request3.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
        request3.timeout = config2.timeout;
        request3.onreadystatechange = function handleLoad() {
          if (!request3 || request3.readyState !== 4) {
            return;
          }
          if (request3.status === 0 && !(request3.responseURL && request3.responseURL.indexOf("file:") === 0)) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request3 ? parseHeaders(request3.getAllResponseHeaders()) : null;
          var responseData = !config2.responseType || config2.responseType === "text" ? request3.responseText : request3.response;
          var response = {
            data: responseData,
            status: request3.status,
            statusText: request3.statusText,
            headers: responseHeaders,
            config: config2,
            request: request3
          };
          settle(resolve, reject, response);
          request3 = null;
        };
        request3.onabort = function handleAbort() {
          if (!request3) {
            return;
          }
          reject(createError("Request aborted", config2, "ECONNABORTED", request3));
          request3 = null;
        };
        request3.onerror = function handleError() {
          reject(createError("Network Error", config2, null, request3));
          request3 = null;
        };
        request3.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
          if (config2.timeoutErrorMessage) {
            timeoutErrorMessage = config2.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config2, "ECONNABORTED", request3));
          request3 = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config2.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request3) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request3.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config2.withCredentials)) {
          request3.withCredentials = !!config2.withCredentials;
        }
        if (config2.responseType) {
          try {
            request3.responseType = config2.responseType;
          } catch (e) {
            if (config2.responseType !== "json") {
              throw e;
            }
          }
        }
        if (typeof config2.onDownloadProgress === "function") {
          request3.addEventListener("progress", config2.onDownloadProgress);
        }
        if (typeof config2.onUploadProgress === "function" && request3.upload) {
          request3.upload.addEventListener("progress", config2.onUploadProgress);
        }
        if (config2.cancelToken) {
          config2.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request3) {
              return;
            }
            request3.abort();
            reject(cancel);
            request3 = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request3.send(requestData);
      });
    };
  }
});

// ../../node_modules/follow-redirects/debug.js
var require_debug2 = __commonJS({
  "../../node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug2;
    module2.exports = function() {
      if (!debug2) {
        try {
          debug2 = require_src()("follow-redirects");
        } catch (error2) {
        }
        if (typeof debug2 !== "function") {
          debug2 = function() {
          };
        }
      }
      debug2.apply(null, arguments);
    };
  }
});

// ../../node_modules/follow-redirects/index.js
var require_follow_redirects2 = __commonJS({
  "../../node_modules/follow-redirects/index.js"(exports, module2) {
    var url = require_url();
    var URL = url.URL;
    var http = require_http();
    var https = require_https();
    var Writable2 = require_stream().Writable;
    var assert3 = require_assert();
    var debug2 = require_debug2();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    function RedirectableRequest(options, responseCallback) {
      Writable2.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self = this;
      this._onNativeResponse = function(response) {
        self._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable2.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      } else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self = this;
      if (callback) {
        this.on("timeout", callback);
      }
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self._timeout) {
          clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
          self.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        clearTimeout(this._timeout);
        if (callback) {
          self.removeListener("timeout", callback);
        }
        if (!this.socket) {
          self._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.once("response", clearTimer);
      this.once("error", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }
      var request3 = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url.format(this._options);
      request3._redirectable = this;
      for (var e = 0; e < events.length; e++) {
        request3.on(events[e], eventHandlers[events[e]]);
      }
      if (this._isRedirect) {
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error2) {
          if (request3 === self._currentRequest) {
            if (error2) {
              self.emit("error", error2);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request3.finished) {
                request3.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self._ended) {
              request3.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
        abortRequest(this._currentRequest);
        response.destroy();
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }
        var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) || url.parse(this._currentUrl).hostname;
        var redirectUrl = url.resolve(this._currentUrl, location);
        debug2("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);
        if (redirectUrlParts.hostname !== previousHostName) {
          removeMatchingHeaders(/^authorization$/i, this._options.headers);
        }
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = { headers: response.headers };
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          } catch (err2) {
            this.emit("error", err2);
            return;
          }
          this._sanitizeOptions(this._options);
        }
        try {
          this._performRequest();
        } catch (cause) {
          var error2 = new RedirectionError("Redirected request failed: " + cause.message);
          error2.cause = cause;
          this.emit("error", error2);
        }
      } else {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request3(input, options, callback) {
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL(urlStr));
            } catch (err2) {
              input = url.parse(urlStr);
            }
          } else if (URL && input instanceof URL) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          assert3.equal(options.protocol, protocol, "protocol mismatch");
          debug2("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get3(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request3, configurable: true, enumerable: true, writable: true },
          get: { value: get3, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop2() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex2, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex2.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue;
    }
    function createErrorType(code, defaultMessage) {
      function CustomError(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message || defaultMessage;
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }
    function abortRequest(request3) {
      for (var e = 0; e < events.length; e++) {
        request3.removeListener(events[e], eventHandlers[events[e]]);
      }
      request3.on("error", noop2);
      request3.abort();
    }
    module2.exports = wrap({ http, https });
    module2.exports.wrap = wrap;
  }
});

// ../../node_modules/axios/package.json
var require_package2 = __commonJS({
  "../../node_modules/axios/package.json"(exports, module2) {
    module2.exports = {
      name: "axios",
      version: "0.21.1",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test && bundlesize",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://github.com/axios/axios",
      devDependencies: {
        bundlesize: "^0.17.0",
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.0.2",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^20.1.0",
        "grunt-karma": "^2.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^1.0.18",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^1.3.0",
        "karma-chrome-launcher": "^2.2.0",
        "karma-coverage": "^1.1.1",
        "karma-firefox-launcher": "^1.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-opera-launcher": "^1.0.0",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^1.2.0",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.7",
        "karma-webpack": "^1.7.0",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^5.2.0",
        sinon: "^4.5.0",
        typescript: "^2.8.1",
        "url-search-params": "^0.10.0",
        webpack: "^1.13.1",
        "webpack-dev-server": "^1.14.1"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.10.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// ../../node_modules/axios/lib/adapters/http.js
var require_http3 = __commonJS({
  "../../node_modules/axios/lib/adapters/http.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var settle = require_settle2();
    var buildFullPath = require_buildFullPath2();
    var buildURL = require_buildURL2();
    var http = require_http();
    var https = require_https();
    var httpFollow = require_follow_redirects2().http;
    var httpsFollow = require_follow_redirects2().https;
    var url = require_url();
    var zlib = require_zlib();
    var pkg = require_package2();
    var createError = require_createError2();
    var enhanceError = require_enhanceError2();
    var isHttps = /https:?/;
    function setProxy(options, proxy, location) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.port = proxy.port;
      options.path = location;
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
      }
      options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        setProxy(redirection, proxy, redirection.href);
      };
    }
    module2.exports = function httpAdapter(config2) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var resolve = function resolve2(value) {
          resolvePromise(value);
        };
        var reject = function reject2(value) {
          rejectPromise(value);
        };
        var data = config2.data;
        var headers = config2.headers;
        if (!headers["User-Agent"] && !headers["user-agent"]) {
          headers["User-Agent"] = "axios/" + pkg.version;
        }
        if (data && !utils.isStream(data)) {
          if (Buffer.isBuffer(data)) {
          } else if (utils.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils.isString(data)) {
            data = Buffer.from(data, "utf-8");
          } else {
            return reject(createError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config2));
          }
          headers["Content-Length"] = data.length;
        }
        var auth = void 0;
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password || "";
          auth = username + ":" + password;
        }
        var fullPath = buildFullPath(config2.baseURL, config2.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || "http:";
        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(":");
          var urlUsername = urlAuth[0] || "";
          var urlPassword = urlAuth[1] || "";
          auth = urlUsername + ":" + urlPassword;
        }
        if (auth) {
          delete headers.Authorization;
        }
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config2.httpsAgent : config2.httpAgent;
        var options = {
          path: buildURL(parsed.path, config2.params, config2.paramsSerializer).replace(/^\?/, ""),
          method: config2.method.toUpperCase(),
          headers,
          agent,
          agents: { http: config2.httpAgent, https: config2.httpsAgent },
          auth
        };
        if (config2.socketPath) {
          options.socketPath = config2.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }
        var proxy = config2.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + "_proxy";
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;
            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(",").map(function trim(s) {
                return s.trim();
              });
              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === "*") {
                  return true;
                }
                if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }
                return parsed.hostname === proxyElement;
              });
            }
            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port,
                protocol: parsedProxyUrl.protocol
              };
              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }
        if (proxy) {
          options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
          setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config2.transport) {
          transport = config2.transport;
        } else if (config2.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config2.maxRedirects) {
            options.maxRedirects = config2.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config2.maxBodyLength > -1) {
          options.maxBodyLength = config2.maxBodyLength;
        }
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted)
            return;
          var stream = res;
          var lastRequest = res.req || req;
          if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config2.decompress !== false) {
            switch (res.headers["content-encoding"]) {
              case "gzip":
              case "compress":
              case "deflate":
                stream = stream.pipe(zlib.createUnzip());
                delete res.headers["content-encoding"];
                break;
            }
          }
          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config: config2,
            request: lastRequest
          };
          if (config2.responseType === "stream") {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            stream.on("data", function handleStreamData(chunk) {
              responseBuffer.push(chunk);
              if (config2.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config2.maxContentLength) {
                stream.destroy();
                reject(createError("maxContentLength size of " + config2.maxContentLength + " exceeded", config2, null, lastRequest));
              }
            });
            stream.on("error", function handleStreamError(err2) {
              if (req.aborted)
                return;
              reject(enhanceError(err2, config2, null, lastRequest));
            });
            stream.on("end", function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config2.responseType !== "arraybuffer") {
                responseData = responseData.toString(config2.responseEncoding);
                if (!config2.responseEncoding || config2.responseEncoding === "utf8") {
                  responseData = utils.stripBOM(responseData);
                }
              }
              response.data = responseData;
              settle(resolve, reject, response);
            });
          }
        });
        req.on("error", function handleRequestError(err2) {
          if (req.aborted && err2.code !== "ERR_FR_TOO_MANY_REDIRECTS")
            return;
          reject(enhanceError(err2, config2, null, req));
        });
        if (config2.timeout) {
          req.setTimeout(config2.timeout, function handleRequestTimeout() {
            req.abort();
            reject(createError("timeout of " + config2.timeout + "ms exceeded", config2, "ECONNABORTED", req));
          });
        }
        if (config2.cancelToken) {
          config2.cancelToken.promise.then(function onCanceled(cancel) {
            if (req.aborted)
              return;
            req.abort();
            reject(cancel);
          });
        }
        if (utils.isStream(data)) {
          data.on("error", function handleStreamError(err2) {
            reject(enhanceError(err2, config2, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };
  }
});

// ../../node_modules/axios/lib/defaults.js
var require_defaults2 = __commonJS({
  "../../node_modules/axios/lib/defaults.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var normalizeHeaderName = require_normalizeHeaderName2();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr2();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_http3();
      }
      return adapter;
    }
    var defaults = {
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, "application/json;charset=utf-8");
          return JSON.stringify(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status2) {
        return status2 >= 200 && status2 < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// ../../node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest2 = __commonJS({
  "../../node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var transformData = require_transformData2();
    var isCancel = require_isCancel2();
    var defaults = require_defaults2();
    function throwIfCancellationRequested(config2) {
      if (config2.cancelToken) {
        config2.cancelToken.throwIfRequested();
      }
    }
    module2.exports = function dispatchRequest(config2) {
      throwIfCancellationRequested(config2);
      config2.headers = config2.headers || {};
      config2.data = transformData(config2.data, config2.headers, config2.transformRequest);
      config2.headers = utils.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config2.headers[method];
      });
      var adapter = config2.adapter || defaults.adapter;
      return adapter(config2).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config2);
        response.data = transformData(response.data, response.headers, config2.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config2);
          if (reason && reason.response) {
            reason.response.data = transformData(reason.response.data, reason.response.headers, config2.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// ../../node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig2 = __commonJS({
  "../../node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config3 = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config3[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config3[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config3[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config3;
    };
  }
});

// ../../node_modules/axios/lib/core/Axios.js
var require_Axios2 = __commonJS({
  "../../node_modules/axios/lib/core/Axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var buildURL = require_buildURL2();
    var InterceptorManager = require_InterceptorManager2();
    var dispatchRequest = require_dispatchRequest2();
    var mergeConfig = require_mergeConfig2();
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request3(config2) {
      if (typeof config2 === "string") {
        config2 = arguments[1] || {};
        config2.url = arguments[0];
      } else {
        config2 = config2 || {};
      }
      config2 = mergeConfig(this.defaults, config2);
      if (config2.method) {
        config2.method = config2.method.toLowerCase();
      } else if (this.defaults.method) {
        config2.method = this.defaults.method.toLowerCase();
      } else {
        config2.method = "get";
      }
      var chain = [dispatchRequest, void 0];
      var promise = Promise.resolve(config2);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config2) {
      config2 = mergeConfig(this.defaults, config2);
      return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data: (config2 || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// ../../node_modules/axios/lib/cancel/Cancel.js
var require_Cancel2 = __commonJS({
  "../../node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString4() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// ../../node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken2 = __commonJS({
  "../../node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    "use strict";
    var Cancel = require_Cancel2();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// ../../node_modules/axios/lib/helpers/spread.js
var require_spread2 = __commonJS({
  "../../node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// ../../node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError2 = __commonJS({
  "../../node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// ../../node_modules/axios/lib/axios.js
var require_axios3 = __commonJS({
  "../../node_modules/axios/lib/axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var bind = require_bind2();
    var Axios = require_Axios2();
    var mergeConfig = require_mergeConfig2();
    var defaults = require_defaults2();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios3 = createInstance(defaults);
    axios3.Axios = Axios;
    axios3.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios3.defaults, instanceConfig));
    };
    axios3.Cancel = require_Cancel2();
    axios3.CancelToken = require_CancelToken2();
    axios3.isCancel = require_isCancel2();
    axios3.all = function all(promises) {
      return Promise.all(promises);
    };
    axios3.spread = require_spread2();
    axios3.isAxiosError = require_isAxiosError2();
    module2.exports = axios3;
    module2.exports.default = axios3;
  }
});

// ../../node_modules/axios/index.js
var require_axios4 = __commonJS({
  "../../node_modules/axios/index.js"(exports, module2) {
    module2.exports = require_axios3();
  }
});

// ../../node_modules/crypt/crypt.js
var require_crypt = __commonJS({
  "../../node_modules/crypt/crypt.js"(exports, module2) {
    (function() {
      var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
        rotl: function(n, b) {
          return n << b | n >>> 32 - b;
        },
        rotr: function(n, b) {
          return n << 32 - b | n >>> b;
        },
        endian: function(n) {
          if (n.constructor == Number) {
            return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
          }
          for (var i = 0; i < n.length; i++)
            n[i] = crypt.endian(n[i]);
          return n;
        },
        randomBytes: function(n) {
          for (var bytes = []; n > 0; n--)
            bytes.push(Math.floor(Math.random() * 256));
          return bytes;
        },
        bytesToWords: function(bytes) {
          for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
            words[b >>> 5] |= bytes[i] << 24 - b % 32;
          return words;
        },
        wordsToBytes: function(words) {
          for (var bytes = [], b = 0; b < words.length * 32; b += 8)
            bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
          return bytes;
        },
        bytesToHex: function(bytes) {
          for (var hex = [], i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 15).toString(16));
          }
          return hex.join("");
        },
        hexToBytes: function(hex) {
          for (var bytes = [], c = 0; c < hex.length; c += 2)
            bytes.push(parseInt(hex.substr(c, 2), 16));
          return bytes;
        },
        bytesToBase64: function(bytes) {
          for (var base64 = [], i = 0; i < bytes.length; i += 3) {
            var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
            for (var j = 0; j < 4; j++)
              if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
              else
                base64.push("=");
          }
          return base64.join("");
        },
        base64ToBytes: function(base64) {
          base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
          for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
            if (imod4 == 0)
              continue;
            bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
          }
          return bytes;
        }
      };
      module2.exports = crypt;
    })();
  }
});

// ../../node_modules/charenc/charenc.js
var require_charenc = __commonJS({
  "../../node_modules/charenc/charenc.js"(exports, module2) {
    var charenc = {
      utf8: {
        stringToBytes: function(str) {
          return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
        },
        bytesToString: function(bytes) {
          return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
        }
      },
      bin: {
        stringToBytes: function(str) {
          for (var bytes = [], i = 0; i < str.length; i++)
            bytes.push(str.charCodeAt(i) & 255);
          return bytes;
        },
        bytesToString: function(bytes) {
          for (var str = [], i = 0; i < bytes.length; i++)
            str.push(String.fromCharCode(bytes[i]));
          return str.join("");
        }
      }
    };
    module2.exports = charenc;
  }
});

// ../../node_modules/md5/node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "../../node_modules/md5/node_modules/is-buffer/index.js"(exports, module2) {
    module2.exports = function(obj) {
      return obj != null && (isBuffer3(obj) || isSlowBuffer2(obj) || !!obj._isBuffer);
    };
    function isBuffer3(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    }
    function isSlowBuffer2(obj) {
      return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer3(obj.slice(0, 0));
    }
  }
});

// ../../node_modules/md5/md5.js
var require_md5 = __commonJS({
  "../../node_modules/md5/md5.js"(exports, module2) {
    (function() {
      var crypt = require_crypt(), utf8 = require_charenc().utf8, isBuffer3 = require_is_buffer(), bin = require_charenc().bin, md52 = function(message, options) {
        if (message.constructor == String)
          if (options && options.encoding === "binary")
            message = bin.stringToBytes(message);
          else
            message = utf8.stringToBytes(message);
        else if (isBuffer3(message))
          message = Array.prototype.slice.call(message, 0);
        else if (!Array.isArray(message) && message.constructor !== Uint8Array)
          message = message.toString();
        var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (var i = 0; i < m.length; i++) {
          m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
        }
        m[l >>> 5] |= 128 << l % 32;
        m[(l + 64 >>> 9 << 4) + 14] = l;
        var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
        for (var i = 0; i < m.length; i += 16) {
          var aa = a, bb = b, cc = c, dd = d;
          a = FF(a, b, c, d, m[i + 0], 7, -680876936);
          d = FF(d, a, b, c, m[i + 1], 12, -389564586);
          c = FF(c, d, a, b, m[i + 2], 17, 606105819);
          b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
          a = FF(a, b, c, d, m[i + 4], 7, -176418897);
          d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
          c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
          b = FF(b, c, d, a, m[i + 7], 22, -45705983);
          a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
          d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
          c = FF(c, d, a, b, m[i + 10], 17, -42063);
          b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
          a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
          d = FF(d, a, b, c, m[i + 13], 12, -40341101);
          c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
          b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
          a = GG(a, b, c, d, m[i + 1], 5, -165796510);
          d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
          c = GG(c, d, a, b, m[i + 11], 14, 643717713);
          b = GG(b, c, d, a, m[i + 0], 20, -373897302);
          a = GG(a, b, c, d, m[i + 5], 5, -701558691);
          d = GG(d, a, b, c, m[i + 10], 9, 38016083);
          c = GG(c, d, a, b, m[i + 15], 14, -660478335);
          b = GG(b, c, d, a, m[i + 4], 20, -405537848);
          a = GG(a, b, c, d, m[i + 9], 5, 568446438);
          d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
          c = GG(c, d, a, b, m[i + 3], 14, -187363961);
          b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
          a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
          d = GG(d, a, b, c, m[i + 2], 9, -51403784);
          c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
          b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
          a = HH(a, b, c, d, m[i + 5], 4, -378558);
          d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
          c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
          b = HH(b, c, d, a, m[i + 14], 23, -35309556);
          a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
          d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
          c = HH(c, d, a, b, m[i + 7], 16, -155497632);
          b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
          a = HH(a, b, c, d, m[i + 13], 4, 681279174);
          d = HH(d, a, b, c, m[i + 0], 11, -358537222);
          c = HH(c, d, a, b, m[i + 3], 16, -722521979);
          b = HH(b, c, d, a, m[i + 6], 23, 76029189);
          a = HH(a, b, c, d, m[i + 9], 4, -640364487);
          d = HH(d, a, b, c, m[i + 12], 11, -421815835);
          c = HH(c, d, a, b, m[i + 15], 16, 530742520);
          b = HH(b, c, d, a, m[i + 2], 23, -995338651);
          a = II(a, b, c, d, m[i + 0], 6, -198630844);
          d = II(d, a, b, c, m[i + 7], 10, 1126891415);
          c = II(c, d, a, b, m[i + 14], 15, -1416354905);
          b = II(b, c, d, a, m[i + 5], 21, -57434055);
          a = II(a, b, c, d, m[i + 12], 6, 1700485571);
          d = II(d, a, b, c, m[i + 3], 10, -1894986606);
          c = II(c, d, a, b, m[i + 10], 15, -1051523);
          b = II(b, c, d, a, m[i + 1], 21, -2054922799);
          a = II(a, b, c, d, m[i + 8], 6, 1873313359);
          d = II(d, a, b, c, m[i + 15], 10, -30611744);
          c = II(c, d, a, b, m[i + 6], 15, -1560198380);
          b = II(b, c, d, a, m[i + 13], 21, 1309151649);
          a = II(a, b, c, d, m[i + 4], 6, -145523070);
          d = II(d, a, b, c, m[i + 11], 10, -1120210379);
          c = II(c, d, a, b, m[i + 2], 15, 718787259);
          b = II(b, c, d, a, m[i + 9], 21, -343485551);
          a = a + aa >>> 0;
          b = b + bb >>> 0;
          c = c + cc >>> 0;
          d = d + dd >>> 0;
        }
        return crypt.endian([a, b, c, d]);
      };
      md52._ff = function(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };
      md52._gg = function(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };
      md52._hh = function(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };
      md52._ii = function(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };
      md52._blocksize = 16;
      md52._digestsize = 16;
      module2.exports = function(message, options) {
        if (message === void 0 || message === null)
          throw new Error("Illegal argument " + message);
        var digestbytes = crypt.wordsToBytes(md52(message, options));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
      };
    })();
  }
});

// index.ts
__export(exports, {
  Api: () => Api,
  ContentType: () => ContentType,
  HttpClient: () => HttpClient,
  episodeLink: () => episodeLink,
  getPureUrl: () => getPureUrl,
  globalFeedConfig: () => globalFeedConfig,
  mergeTwo: () => mergeTwo,
  random: () => random,
  randomElements: () => randomElements,
  runTaskInPool: () => runTaskInPool,
  usePromiseResult: () => usePromiseResult,
  v2: () => v2_exports
});

// api/type.ts
var import_axios = __toModule(require_axios2());
var ContentType;
(function(ContentType2) {
  ContentType2["Json"] = "application/json";
  ContentType2["FormData"] = "multipart/form-data";
  ContentType2["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
var HttpClient = class {
  constructor(_a = {}) {
    this.securityData = null;
    this.setSecurityData = (data) => {
      this.securityData = data;
    };
    this.request = (_c) => __async(this, null, function* () {
      var _d = _c, {
        secure,
        path,
        type: type2,
        query,
        format: format3,
        body
      } = _d, params = __objRest(_d, [
        "secure",
        "path",
        "type",
        "query",
        "format",
        "body"
      ]);
      const secureParams = (typeof secure === "boolean" ? secure : this.secure) && this.securityWorker && (yield this.securityWorker(this.securityData)) || {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const responseFormat = format3 && this.format || void 0;
      if (type2 === ContentType.FormData && body && body !== null && typeof body === "object") {
        requestParams.headers.common = { Accept: "*/*" };
        requestParams.headers.post = {};
        requestParams.headers.put = {};
        body = this.createFormData(body);
      }
      return this.instance.request(__spreadProps(__spreadValues({}, requestParams), {
        headers: __spreadValues(__spreadValues({}, type2 && type2 !== ContentType.FormData ? { "Content-Type": type2 } : {}), requestParams.headers || {}),
        params: query,
        responseType: responseFormat,
        data: body,
        url: path
      }));
    });
    var _b = _a, { securityWorker, secure, format: format3 } = _b, axiosConfig = __objRest(_b, ["securityWorker", "secure", "format"]);
    this.instance = import_axios.default.create(__spreadProps(__spreadValues({}, axiosConfig), { baseURL: axiosConfig.baseURL || "/api/v1" }));
    this.secure = secure;
    this.format = format3;
    this.securityWorker = securityWorker;
  }
  mergeRequestParams(params1, params2) {
    return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, this.instance.defaults), params1), params2 || {}), {
      headers: __spreadValues(__spreadValues(__spreadValues({}, this.instance.defaults.headers || {}), params1.headers || {}), params2 && params2.headers || {})
    });
  }
  createFormData(input) {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(key, property instanceof Blob ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : `${property}`);
      return formData;
    }, new FormData());
  }
};
var Api = class extends HttpClient {
  constructor() {
    super(...arguments);
    this.admin = {
      listEpisodes: (query, params = {}) => this.request(__spreadValues({
        path: `/admin/episode`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      listPodcasts: (query, params = {}) => this.request(__spreadValues({
        path: `/admin/podcast`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      getPodcastDetail: (id, params = {}) => this.request(__spreadValues({
        path: `/admin/podcast/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      auditPodcast: (id, data, params = {}) => this.request(__spreadValues({
        path: `/admin/podcast/${id}/audit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.category = {
      getCategories: (query, params = {}) => this.request(__spreadValues({
        path: `/category`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.daily = {
      addDailyRecommend: (data, params = {}) => this.request(__spreadValues({
        path: `/daily`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json"
      }, params)),
      getDailyRecommend: (date, params = {}) => this.request(__spreadValues({
        path: `/daily/${date}`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.episode = {
      listEpisodes: (query, params = {}) => this.request(__spreadValues({
        path: `/episode`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      getRandomEpisodes: (count, query, params = {}) => this.request(__spreadValues({
        path: `/episode/random/${count}`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      getEpisodeDetail: (id, params = {}) => this.request(__spreadValues({
        path: `/episode/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      isMyFavorite: (id, params = {}) => this.request(__spreadValues({
        path: `/episode/${id}/favorite`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      listen: (id, data, params = {}) => this.request(__spreadValues({
        path: `/episode/${id}/listen`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json"
      }, params)),
      toggleFavorite: (id, params = {}) => this.request(__spreadValues({
        path: `/episode/${id}/toggle`,
        method: "POST",
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.favorite = {
      getFavorites: (query, params = {}) => this.request(__spreadValues({
        path: `/favorite`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.feeds = {
      feeds: (query, params = {}) => this.request(__spreadValues({
        path: `/feeds`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.history = {
      history: (query, params = {}) => this.request(__spreadValues({
        path: `/history`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.playlist = {
      playlist: (params = {}) => this.request(__spreadValues({
        path: `/playlist`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      syncPlaylist: (data, params = {}) => this.request(__spreadValues({
        path: `/playlist`,
        method: "POST",
        body: data,
        type: ContentType.Json
      }, params))
    };
    this.podcast = {
      listPodcasts: (query, params = {}) => this.request(__spreadValues({
        path: `/podcast`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      getHotPodcasts: (count, query, params = {}) => this.request(__spreadValues({
        path: `/podcast/hot/${count}`,
        method: "GET",
        query,
        type: ContentType.Json,
        format: "json"
      }, params)),
      subscribedPodcasts: (params = {}) => this.request(__spreadValues({
        path: `/podcast/subscribed`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      getPodcastDetail: (id, params = {}) => this.request(__spreadValues({
        path: `/podcast/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      subInfo: (id, params = {}) => this.request(__spreadValues({
        path: `/podcast/${id}/sub-info`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      subscribe: (id, params = {}) => this.request(__spreadValues({
        path: `/podcast/${id}/subscribe`,
        method: "POST",
        type: ContentType.Json
      }, params)),
      unsubscribe: (id, params = {}) => this.request(__spreadValues({
        path: `/podcast/${id}/subscribe`,
        method: "DELETE",
        type: ContentType.Json
      }, params)),
      toggle: (id, params = {}) => this.request(__spreadValues({
        path: `/podcast/${id}/toggle`,
        method: "POST",
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.rec = {
      getNewUserRecommend: (params = {}) => this.request(__spreadValues({
        path: `/rec/new-user-rec`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params))
    };
    this.users = {
      login: (data, params = {}) => this.request(__spreadValues({
        path: `/users/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json"
      }, params)),
      logout: (params = {}) => this.request(__spreadValues({
        path: `/users/logout`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      me: (params = {}) => this.request(__spreadValues({
        path: `/users/me`,
        method: "GET",
        type: ContentType.Json,
        format: "json"
      }, params)),
      sendVerifyCode: (data, params = {}) => this.request(__spreadValues({
        path: `/users/verify-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json"
      }, params))
    };
  }
};

// user-data-manager/v2/index.ts
var v2_exports = {};
__export(v2_exports, {
  UserDataKeyEnum: () => UserDataKeyEnum,
  UserDataManager: () => UserDataManager,
  cacheDataKey: () => cacheDataKey,
  episodeDataKey: () => episodeDataKey,
  episodeId: () => episodeId,
  episodeIdFromPodcastId: () => episodeIdFromPodcastId,
  podcastDataKey: () => podcastDataKey,
  podcastId: () => podcastId,
  userDataKey: () => userDataKey
});

// ../feed-reader/lib/main.js
var import_axios2 = __toModule(require_axios4());
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames2(from2))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc2(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_util2 = __commonJS2({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex2) {
      const matches = [];
      let match = regex2.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex2.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex2.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys2 = Object.keys(a);
        const len = keys2.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys2[i]] = [a[keys2[i]]];
          } else {
            target[keys2[i]] = a[keys2[i]];
          }
        }
      }
    };
    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});
var require_validator2 = __commonJS2({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util2();
    var defaultOptions = {
      allowBooleanAttributes: false,
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err)
            return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid2 = validateAttributeString(attrStr, options);
              if (isValid2 === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid2.err.code, isValid2.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid2.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid2 = validateAttributeString(attrStr, options);
              if (isValid2 !== true) {
                return getErrorObject(isValid2.err.code, isValid2.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid2.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err)
                    return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                }
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});
var require_OptionsBuilder = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      allowBooleanAttributes: false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true
      },
      tagValueProcessor: function(tagName, val) {
        return val;
      },
      attributeValueProcessor: function(attrName, val) {
        return val;
      },
      stopNodes: [],
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});
var require_xmlNode = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val) {
        this.child.push({ [key]: val });
      }
      addChild(node) {
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module2.exports = XmlNode;
  }
});
var require_DocTypeReader = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module2) {
    function readDocType(xmlData, i) {
      const entities = {};
      if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, entity = false, comment = false;
        let exp = "";
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y") {
              i += 7;
              entity = true;
            } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T") {
              i += 8;
            } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T") {
              i += 8;
            } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N") {
              i += 9;
            } else if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-") {
              comment = true;
            } else {
              throw new Error("Invalid DOCTYPE");
            }
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i] === ">") {
            if (comment) {
              if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                comment = false;
              } else {
                throw new Error(`Invalid XML comment in DOCTYPE`);
              }
            } else if (entity) {
              parseEntityExp(exp, entities);
              entity = false;
            }
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i };
    }
    var entityRegex = RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);
    function parseEntityExp(exp, entities) {
      const match = entityRegex.exec(exp);
      if (match) {
        entities[match[1]] = {
          regx: RegExp(`&${match[1]};`, "g"),
          val: match[3]
        };
      }
    }
    module2.exports = readDocType;
  }
});
var require_strnum = __commonJS2({
  "../../node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module2.exports = toNumber;
  }
});
var require_OrderedObjParser = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module2) {
    "use strict";
    var util = require_util2();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i = 0; i < entKeys.length; i++) {
        const ent = entKeys[i];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val = val.trim();
        }
        if (val.length > 0) {
          if (!escapeEntities)
            val = this.replaceEntitiesValue(val);
          const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val;
          } else if (typeof newval !== typeof val || newval !== val) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val.trim();
            if (trimmedVal === val) {
              return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = this.resolveNameSpace(matches[i][1]);
          let oldVal = matches[i][4];
          const aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath);
              }
              currentNode.addChild(childNode);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val == void 0)
                val = "";
              currentNode.add(this.options.textNodeName, val);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              currentNode.addChild(childNode);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
                }
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
                currentNode.addChild(childNode);
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
                }
                currentNode.addChild(childNode);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    var replaceEntitiesValue = function(val) {
      if (this.options.processEntities) {
        for (let entityName in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName];
          val = val.replace(entity.regx, entity.val);
        }
        for (let entityName in this.lastEntities) {
          const entity = this.lastEntities[entityName];
          val = val.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName in this.htmlEntities) {
            const entity = this.htmlEntities[entityName];
            val = val.replace(entity.regex, entity.val);
          }
        }
        val = val.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    function readStopNodeData(xmlData, tagName, i) {
      const startIndex = i;
      let openTagCount = 1;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i),
                  i: closeIndex
                };
              }
            }
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val, shouldParse, options) {
      if (shouldParse && typeof val === "string") {
        const newval = val.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val, options);
      } else {
        if (util.isExist(val)) {
          return val;
        } else {
          return "";
        }
      }
    }
    module2.exports = OrderedObjParser;
  }
});
var require_node2json = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val, options);
          if (tagObj[":@"]) {
            assignAttributes(val, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val = val[options.textNodeName];
          } else if (Object.keys(val).length === 0) {
            if (options.alwaysCreateTextNode)
              val[options.textNodeName] = "";
            else
              val = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val];
            } else {
              compressedObj[property] = val;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys2 = Object.keys(obj);
      for (let i = 0; i < keys2.length; i++) {
        const key = keys2[i];
        if (key !== ":@")
          return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys2 = Object.keys(attrMap);
        const len = keys2.length;
        for (let i = 0; i < len; i++) {
          const atrrName = keys2[i];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const propCount = Object.keys(obj).length;
      if (propCount === 0 || propCount === 1 && obj[options.textNodeName])
        return true;
      return false;
    }
    exports.prettify = prettify;
  }
});
var require_XMLParser = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator2();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser2;
  }
});
var require_orderedJs2Xml = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module2) {
    var EOL2 = "\n";
    function toXml(jArray, options) {
      return arrToStr(jArray, options, "", 0);
    }
    function arrToStr(arr, options, jPath, level) {
      let xmlStr = "";
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL2 + "" + options.indentBy.repeat(level);
      }
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          xmlStr += indentation + tagText;
          continue;
        } else if (tagName === options.cdataPropName) {
          xmlStr += indentation + `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          continue;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        let tagStart = indentation + `<${tagName}${attStr}`;
        let tagValue = arrToStr(tagObj[tagName], options, newJPath, level + 1);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        }
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys2 = Object.keys(obj);
      for (let i = 0; i < keys2.length; i++) {
        const key = keys2[i];
        if (key !== ":@")
          return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
          const entity = options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module2.exports = toXml;
  }
});
var require_json2xml = __commonJS2({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      transformTagName: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
      if (this.options.suppressEmptyNode) {
        this.buildTextNode = buildEmptyTextNode;
        this.buildObjNode = buildEmptyObjNode;
      } else {
        this.buildTextNode = buildTextValNode;
        this.buildObjNode = buildObjectNode;
      }
      this.buildTextValNode = buildTextValNode;
      this.buildObjectNode = buildObjectNode;
      this.replaceEntitiesValue = replaceEntitiesValue;
      this.buildAttrPairStr = buildAttrPairStr;
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val += this.buildTextNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val += this.replaceEntitiesValue(newval);
            } else {
              val += this.buildTextNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              val += this.processTextOrObjNode(item, key, level);
            } else {
              val += this.buildTextNode(item, key, "", level);
            }
          }
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val };
    };
    function buildAttrPairStr(attrName, val) {
      val = this.options.attributeValueProcessor(attrName, "" + val);
      val = this.replaceEntitiesValue(val);
      if (this.options.suppressBooleanAttributes && val === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val + '"';
    }
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }
    function buildObjectNode(val, key, attrStr, level) {
      let tagEndExp = "</" + key + this.tagEndChar;
      let piClosingChar = "";
      if (key[0] === "?") {
        piClosingChar = "?";
        tagEndExp = "";
      }
      if (attrStr && val.indexOf("<") === -1) {
        return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val + tagEndExp;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
        return this.indentate(level) + `<!--${val}-->` + this.newLine;
      } else {
        return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
      }
    }
    function buildEmptyObjNode(val, key, attrStr, level) {
      if (val !== "") {
        return this.buildObjectNode(val, key, attrStr, level);
      } else {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else
          return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
      }
    }
    function buildTextValNode(val, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val}-->` + this.newLine;
      } else {
        let textValue = this.options.tagValueProcessor(key, val);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "" && this.options.unpairedTags.indexOf(key) !== -1) {
          if (this.options.suppressUnpairedNode) {
            return this.indentate(level) + "<" + key + this.tagEndChar;
          } else {
            return this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    }
    function replaceEntitiesValue(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i = 0; i < this.options.entities.length; i++) {
          const entity = this.options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    function buildEmptyTextNode(val, key, attrStr, level) {
      if (val === "" && this.options.unpairedTags.indexOf(key) !== -1) {
        if (this.options.suppressUnpairedNode) {
          return this.indentate(level) + "<" + key + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        }
      } else if (val !== "") {
        return this.buildTextValNode(val, key, attrStr, level);
      } else {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else
          return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
      }
    }
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module2.exports = Builder;
  }
});
var require_fxp = __commonJS2({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module2) {
    "use strict";
    var validator = require_validator2();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});
var require_named_references = __commonJS2({
  "../../node_modules/html-entities/lib/named-references.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bodyRegExps = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
    exports.namedReferences = { xml: { entities: { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&amp;": "&" }, characters: { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;", "&": "&amp;" } }, html4: { entities: { "&apos;": "'", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&cent": "\xA2", "&cent;": "\xA2", "&pound": "\xA3", "&pound;": "\xA3", "&curren": "\xA4", "&curren;": "\xA4", "&yen": "\xA5", "&yen;": "\xA5", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&sect": "\xA7", "&sect;": "\xA7", "&uml": "\xA8", "&uml;": "\xA8", "&copy": "\xA9", "&copy;": "\xA9", "&ordf": "\xAA", "&ordf;": "\xAA", "&laquo": "\xAB", "&laquo;": "\xAB", "&not": "\xAC", "&not;": "\xAC", "&shy": "\xAD", "&shy;": "\xAD", "&reg": "\xAE", "&reg;": "\xAE", "&macr": "\xAF", "&macr;": "\xAF", "&deg": "\xB0", "&deg;": "\xB0", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&acute": "\xB4", "&acute;": "\xB4", "&micro": "\xB5", "&micro;": "\xB5", "&para": "\xB6", "&para;": "\xB6", "&middot": "\xB7", "&middot;": "\xB7", "&cedil": "\xB8", "&cedil;": "\xB8", "&sup1": "\xB9", "&sup1;": "\xB9", "&ordm": "\xBA", "&ordm;": "\xBA", "&raquo": "\xBB", "&raquo;": "\xBB", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac34": "\xBE", "&frac34;": "\xBE", "&iquest": "\xBF", "&iquest;": "\xBF", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Aring": "\xC5", "&Aring;": "\xC5", "&AElig": "\xC6", "&AElig;": "\xC6", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Euml": "\xCB", "&Euml;": "\xCB", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&ETH": "\xD0", "&ETH;": "\xD0", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&times": "\xD7", "&times;": "\xD7", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&THORN": "\xDE", "&THORN;": "\xDE", "&szlig": "\xDF", "&szlig;": "\xDF", "&agrave": "\xE0", "&agrave;": "\xE0", "&aacute": "\xE1", "&aacute;": "\xE1", "&acirc": "\xE2", "&acirc;": "\xE2", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&aring": "\xE5", "&aring;": "\xE5", "&aelig": "\xE6", "&aelig;": "\xE6", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&egrave": "\xE8", "&egrave;": "\xE8", "&eacute": "\xE9", "&eacute;": "\xE9", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&euml": "\xEB", "&euml;": "\xEB", "&igrave": "\xEC", "&igrave;": "\xEC", "&iacute": "\xED", "&iacute;": "\xED", "&icirc": "\xEE", "&icirc;": "\xEE", "&iuml": "\xEF", "&iuml;": "\xEF", "&eth": "\xF0", "&eth;": "\xF0", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ograve": "\xF2", "&ograve;": "\xF2", "&oacute": "\xF3", "&oacute;": "\xF3", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&otilde": "\xF5", "&otilde;": "\xF5", "&ouml": "\xF6", "&ouml;": "\xF6", "&divide": "\xF7", "&divide;": "\xF7", "&oslash": "\xF8", "&oslash;": "\xF8", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uacute": "\xFA", "&uacute;": "\xFA", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&uuml": "\xFC", "&uuml;": "\xFC", "&yacute": "\xFD", "&yacute;": "\xFD", "&thorn": "\xFE", "&thorn;": "\xFE", "&yuml": "\xFF", "&yuml;": "\xFF", "&quot": '"', "&quot;": '"', "&amp": "&", "&amp;": "&", "&lt": "<", "&lt;": "<", "&gt": ">", "&gt;": ">", "&OElig;": "\u0152", "&oelig;": "\u0153", "&Scaron;": "\u0160", "&scaron;": "\u0161", "&Yuml;": "\u0178", "&circ;": "\u02C6", "&tilde;": "\u02DC", "&ensp;": "\u2002", "&emsp;": "\u2003", "&thinsp;": "\u2009", "&zwnj;": "\u200C", "&zwj;": "\u200D", "&lrm;": "\u200E", "&rlm;": "\u200F", "&ndash;": "\u2013", "&mdash;": "\u2014", "&lsquo;": "\u2018", "&rsquo;": "\u2019", "&sbquo;": "\u201A", "&ldquo;": "\u201C", "&rdquo;": "\u201D", "&bdquo;": "\u201E", "&dagger;": "\u2020", "&Dagger;": "\u2021", "&permil;": "\u2030", "&lsaquo;": "\u2039", "&rsaquo;": "\u203A", "&euro;": "\u20AC", "&fnof;": "\u0192", "&Alpha;": "\u0391", "&Beta;": "\u0392", "&Gamma;": "\u0393", "&Delta;": "\u0394", "&Epsilon;": "\u0395", "&Zeta;": "\u0396", "&Eta;": "\u0397", "&Theta;": "\u0398", "&Iota;": "\u0399", "&Kappa;": "\u039A", "&Lambda;": "\u039B", "&Mu;": "\u039C", "&Nu;": "\u039D", "&Xi;": "\u039E", "&Omicron;": "\u039F", "&Pi;": "\u03A0", "&Rho;": "\u03A1", "&Sigma;": "\u03A3", "&Tau;": "\u03A4", "&Upsilon;": "\u03A5", "&Phi;": "\u03A6", "&Chi;": "\u03A7", "&Psi;": "\u03A8", "&Omega;": "\u03A9", "&alpha;": "\u03B1", "&beta;": "\u03B2", "&gamma;": "\u03B3", "&delta;": "\u03B4", "&epsilon;": "\u03B5", "&zeta;": "\u03B6", "&eta;": "\u03B7", "&theta;": "\u03B8", "&iota;": "\u03B9", "&kappa;": "\u03BA", "&lambda;": "\u03BB", "&mu;": "\u03BC", "&nu;": "\u03BD", "&xi;": "\u03BE", "&omicron;": "\u03BF", "&pi;": "\u03C0", "&rho;": "\u03C1", "&sigmaf;": "\u03C2", "&sigma;": "\u03C3", "&tau;": "\u03C4", "&upsilon;": "\u03C5", "&phi;": "\u03C6", "&chi;": "\u03C7", "&psi;": "\u03C8", "&omega;": "\u03C9", "&thetasym;": "\u03D1", "&upsih;": "\u03D2", "&piv;": "\u03D6", "&bull;": "\u2022", "&hellip;": "\u2026", "&prime;": "\u2032", "&Prime;": "\u2033", "&oline;": "\u203E", "&frasl;": "\u2044", "&weierp;": "\u2118", "&image;": "\u2111", "&real;": "\u211C", "&trade;": "\u2122", "&alefsym;": "\u2135", "&larr;": "\u2190", "&uarr;": "\u2191", "&rarr;": "\u2192", "&darr;": "\u2193", "&harr;": "\u2194", "&crarr;": "\u21B5", "&lArr;": "\u21D0", "&uArr;": "\u21D1", "&rArr;": "\u21D2", "&dArr;": "\u21D3", "&hArr;": "\u21D4", "&forall;": "\u2200", "&part;": "\u2202", "&exist;": "\u2203", "&empty;": "\u2205", "&nabla;": "\u2207", "&isin;": "\u2208", "&notin;": "\u2209", "&ni;": "\u220B", "&prod;": "\u220F", "&sum;": "\u2211", "&minus;": "\u2212", "&lowast;": "\u2217", "&radic;": "\u221A", "&prop;": "\u221D", "&infin;": "\u221E", "&ang;": "\u2220", "&and;": "\u2227", "&or;": "\u2228", "&cap;": "\u2229", "&cup;": "\u222A", "&int;": "\u222B", "&there4;": "\u2234", "&sim;": "\u223C", "&cong;": "\u2245", "&asymp;": "\u2248", "&ne;": "\u2260", "&equiv;": "\u2261", "&le;": "\u2264", "&ge;": "\u2265", "&sub;": "\u2282", "&sup;": "\u2283", "&nsub;": "\u2284", "&sube;": "\u2286", "&supe;": "\u2287", "&oplus;": "\u2295", "&otimes;": "\u2297", "&perp;": "\u22A5", "&sdot;": "\u22C5", "&lceil;": "\u2308", "&rceil;": "\u2309", "&lfloor;": "\u230A", "&rfloor;": "\u230B", "&lang;": "\u2329", "&rang;": "\u232A", "&loz;": "\u25CA", "&spades;": "\u2660", "&clubs;": "\u2663", "&hearts;": "\u2665", "&diams;": "\u2666" }, characters: { "'": "&apos;", "\xA0": "&nbsp;", "\xA1": "&iexcl;", "\xA2": "&cent;", "\xA3": "&pound;", "\xA4": "&curren;", "\xA5": "&yen;", "\xA6": "&brvbar;", "\xA7": "&sect;", "\xA8": "&uml;", "\xA9": "&copy;", "\xAA": "&ordf;", "\xAB": "&laquo;", "\xAC": "&not;", "\xAD": "&shy;", "\xAE": "&reg;", "\xAF": "&macr;", "\xB0": "&deg;", "\xB1": "&plusmn;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\xB4": "&acute;", "\xB5": "&micro;", "\xB6": "&para;", "\xB7": "&middot;", "\xB8": "&cedil;", "\xB9": "&sup1;", "\xBA": "&ordm;", "\xBB": "&raquo;", "\xBC": "&frac14;", "\xBD": "&frac12;", "\xBE": "&frac34;", "\xBF": "&iquest;", "\xC0": "&Agrave;", "\xC1": "&Aacute;", "\xC2": "&Acirc;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\xC5": "&Aring;", "\xC6": "&AElig;", "\xC7": "&Ccedil;", "\xC8": "&Egrave;", "\xC9": "&Eacute;", "\xCA": "&Ecirc;", "\xCB": "&Euml;", "\xCC": "&Igrave;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\xCF": "&Iuml;", "\xD0": "&ETH;", "\xD1": "&Ntilde;", "\xD2": "&Ograve;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\xD5": "&Otilde;", "\xD6": "&Ouml;", "\xD7": "&times;", "\xD8": "&Oslash;", "\xD9": "&Ugrave;", "\xDA": "&Uacute;", "\xDB": "&Ucirc;", "\xDC": "&Uuml;", "\xDD": "&Yacute;", "\xDE": "&THORN;", "\xDF": "&szlig;", "\xE0": "&agrave;", "\xE1": "&aacute;", "\xE2": "&acirc;", "\xE3": "&atilde;", "\xE4": "&auml;", "\xE5": "&aring;", "\xE6": "&aelig;", "\xE7": "&ccedil;", "\xE8": "&egrave;", "\xE9": "&eacute;", "\xEA": "&ecirc;", "\xEB": "&euml;", "\xEC": "&igrave;", "\xED": "&iacute;", "\xEE": "&icirc;", "\xEF": "&iuml;", "\xF0": "&eth;", "\xF1": "&ntilde;", "\xF2": "&ograve;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\xF5": "&otilde;", "\xF6": "&ouml;", "\xF7": "&divide;", "\xF8": "&oslash;", "\xF9": "&ugrave;", "\xFA": "&uacute;", "\xFB": "&ucirc;", "\xFC": "&uuml;", "\xFD": "&yacute;", "\xFE": "&thorn;", "\xFF": "&yuml;", '"': "&quot;", "&": "&amp;", "<": "&lt;", ">": "&gt;", "\u0152": "&OElig;", "\u0153": "&oelig;", "\u0160": "&Scaron;", "\u0161": "&scaron;", "\u0178": "&Yuml;", "\u02C6": "&circ;", "\u02DC": "&tilde;", "\u2002": "&ensp;", "\u2003": "&emsp;", "\u2009": "&thinsp;", "\u200C": "&zwnj;", "\u200D": "&zwj;", "\u200E": "&lrm;", "\u200F": "&rlm;", "\u2013": "&ndash;", "\u2014": "&mdash;", "\u2018": "&lsquo;", "\u2019": "&rsquo;", "\u201A": "&sbquo;", "\u201C": "&ldquo;", "\u201D": "&rdquo;", "\u201E": "&bdquo;", "\u2020": "&dagger;", "\u2021": "&Dagger;", "\u2030": "&permil;", "\u2039": "&lsaquo;", "\u203A": "&rsaquo;", "\u20AC": "&euro;", "\u0192": "&fnof;", "\u0391": "&Alpha;", "\u0392": "&Beta;", "\u0393": "&Gamma;", "\u0394": "&Delta;", "\u0395": "&Epsilon;", "\u0396": "&Zeta;", "\u0397": "&Eta;", "\u0398": "&Theta;", "\u0399": "&Iota;", "\u039A": "&Kappa;", "\u039B": "&Lambda;", "\u039C": "&Mu;", "\u039D": "&Nu;", "\u039E": "&Xi;", "\u039F": "&Omicron;", "\u03A0": "&Pi;", "\u03A1": "&Rho;", "\u03A3": "&Sigma;", "\u03A4": "&Tau;", "\u03A5": "&Upsilon;", "\u03A6": "&Phi;", "\u03A7": "&Chi;", "\u03A8": "&Psi;", "\u03A9": "&Omega;", "\u03B1": "&alpha;", "\u03B2": "&beta;", "\u03B3": "&gamma;", "\u03B4": "&delta;", "\u03B5": "&epsilon;", "\u03B6": "&zeta;", "\u03B7": "&eta;", "\u03B8": "&theta;", "\u03B9": "&iota;", "\u03BA": "&kappa;", "\u03BB": "&lambda;", "\u03BC": "&mu;", "\u03BD": "&nu;", "\u03BE": "&xi;", "\u03BF": "&omicron;", "\u03C0": "&pi;", "\u03C1": "&rho;", "\u03C2": "&sigmaf;", "\u03C3": "&sigma;", "\u03C4": "&tau;", "\u03C5": "&upsilon;", "\u03C6": "&phi;", "\u03C7": "&chi;", "\u03C8": "&psi;", "\u03C9": "&omega;", "\u03D1": "&thetasym;", "\u03D2": "&upsih;", "\u03D6": "&piv;", "\u2022": "&bull;", "\u2026": "&hellip;", "\u2032": "&prime;", "\u2033": "&Prime;", "\u203E": "&oline;", "\u2044": "&frasl;", "\u2118": "&weierp;", "\u2111": "&image;", "\u211C": "&real;", "\u2122": "&trade;", "\u2135": "&alefsym;", "\u2190": "&larr;", "\u2191": "&uarr;", "\u2192": "&rarr;", "\u2193": "&darr;", "\u2194": "&harr;", "\u21B5": "&crarr;", "\u21D0": "&lArr;", "\u21D1": "&uArr;", "\u21D2": "&rArr;", "\u21D3": "&dArr;", "\u21D4": "&hArr;", "\u2200": "&forall;", "\u2202": "&part;", "\u2203": "&exist;", "\u2205": "&empty;", "\u2207": "&nabla;", "\u2208": "&isin;", "\u2209": "&notin;", "\u220B": "&ni;", "\u220F": "&prod;", "\u2211": "&sum;", "\u2212": "&minus;", "\u2217": "&lowast;", "\u221A": "&radic;", "\u221D": "&prop;", "\u221E": "&infin;", "\u2220": "&ang;", "\u2227": "&and;", "\u2228": "&or;", "\u2229": "&cap;", "\u222A": "&cup;", "\u222B": "&int;", "\u2234": "&there4;", "\u223C": "&sim;", "\u2245": "&cong;", "\u2248": "&asymp;", "\u2260": "&ne;", "\u2261": "&equiv;", "\u2264": "&le;", "\u2265": "&ge;", "\u2282": "&sub;", "\u2283": "&sup;", "\u2284": "&nsub;", "\u2286": "&sube;", "\u2287": "&supe;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u22A5": "&perp;", "\u22C5": "&sdot;", "\u2308": "&lceil;", "\u2309": "&rceil;", "\u230A": "&lfloor;", "\u230B": "&rfloor;", "\u2329": "&lang;", "\u232A": "&rang;", "\u25CA": "&loz;", "\u2660": "&spades;", "\u2663": "&clubs;", "\u2665": "&hearts;", "\u2666": "&diams;" } }, html5: { entities: { "&AElig": "\xC6", "&AElig;": "\xC6", "&AMP": "&", "&AMP;": "&", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Abreve;": "\u0102", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Acy;": "\u0410", "&Afr;": "\u{1D504}", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Alpha;": "\u0391", "&Amacr;": "\u0100", "&And;": "\u2A53", "&Aogon;": "\u0104", "&Aopf;": "\u{1D538}", "&ApplyFunction;": "\u2061", "&Aring": "\xC5", "&Aring;": "\xC5", "&Ascr;": "\u{1D49C}", "&Assign;": "\u2254", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Backslash;": "\u2216", "&Barv;": "\u2AE7", "&Barwed;": "\u2306", "&Bcy;": "\u0411", "&Because;": "\u2235", "&Bernoullis;": "\u212C", "&Beta;": "\u0392", "&Bfr;": "\u{1D505}", "&Bopf;": "\u{1D539}", "&Breve;": "\u02D8", "&Bscr;": "\u212C", "&Bumpeq;": "\u224E", "&CHcy;": "\u0427", "&COPY": "\xA9", "&COPY;": "\xA9", "&Cacute;": "\u0106", "&Cap;": "\u22D2", "&CapitalDifferentialD;": "\u2145", "&Cayleys;": "\u212D", "&Ccaron;": "\u010C", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Ccirc;": "\u0108", "&Cconint;": "\u2230", "&Cdot;": "\u010A", "&Cedilla;": "\xB8", "&CenterDot;": "\xB7", "&Cfr;": "\u212D", "&Chi;": "\u03A7", "&CircleDot;": "\u2299", "&CircleMinus;": "\u2296", "&CirclePlus;": "\u2295", "&CircleTimes;": "\u2297", "&ClockwiseContourIntegral;": "\u2232", "&CloseCurlyDoubleQuote;": "\u201D", "&CloseCurlyQuote;": "\u2019", "&Colon;": "\u2237", "&Colone;": "\u2A74", "&Congruent;": "\u2261", "&Conint;": "\u222F", "&ContourIntegral;": "\u222E", "&Copf;": "\u2102", "&Coproduct;": "\u2210", "&CounterClockwiseContourIntegral;": "\u2233", "&Cross;": "\u2A2F", "&Cscr;": "\u{1D49E}", "&Cup;": "\u22D3", "&CupCap;": "\u224D", "&DD;": "\u2145", "&DDotrahd;": "\u2911", "&DJcy;": "\u0402", "&DScy;": "\u0405", "&DZcy;": "\u040F", "&Dagger;": "\u2021", "&Darr;": "\u21A1", "&Dashv;": "\u2AE4", "&Dcaron;": "\u010E", "&Dcy;": "\u0414", "&Del;": "\u2207", "&Delta;": "\u0394", "&Dfr;": "\u{1D507}", "&DiacriticalAcute;": "\xB4", "&DiacriticalDot;": "\u02D9", "&DiacriticalDoubleAcute;": "\u02DD", "&DiacriticalGrave;": "`", "&DiacriticalTilde;": "\u02DC", "&Diamond;": "\u22C4", "&DifferentialD;": "\u2146", "&Dopf;": "\u{1D53B}", "&Dot;": "\xA8", "&DotDot;": "\u20DC", "&DotEqual;": "\u2250", "&DoubleContourIntegral;": "\u222F", "&DoubleDot;": "\xA8", "&DoubleDownArrow;": "\u21D3", "&DoubleLeftArrow;": "\u21D0", "&DoubleLeftRightArrow;": "\u21D4", "&DoubleLeftTee;": "\u2AE4", "&DoubleLongLeftArrow;": "\u27F8", "&DoubleLongLeftRightArrow;": "\u27FA", "&DoubleLongRightArrow;": "\u27F9", "&DoubleRightArrow;": "\u21D2", "&DoubleRightTee;": "\u22A8", "&DoubleUpArrow;": "\u21D1", "&DoubleUpDownArrow;": "\u21D5", "&DoubleVerticalBar;": "\u2225", "&DownArrow;": "\u2193", "&DownArrowBar;": "\u2913", "&DownArrowUpArrow;": "\u21F5", "&DownBreve;": "\u0311", "&DownLeftRightVector;": "\u2950", "&DownLeftTeeVector;": "\u295E", "&DownLeftVector;": "\u21BD", "&DownLeftVectorBar;": "\u2956", "&DownRightTeeVector;": "\u295F", "&DownRightVector;": "\u21C1", "&DownRightVectorBar;": "\u2957", "&DownTee;": "\u22A4", "&DownTeeArrow;": "\u21A7", "&Downarrow;": "\u21D3", "&Dscr;": "\u{1D49F}", "&Dstrok;": "\u0110", "&ENG;": "\u014A", "&ETH": "\xD0", "&ETH;": "\xD0", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecaron;": "\u011A", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Ecy;": "\u042D", "&Edot;": "\u0116", "&Efr;": "\u{1D508}", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Element;": "\u2208", "&Emacr;": "\u0112", "&EmptySmallSquare;": "\u25FB", "&EmptyVerySmallSquare;": "\u25AB", "&Eogon;": "\u0118", "&Eopf;": "\u{1D53C}", "&Epsilon;": "\u0395", "&Equal;": "\u2A75", "&EqualTilde;": "\u2242", "&Equilibrium;": "\u21CC", "&Escr;": "\u2130", "&Esim;": "\u2A73", "&Eta;": "\u0397", "&Euml": "\xCB", "&Euml;": "\xCB", "&Exists;": "\u2203", "&ExponentialE;": "\u2147", "&Fcy;": "\u0424", "&Ffr;": "\u{1D509}", "&FilledSmallSquare;": "\u25FC", "&FilledVerySmallSquare;": "\u25AA", "&Fopf;": "\u{1D53D}", "&ForAll;": "\u2200", "&Fouriertrf;": "\u2131", "&Fscr;": "\u2131", "&GJcy;": "\u0403", "&GT": ">", "&GT;": ">", "&Gamma;": "\u0393", "&Gammad;": "\u03DC", "&Gbreve;": "\u011E", "&Gcedil;": "\u0122", "&Gcirc;": "\u011C", "&Gcy;": "\u0413", "&Gdot;": "\u0120", "&Gfr;": "\u{1D50A}", "&Gg;": "\u22D9", "&Gopf;": "\u{1D53E}", "&GreaterEqual;": "\u2265", "&GreaterEqualLess;": "\u22DB", "&GreaterFullEqual;": "\u2267", "&GreaterGreater;": "\u2AA2", "&GreaterLess;": "\u2277", "&GreaterSlantEqual;": "\u2A7E", "&GreaterTilde;": "\u2273", "&Gscr;": "\u{1D4A2}", "&Gt;": "\u226B", "&HARDcy;": "\u042A", "&Hacek;": "\u02C7", "&Hat;": "^", "&Hcirc;": "\u0124", "&Hfr;": "\u210C", "&HilbertSpace;": "\u210B", "&Hopf;": "\u210D", "&HorizontalLine;": "\u2500", "&Hscr;": "\u210B", "&Hstrok;": "\u0126", "&HumpDownHump;": "\u224E", "&HumpEqual;": "\u224F", "&IEcy;": "\u0415", "&IJlig;": "\u0132", "&IOcy;": "\u0401", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Icy;": "\u0418", "&Idot;": "\u0130", "&Ifr;": "\u2111", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Im;": "\u2111", "&Imacr;": "\u012A", "&ImaginaryI;": "\u2148", "&Implies;": "\u21D2", "&Int;": "\u222C", "&Integral;": "\u222B", "&Intersection;": "\u22C2", "&InvisibleComma;": "\u2063", "&InvisibleTimes;": "\u2062", "&Iogon;": "\u012E", "&Iopf;": "\u{1D540}", "&Iota;": "\u0399", "&Iscr;": "\u2110", "&Itilde;": "\u0128", "&Iukcy;": "\u0406", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&Jcirc;": "\u0134", "&Jcy;": "\u0419", "&Jfr;": "\u{1D50D}", "&Jopf;": "\u{1D541}", "&Jscr;": "\u{1D4A5}", "&Jsercy;": "\u0408", "&Jukcy;": "\u0404", "&KHcy;": "\u0425", "&KJcy;": "\u040C", "&Kappa;": "\u039A", "&Kcedil;": "\u0136", "&Kcy;": "\u041A", "&Kfr;": "\u{1D50E}", "&Kopf;": "\u{1D542}", "&Kscr;": "\u{1D4A6}", "&LJcy;": "\u0409", "&LT": "<", "&LT;": "<", "&Lacute;": "\u0139", "&Lambda;": "\u039B", "&Lang;": "\u27EA", "&Laplacetrf;": "\u2112", "&Larr;": "\u219E", "&Lcaron;": "\u013D", "&Lcedil;": "\u013B", "&Lcy;": "\u041B", "&LeftAngleBracket;": "\u27E8", "&LeftArrow;": "\u2190", "&LeftArrowBar;": "\u21E4", "&LeftArrowRightArrow;": "\u21C6", "&LeftCeiling;": "\u2308", "&LeftDoubleBracket;": "\u27E6", "&LeftDownTeeVector;": "\u2961", "&LeftDownVector;": "\u21C3", "&LeftDownVectorBar;": "\u2959", "&LeftFloor;": "\u230A", "&LeftRightArrow;": "\u2194", "&LeftRightVector;": "\u294E", "&LeftTee;": "\u22A3", "&LeftTeeArrow;": "\u21A4", "&LeftTeeVector;": "\u295A", "&LeftTriangle;": "\u22B2", "&LeftTriangleBar;": "\u29CF", "&LeftTriangleEqual;": "\u22B4", "&LeftUpDownVector;": "\u2951", "&LeftUpTeeVector;": "\u2960", "&LeftUpVector;": "\u21BF", "&LeftUpVectorBar;": "\u2958", "&LeftVector;": "\u21BC", "&LeftVectorBar;": "\u2952", "&Leftarrow;": "\u21D0", "&Leftrightarrow;": "\u21D4", "&LessEqualGreater;": "\u22DA", "&LessFullEqual;": "\u2266", "&LessGreater;": "\u2276", "&LessLess;": "\u2AA1", "&LessSlantEqual;": "\u2A7D", "&LessTilde;": "\u2272", "&Lfr;": "\u{1D50F}", "&Ll;": "\u22D8", "&Lleftarrow;": "\u21DA", "&Lmidot;": "\u013F", "&LongLeftArrow;": "\u27F5", "&LongLeftRightArrow;": "\u27F7", "&LongRightArrow;": "\u27F6", "&Longleftarrow;": "\u27F8", "&Longleftrightarrow;": "\u27FA", "&Longrightarrow;": "\u27F9", "&Lopf;": "\u{1D543}", "&LowerLeftArrow;": "\u2199", "&LowerRightArrow;": "\u2198", "&Lscr;": "\u2112", "&Lsh;": "\u21B0", "&Lstrok;": "\u0141", "&Lt;": "\u226A", "&Map;": "\u2905", "&Mcy;": "\u041C", "&MediumSpace;": "\u205F", "&Mellintrf;": "\u2133", "&Mfr;": "\u{1D510}", "&MinusPlus;": "\u2213", "&Mopf;": "\u{1D544}", "&Mscr;": "\u2133", "&Mu;": "\u039C", "&NJcy;": "\u040A", "&Nacute;": "\u0143", "&Ncaron;": "\u0147", "&Ncedil;": "\u0145", "&Ncy;": "\u041D", "&NegativeMediumSpace;": "\u200B", "&NegativeThickSpace;": "\u200B", "&NegativeThinSpace;": "\u200B", "&NegativeVeryThinSpace;": "\u200B", "&NestedGreaterGreater;": "\u226B", "&NestedLessLess;": "\u226A", "&NewLine;": "\n", "&Nfr;": "\u{1D511}", "&NoBreak;": "\u2060", "&NonBreakingSpace;": "\xA0", "&Nopf;": "\u2115", "&Not;": "\u2AEC", "&NotCongruent;": "\u2262", "&NotCupCap;": "\u226D", "&NotDoubleVerticalBar;": "\u2226", "&NotElement;": "\u2209", "&NotEqual;": "\u2260", "&NotEqualTilde;": "\u2242\u0338", "&NotExists;": "\u2204", "&NotGreater;": "\u226F", "&NotGreaterEqual;": "\u2271", "&NotGreaterFullEqual;": "\u2267\u0338", "&NotGreaterGreater;": "\u226B\u0338", "&NotGreaterLess;": "\u2279", "&NotGreaterSlantEqual;": "\u2A7E\u0338", "&NotGreaterTilde;": "\u2275", "&NotHumpDownHump;": "\u224E\u0338", "&NotHumpEqual;": "\u224F\u0338", "&NotLeftTriangle;": "\u22EA", "&NotLeftTriangleBar;": "\u29CF\u0338", "&NotLeftTriangleEqual;": "\u22EC", "&NotLess;": "\u226E", "&NotLessEqual;": "\u2270", "&NotLessGreater;": "\u2278", "&NotLessLess;": "\u226A\u0338", "&NotLessSlantEqual;": "\u2A7D\u0338", "&NotLessTilde;": "\u2274", "&NotNestedGreaterGreater;": "\u2AA2\u0338", "&NotNestedLessLess;": "\u2AA1\u0338", "&NotPrecedes;": "\u2280", "&NotPrecedesEqual;": "\u2AAF\u0338", "&NotPrecedesSlantEqual;": "\u22E0", "&NotReverseElement;": "\u220C", "&NotRightTriangle;": "\u22EB", "&NotRightTriangleBar;": "\u29D0\u0338", "&NotRightTriangleEqual;": "\u22ED", "&NotSquareSubset;": "\u228F\u0338", "&NotSquareSubsetEqual;": "\u22E2", "&NotSquareSuperset;": "\u2290\u0338", "&NotSquareSupersetEqual;": "\u22E3", "&NotSubset;": "\u2282\u20D2", "&NotSubsetEqual;": "\u2288", "&NotSucceeds;": "\u2281", "&NotSucceedsEqual;": "\u2AB0\u0338", "&NotSucceedsSlantEqual;": "\u22E1", "&NotSucceedsTilde;": "\u227F\u0338", "&NotSuperset;": "\u2283\u20D2", "&NotSupersetEqual;": "\u2289", "&NotTilde;": "\u2241", "&NotTildeEqual;": "\u2244", "&NotTildeFullEqual;": "\u2247", "&NotTildeTilde;": "\u2249", "&NotVerticalBar;": "\u2224", "&Nscr;": "\u{1D4A9}", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Nu;": "\u039D", "&OElig;": "\u0152", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Ocy;": "\u041E", "&Odblac;": "\u0150", "&Ofr;": "\u{1D512}", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Omacr;": "\u014C", "&Omega;": "\u03A9", "&Omicron;": "\u039F", "&Oopf;": "\u{1D546}", "&OpenCurlyDoubleQuote;": "\u201C", "&OpenCurlyQuote;": "\u2018", "&Or;": "\u2A54", "&Oscr;": "\u{1D4AA}", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Otimes;": "\u2A37", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&OverBar;": "\u203E", "&OverBrace;": "\u23DE", "&OverBracket;": "\u23B4", "&OverParenthesis;": "\u23DC", "&PartialD;": "\u2202", "&Pcy;": "\u041F", "&Pfr;": "\u{1D513}", "&Phi;": "\u03A6", "&Pi;": "\u03A0", "&PlusMinus;": "\xB1", "&Poincareplane;": "\u210C", "&Popf;": "\u2119", "&Pr;": "\u2ABB", "&Precedes;": "\u227A", "&PrecedesEqual;": "\u2AAF", "&PrecedesSlantEqual;": "\u227C", "&PrecedesTilde;": "\u227E", "&Prime;": "\u2033", "&Product;": "\u220F", "&Proportion;": "\u2237", "&Proportional;": "\u221D", "&Pscr;": "\u{1D4AB}", "&Psi;": "\u03A8", "&QUOT": '"', "&QUOT;": '"', "&Qfr;": "\u{1D514}", "&Qopf;": "\u211A", "&Qscr;": "\u{1D4AC}", "&RBarr;": "\u2910", "&REG": "\xAE", "&REG;": "\xAE", "&Racute;": "\u0154", "&Rang;": "\u27EB", "&Rarr;": "\u21A0", "&Rarrtl;": "\u2916", "&Rcaron;": "\u0158", "&Rcedil;": "\u0156", "&Rcy;": "\u0420", "&Re;": "\u211C", "&ReverseElement;": "\u220B", "&ReverseEquilibrium;": "\u21CB", "&ReverseUpEquilibrium;": "\u296F", "&Rfr;": "\u211C", "&Rho;": "\u03A1", "&RightAngleBracket;": "\u27E9", "&RightArrow;": "\u2192", "&RightArrowBar;": "\u21E5", "&RightArrowLeftArrow;": "\u21C4", "&RightCeiling;": "\u2309", "&RightDoubleBracket;": "\u27E7", "&RightDownTeeVector;": "\u295D", "&RightDownVector;": "\u21C2", "&RightDownVectorBar;": "\u2955", "&RightFloor;": "\u230B", "&RightTee;": "\u22A2", "&RightTeeArrow;": "\u21A6", "&RightTeeVector;": "\u295B", "&RightTriangle;": "\u22B3", "&RightTriangleBar;": "\u29D0", "&RightTriangleEqual;": "\u22B5", "&RightUpDownVector;": "\u294F", "&RightUpTeeVector;": "\u295C", "&RightUpVector;": "\u21BE", "&RightUpVectorBar;": "\u2954", "&RightVector;": "\u21C0", "&RightVectorBar;": "\u2953", "&Rightarrow;": "\u21D2", "&Ropf;": "\u211D", "&RoundImplies;": "\u2970", "&Rrightarrow;": "\u21DB", "&Rscr;": "\u211B", "&Rsh;": "\u21B1", "&RuleDelayed;": "\u29F4", "&SHCHcy;": "\u0429", "&SHcy;": "\u0428", "&SOFTcy;": "\u042C", "&Sacute;": "\u015A", "&Sc;": "\u2ABC", "&Scaron;": "\u0160", "&Scedil;": "\u015E", "&Scirc;": "\u015C", "&Scy;": "\u0421", "&Sfr;": "\u{1D516}", "&ShortDownArrow;": "\u2193", "&ShortLeftArrow;": "\u2190", "&ShortRightArrow;": "\u2192", "&ShortUpArrow;": "\u2191", "&Sigma;": "\u03A3", "&SmallCircle;": "\u2218", "&Sopf;": "\u{1D54A}", "&Sqrt;": "\u221A", "&Square;": "\u25A1", "&SquareIntersection;": "\u2293", "&SquareSubset;": "\u228F", "&SquareSubsetEqual;": "\u2291", "&SquareSuperset;": "\u2290", "&SquareSupersetEqual;": "\u2292", "&SquareUnion;": "\u2294", "&Sscr;": "\u{1D4AE}", "&Star;": "\u22C6", "&Sub;": "\u22D0", "&Subset;": "\u22D0", "&SubsetEqual;": "\u2286", "&Succeeds;": "\u227B", "&SucceedsEqual;": "\u2AB0", "&SucceedsSlantEqual;": "\u227D", "&SucceedsTilde;": "\u227F", "&SuchThat;": "\u220B", "&Sum;": "\u2211", "&Sup;": "\u22D1", "&Superset;": "\u2283", "&SupersetEqual;": "\u2287", "&Supset;": "\u22D1", "&THORN": "\xDE", "&THORN;": "\xDE", "&TRADE;": "\u2122", "&TSHcy;": "\u040B", "&TScy;": "\u0426", "&Tab;": "	", "&Tau;": "\u03A4", "&Tcaron;": "\u0164", "&Tcedil;": "\u0162", "&Tcy;": "\u0422", "&Tfr;": "\u{1D517}", "&Therefore;": "\u2234", "&Theta;": "\u0398", "&ThickSpace;": "\u205F\u200A", "&ThinSpace;": "\u2009", "&Tilde;": "\u223C", "&TildeEqual;": "\u2243", "&TildeFullEqual;": "\u2245", "&TildeTilde;": "\u2248", "&Topf;": "\u{1D54B}", "&TripleDot;": "\u20DB", "&Tscr;": "\u{1D4AF}", "&Tstrok;": "\u0166", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Uarr;": "\u219F", "&Uarrocir;": "\u2949", "&Ubrcy;": "\u040E", "&Ubreve;": "\u016C", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Ucy;": "\u0423", "&Udblac;": "\u0170", "&Ufr;": "\u{1D518}", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Umacr;": "\u016A", "&UnderBar;": "_", "&UnderBrace;": "\u23DF", "&UnderBracket;": "\u23B5", "&UnderParenthesis;": "\u23DD", "&Union;": "\u22C3", "&UnionPlus;": "\u228E", "&Uogon;": "\u0172", "&Uopf;": "\u{1D54C}", "&UpArrow;": "\u2191", "&UpArrowBar;": "\u2912", "&UpArrowDownArrow;": "\u21C5", "&UpDownArrow;": "\u2195", "&UpEquilibrium;": "\u296E", "&UpTee;": "\u22A5", "&UpTeeArrow;": "\u21A5", "&Uparrow;": "\u21D1", "&Updownarrow;": "\u21D5", "&UpperLeftArrow;": "\u2196", "&UpperRightArrow;": "\u2197", "&Upsi;": "\u03D2", "&Upsilon;": "\u03A5", "&Uring;": "\u016E", "&Uscr;": "\u{1D4B0}", "&Utilde;": "\u0168", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&VDash;": "\u22AB", "&Vbar;": "\u2AEB", "&Vcy;": "\u0412", "&Vdash;": "\u22A9", "&Vdashl;": "\u2AE6", "&Vee;": "\u22C1", "&Verbar;": "\u2016", "&Vert;": "\u2016", "&VerticalBar;": "\u2223", "&VerticalLine;": "|", "&VerticalSeparator;": "\u2758", "&VerticalTilde;": "\u2240", "&VeryThinSpace;": "\u200A", "&Vfr;": "\u{1D519}", "&Vopf;": "\u{1D54D}", "&Vscr;": "\u{1D4B1}", "&Vvdash;": "\u22AA", "&Wcirc;": "\u0174", "&Wedge;": "\u22C0", "&Wfr;": "\u{1D51A}", "&Wopf;": "\u{1D54E}", "&Wscr;": "\u{1D4B2}", "&Xfr;": "\u{1D51B}", "&Xi;": "\u039E", "&Xopf;": "\u{1D54F}", "&Xscr;": "\u{1D4B3}", "&YAcy;": "\u042F", "&YIcy;": "\u0407", "&YUcy;": "\u042E", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&Ycirc;": "\u0176", "&Ycy;": "\u042B", "&Yfr;": "\u{1D51C}", "&Yopf;": "\u{1D550}", "&Yscr;": "\u{1D4B4}", "&Yuml;": "\u0178", "&ZHcy;": "\u0416", "&Zacute;": "\u0179", "&Zcaron;": "\u017D", "&Zcy;": "\u0417", "&Zdot;": "\u017B", "&ZeroWidthSpace;": "\u200B", "&Zeta;": "\u0396", "&Zfr;": "\u2128", "&Zopf;": "\u2124", "&Zscr;": "\u{1D4B5}", "&aacute": "\xE1", "&aacute;": "\xE1", "&abreve;": "\u0103", "&ac;": "\u223E", "&acE;": "\u223E\u0333", "&acd;": "\u223F", "&acirc": "\xE2", "&acirc;": "\xE2", "&acute": "\xB4", "&acute;": "\xB4", "&acy;": "\u0430", "&aelig": "\xE6", "&aelig;": "\xE6", "&af;": "\u2061", "&afr;": "\u{1D51E}", "&agrave": "\xE0", "&agrave;": "\xE0", "&alefsym;": "\u2135", "&aleph;": "\u2135", "&alpha;": "\u03B1", "&amacr;": "\u0101", "&amalg;": "\u2A3F", "&amp": "&", "&amp;": "&", "&and;": "\u2227", "&andand;": "\u2A55", "&andd;": "\u2A5C", "&andslope;": "\u2A58", "&andv;": "\u2A5A", "&ang;": "\u2220", "&ange;": "\u29A4", "&angle;": "\u2220", "&angmsd;": "\u2221", "&angmsdaa;": "\u29A8", "&angmsdab;": "\u29A9", "&angmsdac;": "\u29AA", "&angmsdad;": "\u29AB", "&angmsdae;": "\u29AC", "&angmsdaf;": "\u29AD", "&angmsdag;": "\u29AE", "&angmsdah;": "\u29AF", "&angrt;": "\u221F", "&angrtvb;": "\u22BE", "&angrtvbd;": "\u299D", "&angsph;": "\u2222", "&angst;": "\xC5", "&angzarr;": "\u237C", "&aogon;": "\u0105", "&aopf;": "\u{1D552}", "&ap;": "\u2248", "&apE;": "\u2A70", "&apacir;": "\u2A6F", "&ape;": "\u224A", "&apid;": "\u224B", "&apos;": "'", "&approx;": "\u2248", "&approxeq;": "\u224A", "&aring": "\xE5", "&aring;": "\xE5", "&ascr;": "\u{1D4B6}", "&ast;": "*", "&asymp;": "\u2248", "&asympeq;": "\u224D", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&awconint;": "\u2233", "&awint;": "\u2A11", "&bNot;": "\u2AED", "&backcong;": "\u224C", "&backepsilon;": "\u03F6", "&backprime;": "\u2035", "&backsim;": "\u223D", "&backsimeq;": "\u22CD", "&barvee;": "\u22BD", "&barwed;": "\u2305", "&barwedge;": "\u2305", "&bbrk;": "\u23B5", "&bbrktbrk;": "\u23B6", "&bcong;": "\u224C", "&bcy;": "\u0431", "&bdquo;": "\u201E", "&becaus;": "\u2235", "&because;": "\u2235", "&bemptyv;": "\u29B0", "&bepsi;": "\u03F6", "&bernou;": "\u212C", "&beta;": "\u03B2", "&beth;": "\u2136", "&between;": "\u226C", "&bfr;": "\u{1D51F}", "&bigcap;": "\u22C2", "&bigcirc;": "\u25EF", "&bigcup;": "\u22C3", "&bigodot;": "\u2A00", "&bigoplus;": "\u2A01", "&bigotimes;": "\u2A02", "&bigsqcup;": "\u2A06", "&bigstar;": "\u2605", "&bigtriangledown;": "\u25BD", "&bigtriangleup;": "\u25B3", "&biguplus;": "\u2A04", "&bigvee;": "\u22C1", "&bigwedge;": "\u22C0", "&bkarow;": "\u290D", "&blacklozenge;": "\u29EB", "&blacksquare;": "\u25AA", "&blacktriangle;": "\u25B4", "&blacktriangledown;": "\u25BE", "&blacktriangleleft;": "\u25C2", "&blacktriangleright;": "\u25B8", "&blank;": "\u2423", "&blk12;": "\u2592", "&blk14;": "\u2591", "&blk34;": "\u2593", "&block;": "\u2588", "&bne;": "=\u20E5", "&bnequiv;": "\u2261\u20E5", "&bnot;": "\u2310", "&bopf;": "\u{1D553}", "&bot;": "\u22A5", "&bottom;": "\u22A5", "&bowtie;": "\u22C8", "&boxDL;": "\u2557", "&boxDR;": "\u2554", "&boxDl;": "\u2556", "&boxDr;": "\u2553", "&boxH;": "\u2550", "&boxHD;": "\u2566", "&boxHU;": "\u2569", "&boxHd;": "\u2564", "&boxHu;": "\u2567", "&boxUL;": "\u255D", "&boxUR;": "\u255A", "&boxUl;": "\u255C", "&boxUr;": "\u2559", "&boxV;": "\u2551", "&boxVH;": "\u256C", "&boxVL;": "\u2563", "&boxVR;": "\u2560", "&boxVh;": "\u256B", "&boxVl;": "\u2562", "&boxVr;": "\u255F", "&boxbox;": "\u29C9", "&boxdL;": "\u2555", "&boxdR;": "\u2552", "&boxdl;": "\u2510", "&boxdr;": "\u250C", "&boxh;": "\u2500", "&boxhD;": "\u2565", "&boxhU;": "\u2568", "&boxhd;": "\u252C", "&boxhu;": "\u2534", "&boxminus;": "\u229F", "&boxplus;": "\u229E", "&boxtimes;": "\u22A0", "&boxuL;": "\u255B", "&boxuR;": "\u2558", "&boxul;": "\u2518", "&boxur;": "\u2514", "&boxv;": "\u2502", "&boxvH;": "\u256A", "&boxvL;": "\u2561", "&boxvR;": "\u255E", "&boxvh;": "\u253C", "&boxvl;": "\u2524", "&boxvr;": "\u251C", "&bprime;": "\u2035", "&breve;": "\u02D8", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&bscr;": "\u{1D4B7}", "&bsemi;": "\u204F", "&bsim;": "\u223D", "&bsime;": "\u22CD", "&bsol;": "\\", "&bsolb;": "\u29C5", "&bsolhsub;": "\u27C8", "&bull;": "\u2022", "&bullet;": "\u2022", "&bump;": "\u224E", "&bumpE;": "\u2AAE", "&bumpe;": "\u224F", "&bumpeq;": "\u224F", "&cacute;": "\u0107", "&cap;": "\u2229", "&capand;": "\u2A44", "&capbrcup;": "\u2A49", "&capcap;": "\u2A4B", "&capcup;": "\u2A47", "&capdot;": "\u2A40", "&caps;": "\u2229\uFE00", "&caret;": "\u2041", "&caron;": "\u02C7", "&ccaps;": "\u2A4D", "&ccaron;": "\u010D", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&ccirc;": "\u0109", "&ccups;": "\u2A4C", "&ccupssm;": "\u2A50", "&cdot;": "\u010B", "&cedil": "\xB8", "&cedil;": "\xB8", "&cemptyv;": "\u29B2", "&cent": "\xA2", "&cent;": "\xA2", "&centerdot;": "\xB7", "&cfr;": "\u{1D520}", "&chcy;": "\u0447", "&check;": "\u2713", "&checkmark;": "\u2713", "&chi;": "\u03C7", "&cir;": "\u25CB", "&cirE;": "\u29C3", "&circ;": "\u02C6", "&circeq;": "\u2257", "&circlearrowleft;": "\u21BA", "&circlearrowright;": "\u21BB", "&circledR;": "\xAE", "&circledS;": "\u24C8", "&circledast;": "\u229B", "&circledcirc;": "\u229A", "&circleddash;": "\u229D", "&cire;": "\u2257", "&cirfnint;": "\u2A10", "&cirmid;": "\u2AEF", "&cirscir;": "\u29C2", "&clubs;": "\u2663", "&clubsuit;": "\u2663", "&colon;": ":", "&colone;": "\u2254", "&coloneq;": "\u2254", "&comma;": ",", "&commat;": "@", "&comp;": "\u2201", "&compfn;": "\u2218", "&complement;": "\u2201", "&complexes;": "\u2102", "&cong;": "\u2245", "&congdot;": "\u2A6D", "&conint;": "\u222E", "&copf;": "\u{1D554}", "&coprod;": "\u2210", "&copy": "\xA9", "&copy;": "\xA9", "&copysr;": "\u2117", "&crarr;": "\u21B5", "&cross;": "\u2717", "&cscr;": "\u{1D4B8}", "&csub;": "\u2ACF", "&csube;": "\u2AD1", "&csup;": "\u2AD0", "&csupe;": "\u2AD2", "&ctdot;": "\u22EF", "&cudarrl;": "\u2938", "&cudarrr;": "\u2935", "&cuepr;": "\u22DE", "&cuesc;": "\u22DF", "&cularr;": "\u21B6", "&cularrp;": "\u293D", "&cup;": "\u222A", "&cupbrcap;": "\u2A48", "&cupcap;": "\u2A46", "&cupcup;": "\u2A4A", "&cupdot;": "\u228D", "&cupor;": "\u2A45", "&cups;": "\u222A\uFE00", "&curarr;": "\u21B7", "&curarrm;": "\u293C", "&curlyeqprec;": "\u22DE", "&curlyeqsucc;": "\u22DF", "&curlyvee;": "\u22CE", "&curlywedge;": "\u22CF", "&curren": "\xA4", "&curren;": "\xA4", "&curvearrowleft;": "\u21B6", "&curvearrowright;": "\u21B7", "&cuvee;": "\u22CE", "&cuwed;": "\u22CF", "&cwconint;": "\u2232", "&cwint;": "\u2231", "&cylcty;": "\u232D", "&dArr;": "\u21D3", "&dHar;": "\u2965", "&dagger;": "\u2020", "&daleth;": "\u2138", "&darr;": "\u2193", "&dash;": "\u2010", "&dashv;": "\u22A3", "&dbkarow;": "\u290F", "&dblac;": "\u02DD", "&dcaron;": "\u010F", "&dcy;": "\u0434", "&dd;": "\u2146", "&ddagger;": "\u2021", "&ddarr;": "\u21CA", "&ddotseq;": "\u2A77", "&deg": "\xB0", "&deg;": "\xB0", "&delta;": "\u03B4", "&demptyv;": "\u29B1", "&dfisht;": "\u297F", "&dfr;": "\u{1D521}", "&dharl;": "\u21C3", "&dharr;": "\u21C2", "&diam;": "\u22C4", "&diamond;": "\u22C4", "&diamondsuit;": "\u2666", "&diams;": "\u2666", "&die;": "\xA8", "&digamma;": "\u03DD", "&disin;": "\u22F2", "&div;": "\xF7", "&divide": "\xF7", "&divide;": "\xF7", "&divideontimes;": "\u22C7", "&divonx;": "\u22C7", "&djcy;": "\u0452", "&dlcorn;": "\u231E", "&dlcrop;": "\u230D", "&dollar;": "$", "&dopf;": "\u{1D555}", "&dot;": "\u02D9", "&doteq;": "\u2250", "&doteqdot;": "\u2251", "&dotminus;": "\u2238", "&dotplus;": "\u2214", "&dotsquare;": "\u22A1", "&doublebarwedge;": "\u2306", "&downarrow;": "\u2193", "&downdownarrows;": "\u21CA", "&downharpoonleft;": "\u21C3", "&downharpoonright;": "\u21C2", "&drbkarow;": "\u2910", "&drcorn;": "\u231F", "&drcrop;": "\u230C", "&dscr;": "\u{1D4B9}", "&dscy;": "\u0455", "&dsol;": "\u29F6", "&dstrok;": "\u0111", "&dtdot;": "\u22F1", "&dtri;": "\u25BF", "&dtrif;": "\u25BE", "&duarr;": "\u21F5", "&duhar;": "\u296F", "&dwangle;": "\u29A6", "&dzcy;": "\u045F", "&dzigrarr;": "\u27FF", "&eDDot;": "\u2A77", "&eDot;": "\u2251", "&eacute": "\xE9", "&eacute;": "\xE9", "&easter;": "\u2A6E", "&ecaron;": "\u011B", "&ecir;": "\u2256", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&ecolon;": "\u2255", "&ecy;": "\u044D", "&edot;": "\u0117", "&ee;": "\u2147", "&efDot;": "\u2252", "&efr;": "\u{1D522}", "&eg;": "\u2A9A", "&egrave": "\xE8", "&egrave;": "\xE8", "&egs;": "\u2A96", "&egsdot;": "\u2A98", "&el;": "\u2A99", "&elinters;": "\u23E7", "&ell;": "\u2113", "&els;": "\u2A95", "&elsdot;": "\u2A97", "&emacr;": "\u0113", "&empty;": "\u2205", "&emptyset;": "\u2205", "&emptyv;": "\u2205", "&emsp13;": "\u2004", "&emsp14;": "\u2005", "&emsp;": "\u2003", "&eng;": "\u014B", "&ensp;": "\u2002", "&eogon;": "\u0119", "&eopf;": "\u{1D556}", "&epar;": "\u22D5", "&eparsl;": "\u29E3", "&eplus;": "\u2A71", "&epsi;": "\u03B5", "&epsilon;": "\u03B5", "&epsiv;": "\u03F5", "&eqcirc;": "\u2256", "&eqcolon;": "\u2255", "&eqsim;": "\u2242", "&eqslantgtr;": "\u2A96", "&eqslantless;": "\u2A95", "&equals;": "=", "&equest;": "\u225F", "&equiv;": "\u2261", "&equivDD;": "\u2A78", "&eqvparsl;": "\u29E5", "&erDot;": "\u2253", "&erarr;": "\u2971", "&escr;": "\u212F", "&esdot;": "\u2250", "&esim;": "\u2242", "&eta;": "\u03B7", "&eth": "\xF0", "&eth;": "\xF0", "&euml": "\xEB", "&euml;": "\xEB", "&euro;": "\u20AC", "&excl;": "!", "&exist;": "\u2203", "&expectation;": "\u2130", "&exponentiale;": "\u2147", "&fallingdotseq;": "\u2252", "&fcy;": "\u0444", "&female;": "\u2640", "&ffilig;": "\uFB03", "&fflig;": "\uFB00", "&ffllig;": "\uFB04", "&ffr;": "\u{1D523}", "&filig;": "\uFB01", "&fjlig;": "fj", "&flat;": "\u266D", "&fllig;": "\uFB02", "&fltns;": "\u25B1", "&fnof;": "\u0192", "&fopf;": "\u{1D557}", "&forall;": "\u2200", "&fork;": "\u22D4", "&forkv;": "\u2AD9", "&fpartint;": "\u2A0D", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac13;": "\u2153", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac15;": "\u2155", "&frac16;": "\u2159", "&frac18;": "\u215B", "&frac23;": "\u2154", "&frac25;": "\u2156", "&frac34": "\xBE", "&frac34;": "\xBE", "&frac35;": "\u2157", "&frac38;": "\u215C", "&frac45;": "\u2158", "&frac56;": "\u215A", "&frac58;": "\u215D", "&frac78;": "\u215E", "&frasl;": "\u2044", "&frown;": "\u2322", "&fscr;": "\u{1D4BB}", "&gE;": "\u2267", "&gEl;": "\u2A8C", "&gacute;": "\u01F5", "&gamma;": "\u03B3", "&gammad;": "\u03DD", "&gap;": "\u2A86", "&gbreve;": "\u011F", "&gcirc;": "\u011D", "&gcy;": "\u0433", "&gdot;": "\u0121", "&ge;": "\u2265", "&gel;": "\u22DB", "&geq;": "\u2265", "&geqq;": "\u2267", "&geqslant;": "\u2A7E", "&ges;": "\u2A7E", "&gescc;": "\u2AA9", "&gesdot;": "\u2A80", "&gesdoto;": "\u2A82", "&gesdotol;": "\u2A84", "&gesl;": "\u22DB\uFE00", "&gesles;": "\u2A94", "&gfr;": "\u{1D524}", "&gg;": "\u226B", "&ggg;": "\u22D9", "&gimel;": "\u2137", "&gjcy;": "\u0453", "&gl;": "\u2277", "&glE;": "\u2A92", "&gla;": "\u2AA5", "&glj;": "\u2AA4", "&gnE;": "\u2269", "&gnap;": "\u2A8A", "&gnapprox;": "\u2A8A", "&gne;": "\u2A88", "&gneq;": "\u2A88", "&gneqq;": "\u2269", "&gnsim;": "\u22E7", "&gopf;": "\u{1D558}", "&grave;": "`", "&gscr;": "\u210A", "&gsim;": "\u2273", "&gsime;": "\u2A8E", "&gsiml;": "\u2A90", "&gt": ">", "&gt;": ">", "&gtcc;": "\u2AA7", "&gtcir;": "\u2A7A", "&gtdot;": "\u22D7", "&gtlPar;": "\u2995", "&gtquest;": "\u2A7C", "&gtrapprox;": "\u2A86", "&gtrarr;": "\u2978", "&gtrdot;": "\u22D7", "&gtreqless;": "\u22DB", "&gtreqqless;": "\u2A8C", "&gtrless;": "\u2277", "&gtrsim;": "\u2273", "&gvertneqq;": "\u2269\uFE00", "&gvnE;": "\u2269\uFE00", "&hArr;": "\u21D4", "&hairsp;": "\u200A", "&half;": "\xBD", "&hamilt;": "\u210B", "&hardcy;": "\u044A", "&harr;": "\u2194", "&harrcir;": "\u2948", "&harrw;": "\u21AD", "&hbar;": "\u210F", "&hcirc;": "\u0125", "&hearts;": "\u2665", "&heartsuit;": "\u2665", "&hellip;": "\u2026", "&hercon;": "\u22B9", "&hfr;": "\u{1D525}", "&hksearow;": "\u2925", "&hkswarow;": "\u2926", "&hoarr;": "\u21FF", "&homtht;": "\u223B", "&hookleftarrow;": "\u21A9", "&hookrightarrow;": "\u21AA", "&hopf;": "\u{1D559}", "&horbar;": "\u2015", "&hscr;": "\u{1D4BD}", "&hslash;": "\u210F", "&hstrok;": "\u0127", "&hybull;": "\u2043", "&hyphen;": "\u2010", "&iacute": "\xED", "&iacute;": "\xED", "&ic;": "\u2063", "&icirc": "\xEE", "&icirc;": "\xEE", "&icy;": "\u0438", "&iecy;": "\u0435", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&iff;": "\u21D4", "&ifr;": "\u{1D526}", "&igrave": "\xEC", "&igrave;": "\xEC", "&ii;": "\u2148", "&iiiint;": "\u2A0C", "&iiint;": "\u222D", "&iinfin;": "\u29DC", "&iiota;": "\u2129", "&ijlig;": "\u0133", "&imacr;": "\u012B", "&image;": "\u2111", "&imagline;": "\u2110", "&imagpart;": "\u2111", "&imath;": "\u0131", "&imof;": "\u22B7", "&imped;": "\u01B5", "&in;": "\u2208", "&incare;": "\u2105", "&infin;": "\u221E", "&infintie;": "\u29DD", "&inodot;": "\u0131", "&int;": "\u222B", "&intcal;": "\u22BA", "&integers;": "\u2124", "&intercal;": "\u22BA", "&intlarhk;": "\u2A17", "&intprod;": "\u2A3C", "&iocy;": "\u0451", "&iogon;": "\u012F", "&iopf;": "\u{1D55A}", "&iota;": "\u03B9", "&iprod;": "\u2A3C", "&iquest": "\xBF", "&iquest;": "\xBF", "&iscr;": "\u{1D4BE}", "&isin;": "\u2208", "&isinE;": "\u22F9", "&isindot;": "\u22F5", "&isins;": "\u22F4", "&isinsv;": "\u22F3", "&isinv;": "\u2208", "&it;": "\u2062", "&itilde;": "\u0129", "&iukcy;": "\u0456", "&iuml": "\xEF", "&iuml;": "\xEF", "&jcirc;": "\u0135", "&jcy;": "\u0439", "&jfr;": "\u{1D527}", "&jmath;": "\u0237", "&jopf;": "\u{1D55B}", "&jscr;": "\u{1D4BF}", "&jsercy;": "\u0458", "&jukcy;": "\u0454", "&kappa;": "\u03BA", "&kappav;": "\u03F0", "&kcedil;": "\u0137", "&kcy;": "\u043A", "&kfr;": "\u{1D528}", "&kgreen;": "\u0138", "&khcy;": "\u0445", "&kjcy;": "\u045C", "&kopf;": "\u{1D55C}", "&kscr;": "\u{1D4C0}", "&lAarr;": "\u21DA", "&lArr;": "\u21D0", "&lAtail;": "\u291B", "&lBarr;": "\u290E", "&lE;": "\u2266", "&lEg;": "\u2A8B", "&lHar;": "\u2962", "&lacute;": "\u013A", "&laemptyv;": "\u29B4", "&lagran;": "\u2112", "&lambda;": "\u03BB", "&lang;": "\u27E8", "&langd;": "\u2991", "&langle;": "\u27E8", "&lap;": "\u2A85", "&laquo": "\xAB", "&laquo;": "\xAB", "&larr;": "\u2190", "&larrb;": "\u21E4", "&larrbfs;": "\u291F", "&larrfs;": "\u291D", "&larrhk;": "\u21A9", "&larrlp;": "\u21AB", "&larrpl;": "\u2939", "&larrsim;": "\u2973", "&larrtl;": "\u21A2", "&lat;": "\u2AAB", "&latail;": "\u2919", "&late;": "\u2AAD", "&lates;": "\u2AAD\uFE00", "&lbarr;": "\u290C", "&lbbrk;": "\u2772", "&lbrace;": "{", "&lbrack;": "[", "&lbrke;": "\u298B", "&lbrksld;": "\u298F", "&lbrkslu;": "\u298D", "&lcaron;": "\u013E", "&lcedil;": "\u013C", "&lceil;": "\u2308", "&lcub;": "{", "&lcy;": "\u043B", "&ldca;": "\u2936", "&ldquo;": "\u201C", "&ldquor;": "\u201E", "&ldrdhar;": "\u2967", "&ldrushar;": "\u294B", "&ldsh;": "\u21B2", "&le;": "\u2264", "&leftarrow;": "\u2190", "&leftarrowtail;": "\u21A2", "&leftharpoondown;": "\u21BD", "&leftharpoonup;": "\u21BC", "&leftleftarrows;": "\u21C7", "&leftrightarrow;": "\u2194", "&leftrightarrows;": "\u21C6", "&leftrightharpoons;": "\u21CB", "&leftrightsquigarrow;": "\u21AD", "&leftthreetimes;": "\u22CB", "&leg;": "\u22DA", "&leq;": "\u2264", "&leqq;": "\u2266", "&leqslant;": "\u2A7D", "&les;": "\u2A7D", "&lescc;": "\u2AA8", "&lesdot;": "\u2A7F", "&lesdoto;": "\u2A81", "&lesdotor;": "\u2A83", "&lesg;": "\u22DA\uFE00", "&lesges;": "\u2A93", "&lessapprox;": "\u2A85", "&lessdot;": "\u22D6", "&lesseqgtr;": "\u22DA", "&lesseqqgtr;": "\u2A8B", "&lessgtr;": "\u2276", "&lesssim;": "\u2272", "&lfisht;": "\u297C", "&lfloor;": "\u230A", "&lfr;": "\u{1D529}", "&lg;": "\u2276", "&lgE;": "\u2A91", "&lhard;": "\u21BD", "&lharu;": "\u21BC", "&lharul;": "\u296A", "&lhblk;": "\u2584", "&ljcy;": "\u0459", "&ll;": "\u226A", "&llarr;": "\u21C7", "&llcorner;": "\u231E", "&llhard;": "\u296B", "&lltri;": "\u25FA", "&lmidot;": "\u0140", "&lmoust;": "\u23B0", "&lmoustache;": "\u23B0", "&lnE;": "\u2268", "&lnap;": "\u2A89", "&lnapprox;": "\u2A89", "&lne;": "\u2A87", "&lneq;": "\u2A87", "&lneqq;": "\u2268", "&lnsim;": "\u22E6", "&loang;": "\u27EC", "&loarr;": "\u21FD", "&lobrk;": "\u27E6", "&longleftarrow;": "\u27F5", "&longleftrightarrow;": "\u27F7", "&longmapsto;": "\u27FC", "&longrightarrow;": "\u27F6", "&looparrowleft;": "\u21AB", "&looparrowright;": "\u21AC", "&lopar;": "\u2985", "&lopf;": "\u{1D55D}", "&loplus;": "\u2A2D", "&lotimes;": "\u2A34", "&lowast;": "\u2217", "&lowbar;": "_", "&loz;": "\u25CA", "&lozenge;": "\u25CA", "&lozf;": "\u29EB", "&lpar;": "(", "&lparlt;": "\u2993", "&lrarr;": "\u21C6", "&lrcorner;": "\u231F", "&lrhar;": "\u21CB", "&lrhard;": "\u296D", "&lrm;": "\u200E", "&lrtri;": "\u22BF", "&lsaquo;": "\u2039", "&lscr;": "\u{1D4C1}", "&lsh;": "\u21B0", "&lsim;": "\u2272", "&lsime;": "\u2A8D", "&lsimg;": "\u2A8F", "&lsqb;": "[", "&lsquo;": "\u2018", "&lsquor;": "\u201A", "&lstrok;": "\u0142", "&lt": "<", "&lt;": "<", "&ltcc;": "\u2AA6", "&ltcir;": "\u2A79", "&ltdot;": "\u22D6", "&lthree;": "\u22CB", "&ltimes;": "\u22C9", "&ltlarr;": "\u2976", "&ltquest;": "\u2A7B", "&ltrPar;": "\u2996", "&ltri;": "\u25C3", "&ltrie;": "\u22B4", "&ltrif;": "\u25C2", "&lurdshar;": "\u294A", "&luruhar;": "\u2966", "&lvertneqq;": "\u2268\uFE00", "&lvnE;": "\u2268\uFE00", "&mDDot;": "\u223A", "&macr": "\xAF", "&macr;": "\xAF", "&male;": "\u2642", "&malt;": "\u2720", "&maltese;": "\u2720", "&map;": "\u21A6", "&mapsto;": "\u21A6", "&mapstodown;": "\u21A7", "&mapstoleft;": "\u21A4", "&mapstoup;": "\u21A5", "&marker;": "\u25AE", "&mcomma;": "\u2A29", "&mcy;": "\u043C", "&mdash;": "\u2014", "&measuredangle;": "\u2221", "&mfr;": "\u{1D52A}", "&mho;": "\u2127", "&micro": "\xB5", "&micro;": "\xB5", "&mid;": "\u2223", "&midast;": "*", "&midcir;": "\u2AF0", "&middot": "\xB7", "&middot;": "\xB7", "&minus;": "\u2212", "&minusb;": "\u229F", "&minusd;": "\u2238", "&minusdu;": "\u2A2A", "&mlcp;": "\u2ADB", "&mldr;": "\u2026", "&mnplus;": "\u2213", "&models;": "\u22A7", "&mopf;": "\u{1D55E}", "&mp;": "\u2213", "&mscr;": "\u{1D4C2}", "&mstpos;": "\u223E", "&mu;": "\u03BC", "&multimap;": "\u22B8", "&mumap;": "\u22B8", "&nGg;": "\u22D9\u0338", "&nGt;": "\u226B\u20D2", "&nGtv;": "\u226B\u0338", "&nLeftarrow;": "\u21CD", "&nLeftrightarrow;": "\u21CE", "&nLl;": "\u22D8\u0338", "&nLt;": "\u226A\u20D2", "&nLtv;": "\u226A\u0338", "&nRightarrow;": "\u21CF", "&nVDash;": "\u22AF", "&nVdash;": "\u22AE", "&nabla;": "\u2207", "&nacute;": "\u0144", "&nang;": "\u2220\u20D2", "&nap;": "\u2249", "&napE;": "\u2A70\u0338", "&napid;": "\u224B\u0338", "&napos;": "\u0149", "&napprox;": "\u2249", "&natur;": "\u266E", "&natural;": "\u266E", "&naturals;": "\u2115", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&nbump;": "\u224E\u0338", "&nbumpe;": "\u224F\u0338", "&ncap;": "\u2A43", "&ncaron;": "\u0148", "&ncedil;": "\u0146", "&ncong;": "\u2247", "&ncongdot;": "\u2A6D\u0338", "&ncup;": "\u2A42", "&ncy;": "\u043D", "&ndash;": "\u2013", "&ne;": "\u2260", "&neArr;": "\u21D7", "&nearhk;": "\u2924", "&nearr;": "\u2197", "&nearrow;": "\u2197", "&nedot;": "\u2250\u0338", "&nequiv;": "\u2262", "&nesear;": "\u2928", "&nesim;": "\u2242\u0338", "&nexist;": "\u2204", "&nexists;": "\u2204", "&nfr;": "\u{1D52B}", "&ngE;": "\u2267\u0338", "&nge;": "\u2271", "&ngeq;": "\u2271", "&ngeqq;": "\u2267\u0338", "&ngeqslant;": "\u2A7E\u0338", "&nges;": "\u2A7E\u0338", "&ngsim;": "\u2275", "&ngt;": "\u226F", "&ngtr;": "\u226F", "&nhArr;": "\u21CE", "&nharr;": "\u21AE", "&nhpar;": "\u2AF2", "&ni;": "\u220B", "&nis;": "\u22FC", "&nisd;": "\u22FA", "&niv;": "\u220B", "&njcy;": "\u045A", "&nlArr;": "\u21CD", "&nlE;": "\u2266\u0338", "&nlarr;": "\u219A", "&nldr;": "\u2025", "&nle;": "\u2270", "&nleftarrow;": "\u219A", "&nleftrightarrow;": "\u21AE", "&nleq;": "\u2270", "&nleqq;": "\u2266\u0338", "&nleqslant;": "\u2A7D\u0338", "&nles;": "\u2A7D\u0338", "&nless;": "\u226E", "&nlsim;": "\u2274", "&nlt;": "\u226E", "&nltri;": "\u22EA", "&nltrie;": "\u22EC", "&nmid;": "\u2224", "&nopf;": "\u{1D55F}", "&not": "\xAC", "&not;": "\xAC", "&notin;": "\u2209", "&notinE;": "\u22F9\u0338", "&notindot;": "\u22F5\u0338", "&notinva;": "\u2209", "&notinvb;": "\u22F7", "&notinvc;": "\u22F6", "&notni;": "\u220C", "&notniva;": "\u220C", "&notnivb;": "\u22FE", "&notnivc;": "\u22FD", "&npar;": "\u2226", "&nparallel;": "\u2226", "&nparsl;": "\u2AFD\u20E5", "&npart;": "\u2202\u0338", "&npolint;": "\u2A14", "&npr;": "\u2280", "&nprcue;": "\u22E0", "&npre;": "\u2AAF\u0338", "&nprec;": "\u2280", "&npreceq;": "\u2AAF\u0338", "&nrArr;": "\u21CF", "&nrarr;": "\u219B", "&nrarrc;": "\u2933\u0338", "&nrarrw;": "\u219D\u0338", "&nrightarrow;": "\u219B", "&nrtri;": "\u22EB", "&nrtrie;": "\u22ED", "&nsc;": "\u2281", "&nsccue;": "\u22E1", "&nsce;": "\u2AB0\u0338", "&nscr;": "\u{1D4C3}", "&nshortmid;": "\u2224", "&nshortparallel;": "\u2226", "&nsim;": "\u2241", "&nsime;": "\u2244", "&nsimeq;": "\u2244", "&nsmid;": "\u2224", "&nspar;": "\u2226", "&nsqsube;": "\u22E2", "&nsqsupe;": "\u22E3", "&nsub;": "\u2284", "&nsubE;": "\u2AC5\u0338", "&nsube;": "\u2288", "&nsubset;": "\u2282\u20D2", "&nsubseteq;": "\u2288", "&nsubseteqq;": "\u2AC5\u0338", "&nsucc;": "\u2281", "&nsucceq;": "\u2AB0\u0338", "&nsup;": "\u2285", "&nsupE;": "\u2AC6\u0338", "&nsupe;": "\u2289", "&nsupset;": "\u2283\u20D2", "&nsupseteq;": "\u2289", "&nsupseteqq;": "\u2AC6\u0338", "&ntgl;": "\u2279", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ntlg;": "\u2278", "&ntriangleleft;": "\u22EA", "&ntrianglelefteq;": "\u22EC", "&ntriangleright;": "\u22EB", "&ntrianglerighteq;": "\u22ED", "&nu;": "\u03BD", "&num;": "#", "&numero;": "\u2116", "&numsp;": "\u2007", "&nvDash;": "\u22AD", "&nvHarr;": "\u2904", "&nvap;": "\u224D\u20D2", "&nvdash;": "\u22AC", "&nvge;": "\u2265\u20D2", "&nvgt;": ">\u20D2", "&nvinfin;": "\u29DE", "&nvlArr;": "\u2902", "&nvle;": "\u2264\u20D2", "&nvlt;": "<\u20D2", "&nvltrie;": "\u22B4\u20D2", "&nvrArr;": "\u2903", "&nvrtrie;": "\u22B5\u20D2", "&nvsim;": "\u223C\u20D2", "&nwArr;": "\u21D6", "&nwarhk;": "\u2923", "&nwarr;": "\u2196", "&nwarrow;": "\u2196", "&nwnear;": "\u2927", "&oS;": "\u24C8", "&oacute": "\xF3", "&oacute;": "\xF3", "&oast;": "\u229B", "&ocir;": "\u229A", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&ocy;": "\u043E", "&odash;": "\u229D", "&odblac;": "\u0151", "&odiv;": "\u2A38", "&odot;": "\u2299", "&odsold;": "\u29BC", "&oelig;": "\u0153", "&ofcir;": "\u29BF", "&ofr;": "\u{1D52C}", "&ogon;": "\u02DB", "&ograve": "\xF2", "&ograve;": "\xF2", "&ogt;": "\u29C1", "&ohbar;": "\u29B5", "&ohm;": "\u03A9", "&oint;": "\u222E", "&olarr;": "\u21BA", "&olcir;": "\u29BE", "&olcross;": "\u29BB", "&oline;": "\u203E", "&olt;": "\u29C0", "&omacr;": "\u014D", "&omega;": "\u03C9", "&omicron;": "\u03BF", "&omid;": "\u29B6", "&ominus;": "\u2296", "&oopf;": "\u{1D560}", "&opar;": "\u29B7", "&operp;": "\u29B9", "&oplus;": "\u2295", "&or;": "\u2228", "&orarr;": "\u21BB", "&ord;": "\u2A5D", "&order;": "\u2134", "&orderof;": "\u2134", "&ordf": "\xAA", "&ordf;": "\xAA", "&ordm": "\xBA", "&ordm;": "\xBA", "&origof;": "\u22B6", "&oror;": "\u2A56", "&orslope;": "\u2A57", "&orv;": "\u2A5B", "&oscr;": "\u2134", "&oslash": "\xF8", "&oslash;": "\xF8", "&osol;": "\u2298", "&otilde": "\xF5", "&otilde;": "\xF5", "&otimes;": "\u2297", "&otimesas;": "\u2A36", "&ouml": "\xF6", "&ouml;": "\xF6", "&ovbar;": "\u233D", "&par;": "\u2225", "&para": "\xB6", "&para;": "\xB6", "&parallel;": "\u2225", "&parsim;": "\u2AF3", "&parsl;": "\u2AFD", "&part;": "\u2202", "&pcy;": "\u043F", "&percnt;": "%", "&period;": ".", "&permil;": "\u2030", "&perp;": "\u22A5", "&pertenk;": "\u2031", "&pfr;": "\u{1D52D}", "&phi;": "\u03C6", "&phiv;": "\u03D5", "&phmmat;": "\u2133", "&phone;": "\u260E", "&pi;": "\u03C0", "&pitchfork;": "\u22D4", "&piv;": "\u03D6", "&planck;": "\u210F", "&planckh;": "\u210E", "&plankv;": "\u210F", "&plus;": "+", "&plusacir;": "\u2A23", "&plusb;": "\u229E", "&pluscir;": "\u2A22", "&plusdo;": "\u2214", "&plusdu;": "\u2A25", "&pluse;": "\u2A72", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&plussim;": "\u2A26", "&plustwo;": "\u2A27", "&pm;": "\xB1", "&pointint;": "\u2A15", "&popf;": "\u{1D561}", "&pound": "\xA3", "&pound;": "\xA3", "&pr;": "\u227A", "&prE;": "\u2AB3", "&prap;": "\u2AB7", "&prcue;": "\u227C", "&pre;": "\u2AAF", "&prec;": "\u227A", "&precapprox;": "\u2AB7", "&preccurlyeq;": "\u227C", "&preceq;": "\u2AAF", "&precnapprox;": "\u2AB9", "&precneqq;": "\u2AB5", "&precnsim;": "\u22E8", "&precsim;": "\u227E", "&prime;": "\u2032", "&primes;": "\u2119", "&prnE;": "\u2AB5", "&prnap;": "\u2AB9", "&prnsim;": "\u22E8", "&prod;": "\u220F", "&profalar;": "\u232E", "&profline;": "\u2312", "&profsurf;": "\u2313", "&prop;": "\u221D", "&propto;": "\u221D", "&prsim;": "\u227E", "&prurel;": "\u22B0", "&pscr;": "\u{1D4C5}", "&psi;": "\u03C8", "&puncsp;": "\u2008", "&qfr;": "\u{1D52E}", "&qint;": "\u2A0C", "&qopf;": "\u{1D562}", "&qprime;": "\u2057", "&qscr;": "\u{1D4C6}", "&quaternions;": "\u210D", "&quatint;": "\u2A16", "&quest;": "?", "&questeq;": "\u225F", "&quot": '"', "&quot;": '"', "&rAarr;": "\u21DB", "&rArr;": "\u21D2", "&rAtail;": "\u291C", "&rBarr;": "\u290F", "&rHar;": "\u2964", "&race;": "\u223D\u0331", "&racute;": "\u0155", "&radic;": "\u221A", "&raemptyv;": "\u29B3", "&rang;": "\u27E9", "&rangd;": "\u2992", "&range;": "\u29A5", "&rangle;": "\u27E9", "&raquo": "\xBB", "&raquo;": "\xBB", "&rarr;": "\u2192", "&rarrap;": "\u2975", "&rarrb;": "\u21E5", "&rarrbfs;": "\u2920", "&rarrc;": "\u2933", "&rarrfs;": "\u291E", "&rarrhk;": "\u21AA", "&rarrlp;": "\u21AC", "&rarrpl;": "\u2945", "&rarrsim;": "\u2974", "&rarrtl;": "\u21A3", "&rarrw;": "\u219D", "&ratail;": "\u291A", "&ratio;": "\u2236", "&rationals;": "\u211A", "&rbarr;": "\u290D", "&rbbrk;": "\u2773", "&rbrace;": "}", "&rbrack;": "]", "&rbrke;": "\u298C", "&rbrksld;": "\u298E", "&rbrkslu;": "\u2990", "&rcaron;": "\u0159", "&rcedil;": "\u0157", "&rceil;": "\u2309", "&rcub;": "}", "&rcy;": "\u0440", "&rdca;": "\u2937", "&rdldhar;": "\u2969", "&rdquo;": "\u201D", "&rdquor;": "\u201D", "&rdsh;": "\u21B3", "&real;": "\u211C", "&realine;": "\u211B", "&realpart;": "\u211C", "&reals;": "\u211D", "&rect;": "\u25AD", "&reg": "\xAE", "&reg;": "\xAE", "&rfisht;": "\u297D", "&rfloor;": "\u230B", "&rfr;": "\u{1D52F}", "&rhard;": "\u21C1", "&rharu;": "\u21C0", "&rharul;": "\u296C", "&rho;": "\u03C1", "&rhov;": "\u03F1", "&rightarrow;": "\u2192", "&rightarrowtail;": "\u21A3", "&rightharpoondown;": "\u21C1", "&rightharpoonup;": "\u21C0", "&rightleftarrows;": "\u21C4", "&rightleftharpoons;": "\u21CC", "&rightrightarrows;": "\u21C9", "&rightsquigarrow;": "\u219D", "&rightthreetimes;": "\u22CC", "&ring;": "\u02DA", "&risingdotseq;": "\u2253", "&rlarr;": "\u21C4", "&rlhar;": "\u21CC", "&rlm;": "\u200F", "&rmoust;": "\u23B1", "&rmoustache;": "\u23B1", "&rnmid;": "\u2AEE", "&roang;": "\u27ED", "&roarr;": "\u21FE", "&robrk;": "\u27E7", "&ropar;": "\u2986", "&ropf;": "\u{1D563}", "&roplus;": "\u2A2E", "&rotimes;": "\u2A35", "&rpar;": ")", "&rpargt;": "\u2994", "&rppolint;": "\u2A12", "&rrarr;": "\u21C9", "&rsaquo;": "\u203A", "&rscr;": "\u{1D4C7}", "&rsh;": "\u21B1", "&rsqb;": "]", "&rsquo;": "\u2019", "&rsquor;": "\u2019", "&rthree;": "\u22CC", "&rtimes;": "\u22CA", "&rtri;": "\u25B9", "&rtrie;": "\u22B5", "&rtrif;": "\u25B8", "&rtriltri;": "\u29CE", "&ruluhar;": "\u2968", "&rx;": "\u211E", "&sacute;": "\u015B", "&sbquo;": "\u201A", "&sc;": "\u227B", "&scE;": "\u2AB4", "&scap;": "\u2AB8", "&scaron;": "\u0161", "&sccue;": "\u227D", "&sce;": "\u2AB0", "&scedil;": "\u015F", "&scirc;": "\u015D", "&scnE;": "\u2AB6", "&scnap;": "\u2ABA", "&scnsim;": "\u22E9", "&scpolint;": "\u2A13", "&scsim;": "\u227F", "&scy;": "\u0441", "&sdot;": "\u22C5", "&sdotb;": "\u22A1", "&sdote;": "\u2A66", "&seArr;": "\u21D8", "&searhk;": "\u2925", "&searr;": "\u2198", "&searrow;": "\u2198", "&sect": "\xA7", "&sect;": "\xA7", "&semi;": ";", "&seswar;": "\u2929", "&setminus;": "\u2216", "&setmn;": "\u2216", "&sext;": "\u2736", "&sfr;": "\u{1D530}", "&sfrown;": "\u2322", "&sharp;": "\u266F", "&shchcy;": "\u0449", "&shcy;": "\u0448", "&shortmid;": "\u2223", "&shortparallel;": "\u2225", "&shy": "\xAD", "&shy;": "\xAD", "&sigma;": "\u03C3", "&sigmaf;": "\u03C2", "&sigmav;": "\u03C2", "&sim;": "\u223C", "&simdot;": "\u2A6A", "&sime;": "\u2243", "&simeq;": "\u2243", "&simg;": "\u2A9E", "&simgE;": "\u2AA0", "&siml;": "\u2A9D", "&simlE;": "\u2A9F", "&simne;": "\u2246", "&simplus;": "\u2A24", "&simrarr;": "\u2972", "&slarr;": "\u2190", "&smallsetminus;": "\u2216", "&smashp;": "\u2A33", "&smeparsl;": "\u29E4", "&smid;": "\u2223", "&smile;": "\u2323", "&smt;": "\u2AAA", "&smte;": "\u2AAC", "&smtes;": "\u2AAC\uFE00", "&softcy;": "\u044C", "&sol;": "/", "&solb;": "\u29C4", "&solbar;": "\u233F", "&sopf;": "\u{1D564}", "&spades;": "\u2660", "&spadesuit;": "\u2660", "&spar;": "\u2225", "&sqcap;": "\u2293", "&sqcaps;": "\u2293\uFE00", "&sqcup;": "\u2294", "&sqcups;": "\u2294\uFE00", "&sqsub;": "\u228F", "&sqsube;": "\u2291", "&sqsubset;": "\u228F", "&sqsubseteq;": "\u2291", "&sqsup;": "\u2290", "&sqsupe;": "\u2292", "&sqsupset;": "\u2290", "&sqsupseteq;": "\u2292", "&squ;": "\u25A1", "&square;": "\u25A1", "&squarf;": "\u25AA", "&squf;": "\u25AA", "&srarr;": "\u2192", "&sscr;": "\u{1D4C8}", "&ssetmn;": "\u2216", "&ssmile;": "\u2323", "&sstarf;": "\u22C6", "&star;": "\u2606", "&starf;": "\u2605", "&straightepsilon;": "\u03F5", "&straightphi;": "\u03D5", "&strns;": "\xAF", "&sub;": "\u2282", "&subE;": "\u2AC5", "&subdot;": "\u2ABD", "&sube;": "\u2286", "&subedot;": "\u2AC3", "&submult;": "\u2AC1", "&subnE;": "\u2ACB", "&subne;": "\u228A", "&subplus;": "\u2ABF", "&subrarr;": "\u2979", "&subset;": "\u2282", "&subseteq;": "\u2286", "&subseteqq;": "\u2AC5", "&subsetneq;": "\u228A", "&subsetneqq;": "\u2ACB", "&subsim;": "\u2AC7", "&subsub;": "\u2AD5", "&subsup;": "\u2AD3", "&succ;": "\u227B", "&succapprox;": "\u2AB8", "&succcurlyeq;": "\u227D", "&succeq;": "\u2AB0", "&succnapprox;": "\u2ABA", "&succneqq;": "\u2AB6", "&succnsim;": "\u22E9", "&succsim;": "\u227F", "&sum;": "\u2211", "&sung;": "\u266A", "&sup1": "\xB9", "&sup1;": "\xB9", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&sup;": "\u2283", "&supE;": "\u2AC6", "&supdot;": "\u2ABE", "&supdsub;": "\u2AD8", "&supe;": "\u2287", "&supedot;": "\u2AC4", "&suphsol;": "\u27C9", "&suphsub;": "\u2AD7", "&suplarr;": "\u297B", "&supmult;": "\u2AC2", "&supnE;": "\u2ACC", "&supne;": "\u228B", "&supplus;": "\u2AC0", "&supset;": "\u2283", "&supseteq;": "\u2287", "&supseteqq;": "\u2AC6", "&supsetneq;": "\u228B", "&supsetneqq;": "\u2ACC", "&supsim;": "\u2AC8", "&supsub;": "\u2AD4", "&supsup;": "\u2AD6", "&swArr;": "\u21D9", "&swarhk;": "\u2926", "&swarr;": "\u2199", "&swarrow;": "\u2199", "&swnwar;": "\u292A", "&szlig": "\xDF", "&szlig;": "\xDF", "&target;": "\u2316", "&tau;": "\u03C4", "&tbrk;": "\u23B4", "&tcaron;": "\u0165", "&tcedil;": "\u0163", "&tcy;": "\u0442", "&tdot;": "\u20DB", "&telrec;": "\u2315", "&tfr;": "\u{1D531}", "&there4;": "\u2234", "&therefore;": "\u2234", "&theta;": "\u03B8", "&thetasym;": "\u03D1", "&thetav;": "\u03D1", "&thickapprox;": "\u2248", "&thicksim;": "\u223C", "&thinsp;": "\u2009", "&thkap;": "\u2248", "&thksim;": "\u223C", "&thorn": "\xFE", "&thorn;": "\xFE", "&tilde;": "\u02DC", "&times": "\xD7", "&times;": "\xD7", "&timesb;": "\u22A0", "&timesbar;": "\u2A31", "&timesd;": "\u2A30", "&tint;": "\u222D", "&toea;": "\u2928", "&top;": "\u22A4", "&topbot;": "\u2336", "&topcir;": "\u2AF1", "&topf;": "\u{1D565}", "&topfork;": "\u2ADA", "&tosa;": "\u2929", "&tprime;": "\u2034", "&trade;": "\u2122", "&triangle;": "\u25B5", "&triangledown;": "\u25BF", "&triangleleft;": "\u25C3", "&trianglelefteq;": "\u22B4", "&triangleq;": "\u225C", "&triangleright;": "\u25B9", "&trianglerighteq;": "\u22B5", "&tridot;": "\u25EC", "&trie;": "\u225C", "&triminus;": "\u2A3A", "&triplus;": "\u2A39", "&trisb;": "\u29CD", "&tritime;": "\u2A3B", "&trpezium;": "\u23E2", "&tscr;": "\u{1D4C9}", "&tscy;": "\u0446", "&tshcy;": "\u045B", "&tstrok;": "\u0167", "&twixt;": "\u226C", "&twoheadleftarrow;": "\u219E", "&twoheadrightarrow;": "\u21A0", "&uArr;": "\u21D1", "&uHar;": "\u2963", "&uacute": "\xFA", "&uacute;": "\xFA", "&uarr;": "\u2191", "&ubrcy;": "\u045E", "&ubreve;": "\u016D", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&ucy;": "\u0443", "&udarr;": "\u21C5", "&udblac;": "\u0171", "&udhar;": "\u296E", "&ufisht;": "\u297E", "&ufr;": "\u{1D532}", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uharl;": "\u21BF", "&uharr;": "\u21BE", "&uhblk;": "\u2580", "&ulcorn;": "\u231C", "&ulcorner;": "\u231C", "&ulcrop;": "\u230F", "&ultri;": "\u25F8", "&umacr;": "\u016B", "&uml": "\xA8", "&uml;": "\xA8", "&uogon;": "\u0173", "&uopf;": "\u{1D566}", "&uparrow;": "\u2191", "&updownarrow;": "\u2195", "&upharpoonleft;": "\u21BF", "&upharpoonright;": "\u21BE", "&uplus;": "\u228E", "&upsi;": "\u03C5", "&upsih;": "\u03D2", "&upsilon;": "\u03C5", "&upuparrows;": "\u21C8", "&urcorn;": "\u231D", "&urcorner;": "\u231D", "&urcrop;": "\u230E", "&uring;": "\u016F", "&urtri;": "\u25F9", "&uscr;": "\u{1D4CA}", "&utdot;": "\u22F0", "&utilde;": "\u0169", "&utri;": "\u25B5", "&utrif;": "\u25B4", "&uuarr;": "\u21C8", "&uuml": "\xFC", "&uuml;": "\xFC", "&uwangle;": "\u29A7", "&vArr;": "\u21D5", "&vBar;": "\u2AE8", "&vBarv;": "\u2AE9", "&vDash;": "\u22A8", "&vangrt;": "\u299C", "&varepsilon;": "\u03F5", "&varkappa;": "\u03F0", "&varnothing;": "\u2205", "&varphi;": "\u03D5", "&varpi;": "\u03D6", "&varpropto;": "\u221D", "&varr;": "\u2195", "&varrho;": "\u03F1", "&varsigma;": "\u03C2", "&varsubsetneq;": "\u228A\uFE00", "&varsubsetneqq;": "\u2ACB\uFE00", "&varsupsetneq;": "\u228B\uFE00", "&varsupsetneqq;": "\u2ACC\uFE00", "&vartheta;": "\u03D1", "&vartriangleleft;": "\u22B2", "&vartriangleright;": "\u22B3", "&vcy;": "\u0432", "&vdash;": "\u22A2", "&vee;": "\u2228", "&veebar;": "\u22BB", "&veeeq;": "\u225A", "&vellip;": "\u22EE", "&verbar;": "|", "&vert;": "|", "&vfr;": "\u{1D533}", "&vltri;": "\u22B2", "&vnsub;": "\u2282\u20D2", "&vnsup;": "\u2283\u20D2", "&vopf;": "\u{1D567}", "&vprop;": "\u221D", "&vrtri;": "\u22B3", "&vscr;": "\u{1D4CB}", "&vsubnE;": "\u2ACB\uFE00", "&vsubne;": "\u228A\uFE00", "&vsupnE;": "\u2ACC\uFE00", "&vsupne;": "\u228B\uFE00", "&vzigzag;": "\u299A", "&wcirc;": "\u0175", "&wedbar;": "\u2A5F", "&wedge;": "\u2227", "&wedgeq;": "\u2259", "&weierp;": "\u2118", "&wfr;": "\u{1D534}", "&wopf;": "\u{1D568}", "&wp;": "\u2118", "&wr;": "\u2240", "&wreath;": "\u2240", "&wscr;": "\u{1D4CC}", "&xcap;": "\u22C2", "&xcirc;": "\u25EF", "&xcup;": "\u22C3", "&xdtri;": "\u25BD", "&xfr;": "\u{1D535}", "&xhArr;": "\u27FA", "&xharr;": "\u27F7", "&xi;": "\u03BE", "&xlArr;": "\u27F8", "&xlarr;": "\u27F5", "&xmap;": "\u27FC", "&xnis;": "\u22FB", "&xodot;": "\u2A00", "&xopf;": "\u{1D569}", "&xoplus;": "\u2A01", "&xotime;": "\u2A02", "&xrArr;": "\u27F9", "&xrarr;": "\u27F6", "&xscr;": "\u{1D4CD}", "&xsqcup;": "\u2A06", "&xuplus;": "\u2A04", "&xutri;": "\u25B3", "&xvee;": "\u22C1", "&xwedge;": "\u22C0", "&yacute": "\xFD", "&yacute;": "\xFD", "&yacy;": "\u044F", "&ycirc;": "\u0177", "&ycy;": "\u044B", "&yen": "\xA5", "&yen;": "\xA5", "&yfr;": "\u{1D536}", "&yicy;": "\u0457", "&yopf;": "\u{1D56A}", "&yscr;": "\u{1D4CE}", "&yucy;": "\u044E", "&yuml": "\xFF", "&yuml;": "\xFF", "&zacute;": "\u017A", "&zcaron;": "\u017E", "&zcy;": "\u0437", "&zdot;": "\u017C", "&zeetrf;": "\u2128", "&zeta;": "\u03B6", "&zfr;": "\u{1D537}", "&zhcy;": "\u0436", "&zigrarr;": "\u21DD", "&zopf;": "\u{1D56B}", "&zscr;": "\u{1D4CF}", "&zwj;": "\u200D", "&zwnj;": "\u200C" }, characters: { "\xC6": "&AElig;", "&": "&amp;", "\xC1": "&Aacute;", "\u0102": "&Abreve;", "\xC2": "&Acirc;", "\u0410": "&Acy;", "\u{1D504}": "&Afr;", "\xC0": "&Agrave;", "\u0391": "&Alpha;", "\u0100": "&Amacr;", "\u2A53": "&And;", "\u0104": "&Aogon;", "\u{1D538}": "&Aopf;", "\u2061": "&af;", "\xC5": "&angst;", "\u{1D49C}": "&Ascr;", "\u2254": "&coloneq;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\u2216": "&ssetmn;", "\u2AE7": "&Barv;", "\u2306": "&doublebarwedge;", "\u0411": "&Bcy;", "\u2235": "&because;", "\u212C": "&bernou;", "\u0392": "&Beta;", "\u{1D505}": "&Bfr;", "\u{1D539}": "&Bopf;", "\u02D8": "&breve;", "\u224E": "&bump;", "\u0427": "&CHcy;", "\xA9": "&copy;", "\u0106": "&Cacute;", "\u22D2": "&Cap;", "\u2145": "&DD;", "\u212D": "&Cfr;", "\u010C": "&Ccaron;", "\xC7": "&Ccedil;", "\u0108": "&Ccirc;", "\u2230": "&Cconint;", "\u010A": "&Cdot;", "\xB8": "&cedil;", "\xB7": "&middot;", "\u03A7": "&Chi;", "\u2299": "&odot;", "\u2296": "&ominus;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u2232": "&cwconint;", "\u201D": "&rdquor;", "\u2019": "&rsquor;", "\u2237": "&Proportion;", "\u2A74": "&Colone;", "\u2261": "&equiv;", "\u222F": "&DoubleContourIntegral;", "\u222E": "&oint;", "\u2102": "&complexes;", "\u2210": "&coprod;", "\u2233": "&awconint;", "\u2A2F": "&Cross;", "\u{1D49E}": "&Cscr;", "\u22D3": "&Cup;", "\u224D": "&asympeq;", "\u2911": "&DDotrahd;", "\u0402": "&DJcy;", "\u0405": "&DScy;", "\u040F": "&DZcy;", "\u2021": "&ddagger;", "\u21A1": "&Darr;", "\u2AE4": "&DoubleLeftTee;", "\u010E": "&Dcaron;", "\u0414": "&Dcy;", "\u2207": "&nabla;", "\u0394": "&Delta;", "\u{1D507}": "&Dfr;", "\xB4": "&acute;", "\u02D9": "&dot;", "\u02DD": "&dblac;", "`": "&grave;", "\u02DC": "&tilde;", "\u22C4": "&diamond;", "\u2146": "&dd;", "\u{1D53B}": "&Dopf;", "\xA8": "&uml;", "\u20DC": "&DotDot;", "\u2250": "&esdot;", "\u21D3": "&dArr;", "\u21D0": "&lArr;", "\u21D4": "&iff;", "\u27F8": "&xlArr;", "\u27FA": "&xhArr;", "\u27F9": "&xrArr;", "\u21D2": "&rArr;", "\u22A8": "&vDash;", "\u21D1": "&uArr;", "\u21D5": "&vArr;", "\u2225": "&spar;", "\u2193": "&downarrow;", "\u2913": "&DownArrowBar;", "\u21F5": "&duarr;", "\u0311": "&DownBreve;", "\u2950": "&DownLeftRightVector;", "\u295E": "&DownLeftTeeVector;", "\u21BD": "&lhard;", "\u2956": "&DownLeftVectorBar;", "\u295F": "&DownRightTeeVector;", "\u21C1": "&rightharpoondown;", "\u2957": "&DownRightVectorBar;", "\u22A4": "&top;", "\u21A7": "&mapstodown;", "\u{1D49F}": "&Dscr;", "\u0110": "&Dstrok;", "\u014A": "&ENG;", "\xD0": "&ETH;", "\xC9": "&Eacute;", "\u011A": "&Ecaron;", "\xCA": "&Ecirc;", "\u042D": "&Ecy;", "\u0116": "&Edot;", "\u{1D508}": "&Efr;", "\xC8": "&Egrave;", "\u2208": "&isinv;", "\u0112": "&Emacr;", "\u25FB": "&EmptySmallSquare;", "\u25AB": "&EmptyVerySmallSquare;", "\u0118": "&Eogon;", "\u{1D53C}": "&Eopf;", "\u0395": "&Epsilon;", "\u2A75": "&Equal;", "\u2242": "&esim;", "\u21CC": "&rlhar;", "\u2130": "&expectation;", "\u2A73": "&Esim;", "\u0397": "&Eta;", "\xCB": "&Euml;", "\u2203": "&exist;", "\u2147": "&exponentiale;", "\u0424": "&Fcy;", "\u{1D509}": "&Ffr;", "\u25FC": "&FilledSmallSquare;", "\u25AA": "&squf;", "\u{1D53D}": "&Fopf;", "\u2200": "&forall;", "\u2131": "&Fscr;", "\u0403": "&GJcy;", ">": "&gt;", "\u0393": "&Gamma;", "\u03DC": "&Gammad;", "\u011E": "&Gbreve;", "\u0122": "&Gcedil;", "\u011C": "&Gcirc;", "\u0413": "&Gcy;", "\u0120": "&Gdot;", "\u{1D50A}": "&Gfr;", "\u22D9": "&ggg;", "\u{1D53E}": "&Gopf;", "\u2265": "&geq;", "\u22DB": "&gtreqless;", "\u2267": "&geqq;", "\u2AA2": "&GreaterGreater;", "\u2277": "&gtrless;", "\u2A7E": "&ges;", "\u2273": "&gtrsim;", "\u{1D4A2}": "&Gscr;", "\u226B": "&gg;", "\u042A": "&HARDcy;", "\u02C7": "&caron;", "^": "&Hat;", "\u0124": "&Hcirc;", "\u210C": "&Poincareplane;", "\u210B": "&hamilt;", "\u210D": "&quaternions;", "\u2500": "&boxh;", "\u0126": "&Hstrok;", "\u224F": "&bumpeq;", "\u0415": "&IEcy;", "\u0132": "&IJlig;", "\u0401": "&IOcy;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\u0418": "&Icy;", "\u0130": "&Idot;", "\u2111": "&imagpart;", "\xCC": "&Igrave;", "\u012A": "&Imacr;", "\u2148": "&ii;", "\u222C": "&Int;", "\u222B": "&int;", "\u22C2": "&xcap;", "\u2063": "&ic;", "\u2062": "&it;", "\u012E": "&Iogon;", "\u{1D540}": "&Iopf;", "\u0399": "&Iota;", "\u2110": "&imagline;", "\u0128": "&Itilde;", "\u0406": "&Iukcy;", "\xCF": "&Iuml;", "\u0134": "&Jcirc;", "\u0419": "&Jcy;", "\u{1D50D}": "&Jfr;", "\u{1D541}": "&Jopf;", "\u{1D4A5}": "&Jscr;", "\u0408": "&Jsercy;", "\u0404": "&Jukcy;", "\u0425": "&KHcy;", "\u040C": "&KJcy;", "\u039A": "&Kappa;", "\u0136": "&Kcedil;", "\u041A": "&Kcy;", "\u{1D50E}": "&Kfr;", "\u{1D542}": "&Kopf;", "\u{1D4A6}": "&Kscr;", "\u0409": "&LJcy;", "<": "&lt;", "\u0139": "&Lacute;", "\u039B": "&Lambda;", "\u27EA": "&Lang;", "\u2112": "&lagran;", "\u219E": "&twoheadleftarrow;", "\u013D": "&Lcaron;", "\u013B": "&Lcedil;", "\u041B": "&Lcy;", "\u27E8": "&langle;", "\u2190": "&slarr;", "\u21E4": "&larrb;", "\u21C6": "&lrarr;", "\u2308": "&lceil;", "\u27E6": "&lobrk;", "\u2961": "&LeftDownTeeVector;", "\u21C3": "&downharpoonleft;", "\u2959": "&LeftDownVectorBar;", "\u230A": "&lfloor;", "\u2194": "&leftrightarrow;", "\u294E": "&LeftRightVector;", "\u22A3": "&dashv;", "\u21A4": "&mapstoleft;", "\u295A": "&LeftTeeVector;", "\u22B2": "&vltri;", "\u29CF": "&LeftTriangleBar;", "\u22B4": "&trianglelefteq;", "\u2951": "&LeftUpDownVector;", "\u2960": "&LeftUpTeeVector;", "\u21BF": "&upharpoonleft;", "\u2958": "&LeftUpVectorBar;", "\u21BC": "&lharu;", "\u2952": "&LeftVectorBar;", "\u22DA": "&lesseqgtr;", "\u2266": "&leqq;", "\u2276": "&lg;", "\u2AA1": "&LessLess;", "\u2A7D": "&les;", "\u2272": "&lsim;", "\u{1D50F}": "&Lfr;", "\u22D8": "&Ll;", "\u21DA": "&lAarr;", "\u013F": "&Lmidot;", "\u27F5": "&xlarr;", "\u27F7": "&xharr;", "\u27F6": "&xrarr;", "\u{1D543}": "&Lopf;", "\u2199": "&swarrow;", "\u2198": "&searrow;", "\u21B0": "&lsh;", "\u0141": "&Lstrok;", "\u226A": "&ll;", "\u2905": "&Map;", "\u041C": "&Mcy;", "\u205F": "&MediumSpace;", "\u2133": "&phmmat;", "\u{1D510}": "&Mfr;", "\u2213": "&mp;", "\u{1D544}": "&Mopf;", "\u039C": "&Mu;", "\u040A": "&NJcy;", "\u0143": "&Nacute;", "\u0147": "&Ncaron;", "\u0145": "&Ncedil;", "\u041D": "&Ncy;", "\u200B": "&ZeroWidthSpace;", "\n": "&NewLine;", "\u{1D511}": "&Nfr;", "\u2060": "&NoBreak;", "\xA0": "&nbsp;", "\u2115": "&naturals;", "\u2AEC": "&Not;", "\u2262": "&nequiv;", "\u226D": "&NotCupCap;", "\u2226": "&nspar;", "\u2209": "&notinva;", "\u2260": "&ne;", "\u2242\u0338": "&nesim;", "\u2204": "&nexists;", "\u226F": "&ngtr;", "\u2271": "&ngeq;", "\u2267\u0338": "&ngeqq;", "\u226B\u0338": "&nGtv;", "\u2279": "&ntgl;", "\u2A7E\u0338": "&nges;", "\u2275": "&ngsim;", "\u224E\u0338": "&nbump;", "\u224F\u0338": "&nbumpe;", "\u22EA": "&ntriangleleft;", "\u29CF\u0338": "&NotLeftTriangleBar;", "\u22EC": "&ntrianglelefteq;", "\u226E": "&nlt;", "\u2270": "&nleq;", "\u2278": "&ntlg;", "\u226A\u0338": "&nLtv;", "\u2A7D\u0338": "&nles;", "\u2274": "&nlsim;", "\u2AA2\u0338": "&NotNestedGreaterGreater;", "\u2AA1\u0338": "&NotNestedLessLess;", "\u2280": "&nprec;", "\u2AAF\u0338": "&npreceq;", "\u22E0": "&nprcue;", "\u220C": "&notniva;", "\u22EB": "&ntriangleright;", "\u29D0\u0338": "&NotRightTriangleBar;", "\u22ED": "&ntrianglerighteq;", "\u228F\u0338": "&NotSquareSubset;", "\u22E2": "&nsqsube;", "\u2290\u0338": "&NotSquareSuperset;", "\u22E3": "&nsqsupe;", "\u2282\u20D2": "&vnsub;", "\u2288": "&nsubseteq;", "\u2281": "&nsucc;", "\u2AB0\u0338": "&nsucceq;", "\u22E1": "&nsccue;", "\u227F\u0338": "&NotSucceedsTilde;", "\u2283\u20D2": "&vnsup;", "\u2289": "&nsupseteq;", "\u2241": "&nsim;", "\u2244": "&nsimeq;", "\u2247": "&ncong;", "\u2249": "&napprox;", "\u2224": "&nsmid;", "\u{1D4A9}": "&Nscr;", "\xD1": "&Ntilde;", "\u039D": "&Nu;", "\u0152": "&OElig;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\u041E": "&Ocy;", "\u0150": "&Odblac;", "\u{1D512}": "&Ofr;", "\xD2": "&Ograve;", "\u014C": "&Omacr;", "\u03A9": "&ohm;", "\u039F": "&Omicron;", "\u{1D546}": "&Oopf;", "\u201C": "&ldquo;", "\u2018": "&lsquo;", "\u2A54": "&Or;", "\u{1D4AA}": "&Oscr;", "\xD8": "&Oslash;", "\xD5": "&Otilde;", "\u2A37": "&Otimes;", "\xD6": "&Ouml;", "\u203E": "&oline;", "\u23DE": "&OverBrace;", "\u23B4": "&tbrk;", "\u23DC": "&OverParenthesis;", "\u2202": "&part;", "\u041F": "&Pcy;", "\u{1D513}": "&Pfr;", "\u03A6": "&Phi;", "\u03A0": "&Pi;", "\xB1": "&pm;", "\u2119": "&primes;", "\u2ABB": "&Pr;", "\u227A": "&prec;", "\u2AAF": "&preceq;", "\u227C": "&preccurlyeq;", "\u227E": "&prsim;", "\u2033": "&Prime;", "\u220F": "&prod;", "\u221D": "&vprop;", "\u{1D4AB}": "&Pscr;", "\u03A8": "&Psi;", '"': "&quot;", "\u{1D514}": "&Qfr;", "\u211A": "&rationals;", "\u{1D4AC}": "&Qscr;", "\u2910": "&drbkarow;", "\xAE": "&reg;", "\u0154": "&Racute;", "\u27EB": "&Rang;", "\u21A0": "&twoheadrightarrow;", "\u2916": "&Rarrtl;", "\u0158": "&Rcaron;", "\u0156": "&Rcedil;", "\u0420": "&Rcy;", "\u211C": "&realpart;", "\u220B": "&niv;", "\u21CB": "&lrhar;", "\u296F": "&duhar;", "\u03A1": "&Rho;", "\u27E9": "&rangle;", "\u2192": "&srarr;", "\u21E5": "&rarrb;", "\u21C4": "&rlarr;", "\u2309": "&rceil;", "\u27E7": "&robrk;", "\u295D": "&RightDownTeeVector;", "\u21C2": "&downharpoonright;", "\u2955": "&RightDownVectorBar;", "\u230B": "&rfloor;", "\u22A2": "&vdash;", "\u21A6": "&mapsto;", "\u295B": "&RightTeeVector;", "\u22B3": "&vrtri;", "\u29D0": "&RightTriangleBar;", "\u22B5": "&trianglerighteq;", "\u294F": "&RightUpDownVector;", "\u295C": "&RightUpTeeVector;", "\u21BE": "&upharpoonright;", "\u2954": "&RightUpVectorBar;", "\u21C0": "&rightharpoonup;", "\u2953": "&RightVectorBar;", "\u211D": "&reals;", "\u2970": "&RoundImplies;", "\u21DB": "&rAarr;", "\u211B": "&realine;", "\u21B1": "&rsh;", "\u29F4": "&RuleDelayed;", "\u0429": "&SHCHcy;", "\u0428": "&SHcy;", "\u042C": "&SOFTcy;", "\u015A": "&Sacute;", "\u2ABC": "&Sc;", "\u0160": "&Scaron;", "\u015E": "&Scedil;", "\u015C": "&Scirc;", "\u0421": "&Scy;", "\u{1D516}": "&Sfr;", "\u2191": "&uparrow;", "\u03A3": "&Sigma;", "\u2218": "&compfn;", "\u{1D54A}": "&Sopf;", "\u221A": "&radic;", "\u25A1": "&square;", "\u2293": "&sqcap;", "\u228F": "&sqsubset;", "\u2291": "&sqsubseteq;", "\u2290": "&sqsupset;", "\u2292": "&sqsupseteq;", "\u2294": "&sqcup;", "\u{1D4AE}": "&Sscr;", "\u22C6": "&sstarf;", "\u22D0": "&Subset;", "\u2286": "&subseteq;", "\u227B": "&succ;", "\u2AB0": "&succeq;", "\u227D": "&succcurlyeq;", "\u227F": "&succsim;", "\u2211": "&sum;", "\u22D1": "&Supset;", "\u2283": "&supset;", "\u2287": "&supseteq;", "\xDE": "&THORN;", "\u2122": "&trade;", "\u040B": "&TSHcy;", "\u0426": "&TScy;", "	": "&Tab;", "\u03A4": "&Tau;", "\u0164": "&Tcaron;", "\u0162": "&Tcedil;", "\u0422": "&Tcy;", "\u{1D517}": "&Tfr;", "\u2234": "&therefore;", "\u0398": "&Theta;", "\u205F\u200A": "&ThickSpace;", "\u2009": "&thinsp;", "\u223C": "&thksim;", "\u2243": "&simeq;", "\u2245": "&cong;", "\u2248": "&thkap;", "\u{1D54B}": "&Topf;", "\u20DB": "&tdot;", "\u{1D4AF}": "&Tscr;", "\u0166": "&Tstrok;", "\xDA": "&Uacute;", "\u219F": "&Uarr;", "\u2949": "&Uarrocir;", "\u040E": "&Ubrcy;", "\u016C": "&Ubreve;", "\xDB": "&Ucirc;", "\u0423": "&Ucy;", "\u0170": "&Udblac;", "\u{1D518}": "&Ufr;", "\xD9": "&Ugrave;", "\u016A": "&Umacr;", _: "&lowbar;", "\u23DF": "&UnderBrace;", "\u23B5": "&bbrk;", "\u23DD": "&UnderParenthesis;", "\u22C3": "&xcup;", "\u228E": "&uplus;", "\u0172": "&Uogon;", "\u{1D54C}": "&Uopf;", "\u2912": "&UpArrowBar;", "\u21C5": "&udarr;", "\u2195": "&varr;", "\u296E": "&udhar;", "\u22A5": "&perp;", "\u21A5": "&mapstoup;", "\u2196": "&nwarrow;", "\u2197": "&nearrow;", "\u03D2": "&upsih;", "\u03A5": "&Upsilon;", "\u016E": "&Uring;", "\u{1D4B0}": "&Uscr;", "\u0168": "&Utilde;", "\xDC": "&Uuml;", "\u22AB": "&VDash;", "\u2AEB": "&Vbar;", "\u0412": "&Vcy;", "\u22A9": "&Vdash;", "\u2AE6": "&Vdashl;", "\u22C1": "&xvee;", "\u2016": "&Vert;", "\u2223": "&smid;", "|": "&vert;", "\u2758": "&VerticalSeparator;", "\u2240": "&wreath;", "\u200A": "&hairsp;", "\u{1D519}": "&Vfr;", "\u{1D54D}": "&Vopf;", "\u{1D4B1}": "&Vscr;", "\u22AA": "&Vvdash;", "\u0174": "&Wcirc;", "\u22C0": "&xwedge;", "\u{1D51A}": "&Wfr;", "\u{1D54E}": "&Wopf;", "\u{1D4B2}": "&Wscr;", "\u{1D51B}": "&Xfr;", "\u039E": "&Xi;", "\u{1D54F}": "&Xopf;", "\u{1D4B3}": "&Xscr;", "\u042F": "&YAcy;", "\u0407": "&YIcy;", "\u042E": "&YUcy;", "\xDD": "&Yacute;", "\u0176": "&Ycirc;", "\u042B": "&Ycy;", "\u{1D51C}": "&Yfr;", "\u{1D550}": "&Yopf;", "\u{1D4B4}": "&Yscr;", "\u0178": "&Yuml;", "\u0416": "&ZHcy;", "\u0179": "&Zacute;", "\u017D": "&Zcaron;", "\u0417": "&Zcy;", "\u017B": "&Zdot;", "\u0396": "&Zeta;", "\u2128": "&zeetrf;", "\u2124": "&integers;", "\u{1D4B5}": "&Zscr;", "\xE1": "&aacute;", "\u0103": "&abreve;", "\u223E": "&mstpos;", "\u223E\u0333": "&acE;", "\u223F": "&acd;", "\xE2": "&acirc;", "\u0430": "&acy;", "\xE6": "&aelig;", "\u{1D51E}": "&afr;", "\xE0": "&agrave;", "\u2135": "&aleph;", "\u03B1": "&alpha;", "\u0101": "&amacr;", "\u2A3F": "&amalg;", "\u2227": "&wedge;", "\u2A55": "&andand;", "\u2A5C": "&andd;", "\u2A58": "&andslope;", "\u2A5A": "&andv;", "\u2220": "&angle;", "\u29A4": "&ange;", "\u2221": "&measuredangle;", "\u29A8": "&angmsdaa;", "\u29A9": "&angmsdab;", "\u29AA": "&angmsdac;", "\u29AB": "&angmsdad;", "\u29AC": "&angmsdae;", "\u29AD": "&angmsdaf;", "\u29AE": "&angmsdag;", "\u29AF": "&angmsdah;", "\u221F": "&angrt;", "\u22BE": "&angrtvb;", "\u299D": "&angrtvbd;", "\u2222": "&angsph;", "\u237C": "&angzarr;", "\u0105": "&aogon;", "\u{1D552}": "&aopf;", "\u2A70": "&apE;", "\u2A6F": "&apacir;", "\u224A": "&approxeq;", "\u224B": "&apid;", "'": "&apos;", "\xE5": "&aring;", "\u{1D4B6}": "&ascr;", "*": "&midast;", "\xE3": "&atilde;", "\xE4": "&auml;", "\u2A11": "&awint;", "\u2AED": "&bNot;", "\u224C": "&bcong;", "\u03F6": "&bepsi;", "\u2035": "&bprime;", "\u223D": "&bsim;", "\u22CD": "&bsime;", "\u22BD": "&barvee;", "\u2305": "&barwedge;", "\u23B6": "&bbrktbrk;", "\u0431": "&bcy;", "\u201E": "&ldquor;", "\u29B0": "&bemptyv;", "\u03B2": "&beta;", "\u2136": "&beth;", "\u226C": "&twixt;", "\u{1D51F}": "&bfr;", "\u25EF": "&xcirc;", "\u2A00": "&xodot;", "\u2A01": "&xoplus;", "\u2A02": "&xotime;", "\u2A06": "&xsqcup;", "\u2605": "&starf;", "\u25BD": "&xdtri;", "\u25B3": "&xutri;", "\u2A04": "&xuplus;", "\u290D": "&rbarr;", "\u29EB": "&lozf;", "\u25B4": "&utrif;", "\u25BE": "&dtrif;", "\u25C2": "&ltrif;", "\u25B8": "&rtrif;", "\u2423": "&blank;", "\u2592": "&blk12;", "\u2591": "&blk14;", "\u2593": "&blk34;", "\u2588": "&block;", "=\u20E5": "&bne;", "\u2261\u20E5": "&bnequiv;", "\u2310": "&bnot;", "\u{1D553}": "&bopf;", "\u22C8": "&bowtie;", "\u2557": "&boxDL;", "\u2554": "&boxDR;", "\u2556": "&boxDl;", "\u2553": "&boxDr;", "\u2550": "&boxH;", "\u2566": "&boxHD;", "\u2569": "&boxHU;", "\u2564": "&boxHd;", "\u2567": "&boxHu;", "\u255D": "&boxUL;", "\u255A": "&boxUR;", "\u255C": "&boxUl;", "\u2559": "&boxUr;", "\u2551": "&boxV;", "\u256C": "&boxVH;", "\u2563": "&boxVL;", "\u2560": "&boxVR;", "\u256B": "&boxVh;", "\u2562": "&boxVl;", "\u255F": "&boxVr;", "\u29C9": "&boxbox;", "\u2555": "&boxdL;", "\u2552": "&boxdR;", "\u2510": "&boxdl;", "\u250C": "&boxdr;", "\u2565": "&boxhD;", "\u2568": "&boxhU;", "\u252C": "&boxhd;", "\u2534": "&boxhu;", "\u229F": "&minusb;", "\u229E": "&plusb;", "\u22A0": "&timesb;", "\u255B": "&boxuL;", "\u2558": "&boxuR;", "\u2518": "&boxul;", "\u2514": "&boxur;", "\u2502": "&boxv;", "\u256A": "&boxvH;", "\u2561": "&boxvL;", "\u255E": "&boxvR;", "\u253C": "&boxvh;", "\u2524": "&boxvl;", "\u251C": "&boxvr;", "\xA6": "&brvbar;", "\u{1D4B7}": "&bscr;", "\u204F": "&bsemi;", "\\": "&bsol;", "\u29C5": "&bsolb;", "\u27C8": "&bsolhsub;", "\u2022": "&bullet;", "\u2AAE": "&bumpE;", "\u0107": "&cacute;", "\u2229": "&cap;", "\u2A44": "&capand;", "\u2A49": "&capbrcup;", "\u2A4B": "&capcap;", "\u2A47": "&capcup;", "\u2A40": "&capdot;", "\u2229\uFE00": "&caps;", "\u2041": "&caret;", "\u2A4D": "&ccaps;", "\u010D": "&ccaron;", "\xE7": "&ccedil;", "\u0109": "&ccirc;", "\u2A4C": "&ccups;", "\u2A50": "&ccupssm;", "\u010B": "&cdot;", "\u29B2": "&cemptyv;", "\xA2": "&cent;", "\u{1D520}": "&cfr;", "\u0447": "&chcy;", "\u2713": "&checkmark;", "\u03C7": "&chi;", "\u25CB": "&cir;", "\u29C3": "&cirE;", "\u02C6": "&circ;", "\u2257": "&cire;", "\u21BA": "&olarr;", "\u21BB": "&orarr;", "\u24C8": "&oS;", "\u229B": "&oast;", "\u229A": "&ocir;", "\u229D": "&odash;", "\u2A10": "&cirfnint;", "\u2AEF": "&cirmid;", "\u29C2": "&cirscir;", "\u2663": "&clubsuit;", ":": "&colon;", ",": "&comma;", "@": "&commat;", "\u2201": "&complement;", "\u2A6D": "&congdot;", "\u{1D554}": "&copf;", "\u2117": "&copysr;", "\u21B5": "&crarr;", "\u2717": "&cross;", "\u{1D4B8}": "&cscr;", "\u2ACF": "&csub;", "\u2AD1": "&csube;", "\u2AD0": "&csup;", "\u2AD2": "&csupe;", "\u22EF": "&ctdot;", "\u2938": "&cudarrl;", "\u2935": "&cudarrr;", "\u22DE": "&curlyeqprec;", "\u22DF": "&curlyeqsucc;", "\u21B6": "&curvearrowleft;", "\u293D": "&cularrp;", "\u222A": "&cup;", "\u2A48": "&cupbrcap;", "\u2A46": "&cupcap;", "\u2A4A": "&cupcup;", "\u228D": "&cupdot;", "\u2A45": "&cupor;", "\u222A\uFE00": "&cups;", "\u21B7": "&curvearrowright;", "\u293C": "&curarrm;", "\u22CE": "&cuvee;", "\u22CF": "&cuwed;", "\xA4": "&curren;", "\u2231": "&cwint;", "\u232D": "&cylcty;", "\u2965": "&dHar;", "\u2020": "&dagger;", "\u2138": "&daleth;", "\u2010": "&hyphen;", "\u290F": "&rBarr;", "\u010F": "&dcaron;", "\u0434": "&dcy;", "\u21CA": "&downdownarrows;", "\u2A77": "&eDDot;", "\xB0": "&deg;", "\u03B4": "&delta;", "\u29B1": "&demptyv;", "\u297F": "&dfisht;", "\u{1D521}": "&dfr;", "\u2666": "&diams;", "\u03DD": "&gammad;", "\u22F2": "&disin;", "\xF7": "&divide;", "\u22C7": "&divonx;", "\u0452": "&djcy;", "\u231E": "&llcorner;", "\u230D": "&dlcrop;", $: "&dollar;", "\u{1D555}": "&dopf;", "\u2251": "&eDot;", "\u2238": "&minusd;", "\u2214": "&plusdo;", "\u22A1": "&sdotb;", "\u231F": "&lrcorner;", "\u230C": "&drcrop;", "\u{1D4B9}": "&dscr;", "\u0455": "&dscy;", "\u29F6": "&dsol;", "\u0111": "&dstrok;", "\u22F1": "&dtdot;", "\u25BF": "&triangledown;", "\u29A6": "&dwangle;", "\u045F": "&dzcy;", "\u27FF": "&dzigrarr;", "\xE9": "&eacute;", "\u2A6E": "&easter;", "\u011B": "&ecaron;", "\u2256": "&eqcirc;", "\xEA": "&ecirc;", "\u2255": "&eqcolon;", "\u044D": "&ecy;", "\u0117": "&edot;", "\u2252": "&fallingdotseq;", "\u{1D522}": "&efr;", "\u2A9A": "&eg;", "\xE8": "&egrave;", "\u2A96": "&eqslantgtr;", "\u2A98": "&egsdot;", "\u2A99": "&el;", "\u23E7": "&elinters;", "\u2113": "&ell;", "\u2A95": "&eqslantless;", "\u2A97": "&elsdot;", "\u0113": "&emacr;", "\u2205": "&varnothing;", "\u2004": "&emsp13;", "\u2005": "&emsp14;", "\u2003": "&emsp;", "\u014B": "&eng;", "\u2002": "&ensp;", "\u0119": "&eogon;", "\u{1D556}": "&eopf;", "\u22D5": "&epar;", "\u29E3": "&eparsl;", "\u2A71": "&eplus;", "\u03B5": "&epsilon;", "\u03F5": "&varepsilon;", "=": "&equals;", "\u225F": "&questeq;", "\u2A78": "&equivDD;", "\u29E5": "&eqvparsl;", "\u2253": "&risingdotseq;", "\u2971": "&erarr;", "\u212F": "&escr;", "\u03B7": "&eta;", "\xF0": "&eth;", "\xEB": "&euml;", "\u20AC": "&euro;", "!": "&excl;", "\u0444": "&fcy;", "\u2640": "&female;", "\uFB03": "&ffilig;", "\uFB00": "&fflig;", "\uFB04": "&ffllig;", "\u{1D523}": "&ffr;", "\uFB01": "&filig;", fj: "&fjlig;", "\u266D": "&flat;", "\uFB02": "&fllig;", "\u25B1": "&fltns;", "\u0192": "&fnof;", "\u{1D557}": "&fopf;", "\u22D4": "&pitchfork;", "\u2AD9": "&forkv;", "\u2A0D": "&fpartint;", "\xBD": "&half;", "\u2153": "&frac13;", "\xBC": "&frac14;", "\u2155": "&frac15;", "\u2159": "&frac16;", "\u215B": "&frac18;", "\u2154": "&frac23;", "\u2156": "&frac25;", "\xBE": "&frac34;", "\u2157": "&frac35;", "\u215C": "&frac38;", "\u2158": "&frac45;", "\u215A": "&frac56;", "\u215D": "&frac58;", "\u215E": "&frac78;", "\u2044": "&frasl;", "\u2322": "&sfrown;", "\u{1D4BB}": "&fscr;", "\u2A8C": "&gtreqqless;", "\u01F5": "&gacute;", "\u03B3": "&gamma;", "\u2A86": "&gtrapprox;", "\u011F": "&gbreve;", "\u011D": "&gcirc;", "\u0433": "&gcy;", "\u0121": "&gdot;", "\u2AA9": "&gescc;", "\u2A80": "&gesdot;", "\u2A82": "&gesdoto;", "\u2A84": "&gesdotol;", "\u22DB\uFE00": "&gesl;", "\u2A94": "&gesles;", "\u{1D524}": "&gfr;", "\u2137": "&gimel;", "\u0453": "&gjcy;", "\u2A92": "&glE;", "\u2AA5": "&gla;", "\u2AA4": "&glj;", "\u2269": "&gneqq;", "\u2A8A": "&gnapprox;", "\u2A88": "&gneq;", "\u22E7": "&gnsim;", "\u{1D558}": "&gopf;", "\u210A": "&gscr;", "\u2A8E": "&gsime;", "\u2A90": "&gsiml;", "\u2AA7": "&gtcc;", "\u2A7A": "&gtcir;", "\u22D7": "&gtrdot;", "\u2995": "&gtlPar;", "\u2A7C": "&gtquest;", "\u2978": "&gtrarr;", "\u2269\uFE00": "&gvnE;", "\u044A": "&hardcy;", "\u2948": "&harrcir;", "\u21AD": "&leftrightsquigarrow;", "\u210F": "&plankv;", "\u0125": "&hcirc;", "\u2665": "&heartsuit;", "\u2026": "&mldr;", "\u22B9": "&hercon;", "\u{1D525}": "&hfr;", "\u2925": "&searhk;", "\u2926": "&swarhk;", "\u21FF": "&hoarr;", "\u223B": "&homtht;", "\u21A9": "&larrhk;", "\u21AA": "&rarrhk;", "\u{1D559}": "&hopf;", "\u2015": "&horbar;", "\u{1D4BD}": "&hscr;", "\u0127": "&hstrok;", "\u2043": "&hybull;", "\xED": "&iacute;", "\xEE": "&icirc;", "\u0438": "&icy;", "\u0435": "&iecy;", "\xA1": "&iexcl;", "\u{1D526}": "&ifr;", "\xEC": "&igrave;", "\u2A0C": "&qint;", "\u222D": "&tint;", "\u29DC": "&iinfin;", "\u2129": "&iiota;", "\u0133": "&ijlig;", "\u012B": "&imacr;", "\u0131": "&inodot;", "\u22B7": "&imof;", "\u01B5": "&imped;", "\u2105": "&incare;", "\u221E": "&infin;", "\u29DD": "&infintie;", "\u22BA": "&intercal;", "\u2A17": "&intlarhk;", "\u2A3C": "&iprod;", "\u0451": "&iocy;", "\u012F": "&iogon;", "\u{1D55A}": "&iopf;", "\u03B9": "&iota;", "\xBF": "&iquest;", "\u{1D4BE}": "&iscr;", "\u22F9": "&isinE;", "\u22F5": "&isindot;", "\u22F4": "&isins;", "\u22F3": "&isinsv;", "\u0129": "&itilde;", "\u0456": "&iukcy;", "\xEF": "&iuml;", "\u0135": "&jcirc;", "\u0439": "&jcy;", "\u{1D527}": "&jfr;", "\u0237": "&jmath;", "\u{1D55B}": "&jopf;", "\u{1D4BF}": "&jscr;", "\u0458": "&jsercy;", "\u0454": "&jukcy;", "\u03BA": "&kappa;", "\u03F0": "&varkappa;", "\u0137": "&kcedil;", "\u043A": "&kcy;", "\u{1D528}": "&kfr;", "\u0138": "&kgreen;", "\u0445": "&khcy;", "\u045C": "&kjcy;", "\u{1D55C}": "&kopf;", "\u{1D4C0}": "&kscr;", "\u291B": "&lAtail;", "\u290E": "&lBarr;", "\u2A8B": "&lesseqqgtr;", "\u2962": "&lHar;", "\u013A": "&lacute;", "\u29B4": "&laemptyv;", "\u03BB": "&lambda;", "\u2991": "&langd;", "\u2A85": "&lessapprox;", "\xAB": "&laquo;", "\u291F": "&larrbfs;", "\u291D": "&larrfs;", "\u21AB": "&looparrowleft;", "\u2939": "&larrpl;", "\u2973": "&larrsim;", "\u21A2": "&leftarrowtail;", "\u2AAB": "&lat;", "\u2919": "&latail;", "\u2AAD": "&late;", "\u2AAD\uFE00": "&lates;", "\u290C": "&lbarr;", "\u2772": "&lbbrk;", "{": "&lcub;", "[": "&lsqb;", "\u298B": "&lbrke;", "\u298F": "&lbrksld;", "\u298D": "&lbrkslu;", "\u013E": "&lcaron;", "\u013C": "&lcedil;", "\u043B": "&lcy;", "\u2936": "&ldca;", "\u2967": "&ldrdhar;", "\u294B": "&ldrushar;", "\u21B2": "&ldsh;", "\u2264": "&leq;", "\u21C7": "&llarr;", "\u22CB": "&lthree;", "\u2AA8": "&lescc;", "\u2A7F": "&lesdot;", "\u2A81": "&lesdoto;", "\u2A83": "&lesdotor;", "\u22DA\uFE00": "&lesg;", "\u2A93": "&lesges;", "\u22D6": "&ltdot;", "\u297C": "&lfisht;", "\u{1D529}": "&lfr;", "\u2A91": "&lgE;", "\u296A": "&lharul;", "\u2584": "&lhblk;", "\u0459": "&ljcy;", "\u296B": "&llhard;", "\u25FA": "&lltri;", "\u0140": "&lmidot;", "\u23B0": "&lmoustache;", "\u2268": "&lneqq;", "\u2A89": "&lnapprox;", "\u2A87": "&lneq;", "\u22E6": "&lnsim;", "\u27EC": "&loang;", "\u21FD": "&loarr;", "\u27FC": "&xmap;", "\u21AC": "&rarrlp;", "\u2985": "&lopar;", "\u{1D55D}": "&lopf;", "\u2A2D": "&loplus;", "\u2A34": "&lotimes;", "\u2217": "&lowast;", "\u25CA": "&lozenge;", "(": "&lpar;", "\u2993": "&lparlt;", "\u296D": "&lrhard;", "\u200E": "&lrm;", "\u22BF": "&lrtri;", "\u2039": "&lsaquo;", "\u{1D4C1}": "&lscr;", "\u2A8D": "&lsime;", "\u2A8F": "&lsimg;", "\u201A": "&sbquo;", "\u0142": "&lstrok;", "\u2AA6": "&ltcc;", "\u2A79": "&ltcir;", "\u22C9": "&ltimes;", "\u2976": "&ltlarr;", "\u2A7B": "&ltquest;", "\u2996": "&ltrPar;", "\u25C3": "&triangleleft;", "\u294A": "&lurdshar;", "\u2966": "&luruhar;", "\u2268\uFE00": "&lvnE;", "\u223A": "&mDDot;", "\xAF": "&strns;", "\u2642": "&male;", "\u2720": "&maltese;", "\u25AE": "&marker;", "\u2A29": "&mcomma;", "\u043C": "&mcy;", "\u2014": "&mdash;", "\u{1D52A}": "&mfr;", "\u2127": "&mho;", "\xB5": "&micro;", "\u2AF0": "&midcir;", "\u2212": "&minus;", "\u2A2A": "&minusdu;", "\u2ADB": "&mlcp;", "\u22A7": "&models;", "\u{1D55E}": "&mopf;", "\u{1D4C2}": "&mscr;", "\u03BC": "&mu;", "\u22B8": "&mumap;", "\u22D9\u0338": "&nGg;", "\u226B\u20D2": "&nGt;", "\u21CD": "&nlArr;", "\u21CE": "&nhArr;", "\u22D8\u0338": "&nLl;", "\u226A\u20D2": "&nLt;", "\u21CF": "&nrArr;", "\u22AF": "&nVDash;", "\u22AE": "&nVdash;", "\u0144": "&nacute;", "\u2220\u20D2": "&nang;", "\u2A70\u0338": "&napE;", "\u224B\u0338": "&napid;", "\u0149": "&napos;", "\u266E": "&natural;", "\u2A43": "&ncap;", "\u0148": "&ncaron;", "\u0146": "&ncedil;", "\u2A6D\u0338": "&ncongdot;", "\u2A42": "&ncup;", "\u043D": "&ncy;", "\u2013": "&ndash;", "\u21D7": "&neArr;", "\u2924": "&nearhk;", "\u2250\u0338": "&nedot;", "\u2928": "&toea;", "\u{1D52B}": "&nfr;", "\u21AE": "&nleftrightarrow;", "\u2AF2": "&nhpar;", "\u22FC": "&nis;", "\u22FA": "&nisd;", "\u045A": "&njcy;", "\u2266\u0338": "&nleqq;", "\u219A": "&nleftarrow;", "\u2025": "&nldr;", "\u{1D55F}": "&nopf;", "\xAC": "&not;", "\u22F9\u0338": "&notinE;", "\u22F5\u0338": "&notindot;", "\u22F7": "&notinvb;", "\u22F6": "&notinvc;", "\u22FE": "&notnivb;", "\u22FD": "&notnivc;", "\u2AFD\u20E5": "&nparsl;", "\u2202\u0338": "&npart;", "\u2A14": "&npolint;", "\u219B": "&nrightarrow;", "\u2933\u0338": "&nrarrc;", "\u219D\u0338": "&nrarrw;", "\u{1D4C3}": "&nscr;", "\u2284": "&nsub;", "\u2AC5\u0338": "&nsubseteqq;", "\u2285": "&nsup;", "\u2AC6\u0338": "&nsupseteqq;", "\xF1": "&ntilde;", "\u03BD": "&nu;", "#": "&num;", "\u2116": "&numero;", "\u2007": "&numsp;", "\u22AD": "&nvDash;", "\u2904": "&nvHarr;", "\u224D\u20D2": "&nvap;", "\u22AC": "&nvdash;", "\u2265\u20D2": "&nvge;", ">\u20D2": "&nvgt;", "\u29DE": "&nvinfin;", "\u2902": "&nvlArr;", "\u2264\u20D2": "&nvle;", "<\u20D2": "&nvlt;", "\u22B4\u20D2": "&nvltrie;", "\u2903": "&nvrArr;", "\u22B5\u20D2": "&nvrtrie;", "\u223C\u20D2": "&nvsim;", "\u21D6": "&nwArr;", "\u2923": "&nwarhk;", "\u2927": "&nwnear;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\u043E": "&ocy;", "\u0151": "&odblac;", "\u2A38": "&odiv;", "\u29BC": "&odsold;", "\u0153": "&oelig;", "\u29BF": "&ofcir;", "\u{1D52C}": "&ofr;", "\u02DB": "&ogon;", "\xF2": "&ograve;", "\u29C1": "&ogt;", "\u29B5": "&ohbar;", "\u29BE": "&olcir;", "\u29BB": "&olcross;", "\u29C0": "&olt;", "\u014D": "&omacr;", "\u03C9": "&omega;", "\u03BF": "&omicron;", "\u29B6": "&omid;", "\u{1D560}": "&oopf;", "\u29B7": "&opar;", "\u29B9": "&operp;", "\u2228": "&vee;", "\u2A5D": "&ord;", "\u2134": "&oscr;", "\xAA": "&ordf;", "\xBA": "&ordm;", "\u22B6": "&origof;", "\u2A56": "&oror;", "\u2A57": "&orslope;", "\u2A5B": "&orv;", "\xF8": "&oslash;", "\u2298": "&osol;", "\xF5": "&otilde;", "\u2A36": "&otimesas;", "\xF6": "&ouml;", "\u233D": "&ovbar;", "\xB6": "&para;", "\u2AF3": "&parsim;", "\u2AFD": "&parsl;", "\u043F": "&pcy;", "%": "&percnt;", ".": "&period;", "\u2030": "&permil;", "\u2031": "&pertenk;", "\u{1D52D}": "&pfr;", "\u03C6": "&phi;", "\u03D5": "&varphi;", "\u260E": "&phone;", "\u03C0": "&pi;", "\u03D6": "&varpi;", "\u210E": "&planckh;", "+": "&plus;", "\u2A23": "&plusacir;", "\u2A22": "&pluscir;", "\u2A25": "&plusdu;", "\u2A72": "&pluse;", "\u2A26": "&plussim;", "\u2A27": "&plustwo;", "\u2A15": "&pointint;", "\u{1D561}": "&popf;", "\xA3": "&pound;", "\u2AB3": "&prE;", "\u2AB7": "&precapprox;", "\u2AB9": "&prnap;", "\u2AB5": "&prnE;", "\u22E8": "&prnsim;", "\u2032": "&prime;", "\u232E": "&profalar;", "\u2312": "&profline;", "\u2313": "&profsurf;", "\u22B0": "&prurel;", "\u{1D4C5}": "&pscr;", "\u03C8": "&psi;", "\u2008": "&puncsp;", "\u{1D52E}": "&qfr;", "\u{1D562}": "&qopf;", "\u2057": "&qprime;", "\u{1D4C6}": "&qscr;", "\u2A16": "&quatint;", "?": "&quest;", "\u291C": "&rAtail;", "\u2964": "&rHar;", "\u223D\u0331": "&race;", "\u0155": "&racute;", "\u29B3": "&raemptyv;", "\u2992": "&rangd;", "\u29A5": "&range;", "\xBB": "&raquo;", "\u2975": "&rarrap;", "\u2920": "&rarrbfs;", "\u2933": "&rarrc;", "\u291E": "&rarrfs;", "\u2945": "&rarrpl;", "\u2974": "&rarrsim;", "\u21A3": "&rightarrowtail;", "\u219D": "&rightsquigarrow;", "\u291A": "&ratail;", "\u2236": "&ratio;", "\u2773": "&rbbrk;", "}": "&rcub;", "]": "&rsqb;", "\u298C": "&rbrke;", "\u298E": "&rbrksld;", "\u2990": "&rbrkslu;", "\u0159": "&rcaron;", "\u0157": "&rcedil;", "\u0440": "&rcy;", "\u2937": "&rdca;", "\u2969": "&rdldhar;", "\u21B3": "&rdsh;", "\u25AD": "&rect;", "\u297D": "&rfisht;", "\u{1D52F}": "&rfr;", "\u296C": "&rharul;", "\u03C1": "&rho;", "\u03F1": "&varrho;", "\u21C9": "&rrarr;", "\u22CC": "&rthree;", "\u02DA": "&ring;", "\u200F": "&rlm;", "\u23B1": "&rmoustache;", "\u2AEE": "&rnmid;", "\u27ED": "&roang;", "\u21FE": "&roarr;", "\u2986": "&ropar;", "\u{1D563}": "&ropf;", "\u2A2E": "&roplus;", "\u2A35": "&rotimes;", ")": "&rpar;", "\u2994": "&rpargt;", "\u2A12": "&rppolint;", "\u203A": "&rsaquo;", "\u{1D4C7}": "&rscr;", "\u22CA": "&rtimes;", "\u25B9": "&triangleright;", "\u29CE": "&rtriltri;", "\u2968": "&ruluhar;", "\u211E": "&rx;", "\u015B": "&sacute;", "\u2AB4": "&scE;", "\u2AB8": "&succapprox;", "\u0161": "&scaron;", "\u015F": "&scedil;", "\u015D": "&scirc;", "\u2AB6": "&succneqq;", "\u2ABA": "&succnapprox;", "\u22E9": "&succnsim;", "\u2A13": "&scpolint;", "\u0441": "&scy;", "\u22C5": "&sdot;", "\u2A66": "&sdote;", "\u21D8": "&seArr;", "\xA7": "&sect;", ";": "&semi;", "\u2929": "&tosa;", "\u2736": "&sext;", "\u{1D530}": "&sfr;", "\u266F": "&sharp;", "\u0449": "&shchcy;", "\u0448": "&shcy;", "\xAD": "&shy;", "\u03C3": "&sigma;", "\u03C2": "&varsigma;", "\u2A6A": "&simdot;", "\u2A9E": "&simg;", "\u2AA0": "&simgE;", "\u2A9D": "&siml;", "\u2A9F": "&simlE;", "\u2246": "&simne;", "\u2A24": "&simplus;", "\u2972": "&simrarr;", "\u2A33": "&smashp;", "\u29E4": "&smeparsl;", "\u2323": "&ssmile;", "\u2AAA": "&smt;", "\u2AAC": "&smte;", "\u2AAC\uFE00": "&smtes;", "\u044C": "&softcy;", "/": "&sol;", "\u29C4": "&solb;", "\u233F": "&solbar;", "\u{1D564}": "&sopf;", "\u2660": "&spadesuit;", "\u2293\uFE00": "&sqcaps;", "\u2294\uFE00": "&sqcups;", "\u{1D4C8}": "&sscr;", "\u2606": "&star;", "\u2282": "&subset;", "\u2AC5": "&subseteqq;", "\u2ABD": "&subdot;", "\u2AC3": "&subedot;", "\u2AC1": "&submult;", "\u2ACB": "&subsetneqq;", "\u228A": "&subsetneq;", "\u2ABF": "&subplus;", "\u2979": "&subrarr;", "\u2AC7": "&subsim;", "\u2AD5": "&subsub;", "\u2AD3": "&subsup;", "\u266A": "&sung;", "\xB9": "&sup1;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\u2AC6": "&supseteqq;", "\u2ABE": "&supdot;", "\u2AD8": "&supdsub;", "\u2AC4": "&supedot;", "\u27C9": "&suphsol;", "\u2AD7": "&suphsub;", "\u297B": "&suplarr;", "\u2AC2": "&supmult;", "\u2ACC": "&supsetneqq;", "\u228B": "&supsetneq;", "\u2AC0": "&supplus;", "\u2AC8": "&supsim;", "\u2AD4": "&supsub;", "\u2AD6": "&supsup;", "\u21D9": "&swArr;", "\u292A": "&swnwar;", "\xDF": "&szlig;", "\u2316": "&target;", "\u03C4": "&tau;", "\u0165": "&tcaron;", "\u0163": "&tcedil;", "\u0442": "&tcy;", "\u2315": "&telrec;", "\u{1D531}": "&tfr;", "\u03B8": "&theta;", "\u03D1": "&vartheta;", "\xFE": "&thorn;", "\xD7": "&times;", "\u2A31": "&timesbar;", "\u2A30": "&timesd;", "\u2336": "&topbot;", "\u2AF1": "&topcir;", "\u{1D565}": "&topf;", "\u2ADA": "&topfork;", "\u2034": "&tprime;", "\u25B5": "&utri;", "\u225C": "&trie;", "\u25EC": "&tridot;", "\u2A3A": "&triminus;", "\u2A39": "&triplus;", "\u29CD": "&trisb;", "\u2A3B": "&tritime;", "\u23E2": "&trpezium;", "\u{1D4C9}": "&tscr;", "\u0446": "&tscy;", "\u045B": "&tshcy;", "\u0167": "&tstrok;", "\u2963": "&uHar;", "\xFA": "&uacute;", "\u045E": "&ubrcy;", "\u016D": "&ubreve;", "\xFB": "&ucirc;", "\u0443": "&ucy;", "\u0171": "&udblac;", "\u297E": "&ufisht;", "\u{1D532}": "&ufr;", "\xF9": "&ugrave;", "\u2580": "&uhblk;", "\u231C": "&ulcorner;", "\u230F": "&ulcrop;", "\u25F8": "&ultri;", "\u016B": "&umacr;", "\u0173": "&uogon;", "\u{1D566}": "&uopf;", "\u03C5": "&upsilon;", "\u21C8": "&uuarr;", "\u231D": "&urcorner;", "\u230E": "&urcrop;", "\u016F": "&uring;", "\u25F9": "&urtri;", "\u{1D4CA}": "&uscr;", "\u22F0": "&utdot;", "\u0169": "&utilde;", "\xFC": "&uuml;", "\u29A7": "&uwangle;", "\u2AE8": "&vBar;", "\u2AE9": "&vBarv;", "\u299C": "&vangrt;", "\u228A\uFE00": "&vsubne;", "\u2ACB\uFE00": "&vsubnE;", "\u228B\uFE00": "&vsupne;", "\u2ACC\uFE00": "&vsupnE;", "\u0432": "&vcy;", "\u22BB": "&veebar;", "\u225A": "&veeeq;", "\u22EE": "&vellip;", "\u{1D533}": "&vfr;", "\u{1D567}": "&vopf;", "\u{1D4CB}": "&vscr;", "\u299A": "&vzigzag;", "\u0175": "&wcirc;", "\u2A5F": "&wedbar;", "\u2259": "&wedgeq;", "\u2118": "&wp;", "\u{1D534}": "&wfr;", "\u{1D568}": "&wopf;", "\u{1D4CC}": "&wscr;", "\u{1D535}": "&xfr;", "\u03BE": "&xi;", "\u22FB": "&xnis;", "\u{1D569}": "&xopf;", "\u{1D4CD}": "&xscr;", "\xFD": "&yacute;", "\u044F": "&yacy;", "\u0177": "&ycirc;", "\u044B": "&ycy;", "\xA5": "&yen;", "\u{1D536}": "&yfr;", "\u0457": "&yicy;", "\u{1D56A}": "&yopf;", "\u{1D4CE}": "&yscr;", "\u044E": "&yucy;", "\xFF": "&yuml;", "\u017A": "&zacute;", "\u017E": "&zcaron;", "\u0437": "&zcy;", "\u017C": "&zdot;", "\u03B6": "&zeta;", "\u{1D537}": "&zfr;", "\u0436": "&zhcy;", "\u21DD": "&zigrarr;", "\u{1D56B}": "&zopf;", "\u{1D4CF}": "&zscr;", "\u200D": "&zwj;", "\u200C": "&zwnj;" } } };
  }
});
var require_numeric_unicode_map = __commonJS2({
  "../../node_modules/html-entities/lib/numeric-unicode-map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numericUnicodeMap = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
  }
});
var require_surrogate_pairs = __commonJS2({
  "../../node_modules/html-entities/lib/surrogate-pairs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
      return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
    };
    exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
      return input.codePointAt(position);
    } : function(input, position) {
      return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
    };
    exports.highSurrogateFrom = 55296;
    exports.highSurrogateTo = 56319;
  }
});
var require_lib = __commonJS2({
  "../../node_modules/html-entities/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var named_references_1 = require_named_references();
    var numeric_unicode_map_1 = require_numeric_unicode_map();
    var surrogate_pairs_1 = require_surrogate_pairs();
    var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
    var encodeRegExps = {
      specialChars: /[<>'"&]/g,
      nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
      nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
      extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
    };
    var defaultEncodeOptions = {
      mode: "specialChars",
      level: "all",
      numeric: "decimal"
    };
    function encode2(text, _a) {
      var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
      if (!text) {
        return "";
      }
      var encodeRegExp = encodeRegExps[mode];
      var references = allNamedReferences[level].characters;
      var isHex = numeric === "hexadecimal";
      encodeRegExp.lastIndex = 0;
      var _b = encodeRegExp.exec(text);
      var _c;
      if (_b) {
        _c = "";
        var _d = 0;
        do {
          if (_d !== _b.index) {
            _c += text.substring(_d, _b.index);
          }
          var _e = _b[0];
          var result_1 = references[_e];
          if (!result_1) {
            var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
            result_1 = (isHex ? "&#x" + code_1.toString(16) : "&#" + code_1) + ";";
          }
          _c += result_1;
          _d = _b.index + _e.length;
        } while (_b = encodeRegExp.exec(text));
        if (_d !== text.length) {
          _c += text.substring(_d);
        }
      } else {
        _c = text;
      }
      return _c;
    }
    exports.encode = encode2;
    var defaultDecodeOptions = {
      scope: "body",
      level: "all"
    };
    var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
    var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
    var baseDecodeRegExps = {
      xml: {
        strict,
        attribute,
        body: named_references_1.bodyRegExps.xml
      },
      html4: {
        strict,
        attribute,
        body: named_references_1.bodyRegExps.html4
      },
      html5: {
        strict,
        attribute,
        body: named_references_1.bodyRegExps.html5
      }
    };
    var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
    var fromCharCode = String.fromCharCode;
    var outOfBoundsChar = fromCharCode(65533);
    var defaultDecodeEntityOptions = {
      level: "all"
    };
    function decodeEntity(entity, _a) {
      var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
      if (!entity) {
        return "";
      }
      var _b = entity;
      var decodeEntityLastChar_1 = entity[entity.length - 1];
      if (false) {
        _b = entity;
      } else if (false) {
        _b = entity;
      } else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
          _b = decodeResultByReference_1;
        } else if (entity[0] === "&" && entity[1] === "#") {
          var decodeSecondChar_1 = entity[2];
          var decodeCode_1 = decodeSecondChar_1 == "x" || decodeSecondChar_1 == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
          _b = decodeCode_1 >= 1114111 ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
      }
      return _b;
    }
    exports.decodeEntity = decodeEntity;
    function decode2(text, _a) {
      var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? "all" : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === "xml" ? "strict" : "body" : _b;
      if (!text) {
        return "";
      }
      var decodeRegExp = decodeRegExps[level][scope];
      var references = allNamedReferences[level].entities;
      var isAttribute = scope === "attribute";
      var isStrict = scope === "strict";
      decodeRegExp.lastIndex = 0;
      var replaceMatch_1 = decodeRegExp.exec(text);
      var replaceResult_1;
      if (replaceMatch_1) {
        replaceResult_1 = "";
        var replaceLastIndex_1 = 0;
        do {
          if (replaceLastIndex_1 !== replaceMatch_1.index) {
            replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
          }
          var replaceInput_1 = replaceMatch_1[0];
          var decodeResult_1 = replaceInput_1;
          var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
          if (isAttribute && decodeEntityLastChar_2 === "=") {
            decodeResult_1 = replaceInput_1;
          } else if (isStrict && decodeEntityLastChar_2 !== ";") {
            decodeResult_1 = replaceInput_1;
          } else {
            var decodeResultByReference_2 = references[replaceInput_1];
            if (decodeResultByReference_2) {
              decodeResult_1 = decodeResultByReference_2;
            } else if (replaceInput_1[0] === "&" && replaceInput_1[1] === "#") {
              var decodeSecondChar_2 = replaceInput_1[2];
              var decodeCode_2 = decodeSecondChar_2 == "x" || decodeSecondChar_2 == "X" ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
              decodeResult_1 = decodeCode_2 >= 1114111 ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
            }
          }
          replaceResult_1 += decodeResult_1;
          replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while (replaceMatch_1 = decodeRegExp.exec(text));
        if (replaceLastIndex_1 !== text.length) {
          replaceResult_1 += text.substring(replaceLastIndex_1);
        }
      } else {
        replaceResult_1 = text;
      }
      return replaceResult_1;
    }
    exports.decode = decode2;
  }
});
var isValid = (url = "") => {
  if (typeof url !== "string") {
    return false;
  }
  return url.startsWith("http://") || url.startsWith("https://");
};
var purify = (url) => {
  return url;
};
var retrieve = async (url, fetchOptions) => {
  const res = await import_axios2.default.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64; rv:104.0) Gecko/20100101 Firefox/104.0"
    },
    timeout: 10 * 60 * 1e3,
    ...fetchOptions || {}
  });
  const status2 = res.status;
  if (status2 >= 400) {
    throw new Error(`Request failed with status code ${status2}`);
  }
  const contentType = res.headers["content-type"];
  const text = res.data;
  if (/(\+|\/)json/.test(contentType)) {
    if (typeof text === "string") {
      try {
        const data = JSON.parse(text);
        return { type: "json", json: data, status: status2, contentType };
      } catch (err2) {
        throw new Error("Failed to convert data to JSON object");
      }
    } else {
      return { type: "json", json: text, status: status2, contentType };
    }
  }
  return { type: "xml", text: text.trim(), status: status2, contentType };
};
var retrieve_default = retrieve;
var ob2Str = (val) => {
  return {}.toString.call(val);
};
var isArray4 = (val) => {
  return Array.isArray(val);
};
var isString2 = (val) => {
  return String(val) === val;
};
var isNumber2 = (val) => {
  return Number(val) === val;
};
var isObject2 = (val) => {
  return ob2Str(val) === "[object Object]" && !isArray4(val);
};
var hasProperty = (ob, k) => {
  if (!ob || !k) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(ob, k);
};
var toString3 = (input) => {
  const s = isNumber2(input) ? String(input) : input;
  if (!isString2(s)) {
    throw new Error("InvalidInput: String required.");
  }
  return s;
};
var truncate2 = (s, len = 140) => {
  const txt = toString3(s);
  const txtlen = txt.length;
  if (txtlen <= len) {
    return txt;
  }
  const subtxt = txt.substring(0, len).trim();
  const subtxtArr = subtxt.split(" ");
  const subtxtLen = subtxtArr.length;
  if (subtxtLen > 1) {
    subtxtArr.pop();
    return subtxtArr.map((word) => word.trim()).join(" ") + "...";
  }
  return subtxt.substring(0, len - 3) + "...";
};
var stripTags = (s) => {
  return toString3(s).replace(/(<([^>]+)>)/ig, "").trim();
};
var import_fast_xml_parser = __toESM(require_fxp(), 1);
var isRSS = (data = {}) => {
  return hasProperty(data, "rss") && hasProperty(data.rss, "channel");
};
var isAtom = (data = {}) => {
  return hasProperty(data, "feed") && hasProperty(data.feed, "entry");
};
var validate = (xml) => {
  return !isString2(xml) || !xml.length ? false : import_fast_xml_parser.XMLValidator.validate(xml) === true;
};
var xml2obj = (xml = "", extraOptions = {}) => {
  const options = {
    ...extraOptions,
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
  };
  const parser = new import_fast_xml_parser.XMLParser(options);
  const jsonObj = parser.parse(xml);
  return jsonObj;
};
var import_html_entities = __toESM(require_lib(), 1);
function findInArr(arr, func, defaultValue = "") {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const ret = func(item);
    if (ret) {
      return ret;
    }
  }
  return defaultValue;
}
var toISODateString = (dstr) => {
  try {
    return dstr ? new Date(dstr).toISOString() : "";
  } catch (err2) {
    return "";
  }
};
var buildDescription = (val, maxlen) => {
  const stripped = stripTags(String(val));
  return truncate2(stripped, maxlen).replace(/\n+/g, " ");
};
var getText = (val) => {
  if (Array.isArray(val)) {
    return findInArr(val, getText);
  }
  const txt = isObject2(val) ? val._text || val["#text"] || val._cdata || val.$t : val;
  return txt ? (0, import_html_entities.decode)(String(txt).trim()) : "";
};
var getLink = (val = [], id = "") => {
  if (id && isValid(id)) {
    return id;
  }
  const getEntryLink = (links) => {
    const items = links.map((item) => {
      return getLink(item);
    });
    return items.length > 0 ? items[0] : "";
  };
  return isString2(val) ? getText(val) : isObject2(val) && hasProperty(val, "href") ? getText(val.href) : isObject2(val) && hasProperty(val, "@_href") ? getText(val["@_href"]) : isObject2(val) && hasProperty(val, "@_url") ? getText(val["@_url"]) : isObject2(val) && hasProperty(val, "_attributes") ? getText(val._attributes.href) : isArray4(val) ? getEntryLink(val) : "";
};
var getPureUrl = (url, id = "") => {
  if (Array.isArray(url)) {
    return findInArr(url, getPureUrl);
  }
  const link = getLink(url, id);
  return link ? purify(link) : "";
};
var getEnclosure = (val) => {
  if (Array.isArray(val)) {
    return findInArr(val, getEnclosure, null);
  }
  const url = hasProperty(val, "@_url") ? val["@_url"] : "";
  const type2 = hasProperty(val, "@_type") ? val["@_type"] : "";
  const length = Number(hasProperty(val, "@_length") ? val["@_length"] : 0);
  return !url || !type2 ? null : {
    url,
    type: type2,
    length
  };
};
var getCategory = (v) => {
  return isObject2(v) ? {
    text: getText(v),
    domain: v["@_domain"]
  } : v;
};
var getOptionalTags = (val, key) => {
  if (key === "source") {
    return {
      text: getText(val),
      url: getLink(val)
    };
  }
  if (key === "category") {
    return isArray4(val) ? val.map(getCategory) : getCategory(val);
  }
  if (key === "enclosure") {
    return getEnclosure(val);
  }
  return val;
};
var transform = (item, options) => {
  const {
    includeEntryContent,
    useISODateFormat,
    descriptionMaxLen,
    extraEntryFields
  } = options;
  const {
    title: title2 = "",
    url: link = "",
    date_published: pubDate = "",
    summary = "",
    content_html: htmlContent = "",
    content_text: textContent = ""
  } = item;
  const published = useISODateFormat ? toISODateString(pubDate) : pubDate;
  const extraFields = extraEntryFields(item);
  const entry = {
    title: title2,
    link: purify(link),
    published,
    description: buildDescription(textContent || htmlContent || summary, descriptionMaxLen)
  };
  if (includeEntryContent) {
    entry.content = htmlContent || textContent || summary;
  }
  return {
    ...entry,
    ...extraFields
  };
};
var parseJson = (data, options) => {
  const {
    normalization,
    extraFeedFields
  } = options;
  if (!normalization) {
    return data;
  }
  const {
    title: title2 = "",
    home_page_url: homepageUrl = "",
    description = "",
    language = "",
    items: item = []
  } = data;
  const extraFields = extraFeedFields(data);
  const items = isArray4(item) ? item : [item];
  return {
    title: title2,
    link: purify(homepageUrl),
    description,
    language,
    published: "",
    generator: "",
    ...extraFields,
    entries: items.map((item2) => {
      return transform(item2, options);
    })
  };
};
var parseJsonFeed_default = (data, options = {}) => {
  return parseJson(data, options);
};
var transform2 = (item, options) => {
  const {
    includeEntryContent,
    includeOptionalElements,
    useISODateFormat,
    descriptionMaxLen,
    extraEntryFields
  } = options;
  const { title: title2 = "", link = "", pubDate = "", description = "" } = item;
  const extraFields = extraEntryFields(item);
  const published = useISODateFormat ? toISODateString(pubDate) : pubDate;
  const entry = {
    title: getText(title2),
    link: getPureUrl(link),
    published,
    description: buildDescription(description, descriptionMaxLen)
  };
  if (includeOptionalElements) {
    const optionalProps = "author comments source category enclosure".split(" ");
    optionalProps.forEach((key) => {
      if (hasProperty(item, key)) {
        entry[key] = getOptionalTags(item[key], key);
      }
    });
  }
  if (includeEntryContent) {
    entry.content = description;
  }
  return {
    ...entry,
    ...extraFields
  };
};
var flatten = (feed) => {
  const { title: title2 = "", link = "", item } = feed;
  const items = isArray4(item) ? item : [item];
  const entries = items.map((entry) => {
    const { id, title: title22 = "", link: link2 = "" } = entry;
    const item2 = {
      ...entry,
      title: getText(title22),
      link: getPureUrl(link2, id)
    };
    const txtTags = "guid description source".split(" ");
    txtTags.forEach((key) => {
      if (hasProperty(entry, key)) {
        item2[key] = getText(entry[key]);
      }
    });
    const optionalProps = "source category enclosure".split(" ");
    optionalProps.forEach((key) => {
      if (hasProperty(item2, key)) {
        entry[key] = getOptionalTags(item2[key], key);
      }
    });
    return item2;
  });
  const output = {
    ...feed,
    title: getText(title2),
    link: getPureUrl(link),
    item: isArray4(item) ? entries : entries[0]
  };
  return output;
};
var parseRss = (data, options = {}) => {
  const { normalization, extraFeedFields } = options;
  if (!normalization) {
    return flatten(data.rss.channel);
  }
  const {
    title: title2 = "",
    link = "",
    description = "",
    generator = "",
    language = "",
    lastBuildDate = "",
    item = []
  } = data.rss.channel;
  const extraFields = extraFeedFields(data.rss.channel);
  const items = isArray4(item) ? item : [item];
  const published = options.useISODateFormat ? toISODateString(lastBuildDate) : lastBuildDate;
  return {
    title: getText(title2),
    link: getPureUrl(link),
    description,
    language,
    generator,
    published,
    ...extraFields,
    entries: items.map((item2) => {
      return transform2(item2, options);
    })
  };
};
var parseRssFeed_default = (data, options = {}) => {
  return parseRss(data, options);
};
var transform3 = (item, options) => {
  const {
    includeEntryContent,
    useISODateFormat,
    descriptionMaxLen,
    extraEntryFields
  } = options;
  const {
    id = "",
    title: title2 = "",
    updated = "",
    published = "",
    link = "",
    summary = "",
    content = ""
  } = item;
  const extraFields = extraEntryFields(item);
  const pubDate = updated || published;
  const htmlContent = getText(content || summary);
  const entry = {
    title: getText(title2),
    link: getPureUrl(link, id),
    published: useISODateFormat ? toISODateString(pubDate) : pubDate,
    description: buildDescription(htmlContent || summary, descriptionMaxLen)
  };
  if (includeEntryContent) {
    entry.content = htmlContent;
  }
  return {
    ...entry,
    ...extraFields
  };
};
var flatten2 = (feed) => {
  const {
    id,
    title: title2 = "",
    link = "",
    entry
  } = feed;
  const entries = isArray4(entry) ? entry : [entry];
  const items = entries.map((entry2) => {
    const {
      id: id2,
      title: title22 = "",
      link: link2 = "",
      summary = "",
      content = ""
    } = entry2;
    const item = {
      ...entry2,
      title: getText(title22),
      link: getPureUrl(link2, id2)
    };
    if (hasProperty(item, "summary")) {
      item.summary = getText(summary);
    }
    if (hasProperty(item, "content")) {
      item.content = getText(content);
    }
    return item;
  });
  const output = {
    ...feed,
    title: getText(title2),
    link: getPureUrl(link, id),
    entry: isArray4(entry) ? items : items[0]
  };
  return output;
};
var parseAtom = (data, options = {}) => {
  const { normalization, extraFeedFields } = options;
  if (!normalization) {
    return flatten2(data.feed);
  }
  const {
    id = "",
    title: title2 = "",
    link = "",
    subtitle = "",
    generator = "",
    language = "",
    updated = "",
    entry: item = []
  } = data.feed;
  const extraFields = extraFeedFields(data.feed);
  const items = isArray4(item) ? item : [item];
  const published = options.useISODateFormat ? toISODateString(updated) : updated;
  return {
    title: getText(title2),
    link: getPureUrl(link, id),
    description: subtitle,
    language,
    generator,
    published,
    ...extraFields,
    entries: items.map((item2) => {
      return transform3(item2, options);
    })
  };
};
var parseAtomFeed_default = (data, options = {}) => {
  return parseAtom(data, options);
};
var read2 = async (url, options = {}, fetchOptions = {}) => {
  if (!isValid(url)) {
    throw new Error("Input param must be a valid URL");
  }
  const data = await retrieve_default(url, fetchOptions);
  if (!data.text && !data.json) {
    throw new Error(`Failed to load content from "${url}"`);
  }
  const { type: type2, json, text } = data;
  const {
    includeEntryContent = false,
    includeOptionalElements = false,
    useISODateFormat = true,
    normalization = true,
    descriptionMaxLen = 210,
    extraFeedFields = () => ({}),
    extraEntryFields = () => ({}),
    xmlParserOptions = {}
  } = options;
  const opts = {
    normalization,
    includeEntryContent,
    includeOptionalElements,
    useISODateFormat,
    descriptionMaxLen,
    extraFeedFields,
    extraEntryFields
  };
  if (type2 === "json") {
    return parseJsonFeed_default(json, opts);
  }
  if (!validate(text)) {
    throw new Error("The XML document is not well-formed");
  }
  const xml = xml2obj(text, xmlParserOptions);
  return isRSS(xml) ? parseRssFeed_default(xml, opts) : isAtom(xml) ? parseAtomFeed_default(xml, opts) : null;
};

// user-data-manager/v2/feed.ts
var globalFeedConfig = {
  url: (rawUrl) => rawUrl
};
function parseDuration(duration) {
  if (typeof duration === "number" && duration >= 60) {
    return duration;
  }
  duration = String(duration);
  let arr = duration.split(":");
  if (duration.indexOf(".") !== -1) {
    arr = duration.split(".");
  }
  let r = 0;
  const l = arr.length;
  if (l > 3) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const itemNum = Number(item);
    if (isNaN(itemNum)) {
      return 0;
    }
    r += itemNum * Math.pow(60, l - i - 1);
  }
  return r;
}
function readRssURL(url) {
  const targetUrl = globalFeedConfig.url(url);
  return read2(targetUrl, {
    includeOptionalElements: true,
    xmlParserOptions: {
      removeNSPrefix: true
    },
    extraFeedFields: (data) => {
      return {
        author: getText(data.author),
        image: getPureUrl(data.image)
      };
    },
    extraEntryFields: (data) => {
      return {
        image: getPureUrl(data.image),
        duration: parseDuration(data.duration),
        description: getText(data.description),
        encoded: getText(data.encoded),
        summary: getText(data.summary)
      };
    }
  });
}

// user-data-manager/v2/index.ts
var import_md5 = __toModule(require_md5());

// utils/list.ts
function mergeTwo(arr1, arr2, compare4) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;
    if (!isArr1Depleted && (isArr2Depleted || compare4(arr1[index1], arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
}
function random(max, count) {
  const ret = [];
  let tryTimes = 0;
  while (ret.length < count) {
    ret.push(Math.floor(Math.random() * max));
    tryTimes += 1;
    if (tryTimes >= count * 2) {
      break;
    }
  }
  return ret;
}
function randomElements(list, count = 3) {
  const results = [];
  let tryTimes = 0;
  while (results.length < count) {
    results.push(list[Math.floor(Math.random() * list.length)]);
    tryTimes += 1;
    if (tryTimes >= count * 2) {
      break;
    }
  }
  return results;
}

// utils/task.ts
function runTaskInPool(source, taskGenerator, batchSize = 6, onBatchCompleted) {
  return __async(this, null, function* () {
    if (source.length === 0) {
      return [];
    }
    let done2 = () => {
    };
    let fail2 = (_) => {
    };
    const ret = new Promise((resolve, reject) => {
      done2 = resolve;
      fail2 = reject;
    });
    if (batchSize <= 0) {
      fail2(new Error("size must be greater than 0"));
      return [];
    }
    const results = new Array(source.length);
    let current = -1;
    let scheduled = 0;
    let completed = 0;
    const scheduleTask = (index) => __async(this, null, function* () {
      scheduled += 1;
      return taskGenerator(source[index]).then((r) => {
        results[index] = r;
      }).catch((e) => {
        console.info("pool task error, source", source[index], e);
      }).finally(() => {
        completed += 1;
        if (completed % batchSize === 0) {
          onBatchCompleted == null ? void 0 : onBatchCompleted();
        }
        if (completed === source.length) {
          done2(results);
        }
        if (scheduled !== source.length) {
          scheduleTask(++current);
        }
      });
    });
    for (let i = 0; i < Math.min(batchSize, source.length); i++) {
      scheduleTask(++current);
    }
    return ret;
  });
}

// user-data-manager/v2/index.ts
var UserDataKeyEnum;
(function(UserDataKeyEnum2) {
  UserDataKeyEnum2["Listen"] = "listen";
  UserDataKeyEnum2["Playlist"] = "playlist";
  UserDataKeyEnum2["Favorite"] = "favorite";
  UserDataKeyEnum2["Subscribe"] = "subscribe";
  UserDataKeyEnum2["CurrentEpisodeId"] = "currentEpisodeId";
})(UserDataKeyEnum || (UserDataKeyEnum = {}));
var UserDataKeyPrefix = "@lingjiangtai/user-data/";
var CacheDataKeyPrefix = "@lingjiangtai/cache-data/";
function userDataKey(key) {
  return `${UserDataKeyPrefix}${key}`;
}
function cacheDataKey(key) {
  return `${CacheDataKeyPrefix}${key}`;
}
function episodeDataKey(id) {
  return `episode/${id}`;
}
function podcastDataKey(id) {
  return `podcast/${id}`;
}
function podcastId(podcast) {
  return (0, import_md5.default)(podcast.url);
}
function episodeIdFromPodcastId(title2, pid) {
  let raw = `${pid}#${title2}`;
  try {
    return (0, import_md5.default)(raw);
  } catch (e) {
    console.error("get episode id err, raw:", raw);
    throw e;
  }
}
function episodeId(episode) {
  const pid = podcastId({
    url: episode.podcast.url
  });
  return episodeIdFromPodcastId(episode.title, pid);
}
function isUserDataKey(key) {
  return key.startsWith(UserDataKeyPrefix);
}
function migrate(userData) {
  return userData;
}
var UserDataManager = class {
  constructor(storage, cacheStorage, debug2 = false) {
    this.debug = false;
    this.debug = debug2;
    this.userStorage = storage;
    this.cacheStorage = cacheStorage;
  }
  getData(key, storage) {
    return __async(this, null, function* () {
      return storage.getObject(key);
    });
  }
  getMultiData(keys2, storage) {
    return __async(this, null, function* () {
      const data = yield storage.multiGet(keys2);
      const ret = {};
      data.forEach(([key, value]) => {
        const url = key.split("/").slice(3).join("/");
        if (!url) {
          return;
        }
        ret[url] = value;
      });
      return ret;
    });
  }
  getUserData(key) {
    return __async(this, null, function* () {
      return this.getData(userDataKey(key), this.userStorage);
    });
  }
  getMultiUserData(keys2) {
    return __async(this, null, function* () {
      return this.getMultiData(keys2.map((i) => userDataKey(i)), this.userStorage);
    });
  }
  setUserData(key, data) {
    return __async(this, null, function* () {
      return this.userStorage.setObject(userDataKey(key), data);
    });
  }
  getCacheData(key) {
    return __async(this, null, function* () {
      const keys2 = Array.isArray(key) ? key.map((i) => cacheDataKey(i)) : [cacheDataKey(key)];
      return this.getMultiData(keys2, this.cacheStorage);
    });
  }
  setCacheData(key, data) {
    return __async(this, null, function* () {
      return this.cacheStorage.setObject(cacheDataKey(key), data);
    });
  }
  setPodcastCacheData(podcast) {
    return __async(this, null, function* () {
      const key = podcastDataKey(podcast.id);
      return this.setCacheData(key, podcast);
    });
  }
  getPodcastCacheData(ids) {
    return __async(this, null, function* () {
      const keys2 = ids.map((i) => podcastDataKey(i));
      return yield this.getCacheData(keys2);
    });
  }
  getEpisodeUserData(ids) {
    return __async(this, null, function* () {
      const keys2 = ids.map((i) => episodeDataKey(i));
      return yield this.getMultiUserData(keys2);
    });
  }
  setEpisodeUserData(episode) {
    return __async(this, null, function* () {
      const key = episodeDataKey(episode.id);
      if (yield this.getUserData(key)) {
        return true;
      }
      return yield this.setUserData(key, episode);
    });
  }
  loadUserData(content) {
    return __async(this, null, function* () {
      let data = {};
      try {
        data = migrate(JSON.parse(content));
      } catch (e) {
        throw "invalid content";
      }
      const tasks = [];
      Object.entries(data).forEach(([key, value]) => {
        tasks.push(this.userStorage.setObject(key, value));
      });
      yield Promise.all(tasks);
    });
  }
  dumpUserData() {
    return __async(this, null, function* () {
      const uData = {};
      const allKeys = yield this.userStorage.getAllKeys();
      const allUserDataKeys = allKeys.filter((i) => isUserDataKey(i));
      if (allUserDataKeys.length === 0) {
        return {};
      }
      const tasks = allUserDataKeys.map((key) => __async(this, null, function* () {
        const data = yield this.userStorage.getObject(key);
        uData[key] = data;
      }));
      yield Promise.all(tasks);
      return uData;
    });
  }
  setPlaylist(playlist) {
    return __async(this, null, function* () {
      const urls = [];
      yield Promise.all(playlist.map((i) => {
        urls.push(i.id);
        return this.setEpisodeUserData(i);
      }));
      yield this.setUserData(UserDataKeyEnum.Playlist, urls);
    });
  }
  getPlaylist() {
    return __async(this, null, function* () {
      const ids = yield this.getUserData(UserDataKeyEnum.Playlist);
      if (!Array.isArray(ids)) {
        return [];
      }
      const listenData = yield this.getUserData(UserDataKeyEnum.Listen);
      const ret = [];
      const tasks = ids.map((i) => __async(this, null, function* () {
        const episodeKey = episodeDataKey(i);
        const episode = yield this.getUserData(episodeKey);
        if (!episode) {
          return;
        }
        const item = __spreadProps(__spreadValues({}, episode), { listenInfo: listenData == null ? void 0 : listenData[i] });
        ret.push(item);
      }));
      yield Promise.all(tasks);
      return ret;
    });
  }
  getSubscribeData() {
    return __async(this, null, function* () {
      const subscribe = (yield this.getUserData(UserDataKeyEnum.Subscribe)) || {};
      return subscribe;
    });
  }
  getFavoriteData() {
    return __async(this, null, function* () {
      const fav = (yield this.getUserData(UserDataKeyEnum.Favorite)) || {};
      return fav;
    });
  }
  getListenData() {
    return __async(this, null, function* () {
      return (yield this.getUserData(UserDataKeyEnum.Listen)) || {};
    });
  }
  feeds(count, options) {
    return __async(this, null, function* () {
      const {
        cacheOnly = false,
        fetchRssTimeout = 3e3,
        refreshAll = false,
        waitSaveCache = true,
        batchSize = 6,
        originalFeeds = [],
        onBatchCompleted
      } = options || {};
      const subscribe = yield this.getSubscribeData();
      const podcastIds = Object.keys(subscribe);
      let podcastData = {};
      let podcastIdsToFetch = podcastIds;
      if (!refreshAll) {
        podcastData = yield this.getPodcastCacheData(podcastIds);
        if (cacheOnly) {
          podcastIdsToFetch = [];
        } else {
          podcastIdsToFetch = podcastIds.filter((i) => !podcastData[i]);
        }
      }
      let episodes = originalFeeds;
      const handleBatchCompleted = () => {
        onBatchCompleted == null ? void 0 : onBatchCompleted(episodes);
      };
      const append = (podcast) => {
        if (!podcast) {
          return;
        }
        const newEpisodes = podcast.episodes || [];
        episodes = mergeTwo(episodes.filter((i) => i.podcast.id !== podcast.id), newEpisodes, (a, b) => a.pubTime > b.pubTime);
      };
      Object.values(podcastData).forEach(append);
      console.info("load feeds in task pool, task count:", podcastIdsToFetch.length);
      yield runTaskInPool(podcastIdsToFetch, (id) => {
        return new Promise((resolve) => {
          const { url } = subscribe[id];
          console.info("subscribe podcast not found in cache:", url);
          this.fetchPodcastRSS(url, waitSaveCache, fetchRssTimeout).then((data) => {
            append(data);
            resolve(data);
          }).catch((e) => {
            console.info(`[ERROR] fetch subscribe podcast: ${url}, err:`, e);
            resolve(null);
          });
        });
      }, batchSize, handleBatchCompleted);
      return episodes.slice(0, count);
    });
  }
  isSubscribed(id) {
    return __async(this, null, function* () {
      const data = yield this.getUserData(UserDataKeyEnum.Subscribe);
      return !!(data == null ? void 0 : data[id]);
    });
  }
  subscribedPodcasts() {
    return __async(this, null, function* () {
      const subscribe = yield this.getSubscribeData();
      const ids = Object.keys(subscribe);
      const podcasts = yield this.getPodcastCacheData(ids);
      ids.sort((a, b) => subscribe[a].subscribeTime - subscribe[b].subscribeTime);
      return ids.map((i) => podcasts[i]);
    });
  }
  subscribe(podcasts) {
    return __async(this, null, function* () {
      const subscribe = yield this.getSubscribeData();
      podcasts.forEach((i) => {
        const id = i.id;
        const before = !!subscribe[id];
        if (before) {
          return;
        }
        subscribe[id] = {
          url: i.url,
          image: i.image,
          subscribeTime: Math.floor(Date.now() / 1e3)
        };
      });
      yield this.setUserData(UserDataKeyEnum.Subscribe, subscribe);
    });
  }
  toggleSubscribe(podcast) {
    return __async(this, null, function* () {
      const id = podcast.id;
      const subscribe = yield this.getSubscribeData();
      const before = !!subscribe[id];
      if (before) {
        delete subscribe[id];
      } else {
        subscribe[id] = {
          url: podcast.url,
          image: podcast.image,
          subscribeTime: Math.floor(Date.now() / 1e3)
        };
      }
      yield this.setUserData(UserDataKeyEnum.Subscribe, subscribe);
      return [!before, id];
    });
  }
  isFavorite(id) {
    return __async(this, null, function* () {
      const data = yield this.getFavoriteData();
      return !!(data == null ? void 0 : data[id]);
    });
  }
  favoriteEpisodes(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const favorites = yield this.getFavoriteData();
      const allIds = Object.keys(favorites).sort((a, b) => favorites[a].favoriteTime - favorites[b].favoriteTime);
      if (allIds.length === 0) {
        return [];
      }
      const ids = allIds.slice(offset, offset + limit);
      const episodes = yield this.getEpisodeUserData(ids);
      const ret = [];
      ids.forEach((i) => {
        const episode = episodes[i];
        const fav = favorites[i];
        if (!episode || !fav) {
          return;
        }
        ret.push(__spreadProps(__spreadValues({}, episode), {
          favoriteInfo: fav
        }));
      });
      return ret.sort((a, b) => b.favoriteInfo.favoriteTime - a.favoriteInfo.favoriteTime);
    });
  }
  toggleFavorite(episode) {
    return __async(this, null, function* () {
      const id = episode.id;
      const fav = yield this.getFavoriteData();
      const before = !!(fav == null ? void 0 : fav[id]);
      if (before) {
        delete fav[id];
      } else {
        fav[id] = { favoriteTime: Math.floor(Date.now() / 1e3) };
        yield this.setEpisodeUserData(episode);
      }
      yield this.setUserData(UserDataKeyEnum.Favorite, fav);
      return !before;
    });
  }
  listen(episode, position) {
    return __async(this, null, function* () {
      const id = episode.id;
      const listenData = yield this.getListenData();
      listenData[id] = {
        position,
        duration: 0,
        lastTouchTime: Math.floor(Date.now() / 1e3)
      };
      yield this.setUserData(UserDataKeyEnum.Listen, listenData);
      yield this.setEpisodeUserData(episode);
      return listenData[id];
    });
  }
  removeListen(id) {
    return __async(this, null, function* () {
      const listenData = yield this.getListenData();
      delete listenData[id];
      yield this.setUserData(UserDataKeyEnum.Listen, listenData);
    });
  }
  loadHistory(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const listenData = yield this.getListenData();
      const episodeIds = Object.keys(listenData).sort((a, b) => {
        const liA = listenData[a];
        const liB = listenData[b];
        return ((liB == null ? void 0 : liB.lastTouchTime) || 0) - ((liA == null ? void 0 : liA.lastTouchTime) || 0);
      }).slice(offset, offset + limit);
      const ret = [];
      const episodes = yield this.getEpisodeUserData(episodeIds);
      episodeIds.forEach((i) => {
        const episode = episodes[i];
        if (!episode || !listenData[i]) {
          return;
        }
        ret.push(__spreadProps(__spreadValues({}, episode), {
          listenInfo: listenData[i]
        }));
      });
      return ret;
    });
  }
  clearCacheData() {
    return __async(this, null, function* () {
      return this.cacheStorage.clear();
    });
  }
  clearUserData() {
    return __async(this, null, function* () {
      return this.userStorage.clear();
    });
  }
  clearUserDataByKey(key) {
    return __async(this, null, function* () {
      return this.userStorage.removeObject(userDataKey(key));
    });
  }
  autoClearUserData() {
    return __async(this, null, function* () {
      const keys2 = yield this.userStorage.getAllKeys();
      const keysToRemove = [];
      const ePrefix = `${UserDataKeyPrefix}episode/`;
      const playlist = yield this.getUserData(UserDataKeyEnum.Playlist);
      const tasks = keys2.map((k) => __async(this, null, function* () {
        if (k.startsWith(ePrefix)) {
          const url = k.slice(ePrefix.length);
          const listenData = yield this.getListenData();
          if (listenData[url]) {
            return;
          }
          const isFav = yield this.isFavorite(url);
          if (isFav) {
            return;
          }
          if (playlist == null ? void 0 : playlist.includes(url)) {
            return;
          }
          keysToRemove.push(k);
        }
      }));
      yield Promise.all(tasks);
      return this.userStorage.multiRemove(keysToRemove);
    });
  }
  fetchPodcastRSS(rssURL, waitCacheSave = false, timeout = 3e4) {
    return __async(this, null, function* () {
      console.info("start fetch rss:", rssURL);
      const start = Date.now();
      const data = yield Promise.race([
        new Promise((_resolve, reject) => setTimeout(() => reject(new Error("Timeout")), timeout)),
        readRssURL(rssURL)
      ]);
      console.info("success fetch rss:", rssURL, "title:", data.title, "time:", Date.now() - start);
      const id = podcastId({ url: rssURL });
      const podcast = {
        id,
        url: rssURL,
        image: data.image || "",
        title: data.title || "<UNKNOWN>",
        author: data.author || "",
        description: data.description || "",
        summary: "",
        lastSyncTime: Date.now(),
        episodes: []
      };
      (data.entries || []).forEach((i) => {
        var _a, _b, _c;
        const description = i.encoded || i.description || i.summary || "";
        const title2 = i.title;
        if (!title2) {
          return;
        }
        podcast.episodes.push({
          id: episodeIdFromPodcastId(title2, id),
          title: title2,
          artwork: i.image || "",
          description,
          pubTime: i.published ? new Date(i.published).getTime() : 0,
          url: ((_a = i.enclosure) == null ? void 0 : _a.url) || "",
          type: ((_b = i.enclosure) == null ? void 0 : _b.type) || "",
          length: ((_c = i.enclosure) == null ? void 0 : _c.length) || 0,
          duration: i.duration || 0,
          podcast: {
            id,
            url: rssURL,
            image: podcast.image,
            title: podcast.title,
            author: podcast.author
          }
        });
      });
      podcast.episodes.sort((a, b) => b.pubTime - a.pubTime);
      if (waitCacheSave) {
        yield this.setPodcastCacheData(podcast);
      } else {
        this.setPodcastCacheData(podcast);
      }
      return podcast;
    });
  }
  getPodcastData(rssUrl, waitSaveCache = false, timeout = 3e4) {
    return __async(this, null, function* () {
      const id = podcastId({ url: rssUrl });
      const podcasts = yield this.getPodcastCacheData([id]);
      if (podcasts[id]) {
        return podcasts[id];
      }
      const data = yield this.fetchPodcastRSS(rssUrl, waitSaveCache, timeout);
      return data;
    });
  }
  getEpisodeData(rssUrl, id) {
    return __async(this, null, function* () {
      const episodes = yield this.getEpisodeUserData([id]);
      if (episodes[id]) {
        return episodes[id];
      }
      const podcast = yield this.getPodcastData(rssUrl);
      if (podcast) {
        return podcast.episodes.find((i) => i.id === id);
      }
    });
  }
  getRandomEpisodes(limit) {
    return __async(this, null, function* () {
      const randomPodcastKeys = yield this.cacheStorage.getAllKeys(limit);
      const podcasts = yield this.getMultiData(randomPodcastKeys, this.cacheStorage);
      const ret = [];
      let tryTimes = 0;
      while (ret.length < limit) {
        for (let podcast of Object.values(podcasts)) {
          const idx = Math.floor(Math.random() * podcast.episodes.length);
          const ep = podcast.episodes[idx];
          if (!ret.find((i) => i.id === ep.id)) {
            ret.push(ep);
          }
          if (ret.length === limit) {
            break;
          }
        }
        tryTimes += 1;
        if (tryTimes >= 2 * limit) {
          break;
        }
      }
      return ret;
    });
  }
  setCurrentEpisode(episode) {
    return __async(this, null, function* () {
      return this.userStorage.setObject(userDataKey(UserDataKeyEnum.CurrentEpisodeId), episode.id);
    });
  }
  getCurrentEpisodeId() {
    return __async(this, null, function* () {
      const id = yield this.userStorage.getObject(userDataKey(UserDataKeyEnum.CurrentEpisodeId));
      return id;
    });
  }
};

// utils/link.ts
function episodeLink(episode) {
  return `https://www.lingjiangtai.com/episode?rss=${encodeURIComponent(episode.podcast.url)}&id=${episode.id}&src=app-share`;
}

// utils/hooks.ts
var import_react = __toModule(require("react"));
function usePromiseResult(task) {
  const [err2, setErr] = (0, import_react.useState)("");
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [data, setData] = (0, import_react.useState)(null);
  const reload = (0, import_react.useCallback)(() => {
    setLoading(true);
    setErr("");
    task().then((ret) => {
      setData(ret);
    }).catch((e) => {
      console.error(e);
      let msg = "err";
      if (typeof e === "string") {
        msg = e;
      }
      if (e instanceof Error) {
        msg = e.message;
      }
      setErr(msg);
    }).finally(() => {
      setLoading(false);
    });
  }, [task]);
  (0, import_react.useEffect)(() => {
    reload();
  }, [reload]);
  return { err: err2, loading, data, reload };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Api,
  ContentType,
  HttpClient,
  episodeLink,
  getPureUrl,
  globalFeedConfig,
  mergeTwo,
  random,
  randomElements,
  runTaskInPool,
  usePromiseResult,
  v2
});
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*! https://mths.be/punycode v1.4.1 by @mathias */
