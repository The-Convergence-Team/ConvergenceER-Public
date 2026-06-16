// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31000000, 31001950, 0, 0, 0, 5);
    InitializeEvent(0, 31002800, 0);
    InitializeEvent(0, 31002810, 0);
    InitializeEvent(0, 31002849, 0);
    InitializeEvent(0, 31002811, 0);
    InitializeEvent(0, 31002813, 0);
    InitializeEvent(0, 31002814, 0);
    InitializeEvent(0, 31002850, 0);
    InitializeEvent(0, 31002860, 0);
    InitializeEvent(0, 31002899, 0);
    InitializeEvent(0, 31002861, 0);
    InitializeEvent(0, 31002863, 0);
    InitializeEvent(0, 31002845, 0);
    InitializeEvent(0, 31002875, 0);
    InitializeEvent(0, 31002876, 31000845, 31002840, 31002841, 31001840, 31002840, 31);
    InitializeEvent(0, 31002500, 31001500, 31002500);
    InitializeEvent(1, 31002500, 31001501, 31002501);
    InitializeEvent(2, 31002500, 31001502, 31002502);
    InitializeEvent(0, 31003700, 31000701);
    InitializeEvent(0, 31003710, 31000703);
    InitializeEvent(0, 31003701, 31000701, 31002709, 31009201, 31000800);
    InitializeEvent(0, 31003711, 31000703, 31002709, 31009201, 31000850);
    InitializeEvent(0, 31003702, 31000800);
    InitializeEvent(0, 31003703, 0);
    InitializeEvent(0, 31003704, 31000800, 1092616192);
    InitializeEvent(0, 31003705, 31000800);
    InitializeEvent(0, 31003707, 0);
    InitializeEvent(0, 31003713, 31000850);
    InitializeEvent(0, 31003714, 31000850, 1092616192);
    InitializeEvent(0, 31003715, 31000850);
    InitializeCommonEvent(0, 90005704, 31000800, 31009219, 3680, 31009201, 3);
    InitializeCommonEvent(0, 90005703, 31000800, 3681, 3682, 31009201, 31009219, 3680, 3684, -1);
    InitializeEvent(0, 31003706, 31000800, 3683, 3680, 3684);
    InitializeCommonEvent(0, 90005704, 31000701, 31009219, 3680, 31009201, 3);
    InitializeCommonEvent(0, 90005703, 31000701, 3681, 3682, 31009201, 31009219, 3680, 3684, -1);
    InitializeCommonEvent(0, 90005702, 31000701, 3683, 3680, 3684);
    InitializeCommonEvent(0, 90005704, 31000703, 3681, 3680, 31009201, 3);
    InitializeCommonEvent(0, 90005703, 31000703, 3681, 3682, 31009201, 3681, 3680, 3684, -1);
    InitializeCommonEvent(0, 90005702, 31000703, 3683, 3680, 3684);
    InitializeCommonEvent(0, 90005704, 31000850, 31009269, 3680, 31009201, 3);
    InitializeCommonEvent(0, 90005703, 31000850, 3681, 3682, 31009201, 31009269, 3680, 3684, -1);
    InitializeEvent(0, 31003716, 31000850, 3683, 3680, 3684);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(31000700, true);
    SetCharacterBackreadState(31000701, true);
    SetCharacterBackreadState(31000702, true);
    SetCharacterBackreadState(31000703, true);
    InitializeEvent(0, 31002230, 31000200, 31002200, 1073741824, 0, 0);
    InitializeEvent(0, 31002200, 31000201, 30010, 20010, 31002202, 1073741824, 0, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(0, 31002210, 31000205, 31002205, 1077936128, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(1, 31002210, 31000206, 31002205, 1077936128, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(1, 31002200, 31000209, 30010, 20010, 31002209, 1073741824, 1061997773, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(2, 31002200, 31000210, 30010, 20010, 31002209, 1073741824, 1058642330, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(3, 31002200, 31000211, 30010, 20010, 31002209, 1073741824, 1050253722, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    InitializeEvent(0, 31003712, 0);
});

$Event(31002500, Restart, function(X0_4, X4_4) {
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(X0_4, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(31002200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        area |= InArea(10000, X12_4);
    }
    area |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1);
    areaChrSp &= area
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || InArea(10000, X40_4)
            || InArea(10000, X44_4)
            || InArea(10000, X48_4)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(31002210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || areaChrSp
            || InArea(10000, X20_4)
            || InArea(10000, X24_4)
            || InArea(10000, X28_4)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31002230, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31002800, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(CharacterHPValue(31000800) <= 0);
    EndIf(EventFlag(31000800));
    WaitFixedTimeSeconds(4);
    PlaySE(31000800, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(31000800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(31000800));
    SetNetworkconnectedEventFlagID(31000800, ON);
    HandleBossDefeatAndDisplayBanner(31000800, TextBannerType.EnemyFelled);
    SetEventFlagID(31000800, ON);
    SetEventFlagID(9232, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61232, ON);
    }
    AwardItemLot(101830);
});

$Event(31002810, Restart, function() {
    if (EventFlag(31000800) || EventFlag(3683) || EventFlag(3691)) {
        DisableCharacter(31000800);
        DisableCharacterCollision(31000800);
        SetCharacterBackreadState(31000800, true);
        ForceCharacterDeath(31000800, false);
        if (!EventFlag(31000800)) {
            SetEventFlagID(31000800, ON);
        }
        EndEvent();
    }
L0:
    DisableCharacterAI(31000800);
    EnableCharacterInvincibility(31000800);
    SetSpEffect(31000800, 9643);
    if (EventFlag(31008521)) {
        SetNetworkconnectedEventFlagID(31008820, ON);
        WarpCharacterAndCopyFloor(31000800, TargetEntityType.Area, 31002820, -1, 31000800);
        ChangeCharacterPatrolBehavior(31000800, 0);
    }
L1:
    WaitFor(EventFlag(31002805) && InArea(10000, 31002800));
    if (!EventFlag(31008820)) {
        SetNetworkconnectedEventFlagID(31008821, ON);
        DisableCharacter(31000800);
        EndEvent();
    }
    SetCharacterTeamType(31000800, TeamType.Enemy);
    EnableCharacterAI(31000800);
    DisableCharacterInvincibility(31000800);
    SetNetworkUpdateRate(31000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31000800, 0, 130900);
    SetNetworkconnectedEventFlagID(31000811, ON);
});

$Event(31002811, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlag(31009810));
    SetCharacterTeamType(31000800, TeamType.FriendlyNPC);
    WaitFor((PlayerIsInOwnWorld() && !CharacterHasSpEffect(10000, 9646)) || EventFlag(31000800));
    SetNetworkconnectedEventFlagID(31000800, ON);
    PlaySE(31000800, SoundType.SFX, 888880000);
    HandleBossDefeatAndDisplayBanner(31000800, TextBannerType.EnemyFelled);
    SetEventFlagID(31000800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61232, ON);
    }
    SetEventFlagID(9232, ON);
    AwardItemLot(101830);
    ChangeCharacterPatrolBehavior(31000800, 31003820);
    RequestCharacterAIReplan(31000800);
});

$Event(31002813, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31008521));
    EndIf(!EventFlag(31008821));
    EnableCharacter(31000800);
    WaitFixedTimeSeconds(4);
    SetCharacterTeamType(31000800, TeamType.Enemy);
    EnableCharacterAI(31000800);
    DisableCharacterInvincibility(31000800);
    SetNetworkUpdateRate(31000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(5);
    DisplayBossHealthBar(Enabled, 31000800, 0, 130900);
    SetNetworkconnectedEventFlagID(31000811, ON);
    SetCharacterHome(31000800, 31002820);
});

