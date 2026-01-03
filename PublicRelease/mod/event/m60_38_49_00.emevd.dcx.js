// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1038492300, 0);
    InitializeEvent(0, 1038492301, 0);
    InitializeEvent(0, 1038492306, 0);
    InitializeEvent(0, 1038492400, 0);
    InitializeEvent(0, 1038492401, 0);
    InitializeEvent(0, 1038492402, 0);
    InitializeEvent(0, 1038492304, 0);
    InitializeEvent(0, 1038492320, 0);
    InitializeEvent(0, 1038492580, 0);
    InitializeCommonEvent(0, 90005250, 1038490302, 1038492302, 0, -1);
    InitializeCommonEvent(0, 90005250, 1038490313, 1038492313, 0, -1);
    InitializeCommonEvent(0, 90005706, 1038490700, 930018, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038490700, true);
    InitializeEvent(0, 1038492310, 1038490200);
    InitializeEvent(0, 1038492305, 0);
});

$Event(1038492300, Restart, function() {
    GotoIf(L3, EventFlag(1038490201));
    GotoIf(L0, EventFlag(1038492207));
    GotoIf(L0, EventFlag(1038492208));
    GotoIf(L1, !EventFlag(1038492207));
    GotoIf(L1, !EventFlag(1038492208));
L0:
    SetEventFlagID(1038492212, OFF);
    if (EventFlag(1038492210)) {
        DisableCharacter(1038490200);
    }
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    if (!EventFlag(1038492210)) {
        EnableCharacter(1038490200);
        SetNetworkUpdateRate(1038490200, true, CharacterUpdateFrequency.AlwaysUpdate);
    }
    SetEventFlagID(1038492212, ON);
    if (!EventFlag(1038492209)) {
        CreateAssetfollowingSFX(1038491200, 100, 806740);
        SetEventFlagID(1038492209, ON);
    }
    WaitFor(
        !EventFlag(1038492207)
            || !EventFlag(1038492208)
            || (!EventFlag(1038492210) && !EventFlag(1038492212))
            || (EventFlag(1038492210) && EventFlag(1038492212)));
    WaitFixedTimeFrames(1);
    RestartEvent();
L1:
    DisableCharacter(1038490200);
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    DeleteAssetfollowingSFX(1038491200, true);
    SetEventFlagID(1038492209, OFF);
    WaitFor(EventFlag(1038492207) || EventFlag(1038492208));
    WaitFixedTimeFrames(1);
    RestartEvent();
L3:
    DisableCharacter(1038490200);
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    DeleteAssetfollowingSFX(1038491200, true);
    SetNetworkconnectedEventFlagID(1038492207, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
});

$Event(1038492301, Restart, function() {
    EnableNetworkSync();
    EndIf(CharacterType(10000, TargetType.BlackPhantom) || CharacterInvadeType(10000, 7));
    EndIf(EventFlag(1038490201));
    GotoIf(L0, !EventFlag(1038492206) || !EntityInRadiusOfEntity(1038490200, 10000, 150, 1));
    GotoIf(L1, EventFlag(1038492206) && EntityInRadiusOfEntity(1038490200, 10000, 150, 1));
    WaitFixedTimeSeconds(1);
    WaitFor(!EventFlag(1038492206));
    Goto(L2);
L0:
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492207, OFF);
    }
    if (!PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492208, OFF);
    }
    WaitFixedTimeSeconds(1);
    WaitFor(EventFlag(1038492206));
    Goto(L2);
L1:
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492207, ON);
    }
    if (!PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492208, ON);
    }
    WaitFor(!EventFlag(1038492206));
    Goto(L2);
