// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 10012682, 0);
    InitializeEvent(0, 10012800, 0);
    InitializeEvent(0, 10012810, 0);
    InitializeEvent(0, 10012811, 0);
    InitializeEvent(0, 10012849, 0);
    InitializeEvent(0, 10012500, 0);
    InitializeEvent(0, 10010790, 0);
    InitializeEvent(0, 10010791, 0);
    InitializeEvent(0, 10010792, 0);
    
    //warp to Golden Lineage Evergaol
    InitializeEvent(0, 10012870, 0);
    InitializeEvent(0, 10012503, 0); //starting class warp script
    
    //weapon/goods check script for eventflag setup + additional spells for bigger spellrunes
    InitializeEvent(0, 10012510, 60900, 26, 0, 0, 0); //Prisoner
    InitializeEvent(1, 10012510, 60901, 1, 0, 0, 0); //Vanguard
    InitializeEvent(2, 10012510, 60902, 2, 0, 0, 0); //Marksman
    InitializeEvent(3, 10012510, 60903, 0, 0, 0, 0); //Retainer
    InitializeEvent(4, 10012510, 60904, 3, 0, 0, 0); //Berserker
    InitializeEvent(5, 10012510, 60905, 4, 0, 0, 0); //Dreadnought
    InitializeEvent(6, 10012510, 60906, 5, 0, 0, 0); //Sellsword
    InitializeEvent(7, 10012510, 60907, 6, 0, 0, 0); //Rogue
    InitializeEvent(8, 10012510, 60908, 7, 4160, 0, 0); //Astrologer
    InitializeEvent(9, 10012510, 60909, 8, 0, 0, 0); //Starcaller
    InitializeEvent(10, 10012510, 60910, 9, 4530, 0, 0); //Dragon Mage
    InitializeEvent(11, 10012510, 60911, 16, 6080, 0, 0); //Flame Prophet
    InitializeEvent(12, 10012510, 60912, 17, 6790, 6740, 0); //Fundamentalist
    InitializeEvent(13, 10012510, 60913, 18, 7510, 2007740, 0); //Bestial Devout
    InitializeEvent(14, 10012510, 60914, 19, 6960, 2006920, 0); //Dragon Cultist
    InitializeEvent(15, 10012510, 60915, 13, 5031, 8158, 0); //Necromancer
    InitializeEvent(16, 10012510, 60916, 10, 0, 0, 0); //Volcanist
    InitializeEvent(17, 10012510, 60917, 12, 6520, 0, 0); //Nox Oracle
    InitializeEvent(18, 10012510, 60918, 11, 5271, 0, 0); //Storm Caller
    InitializeEvent(19, 10012510, 60919, 20, 0, 0, 0); //Godskin Celebrant
    InitializeEvent(20, 10012510, 60920, 21, 0, 0, 0); //Frenzied Zealot
    InitializeEvent(21, 10012510, 60921, 14, 0, 0, 0); //Frost Witch
    InitializeEvent(22, 10012510, 60922, 15, 0, 0, 0); //Aberrant Heretic
    InitializeEvent(23, 10012510, 60923, 22, 6320, 0, 0); //Blood Initiate
    InitializeEvent(24, 10012510, 60924, 23, 7230, 0, 0); //Servant of Rot
    InitializeEvent(25, 10012510, 60925, 24, 7442, 8158, 0); //Mystic
    InitializeEvent(26, 10012510, 60926, 25, 0, 0, 0); //Perfumer
    
    InitializeCommonEvent(0, 98005307, 10011660, 60, 39, 50, 0, 1039502811, 0); // Waygate
    InitializeCommonEvent(0, 90005250, 10010100, 10011100, 0, -1); // Bird
    
    // - - - TUTORIAL HALL - - -
    // Basics
    
    //BatchSetEventFlags(10017500, 10017545, OFF); // TO-DO Remove
    InitializeEvent(0, 10015600, 10017500, 10011000, 46, 100010, 2400, 2401, 0) // Class Path
    InitializeEvent(1, 10015600, 10017501, 10011001, 46, 100020, 2410, 2411, 0) // Keystones
    InitializeEvent(2, 10015600, 10017502, 10011002, 46, 100030, 2420, 2421, 0) // Remnant Crafting
    InitializeEvent(3, 10015600, 10017503, 10011003, 46, 100040, 2430, 2431, 2432) // Armor Abilities
    InitializeEvent(4, 10015600, 10017504, 10011004, 46, 100050, 2440, 2441, 2442) // Spell Runes
    InitializeEvent(40, 10015600, 10017545, 10011045, 46, 100460, 2800, 2801, 2802) // Progression Changes
    // Conveniece
    InitializeEvent(5, 10015600, 10017505, 10011005, 32, 100060, 2450, 0, 0) // Erdtree Waygates
    InitializeEvent(6, 10015600, 10017506, 10011006, 32, 100070, 2460, 2461, 0) // Starting Unlocks
    InitializeEvent(7, 10015600, 10017507, 10011007, 32, 100080, 2470, 2471, 0) // Boss Markers
    InitializeEvent(8, 10015600, 10017508, 10011008, 32, 100090, 2480, 2481, 0) // Removed Blessing System
    // Status Changes
    InitializeEvent(9, 10015600, 10017559, 10011009, 32, 100100, 2490, 2491, 0) // Status: General
    InitializeEvent(10, 10015600, 10017510, 10011010, 32, 100110, 2500, 0, 0) // Status: Poison
    InitializeEvent(11, 10015600, 10017511, 10011011, 32, 100120, 2510, 0, 0) // Status: Rot
    InitializeEvent(12, 10015600, 10017512, 10011012, 32, 100130, 2520, 0, 0) // Status: Blood
    InitializeEvent(13, 10015600, 10017513, 10011013, 32, 100140, 2530, 0, 0) // Status: Frost
    InitializeEvent(14, 10015600, 10017514, 10011014, 32, 100150, 2540, 0, 0) // Status: Sleep
    InitializeEvent(15, 10015600, 10017515, 10011015, 32, 100160, 2550, 0, 0) // Status: Madness
    InitializeEvent(16, 10015600, 10017516, 10011016, 32, 100170, 2560, 0, 0) // Status: Death
    // Equipment                       
    InitializeEvent(17, 10015600, 10017517, 10011017, 32, 100180, 2570, 2571, 2572) // Reinforcement Changes
    InitializeEvent(18, 10015600, 10017518, 10011018, 32, 100190, 2580, 2581, 2582) // Spell Catalyst Changes
    InitializeEvent(19, 10015600, 10017519, 10011019, 32, 100200, 2590, 0, 0) // Removed Random Drops
    InitializeEvent(20, 10015600, 10017520, 10011020, 32, 100210, 2600, 2601, 0) // Great Rune Changes
    InitializeEvent(21, 10015600, 10017521, 10011021, 32, 100220, 2610, 0, 0) // Weapon Duplication
    InitializeEvent(22, 10015600, 10017522, 10011022, 32, 100230, 2620, 0, 0) // Bow Damage Logic
    InitializeEvent(23, 10015600, 10017523, 10011023, 32, 100240, 2630, 0, 0) // Golden Extract
    InitializeEvent(24, 10015600, 10017524, 10011024, 32, 100250, 2640, 0, 0) // Sacred Ward
    // Additional Features             
    InitializeEvent(25, 10015600, 10017525, 10011025, 32, 100260, 2650, 2651, 2652) // Spirit Ash Resummoning
    InitializeEvent(26, 10015600, 10017526, 10011026, 32, 100270, 2660, 2661, 0) // Spell Enchantments
    InitializeEvent(27, 10015600, 10017527, 10011027, 32, 100280, 2670, 0, 0) // Removed Stonesword Keys
    InitializeEvent(28, 10015600, 10017528, 10011028, 32, 100290, 2680, 0, 0) // FP Regeneration
    InitializeEvent(29, 10015600, 10017529, 10011029, 32, 100300, 2690, 0, 0) // Boss Resurrection
    InitializeEvent(30, 10015600, 10017530, 10011030, 32, 100310, 2700, 2701, 0) // Alternative Mounts
    InitializeEvent(31, 10015600, 10017531, 10011031, 32, 100320, 2710, 2711, 0) // ErdTools
    InitializeEvent(32, 10015600, 10017532, 10011032, 32, 100330, 2720, 2721, 0) // Training Hall
    InitializeEvent(33, 10015600, 10017533, 10011033, 32, 100340, 2730, 2731, 0) // Transmog and Armor Dyes
    // Class Specific                  
    InitializeEvent(34, 10015600, 10017534, 10011034, 32, 100350, 2740, 0, 0) // Quicksilver
    InitializeEvent(35, 10015600, 10017535, 10011035, 32, 100360, 2750, 0, 0) // Frostbite Shatter
    InitializeEvent(36, 10015600, 10017536, 10011036, 32, 100370, 2760, 0, 0) // Immolation
    InitializeEvent(37, 10015600, 10017537, 10011037, 32, 100380, 2770, 2771, 0) // Rend and Concussion
    InitializeEvent(38, 10015600, 10017538, 10011038, 32, 100390, 2780, 2781, 0) // Current
    InitializeEvent(39, 10015600, 10017539, 10011039, 32, 100400, 2790, 2791, 0) // Soul Burn and Soul Annihilation
    // Socials
    //InitializeEvent(0, 10015700, 10017540, 10011040, 46, 100410, 4040, 10015100, 101210) // Wiki
    InitializeEvent(1, 10015700, 10017541, 10011041, 46, 100420, 4041, 10015101, 101211) // Discord
    InitializeEvent(2, 10015700, 10017542, 10011042, 46, 100430, 4042, 10015102, 101212) // Twitter
    InitializeEvent(3, 10015700, 10017543, 10011043, 46, 100440, 4043, 10015103, 101213) // Youtube
    InitializeEvent(4, 10015700, 10017544, 10011044, 46, 100450, 4044, 10015104, 101214) // Patreon
    
    // Owl Init
    InitializeEvent(0, 10015713, 0);
    InitializeEvent(0, 10015710, 10011701);
    InitializeEvent(1, 10015710, 10011702);
    InitializeEvent(2, 10015710, 10011703);
    InitializeEvent(3, 10015710, 10011704);
    InitializeEvent(0, 10015712, 10011701);
    InitializeEvent(1, 10015712, 10011702);
    InitializeEvent(2, 10015712, 10011703);
    InitializeEvent(3, 10015712, 10011704);
    // Owl Emotes
    InitializeEvent(0, 10015711, 10011701, 3000);
    InitializeEvent(1, 10015711, 10011701, 3001);
    InitializeEvent(2, 10015711, 10011701, 3002);
    InitializeEvent(3, 10015711, 10011701, 3003);
    InitializeEvent(4, 10015711, 10011701, 3004);
    InitializeEvent(5, 10015711, 10011701, 3005);
    InitializeEvent(6, 10015711, 10011701, 3006);
    
    InitializeEvent(0, 10015711, 10011702, 3000);
    InitializeEvent(1, 10015711, 10011702, 3001);
    InitializeEvent(2, 10015711, 10011702, 3002);
    InitializeEvent(3, 10015711, 10011702, 3003);
    InitializeEvent(4, 10015711, 10011702, 3004);
    InitializeEvent(5, 10015711, 10011702, 3005);
    InitializeEvent(6, 10015711, 10011702, 3006);
    
    InitializeEvent(0, 10015711, 10011703, 3000);
    InitializeEvent(1, 10015711, 10011703, 3001);
    InitializeEvent(2, 10015711, 10011703, 3002);
    InitializeEvent(3, 10015711, 10011703, 3003);
    InitializeEvent(4, 10015711, 10011703, 3004);
    InitializeEvent(5, 10015711, 10011703, 3005);
    InitializeEvent(6, 10015711, 10011703, 3006);
    
    InitializeEvent(0, 10015711, 10011704, 3000);
    InitializeEvent(1, 10015711, 10011704, 3001);
    InitializeEvent(2, 10015711, 10011704, 3002);
    InitializeEvent(3, 10015711, 10011704, 3003);
    InitializeEvent(4, 10015711, 10011704, 3004);
    InitializeEvent(5, 10015711, 10011704, 3005);
    InitializeEvent(6, 10015711, 10011704, 3006);
    // Owl Scripted Hoot
    InitializeEvent(0, 10015715, 10015501, 10011701, 11790, 4);
    InitializeEvent(1, 10015715, 10015501, 10011701, 11791, 4);
    InitializeEvent(2, 10015715, 10015501, 10011701, 11792, 3);
    InitializeEvent(3, 10015715, 10015501, 10011701, 11793, 3);
    InitializeEvent(4, 10015715, 10015501, 10011701, 11794, 2);
    InitializeEvent(5, 10015715, 10015501, 10011701, 11795, 2);
    InitializeEvent(6, 10015715, 10015501, 10011701, 11796, 1);
    InitializeEvent(7, 10015715, 10015501, 10011701, 11797, 1);
    
    InitializeEvent(8, 10015715, 10015502, 10011702, 11790, 4);
    InitializeEvent(9, 10015715, 10015502, 10011702, 11791, 4);
    InitializeEvent(10, 10015715, 10015502, 10011702, 11792, 3);
    InitializeEvent(11, 10015715, 10015502, 10011702, 11793, 3);
    InitializeEvent(12, 10015715, 10015502, 10011702, 11794, 2);
    InitializeEvent(13, 10015715, 10015502, 10011702, 11795, 2);
    InitializeEvent(14, 10015715, 10015502, 10011702, 11796, 1);
    InitializeEvent(15, 10015715, 10015502, 10011702, 11797, 1);
    
    InitializeEvent(16, 10015715, 10015503, 10011703, 11790, 4);
    InitializeEvent(17, 10015715, 10015503, 10011703, 11791, 4);
    InitializeEvent(18, 10015715, 10015503, 10011703, 11792, 3);
    InitializeEvent(19, 10015715, 10015503, 10011703, 11793, 3);
    InitializeEvent(20, 10015715, 10015503, 10011703, 11794, 2);
    InitializeEvent(21, 10015715, 10015503, 10011703, 11795, 2);
    InitializeEvent(22, 10015715, 10015503, 10011703, 11796, 1);
    InitializeEvent(23, 10015715, 10015503, 10011703, 11797, 1);
    
    InitializeEvent(24, 10015715, 10015504, 10011704, 11790, 4);
    InitializeEvent(25, 10015715, 10015504, 10011704, 11791, 4);
    InitializeEvent(26, 10015715, 10015504, 10011704, 11792, 3);
    InitializeEvent(27, 10015715, 10015504, 10011704, 11793, 3);
    InitializeEvent(28, 10015715, 10015504, 10011704, 11794, 2);
    InitializeEvent(29, 10015715, 10015504, 10011704, 11795, 2);
    InitializeEvent(30, 10015715, 10015504, 10011704, 11796, 1);
    InitializeEvent(31, 10015715, 10015504, 10011704, 11797, 1);
    
    InitializeCommonEvent(0, 90005525, 10010545, 10011545); // Illusory Wall
    InitializeEvent(0, 10015714, 0); // Ambient Music
    InitializeEvent(0, 10015717, 0); // Stone msg
});

