   
    document.addEventListener('DOMContentLoaded', () =>{
        console.log('document loaded')
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')
    const button = document.getElementById('button')

    
    user.addEventListener('input', () => {
   if(user.value.trim() === '' || pass.value.trim() === '')
   {
    button.style.background = '#BBBBBB'
    button.style.cursor = 'not-allowed'
    button.disabled = true
   }
   else{
    button.style.cursor = 'pointer'
    button.style.background = '#fffc00'
    button.disabled = true
   }
    })
    pass.addEventListener('input', () => {
        if(pass.value.trim() === '' || user.value.trim() === '')
        {
         button.style.background = '#BBBBBB'
         button.style.cursor = 'not-allowed'
         button.disabled = true
        }
        else{
            button.style.cursor = 'pointer'
         button.style.background = '#fffc00'
         button.disabled = false
        }
         })
        })