// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76302, 1038511950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76302, 1038511980, 77300, 1, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeEvent(0, 1038512800, 0);
    InitializeEvent(0, 1038512810, 0);
    InitializeEvent(0, 1038512849, 0);
    InitializeEvent(0, 1038512500, 0);
    InitializeCommonEvent(0, 90005300, 1038510500, 1038510500, 40302, 0, 0);
    InitializeEvent(0, 1038513700, 1038510700, 1038511700);
    InitializeCommonEvent(0, 90005752, 1038511700, 200, 120, 1077936128);
    InitializeEvent(0, 1038513701, 0);
    InitializeEvent(0, 1038513702, 1038511700, 1038510700);
    InitializeEvent(0, 1038513703, 0);
    InitializeCommonEvent(0, 90005740, 1038512725, 1038512726, 1038512727, 1038510700, 703, 1038511701, 703, 1045220557, 90203, -1, -1, 1067030938);
    InitializeCommonEvent(0, 90005741, 1038512728, 1038512729, 1038512727, 1038510700, 90201, 0, -1, -1, 1056964608);
    InitializeEvent(0, 1038513705, 1038510705);
    InitializeCommonEvent(0, 90005704, 1038510705, 4181, 4180, 1038519251, 3);
    InitializeCommonEvent(0, 90005703, 1038510705, 4181, 4182, 1038519251, 1059481190, 4180, 4184, -1);
    InitializeCommonEvent(0, 90005702, 1038510705, 4183, 4180, 4184);
    InitializeCommonEvent(0, 90005771, 1038510950, 1038512700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038510700, true);
    SetCharacterBackreadState(1038510705, true);
    DisableAsset(1038511700);
    InitializeCommonEvent(0, 90005261, 1038510301, 1038512301, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1038510302, 1038512301, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005211, 1038510400, 30002, 20002, 1038512400, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1038510401, 30002, 20002, 1038512400, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1038510402, 30002, 20002, 1038512400, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1038510600, 1038512600, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005201, 1038510602, 30000, 20000, 1082130432, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1038510482, 1038512482, 0, 3005);
    InitializeEvent(0, 1038512405, 1038510405, 30003, 20003, 1073741824, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1038512405, 1038510406, 30003, 20003, 1073741824, 0, 0, 0, 0, 0);
    InitializeEvent(2, 1038512405, 1038510451, 30003, 20003, 1073741824, 0, 0, 0, 0, 0);
    InitializeEvent(3, 1038512405, 1038510480, 30003, 20003, 1073741824, 0, 0, 0, 0, 0);
    InitializeEvent(4, 1038512405, 1038510489, 30003, 20003, 1073741824, 0, 0, 0, 0, 0);
    InitializeEvent(5, 1038512405, 1038510490, 30002, 20002, 1073741824, 0, 0, 0, 0, 0);
});

$Event(1038512405, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(1038510404, 10530)
        || CharacterHasSpEffect(1038510409, 10530)
        || CharacterHasSpEffect(1038510481, 10531);
    sp2 = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp3 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp5 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp6 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        sp
            || areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(1038512500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 1038512500));
    EndIf(EventFlag(1038500500));
    SetEventFlagID(1038500500, ON);
    PlaySE(1038512500, SoundType.BGM, 990000020);
});

$Event(1038512800, Restart, function() {
    EndIf(EventFlag(1038510800));
    WaitFor(CharacterHPValue(1038510800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1038510800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1038510800));
    HandleBossDefeatAndDisplayBanner(1038510800, TextBannerType.EnemyFelled);
    EnableObjAct(1038511560, 1110064);
    SetEventFlagID(1038510800, ON);
});

