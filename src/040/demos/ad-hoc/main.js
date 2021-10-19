const report = async function(eventName, element) {
    console.log(eventName, element);
}

const demo = function(evt) {
    // display some dots every x seconds
    report(evt.type, evt.target); // evt.target is the element that the event happened on
    let maxValue = Number(evt.target.elements.max.value);
    let delayTime = Number(evt.target.elements.delay.value);

    // Let's use template literal syntax
    printDots.innerText = `Max = ${maxValue} \n`;
    printDots.innerText += `Delay = ${delayTime} milliseconds\n\n`;

    // Let's loop....
    for(let count = 0; count < maxValue; count++) {
        printDots.innerText += '. ';
        // TODO: Kill some time by using the delayTime ....
        // Broken promises.... :(
        // await new Promise(resolve => setTimeout(resolve, delayTime));
    }
    evt.preventDefault();
}

document.querySelector('form').addEventListener('submit', demo);

const highlightOn = function(evt) {
    report(evt.type, evt.target);
    evt.target.classList.add('bg');
}
const highlightOff = function(evt) {
    report(evt.type, evt.target);
    evt.target.classList.remove('bg');
}

// The mouseup and mousedown events can happen on any element
document.querySelector('form').addEventListener('mousedown', highlightOn);
document.querySelector('form').addEventListener('mouseup', highlightOff);
