// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1034490000, 1034491950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76214, 76213, 1034491980, 77220, 3, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    //InitializeEvent(0, 1034492290, 1034491333, 1034492200, 1034492281, 1034492282, 1034492283, 2); // Magic Rain Trap
    //InitializeEvent(1, 1034492290, 1034491301, 1034492201, 1034492282, 1034492283, 6001, 1);
    //InitializeEvent(2, 1034492290, 1035491500, 1035492200, 1034492283, 6001, 6001, 0);
    InitializeEvent(0, 1034492270, 1082759578, 1034492281);
    InitializeEvent(1, 1034492270, 1075838976, 1034492282);
    InitializeEvent(2, 1034492270, 1075838976, 1034492283);
    InitializeEvent(3, 1034492270, 1075419546, 1034492284);
    InitializeCommonEvent(0, 90005704, 1034490700, 3761, 3760, 1034499201, 3);
    InitializeCommonEvent(0, 90005707, 1034490700, 3761, 3762, 1034499201, 3763, 3760, 3763, -1, 20046, 1034492703, 1034492704);
    InitializeEvent(0, 1034490700, 1034490700);
    InitializeCommonEvent(0, 90005709, 1034490700, 905, 603002);
    InitializeCommonEvent(0, 90005709, 1034490700, 960, 603052);
    InitializeCommonEvent(0, 90005704, 1034490711, 3761, 3760, 1034499203, 3);
    InitializeCommonEvent(0, 90005707, 1034490711, 3761, 3762, 1034499203, 3763, 3760, 3763, -1, 20046, 1034492703, 1034492704);
    InitializeEvent(0, 1034490701, 1034490711, 1034492700, 1034490701, 1034490702, 1034490703);
    InitializeCommonEvent(0, 90005709, 1034490711, 905, 603002);
    InitializeCommonEvent(0, 90005709, 1034490711, 960, 603052);
    InitializeCommonEvent(0, 90005708, 1034490700, 3760, 0);
    InitializeCommonEvent(0, 90005708, 1034490711, 3760, 0);
    InitializeCommonEvent(0, 90005750, 1034491700, 6361, 102400, 400240, 400241, 3768, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1034490700, true);
    SetCharacterBackreadState(1034490701, true);
    SetCharacterBackreadState(1034490702, true);
    SetCharacterBackreadState(1034490703, true);
    SetCharacterBackreadState(1034490711, true);
    InitializeEvent(0, 1034492210, 1034490301);
});

$Event(1034492210, Restart, function(X0_4) {
    EnableNetworkSync();
    EnableCharacterDefaultBackread(X0_4);
    SetCharacterEnableDistance(X0_4, 230);
    DisableCharacterDisableOnHitUnload(X0_4);
    EnableDistancebasedNetworkUpdateAuthority(X0_4);
    DisableCharacterGravity(X0_4);
});

$Event(1034492270, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    EndIf(EventFlag(1035500800));
    WaitFor(!EventFlag(X4_4));
    WaitFixedTimeSeconds(X0_4);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1034492290, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EnableNetworkSync();
    WaitFor(
        InArea(10000, X4_4)
            && EventFlag(X8_4)
            && EventFlag(1034492284)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    EndIf(EventFlag(1035500800));
    WaitFixedTimeRealFrames(X20_4);
    if (EventFlag(X12_4)) {
        if (EventFlag(X16_4)) {
            if (GameCycle() == 0) {
                ShootBullet(1034490301, X0_4, 90, 802600000, 0, 0, 0);
            } else if (GameCycle() == 1) {
                ShootBullet(1034490301, X0_4, 90, 802600010, 0, 0, 0);
            } else if (GameCycle() == 2) {
                ShootBullet(1034490301, X0_4, 90, 802600020, 0, 0, 0);
            } else if (GameCycle() == 3) {
                ShootBullet(1034490301, X0_4, 90, 802600030, 0, 0, 0);
            } else if (GameCycle() == 4) {
                ShootBullet(1034490301, X0_4, 90, 802600040, 0, 0, 0);
            } else if (GameCycle() == 5) {
                ShootBullet(1034490301, X0_4, 90, 802600050, 0, 0, 0);
            } else if (GameCycle() == 6) {
                ShootBullet(1034490301, X0_4, 90, 802600060, 0, 0, 0);
            } else if (GameCycle() >= 7) {
                ShootBullet(1034490301, X0_4, 90, 802600070, 0, 0, 0);
                Goto(L0);
            }
L0:
            SetNetworkconnectedEventFlagID(X8_4, OFF);
            SetNetworkconnectedEventFlagID(1034492284, OFF);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1034492340, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, true);
});

$Event(1034490700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3760)) {
            SetEventFlagID(1034499202, OFF);
        }
    }
L19:
    if (!EventFlag(3765)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3765));
        RestartEvent();
    }
L5:
    GotoIf(L0, EventFlag(3760));
    GotoIf(L1, EventFlag(3761));
    GotoIf(L2, EventFlag(3762));
    GotoIf(L3, EventFlag(3763));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableCharacterImmortality(X0_4);
    ForceAnimationPlayback(X0_4, 930017, false, false, false);
    Goto(L20);
L1:
L2:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3765));
    RestartEvent();
});

$Event(1034490701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3760)) {
            SetEventFlagID(1034499204, OFF);
        }
    }
L19:
    GotoIf(L6, EventFlag(3766));
    GotoIf(L7, EventFlag(3767));
    GotoIf(L8, EventFlag(3768));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X8_4);
    SetCharacterBackreadState(X8_4, true);
    DisableCharacter(X12_4);
    SetCharacterBackreadState(X12_4, true);
    DisableCharacter(X16_4);
    SetCharacterBackreadState(X16_4, true);
    WaitFor(AnyBatchEventFlags(3766, 3768));
    RestartEvent();
L6:
L7:
    DisableCharacter(X8_4);
    SetCharacterBackreadState(X8_4, true);
    DisableCharacter(X12_4);
    SetCharacterBackreadState(X12_4, true);
    DisableCharacter(X16_4);
    SetCharacterBackreadState(X16_4, true);
    GotoIf(L0, EventFlag(3760));
    GotoIf(L1, EventFlag(3761));
    GotoIf(L2, EventFlag(3762));
    GotoIf(L3, EventFlag(3763));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableCharacterImmortality(X0_4);
    ForceAnimationPlayback(X0_4, 930017, false, false, false);
    Goto(L20);
L1:
L2:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!AnyBatchEventFlags(3766, 3767));
    RestartEvent();
L8:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterImmortality(X0_4);
    ForceAnimationPlayback(X0_4, 930019, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EnableCharacter(X8_4);
    SetCharacterBackreadState(X8_4, false);
    ForceAnimationPlayback(X8_4, 930002, false, false, false);
    EnableCharacter(X12_4);
    SetCharacterBackreadState(X12_4, false);
    ForceAnimationPlayback(X12_4, 930002, false, false, false);
    EnableCharacter(X16_4);
    SetCharacterBackreadState(X16_4, false);
    ForceAnimationPlayback(X16_4, 930002, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3768));
    RestartEvent();
});

$Event(1034493704, Restart, function(X0_4) {
    WaitFor(EventFlag(1034499236) || EventFlag(1034499237));
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    if (EventFlag(1034499236)) {
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 960, 646060);
    }
    if (EventFlag(1034499237)) {
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 960, 641111);
    }
    RestartEvent();
});
