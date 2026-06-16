// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(71231, 12031951, 0, 0, 0, 5);
    RegisterBonfire(71232, 12031952, 0, 0, 0, 5);
    RegisterBonfire(71233, 12031953, 0, 0, 0, 5);
    RegisterBonfire(71234, 12031954, 0, 0, 0, 5);
    RegisterBonfire(71235, 12031955, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 12030850, 71230, 12030950, 12031950, 1084227584);
    InitializeCommonEvent(0, 9005810, 12030860, 12030000, 12030956, 12031956, 1084227584); //guardian grace
    InitializeEvent(0, 12032800, 0);
    InitializeEvent(0, 12032810, 0);
    InitializeEvent(0, 12032811, 0);
    InitializeEvent(0, 12032812, 0);
    InitializeEvent(0, 12032849, 0);
    InitializeEvent(0, 12032841, 0);
    SetEventFlag(TargetEventFlagType.EventFlag, 12030800, ON);
    ChangeCharacterEnableState(12030800, Disabled);
    ChangeCharacterEnableState(12030810, Disabled);
    ChangeCharacterEnableState(12030811, Disabled);
    ChangeCharacterEnableState(12030812, Disabled);
    ChangeCharacterEnableState(12030813, Disabled);
    ChangeCharacterEnableState(12030814, Disabled);
    InitializeEvent(0, 12032850, 0);
    InitializeEvent(0, 12032860, 0);
    InitializeEvent(0, 12032859, 0);
    InitializeEvent(0, 12032899, 0);
    InitializeEvent(0, 12032861, 0);
    InitializeEvent(0, 12032862, 0);
    InitializeEvent(0, 12032310, 12030240);
    InitializeEvent(1, 12032310, 12030241);
    InitializeEvent(2, 12032310, 12030242);
    InitializeEvent(3, 12032310, 12030243);
    InitializeEvent(4, 12032310, 12030244);
    InitializeEvent(5, 12032310, 12030245);
    InitializeEvent(6, 12032310, 12030246);
    InitializeEvent(7, 12032310, 12030247);
    InitializeEvent(8, 12032310, 12030248);
    InitializeEvent(9, 12032310, 12030249);
    InitializeEvent(10, 12032310, 12030250);
    InitializeEvent(11, 12032310, 12030251);
    InitializeEvent(12, 12032310, 12030252);
    InitializeEvent(13, 12032310, 12030253);
    InitializeEvent(14, 12032310, 12030254);
    InitializeEvent(15, 12032310, 12030255);
    InitializeEvent(16, 12032310, 12030256);
    InitializeEvent(17, 12032310, 12030257);
    InitializeEvent(0, 12032241, 12030242, 0);
    InitializeEvent(1, 12032241, 12030243, 0);
    InitializeEvent(2, 12032241, 12030244, 1090519040);
    InitializeEvent(3, 12032241, 12030245, 0);
    InitializeEvent(4, 12032241, 12030246, 1091567616);
    InitializeEvent(5, 12032241, 12030247, 1091567616);
    InitializeEvent(6, 12032241, 12030248, 1098383360);
    InitializeEvent(7, 12032241, 12030249, 1098907648);
    InitializeEvent(8, 12032241, 12030250, 1098907648);
    InitializeEvent(9, 12032241, 12030251, 1105199104);
    InitializeEvent(10, 12032241, 12030252, 1105199104);
    InitializeEvent(11, 12032241, 12030253, 1105199104);
    InitializeEvent(12, 12032241, 12030254, 1103626240);
    InitializeEvent(13, 12032241, 12030255, 1101004800);
    InitializeCommonEvent(0, 90005261, 12030200, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005261, 12030210, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005261, 12030211, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005261, 12030212, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005261, 12030213, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005261, 12030214, 12032200, 1112014848, 0, -1);
    InitializeCommonEvent(0, 90005300, 12030240, 12030240, 12030800, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030241, 12030241, 12030810, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030256, 12030256, 12030820, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030257, 12030257, 12030830, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030297, 12030297, 12030840, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030201, 12030201, 12030850, 1069547520, 0);
    InitializeCommonEvent(0, 90005251, 12030303, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005300, 12030350, 12030350, 40660, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030354, 12030354, 40668, 1069547520, 0);
    InitializeCommonEvent(0, 90005300, 12030355, 12030355, 40670, 1069547520, 0);
    //InitializeCommonEvent(0, 90005860, 12030390, 0, 12030390, 1, 12030950, 0);
    InitializeCommonEvent(0, 90005870, 12030390, 902500600, 12);
    InitializeCommonEvent(0, 90005872, 12030390, 12, 0);
    InitializeCommonEvent(0, 90005300, 12030391, 12030391, 12030960, 1069547520, 0);
    InitializeCommonEvent(0, 90005250, 12030391, 12032391, 0, -1);
    InitializeEvent(0, 90005540, 12030520, 12031021, 12031020, 12032020, -1, 1, 2); //(eventflag, gate id, lever id, objacteventflag, objactparamid, anim id, anim id)
    InitializeEvent(1, 90005540, 12030530, 12031031, 12031030, 12032030, -1, 1, 2); //(eventflag, gate id, lever id, objacteventflag, objactparamid, anim id, anim id)
    InitializeEvent(0, 12032504, 0);
    InitializeEvent(0, 12032509, 0);
    InitializeCommonEvent(0, 90005251, 12030400, 1128792064, 1092616192, -1);
    InitializeCommonEvent(0, 90005451, 12030400, 12036420);
    InitializeCommonEvent(0, 90005452, 12030400, 12030400);
    InitializeCommonEvent(0, 90005454, 12030400, 12032400, 12030400);
    InitializeCommonEvent(0, 90005456, 12030400, 12031410, 12031418, 12030400);
    InitializeCommonEvent(0, 90005458, 12030400, 12031401);
    InitializeCommonEvent(0, 90005453, 12030400, 12031420, 60, 0);
    InitializeCommonEvent(1, 90005453, 12030400, 12031421, 61, 1036831949);
    InitializeCommonEvent(0, 90005453, 12030400, 12031422, 62, 1045220557);
    InitializeCommonEvent(0, 90005453, 12030400, 12031423, 63, 1050253722);
    InitializeCommonEvent(0, 90005453, 12030400, 12031424, 64, 1053609165);
    InitializeCommonEvent(0, 90005453, 12030400, 12031425, 65, 1056964608);
    InitializeCommonEvent(0, 90005453, 12030400, 12031426, 66, 1058642330);
    InitializeCommonEvent(0, 90005453, 12030400, 12031427, 67, 1060320051);
    InitializeCommonEvent(0, 90005453, 12030400, 12031428, 68, 1061997773);
    InitializeCommonEvent(0, 90005453, 12030400, 12031429, 69, 1063675494);
    InitializeCommonEvent(0, 90005453, 12030400, 12031430, 70, 1065353216);
    InitializeCommonEvent(0, 90005453, 12030400, 12031431, 71, 1036831949);
    InitializeCommonEvent(0, 90005453, 12030400, 12031432, 72, 1045220557);
    InitializeCommonEvent(0, 90005453, 12030400, 12031433, 73, 1050253722);
    InitializeCommonEvent(0, 90005453, 12030400, 12031434, 74, 1053609165);
    InitializeCommonEvent(0, 90005453, 12030400, 12031435, 75, 1056964608);
    InitializeEvent(0, 12032300, 12035380, 1065353216);
    InitializeEvent(0, 12032500, 0);
    InitializeEvent(0, 12030050, 0);
    InitializeCommonEvent(0, 90005704, 12030710, 4061, 4060, 12039001, 3);
    InitializeCommonEvent(0, 90005703, 12030710, 4061, 4062, 12039001, 4061, 4060, 4063, -1);
    InitializeCommonEvent(0, 90005702, 12030710, 4063, 4060, 4063);
    InitializeEvent(0, 12030710, 12030710);
    InitializeCommonEvent(0, 90005750, 12031720, 4350, 103410, 400348, 400348, 4067, 0);
    InitializeCommonEvent(0, 90005704, 12030702, 4121, 4120, 12039051, 3);
    InitializeCommonEvent(0, 90005703, 12030702, 4121, 4122, 12039051, 4121, 4120, 4123, -1);
    InitializeCommonEvent(0, 90005702, 12030702, 4123, 4120, 4123);
    InitializeEvent(0, 12030700, 12030702);
    InitializeEvent(0, 12030701, 12030700, 12031730);
    InitializeEvent(0, 12030702, 12030703);
    InitializeEvent(0, 12030703, 12030701, 12031701, 12031702);
    InitializeEvent(0, 12030709, 12039179);
    InitializeEvent(0, 12030704, 0);
    InitializeEvent(0, 12030705, 0);
    InitializeEvent(0, 12030706, 0);
    InitializeCommonEvent(0, 90005740, 12032715, 12032716, 12032717, 12030702, 702, 12031731, 702, 1053609165, 90305, 90307, -1, 1067869798);
    InitializeCommonEvent(0, 90005741, 12032718, 12032719, 12032717, 12030702, 90330, 0, 90332, -1, 1056964608);
    InitializeEvent(0, 12030707, 0);
    InitializeEvent(0, 12030708, 12030702);
    InitializeCommonEvent(0, 90005750, 12031710, 6460, 103350, 9502, 9502, 4131, 806781);
    InitializeCommonEvent(0, 90005750, 12031710, 4110, 113300, 400339, 400339, 12039162, 0);
    InitializeCommonEvent(0, 90005733, 12032714);
    InitializeCommonEvent(0, 90005740, 12032725, 12032726, 0, 12030700, 0, 0, 0, 1067869798, 90305, 90307, -1, 1067869798);
    InitializeCommonEvent(0, 90005752, 12031730, 200, 120, 1077936128);
    InitializeEvent(0, 12030720, 12030725);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 12030750, 12030725, 12030860)
    //Erdtree Sentry
    InitializeCommonEvent(0, 90005876, 12030860, 12030861, 904640000, 920600);
    InitializeCommonEvent(0, 90005875, 12030860, 30640, 920600);
    InitializeCommonEvent(0, 90005890, 12030860, 12030862, 12030862);
    InitializeEvent(0, 12030866, 0);
    InitializeCommonEvent(0, 90005891, 12030860, 12030861, 12030862);
    //InitializeCommonEvent(0, 90005870, 12030860, 904810603, 18);
    //InitializeCommonEvent(0, 90005860, 12030860, 0, 12030860, 0, 30640, 0);
    //InitializeCommonEvent(0, 90005251, 12030860, 1101004800, 0, 0);
    //InitializeEvent(0, 12032055, 0);
    //Lichdragon Seal Events
    
    //EntityIDs
    //12030390 Crucible Miniboss
    //12031390 Crucible Beacon
    //12032390 Crucible Seal Light
    //12033390 Crucible Fogwall
    //12032810 Crucible Activation Zone

    //12030392 Skeleton Miniboss
    //12031392 Skeleton Beacon
    //12032392 Skeleton Seal Light
    //12033392 Skeleton Fogwall
    //12032811 Skeleton Activation Zone

    //12030393 Death Knight Miniboss
    //12031393 Death Knight Beacon
    //12032393 Death Knight Seal Light
    //12033393 Death Knight Fogwall 1
    //12033394 Death Knight Fogwall 2
    //12033395 Death Knight Fogwall 3
    //12032812 Death Knight Activation Zone
    
    
    //12032394 Lichdragon Seal
    
    //Miniboss Beacon/Seal Light Events
    InitializeEvent(0, 12030900, 12030390, 12031390, 12032390);
    InitializeEvent(1, 12030900, 12030392, 12031392, 12032392);
    InitializeEvent(2, 12030900, 12030393, 12031393, 12032393);
    
    //Crucible Miniboss
    InitializeEvent(0, 12030901, 12030390, 902500600, 12033390, 0, 0, 12032814, -1, 12033810);
    InitializeEvent(0, 12030902, 12030390, 12030390, 30700, 12033390, 0, 0, 530700, 9285, -1, 0, 0);
    InitializeEvent(0, 12030904, 12030390, 12033390, -1, -1, 1511, 0);
    InitializeEvent(0, 12030905, 12030390, 12032814, 12033810); //Short warp if boss not dead
    InitializeCommonEvent(0, 9005800, 12030390, 12033390, 12032814, 12032815, 12030390, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 12030390, 12033390, 12032814, 12032815, 12032821, 10000);
    InitializeCommonEvent(0, 9005811, 12030390, 12033390, 1511, 0);
    InitializeCommonEvent(0, 9005822, 12030390, 920200, 12032815, 12032821, 0, 0, 0, 0);
    
    //Skeleton Miniboss
    InitializeEvent(1, 12030901, 12030392, 902500601, 12033392, 0, 0, 12032811, 12031675, 12033811);
    InitializeEvent(1, 12030902, 12030392, 12030392, 10350, 12033392, 0, 0, 510350, 9286, 12031675, 12035392, 12032816);
    InitializeEvent(1, 12030904, 12030392, 12033392, -1, -1, 1511, 0);
    InitializeEvent(1, 12030905, 12030392, 12032811, 12033811); //Short warp if boss not dead
    InitializeCommonEvent(0, 9005800, 12030392, 12033392, 12032811, 12032816, 12030392, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 12030392, 12033392, 12032811, 12032816, 12032822, 10000);
    InitializeCommonEvent(0, 9005811, 12030392, 12033392, 1511, 0);
    InitializeCommonEvent(0, 9005822, 12030392, 921600, 12032816, 12032822, 0, 0, 0, 0);
    
    //Death Knight Miniboss
    InitializeEvent(2, 12030901, 12030393, 902500603, 12033393, 12033394, 12033395, 12032812, -1, 12033812);
    InitializeEvent(2, 12030902, 12030393, 12030393, -1, 12033393, 12033394, 12033395, -1, 9272, -1, 0, 0);
    InitializeEvent(2, 12030904, 12030393, 12033393, 12033394, 12033395, 1511, 0);
    InitializeEvent(2, 12030905, 12030393, 12032812, 12033812); //Short warp if boss not dead
    InitializeCommonEvent(0, 9005800, 12030393, 12033393, 12032812, 12032817, 12030393, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 12030393, 12033393, 12032812, 12032817, 12032823, 10000);
    InitializeCommonEvent(0, 9005811, 12030393, 12033393, 1511, 0);
    InitializeCommonEvent(0, 9005811, 12030393, 12033394, 1511, 0);
    InitializeCommonEvent(0, 9005811, 12030393, 12033395, 1511, 0);
    InitializeCommonEvent(0, 9005822, 12030393, 940000, 12032817, 12032823, 0, 0, 0, 0);
    
    // NPC
    InitializeCommonEvent(0, 90005250, 12030103, 12030101, 0, -1);
    InitializeCommonEvent(0, 90005300, 12030103, 12030103, 108700, 0, 0);
    
    
    //Lichdragon Seal Event
    InitializeEvent(0, 12030903, 0);
    
    //kick ladder
    InitializeCommonEvent(0, 90005520, 12030576, 12031576, 12032576, 12032577);
    SetEventFlagID(12030576, ON);
    //No Torrent floor fog
    InitializeCommonEvent(0, 900005610, 12031577, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 12031578, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 12031579, 100, 800, 0);
    
    InitializeEvent(0, 12032420, 0);
    InitializeEvent(0, 12032421, 0);
    InitializeEvent(0, 12032422, 0);
    InitializeEvent(0, 12032450, 0);
    InitializeEvent(0, 12032405, 0);
    //Killboxes
    InitializeCommonEvent(0, 9005999, 12032840);
    InitializeCommonEvent(1, 9005999, 12032841);
    //Bridge Collision
    InitializeEvent(0, 12032060, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(12030700, true);
    SetCharacterBackreadState(12030701, true);
    SetCharacterBackreadState(12030702, true);
    SetCharacterBackreadState(12030703, true);
    SetCharacterBackreadState(12030705, true);
    SetCharacterBackreadState(12030710, true);
    SetCharacterBackreadState(12030715, true);
    SetCharacterBackreadState(12030720, true);
    SetCharacterBackreadState(12030721, true);
    SetCharacterBackreadState(12030725, true);
    DisableAsset(12031730);
    //InitializeEvent(0, 12032820, 0);
    InitializeCommonEvent(0, 90005450, 12030400, 12031400, 12031410, 12031418);
    InitializeCommonEvent(0, 9006900, 12030400, 12031418, 12039050); // Weapon Duplication at the Walking Masoleum
});

