context('dummy testing of the userSelector component', () => {
    before(() => {
        cy.visit('http://localhost:5000/')
    })
    it('the UserSelector is present',()=>{
        cy.get('.UserSelector');
    })
    it('the UserSelector component shoud have 10 cards in it', () => {
        cy.wait(500)
        .get('.UserSelector').children().should('have.length', 10)
    })
})
