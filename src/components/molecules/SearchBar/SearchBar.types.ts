import { SpringValue } from 'react-spring'
export type SearchBarProps = {
  onSearch?: (inputString: string) => unknown
}

export interface ISearchBarAnimation {
  // TODO : check type for react-spring after 9.0 released

  [x: string]: any
  maxWidth: any
  opacity: any
}

export type SearchBarHook = (
  value: string,
  ref: React.RefObject<HTMLDivElement>
) => ISearchBarAnimation
