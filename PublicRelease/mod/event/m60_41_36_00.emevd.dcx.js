// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 900005610, 1041361680, 100, 800, 0);
    InitializeCommonEvent(0, 90005460, 1041360210);
    InitializeCommonEvent(0, 90005461, 1041360210);
    InitializeCommonEvent(0, 90005462, 1041360210);
    InitializeCommonEvent(0, 90005460, 1041360211);
    InitializeCommonEvent(0, 90005461, 1041360211);
    InitializeCommonEvent(0, 90005462, 1041360211);
    InitializeEvent(0, 1041362650, 1550, 710550);
    InitializeCommonEvent(0, 90005725, 4730, 4731, 4733, 1041369205, 1041360700, 1041360701, 1041366700);
    InitializeCommonEvent(0, 90005703, 1041360700, 4731, 4732, 1041369206, 4731, 4730, 4734, 0);
    InitializeCommonEvent(0, 90005704, 1041360700, 4731, 4730, 1041369206, 3);
    InitializeCommonEvent(0, 90005702, 1041360700, 4733, 4730, 4734);
    InitializeCommonEvent(0, 90005703, 1041360701, 4731, 4732, 1041369207, 4731, 4730, 4734, 0);
    InitializeCommonEvent(0, 90005704, 1041360701, 4731, 4730, 1041369207, 3);
    InitializeCommonEvent(0, 90005728, 1041360701, 1041362706, 1041362707);
    InitializeCommonEvent(0, 90005727, 4731, 1041360700, 1041360701, 4730, 4733);
    RegisterLadder(1041360580, 1041360851, 1041361580);
    RegisterLadder(1041360582, 1041360853, 1041361582);
    RegisterLadder(1041360584, 1041360855, 1041361584);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041360700, true);
    SetCharacterBackreadState(1041360701, true);
    InitializeCommonEvent(0, 90005251, 1041360250, 1117782016, 0, -1);
});

$Event(1041362650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 41, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(1041363700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1041369200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4740) && EventFlag(1041369203)) {
            SetEventFlagID(1041369203, OFF);
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
    GotoIf(L20, !EventFlag(4745));
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
    ForceAnimationPlayback(X0_4, 30003, false, false, false);
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
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1041369200));
    RestartEvent();
});

$Event(1041363706, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X0_4, 20000, DamageType.Unspecified)
            || HasDamageType(X0_4, 40000, DamageType.Unspecified))
            && !EventFlag(1041362701));
    SetNetworkconnectedEventFlagID(1041362708, ON);
    EndEvent();
});

$Event(1041363707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20009, false, false, false);
    }
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    EndEvent();
});