$Event(12030050, Restart, function() {
    SetSpEffect(12030400, 12460);
    SetEventFlagID(12030400, ON);
    EndIf(ThisEventSlot());
    SetEventFlagID(12030401, ON);
    SetEventFlagID(12030402, OFF);
});

$Event(12032055, Restart, function() {
    DisableCharacter(12030861);
    DisableCharacterCollision(12030861);
    ForceCharacterDeath(12030861, false);
});

$Event(12032060, Restart, function() {
    DisableHit(12031630);
    DisableHit(12031631);
    DisableHit(12031632);
    DisableHit(12031633);
    DisableHit(12031634);
    DisableHit(12031635);
    DisableHit(12031637);
    DisableMapPart(12031636);
});

$Event(12032400, Restart, function() {
    EndIf(ThisEventSlot());
    SetNetworkUpdateRate(12030400, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(12032405, Restart, function() {
    if (EventFlag(12030564)) {
        ReproduceAssetAnimation(12031564, 0);
        EndEvent();
    }
    
    WaitFor(ActionButtonInArea(7320, 12031565) || ActionButtonInArea(7320, 12031566))
    
    if (!PlayerHasItem(ItemType.Goods, 8139) && InArea(10000, 12031575)) {
        DisplayGenericDialog(4018, PromptType.YESNO, NumberofOptions.NoButtons, 10000, 1);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }

    if (InArea(10000, 12031575)){
     IssueShortWarpRequest(10000, TargetEntityType.Asset, 12031564, 121);
     ForceAnimationPlayback(10000, 60000, false, false, true);
    }
    else
    {
     IssueShortWarpRequest(10000, TargetEntityType.Asset, 12031564, 120);
     ForceAnimationPlayback(10000, 60002, false, false, true);
    }
 
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, 12031564, -1, false);
    ForceAnimationPlayback(12031564, 0, false, false, true);
    SetEventFlagID(12030564, ON);
    EndIf(Signed(0) <= 0);
    DisplayGenericDialog(0, PromptType.YESNO, NumberofOptions.NoButtons, 10000, 1);
});

$Event(12032420, Restart, function() {
    if (!EventFlag(12030421)){
        CreateAssetfollowingSFX(12031003, 200, 1501);
        CreateAssetfollowingSFX(12031004, 200, 1501);
    }
    else
    {
        DisableAsset(12031001);
        DisableAsset(12031002);
        DisableAsset(12031003);
        DisableAsset(12031004);
        DisableAsset(12031005);
        DeleteAssetfollowingSFX(12031003, true);
        DeleteAssetfollowingSFX(12031004, true);
        DeleteMapSFX(12031010, false);
        DeleteMapSFX(12031011, false);
        DeleteMapSFX(12031012, false);
        EndEvent();
    }

    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 12031002));
    DisplayGenericDialog(30016, PromptType.OKCANCEL, NumberofOptions.OneButton, 12031002, 3); 
    PlaySE(12031002, SoundType.SFX, 806855);
    SpawnOneshotSFX(TargetEntityType.Area, 12031011, -1, 304637);
    SetEventFlagID(12030421, ON);
    DisableAsset(12031001);
    DisableAsset(12031002);
    DisableAsset(12031003);
    DisableAsset(12031004);
    DisableAsset(12031005);
    DeleteAssetfollowingSFX(12031003, true);
    DeleteAssetfollowingSFX(12031004, true);
    DeleteMapSFX(12031010, false);
    DeleteMapSFX(12031011, false);
    DeleteMapSFX(12031012, false);
    EndEvent();
});

