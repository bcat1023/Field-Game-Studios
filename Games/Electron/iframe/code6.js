gdjs.gameoverCode = {};
gdjs.gameoverCode.GDTextObjects1= [];
gdjs.gameoverCode.GDTextObjects2= [];
gdjs.gameoverCode.GDNewObject3Objects1= [];
gdjs.gameoverCode.GDNewObject3Objects2= [];
gdjs.gameoverCode.GDBackObjects1= [];
gdjs.gameoverCode.GDBackObjects2= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};


gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.gameoverCode.GDBackObjects1});gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", true);
}}

}


};gdjs.gameoverCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.gameoverCode.GDBackObjects1);

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.gameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDTextObjects1.length = 0;
gdjs.gameoverCode.GDTextObjects2.length = 0;
gdjs.gameoverCode.GDNewObject3Objects1.length = 0;
gdjs.gameoverCode.GDNewObject3Objects2.length = 0;
gdjs.gameoverCode.GDBackObjects1.length = 0;
gdjs.gameoverCode.GDBackObjects2.length = 0;

gdjs.gameoverCode.eventsList1(runtimeScene);
return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
