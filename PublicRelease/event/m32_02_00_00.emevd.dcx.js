// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32020000, 32021950, 0, 0, 0, 5);
    InitializeEvent(0, 32022800, 0);
    InitializeEvent(0, 32022810, 0);
    InitializeEvent(0, 32022811, 0);
    InitializeEvent(0, 32022849, 0);
    InitializeEvent(0, 32022200, 32020205, 30002, 20002, 0, 0, 0, 0, 0, 32021615, 32021616, 0, 0);
    InitializeEvent(0, 32022250, 32020206, 30000, 20000, 0, 0, 0, 0, 0, 32021206, 0, 0, 0, 32020206);
    InitializeEvent(0, 32022270, 32020206, 30006, 20006, 32020206, 1084227584, 0, 0, 1, 0, 0);
    InitializeEvent(2, 32022200, 32020207, 30002, 20002, 0, 0, 0, 0, 0, 32021618, 32021619, 0, 0);
    InitializeEvent(5, 32022200, 32020214, 30001, 20001, 0, 0, 0, 0, 0, 32021636, 0, 0, 0);
    InitializeEvent(6, 32022200, 32020215, 30000, 20000, 0, 0, 0, 0, 0, 32021625, 32021626, 0, 0);
    InitializeEvent(7, 32022200, 32020216, 30002, 20002, 0, 0, 0, 0, 0, 32021633, 32021634, 32021635, 0);
    InitializeEvent(1, 32022250, 32020221, 30005, 20005, 0, 0, 0, 0, 0, 32021221, 0, 0, 0, 32020221);
    InitializeEvent(1, 32022270, 32020221, 30006, 20006, 32020221, 1084227584, 0, 0, 1, 0, 0);
    InitializeEvent(2, 32022250, 32020222, 30000, 20000, 0, 0, 0, 0, 0, 32021222, 0, 0, 0, 32020222);
    InitializeEvent(2, 32022270, 32020222, 30006, 20006, 32020222, 1084227584, 0, 0, 1, 0, 0);
    InitializeEvent(3, 32022250, 32020230, 30001, 20001, 0, 0, 0, 0, 0, 32021230, 0, 0, 0, 32020230);
    InitializeEvent(3, 32022270, 32020230, 30007, 20007, 32020230, 1092616192, 0, 0, 1, 0, 0);
    InitializeEvent(4, 32022250, 32020231, 30000, 20000, 0, 0, 0, 0, 0, 32021231, 0, 0, 0, 32020231);
    InitializeEvent(4, 32022270, 32020231, 30006, 20006, 32020231, 1092616192, 0, 0, 1, 0, 0);
    InitializeEvent(5, 32022250, 32020232, 30001, 20001, 0, 0, 0, 0, 0, 32021232, 0, 0, 0, 32020232);
    InitializeEvent(5, 32022270, 32020232, 30007, 20007, 32020232, 1092616192, 0, 0, 1, 0, 0);
    InitializeEvent(20, 32022200, 32020233, 30002, 20002, 0, 0, 0, 0, 0, 32021669, 32021670, 0, 0);
    InitializeEvent(21, 32022200, 32020234, 30005, 20005, 0, 0, 0, 0, 0, 32021671, 0, 0, 0);
    InitializeEvent(0, 32022510, 0);
    
    //Remove Wall Collision and Remove other Wall Visibility
    InitializeEvent(0, 32023000, 0);
    
    InitializeCommonEvent(0, 90005502, 32020514, 32021516, 32022517);
    InitializeCommonEvent(0, 90005501, 32020510, 32020511, 0, 32021510, 32021511, 32021512, 32020512);
    InitializeCommonEvent(0, 90005501, 32020515, 32020516, 2, 32021515, 32021516, 32021517, 32020517);
    InitializeCommonEvent(0, 90005501, 32020520, 32020521, 0, 32021520, 32021521, 32021522, 32020522);
    InitializeCommonEvent(0, 90005501, 32020525, 32020526, 0, 32021525, 32021526, 32021527, 32020527);
    InitializeCommonEvent(0, 90005646, 32020800, 32022840, 32022841, 32021840, 32022840, 544);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 32020201, 32022200, 0, -1);
    InitializeCommonEvent(0, 90005251, 32020202, 1104150528, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020208, 32022208, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020210, 32022210, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020211, 32022210, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020212, 32022213, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020212, 32022212, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020213, 32022210, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020213, 32022213, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020217, 32022217, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020220, 32022220, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020400, 32022230, 0, -1);
    InitializeCommonEvent(0, 90005250, 32020235, 32022230, 1084227584, -1);
    InitializeCommonEvent(0, 90005260, 32020236, 32022230, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005251, 32020309, 1099956224, 0, -1);
    InitializeCommonEvent(0, 90005201, 32020310, 30010, 20010, 1086324736, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 32020311, 30010, 20010, 1086324736, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32020305, 32022305, 1073741824, -1);
    InitializeCommonEvent(0, 90005200, 32020306, 30011, 20011, 32022306, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32020307, 30011, 20011, 32022306, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32020308, 30010, 20010, 32022306, 0, 0, 0, 0, 0);
    InitializeEvent(0, 32020519, 0);
});

