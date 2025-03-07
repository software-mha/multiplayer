var yr = (i) => {
  throw TypeError(i);
};
var On = (i, n, r) => n.has(i) || yr("Cannot " + r);
var H = (i, n, r) => (On(i, n, "read from private field"), r ? r.call(i) : n.get(i)), xe = (i, n, r) => n.has(i) ? yr("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, r), _e = (i, n, r, o) => (On(i, n, "write to private field"), o ? o.call(i, r) : n.set(i, r), r), Be = (i, n, r) => (On(i, n, "access private method"), r);
var bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $n(i) {
  if (i.__esModule) return i;
  var n = i.default;
  if (typeof n == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(i).forEach(function(o) {
    var a = Object.getOwnPropertyDescriptor(i, o);
    Object.defineProperty(r, o, a.get ? a : {
      enumerable: !0,
      get: function() {
        return i[o];
      }
    });
  }), r;
}
var xn = {}, wr = {}, br;
function Es() {
  return br || (br = 1, ArrayBuffer.isView || (ArrayBuffer.isView = function(i) {
    return i !== null && typeof i == "object" && i.buffer instanceof ArrayBuffer;
  }), typeof FormData > "u" && (bs.FormData = /** @class */
  /* @__PURE__ */ function() {
    function i() {
    }
    return i;
  }()), typeof globalThis > "u" && typeof window < "u" && (window.globalThis = window)), wr;
}
var Tt = {}, Rn = function(i, n) {
  return Rn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
  }, Rn(i, n);
};
function Qr(i, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Rn(i, n);
  function r() {
    this.constructor = i;
  }
  i.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var cn = function() {
  return cn = Object.assign || function(n) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
    }
    return n;
  }, cn.apply(this, arguments);
};
function ei(i, n) {
  var r = {};
  for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && n.indexOf(o) < 0 && (r[o] = i[o]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(i); a < o.length; a++)
      n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, o[a]) && (r[o[a]] = i[o[a]]);
  return r;
}
function ti(i, n, r, o) {
  var a = arguments.length, c = a < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, r) : o, h;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, n, r, o);
  else for (var w = i.length - 1; w >= 0; w--) (h = i[w]) && (c = (a < 3 ? h(c) : a > 3 ? h(n, r, c) : h(n, r)) || c);
  return a > 3 && c && Object.defineProperty(n, r, c), c;
}
function ni(i, n) {
  return function(r, o) {
    n(r, o, i);
  };
}
function ri(i, n, r, o, a, c) {
  function h(W) {
    if (W !== void 0 && typeof W != "function") throw new TypeError("Function expected");
    return W;
  }
  for (var w = o.kind, A = w === "getter" ? "get" : w === "setter" ? "set" : "value", _ = !n && i ? o.static ? i : i.prototype : null, S = n || (_ ? Object.getOwnPropertyDescriptor(_, o.name) : {}), d, E = !1, O = r.length - 1; O >= 0; O--) {
    var P = {};
    for (var $ in o) P[$] = $ === "access" ? {} : o[$];
    for (var $ in o.access) P.access[$] = o.access[$];
    P.addInitializer = function(W) {
      if (E) throw new TypeError("Cannot add initializers after decoration has completed");
      c.push(h(W || null));
    };
    var V = (0, r[O])(w === "accessor" ? { get: S.get, set: S.set } : S[A], P);
    if (w === "accessor") {
      if (V === void 0) continue;
      if (V === null || typeof V != "object") throw new TypeError("Object expected");
      (d = h(V.get)) && (S.get = d), (d = h(V.set)) && (S.set = d), (d = h(V.init)) && a.unshift(d);
    } else (d = h(V)) && (w === "field" ? a.unshift(d) : S[A] = d);
  }
  _ && Object.defineProperty(_, o.name, S), E = !0;
}
function ii(i, n, r) {
  for (var o = arguments.length > 2, a = 0; a < n.length; a++)
    r = o ? n[a].call(i, r) : n[a].call(i);
  return o ? r : void 0;
}
function si(i) {
  return typeof i == "symbol" ? i : "".concat(i);
}
function oi(i, n, r) {
  return typeof n == "symbol" && (n = n.description ? "[".concat(n.description, "]") : ""), Object.defineProperty(i, "name", { configurable: !0, value: r ? "".concat(r, " ", n) : n });
}
function ai(i, n) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(i, n);
}
function ci(i, n, r, o) {
  function a(c) {
    return c instanceof r ? c : new r(function(h) {
      h(c);
    });
  }
  return new (r || (r = Promise))(function(c, h) {
    function w(S) {
      try {
        _(o.next(S));
      } catch (d) {
        h(d);
      }
    }
    function A(S) {
      try {
        _(o.throw(S));
      } catch (d) {
        h(d);
      }
    }
    function _(S) {
      S.done ? c(S.value) : a(S.value).then(w, A);
    }
    _((o = o.apply(i, n || [])).next());
  });
}
function fi(i, n) {
  var r = { label: 0, sent: function() {
    if (c[0] & 1) throw c[1];
    return c[1];
  }, trys: [], ops: [] }, o, a, c, h = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return h.next = w(0), h.throw = w(1), h.return = w(2), typeof Symbol == "function" && (h[Symbol.iterator] = function() {
    return this;
  }), h;
  function w(_) {
    return function(S) {
      return A([_, S]);
    };
  }
  function A(_) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; h && (h = 0, _[0] && (r = 0)), r; ) try {
      if (o = 1, a && (c = _[0] & 2 ? a.return : _[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, _[1])).done) return c;
      switch (a = 0, c && (_ = [_[0] & 2, c.value]), _[0]) {
        case 0:
        case 1:
          c = _;
          break;
        case 4:
          return r.label++, { value: _[1], done: !1 };
        case 5:
          r.label++, a = _[1], _ = [0];
          continue;
        case 7:
          _ = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (c = r.trys, !(c = c.length > 0 && c[c.length - 1]) && (_[0] === 6 || _[0] === 2)) {
            r = 0;
            continue;
          }
          if (_[0] === 3 && (!c || _[1] > c[0] && _[1] < c[3])) {
            r.label = _[1];
            break;
          }
          if (_[0] === 6 && r.label < c[1]) {
            r.label = c[1], c = _;
            break;
          }
          if (c && r.label < c[2]) {
            r.label = c[2], r.ops.push(_);
            break;
          }
          c[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      _ = n.call(i, r);
    } catch (S) {
      _ = [6, S], a = 0;
    } finally {
      o = c = 0;
    }
    if (_[0] & 5) throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
var hn = Object.create ? function(i, n, r, o) {
  o === void 0 && (o = r);
  var a = Object.getOwnPropertyDescriptor(n, r);
  (!a || ("get" in a ? !n.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return n[r];
  } }), Object.defineProperty(i, o, a);
} : function(i, n, r, o) {
  o === void 0 && (o = r), i[o] = n[r];
};
function ui(i, n) {
  for (var r in i) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && hn(n, i, r);
}
function fn(i) {
  var n = typeof Symbol == "function" && Symbol.iterator, r = n && i[n], o = 0;
  if (r) return r.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && o >= i.length && (i = void 0), { value: i && i[o++], done: !i };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Nn(i, n) {
  var r = typeof Symbol == "function" && i[Symbol.iterator];
  if (!r) return i;
  var o = r.call(i), a, c = [], h;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = o.next()).done; ) c.push(a.value);
  } catch (w) {
    h = { error: w };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (h) throw h.error;
    }
  }
  return c;
}
function li() {
  for (var i = [], n = 0; n < arguments.length; n++)
    i = i.concat(Nn(arguments[n]));
  return i;
}
function hi() {
  for (var i = 0, n = 0, r = arguments.length; n < r; n++) i += arguments[n].length;
  for (var o = Array(i), a = 0, n = 0; n < r; n++)
    for (var c = arguments[n], h = 0, w = c.length; h < w; h++, a++)
      o[a] = c[h];
  return o;
}
function di(i, n, r) {
  if (r || arguments.length === 2) for (var o = 0, a = n.length, c; o < a; o++)
    (c || !(o in n)) && (c || (c = Array.prototype.slice.call(n, 0, o)), c[o] = n[o]);
  return i.concat(c || Array.prototype.slice.call(n));
}
function bt(i) {
  return this instanceof bt ? (this.v = i, this) : new bt(i);
}
function gi(i, n, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = r.apply(i, n || []), a, c = [];
  return a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), w("next"), w("throw"), w("return", h), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function h(O) {
    return function(P) {
      return Promise.resolve(P).then(O, d);
    };
  }
  function w(O, P) {
    o[O] && (a[O] = function($) {
      return new Promise(function(V, W) {
        c.push([O, $, V, W]) > 1 || A(O, $);
      });
    }, P && (a[O] = P(a[O])));
  }
  function A(O, P) {
    try {
      _(o[O](P));
    } catch ($) {
      E(c[0][3], $);
    }
  }
  function _(O) {
    O.value instanceof bt ? Promise.resolve(O.value.v).then(S, d) : E(c[0][2], O);
  }
  function S(O) {
    A("next", O);
  }
  function d(O) {
    A("throw", O);
  }
  function E(O, P) {
    O(P), c.shift(), c.length && A(c[0][0], c[0][1]);
  }
}
function pi(i) {
  var n, r;
  return n = {}, o("next"), o("throw", function(a) {
    throw a;
  }), o("return"), n[Symbol.iterator] = function() {
    return this;
  }, n;
  function o(a, c) {
    n[a] = i[a] ? function(h) {
      return (r = !r) ? { value: bt(i[a](h)), done: !1 } : c ? c(h) : h;
    } : c;
  }
}
function mi(i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = i[Symbol.asyncIterator], r;
  return n ? n.call(i) : (i = typeof fn == "function" ? fn(i) : i[Symbol.iterator](), r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function o(c) {
    r[c] = i[c] && function(h) {
      return new Promise(function(w, A) {
        h = i[c](h), a(w, A, h.done, h.value);
      });
    };
  }
  function a(c, h, w, A) {
    Promise.resolve(A).then(function(_) {
      c({ value: _, done: w });
    }, h);
  }
}
function yi(i, n) {
  return Object.defineProperty ? Object.defineProperty(i, "raw", { value: n }) : i.raw = n, i;
}
var vs = Object.create ? function(i, n) {
  Object.defineProperty(i, "default", { enumerable: !0, value: n });
} : function(i, n) {
  i.default = n;
}, Tn = function(i) {
  return Tn = Object.getOwnPropertyNames || function(n) {
    var r = [];
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
    return r;
  }, Tn(i);
};
function wi(i) {
  if (i && i.__esModule) return i;
  var n = {};
  if (i != null) for (var r = Tn(i), o = 0; o < r.length; o++) r[o] !== "default" && hn(n, i, r[o]);
  return vs(n, i), n;
}
function bi(i) {
  return i && i.__esModule ? i : { default: i };
}
function Ei(i, n, r, o) {
  if (r === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? i !== n || !o : !n.has(i)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? o : r === "a" ? o.call(i) : o ? o.value : n.get(i);
}
function vi(i, n, r, o, a) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? i !== n || !a : !n.has(i)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return o === "a" ? a.call(i, r) : a ? a.value = r : n.set(i, r), r;
}
function Oi(i, n) {
  if (n === null || typeof n != "object" && typeof n != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof i == "function" ? n === i : i.has(n);
}
function xi(i, n, r) {
  if (n != null) {
    if (typeof n != "object" && typeof n != "function") throw new TypeError("Object expected.");
    var o, a;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = n[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      o = n[Symbol.dispose], r && (a = o);
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    a && (o = function() {
      try {
        a.call(this);
      } catch (c) {
        return Promise.reject(c);
      }
    }), i.stack.push({ value: n, dispose: o, async: r });
  } else r && i.stack.push({ async: !0 });
  return n;
}
var Os = typeof SuppressedError == "function" ? SuppressedError : function(i, n, r) {
  var o = new Error(r);
  return o.name = "SuppressedError", o.error = i, o.suppressed = n, o;
};
function _i(i) {
  function n(c) {
    i.error = i.hasError ? new Os(c, i.error, "An error was suppressed during disposal.") : c, i.hasError = !0;
  }
  var r, o = 0;
  function a() {
    for (; r = i.stack.pop(); )
      try {
        if (!r.async && o === 1) return o = 0, i.stack.push(r), Promise.resolve().then(a);
        if (r.dispose) {
          var c = r.dispose.call(r.value);
          if (r.async) return o |= 2, Promise.resolve(c).then(a, function(h) {
            return n(h), a();
          });
        } else o |= 1;
      } catch (h) {
        n(h);
      }
    if (o === 1) return i.hasError ? Promise.reject(i.error) : Promise.resolve();
    if (i.hasError) throw i.error;
  }
  return a();
}
function Ii(i, n) {
  return typeof i == "string" && /^\.\.?\//.test(i) ? i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, o, a, c, h) {
    return o ? n ? ".jsx" : ".js" : a && (!c || !h) ? r : a + c + "." + h.toLowerCase() + "js";
  }) : i;
}
const xs = {
  __extends: Qr,
  __assign: cn,
  __rest: ei,
  __decorate: ti,
  __param: ni,
  __esDecorate: ri,
  __runInitializers: ii,
  __propKey: si,
  __setFunctionName: oi,
  __metadata: ai,
  __awaiter: ci,
  __generator: fi,
  __createBinding: hn,
  __exportStar: ui,
  __values: fn,
  __read: Nn,
  __spread: li,
  __spreadArrays: hi,
  __spreadArray: di,
  __await: bt,
  __asyncGenerator: gi,
  __asyncDelegator: pi,
  __asyncValues: mi,
  __makeTemplateObject: yi,
  __importStar: wi,
  __importDefault: bi,
  __classPrivateFieldGet: Ei,
  __classPrivateFieldSet: vi,
  __classPrivateFieldIn: Oi,
  __addDisposableResource: xi,
  __disposeResources: _i,
  __rewriteRelativeImportExtension: Ii
}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: xi,
  get __assign() {
    return cn;
  },
  __asyncDelegator: pi,
  __asyncGenerator: gi,
  __asyncValues: mi,
  __await: bt,
  __awaiter: ci,
  __classPrivateFieldGet: Ei,
  __classPrivateFieldIn: Oi,
  __classPrivateFieldSet: vi,
  __createBinding: hn,
  __decorate: ti,
  __disposeResources: _i,
  __esDecorate: ri,
  __exportStar: ui,
  __extends: Qr,
  __generator: fi,
  __importDefault: bi,
  __importStar: wi,
  __makeTemplateObject: yi,
  __metadata: ai,
  __param: ni,
  __propKey: si,
  __read: Nn,
  __rest: ei,
  __rewriteRelativeImportExtension: Ii,
  __runInitializers: ii,
  __setFunctionName: oi,
  __spread: li,
  __spreadArray: di,
  __spreadArrays: hi,
  __values: fn,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), dn = /* @__PURE__ */ $n(_s);
