// Password Checker.

/**Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get getPassword(){
        return this.password.replace(/./g, "*");
    }

    set setPassword(newPassword) {
        if (newPassword.length >= 8 && /[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)) {
            this.password = newPassword;
    }else{
        console.log("password should be at least 8 characters long and contains at least one number and one uppercase letter");
    }
}
}
const user = new User("Hruthik", "hruthik99808");
console.log(user.getPassword);  //************

user.setPassword = "hruthik" //password should be at least 8 characters long and contains at least one number and one uppercase letter

user.setPassword = "Sathish@99808";
console.log(user.getPassword);