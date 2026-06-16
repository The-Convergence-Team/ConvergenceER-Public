// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005646, 30030800, 30032840, 30032841, 30031840, 30032840, 798);
    RegisterBonfire(300300, 30031950, 0, 0, 0, 5);
    InitializeEvent(0, 30032800, 0);
    InitializeEvent(0, 30032810, 0);
    InitializeEvent(0, 30032849, 0);
    InitializeEvent(0, 30032821, 0);
    InitializeEvent(0, 30032838, 0);
    InitializeEvent(0, 30032890, 0);
    InitializeEvent(0, 30032845, 0);
    InitializeEvent(0, 30032870, 30030801, 30032882);
    InitializeEvent(0, 30032871, 30030802, 30032883);
    InitializeEvent(1, 30032871, 30030803, 30032884);
    InitializeEvent(2, 30032871, 30030804, 30032884);
    InitializeEvent(3, 30032871, 30030805, 30032885);
    InitializeEvent(4, 30032871, 30030806, 30032885);
    InitializeEvent(5, 30032871, 30030807, 30032886);
    InitializeEvent(6, 30032871, 30030808, 30032886);
    InitializeEvent(7, 30032871, 30030809, 30032887);
    InitializeEvent(8, 30032871, 30030810, 30032887);
    InitializeCommonEvent(0, 90005650, 30030540, 30031540, 30031541, 30033541, 27115);
    InitializeCommonEvent(0, 90005651, 30030540, 30031540);
    InitializeEvent(0, 30032400, 30030600, 30031600, 30032600, 0, 30032601, 30032602, 30032603);
    InitializeCommonEvent(0, 90005525, 30030570, 30031570);
    InitializeCommonEvent(0, 90005525, 30030571, 30031571);
    InitializeCommonEvent(0, 90005525, 30030572, 30031572);
    InitializeCommonEvent(0, 90005525, 30030573, 30031573);
    InitializeCommonEvent(0, 90005525, 30030574, 30031574);
    InitializeCommonEvent(0, 90005525, 30030575, 30031575);
    InitializeCommonEvent(0, 90005525, 30030576, 30031576);
    InitializeCommonEvent(0, 90005525, 30030577, 30031577);
    InitializeEvent(0, 30032579, 0);
    InitializeCommonEvent(0, 90005410, 30032100, 30031100, 30035100);
    InitializeCommonEvent(0, 90005411, 30031100, 30030100, 10);
    InitializeCommonEvent(0, 91005600, 30030800, 30031695, 3);
    InitializeCommonEvent(0, 90005920, 30030520, 30031520, 30033520);
});

$Event(50, Default, function() {
    InitializeEvent(0, 30030050, 0);
    InitializeCommonEvent(0, 90005250, 30030200, 30032200, 0, 3005);
    InitializeCommonEvent(0, 90005261, 30030201, 30032201, 1065353216, 0, 3012);
    InitializeCommonEvent(0, 90005211, 30030202, 30010, 20010, 30032202, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30030203, 30001, 20001, 30032203, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30030204, 30010, 20010, 1097859072, 1073741824, 0, 0, 0, 0);
    InitializeEvent(0, 30032205, 30030205, 30010, 20010, 30032204, 1065353216, 0, 0, 0, 0, 0);
    InitializeEvent(1, 30032205, 30030206, 30010, 20010, 30032204, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30030207, 30032207, 0, 0);
    InitializeCommonEvent(0, 90005250, 30030208, 30032208, 0, 0);
    InitializeEvent(0, 30032207, 30030207, 30032307);
    InitializeEvent(1, 30032207, 30030208, 30032308);
    InitializeEvent(2, 30032207, 30030209, 30032307);
    InitializeCommonEvent(0, 90005200, 30030209, 30002, 20002, 30032207, 1077936128, 0, 0, 0, 0);
});

$Event(30030050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30030500, ON);
});

$Event(30032579, Restart, function() {
    DisableAsset(30031575);
});

