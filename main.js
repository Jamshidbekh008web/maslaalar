//foydalanuvchi ikki xonalik son kiritadi undan 10 liklar honasidagi sonni oling console.log() ga chiqaring
// ===============================================================
// let son = +prompt('Ikki xonali son kiriting')

// let onlik = son/10 
// console.log(onlik);

//===========================================================================================================================

// MASALA: Vaqtlar oralig‘i
// 📌 Masala sharti

// Bir sutka ichida berilgan ikkita vaqt mavjud.

// Har bir vaqt quyidagicha beriladi:
// H M S

// H — soat (0 ≤ H ≤ 23)
// M — minut (0 ≤ M ≤ 59)
// S — sekund (0 ≤ S ≤ 59)

// 👉 Sizdan talab qilinadi:
// Ikki vaqt orasidagi farqni sekundlarda toping.

// ⚠️ Muhim:

// Ikkinchi vaqt birinchidan oldin kelmaydi
// Ya’ni: t2 ≥ t1

// 🎯 Maqsad

// 👉 Natijada bitta son chiqishi kerak — bu ikki vaqt orasidagi sekundlar soni

// 🧠 Yechim g‘oyasi (eng sodda usul)

// Vaqtni to‘g‘ridan-to‘g‘ri ayirish qiyin ❌
// Shuning uchun biz:

// ✅ Har bir vaqtni sekundga aylantiramiz
// =============================================================

// let h = +prompt('vahtni kiriting (0dan 24gacha bolgan sonni kiriting!)')
// let h2 = +prompt('2-vahtni kiriting (oldingi kiritganingizdan kichik bolsin!)')
// let s = h*60*60;
// let s2 =h2*60*60;
// let sa=s-s2
// console.log(sa);

//===================================================================================================================

// sizda bitta musbat son bor siz uning 17% qiymatni nechaga teng ekanligini console ga chiqaring
// =================================================

// let son = +prompt('son kiriting')
// let a = (son*17)/100;
// console.log(`${a} bu siz kiritgan son 17%i`);

//========================================================================================================================

// Toq yoki juft (faqat operator bilan)
// let n = 7;
// â“ Shart:
// ðŸ‘‰ if ishlatmasdan:

// "toq"
// "juft"

// chiqaring
// ======================================================================
// let n = +prompt('son kiriting')
// console.log((n % 2 &&  'toq son') || 'juft son')

//==========================================================================================================================

//  3 ga boâ€˜linadimi?
//  let n = 15;
//  ðŸ“Œ Shart:

// if ishlatmasdan
// "yes" yoki "no" chiqaring
// ======================================================================

let n = +prompt('son kiriting')

console.log((n/3 && 'no')|| 'yes');
