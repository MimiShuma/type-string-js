function typeStringAnimation(id) {
    let sampleString = "hallo shuma";

    let stringToArray = sampleString.split('');

    stringToArray.unshift(" ");
    
    setInterval(function () {
        let lastChar = stringToArray.pop();

        stringToArray.unshift(lastChar);

        sampleString = stringToArray.join('');

        let target = document.getElementById(id);
        target.innerHTML = sampleString;
    }, 1000);
}