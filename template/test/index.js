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
  const {render} = vdux()
  let node

  node = render(<{{capitalcase basename}}></{{capitalcase basename}}>)

  t.end()
})
