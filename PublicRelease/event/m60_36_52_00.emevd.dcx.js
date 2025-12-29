// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1036520800, 1036520001, 1036520951, 1036521951, 1084227584); //guardian grace
    InitializeCommonEvent(0, 90005600, 76356, 1036521950, 0, 0);
    InitializeCommonEvent(0, 90005271, 1036520400, 0, -1);
    InitializeEvent(0, 1036522200, 1036520200);
    InitializeEvent(1, 1036522200, 1036520201);
    InitializeEvent(2, 1036522200, 1036520206);
    InitializeEvent(3, 1036522200, 1036520207);
    InitializeEvent(0, 1036522205, 1036520210, 1036522210, 0, 3021);
    InitializeEvent(1, 1036522205, 1036520209, 1036522210, 1050253722, 3021);
    InitializeCommonEvent(0, 90005261, 1036520220, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(1, 90005261, 1036520221, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(2, 90005261, 1036520222, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(1, 90005261, 1036520205, 1036522300, 1086324736, 1053609165, -1);
    InitializeCommonEvent(2, 90005261, 1036520206, 1036522300, 1086324736, 0, -1);
    InitializeCommonEvent(2, 90005261, 1036520207, 1036522300, 1086324736, 1045220557, -1);
    InitializeEvent(0, 1036522215, 1036520300, 1036522300, 1092616192, 1056964608, 20003);
    InitializeCommonEvent(0, 90005261, 1036520250, 1036522250, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520250, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036520251, 1036522251, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520251, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036520252, 1036522252, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520252, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005560, 1036520205, 1036521200, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1036520750, 1036520725, 1036520800)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 1036520800, 1036520801, 904810655, 920900);
    InitializeCommonEvent(0, 90005875, 1036520800, 30360, 920900);
    InitializeCommonEvent(0, 90005890, 1036520800, 1036520801, 1036520801);
    InitializeCommonEvent(0, 90005891, 1036520800, 1036520801, 1036520802);
    InitializeCommonEvent(1, 90005891, 1036520800, 1036520801, 1036520803);
    //InitializeCommonEvent(0, 90005870, 1036520800, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 1036520800, 0, 1036520800, 0, 30360, 0);
    //InitializeCommonEvent(0, 90005251, 1036520800, 1101004800, 0, 0);
    InitializeEvent(0, 1036522225, 0);
    InitializeEvent(0, 98005303, 1036520801, 1036520804);
    InitializeEvent(0, 98005304, 1036520801, 1036520804);
});

$Event(1036522200, Restart, function(X0_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3015, false, false, true, Equal, 1);
    EndEvent();
});

$Event(1036522205, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
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
    areaChrSp = InArea(10000, X4_4) && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, true, false, Equal, 1);
        }
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X0_4, X12_4, true, true, false, Equal, 1);
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X0_4, X12_4, true, true, false, Equal, 1);
    }
L1:
    SetCharacterAIState(X0_4, Enabled);
});

$Event(1036522210, Restart, function(X0_4) {
    SetSpEffect(X0_4, 8092);
});

$Event(1036522215, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
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
    areaChrSp = area && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
        ForceAnimationPlayback(X0_4, X16_4, true, false, false, Equal, 1);
    }
L1:
    WaitFixedTimeSeconds(5);
    SetCharacterAIState(X0_4, Enabled);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.NoUpdate);
});

$Event(1036522225, Restart, function() {
    DisableCharacter(1036520801);
    DisableCharacterCollision(1036520801);
    ForceCharacterDeath(1036520801, false);
});
