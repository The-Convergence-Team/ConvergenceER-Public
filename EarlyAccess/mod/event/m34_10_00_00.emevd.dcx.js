// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(34100000, 34101950, 0, 0, 0, 5);
    RegisterBonfire(34100001, 34101951, 0, 0, 0, 5);
    RegisterBonfire(34100002, 34101952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005508, 34100510, 34101510, 0, 34101510, 34101511, 34101512, 34100511);
    InitializeCommonEvent(0, 90005605, 34101600, 34, 10, 0, 0, 34102600, 0, 34102610, 34102611, 34102612, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005110, 191, 9101, 34101650, 34100500, 8148, 806934, 9080, 60522, 0);
    InitializeCommonEvent(0, 90005300, 34100300, 34100300, 34100300, 0, 0);
    InitializeEvent(0, 34102811, 10740, 3009);
    InitializeEvent(1, 34102811, 10741, 3015);
    InitializeEvent(2, 34102811, 10742, 3019);
    InitializeEvent(3, 34102811, 10743, 3022);
    InitializeEvent(4, 34102811, 10744, 3007);
    // new events
    InitializeEvent(0, 34102820, 0);
    InitializeEvent(0, 34102821, 0);
    InitializeEvent(0, 34102822, 0);
    
    //Hide boss enemies
    InitializeEvent(0, 34102823, 34100550);
    InitializeEvent(1, 34102823, 34100551);
    InitializeEvent(2, 34102823, 34100552);
    InitializeEvent(3, 34102823, 34100553);
    InitializeEvent(4, 34102823, 34100554);
    
    //SFX
    InitializeEvent(0, 34102824, 0);
    
    //Stormknight Jump
    InitializeEvent(0, 34102825, 0);
    
    //Misc - Ladders - Collision etc.
    InitializeEvent(0, 34102826, 0);
    
    // falling protection
    InitializeCommonEvent(0, 90005690, 34102251);
    InitializeCommonEvent(0, 90005691, 34102251);
    InitializeCommonEvent(1, 90005690, 34102252);
    InitializeCommonEvent(1, 90005691, 34102252);
    
    //Fall teleport
    InitializeEvent(0, 34102827, 0);
    
    //Crate enemies
    InitializeCommonEvent(0, 98005308, 34100600, 34100601, 0, 0);
    InitializeCommonEvent(1, 98005308, 34100602, 34100603, 34100610, 0);
    InitializeCommonEvent(2, 98005308, 34100604, 34100605, 34100610, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 34100200, 30020, 20020, 34102200, 15, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34100201, 30020, 20020, 34102200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 34100202, 34102200, 8, -1);
});

// 天候固定 -- weather fixed
$Event(34102690, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, InArea(10000, 34102690));
    GotoIf(L1, InArea(10000, 34102691));
    ChangeWeather(Weather.None, -1, false);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L0:
    cond |= WeatherActive(Weather.RainyClouds, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.RainyClouds, -1, false);
    Goto(L2);
L1:
    cond |= WeatherActive(Weather.HeavyFog, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.HeavyFog, -1, false);
L2:
    RestartEvent();
});

