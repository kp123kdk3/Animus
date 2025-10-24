# Animus Mockup Guide

## 🎨 Viewing the Mockups

### Quick Start
Open any of these files in your browser:
- `mockups/dashboard.html` - Main dashboard with assignment table
- `mockups/calendar.html` - Calendar view with monthly layout
- `mockups/grades.html` - Grades and performance tracking

### Best Experience
Use a local server to avoid CORS issues:

```bash
# Option 1: Using Python
cd mockups
python -m http.server 8000
# Then open: http://localhost:8000/dashboard.html

# Option 2: Using Node.js
npx serve mockups
# Then open the URL shown in terminal

# Option 3: Using VS Code
# Install "Live Server" extension
# Right-click on dashboard.html > "Open with Live Server"
```

---

## 📱 Interactive Features

### Dark Mode Toggle
- Click the moon icon in the header
- Preference is saved to localStorage
- Works across all pages

### Search & Filter
- **Search bar**: Type to filter assignments in real-time
- **Course filter**: Filter by specific course
- **Status filter**: Show only upcoming/overdue/completed
- **Priority filter**: Filter by High/Medium/Low priority

### Interactive Elements
- **Checkboxes**: Select multiple assignments
- **Action buttons**: Simulated modal dialogs
- **Sync button**: Animated rotation on click
- **Calendar events**: Click to view details
- **Grade cards**: View detailed breakdowns

---

## 🎯 Key Design Features

### 1. Dashboard View (`dashboard.html`)

**Stats Cards:**
- Total assignments count
- Completion rate
- Overdue warnings
- Average grade

**Assignment Table:**
- Sortable columns
- Priority badges (High/Medium/Low)
- Status indicators
- Course tags with colors
- Due date countdown
- Points display

**Color Coding:**
- 🔴 Red = Overdue/High Priority
- 🟡 Yellow = Due Soon/Medium Priority
- 🟢 Green = Completed/Low Priority
- 🔵 Blue = Course-specific colors

### 2. Calendar View (`calendar.html`)

**Features:**
- Month/Week/Day view toggle
- Course color legend
- Event filtering (Exams/Assignments)
- Today indicator (highlighted in blue)
- Previous/Next month navigation
- Export to iCal button

**Calendar Events:**
- Color-coded by course
- Hover effects
- Click to view details
- Upcoming events list below calendar

### 3. Grades View (`grades.html`)

**GPA Overview:**
- Cumulative GPA
- Semester GPA
- Current average
- Trend indicators

**Grade Trends Chart:**
- Line chart showing grade progression
- Multiple courses visualized
- Color-coded by course
- Week-by-week breakdown

**Course Cards:**
- Current grade percentage
- Letter grade
- Progress bar
- Grade breakdown by category (Homework, Exams, etc.)
- Weighted calculations
- "View Details & Calculator" button

**What-If Calculator:**
- Prominent call-to-action card
- Gradient background
- Calculate hypothetical grades

---

## 🎨 Design System Reference

### Colors

| Usage | Color | Hex Code |
|-------|-------|----------|
| Primary Blue | 🔵 | `#2563eb` |
| Success Green | 🟢 | `#10b981` |
| Warning Orange | 🟡 | `#f59e0b` |
| Danger Red | 🔴 | `#ef4444` |
| Info Purple | 🟣 | `#8b5cf6` |

### Typography

| Element | Size | Weight |
|---------|------|--------|
| Page Title | 32px | Bold (700) |
| Section Header | 20px | Semibold (600) |
| Card Title | 18px | Semibold (600) |
| Body Text | 16px | Regular (400) |
| Small Text | 14px | Regular (400) |
| Caption | 12px | Regular (400) |

### Spacing

| Name | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |

### Components

**Buttons:**
- Primary: Blue background, white text
- Secondary: Gray background, bordered
- Icon: Transparent with border

**Cards:**
- White background (light mode)
- 12px border radius
- Subtle shadow
- 20px padding

**Badges:**
- Small, rounded pills
- Color-coded by priority/status
- Icon + text

---

## 💡 Design Decisions

### Why This Layout?
1. **Sidebar Navigation**: Fixed left sidebar for easy access to all sections
2. **Card-Based Design**: Clean, modern, and easy to scan
3. **Color Coding**: Visual hierarchy helps identify priorities quickly
4. **Responsive Grid**: Adapts to different screen sizes
5. **Consistent Spacing**: 8px grid system for visual harmony

### Accessibility Considerations
- High contrast ratios (WCAG AA compliant)
- Large touch targets (44x44px minimum)
- Clear visual hierarchy
- Descriptive button labels
- Keyboard navigation support

### Mobile Responsiveness
- Sidebar collapses on tablets
- Table becomes horizontally scrollable
- Stats cards stack vertically
- Calendar adapts to smaller screens

---

## 🔄 Mockup to React Conversion

### Component Mapping

**Sidebar** → `components/layout/Sidebar.tsx`
```typescript
<Sidebar>
  <Logo />
  <Navigation items={navItems} />
  <UserProfile />
</Sidebar>
```

**Stats Cards** → `components/dashboard/StatsCard.tsx`
```typescript
<StatsGrid>
  <StatsCard
    icon="📚"
    label="Total Assignments"
    value={24}
    trend="+8 this week"
  />
</StatsGrid>
```

**Assignment Table** → `components/dashboard/AssignmentTable.tsx`
```typescript
<AssignmentTable
  assignments={assignments}
  onSort={handleSort}
  onFilter={handleFilter}
/>
```

**Calendar** → `components/calendar/CalendarGrid.tsx`
```typescript
<CalendarGrid
  month={currentMonth}
  events={events}
  onEventClick={handleEventClick}
/>
```

**Grade Cards** → `components/grades/CourseCard.tsx`
```typescript
<CourseCard
  course={course}
  grade={grade}
  breakdown={gradeBreakdown}
/>
```

---

## 📝 Customization Tips

### Changing Colors
Edit `mockups/css/styles.css` root variables:
```css
:root {
    --primary-blue: #2563eb;  /* Change to your brand color */
    --success-green: #10b981;
    /* etc. */
}
```

### Adding Courses
Add more course tags with custom colors:
```html
<span class="course-tag" style="background-color: #fef3c7; color: #f59e0b;">
    NEW COURSE
</span>
```

### Modifying Layout
The mockups use CSS Grid and Flexbox:
- Stats grid: `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
- Sidebar: `width: 240px; position: fixed;`
- Main content: `margin-left: 240px; max-width: 1440px;`

---

## 🐛 Known Limitations (Mockup Stage)

These are intentional limitations of static mockups:
- ✗ No actual Canvas API integration
- ✗ No database persistence
- ✗ No user authentication
- ✗ Simulated interactions (alerts instead of modals)
- ✗ Static data only
- ✗ Charts are SVG illustrations, not dynamic

**All of these will be implemented in the full React/Node.js application!**

---

## 🚀 Next Steps After Mockup Review

1. **Review with stakeholders**: Get feedback on design
2. **Iterate on design**: Make any requested changes
3. **Get Canvas API access**: Apply for developer key
4. **Begin development**: Follow `NEXT_STEPS.md`

---

## 📞 Questions?

If you have questions about the mockups or design decisions, please:
- Review the `DESIGN_SYSTEM.md` for detailed specifications
- Check `README.md` for project overview
- See `NEXT_STEPS.md` for development roadmap

---

**Happy designing! 🎨✨**
