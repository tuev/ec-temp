import React from 'react'
import Typography from './Typography'

export default {
  component: Typography,
  includeStories: ['basic'],
  title: 'AppTypography',
}

export const basic = () => (
  <div style={{ display: 'flex', flexFlow: 'column' }}>
    <Typography customvariant="header1">
      The quick brown fox jumps over the lazy dog
    </Typography>
    <Typography customvariant="header2">
      The quick brown fox jumps over the lazy dog
    </Typography>
    <Typography customvariant="header3">
      The quick brown fox jumps over the lazy dog
    </Typography>
    <Typography customvariant="topbar">
      The quick brown fox jumps over the lazy dog
    </Typography>
    <Typography customvariant="body1">
      The quick brown fox jumps over the lazy dog
    </Typography>
    <Typography customvariant="body2">
      The quick brown fox jumps over the lazy dog
    </Typography>
  </div>
)
