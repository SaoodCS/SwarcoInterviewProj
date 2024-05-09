from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

# Enable CORS:
CORS(app)


# Function to create the SQLite database if not exists
def create_database():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, city TEXT, address TEXT, postcode TEXT)''')
    conn.commit()
    conn.close()

create_database()

##
## -- CRUD API Endpoints -- CREATE, READ, UPDATE, DELETE -- ##
##

# Create user endpoint:
@app.route('/setUser', methods=['POST'])
def set_user():
    user_data = request.json
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (id, name, age, city, address, postcode) VALUES (?, ?, ?, ?, ?, ?)",
              (user_data['id'], user_data['name'], user_data['age'], user_data['city'], user_data['address'], user_data['postcode']))
    conn.commit()
    conn.close()
    return "User created successfully", 201
    
# Get all users endpoint:
@app.route('/getAllUsers', methods=['GET'])
def get_all_users():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users")
    users = c.fetchall()
    conn.close()
    if users:
        users_list = []
        for user in users:
            users_list.append({'id': user[0], 'name': user[1], 'age': user[2], 'city': user[3], 'address': user[4], 'postcode': user[5]})
        return jsonify(users_list), 200
    else:
        return jsonify([]), 200

# Endpoint to update an existing user
@app.route('/updateUser', methods=['PUT'])
def update_user():
    user_data = request.json
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("UPDATE users SET name=?, age=?, city=?, address=?, postcode=? WHERE id=?",
              (user_data['name'], user_data['age'], user_data['city'], user_data['address'], user_data['postcode'], user_data['id']))
    conn.commit()
    conn.close()
    return "User updated successfully", 200

# Endpoint to delete a user by id
@app.route('/deleteUser', methods=['DELETE'])
def delete_user():
    user_id = request.args.get('id')
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("DELETE FROM users WHERE id=?", (user_id,))
    conn.commit()
    conn.close()
    return "User deleted successfully", 200

##
##
##

# This is the main function that runs the Flask app
if __name__ == '__main__':
    app.run(debug=True)

