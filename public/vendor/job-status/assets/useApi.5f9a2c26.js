import { r as ref, o as onMounted, b as onUnmounted } from "./index.8668c4ab.js";
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
export { useApi as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQXBpLjVmOWEyYzI2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL2NvbXBvc3RhYmxlcy91c2VBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvbk1vdW50ZWQsIG9uVW5tb3VudGVkLCByZWZ9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBUaW1lb3V0ID0gTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcGkoY2FsbEFwaTogKGFmdGVyOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gIGNvbnN0IGxvYWRpbmcgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXJBcGlDYWxsKCkge1xuICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgZnVuY3Rpb24gYWZ0ZXIoKTogdm9pZCB7XG4gICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIGNhbGxBcGkoYWZ0ZXIpO1xuICB9XG5cbiAgbGV0IGludGVydmFsSWQ6IFRpbWVvdXQ7XG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdHJpZ2dlckFwaUNhbGwoKSwgMTAwMCk7XG4gICAgdHJpZ2dlckFwaUNhbGwoKTtcbiAgfSk7XG5cbiAgb25Vbm1vdW50ZWQoKCkgPT4ge1xuICAgIGlmKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nLFxuICAgIHRyaWdnZXJBcGlDYWxsXG4gIH1cblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHTyxTQUFTLE9BQU8sU0FBc0M7QUFDckQsUUFBQSxVQUFVLElBQWEsS0FBSztBQUVsQyxXQUFTLGlCQUFpQjtBQUN4QixZQUFRLFFBQVE7QUFDaEIsYUFBUyxRQUFjO0FBQ3JCLGNBQVEsUUFBUTtBQUFBLElBQ2xCO0FBQ0EsWUFBUSxLQUFLO0FBQUEsRUFDZjtBQUVJLE1BQUE7QUFFSixZQUFVLE1BQU07QUFDZCxpQkFBYSxZQUFZLE1BQU0sZUFBZSxHQUFHLEdBQUk7QUFDdEM7RUFBQSxDQUNoQjtBQUVELGNBQVksTUFBTTtBQUNoQixRQUFHLFlBQVk7QUFDYixvQkFBYyxVQUFVO0FBQUEsSUFDMUI7QUFBQSxFQUFBLENBQ0Q7QUFFTSxTQUFBO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxFQUFBO0FBR0o7OyJ9
