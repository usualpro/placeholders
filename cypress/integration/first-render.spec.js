context('warmp-up, simple testing of the rendering of the page', () => {
    before(() => {
        cy.visit('http://localhost:5000/')
    })
    it('the title of the html page should be valid', () => {
        cy.title().should('eq', 'PlaceHolders')
    })
})
