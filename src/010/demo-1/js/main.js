/* Place code from walk-through here */
// 1. We need an event listener function
const handleFeatureClick = function(evtParam) {
    console.log(evtParam);
    var desc = document.querySelector('.feature.description');
    desc.classList.remove('hidden');
}

// 2. Identify the target/element we want to match with the event
let featureImage = document.querySelector('img.feature');

// 3. Add the event listener
featureImage.addEventListener('click', handleFeatureClick);

// A separate event listener on the paragraph to hide it when clicked.
document.querySelector('.feature.description')
        .addEventListener('click', function(evt) {
            console.log(evt);
            evt.target.classList.add('hidden');
        })
