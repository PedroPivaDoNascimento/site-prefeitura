### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:03:59*

**[REMOVED]**
```
(from line ~1)
@import "tailwindcss";

```
**[ADDED]**
```
1     @tailwind base;
2     @tailwind components;
3     @tailwind utilities;
```
**[REMOVED]**
```
(from line ~5)
:root {
  --background: #ffffff;
  --foreground: #171717;

```
**[ADDED]**
```
5     /* Modo Alto Contraste (eMAG / WCAG) */
6     .high-contrast {
7       --background: #000000 !important;
8       --foreground: #FFFFFF !important;
```
**[REMOVED]**
```
(from line ~11)
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

```
**[ADDED]**
```
11    .high-contrast body {
12      background-color: #000000 !important;
13      color: #FFFFFF !important;
```
**[REMOVED]**
```
(from line ~16)
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }

```
**[ADDED]**
```
16    .high-contrast a, 
17    .high-contrast button {
18      border: 2px solid #FFFFFF !important;
```
**[REMOVED]**
```
(from line ~21)
body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;

```
**[ADDED]**
```
21    .high-contrast .bg-uba-blue,
22    .high-contrast .bg-uba-darkBlue {
23      background-color: #000000 !important;
24      color: #FFFFFF !important;
25      border: 1px solid #FFFFFF;
```
**[ADDED]**
```
27    
28    .high-contrast .bg-uba-red {
29      background-color: #FFFF00 !important;
30      color: #000000 !important;
31    }
32    
33    /* Foco visível para acessibilidade */
34    *:focus-visible {
35      outline: 3px solid #00529B;
36      outline-offset: 2px;
37    }
38    
39    .high-contrast *:focus-visible {
40      outline: 3px solid #FFFF00;
41      outline-offset: 2px;
42    }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/tailwind.config.js
*Saved at: 19/08/2026, 17:03:48*

**[REMOVED]**
```
(from line ~3)
  content: [],

```
**[ADDED]**
```
3       content: [
4         "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
5         "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
6         "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
7       ],
```
**[REMOVED]**
```
(from line ~9)
    extend: {},

```
**[ADDED]**
```
9         extend: {
10          colors: {
11            uba: {
12              blue: "#00529B",
13              darkBlue: "#003A70",
14              red: "#D9381E",
15              darkRed: "#B92D18",
16              offWhite: "#F8FAFC",
17              text: "#1E293B",
18            },
19          },
20        },
```
**[REMOVED]**
```
(from line ~23)
}


```
**[ADDED]**
```
23    };
```

---

