(function() {
    const add = function(first, second) {
        return parseFloat(first) + parseFloat(second);
    }

    document.querySelector('button')
            .addEventListener('click', function() {
                // call our function
                result.innerText = add(firstNumber.value, secondNumber.value);
            });
})()
