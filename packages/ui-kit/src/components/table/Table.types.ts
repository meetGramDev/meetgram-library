export const enum SortDirection {
  DESC,
  ASC,
}

export interface ITableHead<K extends string = string, L extends string = string> {
  id: string | number
  key: K
  label: L
}
