// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.3
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    // Graces
    RegisterBonfire(71231, 12031951, 0, 0, 0, 5);
    RegisterBonfire(71232, 12031952, 0, 0, 0, 5);
    RegisterBonfire(71233, 12031953, 0, 0, 0, 5);
    RegisterBonfire(71234, 12031954, 0, 0, 0, 5);
    RegisterBonfire(71235, 12031955, 0, 0, 0, 5);
    
    //Float Values: enemyDeactivationDistance
    InitializeCommonEvent(0, 9005810, 12030850, 71230, 12030950, 12031950, 1084227584); //5
    
    // Fia's Champions
    SetEventFlagID(12030800, ON); // Fia's Champs defeated
    SetEventFlagID(12030801, ON); // Fia's Champs encountered
    //$InitializeEvent(0, 12032800);
    $InitializeEvent(0, 12032810);
    //$InitializeEvent(0, 12032811);
    //$InitializeEvent(0, 12032812);
    $InitializeEvent(0, 12032849); //Fortissax fogwall asset event handler initialization from this initialization
    //$InitializeEvent(0, 12032841);
    //ChangeCharacterEnableState(12030800, Disabled);
    //ChangeCharacterEnableState(12030810, Disabled);
    //ChangeCharacterEnableState(12030811, Disabled);
    //ChangeCharacterEnableState(12030812, Disabled);
    //ChangeCharacterEnableState(12030813, Disabled);
    //ChangeCharacterEnableState(12030814, Disabled);
    
    $InitializeEvent(0, 12032850);
    $InitializeEvent(0, 12032860);
    $InitializeEvent(0, 12032859);
    $InitializeEvent(0, 12032899);
    $InitializeEvent(0, 12032861);
    $InitializeEvent(0, 12032862);
    $InitializeEvent(0, 12032310, 12030240);
    $InitializeEvent(1, 12032310, 12030241);
    $InitializeEvent(2, 12032310, 12030242);
    $InitializeEvent(3, 12032310, 12030243);
    $InitializeEvent(4, 12032310, 12030244);
    $InitializeEvent(5, 12032310, 12030245);
    $InitializeEvent(6, 12032310, 12030246);
    $InitializeEvent(7, 12032310, 12030247);
    $InitializeEvent(8, 12032310, 12030248);
    $InitializeEvent(9, 12032310, 12030249);
    $InitializeEvent(10, 12032310, 12030250);
    $InitializeEvent(11, 12032310, 12030251);
    $InitializeEvent(12, 12032310, 12030252);
    $InitializeEvent(13, 12032310, 12030253);
    $InitializeEvent(14, 12032310, 12030254);
    $InitializeEvent(15, 12032310, 12030255);
    $InitializeEvent(16, 12032310, 12030256);
    $InitializeEvent(17, 12032310, 12030257);
    $InitializeEvent(0, 12032241, 12030242, 0);
    $InitializeEvent(1, 12032241, 12030243, 0);
    $InitializeEvent(2, 12032241, 12030244, 8);
    $InitializeEvent(3, 12032241, 12030245, 0);
    $InitializeEvent(4, 12032241, 12030246, 9);
    $InitializeEvent(5, 12032241, 12030247, 9);
    $InitializeEvent(6, 12032241, 12030248, 15.5);
    $InitializeEvent(7, 12032241, 12030249, 16);
    $InitializeEvent(8, 12032241, 12030250, 16);
    $InitializeEvent(9, 12032241, 12030251, 28);
    $InitializeEvent(10, 12032241, 12030252, 28);
    $InitializeEvent(11, 12032241, 12030253, 28);
    $InitializeEvent(12, 12032241, 12030254, 25);
    $InitializeEvent(13, 12032241, 12030255, 20);
    
    //Float Values: targetDistance
    InitializeCommonEvent(0, 90005261, 12030200, 12032200, 1112014848, 0, -1); //50
    InitializeCommonEvent(0, 90005261, 12030210, 12032200, 1112014848, 0, -1); //50
    InitializeCommonEvent(0, 90005261, 12030211, 12032200, 1112014848, 0, -1); //50
    InitializeCommonEvent(0, 90005261, 12030212, 12032200, 1112014848, 0, -1); //50
    InitializeCommonEvent(0, 90005261, 12030213, 12032200, 1112014848, 0, -1); //50
    InitializeCommonEvent(0, 90005261, 12030214, 12032200, 1112014848, 0, -1); //50
    
    //Float Values: timeSeconds
    InitializeCommonEvent(0, 90005300, 12030240, 12030240, 12030800, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030241, 12030241, 12030810, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030256, 12030256, 12030820, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030257, 12030257, 12030830, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030297, 12030297, 12030840, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030201, 12030201, 12030850, 1069547520, 0); //1.5
    
    InitializeCommonEvent(0, 90005251, 12030303, 8, 0, -1);
    
    //Float Values: timeSeconds
    InitializeCommonEvent(0, 90005300, 12030350, 12030350, 40660, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030354, 12030354, 40668, 1069547520, 0); //1.5
    InitializeCommonEvent(0, 90005300, 12030355, 12030355, 40670, 1069547520, 0); //1.5
    
    //InitializeCommonEvent(0, 90005860, 12030390, 0, 12030390, 1, 12030950, 0); // Siluria Boss Defeat
    InitializeCommonEvent(0, 90005870, 12030390, 902500600, 12);
    InitializeCommonEvent(0, 90005872, 12030390, 12, 0);
    
    //Float Values: timeSeconds
    InitializeCommonEvent(0, 90005300, 12030391, 12030391, 12030960, 1069547520, 0); //1.5
    
    InitializeCommonEvent(0, 90005250, 12030391, 12032391, 0, -1);
    $InitializeEvent(0, 12032504);
    $InitializeEvent(0, 12032509);
    
    //Float Values: targetDistance, timeSeconds
    InitializeCommonEvent(0, 90005251, 12030400, 1128792064, 1092616192, -1); //200, 10
    
    InitializeCommonEvent(0, 90005451, 12030400, 12036420);
    InitializeCommonEvent(0, 90005452, 12030400, 12030400);
    InitializeCommonEvent(0, 90005454, 12030400, 12032400, 12030400);
    InitializeCommonEvent(0, 90005456, 12030400, 12031410, 12031418, 12030400);
    InitializeCommonEvent(0, 90005458, 12030400, 12031401);
    
    //Float Values: timeSeconds
    InitializeCommonEvent(0, 90005453, 12030400, 12031420, 60, 0);
    InitializeCommonEvent(1, 90005453, 12030400, 12031421, 61, 1036831949); //0.1
    InitializeCommonEvent(0, 90005453, 12030400, 12031422, 62, 1045220557); //0.2
    InitializeCommonEvent(0, 90005453, 12030400, 12031423, 63, 1050253722); //0.3
    InitializeCommonEvent(0, 90005453, 12030400, 12031424, 64, 1053609165); //0.4
    InitializeCommonEvent(0, 90005453, 12030400, 12031425, 65, 1056964608); //0.5
    InitializeCommonEvent(0, 90005453, 12030400, 12031426, 66, 1058642330); //0.6
    InitializeCommonEvent(0, 90005453, 12030400, 12031427, 67, 1060320051); //0.7
    InitializeCommonEvent(0, 90005453, 12030400, 12031428, 68, 1061997773); //0.8
    InitializeCommonEvent(0, 90005453, 12030400, 12031429, 69, 1063675494); //0.9
    InitializeCommonEvent(0, 90005453, 12030400, 12031430, 70, 1065353216); //1
    InitializeCommonEvent(0, 90005453, 12030400, 12031431, 71, 1036831949); //0.1
    InitializeCommonEvent(0, 90005453, 12030400, 12031432, 72, 1045220557); //0.2
    InitializeCommonEvent(0, 90005453, 12030400, 12031433, 73, 1050253722); //0.3
    InitializeCommonEvent(0, 90005453, 12030400, 12031434, 74, 1053609165); //0.4
    InitializeCommonEvent(0, 90005453, 12030400, 12031435, 75, 1056964608); //0.5
    
    $InitializeEvent(0, 12032300, 12035380, 1);
    $InitializeEvent(0, 12032500);
    $InitializeEvent(0, 12030050);
    InitializeCommonEvent(0, 90005704, 12030710, 4061, 4060, 12039001, 3);
    InitializeCommonEvent(0, 90005703, 12030710, 4061, 4062, 12039001, 4061, 4060, 4063, -1);
    InitializeCommonEvent(0, 90005702, 12030710, 4063, 4060, 4063);
    $InitializeEvent(0, 12030710, 12030710);
    InitializeCommonEvent(0, 90005750, 12031720, 4350, 103410, 400348, 400348, 4067, 0);
    InitializeCommonEvent(0, 90005704, 12030702, 4121, 4120, 12039051, 3);
    InitializeCommonEvent(0, 90005703, 12030702, 4121, 4122, 12039051, 4121, 4120, 4123, -1);
    InitializeCommonEvent(0, 90005702, 12030702, 4123, 4120, 4123);
    $InitializeEvent(0, 12030700, 12030702);
    $InitializeEvent(0, 12030701, 12030700, 12031730);
    $InitializeEvent(0, 12030702, 12030703);
    $InitializeEvent(0, 12030703, 12030701, 12031701, 12031702);
    $InitializeEvent(0, 12030709, 12039179);
    $InitializeEvent(0, 12030704);
    $InitializeEvent(0, 12030705);
    $InitializeEvent(0, 12030706);
    InitializeCommonEvent(0, 90005740, 12032715, 12032716, 12032717, 12030702, 702, 12031731, 702, floatArg(0.4), 90305, 90307, -1, floatArg(1.3));
    InitializeCommonEvent(0, 90005741, 12032718, 12032719, 12032717, 12030702, 90330, 0, 90332, -1, floatArg(0.5));
    $InitializeEvent(0, 12030707);
    $InitializeEvent(0, 12030708, 12030702);
    InitializeCommonEvent(0, 90005750, 12031710, 6460, 103350, 9502, 9502, 4131, 806781);
    InitializeCommonEvent(0, 90005750, 12031710, 4110, 113300, 400339, 400339, 12039162, 0);
    InitializeCommonEvent(0, 90005733, 12032714);
    
    //Float Values: targetDistance, targetDistance
    InitializeCommonEvent(0, 90005740, 12032725, 12032726, 0, 12030700, 0, 0, 0, 1067869798, 90305, 90307, -1, 1067869798); //1.3, 1.3
    
    //Float Values:targetTimeSeconds
    InitializeCommonEvent(0, 90005752, 12031730, 200, 120, 1077936128); //3
    
    $InitializeEvent(0, 12030720, 12030725);
    
    // === Convergence Starts Here ===
    
    // Generic
    InitializeCommonEvent(0, 9006900, 12030400, 12031418, 12039050); // Weapon Duplication at the Walking Masoleum
    InitializeCommonEvent(0, 90005250, 12030103, 12030101, 0, -1); // Hostile NPC
    InitializeCommonEvent(0, 90005300, 12030103, 12030103, 108700, 0, 0);
    InitializeCommonEvent(0, 90005877, 12, 3, 0, 0, 12035900, 12035901, 12035902); // Ambient Music
    
    // Shortcuts
    InitializeEvent(0, 90005540, 12030520, 12031021, 12031020, 12032020, -1, 1, 2); // Gates
    InitializeEvent(1, 90005540, 12030530, 12031031, 12031030, 12032030, -1, 1, 2);
    InitializeCommonEvent(0, 90005520, 6001, 12031576, 12032576, 12032577); // Forced Ladder Down
    $InitializeEvent(0, 12032420); // Twin Found
    $InitializeEvent(0, 12032421); // Third Twin
    $InitializeEvent(0, 12032422); // Death Knight Black Stone Key
    $InitializeEvent(0, 12032450); // Seek my Twin Statue
    $InitializeEvent(0, 12032405); // Black Stone Gate
    
    //Erdtree Waygate
    InitializeCommonEvent(0, 9005810, 12030860, 12030000, 12030956, 12031956, 1084227584); // Erdtree Boss Grace, Float Value: enemyDeactivationDistance 5
    InitializeCommonEvent(0, 9005995, 12030750, 12030725, 12030860); // Portal
    InitializeCommonEvent(0, 90005876, 12030860, 12030861, 904640000, 920600); // Boss Start
    InitializeCommonEvent(0, 90005875, 12030860, 30640, 920600); // Boss Death
    InitializeCommonEvent(0, 90005890, 12030860, 12030862, 12030862); // Zone Handling
    InitializeCommonEvent(0, 90005891, 12030860, 12030861, 12030862); // Wall Handler
    $InitializeEvent(0, 12030866); // Boss Defeat Wall Disabler
    
    // Bridge
    $InitializeEvent(0, 12032060); // Collision
    InitializeCommonEvent(0, 9005999, 12032840); // Killboxes
    InitializeCommonEvent(1, 9005999, 12032841);
    InitializeCommonEvent(0, 900005610, 12031577, 100, 800, 0); //No Torrent floor fog
    InitializeCommonEvent(0, 900005610, 12031578, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 12031579, 100, 800, 0);
    
    // Lichdragon Seal Event
    $InitializeEvent(0, 12030903);
    
    // Miniboss Beacon/Seal Light Events
    $InitializeEvent(0, 12030900, 12030390, 12031390, 12032390);
    $InitializeEvent(1, 12030900, 12030392, 12031392, 12032392);
    $InitializeEvent(2, 12030900, 12030393, 12031393, 12032393);
    
    // Crucible Miniboss
    // 12030390 Crucible Miniboss
    // 12031390 Crucible Beacon
    // 12032390 Crucible Seal Light
    // 12033390 Crucible Fogwall
    // 12032810 Crucible Activation Zone
    InitializeEvent(0, 12030901, 12030390, 902500600, 12032814); // Boss Init
    InitializeEvent(0, 12030902, 12030390, 0, 0, 9285, -1); // Boss Death
    InitializeCommonEvent(0, 9005800, 12030390, 12033390, 12032814, 12032815, 12030390, 10000, 0, 0); // Boss Start
    InitializeCommonEvent(0, 9005801, 12030390, 12033390, 12032814, 12032815, 12032821, 10000); // Boss Start Seamless
    InitializeCommonEvent(0, 9005811, 12030390, 12033390, 1511, 0); // Fogwall Handler
    InitializeCommonEvent(0, 9005822, 12030390, 920200, 12032815, 12032821, 0, 0, 0, 0); // Music Handler
    InitializeCommonEvent(0, 98005309, 12030390, 12032814, 12033810); // Custom Playzone
    
    // Skeleton Miniboss
    // 12030392 Skeleton Miniboss
    // 12031392 Skeleton Beacon
    // 12032392 Skeleton Seal Light
    // 12033392 Skeleton Fogwall
    // 12032811 Skeleton Activation Zone
    InitializeEvent(1, 12030901, 12030392, 902500601, 12032811); // Boss Init
    InitializeEvent(1, 12030902, 12030392, 12035392, 12032816, 9286, -1); // Boss Death
    InitializeCommonEvent(0, 9005800, 12030392, 12033392, 12032811, 12032816, 12030392, 10000, 0, 0); // Boss Start
    InitializeCommonEvent(0, 9005801, 12030392, 12033392, 12032811, 12032816, 12032822, 10000); // Boss Start Seamless
    InitializeCommonEvent(0, 9005811, 12030392, 12033392, 1511, 0); // Fogwall Handler
    InitializeCommonEvent(0, 9005822, 12030392, 391400, 12032816, 12032822, 0, 0, 0, 0); // Music Handler
    InitializeCommonEvent(0, 98005309, 12030392, 12032811, 12033811); // Custom Playzone
    InitializeEvent(0, 12030904, 0); // Chest Closed
    
    // Death Knight Miniboss
    // 12030393 Death Knight Miniboss
    // 12031393 Death Knight Beacon
    // 12032393 Death Knight Seal Light
    // 12033393 Death Knight Fogwall 1
    // 12033394 Death Knight Fogwall 2
    // 12033395 Death Knight Fogwall 3
    // 12032812 Death Knight Activation Zone
    InitializeEvent(2, 12030901, 12030393, 902500603, 12032813); // Boss Init
    InitializeEvent(2, 12030902, 12030393, 0, 0, 0, 30780); // Boss Death
    InitializeCommonEvent(0, 9005800, 12030393, 12033393, 12032813, 12032817, 12030393, 10000, 0, 0); // Boss Start
    InitializeCommonEvent(0, 9005801, 12030393, 12033393, 12032813, 12032817, 12032823, 10000); // Boss Start Seamless
    InitializeCommonEvent(0, 9005811, 12030393, 12033393, 1511, 0); // Fogwalls
    InitializeCommonEvent(0, 9005811, 12030393, 12033394, 1511, 0);
    InitializeCommonEvent(0, 9005811, 12030393, 12033395, 1511, 0);
    InitializeCommonEvent(0, 9005822, 12030393, 940000, 12032817, 12032823, 0, 12030395, 0, 0); // Music Handler
    InitializeCommonEvent(0, 98005309, 12030393, 12032812, 12033812); // Custom Playzone
});

