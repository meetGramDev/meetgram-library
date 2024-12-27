'use client'
import type { FieldNamesMarkedBoolean, FieldPath, FieldValues } from 'react-hook-form'

import { useEffect } from 'react'

/**
 * Synchronizing zod errors when language changed
 * @param fields object of fields that have been touched
 * @param locale utilizes as a trigger to activate an effect. If not passed, locale from next router is used
 * @param callback invokes on each field and pass field name as string
 */
export function useChangeZodErrorLang<
  TFieldValues extends FieldValues = FieldValues,
  TTouchedFields extends TouchedFields<TFieldValues> = TouchedFields<TFieldValues>,
  TFieldName extends FieldPath<TTouchedFields> = FieldPath<TTouchedFields>,
>(fields: TTouchedFields, locale: string, callback: (args: TFieldName) => any): void {
  useEffect(() => {
    for (const [key, isTouched] of Object.entries(fields)) {
      if (isTouched) {
        callback(key as TFieldName)
      }
    }
  }, [locale])
}

type TouchedFields<T extends FieldValues> = Partial<Readonly<FieldNamesMarkedBoolean<T>>>
