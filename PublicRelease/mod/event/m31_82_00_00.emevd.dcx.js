// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

// EventFlagIDs:
const BossDefeated = 2044440800;
const BossEncountered = 2044440801;
const BossPhase2 = 2044442811
const MusicP2 = 2044442812;
// Enemy EntityIds
const BossEntityId = 31820800;
const Core1EntityId = 31820801;
const Core2EntityId = 31820802;
const CloudBulletDummyEntityId = 31820803;

$Event(0, Default, function() {
    $InitializeEvent(0, 31822800); // Boss Death
    $InitializeEvent(0, 31822810); // Boss Init
    $InitializeEvent(0, 31822849); // Fogwall Init
    
    $InitializeEvent(0, 31822811); // Phase Two Init
    $InitializeEvent(0, 31822815); // Phase Two Clouds
    $InitializeEvent(0, 31822816); // Phase Two Rain
    
    $InitializeEvent(0, 31822818, Core1EntityId, 0); // Cores Bullet Madness + Scaling
    $InitializeEvent(1, 31822818, Core2EntityId, 1);
    $InitializeEvent(0, 31822819, Core1EntityId, 31812820); // Outer Core Damage
    $InitializeEvent(1, 31822819, Core2EntityId, 31812821); // Inner Core Damage
    
    $InitializeEvent(0, 31822500); // Entry first time
    $InitializeEvent(0, 31822501); // Entry optimization
    
    $InitializeEvent(0, 31822840); // Return to Surface
    InitializeCommonEvent(0, 98005309, BossDefeated, 31822803, 31822804); // Quitout move back
});


// ---------------------------
// Basics
// ---------------------------

// Boss Death
$Event(31822800, Restart, function() {
    EndIf(EventFlag(BossDefeated));
    
    // Boss Defeat Handling
    WaitFor(CharacterDead(BossEntityId));
    
    WaitFixedTimeSeconds(6);
    HandleBossDefeatAndDisplayBanner(31820800, TextBannerType.EnemyFelled);
    AwardItemLot(1043310410);
    SetEventFlagID(BossDefeated, ON);
    SetBossBGM(392900, BossBGMState.Stop1);
    SetEventFlagID(9273, ON);
    
    WaitFixedTimeSeconds(4);
});
    
// Boss Initalizaiton
$Event(31822810, Restart, function() {
    if (EventFlag(BossDefeated)) {
        DisableCharacter(BossEntityId);
        DisableCharacterCollision(BossEntityId);
        SetCharacterBackreadState(BossEntityId, true);
        ForceCharacterDeath(BossEntityId, false);
        
        DisableCharacter(CloudBulletDummyEntityId);
        DisableCharacterCollision(CloudBulletDummyEntityId);
        SetCharacterBackreadState(CloudBulletDummyEntityId, true);
        ForceCharacterDeath(CloudBulletDummyEntityId, false);
        
        SpawnMapSFX(31822848);
        EndEvent();
    }
    
    EnableCharacterInvincibility(BossEntityId);
    DisableCharacterAI(BossEntityId);
    DisableCharacterHPBarDisplay(BossEntityId);
    
    DisableCharacterGravity(Core1EntityId);
    DisableCharacterGravity(Core2EntityId);
    CreateBulletOwner(CloudBulletDummyEntityId);
    SetEventFlagID(BossPhase2, OFF);
    
    if (EventFlag(BossEncountered)) {
        SpawnMapSFX(31822848);
        WaitFor(InArea(20000, 31822800));
        WaitFixedTimeSeconds(4);
    }
    else {
        ForceAnimationPlayback(BossEntityId, 703, true, false, false, Equal, 1);
        WaitFor(InArea(20000, 31822800));
        WaitFixedTimeSeconds(3);
        SpawnMapSFX(31822848);
        WaitFor(InArea(20000, 31822801));
        ForceAnimationPlayback(BossEntityId, 20004, false, false, false, Equal, 1);
        SetNetworkconnectedEventFlagID(BossEncountered, ON);
    }
    
    DisableCharacterInvincibility(BossEntityId);
    EnableCharacterAI(BossEntityId);
    
    DisplayBossHealthBar(Enabled, BossEntityId, 0, 904140305);
    SetNetworkUpdateRate(BossEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(31822849, Restart, function() {
    if (EventFlag(BossEncountered)) {
        InitializeCommonEvent(0, 9005800, BossDefeated, 31821800, 31822800, 2044442805, BossEntityId, 10000, BossEncountered, 31822800);
        InitializeCommonEvent(0, 9005801, BossDefeated, 31821800, 31822800, 2044442805, 0, 10000);
    } else {
        InitializeCommonEvent(0, 9005800, BossDefeated, 31821800, 31822801, 2044442805, BossEntityId, 10000, BossEncountered, 31822801);
        InitializeCommonEvent(0, 9005801, BossDefeated, 31821800, 31822801, 2044442805, 0, 10000);
    }
    InitializeCommonEvent(0, 9005811, BossDefeated, 31821800, 2, BossEncountered);
    InitializeCommonEvent(0, 9005822, BossDefeated, 392900, 2044442805, 2044442805, 0, BossPhase2, 0, 0);
});

$Event(31822840, Default, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(BossDefeated));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(32821840, 190, 1300);
    }
    
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9290, 32821840));
            
    DisplayGenericDialogAndSetEventFlags(4100, PromptType.YESNO, NumberofOptions.TwoButtons, 32821840, 3, 2044442841, 6001, 6001);
    if (!EventFlag(2044442841)) {
        SetEventFlagID(6001, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    
    WarpPlayer(60, 43, 31, 0, 1043312852, 60);
    SetPlayerRespawnPoint(1043312852);
    SaveRequest();
    RestartEvent();
});


