// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1043390000, 1043391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1043391680, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 1043391682, 100, 800, 1043398540);
    InitializeCommonEvent(0, 90005460, 1043390250);
    InitializeCommonEvent(0, 90005461, 1043390250);
    InitializeCommonEvent(0, 90005462, 1043390250);
    InitializeCommonEvent(0, 90005460, 1043390251);
    InitializeCommonEvent(0, 90005461, 1043390251);
    InitializeCommonEvent(0, 90005462, 1043390251);
    InitializeCommonEvent(0, 90005460, 1043390252);
    InitializeCommonEvent(0, 90005461, 1043390252);
    InitializeCommonEvent(0, 90005462, 1043390252);
    InitializeCommonEvent(0, 90005460, 1043390253);
    InitializeCommonEvent(0, 90005461, 1043390253);
    InitializeCommonEvent(0, 90005462, 1043390253);
    InitializeCommonEvent(0, 90005460, 1043390254);
    InitializeCommonEvent(0, 90005461, 1043390254);
    InitializeCommonEvent(0, 90005462, 1043390254);
    InitializeEvent(0, 1043392600, 1043391610, 1043392610);
    InitializeEvent(1, 1043392600, 1043391611, 1043392611);
    InitializeCommonEvent(0, 90005683, 62104, 1043391684, 210, 78192, 78192);
    InitializeEvent(0, 1043393700, 1043390700, 1043390701, 1043390702, 1043396700);
    InitializeEvent(0, 1043393703, 1043390700);
    InitializeEvent(0, 1043393705, 1043390700);
    InitializeEvent(0, 1043393702, 1043390700);
    InitializeCommonEvent(0, 90005700, 1043390700, 4741, 4742, 1043399249, 1059481190, 4740, 4743, 0);
    InitializeCommonEvent(0, 90005701, 1043390700, 4741, 4742, 1043399249, 3);
    InitializeCommonEvent(0, 90005702, 1043390700, 4743, 4740, 4743);
    InitializeEvent(0, 1043393704, 0);
    InitializeCommonEvent(0, 90005700, 1043390701, 1043399246, 1043399246, 1043399247, 1059481190, 1043399246, 1043399246, 0);
    InitializeCommonEvent(0, 90005701, 1043390701, 4741, 4742, 1043399249, 3);
    InitializeCommonEvent(0, 1043393706, 1043390700, 1043390701);
    InitializeEvent(0, 1043393707, 1043390700, 4740, 4741, 4742, 4743, 1043390701, 1043399246);
    InitializeCommonEvent(0, 90005706, 1043370720, 930025, 0);
    InitializeCommonEvent(0, 90005703, 1043390710, 3661, 3662, 1043399301, 1043399314, 3660, 3663, -1);
    InitializeCommonEvent(0, 90005704, 1043390710, 1043399314, 3660, 1043399301, 3);
    InitializeCommonEvent(0, 90005702, 1043390710, 3663, 3660, 3663);
    InitializeEvent(0, 1043393720, 1043390710);
    InitializeEvent(0, 1043393721, 0);
    InitializeEvent(0, 1043393722, 0);
    InitializeEvent(0, 1043390724, 0);
    InitializeEvent(0, 1043393750, 1043390705);
    InitializeEvent(0, 1043392390, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1043392200, 0);
    InitializeCommonEvent(0, 90005261, 1043390220, 1043392220, 1077936128, 0, 3010);
    InitializeCommonEvent(0, 90005251, 1043390220, 1084227584, 0, -1);
    InitializeEvent(0, 1043392650, 0);
});

$Event(1043392600, Restart, function(X0_4, X4_4) {
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

$Event(1043392650, Default, function() {
    RegisterLadder(1043390580, 1043390851, 1043391580);
    RegisterLadder(1043390582, 1043390853, 1043391582);
});

$Event(1043392200, Restart, function() {
    ForceCharacterTreasure(1043395200);
});

$Event(1043392390, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, EventFlag(1042372800));
    GotoIf(L20, PlayerInMap(60, 42, 40, 0));
    if (!(InArea(10000, 1043392390)
        && !InArea(10000, 1043392391)
        && !InArea(10000, 1043392392)
        && !InArea(10000, 1043392393)
        && !InArea(10000, 1043392394))) {
L0:
        ClearSpEffect(10000, 4211);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    SetSpEffect(10000, 4211);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L20:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1043392670, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        PlayerHasItem(ItemType.Goods, 130)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 39, 0)
            && !CharacterHasSpEffect(10000, 100690));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, false);
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X8_4, 1);
});

$Event(1043392671, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 39, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9120, X8_4, 1);
});

$Event(1043393700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1043399200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4740) && EventFlag(1041369248)) {
            SetEventFlagID(1041369248, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    DisableCharacter(X8_4);
    DisableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    GotoIf(L20, 
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747)) && EventFlag(1043399221)));
    GotoIf(L1, EventFlag(4740));
    GotoIf(L2, EventFlag(4741));
    GotoIf(L4, EventFlag(4743));
L1:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
        DisableCharacterAI(X0_4);
    }
    Goto(L20);
