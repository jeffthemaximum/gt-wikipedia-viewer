// https://bobbyhadz.com/blog/javascript-get-yesterday-date-yyyy-mm-dd
function padTo2Digits (num) {
  return num.toString().padStart(2, '0')
}

function formatDate (date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate())
  ].join('-')
}

export function getFormattedYesterday () {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return formatDate(yesterday)
}

export function formattedToParts (formatted) {
  const parts = formatted.split('-')
  if (parts.length !== 3) {
    return { day: '', month: '', year: '' }
  }
  const [year, month, day] = parts
  return { day, month, year }
}
