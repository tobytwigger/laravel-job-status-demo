import { c as computed, h, Z as unref, $ as isKeyCode, z as addEvt, E as cleanEvt, C as stop, D as position, r as ref, k as onBeforeUnmount, a0 as Transition, G as withDirectives, g as getCurrentInstance, u as stopAndPrevent, m as listenOpts, B as prevent } from "./index.280f5382.js";
import { u as useSizeDefaults, b as useSizeProps, c as useRouterLinkProps, d as useSize, e as useRouterLink, Q as QIcon } from "./use-router-link.66036acd.js";
import { c as createComponent, b as createDirective, e as hMergeSlot } from "./render.ef6a2659.js";
const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
    classes: computed(
      () => "q-spinner" + (props.color ? ` text-${props.color}` : "")
    )
  };
}
var QSpinner = createComponent({
  name: "QSpinner",
  props: {
    ...useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function css(element, css2) {
  const style = element.style;
  for (const prop in css2) {
    style[prop] = css2[prop];
  }
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target = unref(el);
  if (target) {
    return target.$el || target;
  }
}
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple = createDirective(
  {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
const getBtnDesign = (props, defaultValue) => {
  if (props.flat === true)
    return "flat";
  if (props.outline === true)
    return "outline";
  if (props.push === true)
    return "push";
  if (props.unelevated === true)
    return "unelevated";
  return defaultValue;
};
const useBtnProps = {
  ...useSizeProps,
  ...useRouterLinkProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: "button"
  });
  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props.rounded === true || props.fab === true || props.fabMini === true
  );
  const isActionable = computed(
    () => props.disable !== true && props.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }
    if (linkTag.value === "a") {
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    } else if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var QBtn = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = useBtn(props);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
    const hasLabel = computed(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const ripple = computed(() => props.disable === true || props.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props.ripple === true ? {} : props.ripple
    });
    const rippleProps = computed(() => ({ center: props.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("touchstart", e);
      if (e.defaultPrevented === true) {
        return;
      }
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null) {
        return;
      }
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, { click: onClick });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack === false && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack === false && hasLabel.value === true,
            role: "img",
            "aria-hidden": "true"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
export { QBtn as Q, css as c, getElement as g };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bi4wZWU4OTc1Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci91c2Utc3Bpbm5lci5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXIuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZG9tLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvUmlwcGxlLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFsaWduLmpzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuL3VzZS1idG4uanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4vUUJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZVNpemVEZWZhdWx0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VTcGlubmVyUHJvcHMgPSB7XG4gIHNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogJzFlbSdcbiAgfSxcbiAgY29sb3I6IFN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTcGlubmVyIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIGNTaXplOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zaXplIGluIHVzZVNpemVEZWZhdWx0c1xuICAgICAgICA/IGAkeyB1c2VTaXplRGVmYXVsdHNbIHByb3BzLnNpemUgXSB9cHhgXG4gICAgICAgIDogcHJvcHMuc2l6ZVxuICAgICkpLFxuXG4gICAgY2xhc3NlczogY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNwaW5uZXInICsgKHByb3BzLmNvbG9yID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNwaW5uZXJQcm9wcyxcblxuICAgIHRoaWNrbmVzczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3N2ZycsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgJyBxLXNwaW5uZXItbWF0JyxcbiAgICAgIHdpZHRoOiBjU2l6ZS52YWx1ZSxcbiAgICAgIGhlaWdodDogY1NpemUudmFsdWUsXG4gICAgICB2aWV3Qm94OiAnMjUgMjUgNTAgNTAnXG4gICAgfSwgW1xuICAgICAgaCgnY2lyY2xlJywge1xuICAgICAgICBjbGFzczogJ3BhdGgnLFxuICAgICAgICBjeDogJzUwJyxcbiAgICAgICAgY3k6ICc1MCcsXG4gICAgICAgIHI6ICcyMCcsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IHByb3BzLnRoaWNrbmVzcyxcbiAgICAgICAgJ3N0cm9rZS1taXRlcmxpbWl0JzogJzEwJ1xuICAgICAgfSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgdW5yZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQgKGVsKSB7XG4gIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH1cbiAgfVxuICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHsgdG9wLCBsZWZ0IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlIChlbCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVpZ2h0IChlbCkge1xuICByZXR1cm4gZWwgPT09IHdpbmRvd1xuICAgID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgOiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoIChlbCkge1xuICByZXR1cm4gZWwgPT09IHdpbmRvd1xuICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICA6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3MgKGVsZW1lbnQsIGNzcykge1xuICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGVcblxuICBmb3IgKGNvbnN0IHByb3AgaW4gY3NzKSB7XG4gICAgc3R5bGVbIHByb3AgXSA9IGNzc1sgcHJvcCBdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0JhdGNoIChlbGVtZW50cywgc3R5bGUpIHtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBjc3MoZWwsIHN0eWxlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWR5IChmbikge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIGZuKClcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbiwgZmFsc2UpXG59XG5cbi8vIGludGVybmFsXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCAoZWwpIHtcbiAgaWYgKGVsID09PSB2b2lkIDAgfHwgZWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdm9pZCAwXG4gIH1cblxuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgfHwgdm9pZCAwXG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB2b2lkIDBcbiAgICB9XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSB1bnJlZihlbClcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuJGVsIHx8IHRhcmdldFxuICB9XG59XG5cbi8vIGludGVybmFsXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRIYXNGb2N1cyAoZWwsIGZvY3VzZWRFbCkge1xuICBpZiAoZWwgPT09IHZvaWQgMCB8fCBlbCA9PT0gbnVsbCB8fCBlbC5jb250YWlucyhmb2N1c2VkRWwpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAobGV0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IG5leHQgIT09IG51bGw7IG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIGlmIChuZXh0LmNvbnRhaW5zKGZvY3VzZWRFbCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb2Zmc2V0LFxuICBzdHlsZSxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgY3NzLFxuICBjc3NCYXRjaCxcbiAgcmVhZHlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmbiwgbGltaXQgPSAyNTApIHtcbiAgbGV0IHdhaXQgPSBmYWxzZSwgcmVzdWx0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgaWYgKHdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB3YWl0ID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHdhaXQgPSBmYWxzZSB9LCBsaW1pdClcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vdXRpbHMvZG9tLmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24sIHN0b3AsIGFkZEV2dCwgY2xlYW5FdnQgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gc2hvd1JpcHBsZSAoZXZ0LCBlbCwgY3R4LCBmb3JjZUNlbnRlcikge1xuICBjdHgubW9kaWZpZXJzLnN0b3AgPT09IHRydWUgJiYgc3RvcChldnQpXG5cbiAgY29uc3QgY29sb3IgPSBjdHgubW9kaWZpZXJzLmNvbG9yXG4gIGxldCBjZW50ZXIgPSBjdHgubW9kaWZpZXJzLmNlbnRlclxuICBjZW50ZXIgPSBjZW50ZXIgPT09IHRydWUgfHwgZm9yY2VDZW50ZXIgPT09IHRydWVcblxuICBjb25zdFxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgaW5uZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGRpYW1ldGVyID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpLFxuICAgIHJhZGl1cyA9IGRpYW1ldGVyIC8gMixcbiAgICBjZW50ZXJYID0gYCR7ICh3aWR0aCAtIGRpYW1ldGVyKSAvIDIgfXB4YCxcbiAgICB4ID0gY2VudGVyID8gY2VudGVyWCA6IGAkeyBwb3MubGVmdCAtIGxlZnQgLSByYWRpdXMgfXB4YCxcbiAgICBjZW50ZXJZID0gYCR7IChoZWlnaHQgLSBkaWFtZXRlcikgLyAyIH1weGAsXG4gICAgeSA9IGNlbnRlciA/IGNlbnRlclkgOiBgJHsgcG9zLnRvcCAtIHRvcCAtIHJhZGl1cyB9cHhgXG5cbiAgaW5uZXJOb2RlLmNsYXNzTmFtZSA9ICdxLXJpcHBsZV9faW5uZXInXG4gIGNzcyhpbm5lck5vZGUsIHtcbiAgICBoZWlnaHQ6IGAkeyBkaWFtZXRlciB9cHhgLFxuICAgIHdpZHRoOiBgJHsgZGlhbWV0ZXIgfXB4YCxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgkeyB4IH0sJHsgeSB9LDApIHNjYWxlM2QoLjIsLjIsMSlgLFxuICAgIG9wYWNpdHk6IDBcbiAgfSlcblxuICBub2RlLmNsYXNzTmFtZSA9IGBxLXJpcHBsZSR7IGNvbG9yID8gJyB0ZXh0LScgKyBjb2xvciA6ICcnIH1gXG4gIG5vZGUuc2V0QXR0cmlidXRlKCdkaXInLCAnbHRyJylcbiAgbm9kZS5hcHBlbmRDaGlsZChpbm5lck5vZGUpXG4gIGVsLmFwcGVuZENoaWxkKG5vZGUpXG5cbiAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgbm9kZS5yZW1vdmUoKVxuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgfVxuICBjdHguYWJvcnQucHVzaChhYm9ydClcblxuICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpbm5lck5vZGUuY2xhc3NMaXN0LmFkZCgncS1yaXBwbGVfX2lubmVyLS1lbnRlcicpXG4gICAgaW5uZXJOb2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkeyBjZW50ZXJYIH0sJHsgY2VudGVyWSB9LDApIHNjYWxlM2QoMSwxLDEpYFxuICAgIGlubmVyTm9kZS5zdHlsZS5vcGFjaXR5ID0gMC4yXG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtcmlwcGxlX19pbm5lci0tZW50ZXInKVxuICAgICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ3EtcmlwcGxlX19pbm5lci0tbGVhdmUnKVxuICAgICAgaW5uZXJOb2RlLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlKClcbiAgICAgICAgY3R4LmFib3J0LnNwbGljZShjdHguYWJvcnQuaW5kZXhPZihhYm9ydCksIDEpXG4gICAgICB9LCAyNzUpXG4gICAgfSwgMjUwKVxuICB9LCA1MClcbn1cblxuZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJzIChjdHgsIHsgbW9kaWZpZXJzLCB2YWx1ZSwgYXJnIH0pIHtcbiAgY29uc3QgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgY3R4LmNmZy5yaXBwbGUsIG1vZGlmaWVycywgdmFsdWUpXG4gIGN0eC5tb2RpZmllcnMgPSB7XG4gICAgZWFybHk6IGNmZy5lYXJseSA9PT0gdHJ1ZSxcbiAgICBzdG9wOiBjZmcuc3RvcCA9PT0gdHJ1ZSxcbiAgICBjZW50ZXI6IGNmZy5jZW50ZXIgPT09IHRydWUsXG4gICAgY29sb3I6IGNmZy5jb2xvciB8fCBhcmcsXG4gICAga2V5Q29kZXM6IFtdLmNvbmNhdChjZmcua2V5Q29kZXMgfHwgMTMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3JpcHBsZScsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAncmlwcGxlJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IGNmZyA9IGJpbmRpbmcuaW5zdGFuY2UuJC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRxLmNvbmZpZyB8fCB7fVxuXG4gICAgICAgIGlmIChjZmcucmlwcGxlID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGNmZyxcbiAgICAgICAgICBlbmFibGVkOiBiaW5kaW5nLnZhbHVlICE9PSBmYWxzZSxcbiAgICAgICAgICBtb2RpZmllcnM6IHt9LFxuICAgICAgICAgIGFib3J0OiBbXSxcblxuICAgICAgICAgIHN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmVuYWJsZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnFTa2lwUmlwcGxlICE9PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC50eXBlID09PSAoY3R4Lm1vZGlmaWVycy5lYXJseSA9PT0gdHJ1ZSA/ICdwb2ludGVyZG93bicgOiAnY2xpY2snKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNob3dSaXBwbGUoZXZ0LCBlbCwgY3R4LCBldnQucUtleUV2ZW50ID09PSB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBrZXlzdGFydDogdGhyb3R0bGUoZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmVuYWJsZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnFTa2lwUmlwcGxlICE9PSB0cnVlXG4gICAgICAgICAgICAgICYmIGlzS2V5Q29kZShldnQsIGN0eC5tb2RpZmllcnMua2V5Q29kZXMpID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC50eXBlID09PSBga2V5JHsgY3R4Lm1vZGlmaWVycy5lYXJseSA9PT0gdHJ1ZSA/ICdkb3duJyA6ICd1cCcgfWBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaG93UmlwcGxlKGV2dCwgZWwsIGN0eCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAzMDApXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVNb2RpZmllcnMoY3R4LCBiaW5kaW5nKVxuXG4gICAgICAgIGVsLl9fcXJpcHBsZSA9IGN0eFxuXG4gICAgICAgIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICdwb2ludGVyZG93bicsICdzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdjbGljaycsICdzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdrZXlkb3duJywgJ2tleXN0YXJ0JywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBlbCwgJ2tleXVwJywgJ2tleXN0YXJ0JywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIGlmIChiaW5kaW5nLm9sZFZhbHVlICE9PSBiaW5kaW5nLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xcmlwcGxlXG4gICAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdHguZW5hYmxlZCA9IGJpbmRpbmcudmFsdWUgIT09IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChjdHguZW5hYmxlZCA9PT0gdHJ1ZSAmJiBPYmplY3QoYmluZGluZy52YWx1ZSkgPT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlTW9kaWZpZXJzKGN0eCwgYmluZGluZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXJpcHBsZVxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjdHguYWJvcnQuZm9yRWFjaChmbiA9PiB7IGZuKCkgfSlcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBkZWxldGUgZWwuX3FyaXBwbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgYWxpZ25NYXAgPSB7XG4gIGxlZnQ6ICdzdGFydCcsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gIHJpZ2h0OiAnZW5kJyxcbiAgYmV0d2VlbjogJ2JldHdlZW4nLFxuICBhcm91bmQ6ICdhcm91bmQnLFxuICBldmVubHk6ICdldmVubHknLFxuICBzdHJldGNoOiAnc3RyZXRjaCdcbn1cblxuZXhwb3J0IGNvbnN0IGFsaWduVmFsdWVzID0gT2JqZWN0LmtleXMoYWxpZ25NYXApXG5cbmV4cG9ydCBjb25zdCB1c2VBbGlnblByb3BzID0ge1xuICBhbGlnbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gYWxpZ25WYWx1ZXMuaW5jbHVkZXModilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgLy8gcmV0dXJuIGFsaWduQ2xhc3NcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhbGlnbiA9IHByb3BzLmFsaWduID09PSB2b2lkIDBcbiAgICAgID8gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc3RyZXRjaCcgOiAnbGVmdCdcbiAgICAgIDogcHJvcHMuYWxpZ25cblxuICAgIHJldHVybiBgJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaXRlbXMnIDogJ2p1c3RpZnknIH0tJHsgYWxpZ25NYXBbIGFsaWduIF0gfWBcbiAgfSlcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQWxpZ24sIHsgdXNlQWxpZ25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFsaWduLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB1c2VSb3V0ZXJMaW5rLCB7IHVzZVJvdXRlckxpbmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJvdXRlci1saW5rLmpzJ1xuXG5leHBvcnQgY29uc3QgYnRuUGFkZGluZyA9IHtcbiAgbm9uZTogMCxcbiAgeHM6IDQsXG4gIHNtOiA4LFxuICBtZDogMTYsXG4gIGxnOiAyNCxcbiAgeGw6IDMyXG59XG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDgsXG4gIHNtOiAxMCxcbiAgbWQ6IDE0LFxuICBsZzogMjAsXG4gIHhsOiAyNFxufVxuXG5jb25zdCBmb3JtVHlwZXMgPSBbICdidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0JyBdXG5jb25zdCBtZWRpYVR5cGVSRSA9IC9bXlxcc11cXC9bXlxcc10vXG5cbmV4cG9ydCBjb25zdCBidG5EZXNpZ25PcHRpb25zID0gWyAnZmxhdCcsICdvdXRsaW5lJywgJ3B1c2gnLCAndW5lbGV2YXRlZCcgXVxuZXhwb3J0IGNvbnN0IGdldEJ0bkRlc2lnbiA9IChwcm9wcywgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIGlmIChwcm9wcy5mbGF0ID09PSB0cnVlKSByZXR1cm4gJ2ZsYXQnXG4gIGlmIChwcm9wcy5vdXRsaW5lID09PSB0cnVlKSByZXR1cm4gJ291dGxpbmUnXG4gIGlmIChwcm9wcy5wdXNoID09PSB0cnVlKSByZXR1cm4gJ3B1c2gnXG4gIGlmIChwcm9wcy51bmVsZXZhdGVkID09PSB0cnVlKSByZXR1cm4gJ3VuZWxldmF0ZWQnXG4gIHJldHVybiBkZWZhdWx0VmFsdWVcbn1cbmV4cG9ydCBjb25zdCBnZXRCdG5EZXNpZ25BdHRyID0gcHJvcHMgPT4ge1xuICBjb25zdCBkZXNpZ24gPSBnZXRCdG5EZXNpZ24ocHJvcHMpXG4gIHJldHVybiBkZXNpZ24gIT09IHZvaWQgMFxuICAgID8geyBbIGRlc2lnbiBdOiB0cnVlIH1cbiAgICA6IHt9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VCdG5Qcm9wcyA9IHtcbiAgLi4udXNlU2l6ZVByb3BzLFxuICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG5cbiAgdHlwZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYnV0dG9uJ1xuICB9LFxuXG4gIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIGljb246IFN0cmluZyxcbiAgaWNvblJpZ2h0OiBTdHJpbmcsXG5cbiAgLi4uYnRuRGVzaWduT3B0aW9ucy5yZWR1Y2UoXG4gICAgKGFjYywgdmFsKSA9PiAoYWNjWyB2YWwgXSA9IEJvb2xlYW4pICYmIGFjYyxcbiAgICB7fVxuICApLFxuXG4gIHNxdWFyZTogQm9vbGVhbixcbiAgcm91bmQ6IEJvb2xlYW4sXG4gIHJvdW5kZWQ6IEJvb2xlYW4sXG4gIGdsb3NzeTogQm9vbGVhbixcblxuICBzaXplOiBTdHJpbmcsXG4gIGZhYjogQm9vbGVhbixcbiAgZmFiTWluaTogQm9vbGVhbixcbiAgcGFkZGluZzogU3RyaW5nLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIHRleHRDb2xvcjogU3RyaW5nLFxuICBub0NhcHM6IEJvb2xlYW4sXG4gIG5vV3JhcDogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICByaXBwbGU6IHtcbiAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcblxuICBhbGlnbjoge1xuICAgIC4uLnVzZUFsaWduUHJvcHMuYWxpZ24sXG4gICAgZGVmYXVsdDogJ2NlbnRlcidcbiAgfSxcbiAgc3RhY2s6IEJvb2xlYW4sXG4gIHN0cmV0Y2g6IEJvb2xlYW4sXG4gIGxvYWRpbmc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IG51bGxcbiAgfSxcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuICBjb25zdCBhbGlnbkNsYXNzID0gdXNlQWxpZ24ocHJvcHMpXG4gIGNvbnN0IHsgaGFzUm91dGVyTGluaywgaGFzTGluaywgbGlua1RhZywgbGlua0F0dHJzLCBuYXZpZ2F0ZU9uQ2xpY2sgfSA9IHVzZVJvdXRlckxpbmsoe1xuICAgIGZhbGxiYWNrVGFnOiAnYnV0dG9uJ1xuICB9KVxuXG4gIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHByb3BzLmZhYiA9PT0gZmFsc2UgJiYgcHJvcHMuZmFiTWluaSA9PT0gZmFsc2VcbiAgICAgID8gc2l6ZVN0eWxlLnZhbHVlXG4gICAgICA6IHt9XG5cbiAgICByZXR1cm4gcHJvcHMucGFkZGluZyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9iaiwge1xuICAgICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nXG4gICAgICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgICAgICAubWFwKHYgPT4gKHYgaW4gYnRuUGFkZGluZyA/IGJ0blBhZGRpbmdbIHYgXSArICdweCcgOiB2KSlcbiAgICAgICAgICAuam9pbignICcpLFxuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcwJ1xuICAgICAgfSlcbiAgICAgIDogb2JqXG4gIH0pXG5cbiAgY29uc3QgaXNSb3VuZGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy5yb3VuZGVkID09PSB0cnVlIHx8IHByb3BzLmZhYiA9PT0gdHJ1ZSB8fCBwcm9wcy5mYWJNaW5pID09PSB0cnVlXG4gIClcblxuICBjb25zdCBpc0FjdGlvbmFibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMubG9hZGluZyAhPT0gdHJ1ZVxuICApXG5cbiAgY29uc3QgdGFiSW5kZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggfHwgMCA6IC0xXG4gICkpXG5cbiAgY29uc3QgZGVzaWduID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgdGFiaW5kZXg6IHRhYkluZGV4LnZhbHVlIH1cblxuICAgIGlmIChoYXNMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYywgbGlua0F0dHJzLnZhbHVlKVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtVHlwZXMuaW5jbHVkZXMocHJvcHMudHlwZSkgPT09IHRydWUpIHtcbiAgICAgIGFjYy50eXBlID0gcHJvcHMudHlwZVxuICAgIH1cblxuICAgIGlmIChsaW5rVGFnLnZhbHVlID09PSAnYScpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFjYy5ocmVmID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSAhPT0gdHJ1ZSAmJiBtZWRpYVR5cGVSRS50ZXN0KHByb3BzLnR5cGUpID09PSB0cnVlKSB7XG4gICAgICAgIGFjYy50eXBlID0gcHJvcHMudHlwZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2MuZGlzYWJsZWQgPSAnJ1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHByb3BzLnBlcmNlbnRhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IDEwMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5wZXJjZW50YWdlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGxldCBjb2xvcnNcblxuICAgIGlmIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAocHJvcHMuZmxhdCA9PT0gdHJ1ZSB8fCBwcm9wcy5vdXRsaW5lID09PSB0cnVlKSB7XG4gICAgICAgIGNvbG9ycyA9IGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB8fCBwcm9wcy5jb2xvciB9YFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbG9ycyA9IGBiZy0keyBwcm9wcy5jb2xvciB9IHRleHQtJHsgcHJvcHMudGV4dENvbG9yIHx8ICd3aGl0ZScgfWBcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMudGV4dENvbG9yKSB7XG4gICAgICBjb2xvcnMgPSBgdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGFwZSA9IHByb3BzLnJvdW5kID09PSB0cnVlXG4gICAgICA/ICdyb3VuZCdcbiAgICAgIDogYHJlY3RhbmdsZSR7IGlzUm91bmRlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLXJvdW5kZWQnIDogKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLXNxdWFyZScgOiAnJykgfWBcblxuICAgIHJldHVybiBgcS1idG4tLSR7IGRlc2lnbi52YWx1ZSB9IHEtYnRuLS0keyBzaGFwZSB9YFxuICAgICAgKyAoY29sb3JzICE9PSB2b2lkIDAgPyAnICcgKyBjb2xvcnMgOiAnJylcbiAgICAgICsgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLWFjdGlvbmFibGUgcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUnIDogKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKSlcbiAgICAgICsgKHByb3BzLmZhYiA9PT0gdHJ1ZSA/ICcgcS1idG4tLWZhYicgOiAocHJvcHMuZmFiTWluaSA9PT0gdHJ1ZSA/ICcgcS1idG4tLWZhYi1taW5pJyA6ICcnKSlcbiAgICAgICsgKHByb3BzLm5vQ2FwcyA9PT0gdHJ1ZSA/ICcgcS1idG4tLW5vLXVwcGVyY2FzZScgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWJ0bi0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBuby1ib3JkZXItcmFkaXVzIHNlbGYtc3RyZXRjaCcgOiAnJylcbiAgICAgICsgKHByb3BzLmdsb3NzeSA9PT0gdHJ1ZSA/ICcgZ2xvc3N5JyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID8gJyBxLWJ0bi0tc3F1YXJlJyA6ICcnKVxuICB9KVxuXG4gIGNvbnN0IGlubmVyQ2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxpZ25DbGFzcy52YWx1ZSArIChwcm9wcy5zdGFjayA9PT0gdHJ1ZSA/ICcgY29sdW1uJyA6ICcgcm93JylcbiAgICArIChwcm9wcy5ub1dyYXAgPT09IHRydWUgPyAnIG5vLXdyYXAgdGV4dC1uby13cmFwJyA6ICcnKVxuICAgICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtYnRuX19jb250ZW50LS1oaWRkZW4nIDogJycpXG4gIClcblxuICByZXR1cm4ge1xuICAgIGNsYXNzZXMsXG4gICAgc3R5bGUsXG4gICAgaW5uZXJDbGFzc2VzLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgaGFzTGluayxcbiAgICBsaW5rVGFnLFxuICAgIG5hdmlnYXRlT25DbGljayxcbiAgICBpc0FjdGlvbmFibGVcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgVHJhbnNpdGlvbiwgb25CZWZvcmVVbm1vdW50LCB3aXRoRGlyZWN0aXZlcywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgdXNlQnRuLCB7IHVzZUJ0blByb3BzIH0gZnJvbSAnLi91c2UtYnRuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHN0b3AsIHByZXZlbnQsIHN0b3BBbmRQcmV2ZW50LCBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuY29uc3QgeyBwYXNzaXZlQ2FwdHVyZSB9ID0gbGlzdGVuT3B0c1xuXG5sZXRcbiAgdG91Y2hUYXJnZXQgPSBudWxsLFxuICBrZXlib2FyZFRhcmdldCA9IG51bGwsXG4gIG1vdXNlVGFyZ2V0ID0gbnVsbFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VCdG5Qcm9wcyxcblxuICAgIHBlcmNlbnRhZ2U6IE51bWJlcixcbiAgICBkYXJrUGVyY2VudGFnZTogQm9vbGVhbixcblxuICAgIG9uVG91Y2hzdGFydDogWyBGdW5jdGlvbiwgQXJyYXkgXVxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycsICdrZXlkb3duJywgJ21vdXNlZG93bicsICdrZXl1cCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLCBzdHlsZSwgaW5uZXJDbGFzc2VzLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIGhhc0xpbmssIGxpbmtUYWcsIG5hdmlnYXRlT25DbGljayxcbiAgICAgIGlzQWN0aW9uYWJsZVxuICAgIH0gPSB1c2VCdG4ocHJvcHMpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IGxvY2FsVG91Y2hUYXJnZXRFbCA9IG51bGwsIGF2b2lkTW91c2VSaXBwbGUsIG1vdXNlVGltZXIgPSBudWxsXG5cbiAgICBjb25zdCBoYXNMYWJlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIHByb3BzLmxhYmVsICE9PSBudWxsICYmIHByb3BzLmxhYmVsICE9PSAnJ1xuICAgIClcblxuICAgIGNvbnN0IHJpcHBsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMucmlwcGxlID09PSBmYWxzZVxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDoge1xuICAgICAgICAgICAga2V5Q29kZXM6IGhhc0xpbmsudmFsdWUgPT09IHRydWUgPyBbIDEzLCAzMiBdIDogWyAxMyBdLFxuICAgICAgICAgICAgLi4uKHByb3BzLnJpcHBsZSA9PT0gdHJ1ZSA/IHt9IDogcHJvcHMucmlwcGxlKVxuICAgICAgICAgIH1cbiAgICApKVxuXG4gICAgY29uc3QgcmlwcGxlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoeyBjZW50ZXI6IHByb3BzLnJvdW5kIH0pKVxuXG4gICAgY29uc3QgcGVyY2VudGFnZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwcm9wcy5wZXJjZW50YWdlKSlcbiAgICAgIHJldHVybiB2YWwgPiAwXG4gICAgICAgID8geyB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuNnMnLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IHZhbCAtIDEwMCB9JSlgIH1cbiAgICAgICAgOiB7fVxuICAgIH0pXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvblRvdWNoc3RhcnQ6IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbkNsaWNrOiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25LZXlkb3duOiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25LZXl1cDogb25Mb2FkaW5nRXZ0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgICAgb25DbGljayxcbiAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgb25Nb3VzZWRvd25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm94eS4kcS5wbGF0Zm9ybS5oYXMudG91Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBzdWZmaXggPSBwcm9wcy5vblRvdWNoc3RhcnQgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiAnUGFzc2l2ZSdcblxuICAgICAgICAgIGFjY1sgYG9uVG91Y2hzdGFydCR7IHN1ZmZpeCB9YCBdID0gb25Ub3VjaHN0YXJ0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIG5lZWRlZDsgZXNwZWNpYWxseSBmb3IgZGlzYWJsZWQgPGE+IHRhZ3NcbiAgICAgICAgb25DbGljazogc3RvcEFuZFByZXZlbnRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgbm9kZVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIGNsYXNzOiAncS1idG4gcS1idG4taXRlbSBub24tc2VsZWN0YWJsZSBuby1vdXRsaW5lICcgKyBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGlmIChlICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIC8vIGZvY3VzIGJ1dHRvbiBpZiBpdCBjYW1lIGZyb20gRU5URVIgb24gZm9ybVxuICAgICAgICAvLyBwcmV2ZW50IHRoZSBuZXcgc3VibWl0IChhbHJlYWR5IGRvbmUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wcy50eXBlID09PSAnc3VibWl0J1xuICAgICAgICAgICYmIGVsICE9PSBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgJiYgcm9vdFJlZi52YWx1ZS5jb250YWlucyhlbCkgPT09IGZhbHNlXG4gICAgICAgICAgLy8gcmVxdWlyZWQgZm9yIGlPUyBhbmQgZGVza3RvcCBTYWZhcmlcbiAgICAgICAgICAmJiBlbC5jb250YWlucyhyb290UmVmLnZhbHVlKSA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5mb2N1cygpXG5cbiAgICAgICAgICBjb25zdCBvbkNsaWNrQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9wQW5kUHJldmVudCwgdHJ1ZSlcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BBbmRQcmV2ZW50LCB0cnVlKVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuYXZpZ2F0ZU9uQ2xpY2soZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkgPT09IHRydWUgJiYga2V5Ym9hcmRUYXJnZXQgIT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAga2V5Ym9hcmRUYXJnZXQgIT09IG51bGwgJiYgY2xlYW51cCgpXG5cbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGZvY3VzIGV4dGVybmFsIGJ1dHRvbiBpZiB0aGUgZm9jdXMgaGVscGVyIHdhcyBmb2N1c2VkIGJlZm9yZVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgICAga2V5Ym9hcmRUYXJnZXQgPSByb290UmVmLnZhbHVlXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QuYWRkKCdxLWJ0bi0tYWN0aXZlJylcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uUHJlc3NFbmQsIHRydWUpXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cblxuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVG91Y2hzdGFydCAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBlbWl0KCd0b3VjaHN0YXJ0JywgZSlcblxuICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkgeyByZXR1cm4gfVxuXG4gICAgICBpZiAodG91Y2hUYXJnZXQgIT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgdG91Y2hUYXJnZXQgIT09IG51bGwgJiYgY2xlYW51cCgpXG4gICAgICAgIHRvdWNoVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZVxuXG4gICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbCA9IGUudGFyZ2V0XG4gICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBsb2NhbFRvdWNoVGFyZ2V0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgZHVwbGljYXRlZCBtb3VzZWRvd24gZXZlbnRcbiAgICAgIC8vIHRyaWdnZXJpbmcgYW5vdGhlciBlYXJseSByaXBwbGVcbiAgICAgIGF2b2lkTW91c2VSaXBwbGUgPSB0cnVlXG4gICAgICBtb3VzZVRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dChtb3VzZVRpbWVyKVxuICAgICAgbW91c2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtb3VzZVRpbWVyID0gbnVsbFxuICAgICAgICBhdm9pZE1vdXNlUmlwcGxlID0gZmFsc2VcbiAgICAgIH0sIDIwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZG93biAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBlLnFTa2lwUmlwcGxlID0gYXZvaWRNb3VzZVJpcHBsZSA9PT0gdHJ1ZVxuICAgICAgZW1pdCgnbW91c2Vkb3duJywgZSlcblxuICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBtb3VzZVRhcmdldCAhPT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBtb3VzZVRhcmdldCAhPT0gbnVsbCAmJiBjbGVhbnVwKClcbiAgICAgICAgbW91c2VUYXJnZXQgPSByb290UmVmLnZhbHVlXG4gICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LmFkZCgncS1idG4tLWFjdGl2ZScpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblByZXNzRW5kIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIC8vIG5lZWRlZCBmb3IgSUUgKGJlY2F1c2UgaXQgZW1pdHMgYmx1ciB3aGVuIGZvY3VzaW5nIGJ1dHRvbiBmcm9tIGZvY3VzIGhlbHBlcilcbiAgICAgIGlmIChlICE9PSB2b2lkIDAgJiYgZS50eXBlID09PSAnYmx1cicgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAgaWYgKGtleWJvYXJkVGFyZ2V0ID09PSByb290UmVmLnZhbHVlICYmIGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGZvciBjbGljayB0cmlnZ2VyXG4gICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgICBldnQucUtleUV2ZW50ID0gdHJ1ZVxuICAgICAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGV2dClcbiAgICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcbiAgICAgICAgICByb290UmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQoZXZ0KVxuXG4gICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgICBlLnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoZGVzdHJveWluZykge1xuICAgICAgY29uc3QgYmx1clRhcmdldCA9IGJsdXJUYXJnZXRSZWYudmFsdWVcblxuICAgICAgaWYgKFxuICAgICAgICBkZXN0cm95aW5nICE9PSB0cnVlXG4gICAgICAgICYmICh0b3VjaFRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSB8fCBtb3VzZVRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSlcbiAgICAgICAgJiYgYmx1clRhcmdldCAhPT0gbnVsbFxuICAgICAgICAmJiBibHVyVGFyZ2V0ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApIHtcbiAgICAgICAgYmx1clRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXG4gICAgICAgIGJsdXJUYXJnZXQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAodG91Y2hUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgaWYgKGxvY2FsVG91Y2hUYXJnZXRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG4gICAgICAgIHRvdWNoVGFyZ2V0ID0gbG9jYWxUb3VjaFRhcmdldEVsID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAobW91c2VUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBtb3VzZVRhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGtleWJvYXJkVGFyZ2V0ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25QcmVzc0VuZCwgdHJ1ZSlcbiAgICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAga2V5Ym9hcmRUYXJnZXQgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJvb3RSZWYudmFsdWUgIT09IG51bGwgJiYgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJ0bi0tYWN0aXZlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWRpbmdFdnQgKGV2dCkge1xuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgZXZ0LnFTa2lwUmlwcGxlID0gdHJ1ZVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhbnVwKHRydWUpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHsgY2xpY2s6IG9uQ2xpY2sgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaW5uZXIgPSBbXVxuXG4gICAgICBwcm9wcy5pY29uICE9PSB2b2lkIDAgJiYgaW5uZXIucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIG5hbWU6IHByb3BzLmljb24sXG4gICAgICAgICAgbGVmdDogcHJvcHMuc3RhY2sgPT09IGZhbHNlICYmIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgIHJvbGU6ICdpbWcnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBoYXNMYWJlbC52YWx1ZSA9PT0gdHJ1ZSAmJiBpbm5lci5wdXNoKFxuICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ2Jsb2NrJyB9LCBbIHByb3BzLmxhYmVsIF0pXG4gICAgICApXG5cbiAgICAgIGlubmVyID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBpbm5lcilcblxuICAgICAgaWYgKHByb3BzLmljb25SaWdodCAhPT0gdm9pZCAwICYmIHByb3BzLnJvdW5kID09PSBmYWxzZSkge1xuICAgICAgICBpbm5lci5wdXNoKFxuICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLmljb25SaWdodCxcbiAgICAgICAgICAgIHJpZ2h0OiBwcm9wcy5zdGFjayA9PT0gZmFsc2UgJiYgaGFzTGFiZWwudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicsXG4gICAgICAgICAgcmVmOiBibHVyVGFyZ2V0UmVmXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHByb3BzLnBlcmNlbnRhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtYnRuX19wcm9ncmVzcyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbicgKyAocHJvcHMuZGFya1BlcmNlbnRhZ2UgPT09IHRydWUgPyAnIHEtYnRuX19wcm9ncmVzcy0tZGFyaycgOiAnJylcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtYnRuX19wcm9ncmVzcy1pbmRpY2F0b3IgZml0IGJsb2NrJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHBlcmNlbnRhZ2VTdHlsZS52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bl9fY29udGVudCB0ZXh0LWNlbnRlciBjb2wgaXRlbXMtY2VudGVyIHEtYW5jaG9yLS1za2lwICcgKyBpbm5lckNsYXNzZXMudmFsdWVcbiAgICAgICAgfSwgaW5uZXIpXG4gICAgICApXG5cbiAgICAgIHByb3BzLmxvYWRpbmcgIT09IG51bGwgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZSdcbiAgICAgICAgfSwgKCkgPT4gKFxuICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICAgICAgICAgIH0sIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCA/IHNsb3RzLmxvYWRpbmcoKSA6IFsgaChRU3Bpbm5lcikgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICkpXG4gICAgICApXG5cbiAgICAgIHJldHVybiB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaChcbiAgICAgICAgICBsaW5rVGFnLnZhbHVlLFxuICAgICAgICAgIG5vZGVQcm9wcy52YWx1ZSxcbiAgICAgICAgICBjaGlsZFxuICAgICAgICApLFxuICAgICAgICBbIFtcbiAgICAgICAgICBSaXBwbGUsXG4gICAgICAgICAgcmlwcGxlLnZhbHVlLFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICByaXBwbGVQcm9wcy52YWx1ZVxuICAgICAgICBdIF1cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiY3NzIl0sIm1hcHBpbmdzIjoiOzs7QUFHTyxNQUFNLGtCQUFrQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxJQUNKLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUN4QixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBQ0QsT0FBTztB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
