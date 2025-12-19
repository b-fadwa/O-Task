import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__-D-XQiJsX.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Mi = /*@__PURE__*/getDefaultExportFromCjs(qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__);

export { Mi as M, qodly_0c2f8fd593aea2c48150__loadShare__react_mf_2_dom__loadShare__ as q };
