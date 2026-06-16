// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1035422150, 0);
    RegisterBonfire(1035420000, 1035421950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 1035420800, 904820600, 5);
    InitializeCommonEvent(0, 90005860, 1035420800, 0, 1035420800, 0, 30225, 0);
    InitializeCommonEvent(0, 90005300, 1035420220, 1035420220, 40208, 0, 0);
    InitializeCommonEvent(0, 90005780, 1035420800, 1035422160, 1035422161, 1035420710, 20, 1035422700, 1034429209, 1, 0);
    InitializeCommonEvent(0, 90005781, 1035420800, 1035422160, 1035422161, 1035420710);
    InitializeCommonEvent(0, 90005783, 1035420800, 1035422160, 1035422161, 1035420710, 1035422700, 1035422160, 0);
    InitializeCommonEvent(0, 90005704, 1035420700, 3541, 3540, 1035429201, 3);
    InitializeCommonEvent(0, 90005703, 1035420700, 3541, 3542, 1035429201, 3541, 3540, 3544, -1);
    InitializeCommonEvent(0, 90005702, 1035420700, 3543, 3540, 3544);
    InitializeEvent(0, 1035423700, 1035420700, 1035421700);
    InitializeEvent(0, 1035420701, 1035420700, 1035421700);
    InitializeEvent(0, 1035423702, 1035420700);
    InitializeEvent(0, 1035423703, 1035420700);
    InitializeEvent(0, 1035420710, 1035420706);
    InitializeCommonEvent(0, 90005704, 1035420706, 3741, 3740, 1035429251, 3);
    InitializeCommonEvent(0, 90005707, 1035420706, 3741, 3742, 1035429251, 3741, 3740, 3743, 0, 20007, 1035422712, 1035422713);
    InitializeCommonEvent(0, 90005709, 1035420706, 905, 603000);
    InitializeCommonEvent(0, 90005709, 1035420706, 960, 603050);
    InitializeCommonEvent(0, 90005750, 1035421710, 4350, 103930, 400393, 400393, 1035429255, 0);
    InitializeEvent(0, 1035420711, 1035420706);
    InitializeEvent(0, 1035420712, 0);
    InitializeEvent(0, 1035422151, 0);
    InitializeEvent(0, 1035422152, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1035420700, true);
    SetCharacterBackreadState(1035420705, true);
    SetCharacterBackreadState(1035420706, true);
    InitializeCommonEvent(0, 90005260, 1035420800, 1035422800, 1109917696, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420201, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005251, 1035420202, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005251, 1035420203, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420204, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005201, 1035420205, 30004, 20004, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1035420206, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420207, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005251, 1035420208, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420209, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420210, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420211, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420212, 1035422204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420315, 1035422315, 0, -1);
    InitializeCommonEvent(0, 90005250, 1035420317, 1035422317, 0, -1);
    InitializeCommonEvent(0, 90005200, 1035420370, 30003, 20003, 1035422370, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1035420374, 30003, 20003, 1035422374, 0, 0, 0, 0, 0);
});

$Event(1035422150, Default, function() {
    if (EventFlag(1035420150)) {
        ForceAnimationPlayback(1035420150, 30011, false, false, false);
        EnableCharacterInvincibility(1035420150);
        ChangeCharacterDispmask(1042350150, 10, ON);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(780000, 780009, OFF);
    }
    ForceAnimationPlayback(1035420150, 30010, false, false, false);
    EnableCharacterInvincibility(1035420150);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9630, 1035421152));
    if (PlayerIsInOwnWorld()) {
        if (!(PlayerHasArmorEquipped(ArmorType.Body, 90100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 91100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 630100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 631100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 890100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 900100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 901100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 902100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 903100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 960100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 961100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 962100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 990100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 991100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1000100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 963100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 964100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 220100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 221100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1990100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1991100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 290100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 291100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 292100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 390100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 430100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1010100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1011100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 293100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 294100, -1)
            || PlayerHasArmorEquipped(ArmorType.Arms, 260200, -1)
            || PlayerHasArmorEquipped(ArmorType.Arms, 1070200, -1)
            || PlayerHasArmorEquipped(ArmorType.Arms, 1890200, -1))) {
            SetNetworkconnectedEventFlagID(780000, ON);
            SetNetworkconnectedEventFlagID(780001, OFF);
        } else {
            SetNetworkconnectedEventFlagID(780000, OFF);
            SetNetworkconnectedEventFlagID(780001, ON);
        }
    }
