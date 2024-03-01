document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the click event on the "Home" button
    document.getElementById('homeBtn').addEventListener('click', function (event) {
        event.preventDefault();
        alert('Email security is the practice of protecting email accounts and communications from unauthorized access, loss, or compromise. Organizations can enhance their email security posture by establishing policies and using tools to protect against malicious threats such as malware, spam, and phishing attacks.');
        
    });

    // Function to handle the click event on the "Contact Us" button
    document.getElementById('contactBtn').addEventListener('click', function (event) {
        event.preventDefault();
        alert('"Block your Google Pay account by calling customer care at 18004190157 or 01204456456. For invalid email or spam issues, call 100. Do not share personal information over calls."');
       
    });
});


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_Vj9bAA3hcatlW2DVliu5qmaiuPKzu2qKA43RQ1eM"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str
})