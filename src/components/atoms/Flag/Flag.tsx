import React, { FC } from 'react'
import { AppFlag } from './Flag.styled'
import { BaseFlagProps } from './Flag.types'

const Flag: FC<BaseFlagProps> = (props: BaseFlagProps) => <AppFlag {...props} />

export default Flag
