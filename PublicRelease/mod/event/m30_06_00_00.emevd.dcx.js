// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005646, 30060800, 30062840, 30062841, 30061840, 30062840, 1566);
    RegisterBonfire(300600, 30061950, 0, 0, 0, 5);
    InitializeEvent(0, 30062800, 0);
    InitializeEvent(0, 30062810, 0);
    InitializeEvent(0, 30062849, 0);
    InitializeEvent(0, 30062811, 0);
    InitializeCommonEvent(0, 90005501, 30060510, 30060511, 0, 30061510, 30061511, 30061512, 30060512);
    InitializeEvent(0, 30062510, 0);
    InitializeCommonEvent(0, 90005650, 30060540, 30061540, 30061541, 30063541, 27115);
    InitializeCommonEvent(0, 90005651, 30060540, 30061540);
    InitializeCommonEvent(0, 30062400, 30060600, 30061600, 30062600, 0, 30062601, 30062602, 30062603);
    InitializeCommonEvent(1, 30062400, 30060605, 30061605, 30062605, 0, 30062606, 30062607, 30062608);
    InitializeCommonEvent(2, 30062400, 30060610, 30061610, 30062610, 0, 30062611, 30062612, 30062613);
    InitializeCommonEvent(3, 30062400, 30060615, 30061615, 30062615, 0, 30062616, 30062617, 30062618);
    InitializeEvent(0, 30062580, 0);
    InitializeCommonEvent(0, 90005410, 30062100, 30061100, 30065100);
    InitializeCommonEvent(0, 90005411, 30061100, 30060100, 10);
    InitializeCommonEvent(0, 90005620, 30060570, 30061570, 30061571, 0, 30062570, 30062571, 30062572);
    InitializeCommonEvent(0, 90005621, 30060570, 30061573);
    InitializeEvent(0, 30062860, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 30060519, 0);
    InitializeCommonEvent(0, 90005211, 30060200, 30009, 20009, 30062200, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 30060201, 1101004800, 0, 0);
    InitializeCommonEvent(0, 90005261, 30060202, 30062202, 1084227584, 1065353216, 3002);
    InitializeCommonEvent(0, 90005211, 30060203, 30000, 20000, 30062203, 1073741824, 1076258406, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30060204, 30062204, 0, 0);
    InitializeEvent(0, 30062206, 0);
    InitializeCommonEvent(0, 90005200, 30060205, 30000, 20000, 30062205, 0, 0, 0, 0, 0);
    InitializeEvent(0, 30062211, 30060206, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(1, 30062211, 30060207, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060208, 30002, 20002, 30062208, 1084227584, 1077097267, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060209, 30010, 20010, 30062208, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060210, 30010, 20010, 30062210, 1073741824, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060211, 30010, 20010, 30062210, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060212, 30003, 20003, 30062212, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30060213, 30000, 20000, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30060214, 30004, 20004, 30062214, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30060215, 30002, 20002, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30060216, 30062216, 1073741824, 1053609165, 3005);
    InitializeCommonEvent(0, 90005261, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30060300, 30001, 20001, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30060301, 30062301, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005200, 30060302, 30000, 20000, 30062302, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 30062300, 30060303, 30000, 20000, 30062303, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30060304, 30062304, 1084227584, 0, -1);
    InitializeEvent(0, 30062304, 0);
    InitializeCommonEvent(0, 90005200, 30060305, 30000, 20000, 30062305, 0, 0, 0, 0, 0);
});

