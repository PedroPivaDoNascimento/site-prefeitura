### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:04:14*

**[REMOVED]**
```
(from line ~14)
            O que você precisa resolver em Ubá hoje?

```
**[ADDED]**
```
14                O que você precisa resolver em Ubá?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:04:04*

**[REMOVED]**
```
(from line ~14)
            Olá, o que você precisa resolver em Ubá hoje?

```
**[ADDED]**
```
14                O que você precisa resolver em Ubá hoje?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:03:38*

**[REMOVED]**
```
(from line ~14)
            Olá, O que você precisa resolver em Ubá hoje?

```
**[ADDED]**
```
14                Olá, o que você precisa resolver em Ubá hoje?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:03:31*

**[REMOVED]**
```
(from line ~14)
            O que você precisa resolver em Ubá hoje?

```
**[ADDED]**
```
14                Olá, O que você precisa resolver em Ubá hoje?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:03:00*

**[REMOVED]**
```
(from line ~14)
            Sua prefeitura digital em Ubá: rápida, simples e sem filas!

```
**[ADDED]**
```
14                O que você precisa resolver em Ubá hoje?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:02:37*

**[REMOVED]**
```
(from line ~14)
            O que você precisa resolver em Ubá hoje?

```
**[ADDED]**
```
14                Sua prefeitura digital em Ubá: rápida, simples e sem filas!
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 18:01:37*

**[REMOVED]**
```
(from line ~14)
            Olá, o que você precisa resolver em <span className="text-uba-red">Ubá</span> hoje?

```
**[ADDED]**
```
14                O que você precisa resolver em Ubá hoje?
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:57:11*

**[ADDED]**
```
13      --bg-hover: #334155 !important;     /* Slate 700: Fundo de hover */
```
**[ADDED]**
```
57       HOVER: Garantir que estados hover funcionem no modo escuro
58       ========================================== */
59    
60    /* Hover em elementos com bg-uba-offWhite (ex: cards de notícias) */
61    .high-contrast .hover\:bg-uba-offWhite:hover,
62    .high-contrast .hover\:bg-white:hover {
63      background-color: var(--bg-hover) !important;
64      border-color: var(--border-subtle) !important;
65    }
66    
67    /* Hover em elementos com bg-slate-50 */
68    .high-contrast .hover\:bg-slate-50:hover {
69      background-color: var(--bg-hover) !important;
70    }
71    
72    /* ==========================================
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:53:20*

**[ADDED]**
```
15      --text-subtle: #94a3b8 !important;  /* Slate 400: Textos terciários/datas */
```
**[REMOVED]**
```
(from line ~47)
/* Mantemos a identidade, mas com um tom que vibra bem no fundo escuro */

```
**[REMOVED]**
```
(from line ~55)
/* Ajuste dos badges e fundos de ícones */

```
**[ADDED]**
```
55    /* ==========================================
56       TEXTOS: Garantir legibilidade em todos os níveis
57       ========================================== */
58    
59    /* Textos principais (títulos, descrições de serviços) */
60    .high-contrast .text-uba-text,
61    .high-contrast .text-slate-800,
62    .high-contrast .text-slate-700 {
63      color: var(--text-main) !important;
64    }
65    
66    /* Textos com opacidade reduzida (descrições de cards) */
67    .high-contrast .text-uba-text\/80,
68    .high-contrast .text-uba-text\/70,
69    .high-contrast .text-uba-text\/60 {
70      color: var(--text-muted) !important;
71    }
72    
73    /* Textos secundários (categorias, badges) */
74    .high-contrast .text-slate-600 {
75      color: var(--text-muted) !important;
76    }
77    
78    /* Textos terciários (datas, informações auxiliares) */
79    .high-contrast .text-slate-500,
80    .high-contrast .text-slate-400 {
81      color: var(--text-subtle) !important;
82    }
83    
84    /* Badges e fundos de ícones */
```
**[ADDED]**
```
91    /* Links e textos de ação */
92    .high-contrast a:not(.bg-uba-red):not(.logo-container):not(.govbr-icon) {
93      color: var(--text-main) !important;
94    }
95    
96    .high-contrast a:hover:not(.bg-uba-red):not(.logo-container):not(.govbr-icon) {
97      color: var(--focus-ring) !important;
98    }
99    
```
**[REMOVED]**
```
(from line ~113)
  background-color: #ffffff !important; /* Mantém branco puro */
  border: 2px solid #ea580c !important; /* Mantém a borda laranja visível */

```
**[ADDED]**
```
113     background-color: #ffffff !important;
114     border: 2px solid #ea580c !important;
```
**[REMOVED]**
```
(from line ~123)
  background-color: #ffffff !important; /* Mantém branco puro */
  color: #1e40af !important; /* Azul Gov.br original */
  outline: none !important; /* Remove qualquer contorno no modo escuro */
  box-shadow: none !important; /* Remove qualquer sombra no modo escuro */

```
**[ADDED]**
```
123     background-color: #ffffff !important;
124     color: #1e40af !important;
125     outline: none !important;
126     box-shadow: none !important;
```
**[REMOVED]**
```
(from line ~129)
/* Garante que o foco do botão pai não propague para o ícone */

```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:50:51*

**[REMOVED]**
```
(from line ~83)
/* Ícone "br" do Gov.br */

```
**[ADDED]**
```
83    /* Ícone "br" do Gov.br - Mantém identidade visual oficial */
```
**[ADDED]**
```
87      outline: none !important; /* Remove qualquer contorno no modo escuro */
88      box-shadow: none !important; /* Remove qualquer sombra no modo escuro */
```
**[ADDED]**
```
91    /* Garante que o foco do botão pai não propague para o ícone */
92    .high-contrast .govbr-icon:focus-visible,
93    .high-contrast .govbr-icon:focus {
94      outline: none !important;
95      box-shadow: none !important;
96    }
97    
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:50:44*

