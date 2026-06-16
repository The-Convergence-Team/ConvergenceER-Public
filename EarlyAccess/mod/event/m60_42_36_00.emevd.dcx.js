// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1042360000, 1042361950, 0, 0, 0, 5);
    RegisterBonfire(1042360001, 1042361951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 71001, 76100, 1042361980, 77100, 1, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    InitializeCommonEvent(0, 90005100, 71001, 76101, 1042361981, 77100, 0, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    InitializeCommonEvent(0, 90005870, 1042360800, 903251600, 12);
    InitializeCommonEvent(0, 90005860, 1042360800, 0, 1042360800, 0, 30100, 0);
    InitializeCommonEvent(0, 90005872, 1042360800, 12, 0);
    InitializeCommonEvent(0, 90005683, 62103, 1042361684, 210, 78190, 78190);
    InitializeEvent(0, 1042363700, 1042360700, 1042361701);
    InitializeCommonEvent(0, 90005704, 1042360700, 3181, 3180, 1042369201, 3);
    InitializeCommonEvent(0, 90005703, 1042360700, 3181, 3182, 1042369201, 3181, 3180, 3183, -1);
    InitializeCommonEvent(0, 90005702, 1042360700, 3183, 3180, 3183);
    InitializeCommonEvent(0, 1042363701, 0);
    InitializeCommonEvent(0, 1042363702, 0);
    InitializeCommonEvent(0, 1042363703, 0);
    InitializeEvent(0, 1042360710, 1042360730, 1042361711);
    InitializeCommonEvent(0, 90005704, 1042360730, 1042369401, 3746, 1042369401, 3);
    InitializeCommonEvent(0, 90005709, 1042360730, 905, 603000);
    InitializeCommonEvent(0, 90005709, 1042360730, 960, 603050);
    InitializeEvent(0, 1042360711, 1042360750);
    InitializeEvent(0, 1042360712, 1042360730, 1042361711);
    InitializeEvent(0, 1042360713, 1042360730, 1042361711, 1042360750);
    InitializeCommonEvent(0, 90005750, 1042361710, 4350, 103900, 400390, 400390, 1042369413, 0);
    InitializeCommonEvent(0, 90005708, 1042360730, 3746, 0);
    InitializeEvent(0, 1042363720, 1042360710, 1042360711);
    InitializeCommonEvent(0, 90005704, 1042360710, 4701, 4700, 1042369301, 3);
    InitializeCommonEvent(0, 90005703, 1042360710, 4701, 4702, 1042369301, 4701, 4700, 4704, -1);
    InitializeCommonEvent(0, 90005702, 1042360710, 4703, 4700, 4704);
    InitializeCommonEvent(0, 90005704, 1042360711, 4701, 4700, 1042369327, 3);
    InitializeCommonEvent(0, 90005703, 1042360711, 4701, 4702, 1042369327, 4701, 4700, 4704, 0);
    InitializeCommonEvent(0, 90005728, 1042360711, 1042362715, 1042362716);
    InitializeCommonEvent(0, 90005727, 4701, 1042360710, 1042360711, 4700, 4703);
    InitializeEvent(0, 1042360724, 1042360710, 1042360711);
    InitializeEvent(0, 1042363730, 1042360720);
    InitializeEvent(0, 1042363740, 78100, 1042360951, 1042369450);
    InitializeEvent(0, 1042363741, 78101, 1042360950, 1042369452);
    InitializeEvent(0, 1042363742, 1042360951, 1042369450);
    InitializeEvent(0, 1042363743, 1042360951, 1042369451);
    InitializeEvent(0, 1042363744, 1042360950, 1042369452);
    InitializeEvent(0, 1042363745, 1042360950, 1042369453);
    InitializeEvent(0, 1042363746, 1042360951, 1042369451);
    InitializeEvent(0, 1042363747, 1042360950, 1042369453);
    InitializeEvent(0, 1042360750, 1042360740);
    InitializeEvent(0, 1042362215, 1042360215, 1042362215);
    InitializeEvent(1, 1042362215, 1042360216, 1042362215);
    InitializeEvent(2, 1042362215, 1042360217, 1042362217);
    InitializeEvent(0, 1042362650, 1500, 710500, 69070);
    InitializeEvent(0, 1042362652, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1042362656, 1740, 710740, 69310);
    InitializeEvent(0, 1042362660, 1730, 710730, 69300);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042360700, true);
    SetCharacterBackreadState(1042360710, true);
    SetCharacterBackreadState(1042360711, true);
    SetCharacterBackreadState(1042360730, true);
    InitializeCommonEvent(0, 90005300, 1042360200, 1042365200, 0, 0, 0);
});

