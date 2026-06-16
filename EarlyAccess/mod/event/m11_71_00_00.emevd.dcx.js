// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(50, Default, function() {
    InitializeEvent(0, 11710100, 0);
});

$Event(11710100, Default, function() {
    if (EventFlag(120)) {
        EndIf(EventFlag(121));
        WarpPlayer(11, 10, 0, 0, 0, 11102020);
        EndEvent();
    }
L0:
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerInMap(11, 71, 0, 0)
            && EventFlag(19002100)
            && (EventFlag(9400) || EventFlag(9401) || EventFlag(9402) || EventFlag(9403)));
    GotoIf(L13, EventFlag(9403));
    GotoIf(L12, EventFlag(9402));
    GotoIf(L11, EventFlag(9401));
    PlayCutsceneToPlayer(19000011, CutscenePlayMode.SkippableWithWhiteFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    Goto(L15);
L11:
    PlayCutsceneToPlayer(19000061, CutscenePlayMode.SkippableWithWhiteFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    Goto(L15);
L12:
    PlayCutsceneToPlayer(19000071, CutscenePlayMode.SkippableWithWhiteFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    Goto(L15);
L13:
    PlayCutsceneToPlayer(19000081, CutscenePlayMode.SkippableWithWhiteFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    Goto(L15);
L15:
    SetEventFlagID(120, ON);
    SetEventFlagID(6010, ON);
    //AwardAchievement(1);
    SetPlayerRespawnPoint(11102020);
    SaveRequest();
    SetEventFlagID(20, ON);
});
