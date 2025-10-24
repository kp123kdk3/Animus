// Animus - Main JavaScript File for Mockups

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save theme preference
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // Initialize interactive features based on page
    initializeFeatures();
});

function initializeFeatures() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Filter functionality
    const filterSelects = document.querySelectorAll('.select-field');
    filterSelects.forEach(select => {
        select.addEventListener('change', handleFilter);
    });

    // Checkbox functionality
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Action buttons
    initializeActionButtons();
}

// Search Handler
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('.assignment-table tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

// Filter Handler
function handleFilter() {
    const courseFilter = document.querySelector('.select-field[value*="Course"]');
    const statusFilter = document.querySelector('.select-field[value*="Status"]');
    const priorityFilter = document.querySelector('.select-field[value*="Priority"]');

    // This would contain logic to filter assignments
    // For mockup purposes, we'll just log the selection
    console.log('Filters applied');
}

// Checkbox Change Handler
function handleCheckboxChange(event) {
    const checkbox = event.target;
    const row = checkbox.closest('tr');

    if (row) {
        if (checkbox.checked) {
            row.style.backgroundColor = 'var(--gray-50)';
        } else {
            row.style.backgroundColor = '';
        }
    }
}

// Initialize Action Buttons
function initializeActionButtons() {
    // Add Assignment Button
    const addButtons = document.querySelectorAll('.btn-primary');
    addButtons.forEach(button => {
        if (button.textContent.includes('Add')) {
            button.addEventListener('click', () => {
                alert('Add Assignment modal would open here');
            });
        }
    });

    // Sync Button
    const syncButtons = document.querySelectorAll('button[title*="Sync"]');
    syncButtons.forEach(button => {
        button.addEventListener('click', handleSync);
    });

    // View Details Buttons
    const detailButtons = document.querySelectorAll('button[title*="View details"]');
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row) {
                const assignmentName = row.querySelector('td:nth-child(2) div').textContent;
                alert(`View details for: ${assignmentName}`);
            }
        });
    });

    // Grade Calculator Button
    const calculatorButtons = document.querySelectorAll('button');
    calculatorButtons.forEach(button => {
        if (button.textContent.includes('Calculator')) {
            button.addEventListener('click', openGradeCalculator);
        }
    });
}

// Sync Handler with Animation
function handleSync(event) {
    const button = event.target.closest('button');
    const svg = button.querySelector('svg');

    // Add rotation animation
    svg.style.animation = 'spin 1s linear infinite';

    // Simulate API call
    setTimeout(() => {
        svg.style.animation = '';
        showNotification('Synced with Canvas successfully!', 'success');
    }, 2000);
}

// Grade Calculator Modal
function openGradeCalculator() {
    // This would open a modal with grade calculation features
    alert('Grade Calculator modal would open here with:\n- What-if scenarios\n- Weighted calculations\n- Target grade calculator');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Calendar Event Handlers
if (window.location.pathname.includes('calendar')) {
    const calendarEvents = document.querySelectorAll('.calendar-event');
    calendarEvents.forEach(event => {
        event.addEventListener('click', () => {
            const eventText = event.textContent.trim();
            alert(`Event details for: ${eventText}`);
        });
    });

    // Month navigation
    const prevButton = document.querySelector('.btn-icon:first-of-type');
    const nextButton = document.querySelector('.btn-icon:nth-of-type(2)');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            console.log('Navigate to previous month');
        });

        nextButton.addEventListener('click', () => {
            console.log('Navigate to next month');
        });
    }
}

// Grades Page - Course Card Interactions
if (window.location.pathname.includes('grades')) {
    const viewDetailButtons = document.querySelectorAll('.btn-secondary');
    viewDetailButtons.forEach(button => {
        if (button.textContent.includes('View Details')) {
            button.addEventListener('click', () => {
                const card = button.closest('.card');
                const courseName = card.querySelector('h3').textContent;
                alert(`Detailed breakdown for ${courseName} would open here`);
            });
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* Smooth transitions */
    * {
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    /* Hover effects */
    .assignment-table tbody tr {
        transition: background-color 0.15s ease;
    }

    .calendar-event {
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .calendar-event:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);

// Utility Functions

// Format date to readable string
function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Calculate days until due date
function daysUntil(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Get priority color
function getPriorityColor(priority) {
    const colors = {
        high: '#ef4444',
        medium: '#f59e0b',
        low: '#10b981'
    };
    return colors[priority.toLowerCase()] || colors.medium;
}

// Calculate grade percentage
function calculateGrade(earned, total) {
    return ((earned / total) * 100).toFixed(2);
}

// Export to iCal (Calendar page)
function exportToICal() {
    alert('Export to iCal functionality would generate an .ics file here');
}

// Console welcome message
console.log('%c Animus - Student Productivity Platform ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('Built with ❤️ for students');
console.log('This is a mockup - JavaScript functionality is simulated');
