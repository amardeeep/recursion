//create fibonacci using loop
function fib_loop(length) {
  if (length == 1) {
    return (fib = [0]);
  } else if (length == 2) {
    return (fib = [0, 1]);
  } else if (length > 2) {
    arr = [0, 1];
    for (let i = 2; i < length; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
  }
}
//create fibonacci using recursion
function fib_recu(length) {
  if (length == 2) {
    return (fib = [0, 1]);
  } else if (length > 2) {
    arr = fib_recu(length - 1);
    arr[length - 1] = arr[length - 2] + arr[length - 3];
    return arr;
  }
}
