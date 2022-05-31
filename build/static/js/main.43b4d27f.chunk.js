(this["webpackJsonpblogging-react-app"] =
  this["webpackJsonpblogging-react-app"] || []).push([
  [0],
  {
    14: function (e, t, a) {},
    19: function (e, t, a) {},
    34: function (e, t, a) {
      e.exports = a(92);
    },
    39: function (e, t, a) {},
    41: function (e, t, a) {},
    47: function (e, t, a) {},
    84: function (e, t, a) {},
    85: function (e, t, a) {},
    86: function (e, t, a) {},
    87: function (e, t, a) {},
    88: function (e, t, a) {},
    89: function (e, t, a) {},
    90: function (e, t, a) {},
    91: function (e, t, a) {},
    92: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        c = a(28),
        r = a.n(c),
        o = a(29),
        m = a(30),
        i = a(33),
        s = a(32),
        u = (a(39), a(40), a(1)),
        d = a(3);
      a(41);
      function E() {
        return l.a.createElement(
          "div",
          { className: "logo" },
          l.a.createElement(u.b, { to: "/" }, " BLOGGING ")
        );
      }
      a(47);
      function p(e) {
        var t = e.toggleSidebar;
        return l.a.createElement(
          "nav",
          null,
          l.a.createElement(E, null),
          l.a.createElement(
            "ul",
            { className: "menu" },
            l.a.createElement(
              "li",
              null,
              l.a.createElement(
                u.c,
                {
                  exact: !0,
                  className: "item",
                  activeClassName: "active",
                  to: "/",
                },
                "Home"
              )
            ),
            l.a.createElement(
              "li",
              null,
              l.a.createElement(
                u.c,
                {
                  className: "item",
                  exact: !0,
                  activeClassName: "active",
                  to: "/post/",
                },
                "Posts"
              )
            ),
            l.a.createElement(
              "li",
              null,
              l.a.createElement(
                u.c,
                {
                  className: "item",
                  activeClassName: "active",
                  to: "/user/dashboard/",
                },
                "Dashboard"
              )
            ),
            l.a.createElement(
              "li",
              null,
              l.a.createElement(
                u.c,
                {
                  className: "item",
                  activeClassName: "active",
                  to: "/post/add",
                },
                "Add New"
              )
            )
          ),
          l.a.createElement(
            "button",
            {
              title: "Currently this feature is not working.",
              className: "search-btn",
            },
            l.a.createElement("li", { className: "fa fa-search fa-1x" })
          ),
          l.a.createElement(
            "div",
            { className: "navBtn" },
            l.a.createElement(
              "button",
              { onClick: t },
              l.a.createElement("li", { className: "fa fa-bars fa-1x" })
            )
          )
        );
      }
      var f = a(5),
        h = (a(19), a(11)),
        b = a.n(h),
        v = a(6),
        g = a.n(v);
      a(84);
      function N(e) {
        return l.a.createElement(
          "button",
          {
            onClick: function () {
              return e.action();
            },
            className: "primary-button",
          },
          e.text
        );
      }
      function y(e) {
        var t = e.history;
        document.title = "BLOGGING - Add new post";
        var a = Object(n.useState)(!1),
          c = Object(f.a)(a, 2),
          r = c[0],
          o = c[1];
        return l.a.createElement(
          "div",
          { className: "add-new-post" },
          l.a.createElement(
            "div",
            { className: "form-wrapper" },
            l.a.createElement("h1", null, "Add new post"),
            l.a.createElement("hr", null),
            l.a.createElement(
              "form",
              {
                onSubmit: function (e) {
                  o(!0), e.preventDefault();
                  var a = {
                    title: e.target.title.value,
                    content: e.target.content.value,
                    summary: e.target.summary.value,
                    views: 0,
                  };
                  g.a
                    .post("https://blogging-backand.herokuapp.com/post/", a)
                    .then(function (a) {
                      (e.target.title.value = ""),
                        (e.target.content.value = ""),
                        (e.target.summary.value = ""),
                        t.push("/user/dashboard/"),
                        o(!1);
                    })
                    .catch(function (e) {
                      o(!1), alert("NetWork Error,please try again");
                    });
                },
              },
              l.a.createElement("label", { htmlFor: "title" }, "Post Title"),
              l.a.createElement("input", {
                required: !0,
                maxLength: 60,
                type: "text",
                name: "title",
                id: "title",
              }),
              l.a.createElement(
                "label",
                { htmlFor: "content" },
                "Post Content"
              ),
              l.a.createElement("textarea", {
                required: !0,
                rows: "8",
                type: "text",
                name: "content",
                id: "content",
              }),
              l.a.createElement(
                "label",
                { htmlFor: "summary" },
                "Post summary"
              ),
              l.a.createElement("textarea", {
                maxLength: 256,
                required: !0,
                rows: "3",
                name: "summary",
                id: "summary",
              }),
              l.a.createElement(
                "div",
                { className: "publish-btns" },
                r
                  ? l.a.createElement(b.a, {
                      type: "TailSpin",
                      color: "#fFFF",
                      height: 20,
                      width: 20,
                    })
                  : l.a.createElement(N, {
                      action: function () {},
                      text: "Publish",
                    }),
                l.a.createElement(u.b, { to: "/user/dashboard/" }, "Cancel")
              )
            )
          )
        );
      }
      a(14);
      function O(e) {
        return (
          (document.title = "BLOGGING - Page not Found!"),
          l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              { className: "loading-screen offline" },
              l.a.createElement("h1", null, "404"),
              l.a.createElement("h2", null, "Page Not Found!"),
              l.a.createElement(
                u.b,
                { className: "primary-button", to: "/post/" },
                l.a.createElement("li", { className: "fa fa-pluse" }),
                " Go Posts Page"
              )
            )
          )
        );
      }
      a(85), a(86);
      function w() {
        return l.a.createElement(
          "div",
          { className: "small-loading" },
          l.a.createElement(b.a, {
            type: "Oval",
            color: "#ff4a54",
            height: 50,
            width: 50,
          })
        );
      }
      function k(e) {
        return (
          (document.title = "BLOGGING - Network or Server Error"),
          l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              { className: "loading-screen offline" },
              l.a.createElement("span", { className: "fa fa-wifi" }),
              l.a.createElement("h2", null, "Network or Server Error"),
              l.a.createElement(
                "p",
                null,
                "It doesn't look like you're connected to the internet ",
                l.a.createElement("br", null),
                "or there are a server error."
              ),
              l.a.createElement(N, { text: "Reload", action: e.fetchPost })
            )
          )
        );
      }
      function j(e) {
        return (
          (document.title = "BLOGGING - No Post Found!"),
          l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              { className: "loading-screen offline" },
              l.a.createElement("span", { className: "fa fa-search" }),
              l.a.createElement("h2", null, "No Post Found!"),
              l.a.createElement(
                u.b,
                { className: "primary-button", to: "/post/add/" },
                l.a.createElement("li", { className: "fa fa-pluse" }),
                " Add New Post"
              )
            )
          )
        );
      }
      function S() {
        document.title = "BLOGGING - Dashboard";
        var e = Object(n.useState)(!1),
          t = Object(f.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(n.useState)(null),
          o = Object(f.a)(r, 2),
          m = o[0],
          i = o[1],
          s = function () {
            c(!1),
              g.a
                .get("https://blogging-backand.herokuapp.com/post/")
                .then(function (e) {
                  var t = e.data;
                  c(!1), i(t), console.log(t);
                })
                .catch(function (e) {
                  c(!0);
                })
                .finally(function () {
                  c(!0);
                });
          };
        Object(n.useEffect)(function () {
          s();
        }, []);
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            "div",
            { className: "header" },
            l.a.createElement(
              "ul",
              null,
              l.a.createElement("li", null, "Dashboard"),
              l.a.createElement(
                "li",
                null,
                "Posts ",
                (null === m || void 0 === m ? void 0 : m.length) || 0
              ),
              l.a.createElement(
                "li",
                null,
                "Views ",
                (null === m || void 0 === m
                  ? void 0
                  : m.reduce(function (e, t) {
                      return e + t.views;
                    }, 0)) || 0
              ),
              l.a.createElement(
                "li",
                null,
                l.a.createElement(
                  u.b,
                  { to: "/post/add" },
                  "Add new ",
                  l.a.createElement("li", { className: "fa fa-plus" })
                )
              )
            )
          ),
          l.a.createElement(
            "div",
            { className: "post-list" },
            0 === (null === m || void 0 === m ? void 0 : m.length)
              ? l.a.createElement(j, null)
              : m
              ? m.reverse().map(function (e) {
                  return l.a.createElement(
                    "div",
                    { key: e._id, className: "table-row" },
                    l.a.createElement(
                      "h2",
                      null,
                      l.a.createElement(
                        u.b,
                        { to: "/post/".concat(e._id) },
                        e.title
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "edit-post" },
                      l.a.createElement(
                        u.b,
                        { to: "/post/edit/".concat(e._id) },
                        l.a.createElement("li", { className: "fa fa-edit" })
                      ),
                      l.a.createElement(
                        u.b,
                        { to: "/post/".concat(e._id) },
                        l.a.createElement("li", { className: "fa fa-eye" }),
                        l.a.createElement("span", null, " ", e.views)
                      ),
                      l.a.createElement(
                        "a",
                        {
                          onClick: function () {
                            var t;
                            (t = e._id) &&
                              g.a
                                .delete(
                                  "https://blogging-backand.herokuapp.com/post/".concat(
                                    t,
                                    "/"
                                  )
                                )
                                .then(function (e) {
                                  e.data, s();
                                })
                                .catch(function (e) {
                                  return alert("Error while deleting post.");
                                });
                          },
                          href: "#",
                        },
                        l.a.createElement("li", { className: "fa fa-trash" })
                      )
                    )
                  );
                })
              : a
              ? l.a.createElement(k, { fetchPost: s })
              : l.a.createElement(w, null)
          )
        );
      }
      a(87);
      function G() {
        return l.a.createElement(
          "div",
          { className: "loading-screen" },
          l.a.createElement(b.a, {
            type: "Oval",
            color: "#ff4a54",
            height: 50,
            width: 50,
          })
        );
      }
      function x(e) {
        document.title = "BLOGGING - Edit your post";
        var t = Object(n.useState)(null),
          a = Object(f.a)(t, 2),
          c = a[0],
          r = a[1],
          o = Object(n.useState)(!1),
          m = Object(f.a)(o, 2),
          i = m[0],
          s = m[1],
          d = Object(n.useState)(!1),
          E = Object(f.a)(d, 2),
          p = E[0],
          h = E[1],
          v = e.match.params.id,
          y = function () {
            s(!1),
              g.a
                .get(
                  "https://blogging-backand.herokuapp.com/post/".concat(v, "/")
                )
                .then(function (e) {
                  var t = e.data;
                  s(!1), r(t);
                })
                .catch(function (e) {
                  s(!0);
                })
                .finally(function () {
                  s(!0);
                });
          };
        Object(n.useEffect)(function () {
          y();
        }, []);
        return l.a.createElement(
          l.a.Fragment,
          null,
          c
            ? l.a.createElement(
                "div",
                { className: "add-new-post" },
                l.a.createElement(
                  "div",
                  { className: "form-wrapper" },
                  l.a.createElement("h1", null, "Edit your post"),
                  l.a.createElement("hr", null),
                  l.a.createElement(
                    "form",
                    {
                      onSubmit: function (t) {
                        h(!0), t.preventDefault();
                        var a = {
                          title: t.target.title.value,
                          content: t.target.content.value,
                          summary: t.target.summarize.value,
                        };
                        g.a
                          .put(
                            "https://blogging-backand.herokuapp.com/post/".concat(
                              v,
                              "/"
                            ),
                            a
                          )
                          .then(function (t) {
                            e.history.push("/user/dashboard/"), h(!1);
                          })
                          .catch(function (e) {
                            h(!1), alert("NetWork Error,please try again");
                          });
                      },
                    },
                    l.a.createElement(
                      "label",
                      { htmlFor: "title" },
                      "Post Title"
                    ),
                    l.a.createElement("input", {
                      defaultValue: c.title,
                      required: !0,
                      maxLength: 60,
                      type: "text",
                      name: "title",
                      id: "title",
                    }),
                    l.a.createElement(
                      "label",
                      { htmlFor: "content" },
                      "Post Content"
                    ),
                    l.a.createElement("textarea", {
                      required: !0,
                      rows: "8",
                      defaultValue: c.content,
                      type: "text",
                      name: "content",
                      id: "content",
                    }),
                    l.a.createElement(
                      "label",
                      { htmlFor: "title" },
                      "Post Summarize"
                    ),
                    l.a.createElement("textarea", {
                      required: !0,
                      rows: "3",
                      defaultValue: c.summary,
                      name: "summarize",
                      id: "summarize",
                    }),
                    l.a.createElement(
                      "div",
                      { className: "publish-btns" },
                      p
                        ? l.a.createElement(b.a, {
                            type: "TailSpin",
                            color: "#fFFF",
                            height: 20,
                            width: 20,
                          })
                        : l.a.createElement(N, {
                            action: function () {},
                            text: "Update",
                          }),
                      l.a.createElement(
                        u.b,
                        { to: "/user/dashboard/" },
                        "Cancel"
                      )
                    )
                  )
                )
              )
            : i
            ? l.a.createElement(k, { fetchPost: y })
            : l.a.createElement(G, null)
        );
      }
      a(88);
      function F(e) {
        var t = e.postData;
        return l.a.createElement(
          "div",
          null,
          l.a.createElement(
            "div",
            { className: "post" },
            l.a.createElement("h2", null, t.title),
            l.a.createElement("p", null, t.summary),
            l.a.createElement(u.b, { to: "/post/".concat(t._id) }, "More..")
          )
        );
      }
      function P() {
        var e = Object(n.useState)(null),
          t = Object(f.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(n.useState)(!1),
          o = Object(f.a)(r, 2),
          m = o[0],
          i = o[1],
          s = function () {
            i(!1),
              g.a
                .get("https://blogging-backand.herokuapp.com/post/")
                .then(function (e) {
                  var t = e.data;
                  i(!1), c(t.reverse());
                })
                .catch(function (e) {
                  i(!0);
                })
                .finally(function () {
                  i(!0);
                });
          };
        return (
          Object(n.useEffect)(function () {
            s();
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            0 === (null === a || void 0 === a ? void 0 : a.length)
              ? l.a.createElement(j, null)
              : a
              ? l.a.createElement(
                  "main",
                  { className: "posts" },
                  a.map(function (e) {
                    return l.a.createElement(F, { key: e._id, postData: e });
                  })
                )
              : m
              ? l.a.createElement(k, { fetchPost: s })
              : l.a.createElement(G, null)
          )
        );
      }
      a(89);
      function C(e) {
        document.title = "BLOGGING - ".concat(
          null === F || void 0 === F ? void 0 : F.title
        );
        var t = Object(n.useState)(null),
          a = Object(f.a)(t, 2),
          c = a[0],
          r = a[1],
          o = Object(n.useState)(!1),
          m = Object(f.a)(o, 2),
          i = m[0],
          s = m[1],
          u = e.match.params.id;
        return (
          Object(n.useEffect)(function () {
            g.a
              .get(
                "https://blogging-backand.herokuapp.com/post/".concat(u, "/")
              )
              .then(function (e) {
                var t = e.data;
                r(t);
              })
              .catch(function (e) {
                e.response && 404 === e.response.status && (r(0), s(!0));
              });
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            (null === c || void 0 === c ? void 0 : c.title) > ""
              ? l.a.createElement(
                  "div",
                  { className: "single-post" },
                  l.a.createElement(
                    "main",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "post-thumbnail" },
                      l.a.createElement("h1", null, c.title),
                      l.a.createElement("p", null, c.summary)
                    ),
                    l.a.createElement(
                      "div",
                      { className: "post-content" },
                      c.content
                    )
                  ),
                  l.a.createElement("aside", null, " ")
                )
              : i
              ? l.a.createElement(O, null)
              : l.a.createElement(G, null)
          )
        );
      }
      function L() {
        return l.a.createElement(
          d.c,
          null,
          l.a.createElement(d.a, { path: "/post/edit/:id", component: x }),
          l.a.createElement(d.a, { path: "/post/add", component: y }),
          l.a.createElement(d.a, { path: "/post/Dashboard", component: S }),
          l.a.createElement(d.a, { path: "/post/:id", component: C }),
          l.a.createElement(d.a, { path: "/post/", component: P }),
          l.a.createElement(d.a, { component: O })
        );
      }
      a(90);
      function B() {
        document.title = "BLOGGING - Home Page";
        var e = Object(n.useState)(null),
          t = Object(f.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(n.useState)(!1),
          o = Object(f.a)(r, 2),
          m = o[0],
          i = o[1],
          s = function () {
            i(!1),
              g.a
                .get("https://blogging-backand.herokuapp.com/post/")
                .then(function (e) {
                  var t = e.data;
                  i(!1), c(t);
                })
                .catch(function (e) {
                  i(!0);
                })
                .finally(function () {
                  i(!0);
                });
          };
        return (
          Object(n.useEffect)(function () {
            s();
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            a
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    "main",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "hero" },
                      l.a.createElement(
                        "div",
                        { className: "left" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Start adding you blog post for free"
                        ),
                        l.a.createElement(
                          "p",
                          null,
                          "start immediately posting on our platform without any signup or account just click the link below to post your first free post, Yes completely for free our service is free and it always will be free."
                        ),
                        l.a.createElement(
                          u.b,
                          { to: "/post/add/ " },
                          "Write my first post..."
                        )
                      ),
                      l.a.createElement("div", { className: "right" })
                    )
                  ),
                  l.a.createElement(
                    "main",
                    { className: "posts" },
                    a.map(function (e) {
                      return l.a.createElement(F, { key: e._id, postData: e });
                    })
                  )
                )
              : m
              ? l.a.createElement(k, { fetchPost: s })
              : l.a.createElement(G, null)
          )
        );
      }
      a(91);
      function I(e) {
        var t = e.toggleSidebar;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement("div", { className: "shadow" }),
          l.a.createElement(
            "div",
            { className: "sidebar" },
            l.a.createElement(
              "div",
              { className: "content" },
              l.a.createElement(
                "button",
                { onClick: t },
                l.a.createElement("li", { className: "fa fa-plus" })
              ),
              l.a.createElement(
                "ul",
                { className: "x" },
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    u.c,
                    {
                      exact: !0,
                      onClick: t,
                      className: "item",
                      activeClassName: "active",
                      to: "/",
                    },
                    "Home"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    u.c,
                    {
                      className: "item",
                      onClick: t,
                      exact: !0,
                      activeClassName: "active",
                      to: "/post/",
                    },
                    "Posts"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    u.c,
                    {
                      className: "item",
                      onClick: t,
                      activeClassName: "active",
                      to: "/user/dashboard/",
                    },
                    "Dashboard"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    u.c,
                    {
                      onClick: t,
                      className: "item",
                      activeClassName: "active",
                      to: "/post/add",
                    },
                    "Add New"
                  )
                )
              )
            )
          )
        );
      }
      var D = (function (e) {
        Object(i.a)(a, e);
        var t = Object(s.a)(a);
        function a() {
          var e;
          Object(o.a)(this, a);
          for (var n = arguments.length, l = new Array(n), c = 0; c < n; c++)
            l[c] = arguments[c];
          return (
            ((e = t.call.apply(t, [this].concat(l))).state = {
              showSidebar: !1,
            }),
            (e.toggleSidebar = function () {
              e.setState({ showSidebar: !e.state.showSidebar });
            }),
            e
          );
        }
        return (
          Object(m.a)(a, [
            {
              key: "render",
              value: function () {
                return l.a.createElement(
                  u.a,
                  null,
                  this.state.showSidebar &&
                    l.a.createElement(I, { toggleSidebar: this.toggleSidebar }),
                  l.a.createElement(p, { toggleSidebar: this.toggleSidebar }),
                  l.a.createElement(
                    d.c,
                    null,
                    l.a.createElement(d.a, { path: "/post", component: L }),
                    l.a.createElement(d.a, {
                      exact: !0,
                      path: "/",
                      component: B,
                    }),
                    l.a.createElement(d.a, {
                      exact: !0,
                      path: "/blogging-react-app/",
                      component: B,
                    }),
                    l.a.createElement(d.a, { component: O })
                  )
                );
              },
            },
          ]),
          a
        );
      })(l.a.Component);
      r.a.render(l.a.createElement(D, null), document.getElementById("root"));
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.43b4d27f.chunk.js.map
