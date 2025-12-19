import { q as qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-BjoKmq44.js';
import { q as qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__-D-XQiJsX.js';
import { F, q as qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__ } from './qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__-Dbo5lclQ.js';
import { q as qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__ } from './qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__-BvjSJsxf.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__ } from './qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__-C8IboJxL.js';
import { q as qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-BCV2Bkg2.js';
import { _ as _assignValue } from './_assignValue-hfTkUS9v.js';
import { i as isObjectLike_1, _ as _baseGetTag, a as isArray_1, b as _MapCache, c as _Symbol, d as isObject_1, e as _isIndex } from './_isIndex-Datqenhx.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = F.createContext && F.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return F.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return F.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return F.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && F.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? F.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdInfoOutline (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
}function MdViewDay (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function PiGridNineFill (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M84,52V92H28a4,4,0,0,1-4-4V64A16,16,0,0,1,40,48H80A4,4,0,0,1,84,52Zm16,152a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V164H100ZM24,168v24a16,16,0,0,0,16,16H80a4,4,0,0,0,4-4V164H28A4,4,0,0,0,24,168Zm0-56v32a4,4,0,0,0,4,4H84V108H28A4,4,0,0,0,24,112ZM152,48H104a4,4,0,0,0-4,4V92h56V52A4,4,0,0,0,152,48Zm76,60H172v40h56a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM100,148h56V108H100ZM216,48H176a4,4,0,0,0-4,4V92h56a4,4,0,0,0,4-4V64A16,16,0,0,0,216,48Zm12,116H172v40a4,4,0,0,0,4,4h40a16,16,0,0,0,16-16V168A4,4,0,0,0,228,164Z"}}]})(props);
}function PiArrowsInLineHorizontal (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z"}}]})(props);
}function PiArrowsInLineVertical (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM122.34,101.66a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32L136,76.69V16a8,8,0,0,0-16,0V76.69L101.66,58.34A8,8,0,0,0,90.34,69.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L120,179.31V240a8,8,0,0,0,16,0V179.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"}}]})(props);
}

const commonSettings = [
  {
    label: "Orientation",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.RADIOGROUP,
    defaultValue: "vertical",
    key: "orientation",
    multiple: false,
    options: [
      {
        value: "horizontal",
        tooltip: "Horizontal",
        icon: PiArrowsInLineHorizontal
      },
      {
        value: "vertical",
        tooltip: "Vertical",
        icon: PiArrowsInLineVertical
      },
      {
        value: "grid",
        tooltip: "Grid",
        icon: PiGridNineFill
      }
    ]
  }
];
const dataAccessSettings = [
  {
    key: "datasource",
    label: "Qodly Source",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "iterator",
    label: "Iterate with",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    modifier: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ETextFieldModifier.ITERATOR,
    placeholder: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_ITERATOR
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    hasError: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.validateServerSide,
    validateOnEnter: true
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings,
    isStateless: true
  },
  ...qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess")
];
const BasicSettings = [
  ...commonSettings,
  ...dataAccessSettings,
  ...qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("serverSideRef")
];

const config = {
  craft: {
    displayName: "Virtualizer",
    kind: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      iterable: true,
      orientation: "vertical",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    settings: Settings,
    displayName: "Virtualizer",
    exposed: true,
    icon: MdViewDay,
    sanityCheck: {
      keys: [
        { name: "datasource", require: true, isDatasource: true },
        { name: "currentElement", require: false, isDatasource: true }
      ]
    },
    requiredFields: {
      keys: ["datasource"],
      all: false
    },
    events: [
      {
        label: "On Click",
        value: "onclick"
      },
      {
        label: "On Select",
        value: "onselect"
      },
      {
        label: "On MouseEnter",
        value: "onmouseenter"
      },
      {
        label: "On MouseLeave",
        value: "onmouseleave"
      },
      {
        label: "On KeyDown",
        value: "onkeydown"
      },
      {
        label: "On KeyUp",
        value: "onkeyup"
      }
    ],
    datasources: {
      declarations: [{ key: "datasource", iterable: true }, { key: "currentElement" }]
    }
  },
  defaultProps: {
    orientation: "vertical",
    classNames: [],
    iterable: true,
    style: {
      height: `300px`,
      width: `400px`
    }
  }
};

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const observeWindowRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = () => {
    cb({ width: element.innerWidth, height: element.innerHeight });
  };
  handler();
  element.addEventListener("resize", handler, addEventListenerOptions);
  return () => {
    element.removeEventListener("resize", handler);
  };
};
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
const observeWindowOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset = element[instance.options.horizontal ? "scrollX" : "scrollY"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
const windowScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
const elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
let Virtualizer$3 = class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset <= scrollOffset) {
          align = "start";
        } else if (toOffset >= scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign) return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m) => m.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

const useIsomorphicLayoutEffect = typeof document !== "undefined" ? qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useLayoutEffect : qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useEffect;
function useVirtualizerBase(options) {
  const rerender = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__.flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(
    () => new Virtualizer$3(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}
function useWindowVirtualizer(options) {
  return useVirtualizerBase({
    getScrollElement: () => typeof document !== "undefined" ? window : null,
    observeElementRect: observeWindowRect,
    observeElementOffset: observeWindowOffset,
    scrollToFn: windowScroll,
    initialOffset: () => typeof document !== "undefined" ? window.scrollY : 0,
    ...options
  });
}

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$3(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$3;

var isArray$2 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol$1 = _Symbol,
    arrayMap = _arrayMap,
    isArray$1 = isArray_1,
    isSymbol$1 = isSymbol_1;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol = isSymbol_1;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _toKey = toKey$1;

var assignValue = _assignValue,
    castPath = _castPath,
    isIndex = _isIndex,
    isObject = isObject_1,
    toKey = _toKey;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet$1(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet$1;

var baseSet = _baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var set_1 = set;

const set$1 = /*@__PURE__*/getDefaultExportFromCjs(set_1);

const Virtualizer$2 = ({
  orientation = "vertical",
  datasource,
  style,
  className,
  classNames = []
}) => {
  const {
    linkedNodes,
    actions: { setProp },
    connectors: { connect }
  } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode((node) => ({
    linkedNodes: node.data.linkedNodes,
    dom: node.dom
  }));
  const { resolver, query } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDatasourceSub();
  const container = linkedNodes.element ? query.node(linkedNodes.element).get() : null;
  qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useEffect(() => {
    if (orientation !== "grid" || !container) return;
    setProp((props) => {
      set$1(props, "styleboxWidth", container?.data.props?.style?.width);
    });
  }, [
    orientation,
    classNames,
    style?.width,
    style?.height,
    container?.dom,
    container?.data.props?.style?.width,
    container?.data.props?.style?.height,
    container?.data.nodes.length
  ]);
  const parentRef = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useRef(null);
  const virtualizer = useVirtualizer({
    horizontal: orientation === "horizontal",
    count: 1e4,
    getScrollElement: () => parentRef.current,
    estimateSize: () => orientation === "horizontal" ? 100 : 45,
    overscan: 5
  });
  const items = virtualizer.getVirtualItems();
  const VirtualizerView = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useCallback(
    ({ orientation: orientation2 }) => {
      const isHorizontal = orientation2 === "horizontal";
      const isVertical = orientation2 === "vertical";
      const isGrid = orientation2 === "grid";
      return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: parentRef,
          id: "virtualizer-list",
          className: "virtualizer-list",
          style: {
            height: "100%",
            width: "100%",
            overflowY: isHorizontal || isGrid ? "auto" : "hidden",
            overflowX: isVertical ? "auto" : "hidden",
            position: "relative"
          },
          children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              style: {
                height: isHorizontal || isGrid ? "100%" : "auto",
                width: isVertical || isGrid ? "100%" : "auto",
                position: "relative",
                transform: isHorizontal ? `translateX(${items[0]?.start ?? 0}px)` : isVertical ? `translateY(${items[0]?.start ?? 0}px)` : "none"
              },
              children: items.map((virtualRow) => /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  "data-index": virtualRow.index,
                  className: `virtualizer-item h-full ${virtualRow.index % 2 === 0 ? "virtualizer-item-odd" : "virtualizer-item-even"}`,
                  style: {
                    position: "relative",
                    height: isGrid || isHorizontal ? "100%" : "auto"
                  },
                  children: virtualRow.index === 0 ? /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                    {
                      id: "element",
                      style: {
                        width: isHorizontal ? "fit-content" : isGrid ? "200px" : "100%",
                        height: isVertical ? "fit-content" : isGrid ? "200px" : "100%",
                        minWidth: isHorizontal ? "150px" : "auto",
                        minHeight: isVertical ? "100px" : "auto"
                      },
                      role: "element",
                      is: resolver.StyleBox,
                      deletable: false,
                      canvas: true
                    }
                  ) }) : null
                },
                virtualRow.key
              ))
            }
          )
        }
      );
    },
    [items]
  );
  const EmptyState = () => /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-full flex-col items-center justify-center rounded-lg border bg-purple-400 py-4 text-white", children: [
    /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdInfoOutline, { className: "mb-1 h-8 w-8" }),
    /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { children: "Please attach a Qodly Source" })
  ] });
  return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style,
      id: "virtualizer",
      className: cn("virtualizer w-fit h-fit border border-gray-300", className, classNames),
      children: datasource ? /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(VirtualizerView, { orientation }) : /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(EmptyState, {})
    }
  );
};

