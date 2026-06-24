// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.3
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2053410000, 2053411950, 0, 0, 0, 5);
    InitializeEvent(0, 2053413780, 0); // Warp to Proscription
});

$Event(2053413780, Default, function() {
    CreateAssetfollowingSFX(2053411615, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 2053411615);
    RotateCharacter(10000, 2053411615, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(35, 0, 0, 0, 35001616, 60);
    SaveRequest();
    SetPlayerRespawnPoint(35001616);
    RestartEvent();
});
