// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31190000, 31191950, 0, 0, 0, 5);
    InitializeEvent(0, 31192800, 0);
    InitializeEvent(0, 31192810, 0);
    InitializeEvent(0, 31192849, 0);
    InitializeEvent(0, 31192830, 0);
    InitializeEvent(0, 31192811, 0);
    InitializeEvent(0, 31192850, 0);
    InitializeEvent(0, 31192860, 0);
    InitializeEvent(0, 31192899, 0);
    InitializeEvent(0, 31192861, 0);
    InitializeEvent(0, 31192862, 0);
    InitializeEvent(0, 31192880, 0);
    InitializeEvent(0, 31192863, 31190381, 31192870);
    InitializeEvent(1, 31192863, 31190382, 31192871);
    InitializeCommonEvent(0, 900005610, 31191200, 100, 800, 0);
    InitializeCommonEvent(0, 90005261, 31190200, 31192200, 1077936128, 0, 0);
    InitializeEvent(0, 31192210, 31190210, 31192210, 1073741824, 0, 0);
    InitializeEvent(1, 31192210, 31190211, 31192210, 1073741824, 0, 0);
    InitializeEvent(2, 31192210, 31190212, 31192210, 1073741824, 0, 0);
    InitializeEvent(3, 31192210, 31190213, 31192210, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 31190217, 31192219, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 31190219, 31192219, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 31190220, 31192220, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31190300, 31192219, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 31190280, 31192218, 1077936128, 0, 3001);
    InitializeCommonEvent(0, 90005525, 31190600, 31191600);
    InitializeCommonEvent(0, 90005525, 31190601, 31191601);
    InitializeCommonEvent(0, 90005525, 31190602, 31191602);
    InitializeCommonEvent(0, 90005525, 31190603, 31191603);
    InitializeCommonEvent(0, 90005525, 31190604, 31191604);
    InitializeCommonEvent(0, 90005525, 31190605, 31191605);
    InitializeCommonEvent(0, 90005646, 31190800, 31192840, 31192841, 31191840, 31192840, 4895);
    InitializeCommonEvent(0, 90005646, 31190850, 31192890, 31192891, 31191890, 31192840, 4895);
});

$Event(31192210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpAreaFlag = chrSp && InArea(10000, X4_4) && EventFlag(31190603);
    chrSpAreaFlag2 = chrSp && EntityInRadiusOfEntity(10000, X0_4, X8_4, 1) && EventFlag(31190603);
    dmgChr = HasDamageType(31190210, 0, DamageType.Unspecified)
        || CharacterHasStateInfo(31190210, 436)
        || CharacterHasStateInfo(31190210, 2)
        || CharacterHasStateInfo(31190210, 5)
        || CharacterHasStateInfo(31190210, 6)
        || CharacterHasStateInfo(31190210, 260)
        || CharacterAIState(31190210, AIStateType.Combat)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || chrSpAreaFlag
            || chrSpAreaFlag2
            || dmgChr);
    SetNetworkconnectedThisEventSlot(ON);
    if (dmgChr.Passed) {
        WaitFixedTimeSeconds(X12_4);
    }
L1:
    if (Signed(X16_4) != -1) {
        ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    }
    EnableCharacterAI(X0_4);
});

$Event(35002250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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
    chrSpArea = chrSp && InArea(10000, X12_4);
    chrSpArea2 &= chrSp
        && EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
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
        chrSpArea2 &= chr;
    }
L9:
    cond = chrSpArea2
        || chrSpArea
        || (HasDamageType(31190210, 0, DamageType.Unspecified)
            || CharacterAIState(31190210, AIStateType.Combat)
            || CharacterHasStateInfo(31190210, 436)
            || CharacterHasStateInfo(31190210, 2)
            || CharacterHasStateInfo(31190210, 5)
            || CharacterHasStateInfo(31190210, 6)
            || CharacterHasStateInfo(31190210, 260));
    WaitFor(cond);
    WaitFor(cond);
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

