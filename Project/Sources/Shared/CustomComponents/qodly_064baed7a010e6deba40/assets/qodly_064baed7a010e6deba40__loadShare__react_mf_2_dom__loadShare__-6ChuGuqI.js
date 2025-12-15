import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__-BtDtkUZh.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_064baed7a010e6deba40__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Cl = /*@__PURE__*/getDefaultExportFromCjs(qodly_064baed7a010e6deba40__loadShare__react_mf_2_dom__loadShare__);

export { Cl as C, qodly_064baed7a010e6deba40__loadShare__react_mf_2_dom__loadShare__ as q };
