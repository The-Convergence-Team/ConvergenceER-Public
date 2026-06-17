// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    //Graces
    RegisterBonfire(17000000, 17001950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 17000850, 17000001, 17000951, 17001951, 5);
    InitializeCommonEvent(1, 9005810, 17000800, 17000002, 17000952, 17001952, 5);
    //Misc Setups
    InitializeEvent(0, 17000000, 0);
    //Anti-Horse Fog VFX
    InitializeCommonEvent(0, 900005610, 17001681, 100, 800, 0);
    
    //Elevators
    InitializeEvent(0, 17003500, 0);
    //Elevator A
    InitializeCommonEvent(0, 90005501, 17000510, 17000511, 3, 17001510, 17001511, 17001512, 17000512);
    //Elevator B
    InitializeCommonEvent(1, 90005501, 17000515, 17000516, 3, 17001515, 17001516, 17001517, 17000517);
    //Elevator C
    InitializeCommonEvent(2, 90005501, 17000520, 17000521, 9, 17001520, 17001521, 17001522, 17000522);
    //Elevator D
    InitializeCommonEvent(2, 90005501, 17000525, 17000526, 6, 17001525, 17001526, 17001527, 17000527);
    //Elevator E
    InitializeCommonEvent(2, 90005501, 17000530, 17000531, 7, 17001530, 17001531, 17001532, 17000532);
    
    //Hidden Staircase
    InitializeEvent(0, 17003501, 0);
    
    //Ladders
    InitializeEvent(0, 17002550, 0);
    
    //Ambient VFX - Interior Check
    InitializeEvent(0, 17002560, 0);
    
    //Mimics
    InitializeEvent(0, 17002570, 17000620);
    InitializeEvent(0, 17002571, 17001620, 17000620, 517000620);
    
    //Jumpscare Corpses
    InitializeEvent(0, 17002580, 17000630, 0, 17001630);
    
    //Automatic Doors
    InitializeEvent(0, 17002590, 17000640, 17000640, 17001640);
    InitializeEvent(1, 17002590, 17000641, 17000641, 17001641);
    InitializeEvent(2, 17002590, 17000643, 17000643, 17001643);
    InitializeEvent(3, 17002590, 17000644, 17000644, 17001644);
    //Husk Automatic Door
    InitializeEvent(0, 17002591, 17000642, 17000642, 17001642);
    //Locked Prompt
    InitializeEvent(0, 17000698, 17000641, 17000641);
    InitializeEvent(1, 17000698, 17000642, 17000642);
    InitializeEvent(2, 17000698, 17000644, 17000644);
    
    //One-way Doors
    InitializeCommonEvent(0, 90005515, 17008644, 17001644);
    
    //Ball Jumpscare
    InitializeEvent(0, 17002595, 0);
    InitializeCommonEvent(0, 90005300, 17008501, 17000500, 0, 0, 0);
    $InitializeEvent(0, 17002597);
    
    //Bridge Ball Ambush
    InitializeEvent(0, 17002596, 0);
    
    // Bridge Tesla
    InitializeEvent(0, 17005150, 0);
    InitializeEvent(0, 17005151, 0);
    
    // Cagehead Weakspot
    InitializeEvent(0, 17000660, 17000302, 17000303, 17000304, 17000305);
    InitializeEvent(1, 17000660, 17000306, 17000307, 17000308, 17000309);
    
    // Statue Puzzle
    InitializeEvent(0, 17000695, 17000670, 17001670);
    InitializeEvent(1, 17000695, 17000671, 17001671);
    InitializeEvent(2, 17000695, 17000672, 17001672);
    InitializeEvent(3, 17000695, 17000673, 17001673);
    InitializeEvent(4, 17000695, 17000674, 17001674);
    InitializeEvent(5, 17000695, 17000675, 17001675);
    InitializeEvent(0, 17000696, 0);
    InitializeEvent(0, 17000697, 0);
    
    //Basic Ambush
    //// EnemyID, RegionID, AnimationID, Disabled from start? (BOOL), Fall Damage? (BOOL), Wait Time
    
    InitializeEvent(0, 17005255, 17000300, 17001300, 3006);           //Silvertear
    InitializeEvent(1, 17005255, 17000312, 17001312, -1);             //Silvertear
    InitializeEvent(2, 17005255, 17000371, 17001371, 1830, 1, 0, 0);  //Nox
    InitializeEvent(3, 17005255, 17000372, 17001371, 1830, 1, 0, 30); //Nox
    InitializeEvent(4, 17005255, 17000373, 17001372, 1830, 1, 0, 30); //Nox
    InitializeEvent(5, 17005255, 17000374, 17001374, 1830, 1, 0, 30); //Nox
    
    //Jump Ambush
    InitializeEvent(0, 17005260, 17000310, 17001310, 17001311);
    
    //Advanced Ambush
    InitializeCommonEvent(0, 90005200, 17000301, 30000, 20000, 17001301, 0, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005200, 17000313, 30000, 20000, 17001313, 0, 0, 0, 0, 0);
    
    //Mine Trap
    InitializeEvent(0, 17005250, 17000400);
    InitializeEvent(1, 17005250, 17000401);
    InitializeEvent(2, 17005250, 17000402);
    InitializeEvent(3, 17005250, 17000403);
    InitializeEvent(4, 17005250, 17000404);
    InitializeEvent(5, 17005250, 17000405);
    InitializeEvent(6, 17005250, 17000406);
    InitializeEvent(7, 17005250, 17000407);
    
    //Daergraf Scripts
    InitializeEvent(0, 17002800, 0); // Death
    InitializeEvent(0, 17002810, 0); // Init
    InitializeEvent(0, 17002811, 0); // Second Phase
    InitializeEvent(0, 17002820, 0); // Init
    
    InitializeEvent(0, 17002462, 0); // Walkup camera pan
    
    // Silver Tear Boss Scripts
    InitializeEvent(0, 17000849, 0); // Fogwalls
    InitializeEvent(0, 17000853, 0); // Init
    InitializeEvent(0, 17000854, 0); // Death
    InitializeEvent(0, 17000855, 0); // Stance Break Animation Looper
    InitializeEvent(0, 17000856, 0); // Stance Break Recover
    InitializeEvent(0, 17000857, 0); // Stance Break Trigger
    InitializeEvent(0, 17000858, 17002860, 17002861); // Stance Break Crawl to Zone (Zone 1)
    InitializeEvent(1, 17000858, 17002861, 17002860);
    InitializeEvent(2, 17000858, 17002862, 17002864);
    InitializeEvent(3, 17000858, 17002863, 17002864); // Zone 2
    InitializeEvent(4, 17000858, 17002864, 17002859);
    InitializeEvent(5, 17000858, 17002865, 17002858);
    InitializeEvent(6, 17000858, 17002866, 17002854); // Zone 3
    InitializeEvent(7, 17000858, 17002867, 17002863);
    InitializeEvent(8, 17000858, 17002868, 17002862);
    InitializeEvent(9, 17000858, 17002869, 17002857); // Zone 4
    InitializeEvent(10, 17000858, 17002870, 17002856);
    InitializeEvent(11, 17000858, 17002871, 17002855);
    
    // LOD stuff
    InitializeEvent(0, 17002460, 0);
    InitializeEvent(0, 17002461, 0);
});

