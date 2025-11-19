# WonderKids Math Playground

Welcome to the WonderKids Math Playground! This project is designed to help kids learn math in a fun and engaging way through interactive games and challenges.

## Project Structure

The project is organized into several directories and files:

- **public/**: Contains the HTML files for the application.
  - `index.html`: Main entry point of the application.
  - `login.html`: User login page.
  - `register.html`: User registration page.
  - `dashboard.html`: User dashboard for accessing games and scores.
  - `game.html`: Game interface for playing math games.
  - `leaderboard.html`: Displays the leaderboard of scores.

- **assets/**: Contains the CSS and JavaScript files.
  - **css/**: Custom styles for the application.
    - `styles.css`: Enhances the visual appearance of the HTML pages.
  - **js/**: JavaScript files for game functionality.
    - `game.js`: Handles game logic and user interactions.
    - `timer.js`: Manages timers within the games.
    - `utils.js`: Utility functions for various JavaScript operations.

- **api/**: Contains PHP files for backend functionality.
  - **auth/**: Handles user authentication.
    - `login.php`: Validates user login requests.
    - `register.php`: Handles user registration.
    - `logout.php`: Manages user logout.
  - **game/**: Manages game-related operations.
    - `getQuestion.php`: Retrieves random math questions.
    - `submitAnswer.php`: Processes user answer submissions.
    - `getScore.php`: Retrieves the user's current score.
  - **leaderboard/**: Manages leaderboard data.
    - `getLeaderboard.php`: Retrieves leaderboard information.

- **config/**: Contains configuration files.
  - `database.php`: Database connection settings.

- **includes/**: Contains reusable components for the application.
  - `header.php`: Common header section for HTML pages.
  - `footer.php`: Common footer section for HTML pages.
  - `session.php`: Manages user session handling.

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Set Up the Database**: Create a database and configure the connection settings in `config/database.php`.
3. **Run a Local Server**: Use a local server environment (like XAMPP or MAMP) to run the PHP files.
4. **Access the Application**: Open `public/index.html` in your web browser to start using the Math Playground.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License

This project is open-source and available under the MIT License.