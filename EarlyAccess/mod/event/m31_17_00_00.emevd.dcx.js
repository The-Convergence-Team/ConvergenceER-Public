// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(311700, 31171950, 0, 0, 0, 5);
    InitializeEvent(0, 31172800, 0);
    InitializeEvent(0, 31172499, 0);
    InitializeEvent(0, 31172810, 0);
    InitializeEvent(0, 31172811, 0);
    InitializeEvent(0, 31172849, 0);
    InitializeCommonEvent(0, 90005646, 31170800, 31172840, 31172841, 31171840, 31172840, 4383);
    InitializeEvent(0, 31172500, 0);
    //Setup
    InitializeEvent(0, 31172600, 0);
    //Doors
    InitializeCommonEvent(0, 90005650, 31170406, 31172976, 31172975, 10008569, 239020); 
    InitializeCommonEvent(0, 90005651, 31170406, 31172976);   
    //Eagles
    InitializeCommonEvent(0, 90005250, 31173087, 31173089, 0, -1);
    InitializeCommonEvent(0, 90005250, 31173088, 31173089, 0, -1);
    //Fight Activaton Zone
    // ARGUMENTS: EnemyID, TeamID, AreaID
    InitializeEvent(0, 31172403, 31173098, 24, 31172101);
    InitializeEvent(1, 31172403, 31173099, 24, 31172101);
    InitializeEvent(2, 31172403, 31173100, 6, 31172101);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31170200, 31172200, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170201, 30005, 20005, 31172204, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170203, 30001, 20001, 31172204, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170204, 30004, 20004, 31172204, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170212, 30001, 20001, 31172212, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170213, 30004, 20004, 31172212, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170216, 30000, 20000, 31172216, 1073741824, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170217, 30001, 20001, 31172216, 1073741824, 1069547520, 0, 0, 0, 0);
    InitializeEvent(0, 31172216, 31170216);
    InitializeEvent(1, 31172216, 31170217);
    InitializeCommonEvent(0, 90005211, 31170218, 30001, 20001, 31172218, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170245, 30001, 20001, 31172245, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(7, 31172208, 31170203);
    InitializeEvent(8, 31172208, 31170204);
    InitializeCommonEvent(0, 90005211, 31170207, 30003, 20003, 31172207, 1069547520, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170219, 30003, 20003, 31172219, 1069547520, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170220, 30003, 20003, 31172220, 1069547520, 0, 0, 0, 0, 0);
    InitializeEvent(3, 31172218, 31170240, 31172240, 1082130432, 0, 3001);
    InitializeCommonEvent(0, 90005261, 31170250, 31172250, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 31170254, 31172250, 1073741824, 1073741824, 0);
    InitializeEvent(0, 31172254, 0);
    InitializeCommonEvent(0, 90005211, 31170251, 30000, 20000, 31172251, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170252, 30000, 20000, 31172252, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170253, 30000, 20000, 31172252, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170258, 31172258, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005211, 31170259, 30000, 20000, 31172258, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170260, 31172260, 1073741824, 1084227584, 0);
    InitializeCommonEvent(0, 90005261, 31170261, 31172260, 1073741824, 1092616192, 0);
    InitializeCommonEvent(0, 90005261, 31170300, 31172300, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170301, 31172300, 1073741824, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 31170302, 31172302, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170303, 31172302, 1073741824, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 31170308, 31172308, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170309, 31172309, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31170310, 31172309, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31170340, 30002, 20002, 31172340, 1077936128, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005460, 31170340);
    InitializeCommonEvent(0, 90005461, 31170340);
    InitializeCommonEvent(0, 90005462, 31170340);
    
    //DrawBridge
    // ARGUMENTS: childID, parentID, eventFlagID, dummyID
    InitializeEvent(0, 31172400, 31171103, 31171102, 31170405, 100);
    
    //Drawbridge Lever Activator
    // ARGUMENTS: leverEntID, leverObjID, ObjActParamID, eventFlagID
    InitializeEvent(0, 31172401, 31171104, 31171904, 99026, 31170405);
});

