import { b as QItemLabel, d as QList, c as QItem, Q as QItemSection } from "./QItem.fab59e77.js";
import { Q as QIcon, b as QBtn } from "./QBtn.6e839298.js";
import { Q as QPage, a as api } from "./api.168d4390.js";
import { _ as _export_sfc, L as defineComponent, r as ref, o as onMounted, M as openBlock, N as createBlock, O as withCtx, R as createTextVNode, S as toDisplayString, d as createVNode, V as createElementBlock, W as renderList, F as Fragment, U as createBaseVNode } from "./index.5f58afd8.js";
import "./render.d747f5af.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, "[quasarframework/quasar]", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "text-grey-8" }, " - GitHub repository", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "cursor-pointer" }, "Open in GitHub", -1);
const _hoisted_4 = { class: "text-grey-8 q-gutter-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobListPage",
  setup(__props) {
    const results = ref(null);
    function loadApi() {
      api.jobList().then((response) => {
        results.value = response;
        console.log(response);
      }).finally(() => {
      });
    }
    function getHash(trackedJob) {
      console.log(trackedJob);
      let key = trackedJob.class + JSON.stringify(trackedJob.tags);
      console.log(key);
      return Math.random();
    }
    onMounted(() => {
      loadApi();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(results.value) + " ", 1),
          createVNode(QList, {
            bordered: "",
            class: "rounded-borders",
            style: { "max-width": "600px" }
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { header: "" }, {
                default: withCtx(() => [
                  createTextVNode("All Jobs")
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(results.value.jobs, (result) => {
                return openBlock(), createBlock(QItem, {
                  key: getHash(result)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(result) + " ", 1),
                    createVNode(QItemSection, {
                      avatar: "",
                      top: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          name: "account_tree",
                          color: "black",
                          size: "34px"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, {
                      top: "",
                      class: "col-2 gt-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, { class: "q-mt-sm" }, {
                          default: withCtx(() => [
                            createTextVNode("GitHub")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { top: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, { lines: "1" }, {
                          default: withCtx(() => [
                            _hoisted_1,
                            _hoisted_2
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          caption: "",
                          lines: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" @rstoenescu in #3: > Generic type parameter for props ")
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          lines: "1",
                          class: "q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                        }, {
                          default: withCtx(() => [
                            _hoisted_3
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, {
                      top: "",
                      side: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(QBtn, {
                            class: "gt-xs",
                            size: "12px",
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete"
                          }),
                          createVNode(QBtn, {
                            class: "gt-xs",
                            size: "12px",
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "done"
                          }),
                          createVNode(QBtn, {
                            size: "12px",
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "more_vert"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var JobListPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobListPage.vue"]]);
export { JobListPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuMTIzNjA2NzEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iTGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cblxuICAgIHt7cmVzdWx0c319XG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiIHN0eWxlPVwibWF4LXdpZHRoOiA2MDBweFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+QWxsIEpvYnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtaXRlbSB2LWZvcj1cInJlc3VsdCBpbiByZXN1bHRzLmpvYnNcIiA6a2V5PVwiZ2V0SGFzaChyZXN1bHQpXCI+XG4gICAgICAgIHt7cmVzdWx0fX1cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICAgICAgPHEtaWNvbiBuYW1lPVwiYWNjb3VudF90cmVlXCIgY29sb3I9XCJibGFja1wiIHNpemU9XCIzNHB4XCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwicS1tdC1zbVwiPkdpdEh1YjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+W3F1YXNhcmZyYW1ld29yay9xdWFzYXJdPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXktOFwiPiAtIEdpdEh1YiByZXBvc2l0b3J5PC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjFcIj5cbiAgICAgICAgICAgIEByc3RvZW5lc2N1IGluICMzOiA+IEdlbmVyaWMgdHlwZSBwYXJhbWV0ZXIgZm9yIHByb3BzXG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIiBjbGFzcz1cInEtbXQteHMgdGV4dC1ib2R5MiB0ZXh0LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeSB0ZXh0LXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiPk9wZW4gaW4gR2l0SHViPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3Agc2lkZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LTggcS1ndXR0ZXIteHNcIj5cbiAgICAgICAgICAgIDxxLWJ0biBjbGFzcz1cImd0LXhzXCIgc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJkZWxldGVcIiAvPlxuICAgICAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRvbmVcIiAvPlxuICAgICAgICAgICAgPHEtYnRuIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwibW9yZV92ZXJ0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuXG48IS0tICAgIDxkaXY+LS0+XG48IS0tICAgICAge3tyZXN1bHRzfX0tLT5cbjwhLS0gICAgPC9kaXY+LS0+XG5cbjwhLS0gICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkQXBpXCI+LS0+XG48IS0tICAgICAgTG9hZCBBUEktLT5cbjwhLS0gICAgPC9idXR0b24+LS0+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7b25Nb3VudGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXBpIGZyb20gJ3NyYy91dGlscy9jbGllbnQvYXBpJztcbmltcG9ydCB7cmVzdWx0cyBhcyByZXN1bHRzVHlwZX0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5cbmNvbnN0IHJlc3VsdHMgPSByZWY8cmVzdWx0c1R5cGV8bnVsbD4obnVsbCk7XG5cbmxldCBsb2FkaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gbG9hZEFwaSgpIHtcbiAgbG9hZGluZyA9IHRydWU7XG4gIGFwaS5qb2JMaXN0KClcbiAgICAudGhlbigocmVzcG9uc2U6IHJlc3VsdHNUeXBlKSA9PiB7XG4gICAgICByZXN1bHRzLnZhbHVlID0gcmVzcG9uc2U7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2godHJhY2tlZEpvYjogdHJhY2tlZEpvYik6IHN0cmluZyB7XG4gIGNvbnNvbGUubG9nKHRyYWNrZWRKb2IpO1xuICBsZXQga2V5ID0gdHJhY2tlZEpvYi5jbGFzcyArIEpTT04uc3RyaW5naWZ5KHRyYWNrZWRKb2IudGFncyk7XG4gIGNvbnNvbGUubG9nKGtleSk7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpO1xufVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkQXBpKCk7XG59KTtcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF1RE0sVUFBQSxVQUFVLElBQXNCLElBQUk7QUFJMUMsYUFBUyxVQUFVO0FBRWpCLFVBQUksUUFBUSxFQUNULEtBQUssQ0FBQyxhQUEwQjtBQUMvQixnQkFBUSxRQUFRO0FBQ2hCLGdCQUFRLElBQUksUUFBUTtBQUFBLE1BQUEsQ0FDckIsRUFDQSxRQUFRLE1BQU07QUFBQSxNQUNILENBQ1g7QUFBQSxJQUNMO0FBRUEsYUFBUyxRQUFRLFlBQWdDO0FBQy9DLGNBQVEsSUFBSSxVQUFVO0FBQ3RCLFVBQUksTUFBTSxXQUFXLFFBQVEsS0FBSyxVQUFVLFdBQVcsSUFBSTtBQUMzRCxjQUFRLElBQUksR0FBRztBQUNmLGFBQU8sS0FBSztJQUNkO0FBRUEsY0FBVSxNQUFNO0FBQ047SUFBQSxDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
