import { Q as QPage, a as api } from "./api.c5473917.js";
import { u as useApi } from "./useApi.dc81800f.js";
import { _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, R as createTextVNode, S as toDisplayString } from "./index.70e79a31.js";
import "./render.1e21ddb1.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunShowPage",
  props: {
    jobStatusId: null
  },
  setup(__props) {
    const props = __props;
    const results = ref(null);
    useApi((after) => {
      api.runShow(props.jobStatusId).then((response) => results.value = response).finally(after);
    });
    return (_ctx, _cache) => {
      return results.value !== null ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "row items-center justify-evenly"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(results.value), 1)
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
var RunShowPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "RunShowPage.vue"]]);
export { RunShowPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVuU2hvd1BhZ2UuNGU4OWM4MzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvUnVuU2hvd1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlxuPCEtLSAgICA8cD5BbGlhczoge3tyZXN1bHRzLmFsaWFzfX08L3A+LS0+XG48IS0tICAgIDxwPkNsYXNzOiB7e3Jlc3VsdHMuY2xhc3N9fTwvcD4tLT5cblxuPCEtLSAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCIgc3R5bGU9XCJtaW4td2lkdGg6IDg1JVwiID4tLT5cbjwhLS0gICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5SdW5zPC9xLWl0ZW0tbGFiZWw+LS0+XG5cbjwhLS0gICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj4tLT5cbjwhLS0gICAgICA8ZGl2IHYtZm9yPVwicnVuIGluIHJlc3VsdHMucnVuc1wiIDprZXk9XCJnZXRIYXNoKHJ1bilcIj4tLT5cbjwhLS0gICAgICAgIDx0cmFja2VkLXJ1bi1saXN0LWl0ZW0gOnRyYWNrZWQtcnVuPVwicnVuXCI+LS0+XG48IS0tICAgICAgICA8L3RyYWNrZWQtcnVuLWxpc3QtaXRlbT4tLT5cbjwhLS0gICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPi0tPlxuPCEtLSAgICAgIDwvZGl2Pi0tPlxuPCEtLSAgICA8L3EtbGlzdD4tLT5cbnt7cmVzdWx0c319XG4gIDwvcS1wYWdlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiIHYtZWxzZT5cbiAgICBMb2FkaW5nXG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge0pvYlJ1bn0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQge3VzZUFwaX0gZnJvbSBcIi4uL2NvbXBvc3RhYmxlcy91c2VBcGlcIjtcbmltcG9ydCBUcmFja2VkUnVuTGlzdEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvVHJhY2tlZFJ1bkxpc3RJdGVtLnZ1ZVwiO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPEpvYlJ1bnxudWxsPihudWxsKTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGpvYlN0YXR1c0lkOiBzdHJpbmdcbn0+KCk7XG5cbnVzZUFwaSgoYWZ0ZXIpID0+IHtcbiAgYXBpLnJ1blNob3cocHJvcHMuam9iU3RhdHVzSWQpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBKb2JSdW4pID0+IHJlc3VsdHMudmFsdWUgPSByZXNwb25zZSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KVxuXG5mdW5jdGlvbiBnZXRIYXNoKGpvYlJ1bjogSm9iUnVuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvYlJ1bi51dWlkO1xufVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBNkJNLFVBQUEsVUFBVSxJQUFpQixJQUFJO0FBTXJDLFdBQU8sQ0FBQyxVQUFVO0FBQ2hCLFVBQUksUUFBUSxNQUFNLFdBQVcsRUFDMUIsS0FBSyxDQUFDLGFBQXFCLFFBQVEsUUFBUSxRQUFRLEVBQ25ELFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
