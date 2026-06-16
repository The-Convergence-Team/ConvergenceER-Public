// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005211, 1050550300, 30000, 20000, 1050552300, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1050550301, 30000, 20000, 1050552300, 0, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1050550302, 30000, 20000, 1050552302, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 900005610, 1050551680, 100, 800, 1050558600);
    InitializeCommonEvent(0, 90005636, 1050558600, 1050550600, 1050551600, 4470, 1050552600, 1050552601, 1050552600, 1050553600, 0);
    InitializeCommonEvent(0, 90005637, 1050558600, 1050550600, 1050552601);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1050555305, 0); // Lava drool
});

$Event(1050555305, Restart, function() {
    DisableHit(1050552305);
    DisableHit(1050552306);
    DisableHit(1050552307);
    DisableHit(1050552308);
});