$Event(32022510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32020510, 32020511, 0, 32021510, 32021511, 32023511, 32021512, 32023512, 32022511, 32022512, 32020512, 32020513, 0);
    InitializeCommonEvent(0, 90005500, 32020515, 32020516, 2, 32021515, 32021516, 32023516, 32021517, 32023517, 32022516, 32022517, 32020517, 32020518, 32020514);
    InitializeCommonEvent(0, 90005500, 32020520, 32020521, 0, 32021520, 32021521, 32023521, 32021522, 32023522, 32022521, 32022522, 32020522, 32020523, 0);
    InitializeCommonEvent(0, 90005500, 32020525, 32020526, 0, 32021525, 32021526, 32023526, 32021527, 32023527, 32022526, 32022527, 32020527, 32020528, 0);
});

$Event(32020519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32020510, ON);
    SetEventFlagID(32020520, ON);
    SetEventFlagID(32020525, ON);
    SetThisEventSlot(ON);
});

$Event(32022200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
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

$Event(32022250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
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

$Event(32022270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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

$Event(32022800, Restart, function() {
    EndIf(EventFlag(32020800));
    WaitFor(CharacterHPValue(32020800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32028000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32020800));
    HandleBossDefeatAndDisplayBanner(32020800, TextBannerType.EnemyFelled);
    SetEventFlagID(32020800, ON);
    SetEventFlagID(9262, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61262, ON);
    }
});

$Event(32022810, Restart, function() {
    if (EventFlag(32020800)) {
        DisableCharacter(32020800);
        DisableCharacterCollision(32020800);
        ForceCharacterDeath(32020800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32020800);
    SetSpEffect(32020800, 8090);
    EnableCharacterInvincibility(32020800);
    DisableLockOnPoint(32020800, 220);
    ForceAnimationPlayback(32020800, 30001, true, false, false);
    WaitFor(EventFlag(32022805) && InArea(10000, 32022800));
    ForceAnimationPlayback(32020800, 20001, false, false, false);
L2:
    EnableCharacterAI(32020800);
    SetNetworkUpdateRate(32020800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32020800, 0, 903350320);
    DisableCharacterInvincibility(32020800);
    EnableLockOnPoint(32020800, 220);
});

$Event(32022811, Restart, function() {
    EndIf(EventFlag(32020800));
    WaitFor(HPRatio(32020800) <= 0.6);
    SetEventFlagID(32022802, ON);
});

$Event(32022849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32020800, 32021800, 32022800, 32022805, 32025800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 32020800, 32021800, 32022800, 32022805, 32022806, 10000);
    InitializeCommonEvent(0, 9005811, 32020800, 32021800, 3, 0);
    InitializeCommonEvent(0, 9005822, 32020800, 931000, 32022805, 32022806, 0, 32022802, 0, 0);
});

//Remove Wall Collision and Remove other Wall Visibility
$Event(32023000, Default, function() {
    DisableHit(32023001);
    DisableHit(32023003);
    DisableHit(32023004);
    DisableHit(32023005);
    DisableHit(32023006);
    DisableMapPart(32023002);
});
