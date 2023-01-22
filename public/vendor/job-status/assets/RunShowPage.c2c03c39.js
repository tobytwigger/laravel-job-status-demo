import { Q as QBtn } from "./QBtn.b4d5246d.js";
import { c as createComponent, h as hSlot } from "./render.cdbb99d1.js";
import { u as useDarkProps, a as useDark } from "./use-dark.1ad05956.js";
import { c as computed, h, g as getCurrentInstance, _ as _export_sfc, L as defineComponent, r as ref, M as openBlock, N as createBlock, O as withCtx, d as createVNode, R as createTextVNode, Q as createCommentVNode, U as createBaseVNode, S as toDisplayString } from "./index.1c76a922.js";
import { Q as QPage, a as api } from "./api.a9d91393.js";
import { u as useApi } from "./useApi.a079761d.js";
import "./use-router-link.e9845283.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
var QBanner = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
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
          results.value.parent !== null ? (openBlock(), createBlock(QBanner, {
            key: 0,
            class: "bg-primary text-white"
          }, {
            action: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                color: "white",
                label: "View parent job",
                to: { name: "run.show", params: { jobStatusId: results.value.parent.id } }
              }, null, 8, ["to"])
            ]),
            default: withCtx(() => [
              createTextVNode(" This job was dispatched by another when it failed. ")
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("p", null, "Alias: " + toDisplayString(results.value.alias), 1),
          createBaseVNode("p", null, "Class: " + toDisplayString(results.value.class), 1),
          createBaseVNode("p", null, "Status: " + toDisplayString(results.value.status), 1),
          createBaseVNode("p", null, "Uuid: " + toDisplayString(results.value.uuid), 1),
          createBaseVNode("p", null, "Tags: " + toDisplayString(results.value.tags), 1),
          createBaseVNode("p", null, "Percentage: " + toDisplayString(results.value.percentage), 1),
          createBaseVNode("p", null, "Dispatched At: " + toDisplayString(results.value.created_at), 1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVuU2hvd1BhZ2UuYzJjMDNjMzkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Jhbm5lci9RQmFubmVyLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9wYWdlcy9SdW5TaG93UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJhbm5lcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBpbmxpbmVBY3Rpb25zOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYmFubmVyIHJvdyBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1iYW5uZXItLWRlbnNlJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWJhbm5lci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5yb3VuZGVkID09PSB0cnVlID8gJyByb3VuZGVkLWJvcmRlcnMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYWN0aW9uQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYmFubmVyX19hY3Rpb25zIHJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQnXG4gICAgICArIGAgY29sLSR7IHByb3BzLmlubGluZUFjdGlvbnMgPT09IHRydWUgPyAnYXV0bycgOiAnYWxsJyB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1iYW5uZXJfX2F2YXRhciBjb2wtYXV0byByb3cgaXRlbXMtY2VudGVyIHNlbGYtc3RhcnQnXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmF2YXRhcikpLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtYmFubmVyX19jb250ZW50IGNvbCB0ZXh0LWJvZHkyJ1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIF1cblxuICAgICAgY29uc3QgYWN0aW9ucyA9IGhTbG90KHNsb3RzLmFjdGlvbilcbiAgICAgIGFjdGlvbnMgIT09IHZvaWQgMCAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiBhY3Rpb25DbGFzcy52YWx1ZSB9LCBhY3Rpb25zKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgICAgICAgICsgKHByb3BzLmlubGluZUFjdGlvbnMgPT09IGZhbHNlICYmIGFjdGlvbnMgIT09IHZvaWQgMCA/ICcgcS1iYW5uZXItLXRvcC1wYWRkaW5nJyA6ICcnKSxcbiAgICAgICAgcm9sZTogJ2FsZXJ0J1xuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgPHEtYmFubmVyIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCIgdi1pZj1cInJlc3VsdHMucGFyZW50ICE9PSBudWxsXCI+XG4gICAgICBUaGlzIGpvYiB3YXMgZGlzcGF0Y2hlZCBieSBhbm90aGVyIHdoZW4gaXQgZmFpbGVkLlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3Rpb24+XG4gICAgICAgIDxxLWJ0biBmbGF0IGNvbG9yPVwid2hpdGVcIiBsYWJlbD1cIlZpZXcgcGFyZW50IGpvYlwiIDp0bz1cIntuYW1lOiAncnVuLnNob3cnLCBwYXJhbXM6IHtqb2JTdGF0dXNJZDogcmVzdWx0cy5wYXJlbnQuaWR9fVwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1iYW5uZXI+XG5cbiAgICA8cD5BbGlhczoge3tyZXN1bHRzLmFsaWFzfX08L3A+XG4gICAgPHA+Q2xhc3M6IHt7cmVzdWx0cy5jbGFzc319PC9wPlxuICAgIDxwPlN0YXR1czoge3tyZXN1bHRzLnN0YXR1c319PC9wPlxuICAgIDxwPlV1aWQ6IHt7cmVzdWx0cy51dWlkfX08L3A+XG4gICAgPHA+VGFnczoge3tyZXN1bHRzLnRhZ3N9fTwvcD5cbiAgICA8cD5QZXJjZW50YWdlOiB7e3Jlc3VsdHMucGVyY2VudGFnZX19PC9wPlxuICAgIDxwPkRpc3BhdGNoZWQgQXQ6IHt7cmVzdWx0cy5jcmVhdGVkX2F0fX08L3A+XG5cblxuXG48IS0tICAgIDxxLWxpc3QgYm9yZGVyZWQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIiBzdHlsZT1cIm1pbi13aWR0aDogODUlXCIgPi0tPlxuPCEtLSAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPlJ1bnM8L3EtaXRlbS1sYWJlbD4tLT5cblxuPCEtLSAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPi0tPlxuPCEtLSAgICAgIDxkaXYgdi1mb3I9XCJydW4gaW4gcmVzdWx0cy5ydW5zXCIgOmtleT1cImdldEhhc2gocnVuKVwiPi0tPlxuPCEtLSAgICAgICAgPHRyYWNrZWQtcnVuLWxpc3QtaXRlbSA6dHJhY2tlZC1ydW49XCJydW5cIj4tLT5cbjwhLS0gICAgICAgIDwvdHJhY2tlZC1ydW4tbGlzdC1pdGVtPi0tPlxuPCEtLSAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+LS0+XG48IS0tICAgICAgPC9kaXY+LS0+XG48IS0tICAgIDwvcS1saXN0Pi0tPlxuICA8L3EtcGFnZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWVsc2U+XG4gICAgTG9hZGluZ1xuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtKb2JSdW59IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IHt1c2VBcGl9IGZyb20gXCIuLi9jb21wb3N0YWJsZXMvdXNlQXBpXCI7XG5pbXBvcnQgVHJhY2tlZFJ1bkxpc3RJdGVtIGZyb20gXCJjb21wb25lbnRzL1RyYWNrZWRSdW5MaXN0SXRlbS52dWVcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxKb2JSdW58bnVsbD4obnVsbCk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBqb2JTdGF0dXNJZDogc3RyaW5nXG59PigpO1xuXG51c2VBcGkoKGFmdGVyKSA9PiB7XG4gIGFwaS5ydW5TaG93KHByb3BzLmpvYlN0YXR1c0lkKVxuICAgIC50aGVuKChyZXNwb25zZTogSm9iUnVuKSA9PiByZXN1bHRzLnZhbHVlID0gcmVzcG9uc2UpXG4gICAgLmZpbmFsbHkoYWZ0ZXIpO1xufSlcblxuZnVuY3Rpb24gZ2V0SGFzaChqb2JSdW46IEpvYlJ1bik6IHN0cmluZyB7XG4gIHJldHVybiBqb2JSdW4udXVpZDtcbn1cblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0EsSUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILGVBQWU7QUFBQSxJQUNmLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBSSxFQUFBLElBQUssbUJBQW9CO0FBQzlDLFVBQU0sU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUVoQyxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLCtCQUNHLE1BQU0sVUFBVSxPQUFPLHFCQUFxQixPQUM1QyxPQUFPLFVBQVUsT0FBTywyQkFBMkIsT0FDbkQsTUFBTSxZQUFZLE9BQU8scUJBQXFCO0FBQUEsSUFDbEQ7QUFFRCxVQUFNLGNBQWM7QUFBQSxNQUFTLE1BQzNCLHNEQUNXLE1BQU0sa0JBQWtCLE9BQU8sU0FBUztBQUFBLElBQ3BEO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRO0FBQUEsUUFDWixFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNqQixHQUFXLE1BQU0sTUFBTSxNQUFNLENBQUM7QUFBQSxRQUV0QixFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNqQixHQUFXLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxNQUN4QjtBQUVELFlBQU0sVUFBVSxNQUFNLE1BQU0sTUFBTTtBQUNsQyxrQkFBWSxVQUFVLE1BQU07QUFBQSxRQUMxQixFQUFFLE9BQU8sRUFBRSxPQUFPLFlBQVksTUFBTyxHQUFFLE9BQU87QUFBQSxNQUMvQztBQUVELGFBQU8sRUFBRSxPQUFPO0FBQUEsUUFDZCxPQUFPLFFBQVEsU0FDVixNQUFNLGtCQUFrQixTQUFTLFlBQVksU0FBUywyQkFBMkI7QUFBQSxRQUN0RixNQUFNO0FBQUEsTUFDUCxHQUFFLEtBQUs7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNILENBQUM7Ozs7Ozs7O0FDZkssVUFBQSxVQUFVLElBQWlCLElBQUk7QUFNckMsV0FBTyxDQUFDLFVBQVU7QUFDaEIsVUFBSSxRQUFRLE1BQU0sV0FBVyxFQUMxQixLQUFLLENBQUMsYUFBcUIsUUFBUSxRQUFRLFFBQVEsRUFDbkQsUUFBUSxLQUFLO0FBQUEsSUFBQSxDQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
