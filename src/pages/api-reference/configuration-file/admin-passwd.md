## Master password nima va nima uchun kerak?

`admin_passwd` — bu **Odoo’ning ma’lumotlar bazasi boshqaruv interfeysini** (Database Manager) himoyalovchi “bosh
kalit”. U orqali quyidagilar faqat ruxsat bilan bajariladi:

- yangi baza yaratish
- mavjud bazani zaxiraga olish (backup)
- bazani qayta tiklash (restore)
- bazani nusxalash yoki o‘chirish

::: warning Eslatma
`admin_passwd` — **Admin (Administrator) foydalanuvchi paroli emas**. Admin foydalanuvchi paroli har bir baza ichida
alohida saqlanadi; `admin_passwd` esa Odoo server darajasida, barcha bazalar uchun umumiy “eshik qo‘riqchisi”.
:::

## Qayerda belgilanadi?

`admin_passwd` 2 ta joyda saqlanishi mumkin.

Agar loyiha conf fayl bilan ishga tushirilsa, shu fayl ichida saqlanadi.

```
[options]
; ... boshqa sozlamalar ...
admin_passwd = 7QmYpT6g9d2GATpT2Y4rNwqj8vFsZJrP  ; kuchli, uzun tasodifiy satr
```

::: warning Muhim
Agar admin_passwd belgilanmasa, ayrim versiyalarda default qiymat bo‘sh yoki juda zaif bo‘lishi mumkin. Har doim
o‘zingiz uzun va murakkab parol qo‘ying.
:::

Agar loyiha conf faylsiz ishga tushirilsa, `~/.odoorc` faylida saqlanadi.

## Qanday o‘rnatiladi yoki yangilanadi?

2 xil usulda o'rnatish mumkin.

1-usul: conf fayliga yozib qo'yish mumkin.

2-usul: loyihani ishga tushirib, browser oynasida `http://<host>:8069/web/database/manager` manziliga kirish orqali
o'rnatish mumkin. Agar master password o'rnatilmagan bo'lsa, quyidagi ogohlantirish chiqadi.

![Set master password](set-master-password-warning.png)

`Set master password` yozuvi bosiladi va master password kiritiladi.

::: tip
Agar loyiha conf fayl bilan ishga tushirilgan bo'lsa, kiritilgan parol shu fayl ichiga heshlangan ko'rinishda saqlanadi.
Aks holda `~/.odoorc` faylining yoziladi.
:::
