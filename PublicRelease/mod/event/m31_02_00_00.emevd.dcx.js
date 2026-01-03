// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(310200, 31021950, 0, 0, 0, 5);
    InitializeEvent(0, 31022800, 0);
    InitializeEvent(0, 31022810, 0);
    InitializeEvent(0, 31022811, 0);
    InitializeEvent(0, 31022849, 0);
    InitializeCommonEvent(0, 90005250, 31025800, 31022361, 0, 0);
    InitializeCommonEvent(0, 900005610, 31021200, 100, 800, 0);
    InitializeCommonEvent(0, 90005646, 31020800, 31022840, 31022841, 31021840, 31022840, 543);
    InitializeEvent(0, 31022900, 1580, 710580);
    InitializeEvent(0, 31022901, 1690, 710690, 31020040);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31020200, 31022200, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020201, 31022201, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020205, 31022205, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020206, 31022206, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020207, 31022206, 1073741824, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 31020211, 31022200, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020212, 31022200, 1073741824, 0, 0);
    InitializeEvent(0, 31022211, 31020211);
    InitializeEvent(1, 31022211, 31020212);
    InitializeEvent(0, 31022223, 31020218, 30001, 20001, 31022218, 1065353216, 1061997773, 0, 0, 0, 0, 31020219, 31020220);
    InitializeEvent(1, 31022223, 31020219, 30001, 20001, 31022218, 1065353216, 1056964608, 0, 0, 0, 0, 31020218, 31020220);
    InitializeEvent(2, 31022223, 31020220, 30001, 20001, 31022218, 1065353216, 0, 0, 0, 0, 0, 31020218, 31020219);
    InitializeCommonEvent(0, 90005261, 31020250, 31022250, 1073741824, 0, 0);
    InitializeEvent(0, 31022255, 0);
    InitializeEvent(0, 31022256, 0);
    InitializeCommonEvent(0, 90005261, 31020251, 31022251, 1073741824, 0, 0);
    InitializeEvent(0, 31022250, 31020250);
    InitializeEvent(0, 31022250, 31020260);
    InitializeEvent(0, 31022250, 31020261);
    InitializeCommonEvent(0, 90005261, 31020260, 31022260, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020261, 31022260, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020266, 31022266, 1073741824, 1050253722, 0);
    InitializeEvent(0, 31022260, 31020250);
    InitializeEvent(1, 31022260, 31020251);
    InitializeEvent(2, 31022260, 31020260);
    InitializeEvent(3, 31022260, 31020261);
    InitializeEvent(4, 31022260, 31020262);
    InitializeEvent(5, 31022260, 31020263);
    InitializeEvent(6, 31022260, 31020264);
    InitializeEvent(7, 31022260, 31020265);
    InitializeEvent(8, 31022260, 31020266);
    InitializeCommonEvent(0, 90005211, 31020301, 30000, 20000, 31022300, 1073741824, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31020302, 30000, 20000, 31022300, 1073741824, 1056964608, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31020303, 30000, 20000, 31022303, 1073741824, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31020304, 30000, 20000, 31022304, 1073741824, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020350, 31022350, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020351, 31022350, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020357, 31022357, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020358, 31022358, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31020359, 31022358, 1073741824, 0, 0);
});