$Event(50, Default, function() {
});

//Misc Setups
$Event(17000000, Default, function() {
    //SetCurrentTime(16, 30, 0, false, true, false, 0, 0, 0);
    //FreezeTime(true);
});

//Elevators
$Event(17003500, Default, function() {
    if (!EventFlag(17008530)) {
        SetEventFlagID(17008530, ON); // One time event
        SetEventFlagID(17000530, ON); // Shortcut 1 Elevator Up Position
        SetEventFlagID(17000520, ON); // Shortcut 2 Elevator Up Position
    }
    
    
    InitializeCommonEvent(0, 90005500, 17000510, 17000511, 3, 17001510, 17001511, 17003511, 17001512, 17003512, 17002511, 17002512, 17000512, 17000513, 0);
    InitializeCommonEvent(1, 90005500, 17000515, 17000516, 3, 17001515, 17001516, 17003516, 17001517, 17003517, 17002516, 17002517, 17000517, 17000518, 0);
    InitializeCommonEvent(2, 90005500, 17000520, 17000521, 9, 17001520, 17001521, 17003521, 17001522, 17003522, 17002521, 17002522, 17000522, 17000523, 0);
    InitializeCommonEvent(3, 90005500, 17000525, 17000526, 6, 17001525, 17001526, 17003526, 17001527, 17003527, 17002526, 17002527, 17000527, 17000528, 0);
    InitializeCommonEvent(4, 90005500, 17000530, 17000531, 7, 17001530, 17001531, 17003531, 17001532, 17003532, 17002531, 17002532, 17000532, 17000533, 0);
});

//Hidden Staircase
$Event(17003501, Restart, function() {
    if (EventFlag(17000850)) {
        ReproduceAssetAnimation(17001540, 2);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(17000850) && InArea(10000, 17002540, 0));
    ForceAnimationPlayback(17001540, 1, false, false, false);
});

//Ladders
$Event(17002550, Default, function() {
    RegisterLadder(17000550, 17000551, 17001550);
    RegisterLadder(17000552, 17000553, 17001551);
    RegisterLadder(17000554, 17000555, 17001552);
});

//Ambient VFX - Interior Check
$Event(17002560, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!InArea(10000, 17001560) && !InArea(10000, 17001561));
    SpawnMapSFX(17000560);
    WaitFor(InArea(10000, 17001560) || InArea(10000, 17001561));
    DeleteMapSFX(17000560, true);
    RestartEvent();
});

