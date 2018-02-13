function beautifulBinaryString(b) {
  count = 0;
  binary = b.split('');
  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === '1' && binary[i + 1] === '0' && binary[i - 1] === '0') {
      binary[i + 1] = '1';
      count++;
    }
  }
  return count;
}
// beautifulBinaryString('0101010');
beautifulBinaryString('0100101010');