$Event(12032421, Restart, function() {
    EndIf(EventFlag(12030421));
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 12031005));
    DisplayGenericDialog(30016, PromptType.OKCANCEL, NumberofOptions.OneButton, 12031005, 3); 
    PlaySE(12031005, SoundType.SFX, 806855);
    SpawnOneshotSFX(TargetEntityType.Area, 12031012, -1, 304637);
    SetEventFlagID(12030421, ON);
    DisableAsset(12031001);
    DisableAsset(12031002);
    DisableAsset(12031003);
    DisableAsset(12031004);
    DisableAsset(12031005);
    DeleteAssetfollowingSFX(12031003, true);
    DeleteAssetfollowingSFX(12031004, true);
    DeleteMapSFX(12031010, false);
    DeleteMapSFX(12031011, false);
    DeleteMapSFX(12031012, false);
    EndEvent();
});

$Event(12032422, Restart, function() {
    WaitFor(CharacterDead(12030393));
    AwardItemLot(30650);
    EndEvent();
});

$Event(12032450, Restart, function() {
    EndIf(EventFlag(12030421));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 12031001));
    DisplayGenericDialog(4201, PromptType.OKCANCEL, NumberofOptions.OneButton, 12031001, 3); 
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(12032500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(12032501, OFF);
    SetEventFlagID(12032502, OFF);
    SetEventFlagID(12032504, OFF);
    if (!ThisEventSlot()) {
        DeleteAssetfollowingSFX(12031500, true);
        SetEventFlagID(12032503, OFF);
        WaitFixedTimeFrames(1);
    }
    if (HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
        SetEventFlagID(12032504, ON);
    }
    if (!(HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending)
        //|| !EventFlag(182)
        || !EventFlag(105)
        || EventFlag(300)
        || !EventFlag(12030800)
        || EventFlag(12032870))) {
        if (!EventFlag(12032503)) {
            CreateAssetfollowingSFX(12031500, 200, 806870);
            SetEventFlagID(12032503, ON);
        }
    }
