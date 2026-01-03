// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1038480000, 1038481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 1038480800, 1038480001, 1038480951, 1038481951, 1084227584); //guardian grace
    //InitializeCommonEvent(0, 90005870, 1038480800, 904810601, 18);
    //InitializeCommonEvent(0, 90005860, 1038480800, 0, 1038480800, 0, 30200, 0);
    InitializeEvent(0, 1038482580, 0);
    InitializeCommonEvent(0, 90005683, 62201, 1038481684, 209, 78290, 78290);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1038480750, 1038480725, 1038480800);
    InitializeCommonEvent(0, 90005876, 1038480800, 1038480801, 904810654, 920400);
    InitializeCommonEvent(0, 90005875, 1038480800, 30200, 920400);
    InitializeCommonEvent(0, 90005890, 1038480800, 1038480801, 1038480801);
    InitializeCommonEvent(0, 90005891, 1038480800, 1038480801, 1038480802);
    InitializeEvent(0, 1038480800, 0);
    InitializeEvent(0, 98005303, 1038480801, 1038480803);
    InitializeEvent(0, 98005304, 1038480801, 1038480803);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038480700, true);
    InitializeCommonEvent(0, 90005261, 1038480200, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480201, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480202, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480203, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480204, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480205, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480206, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480207, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480208, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480209, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480210, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480211, 1038482200, 0, 1065353216, 1705);
});

$Event(1038482580, Default, function() {
    RegisterLadder(1038480580, 1038480581, 1038481580);
    RegisterLadder(1038480582, 1038480583, 1038481582);
    RegisterLadder(1038480584, 1038480585, 1038481584);
});


// Second Phase hanlder
$Event(1038480800, Restart, function() {
   if (EventFlag(1038480800)) {
       ForceCharacterDeath(1038480810, false);
       ForceCharacterDeath(1038480811, false);
       ForceCharacterDeath(1038480812, false);
       SpawnMapSFX(1038480820);
       SpawnMapSFX(1038480821);
       SpawnMapSFX(1038480822);
       SpawnMapSFX(1038480823);
       SpawnMapSFX(1038480824);
       SpawnMapSFX(1038480825);
       SpawnMapSFX(1038480826);
       SpawnMapSFX(1038480827);
   }
    
   DisableCharacter(1038480810);
   DisableCharacter(1038480811);
   DisableCharacter(1038480812);
   EnableCharacterInvincibility(1038480810);
   EnableCharacterInvincibility(1038480811);
   EnableCharacterInvincibility(1038480812);
   
   WaitFor(HPRatio(1038480800) <= 0.6);
   ForceAnimationPlayback(1038480800, 3003, false, false, false);
   SetSpEffect(1038480800, 16240);
   WaitFixedTimeFrames(55);
   if (EntityInOutsideRadiusOfEntity(InsideOutsideState.Inside, 10000, 1038480800, 3, 1)) {
       //CreateBulletOwner(1038480800);
       ShootBullet(1038480800, 1038480800, 210, 120, 0, 0, 0);
   }
   SetSpEffect(1038480800, 13140);
   SetSpEffect(1038480800, 13141);
   
   SpawnMapSFX(1038480820);
   SpawnMapSFX(1038480821);
   SpawnMapSFX(1038480822);
   SpawnMapSFX(1038480823);
   SpawnMapSFX(1038480824);
   SpawnMapSFX(1038480825);
   SpawnMapSFX(1038480826);
   SpawnMapSFX(1038480827);
   
   WaitFixedTimeFrames(60);
   
   EnableCharacter(1038480810);
   EnableCharacter(1038480811);
   EnableCharacter(1038480812);
   IssueShortWarpRequest(1038480810, TargetEntityType.Character, 1038480800, 242);
   IssueShortWarpRequest(1038480811, TargetEntityType.Character, 1038480800, 244);
   IssueShortWarpRequest(1038480812, TargetEntityType.Character, 1038480800, 245);
   RotateCharacter(1038480810, 10000, -1, true);
   RotateCharacter(1038480811, 10000, -1, true);
   RotateCharacter(1038480812, 10000, -1, true);
   
   ForceAnimationPlayback(1038480810, 1830, false, false, true);
   ForceAnimationPlayback(1038480811, 1830, false, false, true);
   ForceAnimationPlayback(1038480812, 1830, false, false, true);
   
   WaitFixedTimeFrames(26);
   ClearSpEffect(1038480800, 16240);
   WaitFixedTimeFrames(24);
   TriggerAISound(1030, 10000, TargetEntityType.Character);
   DisableCharacterInvincibility(1038480810);
   DisableCharacterInvincibility(1038480811);
   DisableCharacterInvincibility(1038480812);
   
   WaitFor(HPRatio(1038480800) == 0);
   
   ForceAnimationPlayback(1038480810, 1840, true, false, true);
   ForceAnimationPlayback(1038480811, 1840, true, false, true);
   ForceAnimationPlayback(1038480812, 1840, true, false, true);
   WaitFixedTimeFrames(170);
   
   DisableCharacter(1038480810);
   DisableCharacter(1038480811);
   DisableCharacter(1038480812);
   ForceCharacterDeath(1038480810, false);
   ForceCharacterDeath(1038480811, false);
   ForceCharacterDeath(1038480812, false);
});
