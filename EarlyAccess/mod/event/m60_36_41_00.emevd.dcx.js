// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,138,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1036410000, 1036411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005570, 60824, 54, 1036411500, 2, 1, 0);
    InitializeEvent(0, 1036413700, 1036410700, 1036410705);
    InitializeEvent(0, 1036413701, 1036410700);
    InitializeEvent(0, 1036413702, 1036410700);
    InitializeCommonEvent(0, 90005704, 1036410700, 4101, 4100, 1036419201, 3);
    InitializeCommonEvent(0, 90005703, 1036410700, 4101, 4102, 1036419201, 4101, 4100, 4104, -1);
    InitializeCommonEvent(0, 90005702, 1036410700, 4103, 4100, 4104);
    InitializeCommonEvent(0, 90005750, 1036411700, 4350, 104100, 400410, 400410, 1036419215, 0);
    InitializeEvent(0, 1036412870, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036410700, true);
    SetCharacterBackreadState(1036410705, true);
});

$Event(1036413700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4100)) {
            SetEventFlagID(1036419203, OFF);
        }
    }
L10:
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X4_4, TeamType.Disabled);
    ForceAnimationPlayback(X4_4, 30020, false, false, false);
    if (!EventFlag(4105)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4105));
        RestartEvent();
    }
L5:
    if (EventFlag(1051587800)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        SetEventFlagID(1036419215, ON);
    } else {
        GotoIf(L1, EventFlag(4100));
        GotoIf(L2, EventFlag(4101));
        GotoIf(L3, EventFlag(4102));
        GotoIf(L4, EventFlag(4103));
L1:
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        ForceAnimationPlayback(X0_4, 30020, false, false, false);
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
    }
L20:
    WaitFor(!EventFlag(4105));
    RestartEvent();
});

$Event(1036413701, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4100));
    EndIf(!EventFlag(4105));
    WaitFor(EventFlag(1036419209));
    DisableCharacterCollision(X0_4);
    WaitFixedTimeSeconds(30);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1036413702, Restart, function(X0_4) {
    EndIf(EventFlag(4101));
    EndIf(EventFlag(4103));
    WaitFor(CharacterHasSpEffect(X0_4, 9644) || EventFlag(4101));
    EndIf(CharacterHasSpEffect(X0_4, 9644) && !EventFlag(4101));
    ForceAnimationPlayback(X0_4, 20022, false, false, false);
    EndEvent();
});

$Event(1036412870, Restart, function() {
    CreateAssetfollowingSFX(1036411660, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1036411660);
    RotateCharacter(10000, 1036411660, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 48, 57, 0, 1048570980, 60);
    RestartEvent();
});