//Mimics
$Event(17002570, Restart, function(X0_4) {
    WaitFor(
        CharacterHasSpEffect(X0_4, 11706)
        && ActionButtonInArea(8100, X0_4)
            && !CharacterType(10000, TargetType.BlackPhantom));
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Character, X0_4, 100, 10000);
    RotateCharacter(10000, X0_4, -1, false);
    ForceAnimationPlayback(10000, 60080, false, false, false, 0, 1);
    ForceAnimationPlayback(X0_4, 3000, false, false, false, 0, 1);
    RestartEvent();
});

$Event(17002571, Restart, function(X0_4, X4_4, X8_4) {
    ClearSpEffect(10000, 4800);
    SetEventFlag(0, X0_4, OFF);
    if (EventFlag(X0_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterAIState(X4_4, Disabled);
        if (!EventFlag(X8_4)) {
            ForceCharacterTreasure(X4_4);
        }
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X4_4));
    SetEventFlag(0, X0_4, ON);
});

$Event(17002580, Restart, function(X0_4, X4_4, X8_4) {
    //if (!EventFlag(X4_4)) {
    WaitFor(ActionButtonInArea(8100, X0_4)) 
        ForceAnimationPlayback(X0_4, 200, true, false, true, 0, 1);
        //WaitFor(EventFlag(X4_4));
        WaitFixedTimeSeconds(0.1);
        PlaySE(17002630, SoundType.CharacterMotion, 432008010);
        ForceAnimationPlayback(X0_4, 201, false, true, false, 0, 1);
        //SetEventFlag(X8_4, ON);
L0:
    ForceAnimationPlayback(X0_4, 202, true, false, false, 0, 1);
    EndEvent();
});

//Automatic Doors
$Event(17002590, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4)) {
        WaitFor(AssetBackread(X4_4, Equal, 1));
        ReproduceAssetAnimation(X4_4, 2);
        EndEvent();
    }
L0:
    WaitFor(AssetBackread(X4_4, Equal, 1) && InOutsideArea(InsideOutsideState.Inside, 10000, X8_4, 1));
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
});

//Husk Automatic Door
$Event(17002591, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4) && EventFlag(17000850)) {
        WaitFor(AssetBackread(X4_4, Equal, 1));
        ReproduceAssetAnimation(X4_4, 2);
        EndEvent();
    }
L0:
    WaitFor(AssetBackread(X4_4, Equal, 1) && InOutsideArea(InsideOutsideState.Inside, 10000, X8_4, 1) && EventFlag(17000850));
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
});

// Ball Wall Burst Jumpscare
$Event(17002595, Restart, function() {
    //SetEventFlag(TargetEventFlagType.EventFlag, 17008500, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 17008501, OFF);
    if (EventFlag(17008500) || EventFlag(17008501)) {
        
        DisableAsset(17001500); // Burst Wall
        DisableAsset(17001501); // Sitting Loot Corpse
        DisableAsset(17001504);
        DisableAsset(17001502); // Sitting Loot Corpse Chair
        DisableAsset(17001505); // Stocks
        if (!EventFlag(17008501)) {
            WaitFixedTimeRealFrames(1);
            WarpCharacterAndCopyFloor(17000500, 1, 17002501, -1, 17001503);
        }
        EndEvent();
    }
    
    DisableAsset(17001503); // Flattened Loot Corpse
    DisableHit(17001504);
    EnableCharacterInvincibility(17000500);
    WaitFor(InArea(10000, 17002500));
    WaitFixedTimeSeconds(1.5); // Artificial Delay to enhance unexpected timing
    
    //DisableHit(17001500); // Disable Burst Wall Collision
    ForceAnimationPlayback(17000500, 20001, false, false, true);
    DisableCharacterInvincibility(17000500);
    WaitFixedTimeFrames(3); // Time before wall crumbles
    
    RequestAssetDestruction(17001500, 0);
    WaitFixedTimeFrames(2);
    DisableAsset(17001504);
    SetEventFlagID(17008500, ON);
    
    WaitFixedTimeFrames(10); // Time before loot corpse is flattened
    EnableAsset(17001503);
    RequestAssetDestruction(17001502, 0);
    DisableAsset(17001501);
});

// Bridge Ball Ambush
$Event(17002596, Restart, function() {
    DisableCharacterAI(17000501);
    WaitFor(InArea(10000, 17002502, 1));
    EnableCharacterAI(17000501);
    ForceAnimationPlayback(17000501, 20003, false, false, false);
    EndEvent();
});