$Event(30032400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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

$Event(30032205, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        area |= InArea(10000, X12_4);
    }
    area |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1);
    areaChrSp &= area
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
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
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X0_4, 3016, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(30032207, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4) || ThisEventSlot());
    SetSpEffect(X0_4, 17155);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(InArea(10000, X4_4) || HasDamageType(X0_4, 0, DamageType.Unspecified));
    ClearSpEffect(X0_4, 17155);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(30032800, Restart, function() {
    EndIf(EventFlag(30030800));
    WaitFor(CharacterHPValue(30030800) <= 0);
    ForceCharacterDeath(30030801, false);
    ForceCharacterDeath(30030802, false);
    ForceCharacterDeath(30030803, false);
    ForceCharacterDeath(30030804, false);
    ForceCharacterDeath(30030805, false);
    ForceCharacterDeath(30030806, false);
    ForceCharacterDeath(30030807, false);
    ForceCharacterDeath(30030808, false);
    ForceCharacterDeath(30030809, false);
    ForceCharacterDeath(30030810, false);
    DisableGenerator(30033801);
    DisableGenerator(30033802);
    DisableGenerator(30033803);
    DisableGenerator(30033804);
    DisableGenerator(30033805);
    DisableGenerator(30033806);
    WaitFixedTimeSeconds(4);
    PlaySE(30030800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30030800));
    HandleBossDefeatAndDisplayBanner(30030800, TextBannerType.EnemyFelled);
    SetEventFlagID(30030800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61206, ON);
    }
    SetEventFlagID(9206, ON);
});

$Event(30032810, Restart, function() {
    if (EventFlag(30030800)) {
        DisableCharacter(30030800);
        DisableCharacterCollision(30030800);
        ForceCharacterDeath(30030800, false);
        ForceCharacterDeath(30030801, false);
        DisableGenerator(30033801);
        DisableGenerator(30033802);
        DisableGenerator(30033803);
        DisableGenerator(30033804);
        DisableGenerator(30033805);
        DisableGenerator(30033806);
        EndEvent();
    }
L0:
    DisableCharacterAI(30030800);
    EnableCharacterInvincibility(30030800);
    if (PlayerIsInOwnWorld()) {
        ForceAnimationPlayback(30030800, 30013, false, false, false);
    }
    WaitFor(EventFlag(30032805) && InArea(10000, 30032800));
    EnableCharacterAI(30030800);
    DisableCharacterInvincibility(30030800);
    SetNetworkUpdateRate(30030800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30030800, 0, 904140300);
    if (PlayerIsInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(30032822, 30032839, OFF);
        SetNetworkconnectedEventFlagID(30032822, ON);
        SetNetworkconnectedEventFlagID(30032839, ON);
        WaitFixedTimeSeconds(1.2);
        SetEventFlagID(30032812, ON);
        InvokeEnemyGenerator(30033801);
        SetNetworkconnectedEventFlagID(30032882, ON);
        ForceAnimationPlayback(30030800, 20013, false, false, false);
    }
L1:
    NoOp();
});

$Event(30032849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30030800, 30031800, 30032800, 30032805, 30035800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30030800, 30031800, 30032800, 30032805, 30032806, 10000);
    InitializeCommonEvent(0, 9005811, 30030800, 30031800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30030800, 920200, 30032805, 30032806, 0, 30032860, 0, 0);
});

