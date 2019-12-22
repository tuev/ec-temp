import React, { FC } from 'react'
import { AppTextArea, theme } from './TextArea.styled'
import { BaseTextAreaProps } from './TextArea.types'
import { ThemeProvider } from '@material-ui/core/styles'

const TextArea: FC<BaseTextAreaProps> = (props: BaseTextAreaProps) => (
  <ThemeProvider theme={theme}>
    <AppTextArea {...props} variant={'outlined'} rows="4" multiline={true} />
  </ThemeProvider>
)

export default TextArea