L4:
    GotoIf(L20, !EventFlag(1043399222));
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
L20:
    WaitFor(EventFlag(1043399200));
    RestartEvent();
});

$Event(1043393702, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4743));
    EndIf(!EventFlag(1043399221));
    WaitFor(CharacterDead(X0_4));
    SetNetworkconnectedEventFlagID(1043399222, ON);
    EndEvent();
});

$Event(1043393703, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, EventFlag(4980));
    GotoIf(L10, AnyBatchEventFlags(4982, 4983));
L0:
    WaitFor(CharacterHasSpEffect(X0_4, 9601) || CharacterHasSpEffect(X0_4, 9603));
    GotoIf(L1, CharacterHasSpEffect(X0_4, 9601));
    GotoIf(L2, CharacterHasSpEffect(X0_4, 9603));
L1:
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 4, 1) || !CharacterHasSpEffect(X0_4, 9601));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9601));
    Goto(L20);
L2:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20010, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L10:
    WaitFor(CharacterHasSpEffect(X0_4, 9603));
    if (!CharacterHasSpEffect(X0_4, 9603)) {
    }
L11:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20011, false, false, false);
        DisableCharacterAI(X0_4);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L20:
    RestartEvent();
});

$Event(1043393704, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043399229));
    WaitFor(EntityInRadiusOfEntity(10000, 1043390700, 7.5, 1));
    SetNetworkconnectedEventFlagID(1043399229, ON);
    EndEvent();
});

$Event(1043393705, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, CharacterHasSpEffect(X0_4, 9602));
    Goto(L10);
L0:
    DisableCharacterAI(X0_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
L10:
    EnableCharacterAI(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
});

$Event(1043393706, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X4_4, 20000, DamageType.Unspecified)
            || HasDamageType(X4_4, 40000, DamageType.Unspecified))
            && !EventFlag(1041362709));
    SetNetworkconnectedEventFlagID(1041362708, ON);
    EndIf(EventFlag(4741));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    if (CharacterHasSpEffect(X0_4, 9602)) {
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
    }
});

$Event(1043393707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    flagDmgHp = (EventFlag(X8_4) || EventFlag(X12_4))
        || (HasDamageType(X0_4, 20000, DamageType.Unspecified) && CharacterHPValue(X0_4) < 1);
    flagDmgHp2 = EventFlag(X24_4)
        || (HasDamageType(X20_4, 20000, DamageType.Unspecified) && CharacterHPValue(X20_4) < 1);
    WaitFor(flagDmgHp || flagDmgHp2);
    GotoIf(L0, flagDmgHp.Passed);
    GotoIf(L5, flagDmgHp2.Passed);
L0:
    SetNetworkconnectedEventFlagID(X24_4, ON);
    SetCharacterTeamType(X20_4, TeamType.HostileNPC);
    Goto(L10);
L5:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacterAI(X0_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SaveRequest();
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    EndEvent();
});

$Event(1043343700, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30023, false, false, false);
    EndEvent();
});

$Event(1043343701, Restart, function(X0_4) {
    if (!EventFlag(30110800)) {
        WaitFor(EventFlag(30110800));
    }
L1:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1043343702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043399356));
    WaitFor(EntityInRadiusOfEntity(10000, 30111950, 15, 1) && EventFlag(1043399355));
    SetEventFlagID(1043399356, ON);
    EndEvent();
});

$Event(1043393720, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3660)) {
            SetEventFlagID(1043399303, OFF);
        }
    }
L19:
    if (!EventFlag(3665)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3665));
        RestartEvent();
    }
L6:
    if (EventFlag(1043399311)) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1043392700, -1);
        GotoIf(L1, EventFlag(3660));
    }
    GotoIf(L2, EventFlag(3661));
    GotoIf(L4, EventFlag(3663));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    if (!EventFlag(1043399311)) {
        ForceAnimationPlayback(X0_4, 930018, false, false, false);
    }
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
    WaitFor(!EventFlag(3665));
    RestartEvent();
});

$Event(1043393721, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3660));
    EnableCharacterImmortality(1043390710);
    DisableCharacterHPBarDisplay(1043390710);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1043399311);
    DisableCharacterImmortality(1043390710);
    EnableCharacterHPBarDisplay(1043390710);
    EndEvent();
});

$Event(1043393722, Restart, function() {
    EndIf(!EventFlag(3665));
    SetNetworkconnectedEventFlagID(1043392712, OFF);
    SetNetworkconnectedEventFlagID(1043392713, OFF);
    WaitFor(
        EventFlag(3665)
            && !EventFlag(1043399305)
            && EntityInRadiusOfEntity(10000, 1043390710, 30, 1));
    SetNetworkconnectedEventFlagID(1043392712, ON);
    WaitFixedTimeSeconds(20);
    RestartEvent();
});

$Event(1043390724, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043399311));
    SetEventFlagID(1043399314, ON);
    WaitFor(EventFlag(1043399311));
    SetEventFlagID(1043399314, OFF);
    EndEvent();
});

$Event(1043393750, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
});
