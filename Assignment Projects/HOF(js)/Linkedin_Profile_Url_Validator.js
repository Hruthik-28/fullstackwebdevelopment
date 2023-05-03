// LinkedIn Profile URL Validator.

let regex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g ;

function checkURL(input) {
    if(regex.test(input)) {
        console.log("The input is a valid URL");
    }else{
        console.log("The input is not a valid URL");
    }
}

checkURL("https://www.linkedin.com/in/hruthik-ks-a90112253/");
//Output:  The input is a valid URL