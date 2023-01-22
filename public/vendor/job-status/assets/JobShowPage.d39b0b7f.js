import { b as QList, Q as QItemLabel } from "./QList.e15f624f.js";
import { u as useApi, Q as QSeparator } from "./useApi.9bee7241.js";
import { Q as QPage, a as api } from "./api.e55d7154.js";
import { _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, U as createBaseVNode, S as toDisplayString, d as createVNode, R as createTextVNode, V as createElementBlock, W as renderList, F as Fragment, Q as createCommentVNode, X as resolveComponent } from "./index.76d40fe8.js";
import "./render.cabd5cff.js";
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
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          createBaseVNode("p", null, "Alias: " + toDisplayString(results.value.alias), 1),
          createBaseVNode("p", null, "Class: " + toDisplayString(results.value.class), 1),
          results.value !== null ? (openBlock(), createBlock(QList, {
            key: 0,
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
          })) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(results.value), 1)
        ]),
        _: 1
      });
    };
  }
});
var JobShowPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobShowPage.vue"]]);
export { JobShowPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuZDM5YjBiN2YuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iU2hvd1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cbiAgICA8cD5BbGlhczoge3tyZXN1bHRzLmFsaWFzfX08L3A+XG4gICAgPHA+Q2xhc3M6IHt7cmVzdWx0cy5jbGFzc319PC9wPlxuXG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiIHN0eWxlPVwibWluLXdpZHRoOiA4NSVcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+UnVuczwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDxkaXYgdi1mb3I9XCJydW4gaW4gcmVzdWx0cy5ydW5zXCIgOmtleT1cImdldEhhc2gocnVuKVwiPlxuICAgICAgICA8dHJhY2tlZC1ydW4tbGlzdC1pdGVtICA6dHJhY2tlZC1ydW49XCJydW5cIj5cbiAgICAgICAgPC90cmFja2VkLXJ1bi1saXN0LWl0ZW0+XG4gICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWxpc3Q+XG5cbiAgICB7e3Jlc3VsdHN9fVxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtKb2JSdW4sIFRyYWNrZWRKb2J9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IHt1c2VBcGl9IGZyb20gXCIuLi9jb21wb3N0YWJsZXMvdXNlQXBpXCI7XG5cbmNvbnN0IHJlc3VsdHMgPSByZWY8VHJhY2tlZEpvYnxudWxsPihudWxsKTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGFsaWFzOiBzdHJpbmdcbn0+KCk7XG5cbnVzZUFwaSgoYWZ0ZXIpID0+IHtcbiAgYXBpLmpvYlNob3cocHJvcHMuYWxpYXMpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBUcmFja2VkSm9iKSA9PiByZXN1bHRzLnZhbHVlID0gcmVzcG9uc2UpXG4gICAgLmZpbmFsbHkoYWZ0ZXIpO1xufSlcblxuZnVuY3Rpb24gZ2V0SGFzaChqb2JSdW46IEpvYlJ1bik6IHN0cmluZyB7XG4gIHJldHVybiBqb2JSdW4udXVpZDtcbn1cblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUEwQk0sVUFBQSxVQUFVLElBQXFCLElBQUk7QUFNekMsV0FBTyxDQUFDLFVBQVU7QUFDaEIsVUFBSSxRQUFRLE1BQU0sS0FBSyxFQUNwQixLQUFLLENBQUMsYUFBeUIsUUFBUSxRQUFRLFFBQVEsRUFDdkQsUUFBUSxLQUFLO0FBQUEsSUFBQSxDQUNqQjtBQUVELGFBQVMsUUFBUSxRQUF3QjtBQUN2QyxhQUFPLE9BQU87QUFBQSxJQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
