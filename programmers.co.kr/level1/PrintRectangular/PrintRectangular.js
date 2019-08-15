process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const input = data.split(' ');
  const n = Number(input[0]), m = Number(input[1]);
  for (let y = 0; y < m; y++) {
    console.log('*'.repeat(n));
  }
});