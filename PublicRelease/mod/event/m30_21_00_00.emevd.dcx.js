// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    //Grace Setup
    RegisterBonfire(30210100, 30211950, 0, 0, 0, 0);
    
    //Spike Trap
    // ARGUMENTS: trapID, charID, waitInt
    InitializeEvent(0, 30210002, 30213500, 30209021, 75);
    InitializeEvent(1, 30210002, 30213510, 30209021, 5);
    InitializeEvent(2, 30210002, 30213520, 30209021, 200);
    
    //Bear Traps
    // ARGUMENTS: trapID
    InitializeEvent(0, 30210004, 30211701);
    InitializeEvent(1, 30210004, 30211702);
    InitializeEvent(2, 30210004, 30211703);
    InitializeEvent(3, 30210004, 30211704);
    InitializeEvent(4, 30210004, 30211705);
    InitializeEvent(5, 30210004, 30211706);
    InitializeEvent(6, 30210004, 30211707);
    InitializeEvent(7, 30210004, 30211708);
    InitializeEvent(8, 30210004, 30211709);
    InitializeEvent(9, 30210004, 30211710);
    InitializeEvent(10, 30210004, 30211711);
    InitializeEvent(11, 30210004, 30211712);
    InitializeEvent(12, 30210004, 30211713);
    InitializeEvent(13, 30210004, 30211714);
    InitializeEvent(14, 30210004, 30211715);
    
    //Misc
    InitializeEvent(0, 30210005, 0);
    
    //Trip Wire
    // ARGUMENTS: trapID, regionID
    InitializeEvent(0, 30210006, 30211910, 30211911);
    InitializeEvent(1, 30210006, 30211920, 30211921);
    
    //Ambush Setup
    // ARGUMENTS: enemyID, regionID
    InitializeEvent(0, 30210007, 30211401, 30211980, 90);
    InitializeEvent(1, 30210007, 30211402, 30211980, 90);

    //Ambush Setup with Animation
    // ARGUMENTS: enemyID, regionID, animID, delayInt
    InitializeEvent(0, 30210008, 30212981, 30211981, 3010, 0);
    InitializeEvent(1, 30210008, 30212931, 30211931, 3010, 85);
    InitializeEvent(2, 30210008, 30212932, 30211931, 3010, 35);
    InitializeEvent(3, 30210008, 30212933, 30211931, 3010, 25);
    InitializeEvent(4, 30210008, 30212941, 30211941, 3016, 0);
    InitializeEvent(5, 30210008, 30212982, 30211982, 3010, 0);
    
    //// Boss - Vulgar Militia Chief
    // Boss Defeat
    InitializeEvent(0, 30210009, 0); 
    // Boss Start
    InitializeCommonEvent(0, 90005876, 30200800, 30202800, 904810658, 10000015, 0);
    // Boss Fogwall
    InitializeCommonEvent(0, 9005800, 30200800, 30201800, 30202800, 30202805, -1, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30200800, 30201800, 30202800, 30202805, -1, 10000);
    InitializeCommonEvent(0, 9005811, 30200800, 30201800, 3, 0);
    // Boss Music
    InitializeCommonEvent(0, 9005822, 30200800, 391100, 30202805, 30202806, 0, 30202802, 0, 0);
    //Boss Jump
    InitializeEvent(0, 30210010, 0)
    //Boss SPeffect hit check
    InitializeEvent(0, 30210011, 0)
    //Boars!!!
    InitializeEvent(0, 30210012, 30200820, 400)
    InitializeEvent(1, 30210012, 30200821, 500)
    InitializeEvent(2, 30210012, 30200822, 540)
    //Boss Secondphase check
    InitializeEvent(0, 30210013, 0)
    //Second Phase vulgar earth burst
    InitializeEvent(0, 30210014, 30210951, 30211951, 50);
    InitializeEvent(1, 30210014, 30210952, 30211952, 100);
    InitializeEvent(2, 30210014, 30210953, 30211953, 150);
    //Boss room drawgroup stuff
    InitializeEvent(0, 30210015, 0)
    
    //Mimic
  InitializeCommonEvent(0, 20000352, 30210650);
  InitializeCommonEvent(0, 20000353, 30201650, 30210650, 530200650);
});

$Event(50, Default, function() {
    //Disable the Spike Trap Event at start
    SetEventFlagID(30209020, OFF);
    //Asset Unbreakable
    EnableAssetInvunerability(30211610);
    EnableAssetInvunerability(30211611);
    
    //DrawBridge
    // ARGUMENTS: childID, parentID, eventFlagID, dummyID
    InitializeEvent(0, 30210001, 30211510, 30211511, 30209010, 100, 0);
    InitializeEvent(1, 30210001, 30211520, 30211521, 30209010, 100, 0);
    InitializeEvent(2, 30210001, 30211530, 30211531, 30209011, 100, 60);
    InitializeEvent(3, 30210001, 30211540, 30211541, 30209011, 100, 0);
    
    //Drawbridge Lever Activator
    // ARGUMENTS: leverEntID, leverObjID, eventFlagID
    InitializeEvent(0, 30210003, 30208011, 30209011, 30209010);
    InitializeEvent(1, 30210003, 30208012, 30209012, 30209011);
});

