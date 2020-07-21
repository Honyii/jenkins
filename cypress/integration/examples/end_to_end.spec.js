describe('should fill feedback form', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should click on feedback nav', () => {
        cy.get('#feedback').contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#description').should('be.visible')
    })
   
    it('should fill the form', () => {
        cy.get('#name').type('my name')
        cy.get('#email').type('ssss@shawty.com')
        cy.get('#subject').type('english')
        cy.get('#comment').type('great stuffs')
    })
    it('should click on send message', () => {
        cy.get('input[type="submit"]').should('contain', 'Send Message').click()
        cy.url().should('include', 'sendFeedback.html')
        cy.get('#feedback-title').should('be.visible')
        cy.get('a').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').contains('Online Banking')
    })
})