// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1049570800, 1049570000, 1049570950, 1049571950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 90005211, 1049570251, 30003, 20003, 1049572251, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1049570252, 30003, 20003, 1049572251, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1049570259, 30003, 20003, 1049572259, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570300, 1049570300, 1049570710, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570310, 1049570310, 1049570700, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570320, 1049570320, 1049570720, 0, 0);
    InitializeCommonEvent(0, 90005201, 1049570300, 30000, 20000, 1082130432, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1049570310, 30000, 20000, 1082130432, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1049572360, 1049570800, 1049570801);
    InitializeEvent(0, 1049572350, 1049572351);
    InitializeEvent(1, 1049572350, 1049572351);
    InitializeEvent(2, 1049572350, 1049572352);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1049570750, 1049570725, 1049570800)
    //Erdtree Sentry
    //InitializeCommonEvent(0, 90005870, 1049570800, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 1049570800, 0, 1049570800, 0, 30570, 0);
    //InitializeCommonEvent(0, 90005251, 1049570800, 1101004800, 0, 0);
    InitializeEvent(0, 1049572355, 0);
    //InitializeEvent(0, 1049572356, 0);
    //InitializeCommonEvent(0, 90005876, 1049570800, 1049570805, 904810661, 921400, 1045370801);
    InitializeCommonEvent(0, 90005875, 1049570800, 30570, 921400);
    InitializeCommonEvent(0, 90005890, 1049570800, 1049570810, 1049570805);
    InitializeEvent(0, 1049572361, 1049570800, 1049570810, 1049570802);
    
    InitializeEvent(0, 1049572362, 1049575310);
    
    InitializeCommonEvent(0, 98005303, 1049570810, 1049570811);
    InitializeCommonEvent(0, 98005304, 1049570810, 1049570811);
});

$Event(1049572350, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    CreateBulletOwner(1049570350);
    WaitFor(InArea(10000, 1049572350));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1049570350, X0_4, 900, 802105200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1049570350, X0_4, 900, 802105210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1049570350, X0_4, 900, 802105220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1049570350, X0_4, 900, 802105230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1049570350, X0_4, 900, 802105240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1049570350, X0_4, 900, 802105250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1049570350, X0_4, 900, 802105260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1049570350, X0_4, 900, 802105270, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1049572355, Restart, function() {
    if (EventFlag(1049570800)) {
        DisableCharacter(1049570801);
        DisableCharacterCollision(1049570801);
        DisableCharacter(1049570800);
        DisableCharacterCollision(1049570800);
        EndEvent();
    }
    //SetCharacterInvincibility(1049570801, Enabled);
    DisableCharacterAI(1049570800);
    EnableCharacterInvincibility(1049570800);
    DisableCharacterAI(1049570801);
    EnableCharacterInvincibility(1049570801);
    CreateReferredDamagePair(1049570801, 1049570800);
    DisableCharacterHPBarDisplay(1049570801);
    WaitFor(InArea(10000, 1049570805));
    DisableCharacterInvincibility(1049570801);
    DisableCharacterInvincibility(1049570800);
    SetNetworkUpdateRate(1049570800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(1049570801, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedSeconds(6) || HasDamageType(1049570800, 10000, DamageType.Unspecified) || EntityInRadiusOfEntity(1049570801, 10000, 4, 1));
    EnableCharacterAI(1049570801);
    EnableCharacterAI(1049570800);
    SetBossBGM(921400, BossBGMState.Start);
    DisplayBossHealthBar(Enabled, 1049570800, 0, 904810661);
    WaitFor(CompareCharacterHPValue(1049570800, Equal, 0));
    //SetCharacterInvincibility(1049570801, Disabled);
    ForceCharacterDeath(1049570801, false);
});

$Event(1049572356, Restart, function() {
    EndIf(EventFlag(1049570800));
    WaitFor(CompareHPRatio(1049570800, LessOrEqual, 0.6));
    ForceAnimationPlayback(1049570802, 3009, false, false, false);
    EndEvent();
});

$Event(1049572360, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        SetCharacterEventTarget(X4_4, X0_4);
    }
    WaitFor(CharacterHasSpEffect(X4_4, 11893) && !CharacterDead(X0_4) && !CharacterDead(X4_4));
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 283, 0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X4_4, 20003, false, false, false);
    SetSpEffect(X0_4, 11880);
    SetSpEffect(X4_4, 11880);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(5);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    RestartEvent();
});

//Erdtree Boss Wall Handler - Boss Defeat Flag, Zoning Event Flag, Wall Asset
$Event(1049572361, Restart, function(X0_4, X4_4, X8_4) {
    DisableAsset(X8_4);
    EndIf(EventFlag(X0_4));
    
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X4_4));
    EnableAsset(X8_4);
    CreateAssetfollowingSFX(X8_4, 200, 1503);

    WaitFor(EventFlag(X0_4));
    DisableAsset(X8_4);
    DeleteAssetfollowingSFX(X8_4, true);
});

// Disabling interaction with ghosts
$Event(1049572362, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});
