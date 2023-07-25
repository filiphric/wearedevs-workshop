import * as singleBoard from './fixtures/singleBoard.json'
import * as singleBoardSingleList from './fixtures/singleBoardSingleList.json'
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'
import * as twoBoards from './fixtures/twoBoards.json'
import * as empty from './fixtures/empty.json'
import * as singleBoardTwoListsTwoCards from './fixtures/singleBoardTwoListsTwoCards.json'

const beforeTestSeeds = {
  'cypress/e2e/01_creating_first_test/demo_start.cy.ts': twoBoards,
  'cypress/e2e/01_creating_first_test/demo_end.cy.ts': twoBoards,
  'cypress/e2e/01_creating_first_test/challenge_solution.cy.ts': twoBoards,
  'cypress/e2e/02_simple_assertions/challenge_solution.cy.ts': singleBoard,
  'cypress/e2e/03_chaining_and_retryability/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_intercept/demo_start.cy.ts': singleBoardSingleList,
  'cypress/e2e/06_intercept/demo_end.cy.ts': singleBoardSingleList
}

const beforeEachTestSeeds = {
  'cypress/e2e/02_simple_assertions/demo_start.cy.ts': singleBoardSingleList,
  'cypress/e2e/02_simple_assertions/demo_end.cy.ts': singleBoardSingleList,
  'cypress/e2e/11_installing_useful_plugins/demo_end.cy.ts': empty,
  'cypress/e2e/11_installing_useful_plugins/challenge.cy.ts': singleBoardTwoListsTwoCards,
  'cypress/e2e/11_installing_useful_plugins/challenge_solution.cy.ts': singleBoardTwoListsTwoCards,

}

before( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeTestSeeds[`${path}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeEachTestSeeds[`${path}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})