**[REMOVED]**
```
(from line ~83)
/* Ícone "br" do Gov.br - Mantém identidade visual oficial */

```
**[ADDED]**
```
83    /* Ícone "br" do Gov.br */
```
**[REMOVED]**
```
(from line ~87)
  outline: none !important; /* Remove qualquer contorno no modo escuro */
  box-shadow: none !important; /* Remove qualquer sombra no modo escuro */

```
**[REMOVED]**
```
(from line ~89)
/* Garante que o foco do botão pai não propague para o ícone */
.high-contrast .govbr-icon:focus-visible,
.high-contrast .govbr-icon:focus {
  outline: none !important;
  box-shadow: none !important;
}


```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:50:24*

**[REMOVED]**
```
(from line ~83)
/* Ícone "br" do Gov.br */

```
**[ADDED]**
```
83    /* Ícone "br" do Gov.br - Mantém identidade visual oficial */
```
**[ADDED]**
```
87      outline: none !important; /* Remove qualquer contorno no modo escuro */
88      box-shadow: none !important; /* Remove qualquer sombra no modo escuro */
```
**[ADDED]**
```
91    /* Garante que o foco do botão pai não propague para o ícone */
92    .high-contrast .govbr-icon:focus-visible,
93    .high-contrast .govbr-icon:focus {
94      outline: none !important;
95      box-shadow: none !important;
96    }
97    
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:50:14*

**[REMOVED]**
```
(from line ~24)
              src="/assets/brasao-uba.png"

```
**[ADDED]**
```
24                  src="/assets/Brasao_Uba.jpg"
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:50:03*

**[REMOVED]**
```
(from line ~24)
              src="/assets/Brasao_Uba.jpg"

```
**[ADDED]**
```
24                  src="/assets/brasao-uba.png"
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:48:10*

**[REMOVED]**
```
(from line ~70)
   mudar no modo escuro (ex: logos, brasões)

```
**[ADDED]**
```
70       mudar no modo escuro (ex: logos, brasões, ícones oficiais)
```
**[ADDED]**
```
72    
73    /* Brasão da Prefeitura */
```
**[REMOVED]**
```
(from line ~80)
  /* Garante que a imagem não seja afetada por filtros */

```
**[ADDED]**
```
83    /* Ícone "br" do Gov.br */
84    .high-contrast .govbr-icon {
85      background-color: #ffffff !important; /* Mantém branco puro */
86      color: #1e40af !important; /* Azul Gov.br original */
87    }
88    
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:47:56*

**[REMOVED]**
```
(from line ~24)
              src="/assets/brasao-uba.png"

```
**[ADDED]**
```
24                  src="/assets/Brasao_Uba.jpg"
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:47:38*

**[REMOVED]**
```
(from line ~24)
              src="/assets/Brasao_Uba.jpg"

```
**[ADDED]**
```
24                  src="/assets/brasao-uba.png"
```
**[REMOVED]**
```
(from line ~57)
            <span className="bg-white text-uba-blue w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">br</span>

```
**[ADDED]**
```
57                <span className="bg-white text-uba-blue w-6 h-6 rounded-full flex items-center justify-center text-xs font-black govbr-icon">br</span>
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:41:05*

**[ADDED]**
```
66    }
67    
68    /* ==========================================
69       EXCEÇÃO: Proteger elementos que NÃO devem 
70       mudar no modo escuro (ex: logos, brasões)
71       ========================================== */
72    .high-contrast .logo-container {
73      background-color: #ffffff !important; /* Mantém branco puro */
74      border: 2px solid #ea580c !important; /* Mantém a borda laranja visível */
75    }
76    
77    .high-contrast .logo-container img {
78      /* Garante que a imagem não seja afetada por filtros */
79      filter: none !important;
80    }
81    
82    /* Foco visível padrão para acessibilidade (modo claro) */
83    *:focus-visible {
84      outline: 3px solid #00529B;
85      outline-offset: 2px;
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:40:38*

**[REMOVED]**
```
(from line ~24)
              src="/assets/brasao-uba.png"

```
**[ADDED]**
```
24                  src="/assets/Brasao_Uba.jpg"
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:40:02*

**[REMOVED]**
```
(from line ~22)
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white rounded-full overflow-hidden border-2 border-uba-red">

```
**[ADDED]**
```
22              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white rounded-full overflow-hidden border-2 border-uba-red logo-container">
```
**[REMOVED]**
```
(from line ~24)
                src="/assets/Brasao_Uba.jpg" // Caminho relativo à pasta 'public'
                alt="Brasão da Prefeitura Municipal de Ubá"
                fill
                className="object-contain p-1"
                priority // Carrega com prioridade (LCP)

```
**[ADDED]**
```
24                  src="/assets/brasao-uba.png"
25                  alt="Brasão da Prefeitura Municipal de Ubá"
26                  fill
27                  className="object-contain p-1"
28                  priority
```
**[REMOVED]**
```
(from line ~30)
        </div>

```
**[ADDED]**
```
30              </div>
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/AccessibilityBar.tsx
*Saved at: 19/08/2026, 17:34:36*

**[REMOVED]**
```
(from line ~29)
          <span className="hidden sm:inline">{highContrast ? "Contraste Normal" : "Alto Contraste"}</span>

```
**[ADDED]**
```
29              <span className="hidden sm:inline">{highContrast ? "Modo Claro" : "Modo Escuro"}</span>
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/AccessibilityBar.tsx
*Saved at: 19/08/2026, 17:34:18*