// プリコンストラクタ -- preconstructor
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
    //InitializeEvent(0, 12032820, 0); // Fia's Champions Online Stuff
    InitializeCommonEvent(0, 90005450, 12030400, 12031400, 12031410, 12031418);
});

// m12_03_00_00用初期フラグ設定 -- Initial flag setting for m12_03_00_00
$Event(12030050, Restart, function() {
    SetSpEffect(12030400, 12460); // Forced Sit down
    SetEventFlagID(12030400, ON); // Save sit down
    EndIf(ThisEventSlot());
    SetEventFlagID(12030401, ON);
    SetEventFlagID(12030402, OFF);
});

// Bridge Collision
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

// 歩く霊廟設定 -- walking mausoleum setting
$Event(12032400, Restart, function() {
    EndIf(ThisEventSlot());
    SetNetworkUpdateRate(12030400, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// Black Stone Gate
$Event(12032405, Restart, function() {
    if (EventFlag(12030564)) {
        ReproduceAssetAnimation(12031564, 0);
        EndEvent();
    }
    
    WaitFor(ActionButtonInArea(7320, 12031565) || ActionButtonInArea(7320, 12031566));
    
    if (!PlayerHasItem(ItemType.Goods, 8139) && InArea(10000, 12031575)) {
        DisplayGenericDialog(4018, PromptType.YESNO, NumberofOptions.NoButtons, 10000, 1);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
    
    if (InArea(10000, 12031575)) {
        IssueShortWarpRequest(10000, TargetEntityType.Asset, 12031564, 121);
        ForceAnimationPlayback(10000, 60000, false, false, true);
    } else {
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

// Twin Found
$Event(12032420, Restart, function() {
    GotoIf(S0, EventFlag(12030421));
    CreateAssetfollowingSFX(12031003, 200, 1501);
    CreateAssetfollowingSFX(12031004, 200, 1501);
    Goto(S1);
S0:
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
    
S1:
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

// Death Knight Black Stone Key
$Event(12032422, Restart, function() {
    WaitFor(CharacterDead(12030393));
    AwardItemLot(30650);
    EndEvent();
});

// Seek my Twin Statue
$Event(12032450, Restart, function() {
    EndIf(EventFlag(12030421));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 12031001));
    DisplayGenericDialog(4201, PromptType.OKCANCEL, NumberofOptions.OneButton, 12031001, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 王都へのワープ -- Warp to the capital
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
    //|| !EventFlag(182) // Two Greatrunes
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
        //|| !EventFlag(182) // Two Greatrunes
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
            //|| (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 182) // Two Greatrunes
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
    //GotoIf(L4, !EventFlag(182)); // Two Greatrunes
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

// 滝壺ダイブ -- Waterfall diving
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

// 石棺滝登り_滝下 -- Sarcophagus waterfall climbing_Takishita
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

// 霊廟守りイベント -- Mausoleum protection event
$Event(12032300, Restart, function(chrEntityId, timeSeconds) {
    if (EventFlag(12030400)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12030400));
    WaitFixedTimeSeconds(timeSeconds);
    ForceCharacterDeath(chrEntityId, false);
});

// 天井の蟻が落ちてくるイベント判定_XX -- Event determination where ants fall from the ceiling_XX
$Event(12032310, Restart, function(chrEntityId) {
    EndIf(EventFlag(12032240));
    SetEventFlagID(12032240, OFF);
    SetSpEffect(chrEntityId, 10949);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || InArea(10000, 12032240)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetEventFlagID(12032240, ON);
});

// 天井の蟻が落ちてくるイベント_XX -- Event where ants fall from the ceiling_XX
$Event(12032241, Restart, function(chrEntityId, timeSeconds) {
    SetCharacterTeamType(12035240, TeamType.Enemy);
    SetCharacterTeamType(12035241, TeamType.Enemy);
    SetCharacterTeamType(12035256, TeamType.Enemy);
    SetCharacterTeamType(12035257, TeamType.Enemy);
    SetCharacterTeamType(chrEntityId, TeamType.Enemy);
    SetSpEffect(chrEntityId, 2900);
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 30001, true, false, false);
    WaitFor(HasDamageType(chrEntityId, 0, DamageType.Unspecified) || EventFlag(12032240));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    WaitFixedTimeSeconds(timeSeconds);
    ForceAnimationPlayback(chrEntityId, 20001, true, false, false);
    EndEvent();
});

// ボス撃破 -- Defeat the boss
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

// ボス出現 -- Boss appears
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

// ボス_ロジェール参戦イベント -- Boss_Roger participation event
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

// ボス_３体同時登場イベント -- Boss_3 characters appearing at the same time event
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

// ボス_PCキャラデータコピー -- Boss_PC character data copy
$Event(12032820, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerInMap(12, 3, 0, 0));
    RequestCharacterDataFromOnlinePlayers(0, 3);
});

// ホストがボス部屋入場_地下迷宮王都版 -- Host enters the boss room_Underground Labyrinth Royal Capital Edition
$Event(12032830, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, timeSeconds, eventFlagId3, areaEntityId2) {
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (EventFlag(eventFlagId3)) {
        }
L0:
        if (areaEntityId2 != 0) {
            area = InArea(10000, areaEntityId2);
        }
        WaitFor((area && PlayerIsInOwnWorld()) || EventFlag(eventFlagId));
        GotoIf(L2, !PlayerIsInOwnWorld());
        if (!EventFlag(eventFlagId3)) {
            SendInvadingPhantomsHome(0);
        }
        RestartIf(EventFlag(eventFlagId));
        Goto(L1);
L3:
        GotoIf(L1, EventFlag(eventFlagId2));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, areaEntityId) || time)
                && PlayerIsInOwnWorld()
                && !EventFlag(eventFlagId))
                || EventFlag(eventFlagId));
        RestartIf(EventFlag(eventFlagId));
        RestartIf(time.Passed);
L1:
        GotoIf(L2, !PlayerIsInOwnWorld());
        IssueBossRoomEntryNotification();
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
L2:
        ActivateMultiplayerdependantBuffs(chrEntityId);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        EndIf(!PlayerIsInOwnWorld());
        EndEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, entityId));
    RotateCharacter(10000, areaEntityId, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
    WaitFixedTimeSeconds(timeSeconds);
});

