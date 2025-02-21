# Backend-IA-SaaS-Chatbots
Backend (IA / SaaS Chatbots)

## Overview
Nest Chat App is a real-time chat application built with NestJS, featuring user authentication, role management, and AI-powered chat capabilities. The application allows users to communicate with agents in real-time and provides a robust backend for managing conversations and user data.

## Features
- **User Authentication**: Secure registration and login using JWT.
- **Role Management**: Different roles for Admin, Agent, and User.
- **Real-Time Chat**: WebSocket support for live chat between users and agents.
- **AI Integration**: Utilizes GPT-4 for intelligent responses in chat.
- **Conversation History**: Users can retrieve their chat history.
- **Task Management**: Uses RabbitMQ and Redis for handling heavy tasks and analytics.

## Project Structure
```
nest-chat-app
├── src
│   ├── app.module.ts
│   ├── main.ts
│   ├── auth
│   ├── users
│   ├── chat
│   ├── common
│   ├── redis
│   ├── rabbitmq
│   └── config
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/igorariza/Backend-IA-SaaS-Chatbots.git
   ```
2. Navigate to the project directory:
   ```
   cd nest-chat-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Ensure you have Redis and RabbitMQ running for the application to function correctly.
- Update the configuration files in the `src/config` directory as needed.

## Running the Application
To start the application, run:
```
npm run start:dev

```

## API Endpoints
- **POST /users/register**: Register a new user.
- **POST /users/login**: Login an existing user.
- **POST /chat**: Send a message and receive a response from AI.
- **GET /conversations**: Retrieve conversation history for the logged-in user.

## WebSocket
- **/live-chat**: Establish a WebSocket connection for real-time chat.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Arquitecture
![Arquitecture](https://github.com/user-attachments/assets/d9f2456d-e6e3-4aa3-87a3-025e660d3f26)
```