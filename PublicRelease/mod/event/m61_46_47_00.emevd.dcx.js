// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76941, 2046471950, 0, 0, 0, 5);
    RegisterBonfire(76946, 2046471951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005102, 76945, 76941, 2046471980, 77900, 3, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeCommonEvent(0, 90005221, 2046470300, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470305, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470310, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470311, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470312, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470313, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470314, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470315, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470316, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470317, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470318, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470319, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470323, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470327, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470346, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470348, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470349, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470350, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470351, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470365, 30014, 20014, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470366, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470367, 30005, 20005, 0, 0);
    $InitializeEvent(0, 2046472540, 2046478540, 2046471540, 2046471541, 2046473541, 1464026, 10, 2, 2046473540, 464057);
    InitializeCommonEvent(0, 900005580, 580600, 2046471500, 9146);
    InitializeCommonEvent(0, 90005748, 2046471700, 206020, 1030026, 1106247680, 4916);
    $InitializeCommonEvent(0, 20000350, 2046471701, 2046471702, 2055550105, 2055550115, 2046470550, 2046471703); // Shrine Init
});

$Event(2046472540, Restart, function(eventFlagId, assetEntityId, assetEntityId2, objactEventFlag, objactParamId, animationId, animationId2, objactEventFlag2, objactParamId2) {
    if (EventFlag(eventFlagId)) {
        DisableObjAct(assetEntityId2, objactParamId);
        DisableObjAct(assetEntityId, objactParamId2);
        ReproduceAssetAnimation(assetEntityId, animationId2);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(objactEventFlag);
    obj2 = ObjActEventFlag(objactEventFlag2);
    WaitFor(obj || obj2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    if (!obj2.Passed) {
        DisableObjAct(assetEntityId2, objactParamId);
        DisableObjAct(assetEntityId, objactParamId2);
        ForceAnimationPlayback(assetEntityId, animationId, false, false, false);
        EndEvent();
    }
L1:
    DisableObjAct(assetEntityId2, objactParamId);
    DisableObjAct(assetEntityId, objactParamId2);
    EndEvent();
});
