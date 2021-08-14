const login = (credentialsObject) => {
}

export default {
  login: login
}

export function handleLoginAPI(credentialsObject={}){
  return fetch('http://localhost:3001/api/users/login?include=user', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(credentialsObject)
  })
}