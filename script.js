document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const itemsLeft = document.getElementById('items-left');
    const clearCompletedBtn = document.getElementById('clear-completed');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const emptyState = document.getElementById('empty-state');
    const dateDisplay = document.getElementById('date-display');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // State
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let currentFilter = 'all';

    // Initialization
    renderTasks();
    updateDate();
    initTheme();
    createStars();
    createClouds();

    // Event Listeners
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    clearCompletedBtn.addEventListener('click', () => {
        todos = todos.filter(todo => !todo.completed);
        saveAndRender();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update UI
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update State
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    themeToggle.addEventListener('click', toggleTheme);

    // Functions
    function addTask() {
        const text = todoInput.value.trim();
        if (text === '') return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(newTodo);
        saveAndRender();
        todoInput.value = '';
    }

    function toggleTask(id) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        saveAndRender();
    }

    function deleteTask(id) {
        const item = document.querySelector(`[data-id="${id}"]`);
        if (item) {
            item.style.animation = 'slideOut 0.3s ease forwards';
            item.addEventListener('animationend', () => {
                todos = todos.filter(todo => todo.id !== id);
                saveAndRender();
            });
        }
    }

    function saveAndRender() {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTasks();
    }

    function renderTasks() {
        // Clear list
        todoList.innerHTML = '';

        // Filter tasks
        const filteredTodos = todos.filter(todo => {
            if (currentFilter === 'active') return !todo.completed;
            if (currentFilter === 'completed') return todo.completed;
            return true;
        });

        // Update counts
        const activeCount = todos.filter(t => !t.completed).length;
        itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;

        // Empty State Logic
        if (filteredTodos.length === 0) {
            emptyState.classList.add('visible');
        } else {
            emptyState.classList.remove('visible');
        }

        // Render Items
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.setAttribute('data-id', todo.id);

            li.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <button class="delete-btn" aria-label="Delete task">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            `;

            // Event Listeners for Item
            const checkbox = li.querySelector('.todo-checkbox');
            checkbox.addEventListener('change', () => toggleTask(todo.id));

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => deleteTask(todo.id));

            todoList.appendChild(li);
        });
    }

    function updateDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Theme Logic (Reused)
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateIcons(savedTheme);
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    }

    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Create Stars for Night Mode
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        
        // Generate 100 random stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation delay for twinkling effect
            star.style.animationDelay = Math.random() * 3 + 's';
            
            // Random size (some stars bigger than others)
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            starsContainer.appendChild(star);
        }
        
        document.body.appendChild(starsContainer);
    }

    // Create Clouds for Day Mode
    function createClouds() {
        const cloudsContainer = document.createElement('div');
        cloudsContainer.className = 'clouds';
        
        // Generate 5 clouds
        for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            
            // Random position
            cloud.style.left = Math.random() * 100 + '%';
            cloud.style.top = Math.random() * 60 + '%';
            
            // Random size
            const width = Math.random() * 80 + 80;
            const height = Math.random() * 40 + 40;
            cloud.style.width = width + 'px';
            cloud.style.height = height + 'px';
            
            // Random animation delay
            cloud.style.animationDelay = Math.random() * 10 + 's';
            cloud.style.animationDuration = (Math.random() * 20 + 30) + 's';
            
            cloudsContainer.appendChild(cloud);
        }
        
        document.body.appendChild(cloudsContainer);
    }
});
