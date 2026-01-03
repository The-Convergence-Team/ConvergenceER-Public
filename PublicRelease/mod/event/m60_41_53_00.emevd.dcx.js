// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1041530800, 1041530000, 1041530950, 1041531950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 90005870, 1041530800, 904580600, 8);
    InitializeCommonEvent(0, 90005860, 1041530800, 0, 1041530800, 0, 30320, 0);
    InitializeCommonEvent(0, 90005636, 32058691, 1041530650, 1041531650, 4470, 1041532650, 1041532651, 1041532650, 1041533650, 0);
    InitializeCommonEvent(0, 90005637, 32058691, 1041530650, 1041531650);
    InitializeCommonEvent(0, 90005300, 1041530500, 1041530500, 40308, 0, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1041530750, 1041530725, 1041530800);
    InitializeCommonEvent(0, 90005890, 1041530800, 1041530801, 1041530801);
    InitializeCommonEvent(0, 90005891, 1041530800, 1041530801, 1041530802);
    InitializeEvent(0, 1041530800, 0);
    InitializeEvent(0, 98005303, 1041530801, 1041530804);
    InitializeEvent(0, 98005304, 1041530801, 1041530804);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1041530362, 1041532362, 1077936128, 0, 3010);
    InitializeCommonEvent(0, 90005200, 1041530365, 30000, 20000, 1041532365, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041530357, 30001, 20001, 1041532357, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1041530361, 1041532361, 0, 3011);
    InitializeCommonEvent(0, 90005201, 1041530800, 30000, 20000, 1097859072, 0, 0, 0, 0, 0);
});

$Event(1041530800, Default, function() {
    DisableAsset(1041530803);
    EndIf(EventFlag(1041530800));
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(1041530801));
    EnableAsset(1041530803);
    CreateAssetfollowingSFX(1041530803, 101, 17);
    WaitFor(EventFlag(1041530800));
    DeleteAssetfollowingSFX(1041530803, true);
    DisableAsset(1041530803);
});
