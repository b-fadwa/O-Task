import { q as qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-tHd4XWGl.js';
import { q as qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__-BtDtkUZh.js';
import { i, q as qodly_064baed7a010e6deba40__loadShare__react__loadShare__ } from './qodly_064baed7a010e6deba40__loadShare__react__loadShare__-BljUXjoo.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-BUlv7PYi.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = i.createContext && i.createContext(DefaultContext);

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
  return tree && tree.map(function (node, i$1) {
    return i.createElement(node.tag, __assign({
      key: i$1
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return i.createElement(IconBase, __assign({
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
    return i.createElement("svg", __assign({
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
    }), title && i.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? i.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaTimeline (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function LuFlipHorizontal2 (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"m3 7 5 5-5 5V7"}},{"tag":"path","attr":{"d":"m21 7-5 5 5 5V7"}},{"tag":"path","attr":{"d":"M12 20v2"}},{"tag":"path","attr":{"d":"M12 14v2"}},{"tag":"path","attr":{"d":"M12 8v2"}},{"tag":"path","attr":{"d":"M12 2v2"}}]})(props);
}function LuFlipVertical2 (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"m17 3-5 5-5-5h10"}},{"tag":"path","attr":{"d":"m17 21-5-5-5 5h10"}},{"tag":"path","attr":{"d":"M4 12H2"}},{"tag":"path","attr":{"d":"M10 12H8"}},{"tag":"path","attr":{"d":"M16 12h-2"}},{"tag":"path","attr":{"d":"M22 12h-2"}}]})(props);
}

const commonSettings = [
  {
    key: "variant",
    label: "Variant",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { label: "variant1", value: "value1" },
      { label: "variant2", value: "value2" }
    ],
    defaultValue: "value1"
  },
  {
    label: "Orientation",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.RADIOGROUP,
    key: "orientation",
    multiple: false,
    options: [
      {
        value: "Vertical",
        tooltip: "Vertical",
        icon: LuFlipVertical2
      },
      {
        value: "Horizontal",
        tooltip: "Horizontal",
        icon: LuFlipHorizontal2
      }
    ]
  }
];
const dataAccessSettings = [
  {
    key: "datasource",
    label: "DataSource",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "iterator",
    label: "Iterate with",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    modifier: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ETextFieldModifier.ITERATOR,
    placeholder: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_ITERATOR
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings
  },
  ...qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess", "background", "appearance", "font")
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("dataAccess", "style.overflow", "background", "appearance", "font")
];

const config = {
  craft: {
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: {
      keys: ["datasource"],
      all: false
    },
    displayName: "Timeline",
    kind: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Timeline",
    exposed: true,
    icon: FaTimeline,
    events: [
      {
        label: "On Click",
        value: "onclick"
      }
    ],
    datasources: {
      accept: ["entitysel", "entity"]
    }
  },
  defaultProps: {
    style: {
      height: "150px"
    },
    iterable: true,
    name: "",
    variant: "value1",
    orientation: "Vertical"
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

// THIS FILE IS AUTO GENERATED
function BsFillInfoCircleFill (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(props);
}

const Timeline$2 = ({
  datasource,
  orientation,
  variant,
  style,
  className,
  classNames = []
}) => {
  const { resolver } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const {
    //linkedNodes,
    connectors: { connect }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode((node) => {
    return { linkedNodes: node.data.linkedNodes };
  });
  return /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: datasource ? /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    (variant === "value1" || variant === "") && orientation === "Vertical" ? /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center mb-8 relative", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full " }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-8 w-0.5 bg-gray-400 absolute top-5  ml-0.5 left-0.5" }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-gray-700 px-2 py-1 rounded-md text-sm", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item",
          className: "h-full w-full",
          role: "item",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) })
    ] }) : variant === "value1" && orientation === "Horizontal" && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative flex items-end top-12", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm mb-2 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item",
          className: "h-full w-full",
          role: "item",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex w-40 bg-gray-200 relative left-3 h-0.5 dark:bg-gray-400" }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mt-3 sm:pe-8", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute top-1 left-1.5 z-10 flex items-center border-gray-200  border-2 shadow-2xl justify-center w-4 h-4 bg-gray-400  rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 " }) })
    ] }),
    variant == "value2" && orientation == "Vertical" && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center mb-8 relative", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: " text-gray-700 px-2 py-1 rounded-md text-sm", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item1",
          className: "h-full w-full",
          role: "item1",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex-grow flex justify-center", children: [
        /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: " w-3 h-3 bg-gray-400 rounded-full flex items-center justify-center mb-2" }),
        /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-8 w-0.5 bg-gray-400 absolute top-5  " })
      ] }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: " text-gray-700 px-2 py-1 rounded-md text-sm", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item2",
          className: "h-full w-full",
          role: "item2",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) })
    ] }) }),
    variant == "value2" && orientation == "Horizontal" && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative flex items-end top-12", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm mb-2 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item1",
          className: "h-full w-full",
          role: "item1",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm top-4 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "item2",
          className: "h-full w-full",
          role: "item2",
          is: resolver.StyleBox,
          deletable: false,
          canvas: true
        }
      ) }) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex w-40 bg-gray-200 relative left-3 h-0.5 dark:bg-gray-400" }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mt-3 sm:pe-8", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute top-1 left-2.5 z-10 flex items-center justify-center border-gray-200 border-2 shadow-2xl w-4 h-4 bg-gray-400  rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 " }) })
    ] })
  ] }) : /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-full flex-col items-center justify-center rounded-lg border bg-purple-400 py-4 text-white", children: [
    /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BsFillInfoCircleFill, { className: "mb-1 h-8 w-8" }),
    /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { children: "Please attach a datasource" })
  ] }) }) });
};

