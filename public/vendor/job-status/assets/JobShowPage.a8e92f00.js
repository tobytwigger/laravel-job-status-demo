import { Q as QItemSection, b as QItemLabel, c as QItem, d as QList } from "./QItem.41de614a.js";
import { S as Status, u as useApi, Q as QSeparator } from "./useApi.611adf4c.js";
import { Q as QPage, a as api } from "./api.887daef8.js";
import { b as useSizeProps, d as useSize, Q as QIcon } from "./use-router-link.e71e7d32.js";
import { c as createComponent, f as hMergeSlotSafely } from "./render.121135a7.js";
import { b as between } from "./format.801e7424.js";
import { c as computed, h, g as getCurrentInstance, _ as _export_sfc, L as defineComponent, M as openBlock, N as createBlock, O as withCtx, d as createVNode, Z as unref, Q as createCommentVNode, R as createTextVNode, S as toDisplayString, U as createBaseVNode, V as createElementBlock, r as ref, W as renderList, F as Fragment } from "./index.3a3a1336.js";
import "./index.aa7156d4.js";
import "./config.b6f61684.js";
const useCircularCommonProps = {
  ...useSizeProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  rounded: Boolean,
  thickness: {
    type: Number,
    default: 0.2,
    validator: (v) => v >= 0 && v <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
};
const radius = 50, diameter = 2 * radius, circumference = diameter * Math.PI, strokeDashArray = Math.round(circumference * 1e3) / 1e3;
var QCircularProgress = createComponent({
  name: "QCircularProgress",
  props: {
    ...useCircularCommonProps,
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);
    const svgStyle = computed(() => {
      const angle = ($q.lang.rtl === true ? -1 : 1) * props.angle;
      return {
        transform: props.reverse !== ($q.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - angle}deg)` : `rotate3d(0, 0, 1, ${angle - 90}deg)`
      };
    });
    const circleStyle = computed(() => props.instantFeedback !== true && props.indeterminate !== true ? { transition: `stroke-dashoffset ${props.animationSpeed}ms ease 0s, stroke ${props.animationSpeed}ms ease` } : "");
    const viewBox = computed(() => diameter / (1 - props.thickness / 2));
    const viewBoxAttr = computed(
      () => `${viewBox.value / 2} ${viewBox.value / 2} ${viewBox.value} ${viewBox.value}`
    );
    const normalized = computed(() => between(props.value, props.min, props.max));
    const strokeDashOffset = computed(() => circumference * (1 - (normalized.value - props.min) / (props.max - props.min)));
    const strokeWidth = computed(() => props.thickness / 2 * viewBox.value);
    function getCircle({ thickness, offset, color, cls, rounded }) {
      return h("circle", {
        class: "q-circular-progress__" + cls + (color !== void 0 ? ` text-${color}` : ""),
        style: circleStyle.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": thickness,
        "stroke-dasharray": strokeDashArray,
        "stroke-dashoffset": offset,
        "stroke-linecap": rounded,
        cx: viewBox.value,
        cy: viewBox.value,
        r: radius
      });
    }
    return () => {
      const svgChild = [];
      props.centerColor !== void 0 && props.centerColor !== "transparent" && svgChild.push(
        h("circle", {
          class: `q-circular-progress__center text-${props.centerColor}`,
          fill: "currentColor",
          r: radius - strokeWidth.value / 2,
          cx: viewBox.value,
          cy: viewBox.value
        })
      );
      props.trackColor !== void 0 && props.trackColor !== "transparent" && svgChild.push(
        getCircle({
          cls: "track",
          thickness: strokeWidth.value,
          offset: 0,
          color: props.trackColor
        })
      );
      svgChild.push(
        getCircle({
          cls: "circle",
          thickness: strokeWidth.value,
          offset: strokeDashOffset.value,
          color: props.color,
          rounded: props.rounded === true ? "round" : void 0
        })
      );
      const child = [
        h("svg", {
          class: "q-circular-progress__svg",
          style: svgStyle.value,
          viewBox: viewBoxAttr.value,
          "aria-hidden": "true"
        }, svgChild)
      ];
      props.showValue === true && child.push(
        h("div", {
          class: "q-circular-progress__text absolute-full row flex-center content-center",
          style: { fontSize: props.fontSize }
        }, slots.default !== void 0 ? slots.default() : [h("div", normalized.value)])
      );
      return h("div", {
        class: `q-circular-progress q-circular-progress--${props.indeterminate === true ? "in" : ""}determinate`,
        style: sizeStyle.value,
        role: "progressbar",
        "aria-valuemin": props.min,
        "aria-valuemax": props.max,
        "aria-valuenow": props.indeterminate === true ? void 0 : normalized.value
      }, hMergeSlotSafely(slots.internal, child));
    };
  }
});
const _hoisted_1 = { class: "text-weight-medium" };
const _hoisted_2 = {
  key: 0,
  class: "text-weight-medium"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-grey-8" }, " test finished.", -1);
const _hoisted_4 = { class: "text-grey-8 q-gutter-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackedRunListItem",
  props: {
    trackedRun: null
  },
  setup(__props) {
    const props = __props;
    const retryCount = computed(() => {
      let retries = 0;
      let run = props.trackedRun;
      while (run.parent !== null) {
        run = run.parent;
        retries++;
      }
      return retries;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QItem, { clickable: "" }, {
        default: withCtx(() => [
          createVNode(QItemSection, {
            avatar: "",
            top: ""
          }, {
            default: withCtx(() => [
              props.trackedRun.status === unref(Status).Queued ? (openBlock(), createBlock(QIcon, {
                key: 0,
                name: "hourglass_top",
                color: "black",
                size: "34px"
              })) : props.trackedRun.status === unref(Status).Started ? (openBlock(), createBlock(QCircularProgress, {
                key: 1,
                indeterminate: "",
                rounded: "",
                size: "34px",
                class: "q-ma-md"
              })) : props.trackedRun.status === unref(Status).Succeeded ? (openBlock(), createBlock(QIcon, {
                key: 2,
                name: "done",
                color: "black",
                size: "34px"
              })) : props.trackedRun.status === unref(Status).Failed ? (openBlock(), createBlock(QIcon, {
                key: 3,
                name: "close",
                color: "black",
                size: "34px"
              })) : props.trackedRun.status === unref(Status).Cancelled ? (openBlock(), createBlock(QIcon, {
                key: 4,
                name: "not_interested",
                color: "black",
                size: "34px"
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QItemSection, {
            top: "",
            class: "col-2 gt-sm"
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { class: "q-mt-sm" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString((_a = props.trackedRun.alias) != null ? _a : props.trackedRun.class), 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, { top: "" }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { lines: "1" }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_1, toDisplayString(props.trackedRun.status), 1),
                  unref(Status).Failed && unref(retryCount) > 0 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(retryCount)) + " retries", 1)) : createCommentVNode("", true),
                  _hoisted_3
                ]),
                _: 1
              }),
              createVNode(QItemLabel, {
                caption: "",
                lines: "2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" dsf dsf ")
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
              createBaseVNode("div", _hoisted_4, [
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
      });
    };
  }
});
var TrackedRunListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TrackedRunListItem.vue"]]);
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
                  createVNode(TrackedRunListItem, { "tracked-run": run }, null, 8, ["tracked-run"]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2hvd1BhZ2UuYThlOTJmMDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NpcmN1bGFyLXByb2dyZXNzL3VzZS1jaXJjdWxhci1wcm9ncmVzcy5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NpcmN1bGFyLXByb2dyZXNzL1FDaXJjdWxhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9jb21wb25lbnRzL1RyYWNrZWRSdW5MaXN0SXRlbS52dWUiLCIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL3BhZ2VzL0pvYlNob3dQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG4vLyBhbHNvIHVzZWQgYnkgUUtub2JcbmV4cG9ydCBjb25zdCB1c2VDaXJjdWxhckNvbW1vblByb3BzID0ge1xuICAuLi51c2VTaXplUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIGNlbnRlckNvbG9yOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICBmb250U2l6ZTogU3RyaW5nLFxuICByb3VuZGVkOiBCb29sZWFuLFxuXG4gIC8vIHJhdGlvXG4gIHRoaWNrbmVzczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLjIsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMCAmJiB2IDw9IDFcbiAgfSxcblxuICBhbmdsZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG5cbiAgc2hvd1ZhbHVlOiBCb29sZWFuLFxuICByZXZlcnNlOiBCb29sZWFuLFxuXG4gIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxufVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNpemUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB7IHVzZUNpcmN1bGFyQ29tbW9uUHJvcHMgfSBmcm9tICcuL3VzZS1jaXJjdWxhci1wcm9ncmVzcy5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90U2FmZWx5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG5jb25zdFxuICByYWRpdXMgPSA1MCxcbiAgZGlhbWV0ZXIgPSAyICogcmFkaXVzLFxuICBjaXJjdW1mZXJlbmNlID0gZGlhbWV0ZXIgKiBNYXRoLlBJLFxuICBzdHJva2VEYXNoQXJyYXkgPSBNYXRoLnJvdW5kKGNpcmN1bWZlcmVuY2UgKiAxMDAwKSAvIDEwMDBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDaXJjdWxhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUNpcmN1bGFyQ29tbW9uUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG5cbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNjAwXG4gICAgfSxcblxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzKVxuXG4gICAgY29uc3Qgc3ZnU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBwcm9wcy5hbmdsZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgICAgICAgICA/IGBzY2FsZTNkKC0xLCAxLCAxKSByb3RhdGUzZCgwLCAwLCAxLCAkeyAtOTAgLSBhbmdsZSB9ZGVnKWBcbiAgICAgICAgICA6IGByb3RhdGUzZCgwLCAwLCAxLCAkeyBhbmdsZSAtIDkwIH1kZWcpYFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjaXJjbGVTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmluc3RhbnRGZWVkYmFjayAhPT0gdHJ1ZSAmJiBwcm9wcy5pbmRldGVybWluYXRlICE9PSB0cnVlXG4gICAgICAgID8geyB0cmFuc2l0aW9uOiBgc3Ryb2tlLWRhc2hvZmZzZXQgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zIGVhc2UgMHMsIHN0cm9rZSAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXMgZWFzZWAgfVxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHZpZXdCb3ggPSBjb21wdXRlZCgoKSA9PiBkaWFtZXRlciAvICgxIC0gcHJvcHMudGhpY2tuZXNzIC8gMikpXG5cbiAgICBjb25zdCB2aWV3Qm94QXR0ciA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgJHsgdmlld0JveC52YWx1ZSAvIDIgfSAkeyB2aWV3Qm94LnZhbHVlIC8gMiB9ICR7IHZpZXdCb3gudmFsdWUgfSAkeyB2aWV3Qm94LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGNvbXB1dGVkKCgpID0+IGJldHdlZW4ocHJvcHMudmFsdWUsIHByb3BzLm1pbiwgcHJvcHMubWF4KSlcblxuICAgIGNvbnN0IHN0cm9rZURhc2hPZmZzZXQgPSBjb21wdXRlZCgoKSA9PiBjaXJjdW1mZXJlbmNlICogKFxuICAgICAgMSAtIChub3JtYWxpemVkLnZhbHVlIC0gcHJvcHMubWluKSAvIChwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gICAgKSlcblxuICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudGhpY2tuZXNzIC8gMiAqIHZpZXdCb3gudmFsdWUpXG5cbiAgICBmdW5jdGlvbiBnZXRDaXJjbGUgKHsgdGhpY2tuZXNzLCBvZmZzZXQsIGNvbG9yLCBjbHMsIHJvdW5kZWQgfSkge1xuICAgICAgcmV0dXJuIGgoJ2NpcmNsZScsIHtcbiAgICAgICAgY2xhc3M6ICdxLWNpcmN1bGFyLXByb2dyZXNzX18nICsgY2xzICsgKGNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJyksXG4gICAgICAgIHN0eWxlOiBjaXJjbGVTdHlsZS52YWx1ZSxcbiAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IHRoaWNrbmVzcyxcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiBzdHJva2VEYXNoQXJyYXksXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IG9mZnNldCxcbiAgICAgICAgJ3N0cm9rZS1saW5lY2FwJzogcm91bmRlZCxcbiAgICAgICAgY3g6IHZpZXdCb3gudmFsdWUsXG4gICAgICAgIGN5OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICByOiByYWRpdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHN2Z0NoaWxkID0gW11cblxuICAgICAgcHJvcHMuY2VudGVyQ29sb3IgIT09IHZvaWQgMCAmJiBwcm9wcy5jZW50ZXJDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiBzdmdDaGlsZC5wdXNoKFxuICAgICAgICBoKCdjaXJjbGUnLCB7XG4gICAgICAgICAgY2xhc3M6IGBxLWNpcmN1bGFyLXByb2dyZXNzX19jZW50ZXIgdGV4dC0keyBwcm9wcy5jZW50ZXJDb2xvciB9YCxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICByOiByYWRpdXMgLSBzdHJva2VXaWR0aC52YWx1ZSAvIDIsXG4gICAgICAgICAgY3g6IHZpZXdCb3gudmFsdWUsXG4gICAgICAgICAgY3k6IHZpZXdCb3gudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwICYmIHByb3BzLnRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgZ2V0Q2lyY2xlKHtcbiAgICAgICAgICBjbHM6ICd0cmFjaycsXG4gICAgICAgICAgdGhpY2tuZXNzOiBzdHJva2VXaWR0aC52YWx1ZSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgY29sb3I6IHByb3BzLnRyYWNrQ29sb3JcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgZ2V0Q2lyY2xlKHtcbiAgICAgICAgICBjbHM6ICdjaXJjbGUnLFxuICAgICAgICAgIHRoaWNrbmVzczogc3Ryb2tlV2lkdGgudmFsdWUsXG4gICAgICAgICAgb2Zmc2V0OiBzdHJva2VEYXNoT2Zmc2V0LnZhbHVlLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkID09PSB0cnVlID8gJ3JvdW5kJyA6IHZvaWQgMFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fc3ZnJyxcbiAgICAgICAgICBzdHlsZTogc3ZnU3R5bGUudmFsdWUsXG4gICAgICAgICAgdmlld0JveDogdmlld0JveEF0dHIudmFsdWUsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIHN2Z0NoaWxkKVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zaG93VmFsdWUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fdGV4dCBhYnNvbHV0ZS1mdWxsIHJvdyBmbGV4LWNlbnRlciBjb250ZW50LWNlbnRlcicsXG4gICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IHByb3BzLmZvbnRTaXplIH1cbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdCAhPT0gdm9pZCAwID8gc2xvdHMuZGVmYXVsdCgpIDogWyBoKCdkaXYnLCBub3JtYWxpemVkLnZhbHVlKSBdKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHEtY2lyY3VsYXItcHJvZ3Jlc3MgcS1jaXJjdWxhci1wcm9ncmVzcy0tJHsgcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSA/ICdpbicgOiAnJyB9ZGV0ZXJtaW5hdGVgLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBwcm9wcy5tYXgsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSA/IHZvaWQgMCA6IG5vcm1hbGl6ZWQudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3RTYWZlbHkoc2xvdHMuaW50ZXJuYWwsIGNoaWxkKSkgLy8gXCJpbnRlcm5hbFwiIGlzIHVzZWQgYnkgUUtub2JcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXIgdG9wPlxuICAgICAgPHEtaWNvbiBuYW1lPVwiaG91cmdsYXNzX3RvcFwiIGNvbG9yPVwiYmxhY2tcIiBzaXplPVwiMzRweFwiIHYtaWY9XCJwcm9wcy50cmFja2VkUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlF1ZXVlZFwiIC8+XG4gICAgICA8cS1jaXJjdWxhci1wcm9ncmVzc1xuICAgICAgICBpbmRldGVybWluYXRlXG4gICAgICAgIHJvdW5kZWRcbiAgICAgICAgdi1lbHNlLWlmPVwicHJvcHMudHJhY2tlZFJ1bi5zdGF0dXMgPT09IFN0YXR1cy5TdGFydGVkXCJcbiAgICAgICAgc2l6ZT1cIjM0cHhcIlxuICAgICAgICBjbGFzcz1cInEtbWEtbWRcIlxuICAgICAgLz5cbiAgICAgIDxxLWljb24gbmFtZT1cImRvbmVcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjM0cHhcIiB2LWVsc2UtaWY9XCJwcm9wcy50cmFja2VkUnVuLnN0YXR1cyA9PT0gU3RhdHVzLlN1Y2NlZWRlZFwiIC8+XG4gICAgICA8cS1pY29uIG5hbWU9XCJjbG9zZVwiIGNvbG9yPVwiYmxhY2tcIiBzaXplPVwiMzRweFwiIHYtZWxzZS1pZj1cInByb3BzLnRyYWNrZWRSdW4uc3RhdHVzID09PSBTdGF0dXMuRmFpbGVkXCIgLz5cbiAgICAgIDxxLWljb24gbmFtZT1cIm5vdF9pbnRlcmVzdGVkXCIgY29sb3I9XCJibGFja1wiIHNpemU9XCIzNHB4XCIgdi1lbHNlLWlmPVwicHJvcHMudHJhY2tlZFJ1bi5zdGF0dXMgPT09IFN0YXR1cy5DYW5jZWxsZWRcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24gdG9wIGNsYXNzPVwiY29sLTIgZ3Qtc21cIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJxLW10LXNtXCI+e3sgcHJvcHMudHJhY2tlZFJ1bi5hbGlhcyA/PyBwcm9wcy50cmFja2VkUnVuLmNsYXNzIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3A+XG4gICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7cHJvcHMudHJhY2tlZFJ1bi5zdGF0dXN9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIlN0YXR1cy5GYWlsZWQgJiYgcmV0cnlDb3VudCA+IDBcIiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7cmV0cnlDb3VudH19IHJldHJpZXM8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LThcIj4gdGVzdCBmaW5pc2hlZC48L3NwYW4+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5cbiAgICAgICAgZHNmXG4gICAgICAgIGRzZlxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiB0b3Agc2lkZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktOCBxLWd1dHRlci14c1wiPlxuICAgICAgICA8cS1pY29uIGNsYXNzPVwiZ3QteHNcIiBzaXplPVwiMTJweFwiIGljb249XCJrZXlib2FyZF9hcnJvd19yaWdodFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge2NvbXB1dGVkLCBkZWZpbmVQcm9wc30gZnJvbSAndnVlJztcbmltcG9ydCB7Sm9iUnVuLCBTdGF0dXN9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdHJhY2tlZFJ1bjogSm9iUnVuXG59PigpO1xuXG5cbi8vIENvdW50c1xuXG5jb25zdCByZXRyeUNvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICBsZXQgcmV0cmllcyA9IDA7XG4gIGxldCBydW4gPSBwcm9wcy50cmFja2VkUnVuO1xuICB3aGlsZShydW4ucGFyZW50ICE9PSBudWxsKSB7XG4gICAgcnVuID0gcnVuLnBhcmVudFxuICAgIHJldHJpZXMrKztcbiAgfVxuICByZXR1cm4gcmV0cmllcztcbn0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XG4gICAgPHA+QWxpYXM6IHt7cmVzdWx0cy5hbGlhc319PC9wPlxuICAgIDxwPkNsYXNzOiB7e3Jlc3VsdHMuY2xhc3N9fTwvcD5cblxuICAgIDxxLWxpc3QgYm9yZGVyZWQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIiBzdHlsZT1cIm1pbi13aWR0aDogODUlXCIgPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+UnVuczwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDxkaXYgdi1mb3I9XCJydW4gaW4gcmVzdWx0cy5ydW5zXCIgOmtleT1cImdldEhhc2gocnVuKVwiPlxuICAgICAgICA8dHJhY2tlZC1ydW4tbGlzdC1pdGVtIDp0cmFja2VkLXJ1bj1cInJ1blwiPlxuICAgICAgICA8L3RyYWNrZWQtcnVuLWxpc3QtaXRlbT5cbiAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtbGlzdD5cblxuICA8L3EtcGFnZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIiB2LWVsc2U+XG4gICAgTG9hZGluZ1xuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCBhcGkgZnJvbSAnc3JjL3V0aWxzL2NsaWVudC9hcGknO1xuaW1wb3J0IHtKb2JSdW4sIFRyYWNrZWRKb2J9IGZyb20gJ3NyYy90eXBlcy9hcGknO1xuaW1wb3J0IHt1c2VBcGl9IGZyb20gXCIuLi9jb21wb3N0YWJsZXMvdXNlQXBpXCI7XG5pbXBvcnQgVHJhY2tlZFJ1bkxpc3RJdGVtIGZyb20gXCJjb21wb25lbnRzL1RyYWNrZWRSdW5MaXN0SXRlbS52dWVcIjtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxUcmFja2VkSm9ifG51bGw+KG51bGwpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYWxpYXM6IHN0cmluZ1xufT4oKTtcblxudXNlQXBpKChhZnRlcikgPT4ge1xuICBhcGkuam9iU2hvdyhwcm9wcy5hbGlhcylcbiAgICAudGhlbigocmVzcG9uc2U6IFRyYWNrZWRKb2IpID0+IHJlc3VsdHMudmFsdWUgPSByZXNwb25zZSlcbiAgICAuZmluYWxseShhZnRlcik7XG59KVxuXG5mdW5jdGlvbiBnZXRIYXNoKGpvYlJ1bjogSm9iUnVuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvYlJ1bi51dWlkO1xufVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHTyxNQUFNLHlCQUF5QjtBQUFBLEVBQ3BDLEdBQUc7QUFBQSxFQUVILEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSCxNQUFNO0FB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
