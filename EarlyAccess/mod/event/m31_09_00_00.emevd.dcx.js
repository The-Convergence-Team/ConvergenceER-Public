// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31090000, 31091950, 0, 0, 0, 5);
    InitializeEvent(0, 31092800, 0); //Boss Death Handler
    InitializeEvent(0, 31092810, 0); //Boss Initialization Handler
    InitializeEvent(0, 31092849, 0); //Boss Events
    InitializeEvent(0, 31092811, 0); //Phase 2 Music Handler
    InitializeCommonEvent(0, 900005610, 31091200, 100, 800, 0);
    InitializeCommonEvent(0, 90005261, 31090200, 31092200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090201, 30001, 20001, 31092201, 1065353216, 1068708659, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090202, 30002, 20002, 31092201, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090203, 30000, 20000, 31092201, 1065353216, 1070386381, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090205, 30000, 20000, 31092201, 1065353216, 1072064102, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090214, 30002, 20002, 31092214, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090215, 30002, 20002, 31092214, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090218, 30001, 20001, 31092214, 1065353216, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090251, 30002, 20002, 31092214, 1065353216, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31090254, 31092254, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090256, 30002, 20002, 31092256, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 31092301, 31090227, 1065353216);
    InitializeEvent(1, 31092301, 31090258, 1056964608);
    InitializeEvent(2, 31092301, 31090301, 1065353216);
    InitializeCommonEvent(0, 90005261, 31090350, 31092350, 1073741824, 0, 0);
    InitializeEvent(0, 31092350, 0);
    InitializeEvent(0, 31092351, 0);
    InitializeEvent(0, 31092300, 0);
    InitializeCommonEvent(0, 90005646, 31090800, 31092840, 31092841, 31091840, 31092840, 2335); //Return to Cave Entrance
    InitializeEvent(0, 31092850, 0); //Second Phase Summoning Handler
    
    //Individual Summons Defeat Handler
    InitializeEvent(0, 31092812, 31090810, 3035); //Dog 1 Disable on hp = 0
    InitializeEvent(1, 31092812, 31090811, 3035); //Dog 2 Disable on hp = 0
    InitializeEvent(2, 31092812, 31090812, 3035); //Dog 3 Disable on hp = 0
    InitializeEvent(3, 31092812, 31090813, 20005); //Goat 1 Disable on hp = 0
    InitializeEvent(4, 31092812, 31090814, 20005); //Goat 2 Disable on hp = 0
    InitializeEvent(5, 31092812, 31090815, 20005); //Goat 3 Disable on hp = 0
    InitializeEvent(6, 31092812, 31090816, 20005); //Goat 4 Disable on hp = 0
    InitializeEvent(7, 31092812, 31090817, 20005); //Goat 5 Disable on hp = 0
    
    //Shadow Box Handler
    InitializeEvent(0, 31092813, 0);
});

$Event(31092300, Restart, function() {
    EndIf(CharacterDead(31090300));
    EndIf(SpecialStandbyEndedFlag(31090300));
    DisableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 30002, false, false, false);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || EntityInRadiusOfEntity(31090300, 10000, 3, 1)
            || InArea(10000, 31092301)
            || ((CharacterHasSpEffect(31090300, 481)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90110)
                && !CharacterHasSpEffect(31090300, 90160))
                || (CharacterHasSpEffect(31090300, 482)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90120)
                    && !CharacterHasSpEffect(31090300, 90160)
                    && !CharacterHasSpEffect(31090300, 90162))
                || (CharacterHasSpEffect(31090300, 483)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90140)
                    && !CharacterHasSpEffect(31090300, 90160)
                    && !CharacterHasSpEffect(31090300, 90161))
                || (CharacterHasSpEffect(31090300, 484)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90130)
                    && !CharacterHasSpEffect(31090300, 90161)
                    && !CharacterHasSpEffect(31090300, 90162))
                || (CharacterHasSpEffect(31090300, 487)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90150)
                    && !CharacterHasSpEffect(31090300, 90160))));
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 20002, false, false, true);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(31090300, ON);
});