$Event(1042362200, Restart, function(X0_4) {
    EndIf(!EventFlag(1042360000));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
});

$Event(1042362215, Restart, function(X0_4, X4_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(CharacterDead(X0_4));
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp3 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp5 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    dmgAreaChr = HasDamageType(X0_4, 10000, DamageType.Unspecified)
        || InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    WaitFor(sp || sp2 || sp3 || sp4 || sp5 || chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SetSpEffect(X0_4, 8080);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(X0_4, 8080);
});

$Event(1042362650, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1042362657)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    EndIf(EventFlag(X8_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9107, X4_4, 1);
    SetEventFlagID(X8_4, ON);
});

$Event(1042362652, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 42, 36, 0)
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

$Event(1042362656, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1042362656)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    EndIf(EventFlag(X8_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9131, X4_4, 1);
    SetEventFlagID(X8_4, ON);
});

$Event(1042362660, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(76100)
            && !EventFlag(X4_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(3);
    ShowTutorialPopup(X0_4, true, true);
    EndIf(EventFlag(X8_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9130, X4_4, 1);
    SetEventFlagID(X8_4, ON);
});

$Event(1042360684, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9260, X0_4));
    DisplayGenericDialog(4210, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    if (!EventFlag(X4_4)) {
        if (!EventFlag(X8_4)) {
            if (!EventFlag(X12_4)) {
                SetEventFlagID(X4_4, ON);
                SetEventFlagID(X8_4, ON);
            }
        }
    }
L0:
    WaitFixedTimeSeconds(1);
    EndEvent();
});

$Event(1042360690, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    if (EventFlag(X12_4)) {
        DeleteAssetfollowingSFX(X0_4, true);
        SetEventFlagID(X4_4, OFF);
        SetEventFlagID(X8_4, OFF);
        EndEvent();
    }
L0:
    if (!EventFlag(X16_4)) {
        WaitFor(EventFlag(X4_4) && EventFlag(X8_4));
        CreateAssetfollowingSFX(X0_4, 210, 800530);
        SetEventFlagID(X16_4, ON);
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1042363700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3180)) {
            SetEventFlagID(1042369205, OFF);
        }
    }
L10:
    if (!EventFlag(3185)) {
        if (!EventFlag(3187)) {
            if (!EventFlag(3191)) {
                DisableCharacter(X0_4);
                SetCharacterBackreadState(X0_4, true);
                DisableAsset(X4_4);
                WaitFor(EventFlag(3185) || EventFlag(3187) || EventFlag(3191));
                RestartEvent();
            }
        }
    }
L5:
    EnableAsset(X4_4);
    GotoIf(L1, EventFlag(3180));
    GotoIf(L2, EventFlag(3181));
    GotoIf(L3, EventFlag(3182));
    GotoIf(L4, EventFlag(3183));
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
    DisableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3185) || EventFlag(3187) || EventFlag(3191)));
    RestartEvent();
});

$Event(1042363701, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1042369249, OFF);
    EndIf(!(EventFlag(3188) || EventFlag(3189) || EventFlag(3190)));
    EndIf(!EventFlag(3180));
    SetEventFlagID(1042369249, ON);
    EndEvent();
});

$Event(1042363702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3185) && !EventFlag(3187));
    EndIf(!EventFlag(181));
    SetEventFlagID(3198, ON);
    EndEvent();
});

$Event(1042363703, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60826));
    WaitFor(EventFlag(400035));
    SetEventFlagID(60826, ON);
    AwardGesture(60);
    EndEvent();
});

$Event(1042360710, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3746)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3746));
        RestartEvent();
    }
L6:
    if (PlayerIsInOwnWorld()) {
        SetCurrentTime(22, 30, 0, false, false, false, 0, 0, 0);
        CreateAssetfollowingSFX(X4_4, 100, 800227);
        SetCameraAngle(0, -115.86);
    }
L19:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTalkRange(X0_4, 30);
    EnableCharacterImmortality(X0_4);
    ForceAnimationPlayback(X0_4, 930000, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3746));
    RestartEvent();
});