$Event(31002814, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlag(31002713));
    EnableCharacterAI(31000800);
    DisableCharacterInvincibility(31000800);
    SetCharacterTeamType(31000800, TeamType.Enemy);
});

$Event(31002849, Restart, function() {
    InitializeEvent(0, 31002830, 31000800, 31001800, 31002800, 31002805, 31005800, 10000, 0, 0);
    InitializeEvent(0, 31002831, 31000800, 31001800, 31002800, 31002805, 31002806, 10000);
    InitializeEvent(0, 31002832, 31000800, 31001800, 4, 0);
    InitializeEvent(0, 31002833, 31000800, 931000, 31002805, 31002806, 31000811, 0, 0, 0);
});

$Event(31002831, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    EndIf(EventFlag(X0_4));
    WaitFor(
        !EventFlag(X0_4)
            && EventFlag(X12_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(X20_4, X4_4));
    SuppressSoundForFogGate(5);
    RotateCharacter(10000, X8_4, 60060, true);
    time = ElapsedSeconds(3);
    WaitFor(CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, X8_4) || time));
    RestartIf(time.Passed);
    SetEventFlagID(X16_4, ON);
    RestartEvent();
});

$Event(31002830, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(3691));
    if (!EventFlag(X0_4)) {
        WaitFixedTimeFrames(1);
        if (X24_4 != 0) {
            GotoIf(L0, EventFlag(X24_4));
            if (X28_4 != 0) {
                areaFlag |= InArea(10000, X28_4);
            }
            areaFlag |= EventFlag(X24_4);
            WaitFor((areaFlag && PlayerIsInOwnWorld()) || EventFlag(X0_4));
            RestartIf(EventFlag(X0_4));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(X0_4)
                    || (PlayerIsInOwnWorld() && !EventFlag(X0_4) && ActionButtonInArea(X20_4, X4_4)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(X0_4));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, X8_4, 60060, true);
            } else {
                RotateCharacter(10000, X8_4, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(X12_4));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, X8_4) || time) && PlayerIsInOwnWorld() && !EventFlag(X0_4))
                || EventFlag(X0_4));
        RestartIf(EventFlag(X0_4));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
            SetNetworkUpdateAuthority(X16_4, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(X16_4);
        SetNetworkconnectedEventFlagID(X12_4, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, X4_4));
    RotateCharacter(10000, X8_4, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

$Event(31002832, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    DisableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag &= EventFlag(X12_4);
    }
    flag &= !EventFlag(X0_4);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    EnableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X4_4, 101, X8_4);
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag2 &= EventFlag(X12_4);
    }
    flag2 &= !EventFlag(X0_4);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    RestartEvent();
});

