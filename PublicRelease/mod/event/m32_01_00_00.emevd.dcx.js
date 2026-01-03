// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32010000, 32011950, 0, 0, 0, 5);
    InitializeEvent(0, 32012800, 0);
    InitializeEvent(0, 32012810, 0);
    InitializeEvent(0, 32012811, 0);
    InitializeEvent(0, 32012849, 0);
    InitializeEvent(0, 32012510, 0);
    InitializeCommonEvent(0, 90005501, 32010510, 32010511, 0, 32011510, 32011511, 32011512, 32010512);
    InitializeCommonEvent(0, 90005501, 32010515, 32010516, 0, 32011515, 32011516, 32011517, 32010517);
    InitializeCommonEvent(0, 90005501, 32010520, 32010521, 0, 32011520, 32011521, 32011522, 32010522);
    InitializeCommonEvent(0, 90005646, 32010800, 32012840, 32012841, 32011840, 32012840, 288);
    InitializeEvent(0, 32012250, 32010201, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32011201, 0, 0, 0, 32010201);
    InitializeEvent(0, 32012270, 32010201, 30005, 20005, 32010201, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(1, 32012250, 32010202, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32011202, 0, 0, 0, 32010202);
    InitializeEvent(1, 32012270, 32010202, 30005, 20005, 32010202, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(2, 32012250, 32010203, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32011203, 0, 0, 0, 32010203);
    InitializeEvent(2, 32012270, 32010203, 30006, 20006, 32010203, 1077936128, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005211, 32010205, 30006, 20006, 32012205, 1084227584, 0, 0, 1, 0, 0);
    InitializeEvent(3, 32012250, 32010211, 30002, 20002, 16574, 0, 0, 0, 0, 0, 32011211, 0, 0, 0, 32010211);
    InitializeEvent(3, 32012270, 32010211, 30005, 20005, 32010211, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(4, 32012250, 32010215, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32011215, 0, 0, 0, 32010215);
    InitializeEvent(4, 32012270, 32010215, 30006, 20006, 32010215, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(5, 32012250, 32010218, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32011218, 0, 0, 0, 32010218);
    InitializeEvent(5, 32012270, 32010218, 30005, 20005, 32010218, 1077936128, 0, 0, 1, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32010519, 0);
    InitializeEvent(0, 32012820, 0);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(32010519));
    SetEventFlagID(32010510, ON);
    SetEventFlagID(32010515, ON);
    SetEventFlagID(32010520, ON);
    InitializeCommonEvent(0, 90005211, 32010205, 30006, 20006, 32012205, 1084227584, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005250, 32010212, 32012300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010212, 32012301, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010217, 32012220, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010219, 32012219, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010220, 32012220, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010300, 32012300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010300, 32012301, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010301, 32012301, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010350, 32012350, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010351, 32012350, 0, -1);
    InitializeCommonEvent(0, 90005250, 32010352, 32012350, 0, -1);
});

$Event(32012510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32010510, 32010511, 0, 32011510, 32011511, 32013511, 32011512, 32013512, 32012511, 32012512, 32010512, 32010513, 0);
    InitializeCommonEvent(0, 90005500, 32010515, 32010516, 0, 32011515, 32011516, 32013516, 32011517, 32013517, 32012516, 32012517, 32010517, 32010518, 0);
    InitializeCommonEvent(0, 90005500, 32010520, 32010521, 0, 32011520, 32011521, 32013521, 32011522, 32013522, 32012521, 32012522, 32010522, 32010523, 0);
});

$Event(32010519, Default, function() {
    EndIf(ThisEventSlot());
    SetThisEventSlot(ON);
});

$Event(32012200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(ThisEventSlot());
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
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
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
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

$Event(32012250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(EventFlag(X52_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
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
        SetEventFlagID(X52_4, ON);
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
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

$Event(32012270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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

$Event(32012650, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 109, X4_4, 1);
    SetEventFlagID(700690, ON);
});

$Event(32012651, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(32, 1, 0, 0)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9116));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    ShowTutorialPopup(X12_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9116, X4_4, 1);
});

$Event(32012800, Restart, function() {
    EndIf(EventFlag(32010800));
    WaitFor(CharacterHPValue(32010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32018000, SoundType.SFX, 888880000);
    WaitFor(CharacterHPValue(32010800) == 0);
    HandleBossDefeatAndDisplayBanner(32010800, TextBannerType.EnemyFelled);
    SetEventFlagID(32010800, ON);
    SetEventFlagID(9261, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61261, ON);
    }
});

$Event(32012810, Restart, function() {
    if (EventFlag(32010800)) {
        DisableCharacter(32010800);
        DisableCharacterCollision(32010800);
        ForceCharacterDeath(32010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32010800);
    EnableCharacterInvincibility(32010800);
    if (!EventFlag(32010801)) {
        ForceAnimationPlayback(32010800, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32012801))
                || HasDamageType(32010800, 10000, DamageType.Unspecified));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(32010801, ON);
        }
        ForceAnimationPlayback(32010800, 20000, false, false, true);
    } else {
L1:
        WaitFor(EventFlag(32012805) && InArea(10000, 32012800));
    }
L2:
    EnableCharacterAI(32010800);
    DisableCharacterInvincibility(32010800);
    SetNetworkUpdateRate(32010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32010800, 0, 904600320);
});

$Event(32012811, Restart, function() {
    EndIf(EventFlag(32010800));
    WaitFor(HPRatio(32010800) <= 0.6);
    SetEventFlagID(32012802, ON);
});

$Event(32012820, Restart, function() {
    EndIf(EventFlag(32010800));
    EndIf(EventFlag(32010801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32018590));
    SetEventFlagID(32018590, OFF);
});

$Event(32012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32010800, 32011800, 32012800, 32012805, 32015800, 10000, 32010801, 32012801);
    InitializeCommonEvent(0, 9005801, 32010800, 32011800, 32012800, 32012805, 32012806, 10000);
    InitializeCommonEvent(0, 9005811, 32010800, 32011800, 7, 32010801);
    InitializeCommonEvent(0, 9005822, 32010800, 931000, 32012805, 32012806, 0, 32012802, 0, 0);
});

$Event(32012920, Restart, function() {
    DisableNetworkSync();
    WaitFor(AssetBackread(32011515, Equal, 1));
    SetEventFlagID(32010519, ON);
    WaitFor(!AssetBackread(32011515, Equal, 1));
    SetEventFlagID(32010519, OFF);
    RestartEvent();
});
