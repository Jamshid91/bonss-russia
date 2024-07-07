const connectUsBtns = document.querySelectorAll('.connect-us'),
      popUpConnectUs = document.querySelector('.popUp-connect-us');



connectUsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpConnectUs.classList.remove('d-none')
    })
});





const user_name1 = document.getElementById('name1'),
      user_email1 = document.getElementById('email1'),
      user_phone1 = document.getElementById('phone1'),
      user_text1 = document.getElementById('message1'),
      submit_btn1 = document.querySelector('.popUp-connect-us .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks');


submit_btn1.addEventListener('click', () => {
    checkInputsConnect();
    let successName1 = user_name1.nextElementSibling.classList,
        successEmil1 = user_email1.nextElementSibling.classList,
        successPhone1 = user_phone1.nextElementSibling.classList,
        successText1 = user_text1.nextElementSibling.classList;

    if(successName1 == 'success' && successEmil1 == 'success' && successPhone1 == 'success' && successText1 == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll');
        popUpConnectUs.classList.add('d-none');
    }
})

function checkInputsConnect() {
    let user1_value = user_name1.value.trim(),
        phone1_value = user_phone1.value.trim(),
        email1_value = user_email1.value.trim(),
        text1_value = user_text1.value.trim();

    if(user1_value === '') {
        setErrorFor(user_name1, '1px solid #D62626')   
    } 
    else if (!isText(user1_value)) {
        setErrorFor(user_name1, '1px solid #D62626')   
        user_name1.nextElementSibling.textContent = '*Введите имя на кириллице'
    }
    else {
        setSuccesFor(user_name1)
        user_name1.nextElementSibling.classList.add('success');
        user_name1.nextElementSibling.textContent = ''
    }

    if(email1_value === '') {
        setErrorFor(user_email1, '1px solid #D62626')
    }
        else if(!isEmail(email1_value)) {
            setErrorFor(user_email1, '1px solid #D62626')
        }
     else {
        setSuccesFor(user_email1)
        user_email1.nextElementSibling.classList.add('success');
    }
    
    if(phone1_value === '') {
        setErrorFor(user_phone1, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_phone1)
        user_phone1.nextElementSibling.classList.add('success');
    }
    if(text1_value === '') {
        setErrorFor(user_text1, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_text1)
        user_text1.nextElementSibling.classList.add('success');
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


function auto_grow1(element) {
    element.style.height = '48px';
    element.style.height = (element.scrollHeight) + 'px';
    if(user_text1.value.length < 5) {
        user_text1.style.height = '48px'
    }
}

