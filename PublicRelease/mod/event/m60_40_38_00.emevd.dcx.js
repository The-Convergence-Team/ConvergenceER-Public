// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1040380880, 0);
    InitializeEvent(0, 1040380881, 0);
});

$Event(1040380880, Default, function() {
    RegisterLadder(1040380582, 1040380853, 1040380101);
    RegisterLadder(1040380584, 1040380855, 1040380102);
});

$Event(1040380881, Default, function() {
    EndIf(!InArea(10000, 1040381970) || EventFlag(1040380920) || !EventFlag(60918));
    for (let i = 1; i <= 7; i++) {
        WaitFixedTimeRealFrames(13);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 440181);
        PlaySE(10000, SoundType.SFX, 525336);
    }
    WaitFixedTimeRealFrames(18);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 632516);
    PlaySE(10000, SoundType.SFX, 525336);
    WaitFixedTimeRealFrames(3);
    RequestAssetDestruction(1040380104, -1);
    WaitFixedTimeRealFrames(9);
    RequestAssetDestruction(1040380103, -1);
    SetEventFlagID(1040380920, ON);
});
