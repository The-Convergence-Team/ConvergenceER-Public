// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    // bonfire duh
    RegisterBonfire(301900, 30191950, 0, 0, 0, 5);
    // Entrance door
    InitializeCommonEvent(0, 900005610, 30191150, 100, 800, 0);
    InitializeCommonEvent(0, 91005600, 30192800, 30191695, 5);
    // Bridge Event
    InitializeEvent(0, 30190010, 0);
    // Gate
    InitializeCommonEvent(0, 90005540, 30190161, 30191162, 30191161, 30191232, -1, 1, 2);
    InitializeCommonEvent(0, 90005540, 30190171, 30191172, 30191171, 30191242, -1, 21, 10);
    // Custom Killbox
    InitializeCommonEvent(0, 9005999, 30192001);
    // Disable Collision
    DisableHit(30191201);
    DisableHit(30191202);
    // Collision Replacer
    DisableMapPart(30191203);
    DisableMapPart(30191204);
    DisableMapPart(30191205);
    DisableMapPart(30191206);
    DisableMapPart(30191207);
    DisableMapPart(30191208);
    DisableMapPart(30191209);
    DisableMapPart(30191210);
    DisableMapPart(30191211);
    //Ladders
    RegisterLadder(30190430, 30190431, 30191131);
    RegisterLadder(30190432, 30190433, 30191132);
    RegisterLadder(30190434, 30190435, 30191133);
    RegisterLadder(30190436, 30190437, 30191134);
    RegisterLadder(30190438, 30190439, 30191135);
    InitializeCommonEvent(0, 90005520, 30190440, 30191136, 30190441, 30190442);
    //Generic Ambush | Slime bois
    InitializeEvent(0, 30190030, 30191010, 30192010, 1700);
    InitializeEvent(1, 30190030, 30191011, 30192011, 1700);
    InitializeEvent(2, 30190030, 30191012, 30192011, 1700);
    //Snek Bridge Ambush
    InitializeEvent(0, 30190050, 0);
    //Malfunctioning Platform for ladder
    InitializeEvent(0, 30190060, 0);
    //Destructible Wall Secret
    InitializeEvent(0, 30190070, 0);
    
    // Boss Stuff
    InitializeCommonEvent(0, 90005646, 30190800, 30192840, 30192841, 30191840, 30192840, 4894); // TP to start after boss death
    InitializeEvent(0, 30192800, 0); // Boss Defeat
    InitializeEvent(0, 30192801, 0); // Boss Init
    InitializeEvent(0, 30192811, 0); // Phase two music
    InitializeEvent(0, 30192849, 0); // Fogwalls and Music
});

$Event(30190010, Restart, function() {
    if (!EventFlag(30190181)) {
        ForceAnimationPlayback(30191101, 10, false, false, false);
        ForceAnimationPlayback(30191102, 10, false, false, false);
        ForceAnimationPlayback(30191103, 10, false, false, false);
        ForceAnimationPlayback(30191104, 10, false, false, false);
        ForceAnimationPlayback(30191105, 10, false, false, false);
        ForceAnimationPlayback(30191106, 10, false, false, false);
        ForceAnimationPlayback(30191107, 10, false, false, false);
        ForceAnimationPlayback(30191108, 10, false, false, false);
        ForceAnimationPlayback(30191109, 10, false, false, false);
        ForceAnimationPlayback(30191110, 10, false, false, false);
        ForceAnimationPlayback(30191111, 10, false, false, false);
        ForceAnimationPlayback(30191112, 10, false, false, false);
        ForceAnimationPlayback(30191113, 10, false, false, false);
        ForceAnimationPlayback(30191114, 10, false, false, false);
        ForceAnimationPlayback(30191115, 10, false, false, false);
        
        ForceAnimationPlayback(30191121, 10, false, false, false);
        ForceAnimationPlayback(30191122, 10, false, false, false);
        
        DisableAsset(30191301);
        DisableAsset(30191302);
        DisableAsset(30191303);
        DisableAsset(30191304);
        DisableAsset(30191305);
        DisableAsset(30191306);
        DisableAsset(30191307);
    }
    else {
        EnableAsset(30191301);
        EnableAsset(30191302);
        EnableAsset(30191303);
        EnableAsset(30191304);
        EnableAsset(30191305);
        EnableAsset(30191306);
        EnableAsset(30191307);
        DisableMapPart(30191301);
        DisableMapPart(30191302);
        DisableMapPart(30191303);
        DisableMapPart(30191304);
        DisableMapPart(30191305);
        DisableMapPart(30191306);
        DisableMapPart(30191307);
        DisableObjAct(30191163, 30191234);
        EndEvent();
    }

    WaitFor(ObjActEventFlag(30191234));
    SetEventFlagID(30190181, ON);
    DisableObjAct(30191163, 30191234);
    
    WaitFixedTimeFrames(80);
    InitializeEvent(0, 30190020, 30191101, 120);
    InitializeEvent(1, 30190020, 30191102, 30);
    InitializeEvent(2, 30190020, 30191103, 80);
    InitializeEvent(3, 30190020, 30191104, 150);
    InitializeEvent(4, 30190020, 30191105, 120);
    InitializeEvent(5, 30190020, 30191106, 210);
    InitializeEvent(6, 30190020, 30191107, 350);
    InitializeEvent(7, 30190020, 30191108, 300);
    InitializeEvent(8, 30190020, 30191109, 380);
    InitializeEvent(9, 30190020, 30191110, 500);
    InitializeEvent(10, 30190020, 30191111, 440);
    InitializeEvent(11, 30190020, 30191112, 400);
    InitializeEvent(12, 30190020, 30191113, 460);
    InitializeEvent(13, 30190020, 30191114, 510);
    InitializeEvent(14, 30190020, 30191115, 540);    
    InitializeEvent(15, 30190020, 30191122, 25);
    
    WaitFixedTimeFrames(900);
    EnableAsset(30191301);
    EnableAsset(30191302);
    EnableAsset(30191303);
    EnableAsset(30191304);
    EnableAsset(30191305);
    EnableAsset(30191306);
    EnableAsset(30191307);
    DisableMapPart(30191301);
    DisableMapPart(30191302);
    DisableMapPart(30191303);
    DisableMapPart(30191304);
    DisableMapPart(30191305);
    DisableMapPart(30191306);
    DisableMapPart(30191307);
    EndEvent();
});

