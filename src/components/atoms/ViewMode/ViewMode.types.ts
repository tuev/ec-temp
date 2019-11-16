import { SpaceProps } from 'styled-system'
import { FabProps } from '@material-ui/core/Fab'

export interface IViewModeProps extends Omit<FabProps, 'type'> {
  checked?: boolean
  type: 'list' | 'grid'
}

export declare type BaseViewModeProps = IViewModeProps & SpaceProps