$Event(31002833, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    if (EventFlag(X0_4)) {
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(X8_4, OFF);
    }
    flag &= EventFlag(X8_4);
    if (!PlayerIsInOwnWorld()) {
        flag &= EventFlag(X12_4);
    }
    if (0 != X16_4) {
        flag &= EventFlag(X16_4);
    }
    WaitFor(flag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(X20_4)) {
        SetBossBGM(X4_4, BossBGMState.Start);
    }
    WaitFor(EventFlag(X20_4) || EventFlag(X0_4));
    if (!EventFlag(X0_4)) {
        WaitFixedTimeFrames(1);
        if (Signed(X24_4) != 0) {
        }
        SetBossBGM(X4_4, BossBGMState.HeatUp);
        WaitFor(EventFlag(X0_4));
    }
L1:
    if (Signed(X28_4) != 1) {
        SetBossBGM(X4_4, BossBGMState.Stop2);
        EndEvent();
    }
    SetBossBGM(X4_4, BossBGMState.Stop1);
});

$Event(31002899, Restart, function() {
    InitializeEvent(0, 31002870, 31000850, 31001800, 31002800, 31002855, 31005850, 10000, 0, 0);
    InitializeEvent(0, 31002872, 31000850, 31001800, 4, 0);
    InitializeEvent(0, 31002873, 31000850, 931000, 31002855, 31002856, 31000861, 0, 0, 0);
});

