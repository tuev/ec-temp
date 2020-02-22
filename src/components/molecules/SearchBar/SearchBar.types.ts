import { SpringValue } from 'react-spring'
export type SearchBarProps = {
  onSearch?: (inputString: string) => unknown
}

export interface ISearchBarAnimation {
  [x: string]: SpringValue<any>
  maxWidth: SpringValue<string>
  opacity: SpringValue<number>
}

export type SearchBarHook = (
  value: string,
  ref: React.RefObject<HTMLDivElement>
) => ISearchBarAnimation
