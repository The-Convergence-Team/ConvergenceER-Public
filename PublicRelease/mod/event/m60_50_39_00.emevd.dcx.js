// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1050392210, 1050390290, 1050391290, 1050392290);
    InitializeEvent(1, 1050392210, 1050390291, 1050391291, 1050392291);
    InitializeEvent(0, 1050392580, 50390580, 50390851, 1050391580);
    InitializeCommonEvent(0, 90005525, 1050390620, 1050391620);
    InitializeCommonEvent(0, 90005632, 580060, 1050391550, 80060);
    InitializeEvent(0, 1050392300, 1050391650, 1050390200);
    InitializeEvent(1, 1050392300, 1050391651, 1050390200);
    InitializeEvent(2, 1050392301, 1050391652, 1050390201);
    InitializeEvent(0, 1050392303, 1050391600, 1050390201);
    InitializeCommonEvent(0, 90005251, 1050390200, 1093664768, 0, -1);
    InitializeCommonEvent(0, 90005251, 1050390205, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005251, 1050390206, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005250, 1050390208, 1050392208, 0, -1);
    InitializeCommonEvent(0, 90005251, 1050390209, 1090519040, 0, -1);
    InitializeEvent(0, 1050392200, 1050390200, 14807);
    InitializeEvent(1, 1050392200, 1050390201, 14808);
    InitializeEvent(4, 1050392200, 1050390204, 14808);
    InitializeEvent(5, 1050392200, 1050390205, 14807);
    InitializeEvent(6, 1050392200, 1050390206, 14807);
    InitializeEvent(7, 1050392200, 1050390207, 14807);
    InitializeEvent(8, 1050392200, 1050390208, 14807);
    InitializeEvent(9, 1050392200, 1050390209, 14807);
    InitializeEvent(10, 1050392200, 1050390210, 14807);
    InitializeCommonEvent(0, 90005200, 1050390258, 30014, 20014, 1050392350, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1050390259, 30014, 20014, 1050392350, 0, 0, 0, 0, 0);
    InitializeEvent(11, 1050392200, 1050390300, 10113);
    InitializeEvent(12, 1050392200, 1050390304, 14807);
    InitializeEvent(13, 1050392200, 1050390309, 14807);
    InitializeEvent(14, 1050392200, 1050390310, 14807);
    InitializeEvent(0, 1050392201, 1050390301, 10113, 1082130432, 1077936128);
    InitializeEvent(1, 1050392201, 1050390302, 10113, 1084227584, 1082130432);
    InitializeEvent(2, 1050392201, 1050390303, 10113, 1086324736, 1073741824);
    InitializeEvent(3, 1050392201, 1050390305, 10113, 1082130432, 1082130432);
    InitializeEvent(4, 1050392201, 1050390306, 10113, 1086324736, 1077936128);
    InitializeEvent(5, 1050392201, 1050390307, 10113, 1084227584, 1077936128);
    InitializeEvent(6, 1050392201, 1050390308, 10113, 1086324736, 1082130432);
    InitializeCommonEvent(0, 90005200, 1050390351, 30016, 20016, 1050392350, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1050390400, 1050392400, 0, -1);
});

$Event(1050392200, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    SetSpEffect(X0_4, X4_4);
});

$Event(1050392201, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    SetSpEffect(X0_4, X4_4);
    WaitFixedTimeSeconds(X8_4);
    ClearSpEffect(X0_4, X4_4);
    WaitFixedTimeSeconds(X12_4);
    RestartEvent();
});

$Event(1050392210, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacter(X0_4);
    EndIf(EventFlag(X8_4));
    EndIf(CharacterDead(X0_4));
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        InArea(10000, X8_4)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    CreateAssetfollowingSFX(X4_4, 100, 620383);
    EnableCharacter(X0_4);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(X4_4, true);
    ForceAnimationPlayback(X0_4, 20001, false, false, false);
    WaitFixedTimeSeconds(1.9);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableCharacter(X0_4);
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1050392300, Default, function(X0_4, X4_4) {
    EnableNetworkSync();
    CreateAssetfollowingSFX(X0_4, 200, 1502);
    WaitFor(EventFlag(X4_4));
    PlaySE(X0_4, SoundType.SFX, 1500);
    DisableAsset(X0_4);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1050392301, Default, function(X0_4, X4_4) {
    EnableNetworkSync();
    CreateAssetfollowingSFX(X0_4, 200, 1501);
    WaitFor(EventFlag(X4_4));
    PlaySE(X0_4, SoundType.SFX, 1500);
    DisableAsset(X0_4);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1050392303, Default, function(X0_4, X4_4) {
    EnableNetworkSync();
    if (!EventFlag(X4_4)) {
        WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9520, X0_4));
        RotateCharacter(10000, X0_4, -1, true);
        ForceAnimationPlayback(10000, 60010, false, false, false);
        WaitFixedTimeSeconds(1.3);
        SetEventFlagID(X4_4, ON);
        DisplayGenericDialog(30000, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    }
L0:
    CreateAssetfollowingSFX(X0_4, 100, 806031);
    EndEvent();
});

$Event(1050392580, Default, function(X0_4, X4_4, X8_4) {
    RegisterLadder(X0_4, X4_4, X8_4);
});