$Event(1038512810, Restart, function() {
    if (EventFlag(1038510800)) {
        DisableCharacter(1038510800);
        DisableCharacterCollision(1038510800);
        ForceCharacterDeath(1038510800, false);
        EnableObjAct(1038511560, 1110064);
        EndEvent();
    }
L0:
    EnableCharacterInvincibility(1038510800);
    DisableCharacterAI(1038510800);
    ForceAnimationPlayback(1038510800, 30000, true, false, false);
    WaitFor(EventFlag(1038512805) && InArea(10000, 1038512800));
L2:
    ForceAnimationPlayback(1038510800, 20000, false, false, false);
    DisableCharacterInvincibility(1038510800);
    EnableCharacterAI(1038510800);
    SetNetworkUpdateRate(1038510800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1038510800, 0, 904130540);
    DisableObjAct(1038511560, 1110064);
});

$Event(1038512849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1038510800, 1038511800, 1038512800, 1038512805, 1038515800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1038510800, 1038511800, 1038512800, 1038512805, 1038512806, 10000);
    InitializeCommonEvent(0, 9005811, 1038510800, 1038511800, 3, 0);
    InitializeCommonEvent(0, 9005822, 1038510800, 931000, 1038512805, 1038512806, 0, 1038512802, 0, 0);
    InitializeCommonEvent(0, 9005812, 1038510800, 1038511801, 3, 0, 0);
});

$Event(1038513700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3420)) {
            SetEventFlagID(1038519203, OFF);
        }
        if (EventFlag(1038519207)) {
            SetNetworkconnectedEventFlagID(1038512720, ON);
        }
    }
L10:
    if (!(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720)))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3420));
    GotoIf(L2, EventFlag(3421));
    GotoIf(L3, EventFlag(3422));
    GotoIf(L4, EventFlag(3423));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableAsset(X4_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
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
    WaitFor(!(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720))));
    RestartEvent();
});

$Event(1038513701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeRealFrames(1);
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    EndIf(EntityInRadiusOfEntity(10000, 1038500952, 5, 1));
    WaitFor(
        InArea(10000, 1038512700) || EventFlag(16000860) || EventFlag(76301) || EventFlag(76302));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    SetEventFlagID(1038519207, ON);
    EndEvent();
});

$Event(1038513702, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038509205));
    EndIf(EventFlag(1038512704));
    GotoIf(L1, !EventFlag(1038512701));
    Goto(L2);
L1:
    WaitFor(HasDamageType(X0_4, 20000, DamageType.Unspecified));
    Goto(L3);
L2:
    dmg = HasDamageType(X0_4, 20000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(4));
    if (dmg.Passed) {
L3:
        GotoIf(L5, !EventFlag(1038512701));
        GotoIf(L6, !EventFlag(1038512703));
        RestartEvent();
L5:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1038512700, ON);
            WaitFor(EventFlag(1038512706));
        }
        RestartEvent();
L6:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1038512702, ON);
            WaitFor(EventFlag(1038512707));
        }
        RestartEvent();
    }
L7:
    SetEventFlagID(1038512704, ON);
    EndEvent();
});

$Event(1038513703, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038509205));
    WaitFor(EventFlag(1038519205) && EventFlag(1038519207));
    SetEventFlagID(16008540, ON);
    SendAllPhantomsHome();
    WarpPlayer(16, 0, 0, 0, 16002701, 0);
    EndEvent();
});

$Event(1038513705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1050389265, OFF);
        SetNetworkconnectedEventFlagID(1038519255, OFF);
        SetNetworkconnectedEventFlagID(4197, OFF);
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    GotoIf(L6, EventFlag(4187) && EventFlag(1050389266));
    GotoIf(S0, PlayerIsInOwnWorld());
    GotoIf(L6, EventFlag(4187) && EventFlag(4197));
S0:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(EventFlag(4187) && EventFlag(1050389266));
    RestartEvent();
L6:
    SetNetworkconnectedEventFlagID(1050389265, OFF);
    SetNetworkconnectedEventFlagID(1038519255, ON);
    SetNetworkconnectedEventFlagID(4197, ON);
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
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
    Goto(L20);
L20:
    WaitFor(!(EventFlag(4187) && EventFlag(1050389266)));
    RestartEvent();
});
