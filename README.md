# BudzRus

A modern e-commerce platform for premium cannabis products and marijuana accessories, built with **Next.js**, **React**, and **TypeScript**.

---

## 🚀 Main Technologies

* **Next.js** (v15+)
* **React** (v19+)
* **TypeScript** (v5+)
* **Tailwind CSS** (v3+)
* **Radix UI**, **Lucide React**, and more

---

## 🖥️ Primary Development OS

* **Windows 10+**
* PowerShell is used for CLI commands (see below for Windows-specific instructions).

---

## 📦 Key Dependencies

See `package.json` for the full list. Major dependencies include:

* `next`, `react`, `react-dom`
* `tailwindcss`, `postcss`
* `@radix-ui/*` (UI components)
* `lucide-react`
* `date-fns`, etc.

---

## ⚙️ Setup & Build Instructions

### 1. **Clone the repository**

```powershell
git clone https://github.com/DartonStaker/BudzRus.git
cd BudzRus
```

### 2. **Install dependencies**

```powershell
npm install --legacy-peer-deps
```

**Note:** Due to React 19 and Next.js 15 compatibility, use `--legacy-peer-deps` flag during installation.

### 3. **Run Development Server**

```powershell
npm run dev
```

### 4. **Build the app**

```powershell
npm run build
```

### 5. **Start Production Server**

```powershell
npm start
```

### 6. **Clean previous builds (Windows/PowerShell)**

```powershell
Remove-Item -Recurse -Force .next
```

---

## 📝 Features

* Homepage with hero section, branches, and featured sections
* Shop pages (Canna Bar, Edibles, Fashion, Events, Munchies Kitchen)
* 420 Sunday Market page
* Stoners Blog
* User authentication pages
* Responsive design with mobile navigation
* Modern UI with Tailwind CSS

---

## 📝 Notes

* For **Linux/macOS**, use `rm -rf .next` to clean builds.
* All dependencies and scripts are defined in `package.json`.
* If you add new dependencies, always run `npm install` and update this README if needed.
* For deployment, always follow the build steps above to avoid stale or broken builds.

---

# BudzRus - Premium Cannabis Products & Marijuana Accessories

Your One-Stop Shop for Premium Cannabis Products in South Africa.

## About

BudzRus features premium flower, edibles, infused meals, art, fashion and experiences across Soweto, Marshalltown and Fourways.

