// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1038480000, 1038481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 1038480800, 1038480001, 1038480951, 1038481951, 1084227584); //guardian grace
    //InitializeCommonEvent(0, 90005870, 1038480800, 904810601, 18);
    //InitializeCommonEvent(0, 90005860, 1038480800, 0, 1038480800, 0, 30200, 0);
    InitializeEvent(0, 1038482580, 0);
    InitializeCommonEvent(0, 90005683, 62201, 1038481684, 209, 78290, 78290);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1038480750, 1038480725, 1038480800);
    InitializeCommonEvent(0, 90005876, 1038480800, 1038480804, 903805300, 920400); //Smaller Activation Region
    InitializeCommonEvent(0, 90005875, 1038480800, 30200, 920400);
    InitializeCommonEvent(0, 90005890, 1038480800, 1038480801, 1038480801);
    InitializeCommonEvent(0, 90005891, 1038480800, 1038480801, 1038480802);
    InitializeEvent(0, 1038482582, 0); //Second Phase Handler
    InitializeEvent(0, 98005303, 1038480801, 1038480803);
    InitializeEvent(0, 98005304, 1038480801, 1038480803);
    
    //Mystic Huntress Summon Attacks Initialization
    InitializeEvent(0, 1038482581, 0);
    
    //Spirit Animal Handler
    InitializeEvent(0, 1038482583, 0);
    
    //Spirit Animal Fadeout Initialization (Entity ID, Animation ID, Time in Seconds)
    InitializeEvent(0, 1038482584, 1038480220, 20004); //Boar 1 Fade Away (Idle)
    InitializeEvent(1, 1038482584, 1038480221, 20005); //Deer 1 Fade Away (Alert)
    InitializeEvent(2, 1038482584, 1038480222, 20004); //Deer 2 Fade Away (Idle)
    InitializeEvent(3, 1038482584, 1038480223, 20006); //Goat 1 Fade Away (Idle)
    InitializeEvent(4, 1038482584, 1038480224, 20004); //Deer 3 Fade Away (Idle)
    InitializeEvent(5, 1038482584, 1038480225, 20005); //Deer 4 Fade Away (Alert)
    InitializeEvent(6, 1038482584, 1038480226, 20005); //Deer 5 Fade Away (Alert)
    InitializeEvent(7, 1038482584, 1038480227, 20007); //Goat 2 Fade Away (Alert)
    InitializeEvent(8, 1038482584, 1038480228, 20005); //Boar 2 Fade Away (Sleep)
    InitializeEvent(9, 1038482584, 1038480230, 20009); //Wolf 1 Fade Away (Hunched)
    InitializeEvent(10, 1038482584, 1038480231, 20008); //Wolf 2 Fade Away (Lying)
    InitializeEvent(11, 1038482584, 1038480232, 20003); //Squirrel 1 Fade Away (Idle)
    InitializeEvent(12, 1038482584, 1038480233, 20004); //Squirrel 2 Fade Away (Nibble)
    InitializeEvent(13, 1038482584, 1038480234, 20003); //Squirrel 3 Fade Away (Idle)
    
    //Red Wolf 2 Fadeout Initialization
    InitializeEvent(0, 1038482585, 0);
    
    //Mystic Huntress Sound Dummies (Entity ID)
    InitializeEvent(0, 1038482586, 1038480235); //Depraved Perfumer
    InitializeEvent(1, 1038482586, 1038480236); //Ancestral Follower Shaman
    InitializeEvent(2, 1038482586, 1038480237); //Rellana, Twin Moon Knight
    
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038480700, true);
    InitializeCommonEvent(0, 90005261, 1038480200, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480201, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480202, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480203, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480204, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480205, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480206, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480207, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480208, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480209, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480210, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480211, 1038482200, 0, 1065353216, 1705);
});

$Event(1038482580, Default, function() {
    RegisterLadder(1038480580, 1038480581, 1038481580);
    RegisterLadder(1038480582, 1038480583, 1038481582);
    RegisterLadder(1038480584, 1038480585, 1038481584);
});

