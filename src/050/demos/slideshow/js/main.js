// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
// Variable to track which image we are showing
let imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
for(let count = 0; count < images.length; count++) {
    imageTracker.innerHTML += 
        `<span class='control' data-idx='${count}'>&bull;</span>`;
}

// highlight the first bullet as 'active'
imageTracker.querySelectorAll('span')[0].classList.add('active');
// imageTracker.querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        } else {
		    // selector bullet clicked
            currentImg = parseInt(target.dataset.idx);
        }
        // Ensure the index is not outside the boundaries of the array
        if(currentImg >= images.length) {
            currentImg = 0; // go back to the start
        } else if(currentImg < 0) {
            currentImg = images.length - 1; // cycle to the end index
        }
		
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        imageTracker.querySelector('span.active').classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
    }
}); 

document.addEventListener('keydown', function (evt) {
    let click;

    switch (evt.key) {
        case 'ArrowLeft':
            // left arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.prev').dispatchEvent(click);
            break;
        case 'ArrowRight':
            // right arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.next').dispatchEvent(click);
            break;
    }
});