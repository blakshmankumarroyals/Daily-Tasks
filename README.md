# Daily-Tasks
Daily Tasks - Premium Todo List Application

A beautiful, modern todo list application with stunning day/night theme transitions featuring animated backgrounds, clouds, and twinkling stars.

# 🌟 Daily Tasks - Premium Todo List Application

A beautiful, modern todo list application with stunning day/night theme transitions featuring animated backgrounds, clouds, and twinkling stars.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Glass-morphism Design** - Modern, elegant glass card interface
- **Smooth Animations** - Fluid transitions and micro-interactions
- **Responsive Layout** - Works seamlessly on all devices

### 🌓 Day & Night Themes
- **Day Theme** 
  - Sky blue gradient background (sky → clouds → sunset)
  - Animated floating clouds
  - Warm, inviting sun icon
  
- **Night Theme**
  - Deep night gradient (navy → slate → purple)
  - 100+ twinkling stars with randomized animations
  - Peaceful moon icon
  
- **Smooth Theme Transitions** - 0.8s animated transitions between themes
- **Persistent Theme** - Your theme preference is saved automatically

### ✅ Todo Management
- ✏️ Add, edit, and delete tasks
- ✓ Mark tasks as complete/incomplete
- 🔍 Filter tasks (All, Active, Completed)
- 📊 Live task counter
- 🗑️ Bulk delete completed tasks
- 💾 Auto-save to localStorage

### 🎭 Visual Effects
- Animated background gradients
- Floating clouds in day mode
- Twinkling stars in night mode
- Glass-morphism effects
- Smooth slide-in animations
- Ambient pulsing light effects

## 🚀 Live Demo

### Day Theme
![Day Theme](screenshots/day-theme.png)

### Night Theme
![Night Theme](screenshots/night-theme.png)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, animations, and gradients
- **JavaScript (ES6+)** - Vanilla JS with modern features
- **LocalStorage API** - Data persistence
- **Google Fonts** - Inter & Outfit typefaces

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/blakshmankumarroyals/daily-tasks.git
   cd daily-tasks
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve
   ```

3. **That's it!** No build process or dependencies required.

## 🎯 Usage

1. **Add a Task** - Type your task in the input field and press Enter or click the + button
2. **Complete a Task** - Click the checkbox next to any task
3. **Delete a Task** - Hover over a task and click the trash icon
4. **Filter Tasks** - Use the All/Active/Completed buttons
5. **Clear Completed** - Click "Clear Completed" to remove all finished tasks
6. **Toggle Theme** - Click the sun/moon icon in the header

## 📁 Project Structure

```
daily-tasks/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Application logic
└── README.md          # Project documentation
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #4f46e5;        /* Primary color */
    --bg-color: #f3f4f6;       /* Background */
    --text-main: #1a1a1a;      /* Text color */
    /* ... more variables */
}
```

### Adjusting Animations

Modify animation durations and effects:

```css
@keyframes twinkle {
    /* Star twinkling effect */
}

@keyframes float {
    /* Cloud floating effect */
}
```

## 🌟 Features Breakdown

### Theme System
- Automatic theme detection
- Manual theme toggle
- Smooth transitions
- LocalStorage persistence

### Task Filters
- **All** - Shows all tasks
- **Active** - Shows incomplete tasks only
- **Completed** - Shows finished tasks only

### Data Persistence
All tasks are automatically saved to browser's localStorage, so your tasks persist even after closing the browser.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search functionality
- [ ] Export/Import tasks
- [ ] Multiple task lists
- [ ] Drag and drop reordering
- [ ] Dark mode auto-switch based on time

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Lakshman Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Lakshman Kumar**

- GitHub: [@blakshmankumarroyals(https://github.com/blakshmankumarroyals)

## 🙏 Acknowledgments

- Icons from Feather Icons
- Fonts from Google Fonts
- Inspiration from modern design trends

## 📞 Support

If you like this project, please give it a ⭐️!

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by Lakshman Kumar

