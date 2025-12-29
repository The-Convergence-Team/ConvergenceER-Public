// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32080000, 32081950, 0, 0, 0, 5);
    InitializeEvent(0, 32082800, 0);
    InitializeEvent(0, 32082810, 0);
    InitializeEvent(0, 32082811, 0);
    InitializeEvent(0, 32082849, 0);
    InitializeEvent(0, 32082580, 0);
    InitializeCommonEvent(0, 90005520, 32080588, 32081586, 32080586, 32080587);
    InitializeEvent(0, 32082498, 0);
    InitializeCommonEvent(0, 90005646, 32080800, 32082840, 32082841, 32081840, 32082840, 2080);
    InitializeEvent(0, 32082650, 0);
    InitializeCommonEvent(0, 900005610, 32081680, 100, 800, 0);
    //Teleport shortcut
    InitializeEvent(0, 32082591, 0);
    InitializeEvent(0, 32082592, 0);
    InitializeEvent(0, 32082593, 0);
    //Miners
    InitializeEvent(0, 32082200, 32080200, 30005, 20005, 0, 0, 0, 0, 0, 32081600, 32081601, 32081602, 0);
    InitializeEvent(1, 32082200, 32080201, 30001, 20001, 0, 0, 0, 0, 0, 32081603, 0, 0, 0);
    InitializeEvent(2, 32082200, 32080202, 30001, 20001, 0, 0, 0, 0, 0, 32081604, 0, 0, 0);
    InitializeEvent(3, 32082200, 32080203, 30004, 20004, 0, 0, 0, 0, 0, 32081615, 0, 0, 0);
    InitializeEvent(4, 32082200, 32080204, 30001, 20001, 0, 0, 0, 0, 0, 32081616, 32081617, 0, 0);
    InitializeEvent(5, 32082200, 32080205, 30005, 20005, 0, 0, 0, 0, 0, 32081605, 0, 0, 0);
    InitializeEvent(6, 32082200, 32080206, 30001, 20001, 0, 0, 0, 0, 0, 32081606, 0, 0, 0);
    InitializeEvent(7, 32082200, 32080207, 30001, 20001, 0, 0, 0, 0, 0, 32081607, 0, 0, 0);
    InitializeEvent(8, 32082200, 32080208, 30005, 20005, 0, 0, 0, 0, 0, 32081608, 0, 0, 0);
    InitializeEvent(9, 32082200, 32080209, 30004, 20004, 0, 0, 0, 0, 0, 32081609, 0, 0, 0);
    
    InitializeEvent(0, 32082850, 0);
    InitializeEvent(0, 32082582, 32081101);
    InitializeEvent(0, 32082583, 32081102);
    InitializeEvent(0, 32082588, 32081101);
    //Ambush Triggers
    InitializeEvent(0, 32082584, 32080314, 32082251);
    InitializeEvent(1, 32082584, 32080315, 32082253);
    InitializeEvent(2, 32082584, 32080316, 32082253);
    InitializeEvent(3, 32082584, 32080317, 32082254);
    InitializeEvent(4, 32082584, 32080318, 32082254);
    InitializeEvent(5, 32082584, 32080319, 32082254);
    InitializeEvent(0, 32082585, 32081103);
    //Lights
    InitializeEvent(0, 32082581, 32081010);
    InitializeEvent(1, 32082581, 32081011);
    InitializeEvent(2, 32082581, 32081012);
    InitializeEvent(3, 32082581, 32081013);
    InitializeEvent(4, 32082581, 32081014);
    InitializeEvent(5, 32082581, 32081015);
    InitializeEvent(6, 32082581, 32081016);
    InitializeEvent(7, 32082581, 32081017);
    InitializeEvent(8, 32082581, 32081018);
    InitializeEvent(9, 32082581, 32081019);
    InitializeEvent(10, 32082581, 32081020);
    InitializeEvent(11, 32082581, 32081021);
    InitializeEvent(12, 32082581, 32081022);
    InitializeEvent(13, 32082581, 32081023);
    InitializeEvent(14, 32082581, 32081024);
    InitializeEvent(15, 32082581, 32081025);
    InitializeEvent(16, 32082581, 32081026);
    InitializeEvent(17, 32082581, 32081027);
    InitializeEvent(18, 32082581, 32081028);
    InitializeEvent(19, 32082581, 32081029);
    InitializeEvent(20, 32082581, 32081030);
    InitializeEvent(21, 32082581, 32081031);
    //Elevator Setup
    InitializeCommonEvent(0, 90005501, 32080515, 32080516, 3, 32081515, 32081517, 32081516, 32080517);
    InitializeEvent(0, 32082586, 0);
    InitializeEvent(0, 32082590, 0);
    
    InitializeEvent(0, 32082589, 32080319, 32081810, 200, 32082254);
    InitializeEvent(1, 32082589, 32080317, 32081811, 100, 32082254);
    InitializeEvent(2, 32082589, 32080318, 32081812, 350, 32082254);
    InitializeEvent(3, 32082589, 32080315, 32081813, 400, 32082254);
    InitializeEvent(4, 32082589, 32080316, 32081814, 450, 32082254);
    
    //Illusion wall
    InitializeCommonEvent(0, 90005525, 32080060, 32081060);
    DisableMapPart(32081062);
    DisableMapPart(32081061);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32082820, 0);
    InitializeCommonEvent(0, 90005250, 32080211, 32082211, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080216, 32082302, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080217, 32082217, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080218, 32082217, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080250, 32082250, 0, -1);
    InitializeCommonEvent(0, 90005200, 32080300, 30009, 20029, 32082300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080301, 30009, 20029, 32082301, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080302, 30009, 20029, 32082302, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080303, 30009, 20029, 32082303, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32080305, 32082305, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080306, 32082306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080307, 32082306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080308, 32082308, 0, 3008);
    InitializeEvent(0, 32082587, 0);
    InitializeEvent(0, 32082502, 0);
});

