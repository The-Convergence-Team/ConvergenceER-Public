// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2048420000, 2048421950, 0, 0, 0, 0);
    RegisterBonfire(2048420001, 2048421951, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2048420200, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2048420202, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005557, 2048421680);
    InitializeCommonEvent(0, 90005557, 2048421681);
    InitializeCommonEvent(0, 90005557, 2048421682);
    InitializeCommonEvent(0, 90005557, 2048421683);
    InitializeCommonEvent(0, 90005557, 2048421684);
    InitializeCommonEvent(0, 90005557, 2048421685);
    InitializeCommonEvent(0, 90005557, 2048421686);
    InitializeCommonEvent(0, 90005557, 2048421687);
    InitializeCommonEvent(0, 90005557, 2048421688);
    InitializeCommonEvent(0, 90005556, 2048421689, 2048427900);
    $InitializeEvent(0, 2048420700, 2048420700, 4260, 4261, 4262, 4263, 4265, 2048429202, 70, 2048422703, 2048422704, 90100, 90101, 2048429222, 2048429223);
    $InitializeEvent(0, 2048420702, 4265, 2048429210, 2048429211, 2048422703, 2048422704, 2048429212, 2048429216, 4261);
    $InitializeEvent(0, 2048420703, 2048422707, 4265, 2048422706, 20, 2048422703);
    $InitializeEvent(1, 2048420703, 2048422708, 4265, 2048422706, 20, 2048422704);
    InitializeCommonEvent(0, 90005703, 2048420700, 4261, 4262, 2048429201, 4261, 4260, 4264, 0);
    InitializeCommonEvent(0, 90005704, 2048420700, 4261, 4260, 2048429201, 3);
    InitializeCommonEvent(0, 90005702, 2048420700, 4263, 4260, 4264);
    $InitializeEvent(0, 2048420701, 4265, 4261, 2048422703, 2048422704, 90403, 90404, 2048420700, 4263, 7, 2);
    $InitializeCommonEvent(0, 20000350, 2048421701, 2048421702, 2055550103, 2055550113, 2048420550, 2048421703); // Shrine Init
    InitializeCommonEvent(0, 90005300, 2048424704, 2048421704, 0, 0, 1); // Curseblade otk
});

$Event(2048420700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, range, eventFlagId7, eventFlagId8, animationId, animationId2, eventFlagId9, eventFlagId10) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    SetEventFlagID(eventFlagId10, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(eventFlagId)) {
            SetEventFlagID(eventFlagId6, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!EventFlag(eventFlagId5)) {
        WaitFor(EventFlag(eventFlagId5));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L2, EventFlag(eventFlagId2));
    GotoIf(L3, EventFlag(eventFlagId3));
    GotoIf(L4, EventFlag(eventFlagId4));
L1:
    GotoIf(L20, EventFlag(eventFlagId9));
    WaitFor(EventFlag(eventFlagId7) || EventFlag(eventFlagId8));
    WaitFixedTimeRealFrames(1);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ResetCharacterPosition(chrEntityId);
    if (EventFlag(eventFlagId7)) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    }
    if (EventFlag(eventFlagId8)) {
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
    }
    SetCharacterTalkRange(chrEntityId, range);
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    Goto(L20);
L3:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    Goto(L20);
L4:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    ForceCharacterTreasure(chrEntityId);
    Goto(L20);
L20:
    WaitFor(!EventFlag(eventFlagId5) || EventFlag(eventFlagId10));
    RestartEvent();
});

$Event(2048420701, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, animationId, animationId2, entityId, eventFlagId5, targetDistance, targetTimeSeconds) {
    WaitFixedTimeFrames(2);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId5));
    if (!(EventFlag(eventFlagId) && !EventFlag(eventFlagId2))) {
        WaitFor(
            EventFlag(eventFlagId)
                && EventFlag(eventFlagId2)
                && (HasDamageType(entityId, 20000, DamageType.Unspecified)
                    || (EntityInRadiusOfEntity(20000, entityId, targetDistance, 1)
                        && ElapsedSeconds(targetTimeSeconds))));
        if (EventFlag(eventFlagId3)) {
            ForceAnimationPlayback(entityId, animationId, true, false, false);
        }
        if (EventFlag(eventFlagId4)) {
            ForceAnimationPlayback(entityId, animationId2, true, false, false);
        }
        WaitFixedTimeSeconds(5.5);
        RestartEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId3)) {
        ForceAnimationPlayback(entityId, animationId, true, false, false);
    }
    if (EventFlag(eventFlagId4)) {
        ForceAnimationPlayback(entityId, animationId2, true, false, false);
    }
    WaitFixedTimeSeconds(5.5);
    RestartEvent();
});

$Event(2048420702, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId));
    GotoIf(L1, EventFlag(eventFlagId8));
    GotoIf(L1, !EventFlag(eventFlagId2));
    GotoIf(L2, !EventFlag(eventFlagId3));
    Goto(L3);
L1:
    SetEventFlagID(eventFlagId4, ON);
    EndEvent();
L2:
    SetEventFlagID(eventFlagId5, ON);
    EndEvent();
L3:
    BatchSetEventFlags(eventFlagId6, eventFlagId7, OFF);
    RandomlySetEventFlagInRange(eventFlagId6, eventFlagId7, ON);
    if (EventFlag(eventFlagId7)) {
        SetEventFlagID(eventFlagId5, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId4, ON);
    EndEvent();
});

$Event(2048420703, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, timeSeconds, eventFlagId4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        WaitFor((EventFlag(eventFlagId) || EventFlag(eventFlagId3)) && EventFlag(eventFlagId4));
        EndIf(EventFlag(eventFlagId));
        WaitFixedTimeSeconds(timeSeconds);
        SetEventFlagID(eventFlagId3, OFF);
        RestartEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId2));
    RestartEvent();
});