**[REMOVED]**
```
(from line ~26)
          aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}

```
**[ADDED]**
```
26              aria-label={highContrast ? "Desativar modo escuro acessível" : "Ativar modo escuro acessível"}
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:33:51*

**[REMOVED]**
```
(from line ~5)
/* Modo Alto Contraste (eMAG / WCAG) */

```
**[ADDED]**
```
5     /* ==========================================
6        MODO ESCURO ACESSÍVEL (Estilo Discord / Moderno)
7        Reduz a fadiga visual (halação) mantendo 
8        conformidade WCAG 2.1 AA/AAA
9        ========================================== */
```
**[REMOVED]**
```
(from line ~11)
  --background: #000000 !important;
  --foreground: #FFFFFF !important;

```
**[ADDED]**
```
11      --bg-main: #0f172a !important;      /* Slate 950: Fundo principal profundo e suave */
12      --bg-card: #1e293b !important;      /* Slate 800: Fundo de cards e seções */
13      --text-main: #f1f5f9 !important;    /* Slate 100: Texto suave, não "estoura" a vista */
14      --text-muted: #cbd5e1 !important;   /* Slate 300: Textos secundários */
15      --border-subtle: #334155 !important;/* Slate 700: Bordas sutis para separação */
16      --focus-ring: #38bdf8 !important;   /* Sky 400: Anel de foco visível no escuro */
```
**[REMOVED]**
```
(from line ~20)
  background-color: #000000 !important;
  color: #FFFFFF !important;

