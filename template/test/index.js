/**
 * Imports
 */

import test from 'tape'
import {{capital basename}} from '../src'

/**
 * Tests
 */

test('should work', t => {
  const {stop} = run(() => <{{capital basename}}></{{capital basename}}>)
  
  stop()
  t.end()
})

/**
 * Helpers
 */

function run (app, initialState = {}) {
  return vdux({
    app,
    reducer: state => state,
    initialState
  })
}
