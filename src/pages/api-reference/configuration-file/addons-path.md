# addons_path

## 📌 Ta’rif

`addons_path` opsiyasi Odoo’ga **qaysi papkalardan modullarni (addons) qidirish kerakligini** bildiradi.
Odoo ishga tushganda shu papkalardagi barcha modullarni yuklaydi va ularni tizimda ko‘rsatadi (o‘rnatish, yangilash yoki
o‘chirish jarayonida).

Standart holda Odoo o‘zining ichki `odoo/addons/` papkasida asosiy modullarni saqlaydi. Lekin real loyihalarda ko‘pincha
qo‘shimcha (custom) yoki uchinchi tomon modullari uchun alohida papkalar qo‘shiladi.

## 📂 Misol

```
[options]
addons_path = /opt/odoo/odoo/addons,/opt/odoo/custom/addons
```

- `odoo/odoo/addons` → Odoo’ning standart modullari
- `odoo/custom/addons` → Siz yoki uchinchi tomon ishlab chiqqan maxsus modullar

👉 Bir nechta papkalarni yozganda **vergul bilan ajratiladi** va odatda **bo‘sh joy qoldirilmaydi**.

## 🔑 Muhim jihatlar

- **Tartib muhim**: Odoo modullarni ko‘rsatilgan ketma-ketlikda qidiradi. Agar ikki papkada bir xil texnik nomli modul
  bo‘lsa, ro‘yxatda oldin yozilgan papkadagi modul ustunlik qiladi.
- Yo‘llar **absolyut** (tavsiya etiladi, ayniqsa serverda) yoki nisbiy (lokal ishlab chiqishda qulay) bo‘lishi mumkin.
- Papkalar soniga cheklov yo‘q.
- Noto‘g‘ri yo‘l ko‘rsatilsa, Odoo modulni topa olmaydi va u tizimda ko‘rinmaydi.

## ⚙️ Amaliy tavsiyalar

- **Maxsus modullarni** albatta alohida papkada saqlang (`/odoo/custom/addons`) — standart modullar bilan
  aralashtirmang.
- **Serverda** ishlatayotganda doim **absolyut yo‘l** yozing, aks holda servis ishga tushganda modul yo‘llarini
  topolmasligi mumkin.
- Docker yoki ko‘p muhitli (staging/production) ishlarda — `custom_addons` papkasini alohida mount qilib,
  `addons_pathga` qo‘shing.
- Bir nechta loyiha ustida ishlayotgan bo‘lsangiz, har bir loyihaga alohida `addons` papka ajrating.

## 🛠️ Buyruq satridan ishga tushirish

`addons_path` ni faqat konfiguratsiya faylida emas, balki bevosita ishga tushirishda ham berish mumkin:

```
odoo-bin -c /etc/odoo.conf --addons-path=/opt/odoo/odoo/addons,/opt/odoo/custom/addons
```

## ✅ Xulosa

`addons_path` — bu Odoo modullarni qaysi papkalardan yuklashini belgilovchi parametr. Har doim Odoo’ning standart papkasini va qo‘shimcha papkalarni qo‘shish kerak. To‘g‘ri tartib va struktura bilan ishlash modul boshqaruvini yengillashtiradi va to‘qnashuvlarning oldini oladi.
