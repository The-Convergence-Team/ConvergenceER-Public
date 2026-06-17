// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(76966, 2049411950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2049410800, 30000, 20000, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2049410800, 905580601, 25);
    InitializeCommonEvent(0, 90005860, 2049410800, 0, 2049410800, 1, 30850, 0);
    InitializeCommonEvent(0, 90005734, 4265, 2048429222, 2049412710, 2049412710, 2048429222, -1);
    InitializeEvent(0, 2049410700, 2048429224, 4260, 4265, 2048429222);
    $InitializeEvent(0, 1084228502); // region door 1
    $InitializeEvent(0, 1084228503); // region door 2
    $InitializeEvent(0, 1084228504); // door 3
    //Lights turn on when in region
    InitializeEvent(0, 1084228505, 2049411003); // Light region 1
    InitializeEvent(0, 1084228505, 2049411004); // Light region 1
    InitializeEvent(0, 1084228505, 2049411005); // Light region 1
    InitializeEvent(0, 1084228505, 2049411006); // Light region 1
    InitializeEvent(0, 1084228505, 2049411007); // Light region 1
    InitializeEvent(0, 1084228505, 2049411008); // Light region 1
    
    
    RegisterBonfire(2049410000, 2049411951, 0, 0, 0, 5); //Middle site of grace
    //testing events
    InitializeEvent(0, 2049410946, 0);
    InitializeEvent(0, 2049410947, 0);
    InitializeEvent(0, 2049410948, 0);
    
    //RegisterLadders, DisableMapPart, DisableHit, EnableAssetInvulnerability
    $InitializeEvent(0, 2049412502);
    
    
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2049410850, 2049410851, 904810706, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2049410850, 30770, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2049410850, 2049410851, 2049410851); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2049410850, 2049410851, 2049410852); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2049410925, 2049411925, 2049410850);
    
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2049410850, 76966, 2049410950, 2049411950, 1084227584);
    
    //door1
    InitializeCommonEvent(0, 90005511, 2049418000, 1084221010, 1084223010, 99020, 0); // FIX!!!!
    InitializeCommonEvent(0, 90005512, 2049418000, 1084223011, 1084223012);
    
    InitializeCommonEvent(0, 90005650, 2049410667, 2049411667, 2049411668, 2049413668, 27115); // door - sideways
    InitializeCommonEvent(0, 90005651, 2049410667, 2049411667);
    
    
    // $InitializeEvent(0, 2049412500, 2049411550, 2049412550);
    // $InitializeEvent(1, 2049412500, 2049411551, 2049412551);
    // $InitializeEvent(2, 2049412500, 2049411552, 2049412552);
    //$InitializeEvent(3, 2049412500, 2049411553, 2049412553);
    //$InitializeEvent(4, 2049412500, 2049411554, 2049412554);
    //$InitializeEvent(5, 2049412500, 2049411555, 2049412555);
    
    //Weather and fog freeze
    InitializeEvent(0, 2049410822, 0);
    
    //shabibi inqui show up 1
    InitializeEvent(0, 2049412300, 0);
    
    //shabibi inqui show up 2
    InitializeEvent(0, 2049412301, 0);
    
    //shabibi 1 time kill handler 1
    InitializeEvent(0, 2049412302, 0);
    
     //shabibi 1 time kill handler 1
     InitializeEvent(0, 2049412303, 0);
     
     //shadow rune obtain sequence
     InitializeEvent(0, 2049413305, 2049410907);
     InitializeEvent(1, 2049413305, 2049410908);
     InitializeEvent(2, 2049413305, 2049410909);
     InitializeEvent(3, 2049413305, 2049410910);
     InitializeEvent(4, 2049413305, 2049410911);
     InitializeEvent(0, 2049413304, 2049410901);
     InitializeEvent(1, 2049413304, 2049410902);
     InitializeEvent(2, 2049413304, 2049410903);
     InitializeEvent(3, 2049413304, 2049410904);
     InitializeEvent(4, 2049413304, 2049410905);
     InitializeEvent(5, 2049413304, 2049410906);
     InitializeEvent(6, 2049413304, 2049410912);
     InitializeEvent(7, 2049413304, 2049410913);
     InitializeEvent(0, 2049413306, 2049410914);
     InitializeEvent(0, 2049413307, 0);
     InitializeEvent(0, 2049413309, 0);
     
     $InitializeEvent(0, 2049411500, 2049410110, 2049422550, 2049421550);
     $InitializeEvent(1, 2049411500, 2049410110, 2049422551, 2049421551);
     $InitializeEvent(2, 2049411500, 2049410110, 2049422552, 2049421552);
     $InitializeEvent(3, 2049411500, 2049410110, 2049422553, 2049421553);
     
     $InitializeEvent(4, 2049411500, 2049410111, 2049422560, 2049421560);
     $InitializeEvent(5, 2049411500, 2049410111, 2049422561, 2049421561);
     $InitializeEvent(6, 2049411500, 2049410111, 2049422562, 2049421562);
     $InitializeEvent(7, 2049411500, 2049410111, 2049422563, 2049421563);
     
    //Illusory Wall
    InitializeCommonEvent(0, 90005525, 2049410630, 2049411630);
    
    InitializeCommonEvent(0, 90005300, 15000395, 15000395, 108600, 0, 0); //NPC DEATH ITEM REWARD
    InitializeCommonEvent(0, 90005250, 2049420564, 2049422564, 0, -1); //npc Bender encounter
    InitializeCommonEvent(0, 20000345, 15004001, 15002002); // Collision Removal when in box
    InitializeCommonEvent(0, 20000348, 1084225010, 1084222000); //Assets appear while in octagon room
    InitializeCommonEvent(0, 20000347, 1084225001, 1084222001); //Assets disappear while in shit room 1
    InitializeCommonEvent(0, 20000347, 1084225002, 1084222002); //Assets disappear while in shit room 2
    InitializeCommonEvent(0, 20000347, 1084225003, 1084222003); //Assets disappear while in shit room 3
    InitializeCommonEvent(0, 20000348, 1084224004, 1084222004); //Assets never appear for enableassetinvuner.
    InitializeCommonEvent(0, 20000348, 1084225005, 1084222005); //Assets appear while in fallen house room
    InitializeCommonEvent(0, 20000348, 1084225006, 1084222006); //Assets appear while main brewery room
    InitializeCommonEvent(0, 20000348, 1084225007, 1084222007); //Assets appear while main brewery room TEST
    InitializeCommonEvent(0, 20000348, 1084225008, 1084222008); //Assets appear while in sub brewery room 2
    InitializeCommonEvent(0, 20000348, 1084225009, 1084222009); //Assets appear while in super secret loot room 1
    InitializeCommonEvent(0, 20000348, 1084225011, 1084222011); //Assets appear while in octagon room 2
    InitializeCommonEvent(0, 20000348, 1084225012, 1084222012); //Assets appear while in inq square 1
    InitializeCommonEvent(0, 20000347, 1084224013, 1084222005); //Assets disappear while in shit room 1
    InitializeCommonEvent(0, 20000348, 1084225014, 1084222014); //Assets appear when in sewer
    InitializeCommonEvent(0, 20000347, 1084225015, 1084222014); //Assets disappear when in sewer
    InitializeCommonEvent(0, 20000348, 1084225016, 1084222016); //Assets load in when up top of clinic 1
    InitializeCommonEvent(0, 20000348, 1084225017, 1084222017); //Assets top ceiling appear when in clinic 1
    InitializeCommonEvent(0, 20000348, 1084225018, 1084222018); //Assets load in when near clinic 1, low LOD. normal route
    InitializeCommonEvent(0, 20000348, 1084225019, 1084222019); //Assets load in when near clinic 1, High LOD. normal route
    InitializeCommonEvent(0, 20000348, 1084225020, 1084222020); //Assets load for upper route after bridge
    InitializeCommonEvent(0, 20000348, 1084225021, 1084222021); //Assets load for upper route food area
    InitializeCommonEvent(0, 20000348, 1084225022, 1084222022); //Assets load for Bridge over water 2
    InitializeCommonEvent(0, 20000348, 1084225024, 1084222024); //Assets load for Bridge over water 4
    InitializeCommonEvent(0, 20000348, 1084225025, 1084222025); //Assets load for Bridge over water 4
    InitializeCommonEvent(0, 20000348, 1084225026, 1084222026); //Assets load for Bridge over water 6
    InitializeCommonEvent(0, 20000348, 1084225027, 1084222027); //Assets load for Bridge over water 6
    InitializeCommonEvent(0, 20000348, 1084225028, 1084222028); //Assets load for Bridge over water 7
    InitializeCommonEvent(0, 20000348, 1084225029, 1084222029); //Assets load for area after upper indoor room
    InitializeCommonEvent(0, 20000348, 1084225030, 1084222030); //Assets load for tower after upper indoor room
    InitializeCommonEvent(0, 20000348, 1084225031, 1084222031); //Assets load for tower after upper indoor room
    InitializeCommonEvent(0, 20000348, 1084225032, 1084222032); //Assets load for tower after upper indoor room
    InitializeCommonEvent(0, 20000348, 1084225033, 1084222033); //Assets load for garden area after indoor room - plants
    InitializeCommonEvent(0, 20000348, 1084225034, 1084222034); //Assets load for garden area after indoor room - tower 2
    InitializeCommonEvent(0, 20000348, 1084225035, 1084222035); //Assets load for garden area after indoor room - tower 2 -2
    InitializeCommonEvent(0, 20000348, 1084225036, 1084222036); //Assets load for garden area after indoor room - tower 2 -3
    InitializeCommonEvent(0, 20000348, 1084225037, 1084222037);//Assets load for GATED COMMUNITY 2
    InitializeCommonEvent(0, 20000348, 1084225038, 1084222038); //Assets load for GATED COMMUNITY 3
    InitializeCommonEvent(0, 20000348, 1084225039, 1084222039); //Assets load for shadow rune location
    InitializeCommonEvent(0, 20000348, 1084225040, 1084222040); //Assets load for canal 2
    InitializeCommonEvent(0, 20000348, 1084225041, 1084222041); //Assets load for canal 2 - 1
    InitializeCommonEvent(0, 20000348, 1084225043, 1084222043); //Assets load for broken building finaL square
    InitializeCommonEvent(0, 20000348, 1084225044, 1084222044); //Assets load very long range LOD
    InitializeCommonEvent(0, 20000348, 1084225045, 1084222045); //Assets load sculpture LOD
    InitializeCommonEvent(0, 20000348, 1084225046, 1084222046); //Assets load pot room
    InitializeCommonEvent(0, 20000348, 1084225047, 1084222047); //Assets load turn room
    InitializeCommonEvent(0, 20000348, 1084225048, 1084222048); //Assets load broken roof 1
    InitializeCommonEvent(0, 20000348, 1084225049, 1084222049); //Assets load broken roof 2
    InitializeCommonEvent(0, 20000348, 1084225050, 1084222050); //Tower LOD 1
    InitializeCommonEvent(0, 20000348, 1084225051, 1084222051); //Tower LOD 1
    InitializeCommonEvent(0, 20000348, 1084225052, 1084222052); //Main square after covered bridge LOD
    InitializeCommonEvent(0, 20000347, 1084225053, 1084222053); //Main square buoldjgfnf LOD low LOD
    InitializeCommonEvent(0, 20000348, 1084225054, 1084222053); //Main square buoldjgfnf LOD low LOD
    InitializeCommonEvent(0, 20000348, 1084225055, 1084222055); //Main square buoldjgfnf LOD low LOD
    InitializeCommonEvent(0, 20000348, 1084225056, 1084222056); //Main enterance tower 1 LOD low LOD
    InitializeCommonEvent(0, 20000348, 1084225057, 1084222057); //side path fron facing 1
    InitializeCommonEvent(0, 20000348, 1084225058, 1084222058); //secondary square after covered bridge
    InitializeCommonEvent(0, 20000348, 1084225059, 1084222059); //first area after covered bridge - Low LOD
    InitializeCommonEvent(0, 20000348, 1084225060, 1084222060); //firelink referance 1
    InitializeCommonEvent(0, 20000348, 1084225061, 1084222061); //firelink referance 2
    InitializeCommonEvent(0, 20000348, 1084225062, 1084222062) ;//fallen tower long LOD load 1
    InitializeCommonEvent(0, 20000348, 1084225063, 1084222063); //fallen tower long LOD load 2
    InitializeCommonEvent(0, 20000348, 1084225064, 1084222064); //main area long LOD load 1
    InitializeCommonEvent(0, 20000348, 1084225065, 1084222065) ;//candle area load 1
    InitializeCommonEvent(0, 20000348, 1084225066, 1084222066) ;//candle area load 1
    InitializeCommonEvent(0, 20000348, 1084225067, 1084222067); //i'm going to stop writing these in
    InitializeCommonEvent(0, 20000348, 1084225068, 1084222068);
    InitializeCommonEvent(0, 20000348, 1084225069, 1084222069);
    InitializeCommonEvent(0, 20000348, 1084225070, 1084222070);
    InitializeCommonEvent(0, 20000348, 1084225071, 1084222071);
    InitializeCommonEvent(0, 20000348, 1084225072, 1084222072);
    InitializeCommonEvent(0, 20000348, 1084225073, 1084222073);
    InitializeCommonEvent(0, 20000348, 1084225074, 1084222074);
    InitializeCommonEvent(0, 20000348, 1084225075, 1084222075);
    InitializeCommonEvent(0, 20000348, 1084225076, 1084222076);
    InitializeCommonEvent(0, 20000348, 1084225077, 1084222077);
    InitializeCommonEvent(0, 20000348, 1084225078, 1084222078);
    InitializeCommonEvent(0, 20000348, 1084225079, 1084222079);
    InitializeCommonEvent(0, 20000348, 1084225080, 1084222080);
    InitializeCommonEvent(0, 20000349, 1084225081, 1084222081);
    SetNetworkUpdateRate(2149411100, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411101, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411102, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411103, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411104, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411105, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411106, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411107, true, CharacterUpdateFrequency.AtLeastEvery2Frames);//
    SetNetworkUpdateRate(2149411109, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411720, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411719, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411718, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411722, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411721, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049411730, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411110, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2149411111, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2049420564, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    

  
    
    InitializeCommonEvent(0, 90005250, 2049411700, 2049412701, 0,2003001); // Enemy Ambush 1
    InitializeCommonEvent(0, 90005250, 2049411701, 2049412703, 1,-1); // Enemy Ambush 2
    InitializeCommonEvent(0, 90005250, 2049411702, 2049412703, 1,3033); // Enemy Ambush 2.01
    InitializeCommonEvent(0, 90005250, 2049411703, 2049412704, 1,-1); // Enemy Ambush 3
    InitializeCommonEvent(0, 90005250, 2049411704, 2049412704, 1,3021); // Enemy Ambush 4.01
    InitializeCommonEvent(0, 90005251, 2049411705, 5, 1,-1); // Enemy 5
    InitializeCommonEvent(0, 90005251, 2049411706, 5, 1,-1); // Enemy 5.01
    InitializeCommonEvent(0, 90005271, 2049411707, 0,-1); // Enemy 6
    InitializeCommonEvent(0, 90005271, 2049411708, 0,-1); // Enemy 6
    InitializeCommonEvent(0, 90005271, 2049411709, 0,-1); // Enemy 6
    InitializeCommonEvent(0, 90005250, 2049411710, 2049412705, 0,-1); // Enemy Ambush 7
    InitializeCommonEvent(0, 90005250, 2049411711, 2049412705, 0,2003001); // Enemy Ambush 7.01
    InitializeCommonEvent(0, 90005250, 2049411712, 2049412706, 0, -1); // Enemy Ambush 7.01
    InitializeCommonEvent(0, 90005271, 2049411713, 0,-1); // Enemy 8
    InitializeCommonEvent(0, 90005271, 2049411714, 0,-1); // Enemy 8
    InitializeCommonEvent(0, 90005271, 2049411715, 0,-1); // Enemy 8
    InitializeCommonEvent(0, 90005271, 2049411716, 0,-1); // Enemy 8
    InitializeCommonEvent(0, 90005250, 2049411717, 2049412707, 0, -1); // Enemy Ambush 9
    InitializeCommonEvent(0, 90005250, 2049411718, 2049412708, 0, -1); // Enemy Ambush 10
    InitializeCommonEvent(0, 90005250, 2049411719, 2049412708, 0, -1); // Enemy Ambush 10
    InitializeCommonEvent(0, 90005250, 2049411720, 2049412708, 0, -1); // Enemy Ambush 10
    InitializeCommonEvent(0, 90005250, 2049411721, 2049412709, 0, -1); // Enemy Ambush 11
    InitializeCommonEvent(0, 90005250, 2049411722, 2049412709, 0, -1); // Enemy Ambush 11
    InitializeCommonEvent(0, 90005250, 2049411723, 2049412714, 0, -1); // Enemy Ambush 12
    InitializeCommonEvent(0, 90005250, 2049411724, 2049412711, 0, 3036); // Enemy Ambush 13
    InitializeCommonEvent(0, 90005250, 2049411725, 2049412712, 0, 3036); // Enemy Ambush 14
    InitializeCommonEvent(0, 90005250, 2049411726, 2049412715, 0, -1); // Enemy Ambush 15
    InitializeCommonEvent(0, 90005250, 2049411727, 2049412716, 0, -1); // Enemy Ambush 15
   
    
});
//InitializeCommonEvent(0, 90005540, 1084228502, 1084221502, 1084221503, 1084223502, 464009, 12, 20); //bookshelf move 0, event, 8xxx (Not used I think), bookshelf, lever, obj act, unk,unk,unk

