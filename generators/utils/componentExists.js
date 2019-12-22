/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs')
const path = require('path')
const pageAtoms = fs.readdirSync(
  path.join(__dirname, '../../src/components/atoms')
)
const pageMocules = fs.readdirSync(
  path.join(__dirname, '../../src/components/molecules')
)
const components = pageMocules.concat(pageAtoms)

function componentExists(comp) {
  console.log(components, 'atoms')
  return components.indexOf(comp) >= 0
}

module.exports = { componentExists }