$Event(31002850, Restart, function() {
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(CharacterHPValue(31000850) <= 0);
    EndIf(EventFlag(31000850));
    WaitFixedTimeSeconds(4);
    PlaySE(31000850, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(31000850) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31000850, ON);
    HandleBossDefeatAndDisplayBanner(31000850, TextBannerType.EnemyFelled);
    SetEventFlagID(31000850, ON);
    SetEventFlagID(9232, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61232, ON);
    }
});

$Event(31002860, Restart, function() {
    if (EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691)) {
        DisableCharacter(31000850);
        DisableCharacterCollision(31000850);
        SetCharacterBackreadState(31000850, true);
        ForceCharacterDeath(31000850, false);
        if (EventFlag(3683)) {
            SetEventFlagID(31000850, ON);
        }
        EndEvent();
    }
L0:
    DisableCharacterAI(31000850);
    SetSpEffect(31000850, 9643);
    if (EventFlag(31008523)) {
        SetNetworkconnectedEventFlagID(31008870, ON);
        WarpCharacterAndCopyFloor(31000850, TargetEntityType.Area, 31002820, -1, 31000850);
        ChangeCharacterPatrolBehavior(31000850, 0);
    }
L1:
    WaitFor(EventFlag(31002855) && InArea(10000, 31002800));
    if (!EventFlag(31008870)) {
        SetNetworkconnectedEventFlagID(31008871, ON);
        DisableCharacter(31000850);
        EndEvent();
    }
    SetCharacterTeamType(31000850, TeamType.Enemy);
    EnableCharacterAI(31000850);
    SetNetworkUpdateRate(31000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31000850, 0, 130900);
    SetNetworkconnectedEventFlagID(31000861, ON);
});

$Event(31002861, Restart, function() {
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(EventFlag(31009889));
    SetCharacterTeamType(31000850, TeamType.FriendlyNPC);
    WaitFor((PlayerIsInOwnWorld() && !CharacterHasSpEffect(10000, 9646)) || EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31000850, ON);
    PlaySE(31000850, SoundType.SFX, 888880000);
    HandleBossDefeatAndDisplayBanner(31000850, TextBannerType.EnemyFelled);
    SetEventFlagID(31000850, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61232, ON);
    }
    SetEventFlagID(9232, ON);
    ChangeCharacterPatrolBehavior(31000850, 31003820);
    RequestCharacterAIReplan(31000850);
});

$Event(31002863, Restart, function() {
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31008523));
    EndIf(!EventFlag(31008871));
    EnableCharacter(31000850);
    WaitFixedTimeSeconds(4);
    SetCharacterTeamType(31000850, TeamType.Enemy);
    EnableCharacterAI(31000850);
    SetNetworkUpdateRate(31000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(5);
    DisplayBossHealthBar(Enabled, 31000850, 0, 130900);
    SetNetworkconnectedEventFlagID(31000861, ON);
    SetCharacterHome(31000850, 31002820);
});

