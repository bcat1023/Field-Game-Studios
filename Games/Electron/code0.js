gdjs.Start_32screenCode = {};
gdjs.Start_32screenCode.GDNewObject4Objects1= [];
gdjs.Start_32screenCode.GDNewObject4Objects2= [];
gdjs.Start_32screenCode.GDBackgroundObjects1= [];
gdjs.Start_32screenCode.GDBackgroundObjects2= [];
gdjs.Start_32screenCode.GDNewObject2Objects1= [];
gdjs.Start_32screenCode.GDNewObject2Objects2= [];
gdjs.Start_32screenCode.GDGrassObjects1= [];
gdjs.Start_32screenCode.GDGrassObjects2= [];
gdjs.Start_32screenCode.GDManObjects1= [];
gdjs.Start_32screenCode.GDManObjects2= [];
gdjs.Start_32screenCode.GDFlythingObjects1= [];
gdjs.Start_32screenCode.GDFlythingObjects2= [];
gdjs.Start_32screenCode.GDLeftObjects1= [];
gdjs.Start_32screenCode.GDLeftObjects2= [];
gdjs.Start_32screenCode.GDRightObjects1= [];
gdjs.Start_32screenCode.GDRightObjects2= [];
gdjs.Start_32screenCode.GDResetObjects1= [];
gdjs.Start_32screenCode.GDResetObjects2= [];
gdjs.Start_32screenCode.GDSlimeObjects1= [];
gdjs.Start_32screenCode.GDSlimeObjects2= [];
gdjs.Start_32screenCode.GDBlockObjects1= [];
gdjs.Start_32screenCode.GDBlockObjects2= [];
gdjs.Start_32screenCode.GDStartObjects1= [];
gdjs.Start_32screenCode.GDStartObjects2= [];
gdjs.Start_32screenCode.GDNewObject3Objects1= [];
gdjs.Start_32screenCode.GDNewObject3Objects2= [];
gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects1= [];
gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects2= [];
gdjs.Start_32screenCode.GDNewObjectObjects1= [];
gdjs.Start_32screenCode.GDNewObjectObjects2= [];
gdjs.Start_32screenCode.GDVersionObjects1= [];
gdjs.Start_32screenCode.GDVersionObjects2= [];
gdjs.Start_32screenCode.GDNewObject5Objects1= [];
gdjs.Start_32screenCode.GDNewObject5Objects2= [];

gdjs.Start_32screenCode.conditionTrue_0 = {val:false};
gdjs.Start_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDFlythingObjects1Objects = Hashtable.newFrom({"Flything": gdjs.Start_32screenCode.GDFlythingObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Start_32screenCode.GDRightObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Start_32screenCode.GDLeftObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDFlythingObjects1Objects = Hashtable.newFrom({"Flything": gdjs.Start_32screenCode.GDFlythingObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Start_32screenCode.GDSlimeObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDResetObjects1Objects = Hashtable.newFrom({"Reset": gdjs.Start_32screenCode.GDResetObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Start_32screenCode.GDStartObjects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.Start_32screenCode.GDNewObject4Objects1});gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDOrangeButtonOnSocleObjects1Objects = Hashtable.newFrom({"OrangeButtonOnSocle": gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects1});gdjs.Start_32screenCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Start_32screenCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Start_32screenCode.GDRightObjects1);
{for(var i = 0, len = gdjs.Start_32screenCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Start_32screenCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDRightObjects1[i].hide();
}
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Electron");
}}

}


{


gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flything"), gdjs.Start_32screenCode.GDFlythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Start_32screenCode.GDRightObjects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDFlythingObjects1Objects, gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32screenCode.GDFlythingObjects1 */
{for(var i = 0, len = gdjs.Start_32screenCode.GDFlythingObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDFlythingObjects1[i].flipX(true);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("add");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flything"), gdjs.Start_32screenCode.GDFlythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Start_32screenCode.GDLeftObjects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDLeftObjects1Objects, gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDFlythingObjects1Objects, false, runtimeScene, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32screenCode.GDFlythingObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setString("subtract");
}{for(var i = 0, len = gdjs.Start_32screenCode.GDFlythingObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDFlythingObjects1[i].flipX(false);
}
}}

}


{


gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "add";
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flything"), gdjs.Start_32screenCode.GDFlythingObjects1);
{for(var i = 0, len = gdjs.Start_32screenCode.GDFlythingObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDFlythingObjects1[i].setX(gdjs.Start_32screenCode.GDFlythingObjects1[i].getX() + (1));
}
}}

}