// THIS FILE IS AUTO GENERATED
function CgDanger (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z","fill":"currentColor"}}]})(props);
}

const VerticalTimeline = ({
  iterator,
  variant,
  style,
  className,
  classNames = []
}) => {
  const { resolver } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const {
    //linkedNodes,
    connectors: { connect }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode((node) => {
    return { linkedNodes: node.data.linkedNodes };
  });
  const {
    sources: { datasource: ds, currentElement: currentDs }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  const { entities, fetchIndex } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: ds
  });
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useEffect(() => {
    fetchIndex(0);
  }, []);
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) {
      return;
    }
    const cb = () => {
      ds.getValue("length").then((_length) => {
        fetchIndex(0);
      });
    };
    ds.addListener("changed", cb);
    return () => {
      qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(ds, cb);
    };
  }, [ds, fetchIndex]);
  return /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-start", children: [
    variant == "value1" && entities.map((item, index) => /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center mb-2 relative", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "w-4 h-4 bg-gray-400 rounded-full mr-3 shadow-2xl border- border-gray-200" }),
      index !== entities.length - 1 && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "line",
        {
          className: "w-0.5 h-full bg-gray-400 absolute left-2",
          style: {
            top: "calc(50% + 10px)",
            height: "calc(100% + 20px)"
          }
        }
      ),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-sm", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item",
              className: "h-full w-full",
              role: "item",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) })
    ] }, item.__KEY)),
    variant == "value2" && entities.map((item, index) => /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start mb-2 relative", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-sm mr-2", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item1",
              className: "h-full w-full",
              role: "item1",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex-grow flex justify-center items-center", children: [
        /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center ", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "span",
          {
            className: cn(
              "fa fd-component",
              classNames,
              "w-2 h-2 fill-current text-gray-500 hover:text-gray-700 flex items-center justify-center"
            )
          }
        ) }),
        index !== entities.length - 1 && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            className: "absolute bg-gray-400 w-0.5 ",
            style: {
              height: "calc(100% + 8px)",
              // Adjust as needed
              top: "70%",
              transform: "translateY(-50%)"
            }
          }
        )
      ] }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-sm", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item2",
              className: "flex items-end justify-end h-full w-full",
              role: "item2",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) })
    ] }, item.__KEY))
  ] }) });
};

