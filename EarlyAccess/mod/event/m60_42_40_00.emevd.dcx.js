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
    //Tutorial Goods: About Competitive Multiplayer
    //$InitializeEvent(0, 1042402650, 710670, 1670, 9123, 69230);
    
    //Tutorial Goods: About United Combat and Combat Ordeals
    //$InitializeEvent(0, 1042402655);
    
    //Tutorial Goods: About Marika's Effigy at the Roundtable
    //$InitializeEvent(0, 1042402657);
    
    $InitializeEvent(0, 1042402656);
    $InitializeEvent(0, 1042402390);
    InitializeCommonEvent(0, 90005706, 1042400700, 90101, 0);
    $InitializeEvent(0, 1042402659);
    InitializeCommonEvent(0, 900005610, 1042401690, 100, 800, 1042408560);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1042400700, true);
});

// チュートリアルメッセージ_マルチプレイ敵対 -- Tutorial message_Multiplayer adversarial
$Event(1042402650, Restart, function(eventFlagId, tutorialParamId, itemId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(tutorialParamId, true, true);
    EndIf(EventFlag(eventFlagId2));
    DirectlyGivePlayerItem(ItemType.Goods, itemId, eventFlagId, 1);
    SetEventFlagID(eventFlagId2, ON);
});

// チュートリアルメッセージ_リムグレイブ闘技場 -- Tutorial message_Rimgrave Arena
$Event(1042402655, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(710860)
            && InArea(10000, 1042402655)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(710860, ON);
    SetEventFlagID(60360, ON);
    if (!EventFlag(6080)) {
        SetEventFlagID(6080, ON);
        StartPS5Activity(7);
    }
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1860, true, true);
    if (!EventFlag(69460)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9151, 710860, 1);
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(69460, ON);
});

// チュートリアルメッセージ_円卓のマリカ像 -- Tutorial message_Marika statue at the round table
$Event(1042402657, Restart, function() {
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
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1880, true, true);
    if (!EventFlag(69480)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9153, 710880, 1);
    }
    SetEventFlagID(69480, ON);
});

// 闘技場入り口_マルチ中は稼働しない -- Arena entrance_does not operate during multiplayer
$Event(1042402656, Restart, function() {
    EndIf(EventFlag(1042408560));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(1042401656, 400655);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(1042401656, 400655);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(1042401656, 400655);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(1042401656, 400655);
    RestartEvent();
});

// マッチング中_チュートリアル制御 -- Matching_tutorial control
$Event(1042402658, Restart, function() {
    EndIf(EventFlag(1042408560));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(1042401656, 400655);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(1042401656, 400655);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(1042401656, 400655);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(1042401656, 400655);
    RestartEvent();
});

// NPC700話す死体_非表示化 -- NPC700 Talking Corpse_Hide
$Event(1042402659, Restart, function() {
    WaitFixedTimeFrames(1);
    DisableCharacter(1042400700);
});

// NPC700話す死体③_NPC初期化イベント -- NPC700 talking corpse③_NPC initialization event
$Event(1042403700, Restart, function(chrEntityId) {
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30025, false, false, false);
});

// 闘技場_砂塵SFX切り替え -- Arena_dust SFX switching
$Event(1042402390, Restart, function() {
    DisableNetworkSync();
    WaitFor(PlayerInMap(60, 42, 40, 0));
    if (!InArea(10000, 1042402390)) {
L1:
        SetSpEffect(10000, 4211);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    ClearSpEffect(10000, 4211);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