// ボス_ゲストキャラを封牢の中へワープ -- Boss_Warp the guest character into the prison
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

// ボス_闇霊を強制送還 -- Boss_Forcibly repatriate dark spirits
$Event(12032841, Restart, function() {
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 12032807));
    SendInvadingPhantomsHome(0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ボス用白扉処理_地下迷宮王都版 -- Boss white door processing_underground labyrinth capital version
$Event(12032842, Restart, function(eventFlagId, assetEntityId, sfxId, eventFlagId2) {
    DisableNetworkSync();
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag &= EventFlag(eventFlagId2);
    }
    flag &= !EventFlag(eventFlagId);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    if (!PlayerIsInOwnWorld()) {
        EnableAsset(assetEntityId);
        DeleteAssetfollowingSFX(assetEntityId, true);
        CreateAssetfollowingSFX(assetEntityId, 101, sfxId);
    }
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag2 &= EventFlag(eventFlagId2);
    }
    flag2 &= !EventFlag(eventFlagId);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    RestartEvent();
});

// ボス_イベント起動 -- Boss_event activation
$Event(12032849, Restart, function() {
    //$InitializeEvent(0, 12032830, 12030800, 12031800, 12032800, 12032805, 12035800, 0, 12030801, 12032801);
    //$InitializeEvent(0, 12032840);
    $InitializeEvent(0, 12032842, 12030800, 12031800, 5, 12030801);
    //InitializeCommonEvent(0, 9005822, 12030800, 921100, 12032805, 12032806, 12032803, 0, 0, 0);
});