L1:
    onlineAct = PlayerIsInOwnWorld()
        && !(HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending))
        && ActionButtonInArea(9140, 12031500);
    onlineFlag = (HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending)
        //|| !EventFlag(182)
        || !EventFlag(105)
        || EventFlag(300))
        && EventFlag(12032503);
    WaitFor(
        onlineAct
            || onlineFlag
            || (EventFlag(12032504)
                && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                    || HasMultiplayerState(MultiplayerState.MultiplayerPending))
                && !EventFlag(12032503))
                //|| (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 182)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 105)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 300)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12032870)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12030800));
    if (!onlineAct.Passed) {
        if (onlineFlag.Passed) {
            DeleteAssetfollowingSFX(12031500, true);
            SetEventFlagID(12032503, OFF);
        }
L2:
        WaitFixedTimeSeconds(0.033);
        RestartEvent();
    }
L3:
    GotoIf(L10, !EventFlag(12030800));
    GotoIf(L10, EventFlag(12032870));
    GotoIf(L10, EventFlag(300));
    //GotoIf(L4, !EventFlag(182));
    GotoIf(L5, EventFlag(105));
L4:
    DisplayGenericDialog(20004, PromptType.YESNO, NumberofOptions.NoButtons, 12031500, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L10:
    DisplayGenericDialog(30040, PromptType.YESNO, NumberofOptions.NoButtons, 12031500, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L5:
    //DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, 12031500, 3, 12032501, 12032502, 12032502);
    //if (!EventFlag(12032501)) {
        //WaitFixedTimeSeconds(1);
        //RestartEvent();
    //}
L6:
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    RotateCharacter(10000, 12031500, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    SetEventFlagID(11000600, ON);
    SetEventFlagID(11000603, ON);
    WaitFixedTimeSeconds(3);
    WarpPlayer(11, 0, 0, 0, 11002500, 0);
    RestartEvent();
L16:
    WaitFor(EventFlag(12030800));
    RestartEvent();
L18:
    DeleteAssetfollowingSFX(12031500, true);
    WaitFor(!EventFlag(12032870));
    RestartEvent();
});

$Event(12032504, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    SetSpEffect(10000, 191);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9710, 12031504));
    SetSpEffect(10000, 190);
    WaitFixedTimeSeconds(0.1);
    SetEventFlagID(9021, ON);
    SendAllPhantomsHome();
L5:
    WaitFixedTimeSeconds(1);
    GotoIf(L5, HasMultiplayerState(MultiplayerState.Multiplayer));
    SetPlayerRespawnPoint(12012504);
    SaveRequest();
    //PlayCutsceneToPlayerAndWarp(12030010, CutscenePlayMode.Skippable, 12012504, 12010000, 10000, 12030000, false);
    PlayCutsceneToPlayerAndWarp(12030010, CutscenePlayMode.Skippable, 12042506, 12040000, 10000, 30, false);
    WaitFixedTimeRealFrames(1);
    //PlayCutsceneToPlayer(12030011, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    PlayCutsceneToPlayer(12010001, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    SetSpEffect(10000, 191);
    WaitFixedTimeSeconds(1);
    DisplayAreaWelcomeMessage(12010);
});

$Event(12032509, Default, function() {
    DisableNetworkSync();
    WaitFor(EventFlag(12020800) && PlayerIsInOwnWorld() && ActionButtonInArea(9710, 12021502));
    SetEventFlagID(12020502, ON);
    WaitFixedTimeSeconds(0.1);
    SetEventFlagID(9021, ON);
    SetPlayerRespawnPoint(12032502);
    SaveRequest();
    PlayCutsceneToPlayerAndWarp(12020000, CutscenePlayMode.Skippable, 12032502, 12030000, 10000, 12020000, false);
    PlayCutsceneToPlayer(12020001, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeFrames(1);
    WaitFixedTimeSeconds(1);
    DisplayAreaWelcomeMessage(12030);
});

$Event(12032300, Restart, function(X0_4, X4_4) {
    if (EventFlag(12030400)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12030400));
    WaitFixedTimeSeconds(X4_4);
    ForceCharacterDeath(X0_4, false);
});

$Event(12032310, Restart, function(X0_4) {
    EndIf(EventFlag(12032240));
    SetEventFlagID(12032240, OFF);
    SetSpEffect(X0_4, 10949);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || InArea(10000, 12032240)
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
    SetEventFlagID(12032240, ON);
});

$Event(12032241, Restart, function(X0_4, X4_4) {
    SetCharacterTeamType(12035240, TeamType.Enemy);
    SetCharacterTeamType(12035241, TeamType.Enemy);
    SetCharacterTeamType(12035256, TeamType.Enemy);
    SetCharacterTeamType(12035257, TeamType.Enemy);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    SetSpEffect(X0_4, 2900);
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, 30001, true, false, false);
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified) || EventFlag(12032240));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    WaitFixedTimeSeconds(X4_4);
    ForceAnimationPlayback(X0_4, 20001, true, false, false);
    EndEvent();
});