$Event(31002870, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(3691));
    if (!EventFlag(X0_4)) {
        WaitFixedTimeFrames(1);
        if (X24_4 != 0) {
            GotoIf(L0, EventFlag(X24_4));
            if (X28_4 != 0) {
                areaFlag |= InArea(10000, X28_4);
            }
            areaFlag |= EventFlag(X24_4);
            WaitFor((areaFlag && PlayerIsInOwnWorld()) || EventFlag(X0_4));
            RestartIf(EventFlag(X0_4));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(X0_4)
                    || (PlayerIsInOwnWorld() && !EventFlag(X0_4) && ActionButtonInArea(X20_4, X4_4)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(X0_4));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, X8_4, 60060, true);
            } else {
                RotateCharacter(10000, X8_4, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(X12_4));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, X8_4) || time) && PlayerIsInOwnWorld() && !EventFlag(X0_4))
                || EventFlag(X0_4));
        RestartIf(EventFlag(X0_4));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
            SetNetworkUpdateAuthority(X16_4, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(X16_4);
        SetNetworkconnectedEventFlagID(X12_4, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, X4_4));
    RotateCharacter(10000, X8_4, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

$Event(31002872, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!EventFlag(3691));
    DisableNetworkSync();
    DisableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag &= EventFlag(X12_4);
    }
    flag &= !EventFlag(X0_4);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    EnableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X4_4, 101, X8_4);
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag2 &= EventFlag(X12_4);
    }
    flag2 &= !EventFlag(X0_4);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    RestartEvent();
});

$Event(31002873, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(3691));
    DisableNetworkSync();
    if (EventFlag(X0_4)) {
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(X8_4, OFF);
    }
    flag &= EventFlag(X8_4);
    if (!PlayerIsInOwnWorld()) {
        flag &= EventFlag(X12_4);
    }
    if (0 != X16_4) {
        flag &= EventFlag(X16_4);
    }
    WaitFor(flag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(X20_4)) {
        SetBossBGM(X4_4, BossBGMState.Start);
    }
    WaitFor(EventFlag(X20_4) || EventFlag(X0_4));
    if (!EventFlag(X0_4)) {
        WaitFixedTimeFrames(1);
        if (Signed(X24_4) != 0) {
        }
        SetBossBGM(X4_4, BossBGMState.HeatUp);
        WaitFor(EventFlag(X0_4));
    }
L1:
    if (Signed(X28_4) != 1) {
        SetBossBGM(X4_4, BossBGMState.Stop2);
        EndEvent();
    }
    SetBossBGM(X4_4, BossBGMState.Stop1);
});

$Event(31002845, Restart, function() {
    GotoIf(L2, EventFlag(3863));
    GotoIf(L0, !EventFlag(31000800));
    GotoIf(L1, EventFlag(31000800) && !EventFlag(3691));
    GotoIf(L3, !EventFlag(31000850) && EventFlag(3691));
    GotoIf(L4, EventFlag(31000850));
L2:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L0:
    SetEventFlagID(31000845, OFF);
    Goto(L10);
L1:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L3:
    SetEventFlagID(31000845, OFF);
    Goto(L10);
L4:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L10:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31000800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31000850)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3691)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3683));
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(31002875, Restart, function() {
    if (!EventFlag(3691)) {
        EnableAsset(31001521);
        if (!EventFlag(31008521)) {
            EnableObjAct(31001521, 200);
        }
        DisableAsset(31001523);
        DisableObjAct(31001523, 200);
        DisableAssetTreasure(31001523);
        EndEvent();
    }
L0:
    DisableAsset(31001521);
    DisableObjAct(31001521, 200);
    DisableAssetTreasure(31001521);
    EnableAsset(31001523);
    if (!EventFlag(31008523)) {
        EnableObjAct(31001523, 200);
    }
});

$Event(31002876, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_1, X21_1, X22_1, X23_1) {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(X12_4)) {
        DeleteAssetfollowingSFX(X12_4, false);
    }
    WaitFixedTimeSeconds(0.5);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(X12_4, 190, 1300);
    }
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9290, X12_4));
    DisplayGenericDialogAndSetEventFlags(4100, PromptType.YESNO, NumberofOptions.TwoButtons, X12_4, 3, X4_4, X8_4, X8_4);
    if (!EventFlag(X4_4)) {
        SetEventFlagID(X8_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    WarpPlayer(X20_1, X21_1, X22_1, X23_1, X16_4, 0);
});

$Event(31003700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3686)) {
        if (!(EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704))) {
            DisableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, true);
            WaitFor(
                EventFlag(3686) || (EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704)));
            RestartEvent();
        }
    }
