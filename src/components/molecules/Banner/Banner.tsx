/**
 *
 * Banner
 *
 */

import React, { FC, useCallback } from 'react'
import Wrapper from 'components/atoms/Wrapper'
import Typography from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import { BannerWrapper } from './Banner.styled'
import { BannerProps } from './Banner.types'
import mockImage from './mock/mock.png'
import { COLOR } from 'theme/colors'

const Banner: FC<BannerProps> = (props: BannerProps) => {
  const {
    title,
    subtitle = '',
    action,
    background = mockImage,
  }: BannerProps = props
  const handleClick = useCallback(e => action && action(e), [action])

  return (
    <BannerWrapper background={background}>
      <Wrapper pb="1rem" maxWidth="50%">
        <Typography customvariant="header1" customcolor="white">
          {title}
        </Typography>
      </Wrapper>
      <Wrapper pb="2rem" maxWidth="50%">
        <Typography customvariant="header2" customcolor="white">
          {subtitle}
        </Typography>
      </Wrapper>
      <Button onClick={handleClick} variant="outlined" data-testid="banner-btn">
        Shop now
      </Button>
    </BannerWrapper>
  )
}

export default Banner
