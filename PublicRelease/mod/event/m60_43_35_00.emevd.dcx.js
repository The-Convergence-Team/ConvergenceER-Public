// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,84,156,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1043350000, 1043351950, 0, 0, 0, 5);
    InitializeEvent(0, 1043352270, 1043355270, 1043352270);
    InitializeEvent(0, 1043350652, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1043353750, 1043350700, 1043350703);
    InitializeCommonEvent(0, 90005704, 1043350710, 3621, 3620, 1043359251, 3);
    InitializeCommonEvent(0, 90005703, 1043350710, 3621, 3622, 1043359251, 3621, 3620, 3624, -1);
    InitializeCommonEvent(0, 90005702, 1043350710, 1043359259, 1043359259, 1043359259);
    InitializeEvent(0, 1043353710, 1043350710);
    InitializeEvent(0, 1043353711, 1043350710);
    InitializeEvent(0, 1043352272, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043350710, true);
    InitializeEvent(0, 1043352200, 0);
    InitializeEvent(0, 1043353751, 1043350710);
    InitializeEvent(0, 1043353752, 1043350710);
});

$Event(1043352200, Restart, function() {
    ForceCharacterTreasure(1043355200);
});

$Event(1043352270, Restart, function(X0_4, X4_4) {
    EnableNetworkSync();
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5653);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1043352270));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5653);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1043352270, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5653);
});

$Event(1043350652, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 43, 35, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1043353710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    if (!(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800)))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3620));
    GotoIf(L2, EventFlag(3621));
    GotoIf(L3, EventFlag(3622));
    GotoIf(L4, EventFlag(3623));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
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
    WaitFor(!(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800))));
    RestartEvent();
});

$Event(1043353711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044389209));
    EndIf(EventFlag(1035469209));
    EndIf(EventFlag(1039529209));
    if (!EventFlag(1043359259)) {
        WaitFor(EventFlag(1043359259));
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3623, ON);
        SaveRequest();
        EndEvent();
    }
L1:
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3626));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1043353750, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, true);
    DisableCharacter(X4_4);
    DisableCharacter(1043350701);
    DisableCharacter(1043350702);
    SetCharacterBackreadState(1043350701, true);
    SetCharacterBackreadState(1043350702, true);
    DisableCharacterAI(1043350701);
    DisableCharacterAI(1043350702);
});

$Event(1043353752, Restart, function() {
    RegisterLadder(43350580, 43350851, 1043360973);
    RegisterLadder(43350580, 43350851, 1043360974);
});

// Disable Dragon Lightning Effects
$Event(1043353751, Restart, function() {
    if (!EventFlag(1043367080)) {
        WaitFor(EventFlag(1043367080));
    }
    WaitFixedTimeFrames(10);
    DeleteMapSFX(433500, false);
    DeleteMapSFX(433501, false);
    DeleteMapSFX(433502, false);
    DeleteMapSFX(433503, false);
    DeleteMapSFX(433504, false);
    DeleteMapSFX(433505, false);
    DeleteMapSFX(433506, false);
    DeleteMapSFX(433507, false);
    DeleteMapSFX(433508, false);
    SpawnOneshotSFX(TargetEntityType.Area, 433503, 0, 304587);
    ShootBullet(1043350270, 1043352271, 900, 802104200, 0, 0, 0);
    ShootBullet(1043350270, 1043352271, 900, 802104250, 0, 0, 0);
    WaitFixedTimeFrames(20);
    ShootBullet(1043350270, 1043352271, 900, 802104210, 0, 0, 0);
    ShootBullet(1043350270, 1043352271, 900, 802104220, 0, 0, 0);
    WaitFixedTimeFrames(45);
    ShootBullet(1043350270, 1043352271, 900, 802104230, 0, 0, 0);
    ShootBullet(1043350270, 1043352271, 900, 802104240, 0, 0, 0);
    EndEvent();
});

$Event(1043352272, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1043350270);
    WaitFor(EntityInRadiusOfEntity(10000, 1043350270, 60, 1) && !EventFlag(1043367080));
    WaitRandomTimeSeconds(1, 8);
    if (GameCycle() == 0) {
        ShootBullet(1043350270, 1043352271, 900, 802104200, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1043350270, 1043352271, 900, 802104210, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1043350270, 1043352271, 900, 802104220, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1043350270, 1043352271, 900, 802104230, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1043350270, 1043352271, 900, 802104240, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1043350270, 1043352271, 900, 802104250, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1043350270, 1043352271, 900, 802104260, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1043350270, 1043352271, 900, 802104270, 0, 0, 0);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
