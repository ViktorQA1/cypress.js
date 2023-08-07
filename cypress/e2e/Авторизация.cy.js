
describe('Тестирование https://login.qa.studio/', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru ')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })
 })
 it('Проврка логики кнопки Забыл пароль', function () {
    cy.visit('https://login.qa.studio/');
    
    cy.get('#forgotEmailButton').click()
    cy.wait(3000)
    cy.get('#mailForgot').type('german@dolnikov.ru')
    cy.get('#restoreEmailButton').click()
    cy.wait(1000)
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
    cy.wait(1000)
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')

})
it('Негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru ')
    cy.get('#pass').type('iLoveqqqastudio1')
    cy.get('#loginButton').click()
    cy.wait(1000)
    cy.get('#messageHeader').contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')

})
it('Негативный кейс авторизации неверный пароль и почта', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germannn@dolnikov.ru ')
    cy.get('#pass').type('iLoveqqqastudio1')
    cy.get('#loginButton').click()
    cy.wait(1000)
    cy.get('#messageHeader').contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')

})
it('Негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru ')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.wait(1000)
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})
it('Ловим багу', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
})


 