function designerPdfViewer(h, word) {
  wordArray = word.split('')
  alphaIndex = 'abcdefghijklmnopqrstuvwxyz'.split('');
  charCount = word.length
  charWidthArray = []
  
  wordArray.map(char => {
    let index = alphaIndex.indexOf(char)
    charWidthArray.push(h[index])
  })
  return Math.max(...charWidthArray) * charCount;
}
designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], 'abc')