// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2048460200, 2048462200, 0, -1);
    InitializeCommonEvent(0, 90005250, 2048460201, 2048462200, 0, -1);
    InitializeCommonEvent(0, 90005301, 2048460301, 2048460301, 2048460710, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048460390, 2048460390, 40904, 0, 0);
    InitializeEvent(0, 2048462490, 0);
});

$Event(200, Default, function() {
    InitializeEvent(0, -2046504996, -2046507005, -2046504005, -2046505005, -2046505004);
    InitializeCommonEvent(0, 90005250, -2046507005, -2046505006, 0, -1);
    InitializeCommonEvent(0, 90005301, -2046507005, -2046507005, 2048460700, 1082130432, 0);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005430, -2046507005);
    InitializeCommonEvent(0, 90005432, -2046507005, -2046505005);
    InitializeCommonEvent(0, 90005435, -2046507005, -2046505004, -2046505003, -2046505002, -2046505001);
    InitializeCommonEvent(0, 90005433, -2046507005, -2046505000, -2046504999, -2046504998);
    InitializeCommonEvent(0, 90005434, -2046507005, -2046505000, -2046504999, -2046504998);
    InitializeCommonEvent(0, 90005437, -2046507005, -2046504997, -2046504096);
    //Anger of the Fell God Furnace Golem Instant Kill Initialize
    InitializeCommonEvent(0, 90005438, -2046507005);
});

$Event(2048462490, Restart, function() {
    EndIf(EventFlag(4927) || !EventFlag(9112) || !EventFlag(9130));
    WaitFor(InArea(10000, 2048462490) && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(4927, ON);
    SetSpEffect(10000, 20004230);
});

$Event(-2046504996, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!EventFlag(X12_4)) {
        WaitFor(InArea(10000, X8_4) || EventFlag(X12_4));
        SetNetworkconnectedEventFlagID(X12_4, ON);
    }
L0:
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
});
