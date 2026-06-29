<div align="center">

# 🧑‍💻 maliksh7 — Personal Developer Portfolio

A modern, fully responsive developer portfolio built with **React**, featuring dark/light mode, smooth animations, multi-page routing, and deployed on **GitHub Pages**.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-maliksh7.github.io/mhassan-blue?style=for-the-badge)](https://maliksh7.github.io/mhassan)
[![GitHub Repo](https://img.shields.io/badge/GitHub-maliksh7%2Fmhassan-181717?style=for-the-badge&logo=github)](https://github.com/maliksh7/mhassan)
[![Issues](https://img.shields.io/github/issues/maliksh7/mhassan?style=for-the-badge)](https://github.com/maliksh7/mhassan/issues)
[![Forks](https://img.shields.io/github/forks/maliksh7/mhassan?style=for-the-badge)](https://github.com/maliksh7/mhassan/fork)

</div>

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 **Dark / Light Mode** | Persistent theme toggle saved to `localStorage` |
| 📱 **Fully Responsive** | Mobile-first layout with hamburger nav drawer |
| 🎞️ **Smooth Animations** | Framer Motion stagger & entrance effects |
| 🗂️ **Multi-Page Routing** | React Router v6 with 4 distinct pages |
| 🎨 **Themed Components** | MUI v5 components that respond to dark/light mode |
| 🖥️ **Terminal-style About** | Bash-aesthetic skills & hobbies section |
| 📂 **Categorised Portfolio** | Domain-tabbed project grid with pagination |
| 🎓 **Academic Projects** | Dedicated research & paper listing page |
| 🚀 **GitHub Pages Deploy** | One-command deploy via `gh-pages` |

---

## 🛠️ Tech Stack

- **[React 17](https://reactjs.org/)** — UI library
- **[React Router v6](https://reactrouter.com/)** — client-side routing
- **[Material UI v5](https://mui.com/)** — component library & responsive grid
- **[Framer Motion](https://www.framer.com/motion/)** — animations
- **[SCSS Modules](https://sass-lang.com/)** — scoped component styling
- **[gh-pages](https://github.com/tschaub/gh-pages)** — GitHub Pages deployment

---

## 📸 Pages Overview

```
/mhassan            →  Home          (avatar, bio chips, socials)
/about              →  About Me      (terminal-style skills & certs)
/portfolio          →  Portfolio     (tabbed by domain, paginated)
/academic-projects  →  Research      (papers & thesis listing)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=14`
- npm or yarn

### 1. Fork & Clone

```bash
# Fork the repo first via GitHub, then:
git clone https://github.com/<your-username>/mhassan.git
cd mhassan
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Locally

```bash
npm start
```

Opens at `http://localhost:3000/mhassan`

---

## ✏️ Personalising It

All content lives in two files — you won't need to touch any component code.

### `src/info/Info.js`

Update your name, position, bio bullets, skills, certifications, hobbies, social links, and resume URL:

```js
export const info = {
  firstName: "Your First Name",
  lastName:  "Your Last Name",
  position:  "a Full Stack Developer",
  bio:       "Hello! I'm ...",
  socials: [
    { link: "https://github.com/you", icon: "fa fa-github", label: "github" },
    // add or remove socials freely
  ],
  skills: {
    proficientWith: ["React", "Node.js", "AWS"],
  },
  resumeUrl: "https://drive.google.com/your-resume-link",
};
```

### `src/info/Projects.js`

Add your own projects with title, domain, description, image, and GitHub link:

```js
const projects = [
  {
    title:       "My Awesome Project",
    domain:      "Web Development",   // used for tab grouping
    description: "Brief description of what it does.",
    image:       myProjectImg,
    link:        "https://github.com/you/project",
  },
];
```

### `src/img/`

Replace the images in this folder:

| File | Usage |
|---|---|
| `self.jpeg` | Your profile photo (square crop works best) |
| `project-*.png` | Project screenshots used in Portfolio cards |

> 💡 Use [remove.bg](https://remove.bg) to remove the background from your profile photo for the cleanest result.

---

## 🌐 Deploying to GitHub Pages

### 1. Update `package.json`

Set the `homepage` field to your GitHub Pages URL:

```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```

### 2. Update the base route

In `BaseLayout.js`, update all route paths from `/mhassan` to `/<your-repo-name>`.

### 3. Deploy

```bash
npm run deploy
```

This runs `npm run build` then pushes the `build/` folder to the `gh-pages` branch automatically. Your site will be live within a minute.

---

## 🐛 Found a Bug? Have a Suggestion?

Contributions and feedback are welcome!

👉 **[Open an Issue](https://github.com/maliksh7/mhassan/issues/new)** — bug reports, feature requests, or UI suggestions

👉 **[Fork the Repo](https://github.com/maliksh7/mhassan/fork)** — make it your own and submit a PR if you improve something

Please include:
- A clear description of the issue or suggestion
- Steps to reproduce (for bugs)
- Screenshots if relevant

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ☕ by [Saad Hassan](https://github.com/maliksh7) — feel free to fork, star ⭐, or reach out!

</div>