// Mystic Huntress Summon Attacks (copied from Caimar's wolves)
// Red Wolf 1 Entity ID: 1038480810
// Mystic Huntress Entity ID: 1038480800
$Event(1038482581, Restart, function() {
    DisableLockOnPoint(1038480810, 220); //removed red wolf 1 lock-on point
    DisableCharacterGravity(1038480810); //disable red wolf 1 gravity
    DisableCharacterCollision(1038480810); //disable red wolf 1 collision (problematic with current map, requires investigation)
    DisableCharacter(1038480810); //disable red wolf 1
    EndIf(EventFlag(1038480800)); //end if mystic huntress is dead
    DisableNetworkSync(); //for seamless coop
    EnableCharacterImmortality(1038480810); //enable red wolf 1 immortality
    WaitFor(CharacterHasSpEffect(1038480800, 11748)); //wait for mystic huntress to use summon attack
    EnableCharacter(1038480810); //enable red wolf 1
    SetNetworkUpdateRate(1038480810, true, CharacterUpdateFrequency.AlwaysUpdate); //red wolf 1 rendering at higher framerate
    EnableCharacterAI(1038480810); //enabled red wolf 1 ai
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(1038480810, TargetEntityType.Character, 1038480800, 246, 1038480800); //New Dami poli created: 246
    RotateCharacter(1038480810, 10000, 3024, false); //rotate towards player and play unique summon anim 3024
    ForceAnimationPlayback(1038480810, 3024, false, false, false, 0, 1); //necessary additional animation playback as rotatecharacter does not play the animation (requires investigation as this behavior is not consistent)
    WaitFor(CharacterHasSpEffect(1038480810, 11748)); //speffect in 3024
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(1038480810, 11748)); //same speffect in 3024
    RestartEvent();
});

// Second Phase handler (needs rework as the boss does not have a second phase)
$Event(1038482582, Restart, function() {
   if (EventFlag(1038480800)) { //if boss dead
       DisableCharacter(1038480810); //disable red wolf 1
       DisableCharacterCollision(1038480810); //disable red wolf 1 collision
       ForceCharacterDeath(1038480810, false); //red wolf 1 dead
       EndEvent();
   }
   
   SetNetworkUpdateAuthority(1038480800, AuthorityLevel.Forced); //Seamless
   SetNetworkUpdateAuthority(1038480810, AuthorityLevel.Forced); //Seamless
   SpawnMapSFX(1038480820); //braziers ignited initial
   SpawnMapSFX(1038480823); //braziers ignited initial
   SpawnMapSFX(1038480824); //braziers ignited initial
   SpawnMapSFX(1038480827); //braziers ignited initial
   
   WaitFor(EventFlag(1038480800)); //wait for mystic huntress death
   
   DeleteMapSFX(1038480820, false); //braziers removed after death
   DeleteMapSFX(1038480823, false); //braziers removed after death
   DeleteMapSFX(1038480824, false); //braziers removed after death
   DeleteMapSFX(1038480827, false); //braziers removed after death
   
   EndEvent();
});

