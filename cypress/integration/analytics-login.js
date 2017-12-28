describe("Scenario: regular web user can successfully log in", function() {
  it ("Logs in to the Analytics app as a regular web user", function() {

  const regularweb = {
    username: "regularweb@brandwatch.com",
    password: "fake"
  };

  cy.visit('/')

  cy.request('GET', 'http://newapi.stage.brandwatch.com/oauth/token?client_id=brandwatch-api-client&grant_type=api-password&password=YqjsPb3D$2qUWWD@&refresh_token&username=chrisco%2Bfacebook%2Dstage%40brandwatch.com', { username: 'jane.lane' })
        .its('body')
        .as('currentUser')

  cy.get('input[id=username]').type(regularweb.username)

  cy.get('input[id=password]').type(regularweb.password)

  cy.get('input[value=Login]').click()

  cy.get('#projectSelection > div > section.project-selector-subview.eightcol.pagepadding.modular.rounded > h1', { timeout: 10000 })
    .contains('Welcome to Brandwatch')


  })
})