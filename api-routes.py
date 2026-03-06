# Python API routes with multiple conflict scenarios - Feature A
from flask import Flask, request, jsonify
from typing import Dict, List, Optional
import logging

app = Flask(__name__)

# Global configuration
DEBUG_MODE = True
API_VERSION = "v2"
MAX_PAGE_SIZE = 100

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users with pagination"""
    page = request.args.get('page', 1, type=int)
    page_size = request.args.get('page_size', 10, type=int)
    
    users = fetch_users_from_db(page, page_size)
    logger.info(f"Fetched {len(users)} users")
    return jsonify(users)

@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id: str):
    """Get single user by ID"""
    logger.info(f"Fetching user: {user_id}")
    user = fetch_user_by_id(user_id)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route('/api/users', methods=['POST'])
def create_user():
    """Create new user with validation"""
    data = request.get_json()
    
    if not validate_user_data(data):
        return jsonify({"error": "Invalid user data"}), 400
    
    user = create_user_in_db(data)
    logger.info(f"Created user: {user['id']}")
    return jsonify(user), 201

def fetch_users_from_db(page: int = 1, page_size: int = 10) -> List[Dict]:
    # Database logic here with pagination
    return []

def fetch_user_by_id(user_id: str) -> Optional[Dict]:
    # Database logic here
    return None

def create_user_in_db(data: Dict) -> Dict:
    # Database logic here
    return data

def validate_user_data(data: Dict) -> bool:
    required_fields = ['name', 'email']
    return all(field in data for field in required_fields)

if __name__ == '__main__':
    app.run(debug=DEBUG_MODE, port=5000, host='0.0.0.0')
