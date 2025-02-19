
// Polyfill for global in browser environment
if (typeof global === 'undefined') {
  (window as any).global = window;
}

export {};
