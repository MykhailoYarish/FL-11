// Your code goes here
const email = prompt('Enter email adress');
const minEmailLength = 6;
const minPasswordLength = 5;
let password = '';
let isLogged = false;

if(!email){
    alert('Canceled');
}else if(email.length < minEmailLength){
    alert('I don\'t know any emails having name length less than 6 symbols');
}else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
    password = prompt('Password');

    if(!password){
        alert('Canceled')
    }

    if(Number(password) && password !== ''){
        alert('I don’t know you');
    }else{
        switch(password){
            case 'UserPass': email === 'user@gmail.com' ? isLogged = true : isLogged = false;
            break;
            case 'AdminPass' : email === 'admin@gmail.com' ? isLogged = true : isLogged = false;
            break;
            default : alert('Wrong password')
        }
        if(isLogged){
            let confirmStatus = confirm('Do you want to change your password?');
            if(!confirmStatus){
              alert('You have failed the change');
            }else{
                let confirmPassword = prompt('Write the old password');
                if(confirmPassword === password){
                    let newPassword = prompt('Enter new password');
                    if(newPassword.length < minPasswordLength){
                        alert('It’s too short password. Sorry');
                    }else{
                        let confirmNewPassword = prompt('Enter again');
                        if(confirmNewPassword !== newPassword){
                           alert('You wrote the wrong password.');
                        }else{
                            password = newPassword;
                            alert('You have successfully changed your password');
                        }
                    }
                }
            }
        }
    }
}



