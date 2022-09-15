import dayjs from 'dayjs'

export const getCurrentMonthRange = () => {
  return [dayjs().startOf('month').format('YYYY-MM-DD 00:00:00'), dayjs().endOf('month').format('YYYY-MM-DD 23:59:59')]
}

export const getLastMonthRange = () => {
  return [
    dayjs().add(-1, 'month').startOf('month').format('YYYY-MM-DD 00:00:00'),
    dayjs().add(-1, 'month').endOf('month').format('YYYY-MM-DD 23:59:59'),
  ]
}

export const getCurrentYearRange = () => {
  return [dayjs().startOf('year').format('YYYY-MM-DD 00:00:00'), dayjs().endOf('year').format('YYYY-MM-DD 23:59:59')]
}

export const formatDateRange = (dateRange: string[]) => {
  return [dayjs(dateRange[0]).format('YYYY-MM-DD 00:00:00'), dayjs(dateRange[1]).format('YYYY-MM-DD 23:59:59')]
}
