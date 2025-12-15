import { q as qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DQm9vRkF.js';
import { q as qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__-7nLUWsAM.js';
import { F, q as qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__ } from './qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__-BT1spHyE.js';
import { q as qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-6pq6ATQ7.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

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
function MdWarning (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}}]})(props);
}function MdCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}}]})(props);
}

const dataAccessSettings = [
  {
    key: "datasource",
    label: "Qodly Source",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "iterator",
    label: "Iterate with",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    modifier: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ETextFieldModifier.ITERATOR,
    placeholder: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_ITERATOR
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    // hasError: validateServerSide,
    validateOnEnter: true
  }
];
const componentSettings = [
  {
    key: "componentWidth",
    label: "Component Width",
    placeholder: "Component Width",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.UNITFIELD,
    isSmallInput: true,
    hasLabel: true
  },
  {
    key: "componentHeight",
    label: "Component Height",
    placeholder: "Component Height",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.UNITFIELD,
    isSmallInput: true,
    hasLabel: true
  },
  {
    key: "iconLoader",
    label: "Load More Icon",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.ICON_PICKER,
    defaultValue: "fa-solid fa-circle-chevron-down"
  },
  {
    key: "enableAction",
    label: "Enable Action",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  },
  {
    key: "iconAction",
    label: "Action Icon",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.ICON_PICKER,
    defaultValue: "fa-solid fa-xmark"
  }
];
const Settings = [
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings,
    isStateless: true
  },
  {
    key: "componentProperties",
    label: "Component Properties",
    type: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: componentSettings,
    isStateless: true
  },
  ...qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess", "display")
];
const BasicSettings = [
  ...dataAccessSettings,
  ...componentSettings,
  ...qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow", "serverSideRef", "display")
];

const config = {
  craft: {
    displayName: "Tags",
    kind: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      iterable: true,
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Tags",
    sanityCheck: {
      keys: [
        { name: "datasource", require: true, isDatasource: true },
        { name: "currentElement", require: false, isDatasource: true }
      ]
    },
    exposed: true,
    icon: MdCircle,
    events: [
      {
        label: "On Click",
        value: "onclick"
      },
      {
        label: "On Click Action",
        value: "onclickaction"
      },
      {
        label: "On MouseEnter",
        value: "onmouseenter"
      },
      {
        label: "On MouseLeave",
        value: "onmouseleave"
      }
    ],
    datasources: {
      accept: ["entitysel"],
      declarations: [{ key: "datasource", iterable: true }, { key: "currentElement" }]
    }
  },
  defaultProps: {
    iterableChild: true,
    enableAction: true,
    iconAction: "fa-solid fa-xmark",
    iconLoader: "fa-solid fa-spinner",
    style: {
      display: "inline-flex",
      backgroundColor: "rgb(218, 216, 216)",
      color: "rgb(48, 48, 48)",
      paddingBottom: "6px",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "6px",
      marginRight: "2px",
      marginBottom: "0px",
      marginLeft: "0px",
      marginTop: "0px",
      alignItems: "center",
      borderRadius: "12px"
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

const Tags$2 = ({
  enableAction = true,
  iconAction,
  iconLoader,
  componentHeight,
  componentWidth,
  datasource,
  style,
  className,
  classNames = []
}) => {
  const {
    connectors: { connect }
  } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const { resolver } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDatasourceSub();
  return /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      className: cn(className, classNames),
      style: { width: componentWidth, height: componentHeight },
      children: datasource ? /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
        /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "items-center space-x-2", style, children: [
          /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.IteratorProvider, { children: /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element, { is: resolver.Text, id: "container", canvas: true }) }),
          enableAction && /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: cn("action cursor-pointer fa", iconAction) })
        ] }),
        /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: { ...style, width: "" },
            className: cn("load-more cursor-pointer fa leading-normal", iconLoader),
            children: "​"
          }
        )
      ] }) : /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-full flex-col items-center justify-center rounded-lg border bg-purple-400 py-4 text-white", children: [
        /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdWarning, { className: "mb-1 h-4 w-4" }),
        /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { children: "Please attach a datasource" })
      ] })
    }
  );
};

