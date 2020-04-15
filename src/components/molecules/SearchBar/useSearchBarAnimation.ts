import { useSpring } from 'react-spring'
import { useState, useCallback, useEffect } from 'react'
import { SearchBarHook } from './SearchBar.types'

const useSearchBarTransition: SearchBarHook = (value, ref) => {
  const [isSearch, toggleSearch] = useState(false)

  const showSearch = useCallback(() => toggleSearch(true), [])
  const hideSearch = useCallback(() => toggleSearch(false), [])

  const animtionStyle = useSpring({
    maxWidth: isSearch ? '195px' : '32px',
    opacity: isSearch ? 1 : 0,
  })

  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target) && !value) {
        return hideSearch()
      }
      showSearch()
    },
    [hideSearch, ref, showSearch, value]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return (): void => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return animtionStyle
}

export default useSearchBarTransition
