from flask import Flask
from dotenv import load_dotenv

app = Flask(__name__)

@app.route("/chatbot")
def main():
    load_dotenv()
    return {"number": "10"}

if __name__ == "__main__":
    app.run(debug=True)