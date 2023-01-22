import { Q as QPage, a as api } from "./api.5837e949.js";
import { u as useApi } from "./useApi.857433af.js";
import { _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, R as createTextVNode, S as toDisplayString } from "./index.8f4c0365.js";
import "./render.f52b196e.js";
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
    console.log(props.alias);
    useApi((after) => {
      api.jobShow(props.alias).then((response) => results.value = response).finally(after);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(props.job), 1)
        ]),
        _: 1
      });
    };
  }
});
var JobShowPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "JobShowPage.vue"]]);
export { JobShowPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuN2EyZDZjZjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvcGFnZXMvSm9iU2hvd1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cbiAgICB7e3Byb3BzLmpvYn19XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge1RyYWNrZWRKb2J9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IHt1c2VBcGl9IGZyb20gXCIuLi9jb21wb3N0YWJsZXMvdXNlQXBpXCI7XG5cbmNvbnN0IHJlc3VsdHMgPSByZWY8VHJhY2tlZEpvYnxudWxsPihudWxsKTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGFsaWFzOiBzdHJpbmdcbn0+KCk7XG5cbmNvbnNvbGUubG9nKHByb3BzLmFsaWFzKTtcblxudXNlQXBpKChhZnRlcikgPT4ge1xuICBhcGkuam9iU2hvdyhwcm9wcy5hbGlhcylcbiAgICAudGhlbigocmVzcG9uc2U6IFRyYWNrZWRKb2IpID0+IHJlc3VsdHMudmFsdWUgPSByZXNwb25zZSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWU0sVUFBQSxVQUFVLElBQXFCLElBQUk7QUFNakMsWUFBQSxJQUFJLE1BQU0sS0FBSztBQUV2QixXQUFPLENBQUMsVUFBVTtBQUNoQixVQUFJLFFBQVEsTUFBTSxLQUFLLEVBQ3BCLEtBQUssQ0FBQyxhQUF5QixRQUFRLFFBQVEsUUFBUSxFQUN2RCxRQUFRLEtBQUs7QUFBQSxJQUFBLENBQ2pCOzs7Ozs7Ozs7Ozs7OyJ9
