import { colorType } from 'theme/colors'
import { SpaceProps } from 'styled-system'
import { RadioProps } from '@material-ui/core/Radio'
export interface IRadioProps extends RadioProps {
  customColor?: colorType
}

export declare type BaseRadioProps = IRadioProps & SpaceProps