$Event(12032800, Restart, function() {
    EndIf(EventFlag(12030800));
    WaitFor(
        CharacterHPValue(12030800) <= 0
            && CharacterHPValue(12030810) <= 0
            && CharacterHPValue(12030811) <= 0
            && CharacterHPValue(12030812) <= 0
            && CharacterHPValue(12030813) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(12030800, SoundType.SFX, 888880000);
    DisableCharacter(12030814);
    WaitFor(
        CharacterDead(12030800)
            && CharacterDead(12030810)
            && CharacterDead(12030811)
            && CharacterDead(12030812)
            && CharacterDead(12030813));
    HandleBossDefeatAndDisplayBanner(12030800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(12030800, ON);
    EnableAssetTreasure(12031490);
    DisableAsset(12031810);
    DeleteAssetfollowingSFX(12031810, true);
    SetEventFlagID(9135, ON);
    SetEventFlagID(61135, ON);
});

$Event(12032810, Restart, function() {
    if (EventFlag(12030800)) {
        DisableCharacter(12030800);
        DisableCharacterCollision(12030800);
        ForceCharacterDeath(12030800, false);
        DisableCharacter(12030810);
        DisableCharacterCollision(12030810);
        ForceCharacterDeath(12030810, false);
        DisableCharacter(12030811);
        DisableCharacterCollision(12030811);
        ForceCharacterDeath(12030811, false);
        DisableCharacter(12030812);
        DisableCharacterCollision(12030812);
        ForceCharacterDeath(12030812, false);
        DisableCharacter(12030813);
        DisableCharacterCollision(12030813);
        ForceCharacterDeath(12030813, false);
        DisableCharacter(12030814);
        DisableCharacterCollision(12030814);
        ForceCharacterDeath(12030814, false);
        EnableAssetTreasure(12031490);
        DisableAsset(12031810);
        DeleteAssetfollowingSFX(12031810, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12030800);
    DisableCharacterAI(12030810);
    DisableCharacterAI(12030811);
    DisableCharacterAI(12030812);
    DisableCharacterAI(12030813);
    DisableCharacterAI(12030814);
    DisableCharacter(12030800);
    DisableCharacter(12030810);
    DisableCharacter(12030811);
    DisableCharacter(12030812);
    DisableCharacter(12030813);
    DisableCharacter(12030814);
    DisableAssetTreasure(12031490);
    DisableAsset(12031810);
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 12032801));
    SetEventFlagID(12030801, ON);
    SetEventFlagID(12032803, ON);
    DeleteAssetfollowingSFX(12031810, true);
    EnableAsset(12031810);
    CreateAssetfollowingSFX(12031810, 200, 806700);
    SpawnOneshotSFX(TargetEntityType.Character, 12030800, 900, 600940);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        CopyCharacterDataFromOnlinePlayers(0, 23611, 12030800);
    } else if (EventFlag(51)) {
        CopyCharacterDataFromOnlinePlayers(0, 23612, 12030800);
    } else if (EventFlag(52)) {
        CopyCharacterDataFromOnlinePlayers(0, 23613, 12030800);
    } else if (EventFlag(52)) {
        CopyCharacterDataFromOnlinePlayers(0, 23614, 12030800);
    } else if (EventFlag(54)) {
        CopyCharacterDataFromOnlinePlayers(0, 23615, 12030800);
    } else if (EventFlag(55)) {
        CopyCharacterDataFromOnlinePlayers(0, 23616, 12030800);
    } else if (EventFlag(56)) {
        CopyCharacterDataFromOnlinePlayers(0, 23617, 12030800);
    } else {
        CopyCharacterDataFromOnlinePlayers(0, 23618, 12030800);
    }
L8:
    WaitFixedTimeFrames(1);
    EnableCharacter(12030800);
    EnableCharacter(12030814);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(12030800, 63010, false, false, false);
    EnableCharacterAI(12030800);
    SetNetworkUpdateRate(12030800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(3);
    DisplayBossHealthBar(Enabled, 12030800, 0, 136100);
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(12032810, ON);
});

$Event(12032811, Restart, function() {
    EndIf(EventFlag(12030800));
    WaitFor(CharacterDead(12030800) && EventFlag(12032810));
    WaitFixedTimeSeconds(3);
    DisplayBossHealthBar(Disabled, 12030800, 0, 136100);
    SpawnOneshotSFX(TargetEntityType.Character, 12030810, 900, 600940);
    WaitFixedTimeSeconds(0.5);
    EnableCharacter(12030810);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(12030810, 63010, false, false, false);
    EnableCharacterAI(12030810);
    SetNetworkUpdateRate(12030810, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(12032811, ON);
    WaitFixedTimeSeconds(3);
    DisplayBossHealthBar(Enabled, 12030810, 0, 132500);
});

$Event(12032812, Restart, function() {
    EndIf(EventFlag(12030800));
    WaitFor(CharacterDead(12030810) && EventFlag(12032811));
    WaitFixedTimeSeconds(3);
    DisplayBossHealthBar(Disabled, 12030810, 0, 132500);
    SpawnOneshotSFX(TargetEntityType.Character, 12030811, 900, 600940);
    WaitFixedTimeSeconds(0.5);
    SpawnOneshotSFX(TargetEntityType.Character, 12030813, 900, 600940);
    EnableCharacter(12030811);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(12030811, 63010, false, false, false);
    EnableCharacterAI(12030811);
    SetNetworkUpdateRate(12030811, true, CharacterUpdateFrequency.AlwaysUpdate);
    SpawnOneshotSFX(TargetEntityType.Character, 12030812, 900, 600940);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        CopyCharacterDataFromOnlinePlayers(0, 23701, 12030813);
    } else if (EventFlag(51)) {
        CopyCharacterDataFromOnlinePlayers(0, 23702, 12030813);
    } else if (EventFlag(52)) {
        CopyCharacterDataFromOnlinePlayers(0, 23703, 12030813);
    } else if (EventFlag(53)) {
        CopyCharacterDataFromOnlinePlayers(0, 23704, 12030813);
    } else if (EventFlag(54)) {
        CopyCharacterDataFromOnlinePlayers(0, 23705, 12030813);
    } else if (EventFlag(55)) {
        CopyCharacterDataFromOnlinePlayers(0, 23706, 12030813);
    } else if (EventFlag(56)) {
        CopyCharacterDataFromOnlinePlayers(0, 23707, 12030813);
    } else {
        CopyCharacterDataFromOnlinePlayers(0, 23708, 12030813);
    }
L8:
    WaitFixedTimeFrames(1);
    EnableCharacter(12030813);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(12030813, 63010, false, false, false);
    EnableCharacterAI(12030813);
    SetNetworkUpdateRate(12030813, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        CopyCharacterDataFromOnlinePlayers(0, 23711, 12030812);
    } else if (EventFlag(51)) {
        CopyCharacterDataFromOnlinePlayers(0, 23712, 12030812);
    } else if (EventFlag(52)) {
        CopyCharacterDataFromOnlinePlayers(0, 23713, 12030812);
    } else if (EventFlag(53)) {
        CopyCharacterDataFromOnlinePlayers(0, 23714, 12030812);
    } else if (EventFlag(54)) {
        CopyCharacterDataFromOnlinePlayers(0, 23715, 12030812);
    } else if (EventFlag(55)) {
        CopyCharacterDataFromOnlinePlayers(0, 23716, 12030812);
    } else if (EventFlag(56)) {
        CopyCharacterDataFromOnlinePlayers(0, 23717, 12030812);
    } else {
        CopyCharacterDataFromOnlinePlayers(0, 23718, 12030812);
    }
L9:
    WaitFixedTimeFrames(1);
    EnableCharacter(12030812);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(12030812, 63010, false, false, false);
    EnableCharacterAI(12030812);
    SetNetworkUpdateRate(12030812, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(2);
    DisplayBossHealthBar(Enabled, 12030811, 0, 132900);
    DisplayBossHealthBar(Enabled, 12030813, 1, 137000);
    DisplayBossHealthBar(Enabled, 12030812, 2, 137100);
});

$Event(12032820, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerInMap(12, 3, 0, 0));
    RequestCharacterDataFromOnlinePlayers(0, 3);
});