{


gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "subtract";
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flything"), gdjs.Start_32screenCode.GDFlythingObjects1);
{for(var i = 0, len = gdjs.Start_32screenCode.GDFlythingObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDFlythingObjects1[i].setX(gdjs.Start_32screenCode.GDFlythingObjects1[i].getX() - (1));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Start_32screenCode.GDSlimeObjects1);
{for(var i = 0, len = gdjs.Start_32screenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDSlimeObjects1[i].setX(gdjs.Start_32screenCode.GDSlimeObjects1[i].getX() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reset"), gdjs.Start_32screenCode.GDResetObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Start_32screenCode.GDSlimeObjects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDSlimeObjects1Objects, gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDResetObjects1Objects, false, runtimeScene, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32screenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Start_32screenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDSlimeObjects1[i].setX(1318);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32screenCode.GDStartObjects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level Select");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Start_32screenCode.GDNewObject4Objects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonOnSocle"), gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects1);

gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32screenCode.mapOfGDgdjs_46Start_9532screenCode_46GDOrangeButtonOnSocleObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "level", -(0));
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", true);
}{gdjs.deviceVibration.startVibration(1000);
}}

}


{


gdjs.Start_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isWebGLSupported(runtimeScene);
}if (gdjs.Start_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Start_32screenCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.Start_32screenCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Start_32screenCode.GDNewObject5Objects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Start_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32screenCode.GDNewObject4Objects1.length = 0;
gdjs.Start_32screenCode.GDNewObject4Objects2.length = 0;
gdjs.Start_32screenCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32screenCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32screenCode.GDNewObject2Objects1.length = 0;
gdjs.Start_32screenCode.GDNewObject2Objects2.length = 0;
gdjs.Start_32screenCode.GDGrassObjects1.length = 0;
gdjs.Start_32screenCode.GDGrassObjects2.length = 0;
gdjs.Start_32screenCode.GDManObjects1.length = 0;
gdjs.Start_32screenCode.GDManObjects2.length = 0;
gdjs.Start_32screenCode.GDFlythingObjects1.length = 0;
gdjs.Start_32screenCode.GDFlythingObjects2.length = 0;
gdjs.Start_32screenCode.GDLeftObjects1.length = 0;
gdjs.Start_32screenCode.GDLeftObjects2.length = 0;
gdjs.Start_32screenCode.GDRightObjects1.length = 0;
gdjs.Start_32screenCode.GDRightObjects2.length = 0;
gdjs.Start_32screenCode.GDResetObjects1.length = 0;
gdjs.Start_32screenCode.GDResetObjects2.length = 0;
gdjs.Start_32screenCode.GDSlimeObjects1.length = 0;
gdjs.Start_32screenCode.GDSlimeObjects2.length = 0;
gdjs.Start_32screenCode.GDBlockObjects1.length = 0;
gdjs.Start_32screenCode.GDBlockObjects2.length = 0;
gdjs.Start_32screenCode.GDStartObjects1.length = 0;
gdjs.Start_32screenCode.GDStartObjects2.length = 0;
gdjs.Start_32screenCode.GDNewObject3Objects1.length = 0;
gdjs.Start_32screenCode.GDNewObject3Objects2.length = 0;
gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects1.length = 0;
gdjs.Start_32screenCode.GDOrangeButtonOnSocleObjects2.length = 0;
gdjs.Start_32screenCode.GDNewObjectObjects1.length = 0;
gdjs.Start_32screenCode.GDNewObjectObjects2.length = 0;
gdjs.Start_32screenCode.GDVersionObjects1.length = 0;
gdjs.Start_32screenCode.GDVersionObjects2.length = 0;
gdjs.Start_32screenCode.GDNewObject5Objects1.length = 0;
gdjs.Start_32screenCode.GDNewObject5Objects2.length = 0;

gdjs.Start_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32screenCode'] = gdjs.Start_32screenCode;
