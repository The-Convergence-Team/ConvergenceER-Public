// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(311700, 31171950, 0, 0, 0, 5);
    InitializeEvent(0, 31172800, 0);
    InitializeEvent(0, 31172499, 0);
    InitializeEvent(0, 31172810, 0);
    InitializeEvent(0, 31172811, 0);
    InitializeEvent(0, 31172849, 0);
    InitializeCommonEvent(0, 90005646, 31170800, 31172840, 31172841, 31171840, 31172840, 4383);
    InitializeEvent(0, 31172500, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31170200, 31172200, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170201, 30005, 20005, 31172204, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170203, 30001, 20001, 31172204, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170204, 30004, 20004, 31172204, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170212, 30001, 20001, 31172212, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170213, 30004, 20004, 31172212, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170216, 30000, 20000, 31172216, 1073741824, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170217, 30001, 20001, 31172216, 1073741824, 1069547520, 0, 0, 0, 0);
    InitializeEvent(0, 31172216, 31170216);
    InitializeEvent(1, 31172216, 31170217);
    InitializeCommonEvent(0, 90005211, 31170218, 30001, 20001, 31172218, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170245, 30001, 20001, 31172245, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(7, 31172208, 31170203);
    InitializeEvent(8, 31172208, 31170204);
    InitializeCommonEvent(0, 90005211, 31170207, 30003, 20003, 31172207, 1069547520, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170219, 30003, 20003, 31172219, 1069547520, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170220, 30003, 20003, 31172220, 1069547520, 0, 0, 0, 0, 0);
    InitializeEvent(3, 31172218, 31170240, 31172240, 1082130432, 0, 3001);
    InitializeCommonEvent(0, 90005261, 31170250, 31172250, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 31170254, 31172250, 1073741824, 1073741824, 0);
    InitializeEvent(0, 31172254, 0);
    InitializeCommonEvent(0, 90005211, 31170251, 30000, 20000, 31172251, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170252, 30000, 20000, 31172252, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170253, 30000, 20000, 31172252, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170258, 31172258, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005211, 31170259, 30000, 20000, 31172258, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170260, 31172260, 1073741824, 1084227584, 0);
    InitializeCommonEvent(0, 90005261, 31170261, 31172260, 1073741824, 1092616192, 0);
    InitializeCommonEvent(0, 90005261, 31170300, 31172300, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170301, 31172300, 1073741824, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 31170302, 31172302, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170303, 31172302, 1073741824, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 31170308, 31172308, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170309, 31172309, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170310, 31172309, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170340, 30002, 20002, 31172340, 1077936128, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005460, 31170340);
    InitializeCommonEvent(0, 90005461, 31170340);
    InitializeCommonEvent(0, 90005462, 31170340);
});

$Event(31172500, Restart, function() {
    DisableAsset(31171500);
});

$Event(31172208, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 4, 1));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31172216, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 3, 1));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31172218, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, X4_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || chrSpArea
            || (chrSp && EntityInRadiusOfEntity(10000, X0_4, X8_4, 1))
            || (CharacterHasSpEffect(X0_4, 481)
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
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpArea.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31172254, Restart, function() {
    SetSpEffect(31170254, 10525);
});

$Event(31172499, Restart, function() {
    EndIf(EventFlag(31170800));
    areaDmg = InArea(10000, 31172390) || HasDamageType(31170800, 0, DamageType.Unspecified);
    chr = CharacterHasStateInfo(31170800, 436)
        || CharacterHasStateInfo(31170800, 2)
        || CharacterHasStateInfo(31170800, 5)
        || CharacterHasStateInfo(31170800, 6)
        || CharacterHasStateInfo(31170800, 260);
    WaitFor(areaDmg);
    SetEventFlagID(31172499, ON);
});

$Event(31172800, Restart, function() {
    EndIf(EventFlag(31170800));
    WaitFor(CharacterHPValue(31170800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31170800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31170800));
    HandleBossDefeatAndDisplayBanner(31170800, TextBannerType.EnemyFelled);
    SetEventFlagID(31170800, ON);
    SetEventFlagID(9235, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61235, ON);
    }
});

$Event(31172810, Restart, function() {
    if (EventFlag(31170800)) {
        DisableCharacter(31170800);
        DisableCharacterCollision(31170800);
        ForceCharacterDeath(31170800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31170800);
    EnableCharacterInvincibility(31170800);
    DisableLockOnPoint(31170800, 220);
    WaitFor(EventFlag(31172805) && EventFlag(31172499));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(31170801, ON);
    }
L2:
    EnableCharacterAI(31170800);
    DisableCharacterInvincibility(31170800);
    SetNetworkUpdateRate(31170800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31170800, 0, 904660310);
    EnableLockOnPoint(31170800, 220);
});

$Event(31172811, Restart, function() {
    EndIf(EventFlag(31170800));
    WaitFor(HPRatio(31170800) <= 0.6);
    SetEventFlagID(31172802, ON);
});

$Event(31172849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31170800, 31171800, 31172800, 31172805, 31175800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31170800, 31171800, 31172800, 31172805, 31172806, 10000);
    InitializeCommonEvent(0, 9005811, 31170800, 31171800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31170800, 931000, 31172805, 31172806, 31172499, 31172802, 0, 0);
});

$Event(31172900, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    SetEventFlagID(700690, ON);
});