L10:
    SetEventFlagID(9021, ON);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(12060000, CutscenePlayMode.Skippable, 1035422152, 60354200, 10000, 0, false);
    } else {
        PlayCutsceneToPlayer(12060000, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    SetCameraAngle(34.8, -136.37);
    WaitFixedTimeRealFrames(1);
    if (PlayerIsInOwnWorld()) {
        ForceAnimationPlayback(10000, 67100, false, false, false);
    }
    BatchSetNetworkconnectedEventFlags(780000, 780009, OFF);
    RemoveItemFromPlayer(ItemType.Goods, 8121, 1);
    SetEventFlagID(1035420150, ON);
});

$Event(1035422151, Default, function() {
    if (EventFlag(1035420150)) {
        DisableAsset(1035421151);
        EndEvent();
    }
L0:
    cond = PlayerIsInOwnWorld();
    WaitFor(EventFlag(1035420150));
    WaitFor(cond);
    DisableAsset(1035421151);
});

$Event(1035420200, Default, function() {
    GotoIf(L2, !PlayerInMap(60, 35, 42, 0));
    GotoIf(L0, InArea(10000, 1035422300));
    GotoIf(L1, !InArea(10000, 1035422300));
    Goto(L2);
L0:
    ChangeWeather(Weather.HeavyFog, -1, true);
    Goto(L2);
L1:
    ChangeWeather(Weather.None, -1, true);
L2:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035423700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3540)) {
            SetEventFlagID(1035429205, OFF);
        }
    }
L10:
    if (!EventFlag(3545)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(3545));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3540));
    GotoIf(L2, EventFlag(3541));
    GotoIf(L3, EventFlag(3542));
    GotoIf(L4, EventFlag(3543));
L1:
    GotoIf(L11, !EventFlag(1035420701));
    Goto(L12);
L11:
    SetCharacterBackreadState(X0_4, false);
    DisableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    EnableAsset(X4_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 930022, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L12:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 930020, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3545));
    RestartEvent();
});

$Event(1035420701, Restart, function(X0_4, X4_4) {
    DisableAsset(1035421701);
    if (!EventFlag(1035420701)) {
        EnableAsset(1035421701);
        CreateAssetfollowingSFX(1035421701, 100, 600904);
        WaitFor(PlayerIsInOwnWorld() && HasDamageType(X4_4, 20000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(1035420701, ON);
        DisableCharacterGravity(X0_4);
        DisableCharacterCollision(X0_4);
        SetCharacterMaphit(X0_4, false);
        ForceAnimationPlayback(X4_4, 1, false, false, false);
        WaitFixedTimeSeconds(1);
        DeleteAssetfollowingSFX(1035421701, true);
        ForceAnimationPlayback(X0_4, 20042, false, false, false);
        EnableCharacter(X0_4);
        WaitFixedTimeFrames(1);
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 220, 302603);
        WaitFixedTimeSeconds(1);
    }
L1:
    DisableAsset(X4_4);
    WaitFixedTimeFrames(1);
    EnableCharacterGravity(X0_4);
    EnableCharacterCollision(X0_4);
    SetCharacterMaphit(X0_4, true);
    EndEvent();
});

$Event(1035423702, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3540));
    EndIf(!EventFlag(3545));
    WaitFor(EventFlag(1035429210));
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 20054, false, false, false);
    WaitFixedTimeSeconds(5);
    BatchSetNetworkconnectedEventFlags(3540, 3544, OFF);
    SetNetworkconnectedEventFlagID(3543, ON);
    SaveRequest();
    WaitFixedTimeSeconds(5);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1035423703, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3545));
    EndIf(!EventFlag(3540));
    WaitFor(EventFlag(3541));
    ForceAnimationPlayback(X0_4, 20052, false, false, false);
    RestartEvent();
});

$Event(1035420710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3740)) {
            SetEventFlagID(1035429252, OFF);
        }
    }
L19:
    if (!EventFlag(3750)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3750));
        RestartEvent();
    }
