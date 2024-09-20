export function toh(n, source, helper, destination) {
  if (n === 0) return;

  toh(n - 1, source, destination, helper);
  console.log(`[${n}] => [${source} - ${destination}]`);
  toh(n - 1, helper, source, destination);
}