$Event(50, Default, function() {
    SetCharacterBackreadState(10011700, true);
    InitializeEvent(0, 10010020, 0);
    //InitializeEvent(0, 10010030, 0);
    InitializeEvent(0, 10015716, 0);
    InitializeEvent(0, 10010031, 0);
    InitializeEvent(0, 10012502, 0);
    //InitializeEvent(0, 10012505, 0);
    InitializeEvent(0, 10012506, 0);
    InitializeEvent(0, 10012560, 0);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetCurrentTime(8, 0, 0, false, false, false, 0, 0, 0);
});

$Event(10010020, Restart, function() {
    EndIf(ThisEventSlot());
    EndIf(!PlayerInMap(10, 1, 0, 0));
    DisableAreaWelcomeMessage();
    ForceAnimationPlayback(10000, 0, false, false, false);
    SetWindSFX(-1);
    SetCharacterFaceParamOverride(10000, 0, -1);
    SetCharacterFaceParamOverride(10000, 1, -1);
    PlayCutsceneToPlayerWithWeatherAndTime(10000040, CutscenePlayMode.Skippable, 10000, false, Weather.Default, 0, true, 8, 0, 0);
    WaitFixedTimeRealFrames(1);
L0:
    SetPlayerRespawnPoint(10012020);
    SaveRequest();
    SetThisEventSlot(ON);
    SetEventFlagID(100, ON);
});

