export { }

import Board from '../src/typings/board'
import List from '../src/typings/list'
import Card from '../src/typings/card'

export interface trelloDatabase {
  boards: Board[]
  lists: List[],
  card: Card[],
  users: any[]
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Displays info message in Cypress runner
       */
      info(displayName: string, db: trelloDatabase): Chainable<any>
    }
  }
}