$Event(30032890, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(30030800));
    EndIf(!PlayerIsInOwnWorld());
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 30032805);
    if (!EventFlag(30032813)) {
        WaitFor(CharacterDead(30030801));
        WaitFixedTimeSeconds(1);
        SetSpEffect(30030800, 15044);
        GotoIf(S0, HPRatio(30030800) < 0.9);
        BatchSetNetworkconnectedEventFlags(30032822, 30032839, OFF);
        SetNetworkconnectedEventFlagID(30032822, ON);
        SetNetworkconnectedEventFlagID(30032839, ON);
        Goto(L0);
S0:
        SetNetworkconnectedEventFlagID(30032822, OFF);
        SetNetworkconnectedEventFlagID(30032813, ON);
    } else {
L1:
        if (!EventFlag(30032814)) {
            WaitFor(CharacterDead(30030802));
            WaitFixedTimeSeconds(1);
            SetSpEffect(30030800, 15044);
            SetNetworkconnectedEventFlagID(30032814, ON);
        } else {
L2:
            if (!EventFlag(30032815)) {
                WaitFor(CharacterDead(30030803) && CharacterDead(30030804));
                WaitFixedTimeSeconds(1);
                SetSpEffect(30030800, 15044);
                SetNetworkconnectedEventFlagID(30032815, ON);
            } else {
L10:
                if (!EventFlag(30032816)) {
                    WaitFor(CharacterDead(30030805) && CharacterDead(30030806));
                    WaitFixedTimeSeconds(1);
                    SetSpEffect(30030800, 15044);
                    SetNetworkconnectedEventFlagID(30032816, ON);
                } else {
L11:
                    if (!EventFlag(30032817)) {
                        WaitFor(CharacterDead(30030807) && CharacterDead(30030808));
                        WaitFixedTimeSeconds(1);
                        SetSpEffect(30030800, 15044);
                        SetNetworkconnectedEventFlagID(30032817, ON);
                    } else {
L12:
                        WaitFor(CharacterDead(30030809) && CharacterDead(30030810));
                        WaitFixedTimeSeconds(1);
                        SetSpEffect(30030800, 15044);
                    }
                }
            }
        }
    }
