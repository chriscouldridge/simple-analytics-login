describe('Scenario: this is the scenario', function() {

  describe('Given the pretest state of the system', function() {

    it('Enters regularweb credentials', function() {

      cy.visit('/')

      const regularweb = {
        username: "regularweb@brandwatch.com",
        password: "fake"
      }

      cy.get('input[id=username]').type(regularweb.username)

      cy.get('input[id=password]').type(regularweb.password)

    })


  })

  describe('When the login button is clicked', function() {

    it('clicks the button', function() {

      cy.get('input[value=Login]').click()

    })


    })

    describe("Then the user is taken to the 'Select Project' page", function() {

      it('The Welcome to Brandwatch text is visible', function() {

        cy.get('#projectSelection > div > section.project-selector-subview.eightcol.pagepadding.modular.rounded > h1', { timeout: 10000 })
          .contains('Welcome to Brandwatch')

      })


    })

})