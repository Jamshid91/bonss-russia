
const user_name = document.getElementById('name'),
      user_email = document.getElementById('email'),
      user_phone = document.getElementById('phone'),
      user_text = document.getElementById('message'),
      submit_btn = document.querySelector('.block4 .form-btn');


submit_btn.addEventListener('click', () => {
    checkInputs();
    let successName = user_name.nextElementSibling.classList,
        successEmil = user_email.nextElementSibling.classList,
        successPhone = user_phone.nextElementSibling.classList,
        successText = user_text.nextElementSibling.classList;

    if(successName == 'success' && successEmil == 'success' && successPhone == 'success' && successText == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    }
})

function checkInputs() {
    let user_value = user_name.value.trim(),
        phone_value = user_phone.value.trim(),
        email_value = user_email.value.trim(),
        text_value = user_text.value.trim();

    if(user_value === '') {
        setErrorFor(user_name, '1px solid #D62626')   
    } 
    else if (!isText(user_value)) {
        setErrorFor(user_name, '1px solid #D62626')   
        user_name.nextElementSibling.textContent = '*Введите имя на кириллице'
    }
    else {
        setSuccesFor(user_name)
        user_name.nextElementSibling.classList.add('success');
        user_name.nextElementSibling.textContent = ''
    }

    if(email_value === '') {
        setErrorFor(user_email, '1px solid #D62626')
    }
        else if(!isEmail(email_value)) {
            setErrorFor(user_email, '1px solid #D62626')
        }
     else {
        setSuccesFor(user_email)
        user_email.nextElementSibling.classList.add('success');
    }
    
    if(phone_value === '') {
        setErrorFor(user_phone, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_phone)
        user_phone.nextElementSibling.classList.add('success');
    }
    if(text_value === '') {
        setErrorFor(user_text, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_text)
        user_text.nextElementSibling.classList.add('success');
    }
}



// validate
function setErrorFor(input, border) {
    input.style.borderBottom = border
    input.parentElement.children[2].classList.add('error');
    input.parentElement.children[2].classList.remove('success');
}
    
function setSuccesFor(input) {
    input.style.borderBottom = `1px solid #34ADC2`;
    input.parentElement.children[2].classList.add('success');
    input.parentElement.children[2].classList.remove('error');
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}   

function isText(text) {
    return /^[А-Я]$/i;
}


function auto_grow(element) {
    element.style.height = '48px';
    element.style.height = (element.scrollHeight) + 'px';
    if(user_text.value.length < 5) {
        user_text.style.height = '48px'
    }
}

