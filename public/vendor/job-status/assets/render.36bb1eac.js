import { a1 as markRaw, M as defineComponent, h, G as withDirectives } from "./index.5b1eaffc.js";
const createComponent = (raw) => markRaw(defineComponent(raw));
const createDirective = (raw) => markRaw(raw);
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hDir(tag, data, children, key, condition, getDirsFn) {
  data.key = key + condition;
  const vnode = h(tag, data, children);
  return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
export { hUniqueSlot as a, createDirective as b, createComponent as c, hDir as d, hMergeSlot as e, hSlot as h };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLjM2YmIxZWFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMiLCIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBtYXJrUmF3IH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gcmF3ID0+IG1hcmtSYXcoZGVmaW5lQ29tcG9uZW50KHJhdykpXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0aXZlID0gcmF3ID0+IG1hcmtSYXcocmF3KVxuIiwiaW1wb3J0IHsgaCwgd2l0aERpcmVjdGl2ZXMgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBoU2xvdCAoc2xvdCwgb3RoZXJ3aXNlKSB7XG4gIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICA/IHNsb3QoKSB8fCBvdGhlcndpc2VcbiAgICA6IG90aGVyd2lzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaFVuaXF1ZVNsb3QgKHNsb3QsIG90aGVyd2lzZSkge1xuICBpZiAoc2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgdm5vZGUgPSBzbG90KClcbiAgICBpZiAodm5vZGUgIT09IHZvaWQgMCAmJiB2bm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZub2RlLnNsaWNlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3RoZXJ3aXNlXG59XG5cbi8qKlxuICogU291cmNlIGRlZmluaXRlbHkgZXhpc3RzLFxuICogc28gaXQncyBtZXJnZWQgd2l0aCB0aGUgcG9zc2libGUgc2xvdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaE1lcmdlU2xvdCAoc2xvdCwgc291cmNlKSB7XG4gIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICA/IHNvdXJjZS5jb25jYXQoc2xvdCgpKVxuICAgIDogc291cmNlXG59XG5cbi8qKlxuICogTWVyZ2Ugd2l0aCBwb3NzaWJsZSBzbG90LFxuICogZXZlbiBpZiBzb3VyY2UgbWlnaHQgbm90IGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoTWVyZ2VTbG90U2FmZWx5IChzbG90LCBzb3VyY2UpIHtcbiAgaWYgKHNsb3QgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzb3VyY2VcbiAgfVxuXG4gIHJldHVybiBzb3VyY2UgIT09IHZvaWQgMFxuICAgID8gc291cmNlLmNvbmNhdChzbG90KCkpXG4gICAgOiBzbG90KClcbn1cblxuLypcbiAqIChTdHJpbmcpICBrZXkgICAgICAgLSB1bmlxdWUgdm5vZGUga2V5XG4gKiAoQm9vbGVhbikgY29uZGl0aW9uIC0gc2hvdWxkIGNoYW5nZSBPTkxZIHdoZW4gYWRkaW5nL3JlbW92aW5nIGRpcmVjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaERpciAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIGtleSxcbiAgY29uZGl0aW9uLFxuICBnZXREaXJzRm5cbikge1xuICBkYXRhLmtleSA9IGtleSArIGNvbmRpdGlvblxuXG4gIGNvbnN0IHZub2RlID0gaCh0YWcsIGRhdGEsIGNoaWxkcmVuKVxuXG4gIHJldHVybiBjb25kaXRpb24gPT09IHRydWVcbiAgICA/IHdpdGhEaXJlY3RpdmVzKHZub2RlLCBnZXREaXJzRm4oKSlcbiAgICA6IHZub2RlXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVZLE1BQUMsa0JBQWtCLFNBQU8sUUFBUSxnQkFBZ0IsR0FBRyxDQUFDO0FBQ3RELE1BQUMsa0JBQWtCLFNBQU8sUUFBUSxHQUFHO0FDRDFDLFNBQVMsTUFBTyxNQUFNLFdBQVc7QUFDdEMsU0FBTyxTQUFTLFNBQ1osS0FBTSxLQUFJLFlBQ1Y7QUFDTjtBQUVPLFNBQVMsWUFBYSxNQUFNLFdBQVc7QUFDNUMsTUFBSSxTQUFTLFFBQVE7QUFDbkIsVUFBTSxRQUFRLEtBQU07QUFDcEIsUUFBSSxVQUFVLFVBQVUsVUFBVSxNQUFNO0FBQ3RDLGFBQU8sTUFBTSxNQUFPO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBRUQsU0FBTztBQUNUO0FBTU8sU0FBUyxXQUFZLE1BQU0sUUFBUTtBQUN4QyxTQUFPLFNBQVMsU0FDWixPQUFPLE9BQU8sTUFBTSxJQUNwQjtBQUNOO0FBb0JPLFNBQVMsS0FDZCxLQUNBLE1BQ0EsVUFDQSxLQUNBLFdBQ0EsV0FDQTtBQUNBLE9BQUssTUFBTSxNQUFNO0FBRWpCLFFBQU0sUUFBUSxFQUFFLEtBQUssTUFBTSxRQUFRO0FBRW5DLFNBQU8sY0FBYyxPQUNqQixlQUFlLE9BQU8sV0FBVyxJQUNqQztBQUNOOzsifQ==