// Platform Raise || AssetID, Time
$Event(30190020, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(X4_4);
    SetCameraVibration(102, TargetEntityType.Character, 10000, -1, 1, 5);
    SpawnOneshotSFX(TargetEntityType.Asset, X0_4, 211, 816060);
    ForceAnimationPlayback(X0_4, 12, false, false, false);
    WaitFixedTimeFrames(30);
    SetCameraVibration(102, TargetEntityType.Character, 10000, -1, 1, 5);
    WaitFixedTimeFrames(120);
    SpawnOneshotSFX(TargetEntityType.Asset, X0_4, 211, 816060);
    EndEvent();
});

// Generic Ambush || EntityID, AreaID
$Event(30190030, Restart, function(X0_4, X4_4, X8_4) {
    // If player attacked we just end it
    if (HasDamageType(X0_4, 10000, 0)){
        EndEvent();
    }
    
    WaitFor(InArea(10000, X4_4));
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    EndEvent();
});

//Snek bridge ambush
$Event(30190050, Restart, function() {
    DisableCharacter(30191026);
    DisableCharacter(30191027);
    DisableCharacter(30191028);
    
    //Check for bridge
    WaitFor(EventFlag(30190181) && InArea(10000, 30192021));
    EnableCharacter(30191026);
    EnableCharacter(30191027);
    EnableCharacter(30191028);
    EndEvent();
});

//Malfunctioning Platform for Ladder
$Event(30190060, Restart, function() {
    WaitFor(EventFlag(30190181));
    ForceAnimationPlayback(30191121, 21, false, false, false);
    WaitFixedTimeSeconds(12);
    ForceAnimationPlayback(30191121, 12, false, false, false);
    WaitFixedTimeSeconds(12);
    RestartEvent();
});

//Destructible Wall Secret
$Event(30190070, Restart, function() {
    if (!EventFlag(30190182)) {
        DisableCharacterAI(30191044); // Disable scarab AI
        EnableCharacterImmortality(30191044);
        WaitFor(HasDamageType(30191044, 10000, 1));
        SpawnOneshotSFX(TargetEntityType.Asset, 30191145, -1, 529116);
        SpawnOneshotSFX(TargetEntityType.Asset, 30191146, -1, 529116);
        ForceCharacterDeath(30191044, false);
        WaitFixedTimeFrames(5);
        SpawnOneshotSFX(TargetEntityType.Asset, 30191145, -1, 529116);
        SpawnOneshotSFX(TargetEntityType.Asset, 30191146, -1, 529116);
        WaitFixedTimeFrames(15);
        DisableAsset(30191144);
        SetEventFlagID(30190182, ON);
    }
    else
    {
        DisableCharacter(30191044);
        DisableAsset(30191144);
        EndEvent();
    }
});

// Boss Defeat
$Event(30192800, Restart, function() {
    EndIf(EventFlag(30190800));
    WaitFor(CharacterHPValue(30190800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30190800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30190800));
    HandleBossDefeatAndDisplayBanner(30190800, TextBannerType.EnemyFelled);
    SetEventFlagID(30190800, ON);
    SetEventFlagID(9219, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61219, ON);
    }
});

// Boss Init
$Event(30192801, Restart, function() {
    if (EventFlag(30190800)) {
        DisableCharacter(30190800);
        DisableCharacterCollision(30190800);
        ForceCharacterDeath(30190800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30190800);
    WaitFor(EventFlag(30192805) && InArea(10000, 30192800));
L2:
    EnableCharacterAI(30190800);
    SetNetworkUpdateRate(30190800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30190800, 0, 903400302);
});

// Phase two music flag
$Event(30192811, Restart, function() {
    EndIf(EventFlag(30190800));
    WaitFor(HPRatio(30190800) <= 0.6);
    SetEventFlagID(30192802, ON);
});

// Fogwalls and Music
$Event(30192849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30190800, 30191151, 30192800, 30192805, 30195800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30190800, 30191151, 30192800, 30192805, 30192806, 10000);
    InitializeCommonEvent(0, 9005811, 30190800, 30191151, 0, 0);
    InitializeCommonEvent(0, 9005813, 30190800, 30191152, 20, 0, 20);
    InitializeCommonEvent(0, 9005813, 30190800, 30191153, 20, 0, 20);
    InitializeCommonEvent(0, 9005813, 30190800, 30191154, 20, 0, 20);
    InitializeCommonEvent(0, 9005813, 30190800, 30191155, 20, 0, 20);
    InitializeCommonEvent(0, 9005822, 30190800, 930000, 30192805, 30192806, 0, 30192802, 0, 0);
});
