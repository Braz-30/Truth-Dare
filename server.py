from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

PORT = 8000

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

if __name__ == '__main__':
    print(f"Serving on http://localhost:{PORT}")
    httpd = HTTPServer(('0.0.0.0', PORT), QuietHandler)
    httpd.serve_forever()
