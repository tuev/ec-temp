/**
 *
 * Asynchronously loads the component for ProductCart
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