const HorizontalTimeline = ({
  iterator,
  variant,
  style,
  className,
  classNames = []
}) => {
  const { resolver } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const {
    connectors: { connect }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode((node) => {
    return { linkedNodes: node.data.linkedNodes };
  });
  const {
    sources: { datasource: ds, currentElement: currentDs }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  const { entities, fetchIndex } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({ source: ds });
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useEffect(() => {
    fetchIndex(0);
  }, []);
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) {
      return;
    }
    const cb = () => {
      ds.getValue("length").then((_length) => {
        fetchIndex(0);
      });
    };
    ds.addListener("changed", cb);
    return () => {
      qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(ds, cb);
    };
  }, [ds, fetchIndex]);
  return /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex ", children: [
    variant == "value1" && entities.map((item, index) => /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative flex items-end ", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm mb-2 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item",
              className: "h-full w-full",
              role: "item",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) }),
      index !== entities.length - 1 && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex w-40 bg-gray-200 relative left-3 h-0.5 dark:bg-gray-400" }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mt-3 sm:pe-8", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute top-1 left-1.5 z-10 flex items-center border-gray-200  border-2 shadow-2xl justify-center w-4 h-4 bg-gray-400  rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 " }) })
    ] }, item.__KEY)),
    variant == "value2" && entities.map((item, index) => /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative flex items-end top-12", children: [
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm mb-2 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item1",
              className: "h-full w-full",
              role: "item1",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute text-sm top-4 ml-3", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
        {
          index,
          selection: ds,
          current: currentDs?.id,
          iterator,
          children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              id: "item2",
              className: "h-full w-full",
              role: "item2",
              is: resolver.StyleBox,
              deletable: false,
              canvas: true
            }
          )
        }
      ) }),
      index !== entities.length - 1 && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex w-40 bg-gray-200 relative left-3 h-0.5 dark:bg-gray-400" }),
      /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mt-3 sm:pe-8", children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute top-1 left-2.5 z-10 flex items-center justify-center border-gray-200 border-2 shadow-2xl w-4 h-4 bg-gray-400  rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 " }) })
    ] }, item.__KEY))
  ] }) }) });
};

const Timeline$1 = ({
  orientation,
  iterator,
  variant,
  style,
  className,
  classNames = []
}) => {
  const {
    connectors: { connect }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode((node) => {
    return { linkedNodes: node.data.linkedNodes };
  });
  const {
    sources: { datasource: ds }
  } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  const [_value, setValue] = qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useState([]);
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) return;
    const fetchData = async () => {
      const value = await ds.getValue();
      setValue(value);
    };
    fetchData();
    ds.addListener("changed", fetchData);
    return () => ds.removeListener("changed", fetchData);
  }, [ds]);
  return /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: ds?.initialValue !== void 0 ? /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { ref: connect, style, className: cn(className, classNames), children: [
    orientation == "Vertical" && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      VerticalTimeline,
      {
        iterator,
        variant,
        style,
        className,
        classNames
      }
    ),
    orientation == "Horizontal" && /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      HorizontalTimeline,
      {
        iterator,
        variant,
        style,
        className,
        classNames
      }
    )
  ] }) : /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center justify-center rounded-lg border bg-purple-400 py-4 text-white", children: [
    /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(CgDanger, { className: "mb-1 h-8 w-8" }),
    /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { children: "Missing a datasource" })
  ] }) });
};

const Timeline = (props) => {
  const { enabled } = qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Timeline$2, { ...props }) : /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Timeline$1, { ...props });
};
Timeline.craft = config.craft;
Timeline.info = config.info;
Timeline.defaultProps = config.defaultProps;

const components = {
  // components
  Timeline
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