$Event(12032830, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!EventFlag(X0_4)) {
        WaitFixedTimeFrames(1);
        if (EventFlag(X24_4)) {
        }
L0:
        if (X28_4 != 0) {
            area = InArea(10000, X28_4);
        }
        WaitFor((area && PlayerIsInOwnWorld()) || EventFlag(X0_4));
        GotoIf(L2, !PlayerIsInOwnWorld());
        if (!EventFlag(X24_4)) {
            SendInvadingPhantomsHome(0);
        }
        RestartIf(EventFlag(X0_4));
        Goto(L1);
L3:
        GotoIf(L1, EventFlag(X12_4));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, X8_4) || time) && PlayerIsInOwnWorld() && !EventFlag(X0_4))
                || EventFlag(X0_4));
        RestartIf(EventFlag(X0_4));
        RestartIf(time.Passed);
L1:
        GotoIf(L2, !PlayerIsInOwnWorld());
        IssueBossRoomEntryNotification();
        SetNetworkUpdateAuthority(X16_4, AuthorityLevel.Forced);
L2:
        ActivateMultiplayerdependantBuffs(X16_4);
        SetNetworkconnectedEventFlagID(X12_4, ON);
        EndIf(!PlayerIsInOwnWorld());
        EndEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, X4_4));
    RotateCharacter(10000, X8_4, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
    WaitFixedTimeSeconds(X20_4);
});

$Event(12032840, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(12030800));
    WaitFor(
        !EventFlag(12030800)
            && EventFlag(12032805)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(10000, 12031800));
    SuppressSoundForFogGate(5);
    RotateCharacter(10000, 12032800, 60060, true);
    time = ElapsedSeconds(3);
    WaitFor(CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, 12032800) || time));
    WaitFixedTimeSeconds(1);
    RestartIf(time.Passed);
    SetEventFlagID(12032806, ON);
    DisplayNetworkMessage(2920000, false);
    WaitFixedTimeSeconds(4);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, 12032806, -1, 0, false, false);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 63010, false, false, false);
    WaitFixedTimeSeconds(0.5);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 30320);
    RestartEvent();
});

$Event(12032841, Restart, function() {
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 12032807));
    SendInvadingPhantomsHome(0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(12032842, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    DisableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag &= EventFlag(X12_4);
    }
    flag &= !EventFlag(X0_4);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    if (!PlayerIsInOwnWorld()) {
        EnableAsset(X4_4);
        DeleteAssetfollowingSFX(X4_4, true);
        CreateAssetfollowingSFX(X4_4, 101, X8_4);
    }
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X12_4) {
        flag2 &= EventFlag(X12_4);
    }
    flag2 &= !EventFlag(X0_4);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)));
    RestartEvent();
});

$Event(12032849, Restart, function() {
    InitializeEvent(0, 12032830, 12030800, 12031800, 12032800, 12032805, 12035800, 0, 12030801, 12032801);
    InitializeEvent(0, 12032840, 0);
    InitializeCommonEvent(0, 12032842, 12030800, 12031800, 5, 12030801);
    InitializeCommonEvent(0, 9005822, 12030800, 921100, 12032805, 12032806, 12032803, 0, 0, 0);
});

$Event(12032859, Restart, function() {
    DisableCharacter(12030850);
    EndIf(EventFlag(12030850));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 12032801));
    SetEventFlagID(12032859, ON);
    WaitFor(EventFlag(12032859));
    SetEventFlagID(9021, ON);
    WaitFixedTimeSeconds(1);
    FadeToBlack(1, 1, true, 1);
    WaitFixedTimeSeconds(1);
    ChangeWeather(Weather.PuffyClouds, -1, true);
    PlayCutsceneToPlayerAndWarp(12030020, CutscenePlayMode.Skippable, 12032859, 12030000, 10000, 12030000, false);
    WaitFixedTimeRealFrames(1);
    FadeToBlack(0, 0, false, 0);
    WaitFixedTimeRealFrames(1);
    EnableCharacter(12030850);
    DisableCharacter(12030950);
    DisableAsset(12031950);
    SetEventFlagID(12032858, ON);
});

$Event(12032850, Restart, function() {
    if (EventFlag(12030850)) {
        EnableCharacter(12030950);
        EnableAsset(12031950);
        DisableAsset(12031850);
        DeleteAssetfollowingSFX(12031850, true);
        DisableAsset(12031106);
        EndEvent();
    }
L10:
    WaitFor(EventFlag(12032859) && CharacterHPValue(12030850) <= 0);
    SetLockcamSlotNumber(12, 3, 0);
    WaitFixedTimeSeconds(4);
    PlaySE(12030850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(12030850));
    HandleBossDefeatAndDisplayBanner(12030850, TextBannerType.LegendFelled);
    SetEventFlagID(12030850, ON);
    SetEventFlagID(9111, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61111, ON);
    }
    if (PlayerIsInOwnWorld()) {
        SetSpEffect(10000, 4280);
        SetSpEffect(10000, 4282);
    }
    WaitFixedTimeSeconds(9);
    PlayCutsceneToPlayerAndWarp(12030021, CutscenePlayMode.Skippable, 12032858, 12030000, 10000, 0, true);
    WaitFixedTimeRealFrames(1);
    ChangeWeather(Weather.None, -1, true);
    DisableAsset(12031850);
    DeleteAssetfollowingSFX(12031850, true);
    EnableCharacter(12030950);
    EnableAsset(12031950);
    DisableAsset(12031106);
    if (PlayerIsInOwnWorld()) {
        SetSpEffect(10000, 4281);
        SetSpEffect(10000, 4283);
    }
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(12032870, OFF);
});

$Event(12032860, Restart, function() {
    if (EventFlag(12030850)) {
        DisableCharacter(12030850);
        DisableCharacterCollision(12030850);
        ForceCharacterDeath(12030850, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12030850);
    DisableAsset(12031850);
    DeleteAssetfollowingSFX(12031850, true);
    DisableAsset(12031106);
    WaitFor(EventFlag(12032858));
    DeleteAssetfollowingSFX(12031850, true);
    EnableAsset(12031850);
    CreateAssetfollowingSFX(12031850, 101, 5);
    EnableAsset(12031106);
    SetNetworkconnectedEventFlagID(12030852, ON);
    EnableCharacterAI(12030850);
    SetNetworkUpdateRate(12030850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 12030850, 0, 904510000);
    ActivateMultiplayerdependantBuffs(12035850);
    SetLockcamSlotNumber(12, 3, 1);
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(12032860, ON);
    SetNetworkUpdateAuthority(12035850, AuthorityLevel.Forced);
    IssueBossRoomEntryNotification();
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(12032870, ON);
});

$Event(12032896, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(EventFlag(X0_4));
    WaitFor(!EventFlag(X0_4) && EventFlag(X4_4) && CharacterType(10000, TargetType.WhitePhantom));
    SetEventFlagID(X8_4, ON);
    RestartEvent();
});

