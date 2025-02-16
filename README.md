# VanishifyX

VanishifyX is a web application that serves as a clone of [Eraser.io](https://eraser.io). It allows users to securely and privately erase digital content and data from their devices, offering an easy-to-use platform for online privacy. Built with modern web technologies, VanishifyX aims to provide a seamless, user-friendly experience for all who need secure data deletion.

## Features

- **Secure Data Erasure**: Completely erase files and sensitive information with no trace left behind.
- **User-Friendly Interface**: A clean, intuitive design for quick and efficient use.
- **Cross-Platform Support**: Works seamlessly across various devices and web browsers.
- **Privacy-Focused**: Ensures that all erasure actions are private and do not leave any metadata.

<!--## Demo

You can try out the live demo of VanishifyX at:  
**[VanishifyX Demo Link](https://your-demo-link.com)**

-->

## Technologies Used

- **Frontend**: 
  - NextJS (for building the user interface)
  - TailwindCSS (for styling)
  - Context (for state management)
- **Backend**: 
  - Node.js (for server-side logic)
  - Express.js (for API handling)
- **Database**: 
  - ConveexDB (for storing relavant data)
- **Authentication**:
  - Kind (for secure user login and registration)

## Installation

### Prerequisites

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/Gopala05/vanishifyx.git
    cd vanishifyx
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

    This will start the app at `http://localhost:3000`.

4. Run the Convex DB:

      ```bash
      npx convex dev
      ```

### Configuration

- Add your `.env` file with the required variables for database connection and other services:
  - `DB_URI`: MongoDB URI
  - `JWT_SECRET`: Secret key for JWT authentication

## Contributing

We welcome contributions! Here's how you can help improve VanishifyX:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a clear description of your changes.

Please ensure that your code adheres to the project’s coding standards and passes all tests before submitting a pull request.

## Acknowledgements

- [Eraser.io](https://eraser.io) for the inspiration behind the project.
- [React](https://reactjs.org/) for providing a flexible framework for building interactive UIs.
- [Node.js](https://nodejs.org/) for creating a fast backend environment.

<!--## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
-->
