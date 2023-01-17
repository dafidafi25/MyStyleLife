export function getFormatDate(date) {
  if (!date) date = new Date();

  let d = new Date(date),
    month = d.getMonth(),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (day.length < 2) day = '0' + day;

  return `${monthName[month]} ${day}, ${year}`;
}

// array of month
const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
