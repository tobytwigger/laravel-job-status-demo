import { c as createComponent, h as hSlot } from "./render.1f1c12cc.js";
import { p as emptyRenderFn, c as computed, h, a as inject, q as layoutKey, J as pageContainerKey, g as getCurrentInstance } from "./index.40263129.js";
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
const jobList$1 = generateUrl("job-list");
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
var api = { dashboard, jobList };
export { QPage as Q, api as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLjk0NTY3MDM5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlL1FQYWdlLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy91dGlscy9jbGllbnQvcmVxdWVzdEhhbmRsZXIudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3V0aWxzL2NsaWVudC91cmxHZW5lcmF0b3IudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3V0aWxzL2NsaWVudC9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyS2V5LCBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBwYWRkaW5nOiBCb29sZWFuLFxuICAgIHN0eWxlRm46IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2UgbmVlZHMgdG8gYmUgYSBkZWVwIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCAkcGFnZUNvbnRhaW5lciA9IGluamVjdChwYWdlQ29udGFpbmVyS2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkcGFnZUNvbnRhaW5lciA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2UgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUVBhZ2VDb250YWluZXInKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldFxuICAgICAgICA9ICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSA/ICRsYXlvdXQuaGVhZGVyLnNpemUgOiAwKVxuICAgICAgICArICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSA/ICRsYXlvdXQuZm9vdGVyLnNpemUgOiAwKVxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLnN0eWxlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgICA6ICRxLnNjcmVlbi5oZWlnaHRcblxuICAgICAgICByZXR1cm4gcHJvcHMuc3R5bGVGbihvZmZzZXQsIGhlaWdodClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluSGVpZ2h0OiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAoJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWUgLSBvZmZzZXQpICsgJ3B4J1xuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAkcS5zY3JlZW4uaGVpZ2h0ID09PSAwXG4gICAgICAgICAgICAgICAgPyAob2Zmc2V0ICE9PSAwID8gYGNhbGMoMTAwdmggLSAkeyBvZmZzZXQgfXB4KWAgOiAnMTAwdmgnKVxuICAgICAgICAgICAgICAgIDogKCRxLnNjcmVlbi5oZWlnaHQgLSBvZmZzZXQpICsgJ3B4J1xuICAgICAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXBhZ2UkeyBwcm9wcy5wYWRkaW5nID09PSB0cnVlID8gJyBxLWxheW91dC1wYWRkaW5nJyA6ICcnIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ21haW4nLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSAodXJsOiBzdHJpbmcsIGRhdGE6IHtba2V5OiBzdHJpbmddOiBudWxsfHN0cmluZ3xvYmplY3R9ID0ge30pID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldCA9ICh1cmw6IHN0cmluZywgZGF0YToge1trZXk6IHN0cmluZ106IG51bGx8c3RyaW5nfG9iamVjdH0gPSB7fSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgZGF0YSk7XG59XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCJzcmMvdXRpbHMvY29uZmlnXCI7XG5cbmNvbnN0IGdlbmVyYXRlVXJsID0gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IENvbmZpZy5nZXQoKS5kb21haW4gPz8gJyc7XG4gIGNvbnN0IHByZVBhdGggPSBDb25maWcuZ2V0KCkucGF0aDtcblxuICByZXR1cm4gZG9tYWluICsgKGRvbWFpbi5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICtcbiAgICBwcmVQYXRoICsgKHByZVBhdGguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKVxuXG4gICAgKyAnYXBpLydcbiAgICArIHBhdGg7XG59XG5cbmV4cG9ydCBjb25zdCBkYXNoYm9hcmQgPSBnZW5lcmF0ZVVybCgnZGFzaGJvYXJkJyk7XG5leHBvcnQgY29uc3Qgam9iTGlzdCA9IGdlbmVyYXRlVXJsKCdqb2ItbGlzdCcpO1xuIiwiaW1wb3J0IHtnZXR9IGZyb20gJ3NyYy91dGlscy9jbGllbnQvcmVxdWVzdEhhbmRsZXInO1xuaW1wb3J0IHtEYXNoYm9hcmRSZXNwb25zZSwgUmVzdWx0c30gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQge2Rhc2hib2FyZCBhcyBkYXNoYm9hcmRVcmwsIGpvYkxpc3QgYXMgam9iTGlzdFVybH0gZnJvbSAnc3JjL3V0aWxzL2NsaWVudC91cmxHZW5lcmF0b3InO1xuXG5jb25zdCBkYXNoYm9hcmQgPSAoKTogUHJvbWlzZTxEYXNoYm9hcmRSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gZ2V0KGRhc2hib2FyZFVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXN0OiAnJ1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBqb2JMaXN0ID0gKCk6IFByb21pc2U8UmVzdWx0cz4gPT4ge1xuICByZXR1cm4gZ2V0KGpvYkxpc3RVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgUmVzdWx0cztcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge2Rhc2hib2FyZCwgam9iTGlzdH07XG4iXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwiam9iTGlzdCIsImRhc2hib2FyZFVybCIsImpvYkxpc3RVcmwiXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtB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