```
**[ADDED]**
```
20      background-color: var(--bg-main) !important;
21      color: var(--text-main) !important;
```
**[REMOVED]**
```
(from line ~24)
.high-contrast a, 
.high-contrast button {
  border: 2px solid #FFFFFF !important;

```
**[ADDED]**
```
24    /* Ajuste de Cards e Seções que eram brancas */
25    .high-contrast .bg-white,
26    .high-contrast .bg-uba-offWhite {
27      background-color: var(--bg-card) !important;
28      border: 1px solid var(--border-subtle) !important;
29      color: var(--text-main) !important;
```
**[ADDED]**
```
32    /* Ajuste do Header e Footer (escurece um pouco mais para hierarquia) */
```
**[REMOVED]**
```
(from line ~35)
  background-color: #000000 !important;
  color: #FFFFFF !important;
  border: 1px solid #FFFFFF;

```
**[ADDED]**
```
35      background-color: #020617 !important; /* Slate 950 ainda mais profundo */
36      color: var(--text-main) !important;
37      border-bottom: 1px solid var(--border-subtle) !important;
```
**[ADDED]**
```
40    /* Ajuste dos textos dentro do header para garantir leitura */
41    .high-contrast .text-blue-100 {
42      color: var(--text-muted) !important;
43    }
44    
45    /* Ajuste dos Botões de Ação (CTA) */
46    /* Mantemos a identidade, mas com um tom que vibra bem no fundo escuro */
```
**[REMOVED]**
```
(from line ~48)
  background-color: #FFFF00 !important; /* Amarelo sobre preto = máximo contraste */
  color: #000000 !important;

```
**[ADDED]**
```
48      background-color: #ea580c !important; /* Laranja vibrante (Orange 600) */
49      color: #ffffff !important;
```
**[ADDED]**
```
51    .high-contrast .bg-uba-red:hover {
52      background-color: #c2410c !important; /* Orange 700 */
53    }
```
**[REMOVED]**
```
(from line ~55)
/* Foco visível para navegação por teclado (Acessibilidade) */
*:focus-visible {
  outline: 3px solid #00529B;
  outline-offset: 2px;

```
**[ADDED]**
```
55    /* Ajuste dos badges e fundos de ícones */
56    .high-contrast .bg-uba-blue\/10,
57    .high-contrast .bg-slate-100 {
58      background-color: #334155 !important;
59      color: var(--text-main) !important;
```
**[ADDED]**
```
62    /* Foco visível para navegação por teclado (Adaptado para fundo escuro) */
```
**[REMOVED]**
```
(from line ~64)
  outline: 3px solid #FFFF00;
  outline-offset: 2px;

```
**[ADDED]**
```
64      outline: 3px solid var(--focus-ring) !important;
65      outline-offset: 2px !important;
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:32:53*

**[REMOVED]**
```
(from line ~5)
/* ==========================================
   MODO ESCURO ACESSÍVEL (Estilo Discord / Moderno)
   Reduz a fadiga visual (halação) mantendo 
   conformidade WCAG 2.1 AA/AAA
   ========================================== */

```
**[ADDED]**
```
5     /* Modo Alto Contraste (eMAG / WCAG) */
```
**[REMOVED]**
```
(from line ~7)
  --bg-main: #0f172a !important;      /* Slate 950: Fundo principal profundo e suave */
  --bg-card: #1e293b !important;      /* Slate 800: Fundo de cards e seções */
  --text-main: #f1f5f9 !important;    /* Slate 100: Texto suave, não "estoura" a vista */
  --text-muted: #cbd5e1 !important;   /* Slate 300: Textos secundários */
  --border-subtle: #334155 !important;/* Slate 700: Bordas sutis para separação */
  --focus-ring: #38bdf8 !important;   /* Sky 400: Anel de foco visível no escuro */

```
**[ADDED]**
```
7       --background: #000000 !important;
8       --foreground: #FFFFFF !important;
```
**[REMOVED]**
```
(from line ~12)
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;

```
**[ADDED]**
```
12      background-color: #000000 !important;
13      color: #FFFFFF !important;
```
**[REMOVED]**
```
(from line ~16)
/* Ajuste de Cards e Seções que eram brancas */
.high-contrast .bg-white,
.high-contrast .bg-uba-offWhite {
  background-color: var(--bg-card) !important;
  border: 1px solid var(--border-subtle) !important;
  color: var(--text-main) !important;

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
/* Ajuste do Header e Footer (escurece um pouco mais para hierarquia) */

```
**[REMOVED]**
```
(from line ~23)
  background-color: #020617 !important; /* Slate 950 ainda mais profundo */
  color: var(--text-main) !important;
  border-bottom: 1px solid var(--border-subtle) !important;

```
**[ADDED]**
```
23      background-color: #000000 !important;
24      color: #FFFFFF !important;
25      border: 1px solid #FFFFFF;
```
**[REMOVED]**
```
(from line ~28)
/* Ajuste dos textos dentro do header para garantir leitura */
.high-contrast .text-blue-100 {
  color: var(--text-muted) !important;
}

/* Ajuste dos Botões de Ação (CTA) */
/* Mantemos a identidade, mas com um tom que vibra bem no fundo escuro */

```
**[REMOVED]**
```
(from line ~29)
  background-color: #ea580c !important; /* Laranja vibrante (Orange 600) */
  color: #ffffff !important;

```
**[ADDED]**
```
29      background-color: #FFFF00 !important; /* Amarelo sobre preto = máximo contraste */
30      color: #000000 !important;
```
**[REMOVED]**
```
(from line ~32)
.high-contrast .bg-uba-red:hover {
  background-color: #c2410c !important; /* Orange 700 */
}

```
**[REMOVED]**
```
(from line ~33)
/* Ajuste dos badges e fundos de ícones */
.high-contrast .bg-uba-blue\/10,
.high-contrast .bg-slate-100 {
  background-color: #334155 !important;
  color: var(--text-main) !important;

```
**[ADDED]**
```
33    /* Foco visível para navegação por teclado (Acessibilidade) */
34    *:focus-visible {
35      outline: 3px solid #00529B;
36      outline-offset: 2px;
```
**[REMOVED]**
```
(from line ~39)
/* Foco visível para navegação por teclado (Adaptado para fundo escuro) */

```
**[REMOVED]**
```
(from line ~40)
  outline: 3px solid var(--focus-ring) !important;
  outline-offset: 2px !important;

```
**[ADDED]**
```
40      outline: 3px solid #FFFF00;
41      outline-offset: 2px;
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:32:14*

**[REMOVED]**
```
(from line ~5)
/* Modo Alto Contraste (eMAG / WCAG) */

```
**[ADDED]**
```
5     /* ==========================================
6        MODO ESCURO ACESSÍVEL (Estilo Discord / Moderno)
7        Reduz a fadiga visual (halação) mantendo 
8        conformidade WCAG 2.1 AA/AAA
9        ========================================== */
```
**[REMOVED]**
```
(from line ~11)
  --background: #000000 !important;
  --foreground: #FFFFFF !important;

```
**[ADDED]**
```
11      --bg-main: #0f172a !important;      /* Slate 950: Fundo principal profundo e suave */
12      --bg-card: #1e293b !important;      /* Slate 800: Fundo de cards e seções */
13      --text-main: #f1f5f9 !important;    /* Slate 100: Texto suave, não "estoura" a vista */
14      --text-muted: #cbd5e1 !important;   /* Slate 300: Textos secundários */
15      --border-subtle: #334155 !important;/* Slate 700: Bordas sutis para separação */
16      --focus-ring: #38bdf8 !important;   /* Sky 400: Anel de foco visível no escuro */
```
**[REMOVED]**
```
(from line ~20)
  background-color: #000000 !important;
  color: #FFFFFF !important;

```
**[ADDED]**
```
20      background-color: var(--bg-main) !important;
21      color: var(--text-main) !important;
```
**[REMOVED]**
```
(from line ~24)
.high-contrast a, 
.high-contrast button {
  border: 2px solid #FFFFFF !important;

```
**[ADDED]**
```
24    /* Ajuste de Cards e Seções que eram brancas */
25    .high-contrast .bg-white,
26    .high-contrast .bg-uba-offWhite {
27      background-color: var(--bg-card) !important;
28      border: 1px solid var(--border-subtle) !important;
29      color: var(--text-main) !important;
```
**[ADDED]**
```
32    /* Ajuste do Header e Footer (escurece um pouco mais para hierarquia) */
```
**[REMOVED]**
```
(from line ~35)
  background-color: #000000 !important;
  color: #FFFFFF !important;
  border: 1px solid #FFFFFF;

```
**[ADDED]**
```
35      background-color: #020617 !important; /* Slate 950 ainda mais profundo */
36      color: var(--text-main) !important;
37      border-bottom: 1px solid var(--border-subtle) !important;
```
**[ADDED]**
```
40    /* Ajuste dos textos dentro do header para garantir leitura */
41    .high-contrast .text-blue-100 {
42      color: var(--text-muted) !important;
43    }
44    
45    /* Ajuste dos Botões de Ação (CTA) */
46    /* Mantemos a identidade, mas com um tom que vibra bem no fundo escuro */
```
**[REMOVED]**
```
(from line ~48)
  background-color: #FFFF00 !important; /* Amarelo sobre preto = máximo contraste */
  color: #000000 !important;

```
**[ADDED]**
```
48      background-color: #ea580c !important; /* Laranja vibrante (Orange 600) */
49      color: #ffffff !important;
```
**[ADDED]**
```
51    .high-contrast .bg-uba-red:hover {
52      background-color: #c2410c !important; /* Orange 700 */
53    }
```
**[REMOVED]**
```
(from line ~55)
/* Foco visível para navegação por teclado (Acessibilidade) */
*:focus-visible {
  outline: 3px solid #00529B;
  outline-offset: 2px;

```
**[ADDED]**
```
55    /* Ajuste dos badges e fundos de ícones */
56    .high-contrast .bg-uba-blue\/10,
57    .high-contrast .bg-slate-100 {
58      background-color: #334155 !important;
59      color: var(--text-main) !important;
```
**[ADDED]**
```
62    /* Foco visível para navegação por teclado (Adaptado para fundo escuro) */
```
**[REMOVED]**
```
(from line ~64)
  outline: 3px solid #FFFF00;
  outline-offset: 2px;

```
**[ADDED]**
```
64      outline: 3px solid var(--focus-ring) !important;
65      outline-offset: 2px !important;
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/layout.tsx
*Saved at: 19/08/2026, 17:25:19*

**[REMOVED]**
```
(from line ~35)
        {/* VLibras Widget */}

```
**[ADDED]**
```
35            {/* VLibras Widget (Corrigido para React) */}
```
**[REMOVED]**
```
(from line ~37)
          <div vw-access-button className="active"></div>
          <div vw-plugin-wrapper>

```
**[ADDED]**
```
37              <div vw-access-button="active" className="active"></div>
38              <div vw-plugin-wrapper="true">
```
**[ADDED]**
```
42            
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/layout.tsx
*Saved at: 19/08/2026, 17:24:38*

**[REMOVED]**
```
(from line ~36)
        <div vw className="enabled">

```
**[ADDED]**
```
36            <div vw="true" className="enabled">
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/models/schemas.ts
*Saved at: 19/08/2026, 17:20:21*

**[REMOVED]**
```
(from line ~4)
  id: z.string().uuid(),

```
**[ADDED]**
```
4       id: z.string().uuid("ID do serviço inválido"),
```
**[REMOVED]**
```
(from line ~8)
  url: z.string().url("URL inválida"),
  categoria: z.enum(["CIDADAO", "EMPRESA", "SERVIDOR", "TURISTA"]),

```
**[ADDED]**
```
8       
9       // CORREÇÃO: Aceita caminhos relativos (ex: "/iptu") ou URLs absolutas
10      url: z.string().min(1, "O caminho do serviço é obrigatório"),
11      
12      categoria: z.enum(["CIDADAO", "EMPRESA", "SERVIDOR", "TURISTA"], {
13        errorMap: () => ({ message: "Categoria inválida" }),
14      }),
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:18:37*

**[REMOVED]**
```
(from line ~23)
            {/* SUBSTITUA pelo caminho real da sua imagem: /assets/brasao-uba.png */}

```
**[REMOVED]**
```
(from line ~24)
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bras%C3%A3o_de_Ub%C3%A1.svg/1200px-Bras%C3%A3o_de_Ub%C3%A1.svg.png" 
              alt="Brasão da Prefeitura Municipal de Ubá"
              fill
              className="object-contain p-1"
              priority

```
**[ADDED]**
```
24                    src="/assets/Brasao_Uba.jpg" // Caminho relativo à pasta 'public'
25                    alt="Brasão da Prefeitura Municipal de Ubá"
26                    fill
27                    className="object-contain p-1"
28                    priority // Carrega com prioridade (LCP)
```
**[REMOVED]**
```
(from line ~30)
          </div>

```
**[ADDED]**
```
30            </div>
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/page.tsx
*Saved at: 19/08/2026, 17:14:08*

**[REMOVED]**
```
(from line ~1)
import Image from "next/image";

```
**[ADDED]**
```
1     import { Search, Star, Scale, Megaphone, ArrowRight, Image as ImageIcon } from "lucide-react";
2     import { getServicosDestaque } from "@/controllers/servicoController";
3     import * as Icons from "lucide-react";
```
**[REMOVED]**
```
(from line ~5)
export default function Home() {

```
**[ADDED]**
```
5     export default async function Home() {
6       const servicos = await getServicosDestaque();
7     
```
**[REMOVED]**
```
(from line ~9)
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"

```
**[ADDED]**
```
9         <>
10          {/* Hero Section */}
11          <section className="bg-gradient-to-br from-uba-blue to-uba-darkBlue text-white py-16 md:py-24 px-4">
12            <div className="container mx-auto max-w-4xl text-center">
13              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
14                Olá, o que você precisa resolver em <span className="text-uba-red">Ubá</span> hoje?
15              </h2>
16              
17              <div className="relative max-w-2xl mx-auto">
18                <label htmlFor="busca-global" className="sr-only">Buscar serviços ou informações</label>
19                <input 
20                  id="busca-global"
21                  type="search" 
22                  placeholder="Ex: IPTU, agendamento, licitação, iluminação..." 
23                  className="w-full py-5 px-6 pr-16 rounded-full text-uba-text text-lg md:text-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-uba-red/50 border-2 border-transparent focus:border-uba-red transition-all"
24                />
25                <button 
26                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-uba-red p-3.5 rounded-full hover:bg-uba-darkRed transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white"
27                  aria-label="Executar busca"
```
**[REMOVED]**
```
(from line ~29)
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>

```
**[ADDED]**
```
29                  <Search className="text-white" size={24} />
30                </button>
31              </div>
```
**[REMOVED]**
```
(from line ~33)
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>

```
**[ADDED]**
```
33          </section>
34    
35          {/* Serviços em Destaque */}
36          <section className="py-12 md:py-16 px-4 -mt-10 relative z-10">
37            <div className="container mx-auto max-w-6xl">
38              <h3 className="text-2xl font-bold text-uba-blue mb-8 px-2 flex items-center gap-2">
39                <Star className="text-uba-red" size={24} />
40                Serviços Mais Acessados
41              </h3>
42              
43              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
44                {servicos.map((servico) => {
45                  // Mapeamento seguro de ícones do Lucide
46                  const IconComponent = (Icons as any)[servico.icone] || Icons.FileText;
47                  
48                  return (
49                    <a 
50                      key={servico.id} 
51                      href={servico.url}
52                      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-uba-red focus:outline-none focus:ring-4 focus:ring-uba-blue/30 flex flex-col h-full"
53                    >
54                      <div className="flex items-start gap-4 mb-3">
55                        <div className="bg-uba-blue/10 p-3 rounded-lg group-hover:bg-uba-blue group-hover:text-white transition-colors text-uba-blue flex-shrink-0">
56                          <IconComponent size={28} aria-hidden="true" />
57                        </div>
58                        <div>
59                          <h4 className="font-bold text-xl text-uba-blue mb-1 group-hover:text-uba-red transition-colors">
60                            {servico.titulo}
61                          </h4>
62                          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded mb-2">
63                            {servico.categoria}
64                          </span>
65                        </div>
66                      </div>
67                      <p className="text-uba-text/80 text-base leading-relaxed mt-auto">
68                        {servico.descricao}
69                      </p>
70                      <span className="mt-4 text-uba-red font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
71                        Acessar serviço <ArrowRight size={16} />
72                      </span>
73                    </a>
74                  );
75                })}
76              </div>
```
**[REMOVED]**
```
(from line ~78)
      </main>
    </div>

```
**[ADDED]**
```
78          </section>
79    
80          {/* Seção de Transparência Rápida */}
81          <section className="py-16 px-4 bg-white border-t border-slate-200">
82            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
83              <div>
84                <h3 className="text-2xl font-bold text-uba-blue mb-6 flex items-center gap-2">
85                  <Scale size={24} /> Transparência em Foco
86                </h3>
87                <div className="bg-uba-offWhite p-6 rounded-xl border border-slate-200">
88                  <p className="text-lg font-semibold mb-2">Portal da Transparência</p>
89                  <p className="text-slate-600 mb-6">Acesse gastos públicos, receitas, salários de servidores e licitações em tempo real, conforme a Lei de Acesso à Informação (LAI).</p>
90                  <a href="/transparencia" className="inline-block bg-uba-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-uba-darkBlue transition-colors focus:ring-4 focus:ring-uba-blue/30">
91                    Ver Dados Abertos
92                  </a>
93                </div>
94              </div>
95              
96              <div>
97                <h3 className="text-2xl font-bold text-uba-blue mb-6 flex items-center gap-2">
98                  <Megaphone size={24} /> Últimas Notícias
99                </h3>
100               <article className="flex gap-4 group cursor-pointer p-4 rounded-lg hover:bg-uba-offWhite transition-colors border border-transparent hover:border-slate-200">
101                 <div className="w-24 h-24 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-400">
102                   <ImageIcon size={32} />
103                 </div>
104                 <div>
105                   <span className="text-xs font-bold text-uba-red uppercase tracking-wider">Infraestrutura</span>
106                   <h4 className="font-bold text-uba-text text-lg group-hover:text-uba-blue transition-colors leading-snug mt-1">
107                     Prefeitura inicia pavimentação asfáltica em 5 novos bairros de Ubá
108                   </h4>
109                   <time className="text-sm text-slate-500 mt-2 block">19 de Agosto de 2026</time>
110                 </div>
111               </article>
112             </div>
113           </div>
114         </section>
115       </>
```
**[REMOVED]**
```
(from line ~117)
}

```
**[ADDED]**
```
117   }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/layout.tsx
*Saved at: 19/08/2026, 17:13:58*

**[REMOVED]**
```
(from line ~2)
import { Geist, Geist_Mono } from "next/font/google";

```
**[ADDED]**
```
2     import { Inter } from "next/font/google";
```
**[ADDED]**
```
4     import { AccessibilityBar } from "@/components/layout/AccessibilityBar";
5     import { Header } from "@/components/layout/Header";
```
**[REMOVED]**
```
(from line ~7)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

```
**[ADDED]**
```
7     const inter = Inter({ subsets: ["latin"] });
```
**[REMOVED]**
```
(from line ~9)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


```
**[REMOVED]**
```
(from line ~10)
  title: "Create Next App",
  description: "Generated by create next app",

```
**[ADDED]**
```
10      title: "Prefeitura Municipal de Ubá - MG | Portal Oficial",
11      description: "Portal oficial de serviços, transparência e informações da Prefeitura de Ubá, Minas Gerais.",
```
**[REMOVED]**
```
(from line ~14)
export default function RootLayout({ children }: LayoutProps<"/">) {

```
**[ADDED]**
```
14    export default function RootLayout({
15      children,
16    }: Readonly<{ children: React.ReactNode }>) {
```
**[REMOVED]**
```
(from line ~18)
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>

```
**[ADDED]**
```
18        <html lang="pt-BR">
19          <body className={`${inter.className} bg-uba-offWhite text-uba-text min-h-screen flex flex-col antialiased`}>
20            <AccessibilityBar />
21            <Header />
22            
23            <main id="conteudo-principal" className="flex-grow">
24              {children}
25            </main>
26            
27            <footer className="bg-uba-darkBlue text-white py-8 px-4 mt-auto">
28              <div className="container mx-auto text-center md:text-left">
29                <p className="font-bold text-lg mb-2">Prefeitura Municipal de Ubá</p>
30                <p className="text-blue-200 text-sm">Praça Bernardino de Lima, 100 - Centro, Ubá - MG</p>
31                <p className="text-blue-200 text-sm mt-4">© 2026 Todos os direitos reservados. Desenvolvido com padrões eMAG e LGPD.</p>
32              </div>
33            </footer>
34    
35            {/* VLibras Widget */}
36            <div vw className="enabled">
37              <div vw-access-button className="active"></div>
38              <div vw-plugin-wrapper>
39                <div className="vw-plugin-top-wrapper"></div>
40              </div>
41            </div>
42            <script src="https://vlibras.gov.br/app/vlibras-plugin.js" async></script>
43            <script dangerouslySetInnerHTML={{ __html: "new window.VLibras.Widget('https://vlibras.gov.br/app');" }} />
44          </body>
```
**[REMOVED]**
```
(from line ~47)
}

```
**[ADDED]**
```
47    }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/Header.tsx
*Saved at: 19/08/2026, 17:13:32*

**[ADDED]**
```
1     "use client";
2     import { useState } from "react";
3     import { Menu, X } from "lucide-react";
4     import Link from "next/link";
5     import Image from "next/image";
6     
7     export function Header() {
8       const [isMenuOpen, setIsMenuOpen] = useState(false);
9     
10      const navLinks = [
11        { label: "Cidadão", href: "/cidadao" },
12        { label: "Empresa", href: "/empresa" },
13        { label: "Servidor", href: "/servidor" },
14        { label: "Turista", href: "/turista" },
15      ];
16    
17      return (
18        <header className="sticky top-0 z-40 bg-uba-blue text-white shadow-lg">
19          <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
20            {/* Logo */}
21            <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded p-1">
22              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white rounded-full overflow-hidden border-2 border-uba-red">
23                {/* SUBSTITUA pelo caminho real da sua imagem: /assets/brasao-uba.png */}
24                <Image
25                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bras%C3%A3o_de_Ub%C3%A1.svg/1200px-Bras%C3%A3o_de_Ub%C3%A1.svg.png" 
26                  alt="Brasão da Prefeitura Municipal de Ubá"
27                  fill
28                  className="object-contain p-1"
29                  priority
30                />
31              </div>
32              <div className="leading-tight">
33                <h1 className="font-bold text-xl md:text-2xl tracking-tight">Prefeitura de Ubá</h1>
34                <p className="text-xs md:text-sm text-blue-100 font-medium">Governo Municipal Transparente</p>
35              </div>
36            </Link>
37    
38            {/* Desktop Nav */}
39            <nav className="hidden md:flex gap-8" aria-label="Navegação principal por perfis">
40              {navLinks.map((link) => (
41                <Link 
42                  key={link.href} 
43                  href={link.href}
44                  className="text-lg font-semibold hover:text-uba-red transition-colors focus:outline-none focus:underline decoration-2 underline-offset-4"
45                >
46                  {link.label}
47                </Link>
48              ))}
49            </nav>
50    
51            {/* Actions */}
52            <div className="flex items-center gap-4">
53              <a 
54                href="https://sso.acesso.gov.br/" 
55                className="bg-uba-red hover:bg-uba-darkRed text-white px-5 py-2.5 rounded-md font-bold text-base flex items-center gap-2 shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-uba-red/50"
56                aria-label="Acessar serviços com conta Gov.br"
57              >
58                <span className="bg-white text-uba-blue w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">br</span>
59                Entrar com Gov.br
60              </a>
61              
62              <button 
63                className="md:hidden p-2 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" 
64                onClick={() => setIsMenuOpen(!isMenuOpen)}
65                aria-expanded={isMenuOpen}
66                aria-label="Abrir menu de navegação"
67              >
68                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
69              </button>
70            </div>
71          </div>
72    
73          {/* Mobile Nav */}
74          {isMenuOpen && (
75            <nav className="md:hidden bg-uba-darkBlue border-t border-blue-800 px-4 py-4 flex flex-col gap-2 shadow-inner" aria-label="Menu mobile">
76              {navLinks.map((link) => (
77                <Link 
78                  key={link.href} 
79                  href={link.href}
80                  className="block py-3 px-4 text-lg font-semibold hover:bg-white/10 rounded transition-colors"
81                  onClick={() => setIsMenuOpen(false)}
82                >
83                  {link.label}
84                </Link>
85              ))}
86            </nav>
87          )}
88        </header>
89      );
90    }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/components/layout/AccessibilityBar.tsx
*Saved at: 19/08/2026, 17:13:18*

**[ADDED]**
```
1     "use client";
2     import { useState } from "react";
3     import { Sun, Moon, Minus, Plus } from "lucide-react";
4     
5     export function AccessibilityBar() {
6       const [highContrast, setHighContrast] = useState(false);
7       const [fontSize, setFontSize] = useState(100);
8     
9       const toggleContrast = () => {
10        setHighContrast(!highContrast);
11        document.documentElement.classList.toggle("high-contrast");
12      };
13    
14      const adjustFont = (delta: number) => {
15        const newSize = Math.min(Math.max(fontSize + delta, 80), 150);
16        setFontSize(newSize);
17        document.documentElement.style.fontSize = `${newSize}%`;
18      };
19    
20      return (
21        <div className="bg-uba-darkBlue text-white text-sm py-2 px-4 md:px-8 flex flex-wrap justify-between items-center gap-2 border-b border-blue-800">
22          <div className="flex items-center gap-4">
23            <button 
24              onClick={toggleContrast}
25              className="flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
26              aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
27            >
28              {highContrast ? <Sun size={16} /> : <Moon size={16} />}
29              <span className="hidden sm:inline">{highContrast ? "Contraste Normal" : "Alto Contraste"}</span>
30            </button>
31            
32            <div className="flex items-center gap-1 border-l border-blue-700 pl-4">
33              <span className="hidden sm:inline mr-2">Fonte:</span>
34              <button onClick={() => adjustFont(-10)} className="p-1 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" aria-label="Diminuir fonte">
35                <Minus size={16} />
36              </button>
37              <button onClick={() => adjustFont(10)} className="p-1 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" aria-label="Aumentar fonte">
38                <Plus size={16} />
39              </button>
40            </div>
41          </div>
42          
43          <a href="#conteudo-principal" className="text-uba-offWhite hover:underline focus:ring-2 focus:ring-white rounded px-2 py-1">
44            Pular para o conteúdo
45          </a>
46        </div>
47      );
48    }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/controllers/servicoController.ts
*Saved at: 19/08/2026, 17:12:24*

**[ADDED]**
```
1     import { Servico, ServicoSchema } from "@/models/schemas";
2     
3     // Mock de dados (em produção, viria de uma API segura)
4     const mockServicos: Omit<Servico, "id">[] = [
5       { titulo: "2ª Via do IPTU", descricao: "Emita guias, consulte débitos e imóveis.", icone: "FileText", url: "/iptu", categoria: "CIDADAO" },
6       { titulo: "Nota Fiscal (NFS-e)", descricao: "Emissão, cancelamento e consulta de notas.", icone: "Building2", url: "/nfse", categoria: "EMPRESA" },
7       { titulo: "Iluminação Pública", descricao: "Solicite reparos em postes e lâmpadas.", icone: "Lightbulb", url: "/iluminacao", categoria: "CIDADAO" },
8       { titulo: "Agendamento de Saúde", descricao: "Marque consultas na rede municipal de Ubá.", icone: "Heart", url: "/saude", categoria: "CIDADAO" },
9       { titulo: "Licitações e Contratos", descricao: "Acompanhe editais, resultados e contratos.", icone: "Scale", url: "/licitacoes", categoria: "EMPRESA" },
10      { titulo: "Ouvidoria Geral", descricao: "Abra protocolos, faça denúncias ou elogios.", icone: "Megaphone", url: "/ouvidoria", categoria: "CIDADAO" },
11    ];
12    
13    export async function getServicosDestaque(): Promise<Servico[]> {
14      // Simula um pequeno delay de rede
15      await new Promise(resolve => setTimeout(resolve, 300));
16      
17      // Valida e sanitiza os dados antes de enviar para a View (Segurança)
18      return mockServicos.map((s, index) => 
19        ServicoSchema.parse({ ...s, id: crypto.randomUUID() })
20      );
21    }
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/models/schemas.ts
*Saved at: 19/08/2026, 17:12:04*

**[ADDED]**
```
1     import { z } from "zod";
2     
3     export const ServicoSchema = z.object({
4       id: z.string().uuid(),
5       titulo: z.string().min(3, "Título muito curto").max(60),
6       descricao: z.string().min(10, "Descrição deve ser clara").max(120),
7       icone: z.string(),
8       url: z.string().url("URL inválida"),
9       categoria: z.enum(["CIDADAO", "EMPRESA", "SERVIDOR", "TURISTA"]),
10      destaque: z.boolean().default(true),
11    });
12    
13    export type Servico = z.infer<typeof ServicoSchema>;
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/src/app/globals.css
*Saved at: 19/08/2026, 17:10:21*

**[REMOVED]**
```
(from line ~29)
  background-color: #FFFF00 !important;

```
**[ADDED]**
```
29      background-color: #FFFF00 !important; /* Amarelo sobre preto = máximo contraste */
```
**[REMOVED]**
```
(from line ~33)
/* Foco visível para acessibilidade */

```
**[ADDED]**
```
33    /* Foco visível para navegação por teclado (Acessibilidade) */
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/tailwind.config.js
*Saved at: 19/08/2026, 17:08:34*

**[REMOVED]**
```
(from line ~1)
import type { Config } from "tailwindcss";

const config: Config = {

```
**[ADDED]**
```
1     /** @type {import('tailwindcss').Config} */
2     module.exports = {
```
**[REMOVED]**
```
(from line ~12)
          blue: "#00529B",       // Azul Ubá
          darkBlue: "#003A70",   // Azul escuro para hover/fundos
          red: "#D9381E",        // Vermelho/Laranja para CTAs
          darkRed: "#B92D18",    // Vermelho escuro para hover
          offWhite: "#F8FAFC",   // Fundo principal
          text: "#1E293B",       // Texto principal

```
**[ADDED]**
```
12              blue: "#00529B",
13              darkBlue: "#003A70",
14              red: "#D9381E",
15              darkRed: "#B92D18",
16              offWhite: "#F8FAFC",
17              text: "#1E293B",
```
**[REMOVED]**
```
(from line ~23)
};
export default config;
```
**[ADDED]**
```
23    };
```

---

### 📄 /home/piva/Documentos/Programação/ts/uba-portal/tailwind.config.js
*Saved at: 19/08/2026, 17:08:10*

**[REMOVED]**
```
(from line ~1)
/** @type {import('tailwindcss').Config} */
module.exports = {

```
**[ADDED]**
```
1     import type { Config } from "tailwindcss";
2     
3     const config: Config = {
```
**[REMOVED]**
```
(from line ~13)
          blue: "#00529B",
          darkBlue: "#003A70",
          red: "#D9381E",
          darkRed: "#B92D18",
          offWhite: "#F8FAFC",
          text: "#1E293B",

```
**[ADDED]**
```
13              blue: "#00529B",       // Azul Ubá
14              darkBlue: "#003A70",   // Azul escuro para hover/fundos
15              red: "#D9381E",        // Vermelho/Laranja para CTAs
16              darkRed: "#B92D18",    // Vermelho escuro para hover
17              offWhite: "#F8FAFC",   // Fundo principal
18              text: "#1E293B",       // Texto principal
```
**[REMOVED]**
```
(from line ~24)
};
```
**[ADDED]**
```
24    };
25    export default config;
```

---

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

