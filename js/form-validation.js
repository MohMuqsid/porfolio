function validate() {
    var username = document.getElementById("username");
    var emailaddress = document.getElementById("email");
    var phone = document.getElementById("phone");

    if (username.value.trim() == "") {
        document.getElementById("noname").style.visibility = "visible";
        username.style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("noname").style.visibility = "hidden";
        username.style.border = ""; 
    }

    if (emailaddress.value.trim() == "") {
        document.getElementById("emailrequired").style.visibility = "visible";
        emailaddress.style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("emailrequired").style.visibility = "hidden";
        emailaddress.style.border = ""; 
    }

    if (phone.value.trim() == "") {
        document.getElementById("phonerequired").style.visibility = "visible";
        phone.style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("phonerequired").style.visibility = "hidden";
        phone.style.border = ""; 
    }

    return true;
}


const form = document.getElementById('submit-form');

form.addEventListener("submit",function(e){
    e.preventDefault();
    let  validation=validate()
    if(validation===true){
        
        const formData = new FormData(form);
        fetch("https://script.google.com/macros/s/AKfycbwpERF_TEc_a23_Wq0Djx0_gUg33umNWkFmQE0Y2JKsiNV5IB4HmEK6t2usVLMWBAIhew/exec"
        , {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Form submitted successfully");
            window.location.reload();
            // window.location.href = "https://google.com";
        })
        .catch(error => {
            alert("Something went wrong");
        });
    }
})