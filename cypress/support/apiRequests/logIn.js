export function logIn(requestBody) {
    return cy.request({
        method: 'POST',
        url: 'rest/user/login',
        body: requestBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}