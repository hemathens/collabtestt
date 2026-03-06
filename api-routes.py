// ========== BASE VERSION (feature-b) ==========
# Python API routes with multiple conflict scenarios - Feature B
from flask import Flask, request, jsonify, abort
from typing import Dict, List, Optional
from functools import wraps

app = Flask(__name__)

# Global configuration
DEBUG_MODE = False
API_VERSION = "v1.5"
RATE_LIMIT = 1000

def require_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            abort(401)
        return f(*args, **kwargs)
    return decorated_function

@app.route('/api/users', methods=['GET'])
@require_auth
def get_users():
    """Get all users with filtering"""
    search = request.args.get('search', '')
    users = fetch_users_from_db(search)
    return jsonify({"users": users, "count": len(users)})

@app.route('/api/users/<user_id>', methods=['GET'])
@require_auth
def get_user(user_id: str):
    """Get single user by ID with detailed info"""
    user = fetch_user_by_id(user_id)
    if user:
        return jsonify({"user": user, "status": "active"})
    return jsonify({"error": "User not found", "status": "error"}), 404

@app.route('/api/users', methods=['POST'])
@require_auth
def create_user():
    """Create new user with enhanced validation"""
    data = request.get_json()
    
    if not all(k in data for k in ['name', 'email', 'password']):
        return jsonify({"error": "Missing required fields"}), 400
    
    user = create_user_in_db(data)
    return jsonify({"user": user, "message": "User created successfully"}), 201

@app.route('/api/users/<user_id>', methods=['DELETE'])
@require_auth
def delete_user(user_id: str):
    """Delete user by ID"""
    success = delete_user_from_db(user_id)
    if success:
        return jsonify({"message": "User deleted"}), 200
    return jsonify({"error": "User not found"}), 404

def fetch_users_from_db(search: str = '') -> List[Dict]:
    # Database logic here with search
    return []

def fetch_user_by_id(user_id: str) -> Optional[Dict]:
    # Database logic here
    return None

def create_user_in_db(data: Dict) -> Dict:
    # Database logic here
    return data

def delete_user_from_db(user_id: str) -> bool:
    # Database logic here
    return True

if __name__ == '__main__':
    app.run(debug=DEBUG_MODE, port=8000, threaded=True)


// ========== HEAD VERSION (feature-a) ==========
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


// ========== INSTRUCTIONS ==========
// 1. Review both versions above
// 2. Identify the changes you want to keep
// 3. Manually edit this file to combine them
// 4. Test thoroughly before committing