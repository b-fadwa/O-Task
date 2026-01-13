import { i as index_cjs, q as qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__ } from './assets/qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__-CcweqMfS.js';
import exposesMap from './assets/virtualExposes-BAoaq-NH.js';
import { _ as __vitePreload } from './assets/preload-helper-CqoC6PUU.js';

const importMap = {
      
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => import('./assets/jsx-runtime-CutxA2s7.js').then(n => n.j),true              ?[]:void 0);
          return pkg
        }
      ,
        "react": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BrSEIiFz.js').then(n => n.i),true              ?[]:void 0);
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-DFlK3xyP.js').then(n => n.i),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/webform-editor": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-BK0C-ArI.js').then(n => n.r),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/shared": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-Co96YbUK.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-core": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-n8Xi_yAT.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-layers": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-B1IgSi7u.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-utils": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BuFM4yH6.js'),true              ?[]:void 0);
          return pkg
        }
      
    };
      const usedShared = {
      
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["react/jsx-runtime"].loaded = true;
              const {"react/jsx-runtime": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react": {
            name: "react",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["react"].loaded = true;
              const {"react": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["react-dom"].loaded = true;
              const {"react-dom": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "@ws-ui/webform-editor": {
            name: "@ws-ui/webform-editor",
            version: "1.10.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["@ws-ui/webform-editor"].loaded = true;
              const {"@ws-ui/webform-editor": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.10.2"
            }
          }
        ,
          "@ws-ui/shared": {
            name: "@ws-ui/shared",
            version: "1.10.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["@ws-ui/shared"].loaded = true;
              const {"@ws-ui/shared": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.10.2"
            }
          }
        ,
          "@ws-ui/craftjs-core": {
            name: "@ws-ui/craftjs-core",
            version: "0.2.26",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["@ws-ui/craftjs-core"].loaded = true;
              const {"@ws-ui/craftjs-core": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.26"
            }
          }
        ,
          "@ws-ui/craftjs-layers": {
            name: "@ws-ui/craftjs-layers",
            version: "0.2.4",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["@ws-ui/craftjs-layers"].loaded = true;
              const {"@ws-ui/craftjs-layers": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.4"
            }
          }
        ,
          "@ws-ui/craftjs-utils": {
            name: "@ws-ui/craftjs-utils",
            version: "0.2.3",
            scope: ["default"],
            loaded: false,
            from: "qodly_783daecc8bfc2a76fd81",
            async get () {
              usedShared["@ws-ui/craftjs-utils"].loaded = true;
              const {"@ws-ui/craftjs-utils": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.3"
            }
          }
        
    };
      const usedRemotes = [
      ];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "qodly_783daecc8bfc2a76fd81";
  async function init(shared = {}, initScope = []) {
    const initRes = index_cjs.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: 'version-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'version-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error(e);
    }
    qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode("/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.token.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\t/* This background color was intended by the author of this theme. */\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
