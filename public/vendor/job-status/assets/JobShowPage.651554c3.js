import { u as useApi, Q as QBreadcrumbsEl, a as QBreadcrumbs, b as QSeparator } from "./useApi.aec42bea.js";
import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.ff18333d.js";
import { a as api, Q as QPage } from "./api.78175165.js";
import { R as Ripple } from "./use-router-link.b1c8dd49.js";
import { T as TrackedRunListItem } from "./TrackedRunListItem.53827365.js";
import { Q as QAvatar } from "./QAvatar.4489c200.js";
import { _ as _export_sfc, K as defineComponent, L as openBlock, M as createBlock, N as withCtx, d as createVNode, P as createTextVNode, Q as toDisplayString, R as createBaseVNode, r as ref, S as createElementBlock, F as Fragment, U as renderList, O as createCommentVNode, D as withDirectives } from "./index.8710f952.js";
import "./render.bb704460.js";
import "./index.aa7156d4.js";
import "./config.83e19d5f.js";
import "./QCircularProgress.3cc7d120.js";
import "./format.801e7424.js";
import "./QChip.66e77613.js";
import "./api.9a3f3035.js";
import "./dayjs.min.54da9cde.js";
import "./relativeTime.a9f93413.js";
const _hoisted_1$2 = { class: "text-weight-medium" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "JobFailureListItem",
  props: {
    jobFailure: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QItem, null, {
        default: withCtx(() => [
          createVNode(QItemSection, {
            avatar: "",
            top: ""
          }, {
            default: withCtx(() => [
              createVNode(QAvatar, {
                color: "primary",
                "text-color": "white"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.jobFailure.count), 1)
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
                  createBaseVNode("span", _hoisted_1$2, toDisplayString(props.jobFailure.message), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var JobFailureListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "JobFailureListItem.vue"]]);
const _hoisted_1$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "JobFailureReasons",
  props: {
    alias: null
  },
  setup(__props) {
    const props = __props;
    const results = ref(null);
    useApi((after) => {
      api.jobFailureReasons(props.alias).then((response) => results.value = response).finally(after);
    });
    return (_ctx, _cache) => {
      return results.value !== null ? (openBlock(), createBlock(QList, {
        key: 0,
        bordered: "",
        separator: ""
      }, {
        default: withCtx(() => [
          createVNode(QItemLabel, { header: "" }, {
            default: withCtx(() => [
              createTextVNode("Errors")
            ]),
            _: 1
          }),
          results.value.length === 0 ? (openBlock(), createBlock(QItem, { key: 0 }, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Good news; no errors found!")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_1$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (jobFailureReason, index) => {
              return openBlock(), createBlock(QItem, { key: index }, {
                default: withCtx(() => [
                  createVNode(JobFailureListItem, { "job-failure": jobFailureReason }, null, 8, ["job-failure"])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]))
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var JobFailureReasons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "JobFailureReasons.vue"]]);
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 col-sm-6 q-py-md" };
const _hoisted_3 = { class: "col-12 col-sm-6 q-py-md" };
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "col-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobShowPage",
  props: {
    alias: null
  },
  setup(__props) {
    const props = __props;
    const results = ref(null);
    useApi((after) => {
      api.jobShow(props.alias).then((response) => results.value = response).finally(after);
    });
    function getHash(jobRun) {
      return jobRun.uuid;
    }
    return (_ctx, _cache) => {
      return results.value !== null ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "justify-evenly",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(QBreadcrumbs, null, {
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                icon: "list",
                to: "/jobs",
                label: "Jobs"
              }),
              createVNode(QBreadcrumbsEl, {
                label: results.value.alias,
                icon: "view_stream",
                to: "/jobs/" + results.value.alias
              }, null, 8, ["label", "to"])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QList, {
                bordered: "",
                separator: ""
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(results.value.alias), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Alias")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [Ripple]
                  ]),
                  withDirectives((openBlock(), createBlock(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(results.value.class), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Class")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [Ripple]
                  ])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(JobFailureReasons, {
                alias: props.alias
              }, null, 8, ["alias"])
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(QList, {
                bordered: "",
                class: "rounded-borders",
                style: { "min-width": "85%" }
              }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Runs")
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(results.value.runs, (run) => {
                    return openBlock(), createElementBlock("div", {
                      key: getHash(run)
                    }, [
                      createVNode(TrackedRunListItem, { "tracked-run": run }, null, 8, ["tracked-run"]),
                      createVNode(QSeparator)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      })) : (openBlock(), createBlock(QPage, {
        key: 1,
        class: "items-center justify-evenly"
      }, {
        default: withCtx(() => [
          createTextVNode(" Loading ")
        ]),
        _: 1
      }));
    };
  }
});
var JobShowPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobShowPage.vue"]]);
export { JobShowPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuNjUxNTU0YzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvY29tcG9uZW50cy9Kb2JGYWlsdXJlUmVhc29ucy52dWUiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3BhZ2VzL0pvYlNob3dQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+RXJyb3JzPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICA8cS1pdGVtIHYtaWY9XCJyZXN1bHRzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLWxhYmVsPkdvb2QgbmV3czsgbm8gZXJyb3JzIGZvdW5kITwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8L3EtaXRlbT5cblxuICAgIDxkaXYgdi1lbHNlPlxuICAgICAgPHEtaXRlbSB2LWZvcj1cIihqb2JGYWlsdXJlUmVhc29uLCBpbmRleCkgaW4gcmVzdWx0c1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8am9iLWZhaWx1cmUtbGlzdC1pdGVtXG4gICAgICAgICAgOmpvYi1mYWlsdXJlPVwiam9iRmFpbHVyZVJlYXNvblwiXG4gICAgICAgID48L2pvYi1mYWlsdXJlLWxpc3QtaXRlbT5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvZGl2PlxuICA8L3EtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lUHJvcHMsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1xuICBKb2JSdW4sXG4gIFN0YXR1cyxcbiAgQmF0Y2gsXG4gIFRyYWNrZWRKb2IsXG4gIEpvYkZhaWx1cmVSZWFzb24sXG59IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IFN0YXR1c0NvdW50IGZyb20gJ2NvbXBvbmVudHMvU3RhdHVzQ291bnQudnVlJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgbG9jYWxpemVkRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9sb2NhbGl6ZWRGb3JtYXQnO1xuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tICdkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lJztcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gJ3NyYy9jb21wb3N0YWJsZXMvdXNlQXBpJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IEpvYkZhaWx1cmVMaXN0SXRlbSBmcm9tICdjb21wb25lbnRzL0pvYkZhaWx1cmVMaXN0SXRlbS52dWUnO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPEpvYkZhaWx1cmVSZWFzb25bXSB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYWxpYXM6IHN0cmluZztcbn0+KCk7XG5cbnVzZUFwaSgoYWZ0ZXIpID0+IHtcbiAgYXBpXG4gICAgLmpvYkZhaWx1cmVSZWFzb25zKHByb3BzLmFsaWFzKVxuICAgIC50aGVuKChyZXNwb25zZTogSm9iRmFpbHVyZVJlYXNvbltdKSA9PiAocmVzdWx0cy52YWx1ZSA9IHJlc3BvbnNlKSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJqdXN0aWZ5LWV2ZW5seVwiIHBhZGRpbmcgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIj5cbiAgICA8cS1icmVhZGNydW1icz5cbiAgICAgIDxxLWJyZWFkY3J1bWJzLWVsIGljb249XCJsaXN0XCIgdG89XCIvam9ic1wiIGxhYmVsPVwiSm9ic1wiIC8+XG4gICAgICA8cS1icmVhZGNydW1icy1lbFxuICAgICAgICA6bGFiZWw9XCJyZXN1bHRzLmFsaWFzXCJcbiAgICAgICAgaWNvbj1cInZpZXdfc3RyZWFtXCJcbiAgICAgICAgOnRvPVwiJy9qb2JzLycgKyByZXN1bHRzLmFsaWFzXCJcbiAgICAgIC8+XG4gICAgPC9xLWJyZWFkY3J1bWJzPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBxLXB5LW1kXCI+XG4gICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yPlxuICAgICAgICAgIDxxLWl0ZW0gdi1yaXBwbGVcbiAgICAgICAgICAgID48cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcmVzdWx0cy5hbGlhcyB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+QWxpYXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+PC9xLWl0ZW1cbiAgICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbSB2LXJpcHBsZVxuICAgICAgICAgICAgPjxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyByZXN1bHRzLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5DbGFzczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj48L3EtaXRlbVxuICAgICAgICAgID5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBxLXB5LW1kXCI+XG4gICAgICAgIDxqb2ItZmFpbHVyZS1yZWFzb25zIDphbGlhcz1cInByb3BzLmFsaWFzXCI+PC9qb2ItZmFpbHVyZS1yZWFzb25zPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPlJ1bnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJydW4gaW4gcmVzdWx0cy5ydW5zXCIgOmtleT1cImdldEhhc2gocnVuKVwiPlxuICAgICAgICAgICAgPHRyYWNrZWQtcnVuLWxpc3QtaXRlbSA6dHJhY2tlZC1ydW49XCJydW5cIj4gPC90cmFja2VkLXJ1bi1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG4gIDxxLXBhZ2UgY2xhc3M9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWVsc2U+IExvYWRpbmcgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHsgSm9iUnVuLCBUcmFja2VkSm9iIH0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi9jb21wb3N0YWJsZXMvdXNlQXBpJztcbmltcG9ydCBUcmFja2VkUnVuTGlzdEl0ZW0gZnJvbSAnY29tcG9uZW50cy9UcmFja2VkUnVuTGlzdEl0ZW0udnVlJztcbmltcG9ydCBKb2JGYWlsdXJlUmVhc29ucyBmcm9tICdjb21wb25lbnRzL0pvYkZhaWx1cmVSZWFzb25zLnZ1ZSc7XG5cbmNvbnN0IHJlc3VsdHMgPSByZWY8VHJhY2tlZEpvYiB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYWxpYXM6IHN0cmluZztcbn0+KCk7XG5cbnVzZUFwaSgoYWZ0ZXIpID0+IHtcbiAgYXBpXG4gICAgLmpvYlNob3cocHJvcHMuYWxpYXMpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBUcmFja2VkSm9iKSA9PiAocmVzdWx0cy52YWx1ZSA9IHJlc3BvbnNlKSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KTtcblxuZnVuY3Rpb24gZ2V0SGFzaChqb2JSdW46IEpvYlJ1bik6IHN0cmluZyB7XG4gIHJldHVybiBqb2JSdW4udXVpZDtcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ00sVUFBQSxVQUFVLElBQStCLElBQUk7QUFNbkQsV0FBTyxDQUFDLFVBQVU7QUFDaEIsVUFDRyxrQkFBa0IsTUFBTSxLQUFLLEVBQzdCLEtBQUssQ0FBQyxhQUFrQyxRQUFRLFFBQVEsUUFBUyxFQUNqRSxRQUFRLEtBQUs7QUFBQSxJQUFBLENBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVUssVUFBQSxVQUFVLElBQXVCLElBQUk7QUFNM0MsV0FBTyxDQUFDLFVBQVU7QUFDaEIsVUFDRyxRQUFRLE1BQU0sS0FBSyxFQUNuQixLQUFLLENBQUMsYUFBMEIsUUFBUSxRQUFRLFFBQVMsRUFDekQsUUFBUSxLQUFLO0FBQUEsSUFBQSxDQUNqQjtBQUVELGFBQVMsUUFBUSxRQUF3QjtBQUN2QyxhQUFPLE9BQU87QUFBQSxJQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
