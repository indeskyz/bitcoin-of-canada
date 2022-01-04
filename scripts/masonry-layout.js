let magicGrid = new MagicGrid({
  container: '.news-container',
  animate: true,
  gutter: 20,
  items: 28,
  useMin: true,
  maxColumns: 7
});

magicGrid.listen();
magicGrid.positionItems();