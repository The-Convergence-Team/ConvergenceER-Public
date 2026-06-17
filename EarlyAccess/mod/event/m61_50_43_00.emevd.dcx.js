// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2050430000, 2050431950, 0, 0, 0, 0);
    $InitializeEvent(0, 2050432300, 2050430200, 2050433200, 2050432200, 2050432200, 0);
    $InitializeEvent(1, 2050432300, 2050430201, 2050433201, 2050432200, 2050432200, 0);
    $InitializeEvent(2, 2050432300, 2050430230, 2050433230, 2050432200, 2050432200, 5);
    InitializeCommonEvent(0, 90005261, 2050430200, 2050432201, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005261, 2050430201, 2050432201, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005261, 2050430230, 2050432201, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050430291, 2050432291, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430253, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430250, 1103626240, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430251, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430252, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430263, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005251, 2050430257, 1086324736, 0, -1);
    InitializeCommonEvent(0, 90005261, 2050430311, 2050430311, 1097859072, 0, -1);
    InitializeCommonEvent(0, 900005580, 580600, 2050431500, 9146);
    InitializeCommonEvent(0, 90005748, 2050431700, 206020, 1030021, 1106247680, 4911);
    $InitializeCommonEvent(0, 20000350, 2050431701, 2050431702, 2055550104, 2055550114, 2050430550, 2050431703); // Shrine Init
    InitializeCommonEvent(0, 90005300, 2050434704, 2050431704, 0, 0, 1); // Perfumer otk
    InitializeCommonEvent(0, 90005300, 2050434705, 2050431705, 0, 0, 1); // Omenkiller otk
});

$Event(2050432300, Restart, function(chrEntityId, patrolInformationEntityId, areaEntityId, eventFlagId, timeSeconds) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(InArea(10000, areaEntityId) || EventFlag(eventFlagId));
        WaitFixedTimeSeconds(timeSeconds);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

$Event(2050432800, Restart, function() {
    EndIf(EventFlag(2050430800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterDead(2050430710) && EventFlag(2050432810));
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(2050430710, TextBannerType.EnemyFelled);
    DeactivateGparamOverride(10);
    SetNetworkconnectedEventFlagID(2050430800, ON);
    WaitFixedTimeSeconds(5);
    SetSpEffect(20000, 8870);
    WaitFixedTimeSeconds(2);
    SetEventFlagID(2050432810, OFF);
    WarpPlayer(61, 50, 43, 0, 2049442721, 61504300);
    EndEvent();
});

$Event(2050432801, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2050430800));
    EndIf(EventFlag(2050430801));
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && EventFlag(2049442702));
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    SetSpEffect(10000, 514);
    WaitFixedTimeSeconds(1.5);
    SetNetworkconnectedEventFlagID(2050430801, ON);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, 2050432810, -1, 10000, true, true);
    SetEventFlagID(9021, ON);
    EndEvent();
});

$Event(2050432802, Restart, function() {
    if (EventFlag(2050430800)) {
        DisableCharacter(2050430710);
        DisableCharacterCollision(2050430710);
        ForceCharacterDeath(2050430710, false);
        DisableAsset(2050431720);
        EndEvent();
    }
L0:
    DisableCharacter(2050430710);
    DisableCharacterCollision(2050430710);
    DisableCharacterAI(2050430710);
    DisableAsset(2050431720);
    EndIf(!EventFlag(2050430801));
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    SetEventFlagID(1099002100, ON);
    DisableCharacter(2050435810);
    SetEventFlagID(2050432810, ON);
    SetSpEffect(10000, 190);
    ActivateGparamOverride(0, 0);
    ChangeWeather(Weather.PuffyClouds, -1, false);
    DisableCharacter(2050435800);
    DisableCharacterCollision(2050435800);
    DisableCharacterAI(2050435800);
    DisableCharacterHPBarDisplay(2050430710);
    SetNetworkconnectedEventFlagID(2050430801, OFF);
    SetSpEffect(10000, 514);
    EnableAsset(2050431720);
    WarpAssetToCharacter(2050431720, 2050431801, 100);
    CreateAssetfollowingSFX(2050431720, 200, 806700);
    EnableCharacter(2050430710);
    IssueShortWarpRequest(2050430710, TargetEntityType.Area, 2050432812, -1);
    EnableCharacterCollision(2050430710);
    WaitFor(
        EntityInRadiusOfEntity(10000, 2050430710, 10, 1)
            || ElapsedSeconds(5)
            || HasDamageType(2050430710, 10000, DamageType.Unspecified)
            || HasDamageType(2050430710, 0, DamageType.Unspecified));
    SetEventFlagID(1099002100, OFF);
    EnableCharacterAI(2050430710);
    SetNetworkUpdateRate(2050430710, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlagID(2050432805, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 2050430710, 0, 142501);
});

$Event(2050432805, Restart, function() {
    DisableNetworkSync();
    if (EventFlag(2050430800)) {
        EndEvent();
    }
L0:
    WaitFor(EventFlag(2050432805));
    WaitFixedTimeFrames(1);
    SetBossBGM(921100, BossBGMState.Start);
    WaitFor(EventFlag(2050432802) || EventFlag(2050430800));
    if (!EventFlag(2050430800)) {
        WaitFixedTimeFrames(1);
        SetBossBGM(925000, BossBGMState.HeatUp);
        WaitFor(EventFlag(2050430800));
    }
L1:
    SetBossBGM(925000, BossBGMState.Stop1);
});


