const fs = require("fs");
let data = fs.readFileSync("src/data/yaHalaData.ts", "utf8");

data = data.replace(
  /export const ASSETS = \{[\s\S]*?\};/,
  `export const ASSETS = {
  // Logos
  logoWhite: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTqRvKJkoYVxszFR41DKfuRm6ShNAwnWD-YkEOSawWpqyThpZ50_-H-DDU3rPH_giDdhXZMA1V9tqm0l49Mkw3kztuPk9-GZODEQZnfFIpZqkJEzf6OLh8cMuTW1iqS2gQN1PSgFpU6Rtz0qthynqlxJjLSWF9qiq__SgKrwOw-Ev0mfQD0ZmDHeZM9k6LA_f1kUK8TkTaUqCI2f43oZQ7JgzjIwxw8ieozAq0nwXoyyz8QA4ovQMFhYEummVDC2H9NA",
  logoGreen: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8TWth7WiB4cmFmWQcsDDoHZW_nMBX2sSSNp9eiqM3OzNnSSIVsPjc6vkMRaylM6L5h5H5_-tyrRtzuPw8L6sbTqna5cNgpI2umAQi64ENC0diYtRBFzzHZgauy1QKqZdnQaoHehyu_3Ht71qiXxYjS3PwKhvVxNyFbUqBVqB4YYdjVFNGcuU5AWoJi-EZbSiqIWWgRUBJ7ble4EOsYFXc4x_bWD_OU2rWtoavWxCqnvDBPhJJXuBWwPLnjvuktMDu4Q",
  logoFooter: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_qJwNI1Rkr7hwxJGBaIRCQOkiNBxtef7dMPdBf0xBGnA5HhoKd6uM4fGXcmVgKJIe1OuCOHt68ykqcsTrdp0O3jiRC60veeiOJ1zGLQ1IkRVRIKdkX-y82ubGZqL3UkUK8Ezl_0zjf9k4kbt8uqm-5fA3Za9NH0bu-u8wtgMMSJcA2s_Mfoqv98H1pzr2vny6r1LPTpnFACjidqmV--wIScBVxAQ3-mJHjvia29bVLnl_744fq9MBqCyH43RaPCcQtA",
  
  // Base Layout
  patternTexture: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUXSgp6ZkK8JVZIWwomwX8YCIqp6rXwzbMIsx74RVG1RJwE-G6wKQHRjp_DOb-ajHe3X5hIncyXS5U7TXhkm_HHoYR3WHg5a8CwMACtcv9iXKWXbp5q20uM4qJufzhEfcwp2GU_awPG0NkcU35dK_PKtXN1rjgdYLDgG55b2-G7FgsEMxBatQ6GyCsllIhdmD_9Iv239jIpNfZdg0FrI5xV4cITj-W0UHi8hcaFBbcV_2ca7Bu6npZ4T_5JrTGag69kw",
  footerTexture: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaugxfjuP8ulrg9TzRPxbAQF1qjrb7wJhQiIgtXIq4h8vUYfWDoHZHbAv8SVjl5INaMay63xMajA2FhoZXgRwW1-qXvZg6zYiK3Upt3rr-7NPJy4vM8qHhbTLJ8T1Eka09ujMmnnt9H9GQgW9UrozivqXrD6zgbjdQLcaHperoLFqV98zcwYfSZ7c4W9eqXe3qs22L7ZTZ98_Rt81CpyGgGlCyeZEqyEaKtkOYlR6AteNTaE7n0SdaMc7Dc-SInSqaCA",
  experienceStone: "/yh-green-experience-2.jpg",

  // Sections
  heroBg: "/STAI0063_005.Explore_the_wooden_balconies_and_historic_buildings_in_Historic_Jeddah.jpg",
  programsHero: "/yh-green-experience-1.jpg", 
  
  // Beyond the Classroom Experiences
  historicJeddah: "https://images.unsplash.com/photo-1627471249718-4794e7728639?auto=format&fit=crop&q=80&w=1200", 
  alUlaHeritage: "https://images.unsplash.com/photo-1667086815309-fa936dae8a7f?auto=format&fit=crop&q=80&w=1200", 
  bujairiHero: "https://images.unsplash.com/photo-1582236932454-0eb47d04bc53?auto=format&fit=crop&q=80&w=1200", 

  // Editorials
  diriyahNights: "https://images.unsplash.com/photo-1629705353106-9635b7ffb5f0?auto=format&fit=crop&q=80&w=1200", 
  saudiCoffee: "https://images.unsplash.com/photo-1620025732959-1e2474586db7?auto=format&fit=crop&q=80&w=1200", 
  coastalSea: "https://images.unsplash.com/photo-1616428787754-00ee94c5017e?auto=format&fit=crop&q=80&w=1200", 

  // About Pages
  aboutBg: "/yh-green-about.jpg",
  foundersEditorial: "https://images.unsplash.com/photo-1540960591738-f1f0a20e2e92?auto=format&fit=crop&q=80&w=1200", 
  teamCinematic: "https://images.unsplash.com/photo-1681283626786-bb571a7d65db?auto=format&fit=crop&q=80&w=1600", 
  
  // Curriculum
  curriculumCulture: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1600", 
  finalCTA: "https://images.unsplash.com/photo-1551041777-ed277b8dd348?auto=format&fit=crop&q=80&w=1600" 
};`
);

data = data.replace(/image: ASSETS\.historicJeddah/g, (match, offset, str) => {
  if (str.substring(Math.max(0, offset - 300), Math.min(str.length, offset + 300)).includes("Coastal Expressions")) {
    return "image: ASSETS.coastalSea";
  }
  return match;
});

fs.writeFileSync("src/data/yaHalaData.ts", data);
