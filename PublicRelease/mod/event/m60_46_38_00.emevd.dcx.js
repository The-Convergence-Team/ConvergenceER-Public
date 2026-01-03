// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1046380000, 1046381950, 0, 0, 0, 5);
    InitializeEvent(0, 1046380280, 0);
    InitializeEvent(0, 1046382210, 0);
    InitializeEvent(0, 1046380670, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1046380671, 710590, 1590, 9115, 69150);
    InitializeCommonEvent(0, 90005771, 1046380950, 1046382701);
    InitializeEvent(0, 1046382921, 0); // Start seated
});

$Event(1046380280, Default, function() {
    DisableAsset(1046381280);
});

$Event(1046382210, Restart, function() {
    ForceCharacterDeath(1046385210, false);
});

$Event(1046380670, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 46, 38, 0)
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

$Event(1046380671, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    ShowTutorialPopup(X4_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    EndIf(EventFlag(X12_4));
    SetEventFlagID(X12_4, ON);
});

$Event(1046382921, Restart, function() {
    EndIf(!EventFlag(60912) || EventFlag(1046380501) || !InArea(10000, 1046380985));
    SetCameraAngle(-15, 178);
    FadeToBlack(2, 0, true, 3)
    SetSpEffect(10000, 103002); // Prayer
    WaitFixedTimeSeconds(2);
    FadeToBlack(0, 3, false, 0.1)
    SetEventFlagID(1046380501, ON);
});
