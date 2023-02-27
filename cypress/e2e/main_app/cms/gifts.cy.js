let env = Cypress.env('env')
let host = env.be.host
let account = env.be.account.system_admin


import cmsLoginPage from '../../../pages/main_app/cms/loginPage';
import cmsHomeage from '../../../pages/main_app/cms/homePage';
import cmsGiftsPage from '../../../pages/main_app/cms/giftsPage';

describe('cms testcase for gift filters', async() => {
  beforeEach(function () {
    cy.visit(host)
  })

  it('test search function', async() => {
    let searchResult
    let firstOfSearchResult

    cy.log("step1: log in cms")
    cmsLoginPage.login(account)

    cy.log("step2: access to gifts page")
    cmsHomeage.accessGiftsPage()

    cy.log("step3: search with student id")
    searchResult = await cmsGiftsPage.elements.searchResult()
      .then((searchResult) => {
        cy.log(`searchResult = ${JSON.stringify(searchResult)}`)
      })

    firstOfSearchResult = await cmsGiftsPage.elements.firstDataOfSearchResult()
      .then((firstOfSearchResult) => {
        cy.log(`firstOfSearchResult = ${JSON.stringify(firstOfSearchResult)}`)
      })

  })
})
