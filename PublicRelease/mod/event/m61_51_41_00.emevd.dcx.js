// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 2051412200, 2051410200, 2051410300);
    $InitializeEvent(0, 2051412201, 2051410200);
    $InitializeEvent(0, 2051412202, 2051410200);
    $InitializeEvent(0, 2051412203, 2051410200);
    InitializeCommonEvent(0, 90005301, 2051410200, 2051410200, 2051410700, 0, 0);
    $InitializeEvent(1, 2051412200, 2051410201, 2051410301);
    $InitializeEvent(1, 2051412201, 2051410201);
    $InitializeEvent(1, 2051412202, 2051410201);
    $InitializeEvent(1, 2051412203, 2051410201);
    InitializeCommonEvent(0, 90005301, 2051410201, 2051410201, 2051410710, 0, 0);
    $InitializeEvent(0, 2051412500, 2051411550, 2051412550);
    $InitializeEvent(1, 2051412500, 2051411551, 2051412551);
    $InitializeEvent(2, 2051412500, 2051411552, 2051412552);
    $InitializeEvent(3, 2051412500, 2051411553, 2051412553);
    $InitializeEvent(4, 2051412500, 2051411554, 2051412554);
    $InitializeEvent(5, 2051412500, 2051411555, 2051412555);
    $InitializeEvent(6, 2051412500, 2051411556, 2051412556);
    $InitializeEvent(7, 2051412500, 2051411557, 2051412557);
    $InitializeEvent(8, 2051412500, 2051411558, 2051412558);
    $InitializeEvent(9, 2051412500, 2051411559, 2051412559);
    $InitializeEvent(10, 2051412500, 2051411560, 2051412560);
    
    //Waygate to Jagged Peak (Asset, areaID, blockID, regionID, indexID, initialAreaEntityID, (optional) awaited eventflag)
    InitializeCommonEvent(0, 98005307, 2051411500, 13, 0, 0, 0, 13002889, 13000860);
    
    //Farum Waygate VFX Enable Handler Initialization
    $InitializeEvent(0, 2051412501);
    
    //Jagged Peak Waygate Realm of Shadows Map Flag Handler Initialization
    InitializeEvent(0, 2051412502, 0);
});

$Event(2051412200, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011451) && CharacterHasSpEffect(chrEntityId, 20011450));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    ClearSpEffect(chrEntityId, 20011450);
    RestartEvent();
});

$Event(2051412201, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    SetSpEffect(chrEntityId, 20011470);
    SetSpEffect(chrEntityId, 19690);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId, 20011471));
    ClearSpEffect(chrEntityId, 20011470);
    CreateNPCPart(chrEntityId, 10, NPCPartType.Part10, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 10, 109, 109, -1, 113, -1);
    EnableCharacterHPBarDisplay(chrEntityId);
    SetSpEffect(chrEntityId, 20011472);
});

$Event(2051412202, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011453) || CharacterHasSpEffect(chrEntityId, 20011451));
    if (!CharacterHasSpEffect(chrEntityId, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2051412203, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    chr = CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(chrEntityId, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(chrEntityId, 20011458);
    SetSpEffect(chrEntityId, 20011474);
    Goto(L20);
L1:
    SetSpEffect(chrEntityId, 20011459);
    Goto(L20);
    SetSpEffect(chrEntityId, 20011474);
L2:
    SetSpEffect(chrEntityId, 20011460);
    SetSpEffect(chrEntityId, 20011475);
L20:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2051412500, Restart, function(entityId, areaEntityId) {
    WaitFor(
        HasDamageType(entityId, 0, DamageType.Unspecified)
            || (InArea(10000, areaEntityId)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(entityId, SoundType.EnvironmentalSound, 610200888);
    SpawnOneshotSFX(TargetEntityType.Asset, entityId, 100, 861221);
    TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1.5);
    TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

//Farum Waygate VFX Enable Handler
$Event(2051412501, Restart, function() {
    if (!EventFlag(13000860)) { //If Lansseax not Dead
        DeleteMapSFX(2051411501, false); //Remove Waygate visual
    }
});

//Jagged Peak Waygate Realm of Shadows Map Flag Handler
$Event(2051412502, Restart, function() {
    if (!EventFlag(62002)) { // Open up DLC map stuff
        SetEventFlagID(62002, ON);
        SetEventFlagID(82002, ON);
    }
});
