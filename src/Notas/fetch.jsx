// O fetch por padrão ele faz um GET, no caso não precisa colocar nada, é o normal
//  fetch(`https://dogsapi.origamid.dev/json/`)

// // Para enviar precisa fazer um POST
//     fetch(`https://dogsapi.origamid.dev/json/`, {
//     method: POST,
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username,
//         email,
//         password
//     })
// })

// Os hearders são importantes, você tem que informar o que esta indo para o servidor
// O corpo deve ser passado como string