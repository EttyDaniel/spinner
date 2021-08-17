const arr = ['|   ','/   ','-   ','\\   ','|   ','/   ','-   ','\\   ','|   ','\n'];
let delay = 100;
for (let c of arr) {
  setTimeout(() => {
    process.stdout.write('\r' + c);
  }, delay);
  delay += 200;
}