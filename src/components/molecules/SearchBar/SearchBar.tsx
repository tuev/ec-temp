/**
 *
 * SearchBar
 *
 */

import React, { FC, useRef, useState, useEffect, useCallback } from 'react'

import { Search } from '@material-ui/icons'
import Wrapper from 'components/atoms/Wrapper'
import { ThemeProvider } from '@material-ui/core'

import { SearchInput, theme, SearchWrapper } from './SearchBar.styled'
import useSearchBarTransition from './useSearchBarAnimation'
import { SearchBarProps } from './SearchBar.types'

const SearchBar: FC<SearchBarProps> = (props) => {
  const { onSearch } = props
  const [inputString, onChangeInput] = useState<string>('')
  const handleInputChange = useCallback(
    (e) => onChangeInput(e.target.value),
    []
  )
  useEffect(() => {
    if (onSearch) {
      onSearch(inputString)
    }
  }, [inputString, onSearch])

  const wrapperRef = useRef<HTMLDivElement>(null)
  const { maxWidth, opacity } = useSearchBarTransition(inputString, wrapperRef)

  return (
    <ThemeProvider theme={theme}>
      <SearchWrapper ref={wrapperRef} data-testid="search-ref">
        <SearchInput
          id="outlined-secondary"
          variant="outlined"
          color="secondary"
          maxwidth={maxWidth}
          opacity={opacity}
          onChange={handleInputChange}
          inputProps={{ 'data-testid': 'search-input' }}
        />
        <Wrapper position="absolute" top="8px" right="8px">
          <Search color="secondary" />
        </Wrapper>
      </SearchWrapper>
    </ThemeProvider>
  )
}

export default SearchBar
