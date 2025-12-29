// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(71270, 12071950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 12070805, 71271, 12070951, 12071951, 1084227584);
    //RegisterBonfire(71271, 12071951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 12071680, 100, 800, 0);
    InitializeCommonEvent(0, 90005501, 12070525, 12071525, 4, 12071525, 1045371526, 12071527, 12070527);
    InitializeCommonEvent(0, 90005501, 12070515, 12071515, 7, 12071515, 12071516, 12071517, 12070516);
    InitializeEvent(0, 12070510, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 12070750, 12070725, 12070805);
    //Erdtree Sentry - Mimic Tear
    InitializeEvent(0, 12078850, 12070805, 12070806, 904810662, 920900, 12070810);
    InitializeEvent(0, 12078860, 12070805);
    InitializeEvent(0, 12072865, 12070810, 12070805, 63010);
    InitializeCommonEvent(0, 90005875, 12070805, 30630, 920900);
    InitializeCommonEvent(0, 90005890, 12070805, 12070806, 12070806);
    InitializeCommonEvent(0, 90005891, 12070805, 12070806, 12070807);
    //InitializeCommonEvent(0, 90005870, 12070805, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 12070805, 0, 12070805, 0, 30630, 0);
    //InitializeCommonEvent(0, 90005251, 12070805, 1101004800, 0, 0);
    InitializeEvent(0, 98005303, 12070806, 12070808);
    InitializeEvent(0, 98005304, 12070806, 12070808);
    
    //InitializeEvent(0, 12072055, 0);
    InitializeEvent(0, 12078561, 0); // Dragonkin spawn chest
    // Dragonkin spawn pacify enemies
    InitializeCommonEvent(0, 98005301, 60910, 12071562);
    InitializeCommonEvent(1, 98005301, 60910, 12071563);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(12070700, true);
    SetCharacterBackreadState(12070701, true);
    InitializeEvent(0, 12070519, 0);
    InitializeCommonEvent(0, 90005250, 12070250, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070251, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070252, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070253, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070254, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070255, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070256, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005211, 12070271, 30001, 20001, 12072271, 1073741824, 1072064102, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070272, 30001, 20001, 12072271, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070273, 30001, 20001, 12072271, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070274, 30001, 20001, 12072271, 1073741824, 1067030938, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070275, 30001, 20001, 12072271, 1073741824, 1068708659, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070276, 30001, 20001, 12072271, 1073741824, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070300, 30001, 20001, 12072300, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070301, 30001, 20001, 12072300, 1092616192, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070310, 30001, 20001, 12072310, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070311, 30001, 20001, 12072310, 1092616192, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070312, 30001, 20001, 12072310, 1092616192, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070313, 30001, 20001, 12072310, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 12070320, 12072300, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005211, 12070321, 30001, 20001, 12072320, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070322, 30001, 20001, 12072320, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070340, 30000, 20000, 12072340, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070341, 30000, 20000, 12072340, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070342, 30000, 20000, 12072340, 1082130432, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070343, 30000, 20000, 12072340, 1083179008, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 12070345, 1084227584, 0, 3003);
    InitializeCommonEvent(0, 90005200, 12070355, 30000, 20000, 12072355, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070356, 30000, 20000, 12072355, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070357, 30000, 20000, 12072355, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070358, 30000, 20000, 12072355, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 12070380, 1114636288, 0, -1);
    InitializeCommonEvent(0, 90005200, 12070385, 30000, 20000, 12072340, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 12070382, 12072382, 0, -1);
    InitializeCommonEvent(0, 90005300, 12070402, 12070402, 40652, 1069547520, 0);
    InitializeEvent(0, 12073700, 12070700, 12070701);
});

$Event(12070510, Default, function() {
    InitializeCommonEvent(0, 90005500, 12070525, 12070526, 4, 12071525, 1045371526, 1045373526, 12071527, 12073527, 1045372526, 12072527, 12070527, 12070528, 0);
    InitializeCommonEvent(0, 90005500, 12070515, 12071515, 7, 12071515, 12071516, 12073516, 12071517, 12073517, 12072516, 12072517, 12070516, 12072517, 0);
});

