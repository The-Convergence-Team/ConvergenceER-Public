// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1042380000, 1042381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005860, 1042380800, 0, 1042380800, 0, 1042380400, 0);
    InitializeCommonEvent(0, 90005870, 1042380800, 904980601, 24);
    InitializeEvent(0, 1042382350, 0);
    InitializeCommonEvent(0, 90005460, 1042380210);
    InitializeCommonEvent(0, 90005461, 1042380210);
    InitializeCommonEvent(0, 90005462, 1042380210);
    InitializeCommonEvent(0, 90005760, 1042380850, 1042380850, 1042382360, 1042382718);
    InitializeCommonEvent(0, 90005770, 1042380701);
    InitializeCommonEvent(0, 90005860, 1042380850, 0, 1042380850, 0, 1042380410, 0);
    InitializeCommonEvent(0, 90005870, 1042380850, 903100600, 10);
    InitializeCommonEvent(0, 90005872, 1042380850, 10, 0);
    InitializeEvent(0, 1042383700, 1042380710);
    InitializeCommonEvent(0, 90005704, 1042380710, 3881, 3880, 1042389251, 3);
    InitializeCommonEvent(0, 90005703, 1042380710, 3881, 3882, 1042389251, 3881, 3880, 3884, -1);
    InitializeCommonEvent(0, 90005702, 1042380710, 3883, 3880, 3884);
    InitializeCommonEvent(0, 90005630, 61423800, 1042381500, 127);
    InitializeCommonEvent(0, 90005560, 1042380600, 1042381600, 0);
    
    // Bodies for Berseker Start
    InitializeEvent(0, 1042382500, 1042380500);
    InitializeEvent(1, 1042382500, 1042380501);
    InitializeEvent(2, 1042382500, 1042380502);
    InitializeEvent(3, 1042382500, 1042380503);
    InitializeEvent(4, 1042382500, 1042380504);
    InitializeEvent(5, 1042382500, 1042380505);
    InitializeEvent(0, 1042382501, 0); // Start seated
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042380710, true);
    InitializeCommonEvent(0, 90005251, 1042380220, 1109393408, 0, 3011);
    InitializeCommonEvent(0, 90005261, 1042380240, 1042382240, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380241, 1042382240, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380242, 1042382240, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380243, 1042382240, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380254, 1042382254, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380255, 1042382254, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380256, 1042382254, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380262, 1042382254, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1042380263, 1042382254, 1065353216, 0, -1);
    InitializeEvent(0, 1042382300, 0);
    InitializeCommonEvent(0, 90005211, 1042380800, 30000, 20000, 1042382340, 1092616192, 0, 0, 0, 0, 0);
});

$Event(200, Default, function() {
    InitializeEvent(0, 1042382290, 0);
});

