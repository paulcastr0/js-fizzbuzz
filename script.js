let mainContainer = document.querySelector(".my-container");

for (let i = 0; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        mainContainer.innerHTML += '<div class ="square"><p>FizzBuzz</p></div>';
    }
    else if (i  % 3 == 0) {
        mainContainer.innerHTML += '<div class ="square"><p>Fizz</p></div>';
    }
    else if (i % 5 == 0) {
        mainContainer.innerHTML += '<div class ="square"><p>Buzz</p></div>';
    }
    else

    mainContainer.innerHTML += '<div class ="square">' + i + '</p></div>';
}
