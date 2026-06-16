// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 31202800, 0);
    InitializeEvent(0, 31202801, 0);
    InitializeEvent(0, 31202802, 0);
    InitializeEvent(0, 31202810, 0);
    InitializeEvent(0, 31202811, 0);
    InitializeEvent(0, 31092849, 0);
    InitializeCommonEvent(0, 900005610, 31201200, 100, 800, 0);
    RegisterBonfire(31200000, 31201950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005646, 31200800, 31202840, 31202841, 31201840, 31202840, 5151);
    InitializeEvent(0, 31202550, 31200455, 31201555, 1084227584, 0);
    InitializeEvent(2, 31202550, 31200465, 31201565, 1084227584, 0);
    InitializeEvent(3, 31202550, 31200470, 31201570, 1084227584, 1065353216);
    InitializeEvent(5, 31202550, 31200475, 31201575, 1084227584, 1073741824);
    InitializeEvent(1, 31202550, 31200480, 31201580, 1084227584, 1077936128);
    InitializeEvent(0, 31202860, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 31200240, 30000, 20000, 31202240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005200, 31200241, 30000, 20000, 31202240, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(2, 90005200, 31200242, 30000, 20000, 31202240, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(3, 90005200, 31200243, 30000, 20000, 31202240, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 31200230, 31202230, 0, 0);
    InitializeCommonEvent(1, 90005250, 31200231, 31202230, 0, 0);
});

$Event(31202520, Restart, function(X0_4, X4_4, X8_4) {
    DisableObjAct(X8_4, -1);
    if (EventFlag(X4_4)) {
        EnableObjAct(X8_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && !EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    EnableObjAct(X8_4, -1);
});

$Event(31202550, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeSeconds(X8_4);
    WaitFor(EntityInRadiusOfEntity(10000, X4_4, 70, 1));
    WaitFixedTimeSeconds(X12_4);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X4_4, -1, 802730000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X4_4, -1, 802730010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X4_4, -1, 802730020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X4_4, -1, 802730030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X4_4, -1, 802730040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X4_4, -1, 802730050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X4_4, -1, 802730060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(X0_4, X4_4, -1, 802730070, 0, 0, 0);
    }
    RestartEvent();
});

$Event(31202800, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterDead(31200800));
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(31200800, TextBannerType.EnemyFelled);
    SetEventFlagID(31200800, ON);
    SetEventFlagID(9245, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61245, ON);
    }
});

$Event(31202801, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterHPValue(31200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31200800, SoundType.SFX, 888880000);
});

$Event(31202802, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterHPValue(31200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31200800, SoundType.SFX, 888880000);
});

$Event(31202810, Restart, function() {
    if (EventFlag(31200800)) {
        DisableCharacter(31200800);
        DisableCharacterCollision(31200800);
        ForceCharacterDeath(31200800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31200800);
    EnableCharacterInvincibility(31200800);
    ForceAnimationPlayback(31200800, 30001, false, false, false);
    WaitFor(EventFlag(31202805) && InArea(10000, 31202800));
L2:
    EnableCharacterAI(31200800);
    DisableCharacterInvincibility(31200800);
    SetNetworkUpdateRate(31200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 31200800, 0, 903800311);
    ForceAnimationPlayback(31200800, 20001, false, false, false);
});

$Event(31202811, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterDead(31200800));
    SetEventFlagID(31202842, ON);
});

$Event(31092849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31200800, 31201800, 31202800, 31202805, 31205800, 10010, 0, 0);
    InitializeCommonEvent(0, 9005801, 31200800, 31201800, 31202800, 31202805, 31202806, 10010);
    InitializeCommonEvent(0, 9005811, 31200800, 31201800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31200800, 931000, 31202805, 31202806, 0, 31202842, 0, 0);
});

$Event(31202860, Default, function() {
    WaitFor(EventFlag(31200800));
    CreateAssetfollowingSFX(31200875, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 31200875);
    RotateCharacter(10000, 31200875, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(15, 0, 0, 0, 15000881, 60);
    SetPlayerRespawnPoint(15000881);
    SaveRequest(0);
    RestartEvent();
});
