import moment from 'moment';

export default function (value) {
  const isDate = moment(value, true).isValid();

  if (!isDate) {
    return value;
  }

  return moment(value).fromNow();
}
