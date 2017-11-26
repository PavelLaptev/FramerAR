#################################
########## AR snippet ###########
#################################

console.clear()
Framer.Device.orientationName = "landscape"

if Framer.Device.orientationName is "landscape"
	verticalOrientation.visible = false
	instructionLayer.visible = true
else
	verticalOrientation.visible = true
	instructionLayer.visible = false

# Change device orientation 
window.addEventListener "orientationchange", ->
	if window.orientation is -90 or window.orientation is 90 
		verticalOrientation.visible = false
		instructionLayer.visible = true
	else
		verticalOrientation.visible = true
		instructionLayer.visible = false
			
# just for preview on Readymag — clear backgrounds behind the device
Framer.Device.background.backgroundColor = "transparent"
document.querySelector('#FramerContextRoot-Default').style.backgroundColor = "transparent"
document.body.style.backgroundColor = "transparent"

# AR Setup
ARlayer = new Layer
	width: Screen.width
	height: Screen.height
	html: """<iframe id="aframe" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" width="#{Screen.width}" height="#{Screen.height}" src="aframe/iframeAR.html"></iframe>"""

ARlayer.sendToBack()

iframe = document.getElementsByTagName('iframe')[0]

# Global vars for your models to manage they outside "onload" foo
londonModel = undefined

# Wait for a i-frame content
iframe.onload = ->
	iframeScene = if iframe.contentDocument then iframe.contentDocument else iframe.contentWindow.document
	iframeScene.getElementById("aframe-scene")
	londonModel = iframeScene.querySelector('#london')

# Setting up states and vars
avroFont = Utils.loadWebFont("Arvo","400,700")

instrSwipe.opacity = 0

instructionLayer.onTap ->
	hiroMarkerInstruction.animate
		opacity: 0
		options:
			time: 0.4
	
	instrSwipe.animate
		opacity: 1
		options: 
			time: 0.2
			delay: 0.4

instructionLayer.onSwipe ->
	instructionLayer.animate
		opacity: 0
		options: 
			time: 0.2
		
	Utils.delay 0.2, ->
		instructionLayer.destroy()

verticalOrientation.props =
	x: 0
	width: Screen.width
	height: Screen.height

rotateDeg = 0
scaleSize = 0.4

rotateText.opacity = 0
scaleText.opacity = 0

for i in [0...drags.children.length]
	drags.children[i].opacity = 0
	drags.children[i].draggable.horizontal = false
	drags.children[i].draggable.constraints = 
		y: -Screen.height*2
		height: drags.children[i].height
	
	drags.children[i].states =
		stateA:
			opacity: 0
			nimationOptions:
				curve: "ease"
				time: 2
		stateB:
			opacity: 1
			animationOptions:
				curve: "ease"
				time: 0.4

rotateText.states =
	stateA:
		opacity: 0
		nimationOptions:
			curve: "ease"
			time: 2
	stateB:
		opacity: 1
		animationOptions:
			curve: "ease"
			time: 0.2

scaleText.states =
	stateA:
		opacity: 0
		nimationOptions:
			curve: "ease"
			time: 2
	stateB:
		opacity: 1
		animationOptions:
			curve: "ease"
			time: 0.2
			
dragLeft.onDragMove ->
	rotateText.animate("stateB")
	this.animate("stateB")
	if this.draggable.direction is "down"
		rotateDeg += 1*3
		rotateText.text = rotateDeg + "°"
		londonModel.setAttribute("rotation", "0 " + (-90 - rotateDeg) + " 0")
		if rotateDeg > 360
			rotateDeg = 0
	else if this.draggable.direction is "up"
		rotateDeg -= 1*3
		rotateText.text = rotateDeg + "°"
		londonModel.setAttribute("rotation", "0 " + (-90 - rotateDeg) + " 0")
		if rotateDeg < -360
			rotateDeg = 0

dragLeft.onDragEnd ->
	rotateText.animate("stateA")
	this.animate("stateA")


dragRight.onDragMove ->
	scaleText.animate("stateB")
	this.animate("stateB")
	if this.draggable.direction is "down"
		scaleSize += 0.005
		scaleText.text = "x" + Utils.round(scaleSize, 1)
		londonModel.setAttribute("scale", "" + (scaleSize) + " " + scaleSize + " " + scaleSize + "")
	else if this.draggable.direction is "up"
		scaleSize -= 0.005
		scaleText.text = "x" + Utils.round(scaleSize, 1)
		londonModel.setAttribute("scale", "" + (scaleSize) + " " + scaleSize + " " + scaleSize + "")

dragRight.onDragEnd ->
	scaleText.animate("stateA")
	this.animate("stateA")