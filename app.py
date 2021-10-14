#from RPI.GPIO import gpio
import json
import random
import time
#import board
#import busio
#import adafruit_adxl34x

#i2c = busio.I2C(board.SCL, board.SDA)
#accelerometer = adafruit_adxl34x.ADXL345(i2c)



from flask import Flask,render_template
#import cv2

app=Flask(__name__)
#camera=cv2.VideoCapture(0)
random.seed()  # Initialize the random number generator


@app.route("/")
def index():
    return render_template("index.html")




#def generate_frames():
 #   while True:

        ## read the camera frame
  #      success,frame=camera.read()
    #    if not success:
   #         break
     #   else:
      #      ret,buffer=cv2.imencode('.jpg',frame)
       #     frame=buffer.tobytes()

        #yield(b'--frame\r\n'
         #          b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


#@app.route('/live_feed')
#def live_feed():
 #   return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, threaded=True)