// Bridge Ball Loot corpse
$Event(17002597, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(17007390));
    
    if (!EventFlag(17008500))
        CreateAssetfollowingSFX(17001501, 90, 6102); // Sitting
    
    WaitFor(ActionButtonInArea(4000, 17001501) || EventFlag(17008500));
    if (!EventFlag(17008500))
        DeleteAssetfollowingSFX(17001501, true);
    else {
        WaitFixedTimeFrames(10);
        DeleteAssetfollowingSFX(17001501, false);
        CreateAssetfollowingSFX(17001503, 90, 6102); // Sitting
        WaitFor(ActionButtonInArea(4000, 17001503));
        DeleteAssetfollowingSFX(17001503, true);
    }
    AwardItemLot(17000390);
});

// Daergraf Scripts
// Death
$Event(17002800, Restart, function() {
    EndIf(EventFlag(17000800));
    
    WaitFor(CharacterHPValue(17000810) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(17000810, SoundType.SFX, 888880000);
    
    WaitFor(CharacterDead(17000810));
    HandleBossDefeatAndDisplayBanner(17000810, TextBannerType.LegendFelled);
    SetEventFlagID(17000800, ON);
    SetBossBGM(393300, BossBGMState.Stop1);
    SetEventFlagID(9192, ON);
});

// Init Daergraf
$Event(17002810, Restart, function() {
    //SetEventFlag(0, 17000800, OFF);
    //SetEventFlag(0, 17000801, OFF);
    if (EventFlag(17000800)) {
        DisableCharacter(17000800);
        DisableCharacter(17000810);
        DisableCharacterCollision(17000800);
        DisableCharacterCollision(17000810);
        ForceCharacterDeath(17000800, false);
        ForceCharacterDeath(17000810, false);
        EndEvent();
    }
    
    DisableCharacterAI(17000800);
    EnableCharacterInvincibility(17000800);
    EnableCharacterImmortality(17000800);
    DisableCharacter(17000810);
    DisableCharacterCollision(17000810);
    DisableCharacterFadeOnEnable(17000810);
    
    if (!EventFlag(17000801)) {
        SetAssetInvulnerability(17001801, Enabled);
        DisableHit(17001801);
        DisableLockOnPoint(17000800, 220);
        IssueShortWarpRequest(17000800, 1, 17002803, -1);
        ForceAnimationPlayback(17000800, 30000, true, false, false);
        WaitFor(InArea(10000, 17002801));
        ForceAnimationPlayback(17000800, 20010, false, false, false);
        EnableLockOnPoint(17000800, 220);
        SetEventFlagID(17000801, ON);
        WaitFixedTimeSeconds(3.5);
        EnableHit(17001801);
        SetAssetInvulnerability(17001801, Disabled);
    }
    else {
        WaitFor(EventFlag(17002805) && InArea(10000, 17002800));
    }
    
    EnableCharacterAI(17000800);
    EnableCharacterCollision(17000810);
    DisableCharacterInvincibility(17000800);
    EnableCharacterImmortality(17000800);
    SetNetworkUpdateRate(17000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(17000810, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 17000800, 0, 902036010);
});

// Second Phase
$Event(17002811, Restart, function() {
    EndIf(EventFlag(17000800));
    WaitFor(HPRatio(17000800) <= 0.01 && !CharacterHasSpEffect(17000800, 16981) && HasDamageType(17000800, 0, DamageType.Unspecified));
    ForceAnimationPlayback(17000800, 20000, false, false, false);
    DisplayBossHealthBar(Disabled, 17000800, 0, 902036010);
    DisableCharacterHPBarDisplay(17000800);
    WaitFor(CharacterHasSpEffect(17000800, 16972, 0, 1));
    EnableCharacter(17000810);
    EnableCharacterCollision(17000810);
    WarpCharacterAndCopyFloor(17000810, TargetEntityType.Character, 17000800, 900, 17000800);
    ForceAnimationPlayback(17000810, 20000, false, false, true);
    DisableCharacter(17000800);
    DisplayBossHealthBar(Enabled, 17000810, 0, 902036011);
    SetEventFlagID(17002802, ON); //Phase 2 Music
});

// Fogwalls
$Event(17002820, Restart, function() {
    InitializeCommonEvent(0, 9005800, 17000800, 17001800, 17002800, 17002805, 17005800, 10000, 17000801, 17002801);
    InitializeCommonEvent(0, 9005801, 17000800, 17001800, 17002800, 17002805, 17002806, 10000);
    InitializeCommonEvent(0, 9005811, 17000800, 17001800, 22, 17000801);
    InitializeCommonEvent(0, 9005822, 17000800, 393300, 17002805, 17002806, 0, 17002802, 0, 0);
});

// Silver Tear Boss Script
// Fogwalls
$Event(17000849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 17000850, 17001850, 17002870, 17002855, 17005850, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 17000850, 17001850, 17002870, 17002855, 17002856, 10000);
    InitializeCommonEvent(0, 9005811, 17000850, 17001850, 21, 0);
    InitializeCommonEvent(0, 9005822, 17000850, 391300, 17002855, 17002856, 0, 0, 0, 0);
});
    
