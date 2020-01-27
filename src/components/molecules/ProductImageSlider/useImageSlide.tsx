import { useState, useCallback, useLayoutEffect } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { ImageSlideHook } from './ProductImageSlider.types'

const useImageSlide: ImageSlideHook = (images, active, onSlideChange) => {
  /* --------------------------------- states --------------------------------- */
  const [slide, setSlide] = useState<number>(active)

  const [springProps, setSpringProps] = useSprings(images.length, index => ({
    offset: index,
  }))

  /* -------------------------------- callback -------------------------------- */
  const toggleSlide = useCallback(
    (idx: number) => (): void => setSlide(idx),
    []
  )

  const nextSlide = useCallback(() => {
    if (slide === images.length - 1) return
    setSlide(slide + 1)
  }, [images.length, slide])

  const previousSlide = useCallback(() => {
    if (slide === 0) return
    setSlide(slide - 1)
  }, [slide])

  const transformCallback = useCallback(
    offset => offset.to((os: number) => `translate3d(${os * 100}%, 0, 0)`),
    []
  )

  const bind = useDrag(({ movement: [xDir], distance, last }) => {
    if (last) {
      if (distance > 80) {
        return xDir < 0 ? nextSlide() : previousSlide()
      }
    }
  })

  /* --------------------------------- effect --------------------------------- */
  useLayoutEffect(() => {
    setSpringProps(index => ({ offset: index - slide }))
    onSlideChange && onSlideChange(slide)
  }, [slide, setSpringProps, onSlideChange])

  const slideHandle = { toggleSlide }

  const animation = {
    transform: transformCallback,
    springProps,
  }

  return [slide, slideHandle, animation, bind]
}

export default useImageSlide
