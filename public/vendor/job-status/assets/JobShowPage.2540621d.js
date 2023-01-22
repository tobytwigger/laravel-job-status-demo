import { Q as QItemLabel, b as QList } from "./QList.33d66254.js";
import { u as useApi, Q as QSeparator } from "./useApi.2cfd2592.js";
import { Q as QPage, a as api } from "./api.99f865b9.js";
import { _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, U as createBaseVNode, S as toDisplayString, d as createVNode, R as createTextVNode, V as createElementBlock, W as renderList, F as Fragment, X as resolveComponent } from "./index.dfcf287e.js";
import "./render.82341494.js";
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
          createBaseVNode("p", null, "Alias: " + toDisplayString(results.value.alias), 1),
          createBaseVNode("p", null, "Class: " + toDisplayString(results.value.class), 1),
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
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuMjU0MDYyMWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iU2hvd1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgIDxwPkFsaWFzOiB7e3Jlc3VsdHMuYWxpYXN9fTwvcD5cbiAgICA8cD5DbGFzczoge3tyZXN1bHRzLmNsYXNzfX08L3A+XG5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiID5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPlJ1bnM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8ZGl2IHYtZm9yPVwicnVuIGluIHJlc3VsdHMucnVuc1wiIDprZXk9XCJnZXRIYXNoKHJ1bilcIj5cbiAgICAgICAgPHRyYWNrZWQtcnVuLWxpc3QtaXRlbSAgOnRyYWNrZWQtcnVuPVwicnVuXCI+XG4gICAgICAgIDwvdHJhY2tlZC1ydW4tbGlzdC1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuXG4gIDwvcS1wYWdlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiIHYtZWxzZT5cbiAgICBMb2FkaW5nXG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge0pvYlJ1biwgVHJhY2tlZEpvYn0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQge3VzZUFwaX0gZnJvbSBcIi4uL2NvbXBvc3RhYmxlcy91c2VBcGlcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxUcmFja2VkSm9ifG51bGw+KG51bGwpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYWxpYXM6IHN0cmluZ1xufT4oKTtcblxudXNlQXBpKChhZnRlcikgPT4ge1xuICBhcGkuam9iU2hvdyhwcm9wcy5hbGlhcylcbiAgICAudGhlbigocmVzcG9uc2U6IFRyYWNrZWRKb2IpID0+IHJlc3VsdHMudmFsdWUgPSByZXNwb25zZSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KVxuXG5mdW5jdGlvbiBnZXRIYXNoKGpvYlJ1bjogSm9iUnVuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvYlJ1bi51dWlkO1xufVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQTRCTSxVQUFBLFVBQVUsSUFBcUIsSUFBSTtBQU16QyxXQUFPLENBQUMsVUFBVTtBQUNoQixVQUFJLFFBQVEsTUFBTSxLQUFLLEVBQ3BCLEtBQUssQ0FBQyxhQUF5QixRQUFRLFFBQVEsUUFBUSxFQUN2RCxRQUFRLEtBQUs7QUFBQSxJQUFBLENBQ2pCO0FBRUQsYUFBUyxRQUFRLFFBQXdCO0FBQ3ZDLGFBQU8sT0FBTztBQUFBLElBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