$Event(1084228502, Default, function() {
    if (EventFlag(2049418503)) {        
        ReproduceAssetAnimation(2049411502, 20);
        EndEvent();
    }

    WaitFor(InArea(20000, 2049412503));    
    ForceAnimationPlayback(2049411502, 12, false, false, false);
    SetEventFlagID(2049418503, ON); //Movable door
});

$Event(1084228503, Default, function() {
    if (EventFlag(2049418504)) {        
        ReproduceAssetAnimation(2049411503, 1);
        EndEvent();
    }

    WaitFor(InArea(20000, 2049412504));    
    ForceAnimationPlayback(2049411503, 1, false, false, false);
    SetEventFlagID(2049418504, ON); //Movable door
});
$Event(1084228505, Default, function(X0_4) {
    DisableNetworkSync();
    WaitFor(InArea(10000, 2049412550));
    //CreateAssetfollowingSFX(X0_4, -1, 828666);
    SpawnOneshotSFX(TargetEntityType.Asset, X0_4, -1, 828666);
    EndEvent(); //light up
});
$Event(1084228504, Default, function() {
    InitializeCommonEvent(0, 90005650, 2049418001, 2049411001, 2049411002, 2049418002, 219030);
    InitializeCommonEvent(0, 90005651, 2049418001, 2049411001);
}); // lever door
$Event(2049412200, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011451) && CharacterHasSpEffect(X0_4, 20011450));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(X0_4, X4_4);
    ClearSpEffect(X0_4, 20011450);
    RestartEvent();
});

