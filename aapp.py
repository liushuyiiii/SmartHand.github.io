# app.py (后端服务)
import cv2
import numpy as np
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from ademo import Yolov5Detector  # 直接使用原始代码中的检测器

app = Flask(__name__)
CORS(app)

# 初始化检测器
detector = Yolov5Detector(
    weights='data/model/yolov5s_640/weights/best.pt',
    imgsz=640,
    device='cuda:0'  # 根据实际情况选择cpu/cuda
)


@app.route('/detect', methods=['POST'])
def detect_frame():
    # 接收前端传来的视频帧
    frame = cv2.imdecode(np.frombuffer(request.files['image'].read(), np.uint8), cv2.IMREAD_COLOR)

    # 执行检测
    dets = detector.detect(frame, vis=False)

    # 格式化检测结果
    results = []
    for det in dets[0]:
        x1, y1, x2, y2, conf, cls = det
        results.append({
            "bbox": [float(x1), float(y1), float(x2), float(y2)],
            "confidence": float(conf),
            "class": int(cls),
            "label": detector.names[int(cls)]
        })

    return jsonify(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)