$Event(31190600, Restart, function(X0_4, X4_4) {
    if (!EventFlag(X0_4)) {
        WaitFor(PlayerIsInOwnWorld() && HasDamageType(X4_4, 20000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(X0_4, ON);
        ForceAnimationPlayback(X4_4, 1, false, true, false);
    }
L0:
    DisableAsset(X4_4);
});

$Event(31192800, Restart, function() {
    EndIf(EventFlag(31190800));
    WaitFor(CharacterHPValue(31190800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31190800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31190800));
    HandleBossDefeatAndDisplayBanner(31190800, TextBannerType.EnemyFelled);
    SetEventFlagID(31190800, ON);
    SetEventFlagID(9242, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61242, ON);
    }
});

$Event(31192810, Restart, function() {
    if (EventFlag(31190800)) {
        DisableCharacter(31190800);
        DisableCharacterCollision(31190800);
        ForceCharacterDeath(31190800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31190800);
    EnableCharacterInvincibility(31190800);
    DisableCharacterCollision(31190800);
    GotoIf(L1, EventFlag(31190802));
    flagArea = EventFlag(31192805) && InArea(10000, 31192800);
    dmg = HasDamageType(31190800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
L2:
    EnableCharacterAI(31190800);
    DisableCharacterInvincibility(31190800);
    EnableCharacterCollision(31190800);
    SetNetworkUpdateRate(31190800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31190800, 0, 902100310);
});

$Event(31192811, Restart, function() {
    EndIf(EventFlag(31190800));
    WaitFor(HPRatio(31190800) <= 0.6);
    SetEventFlagID(31192802, ON);
});

$Event(31192830, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190800));
    WaitFor(CharacterHasSpEffect(20000, 416));
    SetSpEffect(20000, 14508);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(31192850, Restart, function() {
    EndIf(EventFlag(31190850));
    WaitFor(CharacterHPValue(31190850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31190850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31190850));
    HandleBossDefeatAndDisplayBanner(31190850, TextBannerType.EnemyFelled);
    ForceCharacterDeath(31195850, false);
    DisableGenerator(31193821);
    DisableGenerator(31193820);
    SetEventFlagID(31190850, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61249, ON);
    }
    SetEventFlagID(9249, ON);
});

$Event(31192860, Restart, function() {
    if (EventFlag(31190850)) {
        DisableCharacter(31190850);
        DisableCharacterCollision(31190850);
        ForceCharacterDeath(31190850, false);
        DisableCharacter(31195850);
        DisableCharacterCollision(31195850);
        ForceCharacterDeath(31195850, false);
        DisableGenerator(31193821);
        DisableGenerator(31193820);
        EndEvent();
    }
L0:
    DisableCharacterAI(31190850);
    EnableCharacterInvincibility(31190850);
    ForceAnimationPlayback(31190850, 68011, false, false, false);
    DisableCharacterAI(31190380);
    EnableCharacterInvincibility(31190380);
    ForceAnimationPlayback(31190380, 30000, false, false, false);
    DisableLockOnPoint(31190380, 220);
    WaitFor(EventFlag(31192855) && InArea(10000, 31192850));
    ForceAnimationPlayback(31190850, 68012, false, false, false);
    EnableCharacterAI(31190850);
    DisableCharacterInvincibility(31190850);
    SetNetworkUpdateRate(31190850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31190850, 0, 137600);
    ForceAnimationPlayback(31190380, 20000, false, false, false);
    EnableCharacterAI(31190380);
    DisableCharacterInvincibility(31190380);
    WaitFixedTimeSeconds(3);
    EnableLockOnPoint(31190380, 220);
});

$Event(31192861, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(HPRatio(31190850) <= 0.6);
    SetEventFlagID(31192852, ON);
    EndIf(EventFlag(31190850));
    EnableGenerator(31193821);
    SetNetworkconnectedEventFlagID(31192871, ON);
});

$Event(31192862, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(CharacterDead(31190380));
    EndIf(EventFlag(31190850));
    EnableGenerator(31193820);
    SetNetworkconnectedEventFlagID(31192870, ON);
});

$Event(31192863, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(
        (EventFlag(X4_4) && !CharacterDead(X0_4))
            && !HasMultiplayerState(MultiplayerState.Singleplayer));
    ActivateMultiplayerdependantBuffs(X0_4);
    SetNetworkconnectedEventFlagID(31192875, ON);
    WaitFixedTimeSeconds(3);
    spOnlineChrFlag |= CharacterHasSpEffect(X0_4, 7800)
        || CharacterHasSpEffect(X0_4, 7801)
        || CharacterHasSpEffect(X0_4, 7802)
        || CharacterHasSpEffect(X0_4, 7820)
        || CharacterHasSpEffect(X0_4, 7821)
        || CharacterHasSpEffect(X0_4, 7822);
    if (!spOnlineChrFlag) {
        RestartEvent();
    }
    spOnlineChrFlag |= (PlayerIsInOwnWorld() && CharacterDead(X0_4)) || EventFlag(31192875);
    WaitFor(spOnlineChrFlag);
    SetNetworkconnectedEventFlagID(31192875, ON);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(31192880, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    flag = (EventFlag(31190605) && !EventFlag(31190850)) || !EventFlag(31190800);
    SetEventFlagID(31190890, ON);
    if (flag) {
        SetEventFlagID(31190890, OFF);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190850)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190605));
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(31192849, Restart, function() {
    InitializeEvent(0, 31192845, 31190800, 31191800, 31192800, 31192805, 31195800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31190800, 31191800, 31192800, 31192805, 31192806, 10000);
    InitializeCommonEvent(0, 9005813, 31190800, 31191800, 3, 0, 3);
    InitializeCommonEvent(0, 9005822, 31190800, 921500, 31192805, 31192806, 0, 31192802, 0, 0);
});

$Event(31192899, Restart, function() {
    InitializeEvent(1, 31192845, 31190850, 31191850, 31192850, 31192855, 31195850, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31190850, 31191850, 31192850, 31192855, 31192856, 10000);
    InitializeCommonEvent(0, 9005813, 31190850, 31191850, 3, 0, 3);
    InitializeCommonEvent(0, 9005822, 31190850, 920100, 31192855, 31192856, 0, 31192852, 0, 0);
});

$Event(31192845, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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
    SendAllPhantomsHome();
    SendInvadingPhantomsHome(0);
    RestartEvent();
});
