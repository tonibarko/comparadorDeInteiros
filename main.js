const form = document.getElementById('formulario')

form.addEventListener('submit', e=> {
    e.preventDefault();

    const identificaA = document.getElementById('input-A')
    const identificaB = document.getElementById('input-B')

    if (identificaA.value < identificaB.value){
        document.querySelector('.sucess-message').style.display='block'
        identificaA.value = '';
        identificaB.value = '';

    }else {
        document.querySelector('.error-message').style.display = 'block'
    }

    identificaA.addEventListener('click', e=>{
        document.location.reload(true)
    })
    
})

// mudando para essa branch exercicio_html_js
