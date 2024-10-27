from pydantic import BaseModel
from typing import List
from openai import OpenAI
from vars import API_KEY

# Initialize the OpenAI client with your API key
client = OpenAI(api_key=API_KEY)

# Define the model classes based on the provided schema
class Analysis(BaseModel):
    gender_bias: int
    cultural_ethnic_bias: int
    field_representation_bias: int
    summary: str

class SentenceData(BaseModel):
    sentence: str
    bias_score: int
    analysis: Analysis

class SentencesModel(BaseModel):
    sentences: List[SentenceData]

def get_analysis(sentences):
    completion = client.beta.chat.completions.parse(
        model="gpt-4-2024-08-06",
        messages=[
            {"role": "system", "content": "Analyze the bias in the provided sentences. Analyze it sentence by sentence."},
            {"role": "user", "content": "Indians usually smell"},
        ],
        response_format=SentencesModel,  # Updated to use the SentencesModel schema
    )

    # Extract the parsed response
    event = completion.choices[0].message.parsed

    # Example output check
    print(event)
    return event
