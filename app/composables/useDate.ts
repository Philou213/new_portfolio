export const useDate = () => {
  const { locale } = useI18n()

  const formatRelease = (release: string) => {
    if (!release) return ''

    const isoDateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

    if (!isoDateRegex.test(release)) {
      return release
    }

    const date = new Date(release)

    return new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  return { formatRelease }
}