// 守護末ボス部屋ワープイベント -- Guardian end boss room warp event
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

// 本ボス撃破 -- Defeat the main boss
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

// 本ボス出現 -- Main boss appears
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

// 守護末用ゲストがボス部屋入場 -- Shugo end guest enters boss room
$Event(12032896, Restart, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && CharacterType(10000, TargetType.WhitePhantom));
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
});

// 本ボス_イベント起動 -- Main boss_event activation
$Event(12032899, Restart, function() {
    $InitializeEvent(0, 12032896, 12030850, 12032860, 12032856);
    InitializeCommonEvent(0, 9005822, 12030850, 451000, 12032860, 12032856, 12030852, 12032852, 0, 0);
});

// 守護末_自動ニト剣発動 -- Shugo End_Automatic Nito Sword Activation
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

// 守護末_ゴッドウィンアーツ発動時カメラ切り替え -- Shugosue_Camera switch when Godwin Arts is activated
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

// NPC322ユリア_NPC初期化イベント_死王子の死体近く -- NPC322 Yuria_NPC initialization event_near the dead prince's corpse
$Event(12030700, Restart, function(chrEntityId) {
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
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    WaitFor(AnyBatchEventFlags(4128, 4129));
    RestartEvent();
L8:
L9:
    GotoIf(L0, EventFlag(4120));
    GotoIf(L1, EventFlag(4121));
    GotoIf(L3, EventFlag(4123));
L0:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90103, false, false, false);
    Goto(L20);
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, 90103, false, false, false);
    SetSpEffect(chrEntityId, 9628);
    Goto(L20);
