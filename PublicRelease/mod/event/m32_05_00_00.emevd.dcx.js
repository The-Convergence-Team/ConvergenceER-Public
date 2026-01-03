// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32050000, 32051950, 0, 0, 0, 5);
    InitializeEvent(0, 32052800, 0);
    InitializeEvent(0, 32052810, 0);
    InitializeEvent(0, 32052811, 0);
    InitializeEvent(0, 32052849, 0);
    InitializeCommonEvent(0, 90005501, 32050510, 32050511, 0, 32051510, 32051511, 32051512, 32050512);
    InitializeEvent(0, 32052510, 0);
    InitializeCommonEvent(0, 90005646, 32050800, 32052840, 32052841, 32051840, 32052840, 1312);
    InitializeCommonEvent(0, 900005610, 32051680, 100, 800, 0);
    InitializeEvent(0, 32052200, 32050208, 30002, 20002, 0, 0, 0, 0, 0, 32051605, 32051606, 32051607, 0);
    InitializeEvent(1, 32052200, 32050209, 30000, 20000, 0, 0, 0, 0, 0, 32051608, 0, 0, 0);
    InitializeEvent(2, 32052200, 32050210, 30001, 20001, 0, 0, 0, 0, 0, 32051609, 0, 0, 0);
    InitializeEvent(0, 32052250, 32050211, 30005, 20005, 0, 0, 0, 0, 0, 32051211, 0, 0, 0, 32050211);
    InitializeEvent(0, 32052270, 32050211, 30007, 20007, 32050211, 1084227584, 0, 0, 1, 0, 0);
    InitializeEvent(0, 32052400, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32050519, 0);
    InitializeEvent(0, 32052820, 0);
    InitializeCommonEvent(0, 90005250, 32050200, 32052200, 0, -1);
    InitializeCommonEvent(0, 90005251, 32050201, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050205, 32052205, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050212, 32052212, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050250, 32052200, 0, -1);
    InitializeCommonEvent(0, 90005261, 32050255, 32052206, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 32050257, 32052206, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050256, 32052205, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050258, 32052212, 1065353216, 3033);
    InitializeCommonEvent(0, 90005250, 32050259, 32052212, 1065353216, 3033);
    InitializeCommonEvent(0, 90005250, 32050300, 32052300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050301, 32052300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050302, 32052300, 0, 3011);
    InitializeCommonEvent(0, 90005250, 32050305, 32052305, 0, -1);
    InitializeCommonEvent(0, 90005260, 32050306, 32052306, 1092616192, 0, 3011);
    InitializeCommonEvent(0, 90005250, 32050307, 32052306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32050308, 32052306, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050310, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050311, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050312, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050313, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050314, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050315, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050316, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050317, 0, -1);
    InitializeCommonEvent(0, 90005271, 32050318, 0, -1);
});

$Event(32052510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32050510, 32050511, 0, 32051510, 32051511, 32053511, 32051512, 32053512, 32052511, 32052512, 32050512, 32050513, 0);
});

$Event(32050519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32050510, ON);
    SetThisEventSlot(ON);
});

$Event(32052200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(ThisEventSlot());
    if (X16_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X32_4, Equal, 1)
        || AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X20_4 == 0 && X24_4 == 0 && X28_4 == 0)) {
        if (X20_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(X12_4);
        if (X16_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X16_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32052250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(EventFlag(X48_4));
    if (X16_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X32_4, Equal, 1)
        || AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X20_4 == 0 && X24_4 == 0 && X28_4 == 0)) {
        if (X20_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetEventFlagID(X48_4, ON);
        WaitFixedTimeSeconds(X12_4);
        if (X16_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X16_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32052270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(ThisEventSlot());
    EndIf(!EventFlag(X12_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
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
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32052400, Restart, function() {
    if (!CharacterHasSpEffect(31180400, 16747)) {
        WaitFor(
            ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 32052401));
        SetSpEffect(31180400, 16747);
    }
L0:
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(32052800, Restart, function() {
    EndIf(EventFlag(32050800));
    WaitFor(CharacterHPValue(32050800) <= 0 && CharacterHPValue(32050801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32050800, SoundType.SFX, 888880000);
    WaitFor(CharacterHPValue(32050800) == 0 && CharacterHPValue(32050801) == 0);
    HandleBossDefeatAndDisplayBanner(32050800, TextBannerType.EnemyFelled);
    SetEventFlagID(32050800, ON);
    SetEventFlagID(9265, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61265, ON);
    }
});

$Event(32052810, Restart, function() {
    if (EventFlag(32050800)) {
        DisableCharacter(32050800);
        DisableCharacter(32050801);
        DisableCharacterCollision(32050800);
        DisableCharacterCollision(32050801);
        ForceCharacterDeath(32050800, false);
        ForceCharacterDeath(32050801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32050800);
    DisableCharacterAI(32050801);
    EnableCharacterInvincibility(32050800);
    EnableCharacterInvincibility(32050801);
    if (!EventFlag(32050801)) {
        ForceAnimationPlayback(32050800, 30000, true, false, false);
        ForceAnimationPlayback(32050801, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32052801))
                || HasDamageType(32050800, 10000, DamageType.Unspecified)
                || HasDamageType(32050801, 10000, DamageType.Unspecified));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(32050801, ON);
        }
        ForceAnimationPlayback(32050800, 20000, false, false, false);
        ForceAnimationPlayback(32050801, 20000, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32050800, 30000, true, false, false);
        ForceAnimationPlayback(32050801, 30000, true, false, false);
        WaitFor(EventFlag(32052805) && InArea(10000, 32052800));
        ForceAnimationPlayback(32050800, 20000, false, false, false);
        ForceAnimationPlayback(32050801, 20000, false, false, false);
    }
L2:
    EnableCharacterAI(32050800);
    EnableCharacterAI(32050801);
    DisableCharacterInvincibility(32050800);
    DisableCharacterInvincibility(32050801);
    SetNetworkUpdateRate(32050800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(32050801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32050800, 0, 903350321);
    DisplayBossHealthBar(Enabled, 32050801, 1, 903350322);
});

$Event(32052811, Restart, function() {
    EndIf(EventFlag(32050800));
    WaitFor(
        (HPRatio(32050800) <= 0.6 && HPRatio(32050800) <= 0.6)
            || CharacterDead(32050800)
            || CharacterDead(32050801));
    SetEventFlagID(32052802, ON);
});

$Event(32052820, Restart, function() {
    EndIf(EventFlag(32050800));
    EndIf(EventFlag(32050801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32058590));
    SetEventFlagID(32058590, OFF);
});

$Event(32052849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32050800, 32051800, 32052800, 32052805, 32055800, 10000, 32050801, 32052801);
    InitializeCommonEvent(0, 9005801, 32050800, 32051800, 32052800, 32052805, 32052806, 10000);
    InitializeCommonEvent(0, 9005811, 32050800, 32051800, 7, 32050801);
    InitializeCommonEvent(0, 9005822, 32050800, 931000, 32052805, 32052806, 0, 32052802, 0, 0);
});
