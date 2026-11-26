(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 55838, (e, t, r) => {
    "use strict";
    var n = e.r(71645),
        i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = n.useState,
        o = n.useEffect,
        l = n.useLayoutEffect,
        s = n.useDebugValue;

    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !i(e, r)
        } catch (e) {
            return !0
        }
    }
    var d = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            n = a({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            i = n[0].inst,
            d = n[1];
        return l(function() {
            i.value = r, i.getSnapshot = t, u(i) && d({
                inst: i
            })
        }, [e, r, t]), o(function() {
            return u(i) && d({
                inst: i
            }), e(function() {
                u(i) && d({
                    inst: i
                })
            })
        }, [e]), s(r), r
    };
    r.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d
}, 2239, (e, t, r) => {
    "use strict";
    t.exports = e.r(55838)
}, 33917, 13039, 80240, 24440, 75372, 27085, 65389, e => {
    "use strict";
    let t, r, n, i;

    function a(e) {
        return function(t) {
            let r = t ? ? this;
            if (!r) throw TypeError(`${e.kind||e.name} type guard requires an error object`);
            return !!e.kind && "object" == typeof r && null !== r && "constructor" in r && r.constructor ? .kind === e.kind || r instanceof e
        }
    }
    var o, l, s, u = class {
        static kind = "ClerkApiError";
        code;
        message;
        longMessage;
        meta;
        constructor(e) {
            const t = {
                code: e.code,
                message: e.message,
                longMessage: e.long_message,
                meta: {
                    paramName: e.meta ? .param_name,
                    sessionId: e.meta ? .session_id,
                    emailAddresses: e.meta ? .email_addresses,
                    identifiers: e.meta ? .identifiers,
                    zxcvbn: e.meta ? .zxcvbn,
                    plan: e.meta ? .plan,
                    isPlanUpgradePossible: e.meta ? .is_plan_upgrade_possible
                }
            };
            this.code = t.code, this.message = t.message, this.longMessage = t.longMessage, this.meta = t.meta
        }
    };
    let d = a(u);
    var c = class e extends Error {
            static kind = "ClerkError";
            clerkError = !0;
            code;
            longMessage;
            docsUrl;
            cause;
            get name() {
                return this.constructor.name
            }
            constructor(t) {
                super(new.target.formatMessage(new.target.kind, t.message, t.code, t.docsUrl), {
                    cause: t.cause
                }), Object.setPrototypeOf(this, e.prototype), this.code = t.code, this.docsUrl = t.docsUrl, this.longMessage = t.longMessage, this.cause = t.cause
            }
            toString() {
                return `[${this.name}]
Message:${this.message}`
            }
            static formatMessage(e, t, r, n) {
                let i = "Clerk:",
                    a = RegExp(i.replace(" ", "\\s*"), "i");
                return t = t.replace(a, ""), t = `${i} ${t.trim()}

(code="${r}")

`, n && (t += `

Docs: ${n}`), t
            }
        },
        p = class e extends c {
            static kind = "ClerkAPIResponseError";
            status;
            clerkTraceId;
            retryAfter;
            errors;
            constructor(t, r) {
                const {
                    data: n,
                    status: i,
                    clerkTraceId: a,
                    retryAfter: o
                } = r;
                super({ ...r,
                    message: t,
                    code: "api_response_error"
                }), Object.setPrototypeOf(this, e.prototype), this.status = i, this.clerkTraceId = a, this.retryAfter = o, this.errors = (n || []).map(e => new u(e))
            }
            toString() {
                let e = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map(e=>JSON.stringify(e))}`;
                return this.clerkTraceId && (e += `
Clerk Trace ID: ${this.clerkTraceId}`), e
            }
            static formatMessage(e, t, r, n) {
                return t
            }
        };
    let f = a(p);
    var m = class e extends p {
        static kind = "MissingExpiredTokenError";
        static ERROR_CODE = "missing_expired_token";
        static STATUS = 422;
        static is(t) {
            return f(t) && t.status === e.STATUS && t.errors.length > 0 && t.errors[0].code === e.ERROR_CODE
        }
    };
    let g = Object.freeze({
        InvalidProxyUrlErrorMessage: "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
        InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
        MissingPublishableKeyErrorMessage: "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
        MissingSecretKeyErrorMessage: "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
        MissingClerkProvider: "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"
    });

    function h({
        packageName: e,
        customMessages: t
    }) {
        let r = e;

        function n(e, t) {
            if (!t) return `${r}: ${e}`;
            let n = e;
            for (let r of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
                let e = (t[r[1]] || "").toString();
                n = n.replace(`{{${r[1]}}}`, e)
            }
            return `${r}: ${n}`
        }
        let i = { ...g,
            ...t
        };
        return {
            setPackageName({
                packageName: e
            }) {
                return "string" == typeof e && (r = e), this
            },
            setMessages({
                customMessages: e
            }) {
                return Object.assign(i, e || {}), this
            },
            throwInvalidPublishableKeyError(e) {
                throw Error(n(i.InvalidPublishableKeyErrorMessage, e))
            },
            throwInvalidProxyUrl(e) {
                throw Error(n(i.InvalidProxyUrlErrorMessage, e))
            },
            throwMissingPublishableKeyError() {
                throw Error(n(i.MissingPublishableKeyErrorMessage))
            },
            throwMissingSecretKeyError() {
                throw Error(n(i.MissingSecretKeyErrorMessage))
            },
            throwMissingClerkProviderError(e) {
                throw Error(n(i.MissingClerkProvider, e))
            },
            throw (e) {
                throw Error(n(e))
            }
        }
    }
    var y = class e extends Error {
            code;
            constructor(t) {
                super(t), this.code = t, this.name = "EmailLinkError", Object.setPrototypeOf(this, e.prototype)
            }
        },
        v = class e extends c {
            static kind = "ClerkRuntimeError";
            clerkRuntimeError = !0;
            constructor(t, r) {
                super({ ...r,
                    message: t
                }), Object.setPrototypeOf(this, e.prototype)
            }
        };
    let b = a(v);
    var E = class extends v {
        code;
        constructor(e, {
            code: t
        }) {
            super(e, {
                code: t
            }), this.code = t
        }
    };

    function P(e) {
        return "code" in e && [4001, 32602, 32603].includes(e.code) && "message" in e
    }
    e.s(["ClerkAPIError", 0, u, "ClerkAPIResponseError", 0, p, "ClerkError", 0, c, "ClerkRuntimeError", 0, v, "ClerkWebAuthnError", 0, E, "EmailLinkError", 0, y, "EmailLinkErrorCode", 0, {
        Expired: "expired",
        Failed: "failed",
        ClientMismatch: "client_mismatch"
    }, "EmailLinkErrorCodeStatus", 0, {
        Expired: "expired",
        Failed: "failed",
        ClientMismatch: "client_mismatch"
    }, "MissingExpiredTokenError", 0, m, "buildErrorThrower", 0, h, "createClerkGlobalHookError", 0, function(e) {
        for (let [t, r] of Object.entries({
                isClerkAPIResponseError: f,
                isClerkRuntimeError: b
            })) Object.assign(e, {
            [t]: r
        });
        return e
    }, "errorToJSON", 0, function(e) {
        return {
            code: e ? .code || "",
            message: e ? .message || "",
            long_message: e ? .longMessage,
            meta: {
                param_name: e ? .meta ? .paramName,
                session_id: e ? .meta ? .sessionId,
                email_addresses: e ? .meta ? .emailAddresses,
                identifiers: e ? .meta ? .identifiers,
                zxcvbn: e ? .meta ? .zxcvbn,
                plan: e ? .meta ? .plan,
                is_plan_upgrade_possible: e ? .meta ? .isPlanUpgradePossible
            }
        }
    }, "is4xxError", 0, function(e) {
        let t = e ? .status;
        return !!t && t >= 400 && t < 500
    }, "isCaptchaError", 0, function(e) {
        return ["captcha_invalid", "captcha_not_enabled", "captcha_missing_token"].includes(e.errors[0].code)
    }, "isClerkAPIError", 0, d, "isClerkAPIResponseError", 0, f, "isClerkError", 0, function(e) {
        return a(c)(e) || !!e && "object" == typeof e && "clerkError" in e && !0 === e.clerkError
    }, "isClerkRuntimeError", 0, b, "isEmailLinkError", 0, function(e) {
        return "EmailLinkError" === e.name
    }, "isKnownError", 0, function(e) {
        return f(e) || P(e) || b(e)
    }, "isMetamaskError", 0, P, "isNetworkError", 0, function(e) {
        return (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "").includes("networkerror")
    }, "isPasswordCompromisedError", 0, function(e) {
        return f(e) && e.errors ? .[0] ? .code === "form_password_compromised"
    }, "isPasswordPwnedError", 0, function(e) {
        return f(e) && e.errors ? .[0] ? .code === "form_password_pwned"
    }, "isReverificationCancelledError", 0, function(e) {
        return b(e) && "reverification_cancelled" === e.code
    }, "isUnauthorizedError", 0, function(e) {
        let t = e ? .status;
        return e ? .errors ? .[0] ? .code === "authentication_invalid" && 401 === t
    }, "isUserLockedError", 0, function(e) {
        return f(e) && e.errors ? .[0] ? .code === "user_locked"
    }, "parseError", 0, function(e) {
        return new u(e)
    }, "parseErrors", 0, function(e = []) {
        return e.length > 0 ? e.map(e => new u(e)) : []
    }], 13039), e.s([], 80240);
    let k = {
            strict_mfa: {
                afterMinutes: 10,
                level: "multi_factor"
            },
            strict: {
                afterMinutes: 10,
                level: "second_factor"
            },
            moderate: {
                afterMinutes: 60,
                level: "second_factor"
            },
            lax: {
                afterMinutes: 1440,
                level: "second_factor"
            }
        },
        _ = new Set(["first_factor", "second_factor", "multi_factor"]),
        S = new Set(["strict_mfa", "strict", "moderate", "lax"]),
        w = (e, t) => {
            let {
                org: r,
                user: n
            } = C(e), [i, a] = t.split(":"), o = a || i;
            return "org" === i ? r.includes(o) : "user" === i ? n.includes(o) : [...r, ...n].includes(o)
        },
        C = e => {
            let t = e ? e.split(",").map(e => e.trim()) : [];
            return {
                org: t.filter(e => e.split(":")[0].includes("o")).map(e => e.split(":")[1]),
                user: t.filter(e => e.split(":")[0].includes("u")).map(e => e.split(":")[1])
            }
        },
        O = e => {
            let t, r;
            if (!e) return !1;
            let n = "string" == typeof e && S.has(e),
                i = "object" == typeof e && (t = e.level, _.has(t)) && "number" == typeof(r = e.afterMinutes) && r > 0;
            return (!!n || !!i) && (e => "string" == typeof e ? k[e] : e).bind(null, e)
        };
    var I = e.i(15331),
        M = e.i(47167),
        R = e.i(28069),
        z = class {#
            e;#
            t = 864e5;
            constructor(e) {
                this.#e = e
            }
            isEventThrottled(e) {
                let t = Date.now(),
                    r = this.#r(e),
                    n = this.#e.getItem(r);
                return !!n && !(t - n > this.#t) || (this.#e.setItem(r, t), !1)
            }#
            r(e) {
                let {
                    sk: t,
                    pk: r,
                    payload: n,
                    ...i
                } = e, a = { ...n,
                    ...i
                };
                return JSON.stringify(Object.keys({ ...n,
                    ...i
                }).sort().map(e => a[e]))
            }
        },
        x = class {#
            n = "clerk_telemetry_throttler";
            getItem(e) {
                return this.#i()[e]
            }
            setItem(e, t) {
                try {
                    let r = this.#i();
                    r[e] = t, localStorage.setItem(this.#n, JSON.stringify(r))
                } catch (e) {
                    e instanceof DOMException && ("QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && localStorage.length > 0 && localStorage.removeItem(this.#n)
                }
            }
            removeItem(e) {
                try {
                    let t = this.#i();
                    delete t[e], localStorage.setItem(this.#n, JSON.stringify(t))
                } catch {}
            }#
            i() {
                try {
                    let e = localStorage.getItem(this.#n);
                    if (!e) return {};
                    return JSON.parse(e)
                } catch {
                    return {}
                }
            }
            static isSupported() {
                return "u" > typeof window && !!window.localStorage
            }
        },
        T = class {#
            e = new Map;#
            a = 1e4;
            getItem(e) {
                return this.#e.size > this.#a ? void this.#e.clear() : this.#e.get(e)
            }
            setItem(e, t) {
                this.#e.set(e, t)
            }
            removeItem(e) {
                this.#e.delete(e)
            }
        };
    let L = new Set(["error", "warn", "info", "debug", "trace"]);
    var A = class {#
        o;#
        l;#
        s = {};#
        u = [];#
        d = null;
        constructor(e) {
            this.#o = {
                maxBufferSize: e.maxBufferSize ? ? 5,
                samplingRate: e.samplingRate ? ? 1,
                perEventSampling: e.perEventSampling ? ? !0,
                disabled: e.disabled ? ? !1,
                debug: e.debug ? ? !1,
                endpoint: "https://clerk-telemetry.com"
            }, !e.clerkVersion && "u" < typeof window ? this.#s.clerkVersion = "" : this.#s.clerkVersion = e.clerkVersion ? ? "", this.#s.sdk = e.sdk, this.#s.sdkVersion = e.sdkVersion, this.#s.publishableKey = e.publishableKey ? ? "";
            const t = (0, R.parsePublishableKey)(e.publishableKey);
            t && (this.#s.instanceType = t.instanceType), e.secretKey && (this.#s.secretKey = e.secretKey.substring(0, 16)), this.#l = new z(x.isSupported() ? new x : new T)
        }
        get isEnabled() {
            return !("development" !== this.#s.instanceType || this.#o.disabled || void 0 !== M.default && M.default.env && (0, I.isTruthy)(M.default.env.CLERK_TELEMETRY_DISABLED) || "u" > typeof window && window ? .navigator ? .webdriver)
        }
        get isDebug() {
            return this.#o.debug || void 0 !== M.default && M.default.env && (0, I.isTruthy)(M.default.env.CLERK_TELEMETRY_DEBUG)
        }
        record(e) {
            try {
                let t = this.#c(e.event, e.payload);
                if (this.#p(t.event, t), !this.#f(t, e.eventSamplingRate)) return;
                this.#u.push({
                    kind: "event",
                    value: t
                }), this.#m()
            } catch (e) {
                console.error("[clerk/telemetry] Error recording telemetry event", e)
            }
        }
        recordLog(e) {
            try {
                if (!this.#g(e)) return;
                let t = "string" == typeof e ? .level && L.has(e.level),
                    r = "string" == typeof e ? .message && e.message.trim().length > 0,
                    n = null,
                    i = e ? .timestamp;
                if ("number" == typeof i || "string" == typeof i) {
                    let e = new Date(i);
                    Number.isNaN(e.getTime()) || (n = e)
                }
                if (!t || !r || null === n) {
                    this.isDebug && "u" > typeof console && console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
                        levelIsValid: t,
                        messageIsValid: r,
                        timestampIsValid: null !== n
                    });
                    return
                }
                let a = this.#h(),
                    o = {
                        sdk: a.name,
                        sdkv: a.version,
                        cv: this.#s.clerkVersion ? ? "",
                        lvl: e.level,
                        msg: e.message,
                        ts: n.toISOString(),
                        pk: this.#s.publishableKey || null,
                        payload: this.#y(e.context)
                    };
                this.#u.push({
                    kind: "log",
                    value: o
                }), this.#m()
            } catch (e) {
                console.error("[clerk/telemetry] Error recording telemetry log entry", e)
            }
        }#
        f(e, t) {
            return this.isEnabled && !this.isDebug && this.#v(e, t)
        }#
        g(e) {
            return !0
        }#
        v(e, t) {
            let r = Math.random();
            return !!(r <= this.#o.samplingRate && (!1 === this.#o.perEventSampling || void 0 === t || r <= t)) && !this.#l.isEventThrottled(e)
        }#
        m() {
            if ("u" < typeof window) return void this.#b();
            if (this.#u.length >= this.#o.maxBufferSize) {
                this.#d && ("u" > typeof cancelIdleCallback ? cancelIdleCallback(Number(this.#d)) : clearTimeout(Number(this.#d))), this.#b();
                return
            }
            this.#d || ("requestIdleCallback" in window ? this.#d = requestIdleCallback(() => {
                this.#b(), this.#d = null
            }) : this.#d = setTimeout(() => {
                this.#b(), this.#d = null
            }, 0))
        }#
        b() {
            let e = [...this.#u];
            if (this.#u = [], this.#d = null, 0 === e.length) return;
            let t = e.filter(e => "event" === e.kind).map(e => e.value),
                r = e.filter(e => "log" === e.kind).map(e => e.value);
            t.length > 0 && fetch(new URL("/v1/event", this.#o.endpoint), {
                headers: {
                    "Content-Type": "application/json"
                },
                keepalive: !0,
                method: "POST",
                body: JSON.stringify({
                    events: t
                })
            }).catch(() => void 0), r.length > 0 && fetch(new URL("/v1/logs", this.#o.endpoint), {
                headers: {
                    "Content-Type": "application/json"
                },
                keepalive: !0,
                method: "POST",
                body: JSON.stringify({
                    logs: r
                })
            }).catch(() => void 0)
        }#
        p(e, t) {
            this.isDebug && (void 0 !== console.groupCollapsed ? (console.groupCollapsed("[clerk/telemetry]", e), console.log(t), console.groupEnd()) : console.log("[clerk/telemetry]", e, t))
        }#
        h() {
            let e = {
                name: this.#s.sdk,
                version: this.#s.sdkVersion
            };
            if ("u" > typeof window) {
                let t = window;
                if (t.Clerk) {
                    let r = t.Clerk;
                    if ("object" == typeof r && null !== r && "constructor" in r && "function" == typeof r.constructor && r.constructor.sdkMetadata) {
                        let {
                            name: t,
                            version: n
                        } = r.constructor.sdkMetadata;
                        void 0 !== t && (e.name = t), void 0 !== n && (e.version = n)
                    }
                }
            }
            return e
        }#
        c(e, t) {
            let r = this.#h();
            return {
                event: e,
                cv: this.#s.clerkVersion ? ? "",
                it: this.#s.instanceType ? ? "",
                sdk: r.name,
                sdkv: r.version,
                ...this.#s.publishableKey ? {
                    pk: this.#s.publishableKey
                } : {},
                ...this.#s.secretKey ? {
                    sk: this.#s.secretKey
                } : {},
                payload: t
            }
        }#
        y(e) {
            if (null == e || "object" != typeof e) return null;
            try {
                let t = JSON.parse(JSON.stringify(e));
                if (t && "object" == typeof t && !Array.isArray(t)) return t;
                return null
            } catch {
                return null
            }
        }
    };
    let U = "COMPONENT_MOUNTED",
        D = new Set(["SignIn", "SignUp"]);

    function F(e) {
        return D.has(e) ? 1 : .1
    }

    function N(e) {
        return function(t, r, n) {
            return {
                event: e,
                eventSamplingRate: e === U ? F(t) : .1,
                payload: {
                    component: t,
                    appearanceProp: !!r ? .appearance,
                    baseTheme: !!r ? .appearance ? .baseTheme,
                    elements: !!r ? .appearance ? .elements,
                    variables: !!r ? .appearance ? .variables,
                    ...n
                }
            }
        }
    }

    function j(e, t) {
        return {
            event: "METHOD_CALLED",
            eventSamplingRate: .1,
            payload: {
                method: e,
                ...t
            }
        }
    }
    let K = "THEME_USAGE";

    function V(e) {
        return "string" == typeof e ? e : "object" == typeof e && null !== e && "name" in e && "string" == typeof e.name ? e.name : void 0
    }
    e.s(["EVENT_SAMPLING_RATE", 0, 1, "EVENT_THEME_USAGE", 0, K, "TelemetryCollector", 0, A, "eventComponentMounted", 0, function(e, t = {}) {
        return {
            event: U,
            eventSamplingRate: F(e),
            payload: {
                component: e,
                ...t
            }
        }
    }, "eventFrameworkMetadata", 0, function(e) {
        return {
            event: "FRAMEWORK_METADATA",
            eventSamplingRate: .1,
            payload: e
        }
    }, "eventMethodCalled", 0, j, "eventPrebuiltComponentMounted", 0, function(e, t, r) {
        return N(U)(e, t, r)
    }, "eventPrebuiltComponentOpened", 0, function(e, t, r) {
        return N("COMPONENT_OPENED")(e, t, r)
    }, "eventThemeUsage", 0, function(e) {
        return {
            event: K,
            eventSamplingRate: 1,
            payload: function(e) {
                let t;
                if (!e || "object" != typeof e) return {};
                let r = e.theme || e.baseTheme;
                if (!r) return {};
                if (Array.isArray(r))
                    for (let e of r) {
                        let r = V(e);
                        if (r) {
                            t = r;
                            break
                        }
                    } else t = V(r);
                return {
                    themeName: t
                }
            }(e)
        }
    }], 24440), e.s([], 75372);
    var $ = e.i(71645);
    let B = "reverification-error",
        W = (...e) => {};
    var q = e.i(2239);
    e.s(["ERROR_REVALIDATE_EVENT", 0, 3, "FOCUS_EVENT", 0, 0, "MUTATE_EVENT", 0, 2, "RECONNECT_EVENT", 0, 1], 11671);
    var G = Object.prototype.hasOwnProperty;
    let J = new WeakMap,
        Y = () => {},
        H = Y(),
        Q = Object,
        Z = e => e === H,
        X = (e, t) => ({ ...e,
            ...t
        }),
        ee = {},
        et = {},
        er = "undefined",
        en = typeof window != er,
        ei = typeof document != er,
        ea = en && "Deno" in window,
        eo = (e, t) => {
            let r = J.get(e);
            return [() => !Z(t) && e.get(t) || ee, n => {
                if (!Z(t)) {
                    let i = e.get(t);
                    t in et || (et[t] = i), r[5](t, X(i, n), i || ee)
                }
            }, r[6], () => !Z(t) && t in et ? et[t] : !Z(t) && e.get(t) || ee]
        },
        el = !0,
        [es, eu] = en && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Y, Y],
        ed = {
            initFocus: e => (ei && document.addEventListener("visibilitychange", e), es("focus", e), () => {
                ei && document.removeEventListener("visibilitychange", e), eu("focus", e)
            }),
            initReconnect: e => {
                let t = () => {
                        el = !0, e()
                    },
                    r = () => {
                        el = !1
                    };
                return es("online", t), es("offline", r), () => {
                    eu("online", t), eu("offline", r)
                }
            }
        },
        ec = !$.default.useId,
        ep = !en || ea,
        ef = ep ? $.useEffect : $.useLayoutEffect,
        em = "u" > typeof navigator && navigator.connection,
        eg = !ep && em && (["slow-2g", "2g"].includes(em.effectiveType) || em.saveData),
        eh = new WeakMap,
        ey = (e, t) => e === `[object ${t}]`,
        ev = 0,
        eb = e => {
            let t, r, n = typeof e,
                i = Q.prototype.toString.call(e),
                a = ey(i, "Date"),
                o = ey(i, "RegExp"),
                l = ey(i, "Object");
            if (Q(e) !== e || a || o) t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
            else {
                if (t = eh.get(e)) return t;
                if (t = ++ev + "~", eh.set(e, t), Array.isArray(e)) {
                    for (r = 0, t = "@"; r < e.length; r++) t += eb(e[r]) + ",";
                    eh.set(e, t)
                }
                if (l) {
                    t = "#";
                    let n = Q.keys(e).sort();
                    for (; !Z(r = n.pop());) Z(e[r]) || (t += r + ":" + eb(e[r]) + ",");
                    eh.set(e, t)
                }
            }
            return t
        },
        eE = e => {
            if ("function" == typeof e) try {
                e = e()
            } catch (t) {
                e = ""
            }
            let t = e;
            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? eb(e) : "", t]
        },
        eP = 0,
        ek = () => ++eP;
    async function e_(...e) {
        let [t, r, n, i] = e, a = X({
            populateCache: !0,
            throwOnError: !0
        }, "boolean" == typeof i ? {
            revalidate: i
        } : i || {}), o = a.populateCache, l = a.rollbackOnError, s = a.optimisticData, u = a.throwOnError;
        if ("function" == typeof r) {
            let e = [];
            for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
            return Promise.all(e.map(d))
        }
        return d(r);
        async function d(r) {
            let i, [d] = eE(r);
            if (!d) return;
            let [c, p] = eo(t, d), [f, m, g, h] = J.get(t), y = () => {
                let e = f[d];
                return ("function" == typeof a.revalidate ? a.revalidate(c().data, r) : !1 !== a.revalidate) && (delete g[d], delete h[d], e && e[0]) ? e[0](2).then(() => c().data) : c().data
            };
            if (e.length < 3) return y();
            let v = n,
                b = !1,
                E = ek();
            m[d] = [E, 0];
            let P = !Z(s),
                k = c(),
                _ = k.data,
                S = k._c,
                w = Z(S) ? _ : S;
            if (P && p({
                    data: s = "function" == typeof s ? s(w, _) : s,
                    _c: w
                }), "function" == typeof v) try {
                v = v(w)
            } catch (e) {
                i = e, b = !0
            }
            if (v && "function" == typeof v.then) {
                let e;
                if (v = await v.catch(e => {
                        i = e, b = !0
                    }), E !== m[d][0]) {
                    if (b) throw i;
                    return v
                }
                b && P && (e = i, "function" == typeof l ? l(e) : !1 !== l) && (o = !0, p({
                    data: w,
                    _c: H
                }))
            }
            if (o && !b && ("function" == typeof o ? p({
                    data: o(v, w),
                    error: H,
                    _c: H
                }) : p({
                    data: v,
                    error: H,
                    _c: H
                })), m[d][1] = ek(), Promise.resolve(y()).then(() => {
                    p({
                        _c: H
                    })
                }), b) {
                if (u) throw i;
                return
            }
            return v
        }
    }
    let eS = (e, t) => {
            for (let r in e) e[r][0] && e[r][0](t)
        },
        ew = (e, t) => {
            if (!J.has(e)) {
                let r = X(ed, t),
                    n = Object.create(null),
                    i = e_.bind(H, e),
                    a = Y,
                    o = Object.create(null),
                    l = (e, t) => {
                        let r = o[e] || [];
                        return o[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                    },
                    s = (t, r, n) => {
                        e.set(t, r);
                        let i = o[t];
                        if (i)
                            for (let e of i) e(r, n)
                    },
                    u = () => {
                        if (!J.has(e) && (J.set(e, [n, Object.create(null), Object.create(null), Object.create(null), i, s, l]), !ep)) {
                            let t = r.initFocus(setTimeout.bind(H, eS.bind(H, n, 0))),
                                i = r.initReconnect(setTimeout.bind(H, eS.bind(H, n, 1)));
                            a = () => {
                                t && t(), i && i(), J.delete(e)
                            }
                        }
                    };
                return u(), [e, i, u, a]
            }
            return [e, J.get(e)[4]]
        },
        [eC, eO] = ew(new Map),
        eI = X({
            onLoadingSlow: Y,
            onSuccess: Y,
            onError: Y,
            onErrorRetry: (e, t, r, n, i) => {
                let a = r.errorRetryCount,
                    o = i.retryCount,
                    l = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
                (Z(a) || !(o > a)) && setTimeout(n, l, i)
            },
            onDiscarded: Y,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: eg ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: eg ? 5e3 : 3e3,
            compare: function e(t, r) {
                var n, i;
                if (t === r) return !0;
                if (t && r && (n = t.constructor) === r.constructor) {
                    if (n === Date) return t.getTime() === r.getTime();
                    if (n === RegExp) return t.toString() === r.toString();
                    if (n === Array) {
                        if ((i = t.length) === r.length)
                            for (; i-- && e(t[i], r[i]););
                        return -1 === i
                    }
                    if (!n || "object" == typeof t) {
                        for (n in i = 0, t)
                            if (G.call(t, n) && ++i && !G.call(r, n) || !(n in r) || !e(t[n], r[n])) return !1;
                        return Object.keys(r).length === i
                    }
                }
                return t != t && r != r
            },
            isPaused: () => !1,
            cache: eC,
            mutate: eO,
            fallback: {}
        }, {
            isOnline: () => el,
            isVisible: () => {
                let e = ei && document.visibilityState;
                return Z(e) || "hidden" !== e
            }
        }),
        eM = (e, t) => {
            let r = X(e, t);
            if (t) {
                let {
                    use: n,
                    fallback: i
                } = e, {
                    use: a,
                    fallback: o
                } = t;
                n && a && (r.use = n.concat(a)), i && o && (r.fallback = X(i, o))
            }
            return r
        },
        eR = (0, $.createContext)({});
    var ez = e.i(11671);
    let ex = "$inf$",
        eT = en && window.__SWR_DEVTOOLS_USE__,
        eL = eT ? window.__SWR_DEVTOOLS_USE__ : [],
        eA = e => "function" == typeof e[1] ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        eU = () => X(eI, (0, $.useContext)(eR)),
        eD = eL.concat(e => (t, r, n) => {
            let i = r && ((...e) => {
                let [n] = eE(t), [, , , i] = J.get(eC);
                if (n.startsWith(ex)) return r(...e);
                let a = i[n];
                return Z(a) ? r(...e) : (delete i[n], a)
            });
            return e(t, i, n)
        }),
        eF = (e, t) => (...r) => {
            let [n, i, a] = eA(r), o = (a.use || []).concat(t);
            return e(n, i, { ...a,
                use: o
            })
        };
    eT && (window.__SWR_DEVTOOLS_REACT__ = $.default);
    let eN = () => {},
        ej = eN(),
        eK = (new WeakMap, $.default.use || (e => {
            switch (e.status) {
                case "pending":
                    throw e;
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
            }
        })),
        eV = {
            dedupe: !0
        },
        e$ = Q.defineProperty(e => {
            let {
                value: t
            } = e, r = (0, $.useContext)(eR), n = "function" == typeof t, i = (0, $.useMemo)(() => n ? t(r) : t, [n, r, t]), a = (0, $.useMemo)(() => n ? i : eM(r, i), [n, r, i]), o = i && i.provider, l = (0, $.useRef)(H);
            o && !l.current && (l.current = ew(o(a.cache || eC), i));
            let s = l.current;
            return s && (a.cache = s[0], a.mutate = s[1]), ef(() => {
                if (s) return s[2] && s[2](), s[3]
            }, []), (0, $.createElement)(eR.Provider, X(e, {
                value: a
            }))
        }, "defaultValue", {
            value: eI
        }),
        eB = (t = (e, t, r) => {
            let {
                cache: n,
                compare: i,
                suspense: a,
                fallbackData: o,
                revalidateOnMount: l,
                revalidateIfStale: s,
                refreshInterval: u,
                refreshWhenHidden: d,
                refreshWhenOffline: c,
                keepPreviousData: p
            } = r, [f, m, g, h] = J.get(n), [y, v] = eE(e), b = (0, $.useRef)(!1), E = (0, $.useRef)(!1), P = (0, $.useRef)(y), k = (0, $.useRef)(t), _ = (0, $.useRef)(r), S = () => _.current.isVisible() && _.current.isOnline(), [w, C, O, I] = eo(n, y), M = (0, $.useRef)({}).current, R = Z(o) ? Z(r.fallback) ? H : r.fallback[y] : o, z = (e, t) => {
                for (let r in M)
                    if ("data" === r) {
                        if (!i(e[r], t[r]) && (!Z(e[r]) || !i(j, t[r]))) return !1
                    } else if (t[r] !== e[r]) return !1;
                return !0
            }, x = (0, $.useMemo)(() => {
                let e = !!y && !!t && (Z(l) ? !_.current.isPaused() && !a && !1 !== s : l),
                    r = t => {
                        let r = X(t);
                        return (delete r._k, e) ? {
                            isValidating: !0,
                            isLoading: !0,
                            ...r
                        } : r
                    },
                    n = w(),
                    i = I(),
                    o = r(n),
                    u = n === i ? o : r(i),
                    d = o;
                return [() => {
                    let e = r(w());
                    return z(e, d) ? (d.data = e.data, d.isLoading = e.isLoading, d.isValidating = e.isValidating, d.error = e.error, d) : (d = e, e)
                }, () => u]
            }, [n, y]), T = (0, q.useSyncExternalStore)((0, $.useCallback)(e => O(y, (t, r) => {
                z(r, t) || e()
            }), [n, y]), x[0], x[1]), L = !b.current, A = f[y] && f[y].length > 0, U = T.data, D = Z(U) ? R && "function" == typeof R.then ? eK(R) : R : U, F = T.error, N = (0, $.useRef)(D), j = p ? Z(U) ? Z(N.current) ? D : N.current : U : D, K = (!A || !!Z(F)) && (L && !Z(l) ? l : !_.current.isPaused() && (a ? !Z(D) && s : Z(D) || s)), V = !!(y && t && L && K), B = Z(T.isValidating) ? V : T.isValidating, W = Z(T.isLoading) ? V : T.isLoading, G = (0, $.useCallback)(async e => {
                let t, n, a = k.current;
                if (!y || !a || E.current || _.current.isPaused()) return !1;
                let o = !0,
                    l = e || {},
                    s = !g[y] || !l.dedupe,
                    u = () => ec ? !E.current && y === P.current && b.current : y === P.current,
                    d = {
                        isValidating: !1,
                        isLoading: !1
                    },
                    c = () => {
                        C(d)
                    },
                    p = () => {
                        let e = g[y];
                        e && e[1] === n && delete g[y]
                    },
                    h = {
                        isValidating: !0
                    };
                Z(w().data) && (h.isLoading = !0);
                try {
                    if (s && (C(h), r.loadingTimeout && Z(w().data) && setTimeout(() => {
                            o && u() && _.current.onLoadingSlow(y, r)
                        }, r.loadingTimeout), g[y] = [a(v), ek()]), [t, n] = g[y], t = await t, s && setTimeout(p, r.dedupingInterval), !g[y] || g[y][1] !== n) return s && u() && _.current.onDiscarded(y), !1;
                    d.error = H;
                    let e = m[y];
                    if (!Z(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return c(), s && u() && _.current.onDiscarded(y), !1;
                    let l = w().data;
                    d.data = i(l, t) ? l : t, s && u() && _.current.onSuccess(t, y, r)
                } catch (r) {
                    p();
                    let e = _.current,
                        {
                            shouldRetryOnError: t
                        } = e;
                    !e.isPaused() && (d.error = r, s && u()) && (e.onError(r, y, e), (!0 === t || "function" == typeof t && t(r)) && (!_.current.revalidateOnFocus || !_.current.revalidateOnReconnect || S()) && e.onErrorRetry(r, y, e, e => {
                        let t = f[y];
                        t && t[0] && t[0](ez.ERROR_REVALIDATE_EVENT, e)
                    }, {
                        retryCount: (l.retryCount || 0) + 1,
                        dedupe: !0
                    }))
                }
                return o = !1, c(), !0
            }, [y, n]), Y = (0, $.useCallback)((...e) => e_(n, P.current, ...e), []);
            if (ef(() => {
                    k.current = t, _.current = r, Z(U) || (N.current = U)
                }), ef(() => {
                    var e;
                    let t;
                    if (!y) return;
                    let r = G.bind(H, eV),
                        n = 0;
                    _.current.revalidateOnFocus && (n = Date.now() + _.current.focusThrottleInterval);
                    let i = (e = (e, t = {}) => {
                        if (e == ez.FOCUS_EVENT) {
                            let e = Date.now();
                            _.current.revalidateOnFocus && e > n && S() && (n = e + _.current.focusThrottleInterval, r())
                        } else if (e == ez.RECONNECT_EVENT) _.current.revalidateOnReconnect && S() && r();
                        else if (e == ez.MUTATE_EVENT) return G();
                        else if (e == ez.ERROR_REVALIDATE_EVENT) return G(t)
                    }, (t = f[y] || (f[y] = [])).push(e), () => {
                        let r = t.indexOf(e);
                        r >= 0 && (t[r] = t[t.length - 1], t.pop())
                    });
                    if (E.current = !1, P.current = y, b.current = !0, C({
                            _k: v
                        }), K && !g[y])
                        if (Z(D) || ep) r();
                        else en && typeof window.requestAnimationFrame != er ? window.requestAnimationFrame(r) : setTimeout(r, 1);
                    return () => {
                        E.current = !0, i()
                    }
                }, [y]), ef(() => {
                    let e;

                    function t() {
                        let t = "function" == typeof u ? u(w().data) : u;
                        t && -1 !== e && (e = setTimeout(r, t))
                    }

                    function r() {
                        !w().error && (d || _.current.isVisible()) && (c || _.current.isOnline()) ? G(eV).then(t) : t()
                    }
                    return t(), () => {
                        e && (clearTimeout(e), e = -1)
                    }
                }, [u, d, c, y]), (0, $.useDebugValue)(j), a && Z(D) && y) {
                if (!ec && ep) throw Error("Fallback data is required when using Suspense in SSR.");
                k.current = t, _.current = r, E.current = !1;
                let e = h[y];
                if (Z(e) || eK(Y(e)), Z(F)) {
                    let e = G(eV);
                    Z(j) || (e.status = "fulfilled", e.value = !0), eK(e)
                } else throw F
            }
            return {
                mutate: Y,
                get data() {
                    return M.data = !0, j
                },
                get error() {
                    return M.error = !0, F
                },
                get isValidating() {
                    return M.isValidating = !0, B
                },
                get isLoading() {
                    return M.isLoading = !0, W
                }
            }
        }, function(...e) {
            let r = eU(),
                [n, i, a] = eA(e),
                o = eM(r, a),
                l = t,
                {
                    use: s
                } = o,
                u = (s || []).concat(eD);
            for (let e = u.length; e--;) l = u[e](l);
            return l(n, i || o.fetcher || null, o)
        }),
        eW = () => {},
        eq = eW(),
        eG = Object,
        eJ = e => e === eq,
        eY = new WeakMap,
        eH = (e, t) => e === `[object ${t}]`,
        eQ = 0,
        eZ = e => {
            let t, r, n = typeof e,
                i = eG.prototype.toString.call(e),
                a = eH(i, "Date"),
                o = eH(i, "RegExp"),
                l = eH(i, "Object");
            if (eG(e) !== e || a || o) t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
            else {
                if (t = eY.get(e)) return t;
                if (t = ++eQ + "~", eY.set(e, t), Array.isArray(e)) {
                    for (r = 0, t = "@"; r < e.length; r++) t += eZ(e[r]) + ",";
                    eY.set(e, t)
                }
                if (l) {
                    t = "#";
                    let n = eG.keys(e).sort();
                    for (; !eJ(r = n.pop());) eJ(e[r]) || (t += r + ":" + eZ(e[r]) + ",");
                    eY.set(e, t)
                }
            }
            return t
        },
        eX = Promise.resolve(),
        e0 = eF(eB, e => (t, r, n) => {
            let i, a = (0, $.useRef)(!1),
                {
                    cache: o,
                    initialSize: l = 1,
                    revalidateAll: s = !1,
                    persistSize: u = !1,
                    revalidateFirstPage: d = !0,
                    revalidateOnMount: c = !1,
                    parallel: p = !1
                } = n,
                [, , , f] = J.get(eC);
            try {
                (i = (e => {
                    if ("function" == typeof e) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? eZ(e) : "", t]
                })(t ? t(0, null) : null)[0]) && (i = ex + i)
            } catch (e) {}
            let [m, g, h] = eo(o, i), y = (0, $.useCallback)(() => Z(m()._l) ? l : m()._l, [o, i, l]);
            (0, q.useSyncExternalStore)((0, $.useCallback)(e => i ? h(i, () => {
                e()
            }) : () => {}, [o, i]), y, y);
            let v = (0, $.useCallback)(() => {
                    let e = m()._l;
                    return Z(e) ? l : e
                }, [i, l]),
                b = (0, $.useRef)(v());
            ef(() => {
                if (!a.current) {
                    a.current = !0;
                    return
                }
                i && g({
                    _l: u ? b.current : v()
                })
            }, [i, o]);
            let E = c && !a.current,
                P = e(i, async e => {
                    let i = m()._i,
                        a = m()._r;
                    g({
                        _r: H
                    });
                    let l = [],
                        u = v(),
                        [c] = eo(o, e),
                        h = c().data,
                        y = [],
                        b = null;
                    for (let e = 0; e < u; ++e) {
                        let [u, c] = eE(t(e, p ? null : b));
                        if (!u) break;
                        let [m, g] = eo(o, u), v = m().data, P = s || i || Z(v) || d && !e && !Z(h) || E || h && !Z(h[e]) && !n.compare(h[e], v);
                        if (r && ("function" == typeof a ? a(v, c) : P)) {
                            let t = async () => {
                                if (u in f) {
                                    let e = f[u];
                                    delete f[u], v = await e
                                } else v = await r(c);
                                g({
                                    data: v,
                                    _k: c
                                }), l[e] = v
                            };
                            p ? y.push(t) : await t()
                        } else l[e] = v;
                        p || (b = v)
                    }
                    return p && await Promise.all(y.map(e => e())), g({
                        _i: H
                    }), l
                }, n),
                k = (0, $.useCallback)(function(e, t) {
                    let r = "boolean" == typeof t ? {
                            revalidate: t
                        } : t || {},
                        n = !1 !== r.revalidate;
                    return i ? (n && (Z(e) ? g({
                        _i: !0,
                        _r: r.revalidate
                    }) : g({
                        _i: !1,
                        _r: r.revalidate
                    })), arguments.length ? P.mutate(e, { ...r,
                        revalidate: n
                    }) : P.mutate()) : eX
                }, [i, o]),
                _ = (0, $.useCallback)(e => {
                    let r;
                    if (!i) return eX;
                    let [, n] = eo(o, i);
                    if ("function" == typeof e ? r = e(v()) : "number" == typeof e && (r = e), "number" != typeof r) return eX;
                    n({
                        _l: r
                    }), b.current = r;
                    let a = [],
                        [l] = eo(o, i),
                        s = null;
                    for (let e = 0; e < r; ++e) {
                        let [r] = eE(t(e, s)), [n] = eo(o, r), i = r ? n().data : H;
                        if (Z(i)) return k(l().data);
                        a.push(i), s = i
                    }
                    return k(a)
                }, [i, o, k, v]);
            return {
                size: v(),
                setSize: _,
                mutate: k,
                get data() {
                    return P.data
                },
                get error() {
                    return P.error
                },
                get isValidating() {
                    return P.isValidating
                },
                get isLoading() {
                    return P.isLoading
                }
            }
        });
    var e1 = Object.prototype.hasOwnProperty;

    function e3(e, t, r) {
        for (r of e.keys())
            if (e2(r, t)) return r
    }

    function e2(e, t) {
        var r, n, i;
        if (e === t) return !0;
        if (e && t && (r = e.constructor) === t.constructor) {
            if (r === Date) return e.getTime() === t.getTime();
            if (r === RegExp) return e.toString() === t.toString();
            if (r === Array) {
                if ((n = e.length) === t.length)
                    for (; n-- && e2(e[n], t[n]););
                return -1 === n
            }
            if (r === Set) {
                if (e.size !== t.size) return !1;
                for (n of e)
                    if ((i = n) && "object" == typeof i && !(i = e3(t, i)) || !t.has(i)) return !1;
                return !0
            }
            if (r === Map) {
                if (e.size !== t.size) return !1;
                for (n of e)
                    if ((i = n[0]) && "object" == typeof i && !(i = e3(t, i)) || !e2(n[1], t.get(i))) return !1;
                return !0
            }
            if (r === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
            else if (r === DataView) {
                if ((n = e.byteLength) === t.byteLength)
                    for (; n-- && e.getInt8(n) === t.getInt8(n););
                return -1 === n
            }
            if (ArrayBuffer.isView(e)) {
                if ((n = e.byteLength) === t.byteLength)
                    for (; n-- && e[n] === t[n];);
                return -1 === n
            }
            if (!r || "object" == typeof e) {
                for (r in n = 0, e)
                    if (e1.call(e, r) && ++n && !e1.call(t, r) || !(r in t) || !e2(e[r], t[r])) return !1;
                return Object.keys(t).length === n
            }
        }
        return e != e && t != t
    }
    let e4 = ec ? e => {
            e()
        } : $.default.startTransition,
        e5 = eF(eB, () => (e, t, r = {}) => {
            let {
                mutate: n
            } = eU(), i = (0, $.useRef)(e), a = (0, $.useRef)(t), o = (0, $.useRef)(r), l = (0, $.useRef)(0), [s, u, d] = (e => {
                let [, t] = (0, $.useState)({}), r = (0, $.useRef)(!1), n = (0, $.useRef)(e), i = (0, $.useRef)({
                    data: !1,
                    error: !1,
                    isValidating: !1
                }), a = (0, $.useCallback)(e => {
                    let a = !1,
                        o = n.current;
                    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && o[t] !== e[t] && (o[t] = e[t], i.current[t] && (a = !0));
                    a && !r.current && t({})
                }, []);
                return ef(() => (r.current = !1, () => {
                    r.current = !0
                })), [n, i.current, a]
            })({
                data: H,
                error: H,
                isMutating: !1
            }), c = s.current, p = (0, $.useCallback)(async (e, t) => {
                let [r, s] = eE(i.current);
                if (!a.current) throw Error("Can’t trigger the mutation: missing fetcher.");
                if (!r) throw Error("Can’t trigger the mutation: missing key.");
                let u = X(X({
                        populateCache: !1,
                        throwOnError: !0
                    }, o.current), t),
                    c = ek();
                l.current = c, d({
                    isMutating: !0
                });
                try {
                    let t = await n(r, a.current(s, {
                        arg: e
                    }), X(u, {
                        throwOnError: !0
                    }));
                    return l.current <= c && (e4(() => d({
                        data: t,
                        isMutating: !1,
                        error: void 0
                    })), null == u.onSuccess || u.onSuccess.call(u, t, r, u)), t
                } catch (e) {
                    if (l.current <= c && (e4(() => d({
                            error: e,
                            isMutating: !1
                        })), null == u.onError || u.onError.call(u, e, r, u), u.throwOnError)) throw e
                }
            }, []), f = (0, $.useCallback)(() => {
                l.current = ek(), d({
                    data: H,
                    error: H,
                    isMutating: !1
                })
            }, []);
            return ef(() => {
                i.current = e, a.current = t, o.current = r
            }), {
                trigger: p,
                reset: f,
                get data() {
                    return u.data = !0, c.data
                },
                get error() {
                    return u.error = !0, c.error
                },
                get isMutating() {
                    return u.isMutating = !0, c.isMutating
                }
            }
        });

    function e8(e, t) {
        if (!e) throw "string" == typeof t ? Error(t) : Error(`${t.displayName} not found`)
    }
    let e6 = (e, t) => {
        let {
            assertCtxFn: r = e8
        } = t || {}, n = $.default.createContext(void 0);
        return n.displayName = e, [n, () => {
            let t = $.default.useContext(n);
            return r(t, `${e} not found`), t.value
        }, () => {
            let e = $.default.useContext(n);
            return e ? e.value : {}
        }]
    };

    function e7({
        swrConfig: e,
        children: t
    }) {
        return $.default.createElement(e$, {
            value: e
        }, t)
    }
    let [e9, te] = e6("ClerkInstanceContext"), [tt, tr] = e6("UserContext"), [tn, ti] = e6("ClientContext"), [ta, to] = e6("SessionContext");
    $.default.createContext({});
    let [tl, ts] = e6("CheckoutContext"), [tu, td] = e6("OrganizationContext");

    function tc(e) {
        if (!$.default.useContext(e9)) {
            if ("function" == typeof e) return void e();
            throw Error(`${e} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())
        }
    }

    function tp(e) {
        return {
            queryKey: [e.stablePrefix, e.authenticated, e.tracked, e.untracked],
            invalidationKey: [e.stablePrefix, e.authenticated, e.tracked],
            stableKey: e.stablePrefix,
            authenticated: e.authenticated
        }
    }

    function tf(e) {
        let {
            queryKey: t
        } = e;
        return {
            type: t[0],
            ...t[2],
            ...t[3].args
        }
    }
    let tm = (e, t) => {
        let r = "boolean" == typeof e && e,
            n = (0, $.useRef)(r ? t.initialPage : e ? .initialPage ? ? t.initialPage),
            i = (0, $.useRef)(r ? t.pageSize : e ? .pageSize ? ? t.pageSize),
            a = {};
        for (let n of Object.keys(t)) a[n] = r ? t[n] : e ? .[n] ? ? t[n];
        return { ...a,
            initialPage: n.current,
            pageSize: i.current
        }
    };

    function tg(e, t) {
        let r = new Set(Object.keys(t)),
            n = {};
        for (let t of Object.keys(e)) r.has(t) || (n[t] = e[t]);
        return n
    }
    let th = {
            dedupingInterval: 6e4,
            focusThrottleInterval: 12e4
        },
        ty = { ...th,
            revalidateFirstPage: !1
        },
        tv = e => {
            let t, r, {
                    fetcher: n,
                    config: i,
                    keys: a
                } = e,
                [o, l] = (0, $.useState)(i.initialPage ? ? 1),
                s = (0, $.useRef)(i.initialPage ? ? 1),
                u = (0, $.useRef)(i.pageSize ? ? 10),
                d = i.enabled ? ? !0,
                c = "cache" === i.__experimental_mode,
                p = i.infinite ? ? !1,
                f = i.keepPreviousData ? ? !1,
                m = i.isSignedIn,
                g = { ...tf(a),
                    initialPage: o,
                    pageSize: u.current
                },
                h = (t = (0, $.useRef)(m), r = (0, $.useRef)(null), t.current !== m && (r.current = t.current, t.current = m), r.current),
                y = !p && d && (!!c || !!n),
                {
                    data: v,
                    isValidating: b,
                    isLoading: E,
                    error: P,
                    mutate: k
                } = eB("boolean" == typeof m ? !0 === h && !1 === m || m && y ? g : null : y ? g : null, !c && n ? e => !1 === m || !1 === y ? null : n(tg(e, {
                    type: a.queryKey[0],
                    ...a.queryKey[2]
                })) : null, {
                    keepPreviousData: f,
                    ...th
                }),
                {
                    data: _,
                    isLoading: S,
                    isValidating: w,
                    error: C,
                    size: O,
                    setSize: I,
                    mutate: M
                } = e0(e => p && d && !1 !== m ? { ...tf(a),
                    initialPage: s.current + e,
                    pageSize: u.current
                } : null, e => {
                    let t = tg(e, {
                        type: a.queryKey[0],
                        ...a.queryKey[2]
                    });
                    return n ? .(t)
                }, ty),
                R = (0, $.useMemo)(() => p ? O : o, [p, O, o]),
                z = (0, $.useCallback)(e => p ? void I(e) : l(e), [I, p]),
                x = (0, $.useMemo)(() => p ? _ ? .map(e => e ? .data).flat() ? ? [] : v ? .data ? ? [], [p, v, _]),
                T = (0, $.useMemo)(() => p ? _ ? .[_ ? .length - 1] ? .total_count || 0 : v ? .total_count ? ? 0, [p, v, _]),
                L = p ? S : E,
                A = p ? w : b,
                U = (p ? C : P) ? ? null,
                D = (0, $.useCallback)(() => {
                    z(e => Math.max(0, e + 1))
                }, [z]),
                F = (0, $.useCallback)(() => {
                    z(e => Math.max(0, e - 1))
                }, [z]),
                N = (s.current - 1) * u.current;
            return {
                data: x,
                count: T,
                error: U,
                isLoading: L,
                isFetching: A,
                isError: !!U,
                page: R,
                pageCount: Math.ceil((T - N) / u.current),
                fetchPage: z,
                fetchNext: D,
                fetchPrevious: F,
                hasNextPage: T - N * u.current > R * u.current,
                hasPreviousPage: (R - 1) * u.current > N * u.current,
                revalidate: p ? () => M() : () => k(),
                setData: p ? e => M(e, {
                    revalidate: !1
                }) : e => k(e, {
                    revalidate: !1
                })
            }
        },
        tb = () => (tc("useClerk"), te());

    function tE(e) {
        let t = tb(),
            r = (0, $.useRef)(!1);
        (0, $.useEffect)(() => {
            r.current || (r.current = !0, t.__internal_attemptToEnableEnvironmentSetting ? .({
                for: "organizations",
                caller: e
            }))
        }, [t, e])
    }
    let tP = {
            data: void 0,
            count: void 0,
            error: void 0,
            isLoading: !1,
            isFetching: !1,
            isError: !1,
            page: void 0,
            pageCount: void 0,
            fetchPage: void 0,
            fetchNext: void 0,
            fetchPrevious: void 0,
            hasNextPage: !1,
            hasPreviousPage: !1,
            revalidate: void 0,
            setData: void 0
        },
        tk = {
            data: void 0,
            count: void 0,
            error: void 0,
            isLoading: !1,
            isFetching: !1,
            isError: !1,
            page: void 0,
            pageCount: void 0,
            fetchPage: void 0,
            fetchNext: void 0,
            fetchPrevious: void 0,
            hasNextPage: !1,
            hasPreviousPage: !1,
            revalidate: void 0,
            setData: void 0
        },
        t_ = "u" > typeof window ? $.default.useLayoutEffect : $.default.useEffect,
        tS = "useSession",
        tw = "useSessionList",
        tC = "useUser";

    function tO() {
        tc(tC);
        let e = tr();
        return (te().telemetry ? .record(j(tC)), void 0 === e) ? {
            isLoaded: !1,
            isSignedIn: void 0,
            user: void 0
        } : null === e ? {
            isLoaded: !0,
            isSignedIn: !1,
            user: null
        } : {
            isLoaded: !0,
            isSignedIn: !0,
            user: e
        }
    }
    let tI = e2;
    async function tM(e) {
        try {
            let t = await e;
            if (t instanceof Response) return t.json();
            return t
        } catch (e) {
            if (f(e) && e.errors.find(({
                    code: e
                }) => "session_reverification_required" === e)) return {
                clerk_error: {
                    type: "forbidden",
                    reason: B,
                    metadata: {
                        reverification: void 0
                    }
                }
            };
            throw e
        }
    }

    function tR({
        hookName: e,
        resourceType: t,
        useFetcher: r,
        options: n
    }) {
        return function(i) {
            let {
                for: a,
                enabled: o,
                ...l
            } = i || {}, s = a || "user";
            tc(e);
            let u = r(s),
                d = tm(l, {
                    initialPage: 1,
                    pageSize: 10,
                    keepPreviousData: !1,
                    infinite: !1,
                    __experimental_mode: void 0
                }),
                c = te(),
                p = tr(),
                {
                    organization: f
                } = td();
            c.telemetry ? .record(j(e));
            let m = "organization" === s,
                g = function(e) {
                    let t = te(),
                        r = e ? .enabled ? ? !0,
                        n = t.__unstable__environment,
                        i = tr(),
                        {
                            organization: a
                        } = td(),
                        o = e ? .for === "organization",
                        l = o ? n ? .commerceSettings.billing.organization.enabled : n ? .commerceSettings.billing.user.enabled,
                        s = !(e ? .authenticated ? ? !0) || (!o || !!a ? .id) && !!i ? .id;
                    return l && r && t.loaded && s
                }({
                    for: s,
                    enabled: o,
                    authenticated: !n ? .unauthenticated
                }),
                h = void 0 === l ? void 0 : {
                    initialPage: d.initialPage,
                    pageSize: d.pageSize,
                    ...n ? .unauthenticated ? {} : m ? {
                        orgId: f ? .id
                    } : {}
                },
                y = !!h && c.loaded && !!g;
            return tv({
                fetcher: u,
                config: {
                    keepPreviousData: d.keepPreviousData,
                    infinite: d.infinite,
                    enabled: y,
                    ...n ? .unauthenticated ? {} : {
                        isSignedIn: null !== p
                    },
                    __experimental_mode : d.__experimental_mode,
                    initialPage: d.initialPage,
                    pageSize: d.pageSize
                },
                keys: tp({
                    stablePrefix: t,
                    authenticated: !n ? .unauthenticated,
                    tracked: n ? .unauthenticated ? {
                        for: s
                    } : {
                        userId: p ? .id,
                        ...m ? {
                            _orgId: f ? .id
                        } : {}
                    },
                    untracked: {
                        args: h
                    }
                })
            })
        }
    }
    tR({
        hookName: "useStatements",
        resourceType: "billing-statements",
        useFetcher: () => {
            let e = te();
            if (e.loaded) return e.billing.getStatements
        }
    }), tR({
        hookName: "usePaymentAttempts",
        resourceType: "billing-payment-attempts",
        useFetcher: () => {
            let e = te();
            if (e.loaded) return e.billing.getPaymentAttempts
        }
    }), tR({
        hookName: "usePaymentMethods",
        resourceType: "billing-payment-methods",
        useFetcher: e => {
            let {
                organization: t
            } = td(), r = tr();
            return "organization" === e ? t ? .getPaymentMethods : r ? .getPaymentMethods
        }
    }), tR({
        hookName: "usePlans",
        resourceType: "billing-plans",
        useFetcher: e => {
            let t = te();
            if (t.loaded) return r => t.billing.getPlans({ ...r,
                for: e
            })
        },
        options: {
            unauthenticated: !0
        }
    });
    let tz = e => {
            let t = (0, $.useRef)(e);
            return (0, $.useEffect)(() => {
                t.current = e
            }, [e]), t.current
        },
        tx = (e, t, r) => {
            let n = !!r,
                i = (0, $.useRef)(r);
            (0, $.useEffect)(() => {
                i.current = r
            }, [r]), (0, $.useEffect)(() => {
                if (!n || !e) return () => {};
                let r = (...e) => {
                    i.current && i.current(...e)
                };
                return e.on(t, r), () => {
                    e.off(t, r)
                }
            }, [n, t, e, i])
        },
        tT = $.default.createContext(null);
    tT.displayName = "ElementsContext";
    let tL = (e, t) => {
            if (!e) throw Error(`Could not find Elements context; You need to wrap the part of your app that ${t} in an <Elements> provider.`);
            return e
        },
        tA = ({
            stripe: e,
            options: t,
            children: r
        }) => {
            let n = $.default.useMemo(() => tF(e), [e]),
                [i, a] = $.default.useState(() => ({
                    stripe: "sync" === n.tag ? n.stripe : null,
                    elements: "sync" === n.tag ? n.stripe.elements(t) : null
                }));
            $.default.useEffect(() => {
                let e = !0,
                    r = e => {
                        a(r => r.stripe ? r : {
                            stripe: e,
                            elements: e.elements(t)
                        })
                    };
                return "async" !== n.tag || i.stripe ? "sync" !== n.tag || i.stripe || r(n.stripe) : n.stripePromise.then(t => {
                    t && e && r(t)
                }), () => {
                    e = !1
                }
            }, [n, i, t]);
            let o = tz(e);
            $.default.useEffect(() => {
                null !== o && o !== e && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
            }, [o, e]);
            let l = tz(t);
            return $.default.useEffect(() => {
                if (!i.elements) return;
                let e = tV(t, l, ["clientSecret", "fonts"]);
                e && i.elements.update(e)
            }, [t, l, i.elements]), $.default.createElement(tT.Provider, {
                value: i
            }, r)
        },
        tU = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        tD = (e, t = tU) => {
            if (null === e || tK(e)) return e;
            throw Error(t)
        },
        tF = (e, t = tU) => {
            if (tj(e)) return {
                tag: "async",
                stripePromise: Promise.resolve(e).then(e => tD(e, t))
            };
            let r = tD(e, t);
            return null === r ? {
                tag: "empty"
            } : {
                tag: "sync",
                stripe: r
            }
        },
        tN = e => null !== e && "object" == typeof e,
        tj = e => tN(e) && "function" == typeof e.then,
        tK = e => tN(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment,
        tV = (e, t, r) => tN(e) ? Object.keys(e).reduce((n, i) => {
            let a = !tN(t) || !tB(e[i], t[i]);
            return r.includes(i) ? (a && console.warn(`Unsupported prop change: options.${i} is not a mutable property.`), n) : a ? { ...n || {},
                [i]: e[i]
            } : n
        }, null) : null,
        t$ = "[object Object]",
        tB = (e, t) => {
            if (!tN(e) || !tN(t)) return e === t;
            let r = Array.isArray(e);
            if (r !== Array.isArray(t)) return !1;
            let n = Object.prototype.toString.call(e) === t$;
            if (n !== (Object.prototype.toString.call(t) === t$)) return !1;
            if (!n && !r) return e === t;
            let i = Object.keys(e),
                a = Object.keys(t);
            if (i.length !== a.length) return !1;
            let o = {};
            for (let e = 0; e < i.length; e += 1) o[i[e]] = !0;
            for (let e = 0; e < a.length; e += 1) o[a[e]] = !0;
            let l = Object.keys(o);
            return l.length === i.length && l.every(r => tB(e[r], t[r]))
        },
        tW = e => tL($.default.useContext(tT), e),
        tq = (o = "payment", l = "u" < typeof window, r = `${o.charAt(0).toUpperCase()+o.slice(1)}Element`, (n = l ? e => {
            tW(`mounts <${r}>`);
            let {
                id: t,
                className: n
            } = e;
            return $.default.createElement("div", {
                id: t,
                className: n
            })
        } : ({
            id: e,
            className: t,
            fallback: n,
            options: i = {},
            onBlur: a,
            onFocus: l,
            onReady: s,
            onChange: u,
            onEscape: d,
            onClick: c,
            onLoadError: p,
            onLoaderStart: f,
            onNetworksChange: m,
            onConfirm: g,
            onCancel: h,
            onShippingAddressChange: y,
            onShippingRateChange: v
        }) => {
            let b, E = tW(`mounts <${r}>`),
                P = "elements" in E ? E.elements : null,
                [k, _] = $.default.useState(null),
                S = $.default.useRef(null),
                w = $.default.useRef(null),
                [C, O] = (0, $.useState)(!1);
            tx(k, "blur", a), tx(k, "focus", l), tx(k, "escape", d), tx(k, "click", c), tx(k, "loaderror", p), tx(k, "loaderstart", f), tx(k, "networkschange", m), tx(k, "confirm", g), tx(k, "cancel", h), tx(k, "shippingaddresschange", y), tx(k, "shippingratechange", v), tx(k, "change", u), s && (b = () => {
                O(!0), s(k)
            }), tx(k, "ready", b), $.default.useLayoutEffect(() => {
                if (null === S.current && null !== w.current && P) {
                    let e = null;
                    P && (e = P.create(o, i)), S.current = e, _(e), e && e.mount(w.current)
                }
            }, [P, i]);
            let I = tz(i);
            return $.default.useEffect(() => {
                if (!S.current) return;
                let e = tV(i, I, ["paymentRequest"]);
                e && "update" in S.current && S.current.update(e)
            }, [i, I]), $.default.useLayoutEffect(() => () => {
                if (S.current && "function" == typeof S.current.destroy) try {
                    S.current.destroy(), S.current = null
                } catch {}
            }, []), $.default.createElement($.default.Fragment, null, !C && n, $.default.createElement("div", {
                id: e,
                style: {
                    height: C ? "unset" : "0px",
                    visibility: C ? "visible" : "hidden"
                },
                className: t,
                ref: w
            }))
        }).displayName = r, n.__elementType = o, n),
        [tG, tJ] = e6("PaymentElementContext"),
        [tY, tH] = e6("StripeUtilsContext"),
        tQ = ({
            children: e
        }) => {
            let t = (() => {
                    let {
                        stripe: e
                    } = tW("calls useStripe()");
                    return e
                })(),
                r = (() => {
                    let {
                        elements: e
                    } = tL($.default.useContext(tT), "calls useElements()");
                    return e
                })();
            return $.default.createElement(tY.Provider, {
                value: {
                    value: {
                        stripe: t,
                        elements: r
                    }
                }
            }, e)
        },
        tZ = ({
            children: e
        }) => $.default.createElement(tY.Provider, {
            value: {
                value: {}
            }
        }, e),
        tX = ({
            children: e,
            ...t
        }) => {
            let r = ((e = "user") => {
                    let t, r = (t = tb(), eB("clerk-stripe-sdk", async () => ({
                            loadStripe: await t.__internal_loadStripeJs()
                        }), {
                            keepPreviousData: !0,
                            revalidateOnFocus: !1,
                            dedupingInterval: 1 / 0
                        }).data ? ? null),
                        n = tb().__unstable__environment,
                        {
                            initializedPaymentMethod: i,
                            initializePaymentMethod: a
                        } = function(e) {
                            let {
                                for: t = "user"
                            } = e ? ? {}, {
                                organization: r
                            } = td(), n = tr(), i = "organization" === t ? r : n, {
                                data: a,
                                trigger: o
                            } = e5(i ? .id ? {
                                key: "billing-payment-method-initialize",
                                resourceId: i.id,
                                for: t
                            } : null, () => i ? .initializePaymentMethod({
                                gateway: "stripe"
                            }));
                            return (0, $.useEffect)(() => {
                                i ? .id && o().catch(() => {})
                            }, [i ? .id, o]), {
                                initializedPaymentMethod: a,
                                initializePaymentMethod: o
                            }
                        }({
                            for: e
                        }),
                        o = n ? .commerceSettings.billing.stripePublishableKey ? ? void 0;
                    return {
                        stripe: function(e) {
                            let {
                                stripeClerkLibs: t,
                                externalGatewayId: r,
                                stripePublishableKey: n
                            } = e;
                            return eB(t && r && n ? {
                                key: "stripe-sdk",
                                externalGatewayId: r,
                                stripePublishableKey: n
                            } : null, ({
                                stripePublishableKey: e,
                                externalGatewayId: r
                            }) => t ? .loadStripe(e, {
                                stripeAccount: r
                            }), {
                                keepPreviousData: !0,
                                revalidateOnFocus: !1,
                                dedupingInterval: 6e4
                            }).data
                        }({
                            stripeClerkLibs: r,
                            externalGatewayId: i ? .externalGatewayId,
                            stripePublishableKey: o
                        }),
                        initializePaymentMethod: a,
                        externalClientSecret: i ? .externalClientSecret,
                        paymentMethodOrder: i ? .paymentMethodOrder
                    }
                })(t.for),
                [n, i] = (0, $.useState)(!1);
            return $.default.createElement(tG.Provider, {
                value: {
                    value: { ...t,
                        ...r,
                        setIsPaymentElementReady: i,
                        isPaymentElementReady: n
                    }
                }
            }, e)
        },
        t0 = e => {
            let {
                stripe: t,
                externalClientSecret: r,
                stripeAppearance: n
            } = tJ(), i = (() => {
                let e = tb(),
                    t = "en";
                try {
                    t = e.__internal_getOption("localization") ? .locale || "en"
                } catch {}
                return t.split("-")[0]
            })();
            return t && r ? $.default.createElement(tA, {
                key: r,
                stripe: t,
                options: {
                    loader: "never",
                    clientSecret: r,
                    appearance: {
                        variables: n
                    },
                    locale: i
                }
            }, $.default.createElement(tQ, null, e.children)) : $.default.createElement(tZ, null, e.children)
        },
        t1 = () => {
            throw Error("Clerk: Unable to submit, Stripe libraries are not yet loaded. Be sure to check `isFormReady` before calling `submit`.")
        };
    e.s(["ClerkInstanceContext", 0, e9, "ClientContext", 0, tn, "OrganizationProvider", 0, ({
        children: e,
        organization: t,
        swrConfig: r
    }) => $.default.createElement(e7, {
        swrConfig: r
    }, $.default.createElement(tu.Provider, {
        value: {
            value: {
                organization: t
            }
        }
    }, e)), "SessionContext", 0, ta, "UserContext", 0, tt, "__experimental_CheckoutProvider", 0, ({
        children: e,
        ...t
    }) => $.default.createElement(tl.Provider, {
        value: {
            value: t
        }
    }, e), "__experimental_PaymentElement", 0, ({
        fallback: e
    }) => {
        let {
            setIsPaymentElementReady: t,
            paymentMethodOrder: r,
            checkout: n,
            stripe: i,
            externalClientSecret: a,
            paymentDescription: o,
            for: l
        } = tJ(), s = tb().__unstable__environment, u = (0, $.useMemo)(() => {
            if (n && n.totals && n.plan) return {
                recurringPaymentRequest: {
                    paymentDescription: o || "",
                    managementURL: "organization" === l ? s ? .displayConfig.organizationProfileUrl || "" : s ? .displayConfig.userProfileUrl || "",
                    regularBilling: {
                        amount: n.totals.totalDueNow ? .amount || n.totals.grandTotal.amount,
                        label: n.plan.name,
                        recurringPaymentIntervalUnit: "annual" === n.planPeriod ? "year" : "month"
                    }
                }
            }
        }, [n, o, l, s]), d = (0, $.useMemo)(() => ({
            layout: {
                type: "tabs",
                defaultCollapsed: !1
            },
            paymentMethodOrder: r,
            applePay: u
        }), [u, r]), c = (0, $.useCallback)(() => {
            t(!0)
        }, [t]);
        return i && a ? $.default.createElement(tq, {
            fallback: e,
            onReady: c,
            options: d
        }) : $.default.createElement($.default.Fragment, null, e)
    }, "__experimental_PaymentElementProvider", 0, ({
        children: e,
        ...t
    }) => $.default.createElement(tX, t, $.default.createElement(t0, null, e)), "__experimental_useCheckout", 0, e => {
        let t = ts(),
            {
                for: r,
                planId: n,
                planPeriod: i
            } = e || t,
            a = tb(),
            {
                organization: o
            } = td(),
            {
                isLoaded: l,
                user: s
            } = tO();
        if (!l) throw Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<ClerkLoaded />`.");
        if (!s) throw Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<SignedIn />`.");
        if ("organization" === r && !o) throw Error("Clerk: Ensure your flow checks for an active organization. Retrieve `orgId` from `useAuth()` and confirm it is defined. For SSR, see: https://clerk.com/docs/reference/backend/types/auth-object#how-to-access-the-auth-object");
        let u = (0, $.useMemo)(() => a.__experimental_checkout({
                planId: n,
                planPeriod: i,
                for: r
            }), [s.id, o ? .id, n, i, r]),
            d = (0, $.useSyncExternalStore)(e => u.subscribe(e), () => u.getState(), () => u.getState());
        return {
            checkout: { ...(0, $.useMemo)(() => {
                    if (!d.checkout) return {
                        id: null,
                        externalClientSecret: null,
                        externalGatewayId: null,
                        totals: null,
                        isImmediatePlanChange: null,
                        planPeriod: null,
                        plan: null,
                        paymentMethod: null,
                        freeTrialEndsAt: null,
                        payer: null,
                        needsPaymentMethod: null,
                        planPeriodStart: null
                    };
                    let {
                        reload: e,
                        confirm: t,
                        pathRoot: r,
                        ...n
                    } = d.checkout;
                    return n
                }, [d.checkout]),
                getState: u.getState,
                start: u.start,
                confirm: u.confirm,
                clear: u.clear,
                finalize: u.finalize,
                isStarting: d.isStarting,
                isConfirming: d.isConfirming,
                error: d.error,
                status: d.status,
                fetchStatus: d.fetchStatus
            }
        }
    }, "__experimental_usePaymentElement", 0, () => {
        let {
            isPaymentElementReady: e,
            initializePaymentMethod: t
        } = tJ(), {
            stripe: r,
            elements: n
        } = tH(), {
            externalClientSecret: i
        } = tJ(), a = (0, $.useCallback)(async () => {
            if (!r || !n) return t1();
            let {
                setupIntent: e,
                error: t
            } = await r.confirmSetup({
                elements: n,
                confirmParams: {
                    return_url: window.location.href
                },
                redirect: "if_required"
            });
            return t ? {
                data: null,
                error: {
                    gateway: "stripe",
                    error: {
                        code: t.code,
                        message: t.message,
                        type: t.type
                    }
                }
            } : {
                data: {
                    gateway: "stripe",
                    paymentToken: e.payment_method
                },
                error: null
            }
        }, [r, n]), o = (0, $.useCallback)(async () => {
            if (!r || !n) return t1();
            await t()
        }, [r, n, t]), l = !!(r && i);
        return l ? {
            submit: a,
            reset: o,
            isFormReady: e,
            provider: {
                name: "stripe"
            },
            isProviderReady: l
        } : {
            submit: t1,
            reset: t1,
            isFormReady: !1,
            provider: void 0,
            isProviderReady: !1
        }
    }, "createContextAndHook", 0, e6, "isDeeplyEqual", 0, tI, "useAssertWrappedByClerkProvider", 0, tc, "useClerk", 0, tb, "useClerkInstanceContext", 0, te, "useClientContext", 0, ti, "useOrganization", 0, function(e) {
        var t, r;
        let {
            domains: n,
            membershipRequests: i,
            memberships: a,
            invitations: o
        } = e || {};
        tc("useOrganization"), tE("useOrganization");
        let {
            organization: l
        } = td(), s = to(), u = tm(n, {
            initialPage: 1,
            pageSize: 10,
            keepPreviousData: !1,
            infinite: !1,
            enrollmentMode: void 0
        }), d = tm(i, {
            initialPage: 1,
            pageSize: 10,
            status: "pending",
            keepPreviousData: !1,
            infinite: !1
        }), c = tm(a, {
            initialPage: 1,
            pageSize: 10,
            role: void 0,
            keepPreviousData: !1,
            infinite: !1,
            query: void 0
        }), p = tm(o, {
            initialPage: 1,
            pageSize: 10,
            status: ["pending"],
            keepPreviousData: !1,
            infinite: !1
        }), f = te();
        f.telemetry ? .record(j("useOrganization"));
        let m = void 0 === n ? void 0 : {
                initialPage: u.initialPage,
                pageSize: u.pageSize,
                enrollmentMode: u.enrollmentMode
            },
            g = void 0 === i ? void 0 : {
                initialPage: d.initialPage,
                pageSize: d.pageSize,
                status: d.status
            },
            h = void 0 === a ? void 0 : {
                initialPage: c.initialPage,
                pageSize: c.pageSize,
                role: c.role,
                query: c.query
            },
            y = void 0 === o ? void 0 : {
                initialPage: p.initialPage,
                pageSize: p.pageSize,
                status: p.status
            },
            v = tv({
                fetcher: l ? .getDomains,
                config: {
                    keepPreviousData: u.keepPreviousData,
                    infinite: u.infinite,
                    enabled: !!m,
                    isSignedIn: !!l,
                    initialPage: u.initialPage,
                    pageSize: u.pageSize
                },
                keys: tp({
                    stablePrefix: "domains",
                    authenticated: !!l,
                    tracked: {
                        organizationId: l ? .id
                    },
                    untracked: {
                        args: m
                    }
                })
            }),
            b = tv({
                fetcher: l ? .getMembershipRequests,
                config: {
                    keepPreviousData: d.keepPreviousData,
                    infinite: d.infinite,
                    enabled: !!g,
                    isSignedIn: !!l,
                    initialPage: d.initialPage,
                    pageSize: d.pageSize
                },
                keys: tp({
                    stablePrefix: "membershipRequests",
                    authenticated: !!l,
                    tracked: {
                        organizationId: l ? .id
                    },
                    untracked: {
                        args: g
                    }
                })
            }),
            E = tv({
                fetcher: l ? .getMemberships,
                config: {
                    keepPreviousData: c.keepPreviousData,
                    infinite: c.infinite,
                    enabled: !!h,
                    isSignedIn: !!l,
                    initialPage: c.initialPage,
                    pageSize: c.pageSize
                },
                keys: tp({
                    stablePrefix: "memberships",
                    authenticated: !!l,
                    tracked: {
                        organizationId: l ? .id
                    },
                    untracked: {
                        args: h
                    }
                })
            }),
            P = tv({
                fetcher: l ? .getInvitations,
                config: {
                    keepPreviousData: p.keepPreviousData,
                    infinite: p.infinite,
                    enabled: !!y,
                    isSignedIn: !!l,
                    initialPage: p.initialPage,
                    pageSize: p.pageSize
                },
                keys: tp({
                    stablePrefix: "invitations",
                    authenticated: !!l,
                    tracked: {
                        organizationId: l ? .id
                    },
                    untracked: {
                        args: y
                    }
                })
            });
        return void 0 === l ? {
            isLoaded: !1,
            organization: void 0,
            membership: void 0,
            domains: tP,
            membershipRequests: tP,
            memberships: tP,
            invitations: tP
        } : null === l ? {
            isLoaded: !0,
            organization: null,
            membership: null,
            domains: null,
            membershipRequests: null,
            memberships: null,
            invitations: null
        } : !f.loaded && l ? {
            isLoaded: !0,
            organization: l,
            membership: void 0,
            domains: tP,
            membershipRequests: tP,
            memberships: tP,
            invitations: tP
        } : {
            isLoaded: f.loaded,
            organization: l,
            membership: (t = s.user.organizationMemberships, r = l.id, t.find(e => e.organization.id === r)),
            domains: v,
            membershipRequests: b,
            memberships: E,
            invitations: P
        }
    }, "useOrganizationCreationDefaults", 0, function(e = {}) {
        let {
            keepPreviousData: t = !0,
            enabled: r = !0
        } = e, n = te(), i = tr(), a = n.__unstable__environment ? .organizationSettings ? .organizationCreationDefaults ? .enabled ? ? !1;
        n.telemetry ? .record(j("useOrganizationCreationDefaults"));
        let {
            queryKey: o
        } = function(e) {
            let {
                userId: t
            } = e;
            return (0, $.useMemo)(() => tp({
                stablePrefix: "organizationCreationDefaults",
                authenticated: !!t,
                tracked: {
                    userId: t ? ? null
                },
                untracked: {
                    args: {}
                }
            }), [t])
        }({
            userId: i ? .id ? ? null
        }), l = eB(i && r && a && n.loaded ? o : null, () => {
            if (!i) throw Error("User is required to fetch organization creation defaults");
            return i.getOrganizationCreationDefaults()
        }, {
            dedupingInterval: 6e4,
            keepPreviousData: t
        });
        return {
            data: l.data,
            error: l.error ? ? null,
            isLoading: l.isLoading,
            isFetching: l.isValidating
        }
    }, "useOrganizationList", 0, function(e) {
        let {
            userMemberships: t,
            userInvitations: r,
            userSuggestions: n
        } = e || {};
        tc("useOrganizationList"), tE("useOrganizationList");
        let i = tm(t, {
                initialPage: 1,
                pageSize: 10,
                keepPreviousData: !1,
                infinite: !1
            }),
            a = tm(r, {
                initialPage: 1,
                pageSize: 10,
                status: "pending",
                keepPreviousData: !1,
                infinite: !1
            }),
            o = tm(n, {
                initialPage: 1,
                pageSize: 10,
                status: "pending",
                keepPreviousData: !1,
                infinite: !1
            }),
            l = te(),
            s = tr();
        l.telemetry ? .record(j("useOrganizationList"));
        let u = void 0 === t ? void 0 : {
                initialPage: i.initialPage,
                pageSize: i.pageSize
            },
            d = void 0 === r ? void 0 : {
                initialPage: a.initialPage,
                pageSize: a.pageSize,
                status: a.status
            },
            c = void 0 === n ? void 0 : {
                initialPage: o.initialPage,
                pageSize: o.pageSize,
                status: o.status
            },
            p = !!(l.loaded && s),
            f = tv({
                fetcher: s ? .getOrganizationMemberships,
                config: {
                    keepPreviousData: i.keepPreviousData,
                    infinite: i.infinite,
                    enabled: !!u,
                    isSignedIn: !!s,
                    initialPage: i.initialPage,
                    pageSize: i.pageSize
                },
                keys: tp({
                    stablePrefix: "userMemberships",
                    authenticated: !!s,
                    tracked: {
                        userId: s ? .id
                    },
                    untracked: {
                        args: u
                    }
                })
            }),
            m = tv({
                fetcher: s ? .getOrganizationInvitations,
                config: {
                    keepPreviousData: a.keepPreviousData,
                    infinite: a.infinite,
                    enabled: !!d,
                    isSignedIn: !!s,
                    initialPage: a.initialPage,
                    pageSize: a.pageSize
                },
                keys: tp({
                    stablePrefix: "userInvitations",
                    authenticated: !!s,
                    tracked: {
                        userId: s ? .id
                    },
                    untracked: {
                        args: d
                    }
                })
            }),
            g = tv({
                fetcher: s ? .getOrganizationSuggestions,
                config: {
                    keepPreviousData: o.keepPreviousData,
                    infinite: o.infinite,
                    enabled: !!c,
                    isSignedIn: !!s,
                    initialPage: o.initialPage,
                    pageSize: o.pageSize
                },
                keys: tp({
                    stablePrefix: "userSuggestions",
                    authenticated: !!s,
                    tracked: {
                        userId: s ? .id
                    },
                    untracked: {
                        args: c
                    }
                })
            });
        return p ? {
            isLoaded: p,
            setActive: l.setActive,
            createOrganization: l.createOrganization,
            userMemberships: f,
            userInvitations: m,
            userSuggestions: g
        } : {
            isLoaded: !1,
            createOrganization: void 0,
            setActive: void 0,
            userMemberships: tk,
            userInvitations: tk,
            userSuggestions: tk
        }
    }, "useReverification", 0, (e, t) => {
        let {
            __internal_openReverification: r,
            telemetry: n
        } = tb(), i = (0, $.useRef)(e), a = (0, $.useRef)(t);
        return n ? .record(j("useReverification", {
            onNeedsReverification: !!t ? .onNeedsReverification
        })), t_(() => {
            i.current = e, a.current = t
        }), (0, $.useCallback)((...e) => {
            var t;
            return (t = {
                openUIComponent: r,
                telemetry: n,
                ...a.current
            }, function(e) {
                return async (...r) => {
                    let n, i = await tM(e(...r));
                    if ((n = i) && "object" == typeof n && "clerk_error" in n && n.clerk_error ? .type === "forbidden" && n.clerk_error ? .reason === B) {
                        let n, a, o = (n = W, a = W, {
                                promise: new Promise((e, t) => {
                                    n = e, a = t
                                }),
                                resolve: n,
                                reject: a
                            }),
                            l = O(i.clerk_error.metadata ? .reverification),
                            s = l ? l().level : void 0,
                            u = () => {
                                o.reject(new v("User cancelled attempted verification", {
                                    code: "reverification_cancelled"
                                }))
                            },
                            d = () => {
                                o.resolve(!0)
                            };
                        void 0 === t.onNeedsReverification ? t.openUIComponent ? .({
                            level: s,
                            afterVerification: d,
                            afterVerificationCancelled: u
                        }) : t.onNeedsReverification({
                            cancel: u,
                            complete: d,
                            level: s
                        }), await o.promise, i = await tM(e(...r))
                    }
                    return i
                }
            })(i.current)(...e)
        }, [r, n])
    }, "useSession", 0, () => {
        tc(tS);
        let e = to(),
            t = te();
        return (t.telemetry ? .record(j(tS)), void 0 === e) ? {
            isLoaded: !1,
            isSignedIn: void 0,
            session: void 0
        } : null === e ? {
            isLoaded: !0,
            isSignedIn: !1,
            session: null
        } : {
            isLoaded: !0,
            isSignedIn: t.isSignedIn,
            session: e
        }
    }, "useSessionContext", 0, to, "useSessionList", 0, () => {
        tc(tw);
        let e = te(),
            t = ti();
        return (te().telemetry ? .record(j(tw)), t) ? {
            isLoaded: !0,
            sessions: t.sessions,
            setActive: e.setActive
        } : {
            isLoaded: !1,
            sessions: void 0,
            setActive: void 0
        }
    }, "useUser", 0, tO], 27085);
    var t3 = h({
            packageName: "@clerk/clerk-react"
        }),
        [t2, t4] = e6("AuthContext"),
        t5 = e => `You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,
        t8 = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
        t6 = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
        t7 = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
        t9 = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
        re = e => `<${e} /> can only accept <${e}.Page /> and <${e}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,
        rt = e => `Missing props. <${e}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,
        rr = e => `Missing props. <${e}.Link /> component requires the following props: url, label and labelIcon.`,
        rn = "<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
        ri = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
        ra = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",
        ro = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",
        rl = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",
        rs = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",
        ru = "Missing props. <UserButton.Action /> component requires the following props: label.",
        rd = e => {
            tc(() => {
                t3.throwMissingClerkProviderError({
                    source: e
                })
            })
        },
        rc = e => new Promise(t => {
            let r = n => {
                ["ready", "degraded"].includes(n) && (t(), e.off("status", r))
            };
            e.on("status", r, {
                notify: !0
            })
        });

    function rp(e, {
        treatPendingAsSignedOut: t = !0
    } = {}) {
        let {
            userId: r,
            orgId: n,
            orgRole: i,
            has: a,
            signOut: o,
            getToken: l,
            orgPermissions: s,
            factorVerificationAge: u,
            sessionClaims: d
        } = null != e ? e : {}, c = (0, $.useCallback)(e => {
            let t;
            return a ? a(e) : (t = {
                userId: r,
                orgId: n,
                orgRole: i,
                orgPermissions: s,
                factorVerificationAge: u,
                features: (null == d ? void 0 : d.fea) || "",
                plans: (null == d ? void 0 : d.pla) || ""
            }, e => {
                if (!t.userId) return !1;
                let r = ((e, t) => {
                        let {
                            features: r,
                            plans: n
                        } = t;
                        return e.feature && r ? w(r, e.feature) : e.plan && n ? w(n, e.plan) : null
                    })(e, t),
                    n = ((e, t) => {
                        let {
                            orgId: r,
                            orgRole: n,
                            orgPermissions: i
                        } = t;
                        return (e.role || e.permission) && r && n && i ? e.permission ? i.includes(e.permission.replace(/^(org:)*/, "org:")) : e.role ? n.replace(/^(org:)*/, "org:") === e.role.replace(/^(org:)*/, "org:") : null : null
                    })(e, t),
                    i = ((e, {
                        factorVerificationAge: t
                    }) => {
                        if (!e.reverification || !t) return null;
                        let r = O(e.reverification);
                        if (!r) return null;
                        let {
                            level: n,
                            afterMinutes: i
                        } = r(), [a, o] = t, l = -1 !== a ? i > a : null, s = -1 !== o ? i > o : null;
                        switch (n) {
                            case "first_factor":
                                return l;
                            case "second_factor":
                                return -1 !== o ? s : l;
                            case "multi_factor":
                                return -1 === o ? l : l && s
                        }
                    })(e, t);
                return [r || n, i].some(e => null === e) ? [r || n, i].some(e => !0 === e) : [r || n, i].every(e => !0 === e)
            })(e)
        }, [a, r, n, i, s, u, d]), p = (({
            authObject: {
                sessionId: e,
                sessionStatus: t,
                userId: r,
                actor: n,
                orgId: i,
                orgRole: a,
                orgSlug: o,
                signOut: l,
                getToken: s,
                has: u,
                sessionClaims: d
            },
            options: {
                treatPendingAsSignedOut: c = !0
            }
        }) => void 0 === e && void 0 === r ? {
            isLoaded: !1,
            isSignedIn: void 0,
            sessionId: e,
            sessionClaims: void 0,
            userId: r,
            actor: void 0,
            orgId: void 0,
            orgRole: void 0,
            orgSlug: void 0,
            has: void 0,
            signOut: l,
            getToken: s
        } : null === e && null === r ? {
            isLoaded: !0,
            isSignedIn: !1,
            sessionId: e,
            userId: r,
            sessionClaims: null,
            actor: null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: () => !1,
            signOut: l,
            getToken: s
        } : c && "pending" === t ? {
            isLoaded: !0,
            isSignedIn: !1,
            sessionId: null,
            userId: null,
            sessionClaims: null,
            actor: null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: () => !1,
            signOut: l,
            getToken: s
        } : e && d && r && i && a ? {
            isLoaded: !0,
            isSignedIn: !0,
            sessionId: e,
            sessionClaims: d,
            userId: r,
            actor: n || null,
            orgId: i,
            orgRole: a,
            orgSlug: o || null,
            has: u,
            signOut: l,
            getToken: s
        } : e && d && r && !i ? {
            isLoaded: !0,
            isSignedIn: !0,
            sessionId: e,
            sessionClaims: d,
            userId: r,
            actor: n || null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: u,
            signOut: l,
            getToken: s
        } : void 0)({
            authObject: { ...e,
                getToken: l,
                signOut: o,
                has: c
            },
            options: {
                treatPendingAsSignedOut: t
            }
        });
        return p || t3.throw("Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support")
    }
    var rf = (e, t) => {
        let r = ("string" == typeof t ? t : null == t ? void 0 : t.component) || e.displayName || e.name || "Component";
        e.displayName = r;
        let n = "string" == typeof t ? void 0 : t,
            i = t => {
                rd(r || "withClerk");
                let i = te();
                return i.loaded || (null == n ? void 0 : n.renderWhileLoading) ? $.default.createElement(e, { ...t,
                    component: r,
                    clerk: i
                }) : null
            };
        return i.displayName = `withClerk(${r})`, i
    };
    e.s(["AuthContext", 0, t2, "IsomorphicClerkContext", 0, e9, "customLinkWrongProps", 0, rr, "customMenuItemsIgnoredComponent", 0, ri, "customPageWrongProps", 0, rt, "customPagesIgnoredComponent", 0, re, "errorThrower", 0, t3, "incompatibleRoutingWithPathProvidedError", 0, e => `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${e}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`, "multipleChildrenInButtonComponent", 0, t5, "multipleClerkProvidersError", 0, "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.", "noPathProvidedError", 0, e => `The <${e}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${e} path={'/my-path'} />`, "organizationProfileLinkRenderedError", 0, t9, "organizationProfilePageRenderedError", 0, t7, "setErrorThrowerOptions", 0, function(e) {
        t3.setMessages(e).setPackageName(e)
    }, "unsupportedNonBrowserDomainOrProxyUrlFunction", 0, "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.", "useAssertWrappedByClerkProvider", 0, rd, "useAuth", 0, (e = {}) => {
        var t;
        rd("useAuth");
        let {
            treatPendingAsSignedOut: r,
            ...n
        } = null != e ? e : {}, i = t4();
        void 0 === i.sessionId && void 0 === i.userId && (i = null != n ? n : {});
        let a = te(),
            o = (0, $.useCallback)(async e => (await rc(a), a.session) ? a.session.getToken(e) : null, [a]),
            l = (0, $.useCallback)(async (...e) => (await rc(a), a.signOut(...e)), [a]);
        return null == (t = a.telemetry) || t.record(j("useAuth", {
            treatPendingAsSignedOut: r
        })), rp({ ...i,
            getToken: o,
            signOut: l
        }, {
            treatPendingAsSignedOut: r
        })
    }, "useDerivedAuth", 0, rp, "useEmailLink", 0, function(e) {
        let {
            startEmailLinkFlow: t,
            cancelEmailLinkFlow: r
        } = $.default.useMemo(() => e.createEmailLinkFlow(), [e]);
        return $.default.useEffect(() => r, []), {
            startEmailLinkFlow: t,
            cancelEmailLinkFlow: r
        }
    }, "useIsomorphicClerkContext", 0, te, "useSignIn", 0, () => {
        var e;
        rd("useSignIn");
        let t = te(),
            r = ti();
        return (null == (e = t.telemetry) || e.record(j("useSignIn")), r) ? {
            isLoaded: !0,
            signIn: r.signIn,
            setActive: t.setActive
        } : {
            isLoaded: !1,
            signIn: void 0,
            setActive: void 0
        }
    }, "useSignUp", 0, () => {
        var e;
        rd("useSignUp");
        let t = te(),
            r = ti();
        return (null == (e = t.telemetry) || e.record(j("useSignUp")), r) ? {
            isLoaded: !0,
            signUp: r.signUp,
            setActive: t.setActive
        } : {
            isLoaded: !1,
            signUp: void 0,
            setActive: void 0
        }
    }, "userButtonIgnoredComponent", 0, rn, "userButtonMenuActionRenderedError", 0, ro, "userButtonMenuItemLinkWrongProps", 0, rs, "userButtonMenuItemsActionWrongsProps", 0, ru, "userButtonMenuItemsRenderedError", 0, ra, "userButtonMenuLinkRenderedError", 0, rl, "userProfileLinkRenderedError", 0, t6, "userProfilePageRenderedError", 0, t8, "withClerk", 0, rf], 65389);
    var rm = e.i(41383);
    let rg = e => {
        (0, rm.isDevelopmentEnvironment)() && console.error(`Clerk: ${e}`)
    };
    var rh = $,
        ry = e.i(74080);
    let rv = (e, ...t) => {
        let r = { ...e
        };
        for (let e of t) delete r[e];
        return r
    };
    var rb = new Map,
        rE = e => {
            let [t, r] = (0, rh.useState)(new Map);
            return e.map(e => ({
                id: e.id,
                mount: t => r(r => new Map(r).set(String(e.id), t)),
                unmount: () => r(t => {
                    let r = new Map(t);
                    return r.set(String(e.id), null), r
                }),
                portal: () => {
                    let r = t.get(String(e.id));
                    return r ? (0, ry.createPortal)(e.component, r) : null
                }
            }))
        },
        rP = (e, t) => !!e && rh.default.isValidElement(e) && (null == e ? void 0 : e.type) === t,
        rk = (e, t) => rw({
            children: e,
            reorderItemsLabels: ["account", "security", "billing", "apiKeys"],
            LinkComponent: rj,
            PageComponent: rN,
            MenuItemsComponent: r$,
            componentName: "UserProfile"
        }, t),
        r_ = (e, t) => rw({
            children: e,
            reorderItemsLabels: ["general", "members", "billing", "apiKeys"],
            LinkComponent: rJ,
            PageComponent: rG,
            componentName: "OrganizationProfile"
        }, t),
        rS = e => {
            let t = [],
                r = [rJ, rG, r$, rN, rj];
            return rh.default.Children.forEach(e, e => {
                r.some(t => rP(e, t)) || t.push(e)
            }), t
        },
        rw = (e, t) => {
            let {
                children: r,
                LinkComponent: n,
                PageComponent: i,
                MenuItemsComponent: a,
                reorderItemsLabels: o,
                componentName: l
            } = e, {
                allowForAnyChildren: s = !1
            } = t || {}, u = [];
            rh.default.Children.forEach(r, e => {
                if (!rP(e, i) && !rP(e, n) && !rP(e, a)) {
                    e && !s && rg(re(l));
                    return
                }
                let {
                    props: t
                } = e, {
                    children: r,
                    label: d,
                    url: c,
                    labelIcon: p
                } = t;
                if (rP(e, i))
                    if (rC(t, o)) u.push({
                        label: d
                    });
                    else {
                        if (!rO(t)) return void rg(rt(l));
                        u.push({
                            label: d,
                            labelIcon: p,
                            children: r,
                            url: c
                        })
                    }
                if (rP(e, n))
                    if (!rI(t)) return void rg(rr(l));
                    else u.push({
                        label: d,
                        labelIcon: p,
                        url: c
                    })
            });
            let d = [],
                c = [],
                p = [];
            u.forEach((e, t) => {
                if (rO(e)) {
                    d.push({
                        component: e.children,
                        id: t
                    }), c.push({
                        component: e.labelIcon,
                        id: t
                    });
                    return
                }
                rI(e) && p.push({
                    component: e.labelIcon,
                    id: t
                })
            });
            let f = rE(d),
                m = rE(c),
                g = rE(p),
                h = [],
                y = [];
            return u.forEach((e, t) => {
                if (rC(e, o)) return void h.push({
                    label: e.label
                });
                if (rO(e)) {
                    let {
                        portal: r,
                        mount: n,
                        unmount: i
                    } = f.find(e => e.id === t), {
                        portal: a,
                        mount: o,
                        unmount: l
                    } = m.find(e => e.id === t);
                    h.push({
                        label: e.label,
                        url: e.url,
                        mount: n,
                        unmount: i,
                        mountIcon: o,
                        unmountIcon: l
                    }), y.push(r), y.push(a);
                    return
                }
                if (rI(e)) {
                    let {
                        portal: r,
                        mount: n,
                        unmount: i
                    } = g.find(e => e.id === t);
                    h.push({
                        label: e.label,
                        url: e.url,
                        mountIcon: n,
                        unmountIcon: i
                    }), y.push(r);
                    return
                }
            }), {
                customPages: h,
                customPagesPortals: y
            }
        },
        rC = (e, t) => {
            let {
                children: r,
                label: n,
                url: i,
                labelIcon: a
            } = e;
            return !r && !i && !a && t.some(e => e === n)
        },
        rO = e => {
            let {
                children: t,
                label: r,
                url: n,
                labelIcon: i
            } = e;
            return !!t && !!n && !!i && !!r
        },
        rI = e => {
            let {
                children: t,
                label: r,
                url: n,
                labelIcon: i
            } = e;
            return !t && !!n && !!i && !!r
        },
        rM = (e, t) => {
            let {
                children: r,
                label: n,
                onClick: i,
                labelIcon: a
            } = e;
            return !r && !i && !a && t.some(e => e === n)
        },
        rR = e => {
            let {
                label: t,
                labelIcon: r,
                onClick: n,
                open: i
            } = e;
            return !!r && !!t && ("function" == typeof n || "string" == typeof i)
        },
        rz = e => {
            let {
                label: t,
                href: r,
                labelIcon: n
            } = e;
            return !!r && !!n && !!t
        },
        rx = (i = (s = {
            childList: !0,
            subtree: !0,
            isReady: (e, t) => {
                var r;
                return !!(null == e ? void 0 : e.childElementCount) && (null == (r = null == e ? void 0 : e.matches) ? void 0 : r.call(e, t)) && e.childElementCount > 0
            }
        }).isReady, e => new Promise((t, r) => {
            let {
                root: n = null == document ? void 0 : document.body,
                selector: a,
                timeout: o = 0
            } = e;
            if (!n) return void r(Error("No root element provided"));
            let l = n;
            if (a && (l = null == n ? void 0 : n.querySelector(a)), i(l, a)) return void t();
            let u = new MutationObserver(e => {
                for (let r of e)
                    if (!l && a && (l = null == n ? void 0 : n.querySelector(a)), (s.childList && "childList" === r.type || s.attributes && "attributes" === r.type) && i(l, a)) {
                        u.disconnect(), t();
                        return
                    }
            });
            u.observe(n, s), o > 0 && setTimeout(() => {
                u.disconnect(), r(Error(`Timeout waiting for ${a}`))
            }, o)
        }));

    function rT(e, t) {
        let r = (0, rh.useRef)(),
            [n, i] = (0, rh.useState)("rendering");
        return (0, rh.useEffect)(() => {
            if (!e) throw Error("Clerk: no component name provided, unable to detect mount.");
            if ("u" > typeof window && !r.current) {
                let n = `[data-clerk-component="${e}"]`,
                    a = null == t ? void 0 : t.selector;
                r.current = rx({
                    selector: a ? n + a : n
                }).then(() => {
                    i("rendered")
                }).catch(() => {
                    i("error")
                })
            }
        }, [e, null == t ? void 0 : t.selector]), n
    }
    var rL = e => null == e ? void 0 : e.map(({
            mountIcon: e,
            unmountIcon: t,
            ...r
        }) => r),
        rA = class extends rh.default.PureComponent {
            constructor() {
                super(...arguments), this.rootRef = rh.default.createRef()
            }
            componentDidUpdate(e) {
                var t, r, n, i;
                if (!("mount" in e) || !("mount" in this.props)) return;
                let a = rv(e.props, "customPages", "customMenuItems", "children"),
                    o = rv(this.props.props, "customPages", "customMenuItems", "children"),
                    l = (null == (t = a.customPages) ? void 0 : t.length) !== (null == (r = o.customPages) ? void 0 : r.length),
                    s = (null == (n = a.customMenuItems) ? void 0 : n.length) !== (null == (i = o.customMenuItems) ? void 0 : i.length),
                    u = rL(e.props.customMenuItems),
                    d = rL(this.props.props.customMenuItems);
                (!tI(a, o) || !tI(u, d) || l || s) && this.rootRef.current && this.props.updateProps({
                    node: this.rootRef.current,
                    props: this.props.props
                })
            }
            componentDidMount() {
                this.rootRef.current && ("mount" in this.props && this.props.mount(this.rootRef.current, this.props.props), "open" in this.props && this.props.open(this.props.props))
            }
            componentWillUnmount() {
                this.rootRef.current && ("mount" in this.props && this.props.unmount(this.rootRef.current), "open" in this.props && this.props.close())
            }
            render() {
                let {
                    hideRootHtmlElement: e = !1
                } = this.props, t = {
                    ref: this.rootRef,
                    ...this.props.rootProps,
                    ...this.props.component && {
                        "data-clerk-component": this.props.component
                    }
                };
                return rh.default.createElement(rh.default.Fragment, null, !e && rh.default.createElement("div", { ...t
                }), this.props.children)
            }
        },
        rU = e => {
            var t, r;
            return rh.default.createElement(rh.default.Fragment, null, null == (t = null == e ? void 0 : e.customPagesPortals) ? void 0 : t.map((e, t) => (0, rh.createElement)(e, {
                key: t
            })), null == (r = null == e ? void 0 : e.customMenuItemsPortals) ? void 0 : r.map((e, t) => (0, rh.createElement)(e, {
                key: t
            })))
        },
        rD = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountSignIn,
                unmount: e.unmountSignIn,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "SignIn",
            renderWhileLoading: !0
        }),
        rF = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountSignUp,
                unmount: e.unmountSignUp,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "SignUp",
            renderWhileLoading: !0
        });

    function rN({
        children: e
    }) {
        return rg(t8), rh.default.createElement(rh.default.Fragment, null, e)
    }

    function rj({
        children: e
    }) {
        return rg(t6), rh.default.createElement(rh.default.Fragment, null, e)
    }
    var rK = Object.assign(rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                },
                {
                    customPages: o,
                    customPagesPortals: l
                } = rk(n.children);
            return rh.default.createElement(rh.default.Fragment, null, i && r, rh.default.createElement(rA, {
                component: t,
                mount: e.mountUserProfile,
                unmount: e.unmountUserProfile,
                updateProps: e.__unstable__updateProps,
                props: { ...n,
                    customPages: o
                },
                rootProps: a
            }, rh.default.createElement(rU, {
                customPagesPortals: l
            })))
        }, {
            component: "UserProfile",
            renderWhileLoading: !0
        }), {
            Page: rN,
            Link: rj
        }),
        rV = (0, rh.createContext)({
            mount: () => {},
            unmount: () => {},
            updateProps: () => {}
        });

    function r$({
        children: e
    }) {
        return rg(ra), rh.default.createElement(rh.default.Fragment, null, e)
    }

    function rB({
        children: e
    }) {
        return rg(ro), rh.default.createElement(rh.default.Fragment, null, e)
    }

    function rW({
        children: e
    }) {
        return rg(rl), rh.default.createElement(rh.default.Fragment, null, e)
    }
    var rq = Object.assign(rf(({
        clerk: e,
        component: t,
        fallback: r,
        ...n
    }) => {
        var i;
        let a = "rendering" === rT(t) || !e.loaded,
            o = { ...a && r && {
                    style: {
                        display: "none"
                    }
                }
            },
            {
                customPages: l,
                customPagesPortals: s
            } = rk(n.children, {
                allowForAnyChildren: !!n.__experimental_asProvider
            }),
            u = { ...n.userProfileProps,
                customPages: l
            },
            {
                customMenuItems: d,
                customMenuItemsPortals: c
            } = (({
                children: e,
                MenuItemsComponent: t,
                MenuActionComponent: r,
                MenuLinkComponent: n,
                UserProfileLinkComponent: i,
                UserProfilePageComponent: a,
                reorderItemsLabels: o,
                allowForAnyChildren: l = !1
            }) => {
                let s = [],
                    u = [],
                    d = [];
                rh.default.Children.forEach(e, e => {
                    if (!rP(e, t) && !rP(e, i) && !rP(e, a)) {
                        e && !l && rg(rn);
                        return
                    }
                    if (rP(e, i) || rP(e, a)) return;
                    let {
                        props: u
                    } = e;
                    rh.default.Children.forEach(u.children, e => {
                        if (!rP(e, r) && !rP(e, n)) {
                            e && rg(ri);
                            return
                        }
                        let {
                            props: t
                        } = e, {
                            label: i,
                            labelIcon: a,
                            href: l,
                            onClick: u,
                            open: d
                        } = t;
                        if (rP(e, r))
                            if (rM(t, o)) s.push({
                                label: i
                            });
                            else {
                                if (!rR(t)) return void rg(ru);
                                let e = {
                                    label: i,
                                    labelIcon: a
                                };
                                if (void 0 !== u) s.push({ ...e,
                                    onClick: u
                                });
                                else {
                                    if (void 0 === d) return void rg("Custom menu item must have either onClick or open property");
                                    s.push({ ...e,
                                        open: d.startsWith("/") ? d : `/${d}`
                                    })
                                }
                            }
                        if (rP(e, n))
                            if (!rz(t)) return void rg(rs);
                            else s.push({
                                label: i,
                                labelIcon: a,
                                href: l
                            })
                    })
                });
                let c = [],
                    p = [];
                s.forEach((e, t) => {
                    rR(e) && c.push({
                        component: e.labelIcon,
                        id: t
                    }), rz(e) && p.push({
                        component: e.labelIcon,
                        id: t
                    })
                });
                let f = rE(c),
                    m = rE(p);
                return s.forEach((e, t) => {
                    if (rM(e, o) && u.push({
                            label: e.label
                        }), rR(e)) {
                        let {
                            portal: r,
                            mount: n,
                            unmount: i
                        } = f.find(e => e.id === t), a = {
                            label: e.label,
                            mountIcon: n,
                            unmountIcon: i
                        };
                        "onClick" in e ? a.onClick = e.onClick : "open" in e && (a.open = e.open), u.push(a), d.push(r)
                    }
                    if (rz(e)) {
                        let {
                            portal: r,
                            mount: n,
                            unmount: i
                        } = m.find(e => e.id === t);
                        u.push({
                            label: e.label,
                            href: e.href,
                            mountIcon: n,
                            unmountIcon: i
                        }), d.push(r)
                    }
                }), {
                    customMenuItems: u,
                    customMenuItemsPortals: d
                }
            })({
                children: n.children,
                reorderItemsLabels: ["manageAccount", "signOut"],
                MenuItemsComponent: r$,
                MenuActionComponent: rB,
                MenuLinkComponent: rW,
                UserProfileLinkComponent: rj,
                UserProfilePageComponent: rN,
                allowForAnyChildren: null != (i = ({
                    allowForAnyChildren: !!n.__experimental_asProvider
                }).allowForAnyChildren) && i
            }),
            p = rS(n.children),
            f = {
                mount: e.mountUserButton,
                unmount: e.unmountUserButton,
                updateProps: e.__unstable__updateProps,
                props: { ...n,
                    userProfileProps: u,
                    customMenuItems: d
                }
            };
        return rh.default.createElement(rV.Provider, {
            value: f
        }, a && r, e.loaded && rh.default.createElement(rA, {
            component: t,
            ...f,
            hideRootHtmlElement: !!n.__experimental_asProvider,
            rootProps: o
        }, n.__experimental_asProvider ? p : null, rh.default.createElement(rU, {
            customPagesPortals: s,
            customMenuItemsPortals: c
        })))
    }, {
        component: "UserButton",
        renderWhileLoading: !0
    }), {
        UserProfilePage: rN,
        UserProfileLink: rj,
        MenuItems: r$,
        Action: rB,
        Link: rW,
        __experimental_Outlet: function(e) {
            let t = (0, rh.useContext)(rV),
                r = { ...t,
                    props: { ...t.props,
                        ...e
                    }
                };
            return rh.default.createElement(rA, { ...r
            })
        }
    });

    function rG({
        children: e
    }) {
        return rg(t7), rh.default.createElement(rh.default.Fragment, null, e)
    }

    function rJ({
        children: e
    }) {
        return rg(t9), rh.default.createElement(rh.default.Fragment, null, e)
    }
    var rY = Object.assign(rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                },
                {
                    customPages: o,
                    customPagesPortals: l
                } = r_(n.children);
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountOrganizationProfile,
                unmount: e.unmountOrganizationProfile,
                updateProps: e.__unstable__updateProps,
                props: { ...n,
                    customPages: o
                },
                rootProps: a
            }, rh.default.createElement(rU, {
                customPagesPortals: l
            })))
        }, {
            component: "OrganizationProfile",
            renderWhileLoading: !0
        }), {
            Page: rG,
            Link: rJ
        }),
        rH = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountCreateOrganization,
                unmount: e.unmountCreateOrganization,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "CreateOrganization",
            renderWhileLoading: !0
        }),
        rQ = (0, rh.createContext)({
            mount: () => {},
            unmount: () => {},
            updateProps: () => {}
        }),
        rZ = Object.assign(rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                },
                {
                    customPages: o,
                    customPagesPortals: l
                } = r_(n.children, {
                    allowForAnyChildren: !!n.__experimental_asProvider
                }),
                s = { ...n.organizationProfileProps,
                    customPages: o
                },
                u = rS(n.children),
                d = {
                    mount: e.mountOrganizationSwitcher,
                    unmount: e.unmountOrganizationSwitcher,
                    updateProps: e.__unstable__updateProps,
                    props: { ...n,
                        organizationProfileProps: s
                    },
                    rootProps: a,
                    component: t
                };
            return e.__experimental_prefetchOrganizationSwitcher(), rh.default.createElement(rQ.Provider, {
                value: d
            }, rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, { ...d,
                hideRootHtmlElement: !!n.__experimental_asProvider
            }, n.__experimental_asProvider ? u : null, rh.default.createElement(rU, {
                customPagesPortals: l
            }))))
        }, {
            component: "OrganizationSwitcher",
            renderWhileLoading: !0
        }), {
            OrganizationProfilePage: rG,
            OrganizationProfileLink: rJ,
            __experimental_Outlet: function(e) {
                let t = (0, rh.useContext)(rQ),
                    r = { ...t,
                        props: { ...t.props,
                            ...e
                        }
                    };
                return rh.default.createElement(rA, { ...r
                })
            }
        }),
        rX = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountOrganizationList,
                unmount: e.unmountOrganizationList,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "OrganizationList",
            renderWhileLoading: !0
        }),
        r0 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                open: e.openGoogleOneTap,
                close: e.closeGoogleOneTap,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "GoogleOneTap",
            renderWhileLoading: !0
        }),
        r1 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountWaitlist,
                unmount: e.unmountWaitlist,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "Waitlist",
            renderWhileLoading: !0
        }),
        r3 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t, {
                    selector: '[data-component-status="ready"]'
                }) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountPricingTable,
                unmount: e.unmountPricingTable,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "PricingTable",
            renderWhileLoading: !0
        }),
        r2 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountAPIKeys,
                unmount: e.unmountAPIKeys,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "ApiKeys",
            renderWhileLoading: !0
        }),
        r4 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountUserAvatar,
                unmount: e.unmountUserAvatar,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "UserAvatar",
            renderWhileLoading: !0
        }),
        r5 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountTaskChooseOrganization,
                unmount: e.unmountTaskChooseOrganization,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "TaskChooseOrganization",
            renderWhileLoading: !0
        }),
        r8 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountTaskResetPassword,
                unmount: e.unmountTaskResetPassword,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "TaskResetPassword",
            renderWhileLoading: !0
        }),
        r6 = rf(({
            clerk: e,
            component: t,
            fallback: r,
            ...n
        }) => {
            let i = "rendering" === rT(t) || !e.loaded,
                a = { ...i && r && {
                        style: {
                            display: "none"
                        }
                    }
                };
            return rh.default.createElement(rh.default.Fragment, null, i && r, e.loaded && rh.default.createElement(rA, {
                component: t,
                mount: e.mountTaskSetupMFA,
                unmount: e.unmountTaskSetupMFA,
                updateProps: e.__unstable__updateProps,
                props: n,
                rootProps: a
            }))
        }, {
            component: "TaskSetupMFA",
            renderWhileLoading: !0
        });
    e.s(["APIKeys", 0, r2, "CreateOrganization", 0, rH, "GoogleOneTap", 0, r0, "OrganizationList", 0, rX, "OrganizationProfile", 0, rY, "OrganizationSwitcher", 0, rZ, "PricingTable", 0, r3, "SignIn", 0, rD, "SignUp", 0, rF, "TaskChooseOrganization", 0, r5, "TaskResetPassword", 0, r8, "TaskSetupMFA", 0, r6, "UserAvatar", 0, r4, "UserButton", 0, rq, "UserProfile", 0, rK, "Waitlist", 0, r1, "assertSingleChild", 0, e => t => {
        try {
            return rh.default.Children.only(e)
        } catch {
            return t3.throw(t5(t))
        }
    }, "isConstructor", 0, function(e) {
        return "function" == typeof e
    }, "normalizeWithDefaultValue", 0, (e, t) => (e || (e = t), "string" == typeof e && (e = rh.default.createElement("button", null, e)), e), "safeExecute", 0, e => (...t) => {
        if (e && "function" == typeof e) return e(...t)
    }, "withMaxAllowedInstancesGuard", 0, function(e, t, r) {
        let n = e.displayName || e.name || t || "Component",
            i = n => (! function(e, t, r = 1) {
                rh.default.useEffect(() => {
                    let n = rb.get(e) || 0;
                    return n == r ? t3.throw(t) : (rb.set(e, n + 1), () => {
                        rb.set(e, (rb.get(e) || 1) - 1)
                    })
                }, [])
            }(t, r), rh.default.createElement(e, { ...n
            }));
        return i.displayName = `withMaxAllowedInstancesGuard(${n})`, i
    }], 33917)
}]);