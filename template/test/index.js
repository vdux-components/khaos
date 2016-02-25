/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import element from 'vdux/element'
import {{capitalcase basename}} from '../src'

/**
 * Tests
 */

test('should work', t => {
  const {stop} = run(() => <{{capitalcase basename}}></{{capitalcase basename}}>)
  
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
