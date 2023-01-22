import { u as useDarkProps, a as useDark } from "./QItem.af26c3e2.js";
import { c as createComponent } from "./render.30a557a4.js";
import { c as computed, h, g as getCurrentInstance, r as ref, o as onMounted, b as onUnmounted } from "./index.863186b2.js";
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = computed(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["Queued"] = "queued";
  Status2["Started"] = "started";
  Status2["Cancelled"] = "cancelled";
  Status2["Failed"] = "failed";
  Status2["Succeeded"] = "succeeded";
  return Status2;
})(Status || {});
function useApi(callApi) {
  const loading = ref(false);
  function triggerApiCall() {
    loading.value = true;
    function after() {
      loading.value = false;
    }
    callApi(after);
  }
  let intervalId;
  onMounted(() => {
    intervalId = setInterval(() => triggerApiCall(), 1e3);
    triggerApiCall();
  });
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  return {
    loading,
    triggerApiCall
  };
}
export { QSeparator as Q, Status as S, useApi as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQXBpLjYxYmM2M2MzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcyIsIi4uLy4uLy4uL2Rhc2hib2FyZC9zcmMvdHlwZXMvYXBpLnRzIiwiLi4vLi4vLi4vZGFzaGJvYXJkL3NyYy9jb21wb3N0YWJsZXMvdXNlQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBpbnNldE1hcCA9IHtcbiAgdHJ1ZTogJ2luc2V0JyxcbiAgaXRlbTogJ2l0ZW0taW5zZXQnLFxuICAnaXRlbS10aHVtYm5haWwnOiAnaXRlbS10aHVtYm5haWwtaW5zZXQnXG59XG5cbmV4cG9ydCBjb25zdCBtYXJnaW5zID0ge1xuICB4czogMixcbiAgc206IDQsXG4gIG1kOiA4LFxuICBsZzogMTYsXG4gIHhsOiAyNFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNlcGFyYXRvcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzcGFjZWQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgaW5zZXQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBzaXplOiBTdHJpbmdcbiAgfSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gJ3ZlcnRpY2FsJ1xuICAgICAgICA6ICdob3Jpem9udGFsJ1xuICAgICkpXG5cbiAgICBjb25zdCBvcmllbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGAgcS1zZXBhcmF0b3ItLSR7IG9yaWVudGF0aW9uLnZhbHVlIH1gKVxuXG4gICAgY29uc3QgaW5zZXRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmluc2V0ICE9PSBmYWxzZVxuICAgICAgICA/IGAkeyBvcmllbnRDbGFzcy52YWx1ZSB9LSR7IGluc2V0TWFwWyBwcm9wcy5pbnNldCBdIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zZXBhcmF0b3IkeyBvcmllbnRDbGFzcy52YWx1ZSB9JHsgaW5zZXRDbGFzcy52YWx1ZSB9YFxuICAgICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZXBhcmF0b3ItLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBpZiAocHJvcHMuc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjY1sgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IHByb3BzLnNpemVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNwYWNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHByb3BzLnNwYWNlZCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYCR7IG1hcmdpbnMubWQgfXB4YFxuICAgICAgICAgIDogcHJvcHMuc3BhY2VkIGluIG1hcmdpbnMgPyBgJHsgbWFyZ2luc1sgcHJvcHMuc3BhY2VkIF0gfXB4YCA6IHByb3BzLnNwYWNlZFxuXG4gICAgICAgIGNvbnN0IGRpciA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBbICdMZWZ0JywgJ1JpZ2h0JyBdXG4gICAgICAgICAgOiBbICdUb3AnLCAnQm90dG9tJyBdXG5cbiAgICAgICAgYWNjWyBgbWFyZ2luJHsgZGlyWyAwIF0gfWAgXSA9IGFjY1sgYG1hcmdpbiR7IGRpclsgMSBdIH1gIF0gPSBzaXplXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2hyJywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlXG4gICAgfSlcbiAgfVxufSlcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0cyB7XG4gIGpvYnM6IFRyYWNrZWRKb2JbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VkSm9iIHtcbiAgY2xhc3M6IHN0cmluZztcbiAgYWxpYXM6IHN0cmluZztcbiAgcnVuczogSm9iUnVuW107XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iUnVuIHtcbiAgYWxpYXM6IHN0cmluZztcbiAgY2xhc3M6IHN0cmluZztcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgdXVpZDogc3RyaW5nO1xuICBwYXJlbnQ6IEpvYlJ1bnxudWxsLFxuICBjcmVhdGVkX2F0OiBEYXRlLFxuICB0YWdzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkUmVzcG9uc2Uge1xuICB0ZXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFN0YXR1cyB7XG4gIFF1ZXVlZCA9ICdxdWV1ZWQnLFxuICBTdGFydGVkID0gJ3N0YXJ0ZWQnLFxuICBDYW5jZWxsZWQgPSAnY2FuY2VsbGVkJyxcbiAgRmFpbGVkID0gJ2ZhaWxlZCcsXG4gIFN1Y2NlZWRlZCA9ICdzdWNjZWVkZWQnLFxufVxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIEZ1bGxUcmFja2VkSm9iIGV4dGVuZHMgVHJhY2tlZEpvYntcbi8vXG4vLyB9XG4iLCJpbXBvcnQge29uTW91bnRlZCwgb25Vbm1vdW50ZWQsIHJlZn0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFRpbWVvdXQgPSBOb2RlSlMuVGltZW91dDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwaShjYWxsQXBpOiAoYWZ0ZXI6ICgpID0+IHZvaWQpID0+IHZvaWQpIHtcbiAgY29uc3QgbG9hZGluZyA9IHJlZjxib29sZWFuPihmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckFwaUNhbGwoKSB7XG4gICAgbG9hZGluZy52YWx1ZSA9IHRydWVcbiAgICBmdW5jdGlvbiBhZnRlcigpOiB2b2lkIHtcbiAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgY2FsbEFwaShhZnRlcik7XG4gIH1cblxuICBsZXQgaW50ZXJ2YWxJZDogVGltZW91dDtcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0cmlnZ2VyQXBpQ2FsbCgpLCAxMDAwKTtcbiAgICB0cmlnZ2VyQXBpQ2FsbCgpO1xuICB9KTtcblxuICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgaWYoaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGxv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