// Init Husk
$Event(17000853, Restart, function() {
    //SetEventFlag(0, 17000850, OFF);
    DisableCharacterAI(17000852);
    if (EventFlag(17000850)) {
        DisableCharacter(17000850);
        DisableCharacter(17000851);
        DisableCharacter(17000852);
        DisableCharacterAI(17000850);
        DisableCharacterAI(17000851);
        ForceCharacterDeath(17000850, false);
        ForceCharacterDeath(17000851, false);
        ForceCharacterDeath(17000852, false);
        DisableCharacterDefaultBackread(17000850);
        DisableCharacterDefaultBackread(17000851);
        DisableCharacterDefaultBackread(17000852);
        EndEvent();
    }
    
    DisableCharacterCollision(17000852);
    DisableCharacterGravity(17000852);
    
    SetNetworkUpdateRate(17000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(17000851, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(17000852, true, CharacterUpdateFrequency.AlwaysUpdate);
    
    ForceAnimationPlayback(17000850, 30001, true, false, true);
    CreateReferredDamagePair(17000850, 17000852);
    CreateReferredDamagePair(17000851, 17000852);
    
    DisableLockOnPoint(17000850, 220);
    DisableCharacterAI(17000851);
    DisableCharacterHPBarDisplay(17000851);
    EnableCharacterImmortality(17000851);
    
    DisableCharacterAI(17000850);
    DisableCharacterHPBarDisplay(17000850);
    
    if (!EventFlag(17000861)) {
        WaitFor(InArea(10000, 17002873));
        SetEventFlagID(17000861, ON);
    }
    else {
        WaitFor(EventFlag(17002855) || EntityInRadiusOfEntity(20000, 17000850, 5, 1));
    }
    
    ForceAnimationPlayback(17000850, 20000, false, false, true);
    EnableLockOnPoint(17000850, 220);
    EnableCharacterAI(17000850);
    DisplayBossHealthBar(Enabled, 17000852, 1, 902036020);
});

// Death
$Event(17000854, Restart, function() {
    EndIf(EventFlag(17000850));
    EnableCharacterImmortality(17000850);
    EnableCharacterImmortality(17000851);
    WaitFor(HPRatio(17000852) <= 0);// && CharacterHasSpEffect(17000850, 10466, Equal, 1) && HasDamageType(17000850, 20000, DamageType.Unspecified));
    
    DisableCharacterImmortality(17000850);
    DisableCharacterImmortality(17000851);
    ForceCharacterDeath(17000850, true);
    ForceCharacterDeath(17000851, false);
    ForceCharacterDeath(17000852, false);
    
    WaitFixedTimeSeconds(4);
    // Music Disable Flag Here
    PlaySE(17000850, SoundType.SFX, 888880000);
    
    WaitFor(CharacterDead(17000850));
    HandleBossDefeatAndDisplayBanner(17000850, TextBannerType.GreatEnemyFelled);
    
    SetSpEffect(10000, 3450);
    SetEventFlagID(17000850, ON);
    SetEventFlagID(9193, ON);
    EndEvent();
});

// Stance Break Animation Looper
$Event(17000855, Restart, function() {
    EndIf(EventFlag(17000850));
    WaitFor(CharacterHasSpEffect(17000850, 10460) || EventFlag(17002859));
    SetEventFlagID(17002859, ON);
    ForceAnimationPlayback(17000850, 30000, true, false, false);
    WaitFor(CharacterHasSpEffect(17000850, 10465) || !EventFlag(17002859));
    RestartEvent();
});

// Stance Break Recover
$Event(17000856, Restart, function() {
    EndIf(EventFlag(17000850));
    WaitFor(EventFlag(17002859));
    WaitFor(!EventFlag(17002859));
    
    ForceAnimationPlayback(17000850, 20020, false, false, false); // Boss - Recover
    WaitFor(CharacterHasSpEffect(17000850, 10466));
    
    ClearSpEffect(17000850, 18684); // No damage taken
    ClearSpEffect(17000850, 5300); // No stag
    ClearSpEffect(17000850, 5602); // No poise dmg
    EnableLockOnPoint(17000850, 220);
    EnableCharacterAI(17000850);
    SetSpEffect(17000850, 10462); // Request attack count reset
    RestartEvent();
});

// Stance Break Trigger
$Event(17000857, Restart, function() {
    EndIf(EventFlag(17000850));
    WaitFor(CharacterHasSpEffect(17000850, 10461));
    
    SetSpEffect(17000850, 18684); // No damage taken
    SetSpEffect(17000850, 5300); // No stag
    SetSpEffect(17000850, 5602); // No poise dmg
    DisableLockOnPoint(17000850, 220);
    DisableCharacterAI(17000850);
    
    //Position Check
    if (InArea(17000850, 17002852))
        RandomlySetEventFlagInRange(17002860, 17002862, ON);
    else if (InArea(17000850, 17002850))
        RandomlySetEventFlagInRange(17002863, 17002865, ON);
    else if (InArea(17000850, 17002853))
        RandomlySetEventFlagInRange(17002866, 17002868, ON);
    else if (InArea(17000850, 17002851))
        RandomlySetEventFlagInRange(17002869, 17002871, ON);
    RestartEvent();
});


// Silver Tear Retreat and Heal
$Event(17000858, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(17000850));
    
    IssueShortWarpRequest(17000851, TargetEntityType.Area, 17002872, -1);
    DisableCharacter(17000851);
    DisableCharacterGravity(17000851);
    DisableHit(17000851);

    WaitFor(EventFlag(X0_4));
    
    EnableCharacter(17000851);
    IssueShortWarpRequest(17000851, TargetEntityType.Area, X4_4, -1);
    ForceAnimationPlayback(17000851, 3001, false, true, true);
    SetSpEffect(17000852, 10469);
    WaitFixedTimeSeconds(2);
    EnableHit(17000851);
    EnableLockOnPoint(17000851, 220);
    
    WaitFor(!CharacterHasSpEffect(17000852, 10469) || HasDamageType(17000851, 20000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(17000852, 10469) || HasDamageType(17000851, 20000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(17000852, 10469) || HasDamageType(17000851, 20000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(17000852, 10469) || HasDamageType(17000851, 20000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(17000852, 10469) || HasDamageType(17000851, 20000, DamageType.Unspecified));
    ClearSpEffect(17000852, 10469);
    DisableLockOnPoint(17000851, 220);
    ForceAnimationPlayback(17000851, 3000, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableHit(17000851);
    SetEventFlag(0, X0_4, OFF)
    SetEventFlagID(17002859, OFF);
    
    RestartEvent();
});

// Tesla Coil Init
$Event(17005150, Restart, function() {
    //SetEventFlagID(17008150, OFF);
    if (EventFlag(17008150)) {
        DisableAsset(17001151);
        DisableAsset(17001152);
        DisableAsset(17001154);
        DisableCharacter(17000150);
        EnableCharacterInvincibility(17000150);
        SetNetworkUpdateRate(17000150, false, CharacterUpdateFrequency.NoUpdate);
        EndEvent();
    }
    
    DisableCharacter(17000150);
    EnableCharacterInvincibility(17000150);
    DisableAsset(17001152);
    DisableAsset(17001153);
    DisableAsset(17001154);
    PlaySE(17001151, SoundType.SFX, 302133);
    SetNetworkUpdateRate(17000150, true, CharacterUpdateFrequency.AlwaysUpdate);
    SpawnMapSFX(17002154);
    //CreateAssetfollowingSFX(17001150, 100, 621510);
    
    if (EventFlag(57)) { // NG+ 7
        SetSpEffect(1038490200, 16637);
    } else if (EventFlag(56)) { // NG+ 6 
        SetSpEffect(1038490200, 16636);
    } else if (EventFlag(55)) { // NG+ 5
        SetSpEffect(1038490200, 16635);
    } else if (EventFlag(54)) { // NG+ 4
        SetSpEffect(1038490200, 16634);
    } else if (EventFlag(53)) { // NG+ 3
        SetSpEffect(1038490200, 16633);
    } else if (EventFlag(52)) { // NG+ 2
        SetSpEffect(1038490200, 16632);
    } else if (EventFlag(51)) { // NG+
        SetSpEffect(1038490200, 16631);
    } else { // NG
        SetSpEffect(1038490200, 16630);
    }
    
    EnableAsset(17001154);
    WaitFor(AssetDestroyed(17001151));
    SetCameraVibration(65, 0, 17001151, -1, 1, 10);
    SpawnMapSFX(17002151);
    SetAssetInvulnerability(17001152, Enabled);
    EnableAsset(17001152);
    //CreateAssetfollowingSFX(17002152, -1, 817005);
    WaitFixedTimeFrames(2);
    DisableAsset(17001151);
    
    WaitFixedTimeFrames(30);
    SetAssetInvulnerability(17001152, Disabled);
    WaitFor(AssetDestroyed(17001152));
    SetCameraVibration(66, 0, 17001151, -1, 1, 10);
    DeleteMapSFX(17002151, true);
    SpawnOneshotSFX(TargetEntityType.Area, 17002151, -1, 817006);
    SetAssetInvulnerability(17001153, Enabled);
    EnableAsset(17001153);
    WaitFixedTimeFrames(2);
    DisableAsset(17001152);
    DisableAsset(17001154);
    DeleteAssetfollowingSFX(17001150, true);
    DeleteMapSFX(17002154, true);
    
    SetNetworkUpdateRate(17000150, false, CharacterUpdateFrequency.NoUpdate);
    DisableCharacter(17000150);
    SetEventFlagID(17008150, ON);
});

// Tesla Coil Shooting - Behaviour
$Event(17005151, Restart, function() {
    WaitFor(InArea(10000, 17002150) || EventFlag(17008150));
    EndIf(EventFlag(17008150));
    SpawnMapSFX(17002153);
    PlaySE(17000150, SoundType.CharacterMotion, 452006002);
    //WaitRandomTimeSeconds(0, 0.5);
    //DeleteAssetfollowingSFX(17001150, true);
    
    WaitFixedTimeSeconds(2);
    WaitFixedTimeSeconds(0.5);
    //WaitFixedTimeSeconds(0.5);
    DeleteMapSFX(17002153, true);
    SpawnOneshotSFX(2, 17000150, 220, 817002);
    PlaySE(17000150, SoundType.CharacterMotion, 452006105);
    EnableCharacter(17000150);
    
    WaitFixedTimeSeconds(0.1);
    DisableCharacter(17000150);
    //CreateAssetfollowingSFX(17001150, 100, 621510);
    
    WaitRandomTimeSeconds(0.25, 0.65);
    
    RestartEvent();
});

// Mine trap - Crate
$Event(17005250, Default, function(X0_4) {
    EndIf(AssetDestroyed(X0_4));
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 25, 1));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(X0_4, 100, 817010);
        CreateBulletOwner(17000151);
        DisableMapPart(X0_4);
        SetThisEventSlot(ON);
    }

    attackedMine |= AssetDestroyed(X0_4);
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 1.5, 1) || attackedMine);

    if (!attackedMine.Passed) {
        SpawnOneshotSFX(TargetEntityType.Asset, X0_4, 100, 817011);
        WaitFor(ElapsedSeconds(0.5));
        if (!EntityInRadiusOfEntity(20000, X0_4, 2, 1))
            RestartEvent();
        RequestAssetDestruction(X0_4, 0);
    }

    DeleteAssetfollowingSFX(X0_4, true);
    ShootBullet(17000151, X0_4, -1, 201200220, 0, 0, 0);
    EndEvent();
});