$Event(12032899, Restart, function() {
    InitializeCommonEvent(0, 12032896, 12030850, 12032860, 12032856);
    InitializeCommonEvent(0, 9005822, 12030850, 451000, 12032860, 12032856, 12030852, 12032852, 0, 0);
});

//lightning curse setup
$Event(12032861, Restart, function() {
    if (!ThisEventSlot()) {
        DisableNetworkSync();
    }
    WaitFor(
        CharacterHasSpEffect(20000, 14898)
            && !CharacterHasSpEffect(20000, 14899)
            && EntityInRadiusOfEntity(12030850, 20000, 45, 1)
            && CharacterHasSpEffect(12030850, 14896)
            && !CharacterDead(12030850));
    WaitRandomTimeSeconds(0, 3);
    if (CharacterHasSpEffect(20000, 14898)) {
        SetSpEffect(20000, 14899);
        ShootBullet(12030850, 12030850, 900, 1131, 0, 0, 0);
        WaitRandomTimeSeconds(2, 5);
    }
L0:
    RestartEvent();
});

$Event(12032862, Restart, function() {
    WaitFor(CharacterHasSpEffect(12030850, 14875));
    SetLockcamSlotNumber(12, 3, 0);
    SetEventFlagID(12032852, ON);
    WaitFixedTimeSeconds(7);
    if (HPRatio(12030850) != 0) {
        SetLockcamSlotNumber(12, 3, 1);
    } else {
        SetLockcamSlotNumber(12, 3, 0);
    }
L0:
    RestartEvent();
});

$Event(12030700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4120)) {
            SetEventFlagID(12039152, OFF);
        }
    }
L10:
    GotoIf(L8, EventFlag(4128));
    GotoIf(L9, EventFlag(4129));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(AnyBatchEventFlags(4128, 4129));
    RestartEvent();
L8:
L9:
    GotoIf(L0, EventFlag(4120));
    GotoIf(L1, EventFlag(4121));
    GotoIf(L3, EventFlag(4123));
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
    Goto(L20);
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
    SetSpEffect(X0_4, 9628);
    Goto(L20);
L3:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!AnyBatchEventFlags(4128, 4129));
    RestartEvent();
});

$Event(12030701, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4130)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4130));
        RestartEvent();
    }
L9:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90104, false, false, false);
    EnableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4130));
    RestartEvent();
});

$Event(12030702, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4131)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4131));
        RestartEvent();
    }
L10:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90106, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4131));
    RestartEvent();
});

$Event(12030703, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4132)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        DisableAsset(X8_4);
        WaitFor(EventFlag(4132));
        RestartEvent();
    }
L11:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableAsset(X4_4);
    EnableAsset(X8_4);
    ForceAnimationPlayback(X0_4, 90106, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4132));
    RestartEvent();
});

$Event(12030704, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030800));
    WaitFor(EventFlag(12030800) && EventFlag(4127));
    SetEventFlagID(4138, ON);
});

$Event(12030705, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030850));
    WaitFor(EventFlag(12032870) && EventFlag(4130));
    SetEventFlagID(4138, ON);
});

$Event(12030706, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030850));
    WaitFor(EventFlag(12030850) && !EventFlag(12032870) && (EventFlag(4130) || EventFlag(4137)));
    SetEventFlagID(4138, ON);
});

$Event(12030707, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(12032720, OFF);
    WaitFor(EventFlag(12032720));
    ForceAnimationPlayback(10000, 90207, false, true, false);
    SetEventFlagID(12032721, ON);
    RestartEvent();
});

$Event(12030708, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(12032723, OFF);
    WaitFor(EventFlag(12032723));
    ForceAnimationPlayback(X0_4, 90208, false, true, false);
    SetEventFlagID(12032724, ON);
    RestartEvent();
});

$Event(12030709, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    BatchSetNetworkconnectedEventFlags(4120, 4124, OFF);
    SetNetworkconnectedEventFlagID(4120, ON);
    BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
    SetNetworkconnectedEventFlagID(4130, ON);
    WaitFor(!EventFlag(X0_4));
    BatchSetNetworkconnectedEventFlags(4120, 4137, OFF);
    SetEventFlagID(4138, ON);
    RestartEvent();
});

$Event(12030710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4060)) {
            SetEventFlagID(12039002, OFF);
        }
    }
L19:
    if (!EventFlag(4066)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4066));
        RestartEvent();
    }
L6:
    GotoIf(L0, EventFlag(4060));
    GotoIf(L1, EventFlag(4061));
    GotoIf(L3, EventFlag(4063));
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90102, false, false, false);
    SetCharacterTalkRange(X0_4, 100);
    Goto(L20);
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4066));
    RestartEvent();
});

$Event(12030720, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, 930013, false, false, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterCollision(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EnableCharacterImmortality(X0_4);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, 20025, false, false, false);
    DisableCharacterCollision(X0_4);
    WaitFixedTimeSeconds(10);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

//Miniboss Beacon/Seal Light Event
$Event(12030900, Restart, function(X0_4, X4_4, X8_4) {
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 12030394);
    IfConditionGroup(MAIN, PASS, OR_01);
    DeleteMapSFX(X4_4, false);
    DeleteMapSFX(X8_4, false);
});

//Miniboss BGM Event
$Event(12030901, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    DisableObjAct(X24_4, -1);
    //ChangeAssetEnableState(X12_4, Enabled);
    //CreateAssetfollowingSFX(X12_4, 101, 1511);
    //ChangeAssetEnableState(X16_4, Enabled);
    //CreateAssetfollowingSFX(X16_4, 101, 1511);
    WaitFixedTimeFrames(3);
    WaitFor(InArea(10000, X20_4, 1) && !InArea(10000, X28_4, 1));
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    WaitFor(
    CharacterAIState(X0_4, AIStateType.Combat) && !EventFlag(9000));
    //ChangeAssetEnableState(X8_4, Enabled);
    //CreateAssetfollowingSFX(X8_4, 101, 1511);
    GotoIf(L0, !EventFlag(9290));
    WaitFixedTimeSeconds(1);
L0:
    SetEventFlag(TargetEventFlagType.EventFlag, 9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
    !(CharacterAIState(X0_4, AIStateType.Combat))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else {
        GotoIf(S0, EventFlag(9000));
        WaitFixedTimeSeconds(1);
    }
S0:
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlag(TargetEventFlagType.EventFlag, 9290, OFF);
    RestartEvent();
});