// Spirit Animal Handler
$Event(1038482583, Restart, function() {
    if (EventFlag(1038480800)) { //if boss dead
        DisableCharacter(1038480220); //Remove all spirit animals if Huntress is dead
        DisableCharacter(1038480221);
        DisableCharacter(1038480222);
        DisableCharacter(1038480223);
        DisableCharacter(1038480224);
        DisableCharacter(1038480225);
        DisableCharacter(1038480226);
        DisableCharacter(1038480227);
        DisableCharacter(1038480228);
        DisableCharacter(1038480229);
        DisableCharacter(1038480230);
        DisableCharacter(1038480231);
        DisableCharacter(1038480232);
        DisableCharacter(1038480233);
        DisableCharacter(1038480234);
    }
    
    EnableCharacterInvincibility(1038480220); //Prevent spirit animal contact
    EnableCharacterInvincibility(1038480221);
    EnableCharacterInvincibility(1038480222);
    EnableCharacterInvincibility(1038480223);
    EnableCharacterInvincibility(1038480224);
    EnableCharacterInvincibility(1038480225);
    EnableCharacterInvincibility(1038480226);
    EnableCharacterInvincibility(1038480227);
    EnableCharacterInvincibility(1038480228);
    EnableCharacterInvincibility(1038480229);
    EnableCharacterInvincibility(1038480230);
    EnableCharacterInvincibility(1038480231);
    EnableCharacterInvincibility(1038480232);
    EnableCharacterInvincibility(1038480233);
    EnableCharacterInvincibility(1038480234);
    ForceAnimationPlayback(1038480220, 0, true, false, true, 0, 1); //Boar 1 Idle
    ForceAnimationPlayback(1038480221, 20, true, false, true, 0, 1); //Deer 1 At Attention
    ForceAnimationPlayback(1038480222, 0, true, false, true, 0, 1); //Deer 2 Idle
    ForceAnimationPlayback(1038480223, 0, true, false, true, 0, 1); //Goat 1 Idle
    ForceAnimationPlayback(1038480224, 0, true, false, true, 0, 1); //Deer 3 Idle
    ForceAnimationPlayback(1038480225, 20, true, false, true, 0, 1); //Deer 4 At Attention
    ForceAnimationPlayback(1038480226, 20, true, false, true, 0, 1); //Deer 5 At Attention
    ForceAnimationPlayback(1038480227, 20, true, false, true, 0, 1); //Goat 2 At Attention
    ForceAnimationPlayback(1038480228, 12000, true, false, true, 0, 1); //Boar 2 At Attention
    //ForceAnimationPlayback(1038480229, 30002, true, false, true, 0, 1); //Red Wolf 2 Sitting (Handled by idle anim)
    ForceAnimationPlayback(1038480230, 30001, true, false, true, 0, 1); //Wolf 1 Hunched
    ForceAnimationPlayback(1038480231, 30000, true, false, true, 0, 1); //Wolf 2 Lying
    ForceAnimationPlayback(1038480232, 20, true, false, true, 0, 1); //Squirrel 1 Idle
    ForceAnimationPlayback(1038480233, 20007, true, false, true, 0, 1); //Squirrel 2 Nibble
    ForceAnimationPlayback(1038480234, 20, true, false, true, 0, 1); //Squirrel 3 Idle
    DisableCharacterAI(1038480220); //Prevent spirit animal interruption
    DisableCharacterAI(1038480221);
    DisableCharacterAI(1038480222);
    DisableCharacterAI(1038480223);
    DisableCharacterAI(1038480224);
    DisableCharacterAI(1038480225);
    DisableCharacterAI(1038480226);
    DisableCharacterAI(1038480227);
    DisableCharacterAI(1038480228);
    DisableCharacterAI(1038480229);
    DisableCharacterAI(1038480230);
    DisableCharacterAI(1038480231);
    DisableCharacterAI(1038480232);
    DisableCharacterAI(1038480233);
    DisableCharacterAI(1038480234);
});

//Spirit Animals Fadeout (Entity ID, Animation ID, Time in Seconds)
$Event(1038482584, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1038480800)); //boss dead
    WaitFor(InArea(10000, 1038480804)); //Wait for near boss
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1); //Entity ID play Animation ID, no loop, no wait
    WaitFixedTimeFrames(52); //Opacity reaches zero in tae
    DisableCharacter(X0_4); //disable Entity ID
});

//Red Wolf 2 Fadeout
$Event(1038482585, Restart, function() {
    EndIf(EventFlag(1038480800)); //boss dead
    DisableLockOnPoint(1038480229, 220); //removed red wolf 2 lock-on point
    WaitFor(InArea(10000, 1038480804)); //Wait for near boss
    ForceAnimationPlayback(1038480229, 20003, false, false, false, 0, 1); //Red Wolf 2 play Fade Away (Roar), no loop, no wait
    WaitFixedTimeFrames(137); //Opacity reaches zero in tae
    DisableCharacter(1038480229); //disable Red Wolf 2
});

//Mystic Huntress Sound Dummies (Enitity ID)
$Event(1038482586, Restart, function(X0_4) {
    DisableCharacter(X0_4);
});
