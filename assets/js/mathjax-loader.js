(function () {
    // 1. Configure MathJax settings first
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true
        },
        svg: {
            fontCache: 'global'
        }
    };

    // 2. Dynamically create and inject the script tag
    var script = document.createElement('script');
    script.src = 'https://unpkg.com';
    script.async = true;
    script.id = 'MathJax-script';
    document.head.appendChild(script);
})();
