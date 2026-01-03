// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1044390000, 1044391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005726, 4720, 4721, 4723, 1044399255, 1044390710, 1044396700);
    InitializeCommonEvent(0, 90005703, 1044390710, 4721, 4722, 1044399256, 4721, 4720, 4724, 0);
    InitializeCommonEvent(0, 90005704, 1044390710, 4721, 4720, 1044399256, 3);
    InitializeCommonEvent(0, 90005702, 1044390710, 4723, 4720, 4724);
    InitializeCommonEvent(0, 90005704, 1044390700, 4041, 4040, 1044399201, 3);
    InitializeCommonEvent(0, 90005703, 1044390700, 4041, 4042, 1044399201, 4041, 4040, 4043, -1);
    InitializeCommonEvent(0, 90005702, 1044390700, 4043, 4040, 4043);
    InitializeEvent(0, 1044390715, 1044390700, 1044390705, 1044391700);
    InitializeCommonEvent(0, 90005730, 1044399210, 1101004800, 1044399214, 4045, 1044399213, 1044399212);
    InitializeCommonEvent(0, 90005731, 1044399214, 1044390700, 1092616192, 1094713344);
    InitializeCommonEvent(0, 90006800, 1044397100, 1044390110);
    InitializeEvent(0, 1044392270, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044390700, true);
    SetCharacterBackreadState(1044390705, true);
    SetCharacterBackreadState(1044390710, true);
    SetCharacterBackreadState(1044390711, true);
    InitializeCommonEvent(0, 90005261, 1044390200, 1044392200, 1065353216, 1065353216, 1700);
    InitializeCommonEvent(0, 90005261, 1044390201, 1044392200, 1065353216, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1044390202, 1044392202, 1065353216, 1065353216, 1700);
    InitializeCommonEvent(0, 90005261, 1044390203, 1044392202, 1065353216, 1069547520, 1700);
    InitializeCommonEvent(0, 90005261, 1044390204, 1044392202, 1065353216, 0, 1700);
});

$Event(1044393710, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1044399250, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4000) && EventFlag(1044392710)) {
            SetEventFlagID(1044392710, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
L0:
    GotoIf(L1, EventFlag(4000));
    GotoIf(L2, EventFlag(4001));
    GotoIf(L4, EventFlag(4003));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 30003, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(EventFlag(1044399250));
    RestartEvent();
});

$Event(1044390715, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    ForceAnimationPlayback(X4_4, 90004, false, false, false);
    EnableAsset(X8_4);
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4040)) {
            SetEventFlagID(1044399202, OFF);
        }
    }
L19:
    if (!EventFlag(4045)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4045));
        RestartEvent();
    }
L5:
    GotoIf(L0, EventFlag(4040));
    GotoIf(L1, EventFlag(4041));
    GotoIf(L3, EventFlag(4043));
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
    Goto(L20);
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4045));
    RestartEvent();
});

$Event(1044392270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1044390270);
    WaitFor(InArea(10000, 1044392270));
    if (!EventFlag(1044397100))
        WaitRandomTimeSeconds(0.5, 4);
    else
        WaitRandomTimeSeconds(1, 8);
    if (GameCycle() == 0) {
        ShootBullet(1044390270, 1044392271, 900, 802101000, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1044390270, 1044392271, 900, 802101010, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1044390270, 1044392271, 900, 802101020, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1044390270, 1044392271, 900, 802101030, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1044390270, 1044392271, 900, 802101040, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1044390270, 1044392271, 900, 802101050, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1044390270, 1044392271, 900, 802101060, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1044390270, 1044392271, 900, 802101070, 0, 0, 0);
        Goto(L0);
    }
L0:
    if (EventFlag(1044397100))
        WaitFixedTimeSeconds(1);
    RestartEvent();
});
