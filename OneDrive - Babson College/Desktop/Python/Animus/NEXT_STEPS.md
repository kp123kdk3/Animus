# Next Steps - From Mockups to Full Application

This document outlines the recommended steps to transform the Animus mockups into a fully functional web application.

---

## 📋 Phase 1: Project Setup & Foundation (Week 1-2)

### 1.1 Initialize Frontend Project
```bash
# Create React app with TypeScript
npx create-react-app frontend --template typescript

# Or use Vite (recommended for better performance)
npm create vite@latest frontend -- --template react-ts

# Install dependencies
cd frontend
npm install tailwindcss @tailwindcss/forms axios react-router-dom
npm install @tanstack/react-query date-fns chart.js react-chartjs-2
npm install @headlessui/react @heroicons/react
npm install -D @types/node
```

### 1.2 Initialize Backend Project
```bash
# Create backend directory
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express cors dotenv jsonwebtoken bcrypt pg
npm install axios canvas-api oauth2-server
npm install -D typescript @types/express @types/node ts-node nodemon
npm install -D @types/jsonwebtoken @types/bcrypt @types/cors

# Initialize TypeScript
npx tsc --init
```

### 1.3 Setup Database
```bash
# Install PostgreSQL (if not already installed)
# macOS: brew install postgresql
# Windows: Download from postgresql.org

# Create database
createdb animus_dev

# Install Prisma ORM (recommended)
npm install prisma @prisma/client
npx prisma init
```

### 1.4 Setup Environment Variables
Create `.env` files in both frontend and backend:

**Backend `.env`:**
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/animus_dev

# Canvas API
CANVAS_CLIENT_ID=your_canvas_client_id
CANVAS_CLIENT_SECRET=your_canvas_client_secret
CANVAS_REDIRECT_URI=http://localhost:5000/api/auth/canvas/callback
CANVAS_API_URL=https://your-institution.instructure.com

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d

# Encryption
ENCRYPTION_KEY=your_32_character_encryption_key
```

**Frontend `.env`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_CANVAS_URL=https://your-institution.instructure.com
```

---

## 📊 Phase 2: Backend Development (Week 3-5)

### 2.1 Database Schema Setup

Create Prisma schema (`prisma/schema.prisma`):
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String   @id @default(uuid())
  email        String   @unique
  canvasToken  String?  @map("canvas_token")
  preferences  Json?
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  courses      Course[]

  @@map("users")
}

model Course {
  id              String   @id @default(uuid())
  userId          String   @map("user_id")
  canvasCourseId  String   @map("canvas_course_id")
  name            String
  color           String
  createdAt       DateTime @default(now()) @map("created_at")

  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  assignments     Assignment[]

  @@map("courses")
}

model Assignment {
  id                  String    @id @default(uuid())
  courseId            String    @map("course_id")
  canvasAssignmentId  String    @map("canvas_assignment_id")
  title               String
  description         String?
  dueDate             DateTime? @map("due_date")
  priority            String    @default("medium")
  completed           Boolean   @default(false)
  pointsPossible      Decimal?  @map("points_possible")
  createdAt           DateTime  @default(now()) @map("created_at")

  course              Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)
  grade               Grade?

  @@map("assignments")
}

model Grade {
  id            String      @id @default(uuid())
  assignmentId  String      @unique @map("assignment_id")
  score         Decimal?
  gradedAt      DateTime?   @map("graded_at")
  createdAt     DateTime    @default(now()) @map("created_at")

  assignment    Assignment  @relation(fields: [assignmentId], references: [id], onDelete: Cascade)

  @@map("grades")
}
```

Run migrations:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 2.2 Canvas API Integration Service

Create `backend/src/services/canvasApi.ts`:
```typescript
import axios from 'axios';

export class CanvasApiService {
  private baseUrl: string;
  private accessToken: string;

  constructor(accessToken: string) {
    this.baseUrl = process.env.CANVAS_API_URL!;
    this.accessToken = accessToken;
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
  }

