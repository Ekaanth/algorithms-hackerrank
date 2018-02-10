function cavityMap(grid) {
  cavity = grid.map(g => {
    let gridArray = g.split('');
    gridArray.map(Number);
    for (let i = 0; i < gridArray.length; i++) {
      gridArray[i] = parseInt(gridArray[i]);
      if (gridArray[i - 1] !== undefined && gridArray[i + 1] !== undefined) {
        if (
          gridArray[i] > gridArray[i - 1] &&
          gridArray[i] > gridArray[i + 1]
        ) {
          gridArray[i] = 'X';
        }
      }
    }
    return gridArray.join('');
  });
  return cavity;
}
cavityMap(['1112', '1912', '1892', '1234']);
