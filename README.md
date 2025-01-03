# UShop E-commerce Platform 🛍️

UShop is a modern, React-based e-commerce platform inspired by Jumia's mobile app interface. This project is currently under passive development and aims to provide a seamless shopping experience with a focus on mobile-first design and user experience.

## 🚧 Project Status

This project is currently in development. Many features are planned or in progress.

### ✅ Implemented Features
- Responsive mobile-first UI design
- Product listing with grid view
- Category browsing
- Shopping cart functionality
- Search interface
- Bottom navigation
- Flash sales section
- Basic routing structure

### 🔄 In Progress
- User authentication (Firebase integration)
- Protected routes
- User profile management
- Password reset functionality
- Email verification
- Shopping cart persistence

### 🎯 Planned Features
- Product details page
- Wishlist functionality
- Order management
- Payment integration
- Review and rating system
- Advanced search and filtering
- Product recommendations
- Order tracking

## 🛠 Tech Stack

- **Frontend Framework:** React.js
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **State Management:** React Context API
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod
- **Notifications:** React Hot Toast
- **API Integration:** Fetch API
- **Development Environment:** Replit

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "react-icons": "^5.0.1",
    "@radix-ui/react-slot": "^1.0.2",
    "clsx": "^2.1.0",
    "tailwindcss": "^3.4.1",
    "@tailwindcss/forms": "^0.5.7",
    "lucide-react": "^0.263.1",
    "firebase": "^10.x.x",
    "react-hot-toast": "^2.x.x",
    "@hookform/resolvers": "^3.x.x",
    "zod": "^3.x.x"
  }
}
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Reteecent/UShop
   cd ushop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project
   - Enable Authentication
   - Copy your Firebase config
   - Create `src/lib/firebase.js` with your config

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── BottomNav.jsx
│   └── ProtectedRoute.jsx
├── contexts/
│   └── AuthContext.jsx
├── lib/
│   └── firebase.js
├── pages/
│   ├── Home.jsx
│   ├── Categories.jsx
│   ├── Account.jsx
│   ├── Help.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ForgotPassword.jsx
│   └── UpdateProfile.jsx
├── styles/
│   └── globals.css
└── App.jsx
```

## 🤝 Contributing

This project is currently under initial development. Once it reaches a stable version, contribution guidelines will be added.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by Jumia's mobile app interface
- Product data provided by Fake Store API
- Icons from Lucide React
- UI components inspired by shadcn/ui

## 📬 Contact

For questions or feedback, please create an issue in the repository.

---

**Note:** This project is a work in progress, and features are being actively added and refined. Documentation will be updated as the project evolves.
