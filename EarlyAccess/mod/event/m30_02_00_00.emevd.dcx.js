// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(300200, 30021950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005646, 30020800, 30022840, 30022841, 30021840, 30022840, 542);
    InitializeEvent(0, 30022800, 0);
    InitializeEvent(0, 30022810, 0);
    InitializeEvent(0, 30022849, 0);
    InitializeEvent(0, 30022811, 0);
    InitializeCommonEvent(0, 90005550, 30020680, 30021680, 30023680);
    InitializeCommonEvent(0, 90005650, 30020540, 30021540, 30021541, 30023541, 27115);
    InitializeCommonEvent(0, 90005651, 30020540, 30021540);
    InitializeCommonEvent(0, 90005680, 30020500, 30020501, 30020502, 30020503, 30021500);
    InitializeCommonEvent(0, 90005680, 30020505, 30020506, 30020507, 30020508, 30021505);
    InitializeEvent(0, 30022510, 0);
    InitializeEvent(0, 30022580, 0);
    InitializeCommonEvent(0, 90005706, 30020700, 930025, 30021700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(30020700, true);
    InitializeCommonEvent(0, 90005211, 30020200, 30010, 20010, 30022200, 1069547520, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30020201, 30022201, 0, 0, 3006);
    InitializeCommonEvent(0, 90005211, 30020202, 30010, 20010, 30022202, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020203, 30010, 20010, 30022203, 1065353216, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020204, 30010, 20010, 30022204, 1065353216, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020205, 30003, 20003, 30022205, 1065353216, 1083808154, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020206, 30003, 20003, 30022206, 0, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020207, 30003, 20003, 30022206, 0, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020208, 30002, 20002, 30022206, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020209, 30010, 20010, 30022206, 0, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020210, 30010, 20010, 30022206, 0, 1036831949, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020212, 30010, 20010, 30022212, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020213, 30010, 20010, 30022212, 0, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30020214, 30003, 20003, 30022214, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30020215, 30022215, 1065353216, 0, 0);
    InitializeEvent(0, 30020050, 0);
});

$Event(30020050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30020500, ON);
    SetEventFlagID(30020505, ON);
});

$Event(30022510, Default, function() {
    InitializeCommonEvent(0, 90005681, 30020500, 30020501, 30020502, 30020503, 30021500);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101070, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101060, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101050, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101040, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101030, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101020, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101010, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101000, 801101005, 101, 0, 0, 0);
    }
    InitializeCommonEvent(0, 90005681, 30020505, 30020506, 30020507, 30020508, 30021505);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101070, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101060, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101050, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101040, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101030, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101020, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101010, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101000, 801101005, 101, 0, 0, 0);
    }
});

$Event(30022580, Default, function() {
    RegisterLadder(30020580, 30020581, 30021580);
});

$Event(30022610, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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
            ShootBullet(X12_4, X4_4, X24_4, 801101000, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X24_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X24_4, 801101005, 0, 0, 0);
        }
    }
L1:
    if (Signed(X28_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801101000, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801101005, 0, 0, 0);
        }
    }
L2:
    if (Signed(X32_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801101000, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801101005, 0, 0, 0);
        }
    }
L3:
    if (Signed(X36_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801101000, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801101005, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

$Event(30022650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(30, 2, 0, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(30022800, Restart, function() {
    EndIf(EventFlag(30020800));
    WaitFor(CharacterHPValue(30020800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30020800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30020800));
    HandleBossDefeatAndDisplayBanner(30020800, TextBannerType.EnemyFelled);
    SetEventFlagID(30020800, ON);
    SetEventFlagID(9202, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61202, ON);
    }
});

$Event(30022810, Restart, function() {
    if (EventFlag(30020800)) {
        DisableCharacter(30020800);
        DisableCharacterCollision(30020800);
        ForceCharacterDeath(30020800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30020800);
    EnableCharacterInvincibility(30020800);
    WaitFor(EventFlag(30022805) && InArea(10000, 30022800));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(30020801, ON);
    }
L2:
    EnableCharacterAI(30020800);
    DisableCharacterInvincibility(30020800);
    SetNetworkUpdateRate(30020800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30020800, 0, 904260301);
});

$Event(30022811, Restart, function() {
    EndIf(EventFlag(30020800));
    WaitFor(HPRatio(30020800) <= 0.6);
    SetEventFlagID(30022802, ON);
});

$Event(30022849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30020800, 30021800, 30022800, 30022805, 30025800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30020800, 30021800, 30022800, 30022805, 30022806, 10000);
    InitializeCommonEvent(0, 9005811, 30020800, 30021800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30020800, 930000, 30022805, 30022806, 0, 30022802, 0, 0);
});