//Ambush
$Event(17005255, Restart, function(enemyID, regionID, animID, disabledBool, noFallBool, delayInt) {
    if (disabledBool != 0) //Disable from the Start
    {
        DisableCharacter(enemyID);
    }
    DisableCharacterAI(enemyID);
    if (HasDamageType(enemyID, 10000, 0)){
        EnableCharacterAI(enemyID);
        EndEvent();
    }
    WaitFor(InArea(10000, regionID));
    if (noFallBool != 0) //Disable Fall damage
    {
        SetSpEffect(enemyID, 4085);
    }
    if (delayInt != 0) //Wait Timer
    {
        WaitFixedTimeRealFrames(delayInt);
    }
    EnableCharacter(enemyID);
    EnableCharacterAI(enemyID);
    ForceAnimationPlayback(enemyID, animID, false, true, false);
    EndEvent();
});

//Jump Ambush
$Event(17005260, Restart, function(enemyID, regionID, pointID) {
    DisableCharacterAI(enemyID);
    WaitFor(InArea(10000, regionID) || HasDamageType(enemyID, 10000, 0));
    if (HasDamageType(enemyID, 10000, 0)){
        EnableCharacterAI(enemyID);
        EndEvent();
    }
    EnableCharacterAI(enemyID);
    RequestCharacterAICommand(enemyID, 119, 0); //119 is jumping
    RequestCharacterAIReplan(enemyID);
    SetEventPoint(enemyID, pointID, -1);
    WaitFor(InArea(enemyID, pointID));
    RequestCharacterAICommand(enemyID, -1, 0); //clear jumping
    RequestCharacterAIReplan(enemyID);
    EndEvent();
});

