// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1038450000, 1038451950, 0, 0, 0, 5);
    RegisterBonfire(1038450001, 1038451951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005632, 580010, 1038451600, 80010);
    InitializeCommonEvent(0, 90005570, 60824, 54, 1038451500, 2, 1, 0);
});

$Event(50, Default, function(){
    InitializeEvent(0, 1038450920, 0);
});


$Event(1038450920, Default, function() {
    EndIf(!InArea(10000, 1038450985) || EventFlag(1038450920) || !EventFlag(60922));
    SetCameraAngle(20, 95);
    ForceAnimationPlayback(10000, 90007, false, false, false);
    WaitFixedTimeFrames(60);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 523913);
    ForceAnimationPlayback(10000, 63021, false, false, false);
    WaitFixedTimeFrames(30);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 523912);
    SetEventFlagID(1038450920, ON);
});
