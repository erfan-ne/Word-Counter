# 📝 Persian Word Counter

A simple and elegant word counter app with full **Farsi (Persian)** support and **Right-To-Left (RTL)** layout. Perfect for writing analysis, blogs, or content editing.

---

## 🔗 Live Demo

👉 [Click here to view the live project](https://erfan-ne.github.io/Word-Counter/)

---

## 🖼️ Screenshots

### 📱 Desktop View

![Word Counter Screenshot](https://github.com/erfan-ne/Word-Counter/blob/master/public/Word-Counter_Screenshot.png)

---

## 📌 Features

- ✅ Count **characters**, **words**, and **sentences**
- ✅ Full **Persian language** UI (fa-IR)
- ✅ **Real-time** update while typing
- ✅ Copy content to clipboard
- ✅ Export content as PDF (coming soon)
- ✅ Responsive design for mobile and desktop

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/persian-word-counter.git
```

### 2. Run Locally

Open `index.html` in your browser directly:

```bash
cd persian-word-counter
start index.html  # or open manually
```

Or run with a local server:

```bash
npx serve .
```

---

## 📁 Project Structure

```
persian-word-counter/
├── index.html               # Main HTML file (RTL & Persian)
├── /public
│   └── /css
│       └── styles.css       # Styling (RTL-compatible)
├── /js
│   └── app.js               # JavaScript logic
├── /screenshots             # Optional: screenshots for README
└── README.md                # Project documentation
```

---

## 🛠 How It Works

The app tracks text input in a `<textarea>` and automatically counts:

- **Characters** (excluding non-letter symbols)
- **Words** (split by space or new lines)
- **Sentences** (based on `.`, `!`, `؟`, or multiple line breaks)

---

## ✨ Future Improvements

- [ ] PDF export functionality
- [ ] Light/Dark mode
- [ ] Word frequency analysis
- [ ] Highlight grammar issues
- [ ] Support for English UI toggle

---

## 👤 Author

Developed with 💙 by Erfan Neshati
Feel free to use, improve, and share.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---