//Teleport Ambush
//Arguments: Enemy, Target, Time
$Event(32082589, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(InArea(10000, X12_4));
    if (!CharacterDead(X0_4, 0)) {
    WaitFixedTimeRealFrames(X8_4);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 201, 646282);
    SpawnOneshotSFX(TargetEntityType.Area, X4_4, 0, 529983);
    WaitFixedTimeRealFrames(10);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, 0)
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 200, 625005);
    WaitFixedTimeRealFrames(5);
    SpawnOneshotSFX(TargetEntityType.Area, X4_4, 0, 646282);
    PlaySE(X0_4, SoundType.CharacterMotion, 999997300);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    }
});

$Event(32082586, Default, function() {
    InitializeCommonEvent(0, 90005500, 32080515, 32080516, 3, 32081515, 32081517, 32083516, 32081516, 32083515, 32082516, 32082517, 32080517, 32080518, 0);
});

$Event(32082590, Default, function() {
    WaitFor(EventFlag(32080517) && !EventFlag(32080515));
    WaitFixedTimeRealFrames(550);
    if (InArea(10000, 32082518) && !EventFlag(32080515)){
    ForceCharacterDeath(10000, false);
    }
    else{
    RestartEvent();
    }
});

$Event(32082591, Default, function() {
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9100, 32081041));
    if (!EventFlag(32081100)){
        DisplayGenericDialog(30040, PromptType.OKCANCEL, NumberofOptions.OneButton, 32081041, 3);
    }
    else{
        ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
        WaitFixedTimeFrames(40);
        SpawnOneshotSFX(TargetEntityType.Area, 32082656, 0, 529981);
        WaitFixedTimeFrames(15);
        SpawnOneshotSFX(TargetEntityType.Area, 32082656, 0, 304631);
        FadeToBlack(1,1,false,0);
        WaitFixedTimeFrames(65);
        IssueShortWarpRequest(10000, TargetEntityType.Area, 32082651, 0);
        FadeToBlack(0,2,false,1.5);
        SetCameraAngle(0,-90);
    }
    RestartEvent();
});

