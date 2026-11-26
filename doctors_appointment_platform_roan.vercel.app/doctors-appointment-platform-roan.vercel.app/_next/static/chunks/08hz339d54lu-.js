(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 92448, 65829, 28651, 75369, 97651, e => {
    "use strict";
    e.i(47167);
    var t, i, r, s, n, o, l, a, h, u = e.i(65389),
        d = e.i(41383);
    let c = new Set,
        p = (e, t, i) => {
            let r = (0, d.isTestEnvironment)() || (0, d.isProductionEnvironment)(),
                s = i ? ? e;
            c.has(s) || r || (c.add(s), console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`))
        };
    var g = e.i(71645),
        k = e.i(27085),
        f = (0, u.withClerk)(({
            clerk: e,
            ...t
        }) => {
            let {
                client: i,
                session: r
            } = e, s = i.signedInSessions ? i.signedInSessions.length > 0 : i.activeSessions && i.activeSessions.length > 0;
            return g.default.useEffect(() => {
                null === r && s ? e.redirectToAfterSignOut() : e.redirectToSignIn(t)
            }, []), null
        }, "RedirectToSignIn"),
        m = (0, u.withClerk)(({
            clerk: e,
            ...t
        }) => (g.default.useEffect(() => {
            e.redirectToSignUp(t)
        }, []), null), "RedirectToSignUp"),
        v = (0, u.withClerk)(({
            clerk: e,
            ...t
        }) => (g.default.useEffect(() => {
            e.redirectToTasks(t)
        }, []), null), "RedirectToTasks"),
        C = (0, u.withClerk)(({
            clerk: e
        }) => (g.default.useEffect(() => {
            p("RedirectToUserProfile", "Use the `redirectToUserProfile()` method instead."), e.redirectToUserProfile()
        }, []), null), "RedirectToUserProfile"),
        _ = (0, u.withClerk)(({
            clerk: e
        }) => (g.default.useEffect(() => {
            p("RedirectToOrganizationProfile", "Use the `redirectToOrganizationProfile()` method instead."), e.redirectToOrganizationProfile()
        }, []), null), "RedirectToOrganizationProfile"),
        j = (0, u.withClerk)(({
            clerk: e
        }) => (g.default.useEffect(() => {
            p("RedirectToCreateOrganization", "Use the `redirectToCreateOrganization()` method instead."), e.redirectToCreateOrganization()
        }, []), null), "RedirectToCreateOrganization"),
        S = (0, u.withClerk)(({
            clerk: e,
            ...t
        }) => (g.default.useEffect(() => {
            e.handleRedirectCallback(t)
        }, []), null), "AuthenticateWithRedirectCallback");
    e.s(["AuthenticateWithRedirectCallback", 0, S, "ClerkDegraded", 0, ({
        children: e
    }) => ((0, u.useAssertWrappedByClerkProvider)("ClerkDegraded"), "degraded" !== (0, u.useIsomorphicClerkContext)().status) ? null : e, "ClerkFailed", 0, ({
        children: e
    }) => ((0, u.useAssertWrappedByClerkProvider)("ClerkFailed"), "error" !== (0, u.useIsomorphicClerkContext)().status) ? null : e, "ClerkLoaded", 0, ({
        children: e
    }) => ((0, u.useAssertWrappedByClerkProvider)("ClerkLoaded"), (0, u.useIsomorphicClerkContext)().loaded) ? e : null, "ClerkLoading", 0, ({
        children: e
    }) => ((0, u.useAssertWrappedByClerkProvider)("ClerkLoading"), "loading" !== (0, u.useIsomorphicClerkContext)().status) ? null : e, "MultisessionAppSupport", 0, ({
        children: e
    }) => {
        (0, u.useAssertWrappedByClerkProvider)("MultisessionAppSupport");
        let t = (0, k.useSessionContext)();
        return g.default.createElement(g.default.Fragment, {
            key: t ? t.id : "no-users"
        }, e)
    }, "Protect", 0, ({
        children: e,
        fallback: t,
        treatPendingAsSignedOut: i,
        ...r
    }) => {
        (0, u.useAssertWrappedByClerkProvider)("Protect");
        let {
            isLoaded: s,
            has: n,
            userId: o
        } = (0, u.useAuth)({
            treatPendingAsSignedOut: i
        });
        if (!s) return null;
        let l = null != t ? t : null;
        return o ? "function" == typeof r.condition ? r.condition(n) ? e : l : r.role || r.permission || r.feature || r.plan ? n(r) ? e : l : e : l
    }, "RedirectToCreateOrganization", 0, j, "RedirectToOrganizationProfile", 0, _, "RedirectToSignIn", 0, f, "RedirectToSignUp", 0, m, "RedirectToTasks", 0, v, "RedirectToUserProfile", 0, C, "SignedIn", 0, ({
        children: e,
        treatPendingAsSignedOut: t
    }) => {
        (0, u.useAssertWrappedByClerkProvider)("SignedIn");
        let {
            userId: i
        } = (0, u.useAuth)({
            treatPendingAsSignedOut: t
        });
        return i ? e : null
    }, "SignedOut", 0, ({
        children: e,
        treatPendingAsSignedOut: t
    }) => {
        (0, u.useAssertWrappedByClerkProvider)("SignedOut");
        let {
            userId: i
        } = (0, u.useAuth)({
            treatPendingAsSignedOut: t
        });
        return null === i ? e : null
    }], 65829);
    var w = e.i(33917),
        b = e => {
            throw TypeError(e)
        },
        P = (e, t, i) => t.has(e) || b("Cannot " + i),
        O = (e, t, i) => (P(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
        U = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i),
        y = (e, t, i, r) => (P(e, t, "write to private field"), r ? r.call(e, i) : t.set(e, i), i),
        T = (e, t, i) => (P(e, t, "access private method"), i),
        z = e.i(13039),
        M = e.i(28069);
    let A = {
            initialDelay: 125,
            maxDelayBetweenRetries: 0,
            factor: 2,
            shouldRetry: (e, t) => t < 5,
            retryImmediately: !1,
            jitter: !0
        },
        E = async e => new Promise(t => setTimeout(t, e)),
        I = (e, t) => t ? e * (1 + Math.random()) : e,
        W = async (e, t = {}) => {
            var i;
            let r, s = 0,
                {
                    shouldRetry: n,
                    initialDelay: o,
                    maxDelayBetweenRetries: l,
                    factor: a,
                    retryImmediately: h,
                    jitter: u,
                    onBeforeRetry: d
                } = { ...A,
                    ...t
                },
                c = (i = {
                    initialDelay: o,
                    maxDelayBetweenRetries: l,
                    factor: a,
                    jitter: u
                }, r = 0, async () => {
                    let e;
                    await E((e = I(e = i.initialDelay * Math.pow(i.factor, r), i.jitter), Math.min(i.maxDelayBetweenRetries || e, e))), r++
                });
            for (;;) try {
                return await e()
            } catch (e) {
                if (!n(e, ++s)) throw e;
                d && await d(s), h && 1 === s ? await E(I(100, u)) : await c()
            }
        };
    async function R(e = "", t) {
        let {
            async: i,
            defer: r,
            beforeLoad: s,
            crossOrigin: n,
            nonce: o
        } = t || {};
        return W(() => new Promise((t, l) => {
            e || l(Error("loadScript cannot be called without a src")), document && document.body || l(Error("loadScript cannot be called when document does not exist"));
            let a = document.createElement("script");
            n && a.setAttribute("crossorigin", n), a.async = i || !1, a.defer = r || !1, a.addEventListener("load", () => {
                a.remove(), t(a)
            }), a.addEventListener("error", t => {
                a.remove(), l(t.error ? ? Error(`failed to load script: ${e}`))
            }), a.src = e, a.nonce = o, s ? .(a), document.body.appendChild(a)
        }), {
            shouldRetry: (e, t) => t <= 5
        })
    }

    function N(e) {
        return e.startsWith("/")
    }
    e.i(93375);
    let L = "failed_to_load_clerk_js",
        x = "Failed to load Clerk",
        {
            isDevOrStagingUrl: B
        } = (0, M.createDevOrStagingUrlCache)(),
        F = (0, z.buildErrorThrower)({
            packageName: "@clerk/shared"
        });

    function D(e) {
        F.setPackageName({
            packageName: e
        })
    }

    function K() {
        if ("u" < typeof window || !window.Clerk) return !1;
        let e = window.Clerk;
        return "object" == typeof e && "function" == typeof e.load
    }

    function $(e, t) {
        return new Promise((i, r) => {
            let s = !1,
                n = (e, t) => {
                    clearTimeout(e), clearInterval(t)
                };
            t ? .addEventListener("error", () => {
                n(l, a), r(new z.ClerkRuntimeError(x, {
                    code: L
                }))
            });
            let o = () => {
                    !s && K() && (s = !0, n(l, a), i(null))
                },
                l = setTimeout(() => {
                    s || (s = !0, n(l, a), K() ? i(null) : r(new z.ClerkRuntimeError(x, {
                        code: "failed_to_load_clerk_js_timeout"
                    })))
                }, e);
            o();
            let a = setInterval(() => {
                s ? clearInterval(a) : o()
            }, 100)
        })
    }
    let V = async e => {
            let t = e ? .scriptLoadTimeout ? ? 15e3;
            if (K()) return null;
            if (!e ? .publishableKey) return F.throwMissingPublishableKeyError(), null;
            let i = G(e),
                r = document.querySelector("script[data-clerk-js-script]");
            if (r)
                if (function(e) {
                        if ("u" < typeof window || !window.performance) return !1;
                        let t = performance.getEntriesByName(e, "resource");
                        if (0 === t.length) return !1;
                        let i = t[t.length - 1];
                        if (0 === i.transferSize && 0 === i.decodedBodySize && (0 === i.responseEnd || i.responseEnd > 0 && i.responseStart > 0 || "responseStatus" in i && (i.responseStatus >= 400 || 0 === i.responseStatus))) return !0;
                        return !1
                    }(i)) r.remove();
                else try {
                    return await $(t, r), null
                } catch {
                    r.remove()
                }
            let s = $(t);
            return R(i, {
                async: !0,
                crossOrigin: "anonymous",
                nonce: e.nonce,
                beforeLoad: q(e)
            }).catch(e => {
                throw new z.ClerkRuntimeError(x + (e.message ? `, ${e.message}` : ""), {
                    code: L,
                    cause: e
                })
            }), s
        },
        G = e => {
            var t;
            let {
                clerkJSUrl: i,
                clerkJSVariant: r,
                clerkJSVersion: s,
                proxyUrl: n,
                domain: o,
                publishableKey: l
            } = e;
            if (i) return i;
            let a = "";
            if (n && (!n || (t = n, /^http(s)?:\/\//.test(t || "")) || N(n))) a = (!n ? "" : N(n) ? new URL(n, window.location.origin).toString() : n).replace(/http(s)?:\/\//, "");
            else a = o && !B((0, M.parsePublishableKey)(l) ? .frontendApi || "") ? function(e) {
                let t;
                if (!e) return "";
                if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
                else {
                    if (e.match(/\.clerk.accounts/)) return e;
                    t = /^(clerk\.)*/gi
                }
                return `clerk.${e.replace(t,"")}`
            }(o) : (0, M.parsePublishableKey)(l) ? .frontendApi || "";
            let h = r ? `${r.replace(/\.+$/,"")}.` : "",
                u = ((e, t = "5.125.7") => {
                    let i;
                    if (e) return e;
                    let r = (i = t, i.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/) ? .[1]);
                    if (r) return "snapshot" === r ? "5.125.7" : r;
                    return t.trim().replace(/^v/, "").split(".")[0]
                })(s);
            return `https://${a}/npm/@clerk/clerk-js@${u}/dist/clerk.${h}browser.js`
        },
        J = e => {
            let t = {};
            return e.publishableKey && (t["data-clerk-publishable-key"] = e.publishableKey), e.proxyUrl && (t["data-clerk-proxy-url"] = e.proxyUrl), e.domain && (t["data-clerk-domain"] = e.domain), e.nonce && (t.nonce = e.nonce), t
        },
        q = e => t => {
            let i = J(e);
            for (let e in i) t.setAttribute(e, i[e])
        };
    e.s(["buildClerkJsScriptAttributes", 0, J, "clerkJsScriptUrl", 0, G, "loadClerkJsScript", 0, V, "setClerkJsLoadingErrorPackageName", 0, D], 28651);

    function H() {
        return "u" > typeof window
    }
    RegExp("bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush", "i"), e.s(["inBrowser", 0, H], 75369);
    let X = (e, t, i, r, s) => {
            let {
                notify: n
            } = s || {}, o = e.get(i);
            o || (o = [], e.set(i, o)), o.push(r), n && t.has(i) && r(t.get(i))
        },
        Q = (e, t, i) => (e.get(t) || []).map(e => e(i)),
        Y = (e, t, i) => {
            let r = e.get(t);
            r && (i ? r.splice(r.indexOf(i) >>> 0, 1) : e.set(t, []))
        },
        Z = "status";

    function ee(e, t, i) {
        return "function" == typeof e ? e(t) : void 0 !== e ? e : void 0 !== i ? i : void 0
    }
    "u" > typeof window && !window.global && (window.global = e.g);
    var et = (0, u.withClerk)(({
            clerk: e,
            children: t,
            ...i
        }) => {
            let {
                appearance: r,
                signUpFallbackRedirectUrl: s,
                forceRedirectUrl: n,
                fallbackRedirectUrl: o,
                signUpForceRedirectUrl: l,
                mode: a,
                initialValues: h,
                withSignUp: u,
                oauthFlow: d,
                ...c
            } = i;
            t = (0, w.normalizeWithDefaultValue)(t, "Sign in");
            let p = (0, w.assertSingleChild)(t)("SignInButton"),
                k = async t => {
                    let i;
                    return p && "object" == typeof p && "props" in p && await (0, w.safeExecute)(p.props.onClick)(t), i = {
                        forceRedirectUrl: n,
                        fallbackRedirectUrl: o,
                        signUpFallbackRedirectUrl: s,
                        signUpForceRedirectUrl: l,
                        initialValues: h,
                        withSignUp: u,
                        oauthFlow: d
                    }, "modal" === a ? e.openSignIn({ ...i,
                        appearance: r
                    }) : e.redirectToSignIn({ ...i,
                        signInFallbackRedirectUrl: o,
                        signInForceRedirectUrl: n
                    })
                },
                f = { ...c,
                    onClick: k
                };
            return g.default.cloneElement(p, f)
        }, {
            component: "SignInButton",
            renderWhileLoading: !0
        }),
        ei = (0, u.withClerk)(({
            clerk: e,
            children: t,
            ...i
        }) => {
            let {
                redirectUrl: r,
                ...s
            } = i;
            t = (0, w.normalizeWithDefaultValue)(t, "Sign in with Metamask");
            let n = (0, w.assertSingleChild)(t)("SignInWithMetamaskButton"),
                o = async () => {
                    !async function() {
                        await e.authenticateWithMetamask({
                            redirectUrl: r || void 0
                        })
                    }()
                },
                l = async e => (await (0, w.safeExecute)(n.props.onClick)(e), o()),
                a = { ...s,
                    onClick: l
                };
            return g.default.cloneElement(n, a)
        }, {
            component: "SignInWithMetamask",
            renderWhileLoading: !0
        }),
        er = (0, u.withClerk)(({
            clerk: e,
            children: t,
            ...i
        }) => {
            let {
                redirectUrl: r = "/",
                signOutOptions: s,
                ...n
            } = i;
            t = (0, w.normalizeWithDefaultValue)(t, "Sign out");
            let o = (0, w.assertSingleChild)(t)("SignOutButton"),
                l = async t => (await (0, w.safeExecute)(o.props.onClick)(t), e.signOut({
                    redirectUrl: r,
                    ...s
                })),
                a = { ...n,
                    onClick: l
                };
            return g.default.cloneElement(o, a)
        }, {
            component: "SignOutButton",
            renderWhileLoading: !0
        }),
        es = (0, u.withClerk)(({
            clerk: e,
            children: t,
            ...i
        }) => {
            let {
                appearance: r,
                unsafeMetadata: s,
                fallbackRedirectUrl: n,
                forceRedirectUrl: o,
                signInFallbackRedirectUrl: l,
                signInForceRedirectUrl: a,
                mode: h,
                initialValues: u,
                oauthFlow: d,
                ...c
            } = i;
            t = (0, w.normalizeWithDefaultValue)(t, "Sign up");
            let p = (0, w.assertSingleChild)(t)("SignUpButton"),
                k = async t => {
                    let i;
                    return p && "object" == typeof p && "props" in p && await (0, w.safeExecute)(p.props.onClick)(t), i = {
                        fallbackRedirectUrl: n,
                        forceRedirectUrl: o,
                        signInFallbackRedirectUrl: l,
                        signInForceRedirectUrl: a,
                        initialValues: u,
                        oauthFlow: d
                    }, "modal" === h ? e.openSignUp({ ...i,
                        appearance: r,
                        unsafeMetadata: s
                    }) : e.redirectToSignUp({ ...i,
                        signUpFallbackRedirectUrl: n,
                        signUpForceRedirectUrl: o
                    })
                },
                f = { ...c,
                    onClick: k
                };
            return g.default.cloneElement(p, f)
        }, {
            component: "SignUpButton",
            renderWhileLoading: !0
        }),
        en = class {
            constructor(e) {
                this.isomorphicClerk = e, this.signInSignalProxy = this.buildSignInProxy(), this.signUpSignalProxy = this.buildSignUpProxy()
            }
            signInSignal() {
                return this.signInSignalProxy
            }
            signUpSignal() {
                return this.signUpSignalProxy
            }
            buildSignInProxy() {
                let e = this.gateProperty.bind(this),
                    t = () => this.client.signIn.__internal_future;
                return {
                    errors: {
                        fields: {
                            identifier: null,
                            password: null,
                            code: null
                        },
                        raw: null,
                        global: null
                    },
                    fetchStatus: "idle",
                    signIn: {
                        status: "needs_identifier",
                        availableStrategies: [],
                        isTransferable: !1,
                        get id() {
                            return e(t, "id", void 0)
                        },
                        get supportedFirstFactors() {
                            return e(t, "supportedFirstFactors", [])
                        },
                        get supportedSecondFactors() {
                            return e(t, "supportedSecondFactors", [])
                        },
                        get secondFactorVerification() {
                            return e(t, "secondFactorVerification", {
                                status: null,
                                error: null,
                                expireAt: null,
                                externalVerificationRedirectURL: null,
                                nonce: null,
                                attempts: null,
                                message: null,
                                strategy: null,
                                verifiedAtClient: null,
                                verifiedFromTheSameClient: () => !1,
                                __internal_toSnapshot: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                },
                                pathRoot: "",
                                reload: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                            })
                        },
                        get identifier() {
                            return e(t, "identifier", null)
                        },
                        get createdSessionId() {
                            return e(t, "createdSessionId", null)
                        },
                        get userData() {
                            return e(t, "userData", {})
                        },
                        get firstFactorVerification() {
                            return e(t, "firstFactorVerification", {
                                status: null,
                                error: null,
                                expireAt: null,
                                externalVerificationRedirectURL: null,
                                nonce: null,
                                attempts: null,
                                message: null,
                                strategy: null,
                                verifiedAtClient: null,
                                verifiedFromTheSameClient: () => !1,
                                __internal_toSnapshot: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                },
                                pathRoot: "",
                                reload: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                            })
                        },
                        create: this.gateMethod(t, "create"),
                        password: this.gateMethod(t, "password"),
                        sso: this.gateMethod(t, "sso"),
                        finalize: this.gateMethod(t, "finalize"),
                        emailCode: this.wrapMethods(() => t().emailCode, ["sendCode", "verifyCode"]),
                        emailLink: this.wrapStruct(() => t().emailLink, ["sendLink", "waitForVerification"], ["verification"], {
                            verification: null
                        }),
                        resetPasswordEmailCode: this.wrapMethods(() => t().resetPasswordEmailCode, ["sendCode", "verifyCode", "submitPassword"]),
                        phoneCode: this.wrapMethods(() => t().phoneCode, ["sendCode", "verifyCode"]),
                        mfa: this.wrapMethods(() => t().mfa, ["sendPhoneCode", "verifyPhoneCode", "verifyTOTP", "verifyBackupCode"]),
                        ticket: this.gateMethod(t, "ticket"),
                        passkey: this.gateMethod(t, "passkey"),
                        web3: this.gateMethod(t, "web3")
                    }
                }
            }
            buildSignUpProxy() {
                let e = this.gateProperty.bind(this),
                    t = this.gateMethod.bind(this),
                    i = this.wrapMethods.bind(this),
                    r = () => this.client.signUp.__internal_future;
                return {
                    errors: {
                        fields: {
                            firstName: null,
                            lastName: null,
                            emailAddress: null,
                            phoneNumber: null,
                            password: null,
                            username: null,
                            code: null,
                            captcha: null,
                            legalAccepted: null
                        },
                        raw: null,
                        global: null
                    },
                    fetchStatus: "idle",
                    signUp: {
                        get id() {
                            return e(r, "id", void 0)
                        },
                        get requiredFields() {
                            return e(r, "requiredFields", [])
                        },
                        get optionalFields() {
                            return e(r, "optionalFields", [])
                        },
                        get missingFields() {
                            return e(r, "missingFields", [])
                        },
                        get username() {
                            return e(r, "username", null)
                        },
                        get firstName() {
                            return e(r, "firstName", null)
                        },
                        get lastName() {
                            return e(r, "lastName", null)
                        },
                        get emailAddress() {
                            return e(r, "emailAddress", null)
                        },
                        get phoneNumber() {
                            return e(r, "phoneNumber", null)
                        },
                        get web3Wallet() {
                            return e(r, "web3Wallet", null)
                        },
                        get hasPassword() {
                            return e(r, "hasPassword", !1)
                        },
                        get unsafeMetadata() {
                            return e(r, "unsafeMetadata", {})
                        },
                        get createdSessionId() {
                            return e(r, "createdSessionId", null)
                        },
                        get createdUserId() {
                            return e(r, "createdUserId", null)
                        },
                        get abandonAt() {
                            return e(r, "abandonAt", null)
                        },
                        get legalAcceptedAt() {
                            return e(r, "legalAcceptedAt", null)
                        },
                        get locale() {
                            return e(r, "locale", null)
                        },
                        get status() {
                            return e(r, "status", "missing_requirements")
                        },
                        get unverifiedFields() {
                            return e(r, "unverifiedFields", [])
                        },
                        get isTransferable() {
                            return e(r, "isTransferable", !1)
                        },
                        create: t(r, "create"),
                        update: t(r, "update"),
                        sso: t(r, "sso"),
                        password: t(r, "password"),
                        ticket: t(r, "ticket"),
                        web3: t(r, "web3"),
                        finalize: t(r, "finalize"),
                        verifications: i(() => r().verifications, ["sendEmailCode", "verifyEmailCode", "sendPhoneCode", "verifyPhoneCode"])
                    }
                }
            }
            __internal_effect(e) {
                throw Error("__internal_effect called before Clerk is loaded")
            }
            __internal_computed(e) {
                throw Error("__internal_computed called before Clerk is loaded")
            }
            get client() {
                let e = this.isomorphicClerk.client;
                if (!e) throw Error("Clerk client not ready");
                return e
            }
            gateProperty(e, t, i) {
                return H() && this.isomorphicClerk.loaded ? e()[t] : i
            }
            gateMethod(e, t) {
                return async (...i) => {
                    if (!H()) return u.errorThrower.throw(`Attempted to call a method (${t}) that is not supported on the server.`);
                    this.isomorphicClerk.loaded || await new Promise(e => this.isomorphicClerk.addOnLoaded(e));
                    let r = e();
                    return r[t].apply(r, i)
                }
            }
            wrapMethods(e, t) {
                return Object.fromEntries(t.map(t => [t, this.gateMethod(e, t)]))
            }
            wrapStruct(e, t, i, r) {
                let s = {};
                for (let i of t) s[i] = this.gateMethod(e, i);
                for (let t of i) Object.defineProperty(s, t, {
                    get: () => this.gateProperty(e, t, r[t]),
                    enumerable: !0
                });
                return s
            }
        };
    void 0 === globalThis.__BUILD_DISABLE_RHC__ && (globalThis.__BUILD_DISABLE_RHC__ = !1);
    var eo = {
            name: "@clerk/clerk-react",
            version: "5.61.4",
            environment: "production"
        },
        el = class d {
            constructor(e) {
                U(this, a), this.clerkjs = null, this.preopenOneTap = null, this.preopenUserVerification = null, this.preopenEnableOrganizationsPrompt = null, this.preopenSignIn = null, this.preopenCheckout = null, this.preopenPlanDetails = null, this.preopenSubscriptionDetails = null, this.preopenSignUp = null, this.preopenUserProfile = null, this.preopenOrganizationProfile = null, this.preopenCreateOrganization = null, this.preOpenWaitlist = null, this.premountSignInNodes = new Map, this.premountSignUpNodes = new Map, this.premountUserAvatarNodes = new Map, this.premountUserProfileNodes = new Map, this.premountUserButtonNodes = new Map, this.premountOrganizationProfileNodes = new Map, this.premountCreateOrganizationNodes = new Map, this.premountOrganizationSwitcherNodes = new Map, this.premountOrganizationListNodes = new Map, this.premountMethodCalls = new Map, this.premountWaitlistNodes = new Map, this.premountPricingTableNodes = new Map, this.premountAPIKeysNodes = new Map, this.premountOAuthConsentNodes = new Map, this.premountTaskChooseOrganizationNodes = new Map, this.premountTaskResetPasswordNodes = new Map, this.premountTaskSetupMFANodes = new Map, this.premountAddListenerCalls = new Map, this.loadedListeners = [], U(this, t, "loading"), U(this, i), U(this, r), U(this, s), U(this, n, (() => {
                    let e, t, i;
                    return e = new Map, t = new Map, i = new Map, {
                        on: (...i) => X(e, t, ...i),
                        prioritizedOn: (...e) => X(i, t, ...e),
                        emit: (r, s) => {
                            t.set(r, s), Q(i, r, s), Q(e, r, s)
                        },
                        off: (...t) => Y(e, ...t),
                        prioritizedOff: (...e) => Y(i, ...e),
                        internal: {
                            retrieveListeners: t => e.get(t) || []
                        }
                    }
                })()), U(this, o), this.buildSignInUrl = e => {
                    let t = () => {
                        var t;
                        return (null == (t = this.clerkjs) ? void 0 : t.buildSignInUrl(e)) || ""
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("buildSignInUrl", t)
                }, this.buildSignUpUrl = e => {
                    let t = () => {
                        var t;
                        return (null == (t = this.clerkjs) ? void 0 : t.buildSignUpUrl(e)) || ""
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("buildSignUpUrl", t)
                }, this.buildAfterSignInUrl = (...e) => {
                    let t = () => {
                        var t;
                        return (null == (t = this.clerkjs) ? void 0 : t.buildAfterSignInUrl(...e)) || ""
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("buildAfterSignInUrl", t)
                }, this.buildAfterSignUpUrl = (...e) => {
                    let t = () => {
                        var t;
                        return (null == (t = this.clerkjs) ? void 0 : t.buildAfterSignUpUrl(...e)) || ""
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("buildAfterSignUpUrl", t)
                }, this.buildAfterSignOutUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildAfterSignOutUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildAfterSignOutUrl", e)
                }, this.buildNewSubscriptionRedirectUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildNewSubscriptionRedirectUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl", e)
                }, this.buildAfterMultiSessionSingleSignOutUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildAfterMultiSessionSingleSignOutUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", e)
                }, this.buildUserProfileUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildUserProfileUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildUserProfileUrl", e)
                }, this.buildCreateOrganizationUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildCreateOrganizationUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildCreateOrganizationUrl", e)
                }, this.buildOrganizationProfileUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildOrganizationProfileUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildOrganizationProfileUrl", e)
                }, this.buildWaitlistUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildWaitlistUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildWaitlistUrl", e)
                }, this.buildTasksUrl = () => {
                    let e = () => {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.buildTasksUrl()) || ""
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("buildTasksUrl", e)
                }, this.buildUrlWithAuth = e => {
                    let t = () => {
                        var t;
                        return (null == (t = this.clerkjs) ? void 0 : t.buildUrlWithAuth(e)) || ""
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("buildUrlWithAuth", t)
                }, this.handleUnauthenticated = async () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.handleUnauthenticated()
                    };
                    this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("handleUnauthenticated", e)
                }, this.on = (...e) => {
                    var t;
                    if (null == (t = this.clerkjs) ? void 0 : t.on) return this.clerkjs.on(...e);
                    O(this, n).on(...e)
                }, this.off = (...e) => {
                    var t;
                    if (null == (t = this.clerkjs) ? void 0 : t.off) return this.clerkjs.off(...e);
                    O(this, n).off(...e)
                }, this.addOnLoaded = e => {
                    this.loadedListeners.push(e), this.loaded && this.emitLoaded()
                }, this.emitLoaded = () => {
                    this.loadedListeners.forEach(e => e()), this.loadedListeners = []
                }, this.beforeLoad = e => {
                    if (!e) throw Error("Failed to hydrate latest Clerk JS")
                }, this.hydrateClerkJS = e => {
                    var t, i;
                    if (!e) throw Error("Failed to hydrate latest Clerk JS");
                    return this.clerkjs = e, this.premountMethodCalls.forEach(e => e()), this.premountAddListenerCalls.forEach((t, i) => {
                        t.nativeUnsubscribe = e.addListener(i)
                    }), null == (t = O(this, n).internal.retrieveListeners("status")) || t.forEach(e => {
                        this.on("status", e, {
                            notify: !0
                        })
                    }), null == (i = O(this, n).internal.retrieveListeners("queryClientStatus")) || i.forEach(e => {
                        this.on("queryClientStatus", e, {
                            notify: !0
                        })
                    }), null !== this.preopenSignIn && e.openSignIn(this.preopenSignIn), null !== this.preopenCheckout && e.__internal_openCheckout(this.preopenCheckout), null !== this.preopenPlanDetails && e.__internal_openPlanDetails(this.preopenPlanDetails), null !== this.preopenSubscriptionDetails && e.__internal_openSubscriptionDetails(this.preopenSubscriptionDetails), null !== this.preopenSignUp && e.openSignUp(this.preopenSignUp), null !== this.preopenUserProfile && e.openUserProfile(this.preopenUserProfile), null !== this.preopenUserVerification && e.__internal_openReverification(this.preopenUserVerification), null !== this.preopenOneTap && e.openGoogleOneTap(this.preopenOneTap), null !== this.preopenOrganizationProfile && e.openOrganizationProfile(this.preopenOrganizationProfile), null !== this.preopenCreateOrganization && e.openCreateOrganization(this.preopenCreateOrganization), null !== this.preOpenWaitlist && e.openWaitlist(this.preOpenWaitlist), this.preopenEnableOrganizationsPrompt && e.__internal_openEnableOrganizationsPrompt(this.preopenEnableOrganizationsPrompt), this.premountSignInNodes.forEach((t, i) => {
                        e.mountSignIn(i, t)
                    }), this.premountSignUpNodes.forEach((t, i) => {
                        e.mountSignUp(i, t)
                    }), this.premountUserProfileNodes.forEach((t, i) => {
                        e.mountUserProfile(i, t)
                    }), this.premountUserAvatarNodes.forEach((t, i) => {
                        e.mountUserAvatar(i, t)
                    }), this.premountUserButtonNodes.forEach((t, i) => {
                        e.mountUserButton(i, t)
                    }), this.premountOrganizationListNodes.forEach((t, i) => {
                        e.mountOrganizationList(i, t)
                    }), this.premountWaitlistNodes.forEach((t, i) => {
                        e.mountWaitlist(i, t)
                    }), this.premountPricingTableNodes.forEach((t, i) => {
                        e.mountPricingTable(i, t)
                    }), this.premountAPIKeysNodes.forEach((t, i) => {
                        e.mountAPIKeys(i, t)
                    }), this.premountOAuthConsentNodes.forEach((t, i) => {
                        e.__internal_mountOAuthConsent(i, t)
                    }), this.premountTaskChooseOrganizationNodes.forEach((t, i) => {
                        e.mountTaskChooseOrganization(i, t)
                    }), this.premountTaskResetPasswordNodes.forEach((t, i) => {
                        e.mountTaskResetPassword(i, t)
                    }), this.premountTaskSetupMFANodes.forEach((t, i) => {
                        e.mountTaskSetupMFA(i, t)
                    }), void 0 === this.clerkjs.status && O(this, n).emit(Z, "ready"), this.emitLoaded(), this.clerkjs
                }, this.__experimental_checkout = (...e) => {
                    var t;
                    return null == (t = this.clerkjs) ? void 0 : t.__experimental_checkout(...e)
                }, this.__unstable__updateProps = async e => {
                    let t = await T(this, a, h).call(this);
                    if (t && "__unstable__updateProps" in t) return t.__unstable__updateProps(e)
                }, this.setActive = e => this.clerkjs ? this.clerkjs.setActive(e) : Promise.reject(), this.openSignIn = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openSignIn(e) : this.preopenSignIn = e
                }, this.closeSignIn = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeSignIn() : this.preopenSignIn = null
                }, this.__internal_openCheckout = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_openCheckout(e) : this.preopenCheckout = e
                }, this.__internal_closeCheckout = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_closeCheckout() : this.preopenCheckout = null
                }, this.__internal_openPlanDetails = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_openPlanDetails(e) : this.preopenPlanDetails = e
                }, this.__internal_closePlanDetails = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_closePlanDetails() : this.preopenPlanDetails = null
                }, this.__internal_openSubscriptionDetails = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_openSubscriptionDetails(e) : this.preopenSubscriptionDetails = null != e ? e : null
                }, this.__internal_closeSubscriptionDetails = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_closeSubscriptionDetails() : this.preopenSubscriptionDetails = null
                }, this.__internal_openReverification = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_openReverification(e) : this.preopenUserVerification = e
                }, this.__internal_closeReverification = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_closeReverification() : this.preopenUserVerification = null
                }, this.__internal_openEnableOrganizationsPrompt = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_openEnableOrganizationsPrompt(e) : this.preopenEnableOrganizationsPrompt = e
                }, this.__internal_closeEnableOrganizationsPrompt = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_closeEnableOrganizationsPrompt() : this.preopenEnableOrganizationsPrompt = null
                }, this.openGoogleOneTap = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openGoogleOneTap(e) : this.preopenOneTap = e
                }, this.closeGoogleOneTap = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeGoogleOneTap() : this.preopenOneTap = null
                }, this.openUserProfile = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openUserProfile(e) : this.preopenUserProfile = e
                }, this.closeUserProfile = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeUserProfile() : this.preopenUserProfile = null
                }, this.openOrganizationProfile = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openOrganizationProfile(e) : this.preopenOrganizationProfile = e
                }, this.closeOrganizationProfile = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeOrganizationProfile() : this.preopenOrganizationProfile = null
                }, this.openCreateOrganization = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openCreateOrganization(e) : this.preopenCreateOrganization = e
                }, this.closeCreateOrganization = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeCreateOrganization() : this.preopenCreateOrganization = null
                }, this.openWaitlist = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openWaitlist(e) : this.preOpenWaitlist = e
                }, this.closeWaitlist = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeWaitlist() : this.preOpenWaitlist = null
                }, this.openSignUp = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.openSignUp(e) : this.preopenSignUp = e
                }, this.closeSignUp = () => {
                    this.clerkjs && this.loaded ? this.clerkjs.closeSignUp() : this.preopenSignUp = null
                }, this.mountSignIn = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountSignIn(e, t) : this.premountSignInNodes.set(e, t)
                }, this.unmountSignIn = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountSignIn(e) : this.premountSignInNodes.delete(e)
                }, this.mountSignUp = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountSignUp(e, t) : this.premountSignUpNodes.set(e, t)
                }, this.unmountSignUp = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountSignUp(e) : this.premountSignUpNodes.delete(e)
                }, this.mountUserAvatar = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountUserAvatar(e, t) : this.premountUserAvatarNodes.set(e, t)
                }, this.unmountUserAvatar = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountUserAvatar(e) : this.premountUserAvatarNodes.delete(e)
                }, this.mountUserProfile = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountUserProfile(e, t) : this.premountUserProfileNodes.set(e, t)
                }, this.unmountUserProfile = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountUserProfile(e) : this.premountUserProfileNodes.delete(e)
                }, this.mountOrganizationProfile = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationProfile(e, t) : this.premountOrganizationProfileNodes.set(e, t)
                }, this.unmountOrganizationProfile = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationProfile(e) : this.premountOrganizationProfileNodes.delete(e)
                }, this.mountCreateOrganization = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountCreateOrganization(e, t) : this.premountCreateOrganizationNodes.set(e, t)
                }, this.unmountCreateOrganization = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountCreateOrganization(e) : this.premountCreateOrganizationNodes.delete(e)
                }, this.mountOrganizationSwitcher = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationSwitcher(e, t) : this.premountOrganizationSwitcherNodes.set(e, t)
                }, this.unmountOrganizationSwitcher = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationSwitcher(e) : this.premountOrganizationSwitcherNodes.delete(e)
                }, this.__experimental_prefetchOrganizationSwitcher = () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.__experimental_prefetchOrganizationSwitcher()
                    };
                    this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", e)
                }, this.mountOrganizationList = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationList(e, t) : this.premountOrganizationListNodes.set(e, t)
                }, this.unmountOrganizationList = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationList(e) : this.premountOrganizationListNodes.delete(e)
                }, this.mountUserButton = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountUserButton(e, t) : this.premountUserButtonNodes.set(e, t)
                }, this.unmountUserButton = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountUserButton(e) : this.premountUserButtonNodes.delete(e)
                }, this.mountWaitlist = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountWaitlist(e, t) : this.premountWaitlistNodes.set(e, t)
                }, this.unmountWaitlist = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountWaitlist(e) : this.premountWaitlistNodes.delete(e)
                }, this.mountPricingTable = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountPricingTable(e, t) : this.premountPricingTableNodes.set(e, t)
                }, this.unmountPricingTable = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountPricingTable(e) : this.premountPricingTableNodes.delete(e)
                }, this.mountAPIKeys = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountAPIKeys(e, t) : this.premountAPIKeysNodes.set(e, t)
                }, this.unmountAPIKeys = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountAPIKeys(e) : this.premountAPIKeysNodes.delete(e)
                }, this.__internal_mountOAuthConsent = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_mountOAuthConsent(e, t) : this.premountOAuthConsentNodes.set(e, t)
                }, this.__internal_unmountOAuthConsent = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.__internal_unmountOAuthConsent(e) : this.premountOAuthConsentNodes.delete(e)
                }, this.mountTaskChooseOrganization = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountTaskChooseOrganization(e, t) : this.premountTaskChooseOrganizationNodes.set(e, t)
                }, this.unmountTaskChooseOrganization = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountTaskChooseOrganization(e) : this.premountTaskChooseOrganizationNodes.delete(e)
                }, this.mountTaskResetPassword = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountTaskResetPassword(e, t) : this.premountTaskResetPasswordNodes.set(e, t)
                }, this.unmountTaskResetPassword = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountTaskResetPassword(e) : this.premountTaskResetPasswordNodes.delete(e)
                }, this.mountTaskSetupMFA = (e, t) => {
                    this.clerkjs && this.loaded ? this.clerkjs.mountTaskSetupMFA(e, t) : this.premountTaskSetupMFANodes.set(e, t)
                }, this.unmountTaskSetupMFA = e => {
                    this.clerkjs && this.loaded ? this.clerkjs.unmountTaskSetupMFA(e) : this.premountTaskSetupMFANodes.delete(e)
                }, this.addListener = e => {
                    if (this.clerkjs) return this.clerkjs.addListener(e); {
                        let t = () => {
                            var t;
                            let i = this.premountAddListenerCalls.get(e);
                            i && (null == (t = i.nativeUnsubscribe) || t.call(i), this.premountAddListenerCalls.delete(e))
                        };
                        return this.premountAddListenerCalls.set(e, {
                            unsubscribe: t,
                            nativeUnsubscribe: void 0
                        }), t
                    }
                }, this.navigate = e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.navigate(e)
                    };
                    this.clerkjs && this.loaded ? t() : this.premountMethodCalls.set("navigate", t)
                }, this.redirectWithAuth = async (...e) => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.redirectWithAuth(...e)
                    };
                    return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectWithAuth", t)
                }, this.redirectToSignIn = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.redirectToSignIn(e)
                    };
                    return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToSignIn", t)
                }, this.redirectToSignUp = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.redirectToSignUp(e)
                    };
                    return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToSignUp", t)
                }, this.redirectToUserProfile = async () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToUserProfile()
                    };
                    return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToUserProfile", e)
                }, this.redirectToAfterSignUp = () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignUp()
                    };
                    if (this.clerkjs && this.loaded) return e();
                    this.premountMethodCalls.set("redirectToAfterSignUp", e)
                }, this.redirectToAfterSignIn = () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignIn()
                    };
                    this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("redirectToAfterSignIn", e)
                }, this.redirectToAfterSignOut = () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignOut()
                    };
                    this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("redirectToAfterSignOut", e)
                }, this.redirectToOrganizationProfile = async () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToOrganizationProfile()
                    };
                    return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToOrganizationProfile", e)
                }, this.redirectToCreateOrganization = async () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToCreateOrganization()
                    };
                    return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToCreateOrganization", e)
                }, this.redirectToWaitlist = async () => {
                    let e = () => {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.redirectToWaitlist()
                    };
                    return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToWaitlist", e)
                }, this.redirectToTasks = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.redirectToTasks(e)
                    };
                    return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToTasks", t)
                }, this.handleRedirectCallback = async e => {
                    var t;
                    let i = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.handleRedirectCallback(e)
                    };
                    this.clerkjs && this.loaded ? null == (t = i()) || t.catch(() => {}) : this.premountMethodCalls.set("handleRedirectCallback", i)
                }, this.handleGoogleOneTapCallback = async (e, t) => {
                    var i;
                    let r = () => {
                        var i;
                        return null == (i = this.clerkjs) ? void 0 : i.handleGoogleOneTapCallback(e, t)
                    };
                    this.clerkjs && this.loaded ? null == (i = r()) || i.catch(() => {}) : this.premountMethodCalls.set("handleGoogleOneTapCallback", r)
                }, this.handleEmailLinkVerification = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.handleEmailLinkVerification(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("handleEmailLinkVerification", t)
                }, this.authenticateWithMetamask = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithMetamask(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithMetamask", t)
                }, this.authenticateWithCoinbaseWallet = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithCoinbaseWallet(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithCoinbaseWallet", t)
                }, this.authenticateWithBase = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithBase(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithBase", t)
                }, this.authenticateWithOKXWallet = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithOKXWallet(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithOKXWallet", t)
                }, this.authenticateWithSolana = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithSolana(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithSolana", t)
                }, this.authenticateWithWeb3 = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.authenticateWithWeb3(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("authenticateWithWeb3", t)
                }, this.authenticateWithGoogleOneTap = async e => (await T(this, a, h).call(this)).authenticateWithGoogleOneTap(e), this.__internal_loadStripeJs = async () => (await T(this, a, h).call(this)).__internal_loadStripeJs(), this.createOrganization = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.createOrganization(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("createOrganization", t)
                }, this.getOrganization = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.getOrganization(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("getOrganization", t)
                }, this.joinWaitlist = async e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.joinWaitlist(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("joinWaitlist", t)
                }, this.signOut = async (...e) => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.signOut(...e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("signOut", t)
                }, this.__internal_attemptToEnableEnvironmentSetting = e => {
                    let t = () => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.__internal_attemptToEnableEnvironmentSetting(e)
                    };
                    if (this.clerkjs && this.loaded) return t();
                    this.premountMethodCalls.set("__internal_attemptToEnableEnvironmentSetting", t)
                };
                const {
                    Clerk: l = null,
                    publishableKey: u
                } = e || {};
                y(this, s, u), y(this, r, null == e ? void 0 : e.proxyUrl), y(this, i, null == e ? void 0 : e.domain), this.options = e, this.Clerk = l, this.mode = H() ? "browser" : "server", y(this, o, new en(this)), this.options.sdkMetadata || (this.options.sdkMetadata = eo), O(this, n).emit(Z, "loading"), O(this, n).prioritizedOn(Z, e => y(this, t, e)), O(this, s) && this.loadClerkJS()
            }
            get publishableKey() {
                return O(this, s)
            }
            get loaded() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.loaded) || !1
            }
            get status() {
                var e;
                return this.clerkjs ? (null == (e = this.clerkjs) ? void 0 : e.status) || (this.clerkjs.loaded ? "ready" : "loading") : O(this, t)
            }
            static getOrCreateInstance(e) {
                return H() && O(this, l) && (!e.Clerk || O(this, l).Clerk === e.Clerk) && O(this, l).publishableKey === e.publishableKey || y(this, l, new d(e)), O(this, l)
            }
            static clearInstance() {
                y(this, l, null)
            }
            get domain() {
                return "u" > typeof window && window.location ? ee(O(this, i), new URL(window.location.href), "") : "function" == typeof O(this, i) ? u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction) : O(this, i) || ""
            }
            get proxyUrl() {
                return "u" > typeof window && window.location ? ee(O(this, r), new URL(window.location.href), "") : "function" == typeof O(this, r) ? u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction) : O(this, r) || ""
            }
            __internal_getOption(e) {
                var t, i;
                return (null == (t = this.clerkjs) ? void 0 : t.__internal_getOption) ? null == (i = this.clerkjs) ? void 0 : i.__internal_getOption(e) : this.options[e]
            }
            get sdkMetadata() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.sdkMetadata) || this.options.sdkMetadata || void 0
            }
            get instanceType() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.instanceType
            }
            get frontendApi() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.frontendApi) || ""
            }
            get isStandardBrowser() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.isStandardBrowser) || this.options.standardBrowser || !1
            }
            get __internal_queryClient() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.__internal_queryClient
            }
            get isSatellite() {
                return "u" > typeof window && window.location ? ee(this.options.isSatellite, new URL(window.location.href), !1) : "function" == typeof this.options.isSatellite && u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction)
            }
            async loadClerkJS() {
                var t;
                if ("browser" === this.mode && !this.loaded) {
                    "u" > typeof window && (window.__clerk_publishable_key = O(this, s), window.__clerk_proxy_url = this.proxyUrl, window.__clerk_domain = this.domain);
                    try {
                        if (this.Clerk) {
                            let t;
                            (0, w.isConstructor)(this.Clerk) ? (t = new this.Clerk(O(this, s), {
                                proxyUrl: this.proxyUrl,
                                domain: this.domain
                            }), this.beforeLoad(t), await t.load(this.options)) : (t = this.Clerk).loaded || (this.beforeLoad(t), await t.load(this.options)), e.g.Clerk = t
                        } else if (!__BUILD_DISABLE_RHC__) {
                            if (e.g.Clerk || await V({ ...this.options,
                                    publishableKey: O(this, s),
                                    proxyUrl: this.proxyUrl,
                                    domain: this.domain,
                                    nonce: this.options.nonce
                                }), !e.g.Clerk) throw Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                            this.beforeLoad(e.g.Clerk), await e.g.Clerk.load(this.options)
                        }
                        if (null == (t = e.g.Clerk) ? void 0 : t.loaded) return this.hydrateClerkJS(e.g.Clerk);
                        return
                    } catch (e) {
                        O(this, n).emit(Z, "error"), console.error(e.stack || e.message || e);
                        return
                    }
                }
            }
            get version() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.version
            }
            get client() {
                return this.clerkjs ? this.clerkjs.client : void 0
            }
            get session() {
                return this.clerkjs ? this.clerkjs.session : void 0
            }
            get user() {
                return this.clerkjs ? this.clerkjs.user : void 0
            }
            get organization() {
                return this.clerkjs ? this.clerkjs.organization : void 0
            }
            get telemetry() {
                return this.clerkjs ? this.clerkjs.telemetry : void 0
            }
            get __unstable__environment() {
                return this.clerkjs ? this.clerkjs.__unstable__environment : void 0
            }
            get isSignedIn() {
                return !!this.clerkjs && this.clerkjs.isSignedIn
            }
            get billing() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.billing
            }
            get __internal_state() {
                return this.loaded && this.clerkjs ? this.clerkjs.__internal_state : O(this, o)
            }
            get apiKeys() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.apiKeys
            }
            __unstable__setEnvironment(...e) {
                this.clerkjs && "__unstable__setEnvironment" in this.clerkjs && this.clerkjs.__unstable__setEnvironment(e)
            }
        };

    function ea(e) {
        var t, i, r;
        let s, n, o, l, a, h, d, c, p, f, m, v, C, _, j, S, w, b, {
                isomorphicClerkOptions: P,
                initialState: O,
                children: U
            } = e,
            {
                isomorphicClerk: y,
                clerkStatus: T
            } = eh(P),
            [z, M] = g.default.useState({
                client: y.client,
                session: y.session,
                user: y.user,
                organization: y.organization
            });
        g.default.useEffect(() => y.addListener(e => M({ ...e
        })), []);
        let A = (t = y.loaded, !t && O ? (s = (i = O).userId, n = i.user, o = i.sessionId, l = i.sessionStatus, a = i.sessionClaims, {
                userId: s,
                user: n,
                sessionId: o,
                session: i.session,
                sessionStatus: l,
                sessionClaims: a,
                organization: i.organization,
                orgId: i.orgId,
                orgRole: i.orgRole,
                orgPermissions: i.orgPermissions,
                orgSlug: i.orgSlug,
                actor: i.actor,
                factorVerificationAge: i.factorVerificationAge
            }) : (h = (r = z).user ? r.user.id : r.user, d = r.user, c = r.session ? r.session.id : r.session, p = r.session, f = r.session ? .status, m = r.session ? r.session.lastActiveToken ? .jwt ? .claims : null, v = r.session ? r.session.factorVerificationAge : null, C = p ? .actor, _ = r.organization, j = r.organization ? r.organization.id : r.organization, S = _ ? .slug, b = (w = _ ? d ? .organizationMemberships ? .find(e => e.organization.id === j) : _) ? w.permissions : w, {
                userId: h,
                user: d,
                sessionId: c,
                session: p,
                sessionStatus: f,
                sessionClaims: m,
                organization: _,
                orgId: j,
                orgRole: w ? w.role : w,
                orgSlug: S,
                orgPermissions: b,
                actor: C,
                factorVerificationAge: v
            })),
            E = g.default.useMemo(() => ({
                value: y
            }), [T]),
            I = g.default.useMemo(() => ({
                value: z.client
            }), [z.client]),
            {
                sessionId: W,
                sessionStatus: R,
                sessionClaims: N,
                session: L,
                userId: x,
                user: B,
                orgId: F,
                actor: D,
                organization: K,
                orgRole: $,
                orgSlug: V,
                orgPermissions: G,
                factorVerificationAge: J
            } = A,
            q = g.default.useMemo(() => ({
                value: {
                    sessionId: W,
                    sessionStatus: R,
                    sessionClaims: N,
                    userId: x,
                    actor: D,
                    orgId: F,
                    orgRole: $,
                    orgSlug: V,
                    orgPermissions: G,
                    factorVerificationAge: J
                }
            }), [W, R, x, D, F, $, V, J, null == N ? void 0 : N.__raw]),
            H = g.default.useMemo(() => ({
                value: L
            }), [W, L]),
            X = g.default.useMemo(() => ({
                value: B
            }), [x, B]),
            Q = g.default.useMemo(() => ({
                value: {
                    organization: K
                }
            }), [F, K]);
        return g.default.createElement(u.IsomorphicClerkContext.Provider, {
            value: E
        }, g.default.createElement(k.ClientContext.Provider, {
            value: I
        }, g.default.createElement(k.SessionContext.Provider, {
            value: H
        }, g.default.createElement(k.OrganizationProvider, { ...Q.value
        }, g.default.createElement(u.AuthContext.Provider, {
            value: q
        }, g.default.createElement(k.UserContext.Provider, {
            value: X
        }, g.default.createElement(k.__experimental_CheckoutProvider, {
            value: void 0
        }, U)))))))
    }
    t = new WeakMap, i = new WeakMap, r = new WeakMap, s = new WeakMap, n = new WeakMap, o = new WeakMap, l = new WeakMap, a = new WeakSet, h = function() {
        return new Promise(e => {
            this.addOnLoaded(() => e(this.clerkjs))
        })
    }, U(el, l);
    var eh = e => {
            let t = g.default.useRef(el.getOrCreateInstance(e)),
                [i, r] = g.default.useState(t.current.status);
            return g.default.useEffect(() => {
                t.current.__unstable__updateProps({
                    appearance: e.appearance
                })
            }, [e.appearance]), g.default.useEffect(() => {
                t.current.__unstable__updateProps({
                    options: e
                })
            }, [e.localization]), g.default.useEffect(() => (t.current.on("status", r), () => {
                t.current && t.current.off("status", r), el.clearInstance()
            }), []), {
                isomorphicClerk: t.current,
                clerkStatus: i
            }
        },
        eu = (0, w.withMaxAllowedInstancesGuard)(function(e) {
            let {
                initialState: t,
                children: i,
                __internal_bypassMissingPublishableKey: r,
                ...s
            } = e, {
                publishableKey: n = "",
                Clerk: o
            } = s;
            return o || r || (n ? n && !(0, M.isPublishableKey)(n) && u.errorThrower.throwInvalidPublishableKeyError({
                key: n
            }) : u.errorThrower.throwMissingPublishableKeyError()), g.default.createElement(ea, {
                initialState: t,
                isomorphicClerkOptions: s
            }, i)
        }, "ClerkProvider", u.multipleClerkProvidersError);
    eu.displayName = "ClerkProvider", (0, u.setErrorThrowerOptions)({
        packageName: "@clerk/clerk-react"
    }), D("@clerk/clerk-react"), e.s(["ClerkProvider", 0, eu, "SignInButton", 0, et, "SignInWithMetamaskButton", 0, ei, "SignOutButton", 0, er, "SignUpButton", 0, es], 92448), e.s(["useRoutingProps", 0, function(e, t, i) {
        let r = t.path || (null == i ? void 0 : i.path);
        return "path" === (t.routing || (null == i ? void 0 : i.routing) || "path") ? r ? { ...i,
            ...t,
            routing: "path"
        } : u.errorThrower.throw((0, u.noPathProvidedError)(e)) : t.path ? u.errorThrower.throw((0, u.incompatibleRoutingWithPathProvidedError)(e)) : { ...i,
            ...t,
            path: void 0
        }
    }], 97651)
}, 45061, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "useRouter", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = e.r(71645),
        s = e.r(65856);

    function n() {
        return (0, r.useContext)(s.RouterContext)
    }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 74041, (e, t, i) => {
    t.exports = e.r(45061)
}, 22528, e => {
    "use strict";
    var t = e.i(74041);
    e.s(["usePagesRouter", 0, () => ({
        pagesRouter: (0, t.useRouter)()
    })])
}, 58072, e => {
    "use strict";
    var t = e.i(92448),
        i = e.i(33917),
        r = e.i(71645),
        s = e.i(97651),
        n = e.i(41383),
        o = e.i(27085),
        l = e.i(22528);

    function a(t, i, h = !0) {
        let u = (() => {
                let t = r.default.useRef(),
                    {
                        pagesRouter: i
                    } = (0, l.usePagesRouter)();
                if (i)
                    if (t.current) return t.current;
                    else return t.current = i.pathname.replace(/\/\[\[\.\.\..*/, ""), t.current;
                let s = e.r(18566).usePathname,
                    n = e.r(18566).useParams,
                    o = (s() || "").split("/").filter(Boolean),
                    a = Object.values(n() || {}).filter(e => Array.isArray(e)).flat(1 / 0);
                return t.current || (t.current = `/${o.slice(0,o.length-a.length).join("/")}`), t.current
            })(),
            d = (0, s.useRoutingProps)(t, i, {
                path: u
            });
        return ((e, t, i, s = !0) => {
            let a = r.default.useRef(0),
                {
                    pagesRouter: h
                } = (0, l.usePagesRouter)(),
                {
                    session: u,
                    isLoaded: d
                } = (0, o.useSession)();
            (0, n.isProductionEnvironment)() || r.default.useEffect(() => {
                if (!d || i && "path" !== i || s && !u) return;
                let r = new AbortController,
                    n = () => {
                        let i = h ? `${t}/[[...index]].tsx` : `${t}/[[...rest]]/page.tsx`;
                        throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${i}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware#create-route-matcher
`)
                    };
                return h ? h.pathname.match(/\[\[\.\.\..+]]/) || n() : (async () => {
                    let t;
                    if (a.current++, !(a.current > 1)) {
                        try {
                            let i = `${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;
                            t = await fetch(i, {
                                signal: r.signal
                            })
                        } catch {}(null == t ? void 0 : t.status) === 404 && n()
                    }
                })(), () => {
                    a.current > 1 && r.abort()
                }
            }, [d])
        })(t, u, d.routing, h), d
    }
    let h = Object.assign(e => r.default.createElement(i.UserProfile, { ...a("UserProfile", e)
        }), { ...i.UserProfile
        }),
        u = Object.assign(e => r.default.createElement(i.OrganizationProfile, { ...a("OrganizationProfile", e)
        }), { ...i.OrganizationProfile
        }),
        d = e => r.default.createElement(i.SignIn, { ...a("SignIn", e, !1)
        }),
        c = e => r.default.createElement(i.SignUp, { ...a("SignUp", e, !1)
        });
    e.s(["OrganizationProfile", 0, u, "SignIn", 0, d, "SignUp", 0, c, "UserProfile", 0, h], 89807), e.i(89807), e.s(["APIKeys", () => i.APIKeys, "CreateOrganization", () => i.CreateOrganization, "GoogleOneTap", () => i.GoogleOneTap, "OrganizationList", () => i.OrganizationList, "OrganizationProfile", 0, u, "OrganizationSwitcher", () => i.OrganizationSwitcher, "PricingTable", () => i.PricingTable, "SignIn", 0, d, "SignInButton", () => t.SignInButton, "SignInWithMetamaskButton", () => t.SignInWithMetamaskButton, "SignOutButton", () => t.SignOutButton, "SignUp", 0, c, "SignUpButton", () => t.SignUpButton, "TaskChooseOrganization", () => i.TaskChooseOrganization, "TaskResetPassword", () => i.TaskResetPassword, "TaskSetupMFA", () => i.TaskSetupMFA, "UserAvatar", () => i.UserAvatar, "UserButton", () => i.UserButton, "UserProfile", 0, h, "Waitlist", () => i.Waitlist], 58072)
}]);