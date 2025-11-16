React პროექტის ინსტალაცია Vite ტექნოლოგიის გამოყენებით:

1. npm create vite@latest
2. ვირჩევთ Template: React => Javascript
3. npm run dev

===============================================================

Tailwind Css ინსტალაცია:

1. npm install tailwindcss @tailwindcss/vite
2. @import "tailwindcss" index.css ფაილში;
3. vite.config.js ფაილში პლაგინის დამატება:
import { defineConfig } from 'vite'
<!-- import tailwindcss from '@tailwindcss/vite' -->

export default defineConfig({
plugins: [

<!-- tailwindcss(), -->

],
})

===============================================================

Shadcn/ui components ინსტალაცია და იმპორტი:

1. jsconfig.json ფაილში კოდის ჩამატება:
   {
   "files": [],
   "references": [],
   <!-- "compilerOptions": {
   "baseUrl": ".",
   "paths": {
   "@/_": ["./src/_"]
   }
   } -->
   }
2. npm install -D @types/node
3. vite.config.js ფაილში კოდის ჩამატება:
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

4. npx shadcn@latest init
5. Which color would you like to use as base color? › Neutral
6. button-ის დამატება:
   npx shadcn@latest add button
7. import { Button } from "@/components/ui/button";
   import { Card } from "@/components/ui/card";

===============================================================

Swiper ინსტალაცია და იმპორტი:

1. npm i swiper
2. იმპორტი:
   import { Swiper, SwiperSlide } from "swiper/react";
   import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
   import "swiper/css";
   import "swiper/css/pagination";
   import "swiper/css/navigation";
   import "swiper/css/effect-fade";

===============================================================

Anime.js ინსტალაცია და იმპორტი:

1. npm install animejs
2. <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script> index.html ფაილში

===============================================================

Icon იმპორტისთვის

1. npm install lucide
2. import {
   Code,
   Palette,
   Search,
   Smartphone,
   Globe,
   Database,
   Award,
   Users,
   Target,
   Zap,
   } from "lucide-react";