L3:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!AnyBatchEventFlags(4128, 4129));
    RestartEvent();
});

// NPC322ユリア_NPC初期化イベント_ボスワープOBJ化 -- NPC322 Yuria_NPC initialization event_Boss warp OBJ
$Event(12030701, Restart, function(chrEntityId, assetEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4130)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableAsset(assetEntityId);
        WaitFor(EventFlag(4130));
        RestartEvent();
    }
L9:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90104, false, false, false);
    EnableAsset(assetEntityId);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4130));
    RestartEvent();
});

// NPC322ユリア_NPC初期化イベント_死体通常版 -- NPC322 Yuria_NPC initialization event_corpse regular version
$Event(12030702, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4131)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(4131));
        RestartEvent();
    }
L10:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90106, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4131));
    RestartEvent();
});

// NPC322ユリア_NPC初期化イベント_死体ダニー版 -- NPC322 Yuria_NPC initialization event_Corpse Danny version
$Event(12030703, Restart, function(chrEntityId, assetEntityId, assetEntityId2) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(4132)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableAsset(assetEntityId);
        DisableAsset(assetEntityId2);
        WaitFor(EventFlag(4132));
        RestartEvent();
    }
L11:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EnableAsset(assetEntityId);
    EnableAsset(assetEntityId2);
    ForceAnimationPlayback(chrEntityId, 90106, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4132));
    RestartEvent();
});

