import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__ } from './qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__-Dd20y4QE.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_66c098bb4a695cf5df16__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("react-dom", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_66c098bb4a695cf5df16__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Ii = /*@__PURE__*/getDefaultExportFromCjs(qodly_66c098bb4a695cf5df16__loadShare__react_mf_2_dom__loadShare__);

export { Ii as I, qodly_66c098bb4a695cf5df16__loadShare__react_mf_2_dom__loadShare__ as q };