$Event(32082592, Default, function() {
    if (EventFlag(32081100)){
    SpawnMapSFX(32082652);
    SpawnMapSFX(32082653);
    }
    else{
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9100, 32081040));
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeFrames(40);
    SpawnOneshotSFX(TargetEntityType.Area, 32082655, 0, 529981);
    WaitFixedTimeFrames(10);
    SpawnOneshotSFX(TargetEntityType.Area, 32082655, 0, 304631);
    WaitFixedTimeFrames(5);
    SetEventFlagID(32081100, ON);
    SpawnMapSFX(32082652);
    SpawnMapSFX(32082653);
    DisplayGenericDialog(30016, PromptType.OKCANCEL, NumberofOptions.OneButton, 32081040, 3);
    }
    EndEvent();
});

$Event(32082593, Default, function() {
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9100, 32081040));
    if (EventFlag(32081100)){
        ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
        WaitFixedTimeFrames(40);
        SpawnOneshotSFX(TargetEntityType.Area, 32082655, 0, 529981);
        WaitFixedTimeFrames(15);
        SpawnOneshotSFX(TargetEntityType.Area, 32082655, 0, 304631);
        FadeToBlack(1,1,false,0);
        WaitFixedTimeFrames(65);
        IssueShortWarpRequest(10000, TargetEntityType.Area, 32082654, 0);
        FadeToBlack(0,2,false,1.5);
        SetCameraAngle(0,-90);
    }
    RestartEvent();
});

$Event(32082587, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32080515, ON);
});

$Event(32082502, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9710, 12021502));
    SetEventFlag(TargetEventFlagType.EventFlag, 12020502, ON);
    WaitFixedTimeSeconds(0.1);
    SetEventFlag(TargetEventFlagType.EventFlag, 9021, ON);
    SetPlayerRespawnPoint(12042506);
    SaveRequest(0);
    WarpPlayer(12, 4, 0, 0, 12042506, 12040);
    //PlayCutsceneToPlayerAndWarp(12020000, CutscenePlayMode.Skippable, 12032502, 12030000, 10000, 12020000, false);
});

$Event(32082581, Restart, function(X0_4, X4_4) {
    CreateAssetfollowingSFX(X0_4, 201, 529984);
    CreateAssetfollowingSFX(X0_4, 201, 800500);
});

$Event(32082582, Restart, function(X0_4) {
    if (EventFlag(32080803)) {
        DisableAsset(X0_4);
        EndEvent();
    }
    DisableCharacterAI(32080310);
    DisableCharacterAI(32080311);
    DisableCharacterAI(32080312);
    SetCharacterTeamType(32080311, TeamType.Disabled);
    SetCharacterTeamType(32080312, TeamType.Disabled);
    CreateAssetfollowingSFX(X0_4, 200, 636003);
    WaitFor(HasDamageType(32080310, 10000, DamageType.Unspecified));
    EnableCharacterAI(32080310);
    EnableCharacterAI(32080311);
    EnableCharacterAI(32080312);
    SetSpEffect(32080310, 1477000);
    SetSpEffect(32080310, 7120);
    
    WaitFixedTimeSeconds(3);
    SetCharacterTeamType(32080311, TeamType.Enemy);
    SetCharacterTeamType(32080312, TeamType.Enemy);
});

$Event(32082583, Restart, function(X0_4) {
    if (EventFlag(32080802)) {
        DisableAsset(X0_4);
        EndEvent();
    }

    DisableCharacterAI(32080313);
    CreateAssetfollowingSFX(X0_4, 200, 636003);
    WaitFor(HasDamageType(32080313, 10000, 0) || InArea(10000, 32082252));
    EnableCharacterAI(32080313);
    SetSpEffect(32080313, 1477000);
    SetSpEffect(32080313, 7120);
    WaitFor(CharacterDead(32080313));
    SetEventFlagID(32080802, ON);
    SpawnOneshotSFX(0, X0_4, 200, 304631)
    DeleteAssetfollowingSFX(X0_4, false);
    DisableAsset(X0_4);
});

$Event(32082584, Restart, function(X0_4, X4_4) {
    DisableCharacterAI(X0_4);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    WaitFor(InArea(10000, X4_4));
    EnableCharacterAI(X0_4);
    WaitFixedTimeSeconds(1.2);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
});

$Event(32082585, Restart, function(X0_4) {
    DisableAsset(X0_4);
    EndIf(EventFlag(32080800));
    EnableAsset(X0_4);
    CreateAssetfollowingSFX(X0_4, 200, 636003);
    WaitFor(EventFlag(32080800));
    DeleteAssetfollowingSFX(X0_4, false);
    DisableAsset(X0_4);
});

