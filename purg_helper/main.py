from sanic import Sanic
from sanic import response
import os
from sanic_jinja2 import SanicJinja2

app = Sanic()
jinja = SanicJinja2(app)

app.static('/bundle.js', './static/bundle.js')

@app.route("/")
@jinja.template('index.html')
async def test(request):
    return

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)