$Event(31092301, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4) || ThisEventSlot());
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || AssetDestroyed(31091550, Equal, 1)
            || AssetDestroyed(31091551, Equal, 1)
            || AssetDestroyed(31091552, Equal, 1)
            || AssetDestroyed(31091553, Equal, 1)
            || AssetDestroyed(31091554, Equal, 1)
            || AssetDestroyed(31091555, Equal, 1)
            || AssetDestroyed(31091556, Equal, 1)
            || AssetDestroyed(31091557, Equal, 1)
            || AssetDestroyed(31091558, Equal, 1)
            || EntityInRadiusOfEntity(X0_4, 10000, 3, 1)
            || InArea(10000, 31092301)
            || ((CharacterHasSpEffect(X0_4, 481)
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
                    && !CharacterHasSpEffect(X0_4, 90160))));
    WaitFixedTimeSeconds(X4_4);
    EnableCharacterAI(X0_4);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31092350, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(!CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    SetSpEffect(31090350, 8081);
    RestartEvent();
});

$Event(31092351, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    ClearSpEffect(31090350, 8081);
    RestartEvent();
});

//Boss Death Handler
$Event(31092800, Restart, function() {
    EndIf(EventFlag(31090800));
    WaitFor(CharacterHPValue(31090800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31090800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31090800));
    HandleBossDefeatAndDisplayBanner(31090800, TextBannerType.EnemyFelled);
    SetEventFlagID(31090800, ON);
    SetEventFlagID(9240, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61240, ON);
    }
});

//Boss Initialization Handler
$Event(31092810, Restart, function() {
    if (EventFlag(31090800)) {
        DisableCharacter(31090800);
        DisableCharacterCollision(31090800);
        ForceCharacterDeath(31090800, false); //boss dead
        ForceCharacterDeath(31090810, false); //dog 1 dead
        ForceCharacterDeath(31090811, false); //dog 2 dead
        ForceCharacterDeath(31090812, false); //dog 3 dead
        EndEvent();
    }
L0:
    DisableCharacterAI(31090800); //boss lobotomized
    DisableCharacter(31090810); //dog 1 disabled
    DisableCharacter(31090811); //dog 2 disabled
    DisableCharacter(31090812); //dog 3 disabled
    DisableCharacterAI(31090810); //dog 1 ai disabled
    DisableCharacterAI(31090811); //dog 2 ai disabled
    DisableCharacterAI(31090812); //dog 3 ai disabled
    EnableCharacterInvincibility(31090810); //dog 1 invincible
    EnableCharacterInvincibility(31090811); //dog 2 invincible
    EnableCharacterInvincibility(31090812); //dog 3 invincible
    EnableCharacterInvincibility(31090800); //boss invincible
    WaitFor(EventFlag(31092805) && InArea(10000, 31092800)); //player enters boss chamber
L2:
    EnableCharacterAI(31090800); //boss ai turned on
    DisableCharacterInvincibility(31090800); // boss vincible
    SetNetworkUpdateRate(31090800, true, CharacterUpdateFrequency.AlwaysUpdate); //update priority on boss
    DisplayBossHealthBar(Enabled, 31090800, 0, 904810654); //boss healthbar appears
    
    WaitFor(CharacterHasSpEffect(31090800, 11714)); //wait for initial summoning animation 3008
    
    WaitFixedTimeFrames(60);
   
    EnableCharacter(31090810); //dog 1 enabled
    EnableCharacter(31090811); //dog 2 enabled
    EnableCharacter(31090812); //dog 3 enabled
    EnableCharacterAI(31090810); //dog 1 ai enabled
    EnableCharacterAI(31090811); //dog 2 ai enabled
    EnableCharacterAI(31090812); //dog 3 ai enabled
    SetNetworkUpdateRate(31090810, true, CharacterUpdateFrequency.AlwaysUpdate); //dog 1 always update
    SetNetworkUpdateRate(31090811, true, CharacterUpdateFrequency.AlwaysUpdate); //dog 2 always update
    SetNetworkUpdateRate(31090812, true, CharacterUpdateFrequency.AlwaysUpdate); //dog 3 always update
    IssueShortWarpRequest(31090810, TargetEntityType.Character, 31090800, 242); //dog 1 warped to boss dami poli 242
    IssueShortWarpRequest(31090811, TargetEntityType.Character, 31090800, 244); //dog 2 warped to boss dami poli 244
    IssueShortWarpRequest(31090812, TargetEntityType.Character, 31090800, 245); //dog 3 warped to boss dami poli 245
    RotateCharacter(31090810, 10000, 20002, false); //rotate dog 1 to player (need new unique anim and behavior for turn speed enabled)
    RotateCharacter(31090811, 10000, 20002, false); //rotate dog 2 to player
    RotateCharacter(31090812, 10000, 20002, false); //rotate dog 3 to player
    TriggerAISound(1030, 10000, 2);
   
    WaitFixedTimeFrames(50);
   
    DisableCharacterInvincibility(31090810); //dog 1 vincible
    DisableCharacterInvincibility(31090811); //dog 2 vincible
    DisableCharacterInvincibility(31090812); //dog 3 vincible
});

