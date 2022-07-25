//object distructuring

const brand = {
    brandName: "Artcell",
    famousSong: "Duto manchitro",
    year: "2009",
    anotherSong: "Kew kothay vhalo nai"
};

// const brandName = brand.brandName;
// const famousSong = brand.famousSong;
// const year = brand.year;
// const anotherSong = brand.anotherSong;

// console.log(brandName);
// console.log(famousSong);
// console.log(year);
// console.log(anotherSong);

const {brandName, famousSong, year, ...newObj} = brand;

console.log(brandName);
console.log(famousSong);
console.log(year);
console.log(newObj);