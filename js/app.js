//1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
//va ularning yig’indisini qaytarib bersin.

//  1. function sum (x,y) {
//     return x + y;
// }

//2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
//o’girib beradigan funksiya yasang.

// 2. 
//   function toSekunds(minutes) {
//   let seconds = minutes * 60;
//   return seconds;
// }

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// 3.
// function nextInteger(int) {
//   return nextInteger + 1;
// }


// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// 4. 
// function uchburchakYuzi(asos, balandlik) {
//   let Yuz = (asos * balandlik) / 2
//   return Yuz
// }
// uchburchakYuzi()

// console.log(uchburchakYuzi(2,3))

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// 5.
//   function ageToDays(age) {
//     let yosh = (2023 - age) * 365
//     return yosh
//   }

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing
// kub(3) => 27
// kub(5) => 125
// kub(10) => 1000

// 6.
// function makeDegree (number) {
//    let kub = number ** 3
//     return kub
// }

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// 7.
// function firstElement(arr) {
//   if (arr.length > 0) {
//       return arr[0];
//   } else {
//       return undefined;
//   }
// }

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

//8.
// function sum (x,y) {
  //     return x * y;
  // }

//   9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.

// 9.
// function hourToSekunds(hour) {
//   let givenHour = (hour / 60) / 60
//   return givenHour
// }

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

//  10.
// function uchinchiTomon(tomon1, tomon2) {
//    let uchunchiTomon = (tomon1 + tomon2) - 1
//    return uchinchiTomon
// }

// uchunchiTomon()
//  console.log(uchinchiTomon(1,2))

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.


// 11.
// function qoldiq(son1, son2) {
//   let qoldiq = son1 % son2
//    return qoldiq
// }

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// 12.
//   function turtburchakYuzi(boyi, eni) {
//     let yuz = boyi * eni
//     return yuz
//   }

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// 13.
// function stringQoshish(a) {
//  let fullSentence = "Something" + " " + a
//  return fullSentence
// }

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) => 25
// kvadrat(9) => 81
// kvadrat(100) => 10000

// 14.

//   function makeDegree (number) {
//       let kvadrat = number ** 2
//       return kvadrat
//    }

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

//   15.
//  function noldan(raqam) {
//   if (raqam < = 0) {
//     return true
//   } else {
//     return false
//   }
//  }

//  100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") => "<div></div><div></div>"
// Namuna("p*1") => "<p></p>"
// Namuna("li*3") => "<li></li><li></li><li></li>"

// 100.
//   function result (a) {
   

//   }
  



// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) => 6
// // 1 + 2 + 3 = 6
// namuna(10) => 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) => 28
// // 1 + 2 + 3 + ... + 7 = 28

// 101.

//   function butunSonlarYigindisi(n) {
//   let yigindi = 0;
//   for (let i = 1; i <= n; i++) {
//       yigindi += i;
//   }
//   return yigindi;
// }



// 102. Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) => true
// Namuna(4, { min: 4, max: 5 }) => true
// Namuna(4, { min: 6, max: 10 }) => false
// Namuna(5, { min: 5, max: 5 }) => true

// 102.
//    function sonMinMaxOraligi(son, obyekt) {
//   let min = obyekt.min;
//   let max = obyekt.max;
//   if (son >= min && son <= max) {
//       return true;
//   } else {
//       return false;
//   }
// }


// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) => true
// Namuna(3) => false
// // 3^2 = 9
// Namuna(6) => true
// // 6^2 = 36 (ends with 6)
// Namuna(95) => false
// // 95^2 = 9025 (does not end with 95)

// 103.

// function kvadratningOxirigi(son) {
//   let natija = son * son;
//   if (natija === son) {
//       return true;
//   } else {
//       return false;
//   }
// }



// 104. Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) => [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) => [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) => [5, 5, 5, 5, 5]

// 104.

// function indexliMassiv(massiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//       yangiMassiv.push(massiv[i] + i);
//   }
//   return yangiMassiv;
// }



// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) => ["water"]
// Namuna(["fanta", "cola"]) => []
// Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// "beer", "water"]

// 105.

// function ichimliklar(massiv) {
//   let ichimlar = [];
//   for (let i = 0; i < massiv.length; i++) {
//       if (massiv[i] !== "cola" && massiv[i] !== "fanta") {
//           ichimlar.push(massiv[i]);
//       }
//   }
//   return ichimlar;
// }



// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) => 3
// Namuna(56) => 2
// Namuna(7154) => 4
// Namuna(61217311514) => 11
// Namuna(0) => 1

// 106.
// function raqamlarSoni(son) {
//   let raqamlar = son.toString().split("");
//   return raqamlar.length;
// }
 



// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) => 321
// Namuna("001") => 100
// Namuna(999) => 999
// Namuna(784) => 874



// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) => 7
// Namuna(5, 9) => 9
// Namuna(5, 9) => 5


// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) => true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) => true
// Namuna(1652) => false




// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") => 6
// Namuna("JMZWCneOTFLWYwBWxyFw") => 14
// Namuna("mqeytbbjwqemcdrdsyvq") => 0


// function sum(number) {
//   let i = 0
//   for (let i = 1;  i <= number.length; i ++) {
//     const result = number + "0000000" + i  ;
//        return result
//   }
// }
// console.log(sum(5));
  

// function sumWithoutLeastNumber(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return 0; // Return 0 if the input is not an array or if it's an empty array
//   }

//   // Find the smallest number in the array
//   const smallestNumber = Math.min(...arr);

//   // Calculate the sum of all numbers excluding the smallest number
//   const sum = arr.reduce((acc, num) => {
//     if (num !== smallestNumber) {
//       return acc + num;
//     }
//     return acc;
//   }, 0);

//   return sum;
// }

// const numbers = [4, 9, 2, 1, 7, 6];
// const result = sumWithoutLeastNumber(numbers);
// console.log(result); // Output: 28 (4 + 9 + 2 + 7 + 6 = 28)

