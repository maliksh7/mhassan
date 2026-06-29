
## 🚀 Getting Started

### Prerequisites

- Node.js `>=14`
- npm or yarn

### 1. Fork & Clone

```
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
    domain:      "Web Development",
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

This runs `npm run build` then pushes the `build/` folder to the `gh-pages` branch. Your site will be live within a minute.

---

## 🐛 Found a Bug? Have a Suggestion?

Contributions and feedback are very welcome!

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

</div>``