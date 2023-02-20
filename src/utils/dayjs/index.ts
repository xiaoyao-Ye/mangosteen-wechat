import dayjs from 'dayjs'

const FormatStartOfDay = 'YYYY-MM-DD 00:00:00'
const FormatEndOfDay = 'YYYY-MM-DD 23:59:59'
const FormatCurrentDay = 'YYYY-MM-DD HH:mm:ss'

export const getCurrentMonthRange = () => {
  return [dayjs().startOf('month').format(FormatStartOfDay), dayjs().endOf('month').format(FormatEndOfDay)]
}

export const getLastMonthRange = () => {
  return [
    dayjs().add(-1, 'month').startOf('month').format(FormatStartOfDay),
    dayjs().add(-1, 'month').endOf('month').format(FormatEndOfDay),
  ]
}

export const getCurrentYearRange = () => {
  return [dayjs().startOf('year').format(FormatStartOfDay), dayjs().endOf('year').format(FormatEndOfDay)]
}

export const formatDateRange = (dateRange: string[]) => {
  return [dayjs(dateRange[0]).format(FormatStartOfDay), dayjs(dateRange[1]).format(FormatEndOfDay)]
}

/** YYYY-MM-DD hh:mm:ss */
export const formatDate = (date: Date = new Date()) => {
  return dayjs(date).format(FormatCurrentDay)
}
