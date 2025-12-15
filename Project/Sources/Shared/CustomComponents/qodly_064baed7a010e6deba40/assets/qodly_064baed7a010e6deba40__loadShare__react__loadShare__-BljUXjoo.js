import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__-BtDtkUZh.js';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_064baed7a010e6deba40__loadShare__react__loadShare__ = exportModule;

const i = /*@__PURE__*/getDefaultExportFromCjs(qodly_064baed7a010e6deba40__loadShare__react__loadShare__);

const D = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: i
}, [qodly_064baed7a010e6deba40__loadShare__react__loadShare__]);

export { D, i, qodly_064baed7a010e6deba40__loadShare__react__loadShare__ as q };
