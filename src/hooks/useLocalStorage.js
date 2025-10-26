import { ref, watch } from 'vue';

export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key);
  const value = ref(stored ? JSON.parse(stored) : initialValue);

  watch(value, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
  }, { deep: true });

  return value;
}
