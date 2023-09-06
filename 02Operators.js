var sellingPrice = 299;
var listingPrice = 599;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice * 100);

console.log(typeof discountPercent);

var displayDiscountPercent = Math.round(discountPercent);

console.log(displayDiscountPercent + "% off");

