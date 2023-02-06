import { b as useRouterLinkProps, h as useRouterLink, Q as QIcon, d as useAlignProps, f as useAlign, j as getNormalizedVNodes } from "./use-router-link.f56975ac.js";
import { c as createComponent, e as hMergeSlot, h as hSlot } from "./render.2c6f0e6d.js";
import { c as computed, h, g as getCurrentInstance } from "./index.c9c99a36.js";
import { u as useDarkProps, a as useDark } from "./QItem.d72dec2c.js";
import { b as axios } from "./index.b7f28e66.js";
var QBreadcrumbsEl = createComponent({
  name: "QBreadcrumbsEl",
  props: {
    ...useRouterLinkProps,
    label: String,
    icon: String,
    tag: {
      type: String,
      default: "span"
    }
  },
  emits: ["click"],
  setup(props, { slots }) {
    const { linkTag, linkAttrs, linkClass, navigateOnClick } = useRouterLink();
    const data = computed(() => {
      return {
        class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (props.disable !== true ? "q-link--focusable" + linkClass.value : "q-breadcrumbs__el--disable"),
        ...linkAttrs.value,
        onClick: navigateOnClick
      };
    });
    const iconClass = computed(
      () => "q-breadcrumbs__el-icon" + (props.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : "")
    );
    return () => {
      const child = [];
      props.icon !== void 0 && child.push(
        h(QIcon, {
          class: iconClass.value,
          name: props.icon
        })
      );
      props.label !== void 0 && child.push(props.label);
      return h(
        linkTag.value,
        { ...data.value },
        hMergeSlot(slots.default, child)
      );
    };
  }
});
const disabledValues = ["", true];
var QBreadcrumbs = createComponent({
  name: "QBreadcrumbs",
  props: {
    ...useAlignProps,
    separator: {
      type: String,
      default: "/"
    },
    separatorColor: String,
    activeColor: {
      type: String,
      default: "primary"
    },
    gutter: {
      type: String,
      validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
      default: "sm"
    }
  },
  setup(props, { slots }) {
    const alignClass = useAlign(props);
    const classes = computed(
      () => `flex items-center ${alignClass.value}${props.gutter === "none" ? "" : ` q-gutter-${props.gutter}`}`
    );
    const sepClass = computed(() => props.separatorColor ? ` text-${props.separatorColor}` : "");
    const activeClass = computed(() => ` text-${props.activeColor}`);
    return () => {
      const vnodes = getNormalizedVNodes(
        hSlot(slots.default)
      );
      if (vnodes.length === 0) {
        return;
      }
      let els = 1;
      const child = [], len = vnodes.filter((c) => c.type !== void 0 && c.type.name === "QBreadcrumbsEl").length, separator = slots.separator !== void 0 ? slots.separator : () => props.separator;
      vnodes.forEach((comp) => {
        if (comp.type !== void 0 && comp.type.name === "QBreadcrumbsEl") {
          const middle = els < len;
          const disabled = comp.props !== null && disabledValues.includes(comp.props.disable);
          const cls = (middle === true ? "" : " q-breadcrumbs--last") + (disabled !== true && middle === true ? activeClass.value : "");
          els++;
          child.push(
            h("div", {
              class: `flex items-center${cls}`
            }, [comp])
          );
          if (middle === true) {
            child.push(
              h("div", {
                class: "q-breadcrumbs__separator" + sepClass.value
              }, separator())
            );
          }
        } else {
          child.push(comp);
        }
      });
      return h("div", {
        class: "q-breadcrumbs"
      }, [
        h("div", { class: classes.value }, child)
      ]);
    };
  }
});
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = computed(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dist = {};
var JobSearch$1 = {};
var RequestFactory$1 = {};
var ClientFactory = {};
var config = {};
Object.defineProperty(config, "__esModule", { value: true });
config.baseUrl = config.hasSetting = config.allSettings = void 0;
var allSettings = function() {
  var config2 = window.JobStatusConfig || {};
  if (isSettingConfig(config2)) {
    return config2;
  } else {
    throw new Error("Have you forgotten to share the config with the frontend?");
  }
};
config.allSettings = allSettings;
function isSettingConfig(config2) {
  return config2.baseUrl !== void 0;
}
var hasSetting = function(key) {
  return allSettings().hasOwnProperty(key);
};
config.hasSetting = hasSetting;
var baseUrl = function() {
  return allSettings().baseUrl;
};
config.baseUrl = baseUrl;
Object.defineProperty(ClientFactory, "__esModule", { value: true });
var axios_1 = axios;
var config_1 = config;
function handle(request) {
  var config2 = {
    url: request.url,
    method: request.method,
    baseURL: (0, config_1.baseUrl)()
  };
  var data = request.data;
  if (Object.keys(data).length > 0) {
    config2.data = data;
  }
  if (request.bypassAuth) {
    config2.params = Object.assign(config2.params || {}, {
      bypassAuth: request.bypassAuth
    });
  }
  return axios_1.default.request(config2);
}
ClientFactory.default = handle;
var Notifier$1 = {};
var HandlerManager = {};
var poll = {};
var Listener$1 = {};
Object.defineProperty(Listener$1, "__esModule", { value: true });
var Listener = function() {
  function Listener2(listenerId, stopListening) {
    this._listenerId = listenerId;
    this._stopListening = stopListening;
  }
  Listener2.prototype.stop = function() {
    this._stopListening(this._listenerId);
  };
  return Listener2;
}();
Listener$1.default = Listener;
Object.defineProperty(poll, "__esModule", { value: true });
var ClientFactory_1$1 = ClientFactory;
var Listener_1 = Listener$1;
var Poll = function() {
  function Poll2() {
    this._ids = [];
    this.loading = [];
  }
  Poll2.prototype.handle = function(request, handler) {
    var _this = this;
    var listenerId = setInterval(function() {
      _this.handleRun(request, handler);
    }, 2e3).toString();
    this._ids.push(listenerId);
    this.handleRun(request, handler);
    return new Listener_1.default(listenerId, function(listenerId2) {
      _this.stopHandling(listenerId2);
    });
  };
  Poll2.prototype.stopHandling = function(handleId) {
    clearInterval(handleId);
  };
  Poll2.prototype.handleRun = function(request, handler) {
    var isFirstLoad = !this.loading.includes(handler.id);
    if (isFirstLoad) {
      this.loading.push(handler.id);
      handler.triggerStartingInitialLoad();
    }
    handler.triggerStartingUpdate();
    (0, ClientFactory_1$1.default)(request).then(function(response) {
      handler.triggerUpdated(response.data);
    }).catch(function(error) {
      handler.triggerErrored(error);
    }).finally(function() {
      handler.triggerFinishingUpdate();
      if (isFirstLoad) {
        handler.triggerFinishingInitialLoad();
      }
    });
  };
  return Poll2;
}();
poll.default = Poll;
Object.defineProperty(HandlerManager, "__esModule", { value: true });
HandlerManager.resolveHandler = void 0;
var poll_1 = poll;
function resolveHandler(request) {
  return new poll_1.default();
}
HandlerManager.resolveHandler = resolveHandler;
var commonjsBrowser = {};
var v1$1 = {};
var rng$1 = {};
Object.defineProperty(rng$1, "__esModule", {
  value: true
});
rng$1.default = rng;
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var stringify$1 = {};
var validate$1 = {};
var regex = {};
Object.defineProperty(regex, "__esModule", {
  value: true
});
regex.default = void 0;
var _default$c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
regex.default = _default$c;
Object.defineProperty(validate$1, "__esModule", {
  value: true
});
validate$1.default = void 0;
var _regex = _interopRequireDefault$8(regex);
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function validate(uuid) {
  return typeof uuid === "string" && _regex.default.test(uuid);
}
var _default$b = validate;
validate$1.default = _default$b;
Object.defineProperty(stringify$1, "__esModule", {
  value: true
});
stringify$1.default = void 0;
stringify$1.unsafeStringify = unsafeStringify;
var _validate$2 = _interopRequireDefault$7(validate$1);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!(0, _validate$2.default)(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var _default$a = stringify;
stringify$1.default = _default$a;
Object.defineProperty(v1$1, "__esModule", {
  value: true
});
v1$1.default = void 0;
var _rng$1 = _interopRequireDefault$6(rng$1);
var _stringify$2 = stringify$1;
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
let _nodeId;
let _clockseq;
let _lastMSecs = 0;
let _lastNSecs = 0;
function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng$1.default)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || (0, _stringify$2.unsafeStringify)(b);
}
var _default$9 = v1;
v1$1.default = _default$9;
var v3$1 = {};
var v35$1 = {};
var parse$1 = {};
Object.defineProperty(parse$1, "__esModule", {
  value: true
});
parse$1.default = void 0;
var _validate$1 = _interopRequireDefault$5(validate$1);
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function parse(uuid) {
  if (!(0, _validate$1.default)(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var _default$8 = parse;
parse$1.default = _default$8;
Object.defineProperty(v35$1, "__esModule", {
  value: true
});
v35$1.URL = v35$1.DNS = void 0;
v35$1.default = v35;
var _stringify$1 = stringify$1;
var _parse = _interopRequireDefault$4(parse$1);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
v35$1.DNS = DNS;
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
v35$1.URL = URL;
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = (0, _parse.default)(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return (0, _stringify$1.unsafeStringify)(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
var md5$1 = {};
Object.defineProperty(md5$1, "__esModule", {
  value: true
});
md5$1.default = void 0;
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = "0123456789abcdef";
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 255;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var _default$7 = md5;
md5$1.default = _default$7;
Object.defineProperty(v3$1, "__esModule", {
  value: true
});
v3$1.default = void 0;
var _v$1 = _interopRequireDefault$3(v35$1);
var _md = _interopRequireDefault$3(md5$1);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const v3 = (0, _v$1.default)("v3", 48, _md.default);
var _default$6 = v3;
v3$1.default = _default$6;
var v4$1 = {};
var native = {};
Object.defineProperty(native, "__esModule", {
  value: true
});
native.default = void 0;
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default$5 = {
  randomUUID
};
native.default = _default$5;
Object.defineProperty(v4$1, "__esModule", {
  value: true
});
v4$1.default = void 0;
var _native = _interopRequireDefault$2(native);
var _rng = _interopRequireDefault$2(rng$1);
var _stringify = stringify$1;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || _rng.default)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(rnds);
}
var _default$4 = v4;
v4$1.default = _default$4;
var v5$1 = {};
var sha1$1 = {};
Object.defineProperty(sha1$1, "__esModule", {
  value: true
});
sha1$1.default = void 0;
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782];
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var _default$3 = sha1;
sha1$1.default = _default$3;
Object.defineProperty(v5$1, "__esModule", {
  value: true
});
v5$1.default = void 0;
var _v = _interopRequireDefault$1(v35$1);
var _sha = _interopRequireDefault$1(sha1$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const v5 = (0, _v.default)("v5", 80, _sha.default);
var _default$2 = v5;
v5$1.default = _default$2;
var nil = {};
Object.defineProperty(nil, "__esModule", {
  value: true
});
nil.default = void 0;
var _default$1 = "00000000-0000-0000-0000-000000000000";
nil.default = _default$1;
var version$1 = {};
Object.defineProperty(version$1, "__esModule", {
  value: true
});
version$1.default = void 0;
var _validate = _interopRequireDefault(validate$1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var _default = version;
version$1.default = _default;
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "NIL", {
    enumerable: true,
    get: function get() {
      return _nil.default;
    }
  });
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return _parse2.default;
    }
  });
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function get() {
      return _stringify2.default;
    }
  });
  Object.defineProperty(exports, "v1", {
    enumerable: true,
    get: function get() {
      return _v2.default;
    }
  });
  Object.defineProperty(exports, "v3", {
    enumerable: true,
    get: function get() {
      return _v22.default;
    }
  });
  Object.defineProperty(exports, "v4", {
    enumerable: true,
    get: function get() {
      return _v3.default;
    }
  });
  Object.defineProperty(exports, "v5", {
    enumerable: true,
    get: function get() {
      return _v4.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function get() {
      return _validate2.default;
    }
  });
  Object.defineProperty(exports, "version", {
    enumerable: true,
    get: function get() {
      return _version.default;
    }
  });
  var _v2 = _interopRequireDefault2(v1$1);
  var _v22 = _interopRequireDefault2(v3$1);
  var _v3 = _interopRequireDefault2(v4$1);
  var _v4 = _interopRequireDefault2(v5$1);
  var _nil = _interopRequireDefault2(nil);
  var _version = _interopRequireDefault2(version$1);
  var _validate2 = _interopRequireDefault2(validate$1);
  var _stringify2 = _interopRequireDefault2(stringify$1);
  var _parse2 = _interopRequireDefault2(parse$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
})(commonjsBrowser);
Object.defineProperty(Notifier$1, "__esModule", { value: true });
var HandlerManager_1 = HandlerManager;
var uuid_1 = commonjsBrowser;
var Notifier = function() {
  function Notifier2(request) {
    this._onStartingInitialLoad = [];
    this._onFinishingInitialLoad = [];
    this._onStartingUpdate = [];
    this._onFinishingUpdate = [];
    this._onUpdated = [];
    this._onErrored = [];
    this._request = request;
    this.id = (0, uuid_1.v4)();
  }
  Notifier2.prototype.onStartingInitialLoad = function(handler) {
    this._onStartingInitialLoad.push(handler);
    return this;
  };
  Notifier2.prototype.triggerStartingInitialLoad = function() {
    for (var _i = 0, _a = this._onStartingInitialLoad; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback();
    }
  };
  Notifier2.prototype.onFinishingInitialLoad = function(handler) {
    this._onFinishingInitialLoad.push(handler);
    return this;
  };
  Notifier2.prototype.triggerFinishingInitialLoad = function() {
    for (var _i = 0, _a = this._onFinishingInitialLoad; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback();
    }
  };
  Notifier2.prototype.onStartingUpdate = function(handler) {
    this._onStartingUpdate.push(handler);
    return this;
  };
  Notifier2.prototype.triggerStartingUpdate = function() {
    for (var _i = 0, _a = this._onStartingUpdate; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback();
    }
  };
  Notifier2.prototype.onFinishingUpdate = function(handler) {
    this._onFinishingUpdate.push(handler);
    return this;
  };
  Notifier2.prototype.triggerFinishingUpdate = function() {
    for (var _i = 0, _a = this._onFinishingUpdate; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback();
    }
  };
  Notifier2.prototype.onUpdated = function(handler) {
    this._onUpdated.push(handler);
    return this;
  };
  Notifier2.prototype.triggerUpdated = function(newResults) {
    for (var _i = 0, _a = this._onUpdated; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(newResults);
    }
  };
  Notifier2.prototype.onErrored = function(handler) {
    this._onErrored.push(handler);
    return this;
  };
  Notifier2.prototype.triggerErrored = function(error) {
    for (var _i = 0, _a = this._onErrored; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(error);
    }
  };
  Notifier2.prototype.start = function() {
    var handler = (0, HandlerManager_1.resolveHandler)(this._request);
    return handler.handle(this._request, this);
  };
  return Notifier2;
}();
Notifier$1.default = Notifier;
Object.defineProperty(RequestFactory$1, "__esModule", { value: true });
var ClientFactory_1 = ClientFactory;
var Notifier_1 = Notifier$1;
var RequestFactory = function() {
  function RequestFactory2() {
    this._bypassAuth = false;
  }
  RequestFactory2.prototype.listen = function() {
    var request = this.create();
    request.bypassAuth = this._bypassAuth;
    return new Notifier_1.default(request);
  };
  RequestFactory2.prototype.bypassAuth = function() {
    this._bypassAuth = true;
    return this;
  };
  RequestFactory2.prototype.send = function() {
    var request = this.create();
    request.bypassAuth = this._bypassAuth;
    return (0, ClientFactory_1.default)(request);
  };
  return RequestFactory2;
}();
RequestFactory$1.default = RequestFactory;
var Request$1 = {};
Object.defineProperty(Request$1, "__esModule", { value: true });
var Request = function() {
  function Request2(url, method) {
    this._bypassAuth = false;
    this._data = {};
    this._url = url;
    this._method = method;
  }
  Object.defineProperty(Request2.prototype, "bypassAuth", {
    get: function() {
      return this._bypassAuth;
    },
    set: function(value) {
      this._bypassAuth = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Request2.prototype, "url", {
    get: function() {
      return this._url;
    },
    set: function(value) {
      this._url = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Request2.prototype, "method", {
    get: function() {
      return this._method;
    },
    set: function(value) {
      this._method = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Request2.prototype, "data", {
    get: function() {
      return this._data;
    },
    set: function(value) {
      this._data = value;
    },
    enumerable: false,
    configurable: true
  });
  return Request2;
}();
Request$1.default = Request;
var __extends$a = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(JobSearch$1, "__esModule", { value: true });
var RequestFactory_1$9 = RequestFactory$1;
var Request_1$9 = Request$1;
var JobSearch = function(_super) {
  __extends$a(JobSearch2, _super);
  function JobSearch2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  JobSearch2.prototype.create = function() {
    return new Request_1$9.default("/jobs", "GET");
  };
  return JobSearch2;
}(RequestFactory_1$9.default);
JobSearch$1.default = JobSearch;
var JobShow$1 = {};
var __extends$9 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(JobShow$1, "__esModule", { value: true });
var RequestFactory_1$8 = RequestFactory$1;
var Request_1$8 = Request$1;
var JobShow = function(_super) {
  __extends$9(JobShow2, _super);
  function JobShow2(alias) {
    var _this = _super.call(this) || this;
    _this.alias = alias;
    return _this;
  }
  JobShow2.prototype.create = function() {
    return new Request_1$8.default("/jobs/" + this.alias, "GET");
  };
  return JobShow2;
}(RequestFactory_1$8.default);
JobShow$1.default = JobShow;
var BatchSearch$1 = {};
var __extends$8 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(BatchSearch$1, "__esModule", { value: true });
var RequestFactory_1$7 = RequestFactory$1;
var Request_1$7 = Request$1;
var BatchSearch = function(_super) {
  __extends$8(BatchSearch2, _super);
  function BatchSearch2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BatchSearch2.prototype.create = function() {
    return new Request_1$7.default("/batches", "GET");
  };
  return BatchSearch2;
}(RequestFactory_1$7.default);
BatchSearch$1.default = BatchSearch;
var BatchShow$1 = {};
var __extends$7 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(BatchShow$1, "__esModule", { value: true });
var RequestFactory_1$6 = RequestFactory$1;
var Request_1$6 = Request$1;
var BatchShow = function(_super) {
  __extends$7(BatchShow2, _super);
  function BatchShow2(batchId) {
    var _this = _super.call(this) || this;
    _this.batchId = batchId;
    return _this;
  }
  BatchShow2.prototype.create = function() {
    return new Request_1$6.default("/batches/" + this.batchId.toString(), "GET");
  };
  return BatchShow2;
}(RequestFactory_1$6.default);
BatchShow$1.default = BatchShow;
var RunSearch$1 = {};
var __extends$6 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RunSearch$1, "__esModule", { value: true });
var RequestFactory_1$5 = RequestFactory$1;
var Request_1$5 = Request$1;
var RunSearch = function(_super) {
  __extends$6(RunSearch2, _super);
  function RunSearch2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  RunSearch2.prototype.create = function() {
    return new Request_1$5.default("/runs", "GET");
  };
  return RunSearch2;
}(RequestFactory_1$5.default);
RunSearch$1.default = RunSearch;
var RunRetry$1 = {};
var __extends$5 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RunRetry$1, "__esModule", { value: true });
var RequestFactory_1$4 = RequestFactory$1;
var Request_1$4 = Request$1;
var RunRetry = function(_super) {
  __extends$5(RunRetry2, _super);
  function RunRetry2(runId) {
    var _this = _super.call(this) || this;
    _this.runId = runId;
    return _this;
  }
  RunRetry2.prototype.create = function() {
    return new Request_1$4.default("/runs/" + this.runId.toString() + "/retry", "POST");
  };
  return RunRetry2;
}(RequestFactory_1$4.default);
RunRetry$1.default = RunRetry;
var RunSignal$1 = {};
var __extends$4 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RunSignal$1, "__esModule", { value: true });
var RequestFactory_1$3 = RequestFactory$1;
var Request_1$3 = Request$1;
var RunSignal = function(_super) {
  __extends$4(RunSignal2, _super);
  function RunSignal2(runId, signal) {
    var _this = _super.call(this) || this;
    _this.runId = runId;
    _this.signal = signal;
    _this._shouldCancelJob = false;
    return _this;
  }
  RunSignal2.prototype.create = function() {
    var request = new Request_1$3.default("/runs/" + this.runId.toString() + "/signal", "POST");
    request.data = {
      signal: this.signal,
      cancel_job: this._shouldCancelJob
    };
    return request;
  };
  RunSignal2.prototype.shouldCancelJob = function() {
    this._shouldCancelJob = true;
    return this;
  };
  return RunSignal2;
}(RequestFactory_1$3.default);
RunSignal$1.default = RunSignal;
var RunShow$1 = {};
var __extends$3 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RunShow$1, "__esModule", { value: true });
var RequestFactory_1$2 = RequestFactory$1;
var Request_1$2 = Request$1;
var RunShow = function(_super) {
  __extends$3(RunShow2, _super);
  function RunShow2(runId) {
    var _this = _super.call(this) || this;
    _this.runId = runId;
    return _this;
  }
  RunShow2.prototype.create = function() {
    return new Request_1$2.default("/runs/" + this.runId.toString(), "GET");
  };
  return RunShow2;
}(RequestFactory_1$2.default);
RunShow$1.default = RunShow;
var RunCancel$1 = {};
var __extends$2 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RunCancel$1, "__esModule", { value: true });
var RunSignal_1$1 = RunSignal$1;
var RunCancel = function(_super) {
  __extends$2(RunCancel2, _super);
  function RunCancel2(runId) {
    var _this = _super.call(this, runId, "cancel") || this;
    _super.prototype.shouldCancelJob.call(_this);
    return _this;
  }
  return RunCancel2;
}(RunSignal_1$1.default);
RunCancel$1.default = RunCancel;
var QueueSearch$1 = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(QueueSearch$1, "__esModule", { value: true });
var RequestFactory_1$1 = RequestFactory$1;
var Request_1$1 = Request$1;
var QueueSearch = function(_super) {
  __extends$1(QueueSearch2, _super);
  function QueueSearch2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  QueueSearch2.prototype.create = function() {
    return new Request_1$1.default("/queues", "GET");
  };
  return QueueSearch2;
}(RequestFactory_1$1.default);
QueueSearch$1.default = QueueSearch;
var QueueShow$1 = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(QueueShow$1, "__esModule", { value: true });
var RequestFactory_1 = RequestFactory$1;
var Request_1 = Request$1;
var QueueShow = function(_super) {
  __extends(QueueShow2, _super);
  function QueueShow2(queue) {
    var _this = _super.call(this) || this;
    _this.queue = queue;
    return _this;
  }
  QueueShow2.prototype.create = function() {
    return new Request_1.default("/queues/" + this.queue, "GET");
  };
  return QueueShow2;
}(RequestFactory_1.default);
QueueShow$1.default = QueueShow;
Object.defineProperty(dist, "__esModule", { value: true });
var client = dist.client = void 0;
var JobSearch_1 = JobSearch$1;
var JobShow_1 = JobShow$1;
var BatchSearch_1 = BatchSearch$1;
var BatchShow_1 = BatchShow$1;
var RunSearch_1 = RunSearch$1;
var RunRetry_1 = RunRetry$1;
var RunSignal_1 = RunSignal$1;
var RunShow_1 = RunShow$1;
var RunCancel_1 = RunCancel$1;
var QueueSearch_1 = QueueSearch$1;
var QueueShow_1 = QueueShow$1;
client = dist.client = {
  jobs: {
    search: function() {
      return new JobSearch_1.default();
    },
    show: function(alias) {
      return new JobShow_1.default(alias);
    }
  },
  queues: {
    search: function() {
      return new QueueSearch_1.default();
    },
    show: function(queue) {
      return new QueueShow_1.default(queue);
    }
  },
  batches: {
    search: function() {
      return new BatchSearch_1.default();
    },
    show: function(batchId) {
      return new BatchShow_1.default(batchId);
    }
  },
  runs: {
    search: function() {
      return new RunSearch_1.default();
    },
    show: function(runId) {
      return new RunShow_1.default(runId);
    },
    signal: function(runId, signal) {
      return new RunSignal_1.default(runId, signal);
    },
    retry: function(runId) {
      return new RunRetry_1.default(runId);
    },
    cancel: function(runId) {
      return new RunCancel_1.default(runId);
    }
  }
};
export { QBreadcrumbsEl as Q, QBreadcrumbs as a, QSeparator as b, client as c, commonjsGlobal as d };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGRkM2Q2MjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWJzL1FCcmVhZGNydW1ic0VsLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvUUJyZWFkY3J1bWJzLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L2NvbmZpZy9jb25maWcuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L2NsaWVudC9DbGllbnRGYWN0b3J5LmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9saXN0ZW5lci9MaXN0ZW5lci5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvbGFyYXZlbC1qb2Itc3RhdHVzLWpzL2Rpc3QvbGlzdGVuZXIvcG9sbC5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvbGFyYXZlbC1qb2Itc3RhdHVzLWpzL2Rpc3QvbGlzdGVuZXIvSGFuZGxlck1hbmFnZXIuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcmVnZXguanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YxLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9wYXJzZS5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9tZDUuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NS5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9pbmRleC5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvbGFyYXZlbC1qb2Itc3RhdHVzLWpzL2Rpc3QvbGlzdGVuZXIvTm90aWZpZXIuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L2ludGVyZmFjZXMvUmVxdWVzdEZhY3RvcnkuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L2NsaWVudC9SZXF1ZXN0LmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9yZXF1ZXN0cy9qb2JzL0pvYlNlYXJjaC5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvbGFyYXZlbC1qb2Itc3RhdHVzLWpzL2Rpc3QvcmVxdWVzdHMvam9icy9Kb2JTaG93LmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9yZXF1ZXN0cy9iYXRjaGVzL0JhdGNoU2VhcmNoLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9yZXF1ZXN0cy9iYXRjaGVzL0JhdGNoU2hvdy5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvbGFyYXZlbC1qb2Itc3RhdHVzLWpzL2Rpc3QvcmVxdWVzdHMvcnVucy9SdW5TZWFyY2guanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L3JlcXVlc3RzL3J1bnMvUnVuUmV0cnkuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L3JlcXVlc3RzL3J1bnMvUnVuU2lnbmFsLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9yZXF1ZXN0cy9ydW5zL1J1blNob3cuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L3JlcXVlc3RzL3J1bnMvUnVuQ2FuY2VsLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9sYXJhdmVsLWpvYi1zdGF0dXMtanMvZGlzdC9yZXF1ZXN0cy9xdWV1ZXMvUXVldWVTZWFyY2guanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L3JlcXVlc3RzL3F1ZXVlcy9RdWV1ZVNob3cuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL2xhcmF2ZWwtam9iLXN0YXR1cy1qcy9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCcmVhZGNydW1ic0VsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgaWNvbjogU3RyaW5nLFxuXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3BhbidcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBsaW5rVGFnLCBsaW5rQXR0cnMsIGxpbmtDbGFzcywgbmF2aWdhdGVPbkNsaWNrIH0gPSB1c2VSb3V0ZXJMaW5rKClcblxuICAgIGNvbnN0IGRhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzczogJ3EtYnJlYWRjcnVtYnNfX2VsIHEtbGluayAnXG4gICAgICAgICAgKyAnZmxleCBpbmxpbmUgaXRlbXMtY2VudGVyIHJlbGF0aXZlLXBvc2l0aW9uICdcbiAgICAgICAgICArIChwcm9wcy5kaXNhYmxlICE9PSB0cnVlID8gJ3EtbGluay0tZm9jdXNhYmxlJyArIGxpbmtDbGFzcy52YWx1ZSA6ICdxLWJyZWFkY3J1bWJzX19lbC0tZGlzYWJsZScpLFxuICAgICAgICAuLi5saW5rQXR0cnMudmFsdWUsXG4gICAgICAgIG9uQ2xpY2s6IG5hdmlnYXRlT25DbGlja1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpY29uQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYnJlYWRjcnVtYnNfX2VsLWljb24nXG4gICAgICArIChwcm9wcy5sYWJlbCAhPT0gdm9pZCAwID8gJyBxLWJyZWFkY3J1bWJzX19lbC1pY29uLS13aXRoLWxhYmVsJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtdXG5cbiAgICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6IGljb25DbGFzcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5pY29uXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgJiYgY2hpbGQucHVzaChwcm9wcy5sYWJlbClcblxuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIGxpbmtUYWcudmFsdWUsXG4gICAgICAgIHsgLi4uZGF0YS52YWx1ZSB9LFxuICAgICAgICBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQWxpZ24sIHsgdXNlQWxpZ25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFsaWduLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBnZXROb3JtYWxpemVkVk5vZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuY29uc3QgZGlzYWJsZWRWYWx1ZXMgPSBbICcnLCB0cnVlIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCcmVhZGNydW1icycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbGlnblByb3BzLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnLydcbiAgICB9LFxuICAgIHNlcGFyYXRvckNvbG9yOiBTdHJpbmcsXG5cbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcblxuICAgIGd1dHRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ25vbmUnLCAneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnIF0uaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAnc20nXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgYWxpZ25DbGFzcyA9IHVzZUFsaWduKHByb3BzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgZmxleCBpdGVtcy1jZW50ZXIgJHsgYWxpZ25DbGFzcy52YWx1ZSB9JHsgcHJvcHMuZ3V0dGVyID09PSAnbm9uZScgPyAnJyA6IGAgcS1ndXR0ZXItJHsgcHJvcHMuZ3V0dGVyIH1gIH1gXG4gICAgKVxuXG4gICAgY29uc3Qgc2VwQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc2VwYXJhdG9yQ29sb3IgPyBgIHRleHQtJHsgcHJvcHMuc2VwYXJhdG9yQ29sb3IgfWAgOiAnJykpXG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBgIHRleHQtJHsgcHJvcHMuYWN0aXZlQ29sb3IgfWApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3Qgdm5vZGVzID0gZ2V0Tm9ybWFsaXplZFZOb2RlcyhcbiAgICAgICAgaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHZub2Rlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIH1cblxuICAgICAgbGV0IGVscyA9IDFcblxuICAgICAgY29uc3RcbiAgICAgICAgY2hpbGQgPSBbXSxcbiAgICAgICAgbGVuID0gdm5vZGVzLmZpbHRlcihjID0+IGMudHlwZSAhPT0gdm9pZCAwICYmIGMudHlwZS5uYW1lID09PSAnUUJyZWFkY3J1bWJzRWwnKS5sZW5ndGgsXG4gICAgICAgIHNlcGFyYXRvciA9IHNsb3RzLnNlcGFyYXRvciAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90cy5zZXBhcmF0b3JcbiAgICAgICAgICA6ICgpID0+IHByb3BzLnNlcGFyYXRvclxuXG4gICAgICB2bm9kZXMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgaWYgKGNvbXAudHlwZSAhPT0gdm9pZCAwICYmIGNvbXAudHlwZS5uYW1lID09PSAnUUJyZWFkY3J1bWJzRWwnKSB7XG4gICAgICAgICAgY29uc3QgbWlkZGxlID0gZWxzIDwgbGVuXG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBjb21wLnByb3BzICE9PSBudWxsICYmIGRpc2FibGVkVmFsdWVzLmluY2x1ZGVzKGNvbXAucHJvcHMuZGlzYWJsZSlcbiAgICAgICAgICBjb25zdCBjbHMgPSAobWlkZGxlID09PSB0cnVlID8gJycgOiAnIHEtYnJlYWRjcnVtYnMtLWxhc3QnKVxuICAgICAgICAgICAgKyAoZGlzYWJsZWQgIT09IHRydWUgJiYgbWlkZGxlID09PSB0cnVlID8gYWN0aXZlQ2xhc3MudmFsdWUgOiAnJylcblxuICAgICAgICAgIGVscysrXG5cbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogYGZsZXggaXRlbXMtY2VudGVyJHsgY2xzIH1gXG4gICAgICAgICAgICB9LCBbIGNvbXAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlkZGxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLWJyZWFkY3J1bWJzX19zZXBhcmF0b3InICsgc2VwQ2xhc3MudmFsdWVcbiAgICAgICAgICAgICAgfSwgc2VwYXJhdG9yKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnB1c2goY29tcClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWJyZWFkY3J1bWJzJ1xuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGNoaWxkKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgaW5zZXRNYXAgPSB7XG4gIHRydWU6ICdpbnNldCcsXG4gIGl0ZW06ICdpdGVtLWluc2V0JyxcbiAgJ2l0ZW0tdGh1bWJuYWlsJzogJ2l0ZW0tdGh1bWJuYWlsLWluc2V0J1xufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogOCxcbiAgbGc6IDE2LFxuICB4bDogMjRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTZXBhcmF0b3InLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc3BhY2VkOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIGluc2V0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgc2l6ZTogU3RyaW5nXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/ICd2ZXJ0aWNhbCdcbiAgICAgICAgOiAnaG9yaXpvbnRhbCdcbiAgICApKVxuXG4gICAgY29uc3Qgb3JpZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiBgIHEtc2VwYXJhdG9yLS0keyBvcmllbnRhdGlvbi52YWx1ZSB9YClcblxuICAgIGNvbnN0IGluc2V0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbnNldCAhPT0gZmFsc2VcbiAgICAgICAgPyBgJHsgb3JpZW50Q2xhc3MudmFsdWUgfS0keyBpbnNldE1hcFsgcHJvcHMuaW5zZXQgXSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2VwYXJhdG9yJHsgb3JpZW50Q2xhc3MudmFsdWUgfSR7IGluc2V0Q2xhc3MudmFsdWUgfWBcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VwYXJhdG9yLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgaWYgKHByb3BzLnNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2NbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBwcm9wcy5zaXplXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zcGFjZWQgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBwcm9wcy5zcGFjZWQgPT09IHRydWVcbiAgICAgICAgICA/IGAkeyBtYXJnaW5zLm1kIH1weGBcbiAgICAgICAgICA6IHByb3BzLnNwYWNlZCBpbiBtYXJnaW5zID8gYCR7IG1hcmdpbnNbIHByb3BzLnNwYWNlZCBdIH1weGAgOiBwcm9wcy5zcGFjZWRcblxuICAgICAgICBjb25zdCBkaXIgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gWyAnTGVmdCcsICdSaWdodCcgXVxuICAgICAgICAgIDogWyAnVG9wJywgJ0JvdHRvbScgXVxuXG4gICAgICAgIGFjY1sgYG1hcmdpbiR7IGRpclsgMCBdIH1gIF0gPSBhY2NbIGBtYXJnaW4keyBkaXJbIDEgXSB9YCBdID0gc2l6ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdocicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZVxuICAgIH0pXG4gIH1cbn0pXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYmFzZVVybCA9IGV4cG9ydHMuaGFzU2V0dGluZyA9IGV4cG9ydHMuYWxsU2V0dGluZ3MgPSB2b2lkIDA7XG52YXIgYWxsU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHdpbmRvdy5Kb2JTdGF0dXNDb25maWcgfHwge307XG4gICAgaWYgKGlzU2V0dGluZ0NvbmZpZyhjb25maWcpKSB7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhdmUgeW91IGZvcmdvdHRlbiB0byBzaGFyZSB0aGUgY29uZmlnIHdpdGggdGhlIGZyb250ZW5kPycpO1xuICAgIH1cbn07XG5leHBvcnRzLmFsbFNldHRpbmdzID0gYWxsU2V0dGluZ3M7XG5mdW5jdGlvbiBpc1NldHRpbmdDb25maWcoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5iYXNlVXJsICE9PSB1bmRlZmluZWQ7XG59XG52YXIgaGFzU2V0dGluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gYWxsU2V0dGluZ3MoKS5oYXNPd25Qcm9wZXJ0eShrZXkpO1xufTtcbmV4cG9ydHMuaGFzU2V0dGluZyA9IGhhc1NldHRpbmc7XG52YXIgYmFzZVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWxsU2V0dGluZ3MoKS5iYXNlVXJsO1xufTtcbmV4cG9ydHMuYmFzZVVybCA9IGJhc2VVcmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXhpb3NfMSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi9jb25maWcvY29uZmlnXCIpO1xuZnVuY3Rpb24gaGFuZGxlKHJlcXVlc3QpIHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBiYXNlVVJMOiAoMCwgY29uZmlnXzEuYmFzZVVybCkoKSxcbiAgICB9O1xuICAgIHZhciBkYXRhID0gcmVxdWVzdC5kYXRhO1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuYnlwYXNzQXV0aCkge1xuICAgICAgICBjb25maWcucGFyYW1zID0gT2JqZWN0LmFzc2lnbigoY29uZmlnLnBhcmFtcyB8fCB7fSksIHtcbiAgICAgICAgICAgIGJ5cGFzc0F1dGg6IHJlcXVlc3QuYnlwYXNzQXV0aFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGF4aW9zXzEuZGVmYXVsdC5yZXF1ZXN0KGNvbmZpZyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBoYW5kbGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRGYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExpc3RlbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaXN0ZW5lcihsaXN0ZW5lcklkLCBzdG9wTGlzdGVuaW5nKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVySWQgPSBsaXN0ZW5lcklkO1xuICAgICAgICB0aGlzLl9zdG9wTGlzdGVuaW5nID0gc3RvcExpc3RlbmluZztcbiAgICB9XG4gICAgTGlzdGVuZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcodGhpcy5fbGlzdGVuZXJJZCk7XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdGVuZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTGlzdGVuZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaXN0ZW5lci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDbGllbnRGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vY2xpZW50L0NsaWVudEZhY3RvcnlcIik7XG52YXIgTGlzdGVuZXJfMSA9IHJlcXVpcmUoXCIuLi9saXN0ZW5lci9MaXN0ZW5lclwiKTtcbnZhciBQb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2xsKCkge1xuICAgICAgICB0aGlzLl9pZHMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gW107XG4gICAgfVxuICAgIFBvbGwucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBsaXN0ZW5lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlUnVuKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgICB9LCAyMDAwKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLl9pZHMucHVzaChsaXN0ZW5lcklkKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSdW4ocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBuZXcgTGlzdGVuZXJfMS5kZWZhdWx0KGxpc3RlbmVySWQsIGZ1bmN0aW9uIChsaXN0ZW5lcklkKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wSGFuZGxpbmcobGlzdGVuZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9sbC5wcm90b3R5cGUuc3RvcEhhbmRsaW5nID0gZnVuY3Rpb24gKGhhbmRsZUlkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlSWQpO1xuICAgIH07XG4gICAgUG9sbC5wcm90b3R5cGUuaGFuZGxlUnVuID0gZnVuY3Rpb24gKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGlzRmlyc3RMb2FkID0gIXRoaXMubG9hZGluZy5pbmNsdWRlcyhoYW5kbGVyLmlkKTtcbiAgICAgICAgaWYgKGlzRmlyc3RMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcucHVzaChoYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlclN0YXJ0aW5nSW5pdGlhbExvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVyLnRyaWdnZXJTdGFydGluZ1VwZGF0ZSgpO1xuICAgICAgICAoMCwgQ2xpZW50RmFjdG9yeV8xLmRlZmF1bHQpKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlclVwZGF0ZWQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXJFcnJvcmVkKGVycm9yKTtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXJGaW5pc2hpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0TG9hZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlckZpbmlzaGluZ0luaXRpYWxMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFBvbGw7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9sbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlc29sdmVIYW5kbGVyID0gdm9pZCAwO1xudmFyIHBvbGxfMSA9IHJlcXVpcmUoXCIuLi9saXN0ZW5lci9wb2xsXCIpO1xuZnVuY3Rpb24gcmVzb2x2ZUhhbmRsZXIocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgcG9sbF8xLmRlZmF1bHQoKTtcbn1cbmV4cG9ydHMucmVzb2x2ZUhhbmRsZXIgPSByZXNvbHZlSGFuZGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhhbmRsZXJNYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5cbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIF9yZWdleC5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHZhbGlkYXRlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBjb25zdCBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICBjb25zdCBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgY29uc3QgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgY29uc3QgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gIGxldCBiID0gLTI3MTczMzg3OTtcbiAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgbGV0IGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBtZDU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxudmFyIF9kZWZhdWx0ID0gc2hhMTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfc2hhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGExLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3QgdjUgPSAoMCwgX3YuZGVmYXVsdCkoJ3Y1JywgMHg1MCwgX3NoYS5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHY1O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBIYW5kbGVyTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2xpc3RlbmVyL0hhbmRsZXJNYW5hZ2VyXCIpO1xudmFyIHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xudmFyIE5vdGlmaWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmllcihyZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuX29uU3RhcnRpbmdJbml0aWFsTG9hZCA9IFtdO1xuICAgICAgICB0aGlzLl9vbkZpbmlzaGluZ0luaXRpYWxMb2FkID0gW107XG4gICAgICAgIHRoaXMuX29uU3RhcnRpbmdVcGRhdGUgPSBbXTtcbiAgICAgICAgdGhpcy5fb25GaW5pc2hpbmdVcGRhdGUgPSBbXTtcbiAgICAgICAgdGhpcy5fb25VcGRhdGVkID0gW107XG4gICAgICAgIHRoaXMuX29uRXJyb3JlZCA9IFtdO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICAgdGhpcy5pZCA9ICgwLCB1dWlkXzEudjQpKCk7XG4gICAgfVxuICAgIE5vdGlmaWVyLnByb3RvdHlwZS5vblN0YXJ0aW5nSW5pdGlhbExvYWQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9vblN0YXJ0aW5nSW5pdGlhbExvYWQucHVzaChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBOb3RpZmllci5wcm90b3R5cGUudHJpZ2dlclN0YXJ0aW5nSW5pdGlhbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9vblN0YXJ0aW5nSW5pdGlhbExvYWQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfYVtfaV07XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmllci5wcm90b3R5cGUub25GaW5pc2hpbmdJbml0aWFsTG9hZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX29uRmluaXNoaW5nSW5pdGlhbExvYWQucHVzaChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBOb3RpZmllci5wcm90b3R5cGUudHJpZ2dlckZpbmlzaGluZ0luaXRpYWxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fb25GaW5pc2hpbmdJbml0aWFsTG9hZDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IF9hW19pXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGlmaWVyLnByb3RvdHlwZS5vblN0YXJ0aW5nVXBkYXRlID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fb25TdGFydGluZ1VwZGF0ZS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE5vdGlmaWVyLnByb3RvdHlwZS50cmlnZ2VyU3RhcnRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9vblN0YXJ0aW5nVXBkYXRlOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2FbX2ldO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWZpZXIucHJvdG90eXBlLm9uRmluaXNoaW5nVXBkYXRlID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fb25GaW5pc2hpbmdVcGRhdGUucHVzaChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBOb3RpZmllci5wcm90b3R5cGUudHJpZ2dlckZpbmlzaGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX29uRmluaXNoaW5nVXBkYXRlOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2FbX2ldO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWZpZXIucHJvdG90eXBlLm9uVXBkYXRlZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlZC5wdXNoKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE5vdGlmaWVyLnByb3RvdHlwZS50cmlnZ2VyVXBkYXRlZCA9IGZ1bmN0aW9uIChuZXdSZXN1bHRzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9vblVwZGF0ZWQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfYVtfaV07XG4gICAgICAgICAgICBjYWxsYmFjayhuZXdSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWZpZXIucHJvdG90eXBlLm9uRXJyb3JlZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX29uRXJyb3JlZC5wdXNoKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE5vdGlmaWVyLnByb3RvdHlwZS50cmlnZ2VyRXJyb3JlZCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fb25FcnJvcmVkOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2FbX2ldO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmllci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gKDAsIEhhbmRsZXJNYW5hZ2VyXzEucmVzb2x2ZUhhbmRsZXIpKHRoaXMuX3JlcXVlc3QpO1xuICAgICAgICByZXR1cm4gaGFuZGxlci5oYW5kbGUodGhpcy5fcmVxdWVzdCwgdGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gTm90aWZpZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWZpZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmllci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDbGllbnRGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vY2xpZW50L0NsaWVudEZhY3RvcnlcIik7XG52YXIgTm90aWZpZXJfMSA9IHJlcXVpcmUoXCIuLi9saXN0ZW5lci9Ob3RpZmllclwiKTtcbnZhciBSZXF1ZXN0RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVxdWVzdEZhY3RvcnkoKSB7XG4gICAgICAgIHRoaXMuX2J5cGFzc0F1dGggPSBmYWxzZTtcbiAgICB9XG4gICAgUmVxdWVzdEZhY3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICByZXF1ZXN0LmJ5cGFzc0F1dGggPSB0aGlzLl9ieXBhc3NBdXRoO1xuICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWVyXzEuZGVmYXVsdChyZXF1ZXN0KTtcbiAgICB9O1xuICAgIFJlcXVlc3RGYWN0b3J5LnByb3RvdHlwZS5ieXBhc3NBdXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9ieXBhc3NBdXRoID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBSZXF1ZXN0RmFjdG9yeS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICByZXF1ZXN0LmJ5cGFzc0F1dGggPSB0aGlzLl9ieXBhc3NBdXRoO1xuICAgICAgICByZXR1cm4gKDAsIENsaWVudEZhY3RvcnlfMS5kZWZhdWx0KShyZXF1ZXN0KTtcbiAgICB9O1xuICAgIHJldHVybiBSZXF1ZXN0RmFjdG9yeTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSZXF1ZXN0RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcXVlc3RGYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcXVlc3QodXJsLCBtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fYnlwYXNzQXV0aCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFwiYnlwYXNzQXV0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2J5cGFzc0F1dGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ieXBhc3NBdXRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFwidXJsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXJsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFwibWV0aG9kXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0aG9kO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWV0aG9kID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFwiZGF0YVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gUmVxdWVzdDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSZXF1ZXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVxdWVzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVxdWVzdEZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcmZhY2VzL1JlcXVlc3RGYWN0b3J5XCIpO1xudmFyIFJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvUmVxdWVzdFwiKTtcbnZhciBKb2JTZWFyY2ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKb2JTZWFyY2gsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSm9iU2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEpvYlNlYXJjaC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL2pvYnNcIiwgXCJHRVRcIik7XG4gICAgfTtcbiAgICByZXR1cm4gSm9iU2VhcmNoO1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEpvYlNlYXJjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpvYlNlYXJjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVxdWVzdEZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcmZhY2VzL1JlcXVlc3RGYWN0b3J5XCIpO1xudmFyIFJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvUmVxdWVzdFwiKTtcbnZhciBKb2JTaG93ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSm9iU2hvdywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKb2JTaG93KGFsaWFzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFsaWFzID0gYWxpYXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSm9iU2hvdy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL2pvYnMvXCIgKyB0aGlzLmFsaWFzLCBcIkdFVFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBKb2JTaG93O1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEpvYlNob3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Kb2JTaG93LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZXF1ZXN0RmFjdG9yeV8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVyZmFjZXMvUmVxdWVzdEZhY3RvcnlcIik7XG52YXIgUmVxdWVzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NsaWVudC9SZXF1ZXN0XCIpO1xudmFyIEJhdGNoU2VhcmNoID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQmF0Y2hTZWFyY2gsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmF0Y2hTZWFyY2goKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQmF0Y2hTZWFyY2gucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0XzEuZGVmYXVsdChcIi9iYXRjaGVzXCIsIFwiR0VUXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIEJhdGNoU2VhcmNoO1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJhdGNoU2VhcmNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmF0Y2hTZWFyY2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlcXVlc3RGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJmYWNlcy9SZXF1ZXN0RmFjdG9yeVwiKTtcbnZhciBSZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L1JlcXVlc3RcIik7XG52YXIgQmF0Y2hTaG93ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQmF0Y2hTaG93LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhdGNoU2hvdyhiYXRjaElkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmJhdGNoSWQgPSBiYXRjaElkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEJhdGNoU2hvdy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL2JhdGNoZXMvXCIgKyB0aGlzLmJhdGNoSWQudG9TdHJpbmcoKSwgXCJHRVRcIik7XG4gICAgfTtcbiAgICByZXR1cm4gQmF0Y2hTaG93O1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJhdGNoU2hvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhdGNoU2hvdy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVxdWVzdEZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcmZhY2VzL1JlcXVlc3RGYWN0b3J5XCIpO1xudmFyIFJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvUmVxdWVzdFwiKTtcbnZhciBSdW5TZWFyY2ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSdW5TZWFyY2gsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUnVuU2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFJ1blNlYXJjaC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL3J1bnNcIiwgXCJHRVRcIik7XG4gICAgfTtcbiAgICByZXR1cm4gUnVuU2VhcmNoO1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJ1blNlYXJjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJ1blNlYXJjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVxdWVzdEZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcmZhY2VzL1JlcXVlc3RGYWN0b3J5XCIpO1xudmFyIFJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvUmVxdWVzdFwiKTtcbnZhciBSdW5SZXRyeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJ1blJldHJ5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJ1blJldHJ5KHJ1bklkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJ1bklkID0gcnVuSWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUnVuUmV0cnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0XzEuZGVmYXVsdChcIi9ydW5zL1wiICsgdGhpcy5ydW5JZC50b1N0cmluZygpICsgXCIvcmV0cnlcIiwgXCJQT1NUXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIFJ1blJldHJ5O1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJ1blJldHJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UnVuUmV0cnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlcXVlc3RGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJmYWNlcy9SZXF1ZXN0RmFjdG9yeVwiKTtcbnZhciBSZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L1JlcXVlc3RcIik7XG52YXIgUnVuU2lnbmFsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUnVuU2lnbmFsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJ1blNpZ25hbChydW5JZCwgc2lnbmFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJ1bklkID0gcnVuSWQ7XG4gICAgICAgIF90aGlzLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgX3RoaXMuX3Nob3VsZENhbmNlbEpvYiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJ1blNpZ25hbC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0XzEuZGVmYXVsdChcIi9ydW5zL1wiICsgdGhpcy5ydW5JZC50b1N0cmluZygpICsgXCIvc2lnbmFsXCIsIFwiUE9TVFwiKTtcbiAgICAgICAgcmVxdWVzdC5kYXRhID0ge1xuICAgICAgICAgICAgc2lnbmFsOiB0aGlzLnNpZ25hbCxcbiAgICAgICAgICAgIGNhbmNlbF9qb2I6IHRoaXMuX3Nob3VsZENhbmNlbEpvYixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgICBSdW5TaWduYWwucHJvdG90eXBlLnNob3VsZENhbmNlbEpvYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fc2hvdWxkQ2FuY2VsSm9iID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gUnVuU2lnbmFsO1xufShSZXF1ZXN0RmFjdG9yeV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJ1blNpZ25hbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJ1blNpZ25hbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVxdWVzdEZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcmZhY2VzL1JlcXVlc3RGYWN0b3J5XCIpO1xudmFyIFJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvUmVxdWVzdFwiKTtcbnZhciBSdW5TaG93ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUnVuU2hvdywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSdW5TaG93KHJ1bklkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJ1bklkID0gcnVuSWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUnVuU2hvdy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL3J1bnMvXCIgKyB0aGlzLnJ1bklkLnRvU3RyaW5nKCksIFwiR0VUXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIFJ1blNob3c7XG59KFJlcXVlc3RGYWN0b3J5XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUnVuU2hvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJ1blNob3cuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJ1blNpZ25hbF8xID0gcmVxdWlyZShcIi4uLy4uL3JlcXVlc3RzL3J1bnMvUnVuU2lnbmFsXCIpO1xudmFyIFJ1bkNhbmNlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJ1bkNhbmNlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSdW5DYW5jZWwocnVuSWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcnVuSWQsICdjYW5jZWwnKSB8fCB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNob3VsZENhbmNlbEpvYi5jYWxsKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUnVuQ2FuY2VsO1xufShSdW5TaWduYWxfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSdW5DYW5jZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SdW5DYW5jZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlcXVlc3RGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJmYWNlcy9SZXF1ZXN0RmFjdG9yeVwiKTtcbnZhciBSZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L1JlcXVlc3RcIik7XG52YXIgUXVldWVTZWFyY2ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRdWV1ZVNlYXJjaCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZVNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRdWV1ZVNlYXJjaC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RfMS5kZWZhdWx0KFwiL3F1ZXVlc1wiLCBcIkdFVFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZVNlYXJjaDtcbn0oUmVxdWVzdEZhY3RvcnlfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBRdWV1ZVNlYXJjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlU2VhcmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZXF1ZXN0RmFjdG9yeV8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVyZmFjZXMvUmVxdWVzdEZhY3RvcnlcIik7XG52YXIgUmVxdWVzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NsaWVudC9SZXF1ZXN0XCIpO1xudmFyIFF1ZXVlU2hvdyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1ZXVlU2hvdywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZVNob3cocXVldWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBRdWV1ZVNob3cucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0XzEuZGVmYXVsdChcIi9xdWV1ZXMvXCIgKyB0aGlzLnF1ZXVlLCBcIkdFVFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZVNob3c7XG59KFJlcXVlc3RGYWN0b3J5XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUXVldWVTaG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVldWVTaG93LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbGllbnQgPSB2b2lkIDA7XG52YXIgSm9iU2VhcmNoXzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0cy9qb2JzL0pvYlNlYXJjaFwiKTtcbnZhciBKb2JTaG93XzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0cy9qb2JzL0pvYlNob3dcIik7XG52YXIgQmF0Y2hTZWFyY2hfMSA9IHJlcXVpcmUoXCIuL3JlcXVlc3RzL2JhdGNoZXMvQmF0Y2hTZWFyY2hcIik7XG52YXIgQmF0Y2hTaG93XzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0cy9iYXRjaGVzL0JhdGNoU2hvd1wiKTtcbnZhciBSdW5TZWFyY2hfMSA9IHJlcXVpcmUoXCIuL3JlcXVlc3RzL3J1bnMvUnVuU2VhcmNoXCIpO1xudmFyIFJ1blJldHJ5XzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0cy9ydW5zL1J1blJldHJ5XCIpO1xudmFyIFJ1blNpZ25hbF8xID0gcmVxdWlyZShcIi4vcmVxdWVzdHMvcnVucy9SdW5TaWduYWxcIik7XG52YXIgUnVuU2hvd18xID0gcmVxdWlyZShcIi4vcmVxdWVzdHMvcnVucy9SdW5TaG93XCIpO1xudmFyIFJ1bkNhbmNlbF8xID0gcmVxdWlyZShcIi4vcmVxdWVzdHMvcnVucy9SdW5DYW5jZWxcIik7XG52YXIgUXVldWVTZWFyY2hfMSA9IHJlcXVpcmUoXCIuL3JlcXVlc3RzL3F1ZXVlcy9RdWV1ZVNlYXJjaFwiKTtcbnZhciBRdWV1ZVNob3dfMSA9IHJlcXVpcmUoXCIuL3JlcXVlc3RzL3F1ZXVlcy9RdWV1ZVNob3dcIik7XG5leHBvcnRzLmNsaWVudCA9IHtcbiAgICBqb2JzOiB7XG4gICAgICAgIHNlYXJjaDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEpvYlNlYXJjaF8xLmRlZmF1bHQoKTsgfSxcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKGFsaWFzKSB7IHJldHVybiBuZXcgSm9iU2hvd18xLmRlZmF1bHQoYWxpYXMpOyB9XG4gICAgfSxcbiAgICBxdWV1ZXM6IHtcbiAgICAgICAgc2VhcmNoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVldWVTZWFyY2hfMS5kZWZhdWx0KCk7IH0sXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChxdWV1ZSkgeyByZXR1cm4gbmV3IFF1ZXVlU2hvd18xLmRlZmF1bHQocXVldWUpOyB9XG4gICAgfSxcbiAgICBiYXRjaGVzOiB7XG4gICAgICAgIHNlYXJjaDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEJhdGNoU2VhcmNoXzEuZGVmYXVsdCgpOyB9LFxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoYmF0Y2hJZCkgeyByZXR1cm4gbmV3IEJhdGNoU2hvd18xLmRlZmF1bHQoYmF0Y2hJZCk7IH1cbiAgICB9LFxuICAgIHJ1bnM6IHtcbiAgICAgICAgc2VhcmNoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUnVuU2VhcmNoXzEuZGVmYXVsdCgpOyB9LFxuICAgICAgICBzaG93OiBmdW5jdGlvbiAocnVuSWQpIHsgcmV0dXJuIG5ldyBSdW5TaG93XzEuZGVmYXVsdChydW5JZCk7IH0sXG4gICAgICAgIHNpZ25hbDogZnVuY3Rpb24gKHJ1bklkLCBzaWduYWwpIHsgcmV0dXJuIG5ldyBSdW5TaWduYWxfMS5kZWZhdWx0KHJ1bklkLCBzaWduYWwpOyB9LFxuICAgICAgICByZXRyeTogZnVuY3Rpb24gKHJ1bklkKSB7IHJldHVybiBuZXcgUnVuUmV0cnlfMS5kZWZhdWx0KHJ1bklkKTsgfSxcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAocnVuSWQpIHsgcmV0dXJuIG5ldyBSdW5DYW5jZWxfMS5kZWZhdWx0KHJ1bklkKTsgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJMaXN0ZW5lcl8xIiwiTGlzdGVuZXIiLCJDbGllbnRGYWN0b3J5XzEiLCJQb2xsIiwibGlzdGVuZXJJZCIsInJuZ18xIiwiX2RlZmF1bHQiLCJ2YWxpZGF0ZV8xIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInN0cmluZ2lmeV8xIiwiX3ZhbGlkYXRlIiwidjFfMSIsIl9ybmciLCJfc3RyaW5naWZ5IiwicGFyc2VfMSIsInYzNV8xIiwidmVyc2lvbiIsIm1kNV8xIiwidjNfMSIsIl92IiwidjRfMSIsInJlcXVpcmUkJDIiLCJzaGExXzEiLCJ2NV8xIiwidmVyc2lvbl8xIiwiX3BhcnNlIiwiX3YyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwiTm90aWZpZXJfMSIsIk5vdGlmaWVyIiwiUmVxdWVzdEZhY3RvcnlfMSIsIlJlcXVlc3RGYWN0b3J5IiwiUmVxdWVzdF8xIiwiUmVxdWVzdCIsIl9fZXh0ZW5kcyIsInRoaXMiLCJkIiwiYiIsIkpvYlNlYXJjaF8xIiwiSm9iU2VhcmNoIiwiSm9iU2hvd18xIiwiSm9iU2hvdyIsIkJhdGNoU2VhcmNoXzEiLCJCYXRjaFNlYXJjaCIsIkJhdGNoU2hvd18xIiwiQmF0Y2hTaG93IiwiUnVuU2VhcmNoXzEiLCJSdW5TZWFyY2giLCJSdW5SZXRyeV8xIiwiUnVuUmV0cnkiLCJSdW5TaWduYWxfMSIsIlJ1blNpZ25hbCIsIlJ1blNob3dfMSIsIlJ1blNob3ciLCJSdW5DYW5jZWxfMSIsIlJ1bkNhbmNlbCIsIlF1ZXVlU2VhcmNoXzEiLCJRdWV1ZVNlYXJjaCIsIlF1ZXVlU2hvd18xIiwiUXVldWVTaG93IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIl0sIm1hcHBpbmdzIjoiOzs7OztBQVFBLElBQUEsaUJBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBRU4sS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFRCxPQUFPLENBQUUsT0FBUztBQUFBLEVBRWxCLE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxFQUFFLFNBQVMsV0FBVyxXQUFXLGdCQUFlLElBQUssY0FBZTtBQUUxRSxVQUFNLE9BQU8sU0FBUyxNQUFNO0FBQzFCLGFBQU87QUFBQSxRQUNMLE9BQU8sMEVBRUYsTUFBTSxZQUFZLE9BQU8sc0JBQXNCLFVBQVUsUUFBUTtBQUFBLFFBQ3RFLEdBQUcsVUFBVTtBQUFBLFFBQ2IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUFNLFlBQVk7QUFBQSxNQUFTLE1BQ3pCLDRCQUNHLE1BQU0sVUFBVSxTQUFTLHdDQUF3QztBQUFBLElBQ3JFO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRLENBQUU7QUFFaEIsWUFBTSxTQUFTLFVBQVUsTUFBTTtBQUFBLFFBQzdCLEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTyxVQUFVO0FBQUEsVUFDakIsTUFBTSxNQUFNO0FBQUEsUUFDdEIsQ0FBUztBQUFBLE1BQ0Y7QUFFRCxZQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLO0FBRWhELGFBQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEVBQUUsR0FBRyxLQUFLLE1BQU87QUFBQSxRQUNqQixXQUFXLE1BQU0sU0FBUyxLQUFLO0FBQUEsTUFDaEM7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R0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFNBQVM7QUFDN0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxVQUFVO0FBQzdDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksV0FBVztBQUMvQyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJLE1BQU07QUFDM0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxXQUFXO0FBQ2hELFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLEdBQUcsVUFBVTtBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJLFNBQVM7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxXQUFXO0FBQ2hELFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUksVUFBVTtBQUMvQyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLFVBQVU7QUFDN0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxXQUFXO0FBQzlDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUksU0FBUztBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxVQUFVO0FBQzFDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsVUFBVTtBQUM3QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxHQUFHLFFBQVE7QUFDNUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxVQUFVO0FBQy9DLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksVUFBVTtBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLFNBQVM7QUFDNUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxXQUFXO0FBQy9DLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksVUFBVTtBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFVBQVU7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxXQUFXO0FBQy9DLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsU0FBUztBQUM1QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFVBQVU7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxXQUFXO0FBQ2hELFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTztBQUMxQyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFdBQVc7QUFDL0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxVQUFVO0FBQy9DLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUksU0FBUztBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLFdBQVc7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxVQUFVO0FBQzlDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksVUFBVTtBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJLFdBQVc7QUFDaEQsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxTQUFTO0FBQzdDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLFVBQVU7QUFDMUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxVQUFVO0FBQzlDLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksUUFBUTtBQUM1QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLFVBQVU7QUFDN0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxVQUFVO0FBQy9DLFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUksU0FBUztBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFVBQVU7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsVUFBVTtBQUN6QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLFVBQVU7QUFDOUMsUUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxXQUFXO0FBQ2hELFFBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJ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