  async getCourses() {
    const response = await axios.get(
      `${this.baseUrl}/api/v1/courses`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getAssignments(courseId: string) {
    const response = await axios.get(
      `${this.baseUrl}/api/v1/courses/${courseId}/assignments`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getGrades(courseId: string) {
    const response = await axios.get(
      `${this.baseUrl}/api/v1/courses/${courseId}/students/submissions`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }
}
```

### 2.3 API Routes Structure

Create these route files:
- `backend/src/routes/auth.routes.ts` - Authentication
- `backend/src/routes/assignments.routes.ts` - Assignment CRUD
- `backend/src/routes/courses.routes.ts` - Course management
- `backend/src/routes/grades.routes.ts` - Grade tracking

### 2.4 Authentication Middleware

Create `backend/src/middleware/auth.ts`:
```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

---

## 🎨 Phase 3: Frontend Development (Week 6-9)

### 3.1 Component Structure

Create these component directories:
```
frontend/src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── AssignmentTable.tsx
│   │   └── FilterBar.tsx
│   ├── calendar/
│   │   ├── CalendarGrid.tsx
│   │   ├── CalendarEvent.tsx
│   │   └── CalendarControls.tsx
│   ├── grades/
│   │   ├── GradeChart.tsx
│   │   ├── CourseCard.tsx
│   │   └── GradeCalculator.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Input.tsx
```

### 3.2 State Management Setup

Choose one:

**Option A: React Context (Simpler)**
```typescript
// src/context/AuthContext.tsx
// src/context/AssignmentContext.tsx
// src/context/ThemeContext.tsx
```

**Option B: Redux Toolkit (More scalable)**
```bash
npm install @reduxjs/toolkit react-redux
```

### 3.3 API Integration Layer

Create `frontend/src/api/client.ts`:
```typescript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

### 3.4 Convert Mockups to React Components

Start with Dashboard:
```typescript
// src/pages/Dashboard.tsx
import { useQuery } from '@tanstack/react-query';
import { getAssignments } from '../api/assignments';
import AssignmentTable from '../components/dashboard/AssignmentTable';
import StatsCard from '../components/dashboard/StatsCard';

export default function Dashboard() {
  const { data: assignments, isLoading } = useQuery({
    queryKey: ['assignments'],
    queryFn: getAssignments,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* Convert mockup HTML to React components */}
    </div>
  );
}
```

---

## 🔄 Phase 4: Integration & Testing (Week 10-11)

### 4.1 Canvas OAuth Flow

Implement the full OAuth flow:
1. User clicks "Connect Canvas"
2. Redirect to Canvas authorization page
3. Canvas redirects back with authorization code
4. Exchange code for access token
5. Store encrypted token in database
6. Sync initial data

### 4.2 Real-time Sync Implementation

Create a background job to sync Canvas data:
```typescript
// backend/src/jobs/syncCanvas.ts
import cron from 'node-cron';

// Run every 15 minutes
cron.schedule('*/15 * * * *', async () => {
  // Sync all users' Canvas data
  await syncAllUsersData();
});
```

### 4.3 Testing

**Backend Tests:**
```bash
npm install -D jest supertest @types/jest
```

**Frontend Tests:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**E2E Tests:**
```bash
npm install -D cypress
```

---

## 🚀 Phase 5: Deployment (Week 12)

### 5.1 Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

### 5.2 Backend Deployment (Railway)

1. Create Railway account
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically on push

### 5.3 Database (Railway PostgreSQL)

1. Provision PostgreSQL database
2. Update DATABASE_URL in environment
3. Run migrations in production

---

## 📚 Additional Resources

### Canvas API Documentation
- [Canvas REST API](https://canvas.instructure.com/doc/api/)
- [OAuth 2.0 Flow](https://canvas.instructure.com/doc/api/file.oauth.html)

### Learning Resources
- React TypeScript: [react-typescript-cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- Express.js: [expressjs.com](https://expressjs.com/)
- Prisma: [prisma.io/docs](https://www.prisma.io/docs)

---

## ✅ Pre-Development Checklist

- [ ] Canvas Developer Key obtained
- [ ] Node.js v18+ installed
- [ ] PostgreSQL installed and running
- [ ] Git repository initialized
- [ ] Design mockups reviewed and approved
- [ ] Tech stack confirmed
- [ ] Development environment ready
- [ ] API access tokens configured

---

## 🎯 Success Metrics

Track these KPIs during development:
- Page load time < 2 seconds
- API response time < 500ms
- Test coverage > 80%
- Zero critical security vulnerabilities
- Mobile responsive on all breakpoints
- Accessibility score > 90 (Lighthouse)

---

**Ready to start coding? Begin with Phase 1.1!**

Good luck building Animus! 🚀
