window.onload=function(){
	function vector2DAngle(v1, v2) {
	    const v1_x = v1[0];
	    const v1_y = v1[1];
	    const v2_x = v2[0];
	    const v2_y = v2[1];
	    
	    let angle_;
	    try {
	        angle_ = Math.degrees(Math.acos((v1_x * v2_x + v1_y * v2_y) / 
	            (Math.sqrt(v1_x**2 + v1_y**2) * Math.sqrt(v2_x**2 + v2_y**2))));
	    } catch (e) {
	        angle_ = 65535;
	    }
	    
	    if (angle_ > 180) {
	        angle_ = 65535;
	    }
	    
	    return angle_;
	}
	
	// Add degrees function to Math
	Math.degrees = function(radians) {
	    return radians * (180 / Math.PI);
	};
	function handAngle(hand) {
	    /*
	        获取对应手相关向量的二维角度,根据角度确定手势
	    */
	    const angleList = [];
	
	    //---------------------------- thumb 大拇指角度
	    let angle = vector2DAngle(
	        [hand[0][0] - hand[2][0], hand[0][1] - hand[2][1]],
	        [hand[3][0] - hand[4][0], hand[3][1] - hand[4][1]]
	    );
	    angleList.push(angle);
	
	    //---------------------------- index 食指角度
	    angle = vector2DAngle(
	        [hand[0][0] - hand[6][0], hand[0][1] - hand[6][1]],
	        [hand[7][0] - hand[8][0], hand[7][1] - hand[8][1]]
	    );
	    angleList.push(angle);
	
	    //---------------------------- middle 中指角度
	    angle = vector2DAngle(
	        [hand[0][0] - hand[10][0], hand[0][1] - hand[10][1]],
	        [hand[11][0] - hand[12][0], hand[11][1] - hand[12][1]]
	    );
	    angleList.push(angle);
	
	    //---------------------------- ring 无名指角度
	    angle = vector2DAngle(
	        [hand[0][0] - hand[14][0], hand[0][1] - hand[14][1]],
	        [hand[15][0] - hand[16][0], hand[15][1] - hand[16][1]]
	    );
	    angleList.push(angle);
	
	    //---------------------------- pink 小拇指角度
	    angle = vector2DAngle(
	        [hand[0][0] - hand[18][0], hand[0][1] - hand[18][1]],
	        [hand[19][0] - hand[20][0], hand[19][1] - hand[20][1]]
	    );
	    angleList.push(angle);
	
	    return angleList;
	}
	function hGesture(angleList) {
	    const thrAngle = 65;
	    const thrAngleThumb = 53;
	    const thrAngleS = 49;
	    let gestureStr = null;
	
	    if (!angleList.includes(65535)) {
	        if (angleList[0] > thrAngleThumb && angleList[1] > thrAngle && angleList[2] > thrAngle &&
	            angleList[3] > thrAngle && angleList[4] > thrAngle) {
	            gestureStr = "ten";
	        } else if (angleList[0] > thrAngleThumb && angleList[1] < thrAngleS &&
	                   angleList[2] > thrAngle && angleList[3] > thrAngle && angleList[4] > thrAngle) {
	            gestureStr = "one";
	        } else if (angleList[0] > thrAngleThumb && angleList[1] < thrAngleS &&
	                   angleList[2] < thrAngleS && angleList[3] > thrAngle && angleList[4] > thrAngle) {
	            gestureStr = "two";
	        } else if (angleList[0] > thrAngleThumb && angleList[1] < thrAngleS &&
	                   angleList[2] < thrAngleS && angleList[3] < thrAngleS && angleList[4] > thrAngle) {
	            gestureStr = "three";
	        } else if (angleList[0] > thrAngleThumb && angleList[1] < thrAngleS &&
	                   angleList[2] < thrAngleS && angleList[3] < thrAngleS && angleList[4] < thrAngleS) {
	            gestureStr = "four";
	        } else if (angleList[0] < thrAngleS && angleList[1] < thrAngleS &&
	                   angleList[2] < thrAngleS && angleList[3] < thrAngleS && angleList[4] < thrAngleS) {
	            gestureStr = "five";
	        } else if (angleList[0] < thrAngleS && angleList[1] > thrAngle &&
	                   angleList[2] > thrAngle && angleList[3] > thrAngle && angleList[4] < thrAngleS) {
	            gestureStr = "six";
	        } else if (angleList[0] < thrAngleS && angleList[1] < thrAngleS &&
	                   angleList[2] > thrAngle && angleList[3] > thrAngle && angleList[4] > thrAngle) {
	            gestureStr = "eight";
	        }
	    }
	    return gestureStr;
	}
	// 引入所需库
	const video = document.createElement('video');
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	
	async function detect() {
	    // 使用MediaPipe或其他库来处理手势识别
	    const hands = await loadHandsModel(); // 假设存在一个加载模型的函数
	
	    // 获取用户视频流
	    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
	    video.srcObject = stream;
	    video.play();
	
	    // 定时更新视频帧
	    function processFrame() {
	        context.drawImage(video, 0, 0, canvas.width, canvas.height);
	        const frame = context.getImageData(0, 0, canvas.width, canvas.height);
	
	        // 处理手部识别
	        hands.process(frame)
	            .then(results => {
	                // 处理结果，例如绘制手势
	                if (results.multiHandLandmarks) {
	                    results.multiHandLandmarks.forEach(handLandmarks => {
	                        drawHandLandmarks(handLandmarks);
	                    });
	                }
	            });
	
	        requestAnimationFrame(processFrame);
	    }
	
	    processFrame();
	}
	
	// 假设存在绘制手部标记的函数
	function drawHandLandmarks(landmarks) {
	    // 绘制手部标记的代码
	}
	
	// 启动检测
	detect();
	if (results.multiHandLandmarks) {
	    results.multiHandLandmarks.forEach(handLandmarks => {
	        mpDrawing.drawLandmarks(frame, handLandmarks, mpHands.HAND_CONNECTIONS);
	        let handLocal = [];
	        for (let i = 0; i < 21; i++) {
	            let x = handLandmarks.landmark[i].x * frame.shape[1];
	            let y = handLandmarks.landmark[i].y * frame.shape[0];
	            handLocal.push([x, y]);
	        }
	        if (handLocal.length > 0) {
	            let angleList = handAngle(handLocal);
	            let gestureStr = hGesture(angleList);
	            cv2.putText(frame, gestureStr, [450, 100], 0, 1.3, [0, 0, 255], 3);
	        }
	    });
	}
	cv2.imshow('MediaPipe Hands', frame);
	if (cv2.waitKey(1) & 0xFF === 27) {
	    break;
	}
	cap.release();
	
	function detect() {
	    // Your detect function implementation here
	}
	
}

