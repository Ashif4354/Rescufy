from waitress import serve
from src import *


if __name__ == '__main__':
    # rescufy_server.run(host = '0.0.0.0', debug = True, port = 8050)
    serve(rescufy_server, host = '0.0.0.0', port = 8050)