$Event(10010030, Default, function() {
    EndIf(ThisEventSlot() && EventFlag(101));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    hp = CharacterHPValue(10010800) > 0 && CharacterHPValue(10000) == 1;
    chr = CharacterDead(10000);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10010801) && (hp || chr));
    SetPlayerRespawnPoint(18002020);
    SaveRequest();
    DisableTextOnLoadingScreen();
    EndIf(chr.Passed);
    if (!ThisEventSlot()) {
        WaitFixedTimeSeconds(1);
    }
    SetSpEffect(10000, 4790);
    SetEventFlagID(9021, ON);
    SetBossBGM(920900, BossBGMState.Stop2);
    PlayCutsceneToPlayerAndWarpWithWeatherAndTime(10010000, CutscenePlayMode.Skippable, 18002020, 18000000, 10000, 10010, false, true, Weather.Default, -1, true, 8, 0, 0);
    WaitFixedTimeRealFrames(1);
});

$Event(10010031, Default, function() {
    EndIf(!PlayerInMap(10, 1, 0, 0));
    EndIf(EventFlag(101));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10012805));
    EnableCharacterImmortality(10000);
    WaitFor(!InArea(10000, 10012031) || CharacterDead(10010800));
    DisableCharacterImmortality(10000);
});

$Event(10012500, Restart, function() {
    if (EventFlag(10010500)) {
        DisableAsset(10011500);
        DisableAsset(10011501);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 10012500));
    RequestAssetDestruction(10011500, 1);
    SetEventFlagID(10010500, ON);
});

