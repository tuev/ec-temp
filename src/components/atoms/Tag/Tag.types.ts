import { ColorType } from 'theme/colors'
import { SpaceProps } from 'styled-system'

type TagType = 'hot' | 'sale' | 'pop' | '5min' | 'custom'

interface ITagBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ColorType
  tag: TagType
  text?: string
}
export type GetTagColor = (tag: TagType, color?: ColorType) => string

export type GetTagText = (tag: TagType, text?: string) => string

export declare type BaseTagProps = ITagBaseProps & SpaceProps
