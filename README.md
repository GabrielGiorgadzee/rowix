პროეექტის ინსტალაცია:

1. npm create vite@latest
2. Template: React => JavaScript
3. npm install
4. npm run dev

============================================

tailwind css ინსტალაცია:

1. npm install tailwindcss @tailwindcss/vite
2. ვამატებთ კოდს vite.config.js-ში:
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
tailwindcss(),
],
})

3. @import "tailwindcss" index.css კოდში

============================================

shadcn/ui ინსტალაცია:

1. ვამატებთ jsconfig.json-ში კოდს:
   {
   "files": [],
   "references": [
   {
   "path": "./tsconfig.app.json"
   },
   {
   "path": "./tsconfig.node.json"
   }
   ],
   "compilerOptions": {
   "baseUrl": ".",
   "paths": {
   "@/_": ["./src/_"]
   }
   }
   }

2. npm install -D @types/node
3. საჭირო კოდი vite.config.js-ში:
   import path from "path"
   import tailwindcss from "@tailwindcss/vite"
   import react from "@vitejs/plugin-react"
   import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
})

4. npx shadcn@latest init 5.
5. Which color would you like to use as base color? › Neutral
6. ვამატებთ კომპონენტს კოდით:
   npx shadcn@latest add button

============================================

Anime.js ინსტალაცია:

1. npm install animejs
2. იმპორტი:
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

============================================
Swiper ინსტალაცია:

1. npm install swiper
2. // import Swiper JS
   import Swiper from 'swiper';
   // import Swiper styles
   import 'swiper/css';

const swiper = new Swiper(...);

============================================

სხვა საჭირო icon-ების ინსტალაცია:

1. npm install @headlessui/react
2. npm install @heroicons/react
3. npm install tw-animate-css
