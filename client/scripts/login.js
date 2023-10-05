// const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

const details = document.querySelectorAll('input')

const btn = document.querySelector('.btn')
const msg = document.querySelector('.alertMessage')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    msg.innerText = ''

    if (!details[0].value || !details[1].value) {
        msg.innerText = 'All fields cannot be empty!!!'
        msg.style.color = "red"
    }

    // else {
    //     let user = {
    //         email: details[0].value,
    //         password: details[1].value
    //     }
    //     loginUser(user)
    //     console.log('Attempting login with user: ', user)
    // }

})

// async function loginUser(data) {
//     try {
//         const response = await fetch(`${uri}/accounts/auth/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();

//         console.log(result);

//         if (response.status === 200) {
//             window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
//             window.localStorage.setItem('name', result.user.first_name)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
//             window.location.href = 'index.html'
//         }

//         if (result.error) msg.innerText = result.error

//     } catch (error) {
//         msg.innerText = error.error
//         console.error(error);
//     }
// }

