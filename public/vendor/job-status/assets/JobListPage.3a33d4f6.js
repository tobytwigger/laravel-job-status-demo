import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.7a9b2569.js";
import { Q as QPage, a as api } from "./api.94567039.js";
import { Q as QIcon, b as QBtn } from "./QBtn.c6908b04.js";
import { _ as _export_sfc, L as defineComponent, c as computed, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, Z as unref, r as ref, o as onMounted, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode } from "./index.40263129.js";
import "./render.1f1c12cc.js";
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
    console.log(props.trackedJob);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuM2EzM2Q0ZjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvdHlwZXMvYXBpLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9jb21wb25lbnRzL1RyYWNrZWRKb2JMaXN0SXRlbS52dWUiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3BhZ2VzL0pvYkxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJlc3VsdHMge1xuICBqb2JzOiBUcmFja2VkSm9iW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlZEpvYiB7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH0sXG4gIHJ1bnM6IEpvYlJ1bltdO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYlJ1biB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHV1aWQ6IHN0cmluZztcbiAgcGFyZW50OiBKb2JSdW4sXG4gIHRhZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRSZXNwb25zZSB7XG4gIHRlc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gU3RhdHVzIHtcbiAgUXVldWVkID0gJ3F1ZXVlZCcsXG4gIFN0YXJ0ZWQgPSAnc3RhcnRlZCcsXG4gIENhbmNlbGxlZCA9ICdjYW5jZWxsZWQnLFxuICBGYWlsZWQgPSAnZmFpbGVkJyxcbiAgU3VjY2VlZGVkID0gJ3N1Y2NlZWRlZCcsXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICA8cS1pY29uIG5hbWU9XCJhY2NvdW50X3RyZWVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+e3sgcHJvcHMudHJhY2tlZEpvYi5hbGlhcyA/PyBwcm9wcy50cmFja2VkSm9iLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7IHByb3BzLnRyYWNrZWRKb2IuY291bnQgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LThcIj4gLSB7eyBmYWlsZWRDb3VudCB9fTwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMVwiPlxuICAgICAgICBAcnN0b2VuZXNjdSBpbiAjMzogPiBHZW5lcmljIHR5cGUgcGFyYW1ldGVyIGZvciBwcm9wc1xuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwicS1tdC14cyB0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIj5PcGVuIGluIEdpdEh1Yjwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIHNpZGU+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LTggcS1ndXR0ZXIteHNcIj5cbiAgICAgICAgPHEtYnRuIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGZsYXQgZGVuc2Ugcm91bmQgaWNvbj1cImRlbGV0ZVwiIC8+XG4gICAgICAgIDxxLWJ0biBjbGFzcz1cImd0LXhzXCIgc2l6ZT1cIjEycHhcIiBmbGF0IGRlbnNlIHJvdW5kIGljb249XCJkb25lXCIgLz5cbiAgICAgICAgPHEtYnRuIHNpemU9XCIxMnB4XCIgZmxhdCBkZW5zZSByb3VuZCBpY29uPVwibW9yZV92ZXJ0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUcmFja2VkSm9iLCBKb2JSdW4sIFN0YXR1c30gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja2VkSm9iOiBUcmFja2VkSm9iXG59PigpO1xuY29uc29sZS5sb2cocHJvcHMudHJhY2tlZEpvYik7XG5cbmNvbnN0IGZhaWxlZENvdW50ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHJhY2tlZEpvYi5ydW5zXG4gIC5maWx0ZXIoKGpvYlJ1bjogSm9iUnVuKSA9PiBqb2JSdW4uc3RhdHVzID09PSBTdGF0dXMuRmFpbGVkKVxuICAubGVuZ3RoXG4pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cblxuICAgIDxxLWxpc3QgYm9yZGVyZWQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIiBzdHlsZT1cIm1heC13aWR0aDogNjAwcHhcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+QWxsIEpvYnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHRyYWNrZWQtam9iLWxpc3QtaXRlbSB2LWZvcj1cInJlc3VsdCBpbiByZXN1bHRzLmpvYnNcIiA6a2V5PVwiZ2V0SGFzaChyZXN1bHQpXCIgOnRyYWNrZWQtam9iPVwicmVzdWx0XCI+XG4gICAgICA8L3RyYWNrZWQtam9iLWxpc3QtaXRlbT5cbiAgICA8L3EtbGlzdD5cblxuPCEtLSAgICA8ZGl2Pi0tPlxuPCEtLSAgICAgIHt7cmVzdWx0c319LS0+XG48IS0tICAgIDwvZGl2Pi0tPlxuXG48IS0tICAgIDxidXR0b24gQGNsaWNrPVwibG9hZEFwaVwiPi0tPlxuPCEtLSAgICAgIExvYWQgQVBJLS0+XG48IS0tICAgIDwvYnV0dG9uPi0tPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge1Jlc3VsdHMgYXMgUmVzdWx0c1R5cGV9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IFRyYWNrZWRKb2JMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmFja2VkSm9iTGlzdEl0ZW0udnVlXCI7XG5cbmNvbnN0IHJlc3VsdHMgPSByZWY8UmVzdWx0c1R5cGV8bnVsbD4obnVsbCk7XG5cbmxldCBsb2FkaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gbG9hZEFwaSgpIHtcbiAgbG9hZGluZyA9IHRydWU7XG4gIGFwaS5qb2JMaXN0KClcbiAgICAudGhlbigocmVzcG9uc2U6IFJlc3VsdHNUeXBlKSA9PiB7XG4gICAgICByZXN1bHRzLnZhbHVlID0gcmVzcG9uc2U7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2godHJhY2tlZEpvYjogVHJhY2tlZEpvYik6IHN0cmluZyB7XG4gIHJldHVybiB0cmFja2VkSm9iLmNsYXNzICsgSlNPTi5zdHJpbmdpZnkodHJhY2tlZEpvYi50YWdzKTtcbn1cblxub25Nb3VudGVkKCgpID0+IHtcbiAgbG9hZEFwaSgpO1xufSk7XG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIlN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQThCWSxJQUFBLDJCQUFBQSxZQUFMO0FBQ0xBLFVBQUEsWUFBUztBQUNUQSxVQUFBLGFBQVU7QUFDVkEsVUFBQSxlQUFZO0FBQ1pBLFVBQUEsWUFBUztBQUNUQSxVQUFBLGVBQVk7QUFMRkEsU0FBQUE7QUFBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7QUNVSixZQUFBLElBQUksTUFBTSxVQUFVO0FBRTVCLFVBQU0sY0FBYztBQUFBLE1BQVMsTUFBTSxNQUFNLFdBQVcsS0FDakQsT0FBTyxDQUFDLFdBQW1CLE9BQU8sV0FBVyxPQUFPLE1BQU0sRUFDMUQ7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRyxVQUFBLFVBQVUsSUFBc0IsSUFBSTtBQUkxQyxhQUFTLFVBQVU7QUFFakIsVUFBSSxRQUFRLEVBQ1QsS0FBSyxDQUFDLGFBQTBCO0FBQy9CLGdCQUFRLFFBQVE7QUFBQSxNQUFBLENBQ2pCLEVBQ0EsUUFBUSxNQUFNO0FBQUEsTUFDSCxDQUNYO0FBQUEsSUFDTDtBQUVBLGFBQVMsUUFBUSxZQUFnQztBQUMvQyxhQUFPLFdBQVcsUUFBUSxLQUFLLFVBQVUsV0FBVyxJQUFJO0FBQUEsSUFDMUQ7QUFFQSxjQUFVLE1BQU07QUFDTjtJQUFBLENBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
