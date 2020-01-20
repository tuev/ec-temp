import React, { FC, useState, useCallback, useEffect } from 'react'
import { theme, AppViewMode } from './ViewMode.styled'
import { BaseViewModeProps, ViewModeValue } from './ViewMode.types'

import { Apps, List } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'
import Wrapper from 'components/atoms/Wrapper'

const getColor: (checked?: boolean) => 'primary' | 'inherit' = checked =>
  checked ? 'primary' : 'inherit'

const ViewMode: FC<BaseViewModeProps> = (props: BaseViewModeProps) => {
  const { type, onViewModeChange } = props
  const [checked, toggleChecked] = useState<ViewModeValue>(type)

  const handleClick = useCallback(
    (value: ViewModeValue) => (): void => toggleChecked(value),
    []
  )

  useEffect(() => {
    if (onViewModeChange) {
      onViewModeChange(checked)
    }
  }, [checked, onViewModeChange])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper display="flex">
        <Wrapper mr="4px">
          <AppViewMode
            checked={checked === 'grid'}
            customtype="grid"
            color={getColor(checked === 'grid')}
            onClick={handleClick('grid')}
            data-testid="viewmode-grid"
          >
            <Apps />
          </AppViewMode>
        </Wrapper>
        <Wrapper ml="4px">
          <AppViewMode
            customtype="list"
            checked={checked === 'list'}
            color={getColor(checked === 'list')}
            onClick={handleClick('list')}
            data-testid="viewmode-list"
          >
            <List />
          </AppViewMode>
        </Wrapper>
      </Wrapper>
    </ThemeProvider>
  )
}
export default ViewMode
