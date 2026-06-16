// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    //Tutorial Goods: About Combat with Spirit Ashes
    //$InitializeEvent(0, 1047422600);
    
    //Tutorial Goods: About Marika's Effigy at the Roundtable
    //$InitializeEvent(0, 1047422602);
    
    $InitializeEvent(0, 1047422601);
    InitializeCommonEvent(0, 900005610, 1047421690, 100, 800, 1047428560);
});

// チュートリアルメッセージ_ケイリッド闘技場 -- Tutorial message_Keilid Arena
$Event(1047422600, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(710870)
            && InArea(10000, 1047422600)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(710870, ON);
    SetEventFlagID(60370, ON);
    if (!EventFlag(6080)) {
        SetEventFlagID(6080, ON);
        StartPS5Activity(7);
    }
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1870, true, true);
    if (!EventFlag(69470)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9152, 710870, 1);
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(69470, ON);
});

// チュートリアルメッセージ_円卓のマリカ像 -- Tutorial message_Marika statue at the round table
$Event(1047422602, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        EventFlag(710880)
            && !EventFlag(69480)
            && !EventFlag(2051)
            && !EventFlag(2052)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1880, true, true);
    if (!EventFlag(69480)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9153, 710880, 1);
    }
    SetEventFlagID(69480, ON);
});

// 闘技場入り口_マルチ中は稼働しない -- Arena entrance_does not operate during multiplayer
$Event(1047422601, Restart, function() {
    EndIf(EventFlag(1047428560));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(1047421601, 400655);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(1047421601, 400655);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(1047421601, 400655);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(1047421601, 400655);
    RestartEvent();
});


