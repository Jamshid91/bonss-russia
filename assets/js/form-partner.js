const partnerBtns = document.querySelectorAll('.block5-btn'),
      popUpPartner = document.querySelector('.popUp-partner');




      partnerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpPartner.classList.remove('d-none')
    })
});




const user_name3 = document.getElementById('name3'),
      user_email3 = document.getElementById('email3'),
      user_phone3 = document.getElementById('phone3'),
      user_text3 = document.getElementById('message3'),
      submit_btn3 = document.querySelector('.popUp-partner .form-btn');


submit_btn3.addEventListener('click', () => {
    checkInputsPartner();
    let successName3 = user_name3.nextElementSibling.classList,
        successEmil3 = user_email3.nextElementSibling.classList,
        successPhone3 = user_phone3.nextElementSibling.classList,
        successText3 = user_text3.nextElementSibling.classList;

    if(successName3 == 'success' && successEmil3 == 'success' && successPhone3 == 'success' && successText3 == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll');
        popUpPartner.classList.add('d-none');
    }
})

function checkInputsPartner() {
    let user3_value = user_name3.value.trim(),
        phone3_value = user_phone3.value.trim(),
        email3_value = user_email3.value.trim(),
        text3_value = user_text3.value.trim();

    if(user3_value === '') {
        setErrorFor(user_name3, '1px solid #D62626')   
    } 
    else if (!isText(user3_value)) {
        setErrorFor(user_name3, '1px solid #D62626')   
        user_name3.nextElementSibling.textContent = '*Введите имя на кириллице'
    }
    else {
        setSuccesFor(user_name3)
        user_name3.nextElementSibling.classList.add('success');
        user_name3.nextElementSibling.textContent = ''
    }

    if(email3_value === '') {
        setErrorFor(user_email3, '1px solid #D62626')
    }
        else if(!isEmail(email3_value)) {
            setErrorFor(user_email3, '1px solid #D62626')
        }
     else {
        setSuccesFor(user_email3)
        user_email3.nextElementSibling.classList.add('success');
    }
    
    if(phone3_value === '') {
        setErrorFor(user_phone3, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_phone3)
        user_phone3.nextElementSibling.classList.add('success');
    }
    if(text3_value === '') {
        setErrorFor(user_text3, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_text3)
        user_text3.nextElementSibling.classList.add('success');
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


function auto_grow3(element) {
    element.style.height = '48px';
    element.style.height = (element.scrollHeight) + 'px';
    if(user_text3.value.length < 5) {
        user_text3.style.height = '48px'
    }
}