//Phase 2 Music Handler
$Event(31092811, Restart, function() {
    EndIf(EventFlag(31090800));
    WaitFor(HPRatio(31090800) <= 0.6);
    SetEventFlagID(31092802, ON);
});

//Individual Dog/Goat Summons Defeat Handler
$Event(31092812, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(31090800));
    WaitFor((CharacterHPValue(X0_4) <= 1) || EventFlag(31090800)); //Wait for dog/goat health reaches 1 or when boss dies
    ForceAnimationPlayback(X0_4, X4_4, true, true, false); //dog/goat vanish anim
    WaitFor(CharacterHasSpEffect(X0_4, 14573)); //speffect at the end of the vanish anim tae
    EnableCharacterInvincibility(X0_4);
    DisableCharacter(X0_4);
});

//Shadow Box Handler
$Event(31092813, Restart, function() {
    WaitFor(InArea(10000, 31092814, 1));
    DisableAsset(31092815);
    WaitFor(!InArea(10000, 31092814, 1));
    EnableAsset(31092815);
    RestartEvent();
});   

//Boss Events
$Event(31092849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31090800, 31091800, 31092800, 31092805, 31095800, 10010, 0, 0);
    InitializeCommonEvent(0, 9005801, 31090800, 31091800, 31092800, 31092805, 31092806, 10010);
    InitializeCommonEvent(0, 9005811, 31090800, 31091800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31090800, 920400, 31092805, 31092806, 0, 31092802, 0, 0); //Music Handler
});