/*
|||| Drawbridge
-we are attaching a child asset (the bridge) to a parent asset (lever)
*/
$Event(31172400, Restart, function(childID, parentID, eventFlagID, dummyID) {
    WaitFixedTimeSeconds(0.3);
    if (EventFlag(eventFlagID))
    {
        ReproduceAssetAnimation(parentID, 1);
        AttachAssetToAsset(childID, parentID, dummyID);
        EndEvent();
    }
    AttachAssetToAsset(childID, parentID, dummyID);
    WaitFor(EventFlag(eventFlagID));
    WaitFixedTimeSeconds(0.3);
    ForceAnimationPlayback(parentID, 1, false, false, false);
    EndEvent();
});

/*
|||| Useable Levers for activating the Drawbridge
*/
$Event(31172401, Default, function(leverEntID, leverObjID, ObjActParamID, eventFlagID) {
    if (EventFlag(eventFlagID))
    {
        DisableObjAct(leverEntID, ObjActParamID);
        EndEvent();
    }
    
    WaitFor(ObjActEventFlag(leverObjID));
    DisableObjAct(leverEntID, ObjActParamID);
    SetEventFlagID(eventFlagID, ON);
    EndEvent();
});

$Event(31172500, Restart, function() {
    DisableAsset(31171500);
});

