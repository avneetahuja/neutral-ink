# backend/app.py
import nltk
from flask import Flask, jsonify, request
from flask_cors import CORS
from gpt import get_analysis


from bias_detection import bias_detection
from models import gender_classifier, political_classifier, racial_classifier

#from genbit.genbit_metrics import GenBitMetrics

app = Flask(__name__)
CORS(app)

nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('wordnet')
nltk.download('omw-1.4')



@app.route('/')
def home():
    return "This is the backend server for bias detection."

@app.route('/detect_bias', methods=['POST'])
def detect_bias():
    data = request.json
    text = data['text']

    # split text
    # check bias for each sentence
    # return sentence, biastype, biasscore in an array
    # result = bias_detection(text)
    result = get_analysis(text)
    # political_result = political_classifier(text)
    # racial_result = racial_classifier(text)
    # gender_result = gender_classifier(text)

    # result = {
    #     'political_bias': political_result,
    #     'racial_bias': racial_result,
    #     'gender_bias': gender_result,
    # }
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)