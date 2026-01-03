// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(34140000, 34141950, 0, 0, 0, 5);
    RegisterBonfire(34140001, 34141951, 0, 0, 0, 5);
    InitializeEvent(0, 34142850, 0);
    InitializeEvent(0, 34140860, 0);
    InitializeEvent(0, 34142899, 0);
    InitializeCommonEvent(0, 90005261, 34140300, 34142300, 1092616192, 0, -1);
    InitializeEvent(0, 34142250, 34140250, 34142250, 34140200, 34140210, 1, 34140720);
    InitializeEvent(0, 34142251, 34140250, 34142250, 34140200, 34140210, 1);
    InitializeEvent(0, 34142252, 34140250, 0, 34140200, 0);
    InitializeEvent(0, 34142870, 0);
    InitializeEvent(0, 34142865, 0);
    InitializeEvent(0, 34142875, 0);
    InitializeEvent(0, 34142510, 0);
    InitializeCommonEvent(0, 90005501, 34140510, 34140511, 4, 34141510, 34141511, 34141512, 34140512);
    InitializeCommonEvent(0, 90005508, 34140515, 34141515, 0, 34141515, 34141516, 34141517, 34140517);
    InitializeCommonEvent(0, 90005110, 193, 9104, 34141600, 34140700, 8150, 806932, 9082, 60521, 0);
    InitializeCommonEvent(0, 90005110, 195, 9112, 34141610, 34140710, 8152, 806938, 9084, 60524, 0);
    InitializeCommonEvent(0, 91005600, 34142800, 34141695, 5);
    InitializeEvent(0, 34142550, 0);
    InitializeEvent(0, 34140700, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(34140700, true);
    InitializeEvent(0, 34140519, 0);
});

$Event(34142250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4) && CharacterDead(X12_4));
    WaitFixedTimeSeconds(1);
    if (Signed(X16_4) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601111);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601110);
    }
L3:
    WaitFixedTimeSeconds(1);
    EndIf(!PlayerIsInOwnWorld());
    if (Signed(X20_4) != 0) {
        AwardItemsIncludingClients(X20_4);
    }
    SetNetworkconnectedEventFlagID(X0_4, ON);
});

$Event(34142251, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EnableCharacterImmortality(X8_4);
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        DisableCharacter(X12_4);
        DisableCharacterCollision(X12_4);
        EndEvent();
    }
L0:
    if (EventFlag(X4_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        EndEvent();
    }
L1:
    DisableCharacter(X12_4);
    DisableCharacterCollision(X12_4);
    DisableCharacterGravity(X12_4);
    DisableCharacterAI(X12_4);
    EnableCharacterFadeOnEnable(X12_4);
    WaitFor(CharacterHasSpEffect(X8_4, 12610));
    EnableCharacterDefaultBackread(X8_4);
    EnableCharacterDefaultBackread(X12_4);
    WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Character, X8_4, 900, X8_4);
    if (Signed(X16_4) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 10, 641912);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 10, 641911);
    }
L3:
    WaitFixedTimeSeconds(0.2);
    DisableCharacter(X0_4);
    EnableCharacter(X12_4);
    EnableCharacterGravity(X12_4);
    EnableCharacterCollision(X12_4);
    EnableCharacterAI(X12_4);
    DisableCharacter(X8_4);
    DisableCharacterDefaultBackread(X8_4);
    DisableCharacterDefaultBackread(X12_4);
    ForceAnimationPlayback(X12_4, 20026, false, true, false);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(34142252, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterHPValue(X8_4) == 1);
    EnableCharacterInvincibility(X8_4);
    SetSpEffect(X8_4, 12614);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
});

$Event(34142510, Default, function() {
    InitializeCommonEvent(0, 90005500, 34140510, 34140511, 4, 34141510, 34141511, 34143511, 34141512, 34143512, 34142511, 34142512, 34140512, 34140513, 0);
    InitializeCommonEvent(0, 90005507, 34140515, 34141515, 0, 34141515, 34141516, 34142518, 34141517, 34142519, 34142516, 34142517, 34140517, 34142517, 0);
});

