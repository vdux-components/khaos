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
  let node

  node = render(<{{capitalcase basename}}></{{capitalcase basename}}>)

  t.end()
})

/**
 * Helpers
 */

function render (tree) {
  const {stop} = run(() => tree)
  stop()
  return document.body.firstChild
}

function run (app, initialState = {}) {
  return vdux({
    app,
    reducer: state => state,
    initialState
  })
}
