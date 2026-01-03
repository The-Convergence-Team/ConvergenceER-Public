// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1054530000, 1054531950, 0, 0, 0, 5);
    InitializeEvent(0, 1054530703, 0);
    InitializeCommonEvent(0, 90005771, 1054531950, 1054532702);
});

$Event(1054532500, Default, function() {
    EndIf(EventFlag(1054530520));
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9320, 1054531500));
    SetEventFlagID(1054530500, ON);
    SetEventFlagID(130, ON);
    DisplayGenericDialog(99999100, PromptType.YESNO, NumberofOptions.OneButton, 0, 4);
});

$Event(1054533700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L0, !EventFlag(1054532700));
    GotoIf(L1, EventFlag(1054532700));
    Goto(L0);
L0:
    WaitFor(EntityInRadiusOfEntity(20000, 1054531950, 3, 1));
    SetNetworkconnectedEventFlagID(1054532700, ON);
    Goto(L1);
L1:
    WaitFor(!EntityInRadiusOfEntity(20000, 1054531950, 3, 1));
    SetNetworkconnectedEventFlagID(1054532700, OFF);
    RestartEvent();
});

$Event(1054533701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L0, !EventFlag(1054532701));
    GotoIf(L1, EventFlag(1054532701));
    Goto(L0);
L0:
    WaitFor(EntityInRadiusOfEntity(20000, 1054531950, 3, 1));
    SetNetworkconnectedEventFlagID(1054532701, ON);
    Goto(L1);
L1:
    WaitFor(!EntityInRadiusOfEntity(20000, 1054531950, 3, 1));
    SetNetworkconnectedEventFlagID(1054532701, OFF);
    RestartEvent();
});

$Event(1054533702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1054539200));
    EndIf(EventFlag(1054539201));
    WaitFor(EventFlag(1054539200) && EventFlag(4652));
    ForceAnimationPlayback(10000, 68110, false, false, false);
    EndEvent();
});

$Event(1054533703, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!(EventFlag(1054539200) || EventFlag(1054539201)));
    SetNetworkconnectedEventFlagID(1054539200, OFF);
    SetNetworkconnectedEventFlagID(1054539201, OFF);
    SetNetworkconnectedEventFlagID(1054539205, OFF);
    EndEvent();
});

$Event(1054530703, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1054532703, OFF);
    WaitFor(AnyBatchEventFlags(71300, 71399));
    SetEventFlagID(1054532703, ON);
    EndEvent();
});
