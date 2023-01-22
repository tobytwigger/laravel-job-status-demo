import { d as QList, b as QItemLabel, c as QItem, Q as QItemSection } from "./QItem.b003a49d.js";
import { b as QBtn } from "./QBtn.bec23d41.js";
import { Q as QPage, a as api } from "./api.5920dc3e.js";
import { _ as _export_sfc, L as defineComponent, r as ref, o as onMounted, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode, S as toDisplayString, U as createBaseVNode } from "./index.6ee76f6f.js";
import "./render.76e8fbbc.js";
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
      }).finally(() => {
      });
    }
    function getHash(trackedJob) {
      return trackedJob.class + JSON.stringify(trackedJob.tags);
    }
    onMounted(() => {
      loadApi();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          results.value !== null ? (openBlock(), createBlock(QList, {
            key: 0,
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
                    createVNode(QItemSection, {
                      top: "",
                      class: "col-2 gt-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, { class: "q-mt-sm" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = result.alias) != null ? _a : result.class), 1)
                            ];
                          }),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
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
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var JobListPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobListPage.vue"]]);
export { JobListPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuZDdmNDBmZmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iTGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cblxuICAgIDxxLWxpc3QgYm9yZGVyZWQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIiBzdHlsZT1cIm1heC13aWR0aDogNjAwcHhcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+QWxsIEpvYnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtaXRlbSB2LWZvcj1cInJlc3VsdCBpbiByZXN1bHRzLmpvYnNcIiA6a2V5PVwiZ2V0SGFzaChyZXN1bHQpXCI+XG5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRvcCBjbGFzcz1cImNvbC0yIGd0LXNtXCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInEtbXQtc21cIj57eyByZXN1bHQuYWxpYXMgPz8gcmVzdWx0LmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRvcD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5bcXVhc2FyZnJhbWV3b3JrL3F1YXNhcl08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS04XCI+IC0gR2l0SHViIHJlcG9zaXRvcnk8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgQHJzdG9lbmVzY3UgaW4gIzM6ID4gR2VuZXJpYyB0eXBlIHBhcmFtZXRlciBmb3IgcHJvcHNcbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwicS1tdC14cyB0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnNvci1wb2ludGVyXCI+T3BlbiBpbiBHaXRIdWI8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRvcCBzaWRlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktOCBxLWd1dHRlci14c1wiPlxuICAgICAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgICA8cS1idG4gY2xhc3M9XCJndC14c1wiIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwiZG9uZVwiIC8+XG4gICAgICAgICAgICA8cS1idG4gc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJtb3JlX3ZlcnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbjwhLS0gICAgPGRpdj4tLT5cbjwhLS0gICAgICB7e3Jlc3VsdHN9fS0tPlxuPCEtLSAgICA8L2Rpdj4tLT5cblxuPCEtLSAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRBcGlcIj4tLT5cbjwhLS0gICAgICBMb2FkIEFQSS0tPlxuPCEtLSAgICA8L2J1dHRvbj4tLT5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtyZXN1bHRzIGFzIHJlc3VsdHNUeXBlfSBmcm9tICdzcmMvdHlwZXMvYXBpJztcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxyZXN1bHRzVHlwZXxudWxsPihudWxsKTtcblxubGV0IGxvYWRpbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBsb2FkQXBpKCkge1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgYXBpLmpvYkxpc3QoKVxuICAgIC50aGVuKChyZXNwb25zZTogcmVzdWx0c1R5cGUpID0+IHtcbiAgICAgIHJlc3VsdHMudmFsdWUgPSByZXNwb25zZTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh0cmFja2VkSm9iOiB0cmFja2VkSm9iKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRyYWNrZWRKb2IuY2xhc3MgKyBKU09OLnN0cmluZ2lmeSh0cmFja2VkSm9iLnRhZ3MpO1xufVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkQXBpKCk7XG59KTtcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrRE0sVUFBQSxVQUFVLElBQXNCLElBQUk7QUFJMUMsYUFBUyxVQUFVO0FBRWpCLFVBQUksUUFBUSxFQUNULEtBQUssQ0FBQyxhQUEwQjtBQUMvQixnQkFBUSxRQUFRO0FBQUEsTUFBQSxDQUNqQixFQUNBLFFBQVEsTUFBTTtBQUFBLE1BQ0gsQ0FDWDtBQUFBLElBQ0w7QUFFQSxhQUFTLFFBQVEsWUFBZ0M7QUFDL0MsYUFBTyxXQUFXLFFBQVEsS0FBSyxVQUFVLFdBQVcsSUFBSTtBQUFBLElBQzFEO0FBRUEsY0FBVSxNQUFNO0FBQ047SUFBQSxDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
