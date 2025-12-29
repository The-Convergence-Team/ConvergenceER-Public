// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1047412300, 0);
    InitializeEvent(0, 1047412301, 0);
    InitializeEvent(0, 1047412302, 0);
    InitializeEvent(0, 1047412306, 0);
    InitializeEvent(0, 1047412305, 0);
    InitializeEvent(0, 1047412400, 0);
    InitializeEvent(0, 1047410704, 0);
    InitializeCommonEvent(0, 90005793, 1047419201, 1047412220, 1047410230, 1047410701, 1047412200, 0, 0);
    InitializeCommonEvent(0, 90005793, 1047419201, 1047412221, 1047410231, 1047410702, 1047412201, 0, 0);
    InitializeCommonEvent(0, 90005793, 1047419201, 1047412222, 1047410232, 1047410703, 1047412202, 0, 0);
    RegisterLadder(1047410300, 1047410301, 1047411304);
    RegisterLadder(1047410300, 1047410301, 1047411303);
    
    InitializeEvent(0, 1047410705, 1047410204);
    InitializeEvent(1, 1047410705, 1047410205);
    InitializeEvent(2, 1047410705, 1047410206);
    InitializeEvent(3, 1047410705, 1047410207);
    InitializeEvent(4, 1047410705, 1047410208);
    InitializeEvent(5, 1047410705, 1047410209);
    InitializeEvent(6, 1047410705, 1047410210);
    InitializeEvent(7, 1047410705, 1047410211);
    InitializeEvent(8, 1047410705, 1047410212);
});

$Event(100, Default, function() {
    InitializeEvent(0, 1047412304, 1047410700);
    InitializeEvent(0, 1047410700, 0);
    InitializeEvent(0, 1047410701, 0);
    InitializeEvent(0, 1047410702, 0);
});

$Event(150, Default, function() {
    InitializeEvent(0, 1047412303, 1047410700);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005485, 1047410300);
});

$Event(1047412300, Restart, function() {
    GotoIf(S0, !PlayerIsInOwnWorld());
    GotoIf(L0, EventFlag(1047412350));
S0:
    DisableCharacter(1047410701);
    DisableCharacter(1047410702);
    DisableCharacter(1047410703);
    EndIf(EventFlag(1047419201));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && EventFlag(1047419200)
            && InArea(10000, 1047412310));
    GotoIf(S1, GameCycle() != 0);
    CopyCharacterDataFromOnlinePlayers(1, 23731, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23741, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23751, 1047410703);
    Goto(L0);
S1:
    GotoIf(S2, GameCycle() != 1);
    CopyCharacterDataFromOnlinePlayers(1, 23732, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23742, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23752, 1047410703);
    Goto(L0);
S2:
    GotoIf(S3, GameCycle() != 2);
    CopyCharacterDataFromOnlinePlayers(1, 23733, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23743, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23753, 1047410703);
    Goto(L0);
S3:
    GotoIf(S4, GameCycle() != 3);
    CopyCharacterDataFromOnlinePlayers(1, 23734, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23744, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23754, 1047410703);
    Goto(L0);
S4:
    GotoIf(S5, GameCycle() != 4);
    CopyCharacterDataFromOnlinePlayers(1, 23735, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23745, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23755, 1047410703);
    Goto(L0);
S5:
    GotoIf(S6, GameCycle() != 5);
    CopyCharacterDataFromOnlinePlayers(1, 23736, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23746, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23756, 1047410703);
    Goto(L0);
S6:
    GotoIf(S7, GameCycle() != 6);
    CopyCharacterDataFromOnlinePlayers(1, 23737, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23747, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23757, 1047410703);
    Goto(L0);
S7:
    CopyCharacterDataFromOnlinePlayers(1, 23738, 1047410701);
    CopyCharacterDataFromOnlinePlayers(1, 23748, 1047410702);
    CopyCharacterDataFromOnlinePlayers(1, 23758, 1047410703);
L0:
    SetEventFlagID(1047412350, ON);
    if (!CharacterDead(1047410701)) {
        PlaceNPCSummonSign(SummonSignType.RedSign, 1047410701, 1047412200, 1047412220, 1047410230, false);
        CreateAssetfollowingSFX(1047411300, 100, 30090);
    }
    if (!CharacterDead(1047410702)) {
        PlaceNPCSummonSign(SummonSignType.RedSign, 1047410702, 1047412201, 1047412221, 1047410231, false);
        CreateAssetfollowingSFX(1047411301, 100, 30090);
    }
    if (!CharacterDead(1047410703)) {
        PlaceNPCSummonSign(SummonSignType.RedSign, 1047410703, 1047412202, 1047412222, 1047410232, false);
        CreateAssetfollowingSFX(1047411302, 100, 30090);
    }
    WaitFor(HasMultiplayerState(MultiplayerState.MultiplayerPending));
    DeleteNPCSummonSign(1047410701);
    DeleteNPCSummonSign(1047410702);
    DeleteNPCSummonSign(1047410703);
    DeleteAssetfollowingSFX(1047411300, true);
    DeleteAssetfollowingSFX(1047411301, true);
    DeleteAssetfollowingSFX(1047411302, true);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1047412301, Restart, function() {
    EndIf(EventFlag(1047419201));
    WaitFor(
        EventFlag(1047419200)
            && CharacterDead(1047410701)
            && CharacterDead(1047410702)
            && CharacterDead(1047410703));
    SetEventFlagID(1047419201, ON);
});

