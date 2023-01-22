import { u as useDarkProps, a as useDark, Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.94fda3f9.js";
import { c as createComponent } from "./render.089066c7.js";
import { c as computed, h, g as getCurrentInstance, _ as _export_sfc, L as defineComponent, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, Z as unref, r as ref, o as onMounted, b as onUnmounted, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode } from "./index.0f334255.js";
import { Q as QPage, a as api } from "./api.4467c78b.js";
import { Q as QIcon } from "./use-router-link.bbdd80f8.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = computed(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
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
const _hoisted_3 = { class: "text-grey-8 q-gutter-xs" };
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
      return openBlock(), createBlock(QItem, {
        clickable: "",
        to: { name: "jobs.show", params: { alias: props.trackedJob.alias } }
      }, {
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
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, {
            top: "",
            side: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QIcon, {
                  class: "gt-xs",
                  size: "12px",
                  icon: "keyboard_arrow_right"
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var TrackedJobListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TrackedJobListItem.vue"]]);
function useApi(callApi) {
  const loading = ref(false);
  function triggerApiCall() {
    loading.value = true;
    function after() {
      loading.value = false;
    }
    callApi(after);
  }
  let intervalId;
  onMounted(() => {
    intervalId = setInterval(() => triggerApiCall(), 1e3);
    triggerApiCall();
  });
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  return {
    loading,
    triggerApiCall
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobListPage",
  setup(__props) {
    const results = ref(null);
    useApi((after) => {
      api.jobList().then((response) => results.value = response).finally(after);
    });
    function getHash(trackedJob) {
      return trackedJob.class + JSON.stringify(trackedJob.tags);
    }
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
              createVNode(QSeparator),
              (openBlock(true), createElementBlock(Fragment, null, renderList(results.value.jobs, (result) => {
                return openBlock(), createElementBlock("div", {
                  key: getHash(result)
                }, [
                  createVNode(TrackedJobListItem, { "tracked-job": result }, null, 8, ["tracked-job"]),
                  createVNode(QSeparator)
                ]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuMGMyOTkyOGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy90eXBlcy9hcGkudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvVHJhY2tlZEpvYkxpc3RJdGVtLnZ1ZSIsIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvY29tcG9zdGFibGVzL3VzZUFwaS50cyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iTGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBpbnNldE1hcCA9IHtcbiAgdHJ1ZTogJ2luc2V0JyxcbiAgaXRlbTogJ2l0ZW0taW5zZXQnLFxuICAnaXRlbS10aHVtYm5haWwnOiAnaXRlbS10aHVtYm5haWwtaW5zZXQnXG59XG5cbmV4cG9ydCBjb25zdCBtYXJnaW5zID0ge1xuICB4czogMixcbiAgc206IDQsXG4gIG1kOiA4LFxuICBsZzogMTYsXG4gIHhsOiAyNFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNlcGFyYXRvcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzcGFjZWQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgaW5zZXQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBzaXplOiBTdHJpbmdcbiAgfSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gJ3ZlcnRpY2FsJ1xuICAgICAgICA6ICdob3Jpem9udGFsJ1xuICAgICkpXG5cbiAgICBjb25zdCBvcmllbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGAgcS1zZXBhcmF0b3ItLSR7IG9yaWVudGF0aW9uLnZhbHVlIH1gKVxuXG4gICAgY29uc3QgaW5zZXRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmluc2V0ICE9PSBmYWxzZVxuICAgICAgICA/IGAkeyBvcmllbnRDbGFzcy52YWx1ZSB9LSR7IGluc2V0TWFwWyBwcm9wcy5pbnNldCBdIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zZXBhcmF0b3IkeyBvcmllbnRDbGFzcy52YWx1ZSB9JHsgaW5zZXRDbGFzcy52YWx1ZSB9YFxuICAgICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZXBhcmF0b3ItLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBpZiAocHJvcHMuc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjY1sgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IHByb3BzLnNpemVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNwYWNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHByb3BzLnNwYWNlZCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYCR7IG1hcmdpbnMubWQgfXB4YFxuICAgICAgICAgIDogcHJvcHMuc3BhY2VkIGluIG1hcmdpbnMgPyBgJHsgbWFyZ2luc1sgcHJvcHMuc3BhY2VkIF0gfXB4YCA6IHByb3BzLnNwYWNlZFxuXG4gICAgICAgIGNvbnN0IGRpciA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBbICdMZWZ0JywgJ1JpZ2h0JyBdXG4gICAgICAgICAgOiBbICdUb3AnLCAnQm90dG9tJyBdXG5cbiAgICAgICAgYWNjWyBgbWFyZ2luJHsgZGlyWyAwIF0gfWAgXSA9IGFjY1sgYG1hcmdpbiR7IGRpclsgMSBdIH1gIF0gPSBzaXplXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2hyJywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlXG4gICAgfSlcbiAgfVxufSlcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0cyB7XG4gIGpvYnM6IFRyYWNrZWRKb2JbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VkSm9iIHtcbiAgY2xhc3M6IHN0cmluZztcbiAgYWxpYXM6IHN0cmluZztcbiAgcnVuczogSm9iUnVuW107XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iUnVuIHtcbiAgYWxpYXM6IHN0cmluZztcbiAgY2xhc3M6IHN0cmluZztcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgdXVpZDogc3RyaW5nO1xuICBwYXJlbnQ6IEpvYlJ1bixcbiAgdGFnczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFJlc3BvbnNlIHtcbiAgdGVzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBTdGF0dXMge1xuICBRdWV1ZWQgPSAncXVldWVkJyxcbiAgU3RhcnRlZCA9ICdzdGFydGVkJyxcbiAgQ2FuY2VsbGVkID0gJ2NhbmNlbGxlZCcsXG4gIEZhaWxlZCA9ICdmYWlsZWQnLFxuICBTdWNjZWVkZWQgPSAnc3VjY2VlZGVkJyxcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbSBjbGlja2FibGUgOnRvPVwie25hbWU6ICdqb2JzLnNob3cnLCBwYXJhbXM6IHthbGlhczogcHJvcHMudHJhY2tlZEpvYi5hbGlhc319XCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICA8cS1pY29uIG5hbWU9XCJhY2NvdW50X3RyZWVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+e3sgcHJvcHMudHJhY2tlZEpvYi5hbGlhcyA/PyBwcm9wcy50cmFja2VkSm9iLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7IHJ1bm5pbmdDb3VudCB9fSBydW5uaW5nPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS04XCI+IC0ge3sgZmluaXNoZWRDb3VudCB9fSBmaW5pc2hlZC48L3NwYW4+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5cbiAgICAgICAge3sgZmFpbGVkQ291bnQgfX0gZmFpbGVkXG4gICAgICAgIHt7IHF1ZXVlZENvdW50IH19IHF1ZXVlZFxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3Agc2lkZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktOCBxLWd1dHRlci14c1wiPlxuICAgICAgICA8cS1pY29uIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGljb249XCJrZXlib2FyZF9hcnJvd19yaWdodFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge2NvbXB1dGVkLCBkZWZpbmVQcm9wc30gZnJvbSAndnVlJztcbmltcG9ydCB7VHJhY2tlZEpvYiwgSm9iUnVuLCBTdGF0dXN9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdHJhY2tlZEpvYjogVHJhY2tlZEpvYlxufT4oKTtcblxuXG4vLyBDb3VudHNcblxuY29uc3QgZmFpbGVkQ291bnQgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50cmFja2VkSm9iLnJ1bnNcbiAgLmZpbHRlcigoam9iUnVuOiBKb2JSdW4pID0+IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5GYWlsZWQpXG4gIC5sZW5ndGhcbik7XG5jb25zdCBydW5uaW5nQ291bnQgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50cmFja2VkSm9iLnJ1bnNcbiAgLmZpbHRlcigoam9iUnVuOiBKb2JSdW4pID0+IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5TdGFydGVkKVxuICAubGVuZ3RoXG4pO1xuY29uc3QgcXVldWVkQ291bnQgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50cmFja2VkSm9iLnJ1bnNcbiAgLmZpbHRlcigoam9iUnVuOiBKb2JSdW4pID0+IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5RdWV1ZWQpXG4gIC5sZW5ndGhcbik7XG5jb25zdCBmaW5pc2hlZENvdW50ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHJhY2tlZEpvYi5ydW5zXG4gIC5maWx0ZXIoKGpvYlJ1bjogSm9iUnVuKSA9PiBqb2JSdW4uc3RhdHVzID09PSBTdGF0dXMuQ2FuY2VsbGVkIHx8IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5TdWNjZWVkZWQpXG4gIC5sZW5ndGhcbik7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IHtvbk1vdW50ZWQsIG9uVW5tb3VudGVkLCByZWZ9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBUaW1lb3V0ID0gTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcGkoY2FsbEFwaTogKGFmdGVyOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gIGNvbnN0IGxvYWRpbmcgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXJBcGlDYWxsKCkge1xuICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgZnVuY3Rpb24gYWZ0ZXIoKTogdm9pZCB7XG4gICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIGNhbGxBcGkoYWZ0ZXIpO1xuICB9XG5cbiAgbGV0IGludGVydmFsSWQ6IFRpbWVvdXQ7XG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdHJpZ2dlckFwaUNhbGwoKSwgMTAwMCk7XG4gICAgdHJpZ2dlckFwaUNhbGwoKTtcbiAgfSk7XG5cbiAgb25Vbm1vdW50ZWQoKCkgPT4ge1xuICAgIGlmKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nLFxuICAgIHRyaWdnZXJBcGlDYWxsXG4gIH1cblxufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxuXG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiIHN0eWxlPVwibWluLXdpZHRoOiA4NSVcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+QWxsIEpvYnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8ZGl2IHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHMuam9ic1wiIDprZXk9XCJnZXRIYXNoKHJlc3VsdClcIj5cbiAgICAgICAgPHRyYWNrZWQtam9iLWxpc3QtaXRlbSAgOnRyYWNrZWQtam9iPVwicmVzdWx0XCI+XG4gICAgICAgIDwvdHJhY2tlZC1qb2ItbGlzdC1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuXG48IS0tICAgIDxkaXY+LS0+XG48IS0tICAgICAge3tyZXN1bHRzfX0tLT5cbjwhLS0gICAgPC9kaXY+LS0+XG5cbjwhLS0gICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkQXBpXCI+LS0+XG48IS0tICAgICAgTG9hZCBBUEktLT5cbjwhLS0gICAgPC9idXR0b24+LS0+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge1Jlc3VsdHMgYXMgUmVzdWx0c1R5cGV9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IFRyYWNrZWRKb2JMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmFja2VkSm9iTGlzdEl0ZW0udnVlXCI7XG5pbXBvcnQge3VzZUFwaX0gZnJvbSBcIi4uL2NvbXBvc3RhYmxlcy91c2VBcGlcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxSZXN1bHRzVHlwZXxudWxsPihudWxsKTtcblxudXNlQXBpKChhZnRlcikgPT4ge1xuICBhcGkuam9iTGlzdCgpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBSZXN1bHRzVHlwZSkgPT4gcmVzdWx0cy52YWx1ZSA9IHJlc3BvbnNlKVxuICAgIC5maW5hbGx5KGFmdGVyKTtcbn0pXG5cbmZ1bmN0aW9uIGdldEhhc2godHJhY2tlZEpvYjogVHJhY2tlZEpvYik6IHN0cmluZyB7XG4gIHJldHVybiB0cmFja2VkSm9iLmNsYXNzICsgSlNPTi5zdHJpbmdpZnkodHJhY2tlZEpvYi50YWdzKTtcbn1cblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxXQUFXO0FBQUEsRUFDZixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixrQkFBa0I7QUFDcEI7QUFFTyxNQUFNLFVBQVU7QUFBQSxFQUNyQixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQ047QUFFQSxJQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsUUFBUSxDQUFFLFNBQVMsTUFBUTtBQUFBLElBQzNCLE9BQU8sQ0FBRSxTQUFTLE1BQVE7QUFBQSxJQUMxQixVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBRUQsTUFBTyxPQUFP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
