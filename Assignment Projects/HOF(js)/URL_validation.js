// URL validation.
/** Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not. */

let regex = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;

function checkURL(input) {
    if(regex.test(input)) {
        console.log("The input is a valid URL");
    }else{
        console.log("The input is not a valid URL");
    }
}


checkURL("https://ftp.google.com/");
