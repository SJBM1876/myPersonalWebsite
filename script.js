// Select all the figure elements that contain both the image and the link
const figures = document.querySelectorAll('figure');

figures.forEach(figure => {
    // Find the image and the link inside each figure
    const img = figure.querySelector('img');
    const link = figure.querySelector('a');
    
    // Add a click event to the image
    img.addEventListener('click', () => {
        // Open the link in a differenttab (if you want to open in a new tab, use '_self' )
        window.open(link.href, '_blank');
    });
});


/*
document.querySelectorAll('figure'): This selects all <figure> elements in your document.
figure.querySelector('img'): This finds the <img> element inside each figure.
figure.querySelector('a'): This finds the <a> (link) element inside each figure.
img.addEventListener('click', () => { ... }): Adds a click event listener to each image. When the image is clicked, it triggers the action of opening the link.
window.open(link.href, '_blank'): Opens the link in a different tab.
*/