const VerticalVirtualizer = ({
  style,
  className,
  classNames,
  iterator,
  connect,
  selected,
  ds,
  currentDs,
  parentRef,
  handleClick,
  resolver,
  count
}) => {
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45
  });
  const items = virtualizer.getVirtualItems();
  return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style,
      id: "virtualizer",
      className: cn("w-fit h-fit", className, classNames),
      children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: parentRef,
          id: "virtualizer-list",
          className: "virtualizer-list",
          style: {
            height: "100%",
            width: "100%",
            overflowY: "auto",
            contain: "strict"
          },
          children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              style: {
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative"
              },
              children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${items[0]?.start ?? 0}px)`
                  },
                  children: items.map((virtualRow) => /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "div",
                    {
                      "data-index": virtualRow.index,
                      ref: virtualizer.measureElement,
                      className: cn("virtualizer-item", {
                        selected: virtualRow.index === selected,
                        "bg-purple-200": virtualRow.index === selected,
                        "virtualizer-item-odd": virtualRow.index % 2 === 0,
                        "virtualizer-item-even": virtualRow.index % 2 === 1
                      }),
                      onClick: () => handleClick(virtualRow.index),
                      children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
                        {
                          index: virtualRow.index,
                          selection: ds,
                          current: currentDs?.id,
                          iterator,
                          children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                            qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                            {
                              id: "element",
                              className: "h-full w-full ",
                              role: "element",
                              is: resolver.StyleBox,
                              canvas: true
                            }
                          )
                        }
                      )
                    },
                    virtualRow.key
                  ))
                }
              )
            }
          )
        }
      )
    }
  );
};

const HorizontalVirtualizer = ({
  style,
  className,
  classNames,
  iterator,
  connect,
  selected,
  ds,
  currentDs,
  parentRef,
  count,
  handleClick,
  resolver
}) => {
  const virtualizer = useVirtualizer({
    horizontal: true,
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45
  });
  const items = virtualizer.getVirtualItems();
  return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style,
      id: "virtualizer",
      className: cn("w-fit h-fit", className, classNames),
      children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: parentRef,
          className: "virtualizer-list",
          style: { height: "100%", width: "100%", overflowY: "auto" },
          children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              style: {
                width: virtualizer.getTotalSize(),
                height: "100%",
                position: "relative"
              },
              children: items.map((virtualColumn) => /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  "data-index": virtualColumn.index,
                  ref: virtualizer.measureElement,
                  className: cn("virtualizer-item", {
                    selected: virtualColumn.index === selected,
                    "bg-purple-200": virtualColumn.index === selected,
                    "virtualizer-item-odd": virtualColumn.index % 2 === 0,
                    "virtualizer-item-even": virtualColumn.index % 2 === 1
                  }),
                  onClick: () => handleClick(virtualColumn.index),
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    transform: `translateX(${virtualColumn.start}px)`
                  },
                  children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
                    {
                      index: virtualColumn.index,
                      selection: ds,
                      current: currentDs?.id,
                      iterator,
                      children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                        {
                          id: "element",
                          className: "h-full w-full ",
                          role: "element",
                          is: resolver.StyleBox,
                          canvas: true
                        }
                      )
                    }
                  )
                },
                virtualColumn.key
              ))
            }
          )
        }
      )
    }
  );
};

const GridVirtualizer = ({
  style,
  className,
  classNames,
  iterator,
  connect,
  selected,
  ds,
  currentDs,
  parentRef,
  count,
  handleClick,
  resolver,
  styleboxWidth
}) => {
  const parentOffsetRef = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useRef(0);
  const [parentWidth, setParentWidth] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(0);
  const [columns, setColumns] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(0);
  const [columnWidth, setColumnWidth] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(0);
  qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useEffect(() => {
    const handleResize = (entries) => {
      const { width } = entries[0].contentRect;
      setParentWidth(width);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
      const { offsetWidth } = parentRef.current;
      setParentWidth(offsetWidth);
    }
    return () => resizeObserver.disconnect();
  }, []);
  qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useEffect(() => {
    const calculateColumns = () => {
      if (typeof styleboxWidth === "string") {
        if (styleboxWidth.includes("%")) {
          const percentage = parseFloat(styleboxWidth) / 100;
          const columnWidth2 = parentWidth * percentage;
          setColumnWidth(columnWidth2);
          return Math.floor(parentWidth / columnWidth2);
        } else if (styleboxWidth.includes("px")) {
          const fixedWidth = parseFloat(styleboxWidth);
          setColumnWidth(fixedWidth);
          return Math.floor(parentWidth / fixedWidth);
        }
      }
      return columns;
    };
    const calculatedColumns = calculateColumns();
    setColumns(calculatedColumns);
  }, [styleboxWidth, parentWidth, columns]);
  qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useLayoutEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
  }, []);
  const virtualizer = useVirtualizer({
    count: Math.floor(count / columns) + 1,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450
  });
  const columnVirtualizer = useWindowVirtualizer({
    count: columns,
    scrollMargin: parentOffsetRef.current,
    estimateSize: () => 35
  });
  const columnItems = columnVirtualizer.getVirtualItems();
  return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style,
      id: "virtualizer",
      className: cn("w-fit h-fit", className, classNames),
      children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: parentRef,
          className: "virtualizer-list",
          style: { height: "100%", width: "100%", overflowY: "auto" },
          children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              style: {
                height: virtualizer.getTotalSize(),
                position: "relative"
              },
              children: virtualizer.getVirtualItems().map((row) => /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  "data-index": row.index,
                  ref: virtualizer.measureElement,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: `translateY(${row.start - virtualizer.options.scrollMargin}px)`,
                    display: "flex"
                  },
                  children: columnItems.map((column) => {
                    return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "div",
                      {
                        style: {
                          width: columnWidth ? columnWidth : "fit-content",
                          height: "fit-content"
                        },
                        className: cn("virtualizer-item", {
                          selected: row.index * columns + column.index === selected,
                          "bg-purple-200": row.index * columns + column.index === selected,
                          "virtualizer-item-odd": row.index * columns + column.index % 2 === 0,
                          "virtualizer-item-even": row.index * columns + column.index % 2 === 1
                        }),
                        onClick: () => handleClick(row.index * columns + column.index),
                        children: row.index * columns + column.index < count ? /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                          qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
                          {
                            index: row.index * columns + column.index,
                            selection: ds,
                            current: currentDs?.id,
                            iterator,
                            children: /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                              qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                              {
                                id: "element",
                                className: "h-full w-full ",
                                role: "element",
                                is: resolver.StyleBox,
                                canvas: true
                              }
                            )
                          }
                        ) : null
                      },
                      column.key
                    );
                  })
                },
                row.key
              ))
            }
          )
        }
      )
    }
  );
};

const Virtualizer$1 = ({
  orientation = "vertical",
  iterator,
  style,
  className,
  classNames = [],
  styleboxWidth
}) => {
  const { connect, emit } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const { id: nodeID } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const parentRef = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useRef(null);
  const [selected, setSelected] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(-1);
  const [_scrollIndex, setScrollIndex] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(0);
  const [count, setCount] = qodly_0c2f8fd593aea2c48150__loadShare__react__loadShare__.useState(0);
  const {
    sources: { datasource: ds, currentElement: currentDs }
  } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources({ acceptIteratorSel: true });
  const { fetchIndex } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: ds
  });
  const { resolver } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const { updateCurrentDsValue } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDsChangeHandler({
    source: ds,
    currentDs,
    selected,
    setSelected,
    setScrollIndex,
    setCount,
    fetchIndex,
    onDsChange: (length, selected2) => {
      if (selected2 >= 0) {
        updateCurrentDsValue({
          index: selected2 < length ? selected2 : 0,
          forceUpdate: true
        });
      }
    },
    onCurrentDsChange: (selected2) => {
      qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.entitySubject.next({
        action: qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityActions.UPDATE,
        payload: {
          nodeID,
          index: selected2
        }
      });
    }
  });
  const handleClick = async (index) => {
    setSelected(index);
    await updateCurrentDsValue({ index });
    emit("onselect");
  };
  switch (orientation) {
    case "vertical":
      return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        VerticalVirtualizer,
        {
          connect,
          iterator,
          style,
          className,
          classNames,
          selected,
          ds,
          currentDs,
          parentRef,
          count,
          handleClick,
          resolver
        }
      );
    case "horizontal":
      return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        HorizontalVirtualizer,
        {
          connect,
          iterator,
          style,
          className,
          classNames,
          selected,
          ds,
          currentDs,
          parentRef,
          count,
          handleClick,
          resolver
        }
      );
    case "grid":
      return /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        GridVirtualizer,
        {
          connect,
          iterator,
          style,
          className,
          classNames,
          selected,
          ds,
          currentDs,
          parentRef,
          count,
          handleClick,
          resolver,
          styleboxWidth
        }
      );
    default:
      return null;
  }
};

const Virtualizer = (props) => {
  const { enabled } = qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Virtualizer$2, { ...props }) : /* @__PURE__ */ qodly_0c2f8fd593aea2c48150__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Virtualizer$1, { ...props });
};
Virtualizer.craft = config.craft;
Virtualizer.info = config.info;
Virtualizer.defaultProps = config.defaultProps;

const components = {
  // components
  Virtualizer
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
