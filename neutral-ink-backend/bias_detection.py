from enum import Enum

import nltk

from models import (bias_type_classifier, gender_classifier,
                    political_classifier, racial_classifier)


def split_text_nltk(text):
    from nltk.tokenize import sent_tokenize
    return sent_tokenize(text)

class Bias(Enum):
    RACIAL = "RACIAL_BIAS"
    GENDER = "GENDER_BIAS"
    POLITICAL = "POLITICAL_BIAS"
    NONE = "NO_BIAS"

def bias_detection(text):
    sentences = split_text_nltk(text)
    output = []
    for sent in sentences:
        if not sent:
            continue

        political_result = political_classifier(sent)
        racial_result = racial_classifier(sent)
        gender_result = gender_classifier(sent)

        # bias_result = bias_classifier(sent)
        bias_type_result  = bias_type_classifier(sent)

        print(sent, racial_result )
        print("new", bias_type_result, type(bias_type_result))

        political_score = political_result[0]['score']
        racial_score = racial_result[0]['score']
        gender_score = gender_result[0]['score']
        # bias_score = bias_classifier[0]['score']
        bias_type_score = bias_type_result[0]['score']
        bias_type_label = bias_type_result[0]['label']

        scores = {
            Bias.POLITICAL: political_score,
            Bias.RACIAL: racial_score,
            Bias.GENDER: gender_score
        }

        highest_bias = max(scores, key=scores.get)
        highest_score = scores[highest_bias]

        if bias_type_score > 0.68:
            output.append({
                "sentence": sent,
                "bias": bias_type_label,
                "score": bias_type_score
            })
        else:
            output.append({
                "sentence": sent,
                "bias": Bias.NONE.value,
                "score": 0
            })
    return output