// ボス撃破 -- Defeat the boss
$Event(34102800, Restart, function() {
    EndIf(EventFlag(34100800));
    WaitFor(CharacterHPValue(34100800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(34108000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34100800));
    HandleBossDefeatAndDisplayBanner(34100800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(9280, ON);
    SetEventFlagID(34100800, ON);
});

// ボス出現 -- Boss appears
$Event(34102810, Restart, function() {
    if (EventFlag(34100800)) {
        DisableCharacter(34100800);
        DisableCharacterCollision(34100800);
        ForceCharacterDeath(34100800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(34100800);
    EnableCharacterImmortality(34100810);
    DisableCharacterAI(34100810);
    EnableCharacterFadeOnEnable(34100810);
    if (!EventFlag(34100801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 34102801))
                || HasDamageType(34100800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(34100801, ON);
    } else {
L1:
        WaitFor(EventFlag(34102805) && InArea(10000, 34102800));
    }
L2:
    EnableCharacterAI(34100800);
    EnableCharacterAI(34100810);
    SetNetworkUpdateRate(34100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(34100810, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34100800, 0, 0);
});

// ボスイベント起動 -- Boss event activation
$Event(34102849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 34100800, 34101800, 34102800, 34102805, 34105800, 10000, 34100801, 34102801);
    InitializeCommonEvent(0, 9005801, 34100800, 34101800, 34102800, 34102805, 34102806, 10000);
    InitializeCommonEvent(0, 9005811, 34100800, 34101800, 3, 34100801);
    InitializeCommonEvent(0, 9005822, 34100800, 90003101, 34102805, 34102806, 0, 11002852, 0, 0);
});

$Event(34102811, Restart, function(spEffectId, animationId) {
    DisableCharacter(34100810);
    EndIf(EventFlag(34100800));
    WaitFor(CharacterHasSpEffect(34100800, spEffectId));
    RequestCharacterAIReplan(12020800);
    EnableCharacter(34100810);
    RequestCharacterAIReplan(34100810);
    ForceAnimationPlayback(34100810, animationId, false, false, false);
    WarpCharacterAndCopyFloor(34100810, TargetEntityType.Character, 34100800, 900, 34100800);
    WaitFor(CharacterHasSpEffect(34100810, spEffectId) || ElapsedSeconds(1));
    WaitFor(!CharacterHasSpEffect(34100810, spEffectId));
    RestartEvent();
});

//new boss appear
//34100850 phase 2 boss
//34100851 phase 1 boss

//event to start boss
$Event(34102820, Restart, function() {
    if (EventFlag(34100850)) {
        DisableCharacter(34100850);
        DisableCharacter(34100851);
        DisableCharacterCollision(34100850);
        DisableCharacterCollision(34100851);
        ForceCharacterDeath(34100850, false);
        ForceCharacterDeath(34100851, false);
        EndEvent();
    }
    DisableCharacterAI(34100850);
    DisableCharacterAI(34100851);
    DisableCharacter(34100850);
    DisableCharacterGravity(34100850);
    DisableCharacterCollision(34100850);
    WaitFor(InArea(10000, 34102850)); // 34102850 entity id for region
    EnableCharacter(34100850);
    EnableCharacterAI(34100851);
    SetNetworkUpdateRate(34100850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(34100851, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(34100851, 34100850);
    DisplayBossHealthBar(Enabled, 34100850, 0, 903400850); // 903400850 name id, can be changed to whatever
});

//event for when boss is fully defeated
$Event(34102821, Restart, function() {
    EndIf(EventFlag(34100850));
    WaitFor(CharacterHPValue(34100850) <= 0);
    ForceCharacterDeath(34100851, false);
    WaitFixedTimeSeconds(4);
    PlaySE(34100850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34100850));
    HandleBossDefeatAndDisplayBanner(34100850, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(34100850, ON); //34100850 event flag for disabling boss when defeated.
    EndEvent();
});


//event for phase transition
$Event(34102822, Restart, function() {
    EndIf(EventFlag(34100850));
    WaitFor(HPRatio(34100850) <= 0.5);
    ForceAnimationPlayback(34100851, 3017, false, false, false, 1);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(34100850, 2, 34100851, 230); // dummy poly will be dependent on what you have
    ForceAnimationPlayback(34100850, 3010, false, false, false, 1);
    EnableCharacterAI(34100850);
    EnableCharacterGravity(34100850);
    EnableCharacterCollision(34100850);
    WaitFixedTimeSeconds(1);
    DisableCharacter(34100851);
    DisableCharacterCollision(34100851);
    DisableCharacterAI(34100851);
    EndEvent();
});

//Disable enemy (for boss resources)
$Event(34102823, Default, function(enemyID) {
    DisableCharacter(enemyID);
    EndEvent();
});

//Storm SFX
$Event(34102824, Restart, function() {
    WaitFixedTimeSeconds(0.6);
    SpawnOneshotSFX(TargetEntityType.Area, 34102250, -1, 647732);
    RestartEvent();
});

//Storm SFX
$Event(34102825, Restart, function() {
    WaitFor(InArea(10000, 34102256));
    RequestCharacterAICommand(34100800, 111, 0);
    RequestCharacterAIReplan(34100800);
    SetEventPoint(34100800, 34102271, -1);
    WaitFor(InArea(34100800, 34102271));
    RequestCharacterAICommand(34100800, 120, 0);
    RequestCharacterAIReplan(34100800);
    SetEventPoint(34100800, 34102272, -1);
    WaitFor(InArea(34100800, 34102272));
    RequestCharacterAICommand(34100800, -1, 0);
    RequestCharacterAIReplan(34100800);
    WaitFixedTimeSeconds(2);
    DisableCharacter(34100800);
    EndEvent();
});

//Misc
$Event(34102826, Default, function() {
    //Disable Asset mesh
    DisableMapPart(34101638);
    DisableMapPart(34101639);
    
    //Ladders
    RegisterLadder(34103570, 34103571, 34101570);
    RegisterLadder(34103572, 34103573, 34101571);
    RegisterLadder(34103574, 34103575, 34101572);
    EndEvent();
});

//Fall teleport
$Event(34102827, Restart, function() {
    WaitFor(InArea(10000, 34102253));
    FadeToBlack(1, 0.5, false, 0);
    WaitFixedTimeSeconds(0.6);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 34102254, -1);
    WaitFixedTimeSeconds(0.5);
    FadeToBlack(0, 0.2, false, 0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
