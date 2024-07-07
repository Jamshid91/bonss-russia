const getPriceBtns = document.querySelectorAll('.get-price'),
      popUpGetPrice = document.querySelector('.popUp-get-price');




getPriceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpGetPrice.classList.remove('d-none')
    })
});




const user_name2 = document.getElementById('name2'),
      user_email2 = document.getElementById('email2'),
      user_phone2 = document.getElementById('phone2'),
      user_text2 = document.getElementById('message2'),
      submit_btn2 = document.querySelector('.popUp-get-price .form-btn');


submit_btn2.addEventListener('click', () => {
    checkInputsGetPrice();
    let successName2 = user_name2.nextElementSibling.classList,
        successEmil2 = user_email2.nextElementSibling.classList,
        successPhone2 = user_phone2.nextElementSibling.classList,
        successText2 = user_text2.nextElementSibling.classList;

    if(successName2 == 'success' && successEmil2 == 'success' && successPhone2 == 'success' && successText2 == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll');
        popUpGetPrice.classList.add('d-none');
    }
})

function checkInputsGetPrice() {
    let user2_value = user_name2.value.trim(),
        phone2_value = user_phone2.value.trim(),
        email2_value = user_email2.value.trim(),
        text2_value = user_text2.value.trim();

    if(user2_value === '') {
        setErrorFor(user_name2, '1px solid #D62626')   
    } 
    else if (!isText(user2_value)) {
        setErrorFor(user_name2, '1px solid #D62626')   
        user_name2.nextElementSibling.textContent = '*Введите имя на кириллице'
    }
    else {
        setSuccesFor(user_name2)
        user_name2.nextElementSibling.classList.add('success');
        user_name2.nextElementSibling.textContent = ''
    }

    if(email2_value === '') {
        setErrorFor(user_email2, '1px solid #D62626')
    }
        else if(!isEmail(email2_value)) {
            setErrorFor(user_email2, '1px solid #D62626')
        }
     else {
        setSuccesFor(user_email2)
        user_email2.nextElementSibling.classList.add('success');
    }
    
    if(phone2_value === '') {
        setErrorFor(user_phone2, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_phone2)
        user_phone2.nextElementSibling.classList.add('success');
    }
    if(text2_value === '') {
        setErrorFor(user_text2, '1px solid #D62626')
        
        } else {
        setSuccesFor(user_text2)
        user_text2.nextElementSibling.classList.add('success');
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


function auto_grow2(element) {
    element.style.height = '48px';
    element.style.height = (element.scrollHeight) + 'px';
    if(user_text2.value.length < 5) {
        user_text2.style.height = '48px'
    }
}

