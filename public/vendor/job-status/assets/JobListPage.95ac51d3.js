import { d as QList, b as QItemLabel, c as QItem, Q as QItemSection } from "./QItem.38510015.js";
import { Q as QIcon, b as QBtn } from "./QBtn.fef3c7a4.js";
import { Q as QPage, a as api } from "./api.2fe61200.js";
import { _ as _export_sfc, L as defineComponent, r as ref, o as onMounted, M as openBlock, N as createBlock, O as withCtx, R as createTextVNode, S as toDisplayString, d as createVNode, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode, U as createBaseVNode } from "./index.3864cac6.js";
import "./render.1671c082.js";
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
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var JobListPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobListPage.vue"]]);
export { JobListPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuOTVhYzUxZDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iTGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cblxuICAgIHt7cmVzdWx0c319XG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiIHN0eWxlPVwibWF4LXdpZHRoOiA2MDBweFwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5BbGwgSm9iczwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICA8cS1pdGVtIHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHMuam9ic1wiIDprZXk9XCJnZXRIYXNoKHJlc3VsdClcIj5cbiAgICAgICAge3tyZXN1bHR9fVxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHRvcD5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJhY2NvdW50X3RyZWVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3AgY2xhc3M9XCJjb2wtMiBndC1zbVwiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+R2l0SHViPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRvcD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5bcXVhc2FyZnJhbWV3b3JrL3F1YXNhcl08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS04XCI+IC0gR2l0SHViIHJlcG9zaXRvcnk8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgQHJzdG9lbmVzY3UgaW4gIzM6ID4gR2VuZXJpYyB0eXBlIHBhcmFtZXRlciBmb3IgcHJvcHNcbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwicS1tdC14cyB0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnNvci1wb2ludGVyXCI+T3BlbiBpbiBHaXRIdWI8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRvcCBzaWRlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktOCBxLWd1dHRlci14c1wiPlxuICAgICAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgICA8cS1idG4gY2xhc3M9XCJndC14c1wiIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwiZG9uZVwiIC8+XG4gICAgICAgICAgICA8cS1idG4gc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJtb3JlX3ZlcnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbjwhLS0gICAgPGRpdj4tLT5cbjwhLS0gICAgICB7e3Jlc3VsdHN9fS0tPlxuPCEtLSAgICA8L2Rpdj4tLT5cblxuPCEtLSAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRBcGlcIj4tLT5cbjwhLS0gICAgICBMb2FkIEFQSS0tPlxuPCEtLSAgICA8L2J1dHRvbj4tLT5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtyZXN1bHRzIGFzIHJlc3VsdHNUeXBlfSBmcm9tICdzcmMvdHlwZXMvYXBpJztcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxyZXN1bHRzVHlwZXxudWxsPihudWxsKTtcblxubGV0IGxvYWRpbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBsb2FkQXBpKCkge1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgYXBpLmpvYkxpc3QoKVxuICAgIC50aGVuKChyZXNwb25zZTogcmVzdWx0c1R5cGUpID0+IHtcbiAgICAgIHJlc3VsdHMudmFsdWUgPSByZXNwb25zZTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh0cmFja2VkSm9iOiB0cmFja2VkSm9iKTogc3RyaW5nIHtcbiAgY29uc29sZS5sb2codHJhY2tlZEpvYik7XG4gIGxldCBrZXkgPSB0cmFja2VkSm9iLmNsYXNzICsgSlNPTi5zdHJpbmdpZnkodHJhY2tlZEpvYi50YWdzKTtcbiAgY29uc29sZS5sb2coa2V5KTtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XG59XG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gIGxvYWRBcGkoKTtcbn0pO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXVETSxVQUFBLFVBQVUsSUFBc0IsSUFBSTtBQUkxQyxhQUFTLFVBQVU7QUFFakIsVUFBSSxRQUFRLEVBQ1QsS0FBSyxDQUFDLGFBQTBCO0FBQy9CLGdCQUFRLFFBQVE7QUFDaEIsZ0JBQVEsSUFBSSxRQUFRO0FBQUEsTUFBQSxDQUNyQixFQUNBLFFBQVEsTUFBTTtBQUFBLE1BQ0gsQ0FDWDtBQUFBLElBQ0w7QUFFQSxhQUFTLFFBQVEsWUFBZ0M7QUFDL0MsY0FBUSxJQUFJLFVBQVU7QUFDdEIsVUFBSSxNQUFNLFdBQVcsUUFBUSxLQUFLLFVBQVUsV0FBVyxJQUFJO0FBQzNELGNBQVEsSUFBSSxHQUFHO0FBQ2YsYUFBTyxLQUFLO0lBQ2Q7QUFFQSxjQUFVLE1BQU07QUFDTjtJQUFBLENBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
