export interface IBrandValues {
  [name: string]: {
    value: boolean
    label: string
  }
}

export interface IBrandBasicProps {
  values?: IBrandValues
  onChange?: OnChange
}

export type GetBrandKey = (values: IBrandValues) => Array<keyof IBrandValues>

export type GetBrandLabel = ({
  key,
  values,
}: {
  key: keyof IBrandValues
  values: IBrandValues
}) => string

export type OnChange = (values: IBrandValues) => unknown

export type BrandSelectProps = IBrandBasicProps

export type UseBrandSelectOutput = [
  IBrandValues,
  (
    name: string | number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => unknown
]

export type UseBrandSelect = (
  initValue: IBrandValues,
  onEffectCb?: OnChange
) => UseBrandSelectOutput
