// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1047372200, 1047370350, 1047372350, 1047370300, 1047370350, 1, 1047370100);
    InitializeCommonEvent(0, 90005391, 1047370350, 1047372350, 1047370300, 1047370350, 1);
    InitializeCommonEvent(0, 90005251, 1047370300, 1092616192, 0, -1);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1047370750, 1047370725, 1047370800)
    //Erdtree Sentry
    SetEventFlag(TargetEventFlagType.EventFlag, 1047370800, OFF);
    InitializeCommonEvent(0, 90005870, 1047370800, 904810603, 18);
    InitializeCommonEvent(0, 90005860, 1047370800, 0, 1047370800, 0, 1045370300, 0);
    InitializeCommonEvent(0, 90005251, 1047370800, 1101004800, 0, 0);
});

$Event(1047372200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4) && CharacterDead(X12_4));
    WaitFixedTimeSeconds(1);
    if (Signed(X16_4) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601111);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601110);
    }
L3:
    WaitFixedTimeSeconds(6);
    ChangeCharacterEnableState(X12_4, Disabled);
    EndIf(!PlayerIsInOwnWorld());
    if (Signed(X20_4) != 0) {
        AwardItemsIncludingClients(X20_4);
    }
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
});