$Event(30062206, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, 30062294) || EntityInRadiusOfEntity(10000, 30060204, 3, 1);
    sp = CharacterHasSpEffect(30060204, 481)
        && !CharacterHasSpEffect(30060204, 90100)
        && !CharacterHasSpEffect(30060204, 90110)
        && !CharacterHasSpEffect(30060204, 90160);
    sp2 = CharacterHasSpEffect(30060204, 482)
        && !CharacterHasSpEffect(30060204, 90100)
        && !CharacterHasSpEffect(30060204, 90120)
        && !CharacterHasSpEffect(30060204, 90160)
        && !CharacterHasSpEffect(30060204, 90162);
    sp3 = CharacterHasSpEffect(30060204, 483)
        && !CharacterHasSpEffect(30060204, 90100)
        && !CharacterHasSpEffect(30060204, 90140)
        && !CharacterHasSpEffect(30060204, 90160)
        && !CharacterHasSpEffect(30060204, 90161);
    sp4 = CharacterHasSpEffect(30060204, 484)
        && !CharacterHasSpEffect(30060204, 90100)
        && !CharacterHasSpEffect(30060204, 90130)
        && !CharacterHasSpEffect(30060204, 90161)
        && !CharacterHasSpEffect(30060204, 90162);
    sp5 = CharacterHasSpEffect(30060204, 487)
        && !CharacterHasSpEffect(30060204, 90100)
        && !CharacterHasSpEffect(30060204, 90150)
        && !CharacterHasSpEffect(30060204, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(30060204, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(30060204, 436)
            || CharacterHasStateInfo(30060204, 2)
            || CharacterHasStateInfo(30060204, 5)
            || CharacterHasStateInfo(30060204, 6)
            || CharacterHasStateInfo(30060204, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    ForceAnimationPlayback(30060204, 3004, true, false, false);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(30062211, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrAreaSpDmg |= CharacterAIState(30060301, AIStateType.Combat);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
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
    areaChrSp &= chrSp;
    chrAreaSpDmg |= areaChrSp || HasDamageType(X0_4, 0, DamageType.Unspecified) || sp || sp2 || sp3 || sp4 || sp5;
    WaitFor(chrAreaSpDmg);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(30062304, Restart, function() {
    chr = CharacterDead(30060304);
    DisableCharacterHPBarDisplay(30060304);
    SetSpEffect(30060304, 4403);
    WaitFixedTimeSeconds(1);
    EnableCharacterHPBarDisplay(30060304);
});

$Event(30062400, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X8_4));
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    WaitFixedTimeSeconds(0.5);
    if (Signed(X12_4) != 0) {
        ShootBullet(X0_4, X16_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, X12_4, 0, 0, 0);
    } else {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X16_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032000, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X16_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032010, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X16_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032020, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X16_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032030, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X16_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032040, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X16_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032050, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X16_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032060, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X16_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032070, 0, 0, 0);
        }
    }
L0:
    WaitFixedTimeSeconds(0.6);
    if (Signed(X12_4) != 0) {
        ShootBullet(X0_4, X16_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, X12_4, 0, 0, 0);
    } else {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X16_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032000, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X16_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032010, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X16_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032020, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X16_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032030, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X16_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032040, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X16_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032050, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X16_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032060, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X16_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032070, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(0.6);
    if (Signed(X12_4) != 0) {
        ShootBullet(X0_4, X16_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, X12_4, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, X12_4, 0, 0, 0);
    } else {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X16_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032000, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032000, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X16_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032010, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032010, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X16_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032020, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032020, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X16_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032030, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032030, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X16_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032040, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032040, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X16_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032050, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032050, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X16_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032060, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032060, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X16_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X20_4, -1, 801032070, 0, 0, 0);
            ShootBullet(X0_4, X24_4, -1, 801032070, 0, 0, 0);
        }
    }
L2:
    WaitFixedTimeSeconds(3);
    WaitFor(!AllPlayersInArea(X8_4));
    ForceAnimationPlayback(X4_4, 3, false, true, false);
    RestartEvent();
});

$Event(30062300, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
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
    areaChrSp &= chrSp;
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
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        EnableCharacterAI(X0_4);
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(30062510, Default, function() {
    InitializeCommonEvent(0, 90005500, 30060510, 30060511, 0, 30061510, 30061511, 30063511, 30061512, 30063512, 30062511, 30062512, 30060512, 30060513, 0);
});

$Event(30060519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30060510, ON);
});

$Event(30062520, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    DisableObjAct(X4_4, -1);
    if (EventFlag(X8_4)) {
        EnableObjAct(X4_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X8_4) && !EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    EnableObjAct(X4_4, -1);
});

$Event(30062580, Default, function() {
    RegisterLadder(30060580, 30060581, 30061580);
});

$Event(30062800, Restart, function() {
    EndIf(EventFlag(30060800));
    WaitFor(CharacterHPValue(30060800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30060800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30060800));
    HandleBossDefeatAndDisplayBanner(30060800, TextBannerType.EnemyFelled);
    SetEventFlagID(30060800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61207, ON);
    }
    SetEventFlagID(9207, ON);
});

$Event(30062810, Restart, function() {
    if (EventFlag(30060800)) {
        DisableCharacter(30060800);
        DisableCharacterCollision(30060800);
        ForceCharacterDeath(30060800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30060800);
    EnableCharacterInvincibility(30060800);
    WaitFor(EventFlag(30062805) && InArea(10000, 30062800));
    EnableCharacterAI(30060800);
    DisableCharacterInvincibility(30060800);
    SetNetworkUpdateRate(30060800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30060800, 0, 904260302);
});

$Event(30062811, Restart, function() {
    EndIf(EventFlag(30060800));
    WaitFor(HPRatio(30060800) <= 0.6);
    SetEventFlagID(30062802, ON);
});

$Event(30062849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30060800, 30061800, 30062800, 30062805, 30065800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30060800, 30061800, 30062800, 30062805, 30062806, 10000);
    InitializeCommonEvent(0, 9005811, 30060800, 30061800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30060800, 930000, 30062805, 30062806, 0, 30062802, 0, 0);
});

$Event(30062860, Restart, function() {
    DisableCharacterAI(30060805);
    DisableCharacterAI(30060806);
    WaitFor(InOutsideArea(InsideOutsideState.Inside, 10000, 30062302, 1));
    EnableCharacterAI(30060805);
    EnableCharacterAI(30060806);
    RestartEvent();
});
