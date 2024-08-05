let result={
    "tag": "",
    "free": true,
    "role": false,
    "user": "ajekargeetha",
    "email": "ajekargeetha@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }
let btn = document.getElementById("btn");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked");

    let key = "ema_live_nFAspky8cF4FkB02kFv1fVZd4rpiLsalJEyFrfFI";
    let email = document.getElementById("user").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        let result = await res.json();

        let str = '';
        for (let key of Object.keys(result)) {
            str += `<div>${key}: ${result[key]}</div>`;
        }

        document.getElementById("resultCont").innerHTML = str;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});