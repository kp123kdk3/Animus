# Animus - Student Productivity Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-mockup-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

**Animus** is a modern student productivity web application that integrates with Canvas LMS to provide a unified dashboard for assignment management, grade tracking, and calendar visualization.

---

## 🎯 Problem Statement

Canvas LMS has a fragmented interface that forces students to:
- Navigate multiple pages to see all assignments
- Manually track priorities and deadlines
- Switch between different views for grades and calendar
- Lack a unified view of their academic workload

**Animus solves this** by centralizing all Canvas data into one powerful, intuitive dashboard.

---

## ✨ Key Features

### 1. **Unified Assignment Dashboard**
- View all assignments from all courses in one place
- Sort by due date, priority, course, or completion status
- Quick actions: mark complete, edit priority, view details
- Smart search and filtering across all assignments

### 2. **Task Prioritization System**
- User-defined priority levels (High/Medium/Low)
- Visual indicators with color coding
- Drag-and-drop reordering
- Bulk editing capabilities

### 3. **Canvas API Integration**
- OAuth 2.0 authentication
- Automatic sync every 15 minutes
- Real-time grade updates
- Secure token storage

### 4. **Grade Tracking & Visualization**
- Interactive charts showing grade trends over time
- Per-course grade breakdowns
- GPA calculation (cumulative and semester)
- Color-coded performance indicators

### 5. **What-If Grade Calculator**
- Input hypothetical grades to see impact on final grade
- Weighted calculations based on syllabus categories
- Calculate points needed to achieve target grades
- Per-course calculator with category breakdowns

### 6. **Unified Calendar View**
- Month/week/day views
- Color-coded by course
- Visual distinction between assignments and exams
- Export to Google Calendar/iCal

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#2563eb` - Brand color, CTAs
- **Success Green:** `#10b981` - Completed items
- **Warning Orange:** `#f59e0b` - Due soon
- **Danger Red:** `#ef4444` - Overdue, high priority

### Typography
- **Font Family:** Inter (primary), Fira Code (monospace for grades)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- Modern card-based design
- Responsive grid layout
- Dark mode support
- Accessible (WCAG 2.1 AA compliant)

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for complete specifications.

---

## 📁 Project Structure

```
Animus/
├── mockups/                    # HTML/CSS mockups
│   ├── dashboard.html         # Main dashboard view
│   ├── calendar.html          # Calendar view
│   ├── grades.html            # Grades & performance view
│   ├── css/
│   │   └── styles.css         # Complete design system
│   └── js/
│       └── main.js            # Interactive functionality
├── frontend/                   # React frontend (to be built)
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── context/           # Context providers
│   │   ├── utils/             # Utility functions
│   │   └── App.tsx            # Main app component
│   └── public/
├── backend/                    # Node.js/Express backend (to be built)
│   ├── src/
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # Database models
│   │   ├── middleware/        # Express middleware
│   │   ├── services/          # Business logic
│   │   │   └── canvasApi.ts   # Canvas API integration
│   │   └── server.ts          # Express server
│   └── config/
│       └── database.ts        # Database configuration
├── DESIGN_SYSTEM.md           # Complete design documentation
├── README.md                  # This file
└── package.json               # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Canvas LMS account with API access
- Git

### Viewing Mockups (Current Stage)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/animus.git
   cd animus
   ```

2. **Open mockups in browser:**
   ```bash
   # Option 1: Direct open
   open mockups/dashboard.html

   # Option 2: Use a local server (recommended)
   npx serve mockups
   ```

3. **Navigate between views:**
   - Dashboard: `mockups/dashboard.html`
   - Calendar: `mockups/calendar.html`
   - Grades: `mockups/grades.html`

### Development Setup (Next Phase)

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your Canvas API credentials

# Setup database
npm run db:setup

# Run development servers
npm run dev:frontend    # React dev server (port 3000)
npm run dev:backend     # Express server (port 5000)
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API / Redux
- **Charts:** Chart.js or Recharts
- **HTTP Client:** Axios
- **Date Handling:** date-fns

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma or TypeORM
- **Authentication:** JWT + OAuth 2.0
- **API Integration:** Canvas LMS REST API