L5:
    GotoIf(L1, EventFlag(3680));
    GotoIf(L2, EventFlag(3681));
    GotoIf(L3, EventFlag(3682));
    GotoIf(L4, EventFlag(3683));
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
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    GotoIf(L20, EventFlag(31002714));
    ForceCharacterTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3686) || (EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704))));
    RestartEvent();
});

$Event(31003701, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3685) && !EventFlag(3686));
    GotoIf(L1, !EventFlag(3681));
    GotoIf(L2, EventFlag(3686));
    GotoIf(L2, !EventFlag(31002704));
    Goto(L3);
L1:
    WaitFor(EventFlag(3681));
    RestartEvent();
L2:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X0_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
L3:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X12_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X12_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X12_4);
    RequestCharacterAIReplan(X12_4);
    EndEvent();
});

$Event(31003702, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3685));
    EndIf(EventFlag(3683));
    WaitFor(EventFlag(31008521) && EventFlag(31002805));
    SetCharacterTalkRange(X0_4, 50);
    EndEvent();
});

$Event(31003703, Restart, function() {
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000800));
    SetEventFlagID(31009810, OFF);
    SetEventFlagID(31009215, OFF);
    SetEventFlagID(31009214, OFF);
    SetEventFlagID(31009217, OFF);
    WaitFixedTimeFrames(1);
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3682, ON);
    WaitFor(EventFlag(31000800));
    SetEventFlagID(31009219, OFF);
    EndEvent();
});

$Event(31003704, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3685));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000800));
    if (!EventFlag(31002713)) {
        if (!EventFlag(31002704)) {
            SetEventFlagID(31009811, OFF);
        }
        if (!EventFlag(31002704)) {
            EnableCharacterImmortality(X0_4);
            WaitFor(HPRatio(X0_4) <= 0.5);
            DisableCharacterImmortality(X0_4);
            EndIf(EventFlag(3683));
            SetEventFlagID(31002704, ON);
            SetEventFlagID(31009811, ON);
        }
L1:
        WaitFixedTimeFrames(1);
        SetSpEffect(X0_4, 9701);
        SetSpEffect(X0_4, 5005);
        SetSpEffect(X0_4, 9703);
        SetSpEffect(X0_4, 9645);
        if (PlayerIsInOwnWorld()) {
            ClearSpEffect(X0_4, 9703);
        }
        SetSpEffect(X0_4, 9647);
        SetSpEffect(X0_4, 9642);
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
        time = ElapsedSeconds(X4_4);
        WaitFor(dmg || time || EventFlag(31002713));
        if (!EventFlag(31002713)) {
            EndIf(EventFlag(3683));
            if (!time.Passed) {
                RestartEvent();
            }
            SetEventFlagID(31009215, ON);
            SetEventFlagID(31009810, ON);
            SetEventFlagID(31009201, OFF);
            BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
            SetNetworkconnectedEventFlagID(3680, ON);
            SaveRequest();
            SetCharacterTalkRange(X0_4, 17);
            SetSpEffect(X0_4, 9702);
            SetSpEffect(X0_4, 5006);
            EndIf(!PlayerIsInOwnWorld());
            EndIf(EventFlag(60819));
            WaitFor(CharacterDead(X0_4, NotEqual, 1) && EventFlag(31000800));
            SetEventFlagID(60819, ON);
            AwardGesture(41);
            EndEvent();
        }
    }
L2:
    WaitFixedTimeRealFrames(1);
    SetSpEffect(X0_4, 9702);
    SetSpEffect(X0_4, 5006);
    SetSpEffect(X0_4, 9704);
    SetSpEffect(X0_4, 9644);
    SetSpEffect(X0_4, 9643);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    EndEvent();
});

