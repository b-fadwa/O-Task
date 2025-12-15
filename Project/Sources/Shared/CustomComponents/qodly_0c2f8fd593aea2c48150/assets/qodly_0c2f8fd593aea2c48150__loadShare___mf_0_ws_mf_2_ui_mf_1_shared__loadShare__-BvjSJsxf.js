import { q as qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__-D-XQiJsX.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_0c2f8fd593aea2c48150__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/shared", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__ = exportModule;

export { qodly_0c2f8fd593aea2c48150__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__ as q };
