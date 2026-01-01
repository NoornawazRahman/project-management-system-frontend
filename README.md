# Project Management System

A full-featured project management application built with React, Redux, and modern UI components. This system allows teams to collaborate on projects, manage issues, communicate in real-time, and track project progress.

## Features

### 🎯 Core Functionality
- **Project Management**: Create, update, delete, and search projects
- **Issue Tracking**: Create and manage issues with status tracking (To Do, In Progress, Done)
- **Team Collaboration**: Invite team members and assign issues
- **Real-time Chat**: Project-based chat for team communication
- **Comments**: Add and manage comments on issues
- **User Authentication**: Secure login and registration system
- **Subscription Plans**: Free, Monthly, and Annual plans with different features

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Redux** for state management with Redux Thunk
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Radix UI** primitives
- **Axios** for API calls

### UI Components
- Custom form components with React Hook Form
- Dialog modals
- Dropdown menus
- Scroll areas
- Tabs and badges
- Avatar components

## Project Structure

```
src/
├── Redux/              # Redux state management
│   ├── Auth/          # Authentication logic
│   ├── Project/       # Project management
│   ├── Issue/         # Issue tracking
│   ├── Chat/          # Real-time chat
│   ├── Comment/       # Comments system
│   ├── Subscription/  # Subscription handling
│   └── Store.js       # Redux store configuration
├── pages/             # Application pages
│   ├── Auth/          # Login/Signup pages
│   ├── Home/          # Home dashboard
│   ├── ProjectList/   # Projects listing
│   ├── ProjectDetails/ # Project details view
│   ├── IssueDetails/  # Issue details view
│   ├── Subscription/  # Subscription plans
│   └── Navbar/        # Navigation bar
├── components/        # Reusable UI components
│   └── ui/           # shadcn/ui components
├── config/           # Configuration files
│   └── api.js        # API configuration
└── lib/              # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend API running (default: http://localhost:5454)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-management-system.git
cd project-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Configure the API endpoint:
Edit `src/config/api.js` to point to your backend API:
```javascript
export const API_BASE_URL = "http://localhost:5454"
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration

### API Configuration
The application connects to a backend API. Configure the base URL in `src/config/api.js`:

```javascript
export const API_BASE_URL = "http://localhost:5454"
```

### Authentication
JWT tokens are stored in localStorage for authentication. The token is automatically included in API requests.

## Features in Detail

### Project Management
- Create projects with categories (Fullstack, Frontend, Backend)
- Tag projects with technologies (React, Spring Boot, MySQL, etc.)
- Filter and search projects
- Delete and update projects

### Issue Tracking
- Create issues within projects
- Set issue status (Pending, In Progress, Done)
- Assign issues to team members
- Track issue details and descriptions

### Team Collaboration
- Invite users to projects via email
- Accept project invitations
- View team members
- Assign tasks to specific users

### Chat System
- Project-specific chat rooms
- Real-time message updates
- Message history
- User avatars and names

### Subscription System
- **Free Plan**: 3 projects, basic features
- **Monthly Plan**: ₹799/month, unlimited projects
- **Annual Plan**: ₹6,711/year (30% discount)
- Integrated payment gateway
- Upgrade/downgrade functionality

## Environment Setup

Create a `.env` file in the root directory (if needed):
```env
VITE_API_BASE_URL=http://localhost:5454
```

## UI Theme

The application supports dark mode by default and uses a modern color scheme based on OKLCH color space:
- Primary colors for actions and emphasis
- Muted colors for secondary elements
- Destructive colors for delete actions
- Custom radius and spacing utilities

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## API Endpoints Used

The application connects to the following API endpoints:

- **Auth**: `/auth/signup`, `/auth/signin`
- **Users**: `/api/users/profile`
- **Projects**: `/api/projects`, `/api/projects/{id}`, `/api/projects/search`
- **Issues**: `/api/issues`, `/api/issues/{id}`, `/api/issues/project/{id}`
- **Comments**: `/api/comments`, `/api/comments/{id}`
- **Chat**: `/api/messages/send`, `/api/messages/chat/{id}`
- **Subscription**: `/api/subscription/user`, `/api/subscription/upgrade`
- **Payment**: `/api/payment/{planType}`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management

## Support

For support, open an issue in the GitHub repository.
