---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Odoo Development"
  text: "Learn today, work tomorrow!"
  image:
    src: https://i.imgur.com/mMGoNyq.png
    alt: odoo-logo-documentation-uz
  actions:
    - theme: brand
      text: Quick Start
      link: /quick-start/index
    - theme: alt
      text: Tutorials
      link: /tutorials/index
    - theme: alt
      text: API Reference
      link: /api-reference/index

features:
  - icon: 🚀
    title: Qulay
    details: O'rganish va foydalanish uchun qulay yozilgan
  - icon: 🔄
    title: Yangilanuvchan
    details: Doimiy yangilanib, ma'lumotlar boyitiladi
  - icon: 🧑🏻‍💻
    title: Hamjamiyat
    details: Tashqi foydalanuvchilar o'z xissasini qo'shish imkoniyati
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/zedcentury.png',
    name: 'Asliddin Maxmudov',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zedcentury' },
      { icon: 'twitter', link: 'https://twitter.com/zedcentury' },
      { icon: 'youtube', link: 'https://youtube.com/zedcentury' },
    ]
  },
]
</script>

<h2 style="text-align: center">Our team</h2>

<VPTeamMembers size="small" :members="members" />