$Event(1042360711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(4680)
        && !EventFlag(9000)
        && EntityInRadiusOfEntity(1042361950, 20000, 5, 1)
        && CharacterHPValue(X0_4) > 0) {
        SetEventFlagID(1042369411, ON);
        SetEventFlagID(3758, ON);
        EndEvent();
    }
L0:
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1042360712, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    flag = EventFlag(1042369401);
    WaitFor(EventFlag(1042362732) || flag);
    SetEventFlagID(1042369415, OFF);
    if (flag.Passed) {
        SetEventFlagID(1042369410, ON);
    }
L0:
    WaitFixedTimeFrames(1);
    WaitFor(!EventFlag(1042362733));
    SetEventFlagID(1042362734, ON);
    ForceAnimationPlayback(X0_4, 20013, false, false, false);
    SetEventFlagID(4718, ON);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(1042369413, ON);
    SetEventFlagID(3758, ON);
});

$Event(1042360713, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    WaitFor(EventFlag(3746) && TimeOfDayInRange(20, 0, 0, 5, 30, 0));
    flagAreaTimeChr = !EventFlag(1042362733)
        && (!InArea(20000, 1042362710)
            || TimeOfDayInRange(5, 30, 0, 20, 0, 0)
            || PlayerTargeted(1, 31, AIStateType.Combat));
    flag = EventFlag(1042369410);
    WaitFor(flagAreaTimeChr || flag);
    EndIf(flag.Passed);
    SetEventFlagID(1042369415, OFF);
    ForceAnimationPlayback(X0_4, 20013, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    SetEventFlagID(4718, ON);
    ForceCharacterDeath(X8_4, false);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(3758, ON);
});

$Event(1042363720, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4700)) {
            SetEventFlagID(1042369303, OFF);
        }
    }
L10:
    GotoIf(L5, EventFlag(4705));
    GotoIf(L17, EventFlag(4717));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    WaitFor(EventFlag(4705));
    RestartEvent();
L5:
    GotoIf(L1, EventFlag(4700));
    GotoIf(L2, EventFlag(4701));
    GotoIf(L3, EventFlag(4702));
    GotoIf(L4, EventFlag(4703));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetCharacterTeamType(X4_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 930003, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4705));
    RestartEvent();
L17:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    SetCharacterTeamType(X4_4, TeamType.Disabled);
    ForceAnimationPlayback(X0_4, 930011, false, false, false);
    ForceAnimationPlayback(X4_4, 930017, false, false, false);
    WaitFor(!(EventFlag(4705) || EventFlag(4717)));
    RestartEvent();
});

$Event(1042363723, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4700));
    WaitFor(
        EventFlag(4701) && (CharacterHasSpEffect(X0_4, 9603) || CharacterHasSpEffect(X0_4, 9604)));
    GotoIf(L3, CharacterHasSpEffect(X0_4, 9603));
    GotoIf(L4, CharacterHasSpEffect(X0_4, 9604));
L3:
    ForceAnimationPlayback(X0_4, 20009, false, false, false);
    EndEvent();
L4:
    ForceAnimationPlayback(X0_4, 20014, false, false, false);
    EndEvent();
});

$Event(1042360724, Default, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    WaitFor(EventFlag(4700) && EventFlag(4717));
    WaitFor(EventFlag(4705));
    ForceAnimationPlayback(X0_4, 20019, false, false, false);
    ForceAnimationPlayback(X4_4, 20017, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetCharacterTeamType(X4_4, TeamType.FriendlyNPC);
});

$Event(1042363730, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, 30021, false, false, false);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(X0_4, 30021, false, false, false);
});

$Event(1042363740, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(X0_4) && EntityInRadiusOfEntity(20000, X4_4, 5, 1) && !EventFlag(X8_4));
    SetEventFlagID(1042372701, ON);
    WaitFor(!EventFlag(X0_4) || !EntityInRadiusOfEntity(20000, X4_4, 5, 1) || EventFlag(X8_4));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

$Event(1042363741, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(X0_4) && EntityInRadiusOfEntity(20000, X4_4, 5, 1) && !EventFlag(X8_4));
    SetEventFlagID(1042372701, ON);
    WaitFor(!EventFlag(X0_4) || !EntityInRadiusOfEntity(20000, X4_4, 5, 1) || EventFlag(X8_4));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

$Event(1042363742, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042363743, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042363744, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042363745, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042363746, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 5, 1) && EventFlag(X4_4));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});

$Event(1042363747, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 5, 1) && EventFlag(X4_4));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});

$Event(1042360750, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X0_4);
});
