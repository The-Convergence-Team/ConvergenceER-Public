// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005780, 2044470800, 2044482160, 2044482161, 2044480700, 0, 2044482701, 2046429391, 1, 0);
    InitializeCommonEvent(0, 90005781, 2044470800, 2044482160, 2044482161, 2044480700);
    InitializeCommonEvent(0, 90005785, 2044470800, 2044482160, 2044482161, 2044480700, 2044482700, 2044482400, 0);
    $InitializeEvent(0, 2044480700, 2046429378, 2046429391, 4897);
    $InitializeEvent(0, 2044480701, 2044482160, 2044482161, 2046422723, 2046429370, 2044470800, 9290, 9291);
    $InitializeCommonEvent(0, 20000350, 2044481701, 2044481702, 2055550102, 2055550112, 2044480550, 2044481703); // Shrine Init
});

$Event(2044480700, Restart, function(eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(eventFlagId) || EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId2, OFF);
    } else {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndEvent();
});

$Event(2044480701, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId5));
    GotoIf(L0, !EventFlag(eventFlagId3));
    Goto(L1);
L0:
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && (EventFlag(eventFlagId6) || EventFlag(eventFlagId7)));
    WaitFixedTimeSeconds(1);
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
L1:
    WaitFor(EventFlag(eventFlagId3) && EventFlag(eventFlagId5));
    SetEventFlagID(eventFlagId4, ON);
    EndEvent();
});


