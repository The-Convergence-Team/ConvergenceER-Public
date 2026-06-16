// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1045370800, 1045370000, 1045370950, 1045371950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 900005610, 1045371610, 100, 800, 0);
    InitializeCommonEvent(0, 90005251, 1045370201, 1117782016, 0, -1);
    InitializeCommonEvent(0, 90005251, 1045370207, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005251, 1045370214, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005251, 1045370216, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005511, 1045370560, 1045374550, 1045373560, 257018, 0);
    InitializeCommonEvent(0, 90005512, 1045370560, 1045372550, 1045372551);
    InitializeCommonEvent(0, 90005640, 1045370560, 1045374550);
    InitializeEvent(0, 1045372230, 0);
    InitializeCommonEvent(0, 90005261, 1045370240, 1045372240, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1045370230, 1045372240, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1045370231, 1045372240, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1045370232, 1045372240, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1045370233, 1045372240, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005251, 1045370340, 1082130432, 1065353216, -1);
    InitializeCommonEvent(0, 90005301, 1045370340, 1045370340, 1045370310, 0, 0);
    InitializeCommonEvent(0, 90005201, 1045370364, 30002, 20002, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1045372344, 0);
    InitializeCommonEvent(0, 90005300, 1045370200, 1045370200, 40116, 0, 0);
    InitializeCommonEvent(0, 90005400, 1045370370, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005401, 98101, 1045370370);
    InitializeCommonEvent(0, 90005637, 1045378601, 1045370620, 1045371620);
    InitializeCommonEvent(0, 90005636, 1045378601, 1045370620, 1045371620, 4470, 1045372620, 1045372621, 1045372620, 1045373620, -1);
    InitializeCommonEvent(0, 90005704, 1045370700, 3601, 3600, 1045379201, 3);
    InitializeCommonEvent(0, 90005703, 1045370700, 3601, 3602, 1045379201, 3603, 3600, 3603, -1);
    InitializeCommonEvent(0, 90005702, 1045370700, 3603, 3600, 3604);
    InitializeEvent(0, 1045370710, 1045370700);
    InitializeEvent(0, 1045370711, 1045370700, 1045372700);
    InitializeEvent(0, 1045370714, 1045370700);
    InitializeEvent(0, 1045370713, 0);
    InitializeCommonEvent(0, 90005731, 1045379221, 1045370700, 1116471296, 1119092736);
    InitializeCommonEvent(0, 90005730, 1045379220, 1114636288, 1045379221, 3605, 1045370711, 1045379223);
    InitializeCommonEvent(0, 90005732, 1045379223, 1045372701, 1045372701);
    InitializeCommonEvent(0, 90005730, 1045379222, 1097859072, 1045379223, 3605, 1045370711, 1045372706);
    InitializeEvent(0, 1045370720, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1045370750, 1045370725, 1045370800)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 1045370800, 1045370801, 904810650, 920600);
    InitializeCommonEvent(0, 90005875, 1045370800, 1045370300, 920600);
    InitializeCommonEvent(0, 90005890, 1045370800, 1045370801, 1045370801);
    InitializeCommonEvent(0, 90005891, 1045370800, 1045370801, 1045370802);
    //InitializeCommonEvent(0, 90005251, 1045370800, 1101004800, 0, 0);
    //InitializeEvent(0, 1045372231, 0);
    InitializeEvent(0, 98005303, 1045370801, 1045370803);
    InitializeEvent(0, 98005304, 1045370801, 1045370803);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045370700, true);
    SetCharacterBackreadState(1045370701, true);
    SetAssetInvulnerability(1045371700, Enabled);
});

$Event(1045372200, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false, Equal, 1);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1045372230, Restart, function() {
    ForceCharacterTreasure(1045370234);
    ForceCharacterTreasure(1045370235);
    EndEvent();
});

$Event(1045372231, Restart, function() {
    DisableCharacter(1045370801);
    DisableCharacterCollision(1045370801);
    ForceCharacterDeath(1045370801, false);
});

$Event(1045372344, Restart, function() {
    RequestAssetRestoration(1045371364);
});

$Event(1045370650, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 45, 37, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9120, X8_4, 1);
});

$Event(1045370710, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeFrames(1);
    GotoIf(L19, !PlayerIsInOwnWorld());
    GotoIf(S0, !EventFlag(3600));
    SetEventFlag(TargetEventFlagType.EventFlag, 1045379202, OFF);
S0:
L19:
    if (!EventFlag(3605)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3605));
        RestartEvent();
    }
L5:
    GotoIf(L0, EventFlag(3600));
    GotoIf(L1, EventFlag(3601));
    GotoIf(L2, EventFlag(3601));
    GotoIf(L3, EventFlag(3603));
L0:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    GotoIf(S1, EventFlag(1045370711));
    ForceAnimationPlayback(X0_4, 930012, false, false, false, Equal, 1);
    Goto(L20);
S1:
    ForceAnimationPlayback(X0_4, 930010, false, false, false, Equal, 1);
    Goto(L20);
L1:
L2:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3605));
    RestartEvent();
});

$Event(1045370711, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetNetworkSyncState(Disabled);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    WaitFor(ThisEventSlot() || (EventFlag(3600) && EventFlag(3605)));
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFixedTimeFrames(1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkSyncState(Enabled);
    WaitFor(
        ThisEventSlot()
            || (EventFlag(3600)
                && EventFlag(3605)
                && PlayerIsInOwnWorld()
                && CharacterHasSpEffect(10000, 9672)
                && InArea(10000, 1045372701)));
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    WaitFixedTimeSeconds(0.3);
    ForceAnimationPlayback(X0_4, 20055, false, false, false, Equal, 1);
    GotoIf(L0, !PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(X0_4, 9671));
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(TargetEventFlagType.EventFlag, 1045372707, ON);
    SetCharacterInvincibility(X0_4, Disabled);
});

$Event(1045370712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045370711));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(1045379221));
    WaitFor(EventFlag(3600) && EventFlag(3605) && !EventFlag(1045372705) && EventFlag(1045379221));
    SetEventFlag(TargetEventFlagType.EventFlag, 1045379220, ON);
});

$Event(1045370713, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045370711));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(1045372706));
    WaitFixedTimeSeconds(15);
    SetEventFlag(TargetEventFlagType.EventFlag, 1045372706, OFF);
    RestartEvent();
});

$Event(1045370714, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045370711));
    SetNetworkSyncState(Disabled);
    if (!EventFlag(1045372705)) {
        SetCharacterTalkRange(X0_4, 160);
        flag = EventFlag(3600) && EventFlag(3605) && EventFlag(1045372705);
        flag2 = EventFlag(3600) && EventFlag(3605) && EventFlag(1045370711);
        WaitFor(flag || flag2);
        GotoIf(L1, flag2.Passed);
    }
L0:
    SetCharacterTalkRange(X0_4, 160);
    WaitFor(EventFlag(3600) && EventFlag(3605) && EventFlag(1045370711));
    SetCharacterTalkRange(X0_4, 17);
    EndEvent();
});

$Event(1045370720, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045379250));
    EndIf(!EventFlag(31008522));
    SetEventFlag(TargetEventFlagType.EventFlag, 1045379250, ON);
    EndIf(!EntityInRadiusOfEntity(10000, 1045372710, 1, 1));
    SetEventFlag(TargetEventFlagType.EventFlag, 9080, ON);
    ForceAnimationPlayback(10000, 60131, false, false, false, Equal, 1);
    SetPlayerRespawnPoint(1045372710);
    SaveRequest(0);
    EndEvent();
});