$Event(10012501, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetWindSFX(808004);
    SetSpEffect(10000, 4200);
});

$Event(10012502, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(10010502));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    DisableAreaWelcomeMessage();
    WaitFor(PlayerIsInOwnWorld() && !InArea(10000, 10012502));
    EnableAreaWelcomeMessage();
    DisplayAreaWelcomeMessage(10010);
    SetEventFlagID(10010502, ON);
});

$Event(10012503, Restart, function() {
    DisableNetworkSync();
    
    WaitFor(ActionButtonInArea(100000, 10011541));
    if (!EventFlag(60210)) {
        DisplayGenericDialog(20050, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10011541, 5);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
    
    ForceAnimationPlayback(10000, 67080, false, false, false);
    WaitFixedTimeSeconds(3);
    CreateAssetfollowingSFX(10011541, 101, 1531);
    WaitFixedTimeSeconds(4);
   
    GotoIf(L0, EventFlag(10010505));
    WaitFor(AnyBatchEventFlags(60900, 60926));
    
    SetEventFlagID(71190, ON); // Roundtable hold grace
    SetEventFlagID(10010505, ON);
    SetEventFlagID(60000, ON);
    
    if (EventFlag(60900)) {
        SetEventFlagID(73257, ON); // Gael Tunnel
        SetEventFlagID(32070001, ON);
        WarpPlayer(32, 7, 0, 0, 32070985, 60); //Prisoner
        SaveRequest();
        SetPlayerRespawnPoint(32070985);
    } 
    else if (EventFlag(60901)) {
        SetEventFlagID(76111, ON); //Gatefront
        SetEventFlagID(1042370000, ON);
        WarpPlayer(60, 42, 37, 0, 1042372808, 60); //Vanguard
        SaveRequest();
        SetPlayerRespawnPoint(1042372808);
    } 
    else if (EventFlag(60902)) {
        SetEventFlagID(76114, ON); //Mistwood Outskirts
        SetEventFlagID(1044370000, ON);
        WarpPlayer(60, 45, 36, 0, 1045360985, 60); //Marksman
        SaveRequest();
        SetPlayerRespawnPoint(1045360985);
    } 
    else if (EventFlag(60903)) {
        SetEventFlagID(76101, ON); //first step
        SetEventFlagID(1042360001, ON);
        WarpPlayer(60, 41, 36, 0, 1041362805, 60); //Retainer
        SaveRequest();
        SetPlayerRespawnPoint(1041362805);
    }
    else if (EventFlag(60904)) {
        SetEventFlagID(76118, ON); //Warmaster's Shack
        SetEventFlagID(1042380000, ON);
        WarpPlayer(60, 42, 38, 0, 1042380985, 60); //Berserker
        SaveRequest();
        SetPlayerRespawnPoint(1042380985);
    }
    else if (EventFlag(60905)) {
        SetEventFlagID(76156, ON); //Collector's Merchant Shack
        SetEventFlagID(1041320000, ON);
        WarpPlayer(60, 42, 32, 0, 1042320985, 60); //Dreadnought
        SaveRequest();
        SetPlayerRespawnPoint(1042320985);
    }
    else if (EventFlag(60906)) {
        SetEventFlagID(76116, ON); //Murkwater Coast
        SetEventFlagID(1043380000, ON);
        WarpPlayer(60, 43, 38, 0, 1043380985, 60); //Sellsword
        SaveRequest();
        SetPlayerRespawnPoint(1043380985);
    }
    else if (EventFlag(60907)) {
        SetEventFlagID(76203, ON); //Scenic Isle
        SetEventFlagID(1037420000, ON);
        WarpPlayer(60, 36, 42, 0, 1036420985, 60); //Rogue
        SaveRequest();
        SetPlayerRespawnPoint(1036420985);
    }
    else if (EventFlag(60908)) {
        SetEventFlagID(76204, ON); //Academy Gate Town
        SetEventFlagID(1037440000, ON);
        WarpPlayer(60, 37, 44, 0, 1037440985, 60); //Astrologer
        SaveRequest();
        SetPlayerRespawnPoint(1037440985);
    }
    else if (EventFlag(60909)) {
        SetEventFlagID(76155, ON); //Beside the Crater-Pocked Glade
        SetEventFlagID(1045330000, ON);
        WarpPlayer(60, 45, 33, 0, 1045330985, 60); //Starcaller
        SaveRequest();
        SetPlayerRespawnPoint(1045330985);
    }
    else if (EventFlag(60910)) {
        SetEventFlagID(71270, ON); //Siofra River Well Depths
        SetEventFlagID(12070000, ON);
        WarpPlayer(12, 7, 0, 0, 12070985, 60); //Dragon Mage
        SaveRequest();
        SetPlayerRespawnPoint(12070985);
    }
    else if (EventFlag(60911)) {
        SetEventFlagID(76400, ON); //Smoldering Church
        SetEventFlagID(1046400000, ON);
        WarpPlayer(60, 46, 40, 0, 1046400985, 60); //Flame Prophet
        SaveRequest();
        SetPlayerRespawnPoint(1046400985);
    }
    else if (EventFlag(60912)) {
        SetEventFlagID(76104, ON); //Third Church of Marika
        SetEventFlagID(1046380000, ON);
        WarpPlayer(60, 46, 38, 0, 1046380985, 60); //Fundamentalist
        SaveRequest();
        SetPlayerRespawnPoint(1046380985);
    }
    else if (EventFlag(60913)) {
        SetEventFlagID(73103, ON); //Groveside Cave
        SetEventFlagID(31030000, ON);
        WarpPlayer(31, 3, 0, 0, 31030985, 60); //Bestial Devout
        SaveRequest();
        SetPlayerRespawnPoint(31030985);
    }
    else if (EventFlag(60914)) {
        SetEventFlagID(76113, ON); //Seaside Ruins
        SetEventFlagID(1043350000, ON);
        WarpPlayer(60, 43, 36, 0, 1043360972, 60); //Dragon Cultist
        SaveRequest();
        SetPlayerRespawnPoint(1043360972);
    }
    else if (EventFlag(60915)) {
        SetEventFlagID(76150, ON); //Church of Pilgrimage
        SetEventFlagID(1043340000, ON);
        WarpPlayer(60, 42, 34, 0, 1042340975, 60); //Necromancer
        SaveRequest();
        SetPlayerRespawnPoint(1042340975);
    }
    else if (EventFlag(60916)) {
        SetEventFlagID(76403, ON); //Caelem Ruins
        SetEventFlagID(1047400000, ON);
        WarpPlayer(60, 47, 40, 0, 1047400985, 60); //Volcanist
        SaveRequest();
        SetPlayerRespawnPoint(1047400985);
    }
    else if (EventFlag(60917)) {
        SetEventFlagID(76234, ON); //Easter Tablehand
        SetEventFlagID(1038460000, ON);
        WarpPlayer(60, 38, 47, 0, 1038472854, 60); //Nox Oracle
        SaveRequest();
        SetPlayerRespawnPoint(1038472854);
    }
    else if (EventFlag(60918)) { //Stormcaller
        SetEventFlagID(76102, ON); //Stormhill Shack
        SetEventFlagID(1041380000, ON);
        WarpPlayer(60, 40, 38, 0, 1040381970, 60);
        SaveRequest();
        SetPlayerRespawnPoint(1040381970);
    }
    else if (EventFlag(60919)) {
        SetEventFlagID(76117, ON); //Saintsbridge
        SetEventFlagID(1043390000, ON);
        WarpPlayer(60, 43, 40, 0, 1043400970, 60); //Godskin Celebrant
        SaveRequest();
        SetPlayerRespawnPoint(1043400970);
    }
    else if (EventFlag(60920)) {
        SetEventFlagID(76154, ON); //Ailing Village Outskirts
        SetEventFlagID(1044330000, ON);
        WarpPlayer(60, 44, 33, 0, 1044330985, 60); //Frenzied Zealot
        SaveRequest();
        SetPlayerRespawnPoint(1044330985);
    }
    else if (EventFlag(60921)) {
        SetEventFlagID(76152, ON); // Tombsward
        SetEventFlagID(1042330000, ON);
        WarpPlayer(60, 42, 33, 0, 1042330985, 60); //Frost Witch
        SaveRequest();
        SetPlayerRespawnPoint(1042330985);
    }
    else if (EventFlag(60922)) {
        SetEventFlagID(76217, ON); //Artist's Shack
        SetEventFlagID(1038450000, ON);
        WarpPlayer(60, 38, 45, 0, 1038450985, 60); //Aberrant Heretic
        SaveRequest();
        SetPlayerRespawnPoint(1038450985);
    }
    else if (EventFlag(60923)) {
        SetEventFlagID(76236, ON); //Rose Church
        SetEventFlagID(1035430000, ON);
        WarpPlayer(60, 35, 44, 0, 1035440970, 60); //Blood Initiate
        SaveRequest();
        SetPlayerRespawnPoint(1035440970);
    }
    else if (EventFlag(60924)) {
        SetEventFlagID(76406, ON); //Aeonia Swamp Shore
        SetEventFlagID(1048380000, ON);
        WarpPlayer(60, 48, 38, 0, 1048380985, 60); //Servant of Rot
        SaveRequest();
        SetPlayerRespawnPoint(1048380985);
    }
    else if (EventFlag(60925)) { //Mystic
        SetEventFlagID(76226, ON); //Mausoleum Compound
        SetEventFlagID(1037480000, ON);
        WarpPlayer(60, 37, 48, 0, 1037482210, 60);
        SaveRequest();
        SetPlayerRespawnPoint(1037482210);
    }
    else if (EventFlag(60926)) { //Perfumer
        SetEventFlagID(76220, ON); //Village of the Albinaurics
        SetEventFlagID(1034420000, ON);
        WarpPlayer(60, 34, 42, 0, 1034420985, 60);
        SaveRequest();
        SetPlayerRespawnPoint(1034420985);
    }
    
    EndEvent();
L0:
    WarpPlayer(11, 10, 0, 0, 11102020, 60);
    SaveRequest();
});

$Event(10012504, Restart, function() {
    EndIf(EventFlag(10018540));
    EndIf(EventFlag(60210));
    DisableObjAct(10011540, -1);
    WaitFor(EventFlag(60210) && EventFlag(10010505));
    EnableObjAct(10011540, -1);
});

$Event(10012505, Restart, function() {
    WaitFor(EventFlag(10010505));
    DisableAsset(10011541);
});

$Event(10012506, Restart, function() {
    //EndIf(EventFlag(10010505));
    //EnableAsset(10011541);
    CreateAssetfollowingSFX(10011541, 101, 1530); //asset AEG099_003
});

// Set Class Flags - EventFlag, Class Index, Missing Goods 1,  Missing Goods 2, Missing Goods 3
$Event(10012510, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld() || AnyBatchEventFlags(60900, 60926) || !PlayersClass(X4_4));
    
    if (Signed(X8_4) != 0 && !PlayerHasItemIncludingBBox(ItemType.Goods, X8_4))
        DirectlyGivePlayerItem(ItemType.Goods, X8_4, 6001, 1);
    if (Signed(X12_4) != 0 && !PlayerHasItemIncludingBBox(ItemType.Goods, X12_4))
        DirectlyGivePlayerItem(ItemType.Goods, X12_4, 6001, 1);
    if (Signed(X16_4) != 0 && !PlayerHasItemIncludingBBox(ItemType.Goods, X16_4))
        DirectlyGivePlayerItem(ItemType.Goods, X16_4, 6001, 1);
    
    if (PlayerHasItem(ItemType.Goods, 8158))
        SetEventFlagID(60110, ON); // Allow spirit summoning if starting with a bell
    
    SetEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
});