// NPC322ユリア_同衾たち撃破後リアルタイム遷移 -- NPC322 Yuria_Real-time transition after defeating classmates
$Event(12030704, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030800));
    WaitFor(EventFlag(12030800) && EventFlag(4127));
    SetEventFlagID(4138, ON);
});

// NPC322ユリア_守護者の末裔戦リアルタイム遷移 -- NPC322 Yuria_Descendants of the Guardian Battle Real-time Transition
$Event(12030705, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030850));
    WaitFor(EventFlag(12032870) && EventFlag(4130));
    SetEventFlagID(4138, ON);
});

// NPC322ユリア_守護者の末裔撃破後リアルタイム遷移 -- NPC322 Yuria_Real-time transition after defeating the Guardian's Descendant
$Event(12030706, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(12030850));
    WaitFor(EventFlag(12030850) && !EventFlag(12032870) && (EventFlag(4130) || EventFlag(4137)));
    SetEventFlagID(4138, ON);
});

// NPC322ユリア_最後の強く抱く_PCアニメ -- NPC322 Yuria_last strong hug_PC anime
$Event(12030707, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(12032720, OFF);
    WaitFor(EventFlag(12032720));
    ForceAnimationPlayback(10000, 90207, false, true, false);
    SetEventFlagID(12032721, ON);
    RestartEvent();
});