$Event(31172600, Restart, function() {
    RegisterLadder(31170950,31170951,31172950);   //scaffold_ladder
    RegisterLadder(31170951, 31170952, 31172951); //backtrack_ladder_01
    RegisterLadder(31170952, 31170953, 31172952); //backtrack_ladder_02
    RegisterLadder(31170953, 31170954, 31172953); //backtrack_ladder_03
    RegisterLadder(31170967, 31170968, 31172967); //tall_ladder
    RegisterLadder(31170968, 31170969, 31172968); //short_ladder
    InitializeCommonEvent(0, 90005525, 31170954, 31172954); //illusory wall
    DisableHit(31172955); //spreading_cloth_01
    DisableHit(31172958); //spreading_cloth_02
    DisableHit(31172959); //spreading_cloth_03
    DisableHit(31172956); //curtain_01
    DisableHit(31172957); //curtain_02
    DisableMapPart(31172960); //floor_collision
    EnableAssetInvunerability(31172961); //glintstone_01
    EnableAssetInvunerability(31172962); //glintstone_02
    EnableAssetInvunerability(31172963); //glintstone_03
    EnableAssetInvunerability(31172964); //chair
    DisableMapPart(31172965); //wall_collision
    DisableHit(31172966); //fancy_pot
    DisableHit(31172970); //stairs_collision_01
    DisableMapPart(31172971); //stairs_collision_01
    DisableHit(31172972); //stairs_collision_02
    DisableMapPart(31172973); //stairs_collision_02
    DisableMapPart(31172974); //stairs_collision_02
    DisableHit(31172977);     //greenhouse_collision_setup_01
    DisableHit(31172978);     //02
    DisableMapPart(31172979); //03
    DisableMapPart(31172980); //04
    DisableMapPart(31172981); //05
    DisableMapPart(31172982); //06
    DisableMapPart(31172983); //07
    DisableMapPart(31172984); //08
    DisableMapPart(31172985); //09
    DisableMapPart(31172986); //10
    DisableMapPart(31172987); //11
    DisableMapPart(31172988); //12
    DisableMapPart(31172989); //13
    DisableMapPart(31172990); //14
    DisableHit(31172991); //barrel_collision_01
    DisableMapPart(31172992); //barrel_collision_01
    DisableMapPart(31172993); //beam_collision_01
    DisableMapPart(31172994); //beam_collision_02
    DisableHit(31172995); //scaffold_collision_01
    DisableMapPart(31172996);            //02
    DisableMapPart(31172997);            //03
    DisableMapPart(31172998);            //04
    DisableMapPart(31172999);            //05
    DisableMapPart(31173000);            //06
    DisableMapPart(31173001);            //07
    DisableHit(31173002);                //08
    EnableAssetInvunerability(31173003); //09
    EnableAssetInvunerability(31173004); //10
    EnableAssetInvunerability(31173005); //11
    DisableMapPart(31173006);            //12
    DisableMapPart(31173007);            //13
    DisableMapPart(31173008);            //14
    DisableMapPart(31173009);            //15
    DisableMapPart(31173010);            //16
    DisableMapPart(31173011);            //17
    DisableMapPart(31173012);            //18
    DisableMapPart(31173013);            //19
    DisableMapPart(31173014);            //20
    DisableMapPart(31173015);            //21
    DisableMapPart(31173016);            //22
    DisableMapPart(31173017);            //23
    DisableMapPart(31173018);            //24
    DisableMapPart(31173019);            //25
    DisableMapPart(31173020);            //26
    DisableMapPart(31173021);            //27
    DisableMapPart(31173022);            //28
    DisableMapPart(31173023);            //29
    DisableMapPart(31173024);            //30
    DisableMapPart(31173025);            //31
    DisableMapPart(31173026);            //32
    DisableMapPart(31173027);            //33
    DisableMapPart(31173028);            //34
    DisableMapPart(31173029);            //35
    DisableMapPart(31173030);            //36
    DisableMapPart(31173031);            //37
    DisableMapPart(31173032);            //38
    DisableHit(31173033);                //39
    EnableAssetInvunerability(31173034); //40
    DisableHit(31173035);                //41
    DisableHit(31173036);                //42
    DisableMapPart(31173037);            //43
    DisableMapPart(31173038);            //44
    DisableHit(31173039);                //45
    DisableMapPart(31173040);            //46
    DisableMapPart(31173041);            //47
    DisableMapPart(31173042);            //48
    DisableMapPart(31173043);            //49
    DisableMapPart(31173044);            //50
    DisableMapPart(31173045);            //51
    DisableHit(31173046);                //52
    DisableHit(31173047);                //53
    DisableHit(31173048);                //54
    DisableHit(31173049);                //55
    DisableMapPart(31173050);            //56
    DisableHit(31173051); //ladder_support_collision_01
    DisableMapPart(31173052); //ladder_support_collision_02
    DisableHit(31173053); //ruins_island_collision_01
    DisableMapPart(31173054); //02
    DisableMapPart(31173055); //03
    DisableMapPart(31173056); //04
    DisableMapPart(31173057); //05
    DisableMapPart(31173058); //06
    DisableMapPart(31173059); //07
    DisableMapPart(31173060); //08
    DisableMapPart(31173061); //09
    DisableMapPart(31173062); //10
    DisableMapPart(31173063); //11
    DisableMapPart(31173064); //12
    DisableMapPart(31173065); //skip_fix
    DisableHit(31173066); //large_spreading_cloth_01
    DisableHit(31173067); //large_spreading_cloth_02
    DisableHit(31173068); //large_spreading_cloth_03
    RegisterLadder(31170069, 31170070, 31173069); //hidden_path
    DisableHit(31173070);     //hanging_pots_collision_01
    DisableMapPart(31173071); //hanging_pots_collision_02
    DisableMapPart(31173072); //hanging_pots_collision_03
    DisableHit(31173073);     //dining_room_collision_01
    DisableHit(31173074);     //02
    DisableMapPart(31173075); //03
    DisableMapPart(31173076); //04
    DisableMapPart(31173077); //05
    DisableMapPart(31173078); //06
    DisableMapPart(31173079); //07
    DisableMapPart(31173080); //08
    DisableMapPart(31173081); //09
    DisableMapPart(31173082); //10
    DisableHit(31173083);     //11
    DisableHit(31173084);     //12
    DisableHit(31173085);     //13
    DisableHit(31173086);     //14
    DisableHit(31173090);     //platform_collision_01
    DisableMapPart(31173091); //platform_collision_02
    DisableMapPart(31173092); //platform_collision_03
    DisableMapPart(31173093); //platform_collision_04
    EnableAssetInvunerability(31173094); //self_trap_fix
    DisableMapPart(31173095); //camera_fix_01
    DisableMapPart(31173096); //camera_fix_02
    DisableMapPart(31173097); //camera_fix_03
    EnableAssetInvunerability(31173104); //large_spreading_roots_boss_room_01
    EnableAssetInvunerability(31173105); //large_spreading_roots_boss_room_02
    EnableAssetInvunerability(31173106); //large_spreading_roots_boss_room_03
    EnableAssetInvunerability(31173107); //large_spreading_roots_boss_room_04
    EnableAssetInvunerability(31173108); //large_spreading_roots_boss_room_05
    EnableAssetInvunerability(31173109); //large_spreading_roots_boss_room_06
    EnableAssetInvunerability(31173110); //large_spreading_roots_boss_room_07
    DisableMapPart(31173111); //skip_fix
    RegisterLadder(31170112, 31170113, 31173112); //progression_ladder
    EnableAssetInvunerability(31173113); //hay_bales
});

