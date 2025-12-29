// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1035470000, 1035471950, 0, 0, 0, 5);
    InitializeEvent(0, 1035472580, 0);
    InitializeEvent(0, 1035472205, 0);
    InitializeEvent(0, 1035472206, 1035470201, 1035470201);
    InitializeEvent(1, 1035472206, 1035470202, 1035470202);
    InitializeEvent(0, 1035472207, 1035475200, 1035470200);
    InitializeEvent(1, 1035472207, 1035475201, 1035470201);
    InitializeEvent(2, 1035472207, 1035475202, 1035470202);
    InitializeEvent(0, 1035472220, 0);
    InitializeEvent(0, 1035472221, 0);
    InitializeEvent(0, 1035472222, 0);
    InitializeEvent(0, 1035472200, 0);
    InitializeEvent(0, 1035472210, 0);
    InitializeCommonEvent(0, 90005300, 1035470200, 1035470200, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470201, 1035470201, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470202, 1035470202, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470220, 1035470220, 0, 0, 0);
    InitializeEvent(0, 1035472240, 1035470260, 12603, 1035472240, 1035472241, 1035472242);
    InitializeCommonEvent(0, 90005300, 1035470260, 1035470260, 40210, 0, 0);
    InitializeEvent(0, 1035472270, 0);
    InitializeEvent(1, 1035472270, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005251, 1035470201, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470202, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470210, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470211, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470212, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470218, 1077936128, 0, 0);
});

