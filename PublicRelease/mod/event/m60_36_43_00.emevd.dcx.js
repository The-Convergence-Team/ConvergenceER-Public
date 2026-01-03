// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1036430000, 1036431950, 0, 0, 0, 5);
    //RegisterBonfire(1036430001, 1036431951, 0, 0, 0, 5);
    InitializeEvent(0, 1036433700, 1036430700, 1036431700);
    InitializeCommonEvent(0, 90005704, 1036430700, 4141, 4140, 1036439201, 3);
    InitializeCommonEvent(0, 90005703, 1036430700, 4141, 4142, 1036439201, 4141, 4140, 4144, -1);
    InitializeCommonEvent(0, 90005702, 1036430700, 4143, 4140, 4144);
    InitializeEvent(0, 1036432501, 0); // Start seated
    //InitializeCommonEvent(0, 98005305, 1036430986, 1036427010, 1036430986, 1036420010, 6102); // dig treasure
});

$Event(50, Default, function() {
    // Indestructible bench
    EnableAssetInvunerability(36420100);
    EnableAssetInvunerability(36420101);
    
    SetCharacterBackreadState(1036430700, true);
});

$Event(1036433700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4140)) {
            SetEventFlagID(1036439203, OFF);
        }
    }
L10:
    if (!EventFlag(4145)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4145));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4140));
    GotoIf(L2, EventFlag(4141));
    GotoIf(L3, EventFlag(4142));
    GotoIf(L4, EventFlag(4143));
L1:
    EnableAsset(X4_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    EnableAsset(X4_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    EnableAsset(X4_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    DisableAsset(X4_4);
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4145));
    RestartEvent();
});

$Event(1036432501, Default, function() {
    EndIf(!EventFlag(60907) || EventFlag(1036430501) || !InArea(10000, 1036420985));
    SetCameraAngle(20, -135);
    FadeToBlack(2, 0, true, 3)
    SetSpEffect(10000, 103000); // Rest
    WaitFixedTimeSeconds(2);
    FadeToBlack(0, 3, false, 0.1)
    SetEventFlagID(1036430501, ON);
});
