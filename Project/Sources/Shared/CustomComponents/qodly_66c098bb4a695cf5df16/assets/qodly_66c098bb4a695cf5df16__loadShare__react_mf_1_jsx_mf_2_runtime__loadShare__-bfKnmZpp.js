import { q as qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__ } from './qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__-Dd20y4QE.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("react/jsx-runtime", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_66c098bb4a695cf5df16__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
