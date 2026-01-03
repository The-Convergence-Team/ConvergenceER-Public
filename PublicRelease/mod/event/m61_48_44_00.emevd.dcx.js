// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2048440001, 2048441951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 2048440800, 2048440000, 2048440950, 2048441950, 0);
    InitializeCommonEvent(0, 90005300, 2048440392, 2048440392, 40902, 0, 0);
    InitializeCommonEvent(0, 90005300, 2048440393, 2048440393, 40920, 0, 0);
    InitializeCommonEvent(0, 90005300, 2048440398, 2048440398, 40922, 0, 0);
    InitializeCommonEvent(0, 90005200, 2048440392, 30002, 20002, 2048442392, 0, 0, 0, 0, 0);
    InitializeEvent(0, 2048442800, 0);
    InitializeEvent(0, 2048442810, 0);
    InitializeEvent(0, 2048442849, 0);
    InitializeEvent(0, 2048442840, 0);
    InitializeEvent(0, 2048442811, 0);
    InitializeCommonEvent(0, 90005780, 2048440800, 2048442160, 2048442161, 2048440720, 0, 2048442721, 2048459286, 1, 0);
    InitializeCommonEvent(0, 90005781, 2048440800, 2048442160, 2048442161, 2048440720);
    InitializeCommonEvent(0, 90005784, 2048442160, 2048442805, 2048440720, 2048442800, 2048442805, 0);
    InitializeCommonEvent(0, 90005250, 2048440271, 2048442271, 0, 3008);
    InitializeEvent(0, 2048442200, 2048440200);
    InitializeCommonEvent(0, 90005250, 2048440200, 2048442292, 0, 0);
    InitializeCommonEvent(0, 90005250, 2048440260, 2048442292, 0, 0);
    InitializeCommonEvent(0, 90005250, 2048440292, 2048442292, 0, 0);
    InitializeCommonEvent(0, 90005250, 2048440203, 2048442203, 0, 3008);
    InitializeCommonEvent(0, 90005251, 2048440304, 1103626240, 0, 0);
    InitializeEvent(0, 2048442580, 0);
    InitializeCommonEvent(0, 90005501, 2048440510, 2048440511, 0, 2048441510, 2048441511, 2048441512, 2048440512);
    InitializeEvent(0, 2048442510, 0);
    InitializeCommonEvent(0, 900005610, 2048441200, 100, 800, 0);
    InitializeCommonEvent(0, 90005790, 0, 2048440180, 2048442181, 2048442182, 2048440750, 22, 2048442710, 2048442711, 0, 2045429290, 0, 0);
    InitializeCommonEvent(0, 90005791, 2048440180, 2048442181, 2048442182, 2048440750);
    InitializeCommonEvent(0, 90005792, 2048440180, 2048442181, 2048442182, 2048440750, 0, 0);
    InitializeCommonEvent(0, 90005793, 2048440180, 2048442181, 2048442182, 2048440750, 2048442710, 0, 0);
    InitializeCommonEvent(0, 90005774, 2048440180, 116401, 400645);
    InitializeCommonEvent(0, 90005757, 2048440740, 2048440741, 4385, 4950, 2045422710, 4383);
    InitializeCommonEvent(0, 90005759, 2045429280, 4385, 4960, 2048440740, 4950, 2045429290, 4950, 4956, 2045429281, 2045429282, 4901, 1065353216, 2045429340, 1106247680);
    InitializeCommonEvent(0, 90005778, 2048442720, 4950, 400750, 2048440740);
    InitializeCommonEvent(0, 90005779, 2048440740, 4950, 20016, 4385, 4383);
    InitializeCommonEvent(0, 90005744, 2048440740, 2048449300, 2048449300, 20015);
    InitializeCommonEvent(0, 90005766, 2048442181, 2048440750, 1120403456, 2045429277, 4960);
    InitializeCommonEvent(0, 90005767, 2045429280, 4380, 4383, 2048440750, 4901, 2048440751, 2045429297);
    InitializeCommonEvent(0, 90005777, 2048440751, 4960, 4383, 2048442181);
    InitializeCommonEvent(0, 90005774, 2045429297, 116401, 400645);
    InitializeEvent(0, 2048440715, 2048459286, 2048440800, 4927);
});

$Event(2048442580, Default, function() {
    RegisterLadder(2048440580, 2048440581, 2048441580);
    RegisterLadder(2048440582, 2048440583, 2048441582);
});

$Event(2048442510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2048440510, 2048440511, 0, 2048441510, 2048441511, 2048443511, 2048441512, 2048443512, 2048442511, 2048442512, 2048440512, 2048440513, 0);
});

$Event(2048442200, Restart, function(X0_4) {
    if (!CharacterHasSpEffect(X0_4, 13690)) {
        SetSpEffect(X0_4, 13690);
    }
});

$Event(2048442800, Default, function() {
    EndIf(EventFlag(2048440800));
    WaitFor(CharacterHPValue(2048440800) <= 0);
    WaitFixedTimeSeconds(6);
    PlaySE(2048440800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2048440800));
    HandleBossDefeatAndDisplayBanner(2048440800, TextBannerType.LegendFelled);
    SetEventFlagID(2048440800, ON);
    SetEventFlagID(9190, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61190, ON);
    }
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(4925, ON);
    }
    WaitFor(InArea(10000, 2048442400) || !InArea(10000, 2048442410));
    SuppressSE(SoundType.BGM, 0, false);
});

$Event(2048442810, Restart, function() {
    if (EventFlag(2048440800)) {
        DisableCharacter(2048440800);
        DisableCharacterCollision(2048440800);
        ForceCharacterDeath(2048440800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(2048440800);
    EnableCharacterInvincibility(2048440800);
    DisableCharacterHPBarDisplay(2048440800);
    WaitFor(EventFlag(2048442805) && InArea(10000, 2048442800));
L2:
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(2048440800);
    DisableCharacterInvincibility(2048440800);
    SetNetworkUpdateRate(2048440800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.5);
    DisplayBossHealthBar(Enabled, 2048440800, 0, 905300000);
});

$Event(2048442811, Restart, function() {
    EndIf(EventFlag(2048440800));
    WaitFor(CharacterHasSpEffect(2048440800, 20012001));
    SetEventFlagID(2048442802, ON);
});

$Event(2048442840, Restart, function() {
    EndIf(EventFlag(2048440800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && InArea(2048440800, 2048442840));
    SetSpEffect(2048440800, 20012270);
    WaitFixedTimeSeconds(1.6);
    RestartEvent();
});

$Event(2048442849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2048440800, 2048441800, 2048442800, 2048442805, 2048445800, 10000, 0, 2048442800);
    InitializeCommonEvent(0, 9005801, 2048440800, 2048441800, 2048442800, 2048442805, 2048442806, 10000);
    InitializeCommonEvent(0, 9005811, 2048440800, 2048441800, 5, 0);
    InitializeCommonEvent(0, 9005811, 2048440800, 2048441801, 4, 0);
    InitializeCommonEvent(0, 9005822, 2048440800, 530000, 2048442805, 2048442806, 0, 2048442802, 0, 1);
});

$Event(2048440715, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetEventFlagID(X0_4, OFF);
});

$Event(2048440716, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetEventFlagID(X0_4, OFF);
});