$Event(34140519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(34140510, ON);
    SetThisEventSlot(ON);
});

$Event(34142550, Restart, function() {
    if (EventFlag(34140550)) {
        DisableAsset(34141550);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(34142550)) {
            DeleteAssetfollowingSFX(34141550, true);
            CreateAssetfollowingSFX(34141550, 101, 1541);
            SetNetworkconnectedEventFlagID(34142550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(9505, 34141550);
        flag = EventFlag(400001);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(20005, PromptType.YESNO, NumberofOptions.OneButton, 34141550, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(34140550, ON);
        DeleteAssetfollowingSFX(34141550, true);
        DisableAsset(34141550);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(34141550, true);
    CreateAssetfollowingSFX(34141550, 101, 1541);
    EndEvent();
});

$Event(34142850, Restart, function() {
    EndIf(EventFlag(34140850));
    WaitFor(CharacterHPValue(34140850) <= 0 && CharacterHPValue(34140851) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(34140850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34140850) && CharacterDead(34140851));
    WaitFixedTimeSeconds(1.5);
    HandleBossDefeatAndDisplayBanner(34140850, TextBannerType.EnemyFelled);
    SetEventFlagID(34140850, ON);
    SetEventFlagID(9174, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(10740, ON);
    }
    EndEvent();
});

$Event(34140860, Restart, function() {
    if (EventFlag(34140850)) {
        DisableCharacter(34140850);
        DisableCharacterCollision(34140850);
        ForceCharacterDeath(34140850, false);
        DisableCharacter(34140851);
        DisableCharacterCollision(34140851);
        ForceCharacterDeath(34140851, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(34140850);
    DisableCharacterAI(34140851);
    DisableCharacter(34140850);
    DisableCharacter(34140851);
    if (!EventFlag(34140851)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 34142855))
                || HasDamageType(34140850, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(34140851, ON);
    } else {
L1:
        WaitFor(InArea(10000, 34142856));
        WaitFixedTimeSeconds(1);
    }
L2:
    SetNetworkconnectedEventFlagID(34142855, ON);
    EnableCharacter(34140850);
    EnableCharacter(34140851);
    EnableCharacterAI(34140850);
    EnableCharacterAI(34140851);
    SetNetworkUpdateRate(34140850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(34140851, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34140850, 1, 902140000);
    DisplayBossHealthBar(Enabled, 34140851, 0, 902140001);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(34142865, Restart, function() {
    EndIf(EventFlag(34140865));
    WaitFor(EventFlag(34140850));
    ChangeWeather(Weather.None, -1, false);
    WaitFixedTimeSeconds(4);
    SetSpEffect(20000, 8870);
    WaitFixedTimeSeconds(2);
    SetEventFlagID(34140865, ON);
    WarpPlayer(34, 14, 0, 0, 34142852, 0);
});

$Event(34142870, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(34140850));
    if (!EventFlag(34142885)) {
        WaitFor(InArea(10000, 34142870));
        ChangeWeather(Weather.Fog, 10, false);
    }
L0:
    WaitFixedTimeSeconds(2);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, 34142851, -1, 10000, false, true);
    ChangeWeather(Weather.Default, -1, false);
    SetPlayerPositionDisplay(Disabled, true, 34, 14, 0, 0, 481.98, 26.13, -267.33);
});

$Event(34142875, Restart, function() {
    EndIf(!EventFlag(34140850));
    MoveBloodstainAndDroppedItems(34142875, 34142876);
});

$Event(34142899, Default, function() {
    InitializeCommonEvent(0, 9005822, 34140850, 921200, 34142855, 34142856, 0, 0, 0, 0);
});

$Event(34140700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(34149200));
    WaitFor(EventFlag(11109687));
    WaitFor(InArea(20000, 34142700));
    SetEventFlagID(34149200, ON);
});