L2:
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1038492304, Restart, function() {
    EnableNetworkSync();
    if (EventFlag(1038490201)) {
        DisableCharacter(1038490201);
        DisableCharacterCollision(1038490201);
        ForceCharacterDeath(1038490201, false);
        DisableCharacter(1038490202);
        DisableCharacterCollision(1038490202);
        ForceCharacterDeath(1038490202, false);
        DisableCharacter(1038490203);
        DisableCharacterCollision(1038490203);
        ForceCharacterDeath(1038490203, false);
        DisableCharacter(1038490204);
        DisableCharacterCollision(1038490204);
        ForceCharacterDeath(1038490204, false);
        DisableCharacter(1038490205);
        DisableCharacterCollision(1038490205);
        ForceCharacterDeath(1038490205, false);
        DisableCharacter(1038490206);
        DisableCharacterCollision(1038490206);
        ForceCharacterDeath(1038490206, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(1038490201));
    WaitFor(
        CharacterDead(1038490201)
            && CharacterDead(1038490202)
            && CharacterDead(1038490203)
            && CharacterDead(1038490204)
            && CharacterDead(1038490205)
            && CharacterDead(1038490206));
    SetNetworkconnectedEventFlagID(1038490201, ON);
});

$Event(1038492305, Restart, function() {
    EndIf(EventFlag(1038490201));
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(1038492206, ON);
    SetNetworkconnectedEventFlagID(1038492207, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
    SetNetworkconnectedEventFlagID(1038492209, OFF);
    SetNetworkconnectedEventFlagID(1038492210, OFF);
    SetNetworkconnectedEventFlagID(1038492211, OFF);
});

$Event(1038492306, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    WaitFixedTimeSeconds(7);
    SetNetworkconnectedEventFlagID(1038492206, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
    WaitFixedTimeSeconds(5);
    SetNetworkconnectedEventFlagID(1038492206, ON);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1038492310, Restart, function(X0_4) {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EnableCharacterDefaultBackread(X0_4);
    DisableCharacterGravity(X0_4);
});

$Event(1038492320, Restart, function() {
    if (GameCycle() == 0) {
        SetSpEffect(1038490200, 16630);
        EndEvent();
    }
    if (GameCycle() == 1) {
        SetSpEffect(1038490200, 16631);
        EndEvent();
    }
    if (GameCycle() == 2) {
        SetSpEffect(1038490200, 16632);
        EndEvent();
    }
    if (GameCycle() == 3) {
        SetSpEffect(1038490200, 16633);
        EndEvent();
    }
    if (GameCycle() == 4) {
        SetSpEffect(1038490200, 16634);
        EndEvent();
    }
    if (GameCycle() == 5) {
        SetSpEffect(1038490200, 16635);
        EndEvent();
    }
    if (GameCycle() == 6) {
        SetSpEffect(1038490200, 16636);
        EndEvent();
    }
    if (GameCycle() >= 7) {
        SetSpEffect(1038490200, 16637);
        EndEvent();
    }
});

$Event(1038492400, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 1038492300));
    SetEventFlagID(1038492210, ON);
    WaitFor(!InArea(10000, 1038492300));
    SetEventFlagID(1038492210, OFF);
    RestartEvent();
});

$Event(1038492401, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EndIf(PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 1038492300));
    SetEventFlagID(1038492210, ON);
    WaitFor(!InArea(10000, 1038492300));
    SetEventFlagID(1038492210, OFF);
    RestartEvent();
});

$Event(1038492580, Default, function() {
    RegisterLadder(1038490580, 1038490581, 1038491580);
    RegisterLadder(1038490582, 1038490583, 1038491582);
    RegisterLadder(1038490584, 1038490585, 1038491584);
});



// Frenzy Tower Immunity
$Event(1038492402, Default, function() {
    EndIf(EventFlag(1038492210));
    WaitFor(
        !CharacterHasSpEffect(10000, 312700) && // Clarifying Horn Charm
        !CharacterHasSpEffect(10000, 511051) && // Purifying Crystal Tear
        !CharacterHasSpEffect(10000, 1738000) && // Heart of Chaos
        !CharacterHasSpEffect(10000, 7001100) // Tarnished Endurance (Scaled Armor)
    );
    SetSpEffect(10000, 10236);
    WaitFor(
        CharacterHasSpEffect(10000, 312700) || // Clarifying Horn Charm
        CharacterHasSpEffect(10000, 511051) || // Purifying Crystal Tear
        CharacterHasSpEffect(10000, 1738000) || // Heart of Chaos
        CharacterHasSpEffect(10000, 7001100) // Tarnished Endurance (Scaled Armor)
    );
    ClearSpEffect(10000, 10236);
    RestartEvent();
})
