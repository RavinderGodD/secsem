document.getElementById("downloadButton").addEventListener("click", function() {
    const files = [
        { name: "ES all-2-sem-environmental-science-75831-dec-2020", url: "EnvironmentalScience/all-2-sem-environmental-science-75831-dec-2020.pdf" },
        { name: "ES bca-2-sem-environmental-science-10056-dec-2022", url: "EnvironmentalScience/bca-2-sem-environmental-science-10056-dec-2022.pdf" },
        { name: "ES bca-2-sem-environmental-studies-77421-aug-2021", url: "EnvironmentalScience/bca-2-sem-environmental-studies-77421-aug-2021.pdf" },
        { name: "ES bca-2-sem-environmental-studies-77421-dec-2020", url: "EnvironmentalScience/bca-2-sem-environmental-studies-77421-dec-2020.pdf" },
        { name: "ES bca-2-sem-environmental-studies-77421-dec-2022", url: "EnvironmentalScience/bca-2-sem-environmental-studies-77421-dec-2022.pdf" },
        { name: "ES bca-bsc-it-2-sem-environmental-science-10056-may-2019", url: "EnvironmentalScience/bca-bsc-it-2-sem-environmental-science-10056-may-2019.pdf" },
        { name: "ES bca-bsc-it-2-sem-environmental-science-10056-nov-2019", url: "EnvironmentalScience/bca-bsc-it-2-sem-environmental-science-10056-nov-2019.pdf" }
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