L0:
    WaitFor(CharacterHasSpEffect(30030800, 15007));
    if (HPRatio(30030800) >= 0.9) {
        InvokeEnemyGenerator(30033801);
        WaitFor(!CharacterDead(30030801));
        SetNetworkconnectedEventFlagID(30032882, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L3:
    if (EventFlag(30032817)) {
        InvokeEnemyGenerator(30033806);
        WaitFor(!CharacterDead(30030809) && !CharacterDead(30030810));
        SetNetworkconnectedEventFlagID(30032887, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L9:
    if (EventFlag(30032816)) {
        InvokeEnemyGenerator(30033805);
        WaitFor(!CharacterDead(30030807) && !CharacterDead(30030808));
        SetNetworkconnectedEventFlagID(30032886, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L8:
    if (EventFlag(30032815)) {
        InvokeEnemyGenerator(30033804);
        WaitFor(!CharacterDead(30030805) && !CharacterDead(30030806));
        SetNetworkconnectedEventFlagID(30032885, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L4:
    if (EventFlag(30032814)) {
        InvokeEnemyGenerator(30033803);
        SetEventFlagID(30032860, ON);
        WaitFor(!CharacterDead(30030803) && !CharacterDead(30030804));
        SetNetworkconnectedEventFlagID(30032884, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L5:
    if (EventFlag(30032813)) {
        InvokeEnemyGenerator(30033802);
        WaitFor(!CharacterDead(30030802));
        SetNetworkconnectedEventFlagID(30032883, ON);
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L6:
    if (EventFlag(30032812)) {
        InvokeEnemyGenerator(30033801);
        SetNetworkconnectedEventFlagID(30032882, ON);
        WaitFor(!CharacterDead(30030801));
        SetSpEffect(30030800, 15045);
        RestartEvent();
    }
L7:
    NoOp();
});

$Event(30032845, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(30030800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(HPRatio(30030800) < 0.9);
    SetNetworkconnectedEventFlagID(30032822, OFF);
    SetNetworkconnectedEventFlagID(30032834, ON);
});

$Event(30032821, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(30030800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(30030800, 15046) && EventFlag(30032839));
    GotoIf(L0, HPRatio(30030800) >= 0.9);
    GotoIf(L0, EventFlag(30032822));
    GotoIf(L1, EventFlag(30032823));
    GotoIf(L1, EventFlag(30032824));
    GotoIf(L1, EventFlag(30032825));
    GotoIf(L2, EventFlag(30032826));
    GotoIf(L2, EventFlag(30032827));
    GotoIf(L2, EventFlag(30032828));
    GotoIf(L3, EventFlag(30032829));
    GotoIf(L3, EventFlag(30032830));
    GotoIf(L3, EventFlag(30032831));
    GotoIf(L4, EventFlag(30032832));
    GotoIf(L4, EventFlag(30032833));
    GotoIf(L4, EventFlag(30032834));
L0:
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L1:
    BatchSetNetworkconnectedEventFlags(30032823, 30032834, OFF);
    RandomlySetEventFlagInRange(30032829, 30032834, ON);
    SetNetworkconnectedEventFlagID(30032839, OFF);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L2:
    BatchSetNetworkconnectedEventFlags(30032823, 30032834, OFF);
    RandomlySetEventFlagInRange(30032829, 30032834, ON);
    SetNetworkconnectedEventFlagID(30032839, OFF);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L3:
    BatchSetNetworkconnectedEventFlags(30032823, 30032834, OFF);
    RandomlySetEventFlagInRange(30032823, 30032828, ON);
    SetNetworkconnectedEventFlagID(30032839, OFF);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L4:
    BatchSetNetworkconnectedEventFlags(30032823, 30032834, OFF);
    RandomlySetEventFlagInRange(30032823, 30032828, ON);
    SetNetworkconnectedEventFlagID(30032839, OFF);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
});

$Event(30032838, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(30030800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        AnyBatchEventFlags(30032823, 30032834)
            && !EventFlag(30032839)
            && CharacterHasSpEffect(30030800, 15046));
    GotoIf(L0, EventFlag(30032822));
    GotoIf(L1, EventFlag(30032823));
    GotoIf(L2, EventFlag(30032824));
    GotoIf(L3, EventFlag(30032825));
    GotoIf(L4, EventFlag(30032826));
    GotoIf(L5, EventFlag(30032827));
    GotoIf(L6, EventFlag(30032828));
    GotoIf(L7, EventFlag(30032829));
    GotoIf(L8, EventFlag(30032830));
    GotoIf(L9, EventFlag(30032831));
    GotoIf(L10, EventFlag(30032832));
    GotoIf(L11, EventFlag(30032833));
    GotoIf(L12, EventFlag(30032834));
L0:
    SetNetworkconnectedEventFlagID(30032839, ON);
    SetNetworkconnectedEventFlagID(30032822, OFF);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L1:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032823, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L2:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032824, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L3:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032825, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L4:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032826, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L5:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032827, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L6:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032828, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L7:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032829, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L8:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032830, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L9:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032831, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L10:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032832, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L11:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032833, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
L12:
    WarpCharacterAndSetFloor(30030800, TargetEntityType.Area, 30032834, -1, 30034200);
    SetNetworkconnectedEventFlagID(30032839, ON);
    WaitFor(!CharacterHasSpEffect(30030800, 15046));
    RestartEvent();
});

$Event(30032870, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(30030800));
    WaitFor(EventFlag(X4_4) && !CharacterDead(X0_4));
    WaitFixedTimeSeconds(1);
    ActivateMultiplayerdependantBuffs(X0_4);
    WaitFor(CharacterDead(X0_4));
    RestartEvent();
});

$Event(30032871, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(30030800));
    WaitFor(
        (EventFlag(X4_4) && !CharacterDead(X0_4))
            && !HasMultiplayerState(MultiplayerState.Singleplayer));
    ActivateMultiplayerdependantBuffs(X0_4);
    WaitFixedTimeSeconds(1);
    if (!(CharacterHasSpEffect(X0_4, 7820)
        || CharacterHasSpEffect(X0_4, 7821)
        || CharacterHasSpEffect(X0_4, 7822))) {
        RestartEvent();
    }
});
