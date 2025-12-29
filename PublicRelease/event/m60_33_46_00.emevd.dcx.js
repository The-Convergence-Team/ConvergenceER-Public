// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1033460000, 1033461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76214, 76210, 1033461980, 77220, 0, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    InitializeCommonEvent(0, 90005251, 1033460200, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460201, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460203, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460204, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005605, 1033461610, 13, 13002509, 0, 1033462610, 1033462611, 1033462612, 1033460610, 0, 0, 0);
    InitializeEvent(0, 1033462611, 1033460611, 1033461611, 1033462613, 1033462614);
    InitializeEvent(0, 1033462612, 1033460611, 1033461612);
});

$Event(1033462611, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    WaitFor(ActionButtonInArea(9523, X4_4));
    DisplayGenericDialogAndSetEventFlags(108186, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 3, X8_4, X12_4, X12_4);
    if (!EventFlag(X8_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (!PlayerHasItem(ItemType.Goods, 8186)) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.5);
        DisplayGenericDialog(308186, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, X4_4, 191);
    ForceAnimationPlayback(10000, 60810, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    SetNetworkconnectedEventFlagID(1033460610, ON);
    DisplayGenericDialog(208186, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
});

$Event(1033462612, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        EnableAsset(X4_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X4_4);
});