$Event(10012560, Restart, function() {
    if (!EventFlag(10018560)) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(102));
        SetEventFlagID(10018560, ON);
    }
L0:
    DisableObjActAssignIdx(10011560, 2219000, 0);
    DisableObjActAssignIdx(10011560, 2219000, 1);
    DisableObjActAssignIdx(10011560, 2219000, 2);
    DisableObjActAssignIdx(10011560, 2219000, 3);
});

$Event(10012680, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10010020) && InArea(10000, 10012680));
    SetEventFlagID(710000, ON);
    ShowTutorialPopup(1000, true, true);
    WaitFor(!InArea(10000, 10012680));
    ShowTutorialPopup(1000, false, true);
});

$Event(10012682, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 10012682));
    SetEventFlagID(710000, ON);
    ShowTutorialPopup(1000, true, true);
});

$Event(10012800, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHPValue(10010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(10018000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(10010800));
    HandleBossDefeatAndDisplayBanner(10010800, TextBannerType.EnemyFelled);
    SetEventFlagID(10010800, ON);
    SetEventFlagID(9103, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61103, ON);
    }
});

$Event(10012810, Restart, function() {
    if (EventFlag(10010800)) {
        DisableCharacter(10010800);
        DisableCharacterCollision(10010800);
        ForceCharacterDeath(10010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(10010800);
    EnableCharacterInvincibility(10010800);
    if (!EventFlag(10010801)) {
        ForceAnimationPlayback(10010800, 30003, false, false, false);
        DisableCharacterHPBarDisplay(10010800);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 10012801))
                || HasDamageType(10010800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(10010801, ON);
        SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
        ForceAnimationPlayback(10010800, 20003, false, false, false);
        WaitFixedTimeSeconds(4);
    } else {
L1:
        DisableCharacterCollision(10010800);
        IssueShortWarpRequest(10010800, TargetEntityType.Area, 10012810, -1);
        WaitFor(EventFlag(10012805) && InArea(10000, 10012800));
        EnableCharacterCollision(10010800);
    }
L2:
    SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterInvincibility(10010800);
    EnableCharacterAI(10010800);
    DisplayBossHealthBar(Enabled, 10010800, 0, 904690000);
    EndIf(EventFlag(10010030));
    SetSpEffect(10000, 4290);
});

$Event(10012811, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHasSpEffect(10010800, 16265));
    SetEventFlagID(10012802, ON);
});

