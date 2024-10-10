const savedUser = localStorage.getItem("logon_user") || null;

export const userState = {
    "username": "Isenewo Oluwaseyi",
    "email": "isenewoephr2012@gmail.com"
}

localStorage.setItem("logon_user", JSON.stringify(userState));
