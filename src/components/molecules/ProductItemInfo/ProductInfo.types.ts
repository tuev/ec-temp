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
}

export type ProductItemProps = IProductItemInfo & IProductImageProps
