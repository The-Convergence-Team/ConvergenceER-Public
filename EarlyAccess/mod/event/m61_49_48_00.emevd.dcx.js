// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 2049480800, 2049480000, 2049480950, 2049481950, 0);
    RegisterBonfire(2049480001, 2049481951, 0, 0, 0, 0);
    // Miqi fog gate
    InitializeEvent(0, 2049481500, 0);
    //Radahn & Mogh check region
    InitializeEvent(0, 2049482490, 0);
    InitializeEvent(0, 2049482800, 0);
    InitializeEvent(0, 2049482810, 0);
    InitializeEvent(0, 2049482811, 0);
    InitializeEvent(0, 2049482849, 0);
});

$Event(2049481500, Restart, function() {
    if (EventFlag(2049480500)) {
        DisableAsset(2049481500);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2049482550)) {
            DeleteAssetfollowingSFX(2049481500, true);
            CreateAssetfollowingSFX(2049481500, 101, 1550);
            SetNetworkconnectedEventFlagID(2049482550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(209504, 2049481500);
        flag = EventFlag(4927);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(2020004, PromptType.YESNO, NumberofOptions.NoButtons, 2049481500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(2049480500, ON);
        DeleteAssetfollowingSFX(2049481500, true);
        DisableAsset(2049481500);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(2049481500, true);
    CreateAssetfollowingSFX(2049481500, 101, 1550);
    EndEvent();
});

$Event(2049482490, Restart, function() {
    EndIf(EventFlag(4927));
    EndIf(!EventFlag(9112) || !EventFlag(9130)); // 9112 Mogh | 9130 Radahn
    WaitFor(InArea(10000, 2049482490) && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(4927, ON);
    SetSpEffect(20000, 20004230);
});

$Event(2049482800, Restart, function() {
    EndIf(EventFlag(2049480800));
    WaitFor(CharacterHPValue(2049480800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2049480800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2049480800));
    HandleBossDefeatAndDisplayBanner(2049480800, TextBannerType.LegendFelled);
    SetEventFlagID(2049480800, ON);
    SetEventFlagID(9164, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61164, ON);
    }
});

$Event(2049482810, Restart, function() {
    if (EventFlag(2049480800)) {
        DisableCharacter(2049485800);
        DisableCharacterCollision(2049485800);
        ForceCharacterDeath(2049485800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(2049485800);
    EnableCharacterInvincibility(2049485800);
    SetSpEffect(2049480100, 9531);
    DisableCharacterCollision(2049485800);
    if (!EventFlag(2049480801)) {
        SetSpEffect(2049480100, 9531);
        IssueShortWarpRequest(2049480800, TargetEntityType.Area, 2049482810, -1);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 2049482801))
                || HasDamageType(2049480800, 10000, DamageType.Unspecified));
        if (PlayerIsInOwnWorld()) {
            SendInvadingPhantomsHome(0);
        }
        SetNetworkconnectedEventFlagID(2049480801, ON);
        EnableCharacterCollision(2049485800);
        SetSpEffect(2049480800, 5000);
        ChangeCharacterPatrolBehavior(2049480800, 2049483810);
        WaitFixedTimeRealFrames(1);
        EnableCharacterAI(2049485800);
        DisableCharacterInvincibility(2049485800);
        SetNetworkUpdateRate(2049485800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetSpEffect(2049480100, 9532);
        WaitFixedTimeSeconds(5);
    } else {
L1:
        IssueShortWarpRequest(2049480800, TargetEntityType.Area, 2049482810, -1);
        WaitFor(EventFlag(2049482805) && InArea(10000, 2049482800));
        EnableCharacterCollision(2049485800);
        SetSpEffect(2049480800, 5000);
        ChangeCharacterPatrolBehavior(2049480800, 2049483810);
        WaitFixedTimeRealFrames(1);
        EnableCharacterAI(2049485800);
        DisableCharacterInvincibility(2049485800);
        SetNetworkUpdateRate(2049485800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetSpEffect(2049480100, 9532);
    }
L2:
    WaitFixedTimeSeconds(0.5);
    DisplayBossHealthBar(Enabled, 2049480800, 0, 905000000);
});

$Event(2049482811, Restart, function() {
    EndIf(EventFlag(2049480800));
    WaitFor(CharacterHasSpEffect(2049480800, 10010048));
    SetNetworkconnectedEventFlagID(2049482802, ON);
});

$Event(2049482849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2049480800, 2049481800, 2049482800, 2049482805, 2049485800, 10000, 2049480801, 2049482801);
    InitializeCommonEvent(0, 9005801, 2049480800, 2049481800, 2049482800, 2049482805, 2049482806, 10000);
    InitializeCommonEvent(0, 9005811, 2049480800, 2049481800, 4, 2049480801);
    InitializeCommonEvent(0, 9005811, 2049480800, 2049481801, 4, 0);
    InitializeCommonEvent(0, 9005822, 2049480800, 950000, 2049482805, 2049482806, 0, 2049482802, 0, 0);
});
