import mediaQuery from 'css-mediaquery'

export const createMatchMedia = (width: number) => {
  return (query: any): any => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => ({}),
    removeListener: () => ({}),
  })
}
