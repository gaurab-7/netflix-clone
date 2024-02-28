let signbtn = document.getElementById("signinbutton");
let loginBtn = document.getElementById("loginBtn");
let email = document.getElementById("email");
let password = document.getElementById("password");


let fetchFunc = async function () {
    let emailVal = email.value
    let passVal = password.value
    let payload = {email:emailVal,password:passVal}
    console.log(payload)
    let response = await fetch("http://localhost:2000/api/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

    response = await response.json()
    console.log(response)
    if(response.msg == "fail"){
        alert("User doesnot exist")
    }
    if(response.msg == "success"){
        alert("Login successful")
    }
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchFunc()
})

