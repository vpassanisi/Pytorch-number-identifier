from flask import Flask, request, jsonify
import os

from flask import json

# Init app
app = Flask(__name__)


@app.route('/test', methods=['GET'])
def get():
    print(request.method)
    return jsonify({'msg': 'Hello'})


# Run Server
if __name__ == "__main__":
    app.run(debug=True)
