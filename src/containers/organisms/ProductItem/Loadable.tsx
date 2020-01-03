/**
 *
 * Asynchronously loads the component for ProductItem
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
