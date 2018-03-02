function createBinaryString(nMask) {
  // nMask must be between -2147483648 and 2147483647
  // Source: MDN
  for (
    var nFlag = 0, nShifted = nMask, sMask = '';
    nFlag < 32;
    nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1
  );
  return sMask;
}

function flippingBits(N) {
  binaryString = createBinaryString(N).split('');
  flip = binaryString.map(bit => (bit == 1 ? (bit = 0) : (bit = 1)));
  return parseInt(flip.join(''), 2);
}
flippingBits(1);
