import { ComponentProps, ElementType } from 'react'

import s from './Photo.module.scss'

import { cn } from '@meetgram/utils'
import { ImgOutline } from '../../assets'
import { DefinePropertyType } from '../../types'
import { Button } from '../button'
import { Delete } from './Delete'

type PhotoType = 'empty' | 'fill'

type RestProps = {
  alt: string
  src: string
}

type DefineRestProps<T extends PhotoType> = T extends 'empty'
  ? Partial<DefinePropertyType<RestProps, undefined>>
  : RestProps

type Props<T extends PhotoType = 'fill', C extends ElementType = 'img'> = {
  containerClassname?: string
  iconClassname?: string
  iconContainerClassname?: string
  imgClassname?: string
  /** Callback function triggered when the delete button is clicked. */
  onDelete?: () => void
  /**
   * Specifies whether the component should display an image or a placeholder.
   * - `empty`: Displays a placeholder icon (default behavior).
   * - `fill`: Displays the image using the `src` and `alt` props.
   */
  type?: T
  /**
   * The shape of photo.
   */
  variant?: 'round' | 'square'
  /**
   * The element or component to render for the image.
   * Default is `'img'`.
   */
  component?: C
} & DefineRestProps<T> &
  Omit<ComponentProps<C>, keyof DefineRestProps<T>>

/**
 * A reusable, polymorphic photo component for displaying images or placeholders.
 *
 * @template T The type of the photo component (`empty` or `fill`).
 * @template C The type of the element or component to render for the image.
 * @param {Props<T, C>} props The properties for the `Photo` component.
 *
 * @example
 * // Render a photo using a custom Next.js Image component
 * import NextImage from 'next/image';
 * <Photo
 *   alt="Next.js Example"
 *   src="/example.jpg"
 *   component={NextImage}
 *   width={100}
 *   height={100}
 * />
 */
export const Photo = <T extends PhotoType = 'fill', C extends ElementType = 'img'>({
  alt = '',
  imgClassname,
  containerClassname,
  iconClassname,
  iconContainerClassname,
  onDelete,
  src = '',
  type = 'fill' as T,
  variant = 'round',
  component,
  ...rest
}: Props<T, C>) => {
  const ImgComponent = component || 'img'

  return (
    <div className={cn(s.container, containerClassname)}>
      {type === 'empty' ? (
        <div className={cn(s.iconContainer, s[variant], iconContainerClassname, imgClassname)}>
          <ImgOutline className={cn(s.icon, iconClassname)} />
        </div>
      ) : (
        <>
          <ImgComponent
            alt={alt}
            className={cn(s[variant], imgClassname)}
            src={src}
            {...rest}
          />
          {onDelete && (
            <Button className={s.delete} onClick={onDelete} variant={'text'}>
              <Delete className={cn(s.deleteIcon, iconClassname)} />
            </Button>
          )}
        </>
      )}
    </div>
  )
}