$Event(31022211, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31022212))
            || HasDamageType(31020211, 0, DamageType.Unspecified)
            || HasDamageType(31020212, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020211, 436)
            || CharacterHasStateInfo(31020211, 2)
            || CharacterHasStateInfo(31020211, 5)
            || CharacterHasStateInfo(31020211, 6)
            || CharacterHasStateInfo(31020211, 260)
            || CharacterHasStateInfo(31020212, 436)
            || CharacterHasStateInfo(31020212, 2)
            || CharacterHasStateInfo(31020212, 5)
            || CharacterHasStateInfo(31020212, 6)
            || CharacterHasStateInfo(31020212, 260));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31022223, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
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
            || HasDamageType(X40_4, 0, DamageType.Unspecified)
            || HasDamageType(X44_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterHasStateInfo(X40_4, 436)
            || CharacterHasStateInfo(X40_4, 2)
            || CharacterHasStateInfo(X40_4, 5)
            || CharacterHasStateInfo(X40_4, 6)
            || CharacterHasStateInfo(X40_4, 260)
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
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(31022250, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 7, 1))
            || HasDamageType(31020250, 0, DamageType.Unspecified)
            || HasDamageType(31020260, 0, DamageType.Unspecified)
            || HasDamageType(31020261, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020250, 436)
            || CharacterHasStateInfo(31020250, 2)
            || CharacterHasStateInfo(31020250, 5)
            || CharacterHasStateInfo(31020250, 6)
            || CharacterHasStateInfo(31020250, 260));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31022255, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31022255));
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31022256, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(31020250);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, 31022250);
    chrSpAreaFlag = chrSp && InArea(10000, 31022256) && EventFlag(31022255);
    WaitFor(
        chrSpAreaFlag
            || chrSpArea
            || HasDamageType(31020250, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020250, 436)
            || CharacterHasStateInfo(31020250, 2)
            || CharacterHasStateInfo(31020250, 5)
            || CharacterHasStateInfo(31020250, 6)
            || CharacterHasStateInfo(31020250, 260)
            || (CharacterHasSpEffect(31020250, 481)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90110)
                && !CharacterHasSpEffect(31020250, 90160))
            || (CharacterHasSpEffect(31020250, 482)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90120)
                && !CharacterHasSpEffect(31020250, 90160)
                && !CharacterHasSpEffect(31020250, 90162))
            || (CharacterHasSpEffect(31020250, 483)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90140)
                && !CharacterHasSpEffect(31020250, 90160)
                && !CharacterHasSpEffect(31020250, 90161))
            || (CharacterHasSpEffect(31020250, 484)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90130)
                && !CharacterHasSpEffect(31020250, 90161)
                && !CharacterHasSpEffect(31020250, 90162))
            || (CharacterHasSpEffect(31020250, 487)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90150)
                && !CharacterHasSpEffect(31020250, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpAreaFlag.Passed) {
    }
L1:
    EnableCharacterAI(31020250);
});

$Event(31022260, Restart, function(X0_4) {
    SetSpEffect(X0_4, 90000);
});

$Event(31022800, Restart, function() {
    EndIf(EventFlag(31020800));
    WaitFor(CharacterHPValue(31020800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31020800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31020800));
    HandleBossDefeatAndDisplayBanner(31020800, TextBannerType.EnemyFelled);
    ForceCharacterDeath(31025800, false);
    SetEventFlagID(31020800, ON);
    SetEventFlagID(9230, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61230, ON);
    }
});

$Event(31022810, Restart, function() {
    if (EventFlag(31020800)) {
        DisableCharacter(31020800);
        DisableCharacterCollision(31020800);
        ForceCharacterDeath(31025800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31020800);
    EnableCharacterInvincibility(31020800);
    WaitFor(EventFlag(31022805) && InArea(10000, 31022800));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(31020801, ON);
    }
L2:
    EnableCharacterAI(31020800);
    DisableCharacterInvincibility(31020800);
    SetNetworkUpdateRate(31020800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31020800, 0, 904480311);
});

$Event(31022811, Restart, function() {
    EndIf(EventFlag(31020800));
    WaitFor(HPRatio(31020800) <= 0.6);
    SetEventFlagID(31022802, ON);
});

$Event(31022849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31020800, 31021800, 31022800, 31022805, 31025800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31020800, 31021800, 31022800, 31022805, 31022806, 10000);
    InitializeCommonEvent(0, 9005811, 31020800, 31021800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31020800, 931000, 31022805, 31022806, 0, 31022802, 0, 0);
});

$Event(31022900, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) && PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, false);
});

$Event(31022901, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(EventFlag(X8_4) && PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, false);
});
