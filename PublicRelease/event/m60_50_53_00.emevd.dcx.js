// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1050532200, 1050535200);
    InitializeCommonEvent(0, 90005300, 1050530210, 1050530210, 1050530700, 0, 0);
    InitializeCommonEvent(0, 900005610, 1050531680, 100, 800, 1050538620);
    InitializeCommonEvent(0, 90005683, 62511, 1050531600, 211, 78592, 0);
    InitializeCommonEvent(0, 900005610, 1050531685, 100, 800, 1050538600);
    InitializeCommonEvent(0, 90005620, 1050530570, 1050531570, 1050531571, 1050531572, 1050532570, 1050532571, 1050532572);
    InitializeCommonEvent(0, 90005621, 1050530570, 1050531573);
    InitializeCommonEvent(0, 90005631, 1050531500, 61050);
    InitializeEvent(0, 1050532870, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1050530201, 30004, 20004, 1050532201, 0, 0, 0, 0, 0);
});

$Event(1050532200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1050532870, Restart, function() {
    CreateAssetfollowingSFX(1050531660, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1050531660);
    RotateCharacter(10000, 1050531660, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 49, 53, 0, 1049531661, 60);
    RestartEvent();
});
