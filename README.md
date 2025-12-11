# Forest Reserve Act

A web application for managing and tracking forest reserve information, built with a modern JavaScript stack.

## 📋 Overview

This project provides a comprehensive platform for forest reserve management, enabling users to view, manage, and interact with forest reserve data effectively.

## 🚀 Features

- Forest reserve data management
- AI-powered chatbot for forest reserve queries
- Interactive user interface
- RESTful API backend
- Responsive design
- Real-time data updates
- Natural language processing for user queries

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

### Backend
- Node.js
- Express.js
- Database integration

### AI/ML
- Hugging Face Transformers
- Natural Language Processing for chatbot functionality

## 📁 Project Structure

```
forest-reserve-act/
├── backend/          # Backend API server
│   ├── controllers/  # Request handlers
│   ├── models/      # Data models
│   ├── routes/      # API routes
│   └── config/      # Configuration files
├── frontend/        # Frontend application
│   ├── src/        # Source files
│   ├── public/     # Static assets
│   └── styles/     # CSS stylesheets
└── README.md
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB/PostgreSQL (depending on your database choice)
- Hugging Face API key (sign up at [huggingface.co](https://huggingface.co/))

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Harsh3991/forest-reserve-act.git
cd forest-reserve-act
```

2. Navigate to the backend directory:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the backend directory and add your environment variables:
```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
HUGGINGFACE_API_KEY=your_huggingface_api_key
HUGGINGFACE_MODEL=your_chosen_model_name
```

5. Start the backend server:
```bash
npm start
```

The backend server should now be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

4. Start the React development server:
```bash
npm start
```

The frontend application should now be running on `http://localhost:3000`

## 🎯 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Register/Login to access the application
3. Browse and manage forest reserve data
4. Use the AI chatbot to ask questions about forest reserves
5. Get intelligent responses powered by Hugging Face models
6. Use the dashboard to view statistics and information

## 🤖 Chatbot Features

The integrated AI chatbot uses Hugging Face models to provide:
- Natural language understanding of forest-related queries
- Intelligent responses about reserve information
- Context-aware conversations
- Quick answers to common questions about forests and reserves

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Forest Reserves
- `GET /api/reserves` - Get all forest reserves
- `GET /api/reserves/:id` - Get a specific reserve
- `POST /api/reserves` - Create a new reserve
- `PUT /api/reserves/:id` - Update a reserve
- `DELETE /api/reserves/:id` - Delete a reserve

### Chatbot
- `POST /api/chatbot/query` - Send a query to the AI chatbot
- `GET /api/chatbot/history` - Get conversation history

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development

### Running Tests
```bash
npm test
```

### Building for Production

Frontend:
```bash
cd frontend
npm run build
```

Backend:
```bash
cd backend
npm run build
```

## 🐛 Known Issues

- List any known issues here(For contributers)

## 🔮 Future Enhancements

- Mobile application (React Native)
- Advanced chatbot capabilities with more Hugging Face models
- Voice-based interaction with the chatbot
- Advanced search and filtering
- Data visualization and analytics
- Export functionality (PDF, Excel)
- Multi-language support for chatbot
- Offline chatbot mode
- Image recognition for forest species identification

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Harsh3991** - *Initial work* - [GitHub Profile](https://github.com/Harsh3991)

## 🙏 Acknowledgments

- Forest conservation organizations
- Open source community
- Contributors and testers

## 📞 Contact

For questions or suggestions, please open an issue on GitHub or contact the maintainer.

## 📊 Project Status

Active development - Contributions welcome!

---

Made with ❤️ for forest conservation
