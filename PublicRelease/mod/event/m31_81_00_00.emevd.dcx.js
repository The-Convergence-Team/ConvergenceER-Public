// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

// Generic EventFlags
const BossDefeated = 2055550800;
const MusicP1 = 2055552810
const MusicPhaseChange = 2055552811
const MusicP2 = 2055552812;
const MusicDeath = 2055552815;
// Tech
const FightActive = 2055550100;
const PrefightBarrierFlag = 2055552700;
// Typing Eventflag
const Quality = 2055550101;
const Strength = 2055550102;
const Dexterity = 2055550103;
const Nonspecific = 2055550104;
const Physical = 2055550105;
const Fire = 2055550106;
const Magic = 2055550107;
const Lightning = 2055550108;
const Holy = 2055550109;

// EntityIds
const BossEntityId = 31810800;
const PrefightBarrier = 32811700;


// ---------------------------------------------------------------------------
//
// To do:
// - Apply return locations to event 31812840 initializations
//
// ---------------------------------------------------------------------------


$Event(0, Default, function() {
    SetEventFlagID(BossDefeated, OFF);
    $InitializeEvent(0, 31812800); // Boss Death
    // Boss Initalization
    $InitializeEvent(0, 31812810, Quality,     2055559111, 18781, 121911);
    $InitializeEvent(1, 31812810, Strength,    2055559112, 18782, 121912);
    $InitializeEvent(2, 31812810, Dexterity,   2055559113, 18783, 121913);
    $InitializeEvent(3, 31812810, Nonspecific, 2055559114, 18784, 121914);
    $InitializeEvent(4, 31812810, Physical,    2055559115, 18785, 121915);
    $InitializeEvent(5, 31812810, Fire,        2055559116, 18786, 121916);
    $InitializeEvent(6, 31812810, Magic,       2055559117, 18787, 121917);
    $InitializeEvent(7, 31812810, Lightning,   2055559118, 18788, 121918);
    $InitializeEvent(8, 31812810, Holy,        2055559119, 18789, 121919);
    //$InitializeEvent(9, 31812810, 6001, 0, 121900); // Testing only, comment out on release
    $InitializeEvent(0, 31812811); // Phase 2
    
    // Return to shrine
    $InitializeEvent(0, 31812840, Quality,     61, 46, 45, 0, 2046451700);
    $InitializeEvent(1, 31812840, Strength,    61, 44, 48, 0, 2044481700);
    $InitializeEvent(2, 31812840, Dexterity,   61, 48, 42, 0, 2048421700);
    $InitializeEvent(3, 31812840, Nonspecific, 61, 50, 43, 0, 2050431700);
    $InitializeEvent(4, 31812840, Physical,    61, 46, 47, 0, 2046471700);
    $InitializeEvent(5, 31812840, Fire,        61, 54, 39, 0, 2054391700);
    $InitializeEvent(6, 31812840, Magic,       61, 50, 45, 0, 2050451700);
    $InitializeEvent(7, 31812840, Lightning,   61, 48, 40, 0, 2048401700);
    $InitializeEvent(8, 31812840, Holy,        61, 50, 48, 0, 2050481700);
    
    $InitializeEvent(0, 31812830, PrefightBarrier, 200, 120); // Prefight Barrier
    $InitializeEvent(0, 31812860);
    
    $InitializeEvent(0, 31812870);
});


$Event(50, Default, function() {
    $InitializeEvent(0, 31812820); // Fight active fight sync
});

// ---------------------------------------------------------------------------
// Basics
// ---------------------------------------------------------------------------

// Boss Death
$Event(31812800, Restart, function() {
    EndIf(EventFlag(BossDefeated));
    WaitFor(HPRatio(BossEntityId) <= 0);
    
    SetEventFlagID(MusicP1, OFF); // In case of boss instakilled
    //SetEventFlagID(MusicPhaseChange, OFF); // In case of boss instakilled
    //SetEventFlagID(MusicP2, OFF);
    //SetEventFlagID(MusicDeath, ON);
    
    WaitFixedTimeSeconds(6);
    HandleBossDefeatAndDisplayBanner(31810800, TextBannerType.LegendFelled);
    SetSpEffect(10000, 3450);
    SetEventFlagID(BossDefeated, ON);
    
    WaitFixedTimeSeconds(4);
    //SetEventFlagID(MusicDeath, OFF);
});

