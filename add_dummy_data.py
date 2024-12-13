from app import db, User, Property  # Import your database and models from the main app file

# Dummy Users
users = [
    User(username='user1', password='password1'),
    User(username='user2', password='password2'),
]

# Dummy Properties
properties = [
    Property(name='Cozy Apartment', location='New York', price=1200.00, 
             description='A cozy apartment in downtown NY.', image_url='https://via.placeholder.com/200'),
    Property(name='Luxury Villa', location='Los Angeles', price=5000.00, 
             description='A luxurious villa in Beverly Hills.', image_url='https://via.placeholder.com/200'),
    Property(name='Modern Condo', location='Chicago', price=3000.00, 
             description='A modern condo with a great view.', image_url='https://via.placeholder.com/200'),
]

# Add Dummy Data to Database
with db.session.begin():
    db.session.add_all(users)
    db.session.add_all(properties)
    print("Dummy data added successfully!")
