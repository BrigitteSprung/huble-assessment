// Typing effect function, using multiarrays to add and remove chars

function typingEffect() {

    const adjectives = ['intelligent.', 'personal.', 'profitable.', 'effective.'];
    const typedtext = document.getElementsByClassName('typedtext')[0];
    let removing = false;
    let idx =  0;
    let char = 0;

    setInterval(() => { // Defining the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < adjectives[idx].length) typedtext.innerHTML += adjectives[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == adjectives[idx].length + 15) removing = true;
        
        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === adjectives.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

        
    }, 150); // This sets the typing speed: 150ms
}

typingEffect();

//intelligent personal profitable effective 