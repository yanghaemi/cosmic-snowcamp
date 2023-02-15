import requests

result = requests.get("http://localhost:8000/age")

print(result.text)
