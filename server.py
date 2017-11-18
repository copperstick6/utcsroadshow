from flask import Flask, request, render_template, url_for

app = Flask(__name__)

key = "";

@app.route('/')
def getHomepage():
    return render_template('homepage.html')

@app.route('/', methods = ['POST'])
def process():
  text = request.form['text']
  canScrape = webScraper.findJS(text)
  if(canScrape == "error, invalid url"):
    return render_template('invalid_url.html')
  if(canScrape == "weird charSet"):
    return render_template('charSet.html')
  if(canScrape == "it has js"):
    return render_template('hasJS.html')
  else:
    return render_template('noJS.html')


@app.route('/fbToken', methods=['GET'])
def getToken():
    if(key == ""):
        return "invalidKey"
    return key

@app.route('/setFbToken', methods=['POST'])
def setToken():
    global key
    key = request.form['key']
    return key;
app.run()
