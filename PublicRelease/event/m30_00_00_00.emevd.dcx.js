// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(73000, 30001950, 0, 0, 0, 5);
    InitializeEvent(0, 30002800, 0);
    InitializeEvent(0, 30002810, 0);
    InitializeEvent(0, 30002829, 0);
    InitializeEvent(0, 30002811, 0);
    InitializeCommonEvent(0, 90005550, 30000620, 30001620, 30003620);
    InitializeCommonEvent(0, 90005550, 30000621, 30001621, 30003621);
    InitializeCommonEvent(0, 90005550, 30000622, 30001622, 30003622);
    InitializeCommonEvent(0, 90005550, 30000623, 30001623, 30003623);
    InitializeCommonEvent(0, 90005650, 30000540, 30001540, 30001541, 30003541, 27115);
    InitializeCommonEvent(0, 90005651, 30000540, 30001540);
    InitializeCommonEvent(0, 90005680, 30000500, 30000501, 30000502, 30000503, 30001500);
    InitializeEvent(0, 30002510, 0);
    InitializeCommonEvent(0, 90005620, 30000570, 30001570, 30001571, 0, 30002571, 30002572, 30002573);
    InitializeCommonEvent(0, 90005621, 30000570, 30001573);
    InitializeCommonEvent(0, 90005646, 30000800, 30002840, 30002841, 30001840, 30002840, 30);
});

$Event(50, Default, function() {
    InitializeEvent(0, 30000050, 0);
    InitializeCommonEvent(0, 90005211, 30000200, 30003, 20003, 30002200, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000201, 30003, 20003, 30002201, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30000204, 30003, 20003, 1090519040, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000205, 30003, 20003, 30002205, 1065353216, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000206, 30003, 20003, 30002205, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000207, 30003, 20003, 30002207, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000208, 30003, 20003, 30002207, 1065353216, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30000211, 30003, 20003, 1084227584, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000212, 30003, 20003, 30002212, 1065353216, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000213, 30003, 20003, 30002215, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30000214, 30003, 20003, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000215, 30003, 20003, 30002215, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000216, 30003, 20003, 30002215, 1065353216, 1067030938, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000217, 30003, 20003, 30002215, 1065353216, 1067030938, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30000218, 30003, 20003, 30002215, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30000223, 30003, 20003, 30002223, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30000224, 30003, 20003, 30002223, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30000225, 30003, 20003, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 30000226, 1077936128, 0, 0);
});

$Event(30000050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30000500, ON);
});

$Event(30002500, Default, function() {
    if (!ThisEventSlot()) {
        ReproduceAssetAnimation(30001500, 12);
    }
    if (!EventFlag(30000500)) {
        WaitFor(!EventFlag(30000500) && HasDamageType(30001500, 20000, DamageType.Unspecified));
        ForceAnimationPlayback(30001500, 12, false, true, false);
        SetEventFlagID(30000500, ON);
        RestartEvent();
    }
L0:
    WaitFor(EventFlag(30000500) && HasDamageType(30001500, 20000, DamageType.Unspecified));
    SetEventFlagID(30000500, OFF);
    ForceAnimationPlayback(30001500, 21, false, true, false);
    RestartEvent();
});

$Event(30009570, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    WaitFor(ActionButtonInArea(9220, X4_4));
    DisplayGenericDialogAndSetEventFlags(108000, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 3, X8_4, X12_4, X12_4);
    if (!EventFlag(X8_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (!PlayerHasItem(ItemType.Goods, 8000)) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.4);
        DisplayGenericDialog(308000, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, X4_4, 191);
    RotateCharacter(10000, X4_4, 60010, false);
    WaitFixedTimeSeconds(X16_4);
    DisplayGenericDialog(208000, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8000, 1);
    SetNetworkconnectedEventFlagID(X0_4, ON);
});

$Event(30002570, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(30002570));
    DeleteAssetfollowingSFX(X4_4, true);
    DeleteAssetfollowingSFX(X8_4, true);
    DisableAsset(X12_4);
    CreateAssetfollowingSFX(X4_4, 200, 806040);
    CreateAssetfollowingSFX(X8_4, 101, 806041);
    WaitFor(EventFlag(X0_4));
    DeleteAssetfollowingSFX(X8_4, false);
    WaitFixedTimeSeconds(2);
    DisableAsset(X8_4);
    DisableAsset(30001572);
    EnableAsset(X12_4);
    DeleteAssetfollowingSFX(X4_4, true);
    DeleteAssetfollowingSFX(X8_4, false);
});

$Event(30002610, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    flagArea &= EventFlag(X0_4);
    if (X8_4 != 0) {
        flagArea &= InArea(10000, X8_4);
    }
    WaitFor(flagArea);
    CreateBulletOwner(X12_4);
    if (Signed(X24_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X24_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X24_4, 801101200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X24_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X24_4, 801101205, 0, 0, 0);
        }
    }
L1:
    if (Signed(X28_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801101200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801101205, 0, 0, 0);
        }
    }
L2:
    if (Signed(X32_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801101200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801101205, 0, 0, 0);
        }
    }
L3:
    if (Signed(X36_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801101200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801101205, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

$Event(30002611, Default, function() {
    WaitFor(EventFlag(30000500) && InArea(10000, 30002500));
    CreateBulletOwner(30000500);
    ShootBullet(30000500, 30001500, 100, 101100, 0, 0, 0);
    ShootBullet(30000500, 30001500, 100, 101102, 0, 0, 0);
    ShootBullet(30000500, 30001500, 101, 101100, 0, 0, 0);
    ShootBullet(30000500, 30001500, 101, 101102, 0, 0, 0);
    WaitFixedTimeSeconds(6);
    RestartEvent();
});

$Event(30002510, Default, function() {
    InitializeCommonEvent(0, 90005681, 30000500, 30000501, 30000502, 30000503, 30001500);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101270, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101260, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101250, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101240, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101230, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101220, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101210, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101200, 801101205, 100, 101, 0, 0);
    }
});

$Event(30002800, Restart, function() {
    EndIf(EventFlag(30000800));
    WaitFor(CharacterHPValue(30000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30008000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30000800));
    HandleBossDefeatAndDisplayBanner(30000800, TextBannerType.EnemyFelled);
    SetEventFlagID(30000800, ON);
    SetEventFlagID(9200, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61200, ON);
    }
});

$Event(30002810, Restart, function() {
    if (EventFlag(30000800)) {
        DisableCharacter(30005800);
        DisableCharacterCollision(30005800);
        ForceCharacterDeath(30005800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30005800);
    EnableCharacterInvincibility(30005800);
    WaitFor(EventFlag(30002805) && InArea(10000, 30002800));
    EnableCharacterAI(30005800);
    DisableCharacterInvincibility(30005800);
    SetNetworkUpdateRate(30005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30000800, 0, 903664300);
});

$Event(30002811, Restart, function() {
    EndIf(EventFlag(30000800));
    WaitFor(HPRatio(30000800) <= 0.6);
    SetEventFlagID(30002802, ON);
});

$Event(30002829, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30000800, 30001800, 30002800, 30002805, 30005800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30000800, 30001800, 30002800, 30002805, 30002806, 10000);
    InitializeCommonEvent(0, 9005811, 30000800, 30001800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30000800, 930000, 30002805, 30002806, 0, 30002802, 0, 0);
});