// Breakable Statue Puzzle (Statue Handler)
$Event(17000695, Default, function(eventFlagId, assetEntityId) {
    //SetEventFlag(TargetEventFlagType.EventFlag, eventFlagId, OFF);
    if (EventFlag(eventFlagId)) {
        RequestAssetDestruction(assetEntityId, 0);
        EndEvent();
    }
    
    CreateAssetfollowingSFX(assetEntityId, 100, 490070); // Placeholder VFX and Dummy
    WaitFor(AssetDestroyed(assetEntityId));
    
    DeleteAssetfollowingSFX(assetEntityId, false);
    SetEventFlagID(eventFlagId, ON);
});

// Breakable Statue Puzzle (Door Handler)
$Event(17000696, Default, function(){
    if (AllBatchEventFlags(17000670, 17000675)) { // Placeholder EventFlags
        ReproduceAssetAnimation(17001680, 2);
        EndEvent();
    }
    
    WaitFor(AllBatchEventFlags(17000670, 17000675));
    ForceAnimationPlayback(17001680, 1, false, false, false); // Placeholder EntityId
    DisplayBlinkingMessage(4200);
});

// Breakable Statue Puzzle (Locked Door Prompt)
$Event(17000697, Default, function(){
    DisableNetworkSync();
    WaitFor((PlayerIsInOwnWorld() && ActionButtonInArea(8100, 17001680)) || EventFlag(17000675));
    EndIf(EventFlag(17000675));
    DisplayGenericDialog(4030, PromptType.OKCANCEL, NumberofOptions.OneButton, 17001680, 1);
    RestartEvent();
});