$Event(31003705, Restart, function(X0_4) {
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeFrames(1);
        EndIf(!EventFlag(3685));
        EndIf(EventFlag(3683));
        EndIf(EventFlag(31000800));
        SetEventFlagID(31009212, OFF);
        SetEventFlagID(31009211, OFF);
        SetEventFlagID(31009213, OFF);
        WaitFor(EventFlag(31002703) && !EventFlag(3683) && PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(2.5);
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(X0_4, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(X0_4, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(X0_4, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        SetNetworkconnectedEventFlagID(31002713, ON);
        EndEvent();
    }
L1:
    WaitFor(EventFlag(31002713));
    EndIf(EventFlag(31000800));
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    EndEvent();
});

$Event(31003706, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(31000800));
    WaitFor(!EventFlag(X4_4) && EventFlag(3685) && CharacterDead(X0_4));
    SetEventFlagID(31002714, ON);
    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SaveRequest();
});

$Event(31003707, Restart, function() {
    WaitFixedTimeFrames(1);
    if (EventFlag(3685) || EventFlag(3691) || EventFlag(3692) || EventFlag(3694)) {
        DisableAsset(31001700);
        DisableObjAct(31001700, 200);
        EndEvent();
    }
    EnableAsset(31001700);
    EnableObjAct(31001700, 200);
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(31008522)) {
        DisableObjAct(31001700, 200);
        EndEvent();
    }
    WaitFor(EventFlag(31008522));
    SpawnOneshotSFX(TargetEntityType.Asset, 31001700, 90, 806881);
    SpawnOneshotSFX(TargetEntityType.Asset, 31001700, 90, 806882);
    FadeToBlack(0, 0, true, 0);
    WaitFixedTimeSeconds(2.2);
    if (CharacterHPValue(10000) != 0) {
        DisplayGenericDialog(20700, PromptType.YESNO, NumberofOptions.OneButton, 0, 5);
        WaitFixedTimeSeconds(2.8);
        if (CharacterHPValue(10000) != 0) {
            FadeToBlack(0, 0, false, 0);
            GotoIf(L1, EventFlag(3683));
            GotoIf(L1, !EventFlag(3686));
            GotoIf(L2, EventFlag(31009231));
            Goto(L3);
L1:
            WarpPlayer(60, 45, 37, 0, 1045372710, 0);
            EndEvent();
L2:
            PlayCutsceneToPlayerAndWarp(31000001, CutscenePlayMode.Skippable, 1045372710, 60453700, 10000, 0, true);
            EndEvent();
L3:
            PlayCutsceneToPlayerAndWarp(31000000, CutscenePlayMode.Skippable, 1045372710, 60453700, 10000, 0, true);
            EndEvent();
        }
    }
L20:
    FadeToBlack(0, 0, false, 0);
    EndEvent();
});

$Event(31003709, Restart, function() {
    DisableCharacter(31000702);
    DisableCharacter(31000703);
    SetCharacterBackreadState(31000702, true);
    SetCharacterBackreadState(31000703, true);
    EndEvent();
});

$Event(31003710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3692)) {
        if (!EventFlag(3694)) {
            if (!(EventFlag(3691) && EventFlag(31000850) && EventFlag(3683))) {
                DisableCharacter(X0_4);
                SetCharacterBackreadState(X0_4, true);
                WaitFor(
                    EventFlag(3692)
                        || EventFlag(3694)
                        || (EventFlag(3691) && EventFlag(31000850) && EventFlag(3683)));
                RestartEvent();
            }
        }
    }
L5:
    GotoIf(L1, EventFlag(3680));
    GotoIf(L2, EventFlag(3681));
    GotoIf(L3, EventFlag(3682));
    GotoIf(L4, EventFlag(3683));
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
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    GotoIf(L20, EventFlag(31002723));
    ForceCharacterTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(
        !(EventFlag(3692)
            || EventFlag(3694)
            || (EventFlag(3691) && EventFlag(31000850) && EventFlag(3683))));
    RestartEvent();
});

