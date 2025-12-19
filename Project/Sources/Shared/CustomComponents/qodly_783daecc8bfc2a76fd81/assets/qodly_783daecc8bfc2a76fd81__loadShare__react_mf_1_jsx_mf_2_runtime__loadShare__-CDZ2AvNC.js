import { q as qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__-CcweqMfS.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_783daecc8bfc2a76fd81__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react/jsx-runtime", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_783daecc8bfc2a76fd81__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_783daecc8bfc2a76fd81__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
