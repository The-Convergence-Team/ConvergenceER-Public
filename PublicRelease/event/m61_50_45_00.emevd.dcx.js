// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2050450000, 2050451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005251, 2050450200, 1103626240, 0, -1);
    InitializeCommonEvent(0, 90005300, 2050450390, 2050450390, 40900, 0, 0);
    InitializeCommonEvent(0, 90005570, 60864, 115, 2050451680, 2, 2, 0);
    InitializeEvent(0, 2050450700, 2050450700, 4500, 4505, 2051459725, 2051452719, 2051459210, 90102, 1113325568);
    InitializeEvent(0, 2050450701, 2050451700, 206040, 1030030, 1106247680, 0, 2051452719, 4505, 2051459725);
    InitializeCommonEvent(0, 90005750, 2050451701, 4350, 106650, 400666, 400666, 2051450800, 0);
    InitializeCommonEvent(0, 9006900, 2050450720, 2050451720, 2050459250); // Weapon Dupe
    DisableMapPart(2050451720);
});

$Event(2050450700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTalkRange(X0_4, 17);
    GotoIf(S0, !EventFlag(X8_4));
    GotoIf(L20, EventFlag(X12_4));
S0:
    flag = EventFlag(X8_4) && EventFlag(X16_4);
    if (!flag) {
        WaitFor(flag);
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X4_4));
    Goto(L20);
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterInvincibility(X0_4);
    WaitFixedTimeRealFrames(1);
    WaitFor(CharacterBackreadStatus(X0_4));
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 2050452717, -1);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(X20_4, ON);
    ForceAnimationPlayback(X0_4, X24_4, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetCharacterTalkRange(X0_4, X28_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X8_4) || !EventFlag(X16_4));
    RestartEvent();
});

$Event(2050450701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    flag = !EventFlag(X20_4) || !EventFlag(X24_4) || (EventFlag(X20_4) && EventFlag(X28_4));
    if (!flag) {
        WaitFor(flag);
        RestartEvent();
    }
L0:
    WaitFor(ActionButtonInArea(X4_4, X0_4) || (EventFlag(X20_4) && !EventFlag(X28_4)));
    RestartIf(EventFlag(X20_4) && !EventFlag(X28_4));
    DisplayGenericDialog(X8_4, PromptType.YESNO, NumberofOptions.NoButtons, 0, X12_4);
    if (X16_4 != 0) {
        SetEventFlagID(X16_4, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
