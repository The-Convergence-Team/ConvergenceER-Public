// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1052570000, 1052571950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76504, 1052571980, 77500, 3, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeCommonEvent(0, 90005211, 1052570205, 30018, 20018, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1052570215, 30019, 20019, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1052570240, 1052572240, 0, 3010);
    InitializeCommonEvent(0, 90005250, 1052570241, 1052572240, 1056964608, 3010);
    InitializeCommonEvent(0, 90005250, 1052570243, 1052572243, 0, 3032);
    InitializeEvent(0, 1052572200, 1052575200);
    InitializeCommonEvent(0, 90005261, 1052570320, 1052572320, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052570321, 1052572321, 1077936128, 0, 0);
    InitializeEvent(0, 1052572210, 0);
    InitializeEvent(0, 1052572220, 0);
    InitializeEvent(0, 1052572230, 0);
    InitializeCommonEvent(0, 90005560, 1052570490, 1052571490, 0);
    InitializeEvent(0, 1052572510, 0);
    InitializeCommonEvent(0, 90005501, 1052570510, 1052570511, 0, 1052571510, 1052571511, 1052571512, 1052570512);
    InitializeCommonEvent(0, 90005630, 65525700, 1052571500, 125);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1052570519, 0);
});

$Event(1052572200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1052572210, Restart, function() {
    if (!EventFlag(1052570210)) {
        DeleteAssetfollowingSFX(1052571210, true);
        CreateAssetfollowingSFX(1052571210, 200, 1500);
        WaitFor(PlayerIsInOwnWorld() && InArea(10000, 1052572210));
        SetEventFlagID(1052570210, ON);
        DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
    }
L0:
    DisableAsset(1052571210);
    DeleteAssetfollowingSFX(1052571210, true);
    PlaySE(1052571210, SoundType.SFX, 1500);
    EndEvent();
});

$Event(1052572220, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1052570210));
    WaitFor(ActionButtonInArea(9320, 1052571210) || EventFlag(1052570210));
    EndIf(EventFlag(1052570210));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.OneButton, 1052571210, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052572230, Restart, function() {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9210, 1052571230));
    DisplayGenericDialog(60051, PromptType.OKCANCEL, NumberofOptions.OneButton, 1052571230, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052572510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1052570510, 1052570511, 0, 1052571510, 1052571511, 1052573511, 1052571512, 1052573512, 1052572511, 1052572512, 1052570512, 1052570513, 0);
});

$Event(1052570519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1052570510, OFF);
});
