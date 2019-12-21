export interface IValueItem {
  [name: string]: {
    value: boolean
    label: string
  }
}

export interface IBrandBasicProps {
  values?: IValueItem
  onChange?: OnChange
}

export type GetBrandKey = (values: IValueItem) => Array<keyof IValueItem>

export type GetBrandLabel = ({
  key,
  values,
}: {
  key: keyof IValueItem
  values: IValueItem
}) => string

export type OnChange = (values: IValueItem) => unknown

export type BrandSelectProps = IBrandBasicProps
