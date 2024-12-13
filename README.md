# Urban Properties Web Application

**Urban Properties** is a web application designed for managing and displaying real estate properties in an urban area. The platform allows users to view available properties, including details such as name, location, price, and descriptions. Users can also log in to manage and view properties.

## Features

- **Login System**: Allows users to log in to the platform using a username and password.
- **Property Listing**: Displays a list of available properties with key details such as price, location, and descriptions.
- **Responsive Design**: The web pages are designed to be responsive and work well on both mobile and desktop devices.
- **Backend Integration**: Built with Flask, the backend uses SQLAlchemy to handle data and manage a MySQL database for properties and users.

## Installation

To get this application running locally, follow the steps below:

### 1. Clone the repository

Clone the repository to your local machine:

git clone https://github.com/yourusername/urban-properties.git

### 2. Navigate to the project folder
Move into the project directory:
cd urban-properties

###3. Activate the virtual environment:
ON WINDOWS
venv\Scripts\activate

### 4. Install the required dependencies
Install all necessary Python libraries:
pip install -r requirements.txt

###5. Set up the MySQL database
Make sure you have MySQL installed and running on your machine. Create a database named urban_properties and configure the database URI in app.py with your credentials:
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/urban_properties'

### 6. Initialize the database
Run the following command to initialize the database tables:
python app.py

### 7. Run the Flask application
Start the application with this command:
python app.py

The application should now be running at http://localhost:5000

## File Structure
app.py: Main backend logic (Flask API with SQLAlchemy database).
templates/: Contains the HTML files for the web pages.
index.html: Homepage with a brief introduction.
login.html: Login page for user authentication.
properties.html: Page to display a list of available properties.
static/: Contains the CSS, JavaScript, and image files.
style.css: Basic styles for the web pages.
login.js: JavaScript for handling the login functionality.
properties.js: JavaScript for fetching and displaying properties from the backend.
requirements.txt: List of required Python dependencies.

## Usage
After setting up and running the application locally, you can access it in your browser:
Login: Go to the login page (/login.html) and enter your credentials to log in.
View Properties: After logging in, navigate to the properties page (/properties.html) to see a list of available properties.
Admin Actions: Depending on the implementation, admins can manage properties (add, edit, delete) via backend logic.

## Technologies Used
Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: Flask (Python), SQLAlchemy
Database: MySQL

##LOGIN PAGE
![image](https://github.com/user-attachments/assets/ab37af33-11a5-4072-9ec5-24a20aa9fecb)

Author
[Raushan Kumar]