$Event(1035472200, Default, function() {
    SetNetworkSyncState(Disabled);
    if (EventFlag(1035470215)) {
        ChangeWeather(Weather.None, -1, false);
        EndEvent();
    }
    if (!InArea(10000, 1035472200)) {
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    if (!WeatherActive(Weather.HeavyFog, 0, 0)) {
        ChangeWeather(Weather.HeavyFog, -1, false);
    }
L1:
    RestartEvent();
});

$Event(1035472205, Restart, function() {
    EndIf(EventFlag(1035470200));
    ForceAnimationPlayback(1035470200, 30006, false, false, false, Equal, 1);
    SetCharacterImmortality(1035470220, Enabled);
    SetCharacterHPBarDisplay(1035470220, Disabled);
    WaitFor(
        HasDamageType(1035470200, 10000, DamageType.Unspecified)
            || HasDamageType(1035470220, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(1035470200, 20006, false, false, false, Equal, 1);
    ChangeCharacterEnableState(1035470220, Disabled);
    SetEventFlag(TargetEventFlagType.EventFlag, 1035470200, ON);
    SetEventFlag(TargetEventFlagType.EventFlag, 1035470220, ON);
    EndEvent();
});

$Event(1035472206, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    ChangeCharacterCollisionState(X4_4, Disabled);
    ForceAnimationPlayback(X4_4, 20008, false, false, false, Equal, 1);
    SetEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
});

$Event(1035472207, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(1035470220, Disabled);
    EndIf(EventFlag(X0_4));
    if (!PlayerIsInOwnWorld()) {
        SetCharacterInvincibility(X4_4, Enabled);
        SetCharacterInvincibility(1035470220, Enabled);
    }
    WaitFor(EventFlag(1035472211));
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterImmortality(X4_4, Enabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    ChangeCharacterEnableState(1035470220, Enabled);
});

$Event(1035472210, Restart, function() {
    if (EventFlag(1035470215)) {
        ChangeCharacterEnableState(1035475210, Disabled);
        SetGeneratorState(1035473210, Disabled);
        SetGeneratorState(1035473211, Disabled);
        SetGeneratorState(1035473212, Disabled);
        SetGeneratorState(1035473213, Disabled);
        SetGeneratorState(1035473214, Disabled);
        SetGeneratorState(1035473215, Disabled);
        SetGeneratorState(1035473216, Disabled);
        SetGeneratorState(1035473217, Disabled);
        SetGeneratorState(1035473218, Disabled);
        SetGeneratorState(1035473219, Disabled);
        SetGeneratorState(1035473220, Disabled);
        SetGeneratorState(1035473221, Disabled);
        SetGeneratorState(1035473222, Disabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(1035470210, Disabled);
    ChangeCharacterEnableState(1035470211, Disabled);
    ChangeCharacterEnableState(1035470212, Disabled);
    SetGeneratorState(1035473210, Disabled);
    SetGeneratorState(1035473211, Disabled);
    SetGeneratorState(1035473212, Disabled);
    SetGeneratorState(1035473213, Disabled);
    SetGeneratorState(1035473214, Disabled);
    SetGeneratorState(1035473215, Disabled);
    SetGeneratorState(1035473216, Disabled);
    SetGeneratorState(1035473217, Disabled);
    SetGeneratorState(1035473218, Disabled);
    SetGeneratorState(1035473219, Disabled);
    SetGeneratorState(1035473220, Disabled);
    SetGeneratorState(1035473221, Disabled);
    SetGeneratorState(1035473222, Disabled);
    WaitFor(EventFlag(1035472211));
    ChangeCharacterEnableState(1035470210, Enabled);
    ChangeCharacterEnableState(1035470211, Enabled);
    ChangeCharacterEnableState(1035470212, Enabled);
    SetGeneratorState(1035473210, Enabled);
    SetGeneratorState(1035473211, Enabled);
    SetGeneratorState(1035473212, Enabled);
    SetGeneratorState(1035473213, Enabled);
    SetGeneratorState(1035473214, Enabled);
    SetGeneratorState(1035473215, Enabled);
    SetGeneratorState(1035473216, Enabled);
    SetGeneratorState(1035473217, Enabled);
    SetGeneratorState(1035473218, Enabled);
    SetGeneratorState(1035473219, Enabled);
    SetGeneratorState(1035473220, Enabled);
    SetGeneratorState(1035473221, Enabled);
    SetGeneratorState(1035473222, Enabled);
    EndEvent();
});

$Event(1035472220, Restart, function() {
    if (EventFlag(1035470215)) {
        ChangeAssetEnableState(1035471210, Disabled);
        DeleteAssetfollowingSFX(1035471210, true);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1035471210, true);
    CreateAssetfollowingSFX(1035471210, 200, 1500);
    WaitFor(EventFlag(1035470200) && EventFlag(1035470201) && EventFlag(1035470202));
    SetEventFlag(TargetEventFlagType.EventFlag, 1035470215, ON);
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    PlaySE(1035471210, SoundType.SFX, 1500);
    ChangeAssetEnableState(1035471210, Disabled);
    DeleteAssetfollowingSFX(1035471210, true);
    ForceCharacterDeath(1035475210, false);
    SetGeneratorState(1035473210, Disabled);
    SetGeneratorState(1035473211, Disabled);
    SetGeneratorState(1035473212, Disabled);
    SetGeneratorState(1035473213, Disabled);
    SetGeneratorState(1035473214, Disabled);
    SetGeneratorState(1035473215, Disabled);
    SetGeneratorState(1035473216, Disabled);
    SetGeneratorState(1035473217, Disabled);
    SetGeneratorState(1035473218, Disabled);
    SetGeneratorState(1035473219, Disabled);
    SetGeneratorState(1035473220, Disabled);
    SetGeneratorState(1035473221, Disabled);
    SetGeneratorState(1035473222, Disabled);
    EndEvent();
});

$Event(1035472221, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(1035470215));
    WaitFor(ActionButtonInArea(9320, 1035471210) || EventFlag(1035470215));
    EndIf(EventFlag(1035470215));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1035471210, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472222, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(9210, 1035471211));
    DisplayGenericDialog(60011, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1035471211, 3);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1035472211, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472240, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1035470260));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !CharacterDead(X0_4));
    SetEventFlag(TargetEventFlagType.EventFlag, 1035472241, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 1035472242, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1035472241, 1035472242, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1035472241));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1035472241));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1035472241));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false, Equal, 1);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472270, Restart, function() {
    SetNetworkSyncState(Disabled);
    CreateBulletOwner(1035470270);
    WaitFor(InArea(10000, 1035472270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1035470270, 1035472271, 900, 802102000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1035470270, 1035472271, 900, 802102010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1035470270, 1035472271, 900, 802102020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1035470270, 1035472271, 900, 802102030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1035470270, 1035472271, 900, 802102040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1035470270, 1035472271, 900, 802102050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1035470270, 1035472271, 900, 802102060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1035470270, 1035472271, 900, 802102070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472580, Restart, function() {
    RegisterLadder(1035470580, 1035470581, 1035471580);
});
