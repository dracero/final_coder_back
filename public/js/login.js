const formLogin = document.getElementById("formLogin");
formLogin.addEventListener('submit', async e => {

  e.preventDefault()

  const datos = {
    email: formLogin[0].value,
    password: formLogin[1].value
  }

  const respuesta = await fetch('/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const content = await respuesta.json();
  const { email, access_token } = content
  if (access_token) {
    localStorage.setItem("access_token", access_token)
    localStorage.setItem("email", email)
    location.href = '/front-productos'
  } else {
    location.href = '/login-error'
  }
})