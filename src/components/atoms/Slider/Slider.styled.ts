import { space } from 'styled-system'
import { primaryPalette } from 'theme/colors'
import styled from 'styled-components'
import { BaseSliderProps } from './Slider.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

export const AppSlider: React.FC<BaseSliderProps> = styled(Slider)<
  BaseSliderProps
>`
  ${space}
`

export const theme = createMuiTheme({
  palette: {
    primary: primaryPalette,
  },
})
