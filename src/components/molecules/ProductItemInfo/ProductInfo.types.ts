export type HandleProductBuy = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void

export interface IProductImageProps {
  image?: string
}

export interface IProductItemInfo {
  name?: string
  price: string
  handleBuy?: HandleProductBuy
  id?: string
}
export type ProductItemProps = IProductItemInfo & IProductImageProps
