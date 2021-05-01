gdjs.PauseCode = {};
gdjs.PauseCode.GDNewObjectObjects1= [];
gdjs.PauseCode.GDNewObjectObjects2= [];
gdjs.PauseCode.GDNewObject2Objects1= [];
gdjs.PauseCode.GDNewObject2Objects2= [];
gdjs.PauseCode.GDNewObject3Objects1= [];
gdjs.PauseCode.GDNewObject3Objects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.PauseCode.GDNewObject2Objects1});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "6591848021032960.wav", 3, true, 100, 1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.PauseCode.GDNewObject3Objects1});gdjs.PauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start screen", true);
}}

}


};gdjs.PauseCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.PauseCode.GDNewObject2Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.PauseCode.GDNewObject3Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDNewObjectObjects1.length = 0;
gdjs.PauseCode.GDNewObjectObjects2.length = 0;
gdjs.PauseCode.GDNewObject2Objects1.length = 0;
gdjs.PauseCode.GDNewObject2Objects2.length = 0;
gdjs.PauseCode.GDNewObject3Objects1.length = 0;
gdjs.PauseCode.GDNewObject3Objects2.length = 0;

gdjs.PauseCode.eventsList2(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
