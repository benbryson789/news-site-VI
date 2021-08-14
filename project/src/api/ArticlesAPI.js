export function addArticle(articleObject={},authToken){
    return fetch('http://localhost:3001/api/articles', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(articleObject),
        Authorization:authToken,
    })
}