/*
|||| Drawbridge
-we are attaching a child asset (the bridge) to a parent asset (lever)
*/
$Event(30210001, Restart, function(childID, parentID, eventFlagID, dummyID, delayInt) {
    WaitFixedTimeSeconds(0.1);
    AttachAssetToAsset(childID, parentID, dummyID);
    DisableHit(childID);
    DisableHit(parentID);
    WaitFixedTimeSeconds(0.8);
    EnableHit(childID);
    EnableHit(parentID);
    if (EventFlag(eventFlagID))
    {
        ReproduceAssetAnimation(parentID, 1);
    }
    else
    {
        WaitFor(EventFlag(eventFlagID));
        if (delayInt != 0)
        {
            WaitFixedTimeFrames(delayInt);
        }
        ForceAnimationPlayback(parentID, 1, false, false, false);
        WaitFixedTimeSeconds(0.5);
        SpawnOneshotSFX(TargetEntityType.Asset, childID, 2, 101001);
        WaitFixedTimeSeconds(3.6);
        SpawnOneshotSFX(TargetEntityType.Asset, childID, 1, 101002);
    }
});

/*
|||| Falling Spike Trap
-Spikes come down and perform a big ouchie
*/
$Event(30210002, Restart, function(trapID, charID, waitInt) {
    WaitFor(InArea(10000, 30210800));
    WaitFixedTimeRealFrames(waitInt);
    ForceAnimationPlayback(trapID, 12, false, false, false);
    WaitFixedTimeSeconds(2.4);
    CreateBigDamagingAsset(charID, trapID, 110, 113, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 111, 112, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 300, 301, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 310, 311, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 320, 321, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 330, 331, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 340, 341, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 350, 351, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 360, 361, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 370, 371, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    CreateBigDamagingAsset(charID, trapID, 380, 381, 804108100, DamageTargetType.Character, 0.5, 4, 0);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

/*
|||| Drawbridge Levers
-Useable Levers for activating the Drawbridges
*/
$Event(30210003, Default, function(leverEntID, leverObjID, eventFlagID) {
    if (EventFlag(eventFlagID))
    {
        DisableObjAct(leverEntID, 239020);
        EndEvent();
    }
    
    WaitFor(ObjActEventFlag(leverObjID));
    DisableObjAct(leverEntID, 239020);
    SetEventFlagID(eventFlagID, ON);
    EndEvent();
});

/*
|||| Bear Traps
*/
$Event(30210004, Restart, function(trapID) {
    WaitForAssetDestroyed(DestructionState.Destroyed, trapID, Equal, 1);
    DisableHit(trapID);
    WaitFixedTimeFrames(3);
    CreateDamagingAsset(trapID, trapID, 100, 804100010, DamageTargetType.Character, 0.5, 0.2, 0);
});

/*
|||| Misc stuff like Ladders
*/
$Event(30210005, Default, function() {
    // Ladders
    RegisterLadder(30213011, 30213012, 30213010);
    RegisterLadder(30213021, 30213022, 30213020);
    
    //Collision
    DisableHit(30211720);
    DisableHit(30201401);
    
    //Boss Characters
    DisableCharacter(30200811);
    DisableCharacter(30200812);
    DisableCharacter(30200813);
    DisableCharacter(30200814);
    DisableCharacter(30200815);
    
});

/*
|||| Trip wire with sound
*/
$Event(30210006, Restart, function(trapID, regionID) {
    WaitFor(InArea(10000, regionID));
    WaitFixedTimeSeconds(0.1);
    PlaySE(trapID, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(trapID, 1, false, false, false);
    TriggerAISound(7000, regionID, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, regionID, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

/*
|||| Enemy ambush setup
*/
$Event(30210007, Default, function(enemyID, regionID, delayInt) {
    DisableCharacterAI(enemyID);
    WaitFor(InArea(10000, regionID) || HasDamageType(enemyID, 10000, DamageType.Unspecified));
    if (delayInt != 0)
    {
        WaitFixedTimeFrames(delayInt);
    }
    EnableCharacterAI(enemyID);
});

/*
|||| Basic enemy force animation
*/
$Event(30210008, Default, function(enemyID, regionID, animID, delayInt) {
    DisableCharacterAI(enemyID);
    WaitFor(InArea(10000, regionID) || HasDamageType(enemyID, 10000, DamageType.Unspecified));
    if (delayInt != 0)
    {
        WaitFixedTimeFrames(delayInt);
    }
    EnableCharacterAI(enemyID);
    ForceAnimationPlayback(enemyID, animID, false, false, false);
});

// Boss Defeat
$Event(30210009, Restart, function() {
    if (EventFlag(30200800)){
        ReproduceAssetAnimation(30201672, 0);
    }
    EndIf(EventFlag(30200800));
    WaitFor(CharacterHPValue(30200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30200800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30200800));
    HandleBossDefeatAndDisplayBanner(30200800, TextBannerType.EnemyFelled);
    SetEventFlagID(30200800, ON);
    SetEventFlagID(9220, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(30201672, 0, false, false, false);
});

/*
|||| Boss Jump
-Bunch of AI commands to make the boss perform his giga jump
*/
$Event(30210010, Default, function() {
    EndIf(EventFlag(30200800));
    WaitFor(HPRatio(30200800) < 0.6 && !ThisEventSlot());
    RequestCharacterAICommand(30200800, 111, 0);
    RequestCharacterAIReplan(30200800);
    SetEventPoint(30200800, 30211933, -1);
    WaitFor(InArea(30200800, 30211933));
    SetSpEffect(30200800, 296000);
    RequestCharacterAICommand(30200800, 120, 0);
    RequestCharacterAIReplan(30200800);
    SetEventPoint(30200800, 30211934, -1);
    WaitFor(InArea(30200800, 30211934));
    RequestCharacterAICommand(30200800, -1, 0);
    RequestCharacterAIReplan(30200800);
    RequestCharacterAICommand(30200800, 117, 0);
    RequestCharacterAIReplan(30200800);
    SetEventPoint(30200800, 30211935, -1);
    WaitFixedTimeSeconds(2);
    RequestCharacterAICommand(30200800, 120, 0);
    RequestCharacterAIReplan(30200800);
    WaitFor(InArea(30200800, 30211935));
    RequestCharacterAICommand(30200800, -1, 0);
    RequestCharacterAIReplan(30200800);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(30200800, 117, 0);
    RequestCharacterAIReplan(30200800);
    SetEventPoint(30200800, 30211936, -1);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(30200800, 3001, false, false, false);
    DisableCharacterAI(30200800);
    RequestCharacterAICommand(30200800, -1, 0);
    RequestCharacterAIReplan(30200800);
    WaitFor(ElapsedSeconds(35) || HasDamageType(30200800, 10000, DamageType.Unspecified) || CharacterDead(30200820) && CharacterDead(30200821) && CharacterDead(30200822)
    && CharacterDead(30210951) && CharacterDead(30210952) && CharacterDead(30210953));
    EnableCharacterAI(30200800);
    ClearSpEffect(30200800, 296000);
    ForceAnimationPlayback(30200800, 3002, false, false, false);
});

/*
|||| Boss SPeffect hit
-Check for hit on combo and apply SPeffect
*/
$Event(30210011, Restart, function() {
    EndIf(EventFlag(30200800));
    WaitFor(CharacterHasSpEffect(10000, 13467));
    SetSpEffect(30200800, 13468);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(30210012, Restart, function(BoarID, delayInt) {
    DisableCharacter(BoarID);
    EndIf(EventFlag(30200800));
    WaitFor(InArea(30200800, 30211935));
    if (delayInt != 0)
    {
        WaitFixedTimeFrames(delayInt);
    }
    EnableCharacter(BoarID);
    RequestCharacterAICommand(BoarID, 111, 0);
    RequestCharacterAIReplan(BoarID);
    SetEventPoint(BoarID, 30211936, -1);
    WaitFor(InArea(BoarID, 30211936));
    RequestCharacterAICommand(BoarID, -1, 0);
    RequestCharacterAIReplan(BoarID);
    WaitFixedTimeSeconds(5);
    SetCharacterTeamType(BoarID, 27);
});
/*
|||| Boss SPeffect
-Check for hit on combo and apply SPeffect
*/
$Event(30210013, Restart, function() {
    EndIf(EventFlag(30200800));
    WaitFor(CharacterHasSpEffect(30200800, 13466));
    SetEventFlagID(30200805, ON);
});

$Event(30210014, Restart, function(EnemyID, RegionID, delayInt) {
    DisableCharacter(EnemyID);
    EndIf(EventFlag(30200800));
    WaitFor(InArea(30200800, 30211935));
    if (delayInt != 0)
    {
        WaitFixedTimeFrames(delayInt);
    }
    EnableCharacter(EnemyID);
    RequestCharacterAICommand(EnemyID, 120, 0);
    RequestCharacterAIReplan(EnemyID);
    SetEventPoint(EnemyID, RegionID, -1);
    WaitFor(InArea(EnemyID, RegionID));
    RequestCharacterAICommand(EnemyID, -1, 0);
    RequestCharacterAIReplan(EnemyID);
    SpawnOneshotSFX(TargetEntityType.Character, EnemyID, 220, 529503);
    SetCharacterTeamType(EnemyID, 27);
});

$Event(30210015, Restart, function() {
    DisableAsset(30200830);
    WaitFor(InArea(10000, 30201805));
    EnableAsset(30200830);
    WaitFor(!InArea(10000, 30201805));
    RestartEvent();
});
