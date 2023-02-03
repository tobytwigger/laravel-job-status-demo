import { c as createComponent, h as hSlot } from "./render.bb704460.js";
import { j as emptyRenderFn, c as computed, h, a as inject, g as getCurrentInstance, l as layoutKey, G as pageContainerKey } from "./index.8710f952.js";
import { a as axios } from "./index.aa7156d4.js";
import { C as Config } from "./config.83e19d5f.js";
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
const post = (url, data = {}) => {
  return axios.post(url, data);
};
const get = (url, data = {}) => {
  return axios.get(url, data);
};
const generateUrl = (path) => {
  var _a;
  const domain = (_a = Config.get().domain) != null ? _a : "";
  const prePath = Config.get().path;
  return domain + (domain.endsWith("/") ? "" : "/") + prePath + (prePath.endsWith("/") ? "" : "/") + "api/" + path;
};
const dashboard = () => {
  return get(generateUrl("dashboard")).then((response) => {
    return {
      test: ""
    };
  });
};
const jobList = () => {
  return get(generateUrl("tracked-job")).then((response) => {
    return response.data;
  });
};
const jobShow = (alias) => {
  return get(generateUrl("tracked-job/" + encodeURIComponent(alias))).then((response) => {
    return response.data;
  });
};
const runShow = (jobStatusId) => {
  return get(generateUrl("job-run/" + jobStatusId.toString())).then(
    (response) => {
      return response.data;
    }
  );
};
const history = () => {
  return get(generateUrl("history")).then((response) => {
    return response.data;
  });
};
const signal = (jobStatusId, signal2, cancel, parameters) => {
  return post(generateUrl("signal/" + jobStatusId.toString()), {
    signal: signal2,
    cancel_job: cancel ? "1" : "0",
    parameters
  }).then((response) => {
    return;
  });
};
const batchList = () => {
  return get(generateUrl("batch")).then((response) => {
    return response.data;
  });
};
const batchShow = (batchId) => {
  return get(generateUrl("batch/" + batchId.toString())).then((response) => {
    return response.data;
  });
};
const jobFailureReasons = (alias) => {
  return get(generateUrl("tracked-job/" + encodeURIComponent(alias) + "/failures")).then(
    (response) => {
      return response.data;
    }
  );
};
var api = {
  dashboard,
  jobList,
  jobShow,
  runShow,
  history,
  signal,
  batchList,
  batchShow,
  jobFailureReasons
};
export { QPage as Q, api as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLjc4MTc1MTY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlL1FQYWdlLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy91dGlscy9jbGllbnQvcmVxdWVzdEhhbmRsZXIudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3V0aWxzL2NsaWVudC91cmxHZW5lcmF0b3IudHMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3V0aWxzL2NsaWVudC9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyS2V5LCBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBwYWRkaW5nOiBCb29sZWFuLFxuICAgIHN0eWxlRm46IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2UgbmVlZHMgdG8gYmUgYSBkZWVwIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCAkcGFnZUNvbnRhaW5lciA9IGluamVjdChwYWdlQ29udGFpbmVyS2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkcGFnZUNvbnRhaW5lciA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2UgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUVBhZ2VDb250YWluZXInKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldFxuICAgICAgICA9ICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSA/ICRsYXlvdXQuaGVhZGVyLnNpemUgOiAwKVxuICAgICAgICArICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSA/ICRsYXlvdXQuZm9vdGVyLnNpemUgOiAwKVxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLnN0eWxlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgICA6ICRxLnNjcmVlbi5oZWlnaHRcblxuICAgICAgICByZXR1cm4gcHJvcHMuc3R5bGVGbihvZmZzZXQsIGhlaWdodClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluSGVpZ2h0OiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAoJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWUgLSBvZmZzZXQpICsgJ3B4J1xuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAkcS5zY3JlZW4uaGVpZ2h0ID09PSAwXG4gICAgICAgICAgICAgICAgPyAob2Zmc2V0ICE9PSAwID8gYGNhbGMoMTAwdmggLSAkeyBvZmZzZXQgfXB4KWAgOiAnMTAwdmgnKVxuICAgICAgICAgICAgICAgIDogKCRxLnNjcmVlbi5oZWlnaHQgLSBvZmZzZXQpICsgJ3B4J1xuICAgICAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXBhZ2UkeyBwcm9wcy5wYWRkaW5nID09PSB0cnVlID8gJyBxLWxheW91dC1wYWRkaW5nJyA6ICcnIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ21haW4nLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSAoXG4gIHVybDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bGwgfCBzdHJpbmcgfCBvYmplY3QgfSA9IHt9XG4pID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAoXG4gIHVybDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bGwgfCBzdHJpbmcgfCBvYmplY3QgfSA9IHt9XG4pID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIGRhdGEpO1xufTtcbiIsImltcG9ydCBDb25maWcgZnJvbSAnc3JjL3V0aWxzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVVybCA9IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkb21haW4gPSBDb25maWcuZ2V0KCkuZG9tYWluID8/ICcnO1xuICBjb25zdCBwcmVQYXRoID0gQ29uZmlnLmdldCgpLnBhdGg7XG5cbiAgcmV0dXJuIChcbiAgICBkb21haW4gK1xuICAgIChkb21haW4uZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArXG4gICAgcHJlUGF0aCArXG4gICAgKHByZVBhdGguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArXG4gICAgJ2FwaS8nICtcbiAgICBwYXRoXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9yZXF1ZXN0SGFuZGxlcic7XG5pbXBvcnQge1xuICBCYXRjaCxcbiAgRGFzaGJvYXJkUmVzcG9uc2UsXG4gIEpvYkZhaWx1cmVSZWFzb24sXG4gIEpvYlJ1bixcbiAgVHJhY2tlZEpvYixcbn0gZnJvbSAnc3JjL3R5cGVzL2FwaSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVybCB9IGZyb20gJ3NyYy91dGlscy9jbGllbnQvdXJsR2VuZXJhdG9yJztcblxuY29uc3QgZGFzaGJvYXJkID0gKCk6IFByb21pc2U8RGFzaGJvYXJkUmVzcG9uc2U+ID0+IHtcbiAgcmV0dXJuIGdldChnZW5lcmF0ZVVybCgnZGFzaGJvYXJkJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3Q6ICcnLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3Qgam9iTGlzdCA9ICgpOiBQcm9taXNlPFRyYWNrZWRKb2JbXT4gPT4ge1xuICByZXR1cm4gZ2V0KGdlbmVyYXRlVXJsKCd0cmFja2VkLWpvYicpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFRyYWNrZWRKb2JbXTtcbiAgfSk7XG59O1xuXG5jb25zdCBqb2JTaG93ID0gKGFsaWFzOiBzdHJpbmcpOiBQcm9taXNlPFRyYWNrZWRKb2I+ID0+IHtcbiAgcmV0dXJuIGdldChnZW5lcmF0ZVVybCgndHJhY2tlZC1qb2IvJyArIGVuY29kZVVSSUNvbXBvbmVudChhbGlhcykpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFRyYWNrZWRKb2I7XG4gIH0pO1xufTtcblxuY29uc3QgcnVuU2hvdyA9IChqb2JTdGF0dXNJZDogbnVtYmVyKTogUHJvbWlzZTxKb2JSdW4+ID0+IHtcbiAgcmV0dXJuIGdldChnZW5lcmF0ZVVybCgnam9iLXJ1bi8nICsgam9iU3RhdHVzSWQudG9TdHJpbmcoKSkpLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBKb2JSdW47XG4gICAgfVxuICApO1xufTtcblxuY29uc3QgaGlzdG9yeSA9ICgpOiBQcm9taXNlPEpvYlJ1bltdPiA9PiB7XG4gIHJldHVybiBnZXQoZ2VuZXJhdGVVcmwoJ2hpc3RvcnknKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBKb2JSdW5bXTtcbiAgfSk7XG59O1xuXG5jb25zdCBzaWduYWwgPSAoXG4gIGpvYlN0YXR1c0lkOiBudW1iZXIsXG4gIHNpZ25hbDogc3RyaW5nLFxuICBjYW5jZWw6IGJvb2xlYW4sXG4gIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICByZXR1cm4gcG9zdChnZW5lcmF0ZVVybCgnc2lnbmFsLycgKyBqb2JTdGF0dXNJZC50b1N0cmluZygpKSwge1xuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhbmNlbF9qb2I6IGNhbmNlbCA/ICcxJyA6ICcwJyxcbiAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzLFxuICB9KS50aGVuKChyZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIHJldHVybjtcbiAgfSk7XG59O1xuXG5jb25zdCBiYXRjaExpc3QgPSAoKTogUHJvbWlzZTxCYXRjaFtdPiA9PiB7XG4gIHJldHVybiBnZXQoZ2VuZXJhdGVVcmwoJ2JhdGNoJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgQmF0Y2hbXTtcbiAgfSk7XG59O1xuXG5jb25zdCBiYXRjaFNob3cgPSAoYmF0Y2hJZDogbnVtYmVyKTogUHJvbWlzZTxCYXRjaD4gPT4ge1xuICByZXR1cm4gZ2V0KGdlbmVyYXRlVXJsKCdiYXRjaC8nICsgYmF0Y2hJZC50b1N0cmluZygpKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBCYXRjaDtcbiAgfSk7XG59O1xuXG5jb25zdCBqb2JGYWlsdXJlUmVhc29ucyA9IChhbGlhczogc3RyaW5nKTogUHJvbWlzZTxKb2JGYWlsdXJlUmVhc29uW10+ID0+IHtcbiAgcmV0dXJuIGdldChnZW5lcmF0ZVVybCgndHJhY2tlZC1qb2IvJyArIGVuY29kZVVSSUNvbXBvbmVudChhbGlhcykgKyAnL2ZhaWx1cmVzJykpLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBKb2JGYWlsdXJlUmVhc29uW107XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXNoYm9hcmQsXG4gIGpvYkxpc3QsXG4gIGpvYlNob3csXG4gIHJ1blNob3csXG4gIGhpc3RvcnksXG4gIHNpZ25hbCxcbiAgYmF0Y2hMaXN0LFxuICBiYXRjaFNob3csXG4gIGpvYkZhaWx1cmVSZWFzb25zLFxufTtcbiJdLCJuYW1lcyI6WyJzaWduYWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQy9DLFFBQUksWUFBWSxlQUFlO0FBQzdCLGNBQVEsTUFBTSwyQ0FBMkM7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
