"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def register():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)


    # validate the received values
    if not all([name, email, password]):
        return jsonify({"error": "Missing required fields"}), 400

    # check if user already exists  
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"error": "User already exists"}), 400

    # create a new user
    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=email)

    return jsonify({"message": "User created successfully"}), 201


@api.route('/login', methods=['POST'])  
def login():    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # validate the received values
    if not all([email, password]):
        return jsonify({"error": "Missing required fields"}), 400

    # check if user exists
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    # check if password is correct
    if user.password != password:
        return jsonify({"error": "Incorrect password"}), 401

    access_token = create_access_token(identity=email)

    return jsonify({"message": "User logged in successfully", "access_token": access_token}), 200