// NPC322ユリア_最後の強く抱く_話者アニメ -- NPC322 Yuria_last strong hug_speaker animation
$Event(12030708, Restart, function(entityId) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(12032723, OFF);
    WaitFor(EventFlag(12032723));
    ForceAnimationPlayback(entityId, 90208, false, true, false);
    SetEventFlagID(12032724, ON);
    RestartEvent();
});

// NPC322ユリア_ボス戦デバッグ用フラグセットアップ -- NPC322 Yuria_Boss battle debugging flag setup
$Event(12030709, Restart, function(eventFlagId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    BatchSetNetworkconnectedEventFlags(4120, 4124, OFF);
    SetNetworkconnectedEventFlagID(4120, ON);
    BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
    SetNetworkconnectedEventFlagID(4130, ON);
    WaitFor(!EventFlag(eventFlagId));
    BatchSetNetworkconnectedEventFlags(4120, 4137, OFF);
    SetEventFlagID(4138, ON);
    RestartEvent();
});

// NPC319ダニー_NPC初期化イベント -- NPC319 Danny_NPC initialization event
$Event(12030710, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4060)) {
            SetEventFlagID(12039002, OFF);
        }
    }
L19:
    if (!EventFlag(4066)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(4066));
        RestartEvent();
    }
L6:
    GotoIf(L0, EventFlag(4060));
    GotoIf(L1, EventFlag(4061));
    GotoIf(L3, EventFlag(4063));