$Event(32082588, Restart, function(X0_4) {
    EndIf(EventFlag(32080803));
    WaitFor(CharacterDead(32080310));
    SpawnOneshotSFX(0, X0_4, 200, 304631)
    DeleteAssetfollowingSFX(X0_4, false);
    SetEventFlagID(32080803, ON);
    DisableAsset(X0_4);
});

$Event(32082580, Restart, function() {
    RegisterLadder(32080580, 32080581, 32081580);
    RegisterLadder(32080582, 32080583, 32081582);
    RegisterLadder(32080584, 32080585, 32081584);
    RegisterLadder(32080586, 32080587, 32081585);
});

$Event(32082498, Restart, function() {
    if (!EventFlag(32080588)) {
        ModifyNavimeshConnectionBitflag(32082498, NavimeshType.Solid, BitopType.Add);
        WaitFor(EventFlag(32080588));
    }
L0:
    ModifyNavimeshConnectionBitflag(32082498, NavimeshType.Solid, BitopType.Delete);
    EndEvent();
});

$Event(32082200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(ThisEventSlot());
    if (X16_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X32_4, Equal, 1)
        || AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X20_4 == 0 && X24_4 == 0 && X28_4 == 0)) {
        if (X20_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(X12_4);
        if (X16_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X16_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32082650, Restart, function() {
    WaitFor(EventFlag(32080650));
    ForceAnimationPlayback(10000, 60131, false, false, false);
    SetEventFlagID(9080, ON);
    SetEventFlagID(32080650, OFF);
});

$Event(32082800, Restart, function() {
    EndIf(EventFlag(32080800));
    WaitFor(CharacterHPValue(32080800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32080800));
    HandleBossDefeatAndDisplayBanner(32080800, TextBannerType.EnemyFelled);
    SetEventFlagID(32080800, ON);
    SetEventFlagID(9267, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61267, ON);
    }
});

$Event(32082810, Restart, function() {
    if (EventFlag(32080800)) {
        DisableCharacter(32080800);
        DisableCharacterCollision(32080800);
        ForceCharacterDeath(32080800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32080800);
    EnableCharacterInvincibility(32080800);
    if (!EventFlag(32080801)) {
        ForceAnimationPlayback(32080800, 30008, true, false, false);
        flagArea &= EventFlag(32082805) && InArea(10000, 32082800);
        WaitFor(flagArea);
        SetNetworkconnectedEventFlagID(32080801, ON);
        ForceAnimationPlayback(32080800, 20008, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32080800, 30008, true, false, false);
        flagArea &= EventFlag(32082805) && InArea(10000, 32082800);
        WaitFor(flagArea);
        ForceAnimationPlayback(32080800, 20008, false, false, false);
    }
L2:
    EnableCharacterAI(32080800);
    DisableCharacterInvincibility(32080800);
    SetNetworkUpdateRate(32080800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32080800, 0, 904680320);
});

$Event(32082811, Restart, function() {
    EndIf(EventFlag(32080800));
    WaitFor(CharacterHasSpEffect(32080800, 16495));
    SetEventFlagID(32082802, ON);
});

$Event(32082820, Restart, function() {
    EndIf(EventFlag(32080800));
    EndIf(EventFlag(32080801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32088590));
    SetEventFlagID(32088590, OFF);
});

$Event(32082849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32080800, 32081800, 32082800, 32082805, 32085800, 10000, 32080801, 32082801);
    InitializeCommonEvent(0, 9005801, 32080800, 32081800, 32082800, 32082805, 32082806, 10000);
    InitializeCommonEvent(0, 9005811, 32080800, 32081800, 7, 32080801);
    InitializeCommonEvent(0, 9005822, 32080800, 920800, 32082805, 32082806, 0, 32082802, 0, 0);
});

$Event(32082850, Default, function() {
    WaitFor(CharacterDead(32080800));
    CreateAssetfollowingSFX(32080825, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 32080825);
    RotateCharacter(10000, 32080825, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(12, 4, 0, 0, 12040825, 60);
    RestartEvent();
});
