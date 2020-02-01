/**
 *
 * SubscriptionTile
 *
 */

import React, { FC, useState, useCallback } from 'react'
import Wrapper from 'components/atoms/Wrapper'
import { COLOR } from 'theme/colors'
import Typography from 'components/atoms/Typography'
import { InputAdornment } from '@material-ui/core'
import { MailOutline } from '@material-ui/icons'
import TextField from 'components/atoms/TextField'
import Button from 'components/atoms/Button'
import { SubscriptionTileProps } from './SubscriptionTile.types'
import { get } from 'lodash'

const SubscriptionTile: FC<SubscriptionTileProps> = (
  props: SubscriptionTileProps
) => {
  const { onSubscribe } = props
  const [email, onEmailChange] = useState<string>('')
  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void =>
      onEmailChange(get(event, 'target.value', email)),
    [email]
  )

  const handleSubscribe = useCallback(() => {
    if (onSubscribe) {
      onSubscribe(email)
    }
  }, [email, onSubscribe])

  return (
    <Wrapper
      width="100%"
      background={COLOR.gray1}
      p="2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography color="error" customvariant="header2">
        10% discount for your subscription
      </Typography>
      <Wrapper width={[1, 1 / 2]}>
        <Typography customvariant="header3" align="center">
          Carry the day in style with this extra-large tote crafted in our chic
          B.B. Collection textured PVC. Featuring coloful faux leather trim,
          this tote offer a roomy iterior
        </Typography>
      </Wrapper>
      <Wrapper
        mt="1rem"
        width={[1, 1 / 2]}
        maxWidth="350px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            ),
          }}
          size="small"
          label="Your email"
          variant="outlined"
          onChange={handleEmailChange}
          inputProps={{
            'data-testid': 'subscribe-email-input',
          }}
        />
        <Button
          size="small"
          onClick={handleSubscribe}
          data-testid="subscribe-btn"
        >
          Subscribe
        </Button>
      </Wrapper>
    </Wrapper>
  )
}

export default SubscriptionTile
