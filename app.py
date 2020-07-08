import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify

import cv2
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# Init app
app = Flask(__name__)

model = tf.keras.models.load_model('num_reader/')

# Inference from image


@app.route('/predict', methods=['POST'])
def predict():
    file = request.data

    f = open('test.png', 'wb')
    f.write(file)
    f.close()

    IMG_SIZE = 28

    img = cv2.imread('test.png', cv2.IMREAD_GRAYSCALE)
    blur = cv2.blur(img, (20, 20))
    resized_img = cv2.resize(blur, (IMG_SIZE, IMG_SIZE))

    y = []
    y.append(resized_img)
    y = tf.keras.utils.normalize(y, axis=1)
    y = np.array(y).reshape(-1, IMG_SIZE, IMG_SIZE)

    prediction = model.predict(y)

    print(np.argmax(prediction[0]), flush=True)

    return jsonify({"data": str(np.argmax(prediction[0]))})


# Run Server
if __name__ == "__main__":
    app.run(debug=True, port=3000)