$Event(10012849, Restart, function() {
    if (!EventFlag(101)) {
        InitializeCommonEvent(0, 9005800, 10010800, 10011800, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    } else {
        InitializeCommonEvent(0, 9005800, 10010800, 10011801, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    }
    InitializeCommonEvent(0, 9005801, 10010800, 10011801, 10012800, 10012805, 10012806, 10000);
    InitializeCommonEvent(0, 9005811, 10010800, 10011800, 16, 10010801);
    InitializeCommonEvent(0, 9005811, 10010800, 10011801, 16, 0);
    InitializeCommonEvent(0, 9005822, 10010800, 920900, 10012805, 10012806, 0, 10012802, 0, 0);
});

$Event(10010790, Restart, function() {
    SetCharacterBackreadState(10011700, false);
    EnableCharacter(10011700);
    ForceAnimationPlayback(10011700, 90100, false, false, false);
    DisableCharacterCollision(10011700);
});

$Event(10010791, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400033));
    EndIf(!EventFlag(400031));
    WaitFor(ActionButtonInArea(6471, 10011700));
    RemoveItemFromPlayer(ItemType.Goods, 8154, 1);
    AwardItemLot(100330);
    EndEvent();
});

$Event(10010792, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(50));
    EndIf(EventFlag(10019200));
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) || ElapsedSeconds(5));
    WaitFixedTimeFrames(1);
    if (PlayerHasItem(ItemType.Goods, 9500)) {
        SetEventFlagID(66150, ON);
        SetEventFlagID(66170, ON);
        SetEventFlagID(66180, ON);
    }
    SetEventFlagID(10019200, ON);
    EndEvent();
});

