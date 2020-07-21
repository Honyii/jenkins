describe('different sizes', () => {
    it('iphone size', () => {
        cy.viewport('iphone-6')
        cy.visit('http://example.com/')
        cy.wait(2000)
    })
    it('imacbook-11 size', () => {
        cy.viewport('macbook-11')
        cy.visit('http://example.com/')
        cy.wait(2000)
    })
    it('macbook-15 size', () => {
        cy.viewport('macbook-15')
        cy.visit('http://example.com/')
        cy.wait(2000)
    })
    it('samsung size and get page title', () => {
        cy.viewport('samsung-s10')
        cy.visit('http://example.com/')
        cy.title().should('eq', 'Example Domain')
    })
    
})