// Second Phase Summoning Handler
$Event(31092850, Restart, function() {
   if (EventFlag(31090800)) { //if boss dead
       ForceCharacterDeath(31090813, false); //goat 1 dead
       ForceCharacterDeath(31090814, false); //goat 2 dead
       ForceCharacterDeath(31090815, false); //goat 3 dead
       ForceCharacterDeath(31090816, false); //goat 4 dead
       ForceCharacterDeath(31090817, false); //goat 5 dead
       DisableCharacterAI(31090813); //goat 1 ai disabled
       DisableCharacterAI(31090814); //goat 2 ai disabled
       DisableCharacterAI(31090815); //goat 3 ai disabled
       DisableCharacterAI(31090816); //goat 4 ai disabled
       DisableCharacterAI(31090817); //goat 5 ai disabled
       DisableAsset(31095151); //Disable unlit torches
       EnableAsset(31095150); //Enable lit torches
       EndEvent();
   }
    
   DisableCharacter(31090813); //goat 1 disabled
   DisableCharacter(31090814); //goat 2 disabled
   DisableCharacter(31090815); //goat 3 disabled
   DisableCharacter(31090816); //goat 4 disabled
   DisableCharacter(31090817); //goat 5 disabled
   DisableCharacterAI(31090813); //goat 1 ai disabled
   DisableCharacterAI(31090814); //goat 2 ai disabled
   DisableCharacterAI(31090815); //goat 3 ai disabled
   DisableCharacterAI(31090816); //goat 4 ai disabled
   DisableCharacterAI(31090817); //goat 5 ai disabled
   EnableCharacterInvincibility(31090813); //dog 1 invincible
   EnableCharacterInvincibility(31090814); //dog 2 invincible
   EnableCharacterInvincibility(31090815); //dog 3 invincible
   EnableCharacterInvincibility(31090816); //dog 2 invincible
   EnableCharacterInvincibility(31090817); //dog 3 invincible
   DisableAsset(31095150); //Disable lit torches
   EnableAsset(31095151); //Enable unlit torches
   
   WaitFor(CharacterHasSpEffect(31090800, 11713)); //Phase transitiion in middle of anim 3007
   
   DisableAsset(31095151); //Disable unlit torches
   EnableAsset(31095150); //Enable lit torches
   
   WaitFixedTimeFrames(60);
   
   EnableCharacter(31090813); //goat 1 enabled
   EnableCharacter(31090814); //goat 2 enabled
   EnableCharacter(31090815); //goat 3 enabled
   EnableCharacter(31090816); //goat 4 enabled
   EnableCharacter(31090817); //goat 5 enabled
   EnableCharacterAI(31090813); //goat 1 ai enabled
   EnableCharacterAI(31090814); //goat 2 ai enabled
   EnableCharacterAI(31090815); //goat 3 ai enabled
   EnableCharacterAI(31090816); //goat 4 ai enabled
   EnableCharacterAI(31090817); //goat 5 ai enabled
   SetNetworkUpdateRate(31090813, true, CharacterUpdateFrequency.AlwaysUpdate); //goat 1 always update
   SetNetworkUpdateRate(31090814, true, CharacterUpdateFrequency.AlwaysUpdate); //goat 2 always update
   SetNetworkUpdateRate(31090815, true, CharacterUpdateFrequency.AlwaysUpdate); //goat 3 always update
   SetNetworkUpdateRate(31090816, true, CharacterUpdateFrequency.AlwaysUpdate); //goat 4 always update
   SetNetworkUpdateRate(31090817, true, CharacterUpdateFrequency.AlwaysUpdate); //goat 5 always update
   IssueShortWarpRequest(31090813, TargetEntityType.Character, 31090800, 245); //goat 1 warped to boss dami poli 245
   IssueShortWarpRequest(31090814, TargetEntityType.Character, 31090800, 246); //goat 2 warped to boss dami poli 246
   IssueShortWarpRequest(31090815, TargetEntityType.Character, 31090800, 247); //goat 3 warped to boss dami poli 247
   IssueShortWarpRequest(31090816, TargetEntityType.Character, 31090800, 242); //goat 4 warped to boss dami poli 242
   IssueShortWarpRequest(31090817, TargetEntityType.Character, 31090800, 244); //goat 5 warped to boss dami poli 244
   RotateCharacter(31090813, 10000, 20004, false); //rotate goat 1 to player and play summon anim
   RotateCharacter(31090814, 10000, 20004, false); //rotate goat 2 to player and play summon anim
   RotateCharacter(31090815, 10000, 20004, false); //rotate goat 3 to player and play summon anim
   RotateCharacter(31090816, 10000, 20004, false); //rotate goat 4 to player and play summon anim
   RotateCharacter(31090817, 10000, 20004, false); //rotate goat 5 to player and play summon anim
   TriggerAISound(1030, 10000, 2);
   
   WaitFixedTimeFrames(50);
   
   DisableCharacterInvincibility(31090813); //goat 1 vincible
   DisableCharacterInvincibility(31090814); //goat 2 vincible
   DisableCharacterInvincibility(31090815); //goat 3 vincible
   DisableCharacterInvincibility(31090816); //goat 4 vincible
   DisableCharacterInvincibility(31090817); //goat 5 vincible
});
