import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.44953f5b.js";
import { Q as QPage, a as api } from "./api.fcc6b201.js";
import { Q as QIcon, b as QBtn } from "./QBtn.60ce7508.js";
import { _ as _export_sfc, L as defineComponent, c as computed, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, Z as unref, r as ref, o as onMounted, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode } from "./index.61242e81.js";
import "./render.05449bd8.js";
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
    const runningCount = computed(
      () => props.trackedJob.runs.filter((jobRun) => jobRun.status === Status.Started).length
    );
    const queuedCount = computed(
      () => props.trackedJob.runs.filter((jobRun) => jobRun.status === Status.Queued).length
    );
    const finishedCount = computed(
      () => props.trackedJob.runs.filter((jobRun) => jobRun.status === Status.Cancelled || jobRun.status === Status.Succeeded).length
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
                  createBaseVNode("span", _hoisted_1, toDisplayString(unref(runningCount)) + " running", 1),
                  createBaseVNode("span", _hoisted_2, " - " + toDisplayString(unref(finishedCount)) + " finished.", 1)
                ]),
                _: 1
              }),
              createVNode(QItemLabel, {
                caption: "",
                lines: "2"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(failedCount)) + " failed " + toDisplayString(unref(queuedCount)) + " queued ", 1)
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
            style: { "min-width": "85%" }
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
                  key: getHash(result),
                  "tracked-job": result
                }, null, 8, ["tracked-job"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuYjllNjFjOTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvdHlwZXMvYXBpLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9jb21wb25lbnRzL1RyYWNrZWRKb2JMaXN0SXRlbS52dWUiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3BhZ2VzL0pvYkxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJlc3VsdHMge1xuICBqb2JzOiBUcmFja2VkSm9iW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlZEpvYiB7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH0sXG4gIHJ1bnM6IEpvYlJ1bltdO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYlJ1biB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHV1aWQ6IHN0cmluZztcbiAgcGFyZW50OiBKb2JSdW4sXG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRSZXNwb25zZSB7XG4gIHRlc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gU3RhdHVzIHtcbiAgUXVldWVkID0gJ3F1ZXVlZCcsXG4gIFN0YXJ0ZWQgPSAnc3RhcnRlZCcsXG4gIENhbmNlbGxlZCA9ICdjYW5jZWxsZWQnLFxuICBGYWlsZWQgPSAnZmFpbGVkJyxcbiAgU3VjY2VlZGVkID0gJ3N1Y2NlZWRlZCcsXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICA8cS1pY29uIG5hbWU9XCJhY2NvdW50X3RyZWVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+e3sgcHJvcHMudHJhY2tlZEpvYi5hbGlhcyA/PyBwcm9wcy50cmFja2VkSm9iLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7IHJ1bm5pbmdDb3VudCB9fSBydW5uaW5nPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS04XCI+IC0ge3sgZmluaXNoZWRDb3VudCB9fSBmaW5pc2hlZC48L3NwYW4+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5cbiAgICAgICAge3sgZmFpbGVkQ291bnQgfX0gZmFpbGVkXG4gICAgICAgIHt7IHF1ZXVlZENvdW50IH19IHF1ZXVlZFxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwicS1tdC14cyB0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIj5PcGVuIGluIEdpdEh1Yjwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIHNpZGU+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LTggcS1ndXR0ZXIteHNcIj5cbiAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRlbGV0ZVwiIC8+XG4gICAgICAgIDxxLWJ0biBjbGFzcz1cImd0LXhzXCIgc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJkb25lXCIgLz5cbiAgICAgICAgPHEtYnRuIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwibW9yZV92ZXJ0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUcmFja2VkSm9iLCBKb2JSdW4sIFN0YXR1c30gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja2VkSm9iOiBUcmFja2VkSm9iXG59PigpO1xuXG5cbi8vIENvdW50c1xuXG5jb25zdCBmYWlsZWRDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLkZhaWxlZClcbiAgLmxlbmd0aFxuKTtcbmNvbnN0IHJ1bm5pbmdDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlN0YXJ0ZWQpXG4gIC5sZW5ndGhcbik7XG5jb25zdCBxdWV1ZWRDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlF1ZXVlZClcbiAgLmxlbmd0aFxuKTtcbmNvbnN0IGZpbmlzaGVkQ291bnQgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50cmFja2VkSm9iLnJ1bnNcbiAgLmZpbHRlcigoam9iUnVuOiBKb2JSdW4pID0+IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5DYW5jZWxsZWQgfHwgam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlN1Y2NlZWRlZClcbiAgLmxlbmd0aFxuKTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XG5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5BbGwgSm9iczwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICA8dHJhY2tlZC1qb2ItbGlzdC1pdGVtIHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHMuam9ic1wiIDprZXk9XCJnZXRIYXNoKHJlc3VsdClcIiA6dHJhY2tlZC1qb2I9XCJyZXN1bHRcIj5cbiAgICAgIDwvdHJhY2tlZC1qb2ItbGlzdC1pdGVtPlxuICAgIDwvcS1saXN0PlxuXG48IS0tICAgIDxkaXY+LS0+XG48IS0tICAgICAge3tyZXN1bHRzfX0tLT5cbjwhLS0gICAgPC9kaXY+LS0+XG5cbjwhLS0gICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkQXBpXCI+LS0+XG48IS0tICAgICAgTG9hZCBBUEktLT5cbjwhLS0gICAgPC9idXR0b24+LS0+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7b25Nb3VudGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXBpIGZyb20gJ3NyYy91dGlscy9jbGllbnQvYXBpJztcbmltcG9ydCB7UmVzdWx0cyBhcyBSZXN1bHRzVHlwZX0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQgVHJhY2tlZEpvYkxpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL1RyYWNrZWRKb2JMaXN0SXRlbS52dWVcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxSZXN1bHRzVHlwZXxudWxsPihudWxsKTtcblxubGV0IGxvYWRpbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBsb2FkQXBpKCkge1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgYXBpLmpvYkxpc3QoKVxuICAgIC50aGVuKChyZXNwb25zZTogUmVzdWx0c1R5cGUpID0+IHtcbiAgICAgIHJlc3VsdHMudmFsdWUgPSByZXNwb25zZTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh0cmFja2VkSm9iOiBUcmFja2VkSm9iKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRyYWNrZWRKb2IuY2xhc3MgKyBKU09OLnN0cmluZ2lmeSh0cmFja2VkSm9iLnRhZ3MpO1xufVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkQXBpKCk7XG59KTtcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBOEJZLElBQUEsMkJBQUFBLFlBQUw7QUFDTEEsVUFBQSxZQUFTO0FBQ1RBLFVBQUEsYUFBVTtBQUNWQSxVQUFBLGVBQVk7QUFDWkEsVUFBQSxZQUFTO0FBQ1RBLFVBQUEsZUFBWTtBQUxGQSxTQUFBQTtBQUFBLEdBQUEsVUFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7OztBQ2VaLFVBQU0sY0FBYztBQUFBLE1BQVMsTUFBTSxNQUFNLFdBQVcsS0FDakQsT0FBTyxDQUFDLFdBQW1CLE9BQU8sV0FBVyxPQUFPLE1BQU0sRUFDMUQ7QUFBQSxJQUFBO0FBRUgsVUFBTSxlQUFlO0FBQUEsTUFBUyxNQUFNLE1BQU0sV0FBVyxLQUNsRCxPQUFPLENBQUMsV0FBbUIsT0FBTyxXQUFXLE9BQU8sT0FBTyxFQUMzRDtBQUFBLElBQUE7QUFFSCxVQUFNLGNBQWM7QUFBQSxNQUFTLE1BQU0sTUFBTSxXQUFXLEtBQ2pELE9BQU8sQ0FBQyxXQUFtQixPQUFPLFdBQVcsT0FBTyxNQUFNLEVBQzFEO0FBQUEsSUFBQTtBQUVILFVBQU0sZ0JBQWdCO0FBQUEsTUFBUyxNQUFNLE1BQU0sV0FBVyxLQUNuRCxPQUFPLENBQUMsV0FBbUIsT0FBTyxXQUFXLE9BQU8sYUFBYSxPQUFPLFdBQVcsT0FBTyxTQUFTLEVBQ25HO0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0csVUFBQSxVQUFVLElBQXNCLElBQUk7QUFJMUMsYUFBUyxVQUFVO0FBRWpCLFVBQUksUUFBUSxFQUNULEtBQUssQ0FBQyxhQUEwQjtBQUMvQixnQkFBUSxRQUFRO0FBQUEsTUFBQSxDQUNqQixFQUNBLFFBQVEsTUFBTTtBQUFBLE1BQ0gsQ0FDWDtBQUFBLElBQ0w7QUFFQSxhQUFTLFFBQVEsWUFBZ0M7QUFDL0MsYUFBTyxXQUFXLFFBQVEsS0FBSyxVQUFVLFdBQVcsSUFBSTtBQUFBLElBQzFEO0FBRUEsY0FBVSxNQUFNO0FBQ047SUFBQSxDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
