// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1048410000, 1048411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1048410290, 1048410290, 40412, 0, 0);
    InitializeCommonEvent(0, 90005760, 1048410800, 1048410800, 1048412300, 1048412708);
    InitializeCommonEvent(0, 90005870, 1048410800, 903100603, 10);
    InitializeCommonEvent(0, 90005860, 1048410800, 0, 1048410800, 0, 1048410800, 0);
    InitializeCommonEvent(0, 90005872, 1048410800, 10, 0);
    InitializeCommonEvent(0, 90005702, 1048410700, 4793, 4790, 4793);
    InitializeCommonEvent(0, 90005703, 1048410700, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410700, 4791, 4790, 1048410702, 3);
    $InitializeEvent(0, 1048410700, 1048410700, 1048410701, 1048416700);
    InitializeCommonEvent(0, 90005770, 1048410701);
    InitializeCommonEvent(0, 90005727, 4791, 1048410700, 1048410701, 4790, 4793);
    InitializeCommonEvent(0, 90005728, 1048410701, 1048412706, 1048412707);
    InitializeCommonEvent(0, 90005703, 1048410701, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410701, 4791, 4790, 1048410702, 3);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1048410700, true);
    SetCharacterBackreadState(1048410701, true);
});

// NPC801モブ赤目15_NPC初期化イベント -- NPC801 mob red eye 15_NPC initialization event
$Event(1048410700, Restart, function(chrEntityId, chrEntityId2, assetEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4790)) {
            SetEventFlagID(1048419205, OFF);
        }
    }
L10:
    if (!EventFlag(1048412709)) {
        SetNetworkconnectedEventFlagID(1048412708, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1048410800)) {
            //&& (EventFlag(1048410701) || EventFlag(4791) || EventFlag(4793))) { //Event flags associated with merchant talk script states
            SetNetworkconnectedEventFlagID(1048412708, ON);
        }
    }
L4:
    SetNetworkconnectedEventFlagID(1048412709, ON);
    GotoIf(L0, EventFlag(4790));
    GotoIf(L1, EventFlag(4791));
    GotoIf(L3, EventFlag(4793));
L0:
    GotoIf(S0, !EventFlag(1048412708));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableAsset(assetEntityId);
    Goto(L20);
S0:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 930003, false, false, false);
    EnableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableAsset(assetEntityId);
    Goto(L20);
L1:
    GotoIf(S1, !EventFlag(1048412708));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableAsset(assetEntityId);
    Goto(L20);
S1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EnableAsset(assetEntityId);
    Goto(L20);
L3:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    EndEvent();
});


