// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1039420800, 1039420000, 1039420950, 1039421950, 1084227584);
    InitializeEvent(0, 1039422202, 1039420202);
    InitializeEvent(1, 1039422202, 1039420203);
    InitializeEvent(2, 1039422202, 1039420204);
    InitializeEvent(0, 1039422210, 1039420210, 1039422210, 1039422210);
    InitializeEvent(1, 1039422210, 1039420211, 1039422210, 1039422211);
    InitializeEvent(2, 1039422210, 1039420212, 1039422210, 1039422212);
    InitializeEvent(3, 1039422210, 1039420213, 1039422210, 1039422213);
    InitializeEvent(4, 1039422210, 1039420214, 1039422210, 1039422214);
    InitializeEvent(5, 1039422210, 1039420215, 1039422210, 1039422215);
    InitializeEvent(6, 1039422210, 1039420216, 1039422210, 1039422216);
    InitializeEvent(7, 1039422210, 1039420217, 1039422210, 1039422217);
    InitializeEvent(8, 1039422210, 1039420218, 1039422210, 1039422218);
    InitializeEvent(0, 1039422340, 1039420340, 1039422340, 1039422340);
    InitializeEvent(0, 1039422200, 1039425200, 1039422200);
    InitializeEvent(0, 1039422600, 1039421600, 1039421601, 82020);
    InitializeCommonEvent(0, 90005605, 1039421610, 2958140, 1035452630, 0, 1035452610, 1039422611, 1039422612, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005630, 61394200, 1039421500, 115);
    InitializeCommonEvent(0, 90005683, 62203, 1039421684, 209, 78294, 78294);
    InitializeCommonEvent(0, 90005631, 1039421640, 61020);
    InitializeCommonEvent(0, 90005706, 1039420700, 30025, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1039420750, 1039420725, 1039420800)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 1039420800, 1039420801, 904810665, 950000);
    InitializeCommonEvent(0, 90005875, 1039420800, 30270, 950000);
    InitializeCommonEvent(0, 90005890, 1039420800, 1039420801, 1039420801);
    InitializeCommonEvent(0, 90005891, 1039420800, 1039420801, 1039420802);
    //InitializeCommonEvent(0, 90005870, 1039420800, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 1039420800, 0, 1039420800, 0, 30270, 0);
    //InitializeCommonEvent(0, 90005251, 1039420800, 1101004800, 0, 0);
    //InitializeEvent(0, 1039422205, 0);
    InitializeEvent(0, 98005303, 1039420801, 1039420803);
    InitializeEvent(0, 98005304, 1039420801, 1039420803);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039420700, true);
});

$Event(1039422200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5657);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1039422200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5657);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1039422200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5657);
});

$Event(1039422202, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1039422205, Restart, function() {
    DisableCharacter(1039420801);
    DisableCharacterCollision(1039420801);
    ForceCharacterDeath(1039420801, false);
});

$Event(1039422210, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterCollisionState(X0_4, Disabled);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = areaChr && chrSp;
    WaitFor(areaChrSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, X8_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    WaitRandomTimeSeconds(0, 1);
    ForceAnimationPlayback(X0_4, 30004, false, false, false, Equal, 1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ChangeCharacterCollisionState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 20004, false, false, false, Equal, 1);
    EndEvent();
});

$Event(1039422340, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterCollisionState(X0_4, Disabled);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = areaChr && chrSp;
    WaitFor(areaChrSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, X8_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    ForceAnimationPlayback(X0_4, 30004, false, false, false, Equal, 1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ChangeCharacterCollisionState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 20004, false, false, false, Equal, 1);
    EndEvent();
});

$Event(1039422600, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false, Equal, 1);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1039422610, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlag(TargetEventFlagType.EventFlag, X12_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X16_4, OFF);
    WaitFor(HasMultiplayerState(MultiplayerState.Singleplayer) && ActionButtonInArea(9140, X0_4));
    //DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X12_4, X16_4, X16_4);
    //if (!EventFlag(X12_4)) {
        //    WaitFixedTimeSeconds(1);
        //RestartEvent();
    //}
L1:
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});
