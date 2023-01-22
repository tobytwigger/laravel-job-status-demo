import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.80fab1c5.js";
import { Q as QPage, a as api } from "./api.f4905cca.js";
import { Q as QIcon, b as QBtn } from "./QBtn.878f10a1.js";
import { _ as _export_sfc, L as defineComponent, c as computed, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, Z as unref, r as ref, o as onMounted, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode } from "./index.448a83f3.js";
import "./render.fe22c3a6.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["Queued"] = "queued";
  Status2["Started"] = "started";
  Status2["Cancelled"] = "cancelled";
  Status2["Failed"] = "failed";
  Status2["Succeeded"] = "succeeded";
  return Status2;
})(Status || {});
const _hoisted_1 = { class: "text-weight-medium" };
const _hoisted_2 = { class: "text-grey-8" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "cursor-pointer" }, "Open in GitHub", -1);
const _hoisted_4 = { class: "text-grey-8 q-gutter-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackedJobListItem",
  props: {
    trackedJob: null
  },
  setup(__props) {
    const props = __props;
    const failedCount = computed(
      () => props.trackedJob.runs.filter((jobRun) => jobRun.status === Status.Failed).length
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QItem, null, {
        default: withCtx(() => [
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
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString((_a = props.trackedJob.alias) != null ? _a : props.trackedJob.class), 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, { top: "" }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { lines: "1" }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_1, toDisplayString(props.trackedJob.count), 1),
                  createBaseVNode("span", _hoisted_2, " - " + toDisplayString(unref(failedCount)), 1)
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
        _: 1
      });
    };
  }
});
var TrackedJobListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TrackedJobListItem.vue"]]);
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
                return openBlock(), createBlock(TrackedJobListItem, {
                  key: getHash(result)
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuNWEwOWVmZjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvdHlwZXMvYXBpLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9jb21wb25lbnRzL1RyYWNrZWRKb2JMaXN0SXRlbS52dWUiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3BhZ2VzL0pvYkxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJlc3VsdHMge1xuICBqb2JzOiBUcmFja2VkSm9iW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlZEpvYiB7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH0sXG4gIHJ1bnM6IEpvYlJ1bltdO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYlJ1biB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHV1aWQ6IHN0cmluZztcbiAgcGFyZW50OiBKb2JSdW4sXG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRSZXNwb25zZSB7XG4gIHRlc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gU3RhdHVzIHtcbiAgUXVldWVkID0gJ3F1ZXVlZCcsXG4gIFN0YXJ0ZWQgPSAnc3RhcnRlZCcsXG4gIENhbmNlbGxlZCA9ICdjYW5jZWxsZWQnLFxuICBGYWlsZWQgPSAnZmFpbGVkJyxcbiAgU3VjY2VlZGVkID0gJ3N1Y2NlZWRlZCcsXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICA8cS1pY29uIG5hbWU9XCJhY2NvdW50X3RyZWVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+e3sgcHJvcHMudHJhY2tlZEpvYi5hbGlhcyA/PyBwcm9wcy50cmFja2VkSm9iLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7IHByb3BzLnRyYWNrZWRKb2IuY291bnQgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LThcIj4gLSB7eyBmYWlsZWRDb3VudCB9fTwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMVwiPlxuICAgICAgICBAcnN0b2VuZXNjdSBpbiAjMzogPiBHZW5lcmljIHR5cGUgcGFyYW1ldGVyIGZvciBwcm9wc1xuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwicS1tdC14cyB0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIj5PcGVuIGluIEdpdEh1Yjwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIHNpZGU+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LTggcS1ndXR0ZXIteHNcIj5cbiAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRlbGV0ZVwiIC8+XG4gICAgICAgIDxxLWJ0biBjbGFzcz1cImd0LXhzXCIgc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJkb25lXCIgLz5cbiAgICAgICAgPHEtYnRuIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwibW9yZV92ZXJ0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUcmFja2VkSm9iLCBKb2JSdW4sIFN0YXR1c30gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja2VkSm9iOiBUcmFja2VkSm9iXG59PigpO1xuXG5jb25zdCBmYWlsZWRDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLkZhaWxlZClcbiAgLmxlbmd0aFxuKTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XG5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDYwMHB4XCIgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPkFsbCBKb2JzPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgIDx0cmFja2VkLWpvYi1saXN0LWl0ZW0gdi1mb3I9XCJyZXN1bHQgaW4gcmVzdWx0cy5qb2JzXCIgOmtleT1cImdldEhhc2gocmVzdWx0KVwiPlxuICAgICAgPC90cmFja2VkLWpvYi1saXN0LWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbjwhLS0gICAgPGRpdj4tLT5cbjwhLS0gICAgICB7e3Jlc3VsdHN9fS0tPlxuPCEtLSAgICA8L2Rpdj4tLT5cblxuPCEtLSAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRBcGlcIj4tLT5cbjwhLS0gICAgICBMb2FkIEFQSS0tPlxuPCEtLSAgICA8L2J1dHRvbj4tLT5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtSZXN1bHRzIGFzIFJlc3VsdHNUeXBlfSBmcm9tICdzcmMvdHlwZXMvYXBpJztcbmltcG9ydCBUcmFja2VkSm9iTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVHJhY2tlZEpvYkxpc3RJdGVtLnZ1ZVwiO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPFJlc3VsdHNUeXBlfG51bGw+KG51bGwpO1xuXG5sZXQgbG9hZGluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIGxvYWRBcGkoKSB7XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBhcGkuam9iTGlzdCgpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBSZXN1bHRzVHlwZSkgPT4ge1xuICAgICAgcmVzdWx0cy52YWx1ZSA9IHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHRyYWNrZWRKb2I6IFRyYWNrZWRKb2IpOiBzdHJpbmcge1xuICByZXR1cm4gdHJhY2tlZEpvYi5jbGFzcyArIEpTT04uc3RyaW5naWZ5KHRyYWNrZWRKb2IudGFncyk7XG59XG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gIGxvYWRBcGkoKTtcbn0pO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUE4QlksSUFBQSwyQkFBQUEsWUFBTDtBQUNMQSxVQUFBLFlBQVM7QUFDVEEsVUFBQSxhQUFVO0FBQ1ZBLFVBQUEsZUFBWTtBQUNaQSxVQUFBLFlBQVM7QUFDVEEsVUFBQSxlQUFZO0FBTEZBLFNBQUFBO0FBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7O0FDV1osVUFBTSxjQUFjO0FBQUEsTUFBUyxNQUFNLE1BQU0sV0FBVyxLQUNqRCxPQUFPLENBQUMsV0FBbUIsT0FBTyxXQUFXLE9BQU8sTUFBTSxFQUMxRDtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJHLFVBQUEsVUFBVSxJQUFzQixJQUFJO0FBSTFDLGFBQVMsVUFBVTtBQUVqQixVQUFJLFFBQVEsRUFDVCxLQUFLLENBQUMsYUFBMEI7QUFDL0IsZ0JBQVEsUUFBUTtBQUFBLE1BQUEsQ0FDakIsRUFDQSxRQUFRLE1BQU07QUFBQSxNQUNILENBQ1g7QUFBQSxJQUNMO0FBRUEsYUFBUyxRQUFRLFlBQWdDO0FBQy9DLGFBQU8sV0FBVyxRQUFRLEtBQUssVUFBVSxXQUFXLElBQUk7QUFBQSxJQUMxRDtBQUVBLGNBQVUsTUFBTTtBQUNOO0lBQUEsQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