$Event(1047412302, Restart, function() {
    EndIf(EventFlag(1047419201));
    WaitFor(InArea(10000, 1047412300));
    RequestCharacterDataFromOnlinePlayers(1, 3);
});

$Event(1047412303, Restart, function(X0_4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(X0_4);
    SetCharacterEnableDistance(X0_4, 430);
    DisableCharacterDisableOnHitUnload(X0_4);
    EnableDistancebasedNetworkUpdateAuthority(X0_4);
});

$Event(1047412304, Restart, function(X0_4) {
    DisableNetworkSync();
    DisableCharacterGravity(X0_4);
    WaitFor(EntityInRadiusOfEntity(X0_4, 10000, 200, 1));
    EnableCharacterGravity(X0_4);
    WaitFor(!EntityInRadiusOfEntity(X0_4, 10000, 220, 1));
    RestartEvent();
});

$Event(1047412305, Restart, function() {
    if (!EventFlag(1047419201)) {
        WaitFor(InArea(10000, 1047412400) && EventFlag(1047419200));
        onlineFlagChr = (HasMultiplayerState(MultiplayerState.InvasionPending)
            && !HasMultiplayerState(MultiplayerState.Invasion))
            || (EventFlag(1047412220)
                && !CharacterDead(1047410701)
                && HasMultiplayerState(MultiplayerState.Invasion))
            || (EventFlag(1047412221)
                && !CharacterDead(1047410702)
                && HasMultiplayerState(MultiplayerState.Invasion))
            || (EventFlag(1047412222)
                && !CharacterDead(1047410703)
                && HasMultiplayerState(MultiplayerState.Invasion));
        GotoIf(L0, onlineFlagChr);
        GotoIf(L1, !onlineFlagChr);
L0:
        EnableAsset(1047411500);
        EnableAsset(1047411501);
        WaitFixedTimeSeconds(1);
        RestartEvent();
L1:
        DisableAsset(1047411500);
        DisableAsset(1047411501);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    DisableAsset(1047411500);
    DisableAsset(1047411501);
    EndEvent();
});

$Event(1047412306, Restart, function() {
    EndIf(EventFlag(1047419200));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1047419200));
    WaitFixedTimeSeconds(0.3);
    DisplayGenericDialog(30110, PromptType.OKCANCEL, NumberofOptions.OneButton, 1047411300, 3);
});

$Event(1047412400, Restart, function() {
    DisableNetworkSync();
    WaitFor(InArea(20000, 1047412400));
    SetSpEffect(20000, 514);
    WaitFixedTimeSeconds(1);
    WaitFor(!InArea(20000, 1047412401));
    ClearSpEffect(20000, 514);
    RestartEvent();
});

$Event(1047410700, Restart, function() {
    ForceAnimationPlayback(1047410700, 30003, false, false, false);
    DisableCharacterHPBarDisplay(1047410700);
    EnableCharacterImmortality(1047410700);
});

$Event(1047410701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400470));
    DisableNetworkSync();
    WaitFor(EventFlag(400470));
    SendCharacterDataToOnlinePlayers(1);
});

$Event(1047410702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterTalkRange(1047410700, 50);
    EndEvent();
});

$Event(1047410704, Restart, function() {
    WaitFor(InArea(10000, 1047412203));
    WarpPlayer(60, 41, 33, 0, 1041332204, 60);
    EndEvent();
});

$Event(1047410705, Restart, function(X0_4) {
    SetAssetInvulnerability(X0_4, Enabled);
});
