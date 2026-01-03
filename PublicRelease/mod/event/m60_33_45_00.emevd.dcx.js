// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005880, 1033450800, 1033450805, 1033452800, 1033450800, 1033450100, 2957628, 1033452805);
    InitializeCommonEvent(0, 90005881, 1033450800, 1033450805, 1033452801, 1033452802, 20300, 1033451805, 2957628, 1033452805);
    InitializeCommonEvent(0, 90005882, 1033450800, 1033450805, 1033452800, 1033450800, 1033452806, 1033455810, 1033451800, 1033450810, 1033452810, 903181000, -1, 20001);
    InitializeCommonEvent(0, 90005883, 1033450800, 1033450805, 1033451805);
    InitializeCommonEvent(0, 90005885, 1033450800, 0, 1033452806, 1033452807, 0, 1);
    InitializeEvent(0, 1033452200, 1033450200, 12603, 1033452200, 1033452201, 1033452202);
    InitializeCommonEvent(0, 90005300, 1033450200, 1033450200, 40264, 0, 0);
});

$Event(1033452360, Restart, function() {
    WaitFor(EventFlag(1033452800) && PlayerIsInOwnWorld());
    DisableCharacter(1033455800);
    DisableCharacterCollision(1033455800);
    WaitFor(EventFlag(1033450800));
    WaitFixedTimeSeconds(7);
    EnableCharacter(1033455800);
    EnableCharacterCollision(1033455800);
});

$Event(1033452200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1233450200));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !EventFlag(1233450200) && !CharacterDead(X0_4));
    SetEventFlagID(1033452201, OFF);
    SetEventFlagID(1033452202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1033452201, 1033452202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1033452201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1033452201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1033452201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
