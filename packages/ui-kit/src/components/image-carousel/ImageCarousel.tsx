import { ElementType, ReactEventHandler, useEffect, useRef, useState } from 'react'

import { cn } from '@meetgram/utils'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps,
} from '../carousel'
import s from './ImageCarousel.module.scss'

export type ImageType =
  | {
      createdAt?: string
      fileSize: number
      height: number
      image: string
      uploadId: string
      width: number
    }
  | { filter: string; image: string }
  | { url: string }

type Props<I extends ElementType = 'img', L extends ElementType = 'a'> = {
  btnIconCarousel?: string
  buttonCarouselClassname?: string
  className?: string
  contentClassname?: string
  images: ImageType[]
  isPictureAsLink?: boolean
  isPictureAsLinkTo?: string
  itemClassname?: string
  keyName?: 'filter' | 'image'
  onNext?: () => void
  onPrev?: () => void
  /**
   * Custom component to render the image. Defaults to `'img'`.
   */
  imageComponent?: I
  /**
   * Custom component to wrap images as links. Defaults to `'a'`.
   */
  linkComponent?: L
  /**
   * Default: `True`.
   * Toggle a navigation arrow buttons view.
   */
  showNavigation?: boolean
} & CarouselProps

/**
 * A responsive and reusable carousel component for displaying images with support for custom image and link components.
 *
 * @template I The type of the custom image component. Defaults to `'img'`.
 * @template L The type of the custom link component. Defaults to `'a'`.
 *
 * @example
 * // Using Next.js Image and Link components:
 * import NextImage from 'next/image';
 * import NextLink from 'next/link';
 *
 * <ImageCarousel
 *   images={[{ image: '/example.jpg', height: 200, width: 300 }]}
 *   isPictureAsLink
 *   isPictureAsLinkTo="/destination"
 *   imageComponent={NextImage}
 *   linkComponent={NextLink}
 * />
 *
 * @example
 * // Using custom components:
 * const CustomImage = (props) => <img {...props} style={{ borderRadius: '8px' }} />;
 * const CustomLink = ({ children, href }) => <a href={href}>{children}</a>;
 *
 * <ImageCarousel
 *   images={[{ image: '/example.jpg', height: 200, width: 300 }]}
 *   isPictureAsLink
 *   isPictureAsLinkTo="/custom-link"
 *   imageComponent={CustomImage}
 *   linkComponent={CustomLink}
 * />
 **/
export const ImageCarousel = <I extends ElementType = 'img', L extends ElementType = 'a'>({
  btnIconCarousel,
  buttonCarouselClassname,
  className,
  contentClassname,
  images,
  isPictureAsLink = false,
  isPictureAsLinkTo,
  itemClassname,
  keyName,
  onCurrentSlide,
  onNext,
  onPrev,
  options,
  showNavigation = true,
  imageComponent,
  linkComponent,
  ...props
}: Props<I, L>) => {
  const [api, setApi] = useState<CarouselApi>()
  const isManyItems = images.length > 1
  const imageRef = useRef<HTMLImageElement | null>(null)

  const ImageComponent = imageComponent || 'img'
  const LinkComponent = linkComponent || 'a'

  useEffect(() => {
    if (!api) {
      return
    }

    const preventEdgeScrolling = function (api: CarouselApi) {
      if (!api) {
        return
      }

      const { limit, location, offsetLocation, scrollBody, scrollTo, target, translate } =
        api.internalEngine()

      let edge: null | number = null

      if (limit.reachedMax(target.get())) {
        edge = limit.max
      }
      if (limit.reachedMin(target.get())) {
        edge = limit.min
      }

      if (edge !== null) {
        offsetLocation.set(edge)
        location.set(edge)
        target.set(edge)
        translate.to(edge)
        translate.toggleActive(false)
        scrollBody.useDuration(0).useFriction(0)
        scrollTo.distance(0, false)
      } else {
        translate.toggleActive(true)
      }
    }

    api.on('scroll', preventEdgeScrolling)
  }, [api])

  const handleOnImageLoad: ReactEventHandler<HTMLImageElement> = e => {
    if (e.currentTarget.naturalHeight > e.currentTarget.naturalWidth) {
      e.currentTarget.style.width = 'auto'
      e.currentTarget.style.height = '100%'
    }
  }

  return (
    <Carousel
      className={cn(s.carousel, className)}
      dotsClassname={cn(s.dots)}
      options={{
        containScroll: 'trimSnaps',
        skipSnaps: false,
        watchDrag: isManyItems,
        ...options,
      }}
      setApi={setApi}
      showDotsPagination={isManyItems}
      {...props}
    >
      <CarouselContent className={cn(contentClassname)}>
        {images?.map((image, i) => {
          const imgProps = {
            height: 'height' in image ? image.height : 300,
            src: '',
            width: 'width' in image ? image.width : 300,
          }

          if (keyName === 'filter' && 'filter' in image) {
            imgProps.src = image.filter || ''
          } else if (keyName === 'image' && 'image' in image) {
            imgProps.src = image.image || ''
          } else if ('url' in image) {
            imgProps.src = typeof image.url === 'string' ? image.url : ''
          }

          const ImageElement = (
            <ImageComponent
              alt={`Image-${i + 1}`}
              className={s.photo}
              onLoad={handleOnImageLoad}
              ref={imageRef}
              {...imgProps}
            />
          )

          return (
            <CarouselItem className={cn(itemClassname, s.item)} key={i}>
              <div className={s.itemContainer}>
                <div className={s.picture}>
                  {isPictureAsLink && isPictureAsLinkTo ? (
                    <LinkComponent href={isPictureAsLinkTo}>{ImageElement}</LinkComponent>
                  ) : (
                    ImageElement
                  )}
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      {showNavigation && isManyItems && (
        <>
          <CarouselPrevious
            btnClassName={btnIconCarousel}
            className={cn(buttonCarouselClassname, s.navigationPrev)}
            onPrev={onPrev}
          />
          <CarouselNext
            btnClassName={btnIconCarousel}
            className={cn(buttonCarouselClassname, s.navigationNext)}
            onNext={onNext}
          />
        </>
      )}
    </Carousel>
  )
}
