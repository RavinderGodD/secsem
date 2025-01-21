document.getElementById("downloadButton").addEventListener("click", function() {
    const files = [
        { name: "FS bca-2-sem-fundamentals-of-statistics-77415-dec-2022", url: "fundamentalsofstatistics/bca-2-sem-fundamentals-of-statistics-77415-dec-2022.pdf" },
        { name: "FS bca-2-sem-fundamentals-of-statistics-77415-dec-2020", url: "fundamentalsofstatistics/bca-2-sem-fundamentals-of-statistics-77415-dec-2020.pdf" }
        // { name: "file3.txt", url: "path/to/file3.txt" }
    ];

    files.forEach(file => {
        let link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;  // Specify the file name to be downloaded
        document.body.appendChild(link);  // Add to DOM (required in some browsers)
        link.click();  // Trigger download
        document.body.removeChild(link);  // Clean up
    });
});



// Prevent pinch-to-zoom on mobile, but allow scrolling
// Prevent pinch-to-zoom on mobile, but allow scrolling
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();  // Prevent pinch-to-zoom (multi-finger touch)
    }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    if (e.scale && e.scale !== 1) {  // Pinch-to-zoom detection
        e.preventDefault();  // Prevent zooming but allow scrolling
    }
}, { passive: false });

// Optionally, disable gesture zooming for double-tap
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();  // Disable gesture zooming
});