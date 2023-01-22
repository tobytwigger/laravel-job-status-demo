import { Q as QItemLabel, b as QList } from "./QList.48644d23.js";
import { u as useApi, Q as QSeparator } from "./useApi.50ba7427.js";
import { Q as QPage, a as api } from "./api.4658b333.js";
import { _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, U as createBaseVNode, S as toDisplayString, d as createVNode, R as createTextVNode, V as createElementBlock, W as renderList, F as Fragment, X as resolveComponent } from "./index.45f2db53.js";
import "./render.8c95971b.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
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
      const _component_tracked_run_list_item = resolveComponent("tracked-run-list-item");
      return results.value !== null ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "row items-center justify-evenly"
      }, {
        default: withCtx(() => [
          createBaseVNode("p", null, "Alias: " + toDisplayString(results.value.value.alias), 1),
          createBaseVNode("p", null, "Class: " + toDisplayString(results.value.value.class), 1),
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
                  createVNode(_component_tracked_run_list_item, { "tracked-run": run }, null, 8, ["tracked-run"]),
                  createVNode(QSeparator)
                ]);
              }), 128))
            ]),
            _: 1
          }),
          createTextVNode(" " + toDisplayString(results.value), 1)
        ]),
        _: 1
      })) : (openBlock(), createBlock(QPage, {
        key: 1,
        class: "row items-center justify-evenly"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuODZhOTU1NjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iU2hvd1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgIDxwPkFsaWFzOiB7e3Jlc3VsdHMudmFsdWUuYWxpYXN9fTwvcD5cbiAgICA8cD5DbGFzczoge3tyZXN1bHRzLnZhbHVlLmNsYXNzfX08L3A+XG5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiID5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPlJ1bnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8ZGl2IHYtZm9yPVwicnVuIGluIHJlc3VsdHMucnVuc1wiIDprZXk9XCJnZXRIYXNoKHJ1bilcIj5cbiAgICAgICAgPHRyYWNrZWQtcnVuLWxpc3QtaXRlbSAgOnRyYWNrZWQtcnVuPVwicnVuXCI+XG4gICAgICAgIDwvdHJhY2tlZC1ydW4tbGlzdC1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuXG4gICAge3tyZXN1bHRzfX1cbiAgPC9xLXBhZ2U+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCIgdi1lbHNlPlxuICAgIExvYWRpbmdcbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXBpIGZyb20gJ3NyYy91dGlscy9jbGllbnQvYXBpJztcbmltcG9ydCB7Sm9iUnVuLCBUcmFja2VkSm9ifSBmcm9tICdzcmMvdHlwZXMvYXBpJztcbmltcG9ydCB7dXNlQXBpfSBmcm9tIFwiLi4vY29tcG9zdGFibGVzL3VzZUFwaVwiO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPFRyYWNrZWRKb2J8bnVsbD4obnVsbCk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBhbGlhczogc3RyaW5nXG59PigpO1xuXG51c2VBcGkoKGFmdGVyKSA9PiB7XG4gIGFwaS5qb2JTaG93KHByb3BzLmFsaWFzKVxuICAgIC50aGVuKChyZXNwb25zZTogVHJhY2tlZEpvYikgPT4gcmVzdWx0cy52YWx1ZSA9IHJlc3BvbnNlKVxuICAgIC5maW5hbGx5KGFmdGVyKTtcbn0pXG5cbmZ1bmN0aW9uIGdldEhhc2goam9iUnVuOiBKb2JSdW4pOiBzdHJpbmcge1xuICByZXR1cm4gam9iUnVuLnV1aWQ7XG59XG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBNkJNLFVBQUEsVUFBVSxJQUFxQixJQUFJO0FBTXpDLFdBQU8sQ0FBQyxVQUFVO0FBQ2hCLFVBQUksUUFBUSxNQUFNLEtBQUssRUFDcEIsS0FBSyxDQUFDLGFBQXlCLFFBQVEsUUFBUSxRQUFRLEVBQ3ZELFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDakI7QUFFRCxhQUFTLFFBQVEsUUFBd0I7QUFDdkMsYUFBTyxPQUFPO0FBQUEsSUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
