/**
 * Returns a human-readable relative time string (e.g., "2 hours ago")
 * based on the difference between the current time and the given timestamp.
 *
 * @param {string | undefined} lang - The language code for the relative time format (e.g., "en", "fr").
 *                                     If undefined, the default locale will be used.
 * @param {string} createdAt - The timestamp of the event in ISO 8601 format or any valid date string.
 * @example
 * // For an event that happened 3 days ago in French:
 * getTimeAgo('fr', '2025-01-07T12:00:00Z'); // Returns "il y a 3 jours"
 */
export const getTimeAgo = (lang: string | undefined, createdAt: string) => {
  const date = new Date(createdAt)
  const timeMs = date.getTime()
  const nowUTC = new Date().getTime()
  const deltaSeconds = Math.round((nowUTC - timeMs) / 1000)
  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ]
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
  const divisor = unitIndex > 0 ? cutoffs[unitIndex - 1] : 1
  const rtf = new Intl.RelativeTimeFormat(lang, {
    numeric: 'always',
    style: 'long',
  })

  return rtf.format(-Math.round(Math.abs(deltaSeconds) / divisor), units[unitIndex])
}
