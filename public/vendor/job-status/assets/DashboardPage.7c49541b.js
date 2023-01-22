import { c as createComponent, h as hSlot } from "./render.36bb1eac.js";
import { p as emptyRenderFn, c as computed, h, a as inject, q as layoutKey, J as pageContainerKey, g as getCurrentInstance, _ as _export_sfc, M as defineComponent, N as openBlock, O as createBlock, Q as withCtx, K as reactive, S as createTextVNode, U as toDisplayString, V as createBaseVNode } from "./index.5b1eaffc.js";
import { a as axios } from "./index.aa7156d4.js";
import { C as Config } from "./config.b6f61684.js";
var QPage = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPage needs to be a deep child of QLayout");
      return emptyRenderFn;
    }
    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error("QPage needs to be child of QPageContainer");
      return emptyRenderFn;
    }
    const style = computed(() => {
      const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props.styleFn === "function") {
        const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props.styleFn(offset, height);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px"
      };
    });
    const classes = computed(
      () => `q-page${props.padding === true ? " q-layout-padding" : ""}`
    );
    return () => h("main", {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
const get = (url, data = {}) => {
  return axios.get(url, data);
};
const generateUrl = (path) => {
  var _a;
  const domain = (_a = Config.get().domain) != null ? _a : "";
  const prePath = Config.get().path;
  return domain + (domain.endsWith("/") ? "" : "/") + prePath + (prePath.endsWith("/") ? "" : "/") + "api/" + path;
};
const dashboard$1 = generateUrl("dashboard");
const jobList$1 = generateUrl("tracked-job");
const jobShow$1 = (alias) => generateUrl("tracked-job/" + alias);
const dashboard = () => {
  return get(dashboard$1).then((response) => {
    return {
      test: ""
    };
  });
};
const jobList = () => {
  return get(jobList$1).then((response) => {
    return response.data;
  });
};
const jobShow = (alias) => {
  return get(jobShow$1(alias)).then((response) => {
    return response.data;
  });
};
var api = { dashboard, jobList, jobShow };
const _sfc_main = defineComponent({
  name: "IndexPage",
  setup() {
    let results = null;
    function loadApi() {
      api.dashboard().then((response) => {
        results = reactive(response);
      });
    }
    return {
      loadApi,
      results
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
    default: withCtx(() => [
      createTextVNode(" Result: " + toDisplayString(_ctx.apiResult) + " ", 1),
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.loadApi && _ctx.loadApi(...args))
      }, " Load API ")
    ]),
    _: 1
  });
}
var DashboardPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DashboardPage.vue"]]);
export { DashboardPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkUGFnZS43YzQ5NTQxYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZS5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvdXRpbHMvY2xpZW50L3JlcXVlc3RIYW5kbGVyLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy91dGlscy9jbGllbnQvdXJsR2VuZXJhdG9yLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy91dGlscy9jbGllbnQvYXBpLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9wYWdlcy9EYXNoYm9hcmRQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlJyxcblxuICBwcm9wczoge1xuICAgIHBhZGRpbmc6IEJvb2xlYW4sXG4gICAgc3R5bGVGbjogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRUGFnZSBuZWVkcyB0byBiZSBhIGRlZXAgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlQ29udGFpbmVyID0gaW5qZWN0KHBhZ2VDb250YWluZXJLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRwYWdlQ29udGFpbmVyID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRUGFnZSBuZWVkcyB0byBiZSBjaGlsZCBvZiBRUGFnZUNvbnRhaW5lcicpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0XG4gICAgICAgID0gKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlID8gJGxheW91dC5oZWFkZXIuc2l6ZSA6IDApXG4gICAgICAgICsgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlID8gJGxheW91dC5mb290ZXIuc2l6ZSA6IDApXG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAkbGF5b3V0LmNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgIDogJHEuc2NyZWVuLmhlaWdodFxuXG4gICAgICAgIHJldHVybiBwcm9wcy5zdHlsZUZuKG9mZnNldCwgaGVpZ2h0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5IZWlnaHQ6ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICgkbGF5b3V0LmNvbnRhaW5lckhlaWdodC52YWx1ZSAtIG9mZnNldCkgKyAncHgnXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICRxLnNjcmVlbi5oZWlnaHQgPT09IDBcbiAgICAgICAgICAgICAgICA/IChvZmZzZXQgIT09IDAgPyBgY2FsYygxMDB2aCAtICR7IG9mZnNldCB9cHgpYCA6ICcxMDB2aCcpXG4gICAgICAgICAgICAgICAgOiAoJHEuc2NyZWVuLmhlaWdodCAtIG9mZnNldCkgKyAncHgnXG4gICAgICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtcGFnZSR7IHByb3BzLnBhZGRpbmcgPT09IHRydWUgPyAnIHEtbGF5b3V0LXBhZGRpbmcnIDogJycgfWBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnbWFpbicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmw6IHN0cmluZywgZGF0YToge1trZXk6IHN0cmluZ106IG51bGx8c3RyaW5nfG9iamVjdH0gPSB7fSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybDogc3RyaW5nLCBkYXRhOiB7W2tleTogc3RyaW5nXTogbnVsbHxzdHJpbmd8b2JqZWN0fSA9IHt9KSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQodXJsLCBkYXRhKTtcbn1cbiIsImltcG9ydCBDb25maWcgZnJvbSBcInNyYy91dGlscy9jb25maWdcIjtcblxuY29uc3QgZ2VuZXJhdGVVcmwgPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZG9tYWluID0gQ29uZmlnLmdldCgpLmRvbWFpbiA/PyAnJztcbiAgY29uc3QgcHJlUGF0aCA9IENvbmZpZy5nZXQoKS5wYXRoO1xuXG4gIHJldHVybiBkb21haW4gKyAoZG9tYWluLmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgK1xuICAgIHByZVBhdGggKyAocHJlUGF0aC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpXG5cbiAgICArICdhcGkvJ1xuICAgICsgcGF0aDtcbn1cblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZCA9IGdlbmVyYXRlVXJsKCdkYXNoYm9hcmQnKTtcbmV4cG9ydCBjb25zdCBqb2JMaXN0ID0gZ2VuZXJhdGVVcmwoJ3RyYWNrZWQtam9iJyk7XG5leHBvcnQgY29uc3Qgam9iU2hvdyA9IChhbGlhczogc3RyaW5nKSA9PiBnZW5lcmF0ZVVybCgndHJhY2tlZC1qb2IvJyArIGFsaWFzKTtcbiIsImltcG9ydCB7Z2V0fSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L3JlcXVlc3RIYW5kbGVyJztcbmltcG9ydCB7RGFzaGJvYXJkUmVzcG9uc2UsIFJlc3VsdHMsIFRyYWNrZWRKb2J9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IHtcbiAgZGFzaGJvYXJkIGFzIGRhc2hib2FyZFVybCxcbiAgam9iTGlzdCBhcyBqb2JMaXN0VXJsLFxuICBqb2JTaG93IGFzIGpvYlNob3dVcmxcbn0gZnJvbSAnc3JjL3V0aWxzL2NsaWVudC91cmxHZW5lcmF0b3InO1xuXG5jb25zdCBkYXNoYm9hcmQgPSAoKTogUHJvbWlzZTxEYXNoYm9hcmRSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gZ2V0KGRhc2hib2FyZFVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXN0OiAnJ1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBqb2JMaXN0ID0gKCk6IFByb21pc2U8UmVzdWx0cz4gPT4ge1xuICByZXR1cm4gZ2V0KGpvYkxpc3RVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgUmVzdWx0cztcbiAgICB9KTtcbn1cblxuY29uc3Qgam9iU2hvdyA9IChhbGlhczogc3RyaW5nKTogUHJvbWlzZTxUcmFja2VkSm9iPiA9PiB7XG4gIHJldHVybiBnZXQoam9iU2hvd1VybChhbGlhcykpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgVHJhY2tlZEpvYlxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtkYXNoYm9hcmQsIGpvYkxpc3QsIGpvYlNob3d9O1xuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxuXG4gICAgUmVzdWx0OiB7e2FwaVJlc3VsdH19XG5cbiAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRBcGlcIj5cbiAgICAgIExvYWQgQVBJXG4gICAgPC9idXR0b24+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO1xuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvY2xpZW50L2FwaSc7XG5pbXBvcnQge0Rhc2hib2FyZFJlc3BvbnNlfSBmcm9tICdzcmMvdHlwZXMvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0luZGV4UGFnZScsXG4gIHNldHVwICgpIHtcbiAgICBsZXQgcmVzdWx0czogRGFzaGJvYXJkUmVzcG9uc2V8bnVsbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBsb2FkQXBpKCkge1xuICAgICAgYXBpLmRhc2hib2FyZCgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogRGFzaGJvYXJkUmVzcG9uc2UgKT0+IHtcbiAgICAgICAgICByZXN1bHRzID0gcmVhY3RpdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsb2FkQXBpLFxuICAgICAgcmVzdWx0c1xuICAgIH1cblxuXG4gICAgLy8gY29uc3QgbWV0YSA9IHJlZjxNZXRhPih7XG4gICAgLy8gICB0b3RhbENvdW50OiAxMjAwXG4gICAgLy8gfSk7XG4gICAgLy8gcmV0dXJuIHsgdG9kb3MsIG1ldGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJkYXNoYm9hcmQiLCJqb2JMaXN0Iiwiam9iU2hvdyIsImRhc2hib2FyZFVybCIsImpvYkxpc3RVcmwiLCJqb2JTaG93VXJsIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQy9DLFFBQUksWUFBWSxlQUFlO0FBQzdCLGNBQVEsTUFBTSwyQ0FBMkM7QUFDekQsYUFBTztBQUFBLElBQ1I7QUFFRCxVQUFNLGlCQUFpQixPQUFPLGtCQUFrQixhQUFhO0FBQzdELFFBQUksbUJBQW1CLGVBQWU7QUFDcEMsY0FBUSxNQUFNLDJDQUEyQztBQUN6RCxhQUFPO0FBQUEsSUFDUjtBQUVELFVBQU0sUUFBUSxTQUFTLE1BQU07QUFDM0IsWUFBTSxVQUNELFFBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxPQUFPLE9BQU8sTUFDdEQsUUFBUSxPQUFPLFVBQVUsT0FBTyxRQUFRLE9BQU8sT0FBTztBQUUzRCxVQUFJLE9BQU8sTUFBTSxZQUFZLFlBQVk7QUFDdkMsY0FBTSxTQUFTLFFBQVEsWUFB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
