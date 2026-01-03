// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31100000, 31101950, 0, 0, 0, 5);
    InitializeEvent(0, 31102800, 0);
    InitializeEvent(0, 31102801, 0);
    InitializeEvent(0, 31102802, 0);
    InitializeEvent(0, 31102810, 0);
    InitializeEvent(0, 31102811, 0);
    InitializeEvent(0, 31102815, 0);
    InitializeEvent(0, 31102849, 0);
    InitializeEvent(0, 31102860, 0);
    InitializeEvent(0, 31102830, 0);
    InitializeCommonEvent(0, 90005646, 31100800, 31102840, 31102841, 31101840, 31102840, 2591);
    InitializeCommonEvent(0, 900005610, 31101200, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 31102255, 31100252, 31103252);
    InitializeEvent(1, 31102255, 31100253, 31103253);
    InitializeCommonEvent(0, 90005261, 31100270, 31102270, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100350, 31102350, 1073741824, 0, 0);
    InitializeEvent(0, 31102360, 0);
    InitializeCommonEvent(0, 90005261, 31100201, 31102201, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100202, 31102201, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100205, 31102205, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100236, 31102236, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100237, 31102236, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31100238, 31102238, 1073741824, 0, 0);
    InitializeEvent(1, 31102200, 31100238);
});

$Event(31102200, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 2, 1))
            || CharacterAIState(X0_4, AIStateType.Combat)
            || HasDamageType(X0_4, 0, DamageType.Unspecified));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31102250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, X4_4);
    WaitFor(
        CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || chrSpArea
            || (chrSp && EntityInRadiusOfEntity(10000, X0_4, X8_4, 1))
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpArea.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31102255, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31102252)
            && (CharacterAIState(X0_4, AIStateType.Normal)
                || CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Alert)
                || CharacterAIState(X0_4, AIStateType.PassiveAlert)
                || CharacterAIState(X0_4, AIStateType.ActiveAlert)
                || CharacterAIState(X0_4, AIStateType.WaitBeforeForget)));
    SetNetworkconnectedThisEventSlot(ON);
    ClearCharactersAITarget(X0_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
});

$Event(31102360, Default, function() {
    cond = ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, 31102365);
    WaitFor(
        CharacterAIState(31100350, AIStateType.Combat)
            || CharacterAIState(31100350, AIStateType.ActiveAlert));
    WaitFor(cond);
    SetCharacterHome(31102350, 31102361);
});

$Event(31102800, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterDead(31100800));
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(31100800, TextBannerType.EnemyFelled);
    SetEventFlagID(31100800, ON);
    SetEventFlagID(9244, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61244, ON);
    }
});

$Event(31102801, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterHPValue(31100800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31100800, SoundType.SFX, 888880000);
});


$Event(31102810, Restart, function() {
    if (EventFlag(31100800)) {
        DisableCharacter(31100800);
        DisableCharacterCollision(31100800);
        ForceCharacterDeath(31100800, false);
        EndEvent();
    }
L0:
    if (!EventFlag(31100801)) {
        WaitFor(
            (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat))
                && InArea(10000, 31102805)
                && PlayerIsInOwnWorld());
        SetNetworkconnectedEventFlagID(31100801, ON);
    } else {
L1:
        WaitFor(
            (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat))
                && InArea(10000, 31102805)
                || EventFlag(31102805));
    }
L2:
    SetNetworkUpdateRate(31100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31100800, 0, 903970311);
});

$Event(31102811, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterDead(31100800));
    SetEventFlagID(31102842, ON);
});

$Event(31102815, Restart, function() {
    if (!EventFlag(31100800)) {
        WaitFixedTimeFrames(1);
        if (31100801 != 0) {
            GotoIf(L0, EventFlag(31100801));
            WaitFor(
                ((EventFlagState(ON, TargetEventFlagType.EventIDSlotNumber, 31102810)
                    || EventFlag(31100801))
                    && PlayerIsInOwnWorld())
                    || EventFlag(31100800));
            RestartIf(EventFlag(31100800));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(31100800)
                    || (PlayerIsInOwnWorld()
                        && !EventFlag(31100800)
                        && ActionButtonInArea(0, 31101800)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(31100800));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, 31102800, 60060, true);
            } else {
                RotateCharacter(10000, 31102800, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(31102805));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, 31102800) || time) && PlayerIsInOwnWorld() && !EventFlag(31100800))
                || EventFlag(31100800));
        RestartIf(EventFlag(31100800));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            if (!EventFlag(31100801)) {
                IssueBossRoomEntryNotification();
            }
            SetNetworkUpdateAuthority(31105800, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(31105800);
        SetNetworkconnectedEventFlagID(31102805, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(31100800)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && ActionButtonInArea(0, 31101800));
    RotateCharacter(10000, 31102800, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

$Event(31102860, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(
        EventFlag(31102805)
            && (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat)
                || CharacterHasStateInfo(31100800, 436)
                || CharacterHasStateInfo(31100800, 2)
                || CharacterHasStateInfo(31100800, 5)
                || CharacterHasStateInfo(31100800, 6)
                || CharacterHasStateInfo(31100800, 260))
            && InArea(10000, 31102805)
            && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(31102865, ON);
    IssueBossRoomEntryNotification();
});

$Event(31102849, Restart, function() {
    InitializeCommonEvent(0, 9005801, 31100800, 31101800, 31102800, 31102865, 31102806, 0);
    InitializeCommonEvent(0, 9005811, 31100800, 31101800, 3, 31100800);
    InitializeCommonEvent(0, 9005822, 31100800, 931000, 31102805, 31102806, 31102810, 31102842, 0, 0);
});
