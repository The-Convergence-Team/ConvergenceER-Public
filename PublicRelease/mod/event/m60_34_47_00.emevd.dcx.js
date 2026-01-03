// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1034470000, 1034471951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76214, 76211, 1034471981, 77220, 1, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    InitializeCommonEvent(0, 90005605, 1034471610, 266, 10012690, 0, 1034472610, 1034472611, 1034472612, 1034470610, 0, 0, 0);
    InitializeEvent(0, 1034472611, 1034470611, 1034471611, 1034472613, 1034472614);
    InitializeEvent(0, 1034472612, 1034470611, 1034471612);
    InitializeEvent(0, 1034472260, 1034470250, 1034471250, 1034470250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1034472260, 1034470251, 1034471251, 1034470251, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1034472261, 1034470250, 1034471250, 1034470250, 1034475260, 0, 0, 0, 0, 0, 1034471300, 1034472250);
    InitializeEvent(1, 1034472261, 1034470251, 1034471251, 1034470251, 1034475263, 0, 0, 0, 0, 0, 1034471310, 1034472251);
    InitializeEvent(0, 1034472262, 1034470250, 0, 1034470250, 0, 1034470260, 30010, 20010, 1101004800, 0, 0, 1034472250);
    InitializeEvent(1, 1034472262, 1034470250, 0, 1034470250, 0, 1034470261, 30010, 20010, 1101004800, 0, 0, 1034472250);
    InitializeEvent(3, 1034472262, 1034470250, 0, 1034470250, 0, 1034470262, 30010, 20010, 1101004800, 0, 0, 1034472250);
    InitializeEvent(4, 1034472262, 1034470251, 0, 1034470251, 0, 1034470263, 30010, 20010, 1101004800, 0, 0, 1034472251);
    InitializeEvent(5, 1034472262, 1034470251, 0, 1034470251, 0, 1034470264, 30010, 20010, 1101004800, 0, 0, 1034472251);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 1034470340, 30005, 20005, 1034472340, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034470200, 1034472200, 1084227584, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1034470201, 1034472200, 1084227584, 1073741824, 1705);
    InitializeCommonEvent(0, 90005261, 1034470202, 1034472200, 1084227584, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1034470203, 1034472200, 1084227584, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1034470204, 1034472200, 1084227584, 1069547520, 1705);
    InitializeCommonEvent(0, 90005261, 1034470205, 1034472200, 1084227584, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1034470206, 1034472200, 1084227584, 1073741824, 1705);
});

$Event(1034472260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasDamageType(X8_4, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    IssueShortWarpRequest(X8_4, TargetEntityType.Asset, X4_4, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1034472261, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X40_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
            DisableCharacter(X12_4);
            DisableCharacterCollision(X12_4);
            ForceCharacterDeath(X12_4, false);
            EndEvent();
        }
L1:
        DisableAsset(X4_4);
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X8_4, 436)
        || CharacterHasStateInfo(X8_4, 2)
        || CharacterHasStateInfo(X8_4, 5)
        || CharacterHasStateInfo(X8_4, 6)
        || CharacterHasStateInfo(X8_4, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(X4_4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(X36_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
});

$Event(1034472262, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    EndIf(SpecialStandbyEndedFlag(X16_4));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || HasDamageType(X16_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X16_4, 436)
        || CharacterHasStateInfo(X16_4, 2)
        || CharacterHasStateInfo(X16_4, 5)
        || CharacterHasStateInfo(X16_4, 6)
        || CharacterHasStateInfo(X16_4, 260)
        || EntityInRadiusOfEntity(X16_4, 20000, X28_4, 1);
    WaitFor(
        (CharacterHasSpEffect(X0_4, 481)
            && !CharacterHasSpEffect(X0_4, 90100)
            && !CharacterHasSpEffect(X0_4, 90110)
            && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (dmgChrArea && chrSp));
    SetNetworkconnectedEventFlagID(X40_4, ON);
    SetSpecialStandbyEndedFlag(X16_4, ON);
    WaitFixedTimeSeconds(X32_4);
    ForceAnimationPlayback(X16_4, X24_4, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1034472611, Restart, function(X0_4, X4_4, X8_4, X12_4) {
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
    SetNetworkconnectedEventFlagID(1034470610, ON);
    DisplayGenericDialog(208186, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
});

$Event(1034472612, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        EnableAsset(X4_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X4_4);
});
