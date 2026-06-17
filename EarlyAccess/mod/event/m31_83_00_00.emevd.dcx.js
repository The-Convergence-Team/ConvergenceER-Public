// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31830000, 31831950, 0, 0, 0, 5);
    
    $InitializeEvent(0, 31832800);
    $InitializeEvent(0, 31832801);
    $InitializeEvent(0, 31832802, 31831011, 30);
    $InitializeEvent(1, 31832802, 31831012, 90);
    $InitializeEvent(2, 31832802, 31831013, 45);
    $InitializeEvent(0, 31832803);
    $InitializeEvent(0, 31832804);
    //Elevator
    InitializeCommonEvent(0, 90005501, 2050400400, 2050400401, 5, 31831400, 31831401, 31831402, 31830402);
    //Horn Waygate
    InitializeCommonEvent(0, 90005605, 14001660, 3024188, 1037462650, 14000000, 14002660, 14002661, 14002662, 0, 0, 0, 0);
    InitializeCommonEvent(0, 98005307, 31831410, 61, 53, 46, 0, 2053461080, 2050400600);
});

//Misc 
$Event(31832800, Restart, function() {
    DisableMapPart(31830900);
    DisableCharacter(31830305);
    InitializeCommonEvent(0, 90005500, 2050400400, 2050400401, 5, 31831400, 31831420, 31833420, 31831430, 31833430, 31832401, 31832400, 31830402, 2050400410, 0);
});

//Elevator Shaft toggle
$Event(31832801, Restart, function() {
    WaitFor(!InArea(10000, 31831801));
    if (!EventFlag(2050400400)){
     DisableAsset(31831400);   
    }
    DisableAsset(31835801);
    SpawnMapSFX(31831802);
    WaitFor(InArea(10000, 31831801));
    if (!EventFlag(2050400400)){
     EnableAsset(31831400);   
    }
    EnableAsset(31835801);
    DeleteMapSFX(31831802, true);
    RestartEvent();
});

//Sky beams
$Event(31832802, Restart, function(sfxID, delayInt) {
    if (delayInt != 0) {
      WaitFixedTimeRealFrames(delayInt);
    }
    SpawnMapSFX(sfxID);
    WaitFixedTimeSeconds(11);
    DeleteMapSFX(sfxID, true);
    RestartEvent();
});

// Finger horn
$Event(31832803, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(2050400600)) {
        DisableObjAct(2050401600, 52407);
        WaitFixedTimeSeconds(1);
        EndEvent();
    }
    if (PlayerHasItem(ItemType.Goods, 2008008)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && PlayerHasItem(ItemType.Goods, 2008008)
                && ObjActEventFlag(2050403600));
        SetNetworkconnectedEventFlagID(2050400600, ON);
        WaitFixedTimeSeconds(10);
        EndEvent();
    }
L10:
    DisableObjAct(2050401600, 52407);
    WaitFor(PlayerHasItem(ItemType.Goods, 2008008));
    EnableObjAct(2050401600, 52407);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Golem Wakeup
$Event(31832804, Restart, function() {
    if (EventFlag(2050400501))
    {
        DisableCharacter(31830501);
        EndEvent();
    }
    
    DisableCharacterAI(31830501);
    WaitFor(InArea(10000, 31831501));
    EnableCharacterAI(31830501);
    ForceAnimationPlayback(31830501, 1700, false, false, false);
    WaitFor(CharacterDead(31830501));
    SetEventFlagID(2050400501, ON);
    EndEvent();
});