var _n = {}, Er;
function gn() {
  return Er || (Er = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 });
    var n = dn;
    i.CloseCode = void 0, function(o) {
      o[o.CONSENTED = 4e3] = "CONSENTED", o[o.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    }(i.CloseCode || (i.CloseCode = {}));
    var r = (
      /** @class */
      function(o) {
        n.__extends(a, o);
        function a(c, h) {
          var w = o.call(this, h) || this;
          return w.name = "ServerError", w.code = c, w;
        }
        return a;
      }(Error)
    );
    i.ServerError = r;
  }(_n)), _n;
}
var Yt = {}, Gt = {}, Zt = {}, Nt = { exports: {} }, Is = Nt.exports, vr;
function kn() {
  return vr || (vr = 1, function(i, n) {
    (function(r, o) {
      o(n);
    })(Is, function(r) {
      r.OPERATION = void 0, function(f) {
        f[f.ADD = 128] = "ADD", f[f.REPLACE = 0] = "REPLACE", f[f.DELETE = 64] = "DELETE", f[f.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", f[f.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", f[f.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", f[f.CLEAR = 10] = "CLEAR", f[f.REVERSE = 15] = "REVERSE", f[f.MOVE = 32] = "MOVE", f[f.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", f[f.ADD_BY_REFID = 129] = "ADD_BY_REFID";
      }(r.OPERATION || (r.OPERATION = {})), Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));
      const c = Symbol("$track"), h = Symbol("$encoder"), w = Symbol("$decoder"), A = Symbol("$filter"), _ = Symbol("$getByIndex"), S = Symbol("$deleteByIndex"), d = Symbol("$changes"), E = Symbol("$childType"), O = Symbol("$onEncodeEnd"), P = Symbol("$onDecodeEnd"), $ = Symbol("$descriptors"), V = "$__numFields", W = "$__refTypeFieldIndexes", Z = "$__viewFieldIndexes", te = "$__fieldIndexesByViewTag";
      let X;
      try {
        X = new TextEncoder();
      } catch {
      }
      const ge = new ArrayBuffer(8), pe = new Int32Array(ge), be = new Float32Array(ge), we = new Float64Array(ge), fe = new BigInt64Array(ge), Et = typeof Buffer < "u" && Buffer.byteLength ? Buffer.byteLength : function(f, e) {
        for (var t = 0, s = 0, u = 0, l = f.length; u < l; u++)
          t = f.charCodeAt(u), t < 128 ? s += 1 : t < 2048 ? s += 2 : t < 55296 || t >= 57344 ? s += 3 : (u++, s += 4);
        return s;
      };
      function Ut(f, e, t) {
        for (var s = 0, u = 0, l = e.length; u < l; u++)
          s = e.charCodeAt(u), s < 128 ? f[t.offset++] = s : s < 2048 ? (f[t.offset] = 192 | s >> 6, f[t.offset + 1] = 128 | s & 63, t.offset += 2) : s < 55296 || s >= 57344 ? (f[t.offset] = 224 | s >> 12, f[t.offset + 1] = 128 | s >> 6 & 63, f[t.offset + 2] = 128 | s & 63, t.offset += 3) : (u++, s = 65536 + ((s & 1023) << 10 | e.charCodeAt(u) & 1023), f[t.offset] = 240 | s >> 18, f[t.offset + 1] = 128 | s >> 12 & 63, f[t.offset + 2] = 128 | s >> 6 & 63, f[t.offset + 3] = 128 | s & 63, t.offset += 4);
      }
      function x(f, e, t) {
        f[t.offset++] = e & 255;
      }
      function B(f, e, t) {
        f[t.offset++] = e & 255;
      }
      function N(f, e, t) {
        f[t.offset++] = e & 255, f[t.offset++] = e >> 8 & 255;
      }
      function C(f, e, t) {
        f[t.offset++] = e & 255, f[t.offset++] = e >> 8 & 255;
      }
      function k(f, e, t) {
        f[t.offset++] = e & 255, f[t.offset++] = e >> 8 & 255, f[t.offset++] = e >> 16 & 255, f[t.offset++] = e >> 24 & 255;
      }
      function q(f, e, t) {
        const s = e >> 24, u = e >> 16, l = e >> 8, g = e;
        f[t.offset++] = g & 255, f[t.offset++] = l & 255, f[t.offset++] = u & 255, f[t.offset++] = s & 255;
      }
      function K(f, e, t) {
        const s = Math.floor(e / Math.pow(2, 32)), u = e >>> 0;
        q(f, u, t), q(f, s, t);
      }
      function J(f, e, t) {
        const s = e / Math.pow(2, 32) >> 0, u = e >>> 0;
        q(f, u, t), q(f, s, t);
      }
      function Q(f, e, t) {
        fe[0] = BigInt.asIntN(64, e), k(f, pe[0], t), k(f, pe[1], t);
      }
      function ee(f, e, t) {
        fe[0] = BigInt.asIntN(64, e), k(f, pe[0], t), k(f, pe[1], t);
      }
      function Ee(f, e, t) {
        be[0] = e, k(f, pe[0], t);
      }
      function Te(f, e, t) {
        we[0] = e, k(f, pe[0], t), k(f, pe[1], t);
      }
      function rt(f, e, t) {
        f[t.offset++] = e ? 1 : 0;
      }
      function Ki(f, e, t) {
        e || (e = "");
        let s = Et(e, "utf8"), u = 0;
        if (s < 32)
          f[t.offset++] = s | 160, u = 1;
        else if (s < 256)
          f[t.offset++] = 217, f[t.offset++] = s % 255, u = 2;
        else if (s < 65536)
          f[t.offset++] = 218, C(f, s, t), u = 3;
        else if (s < 4294967296)
          f[t.offset++] = 219, q(f, s, t), u = 5;
        else
          throw new Error("String too long");
        return Ut(f, e, t), u + s;
      }
      function wn(f, e, t) {
        if (isNaN(e))
          return wn(f, 0, t);
        if (isFinite(e)) {
          if (e !== (e | 0))
            return Math.abs(e) <= 34028235e31 && (be[0] = e, Math.abs(Math.abs(be[0]) - Math.abs(e)) < 1e-4) ? (f[t.offset++] = 202, Ee(f, e, t), 5) : (f[t.offset++] = 203, Te(f, e, t), 9);
        } else return wn(f, e > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, t);
        return e >= 0 ? e < 128 ? (f[t.offset++] = e & 255, 1) : e < 256 ? (f[t.offset++] = 204, f[t.offset++] = e & 255, 2) : e < 65536 ? (f[t.offset++] = 205, C(f, e, t), 3) : e < 4294967296 ? (f[t.offset++] = 206, q(f, e, t), 5) : (f[t.offset++] = 207, J(f, e, t), 9) : e >= -32 ? (f[t.offset++] = 224 | e + 32, 1) : e >= -128 ? (f[t.offset++] = 208, x(f, e, t), 2) : e >= -32768 ? (f[t.offset++] = 209, N(f, e, t), 3) : e >= -2147483648 ? (f[t.offset++] = 210, k(f, e, t), 5) : (f[t.offset++] = 211, K(f, e, t), 9);
      }
      const ve = {
        int8: x,
        uint8: B,
        int16: N,
        uint16: C,
        int32: k,
        uint32: q,
        int64: K,
        uint64: J,
        bigint64: Q,
        biguint64: ee,
        float32: Ee,
        float64: Te,
        boolean: rt,
        string: Ki,
        number: wn,
        utf8Write: Ut,
        utf8Length: Et
      }, vt = new ArrayBuffer(8), it = new Int32Array(vt), Yi = new Float32Array(vt), Gi = new Float64Array(vt), Zi = new BigUint64Array(vt), Xi = new BigInt64Array(vt);
      function Fn(f, e, t) {
        for (var s = "", u = 0, l = e.offset, g = e.offset + t; l < g; l++) {
          var y = f[l];
          if ((y & 128) === 0) {
            s += String.fromCharCode(y);
            continue;
          }
          if ((y & 224) === 192) {
            s += String.fromCharCode((y & 31) << 6 | f[++l] & 63);
            continue;
          }
          if ((y & 240) === 224) {
            s += String.fromCharCode((y & 15) << 12 | (f[++l] & 63) << 6 | (f[++l] & 63) << 0);
            continue;
          }
          if ((y & 248) === 240) {
            u = (y & 7) << 18 | (f[++l] & 63) << 12 | (f[++l] & 63) << 6 | (f[++l] & 63) << 0, u >= 65536 ? (u -= 65536, s += String.fromCharCode((u >>> 10) + 55296, (u & 1023) + 56320)) : s += String.fromCharCode(u);
            continue;
          }
          console.error("Invalid byte " + y.toString(16));
        }
        return e.offset += t, s;
      }
      function Un(f, e) {
        return Ot(f, e) << 24 >> 24;
      }
      function Ot(f, e) {
        return f[e.offset++];
      }
      function zn(f, e) {
        return zt(f, e) << 16 >> 16;
      }
      function zt(f, e) {
        return f[e.offset++] | f[e.offset++] << 8;
      }
      function Ce(f, e) {
        return f[e.offset++] | f[e.offset++] << 8 | f[e.offset++] << 16 | f[e.offset++] << 24;
      }
      function ct(f, e) {
        return Ce(f, e) >>> 0;
      }
      function Vn(f, e) {
        return it[0] = Ce(f, e), Yi[0];
      }
      function qn(f, e) {
        return it[0] = Ce(f, e), it[1] = Ce(f, e), Gi[0];
      }
      function Hn(f, e) {
        const t = ct(f, e);
        return Ce(f, e) * Math.pow(2, 32) + t;
      }
      function Wn(f, e) {
        const t = ct(f, e);
        return ct(f, e) * Math.pow(2, 32) + t;
      }
      function Qi(f, e) {
        return it[0] = Ce(f, e), it[1] = Ce(f, e), Xi[0];
      }
      function es(f, e) {
        return it[0] = Ce(f, e), it[1] = Ce(f, e), Zi[0];
      }
      function ts(f, e) {
        return Ot(f, e) > 0;
      }
      function ns(f, e) {
        const t = f[e.offset++];
        let s;
        return t < 192 ? s = t & 31 : t === 217 ? s = Ot(f, e) : t === 218 ? s = zt(f, e) : t === 219 && (s = ct(f, e)), Fn(f, e, s);
      }
      function rs(f, e) {
        const t = f[e.offset++];
        if (t < 128)
          return t;
        if (t === 202)
          return Vn(f, e);
        if (t === 203)
          return qn(f, e);
        if (t === 204)
          return Ot(f, e);
        if (t === 205)
          return zt(f, e);
        if (t === 206)
          return ct(f, e);
        if (t === 207)
          return Wn(f, e);
        if (t === 208)
          return Un(f, e);
        if (t === 209)
          return zn(f, e);
        if (t === 210)
          return Ce(f, e);
        if (t === 211)
          return Hn(f, e);
        if (t > 223)
          return (255 - t + 1) * -1;
      }
      function is(f, e) {
        const t = f[e.offset];
        return (
          // fixstr
          t < 192 && t > 160 || // str 8
          t === 217 || // str 16
          t === 218 || // str 32
          t === 219
        );
      }
      const Oe = {
        utf8Read: Fn,
        int8: Un,
        uint8: Ot,
        int16: zn,
        uint16: zt,
        int32: Ce,
        uint32: ct,
        float32: Vn,
        float64: qn,
        int64: Hn,
        uint64: Wn,
        bigint64: Qi,
        biguint64: es,
        boolean: ts,
        string: ns,
        number: rs,
        stringCheck: is
      }, Jn = {}, ss = /* @__PURE__ */ new Map();
      function Me(f, e) {
        e.constructor && (ss.set(e.constructor, f), Jn[f] = e), e.encode && (ve[f] = e.encode), e.decode && (Oe[f] = e.decode);
      }
      function xt(f) {
        return Jn[f];
      }
      function os(f) {
        for (const e in f)
          Me(e, f[e]);
        return (e) => De(e);
      }
      const dt = class dt {
        static register(e) {
          const t = Object.getPrototypeOf(e);
          if (t !== ae) {
            let s = dt.inheritedTypes.get(t);
            s || (s = /* @__PURE__ */ new Set(), dt.inheritedTypes.set(t, s)), s.add(e);
          }
        }
        constructor(e) {
          this.types = {}, this.schemas = /* @__PURE__ */ new Map(), this.hasFilters = !1, this.parentFiltered = {}, e && this.discoverTypes(e);
        }
        has(e) {
          return this.schemas.has(e);
        }
        get(e) {
          return this.types[e];
        }
        add(e, t = this.schemas.size) {
          return this.schemas.has(e) ? !1 : (this.types[t] = e, e[Symbol.metadata] === void 0 && ue.initialize(e), this.schemas.set(e, t), !0);
        }
        getTypeId(e) {
          return this.schemas.get(e);
        }
        discoverTypes(e, t, s, u) {
          var y, v;
          if (u && this.registerFilteredByParent(e, t, s), !this.add(e))
            return;
          (y = dt.inheritedTypes.get(e)) == null || y.forEach((I) => {
            this.discoverTypes(I, t, s, u);
          });
          let l = e;
          for (; (l = Object.getPrototypeOf(l)) && l !== ae && // stop at root (Schema)
          l !== Function.prototype; )
            this.discoverTypes(l);
          const g = e[v = Symbol.metadata] ?? (e[v] = {});
          g[Z] && (this.hasFilters = !0);
          for (const I in g) {
            const T = I, L = g[T].type, D = g[T].tag !== void 0;
            if (typeof L != "string")
              if (Array.isArray(L)) {
                const F = L[0];
                if (F === "string")
                  continue;
                this.discoverTypes(F, e, T, u || D);
              } else if (typeof L == "function")
                this.discoverTypes(L, e, T, u || D);
              else {
                const F = Object.values(L)[0];
                if (typeof F == "string")
                  continue;
                this.discoverTypes(F, e, T, u || D);
              }
          }
        }
        /**
         * Keep track of which classes have filters applied.
         * Format: `${typeid}-${parentTypeid}-${parentIndex}`
         */
        registerFilteredByParent(e, t, s) {
          let l = `${this.schemas.get(e) ?? this.schemas.size}`;
          t && (l += `-${this.schemas.get(t)}`), l += `-${s}`, this.parentFiltered[l] = !0;
        }
        debug() {
          let e = "";
          for (const t in this.parentFiltered) {
            const s = t.split("-").map(Number), u = s.pop();
            e += `
		`, e += `${t}: ${s.reverse().map((l, g) => {
              const y = this.types[l], v = y[Symbol.metadata];
              let I = y.name;
              return g === 0 && (I += `[${v[u].name}]`), `${I}`;
            }).join(" -> ")}`;
          }
          return `TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${e}`;
        }
      };
      dt.inheritedTypes = /* @__PURE__ */ new Map();
      let je = dt;
      function Kn(f) {
        return Array.isArray(f) ? { array: f[0] } : typeof f.type < "u" ? f.type : f;
      }
      const ue = {
        addField(f, e, t, s, u) {
          if (e > 64)
            throw new Error(`Can't define field '${t}'.
Schema instances may only have up to 64 fields.`);
          f[e] = Object.assign(
            f[e] || {},
            // avoid overwriting previous field metadata (@owned / @deprecated)
            {
              type: Kn(s),
              index: e,
              name: t
            }
          ), Object.defineProperty(f, $, {
            value: f[$] || {},
            enumerable: !1,
            configurable: !0
          }), u ? (f[$][t] = u, f[$][`_${t}`] = {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !0
          }) : f[$][t] = {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(f, V, {
            value: e,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(f, t, {
            value: e,
            enumerable: !1,
            configurable: !0
          }), typeof f[e].type != "string" && (f[W] === void 0 && Object.defineProperty(f, W, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), f[W].push(e));
        },
        setTag(f, e, t) {
          const s = f[e], u = f[s];
          u.tag = t, f[Z] || (Object.defineProperty(f, Z, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(f, te, {
            value: {},
            enumerable: !1,
            configurable: !0
          })), f[Z].push(s), f[te][t] || (f[te][t] = []), f[te][t].push(s);
        },
        setFields(f, e) {
          const t = f.prototype.constructor;
          je.register(t);
          const s = Object.getPrototypeOf(t), u = s && s[Symbol.metadata], l = ue.initialize(t);
          t[c] || (t[c] = ae[c]), t[h] || (t[h] = ae[h]), t[w] || (t[w] = ae[w]), t.prototype.toJSON || (t.prototype.toJSON = ae.prototype.toJSON);
          let g = l[V] ?? (u && u[V]) ?? -1;
          g++;
          for (const y in e) {
            const v = e[y], I = Array.isArray(v) ? xt("array") : typeof Object.keys(v)[0] == "string" && xt(Object.keys(v)[0]), T = I ? Object.values(v)[0] : Kn(v);
            ue.addField(l, g, y, v, or(`_${y}`, g, T, I)), g++;
          }
          return f;
        },
        isDeprecated(f, e) {
          return f[e].deprecated === !0;
        },
        init(f) {
          const e = {};
          f[Symbol.metadata] = e, Object.defineProperty(e, V, {
            value: 0,
            enumerable: !1,
            configurable: !0
          });
        },
        initialize(f) {
          const e = Object.getPrototypeOf(f), t = e[Symbol.metadata];
          let s = f[Symbol.metadata] ?? /* @__PURE__ */ Object.create(null);
          return e !== ae && s === t && (s = /* @__PURE__ */ Object.create(null), t && (Object.setPrototypeOf(s, t), Object.defineProperty(s, V, {
            value: t[V],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), t[Z] !== void 0 && (Object.defineProperty(s, Z, {
            value: [...t[Z]],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Object.defineProperty(s, te, {
            value: { ...t[te] },
            enumerable: !1,
            configurable: !0,
            writable: !0
          })), t[W] !== void 0 && Object.defineProperty(s, W, {
            value: [...t[W]],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Object.defineProperty(s, $, {
            value: { ...t[$] },
            enumerable: !1,
            configurable: !0,
            writable: !0
          }))), f[Symbol.metadata] = s, s;
        },
        isValidInstance(f) {
          return f.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(f.constructor[Symbol.metadata], V);
        },
        getFields(f) {
          const e = f[Symbol.metadata], t = {};
          for (let s = 0; s <= e[V]; s++)
            t[e[s].name] = e[s].type;
          return t;
        }
      };
      function Pe(f, e) {
        const t = f.indexes[e];
        t === void 0 ? f.indexes[e] = f.operations.push(e) - 1 : f.operations[t] = e;
      }
      function Yn(f, e) {
        const t = f.indexes[e];
        t !== void 0 && (f.operations[t] = void 0), delete f.indexes[e];
      }
      function Se(f, e, t, s = e[t].queueRootIndex) {
        f && f[t][s] !== e && (e[t].queueRootIndex = f[t].push(e) - 1);
      }
      class ft {
        constructor(e) {
          this.isFiltered = !1, this.indexedOperations = {}, this.changes = { indexes: {}, operations: [] }, this.allChanges = { indexes: {}, operations: [] }, this.isNew = !0, this.ref = e;
          const t = e.constructor[Symbol.metadata];
          t != null && t[Z] && (this.allFilteredChanges = { indexes: {}, operations: [] }, this.filteredChanges = { indexes: {}, operations: [] });
        }
        setRoot(e) {
          var s;
          this.root = e, this.checkIsFiltered(this.parent, this.parentIndex);
          const t = this.ref.constructor[Symbol.metadata];
          t ? (s = t[W]) == null || s.forEach((u) => {
            const l = t[u], g = this.ref[l.name];
            g == null || g[d].setRoot(e);
          }) : this.ref[E] && typeof this.ref[E] != "string" && this.ref.forEach((u, l) => {
            u[d].setRoot(e);
          });
        }
        setParent(e, t, s) {
          var l;
          if (this.parent = e, this.parentIndex = s, !t)
            return;
          t !== this.root ? (this.root = t, this.checkIsFiltered(e, s)) : t.add(this);
          const u = this.ref.constructor[Symbol.metadata];
          u ? (l = u[W]) == null || l.forEach((g) => {
            const y = u[g], v = this.ref[y.name];
            v == null || v[d].setParent(this.ref, t, g);
          }) : this.ref[E] && typeof this.ref[E] != "string" && this.ref.forEach((g, y) => {
            g[d].setParent(this.ref, t, this.indexes[y] ?? y);
          });
        }
        forEachChild(e) {
          var s;
          const t = this.ref.constructor[Symbol.metadata];
          t ? (s = t[W]) == null || s.forEach((u) => {
            const l = t[u], g = this.ref[l.name];
            g && e(g[d], u);
          }) : this.ref[E] && typeof this.ref[E] != "string" && this.ref.forEach((u, l) => {
            e(u[d], this.indexes[l] ?? l);
          });
        }
        operation(e) {
          this.changes.operations.push(-e), Se(this.root, this, "changes");
        }
        change(e, t = r.OPERATION.ADD) {
          var y;
          const s = this.ref.constructor[Symbol.metadata], u = this.isFiltered || ((y = s == null ? void 0 : s[e]) == null ? void 0 : y.tag) !== void 0, l = u ? this.filteredChanges : this.changes, g = this.indexedOperations[e];
          if (!g || g === r.OPERATION.DELETE) {
            const v = g && g === r.OPERATION.DELETE ? r.OPERATION.DELETE_AND_ADD : t;
            this.indexedOperations[e] = v;
          }
          Pe(l, e), u ? (Pe(this.allFilteredChanges, e), this.root && (Se(this.root, this, "filteredChanges"), Se(this.root, this, "allFilteredChanges"))) : (Pe(this.allChanges, e), Se(this.root, this, "changes"));
        }
        shiftChangeIndexes(e) {
          const t = this.isFiltered ? this.filteredChanges : this.changes, s = {}, u = {};
          for (const l in this.indexedOperations)
            s[Number(l) + e] = this.indexedOperations[l], u[Number(l) + e] = t[l];
          this.indexedOperations = s, t.indexes = u, t.operations = t.operations.map((l) => l + e);
        }
        shiftAllChangeIndexes(e, t = 0) {
          this.filteredChanges !== void 0 ? (this._shiftAllChangeIndexes(e, t, this.allFilteredChanges), this._shiftAllChangeIndexes(e, t, this.allChanges)) : this._shiftAllChangeIndexes(e, t, this.allChanges);
        }
        _shiftAllChangeIndexes(e, t = 0, s) {
          const u = {};
          for (const l in s.indexes) {
            const g = s.indexes[l];
            g > t ? u[Number(l) + e] = g : u[l] = g;
          }
          s.indexes = u;
          for (let l = 0; l < s.operations.length; l++) {
            const g = s.operations[l];
            g > t && (s.operations[l] = g + e);
          }
        }
        indexedOperation(e, t, s = e) {
          this.indexedOperations[e] = t, this.filteredChanges !== void 0 ? (Pe(this.allFilteredChanges, s), Pe(this.filteredChanges, e), Se(this.root, this, "filteredChanges")) : (Pe(this.allChanges, s), Pe(this.changes, e), Se(this.root, this, "changes"));
        }
        getType(e) {
          return ue.isValidInstance(this.ref) ? this.ref.constructor[Symbol.metadata][e].type : this.ref[E];
        }
        getChange(e) {
          return this.indexedOperations[e];
        }
        //
        // used during `.encode()`
        //
        getValue(e, t = !1) {
          return this.ref[_](e, t);
        }
        delete(e, t, s = e) {
          var g;
          if (e === void 0) {
            try {
              throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`);
            } catch (y) {
              console.warn(y);
            }
            return;
          }
          const u = this.filteredChanges !== void 0 ? this.filteredChanges : this.changes;
          this.indexedOperations[e] = t ?? r.OPERATION.DELETE, Pe(u, e);
          const l = this.getValue(e);
          return l && l[d] && ((g = this.root) == null || g.remove(l[d])), Yn(this.allChanges, s), this.filteredChanges !== void 0 ? (Yn(this.allFilteredChanges, s), Se(this.root, this, "filteredChanges")) : Se(this.root, this, "changes"), l;
        }
        endEncode() {
          var e, t;
          this.indexedOperations = {}, (t = (e = this.ref)[O]) == null || t.call(e), this.isNew = !1;
        }
        discard(e = !1) {
          var t, s;
          (s = (t = this.ref)[O]) == null || s.call(t), this.indexedOperations = {}, this.changes.indexes = {}, this.changes.operations.length = 0, this.changes.queueRootIndex = void 0, this.filteredChanges !== void 0 && (this.filteredChanges.indexes = {}, this.filteredChanges.operations.length = 0, this.filteredChanges.queueRootIndex = void 0), e && (this.allChanges.indexes = {}, this.allChanges.operations.length = 0, this.allFilteredChanges !== void 0 && (this.allFilteredChanges.indexes = {}, this.allFilteredChanges.operations.length = 0), this.forEachChild((u, l) => {
            var g;
            return (g = this.root) == null ? void 0 : g.remove(u);
          }));
        }
        /**
         * Recursively discard all changes from this, and child structures.
         */
        discardAll() {
          const e = Object.keys(this.indexedOperations);
          for (let t = 0, s = e.length; t < s; t++) {
            const u = this.getValue(Number(e[t]));
            u && u[d] && u[d].discardAll();
          }
          this.discard();
        }
        ensureRefId() {
          this.refId === void 0 && (this.refId = this.root.getNextUniqueId());
        }
        get changed() {
          return Object.entries(this.indexedOperations).length > 0;
        }
        checkIsFiltered(e, t) {
          const s = this.root.add(this);
          this.root.types.hasFilters && (this._checkFilteredByParent(e, t), this.filteredChanges !== void 0 && (Se(this.root, this, "filteredChanges"), s && this.root.allFilteredChanges.push(this))), this.isFiltered || (Se(this.root, this, "changes"), s && this.root.allChanges.push(this));
        }
        _checkFilteredByParent(e, t) {
          if (!e)
            return;
          const s = ue.isValidInstance(this.ref) ? this.ref.constructor : this.ref[E];
          if (!ue.isValidInstance(e)) {
            const g = e[d];
            e = g.parent, t = g.parentIndex;
          }
          const u = e.constructor;
          let l = `${this.root.types.getTypeId(s)}`;
          if (u && (l += `-${this.root.types.schemas.get(u)}`), l += `-${t}`, this.isFiltered = e[d].isFiltered || this.root.types.parentFiltered[l], this.isFiltered && (this.filteredChanges = { indexes: {}, operations: [] }, this.allFilteredChanges = { indexes: {}, operations: [] }, this.changes.operations.length > 0)) {
            const g = this.changes;
            this.changes = this.filteredChanges, this.filteredChanges = g;
            const y = this.allFilteredChanges;
            this.allFilteredChanges = this.allChanges, this.allChanges = y;
          }
        }
      }
      function bn(f, e, t, s, u, l) {
        var g;
        typeof t == "string" ? (g = ve[t]) == null || g.call(ve, e, s, l) : t[Symbol.metadata] !== void 0 ? (ve.number(e, s[d].refId, l), (u & r.OPERATION.ADD) === r.OPERATION.ADD && f.tryEncodeTypeId(e, t, s.constructor, l)) : ve.number(e, s[d].refId, l);
      }
      const Gn = function(f, e, t, s, u, l, g, y, v) {
        if (e[l.offset++] = (s | u) & 255, u === r.OPERATION.DELETE)
          return;
        const I = t.ref, T = v[s];
        bn(f, e, v[s].type, I[T.name], u, l);
      }, Vt = function(f, e, t, s, u, l) {
        if (e[l.offset++] = u & 255, u === r.OPERATION.CLEAR || (ve.number(e, s, l), u === r.OPERATION.DELETE))
          return;
        const g = t.ref;
        if ((u & r.OPERATION.ADD) === r.OPERATION.ADD && typeof g.set == "function") {
          const I = t.ref.$indexes.get(s);
          ve.string(e, I, l);
        }
        const y = g[E], v = g[_](s);
        bn(f, e, y, v, u, l);
      }, Zn = function(f, e, t, s, u, l, g, y) {
        const v = t.ref, I = y && t.isFiltered && typeof t.getType(s) != "string";
        let T;
        if (I ? (T = v.tmpItems[s][d].refId, u === r.OPERATION.DELETE ? u = r.OPERATION.DELETE_BY_REFID : u === r.OPERATION.ADD && (u = r.OPERATION.ADD_BY_REFID)) : T = s, e[l.offset++] = u & 255, u === r.OPERATION.CLEAR || u === r.OPERATION.REVERSE || (ve.number(e, T, l), u === r.OPERATION.DELETE))
          return;
        const L = t.getType(s), D = t.getValue(s, g);
        bn(f, e, L, D, u, l);
      }, Xn = -1;
      function En(f, e, t, s, u, l, g, y) {
        const v = f.root, I = t[_](s);
        let T;
        if ((e & r.OPERATION.DELETE) === r.OPERATION.DELETE) {
          const L = v.refIds.get(I);
          L !== void 0 && v.removeRef(L), e !== r.OPERATION.DELETE_AND_ADD && t[S](s), T = void 0;
        }
        if (e !== r.OPERATION.DELETE) if (ae.is(u)) {
          const L = Oe.number(l, g);
          if (T = v.refs.get(L), (e & r.OPERATION.ADD) === r.OPERATION.ADD) {
            const D = f.getInstanceType(l, g, u);
            T || (T = f.createInstanceOfType(D)), v.addRef(L, T, T !== I || // increment ref count if value has changed
            e === r.OPERATION.DELETE_AND_ADD && T === I);
          }
        } else if (typeof u == "string")
          T = Oe[u](l, g);
        else {
          const L = xt(Object.keys(u)[0]), D = Oe.number(l, g), F = v.refs.has(D) ? I || v.refs.get(D) : new L.constructor();
          if (T = F.clone(!0), T[E] = Object.values(u)[0], I) {
            let z = v.refIds.get(I);
            if (z !== void 0 && D !== z) {
              const M = I.entries();
              let R;
              for (; (R = M.next()) && !R.done; ) {
                const [U, re] = R.value;
                typeof re == "object" && (z = v.refIds.get(re), v.removeRef(z)), y.push({
                  ref: I,
                  refId: z,
                  op: r.OPERATION.DELETE,
                  field: U,
                  value: void 0,
                  previousValue: re
                });
              }
            }
          }
          v.addRef(D, T, F !== I || e === r.OPERATION.DELETE_AND_ADD && F === I);
        }
        return { value: T, previousValue: I };
      }
      const Qn = function(f, e, t, s, u) {
        const l = e[t.offset++], g = s.constructor[Symbol.metadata], y = l >> 6 << 6, v = l % (y || 255), I = g[v];
        if (I === void 0)
          return console.warn("@colyseus/schema: field not defined at", { index: v, ref: s.constructor.name, metadata: g }), Xn;
        const { value: T, previousValue: L } = En(f, y, s, v, I.type, e, t, u);
        T != null && (s[I.name] = T), L !== T && u.push({
          ref: s,
          refId: f.currentRefId,
          op: y,
          field: I.name,
          value: T,
          previousValue: L
        });
      }, qt = function(f, e, t, s, u) {
        const l = e[t.offset++];
        if (l === r.OPERATION.CLEAR) {
          f.removeChildRefs(s, u), s.clear();
          return;
        }
        const g = Oe.number(e, t), y = s[E];
        let v;
        (l & r.OPERATION.ADD) === r.OPERATION.ADD ? typeof s.set == "function" ? (v = Oe.string(e, t), s.setIndex(g, v)) : v = g : v = s.getIndex(g);
        const { value: I, previousValue: T } = En(f, l, s, g, y, e, t, u);
        if (I != null) {
          if (typeof s.set == "function")
            s.$items.set(v, I);
          else if (typeof s.$setAt == "function")
            s.$setAt(g, I, l);
          else if (typeof s.add == "function") {
            const L = s.add(I);
            typeof L == "number" && s.setIndex(L, L);
          }
        }
        T !== I && u.push({
          ref: s,
          refId: f.currentRefId,
          op: l,
          field: "",
          // FIXME: remove this
          dynamicIndex: v,
          value: I,
          previousValue: T
        });
      }, as = function(f, e, t, s, u) {
        let l = e[t.offset++], g;
        if (l === r.OPERATION.CLEAR) {
          f.removeChildRefs(s, u), s.clear();
          return;
        } else if (l === r.OPERATION.REVERSE) {
          s.reverse();
          return;
        } else if (l === r.OPERATION.DELETE_BY_REFID) {
          const L = Oe.number(e, t), D = f.root.refs.get(L);
          g = s.findIndex((F) => F === D), s[S](g), u.push({
            ref: s,
            refId: f.currentRefId,
            op: r.OPERATION.DELETE,
            field: "",
            // FIXME: remove this
            dynamicIndex: g,
            value: void 0,
            previousValue: D
          });
          return;
        } else if (l === r.OPERATION.ADD_BY_REFID) {
          const L = Oe.number(e, t), D = f.root.refs.get(L);
          g = D ? s.findIndex((F) => F === D) : s.length;
        } else
          g = Oe.number(e, t);
        const y = s[E];
        let v = g;
        const { value: I, previousValue: T } = En(f, l, s, g, y, e, t, u);
        I != null && I !== T && s.$setAt(g, I, l), T !== I && u.push({
          ref: s,
          refId: f.currentRefId,
          op: l,
          field: "",
          // FIXME: remove this
          dynamicIndex: v,
          value: I,
          previousValue: T
        });
      };
      class er extends Error {
      }
      function cs(f, e, t, s) {
        let u, l = !1;
        switch (e) {
          case "number":
          case "int8":
          case "uint8":
          case "int16":
          case "uint16":
          case "int32":
          case "uint32":
          case "int64":
          case "uint64":
          case "float32":
          case "float64":
            u = "number", isNaN(f) && console.log(`trying to encode "NaN" in ${t.constructor.name}#${s}`);
            break;
          case "bigint64":
          case "biguint64":
            u = "bigint";
            break;
          case "string":
            u = "string", l = !0;
            break;
          case "boolean":
            return;
          default:
            return;
        }
        if (typeof f !== u && (!l || l && f !== null)) {
          let g = `'${JSON.stringify(f)}'${f && f.constructor && ` (${f.constructor.name})` || ""}`;
          throw new er(`a '${u}' was expected, but ${g} was provided in ${t.constructor.name}#${s}`);
        }
      }
      function Ht(f, e, t, s) {
        if (!(f instanceof e))
          throw new er(`a '${e.name}' was expected, but '${f && f.constructor.name}' was provided in ${t.constructor.name}#${s}`);
      }
      var tr, nr;
      const fs = (f, e) => {
        const t = f.toString(), s = e.toString();
        return t < s ? -1 : t > s ? 1 : 0;
      }, $e = class $e {
        /**
         * Determine if a property must be filtered.
         * - If returns false, the property is NOT going to be encoded.
         * - If returns true, the property is going to be encoded.
         *
         * Encoding with "filters" happens in two steps:
         * - First, the encoder iterates over all "not owned" properties and encodes them.
         * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
         */
        static [(tr = h, nr = w, A)](e, t, s) {
          var u;
          return !s || typeof e[E] == "string" || // view.items.has(ref[$getByIndex](index)[$changes])
          s.items.has((u = e.tmpItems[t]) == null ? void 0 : u[d]);
        }
        static is(e) {
          return (
            // type format: ["string"]
            Array.isArray(e) || // type format: { array: "string" }
            e.array !== void 0
          );
        }
        static from(e) {
          return new $e(...Array.from(e));
        }
        constructor(...e) {
          this.items = [], this.tmpItems = [], this.deletedIndexes = {}, Object.defineProperty(this, E, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
          });
          const t = new Proxy(this, {
            get: (s, u) => typeof u != "symbol" && // FIXME: d8 accuses this as low performance
            !isNaN(u) ? this.items[u] : Reflect.get(s, u),
            set: (s, u, l) => {
              var g;
              if (typeof u != "symbol" && !isNaN(u)) {
                if (l == null)
                  s.$deleteAt(u);
                else {
                  if (l[d]) {
                    Ht(l, s[E], s, u);
                    const y = s.items[u];
                    y !== void 0 ? (l[d].isNew ? this[d].indexedOperation(Number(u), r.OPERATION.MOVE_AND_ADD) : (s[d].getChange(Number(u)) & r.OPERATION.DELETE) === r.OPERATION.DELETE ? this[d].indexedOperation(Number(u), r.OPERATION.DELETE_AND_MOVE) : this[d].indexedOperation(Number(u), r.OPERATION.MOVE), (g = y[d].root) == null || g.remove(y[d])) : l[d].isNew && this[d].indexedOperation(Number(u), r.OPERATION.ADD), l[d].setParent(this, s[d].root, u);
                  } else
                    s.$changeAt(Number(u), l);
                  this.items[u] = l, this.tmpItems[u] = l;
                }
                return !0;
              } else
                return Reflect.set(s, u, l);
            },
            deleteProperty: (s, u) => (typeof u == "number" ? s.$deleteAt(u) : delete s[u], !0),
            has: (s, u) => typeof u != "symbol" && !isNaN(Number(u)) ? Reflect.has(this.items, u) : Reflect.has(s, u)
          });
          return this[d] = new ft(t), this[d].indexes = {}, e.length > 0 && this.push(...e), t;
        }
        set length(e) {
          e === 0 ? this.clear() : e < this.items.length ? this.splice(e, this.length - e) : console.warn("ArraySchema: can't set .length to a higher value than its length.");
        }
        get length() {
          return this.items.length;
        }
        push(...e) {
          var u;
          let t = this.tmpItems.length;
          const s = this[d];
          for (let l = 0, g = e.length; l < e.length; l++, t++) {
            const y = e[l];
            if (y == null)
              return;
            typeof y == "object" && this[E] && Ht(y, this[E], this, l), s.indexedOperation(t, r.OPERATION.ADD, this.items.length), this.items.push(y), this.tmpItems.push(y), (u = y[d]) == null || u.setParent(this, s.root, t);
          }
          return t;
        }
        /**
         * Removes the last element from an array and returns it.
         */
        pop() {
          let e = -1;
          for (let t = this.tmpItems.length - 1; t >= 0; t--)
            if (this.deletedIndexes[t] !== !0) {
              e = t;
              break;
            }
          if (!(e < 0))
            return this[d].delete(e, void 0, this.items.length - 1), this.deletedIndexes[e] = !0, this.items.pop();
        }
        at(e) {
          return e < 0 && (e += this.length), this.items[e];
        }
        // encoding only
        $changeAt(e, t) {
          var l, g, y;
          if (t == null) {
            console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
            return;
          }
          if (this.items[e] === t)
            return;
          const s = this[d], u = ((g = (l = s.indexes) == null ? void 0 : l[e]) == null ? void 0 : g.op) ?? r.OPERATION.ADD;
          s.change(e, u), (y = t[d]) == null || y.setParent(this, s.root, e);
        }
        // encoding only
        $deleteAt(e, t) {
          this[d].delete(e, t);
        }
        // decoding only
        $setAt(e, t, s) {
          e === 0 && s === r.OPERATION.ADD && this.items[e] !== void 0 ? this.items.unshift(t) : s === r.OPERATION.DELETE_AND_MOVE ? (this.items.splice(e, 1), this.items[e] = t) : this.items[e] = t;
        }
        clear() {
          if (this.items.length === 0)
            return;
          const e = this[d];
          e.forEachChild((t, s) => {
            t.discard(!0);
            const u = t.root;
            u !== void 0 && (u.removeChangeFromChangeSet("changes", t), u.removeChangeFromChangeSet("allChanges", t), u.removeChangeFromChangeSet("allFilteredChanges", t));
          }), e.discard(!0), e.operation(r.OPERATION.CLEAR), this.items.length = 0, this.tmpItems.length = 0;
        }
        /**
         * Combines two or more arrays.
         * @param items Additional items to add to the end of array1.
         */
        // @ts-ignore
        concat(...e) {
          return new $e(...this.items.concat(...e));
        }
        /**
         * Adds all the elements of an array separated by the specified separator string.
         * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
         */
        join(e) {
          return this.items.join(e);
        }
        /**
         * Reverses the elements in an Array.
         */
        // @ts-ignore
        reverse() {
          return this[d].operation(r.OPERATION.REVERSE), this.items.reverse(), this.tmpItems.reverse(), this;
        }
        /**
         * Removes the first element from an array and returns it.
         */
        shift() {
          if (this.items.length === 0)
            return;
          const e = this.tmpItems.findIndex((s, u) => s === this.items[0]), t = this[d];
          return t.delete(e), t.shiftAllChangeIndexes(-1, e), this.items.shift();
        }
        /**
         * Returns a section of an array.
         * @param start The beginning of the specified portion of the array.
         * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
         */
        slice(e, t) {
          const s = new $e();
          return s.push(...this.items.slice(e, t)), s;
        }
        /**
         * Sorts an array.
         * @param compareFn Function used to determine the order of the elements. It is expected to return
         * a negative value if first argument is less than second argument, zero if they're equal and a positive
         * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
         * ```ts
         * [11,2,22,1].sort((a, b) => a - b)
         * ```
         */
        sort(e = fs) {
          const t = this[d];
          return this.items.sort(e).forEach((u, l) => t.change(l, r.OPERATION.REPLACE)), this.tmpItems.sort(e), this;
        }
        /**
         * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
         * @param start The zero-based location in the array from which to start removing elements.
         * @param deleteCount The number of elements to remove.
         * @param insertItems Elements to insert into the array in place of the deleted elements.
         */
        splice(e, t = this.items.length - e, ...s) {
          var v;
          const u = this[d], l = this.tmpItems.length, g = s.length, y = [];
          for (let I = 0; I < l; I++)
            this.deletedIndexes[I] !== !0 && y.push(I);
          for (let I = e; I < e + t; I++) {
            const T = y[I];
            u.delete(T), this.deletedIndexes[T] = !0;
          }
          for (let I = 0; I < g; I++) {
            const T = y[e] + I;
            u.indexedOperation(T, r.OPERATION.ADD), (v = s[I][d]) == null || v.setParent(this, u.root, T);
          }
          return t > g && u.shiftAllChangeIndexes(-(t - g), y[e + g]), this.items.splice(e, t, ...s);
        }
        /**
         * Inserts new elements at the start of an array.
         * @param items  Elements to insert at the start of the Array.
         */
        unshift(...e) {
          const t = this[d];
          return t.shiftChangeIndexes(e.length), t.isFiltered ? Pe(t.filteredChanges, this.items.length) : Pe(t.allChanges, this.items.length), e.forEach((s, u) => {
            t.change(u, r.OPERATION.ADD);
          }), this.tmpItems.unshift(...e), this.items.unshift(...e);
        }
        /**
         * Returns the index of the first occurrence of a value in an array.
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
         */
        indexOf(e, t) {
          return this.items.indexOf(e, t);
        }
        /**
         * Returns the index of the last occurrence of a specified value in an array.
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
         */
        lastIndexOf(e, t = this.length - 1) {
          return this.items.lastIndexOf(e, t);
        }
        every(e, t) {
          return this.items.every(e, t);
        }
        /**
         * Determines whether the specified callback function returns true for any element of an array.
         * @param callbackfn A function that accepts up to three arguments. The some method calls
         * the callbackfn function for each element in the array until the callbackfn returns a value
         * which is coercible to the Boolean value true, or until the end of the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function.
         * If thisArg is omitted, undefined is used as the this value.
         */
        some(e, t) {
          return this.items.some(e, t);
        }
        /**
         * Performs the specified action for each element in an array.
         * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
         * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        forEach(e, t) {
          return this.items.forEach(e, t);
        }
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
         * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        map(e, t) {
          return this.items.map(e, t);
        }
        filter(e, t) {
          return this.items.filter(e, t);
        }
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */
        reduce(e, t) {
          return this.items.reduce(e, t);
        }
        /**
         * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */
        reduceRight(e, t) {
          return this.items.reduceRight(e, t);
        }
        /**
         * Returns the value of the first element in the array where predicate is true, and undefined
         * otherwise.
         * @param predicate find calls predicate once for each element of the array, in ascending
         * order, until it finds one where predicate returns true. If such an element is found, find
         * immediately returns that element value. Otherwise, find returns undefined.
         * @param thisArg If provided, it will be used as the this value for each invocation of
         * predicate. If it is not provided, undefined is used instead.
         */
        find(e, t) {
          return this.items.find(e, t);
        }
        /**
         * Returns the index of the first element in the array where predicate is true, and -1
         * otherwise.
         * @param predicate find calls predicate once for each element of the array, in ascending
         * order, until it finds one where predicate returns true. If such an element is found,
         * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
         * @param thisArg If provided, it will be used as the this value for each invocation of
         * predicate. If it is not provided, undefined is used instead.
         */
        findIndex(e, t) {
          return this.items.findIndex(e, t);
        }
        /**
         * Returns the this object after filling the section identified by start and end with value
         * @param value value to fill array section with
         * @param start index to start filling the array at. If start is negative, it is treated as
         * length+start where length is the length of the array.
         * @param end index to stop filling the array at. If end is negative, it is treated as
         * length+end.
         */
        fill(e, t, s) {
          throw new Error("ArraySchema#fill() not implemented");
        }
        /**
         * Returns the this object after copying a section of the array identified by start and end
         * to the same array starting at position target
         * @param target If target is negative, it is treated as length+target where length is the
         * length of the array.
         * @param start If start is negative, it is treated as length+start. If end is negative, it
         * is treated as length+end.
         * @param end If not specified, length of the this object is used as its default value.
         */
        copyWithin(e, t, s) {
          throw new Error("ArraySchema#copyWithin() not implemented");
        }
        /**
         * Returns a string representation of an array.
         */
        toString() {
          return this.items.toString();
        }
        /**
         * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
         */
        toLocaleString() {
          return this.items.toLocaleString();
        }
        /** Iterator */
        [Symbol.iterator]() {
          return this.items[Symbol.iterator]();
        }
        static get [Symbol.species]() {
          return $e;
        }
        /**
         * Returns an iterable of key, value pairs for every entry in the array
         */
        entries() {
          return this.items.entries();
        }
        /**
         * Returns an iterable of keys in the array
         */
        keys() {
          return this.items.keys();
        }
        /**
         * Returns an iterable of values in the array
         */
        values() {
          return this.items.values();
        }
        /**
         * Determines whether an array includes a certain element, returning true or false as appropriate.
         * @param searchElement The element to search for.
         * @param fromIndex The position in this array at which to begin searching for searchElement.
         */
        includes(e, t) {
          return this.items.includes(e, t);
        }
        //
        // ES2022
        //
        /**
         * Calls a defined callback function on each element of an array. Then, flattens the result into
         * a new array.
         * This is identical to a map followed by flat with depth 1.
         *
         * @param callback A function that accepts up to three arguments. The flatMap method calls the
         * callback function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callback function. If
         * thisArg is omitted, undefined is used as the this value.
         */
        // @ts-ignore
        flatMap(e, t) {
          throw new Error("ArraySchema#flatMap() is not supported.");
        }
        /**
         * Returns a new array with all sub-array elements concatenated into it recursively up to the
         * specified depth.
         *
         * @param depth The maximum recursion depth
         */
        // @ts-ignore
        flat(e) {
          throw new Error("ArraySchema#flat() is not supported.");
        }
        findLast() {
          return this.items.findLast.apply(this.items, arguments);
        }
        findLastIndex(...e) {
          return this.items.findLastIndex.apply(this.items, arguments);
        }
        //
        // ES2023
        //
        with(e, t) {
          const s = this.items.slice();
          return e < 0 && (e += this.length), s[e] = t, new $e(...s);
        }
        toReversed() {
          return this.items.slice().reverse();
        }
        toSorted(e) {
          return this.items.slice().sort(e);
        }
        // @ts-ignore
        toSpliced(e, t, ...s) {
          return this.items.toSpliced.apply(copy, arguments);
        }
        [_](e, t = !1) {
          return t ? this.items[e] : this.deletedIndexes[e] ? this.items[e] : this.tmpItems[e] || this.items[e];
        }
        [S](e) {
          this.items[e] = void 0, this.tmpItems[e] = void 0;
        }
        [O]() {
          this.tmpItems = this.items.slice(), this.deletedIndexes = {};
        }
        [P]() {
          this.items = this.items.filter((e) => e !== void 0), this.tmpItems = this.items.slice();
        }
        toArray() {
          return this.items.slice(0);
        }
        toJSON() {
          return this.toArray().map((e) => typeof e.toJSON == "function" ? e.toJSON() : e);
        }
        //
        // Decoding utilities
        //
        clone(e) {
          let t;
          return e ? (t = new $e(), t.push(...this.items)) : t = new $e(...this.map((s) => s[d] ? s.clone() : s)), t;
        }
      };
      $e[tr] = Zn, $e[nr] = as;
      let Le = $e;
      Me("array", { constructor: Le });
      var rr, ir;
      const We = class We {
        /**
         * Determine if a property must be filtered.
         * - If returns false, the property is NOT going to be encoded.
         * - If returns true, the property is going to be encoded.
         *
         * Encoding with "filters" happens in two steps:
         * - First, the encoder iterates over all "not owned" properties and encodes them.
         * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
         */
        static [(rr = h, ir = w, A)](e, t, s) {
          return !s || typeof e[E] == "string" || s.items.has((e[_](t) ?? e.deletedItems[t])[d]);
        }
        static is(e) {
          return e.map !== void 0;
        }
        constructor(e) {
          if (this.$items = /* @__PURE__ */ new Map(), this.$indexes = /* @__PURE__ */ new Map(), this.deletedItems = {}, this[d] = new ft(this), this[d].indexes = {}, e)
            if (e instanceof Map || e instanceof We)
              e.forEach((t, s) => this.set(s, t));
            else
              for (const t in e)
                this.set(t, e[t]);
          Object.defineProperty(this, E, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
          });
        }
        /** Iterator */
        [Symbol.iterator]() {
          return this.$items[Symbol.iterator]();
        }
        get [Symbol.toStringTag]() {
          return this.$items[Symbol.toStringTag];
        }
        static get [Symbol.species]() {
          return We;
        }
        set(e, t) {
          var y;
          if (t == null)
            throw new Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);
          typeof t == "object" && this[E] && Ht(t, this[E], this, e), e = e.toString();
          const s = this[d], u = t[d] !== void 0;
          let l, g;
          if (typeof s.indexes[e] < "u") {
            l = s.indexes[e], g = r.OPERATION.REPLACE;
            const v = this.$items.get(e);
            if (v === t)
              return;
            u && (g = r.OPERATION.DELETE_AND_ADD, v !== void 0 && ((y = v[d].root) == null || y.remove(v[d])));
          } else
            l = s.indexes[V] ?? 0, g = r.OPERATION.ADD, this.$indexes.set(l, e), s.indexes[e] = l, s.indexes[V] = l + 1;
          return this.$items.set(e, t), s.change(l, g), u && t[d].setParent(this, s.root, l), this;
        }
        get(e) {
          return this.$items.get(e);
        }
        delete(e) {
          const t = this[d].indexes[e];
          return this.deletedItems[t] = this[d].delete(t), this.$items.delete(e);
        }
        clear() {
          const e = this[d];
          e.discard(!0), e.indexes = {}, this.$indexes.clear(), this.$items.clear(), e.operation(r.OPERATION.CLEAR);
        }
        has(e) {
          return this.$items.has(e);
        }
        forEach(e) {
          this.$items.forEach(e);
        }
        entries() {
          return this.$items.entries();
        }
        keys() {
          return this.$items.keys();
        }
        values() {
          return this.$items.values();
        }
        get size() {
          return this.$items.size;
        }
        setIndex(e, t) {
          this.$indexes.set(e, t);
        }
        getIndex(e) {
          return this.$indexes.get(e);
        }
        [_](e) {
          return this.$items.get(this.$indexes.get(e));
        }
        [S](e) {
          const t = this.$indexes.get(e);
          this.$items.delete(t), this.$indexes.delete(e);
        }
        [O]() {
          this.deletedItems = {};
        }
        toJSON() {
          const e = {};
          return this.forEach((t, s) => {
            e[s] = typeof t.toJSON == "function" ? t.toJSON() : t;
          }), e;
        }
        //
        // Decoding utilities
        //
        // @ts-ignore
        clone(e) {
          let t;
          return e ? t = Object.assign(new We(), this) : (t = new We(), this.forEach((s, u) => {
            s[d] ? t.set(u, s.clone()) : t.set(u, s);
          })), t;
        }
      };
      We[rr] = Vt, We[ir] = qt;
      let Ve = We;
      Me("map", { constructor: Ve });
      const qe = -1;
      function us(f) {
        return je.register(f), f;
      }
      function sr(f = qe) {
        return function(e, t) {
          var y;
          const s = e.constructor, l = Object.getPrototypeOf(s)[Symbol.metadata], g = s[y = Symbol.metadata] ?? (s[y] = Object.assign({}, s[Symbol.metadata], l ?? /* @__PURE__ */ Object.create(null)));
          ue.setTag(g, t, f);
        };
      }
      function De(f, e) {
        return function(t, s) {
          const u = t.constructor;
          if (!f)
            throw new Error(`${u.name}: @type() reference provided for "${s}" is undefined. Make sure you don't have any circular dependencies.`);
          je.register(u);
          const g = Object.getPrototypeOf(u)[Symbol.metadata], y = ue.initialize(u);
          let v = y[s];
          if (y[v] !== void 0) {
            if (y[v].deprecated)
              return;
            if (y[v].type !== void 0)
              try {
                throw new Error(`@colyseus/schema: Duplicate '${s}' definition on '${u.name}'.
Check @type() annotation`);
              } catch (I) {
                const T = I.stack.split(`
`)[4].trim();
                throw new Error(`${I.message} ${T}`);
              }
          } else
            v = y[V] ?? (g && g[V]) ?? -1, v++;
          if (e && e.manual)
            ue.addField(y, v, s, f, {
              // do not declare getter/setter descriptor
              enumerable: !0,
              configurable: !0,
              writable: !0
            });
          else {
            const I = Array.isArray(f) ? xt("array") : typeof Object.keys(f)[0] == "string" && xt(Object.keys(f)[0]), T = I ? Object.values(f)[0] : f;
            ue.addField(y, v, s, f, or(`_${s}`, v, T, I));
          }
        };
      }
      function or(f, e, t, s) {
        return {
          get: function() {
            return this[f];
          },
          set: function(u) {
            var g, y;
            const l = this[f] ?? void 0;
            if (u !== l) {
              if (u != null) {
                s ? (s.constructor === Le && !(u instanceof Le) && (u = new Le(...u)), s.constructor === Ve && !(u instanceof Ve) && (u = new Ve(u)), u[E] = t) : typeof t != "string" ? Ht(u, t, this, f.substring(1)) : cs(u, t, this, f.substring(1));
                const v = this[d];
                l !== void 0 && l[d] ? ((g = v.root) == null || g.remove(l[d]), this.constructor[c](v, e, r.OPERATION.DELETE_AND_ADD)) : this.constructor[c](v, e, r.OPERATION.ADD), (y = u[d]) == null || y.setParent(this, v.root, e);
              } else l !== void 0 && this[d].delete(e);
              this[f] = u;
            }
          },
          enumerable: !0,
          configurable: !0
        };
      }
      function ls(f = !0) {
        return function(e, t) {
          var v;
          const s = e.constructor, l = Object.getPrototypeOf(s)[Symbol.metadata], g = s[v = Symbol.metadata] ?? (s[v] = Object.assign({}, s[Symbol.metadata], l ?? /* @__PURE__ */ Object.create(null))), y = g[t];
          g[y].deprecated = !0, f && (g[$] ?? (g[$] = {}), g[$][t] = {
            get: function() {
              throw new Error(`${t} is deprecated.`);
            },
            set: function(I) {
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(g, y, {
            value: g[y],
            enumerable: !1,
            configurable: !0
          });
        };
      }
      function hs(f, e, t) {
        for (let s in e)
          De(e[s], t)(f.prototype, s);
        return f;
      }
      function ar(f, e, t = ae) {
        const s = {}, u = {};
        for (let g in f) {
          const y = f[g];
          typeof y == "object" && (y.default !== void 0 && (s[g] = y.default), y.view !== void 0 && (u[g] = typeof y.view == "boolean" ? qe : y.view));
        }
        const l = ue.setFields(class extends t {
          constructor(...g) {
            g[0] = Object.assign({}, s, g[0]), super(...g);
          }
        }, f);
        for (let g in u)
          sr(u[g])(l.prototype, g);
        return e && Object.defineProperty(l, "name", { value: e }), l.extends = (g, y) => ar(g, y, l), l;
      }
      function Wt(f) {
        return new Array(f).fill(0).map((e, t) => t === f - 1 ? "└─ " : "   ").join("");
      }
      function ds(f) {
        const e = f[d].root, t = {
          ops: {},
          refs: []
        };
        return e.changes.forEach((s) => {
          const u = s.indexedOperations;
          t.refs.push(`refId#${s.refId}`);
          for (const l in u) {
            const g = u[l], y = r.OPERATION[g];
            t.ops[y] || (t.ops[y] = 0), t.ops[r.OPERATION[g]]++;
          }
        }), t;
      }
      var cr, fr;
      const St = class St {
        /**
         * Assign the property descriptors required to track changes on this instance.
         * @param instance
         */
        static initialize(e) {
          var t;
          Object.defineProperty(e, d, {
            value: new ft(e),
            enumerable: !1,
            writable: !0
          }), Object.defineProperties(e, ((t = e.constructor[Symbol.metadata]) == null ? void 0 : t[$]) || {});
        }
        static is(e) {
          return typeof e[Symbol.metadata] == "object";
        }
        /**
         * Track property changes
         */
        static [(cr = h, fr = w, c)](e, t, s = r.OPERATION.ADD) {
          e.change(t, s);
        }
        /**
         * Determine if a property must be filtered.
         * - If returns false, the property is NOT going to be encoded.
         * - If returns true, the property is going to be encoded.
         *
         * Encoding with "filters" happens in two steps:
         * - First, the encoder iterates over all "not owned" properties and encodes them.
         * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
         */
        static [A](e, t, s) {
          var g, y;
          const l = (g = e.constructor[Symbol.metadata][t]) == null ? void 0 : g.tag;
          if (s === void 0)
            return l === void 0;
          if (l === void 0)
            return !0;
          if (l === qe)
            return s.items.has(e[d]);
          {
            const v = (y = s.tags) == null ? void 0 : y.get(e[d]);
            return v && v.has(l);
          }
        }
        // allow inherited classes to have a constructor
        constructor(...e) {
          St.initialize(this), e[0] && Object.assign(this, e[0]);
        }
        assign(e) {
          return Object.assign(this, e), this;
        }
        /**
         * (Server-side): Flag a property to be encoded for the next patch.
         * @param instance Schema instance
         * @param property string representing the property name, or number representing the index of the property.
         * @param operation OPERATION to perform (detected automatically)
         */
        setDirty(e, t) {
          const s = this.constructor[Symbol.metadata];
          this[d].change(s[s[e]].index, t);
        }
        clone() {
          var s;
          const e = new this.constructor(), t = this.constructor[Symbol.metadata];
          for (const u in t) {
            const l = t[u].name;
            typeof this[l] == "object" && typeof ((s = this[l]) == null ? void 0 : s.clone) == "function" ? e[l] = this[l].clone() : e[l] = this[l];
          }
          return e;
        }
        toJSON() {
          const e = {}, t = this.constructor[Symbol.metadata];
          for (const s in t) {
            const u = t[s], l = u.name;
            !u.deprecated && this[l] !== null && typeof this[l] < "u" && (e[l] = typeof this[l].toJSON == "function" ? this[l].toJSON() : this[l]);
          }
          return e;
        }
        discardAllChanges() {
          this[d].discardAll();
        }
        [_](e) {
          const t = this.constructor[Symbol.metadata];
          return this[t[e].name];
        }
        [S](e) {
          const t = this.constructor[Symbol.metadata];
          this[t[e].name] = void 0;
        }
        /**
         * Inspect the `refId` of all Schema instances in the tree. Optionally display the contents of the instance.
         *
         * @param ref Schema instance
         * @param showContents display JSON contents of the instance
         * @returns
         */
        static debugRefIds(e, t = !1, s = 0) {
          const u = t ? ` - ${JSON.stringify(e.toJSON())}` : "", l = e[d], g = l.refId;
          let y = "";
          return y += `${Wt(s)}${e.constructor.name} (refId: ${g})${u}
`, l.forEachChild((v) => y += this.debugRefIds(v.ref, t, s + 1)), y;
        }
        /**
         * Return a string representation of the changes on a Schema instance.
         * The list of changes is cleared after each encode.
         *
         * @param instance Schema instance
         * @param isEncodeAll Return "full encode" instead of current change set.
         * @returns
         */
        static debugChanges(e, t = !1) {
          const s = e[d], u = t ? s.allChanges : s.changes, l = t ? "allChanges" : "changes";
          let g = `${e.constructor.name} (${s.refId}) -> .${l}:
`;
          function y(v) {
            v.operations.filter((I) => I).forEach((I) => {
              const T = s.indexedOperations[I];
              console.log({ index: I, operation: T }), g += `- [${I}]: ${r.OPERATION[T]} (${JSON.stringify(s.getValue(Number(I), t))})
`;
            });
          }
          return y(u), !t && s.filteredChanges && s.filteredChanges.operations.filter((v) => v).length > 0 && (g += `${e.constructor.name} (${s.refId}) -> .filteredChanges:
`, y(s.filteredChanges)), t && s.allFilteredChanges && s.allFilteredChanges.operations.filter((v) => v).length > 0 && (g += `${e.constructor.name} (${s.refId}) -> .allFilteredChanges:
`, y(s.allFilteredChanges)), g;
        }
        static debugChangesDeep(e, t = "changes") {
          var T, L;
          let s = "";
          const u = e[d], l = u.root, g = /* @__PURE__ */ new Map(), y = [];
          let v = 0;
          for (const [D, F] of Object.entries(l[t])) {
            const z = l.changeTrees[D];
            let M = !1, R = [], U = (T = z.parent) == null ? void 0 : T[d];
            if (z === u)
              M = !0;
            else
              for (; U !== void 0; ) {
                if (R.push(U), U.ref === e) {
                  M = !0;
                  break;
                }
                U = (L = U.parent) == null ? void 0 : L[d];
              }
            M && (y.push(z.refId), v += Object.keys(F).length, g.set(z, R.reverse()));
          }
          s += `---
`, s += `root refId: ${u.refId}
`, s += `Total instances: ${y.length} (refIds: ${y.join(", ")})
`, s += `Total changes: ${v}
`, s += `---
`;
          const I = /* @__PURE__ */ new WeakSet();
          for (const [D, F] of g.entries()) {
            F.forEach((re, de) => {
              I.has(re) || (s += `${Wt(de)}${re.ref.constructor.name} (refId: ${re.refId})
`, I.add(re));
            });
            const z = D.indexedOperations, M = F.length, R = Wt(M), U = M > 0 ? `(${D.parentIndex}) ` : "";
            s += `${R}${U}${D.ref.constructor.name} (refId: ${D.refId}) - changes: ${Object.keys(z).length}
`;
            for (const re in z) {
              const de = z[re];
              s += `${Wt(M + 1)}${r.OPERATION[de]}: ${re}
`;
            }
          }
          return `${s}`;
        }
      };
      St[cr] = Gn, St[fr] = Qn;
      let ae = St;
      var ur, lr;
      const gt = class gt {
        /**
         * Determine if a property must be filtered.
         * - If returns false, the property is NOT going to be encoded.
         * - If returns true, the property is going to be encoded.
         *
         * Encoding with "filters" happens in two steps:
         * - First, the encoder iterates over all "not owned" properties and encodes them.
         * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
         */
        static [(ur = h, lr = w, A)](e, t, s) {
          return !s || typeof e[E] == "string" || s.items.has(e[_](t)[d]);
        }
        static is(e) {
          return e.collection !== void 0;
        }
        constructor(e) {
          this.$items = /* @__PURE__ */ new Map(), this.$indexes = /* @__PURE__ */ new Map(), this.$refId = 0, this[d] = new ft(this), this[d].indexes = {}, e && e.forEach((t) => this.add(t)), Object.defineProperty(this, E, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
          });
        }
        add(e) {
          const t = this.$refId++;
          return e[d] !== void 0 && e[d].setParent(this, this[d].root, t), this[d].indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, e), this[d].change(t), t;
        }
        at(e) {
          const t = Array.from(this.$items.keys())[e];
          return this.$items.get(t);
        }
        entries() {
          return this.$items.entries();
        }
        delete(e) {
          const t = this.$items.entries();
          let s, u;
          for (; (u = t.next()) && !u.done; )
            if (e === u.value[1]) {
              s = u.value[0];
              break;
            }
          return s === void 0 ? !1 : (this[d].delete(s), this.$indexes.delete(s), this.$items.delete(s));
        }
        clear() {
          const e = this[d];
          e.discard(!0), e.indexes = {}, this.$indexes.clear(), this.$items.clear(), e.operation(r.OPERATION.CLEAR);
        }
        has(e) {
          return Array.from(this.$items.values()).some((t) => t === e);
        }
        forEach(e) {
          this.$items.forEach((t, s, u) => e(t, s, this));
        }
        values() {
          return this.$items.values();
        }
        get size() {
          return this.$items.size;
        }
        /** Iterator */
        [Symbol.iterator]() {
          return this.$items.values();
        }
        setIndex(e, t) {
          this.$indexes.set(e, t);
        }
        getIndex(e) {
          return this.$indexes.get(e);
        }
        [_](e) {
          return this.$items.get(this.$indexes.get(e));
        }
        [S](e) {
          const t = this.$indexes.get(e);
          this.$items.delete(t), this.$indexes.delete(e);
        }
        toArray() {
          return Array.from(this.$items.values());
        }
        toJSON() {
          const e = [];
          return this.forEach((t, s) => {
            e.push(typeof t.toJSON == "function" ? t.toJSON() : t);
          }), e;
        }
        //
        // Decoding utilities
        //
        clone(e) {
          let t;
          return e ? t = Object.assign(new gt(), this) : (t = new gt(), this.forEach((s) => {
            s[d] ? t.add(s.clone()) : t.add(s);
          })), t;
        }
      };
      gt[ur] = Vt, gt[lr] = qt;
      let _t = gt;
      Me("collection", { constructor: _t });
      var hr, dr;
      const pt = class pt {
        /**
         * Determine if a property must be filtered.
         * - If returns false, the property is NOT going to be encoded.
         * - If returns true, the property is going to be encoded.
         *
         * Encoding with "filters" happens in two steps:
         * - First, the encoder iterates over all "not owned" properties and encodes them.
         * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
         */
        static [(hr = h, dr = w, A)](e, t, s) {
          return !s || typeof e[E] == "string" || s.items.has(e[_](t)[d]);
        }
        static is(e) {
          return e.set !== void 0;
        }
        constructor(e) {
          this.$items = /* @__PURE__ */ new Map(), this.$indexes = /* @__PURE__ */ new Map(), this.$refId = 0, this[d] = new ft(this), this[d].indexes = {}, e && e.forEach((t) => this.add(t)), Object.defineProperty(this, E, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
          });
        }
        add(e) {
          var u;
          if (this.has(e))
            return !1;
          const t = this.$refId++;
          e[d] !== void 0 && e[d].setParent(this, this[d].root, t);
          const s = ((u = this[d].indexes[t]) == null ? void 0 : u.op) ?? r.OPERATION.ADD;
          return this[d].indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, e), this[d].change(t, s), t;
        }
        entries() {
          return this.$items.entries();
        }
        delete(e) {
          const t = this.$items.entries();
          let s, u;
          for (; (u = t.next()) && !u.done; )
            if (e === u.value[1]) {
              s = u.value[0];
              break;
            }
          return s === void 0 ? !1 : (this[d].delete(s), this.$indexes.delete(s), this.$items.delete(s));
        }
        clear() {
          const e = this[d];
          e.discard(!0), e.indexes = {}, this.$indexes.clear(), this.$items.clear(), e.operation(r.OPERATION.CLEAR);
        }
        has(e) {
          const t = this.$items.values();
          let s = !1, u;
          for (; (u = t.next()) && !u.done; )
            if (e === u.value) {
              s = !0;
              break;
            }
          return s;
        }
        forEach(e) {
          this.$items.forEach((t, s, u) => e(t, s, this));
        }
        values() {
          return this.$items.values();
        }
        get size() {
          return this.$items.size;
        }
        /** Iterator */
        [Symbol.iterator]() {
          return this.$items.values();
        }
        setIndex(e, t) {
          this.$indexes.set(e, t);
        }
        getIndex(e) {
          return this.$indexes.get(e);
        }
        [_](e) {
          return this.$items.get(this.$indexes.get(e));
        }
        [S](e) {
          const t = this.$indexes.get(e);
          this.$items.delete(t), this.$indexes.delete(e);
        }
        toArray() {
          return Array.from(this.$items.values());
        }
        toJSON() {
          const e = [];
          return this.forEach((t, s) => {
            e.push(typeof t.toJSON == "function" ? t.toJSON() : t);
          }), e;
        }
        //
        // Decoding utilities
        //
        clone(e) {
          let t;
          return e ? t = Object.assign(new pt(), this) : (t = new pt(), this.forEach((s) => {
            s[d] ? t.add(s.clone()) : t.add(s);
          })), t;
        }
      };
      pt[hr] = Vt, pt[dr] = qt;
      let It = pt;
      Me("set", { constructor: It });
      function He(f, e, t, s) {
        var u = arguments.length, l = u < 3 ? e : s, g;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") l = Reflect.decorate(f, e, t, s);
        else for (var y = f.length - 1; y >= 0; y--) (g = f[y]) && (l = (u < 3 ? g(l) : u > 3 ? g(e, t, l) : g(e, t)) || l);
        return u > 3 && l && Object.defineProperty(e, t, l), l;
      }
      typeof SuppressedError == "function" && SuppressedError;
      function gr(f, e) {
        if (e === -1 || e >= f.length)
          return !1;
        const t = f.length - 1;
        for (let s = e; s < t; s++)
          f[s] = f[s + 1];
        return f.length = t, !0;
      }
      class gs {
        constructor(e) {
          this.types = e, this.nextUniqueId = 0, this.refCount = {}, this.changeTrees = {}, this.allChanges = [], this.allFilteredChanges = [], this.changes = [], this.filteredChanges = [];
        }
        getNextUniqueId() {
          return this.nextUniqueId++;
        }
        add(e) {
          e.ensureRefId();
          const t = this.changeTrees[e.refId] === void 0;
          t && (this.changeTrees[e.refId] = e);
          const s = this.refCount[e.refId];
          if (s === 0) {
            const u = e.allChanges.operations;
            let l = u.length;
            for (; l--; )
              e.indexedOperations[u[l]] = r.OPERATION.ADD, Pe(e.changes, l);
          }
          return this.refCount[e.refId] = (s || 0) + 1, t;
        }
        remove(e) {
          const t = this.refCount[e.refId] - 1;
          return t <= 0 ? (e.root = void 0, delete this.changeTrees[e.refId], this.removeChangeFromChangeSet("allChanges", e), this.removeChangeFromChangeSet("changes", e), e.filteredChanges && (this.removeChangeFromChangeSet("allFilteredChanges", e), this.removeChangeFromChangeSet("filteredChanges", e)), this.refCount[e.refId] = 0) : (this.refCount[e.refId] = t, e.filteredChanges !== void 0 ? (this.removeChangeFromChangeSet("filteredChanges", e), Se(this, e, "filteredChanges")) : (this.removeChangeFromChangeSet("changes", e), Se(this, e, "changes"))), e.forEachChild((s, u) => this.remove(s)), t;
        }
        removeChangeFromChangeSet(e, t) {
          const s = this[e];
          if (gr(s, s.indexOf(t)))
            return t[e].queueRootIndex = -1, !0;
        }
        clear() {
          this.changes.length = 0;
        }
      }
      const Kt = class Kt {
        // 8KB
        constructor(e) {
          this.sharedBuffer = Buffer.allocUnsafe(Kt.BUFFER_SIZE), this.context = new je(e.constructor), this.root = new gs(this.context), this.setState(e);
        }
        setState(e) {
          this.state = e, this.state[d].setRoot(this.root);
        }
        encode(e = { offset: 0 }, t, s = this.sharedBuffer, u = "changes", l = u === "allChanges", g = e.offset) {
          const y = t !== void 0, v = this.state[d], I = !l && !y, T = this.root[u];
          for (let L = 0, D = T.length; L < D; L++) {
            const F = T[L];
            if (y)
              if (t.items.has(F))
                t.invisible.has(F) && t.invisible.delete(F);
              else {
                t.invisible.add(F);
                continue;
              }
            const z = F[u], M = F.ref, R = z.operations.length;
            if (R === 0)
              continue;
            const U = M.constructor, re = U[h], de = U[A], At = U[Symbol.metadata];
            (y || e.offset > g || F !== v) && (s[e.offset++] = 255, ve.number(s, F.refId, e));
            for (let Rt = 0; Rt < R; Rt++) {
              const st = z.operations[Rt], mr = st < 0 ? Math.abs(st) : l ? r.OPERATION.ADD : F.indexedOperations[st];
              st === void 0 || mr === void 0 || de && !de(M, st, t) || re(this, s, F, st, mr, e, l, y, At);
            }
          }
          if (e.offset > s.byteLength) {
            const L = Math.ceil(e.offset / (Buffer.poolSize ?? 8192)) * (Buffer.poolSize ?? 8192);
            return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(L / 1024)} * 1024; // ${Math.round(L / 1024)} KB
`), s = Buffer.alloc(L, s), s === this.sharedBuffer && (this.sharedBuffer = s), this.encode({ offset: g }, t, s, u, l);
          } else {
            if (I)
              for (let L = 0, D = T.length; L < D; L++) {
                const F = T[L];
                F.discard(), F.isNew = !1;
              }
            return s.subarray(0, e.offset);
          }
        }
        encodeAll(e = { offset: 0 }, t = this.sharedBuffer) {
          return this.encode(e, void 0, t, "allChanges", !0);
        }
        encodeAllView(e, t, s, u = this.sharedBuffer) {
          const l = s.offset;
          return this.encode(s, e, u, "allFilteredChanges", !0, l), Buffer.concat([
            u.subarray(0, t),
            u.subarray(l, s.offset)
          ]);
        }
        debugChanges(e) {
          (typeof e == "string" ? this.root[e] : e).forEach((s) => {
            const u = s[e], l = s.ref.constructor[Symbol.metadata];
            console.log("->", { ref: s.ref.constructor.name, refId: s.refId, changes: Object.keys(u).length });
            for (const g in u) {
              const y = u[g];
              console.log("  ->", {
                index: g,
                field: l == null ? void 0 : l[g],
                op: r.OPERATION[y]
              });
            }
          });
        }
        encodeView(e, t, s, u = this.sharedBuffer) {
          const l = s.offset;
          for (const [g, y] of e.changes) {
            const v = this.root.changeTrees[g];
            if (v === void 0) {
              e.changes.delete(g);
              continue;
            }
            const I = Object.keys(y);
            if (I.length === 0)
              continue;
            const L = v.ref.constructor, D = L[h], F = L[Symbol.metadata];
            u[s.offset++] = 255, ve.number(u, v.refId, s);
            for (let z = 0, M = I.length; z < M; z++) {
              const R = Number(I[z]), re = v.ref[_](R) !== void 0 && y[R] || r.OPERATION.DELETE;
              D(this, u, v, R, re, s, !1, !0, F);
            }
          }
          return e.changes.clear(), this.encode(s, e, u, "filteredChanges", !1, l), Buffer.concat([
            u.subarray(0, t),
            u.subarray(l, s.offset)
          ]);
        }
        discardChanges() {
          var t, s;
          let e = this.root.changes.length;
          if (e > 0) {
            for (; e--; )
              (t = this.root.changes[e]) == null || t.endEncode();
            this.root.changes.length = 0;
          }
          if (e = this.root.filteredChanges.length, e > 0) {
            for (; e--; )
              (s = this.root.filteredChanges[e]) == null || s.endEncode();
            this.root.filteredChanges.length = 0;
          }
        }
        tryEncodeTypeId(e, t, s, u) {
          const l = this.context.getTypeId(t), g = this.context.getTypeId(s);
          if (g === void 0) {
            console.warn(`@colyseus/schema WARNING: Class "${s.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);
            return;
          }
          l !== g && (e[u.offset++] = 213, ve.number(e, g, u));
        }
        get hasChanges() {
          return this.root.changes.length > 0 || this.root.filteredChanges.length > 0;
        }
      };
      Kt.BUFFER_SIZE = typeof Buffer < "u" && Buffer.poolSize || 8 * 1024;
      let Jt = Kt;
      class pr extends Error {
        constructor(e) {
          super(e), this.name = "DecodingWarning";
        }
      }
      class ps {
        constructor() {
          this.refs = /* @__PURE__ */ new Map(), this.refIds = /* @__PURE__ */ new WeakMap(), this.refCounts = {}, this.deletedRefs = /* @__PURE__ */ new Set(), this.callbacks = {}, this.nextUniqueId = 0;
        }
        getNextUniqueId() {
          return this.nextUniqueId++;
        }
        // for decoding
        addRef(e, t, s = !0) {
          this.refs.set(e, t), this.refIds.set(t, e), s && (this.refCounts[e] = (this.refCounts[e] || 0) + 1), this.deletedRefs.has(e) && this.deletedRefs.delete(e);
        }
        // for decoding
        removeRef(e) {
          const t = this.refCounts[e];
          if (t === void 0) {
            try {
              throw new pr("trying to remove refId that doesn't exist: " + e);
            } catch (s) {
              console.warn(s);
            }
            return;
          }
          if (t === 0) {
            try {
              const s = this.refs.get(e);
              throw new pr(`trying to remove refId '${e}' with 0 refCount (${s.constructor.name}: ${JSON.stringify(s)})`);
            } catch (s) {
              console.warn(s);
            }
            return;
          }
          (this.refCounts[e] = t - 1) <= 0 && this.deletedRefs.add(e);
        }
        clearRefs() {
          this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCounts = {};
        }
        // for decoding
        garbageCollectDeletedRefs() {
          this.deletedRefs.forEach((e) => {
            if (this.refCounts[e] > 0)
              return;
            const t = this.refs.get(e);
            if (ue.isValidInstance(t)) {
              const s = t.constructor[Symbol.metadata];
              for (const u in s) {
                const l = s[u].name, g = typeof t[l] == "object" && this.refIds.get(t[l]);
                g && !this.deletedRefs.has(g) && this.removeRef(g);
              }
            } else
              typeof Object.values(t[E])[0] == "function" && Array.from(t.values()).forEach((s) => {
                const u = this.refIds.get(s);
                this.deletedRefs.has(u) || this.removeRef(u);
              });
            this.refs.delete(e), delete this.refCounts[e], delete this.callbacks[e];
          }), this.deletedRefs.clear();
        }
        addCallback(e, t, s) {
          if (e === void 0) {
            const u = typeof t == "number" ? r.OPERATION[t] : t;
            throw new Error(`Can't addCallback on '${u}' (refId is undefined)`);
          }
          return this.callbacks[e] || (this.callbacks[e] = {}), this.callbacks[e][t] || (this.callbacks[e][t] = []), this.callbacks[e][t].push(s), () => this.removeCallback(e, t, s);
        }
        removeCallback(e, t, s) {
          var l, g, y;
          const u = (y = (g = (l = this.callbacks) == null ? void 0 : l[e]) == null ? void 0 : g[t]) == null ? void 0 : y.indexOf(s);
          u !== -1 && gr(this.callbacks[e][t], u);
        }
      }
      class vn {
        constructor(e, t) {
          this.currentRefId = 0, this.setState(e), this.context = t || new je(e.constructor);
        }
        setState(e) {
          this.state = e, this.root = new ps(), this.root.addRef(0, e);
        }
        decode(e, t = { offset: 0 }, s = this.state) {
          var v, I, T;
          const u = [], l = this.root, g = e.byteLength;
          let y = s.constructor[w];
          for (this.currentRefId = 0; t.offset < g; ) {
            if (e[t.offset] == 255) {
              t.offset++, this.currentRefId = Oe.number(e, t);
              const D = l.refs.get(this.currentRefId);
              if (!D)
                throw new Error(`"refId" not found: ${this.currentRefId}`);
              (v = s[P]) == null || v.call(s), s = D, y = s.constructor[w];
              continue;
            }
            if (y(this, e, t, s, u) === Xn) {
              console.warn("@colyseus/schema: definition mismatch");
              const D = { offset: t.offset };
              for (; t.offset < g && !(e[t.offset] === 255 && (D.offset = t.offset + 1, l.refs.has(Oe.number(e, D)))); )
                t.offset++;
              continue;
            }
          }
          return (I = s[P]) == null || I.call(s), (T = this.triggerChanges) == null || T.call(this, u), l.garbageCollectDeletedRefs(), u;
        }
        getInstanceType(e, t, s) {
          let u;
          if (e[t.offset] === 213) {
            t.offset++;
            const l = Oe.number(e, t);
            u = this.context.get(l);
          }
          return u || s;
        }
        createInstanceOfType(e) {
          return new e();
        }
        removeChildRefs(e, t) {
          const s = typeof e[E] != "string", u = this.root.refIds.get(e);
          e.forEach((l, g) => {
            t.push({
              ref: e,
              refId: u,
              op: r.OPERATION.DELETE,
              field: g,
              value: void 0,
              previousValue: l
            }), s && this.root.removeRef(this.root.refIds.get(l));
          });
        }
      }
      class ut extends ae {
      }
      He([
        De("string")
      ], ut.prototype, "name", void 0), He([
        De("string")
      ], ut.prototype, "type", void 0), He([
        De("number")
      ], ut.prototype, "referencedType", void 0);
      class lt extends ae {
        constructor() {
          super(...arguments), this.fields = new Le();
        }
      }
      He([
        De("number")
      ], lt.prototype, "id", void 0), He([
        De("number")
      ], lt.prototype, "extendsId", void 0), He([
        De([ut])
      ], lt.prototype, "fields", void 0);
      class ht extends ae {
        constructor() {
          super(...arguments), this.types = new Le();
        }
        /**
         * Encodes the TypeContext of an Encoder into a buffer.
         *
         * @param encoder Encoder instance
         * @param it
         * @returns
         */
        static encode(e, t = { offset: 0 }) {
          const s = e.context, u = new ht(), l = new Jt(u), g = s.schemas.get(e.state.constructor);
          g > 0 && (u.rootType = g);
          const y = (I, T) => {
            for (const L in T) {
              const D = Number(L), F = T[D].name;
              if (!Object.prototype.hasOwnProperty.call(T, F))
                continue;
              const z = new ut();
              z.name = F;
              let M;
              const R = T[D].type;
              if (typeof R == "string")
                M = R;
              else {
                let U;
                ae.is(R) ? (M = "ref", U = R) : (M = Object.keys(R)[0], typeof R[M] == "string" ? M += ":" + R[M] : U = R[M]), z.referencedType = U ? s.getTypeId(U) : -1;
              }
              z.type = M, I.fields.push(z);
            }
            u.types.push(I);
          };
          for (let I in s.types) {
            const T = s.types[I], L = new lt();
            L.id = Number(I);
            const D = Object.getPrototypeOf(T);
            D !== ae && (L.extendsId = s.schemas.get(D)), y(L, T[Symbol.metadata]);
          }
          const v = l.encodeAll(t);
          return Buffer.from(v, 0, t.offset);
        }
        /**
         * Decodes the TypeContext from a buffer into a Decoder instance.
         *
         * @param bytes Reflection.encode() output
         * @param it
         * @returns Decoder instance
         */
        static decode(e, t) {
          const s = new ht();
          new vn(s).decode(e, t);
          const l = new je();
          s.types.forEach((v) => {
            const I = l.get(v.extendsId) ?? ae, T = class extends I {
            };
            je.register(T), l.add(T, v.id);
          }, {});
          const g = (v, I, T) => {
            I.fields.forEach((L, D) => {
              const F = T + D;
              if (L.referencedType !== void 0) {
                let z = L.type, M = l.get(L.referencedType);
                if (!M) {
                  const R = L.type.split(":");
                  z = R[0], M = R[1];
                }
                z === "ref" ? ue.addField(v, F, L.name, M) : ue.addField(v, F, L.name, { [z]: M });
              } else
                ue.addField(v, F, L.name, L.type);
            });
          };
          s.types.forEach((v) => {
            const I = l.get(v.id), T = ue.initialize(I), L = [];
            let D = v;
            do
              L.push(D), D = s.types.find((z) => z.id === D.extendsId);
            while (D);
            let F = 0;
            L.reverse().forEach((z) => {
              g(T, z, F), F += z.fields.length;
            });
          });
          const y = new (l.get(s.rootType || 0))();
          return new vn(y, l);
        }
      }
      He([
        De([lt])
      ], ht.prototype, "types", void 0), He([
        De("number")
      ], ht.prototype, "rootType", void 0);
      function ms(f) {
        const e = f.root, t = e.callbacks, s = /* @__PURE__ */ new WeakMap();
        let u;
        f.triggerChanges = function(y) {
          var I;
          const v = /* @__PURE__ */ new Set();
          for (let T = 0, L = y.length; T < L; T++) {
            const D = y[T], F = D.refId, z = D.ref, M = t[F];
            if (M) {
              if ((D.op & r.OPERATION.DELETE) === r.OPERATION.DELETE && D.previousValue instanceof ae) {
                const R = (I = t[e.refIds.get(D.previousValue)]) == null ? void 0 : I[r.OPERATION.DELETE];
                for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                  R[U]();
              }
              if (z instanceof ae) {
                if (!v.has(F)) {
                  const R = M == null ? void 0 : M[r.OPERATION.REPLACE];
                  for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                    R[U]();
                }
                if (M.hasOwnProperty(D.field)) {
                  const R = M[D.field];
                  for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                    R[U](D.value, D.previousValue);
                }
              } else {
                if ((D.op & r.OPERATION.DELETE) === r.OPERATION.DELETE) {
                  if (D.previousValue !== void 0) {
                    const R = M[r.OPERATION.DELETE];
                    for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                      R[U](D.previousValue, D.dynamicIndex ?? D.field);
                  }
                  if ((D.op & r.OPERATION.ADD) === r.OPERATION.ADD) {
                    const R = M[r.OPERATION.ADD];
                    for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                      R[U](D.value, D.dynamicIndex ?? D.field);
                  }
                } else if ((D.op & r.OPERATION.ADD) === r.OPERATION.ADD && D.previousValue === void 0) {
                  const R = M[r.OPERATION.ADD];
                  for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                    R[U](D.value, D.dynamicIndex ?? D.field);
                }
                if (D.value !== D.previousValue && // FIXME: see "should not encode item if added and removed at the same patch" test case.
                // some "ADD" + "DELETE" operations on same patch are being encoded as "DELETE"
                (D.value !== void 0 || D.previousValue !== void 0)) {
                  const R = M[r.OPERATION.REPLACE];
                  for (let U = (R == null ? void 0 : R.length) - 1; U >= 0; U--)
                    R[U](D.value, D.dynamicIndex ?? D.field);
                }
              }
              v.add(F);
            }
          }
        };
        function l(y, v) {
          var L;
          let I = ((L = v.instance) == null ? void 0 : L.constructor[Symbol.metadata]) || y, T = v.instance && typeof v.instance.forEach == "function" || y && typeof y[Symbol.metadata] > "u";
          if (I && !T) {
            const D = function(F, z, M, R) {
              return R && v.instance[z] !== void 0 && !s.has(u) && M(v.instance[z], void 0), e.addCallback(e.refIds.get(F), z, M);
            };
            return new Proxy({
              listen: function(z, M, R = !0) {
                if (v.instance)
                  return D(v.instance, z, M, R);
                {
                  let U = () => {
                  };
                  return v.onInstanceAvailable((re, de) => {
                    U = D(re, z, M, R && de && !s.has(u));
                  }), () => U();
                }
              },
              onChange: function(z) {
                return e.addCallback(e.refIds.get(v.instance), r.OPERATION.REPLACE, z);
              },
              //
              // TODO: refactor `bindTo()` implementation.
              // There is room for improvement.
              //
              bindTo: function(z, M) {
                return M || (M = Object.keys(I).map((R) => I[R].name)), e.addCallback(e.refIds.get(v.instance), r.OPERATION.REPLACE, () => {
                  M.forEach((R) => z[R] = v.instance[R]);
                });
              }
            }, {
              get(F, z) {
                var R;
                const M = I[I[z]];
                if (M) {
                  const U = (R = v.instance) == null ? void 0 : R[z], re = (de) => {
                    const At = g(v.instance).listen(z, (Rt, st) => {
                      de(Rt, !1), At == null || At();
                    }, !1);
                    e.refIds.get(U) !== void 0 && de(U, !0);
                  };
                  return l(M.type, {
                    // make sure refId is available, otherwise need to wait for the instance to be available.
                    instance: e.refIds.get(U) && U,
                    parentInstance: v.instance,
                    onInstanceAvailable: re
                  });
                } else
                  return F[z];
              },
              has(F, z) {
                return I[z] !== void 0;
              },
              set(F, z, M) {
                throw new Error("not allowed");
              },
              deleteProperty(F, z) {
                throw new Error("not allowed");
              }
            });
          } else {
            const D = function(M, R, U) {
              return U && M.forEach((re, de) => R(re, de)), e.addCallback(e.refIds.get(M), r.OPERATION.ADD, (re, de) => {
                s.set(R, !0), u = R, R(re, de), s.delete(R), u = void 0;
              });
            }, F = function(M, R) {
              return e.addCallback(e.refIds.get(M), r.OPERATION.DELETE, R);
            }, z = function(M, R) {
              return e.addCallback(e.refIds.get(M), r.OPERATION.REPLACE, R);
            };
            return new Proxy({
              onAdd: function(M, R = !0) {
                if (v.instance)
                  return D(v.instance, M, R && !s.has(u));
                if (v.onInstanceAvailable) {
                  let U = () => {
                  };
                  return v.onInstanceAvailable((re, de) => {
                    U = D(re, M, R && de && !s.has(u));
                  }), () => U();
                }
              },
              onRemove: function(M) {
                if (v.instance)
                  return F(v.instance, M);
                if (v.onInstanceAvailable) {
                  let R = () => {
                  };
                  return v.onInstanceAvailable((U) => {
                    R = F(U, M);
                  }), () => R();
                }
              },
              onChange: function(M) {
                if (v.instance)
                  return z(v.instance, M);
                if (v.onInstanceAvailable) {
                  let R = () => {
                  };
                  return v.onInstanceAvailable((U) => {
                    R = z(U, M);
                  }), () => R();
                }
              }
            }, {
              get(M, R) {
                if (!M[R])
                  throw new Error(`Can't access '${R}' through callback proxy. access the instance directly.`);
                return M[R];
              },
              has(M, R) {
                return M[R] !== void 0;
              },
              set(M, R, U) {
                throw new Error("not allowed");
              },
              deleteProperty(M, R) {
                throw new Error("not allowed");
              }
            });
          }
        }
        function g(y) {
          return l(void 0, { instance: y });
        }
        return g;
      }
      function ys(f, e) {
        f.triggerChanges = e;
      }
      class ws {
        constructor() {
          this.items = /* @__PURE__ */ new WeakSet(), this.invisible = /* @__PURE__ */ new WeakSet(), this.changes = /* @__PURE__ */ new Map();
        }
        // TODO: allow to set multiple tags at once
        add(e, t = qe, s = !0) {
          var y, v;
          if (!e[d])
            return console.warn("StateView#add(), invalid object:", e), this;
          const u = e.constructor[Symbol.metadata], l = e[d];
          this.items.add(l), s && l.parent && this.addParentOf(l, t);
          let g = this.changes.get(l.refId);
          if (g === void 0 && (g = {}, this.changes.set(l.refId, g)), t !== qe) {
            this.tags || (this.tags = /* @__PURE__ */ new WeakMap());
            let I;
            this.tags.has(l) ? I = this.tags.get(l) : (I = /* @__PURE__ */ new Set(), this.tags.set(l, I)), I.add(t), (v = (y = u == null ? void 0 : u[te]) == null ? void 0 : y[t]) == null || v.forEach((T) => {
              l.getChange(T) !== r.OPERATION.DELETE && (g[T] = r.OPERATION.ADD);
            });
          } else {
            const I = this.invisible.has(l), T = l.filteredChanges !== void 0 ? l.allFilteredChanges : l.allChanges;
            for (let L = 0, D = T.operations.length; L < D; L++) {
              const F = T.operations[L];
              if (F === void 0)
                continue;
              const z = l.indexedOperations[F] ?? r.OPERATION.ADD, M = u == null ? void 0 : u[F].tag;
              (I || // if "invisible", include all
              M === void 0 || // "all change" with no tag
              M === t) && z !== r.OPERATION.DELETE && (g[F] = z);
            }
          }
          return l.forEachChild((I, T) => {
            u && u[T].tag !== void 0 && u[T].tag !== t || this.add(I.ref, t, !1);
          }), this;
        }
        addParentOf(e, t) {
          var l;
          const s = e.parent[d], u = e.parentIndex;
          if (!this.items.has(s)) {
            this.items.add(s);
            const g = (l = s.parent) == null ? void 0 : l[d];
            if (g && g.filteredChanges !== void 0 && this.addParentOf(s, t), !this.invisible.has(s))
              return;
          }
          if (s.getChange(u) !== r.OPERATION.DELETE) {
            let g = this.changes.get(s.refId);
            g === void 0 && (g = {}, this.changes.set(s.refId, g)), this.tags || (this.tags = /* @__PURE__ */ new WeakMap());
            let y;
            this.tags.has(s) ? y = this.tags.get(s) : (y = /* @__PURE__ */ new Set(), this.tags.set(s, y)), y.add(t), g[u] = r.OPERATION.ADD;
          }
        }
        remove(e, t = qe) {
          const s = e[d];
          if (!s)
            return console.warn("StateView#remove(), invalid object:", e), this;
          this.items.delete(s);
          const l = s.ref.constructor[Symbol.metadata];
          let g = this.changes.get(s.refId);
          if (g === void 0 && (g = {}, this.changes.set(s.refId, g)), t === qe) {
            const y = s.parent;
            if (ue.isValidInstance(y))
              l[Z].forEach((v) => g[v] = r.OPERATION.DELETE);
            else {
              const v = y[d];
              let I = this.changes.get(v.refId);
              I === void 0 && (I = {}, this.changes.set(v.refId, I)), I[s.parentIndex] = r.OPERATION.DELETE;
            }
          } else
            l[te][t].forEach((y) => g[y] = r.OPERATION.DELETE);
          if (this.tags && this.tags.has(s)) {
            const y = this.tags.get(s);
            t === void 0 ? this.tags.delete(s) : (y.delete(t), y.size === 0 && this.tags.delete(s));
          }
          return this;
        }
        has(e) {
          return this.items.has(e[d]);
        }
        hasTag(e, t = qe) {
          var u;
          const s = (u = this.tags) == null ? void 0 : u.get(e[d]);
          return (s == null ? void 0 : s.has(t)) ?? !1;
        }
      }
      Me("map", { constructor: Ve }), Me("array", { constructor: Le }), Me("set", { constructor: It }), Me("collection", { constructor: _t }), r.$changes = d, r.$childType = E, r.$decoder = w, r.$deleteByIndex = S, r.$encoder = h, r.$filter = A, r.$getByIndex = _, r.$track = c, r.ArraySchema = Le, r.ChangeTree = ft, r.CollectionSchema = _t, r.Decoder = vn, r.Encoder = Jt, r.MapSchema = Ve, r.Metadata = ue, r.Reflection = ht, r.ReflectionField = ut, r.ReflectionType = lt, r.Schema = ae, r.SetSchema = It, r.StateView = ws, r.TypeContext = je, r.decode = Oe, r.decodeKeyValueOperation = qt, r.decodeSchemaOperation = Qn, r.defineCustomTypes = os, r.defineTypes = hs, r.deprecated = ls, r.dumpChanges = ds, r.encode = ve, r.encodeArray = Zn, r.encodeKeyValueOperation = Vt, r.encodeSchemaOperation = Gn, r.entity = us, r.getDecoderStateCallbacks = ms, r.getRawChangesCallback = ys, r.registerType = Me, r.schema = ar, r.type = De, r.view = sr;
    });
  }(Nt, Nt.exports)), Nt.exports;
}
var Or;
function Ss() {
  if (Or) return Zt;
  Or = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  var i = dn, n = kn(), r = (
    /** @class */
    function() {
      function o(a) {
        this.events = a, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9);
      }
      return o.prototype.connect = function(a, c) {
        var h = this;
        c === void 0 && (c = {});
        var w = c.fingerprint && {
          // requireUnreliable: true,
          // congestionControl: "default", // "low-latency" || "throughput"
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(c.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(a, w), this.wt.ready.then(function(A) {
          console.log("WebTransport ready!", A), h.isOpen = !0, h.unreliableReader = h.wt.datagrams.readable.getReader(), h.unreliableWriter = h.wt.datagrams.writable.getWriter();
          var _ = h.wt.incomingBidirectionalStreams.getReader();
          _.read().then(function(S) {
            h.reader = S.value.readable.getReader(), h.writer = S.value.writable.getWriter(), h.sendSeatReservation(c.room.roomId, c.sessionId, c.reconnectionToken), h.readIncomingData(), h.readIncomingUnreliableData();
          }).catch(function(S) {
            console.error("failed to read incoming stream", S), console.error("TODO: close the connection");
          });
        }).catch(function(A) {
          console.log("WebTransport not ready!", A), h._close();
        }), this.wt.closed.then(function(A) {
          console.log("WebTransport closed w/ success", A), h.events.onclose({ code: A.closeCode, reason: A.reason });
        }).catch(function(A) {
          console.log("WebTransport closed w/ error", A), h.events.onerror(A), h.events.onclose({ code: A.closeCode, reason: A.reason });
        }).finally(function() {
          h._close();
        });
      }, o.prototype.send = function(a) {
        var c = n.encode.number(this.lengthPrefixBuffer, a.length, { offset: 0 }), h = new Uint8Array(c + a.length);
        h.set(this.lengthPrefixBuffer.subarray(0, c), 0), h.set(a, c), this.writer.write(h);
      }, o.prototype.sendUnreliable = function(a) {
        var c = n.encode.number(this.lengthPrefixBuffer, a.length, { offset: 0 }), h = new Uint8Array(c + a.length);
        h.set(this.lengthPrefixBuffer.subarray(0, c), 0), h.set(a, c), this.unreliableWriter.write(h);
      }, o.prototype.close = function(a, c) {
        try {
          this.wt.close({ closeCode: a, reason: c });
        } catch (h) {
          console.error(h);
        }
      }, o.prototype.readIncomingData = function() {
        return i.__awaiter(this, void 0, void 0, function() {
          var a, c, h, w, A;
          return i.__generator(this, function(_) {
            switch (_.label) {
              case 0:
                if (!this.isOpen) return [3, 5];
                _.label = 1;
              case 1:
                return _.trys.push([1, 3, , 4]), [4, this.reader.read()];
              case 2:
                a = _.sent(), c = a.value, h = { offset: 0 };
                do
                  w = n.decode.number(c, h), this.events.onmessage({ data: c.subarray(h.offset, h.offset + w) }), h.offset += w;
                while (h.offset < c.length);
                return [3, 4];
              case 3:
                return A = _.sent(), A.message.indexOf("session is closed") === -1 && console.error("H3Transport: failed to read incoming data", A), [3, 5];
              case 4:
                return a.done ? [3, 5] : [3, 0];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, o.prototype.readIncomingUnreliableData = function() {
        return i.__awaiter(this, void 0, void 0, function() {
          var a, c, h, w, A;
          return i.__generator(this, function(_) {
            switch (_.label) {
              case 0:
                if (!this.isOpen) return [3, 5];
                _.label = 1;
              case 1:
                return _.trys.push([1, 3, , 4]), [4, this.unreliableReader.read()];
              case 2:
                a = _.sent(), c = a.value, h = { offset: 0 };
                do
                  w = n.decode.number(c, h), this.events.onmessage({ data: c.subarray(h.offset, h.offset + w) }), h.offset += w;
                while (h.offset < c.length);
                return [3, 4];
              case 3:
                return A = _.sent(), A.message.indexOf("session is closed") === -1 && console.error("H3Transport: failed to read incoming data", A), [3, 5];
              case 4:
                return a.done ? [3, 5] : [3, 0];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, o.prototype.sendSeatReservation = function(a, c, h) {
        var w = { offset: 0 }, A = [];
        n.encode.string(A, a, w), n.encode.string(A, c, w), h && n.encode.string(A, h, w), this.writer.write(new Uint8Array(A).buffer);
      }, o.prototype._close = function() {
        this.isOpen = !1;
      }, o;
    }()
  );
  return Zt.H3TransportTransport = r, Zt;
}
var Xt = {}, In, xr;
function As() {
  return xr || (xr = 1, In = function() {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  }), In;
}
var _r;
function Rs() {
  if (_r) return Xt;
  _r = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  var i = As();
  function n(c) {
    return c && typeof c == "object" && "default" in c ? c : { default: c };
  }
  var r = /* @__PURE__ */ n(i), o = globalThis.WebSocket || r.default, a = (
    /** @class */
    function() {
      function c(h) {
        this.events = h;
      }
      return c.prototype.send = function(h) {
        this.ws.send(h);
      }, c.prototype.sendUnreliable = function(h) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages");
      }, c.prototype.connect = function(h) {
        this.ws = new o(h, this.protocols), this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror;
      }, c.prototype.close = function(h, w) {
        this.ws.close(h, w);
      }, Object.defineProperty(c.prototype, "isOpen", {
        get: function() {
          return this.ws.readyState === o.OPEN;
        },
        enumerable: !1,
        configurable: !0
      }), c;
    }()
  );
  return Xt.WebSocketTransport = a, Xt;
}
var Ir;
function Ts() {
  if (Ir) return Gt;
  Ir = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  var i = Ss(), n = Rs(), r = (
    /** @class */
    function() {
      function o(a) {
        switch (this.events = {}, a) {
          case "h3":
            this.transport = new i.H3TransportTransport(this.events);
            break;
          default:
            this.transport = new n.WebSocketTransport(this.events);
            break;
        }
      }
      return o.prototype.connect = function(a, c) {
        this.transport.connect.call(this.transport, a, c);
      }, o.prototype.send = function(a) {
        this.transport.send(a);
      }, o.prototype.sendUnreliable = function(a) {
        this.transport.sendUnreliable(a);
      }, o.prototype.close = function(a, c) {
        this.transport.close(a, c);
      }, Object.defineProperty(o.prototype, "isOpen", {
        get: function() {
          return this.transport.isOpen;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }()
  );
  return Gt.Connection = r, Gt;
}
var Sn = {}, Sr;
function Si() {
  return Sr || (Sr = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.Protocol = void 0, function(n) {
      n[n.HANDSHAKE = 9] = "HANDSHAKE", n[n.JOIN_ROOM = 10] = "JOIN_ROOM", n[n.ERROR = 11] = "ERROR", n[n.LEAVE_ROOM = 12] = "LEAVE_ROOM", n[n.ROOM_DATA = 13] = "ROOM_DATA", n[n.ROOM_STATE = 14] = "ROOM_STATE", n[n.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", n[n.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", n[n.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
    }(i.Protocol || (i.Protocol = {})), i.ErrorCode = void 0, function(n) {
      n[n.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", n[n.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", n[n.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", n[n.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", n[n.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", n[n.AUTH_FAILED = 4215] = "AUTH_FAILED", n[n.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
    }(i.ErrorCode || (i.ErrorCode = {}));
  }(Sn)), Sn;
}
var Ct = {}, Ar;
function Ai() {
  if (Ar) return Ct;
  Ar = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  var i = {};
  function n(o, a) {
    i[o] = a;
  }
  function r(o) {
    var a = i[o];
    if (!a)
      throw new Error("missing serializer: " + o);
    return a;
  }
  return Ct.getSerializer = r, Ct.registerSerializer = n, Ct;
}
var Qt = {}, Rr;
function Ri() {
  if (Rr) return Qt;
  Rr = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  var i = function() {
    return {
      emit: function(n) {
        for (var r = [], o = 1; o < arguments.length; o++)
          r[o - 1] = arguments[o];
        for (var a = this.events[n] || [], c = 0, h = a.length; c < h; c++)
          a[c].apply(a, r);
      },
      events: {},
      on: function(n, r) {
        var o = this, a;
        return !((a = this.events[n]) === null || a === void 0) && a.push(r) || (this.events[n] = [r]), function() {
          var c;
          o.events[n] = (c = o.events[n]) === null || c === void 0 ? void 0 : c.filter(function(h) {
            return r !== h;
          });
        };
      }
    };
  };
  return Qt.createNanoEvents = i, Qt;
}
var Pt = {}, Tr;
function Cs() {
  if (Tr) return Pt;
  Tr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  var i = (
    /** @class */
    function() {
      function r() {
        this.handlers = [];
      }
      return r.prototype.register = function(o, a) {
        return this.handlers.push(o), this;
      }, r.prototype.invoke = function() {
        for (var o = this, a = [], c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        this.handlers.forEach(function(h) {
          return h.apply(o, a);
        });
      }, r.prototype.invokeAsync = function() {
        for (var o = this, a = [], c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        return Promise.all(this.handlers.map(function(h) {
          return h.apply(o, a);
        }));
      }, r.prototype.remove = function(o) {
        var a = this.handlers.indexOf(o);
        this.handlers[a] = this.handlers[this.handlers.length - 1], this.handlers.pop();
      }, r.prototype.clear = function() {
        this.handlers = [];
      }, r;
    }()
  );
  function n() {
    var r = new i();
    function o(a) {
      return r.register(a, this === null);
    }
    return o.once = function(a) {
      var c = function() {
        for (var h = [], w = 0; w < arguments.length; w++)
          h[w] = arguments[w];
        a.apply(this, h), r.remove(c);
      };
      r.register(c);
    }, o.remove = function(a) {
      return r.remove(a);
    }, o.invoke = function() {
      for (var a = [], c = 0; c < arguments.length; c++)
        a[c] = arguments[c];
      return r.invoke.apply(r, a);
    }, o.invokeAsync = function() {
      for (var a = [], c = 0; c < arguments.length; c++)
        a[c] = arguments[c];
      return r.invokeAsync.apply(r, a);
    }, o.clear = function() {
      return r.clear();
    }, o;
  }
  return Pt.EventEmitter = i, Pt.createSignal = n, Pt;
}
var Dt = {}, Cr;
function Ti() {
  if (Cr) return Dt;
  Cr = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  var i = kn();
  function n(o) {
    return i.getDecoderStateCallbacks(o.serializer.decoder);
  }
  var r = (
    /** @class */
    function() {
      function o() {
      }
      return o.prototype.setState = function(a, c) {
        this.decoder.decode(a, c);
      }, o.prototype.getState = function() {
        return this.state;
      }, o.prototype.patch = function(a, c) {
        return this.decoder.decode(a, c);
      }, o.prototype.teardown = function() {
        this.decoder.root.clearRefs();
      }, o.prototype.handshake = function(a, c) {
        this.state ? (i.Reflection.decode(a, c), this.decoder = new i.Decoder(this.state)) : (this.decoder = i.Reflection.decode(a, c), this.state = this.decoder.state);
      }, o;
    }()
  );
  return Dt.SchemaSerializer = r, Dt.getStateCallbacks = n, Dt;
}
var Cn;
try {
  Cn = new TextDecoder();
} catch {
}
var j, Ue, p = 0, ie = {}, G, et, Re = 0, Fe = 0, he, ze, me = [], Y, Pr = {
  useRecords: !1,
  mapsAsObjects: !0
};
class Ci {
}
const Mn = new Ci();
Mn.name = "MessagePack 0xC1";
var tt = !1, Pi = 2, Ps;
try {
  new Function("");
} catch {
  Pi = 1 / 0;
}
class nt {
  constructor(n) {
    n && (n.useRecords === !1 && n.mapsAsObjects === void 0 && (n.mapsAsObjects = !0), n.sequential && n.trusted !== !1 && (n.trusted = !0, !n.structures && n.useRecords != !1 && (n.structures = [], n.maxSharedStructures || (n.maxSharedStructures = 0))), n.structures ? n.structures.sharedLength = n.structures.length : n.getStructures && ((n.structures = []).uninitialized = !0, n.structures.sharedLength = 0), n.int64AsNumber && (n.int64AsType = "number")), Object.assign(this, n);
  }
  unpack(n, r) {
    if (j)
      return ji(() => (un(), this ? this.unpack(n, r) : nt.prototype.unpack.call(Pr, n, r)));
    !n.buffer && n.constructor === ArrayBuffer && (n = typeof Buffer < "u" ? Buffer.from(n) : new Uint8Array(n)), typeof r == "object" ? (Ue = r.end || n.length, p = r.start || 0) : (p = 0, Ue = r > -1 ? r : n.length), Fe = 0, et = null, he = null, j = n;
    try {
      Y = n.dataView || (n.dataView = new DataView(n.buffer, n.byteOffset, n.byteLength));
    } catch (o) {
      throw j = null, n instanceof Uint8Array ? o : new Error("Source must be a Uint8Array or Buffer but was a " + (n && typeof n == "object" ? n.constructor.name : typeof n));
    }
    if (this instanceof nt) {
      if (ie = this, this.structures)
        return G = this.structures, en(r);
      (!G || G.length > 0) && (G = []);
    } else
      ie = Pr, (!G || G.length > 0) && (G = []);
    return en(r);
  }
  unpackMultiple(n, r) {
    let o, a = 0;
    try {
      tt = !0;
      let c = n.length, h = this ? this.unpack(n, c) : mn.unpack(n, c);
      if (r) {
        if (r(h, a, p) === !1) return;
        for (; p < c; )
          if (a = p, r(en(), a, p) === !1)
            return;
      } else {
        for (o = [h]; p < c; )
          a = p, o.push(en());
        return o;
      }
    } catch (c) {
      throw c.lastPosition = a, c.values = o, c;
    } finally {
      tt = !1, un();
    }
  }
  _mergeStructures(n, r) {
    n = n || [], Object.isFrozen(n) && (n = n.map((o) => o.slice(0)));
    for (let o = 0, a = n.length; o < a; o++) {
      let c = n[o];
      c && (c.isShared = !0, o >= 32 && (c.highByte = o - 32 >> 5));
    }
    n.sharedLength = n.length;
    for (let o in r || [])
      if (o >= 0) {
        let a = n[o], c = r[o];
        c && (a && ((n.restoreStructures || (n.restoreStructures = []))[o] = a), n[o] = c);
      }
    return this.structures = n;
  }
  decode(n, r) {
    return this.unpack(n, r);
  }
}
function en(i) {
  try {
    if (!ie.trusted && !tt) {
      let r = G.sharedLength || 0;
      r < G.length && (G.length = r);
    }
    let n;
    if (ie.randomAccessStructure && j[p] < 64 && j[p] >= 32 && Ps || (n = oe()), he && (p = he.postBundlePosition, he = null), tt && (G.restoreStructures = null), p == Ue)
      G && G.restoreStructures && Dr(), G = null, j = null, ze && (ze = null);
    else {
      if (p > Ue)
        throw new Error("Unexpected end of MessagePack data");
      if (!tt) {
        let r;
        try {
          r = JSON.stringify(n, (o, a) => typeof a == "bigint" ? `${a}n` : a).slice(0, 100);
        } catch (o) {
          r = "(JSON view not available " + o + ")";
        }
        throw new Error("Data read, but end of buffer not reached " + r);
      }
    }
    return n;
  } catch (n) {
    throw G && G.restoreStructures && Dr(), un(), (n instanceof RangeError || n.message.startsWith("Unexpected end of buffer") || p > Ue) && (n.incomplete = !0), n;
  }
}
function Dr() {
  for (let i in G.restoreStructures)
    G[i] = G.restoreStructures[i];
  G.restoreStructures = null;
}
function oe() {
  let i = j[p++];
  if (i < 160)
    if (i < 128) {
      if (i < 64)
        return i;
      {
        let n = G[i & 63] || ie.getStructures && Di()[i & 63];
        return n ? (n.read || (n.read = jn(n, i & 63)), n.read()) : i;
      }
    } else if (i < 144)
      if (i -= 128, ie.mapsAsObjects) {
        let n = {};
        for (let r = 0; r < i; r++) {
          let o = Ni();
          o === "__proto__" && (o = "__proto_"), n[o] = oe();
        }
        return n;
      } else {
        let n = /* @__PURE__ */ new Map();
        for (let r = 0; r < i; r++)
          n.set(oe(), oe());
        return n;
      }
    else {
      i -= 144;
      let n = new Array(i);
      for (let r = 0; r < i; r++)
        n[r] = oe();
      return ie.freezeData ? Object.freeze(n) : n;
    }
  else if (i < 192) {
    let n = i - 160;
    if (Fe >= p)
      return et.slice(p - Re, (p += n) - Re);
    if (Fe == 0 && Ue < 140) {
      let r = n < 16 ? Ln(n) : $i(n);
      if (r != null)
        return r;
    }
    return Pn(n);
  } else {
    let n;
    switch (i) {
      case 192:
        return null;
      case 193:
        return he ? (n = oe(), n > 0 ? he[1].slice(he.position1, he.position1 += n) : he[0].slice(he.position0, he.position0 -= n)) : Mn;
      // "never-used", return special object to denote that
      case 194:
        return !1;
      case 195:
        return !0;
      case 196:
        if (n = j[p++], n === void 0)
          throw new Error("Unexpected end of buffer");
        return An(n);
      case 197:
        return n = Y.getUint16(p), p += 2, An(n);
      case 198:
        return n = Y.getUint32(p), p += 4, An(n);
      case 199:
        return ot(j[p++]);
      case 200:
        return n = Y.getUint16(p), p += 2, ot(n);
      case 201:
        return n = Y.getUint32(p), p += 4, ot(n);
      case 202:
        if (n = Y.getFloat32(p), ie.useFloat32 > 2) {
          let r = pn[(j[p] & 127) << 1 | j[p + 1] >> 7];
          return p += 4, (r * n + (n > 0 ? 0.5 : -0.5) >> 0) / r;
        }
        return p += 4, n;
      case 203:
        return n = Y.getFloat64(p), p += 8, n;
      // uint handlers
      case 204:
        return j[p++];
      case 205:
        return n = Y.getUint16(p), p += 2, n;
      case 206:
        return n = Y.getUint32(p), p += 4, n;
      case 207:
        return ie.int64AsType === "number" ? (n = Y.getUint32(p) * 4294967296, n += Y.getUint32(p + 4)) : ie.int64AsType === "string" ? n = Y.getBigUint64(p).toString() : ie.int64AsType === "auto" ? (n = Y.getBigUint64(p), n <= BigInt(2) << BigInt(52) && (n = Number(n))) : n = Y.getBigUint64(p), p += 8, n;
      // int handlers
      case 208:
        return Y.getInt8(p++);
      case 209:
        return n = Y.getInt16(p), p += 2, n;
      case 210:
        return n = Y.getInt32(p), p += 4, n;
      case 211:
        return ie.int64AsType === "number" ? (n = Y.getInt32(p) * 4294967296, n += Y.getUint32(p + 4)) : ie.int64AsType === "string" ? n = Y.getBigInt64(p).toString() : ie.int64AsType === "auto" ? (n = Y.getBigInt64(p), n >= BigInt(-2) << BigInt(52) && n <= BigInt(2) << BigInt(52) && (n = Number(n))) : n = Y.getBigInt64(p), p += 8, n;
      case 212:
        if (n = j[p++], n == 114)
          return Lr(j[p++] & 63);
        {
          let r = me[n];
          if (r)
            return r.read ? (p++, r.read(oe())) : r.noBuffer ? (p++, r()) : r(j.subarray(p, ++p));
          throw new Error("Unknown extension " + n);
        }
      case 213:
        return n = j[p], n == 114 ? (p++, Lr(j[p++] & 63, j[p++])) : ot(2);
      case 214:
        return ot(4);
      case 215:
        return ot(8);
      case 216:
        return ot(16);
      case 217:
        return n = j[p++], Fe >= p ? et.slice(p - Re, (p += n) - Re) : $s(n);
      case 218:
        return n = Y.getUint16(p), p += 2, Fe >= p ? et.slice(p - Re, (p += n) - Re) : Ns(n);
      case 219:
        return n = Y.getUint32(p), p += 4, Fe >= p ? et.slice(p - Re, (p += n) - Re) : ks(n);
      case 220:
        return n = Y.getUint16(p), p += 2, Nr(n);
      case 221:
        return n = Y.getUint32(p), p += 4, Nr(n);
      case 222:
        return n = Y.getUint16(p), p += 2, kr(n);
      case 223:
        return n = Y.getUint32(p), p += 4, kr(n);
      default:
        if (i >= 224)
          return i - 256;
        if (i === void 0) {
          let r = new Error("Unexpected end of MessagePack data");
          throw r.incomplete = !0, r;
        }
        throw new Error("Unknown MessagePack token " + i);
    }
  }
}
const Ds = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function jn(i, n) {
  function r() {
    if (r.count++ > Pi) {
      let a = i.read = new Function("r", "return function(){return " + (ie.freezeData ? "Object.freeze" : "") + "({" + i.map((c) => c === "__proto__" ? "__proto_:r()" : Ds.test(c) ? c + ":r()" : "[" + JSON.stringify(c) + "]:r()").join(",") + "})}")(oe);
      return i.highByte === 0 && (i.read = $r(n, i.read)), a();
    }
    let o = {};
    for (let a = 0, c = i.length; a < c; a++) {
      let h = i[a];
      h === "__proto__" && (h = "__proto_"), o[h] = oe();
    }
    return ie.freezeData ? Object.freeze(o) : o;
  }
  return r.count = 0, i.highByte === 0 ? $r(n, r) : r;
}
const $r = (i, n) => function() {
  let r = j[p++];
  if (r === 0)
    return n();
  let o = i < 32 ? -(i + (r << 5)) : i + (r << 5), a = G[o] || Di()[o];
  if (!a)
    throw new Error("Record id is not defined for " + o);
  return a.read || (a.read = jn(a, i)), a.read();
};
function Di() {
  let i = ji(() => (j = null, ie.getStructures()));
  return G = ie._mergeStructures(i, G);
}
var Pn = Lt, $s = Lt, Ns = Lt, ks = Lt;
let Ms = !1;
function Lt(i) {
  let n;
  if (i < 16 && (n = Ln(i)))
    return n;
  if (i > 64 && Cn)
    return Cn.decode(j.subarray(p, p += i));
  const r = p + i, o = [];
  for (n = ""; p < r; ) {
    const a = j[p++];
    if ((a & 128) === 0)
      o.push(a);
    else if ((a & 224) === 192) {
      const c = j[p++] & 63;
      o.push((a & 31) << 6 | c);
    } else if ((a & 240) === 224) {
      const c = j[p++] & 63, h = j[p++] & 63;
      o.push((a & 31) << 12 | c << 6 | h);
    } else if ((a & 248) === 240) {
      const c = j[p++] & 63, h = j[p++] & 63, w = j[p++] & 63;
      let A = (a & 7) << 18 | c << 12 | h << 6 | w;
      A > 65535 && (A -= 65536, o.push(A >>> 10 & 1023 | 55296), A = 56320 | A & 1023), o.push(A);
    } else
      o.push(a);
    o.length >= 4096 && (n += le.apply(String, o), o.length = 0);
  }
  return o.length > 0 && (n += le.apply(String, o)), n;
}
function Nr(i) {
  let n = new Array(i);
  for (let r = 0; r < i; r++)
    n[r] = oe();
  return ie.freezeData ? Object.freeze(n) : n;
}
function kr(i) {
  if (ie.mapsAsObjects) {
    let n = {};
    for (let r = 0; r < i; r++) {
      let o = Ni();
      o === "__proto__" && (o = "__proto_"), n[o] = oe();
    }
    return n;
  } else {
    let n = /* @__PURE__ */ new Map();
    for (let r = 0; r < i; r++)
      n.set(oe(), oe());
    return n;
  }
}
var le = String.fromCharCode;
function $i(i) {
  let n = p, r = new Array(i);
  for (let o = 0; o < i; o++) {
    const a = j[p++];
    if ((a & 128) > 0) {
      p = n;
      return;
    }
    r[o] = a;
  }
  return le.apply(String, r);
}
function Ln(i) {
  if (i < 4)
    if (i < 2) {
      if (i === 0)
        return "";
      {
        let n = j[p++];
        if ((n & 128) > 1) {
          p -= 1;
          return;
        }
        return le(n);
      }
    } else {
      let n = j[p++], r = j[p++];
      if ((n & 128) > 0 || (r & 128) > 0) {
        p -= 2;
        return;
      }
      if (i < 3)
        return le(n, r);
      let o = j[p++];
      if ((o & 128) > 0) {
        p -= 3;
        return;
      }
      return le(n, r, o);
    }
  else {
    let n = j[p++], r = j[p++], o = j[p++], a = j[p++];
    if ((n & 128) > 0 || (r & 128) > 0 || (o & 128) > 0 || (a & 128) > 0) {
      p -= 4;
      return;
    }
    if (i < 6) {
      if (i === 4)
        return le(n, r, o, a);
      {
        let c = j[p++];
        if ((c & 128) > 0) {
          p -= 5;
          return;
        }
        return le(n, r, o, a, c);
      }
    } else if (i < 8) {
      let c = j[p++], h = j[p++];
      if ((c & 128) > 0 || (h & 128) > 0) {
        p -= 6;
        return;
      }
      if (i < 7)
        return le(n, r, o, a, c, h);
      let w = j[p++];
      if ((w & 128) > 0) {
        p -= 7;
        return;
      }
      return le(n, r, o, a, c, h, w);
    } else {
      let c = j[p++], h = j[p++], w = j[p++], A = j[p++];
      if ((c & 128) > 0 || (h & 128) > 0 || (w & 128) > 0 || (A & 128) > 0) {
        p -= 8;
        return;
      }
      if (i < 10) {
        if (i === 8)
          return le(n, r, o, a, c, h, w, A);
        {
          let _ = j[p++];
          if ((_ & 128) > 0) {
            p -= 9;
            return;
          }
          return le(n, r, o, a, c, h, w, A, _);
        }
      } else if (i < 12) {
        let _ = j[p++], S = j[p++];
        if ((_ & 128) > 0 || (S & 128) > 0) {
          p -= 10;
          return;
        }
        if (i < 11)
          return le(n, r, o, a, c, h, w, A, _, S);
        let d = j[p++];
        if ((d & 128) > 0) {
          p -= 11;
          return;
        }
        return le(n, r, o, a, c, h, w, A, _, S, d);
      } else {
        let _ = j[p++], S = j[p++], d = j[p++], E = j[p++];
        if ((_ & 128) > 0 || (S & 128) > 0 || (d & 128) > 0 || (E & 128) > 0) {
          p -= 12;
          return;
        }
        if (i < 14) {
          if (i === 12)
            return le(n, r, o, a, c, h, w, A, _, S, d, E);
          {
            let O = j[p++];
            if ((O & 128) > 0) {
              p -= 13;
              return;
            }
            return le(n, r, o, a, c, h, w, A, _, S, d, E, O);
          }
        } else {
          let O = j[p++], P = j[p++];
          if ((O & 128) > 0 || (P & 128) > 0) {
            p -= 14;
            return;
          }
          if (i < 15)
            return le(n, r, o, a, c, h, w, A, _, S, d, E, O, P);
          let $ = j[p++];
          if (($ & 128) > 0) {
            p -= 15;
            return;
          }
          return le(n, r, o, a, c, h, w, A, _, S, d, E, O, P, $);
        }
      }
    }
  }
}
function Mr() {
  let i = j[p++], n;
  if (i < 192)
    n = i - 160;
  else
    switch (i) {
      case 217:
        n = j[p++];
        break;
      case 218:
        n = Y.getUint16(p), p += 2;
        break;
      case 219:
        n = Y.getUint32(p), p += 4;
        break;
      default:
        throw new Error("Expected string");
    }
  return Lt(n);
}
function An(i) {
  return ie.copyBuffers ? (
    // specifically use the copying slice (not the node one)
    Uint8Array.prototype.slice.call(j, p, p += i)
  ) : j.subarray(p, p += i);
}
function ot(i) {
  let n = j[p++];
  if (me[n]) {
    let r;
    return me[n](j.subarray(p, r = p += i), (o) => {
      p = o;
      try {
        return oe();
      } finally {
        p = r;
      }
    });
  } else
    throw new Error("Unknown extension type " + n);
}
var jr = new Array(4096);
function Ni() {
  let i = j[p++];
  if (i >= 160 && i < 192) {
    if (i = i - 160, Fe >= p)
      return et.slice(p - Re, (p += i) - Re);
    if (!(Fe == 0 && Ue < 180))
      return Pn(i);
  } else
    return p--, ki(oe());
  let n = (i << 5 ^ (i > 1 ? Y.getUint16(p) : i > 0 ? j[p] : 0)) & 4095, r = jr[n], o = p, a = p + i - 3, c, h = 0;
  if (r && r.bytes == i) {
    for (; o < a; ) {
      if (c = Y.getUint32(o), c != r[h++]) {
        o = 1879048192;
        break;
      }
      o += 4;
    }
    for (a += 3; o < a; )
      if (c = j[o++], c != r[h++]) {
        o = 1879048192;
        break;
      }
    if (o === a)
      return p = o, r.string;
    a -= 3, o = p;
  }
  for (r = [], jr[n] = r, r.bytes = i; o < a; )
    c = Y.getUint32(o), r.push(c), o += 4;
  for (a += 3; o < a; )
    c = j[o++], r.push(c);
  let w = i < 16 ? Ln(i) : $i(i);
  return w != null ? r.string = w : r.string = Pn(i);
}
function ki(i) {
  if (typeof i == "string") return i;
  if (typeof i == "number" || typeof i == "boolean" || typeof i == "bigint") return i.toString();
  if (i == null) return i + "";
  throw new Error("Invalid property type for record", typeof i);
}
const Lr = (i, n) => {
  let r = oe().map(ki), o = i;
  n !== void 0 && (i = i < 32 ? -((n << 5) + i) : (n << 5) + i, r.highByte = n);
  let a = G[i];
  return a && (a.isShared || tt) && ((G.restoreStructures || (G.restoreStructures = []))[i] = a), G[i] = r, r.read = jn(r, o), r.read();
};
me[0] = () => {
};
me[0].noBuffer = !0;
me[66] = (i) => {
  let n = i.length, r = BigInt(i[0] & 128 ? i[0] - 256 : i[0]);
  for (let o = 1; o < n; o++)
    r <<= 8n, r += BigInt(i[o]);
  return r;
};
let js = { Error, TypeError, ReferenceError };
me[101] = () => {
  let i = oe();
  return (js[i[0]] || Error)(i[1], { cause: i[2] });
};
me[105] = (i) => {
  if (ie.structuredClone === !1) throw new Error("Structured clone extension is disabled");
  let n = Y.getUint32(p - 4);
  ze || (ze = /* @__PURE__ */ new Map());
  let r = j[p], o;
  r >= 144 && r < 160 || r == 220 || r == 221 ? o = [] : o = {};
  let a = { target: o };
  ze.set(n, a);
  let c = oe();
  return a.used ? Object.assign(o, c) : (a.target = c, c);
};
me[112] = (i) => {
  if (ie.structuredClone === !1) throw new Error("Structured clone extension is disabled");
  let n = Y.getUint32(p - 4), r = ze.get(n);
  return r.used = !0, r.target;
};
me[115] = () => new Set(oe());
const Mi = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((i) => i + "Array");
let Ls = typeof globalThis == "object" ? globalThis : window;
me[116] = (i) => {
  let n = i[0], r = Mi[n];
  if (!r) {
    if (n === 16) {
      let o = new ArrayBuffer(i.length - 1);
      return new Uint8Array(o).set(i.subarray(1)), o;
    }
    throw new Error("Could not find typed array for code " + n);
  }
  return new Ls[r](Uint8Array.prototype.slice.call(i, 1).buffer);
};
me[120] = () => {
  let i = oe();
  return new RegExp(i[0], i[1]);
};
const Bs = [];
me[98] = (i) => {
  let n = (i[0] << 24) + (i[1] << 16) + (i[2] << 8) + i[3], r = p;
  return p += n - i.length, he = Bs, he = [Mr(), Mr()], he.position0 = 0, he.position1 = 0, he.postBundlePosition = p, p = r, oe();
};
me[255] = (i) => i.length == 4 ? new Date((i[0] * 16777216 + (i[1] << 16) + (i[2] << 8) + i[3]) * 1e3) : i.length == 8 ? new Date(
  ((i[0] << 22) + (i[1] << 14) + (i[2] << 6) + (i[3] >> 2)) / 1e6 + ((i[3] & 3) * 4294967296 + i[4] * 16777216 + (i[5] << 16) + (i[6] << 8) + i[7]) * 1e3
) : i.length == 12 ? new Date(
  ((i[0] << 24) + (i[1] << 16) + (i[2] << 8) + i[3]) / 1e6 + ((i[4] & 128 ? -281474976710656 : 0) + i[6] * 1099511627776 + i[7] * 4294967296 + i[8] * 16777216 + (i[9] << 16) + (i[10] << 8) + i[11]) * 1e3
) : /* @__PURE__ */ new Date("invalid");
function ji(i) {
  let n = Ue, r = p, o = Re, a = Fe, c = et, h = ze, w = he, A = new Uint8Array(j.slice(0, Ue)), _ = G, S = G.slice(0, G.length), d = ie, E = tt, O = i();
  return Ue = n, p = r, Re = o, Fe = a, et = c, ze = h, he = w, j = A, tt = E, G = _, G.splice(0, G.length, ...S), ie = d, Y = new DataView(j.buffer, j.byteOffset, j.byteLength), O;
}
function un() {
  j = null, ze = null, G = null;
}
function Fs(i) {
  i.unpack ? me[i.type] = i.unpack : me[i.type] = i;
}
const pn = new Array(147);
for (let i = 0; i < 256; i++)
  pn[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
const Us = nt;
var mn = new nt({ useRecords: !1 });
const zs = mn.unpack, Vs = mn.unpackMultiple, qs = mn.unpack, Li = {
  NEVER: 0,
  ALWAYS: 1,
  DECIMAL_ROUND: 3,
  DECIMAL_FIT: 4
};
let Bi = new Float32Array(1), Br = new Uint8Array(Bi.buffer, 0, 4);
function Hs(i) {
  Bi[0] = i;
  let n = pn[(Br[3] & 127) << 1 | Br[2] >> 7];
  return (n * i + (i > 0 ? 0.5 : -0.5) >> 0) / n;
}
let an;
try {
  an = new TextEncoder();
} catch {
}
let ln, Bn;
const yn = typeof Buffer < "u", tn = yn ? function(i) {
  return Buffer.allocUnsafeSlow(i);
} : Uint8Array, Fi = yn ? Buffer : Uint8Array, Fr = yn ? 4294967296 : 2144337920;
let b, $t, ne, m = 0, ye, se = null, Ws;
const Js = 21760, Ks = /[\u0080-\uFFFF]/, mt = Symbol("record-id");
class Bt extends nt {
  constructor(n) {
    super(n), this.offset = 0;
    let r, o, a, c, h = Fi.prototype.utf8Write ? function(x, B) {
      return b.utf8Write(x, B, 4294967295);
    } : an && an.encodeInto ? function(x, B) {
      return an.encodeInto(x, b.subarray(B)).written;
    } : !1, w = this;
    n || (n = {});
    let A = n && n.sequential, _ = n.structures || n.saveStructures, S = n.maxSharedStructures;
    if (S == null && (S = _ ? 32 : 0), S > 8160)
      throw new Error("Maximum maxSharedStructure is 8160");
    n.structuredClone && n.moreTypes == null && (this.moreTypes = !0);
    let d = n.maxOwnStructures;
    d == null && (d = _ ? 32 : 64), !this.structures && n.useRecords != !1 && (this.structures = []);
    let E = S > 32 || d + S > 64, O = S + 64, P = S + d + 64;
    if (P > 8256)
      throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
    let $ = [], V = 0, W = 0;
    this.pack = this.encode = function(x, B) {
      if (b || (b = new tn(8192), ne = b.dataView || (b.dataView = new DataView(b.buffer, 0, 8192)), m = 0), ye = b.length - 10, ye - m < 2048 ? (b = new tn(b.length), ne = b.dataView || (b.dataView = new DataView(b.buffer, 0, b.length)), ye = b.length - 10, m = 0) : m = m + 7 & 2147483640, r = m, B & qi && (m += B & 255), c = w.structuredClone ? /* @__PURE__ */ new Map() : null, w.bundleStrings && typeof x != "string" ? (se = [], se.size = 1 / 0) : se = null, a = w.structures, a) {
        a.uninitialized && (a = w._mergeStructures(w.getStructures()));
        let C = a.sharedLength || 0;
        if (C > S)
          throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + a.sharedLength);
        if (!a.transitions) {
          a.transitions = /* @__PURE__ */ Object.create(null);
          for (let k = 0; k < C; k++) {
            let q = a[k];
            if (!q)
              continue;
            let K, J = a.transitions;
            for (let Q = 0, ee = q.length; Q < ee; Q++) {
              let Ee = q[Q];
              K = J[Ee], K || (K = J[Ee] = /* @__PURE__ */ Object.create(null)), J = K;
            }
            J[mt] = k + 64;
          }
          this.lastNamedStructuresLength = C;
        }
        A || (a.nextId = C + 64);
      }
      o && (o = !1);
      let N;
      try {
        w.randomAccessStructure && x && x.constructor && x.constructor === Object ? Ut(x) : X(x);
        let C = se;
        if (se && Vr(r, X, 0), c && c.idsToInsert) {
          let k = c.idsToInsert.sort((Q, ee) => Q.offset > ee.offset ? 1 : -1), q = k.length, K = -1;
          for (; C && q > 0; ) {
            let Q = k[--q].offset + r;
            Q < C.stringsPosition + r && K === -1 && (K = 0), Q > C.position + r ? K >= 0 && (K += 6) : (K >= 0 && (ne.setUint32(
              C.position + r,
              ne.getUint32(C.position + r) + K
            ), K = -1), C = C.previous, q++);
          }
          K >= 0 && C && ne.setUint32(
            C.position + r,
            ne.getUint32(C.position + r) + K
          ), m += k.length * 6, m > ye && fe(m), w.offset = m;
          let J = Gs(b.subarray(r, m), k);
          return c = null, J;
        }
        return w.offset = m, B & zi ? (b.start = r, b.end = m, b) : b.subarray(r, m);
      } catch (C) {
        throw N = C, C;
      } finally {
        if (a && (Z(), o && w.saveStructures)) {
          let C = a.sharedLength || 0, k = b.subarray(r, m), q = Xs(a, w);
          if (!N)
            return w.saveStructures(q, q.isCompatible) === !1 ? w.pack(x, B) : (w.lastNamedStructuresLength = C, b.length > 1073741824 && (b = null), k);
        }
        b.length > 1073741824 && (b = null), B & Vi && (m = r);
      }
    };
    const Z = () => {
      W < 10 && W++;
      let x = a.sharedLength || 0;
      if (a.length > x && !A && (a.length = x), V > 1e4)
        a.transitions = null, W = 0, V = 0, $.length > 0 && ($ = []);
      else if ($.length > 0 && !A) {
        for (let B = 0, N = $.length; B < N; B++)
          $[B][mt] = 0;
        $ = [];
      }
    }, te = (x) => {
      var B = x.length;
      B < 16 ? b[m++] = 144 | B : B < 65536 ? (b[m++] = 220, b[m++] = B >> 8, b[m++] = B & 255) : (b[m++] = 221, ne.setUint32(m, B), m += 4);
      for (let N = 0; N < B; N++)
        X(x[N]);
    }, X = (x) => {
      m > ye && (b = fe(m));
      var B = typeof x, N;
      if (B === "string") {
        let C = x.length;
        if (se && C >= 4 && C < 4096) {
          if ((se.size += C) > Js) {
            let J, Q = (se[0] ? se[0].length * 3 + se[1].length : 0) + 10;
            m + Q > ye && (b = fe(m + Q));
            let ee;
            se.position ? (ee = se, b[m] = 200, m += 3, b[m++] = 98, J = m - r, m += 4, Vr(r, X, 0), ne.setUint16(J + r - 3, m - r - J)) : (b[m++] = 214, b[m++] = 98, J = m - r, m += 4), se = ["", ""], se.previous = ee, se.size = 0, se.position = J;
          }
          let K = Ks.test(x);
          se[K ? 0 : 1] += x, b[m++] = 193, X(K ? -C : C);
          return;
        }
        let k;
        C < 32 ? k = 1 : C < 256 ? k = 2 : C < 65536 ? k = 3 : k = 5;
        let q = C * 3;
        if (m + q > ye && (b = fe(m + q)), C < 64 || !h) {
          let K, J, Q, ee = m + k;
          for (K = 0; K < C; K++)
            J = x.charCodeAt(K), J < 128 ? b[ee++] = J : J < 2048 ? (b[ee++] = J >> 6 | 192, b[ee++] = J & 63 | 128) : (J & 64512) === 55296 && ((Q = x.charCodeAt(K + 1)) & 64512) === 56320 ? (J = 65536 + ((J & 1023) << 10) + (Q & 1023), K++, b[ee++] = J >> 18 | 240, b[ee++] = J >> 12 & 63 | 128, b[ee++] = J >> 6 & 63 | 128, b[ee++] = J & 63 | 128) : (b[ee++] = J >> 12 | 224, b[ee++] = J >> 6 & 63 | 128, b[ee++] = J & 63 | 128);
          N = ee - m - k;
        } else
          N = h(x, m + k);
        N < 32 ? b[m++] = 160 | N : N < 256 ? (k < 2 && b.copyWithin(m + 2, m + 1, m + 1 + N), b[m++] = 217, b[m++] = N) : N < 65536 ? (k < 3 && b.copyWithin(m + 3, m + 2, m + 2 + N), b[m++] = 218, b[m++] = N >> 8, b[m++] = N & 255) : (k < 5 && b.copyWithin(m + 5, m + 3, m + 3 + N), b[m++] = 219, ne.setUint32(m, N), m += 4), m += N;
      } else if (B === "number")
        if (x >>> 0 === x)
          x < 32 || x < 128 && this.useRecords === !1 || x < 64 && !this.randomAccessStructure ? b[m++] = x : x < 256 ? (b[m++] = 204, b[m++] = x) : x < 65536 ? (b[m++] = 205, b[m++] = x >> 8, b[m++] = x & 255) : (b[m++] = 206, ne.setUint32(m, x), m += 4);
        else if (x >> 0 === x)
          x >= -32 ? b[m++] = 256 + x : x >= -128 ? (b[m++] = 208, b[m++] = x + 256) : x >= -32768 ? (b[m++] = 209, ne.setInt16(m, x), m += 2) : (b[m++] = 210, ne.setInt32(m, x), m += 4);
        else {
          let C;
          if ((C = this.useFloat32) > 0 && x < 4294967296 && x >= -2147483648) {
            b[m++] = 202, ne.setFloat32(m, x);
            let k;
            if (C < 4 || // this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
            (k = x * pn[(b[m] & 127) << 1 | b[m + 1] >> 7]) >> 0 === k) {
              m += 4;
              return;
            } else
              m--;
          }
          b[m++] = 203, ne.setFloat64(m, x), m += 8;
        }
      else if (B === "object" || B === "function")
        if (!x)
          b[m++] = 192;
        else {
          if (c) {
            let k = c.get(x);
            if (k) {
              if (!k.id) {
                let q = c.idsToInsert || (c.idsToInsert = []);
                k.id = q.push(k);
              }
              b[m++] = 214, b[m++] = 112, ne.setUint32(m, k.id), m += 4;
              return;
            } else
              c.set(x, { offset: m - r });
          }
          let C = x.constructor;
          if (C === Object)
            we(x);
          else if (C === Array)
            te(x);
          else if (C === Map)
            if (this.mapAsEmptyObject) b[m++] = 128;
            else {
              N = x.size, N < 16 ? b[m++] = 128 | N : N < 65536 ? (b[m++] = 222, b[m++] = N >> 8, b[m++] = N & 255) : (b[m++] = 223, ne.setUint32(m, N), m += 4);
              for (let [k, q] of x)
                X(k), X(q);
            }
          else {
            for (let k = 0, q = ln.length; k < q; k++) {
              let K = Bn[k];
              if (x instanceof K) {
                let J = ln[k];
                if (J.write) {
                  J.type && (b[m++] = 212, b[m++] = J.type, b[m++] = 0);
                  let rt = J.write.call(this, x);
                  rt === x ? Array.isArray(x) ? te(x) : we(x) : X(rt);
                  return;
                }
                let Q = b, ee = ne, Ee = m;
                b = null;
                let Te;
                try {
                  Te = J.pack.call(this, x, (rt) => (b = Q, Q = null, m += rt, m > ye && fe(m), {
                    target: b,
                    targetView: ne,
                    position: m - rt
                  }), X);
                } finally {
                  Q && (b = Q, ne = ee, m = Ee, ye = b.length - 10);
                }
                Te && (Te.length + m > ye && fe(Te.length + m), m = Ys(Te, b, m, J.type));
                return;
              }
            }
            if (Array.isArray(x))
              te(x);
            else {
              if (x.toJSON) {
                const k = x.toJSON();
                if (k !== x)
                  return X(k);
              }
              if (B === "function")
                return X(this.writeFunction && this.writeFunction(x));
              we(x);
            }
          }
        }
      else if (B === "boolean")
        b[m++] = x ? 195 : 194;
      else if (B === "bigint") {
        if (x < BigInt(1) << BigInt(63) && x >= -(BigInt(1) << BigInt(63)))
          b[m++] = 211, ne.setBigInt64(m, x);
        else if (x < BigInt(1) << BigInt(64) && x > 0)
          b[m++] = 207, ne.setBigUint64(m, x);
        else if (this.largeBigIntToFloat)
          b[m++] = 203, ne.setFloat64(m, Number(x));
        else if (this.useBigIntExtension && x < 2n ** 1023n && x > -(2n ** 1023n)) {
          b[m++] = 199, m++, b[m++] = 66;
          let C = [], k;
          do {
            let q = x & 0xffn;
            k = (q & 0x80n) === (x < 0n ? 0x80n : 0n), C.push(q), x >>= 8n;
          } while (!((x === 0n || x === -1n) && k));
          b[m - 2] = C.length;
          for (let q = C.length; q > 0; )
            b[m++] = Number(C[--q]);
          return;
        } else
          throw new RangeError(x + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension or set largeBigIntToFloat to convert to float-64");
        m += 8;
      } else if (B === "undefined")
        this.encodeUndefinedAsNil ? b[m++] = 192 : (b[m++] = 212, b[m++] = 0, b[m++] = 0);
      else
        throw new Error("Unknown type: " + B);
    }, ge = this.variableMapSize || this.coercibleKeyAsNumber ? (x) => {
      let B = Object.keys(x), N = B.length;
      N < 16 ? b[m++] = 128 | N : N < 65536 ? (b[m++] = 222, b[m++] = N >> 8, b[m++] = N & 255) : (b[m++] = 223, ne.setUint32(m, N), m += 4);
      let C;
      if (this.coercibleKeyAsNumber)
        for (let k = 0; k < N; k++) {
          C = B[k];
          let q = Number(C);
          X(isNaN(q) ? C : q), X(x[C]);
        }
      else
        for (let k = 0; k < N; k++)
          X(C = B[k]), X(x[C]);
    } : (x) => {
      b[m++] = 222;
      let B = m - r;
      m += 2;
      let N = 0;
      for (let C in x)
        (typeof x.hasOwnProperty != "function" || x.hasOwnProperty(C)) && (X(C), X(x[C]), N++);
      b[B++ + r] = N >> 8, b[B + r] = N & 255;
    }, pe = this.useRecords === !1 ? ge : n.progressiveRecords && !E ? (
      // this is about 2% faster for highly stable structures, since it only requires one for-in loop (but much more expensive when new structure needs to be written)
      (x) => {
        let B, N = a.transitions || (a.transitions = /* @__PURE__ */ Object.create(null)), C = m++ - r, k;
        for (let q in x)
          if (typeof x.hasOwnProperty != "function" || x.hasOwnProperty(q)) {
            if (B = N[q], B)
              N = B;
            else {
              let K = Object.keys(x), J = N;
              N = a.transitions;
              let Q = 0;
              for (let ee = 0, Ee = K.length; ee < Ee; ee++) {
                let Te = K[ee];
                B = N[Te], B || (B = N[Te] = /* @__PURE__ */ Object.create(null), Q++), N = B;
              }
              C + r + 1 == m ? (m--, Ft(N, K, Q)) : Et(N, K, C, Q), k = !0, N = J[q];
            }
            X(x[q]);
          }
        if (!k) {
          let q = N[mt];
          q ? b[C + r] = q : Et(N, Object.keys(x), C, 0);
        }
      }
    ) : (x) => {
      let B, N = a.transitions || (a.transitions = /* @__PURE__ */ Object.create(null)), C = 0;
      for (let q in x) (typeof x.hasOwnProperty != "function" || x.hasOwnProperty(q)) && (B = N[q], B || (B = N[q] = /* @__PURE__ */ Object.create(null), C++), N = B);
      let k = N[mt];
      k ? k >= 96 && E ? (b[m++] = ((k -= 96) & 31) + 96, b[m++] = k >> 5) : b[m++] = k : Ft(N, N.__keys__ || Object.keys(x), C);
      for (let q in x)
        (typeof x.hasOwnProperty != "function" || x.hasOwnProperty(q)) && X(x[q]);
    }, be = typeof this.useRecords == "function" && this.useRecords, we = be ? (x) => {
      be(x) ? pe(x) : ge(x);
    } : pe, fe = (x) => {
      let B;
      if (x > 16777216) {
        if (x - r > Fr)
          throw new Error("Packed buffer would be larger than maximum buffer size");
        B = Math.min(
          Fr,
          Math.round(Math.max((x - r) * (x > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096
        );
      } else
        B = (Math.max(x - r << 2, b.length - 1) >> 12) + 1 << 12;
      let N = new tn(B);
      return ne = N.dataView || (N.dataView = new DataView(N.buffer, 0, B)), x = Math.min(x, b.length), b.copy ? b.copy(N, 0, r, x) : N.set(b.slice(r, x)), m -= r, r = 0, ye = N.length - 10, b = N;
    }, Ft = (x, B, N) => {
      let C = a.nextId;
      C || (C = 64), C < O && this.shouldShareStructure && !this.shouldShareStructure(B) ? (C = a.nextOwnId, C < P || (C = O), a.nextOwnId = C + 1) : (C >= P && (C = O), a.nextId = C + 1);
      let k = B.highByte = C >= 96 && E ? C - 96 >> 5 : -1;
      x[mt] = C, x.__keys__ = B, a[C - 64] = B, C < O ? (B.isShared = !0, a.sharedLength = C - 63, o = !0, k >= 0 ? (b[m++] = (C & 31) + 96, b[m++] = k) : b[m++] = C) : (k >= 0 ? (b[m++] = 213, b[m++] = 114, b[m++] = (C & 31) + 96, b[m++] = k) : (b[m++] = 212, b[m++] = 114, b[m++] = C), N && (V += W * N), $.length >= d && ($.shift()[mt] = 0), $.push(x), X(B));
    }, Et = (x, B, N, C) => {
      let k = b, q = m, K = ye, J = r;
      b = $t, m = 0, r = 0, b || ($t = b = new tn(8192)), ye = b.length - 10, Ft(x, B, C), $t = b;
      let Q = m;
      if (b = k, m = q, ye = K, r = J, Q > 1) {
        let ee = m + Q - 1;
        ee > ye && fe(ee);
        let Ee = N + r;
        b.copyWithin(Ee + Q, Ee + 1, m), b.set($t.slice(0, Q), Ee), m = ee;
      } else
        b[N + r] = $t[0];
    }, Ut = (x) => {
      let B = Ws(x, b, r, m, a, fe, (N, C, k) => {
        if (k)
          return o = !0;
        m = C;
        let q = b;
        return X(N), Z(), q !== b ? { position: m, targetView: ne, target: b } : m;
      }, this);
      if (B === 0)
        return we(x);
      m = B;
    };
  }
  useBuffer(n) {
    b = n, ne = new DataView(b.buffer, b.byteOffset, b.byteLength), m = 0;
  }
  set position(n) {
    m = n;
  }
  get position() {
    return m;
  }
  set buffer(n) {
    b = n;
  }
  get buffer() {
    return b;
  }
  clearSharedData() {
    this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = []);
  }
}
Bn = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Ci];
ln = [{
  pack(i, n, r) {
    let o = i.getTime() / 1e3;
    if ((this.useTimestamp32 || i.getMilliseconds() === 0) && o >= 0 && o < 4294967296) {
      let { target: a, targetView: c, position: h } = n(6);
      a[h++] = 214, a[h++] = 255, c.setUint32(h, o);
    } else if (o > 0 && o < 4294967296) {
      let { target: a, targetView: c, position: h } = n(10);
      a[h++] = 215, a[h++] = 255, c.setUint32(h, i.getMilliseconds() * 4e6 + (o / 1e3 / 4294967296 >> 0)), c.setUint32(h + 4, o);
    } else if (isNaN(o)) {
      if (this.onInvalidDate)
        return n(0), r(this.onInvalidDate());
      let { target: a, targetView: c, position: h } = n(3);
      a[h++] = 212, a[h++] = 255, a[h++] = 255;
    } else {
      let { target: a, targetView: c, position: h } = n(15);
      a[h++] = 199, a[h++] = 12, a[h++] = 255, c.setUint32(h, i.getMilliseconds() * 1e6), c.setBigInt64(h + 4, BigInt(Math.floor(o)));
    }
  }
}, {
  pack(i, n, r) {
    if (this.setAsEmptyObject)
      return n(0), r({});
    let o = Array.from(i), { target: a, position: c } = n(this.moreTypes ? 3 : 0);
    this.moreTypes && (a[c++] = 212, a[c++] = 115, a[c++] = 0), r(o);
  }
}, {
  pack(i, n, r) {
    let { target: o, position: a } = n(this.moreTypes ? 3 : 0);
    this.moreTypes && (o[a++] = 212, o[a++] = 101, o[a++] = 0), r([i.name, i.message, i.cause]);
  }
}, {
  pack(i, n, r) {
    let { target: o, position: a } = n(this.moreTypes ? 3 : 0);
    this.moreTypes && (o[a++] = 212, o[a++] = 120, o[a++] = 0), r([i.source, i.flags]);
  }
}, {
  pack(i, n) {
    this.moreTypes ? Ur(i, 16, n) : zr(yn ? Buffer.from(i) : new Uint8Array(i), n);
  }
}, {
  pack(i, n) {
    let r = i.constructor;
    r !== Fi && this.moreTypes ? Ur(i, Mi.indexOf(r.name), n) : zr(i, n);
  }
}, {
  pack(i, n) {
    let { target: r, position: o } = n(1);
    r[o] = 193;
  }
}];
function Ur(i, n, r, o) {
  let a = i.byteLength;
  if (a + 1 < 256) {
    var { target: c, position: h } = r(4 + a);
    c[h++] = 199, c[h++] = a + 1;
  } else if (a + 1 < 65536) {
    var { target: c, position: h } = r(5 + a);
    c[h++] = 200, c[h++] = a + 1 >> 8, c[h++] = a + 1 & 255;
  } else {
    var { target: c, position: h, targetView: w } = r(7 + a);
    c[h++] = 201, w.setUint32(h, a + 1), h += 4;
  }
  c[h++] = 116, c[h++] = n, i.buffer || (i = new Uint8Array(i)), c.set(new Uint8Array(i.buffer, i.byteOffset, i.byteLength), h);
}
function zr(i, n) {
  let r = i.byteLength;
  var o, a;
  if (r < 256) {
    var { target: o, position: a } = n(r + 2);
    o[a++] = 196, o[a++] = r;
  } else if (r < 65536) {
    var { target: o, position: a } = n(r + 3);
    o[a++] = 197, o[a++] = r >> 8, o[a++] = r & 255;
  } else {
    var { target: o, position: a, targetView: c } = n(r + 5);
    o[a++] = 198, c.setUint32(a, r), a += 4;
  }
  o.set(i, a);
}
function Ys(i, n, r, o) {
  let a = i.length;
  switch (a) {
    case 1:
      n[r++] = 212;
      break;
    case 2:
      n[r++] = 213;
      break;
    case 4:
      n[r++] = 214;
      break;
    case 8:
      n[r++] = 215;
      break;
    case 16:
      n[r++] = 216;
      break;
    default:
      a < 256 ? (n[r++] = 199, n[r++] = a) : a < 65536 ? (n[r++] = 200, n[r++] = a >> 8, n[r++] = a & 255) : (n[r++] = 201, n[r++] = a >> 24, n[r++] = a >> 16 & 255, n[r++] = a >> 8 & 255, n[r++] = a & 255);
  }
  return n[r++] = o, n.set(i, r), r += a, r;
}
function Gs(i, n) {
  let r, o = n.length * 6, a = i.length - o;
  for (; r = n.pop(); ) {
    let c = r.offset, h = r.id;
    i.copyWithin(c + o, c, a), o -= 6;
    let w = c + o;
    i[w++] = 214, i[w++] = 105, i[w++] = h >> 24, i[w++] = h >> 16 & 255, i[w++] = h >> 8 & 255, i[w++] = h & 255, a = c;
  }
  return i;
}
function Vr(i, n, r) {
  if (se.length > 0) {
    ne.setUint32(se.position + i, m + r - se.position - i), se.stringsPosition = m - i;
    let o = se;
    se = null, n(o[0]), n(o[1]);
  }
}
function Zs(i) {
  if (i.Class) {
    if (!i.pack && !i.write)
      throw new Error("Extension has no pack or write function");
    if (i.pack && !i.type)
      throw new Error("Extension has no type (numeric code to identify the extension)");
    Bn.unshift(i.Class), ln.unshift(i);
  }
  Fs(i);
}
function Xs(i, n) {
  return i.isCompatible = (r) => {
    let o = !r || (n.lastNamedStructuresLength || 0) === r.length;
    return o || n._mergeStructures(r), o;
  }, i;
}
let Ui = new Bt({ useRecords: !1 });
const Qs = Ui.pack, eo = Ui.pack, to = Bt, { NEVER: no, ALWAYS: ro, DECIMAL_ROUND: io, DECIMAL_FIT: so } = Li, zi = 512, Vi = 1024, qi = 2048;
function oo(i, n = {}) {
  if (!i || typeof i != "object")
    throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");
  if (typeof i[Symbol.iterator] == "function")
    return ao(i, n);
  if (typeof i.then == "function" || typeof i[Symbol.asyncIterator] == "function")
    return co(i, n);
  throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise");
}
function* ao(i, n) {
  const r = new Bt(n);
  for (const o of i)
    yield r.pack(o);
}
async function* co(i, n) {
  const r = new Bt(n);
  for await (const o of i)
    yield r.pack(o);
}
function fo(i, n = {}) {
  if (!i || typeof i != "object")
    throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
  const r = new nt(n);
  let o;
  const a = (c) => {
    let h;
    o && (c = Buffer.concat([o, c]), o = void 0);
    try {
      h = r.unpackMultiple(c);
    } catch (w) {
      if (w.incomplete)
        o = c.slice(w.lastPosition), h = w.values;
      else
        throw w;
    }
    return h;
  };
  if (typeof i[Symbol.iterator] == "function")
    return function* () {
      for (const h of i)
        yield* a(h);
    }();
  if (typeof i[Symbol.asyncIterator] == "function")
    return async function* () {
      for await (const h of i)
        yield* a(h);
    }();
}
const uo = fo, lo = oo, ho = !1, go = !0, po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALWAYS: ro,
  C1: Mn,
  DECIMAL_FIT: so,
  DECIMAL_ROUND: io,
  Decoder: Us,
  Encoder: to,
  FLOAT32_OPTIONS: Li,
  NEVER: no,
  Packr: Bt,
  RESERVE_START_SPACE: qi,
  RESET_BUFFER_MODE: Vi,
  REUSE_BUFFER_MODE: zi,
  Unpackr: nt,
  addExtension: Zs,
  clearSource: un,
  decode: qs,
  decodeIter: uo,
  encode: eo,
  encodeIter: lo,
  isNativeAccelerationEnabled: Ms,
  mapsAsObjects: go,
  pack: Qs,
  roundFloat32: Hs,
  unpack: zs,
  unpackMultiple: Vs,
  useRecords: ho
}, Symbol.toStringTag, { value: "Module" })), mo = /* @__PURE__ */ $n(po);
var qr;
function Hi() {
  if (qr) return Yt;
  qr = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  var i = Ts(), n = Si(), r = Ai(), o = Ri(), a = Cs(), c = kn(), h = Ti(), w = gn(), A = mo, _ = (
    /** @class */
    function() {
      function S(d, E) {
        var O = this;
        this.onStateChange = a.createSignal(), this.onError = a.createSignal(), this.onLeave = a.createSignal(), this.onJoin = a.createSignal(), this.hasJoined = !1, this.onMessageHandlers = o.createNanoEvents(), this.roomId = null, this.name = d, this.packr = new A.Packr(), this.packr.encode(void 0), E && (this.serializer = new (r.getSerializer("schema"))(), this.rootSchema = E, this.serializer.state = new E()), this.onError(function(P, $) {
          var V;
          return (V = console.warn) === null || V === void 0 ? void 0 : V.call(console, "colyseus.js - onError => (".concat(P, ") ").concat($));
        }), this.onLeave(function() {
          return O.removeAllListeners();
        });
      }
      return S.prototype.connect = function(d, E, O, P) {
        O === void 0 && (O = this);
        var $ = new i.Connection(P.protocol);
        if (O.connection = $, $.events.onmessage = S.prototype.onMessageCallback.bind(O), $.events.onclose = function(W) {
          var Z;
          if (!O.hasJoined) {
            (Z = console.warn) === null || Z === void 0 || Z.call(console, "Room connection was closed unexpectedly (".concat(W.code, "): ").concat(W.reason)), O.onError.invoke(W.code, W.reason);
            return;
          }
          W.code === w.CloseCode.DEVMODE_RESTART && E ? E() : (O.onLeave.invoke(W.code, W.reason), O.destroy());
        }, $.events.onerror = function(W) {
          var Z;
          (Z = console.warn) === null || Z === void 0 || Z.call(console, "Room, onError (".concat(W.code, "): ").concat(W.reason)), O.onError.invoke(W.code, W.reason);
        }, P.protocol === "h3") {
          var V = new URL(d);
          $.connect(V.origin, P);
        } else
          $.connect(d);
      }, S.prototype.leave = function(d) {
        var E = this;
        return d === void 0 && (d = !0), new Promise(function(O) {
          E.onLeave(function(P) {
            return O(P);
          }), E.connection ? d ? (E.packr.buffer[0] = n.Protocol.LEAVE_ROOM, E.connection.send(E.packr.buffer.subarray(0, 1))) : E.connection.close() : E.onLeave.invoke(w.CloseCode.CONSENTED);
        });
      }, S.prototype.onMessage = function(d, E) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(d), E);
      }, S.prototype.send = function(d, E) {
        var O = { offset: 1 };
        this.packr.buffer[0] = n.Protocol.ROOM_DATA, typeof d == "string" ? c.encode.string(this.packr.buffer, d, O) : c.encode.number(this.packr.buffer, d, O), this.packr.position = 0;
        var P = E !== void 0 ? this.packr.pack(E, 2048 + O.offset) : this.packr.buffer.subarray(0, O.offset);
        this.connection.send(P);
      }, S.prototype.sendUnreliable = function(d, E) {
        var O = { offset: 1 };
        this.packr.buffer[0] = n.Protocol.ROOM_DATA, typeof d == "string" ? c.encode.string(this.packr.buffer, d, O) : c.encode.number(this.packr.buffer, d, O), this.packr.position = 0;
        var P = E !== void 0 ? this.packr.pack(E, 2048 + O.offset) : this.packr.buffer.subarray(0, O.offset);
        this.connection.sendUnreliable(P);
      }, S.prototype.sendBytes = function(d, E) {
        var O = { offset: 1 };
        if (this.packr.buffer[0] = n.Protocol.ROOM_DATA_BYTES, typeof d == "string" ? c.encode.string(this.packr.buffer, d, O) : c.encode.number(this.packr.buffer, d, O), E.byteLength + O.offset > this.packr.buffer.byteLength) {
          var P = new Uint8Array(O.offset + E.byteLength);
          P.set(this.packr.buffer), this.packr.useBuffer(P);
        }
        this.packr.buffer.set(E, O.offset), this.connection.send(this.packr.buffer.subarray(0, O.offset + E.byteLength));
      }, Object.defineProperty(S.prototype, "state", {
        get: function() {
          return this.serializer.getState();
        },
        enumerable: !1,
        configurable: !0
      }), S.prototype.removeAllListeners = function() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {}, this.serializer instanceof h.SchemaSerializer && (this.serializer.decoder.root.callbacks = {});
      }, S.prototype.onMessageCallback = function(d) {
        var E = new Uint8Array(d.data), O = { offset: 1 }, P = E[0];
        if (P === n.Protocol.JOIN_ROOM) {
          var $ = c.decode.utf8Read(E, O, E[O.offset++]);
          if (this.serializerId = c.decode.utf8Read(E, O, E[O.offset++]), !this.serializer) {
            var V = r.getSerializer(this.serializerId);
            this.serializer = new V();
          }
          E.byteLength > O.offset && this.serializer.handshake && this.serializer.handshake(E, O), this.reconnectionToken = "".concat(this.roomId, ":").concat($), this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = n.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1));
        } else if (P === n.Protocol.ERROR) {
          var W = c.decode.number(E, O), Z = c.decode.string(E, O);
          this.onError.invoke(W, Z);
        } else if (P === n.Protocol.LEAVE_ROOM)
          this.leave();
        else if (P === n.Protocol.ROOM_STATE)
          this.serializer.setState(E, O), this.onStateChange.invoke(this.serializer.getState());
        else if (P === n.Protocol.ROOM_STATE_PATCH)
          this.serializer.patch(E, O), this.onStateChange.invoke(this.serializer.getState());
        else if (P === n.Protocol.ROOM_DATA) {
          var te = c.decode.stringCheck(E, O) ? c.decode.string(E, O) : c.decode.number(E, O), Z = E.byteLength > O.offset ? A.unpack(E, { start: O.offset }) : void 0;
          this.dispatchMessage(te, Z);
        } else if (P === n.Protocol.ROOM_DATA_BYTES) {
          var te = c.decode.stringCheck(E, O) ? c.decode.string(E, O) : c.decode.number(E, O);
          this.dispatchMessage(te, E.subarray(O.offset));
        }
      }, S.prototype.dispatchMessage = function(d, E) {
        var O, P = this.getMessageHandlerKey(d);
        this.onMessageHandlers.events[P] ? this.onMessageHandlers.emit(P, E) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", d, E) : (O = console.warn) === null || O === void 0 || O.call(console, "colyseus.js: onMessage() not registered for type '".concat(d, "'."));
      }, S.prototype.destroy = function() {
        this.serializer && this.serializer.teardown();
      }, S.prototype.getMessageHandlerKey = function(d) {
        switch (typeof d) {
          // string
          case "string":
            return d;
          // number
          case "number":
            return "i".concat(d);
          default:
            throw new Error("invalid message type.");
        }
      }, S;
    }()
  );
  return Yt.Room = _, Yt;
}
var nn = {};
function Hr(i, n) {
  n.headers = i.headers || {}, n.statusMessage = i.statusText, n.statusCode = i.status, n.data = i.response;
}
function ke(i, n, r) {
  return new Promise(function(o, a) {
    r = r || {};
    var c = new XMLHttpRequest(), h, w, A, _ = r.body, S = r.headers || {};
    r.timeout && (c.timeout = r.timeout), c.ontimeout = c.onerror = function(d) {
      d.timeout = d.type == "timeout", a(d);
    }, c.open(i, n.href || n), c.onload = function() {
      for (A = c.getAllResponseHeaders().trim().split(/[\r\n]+/), Hr(c, c); w = A.shift(); )
        w = w.split(": "), c.headers[w.shift().toLowerCase()] = w.join(": ");
      if (w = c.headers["content-type"], w && ~w.indexOf("application/json"))
        try {
          c.data = JSON.parse(c.data, r.reviver);
        } catch (d) {
          return Hr(c, d), a(d);
        }
      (c.status >= 400 ? a : o)(c);
    }, typeof FormData < "u" && _ instanceof FormData || _ && typeof _ == "object" && (S["content-type"] = "application/json", _ = JSON.stringify(_)), c.withCredentials = !!r.withCredentials;
    for (h in S)
      c.setRequestHeader(h, S[h]);
    c.send(_);
  });
}
var yo = /* @__PURE__ */ ke.bind(ke, "GET"), wo = /* @__PURE__ */ ke.bind(ke, "POST"), bo = /* @__PURE__ */ ke.bind(ke, "PATCH"), Eo = /* @__PURE__ */ ke.bind(ke, "DELETE"), vo = /* @__PURE__ */ ke.bind(ke, "PUT");
const Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  del: Eo,
  get: yo,
  patch: bo,
  post: wo,
  put: vo,
  send: ke
}, Symbol.toStringTag, { value: "Module" })), xo = /* @__PURE__ */ $n(Oo);
var Wr;
function _o() {
  if (Wr) return nn;
  Wr = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  var i = gn(), n = xo;
  function r(c) {
    if (c && c.__esModule) return c;
    var h = /* @__PURE__ */ Object.create(null);
    return c && Object.keys(c).forEach(function(w) {
      if (w !== "default") {
        var A = Object.getOwnPropertyDescriptor(c, w);
        Object.defineProperty(h, w, A.get ? A : {
          enumerable: !0,
          get: function() {
            return c[w];
          }
        });
      }
    }), h.default = c, Object.freeze(h);
  }
  var o = /* @__PURE__ */ r(n), a = (
    /** @class */
    function() {
      function c(h) {
        this.client = h;
      }
      return c.prototype.get = function(h, w) {
        return w === void 0 && (w = {}), this.request("get", h, w);
      }, c.prototype.post = function(h, w) {
        return w === void 0 && (w = {}), this.request("post", h, w);
      }, c.prototype.del = function(h, w) {
        return w === void 0 && (w = {}), this.request("del", h, w);
      }, c.prototype.put = function(h, w) {
        return w === void 0 && (w = {}), this.request("put", h, w);
      }, c.prototype.request = function(h, w, A) {
        return A === void 0 && (A = {}), o[h](this.client.getHttpEndpoint(w), this.getOptions(A)).catch(function(_) {
          var S, d = _.statusCode, E = ((S = _.data) === null || S === void 0 ? void 0 : S.error) || _.statusMessage || _.message;
          throw !d && !E ? _ : new i.ServerError(d, E);
        });
      }, c.prototype.getOptions = function(h) {
        return this.authToken && (h.headers || (h.headers = {}), h.headers.Authorization = "Bearer ".concat(this.authToken)), typeof cc < "u" && cc.sys && cc.sys.isNative || (h.withCredentials = !0), h;
      }, c;
    }()
  );
  return nn.HTTP = a, nn;
}
var rn = {}, yt = {}, Jr;
function Io() {
  if (Jr) return yt;
  Jr = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  var i;
  function n() {
    if (!i)
      try {
        i = typeof cc < "u" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
      } catch {
      }
    return i || (i = {
      cache: {},
      setItem: function(c, h) {
        this.cache[c] = h;
      },
      getItem: function(c) {
        this.cache[c];
      },
      removeItem: function(c) {
        delete this.cache[c];
      }
    }), i;
  }
  function r(c, h) {
    n().setItem(c, h);
  }
  function o(c) {
    n().removeItem(c);
  }
  function a(c, h) {
    var w = n().getItem(c);
    typeof Promise > "u" || // old browsers
    !(w instanceof Promise) ? h(w) : w.then(function(A) {
      return h(A);
    });
  }
  return yt.getItem = a, yt.removeItem = o, yt.setItem = r, yt;
}
var Kr;
function Wi() {
  if (Kr) return rn;
  Kr = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  var i = dn, n = Io(), r = Ri(), o, a, c, h, w = (
    /** @class */
    function() {
      function A(_) {
        var S = this;
        this.http = _, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, o.set(this, !1), a.set(this, void 0), c.set(this, void 0), h.set(this, r.createNanoEvents()), n.getItem(this.settings.key, function(d) {
          return S.token = d;
        });
      }
      return Object.defineProperty(A.prototype, "token", {
        get: function() {
          return this.http.authToken;
        },
        set: function(_) {
          this.http.authToken = _;
        },
        enumerable: !1,
        configurable: !0
      }), A.prototype.onChange = function(_) {
        var S = this, d = i.__classPrivateFieldGet(this, h, "f").on("change", _);
        return i.__classPrivateFieldGet(this, o, "f") || i.__classPrivateFieldSet(this, a, new Promise(function(E, O) {
          S.getUserData().then(function(P) {
            S.emitChange(i.__assign(i.__assign({}, P), { token: S.token }));
          }).catch(function(P) {
            S.emitChange({ user: null, token: void 0 });
          }).finally(function() {
            E();
          });
        }), "f"), i.__classPrivateFieldSet(this, o, !0, "f"), d;
      }, A.prototype.getUserData = function() {
        return i.__awaiter(this, void 0, void 0, function() {
          return i.__generator(this, function(_) {
            switch (_.label) {
              case 0:
                return this.token ? [4, this.http.get("".concat(this.settings.path, "/userdata"))] : [3, 2];
              case 1:
                return [2, _.sent().data];
              case 2:
                throw new Error("missing auth.token");
            }
          });
        });
      }, A.prototype.registerWithEmailAndPassword = function(_, S, d) {
        return i.__awaiter(this, void 0, void 0, function() {
          var E;
          return i.__generator(this, function(O) {
            switch (O.label) {
              case 0:
                return [4, this.http.post("".concat(this.settings.path, "/register"), {
                  body: { email: _, password: S, options: d }
                })];
              case 1:
                return E = O.sent().data, this.emitChange(E), [2, E];
            }
          });
        });
      }, A.prototype.signInWithEmailAndPassword = function(_, S) {
        return i.__awaiter(this, void 0, void 0, function() {
          var d;
          return i.__generator(this, function(E) {
            switch (E.label) {
              case 0:
                return [4, this.http.post("".concat(this.settings.path, "/login"), {
                  body: { email: _, password: S }
                })];
              case 1:
                return d = E.sent().data, this.emitChange(d), [2, d];
            }
          });
        });
      }, A.prototype.signInAnonymously = function(_) {
        return i.__awaiter(this, void 0, void 0, function() {
          var S;
          return i.__generator(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, this.http.post("".concat(this.settings.path, "/anonymous"), {
                  body: { options: _ }
                })];
              case 1:
                return S = d.sent().data, this.emitChange(S), [2, S];
            }
          });
        });
      }, A.prototype.sendPasswordResetEmail = function(_) {
        return i.__awaiter(this, void 0, void 0, function() {
          return i.__generator(this, function(S) {
            switch (S.label) {
              case 0:
                return [4, this.http.post("".concat(this.settings.path, "/forgot-password"), {
                  body: { email: _ }
                })];
              case 1:
                return [2, S.sent().data];
            }
          });
        });
      }, A.prototype.signInWithProvider = function(_) {
        return i.__awaiter(this, arguments, void 0, function(S, d) {
          var E = this;
          return d === void 0 && (d = {}), i.__generator(this, function(O) {
            return [2, new Promise(function(P, $) {
              var V = d.width || 480, W = d.height || 768, Z = E.token ? "?token=".concat(E.token) : "", te = "Login with ".concat(S[0].toUpperCase() + S.substring(1)), X = E.http.client.getHttpEndpoint("".concat(d.prefix || "".concat(E.settings.path, "/provider"), "/").concat(S).concat(Z)), ge = screen.width / 2 - V / 2, pe = screen.height / 2 - W / 2;
              i.__classPrivateFieldSet(E, c, window.open(X, te, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + V + ", height=" + W + ", top=" + pe + ", left=" + ge), "f");
              var be = function(fe) {
                fe.data.user === void 0 && fe.data.token === void 0 || (clearInterval(we), i.__classPrivateFieldGet(E, c, "f").close(), i.__classPrivateFieldSet(E, c, void 0, "f"), window.removeEventListener("message", be), fe.data.error !== void 0 ? $(fe.data.error) : (P(fe.data), E.emitChange(fe.data)));
              }, we = setInterval(function() {
                (!i.__classPrivateFieldGet(E, c, "f") || i.__classPrivateFieldGet(E, c, "f").closed) && (i.__classPrivateFieldSet(E, c, void 0, "f"), $("cancelled"), window.removeEventListener("message", be));
              }, 200);
              window.addEventListener("message", be);
            })];
          });
        });
      }, A.prototype.signOut = function() {
        return i.__awaiter(this, void 0, void 0, function() {
          return i.__generator(this, function(_) {
            return this.emitChange({ user: null, token: null }), [
              2
              /*return*/
            ];
          });
        });
      }, A.prototype.emitChange = function(_) {
        _.token !== void 0 && (this.token = _.token, _.token === null ? n.removeItem(this.settings.key) : n.setItem(this.settings.key, _.token)), i.__classPrivateFieldGet(this, h, "f").emit("change", _);
      }, A;
    }()
  );
  return o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), rn.Auth = w, rn;
}
var sn = {}, Yr;
function So() {
  if (Yr) return sn;
  Yr = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  function i(n) {
    var r, o = ((r = window == null ? void 0 : window.location) === null || r === void 0 ? void 0 : r.hostname) || "localhost", a = n.hostname.split("."), c = !n.hostname.includes("trycloudflare.com") && // ignore cloudflared subdomains
    !n.hostname.includes("discordsays.com") && // ignore discordsays.com subdomains
    a.length > 2 ? "/".concat(a[0]) : "";
    return n.pathname.startsWith("/.proxy") ? "".concat(n.protocol, "//").concat(o).concat(c).concat(n.pathname).concat(n.search) : "".concat(n.protocol, "//").concat(o, "/.proxy/colyseus").concat(c).concat(n.pathname).concat(n.search);
  }
  return sn.discordURLBuilder = i, sn;
}
var Gr;
function Ao() {
  if (Gr) return Tt;
  Gr = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  var i = dn, n = gn(), r = Hi(), o = _o(), a = Wi(), c = So(), h, w = (
    /** @class */
    function(S) {
      i.__extends(d, S);
      function d(E, O) {
        var P = S.call(this, E) || this;
        return P.code = O, Object.setPrototypeOf(P, d.prototype), P;
      }
      return d;
    }(Error)
  ), A = typeof window < "u" && typeof ((h = window == null ? void 0 : window.location) === null || h === void 0 ? void 0 : h.hostname) < "u" ? "".concat(window.location.protocol.replace("http", "ws"), "//").concat(window.location.hostname).concat(window.location.port && ":".concat(window.location.port)) : "ws://127.0.0.1:2567", _ = (
    /** @class */
    function() {
      function S(d, E) {
        d === void 0 && (d = A);
        var O, P;
        if (typeof d == "string") {
          var $ = d.startsWith("/") ? new URL(d, A) : new URL(d), V = $.protocol === "https:" || $.protocol === "wss:", W = Number($.port || (V ? 443 : 80));
          this.settings = {
            hostname: $.hostname,
            pathname: $.pathname,
            port: W,
            secure: V
          };
        } else
          d.port === void 0 && (d.port = d.secure ? 443 : 80), d.pathname === void 0 && (d.pathname = ""), this.settings = d;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new o.HTTP(this), this.auth = new a.Auth(this.http), this.urlBuilder = E, !this.urlBuilder && typeof window < "u" && (!((P = (O = window == null ? void 0 : window.location) === null || O === void 0 ? void 0 : O.hostname) === null || P === void 0) && P.includes("discordsays.com")) && (this.urlBuilder = c.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."));
      }
      return S.prototype.joinOrCreate = function(d) {
        return i.__awaiter(this, arguments, void 0, function(E, O, P) {
          return O === void 0 && (O = {}), i.__generator(this, function($) {
            switch ($.label) {
              case 0:
                return [4, this.createMatchMakeRequest("joinOrCreate", E, O, P)];
              case 1:
                return [2, $.sent()];
            }
          });
        });
      }, S.prototype.create = function(d) {
        return i.__awaiter(this, arguments, void 0, function(E, O, P) {
          return O === void 0 && (O = {}), i.__generator(this, function($) {
            switch ($.label) {
              case 0:
                return [4, this.createMatchMakeRequest("create", E, O, P)];
              case 1:
                return [2, $.sent()];
            }
          });
        });
      }, S.prototype.join = function(d) {
        return i.__awaiter(this, arguments, void 0, function(E, O, P) {
          return O === void 0 && (O = {}), i.__generator(this, function($) {
            switch ($.label) {
              case 0:
                return [4, this.createMatchMakeRequest("join", E, O, P)];
              case 1:
                return [2, $.sent()];
            }
          });
        });
      }, S.prototype.joinById = function(d) {
        return i.__awaiter(this, arguments, void 0, function(E, O, P) {
          return O === void 0 && (O = {}), i.__generator(this, function($) {
            switch ($.label) {
              case 0:
                return [4, this.createMatchMakeRequest("joinById", E, O, P)];
              case 1:
                return [2, $.sent()];
            }
          });
        });
      }, S.prototype.reconnect = function(d, E) {
        return i.__awaiter(this, void 0, void 0, function() {
          var O, P, $;
          return i.__generator(this, function(V) {
            switch (V.label) {
              case 0:
                if (typeof d == "string" && typeof E == "string")
                  throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
                if (O = d.split(":"), P = O[0], $ = O[1], !P || !$)
                  throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);
                return [4, this.createMatchMakeRequest("reconnect", P, { reconnectionToken: $ }, E)];
              case 1:
                return [2, V.sent()];
            }
          });
        });
      }, S.prototype.consumeSeatReservation = function(d, E, O) {
        return i.__awaiter(this, void 0, void 0, function() {
          var P, $, V, W = this;
          return i.__generator(this, function(Z) {
            return P = this.createRoom(d.room.name, E), P.roomId = d.room.roomId, P.sessionId = d.sessionId, $ = { sessionId: P.sessionId }, d.reconnectionToken && ($.reconnectionToken = d.reconnectionToken), V = O || P, P.connect(this.buildEndpoint(d.room, $, d.protocol), d.devMode && function() {
              return i.__awaiter(W, void 0, void 0, function() {
                var te, X, ge, pe = this;
                return i.__generator(this, function(be) {
                  return console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260), " Re-establishing connection with room id '").concat(P.roomId, "'...")), te = 0, X = 8, ge = function() {
                    return i.__awaiter(pe, void 0, void 0, function() {
                      return i.__generator(this, function(we) {
                        switch (we.label) {
                          case 0:
                            te++, we.label = 1;
                          case 1:
                            return we.trys.push([1, 3, , 4]), [4, this.consumeSeatReservation(d, E, V)];
                          case 2:
                            return we.sent(), console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(9989), " Successfully re-established connection with room '").concat(P.roomId, "'")), [3, 4];
                          case 3:
                            return we.sent(), te < X ? (console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260), " retrying... (").concat(te, " out of ").concat(X, ")")), setTimeout(ge, 2e3)) : console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(10060), " Failed to reconnect. Is your server running? Please check server logs.")), [3, 4];
                          case 4:
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  }, setTimeout(ge, 2e3), [
                    2
                    /*return*/
                  ];
                });
              });
            }, V, d), [2, new Promise(function(te, X) {
              var ge = function(pe, be) {
                return X(new n.ServerError(pe, be));
              };
              V.onError.once(ge), V.onJoin.once(function() {
                V.onError.remove(ge), te(V);
              });
            })];
          });
        });
      }, S.prototype.createMatchMakeRequest = function(d, E) {
        return i.__awaiter(this, arguments, void 0, function(O, P, $, V, W) {
          var Z;
          return $ === void 0 && ($ = {}), i.__generator(this, function(te) {
            switch (te.label) {
              case 0:
                return [4, this.http.post("matchmake/".concat(O, "/").concat(P), {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify($)
                })];
              case 1:
                if (Z = te.sent().data, Z.error)
                  throw new w(Z.error, Z.code);
                return O === "reconnect" && (Z.reconnectionToken = $.reconnectionToken), [4, this.consumeSeatReservation(Z, V, W)];
              case 2:
                return [2, te.sent()];
            }
          });
        });
      }, S.prototype.createRoom = function(d, E) {
        return new r.Room(d, E);
      }, S.prototype.buildEndpoint = function(d, E, O) {
        E === void 0 && (E = {}), O === void 0 && (O = "ws");
        var P = [];
        for (var $ in E)
          E.hasOwnProperty($) && P.push("".concat($, "=").concat(E[$]));
        O === "h3" && (O = "http");
        var V = this.settings.secure ? "".concat(O, "s://") : "".concat(O, "://");
        d.publicAddress ? V += "".concat(d.publicAddress) : V += "".concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname);
        var W = "".concat(V, "/").concat(d.processId, "/").concat(d.roomId, "?").concat(P.join("&"));
        return this.urlBuilder ? this.urlBuilder(new URL(W)) : W;
      }, S.prototype.getHttpEndpoint = function(d) {
        d === void 0 && (d = "");
        var E = d.startsWith("/") ? d : "/".concat(d), O = "".concat(this.settings.secure ? "https" : "http", "://").concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(E);
        return this.urlBuilder ? this.urlBuilder(new URL(O)) : O;
      }, S.prototype.getEndpointPort = function() {
        return this.settings.port !== 80 && this.settings.port !== 443 ? ":".concat(this.settings.port) : "";
      }, S.VERSION = "0.16.9", S;
    }()
  );
  return Tt.Client = _, Tt.MatchMakeError = w, Tt;
}
var on = {}, Zr;
function Ro() {
  if (Zr) return on;
  Zr = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  var i = (
    /** @class */
    function() {
      function n() {
      }
      return n.prototype.setState = function(r) {
      }, n.prototype.getState = function() {
        return null;
      }, n.prototype.patch = function(r) {
      }, n.prototype.teardown = function() {
      }, n.prototype.handshake = function(r) {
      }, n;
    }()
  );
  return on.NoneSerializer = i, on;
}
var Xr;
function To() {
  return Xr || (Xr = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), Es();
    var n = Ao(), r = Si(), o = Hi(), a = Wi(), c = gn(), h = Ti(), w = Ro(), A = Ai();
    A.registerSerializer("schema", h.SchemaSerializer), A.registerSerializer("none", w.NoneSerializer), i.Client = n.Client, Object.defineProperty(i, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return r.ErrorCode;
      }
    }), Object.defineProperty(i, "Protocol", {
      enumerable: !0,
      get: function() {
        return r.Protocol;
      }
    }), i.Room = o.Room, i.Auth = a.Auth, i.ServerError = c.ServerError, i.SchemaSerializer = h.SchemaSerializer, i.getStateCallbacks = h.getStateCallbacks, i.registerSerializer = A.registerSerializer;
  }(xn)), xn;
}
var Co = To();
const kt = {
  relayRoom: 0
}, Po = {
  customRelay: "relay_room"
}, Ae = {
  // Send Request
  send_to_other: 3e3,
  send_to_all: 3001,
  send_to_master: 3002,
  send_to_specific: 3003
};
var Je, Ke, Ye, ce, Ne, Ge, Dn, Ie, jt, wt;
class Mt {
  constructor(n = "", r = "", o = "", a) {
    xe(this, Ie);
    xe(this, Je);
    xe(this, Ke);
    xe(this, Ye);
    xe(this, ce);
    xe(this, Ne);
    xe(this, Ge);
    xe(this, Dn);
    _e(this, Je, n), _e(this, Ke, r), _e(this, Ye, o), _e(this, Ge, a), _e(this, Ne, Po.customRelay);
  }
  async createRoom(n = {}, r = {}, o = {}) {
    return _e(this, ce, await H(this, Je).create(H(this, Ne), {
      metadata: {
        gameId: H(this, Ke),
        version: H(this, Ye),
        type: H(this, Ne),
        roomSetting: n
      },
      roomData: r,
      playerData: o
    })), Be(this, Ie, jt).call(this), H(this, Ge).call(this, this), H(this, ce);
  }
  async createOrJoinRoom(n = {}, r = {}, o = {}) {
    return _e(this, ce, await H(this, Je).joinOrCreate(H(this, Ne), {
      metadata: {
        gameId: H(this, Ke),
        version: H(this, Ye),
        type: H(this, Ne),
        roomSetting: n
      },
      roomData: r,
      playerData: o
    })), Be(this, Ie, jt).call(this), H(this, Ge).call(this, this), H(this, ce);
  }
  async joinRandomRoom(n = {}, r = {}) {
    return _e(this, ce, await H(this, Je).join(H(this, Ne), {
      metadata: {
        gameId: H(this, Ke),
        version: H(this, Ye),
        type: H(this, Ne),
        roomSetting: n
      },
      playerData: r
    })), Be(this, Ie, jt).call(this), H(this, Ge).call(this, this), H(this, ce);
  }
  async joinRoomById(n = "", r = {}, o = {}) {
    return _e(this, ce, await H(this, Je).join(n, {
      metadata: {
        gameId: H(this, Ke),
        version: H(this, Ye),
        type: H(this, Ne),
        roomSetting: r
      },
      playerData: o
    })), Be(this, Ie, jt).call(this), H(this, Ge).call(this, this), H(this, ce);
  }
  onUpdateProperties() {
  }
  updateClientProperties(n) {
    this.onUpdateClientProperty(this);
  }
  updateRoomProperties(n) {
    this.onUpdateRoomProperty(this);
  }
  onUpdateClientProperty() {
  }
  onUpdateRoomProperty() {
  }
  onLeaveRoom() {
  }
  forceUpdateProperties() {
  }
  onForceUpdateProperties() {
  }
  onEvent(n, r, o) {
  }
  raiseEvent(n, r, o = {}) {
    let a = {
      type: n,
      data: r
    };
    o.targetClients && o.targetClients.length ? Be(this, Ie, wt).call(this, Ae.send_to_specific, a, o) : o.receivers == Ae.send_to_all ? Be(this, Ie, wt).call(this, Ae.send_to_all, a) : o.receivers == Ae.send_to_master ? Be(this, Ie, wt).call(this, Ae.send_to_master, a) : o.receivers == Ae.send_to_other ? Be(this, Ie, wt).call(this, Ae.send_to_other, a) : Be(this, Ie, wt).call(this, Ae.send_to_other, a);
  }
  get ping() {
    return H(this, ce).ping;
  }
}
Je = new WeakMap(), Ke = new WeakMap(), Ye = new WeakMap(), ce = new WeakMap(), Ne = new WeakMap(), Ge = new WeakMap(), Dn = new WeakMap(), Ie = new WeakSet(), jt = function() {
  H(this, ce).onStateChange((n) => {
    console.log("New State:", n);
  }), H(this, ce).onMessage("*", (n, r) => {
    console.log("Received message:", n, r);
  }), H(this, ce).onLeave((n) => {
    console.log("Left room with code:", n);
  });
}, wt = function(n, r, o) {
  switch (n) {
    case Ae.send_to_other:
      H(this, ce).send(n, {
        data: r
      });
      break;
    case Ae.send_to_all:
      H(this, ce).send(n, {
        data: r
      });
      break;
    case Ae.send_to_master:
      H(this, ce).send(n, {
        data: r
      });
      break;
    case Ae.send_to_specific:
      H(this, ce).send(n, {
        data: r,
        targetClients: o.targetClients
      });
      break;
  }
};
var Ze, Xe, Qe, at;
class Do {
  constructor(n, r, o) {
    xe(this, Ze);
    xe(this, Xe);
    xe(this, Qe);
    xe(this, at, {});
    _e(this, Ze, new Co.Client(n)), _e(this, Xe, r), _e(this, Qe, o);
  }
  onJoinRoom(n) {
  }
  async createRoom(n, r, o, a) {
    let c = this, h = null;
    switch (n) {
      case kt.relayRoom:
        h = new Mt(
          H(this, Ze),
          H(this, Xe),
          H(this, Qe),
          (w) => {
            c.onJoinRoom(w);
          }
        );
        break;
    }
    h == null && console.error("createRoom: Room type does not exist.");
    try {
      h = await h.createRoom(
        r,
        o,
        a
      );
    } catch (w) {
      console.error("createRoom: ", w);
    }
    return H(this, at)[h.roomId] = h, h;
  }
  async joinOrCreate(n) {
    let r = null;
    switch (n) {
      case kt.relayRoom:
        r = new Mt(
          H(this, Ze),
          H(this, Xe),
          H(this, Qe)
        );
        break;
    }
    r == null && console.error("createRoom: Room type does not exist.");
    try {
      r = await r.createRoom(option);
    } catch (o) {
      console.error("createRoom: ", o);
    }
    return H(this, at)[r.roomId] = r, r;
  }
  async joinRoom(n, r, o) {
    let a = null;
    switch (n) {
      case kt.relayRoom:
        a = new Mt(
          H(this, Ze),
          H(this, Xe),
          H(this, Qe)
        );
        break;
    }
    a == null && console.error("joinRoom: Room type does not exist.");
    try {
      a = await a.joinRoom(r, o);
    } catch (c) {
      console.error("joinRoom: ", c);
    }
    return H(this, at)[a.roomId] = a, a;
  }
  async joinLobby() {
    let n = null;
    switch (type) {
      case kt.relayRoom:
        n = new Mt(
          H(this, Ze),
          H(this, Xe),
          H(this, Qe)
        );
        break;
    }
    n == null && console.error("createRoom: Room type does not exist.");
    try {
      n = await n.createRoom(option);
    } catch (r) {
      console.error("createRoom: ", r);
    }
    return H(this, at)[n.roomId] = n, n;
  }
}
Ze = new WeakMap(), Xe = new WeakMap(), Qe = new WeakMap(), at = new WeakMap();
const Ji = {
  Client: Do,
  CustomRelayRoom: Mt,
  RoomType: kt
};
Object.freeze(Ji);
window.MultiClient = Ji;
export {
  Ji as default
};