$Event(2049412201, Restart, function(X0_4) {
    WaitFor(
        !CharacterHasSpEffect(X0_4, 20011450) && CharacterRatioAIState(X0_4, AIStateType.Normal));
    SetSpEffect(X0_4, 20011450);
    ClearSpEffect(X0_4, 20011452);
    RestartEvent();
});

$Event(2049412202, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011453) || CharacterHasSpEffect(X0_4, 20011451));
    if (!CharacterHasSpEffect(X0_4, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049412203, Restart, function(X0_4) {
    chrSp |= CharacterAIState(X0_4, AIStateType.PassiveAlert)
        || CharacterAIState(X0_4, AIStateType.ActiveAlert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(chrSp);
    chr = CharacterAIState(X0_4, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(X0_4, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(X0_4, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(X0_4, 20011458);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(X0_4, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(X0_4, 20011462);
    }
    Goto(L20);
L1:
    SetSpEffect(X0_4, 20011459);
    Goto(L20);
L2:
    SetSpEffect(X0_4, 20011460);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(X0_4, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(X0_4, 20011462);
    }
    Goto(L20);
L20:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2049410700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlagID(X0_4, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4) || !EventFlag(X8_4));
    WaitFor(EventFlag(X4_4) && EventFlag(X8_4) && EventFlag(X12_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X12_4));
    RestartEvent();
});

$Event(2049410822, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(20000, 2049412822));
    ChangeWeather(Weather.HeavyFog, -1, false); // Also try Weather.WindyFog and Weather.HeavyFog, also try -1 duration
    SetCurrentTime(20, 0, 0, false, true, false, 0, 0, 0);
    FreezeTime(true);
    WaitFor(!InArea(20000, 2049412822));
    ChangeWeather(Weather.HeavyFog, 1, false); // Sets duration to 1 so weather can be based on location defaults 
    FreezeTime(false);
    RestartEvent();
});
//$Event(2049412500, Restart, function(entityId, areaEntityId) { //dings not working
    
    //  WaitFor(InArea(20000, areaEntityId));
    //  WaitFixedTimeSeconds(0.1);
    // PlaySE(entityId, SoundType.EnvironmentalSound, 610200888);
    // SpawnOneshotSFX(TargetEntityType.Asset, entityId, 100, 861221);
    // TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    // WaitFixedTimeSeconds(1.5);
    // TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    // WaitFixedTimeSeconds(100);
    //  RestartEvent();
 //});
 $Event(2049411500, Restart, function(enemyID, areaID, bushID) {
    if (!ThisEventSlot())
    {
        SpawnOneshotSFX(TargetEntityType.Character, enemyID, 900, 652815);
        DisableCharacter(enemyID);
        WaitFor(InArea(10000, areaID) && !ThisEventSlot());
        SetThisEventSlot(ON);
        EnableCharacter(enemyID);
        SpawnOneshotSFX(TargetEntityType.Character, enemyID, 900, 652815);
        PlaySE(bushID, SoundType.EnvironmentalSound, 610200888);
        SpawnOneshotSFX(TargetEntityType.Asset, bushID, 100, 861221);
        TriggerAISound(8000, areaID, TargetEntityType.Area);
        WaitFor(ElapsedSeconds(10) && !CharacterHasSpEffect(enemyID, 100630))
        SetThisEventSlot(OFF);
        RestartEvent();
    }
    else
    {
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
});
 
$Event(2049410946, Restart, function() {
    //vfx for frenzy eye over horned shaman
    DisableCharacter(2049411900);
    EndIf(EventFlag(2049410245));
    
    WaitFor(EntityInRadiusOfEntity(10000, 2049410900, 45, 1))
    CreateAssetfollowingSFX(2049410900, 100, 527061);
    SpawnOneshotSFX(TargetEntityType.Asset, 2049410900, -1, 652815);
    EnableCharacter(2049411900);
    WaitFixedTimeSeconds(3);
    WaitFor(!EntityInRadiusOfEntity(10000, 2049410900, 45, 1))
    EndIf(CharacterDead(2049410245));
    DeleteAssetfollowingSFX(2049410900, false);
    SpawnOneshotSFX(TargetEntityType.Asset, 2049410900, -1, 652815);
    DisableCharacter(2049410900);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Tower Priest one time kill
$Event(2049410947, Restart, function() {
    //vfx for frenzy eye over horned shaman
    DisableCharacter(2049410245);
    EndIf(EventFlag(2049410245));
    EnableCharacter(2049410245);
    WaitFor(CharacterRatioHPRatio(2049410245) < 0.01);
    DeleteAssetfollowingSFX(2049410900, false);
    SpawnOneshotSFX(TargetEntityType.Asset, 2049410900, -1, 652815);
    DisableCharacter(2049411900);
    AwardItemLot(2049410700);
    SetEventFlagID(2049410245, ON);
    EndEvent();
});
// POT BOI
$Event(2049410948, Restart, function() {
    //vfx for frenzy eye over horned shaman
    DisableCharacter(2049410250);
    EndIf(EventFlag(2049410250));
    EnableCharacter(2049410250);
    WaitFor(CharacterDead(2049410250));
    AwardItemLot(2049410710);
    SetEventFlagID(2049410250, ON);
    EndEvent();
});

//Inquisitors show up after shabibi 1
$Event(2049412300, Restart, function() {
    DisableCharacter(2049415421);
    EndIf(!EventFlag(2049418850));
    EnableCharacter(2049415421);

});

//Inquisitors show up after shabibi 2
$Event(2049412301, Restart, function() {
    DisableCharacter(2049415422);
    EndIf(!EventFlag(2049418851));
    EnableCharacter(2049415422);

});
 // shabibi 1 
 $Event(2049412302, Restart, function() {
     if (EventFlag(2049410001)) {
         DisableCharacter(2049411730);     
        SetEventFlagID(2049418850, ON);
        EndEvent();
    }
    WaitFor(CharacterDead(2049411730));
    AwardItemLot(2049410680);
    SetEventFlagID(2049410001, ON);
});
 // Shabibi 2
 $Event(2049412303, Restart, function() {
     if (EventFlag(2049410002)) {
         DisableCharacter(2049411731);     
         SetEventFlagID(2049418851, ON);
        EndEvent();
    }
    WaitFor(CharacterDead(2049411731));
    AwardItemLot(2049410690);
    SetEventFlagID(2049410002, ON);
});
// Shadow Rune Fire
$Event(2049413304, Restart, function(X0_4) {
    EndIf(EventFlag(2049417500));
    WaitFor(EventFlag(2049417500));
    WaitFixedTimeSeconds(1); 
    SpawnMapSFX(X0_4);
    WaitRandomTimeSeconds(7, 10);
    DeleteMapSFX(X0_4, true);
    EndEvent();
});    
$Event(2049413305, Restart, function(X0_4) { //Shadow Rune Glow
    EndIf(EventFlag(2049417500));
    WaitFor(EventFlag(2049417500));
    SpawnMapSFX(X0_4);
    WaitFixedTimeSeconds(1);
    DeleteMapSFX(X0_4, true);
    EndEvent();
});  
$Event(2049413306, Restart, function(X0_4) { //Shadow Rune boom
    EndIf(EventFlag(2049417500));
    WaitFor(EventFlag(2049417500));
    WaitFixedTimeSeconds(1); 
    SpawnMapSFX(X0_4);
    EndEvent();
});  
$Event(2049413307, Restart, function(X0_4) { //Bullet Shoot
    EndIf(EventFlag(2049417500));
    WaitFor(EventFlag(2049417500));
    WaitFixedTimeSeconds(1); 
    CreateBulletOwner(2049411915);
    ShootBullet(2049411915,2049410914,-1, 90,0,0,0);
    EndEvent();
}); 

//RegisterLadder, DisableMapPart, DisableHit, EnableAssetInvulnerability
$Event(2049412502, Default, function() {
    //RegisterLadder
    RegisterLadder(1084220001, 1084220002, 1084221001);
    RegisterLadder(1084220003, 1084220004, 1084221002);
    RegisterLadder(1084220005, 1084220006, 1084221003);
    RegisterLadder(1084220007, 1084220008, 1084221004);
    RegisterLadder(1084220009, 1084220010, 1084221005);
    RegisterLadder(1084220011, 1084220012, 1084221006);
    RegisterLadder(1084220013, 1084220014, 1084221007);
    RegisterLadder(1084220015, 1084220016, 1084221008);
    RegisterLadder(1084220017, 1084220018, 1084221009);
    
    //DisableMapPart
    // Staircase Stuff
    DisableMapPart(1084220585);
    DisableMapPart(1084220586);
    DisableMapPart(1084220587);
    DisableMapPart(1084220588);
    DisableMapPart(1084220589);
    DisableMapPart(1084220598);
    DisableMapPart(1084220599);
    DisableMapPart(1084220600);
    DisableMapPart(1084220601);
    DisableMapPart(1084220004);
    // RegularStuff
    DisableMapPart(1084220596);
    DisableMapPart(1084220597);
    DisableMapPart(1084220602);
    DisableMapPart(1084220603);
    DisableMapPart(1084220604);
    DisableMapPart(1084220606);
    DisableMapPart(1084220605);
    DisableMapPart(1084220607);
    DisableMapPart(1084220608);
    DisableMapPart(1084220609);
    DisableMapPart(1084220624);
    DisableMapPart(1084220625);
    DisableMapPart(1084220626);
    DisableMapPart(1084220627);
    DisableMapPart(1084220628);
    DisableMapPart(1084220629); // MANOR DOOR DONE
    DisableMapPart(1084220630);
    DisableMapPart(2049410602);
    DisableMapPart(2049410603);
    DisableHit(2049410604);
    DisableMapPart(2049410632);
    DisableMapPart(2049410633);
    DisableMapPart(2049410639); // MAUSOLEUM
    DisableHit(2049410641);
    DisableMapPart(2049410642);
    DisableMapPart(2049410643); // STAIRS
    DisableMapPart(2049410644); // BALLROOM COLLISION
    DisableMapPart(2049410645);
    DisableMapPart(2049410646); // STAIRS
    DisableMapPart(2049410660); // tower collision
    DisableMapPart(2049410661); 
    DisableMapPart(2049410662); 
    DisableMapPart(2049410663); 
    DisableMapPart(2049410664);
    DisableMapPart(2049410666);
    DisableMapPart(2049410668); // more tower coll
    DisableMapPart(2049410669);
    DisableMapPart(2049410670);
    DisableMapPart(2049410671);
    DisableMapPart(2049410672);
    DisableMapPart(2049410673);
    DisableMapPart(2049410674);
    DisableMapPart(2049410675);
    DisableMapPart(2049410676);
    DisableMapPart(2049410677);
    DisableMapPart(2049410681); // even more wall coll
    DisableMapPart(2049410682);
    DisableMapPart(2049410683);
    DisableMapPart(2049410684);
    DisableMapPart(2049410685); // I hate myself, 
    DisableMapPart(2049410686);
    DisableMapPart(2049410687);
    DisableMapPart(2049410688); // free
    DisableMapPart(2049410689);
    DisableMapPart(2049410690);
    DisableMapPart(2049410691);
    DisableMapPart(2049410692);
    DisableMapPart(2049410693);
    DisableMapPart(2049410694);
    DisableMapPart(2049410695);
    DisableMapPart(2049410696);
    DisableMapPart(2049410697);
    DisableMapPart(2049410698);
    DisableMapPart(2049410699);
    DisableMapPart(2049410700);
    DisableMapPart(2049410701);
    DisableMapPart(2049410702);
    DisableMapPart(2049410703);
    DisableMapPart(2049410704); // true - done
    DisableMapPart(2049410705); // ballroom floor
    DisableMapPart(2049410706);
    DisableMapPart(2049410707); // Broken Elevator Coll
    DisableMapPart(2049410708);
    DisableMapPart(2049410709);
    DisableMapPart(2049410710); // Dirt
    DisableMapPart(2049410711);
    DisableMapPart(2049410712);
    DisableMapPart(2049410713);
    DisableMapPart(2049410714);
    DisableMapPart(2049410715);
    DisableMapPart(2049410716);
    DisableMapPart(2049410717);
    DisableMapPart(2049410718);
    DisableMapPart(2049410719);
    DisableMapPart(2049410720);
    DisableMapPart(2049410722);
    DisableMapPart(2049410724);
    DisableMapPart(2049410725);
    DisableMapPart(2049410726);
    DisableMapPart(2049410731);
    DisableMapPart(2049410732);
    DisableMapPart(2049410733);
    DisableMapPart(2049410744);
    DisableMapPart(2049410745);
    DisableMapPart(2049410746);
    DisableMapPart(2049410747);
    DisableMapPart(2049410748);
    DisableMapPart(2049410751);
    DisableMapPart(2049410752);
    DisableMapPart(2049410755);
    DisableMapPart(2049410756);
    DisableMapPart(2049410757);
    DisableMapPart(2049410758); // wino
    DisableMapPart(2049410759);
    DisableMapPart(2049410760);
    DisableMapPart(2049410761);
    DisableMapPart(2049410762);
    DisableMapPart(2049410763);
    DisableMapPart(2049410764);
    DisableMapPart(2049410765);
    DisableMapPart(2049410766);
    DisableMapPart(2049410767);
    DisableMapPart(2049410768);
    DisableMapPart(2049410769);
    DisableMapPart(2049410770); // stage
    DisableMapPart(2049410778);
    DisableMapPart(2049410779); // secret room walls
    DisableMapPart(2049410780); // roof 2 coll 1
    DisableMapPart(2049410781); // roof 2 coll 1
    DisableMapPart(2049410782);
    DisableMapPart(2049410783); 
    DisableMapPart(2049410784);
    DisableMapPart(2049410785);
    DisableMapPart(2049410786);
    DisableMapPart(2049410791); // Water steps
    DisableMapPart(2049410801); 
    DisableMapPart(2049410802); // Boat jump
    DisableMapPart(2049410803); 
    DisableMapPart(2049410804);
    DisableMapPart(2049410807); // broken floor near massive pit
    DisableMapPart(2049410810);
    DisableMapPart(2049410812);
    DisableMapPart(2049410813);
    DisableMapPart(2049410815);
    DisableMapPart(2049410816);
    DisableMapPart(2049410817);
    DisableMapPart(2049410818);
    DisableMapPart(2049410819);
    DisableMapPart(2049410820);
    DisableMapPart(2049410821);
    DisableMapPart(2049410822);
    DisableMapPart(2049410823);
    DisableMapPart(2049410824);
    DisableMapPart(2049410825);
    DisableMapPart(2049410826);
    DisableMapPart(2049410827);
    DisableMapPart(2049410828);
    DisableMapPart(2049410829);
    DisableMapPart(2049410830);
    DisableMapPart(2049410831);
    DisableMapPart(2049410832);
    DisableMapPart(2049410833); // stairs
    DisableMapPart(2049410835);
    DisableMapPart(2049410836);
    DisableMapPart(2049410837);
    DisableMapPart(2049410838);
    DisableMapPart(2049410839);
    DisableMapPart(2049410840);
    DisableMapPart(2049410841);
    DisableMapPart(2049410842);
    DisableMapPart(2049410843);
    DisableMapPart(2049410844);
    DisableMapPart(2049410845);
    DisableMapPart(2049410853);
    DisableMapPart(2049410854);
    DisableMapPart(2049410856);
    DisableMapPart(2049410857);
    DisableMapPart(2049410858);
    DisableMapPart(2049410859);
    DisableMapPart(2049410860);
    DisableMapPart(2049410861);
    DisableMapPart(2049410862);
    DisableMapPart(2049410863); // Misc. custom ballroom coll
    DisableMapPart(2049410864);
    DisableMapPart(2049410865);
    DisableMapPart(2049410866);
    DisableMapPart(2049410867);
    DisableMapPart(2049410868);
    DisableMapPart(1084221006); // ladder
    DisableMapPart(1084221007); // ladder
    DisableMapPart(2049420562); // fall off point
    DisableMapPart(2049420563); 
    DisableCharacterGravity(2049411900); // entity grav disa
    
    //DisableHit
    // Regular Stuff
    DisableHit(1084220590);
    DisableHit(1084220591);
    DisableHit(1084220592);
    DisableHit(1084220593);
    DisableHit(1084220594);
    DisableHit(1084220595);
    DisableHit(1084220610); // MANOR DOOR
    DisableHit(2049410636); // SECRET BOAT DOOR
    DisableHit(2049410637);
    DisableHit(2049410638);
    DisableHit(2049410640);
    DisableHit(2049410641);
    DisableHit(2049410642);
    DisableHit(2049410647); // Broken church wall
    DisableHit(2049410648);
    DisableHit(2049410649); // shrunk down broken wall
    DisableHit(2049410650);
    DisableHit(2049410651);
    DisableHit(2049410652);
    DisableHit(2049410653);
    DisableHit(2049410654);
    DisableHit(2049410655);
    DisableHit(2049410656);
    DisableHit(2049410657);
    DisableHit(2049410658);
    DisableHit(2049410659); 
    DisableHit(2049410665); // coll too big for water passage
    DisableHit(2049410723);
    DisableHit(2049410727);
    DisableHit(2049410728);
    DisableHit(2049410729);
    DisableHit(2049410734);
    DisableHit(2049410735);
    DisableHit(2049410736);
    DisableHit(2049410737);
    DisableHit(2049410738);
    DisableHit(2049410739); 
    DisableHit(2049410740);
    DisableHit(2049410741);
    DisableHit(2049410742);
    DisableHit(2049410743); // Splash Makers
    DisableHit(2049410749);
    DisableHit(2049410750); 
    DisableHit(2049410753);
    DisableHit(2049410754);
    DisableHit(2049410787); // Cave walls
    DisableHit(2049410788);
    DisableHit(2049410789);
    DisableHit(2049410790); // done
    DisableHit(2049410798); // Sewer Cave stuff
    DisableHit(2049410800);
    DisableHit(2049410806);
    DisableHit(2049410808); // More Broken Floor
    DisableHit(2049410809);
    DisableHit(2049410811);
    DisableHit(2049410814);
    DisableHit(2049410834);
    DisableHit(2049410846);
    DisableHit(2049410847);
    DisableHit(2049410848);
    DisableHit(2049410849);
    DisableHit(2049410855);
    DisableHit(2049410869);
    DisableHit(2049410870); // coll removal for thingy
    DisableHit(2049410871);
    DisableHit(2049410872);
    DisableHit(2049410874); // smaller door
    
    //EnableAssetInvulnerability
    EnableAssetInvunerability(2049410634); // BOAT DROPDOWN
    EnableAssetInvunerability(2049410635);
    EnableAssetInvunerability(2049410678); // Unbreakable pots
    EnableAssetInvunerability(2049410677);
    EnableAssetInvunerability(2049410680);
    EnableAssetInvunerability(2049410721);
    EnableAssetInvunerability(2049410730);
    EnableAssetInvunerability(2049410759); // barrels
    EnableAssetInvunerability(2049410760);
    EnableAssetInvunerability(2049410761);
    EnableAssetInvunerability(2049410762);
    EnableAssetInvunerability(2049410763);
    EnableAssetInvunerability(2049410765); // more wine
    EnableAssetInvunerability(2049410766);
    EnableAssetInvunerability(2049410767);
    EnableAssetInvunerability(2049410771);
    EnableAssetInvunerability(2049410772);
    EnableAssetInvunerability(2049410773);
    EnableAssetInvunerability(2049410774);
    EnableAssetInvunerability(2049410775);
    EnableAssetInvunerability(2049410777);
    EnableAssetInvunerability(2049410777);
    EnableAssetInvunerability(2049410792); // Broked Ceiling
    EnableAssetInvunerability(2049410793);
    EnableAssetInvunerability(2049410794);
    EnableAssetInvunerability(2049410795);
    EnableAssetInvunerability(2049410796);
    EnableAssetInvunerability(2049410797);
    EnableAssetInvunerability(2049410805);
});
