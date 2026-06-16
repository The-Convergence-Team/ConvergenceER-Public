// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
L0:
    InitializeCommonEvent(0, 900005610, 1039481680, 100, 800, 1039488600);
    InitializeEvent(0, 1039482510, 0);
    InitializeCommonEvent(0, 90005501, 1039480510, 1039480511, 0, 1039481510, 1039481511, 1039481512, 1039480512);
    InitializeEvent(0, 1039482610, 0);
    InitializeEvent(0, 1039482611, 0);
    InitializeCommonEvent(0, 90005300, 1039480340, 1039480340, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1039480519, 0);
    InitializeCommonEvent(0, 90005251, 1039480200, 1092616192, 0, 1700);
});

$Event(1039482510, Restart, function() {
    InitializeCommonEvent(0, 90005500, 1039480510, 1039480511, 0, 1039481510, 1039481511, 1039483511, 1039481512, 1039483512, 1039482511, 1039482512, 1039480512, 1039480513, 0);
});

$Event(1039480519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1039480510, OFF);
    SetThisEventSlot(ON);
});

$Event(1039482610, Restart, function() {
    if (EventFlag(1039480610)) {
        DisableAsset(1039481610);
        DeleteAssetfollowingSFX(1039481610, true);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1039481610, true);
    CreateAssetfollowingSFX(1039481610, 200, 1502);
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1039480610)
            && CharacterHasSpEffect(10000, 485)
            && CharacterHasSpEffect(10000, 486));
    SetNetworkconnectedEventFlagID(1039480610, ON);
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
    PlaySE(1039481610, SoundType.SFX, 1500);
    DisableAsset(1039481610);
    DeleteAssetfollowingSFX(1039481610, true);
    EndEvent();
});

$Event(1039482611, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1039480610));
    WaitFor(ActionButtonInArea(9320, 1039481610) || EventFlag(1039480610));
    EndIf(EventFlag(1039480610));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.OneButton, 1039481610, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
