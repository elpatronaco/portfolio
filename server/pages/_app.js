"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/helpers/classnames.js
function classNames(initialClasses, conditionals) {
    const classes = initialClasses.length ? initialClasses.trim().split(/\s+/g) : [];
    if (conditionals) {
        for(const key in conditionals){
            if (conditionals[key]) {
                classes.push(key);
            }
        }
    }
    return classes.join(' ');
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/hooks/useDarkMode.js

function useDarkMode() {
    const { 0: isDarkMode , 1: setIsDarkMode  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const root = document.documentElement;
        const isDark = root.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);
    const toggleDarkMode = ()=>{
        const root = document.documentElement;
        root.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };
    return {
        isDarkMode,
        toggleDarkMode
    };
}

;// CONCATENATED MODULE: ./src/components/atoms/button/Button.jsx



function Button({ children , onClick , className , icon , shadowed ,  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: classNames(`rounded-full text-md text-white bg-black hover:bg-gray-700/80 dark:bg-white dark:hover:bg-slate-200/50 transition-all duration-300 ${className}`, {
            'py-2 px-5': !icon,
            'p-3 flex justify-center items-center': icon,
            'shadow-lg shadow-slate-500/40 hover:shadow-slate-600/40 hover:shadow-xl': shadowed
        }),
        onClick: onClick,
        children: children
    }));
};
Button.displayName = 'Button';
Button.propTypes = {
    children: (external_prop_types_default()).node,
    onClick: (external_prop_types_default()).func,
    className: (external_prop_types_default()).string,
    icon: (external_prop_types_default()).bool,
    shadowed: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/layout/footer/Footer.jsx






function Footer({ links  }) {
    const darkMode = useDarkMode();
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "w-full border-solid border-t-2 py-12 px-5 md:px-0",
        children: [
            links && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classNames('grid content-evenly sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2'),
                children: links.map(({ label , href  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "w-fit text-lg font-medium text-black dark:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2",
                        href: href,
                        target: "_blank",
                        children: label
                    })
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-full justify-center mt-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    onClick: handleScrollToTop,
                    icon: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaChevronUp, {
                        className: "text-white dark:text-black"
                    })
                })
            })
        ]
    }));
};
Footer.displayName = 'Header';
Footer.propTypes = {
    links: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        label: (external_prop_types_default()).string.isRequired,
        href: (external_prop_types_default()).string.isRequired
    }))
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./src/components/layout/header/Header.jsx








function Header({ links  }) {
    const { pathname  } = (0,router_.useRouter)();
    const darkMode = useDarkMode();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex justify-between items-center gap-8 sticky z-50 backdrop-blur-md backdrop-saturate-150 rounded-none top-0 m-0 xs:mx-5 xs:top-5 md:mx-0 p-4 pl-6 xs:rounded-xl bg-slate-400/50",
        children: [
            links && /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex gap-5",
                    children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: classNames('text-md font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 text-black dark:text-white', {
                                'underline underline-offset-4 decoration-2': pathname === link.href
                            }),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: link.href,
                                children: link.label
                            })
                        }, `nav-link-${link.href}-${index}`)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                icon: true,
                onClick: darkMode.toggleDarkMode,
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaSun, {
                    className: "text-2xl text-white dark:text-black"
                })
            })
        ]
    }));
};
Header.displayName = 'Header';
Header.propTypes = {
    links: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        label: (external_prop_types_default()).string.isRequired,
        href: (external_prop_types_default()).string.isRequired
    })),
    toggleDarkMode: (external_prop_types_default()).func
};

;// CONCATENATED MODULE: ./src/components/layout/Layout.jsx



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "sm:px-0 xs:pt-5 md:px-12 lg:px-36 min-w-fit bg-bg-light dark:bg-bg-dark transition-colors duration-200 min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                links: [
                    {
                        label: 'Home',
                        href: '/'
                    },
                    {
                        label: 'About',
                        href: '/#about'
                    }, 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "my-10 mx-5 md:mx-0",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                links: [
                    {
                        label: 'Linkedin',
                        href: 'https://www.linkedin.com/in/paucolome/'
                    },
                    {
                        label: 'Github',
                        href: 'https://github.com/elpatronaco'
                    },
                    {
                        label: 'Example',
                        href: 'google.es'
                    }, 
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(535)));
module.exports = __webpack_exports__;

})();