### DevOps
- **Version Control:** Git/GitHub
- **Deployment:**
  - Frontend: Vercel/Netlify
  - Backend: Railway/Heroku
  - Database: Railway/Supabase
- **CI/CD:** GitHub Actions

---

## 📊 Database Schema

### Users
```sql
id              UUID PRIMARY KEY
email           VARCHAR(255) UNIQUE
canvas_token    TEXT (encrypted)
preferences     JSONB
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### Courses
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id)
canvas_course_id VARCHAR(50)
name            VARCHAR(255)
color           VARCHAR(7)
created_at      TIMESTAMP
```

### Assignments
```sql
id                  UUID PRIMARY KEY
course_id           UUID REFERENCES courses(id)
canvas_assignment_id VARCHAR(50)
title               VARCHAR(255)
description         TEXT
due_date            TIMESTAMP
priority            VARCHAR(10)
completed           BOOLEAN
points_possible     DECIMAL
created_at          TIMESTAMP
```

### Grades
```sql
id              UUID PRIMARY KEY
assignment_id   UUID REFERENCES assignments(id)
score           DECIMAL
graded_at       TIMESTAMP
created_at      TIMESTAMP
```

---

## 🔒 Security Considerations

- Canvas API tokens stored encrypted using AES-256
- JWT tokens for session management
- HTTPS only in production
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- SQL injection prevention via ORM
- XSS protection

---

## 📈 Development Roadmap

### Phase 1: MVP (Weeks 1-4)
- [x] Design mockups and UI/UX
- [ ] Project setup and boilerplate
- [ ] Canvas OAuth integration
- [ ] Basic assignment dashboard
- [ ] Simple calendar view
- [ ] Grade visualization

### Phase 2: Core Features (Weeks 5-8)
- [ ] Priority management system
- [ ] Advanced filtering and search
- [ ] Grade calculator
- [ ] Real-time Canvas sync
- [ ] Notification system
- [ ] Dark mode

### Phase 3: Enhancement (Weeks 9-12)
- [ ] Mobile responsive design
- [ ] Performance optimization
- [ ] Analytics dashboard
- [ ] Export functionality
- [ ] User preferences
- [ ] Testing suite

### Phase 4: Future (Post-Launch)
- [ ] Mobile app (React Native)
- [ ] Collaborative features
- [ ] AI-powered study recommendations
- [ ] Integration with other LMS platforms
- [ ] Browser extension

---

## 🧪 Testing Strategy

### Unit Tests
- Jest for React components
- Supertest for API endpoints
- 80%+ code coverage target

### Integration Tests
- Test Canvas API integration
- Database operations
- Authentication flow

### E2E Tests
- Cypress for user flows
- Critical path testing
- Cross-browser compatibility

---

## 📝 API Endpoints (Planned)

### Authentication
```
POST   /api/auth/canvas/callback    # OAuth callback
POST   /api/auth/login              # Login
POST   /api/auth/logout             # Logout
GET    /api/auth/verify             # Verify token
```

### Assignments
```
GET    /api/assignments             # Get all assignments
GET    /api/assignments/:id         # Get single assignment
POST   /api/assignments             # Create assignment
PUT    /api/assignments/:id         # Update assignment
DELETE /api/assignments/:id         # Delete assignment
POST   /api/assignments/sync        # Sync with Canvas
```

### Grades
```
GET    /api/grades                  # Get all grades
GET    /api/grades/course/:id       # Get grades by course
POST   /api/grades/calculate        # Calculate what-if grades
```

### Courses
```
GET    /api/courses                 # Get all courses
GET    /api/courses/:id             # Get single course
POST   /api/courses/sync            # Sync with Canvas
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Canvas LMS for providing the API
- Inter font family by Rasmus Andersson
- Lucide icons for beautiful SVG icons
- Tailwind CSS for the utility-first CSS framework

---

## 📞 Support

For support, email support@animus.app or open an issue on GitHub.

---

## 🎓 For Students, By Students

Animus is built with student needs in mind. Our goal is to make academic management less stressful and more productive.

**Made with ❤️ by students, for students**
