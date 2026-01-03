// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(1048370000, 1048371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 1048370810, 1048370000, 1048370951, 1048371950, 5); //guardian grace
    InitializeCommonEvent(0, 90005100, 76458, 76405, 1048371980, 77410, 0, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    InitializeCommonEvent(0, 90005201, 1048370800, 30000, 20000, 1112014848, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1048370800, 904501600, 25);
    InitializeCommonEvent(0, 90005861, 1048370800, 0, 1048370800, 1, 30400, 30064, 0);
    InitializeEvent(0, 1048372200, 1048370299, 12603, 1048372299, 1048372298, 1048372297);
    InitializeCommonEvent(0, 90005300, 1048370299, 1048370299, 40406, 0, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1048370750, 1048370725, 1048370810)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 1048370810, 1048370811, 904810707, 920900);
    InitializeCommonEvent(0, 90005875, 1048370810, 30440, 920900);
    InitializeCommonEvent(0, 90005890, 1048370810, 1048370811, 1048370811);
    InitializeCommonEvent(0, 90005891, 1048370810, 1048370811, 1048370812);
    //InitializeCommonEvent(0, 90005870, 1048370801, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 1048370801, 0, 1048370801, 0, 30440, 0);
    //InitializeCommonEvent(0, 90005251, 1048370801, 1101004800, 0, 0);
    InitializeEvent(0, 1048372205, 0);
    InitializeEvent(0, 98005303, 1048370811, 1048370813);
    InitializeEvent(0, 98005304, 1048370811, 1048370813);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048370700, true);
});

$Event(1048372200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !CharacterDead(X0_4));
    SetEventFlag(TargetEventFlagType.EventFlag, 1048372201, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 1048372202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1048372201, 1048372202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1048372201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1048372201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1048372201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false, Equal, 1);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1048372205, Restart, function() {
    DisableCharacter(1048370802);
    DisableCharacterCollision(1048370802);
    ForceCharacterDeath(1048370802, false);
});
