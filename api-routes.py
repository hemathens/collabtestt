# Python API routes with multiple conflict scenarios
from flask import Flask, request, jsonify
from typing import Dict, List, Optional

app = Flask(__name__)

# Global configuration
DEBUG_MODE = True
API_VERSION = "v1"

@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users"""
    users = fetch_users_from_db()
    return jsonify(users)

@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id: str):
    """Get single user by ID"""
    user = fetch_user_by_id(user_id)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route('/api/users', methods=['POST'])
def create_user():
    """Create new user"""
    data = request.get_json()
    user = create_user_in_db(data)
    return jsonify(user), 201

def fetch_users_from_db() -> List[Dict]:
    # Database logic here
    return []

def fetch_user_by_id(user_id: str) -> Optional[Dict]:
    # Database logic here
    return None

def create_user_in_db(data: Dict) -> Dict:
    # Database logic here
    return data

if __name__ == '__main__':
    app.run(debug=DEBUG_MODE, port=5000)
