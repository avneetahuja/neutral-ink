from transformers import (AutoTokenizer, TFAutoModelForSequenceClassification,
                          pipeline)

political_model_data = "JakobKaiser/distilbert-base-uncased-md_gender_bias-trained"
racial_model_data = "unitary/toxic-bert"
gender_model_data = "d4data/bias-detection-model"
bias_identifier_model_data = "valurank/distilroberta-bias"
bias_type_identifier_model_data = "maximuspowers/bias-type-classifier"

# Load political bias model
political_tokenizer = AutoTokenizer.from_pretrained(political_model_data)
political_model = TFAutoModelForSequenceClassification.from_pretrained(political_model_data)
political_classifier = pipeline('text-classification', model=political_model, tokenizer=political_tokenizer)

# Load racial bias model
racial_tokenizer = AutoTokenizer.from_pretrained(racial_model_data)
racial_model = TFAutoModelForSequenceClassification.from_pretrained(racial_model_data)
racial_classifier = pipeline('text-classification', model=racial_model, tokenizer=racial_tokenizer)

#load gender bias model
gender_tokenizer = AutoTokenizer.from_pretrained(gender_model_data)
gender_model = TFAutoModelForSequenceClassification.from_pretrained(gender_model_data)
gender_classifier = pipeline('text-classification', model=gender_model, tokenizer=gender_tokenizer)

# bias identifier model
# bias_tokenizer = AutoTokenizer.from_pretrained(bias_identifier_model_data)
# bias_model = TFAutoModelForSequenceClassification.from_pretrained(bias_identifier_model_data)
# bias_classifier = pipeline('text-classification', model=bias_model, tokenizer=bias_tokenizer)

# bias type model
bias_type_tokenizer = AutoTokenizer.from_pretrained(bias_type_identifier_model_data)
bias_type_model = TFAutoModelForSequenceClassification.from_pretrained(bias_type_identifier_model_data)
bias_type_classifier = pipeline('text-classification', model=bias_type_model, tokenizer=bias_type_tokenizer)
