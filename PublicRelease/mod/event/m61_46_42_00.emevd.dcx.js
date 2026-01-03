// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2046420000, 2046421950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 900005580, 580600, 2046421602, 9146);
    InitializeEvent(0, 2046420700, 2046420700, 4365, 90100, 4360, 4363, 4898, 2046422702);
    InitializeCommonEvent(0, 90005744, 2046420700, 2046422701, 2046429220, 90201);
    InitializeCommonEvent(0, 90005749, 2046420701, 2046420700, 4365, 2046422702);
    InitializeEvent(0, 2046420710, 2046420720, 4425, 90100, 4420, 4897, 2046422720);
    InitializeEvent(0, 2046420711, 2046429376, 2046429356, 2046429206, 4897, 2046429375, 4425);
    InitializeCommonEvent(0, 90005749, 2046420721, 2046420720, 4425, 2046422720);
    InitializeCommonEvent(0, 90005750, 2046421721, 4350, 106010, 400602, 400602, 2046429375, 6102);
    InitializeCommonEvent(0, 90005748, 2046421720, 206020, 1030022, 1106247680, 4912);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005430, -2048546996);
    InitializeCommonEvent(0, 90005432, -2048546996, -2048544996);
    InitializeCommonEvent(0, 90005435, -2048546996, -2048544995, -2048544994, -2048544993, -2048544992);
    InitializeCommonEvent(0, 90005433, -2048546996, -2048544991, -2048544990, -2048544989);
    InitializeCommonEvent(0, 90005434, -2048546996, -2048544991, -2048544990, -2048544989);
    InitializeCommonEvent(0, 90005437, -2048546996, -2048544988, -2048544987);
    InitializeCommonEvent(0, 90005301, 2046420300, -2048546996, 2046420980, 1082130432, 0);
    //Anger of the Fell God Furnace Golem Instant Kill Initialize
    InitializeCommonEvent(0, 90005438, -2048546996);
});

$Event(2046420700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(X4_4)) {
        WaitFor(EventFlag(X4_4));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X12_4));
    GotoIf(L4, EventFlag(X16_4));
L1:
    if (!EventFlag(X24_4)) {
        if (!EventFlag(X20_4)) {
            EnableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, false);
            WaitFor(CharacterBackreadStatus(X0_4));
            ResetCharacterPosition(X0_4);
            ForceAnimationPlayback(X0_4, X8_4, false, false, false);
            SetCharacterTeamType(X0_4, TeamType.Disabled);
        }
    }
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

$Event(2046420710, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(X4_4)) {
        WaitFor(EventFlag(X4_4));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X12_4));
    GotoIf(L4, EventFlag(X16_4));
L1:
    if (!EventFlag(X20_4)) {
        if (!EventFlag(X16_4)) {
            EnableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, false);
            WaitFor(CharacterBackreadStatus(X0_4));
            ResetCharacterPosition(X0_4);
            ForceAnimationPlayback(X0_4, X8_4, false, false, false);
            SetCharacterTeamType(X0_4, TeamType.Disabled);
        }
    }
    if (EventFlag(X16_4)) {
        SetEventFlagID(X20_4, ON);
    }
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

$Event(2046420711, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(X4_4) && EventFlag(X8_4)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(X12_4) && EventFlag(X20_4)) {
        SetEventFlagID(X16_4, ON);
    }
});
