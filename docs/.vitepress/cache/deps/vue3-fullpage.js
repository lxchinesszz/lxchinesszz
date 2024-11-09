import {
  computed,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  onMounted,
  onScopeDispose,
  ref,
  unref,
  watch
} from "./chunk-26Z6B5CR.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/vue3-fullpage@0.2.0_vue@3.5.9/node_modules/vue3-fullpage/dist/vue3-fullpage.js
function de(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function E(e) {
  return typeof e == "function" ? e() : unref(e);
}
var ge = typeof window < "u";
var ve = (e) => e != null;
var m = () => {
};
function S(e) {
  var t;
  const u = E(e);
  return (t = u == null ? void 0 : u.$el) != null ? t : u;
}
var be = ge ? window : void 0;
function pe() {
  const e = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e.value = true;
  }), e;
}
function xe(e) {
  const t = pe();
  return computed(() => (t.value, !!e()));
}
function ye(e, t, u = {}) {
  const {
    root: r,
    rootMargin: a = "0px",
    threshold: o = 0.1,
    window: s = be,
    immediate: l = true
  } = u, n = xe(() => s && "IntersectionObserver" in s), i = computed(() => {
    const g = E(e);
    return (Array.isArray(g) ? g : [g]).map(S).filter(ve);
  });
  let f = m;
  const d = ref(l), ne = n.value ? watch(
    () => [i.value, S(r), d.value],
    ([g, oe]) => {
      if (f(), !d.value || !g.length)
        return;
      const j = new IntersectionObserver(
        t,
        {
          root: S(oe),
          rootMargin: a,
          threshold: o
        }
      );
      g.forEach((N) => N && j.observe(N)), f = () => {
        j.disconnect(), f = m;
      };
    },
    { immediate: l, flush: "post" }
  ) : m, R = () => {
    f(), ne(), d.value = false;
  };
  return de(R), {
    isSupported: n,
    isActive: d,
    pause() {
      f(), d.value = false;
    },
    resume() {
      d.value = true;
    },
    stop: R
  };
}
var me = defineComponent({
  emit: ["update:active"],
  props: {
    active: {
      type: Number,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateHistory: {
      type: Boolean,
      default: false
    }
  },
  setup(e, { slots: t, emit: u }) {
    const r = ref(null), a = ref(false);
    return ye(r, ([{ isIntersecting: o }]) => {
      a.value = o, o && (u("update:active", e.index), e.updateHistory && window.history.replaceState({}, "", `#${e.id}`));
    }), () => h(t.default()[0], {
      id: e.id,
      ref: r,
      class: {
        "is-active": a.value
      }
    });
  }
});
var Se = typeof global == "object" && global && global.Object === Object && global;
var Ce = Se;
var Oe = typeof self == "object" && self && self.Object === Object && self;
var he = Ce || Oe || Function("return this")();
var $e = he;
var Ae = $e.Symbol;
var b = Ae;
var _ = Object.prototype;
var Re = _.hasOwnProperty;
var je = _.toString;
var p = b ? b.toStringTag : void 0;
function Ne(e) {
  var t = Re.call(e, p), u = e[p];
  try {
    e[p] = void 0;
    var r = true;
  } catch {
  }
  var a = je.call(e);
  return r && (t ? e[p] = u : delete e[p]), a;
}
var Te = Object.prototype;
var we = Te.toString;
function Ue(e) {
  return we.call(e);
}
var Me = "[object Null]";
var Ie = "[object Undefined]";
var T = b ? b.toStringTag : void 0;
function ke(e) {
  return e == null ? e === void 0 ? Ie : Me : T && T in Object(e) ? Ne(e) : Ue(e);
}
function ze(e) {
  return e != null && typeof e == "object";
}
var Ee = "[object Symbol]";
function _e(e) {
  return typeof e == "symbol" || ze(e) && ke(e) == Ee;
}
function Le(e, t) {
  for (var u = -1, r = e == null ? 0 : e.length, a = Array(r); ++u < r; )
    a[u] = t(e[u], u, e);
  return a;
}
var De = Array.isArray;
var He = De;
var Ze = 1 / 0;
var w = b ? b.prototype : void 0;
var U = w ? w.toString : void 0;
function L(e) {
  if (typeof e == "string")
    return e;
  if (He(e))
    return Le(e, L) + "";
  if (_e(e))
    return U ? U.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ze ? "-0" : t;
}
function A(e) {
  return e == null ? "" : L(e);
}
function Pe(e, t, u) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), u = u > a ? a : u, u < 0 && (u += a), a = t > u ? 0 : u - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function Ve(e, t, u) {
  var r = e.length;
  return u = u === void 0 ? r : u, !t && u >= r ? e : Pe(e, t, u);
}
var We = "\\ud800-\\udfff";
var Ge = "\\u0300-\\u036f";
var Be = "\\ufe20-\\ufe2f";
var Fe = "\\u20d0-\\u20ff";
var qe = Ge + Be + Fe;
var Je = "\\ufe0e\\ufe0f";
var Ke = "\\u200d";
var Ye = RegExp("[" + Ke + We + qe + Je + "]");
function D(e) {
  return Ye.test(e);
}
function Qe(e) {
  return e.split("");
}
var H = "\\ud800-\\udfff";
var Xe = "\\u0300-\\u036f";
var et = "\\ufe20-\\ufe2f";
var tt = "\\u20d0-\\u20ff";
var ut = Xe + et + tt;
var at = "\\ufe0e\\ufe0f";
var rt = "[" + H + "]";
var O = "[" + ut + "]";
var h2 = "\\ud83c[\\udffb-\\udfff]";
var nt = "(?:" + O + "|" + h2 + ")";
var Z = "[^" + H + "]";
var P = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var V = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var ot = "\\u200d";
var W = nt + "?";
var G = "[" + at + "]?";
var it = "(?:" + ot + "(?:" + [Z, P, V].join("|") + ")" + G + W + ")*";
var st = G + W + it;
var ft = "(?:" + [Z + O + "?", O, P, V, rt].join("|") + ")";
var lt = RegExp(h2 + "(?=" + h2 + ")|" + ft + st, "g");
function ct(e) {
  return e.match(lt) || [];
}
function dt(e) {
  return D(e) ? ct(e) : Qe(e);
}
function gt(e) {
  return function(t) {
    t = A(t);
    var u = D(t) ? dt(t) : void 0, r = u ? u[0] : t.charAt(0), a = u ? Ve(u, 1).join("") : t.slice(1);
    return r[e]() + a;
  };
}
var vt = gt("toUpperCase");
var bt = vt;
function pt(e, t, u, r) {
  var a = -1, o = e == null ? 0 : e.length;
  for (r && o && (u = e[++a]); ++a < o; )
    u = t(u, e[a], a, e);
  return u;
}
function xt(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var yt = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
};
var mt = xt(yt);
var St = mt;
var Ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var Ot = "\\u0300-\\u036f";
var ht = "\\ufe20-\\ufe2f";
var $t = "\\u20d0-\\u20ff";
var At = Ot + ht + $t;
var Rt = "[" + At + "]";
var jt = RegExp(Rt, "g");
function Nt(e) {
  return e = A(e), e && e.replace(Ct, St).replace(jt, "");
}
var Tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function wt(e) {
  return e.match(Tt) || [];
}
var Ut = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Mt(e) {
  return Ut.test(e);
}
var B = "\\ud800-\\udfff";
var It = "\\u0300-\\u036f";
var kt = "\\ufe20-\\ufe2f";
var zt = "\\u20d0-\\u20ff";
var Et = It + kt + zt;
var F = "\\u2700-\\u27bf";
var q = "a-z\\xdf-\\xf6\\xf8-\\xff";
var _t = "\\xac\\xb1\\xd7\\xf7";
var Lt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var Dt = "\\u2000-\\u206f";
var Ht = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var J = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var Zt = "\\ufe0e\\ufe0f";
var K = _t + Lt + Dt + Ht;
var Y = "['’]";
var M = "[" + K + "]";
var Pt = "[" + Et + "]";
var Q = "\\d+";
var Vt = "[" + F + "]";
var X = "[" + q + "]";
var ee = "[^" + B + K + Q + F + q + J + "]";
var Wt = "\\ud83c[\\udffb-\\udfff]";
var Gt = "(?:" + Pt + "|" + Wt + ")";
var Bt = "[^" + B + "]";
var te = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var ue = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var v = "[" + J + "]";
var Ft = "\\u200d";
var I = "(?:" + X + "|" + ee + ")";
var qt = "(?:" + v + "|" + ee + ")";
var k = "(?:" + Y + "(?:d|ll|m|re|s|t|ve))?";
var z = "(?:" + Y + "(?:D|LL|M|RE|S|T|VE))?";
var ae = Gt + "?";
var re = "[" + Zt + "]?";
var Jt = "(?:" + Ft + "(?:" + [Bt, te, ue].join("|") + ")" + re + ae + ")*";
var Kt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var Yt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var Qt = re + ae + Jt;
var Xt = "(?:" + [Vt, te, ue].join("|") + ")" + Qt;
var eu = RegExp([
  v + "?" + X + "+" + k + "(?=" + [M, v, "$"].join("|") + ")",
  qt + "+" + z + "(?=" + [M, v + I, "$"].join("|") + ")",
  v + "?" + I + "+" + k,
  v + "+" + z,
  Yt,
  Kt,
  Q,
  Xt
].join("|"), "g");
function tu(e) {
  return e.match(eu) || [];
}
function uu(e, t, u) {
  return e = A(e), t = u ? void 0 : t, t === void 0 ? Mt(e) ? tu(e) : wt(e) : e.match(t) || [];
}
var au = "['’]";
var ru = RegExp(au, "g");
function nu(e) {
  return function(t) {
    return pt(uu(Nt(t).replace(ru, "")), e, "");
  };
}
var ou = nu(function(e, t, u) {
  return e + (u ? " " : "") + bt(t);
});
var iu = ou;
var su = defineComponent({
  props: {
    active: {
      type: Number,
      required: true
    },
    dotClass: {
      type: String,
      default: ""
    },
    dotInnerClass: {
      type: String,
      default: ""
    },
    pages: {
      type: Number,
      default: 0
    },
    pageKeys: {
      type: Array,
      required: true
    },
    disableClasses: {
      type: Boolean,
      default: false
    }
  },
  emit: ["update:active"],
  setup(e, { emit: t }) {
    const u = computed(
      () => Array.from(Array(e.pages)).map((r, a) => h(
        "a",
        {
          "aria-label": "Go to " + iu(e.pageKeys[a]),
          class: [
            e.dotClass,
            {
              "vue3-fullpage__navigation-dot": !e.disableClasses,
              "is-active": e.active === a
            }
          ],
          onClick: () => t("update:active", a)
        },
        [
          h("div", {
            class: [
              { "vue3-fullpage__navigation-dot-inner": !e.disableClasses },
              e.dotInnerClass
            ]
          })
        ]
      ))
    );
    return () => h(
      "div",
      {
        class: { "vue3-fullpage__navigation": !e.disableClasses }
      },
      u.value
    );
  }
});
var fu = (e, t, { active: u }) => {
  const r = e(), a = [];
  return {
    pages: r.map((s, l) => {
      var i;
      const n = ((i = s == null ? void 0 : s.props) == null ? void 0 : i.id) ?? `${t.prefix}${l + 1}`;
      return a.push(n), h(
        me,
        {
          id: n,
          class: [!t.disableClasses && "vue3-fullpage__page", t.pageClass],
          key: n,
          index: l,
          active: u.value,
          updateHistory: t.updateHistory,
          "onUpdate:active": (f) => u.value = f
        },
        {
          default: () => s
        }
      );
    }),
    keys: a
  };
};
var cu = defineComponent({
  props: {
    /**
     * Do not add any of the component classes (besides state-related ones)
     */
    disableClasses: {
      type: Boolean,
      default: false
    },
    /**
     * Size of the navigation dots, accepts any CSS value
     */
    navigationSize: {
      type: [String, Number],
      default: "1rem"
    },
    /**
     * Gap between the navigation dots on the sidebar
     */
    navigationGap: {
      type: String,
      default: "0.5rem"
    },
    /**
     * Colour of the main navigation dots
     */
    navigationColour: {
      type: String,
      default: "currentColor"
    },
    /**
     * Opacity of the outer rings on the navigation dots
     */
    navigationOpacityOuter: {
      type: [Number, String],
      default: 0.2
    },
    /**
     * Opacity of the outer rings of nav dots when hovered
     */
    navigationOpacityOuterHover: {
      type: [Number, String],
      default: 0.3
    },
    /**
     * Opacity of the outer rings of nav dots when active
     */
    navigationOpacityOuterActive: {
      type: [Number, String],
      default: 0.4
    },
    /**
     * Colour of the dot when the page is active
     */
    activeColour: {
      type: String,
      default: "crimson"
    },
    /**
     * Push the current page hash to the browser history
     */
    updateHistory: {
      type: Boolean,
      default: false
    },
    /**
     * Prefix for the page keys
     */
    prefix: {
      type: String,
      default: "page-"
    },
    /**
     * Disables rendering of the page navigation bar
     */
    hideNavigation: {
      type: Boolean,
      default: false
    },
    /**
     * Tag to use when rendering the page wrapper
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * Apply class string to all pages
     */
    pageClass: {
      type: String,
      default: ""
    },
    /**
     * Apply class string to navigation element
     */
    navigationClass: {
      type: String,
      default: ""
    },
    /**
     * Apply class string to all navigation dot elements
     */
    navigationDotClass: {
      type: String,
      default: ""
    },
    /**
     * Apply class string to all navigation dot inner elements
     */
    navigationDotInnerClass: {
      type: String,
      default: ""
    },
    /**
     * The currently active page index
     */
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "page-enter", "page-leave"],
  setup(e, { slots: t, emit: u }) {
    const r = ref(e.modelValue ? e.modelValue - 1 : 0), { pages: a, keys: o } = fu(t.default, e, {
      active: r
    });
    watch(
      () => e.modelValue,
      (n) => r.value = n ? n - 1 : 0
    ), watch(r, (n, i) => {
      u("update:modelValue", n + 1), (i || i === 0) && u("page-leave", i + 1), u("page-enter", n + 1);
    });
    const s = (n) => {
      r.value = n;
      const i = a[n].key;
      document.querySelector(`#${i}`).scrollIntoView({
        behavior: "smooth"
      });
    }, l = computed(
      () => typeof e.navigationSize == "number" || /\D/.test(e.navigationSize) === false ? `${e.navigationSize}px` : e.navigationSize
    );
    return () => h(
      e.tag,
      {
        class: [!e.disableClasses && "vue3-fullpage__wrapper"],
        style: {
          "--v3fp-total-pages": a.length,
          "--v3fp-active-page": r.value + 1,
          "--v3fp-navigation-gap": e.navigationGap,
          "--v3fp-navigation-colour": e.navigationColour,
          "--v3fp-navigation-size": l.value,
          "--v3fp-navigation-colour--active": e.activeColour,
          "--v3fp-navigation-opacity--outer": e.navigationOpacityOuter,
          "--v3fp-navigation-opacity--outer__hover": e.navigationOpacityOuterHover,
          "--v3fp-navigation-opacity--outer__active": e.navigationOpacityOuterActive
        }
      },
      [
        ...a,
        !e.hideNavigation && h(su, {
          class: e.navigationClass,
          dotClass: e.navigationDotClass,
          dotInnerClass: e.navigationDotInnerClass,
          disableClasses: e.disableClasses,
          pages: a.length,
          pageKeys: o,
          active: r.value,
          "onUpdate:active": s
        })
      ]
    );
  }
});
export {
  cu as Vue3Fullpage
};
//# sourceMappingURL=vue3-fullpage.js.map
