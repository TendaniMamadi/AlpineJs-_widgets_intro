document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});

document.addEventListener('alpine:init', () => {
    Alpine.data('reset', Reset);
});