$Event(1042382290, Restart, function() {
    DisableNetworkSync();
    EndIf(InArea(10000, 1043392396));
    GotoIf(L0, EventFlag(1042372800));
    GotoIf(L2, InArea(10000, 1042402390));
    if (!(InArea(10000, 1042382290)
        || InArea(10000, 1042382291)
        || InArea(10000, 1042382292)
        || InArea(10000, 1042382293)
        || InArea(10000, 1042382294)
        || InArea(10000, 1042382295)
        || InArea(10000, 1042382296)
        || InArea(10000, 1042382297)
        || InArea(10000, 1042382298))) {
L0:
        ClearSpEffect(10000, 4211);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    SetSpEffect(10000, 4211);
L2:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1042382300, Restart, function() {
    ForceCharacterTreasure(1042385200);
});

$Event(1042382340, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaTime = InArea(10000, X4_4) && TimeOfDayInRange(20, 0, 0, 5, 0, 0);
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
    areaTimeChrSp = areaTime && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaTimeChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (areaTimeChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1042382350, Restart, function() {
    EndIf(SpecialStandbyEndedFlag(1042380350));
    chrSpAreaDmg = ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, 1042382350)
            || (InArea(10000, 1042382351)
                && (HasDamageType(1042380350, 0, DamageType.Unspecified)
                    || CharacterHasStateInfo(1042380350, 436)
                    || CharacterHasStateInfo(1042380350, 2)
                    || CharacterHasStateInfo(1042380350, 5)
                    || CharacterHasStateInfo(1042380350, 6)
                    || CharacterHasStateInfo(1042380350, 260)
                    || CharacterAIState(1042380350, AIStateType.Combat))));
    sp = CharacterHasSpEffect(1042380350, 481)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90110)
        && !CharacterHasSpEffect(1042380350, 90160);
    sp2 = CharacterHasSpEffect(1042380350, 482)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90120)
        && !CharacterHasSpEffect(1042380350, 90160)
        && !CharacterHasSpEffect(1042380350, 90162);
    sp3 = CharacterHasSpEffect(1042380350, 483)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90140)
        && !CharacterHasSpEffect(1042380350, 90160)
        && !CharacterHasSpEffect(1042380350, 90161);
    sp4 = CharacterHasSpEffect(1042380350, 484)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90130)
        && !CharacterHasSpEffect(1042380350, 90161)
        && !CharacterHasSpEffect(1042380350, 90162);
    sp5 = CharacterHasSpEffect(1042380350, 487)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90150)
        && !CharacterHasSpEffect(1042380350, 90160);
    WaitFor(sp || sp2 || sp3 || sp4 || sp5 || chrSpAreaDmg);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(1042380350, ON);
    ForceAnimationPlayback(1042380350, 20016, false, true, false);
    ChangeCharacterPatrolBehavior(1042380350, 1042383350);
});

$Event(1042382600, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        ReproduceAssetDestruction(X4_4, 1);
        EndEvent();
    }
L0:
    WaitFor(AssetDestroyed(X4_4, Equal, 1));
    SetNetworkconnectedEventFlagID(X0_4, ON);
});

$Event(1042382650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(X4_4)
            && EventFlag(6580)
            && EventFlag(710550)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 42, 38, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, X4_4, 1);
});

$Event(1042382651, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 42, 38, 0)
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
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 203000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(1042383700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3880)) {
            SetEventFlagID(1042389253, OFF);
        }
    }
L10:
    if (!EventFlag(1042382719)) {
        SetNetworkconnectedEventFlagID(1042382718, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1042380850)
            && (EventFlag(1042380701)
                || EventFlag(3881)
                || EventFlag(3882)
                || EventFlag(3883)
                || !EventFlag(3885))) {
            SetNetworkconnectedEventFlagID(1042382718, ON);
        }
    }
L19:
    SetNetworkconnectedEventFlagID(1042382719, ON);
    GotoIf(L5, EventFlag(3885));
    GotoIf(L4, EventFlag(3888));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(EventFlag(3885) || EventFlag(3888));
    RestartEvent();
L5:
    GotoIf(L1, EventFlag(3880));
    GotoIf(L2, EventFlag(3881));
    GotoIf(L3, EventFlag(3882));
    GotoIf(L4, EventFlag(3883));
L1:
    GotoIf(S0, !EventFlag(1042382718));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
S0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    GotoIf(S1, !EventFlag(1042382718));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
S1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    GotoIf(S2, !EventFlag(1042382718));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
S2:
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
    WaitFor(!(EventFlag(3885) || EventFlag(3888)));
    RestartEvent();
});

// Kill Kaidens
$Event(1042382500, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

// Force sit anim and rotate cam on first spawn
$Event(1042382501, Restart, function() {
    EndIf(!EventFlag(60904) || EventFlag(1042380501) || !InArea(10000, 1042380985));
    SetCameraAngle(20, -20);
    FadeToBlack(1, 0, true, 3)
    SetSpEffect(10000, 103000); // Rest
    WaitFixedTimeSeconds(2);
    FadeToBlack(0, 3, false, 0.1)
    SetEventFlagID(1042380501, ON);
});
