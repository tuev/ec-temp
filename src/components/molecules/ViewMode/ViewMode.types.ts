import { SpaceProps } from 'styled-system'
import { FabProps } from '@material-ui/core/Fab'

export type ViewModeValue = 'list' | 'grid'

export interface IViewModeProps extends Omit<FabProps, 'type'> {
  type: ViewModeValue
  onViewModeChange?: (value: ViewModeValue) => void
}

export interface IViewModeItem {
  checked?: boolean
  customtype: ViewModeValue
  color: 'primary' | 'inherit'
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export declare type BaseViewModeProps = IViewModeProps & SpaceProps
