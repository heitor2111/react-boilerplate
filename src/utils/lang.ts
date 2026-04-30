type LocaleFormat = 'posix' | 'bcp47' | 'dayjs'

export const getLocale = (format: LocaleFormat = 'posix') => {
  const separator = format === 'posix' ? '_' : '-'

  const locale = import.meta.env.VITE_DEFAULT_LOCALE || navigator.language || 'pt-BR'

  const parts = locale.split(/[-_]/)

  if (parts.length < 1 || parts.length > 2) {
    throw new Error(`Invalid locale format: ${locale}`)
  }

  parts[0] = parts[0].toLowerCase()

  if (parts[1]) {
    parts[1] = format === 'dayjs' ? parts[1].toLowerCase() : parts[1].toUpperCase()
  }

  return parts.join(separator)
}
