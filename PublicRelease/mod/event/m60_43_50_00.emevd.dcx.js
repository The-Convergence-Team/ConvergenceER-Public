// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005771, 1043500950, 1043502700);
    InitializeCommonEvent(0, 9005810, 1043500800, 76310, 1043500950, 1043501950, 1084227584);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1043500750, 1043500725, 1043500800)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 1043500800, 1043500802, 904810603, 920600);
    InitializeCommonEvent(0, 90005875, 1043500800, 30345, 920600);
    InitializeCommonEvent(0, 90005890, 1043500800, 1043500802, 1043500802);
    InitializeCommonEvent(0, 90005891, 1043500800, 1043500802, 1043500803);
    //InitializeCommonEvent(0, 90005870, 1043500800, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 1043500800, 0, 1043500800, 0, 30345, 0);
    //InitializeCommonEvent(0, 90005251, 1043500800, 1101004800, 0, 0);
    InitializeEvent(0, 1043502200, 0);
    InitializeEvent(0, 1043502205, 0);
    
    InitializeEvent(0, 98005303, 1043500802, 1043330804);
    InitializeEvent(0, 98005304, 1043500802, 1043330804);
    
    // Golden Seed
    InitializeEvent(0, 1043502400, 0);
    InitializeEvent(0, 1043502403, 0);
    InitializeEvent(0, 1043502404, 0);
    for (let i = 0; i <= 44; i++) {
        InitializeEvent(i, 1043502401, i + 1);
        InitializeEvent(i, 1043502406, i + 1);
    }
    for (let i = 0; i <= 14; i++) {   
        InitializeEvent(i, 1043502402, (i * 3) + 1, 1043500510 + i);
    }
    
    // Sacred Tears
    InitializeEvent(0, 1043502405, 0);
    InitializeEvent(0, 1043502407, 0);
});

$Event(1043502200, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1043500800);
    InitializeCommonEvent(0, 90005771, 1043500950, 1043502700);
});

$Event(1043502205, Restart, function() {
    DisableCharacter(1043500801);
    DisableCharacterCollision(1043500801);
    ForceCharacterDeath(1043500801, false);
});

$Event(1043502400, Restart, function() {
    WaitFor(EventFlag(1099009050));
    
    WaitFixedTimeFrames(5);
    if (InArea(10000, 1043500501)) {
        RotateCharacter(10000, 1043500500, -1, false);
        SetSpEffect(10000, 103005); // Golden Order Totallity Anim
    }
    WaitFixedTimeFrames(49);
    
    SpawnMapSFX(1043500500);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(1043500500, true);
    SpawnMapSFX(1043500500);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(1043500500, true);
    
    WaitFixedTimeFrames(60);
    if (CharacterHasSpEffect(10000, 100200))
      SetSpEffect(10000, 103049); // Golden Order Totallity Ender if it's still active
    
    SetEventFlagID(1099009050, OFF);
    ClearEventValue(1099009030, 6); // Clear temporary count storage
    RestartEvent();
});

$Event(1043502401, Restart, function(X0_4) {
    WaitFor(EventValue(1099009030, 6) >= X0_4);
    
    WaitFixedTimeFrames(98);
    if (EventValue(1099009040, 6) < 44)
        EventValueOperation(1099009040, 6, 1, 0, 1, CalculationType.Add); // Store to permanent count storage
    AwardItemLot(102350);
    
    WaitFixedTimeFrames(30);
    RestartEvent();
});

// Dynamically enable the trees
$Event(1043502402, Restart, function(X0_4, X4_4) {
    EndIf(EventValue(1099009040, 6) >= X0_4) 
    DisableAsset(X4_4);
    WaitFor(EventValue(1099009040, 6) >= X0_4)
    SpawnOneshotSFX(TargetEntityType.Asset, X4_4, -1, 1000);
    EnableAsset(X4_4);
});

// You have no seeds
$Event(1043502403, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(1099009051));
    DisplayBlinkingMessage(4206);
    SetEventFlagID(1099009051, OFF);
    RestartEvent();
});

// Basin Healing
$Event(1043502404, Restart, function() {
    if (!InArea(10000, 1043500502)) {
        DeleteMapSFX(1043500504, true);
        EnableCharacter(1043500503);
        WaitFor(InArea(10000, 1043500502));
        DisableCharacter(1043500503);
        SpawnMapSFX(1043500504);
    }
    if (HPRatio(10000) < 1) {
        SetSpEffect(10000, 18401);
    }
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Sacred Tear Anim and VFX
$Event(1043502405, Restart, function() {
    WaitFor(EventFlag(1099009060));
    
    WaitFixedTimeFrames(5);
    if (InArea(10000, 1043500501)) {
        RotateCharacter(10000, 1043500500, -1, false);
        SetSpEffect(10000, 103004); // Rapture Anim
    }
    WaitFixedTimeFrames(180);
    
    SpawnMapSFX(1043500505);
    WaitFixedTimeFrames(80);
    SpawnMapSFX(1043500506);
    SpawnMapSFX(1043500507);
    WaitFixedTimeFrames(90);
    
    if (CharacterHasSpEffect(10000, 100200))
      SetSpEffect(10000, 103049); // Rapture Ender if it's still active
    
    WaitFixedTimeFrames(10);
    DeleteMapSFX(1043500505, true);
    WaitFixedTimeFrames(40);
    SpawnOneshotSFX(TargetEntityType.Area, 1043500505, -1, 300183);
    WaitFixedTimeFrames(10);
    DeleteMapSFX(1043500506, true);
    DeleteMapSFX(1043500507, true);
    SpawnOneshotSFX(TargetEntityType.Area, 1043500505, -1, 301505);
    
    SetEventFlagID(1099009060, OFF);
    ClearEventValue(1099009070, 6); // Clear temporary count storage
    RestartEvent();
});

$Event(1043502406, Restart, function(X0_4) {
    WaitFor(EventValue(1099009070, 6) >= X0_4);
    
    WaitFixedTimeFrames(375);
    if (EventValue(1099009040, 6) < 44)
        EventValueOperation(1099009040, 6, 1, 0, 1, CalculationType.Add); // Store to permanent count storage
    AwardItemLot(102360);
    
    WaitFixedTimeFrames(50);
    RestartEvent();
});

// You have no sacred tears
$Event(1043502407, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(1099009061));
    DisplayBlinkingMessage(4207);
    SetEventFlagID(1099009061, OFF);
    RestartEvent();
});