$Event(10012900, Default, function() {
    WaitFor(EventFlag(10010900));
    IncrementEventValue(10010910, 32, 999999999);
    RestartEvent();
});

// Tutorials
$Event(10015600, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (EventFlag(X0_4)) {
        if (!ThisEventSlot()) {
            CreateAssetfollowingSFX(X4_4, 100, 47);
        }
    }
    else
        CreateAssetfollowingSFX(X4_4, 100, X8_4);
    
    WaitFor(ActionButtonInArea(X12_4, X4_4));
    SetSpEffect(10000, 101200);
    WaitFixedTimeFrames(1);
    
    if (!EventFlag(10014640)) {
        SetEventFlagID(10014640, ON);
        ShowTutorialPopup(2810, true, true); // One time message, welcome
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
    }
    
    ShowTutorialPopup(X16_4, true, true);
    if (X20_4 != 0) {
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
        ShowTutorialPopup(X20_4, true, true);
    }
    if (X24_4 != 0) {
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
        ShowTutorialPopup(X24_4, true, true);
    }
    RestartIf(EventFlag(X0_4));
    
    WaitFixedTimeFrames(2);
    SetEventFlagID(X0_4, ON);
    DeleteAssetfollowingSFX(X4_4, false);
    CreateAssetfollowingSFX(X4_4, 100, 47);
    SetThisEventSlot(ON);
    RestartEvent();
});

