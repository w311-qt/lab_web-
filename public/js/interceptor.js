window.addEventListener('load', function () {
    const serverTimingElement = document.getElementById('server_timing');
    const serverTiming =  performance.getEntriesByType('navigation')[0].serverTiming;
    serverTiming.forEach((entry) => {
        const name = entry.name;
        serverTimingElement.textContent = name + 'ms';
    });

    // Дополнительный код для вставки в durationElement (если необходимо)
    const durationElement = document.querySelector('.time_loaded');

    if (durationElement) {    let domainLookupEnd =
        performance.getEntriesByType('navigation')[0].domainLookupEnd;
        let loadEventStart =
            performance.getEntriesByType('navigation')[0].loadEventStart;
        durationElement.textContent =
            (loadEventStart - domainLookupEnd).toFixed(1) + 'ms';  }
});
