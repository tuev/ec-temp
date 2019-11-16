import React, { FC, useMemo } from 'react'
import { theme, AppViewMode } from './ViewMode.styled'
import { BaseViewModeProps } from './ViewMode.types'

import { Apps, List } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'

const getColor: (checked?: boolean) => string = checked =>
  checked ? 'primary' : ''

const ViewMode: FC<BaseViewModeProps> = (props: BaseViewModeProps) => {
  const { type = 'list', checked, ...rest } = props
  const color = useMemo(() => getColor(checked), [checked])
  return (
    <ThemeProvider theme={theme}>
      {type === 'grid' ? (
        <AppViewMode color={color} {...rest}>
          <Apps />
        </AppViewMode>
      ) : (
        <AppViewMode color={color} {...rest}>
          <List />
        </AppViewMode>
      )}
    </ThemeProvider>
  )
}
export default ViewMode