const Tags$1 = ({
  enableAction = true,
  iconLoader,
  iconAction,
  iterator,
  style,
  componentWidth,
  componentHeight,
  className,
  classNames = []
}) => {
  const { connect, emit } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer({
    omittedEvents: ["onclick", "onclickaction"],
    autoBindEvents: false
  });
  const { id: nodeID } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const [selected, setSelected] = qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useState(-1);
  const [_scrollIndex, setScrollIndex] = qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useState(0);
  const [pageSize, setPageSize] = qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useState(100);
  const { resolver } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const {
    sources: { datasource: ds, currentElement: currentDs }
  } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources({
    acceptIteratorSel: true
  });
  const [count, setCount] = qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useState(0);
  const { setStep, page, entities, fetchIndex } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: ds
  });
  const { updateCurrentDsValue } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDsChangeHandler({
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
      qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.entitySubject.next({
        action: qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityActions.UPDATE,
        payload: {
          nodeID,
          rowIndex: selected2
        }
      });
    }
  });
  qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useEffect(() => {
    if (count !== entities.length) {
      fetchIndex(0);
    }
  }, [count]);
  const loadMore = () => {
    setStep({
      start: 0,
      end: page.end + pageSize
    });
    fetchIndex(0);
  };
  const handleAction = async (e, index) => {
    await updateCurrentDsValue({ index });
    e.stopPropagation();
    emit("onclickaction");
  };
  const handleClick = async (index) => {
    setSelected(index);
    await updateCurrentDsValue({ index });
    emit("onclick");
  };
  qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useEffect(() => {
    if (currentDs && selected === -1) {
      try {
        let index = -1;
        if (currentDs.type === "entity") {
          index = currentDs.getEntity()?.getPos();
        } else if (currentDs.type === "scalar" && currentDs.dataType === "object" && currentDs.parentSource) {
          index = currentDs.getPos();
        }
        if (index >= 0) {
          setSelected(index);
          setScrollIndex(index);
        }
      } catch (e) {
      }
    }
  }, []);
  qodly_66c098bb4a695cf5df16__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) return;
    const isScalarArray = ds.type === "scalar" && ds.dataType === "array";
    const isRootIterator = !iterator?.includes("$") && !ds.parentSource;
    if (!isScalarArray && isRootIterator) {
      const pageSize2 = ds.getPageSize();
      setPageSize(pageSize2);
      setStep({ start: 0, end: pageSize2 });
    }
    fetchIndex(0);
  }, []);
  return /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      className: cn(className, classNames),
      style: { width: componentWidth, height: componentHeight },
      children: entities ? /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
        entities.map((_tag, index) => /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "div",
          {
            className: `items-center space-x-2 ${selected === index && "selected"}`,
            style,
            onClick: () => handleClick(index),
            children: [
              /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EntityProvider,
                {
                  index,
                  selection: ds,
                  current: currentDs?.id,
                  iterator,
                  children: /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                    {
                      is: resolver.Text,
                      id: "container",
                      className: "fd-selectbox__container",
                      canvas: true
                    }
                  )
                }
              ),
              enableAction && /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  className: cn("action cursor-pointer fa", iconAction),
                  onClick: (e) => handleAction(e, index)
                }
              )
            ]
          },
          index
        )),
        count > entities.length && /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: { ...style, width: "" },
            className: cn("load-more cursor-pointer fa leading-normal", iconLoader),
            onClick: loadMore,
            children: "​"
          }
        )
      ] }) : /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-full flex-col items-center justify-center rounded-lg border bg-purple-400 py-4 text-white", children: /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { children: "Error" }) })
    }
  );
};

const Tags = (props) => {
  const { enabled } = qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tags$2, { ...props }) : /* @__PURE__ */ qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tags$1, { ...props });
};
Tags.craft = config.craft;
Tags.info = config.info;
Tags.defaultProps = config.defaultProps;

const components = {
  // components
  Tags
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_66c098bb4a695cf5df16__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
