// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.3
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 2049420200, 2049422200, 1110704128, 0, -1);
    $InitializeEvent(0, 2049422200, 2049420200, 2049420300);
    $InitializeEvent(0, 2049422201, 2049420200);// Aging Untouchable 2 , Enitity IDs
    $InitializeEvent(0, 2049422202, 2049420200);
    $InitializeEvent(0, 2049422203, 2049420200);
    InitializeCommonEvent(0, 90005301, 2049420200, 2049420200, 2049420700, 0, 0); //afing 2 
    $InitializeEvent(1, 2049422200, 2049420202, 2049420302); // Aging untouchable 1 Dummy Enemy
    $InitializeEvent(1, 2049422201, 2049420202);// Aging Untouchable 1 , Enitity IDs
    $InitializeEvent(1, 2049422202, 2049420202);//
    $InitializeEvent(1, 2049422203, 2049420202);//
    $InitializeEvent(0, 2049422204); // seemingly kill handler - not needed for 4941
    InitializeCommonEvent(0, 90005301, 2049420202, 2049420202, 2049420720, 0, 0); //Aging untouchable 1
    InitializeCommonEvent(0, 90005638, 2049420600, 2049421600, 2049421601); // can't find entity ID, seems unused
    $InitializeEvent(0, 2049422500, 2049421550, 2049422550);
    $InitializeEvent(1, 2049422500, 2049421551, 2049422551);
    $InitializeEvent(2, 2049422500, 2049421552, 2049422552);
    $InitializeEvent(3, 2049422500, 2049421553, 2049422553);
    $InitializeEvent(4, 2049422500, 2049421554, 2049422554);
    $InitializeEvent(6, 2049422500, 2049421556, 2049422556);
    $InitializeEvent(7, 2049422500, 2049421557, 2049422557);
    $InitializeEvent(8, 2049422500, 2049421558, 2049422558);
    $InitializeEvent(9, 2049422500, 2049421559, 2049422559);
    $InitializeEvent(10, 2049422500, 2049421560, 2049422560);
    $InitializeEvent(11, 2049422500, 2049421561, 2049422561);
    $InitializeEvent(12, 2049422500, 2049421562, 2049422562);
    $InitializeEvent(13, 2049422500, 2049421563, 2049422563);
    $InitializeEvent(14, 2049422500, 2049421564, 2049422564);
    InitializeCommonEvent(0, 90005706, 2049420700, 30011, 2049422700);
    $InitializeEvent(0, 2049420700, 2049421700, 2049420700);
    InitializeCommonEvent(0, 90005706, 2049420000, 30015, 0); //ghost
    DisableMapPart(2049420701);//floor
    DisableHit(2049420702);
    DisableHit(2049420703);
    DisableHit(2049420704);
    DisableHit(2049420705); //remove coll for walls
    DisableMapPart(2049420706);
    DisableMapPart(2049420707);
    DisableMapPart(2049420708);
    DisableMapPart(2049420709);
    DisableMapPart(2049420710);
    DisableMapPart(2049420711);
    DisableMapPart(2049420712);
    DisableMapPart(2049420713); //new wall collision
    InitializeCommonEvent(0, 20000348, 2049425000, 2049422000)
    InitializeCommonEvent(0, 20000348, 2049425001, 2049422001)
    
    //torrent disable vfx
    InitializeCommonEvent(0, 900005610, 2049421200, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2049421201, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2049421202, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2049421203, 100, 800, 0);
    
    //Hoozher npc
    InitializeCommonEvent(0, 90005300, 2049420564, 2049420564, 2049420800, 0, 0); // Hoozher Death + Reward Script
 
});

$Event(2049422204, Restart, function() {
    EndIf(!EventFlag(2049428714));
    WaitFixedTimeFrames(1);
    DisableCharacter(2049420000);

});

$Event(2049422200, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011451) && CharacterHasSpEffect(chrEntityId, 20011450));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    ClearSpEffect(chrEntityId, 20011450);
    RestartEvent();
});

$Event(2049422201, Restart, function(chrEntityId) {
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

$Event(2049422202, Restart, function(chrEntityId) {
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

$Event(2049422203, Restart, function(chrEntityId) {
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

$Event(2049422500, Restart, function(entityId, areaEntityId) {
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

$Event(2049420700, Restart, function(assetEntityId, chrEntityId) {
    WaitFixedTimeFrames(1);
    EnableAssetInvunerability(assetEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    EndEvent();
});
