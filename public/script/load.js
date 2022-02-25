window.performance.mark('mark_fully_loaded');
console.log(window.performance.measure('measure_load_from_start', 'navigationStart', 'mark_fully_loaded'))