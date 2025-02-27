function groupGifts(gift, size) {
  return gift.reduce((packages, item) => {
    if (
      !packages.length ||
      packages[packages.length - 1].reduce((a, b) => a + b, 0) + item > size
    ) {
        packages.push([item]);
    } else {
      packages[packages.length - 1].push(item);
    }
    return packages;
  }, []);
}

const gifts = [1, 2, 3, 4, 5];
const size = 5;
console.log(groupGifts(gifts, size));

const gifts1 = [2, 2, 3, 3, 4];
const size1 = 6;
console.log(groupGifts(gifts1, size1));

const gifts3 = [];
const size3 = 3;
console.log(groupGifts(gifts3, size3));
