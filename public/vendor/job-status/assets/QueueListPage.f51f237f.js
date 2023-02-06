import { c as client, Q as QBreadcrumbsEl, a as QBreadcrumbs, b as QSeparator } from "./index.0dd3d626.js";
import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.d72dec2c.js";
import { Q as QPage } from "./QPage.17c7e3d4.js";
import { Q as QIcon } from "./use-router-link.f56975ac.js";
import { S as StatusCount } from "./StatusCount.17ce5dad.js";
import { _ as _export_sfc, K as defineComponent, L as openBlock, M as createBlock, N as withCtx, d as createVNode, P as createTextVNode, Q as toDisplayString, R as createBaseVNode, r as ref, k as onBeforeUnmount, S as createElementBlock, U as renderList, F as Fragment } from "./index.c9c99a36.js";
import "./render.2c6f0e6d.js";
import "./index.b7f28e66.js";
import "./QAvatar.1b6fa440.js";
import "./QChip.d38cd9d9.js";
const _hoisted_1 = { class: "text-weight-medium" };
const _hoisted_2 = { class: "text-grey-8 q-gutter-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "QueueListItem",
  props: {
    queue: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QItem, {
        clickable: "",
        to: { path: "/queues/" + encodeURIComponent(props.queue.name) }
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, {
            avatar: "",
            top: ""
          }, {
            default: withCtx(() => [
              createVNode(QIcon, {
                name: "queue",
                color: "black",
                size: "34px"
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, {
            top: "",
            class: "col-2 gt-sm"
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { class: "q-mt-sm" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.queue.name), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, { top: "" }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { lines: "1" }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_1, toDisplayString(props.queue.name), 1)
                ]),
                _: 1
              }),
              createVNode(QItemLabel, {
                caption: "",
                lines: "5"
              }, {
                default: withCtx(() => [
                  createVNode(StatusCount, {
                    count: props.queue.queued,
                    label: "Queued",
                    color: "primary"
                  }, null, 8, ["count"]),
                  createVNode(StatusCount, {
                    count: props.queue.started,
                    label: "Running",
                    color: "info"
                  }, null, 8, ["count"]),
                  createVNode(StatusCount, {
                    count: props.queue.cancelled,
                    label: "Cancelled",
                    color: "warning"
                  }, null, 8, ["count"]),
                  createVNode(StatusCount, {
                    count: props.queue.failed,
                    label: "Failed",
                    color: "negative"
                  }, null, 8, ["count"]),
                  createVNode(StatusCount, {
                    count: props.queue.succeeded,
                    label: "Succeeded",
                    color: "positive"
                  }, null, 8, ["count"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, {
            top: "",
            side: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QIcon, {
                  class: "gt-xs",
                  size: "12px",
                  icon: "keyboard_arrow_right"
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var QueueListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "QueueListItem.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QueueListPage",
  setup(__props) {
    const results = ref(null);
    let listener = client.queues.search().bypassAuth().listen().onUpdated((newResults) => results.value = newResults).start();
    onBeforeUnmount(() => {
      listener.stop();
    });
    function getHash(queue) {
      return queue.name;
    }
    return (_ctx, _cache) => {
      return results.value !== null ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "justify-evenly"
      }, {
        default: withCtx(() => [
          createVNode(QBreadcrumbs, null, {
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                icon: "list",
                to: "/queues",
                label: "Queues"
              })
            ]),
            _: 1
          }),
          createVNode(QList, { class: "rounded-borders q-pa-lg" }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { header: "" }, {
                default: withCtx(() => [
                  createTextVNode("All Queues")
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result) => {
                return openBlock(), createElementBlock("div", {
                  key: getHash(result)
                }, [
                  createVNode(QueueListItem, { queue: result }, null, 8, ["queue"]),
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
var QueueListPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "QueueListPage.vue"]]);
export { QueueListPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVMaXN0UGFnZS5mNTFmMjM3Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9wYWdlcy9RdWV1ZUxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJqdXN0aWZ5LWV2ZW5seVwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgPHEtYnJlYWRjcnVtYnM+XG4gICAgICA8cS1icmVhZGNydW1icy1lbCBpY29uPVwibGlzdFwiIHRvPVwiL3F1ZXVlc1wiIGxhYmVsPVwiUXVldWVzXCIgLz5cbiAgICA8L3EtYnJlYWRjcnVtYnM+XG5cbiAgICA8cS1saXN0IGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIHEtcGEtbGdcIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPkFsbCBRdWV1ZXM8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8ZGl2IHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHNcIiA6a2V5PVwiZ2V0SGFzaChyZXN1bHQpXCI+XG4gICAgICAgIDxxdWV1ZS1saXN0LWl0ZW0gOnF1ZXVlPVwicmVzdWx0XCI+IDwvcXVldWUtbGlzdC1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuICA8L3EtcGFnZT5cbiAgPHEtcGFnZSBjbGFzcz1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiIHYtZWxzZT4gTG9hZGluZyA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBvbkJlZm9yZVVubW91bnQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJ2xhcmF2ZWwtam9iLXN0YXR1cy1qcyc7XG5pbXBvcnQge1F1ZXVlfSBmcm9tIFwic3JjL3R5cGVzL2FwaVwiO1xuaW1wb3J0IFF1ZXVlTGlzdEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvUXVldWVMaXN0SXRlbS52dWVcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxRdWV1ZVtdIHwgbnVsbD4obnVsbCk7XG5cbmxldCBsaXN0ZW5lciA9IGNsaWVudC5xdWV1ZXNcbiAgLnNlYXJjaCgpXG4gIC5ieXBhc3NBdXRoKClcbiAgLmxpc3RlbigpXG4gIC5vblVwZGF0ZWQoKG5ld1Jlc3VsdHMpID0+IChyZXN1bHRzLnZhbHVlID0gbmV3UmVzdWx0cykpXG4gIC5zdGFydCgpO1xuXG5vbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICBsaXN0ZW5lci5zdG9wKCk7XG59KTtcblxuZnVuY3Rpb24gZ2V0SGFzaChxdWV1ZTogUXVldWUpOiBzdHJpbmcge1xuICByZXR1cm4gcXVldWUubmFtZTtcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Qk0sVUFBQSxVQUFVLElBQW9CLElBQUk7QUFFeEMsUUFBSSxXQUFXLE9BQU8sT0FDbkIsT0FBTyxFQUNQLGFBQ0EsT0FBQSxFQUNBLFVBQVUsQ0FBQyxlQUFnQixRQUFRLFFBQVEsVUFBVyxFQUN0RDtBQUVILG9CQUFnQixNQUFNO0FBQ3BCLGVBQVMsS0FBSztBQUFBLElBQUEsQ0FDZjtBQUVELGFBQVMsUUFBUSxPQUFzQjtBQUNyQyxhQUFPLE1BQU07QUFBQSxJQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
