export default function (value) {
  const len = value.length;
  const max = 200;
  /* eslint-disable no-nested-ternary */
  return len > max ? `${value.substr(0, max - 2)} [...]` : len <= max ? value : null;
}