L10:
    GotoIf(L0, EventFlag(3740));
    GotoIf(L1, EventFlag(3741));
    GotoIf(L2, EventFlag(3742));
    GotoIf(L3, EventFlag(3743));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    if (!EventFlag(1035422714)) {
        ForceAnimationPlayback(X0_4, 930002, false, false, false);
    } else {
        ForceAnimationPlayback(X0_4, 20009, false, false, false);
        DisableCharacterFadeOnEnable(X0_4);
    }
    Goto(L20);
L1:
L2:
L3:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacterImmortality(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3750));
    RestartEvent();
});

$Event(1035420711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1034509406));
    WaitFor(EventFlag(1034509406));
    ForceAnimationPlayback(X0_4, 20007, false, false, false);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(1035429255, ON);
});

$Event(1035420712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1035420150));
    WaitFor(EventFlag(1035420150));
    SetEventFlagID(3758, ON);
    SetNetworkconnectedEventFlagID(1035422714, ON);
});

$Event(1035420720, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(4220)) {
            SetEventFlagID(10009703, OFF);
        }
    }
L19:
    if (!(EventFlag(4227) && !EventFlag(1035422160))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4227) && !EventFlag(1035422160));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4220));
    GotoIf(L2, EventFlag(4221));
    GotoIf(L4, EventFlag(4223));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    EnableAsset(X4_4);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableAsset(X4_4);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4227) || EventFlag(1035422160));
    RestartEvent();
});

$Event(1035420721, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(4221, 4223));
    SetNetworkconnectedEventFlagID(1034429209, OFF);
    EndEvent();
});

$Event(1035422152, Default, function() {
    if (EventFlag(114)) {
        DisableAsset(1035421400);
        DisableAsset(1035421401);
        DisableAsset(1035421402);
        //Backdoor Access to Ranni's Two-Finger Crevice
        DisableAsset(1035421403);
        EndEvent();
    }
L0:
    GotoIf(S0, PlayerIsInOwnWorld());
    Goto(L10);
S0:
    if (!ThisEventSlot()) {
        DeleteMapSFX(1035421400, true);
        DeleteMapSFX(1035421402, true);
        //Backdoor Access to Ranni's Two-Finger Crevice
        DeleteMapSFX(1035421403, true);
        CreateAssetfollowingSFX(1035421400, 101, 1507);
        CreateAssetfollowingSFX(1035421402, 101, 1507);
        //Backdoor Access to Ranni's Two-Finger Crevice
        CreateAssetfollowingSFX(1035421403, 101, 1507);
    }
    WaitFor((PlayerIsInOwnWorld() && ActionButtonInArea(9506, 1035421401)) || EventFlag(114));
    if (!EventFlag(114)) {
        if (PlayerIsInOwnWorld()) {
            DisplayGenericDialog(20006, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
        }
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    DeleteMapSFX(1035421400, true);
    DeleteMapSFX(1035421402, true);
    //Backdoor Access to Ranni's Two-Finger Crevice
    DeleteMapSFX(1035421403, true);
    DisableAsset(1035421400);
    DisableAsset(1035421401);
    DisableAsset(1035421402);
    //Backdoor Access to Ranni's Two-Finger Crevice
    DisableAsset(1035421403);
    EndEvent();
L10:
    DeleteMapSFX(1035421400, true);
    DeleteMapSFX(1035421402, true);
    //Backdoor Access to Ranni's Two-Finger Crevice
    DeleteMapSFX(1035421403, true);
    CreateAssetfollowingSFX(1035421400, 101, 1507);
    CreateAssetfollowingSFX(1035421402, 101, 1507);
    //Backdoor Access to Ranni's Two-Finger Crevice
    CreateAssetfollowingSFX(1035421403, 101, 1507);
    WaitFor(EventFlag(114));
    DeleteMapSFX(1035421400, true);
    DeleteMapSFX(1035421402, true);
    //Backdoor Access to Ranni's Two-Finger Crevice
    DeleteMapSFX(1035421403, true);
    DisableAsset(1035421400);
    DisableAsset(1035421401);
    DisableAsset(1035421402);
    //Backdoor Access to Ranni's Two-Finger Crevice
    DisableAsset(1035421403);
    EndEvent();
});
