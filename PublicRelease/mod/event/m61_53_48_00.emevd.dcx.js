// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005200, 2053480290, 30005, 20005, 2053482290, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005570, 60861, 112, 2053481699, 0, 1, 0);
    InitializeCommonEvent(0, 9006900, 2053480700, 2053481700, 2053489200); // Weapon Dupe
    DisableMapPart(2053481700);
});


