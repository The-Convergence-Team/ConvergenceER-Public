// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    //InitializeCommonEvent(0, 9005810, 1043300800, 76161, 1043300950, 1043301950, 1084227584);
    RegisterBonfire(76161, 1043301950, 0, 0, 0, 5);
    InitializeEvent(0, 1043302800, 0);
    InitializeEvent(0, 1043302810, 0);
    InitializeEvent(0, 1043302849, 0);
    InitializeEvent(0, 1043302860, 0);
    InitializeEvent(0, 1043302900, 0); //omenkiller placeholder boss death script
    InitializeEvent(0, 1043302910, 0); //omenkiller placeholder boss activation script
    InitializeEvent(0, 1043302920, 0); //omenkiller placeholder boss playregion teleport player out if inside on load
    InitializeEvent(0, 1043302949, 0); //omenkiller placeholder boss fogwalls scripts
    InitializeCommonEvent(0, 90005780, 1043300800, 1043302701, 1043302161, 1043300700, 20, 1043302701, 1043319209, 1, 0);
    InitializeCommonEvent(0, 90005781, 1043300800, 1043302701, 1043302161, 1043300700);
    InitializeCommonEvent(0, 90005782, 1043302701, 1043302805, 1043300700, 1043302850, 1043302809, 0);
    
    InitializeCommonEvent(0, 90005540, 1043300801, 1043301801, 1043301802, 1043300803, -1, 1, 2); //(eventflag, gate id, lever id, objacteventflag, objactparamid, anim id, anim id)
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1043300340, 30001, 20001, 1043302340, 1056964608, 0, 0, 0, 0);
});

$Event(1043302500, Restart, function() {
    EnableCharacter(0);
    EnableCharacterCollision(0);
});

$Event(1043302800, Restart, function() {
    EndIf(EventFlag(1043300800));
    WaitFor(CharacterHPValue(1043300800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1043300800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1043300800));
    HandleBossDefeatAndDisplayBanner(1043300800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(1043300800, ON);
    SetEventFlagID(1043305815, ON); //music handler eventflag
    SetEventFlagID(1043302805, OFF);
    SetEventFlagID(9180, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61180, ON);
    }
    WaitFixedTimeSeconds(6);
    SetEventFlagID(1043305815, OFF); //music handler eventflag
    EndEvent();
});

$Event(1043302810, Restart, function() {
    if (EventFlag(1043300800)) {
        DisableCharacter(1043300800);
        DisableCharacterCollision(1043300800);
        ForceCharacterDeath(1043300800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1043300800);
    EnableCharacterInvincibility(1043300800);
    DisableLockOnPoint(1043300800, 220);
    if (!EventFlag(1043300802)) {
        ForceAnimationPlayback(1043300800, 20000, true, false, false, 0, 1);
        WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(1043302805)
            && (InArea(10000, 1043302850)
                || HasDamageType(1043300800, 10000, DamageType.Unspecified)
                || CharacterHasStateInfo(1043300800, 436)
                || CharacterHasStateInfo(1043300800, 2)
                || CharacterHasStateInfo(1043300800, 5)
                || CharacterHasStateInfo(1043300800, 6)
                || CharacterHasStateInfo(1043300800, 260)));
                SetNetworkconnectedEventFlagID(1043300802, ON);
        ForceAnimationPlayback(1043300800, 20011, false, false, false, 0, 1);
    } else {
L1:
        WaitFor((InArea(10000, 1043302850)) && EventFlag(1043302805));
    }
L2:
    EnableCharacterAI(1043300800);
    DisableCharacterInvincibility(1043300800);
    SetNetworkUpdateRate(1043300800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1043300800, 0, 904820700);
    EnableLockOnPoint(1043300800, 220);
    SetSpEffect(1043300800, 8089);
});

$Event(1043302849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1043300800, 1043301800, 1043302850, 1043302805, 1043305800, 10000, 1043300802, 1043302850);
    InitializeCommonEvent(0, 9005801, 1043300800, 1043301800, 1043302850, 1043302805, 1043302806, 10000);
    InitializeCommonEvent(0, 9005811, 1043300800, 1043301800, 5, 1043300802);
    InitializeCommonEvent(0, 9005822, 1043300800, 921600, 1043302805, 1043302806, 0, 0, 0, 0);
    DisableCharacter(1043300810);
});

$Event(1043302860, Restart, function() {
    WaitFor(EventFlag(1043300800));
    CreateAssetfollowingSFX(1043300875, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1043300875);
    RotateCharacter(10000, 1043300875, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(35, 0, 0, 0, 35000876, 60);
    RestartEvent();
});

//Castle Morne - Leonine Misbegotten boss scripts
$Event(1043302900, Restart, function() {
    EndIf(EventFlag(1043300820));
    WaitFor(CharacterHPValue(1043300820) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1043300820, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1043300820));
    HandleBossDefeatAndDisplayBanner(1043300820, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(1043300820, ON);
    SetEventFlagID(1043305825, ON); //music handler eventflag
    SetEventFlagID(1043302826, OFF);
    SetEventFlagID(9187, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61187, ON);
    }
    WaitFixedTimeSeconds(6);
    SetEventFlagID(1043305825, OFF); //music handler eventflag
    EndEvent();
});

$Event(1043302910, Restart, function() {
    if (EventFlag(1043300820)) {
        DisableCharacter(1043300820);
        DisableCharacterCollision(1043300820);
        ForceCharacterDeath(1043300820, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1043300820);
    EnableCharacterInvincibility(1043300820);
    DisableLockOnPoint(1043300820, 220);
    WaitFixedTimeFrames(3);
    WaitFor(
        PlayerIsInOwnWorld()
            && (InArea(10000, 1043301825)
                || HasDamageType(1043300820, 10000, DamageType.Unspecified)
                || CharacterHasStateInfo(1043300820, 436)
                || CharacterHasStateInfo(1043300820, 2)
                || CharacterHasStateInfo(1043300820, 5)
                || CharacterHasStateInfo(1043300820, 6)
                || CharacterHasStateInfo(1043300820, 260)));
    DisableCharacterInvincibility(1043300820);
    EnableLockOnPoint(1043300820, 220);
    SetNetworkUpdateRate(1043300820, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedSeconds(2.5) || HasDamageType(1043300820, 10000, DamageType.Unspecified) || EntityInRadiusOfEntity(1043300820, 10000, 4, 1));
    EnableCharacterAI(1043300820);
    DisplayBossHealthBar(Enabled, 1043300820, 0, 903460500);
});

$Event(1043302920, Default, function() {
    EndIf(EventFlag(1043300820));
    //WaitFixedTimeFrames(1);
    if (InArea(10000, 1043301825)) {
        IssueShortWarpRequest(10000, TargetEntityType.Area, 1043301826, -1);
    }
});

$Event(1043302949, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1043300820, 1043301820, 1043301825, 1043302826, 1043305820, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1043300820, 1043301820, 1043301825, 1043302826, 1043302827, 10000);
    InitializeCommonEvent(0, 9005811, 1043300820, 1043301820, 5, 0);
    InitializeCommonEvent(0, 9005811, 1043300820, 1043301821, 5, 0);
    InitializeCommonEvent(0, 9005811, 1043300820, 1043301822, 5, 0);
    InitializeCommonEvent(0, 9005822, 1043300820, 921600, 1043302826, 1043302827, 0, 0, 0, 0);
});
