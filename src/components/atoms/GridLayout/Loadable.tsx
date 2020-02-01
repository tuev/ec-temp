/**
 *
 * Asynchronously loads the component for GridLayout
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
