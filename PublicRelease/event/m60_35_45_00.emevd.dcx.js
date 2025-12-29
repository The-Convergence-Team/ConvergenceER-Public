// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1035450000, 1035451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76205, 1035451980, 77200, 5, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005725, 4750, 4751, 4753, 1035459205, 1035450700, 1035450701, 1035456700);
    InitializeCommonEvent(0, 90005703, 1035450700, 4751, 4752, 1035459206, 4751, 4750, 4754, 0);
    InitializeCommonEvent(0, 90005704, 1035450700, 4751, 4750, 1035459206, 3);
    InitializeCommonEvent(0, 90005702, 1035450700, 4753, 4750, 4754);
    InitializeCommonEvent(0, 90005703, 1035450701, 4751, 4752, 1035459207, 4751, 4750, 4754, 0);
    InitializeCommonEvent(0, 90005704, 1035450701, 4751, 4750, 1035459207, 3);
    InitializeCommonEvent(0, 90005728, 1035450701, 1035452706, 1035452707);
    InitializeCommonEvent(0, 90005727, 4751, 1035450700, 1035450701, 4750, 4753);
    InitializeEvent(0, 1035452500, 0);
    InitializeEvent(0, 1035452600, 1035451600, 3023676, 1035462610, 1035460605, 1035452611, 60470, 9522);
    InitializeEvent(0, 1035452605, 1035450605, 1035452601, 60471);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1035450700, true);
    SetCharacterBackreadState(1035450701, true);
    InitializeCommonEvent(0, 90005251, 1035450200, 1092616192, 0, 3011);
    InitializeCommonEvent(0, 90005211, 1035450210, 30002, 20002, 1035452210, 1077936128, 0, 0, 0, 0, 0);
});

$Event(1035452500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1035457100));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1035457100));
    WaitFixedTimeSeconds(2);
    DisplayGenericDialog(30100, PromptType.YESNO, NumberofOptions.OneButton, 0, 5);
});

$Event(1035452600, Default, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    online = HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    onlineAct &= !online;
    GotoIf(S0, online);
    onlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(X24_4, X0_4);
    WaitFor(onlineAct);
    if (!PlayerHasItem(ItemType.Goods, 8109)) {
        //WaitFixedTimeSeconds(0.1);
        //DisplayGenericDialog(20030, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
        RotateCharacter(10000, X16_4, -1, true);
        ForceAnimationPlayback(10000, X20_4, false, false, false);
        WaitFixedTimeSeconds(2.5);
        SetEventFlagID(X12_4, ON);
        WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
S0:
        RestartEvent();
    }
L1:
    RotateCharacter(10000, X16_4, -1, true);
    ForceAnimationPlayback(10000, X20_4, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetEventFlagID(X12_4, ON);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1035452605, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, X4_4, X8_4, false);
    SetEventFlagID(X0_4, OFF);
});