// Open Links
$Event(10015700, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (EventFlag(X0_4)) {
        if (!ThisEventSlot()) {
            CreateAssetfollowingSFX(X4_4, 100, 47);
        }
    }
    else
        CreateAssetfollowingSFX(X4_4, 100, X8_4);
    
    WaitFor(ActionButtonInArea(X12_4, X4_4));
    DisplayGenericDialogAndSetEventFlags(X16_4, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 5, X20_4, 6001, 6001);
    if (EventFlag(X20_4)) {
        SetSpEffect(10000, X24_4); // Open Site
    }
    RestartIf(EventFlag(X0_4));
    
    SetEventFlagID(X0_4, ON);
    DeleteAssetfollowingSFX(X4_4, false);
    CreateAssetfollowingSFX(X4_4, 100, 47);
    SetThisEventSlot(ON);
    RestartEvent();
});

// Owl Init
$Event(10015710, Restart, function(X0_4) {
    DisableCharacterAI(X0_4);
    DisableCharacterGravity(X0_4);
    EnableCharacterInvincibility(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    DisableLockOnPoint(X0_4, 220);
});
// Owl Emote
$Event(10015711, Restart, function(X0_4, X4_4) {
    WaitRandomTimeSeconds(1, 5);
    WaitRandomTimeSeconds(20, 200);
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    WaitFixedTimeSeconds(10);
    RestartEvent();
});
// Owl Eyes
$Event(10015712, Restart, function(X0_4) {
    WaitFor(!CharacterHasSpEffect(X0_4, 11420));
    SetSpEffect(X0_4, 11420);
    RestartEvent();
});
// Owl Randomizer
$Event(10015713, Default, function() {
    DisableCharacter(10011701);
    DisableCharacter(10011702);
    DisableCharacter(10011703);
    DisableCharacter(10011704);
    
    RandomlySetEventFlagInRange(10015501, 10015504, ON);
    //SetEventFlagID(10015502, ON);
    if (EventFlag(10015501)) {
        SpawnOneshotSFX(TargetEntityType.Asset, 10010701, 200, 806831);
        EnableCharacter(10011701);
    }
    else if (EventFlag(10015502)) {
        SpawnOneshotSFX(TargetEntityType.Asset, 10010702, 200, 806831);
        EnableCharacter(10011702);
    }
    else if (EventFlag(10015503)) {
        SpawnOneshotSFX(TargetEntityType.Asset, 10010703, 200, 806831);
        EnableCharacter(10011703);
    }
    else if (EventFlag(10015504)) {
        SpawnOneshotSFX(TargetEntityType.Asset, 10010704, 200, 806831);
        EnableCharacter(10011704);
    }
});

// Ambient Music Handler
$Event(10015714, Default, function() {
    EndIf(!InArea(10000, 10012705));
    WaitFixedTimeFrames(1);
    SetEventFlagID(10012706, ON);
});

// Owl Forced Hoot x4
$Event(10015715, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X0_4));
    
    WaitFor(CharacterHasSpEffect(X4_4, X8_4));
    WaitFixedTimeFrames(3);
    
    PlaySE(X4_4, SoundType.CharacterMotion, 604008000);
    GotoIf(L0, X12_4 == 1);
    WaitRandomTimeFrames(8, 15);
    RestartIf(!CharacterHasSpEffect(X4_4, X8_4));
    
    PlaySE(X4_4, SoundType.CharacterMotion, 604008000);
    GotoIf(L0, X12_4 == 2);
    WaitRandomTimeFrames(8, 15);
    RestartIf(!CharacterHasSpEffect(X4_4, X8_4));
  
    PlaySE(X4_4, SoundType.CharacterMotion, 604008000);
    GotoIf(L0, X12_4 == 3);
    WaitRandomTimeFrames(8, 15);
    RestartIf(!CharacterHasSpEffect(X4_4, X8_4));
    PlaySE(10011702, SoundType.CharacterMotion, 604008000);

L0:
    ClearSpEffect(X4_4, X8_4);
    RestartEvent();
});

$Event(10015716, Default, function() {
   DisableHit(10011548);
   DisableHit(10011549);
   
   DisableMapPart(10011550);
   DisableMapPart(10011551);
   DisableMapPart(10011552);
   DisableMapPart(10011553);
   
   DisableMapPart(10011554);
   DisableMapPart(10011555);
   SetAssetInvulnerability(10011554, Enabled);
   SetAssetInvulnerability(10011555, Enabled);
});

$Event(10015717, Default, function() {
    WaitFor(ActionButtonInArea(9000, 10011547));
    RotateCharacter(10000, 10011546, -1, false);
    ForceAnimationPlayback(10000, 60010, false, false, false);
    WaitFixedTimeFrames(45);
    DisplayBlinkingMessage(1002);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});
