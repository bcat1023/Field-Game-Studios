gdjs.Level_32SelectCode = {};
gdjs.Level_32SelectCode.GDNewObjectObjects1= [];
gdjs.Level_32SelectCode.GDNewObjectObjects2= [];
gdjs.Level_32SelectCode.GDNewObjectObjects3= [];
gdjs.Level_32SelectCode.GDLevelObjects1= [];
gdjs.Level_32SelectCode.GDLevelObjects2= [];
gdjs.Level_32SelectCode.GDLevelObjects3= [];
gdjs.Level_32SelectCode.GDTextObjects1= [];
gdjs.Level_32SelectCode.GDTextObjects2= [];
gdjs.Level_32SelectCode.GDTextObjects3= [];
gdjs.Level_32SelectCode.GDNewObject2Objects1= [];
gdjs.Level_32SelectCode.GDNewObject2Objects2= [];
gdjs.Level_32SelectCode.GDNewObject2Objects3= [];
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects1= [];
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects2= [];
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects3= [];
gdjs.Level_32SelectCode.GDBackObjects1= [];
gdjs.Level_32SelectCode.GDBackObjects2= [];
gdjs.Level_32SelectCode.GDBackObjects3= [];
gdjs.Level_32SelectCode.GDNewObject3Objects1= [];
gdjs.Level_32SelectCode.GDNewObject3Objects2= [];
gdjs.Level_32SelectCode.GDNewObject3Objects3= [];
gdjs.Level_32SelectCode.GDL2_95textObjects1= [];
gdjs.Level_32SelectCode.GDL2_95textObjects2= [];
gdjs.Level_32SelectCode.GDL2_95textObjects3= [];
gdjs.Level_32SelectCode.GDL2_95clickObjects1= [];
gdjs.Level_32SelectCode.GDL2_95clickObjects2= [];
gdjs.Level_32SelectCode.GDL2_95clickObjects3= [];
gdjs.Level_32SelectCode.GDNewObject4Objects1= [];
gdjs.Level_32SelectCode.GDNewObject4Objects2= [];
gdjs.Level_32SelectCode.GDNewObject4Objects3= [];
gdjs.Level_32SelectCode.GDNewObject5Objects1= [];
gdjs.Level_32SelectCode.GDNewObject5Objects2= [];
gdjs.Level_32SelectCode.GDNewObject5Objects3= [];
gdjs.Level_32SelectCode.GDL3_95textObjects1= [];
gdjs.Level_32SelectCode.GDL3_95textObjects2= [];
gdjs.Level_32SelectCode.GDL3_95textObjects3= [];
gdjs.Level_32SelectCode.GDL3_95clickObjects1= [];
gdjs.Level_32SelectCode.GDL3_95clickObjects2= [];
gdjs.Level_32SelectCode.GDL3_95clickObjects3= [];

gdjs.Level_32SelectCode.conditionTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition1IsTrue_0 = {val:false};


gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDLevel_9595_9595one_9595click_9595bokObjects1Objects = Hashtable.newFrom({"Level__one_click_bok": gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects1});gdjs.Level_32SelectCode.eventsList0 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Level_32SelectCode.GDBackObjects1});gdjs.Level_32SelectCode.eventsList1 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start screen", true);
}}

}


};gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDL3_9595clickObjects2Objects = Hashtable.newFrom({"L3_click": gdjs.Level_32SelectCode.GDL3_95clickObjects2});gdjs.Level_32SelectCode.eventsList2 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 3");
}}

}


};gdjs.Level_32SelectCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("L3_click"), gdjs.Level_32SelectCode.GDL3_95clickObjects2);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDL3_9595clickObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_32SelectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDL2_9595clickObjects2Objects = Hashtable.newFrom({"L2_click": gdjs.Level_32SelectCode.GDL2_95clickObjects2});gdjs.Level_32SelectCode.eventsList4 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 2");
}}

}


};gdjs.Level_32SelectCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("L2_click"), gdjs.Level_32SelectCode.GDL2_95clickObjects2);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDL2_9595clickObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_32SelectCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level_32SelectCode.eventsList6 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 3;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("L2_text"), gdjs.Level_32SelectCode.GDL2_95textObjects2);
gdjs.copyArray(runtimeScene.getObjects("L3_text"), gdjs.Level_32SelectCode.GDL3_95textObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Level_32SelectCode.GDNewObject4Objects2);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDL2_95textObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDL2_95textObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDL3_95textObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDL3_95textObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject4Objects2.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject4Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Level_32SelectCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 2;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("L2_text"), gdjs.Level_32SelectCode.GDL2_95textObjects2);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDL2_95textObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDL2_95textObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Level_32SelectCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(0);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Level_32SelectCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject5Objects1[i].hide(false);
}
}}

}


};gdjs.Level_32SelectCode.eventsList7 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "level", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.Level_32SelectCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Level_32SelectCode.eventsList8 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("L2_text"), gdjs.Level_32SelectCode.GDL2_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("L3_text"), gdjs.Level_32SelectCode.GDL3_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Level_32SelectCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Level_32SelectCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Level_32SelectCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDL2_95textObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDL2_95textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDL3_95textObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDL3_95textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject3Objects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Level_32SelectCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDNewObject3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level__one_click_bok"), gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDLevel_9595_9595one_9595click_9595bokObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_32SelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Level_32SelectCode.GDBackObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_32SelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_32SelectCode.eventsList7(runtimeScene);
}


};

gdjs.Level_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectCode.GDNewObjectObjects1.length = 0;
gdjs.Level_32SelectCode.GDNewObjectObjects2.length = 0;
gdjs.Level_32SelectCode.GDNewObjectObjects3.length = 0;
gdjs.Level_32SelectCode.GDLevelObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevelObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevelObjects3.length = 0;
gdjs.Level_32SelectCode.GDTextObjects1.length = 0;
gdjs.Level_32SelectCode.GDTextObjects2.length = 0;
gdjs.Level_32SelectCode.GDTextObjects3.length = 0;
gdjs.Level_32SelectCode.GDNewObject2Objects1.length = 0;
gdjs.Level_32SelectCode.GDNewObject2Objects2.length = 0;
gdjs.Level_32SelectCode.GDNewObject2Objects3.length = 0;
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel_95_95one_95click_95bokObjects3.length = 0;
gdjs.Level_32SelectCode.GDBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDBackObjects3.length = 0;
gdjs.Level_32SelectCode.GDNewObject3Objects1.length = 0;
gdjs.Level_32SelectCode.GDNewObject3Objects2.length = 0;
gdjs.Level_32SelectCode.GDNewObject3Objects3.length = 0;
gdjs.Level_32SelectCode.GDL2_95textObjects1.length = 0;
gdjs.Level_32SelectCode.GDL2_95textObjects2.length = 0;
gdjs.Level_32SelectCode.GDL2_95textObjects3.length = 0;
gdjs.Level_32SelectCode.GDL2_95clickObjects1.length = 0;
gdjs.Level_32SelectCode.GDL2_95clickObjects2.length = 0;
gdjs.Level_32SelectCode.GDL2_95clickObjects3.length = 0;
gdjs.Level_32SelectCode.GDNewObject4Objects1.length = 0;
gdjs.Level_32SelectCode.GDNewObject4Objects2.length = 0;
gdjs.Level_32SelectCode.GDNewObject4Objects3.length = 0;
gdjs.Level_32SelectCode.GDNewObject5Objects1.length = 0;
gdjs.Level_32SelectCode.GDNewObject5Objects2.length = 0;
gdjs.Level_32SelectCode.GDNewObject5Objects3.length = 0;
gdjs.Level_32SelectCode.GDL3_95textObjects1.length = 0;
gdjs.Level_32SelectCode.GDL3_95textObjects2.length = 0;
gdjs.Level_32SelectCode.GDL3_95textObjects3.length = 0;
gdjs.Level_32SelectCode.GDL3_95clickObjects1.length = 0;
gdjs.Level_32SelectCode.GDL3_95clickObjects2.length = 0;
gdjs.Level_32SelectCode.GDL3_95clickObjects3.length = 0;

gdjs.Level_32SelectCode.eventsList8(runtimeScene);
return;

}

gdjs['Level_32SelectCode'] = gdjs.Level_32SelectCode;
