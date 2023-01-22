import { u as useDarkProps, a as useDark, Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.a68f8952.js";
import { c as createComponent } from "./render.2b27fd88.js";
import { c as computed, h, g as getCurrentInstance, _ as _export_sfc, L as defineComponent, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, Z as unref, r as ref, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode } from "./index.8668c4ab.js";
import { Q as QPage, a as api } from "./api.f7c8b794.js";
import { Q as QIcon } from "./use-router-link.d4dbfdc4.js";
import { u as useApi } from "./useApi.5f9a2c26.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iTGlzdFBhZ2UuNGVlZDgzNGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy90eXBlcy9hcGkudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvVHJhY2tlZEpvYkxpc3RJdGVtLnZ1ZSIsIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iTGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBpbnNldE1hcCA9IHtcbiAgdHJ1ZTogJ2luc2V0JyxcbiAgaXRlbTogJ2l0ZW0taW5zZXQnLFxuICAnaXRlbS10aHVtYm5haWwnOiAnaXRlbS10aHVtYm5haWwtaW5zZXQnXG59XG5cbmV4cG9ydCBjb25zdCBtYXJnaW5zID0ge1xuICB4czogMixcbiAgc206IDQsXG4gIG1kOiA4LFxuICBsZzogMTYsXG4gIHhsOiAyNFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNlcGFyYXRvcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzcGFjZWQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgaW5zZXQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBzaXplOiBTdHJpbmdcbiAgfSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gJ3ZlcnRpY2FsJ1xuICAgICAgICA6ICdob3Jpem9udGFsJ1xuICAgICkpXG5cbiAgICBjb25zdCBvcmllbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGAgcS1zZXBhcmF0b3ItLSR7IG9yaWVudGF0aW9uLnZhbHVlIH1gKVxuXG4gICAgY29uc3QgaW5zZXRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmluc2V0ICE9PSBmYWxzZVxuICAgICAgICA/IGAkeyBvcmllbnRDbGFzcy52YWx1ZSB9LSR7IGluc2V0TWFwWyBwcm9wcy5pbnNldCBdIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zZXBhcmF0b3IkeyBvcmllbnRDbGFzcy52YWx1ZSB9JHsgaW5zZXRDbGFzcy52YWx1ZSB9YFxuICAgICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZXBhcmF0b3ItLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBpZiAocHJvcHMuc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjY1sgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IHByb3BzLnNpemVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNwYWNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHByb3BzLnNwYWNlZCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYCR7IG1hcmdpbnMubWQgfXB4YFxuICAgICAgICAgIDogcHJvcHMuc3BhY2VkIGluIG1hcmdpbnMgPyBgJHsgbWFyZ2luc1sgcHJvcHMuc3BhY2VkIF0gfXB4YCA6IHByb3BzLnNwYWNlZFxuXG4gICAgICAgIGNvbnN0IGRpciA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBbICdMZWZ0JywgJ1JpZ2h0JyBdXG4gICAgICAgICAgOiBbICdUb3AnLCAnQm90dG9tJyBdXG5cbiAgICAgICAgYWNjWyBgbWFyZ2luJHsgZGlyWyAwIF0gfWAgXSA9IGFjY1sgYG1hcmdpbiR7IGRpclsgMSBdIH1gIF0gPSBzaXplXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2hyJywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlXG4gICAgfSlcbiAgfVxufSlcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0cyB7XG4gIGpvYnM6IFRyYWNrZWRKb2JbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VkSm9iIHtcbiAgY2xhc3M6IHN0cmluZztcbiAgYWxpYXM6IHN0cmluZztcbiAgcnVuczogSm9iUnVuW107XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iUnVuIHtcbiAgYWxpYXM6IHN0cmluZztcbiAgY2xhc3M6IHN0cmluZztcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgdXVpZDogc3RyaW5nO1xuICBwYXJlbnQ6IEpvYlJ1bixcbiAgdGFnczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFJlc3BvbnNlIHtcbiAgdGVzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBTdGF0dXMge1xuICBRdWV1ZWQgPSAncXVldWVkJyxcbiAgU3RhcnRlZCA9ICdzdGFydGVkJyxcbiAgQ2FuY2VsbGVkID0gJ2NhbmNlbGxlZCcsXG4gIEZhaWxlZCA9ICdmYWlsZWQnLFxuICBTdWNjZWVkZWQgPSAnc3VjY2VlZGVkJyxcbn1cblxuLy8gZXhwb3J0IGludGVyZmFjZSBGdWxsVHJhY2tlZEpvYiBleHRlbmRzIFRyYWNrZWRKb2J7XG4vL1xuLy8gfVxuIiwiPHRlbXBsYXRlPlxuICA8cS1pdGVtIGNsaWNrYWJsZSA6dG89XCJ7bmFtZTogJ2pvYnMuc2hvdycsIHBhcmFtczoge2FsaWFzOiBwcm9wcy50cmFja2VkSm9iLmFsaWFzfX1cIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHRvcD5cbiAgICAgIDxxLWljb24gbmFtZT1cImFjY291bnRfdHJlZVwiIGNvbG9yPVwiYmxhY2tcIiBzaXplPVwiMzRweFwiIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3AgY2xhc3M9XCJjb2wtMiBndC1zbVwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInEtbXQtc21cIj57eyBwcm9wcy50cmFja2VkSm9iLmFsaWFzID8/IHByb3BzLnRyYWNrZWRKb2IuY2xhc3MgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgPHEtaXRlbS1zZWN0aW9uIHRvcD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+e3sgcnVubmluZ0NvdW50IH19IHJ1bm5pbmc8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LThcIj4gLSB7eyBmaW5pc2hlZENvdW50IH19IGZpbmlzaGVkLjwvc3Bhbj5cbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlxuICAgICAgICB7eyBmYWlsZWRDb3VudCB9fSBmYWlsZWRcbiAgICAgICAge3sgcXVldWVkQ291bnQgfX0gcXVldWVkXG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgPHEtaXRlbS1zZWN0aW9uIHRvcCBzaWRlPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS04IHEtZ3V0dGVyLXhzXCI+XG4gICAgICAgIDxxLWljb24gY2xhc3M9XCJndC14c1wiIHNpemU9XCIxMnB4XCIgaWNvbj1cImtleWJvYXJkX2Fycm93X3JpZ2h0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUcmFja2VkSm9iLCBKb2JSdW4sIFN0YXR1c30gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja2VkSm9iOiBUcmFja2VkSm9iXG59PigpO1xuXG5cbi8vIENvdW50c1xuXG5jb25zdCBmYWlsZWRDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLkZhaWxlZClcbiAgLmxlbmd0aFxuKTtcbmNvbnN0IHJ1bm5pbmdDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlN0YXJ0ZWQpXG4gIC5sZW5ndGhcbik7XG5jb25zdCBxdWV1ZWRDb3VudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRyYWNrZWRKb2IucnVuc1xuICAuZmlsdGVyKChqb2JSdW46IEpvYlJ1bikgPT4gam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlF1ZXVlZClcbiAgLmxlbmd0aFxuKTtcbmNvbnN0IGZpbmlzaGVkQ291bnQgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50cmFja2VkSm9iLnJ1bnNcbiAgLmZpbHRlcigoam9iUnVuOiBKb2JSdW4pID0+IGpvYlJ1bi5zdGF0dXMgPT09IFN0YXR1cy5DYW5jZWxsZWQgfHwgam9iUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlN1Y2NlZWRlZClcbiAgLmxlbmd0aFxuKTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XG5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5BbGwgSm9iczwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDxkaXYgdi1mb3I9XCJyZXN1bHQgaW4gcmVzdWx0cy5qb2JzXCIgOmtleT1cImdldEhhc2gocmVzdWx0KVwiPlxuICAgICAgICA8dHJhY2tlZC1qb2ItbGlzdC1pdGVtICA6dHJhY2tlZC1qb2I9XCJyZXN1bHRcIj5cbiAgICAgICAgPC90cmFja2VkLWpvYi1saXN0LWl0ZW0+XG4gICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWxpc3Q+XG5cbjwhLS0gICAgPGRpdj4tLT5cbjwhLS0gICAgICB7e3Jlc3VsdHN9fS0tPlxuPCEtLSAgICA8L2Rpdj4tLT5cblxuPCEtLSAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRBcGlcIj4tLT5cbjwhLS0gICAgICBMb2FkIEFQSS0tPlxuPCEtLSAgICA8L2J1dHRvbj4tLT5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXBpIGZyb20gJ3NyYy91dGlscy9jbGllbnQvYXBpJztcbmltcG9ydCB7UmVzdWx0cyBhcyBSZXN1bHRzVHlwZX0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQgVHJhY2tlZEpvYkxpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL1RyYWNrZWRKb2JMaXN0SXRlbS52dWVcIjtcbmltcG9ydCB7dXNlQXBpfSBmcm9tIFwiLi4vY29tcG9zdGFibGVzL3VzZUFwaVwiO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPFJlc3VsdHNUeXBlfG51bGw+KG51bGwpO1xuXG51c2VBcGkoKGFmdGVyKSA9PiB7XG4gIGFwaS5qb2JMaXN0KClcbiAgICAudGhlbigocmVzcG9uc2U6IFJlc3VsdHNUeXBlKSA9PiByZXN1bHRzLnZhbHVlID0gcmVzcG9uc2UpXG4gICAgLmZpbmFsbHkoYWZ0ZXIpO1xufSlcblxuZnVuY3Rpb24gZ2V0SGFzaCh0cmFja2VkSm9iOiBUcmFja2VkSm9iKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRyYWNrZWRKb2IuY2xhc3MgKyBKU09OLnN0cmluZ2lmeSh0cmFja2VkSm9iLnRhZ3MpO1xufVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsTUFBTSxXQUFXO0FBQUEsRUFDZixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixrQkFBa0I7QUFDcEI7QUFFTyxNQUFNLFVBQVU7QUFBQSxF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
