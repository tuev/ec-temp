import { SpaceProps } from 'styled-system'
import { SliderProps } from '@material-ui/core/Slider'

type BaseValueLabel = Omit<React.HTMLProps<HTMLDivElement>, 'value'> &
  Pick<SliderProps, 'value'>

interface IValueLabel {
  showlabel?: boolean
}

export declare type BaseSliderProps = SliderProps & SpaceProps & IValueLabel

export type ValueLabelProps = BaseValueLabel & IValueLabel