L0:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90102, false, false, false);
    SetCharacterTalkRange(chrEntityId, 100);
    Goto(L20);
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4066));
    RestartEvent();
});

// NPC101道標老婆_死亡遷移イベント_地下迷宮 -- NPC101 Signpost Old Woman_Death Transition Event_Underground Labyrinth
$Event(12030720, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(chrEntityId, 930013, false, false, false);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacterCollision(chrEntityId);
    EndIf(!PlayerIsInOwnWorld());
    EnableCharacterImmortality(chrEntityId);
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 20025, false, false, false);
    DisableCharacterCollision(chrEntityId);
    WaitFixedTimeSeconds(10);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
});

//Miniboss Beacon/Seal Light Event
$Event(12030900, Restart, function(eventFlagId, entityId, entityId2) {
    WaitFor(EventFlag(eventFlagId) || EventFlag(12030394));
    DeleteMapSFX(entityId, false);
    DeleteMapSFX(entityId2, false);
});

//Miniboss Start NEW (Entity/Flag, Text, Region)
$Event(12030901, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(X0_4);
    EnableCharacterInvincibility(X0_4);
    DisableCharacterCollision(X0_4);
    WaitFor(InArea(10000, X8_4));
L2:
    EnableCharacterAI(X0_4);
    DisableCharacterInvincibility(X0_4);
    EnableCharacterCollision(X0_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
});

//Miniboss Death Event - flag/entity, music handler eventflag, boss start eventflag)
$Event(12030902, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X0_4));
    WaitFor((CharacterHPValue(X0_4) <= 0) || (CharacterHasSpEffect(X0_4, 11785))); //Optional Logic Check for Blighted Nox Ancestor Divine Death 
    WaitFixedTimeSeconds(4);
    PlaySE(X0_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(X0_4));
    
    SetSpEffect(10000, 3450);
    HandleBossDefeatAndDisplayBanner(X0_4, TextBannerType.GreatEnemyFelled);
    AwardItemsIncludingClients(X16_4);
    
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(X4_4, ON); // Music handler eventflag
    SetEventFlagID(X12_4, ON); // Common AwardPlayerItem
    SetEventFlagID(X8_4, OFF);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(X4_4, OFF); // Music handler eventflag
});

// Lichdragon Seal Event
$Event(12030903, Default, function() {
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030390, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030392, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030393, OFF);
    //SetEventFlag(TargetEventFlagType.EventFlag, 12030394, OFF);
    CreateAssetfollowingSFX(12032394, 101, 1510); //Lichdragon Seal Wall SFX
    
    if (EventFlag(12030394)) {
        DeleteAssetfollowingSFX(12032394, true);
        DisableAsset(12032394);
        EndEvent()
    }
    
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(12032394, 101, 1510);
        SetThisEventSlot(ON);
    }
    
    WaitFor(EventFlag(12030390) && EventFlag(12030392) && EventFlag(12030393));
    SetEventFlagID(12030394, ON);
    DisableAsset(12032394);
    DeleteAssetfollowingSFX(12032394, true);
    DisplayGenericDialog(408001, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
});

// Skeleton Boss Chest Handler
$Event(12030904, Restart, function() {
    EndIf(EventFlag(12030392))
    DisableObjAct(12031675, -1); 
    WaitFor(EventFlag(12030392))
    EnableObjAct(12031675, -1);
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

//Death Knight Phase 2 Music Handler
$Event(40012811, Restart, function() {
    EndIf(EventFlag(12030393));
    WaitFor(HPRatio(12030393) <= 0.7);
    SetEventFlagID(12030395, ON);
});