/*
|||| Fight Activation Zone
*/
$Event(31172403, Restart, function(EnemyID, TeamID, AreaID) {
    DisableCharacterAI(EnemyID);
    WaitFor(InArea(10000, AreaID));
    EnableCharacterAI(EnemyID);
    SetCharacterTeamType(EnemyID, TeamID);
    EndEvent();
});

$Event(31172208, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 4, 1));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31172216, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 3, 1));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31172218, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, X4_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || chrSpArea
            || (chrSp && EntityInRadiusOfEntity(10000, X0_4, X8_4, 1))
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpArea.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31172254, Restart, function() {
    SetSpEffect(31170254, 10525);
});

$Event(31172499, Restart, function() {
    EndIf(EventFlag(31170800));
    areaDmg = InArea(10000, 31172390) || HasDamageType(31170800, 0, DamageType.Unspecified);
    chr = CharacterHasStateInfo(31170800, 436)
        || CharacterHasStateInfo(31170800, 2)
        || CharacterHasStateInfo(31170800, 5)
        || CharacterHasStateInfo(31170800, 6)
        || CharacterHasStateInfo(31170800, 260);
    WaitFor(areaDmg);
    SetEventFlagID(31172499, ON);
});

$Event(31172800, Restart, function() {
    EndIf(EventFlag(31170800));
    WaitFor(CharacterHPValue(31170800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31170800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31170800));
    HandleBossDefeatAndDisplayBanner(31170800, TextBannerType.EnemyFelled);
    SetEventFlagID(31170800, ON);
    SetEventFlagID(9235, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61235, ON);
    }
});

$Event(31172810, Restart, function() {
    if (EventFlag(31170800)) {
        DisableCharacter(31170800);
        DisableCharacterCollision(31170800);
        ForceCharacterDeath(31170800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31170800);
    EnableCharacterInvincibility(31170800);
    DisableLockOnPoint(31170800, 220);
    WaitFor(EventFlag(31172805) && EventFlag(31172499));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(31170801, ON);
    }
L2:
    EnableCharacterAI(31170800);
    DisableCharacterInvincibility(31170800);
    SetNetworkUpdateRate(31170800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31170800, 0, 904660310);
    EnableLockOnPoint(31170800, 220);
});

$Event(31172811, Restart, function() {
    EndIf(EventFlag(31170800));
    WaitFor(HPRatio(31170800) <= 0.6);
    SetEventFlagID(31172802, ON);
});

$Event(31172849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31170800, 31171800, 31172800, 31172805, 31175800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31170800, 31171800, 31172800, 31172805, 31172806, 10000);
    InitializeCommonEvent(0, 9005811, 31170800, 31171800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31170800, 931000, 31172805, 31172806, 31172499, 31172802, 0, 0);
});

$Event(31172900, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    SetEventFlagID(700690, ON);
});