$Event(31003711, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3691) && !EventFlag(3692) && !EventFlag(3694));
    GotoIf(L1, !EventFlag(3681));
    GotoIf(L2, EventFlag(3686));
    GotoIf(L2, !EventFlag(31002727));
    Goto(L3);
L1:
    WaitFor(EventFlag(3681));
    RestartEvent();
L2:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X0_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
L3:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X12_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X12_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X12_4);
    RequestCharacterAIReplan(X12_4);
    EndEvent();
});

$Event(31003712, Restart, function() {
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(31002715, ON);
    }
    EndEvent();
});

$Event(31003713, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    if (!EventFlag(31000850)) {
        SetEventFlagID(31009889, OFF);
        BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
        SetNetworkconnectedEventFlagID(3682, ON);
        SaveRequest();
        WaitFor(EventFlag(31008523) && EventFlag(31002855));
        SetCharacterTalkRange(X0_4, 50);
        WaitFor(EventFlag(31000850));
    }
L1:
    SetEventFlagID(31009269, OFF);
    EndEvent();
});

$Event(31003714, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000850));
    if (!EventFlag(31002722)) {
        if (!EventFlag(31002730)) {
            EnableCharacterImmortality(X0_4);
            WaitFor(EventFlag(31009257));
            if (!EventFlag(31002855)) {
                WaitFor(EventFlag(31002855));
            }
L5:
            WaitFixedTimeSeconds(3);
            DisableCharacterImmortality(X0_4);
            SetSpEffect(X0_4, 18670);
            EndIf(EventFlag(3683));
            SetEventFlagID(31002721, ON);
            WaitFor(EventFlag(31002730));
        }
L1:
        WaitFixedTimeFrames(1);
        SetSpEffect(X0_4, 9701);
        SetSpEffect(X0_4, 5005);
        SetSpEffect(X0_4, 9703);
        SetSpEffect(X0_4, 9645);
        if (PlayerIsInOwnWorld()) {
            ClearSpEffect(X0_4, 9703);
        }
        SetSpEffect(X0_4, 9647);
        SetSpEffect(X0_4, 9642);
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
        time = ElapsedSeconds(X4_4);
        WaitFor(dmg || time || EventFlag(31002722));
        if (!EventFlag(31002722)) {
            EndIf(EventFlag(3683));
            if (!time.Passed) {
                RestartEvent();
            }
            SetEventFlagID(31002728, ON);
            SetEventFlagID(31009889, ON);
            SetEventFlagID(31009201, OFF);
            SetSpEffect(X0_4, 9706);
            BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
            SetNetworkconnectedEventFlagID(3680, ON);
            SaveRequest();
            SetCharacterTalkRange(X0_4, 17);
            SetSpEffect(X0_4, 9702);
            SetSpEffect(X0_4, 5006);
            EndIf(!PlayerIsInOwnWorld());
            EndIf(EventFlag(60832));
            WaitFor(CharacterDead(X0_4, NotEqual, 1) && EventFlag(31000850));
            SetEventFlagID(60832, ON);
            AwardGesture(90);
            EndEvent();
        }
    }
L2:
    WaitFixedTimeRealFrames(1);
    SetSpEffect(X0_4, 9702);
    SetSpEffect(X0_4, 5006);
    SetSpEffect(X0_4, 9704);
    SetSpEffect(X0_4, 9644);
    SetSpEffect(X0_4, 9706);
    SetSpEffect(X0_4, 9643);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    EndEvent();
});

$Event(31003715, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000850));
    WaitFor(EventFlag(31002720) && !EventFlag(3683) && PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(2.5);
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31002722, ON);
    EndEvent();
});

$Event(31003716, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(31000800));
    EndIf(EventFlag(31000850));
    WaitFor(!EventFlag(X4_4) && EventFlag(3691) && CharacterDead(X0_4));
    SetEventFlagID(31002723, ON);
    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SaveRequest();
});
