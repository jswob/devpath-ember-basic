import { helper } from '@ember/component/helper';

export default helper(function date([date]) {
  let day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

  day = serializeDate(day);
  month = serializeDate(month);

  return `${day}-${month}-${year}`;
});

function serializeDate(date) {
  if (String(date).length < 2) {
    return '0' + date;
  } else {
    return date;
  }
}
