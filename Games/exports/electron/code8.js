gdjs.gamewinCode = {};
gdjs.gamewinCode.GDNewObjectObjects1= [];
gdjs.gamewinCode.GDNewObjectObjects2= [];
gdjs.gamewinCode.GDNewObject2Objects1= [];
gdjs.gamewinCode.GDNewObject2Objects2= [];
gdjs.gamewinCode.GDNewObject3Objects1= [];
gdjs.gamewinCode.GDNewObject3Objects2= [];

gdjs.gamewinCode.conditionTrue_0 = {val:false};
gdjs.gamewinCode.condition0IsTrue_0 = {val:false};
gdjs.gamewinCode.condition1IsTrue_0 = {val:false};


gdjs.gamewinCode.mapOfGDgdjs_46gamewinCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.gamewinCode.GDNewObject2Objects1});gdjs.gamewinCode.eventsList0 = function(runtimeScene) {

{


gdjs.gamewinCode.condition0IsTrue_0.val = false;
{
gdjs.gamewinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gamewinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", true);
}}

}


};gdjs.gamewinCode.mapOfGDgdjs_46gamewinCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.gamewinCode.GDNewObject3Objects1});gdjs.gamewinCode.eventsList1 = function(runtimeScene) {

{


gdjs.gamewinCode.condition0IsTrue_0.val = false;
{
gdjs.gamewinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gamewinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start screen", true);
}}

}


};gdjs.gamewinCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.gamewinCode.GDNewObject2Objects1);

gdjs.gamewinCode.condition0IsTrue_0.val = false;
{
gdjs.gamewinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gamewinCode.mapOfGDgdjs_46gamewinCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.gamewinCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.gamewinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.gamewinCode.GDNewObject3Objects1);

gdjs.gamewinCode.condition0IsTrue_0.val = false;
{
gdjs.gamewinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gamewinCode.mapOfGDgdjs_46gamewinCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.gamewinCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.gamewinCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.gamewinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gamewinCode.GDNewObjectObjects1.length = 0;
gdjs.gamewinCode.GDNewObjectObjects2.length = 0;
gdjs.gamewinCode.GDNewObject2Objects1.length = 0;
gdjs.gamewinCode.GDNewObject2Objects2.length = 0;
gdjs.gamewinCode.GDNewObject3Objects1.length = 0;
gdjs.gamewinCode.GDNewObject3Objects2.length = 0;

gdjs.gamewinCode.eventsList2(runtimeScene);
return;

}

gdjs['gamewinCode'] = gdjs.gamewinCode;
