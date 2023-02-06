import { c as client, Q as QBreadcrumbsEl, a as QBreadcrumbs, b as QSeparator } from "./index.0dd3d626.js";
import { c as QItem, Q as QItemSection, b as QItemLabel, d as QList } from "./QItem.d72dec2c.js";
import { Q as QPage } from "./QPage.17c7e3d4.js";
import { R as Ripple } from "./use-router-link.f56975ac.js";
import { T as TrackedRunListItem } from "./TrackedRunListItem.a986e694.js";
import { _ as _export_sfc, K as defineComponent, r as ref, k as onBeforeUnmount, L as openBlock, M as createBlock, N as withCtx, d as createVNode, R as createBaseVNode, D as withDirectives, P as createTextVNode, Q as toDisplayString, S as createElementBlock, U as renderList, F as Fragment } from "./index.c9c99a36.js";
import "./render.2c6f0e6d.js";
import "./index.b7f28e66.js";
import "./QCircularProgress.51d8a663.js";
import "./format.801e7424.js";
import "./QChip.d38cd9d9.js";
import "./api.9a3f3035.js";
import "./dayjs.min.33f4ae70.js";
import "./relativeTime.c9da1e45.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 col-sm-6 q-py-md" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QueueShowPage",
  props: {
    queue: null
  },
  setup(__props) {
    const props = __props;
    const results = ref(null);
    let listener = client.queues.show(props.queue).bypassAuth().listen().onUpdated((newResults) => results.value = newResults).start();
    onBeforeUnmount(() => {
      listener.stop();
    });
    function getHash(jobRun) {
      return jobRun.uuid;
    }
    return (_ctx, _cache) => {
      return results.value !== null ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "justify-evenly",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(QBreadcrumbs, null, {
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                icon: "list",
                to: "/jobs",
                label: "Jobs"
              }),
              createVNode(QBreadcrumbsEl, {
                label: props.queue,
                icon: "view_stream",
                to: "/queues/" + props.queue
              }, null, 8, ["label", "to"])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QList, {
                bordered: "",
                separator: ""
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.queue), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Queue name")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [Ripple]
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
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
                      createVNode(TrackedRunListItem, { "tracked-run": run }, null, 8, ["tracked-run"]),
                      createVNode(QSeparator)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      })) : (openBlock(), createBlock(QPage, {
        key: 1,
        class: "items-center justify-evenly"
      }, {
        default: withCtx(() => [
          createTextVNode(" Loading ")
        ]),
        _: 1
      }));
    };
  }
});
var QueueShowPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "QueueShowPage.vue"]]);
export { QueueShowPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVTaG93UGFnZS43MDAzNzhkYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9wYWdlcy9RdWV1ZVNob3dQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJqdXN0aWZ5LWV2ZW5seVwiIHBhZGRpbmcgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIj5cbiAgICA8cS1icmVhZGNydW1icz5cbiAgICAgIDxxLWJyZWFkY3J1bWJzLWVsIGljb249XCJsaXN0XCIgdG89XCIvam9ic1wiIGxhYmVsPVwiSm9ic1wiIC8+XG4gICAgICA8cS1icmVhZGNydW1icy1lbFxuICAgICAgICA6bGFiZWw9XCJwcm9wcy5xdWV1ZVwiXG4gICAgICAgIGljb249XCJ2aWV3X3N0cmVhbVwiXG4gICAgICAgIDp0bz1cIicvcXVldWVzLycgKyBwcm9wcy5xdWV1ZVwiXG4gICAgICAvPlxuICAgIDwvcS1icmVhZGNydW1icz5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgcS1weS1tZFwiPlxuICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICA8cS1pdGVtIHYtcmlwcGxlXG4gICAgICAgICAgICA+PHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IHByb3BzLnF1ZXVlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5RdWV1ZSBuYW1lPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPjwvcS1pdGVtXG4gICAgICAgICAgPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiIHN0eWxlPVwibWluLXdpZHRoOiA4NSVcIj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5SdW5zPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwicnVuIGluIHJlc3VsdHMucnVuc1wiIDprZXk9XCJnZXRIYXNoKHJ1bilcIj5cbiAgICAgICAgICAgIDx0cmFja2VkLXJ1bi1saXN0LWl0ZW0gOnRyYWNrZWQtcnVuPVwicnVuXCI+IDwvdHJhY2tlZC1ydW4tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuICA8cS1wYWdlIGNsYXNzPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCIgdi1lbHNlPiBMb2FkaW5nIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtKb2JSdW4sIFF1ZXVlLCBUcmFja2VkSm9ifSBmcm9tICdzcmMvdHlwZXMvYXBpJztcbmltcG9ydCBUcmFja2VkUnVuTGlzdEl0ZW0gZnJvbSAnY29tcG9uZW50cy9UcmFja2VkUnVuTGlzdEl0ZW0udnVlJztcbmltcG9ydCBKb2JGYWlsdXJlUmVhc29ucyBmcm9tICdjb21wb25lbnRzL0pvYkZhaWx1cmVSZWFzb25zLnZ1ZSc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICdsYXJhdmVsLWpvYi1zdGF0dXMtanMnO1xuXG5jb25zdCByZXN1bHRzID0gcmVmPFF1ZXVlIHwgbnVsbD4obnVsbCk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBxdWV1ZTogc3RyaW5nO1xufT4oKTtcblxubGV0IGxpc3RlbmVyID0gY2xpZW50LnF1ZXVlc1xuICAuc2hvdyhwcm9wcy5xdWV1ZSlcbiAgLmJ5cGFzc0F1dGgoKVxuICAubGlzdGVuKClcbiAgLm9uVXBkYXRlZCgobmV3UmVzdWx0cykgPT4gKHJlc3VsdHMudmFsdWUgPSBuZXdSZXN1bHRzKSlcbiAgLnN0YXJ0KCk7XG5cbm9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gIGxpc3RlbmVyLnN0b3AoKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRIYXNoKGpvYlJ1bjogSm9iUnVuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvYlJ1bi51dWlkO1xufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDTSxVQUFBLFVBQVUsSUFBa0IsSUFBSTtBQU10QyxRQUFJLFdBQVcsT0FBTyxPQUNuQixLQUFLLE1BQU0sS0FBSyxFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLFVBQVUsQ0FBQyxlQUFnQixRQUFRLFFBQVEsVUFBVyxFQUN0RDtBQUVILG9CQUFnQixNQUFNO0FBQ3BCLGVBQVMsS0FBSztBQUFBLElBQUEsQ0FDZjtBQUVELGFBQVMsUUFBUSxRQUF3QjtBQUN2QyxhQUFPLE9BQU87QUFBQSxJQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