//Miniboss Death Event (boss event flag, entity id, item rewards, unused, unused, unused, unused, item event flag, objact, music handler eventflag, boss start eventflag)
$Event(12030902, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterHPValue(X0_4) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(X0_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(X0_4));
    
    SetSpEffect(10000, 3450);
    HandleBossDefeatAndDisplayBanner(X0_4, TextBannerType.GreatEnemyFelled);
    EnableObjAct(X32_4, -1);
    
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(X28_4, ON);
    SetEventFlagID(X36_4, ON); //music handler eventflag
    SetEventFlagID(X40_4, OFF);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(X36_4, OFF); //music handler eventflag
//    ChangeAssetEnableState(X12_4, Disabled);
//    DeleteAssetfollowingSFX(X12_4, true);
//    ChangeAssetEnableState(X16_4, Disabled);
//    DeleteAssetfollowingSFX(X16_4, true);
//    ChangeAssetEnableState(X20_4, Disabled);
//    DeleteAssetfollowingSFX(X20_4, true);
//    if (EventFlag(X0_4)) {
//        ChangeCharacterEnableState(X4_4, Disabled);
//        ChangeCharacterCollisionState(X4_4, Disabled);
//        ChangeAssetEnableState(X12_4, Disabled);
//        DeleteAssetfollowingSFX(X12_4, true);
//        ChangeAssetEnableState(X16_4, Disabled);
//        DeleteAssetfollowingSFX(X16_4, true);
//        ChangeAssetEnableState(X20_4, Disabled);
//        DeleteAssetfollowingSFX(X20_4, true);
//        ForceCharacterDeath(X4_4, false);
//        EndIf(EventFlag(X24_4));
//        WaitFixedTimeSeconds(1);
//        AwardItemsIncludingClients(X8_4);
//        ClearSpEffect(10000, 40002);
//        ClearSpEffect(10000, 40012);
//        ClearSpEffect(10000, 40022);
//        ClearSpEffect(10000, 40032);
//        ClearSpEffect(10000, 40042);
//        ClearSpEffect(10000, 40052);
//        ClearSpEffect(10000, 40062);
//        ClearSpEffect(10000, 40072);
//        ClearSpEffect(10000, 40082);
//        ClearSpEffect(10000, 40092);
//        ClearSpEffect(10000, 40102);
//        ClearSpEffect(10000, 40112);
//        ClearSpEffect(10000, 40122);
//        SetEventFlag(TargetEventFlagType.EventFlag, 97491, OFF);
//        SetEventFlag(TargetEventFlagType.EventFlag, 97492, OFF);
//        SetEventFlag(TargetEventFlagType.EventFlag, 97493, OFF);
//        SetEventFlag(TargetEventFlagType.EventFlag, 97494, OFF);
//        SetEventFlag(TargetEventFlagType.EventFlag, 97495, OFF);
//        EndEvent();
//    }
//L0:
//    WaitFor(CharacterHPValue(X4_4) <= 0);
//    WaitFixedTimeSeconds(2);
//    PlaySE(X4_4, SoundType.SFX, 888880000);
//    WaitFor(CharacterDead(X4_4));
//    HandleBossDefeatAndDisplayBanner(X4_4, TextBannerType.GreatEnemyFelled);
//    SetEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
//    SetEventFlag(TargetEventFlagType.EventFlag, X28_4, ON);
//    ChangeAssetEnableState(X12_4, Disabled);
//    DeleteAssetfollowingSFX(X12_4, true);
//    ChangeAssetEnableState(X16_4, Disabled);
//    DeleteAssetfollowingSFX(X16_4, true);
//    ChangeAssetEnableState(X20_4, Disabled);
//    DeleteAssetfollowingSFX(X20_4, true);
//    SetSpEffect(10000, 3450);
//    RestartEvent();
});

//Lichdragon Seal Event
$Event(12030903, Restart, function() {
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030390, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030392, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030393, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030394, OFF);
    ChangeAssetEnableState(12032394, Disabled);
    DeleteAssetfollowingSFX(12032394, true);
    EndIf(EventFlag(12030394));
    ChangeAssetEnableState(12032394, Enabled);
    CreateAssetfollowingSFX(12032394, 101, 1510);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 12030390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 12030392);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 12030393);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(TargetEventFlagType.EventFlag, 12030394, ON);
    ChangeAssetEnableState(12032394, Disabled);
    DeleteAssetfollowingSFX(12032394, true);
    DisplayGenericDialog(408001, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
});

$Event(12030904, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    ChangeAssetEnableState(X4_4, Disabled);
    DeleteAssetfollowingSFX(X4_4, true);
    ChangeAssetEnableState(X8_4, Disabled);
    DeleteAssetfollowingSFX(X8_4, true);
    ChangeAssetEnableState(X12_4, Disabled);
    DeleteAssetfollowingSFX(X12_4, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X20_4) {
            flag &= EventFlag(X20_4);
    }
    flag &= !EventFlag(X0_4);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)
                && !EntityInRadiusOfEntity(10000, X8_4, 1, 1)
                && !EntityInRadiusOfEntity(10000, X12_4, 1, 1)));
    ChangeAssetEnableState(X4_4, Enabled);
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X4_4, 101, X16_4)
    ChangeAssetEnableState(X8_4, Enabled);
    DeleteAssetfollowingSFX(X8_4, true);
    CreateAssetfollowingSFX(X8_4, 101, X16_4)
    ChangeAssetEnableState(X12_4, Enabled);
    DeleteAssetfollowingSFX(X12_4, true);
    CreateAssetfollowingSFX(X12_4, 101, X16_4);
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(X0_4);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(X0_4);
    if (0 != X20_4) {
        flag2 &= EventFlag(X20_4);
    }
    flag2 &= !EventFlag(X0_4);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(X0_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, X4_4, 1, 1)
                && !EntityInRadiusOfEntity(10000, X8_4, 1, 1)
                && !EntityInRadiusOfEntity(10000, X12_4, 1, 1)));
    RestartEvent();
});

$Event(12030905, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    //WaitFixedTimeFrames(1);
    if (InArea(10000, X4_4)) {
        IssueShortWarpRequest(10000, TargetEntityType.Area, X8_4, -1);
        SetCharacterAIState(X0_4, Disabled);
    }
});

// Boss Defeat Logic + Wall Toggler
$Event(12030866, Restart, function() {
    DisableAsset(12030863);
    DisableAsset(12030864);
    DisableAsset(12030865);
    if (EventFlag(12030860)) {
        DisableCharacter(12030860);
        DisableCharacterCollision(12030860);
        ForceCharacterDeath(12030860, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12030860);
    EnableCharacterInvincibility(12030860);
    DisableCharacterHPBarDisplay(12030860);
    ForceAnimationPlayback(12030860, 30002, true, false, false);
    if (EventFlag(12030862)) {
        EnableAsset(12030863);
        EnableAsset(12030864);
        EnableAsset(12030865);
    }
    WaitFor(InArea(10000, 12030861));
    ForceAnimationPlayback(12030860, 20002, false, false, false);
L2:
    EnableCharacterAI(12030860);
    DisableCharacterInvincibility(12030860);
    SetNetworkUpdateRate(12030860, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(4.3);
    DisplayBossHealthBar(Enabled, 12030860, 0, 904640000);
    
    EndIf(!EventFlag(12030862));
    WaitFor(EventFlag(12030860));
    
    DisableAsset(12030863);
    DisableAsset(12030864);
    DisableAsset(12030865);
});