// One-Way Doors (Locked Door Prompt)
$Event(17000698, Default, function(X0_4, X4_4){
    DisableNetworkSync();
    WaitFor((PlayerIsInOwnWorld() && ActionButtonInArea(8100, X4_4)) || EventFlag(X0_4));
    EndIf(EventFlag(X0_4));
    DisplayGenericDialog(4010, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RestartEvent();
});

// Cage Head Break Back Interaction
$Event(17000660, Default, function(enemyEntityId, breakableAssetEntityId1, breakableAssetEntityId2, breakableAssetEntityId3){
    if (CharacterDead(enemyEntityId)) {
        DisableAsset(breakableAssetEntityId1);
        DisableAsset(breakableAssetEntityId2);
        DisableAsset(breakableAssetEntityId3);
        EndEvent();
    }
    WaitFor(EntityInRadiusOfEntity(10000, enemyEntityId, 50, 1));
    RequestAssetRestoration(breakableAssetEntityId1);
    RequestAssetRestoration(breakableAssetEntityId2);
    RequestAssetRestoration(breakableAssetEntityId3);
    DisableAsset(breakableAssetEntityId2);
    DisableAsset(breakableAssetEntityId3);
    
    DisableMapPart(breakableAssetEntityId1);
    SetSpEffect(enemyEntityId, 13441);
    ChangeCharacterDispmask(enemyEntityId, 10, ON);
    ChangeCharacterDispmask(enemyEntityId, 11, OFF);
    AttachAssetToCharacter(enemyEntityId, 40, breakableAssetEntityId1);
    
    // First Hit
    WaitFor(AssetDestroyed(breakableAssetEntityId1));
    DisableAsset(breakableAssetEntityId1);
    SetSpEffect(enemyEntityId, 13442);
    EnableAsset(breakableAssetEntityId2);
    DisableMapPart(breakableAssetEntityId2);
    AttachAssetToCharacter(enemyEntityId, 40, breakableAssetEntityId2);
    
    // Second Hit
    WaitFor(AssetDestroyed(breakableAssetEntityId2) && ElapsedFrames(3));
    DisableAsset(breakableAssetEntityId2);
    SetSpEffect(enemyEntityId, 13442);
    SetSpEffect(enemyEntityId, 14020);
    EnableAsset(breakableAssetEntityId3);
    DisableMapPart(breakableAssetEntityId3);
    AttachAssetToCharacter(enemyEntityId, 40, breakableAssetEntityId3);
    
    // Third Hit
    WaitFor(AssetDestroyed(breakableAssetEntityId3) && ElapsedFrames(3));
    DisableAsset(breakableAssetEntityId3);
    
    ChangeCharacterDispmask(enemyEntityId, 10, OFF);
    ChangeCharacterDispmask(enemyEntityId, 11, ON);
    ClearSpEffect(enemyEntityId, 13441);
    ForceAnimationPlayback(enemyEntityId, 20005, false, false, true);
    
    // Stealth Case
    EndIf(CharacterAIState(enemyEntityId, AIStateType.Combat) || EntityInRadiusOfEntity(20000, enemyEntityId, 20, 1));
    SetCharacterAIId(enemyEntityId, 43421201);
    EndEvent();
});

// Noxumbra LOD unload
$Event(17002460, Restart, function() {
    DisableNetworkSync();
    WaitFor(MapLoaded(61, 46, 40, 0));
    
    DisableAsset(17000570);
    WaitFixedTimeSeconds(2.5); // Sadly has to loop because the timing to the LOD being loaded and thus disabl-able is variable. Timer is so it's not too intense
    
    RestartEvent();
});

// Enir Elim LOD Swap
$Event(17002461, Default, function() {
    //DisableAsset(17001571);
    //DisableAsset(17001572);
    if (EventFlag(330)) // Tree is unsealed
        DisableAsset(17001571);
    else
        DisableAsset(17001572);
});

// Bossroom camera pan
$Event(17002462, Default, function() {
    DisableNetworkSync();
    WaitFor(InArea(10000, 17001645));
    ChangeCamera(4763, 0);
    WaitFor(!InArea(10000, 17001645));
    ChangeCamera(0, 0);
    RestartEvent();
});
