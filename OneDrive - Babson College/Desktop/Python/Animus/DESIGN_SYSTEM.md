# Animus Design System

## Brand Identity
**Product Name:** Animus
**Tagline:** "Your Academic Command Center"
**Mission:** Centralize Canvas LMS data into one powerful, intuitive dashboard

---

## Color Palette

### Primary Colors
- **Primary Blue:** `#2563eb` - Main brand color, CTAs, active states
- **Primary Blue Dark:** `#1e40af` - Hover states, emphasis
- **Primary Blue Light:** `#dbeafe` - Backgrounds, subtle accents

### Secondary Colors
- **Success Green:** `#10b981` - Completed assignments, positive feedback
- **Warning Orange:** `#f59e0b` - Due soon, medium priority
- **Danger Red:** `#ef4444` - Overdue, high priority, errors
- **Info Purple:** `#8b5cf6` - Exams, special events

### Neutral Colors
- **Gray 50:** `#f9fafb` - Page background (light mode)
- **Gray 100:** `#f3f4f6` - Card backgrounds
- **Gray 200:** `#e5e7eb` - Borders, dividers
- **Gray 600:** `#4b5563` - Secondary text
- **Gray 900:** `#111827` - Primary text, headings

### Dark Mode Colors
- **Dark BG Primary:** `#0f172a` - Main background
- **Dark BG Secondary:** `#1e293b` - Card backgrounds
- **Dark BG Tertiary:** `#334155` - Hover states
- **Dark Text Primary:** `#f1f5f9` - Main text
- **Dark Text Secondary:** `#94a3b8` - Secondary text

---

## Typography

### Font Families
- **Primary:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace:** `'Fira Code', 'Courier New', monospace` (for grades, numbers)

### Font Sizes
- **Heading 1:** `2.5rem` (40px) - Page titles
- **Heading 2:** `2rem` (32px) - Section headers
- **Heading 3:** `1.5rem` (24px) - Card titles
- **Body Large:** `1.125rem` (18px) - Important text
- **Body:** `1rem` (16px) - Default text
- **Body Small:** `0.875rem` (14px) - Secondary text, labels
- **Caption:** `0.75rem` (12px) - Timestamps, metadata

### Font Weights
- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700

---

## Spacing System
Based on 4px base unit:
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px

---

## Component Specifications

### Buttons
**Primary Button:**
- Background: Primary Blue
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Font Weight: 600
- Hover: Primary Blue Dark

**Secondary Button:**
- Background: Gray 100
- Text: Gray 900
- Border: 1px solid Gray 200
- Other specs: Same as primary

**Danger Button:**
- Background: Danger Red
- Text: White
- Other specs: Same as primary

### Cards
- Background: White (light) / Dark BG Secondary (dark)
- Border Radius: 12px
- Box Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Padding: 20px
- Border: 1px solid Gray 200

### Input Fields
- Height: 40px
- Border: 1px solid Gray 200
- Border Radius: 6px
- Padding: 10px 12px
- Focus: 2px border Primary Blue

### Priority Badges
- **High:** Background: Red/10, Text: Danger Red, Icon: 🔴
- **Medium:** Background: Orange/10, Text: Warning Orange, Icon: 🟡
- **Low:** Background: Green/10, Text: Success Green, Icon: 🟢

### Status Badges
- **Completed:** Green background, checkmark icon
- **In Progress:** Blue background, clock icon
- **Overdue:** Red background, alert icon
- **Upcoming:** Gray background, calendar icon

---

## Layout Structure

### Sidebar Navigation (240px width)
- Logo/Brand at top
- Navigation items with icons
- User profile at bottom
- Collapsible on mobile

### Main Content Area
- Max width: 1440px
- Padding: 32px
- Responsive grid system (12 columns)

### Mobile Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## Icons
Using **Lucide Icons** or **Heroicons**:
- Home: `home`
- Calendar: `calendar`
- Chart: `bar-chart-2`
- Settings: `settings`
- Plus: `plus`
- Filter: `filter`
- Search: `search`
- Check: `check`
- Alert: `alert-circle`

---

## Animations
- **Transition Duration:** 200ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Scale:** 1.02
- **Loading Spinner:** Rotate 360deg in 1s

---

## Accessibility
- **Minimum Contrast Ratio:** 4.5:1 for normal text
- **Focus States:** Visible 2px outline in Primary Blue
- **Touch Targets:** Minimum 44x44px
- **Screen Reader:** ARIA labels on all interactive elements