$Event(12070519, Default, function() {
    EndIf(ThisEventSlot());
    if (!PlayersClass(9))
        SetEventFlagID(12070525, ON);
    SetEventFlagID(12070515, OFF);
});

$Event(12073700, Restart, function(X0_4, X4_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
});

$Event(12073701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3503));
    WaitFor(EventFlag(3506) && !EventFlag(12079006) && InArea(10000, 12072700));
    SetNetworkconnectedEventFlagID(12079005, ON);
    EndEvent();
});

$Event(12073702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3503));
    WaitFor(EventFlag(3506) && !EventFlag(12079008) && InArea(10000, 12072701));
    SetNetworkconnectedEventFlagID(12079007, ON);
    EndEvent();
});

$Event(12072055, Restart, function() {
    DisableCharacter(12070806);
    DisableCharacterCollision(12070806);
    ForceCharacterDeath(12070806, false);
});

// Dragonkin spawn chest
$Event(12078561, Default, function() {
    AttachAssetToAsset(12071560, 12071561, 151);
    EndIf(EventFlag(12077540));
    DisableAssetTreasure(12071561);
    WaitFor(EventFlag(12078560));
    EnableAssetTreasure(12071561);
});

// Mimic Tear 
$Event(12078850, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X0_4);
        DisableCharacter(X16_4);
        DisableCharacterCollision(X0_4);
        DisableCharacterCollision(X16_4);
        ForceCharacterDeath(X0_4, false);
        ForceCharacterDeath(X16_4, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(X0_4);
    DisableCharacterAI(X16_4);
    EnableCharacterInvincibility(X0_4);
    EnableCharacterInvincibility(X16_4);
    EnableCharacterImmortality(X16_4);
    WaitFor(InArea(10000, X4_4));
    //Mimic Tear Not Spawning Fix - Add wait time
    WaitFixedTimeSeconds(3);
    DisableCharacterInvincibility(X0_4);
    DisableCharacterInvincibility(X16_4);
    SetCharacterAIId(X0_4, 90603100);
    EnableCharacterAI(X16_4); 
    ForceAnimationPlayback(X16_4, 20010, false, false, false);
    if (PlayerIsInOwnWorld()) {
        CopyPlayerCharacterData(10000, X0_4);
    }
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterHome(X0_4, 12072852);
    WaitFixedTimeSeconds(8);
    DisableCharacter(X16_4);
    DisableCharacterAI(X16_4);
    EnableCharacterAI(X0_4);
    SetBossBGM(X12_4, BossBGMState.Start);
    DisplayBossHealthBar(Enabled, X0_4, 0, X8_4);
    
    WaitFor(EventFlag(X0_4) || (!EntityInRadiusOfEntity(10000, X0_4, 100, 1) && !CharacterDead(X0_4)));
    EndIf(EventFlag(X0_4));
    DisplayBossHealthBar(Disabled, X0_4, 0, X8_4);
    SetBossBGM(X12_4, BossBGMState.Stop2);
    ResetCharacterPosition(X0_4);
    RestartEvent();
});

// Continious gear update on mimic tear
$Event(12078860, Restart, function(X0_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld() || HPRatio(X0_4) != 1);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CopyPlayerCharacterData(10000, X0_4);
    if (CharacterHasSpEffect(10000, 6534000) && !CharacterHasSpEffect(X0_4, 6534000))
        SetSpEffect(X0_4, 6534000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Mimic Tear Teleport
$Event(12072865, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot() && !PlayerIsInOwnWorld()) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetThisEventSlot(OFF);
    }
    DisableCharacter(X4_4);
    DisableCharacterCollision(X4_4);
    WaitFor(CharacterHasSpEffect(X0_4, 16307));
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    SetCharacterHome(X4_4, X8_4);
    DisableCharacterCollision(X0_4);
    WaitFixedTimeFrames(15);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 900, X0_4);
    ForceAnimationPlayback(X4_4, 63010, false, false, true);
    SetSpEffect(X4_4, 16316);
    WaitFixedTimeSeconds(4);
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    DisableCharacterAI(X0_4);
});