// ---------------------------
// Phase Two
// ---------------------------

// Phase Two Initalization
$Event(31822811, Restart, function() {
    EndIf(EventFlag(BossDefeated));
    WaitFor(CharacterHasSpEffect(BossEntityId, 15530));
    
    EndIf(CharacterDead(BossEntityId));
    SetEventFlagID(BossPhase2, ON);
});

// Phase Two Clouds
$Event(31822815, Restart, function() {
    WaitFor(EventFlag(BossPhase2) || EventFlag(BossDefeated));
    
    SpawnMapSFX(31812840);
    SpawnMapSFX(31812841);
    SpawnMapSFX(31812842);
    SpawnMapSFX(31812843);
    SpawnMapSFX(31812844);
    SpawnMapSFX(31812845);
    
    EndEvent();
});

// Phase Two Frenzy Rain
$Event(31822816, Restart, function() {
    EndIf(EventFlag(BossDefeated) || CharacterDead(BossEntityId)); 
    WaitFor(EventFlag(BossPhase2));
    
    ShootBullet(CloudBulletDummyEntityId, 31812830, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812831, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812832, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812833, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812834, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812835, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812836, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812837, -1, 160, 0, 0, 0);
    ShootBullet(CloudBulletDummyEntityId, 31812838, -1, 160, 0, 0, 0);
    
    WaitFixedTimeSeconds(0.75);    
    RestartEvent();
});


// ---------------------------
// Eye Cores
// ---------------------------

//  Arena Eye Core - Damage Scaling
$Event(31822818, Restart, function(enemyEntityId, forceMaxScaling) {
    if (forceMaxScaling == 0) {      
        if (GameCycle() == 0) {
            SetSpEffect(enemyEntityId, 16630);
            EndEvent();
        }
        if (GameCycle() == 1) {
            SetSpEffect(enemyEntityId, 16631);
            EndEvent();
        }
        if (GameCycle() == 2) {
            SetSpEffect(enemyEntityId, 16632);
            EndEvent();
        }
        if (GameCycle() == 3) {
            SetSpEffect(enemyEntityId, 16633);
            EndEvent();
        }
        if (GameCycle() == 4) {
            SetSpEffect(enemyEntityId, 16634);
            EndEvent();
        }
        if (GameCycle() == 5) {
            SetSpEffect(enemyEntityId, 16635);
            EndEvent();
        }
        if (GameCycle() == 6) {
            SetSpEffect(enemyEntityId, 16636);
            EndEvent();
        }
        if (GameCycle() >= 7) {
            SetSpEffect(enemyEntityId, 16637);
            EndEvent();
        }
    }
    else {
        SetSpEffect(enemyEntityId, 16637);
        EndEvent();
    }        
});

// Arena Eye Core - Damage Toggle
$Event(31822819, Restart, function(enemyEntityId, regionEntityId) {
    DisableCharacter(enemyEntityId);
    SetNetworkUpdateRate(regionEntityId, true, CharacterUpdateFrequency.NoUpdate);
    
    WaitFor(InArea(10000, regionEntityId));
    EnableCharacter(enemyEntityId);
    SetNetworkUpdateRate(enemyEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    
    WaitFor(!InArea(10000, regionEntityId))
    RestartEvent();
});


// ---------------------------
// Enterance Area
// ---------------------------

// First Time Entry
$Event(31822500, Default, function() {
    DisableNetworkSync();
    if (EventFlag(2044440500)) {
        SpawnMapSFX(31822510);
        SpawnMapSFX(31822511);
        SpawnMapSFX(31822520);
        SpawnMapSFX(31822521);
        SpawnMapSFX(31822530);
        SpawnMapSFX(31822531);
        SpawnMapSFX(31822540);
        SpawnMapSFX(31822541);
        EndEvent();
    }
    
    WaitFixedTimeRealFrames(1);
    WaitFixedTimeSeconds(3);
    SpawnMapSFX(31822510);
    SpawnMapSFX(31822511);
    SpawnMapSFX(31822540);
    SpawnMapSFX(31822541);
    
    WaitFixedTimeSeconds(1);
    SpawnMapSFX(31822520);
    SpawnMapSFX(31822521);
    SpawnMapSFX(31822530);
    SpawnMapSFX(31822531);
    
    SetEventFlagID(2044440500, ON);
    EndEvent();
});


// Entry Room VFX optimization
$Event(31822501, Default, function() {
    DisableNetworkSync();
    
    WaitFor(InArea(10000, 31822803));
    DeleteMapSFX(31822510, true);
    DeleteMapSFX(31822511, true);
    
    DeleteMapSFX(31822521, true);
    
    DeleteMapSFX(31822531, true);
    DeleteMapSFX(31822540, true);
    DeleteMapSFX(31822541, true);
    
    WaitFor(!InArea(10000, 31822803));
    SpawnMapSFX(31822510);
    SpawnMapSFX(31822511);
    
    SpawnMapSFX(31822521);
    
    SpawnMapSFX(31822531);
    SpawnMapSFX(31822540);
    SpawnMapSFX(31822541);
    RestartEvent();
});
