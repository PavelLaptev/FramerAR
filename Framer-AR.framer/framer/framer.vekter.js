(function(scope) {var mainScreen = new Layer({"height":375,"name":"mainScreen","constraintValues":{"height":375,"heightFactor":1,"width":667,"widthFactor":1},"backgroundColor":"rgba(82, 82, 82, 0)","clip":true,"width":667});var drags = new Layer({"parent":mainScreen,"name":"drags","backgroundColor":null,"width":667,"height":375,"constraintValues":{"height":375,"centerAnchorX":0.5,"width":667,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var dragRight = new Layer({"parent":drags,"name":"dragRight","backgroundColor":"rgba(0, 0, 0, 0.2)","width":334,"x":334,"height":2553,"constraintValues":{"left":null,"height":2553,"centerAnchorX":0.75112443778110949,"width":334,"bottom":-1089,"right":-1,"top":-1089,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":-1089});var dragLeft = new Layer({"parent":drags,"name":"dragLeft","backgroundColor":"rgba(0, 0, 0, 0.2)","width":334,"height":2553,"constraintValues":{"height":2553,"centerAnchorX":0.25037481259370314,"width":334,"bottom":-1089,"top":-1089,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":-1089});var scaleText = new TextLayer({"parent":mainScreen,"name":"scaleText","backgroundColor":null,"width":334,"x":334,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"56px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"x1.0"}],"alignment":"center"},"height":67,"constraintValues":{"left":null,"height":67,"centerAnchorX":0.75112443778110949,"width":334,"right":-1,"top":147,"centerAnchorY":0.48133333333333334},"blending":"normal","autoSize":false,"y":147});var rotateText = new TextLayer({"parent":mainScreen,"name":"rotateText","backgroundColor":null,"width":334,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"56px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"0°"}],"alignment":"center"},"height":67,"constraintValues":{"height":67,"centerAnchorX":0.25037481259370314,"width":334,"top":147,"centerAnchorY":0.48133333333333334},"blending":"normal","autoSize":false,"y":147});var instructionLayer = new Layer({"parent":mainScreen,"name":"instructionLayer","backgroundColor":"rgba(0, 0, 0, 0.4)","width":667,"height":375,"constraintValues":{"height":375,"centerAnchorX":0.5,"width":667,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var instrSwipe = new Layer({"parent":instructionLayer,"name":"instrSwipe","backgroundColor":null,"width":667,"height":375,"constraintValues":{"height":375,"centerAnchorX":0.5,"width":667,"bottom":-4,"right":0,"top":4,"centerAnchorY":0.51066666666666671},"blending":"normal","opacity":0,"clip":false,"borderStyle":"solid","y":4});var __layer_0__ = new TextLayer({"parent":instrSwipe,"backgroundColor":null,"width":122,"x":273,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":1,"css":{"fontSize":"38px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"2.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"↑"},{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"38px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"2.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"Swipe"},{"inlineStyles":[{"startIndex":0,"endIndex":1,"css":{"fontSize":"38px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"2.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"↓"},{"inlineStyles":[{"startIndex":0,"endIndex":0,"css":{"fontSize":"38px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"2.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":""}],"alignment":"center"},"height":262,"constraintValues":{"left":null,"height":262,"centerAnchorX":0.50074962518740629,"width":122,"bottom":60,"top":53,"centerAnchorY":0.49066666666666664},"blending":"normal","opacity":0.35999999999999999,"autoSize":false,"y":53});var __layer_1__ = new TextLayer({"parent":instrSwipe,"name":"instructTextOne","backgroundColor":null,"width":278,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"46px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"Rotate"},{"inlineStyles":[{"startIndex":0,"endIndex":0,"css":{"fontSize":"46px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":""}],"alignment":"center"},"height":84,"constraintValues":{"height":84,"centerAnchorX":0.20839580209895053,"width":278,"top":null,"centerAnchorY":0.5013333333333333},"blending":"normal","autoSize":false,"y":146});var __layer_2__ = new TextLayer({"parent":instrSwipe,"name":"instructTextTwo","backgroundColor":null,"width":276,"x":392,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"46px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo-Bold\", \"Arvo\", serif"}}],"text":"Scale"}],"alignment":"center"},"height":79,"constraintValues":{"left":null,"height":79,"centerAnchorX":0.79460269865067468,"width":276,"right":-1,"top":146,"centerAnchorY":0.49466666666666664},"blending":"normal","autoSize":false,"y":146});var hiroMarkerInstruction = new Layer({"parent":instructionLayer,"name":"hiroMarkerInstruction","backgroundColor":null,"width":667,"height":375,"constraintValues":{"height":375,"centerAnchorX":0.5,"width":667,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_3__ = new Layer({"parent":hiroMarkerInstruction,"name":"HiroMarkerImg","borderWidth":31,"backgroundColor":null,"width":148,"x":252,"borderColor":"hsl(0, 0%, 100%)","height":148,"constraintValues":{"left":252,"aspectRatioLocked":true,"height":148,"centerAnchorX":0.48875562218890556,"width":148,"top":52,"centerAnchorY":0.33600000000000002},"blending":"normal","clip":false,"borderStyle":"solid","y":52});var __layer_4__ = new TextLayer({"parent":__layer_3__,"backgroundColor":null,"width":61,"x":45,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"30px","WebkitTextFillColor":"rgb(255, 255, 255)","whiteSpace":"pre","fontWeight":700,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"Arial-BoldMT\", \"Arial\", sans-serif","lineHeight":"1.4"}}],"text":"Hiro"}]},"height":42,"constraintValues":{"left":null,"height":42,"centerAnchorX":0.51013513513513509,"width":61,"bottom":37,"top":null,"centerAnchorY":0.60810810810810811},"blending":"normal","autoSize":true,"y":69});var __layer_5__ = new TextLayer({"parent":hiroMarkerInstruction,"backgroundColor":null,"width":297,"x":178,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":58,"css":{"fontSize":"22px","WebkitTextFillColor":"rgb(255, 255, 255)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.4","tabSize":4,"fontFamily":"\"Arvo\", serif"}}],"text":"Use Hiro-marker to reach 3d-models or use your imagination"}],"alignment":"center"},"height":116,"constraintValues":{"left":178,"height":116,"centerAnchorX":0.48950524737631185,"width":297,"bottom":35,"top":null,"centerAnchorY":0.752},"blending":"normal","autoSize":false,"y":224});var verticalOrientation = new Layer({"name":"verticalOrientation","backgroundColor":"rgba(0, 0, 0, 0.7)","width":375,"x":-451,"height":663,"constraintValues":{"left":-451,"height":663,"centerAnchorX":-0.19415292353823088,"width":375,"centerAnchorY":1.3293333333333333},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_6__ = new Layer({"parent":verticalOrientation,"backgroundColor":null,"width":258,"x":56,"height":376,"constraintValues":{"left":56,"height":376,"centerAnchorX":0.49333333333333335,"width":258,"bottom":121,"right":61,"top":null,"centerAnchorY":0.5339366515837104},"blending":"normal","clip":false,"borderStyle":"solid","y":166});var Image_1 = new Layer({"parent":__layer_6__,"backgroundColor":null,"width":186,"x":39,"height":147,"constraintValues":{"left":39,"aspectRatioLocked":true,"height":147,"centerAnchorX":0.51162790697674421,"width":186,"right":33,"top":27,"centerAnchorY":0.26728723404255317},"blending":"normal","image":"images\/design\/2Y7nPHnW5MxwOvOsycrTrgLfeWwIM0SHwpzO35dsUIyb0C3uQwG4niK7Tj92l7TsAtCu2dT6XBLocMUxpeow.svg","clip":false,"borderStyle":"solid","y":27});var rotateText_1 = new TextLayer({"parent":__layer_6__,"name":"rotateText","backgroundColor":null,"width":290,"x":-13,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":25,"css":{"fontSize":"36px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"Arvo\", serif"}}],"text":"Please rotate your device"}],"alignment":"center"},"height":96,"constraintValues":{"left":-13,"height":96,"centerAnchorX":0.51162790697674421,"width":290,"bottom":6,"right":-19,"top":null,"centerAnchorY":0.8563829787234043},"blending":"normal","autoSize":false,"y":274});scaleText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|scaleText","targetName":"scaleText","vekterClass":"TextNode","text":"x1.0"};hiroMarkerInstruction.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|hiroMarkerInstruction","targetName":"hiroMarkerInstruction","vekterClass":"RectangleNode"};__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"Scale"};dragRight.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|dragRight","targetName":"dragRight","vekterClass":"RectangleNode"};__layer_0__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_0__","vekterClass":"TextNode","text":"↑\nSwipe\n↓\n"};drags.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|drags","targetName":"drags","vekterClass":"RectangleNode"};instructionLayer.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|instructionLayer","targetName":"instructionLayer","vekterClass":"RectangleNode"};Image_1.__framerInstanceInfo = {"originalFilename":"Group 2.svg","framerClass":"Layer","hash":"#vekter|Image_1","targetName":"Image_1","vekterClass":"ImageNode"};dragLeft.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|dragLeft","targetName":"dragLeft","vekterClass":"RectangleNode"};rotateText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|rotateText","targetName":"rotateText","vekterClass":"TextNode","text":"0°"};verticalOrientation.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|verticalOrientation","targetName":"verticalOrientation","vekterClass":"RectangleNode"};mainScreen.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|mainScreen","targetName":"mainScreen","vekterClass":"FrameNode"};instrSwipe.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|instrSwipe","targetName":"instrSwipe","vekterClass":"RectangleNode"};__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"Rotate\n"};__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"Hiro"};__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"RectangleNode","framerClass":"Layer"};rotateText_1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|rotateText_1","targetName":"rotateText_1","vekterClass":"TextNode","text":"Please rotate your device"};__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Use Hiro-marker to reach 3d-models or use your imagination"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {mainScreen, drags, dragRight, dragLeft, scaleText, rotateText, instructionLayer, instrSwipe, hiroMarkerInstruction, verticalOrientation, Image_1, rotateText_1});scope["__vekterVariables"] = ["mainScreen", "drags", "dragRight", "dragLeft", "scaleText", "rotateText", "instructionLayer", "instrSwipe", "hiroMarkerInstruction", "verticalOrientation", "Image_1", "rotateText_1"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);