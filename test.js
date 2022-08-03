var bookPrices = [120, 190, 230, 338, 126, 189, 326, 200, 280];

for (var i = 0; i < bookPrices.length; i++) {
  var bookPrice = bookPrices[i];
  if (bookPrice > 200) {
    continue;
  }
  console.log(bookPrice);
}
