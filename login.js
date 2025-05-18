
const create_account = document.querySelector('.creating-acc')
const username = document.querySelector('.nameInput')
create_account.addEventListener('click', () => {
    const get_name = username.value;
    if(get_name){
        swal(`Welcome, ${get_name}`, "success")
        document.location.href = "main/main.html"
    } else{
        swal('Enter your full name!', "warning")
    }
})

