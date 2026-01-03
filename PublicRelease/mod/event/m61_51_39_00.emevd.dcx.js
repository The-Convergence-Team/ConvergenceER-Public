// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2051390200, 2051392200, 0, 0);
    InitializeCommonEvent(0, 90005200, 2051390300, 30003, 20003, 2051392300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2051390301, 30003, 20003, 2051392301, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2051390302, 30003, 20003, 2051392302, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 9006900, 2051390700, 2051391700, 2051399200); // Weapon Dupe
    DisableMapPart(2051391700);
});

$Event(2051392200, Restart, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    sp = !CharacterHasSpEffect(X0_4, 20011075);
    SetSpEffect(X0_4, 20011073);
});

$Event(2051392210, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011075));
    ClearSpEffect(X0_4, 20011076);
    WaitFixedTimeSeconds(10);
    SetSpEffect(X4_4, 20011073);
});