// Boss Initalizaiton
$Event(31812810, Restart, function(typeEventFlag, encounteredFlag, typeSpEffect, bossName) {
    EndIf(!EventFlag(typeEventFlag));
    if (EventFlag(BossDefeated)) {
        DisableCharacter(BossEntityId);
        DisableCharacterCollision(BossEntityId);
        SetCharacterBackreadState(BossEntityId, true);
        ForceCharacterDeath(BossEntityId, false);
        EndEvent();
    }
    
    EnableCharacterInvincibility(BossEntityId);
    DisableCharacterAI(BossEntityId);
    DisableCharacterHPBarDisplay(BossEntityId);
    SetSpEffect(BossEntityId, typeSpEffect);
    
    IssueShortWarpRequest(BossEntityId, TargetEntityType.Area, 31812801, -1);
    ForceAnimationPlayback(BossEntityId, 30000, true, false, false);
    WaitFor(InArea(20000, 31812800));
    SetEventFlagID(encounteredFlag, ON);
    ForceAnimationPlayback(BossEntityId, 20010, true, false, false);
    //WaitFixedTimeFrames(30);
    //RotateCharacter(BossEntityId, 20000, -1, false);
    
    DisableCharacterInvincibility(BossEntityId);
    DisableAsset(PrefightBarrier);
    EnableCharacterAI(BossEntityId);
    SetEventFlagID(MusicP1, ON);
    DisplayBossHealthBar(Enabled, BossEntityId, 0, bossName);
    SetNetworkUpdateRate(BossEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// Return to overworld
$Event(31812840, Default, function(typeEventFlag, area, block, region, index, spawnpointRegion) {
    EndIf(!EventFlag(typeEventFlag));
    WaitFor(EventFlag(BossDefeated));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(32811840, 190, 1300);
    }
    
    WaitFor(ActionButtonInArea(9290, 32811840));
            
    DisplayGenericDialogAndSetEventFlags(4100, PromptType.YESNO, NumberofOptions.TwoButtons, 32811840, 3, 2055552841, 6001, 6001);
    if (!EventFlag(2055552841)) {
        SetEventFlagID(6001, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ForceAnimationPlayback(20000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    
    WarpPlayer(area, block, region, index, spawnpointRegion, 60);
    //SetPlayerRespawnPoint(spawnpointRegion);
    SaveRequest();
    RestartEvent();
});


// ---------------------------------------------------------------------------
// Phase Two
// ---------------------------------------------------------------------------

// Phase Two Initalization
$Event(31812811, Restart, function() {
    EndIf(EventFlag(BossDefeated));
    
    WaitFor(CharacterHasSpEffect(BossEntityId, 18770));
    EndIf(CharacterDead(BossEntityId));
    //SetEventFlagID(MusicPhaseChange, ON);
    
    //WaitFor(CharacterHasSpEffect(BossEntityId, 999999)); // Might not use a track to change between the two but just in case it's here already
    //SetEventFlagID(MusicPhaseChange, OFF);
    //SetEventFlagID(MusicP1, OFF);
    EndIf(CharacterDead(BossEntityId));
    //SetEventFlagID(MusicP2, ON);
});


// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

// Ensure bossfight active flag is on while in map
$Event(31812820, Restart, function() {
    WaitFor(!EventFlag(FightActive))
    SetNetworkconnectedEventFlagID(FightActive, ON);
    RestartEvent();
});

// Pre fight barrier
$Event(31812830, Default, function(assetEntityId, dummypolyId, sfxId) {
    DisableNetworkSync();
    if (EventFlag(2055552700)) {
        dmg = HasDamageType(assetEntityId, 20000, DamageType.Unspecified);
        WaitFor(PlayerIsInOwnWorld() && (ElapsedSeconds(0.5) || dmg));
        RestartIf(dmg.Passed);
        DeleteAssetfollowingSFX(assetEntityId, true);
    }
    
    WaitFor(PlayerIsInOwnWorld() && HasDamageType(assetEntityId, 20000, DamageType.Unspecified));
    CreateAssetfollowingSFX(assetEntityId, dummypolyId, sfxId);
    SetEventFlagID(2055552700, ON);
    RestartEvent();
});

// GParam change shadow grab
$Event(31812860, Default, function() {
    EndIf(EventFlag(BossDefeated));
    WaitFor(CharacterHasSpEffect(BossEntityId, 13433));
    ActivateGparamOverride(100, 0.5);
    
    WaitFor(!CharacterHasSpEffect(BossEntityId, 13433));
    DeactivateGparamOverride(1.0);
    
    RestartEvent();
});

// Music
$Event(31812870, Default, function() {
    if (EventFlag(Quality))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Strength))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Dexterity))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Nonspecific))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Physical))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Fire))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Magic))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Lightning))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
    else if (EventFlag(Holy))
        InitializeCommonEvent(0, 9005822, 2055550800, 393400, 2055552810, 2055552810, 0, 2055552812, 0, 0);
});
