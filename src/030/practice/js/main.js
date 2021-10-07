const addTag = function(evt) {
    console.log(evt);
    let myForm = evt.target;
    // Capture the text from the input
    let theText = myForm.tag.value; // .tag is the name of the <input>
    // validate the input
    let errorParagraph = document.querySelector('p.feature.error');
    if(theText.trim().length > 0) {
        let tagHolder = document.querySelector('p.feature.tags');
        tagHolder.innerText += ' #' + theText.trim();
        errorParagraph.classList.add('hidden');
    } else {
        errorParagraph.classList.remove('hidden');
    }
    // clear the input text
    myForm.tag.value = '';
    
    evt.preventDefault(); // Stop submitting the form
}

document
    .querySelector('form')
    .addEventListener('submit', addTag);
