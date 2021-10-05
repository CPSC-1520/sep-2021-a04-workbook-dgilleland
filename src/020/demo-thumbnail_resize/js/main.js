// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

/*
- Handler/Listener for the <ul> to capture the clicks on any of the <li> elements
  - Identify the size to use
  - Apply the class to the `div.thumbnails` element
- Same handler for all sizes
*/

const resize = function(evt) {
    console.log(evt.target.classList);
    let classList = evt.target.classList; // use a variable to refer to the class list of the target
    let galleryDiv = document.querySelector('div.thumbnails');
    if(classList.contains('thumbnails-sm')) {
        // apply the sm style
        galleryDiv.classList.add('sm');
        // remove the old sizes
        galleryDiv.classList.remove('md');
        galleryDiv.classList.remove('lg');
    } else if(classList.contains('thumbnails-md')) {
        // apply the md style
    } else if(classList.contains('thumbnails-lg')) {
        // apply the lg style
    }
}

document
    .querySelector('ul')
    .addEventListener('click', resize);
