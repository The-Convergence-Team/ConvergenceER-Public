// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1041370800, 1041370000, 1041370950, 1041371950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 900005610, 1041371680, 100, 800, 1041378540);
    InitializeCommonEvent(0, 90005300, 1041370200, 1041370200, 40120, 0, 0);
    InitializeCommonEvent(0, 90005300, 1041370340, 1041370340, 0, 0, 0);
    InitializeCommonEvent(0, 90005570, 60833, 91, 1041371520, 0, 1, 0);
    //Erdtree Boss
    InitializeCommonEvent(0, 90005876, 1041370800, 1041370801, 904690000, 921200);
    InitializeCommonEvent(0, 90005875, 1041370800, 30140, 921200);
    InitializeCommonEvent(0, 90005890, 1041370800, 1041370801, 1041370801);
    InitializeCommonEvent(0, 90005891, 1041370800, 1041370801, 1041370802);
    //InitializeCommonEvent(0, 90005870, 1041370800, 904810600, 18);
    //InitializeCommonEvent(0, 90005860, 1041370800, 0, 1041370800, 0, 30140, 0);
    //InitializeCommonEvent(0, 90005251, 1041370800, 1041374800, 0, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1041370700, 1041370725, 1041370800);
    InitializeEvent(0, 1041370880, 0);
    InitializeEvent(0, 98005303, 1041370801, 1041370803);
    InitializeEvent(0, 98005304, 1041370801, 1041370803);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1041372340, 0);
    InitializeCommonEvent(0, 90005261, 1041370340, 1041372340, 1084227584, 0, 1700);
});
    
$Event(1041370880, Default, function() {
    RegisterLadder(1041370580, 1041370851, 1041371580);
    RegisterLadder(1041370582, 1041370853, 1041371582);
    RegisterLadder(1041370584, 1041370855, 1041371584);
});

$Event(1041372340, Restart, function() {    
    EndIf(EventFlag(1041370340));
    SetCharacterHPBarDisplay(1041370340, Disabled);
    SetSpEffect(1041370340, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1041370340, 12189);
    SetCharacterHPBarDisplay(1041370340, Enabled);
});

$Event(1041372670, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1041370670));
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9240, 1041371670));
    SetEventFlag(TargetEventFlagType.EventFlag, 1041370670, ON);
    DisplayGenericDialog(90010, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 1);
});
