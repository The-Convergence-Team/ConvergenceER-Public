// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    ""
// @linked    []
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 701, 0);
    InitializeEvent(0, 707, 0); // DLC
    InitializeEvent(0, 705, 0);
    InitializeEvent(0, 900, 0);
    InitializeEvent(0, 901, 0);
    InitializeEvent(0, 902, 0);
    InitializeEvent(0, 910, 0);
    InitializeEvent(0, 916, 0); // Burn the tree using Messmer's Kindling (DLC)
    InitializeEvent(0, 20010197, 0); // Tree burn Teleport followup (DLC)
    InitializeEvent(0, 1040, 0);
    InitializeEvent(0, 1030, 0);
    InitializeEvent(0, 1050, 0);
    //InitializeEvent(0, 930, 60380000, 60380001, 1038501500, 9700, 0, 0, 60385000, 1038502500, 0, 62001); //All Medallion Lifts set to active
    //InitializeEvent(1, 930, 60380010, 60380011, 1038501502, 9700, 0, 0, 60385000, 1038502502, 0, 63000); //All Medallion Lifts set to active
    //InitializeEvent(3, 930, 60490010, 60490011, 1049531502, 9700, 0, 0, 60495300, 1049532502, 0, 65000); //All Medallion Lifts set to active
    //InitializeEvent(5, 930, 60490030, 60490031, 1049531506, 9701, 0, 0, 60495300, 1049532506, 0, 65002); //All Medallion Lifts set to active
    InitializeEvent(0, 930, 60380000, 60380001, 1038501500, 9700, 0, 0, 60385000, 1038502500, 0); //All Medallion Lifts set to active
    InitializeEvent(1, 930, 60380010, 60380011, 1038501502, 9700, 0, 0, 60385000, 1038502502, 0); //All Medallion Lifts set to active
    InitializeEvent(2, 930, 60490000, 60490001, 1049531500, 9700, 0, 0, 60495300, 1049532500, 0); //All Medallion Lifts set to active
    InitializeEvent(3, 930, 60490010, 60490011, 1049531502, 9700, 0, 0, 60495300, 1049532502, 0); //All Medallion Lifts set to active
    InitializeEvent(4, 930, 60490020, 60490021, 1049531504, 9701, 0, 0, 60485400, 1049532504, 0); //All Medallion Lifts set to active
    InitializeEvent(5, 930, 60490030, 60490031, 1049531506, 9701, 0, 0, 60495300, 1049532506, 0); //All Medallion Lifts set to active
    InitializeEvent(0, 936, 60490000, 60490001, 1049532500, 60495300, 1049532500, 63003, 0, -1082130432);
    InitializeEvent(1, 936, 60490020, 60490021, 1049532504, 60485400, 1049532504, 63003, 0, -1082130432);
    InitializeEvent(0, 970, 0);
    InitializeEvent(0, 9820, 8820, 4820, 3600);
    InitializeEvent(0, 1020, 0);
    InitializeEvent(0, 9945, 0);
    InitializeEvent(0, 1400, 0);
    InitializeEvent(0, 1401, 0);
    InitializeEvent(0, 1410, 60804, 4, 1000, 11100785, 11102180);
    InitializeEvent(0, 1411, 60808, 8, 1001, 39200700, 39202160, 1052380260, 1252382699, 1045520730, 1045522170);
    InitializeEvent(0, 1412, 60823, 53, 1002, 1050560700, 1050562140);
    InitializeEvent(0, 1402, 0); // Gesture Award - Ring of Miquella 1 (DLC)
    InitializeEvent(0, 1403, 0); // Gesture Award - Ring of Miquella 2 (DLC)
    InitializeEvent(0, 1420, 0); // Gesture - Let us go Together (DLC)
    //InitializeEvent(0, 1070, 0); // Forced Torrent Dismount | Abyssal Woods (DLC)
    InitializeEvent(0, 1600, 62010, 63010, 1042371690, 1042371691);
    InitializeEvent(1, 1600, 62011, 63011, 1044321690, 1044321691);
    InitializeEvent(2, 1600, 62012, 63012, 1045371690, 1045371691);
    InitializeEvent(3, 1600, 62020, 63020, 1038411690, 1038411691);
    InitializeEvent(4, 1600, 62021, 63021, 1037441690, 1037441691);
    InitializeEvent(5, 1600, 62022, 63022, 1034481690, 1034481691);
    InitializeEvent(6, 1600, 62030, 63030, 1040521690, 1040521691);
    InitializeEvent(7, 1600, 62031, 63031, 1042511690, 1042511691);
    InitializeEvent(8, 1600, 62032, 63032, 1036541690, 1036541691);
    InitializeEvent(9, 1600, 62040, 63040, 1049371690, 1049371691);
    InitializeEvent(10, 1600, 62041, 63041, 1049401690, 1049401691);
    InitializeEvent(11, 1600, 62050, 63050, 1049531690, 1049531691);
    InitializeEvent(12, 1600, 62051, 63051, 1052541690, 1052541691);
    InitializeEvent(13, 1600, 62052, 63052, 1048561690, 1048561691);
    InitializeEvent(14, 1600, 62060, 63060, 0, 0);
    InitializeEvent(15, 1600, 62061, 63061, 0, 0);
    InitializeEvent(16, 1600, 62063, 63063, 0, 0);
    InitializeEvent(17, 1600, 62062, 63062, 0, 0);
    InitializeEvent(18, 1600, 62064, 63064, 0, 0);
    InitializeEvent(20, 1600, 62080, 63080, 2047411690, 2047411691); // DLC
    InitializeEvent(21, 1600, 62081, 63081, 2048451690, 2048451691); // DLC
    InitializeEvent(22, 1600, 62082, 63082, 2048371690, 2048371691); // DLC
    InitializeEvent(23, 1600, 62083, 63083, 2046451690, 2046451691); // DLC
    InitializeEvent(24, 1600, 62084, 63084, 2052411690, 2052411691); // DLC
    InitializeEvent(0, 1630, 62004, 62010, 62012, 62020, 62030, 62031, 62041, 62050, 0);
    InitializeEvent(1, 1630, 62005, 62010, 62011, 62022, 0, 0, 0, 0, 0);
    InitializeEvent(2, 1630, 62006, 62022, 62032, 0, 0, 0, 0, 0, 0);
    InitializeEvent(3, 1630, 62007, 62011, 62040, 62041, 0, 0, 0, 0, 0);
    InitializeEvent(4, 1630, 62008, 62050, 62051, 0, 0, 0, 0, 0, 0);
    InitializeEvent(5, 1630, 62009, 62050, 62052, 0, 0, 0, 0, 0, 0);
    
    InitializeEvent(0, 9005998, 1052520354, 1052521354, 8060, 900000003);
    InitializeEvent(1, 9005998, 1052520355, 1052521355, 8061, 900000004);
    InitializeEvent(2, 9005998, 1052520356, 1052521356, 8062, 900000005);
    InitializeEvent(3, 9005998, 1052520357, 1052521357, 8063, 900000006);
    InitializeEvent(4, 9005998, 1052520358, 1052521358, 8064, 900000007);
    InitializeEvent(0, 9006000, 0); //Forge Teleporter
    InitializeEvent(0, 9005000, 0); //Erdtree Teleporter Event flag handler
    
    //Set eventflag for Enia (2 Runes)
    InitializeEvent(0, 9006027, 0);
    
    //Award Outer Order gesture
    InitializeEvent(0, 9006048, 0);
    
    //Universal Summon Event
    //InitializeEvent(0, 9006002, 0);
    InitializeEvent(0, 9006052, 0); //Tutorial Finished Flag
    InitializeEvent(0, 9006054, 0); //Visual clean-up for Celestial Blade
    
    // Always ON spEffects
    SetSpEffect(10000, 330); // Passive FP Regen
    SetSpEffect(10000, 9000030); // Master On-Hit Accumulator
    
    for (let i = 0; i < 100; i++) // Player # Detector
        SetSpEffect(10002 + i, 101500 + i);
    
    // Golden Extract
    InitializeEvent(0, 9007100, 0);
    // Divine Ward
    InitializeEvent(4, 9007012, 260, 1509101);
    
    // Collections
    InitializeEvent(0, 9007000, 0); // Armor Active Effects (reserved 9007000-9007099)
    InitializeEvent(0, 9008000, 0); // Spells
    InitializeEvent(0, 9008001, 0); // Spirit Summons
    InitializeEvent(0, 9008002, 0); // Bosses
    InitializeEvent(0, 9008003, 0); // One Time Flags
    InitializeEvent(0, 9008004, 0); // Items Acquisition
    //InitializeEvent(0, 9008005, 0); // UNUSED
    InitializeEvent(0, 9008006, 0); // NPC DOT fixes
    InitializeEvent(0, 9008007, 0); // Completion Marks
    
    // SpEffect Flag Conversion
    InitializeEvent(0, 9006085, 9000000, 1099000110); // April Fools
    InitializeEvent(0, 9006086, 9000000, 1099000110);
    
    // Testworld tp
    InitializeEvent(0, 9006082, 0);
    
    // free form dev tool
    InitializeEvent(0, 9006083, 0);
    
    // Midras Gaze Transmog
    InitializeEvent(0, 9007101, 0);
    InitializeEvent(0, 9007102, 0);
    // Caimar's Head Howl
    InitializeEvent(0, 9007140, 0);
    
    InitializeEvent(0, 9007103, 0);
    
    // Mounts
    InitializeEvent(0, 9007104, 0); // Menu Visibility
    InitializeEvent(0, 9007105, 63100, 130); // Unlocks
    InitializeEvent(1, 9007105, 63101, 2500);
    InitializeEvent(2, 9007105, 63102, 2503);
    InitializeEvent(3, 9007105, 63103, 2501);
    InitializeEvent(4, 9007105, 63104, 2502);
    InitializeEvent(0, 9007106, 63200); // Selection Management
    InitializeEvent(1, 9007106, 63201);
    InitializeEvent(2, 9007106, 63202);
    InitializeEvent(3, 9007106, 63203);
    InitializeEvent(4, 9007106, 63204);
    InitializeEvent(0, 9007109, 0); // Forced map reload on char spawn
    // - Mount Specific
    InitializeEvent(0, 9007107, 63200, 90000, 40000); // Torrent - Poison Immunity OFF
    InitializeEvent(1, 9007107, 63200, 90010, 40000); // Torrent - Rot Immunity OFF
    InitializeEvent(2, 9007107, 63200, 90020, 40000); // Torrent - Bleed Immunity OFF
    InitializeEvent(3, 9007107, 63200, 90030, 40000); // Torrent - Death Immunity OFF
    InitializeEvent(4, 9007107, 63200, 90040, 40000); // Torrent - Frost Immunity OFF
    InitializeEvent(5, 9007107, 63200, 90300, 40000); // Torrent - Sleep Immunity OFF
    InitializeEvent(6, 9007107, 63200, 90006, 40000); // Torrent - Madness Immunity OFF
    InitializeEvent(0, 9007108, 63200, 90000, 40000); // Torrent - Poison Immunity ON
    InitializeEvent(1, 9007108, 63200, 90010, 40000); // Torrent - Rot Immunity ON
    InitializeEvent(2, 9007108, 63200, 90020, 40000); // Torrent - Bleed Immunity ON
    InitializeEvent(3, 9007108, 63200, 90030, 40000); // Torrent - Death Immunity ON
    InitializeEvent(4, 9007108, 63200, 90040, 40000); // Torrent - Frost Immunity ON
    InitializeEvent(5, 9007108, 63200, 90300, 40000); // Torrent - Sleep Immunity ON
    InitializeEvent(6, 9007108, 63200, 90006, 40000); // Torrent - Madness Immunity ON
    InitializeEvent(7, 9007107, 63202, 100960, 10000); // Erdtree Steed - Stagger Resistance (Player) OFF
    InitializeEvent(8, 9007107, 63202, 100960, 40000); // Erdtree Steed - Stagger Resistance (Steed) OFF
    InitializeEvent(7, 9007108, 63202, 100960, 10000); // Erdtree Steed - Stagger Resistance (Player) ON
    InitializeEvent(8, 9007108, 63202, 100960, 40000); // Erdtree Steed - Stagger Resistance (Steed) ON
    InitializeEvent(8, 9007107, 63103, 100970, 10000); // Frenzied Mule - Stamina Recovery OFF
    InitializeEvent(8, 9007108, 63103, 100970, 10000); // Frenzied Mule - Stamina Recovery ON
    InitializeEvent(0, 9006087, 63103, 108); // Frenzied Mule - Glowing Scars Mask Toggle
    InitializeEvent(9, 9007107, 63204, 100950, 10000); // Carian Knight Steed - FP Recovery (Player) OFF
    InitializeEvent(9, 9007108, 63204, 100950, 10000); // Carian Knight Steed - FP Recovery (Player) ON
    // - Talisman Share
    InitializeEvent(0, 9007110, 311600, 90020, 63200); // Talisman Share - Stalward Horn Charm (Blood) OFF
    InitializeEvent(0, 9007111, 311600, 90020, 63200); // Talisman Share - Stalward Horn Charm (Blood) ON
    InitializeEvent(1, 9007110, 311700, 90000, 63200); // Talisman Share - Immunizing Horn Charm (Poison) OFF
    InitializeEvent(1, 9007111, 311700, 90000, 63200); // Talisman Share - Immunizing Horn Charm (Poison) ON
    InitializeEvent(2, 9007110, 311800, 90300, 63200); // Talisman Share - Rousing Horn Charm (Sleep) OFF
    InitializeEvent(2, 9007111, 311800, 90300, 63200); // Talisman Share - Rousing Horn Charm (Sleep) ON
    InitializeEvent(3, 9007110, 312600, 90040, 63200); // Talisman Share - Warming Horn Charm (Frost) OFF
    InitializeEvent(3, 9007111, 312600, 90040, 63200); // Talisman Share - Warming Horn Charm (Frost) ON
    InitializeEvent(4, 9007110, 312700, 90006, 63200); // Talisman Share - Clarifying Horn Charm (Frenzy) OFF
    InitializeEvent(4, 9007111, 312700, 90006, 63200); // Talisman Share - Clarifying Horn Charm (Frenzy) ON
    InitializeEvent(5, 9007110, 312800, 90010, 63200); // Talisman Share - Curative Horn Charm (Rot) OFF
    InitializeEvent(5, 9007111, 312800, 90010, 63200); // Talisman Share - Curative Horn Charm (Rot) ON
    InitializeEvent(6, 9007110, 10235, 10235, 6000); // Talisman Share - Blasphemer's Crest (Lava) OFF
    InitializeEvent(6, 9007111, 10235, 10235, 6000); // Talisman Share - Blasphemer's Crest (Lava) ON
    
    InitializeEvent(7, 9007110, 310420, 310420, 6000); // Talisman Share - Erdtree's Favor OFF
    InitializeEvent(7, 9007111, 310420, 310420, 6000); // Talisman Share - Erdtree's Favor ON
    InitializeEvent(8, 9007110, 360400, 360400, 6000); // Talisman Share - Longtail Cat OFF
    InitializeEvent(8, 9007111, 360400, 360400, 6000); // Talisman Share - Longtail Cat ON
    InitializeEvent(9, 9007110, 360000, 360000, 6000); // Talisman Share - Crepus's Vial OFF
    InitializeEvent(9, 9007111, 360000, 360000, 6000); // Talisman Share - Crepus's Vial ON
    InitializeEvent(10, 9007110, 20370000, 20370000, 6000); // Talisman Share - Crimson Amber Medallion OFF
    InitializeEvent(10, 9007111, 20370000, 20370000, 6000); // Talisman Share - Crimson Amber Medallion ON
    InitializeEvent(11, 9007110, 340900, 340900, 6000); // Talisman Share - Ritual Shield Talisman OFF
    InitializeEvent(11, 9007111, 340900, 340900, 6000); // Talisman Share - Ritual Shield Talisman ON
    InitializeEvent(12, 9007110, 350200, 350200, 6000); // Talisman Share - Blessed Dew OFF
    InitializeEvent(12, 9007111, 350200, 350200, 6000); // Talisman Share - Blessed Dew ON
    InitializeEvent(13, 9007110, 312010, 312010, 6000); // Talisman Share - Mottled Necklace OFF
    InitializeEvent(13, 9007111, 312010, 312010, 6000); // Talisman Share - Mottled Necklace ON
    InitializeEvent(14, 9007110, 350301, 350301, 6000); // Talisman Share - Taker's Cameo OFF
    InitializeEvent(14, 9007111, 350301, 350301, 6000); // Talisman Share - Taker's Cameo ON
    
    InitializeEvent(15, 9007110, 340100, 340100, 6000); // Talisman Share - Spelldrake OFF
    InitializeEvent(15, 9007111, 340100, 340100, 6000); // Talisman Share - Spelldrake ON
    InitializeEvent(16, 9007110, 340200, 340200, 6000); // Talisman Share - Flamedrake OFF
    InitializeEvent(16, 9007111, 340200, 340200, 6000); // Talisman Share - Flamedrake ON
    InitializeEvent(17, 9007110, 340300, 340300, 6000); // Talisman Share - Boltdrake OFF
    InitializeEvent(17, 9007111, 340300, 340300, 6000); // Talisman Share - Boltdrake ON
    InitializeEvent(18, 9007110, 340500, 340500, 6000); // Talisman Share - Pearldrake OFF
    InitializeEvent(18, 9007111, 340500, 340500, 6000); // Talisman Share - Pearldrake ON
    InitializeEvent(19, 9007110, 20371200, 20371200, 6000); // Talisman Share - Golden Braid OFF
    InitializeEvent(19, 9007111, 20371200, 20371200, 6000); // Talisman Share - Golden Braid ON
    InitializeEvent(20, 9007110, 340030, 340030, 6000); // Talisman Share - Dragoncrest Greatshield OFF
    InitializeEvent(20, 9007111, 340030, 340030, 6000); // Talisman Share - Dragoncrest Greatshield ON
    
    InitializeEvent(21, 9007110, 321400, 321400, 6000); // Talisman Share - Lance Talisman OFF
    InitializeEvent(21, 9007111, 321400, 321400, 6000); // Talisman Share - Lance Talisman ON
    InitializeEvent(22, 9007110, 320500, 320500, 6000); // Talisman Share - Ritual Sword Talisman OFF
    InitializeEvent(22, 9007111, 320500, 320500, 6000); // Talisman Share - Ritual Sword Talisman ON
    
    InitializeEvent(23, 9007110, 330020, 330020, 6000); // Talisman Share - Glowing Glintshard OFF
    InitializeEvent(23, 9007111, 330020, 330020, 6000); // Talisman Share - Glowing Glintshard ON
    InitializeEvent(24, 9007110, 330100, 330100, 6000); // Talisman Share - Runebear's Claw OFF
    InitializeEvent(24, 9007111, 330100, 330100, 6000); // Talisman Share - Runebear's Claw ON
    InitializeEvent(25, 9007110, 330110, 330110, 6000); // Talisman Share - Primodrial Pumice Fragment OFF
    InitializeEvent(25, 9007111, 330110, 330110, 6000); // Talisman Share - Primodrial Pumice Fragment ON
    InitializeEvent(26, 9007110, 330120, 330120, 6000); // Talisman Share - Primordial Glass Shard OFF
    InitializeEvent(26, 9007111, 330120, 330120, 6000); // Talisman Share - Primordial Glass Shard ON
    InitializeEvent(27, 9007110, 330130, 330130, 6000); // Talisman Share - Giant's Insignia OFF
    InitializeEvent(27, 9007111, 330130, 330130, 6000); // Talisman Share - Giant's Insignia ON
    InitializeEvent(28, 9007110, 330000, 330000, 6000); // Talisman Share - Graven School Talisman
    InitializeEvent(28, 9007111, 330000, 330000, 6000); // Talisman Share - Graven School Talisman
    InitializeEvent(29, 9007110, 330010, 330010, 6000); // Talisman Share - Graven-Mass Talisman
    InitializeEvent(29, 9007111, 330010, 330010, 6000); // Talisman Share - Graven-Mass Talisman
    InitializeEvent(30, 9007110, 330210, 330210, 6000); // Talisman Share - Everburning Ember
    InitializeEvent(30, 9007111, 330210, 330210, 6000); // Talisman Share - Everburning Ember
    InitializeEvent(31, 9007110, 330220, 330220, 6000); // Talisman Share - Coal of the Forge
    InitializeEvent(31, 9007111, 330220, 330220, 6000); // Talisman Share - Coal of the Forge
    InitializeEvent(32, 9007110, 330300, 330300, 6000); // Talisman Share - Dragonkin Crest
    InitializeEvent(32, 9007111, 330300, 330300, 6000); // Talisman Share - Dragonkin Crest
    InitializeEvent(33, 9007110, 330310, 330310, 6000); // Talisman Share - Chime of Godwyn
    InitializeEvent(33, 9007111, 330310, 330310, 6000); // Talisman Share - Chime of Godwyn
    InitializeEvent(34, 9007110, 330320, 330320, 6000); // Talisman Share - Scale of Gransax
    InitializeEvent(34, 9007111, 330320, 330320, 6000); // Talisman Share - Scale of Gransax
    InitializeEvent(35, 9007110, 330410, 330410, 6000); // Talisman Share - Faithful's Canvas Talisman
    InitializeEvent(35, 9007111, 330410, 330410, 6000); // Talisman Share - Faithful's Canvas Talisman
    InitializeEvent(36, 9007110, 330420, 330420, 6000); // Talisman Share - Flock's Canvas Talisman
    InitializeEvent(36, 9007111, 330420, 330420, 6000); // Talisman Share - Flock's Canvas Talisman
    InitializeEvent(37, 9007110, 320000, 320000, 6000); // Talisman Share - Magic Scorpion Charm
    InitializeEvent(37, 9007111, 320000, 320000, 6000); // Talisman Share - Magic Scorpion Charm
    InitializeEvent(38, 9007110, 320100, 320100, 6000); // Talisman Share - Lightning Scorpion Charm
    InitializeEvent(38, 9007111, 320100, 320100, 6000); // Talisman Share - Lightning Scorpion Charm
    InitializeEvent(39, 9007110, 320200, 320200, 6000); // Talisman Share - Fire Scorpion Charm
    InitializeEvent(39, 9007111, 320200, 320200, 6000); // Talisman Share - Fire Scorpion Charm
    InitializeEvent(40, 9007110, 320300, 320300, 6000); // Talisman Share - Sacred Scorpion Charm
    InitializeEvent(40, 9007111, 320300, 320300, 6000); // Talisman Share - Sacred Scorpion Charm
    InitializeEvent(41, 9007110, 330400, 330400, 6000); // Talisman Share - Emblem of Gold
    InitializeEvent(41, 9007111, 330400, 330400, 6000); // Talisman Share - Emblem of Gold
    
    // - Cracked Tear Share
    InitializeEvent(42, 9007110, 511038, 511038, 6000); // Stonehoof Cracked Tear
    InitializeEvent(42, 9007111, 511038, 511038, 6000); // Stonehoof Cracked Tear
    InitializeEvent(43, 9007110, 511009, 511009, 6000); // Crimsonburst Crystal Tear
    InitializeEvent(43, 9007111, 511009, 511009, 6000); // Crimsonburst Crystal Tear
    InitializeEvent(44, 9007110, 3505, 3505, 6000); // Crimson Crystal Tear
    InitializeEvent(44, 9007111, 3505, 3505, 6000); // Crimson Crystal Tear
    InitializeEvent(45, 9007110, 3500, 3500, 6000); // Crimsonspill Crystal Tear
    InitializeEvent(45, 9007111, 3500, 3500, 6000); // Crimsonspill Crystal Tear
    InitializeEvent(46, 9007110, 511011, 511011, 6000); // Opaline Hardtear
    InitializeEvent(46, 9007111, 511011, 511011, 6000); // Opaline Hardtear
    InitializeEvent(47, 9007110, 3604, 3604, 6000); // Speckled Hardtear
    InitializeEvent(47, 9007111, 3604, 3604, 6000); // Speckled Hardtear
    InitializeEvent(48, 9007110, 3519, 3519, 6000); // Leaden Hardtear
    InitializeEvent(48, 9007111, 3519, 3519, 6000); // Leaden Hardtear
    InitializeEvent(49, 9007110, 511028, 511028, 6000); // Flame Shroudeing Cracked Tear
    InitializeEvent(49, 9007111, 511028, 511028, 6000); // Flame Shroudeing Cracked Tear
    InitializeEvent(50, 9007110, 511029, 511029, 6000); // Magic Shrouding Cracked Tear
    InitializeEvent(50, 9007111, 511029, 511029, 6000); // Magic Shrouding Cracked Tear
    InitializeEvent(51, 9007110, 511030, 511030, 6000); // Ligtning Shrouding Cracked Tear
    InitializeEvent(51, 9007111, 511030, 511030, 6000); // Ligtning Shrouding Cracked Tear
    InitializeEvent(52, 9007110, 511031, 511031, 6000); // Holy Shrouding Cracked  Tear
    InitializeEvent(52, 9007111, 511031, 511031, 6000); // Holy Shrouding Cracked  Tear
    InitializeEvent(53, 9007110, 511032, 511032, 6000); // Stone Shrouding Cracked Tear
    InitializeEvent(53, 9007111, 511032, 511032, 6000); // Stone Shrouding Cracked Tear
    InitializeEvent(54, 9007110, 511026, 511026, 6000); // Stone Barb Cracked Tear
    InitializeEvent(54, 9007111, 511026, 511026, 6000); // Stone Barb Cracked Tear
    InitializeEvent(55, 9007110, 3507, 3507, 6000); // Opaline Bubbletear
    InitializeEvent(55, 9007111, 3507, 3507, 6000); // Opaline Bubbletear
    InitializeEvent(56, 9007110, 511051, 511051, 63200); // Purifying Crystal Tear
    InitializeEvent(56, 9007111, 511051, 511051, 63200); // Purifying Crystal Tear
    
    // - Misc Share
    InitializeEvent(57, 9007110, 503550, 503550, 6000); // Bloodboil Aromatic
    InitializeEvent(57, 9007111, 503550, 503550, 6000); // Bloodboil Aromatic
    InitializeEvent(58, 9007110, 1768, 1768, 63200); // Commander's Standard
    InitializeEvent(58, 9007111, 1768, 1768, 63200); // Commander's Standard
    InitializeEvent(59, 9007110, 1730, 1730, 63200); // Golden Vow (Ash)
    InitializeEvent(59, 9007111, 1730, 1730, 63200); // Golden Vow (Ash)
    InitializeEvent(60, 9007110, 20503170, 20503170, 63200); // Golden Vow (Item)
    InitializeEvent(60, 9007111, 20503170, 20503170, 63200); // Golden Vow (Item)
    
    // - Iframes
    InitializeEvent(10, 9007107, 63200, 187, 10000); // Torrent - Player OFF
    InitializeEvent(10, 9007108, 63200, 187, 10000); // Torrent - Player ON
    InitializeEvent(11, 9007107, 63200, 187, 40000); // Torrent - Mount OFF
    InitializeEvent(11, 9007108, 63200, 187, 40000); // Torrent - Mount ON
    InitializeEvent(12, 9007107, 63202, 188, 10000); // Frenzied Mule - Player OFF
    InitializeEvent(12, 9007108, 63202, 188, 10000); // Frenzied Mule - Player ON
    InitializeEvent(13, 9007107, 63202, 188, 40000); // Frenzied Mule - Mount OFF
    InitializeEvent(13, 9007108, 63202, 188, 40000); // Frenzied Mule - Mount ON
    InitializeEvent(14, 9007107, 63201, 187, 10000); // Funeral Steed - Player OFF
    InitializeEvent(14, 9007108, 63201, 187, 10000); // Funeral Steed - Player ON
    InitializeEvent(15, 9007107, 63201, 187, 40000); // Funeral Steed - Mount OFF
    InitializeEvent(15, 9007108, 63201, 187, 40000); // Funeral Steed - Mount ON
    
    // - - -
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    // - - -
    
    // Mass Consume Runes
    // Base Game Golden Runes
    InitializeEvent(0,  9007120, 11102998, 2900, 3269); // Golden Rune [1]
    InitializeEvent(1,  9007120, 11102998, 2901, 3270); // Golden Rune [2]
    InitializeEvent(2,  9007120, 11102998, 2902, 3271); // Golden Rune [3]
    InitializeEvent(3,  9007120, 11102998, 2903, 3272); // Golden Rune [4]
    InitializeEvent(4,  9007120, 11102998, 2904, 3273); // Golden Rune [5]
    InitializeEvent(5,  9007120, 11102998, 2905, 3274); // Golden Rune [6]
    InitializeEvent(6,  9007120, 11102998, 2906, 3275); // Golden Rune [7]
    InitializeEvent(7,  9007120, 11102998, 2907, 3276); // Golden Rune [8]
    InitializeEvent(8,  9007120, 11102998, 2908, 3277); // Golden Rune [9]
    InitializeEvent(9,  9007120, 11102998, 2909, 3278); // Golden Rune [10]
    InitializeEvent(10, 9007120, 11102998, 2910, 3279); // Golden Rune [11]
    InitializeEvent(11, 9007120, 11102998, 2911, 3280); // Golden Rune [12]
    InitializeEvent(12, 9007120, 11102998, 2912, 3281); // Golden Rune [13]
    InitializeEvent(13, 9007120, 11102998, 2913, 3282); // Numen's Rune
    InitializeEvent(14, 9007120, 11102998, 2914, 3283); // Hero's Rune [1]
    InitializeEvent(15, 9007120, 11102998, 2915, 3284); // Hero's Rune [2]
    InitializeEvent(16, 9007120, 11102998, 2916, 3285); // Hero's Rune [3]
    InitializeEvent(17, 9007120, 11102998, 2917, 3286); // Hero's Rune [4]
    InitializeEvent(18, 9007120, 11102998, 2918, 3287); // Hero's Rune [5]
    InitializeEvent(19, 9007120, 11102998, 2919, 3288); // Lord's Rune
    InitializeEvent(20, 9007120, 11102998, 2990, 3276); // Lands Between Rune
    // SOTE Golden Runes
    InitializeEvent(21, 9007120, 11102998, 2002950, 20502950); // Leda's Rune
    InitializeEvent(22, 9007120, 11102998, 2002951, 20502951); // Broken Rune
    InitializeEvent(23, 9007120, 11102998, 2002952, 20502952); // Shadow Realm Rune [1]
    InitializeEvent(24, 9007120, 11102998, 2002953, 20502953); // Shadow Realm Rune [2]
    InitializeEvent(25, 9007120, 11102998, 2002954, 20502954); // Shadow Realm Rune [3]
    InitializeEvent(26, 9007120, 11102998, 2002955, 20502955); // Shadow Realm Rune [4]
    InitializeEvent(27, 9007120, 11102998, 2002956, 20502956); // Shadow Realm Rune [5]
    InitializeEvent(28, 9007120, 11102998, 2002957, 20502957); // Shadow Realm Rune [6]
    InitializeEvent(29, 9007120, 11102998, 2002958, 20502958); // Shadow Realm Rune [7]
    InitializeEvent(30, 9007120, 11102998, 2002959, 20502959); // Rune of an Unsung Hero
    InitializeEvent(31, 9007120, 11102998, 2002960, 20502960); // Marika's Rune
    // Base Game Rememberances
    InitializeEvent(32, 9007120, 11102999, 2950, 3720); // Remenbrance of the Grafted
    InitializeEvent(33, 9007120, 11102999, 2951, 3721); // Remenbrance of the Starscourge
    InitializeEvent(34, 9007120, 11102999, 2952, 3722); // Remenbrance of the Omen King
    InitializeEvent(35, 9007120, 11102999, 2953, 3723); // Remenbrance of the Blashpemous
    InitializeEvent(36, 9007120, 11102999, 2954, 3724); // Remenbrance of the Rot Goddess
    InitializeEvent(37, 9007120, 11102999, 2955, 3725); // Remenbrance of the Blood Lord
    InitializeEvent(38, 9007120, 11102999, 2956, 3726); // Remenbrance of the Black Blade
    InitializeEvent(39, 9007120, 11102999, 2957, 3727); // Remenbrance of Hoarah Loux
    InitializeEvent(40, 9007120, 11102999, 2958, 3728); // Remenbrance of the Dragonlord
    InitializeEvent(41, 9007120, 11102999, 2959, 3729); // Remenbrance of the Full Moon Queen
    InitializeEvent(42, 9007120, 11102999, 2960, 3730); // Remenbrance of the Lichdragon
    InitializeEvent(43, 9007120, 11102999, 2961, 3731); // Remenbrance of the Fire Giant
    InitializeEvent(44, 9007120, 11102999, 2962, 3732); // Remenbrance of the Regal Ancestor
    InitializeEvent(45, 9007120, 11102999, 2963, 3733); // Elden Remebrance
    // SOTE Rememberances
    InitializeEvent(46, 9007120, 11102999, 2002900, 20502900); // Rembrance of the Wild Boar Rider
    InitializeEvent(47, 9007120, 11102999, 2002901, 20502901); // Remembrance of the Impaler
    InitializeEvent(48, 9007120, 11102999, 2002902, 20502902); // Remembrance of the Shadow Sunflower
    InitializeEvent(49, 9007120, 11102999, 2002903, 20502903); // Remembrance of the Twin Moon Knight
    InitializeEvent(50, 9007120, 11102999, 2002904, 20502904); // Remembrance of the Saint of the Bud
    InitializeEvent(51, 9007120, 11102999, 2002905, 20502905); // Remembrance of the Dancing Lion
    InitializeEvent(52, 9007120, 11102999, 2002907, 20502907); // Remembrance of a God and a Lord
    InitializeEvent(53, 9007120, 11102999, 2002908, 20502908); // Remembrance of the Lord of Frenzied Flame
    InitializeEvent(54, 9007120, 11102999, 2002909, 20502909); // Remembrance of the Mother of Fingers
    InitializeEvent(55, 9007120, 11102999, 2002910, 20502910); // Remembrance of Putrescence
    // Convergence Rememberances
    InitializeEvent(56, 9007120, 11102999, 2964, 3734); // Remenbrance of the Naturalborn
    InitializeEvent(57, 9007120, 11102999, 2965, 3735); // Remenbrance of the Crucible's Betrayer
    InitializeEvent(58, 9007120, 11102999, 2966, 3736); // Remenbrance of the Godskin Matriach
    InitializeEvent(59, 9007120, 11102999, 2967, 3737); // Remembrance of the Scion of the Sealed God
    InitializeEvent(60, 9007120, 11102999, 2968, 3738); // Remembrance of Dyru, Scavenger King
    InitializeEvent(61, 9007120, 11102999, 2969, 3739); // Remembrance of Einar, Ice Guardian
    InitializeEvent(62, 9007120, 11102999, 2970, 3740); // Remembrance of Spiritshaper Caimar
    
    //InitializeEvent(0, 945, 0);
    InitializeEvent(0, 920, 0);
    InitializeEvent(0, 921, 0);
    InitializeEvent(0, 922, 0);
    InitializeEvent(2, 130, 14004100);
    
    InitializeEvent(0, 9007130, 0);
    
    // Steam Achievements (Disabled)
    /*
    InitializeEvent(4, 9300, 4, 10000800, 0);
    InitializeEvent(5, 9300, 5, 9130, 0);
    InitializeEvent(6, 9300, 6, 11000800, 0);
    InitializeEvent(7, 9300, 7, 16000800, 0);
    InitializeEvent(8, 9300, 8, 15000800, 0);
    InitializeEvent(9, 9300, 9, 12050800, 0);
    InitializeEvent(10, 9300, 10, 13000800, 0);
    InitializeEvent(11, 9300, 11, 11050800, 0);
    InitializeEvent(12, 9300, 12, 13000830, 0);
    InitializeEvent(18, 9300, 18, 14000800, 0);
    InitializeEvent(19, 9300, 19, 12030850, 0);
    InitializeEvent(20, 9300, 20, 13000850, 0);
    InitializeEvent(21, 9300, 21, 1052520800, 0);
    InitializeEvent(22, 9300, 22, 12010800, 0);
    InitializeEvent(23, 9300, 23, 12090800, 0);
    InitializeEvent(24, 9300, 24, 12020800, 0);
    InitializeEvent(25, 9300, 25, 10000850, 0);
    InitializeEvent(26, 9300, 26, 14000850, 0);
    InitializeEvent(27, 9300, 27, 16000850, 0);
    InitializeEvent(28, 9300, 28, 39200800, 0);
    InitializeEvent(29, 9300, 29, 11000850, 0);
    InitializeEvent(30, 9300, 30, 35000800, 0);
    InitializeEvent(31, 9300, 31, 12020850, 0);
    InitializeEvent(32, 9300, 32, 15000850, 0);
    InitializeEvent(33, 9300, 33, 12040800, 0);
    InitializeEvent(34, 9300, 34, 1043300800, 0);
    InitializeEvent(35, 9300, 35, 1035500800, 0);
    InitializeEvent(36, 9300, 36, 1039540800, 0);
    InitializeEvent(37, 9300, 37, 12080800, 0);
    InitializeEvent(38, 9300, 38, 1051570800, 0);
    InitializeEvent(39, 9300, 39, 105, 0);
    InitializeEvent(41, 9300, 41, 110, 0);
    */
    InitializeEvent(0, 9360, 0, 100, 0);
    InitializeEvent(1, 9360, 1, 9390, 0);
    InitializeEvent(2, 9360, 2, 9392, 0);
    InitializeEvent(3, 9360, 3, 11000801, 0);
    InitializeEvent(4, 9360, 4, 1252520801, 0);
    InitializeEvent(5, 9360, 5, 13000801, 0);
    InitializeEvent(6, 9360, 6, 19000802, 0);
    InitializeEvent(0, 9375, 0, 120, 0);
    InitializeEvent(1, 9375, 1, 9391, 0);
    InitializeEvent(2, 9375, 2, 9393, 0);
    InitializeEvent(3, 9375, 3, 11000800, 0);
    InitializeEvent(4, 9375, 4, 1252520800, 0);
    InitializeEvent(5, 9375, 5, 13000800, 0);
    InitializeEvent(6, 9375, 6, 19000800, 0);
    InitializeEvent(0, 9390, 6001, 10000801, 1252380801, 16000801, 12050801, 0);
    InitializeEvent(1, 9390, 6001, 10000800, 1252380800, 16000800, 12050800, 0);
    InitializeEvent(2, 9390, 9390, 10000801, 1252380801, 16000801, 12050801, 11000801);
    InitializeEvent(3, 9390, 9391, 10000800, 1252380800, 16000800, 12050800, 11000800);
    InitializeEvent(0, 1800, 0);
    InitializeEvent(0, 1801, 0);
    InitializeEvent(0, 1450, 65610, 65620, 65630, 0);
    InitializeEvent(1, 1450, 65640, 65650, 0, 0);
    InitializeEvent(2, 1450, 65660, 65670, 0, 0);
    InitializeEvent(4, 1450, 65680, 65690, 0, 0);
    InitializeEvent(3, 1450, 65720, 65700, 65710, 0);
    InitializeEvent(0, 1460, 0);
    InitializeEvent(0, 1461, 0);
    InitializeEvent(0, 1462, 0);
    InitializeEvent(0, 1700, 0);
    InitializeEvent(0, 1701, 0);
    InitializeEvent(0, 1703, 0);
    
    //Tutorial Handler: About Containers
    //InitializeEvent(0, 1704, 0);
    
    InitializeEvent(0, 1705, 0);
    InitializeEvent(0, 1750, 0);
    InitializeEvent(0, 1751, 0);
    InitializeEvent(0, 1752, 0);
    InitializeEvent(0, 1706, 0); // DLC
    //InitializeEvent(0, 1707, 0); // DLC Tutorial
    //InitializeEvent(0, 1708, 0); // DLC Tutorial
    
    //Tutorial Handler: About Birdseye Telescopes
    InitializeEvent(0, 1720, 69170, 710610, 1610, 9117);
    
    //Tutorial Handler: About Spiritspring Jumping
    InitializeEvent(1, 1720, 69180, 710620, 1620, 9118);
    
    //Tutorial Handler: About Vanquishing Enemy Groups
    InitializeEvent(2, 1720, 69190, 710630, 1630, 9119);
    
    //Tutorial Handler: About Sorceries and Incantations
    InitializeEvent(3, 1720, 69010, 710060, 1060, 9101);
    
    //Tutorial Handler: About Bows
    InitializeEvent(4, 1720, 69020, 710130, 1130, 9102);
    
    //Tutorial Handler: About Summoning Spirits
    InitializeEvent(5, 1720, 69110, 710550, 1550, 9111);
    
    //Tutorial Handler: About Materials
    InitializeEvent(6, 1720, 69340, 710560, 1560, 9134);
    
    //Tutorial Handler: About Adding Affinities
    InitializeEvent(9, 1720, 69360, 710750, 1750, 9136);
    
    //Tutorial Handler: About Teardrop Scarabs
    InitializeEvent(10, 1720, 69200, 710640, 1640, 9120);
    
    //Tutorial Handler: About Summoning Pools
    //InitializeEvent(11, 1720, 69260, 710690, 1690, 9126);
    
    //Tutorial Handler: About Monument Icon
    InitializeEvent(12, 1720, 69270, 710710, 1710, 9127);
    
    //Tutorial Handler: About Summoning Other Players
    //InitializeEvent(13, 1720, 69210, 710650, 1650, 9121);
    
    //Tutorial Handler: About Great Runes
    //InitializeEvent(14, 1720, 69390, 710810, 1810, 9141);
    
    //Tutorial Handler: About the Cave of Knowledge
    //InitializeEvent(15, 1720, 69420, 710820, 1820, 9142);
    
    //Tutorial Handler: About the Scadutree Blessing
    //InitializeEvent(16, 1720, 69500, 710900, 1900, 2009160);
    
    //Tutorial Handler: About the Revered Spirit Ash Blessing
    //InitializeEvent(17, 1720, 69510, 710910, 1910, 2009161);
    
    InitializeEvent(0, 1790, 0);
    InitializeEvent(0, 1770, 700800, 710800, 1800);
    InitializeEvent(0, 950, 0);
    InitializeEvent(0, 960, 76100);
    InitializeEvent(1, 960, 76108);
    InitializeEvent(2, 960, 76104);
    InitializeEvent(3, 960, 76102);
    InitializeEvent(4, 960, 76106);
    InitializeEvent(6, 960, 76111);
    InitializeEvent(7, 960, 76157);
    InitializeEvent(8, 960, 76113);
    InitializeEvent(0, 720, 160, 0);
    InitializeEvent(1, 720, 161, 1);
    InitializeEvent(2, 720, 162, 2);
    InitializeEvent(3, 720, 163, 3);
    InitializeEvent(4, 720, 164, 4);
    InitializeEvent(5, 720, 165, 5);
    InitializeEvent(6, 720, 166, 6);
    InitializeEvent(7, 720, 167, 7);
    InitializeEvent(0, 730, 180, 0);
    InitializeEvent(1, 730, 181, 1);
    InitializeEvent(2, 730, 182, 2);
    InitializeEvent(3, 730, 183, 3);
    InitializeEvent(4, 730, 184, 4);
    InitializeEvent(5, 730, 185, 5);
    InitializeEvent(6, 730, 186, 6);
    InitializeEvent(7, 730, 187, 7);
    // Keystone Counters
    InitializeEvent(0, 760, 1099004000, 0);
    InitializeEvent(1, 760, 1099004001, 1);
    InitializeEvent(2, 760, 1099004002, 2);
    InitializeEvent(3, 760, 1099004003, 3);
    InitializeEvent(4, 760, 1099004004, 4);
    
    // DLC (Unknown)
    InitializeEvent(0, 65910, 65910, 2046477150, 0, 0, 0, 0);
    InitializeEvent(1, 65910, 65911, 530965, 0, 0, 0, 0);
    InitializeEvent(2, 65910, 65912, 290320, 0, 0, 0, 0);
    InitializeEvent(3, 65910, 65913, 400730, 0, 0, 0, 0);
    InitializeEvent(4, 65910, 65914, 540902, 0, 0, 0, 0);
    InitializeEvent(5, 65910, 65915, 540910, 0, 0, 0, 0);
    InitializeEvent(6, 65910, 65916, 21027020, 0, 0, 0, 0);
    InitializeEvent(7, 65910, 65917, 540904, 0, 0, 0, 0);
    InitializeEvent(8, 65910, 65918, 540906, 0, 0, 0, 0);
    InitializeEvent(9, 65910, 65919, 2047407980, 0, 0, 0, 0);
    InitializeEvent(10, 65910, 65920, 2047427700, 0, 0, 0, 0);
    InitializeEvent(11, 65910, 65921, 400594, 0, 0, 0, 0);
    InitializeEvent(12, 65910, 65922, 2045447010, 0, 0, 0, 0);
    InitializeEvent(13, 65910, 65923, 2048447810, 0, 0, 0, 0);
    InitializeEvent(14, 65910, 65924, 40007900, 0, 0, 0, 0);
    InitializeEvent(15, 65910, 65925, 400696, 0, 0, 0, 0);
    InitializeEvent(16, 65910, 65926, 2045437700, 0, 0, 0, 0);
    InitializeEvent(17, 65910, 65927, 280990, 0, 0, 0, 0);
    InitializeEvent(18, 65910, 65928, 21017991, 0, 0, 0, 0);
    InitializeEvent(19, 65910, 65929, 540900, 0, 0, 0, 0);
    InitializeEvent(20, 65910, 65930, 20007410, 0, 0, 0, 0);
    InitializeEvent(21, 65910, 65931, 530855, 0, 0, 0, 0);
    InitializeEvent(22, 65910, 65932, 540916, 0, 0, 0, 0);
    InitializeEvent(23, 65910, 65933, 400712, 0, 0, 0, 0);
    InitializeEvent(24, 65910, 65934, 21017150, 0, 0, 0, 0);
    
    InitializeEvent(0, 1080, 0);
    InitializeEvent(0, 1088, 0);
    InitializeEvent(0, 841, 0);
    InitializeEvent(0, 9910, 3005);
    InitializeEvent(0, 750, 0);
    InitializeEvent(0, 9941, 0);
    InitializeEvent(0, 9943, 0);
    InitializeEvent(0, 9940, 0);
    InitializeEvent(0, 1700, 0);
    //Fia in Deeproot Flags
    //SetEventFlagID(4126, ON);
    //SetEventFlagID(4127, ON);
    //SetEventFlagID(4128, ON);
    //InitializeEvent(0, 1802, 0); //script test on flask drink
    //InitializeEvent(0, 9006001, 0); //Keystone Aquisition Flags
    
    // Developer Tool - Area Reloader
    InitializeEvent(0, 9006066, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 700, 0);
    InitializeEvent(0, 707, 0); // DLC
    InitializeEvent(0, 710, 0);
    InitializeEvent(0, 711, 0);
    InitializeEvent(0, 715, 0);
    InitializeEvent(0, 716, 0);
    InitializeEvent(0, 717, 0); // Flag Handler - Are you in the DLC world (DLC)
    
    SetEventFlagID(6000, OFF);
    SetEventFlagID(6001, ON);
    SetEventFlagID(9000, OFF);
    SetEventFlagID(9001, OFF);
    SetEventFlagID(280, OFF);
    
    InitializeEvent(0, 740, 0);
    InitializeEvent(0, 810, 0);
    InitializeEvent(0, 9006063, 0); // Keep Night after Death workaround - Base
    InitializeEvent(0, 820, 550, 5);
    InitializeEvent(1, 820, 551, 0);
    InitializeEvent(2, 820, 552, 6);
    InitializeEvent(3, 820, 553, 7);
    InitializeEvent(4, 820, 554, 1);
    InitializeEvent(5, 820, 555, 8);
    InitializeEvent(6, 820, 556, 3);
    InitializeEvent(7, 820, 557, 9);
    InitializeEvent(8, 820, 558, 2);
    InitializeEvent(9, 820, 559, 10);
    InitializeEvent(10, 820, 560, 4);
    InitializeEvent(11, 820, 561, 11);
    InitializeEvent(12, 820, 562, 15);
    InitializeEvent(13, 820, 563, 12);
    InitializeEvent(0, 839, 0);
    InitializeEvent(0, 840, 0);
    InitializeEvent(0, 980, 0);
    SetEventFlagID(909, OFF);
    InitializeEvent(0, 3040, 0);
    InitializeEvent(0, 9440, 0); // DLC
    InitializeEvent(0, 3041, 0);
    InitializeEvent(0, 3042, 0);
    InitializeEvent(0, 3043, 0);
    InitializeEvent(0, 3044, 0);
    InitializeEvent(0, 3045, 0);
    InitializeEvent(0, 3046, 0);
    InitializeEvent(0, 3056, 0);
    InitializeEvent(0, 3080, 0);
    if (!EventFlag(2052)) {
        // NPC Flag Management
        InitializeEvent(0, 3179, 0);
        InitializeEvent(0, 3499, 0);
        InitializeEvent(0, 3659, 0);
        InitializeEvent(0, 3239, 0);
        InitializeEvent(0, 3619, 0);
        InitializeEvent(0, 3559, 0);
        InitializeEvent(0, 3679, 0);
        InitializeEvent(0, 3959, 0);
        InitializeEvent(0, 3779, 0);
        InitializeEvent(0, 3839, 0);
        InitializeEvent(0, 3859, 0);
        InitializeEvent(0, 4119, 0);
        InitializeEvent(0, 3119, 0);
        InitializeEvent(0, 3199, 0);
        InitializeEvent(0, 3279, 0);
        InitializeEvent(0, 3299, 0);
        InitializeEvent(0, 3579, 0);
        InitializeEvent(0, 3699, 0);
        InitializeEvent(0, 3399, 0);
        InitializeEvent(0, 3419, 0);
        InitializeEvent(0, 3379, 0);
        InitializeEvent(0, 3439, 0);
        InitializeEvent(0, 3459, 0);
        InitializeEvent(0, 3479, 0);
        InitializeEvent(0, 3639, 0);
        InitializeEvent(0, 3719, 0);
        InitializeEvent(0, 3599, 0);
        InitializeEvent(0, 4259, 0);
        InitializeEvent(0, 3979, 0);
        InitializeEvent(0, 3919, 0);
        InitializeEvent(0, 3899, 0);
        InitializeEvent(0, 3739, 0);
        InitializeEvent(0, 4159, 0);
        InitializeEvent(0, 3799, 0);
        InitializeEvent(0, 3819, 0);
        InitializeEvent(0, 4239, 0);
        InitializeEvent(0, 3879, 0);
        InitializeEvent(0, 4199, 0);
        InitializeEvent(0, 4179, 0);
        InitializeEvent(0, 4219, 0);
        InitializeEvent(0, 4719, 0);
        InitializeEvent(0, 4739, 0);
        InitializeEvent(0, 4059, 0);
        InitializeEvent(0, 4139, 0);
        InitializeEvent(0, 4079, 0);
        InitializeEvent(0, 3759, 0);
        InitializeEvent(0, 4279, 0); // DLC
        InitializeEvent(0, 4299, 0); // DLC
        InitializeEvent(0, 4319, 0); // Dragon Priestess Florrisax
        InitializeEvent(0, 4339, 0); // DLC
        InitializeEvent(0, 4359, 0); // DLC
        InitializeEvent(0, 4379, 0); // DLC
        InitializeEvent(0, 4399, 0); // DLC
        InitializeEvent(0, 4419, 0); // DLC
        InitializeEvent(0, 4439, 0); // DLC
        InitializeEvent(0, 4459, 0); // DLC
        InitializeEvent(0, 4479, 0); // DLC
        InitializeEvent(0, 4499, 0); // DLC
        InitializeEvent(0, 4519, 0); // DLC
        InitializeEvent(0, 4579, 0); // DLC
    }
    InitializeEvent(0, 3049, 0);
    InitializeEvent(0, 3050, 0);
    InitializeEvent(0, 3051, 0);
    InitializeEvent(0, 3052, 0);
    InitializeEvent(0, 3053, 0);
    InitializeEvent(0, 3054, 0);
    //InitializeEvent(0, 3055, 0); Baldachin's Blessing Debuff Handler
    InitializeEvent(0, 3058, 0);
    InitializeEvent(0, 3059, 0);
    InitializeEvent(0, 3089, 0);
    InitializeEvent(0, 4612, 0);
    InitializeEvent(0, 60701, 11109751, 60701);
    InitializeEvent(1, 60701, 11109752, 60702);
    InitializeEvent(2, 60701, 11109753, 60703);
    InitializeEvent(3, 60701, 11109754, 60704);
    InitializeEvent(4, 60701, 11109755, 60705);
    InitializeEvent(5, 60701, 11109756, 60706);
    InitializeEvent(6, 60701, 11109757, 60707);
    InitializeEvent(7, 60701, 11109758, 60708);
    InitializeEvent(8, 60701, 11109759, 60709);
    InitializeEvent(9, 60701, 11109760, 60710);
    InitializeEvent(10, 60701, 11109761, 60711);
    InitializeEvent(11, 60701, 11109762, 60712);
    InitializeEvent(12, 60701, 11109763, 60713);
    InitializeEvent(13, 60701, 11109764, 60714);
    InitializeEvent(14, 60701, 11109765, 60715);
    InitializeEvent(29, 60701, 11109745, 60730);
    InitializeEvent(30, 60701, 11109746, 60731);
    InitializeEvent(31, 60701, 11109747, 60732);
    InitializeEvent(32, 60701, 11109748, 60733);
    InitializeEvent(41, 60701, 11109792, 60742); // DLC
    InitializeEvent(42, 60701, 11109793, 60743); // DLC
    InitializeEvent(43, 60701, 11109794, 60744); // DLC
    InitializeEvent(44, 60701, 11109795, 60745); // DLC
    InitializeEvent(45, 60701, 11109796, 60746); // DLC
    InitializeEvent(47, 60701, 11109798, 60748); // DLC
    InitializeEvent(48, 60701, 11109799, 60749); // DLC
    InitializeEvent(0, 3081, 1037429202, 1038519202, 1038509202, 16009302, 16009312, 16009322, 16009313);
    InitializeEvent(0, 3082, 1042369202, 1035449202, 12059163);
    InitializeEvent(0, 3083, 16009202, 16009252);
    InitializeEvent(0, 3084, 1036419202, 1036419213, 1047589202);
    InitializeEvent(0, 3085, 1037549202, 1039549203);
    InitializeEvent(0, 3086, 1044389202, 1043359252, 1035469202, 1039529202);
    InitializeEvent(0, 3087, 1042389252, 1042389263, 16009452);
    InitializeEvent(0, 3088, 1036439202, 1036439218, 1044529252, 1044529253);
    InitializeEvent(0, 3090, 1034449200, 11059400);
    InitializeEvent(0, 3091, 1034509400);
    InitializeEvent(0, 3092, 1034499200);
    InitializeEvent(0, 3093, 1034509300);
    InitializeEvent(0, 3094, 12039150);
    InitializeEvent(0, 3095, 1045399200);
    InitializeEvent(0, 3096, 1038439200, 35009200);
    InitializeEvent(0, 3097, 1051369222);
    InitializeEvent(0, 4600, 10009549, 10009506);
    InitializeEvent(0, 4601, 14009202);
    InitializeEvent(0, 4602, 1037449202, 16009412, 1039449302);
    InitializeEvent(0, 4603, 35009302);
    InitializeEvent(0, 4604, 1050389252, 1050389262, 1038519252);
    InitializeEvent(0, 4606, 1050389202);
    InitializeEvent(0, 4607, 1043399302, 1039449202, 1035539202, 13009262);
    InitializeEvent(0, 4608, 1039449252);
    InitializeEvent(0, 4609, 1039409252, 1036489202, 1039519202, 11109802);
    InitializeEvent(0, 4611, 11009452, 1040549202);
    InitializeEvent(0, 3098, 0);
    InitializeEvent(0, 3099, 0);
    // DLC
    InitializeEvent(0, 4841, 2049399735, 2049399728, 2049399722, 2049399737, 2049399734, 2049399746, 2049399747, 2049399748, 4820, 4821, 4822, 2049399724, 2049399726);
    InitializeEvent(0, 4842, 2049399728, 2049399730, 2049399732, 2049399722, 2049399734, 2049399735, 4820, 4822, 4318, 4825, 4827);
    InitializeEvent(0, 4858, 400700, 2049399743, 2049392711, 107010); // Obtain Ash - Ancient Dragon Florissax
    InitializeEvent(0, 4843, 7625, 4928);
    InitializeEvent(0, 4844, 0);
    InitializeEvent(0, 4845, 2046429211, 4365, 2046429209, 2046420700, 1106247680, 2046422707, 2048459221, 4366, 2048459215, 2048450700, 2048452707, 1030000, 1030001);
    InitializeEvent(0, 4847, 21019218, 21019214, 21019207, 21019210, 21010800, 21019219);
    InitializeEvent(0, 4853, 2048459219, 2048459223);
    InitializeEvent(0, 4846, 4865, 4345, 4860, 4358, 4345, 4357);
    InitializeEvent(0, 4931, 0);
    InitializeEvent(0, 4849, 4460, 4466, 4467, 4900, 22000800, 22009208, 22002181, 4928, 7625);
    InitializeEvent(0, 4850, 4380, 4382, 4383, 2045429282, 4901);
    InitializeEvent(0, 4851, 2048459223, 2048459258, 2048459290, 2048459261, 2048459292, 21019205, 7623, 21019321, 2048459267, 2048459295, 4899, 4403, 4896, 21019322, 7621, 2048459297, 7624, 7622, 2048459296, 4458);
    InitializeEvent(0, 4854, 2051459246, 4505, 2051459243, 2051450710, 1106247680, 2051452715, 1030010);
    InitializeEvent(1, 4854, 2051459208, 4505, 2051459244, 2051450710, 1106247680, 2051452716, 1030011);
    InitializeEvent(2, 4854, 2051459247, 4505, 2051459245, 2051450710, 1106247680, 2051452717, 1030012);
    InitializeEvent(0, 4857, 2051450800, 106640, 0, 400664);
    InitializeEvent(0, 4859, 2051459217, 2051459232, 2051459216, 2051459234, 2050400600, 2053460600, 2051459230);
    InitializeEvent(0, 4930, 400670, 2051459747, 2051452726, 106700, 2051459733, 2051459738);
    InitializeEvent(0, 4932, 0);
    InitializeEvent(0, 4613, 20009250, 20009253);
    InitializeEvent(0, 4614, 2048429200, 2048429203, 2052409200, 2052409203);
    InitializeEvent(0, 4615, 22009250, 22009270);
    InitializeEvent(0, 4616, 2049399700);
    InitializeEvent(0, 4617, 2051459700);
    InitializeEvent(0, 4619, 21009200);
    InitializeEvent(0, 4620, 2046429200, 2048459200, 2048459203, 21019200, 21019203);
    InitializeEvent(0, 4621, 2045429250, 2045429251);
    InitializeEvent(0, 4622, 2045429200, 21019300, 20019200, 20019230, 21019303);
    InitializeEvent(0, 4623, 2046429350, 2046429353, 21019350, 21019353);
    InitializeEvent(0, 4624, 12059250, 2048459250, 20019250);
    InitializeEvent(0, 4625, 2048439200, 22009200, 20019300);
    InitializeEvent(0, 4626, 2051459200);
    InitializeEvent(0, 4627, 2049449200, 2049449203);
    InitializeEvent(0, 4852, 0); // Miquella's Greatrune Breaking
    
    if (EventFlag(6010) && !EventFlag(100)) {
        SetEventFlagID(6010, OFF);
    }
L0:
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    InitializeEvent(0, 6800, 11000, 65000);
    InitializeEvent(1, 6800, 11001, 65010);
    InitializeEvent(2, 6800, 11002, 65020);
    InitializeEvent(3, 6800, 11003, 65030);
    InitializeEvent(4, 6800, 11004, 65040);
    InitializeEvent(5, 6800, 11005, 65050);
    InitializeEvent(6, 6800, 11006, 65060);
    InitializeEvent(7, 6800, 11007, 65070);
    InitializeEvent(8, 6800, 11008, 65080);
    InitializeEvent(9, 6800, 11009, 65090);
    InitializeEvent(10, 6800, 11010, 65100);
    InitializeEvent(11, 6800, 11011, 65110);
    InitializeEvent(12, 6800, 11012, 65120);
    InitializeEvent(13, 6800, 11013, 65130);
    InitializeEvent(14, 6800, 11014, 65140);
    InitializeEvent(15, 6800, 11015, 65150);
    InitializeEvent(16, 6800, 11016, 65160);
    InitializeEvent(17, 6800, 11017, 65170);
    InitializeEvent(18, 6800, 11018, 65180);
    InitializeEvent(19, 6800, 11019, 65190);
    InitializeEvent(20, 6800, 11020, 65200);
    InitializeEvent(21, 6800, 11021, 65210);
    InitializeEvent(22, 6800, 11022, 65220);
    InitializeEvent(23, 6800, 11023, 65230);
    InitializeEvent(24, 6800, 11024, 65240);
    InitializeEvent(25, 6800, 11025, 65250);
    InitializeEvent(26, 6800, 11026, 65260);
    InitializeEvent(27, 6800, 11027, 65270);
    InitializeEvent(28, 6800, 11028, 65280);
    InitializeEvent(29, 6800, 11029, 65290);
    InitializeEvent(30, 6800, 11030, 65300);
    InitializeEvent(31, 6800, 11031, 65310);
    InitializeEvent(0, 6901, 0);
    InitializeEvent(0, 6902, 0);
    InitializeEvent(0, 6903, 0);
    InitializeEvent(0, 6904, 0);
    InitializeEvent(0, 6905, 0);
    InitializeEvent(0, 6906, 0);
    InitializeEvent(0, 6907, 0);
    InitializeEvent(0, 6908, 0);
    InitializeEvent(0, 6909, 0); // DLC
    InitializeEvent(0, 6910, 0); // DLC
    
    EndEvent();
});

$Event(130, Default, function(X0_4) {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && PlayerStandingOnHit(X0_4));
    SetThisEventSlot(ON);
});

// Collections - 9008000 range
// Spells
$Event(9008000, Default, function() {
    //Setup Purifying Cautery
    InitializeEvent(0, 9006028, 0);
    // Molten stride scripts
    InitializeEvent(0, 9006067, 0);
    InitializeEvent(0, 9006068, 0);
    //Night Permabuff Canceling
    InitializeEvent(0, 9006003, 0);
    //Embrace the Devourer Buffs
    InitializeEvent(0, 9006004, 0);
    //Embrace the Devourer Canceling
    InitializeEvent(0, 9006005, 0);
    //InitializeEvent(0, 9006010, 97491);
    //InitializeEvent(1, 9006010, 97492);
    //InitializeEvent(2, 9006010, 97493);
    //InitializeEvent(3, 9006010, 97494);
    //InitializeEvent(4, 9006010, 97495);
    //InitializeEvent(0, 9006011, 0);
    //InitializeEvent(0, 9006012, 0);
    //InitializeEvent(0, 9006013, 0);
    //InitializeEvent(0, 9006014, 0);
    //InitializeEvent(0, 9006015, 0);
    //InitializeEvent(0, 9006016, 0);
    InitializeEvent(0, 9006017, 0);
    InitializeEvent(0, 9006018, 0);
    InitializeEvent(0, 9006019, 0);
    InitializeEvent(0, 9006020, 0);
    InitializeEvent(0, 9006021, 0);
    //Anima Magica effects script
    InitializeEvent(0, 9006022, 0);
    //Energy Shell effects script
    //InitializeEvent(0, 9006023, 0);
    //InitializeEvent(0, 9006026, 0);
    //Anima Magica Cleanup scripts
    InitializeEvent(0, 9006024, 0);
    //Spirit Siphon setup
    InitializeEvent(0, 9006030, 0);
    //Servants of Rot Permabuff Scripts
    InitializeEvent(0, 9006031, 0);
    InitializeEvent(0, 9006032, 0);
    InitializeEvent(0, 9006033, 0);
    InitializeEvent(0, 9006034, 0);
    //Blood Pact Permabuff Scripts
    InitializeEvent(0, 9006035, 0);
    InitializeEvent(0, 9006036, 0);
    //Godslayer's Devotion Scripts
    InitializeEvent(0, 9006037, 0);
    InitializeEvent(0, 9006038, 1626101);
    InitializeEvent(0, 9006038, 1626105);
    //Wrath of the Queen Scripts
    InitializeEvent(0, 9006039, 0);
    //Change weather scripts for Whiteout spell
    InitializeEvent(0, 9006040, 0);
    InitializeEvent(0, 9006041, 0);
    InitializeEvent(0, 9006042, 0);
    InitializeEvent(0, 9006044, 0);
    InitializeEvent(0, 9006045, 0);
    InitializeEvent(0, 9006046, 0);
    InitializeEvent(0, 9006047, 0);
    //Permabuff toggle scripts
    InitializeEvent(0, 9006050, 1414000, 1414010); //Starlight
    InitializeEvent(0, 9006051, 1414000, 1414010);
    InitializeEvent(1, 9006050, 1479000, 1479010); //Astral Alignment
    InitializeEvent(1, 9006051, 1479000, 1479010);
    InitializeEvent(2, 9006050, 1458000, 1458010); //Strength of the Underworld
    InitializeEvent(2, 9006051, 1458000, 1458010);
    InitializeEvent(3, 9006050, 1458100, 1458110); //Wisdom of the Makers
    InitializeEvent(3, 9006051, 1458100, 1458110);
    InitializeEvent(4, 9006050, 1485210, 1485220); //Embrace the Devourer
    InitializeEvent(4, 9006051, 1485210, 1485220);
    InitializeEvent(5, 9006050, 1467100, 1467110); //Oath of Darkness
    InitializeEvent(5, 9006051, 1467100, 1467110);
    InitializeEvent(6, 9006050, 1467200, 1467210); //Attune to the Black Moon
    InitializeEvent(6, 9006051, 1467200, 1467210);
    InitializeEvent(7, 9006050, 1509000, 1509010); //Godwyn's Vengeance
    InitializeEvent(7, 9006051, 1509000, 1509010);
    InitializeEvent(8, 9006050, 1509100, 1509110); //Phoenix of Death
    InitializeEvent(8, 9006051, 1509100, 1509110);
    InitializeEvent(9, 9006050, 1528000, 1528010); //Stormcaller's Sublimity
    InitializeEvent(9, 9006051, 1528000, 1528010);
    InitializeEvent(10, 9006050, 1528100, 1528110); //Tempest Form
    InitializeEvent(10, 9006051, 1528100, 1528110);
    InitializeEvent(11, 9006050, 1441400, 1441410); //Snow Witch's Cunning
    InitializeEvent(11, 9006051, 1441400, 1441410);
    InitializeEvent(12, 9006050, 1499000, 1499010); //Aberrant Ascension
    InitializeEvent(12, 9006051, 1499000, 1499010);
    InitializeEvent(13, 9006050, 1499100, 1499110); //Blood Revelry
    InitializeEvent(13, 9006051, 1499100, 1499110);
    InitializeEvent(14, 9006050, 1496000, 1496010); //Blood Star
    InitializeEvent(14, 9006051, 1496000, 1496010);
    InitializeEvent(15, 9006050, 1685100, 1685110); //Bestial Fervor
    InitializeEvent(15, 9006051, 1685100, 1685110);
    InitializeEvent(16, 9006050, 1685200, 1685210); //Source of Creation
    InitializeEvent(16, 9006051, 1685200, 1685210);
    InitializeEvent(17, 9006050, 1607000, 1607010); //Cyclopean Prophecy
    InitializeEvent(17, 9006051, 1607000, 1607010);
    InitializeEvent(18, 9006050, 1626100, 1626110); //Godslayer's Devotion
    InitializeEvent(18, 9006051, 1626100, 1626110);
    InitializeEvent(19, 9006050, 1626200, 1626210); //Wrath of the Queen
    InitializeEvent(19, 9006051, 1626200, 1626210);
    InitializeEvent(20, 9006050, 1738000, 1738020); //Heart of Chaos
    InitializeEvent(20, 9006051, 1738000, 1738020);
    InitializeEvent(21, 9006050, 1738100, 1738130); //Three Finger's Embrace
    InitializeEvent(21, 9006051, 1738100, 1738130);
    InitializeEvent(22, 9006050, 1729000, 1729020); //Aspect of the Scorpion
    InitializeEvent(22, 9006051, 1729000, 1729020);
    InitializeEvent(23, 9006050, 1729100, 1729120); //Blessing of the Sealed God
    InitializeEvent(23, 9006051, 1729100, 1729120);
    InitializeEvent(24, 9006050, 1637000, 1637020); //Blood Pact
    InitializeEvent(24, 9006051, 1637000, 1637020);
    InitializeEvent(25, 9006050, 1637100, 1637110); //Hidden Mother's Blessing
    InitializeEvent(25, 9006051, 1637100, 1637110);
    InitializeEvent(26, 9006050, 1748000, 1748010); //Spirit Weaving
    InitializeEvent(26, 9006051, 1748000, 1748010);
    InitializeEvent(27, 9006050, 1748100, 1748110); //Dream Meld
    InitializeEvent(27, 9006051, 1748100, 1748110);
    InitializeEvent(28, 9006050, 1413010, 1413020); //Anima Magica
    InitializeEvent(28, 9006051, 1413010, 1413020);
    InitializeEvent(29, 9006050, 1679400, 1679410); //Elden Benediction
    InitializeEvent(29, 9006051, 1679400, 1679410);
    InitializeEvent(30, 9006050, 1416000, 1416010); //Energy Shell
    InitializeEvent(30, 9006051, 1416000, 1416010);
    InitializeEvent(0, 9006080, 1508000, 1508010, 1508001); //Accursed Binding
    InitializeEvent(0, 9006081, 1508000, 1508010, 1508001);
    InitializeEvent(1, 9006080, 1741300, 1741310, 1741301); //Spirit Link
    InitializeEvent(1, 9006081, 1741300, 1741310, 1741301);
    InitializeEvent(0, 9006058, 1679000, 1679010, 1679005); //Blessing of Grace
    InitializeEvent(0, 9006059, 1679000, 1679010);
    InitializeEvent(1, 9006058, 1679100, 1679110, 1679105); //Blessing of Protection
    InitializeEvent(1, 9006059, 1679100, 1679110);
    InitializeEvent(2, 9006058, 1679200, 1679210, 1679205); //Blessing of Wisdom
    InitializeEvent(2, 9006059, 1679200, 1679210);
    InitializeEvent(3, 9006058, 1679300, 1679310, 1679305); //Blessing of Power
    InitializeEvent(3, 9006059, 1679300, 1679310);
    InitializeEvent(0, 9006060, 1679405); //Elden Benediction Cleanup
    InitializeEvent(1, 9006060, 1679005);
    InitializeEvent(2, 9006060, 1679105);
    InitializeEvent(3, 9006060, 1679205);
    InitializeEvent(4, 9006060, 1679305);
    InitializeEvent(0, 9006053, 1679000, 1679005); //Elden Benediction Greater Blessing Application
    InitializeEvent(1, 9006053, 1679100, 1679105);
    InitializeEvent(2, 9006053, 1679200, 1679205);
    InitializeEvent(3, 9006053, 1679300, 1679305);
    InitializeEvent(0, 9006055, 0); //Elden Benediction Stat Buff while no other blessing active
    InitializeEvent(0, 9006056, 0);
    InitializeEvent(0, 9006057, 0);
    InitializeEvent(0, 9006062, 1513000); //First Bubble
    InitializeEvent(1, 9006062, 1513001); //second Bubble
    InitializeEvent(2, 9006062, 1513002); //Third Bubble
    InitializeEvent(14, 9007034, 1513005, 1513003, 1513005); //Armor of Bubbles cleanup
    InitializeEvent(0, 9006069, 1684000, 1684050, 1685200); // ON Source of Creation + Bestial Vitality
    InitializeEvent(1, 9006069, 1684100, 1684150, 1685200); // ON Source of Creation + Primal Regeneration
    InitializeEvent(2, 9006069, 1684200, 1684250, 1685200); // ON Source of Creation + Stone Skin
    InitializeEvent(0, 9006070, 1684000, 1684050, 1685200); // OFF Source of Creation + Bestial Vitality
    InitializeEvent(1, 9006070, 1684100, 1684150, 1685200); // OFF Source of Creation + Primal Regeneration
    InitializeEvent(2, 9006070, 1684200, 1684250, 1685200); // OFF Source of Creation + Stone Skin
    InitializeEvent(3, 9006069, 1685000, 1685050, 1685100); // ON Bestial Fervor + Bestial Strength
    InitializeEvent(4, 9006069, 1684200, 1684260, 1685100); // ON Bestial Fervor + Stone Skin
    InitializeEvent(3, 9006070, 1685000, 1685050, 1685100); // OFF Bestial Fervor + Bestial Strength
    InitializeEvent(4, 9006070, 1684200, 1684260, 1685100); // OFF Bestial Fervor + Stone Skin
    InitializeEvent(0, 9006071, 0); // Crucible Spell Heal Handler
    InitializeEvent(0, 9006072, 0); // Bestial Fervor Resource Restore - Rend
    InitializeEvent(0, 9006073, 0); // Bestial Fervor Resource Restore - Concussion
    InitializeEvent(0, 9006074, 0); // Bestial Fervor Resource Restore - Both
    InitializeEvent(4, 9007035, 1504200, 1504211); // Death Knight's Supplication Cleanup
    InitializeEvent(5, 9007035, 1504200, 1504212);
    InitializeEvent(6, 9007035, 1504200, 1504213);
});

// Spirit Summons
const SummoningSicknessDebuffs =     [ 40002, 40012, 40022, 40032, 40042, 40052, 40062, 40072, 40082, 40092, 40102, 40112, 40122 ]
const SummoningSicknessIdentifiers = [ 40300, 40301, 40302, 40303, 40304, 40305, 40306, 40307, 40308, 40309, 40310, 40311, 40312 ]
$Event(9008001, Default, function() {
    // - - Summon Debuff Apply Unless Immune - -
    for (let i = 0; i <= 10; i++) {
        // Summon spEffect, Summoning Sickness Debuff, Debuff Identifier, bool isPuppet
        // 3% Debuff
        InitializeEvent(0   + i, 9006006, 218000 + i, 40002, 40300, 0); // Glintstone Sorcerer-1
        InitializeEvent(11  + i, 9006006, 222000 + i, 40002, 40300, 0); // Clayman-2
        InitializeEvent(22  + i, 9006006, 236000 + i, 40002, 40300, 0); // Spirit Jellyfish-1
        InitializeEvent(33  + i, 9006006, 241000 + i, 40002, 40300, 0); // Noble Sorcerer-1
        InitializeEvent(44  + i, 9006006, 213000 + i, 40002, 40300, 0); // Skeletal Bandit-1-Resurrect
        InitializeEvent(55  + i, 9006006, 245000 + i, 40002, 40300, 0); // Miranda Sprout-5
        InitializeEvent(66  + i, 9006006, 240000 + i, 40002, 40300, 0); // Wandering Noble-5
        InitializeEvent(77  + i, 9006006, 244000 + i, 40002, 40300, 0); // Land Squirt-3
        
        // 6% Debuff
        InitializeEvent(88  + i, 9006006, 215000 + i, 40012, 40301, 0); // Putrid Corpse-4
        InitializeEvent(99  + i, 9006006, 220000 + i, 40012, 40301, 0); // Page-1
        InitializeEvent(110 + i, 9006006, 246000 + i, 40012, 40301, 0); // Soldjars of Fortune-3
        InitializeEvent(924 + i, 9006006, 20204000 + i, 40012, 40301, 0); // [dlc] Spider Scorpion
        
        // 9% Debuff
        InitializeEvent(121 + i, 9006006, 242000 + i, 40022, 40302, 0); // Vulgar Militia-3
        InitializeEvent(132 + i, 9006006, 225000 + i, 40022, 40302, 0); // Marionette Soldier-2
        InitializeEvent(143 + i, 9006006, 212000 + i, 40022, 40302, 0); // Skeletal Militiaman-2-Resurrect
        InitializeEvent(154 + i, 9006006, 249000 + i, 40022, 40302, 0); // Archer-3
        InitializeEvent(165 + i, 9006006, 209000 + i, 40022, 40302, 0); // Ancestral Follower-1
        InitializeEvent(176 + i, 9006006, 219000 + i, 40022, 40302, 0); // Twinsage Sorcerer-1
        InitializeEvent(187 + i, 9006006, 250000 + i, 40022, 40302, 0); // Godrick Soldier-2
        InitializeEvent(198 + i, 9006006, 251000 + i, 40022, 40302, 0); // Raya Lucaria Soldier-3
        InitializeEvent(209 + i, 9006006, 252000 + i, 40022, 40302, 0); // Leyndell Soldier-2
        InitializeEvent(220 + i, 9006006, 406000 + i, 40022, 40302, 0); // [CER] Rootmen-2
        
        // 12% Debuff
        InitializeEvent(231 + i, 9006006, 224000 + i, 40032, 40303, 0); // Kindred of Rot-1
        InitializeEvent(242 + i, 9006006, 227000 + i, 40032, 40303, 0); // Fire Monk-1
        InitializeEvent(253 + i, 9006006, 221000 + i, 40032, 40303, 0); // Battlemage Hugues-1
        InitializeEvent(264 + i, 9006006, 414000 + i, 40032, 40303, 0); // [CER] Stone Cluster-4
        InitializeEvent(275 + i, 9006006, 416000 + i, 40032, 40303, 0); // [CER] Red Bear-2
        InitializeEvent(286 + i, 9006006, 417000 + i, 40032, 40303, 0); // [CER] Mystic Pigmen-4
        InitializeEvent(935 + i, 9006006, 20211000 + i, 40032, 40303, 0); // [dlc] Man-Fly
        
        // 15% Debuff
        InitializeEvent(297 + i, 9006006, 243000 + i, 40042, 40304, 0); // Mad Pumpkinhead-1
        InitializeEvent(308 + i, 9006006, 233000 + i, 40042, 40304, 0); // Giant Rats-3
        InitializeEvent(319 + i, 9006006, 255000 + i, 40042, 40304, 0); // Haligtree Soldier-4
        InitializeEvent(330 + i, 9006006, 263000 + i, 40042, 40304, 1); // Jarwright Puppet-1
        InitializeEvent(341 + i, 9006006, 210000 + i, 40042, 40304, 0); // Winged Misbegotten-1
        InitializeEvent(352 + i, 9006006, 409000 + i, 40042, 40304, 0); // [CER] Starcallers-2
        InitializeEvent(363 + i, 9006006, 410000 + i, 40042, 40304, 0); // [CER] Bloodthorn Exiles-3
        InitializeEvent(946 + i, 9006006, 20202000 + i, 40042, 40304, 0); // [dlc] Gravebird
        InitializeEvent(957 + i, 9006006, 20217000 + i, 40042, 40304, 0); // [dlc] Fingercreeper
        
        // 18% Debuff
        InitializeEvent(374 + i, 9006006, 253000 + i, 40052, 40305, 0); // Radahn Soldier-2
        InitializeEvent(385 + i, 9006006, 203000 + i, 40052, 40305, 0); // Fanged Imp-2
        InitializeEvent(396 + i, 9006006, 232000 + i, 40052, 40305, 0); // Lone Wolf-3
        InitializeEvent(407 + i, 9006006, 226000 + i, 40052, 40305, 0); // Avionette Soldier-2
        InitializeEvent(418 + i, 9006006, 234000 + i, 40052, 40305, 0); // Demi-Human-5
        InitializeEvent(429 + i, 9006006, 211000 + i, 40052, 40305, 0); // Albinauric-2
        InitializeEvent(440 + i, 9006006, 257000 + i, 40052, 40305, 0); // Redmane Knight Ogha-1
        InitializeEvent(451 + i, 9006006, 237000 + i, 40052, 40305, 0); // Warhawk-1
        InitializeEvent(462 + i, 9006006, 231000 + i, 40052, 40305, 0); // Kaiden Sellsword-1
        InitializeEvent(968 + i, 9006006, 20203000 + i, 40052, 40305, 0); // [dlc] Fire Knight Hilde
        
        // 21% Debuff
        InitializeEvent(473 + i, 9006006, 205000 + i, 40062, 40306, 0); // Nomad-1
        InitializeEvent(484 + i, 9006006, 229000 + i, 40062, 40306, 0); // Man-Serpent-1
        InitializeEvent(495 + i, 9006006, 208000 + i, 40062, 40306, 0); // Crystilian-1
        InitializeEvent(506 + i, 9006006, 235000 + i, 40062, 40306, 0); // Rotten Stray-1
        InitializeEvent(517 + i, 9006006, 405000 + i, 40062, 40306, 0); // [CER] Erdtree Guardians-2
        InitializeEvent(979 + i, 9006006, 20209000 + i, 40062, 40306, 0); // [dlc] Black Knight Captain Huw
        
        // 24% Debuff
        InitializeEvent(528 + i, 9006006, 223000 + i, 40072, 40307, 0); // Cleanrot Knight Finlay-1
        InitializeEvent(539 + i, 9006006, 247000 + i, 40072, 40307, 0); // Omenkiller Rollo-1
        InitializeEvent(550 + i, 9006006, 239000 + i, 40072, 40307, 0); // Bloodhound Knight Fioh-1
        InitializeEvent(561 + i, 9006006, 216000 + i, 40072, 40307, 0); // Depraved Perfumer Carmaan-1
        InitializeEvent(990 + i, 9006006, 20210000 + i, 40072, 40307, 0); // [dlc] Bigmouth Imp
        InitializeEvent(1001 + i, 9006006, 20200000 + i, 40072, 40307, 0); // [dlc] Curseblade Meera
        InitializeEvent(1012 + i, 9006006, 20219000 + i, 40072, 40307, 0); // [dlc] Swordhand of Night Jolán
        InitializeEvent(1023 + i, 9006006, 20218000 + i, 40072, 40307, 0); // [dlc] Fire Knight Queelign
        
        // 27% Debuff
        InitializeEvent(572 + i, 9006006, 206000 + i, 40082, 40308, 1); // Nightmaiden and Swordstress Puppets-2
        InitializeEvent(583 + i, 9006006, 230000 + i, 40082, 40308, 0); // Azula Beastman-2
        InitializeEvent(594 + i, 9006006, 259000 + i, 40082, 40308, 1); // Nepheli Loux Puppet-1
        InitializeEvent(605 + i, 9006006, 256000 + i, 40082, 40308, 0); // Ancient Dragon Knight Kristoff-1
        InitializeEvent(616 + i, 9006006, 214000 + i, 40082, 40308, 0); // Oracle Envoy-4
        InitializeEvent(627 + i, 9006006, 228000 + i, 40082, 40308, 0); // Blackflame Monk Amon-1
        InitializeEvent(638 + i, 9006006, 408000 + i, 40082, 40308, 0); // [CER] Winged Dame-1
        InitializeEvent(649 + i, 9006006, 419000 + i, 40082, 40308, 0); // [CER] Stone Sentry-1
        InitializeEvent(1034 + i, 9006006, 20207000 + i, 40082, 40308, 0); // [dlc] Messmer Soldier
        InitializeEvent(1045 + i, 9006006, 20208000 + i, 40082, 40308, 0); // [dlc] Black Knight Commander Andreas
        InitializeEvent(1056 + i, 9006006, 20214000 + i, 40082, 40308, 0); // [dlc] Horned Warrior
       
        // 30% Debuff                                                   
        InitializeEvent(660 + i, 9006006, 248000 + i, 40092, 40309, 0); // Greatshield Soldier-5
        InitializeEvent(671 + i, 9006006, 201000 + i, 40092, 40309, 0); // Banished Knight Oleg-1
        InitializeEvent(682 + i, 9006006, 262000 + i, 40092, 40309, 1); // Dolores the Sleeping Arrow Puppet-1
        InitializeEvent(693 + i, 9006006, 400000 + i, 40092, 40309, 0); // [CER] Cemetary Shade-1
        InitializeEvent(704 + i, 9006006, 413000 + i, 40092, 40309, 0); // [CER] Putrescence Sorcerer-1
        InitializeEvent(715 + i, 9006006, 412000 + i, 40092, 40309, 0); // [CER] Wormface-1
        InitializeEvent(726 + i, 9006006, 420000 + i, 40092, 40309, 0); // [CER] Man-Serpent Caster-1
        InitializeEvent(1067 + i, 9006006, 20201000 + i, 40092, 40309, 0); // [dlc] Bloodfiend Hexer's Ashes
        InitializeEvent(1078 + i, 9006006, 20206000 + i, 40092, 40309, 0); // [dlc] Demi-Human Swordsman Yosh
        InitializeEvent(1089 + i, 9006006, 20213000 + i, 40092, 40309, 0); // [dlc] Divine Bird Warrior Ornis
        
        // 33% Debuff
        InitializeEvent(737 + i, 9006006, 217000 + i, 40102, 40310, 0); // Perfumer Tricia-1
        InitializeEvent(748 + i, 9006006, 202000 + i, 40102, 40310, 0); // Banished Knight Engvall-1
        InitializeEvent(759 + i, 9006006, 254000 + i, 40102, 40310, 0); // Mausoleum Soldier-5
        InitializeEvent(770 + i, 9006006, 403000 + i, 40102, 40310, 0); // [CER] Rotten Duelist-1
        InitializeEvent(781 + i, 9006006, 407000 + i, 40102, 40310, 0); // [CER] Spiritcaller Snail-1+3
        InitializeEvent(1100 + i, 9006006, 20215000 + i, 40102, 40310, 0); // [dlc] Ancient Dragon Florissax
        InitializeEvent(1111 + i, 9006006, 20205000 + i, 40102, 40310, 0); // [dlc] Inquisitor
        
        // 36% Debuff                                                   
        InitializeEvent(792 + i, 9006006, 238000 + i, 40112, 40311, 0); // Stormhawk Deenh-1
        InitializeEvent(803 + i, 9006006, 258000 + i, 40112, 40311, 0); // Lhutel the Headless-1
        InitializeEvent(814 + i, 9006006, 261000 + i, 40112, 40311, 1); // Finger Maiden Therolina Puppet-1
        InitializeEvent(825 + i, 9006006, 401000 + i, 40112, 40311, 1); // [CER] Horned Omen-1
        InitializeEvent(836 + i, 9006006, 418000 + i, 40112, 40311, 1); // [CER] Zamor Knight-1
        InitializeEvent(1122 + i, 9006006, 20212000 + i, 40112, 40311, 1); // [dlc] Taylew the Golem Smith
        
        // 40% Debuff
        InitializeEvent(847 + i, 9006006, 204000 + i, 40122, 40312, 0); // Latenna the Albinauric-1
        InitializeEvent(858 + i, 9006006, 260000 + i, 40122, 40312, 1); // Dung Eater Puppet-1
        InitializeEvent(869 + i, 9006006, 200000 + i, 40122, 40312, 0); // Black Knife Tiche-1
        InitializeEvent(880 + i, 9006006, 402000 + i, 40122, 40312, 0); // [CER] Nox Ancerstor-1
        InitializeEvent(891 + i, 9006006, 404000 + i, 40122, 40312, 0); // [CER] Sanguine Noble-1
        InitializeEvent(902 + i, 9006006, 411000 + i, 40122, 40312, 0); // [CER] Warrior Jar Alexander-1
        InitializeEvent(913 + i, 9006006, 419000 + i, 40122, 40312, 0); // [CER] Erdtree Sentry-1
        InitializeEvent(1133 + i, 9006006, 20220000 + i, 40122, 40312, 0); // [dlc] Jolán and Anna
    }
    
    // - Summon Debuff Handling -
    InitializeEvent(0, 9006009, 0); // Remove relevant spEffects after unsummon or summon death
    InitializeEvent(0, 9006008, 0); // Reapply debuff if immunity disappears
    
    // Remove summon debuff when immunity spells are active and apply phantom param
    InitializeEvent(0, 9006061, 1741300, 750) // Spirit Link
    InitializeEvent(1, 9006061, 1508000, 751) // Accursed Binding
    InitializeEvent(2, 9006061, 7009200, 751) // Friend of Death
    InitializeEvent(3, 9006061, 503370, 0)    // Baldachin's Blessin
    
    // Custom Spirit Summon Visual Handlers
    InitializeEvent(0, 9006088, 0);
    InitializeEvent(0, 9006089, 0);
    InitializeEvent(0, 9006091, 0);
    
    // Spiritcaller Snail Handler
    InitializeEvent( 0, 9006090, 407000, 407100); // + 0
    InitializeEvent( 1, 9006090, 407001, 407101); // + 1
    InitializeEvent( 2, 9006090, 407002, 407102); // + 2
    InitializeEvent( 3, 9006090, 407003, 407103); // + 3
    InitializeEvent( 4, 9006090, 407004, 407104); // + 4
    InitializeEvent( 5, 9006090, 407005, 407105); // + 5
    InitializeEvent( 6, 9006090, 407006, 407106); // + 6
    InitializeEvent( 7, 9006090, 407007, 407107); // + 7
    InitializeEvent( 8, 9006090, 407008, 407108); // + 8
    InitializeEvent( 9, 9006090, 407009, 407109); // + 9
    InitializeEvent(10, 9006090, 407010, 407110); // +10
    
    // Other
    InitializeEvent(0, 9006007, 0); // Sacrifice Setup
    InitializeEvent(0, 9006029, 0); // Spirit Caller Bell
    InitializeEvent(0, 9006010, 0); // Seamless resummon allowance
});


// Bosses
$Event(9008002, Default, function() {
    // Boss death flags
    InitializeEvent(0, 1100, 9100, 10000, 0, 60510);   // margit
    InitializeEvent(1, 1100, 9101, 10010, 0, 510010);  // godrick
    InitializeEvent(2, 1100, 9102, 10020, 0, 510020);  // unused
    InitializeEvent(3, 1100, 9103, 10030, 0, 510030);  // grafted scion
    InitializeEvent(4, 1100, 9104, 10040, 0, 510040);  // morgott
    InitializeEvent(5, 1100, 9105, 10050, 0, 60520);   // enia
    InitializeEvent(6, 1100, 9106, 10060, 0, 510060);  // gideon
    InitializeEvent(7, 1100, 9107, 10070, 0, 510070);  // horah loux
    InitializeEvent(8, 1100, 9108, 10080, 0, 510080);  // astel, naturalborn
    InitializeEvent(9, 1100, 9109, 10090, 0, 510090);  // dragonkin of nokstella
    InitializeEvent(10, 1100, 9110, 10100, 0, 510100); // gargoyle duo
    InitializeEvent(11, 1100, 9111, 10110, 0, 510110); // fortisax
    InitializeEvent(12, 1100, 9112, 10120, 0, 510120); // mohg
    InitializeEvent(13, 1100, 9113, 10130, 0, 510130); // unused
    InitializeEvent(14, 1100, 9114, 10140, 0, 510140); // seera (godskin duo)
    InitializeEvent(15, 1100, 9115, 10150, 0, 510150); // placidusax
    InitializeEvent(16, 1100, 9116, 10160, 0, 510160); // maliketh
    InitializeEvent(17, 1100, 9117, 10170, 0, 60440);  // bols (red wolf)
    InitializeEvent(18, 1100, 9118, 10180, 0, 197);    // renalla
    InitializeEvent(19, 1100, 9119, 10190, 0, 510190); // Loretta, knight of haligtree
    InitializeEvent(20, 1100, 9120, 10200, 0, 510200); // malenia
    InitializeEvent(21, 1100, 9121, 10210, 0, 510210); // godskin noble (manor)
    InitializeEvent(22, 1100, 9122, 10220, 0, 510220); // rykard
    InitializeEvent(23, 1100, 9123, 10230, 0, 510230); // elden beast
    InitializeEvent(24, 1100, 9124, 10240, 0, 510240); // unused
    InitializeEvent(25, 1100, 9125, 10250, 0, 510250); // sewer mohg
    InitializeEvent(26, 1100, 9126, 10260, 0, 510260); // makar
    InitializeEvent(27, 1100, 9127, 10270, 0, 510270); // unknown
    InitializeEvent(28, 1100, 9128, 10280, 0, 510280); // ulcerated tree spirit (fringefolk)
    InitializeEvent(29, 1100, 9129, 10290, 0, 510290); // virgin duo
    InitializeEvent(30, 1100, 9130, 10300, 0, 510300); // radahn
    InitializeEvent(31, 1100, 9131, 10310, 0, 510310); // fire giant
    InitializeEvent(32, 1100, 9132, 10320, 0, 510320); // ancestor spirit
    InitializeEvent(33, 1100, 9133, 10330, 0, 510330); // regal ancestor spririt 
    InitializeEvent(34, 1100, 9134, 10340, 0, 510340); // mimic tear (siofra)
    InitializeEvent(35, 1100, 9135, 10350, 0, 510350); // fia's champions
    InitializeEvent(40, 1100, 9140, 10400, 0, 510400); // ? (DLC)
    InitializeEvent(41, 1100, 9141, 10410, 0, 510410); // ? (DLC)
    InitializeEvent(43, 1100, 9143, 10430, 0, 510430); // ? (DLC)
    InitializeEvent(44, 1100, 9144, 10440, 0, 510440); // ? (DLC)
    InitializeEvent(45, 1100, 9145, 10450, 0, 510450); // ? (DLC)
    InitializeEvent(46, 1100, 9146, 10460, 0, 510460); // ? (DLC)
    InitializeEvent(47, 1100, 9147, 10470, 0, 510470); // ? (DLC)
    InitializeEvent(48, 1100, 9148, 10480, 0, 510480); // ? (DLC)
    InitializeEvent(49, 1100, 9149, 10490, 0, 510490); // ? (DLC)
    InitializeEvent(50, 1100, 9150, 10500, 0, 510500); // ? (DLC)
    InitializeEvent(51, 1100, 9151, 10510, 0, 510510); // ? (DLC)
    InitializeEvent(52, 1100, 9152, 10520, 0, 510520); // ? (DLC)
    InitializeEvent(53, 1100, 9153, 10530, 0, 510530); // ? (DLC)
    InitializeEvent(54, 1100, 9154, 10540, 0, 510540); // ? (DLC)
    InitializeEvent(55, 1100, 9155, 10550, 0, 510550); // ? (DLC)
    InitializeEvent(56, 1100, 9156, 10560, 0, 510560); // ? (DLC)
    InitializeEvent(57, 1100, 9157, 10570, 0, 510570); // ? (DLC)
    InitializeEvent(58, 1100, 9158, 10580, 0, 510580); // ? (DLC)
    InitializeEvent(59, 1100, 9159, 10590, 0, 510590); // ? (DLC)
    InitializeEvent(60, 1100, 9160, 10600, 0, 510600); // ? (DLC)
    InitializeEvent(61, 1100, 9161, 10610, 0, 510610); // ? (DLC)
    InitializeEvent(62, 1100, 9162, 10620, 0, 510620); // ? (DLC)
    InitializeEvent(63, 1100, 9163, 10630, 0, 510630); // ? (DLC)
    InitializeEvent(64, 1100, 9164, 10640, 0, 510640); // ? (DLC)
    InitializeEvent(73, 1100, 9173, 10730, 0, 510730); // blood invader (consecrated)
    InitializeEvent(74, 1100, 9174, 10740, 0, 510740); // fell twins
    InitializeEvent(80, 1100, 9180, 10800, 0, 510800); // leonine misbegotten (mourne)
    InitializeEvent(81, 1100, 9181, 10810, 0, 510810); // Carian Knight
    InitializeEvent(82, 1100, 9182, 10820, 0, 510820); // elemer of the briar
    //InitializeEvent(83, 1100, 9183, 10830, 0, 510830); //redmane duo
    InitializeEvent(84, 1100, 9184, 10840, 0, 510840); // commander niall
    InitializeEvent(84, 1100, 9184, 10840, 0, 510840); // commander niall
    InitializeEvent(85, 1100, 9185, 10850, 0, 510850); // lansseax
    InitializeEvent(86, 1100, 9186, 10860, 0, 510860); // matriarch
    InitializeEvent(87, 1100, 9187, 10870, 0, 510870); // omenkiller placeholder boss (morne)
    InitializeEvent(88, 1100, 9188, 10880, 0, 510880); // Scion of the Sealed God
    InitializeEvent(89, 1100, 9189, 10890, 0, 510890); // Einar
    InitializeEvent(90, 1100, 9190, 10900, 0, 510900); // ? (DLC)
    InitializeEvent(91, 1100, 9191, 12050900, 0, 12057900); // Blood KNight
    InitializeEvent(0, 1200, 9200, 20000, 0, 520000);
    InitializeEvent(1, 1200, 9201, 20010, 0, 520010);
    InitializeEvent(2, 1200, 9202, 20020, 0, 520020);
    InitializeEvent(3, 1200, 9203, 20030, 0, 520030);
    InitializeEvent(4, 1200, 9204, 20040, 0, 520040);
    InitializeEvent(5, 1200, 9205, 20050, 0, 520050);
    InitializeEvent(6, 1200, 9206, 20060, 0, 520060);
    InitializeEvent(7, 1200, 9207, 20070, 0, 520070);
    InitializeEvent(8, 1200, 9208, 20080, 0, 520080);
    InitializeEvent(9, 1200, 9209, 20090, 0, 520090);
    InitializeEvent(10, 1200, 9210, 20100, 0, 520100);
    InitializeEvent(11, 1200, 9211, 20110, 0, 520110);
    InitializeEvent(12, 1200, 9212, 20120, 0, 520120);
    InitializeEvent(13, 1200, 9213, 20130, 0, 520130);
    InitializeEvent(14, 1200, 9214, 20140, 0, 520140);
    InitializeEvent(15, 1200, 9215, 20150, 0, 520150);
    InitializeEvent(16, 1200, 9216, 20160, 0, 520160);
    InitializeEvent(17, 1200, 9217, 20170, 0, 520170);
    InitializeEvent(18, 1200, 9218, 20180, 0, 520180);
    InitializeEvent(19, 1200, 9219, 20190, 0, 520190);
    InitializeEvent(20, 1200, 9220, 20200, 0, 520200);
    InitializeEvent(21, 1200, 9221, 20210, 0, 520210);
    InitializeEvent(22, 1200, 9222, 20220, 0, 520220);
    InitializeEvent(30, 1200, 9230, 20300, 0, 520300);
    InitializeEvent(31, 1200, 9231, 20310, 0, 520310);
    InitializeEvent(32, 1200, 9232, 20320, 0, 520320);
    InitializeEvent(33, 1200, 9233, 20330, 0, 520330);
    InitializeEvent(34, 1200, 9234, 20340, 0, 520340);
    InitializeEvent(35, 1200, 9235, 20350, 0, 520350);
    InitializeEvent(36, 1200, 9236, 20360, 0, 520360);
    InitializeEvent(37, 1200, 9237, 20370, 0, 520370);
    InitializeEvent(38, 1200, 9238, 20380, 0, 520380);
    InitializeEvent(39, 1200, 9239, 20390, 0, 520390);
    InitializeEvent(40, 1200, 9240, 20400, 0, 520400);
    InitializeEvent(41, 1200, 9241, 20410, 0, 520410);
    InitializeEvent(42, 1200, 9242, 20420, 0, 520420);
    InitializeEvent(43, 1200, 9243, 20430, 0, 520430);
    InitializeEvent(44, 1200, 9244, 20440, 0, 520440);
    InitializeEvent(45, 1200, 9245, 20450, 0, 520450);
    InitializeEvent(46, 1200, 9246, 20460, 0, 520460);
    InitializeEvent(47, 1200, 9247, 20470, 0, 520470);
    InitializeEvent(48, 1200, 9248, 20480, 0, 520480);
    InitializeEvent(49, 1200, 9249, 20490, 0, 520490);
    InitializeEvent(60, 1200, 9260, 20600, 0, 520600);
    InitializeEvent(61, 1200, 9261, 20610, 0, 520610);
    InitializeEvent(62, 1200, 9262, 20620, 0, 520620);
    InitializeEvent(63, 1200, 9263, 20630, 0, 520630);
    InitializeEvent(64, 1200, 9264, 20640, 0, 520640);
    InitializeEvent(65, 1200, 9265, 20650, 0, 520650);
    InitializeEvent(66, 1200, 9266, 20660, 0, 520660);
    InitializeEvent(67, 1200, 9267, 20670, 0, 520670);
    InitializeEvent(68, 1200, 9268, 20680, 0, 520680);
    InitializeEvent(69, 1200, 9269, 30430, 0, 520690);
    InitializeEvent(70, 1200, 9270, 20700, 0, 520700); // ? (DLC)
    InitializeEvent(71, 1200, 9271, 20710, 0, 520710); // ? (DLC)
    InitializeEvent(72, 1200, 9272, 20720, 0, 520720); // ? (DLC)
    InitializeEvent(75, 1200, 9275, 20750, 0, 520750); // ? (DLC)
    InitializeEvent(76, 1200, 9276, 20760, 0, 520760); // ? (DLC)
    InitializeEvent(77, 1200, 9277, 20770, 0, 520770); // ? (DLC)
    InitializeEvent(80, 1200, 9280, 20800, 0, 520800); // ? (DLC)
    InitializeEvent(81, 1200, 9281, 20810, 0, 520810); // ? (DLC)
    InitializeEvent(82, 1200, 9285, 30700, 0, 530700); //Siluria item drop
    InitializeEvent(83, 1200, 9286, 10350, 0, 510350); //Blighted Nox Ancestor
    //Bosses Blinding Veil removal
    InitializeEvent(0, 98005300, 10000800);
    InitializeEvent(1, 98005300, 10000850);
    InitializeEvent(2, 98005300, 10010800);
    InitializeEvent(3, 98005300, 11000800);
    InitializeEvent(4, 98005300, 11050800);
    InitializeEvent(5, 98005300, 11050850);
    InitializeEvent(6, 98005300, 12010800);
    InitializeEvent(7, 98005300, 12010850);
    InitializeEvent(8, 98005300, 12020800);
    InitializeEvent(9, 98005300, 12020801);
    InitializeEvent(10, 98005300, 12020830);
    InitializeEvent(11, 98005300, 12020850);
    InitializeEvent(12, 98005300, 12030390);
    InitializeEvent(13, 98005300, 12030392);
    InitializeEvent(14, 98005300, 12030393);
    InitializeEvent(15, 98005300, 12030850);
    InitializeEvent(16, 98005300, 12040800);
    InitializeEvent(17, 98005300, 12050800);
    InitializeEvent(18, 98005300, 12080800);
    InitializeEvent(19, 98005300, 12090800);
    InitializeEvent(20, 98005300, 13000800);
    InitializeEvent(21, 98005300, 13000801);
    InitializeEvent(22, 98005300, 13000830);
    InitializeEvent(23, 98005300, 13000855);
    InitializeEvent(24, 98005300, 13000860);
    InitializeEvent(25, 98005300, 14005800);
    InitializeEvent(26, 98005300, 14000850);
    InitializeEvent(27, 98005300, 15005800);
    InitializeEvent(28, 98005300, 15000850);
    InitializeEvent(29, 98005300, 16005800);
    InitializeEvent(30, 98005300, 16000850);
    InitializeEvent(31, 98005300, 16000860);
    InitializeEvent(32, 98005300, 18000800);
    InitializeEvent(33, 98005300, 18000850);
    InitializeEvent(34, 98005300, 19005800);
    InitializeEvent(35, 98005300, 34110800);
    InitializeEvent(36, 98005300, 30000800);
    InitializeEvent(37, 98005300, 30010800);
    InitializeEvent(38, 98005300, 30020800);
    InitializeEvent(39, 98005300, 30030800);
    InitializeEvent(40, 98005300, 30040800);
    InitializeEvent(41, 98005300, 30050800);
    InitializeEvent(42, 98005300, 30050850);
    InitializeEvent(43, 98005300, 30060800);
    InitializeEvent(44, 98005300, 30070800);
    InitializeEvent(45, 98005300, 30080800);
    InitializeEvent(46, 98005300, 30090800);
    InitializeEvent(47, 98005300, 30100800);
    InitializeEvent(48, 98005300, 30110800);
    InitializeEvent(49, 98005300, 30120800);
    InitializeEvent(50, 98005300, 30120801);
    InitializeEvent(51, 98005300, 30130800);
    InitializeEvent(52, 98005300, 30140800);
    InitializeEvent(53, 98005300, 30150800);
    InitializeEvent(54, 98005300, 30160800);
    InitializeEvent(55, 98005300, 30170800);
    InitializeEvent(56, 98005300, 30180800);
    InitializeEvent(57, 98005300, 30190800);
    InitializeEvent(58, 98005300, 30200800);
    InitializeEvent(59, 98005300, 31000800);
    InitializeEvent(60, 98005300, 31010800);
    InitializeEvent(61, 98005300, 31020800);
    InitializeEvent(62, 98005300, 31040800);
    InitializeEvent(63, 98005300, 31050800);
    InitializeEvent(64, 98005300, 31060800);
    InitializeEvent(65, 98005300, 31060801);
    InitializeEvent(66, 98005300, 31070800);
    InitializeEvent(67, 98005300, 31090800);
    InitializeEvent(68, 98005300, 31100800);
    InitializeEvent(69, 98005300, 31110800);
    InitializeEvent(70, 98005300, 31110801);
    InitializeEvent(71, 98005300, 31110802);
    InitializeEvent(72, 98005300, 31120800);
    InitializeEvent(73, 98005300, 31150800);
    InitializeEvent(74, 98005300, 31170800);
    InitializeEvent(75, 98005300, 31180800);
    InitializeEvent(76, 98005300, 31190800);
    InitializeEvent(77, 98005300, 31190850);
    InitializeEvent(78, 98005300, 31200800);
    InitializeEvent(79, 98005300, 31210800);
    InitializeEvent(80, 98005300, 31220800);
    InitializeEvent(81, 98005300, 32000800);
    InitializeEvent(82, 98005300, 32010800);
    InitializeEvent(83, 98005300, 32020800);
    InitializeEvent(84, 98005300, 32040800);
    InitializeEvent(85, 98005300, 32050800);
    InitializeEvent(86, 98005300, 32050801);
    InitializeEvent(87, 98005300, 32070800);
    InitializeEvent(88, 98005300, 32080800);
    InitializeEvent(89, 98005300, 32110800);
    InitializeEvent(90, 98005300, 34120800);
    InitializeEvent(91, 98005300, 34130800);
    InitializeEvent(92, 98005300, 34140850);
    InitializeEvent(93, 98005300, 34140851);
    InitializeEvent(94, 98005300, 35000800);
    InitializeEvent(95, 98005300, 35000850);
    InitializeEvent(96, 98005300, 39200800);
    InitializeEvent(97, 98005300, 1052520800);
});

// One Time Flags
$Event(9008003, Default, function() {
    // Version Fixers
    InitializeEvent(0, 9008010, 0); // 2.0.1 -> 2.0.2
    
    EndIf(EventFlag(82001));
   
    // Map Reveal Flags
    SetEventFlagID(82001, ON);
    SetEventFlagID(65610, ON);
    SetEventFlagID(65640, ON);
    SetEventFlagID(65660, ON);
    SetEventFlagID(65680, ON);
    SetEventFlagID(65720, ON);
    SetEventFlagID(65730, ON);
    SetEventFlagID(65740, ON);
    SetEventFlagID(65750, ON);
    SetEventFlagID(65760, ON);
    SetEventFlagID(65770, ON);
    SetEventFlagID(65780, ON);
    SetEventFlagID(65790, ON);
    SetEventFlagID(65800, ON);
    SetEventFlagID(65810, ON);
    SetEventFlagID(62010, ON);
    SetEventFlagID(62011, ON);
    SetEventFlagID(62012, ON);
    SetEventFlagID(62020, ON);
    SetEventFlagID(62021, ON);
    SetEventFlagID(62022, ON);
    SetEventFlagID(62030, ON);
    SetEventFlagID(62031, ON);
    SetEventFlagID(62032, ON);
    SetEventFlagID(62040, ON);
    SetEventFlagID(62041, ON);
    SetEventFlagID(62050, ON);
    SetEventFlagID(62051, ON);
    SetEventFlagID(62052, ON);
    SetEventFlagID(62060, ON);
    SetEventFlagID(62061, ON);
    SetEventFlagID(62063, ON);
    SetEventFlagID(62062, ON);
    SetEventFlagID(62064, ON);
    SetEventFlagID(62080, ON);
    SetEventFlagID(62081, ON);
    SetEventFlagID(62082, ON);
    SetEventFlagID(62083, ON);
    SetEventFlagID(62084, ON);
    
    // Malenia Talk Flags
    SetEventFlagID(104, ON); 
    SetEventFlagID(105, ON); 
    SetEventFlagID(950, ON);
    SetEventFlagID(951, ON);
    SetEventFlagID(953, ON);
    SetEventFlagID(955, ON);
    SetEventFlagID(956, ON);
    SetEventFlagID(957, ON);
    SetEventFlagID(4680, ON);
    SetEventFlagID(4681, ON);
    SetEventFlagID(10009655, ON);
    SetEventFlagID(11009260, ON);
    SetEventFlagID(1037519201, ON);
    SetEventFlagID(60100, ON);

    //Crafting Flags
    SetEventFlagID(60120, ON);
    //SetEventFlagID(66000, ON);
    //SetEventFlagID(66010, ON);
    //SetEventFlagID(66020, ON);
    //SetEventFlagID(66030, ON);
    //SetEventFlagID(66040, ON);
    //SetEventFlagID(66050, ON);
    //SetEventFlagID(66060, ON);
    //SetEventFlagID(66070, ON);
    //SetEventFlagID(66080, ON);
    //SetEventFlagID(66090, ON);
    //SetEventFlagID(66100, ON);
    //SetEventFlagID(66110, ON);
    //SetEventFlagID(66120, ON);
    //SetEventFlagID(66130, ON);
    //SetEventFlagID(66140, ON);
    //SetEventFlagID(66150, ON);
    //SetEventFlagID(66160, ON);
    //SetEventFlagID(66170, ON);
    //SetEventFlagID(66180, ON);
    //SetEventFlagID(66190, ON);
    //SetEventFlagID(66200, ON);
    //SetEventFlagID(66210, ON);
    //SetEventFlagID(66220, ON);
    //SetEventFlagID(66230, ON);
    //SetEventFlagID(66240, ON);
    //SetEventFlagID(66250, ON);
    //SetEventFlagID(66260, ON);
    //SetEventFlagID(66270, ON);
    //SetEventFlagID(66280, ON);
    //SetEventFlagID(66290, ON);
    //SetEventFlagID(66400, ON);
    //SetEventFlagID(66410, ON);
    //SetEventFlagID(66420, ON);
    //SetEventFlagID(66430, ON);
    //SetEventFlagID(66440, ON);
    //SetEventFlagID(66450, ON);
    //SetEventFlagID(66460, ON);
    //SetEventFlagID(66470, ON);
    //SetEventFlagID(66480, ON);
    //SetEventFlagID(66490, ON);
    //SetEventFlagID(66500, ON);
    //SetEventFlagID(66510, ON);
    //SetEventFlagID(66520, ON);
    //SetEventFlagID(66530, ON);
    //SetEventFlagID(66540, ON);
    //SetEventFlagID(66550, ON);
    //SetEventFlagID(66560, ON);
    //SetEventFlagID(66570, ON);
    //SetEventFlagID(66580, ON);
    //SetEventFlagID(66590, ON);
    SetEventFlagID(67000, ON);
    SetEventFlagID(67010, ON);
    SetEventFlagID(67020, ON);
    SetEventFlagID(67030, ON);
    SetEventFlagID(67040, ON);
    SetEventFlagID(67050, ON);
    SetEventFlagID(67060, ON);
    SetEventFlagID(67070, ON);
    SetEventFlagID(67080, ON);
    SetEventFlagID(67090, ON);
    SetEventFlagID(67100, ON);
    SetEventFlagID(67110, ON);
    SetEventFlagID(67120, ON);
    SetEventFlagID(67130, ON);
    SetEventFlagID(67140, ON);
    SetEventFlagID(67150, ON);
    SetEventFlagID(67160, ON);
    SetEventFlagID(67170, ON);
    SetEventFlagID(67180, ON);
    SetEventFlagID(67190, ON);
    SetEventFlagID(67200, ON);
    SetEventFlagID(67210, ON);
    SetEventFlagID(67220, ON);
    SetEventFlagID(67230, ON);
    SetEventFlagID(67240, ON);
    SetEventFlagID(67250, ON);
    SetEventFlagID(67260, ON);
    SetEventFlagID(67270, ON);
    SetEventFlagID(67280, ON);
    SetEventFlagID(67290, ON);
    SetEventFlagID(67300, ON);
    SetEventFlagID(67310, ON);
    SetEventFlagID(67320, ON);
    SetEventFlagID(67330, ON);
    SetEventFlagID(67340, ON);
    SetEventFlagID(67350, ON);
    SetEventFlagID(67360, ON);
    SetEventFlagID(67370, ON);
    SetEventFlagID(67380, ON);
    SetEventFlagID(67390, ON);
    SetEventFlagID(67400, ON);
    SetEventFlagID(67410, ON);
    SetEventFlagID(67420, ON);
    SetEventFlagID(67430, ON);
    SetEventFlagID(67440, ON);
    SetEventFlagID(67450, ON);
    SetEventFlagID(67460, ON);
    SetEventFlagID(67470, ON);
    SetEventFlagID(67480, ON);
    SetEventFlagID(67490, ON);
    SetEventFlagID(67500, ON);
    SetEventFlagID(67510, ON);
    SetEventFlagID(67520, ON);
    SetEventFlagID(67530, ON);
    SetEventFlagID(67540, ON);
    SetEventFlagID(67550, ON);
    SetEventFlagID(67560, ON);
    SetEventFlagID(67570, ON);
    SetEventFlagID(67580, ON);
    SetEventFlagID(67590, ON);
    SetEventFlagID(67600, ON);
    SetEventFlagID(67610, ON);
    SetEventFlagID(67620, ON);
    SetEventFlagID(67630, ON);
    SetEventFlagID(67640, ON);
    SetEventFlagID(67650, ON);
    SetEventFlagID(67660, ON);
    SetEventFlagID(67670, ON);
    SetEventFlagID(67680, ON);
    SetEventFlagID(67690, ON);
    SetEventFlagID(67700, ON);
    SetEventFlagID(67800, ON);
    SetEventFlagID(67810, ON);
    SetEventFlagID(67820, ON);
    SetEventFlagID(67830, ON);
    SetEventFlagID(67840, ON);
    SetEventFlagID(67850, ON);
    SetEventFlagID(67860, ON);
    SetEventFlagID(67870, ON);
    SetEventFlagID(67880, ON);
    SetEventFlagID(67890, ON);
    SetEventFlagID(67900, ON);
    SetEventFlagID(67910, ON);
    SetEventFlagID(67920, ON);
    SetEventFlagID(67930, ON);
    SetEventFlagID(67940, ON);
    SetEventFlagID(67950, ON);
    SetEventFlagID(67960, ON);
    SetEventFlagID(67970, ON);
    SetEventFlagID(67980, ON);
    SetEventFlagID(67990, ON);
    SetEventFlagID(68000, ON);
    SetEventFlagID(68010, ON);
    SetEventFlagID(68020, ON);
    SetEventFlagID(68030, ON);
    SetEventFlagID(68040, ON);
    SetEventFlagID(68050, ON);
    SetEventFlagID(68060, ON);
    SetEventFlagID(68070, ON);
    SetEventFlagID(68080, ON);
    SetEventFlagID(68090, ON);
    SetEventFlagID(68100, ON);
    SetEventFlagID(68200, ON);
    SetEventFlagID(68210, ON);
    SetEventFlagID(68220, ON);
    SetEventFlagID(68230, ON);
    SetEventFlagID(68240, ON);
    SetEventFlagID(68250, ON);
    SetEventFlagID(68260, ON);
    SetEventFlagID(68270, ON);
    SetEventFlagID(68280, ON);
    SetEventFlagID(68290, ON);
    SetEventFlagID(68300, ON);
    SetEventFlagID(68400, ON);
    SetEventFlagID(68410, ON);
    SetEventFlagID(68420, ON);
    SetEventFlagID(68430, ON);
    SetEventFlagID(68440, ON);
    SetEventFlagID(68450, ON);
    SetEventFlagID(68460, ON);
    SetEventFlagID(68470, ON);
    SetEventFlagID(68480, ON);
    SetEventFlagID(68490, ON);
    SetEventFlagID(68500, ON);
    //DLC Cookbooks
    SetEventFlagID(68510, ON);
    SetEventFlagID(68520, ON);
    SetEventFlagID(68530, ON);
    SetEventFlagID(68540, ON);
    SetEventFlagID(68550, ON);
    SetEventFlagID(68560, ON);
    SetEventFlagID(68570, ON);
    SetEventFlagID(68580, ON);
    SetEventFlagID(68590, ON);
    SetEventFlagID(68600, ON);
    SetEventFlagID(68610, ON);
    SetEventFlagID(68620, ON);
    SetEventFlagID(68630, ON);
    SetEventFlagID(68640, ON);
    SetEventFlagID(68650, ON);
    SetEventFlagID(68660, ON);
    SetEventFlagID(68670, ON);
    SetEventFlagID(68680, ON);
    SetEventFlagID(68690, ON);
    SetEventFlagID(68700, ON);
    SetEventFlagID(68710, ON);
    SetEventFlagID(68720, ON);
    SetEventFlagID(68730, ON);
    SetEventFlagID(68740, ON);
    SetEventFlagID(68750, ON);
    SetEventFlagID(68760, ON);
    SetEventFlagID(68770, ON);
    SetEventFlagID(68780, ON);
    SetEventFlagID(68790, ON);
    SetEventFlagID(68800, ON);
    SetEventFlagID(68810, ON);
    SetEventFlagID(68820, ON);
    SetEventFlagID(68830, ON);
    SetEventFlagID(68840, ON);
    SetEventFlagID(68850, ON);
    SetEventFlagID(68860, ON);
    SetEventFlagID(68870, ON);
    SetEventFlagID(68880, ON);
    SetEventFlagID(68890, ON);
    SetEventFlagID(68900, ON);
    SetEventFlagID(68910, ON);
    SetEventFlagID(68920, ON);
    SetEventFlagID(68930, ON);
    SetEventFlagID(68940, ON);
    SetEventFlagID(68950, ON);
});

// Items Acquisition
$Event(9008004, Default, function() {
    InitializeEvent(0, 65810, 65810, 100750, 0, 0, 0, 0); //Ash of War: Impaling Thrust
    InitializeEvent(1, 65810, 65811, 400163, 0, 0, 0, 0); //Ash of War: Piercing Fang
    InitializeEvent(2, 65810, 65812, 540630, 0, 0, 0, 0); //Ash of War: Spinning Slash
    InitializeEvent(3, 65810, 65813, 1043377400, 0, 0, 0, 0); //Ash of War: Repeating Thrust
    InitializeEvent(4, 65810, 65814, 540418, 0, 0, 0, 0); //Ash of War: Double Slash
    InitializeEvent(5, 65810, 65815, 540112, 0, 0, 0, 0); //Ash of War: Unsheathe
    InitializeEvent(6, 65810, 65816, 540238, 0, 0, 0, 0); //Ash of War: Sword Dance
    InitializeEvent(8, 65810, 65818, 100770, 0, 0, 0, 0); //Ash of War: Quickstep
    InitializeEvent(9, 65810, 65819, 1052417100, 0, 0, 0, 0); //Ash of War: Bloodhound's Step
    InitializeEvent(10, 65810, 65820, 1047387700, 0, 0, 0, 0); //Ash of War: Lion's Claw
    InitializeEvent(11, 65810, 65821, 100780, 0, 0, 0, 0); //Ash of War: Stamp (Upward Cut)
    InitializeEvent(12, 65810, 65822, 540120, 0, 0, 0, 0); //Ash of War: Stamp (Sweep)
    InitializeEvent(13, 65810, 65823, 540104, 0, 0, 0, 0); //Ash of War: Wild Strikes
    InitializeEvent(14, 65810, 65824, 100890, 0, 0, 0, 0); //Evasive Strike
    InitializeEvent(15, 65810, 65825, 100790, 0, 0, 0, 0); //Ash of War: Kick
    InitializeEvent(16, 65810, 65826, 540116, 0, 0, 0, 0); //Unused
    InitializeEvent(17, 65810, 65827, 290150, 0, 0, 0, 0); //Ash of War: Hoarah Loux's Earthshaker
    InitializeEvent(18, 65810, 65828, 540224, 0, 0, 0, 0); //Ash of War: Barbaric Roar
    InitializeEvent(19, 65810, 65829, 100800, 0, 0, 0, 0); //Ash of War: War Cry
    InitializeEvent(20, 65810, 65830, 1051537600, 0, 0, 0, 0); //Ash of War: Troll's Roar
    InitializeEvent(21, 65810, 65831, 400309, 0, 0, 0, 0); //Ash of War: Braggart's Roar
    InitializeEvent(22, 65810, 65832, 100810, 0, 0, 0, 0); //Ash of War: Endure
    InitializeEvent(23, 65810, 65833, 540202, 0, 0, 0, 0); //Unused
    InitializeEvent(24, 65810, 65834, 100760, 0, 0, 0, 0); //Ash of War: Square Off
    InitializeEvent(25, 65810, 65835, 1036487400, 0, 0, 0, 0); //Ash of War: Giant Hunt
    InitializeEvent(26, 65810, 65836, 100880, 0, 0, 0, 0); //Ash of War: Spinning Strikes
    InitializeEvent(27, 65810, 65837, 540170, 0, 0, 0, 0); //Unused
    InitializeEvent(28, 65810, 65838, 540172, 0, 0, 0, 0); //Ash of War: Stormcaller
    InitializeEvent(29, 65810, 65839, 100830, 0, 0, 0, 0); //Ash of War: Storm Blade
    InitializeEvent(30, 65810, 65840, 100870, 0, 0, 0, 0); //Ash of War: Vacuum Slice
    InitializeEvent(31, 65810, 65841, 1042377110, 0, 0, 0, 0); //Ash of War: Storm Stomp
    InitializeEvent(32, 65810, 65842, 540108, 0, 0, 0, 0); //Unused
    InitializeEvent(33, 65810, 65843, 16007020, 0, 0, 0, 0); //Ash of War: Royal Knight's Resolve
    InitializeEvent(34, 65810, 65844, 540516, 0, 0, 0, 0); //Ash of War: Prelate's Charge
    InitializeEvent(35, 65810, 65845, 100840, 0, 0, 0, 0); //Ash of War: Eruption
    InitializeEvent(36, 65810, 65846, 540408, 0, 0, 0, 0); //Ash of War: Flaming Strike
    InitializeEvent(37, 65810, 65847, 13007700, 0, 0, 0, 0); //Ash of War: Black Flame Tornado
    InitializeEvent(38, 65810, 65848, 540410, 0, 0, 0, 0); //Unused
    InitializeEvent(39, 65810, 65849, 540372, 0, 0, 0, 0); //Unused
    InitializeEvent(40, 65810, 65850, 540318, 0, 0, 0, 0); //Ash of War: Lightning Slash
    InitializeEvent(41, 65810, 65851, 540310, 0, 0, 0, 0); //Ash of War: Lightning Ram
    InitializeEvent(42, 65810, 65852, 510810, 0, 0, 0, 0); //Ash of War: Loretta's Slash
    InitializeEvent(43, 65810, 65853, 120000, 0, 0, 0, 0); //Ash of War: Spinning Weapon
    InitializeEvent(44, 65810, 65854, 400358, 0, 0, 0, 0); //Unused
    InitializeEvent(45, 65810, 65855, 120010, 0, 0, 0, 0); //Unused
    InitializeEvent(46, 65810, 65856, 1043357500, 0, 0, 0, 0); //Ash of War: Gravitas
    InitializeEvent(47, 65810, 65857, 1035507090, 0, 0, 0, 0); //Ash of War: Carian Grandeur
    InitializeEvent(48, 65810, 65858, 120020, 0, 0, 0, 0); //Unused
    InitializeEvent(49, 65810, 65859, 290290, 0, 0, 0, 0); //Unused
    InitializeEvent(50, 65810, 65860, 540414, 0, 0, 0, 0); //Ash of War: Cragblade
    InitializeEvent(51, 65810, 65861, 540118, 0, 0, 0, 0); //Ash of War: Sacred Blade
    InitializeEvent(52, 65810, 65862, 540314, 0, 0, 0, 0); //Ash of War: Prayerful Strike
    InitializeEvent(53, 65810, 65863, 540660, 0, 0, 0, 0); //Ash of War: Golden Land
    InitializeEvent(54, 65810, 65864, 540404, 0, 0, 0, 0); //Ash of War: Sacred Ring of Light
    InitializeEvent(55, 65810, 65865, 540308, 0, 0, 0, 0); //Ash of War: Golden Slam
    InitializeEvent(56, 65810, 65866, 1042397010, 0, 0, 0, 0); //Ash of War: Golden Vow
    InitializeEvent(57, 65810, 65867, 540300, 0, 0, 0, 0); //Ash of War: Sacred Order
    InitializeEvent(58, 65810, 65868, 1039517200, 0, 0, 0, 0); //Unused
    InitializeEvent(59, 65810, 65869, 540420, 0, 0, 0, 0); //Ash of War: Beast's Roar
    InitializeEvent(60, 65810, 65870, 1048517700, 0, 0, 0, 0); //Ash of War: Phantom Slash
    InitializeEvent(61, 65810, 65871, 540272, 0, 0, 0, 0); //Ash of War: Spectral Lance
    InitializeEvent(62, 65810, 65872, 1035467700, 0, 0, 0, 0); //Ash of War: Raptor of the Mists
    InitializeEvent(63, 65810, 65873, 540524, 0, 0, 0, 0); //Unused
    InitializeEvent(64, 65810, 65874, 1049377100, 0, 0, 0, 0); //Ash of War: Poison Moth Flight
    InitializeEvent(65, 65810, 65875, 540406, 0, 0, 0, 0); //Ash of War: Poisonous Mist
    InitializeEvent(66, 65810, 65876, 540686, 0, 0, 0, 0); //Unused
    InitializeEvent(67, 65810, 65877, 1046367700, 0, 0, 0, 0); //Ash of War: Bloody Slash
    InitializeEvent(68, 65810, 65878, 540402, 0, 0, 0, 0); //Ash of War: Lifesteal Fist
    InitializeEvent(69, 65810, 65879, 540306, 0, 0, 0, 0); //Ash of War: Blood Blade
    InitializeEvent(70, 65810, 65880, 100850, 0, 0, 0, 0); //Ash of War: Assassin's Gambit
    InitializeEvent(71, 65810, 65881, 540510, 0, 0, 0, 0); //Ash of War: Seppuku
    InitializeEvent(72, 65810, 65882, 1039437400, 0, 0, 0, 0); //Ash of War: Ice Spear
    InitializeEvent(73, 65810, 65883, 540200, 0, 0, 0, 0); //Ash of War: Chilling Mist
    InitializeEvent(74, 65810, 65884, 540204, 0, 0, 0, 0); //Ash of War: Hoarfrost Stomp
    InitializeEvent(75, 65810, 65885, 100860, 0, 0, 0, 0); //Ash of War: No Skill
    InitializeEvent(76, 65810, 65886, 540210, 0, 0, 0, 0); //Ash of War: Shield Bash
    InitializeEvent(77, 65810, 65887, 540302, 0, 0, 0, 0); //Ash of War: Shield Crash
    InitializeEvent(78, 65810, 65888, 1044327410, 0, 0, 0, 0); //Ash of War: Barricade Shield
    InitializeEvent(79, 65810, 65889, 100820, 0, 0, 0, 0); //Ash of War: Parry
    InitializeEvent(80, 65810, 65890, 130340, 0, 0, 0, 0); //Ash of War: Carian Retaliation
    InitializeEvent(81, 65810, 65891, 540100, 0, 0, 0, 0); //Unused
    InitializeEvent(82, 65810, 65892, 540316, 0, 0, 0, 0); //Ash of War: Golden Parry
    InitializeEvent(83, 65810, 65893, 540206, 0, 0, 0, 0); //Unused
    InitializeEvent(84, 65810, 65894, 30107100, 0, 0, 0, 0); //Ash of War: Holy Ground
    InitializeEvent(85, 65810, 65895, 540208, 0, 0, 0, 0); //Unused
    InitializeEvent(86, 65810, 65896, 540332, 0, 0, 0, 0); //Ash of War: Barrage
    InitializeEvent(87, 65810, 65897, 540140, 0, 0, 0, 0); //Ash of War: Mighty Shot
    InitializeEvent(88, 65810, 65898, 540412, 0, 0, 0, 0); //Ash of War: Sky Shot
    InitializeEvent(89, 65810, 65899, 540334, 0, 0, 0, 0); //Ash of War: Through and Through
    InitializeEvent(90, 65810, 65900, 540646, 0, 0, 0, 0); //Ash of War: Enchanted Shot
    InitializeEvent(91, 65810, 65901, 580360, 0, 0, 0, 0); //Ash of War: Rain of Arrows
    
    //Spell Runes - Incantations
    InitializeEvent(0, 1500, 9000, 7000, 1);  //Bestial 1
    InitializeEvent(1, 1500, 9001, 7010, 1);  //Bestial 2
    InitializeEvent(2, 1500, 9002, 7020, 1);  //Bestial 3
    InitializeEvent(3, 1500, 9003, 7030, 1);  //Bestial 4
    InitializeEvent(4, 1500, 9004, 7040, 1);  //Bestial 5
    InitializeEvent(5, 1500, 9005, 7050, 1);  //Golden Order 1
    InitializeEvent(6, 1500, 9006, 7060, 1);  //Golden Order 2
    InitializeEvent(7, 1500, 9007, 7070, 1);  //Golden Order 3
    InitializeEvent(8, 1500, 9008, 7080, 1);  //Golden Order 4
    InitializeEvent(9, 1500, 9009, 7090, 1);  //Golden Order 5
    InitializeEvent(10, 1500, 9010, 7100, 1); //Giantsflame 1
    InitializeEvent(11, 1500, 9011, 7110, 1); //Giantsflame 2
    InitializeEvent(12, 1500, 9012, 7120, 1); //Giantsflame 3
    InitializeEvent(13, 1500, 9013, 7130, 1); //Giantsflame 4
    InitializeEvent(14, 1500, 9014, 7140, 1); //Giantsflame 5
    InitializeEvent(15, 1500, 9015, 7150, 1); //Dragon Cult 1
    InitializeEvent(16, 1500, 9016, 7160, 1); //Dragon Cult 2
    InitializeEvent(17, 1500, 9017, 7170, 1); //Dragon Cult 3
    InitializeEvent(18, 1500, 9018, 7180, 1); //Dragon Cult 4
    InitializeEvent(19, 1500, 9019, 7190, 1); //Dragon Cult 5
    InitializeEvent(20, 1500, 9020, 7200, 1); //Godslayer 1
    InitializeEvent(21, 1500, 9021, 7210, 1); //Godslayer 2
    InitializeEvent(22, 1500, 9022, 7220, 1); //Godslayer 3
    InitializeEvent(23, 1500, 9023, 7230, 1); //Godslayer 4
    InitializeEvent(24, 1500, 9024, 7240, 1); //Godslayer 5
    InitializeEvent(25, 1500, 9025, 7250, 1); //Frenzy 1
    InitializeEvent(26, 1500, 9026, 7260, 1); //Frenzy 2
    InitializeEvent(27, 1500, 9027, 7270, 1); //Frenzy 3
    InitializeEvent(28, 1500, 9028, 7280, 1); //Frenzy 4
    InitializeEvent(29, 1500, 9029, 7290, 1); //Frenzy 5
    InitializeEvent(30, 1500, 9030, 7300, 1); //Bloodflame 1
    InitializeEvent(31, 1500, 9031, 7310, 1); //Bloodflame 2
    InitializeEvent(32, 1500, 9032, 7320, 1); //Bloodflame 3
    InitializeEvent(33, 1500, 9033, 7330, 1); //Bloodflame 4
    InitializeEvent(34, 1500, 9034, 7340, 1); //Bloodflame 5
    InitializeEvent(35, 1500, 9035, 7350, 1); //Servants of Rot 1
    InitializeEvent(36, 1500, 9036, 7360, 1); //Servants of Rot 2
    InitializeEvent(37, 1500, 9037, 7370, 1); //Servants of Rot 3
    InitializeEvent(38, 1500, 9038, 7380, 1); //Servants of Rot 4
    InitializeEvent(39, 1500, 9039, 7390, 1); //Servants of Rot 5
    InitializeEvent(40, 1500, 9040, 7400, 1); //Mystic 1
    InitializeEvent(41, 1500, 9041, 7410, 1); //Mystic 2
    InitializeEvent(42, 1500, 9042, 7420, 1); //Mystic 3
    InitializeEvent(43, 1500, 9043, 7430, 1); //Mystic 4
    InitializeEvent(44, 1500, 9044, 7440, 1); //Mystic 5
    //Spell Runes - Sorceries
    InitializeEvent(45, 1500, 9045, 7450, 1); //Glint 1
    InitializeEvent(46, 1500, 9046, 7460, 1); //Glint 2
    InitializeEvent(47, 1500, 9047, 7470, 1); //Glint 3
    InitializeEvent(48, 1500, 9048, 7480, 1); //Glint 4
    InitializeEvent(49, 1500, 9049, 7490, 1); //Glint 5
    InitializeEvent(50, 1500, 9050, 7500, 1); //Gravity 1
    InitializeEvent(51, 1500, 9051, 7510, 1); //Gravity 2
    InitializeEvent(52, 1500, 9052, 7520, 1); //Gravity 3
    InitializeEvent(53, 1500, 9053, 7530, 1); //Gravity 4
    InitializeEvent(54, 1500, 9054, 7540, 1); //Gravity 5
    InitializeEvent(55, 1500, 9055, 7550, 1); //Dragonkin 1
    InitializeEvent(56, 1500, 9056, 7560, 1); //Dragonkin 2
    InitializeEvent(57, 1500, 9057, 7570, 1); //Dragonkin 3
    InitializeEvent(58, 1500, 9058, 7580, 1); //Dragonkin 4
    InitializeEvent(59, 1500, 9059, 7590, 1); //Dragonkin 5
    InitializeEvent(60, 1500, 9060, 7600, 1); //Lava 1
    InitializeEvent(61, 1500, 9061, 7610, 1); //Lava 2
    InitializeEvent(62, 1500, 9062, 7620, 1); //Lava 3
    InitializeEvent(63, 1500, 9063, 7630, 1); //Lava 4
    InitializeEvent(64, 1500, 9064, 7640, 1); //Lava 5
    InitializeEvent(65, 1500, 9065, 7650, 1); //Night 1
    InitializeEvent(66, 1500, 9066, 7660, 1); //Night 2
    InitializeEvent(67, 1500, 9067, 7670, 1); //Night 3
    InitializeEvent(68, 1500, 9068, 7680, 1); //Night 4
    InitializeEvent(69, 1500, 9069, 7690, 1); //Night 5
    InitializeEvent(70, 1500, 9070, 7700, 1); //Death 1
    InitializeEvent(71, 1500, 9071, 7710, 1); //Death 2
    InitializeEvent(72, 1500, 9072, 7720, 1); //Death 3
    InitializeEvent(73, 1500, 9073, 7730, 1); //Death 4
    InitializeEvent(74, 1500, 9074, 7740, 1); //Death 5
    InitializeEvent(75, 1500, 9075, 7750, 1); //Storm 1
    InitializeEvent(76, 1500, 9076, 7760, 1); //Storm 2
    InitializeEvent(77, 1500, 9077, 7770, 1); //Storm 3
    InitializeEvent(78, 1500, 9078, 7780, 1); //Storm 4
    InitializeEvent(79, 1500, 9079, 7790, 1); //Storm 5
    InitializeEvent(80, 1500, 9080, 7800, 1); //Frost 1
    InitializeEvent(81, 1500, 9081, 7810, 1); //Frost 2
    InitializeEvent(82, 1500, 9082, 7820, 1); //Frost 3
    InitializeEvent(83, 1500, 9083, 7830, 1); //Frost 4
    InitializeEvent(84, 1500, 9084, 7840, 1); //Frost 5
    InitializeEvent(85, 1500, 9085, 7850, 1); //Aberrant 1
    InitializeEvent(86, 1500, 9086, 7860, 1); //Aberrant 2
    InitializeEvent(87, 1500, 9087, 7870, 1); //Aberrant 3
    InitializeEvent(88, 1500, 9088, 7880, 1); //Aberrant 4
    InitializeEvent(89, 1500, 9089, 7890, 1); //Aberrant 5
    //Shadow Spell Runes                
    InitializeEvent(90, 1500, 9118, 8090, 1); //Bestial 6
    InitializeEvent(91, 1500, 9101, 8100, 1); //Golden Order 6
    InitializeEvent(92, 1500, 9102, 8110, 1); //Giantsflame 6
    InitializeEvent(93, 1500, 9103, 8120, 1); //Dragon Cult 6
    InitializeEvent(94, 1500, 9104, 8130, 0); //Godslayer 6
    InitializeEvent(95, 1500, 9105, 8140, 0); //Frenzy 6
    InitializeEvent(96, 1500, 9106, 8150, 0); //Bloodflame 6
    InitializeEvent(97, 1500, 9107, 8160, 0); //Rot 6
    InitializeEvent(98, 1500, 9108, 8170, 1); //Mystic 6
    InitializeEvent(99, 1500, 9109, 8000, 1); //Glint 6
    InitializeEvent(100, 1500, 9110, 8010, 1); //Gravity 6
    InitializeEvent(101, 1500, 9111, 8040, 0); //Dragonkin 6
    InitializeEvent(102, 1500, 9112, 8050, 0); //Lava 6
    InitializeEvent(103, 1500, 9113, 8060, 0); //Night 6
    InitializeEvent(104, 1500, 9114, 8020, 1); //Death 6
    InitializeEvent(105, 1500, 9115, 8070, 0); //Storm 6
    InitializeEvent(106, 1500, 9116, 8080, 0); //Frost 6
    InitializeEvent(107, 1500, 9117, 8030, 1); //Aberrant 6
    
    InitializeEvent(1, 4858, 400704, 2049399738, 6000, 107030); // Ancient Dragon Florissax
});

// Physic-Restore
//const crimsonFlasks = [ 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 1021, 1023, 1025 ]
//const blueFlasks =    [ 1051, 1053, 1055, 1057, 1059, 1061, 1063, 1065, 1067, 1069, 1071, 1073, 1075 ]

// Script to remove drain effects while Rallying Standard and Golden Vow are active
$Event(9008006, Default, function() {
    InitializeEvent(0, 9005010, 1045370700)
    InitializeEvent(1, 9005010, 12020720);
    InitializeEvent(2, 9005010, 1044340710); 
    InitializeEvent(3, 9005010, 1044350700); 
    InitializeEvent(4, 9005010, 1052380726); 
    InitializeEvent(5, 9005010, 1042360730); 
    InitializeEvent(6, 9005010, 1034500710); 
    InitializeEvent(7, 9005010, 1035420706); 
    InitializeEvent(8, 9005010, 1051430700); 
    InitializeEvent(9, 9005010, 11000730); 
    InitializeEvent(10, 9005010, 1036410700);
    InitializeEvent(11, 9005010, 1036410705);
    InitializeEvent(12, 9005010, 1042360710);
    InitializeEvent(13, 9005010, 1044390710);
    InitializeEvent(14, 9005010, 1045360700);
    InitializeEvent(15, 9005010, 1041360700);
    InitializeEvent(16, 9005010, 1044330705);
    InitializeEvent(17, 9005010, 1038410730);
    InitializeEvent(18, 9005010, 1041320700);
    InitializeEvent(19, 9005010, 1035450700);
    InitializeEvent(20, 9005010, 1036490705);
    InitializeEvent(21, 9005010, 1043530700);
    InitializeEvent(22, 9005010, 1040520715);
    InitializeEvent(23, 9005010, 1037540705);
    InitializeEvent(24, 9005010, 1048380705);
    InitializeEvent(25, 9005010, 1049370700);
    InitializeEvent(26, 9005010, 1048410700);
    InitializeEvent(27, 9005010, 1051560725);
    InitializeEvent(28, 9005010, 12020705); 
    InitializeEvent(29, 9005010, 12010705); 
    InitializeEvent(30, 9005010, 12050710); 
    InitializeEvent(31, 9005010, 1045360702);
    InitializeEvent(32, 9005010, 1042360711);
    InitializeEvent(33, 9005010, 1045360701);
    InitializeEvent(34, 9005010, 1041360701);
    InitializeEvent(35, 9005010, 1044330706);
    InitializeEvent(36, 9005010, 1038410731);
    InitializeEvent(37, 9005010, 1041320701);
    InitializeEvent(38, 9005010, 1035450701);
    InitializeEvent(39, 9005010, 1036490706);
    InitializeEvent(40, 9005010, 1043530701);
    InitializeEvent(42, 9005010, 1048380706);
    InitializeEvent(43, 9005010, 1049370701);
    InitializeEvent(44, 9005010, 1048410701);
    InitializeEvent(45, 9005010, 1051560726);
    InitializeEvent(46, 9005010, 1045360703);
    InitializeEvent(47, 9005010, 1038470251);
    InitializeEvent(48, 9005010, 1033440701);
    InitializeEvent(49, 9005010, 1033440702);
    InitializeEvent(50, 9005010, 1033440703);
    InitializeEvent(51, 9005010, 10000700); 
    InitializeEvent(52, 9005010, 10000701); 
    InitializeEvent(53, 9005010, 10000702); 
    InitializeEvent(54, 9005010, 10000703); 
    InitializeEvent(55, 9005010, 10000704); 
    InitializeEvent(56, 9005010, 10000706); 
    InitializeEvent(57, 9005010, 1040540700);
    InitializeEvent(58, 9005010, 11000715); 
    InitializeEvent(59, 9005010, 1051560710);
    InitializeEvent(60, 9005010, 11050705); 
    InitializeEvent(61, 9005010, 1035420700);
    InitializeEvent(62, 9005010, 1037530700);
    InitializeEvent(63, 9005010, 31110700); 
    InitializeEvent(64, 9005010, 1050380701);
    InitializeEvent(65, 9005010, 16000723); 
    InitializeEvent(66, 9005010, 1043370750);
    InitializeEvent(67, 9005010, 1039400710);
    InitializeEvent(68, 9005010, 1039510700);
    InitializeEvent(69, 9005010, 11000710); 
    InitializeEvent(70, 9005010, 31150700); 
    InitializeEvent(71, 9005010, 1036480700);
    InitializeEvent(72, 9005010, 11050730); 
    InitializeEvent(73, 9005010, 1051560700);
    InitializeEvent(74, 9005010, 1039440730);
    InitializeEvent(75, 9005010, 1039440731);
    InitializeEvent(76, 9005010, 1043390710);
    InitializeEvent(77, 9005010, 32070700); 
    InitializeEvent(78, 9005010, 1039440700);
    InitializeEvent(79, 9005010, 1052380706);
    InitializeEvent(80, 9005010, 1035530700);
    InitializeEvent(81, 9005010, 13000700); 
    InitializeEvent(82, 9005010, 1039440740);
    InitializeEvent(83, 9005010, 1039440741);
    InitializeEvent(84, 9005010, 1039440742);
    InitializeEvent(85, 9005010, 1039440743);
    InitializeEvent(86, 9005010, 1039440744);
    InitializeEvent(87, 9005010, 1039440705);
    InitializeEvent(88, 9005010, 1039440706);
    InitializeEvent(89, 9005010, 1039440707);
    InitializeEvent(90, 9005010, 1039440708);
    InitializeEvent(91, 9005010, 1047410700);
    InitializeEvent(92, 9005010, 1034490700);
    InitializeEvent(93, 9005010, 1034490711);
    InitializeEvent(94, 9005010, 1037460710);
    InitializeEvent(95, 9005010, 1042360700);
    InitializeEvent(96, 9005010, 1053440700);
    InitializeEvent(97, 9005010, 12050702);
    InitializeEvent(98, 9005010, 1034500701);
    InitializeEvent(99, 9005010, 1037420720);
    InitializeEvent(100, 9005010, 1039540700); 
    InitializeEvent(101, 9005010, 1037540700); 
    InitializeEvent(102, 9005010, 1037540701); 
    InitializeEvent(103, 9005010, 31000701);
    InitializeEvent(104, 9005010, 31000850);
    InitializeEvent(105, 9005010, 31000703);
    InitializeEvent(106, 9005010, 1039400701); 
    InitializeEvent(107, 9005010, 1045340700); 
    InitializeEvent(108, 9005010, 1045340701); 
    InitializeEvent(109, 9005010, 1038410710); 
    InitializeEvent(110, 9005010, 1038430700); 
    InitializeEvent(111, 9005010, 1036490700); 
    InitializeEvent(112, 9005010, 1043310705); 
    InitializeEvent(113, 9005010, 1045340705); 
    InitializeEvent(114, 9005010, 1041330710); 
    InitializeEvent(115, 9005010, 14000717);
    InitializeEvent(116, 9005010, 16000722);
    InitializeEvent(117, 9005010, 1037440700); 
    InitializeEvent(118, 9005010, 1039440710); 
    InitializeEvent(119, 9005010, 1039440711); 
    InitializeEvent(120, 9005010, 1037440710); 
    InitializeEvent(121, 9005010, 1044360700); 
    InitializeEvent(122, 9005010, 1041330700); 
    InitializeEvent(123, 9005010, 1041330701); 
    InitializeEvent(124, 9005010, 1034500705); 
    InitializeEvent(125, 9005010, 1043350710); 
    InitializeEvent(126, 9005010, 1035460710); 
    InitializeEvent(127, 9005010, 1049530700); 
    InitializeEvent(128, 9005010, 1044380710); 
    InitializeEvent(129, 9005010, 1039520701); 
    InitializeEvent(130, 9005010, 1044390700); 
    InitializeEvent(131, 9005010, 12030710);
    InitializeEvent(132, 9005010, 1045390700); 
    InitializeEvent(133, 9005010, 1045380700); 
    InitializeEvent(134, 9005010, 1046360700); 
    InitializeEvent(135, 9005010, 12030702);
    InitializeEvent(136, 9005010, 35000715);
    InitializeEvent(137, 9005010, 35000716);
    InitializeEvent(138, 9005010, 10000740);
    InitializeEvent(139, 9005010, 1042380710); 
    InitializeEvent(140, 9005010, 1036430700); 
    InitializeEvent(141, 9005010, 1044520700); 
    InitializeEvent(142, 9005010, 1044520701); 
    InitializeEvent(143, 9005010, 1039390700); 
    InitializeEvent(144, 9005010, 14000740);
    InitializeEvent(145, 9005010, 10000730);
    InitializeEvent(146, 9005010, 1034420700); 
    InitializeEvent(147, 9005010, 1037490700); 
    InitializeEvent(148, 9005010, 1038510705); 
    InitializeEvent(149, 9005010, 1051560705); 
    InitializeEvent(150, 9005010, 15000700);
    InitializeEvent(151, 9005010, 1042550700); 
    InitializeEvent(152, 9005010, 1050380710); 
    InitializeEvent(153, 9005010, 1050380700); 
    InitializeEvent(154, 9005010, 1050380702); 
    InitializeEvent(155, 9005010, 1040520705); 
    InitializeEvent(156, 9005010, 11000725);
    InitializeEvent(157, 9005010, 1051560720); 
    InitializeEvent(158, 9005010, 11050710);
    InitializeEvent(159, 9005010, 1040540705); 
});

// Completion Marks
$Event(9008007, Default, function() {
    InitializeEvent(0 , 9006084, 10000800, 10000800, 10009800, 71000, 10009801, 10009802, 1099000400, 10009800, 0); // Stormveil Castle - Godrick the Grafted
    InitializeEvent(1 , 9006084, 10000850, 10000850, 10009850, 71001, 10009851, 10009852, 1099000400, 10009850, 0); // Stormveil Castle - Margit, the Fell Omen
    InitializeEvent(2 , 9006084, 10010800, 10010800, 10019800, 0, 0, 0, 1099000400, 0, 0);                // Chapel of Anticipation - Grafted Scion
    InitializeEvent(3 , 9006084, 11000800, 11000800, 11009800, 71100, 11009801, 11009802, 1099000403, 11009800, 1); // Elden Throne - Morgott, the Omen King
    InitializeEvent(4 , 9006084, 11000850, 11000850, 11009850, 71101, 11009851, 11009852, 1099000403, 11009850, 1); // Erdtree Sanctuary - Sigur, Night's Captain
    InitializeEvent(5 , 9006084, 11000870, 11000870, 11009870, 0, 0, 0, 1099000403, 0, 0);                // Leyndell Capital - Twisted Abductor
    InitializeEvent(6 , 9006084, 11050800, 11050800, 11059800, 71120, 11059801, 11059802, 1099000403, 11059800, 0); // Ashen Capital - Hoarah Loux, Warrior
    InitializeEvent(7 , 9006084, 11050850, 11050850, 11059850, 71121, 11059851, 11059852, 1099000403, 11059850, 0); // Ashen Capital - Skarde, Crucible's Betrayer
    InitializeEvent(8 , 9006084, 12010800, 12010800, 12019800, 71210, 12019801, 12019802, 1099000407, 12019800, 0); // Ainsel Throne - Dragonkin Soldier of Nokstella
    InitializeEvent(9 , 9006084, 12010805, 12010805, 12019805, 71200, 12019806, 12019807, 1099000407, 12019805, 0); // Minor Erdtree - Nox Insect Cavalry
    InitializeEvent(10, 9006084, 12010810, 12010811, 12019810, 0, 0, 0, 1099000407, 0, 0);                // Grand Cloister - Scion of the Sealed God
    InitializeEvent(11, 9006084, 12010850, 12010850, 12019850, 0, 0, 0, 1099000407, 0, 0);                // Lake of Rot - Dragonkin Soldier
    InitializeEvent(12, 9006084, 12020800, 12020800, 12029800, 71220, 12029801, 12029802, 1099000407, 12029800, 0); // Siofra Aqueduct - Spiritshaper Caimar
    InitializeEvent(13, 9006084, 12020830, 12020830, 12029830, 0, 0, 0, 1099000407, 0, 0);                // Soifra River Waterfall - Dragonkin Soldier
    InitializeEvent(14, 9006084, 12020850, 12020850, 12029850, 71221, 12029851, 12029852, 1099000407, 12029850, 0); // Nokron, Eternal City - Goras, Scourge of Dreams
    InitializeEvent(15, 9006084, 12020870, 12020870, 12029870, 0, 0, 0, 1099000407, 0, 0);                // Nokron, Eternal City - Tearna, Night Mistress
    InitializeEvent(16, 9006084, 12030390, 12030390, 12039390, 0, 0, 0, 1099000407, 0, 0);                // Deeproot Depths - Crucible Knight Siluria
    InitializeEvent(17, 9006084, 12030392, 12030392, 12039392, 0, 0, 0, 1099000407, 0, 0);                // Deeproot Depths - Blighted Nox Ancestor
    InitializeEvent(18, 9006084, 12030393, 12030393, 12039393, 0, 0, 0, 1099000407, 0, 0);                // Deeproot Depths - Aled, Knight of Godwyn
    InitializeEvent(19, 9006084, 12030850, 12030850, 12039850, 71230, 12039851, 12039852, 1099000407, 12039850, 0); // Prince of Death's Throne - Lichdragon Fortissax
    InitializeEvent(20, 9006084, 12030860, 12030860, 12039860, 71236, 12039861, 12039862, 1099000407, 12039860, 0); // Minor Erdtree - Ulcerated Tree Spirit
    InitializeEvent(21, 9006084, 12040800, 12040800, 12049800, 0, 0, 0, 1099000402, 0, 0);                // Ainsel River - Astel, Naturalborn of the Void
    InitializeEvent(22, 9006084, 12050800, 12050800, 12059800, 71250, 12059801, 12059802, 1099000407, 12059800, 0); // Mohgwyn Dynasty Mausoleum - Mohg, Lord of Blood
    InitializeEvent(23, 9006084, 12050810, 12050810, 12059810, 0, 0, 0, 1099000407, 0, 0);                // Mohgwyn Palace - Bloodflame Dragon Sanguivaros
    InitializeEvent(24, 9006084, 12050850, 12050850, 12059850, 71254, 12059851, 12059852, 1099000407, 12059850, 0); // Mohgwyn Palace - Konrad, Pureblood Knight
    InitializeEvent(25, 9006084, 12070805, 12070805, 12079805, 71271, 12079806, 12079807, 1099000407, 12079805, 0); // Nokron, Eternal City - Mimic Tear
    InitializeEvent(26, 9006084, 12090800, 12090800, 12099800, 0, 0, 0, 1099000407, 62633, 0);                // Hallowhorn Grounds - Regal Ancestor Spirit
    InitializeEvent(27, 9006084, 13000800, 13000800, 13009800, 71300, 13009801, 13009802, 1099000406, 13009800, 0); // Great Bridge - Maliketh, the Black Blade
    InitializeEvent(28, 9006084, 13000830, 13000830, 13009830, 71301, 13009831, 13009832, 1099000406, 13009830, 0); // Secret Area - Dragonlord Placidusax
    InitializeEvent(29, 9006084, 13000850, 13000850, 13009850, 71302, 13009851, 13009852, 1099000406, 13009850, 0); // Dragon Temple - Seera, Blade of the Ancients
    InitializeEvent(30, 9006084, 13000860, 13000860, 13009860, 71313, 13009861, 13009862, 1099000406, 13009860, 0); // Dragon Lord's Annex - Ancient Dragon Lansseax
    InitializeEvent(31, 9006084, 14000800, 14000801, 14009800, 0, 0, 0, 1099000401, 0, 0);                // Raya Lucaria Academy - Rennala, Queen of the Full Moon
    InitializeEvent(32, 9006084, 14000850, 14000850, 14009850, 71401, 14009851, 14009852, 1099000401, 14009850, 0); // Raya Lucaria Academy - Bols, Carian Knight
    InitializeEvent(33, 9006084, 15000800, 15000800, 15009800, 71500, 15009801, 15009802, 1099000405, 15009800, 0); // Haligtree Roots - Malenia, Blade of Miquella
    InitializeEvent(34, 9006084, 15000850, 15000850, 15009850, 71505, 15009851, 15009852, 1099000405, 15009850, 0); // Miquella's Haligtree - Loretta, Knight of the Haligtree
    InitializeEvent(35, 9006084, 16000800, 16000800, 16009800, 71600, 16009801, 16009802, 1099000403, 16009800, 0); // Volcano Manor - Rykard, Lord of Blasphemy
    InitializeEvent(36, 9006084, 16000850, 16000850, 16009850, 71601, 16009851, 16009852, 1099000403, 16009850, 0); // Volcano Manor - Godskin Noble
    InitializeEvent(37, 9006084, 16000860, 16000860, 16009860, 0, 0, 0, 1099000403, 0, 0);                // Subterranean Inquisition Chamber - Abductor Virgin (Swinging Sickle)
    InitializeEvent(38, 9006084, 18000800, 18000800, 18009800, 71801, 18009801, 18009802, 1099000400, 62102, 0); // Fringefolk Hero's Grave - Ulcerated Tree Spirit
    InitializeEvent(39, 9006084, 18000850, 18000850, 18009850, 71800, 18009851, 18009852, 1099000400, 62101, 0); // Stranded Graveyard - Bloodhound Knight Gethin
    InitializeEvent(40, 9006084, 19000800, 19000800, 19009800, 71900, 19009801, 19009802, 1099000403, 19009800, 0); // Elden Throne - Radagon of the Golden Order & Elden Beast
    InitializeEvent(41, 9006084, 20000800, 20000800, 20009800, 72000, 20009801, 20009802, 1099000408, 20009800, 0); // Belurat Tower Settlement - Divine Beast Dancing Lion
    InitializeEvent(42, 9006084, 20010800, 20010800, 20019800, 72010, 20019801, 20019802, 1099000408, 20019800, 0); // Enir-Ilim - Promised Consort Radahn
    InitializeEvent(43, 9006084, 21000850, 21000850, 21009850, 72101, 21009851, 21009852, 1099000408, 21009850, 0); // Shadow Keep - Golden Hippopotamus
    InitializeEvent(44, 9006084, 21010800, 21010800, 21019800, 72110, 21019801, 21019802, 1099000408, 21019800, 0); // Shadow Keep - Messmer the Impaler
    InitializeEvent(45, 9006084, 22000800, 22000800, 22009800, 72200, 22009801, 22009802, 1099000408, 22009800, 0); // Stone Coffin Fissure - Putrescent Knight
    InitializeEvent(46, 9006084, 25000800, 25000800, 25009800, 0, 0, 0, 1099000408, 62912, 0);                // Finger Ruins of Miyr - Metyr, Mother of Fingers
    InitializeEvent(47, 9006084, 28000800, 28000800, 28009800, 72800, 28009801, 28009802, 1099000408, 28009800, 0); // Midra's Manse - Midra, Lord of Frenzied Flame
    InitializeEvent(48, 9006084, 30000800, 30000800, 30009800, 73000, 30009801, 30009802, 1099000400, 62150, 0); // Tombsward Catacombs - Cemetery Shade
    InitializeEvent(49, 9006084, 30010800, 30010800, 30019800, 73001, 30019801, 30019802, 1099000400, 62151, 0); // Impaler's Catacombs - Frenzied Burial Watchdog
    InitializeEvent(50, 9006084, 30020800, 30020800, 30029800, 73002, 30029801, 30029802, 1099000400, 62103, 0); // Stormfoot Catacombs - Erdtree Burial Watchdog
    InitializeEvent(51, 9006084, 30030800, 30030800, 30039800, 73003, 30039801, 30039802, 1099000401, 62202, 0); // Road's End Catacombs - Spiritcaller Snail
    InitializeEvent(52, 9006084, 30040800, 30040800, 30049800, 73004, 30049801, 30049802, 1099000400, 62105, 0); // Murkwater Catacombs - Grave Warden Duelist
    InitializeEvent(53, 9006084, 30050800, 30050800, 30059800, 73005, 30059801, 30059802, 1099000401, 62201, 0); // Black Knife Catacombs - Cemetery Shade
    InitializeEvent(54, 9006084, 30050850, 30050850, 30059850, 73005, 30059851, 30059852, 1099000401, 62201, 0); // Black Knife Catacombs - Black Knife Assassin
    InitializeEvent(55, 9006084, 30060800, 30060800, 30069800, 73006, 30069801, 30069802, 1099000401, 62203, 0); // Cliffbottom Catacombs - Erdtree Burial Watchdog
    InitializeEvent(56, 9006084, 30070800, 30070800, 30079800, 73007, 30079801, 30079802, 1099000403, 62314, 0); // Wyndham Catacombs - Erdtree Burial Watchdog
    InitializeEvent(57, 9006084, 30080800, 30080800, 30089800, 73008, 30089801, 30089802, 1099000403, 62310, 0); // Sainted Hero's Grave - Ancient Hero of Zamor
    InitializeEvent(58, 9006084, 30090800, 30090800, 30099800, 73009, 30099801, 30099802, 1099000403, 62311, 0); // Gelmir Hero's Grave - Red Wolf of the Champion
    InitializeEvent(59, 9006084, 30100800, 30100800, 30109800, 73010, 30109801, 30109802, 1099000403, 62312, 0); // Auriza's Hero Grave - Crucible Knight Ordovis
    InitializeEvent(60, 9006084, 30110800, 30110800, 30119800, 73011, 30119801, 30119802, 1099000400, 62104, 0); // Deathtouched Catacombs - Black Knife Assassin
    InitializeEvent(61, 9006084, 30120800, 30120800, 30129800, 73012, 30129801, 30129802, 1099000403, 62313, 0); // Unsightly Catacombs - Perfumer Tricia & Misbegotten Warrior
    InitializeEvent(62, 9006084, 30130800, 30130800, 30139800, 73013, 30139801, 30139802, 1099000403, 62315, 0); // Auriza Side Tomb - Grave Warden Duelist
    InitializeEvent(63, 9006084, 30140800, 30140800, 30149800, 73014, 30149801, 30149802, 1099000402, 62410, 0); // Minor Erdtree Catacombs - Erdtree Burial Watchdog (Sword) & Erdtree Burial Watchdog (Scepter)
    InitializeEvent(64, 9006084, 30150800, 30150800, 30159800, 73015, 30159801, 30159802, 1099000402, 62411, 0); // Caelid Catacombs - Cemetery Shade
    InitializeEvent(65, 9006084, 30160800, 30160800, 30169800, 73016, 30169801, 30169802, 1099000402, 62412, 0); // War-Dead Catacombs - Putrid Tree Spirit
    InitializeEvent(66, 9006084, 30170800, 30170800, 30179800, 73017, 30179801, 30179802, 1099000404, 62510, 0); // Giant-Conquering Hero's Grave - Ancient Hero of Zamor
    InitializeEvent(67, 9006084, 30180800, 30180800, 30189800, 73018, 30189801, 30189802, 1099000404, 62511, 0); // Giants' Mountaintops Catacombs - Ulcerated Tree Spirit
    InitializeEvent(68, 9006084, 30190800, 30190800, 30199800, 73019, 30199801, 30199802, 1099000405, 62512, 0); // Consecrated Snowfield Catacombs - Putrid Grave Warden Duelist
    InitializeEvent(69, 9006084, 30200800, 30200800, 30209800, 73020, 30209801, 30209802, 1099000405, 62560, 0); // Hidden Path to the Haligtree - Stray Mimic Tear
    InitializeEvent(70, 9006084, 31000800, 31000800, 31009800, 73100, 31009801, 31009802, 1099000400, 62152, 0); // Murkwater Cave - Patches
    InitializeEvent(71, 9006084, 31010800, 31010800, 31019800, 73101, 31019801, 31019802, 1099000400, 62153, 0); // Earthbore Cave - Chanting Winged Dame
    InitializeEvent(72, 9006084, 31020800, 31020800, 31029800, 73102, 31029801, 31029802, 1099000400, 62106, 0); // Tombsward Cave - Miranda Blossom
    InitializeEvent(73, 9006084, 31040800, 31040800, 31049800, 73104, 31049801, 31049802, 1099000401, 62204, 0); // Stillwater Cave - Cleanrot Knight
    InitializeEvent(74, 9006084, 31050800, 31050800, 31059800, 73105, 31059801, 31059802, 1099000401, 62205, 0); // Lakeside Crystal Cave - Battlemage Duncan
    InitializeEvent(75, 9006084, 31060800, 31060800, 31069800, 73106, 31069801, 31069802, 1099000401, 62206, 0); // Academy Crystal Cave - Crystalian (Staff) & Crystalian (Spear)
    InitializeEvent(76, 9006084, 31070800, 31070800, 31079800, 73107, 31079801, 31079802, 1099000403, 62316, 0); // Seethewater Cave - Kindred of Rot
    InitializeEvent(77, 9006084, 31090800, 31090800, 31099800, 73109, 31099801, 31099802, 1099000403, 62317, 0); // Volcano Cave - Demi-Human Queen Margot
    InitializeEvent(78, 9006084, 31100800, 31100800, 31109800, 73110, 31109801, 31109802, 1099000402, 62413, 0); // Dragonbarrow Cave - Beastman of Farum Azula
    InitializeEvent(79, 9006084, 31110800, 31110800, 31119800, 73111, 31119801, 31119802, 1099000402, 62460, 0); // Sellia Hideaway - Putrid Crystalian (Ringblade) & Putrid Crystalian (Spear) & Putrid Crystalian (Staff)
    InitializeEvent(80, 9006084, 31120800, 31120800, 31129800, 73112, 31129801, 31129802, 1099000405, 62513, 0); // Cave of the Forlorn - Misbegotten Crusader
    InitializeEvent(81, 9006084, 31150800, 31150800, 31159800, 73115, 31159801, 31159802, 1099000400, 62108, 0); // Coastal Cave - Demi-Human Chief & Demi-Human Chief
    InitializeEvent(82, 9006084, 31170800, 31170800, 31179800, 73117, 31179801, 31179802, 1099000400, 62109, 0); // High Road Cave - Guardian Golem
    InitializeEvent(83, 9006084, 31180800, 31180800, 31189800, 73118, 31189801, 31189802, 1099000403, 62318, 0); // Perfumer's Grotto - Miranda the Blighted Bloom & Omenkiller
    InitializeEvent(84, 9006084, 31190800, 31190800, 31199800, 73119, 31199801, 31199802, 1099000403, 62319, 0); // Sage's Cave - Black Knife Assassin
    InitializeEvent(85, 9006084, 31190850, 31190850, 31199850, 73119, 31199851, 31199852, 1099000403, 62319, 0); // Sage's Cave - Necromancer Garris
    InitializeEvent(86, 9006084, 31200800, 31200800, 31209800, 73120, 31209801, 31209802, 1099000402, 62414, 0); // Abandoned Cave - Cleanrot Knight
    InitializeEvent(87, 9006084, 31210800, 31210800, 31219800, 73121, 31219801, 31219802, 1099000402, 62415, 0); // Goal Cave - Frenzied Troll
    InitializeEvent(88, 9006084, 31220800, 31220800, 31229800, 73122, 31229801, 31229802, 1099000404, 62514, 0); // Spiritcallers Cave - Spiritcaller Snail & Godskin Apostle & Godskin Noble
    InitializeEvent(89, 9006084, 32000800, 32000800, 32009800, 73200, 32009801, 32009802, 1099000400, 62154, 0); // Morne Tunnel - Scaly Misbegotten
    InitializeEvent(90, 9006084, 32010800, 32010800, 32019800, 73201, 32019801, 32019802, 1099000400, 62110, 0); // Limgrave Tunnels - Stonedigger Troll
    InitializeEvent(91, 9006084, 32020800, 32020800, 32029800, 73202, 32029801, 32029802, 1099000401, 62207, 0); // Raya Lucaria Crystal Tunnel - Crystalian
    InitializeEvent(92, 9006084, 32040800, 32040800, 32049800, 73204, 32049801, 32049802, 1099000403, 62320, 0); // Old Altus Tunnel - Stonedigger Troll
    InitializeEvent(93, 9006084, 32050800, 32050800, 32059800, 73205, 32059801, 32059802, 1099000403, 62322, 0); // Altus Tunnel - Crystalian (Ringblade) & Crystalian (Spear)
    InitializeEvent(94, 9006084, 32070800, 32070800, 32079800, 73207, 32079801, 32079802, 1099000402, 62416, 0); // Gael Tunnel - Magma Wyrm
    InitializeEvent(95, 9006084, 32080800, 32080800, 32089800, 73208, 32089801, 32089802, 1099000402, 62417, 0); // Sellia Crystal Tunnel - Fallingstar Beast
    InitializeEvent(96, 9006084, 32110800, 32110800, 32119800, 73211, 32119801, 32119802, 1099000405, 62515, 0); // Yelough Anix Tunnel - Astel, Stars of Darkness
    InitializeEvent(97, 9006084, 34110800, 34110800, 34119800, 73422, 34119801, 34119802, 1099000401, 34119800, 0); // Carian Study Hall - Godskin Matriarch
    InitializeEvent(98, 9006084, 34120800, 34120800, 34129800, 73431, 34129801, 34129802, 1099000403, 34129800, 0); // Sealed Tunnel - Onyx Lord
    InitializeEvent(99, 9006084, 34130800, 34130800, 34139800, 73440, 34139801, 34139802, 1099000402, 34139800, 0); // Caelid Divine Tower - Godskin Apostle
    InitializeEvent(100, 9006084, 34140850, 34140850, 34149850, 0, 0, 0, 1099000403, 0, 0);               // Divine Tower of East Altus - Fell Twin & Fell Twin
    InitializeEvent(101, 9006084, 35000800, 35000800, 35009800, 73500, 35009801, 35009802, 1099000403, 35009800, 0); // Subterranean Shunning Grounds - Mohg, the Omen
    InitializeEvent(102, 9006084, 35000850, 35000850, 35009850, 73503, 35009851, 35009852, 1099000403, 35009850, 0); // Leyndell Catacombs - Esgar, Priest of Blood
    InitializeEvent(103, 9006084, 39200800, 39200800, 39209800, 73902, 39209801, 39209802, 1099000401, 39209800, 0); // Ruin Strewn Precipice - Magma Wyrm Makar
    InitializeEvent(104, 9006084, 40000800, 40000800, 40009800, 74000, 40009801, 40009802, 1099000408, 62823, 0); // Fog Rift Catacombs - Death Knight
    InitializeEvent(105, 9006084, 40010800, 40010800, 40019800, 74001, 40019801, 40019802, 1099000408, 62915, 0); // Scorpion River Catacombs - Death Knight
    InitializeEvent(106, 9006084, 41000800, 41000800, 41009800, 74100, 41009801, 41009802, 1099000408, 62800, 0); // Belurat Gaol - Demi-Human Swordmaster Onze
    InitializeEvent(107, 9006084, 41010800, 41010800, 41019800, 74101, 41019801, 41019802, 1099000408, 62916, 0); // Bonny Gaol - Curseblade Labirith
    InitializeEvent(108, 9006084, 41020800, 41020800, 41029800, 74102, 41029801, 41029802, 1099000408, 62850, 0); // Lamenter's Gaol - Lamenter
    InitializeEvent(109, 9006084, 43000800, 43000800, 43009800, 74300, 43009801, 43009802, 1099000408, 62919, 0); // Rivermouth Cave - Chief Bloodfiend
    InitializeEvent(110, 9006084, 43010800, 43010800, 43019800, 74301, 43019801, 43019802, 1099000408, 43019800, 0); // Dragon's Pit - Ancient Dragon-Man
    InitializeEvent(111, 9006084, 1033420800, 1033420800, 1033429800, 0, 0, 0, 1099000401, 62281, 0);                 // Ringleader's Evergaol - Alecto, Black Knife Ringleader
    InitializeEvent(112, 9006084, 1033430800, 1033430800, 1033439800, 76299, 1033439801, 1033439802, 1099000401, 1033439800, 0); // Southwest Minor Erdtree - Carian Golem
    InitializeEvent(113, 9006084, 1033450800, 1033450800, 1033459800, 0, 0, 0, 1099000401, 62238, 0);                 // Cuckoo's Evergaol - Red Wolf of Radagon
    InitializeEvent(114, 9006084, 1034420800, 1034420800, 1034429800, 0, 0, 0, 1099000401, 0, 0);                 // Cathedral of Manus Celes - Glintstone Dragon Adula
    InitializeEvent(115, 9006084, 1034450800, 1034450800, 1034459800, 0, 0, 0, 1099000401, 0, 0);                 // Lake of Liurnia - Glintstone Dragon Smarag
    InitializeEvent(116, 9006084, 1034480800, 1034480800, 1034489800, 0, 0, 0, 1099000401, 62226, 0);                 // Kingsrealm Ruins - Royal Revenant
    InitializeEvent(117, 9006084, 1035420800, 1035420800, 1035429800, 0, 0, 0, 1099000401, 62232, 0);                 // Village of the Albinaurics - Omenkiller
    InitializeEvent(118, 9006084, 1035500800, 1035500800, 1035509800, 76232, 1035509801, 1035509802, 1099000401, 1035509800, 0); // Caria Manor - Rhys, Carian Paragon
    InitializeEvent(119, 9006084, 1035500850, 1035500850, 1035509850, 76261, 1035509851, 1035509852, 1099000401, 1035509850, 0); // Caria Manor - Einar, Ice Guardian
    InitializeEvent(120, 9006084, 1035530800, 1035530800, 1035539800, 0, 0, 0, 1099000403, 0, 0);                 // Mt. Gelmir Lava Pool - Magma Wyrm
    InitializeEvent(121, 9006084, 1036450800, 1036450340, 1036459800, 0, 0, 0, 1099000401, 0, 0);                 // Central Liurnia - Death Rite Bird
    InitializeEvent(122, 9006084, 1036480800, 1036480340, 1036489800, 0, 0, 0, 1099000401, 0, 0);                 // Gate Town Bridge - Night's Cavalry
    InitializeEvent(123, 9006084, 1036500800, 1036500800, 1036509800, 0, 0, 0, 1099000401, 62239, 0);                 // Royal Grave Evergaol - Onyx Lord
    InitializeEvent(124, 9006084, 1036520800, 1036520800, 1036529800, 76399, 1036529801, 1036529802, 1099000403, 1036529800, 0); // Minor Erdtree - Demi-Human Chief
    InitializeEvent(125, 9006084, 1036540800, 1036540800, 1036549800, 0, 0, 0, 1099000403, 0, 0);                 // Mt. Gelmir - Full-Grown Fallingstar Beast
    InitializeEvent(126, 9006084, 1037420800, 1037420340, 1037429800, 0, 0, 0, 1099000401, 0, 0);                 // Liurnia South - Deathbird
    InitializeEvent(127, 9006084, 1037460800, 1037460800, 1037469800, 0, 0, 0, 1099000401, 62221, 0);                 // Church of Vows - Bell Bearing Hunter
    InitializeEvent(128, 9006084, 1037530800, 1037530800, 1037539800, 0, 0, 0, 1099000403, 62382, 0);                 // Hermit Village - Demi-Human Queen Maggie
    InitializeEvent(129, 9006084, 1037540810, 1037540810, 1037549810, 76398, 1037549811, 1037549812, 1099000403, 1037549810, 0); // Minor Erdtree - Charred Banished Knight
    InitializeEvent(130, 9006084, 1038410800, 1038410800, 1038419800, 0, 0, 0, 1099000401, 62237, 0);                 // Malefactor's Evergaol - Adan, Thief of Fire
    InitializeEvent(131, 9006084, 1038480800, 1038480800, 1038489800, 76298, 1038489801, 1038489802, 1099000401, 1038489800, 0); // Northeast Minor Erdtree - Ancestral Shaman
    InitializeEvent(132, 9006084, 1038510800, 1038510800, 1038519800, 0, 0, 0, 1099000403, 62335, 0);                 // Lux Ruins - Demi-Human Queen Gilika
    InitializeEvent(133, 9006084, 1038520800, 1038520800, 1038529800, 0, 0, 0, 1099000403, 62385, 0);                 // Wyndham Ruins - Tibia Mariner
    InitializeEvent(134, 9006084, 1039420800, 1039420800, 1039429800, 76221, 1039429801, 1039429802, 1099000401, 1039429800, 0); // Southeast Minor Erdtree - Giant Crystal Crab
    InitializeEvent(135, 9006084, 1039430800, 1039430340, 1039439800, 0, 0, 0, 1099000401, 0, 0);                 // Bellum Highway - Night's Cavalry
    InitializeEvent(136, 9006084, 1039440800, 1039440800, 1039449800, 0, 0, 0, 1099000401, 0, 0);                 // Liurnia - Tibia Mariner
    InitializeEvent(137, 9006084, 1039500800, 1039500800, 1039509800, 0, 0, 0, 1099000403, 62344, 0);                 // Golden Lineage Evergaol - Banished Knight Oleg
    InitializeEvent(138, 9006084, 1039510800, 1039510800, 1039519800, 0, 0, 0, 1099000403, 0, 0);                 // Altus Plateau - Night's Cavalry
    InitializeEvent(139, 9006084, 1039540800, 1039540800, 1039549800, 76322, 1039549801, 1039549802, 1099000403, 1039549800, 0); // Shaded Castle - Elemer of the Briar
    InitializeEvent(140, 9006084, 1040520800, 1040520800, 1040529800, 0, 0, 0, 1099000403, 0, 0);                 // Sainted Hero's Grave - Black Knife Assassin
    InitializeEvent(141, 9006084, 1040530800, 1040530800, 1040539800, 0, 0, 0, 1099000403, 62380, 0);                 // Writheblood Ruins - Sanguine Noble
    InitializeEvent(142, 9006084, 1041370800, 1041370800, 1041379800, 76199, 1041379801, 1041379802, 1099000400, 1041379800, 0); // Stormhill - Grafted Scion
    InitializeEvent(143, 9006084, 1041500800, 1041500800, 1041509800, 0, 0, 0, 1099000403, 0, 0);                 // Leyndell Western Gate - Fallingstar Beast
    InitializeEvent(144, 9006084, 1041510800, 1041510800, 1041519800, 0, 0, 0, 1099000403, 0, 0);                 // Leyndell Western Gate - Tree Sentinel & Tree Sentinel
    InitializeEvent(145, 9006084, 1041530800, 1041530800, 1041539800, 76397, 1041539801, 1041539802, 1099000403, 1041539800, 0); // Central Minor Erdtree - Wormface
    InitializeEvent(146, 9006084, 1042330800, 1042330800, 1042339800, 0, 0, 0, 1099000400, 62178, 0);                 // Weeping Evergaol - Ancient Hero of Zamor
    InitializeEvent(147, 9006084, 1042360800, 1042360800, 1042369800, 0, 0, 0, 1099000400, 0, 0);                 // First Step - Tree Sentinel
    InitializeEvent(148, 9006084, 1042370800, 1042370800, 1042379800, 0, 0, 0, 1099000400, 62132, 0);                 // Stormhil Evergaol - Crucible Knight
    InitializeEvent(149, 9006084, 1042380800, 1042380800, 1042389800, 0, 0, 0, 1099000400, 0, 0);                 // North Limgrave - Deathbird
    InitializeEvent(150, 9006084, 1042380850, 1042380850, 1042389850, 76118, 1042389851, 1042389852, 1099000400, 62129, 0); // Warmaster Shack - Bell Bearing Hunter
    InitializeEvent(151, 9006084, 1042550800, 1042550800, 1042559800, 76313, 1042559801, 1042559802, 1099000403, 1042559800, 0); // Windmill Heights - Godskin Apostle
    InitializeEvent(152, 9006084, 1043300800, 1043300800, 1043309800, 0, 0, 0, 1099000400, 0, 0);                 // Castle Morne - Dyru, Scavenger King
    InitializeEvent(153, 9006084, 1043300820, 1043300820, 1043309820, 76159, 1043309821, 1043309822, 1099000400, 1043309820, 0); // Castle Morne - Leonine Misbegotten
    InitializeEvent(154, 9006084, 1043310920, 1043310920, 1043319920, 0, 0, 0, 1099000400, 0, 0);                 // Castle Morne Town - Shabriri's Chosen
    InitializeEvent(155, 9006084, 1043330800, 1043330800, 1043339800, 76198, 1043339801, 1043339802, 1099000400, 1043339800, 0); // Weeping Erdtree - Erdtree Avatar
    InitializeEvent(156, 9006084, 1043360800, 1043360800, 1043369800, 0, 0, 0, 1099000400, 0, 0);                 // Agheel Lake - Flying Dragon Agheel
    InitializeEvent(157, 9006084, 1043370800, 1043370340, 1043379800, 0, 0, 0, 1099000400, 0, 0);                 // Agheel Lake North - Night's Cavalry
    InitializeEvent(158, 9006084, 1043500800, 1043500800, 1043509800, 76310, 1043509801, 1043509802, 1099000403, 1043509800, 0); // Minor Erdtree Church - Erdtree Sentry
    InitializeEvent(159, 9006084, 1043530800, 1043530800, 1043539800, 76311, 1043539801, 1043539802, 1099000403, 62337, 0); // Hermit Merchant's Shack - Bell Bearing Hunter
    InitializeEvent(160, 9006084, 1044320800, 1044320340, 1044329800, 0, 0, 0, 1099000400, 0, 0);                 // Weeping Peninsula - Deathbird
    InitializeEvent(161, 9006084, 1044320850, 1044320342, 1044329850, 0, 0, 0, 1099000400, 0, 0);                 // Weeping Peninsula - Night's Cavalry
    InitializeEvent(162, 9006084, 1044350800, 1044350800, 1044359800, 0, 0, 0, 1099000400, 62131, 0);                 // Forlorn Hound Evergoal - Bloodhound Knight Darriwil
    InitializeEvent(163, 9006084, 1044360800, 1044360800, 1044369800, 76120, 1044369801, 1044369802, 1099000400, 1044369800, 0); // Waypoint Ruins - Mad Pumpkin Head
    InitializeEvent(164, 9006084, 1044530800, 1044530800, 1044539800, 0, 0, 0, 1099000403, 0, 0);                 // Hermit Merchant's Shack - Deathbird
    InitializeEvent(165, 9006084, 1044530810, 1044530810, 1044539810, 76396, 1044539811, 1044539812, 1099000403, 1044539810, 1); // Northeast Minor Erdtree - Blighted Omen
    InitializeEvent(166, 9006084, 1045370800, 1045370800, 1045379800, 76197, 1045379801, 1045379802, 1099000400, 1045379800, 0); // Mistwood Erdtree - Erdtree Guardian
    InitializeEvent(167, 9006084, 1045390800, 1045390800, 1045399800, 0, 0, 0, 1099000400, 62127, 0);                 // Summonwater Village - Tibia Mariner
    InitializeEvent(168, 9006084, 1045520800, 1045520800, 1045529800, 0, 0, 0, 1099000403, 0, 0);                 // Capital Entrance - Draconic Tree Sentinel
    InitializeEvent(169, 9006084, 1047400800, 1047400800, 1047409800, 76499, 1047409801, 1047409802, 1099000402, 1047409800, 0); // West Caelid Minor Erdtree - Jar Warrior Champion
    InitializeEvent(170, 9006084, 1048370800, 1048370800, 1048379800, 0, 0, 0, 1099000402, 0, 0);                 // Caelid Highway South - Decaying Ekzykes
    InitializeEvent(171, 9006084, 1048370810, 1048370810, 1048379810, 76405, 1048379811, 1048379812, 1099000402, 1048379810, 0); // South Caelid Minor Erdtree - Rotten Monk
    InitializeEvent(172, 9006084, 1048400800, 1048400800, 1048409800, 0, 0, 0, 1099000402, 62426, 0);                 // Caelem Ruins - Mad Pumpkin Head
    InitializeEvent(173, 9006084, 1048410800, 1048410800, 1048419800, 76451, 1048419801, 1048419802, 1099000402, 62470, 0); // Isolated Merchant Shack (Dragonbarrow) - Bell Bearing Hunter
    InitializeEvent(174, 9006084, 1048510800, 1048510800, 1048519800, 0, 0, 0, 1099000404, 0, 0);                 // Forbidden Lands - Night's Cavalry
    InitializeEvent(175, 9006084, 1048570800, 1048570800, 1048579800, 0, 0, 0, 1099000405, 0, 0);                 // West Mountaintops - Death Rite Bird
    InitializeEvent(176, 9006084, 1049370800, 1049370800, 1049379800, 0, 0, 0, 1099000402, 0, 0);                 // Caelid Highway South - Night's Cavalry
    InitializeEvent(177, 9006084, 1049370850, 1049370850, 1049379850, 0, 0, 0, 1099000402, 0, 0);                 // Caelid Highway East - Death Rite Bird
    InitializeEvent(178, 9006084, 1049380800, 1049380800, 1049389800, 76412, 1049389801, 1049389802, 1099000402, 1049389800, 0); // Aeonia Swamp - Commander O'Neil
    InitializeEvent(179, 9006084, 1049390800, 1049390800, 1049399800, 76415, 1049399801, 1049399802, 1099000402, 1049399800, 0); // Sellia Town of Sorcery - Nox Swordstress & Nox Monk
    InitializeEvent(180, 9006084, 1049390850, 1049390850, 1049399850, 0, 0, 0, 1099000402, 62471, 0);                 // Sellia Evergaol - Battlemage Hugues
    InitializeEvent(181, 9006084, 1049520800, 1049520800, 1049529800, 0, 0, 0, 1099000404, 0, 0);                 // Forbidden Lands - Black Blade Kindred
    InitializeEvent(182, 9006084, 1049520850, 1049520850, 1049529850, 76590, 1049529851, 1049529852, 1099000404, 1049529850, 0); // Forbidden Lands - Death Rite Bird
    InitializeEvent(183, 9006084, 1049570800, 1049570800, 1049579800, 76599, 1049579801, 1049579802, 1099000405, 1049579800, 0); // Minor Erdtree - Albinauric Wolf Rider
    InitializeEvent(184, 9006084, 1050400800, 1050400800, 1050409800, 0, 0, 0, 1099000402, 0, 0);                 // Dragonbarrow - Elder Dragon Greyoll
    InitializeEvent(185, 9006084, 1050560800, 1050560800, 1050569800, 0, 0, 0, 1099000405, 0, 0);                 // Outside Cave of the Forlorn - Great Wyrm Theodorix
    InitializeEvent(186, 9006084, 1050570800, 1050570800, 1050579800, 0, 0, 0, 1099000404, 0, 0);                 // Snow Valley - Death Rite Bird
    InitializeEvent(187, 9006084, 1051360800, 1051360800, 1051369800, 76419, 1051369801, 1051369802, 1099000402, 1051369800, 0); // Redmane Castle - Dakk, Starcaller Lord
    InitializeEvent(188, 9006084, 1051400800, 1051400800, 1051409800, 76497, 1051409801, 1051409802, 1099000402, 1051409800, 0); // East Caelid Minor Erdtree - Putrid Avatar
    InitializeEvent(189, 9006084, 1051430800, 1051430800, 1051439800, 0, 0, 0, 1099000402, 0, 0);                 // Bestial Undercroft - Black Blade Kindred
    InitializeEvent(190, 9006084, 1051530800, 1051530800, 1051539800, 76598, 1051539801, 1051539802, 1099000404, 1051539800, 0); // Minor Erdtree - Mountain Troll
    InitializeEvent(191, 9006084, 1051570800, 1051570800, 1051579800, 76524, 1051579801, 1051579802, 1099000404, 1051579800, 0); // Castle Sol - Commander Niall
    InitializeEvent(192, 9006084, 1052410800, 1052410800, 1052419800, 0, 0, 0, 1099000402, 0, 0);                 // North Dragonbarrow - Flying Dragon Greyll
    InitializeEvent(193, 9006084, 1052410850, 1052410850, 1052419850, 0, 0, 0, 1099000402, 0, 0);                 // North Dragonbarrow - Night's Cavalry
    InitializeEvent(194, 9006084, 1052520800, 1052520800, 1052529800, 76509, 1052529801, 1052529802, 1099000404, 1052529800, 0); // Flame Peak - Fire Giant
    InitializeEvent(195, 9006084, 1052560800, 1052560800, 1052569800, 76597, 1052569801, 1052569802, 1099000404, 1052569800, 0); // Minor Erdtree - Grand Flame Prelate
    InitializeEvent(196, 9006084, 1053560800, 1053560800, 1053569800, 0, 0, 0, 1099000404, 62525, 0);                 // Lord Contender's Evergaol - Roundtable Knight Vyke
    InitializeEvent(197, 9006084, 1248550800, 1248550800, 1248559800, 0, 0, 0, 1099000405, 0, 0);                 // Inner Consecrated Snowfields - Night's Cavalry (Glaive) & Night's Cavalry (Flail)
    InitializeEvent(198, 9006084, 1252380800, 1252380800, 1252389800, 76422, 1252389801, 1252389802, 1099000402, 1252389800, 0); // Redmane Castle - Starscourge Radahn
    InitializeEvent(199, 9006084, 1254560800, 1254560800, 1254569800, 0, 0, 0, 1099000404, 0, 0);                 // Freezing Lake - Borealis the Freezing Fog
    InitializeEvent(200, 9006084, 2044450800, 2044450800, 2044459800, 76945, 2044459801, 2044459802, 1099000408, 2044459800, 0); // Church of the Bud - Romina, Saint of the Bud
    InitializeEvent(201, 9006084, 2044470800, 2044470800, 2044479800, 0, 0, 0, 1099000408, 0, 0);                 // Red Bear Ravine North - Rugalea the Great Red Bear
    InitializeEvent(202, 9006084, 2045440800, 2045440800, 2045449800, 0, 0, 0, 1099000408, 0, 0);                 // Abandoned Ailing Village - Ghostflame Dragon
    InitializeEvent(203, 9006084, 2046380800, 2046380800, 2046389800, 0, 0, 0, 1099000408, 62843, 0);                 // Southern Nameless Mausoleum - Dancer of Ranah
    InitializeEvent(204, 9006084, 2046400800, 2046400800, 2046409800, 0, 0, 0, 1099000408, 0, 0);                 // Cerulean Coast West - Demi-Human Queen Marigga
    InitializeEvent(205, 9006084, 2046410800, 2046410800, 2046419800, 0, 0, 0, 1099000408, 62812, 0);                 // Western Nameless Mausoleum - Knight of the Solitary Gaol
    InitializeEvent(206, 9006084, 2046450800, 2046450800, 2046459800, 0, 0, 0, 1099000408, 62921, 0);                 // Northern Nameless Mausoleum - Red Bear
    InitializeEvent(207, 9006084, 2046460800, 2046460800, 2046469800, 0, 0, 0, 1099000408, 0, 0);                 // Ancient Ruins, Grand Stairway - Divine Beast Dancing Lion
    InitializeEvent(208, 9006084, 2047390800, 2047390800, 2047399800, 0, 0, 0, 1099000408, 0, 0);                 // Charo's Hidden Grave - Death Rite Bird
    InitializeEvent(209, 9006084, 2047400800, 2047400800, 2047409800, 76961, 2047409801, 2047409802, 1099000408, 2047409800, 0); // Gravesite Woodland - Monstrous Spider Scorpion
    InitializeEvent(210, 9006084, 2047450800, 2047450800, 2047459800, 0, 0, 0, 1099000408, 62904, 0);                 // Fog Rift Fort - Black Knight Garrew
    InitializeEvent(211, 9006084, 2047470800, 2047470800, 2047479800, 76965, 2047479801, 2047479802, 1099000408, 2047479800, 0); // Rauh Steppe - Divine Bird Warrior
    InitializeEvent(212, 9006084, 2048380800, 2048380800, 2048389800, 0, 0, 0, 1099000408, 0, 0);                 // Charo's Hidden Grave - Tibia Mariner
    InitializeEvent(213, 9006084, 2048380850, 2048380850, 2048389850, 0, 0, 0, 1099000408, 0, 0);                 // Cerulean Coast - Ghostflame Dragon
    InitializeEvent(214, 9006084, 2048380860, 2048380860, 2048389860, 76962, 2048389861, 2048389862, 1099000408, 2048389860, 0); // Cerulean Bluffs - Bloodfiend Mystic
    InitializeEvent(215, 9006084, 2048440800, 2048440800, 2048449800, 76823, 2048449801, 2048449802, 1099000408, 2048449800, 0); // Castle Ensis - Rellana, Twin Moon Knight
    InitializeEvent(216, 9006084, 2049410850, 2049410850, 2049419850, 76966, 2049419851, 2049419852, 1099000408, 2049419850, 0); // Dragon Resting Grounds - Grave Bird Raptor
    InitializeEvent(217, 9006084, 2049430800, 2049430800, 2049439800, 0, 0, 0, 1099000408, 0, 0);                 // Moorth Highway - Ghostflame Dragon
    InitializeEvent(218, 9006084, 2049430850, 2049430850, 2049439850, 0, 0, 0, 1099000408, 62902, 0);                 // Fort of Reprimand - Black Knight Edredd
    InitializeEvent(219, 9006084, 2049440800, 2049440800, 2049449800, 76902, 2049449801, 2049449802, 1099000408, 2049449800, 0); // Moorth Ruins - Dryleaf Dane
    InitializeEvent(220, 9006084, 2049450800, 2049450800, 2049459800, 0, 0, 0, 1099000408, 0, 0);                 // Scadu Altus Red Bear Pond - Ralva the Great Red Bear
    InitializeEvent(221, 9006084, 2049450850, 2049450850, 2049459850, 76964, 2049459851, 2049459852, 1099000408, 2049459850, 0); // Minor Erdtree Cave - Fire Knight Crusader
    InitializeEvent(222, 9006084, 2049480800, 2049480800, 2049489800, 76930, 2049489801, 2049489802, 1099000408, 2049489800, 0); // Scaduview - Commander Gaius
    InitializeEvent(223, 9006084, 2050470800, 2050470800, 2050479800, 0, 0, 0, 1099000408, 0, 0);                 // Scaduview - Tree Sentinel
    InitializeEvent(224, 9006084, 2050480800, 2050480800, 2050489800, 76960, 2050489801, 2050489802, 1099000408, 2050489800, 0); // Scadutree Base - Scadutree Avatar
    InitializeEvent(225, 9006084, 2050480860, 2050480860, 2050489860, 0, 0, 0, 1099000408, 0, 0);                 // Scaduview - Tree Sentinel
    InitializeEvent(226, 9006084, 2051440800, 2051440800, 2051449800, 0, 0, 0, 1099000408, 62961, 0);                 // Eastern Nameless Mausoleum - Rakshasa
    InitializeEvent(227, 9006084, 2051440850, 2051440850, 2051449850, 76967, 2051449851, 2051449852, 1099000408, 2051449850, 0); // Abyssal Overlook - Maddened Hippopotamus
    InitializeEvent(228, 9006084, 2051450800, 2051450720, 2051459800, 0, 0, 0, 1099000408, 62906, 0);                 // Cathedral of Manus Metyr - Count Ymir, Mother of Fingers
    InitializeEvent(229, 9006084, 2051470800, 2051470800, 2051479800, 76963, 2051479801, 2051479802, 1099000408, 2051479800, 0); // Shaman Village - Black Knight Captain
    InitializeEvent(230, 9006084, 2052400800, 2052400800, 2052409800, 0, 0, 0, 1099000408, 0, 0);                 // Jagged Peak - Jagged Peak Drake
    InitializeEvent(231, 9006084, 2052430800, 2052430800, 2052439800, 76862, 2052439801, 2052439802, 1099000408, 2052439800, 0); // Forsaken Graveyard - Jori, Elder Inquisitor
    InitializeEvent(232, 9006084, 2052480800, 2052480800, 2052489800, 0, 0, 0, 1099000408, 0, 0);                 // Scaduview - Fallingstar Beast
    InitializeEvent(233, 9006084, 2054390800, 2054390800, 2054399800, 76853, 2054399801, 2054399802, 1099000408, 2054399800, 0); // Jagged Peak - Bayle the Dread
    InitializeEvent(234, 9006084, 2054390850, 2054390850, 2054399850, 0, 0, 0, 1099000408, 0, 0);                 // Jagged Peak - Ancient Dragon Senessax
});

// Save Fixer X.X.X -> X.X.X
$Event(9008010, Default, function() {
    EndEvent();
    EndIf(EventFlag(0));
    
    SetEventFlagID(0, ON);
});
    
$Event(700, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    SetEventFlagID(62000, ON);
    SetEventFlagID(710580, ON);
    SetEventFlagID(720000, ON);
    SetEventFlagID(720010, ON);
    SetEventFlagID(720020, ON);
    SetEventFlagID(720030, ON);
    SetEventFlagID(720040, ON);
    SetEventFlagID(720050, ON);
    SetEventFlagID(720060, ON);
    SetEventFlagID(720090, ON);
    SetEventFlagID(720100, ON);
    SetEventFlagID(720110, ON);
    SetEventFlagID(720120, ON);
    SetEventFlagID(720130, ON);
    SetEventFlagID(720140, ON);
    SetEventFlagID(720150, ON);
    SetEventFlagID(720160, ON);
    SetEventFlagID(720170, ON);
    SetEventFlagID(720180, ON);
    SetEventFlagID(720190, ON);
    SetEventFlagID(720200, ON);
    SetEventFlagID(720210, ON);
    SetEventFlagID(720220, ON);
    SetEventFlagID(720230, ON);
    GotoIf(L1, EventFlag(2001));
    GotoIf(L0, EventFlag(2000));
    SetEventFlagID(60200, ON);
    SetEventFlagID(60210, ON);
    SetEventFlagID(60220, ON);
    SetEventFlagID(60230, ON);
    SetEventFlagID(60240, ON);
    SetEventFlagID(60250, ON);
    SetEventFlagID(60260, ON);
    SetEventFlagID(60270, ON);
    SetEventFlagID(60280, ON);
    SetEventFlagID(60290, ON);
    SetEventFlagID(60300, ON);
    SetEventFlagID(60310, ON);
    SetEventFlagID(1650, OFF);
    SetEventFlagID(1651, ON);
    SetEventFlagID(1652, OFF);
    SetEventFlagID(1653, ON);
    SetEventFlagID(1650, ON);
    SetEventFlagID(1651, ON);
    SetEventFlagID(1652, OFF);
    SetEventFlagID(1653, OFF);
    SetEventFlagID(1654, OFF);
    SetEventFlagID(1655, ON);
    SetEventFlagID(1656, ON);
    SetEventFlagID(65600, ON);
    SetEventFlagID(65610, ON);
    SetEventFlagID(65620, ON);
    SetEventFlagID(65630, ON);
    SetEventFlagID(65640, ON);
    SetEventFlagID(65650, ON);
    SetEventFlagID(65660, ON);
    SetEventFlagID(65670, ON);
    SetEventFlagID(65680, ON);
    SetEventFlagID(65690, ON);
    SetEventFlagID(65700, ON);
    SetEventFlagID(65710, ON);
    SetEventFlagID(65720, ON);
    SetEventFlagID(65730, ON);
    SetEventFlagID(65740, ON);
    SetEventFlagID(65750, ON);
    SetEventFlagID(65760, ON);
    SetEventFlagID(65770, ON);
    SetEventFlagID(65780, ON);
    SetEventFlagID(65790, ON);
    SetEventFlagID(6500, ON);
    SetEventFlagID(60120, ON);
    Goto(L9);
L1:
    SetEventFlagID(60200, ON);
    SetEventFlagID(60210, ON);
    SetEventFlagID(60220, ON);
    SetEventFlagID(60240, ON);
    SetEventFlagID(60260, ON);
    SetEventFlagID(60270, ON);
    SetEventFlagID(60280, ON);
    SetEventFlagID(60290, ON);
    SetEventFlagID(60300, ON);
    SetEventFlagID(60310, ON);
    SetEventFlagID(1650, ON);
    SetEventFlagID(1651, ON);
    SetEventFlagID(1652, OFF);
    SetEventFlagID(1653, OFF);
    SetEventFlagID(1654, OFF);
    SetEventFlagID(1655, ON);
    SetEventFlagID(1656, ON);
    SetEventFlagID(82102, ON);
    SetEventFlagID(65600, ON);
    Goto(L9);
L0:
    SetEventFlagID(65600, ON);
    SetEventFlagID(60800, ON);
    SetEventFlagID(60807, ON);
    SetEventFlagID(60811, ON);
    SetEventFlagID(60820, ON);
    SetEventFlagID(60827, ON);
    SetEventFlagID(60834, ON);
    SetEventFlagID(60806, ON);
    SetEventFlagID(60812, ON);
    SetEventFlagID(60813, ON);
    SetEventFlagID(60814, ON);
    SetEventFlagID(60815, ON);
    SetEventFlagID(60831, ON);
L9:
    if (GameCycle() >= 7) {
        SetEventFlagID(57, ON);
        EndEvent();
    }
    if (GameCycle() == 6) {
        SetEventFlagID(56, ON);
        EndEvent();
    }
    if (GameCycle() == 5) {
        SetEventFlagID(55, ON);
        EndEvent();
    }
    if (GameCycle() == 4) {
        SetEventFlagID(54, ON);
        EndEvent();
    }
    if (GameCycle() == 3) {
        SetEventFlagID(53, ON);
        EndEvent();
    }
    if (GameCycle() == 2) {
        SetEventFlagID(52, ON);
        EndEvent();
    }
    if (GameCycle() == 1) {
        SetEventFlagID(51, ON);
        EndEvent();
    }
    SetEventFlagID(50, ON);
    EndEvent();
});

$Event(701, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    GotoIf(L1, EventFlag(2001));
    GotoIf(L0, EventFlag(2000));
    EndIf(!EventFlag(50));
    DirectlyGivePlayerItem(ItemType.Goods, 106, 60210, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 100, 60220, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 109, 60230, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 101, 60240, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 110, 60250, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 112, 60260, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 102, 60270, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 104, 60280, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 105, 60290, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 108, 60300, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 103, 60310, 1);
    if (!PlayerHasItem(ItemType.Goods, 150)) {
        DirectlyGivePlayerItem(ItemType.Goods, 150, 1650, 4);
    }
    if (!PlayerHasItem(ItemType.Goods, 111)) {
        DirectlyGivePlayerItem(ItemType.Goods, 111, 1660, 8);
    }
    EndEvent();
L1:
    EndIf(!EventFlag(50));
    DirectlyGivePlayerItem(ItemType.Goods, 106, 60210, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 100, 60220, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 109, 60230, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 101, 60240, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 110, 60250, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 112, 60260, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 102, 60270, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 104, 60280, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 105, 60290, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 108, 60300, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 103, 60310, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 150, 1650, 8);
    DirectlyGivePlayerItem(ItemType.Goods, 8500, 60120, 1);
    SetPlayerRespawnPoint(18002020);
    SaveRequest();
    SetEventFlagID(100, ON);
    EndEvent();
L0:
    EndIf(!EventFlag(50));
    DirectlyGivePlayerItem(ItemType.Goods, 106, 60210, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 100, 60220, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 109, 60230, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 101, 60240, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 110, 60250, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 112, 60260, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 102, 60270, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 104, 60280, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 105, 60290, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 108, 60300, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 103, 60310, 1);
    AwardGesture(6);
    AwardGesture(21);
    AwardGesture(22);
    AwardGesture(23);
    AwardGesture(24);
    AwardGesture(80);
    SetEventFlagID(100, ON);
    WaitFixedTimeSeconds(3);
});

$Event(702, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    if (!EventFlag(2000)) {
        EndEvent();
    }
L0:
    ChangeWeather(Weather.PuffyClouds, -1, true);
    WaitFor(EventFlag(1042368540));
    ChangeWeather(Weather.Default, 3600, true);
    FreezeTime(false);
    SetEventFlagID(101, ON);
});

$Event(703, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    if (!EventFlag(2000)) {
        EndEvent();
    }
L0:
    EndIf(EventFlag(101));
    WaitFor(EventFlag(100));
    SetEventFlagID(101, ON);
    if (EventFlag(9990)) {
        ChangeWeather(Weather.Default, 6000, false);
    }
    SetCurrentTime(23, 45, 0, false, false, false, 0, 0, 0);
});

$Event(705, Restart, function() {
    SetEventFlagID(9290, OFF);
    SetEventFlagID(9291, OFF);
    EndIf(!PlayerIsInOwnWorld());
});

// ? (DLC)
$Event(707, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    if (EventFlag(61143)) {
        SetEventFlagID(70, ON);
    }
    EndEvent();
});

$Event(710, Restart, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(200, ON);
        SetEventFlagID(201, OFF);
        EndEvent();
    }
L0:
    SetEventFlagID(200, OFF);
    SetEventFlagID(201, ON);
    EndEvent();
});

$Event(711, Restart, function() {
    DisableNetworkSync();
    SetEventFlagID(202, OFF);
    WaitFor(
        HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(202, ON);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    SetEventFlagID(202, OFF);
    RestartEvent();
});

$Event(715, Default, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(210, OFF);
    }
    SetEventFlagID(211, OFF);
    WaitFor(
        PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(210, ON);
    }
    SetEventFlagID(211, ON);
    WaitFor(
        !(PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0)));
    RestartEvent();
});

$Event(716, Default, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(220, OFF);
    }
    SetEventFlagID(221, OFF);
    WaitFor(
        PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(220, ON);
    }
    SetEventFlagID(221, ON);
    WaitFor(
        !(PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0)));
    RestartEvent();
});

// Flag Handler - Are you in the DLC world (DLC)
$Event(717, Default, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(230, OFF);
    }
    SetEventFlagID(231, OFF);
    WaitFor(
        PlayerInMap(20, -1, -1, -1)
            || PlayerInMap(21, -1, -1, -1)
            || PlayerInMap(22, -1, -1, -1)
            || PlayerInMap(25, -1, -1, -1)
            || PlayerInMap(28, -1, -1, -1)
            || PlayerInMap(40, -1, -1, -1)
            || PlayerInMap(41, -1, -1, -1)
            || PlayerInMap(42, -1, -1, -1)
            || PlayerInMap(43, -1, -1, -1)
            || PlayerInMap(61, -1, -1, -1));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(230, ON);
    }
    SetEventFlagID(231, ON);
    WaitFor(
        !(PlayerInMap(20, -1, -1, -1)
            || PlayerInMap(21, -1, -1, -1)
            || PlayerInMap(22, -1, -1, -1)
            || PlayerInMap(25, -1, -1, -1)
            || PlayerInMap(28, -1, -1, -1)
            || PlayerInMap(40, -1, -1, -1)
            || PlayerInMap(41, -1, -1, -1)
            || PlayerInMap(42, -1, -1, -1)
            || PlayerInMap(43, -1, -1, -1)
            || PlayerInMap(61, -1, -1, -1)));
    RestartEvent();
});

$Event(720, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld() && CountEventFlags(TargetEventFlagType.EventFlag, 190, 199) >= X4_4);
    SetEventFlagID(X0_4, ON);
});

$Event(730, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld() && CountEventFlags(TargetEventFlagType.EventFlag, 170, 179) >= X4_4);
    SetEventFlagID(X0_4, ON);
});

$Event(740, Default, function() {
    DisableNetworkSync();
    ChangeCamera(-1, -1);
});

$Event(750, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(9295));
    SetEventFlagID(9295, OFF);
    ForceAnimationPlayback(10000, 60456, false, false, false);
    WaitFor(WeatherLotActive(-1));
});

// Keystones Found Counter
$Event(760, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld() && CountEventFlags(TargetEventFlagType.EventFlag, 510011, 510015) >= X4_4);
    SetEventFlagID(X0_4, ON);
});

$Event(810, Restart, function() {
    GotoIf(L1, TimeOfDayInRange(5, 30, 0, 11, 59, 59));
    GotoIf(L2, TimeOfDayInRange(12, 0, 0, 19, 59, 59));
    GotoIf(L3, TimeOfDayInRange(20, 0, 0, 5, 29, 59));
L1:
    SetEventFlagID(530, ON);
    SetEventFlagID(531, OFF);
    SetEventFlagID(532, OFF);
    WaitFor(!TimeOfDayInRange(6, 0, 0, 11, 59, 59));
    RestartEvent();
L2:
    SetEventFlagID(530, OFF);
    SetEventFlagID(531, ON);
    SetEventFlagID(532, OFF);
    WaitFor(!TimeOfDayInRange(12, 0, 0, 19, 59, 59));
    RestartEvent();
L3:
    SetEventFlagID(530, OFF);
    SetEventFlagID(531, OFF);
    SetEventFlagID(532, ON);
    WaitFor(!TimeOfDayInRange(20, 0, 0, 5, 59, 59));
    RestartEvent();
});

$Event(820, Default, function(X0_4, X4_1) {
    DisableNetworkSync();
    SetEventFlagID(X0_4, OFF);
    WaitFor(WeatherActive(X4_1, 0, 0));
    WaitFixedTimeFrames(1);
    SetEventFlagID(X0_4, ON);
    WaitFor(!WeatherActive(X4_1, 0, 0));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(839, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, WeatherActive(Weather.Cloudless, 0, 0));
    GotoIf(L1, 
        WeatherActive(Weather.Default, 0, 0)
            || WeatherActive(Weather.FlatClouds, 0, 0)
            || WeatherActive(Weather.PuffyClouds, 0, 0));
    GotoIf(L2, 
        WeatherActive(Weather.Rain, 0, 0)
            || WeatherActive(Weather.RainyClouds, 0, 0)
            || WeatherActive(Weather.WindyRain, 0, 0)
            || WeatherActive(Weather.RainyHeavyFog, 0, 0));
    GotoIf(L3, WeatherActive(Weather.Snow, 0, 0) || WeatherActive(Weather.HeavySnow, 0, 0));
    GotoIf(L4, WeatherActive(Weather.Fog, 0, 0) || WeatherActive(Weather.HeavyFog, 0, 0));
    GotoIf(L5, 
        WeatherActive(Weather.WindyFog, 0, 0) || WeatherActive(Weather.WindyPuffyClouds, 0, 0));
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFixedTimeSeconds(3);
    RestartEvent();
L0:
    SetEventFlagID(570, ON);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(!WeatherActive(Weather.Cloudless, 0, 0));
    RestartEvent();
L1:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, ON);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(
        !(WeatherActive(Weather.Default, 0, 0)
            || WeatherActive(Weather.FlatClouds, 0, 0)
            || WeatherActive(Weather.PuffyClouds, 0, 0)));
    RestartEvent();
L2:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, ON);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(
        !(WeatherActive(Weather.Rain, 0, 0)
            || WeatherActive(Weather.RainyClouds, 0, 0)
            || WeatherActive(Weather.WindyRain, 0, 0)
            || WeatherActive(Weather.RainyHeavyFog, 0, 0)));
    RestartEvent();
L3:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, ON);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(!(WeatherActive(Weather.Snow, 0, 0) || WeatherActive(Weather.HeavySnow, 0, 0)));
    RestartEvent();
L4:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, ON);
    SetEventFlagID(575, OFF);
    WaitFor(!(WeatherActive(Weather.Fog, 0, 0) || WeatherActive(Weather.HeavyFog, 0, 0)));
    RestartEvent();
L5:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, ON);
    WaitFor(
        !(WeatherActive(Weather.WindyFog, 0, 0) || WeatherActive(Weather.WindyPuffyClouds, 0, 0)));
    RestartEvent();
});

$Event(840, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 8998));
    DeactivateGparamOverride(3);
    ChangeWeather(Weather.Default, 1, false);
    ClearSpEffect(10000, 8998);
    WaitFixedTimeSeconds(1.2);
    RestartEvent();
});

$Event(841, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 8990));
    ChangeWeather(Weather.Fog, -1, false);
    WaitFor(!CharacterHasSpEffect(10000, 8990));
    RestartEvent();
});

$Event(900, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    //maliketh kill = 9116
    GotoIf(L0, !EventFlag(9116));
    //finger reader dead state = 118
    GotoIf(L1, !EventFlag(118));
    EndEvent();
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(9116));
    //SetSpEffect(10000, 4280);
    //SetSpEffect(10000, 4282);
    SetPlayerRespawnPoint(13002020);
    SaveRequest();
    WaitFixedTimeSeconds(1);
L1:
    EndIf(CharacterDead(10000));
    DisableCharacterDefaultBackread(13000800);
    //sets visuals in Roundtable = 300
    //SetEventFlagID(300, ON);
    //SetEventFlagID(301, ON);
    //sets visuals in Roundtable = 302
    //SetEventFlagID(302, OFF);
    //maliketh bonfire on 71300
    SetEventFlagID(71300, ON);
    //disables non-ashen leyndell bonfires = 71100, 71110
    //BatchSetEventFlags(71100, 71110, OFF);
    //DisableTextOnLoadingScreen();
    //11052010 Ashen Capital Spawn Location, 11050000 is Ashen Map
    //PlayCutsceneToPlayerAndWarp(13000050, CutscenePlayMode.Skippable, 11052010, 11050000, 10000, 13000, true);
    //PlayCutsceneToPlayer(13000050, CutscenePlayMode.Skippable, 10000);
    //WaitFixedTimeRealFrames(1);
    //SetPlayerRespawnPoint(11052010);
    SaveRequest();
    //Finger Reader State = 118
    SetEventFlagID(118, ON);
});

$Event(901, Restart, function() {  //Melina Burns Erdtree Event
    EndIf(EventFlag(110));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(1054539205)
            && (EventFlag(1054539200) || EventFlag(1054539201)));
    WaitFixedTimeSeconds(2);
    SetEventFlagID(9001, ON);
    WaitFixedTimeFrames(1);
    SetPlayerRespawnPoint(11052010);
    SaveRequest();
    //sets visuals in Roundtable = 300
    SetEventFlagID(300, ON);
    SetEventFlagID(301, ON);
    //sets visuals in Roundtable = 302
    SetEventFlagID(302, OFF);
    SetEventFlagID(110, ON);
    //SetEventFlagID(302, ON);
    SetEventFlagID(9021, ON);
    
    BatchSetEventFlags(71100, 71110, OFF); // non ashen graces
    SetEventFlagID(11009870, OFF); // Leyndell: Twisted Abductor
    SetEventFlagID(11009850, OFF); // Leyndell: Sigur
    SetEventFlagID(11009800, OFF); // Leyndell: Morgott
    
    if (!EventFlag(1054539201)) {
        if (!(PlayerHasArmorEquipped(ArmorType.Head, 150000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 640000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 910000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 760000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 440000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 470000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 820000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1010000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1760000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1770000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1780000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 2010000, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 330100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1810100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1811100, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5270000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5320000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 3000000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5184000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5290000, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 5060100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 5062100, -1))) {
            SetEventFlagID(780010, ON);
            SetEventFlagID(780011, OFF);
        } else {
            SetEventFlagID(780010, OFF);
            SetEventFlagID(780011, ON);
        }
        SetEventFlagID(111, ON);
        // Warp Location: Farum Azula: 13002500 (warp after giant's fire)
        PlayCutsceneToPlayerAndWarp(60540000, CutscenePlayMode.Skippable, 11052010, 11050000, 10000, 0, true);
        WaitFixedTimeRealFrames(1);
        //PlayCutsceneToPlayerWithWeatherAndTime(60540010, CutscenePlayMode.SkippableWithFadeOutSkip, 10000, true, Weather.Default, 300, true, 6, 30, 0);
        //WaitFixedTimeRealFrames(1);
        SetEventFlagID(9001, OFF);
        EndEvent();
    }
L1:
    SetEventFlagID(9000, OFF);
    SetEventFlagID(112, ON);
    PlayCutsceneToPlayerAndWarp(60540001, CutscenePlayMode.Skippable, 11052010, 11050000, 10000, 0, true);
    WaitFixedTimeRealFrames(1);
    //PlayCutsceneToPlayerWithWeatherAndTime(60540011, CutscenePlayMode.SkippableWithFadeOutSkip, 10000, true, Weather.Default, 300, true, 6, 30, 0);
    //WaitFixedTimeRealFrames(1);
    SetEventFlagID(9001, OFF);
    EndEvent();
});

$Event(902, Restart, function() {  //Frenzy Self Burns Erdtree Event
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(1054539206)
            && EventFlag(110)
            && PlayerInMap(60, 54, 53, -1));
    SetEventFlagID(9001, ON);
    WaitFixedTimeFrames(1);
    SetPlayerRespawnPoint(11052010);
    SaveRequest();
    SetEventFlagID(1054539206, OFF);
    //sets visuals in Roundtable = 300
    SetEventFlagID(300, ON);
    SetEventFlagID(301, ON);
    //sets visuals in Roundtable = 302
    SetEventFlagID(302, OFF);
    //SetEventFlagID(302, ON);
    SetEventFlagID(9021, ON);
    
    BatchSetEventFlags(71100, 71110, OFF); // non ashen graces
    SetEventFlagID(11009870, OFF); // Leyndell: Twisted Abductor
    SetEventFlagID(11009850, OFF); // Leyndell: Sigur
    SetEventFlagID(11009800, OFF); // Leyndell: Morgott
    
    if (!EventFlag(112)) {
        if (!(PlayerHasArmorEquipped(ArmorType.Head, 150000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 640000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 910000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 760000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 440000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 470000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 820000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1010000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1760000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1770000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 1780000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 2010000, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 330100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1810100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 1811100, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5270000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5320000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 3000000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5184000, -1)
            || PlayerHasArmorEquipped(ArmorType.Head, 5290000, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 5060100, -1)
            || PlayerHasArmorEquipped(ArmorType.Body, 5062100, -1))) {
            SetEventFlagID(780010, ON);
            SetEventFlagID(780011, OFF);
        } else {
            SetEventFlagID(780010, OFF);
            SetEventFlagID(780011, ON);
        }
        SetEventFlagID(111, ON);
        PlayCutsceneToPlayerAndWarp(13000050, CutscenePlayMode.Skippable, 11052010, 11050000, 10000, 0, true);
        WaitFixedTimeRealFrames(1);
        //PlayCutsceneToPlayerWithWeatherAndTime(60540010, CutscenePlayMode.SkippableWithFadeOutSkip, 10000, true, Weather.Default, 300, true, 6, 30, 0);
        //WaitFixedTimeRealFrames(1);
        SetEventFlagID(9001, OFF);
        EndEvent();
    }
L1:
    SetEventFlagID(9000, OFF);
    SetEventFlagID(112, ON);
    PlayCutsceneToPlayerAndWarp(13000050, CutscenePlayMode.Skippable, 11052010, 11050000, 10000, 0, true);
    WaitFixedTimeRealFrames(1);
    //PlayCutsceneToPlayerWithWeatherAndTime(60540011, CutscenePlayMode.SkippableWithFadeOutSkip, 10000, true, Weather.Default, 300, true, 6, 30, 0);
    //WaitFixedTimeRealFrames(1);
    SetEventFlagID(9001, OFF);
    EndEvent();
});

// Rotten Radahn Cutscene Starfall 
$Event(910, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(EventFlag(9415));
    if (EventFlag(310)) {
        if (!EventFlag(9416)) {
            DisableAreaWelcomeMessage();
            SetEventFlagID(9416, ON);
        }
        SetCurrentTime(22, 30, 0, false, false, false, 0, 0, 0);
        ChangeWeather(Weather.Cloudless, -1, true);
        SetSpEffect(10000, 4280);
        SetSpEffect(10000, 4282);
        if (!EventFlag(9417)) {
            WaitFixedTimeSeconds(0.5);
            DisplayGenericDialog(30140, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
            SetEventFlagID(9417, ON);
        }
        WaitFor(EventFlag(76422) || EventFlag(73016));
        ChangeWeather(Weather.Cloudless, 15000, false);
        SetSpEffect(10000, 4281);
        SetSpEffect(10000, 4283);
        SetEventFlagID(9415, ON);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1252380800));
    SetSpEffect(10000, 4280);
    SetSpEffect(10000, 4282);
    SetPlayerRespawnPoint(1052382020);
    SaveRequest();
    if (!EventFlag(9414)) {
        SetEventFlagID(9414, ON);
        WaitFixedTimeSeconds(10);
    }
    EndIf(CharacterDead(10000));
    if (!(MapLoaded(60, 52, 39, 0) || MapLoaded(60, 51, 38, 0))) {
        WarpPlayer(60, 51, 38, 0, 1051382020, 0);
        EndEvent();
    }
L9:
    SetEventFlagID(9001, ON);
    WaitFixedTimeFrames(1);
    DisableTextOnLoadingScreen();
    if (!MapLoaded(60, 52, 39, 0)) {
        PlayCutsceneToPlayerWithWeatherAndTime(60510011, CutscenePlayMode.Skippable, 10000, true, Weather.Cloudless, -1, true, 22, 30, 0);
    } else {
        PlayCutsceneToPlayerWithWeatherAndTime(60510010, CutscenePlayMode.Skippable, 10000, true, Weather.Cloudless, -1, true, 22, 30, 0);
    }
    WaitFixedTimeRealFrames(1);
    FadeToBlack(1, 0, false, -1);
    SetEventFlagID(310, ON);
    TriggerAreaReload(false);
    EndEvent();
});

// ? (DLC)
$Event(915, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L0, !EventFlag(9140));
    GotoIf(L1, !EventFlag(126));
    EndEvent();
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(9140));
    SetSpEffect(10000, 4280);
    SetSpEffect(10000, 4282);
    WaitFixedTimeSeconds(5.2);
L1:
    EndIf(CharacterDead(10000));
    SetEventFlagID(330, ON);
    DisableTextOnLoadingScreen();
    WarpPlayer(61, 45, 46, 0, 2045462020, 10000);
    SetPlayerRespawnPoint(2045462020);
    SaveRequest();
    SetEventFlagID(126, ON);
});

// Burn the tree using Messmer's Kindling (DLC)
$Event(916, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(330));
    GotoIf(L0, EventFlag(20010196));
    GotoIf(L5, !PlayerHasItem(ItemType.Goods, 2008021));
    WaitFor(
        PlayerIsInOwnWorld()
            && !HasMultiplayerState(MultiplayerState.Multiplayer)
            && ActionButtonInArea(209610, 2044451500));
    DisplayGenericDialogAndSetEventFlags(2030000, PromptType.YESNO, NumberofOptions.TwoButtons, 2044451500, 5, 2044452501, 2044452502, 2044452502);
    RestartIf(!EventFlag(2044452501));
    WaitFixedTimeSeconds(0.1);
L0:
    SetEventFlagID(9021, ON);
    SetEventFlagID(20010196, ON);
    //SetPlayerRespawnPoint(20012020);
    SaveRequest();
    DisableTextOnLoadingScreen();
    
    //PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20012020, 20010000, 10000, 60444500, true);
    if (EventFlag(20000800)) {// Divine Beast Defeat
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20002020, 20000000, 10000, 60444500, true);
        SetPlayerRespawnPoint(20002020);
    }
    else if (EventFlag(72003)) {// Stagefront Grace
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20002021, 20000000, 10000, 60444500, true);
        SetPlayerRespawnPoint(20002021);
    }
    else if (EventFlag(72001) && EventFlag(20008540)) {// Belurat, Tower Settlement Grace with Big door Shortcut
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20002023, 20000000, 10000, 60444500, true);
        SetPlayerRespawnPoint(20002023);
    }
    else if (EventFlag(72002)) {// Small Private Altar Grace
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20002022, 20000000, 10000, 60444500, true);
        SetPlayerRespawnPoint(20002022);
    }
    else if (EventFlag(72001)) {// Belurat, Tower Settlement Grace without Big door Shortcut
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 20002023, 20000000, 10000, 60444500, true);
        SetPlayerRespawnPoint(20002023);
    }
    else {// Belurat Main Gate Cross Grace
        PlayCutsceneToPlayerAndWarp(61440000, CutscenePlayMode.Skippable, 2045422020, 61454200, 10000, 60444500, true);
        SetPlayerRespawnPoint(2045422020);
    }
    
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(330, ON);
    RemoveItemFromPlayer(ItemType.Goods, 2008021, 1);
    WaitFixedTimeSeconds(1);
    EndEvent();
L5:
    WaitFor(
        (PlayerIsInOwnWorld()
            && !HasMultiplayerState(MultiplayerState.Multiplayer)
            && ActionButtonInArea(209610, 2044451500))
            || PlayerHasItem(ItemType.Goods, 2008021));
    RestartIf(PlayerHasItem(ItemType.Goods, 2008021));
    DisplayGenericDialog(2030001, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Followup from event before, special spawn anim
$Event(20010197, Default, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(20010197));
    WaitFor(EventFlag(20010196) && EventFlag(330));
    ForceAnimationPlayback(10000, 63010, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 820685);
    SetEventFlagID(20010197, ON);
    RemoveItemFromPlayer(ItemType.Goods, 2008021, 1);
    EndEvent();
});

$Event(920, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(116));
    WaitFor(PlayerIsInOwnWorld() && CharacterHasSpEffect(10000, 502190));
    SetEventFlagID(116, ON);
    SetEventFlagID(7500, OFF);
    SetEventFlagID(9431, OFF);
});

$Event(921, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(116));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(108) && EventFlag(9120) && InArea(10000, 13002050));
    SetSpEffect(10000, 4230);
});

$Event(922, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && CharacterHasSpEffect(10000, 502160));
    WarpPlayer(12, 5, 0, 0, 12052021, 0);
});

$Event(930, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    onlineItemAct &= !(HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending))
        && PlayerIsInOwnWorld();
    //if (Signed(X16_4) != 0) {
        //onlineItemAct &= PlayerHasItem(ItemType.Goods, X16_4);
    //}
    //if (Signed(X20_4) != 0) {
        //onlineItemAct &= PlayerHasItem(ItemType.Goods, X20_4);
    //}
    //onlineItemAct &= ActionButtonInArea(X12_4, X8_4);
    //WaitFor(onlineItemAct);
    WaitFor(ActionButtonInArea(X12_4, X8_4));
    SetEventFlagID(9021, ON);
    PlayCutsceneToPlayerAndWarp(X0_4, CutscenePlayMode.Skippable, X28_4, X24_4, 10000, X36_4, false);
    WaitFixedTimeRealFrames(1);
    PlayCutsceneToPlayer(X4_4, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(X0_4, CutscenePlayMode.Skippable, X28_4, X24_4, 10000, 0, false);
    } else if (X32_4 != 0) {
        PlayCutsceneToPlayerAndWarp(X0_4, CutscenePlayMode.Skippable, X32_4, X24_4, 10000, 0, false);
    } else {
        PlayCutsceneToPlayerAndWarp(X0_4, CutscenePlayMode.Skippable, X28_4, X24_4, 10000, 0, false);
    }
    WaitFixedTimeRealFrames(1);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(X4_4, CutscenePlayMode.SkippableWithFadeOutSkip, X28_4, X24_4, 10000, 0, false);
    } else if (X32_4 != 0) {
        PlayCutsceneToPlayerAndWarp(X4_4, CutscenePlayMode.SkippableWithFadeOutSkip, X32_4, X24_4, 10000, 0, false);
    } else {
        PlayCutsceneToPlayerAndWarp(X4_4, CutscenePlayMode.SkippableWithFadeOutSkip, X28_4, X24_4, 10000, 0, false);
    }
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

$Event(936, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_1, X25_1, X28_4) {
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && EventFlag(X8_4));
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(9021, ON);
    PlayCutsceneToPlayerAndWarpWithWeatherAndTime(X0_4, CutscenePlayMode.Skippable, X16_4, X12_4, 10000, X20_4, false, X24_1, X25_1, X28_4, false, 0, 0, 0);
    WaitFixedTimeRealFrames(1);
    PlayCutsceneToPlayer(X4_4, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

$Event(945, Default, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(105));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(104));
    WarpPlayer(11, 10, 0, 0, 11100980, 61000);
    SetThisEventSlot(ON);
});


$Event(950, Restart, function() {
    EndIf(EventFlag(951));
    online = PlayerIsInOwnWorld();
    area = EntityInRadiusOfEntity(10000, 1042361950, 2, 1);
    area2 = EntityInRadiusOfEntity(10000, 1043371950, 2, 1);
    area3 = EntityInRadiusOfEntity(10000, 1046381950, 2, 1);
    area4 = EntityInRadiusOfEntity(10000, 1041381950, 2, 1);
    area5 = EntityInRadiusOfEntity(10000, 1044351950, 2, 1);
    area6 = EntityInRadiusOfEntity(10000, 1042371950, 2, 1);
    area7 = EntityInRadiusOfEntity(10000, 1044341950, 2, 1);
    area8 = EntityInRadiusOfEntity(10000, 1043351950, 2, 1);
    areaFlag = (area || area2 || area3 || area4 || area5 || area6 || area7 || area8) && EventFlag(9000);
    flag = EventValue(955, 3) == 2;
    flag2 = EventValue(955, 3) >= 3;
    onlineAreaFlag = online && areaFlag && (flag || flag2 || area2 || area6);
    WaitFor(onlineAreaFlag || ElapsedSeconds(3));
    EndIf(!onlineAreaFlag.Passed);
    SetEventFlagID(9001, ON);
    WaitFixedTimeFrames(1);
    SetEventFlagID(951, ON);
    SetEventFlagID(953, ON);
    SetEventFlagID(9021, ON);
    GotoIf(L8, area8.Passed);
    GotoIf(L7, area7.Passed);
    GotoIf(L6, area6.Passed);
    GotoIf(L5, area5.Passed);
    GotoIf(L4, area4.Passed);
    GotoIf(L3, area3.Passed);
    GotoIf(L2, area2.Passed);
    GotoIf(L1, area.Passed);
    Goto(L10);
    EndEvent();
L1:
    PlayCutsceneToPlayer(60420000, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1042362980, -1);
    SetCameraAngle(5, -150.63);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L2:
    PlayCutsceneToPlayer(60420001, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1043372980, -1);
    SetCameraAngle(5, 108.82);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L3:
    PlayCutsceneToPlayer(60420002, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1046382980, -1);
    SetCameraAngle(5, -155.69);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L4:
    PlayCutsceneToPlayer(60420003, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1041382980, -1);
    SetCameraAngle(5, 49.13);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L5:
    PlayCutsceneToPlayer(60420004, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1044352980, -1);
    SetCameraAngle(5, -144.18);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L6:
    PlayCutsceneToPlayer(60420005, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1042372980, -1);
    SetCameraAngle(4.02, 18.7);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L7:
    PlayCutsceneToPlayer(60420006, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1044342980, -1);
    SetCameraAngle(5, 17.42);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L8:
    PlayCutsceneToPlayer(60420007, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1043352980, -1);
    SetCameraAngle(5, -126.77);
    ChangeWeather(Weather.Default, 300, true);
    Goto(L10);
L10:
    SetEventFlagID(9001, OFF);
});

$Event(960, Default, function(X0_4) {
    EndIf(EventFlag(951));
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(951) || EventFlag(X0_4));
    EndIf(EventFlag(951));
    IncrementEventValue(955, 3, 7);
});

$Event(970, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(82001));
    WaitFor(PlayerIsInOwnWorld() && PlayerInMap(12, -1, -1, -1));
    SetEventFlagID(82001, ON);
});

$Event(980, Restart, function() {
    EndIf(EventFlag(1099002980));
    BatchSetEventFlags(9800, 9809, OFF);
    RandomlySetEventFlagInRange(9800, 9809, ON);
    SetEventFlagID(1099002980, ON);
});

$Event(1020, Default, function() {
    DisableNetworkSync();
    GotoIf(L0, EventFlag(9021));
    GotoIf(L1, EventFlag(1099002100));
    SuppressSE(SoundType.BGM, 0, false);
    WaitFor(EventFlag(1099002100) || EventFlag(9021));
    RestartEvent();
L0:
    SuppressSE(SoundType.BGM, 0, true);
    SetEventFlagID(9021, OFF);
    WaitFor(ElapsedSeconds(1) || EventFlag(1099002100));
    GotoIf(L2, EventFlag(1099002100));
    RestartEvent();
L1:
    SuppressSE(SoundType.BGM, 0, true);
L2:
    WaitFor(!EventFlag(1099002100));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1030, Default, function() {
    DisableNetworkSync();
    WaitFor(
        WeatherLotActive(1000)
            || WeatherLotActive(2000)
            || WeatherLotActive(2010)
            || WeatherLotActive(2020)
            || WeatherLotActive(3000)
            || WeatherLotActive(3010)
            || WeatherLotActive(3020)
            || WeatherLotActive(3021)
            || WeatherLotActive(3022)
            || WeatherLotActive(4000)
            || WeatherLotActive(4001)
            || WeatherLotActive(4010)
            || WeatherLotActive(4020)
            || WeatherLotActive(5000)
            || WeatherLotActive(5010)
            || WeatherLotActive(5011)
            || WeatherLotActive(6000)
            || ((WeatherLotActive(620000100) || WeatherLotActive(620000101)) && !EventFlag(9840))
            || (WeatherLotActive(680000100) && !EventFlag(9841)));
    if (WeatherLotActive(1000)) {
        ChangeWeather(Weather.Cloudless, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(1000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(2000)) {
        ChangeWeather(Weather.Default, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(2000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(2010)) {
        ChangeWeather(Weather.FlatClouds, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(2010));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(2020)) {
        ChangeWeather(Weather.PuffyClouds, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(2020));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(3000)) {
        ChangeWeather(Weather.Rain, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(3000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(3010)) {
        ChangeWeather(Weather.RainyClouds, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(3010));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(3020)) {
        ChangeWeather(Weather.WindyRain, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(3020));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    flag |= !WeatherLotActive(3021);
    if (!flag) {
        ChangeWeather(Weather.WindyFog, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(3021));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(3022)) {
        ChangeWeather(Weather.ScatteredRain, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(3022));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(4000)) {
        ChangeWeather(Weather.Snow, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(4000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(4001)) {
        ChangeWeather(Weather.Unknown18, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(4001));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(4010)) {
        ChangeWeather(Weather.HeavySnow, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(4010));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(4020)) {
        //ChangeWeather(Weather.SnowyHeavyFog, -1, false);
        ChangeWeather(Weather.HeavySnow, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(4020));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(5000)) {
        ChangeWeather(Weather.Fog, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(5000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(5010)) {
        ChangeWeather(Weather.HeavyFog, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(5010));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(5011)) {
        ChangeWeather(Weather.RainyHeavyFog, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(5011));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(6000)) {
        ChangeWeather(Weather.WindyPuffyClouds, -1, false);
        WaitFixedTimeSeconds(1);
        WaitFor(!WeatherLotActive(6000));
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    cond &= !WeatherLotActive(620000100) && !WeatherLotActive(620000101);
    if (!cond) {
        ChangeWeather(Weather.Default, -1, false);
        WaitFixedTimeSeconds(1);
        cond &= !WeatherLotActive(620000100) && !WeatherLotActive(620000101);
        WaitFor(cond);
        ChangeWeather(Weather.None, -1, false);
        SetEventFlagID(9840, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (WeatherLotActive(680000100)) {
        ChangeWeather(Weather.Default, -1, false);
        WaitFixedTimeSeconds(1);
        flag |= !WeatherLotActive(680000100) || EventFlag(9841);
        WaitFor(flag);
        ChangeWeather(Weather.None, -1, false);
        SetEventFlagID(9841, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1040, Restart, function() {
    DisableNetworkSync();
    DeleteAssetfollowingSFX(1060001500, true);
    ClearSpEffect(10000, 4200);
    ClearSpEffect(10000, 4201);
    SetWindSFX(-1);
    timeMap = TimeOfDayInRange(0, 0, 0, 2, 59, 59)
        && WeatherActive(Weather.Default, 0, 0)
        && PlayerInMap(60, -1, -1, -1);
    mapFlagOnline = PlayerInMap(10, 1, -1, -1) && !EventFlag(102) && PlayerIsInOwnWorld();
    online = MultiplayerEvent(0);
    online2 = MultiplayerEvent(10);
    online3 = MultiplayerEvent(20);
    online4 = MultiplayerEvent(30);
    online5 = MultiplayerEvent(40);
    online6 = MultiplayerEvent(50);
    online7 = MultiplayerEvent(60);
    online8 = MultiplayerEvent(70);
    cond |= MultiplayerEvent(80);
    online9 = online || online2 || online3 || online4 || online5 || online6 || online7 || online8 || cond;
    WaitFor(timeMap || mapFlagOnline || (online9 && !EventFlag(230)) || EventFlag(9989));
    if (!online9.Passed) {
        if (!mapFlagOnline.Passed) {
            SetWindSFX(808004);
            WaitFixedTimeSeconds(5);
            CreateAssetfollowingSFX(1060001500, 200, 806800);
            WaitFixedTimeSeconds(14);
            SetSpEffect(10000, 4200);
            SetSpEffect(10000, 4201);
            cond |= (!(TimeOfDayInRange(0, 0, 0, 3, 29, 59)
                && WeatherActive(Weather.Default, 0, 0)
                && PlayerInMap(60, -1, -1, -1))
                && !EventFlag(9989))
                || ElapsedSeconds(300);
            WaitFor(cond);
            SetWindSFX(-1);
            DeleteAssetfollowingSFX(1060001500, true);
            ClearSpEffect(10000, 4200);
            ClearSpEffect(10000, 4201);
            WaitFixedTimeSeconds(120);
            RestartEvent();
        }
L1:
        SetWindSFX(808004);
        SetSpEffect(10000, 4200);
        WaitFor(!(PlayerInMap(10, 1, -1, -1) && !EventFlag(102) && PlayerIsInOwnWorld()));
        SetWindSFX(-1);
        ClearSpEffect(10000, 4200);
        WaitFixedTimeSeconds(10);
        RestartEvent();
    }
L0:
    if (PlayerInMap(60, -1, -1, -1)) {
        SetWindSFX(808004);
        WaitFixedTimeSeconds(5);
        CreateAssetfollowingSFX(1060001500, 200, 806800);
        WaitFixedTimeSeconds(14);
    }
L2:
    SetSpEffect(10000, 4200);
    SetSpEffect(10000, 4201);
    if (online.Passed) {
        DisplayNetworkMessage(3000201, false);
    } else if (online2.Passed) {
        DisplayNetworkMessage(3000211, false);
    } else if (online3.Passed) {
        DisplayNetworkMessage(3000221, false);
    } else if (online4.Passed) {
        DisplayNetworkMessage(3000231, false);
    } else if (online5.Passed) {
        DisplayNetworkMessage(3000241, false);
    } else if (online6.Passed) {
        DisplayNetworkMessage(3000251, false);
    } else if (online7.Passed) {
        DisplayNetworkMessage(3000261, false);
    } else if (online8.Passed) {
        DisplayNetworkMessage(3000271, false);
    } else if (cond.Passed) {
        DisplayNetworkMessage(3000281, false);
        Goto(L15);
    }
L15:
    WaitFixedTimeSeconds(300);
    SetWindSFX(-1);
    DeleteAssetfollowingSFX(1060001500, true);
    ClearSpEffect(10000, 4200);
    ClearSpEffect(10000, 4201);
    WaitFixedTimeSeconds(150);
    RestartEvent();
});

$Event(1050, Restart, function() {
    DisableNetworkSync();
    flag = EventFlag(7500);
    flagSp = !EventFlag(7500) && CharacterHasSpEffect(20000, 503315);
    WaitFor(flag || flagSp);
    if (!flagSp.Passed) {
        SetSpEffect(20000, 503315);
        WaitFixedTimeSeconds(0.1);
        WaitFor(!EventFlag(7500));
    }
L2:
    SetSpEffect(20000, 503316);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Forced Torrent Dismount | Abyssal Woods (DLC)
$Event(1070, Restart, function() {
    DisableNetworkSync();
    SetSpEffect(10000, 19996);
    WaitFor(
        (InArea(10000, 2049412690) && !PlayerInMap(28, 0, 0, 0))
            || InArea(10000, 2052432690)
            || InArea(10000, 2050422690));
    SetSpEffect(10000, 19995);
    WaitFor(
        !((InArea(10000, 2049412690) && !PlayerInMap(28, 0, 0, 0))
            || InArea(10000, 2052432690)
            || InArea(10000, 2050422690)));
    RestartEvent();
});

$Event(1080, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(9080));
    SetSpEffect(10000, 4286);
    WaitFor(
        (PlayerIsInOwnWorld()
            && EventFlag(9000)
            && EventFlag(9080)
            && CharacterHasSpEffect(10000, 4286))
            || !EventFlag(9080));
    SetSpEffect(10000, 4287);
    SetEventFlagID(9080, OFF);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

$Event(1088, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(2051)) {
        if (!EventFlag(2052)) {
            SetSpEffect(10000, 4289);
            WaitFor(EventFlag(2051) || EventFlag(2052));
            SetSpEffect(10000, 4288);
            RestartEvent();
        }
    }
L0:
    SetSpEffect(10000, 4288);
    WaitFor(!(EventFlag(2051) || EventFlag(2052)));
    SetSpEffect(10000, 4289);
    RestartEvent();
});

$Event(1100, Default, function(X0_4, X4_4, X8_4, X12_4) {
    Unknown200476(X0_4, X4_4);
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X0_4));
    
    if (Signed(X4_4) != 0) {
        AwardItemsIncludingClients(X4_4);
    }
    WaitFixedTimeSeconds(5);
    if (Signed(X8_4) != 0) {
        AwardItemsIncludingClients(X8_4);
    }
});

$Event(1200, Default, function(X0_4, X4_4, X8_4, X12_4) {
    Unknown200476(X0_4, X4_4);
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X0_4));
    
    if (Signed(X4_4) != 0) {
        AwardItemsIncludingClients(X4_4);
    }
    WaitFixedTimeSeconds(5);
    if (Signed(X8_4) != 0) {
        AwardItemsIncludingClients(X8_4);
    }
});

$Event(1400, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(6950)) {
        EndIf(!EventFlag(60849));
        RemoveGesture(108);
        SetEventFlagID(60849, OFF);
        EndEvent();
    }
L0:
    EndIf(EventFlag(60849));
    AwardGesture(108);
    SetEventFlagID(60849, ON);
});

$Event(1401, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(6950)) {
        if (EventFlag(60850)) {
            RemoveGesture(109);
            SetEventFlagID(60850, OFF);
        }
L15:
        SetEventFlagID(7680, OFF);
        EndEvent();
    }
L0:
    if (!EventFlag(60850)) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(7680));
        AwardGesture(109);
        SetEventFlagID(60850, ON);
    }
L16:
    SetEventFlagID(7680, OFF);
});

// Gesture Award - Ring of Miquella 1 (DLC)
$Event(1402, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(6952)) {
        EndIf(!EventFlag(60862));
        RemoveGesture(113);
        SetEventFlagID(60862, OFF);
        EndEvent();
    }
L0:
    EndIf(EventFlag(60862));
    AwardGesture(113);
    SetEventFlagID(60862, ON);
});

// Gesture Award - Ring of Miquella 2 (DLC)
$Event(1403, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(6952)) {
        if (EventFlag(60865)) {
            RemoveGesture(116);
            SetEventFlagID(60865, OFF);
        }
L15:
        SetEventFlagID(7681, OFF);
        EndEvent();
    }
L0:
    if (!EventFlag(60865)) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(7681));
        AwardGesture(116);
        SetEventFlagID(60865, ON);
    }
L16:
    SetEventFlagID(7681, OFF);
});

$Event(1410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X16_4));
    RequestCharacterAICommand(X12_4, 80, 0);
    RequestCharacterAICommand(X12_4, X4_4, 1);
    RequestCharacterAIReplan(X12_4);
    sp = CharacterHasSpEffect(X12_4, X8_4);
    WaitFor(sp || HasDamageType(X12_4, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(X12_4, -1, 0);
    RequestCharacterAICommand(X12_4, -1, 1);
    RequestCharacterAIReplan(X12_4);
    EndIf(!sp.Passed);
    EndIf(EventFlag(X0_4));
    AwardGesture(X4_4);
    SetEventFlagID(X0_4, ON);
});

$Event(1411, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X16_4) || EventFlag(X24_4) || EventFlag(X32_4));
    if (EventFlag(X16_4)) {
        RequestCharacterAICommand(X12_4, 80, 0);
        RequestCharacterAICommand(X12_4, X4_4, 1);
        RequestCharacterAIReplan(X12_4);
    }
    if (EventFlag(X24_4)) {
        RequestCharacterAICommand(X20_4, 80, 0);
        RequestCharacterAICommand(X20_4, X4_4, 1);
        RequestCharacterAIReplan(X20_4);
    }
    if (EventFlag(X32_4)) {
        RequestCharacterAICommand(X28_4, 80, 0);
        RequestCharacterAICommand(X28_4, X4_4, 1);
        RequestCharacterAIReplan(X28_4);
    }
    WaitFor(
        CharacterHasSpEffect(X12_4, X8_4)
            || CharacterHasSpEffect(X20_4, X8_4)
            || CharacterHasSpEffect(X28_4, X8_4));
    if (EventFlag(X16_4)) {
        RequestCharacterAICommand(X12_4, -1, 0);
        RequestCharacterAICommand(X12_4, -1, 1);
        RequestCharacterAIReplan(X12_4);
    }
    if (EventFlag(X24_4)) {
        RequestCharacterAICommand(X20_4, -1, 0);
        RequestCharacterAICommand(X20_4, -1, 1);
        RequestCharacterAIReplan(X20_4);
    }
    if (EventFlag(X32_4)) {
        RequestCharacterAICommand(X28_4, -1, 0);
        RequestCharacterAICommand(X28_4, -1, 1);
        RequestCharacterAIReplan(X28_4);
    }
    EndIf(EventFlag(X0_4));
    AwardGesture(X4_4);
    SetEventFlagID(X0_4, ON);
});

$Event(1412, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(EventFlag(X16_4) && EntityInRadiusOfEntity(10000, X12_4, 18, 1));
    RequestCharacterAICommand(X12_4, 80, 0);
    RequestCharacterAICommand(X12_4, X4_4, 1);
    RequestCharacterAIReplan(X12_4);
    sp = CharacterHasSpEffect(X12_4, X8_4);
    WaitFor(sp || HasDamageType(X12_4, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(X12_4, -1, 0);
    RequestCharacterAICommand(X12_4, -1, 1);
    RequestCharacterAIReplan(X12_4);
    EndIf(!sp.Passed);
    EndIf(EventFlag(X0_4));
    AwardGesture(X4_4);
    SetEventFlagID(X0_4, ON);
});

// Gesture Award - Let us go Together (DLC)
$Event(1420, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60863));
    if (!EventFlag(20010198)) {
        cond = PlayerIsInOwnWorld() && EventFlag(20012820) && CharacterDead(10000);
        onlineFlag = PlayerIsInOwnWorld() && EventFlag(20010800);
        WaitFor(cond || onlineFlag);
        if (!onlineFlag.Passed) {
            SetEventFlagID(20010198, ON);
            EndEvent();
        }
L10:
        DeleteAssetfollowingSFX(20011198, true);
        CreateAssetfollowingSFX(20011198, 100, 6102);
        WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(4250, 20011198));
        DeleteAssetfollowingSFX(20011198, true);
        SetEventFlagID(60863, ON);
        AwardGesture(114);
        EndEvent();
    }
L15:
    SetEventFlagID(60863, ON);
    AwardGesture(114);
    EndEvent();
});

$Event(1450, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    onlineFlag &= PlayerIsInOwnWorld() && EventFlag(X0_4);
    if (0 != X4_4) {
        onlineFlag &= EventFlag(X4_4);
    }
    if (0 != X8_4) {
        onlineFlag &= EventFlag(X8_4);
    }
    if (0 != X12_4) {
        onlineFlag &= EventFlag(X12_4);
    }
    EndIf(onlineFlag);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    if (0 != X4_4) {
        SetEventFlagID(X4_4, ON);
    }
    if (0 != X8_4) {
        SetEventFlagID(X8_4, ON);
    }
    if (0 != X12_4) {
        SetEventFlagID(X12_4, ON);
    }
});

$Event(1460, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66000)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66010)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66020)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66030)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66040)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66050)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66060)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66070)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66080)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66090)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66100)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66110)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66120)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66130)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66140)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66150)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66160)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66170)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66180)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66190))
            && PlayerIsInOwnWorld());
    StoreItemAmountHeldInEventValue(ItemType.Goods, 9500, 9560, 5);
    if (EventValue(9560, 5) != 20) {
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L10:
    if (!EventFlag(6902)) {
        SetEventFlagID(6902, ON);
    }
});

$Event(1461, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66400)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66410)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66420)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66430)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66440)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66450)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66460)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66470)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66480)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66490))
            && PlayerIsInOwnWorld());
    StoreItemAmountHeldInEventValue(ItemType.Goods, 9501, 9565, 5);
    if (EventValue(9565, 5) != 10) {
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L10:
    if (!EventFlag(6903)) {
        SetEventFlagID(6903, ON);
    }
});

$Event(1462, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66700)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66710)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66720)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66730)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66740)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66750)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66760)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66770)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66780)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 66790))
            && PlayerIsInOwnWorld());
    StoreItemAmountHeldInEventValue(ItemType.Goods, 9510, 9570, 5);
    if (EventValue(9570, 5) != 10) {
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L10:
    if (!EventFlag(6904)) {
        SetEventFlagID(6904, ON);
    }
});

// Spell Rune items
$Event(1500, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4));
    if (X8_4 == 1)
        AwardItemsIncludingClients(X4_4);
    else
        DisplayBlinkingMessage(4022);
    WaitFixedTimeSeconds(1.5);
    RestartEvent();
});

$Event(1600, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    if (!PlayerIsInOwnWorld()) {
        EndIf(0 == X8_4);
        WaitFor(AssetBackread(X12_4, Equal, 1));
        DisableAsset(X12_4);
        WaitFixedTimeSeconds(1);
        WaitFor(!AssetBackread(X12_4, Equal, 1));
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    GotoIf(L1, !EventFlag(X0_4));
    EndIf(0 == X8_4);
    WaitFor(AssetBackread(X12_4, Equal, 1));
    DisableAsset(X12_4);
    WaitFixedTimeSeconds(1);
    WaitFor(!AssetBackread(X12_4, Equal, 1));
    WaitFixedTimeSeconds(1);
    RestartEvent();
L0:
L1:
    if (0 != X8_4) {
        CreateAssetfollowingSFX(X8_4, 200, 803220);
    }
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    WaitFixedTimeSeconds(1);
    DisplayBanner(TextBannerType.MapFound);
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    if (0 != X8_4) {
        ForceAnimationPlayback(X12_4, 1, false, false, false);
    }
    if (0 != X8_4) {
        DeleteAssetfollowingSFX(X8_4, true);
    }
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(1630, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    onlineFlag &= PlayerIsInOwnWorld() && EventFlag(X4_4);
    if (0 != X8_4) {
        onlineFlag &= EventFlag(X8_4);
    }
    if (0 != X12_4) {
        onlineFlag &= EventFlag(X12_4);
    }
    if (0 != X16_4) {
        onlineFlag &= EventFlag(X16_4);
    }
    if (0 != X20_4) {
        onlineFlag &= EventFlag(X20_4);
    }
    if (0 != X24_4) {
        onlineFlag &= EventFlag(X24_4);
    }
    if (0 != X28_4) {
        onlineFlag &= EventFlag(X28_4);
    }
    if (0 != X32_4) {
        onlineFlag &= EventFlag(X32_4);
    }
    WaitFor(onlineFlag);
    SetEventFlagID(X0_4, ON);
});

// Tutorial Popup: Death
$Event(1700, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(710530));
    EndIf(EventFlag(69100));
    WaitFor(EventFlag(710530) && ElapsedSeconds(2) && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1530, true, true);
    SetEventFlagID(700530, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9110, 700530, 1);
    SetEventFlagID(69100, ON);
});

// Death Tutorial Flag Handler
$Event(1701, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(18000020) && PlayerIsInOwnWorld() && CharacterDead(10000));
    SetEventFlagID(710530, ON);
});

// Tutorial Popup: Summoning Spirits
$Event(1702, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700550));
    EndIf(EventFlag(69110));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(710550)
            && EventFlag(60110)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1550, true, true);
    SetEventFlagID(700550, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, 710550, 1);
    SetEventFlagID(69110, ON);
});

// Tutorial Popup: Item Crafting
$Event(1703, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710570));
    EndIf(EventFlag(69130));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(60120)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1570, true, true);
    SetEventFlagID(710570, ON);
    if (Signed(9113) != 0) {
        DirectlyGivePlayerItem(ItemType.Goods, 9113, 710570, 1);
    }
    SetEventFlagID(69130, ON);
});

// Tutorial Popup: Containers
$Event(1704, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(69350));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(60120)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    WaitFixedTimeSeconds(0.3);
    ShowTutorialPopup(1580, true, true);
    SetEventFlagID(69350, ON);
    if (Signed(9135) != 0) {
        DirectlyGivePlayerItem(ItemType.Goods, 9135, 710580, 1);
    }
});

// Tutorial Popup: Adding Skills
$Event(1705, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(69160));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(710600)
            && !EventFlag(69160)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1600, true, true);
    SetEventFlagID(69160, ON);
    SetEventFlagID(710750, ON);
    if (Signed(9116) != 0) {
        DirectlyGivePlayerItem(ItemType.Goods, 9116, 710600, 1);
    }
});

// Tutorial Popup: About New Inventory Features (1.12)
$Event(1706, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(69520));
    WaitFor(
        TutorialSeen(2020)
            && !EventFlag(69520)
            && !CharacterHasSpEffect(10000, 9640)
            && PlayerIsInOwnWorld());
    SetEventFlagID(710920, ON);
    ShowTutorialPopup(1920, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 2009162, 710920, 1);
    SetEventFlagID(69520, ON);
});

// Tutorial Popup: Scadutree Blessing Menu (DLC)
$Event(1707, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(69530));
    WaitFor(
        EventFlag(720300)
            && !EventFlag(69530)
            && !CharacterHasSpEffect(10000, 9640)
            && PlayerIsInOwnWorld());
    ShowTutorialPopup(2300, true, true);
    SetEventFlagID(69530, ON);
});

// Tutorial Popup: Revered Spirit Ash Blessing Menu (DLC)
$Event(1708, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(69540));
    WaitFor(
        EventFlag(720310)
            && !EventFlag(69540)
            && !CharacterHasSpEffect(10000, 9640)
            && PlayerIsInOwnWorld());
    ShowTutorialPopup(2310, true, true);
    SetEventFlagID(69540, ON);
});

// General Tutorial Popup Handler - EventFlag, EventFlag, TutorialParam, GoodsID
$Event(1720, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X4_4)
            && !EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X8_4, true, true);
    SetEventFlagID(X0_4, ON);
    if (Signed(X12_4) != 0) {
        DirectlyGivePlayerItem(ItemType.Goods, X12_4, X4_4, 1);
    }
});

$Event(1750, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710060));
    WaitFor(
        (PlayerHasItem(ItemType.Weapon, 33000000)
            || PlayerHasItem(ItemType.Weapon, 33040000)
            || PlayerHasItem(ItemType.Weapon, 33050000)
            || PlayerHasItem(ItemType.Weapon, 33060000)
            || PlayerHasItem(ItemType.Weapon, 33090000)
            || PlayerHasItem(ItemType.Weapon, 33120000)
            || PlayerHasItem(ItemType.Weapon, 33130000)
            || PlayerHasItem(ItemType.Weapon, 33170000)
            || PlayerHasItem(ItemType.Weapon, 33180000)
            || PlayerHasItem(ItemType.Weapon, 33190000)
            || PlayerHasItem(ItemType.Weapon, 33200000)
            || PlayerHasItem(ItemType.Weapon, 33210000)
            || PlayerHasItem(ItemType.Weapon, 33230000)
            || PlayerHasItem(ItemType.Weapon, 33240000)
            || PlayerHasItem(ItemType.Weapon, 33250000)
            || PlayerHasItem(ItemType.Weapon, 33260000)
            || PlayerHasItem(ItemType.Weapon, 33270000)
            || PlayerHasItem(ItemType.Weapon, 33280000)
            || PlayerHasItem(ItemType.Weapon, 34000000)
            || PlayerHasItem(ItemType.Weapon, 34010000)
            || PlayerHasItem(ItemType.Weapon, 34020000)
            || PlayerHasItem(ItemType.Weapon, 34030000)
            || PlayerHasItem(ItemType.Weapon, 34040000)
            || PlayerHasItem(ItemType.Weapon, 34060000)
            || PlayerHasItem(ItemType.Weapon, 34070000)
            || PlayerHasItem(ItemType.Weapon, 34080000)
            || PlayerHasItem(ItemType.Weapon, 34090000))
            && !PlayerInMap(10, 1, 0, 0)
            && !PlayerInMap(18, 0, 0, 0)
            && PlayerTargeted(1, 31, AIStateType.Combat)
            && PlayerIsInOwnWorld());
    SetEventFlagID(710060, ON);
});

$Event(1751, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710130));
    WaitFor(
        (PlayerHasItem(ItemType.Weapon, 40000000)
            || PlayerHasItem(ItemType.Weapon, 40010000)
            || PlayerHasItem(ItemType.Weapon, 40020000)
            || PlayerHasItem(ItemType.Weapon, 40030000)
            || PlayerHasItem(ItemType.Weapon, 40050000)
            || PlayerHasItem(ItemType.Weapon, 41000000)
            || PlayerHasItem(ItemType.Weapon, 41010000)
            || PlayerHasItem(ItemType.Weapon, 41020000)
            || PlayerHasItem(ItemType.Weapon, 41030000)
            || PlayerHasItem(ItemType.Weapon, 41040000)
            || PlayerHasItem(ItemType.Weapon, 41060000)
            || PlayerHasItem(ItemType.Weapon, 41070000)
            || PlayerHasItem(ItemType.Weapon, 42000000)
            || PlayerHasItem(ItemType.Weapon, 42000000)
            || PlayerHasItem(ItemType.Weapon, 42030000)
            || PlayerHasItem(ItemType.Weapon, 42040000)
            || PlayerHasItem(ItemType.Weapon, 43000000)
            || PlayerHasItem(ItemType.Weapon, 43020000)
            || PlayerHasItem(ItemType.Weapon, 43030000)
            || PlayerHasItem(ItemType.Weapon, 43050000)
            || PlayerHasItem(ItemType.Weapon, 43060000)
            || PlayerHasItem(ItemType.Weapon, 43080000)
            || PlayerHasItem(ItemType.Weapon, 43100000)
            || PlayerHasItem(ItemType.Weapon, 43110000))
            && !PlayerInMap(10, 1, 0, 0)
            && !PlayerInMap(18, 0, 0, 0)
            && PlayerTargeted(1, 31, AIStateType.Combat)
            && PlayerIsInOwnWorld());
    SetEventFlagID(710130, ON);
});

$Event(1752, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710710));
    WaitFor(
        EventFlag(60110)
            && EventFlag(700550)
            && CharacterHasSpEffect(10000, 9530)
            && PlayerIsInOwnWorld());
    SetEventFlagID(710710, ON);
});

// Tutorial Popup: Keybind: Mounted Double Jump
$Event(1770, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X4_4)
            && !EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X8_4, true, true);
    SetEventFlagID(X0_4, ON);
});

$Event(1790, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710600));
    WaitFor(
        PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && CharacterHasSpEffect(10000, 81));
    WaitFixedTimeSeconds(1.5);
    SetEventFlagID(710800, ON);
});

$Event(1800, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2001));
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9431) && EventFlag(9431);
    flag2 = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9431) && !EventFlag(9431);
    flag3 = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9432) && EventFlag(9432);
    flag4 = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9433) && EventFlag(9433);
    WaitFor((flag || flag3 || flag4 || flag2) && PlayerIsInOwnWorld());
    SetEventFlagID(9420, ON);
    GotoIf(L1, flag.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    if (!flag2.Passed) {
    }
L11:
    GotoIf(L2, EventFlag(9432));
    GotoIf(L3, EventFlag(9433));
    SetCharacterFaceParamOverride(10000, 0, -1);
    SetEventFlagID(9420, OFF);
    Goto(L9);
L1:
    SetCharacterFaceParamOverride(10000, 0, 81000);
    Goto(L9);
L2:
    GotoIf(L9, EventFlag(9431));
    GotoIf(L9, EventFlag(9434));
    SetCharacterFaceParamOverride(10000, 0, 81001);
    Goto(L9);
L3:
    GotoIf(L9, EventFlag(9431));
    GotoIf(L9, EventFlag(9432));
    GotoIf(L9, EventFlag(9434));
    SetCharacterFaceParamOverride(10000, 0, 81002);
    Goto(L9);
L4:
    GotoIf(L9, EventFlag(9431));
    Goto(L9);
L9:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1801, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2001));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9430)
            && EventFlag(9430));
    SetEventFlagID(9421, ON);
    SetCharacterFaceParamOverride(10000, 1, 80000);
});

$Event(6800, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (!PlayerHasItem(ItemType.Goods, X0_4) && EventFlag(X4_4)) {
            SetEventFlagID(X4_4, OFF);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6901, Default, function() {
    EndIf(ThisEventSlot());
    GotoIf(L15, !PlayerIsInOwnWorld());
    GotoIf(L1, !(!EventFlag(68000) && !EventFlag(68020)));
    Goto(L0);
L1:
    GotoIf(L2, !(EventFlag(68000) && !EventFlag(68020)));
    RemoveItemFromPlayer(ItemType.Goods, 9402, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9400, 68000, 1);
    Goto(L0);
L2:
    GotoIf(L3, !(!EventFlag(68000) && EventFlag(68020)));
    Goto(L0);
L3:
    GotoIf(L4, !(EventFlag(68000) && EventFlag(68020)));
    DirectlyGivePlayerItem(ItemType.Goods, 9400, 68000, 1);
    Goto(L0);
L4:
L0:
    ClearCompiledConditionGroupState();
    if (EventFlag(66040)) {
        SetEventFlagID(66000, ON);
        SetEventFlagID(66040, OFF);
    }
    if (EventFlag(66080)) {
        SetEventFlagID(66130, ON);
        SetEventFlagID(66080, OFF);
    }
    if (EventFlag(10019200) && EventFlag(66150) && EventFlag(66181)) {
        SetEventFlagID(66150, ON);
        SetEventFlagID(66170, ON);
        SetEventFlagID(66180, ON);
    } else {
        SetEventFlagID(66180, OFF);
    }
    SetEventFlagID(66100, OFF);
    SetEventFlagID(66101, OFF);
    SetEventFlagID(66102, OFF);
    SetEventFlagID(66130, OFF);
    SetEventFlagID(66131, OFF);
    SetEventFlagID(66160, OFF);
    SetEventFlagID(66161, OFF);
    SetEventFlagID(66181, OFF);
    SetEventFlagID(66200, OFF);
    if (EventFlag(66420)) {
        SetEventFlagID(66400, OFF);
        SetEventFlagID(66410, ON);
        SetEventFlagID(66420, OFF);
    } else {
        SetEventFlagID(66400, OFF);
        SetEventFlagID(66410, OFF);
        SetEventFlagID(66420, OFF);
    }
    SetEventFlagID(66470, OFF);
    SetEventFlagID(66471, OFF);
    SetEventFlagID(66480, OFF);
    if (EventFlag(66710)) {
        SetEventFlagID(66760, ON);
        SetEventFlagID(66710, OFF);
    }
    SetEventFlagID(66730, OFF);
    SetEventFlagID(66731, OFF);
    SetEventFlagID(66750, OFF);
    SetEventFlagID(66751, OFF);
    SetEventFlagID(66780, OFF);
    SetEventFlagID(66781, OFF);
    SetEventFlagID(66104, OFF);
    SetEventFlagID(66202, OFF);
    SetEventFlagID(66204, OFF);
    SetEventFlagID(66300, OFF);
    SetEventFlagID(66302, OFF);
    SetEventFlagID(66304, OFF);
    SetEventFlagID(66402, OFF);
    SetEventFlagID(66404, OFF);
    SetEventFlagID(66502, OFF);
    SetEventFlagID(66510, OFF);
    ClearCompiledConditionGroupState();
    SetEventFlagID(11000389, OFF);
    SetEventFlagID(15000392, OFF);
    SetEventFlagID(15000393, OFF);
    SetEventFlagID(15001270, OFF);
    SetEventFlagID(15001280, OFF);
    SetEventFlagID(1043370340, OFF);
    SetEventFlagID(1044320342, OFF);
    SetEventFlagID(1044327410, OFF);
    SetEventFlagID(1036480340, OFF);
    SetEventFlagID(1036487400, OFF);
    SetEventFlagID(1036480340, OFF);
    SetEventFlagID(1039510451, OFF);
    SetEventFlagID(1049370290, OFF);
    SetEventFlagID(1052410290, OFF);
    SetEventFlagID(1048510300, OFF);
    SetEventFlagID(1248550380, OFF);
    SetEventFlagID(1248550381, OFF);
    SetEventFlagID(1042380340, OFF);
    SetEventFlagID(1044320340, OFF);
    SetEventFlagID(1037420340, OFF);
    SetEventFlagID(1036450340, OFF);
    SetEventFlagID(1044530300, OFF);
    SetEventFlagID(1049370292, OFF);
    SetEventFlagID(1048570320, OFF);
    SetEventFlagID(1043520506, OFF);
    SetEventFlagID(1043520505, OFF);
    SetEventFlagID(1043527500, OFF);
    SetEventFlagID(1038540400, OFF);
    SetEventFlagID(1038547100, OFF);
    SetEventFlagID(1042510300, OFF);
    SetEventFlagID(11000393, OFF);
    SetEventFlagID(13000490, OFF);
    SetEventFlagID(13000495, OFF);
    SetEventFlagID(12020431, OFF);
    SetEventFlagID(10000289, OFF);
    SetEventFlagID(1049370299, OFF);
    SetEventFlagID(1051360291, OFF);
    SetEventFlagID(1051360292, OFF);
    SetEventFlagID(1051570310, OFF);
    SetEventFlagID(1051570311, OFF);
    SetEventFlagID(12010240, OFF);
    SetEventFlagID(12030240, OFF);
    SetEventFlagID(12030241, OFF);
    SetEventFlagID(12030256, OFF);
    SetEventFlagID(12030257, OFF);
    SetEventFlagID(12030297, OFF);
    SetEventFlagID(12030201, OFF);
    SetEventFlagID(1051360290, OFF);
    SetEventFlagID(530140, OFF);
    ClearCompiledConditionGroupState();
    if (EventFlag(82135)) {
        SetEventFlagID(62135, ON);
        SetEventFlagID(82135, OFF);
    }
    if (EventFlag(82137)) {
        SetEventFlagID(62137, ON);
        SetEventFlagID(82137, OFF);
    }
    if (EventFlag(82138)) {
        SetEventFlagID(62138, ON);
        SetEventFlagID(82138, OFF);
    }
    if (EventFlag(95600)) {
        SetEventFlagID(78600, ON);
        SetEventFlagID(95600, OFF);
    }
    SetEventFlagID(82195, OFF);
    SetEventFlagID(82196, OFF);
    SetEventFlagID(82197, OFF);
    SetEventFlagID(82198, OFF);
    ClearCompiledConditionGroupState();
    if (!EventFlag(15000800) && InArea(10000, 15002845)) {
        WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, 15002950, -1, 10000, false, true);
    }
    ClearCompiledConditionGroupState();
    if (!EventFlag(11109213)) {
        SetEventFlagID(10007452, ON);
    } else {
        SetEventFlagID(10007450, ON);
    }
    SetThisEventSlot(ON);
    EndEvent();
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6902, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(6902));
        SetEventFlagID(66000, ON);
        SetEventFlagID(66010, ON);
        SetEventFlagID(66020, ON);
        SetEventFlagID(66030, ON);
        SetEventFlagID(66031, ON);
        SetEventFlagID(66060, ON);
        SetEventFlagID(66070, ON);
        SetEventFlagID(66080, ON);
        SetEventFlagID(66090, ON);
        SetEventFlagID(66100, ON);
        SetEventFlagID(66110, ON);
        SetEventFlagID(66120, ON);
        SetEventFlagID(66130, ON);
        SetEventFlagID(66140, ON);
        SetEventFlagID(66150, ON);
        SetEventFlagID(66160, ON);
        SetEventFlagID(66170, ON);
        SetEventFlagID(66180, ON);
        SetEventFlagID(66190, ON);
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6903, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(6903));
        SetEventFlagID(66400, ON);
        SetEventFlagID(66410, ON);
        SetEventFlagID(66420, ON);
        SetEventFlagID(66430, ON);
        SetEventFlagID(66440, ON);
        SetEventFlagID(66450, ON);
        SetEventFlagID(66460, ON);
        SetEventFlagID(66470, ON);
        SetEventFlagID(66480, ON);
        SetEventFlagID(66490, ON);
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6904, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(6904));
        SetEventFlagID(66700, ON);
        SetEventFlagID(66710, ON);
        SetEventFlagID(66720, ON);
        SetEventFlagID(66730, ON);
        SetEventFlagID(66740, ON);
        SetEventFlagID(66750, ON);
        SetEventFlagID(66760, ON);
        SetEventFlagID(66770, ON);
        SetEventFlagID(66780, ON);
        SetEventFlagID(66790, ON);
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6905, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(510010)) {
            SetEventFlagID(171, ON);
        }
        if (EventFlag(510300)) {
            SetEventFlagID(172, ON);
        }
        if (EventFlag(510040)) {
            SetEventFlagID(173, ON);
        }
        if (EventFlag(510220)) {
            SetEventFlagID(174, ON);
        }
        if (EventFlag(510120)) {
            SetEventFlagID(175, ON);
        }
        if (EventFlag(510200)) {
            SetEventFlagID(176, ON);
        }
        if (EventFlag(197)) {
            SetEventFlagID(177, ON);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6906, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(69390)) {
            DirectlyGivePlayerItem(ItemType.Goods, 9141, 69390, 1);
        }
        if (EventFlag(520040)) {
            DirectlyGivePlayerItem(ItemType.Goods, 202000, 520040, 1);
        }
        if (EventFlag(1039418600)) {
            SetEventFlagID(1039418540, ON);
            ReproduceAssetAnimation(1039411540, 2);
            DisableObjAct(1039411540, -1);
        } else if (EventFlag(73006)) {
            SetEventFlagID(1039418540, ON);
            ReproduceAssetAnimation(1039411540, 2);
            DisableObjAct(1039411540, -1);
        }
        if (EventFlag(1047408600)) {
            SetEventFlagID(1047408540, ON);
            ReproduceAssetAnimation(1047401540, 2);
            DisableObjAct(1047401540, -1);
        } else if (EventFlag(73014)) {
            SetEventFlagID(1047408540, ON);
            ReproduceAssetAnimation(1047401540, 2);
            DisableObjAct(1047401540, -1);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6907, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(102)) {
            SetEventFlagID(71801, ON);
        }
        if (EventFlag(1050558600)) {
            SetEventFlagID(1050558540, ON);
            ReproduceAssetAnimation(1050551540, 2);
            DisableObjAct(1050551540, -1);
        } else if (EventFlag(73019)) {
            SetEventFlagID(1050558540, ON);
            ReproduceAssetAnimation(1050551540, 2);
            DisableObjAct(1050551540, -1);
        }
        if (EventFlag(1039488600)) {
            SetEventFlagID(1039488540, ON);
            ReproduceAssetAnimation(1039481540, 2);
            DisableObjAct(1039481540, -1);
        } else if (EventFlag(73005)) {
            SetEventFlagID(1039488540, ON);
            ReproduceAssetAnimation(1039481540, 2);
            DisableObjAct(1039481540, -1);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(6908, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(73207)) {
            SetEventFlagID(73257, ON);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

// ? (DLC)
$Event(6909, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(10000040)) {
            SetEventFlagID(670130, ON);
        }
        if (EventFlag(10000041)) {
            SetEventFlagID(670131, ON);
        }
        if (EventFlag(10000042)) {
            SetEventFlagID(670132, ON);
        }
        if (EventFlag(10000043)) {
            SetEventFlagID(670133, ON);
        }
        if (EventFlag(10000044)) {
            SetEventFlagID(670134, ON);
        }
        if (EventFlag(10000045)) {
            SetEventFlagID(670135, ON);
        }
        if (EventFlag(11000040)) {
            SetEventFlagID(670330, ON);
        }
        if (EventFlag(11000041)) {
            SetEventFlagID(670331, ON);
        }
        if (EventFlag(11000042)) {
            SetEventFlagID(670332, ON);
        }
        if (EventFlag(11000043)) {
            SetEventFlagID(670333, ON);
        }
        if (EventFlag(11000044)) {
            SetEventFlagID(670334, ON);
        }
        if (EventFlag(11050040)) {
            SetEventFlagID(670730, ON);
        }
        if (EventFlag(11050041)) {
            SetEventFlagID(670731, ON);
        }
        if (EventFlag(12010040)) {
            SetEventFlagID(670610, ON);
        }
        if (EventFlag(12010041)) {
            SetEventFlagID(670611, ON);
        }
        if (EventFlag(12010042)) {
            SetEventFlagID(670612, ON);
        }
        if (EventFlag(12010043)) {
            SetEventFlagID(670613, ON);
        }
        if (EventFlag(12010044)) {
            SetEventFlagID(670614, ON);
        }
        if (EventFlag(12010045)) {
            SetEventFlagID(670615, ON);
        }
        if (EventFlag(12010046)) {
            SetEventFlagID(670616, ON);
        }
        if (EventFlag(12020040)) {
            SetEventFlagID(670620, ON);
        }
        if (EventFlag(12020041)) {
            SetEventFlagID(670621, ON);
        }
        if (EventFlag(12020042)) {
            SetEventFlagID(670622, ON);
        }
        if (EventFlag(12020043)) {
            SetEventFlagID(670623, ON);
        }
        if (EventFlag(12020044)) {
            SetEventFlagID(670624, ON);
        }
        if (EventFlag(12020045)) {
            SetEventFlagID(670625, ON);
        }
        if (EventFlag(12020046)) {
            SetEventFlagID(670626, ON);
        }
        if (EventFlag(12030040)) {
            SetEventFlagID(670630, ON);
        }
        if (EventFlag(12030041)) {
            SetEventFlagID(670631, ON);
        }
        if (EventFlag(12030042)) {
            SetEventFlagID(670632, ON);
        }
        if (EventFlag(12030043)) {
            SetEventFlagID(670633, ON);
        }
        if (EventFlag(12030044)) {
            SetEventFlagID(670634, ON);
        }
        if (EventFlag(12050040)) {
            SetEventFlagID(670650, ON);
        }
        if (EventFlag(12050041)) {
            SetEventFlagID(670651, ON);
        }
        if (EventFlag(12050042)) {
            SetEventFlagID(670652, ON);
        }
        if (EventFlag(12070040)) {
            SetEventFlagID(670670, ON);
        }
        if (EventFlag(12070041)) {
            SetEventFlagID(670671, ON);
        }
        if (EventFlag(13000040)) {
            SetEventFlagID(670740, ON);
        }
        if (EventFlag(13000041)) {
            SetEventFlagID(670741, ON);
        }
        if (EventFlag(13000042)) {
            SetEventFlagID(670742, ON);
        }
        if (EventFlag(13000043)) {
            SetEventFlagID(670743, ON);
        }
        if (EventFlag(13000044)) {
            SetEventFlagID(670744, ON);
        }
        if (EventFlag(13000045)) {
            SetEventFlagID(670745, ON);
        }
        if (EventFlag(13000046)) {
            SetEventFlagID(670746, ON);
        }
        if (EventFlag(13000047)) {
            SetEventFlagID(670747, ON);
        }
        if (EventFlag(14000040)) {
            SetEventFlagID(670230, ON);
        }
        if (EventFlag(14000041)) {
            SetEventFlagID(670231, ON);
        }
        if (EventFlag(14000042)) {
            SetEventFlagID(670232, ON);
        }
        if (EventFlag(14000043)) {
            SetEventFlagID(670233, ON);
        }
        if (EventFlag(15000040)) {
            SetEventFlagID(670530, ON);
        }
        if (EventFlag(15000041)) {
            SetEventFlagID(670531, ON);
        }
        if (EventFlag(15000042)) {
            SetEventFlagID(670532, ON);
        }
        if (EventFlag(15000044)) {
            SetEventFlagID(670534, ON);
        }
        if (EventFlag(15000045)) {
            SetEventFlagID(670535, ON);
        }
        if (EventFlag(15000046)) {
            SetEventFlagID(670536, ON);
        }
        if (EventFlag(15000047)) {
            SetEventFlagID(670537, ON);
        }
        if (EventFlag(15000049)) {
            SetEventFlagID(670539, ON);
        }
        if (EventFlag(16000040)) {
            SetEventFlagID(670350, ON);
        }
        if (EventFlag(16000041)) {
            SetEventFlagID(670351, ON);
        }
        if (EventFlag(16000042)) {
            SetEventFlagID(670352, ON);
        }
        if (EventFlag(16000043)) {
            SetEventFlagID(670353, ON);
        }
        if (EventFlag(16000044)) {
            SetEventFlagID(670354, ON);
        }
        if (EventFlag(19000040)) {
            SetEventFlagID(670750, ON);
        }
        if (EventFlag(30000040)) {
            SetEventFlagID(670160, ON);
        }
        if (EventFlag(30010040)) {
            SetEventFlagID(670161, ON);
        }
        if (EventFlag(30020040)) {
            SetEventFlagID(670162, ON);
        }
        if (EventFlag(30110040)) {
            SetEventFlagID(670163, ON);
        }
        if (EventFlag(30040040)) {
            SetEventFlagID(670164, ON);
        }
        if (EventFlag(30050040)) {
            SetEventFlagID(670260, ON);
        }
        if (EventFlag(30030040)) {
            SetEventFlagID(670261, ON);
        }
        if (EventFlag(30060040)) {
            SetEventFlagID(670262, ON);
        }
        if (EventFlag(30080040)) {
            SetEventFlagID(670360, ON);
        }
        if (EventFlag(30090040)) {
            SetEventFlagID(670361, ON);
        }
        if (EventFlag(30100040)) {
            SetEventFlagID(670362, ON);
        }
        if (EventFlag(30120040)) {
            SetEventFlagID(670363, ON);
        }
        if (EventFlag(30070040)) {
            SetEventFlagID(670364, ON);
        }
        if (EventFlag(30140040)) {
            SetEventFlagID(670460, ON);
        }
        if (EventFlag(30150040)) {
            SetEventFlagID(670461, ON);
        }
        if (EventFlag(30160040)) {
            SetEventFlagID(670462, ON);
        }
        if (EventFlag(30170040)) {
            SetEventFlagID(670560, ON);
        }
        if (EventFlag(30180040)) {
            SetEventFlagID(670561, ON);
        }
        if (EventFlag(30190040)) {
            SetEventFlagID(670562, ON);
        }
        if (EventFlag(30200040)) {
            SetEventFlagID(670563, ON);
        }
        if (EventFlag(31020040)) {
            SetEventFlagID(670170, ON);
        }
        if (EventFlag(31010040)) {
            SetEventFlagID(670171, ON);
        }
        if (EventFlag(31000040)) {
            SetEventFlagID(670172, ON);
        }
        if (EventFlag(31030040)) {
            SetEventFlagID(670173, ON);
        }
        if (EventFlag(31150040)) {
            SetEventFlagID(670174, ON);
        }
        if (EventFlag(31170040)) {
            SetEventFlagID(670175, ON);
        }
        if (EventFlag(31040040)) {
            SetEventFlagID(670270, ON);
        }
        if (EventFlag(31050040)) {
            SetEventFlagID(670271, ON);
        }
        if (EventFlag(31060040)) {
            SetEventFlagID(670272, ON);
        }
        if (EventFlag(31070040)) {
            SetEventFlagID(670370, ON);
        }
        if (EventFlag(31090040)) {
            SetEventFlagID(670371, ON);
        }
        if (EventFlag(31180040)) {
            SetEventFlagID(670372, ON);
        }
        if (EventFlag(31190040)) {
            SetEventFlagID(670373, ON);
        }
        if (EventFlag(31210040)) {
            SetEventFlagID(670470, ON);
        }
        if (EventFlag(31100040)) {
            SetEventFlagID(670471, ON);
        }
        if (EventFlag(31200040)) {
            SetEventFlagID(670472, ON);
        }
        if (EventFlag(31110040)) {
            SetEventFlagID(670473, ON);
        }
        if (EventFlag(31120040)) {
            SetEventFlagID(670570, ON);
        }
        if (EventFlag(31220040)) {
            SetEventFlagID(670571, ON);
        }
        if (EventFlag(32000040)) {
            SetEventFlagID(670180, ON);
        }
        if (EventFlag(32010040)) {
            SetEventFlagID(670181, ON);
        }
        if (EventFlag(32020040)) {
            SetEventFlagID(670280, ON);
        }
        if (EventFlag(32040040)) {
            SetEventFlagID(670380, ON);
        }
        if (EventFlag(32050040)) {
            SetEventFlagID(670381, ON);
        }
        if (EventFlag(32070040)) {
            SetEventFlagID(670480, ON);
        }
        if (EventFlag(32080040)) {
            SetEventFlagID(670481, ON);
        }
        if (EventFlag(32110040)) {
            SetEventFlagID(670580, ON);
        }
        if (EventFlag(34100040)) {
            SetEventFlagID(670190, ON);
        }
        if (EventFlag(34110040)) {
            SetEventFlagID(670290, ON);
        }
        if (EventFlag(34120040)) {
            SetEventFlagID(670390, ON);
        }
        if (EventFlag(34120041)) {
            SetEventFlagID(670391, ON);
        }
        if (EventFlag(34130040)) {
            SetEventFlagID(670490, ON);
        }
        if (EventFlag(35000040)) {
            SetEventFlagID(670340, ON);
        }
        if (EventFlag(35000041)) {
            SetEventFlagID(670341, ON);
        }
        if (EventFlag(35000042)) {
            SetEventFlagID(670342, ON);
        }
        if (EventFlag(39200040)) {
            SetEventFlagID(670240, ON);
        }
        if (EventFlag(39200041)) {
            SetEventFlagID(670241, ON);
        }
        if (EventFlag(1060410040)) {
            SetEventFlagID(670100, ON);
        }
        if (EventFlag(1060420040)) {
            SetEventFlagID(670101, ON);
        }
        if (EventFlag(1060430040)) {
            SetEventFlagID(670102, ON);
        }
        if (EventFlag(1060430041)) {
            SetEventFlagID(670103, ON);
        }
        if (EventFlag(1060430042)) {
            SetEventFlagID(670104, ON);
        }
        if (EventFlag(1060430043)) {
            SetEventFlagID(670105, ON);
        }
        if (EventFlag(1060440040)) {
            SetEventFlagID(670106, ON);
        }
        if (EventFlag(1060330040)) {
            SetEventFlagID(670200, ON);
        }
        if (EventFlag(1060340040)) {
            SetEventFlagID(670201, ON);
        }
        if (EventFlag(1060340041)) {
            SetEventFlagID(670202, ON);
        }
        if (EventFlag(1060340043)) {
            SetEventFlagID(670203, ON);
        }
        if (EventFlag(1060350040)) {
            SetEventFlagID(670204, ON);
        }
        if (EventFlag(1060380040)) {
            SetEventFlagID(670205, ON);
        }
        if (EventFlag(1035530040)) {
            SetEventFlagID(670300, ON);
        }
        if (EventFlag(1036520040)) {
            SetEventFlagID(670301, ON);
        }
        if (EventFlag(1036540040)) {
            SetEventFlagID(670302, ON);
        }
        if (EventFlag(1036540041)) {
            SetEventFlagID(670303, ON);
        }
        if (EventFlag(1037530040)) {
            SetEventFlagID(670304, ON);
        }
        if (EventFlag(1038520040)) {
            SetEventFlagID(670305, ON);
        }
        if (EventFlag(1039540040)) {
            SetEventFlagID(670306, ON);
        }
        if (EventFlag(1040530040)) {
            SetEventFlagID(670307, ON);
        }
        if (EventFlag(1042540040)) {
            SetEventFlagID(670308, ON);
        }
        if (EventFlag(1044530040)) {
            SetEventFlagID(670309, ON);
        }
        if (EventFlag(1045520040)) {
            SetEventFlagID(670310, ON);
        }
        if (EventFlag(1046400040)) {
            SetEventFlagID(670400, ON);
        }
        if (EventFlag(1047400040)) {
            SetEventFlagID(670401, ON);
        }
        if (EventFlag(1048370040)) {
            SetEventFlagID(670402, ON);
        }
        if (EventFlag(1049380040)) {
            SetEventFlagID(670403, ON);
        }
        if (EventFlag(1049380041)) {
            SetEventFlagID(670404, ON);
        }
        if (EventFlag(1050400040)) {
            SetEventFlagID(670405, ON);
        }
        if (EventFlag(1051360040)) {
            SetEventFlagID(670406, ON);
        }
        if (EventFlag(1051370040)) {
            SetEventFlagID(670407, ON);
        }
        if (EventFlag(1051400040)) {
            SetEventFlagID(670408, ON);
        }
        if (EventFlag(1052410040)) {
            SetEventFlagID(670409, ON);
        }
        if (EventFlag(1047510840)) {
            SetEventFlagID(670500, ON);
        }
        if (EventFlag(1053570840)) {
            SetEventFlagID(670501, ON);
        }
        if (EventFlag(1052530840)) {
            SetEventFlagID(670502, ON);
        }
        if (EventFlag(1052570840)) {
            SetEventFlagID(670503, ON);
        }
        if (EventFlag(1051570840)) {
            SetEventFlagID(670504, ON);
        }
        if (EventFlag(1051570841)) {
            SetEventFlagID(670505, ON);
        }
        if (EventFlag(1049560840)) {
            SetEventFlagID(670506, ON);
        }
        if (EventFlag(1049570840)) {
            SetEventFlagID(670507, ON);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

// ? (DLC)
$Event(6910, Restart, function() {
    EndIf(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(124)) {
            SetEventFlagID(21000500, ON);
        }
        SetThisEventSlot(ON);
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

// Steam Achievement Awarding - AchievementID, EventFlag, Delay (seconds)
$Event(9300, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4));
    WaitFixedTimeSeconds(X8_4);
    //AwardAchievement(X0_4);
});

$Event(9360, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4));
    WaitFixedTimeSeconds(X8_4);
    StartPS5Activity(X0_4);
});

$Event(9375, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4));
    WaitFixedTimeSeconds(X8_4);
    EndPS5Activity(X0_4);
});

$Event(9390, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X0_4));
    if (0 != X4_4) {
        if (!EventFlag(X4_4)) {
            flag |= EventFlag(X4_4);
        }
    }
    if (0 != X8_4) {
        if (!EventFlag(X8_4)) {
            flag |= EventFlag(X8_4);
        }
    }
    if (0 != X12_4) {
        if (!EventFlag(X12_4)) {
            flag |= EventFlag(X12_4);
        }
    }
    if (0 != X16_4) {
        if (!EventFlag(X16_4)) {
            flag |= EventFlag(X16_4);
        }
    }
    if (0 != X20_4) {
        if (!EventFlag(X20_4)) {
            flag |= EventFlag(X20_4);
        }
    }
    WaitFor(flag);
    SetThisEventSlot(ON);
});

// ? (DLC)
$Event(9440, Default, function() {
    if (PlayerIsInOwnWorld()) {
        EndIf(EventFlag(9440));
        WaitFor(EventFlag(2053460600) && EventFlag(2050400600) && PlayerIsInOwnWorld());
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(9440, ON);
        }
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(9820, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (0 != X0_4) {
        EndIf(EventFlag(X0_4));
    }
    WaitFor(CharacterHasSpEffect(10000, X8_4));
    SetEventFlagID(X0_4, ON);
    AwardItemsIncludingClients(X4_4);
    WaitFixedTimeSeconds(1.2);
    RestartEvent();
});

$Event(65810, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (PlayerIsInOwnWorld()) {
        EndIf(EventFlag(X0_4));
        onlineFlag &= PlayerIsInOwnWorld();
        flag |= EventFlag(X4_4);
        if (0 != X8_4) {
            flag |= EventFlag(X8_4);
        }
        if (0 != X12_4) {
            flag |= EventFlag(X12_4);
        }
        if (0 != X16_4) {
            flag |= EventFlag(X16_4);
        }
        if (0 != X20_4) {
            flag |= EventFlag(X20_4);
        }
        onlineFlag &= flag;
        WaitFor(onlineFlag);
        SetEventFlagID(X0_4, ON);
        if (!EventFlag(65800)) {
            SetEventFlagID(65800, ON);
        }
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
});

// ? (DLC)
$Event(65910, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (PlayerIsInOwnWorld()) {
        EndIf(EventFlag(X0_4));
        onlineFlag &= PlayerIsInOwnWorld();
        flag |= EventFlag(X4_4);
        if (0 != X8_4) {
            flag |= EventFlag(X8_4);
        }
        if (0 != X12_4) {
            flag |= EventFlag(X12_4);
        }
        if (0 != X16_4) {
            flag |= EventFlag(X16_4);
        }
        if (0 != X20_4) {
            flag |= EventFlag(X20_4);
        }
        onlineFlag &= flag;
        WaitFor(onlineFlag);
        SetEventFlagID(X0_4, ON);
        if (!EventFlag(65800)) {
            SetEventFlagID(65800, ON);
        }
        EndEvent();
    }
L15:
    WaitFor(PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(1);
});

$Event(1910, Default, function(X0_4, X4_4) {
    WaitFor(FieldBattleBGMActive(X0_4));
    SetEventFlagID(X4_4, ON);
    WaitFor(!FieldBattleBGMActive(X0_4));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(9910, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X0_4) || CharacterDead(10000));
    SetEventFlagID(X0_4, OFF);
    BatchSetEventFlags(1042330101, 1042330102, OFF);
    BatchSetEventFlags(1043330101, 1043330101, OFF);
    BatchSetEventFlags(1044330101, 1044330101, OFF);
    BatchSetEventFlags(1045330101, 1045330102, OFF);
    BatchSetEventFlags(1042320101, 1042320102, OFF);
    BatchSetEventFlags(1043320101, 1043320101, OFF);
    BatchSetEventFlags(1044320101, 1044320101, OFF);
    BatchSetEventFlags(1043360101, 1043360102, OFF);
    BatchSetEventFlags(1042370101, 1042370101, OFF);
    BatchSetEventFlags(1043370101, 1043370101, OFF);
    BatchSetEventFlags(1044370101, 1044370102, OFF);
    BatchSetEventFlags(1042390101, 1042390103, OFF);
    BatchSetEventFlags(1042350101, 1042350102, OFF);
    BatchSetEventFlags(1040370101, 1040370101, OFF);
    BatchSetEventFlags(1045350101, 1045350101, OFF);
    BatchSetEventFlags(1040370111, 1040370111, OFF);
    BatchSetEventFlags(1044370111, 1044370112, OFF);
    BatchSetEventFlags(1043390101, 1043390102, OFF);
    RestartEvent();
});

$Event(3040, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(9413));
    if (!EventFlag(9412)) {
        if (EventFlag(9411)) {
            if (!EventFlag(9130)) {
                if (!InArea(10000, 1051362220)) {
                    SetNetworkconnectedEventFlagID(9411, OFF);
                    FreezeTime(false);
                    SetNetworkconnectedEventFlagID(1051362702, OFF);
                    SetEventFlagID(3618, ON);
                }
            }
        }
L20:
        if (!EventFlag(9411)) {
            if (!EventFlag(9410)) {
                WaitFor(PlayerIsInOwnWorld() && EventFlag(1051360800));
                // && (EventFlag(1044369223) || EventFlag(1034499224) || EventFlag(3063))); // Festival
                if (PlayerIsInOwnWorld()) {
                    SetNetworkconnectedEventFlagID(9410, ON);
                }
            }
L0:
            WaitFor(PlayerIsInOwnWorld() && EventFlag(1051362702));
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(9411, ON);
                SetEventFlagID(3618, ON);
            }
        }
L1:
        FreezeTime(true);
        WaitFor(PlayerIsInOwnWorld() && EventFlag(310));
        FreezeTime(false);
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(9411, ON);
        }
    }
L2:
    flagOnline = EventFlag(9130) && !EventFlag(1051369360) && PlayerIsInOwnWorld();
    area = InArea(10000, 1051362220);
    WaitFor(flagOnline || area);
    EndIf(area.Passed);
    SetNetworkconnectedEventFlagID(9413, ON);
});

$Event(3041, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(9000));
    EndIf(!EventFlag(11109657));
    EndIf(EventFlag(3002));
    SetEventFlagID(9001, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(15000020, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(9001, OFF);
    SetEventFlagID(3002, ON);
});

$Event(3042, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (AnyBatchEventFlags(76100, 76199)) {
        SetEventFlagID(3061, ON);
        EndEvent();
    }
    SetEventFlagID(3061, OFF);
    WaitFor(AnyBatchEventFlags(76100, 76199));
    SetEventFlagID(3061, ON);
    EndEvent();
});

$Event(3043, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (AnyBatchEventFlags(76200, 76299)) {
        SetEventFlagID(3062, ON);
        EndEvent();
    }
    SetEventFlagID(3062, OFF);
    WaitFor(AnyBatchEventFlags(76200, 76299));
    SetEventFlagID(3062, ON);
    EndEvent();
});

$Event(3044, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (AnyBatchEventFlags(76300, 76399)) {
        SetEventFlagID(3063, ON);
        EndEvent();
    }
    SetEventFlagID(3063, OFF);
    WaitFor(AnyBatchEventFlags(76300, 76399));
    SetEventFlagID(3063, ON);
    EndEvent();
});

$Event(3045, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (AnyBatchEventFlags(76400, 76499)) {
        SetEventFlagID(3064, ON);
        EndEvent();
    }
    SetEventFlagID(3064, OFF);
    WaitFor(AnyBatchEventFlags(76400, 76499));
    SetEventFlagID(3064, ON);
    EndEvent();
});

$Event(3046, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (AnyBatchEventFlags(76500, 76599)) {
        SetEventFlagID(3065, ON);
        EndEvent();
    }
    SetEventFlagID(3065, OFF);
    WaitFor(AnyBatchEventFlags(76500, 76599));
    SetEventFlagID(3065, ON);
    EndEvent();
});

$Event(3049, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    flag = AnyBatchEventFlags(3740, 3748) && EventFlag(3741);
    flag2 = AnyBatchEventFlags(3765, 3767) && EventFlag(3761);
    flag3 = AnyBatchEventFlags(3565, 3568) && EventFlag(3561);
    flag4 = AnyBatchEventFlags(3605, 3616) && (EventFlag(3601) || EventFlag(3603));
    WaitFor(flag || flag2 || flag3 || flag4);
    if (!flag.Passed) {
        SetEventFlagID(1034509403, ON);
    }
L0:
    if (!flag2.Passed) {
        SetEventFlagID(1034499202, ON);
        SetEventFlagID(1034499204, ON);
    }
L1:
    if (!flag3.Passed) {
        SetEventFlagID(1034509302, ON);
    }
L2:
    if (!flag4.Passed) {
        SetEventFlagID(1045379209, ON);
    }
    if (AnyBatchEventFlags(3740, 3748) && EventFlag(3740)) {
        BatchSetNetworkconnectedEventFlags(3740, 3743, OFF);
        SetNetworkconnectedEventFlagID(3741, ON);
    }
    if (AnyBatchEventFlags(3765, 3767) && EventFlag(3760)) {
        BatchSetNetworkconnectedEventFlags(3760, 3763, OFF);
        SetNetworkconnectedEventFlagID(3761, ON);
    }
    if (AnyBatchEventFlags(3565, 3568) && EventFlag(3560)) {
        BatchSetNetworkconnectedEventFlags(3560, 3563, OFF);
        SetNetworkconnectedEventFlagID(3561, ON);
    }
    if (AnyBatchEventFlags(3605, 3616) && EventFlag(3600)) {
        BatchSetNetworkconnectedEventFlags(3600, 3603, OFF);
        SetNetworkconnectedEventFlagID(3601, ON);
    }
    flag5 = AnyBatchEventFlags(3740, 3748) && EventFlag(3741);
    flag6 = AnyBatchEventFlags(3765, 3767)
        && EventFlag(3761)
        && AnyBatchEventFlags(3565, 3568)
        && EventFlag(3561);
    flag7 = AnyBatchEventFlags(3605, 3616) && (EventFlag(3601) || EventFlag(3603));
    WaitFor(!(flag5 || flag6 || flag7 || cond));
    RestartEvent();
});

$Event(3050, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(114));
    //EndIf(EventFlag(400159)); // Unsure which one is the right one and which one is outdated
    WaitFor(EventFlag(12019280) && !EventFlag(12012716));
    RemoveItemFromPlayer(ItemType.Goods, 8146, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 8187, 12019280, 1);
    AwardItemLot(101590);
    EndEvent();
});

$Event(3051, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400033));
    EndIf(EventFlag(3383));
    WaitFor(EventFlag(400031) && EventFlag(3383) && !EventFlag(35009209));
    EndIf(EventFlag(400033));
    RemoveItemFromPlayer(ItemType.Goods, 8154, 1);
    AwardItemLot(100330);
    EndEvent();
});

$Event(3052, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400410));
    EndIf(EventFlag(4103));
    WaitFor(EventFlag(1036419209) && !EventFlag(1036412703));
    AwardItemLot(104100);
    EndEvent();
});

$Event(3053, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60818));
    EndIf(EventFlag(3683));
    WaitFor(EventFlag(31009218) || EventFlag(1038419267) || EventFlag(1037549213));
    SetEventFlagID(60818, ON);
    AwardGesture(40);
    EndEvent();
});

$Event(3054, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60830));
    WaitFor(EventFlag(4703));
    EndIf(EventFlag(60830));
    SetEventFlagID(60830, ON);
    AwardGesture(73);
    EndEvent();
});

// Baldachin's Blessing Debuff Handler
$Event(3055, Restart, function() {
    DisableNetworkSync();
    if (!CharacterHasSpEffect(10000, 503360)) {
        WaitFor(PlayerHasItem(ItemType.Goods, 3360));
        SetSpEffect(10000, 503360);
    }
L0:
    WaitFor(
        !PlayerHasItem(ItemType.Goods, 3360)
            && !CharacterHasSpEffect(10000, 503355)
            && !CharacterHasSpEffect(10000, 503356));
    SetSpEffect(10000, 503359);
    RestartEvent();
});

$Event(3056, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    flag = EventFlag(1051587800) || EventFlag(400130);
    WaitFor(flag || EventFlag(110));
    GotoIf(L0, flag.Passed);
    Goto(L1);
L0:
    if (!EventFlag(1035429213)) {
        SetEventFlagID(1035429211, ON);
        SetEventFlagID(1035429213, ON);
    }
    WaitFor(EventFlag(110));
L1:
    SetEventFlagID(1035429211, OFF);
    EndEvent();
});

$Event(3058, Restart, function() {
    EndIf(PlayerIsInOwnWorld());
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 9721));
    SetEventFlagID(7700, ON);
});

$Event(3059, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    WaitFor(EventFlag(7700));
    SetEventFlagID(7700, OFF);
    if (!EventFlag(1035449235)) {
        if (EventFlag(1035449207)) {
            IncrementEventValue(1035449230, 3, 5);
            if (EventValue(1035449230, 5) >= 3) {
                SetEventFlagID(1035449235, ON);
                SetEventFlagID(3198, ON);
            }
        }
    }
L0:
    SaveRequest();
    EndEvent();
});

$Event(3080, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(9433));
    WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 290500, 290999) >= 4);
    SetEventFlagID(9433, ON);
    EndEvent();
});

$Event(3081, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    SetEventFlagID(X20_4, OFF);
    SetEventFlagID(X24_4, OFF);
    if (EventFlag(3425) && (EventFlag(1037429207) || EventFlag(1037429209) || EventFlag(1037429205))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(3426) && (EventFlag(1038519205) || EventFlag(1038519206)) && EventFlag(1038519207)) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(3426) && (EventFlag(1038519205) || EventFlag(1038519206)) && EventFlag(1038509205)) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(3427) && EventFlag(16009305) && !EventFlag(16009306)) {
        SetEventFlagID(X12_4, ON);
    }
    if (EventFlag(3427) && EventFlag(16009305) && EventFlag(16009306)) {
        SetEventFlagID(X16_4, ON);
    }
    if (EventFlag(3428)) {
        SetEventFlagID(X16_4, ON);
    }
    if (EventFlag(3430) && EventFlag(16009335)) {
        SetEventFlagID(X16_4, ON);
    }
    if (EventFlag(3431) && EventFlag(16009335)) {
        SetEventFlagID(X16_4, ON);
    }
    if (EventFlag(3429) && (EventFlag(16009326) || EventFlag(16009327))) {
        SetEventFlagID(X20_4, ON);
    }
    if (EventFlag(3431) && !EventFlag(16009327) && EventFlag(16009328)) {
        SetEventFlagID(X20_4, ON);
    }
    if (EventFlag(3431) && !EventFlag(16009319)) {
        SetEventFlagID(X24_4, ON);
    }
    if (EventFlag(3431) && EventFlag(400091)) {
        SetEventFlagID(X24_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3425)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037429205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037429207)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037429209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3426)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038519205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038519206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038519207)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038509205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3427)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009305)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009306)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3428)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3430)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009335)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3431)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009335)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3429)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009326)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009327)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009328)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009319)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400091));
    RestartEvent();
});

$Event(3082, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if ((EventFlag(3185) || EventFlag(3187) || EventFlag(3191))
        && (EventFlag(1042369206)
            || EventFlag(1042369225)
            || EventFlag(1042369226)
            || EventFlag(1042369235))) {
        SetEventFlagID(X0_4, ON);
    }
    if ((EventFlag(3188) && (EventFlag(1035449205) || EventFlag(1035449206)))
        || EventFlag(3189)
        || EventFlag(3190)) {
        SetEventFlagID(X4_4, ON);
    }
    flag = EventFlag(3183) || EventFlag(12059166) || flag2;
    flag2 = EventFlag(400036) && EventFlag(400037);
    if (flag2) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3185)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042369206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3187)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042369225)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042369226)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3191)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042369235)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3188)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035449205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035449206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3189)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3190)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3183)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12059166)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400036)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400037));
    RestartEvent();
});

$Event(3083, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if ((EventFlag(3105) && (EventFlag(16009208) || EventFlag(16009206)))
        || EventFlag(3106)
        || EventFlag(3107)
        || EventFlag(3108)) {
        SetEventFlagID(X0_4, ON);
    }
    if (((EventFlag(3109) || EventFlag(3110) || EventFlag(3111))
        && (EventFlag(16009255) || EventFlag(16009256) || EventFlag(16009258)))
        || (!EventFlag(16009208) && EventFlag(71600) && EventFlag(3109))) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3105)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3106)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3107)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3108)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3109)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3110)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3111)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009256)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009258)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 71600));
    RestartEvent();
});

$Event(3084, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if (EventFlag(4105) && (EventFlag(1036419205) || EventFlag(1036419206))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(1036419209) || (EventFlag(4103) && EventFlag(400412))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(4106) && (EventFlag(1047589206) || EventFlag(1047582700))) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4105)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036419205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036419206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036419209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4103)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400412)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4106)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1047589206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1047582700));
    RestartEvent();
});

$Event(3085, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if ((EventFlag(3688) || EventFlag(3693)) && (EventFlag(1037549206) || EventFlag(1037549207))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(400181) && EventFlag(400189)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3688)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3693)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037549206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037549207)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400181)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400189));
    RestartEvent();
});

$Event(3086, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    if (EventFlag(1044389206) && (EventFlag(3625) || (EventFlag(3631) && EventFlag(1044389209)))) {
        SetEventFlagID(X0_4, ON);
    }
    if ((EventFlag(3626) || (EventFlag(3631) && EventFlag(1043359259)))
        && (EventFlag(1043359255) || EventFlag(1043359256) || EventFlag(1043359257))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(1035469208) && (EventFlag(3627) || (EventFlag(3631) && EventFlag(1035469209)))) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(1039529205) && (EventFlag(3630) || (EventFlag(3631) && EventFlag(1039529209)))) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3625)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3631)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1044389209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1044389206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3626)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1043359259)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1043359255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1043359256)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1043359257)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3627)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035469209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035469208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3630)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039529209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039529205));
    RestartEvent();
});

$Event(3087, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if (EventFlag(3885) && (EventFlag(1042389255) || EventFlag(1042389256))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(400293) && EventFlag(400294) && EventFlag(400299)) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(3886) && (EventFlag(16009455) || EventFlag(16009456) || EventFlag(16009460))) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3885)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042389255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1042389256)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400293)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400294)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400299)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3886)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009455)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009456)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009460));
    RestartEvent();
});

$Event(3088, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    if (EventFlag(4145) && (EventFlag(1036439205) || EventFlag(1036439206))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(400300) && EventFlag(400309)) {
        SetEventFlagID(X4_4, ON);
    }
    if ((EventFlag(4146) || EventFlag(4147)) && EventFlag(1044529256)) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(400308) && EventFlag(400309)) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4145)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036439205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036439206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400300)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400309)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4146)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4147)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1044529256)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400308));
    RestartEvent();
});

$Event(3089, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(34149201));
    WaitFor(EventFlag(62528) || EventFlag(34149200));
    SetEventFlagID(34149201, ON);
    EndEvent();
});

$Event(3090, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(62022) && EventFlag(3409)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(62031) && EventFlag(118)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 62022)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3409)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 62031)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 118));
    RestartEvent();
});

$Event(3091, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (!(EventFlag(1051369358) && EventFlag(9410) && !EventFlag(9412) && EventFlag(3747))
        && (EventFlag(1034509405) || EventFlag(1034509431))) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1051369358)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9410)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9412)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3747)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034509405)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034509431));
    RestartEvent();
});

$Event(3092, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(1034499205) || EventFlag(1034499238) || EventFlag(1034499233)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034499205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034499238)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034499233));
    RestartEvent();
});

$Event(3093, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(1034509310) || EventFlag(1034509312)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034509310)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1034509312));
    RestartEvent();
});

$Event(3094, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(12039155) || EventFlag(12039156)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12039155)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12039156));
    RestartEvent();
});

$Event(3095, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(1045399205) || EventFlag(1045399206)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1045399205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1045399206));
    RestartEvent();
});

$Event(3096, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(1038439205)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(35009205) || EventFlag(35009206)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038439205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 35009205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 35009206));
    RestartEvent();
});

$Event(3097, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(1051369227)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1051369227));
    RestartEvent();
});

$Event(3098, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1051369204));
    WaitFor(EventFlag(3367));
    if (!EventFlag(9118)) {
        flag |= EventFlag(9118);
    }
    if (!EventFlag(9101)) {
        flag |= EventFlag(9101);
    }
    if (!EventFlag(9104)) {
        flag |= EventFlag(9104);
    }
    if (!EventFlag(9122)) {
        flag |= EventFlag(9122);
    }
    if (!EventFlag(9120)) {
        flag |= EventFlag(9120);
    }
    if (!EventFlag(9112)) {
        flag |= EventFlag(9112);
    }
    flag |= EventFlag(6000);
    WaitFor(flag);
    SetNetworkconnectedEventFlagID(1051369204, ON);
    SetEventFlagID(3378, ON);
    EndEvent();
});

$Event(3099, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109304));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 11109806);
    if (!EventFlag(11109303)) {
L0:
        if (EventFlag(9130)) {
            SetNetworkconnectedEventFlagID(11109309, ON);
        }
        if (EventFlag(9101)) {
            SetNetworkconnectedEventFlagID(11109310, ON);
        }
        if (EventFlag(9104)) {
            SetNetworkconnectedEventFlagID(11109311, ON);
        }
        if (EventFlag(9122)) {
            SetNetworkconnectedEventFlagID(11109312, ON);
        }
        if (EventFlag(9120)) {
            SetNetworkconnectedEventFlagID(11109313, ON);
        }
        if (EventFlag(9112)) {
            SetNetworkconnectedEventFlagID(11109314, ON);
        }
        SetNetworkconnectedEventFlagID(11109303, ON);
        EndEvent();
    }
L1:
    if (!EventFlag(11109309)) {
        flag |= EventFlag(9130);
    }
    if (!EventFlag(11109310)) {
        flag |= EventFlag(9101);
    }
    if (!EventFlag(11109311)) {
        flag |= EventFlag(9104);
    }
    if (!EventFlag(11109312)) {
        flag |= EventFlag(9122);
    }
    if (!EventFlag(11109313)) {
        flag |= EventFlag(9120);
    }
    if (!EventFlag(11109314)) {
        flag |= EventFlag(9112);
    }
    flag |= (EventFlag(11109309)
        && EventFlag(11109310)
        && EventFlag(11109311)
        && EventFlag(11109312)
        && EventFlag(11109313)
        && EventFlag(11109314))
        || EventFlag(6000);
    WaitFor(flag);
    SetNetworkconnectedEventFlagID(11109304, ON);
    EndEvent();
});

$Event(4600, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (AnyBatchEventFlags(3265, 3268)
        && (EventFlag(10009351) || EventFlag(10009353) || EventFlag(10009397))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(10009399) || EventFlag(10002768)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3265)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3266)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3267)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3268)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 10009351)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 10009353)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 10009397)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 10009399)
            || (EventFlag(10002768) && !EventFlag(X4_4)));
    RestartEvent();
});

$Event(4601, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    if (EventFlag(14009205) || EventFlag(14002705) || EventFlag(14002706)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlag(14009205) || ((EventFlag(14002705) || EventFlag(14002706)) && !EventFlag(X0_4)));
    RestartEvent();
});

$Event(4602, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(S0, EventFlag(16002731));
    GotoIf(S1, AnyBatchEventFlags(3448, 3449));
S0:
    SetEventFlagID(X4_4, OFF);
S1:
    if (EventFlag(1037449205) || EventFlag(1037442700)) {
        SetEventFlagID(X0_4, ON);
    }
    if (AnyBatchEventFlags(3448, 3449)
        && !EventFlag(16002731)
        && (EventFlag(16009405) || EventFlag(16009415) || EventFlag(16009416))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(1039449305) || EventFlag(1039442721)) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1037449205)
            || (EventFlag(1037442700) && !EventFlag(X0_4))
            || EventFlag(3448)
            || EventFlag(3449)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009405)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16009415)
            || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 16002731)
                && EventFlag(16009416)
                && !EventFlag(X4_4))
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039449305)
            || (EventFlag(1039442721) && !EventFlag(X8_4)));
    RestartEvent();
});

$Event(4603, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(35009306) || EventFlag(35009307) || EventFlag(35002724)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 35009306)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 35009307)
            || (EventFlag(35002724) && !EventFlag(X0_4)));
    RestartEvent();
});

$Event(4604, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if (EventFlag(1050389256) || EventFlag(1050382713)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(1050389265) && EventFlag(1050389266)) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(1038519255) && EventFlag(1038519256)) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389256)
            || (EventFlag(1050382713) && !EventFlag(X0_4))
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389265)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389266)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038519255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1038519256));
    RestartEvent();
});

$Event(4606, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (!EventFlag(7611) && !EventFlag(1050389265) && (EventFlag(1050389205) || EventFlag(1050389206))) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 7611)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389265)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1050389206));
    RestartEvent();
});

$Event(4607, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(1035539204)) {
        SetEventFlagID(X4_4, OFF);
    }
    if (EventFlag(1043399305) || EventFlag(1043392713)) {
        SetEventFlagID(X0_4, ON);
    }
    if (!EventFlag(1035539204) && (EventFlag(1039449205) || EventFlag(1039442703))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(1035539205) || EventFlag(1035532703)) {
        SetEventFlagID(X8_4, ON);
        flag |= EventFlag(400173);
    }
    flag |= EventFlag(400174) || EventFlag(400175);
    if (flag) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1043399305)
            || (EventFlag(1043392713) && !EventFlag(X0_4))
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035539204)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039449205)
            || (EventFlag(1039442703) && !EventFlag(X4_4))
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3669)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3670)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1035539205)
            || (EventFlag(1035532703) && !EventFlag(X8_4))
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400173)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400174)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400175));
    RestartEvent();
});

$Event(4608, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (AnyBatchEventFlags(3825, 3829)
        && !AnyBatchEventFlags(3821, 3822)
        && (EventFlag(1039449255) || EventFlag(1039449256))) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3825)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3826)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3827)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3828)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3829)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3821)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3822)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039449255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039449256));
    RestartEvent();
});

$Event(4609, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    if (EventFlag(3947)
        && EventFlag(1039409255)
        && EventFlag(1039409264)
        && !EventFlag(1036489213)
        && !EventFlag(1039519209)
        && !EventFlag(11109819)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(3947)
        && EventFlag(1039409255)
        && EventFlag(1036489213)
        && !EventFlag(1039519209)
        && !EventFlag(11109819)) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(3947) && EventFlag(1039409255) && EventFlag(1039519209) && !EventFlag(11109819)) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(3947) && EventFlag(1039409255) && EventFlag(11109819)) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3947)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039409255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039409264)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1036489213)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1039519209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 11109819));
    RestartEvent();
});

$Event(4611, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (AnyBatchEventFlags(4208, 4209)
        && (EventFlag(11009554) || (!EventFlag(11009555) && EventFlag(118)))
        && EventFlag(11009460)
        && !EventFlag(1051569454)) {
        SetEventFlagID(X0_4, ON);
    }
    if (AnyBatchEventFlags(4207, 4208)
        && EventFlag(1040549254)
        && EventFlag(1040549205)
        && !EventFlag(11009554)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4207)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4209)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 11009554)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 11009555)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 118)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 11009460)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1040549254)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1040549205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 1051569454));
    RestartEvent();
});

$Event(4612, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1051579201));
    SetEventFlagID(1051579201, ON);
    EndIf(!EventFlag(1051579200));
    GotoIf(L0, EventFlag(1251570400));
    GotoIf(L1, EventFlag(1247580400));
    Goto(L0);
L0:
    SetEventFlagID(1051579200, ON);
    SetEventFlagID(1047589250, OFF);
    EndEvent();
L1:
    SetEventFlagID(1051579200, OFF);
    SetEventFlagID(1047589250, ON);
    EndEvent();
});

$Event(3179, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(3160, 3164)) {
        BatchSetNetworkconnectedEventFlags(3160, 3164, OFF);
        SetNetworkconnectedEventFlagID(3160, ON);
    }
    if (!AnyBatchEventFlags(3165, 3178)) {
        BatchSetNetworkconnectedEventFlags(3165, 3178, OFF);
        SetNetworkconnectedEventFlagID(3165, ON);
    }
    if (EventFlag(3160)) {
    }
L0:
    EndEvent();
});

$Event(3239, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3238, OFF);
    if (!AnyBatchEventFlags(3220, 3224)) {
        BatchSetNetworkconnectedEventFlags(3220, 3224, OFF);
        SetNetworkconnectedEventFlagID(3220, ON);
    }
    if (EventFlag(3221) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3220, 3224, OFF);
        SetNetworkconnectedEventFlagID(3220, ON);
    }
    if (!AnyBatchEventFlags(3225, 3228)) {
        BatchSetNetworkconnectedEventFlags(3225, 3228, OFF);
        SetNetworkconnectedEventFlagID(3225, ON);
    }
    if (EventFlag(3220)) {
        if (EventFlag(110)) {
            BatchSetNetworkconnectedEventFlags(3225, 3228, OFF);
            SetNetworkconnectedEventFlagID(3226, ON);
        }
        if (EventFlag(9116)) {
            BatchSetNetworkconnectedEventFlags(3225, 3228, OFF);
            SetNetworkconnectedEventFlagID(3227, ON);
        }
        if (EventFlag(11109246)) {
            BatchSetNetworkconnectedEventFlags(3225, 3228, OFF);
            SetNetworkconnectedEventFlagID(3228, ON);
        }
        WaitFor(EventFlag(3238));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(4719, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4718, OFF);
    if (!AnyBatchEventFlags(4700, 4704)) {
        BatchSetNetworkconnectedEventFlags(4700, 4704, OFF);
        SetNetworkconnectedEventFlagID(4700, ON);
    }
    if (EventFlag(4701) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4700, 4704, OFF);
        SetNetworkconnectedEventFlagID(4700, ON);
    }
    if (!AnyBatchEventFlags(4705, 4719)) {
        BatchSetNetworkconnectedEventFlags(4705, 4719, OFF);
        SetNetworkconnectedEventFlagID(4705, ON);
    }
    if (EventFlag(4700)) {
        if (EventFlag(4717)) {
            BatchSetNetworkconnectedEventFlags(4705, 4719, OFF);
            SetNetworkconnectedEventFlagID(4705, ON);
        }
        if (EventFlag(4705) && EventFlag(1042369414)) {
            BatchSetNetworkconnectedEventFlags(4705, 4719, OFF);
            SetNetworkconnectedEventFlagID(4717, ON);
        }
    }
L0:
    SetEventFlagID(1042369414, OFF);
    WaitFor(EventFlag(4718));
    RestartEvent();
});

$Event(4739, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4720, 4723)) {
        BatchSetNetworkconnectedEventFlags(4720, 4723, OFF);
        SetNetworkconnectedEventFlagID(4720, ON);
    }
    if (!AnyBatchEventFlags(4725, 4728)) {
        BatchSetNetworkconnectedEventFlags(4725, 4728, OFF);
        SetNetworkconnectedEventFlagID(4725, ON);
    }
    if (!AnyBatchEventFlags(4730, 4733)) {
        BatchSetNetworkconnectedEventFlags(4730, 4733, OFF);
        SetNetworkconnectedEventFlagID(4730, ON);
    }
    if (!AnyBatchEventFlags(4735, 4738)) {
        BatchSetNetworkconnectedEventFlags(4735, 4738, OFF);
        SetNetworkconnectedEventFlagID(4735, ON);
    }
    if (!AnyBatchEventFlags(4740, 4743)) {
        BatchSetNetworkconnectedEventFlags(4740, 4743, OFF);
        SetNetworkconnectedEventFlagID(4740, ON);
    }
    if (!AnyBatchEventFlags(4745, 4748)) {
        BatchSetNetworkconnectedEventFlags(4745, 4748, OFF);
        SetNetworkconnectedEventFlagID(4745, ON);
    }
    if (!AnyBatchEventFlags(4750, 4753)) {
        BatchSetNetworkconnectedEventFlags(4750, 4753, OFF);
        SetNetworkconnectedEventFlagID(4750, ON);
    }
    if (!AnyBatchEventFlags(4755, 4758)) {
        BatchSetNetworkconnectedEventFlags(4755, 4758, OFF);
        SetNetworkconnectedEventFlagID(4755, ON);
    }
    if (!AnyBatchEventFlags(4760, 4763)) {
        BatchSetNetworkconnectedEventFlags(4760, 4763, OFF);
        SetNetworkconnectedEventFlagID(4760, ON);
    }
    if (!AnyBatchEventFlags(4765, 4768)) {
        BatchSetNetworkconnectedEventFlags(4765, 4768, OFF);
        SetNetworkconnectedEventFlagID(4765, ON);
    }
    if (!AnyBatchEventFlags(4770, 4773)) {
        BatchSetNetworkconnectedEventFlags(4770, 4773, OFF);
        SetNetworkconnectedEventFlagID(4770, ON);
    }
    if (!AnyBatchEventFlags(4775, 4778)) {
        BatchSetNetworkconnectedEventFlags(4775, 4778, OFF);
        SetNetworkconnectedEventFlagID(4775, ON);
    }
    if (!AnyBatchEventFlags(4780, 4783)) {
        BatchSetNetworkconnectedEventFlags(4780, 4783, OFF);
        SetNetworkconnectedEventFlagID(4780, ON);
    }
    if (!AnyBatchEventFlags(4785, 4788)) {
        BatchSetNetworkconnectedEventFlags(4785, 4788, OFF);
        SetNetworkconnectedEventFlagID(4785, ON);
    }
    if (!AnyBatchEventFlags(4790, 4793)) {
        BatchSetNetworkconnectedEventFlags(4790, 4793, OFF);
        SetNetworkconnectedEventFlagID(4790, ON);
    }
    if (!AnyBatchEventFlags(4795, 4798)) {
        BatchSetNetworkconnectedEventFlags(4795, 4798, OFF);
        SetNetworkconnectedEventFlagID(4795, ON);
    }
    if (!AnyBatchEventFlags(4800, 4803)) {
        BatchSetNetworkconnectedEventFlags(4800, 4803, OFF);
        SetNetworkconnectedEventFlagID(4800, ON);
    }
    if (!AnyBatchEventFlags(4805, 4808)) {
        BatchSetNetworkconnectedEventFlags(4805, 4808, OFF);
        SetNetworkconnectedEventFlagID(4805, ON);
    }
    if (!AnyBatchEventFlags(4810, 4813)) {
        BatchSetNetworkconnectedEventFlags(4810, 4813, OFF);
        SetNetworkconnectedEventFlagID(4810, ON);
    }
    EndEvent();
});

$Event(4759, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4740, 4744)) {
        BatchSetNetworkconnectedEventFlags(4740, 4744, OFF);
        SetNetworkconnectedEventFlagID(4740, ON);
    }
    if (EventFlag(4741) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4740, 4744, OFF);
        SetNetworkconnectedEventFlagID(4740, ON);
    }
    if (!AnyBatchEventFlags(4745, 4758)) {
        BatchSetNetworkconnectedEventFlags(4745, 4758, OFF);
        SetNetworkconnectedEventFlagID(4745, ON);
    }
    if (EventFlag(4740)) {
        if (EventFlag(1041369201) && !EventFlag(1041369202)) {
            BatchSetNetworkconnectedEventFlags(4745, 4758, OFF);
            SetNetworkconnectedEventFlagID(4746, ON);
        }
        if (EventFlag(1041369201) && EventFlag(1041369202)) {
            BatchSetNetworkconnectedEventFlags(4745, 4758, OFF);
            SetNetworkconnectedEventFlagID(4747, ON);
        }
        if (!EventFlag(1041369226)
            && !EventFlag(1044349221)
            && !EventFlag(1045369221)
            && !EventFlag(1043399221)) {
            SetEventFlagID(1041369226, ON);
            SetEventFlagID(1044349221, ON);
            SetEventFlagID(1045369221, ON);
            SetEventFlagID(1043399221, ON);
        }
        if (!(!EventFlag(1041369225)
            && !EventFlag(1044349220)
            && !EventFlag(1045369220)
            && !EventFlag(1043399220))) {
            SetNetworkconnectedEventFlagID(1041369226, ON);
            SetNetworkconnectedEventFlagID(1044349221, ON);
            SetNetworkconnectedEventFlagID(1045369221, ON);
            SetNetworkconnectedEventFlagID(1043399221, ON);
            if (EventFlag(1041369225)) {
                SetNetworkconnectedEventFlagID(1041369226, OFF);
            } else if (EventFlag(1044349220)) {
                SetNetworkconnectedEventFlagID(1044349221, OFF);
            } else if (EventFlag(1045369220)) {
                SetNetworkconnectedEventFlagID(1045369221, OFF);
            } else if (EventFlag(1043399220)) {
                SetNetworkconnectedEventFlagID(1043399221, OFF);
                Goto(L10);
            }
L10:
            SetNetworkconnectedEventFlagID(1041369225, OFF);
            SetNetworkconnectedEventFlagID(1044349220, OFF);
            SetNetworkconnectedEventFlagID(1045369220, OFF);
            SetNetworkconnectedEventFlagID(1043399220, OFF);
            Goto(L0);
        }
    }
L0:
    EndEvent();
});

$Event(4979, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4960, 4964)) {
        BatchSetNetworkconnectedEventFlags(4960, 4964, OFF);
        SetNetworkconnectedEventFlagID(4960, ON);
    }
    if (EventFlag(4961) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4960, 4964, OFF);
        SetNetworkconnectedEventFlagID(4960, ON);
    }
    if (!AnyBatchEventFlags(4965, 4979)) {
        BatchSetNetworkconnectedEventFlags(4965, 4979, OFF);
        SetNetworkconnectedEventFlagID(4965, ON);
    }
    if (EventFlag(4960)) {
        if (EventFlag(1043379201) && !EventFlag(1043379202)) {
            BatchSetNetworkconnectedEventFlags(4965, 4979, OFF);
            SetNetworkconnectedEventFlagID(4966, ON);
        }
        if (EventFlag(1043379201) && EventFlag(1043379202)) {
            BatchSetNetworkconnectedEventFlags(4965, 4979, OFF);
            SetNetworkconnectedEventFlagID(4967, ON);
        }
    }
L0:
    NoOp();
});

$Event(4999, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4980, 4984)) {
        BatchSetNetworkconnectedEventFlags(4980, 4984, OFF);
        SetNetworkconnectedEventFlagID(4980, ON);
    }
    BatchSetNetworkconnectedEventFlags(4982, 4983, OFF);
    if (EventFlag(4703)) {
        IncrementEventValue(4982, 2, 2);
    }
    if (EventFlag(4723)) {
        IncrementEventValue(4982, 2, 2);
    }
    if (EventFlag(4743)) {
        IncrementEventValue(4982, 2, 2);
    }
    if (EventFlag(4982)) {
        BatchSetNetworkconnectedEventFlags(4980, 4984, OFF);
        SetNetworkconnectedEventFlagID(4982, ON);
    }
    if (EventFlag(4983)) {
        BatchSetNetworkconnectedEventFlags(4980, 4984, OFF);
        SetNetworkconnectedEventFlagID(4983, ON);
    }
    if (EventFlag(1043379201) || EventFlag(1042389201) || EventFlag(1041369201)) {
        SetNetworkconnectedEventFlagID(4985, ON);
    }
    if (EventFlag(1043379206) || EventFlag(1042389206) || EventFlag(1041369206)) {
        SetNetworkconnectedEventFlagID(4986, ON);
    }
    EndEvent();
});

$Event(3679, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3678, OFF);
    if (!AnyBatchEventFlags(3660, 3663)) {
        BatchSetNetworkconnectedEventFlags(3660, 3663, OFF);
        SetNetworkconnectedEventFlagID(3660, ON);
    }
    if (EventFlag(3661) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3660, 3663, OFF);
        SetNetworkconnectedEventFlagID(3660, ON);
    }
    if (!AnyBatchEventFlags(3665, 3671)) {
        BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
        SetNetworkconnectedEventFlagID(3665, ON);
    }
    if (EventFlag(3660)) {
        if (EventFlag(3665) && (EventFlag(1043399307) || EventFlag(32009203))) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3666, ON);
        }
        if (EventFlag(9410) && (EventFlag(3665) || EventFlag(3666))) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3667, ON);
            SetEventFlagID(1051369259, ON);
            SetEventFlagID(1051369361, ON);
        }
        if (EventFlag(3667) && EventFlag(9130)) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3668, ON);
        }
        if (EventFlag(3668) && EventFlag(1051369266)) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3669, ON);
            SetEventFlagID(1051369361, OFF);
            SetEventFlagID(1035539208, ON);
        }
        if (EventFlag(3669) && EventFlag(1051369266) && EventFlag(1035539204)) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3670, ON);
            SetEventFlagID(1035539208, ON);
        }
        if (!EventFlag(1052520800) && EventFlag(1035539205)) {
            SetNetworkconnectedEventFlagID(1035539209, ON);
        }
        if (EventFlag(3670) && EventFlag(1052520800) && EventFlag(1035539205)) {
            BatchSetNetworkconnectedEventFlags(3665, 3671, OFF);
            SetNetworkconnectedEventFlagID(3671, ON);
            SetEventFlagID(1035539208, OFF);
        }
        WaitFor(EventFlag(3678));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3199, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3198, OFF);
    if (!AnyBatchEventFlags(3180, 3184)) {
        BatchSetNetworkconnectedEventFlags(3180, 3184, OFF);
        SetNetworkconnectedEventFlagID(3180, ON);
    }
    if (EventFlag(3181) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3180, 3184, OFF);
        SetNetworkconnectedEventFlagID(3180, ON);
    }
    if (!AnyBatchEventFlags(3185, 3199)) {
        BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
        SetNetworkconnectedEventFlagID(3185, ON);
    }
    if (EventFlag(3180)) {
        if (EventFlag(105)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3187, ON);
        }
        if (EventFlag(181)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3191, ON);
        }
        if (EventFlag(11109358)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3188, ON);
        }
        if (EventFlag(1035449235) || (EventFlag(1035449207) && EventFlag(7612))) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3189, ON);
        }
        if (EventFlag(400033)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3190, ON);
        }
        if (EventFlag(1035449226)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3192, ON);
        }
        if (EventFlag(7601)) {
            BatchSetNetworkconnectedEventFlags(3185, 3199, OFF);
            SetNetworkconnectedEventFlagID(3193, ON);
        }
        if (EventFlag(12059166)) {
            BatchSetNetworkconnectedEventFlags(3180, 3184, OFF);
            SetNetworkconnectedEventFlagID(3183, ON);
            SaveRequest();
        }
    }
L0:
    WaitFor(EventFlag(3198));
    RestartEvent();
});

$Event(3279, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3278, OFF);
    if (!AnyBatchEventFlags(3260, 3264)) {
        BatchSetNetworkconnectedEventFlags(3260, 3264, OFF);
        SetNetworkconnectedEventFlagID(3260, ON);
    }
    if (EventFlag(3261) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3260, 3264, OFF);
        SetNetworkconnectedEventFlagID(3260, ON);
    }
    if (!AnyBatchEventFlags(3265, 3269)) {
        BatchSetNetworkconnectedEventFlags(3265, 3269, OFF);
        SetNetworkconnectedEventFlagID(3265, ON);
    }
    if (EventFlag(3260)) {
        if (EventFlag(10009360) && !EventFlag(10009362)) {
            BatchSetNetworkconnectedEventFlags(3265, 3269, OFF);
            SetNetworkconnectedEventFlagID(3266, ON);
        }
        if (EventFlag(10009360) && EventFlag(10009362)) {
            BatchSetNetworkconnectedEventFlags(3265, 3269, OFF);
            SetEventFlagID(3268, ON);
        }
        if (EventFlag(4229)) {
            BatchSetNetworkconnectedEventFlags(3265, 3270, OFF);
            SetEventFlagID(3270, ON);
        } else if (EventFlag(10000800)) {
            BatchSetNetworkconnectedEventFlags(3265, 3270, OFF);
            SetEventFlagID(3269, ON);
        } else {
L10:
            if (!AnyBatchEventFlags(10009510, 10009514)) {
                BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                SetNetworkconnectedEventFlagID(10009514, ON);
            }
            if (!(!EventFlag(3260) || EventFlag(3268) || EventFlag(3269) || EventFlag(3270))) {
                if (EventFlag(10002736) && !EventFlag(10009390)) {
                    BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                    SetNetworkconnectedEventFlagID(10009510, ON);
                }
                if (EventFlag(10002737) && !EventFlag(10009391)) {
                    BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                    SetNetworkconnectedEventFlagID(10009511, ON);
                }
                if (EventFlag(10002738) && !EventFlag(10009392)) {
                    BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                    SetNetworkconnectedEventFlagID(10009512, ON);
                }
                if (EventFlag(10002739) && !EventFlag(10009393)) {
                    BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                    SetNetworkconnectedEventFlagID(10009513, ON);
                }
                if (EventFlag(10002765)) {
                    BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                    SetNetworkconnectedEventFlagID(10009514, ON);
                    Goto(L15);
                }
L15:
                BatchSetNetworkconnectedEventFlags(10002736, 10002739, OFF);
                SetNetworkconnectedEventFlagID(10002765, OFF);
            } else {
L19:
                BatchSetNetworkconnectedEventFlags(10002732, 10002739, OFF);
                BatchSetNetworkconnectedEventFlags(10009510, 10009514, OFF);
                SetNetworkconnectedEventFlagID(10002765, OFF);
                SetNetworkconnectedEventFlagID(10009514, ON);
                Goto(L20);
            }
        }
    }
L20:
    SetNetworkconnectedEventFlagID(10009350, ON);
    WaitFor(EventFlag(3278));
    RestartEvent();
L0:
    EndEvent();
});

$Event(3299, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(3280, 3284)) {
        BatchSetNetworkconnectedEventFlags(3280, 3284, OFF);
        SetNetworkconnectedEventFlagID(3280, ON);
    }
    if (!AnyBatchEventFlags(3285, 3298)) {
        BatchSetNetworkconnectedEventFlags(3285, 3298, OFF);
        SetNetworkconnectedEventFlagID(3285, ON);
    }
    if (EventFlag(3280)) {
        if (EventFlag(1043359201) && EventFlag(1044350800) && !EventFlag(1043359247)) {
            BatchSetNetworkconnectedEventFlags(3285, 3298, OFF);
            SetNetworkconnectedEventFlagID(3286, ON);
        }
        if (EventFlag(4703) || EventFlag(4723) || EventFlag(4743)) {
            BatchSetNetworkconnectedEventFlags(3285, 3298, OFF);
            SetNetworkconnectedEventFlagID(3295, ON);
        }
    }
L0:
    NoOp();
});

$Event(3259, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!AnyBatchEventFlags(X0_4, X4_4)) {
        BatchSetNetworkconnectedEventFlags(X0_4, X4_4, OFF);
        SetNetworkconnectedEventFlagID(X0_4, ON);
    }
    if (!AnyBatchEventFlags(X8_4, X12_4)) {
        BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
        SetNetworkconnectedEventFlagID(X8_4, ON);
    }
    if (EventFlag(X0_4)) {
    }
L0:
    NoOp();
});

$Event(3119, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3118, OFF);
    if (!AnyBatchEventFlags(3100, 3104)) {
        BatchSetNetworkconnectedEventFlags(3100, 3104, OFF);
        SetNetworkconnectedEventFlagID(3100, ON);
    }
    if (EventFlag(3101) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3100, 3104, OFF);
        SetNetworkconnectedEventFlagID(3100, ON);
    }
    if (!AnyBatchEventFlags(3105, 3119)) {
        BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
        SetNetworkconnectedEventFlagID(3105, ON);
    }
    if (EventFlag(3100)) {
        if (EventFlag(400073)) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3106, ON);
        }
        if (EventValue(16009260, 4) >= 3) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3107, ON);
        }
        if (EventFlag(16000800) && EventFlag(16009208)) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3108, ON);
        }
        if ((EventFlag(16000800) && !EventFlag(16009208)) || EventFlag(16009246)) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3109, ON);
        }
        if (EventFlag(16009265)) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3110, ON);
        }
        if (EventFlag(16009264)) {
            BatchSetNetworkconnectedEventFlags(3105, 3119, OFF);
            SetEventFlagID(3111, ON);
        }
    }
L0:
    WaitFor(EventFlag(3118));
    RestartEvent();
});

$Event(3399, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3398, OFF);
    if (!AnyBatchEventFlags(3380, 3383)) {
        BatchSetNetworkconnectedEventFlags(3380, 3383, OFF);
        SetNetworkconnectedEventFlagID(3380, ON);
    }
    if (!AnyBatchEventFlags(3385, 3397)) {
        BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
        SetNetworkconnectedEventFlagID(3385, ON);
    }
    if (EventFlag(3380)) {
        if (EventFlag(3385)
            && EventFlag(1045349207)
            && (EventFlag(1043319206) || EventFlag(3403) || EventFlag(3062) || EventFlag(9101))) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3386, ON);
        }
        if (EventFlag(3386)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3387, ON);
        }
        if (EventFlag(3387) && EventFlag(1039409206)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3388, ON);
        }
        if (EventFlag(3388) && EventFlag(1038419205)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3389, ON);
        }
        if (EventFlag(3389) && EventFlag(1038439206)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3390, ON);
        }
        if (EventFlag(3390) && EventFlag(1038439209)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3391, ON);
        }
        if (EventFlag(3391) && EventFlag(1036499207)) {
            BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
            SetNetworkconnectedEventFlagID(3392, ON);
        }
    }
L0:
    if (EventFlag(3392) && EventFlag(35009209)) {
        BatchSetNetworkconnectedEventFlags(3385, 3397, OFF);
        SetNetworkconnectedEventFlagID(3393, ON);
        BatchSetNetworkconnectedEventFlags(3380, 3383, OFF);
        SetNetworkconnectedEventFlagID(3383, ON);
    }
    WaitFor(EventFlag(3398));
    RestartEvent();
});

$Event(3419, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3418, OFF);
    if (!AnyBatchEventFlags(3400, 3403)) {
        BatchSetNetworkconnectedEventFlags(3400, 3403, OFF);
        SetNetworkconnectedEventFlagID(3400, ON);
    }
    if (EventFlag(3402) && !EventFlag(1045349256)) {
        BatchSetNetworkconnectedEventFlags(3400, 3403, OFF);
        SetNetworkconnectedEventFlagID(3400, ON);
    }
    if (!AnyBatchEventFlags(3405, 3417)) {
        BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
        SetNetworkconnectedEventFlagID(3405, ON);
    }
    if (EventFlag(3400)) {
        if (EventFlag(3408) && !EventFlag(1045349256)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3407, ON);
        }
        if (EventFlag(3405) && EventFlag(1043319206)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3406, ON);
            SetEventFlagID(1043319209, ON);
        }
        if (EventFlag(3406) && EventFlag(1043300800)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3407, ON);
            SetEventFlagID(1043319209, OFF);
        }
        if (EventFlag(3407) && AnyBatchEventFlags(3386, 3397) && EventFlag(1043319207)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3408, ON);
            SetEventFlagID(1045349256, ON);
        }
        if (EventFlag(3407) && AnyBatchEventFlags(3386, 3397) && EventFlag(1045342719)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3408, ON);
        }
        if (EventFlag(3408) && EventFlag(1045349255)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3409, ON);
            SetEventFlagID(1045349259, ON);
        }
        if (AnyBatchEventFlags(3405, 3408) && EventFlag(1039409206)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3409, ON);
            SetEventFlagID(1045349259, ON);
        }
        if (EventFlag(3407) && EventFlag(3385) && EventFlag(3383) && EventFlag(1043319207)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3408, ON);
            BatchSetNetworkconnectedEventFlags(3400, 3403, OFF);
            SetNetworkconnectedEventFlagID(3402, ON);
            SetEventFlagID(1045349256, ON);
        }
        if (EventFlag(3407) && EventFlag(3385) && EventFlag(3383) && EventFlag(1045342719)) {
            BatchSetNetworkconnectedEventFlags(3405, 3417, OFF);
            SetNetworkconnectedEventFlagID(3408, ON);
            BatchSetNetworkconnectedEventFlags(3400, 3403, OFF);
            SetNetworkconnectedEventFlagID(3402, ON);
        }
    }
L0:
    WaitFor(EventFlag(3418));
    RestartEvent();
    EndEvent();
});

$Event(3439, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3438, OFF);
    if (!AnyBatchEventFlags(3420, 3424)) {
        BatchSetNetworkconnectedEventFlags(3420, 3424, OFF);
        SetNetworkconnectedEventFlagID(3420, ON);
    }
    if (EventFlag(3421) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3420, 3424, OFF);
        SetNetworkconnectedEventFlagID(3420, ON);
    }
    if (!AnyBatchEventFlags(3425, 3439)) {
        BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
        SetNetworkconnectedEventFlagID(3425, ON);
    }
    if (EventFlag(3420)) {
        if (EventFlag(1037429210) && !EventFlag(1038519205) && !EventFlag(16009208)) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetNetworkconnectedEventFlagID(3426, ON);
        }
        if (EventFlag(1038519205) || EventFlag(16009208)) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetEventFlagID(3427, ON);
        }
        if (EventFlag(16009306) && EventValue(16009260, 3) >= 2) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetEventFlagID(3428, ON);
        }
        if (EventFlag(16009319)) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetEventFlagID(3429, ON);
        }
        if (EventFlag(16009327)
            && ((EventFlag(16000800) && !EventFlag(16009208)) || EventFlag(16009246))
            && !EventFlag(3689)
            && !EventFlag(3448)
            && !EventFlag(3449)
            && !EventFlag(3886)) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetEventFlagID(3430, ON);
        }
        if ((EventFlag(16009328) && !EventFlag(16009327))
            || (AnyBatchEventFlags(3425, 3428) && !EventFlag(16009319) && EventFlag(16000800))
            || EventFlag(16009335)) {
            BatchSetNetworkconnectedEventFlags(3425, 3439, OFF);
            SetEventFlagID(3431, ON);
        }
    }
L0:
    WaitFor(EventFlag(3438));
    RestartEvent();
});

$Event(3459, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3458, OFF);
    if (!AnyBatchEventFlags(3440, 3444)) {
        BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
        SetNetworkconnectedEventFlagID(3440, ON);
    }
    if (EventFlag(3442) && EventFlag(3443)) {
        BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
        SetNetworkconnectedEventFlagID(3443, ON);
    }
    if (!EventFlag(3450) && EventFlag(3440) && EventFlag(3442)) {
        BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
        SetNetworkconnectedEventFlagID(3440, ON);
    }
    if (EventFlag(3450) && EventFlag(3440) && EventFlag(3442)) {
        BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
        SetNetworkconnectedEventFlagID(3442, ON);
    }
    if (EventFlag(3441) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
        SetNetworkconnectedEventFlagID(3440, ON);
    }
    if (!AnyBatchEventFlags(3445, 3459)) {
        BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
        SetNetworkconnectedEventFlagID(3445, ON);
    }
    if (EventFlag(1039449285) && !EventFlag(1039449316)) {
        SetNetworkconnectedEventFlagID(1039449316, ON);
    }
    if (EventFlag(3440)) {
        if (AnyBatchEventFlags(3445, 3447) && EventFlag(9122)) {
            BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
            SetNetworkconnectedEventFlagID(3457, ON);
            BatchSetNetworkconnectedEventFlags(3440, 3444, OFF);
            SetNetworkconnectedEventFlagID(3443, ON);
        } else {
            if (EventFlag(1037442701) || EventFlag(1037449206) || EventFlag(110)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3446, ON);
            }
            if (EventFlag(1037449205)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3447, ON);
            }
            if (EventFlag(11109430)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3448, ON);
            }
            if ((EventFlag(16009406) && EventValue(16009260, 4) >= 1)
                || (!EventFlag(16009405) && EventFlag(9122))) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3449, ON);
            }
            if ((EventFlag(16009405) && EventFlag(9122)) || EventFlag(16009416)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3456, ON);
                SetNetworkconnectedEventFlagID(11109430, ON);
            }
            if (EventFlag(3456) && EventFlag(1039449263)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3450, ON);
            }
            if (EventFlag(3827)) {
                BatchSetNetworkconnectedEventFlags(3445, 3457, OFF);
                SetNetworkconnectedEventFlagID(3451, ON);
            }
        }
    }
L0:
    WaitFor(EventFlag(3458));
    RestartEvent();
});

$Event(3499, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(3480, 3484)) {
        BatchSetNetworkconnectedEventFlags(3480, 3484, OFF);
        SetNetworkconnectedEventFlagID(3480, ON);
    }
    if (EventFlag(3481) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3480, 3484, OFF);
        SetNetworkconnectedEventFlagID(3480, ON);
    }
    if (!AnyBatchEventFlags(3485, 3499)) {
        BatchSetNetworkconnectedEventFlags(3485, 3499, OFF);
        SetNetworkconnectedEventFlagID(3485, ON);
    }
    GotoIf(L0, !EventFlag(3480));
    if (EventFlag(182)) {
        BatchSetNetworkconnectedEventFlags(3485, 3499, OFF);
        SetEventFlagID(3486, ON);
    }
    if (EventFlag(11000500)) {
        BatchSetNetworkconnectedEventFlags(3485, 3499, OFF);
        SetEventFlagID(3487, ON);
    }
    if (EventFlag(110)) {
        BatchSetNetworkconnectedEventFlags(3485, 3499, OFF);
        SetEventFlagID(3488, ON);
    }
    if (EventFlag(118)) {
        BatchSetNetworkconnectedEventFlags(3485, 3499, OFF);
        //Finger Reader Death
        SetEventFlagID(3489, ON);
        SaveRequest();
L0:
        EndEvent();
    }
});

$Event(3559, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(3540, 3544)) {
        BatchSetNetworkconnectedEventFlags(3540, 3544, OFF);
        SetNetworkconnectedEventFlagID(3540, ON);
    }
    if (EventFlag(3541) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3540, 3544, OFF);
        SetNetworkconnectedEventFlagID(3540, ON);
    }
    if (!AnyBatchEventFlags(3545, 3559)) {
        BatchSetNetworkconnectedEventFlags(3545, 3559, OFF);
        SetNetworkconnectedEventFlagID(3545, ON);
    }
    if (EventFlag(3540)) {
        if (EventFlag(1035429210)) {
            BatchSetNetworkconnectedEventFlags(3545, 3559, OFF);
            SetEventFlagID(3546, ON);
            BatchSetNetworkconnectedEventFlags(3540, 3544, OFF);
            SetNetworkconnectedEventFlagID(3543, ON);
            SaveRequest();
        }
    }
L0:
    EndEvent();
});

$Event(3639, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3638, OFF);
    if (!AnyBatchEventFlags(3620, 3624)) {
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3620, ON);
    }
    if (EventFlag(3621) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3620, ON);
    }
    if (!AnyBatchEventFlags(3625, 3639)) {
        BatchSetNetworkconnectedEventFlags(3625, 3639, OFF);
        SetNetworkconnectedEventFlagID(3626, ON);
    }
    if (EventFlag(3623) && !EventFlag(3631)) {
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3620, ON);
        BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
        SetNetworkconnectedEventFlagID(3631, ON);
        SetEventFlagID(1049539210, ON);
        SaveRequest();
    } else if (EventFlag(3620)) {
        if (EventFlag(1043379263) && !EventFlag(1044389206)) {
            BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
            SetEventFlagID(3625, ON);
        }
        if ((EventFlag(1043379263) && EventFlag(1044389206)) || !EventFlag(1043379263)) {
            BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
            SetEventFlagID(3626, ON);
        }
        if (EventFlag(7607)) {
            BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
            SetNetworkconnectedEventFlagID(3627, ON);
        }
        if (EventFlag(1035469207)) {
            BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
            SetNetworkconnectedEventFlagID(3630, ON);
        }
        if (EventFlag(1039529206) || EventFlag(1049539210)) {
            BatchSetNetworkconnectedEventFlags(3625, 3637, OFF);
            SetNetworkconnectedEventFlagID(3631, ON);
        }
    }
L0:
    WaitFor(EventFlag(3638));
    RestartEvent();
});

$Event(3659, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3658, OFF);
    if (!AnyBatchEventFlags(3640, 3643)) {
        BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
        SetNetworkconnectedEventFlagID(3640, ON);
    }
    if (EventFlag(3641)) {
        BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
        SetNetworkconnectedEventFlagID(3640, ON);
    }
    if (!AnyBatchEventFlags(3645, 3657)) {
        BatchSetNetworkconnectedEventFlags(3645, 3657, OFF);
        SetNetworkconnectedEventFlagID(3645, ON);
    }
    if (EventFlag(3640)) {
        if (EventFlag(3645) && EventValue(1051439235, 5) >= 4) {
            BatchSetNetworkconnectedEventFlags(3645, 3657, OFF);
            SetNetworkconnectedEventFlagID(3646, ON);
            BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
            SetNetworkconnectedEventFlagID(3642, ON);
            SetEventFlagID(1051439212, ON);
        }
        if (EventFlag(3646) && EventFlag(3640)) {
            BatchSetNetworkconnectedEventFlags(3645, 3657, OFF);
            SetNetworkconnectedEventFlagID(3647, ON);
        }
        if (EventFlag(3647) && EventValue(1051439235, 5) >= 9) {
            BatchSetNetworkconnectedEventFlags(3645, 3657, OFF);
            SetNetworkconnectedEventFlagID(3648, ON);
        }
    }
L0:
    WaitFor(EventFlag(3658));
    RestartEvent();
    EndEvent();
});

$Event(3699, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3698, OFF);
    if (!AnyBatchEventFlags(3680, 3684)) {
        BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
        SetNetworkconnectedEventFlagID(3680, ON);
    }
    if (EventFlag(3681) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
        SetNetworkconnectedEventFlagID(3680, ON);
    }
    if (EventFlag(3681)) {
        BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
        SetNetworkconnectedEventFlagID(3680, ON);
        SetEventFlagID(31009207, OFF);
        SetEventFlagID(1038419265, OFF);
        SetEventFlagID(1037549209, OFF);
        SetEventFlagID(31009266, OFF);
        WaitFixedTimeFrames(1);
        if (EventFlag(3685) || EventFlag(3686)) {
            SetEventFlagID(31009207, ON);
        } else if (EventFlag(3687)) {
            SetEventFlagID(1038419265, ON);
        } else if (EventFlag(3688) || EventFlag(3693)) {
            SetEventFlagID(1037549209, ON);
        } else if (EventFlag(3691) || EventFlag(3692) || EventFlag(3694)) {
            SetEventFlagID(31009266, ON);
            Goto(L1);
        }
    }
L1:
    if (!AnyBatchEventFlags(3685, 3699)) {
        BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
        SetNetworkconnectedEventFlagID(3685, ON);
        SetNetworkconnectedEventFlagID(1038419270, ON);
        SetNetworkconnectedEventFlagID(1038419271, OFF);
        SetEventFlagID(31009219, ON);
    }
    if (EventFlag(3680)) {
        if (!EventFlag(3691)) {
            if (EventFlag(31009206)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3686, ON);
                SetNetworkconnectedEventFlagID(1038419270, ON);
                SetNetworkconnectedEventFlagID(1038419271, OFF);
            }
            if (EventFlag(31009206) && EventFlag(1038419254) && !EventFlag(16009208)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3687, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if (EventFlag(31009206)
                && EventFlag(1037549211)
                && !EventFlag(16009208)
                && !EventFlag(1037549210)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3688, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if (EventFlag(31009206)
                && EventFlag(1037549211)
                && !EventFlag(16009208)
                && EventFlag(1037549210)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3693, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if (EventFlag(31009206) && EventFlag(16009208)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3689, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if (EventFlag(3697)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3690, ON);
            }
            if (EventFlag(16009359)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3690, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if (EventFlag(1039549205)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3696, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
            }
            if ((EventFlag(1039549205) || EventFlag(3696)) && !EventFlag(31002715) && !EventFlag(9000)) {
                BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
                SetNetworkconnectedEventFlagID(3691, ON);
                SetNetworkconnectedEventFlagID(1038419270, OFF);
                SetNetworkconnectedEventFlagID(1038419271, ON);
                SetEventFlagID(31009269, ON);
            }
        }
L2:
        if (EventFlag(31000850) && !EventFlag(31009256)) {
            BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
            SetNetworkconnectedEventFlagID(3694, ON);
            SetNetworkconnectedEventFlagID(1038419270, OFF);
            SetNetworkconnectedEventFlagID(1038419271, ON);
        }
        if (EventFlag(31009256)) {
            BatchSetNetworkconnectedEventFlags(3685, 3699, OFF);
            SetNetworkconnectedEventFlagID(3692, ON);
            SetNetworkconnectedEventFlagID(1038419270, OFF);
            SetNetworkconnectedEventFlagID(1038419271, ON);
        }
    }
L0:
    WaitFor(EventFlag(3698));
    RestartEvent();
});

$Event(3719, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3718, OFF);
    if (!AnyBatchEventFlags(3700, 3704)) {
        BatchSetNetworkconnectedEventFlags(3700, 3704, OFF);
        SetNetworkconnectedEventFlagID(3700, ON);
    }
    if (EventFlag(3701) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3700, 3704, OFF);
        SetNetworkconnectedEventFlagID(3700, ON);
    }
    if (!AnyBatchEventFlags(3705, 3719)) {
        BatchSetNetworkconnectedEventFlags(3705, 3719, OFF);
        SetNetworkconnectedEventFlagID(3705, ON);
        SetEventFlagID(10007452, ON);
    }
    if (EventFlag(3700)) {
        if ((EventFlag(3705) && EventFlag(1041389413)) || EventFlag(3062)) {
            BatchSetNetworkconnectedEventFlags(3705, 3719, OFF);
            SetNetworkconnectedEventFlagID(3707, ON);
        }
        if (EventFlag(3707) && EventFlag(11109213)) {
            BatchSetNetworkconnectedEventFlags(3705, 3719, OFF);
            SetNetworkconnectedEventFlagID(3708, ON);
        }
        if (EventFlag(110)) {
            BatchSetNetworkconnectedEventFlags(3705, 3719, OFF);
            SetNetworkconnectedEventFlagID(3709, ON);
        }
    }
L0:
    WaitFor(EventFlag(3718));
    RestartEvent();
    EndEvent();
});

$Event(3879, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3878, OFF);
    if (!AnyBatchEventFlags(3860, 3864)) {
        BatchSetNetworkconnectedEventFlags(3860, 3864, OFF);
        SetNetworkconnectedEventFlagID(3860, ON);
    }
    if (EventFlag(3861) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3860, 3864, OFF);
        SetNetworkconnectedEventFlagID(3860, ON);
    }
    if (!AnyBatchEventFlags(3865, 3879)) {
        BatchSetNetworkconnectedEventFlags(3865, 3879, OFF);
        SetNetworkconnectedEventFlagID(3865, ON);
    }
    if (EventFlag(3860)) {
        if (EventFlag(11009210)) {
            BatchSetNetworkconnectedEventFlags(3865, 3879, OFF);
            SetEventFlagID(3866, ON);
        }
    }
L0:
    WaitFor(EventFlag(3878));
    RestartEvent();
});

$Event(3899, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3898, OFF);
    if (!AnyBatchEventFlags(3880, 3884)) {
        BatchSetNetworkconnectedEventFlags(3880, 3884, OFF);
        SetNetworkconnectedEventFlagID(3880, ON);
    }
    if (EventFlag(3881) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3880, 3884, OFF);
        SetNetworkconnectedEventFlagID(3880, ON);
    }
    if (!AnyBatchEventFlags(3885, 3899)) {
        BatchSetNetworkconnectedEventFlags(3885, 3899, OFF);
        SetNetworkconnectedEventFlagID(3885, ON);
    }
    if (EventFlag(3880)) {
        if (EventFlag(16009208)) {
            BatchSetNetworkconnectedEventFlags(3885, 3899, OFF);
            SetEventFlagID(3886, ON);
        }
        if (EventFlag(16009460)) {
            BatchSetNetworkconnectedEventFlags(3885, 3899, OFF);
            SetEventFlagID(3887, ON);
        }
        if (!EventFlag(16009208) && EventFlag(16000800)) {
            BatchSetNetworkconnectedEventFlags(3885, 3899, OFF);
            SetEventFlagID(3888, ON);
            BatchSetNetworkconnectedEventFlags(3880, 3884, OFF);
            SetEventFlagID(3883, ON);
        }
        SetEventFlagID(16009464, OFF);
        if (EventFlag(7605) || !EventFlag(3886) || EventFlag(118)) {
            SetEventFlagID(16009464, ON);
        }
    }
L0:
    if (EventFlag(16009460) || EventFlag(3883)) {
        if (!EventFlag(16009458) || EventFlag(7605)) {
            SetEventFlagID(400295, ON);
        }
    }
L1:
    WaitFor(EventFlag(3898));
    RestartEvent();
});

$Event(3479, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3478, OFF);
    flag = !AnyBatchEventFlags(3460, 3463);
    flag2 = !flag || !flag3;
    flag3 = EventFlag(3461) && EventFlag(3000);
    if (!flag2) {
        BatchSetNetworkconnectedEventFlags(3460, 3463, OFF);
        SetNetworkconnectedEventFlagID(3460, ON);
    }
    if (!AnyBatchEventFlags(3465, 3469)) {
        BatchSetNetworkconnectedEventFlags(3465, 3469, OFF);
        SetNetworkconnectedEventFlagID(3465, ON);
    }
    if (EventFlag(7608)) {
        BatchSetNetworkconnectedEventFlags(3460, 3463, OFF);
        SetNetworkconnectedEventFlagID(3463, ON);
    }
    if (EventFlag(3460)) {
        if (EventFlag(3465) && EventFlag(3369)) {
            BatchSetNetworkconnectedEventFlags(3465, 3469, OFF);
            SetNetworkconnectedEventFlagID(3466, ON);
        }
        if (EventFlag(1034509255) && !EventFlag(3469)) {
            SetNetworkconnectedEventFlagID(1034509259, ON);
        }
        if (EventFlag(3466) && EventFlag(1034509256) && EventFlag(9118)) {
            BatchSetNetworkconnectedEventFlags(3465, 3469, OFF);
            SetNetworkconnectedEventFlagID(3467, ON);
            SetNetworkconnectedEventFlagID(1034509269, ON);
        }
        if ((EventFlag(3363) || EventFlag(7609)) && EventFlag(9118) && EventFlag(1034509256)) {
            BatchSetNetworkconnectedEventFlags(3465, 3469, OFF);
            SetNetworkconnectedEventFlagID(3468, ON);
            SetNetworkconnectedEventFlagID(14009267, ON);
            SetNetworkconnectedEventFlagID(1034509269, OFF);
            SetNetworkconnectedEventFlagID(1051369239, OFF);
            SetNetworkconnectedEventFlagID(1034509267, OFF);
        }
        if (EventFlag(3468) && EventFlag(14009266) && (EventFlag(1044369228) || EventFlag(14009263))) {
            BatchSetNetworkconnectedEventFlags(3465, 3469, OFF);
            SetNetworkconnectedEventFlagID(3469, ON);
            SetNetworkconnectedEventFlagID(1034509259, OFF);
        }
        WaitFor(EventFlag(3478));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3599, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3598, OFF);
    GotoIf(S0, !AnyBatchEventFlags(3580, 3583));
    GotoIf(S1, !(EventFlag(3581) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(3580, 3583, OFF);
    SetNetworkconnectedEventFlagID(3580, ON);
S1:
    if (!AnyBatchEventFlags(3585, 3587)) {
        BatchSetNetworkconnectedEventFlags(3585, 3587, OFF);
        SetNetworkconnectedEventFlagID(3585, ON);
    }
    if (EventFlag(3580)) {
        if (EventFlag(3585) && EventFlag(1045389222)) {
            BatchSetNetworkconnectedEventFlags(3585, 3587, OFF);
            SetNetworkconnectedEventFlagID(3586, ON);
            SetNetworkconnectedEventFlagID(1046360706, ON);
        }
        if (EventFlag(4229) && EventFlag(1046369205)) {
            BatchSetNetworkconnectedEventFlags(3585, 3587, OFF);
            SetNetworkconnectedEventFlagID(3587, ON);
        }
        WaitFor(EventFlag(3598));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3819, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3818, OFF);
    GotoIf(S0, !AnyBatchEventFlags(3800, 3803));
    GotoIf(S1, !(EventFlag(3801) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(3800, 3803, OFF);
    SetNetworkconnectedEventFlagID(3800, ON);
S1:
    if (!AnyBatchEventFlags(3805, 3806)) {
        BatchSetNetworkconnectedEventFlags(3805, 3806, OFF);
        SetNetworkconnectedEventFlagID(3805, ON);
    }
    if (EventFlag(3800)) {
        if (EventFlag(3805) && EventFlag(1039399220)) {
            BatchSetNetworkconnectedEventFlags(3805, 3806, OFF);
            SetNetworkconnectedEventFlagID(3806, ON);
            BatchSetNetworkconnectedEventFlags(3800, 3803, OFF);
            SetNetworkconnectedEventFlagID(3803, ON);
        }
        WaitFor(EventFlag(3818));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3379, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3378, OFF);
    if (!AnyBatchEventFlags(3360, 3364)) {
        BatchSetNetworkconnectedEventFlags(3360, 3364, OFF);
        SetNetworkconnectedEventFlagID(3360, ON);
    }
    if (EventFlag(3361) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3360, 3364, OFF);
        SetNetworkconnectedEventFlagID(3360, ON);
    }
    if (EventFlag(7609)) {
        BatchSetNetworkconnectedEventFlags(3360, 3364, OFF);
        SetNetworkconnectedEventFlagID(3363, ON);
    }
    if (EventFlag(3360)) {
        if (!AnyBatchEventFlags(3365, 3377)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3365, ON);
        }
        if (EventFlag(3365) && EventFlag(9410)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3366, ON);
            SetEventFlagID(1051369360, ON);
        }
        if (EventFlag(3366) && EventFlag(9130)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3367, ON);
        }
        if (EventFlag(3367) && (EventFlag(1051369235) || EventFlag(1051369204))) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3368, ON);
            SetEventFlagID(1051369360, OFF);
        }
        if (EventFlag(3368) && EventFlag(1044369231)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3369, ON);
            SetNetworkconnectedEventFlagID(1041339259, ON);
            SetNetworkconnectedEventFlagID(1034509254, ON);
        }
        if (EventFlag(3369) && EventFlag(1034509256) && EventFlag(9118)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3370, ON);
            SetNetworkconnectedEventFlagID(1051369239, ON);
            SetNetworkconnectedEventFlagID(1034509267, ON);
        }
        if (EventFlag(3370) && EventFlag(7608)) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3371, ON);
            SetNetworkconnectedEventFlagID(1034509269, OFF);
            SetNetworkconnectedEventFlagID(1051369239, OFF);
            SetNetworkconnectedEventFlagID(1034509267, OFF);
        }
        if ((EventFlag(3371) && EventFlag(14009356))
            || (EventFlag(3463) && AnyBatchEventFlags(3368, 3370))) {
            BatchSetNetworkconnectedEventFlags(3365, 3377, OFF);
            SetNetworkconnectedEventFlagID(3372, ON);
            SetNetworkconnectedEventFlagID(1034509269, OFF);
            SetNetworkconnectedEventFlagID(1051369239, OFF);
        }
        WaitFor(EventFlag(3378));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3739, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3738, OFF);
    if (!AnyBatchEventFlags(3720, 3724)) {
        BatchSetNetworkconnectedEventFlags(3720, 3724, OFF);
        SetNetworkconnectedEventFlagID(3720, ON);
    }
    if (!AnyBatchEventFlags(3725, 3739)) {
        BatchSetNetworkconnectedEventFlags(3725, 3739, OFF);
        SetNetworkconnectedEventFlagID(3725, ON);
    }
    if (EventFlag(3720)) {
    }
L0:
    WaitFor(EventFlag(3738));
    RestartEvent();
    EndEvent();
});

$Event(4159, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4158, OFF);
    if (!AnyBatchEventFlags(4140, 4144)) {
        BatchSetNetworkconnectedEventFlags(4140, 4144, OFF);
        SetNetworkconnectedEventFlagID(4140, ON);
    }
    if (EventFlag(4141) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4140, 4144, OFF);
        SetNetworkconnectedEventFlagID(4140, ON);
    }
    if (!AnyBatchEventFlags(4145, 4157)) {
        BatchSetNetworkconnectedEventFlags(4145, 4159, OFF);
        SetNetworkconnectedEventFlagID(4145, ON);
    }
    if (EventFlag(4140)) {
        if ((!EventFlag(35009316) || EventFlag(1045520180))
            && EventFlag(1036439213)
            && EventFlag(3063)
            && !EventFlag(1044522701)) {
            BatchSetNetworkconnectedEventFlags(4145, 4159, OFF);
            SetNetworkconnectedEventFlagID(4146, ON);
        }
        if (EventFlag(1044529259)) {
            BatchSetNetworkconnectedEventFlags(4145, 4159, OFF);
            SetNetworkconnectedEventFlagID(4147, ON);
        }
    }
L0:
    WaitFor(EventFlag(4158));
    RestartEvent();
});

$Event(3799, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3798, OFF);
    GotoIf(S0, !AnyBatchEventFlags(3780, 3783));
    GotoIf(S1, !(EventFlag(3781) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(3780, 3783, OFF);
    SetNetworkconnectedEventFlagID(3780, ON);
S1:
    if (!AnyBatchEventFlags(3785, 3787)) {
        BatchSetNetworkconnectedEventFlags(3785, 3787, OFF);
        SetNetworkconnectedEventFlagID(3785, ON);
    }
    if (EventFlag(3780)) {
        if (EventFlag(3785) && EventFlag(9122)) {
            BatchSetNetworkconnectedEventFlags(3785, 3787, OFF);
            SetNetworkconnectedEventFlagID(3786, ON);
        }
        WaitFor(EventFlag(3798));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3859, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(3840, 3844)) {
        BatchSetNetworkconnectedEventFlags(3840, 3844, OFF);
        SetNetworkconnectedEventFlagID(3840, ON);
    }
    if (EventFlag(3841)) {
        BatchSetNetworkconnectedEventFlags(3840, 3844, OFF);
        SetNetworkconnectedEventFlagID(3840, ON);
    }
    if (!AnyBatchEventFlags(3845, 3859)) {
        BatchSetNetworkconnectedEventFlags(3845, 3859, OFF);
        SetNetworkconnectedEventFlagID(3845, ON);
    }
    if (EventFlag(3840)) {
        if (EventFlag(1051569206)) {
            BatchSetNetworkconnectedEventFlags(3845, 3859, OFF);
            SetEventFlagID(3846, ON);
        }
    }
L0:
    EndEvent();
});

$Event(3959, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3958, OFF);
    if (!AnyBatchEventFlags(3940, 3944)) {
        BatchSetNetworkconnectedEventFlags(3940, 3944, OFF);
        SetNetworkconnectedEventFlagID(3940, ON);
    }
    if (EventFlag(11109306)) {
        BatchSetNetworkconnectedEventFlags(3940, 3944, OFF);
        SetNetworkconnectedEventFlagID(3943, ON);
    }
    if (EventFlag(3941) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3940, 3944, OFF);
        SetNetworkconnectedEventFlagID(3940, ON);
    }
    if (!AnyBatchEventFlags(3945, 3949)) {
        BatchSetNetworkconnectedEventFlags(3945, 3949, OFF);
        SetNetworkconnectedEventFlagID(3945, ON);
    }
    if (EventFlag(3940)) {
        if (EventFlag(3945) && EventFlag(1043379356)) {
            BatchSetNetworkconnectedEventFlags(3945, 3949, OFF);
            SetNetworkconnectedEventFlagID(3946, ON);
        }
        if (EventFlag(3946) && EventFlag(31159206)) {
            BatchSetNetworkconnectedEventFlags(3945, 3949, OFF);
            SetEventFlagID(3947, ON);
        }
        if (EventFlag(3947) && !EventFlag(1039409260) && EventFlag(11109808) && EventFlag(9118)) {
            BatchSetNetworkconnectedEventFlags(3945, 3949, OFF);
            SetEventFlagID(3948, ON);
        }
        if (EventFlag(3947) && !EventFlag(1039409260) && EventFlag(11109812) && EventFlag(9118)) {
            BatchSetNetworkconnectedEventFlags(3945, 3949, OFF);
            SetEventFlagID(3949, ON);
            BatchSetNetworkconnectedEventFlags(3940, 3944, OFF);
            SetNetworkconnectedEventFlagID(3943, ON);
        }
    }
L0:
    EndEvent();
});

$Event(3759, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3758, OFF);
    if (!AnyBatchEventFlags(3740, 3743)) {
        BatchSetNetworkconnectedEventFlags(3740, 3743, OFF);
        SetNetworkconnectedEventFlagID(3740, ON);
    }
    if (EventFlag(3748) && EventFlag(1034509425)) {
        BatchSetNetworkconnectedEventFlags(3740, 3743, OFF);
        SetNetworkconnectedEventFlagID(3741, ON);
        SetEventFlagID(1034509425, OFF);
        SetEventFlagID(1034509403, ON);
    }
    if (!AnyBatchEventFlags(3745, 3757)) {
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3745, ON);
    }
    if (AnyBatchEventFlags(3745, 3749) && EventFlag(1035420150)) {
        BatchSetNetworkconnectedEventFlags(3740, 3743, OFF);
        SetNetworkconnectedEventFlagID(3740, ON);
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3750, ON);
        SetEventFlagID(1042369415, OFF);
    }
    if (EventFlag(3746) && !EventFlag(1042369410) && !EventFlag(1042369407)) {
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3745, ON);
        SetEventFlagID(1042369415, OFF);
    }
    if (EventFlag(3745) && EventFlag(1042369411)) {
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3746, ON);
        SetEventFlagID(1042369411, OFF);
        SetEventFlagID(1042369414, ON);
        SetEventFlagID(1042369415, ON);
        SetEventFlagID(4718, ON);
    }
    if (EventFlag(3746) && (EventFlag(1042369410) || EventFlag(1042369407))) {
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3747, ON);
        SetEventFlagID(1042369413, ON);
        SetEventFlagID(1042369415, OFF);
    }
    if (AnyBatchEventFlags(3745, 3746) && (EventFlag(1034509419) || EventFlag(3062))) {
        BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
        SetNetworkconnectedEventFlagID(3747, ON);
        SetEventFlagID(1042369415, OFF);
        if (!EventFlag(1042369410)) {
            SetEventFlagID(1042369416, ON);
            SetEventFlagID(11109785, ON);
        }
    }
    if (EventFlag(3740)) {
        if (EventFlag(3747) && EventFlag(1034509416)) {
            BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
            SetNetworkconnectedEventFlagID(3748, ON);
        }
        if (EventFlag(3748) && EventFlag(1034509421)) {
            BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
            SetNetworkconnectedEventFlagID(3749, ON);
            SetNetworkconnectedEventFlagID(1034510739, ON);
            SetNetworkconnectedEventFlagID(1034500703, ON);
            SetEventFlagID(1034509430, ON);
            SetEventFlagID(1034509433, ON);
            SetEventFlagID(3578, ON);
        }
        if (EventFlag(3750) && EventFlag(1034509406)) {
            BatchSetNetworkconnectedEventFlags(3745, 3757, OFF);
            SetNetworkconnectedEventFlagID(3751, ON);
            SetEventFlagID(1035429255, ON);
        }
    }
L0:
    WaitFor(EventFlag(3758));
    RestartEvent();
});

$Event(3619, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3618, OFF);
    if (!AnyBatchEventFlags(3600, 3603)) {
        BatchSetNetworkconnectedEventFlags(3600, 3603, OFF);
        SetNetworkconnectedEventFlagID(3600, ON);
    }
    if (!AnyBatchEventFlags(3605, 3617)) {
        BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
        SetNetworkconnectedEventFlagID(3605, ON);
    }
    if (!EventFlag(3617)) {
        if (EventFlag(3603)) {
            BatchSetNetworkconnectedEventFlags(3600, 3603, OFF);
            SetNetworkconnectedEventFlagID(3601, ON);
            SetEventFlagID(1045379207, ON);
            SetEventFlagID(1045379202, OFF);
            SetEventFlagID(1044349252, OFF);
            SetEventFlagID(12029152, OFF);
            SetEventFlagID(1051369352, OFF);
            SetEventFlagID(1052389302, OFF);
        }
    }
L1:
    if (EventFlag(3600)) {
        SetEventFlagID(1045379207, OFF);
        SetEventFlagID(1045379209, OFF);
    }
    if (EventFlag(3600)) {
        if (EventFlag(3612) && !EventFlag(9411)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3611, ON);
            SetEventFlagID(1051369359, OFF);
        }
        if (EventFlag(3611) && !EventFlag(1051369358) && !EventFlag(12029157)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3605, ON);
            SetEventFlagID(1051369357, OFF);
        }
        if (AnyBatchEventFlags(3605, 3610) && EventFlag(9412) && !EventFlag(1051369357)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3614, ON);
        }
        if (EventFlag(3606) && !EventFlag(1044350800)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3605, ON);
            SetEventFlagID(1044349257, OFF);
        }
        if (EventFlag(3605) && EventFlag(1045379205) && EventFlag(1044352717)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3606, ON);
            SetEventFlagID(1044349257, ON);
        }
        if (AnyBatchEventFlags(3605, 3606) && EventFlag(1045379205) && EventFlag(1044350800)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3607, ON);
            SetEventFlagID(1044349257, OFF);
        }
        if (EventFlag(3607) && EventFlag(1044349255)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3608, ON);
        }
        if (AnyBatchEventFlags(3605, 3608) && EventFlag(1034509410)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3609, ON);
        }
        if (EventFlag(3609) && EventFlag(1034509416)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3610, ON);
        }
        if (AnyBatchEventFlags(3605, 3610)
            && EventFlag(9410)
            && (EventFlag(12029157) || EventFlag(1051362739))) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3611, ON);
            SetEventFlagID(1051369357, ON);
        }
        if (EventFlag(3611) && EventFlag(9411)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3612, ON);
            SetEventFlagID(1051369359, ON);
            SetEventFlagID(1051369358, ON);
        }
        if (EventFlag(3612) && EventFlag(9412)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3613, ON);
            SetEventFlagID(1051369359, OFF);
        }
        if (EventFlag(3613) && (EventFlag(1052389306) || EventFlag(1034499238) || EventFlag(12027080))) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3614, ON);
            SetEventFlagID(1051369357, OFF);
        }
        if (EventFlag(3614) && EventFlag(1044350800) && EventFlag(1034509410)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3615, ON);
            SetEventFlagID(1044359259, ON);
        }
        if (EventFlag(3615) && EventFlag(1044359256)) {
            BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
            SetNetworkconnectedEventFlagID(3616, ON);
            SetEventFlagID(1044359259, OFF);
        }
    }
L0:
    if (AnyBatchEventFlags(3605, 3616)) {
        if (EventFlag(9108)) {
            if (EventFlag(114)) {
                BatchSetNetworkconnectedEventFlags(3605, 3617, OFF);
                SetNetworkconnectedEventFlagID(3617, ON);
                SetEventFlagID(1044359259, OFF);
            }
        }
    }
L2:
    WaitFor(EventFlag(3618));
    RestartEvent();
});

$Event(3579, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3578, OFF);
    if (!AnyBatchEventFlags(3560, 3563)) {
        BatchSetNetworkconnectedEventFlags(3560, 3563, OFF);
        SetNetworkconnectedEventFlagID(3560, ON);
        SetEventFlagID(1034509349, ON);
    }
    if (!AnyBatchEventFlags(3565, 3577)) {
        BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
        SetNetworkconnectedEventFlagID(3565, ON);
    }
    if (EventFlag(3560)) {
        if (EventFlag(3565) && EventFlag(1034509410)) {
            BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
            SetNetworkconnectedEventFlagID(3566, ON);
        }
        if (EventFlag(3566) && EventFlag(1034509416)) {
            BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
            SetNetworkconnectedEventFlagID(3567, ON);
        }
        if (EventFlag(3567) && EventFlag(1034509315)) {
            BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
            SetNetworkconnectedEventFlagID(3568, ON);
        }
        if (AnyBatchEventFlags(3565, 3568) && EventFlag(1034509424)) {
            BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
            SetNetworkconnectedEventFlagID(3569, ON);
            if (!EventFlag(11109919)) {
                SetEventFlagID(1035509215, ON);
            } else {
                SetEventFlagID(1035509216, ON);
            }
        }
        if (AnyBatchEventFlags(3565, 3568) && EventFlag(1034509433)) {
            BatchSetNetworkconnectedEventFlags(3565, 3577, OFF);
            SetNetworkconnectedEventFlagID(3569, ON);
            if (!EventFlag(11109919)) {
                SetEventFlagID(1035509215, ON);
            } else {
                SetEventFlagID(1035509216, ON);
            }
        }
    }
L0:
    WaitFor(EventFlag(3578));
    RestartEvent();
});

$Event(3779, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3778, OFF);
    if (!AnyBatchEventFlags(3760, 3763)) {
        BatchSetNetworkconnectedEventFlags(3760, 3763, OFF);
        SetNetworkconnectedEventFlagID(3760, ON);
    }
    if (!AnyBatchEventFlags(3765, 3777)) {
        BatchSetNetworkconnectedEventFlags(3765, 3777, OFF);
        SetNetworkconnectedEventFlagID(3765, ON);
    }
    if (EventFlag(3760)) {
        if (EventFlag(3765) && EventFlag(1034509410)) {
            BatchSetNetworkconnectedEventFlags(3765, 3777, OFF);
            SetNetworkconnectedEventFlagID(3766, ON);
            BatchSetEventFlags(1034509360, 1034509361, ON);
        }
        if (EventFlag(3766) && EventFlag(1034509416)) {
            BatchSetNetworkconnectedEventFlags(3765, 3777, OFF);
            SetNetworkconnectedEventFlagID(3767, ON);
        }
        if (AnyBatchEventFlags(3765, 3767) && EventFlag(1034499242)) {
            BatchSetNetworkconnectedEventFlags(3765, 3777, OFF);
            SetNetworkconnectedEventFlagID(3768, ON);
            BatchSetNetworkconnectedEventFlags(3760, 3763, OFF);
            SetNetworkconnectedEventFlagID(3763, ON);
        }
    }
L0:
    WaitFor(EventFlag(3778));
    RestartEvent();
});

$Event(3919, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3918, OFF);
    if (!AnyBatchEventFlags(3900, 3903)) {
        BatchSetNetworkconnectedEventFlags(3900, 3903, OFF);
        SetNetworkconnectedEventFlagID(3900, ON);
        SetEventFlagID(400357, ON);
    }
    if (!AnyBatchEventFlags(3905, 3917)) {
        BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
        SetNetworkconnectedEventFlagID(3905, ON);
    }
    if (EventFlag(3900)) {
        if (EventFlag(3905) && (EventFlag(9101) || EventFlag(10009610))) {
            BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
            SetNetworkconnectedEventFlagID(3906, ON);
        }
        if (EventFlag(3906) && EventFlag(9101)) {
            BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
            SetNetworkconnectedEventFlagID(3907, ON);
        }
        if (AnyBatchEventFlags(3905, 3907) && (EventFlag(11109532) || EventFlag(1034509421))) {
            BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
            SetNetworkconnectedEventFlagID(3908, ON);
        }
        if (AnyBatchEventFlags(3905, 3907)
            && EventFlag(110)
            && (!EventFlag(11109506) || EventFlag(1034509410) || EventFlag(1034509431))) {
            BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
            SetNetworkconnectedEventFlagID(3908, ON);
        }
        if (EventFlag(3908) && EventValue(11109545, 5) >= 2) {
            BatchSetNetworkconnectedEventFlags(3905, 3917, OFF);
            SetNetworkconnectedEventFlagID(3909, ON);
            BatchSetNetworkconnectedEventFlags(3900, 3903, OFF);
            SetNetworkconnectedEventFlagID(3903, ON);
        }
    }
L0:
    SetEventFlagID(10009614, OFF);
    if (EventFlag(3905)) {
        SetEventFlagID(10009614, ON);
    }
    WaitFor(EventFlag(3918));
    RestartEvent();
    EndEvent();
});

$Event(4139, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4138, OFF);
    if (!AnyBatchEventFlags(4120, 4123)) {
        BatchSetNetworkconnectedEventFlags(4120, 4123, OFF);
        SetNetworkconnectedEventFlagID(4120, ON);
    }
    if (!AnyBatchEventFlags(4125, 4137)) {
        BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
        SetNetworkconnectedEventFlagID(4125, ON);
    }
    if (EventFlag(4120)) {
        if (EventFlag(4125) && EventFlag(4047) && EventFlag(11109625)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4126, ON);
            BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
            SetNetworkconnectedEventFlagID(4048, ON);
            BatchSetNetworkconnectedEventFlags(4040, 4043, OFF);
            SetNetworkconnectedEventFlagID(4043, ON);
            SetEventFlagID(4058, ON);
        }
        if (EventFlag(4126) && EventFlag(11109015)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4127, ON);
        }
        if (EventFlag(4125) && EventFlag(4043) && (EventFlag(3063) || EventFlag(9410))) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4127, ON);
        }
        if (AnyBatchEventFlags(4125, 4126) && EventFlag(110)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4127, ON);
            if (!EventFlag(4043)) {
                BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
                SetNetworkconnectedEventFlagID(4048, ON);
                BatchSetNetworkconnectedEventFlags(4040, 4043, OFF);
                SetNetworkconnectedEventFlagID(4043, ON);
            }
            SetEventFlagID(4058, ON);
        }
        if (EventFlag(4127) && EventFlag(12030800)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4128, ON);
        }
        if (EventFlag(4128) && EventFlag(12039157)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4129, ON);
        }
        if (EventFlag(4129) && EventFlag(12039158)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4130, ON);
        }
        if (EventFlag(4137) && !EventFlag(12030850)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4130, ON);
        }
        if (EventFlag(4130) && EventFlag(12032870)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4137, ON);
        }
        if (EventFlag(4130) && EventFlag(12030850)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4131, ON);
        }
        if (EventFlag(4137) && EventFlag(12030850)) {
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4131, ON);
        }
    }
L0:
    if (EventFlag(9502) || (AnyBatchEventFlags(4125, 4129) && EventFlag(4123))) {
        SetEventFlagID(12039162, ON);
    }
    WaitFor(EventFlag(4138));
    RestartEvent();
    EndEvent();
});

$Event(4059, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4058, OFF);
    if (!AnyBatchEventFlags(4040, 4043)) {
        BatchSetNetworkconnectedEventFlags(4040, 4043, OFF);
        SetNetworkconnectedEventFlagID(4040, ON);
    }
    if (!AnyBatchEventFlags(4045, 4057)) {
        BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
        SetNetworkconnectedEventFlagID(4045, ON);
    }
    if (EventFlag(4040)) {
        if (EventFlag(4045) && EventFlag(1045390800)) {
            BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
            SetNetworkconnectedEventFlagID(4046, ON);
        }
        if (EventFlag(4046) && (EventFlag(1045399206) || EventFlag(11109609))) {
            BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
            SetNetworkconnectedEventFlagID(4047, ON);
        }
        if (AnyBatchEventFlags(4045, 4046)
            && (EventFlag(132) || EventFlag(3064) || EventFlag(3063) || EventFlag(1051439205))) {
            BatchSetNetworkconnectedEventFlags(4045, 4057, OFF);
            SetNetworkconnectedEventFlagID(4047, ON);
        }
    }
L0:
    SetEventFlagID(11109648, OFF);
    SetEventFlagID(11109649, OFF);
    if (EventFlag(4040)
        && EventFlag(4047)
        && EventFlag(1044399206)
        && (EventFlag(1045399206) || EventFlag(1051439205))) {
        SetEventFlagID(11109648, ON);
        SetEventFlagID(11109649, ON);
    }
    WaitFor(EventFlag(4058));
    RestartEvent();
    EndEvent();
});

$Event(4079, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4078, OFF);
    if (!AnyBatchEventFlags(4060, 4063)) {
        BatchSetNetworkconnectedEventFlags(4060, 4063, OFF);
        SetNetworkconnectedEventFlagID(4060, ON);
    }
    if (!AnyBatchEventFlags(4065, 4077)) {
        BatchSetNetworkconnectedEventFlags(4065, 4077, OFF);
        SetNetworkconnectedEventFlagID(4065, ON);
    }
    if (EventFlag(4060)) {
        if (EventFlag(4065) && EventFlag(12029016) && EventFlag(4048)) {
            BatchSetNetworkconnectedEventFlags(4065, 4077, OFF);
            SetNetworkconnectedEventFlagID(4077, ON);
            SetEventFlagID(12029019, ON);
        }
        if (EventFlag(4065) && EventFlag(12029016) && !EventFlag(4048)) {
            BatchSetNetworkconnectedEventFlags(4060, 4063, OFF);
            SetNetworkconnectedEventFlagID(4062, ON);
        }
        if (EventFlag(4077) && EventFlag(9502) && EventFlag(4131)) {
            BatchSetNetworkconnectedEventFlags(4065, 4077, OFF);
            SetNetworkconnectedEventFlagID(4066, ON);
            BatchSetNetworkconnectedEventFlags(4125, 4137, OFF);
            SetNetworkconnectedEventFlagID(4132, ON);
            BatchSetNetworkconnectedEventFlags(4120, 4123, OFF);
            SetNetworkconnectedEventFlagID(4123, ON);
            SetEventFlagID(12029019, OFF);
        }
        if (EventFlag(4066) && EventFlag(12039005)) {
            BatchSetNetworkconnectedEventFlags(4065, 4077, OFF);
            SetNetworkconnectedEventFlagID(4067, ON);
        }
        if (EventFlag(4077) && EventFlag(4123) && AnyBatchEventFlags(4128, 4129)) {
            BatchSetNetworkconnectedEventFlags(4065, 4077, OFF);
            SetNetworkconnectedEventFlagID(4067, ON);
            SetEventFlagID(12029019, OFF);
        }
    }
L0:
    WaitFor(EventFlag(4078));
    RestartEvent();
    EndEvent();
});

$Event(4119, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4100, 4104)) {
        BatchSetNetworkconnectedEventFlags(4100, 4104, OFF);
        SetNetworkconnectedEventFlagID(4100, ON);
    }
    if (EventFlag(4101) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4100, 4104, OFF);
        SetNetworkconnectedEventFlagID(4100, ON);
    }
    if (!AnyBatchEventFlags(4105, 4119)) {
        BatchSetNetworkconnectedEventFlags(4105, 4119, OFF);
        SetNetworkconnectedEventFlagID(4105, ON);
    }
    if (EventFlag(4100)) {
        if (EventFlag(1036419209)) {
            BatchSetNetworkconnectedEventFlags(4105, 4119, OFF);
            SetNetworkconnectedEventFlagID(4106, ON);
        }
    }
L0:
    EndEvent();
});

$Event(4179, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4178, OFF);
    GotoIf(S0, !AnyBatchEventFlags(4160, 4163));
    GotoIf(S1, !(EventFlag(4161) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
    SetNetworkconnectedEventFlagID(4160, ON);
S1:
    if (!AnyBatchEventFlags(4165, 4177)) {
        BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
        SetNetworkconnectedEventFlagID(4165, ON);
        SetNetworkconnectedEventFlagID(1050389209, ON);
    }
    if (AnyBatchEventFlags(4165, 4168) && EventFlag(4163)) {
        SetEventFlagID(1050382702, ON);
    }
    if (!AnyBatchEventFlags(4169, 4170)) {
        BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
        SetNetworkconnectedEventFlagID(4160, ON);
    }
    if (EventFlag(4160)) {
        if (EventFlag(4165) && EventFlag(1050389207)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4166, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
        }
        if (EventFlag(4166) && EventFlag(1050389255)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4167, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
        }
        if (EventFlag(4167) && EventFlag(4193)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4168, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
        }
        if (AnyBatchEventFlags(4191, 4192)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4169, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
        }
        if (EventFlag(7611)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4171, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
            BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
            SetNetworkconnectedEventFlagID(4163, ON);
        }
        if (!AnyBatchEventFlags(4191, 4192) && EventFlag(4183)) {
            BatchSetNetworkconnectedEventFlags(4165, 4177, OFF);
            SetNetworkconnectedEventFlagID(4170, ON);
            SetNetworkconnectedEventFlagID(1050389209, OFF);
        }
        WaitFor(EventFlag(4178));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(4199, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4198, OFF);
    if (!AnyBatchEventFlags(4180, 4183)) {
        BatchSetNetworkconnectedEventFlags(4180, 4183, OFF);
        SetNetworkconnectedEventFlagID(4180, ON);
    }
    if (EventFlag(4181) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4180, 4183, OFF);
        SetNetworkconnectedEventFlagID(4180, ON);
    }
L5:
    if (!AnyBatchEventFlags(4185, 4197)) {
        BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
        SetNetworkconnectedEventFlagID(4185, ON);
        SetNetworkconnectedEventFlagID(1050389259, ON);
    }
    if (EventFlag(4180)) {
        if (EventFlag(4185) && EventFlag(1050389255)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4186, ON);
            SetNetworkconnectedEventFlagID(1050389259, OFF);
        }
        if (EventFlag(4186) && EventFlag(1050389257)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4187, ON);
            if (EventFlag(1050389266)) {
                SetNetworkconnectedEventFlagID(4197, ON);
            }
        }
        if (EventFlag(4187) && EventFlag(1050389266) && !EventFlag(1038519257)) {
            SetNetworkconnectedEventFlagID(1042559206, ON);
            SetNetworkconnectedEventFlagID(1042559207, OFF);
            SetNetworkconnectedEventFlagID(1042559208, OFF);
            SetNetworkconnectedEventFlagID(1042559209, OFF);
        }
        if (EventFlag(4187) && EventFlag(1042550800) && EventFlag(1038519257)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4188, ON);
        }
        if (EventFlag(4188) && EventFlag(1042559205)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4189, ON);
        }
        if (EventFlag(4189) && EventFlag(1051569256)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4190, ON);
        }
        if (AnyBatchEventFlags(4187, 4190) && EventFlag(1050389266) && EventFlag(1038519257)) {
            SetNetworkconnectedEventFlagID(1042559206, OFF);
            SetNetworkconnectedEventFlagID(1042559207, ON);
            SetNetworkconnectedEventFlagID(1042559208, ON);
            SetNetworkconnectedEventFlagID(1042559209, ON);
        }
        if (EventFlag(4190)
            && EventFlag(15009206)
            && EventFlag(15000398)
            && (EventFlag(1050389227) || EventFlag(15009213))) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4193, ON);
            SetNetworkconnectedEventFlagID(15009208, ON);
            SetNetworkconnectedEventFlagID(15009209, ON);
            SetNetworkconnectedEventFlagID(1042559206, OFF);
            SetNetworkconnectedEventFlagID(1042559207, OFF);
            SetNetworkconnectedEventFlagID(1042559208, OFF);
            SetNetworkconnectedEventFlagID(1042559209, OFF);
        }
        if (EventFlag(4193) && EventFlag(7610)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4191, ON);
            SetNetworkconnectedEventFlagID(15009208, OFF);
            SetNetworkconnectedEventFlagID(15009209, OFF);
        }
        if (EventFlag(4193) && EventFlag(7611)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4194, ON);
            SetNetworkconnectedEventFlagID(15009208, OFF);
            SetNetworkconnectedEventFlagID(15009209, OFF);
        }
        if (EventFlag(4191) && EventFlag(15009211)) {
            BatchSetNetworkconnectedEventFlags(4185, 4197, OFF);
            SetNetworkconnectedEventFlagID(4192, ON);
        }
        WaitFor(EventFlag(4198));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(3979, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3978, OFF);
    GotoIf(S0, !AnyBatchEventFlags(3960, 3963));
    GotoIf(S1, !(EventFlag(3961) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(3960, 3963, OFF);
    SetNetworkconnectedEventFlagID(3960, ON);
S1:
    if (!AnyBatchEventFlags(3965, 3968)) {
        BatchSetNetworkconnectedEventFlags(3965, 3968, OFF);
        SetNetworkconnectedEventFlagID(3965, ON);
    }
    if (EventFlag(3960)) {
        if ((EventFlag(3965) && EventFlag(11109659)) || (EventFlag(181) && EventFlag(11109659))) {
            BatchSetNetworkconnectedEventFlags(3965, 3968, OFF);
            SetNetworkconnectedEventFlagID(3966, ON);
        }
        if (EventFlag(110)
            || (EventFlag(3966) && EventFlag(11109358) && EventFlag(11109660))
            || (EventFlag(181) && EventFlag(11109659))) {
            BatchSetNetworkconnectedEventFlags(3965, 3968, OFF);
            SetNetworkconnectedEventFlagID(3967, ON);
        }
        if (EventFlag(9116)) {
            BatchSetNetworkconnectedEventFlags(3965, 3968, OFF);
            SetNetworkconnectedEventFlagID(3968, ON);
        }
        WaitFor(EventFlag(3978));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(4219, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4218, OFF);
    GotoIf(S0, !AnyBatchEventFlags(4200, 4203));
    GotoIf(S1, !(EventFlag(4201) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(4200, 4203, OFF);
    SetNetworkconnectedEventFlagID(4200, ON);
S1:
    if (!AnyBatchEventFlags(4205, 4217)) {
        BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
        SetNetworkconnectedEventFlagID(4205, ON);
    }
    if (EventFlag(4200)) {
        if (!EventFlag(11009555) && EventFlag(110)) {
            BatchSetNetworkconnectedEventFlags(4200, 4203, OFF);
            SetNetworkconnectedEventFlagID(4203, ON);
            SetNetworkconnectedEventFlagID(4217, ON);
        } else {
            if (EventFlag(4205) && EventFlag(11109859)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4206, ON);
            }
            if (EventFlag(4206) && EventFlag(1040529259)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4207, ON);
            }
            if (EventFlag(4207) && EventFlag(1040549205)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4208, ON);
            }
            if (EventFlag(4208) && EventFlag(11009555)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4209, ON);
            }
            if (EventFlag(4209) && EventFlag(9116) && !EventFlag(1051569361)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4210, ON);
            }
            if (EventFlag(4209) && EventFlag(9116) && EventFlag(1051569361)) {
                BatchSetNetworkconnectedEventFlags(4205, 4217, OFF);
                SetNetworkconnectedEventFlagID(4211, ON);
            }
            if (!(!EventFlag(1051569362) && !EventFlag(11059207))) {
                BatchSetNetworkconnectedEventFlags(4200, 4203, OFF);
                SetNetworkconnectedEventFlagID(4203, ON);
            }
            WaitFor(EventFlag(4218));
            RestartEvent();
        }
    }
L0:
    EndEvent();
});

$Event(4259, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4258, OFF);
    GotoIf(S0, !AnyBatchEventFlags(4240, 4243));
    GotoIf(S1, !(EventFlag(4241) && EventFlag(3000)));
S0:
    BatchSetNetworkconnectedEventFlags(4240, 4243, OFF);
    SetNetworkconnectedEventFlagID(4240, ON);
S1:
    if (!AnyBatchEventFlags(4245, 4257)) {
        BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
        SetNetworkconnectedEventFlagID(4245, ON);
    }
    if (EventFlag(4240)) {
        if (EventFlag(4245) && EventFlag(11109957)) {
            BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
            SetNetworkconnectedEventFlagID(4246, ON);
        }
        if (EventFlag(4246) && EventFlag(35009306)) {
            BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
            SetNetworkconnectedEventFlagID(4247, ON);
            SetNetworkconnectedEventFlagID(35009317, ON);
            SetNetworkconnectedEventFlagID(35009318, ON);
        }
        if (EventFlag(4247) && EventFlag(1045520180)) {
            BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
            SetNetworkconnectedEventFlagID(4248, ON);
            SetNetworkconnectedEventFlagID(35009317, OFF);
            SetNetworkconnectedEventFlagID(35009318, OFF);
        }
        if (EventFlag(4248) && EventFlag(11109959)) {
            BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
            SetNetworkconnectedEventFlagID(4249, ON);
        }
        if (EventFlag(4249) && EventFlag(35009326)) {
            BatchSetNetworkconnectedEventFlags(4245, 4257, OFF);
            SetNetworkconnectedEventFlagID(4251, ON);
        }
        WaitFor(EventFlag(4258));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(4239, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4238, OFF);
    if (!AnyBatchEventFlags(4220, 4223)) {
        BatchSetNetworkconnectedEventFlags(4220, 4223, OFF);
        SetNetworkconnectedEventFlagID(4220, ON);
    }
    if (EventFlag(4221) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4220, 4223, OFF);
        SetNetworkconnectedEventFlagID(4220, ON);
    }
    if (!AnyBatchEventFlags(4225, 4237)) {
        BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
        SetNetworkconnectedEventFlagID(4225, ON);
    }
    if (EventFlag(11109921) && EventFlag(4228)) {
        BatchSetNetworkconnectedEventFlags(4220, 4223, OFF);
        SetNetworkconnectedEventFlagID(4220, ON);
    }
    if (EventFlag(4220)) {
        if (!(!(AnyBatchEventFlags(4225, 4227) && EventFlag(110))
            && !(EventFlag(4228) && EventFlag(9116) && !EventFlag(11109921)))) {
            BatchSetNetworkconnectedEventFlags(4220, 4223, OFF);
            SetNetworkconnectedEventFlagID(4223, ON);
        } else {
            if (EventFlag(4225) && EventFlag(10009706)) {
                SetNetworkconnectedEventFlagID(10009709, ON);
            }
            if (EventFlag(4225) && (EventFlag(9101) || EventFlag(1034509305))) {
                BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
                SetNetworkconnectedEventFlagID(4226, ON);
                SetNetworkconnectedEventFlagID(10009709, OFF);
            }
            if (EventFlag(4226) && EventFlag(11109909)) {
                BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
                SetNetworkconnectedEventFlagID(4227, ON);
            }
            if (EventFlag(4227) && EventFlag(1034429205)) {
                SetNetworkconnectedEventFlagID(1034429209, ON);
            }
            if (EventFlag(4227) && EventFlag(1035420800) && EventFlag(1034429205)) {
                BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
                SetNetworkconnectedEventFlagID(4228, ON);
            }
            if (EventFlag(4228) && EventFlag(9101) && EventFlag(10009722)) {
                BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
                SetNetworkconnectedEventFlagID(4229, ON);
                SetNetworkconnectedEventFlagID(10009719, ON);
            }
            if (EventFlag(4228) && EventFlag(11109919)) {
                BatchSetNetworkconnectedEventFlags(4225, 4237, OFF);
                SetNetworkconnectedEventFlagID(4230, ON);
            }
            WaitFor(EventFlag(4238));
            RestartEvent();
        }
    }
L0:
    EndEvent();
});

$Event(3839, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(3838, OFF);
    if (!AnyBatchEventFlags(3820, 3823)) {
        BatchSetNetworkconnectedEventFlags(3820, 3823, OFF);
        SetNetworkconnectedEventFlagID(3820, ON);
    }
    if (EventFlag(3823)) {
        BatchSetNetworkconnectedEventFlags(3820, 3823, OFF);
        SetNetworkconnectedEventFlagID(3821, ON);
    }
    if (EventFlag(3820) && EventFlag(3822)) {
        BatchSetNetworkconnectedEventFlags(3820, 3823, OFF);
        SetNetworkconnectedEventFlagID(3822, ON);
    }
    if (EventFlag(3821) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(3820, 3823, OFF);
        SetNetworkconnectedEventFlagID(3820, ON);
    }
    if (!AnyBatchEventFlags(3825, 3829)) {
        BatchSetNetworkconnectedEventFlags(3825, 3829, OFF);
        SetNetworkconnectedEventFlagID(3825, ON);
    }
    if (EventFlag(3820)) {
        if (EventFlag(3825) && EventFlag(1039449258) && (EventFlag(1043399313) || EventFlag(3663))) {
            BatchSetNetworkconnectedEventFlags(3825, 3829, OFF);
            SetNetworkconnectedEventFlagID(3826, ON);
        }
        if (EventFlag(3826) && EventFlag(1039449278)) {
            BatchSetNetworkconnectedEventFlags(3825, 3829, OFF);
            SetNetworkconnectedEventFlagID(3827, ON);
        }
        if (EventFlag(3827) && EventFlag(3443) && EventFlag(1039449270)) {
            BatchSetNetworkconnectedEventFlags(3825, 3829, OFF);
            SetNetworkconnectedEventFlagID(3828, ON);
        }
        if (EventFlag(1039449285)) {
            SetNetworkconnectedEventFlagID(1039449296, ON);
        }
        if (EventFlag(1039449291)) {
            BatchSetNetworkconnectedEventFlags(3825, 3829, OFF);
            SetNetworkconnectedEventFlagID(3829, ON);
        }
        WaitFor(EventFlag(3838));
        RestartEvent();
    }
L0:
    EndEvent();
});

// START GIANT DLC SEGMENT
$Event(4279, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4278, OFF);
    if (!AnyBatchEventFlags(4260, 4264)) {
        BatchSetNetworkconnectedEventFlags(4260, 4264, OFF);
        SetNetworkconnectedEventFlagID(4260, ON);
    }
    if (EventFlag(4262) && EventFlag(4263)) {
        BatchSetNetworkconnectedEventFlags(4260, 4264, OFF);
        SetNetworkconnectedEventFlagID(4263, ON);
    }
    if (EventFlag(4261) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4260, 4264, OFF);
        SetNetworkconnectedEventFlagID(4260, ON);
    }
    if (!AnyBatchEventFlags(4265, 4277)) {
        BatchSetNetworkconnectedEventFlags(4265, 4277, OFF);
        SetNetworkconnectedEventFlagID(4265, ON);
    }
    if (EventFlag(2052400800)) {
        SetEventFlagID(2048429205, ON);
    }
    if (EventFlag(4261) && EventFlag(2052409209)) {
        BatchSetNetworkconnectedEventFlags(4260, 4264, OFF);
        SetNetworkconnectedEventFlagID(4260, ON);
    }
    if (EventFlag(4261) && EventFlag(2054390800)) {
        BatchSetNetworkconnectedEventFlags(4260, 4264, OFF);
        SetNetworkconnectedEventFlagID(4260, ON);
    }
    if (EventFlag(2054390800)) {
        SetEventFlagID(2048429205, ON);
        SetEventFlagID(2052409205, ON);
    }
    if (EventFlag(2054390800) && !EventFlag(2052409211) && EventFlag(2052409209) && EventFlag(4260)) {
        SetEventFlagID(2052409211, ON);
    }
    if (EventFlag(2054390800) && !EventFlag(2052409212) && !EventFlag(2052409209) && EventFlag(4260)) {
        SetEventFlagID(2052409212, ON);
    }
    if (EventFlag(4260)) {
        if (EventFlag(4265) && EventFlag(2048429205)) {
            BatchSetNetworkconnectedEventFlags(4265, 4277, OFF);
            SetNetworkconnectedEventFlagID(4267, ON);
        }
        if (EventFlag(4267) && EventFlag(2052409205)) {
            BatchSetNetworkconnectedEventFlags(4265, 4277, OFF);
            SetNetworkconnectedEventFlagID(4268, ON);
        }
    }
L0:
    WaitFor(EventFlag(4278));
    RestartEvent();
    EndEvent();
});

$Event(4299, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4298, OFF);
    if (!AnyBatchEventFlags(4280, 4284)) {
        BatchSetNetworkconnectedEventFlags(4280, 4284, OFF);
        SetNetworkconnectedEventFlagID(4280, ON);
    }
    if (!AnyBatchEventFlags(4285, 4297)) {
        BatchSetNetworkconnectedEventFlags(4285, 4297, OFF);
        SetNetworkconnectedEventFlagID(4285, ON);
    }
    if (EventFlag(4280)) {
        if (EventFlag(22009275)) {
            BatchSetNetworkconnectedEventFlags(4285, 4297, OFF);
            SetNetworkconnectedEventFlagID(4286, ON);
        }
    }
L0:
    WaitFor(EventFlag(4298));
    RestartEvent();
});

// NPC Flag Management: Dragon Priestess Florrisax
// 4300 - Alive
// 4301 - Hostile (Calmable)
// 4302 - Hostile (Not Calmable)
// 4303 - Death
// 4305 - Baseline
// 4306 - 
// 4318 - Event Restarter
// 4319 - Event ID
// 2049392711 - Disallow Give Ash
// 2049399722 - Gave Tholier's Concoction
// 2049399723 - Force Anim 90102 and enables flag 2049399736
// 2049399729 - Disallow Give Priestess Heart + Hammer
// 2049399734 - Is Night?
// 2049399736 - Unk
// 2049399738 - Conversation Complete: I have broken my pledge
// 2049399743 - Give Ash
$Event(4319, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4318, OFF);
    SetEventFlagID(4827, OFF);
    if (!AnyBatchEventFlags(4300, 4304)) { // Character State Init
        BatchSetNetworkconnectedEventFlags(4300, 4304, OFF);
        SetNetworkconnectedEventFlagID(4300, ON);
    }
    if (!AnyBatchEventFlags(4305, 4317)) { // First Time Init
        BatchSetNetworkconnectedEventFlags(4305, 4317, OFF);
        SetNetworkconnectedEventFlagID(4305, ON);
    }
    if (EventFlag(4300)) {
        SetEventFlagID(2049399723, OFF);
        if (EventFlag(2049399734)) {
            SetEventFlagID(2049399723, ON);
        }
        if (EventFlag(4305) && EventFlag(2049399723)) {
            BatchSetNetworkconnectedEventFlags(4305, 4317, OFF);
            SetEventFlagID(4306, ON);
        }
    }
L0:
    WaitFor(EventFlag(4318));
    RestartEvent();
});

$Event(4339, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4338, OFF);
    if (!AnyBatchEventFlags(4320, 4324)) {
        BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
    }
    if (!AnyBatchEventFlags(4325, 4337)) {
        BatchSetNetworkconnectedEventFlags(4325, 4337, OFF);
        SetNetworkconnectedEventFlagID(4325, ON);
    }
    if (!EventFlag(4323) && !EventFlag(2051452705)) {
        BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
    }
    if (EventFlag(4323) && !EventFlag(2051450800)) {
        BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
        SetEventFlagID(2051459724, OFF);
    }
    if (EventFlag(4322) && !EventFlag(2051450800)) {
        BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
        SetEventFlagID(2051459724, OFF);
    }
    if (EventFlag(4326) && EventFlag(2051450800)) {
        BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
        SetEventFlagID(2051452705, OFF);
    }
    if (EventFlag(4320)) {
        SetEventFlagID(2051459723, OFF);
        if (EventFlag(2051459207)) {
            SetEventFlagID(2051459723, ON);
        }
        if (EventFlag(4325) && EventFlag(2051459723)) {
            BatchSetNetworkconnectedEventFlags(4325, 4337, OFF);
            SetEventFlagID(4326, ON);
        }
        if (EventFlag(4326) && EventFlag(2051452705)) {
            BatchSetNetworkconnectedEventFlags(4320, 4324, OFF);
            SetNetworkconnectedEventFlagID(4322, ON);
        }
    }
L0:
    WaitFor(EventFlag(4338));
    RestartEvent();
});

$Event(4359, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4358, OFF);
    if (!AnyBatchEventFlags(4340, 4344)) {
        BatchSetNetworkconnectedEventFlags(4340, 4344, OFF);
        SetNetworkconnectedEventFlagID(4340, ON);
    }
    if (!AnyBatchEventFlags(4345, 4357)) {
        BatchSetNetworkconnectedEventFlags(4345, 4357, OFF);
        SetNetworkconnectedEventFlagID(4345, ON);
    }
    if (EventFlag(4340)) {
        if (EventFlag(4345) && EventFlag(4865)) {
            BatchSetNetworkconnectedEventFlags(4345, 4357, OFF);
            SetNetworkconnectedEventFlagID(4346, ON);
        }
    }
L0:
    WaitFor(EventFlag(4358));
    RestartEvent();
    EndEvent();
});

$Event(4379, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4378, OFF);
    if (!AnyBatchEventFlags(4360, 4364)) {
        BatchSetNetworkconnectedEventFlags(4360, 4364, OFF);
        SetNetworkconnectedEventFlagID(4360, ON);
        SetEventFlagID(4892, ON);
    }
    if (EventFlag(4362) && EventFlag(4363)) {
        BatchSetNetworkconnectedEventFlags(4360, 4364, OFF);
        SetNetworkconnectedEventFlagID(4363, ON);
    }
    if (!AnyBatchEventFlags(4365, 4377)) {
        BatchSetNetworkconnectedEventFlags(4365, 4377, OFF);
        SetNetworkconnectedEventFlagID(4365, ON);
    }
    if (EventFlag(4360)) {
        if (EventFlag(4365) && EventFlag(2046429214)) {
            BatchSetNetworkconnectedEventFlags(4365, 4377, OFF);
            SetNetworkconnectedEventFlagID(4366, ON);
        }
        if (EventFlag(4366) && EventFlag(2048459225)) {
            BatchSetNetworkconnectedEventFlags(4365, 4377, OFF);
            SetNetworkconnectedEventFlagID(4368, ON);
        }
        if (EventFlag(4368) && EventFlag(21019220)) {
            BatchSetNetworkconnectedEventFlags(4365, 4377, OFF);
            SetNetworkconnectedEventFlagID(4369, ON);
        }
        if (EventFlag(4368) && EventFlag(21019222)) {
            BatchSetNetworkconnectedEventFlags(4365, 4377, OFF);
            SetNetworkconnectedEventFlagID(4370, ON);
        }
    }
L0:
    WaitFor(EventFlag(4378));
    RestartEvent();
});

$Event(4399, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4398, OFF);
    if (!AnyBatchEventFlags(4380, 4384)) {
        BatchSetNetworkconnectedEventFlags(4380, 4384, OFF);
        SetNetworkconnectedEventFlagID(4380, ON);
        SetEventFlagID(2045429300, ON);
    }
    if (!AnyBatchEventFlags(4385, 4397)) {
        BatchSetNetworkconnectedEventFlags(4385, 4397, OFF);
        SetNetworkconnectedEventFlagID(4385, ON);
    }
    if (!EventFlag(4828) && EventFlag(2045429264)) {
        SetNetworkconnectedEventFlagID(4901, ON);
    }
    if (AnyBatchEventFlags(2045429290, 2045429296)) {
        BatchSetNetworkconnectedEventFlags(2045429290, 2045429296, OFF);
    }
    if (EventFlag(4380)) {
        if (EventFlag(4385) && !EventFlag(4828) && EventFlag(2045429266)) {
            BatchSetNetworkconnectedEventFlags(4385, 4397, OFF);
            SetNetworkconnectedEventFlagID(4386, ON);
        }
        if (EventFlag(4385) && EventFlag(2045429298)) {
            BatchSetNetworkconnectedEventFlags(4385, 4397, OFF);
            SetNetworkconnectedEventFlagID(4387, ON);
        }
        SetNetworkconnectedEventFlagID(4828, OFF);
        WaitFor(EventFlag(4398));
        RestartEvent();
    }
L0:
    SetNetworkconnectedEventFlagID(4828, OFF);
    EndEvent();
});

$Event(4419, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4418, OFF);
    if (!AnyBatchEventFlags(4400, 4404)) {
        BatchSetNetworkconnectedEventFlags(4400, 4404, OFF);
        SetNetworkconnectedEventFlagID(4400, ON);
    }
    if (EventFlag(21019325)) {
        BatchSetNetworkconnectedEventFlags(4400, 4404, OFF);
        SetNetworkconnectedEventFlagID(4403, ON);
    }
    if (EventFlag(4401) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4400, 4404, OFF);
        SetNetworkconnectedEventFlagID(4400, ON);
    }
    if (!AnyBatchEventFlags(4405, 4417)) {
        BatchSetNetworkconnectedEventFlags(4405, 4417, OFF);
        SetNetworkconnectedEventFlagID(4405, ON);
    }
    if (EventFlag(4403)) {
        SetEventFlagID(4893, OFF);
    }
    if (EventFlag(4400)) {
        if (EventFlag(4923) && EventFlag(2045429227)) {
            SetEventFlagID(2045429225, ON);
        }
        if (EventFlag(4405) && EventFlag(2045429225) && !EventFlag(4830)) {
            BatchSetNetworkconnectedEventFlags(4405, 4417, OFF);
            SetEventFlagID(4406, ON);
        }
        if (EventFlag(21019314)) {
            SetEventFlagID(4893, ON);
        }
        if (!EventFlag(7625)) {
            if ((EventFlag(21019320) && !EventFlag(21019316))
                || EventFlag(21019321)
                || EventFlag(21019322)) {
                SetEventFlagID(4899, ON);
            }
        }
        if (EventFlag(4406) && EventFlag(20019223)) {
            BatchSetNetworkconnectedEventFlags(4405, 4417, OFF);
            SetNetworkconnectedEventFlagID(4407, ON);
            SetEventFlagID(20019220, ON);
            SetNetworkconnectedEventFlagID(4899, OFF);
        }
        SetEventFlagID(20019225, OFF);
        if (EventFlag(20010800)) {
            SetEventFlagID(20019225, ON);
        }
        if (EventFlag(4407) && EventFlag(20019225) && EventFlag(20010800)) {
            BatchSetNetworkconnectedEventFlags(4405, 4417, OFF);
            SetEventFlagID(4408, ON);
        }
        if (EventFlag(4406) && EventFlag(20019228)) {
            BatchSetNetworkconnectedEventFlags(4405, 4417, OFF);
            SetNetworkconnectedEventFlagID(4408, ON);
        }
    }
L0:
    SetNetworkconnectedEventFlagID(4830, OFF);
    WaitFor(EventFlag(4418));
    RestartEvent();
});

$Event(4439, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4438, OFF);
    if (!AnyBatchEventFlags(4420, 4424)) {
        BatchSetNetworkconnectedEventFlags(4420, 4424, OFF);
        SetNetworkconnectedEventFlagID(4420, ON);
    }
    if (EventFlag(4422) && EventFlag(4423)) {
        BatchSetNetworkconnectedEventFlags(4420, 4424, OFF);
        SetNetworkconnectedEventFlagID(4423, ON);
    }
    if (EventFlag(4421) && EventFlag(3000)) {
        BatchSetNetworkconnectedEventFlags(4420, 4424, OFF);
        SetNetworkconnectedEventFlagID(4420, ON);
    }
    if (!AnyBatchEventFlags(4425, 4437)) {
        BatchSetNetworkconnectedEventFlags(4425, 4437, OFF);
        SetNetworkconnectedEventFlagID(4425, ON);
    }
    if (!EventFlag(4829) && EventFlag(21019365)) {
        SetNetworkconnectedEventFlagID(4897, ON);
    }
    if (EventFlag(4420)) {
        if (EventFlag(4923) && EventFlag(2046429371)) {
            SetEventFlagID(2046429378, ON);
        }
        if (EventFlag(4425) && EventFlag(2046429378)) {
            BatchSetNetworkconnectedEventFlags(4425, 4437, OFF);
            SetNetworkconnectedEventFlagID(4426, ON);
        }
        if (EventFlag(4426) && EventFlag(21019375)) {
            BatchSetNetworkconnectedEventFlags(4425, 4437, OFF);
            SetNetworkconnectedEventFlagID(4427, ON);
        }
    }
L0:
    SetNetworkconnectedEventFlagID(4829, OFF);
    WaitFor(EventFlag(4438));
    RestartEvent();
});

$Event(4459, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4458, OFF);
    if (!AnyBatchEventFlags(4440, 4444)) {
        BatchSetNetworkconnectedEventFlags(4440, 4444, OFF);
        SetNetworkconnectedEventFlagID(4440, ON);
        SetNetworkconnectedEventFlagID(4890, ON);
        SetNetworkconnectedEventFlagID(20019253, ON);
    }
    if (!AnyBatchEventFlags(4445, 4457)) {
        BatchSetNetworkconnectedEventFlags(4445, 4457, OFF);
        SetNetworkconnectedEventFlagID(4445, ON);
    }
    if (EventFlag(6951) && EventFlag(9112) && EventFlag(9130)) {
        SetNetworkconnectedEventFlagID(12059261, ON);
    }
    if (EventFlag(4926)) {
        SetEventFlagID(12059260, ON);
    }
    if (!EventFlag(2048459290) && EventFlag(2048459278) && EventFlag(9146)) {
        SetEventFlagID(2048459290, ON);
    }
    if (EventFlag(2048459266) && !EventFlag(2048459291) && !EventFlag(2048459293)) {
        SetEventFlagID(2048459291, ON);
        if (!EventFlag(4403)) {
            SetEventFlagID(2048459293, ON);
        }
    }
    if (EventFlag(2048459258)
        && !EventFlag(2048459278)
        && !EventFlag(2048459261)
        && EventFlag(9146)
        && !EventFlag(2048459291)) {
        SetEventFlagID(2048459290, ON);
        SetEventFlagID(2048459291, ON);
        SetEventFlagID(2048459293, ON);
    }
    if (EventFlag(2048459291) && !EventFlag(2048459293) && EventFlag(4403)) {
        SetEventFlagID(4896, ON);
        SetEventFlagID(2048459297, ON);
    }
    if (EventFlag(2048459291) && EventFlag(2048459293) && EventFlag(4403) && !EventFlag(7621)) {
        SetEventFlagID(4896, ON);
        SetEventFlagID(2048459297, ON);
    }
    if (EventFlag(2048459271)) {
        SetNetworkconnectedEventFlagID(4896, ON);
    }
    if (EventFlag(20019258)) {
        SetEventFlagID(12059260, ON);
        SetEventFlagID(2048459297, ON);
        SetNetworkconnectedEventFlagID(4896, ON);
    }
    if (EventFlag(4440)) {
        if (EventFlag(4445) && EventFlag(12059260)) {
            BatchSetNetworkconnectedEventFlags(4445, 4457, OFF);
            SetNetworkconnectedEventFlagID(4446, ON);
        }
        if (EventFlag(4446) && EventFlag(2048459297)) {
            BatchSetNetworkconnectedEventFlags(4445, 4457, OFF);
            SetNetworkconnectedEventFlagID(4447, ON);
        }
        if (EventFlag(4447) && EventFlag(20019256)) {
            BatchSetNetworkconnectedEventFlags(4445, 4457, OFF);
            SetNetworkconnectedEventFlagID(4448, ON);
        }
        WaitFor(EventFlag(4458));
        RestartEvent();
    }
L0:
    EndEvent();
});

$Event(4479, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4478, OFF);
    if (!AnyBatchEventFlags(4460, 4464)) {
        BatchSetNetworkconnectedEventFlags(4460, 4464, OFF);
        SetNetworkconnectedEventFlagID(4460, ON);
    }
    if (!AnyBatchEventFlags(4465, 4477)) {
        BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
        SetNetworkconnectedEventFlagID(4465, ON);
    }
    if (EventFlag(4460)) {
        if (EventFlag(4465) && EventFlag(2048439205)) {
            BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
            SetEventFlagID(4466, ON);
        }
        if (EventFlag(4466) && EventFlag(22009205)) {
            BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
            SetEventFlagID(4467, ON);
        }
        if (EventFlag(4467) && EventFlag(20019305)) {
            BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
            SetEventFlagID(4468, ON);
            if (EventFlag(20019306)) {
                SetEventFlagID(22009232, ON);
            }
        }
        SetEventFlagID(20019310, OFF);
        if (EventFlag(20010800)) {
            SetEventFlagID(20019310, ON);
        }
        if (EventFlag(4468) && EventFlag(20019310)) {
            BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
            SetEventFlagID(4469, ON);
            SetEventFlagID(4900, OFF);
        }
        SetEventFlagID(22009241, OFF);
        if (EventFlag(4894) && !EventFlag(20019306) && EventFlag(20010800)) {
            SetEventFlagID(22009241, ON);
        }
        if (EventFlag(22009241)) {
            BatchSetNetworkconnectedEventFlags(4465, 4477, OFF);
            SetEventFlagID(4469, ON);
            SetEventFlagID(4900, OFF);
        }
    }
L0:
    WaitFor(EventFlag(4478));
    RestartEvent();
});

$Event(4499, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4498, OFF);
    if (!AnyBatchEventFlags(4480, 4484)) {
        BatchSetNetworkconnectedEventFlags(4480, 4484, OFF);
        SetNetworkconnectedEventFlagID(4480, ON);
    }
    if (EventFlag(4482) && EventFlag(4483)) {
        BatchSetNetworkconnectedEventFlags(4480, 4484, OFF);
        SetNetworkconnectedEventFlagID(4483, ON);
    }
    if (!AnyBatchEventFlags(4485, 4497)) {
        BatchSetNetworkconnectedEventFlags(4485, 4497, OFF);
        SetNetworkconnectedEventFlagID(4485, ON);
    }
    if (EventFlag(4480)) {
    }
L0:
    WaitFor(EventFlag(4498));
    RestartEvent();
});

$Event(4519, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!AnyBatchEventFlags(4500, 4504)) {
        BatchSetNetworkconnectedEventFlags(4500, 4504, OFF);
        SetNetworkconnectedEventFlagID(4500, ON);
    }
    if (EventFlag(4502) && EventFlag(4503)) {
        BatchSetNetworkconnectedEventFlags(4500, 4504, OFF);
        SetNetworkconnectedEventFlagID(4503, ON);
    }
    if (!AnyBatchEventFlags(4505, 4517)) {
        BatchSetNetworkconnectedEventFlags(4505, 4517, OFF);
        SetNetworkconnectedEventFlagID(4505, ON);
    }
    if (EventFlag(4500)) {
        SetEventFlagID(2051459211, OFF);
        if (EventFlag(25000800) && EventFlag(9440)) {
            SetEventFlagID(2051459211, ON);
        }
        if (EventFlag(4505) && EventFlag(2051459211)) {
            BatchSetNetworkconnectedEventFlags(4505, 4517, OFF);
            SetEventFlagID(4506, ON);
            BatchSetNetworkconnectedEventFlags(4500, 4504, OFF);
            SetNetworkconnectedEventFlagID(4502, ON);
        }
    }
L0:
    EndEvent();
});

$Event(4579, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(4578, OFF);
    if (!AnyBatchEventFlags(4560, 4564)) {
        BatchSetNetworkconnectedEventFlags(4560, 4564, OFF);
        SetNetworkconnectedEventFlagID(4560, ON);
        SetNetworkconnectedEventFlagID(4908, ON);
    }
    if (!AnyBatchEventFlags(4565, 4577)) {
        BatchSetNetworkconnectedEventFlags(4565, 4577, OFF);
        SetNetworkconnectedEventFlagID(4565, ON);
    }
    if (EventFlag(4560)) {
        if (EventFlag(4565) && EventFlag(2049449225)) {
            BatchSetNetworkconnectedEventFlags(4565, 4577, OFF);
            SetNetworkconnectedEventFlagID(4566, ON);
        }
    }
L0:
    WaitFor(EventFlag(4578));
    RestartEvent();
});

$Event(4613, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(4485) && (EventFlag(20009261) || EventFlag(20009262) || EventFlag(20009283))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(4485) && EventFlag(4483) && EventFlag(400720)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4485)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 20009261)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 20009262)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 20009283)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4483)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400720));
    RestartEvent();
});

$Event(4614, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    if (EventFlag(4265) && EventFlag(2048429210)) {
        SetEventFlagID(X0_4, ON);
    }
    if ((EventFlag(4260) && EventFlag(2048429222)) || (EventFlag(4263) && EventFlag(400711))) {
        SetEventFlagID(X4_4, ON);
    }
    if ((EventFlag(4267) || EventFlag(4268)) && EventFlag(2052409206)) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(400711)
        || EventFlag(400712)
        || EventFlag(400714)
        || (EventFlag(4263) && !EventFlag(2052409209) && EventFlag(400710))
        || (EventFlag(4263) && EventFlag(2052409209) && EventFlag(400711))) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4265)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048429210)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4260)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048429222)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4263)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4267)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4268)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2052409206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400711)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400712)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400714)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400710)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2052409209));
    RestartEvent();
});

$Event(4615, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(4285) && EventFlag(22009255)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(4286) && !EventFlag(400740)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4285)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 22009255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4286)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400740));
    RestartEvent();
});

$Event(4616, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if ((EventFlag(4305) && EventFlag(2049399706))
        || (EventFlag(4306) && EventFlag(2049399738) && !EventFlag(2049399743))) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4305)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049399706)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4306)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049399738)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049399743));
    RestartEvent();
});

$Event(4617, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if ((EventFlag(4325) && EventFlag(2051459726) && !EventFlag(2051459725))
        || (EventFlag(4326) && EventFlag(2051459745) && !EventFlag(400670) && !EventFlag(400671))) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4325)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2051459726)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2051459725)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4326)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2051459745)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400670)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400671));
    RestartEvent();
});

$Event(4619, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(21009208) && !EventFlag(400690) && !EventFlag(400692)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21009208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400690)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400692));
    RestartEvent();
});

$Event(4620, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    if (EventFlag(4365) && EventFlag(2046429205)) {
        SetEventFlagID(X0_4, ON);
    }
    if ((EventFlag(4366) && (EventFlag(2048459205) || EventFlag(2048459208) || EventFlag(2048459210)))
        || (EventFlag(4368) && EventFlag(21019214) && (EventFlag(21019207) || EventFlag(21019210)))) {
        SetEventFlagID(X4_4, ON);
    }
    if ((EventFlag(4366) && EventFlag(2048459223) && EventFlag(400611) && EventFlag(400612))
        || (EventFlag(4368) && (EventFlag(4898) || EventFlag(21019226)))) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(4368) && (EventFlag(21019207) || EventFlag(21019210))) {
        SetEventFlagID(X12_4, ON);
    }
    if (EventFlag(4368) && (EventFlag(21019214) || EventFlag(4898) || EventFlag(21019226))) {
        SetEventFlagID(X16_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4365)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2046429205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4366)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459208)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459210)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4368)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019214)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019207)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019210)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459223)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400611)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400612)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4898)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019226));
    RestartEvent();
});

$Event(4621, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(4385) && !EventFlag(4382) && (EventFlag(2045429255) || EventFlag(2045429262))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(400644) || EventFlag(4901)) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4385)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4382)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2045429255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2045429262)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400644)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4901));
    RestartEvent();
});

$Event(4622, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    if (EventFlag(4405) && !EventFlag(4899) && (EventFlag(2045429206) || EventFlag(2045429214))) {
        SetEventFlagID(X0_4, ON);
    }
    if ((EventFlag(4406) && EventFlag(21019305) && !EventFlag(4899))
        || (EventFlag(4406)
            && EventFlag(4403)
            && ((!EventFlag(400620) && EventFlag(7621))
                || (!EventFlag(400622) && !EventFlag(7621))
                || !EventFlag(400625)))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(4407) && EventFlag(20019211) && !EventFlag(4899)) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(4408) && !EventFlag(4899) && !EventFlag(400624)) {
        SetEventFlagID(X12_4, ON);
    }
    if (EventFlag(4406)
        && EventFlag(4403)
        && ((EventFlag(400620) && EventFlag(7621))
            || (EventFlag(400622) && !EventFlag(7621))
            || EventFlag(400625))) {
        SetEventFlagID(X16_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4405)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2045429206)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2045429214)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4406)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019305)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4407)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 20019211)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4899)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4408)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4403)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 7621)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400620)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400622)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400625));
    RestartEvent();
});

$Event(4623, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    if (EventFlag(4425) && EventFlag(2046429371)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(4425) && EventFlag(4897) && EventFlag(400602)) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(4426)
        && (EventFlag(21019355) || EventFlag(21019357) || EventFlag(21019367) || EventFlag(21019360))) {
        SetEventFlagID(X8_4, ON);
    }
    if (EventFlag(4426)
        && ((EventFlag(4423) && EventFlag(400602)) || (!EventFlag(4423) && EventFlag(4897)))) {
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4425)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2046429371)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4897)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400602)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4426)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019355)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019357)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019367)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 21019360)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4423));
    RestartEvent();
});

$Event(4624, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if (EventFlag(4445) && EventFlag(12059255)) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(4446)
        && !EventFlag(4896)
        && (EventFlag(2048459255) || EventFlag(2048459258))
        && !EventFlag(20019258)) {
        SetEventFlagID(X4_4, ON);
    }
    if ((EventFlag(4447) && EventFlag(20019258)) || (EventFlag(4446) && EventFlag(20019258))) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4445)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12059255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4446)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4896)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459255)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048459258)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4447)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 20019258));
    RestartEvent();
});

$Event(4625, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    if (EventFlag(4465) && !EventFlag(4900) && (EventFlag(2048439215) || EventFlag(2048439225))) {
        SetEventFlagID(X0_4, ON);
    }
    if (!EventFlag(4900)
        && ((EventFlag(4466) && EventFlag(22009215)) || (EventFlag(4467) && EventFlag(22009235)))) {
        SetEventFlagID(X4_4, ON);
    }
    if (EventFlag(4469) && !EventFlag(4900) && !EventFlag(400634)) {
        SetEventFlagID(X8_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4465)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048439215)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2048439225)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4466)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 22009215)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4467)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 22009235)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4900)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4469)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400634));
    RestartEvent();
});

$Event(4626, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    if (EventFlag(4505) && EventFlag(2051459220) && !EventFlag(2051459725)) {
        SetEventFlagID(X0_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4505)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2051459220)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2051459725));
    RestartEvent();
});

$Event(4627, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    if (EventFlag(4565) && (EventFlag(2049449215) || EventFlag(2049449220) || EventFlag(2049449205))) {
        SetEventFlagID(X0_4, ON);
    }
    if (EventFlag(4565) && ((EventFlag(2049449211) && EventFlag(400730)) || EventFlag(4909))) {
        SetEventFlagID(X4_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4565)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049449215)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049449220)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049449205)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 2049449211)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 400730)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 4909));
    RestartEvent();
});

$Event(4841, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(EventFlag(X16_4));
    WaitFor(EventFlag(X4_4));
    if (!EventFlag(X0_4)) {
        BatchSetEventFlags(X32_4, X40_4, OFF);
        if (!AnyBatchEventFlags(X20_4, X28_4)) {
            time = TimeOfDayInRange(6, 0, 0, 11, 59, 59);
            time2 = TimeOfDayInRange(12, 0, 0, 19, 59, 59);
            time3 = TimeOfDayInRange(20, 0, 0, 5, 59, 59);
            if (time) {
                SetEventFlagID(X20_4, ON);
            }
            if (time2) {
                SetEventFlagID(X24_4, ON);
            }
            if (time3) {
                SetEventFlagID(X28_4, ON);
            }
        }
L15:
        GotoIf(L0, EventFlag(X20_4));
        GotoIf(L4, EventFlag(X24_4));
        GotoIf(L8, EventFlag(X28_4));
L0:
        BatchSetEventFlags(X32_4, X40_4, OFF);
        if (!EventFlag(X48_4)) {
            if (!EventFlag(X44_4)) {
                WaitFixedTimeSeconds(2);
                time4 = TimeOfDayInRange(12, 0, 0, 19, 59, 59);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time4);
                GotoIf(L19, EventFlag(X40_4));
                GotoIf(L2, EventFlag(X36_4));
                if (!time4) {
                    GotoIf(L1, EventFlag(X32_4));
                }
            }
L1:
            SetEventFlagID(X44_4, ON);
            if (!EventFlag(X48_4)) {
                BatchSetEventFlags(X32_4, X40_4, OFF);
                WaitFixedTimeSeconds(2);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || TimeOfDayInRange(20, 0, 0, 5, 59, 59));
                if (!EventFlag(X40_4)) {
                    GotoIf(L19, EventFlag(X36_4));
                    if (!EventFlag(X32_4)) {
                        GotoIf(L2, time5);
                    }
                }
            }
        }
L2:
        SetEventFlagID(X44_4, ON);
        SetEventFlagID(X48_4, ON);
        BatchSetEventFlags(X32_4, X40_4, OFF);
        WaitFixedTimeSeconds(2);
        time5 = TimeOfDayInRange(6, 0, 0, 11, 59, 59);
        WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time5);
        Goto(L19);
L4:
        BatchSetEventFlags(X32_4, X40_4, OFF);
        if (!EventFlag(X48_4)) {
            if (!EventFlag(X44_4)) {
                WaitFixedTimeSeconds(2);
                time6 = TimeOfDayInRange(20, 0, 0, 5, 59, 59);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time6);
                GotoIf(L5, time6);
                GotoIf(L5, EventFlag(X32_4));
                GotoIf(L6, EventFlag(X36_4));
                GotoIf(L19, EventFlag(X40_4));
            }
L5:
            SetEventFlagID(X44_4, ON);
            if (!EventFlag(X48_4)) {
                BatchSetEventFlags(X32_4, X40_4, OFF);
                WaitFixedTimeSeconds(2);
                time7 = TimeOfDayInRange(6, 0, 0, 11, 59, 59);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time7);
                if (!EventFlag(X36_4)) {
                    GotoIf(L19, EventFlag(X40_4));
                    if (!time7) {
                        GotoIf(L6, EventFlag(X32_4));
                    }
                }
            }
        }
L6:
        SetEventFlagID(X44_4, ON);
        SetEventFlagID(X48_4, ON);
        BatchSetEventFlags(X32_4, X40_4, OFF);
        WaitFixedTimeSeconds(2);
        WaitFor(AnyBatchEventFlags(X32_4, X40_4) || TimeOfDayInRange(12, 0, 0, 19, 59, 59));
        Goto(L19);
L8:
        if (!EventFlag(X48_4)) {
            if (!EventFlag(X44_4)) {
                BatchSetEventFlags(X32_4, X40_4, OFF);
                WaitFixedTimeSeconds(2);
                time8 = TimeOfDayInRange(6, 0, 0, 11, 59, 59);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time8);
                GotoIf(L10, EventFlag(X36_4));
                GotoIf(L19, EventFlag(X40_4));
                if (!EventFlag(X32_4)) {
                    GotoIf(L9, time8);
                }
            }
L9:
            SetEventFlagID(X44_4, ON);
            if (!EventFlag(X48_4)) {
                BatchSetEventFlags(X32_4, X40_4, OFF);
                WaitFixedTimeSeconds(2);
                time9 = TimeOfDayInRange(12, 0, 0, 19, 59, 59);
                WaitFor(AnyBatchEventFlags(X32_4, X40_4) || time9);
                if (!EventFlag(X40_4)) {
                    GotoIf(L19, EventFlag(X36_4));
                    if (!EventFlag(X32_4)) {
                        GotoIf(L10, time9);
                    }
                }
            }
        }
L10:
        SetEventFlagID(X44_4, ON);
        SetEventFlagID(X48_4, ON);
        BatchSetEventFlags(X32_4, X40_4, OFF);
        WaitFixedTimeSeconds(2);
        WaitFor(AnyBatchEventFlags(X32_4, X40_4) || TimeOfDayInRange(20, 0, 0, 5, 59, 59));
        Goto(L19);
    }
L19:
    SetEventFlagID(X0_4, ON);
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X8_4));
        SetEventFlagID(X0_4, OFF);
        SetEventFlagID(X12_4, ON);
        BatchSetEventFlags(X20_4, X28_4, OFF);
        BatchSetEventFlags(X44_4, X48_4, OFF);
        WaitFixedTimeFrames(1);
        time10 = TimeOfDayInRange(6, 0, 0, 11, 59, 59);
        time11 = TimeOfDayInRange(12, 0, 0, 19, 59, 59);
        time12 = TimeOfDayInRange(20, 0, 0, 5, 59, 59);
        if (time10) {
            SetEventFlagID(X20_4, ON);
        }
        if (time11) {
            SetEventFlagID(X24_4, ON);
        }
        if (time12) {
            SetEventFlagID(X28_4, ON);
        }
    }
L20:
    RestartEvent();
});

$Event(4842, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X16_4));
    if (EventFlag(X4_4)) {
        if (EventFlag(X8_4)) {
            WaitFor(EventFlag(X12_4));
        }
        GotoIf(L0, !EventFlag(X12_4));
        WaitFor(EventFlag(X20_4));
        SetEventFlagID(X16_4, ON);
        if (AnyBatchEventFlags(X24_4, X28_4)) {
            SetEventFlagID(X32_4, ON);
        }
        Goto(L2);
L2:
        Goto(L20);
L0:
        WaitFor(EventFlag(X20_4));
        SetEventFlagID(X8_4, ON);
        if (AnyBatchEventFlags(X24_4, X28_4)) {
            SetEventFlagID(X32_4, ON);
        }
    } else {
L10:
        WaitFor(EventFlag(X0_4) || AnyBatchEventFlags(X36_4, X40_4));
        if (EventFlag(X0_4)) {
            SetEventFlagID(X4_4, ON);
            GotoIf(L20, EventFlag(X0_4));
        }
        SetEventFlagID(X32_4, ON);
        Goto(L20);
    }
L20:
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(4843, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L1, EventFlag(X0_4));
    GotoIf(L10, EventFlag(X4_4));
    WaitFor(EventFlag(X0_4) || EventFlag(X4_4));
    RestartEvent();
L1:
    if (!EventFlag(20019256)) {
        SetEventFlagID(20019256, ON);
        SetEventFlagID(4458, ON);
    }
    if (EventFlag(4891) && !EventFlag(21019375)) {
        SetEventFlagID(21019375, ON);
        SetEventFlagID(4438, ON);
    }
    if (EventFlag(4892) && !EventFlag(21019222)) {
        SetEventFlagID(21019222, ON);
        SetEventFlagID(4378, ON);
    }
    if (EventFlag(20019224) && !EventFlag(20019223)) {
        SetEventFlagID(20019223, ON);
        SetEventFlagID(4418, ON);
    } else if (EventFlag(4893) && !EventFlag(20019227)) {
        SetEventFlagID(20019227, ON);
    }
    if (EventFlag(4894) && !EventFlag(20019305)) {
        SetEventFlagID(20019305, ON);
        SetEventFlagID(4478, ON);
    }
    if (EventFlag(4895) && !EventFlag(2045429298)) {
        SetEventFlagID(2045429298, ON);
        SetEventFlagID(4398, ON);
    }
    if (!EventFlag(2049449225)) {
        SetEventFlagID(2049449225, ON);
        SetEventFlagID(4578, ON);
    }
    GotoIf(L10, !EventFlag(4924));
    Goto(L20);
L10:
    if (!EventFlag(4896)) {
        SetEventFlagID(4896, ON);
    }
    if (!EventFlag(4897)) {
        SetEventFlagID(4897, ON);
    }
    if (EventFlag(4892) && !EventFlag(4898)) {
        SetEventFlagID(4898, ON);
    }
    if (!EventFlag(4899)) {
        SetEventFlagID(4899, ON);
    }
    if (EventFlag(22009209)) {
        SetEventFlagID(22009209, OFF);
    }
    if (!EventFlag(4900)) {
        SetEventFlagID(4900, ON);
    }
    if (EventFlag(4895) && !EventFlag(4901)) {
        SetEventFlagID(4901, ON);
    }
    if (!EventFlag(4909)) {
        SetEventFlagID(4909, ON);
    }
    SetEventFlagID(4924, ON);
    Goto(L20);
L20:
    EndEvent();
});

$Event(4844, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L0, !EventFlag(2046429214));
    GotoIf(L1, !EventFlag(2048459225));
    GotoIf(L2, !EventFlag(21019220));
    Goto(L10);
L0:
    WaitFor(EventFlag(4925) || EventFlag(4927));
    SetEventFlagID(2046429214, ON);
    SetEventFlagID(4378, ON);
    Goto(L1);
L1:
    WaitFor(EventFlag(21010800));
    SetEventFlagID(2048459225, ON);
    Goto(L2);
L2:
    WaitFor(EventFlag(21019216));
    SetEventFlagID(21019220, ON);
    Goto(L10);
L10:
    EndEvent();
});

$Event(4845, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L1, !EventFlag(X0_4) && !EventFlag(X8_4) && EventFlag(X4_4));
    GotoIf(L2, EventFlag(X0_4) && !EventFlag(X8_4) && EventFlag(X4_4));
    GotoIf(L3, EventFlag(X0_4) && EventFlag(X8_4) && EventFlag(X4_4));
    GotoIf(L4, 
        EventFlag(X0_4)
            && EventFlag(X8_4)
            && !EventFlag(X24_4)
            && !EventFlag(X32_4)
            && EventFlag(X28_4));
    GotoIf(L5, 
        EventFlag(X0_4)
            && EventFlag(X8_4)
            && EventFlag(X24_4)
            && !EventFlag(X32_4)
            && EventFlag(X28_4));
    GotoIf(L6, 
        !EventFlag(X0_4)
            && !EventFlag(X8_4)
            && !EventFlag(X24_4)
            && !EventFlag(X32_4)
            && EventFlag(X28_4));
    GotoIf(L7, 
        EventFlag(X0_4)
            && !EventFlag(X8_4)
            && EventFlag(X24_4)
            && !EventFlag(X32_4)
            && EventFlag(X28_4));
    EndIf(EventFlag(X0_4) && EventFlag(X8_4) && EventFlag(X24_4) && EventFlag(X32_4));
    if (!(!EventFlag(X4_4) && !EventFlag(X28_4))) {
        WaitFixedTimeFrames(1);
        EndEvent();
L1:
        WaitFor(
            (EventFlag(X0_4)
                && !EventFlag(X8_4)
                && (!EntityInRadiusOfEntity(20000, X12_4, X16_4, 1) || !EventFlag(X20_4)))
                || EventFlag(X8_4)
                || EventFlag(X28_4));
        RestartIf(EventFlag(X8_4));
        RestartIf(EventFlag(X28_4));
        DisplayGenericDialog(X44_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X8_4, ON);
        RestartEvent();
L2:
        WaitFor(ElapsedSeconds(1));
        DisplayGenericDialog(X44_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X8_4, ON);
        RestartEvent();
L3:
        WaitFor(!EventFlag(X4_4) && EventFlag(X28_4));
        RestartEvent();
L4:
        WaitFor(
            (EventFlag(X24_4)
                && !EventFlag(X32_4)
                && (!EntityInRadiusOfEntity(20000, X36_4, X16_4, 1) || !EventFlag(X40_4)))
                || EventFlag(X32_4));
        EndIf(EventFlag(X32_4));
        DisplayGenericDialog(X48_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X32_4, ON);
        Goto(L10);
L5:
        WaitFor(ElapsedSeconds(1));
        DisplayGenericDialog(X48_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X32_4, ON);
        Goto(L10);
L6:
        WaitFor(
            (EventFlag(X0_4)
                && !EventFlag(X8_4)
                && EventFlag(X24_4)
                && !EventFlag(X32_4)
                && (!EntityInRadiusOfEntity(20000, X36_4, X16_4, 1) || !EventFlag(X40_4)))
                || EventFlag(X32_4));
        EndIf(EventFlag(X32_4));
        DisplayGenericDialog(X48_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X8_4, ON);
        SetEventFlagID(X32_4, ON);
        Goto(L10);
L7:
        WaitFor(ElapsedSeconds(1));
        DisplayGenericDialog(X48_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
        SetEventFlagID(X8_4, ON);
        SetEventFlagID(X32_4, ON);
        Goto(L10);
L10:
        EndEvent();
    }
L20:
    WaitFor(EventFlag(X4_4) || EventFlag(X28_4));
    RestartEvent();
});

$Event(4846, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(L10, CountEventFlags(TargetEventFlagType.EventFlag, X16_4, X20_4) == 1);
    Goto(L20);
L10:
    EndIf(!EventFlag(X4_4));
    WaitFor(EventFlag(X8_4));
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(X12_4, ON);
    EndEvent();
L20:
    WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, X16_4, X20_4) == 1);
    RestartEvent();
});

$Event(4847, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X16_4));
    EndIf(EventFlag(X20_4));
    GotoIf(L0, EventFlag(X0_4));
    GotoIf(L1, !EventFlag(X0_4));
L0:
    SetEventFlagID(X20_4, ON);
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    SetEventFlagID(X4_4, ON);
    EndEvent();
L1:
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(4848, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(!EventFlag(X4_4));
    EndIf(!(EventFlag(X8_4) && EventFlag(X12_4)));
    AwardItemLot(X16_4);
    EndEvent();
});

$Event(4849, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X0_4));
    EndIf(EventFlag(X32_4));
    EndIf(EventFlag(X28_4));
    EndIf(!(EventFlag(X4_4) || EventFlag(X8_4)));
    GotoIf(L1, !EventFlag(X16_4));
    GotoIf(L2, EventFlag(X20_4));
    Goto(L20);
L1:
    SetEventFlagID(X12_4, ON);
    EndEvent();
L2:
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X24_4));
        SetEventFlagID(X12_4, ON);
    }
    WaitFor(!EventFlag(X20_4));
    RestartEvent();
L20:
    SetEventFlagID(X12_4, OFF);
    WaitFor(!EventFlag(X16_4) || EventFlag(X20_4) || EventFlag(X28_4));
    RestartEvent();
});

$Event(4850, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X12_4));
    EndIf(EventFlag(X16_4));
    WaitFor(EventFlag(X12_4) || EventFlag(X16_4));
    EndIf(EventFlag(X16_4));
    BatchSetNetworkconnectedEventFlags(X0_4, X8_4, OFF);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SaveRequest();
});

$Event(4851, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4, X72_4, X76_4) {
    EndIf(!PlayerIsInOwnWorld());
    GotoIf(S0, !(EventFlag(X36_4) && (EventFlag(4447) || EventFlag(20019258))));
    Goto(L18);
S0:
    EndIf(EventFlag(X48_4));
    GotoIf(S1, !(EventFlag(X64_4) || EventFlag(X68_4)));
    Goto(L19);
S1:
    GotoIf(L1, !EventFlag(X8_4) && !EventFlag(9146));
    GotoIf(L2, !EventFlag(X16_4) && !EventFlag(X20_4) && !EventFlag(X24_4));
    GotoIf(L3, EventFlag(X16_4) && !EventFlag(X20_4) && !EventFlag(X24_4));
    flag = EventFlag(X16_4) && EventFlag(X20_4);
    if (flag2) {
        SetEventFlagID(X16_4, OFF);
    }
    GotoIf(L4, !EventFlag(X36_4) && !EventFlag(X44_4));
    flag2 &= EventFlag(X36_4);
    flag2 &= EventFlag(X44_4) || EventFlag(X56_4);
    GotoIf(L6, flag2);
    Goto(L20);
L1:
    GotoIf(S2, !(EventFlag(X0_4) && (EventFlag(X4_4) || EventFlag(X20_4))));
    SetEventFlagID(X8_4, ON);
    Goto(L2);
S2:
    Goto(L20);
L2:
    WaitFor(EventFlag(X12_4));
    SetEventFlagID(X16_4, ON);
    RestartEvent();
L3:
    WaitFor(EventFlag(X20_4) || EventFlag(X24_4));
    SetEventFlagID(X16_4, OFF);
    Goto(L20);
L4:
    flag3 = (EventFlag(X28_4) || EventFlag(X52_4)) && EventFlag(X32_4) && EventFlag(4446);
    flag4 = EventFlag(X44_4) && !EventFlag(X56_4);
    if (flag3 || flag4) {
        if (!flag4.Passed) {
            SetEventFlagID(X36_4, ON);
            SetEventFlagID(X40_4, ON);
            EndEvent();
        }
        SetEventFlagID(X48_4, ON);
        SetEventFlagID(X60_4, ON);
        EndEvent();
    }
L5:
    WaitFor(EventFlag(X44_4) && !EventFlag(X56_4));
    SetEventFlagID(X48_4, ON);
    SetEventFlagID(X60_4, ON);
    EndEvent();
L6:
    WaitFor(EventFlag(X44_4) || EventFlag(X48_4));
    SetEventFlagID(X36_4, OFF);
    SetEventFlagID(X40_4, OFF);
    if (!EventFlag(X56_4)) {
        SetEventFlagID(X48_4, ON);
        SetEventFlagID(X60_4, ON);
    }
    EndEvent();
L18:
    SetEventFlagID(X36_4, OFF);
    EndEvent();
L19:
    if (!EventFlag(X48_4)) {
        SetEventFlagID(X16_4, OFF);
        SetEventFlagID(X36_4, OFF);
        SetEventFlagID(X40_4, OFF);
        SetEventFlagID(X48_4, ON);
        SetEventFlagID(X60_4, ON);
        SetEventFlagID(X72_4, ON);
        SetEventFlagID(X76_4, ON);
    }
    EndEvent();
L20:
    EndEvent();
});

// Miquella's Greatrune Breaking (DLC)
$Event(4852, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4927) && EventFlag(4903));
    WaitFor(EventFlag(4927));
    WaitFixedTimeSeconds(6);
    DisplayGenericDialogAndSetEventFlags(1030040, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 100, 2048452713, 2048452712, 2048452712);
    WaitFor(EventFlag(2048452713) || EventFlag(2048452712));
    WaitFixedTimeSeconds(0.5);
    SetNetworkconnectedEventFlagID(4903, ON);
    DisplayGenericDialog(1030041, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 100);
});

$Event(4853, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    if (EventFlag(X0_4)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(4854, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X4_4));
    WaitFor(
        (EventFlag(X0_4)
            && !EventFlag(X8_4)
            && (!EntityInRadiusOfEntity(20000, X12_4, X16_4, 1) || !EventFlag(X20_4)))
            || !EventFlag(X4_4)
            || EventFlag(X8_4));
    EndIf(!EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    DisplayGenericDialog(X24_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 0);
    SetEventFlagID(X8_4, ON);
    EndEvent();
});

$Event(4857, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X0_4));
    if (Signed(X4_4) != 0) {
        AwardItemsIncludingClients(X4_4);
    }
    WaitFixedTimeSeconds(5);
    if (Signed(X8_4) != 0) {
        AwardItemsIncludingClients(X8_4);
    }
});
$Event(4858, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4) && !EventFlag(X8_4));
    AwardItemLot(X12_4);
    EndEvent();
});

$Event(4859, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetEventFlagID(X0_4, OFF);
    if ((EventFlag(X4_4)
        && !EventFlag(X8_4)
        && !EventFlag(X12_4)
        && !(EventFlag(X16_4) && EventFlag(X20_4)))
        || (EventFlag(X16_4) && EventFlag(X20_4) && EventFlag(X24_4))) {
        SetEventFlagID(X0_4, ON);
    }
    EndEvent();
});

$Event(4930, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    SetEventFlagID(X16_4, ON);
    WaitFor(EventFlag(X4_4) && !EventFlag(X8_4));
    AwardItemLot(X12_4);
    SetEventFlagID(X16_4, OFF);
    SetEventFlagID(X20_4, ON);
    EndEvent();
});

$Event(4931, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!(EventFlag(21009240) && !EventFlag(21009214)));
    GotoIf(L1, EventFlag(21009210));
    GotoIf(L2, EventFlag(21009211));
    EndEvent();
L1:
    SetEventFlagID(21009223, ON);
    SetEventFlagID(21009206, ON);
    SetEventFlagID(21009212, ON);
    SetEventFlagID(21009214, ON);
    AwardItemLot(106900);
    EndEvent();
L2:
    SetEventFlagID(21009223, ON);
    SetEventFlagID(21009207, ON);
    SetEventFlagID(21009212, ON);
    SetEventFlagID(21009213, ON);
    SetEventFlagID(21009214, ON);
    EndEvent();
});

$Event(4932, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!(EventFlag(2051459760) && !EventFlag(2051459734)));
    GotoIf(L1, EventFlag(2051459743));
    GotoIf(L2, EventFlag(2051459744));
    EndEvent();
L1:
    SetEventFlagID(2051459747, ON);
    SetEventFlagID(2051459734, ON);
    EndEvent();
L2:
    SetEventFlagID(2051459748, ON);
    SetEventFlagID(2051459734, ON);
    SetEventFlagID(2051459742, ON);
    EndEvent();
});
// END GIANT DLC SEGMENT

$Event(60701, Default, function(X0_4, X4_4) {
    if (PlayerIsInOwnWorld()) {
        WaitFor(EventFlag(X0_4) || EventFlag(X4_4));
        SetEventFlagID(X0_4, ON);
        SetEventFlagID(X4_4, ON);
        EndEvent();
    }
L15:
    WaitFor(EventFlag(6000) && !EventFlag(6000));
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(0);
});

$Event(9930, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    if (!EventFlag(X4_4)) {
        AwardGesture(X8_4);
        SetEventFlagID(X4_4, ON);
    }
    SetEventFlagID(X0_4, OFF);
});

$Event(9940, Default, function() {
    WaitFor(EventFlag(9992));
    SetEventFlagID(82000, ON);
    SetEventFlagID(82010, ON);
    SetEventFlagID(82011, ON);
    SetEventFlagID(82012, ON);
    SetEventFlagID(82020, ON);
    SetEventFlagID(82021, ON);
    SetEventFlagID(82022, ON);
    SetEventFlagID(82030, ON);
    SetEventFlagID(82031, ON);
    SetEventFlagID(82032, ON);
    SetEventFlagID(82040, ON);
    SetEventFlagID(82041, ON);
    SetEventFlagID(82050, ON);
    SetEventFlagID(82051, ON);
    SetEventFlagID(82052, ON);
    SetEventFlagID(82060, ON);
    SetEventFlagID(82061, ON);
    SetEventFlagID(82070, ON);
    SetEventFlagID(82071, ON);
    SetEventFlagID(82080, ON);
    SetEventFlagID(82081, ON);
});

$Event(9941, Default, function() {
    WaitFor(EventFlag(9993));
    BatchSetEventFlags(10000000, 10000004, ON);
    BatchSetEventFlags(11000000, 11000001, ON);
    BatchSetEventFlags(11000003, 11000007, ON);
    BatchSetEventFlags(12010000, 12010003, ON);
    BatchSetEventFlags(12020000, 12020004, ON);
    BatchSetEventFlags(12030000, 12030001, ON);
    BatchSetEventFlags(12040000, 12040001, ON);
    BatchSetEventFlags(13000000, 13000001, ON);
    BatchSetEventFlags(14000000, 14000003, ON);
    BatchSetEventFlags(15000000, 15000004, ON);
    BatchSetEventFlags(16000000, 16000004, ON);
    BatchSetEventFlags(18000000, 16000001, ON);
    BatchSetEventFlags(34120000, 34120001, ON);
    BatchSetEventFlags(35000000, 35000003, ON);
    BatchSetEventFlags(39200000, 39200001, ON);
    SetEventFlagID(30000000, ON);
    SetEventFlagID(30010000, ON);
    SetEventFlagID(30020000, ON);
    SetEventFlagID(30030000, ON);
    SetEventFlagID(30040000, ON);
    SetEventFlagID(30050000, ON);
    SetEventFlagID(30060000, ON);
    SetEventFlagID(30070000, ON);
    SetEventFlagID(30080000, ON);
    SetEventFlagID(30090000, ON);
    SetEventFlagID(30100000, ON);
    SetEventFlagID(30110000, ON);
    SetEventFlagID(30120000, ON);
    SetEventFlagID(30130000, ON);
    SetEventFlagID(30140000, ON);
    SetEventFlagID(30150000, ON);
    SetEventFlagID(30160000, ON);
    SetEventFlagID(30170000, ON);
    SetEventFlagID(30180000, ON);
    SetEventFlagID(30190000, ON);
    SetEventFlagID(1042360000, ON);
    SetEventFlagID(1042370000, ON);
    SetEventFlagID(1042380000, ON);
    SetEventFlagID(1045380000, ON);
    SetEventFlagID(1045350000, ON);
    SetEventFlagID(1044350000, ON);
    SetEventFlagID(1041360000, ON);
    SetEventFlagID(1043340000, ON);
    SetEventFlagID(1041330000, ON);
    SetEventFlagID(1043310000, ON);
    SetEventFlagID(1044330000, ON);
    SetEventFlagID(1044330001, ON);
    SetEventFlagID(1039400000, ON);
    SetEventFlagID(1035420000, ON);
    SetEventFlagID(1039420000, ON);
    SetEventFlagID(1035440000, ON);
    SetEventFlagID(1037440000, ON);
    SetEventFlagID(1033460000, ON);
    SetEventFlagID(1038480000, ON);
    SetEventFlagID(1036490000, ON);
    SetEventFlagID(1036490001, ON);
    SetEventFlagID(1036410000, ON);
    SetEventFlagID(1038510000, ON);
    SetEventFlagID(1042540000, ON);
    SetEventFlagID(1043500000, ON);
    SetEventFlagID(1036540000, ON);
    SetEventFlagID(1037520000, ON);
    BatchSetEventFlags(1099000000, 1099000015, ON);
    BatchSetEventFlags(1099000190, 1099000195, ON);
    WaitFor(!EventFlag(9991));
    BatchSetEventFlags(10000000, 10000004, OFF);
    BatchSetEventFlags(11000000, 11000001, OFF);
    BatchSetEventFlags(11000003, 11000007, OFF);
    BatchSetEventFlags(12010000, 12010003, OFF);
    BatchSetEventFlags(12020000, 12020004, OFF);
    BatchSetEventFlags(12030000, 12030001, OFF);
    BatchSetEventFlags(12040000, 12040001, OFF);
    BatchSetEventFlags(13000000, 13000001, OFF);
    BatchSetEventFlags(14000000, 14000003, OFF);
    BatchSetEventFlags(15000000, 15000004, OFF);
    BatchSetEventFlags(16000000, 16000004, OFF);
    BatchSetEventFlags(18000000, 16000001, OFF);
    BatchSetEventFlags(35000000, 35000003, OFF);
    BatchSetEventFlags(39200000, 39200001, OFF);
    BatchSetEventFlags(1099000000, 1099000015, OFF);
    BatchSetEventFlags(1099000190, 1099000195, OFF);
    SetEventFlagID(30000000, OFF);
    SetEventFlagID(30000001, OFF);
    SetEventFlagID(30000002, OFF);
    SetEventFlagID(30000003, OFF);
    SetEventFlagID(30000004, OFF);
    SetEventFlagID(30050000, OFF);
    SetEventFlagID(30060000, OFF);
    SetEventFlagID(30070000, OFF);
    SetEventFlagID(30080000, OFF);
    SetEventFlagID(30090000, OFF);
    SetEventFlagID(30100000, OFF);
    SetEventFlagID(30110000, OFF);
    SetEventFlagID(30120000, OFF);
    SetEventFlagID(30130000, OFF);
    SetEventFlagID(30140000, OFF);
    SetEventFlagID(30150000, OFF);
    SetEventFlagID(30160000, OFF);
    SetEventFlagID(30170000, OFF);
    SetEventFlagID(30180000, OFF);
    SetEventFlagID(30190000, OFF);
    SetEventFlagID(1042360000, OFF);
    SetEventFlagID(1042370000, OFF);
    SetEventFlagID(1042380000, OFF);
    SetEventFlagID(1045380000, OFF);
    SetEventFlagID(1045350000, OFF);
    SetEventFlagID(1044350000, OFF);
    SetEventFlagID(1041360000, OFF);
    SetEventFlagID(1043340000, OFF);
    SetEventFlagID(1041330000, OFF);
    SetEventFlagID(1043310000, OFF);
    SetEventFlagID(1044330000, OFF);
    SetEventFlagID(1044330001, OFF);
    SetEventFlagID(1039400000, OFF);
    SetEventFlagID(1035420000, OFF);
    SetEventFlagID(1039420000, OFF);
    SetEventFlagID(1035440000, OFF);
    SetEventFlagID(1037440000, OFF);
    SetEventFlagID(1033460000, OFF);
    SetEventFlagID(1038480000, OFF);
    SetEventFlagID(1036490000, OFF);
    SetEventFlagID(1036490001, OFF);
    SetEventFlagID(1036410000, OFF);
    SetEventFlagID(1038510000, OFF);
    SetEventFlagID(1042540000, OFF);
    SetEventFlagID(1043500000, OFF);
    SetEventFlagID(1036540000, OFF);
    SetEventFlagID(1037520000, OFF);
    RestartEvent();
});

$Event(9943, Default, function() {
    WaitFor(EventFlag(9993));
    AwardItemsIncludingClients(100400);
});

$Event(9945, Default, function() {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(9995));
    if (!PlayerIsInOwnWorld()) {
        WarpCharacterAndSetFloor(20000, TargetEntityType.Character, 10000, 260, 10000);
    }
L1:
    WaitFixedTimeSeconds(2.4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.6);
    }
    RestartEvent();
});

$Event(9946, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4));
    SetEventFlagID(X0_4, ON);
});

$Event(9950, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    SetEventFlagID(X4_4, ON);
});

//script test on flask drink
$Event(1802, Restart, function() {
   WaitFor(CharacterHasStateInfo(10000, 275));
   BonfirelikeRecovery();
   WaitFixedTimeSeconds(4);
   FadeToBlack(0, 0, false, -1);
   //WarpPlayer(60, 54, 53, 0, 1054530980, 0);
});

//Erdtree Teleporter Event flag handler
$Event(9005000, Restart, function() {
    EndIf(!EventFlag(1099000105));
    WaitFixedTimeFrames(5);
    SetEventFlagID(1099000105, OFF);
});

//test script - interaction with Rallying Standard/Golden Vow + drain effects on friendlies
$Event(9005010, Restart, function(X0_4) {
    WaitFor((CharacterHasSpEffect(X0_4, 1768) || CharacterHasSpEffect(X0_4, 1730)) && (CharacterHasSpEffect(X0_4, 7012201) || CharacterHasSpEffect(X0_4, 108500) || CharacterHasSpEffect(X0_4, 108501) || CharacterHasSpEffect(X0_4, 1625001) || CharacterHasSpEffect(X0_4, 1620000) || CharacterHasSpEffect(X0_4, 108600)));
    EndIf(CharacterTargetedBy(X0_4, 10000));
    ClearSpEffect(X0_4, 7012201);
    ClearSpEffect(X0_4, 108500);
    ClearSpEffect(X0_4, 108501);
    ClearSpEffect(X0_4, 1625001);
    ClearSpEffect(X0_4, 1620000);
    ClearSpEffect(X0_4, 108600);
    RestartEvent();
});

// Forge Portal Rune Handler - Flag, Asset, Goods, VFX
$Event(9005998, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(X0_4));
    DisableAsset(X4_4);
    
    WaitFor(EventFlag(X0_4));
    RemoveItemFromPlayer(ItemType.Goods, X8_4, 1);
    EnableAsset(X4_4);
    
    SpawnOneshotSFX(TargetEntityType.Asset, X4_4, 101, X12_4);
    
    if (CountEventFlags(TargetEventFlagType.EventFlag, 1052521354, 1052521358) == 1)
        SetCameraVibration(67, TargetEntityType.Asset, 1052521350, 101, 5, 15);
    else if (CountEventFlags(TargetEventFlagType.EventFlag, 1052521354, 1052521358) == 2)
        SetCameraVibration(67, TargetEntityType.Asset, 1052521350, 101, 5, 16);
    else if (CountEventFlags(TargetEventFlagType.EventFlag, 1052521354, 1052521358) == 3)
        SetCameraVibration(67, TargetEntityType.Asset, 1052521350, 101, 5, 17);
    else if (CountEventFlags(TargetEventFlagType.EventFlag, 1052521354, 1052521358) == 4)
        SetCameraVibration(67, TargetEntityType.Asset, 1052521350, 101, 5, 18);
    else if (CountEventFlags(TargetEventFlagType.EventFlag, 1052521354, 1052521358) == 5)
        SetCameraVibration(67, TargetEntityType.Asset, 1052521350, 101, 5, 25);
    
    RestartEvent();
});

//Forge Teleporter
$Event(9006000, Default, function() {
    //BatchSetEventFlags(1052520354, 1052520358, OFF);
    GotoIf(L0, AllBatchEventFlags(1052520354, 1052520358));
    
    DisableHit(1052521350);
    if (!EventFlag(1052525350)) {
        SetEventFlagID(1052525350, ON);
        CreateAssetfollowingSFX(1052521350, 101, 900000002); //pre-enabled portal visual
    }
    
    WaitFor(InArea(10000, 1052521359) && ActionButtonInArea(9221, 1052521350));
    
    //ForceAnimationPlayback(10000, 50250, false, false, false); // Item to ground
    //ForceAnimationPlayback(10000, 50250, false, false, false); // Item raised
    //ForceAnimationPlayback(10000, 50430, false, false, false); // Consume Small Rune
    //ForceAnimationPlayback(10000, 50520, false, false, false); // Consume big rune
    //ForceAnimationPlayback(10000, 50530, false, false, false); // Prayer consume
    //ForceAnimationPlayback(10000, 50600, false, false, false); // Consume big rune
    //ForceAnimationPlayback(10000, 50830, false, false, false); // Consumable golden vow
    //ForceAnimationPlayback(10000, 60440, false, false, false); // Raised hand?
    //ForceAnimationPlayback(10000, 60800, false, false, false); // Raised hand?
    if (PlayerHasItem(ItemType.Goods, 8060) ||
        PlayerHasItem(ItemType.Goods, 8061) ||
        PlayerHasItem(ItemType.Goods, 8062) ||
        PlayerHasItem(ItemType.Goods, 8063) ||
        PlayerHasItem(ItemType.Goods, 8064)) {
        RotateCharacter(10000, 1052521350, -1, true);
        ForceAnimationPlayback(10000, 60510, false, false, false); // Raised hand offering
        WaitFixedTimeFrames(65);
    }
    else {
        ForceAnimationPlayback(10000, 50050, false, false, false); // Dont have item
        WaitFixedTimeFrames(45);
        //DisplayGenericDialog(4002, PromptType.OKCANCEL, NumberofOptions.OneButton, 1052521350, 3);
        SpawnOneshotSFX(TargetEntityType.Asset, 1052521360, 100, 900000011);
        RestartEvent();
    }
    
    if (!EventFlag(1052520354) && PlayerHasItem(ItemType.Goods, 8060)) {
        SetEventFlagID(1052520354, ON);
        WaitFixedTimeSeconds(0.5);
    }
    if (!EventFlag(1052520355) && PlayerHasItem(ItemType.Goods, 8061)) {
        SetEventFlagID(1052520355, ON);
        WaitFixedTimeSeconds(0.55);
    }
    if (!EventFlag(1052520356) && PlayerHasItem(ItemType.Goods, 8062)) {
        SetEventFlagID(1052520356, ON);
        WaitFixedTimeSeconds(0.65);
    }
    if (!EventFlag(1052520357) && PlayerHasItem(ItemType.Goods, 8063)) {
        SetEventFlagID(1052520357, ON);
        WaitFixedTimeSeconds(0.725);
    }
    if (!EventFlag(1052520358) && PlayerHasItem(ItemType.Goods, 8064)) {
        SetEventFlagID(1052520358, ON);
    }
    
    RestartIf(!AllBatchEventFlags(1052520354, 1052520358));
    
    DeleteAssetfollowingSFX(1052521350, false);
    SpawnOneshotSFX(TargetEntityType.Asset, 1052521350, 101, 900000008); //portal activating visual
    
L0:
    EnableHit(1052521350);
    CreateAssetfollowingSFX(1052521350, 101, 900000000); //enabled portal visual
    WaitFor(ActionButtonInArea(9110, 1052521350));
    
    DisableHit(1052521350);
    RotateCharacter(10000, 1052521350, -1, true);
    SpawnOneshotSFX(TargetEntityType.Asset, 1052521350, 101, 304052); //Rune FX
    ForceAnimationPlayback(10000, 60472, false, false, false);
    WaitFixedTimeFrames(90);
    
    WarpCharacterAndCopyFloorWithFadeout(20000, TargetEntityType.Area, 1052521352, -1, 1052521352, false, true);
    WaitFixedTimeFrames(60);
    ForceAnimationPlayback(20000, 60473, false, false, false);
    
    RestartEvent();
});

//Keystone Aquisitions
$Event(9006001, Restart, function() {
    //Keystone 1 Bosses
    if (PlayerHasItem(ItemType.Goods, 8060)) {
        SetEventFlagID(6969, ON);
    }
    //Keystone 2 Bosses
    if (PlayerHasItem(ItemType.Goods, 8061)) {
        SetEventFlagID(6970, ON);
    }
    //Keystone 3 Bosses
    if (PlayerHasItem(ItemType.Goods, 8062)) {
        SetEventFlagID(6971, ON);
    }
    //Keystone 4 - Morgott
    if (PlayerHasItem(ItemType.Goods, 8063)) {
        SetEventFlagID(6972, ON);
    }
    //Keystone 5 - Maliketh    
    if (PlayerHasItem(ItemType.Goods, 8064)) {
        SetEventFlagID(6973, ON);
    }
});
 
 //Universal Summon Test
$Event(9006002, Restart, function() {
    DisableNetworkSync();
    //SetSpEffect(10000, 9530);
    SetSpEffect(10000, 84);
    RestartEvent();
});

//Canceling Night Permabuffs Script
$Event(9006003, Restart, function() {
    DisableNetworkSync();
    IfCharacterHasSpEffect(MAIN, 10000, 501400, true, Equal, 1);
    ClearSpEffect(10000, 1467100);
    ClearSpEffect(10000, 1467200);    
    RestartEvent();
});

//Embrace the Devourer Speffects
$Event(9006004, Restart, function() {
    DisableNetworkSync();
    IfCharacterHasSpEffect(MAIN, 10000, 1485211, true, Equal, 1);
         if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485208)) {
            SetSpEffect(10000, 1485209);
            ClearSpEffect(10000, 1485208);
            ClearSpEffect(10000, 1485210);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485207)) {
            SetSpEffect(10000, 1485208);
            ClearSpEffect(10000, 1485207);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485206)) {
            SetSpEffect(10000, 1485207);
            ClearSpEffect(10000, 1485206);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485205)) {
            SetSpEffect(10000, 1485206);
            ClearSpEffect(10000, 1485205);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485204)) {
            SetSpEffect(10000, 1485205);
            ClearSpEffect(10000, 1485204);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485203)) {
            SetSpEffect(10000, 1485204);
            ClearSpEffect(10000, 1485203);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485202)) {
            SetSpEffect(10000, 1485203);
            ClearSpEffect(10000, 1485202);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485201)) {
            SetSpEffect(10000, 1485202);
            ClearSpEffect(10000, 1485201);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && CharacterHasSpEffect(10000, 1485200)) {
            SetSpEffect(10000, 1485201);
            ClearSpEffect(10000, 1485200);
            RestartEvent();
        }
        if (CharacterHasSpEffect(10000, 1485210) && CharacterHasSpEffect(10000, 1485211) && !CharacterHasSpEffect(10000, 1485200) && !CharacterHasSpEffect(10000, 1485201) && !CharacterHasSpEffect(10000, 1485202) && !CharacterHasSpEffect(10000, 1485203) && !CharacterHasSpEffect(10000, 1485204) && !CharacterHasSpEffect(10000, 1485205) && !CharacterHasSpEffect(10000, 1485206) && !CharacterHasSpEffect(10000, 1485207) && !CharacterHasSpEffect(10000, 1485208) && !CharacterHasSpEffect(10000, 1485209)) {
            SetSpEffect(10000, 1485200);
            RestartEvent();
        }
});

//Clear All Embrace the Devourer Special Effects When Using Canceling Item
$Event(9006005, Restart, function() {
    DisableNetworkSync();
    IfCharacterHasSpEffect(MAIN, 10000, 501401, true, Equal, 1);
    ClearSpEffect(10000, 1485200);
    ClearSpEffect(10000, 1485201);
    ClearSpEffect(10000, 1485202);
    ClearSpEffect(10000, 1485203);
    ClearSpEffect(10000, 1485204);
    ClearSpEffect(10000, 1485205);
    ClearSpEffect(10000, 1485206);
    ClearSpEffect(10000, 1485207);
    ClearSpEffect(10000, 1485208);
    ClearSpEffect(10000, 1485209);
    ClearSpEffect(10000, 1485210);   
    RestartEvent();
});

// Set Summon Debuffs Depending on Which Summon if not Immune and Set Summon Active Flag On
$Event(9006006, Restart, function(X0_4, X4_4, X8_4, X12_4) { // Summon spEffect, Summoning Sickness Debuff, Sickness Identifier, bool isPuppet
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4));
    WaitFor(CharacterHasSpEffect(10000, 100875)); // Wait for spirit summon active
    
    WaitFixedTimeFrames(1);
    if (HasMultiplayerState(MultiplayerState.Invasion))
        SetSpEffect(35000, 755); // TeamType fix for invasions
    
    if (!CharacterHasSpEffect(10000, 1508000) && // Accursed Blessing
        !CharacterHasSpEffect(10000, 7009200) && // Friend of Death (Lionel's Gauntlets)
        !CharacterHasSpEffect(10000, 1741300) && // Spirit Link
        !CharacterHasSpEffect(10000, 503370))    // Baldachin's Blessing
        SetSpEffect(10000, X4_4); // If you were not immune, apply sickness
    
        
    if (Signed(X12_4) != 0)
        SetSpEffect(10000, 40320);
    SetSpEffect(10000, X8_4); // Disregarding, apply sickness identifier for expire purposes
    WaitFor(!CharacterHasSpEffect(10000, 100875)); // Preventing loops
    RestartEvent();
});

// Kill Summons and Restore Player Resources When Casting Sacrifice and While Summon Active Effect On
$Event(9006007, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1505000) && CharacterHasSpEffect(10000, 100875));

    if (CharacterHasSpEffect(35000, 5832))
        ClearSpEffect(35000, 5832);
    SetSpEffect(35000, 1506004);
    SetSpEffect(10000, 1505002);
    
    WaitFor(!CharacterHasSpEffect(10000, 1505000));
    RestartEvent();
});

// Restore Debuff if no more source of immunty is found
$Event(9006008, Restart, function() { // Debuff, Debuff Identifier
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(10000, 1741300) || // Spirit Link
        CharacterHasSpEffect(10000, 1508000) || // Accursed Binding
        CharacterHasSpEffect(10000, 7009200) || // Friend of Death
        CharacterHasSpEffect(10000, 503370)     // Baldachin's Blessing
    );
    WaitFor(
        !CharacterHasSpEffect(10000, 1741300) && // Spirit Link
        !CharacterHasSpEffect(10000, 1508000) && // Accursed Binding
        !CharacterHasSpEffect(10000, 7009200) && // Friend of Death
        !CharacterHasSpEffect(10000, 503370)     // Baldachin's Blessing
    );
    RestartIf(!CharacterHasSpEffect(10000, 100875)); // Restart if summons not active
    
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 905, 651);
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 960, 651);
    PlaySE(35000, SoundType.CharacterMotion, 999997800);
    if (CharacterHasSpEffect(10000, 40320))
        SetSpEffect(35000, 295200); // Puppet Spirit Summon Color
    else
        SetSpEffect(35000, 295000); // Default Spirit Summon Color
    
    if (CharacterHasSpEffect(10000, 40300))
        SetSpEffect(10000, 40002); // 3%
    else if (CharacterHasSpEffect(10000, 40301))
        SetSpEffect(10000, 40012); // 6%
    else if (CharacterHasSpEffect(10000, 40302))
        SetSpEffect(10000, 40022); // 9%
    else if (CharacterHasSpEffect(10000, 40303))
        SetSpEffect(10000, 40032); // 12%
    else if (CharacterHasSpEffect(10000, 40304))
        SetSpEffect(10000, 40042); // 15%
    else if (CharacterHasSpEffect(10000, 40305))
        SetSpEffect(10000, 40052); // 18%
    else if (CharacterHasSpEffect(10000, 40306))
        SetSpEffect(10000, 40062); // 21%
    else if (CharacterHasSpEffect(10000, 40307))
        SetSpEffect(10000, 40072); // 24%
    else if (CharacterHasSpEffect(10000, 40308))
        SetSpEffect(10000, 40082); // 27%
    else if (CharacterHasSpEffect(10000, 40309))
        SetSpEffect(10000, 40092); // 30%
    else if (CharacterHasSpEffect(10000, 40310))
        SetSpEffect(10000, 40102); // 33%
    else if (CharacterHasSpEffect(10000, 40311))
        SetSpEffect(10000, 40112); // 36%
    else if (CharacterHasSpEffect(10000, 40312))
        SetSpEffect(10000, 40122); // 40%
    
    RestartEvent();
});

// Remove Summon Debuff and Set Summon Active Flag Off When Using Unsummon Item or the summons die
$Event(9006009, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasStateInfo(10000, 357) && CharacterHasSpEffect(10000, 100875));
    WaitFixedTimeFrames(1);
    for (let i = 0; i < SummoningSicknessDebuffs.length; i++) {
        ClearSpEffect(10000, SummoningSicknessDebuffs[i]); // Remove every summoning sickness debuff
        ClearSpEffect(10000, SummoningSicknessIdentifiers[i]); // They will always have the same count, so using the same loop works fine
    }
    ClearSpEffect(10000, 40320); // Puppet Check
    RestartEvent();
});

// Seamless Spirit Summon Re-enabling
$Event(9006010, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 100875));
    WaitFor(!CharacterHasSpEffect(10000, 100875));
    WaitFixedTimeFrames(15);
    SetSpEffect(10000, 2147300000); // SpEffect from Seamless that allows the re-enabling of spirit summons
    RestartEvent();
});

////Ghostflame Embrace Scripts
////Enable Immortality on Summons when Ghostflame Embrace is active and when Summon Flag is ON and when Explosion Flag is OFF
//$Event(9006010, Restart, function(X0_4) {
//    IfCharacterHasSpEffect(AND_01, 10000, 1506000, true, Equal, 1);
//    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
//    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 97496);
//    IfConditionGroup(MAIN, PASS, AND_01);
//    SetCharacterImmortality(35000, Enabled);
//    RestartEvent();
//});    
//
////Disable Summon Immortality when Ghostflame Embrace is not active
//$Event(9006011, Restart, function() {
//    IfCharacterHasSpEffect(MAIN, 10000, 1506000, false, Equal, 1);
//    SetCharacterImmortality(35000, Disabled); 
//    RestartEvent();
//});
//
////Handle Explosion Trigger for 1 Summon Entity
//$Event(9006012, Restart, function() {
//    IfCharacterHasSpEffect(MAIN, 35000, 1506005, true, Equal, 1); 
//    SetEventFlagID(97496, ON);    
//    SetCharacterImmortality(35000, Disabled);
//    WaitFixedTimeSeconds(0.22);
//    SetEventFlagID(97496, OFF);
//    RestartEvent();
//});
//
////Handle Explosion Trigger for 2 Summon Entities
//$Event(9006013, Restart, function() {
//    IfCharacterHasSpEffect(MAIN, 35000, 1506005, true, Equal, 2); 
//    SetEventFlagID(97496, ON);    
//    SetCharacterImmortality(35000, Disabled);
//    WaitFixedTimeSeconds(0.22);
//    SetEventFlagID(97496, OFF);
//    RestartEvent();
//});
//
////Handle Explosion Trigger for 3 Summon Entities
//$Event(9006014, Restart, function() {
//    IfCharacterHasSpEffect(MAIN, 35000, 1506005, true, Equal, 3); 
//    SetEventFlagID(97496, ON);    
//    SetCharacterImmortality(35000, Disabled);
//    WaitFixedTimeSeconds(0.22);
//    SetEventFlagID(97496, OFF);
//    RestartEvent();
//});
//
////Handle Explosion Trigger for 4 Summon Entities
//$Event(9006015, Restart, function() {
//   IfCharacterHasSpEffect(MAIN, 35000, 1506005, true, Equal, 4); 
//   SetEventFlagID(97496, ON);    
//   SetCharacterImmortality(35000, Disabled);
//   WaitFixedTimeSeconds(0.22);
//   SetEventFlagID(97496, OFF);
//   RestartEvent();
//});
//
////Handle Explosion Trigger for 5 Summon Entities
//$Event(9006016, Restart, function() {
//   IfCharacterHasSpEffect(MAIN, 35000, 1506005, true, Equal, 5);
//   SetEventFlagID(97496, ON);    
//   SetCharacterImmortality(35000, Disabled);
//   WaitFixedTimeSeconds(0.22);
//   SetEventFlagID(97496, OFF);
//   RestartEvent();
//});

//Phoenix of Death Scripts

//If Death Ward are active, make player immortal
$Event(9006017, Restart, function() {
    DisableNetworkSync();
    
    WaitFor(CharacterHasSpEffect(10000, 1509101));
    
    SetCharacterImmortality(10000, Enabled);
    RestartEvent();
});

//If Death Ward is not active, make player mortal
$Event(9006018, Restart, function() {
    DisableNetworkSync();
    
    WaitFor(CharacterHasSpEffect(10000, 1509101));
    WaitFor(!CharacterHasSpEffect(10000, 1509101));
    
    SetCharacterImmortality(10000, Disabled);
    RestartEvent();
});

//If Phoenix and Death Ward are active and you would die, prevent death and clear Death Ward
$Event(9006019, Restart, function() { 
    DisableNetworkSync();
    
    WaitFor(CharacterHasSpEffect(10000, 1509101) && CharacterHPValue(10000) == 1);
    
    SetCharacterInvincibility(10000, Enabled);
    
    WaitFor(ElapsedFrames(1) && !CharacterHasSpEffect(10000, 148));
    SetSpEffect(10000, 1509105);
    WaitFixedTimeSeconds(2);
    ClearSpEffect(10000, 260); // Alt - Sacred Protection
    ClearSpEffect(10000, 1509101);
    ClearSpEffect(10000, 1509105);
    
    SetCharacterImmortality(10000, Disabled);
    SetCharacterInvincibility(10000, Disabled);
    
    RestartEvent();
});

//If you have Phoenix and not Death Ward and you use Soul Steal, reapply Death Ward
$Event(9006020, Restart, function() {
    DisableNetworkSync();
    
    WaitFor(CharacterHasSpEffect(10000, 1509100) && !CharacterHasSpEffect(10000, 1509101) && CharacterHasSpEffect(10000, 1506100));
    
    SetSpEffect(10000, 1509101);
    RestartEvent();
});

//If you don't have Phoenix, remove Death Ward
$Event(9006021, Restart, function() {
    DisableNetworkSync();
    
    WaitFor(
        CharacterHasSpEffect(10000, 1509101)
        && !CharacterHasSpEffect(10000, 6064000)
        && !CharacterHasSpEffect(10000, 1509110)
        && !CharacterHasSpEffect(10000, 1509100)
        && !CharacterHasSpEffect(10000, 260));
        
    ClearSpEffect(10000, 1509101);
    RestartEvent();
});

//Anima Magica Speffects
$Event(9006022, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1413010) && CharacterHasSpEffect(10000, 1413011));
    
    if (CharacterHasSpEffect(10000, 1413008)) {
        ClearSpEffect(10000, 1413008);
        SetSpEffect(10000, 1413009);
        WaitFixedTimeSeconds(29.8); 
    }
    else if (CharacterHasSpEffect(10000, 1413007)) {
        SetSpEffect(10000, 1413008);
        ClearSpEffect(10000, 1413007);
    }
    else if (CharacterHasSpEffect(10000, 1413006)) {
        SetSpEffect(10000, 1413007);
        ClearSpEffect(10000, 1413006);
    }                                                                       
    else if (CharacterHasSpEffect(10000, 1413005)) {
        SetSpEffect(10000, 1413006);
        ClearSpEffect(10000, 1413005);
    }
    else if (CharacterHasSpEffect(10000, 1413004)) {
        SetSpEffect(10000, 1413005);
        ClearSpEffect(10000, 1413004);
    }          
    else if (CharacterHasSpEffect(10000, 1413003)) {
        SetSpEffect(10000, 1413004);
        ClearSpEffect(10000, 1413003);                                         
    }
    else if (CharacterHasSpEffect(10000, 1413002)) {
        SetSpEffect(10000, 1413003);
        ClearSpEffect(10000, 1413002);
    }
    else if (CharacterHasSpEffect(10000, 1413001)) {
        SetSpEffect(10000, 1413002);
        ClearSpEffect(10000, 1413001);
    }
    else if (CharacterHasSpEffect(10000, 1413000)) {
        SetSpEffect(10000, 1413001);
        ClearSpEffect(10000, 1413000);
    }
    else {
        SetSpEffect(10000, 1413000);
    }
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// UNUSED
$Event(9006023, Restart, function() {
});

$Event(9006024, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1413010));
    WaitFor(!CharacterHasSpEffect(10000, 1413010));
    ClearSpEffect(10000, 1413000);
    ClearSpEffect(10000, 1413001);
    ClearSpEffect(10000, 1413002);
    ClearSpEffect(10000, 1413003);
    ClearSpEffect(10000, 1413004);
    ClearSpEffect(10000, 1413005);
    ClearSpEffect(10000, 1413006);
    ClearSpEffect(10000, 1413007);
    ClearSpEffect(10000, 1413008);
    ClearSpEffect(10000, 1413009);
    RestartEvent();
});

// UNUSED
$Event(9006025, Restart, function() {
});

// UNUSED
$Event(9006026, Restart, function() {
});

//Set eventflag for Enia (2 Runes)
$Event(9006027, Default, function() {
    WaitFor(EventFlag(510050));
    SetEventFlagID(60520, ON);
    EndEvent();
});

//Setup Purifying Cautery
$Event(9006028, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1632500));
    SetSpEffect(10000, 101);
    SetSpEffect(10000, 102);
    SetSpEffect(10000, 103);
    SetSpEffect(10000, 104);
    SetSpEffect(10000, 105);
    SetSpEffect(10000, 107);
    SetSpEffect(10000, 108);
    SetSpEffect(10000, 109);
    RestartEvent();
});

// Spirit caller bell
$Event(9006029, Restart, function() {
    DisableNetworkSync();
    WaitFor(!EventFlag(60110) && PlayerHasItem(ItemType.Goods, 8158));
    SetEventFlagID(60110, ON);
    RestartEvent();
});

$Event(9006030, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(35000, 1744100));
    SetSpEffect(35000, 1744106);
    SetSpEffect(10000, 1744105);
    RestartEvent();
});

//Servants of Rot Permabuff Scripts
$Event(9006031, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1729000) && !CharacterHasSpEffect(10000, 1729010));
    SetSpEffect(10000, 1729010);
    RestartEvent();
});

$Event(9006032, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1729010) && !CharacterHasSpEffect(10000, 1729000));
    ClearSpEffect(10000, 1729010);
    RestartEvent();
});

$Event(9006033, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1729100) && !CharacterHasSpEffect(10000, 1729110));
    SetSpEffect(10000, 1729110);
    RestartEvent();
});

$Event(9006034, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1729110) && !CharacterHasSpEffect(10000, 1729100));
    ClearSpEffect(10000, 1729110);
    RestartEvent();
});

//Blood Pact Permabuff Scripts
$Event(9006035, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1637000) && !CharacterHasSpEffect(10000, 1637010));
    SetSpEffect(10000, 1637010);
    RestartEvent();
});

$Event(9006036, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1637010) && !CharacterHasSpEffect(10000, 1637000));
    ClearSpEffect(10000, 1637010);
    RestartEvent();
});

//Godslayer's Devotion Scripts
$Event(9006037, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1626100) && CharacterHasSpEffect(10000, 1626105) && !CharacterHasSpEffect(10000, 1626106));
    InitializeEvent(0, 9007032, 1626101);
    InitializeEvent(1, 9007032, 1626105);
    WaitFor(!CharacterHasSpEffect(10000, 1626101) && !CharacterHasSpEffect(10000, 1626105));
    SetSpEffect(10000, 1626106);
    RestartEvent();
});

$Event(9006038, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 1626100));
    ClearSpEffect(10000, X0_4);
    RestartEvent();
});

//Wrath of the Queen Scripts
$Event(9006039, Restart, function() {
    DisableNetworkSync();
    EndIf(CharacterHasSpEffect(10000, 1626206));
    WaitFor(CharacterHasSpEffect(10000, 1626200) && CharacterHasSpEffect(10000, 1626205));
    SetSpEffect(10000, 1626206);
    WaitFixedTimeFrames(2);
    RestartEvent();
});


//Whiteout Weather Event 1
$Event(9006040, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1449100));
    ChangeWeather(Weather.SnowyHeavyFog, 30, true);
    WaitFixedTimeSeconds(32);
    RestartEvent();
});

//Whiteout Weather Event 2
$Event(9006041, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1449100));
    ChangeWeather(Weather.HeavySnow, 30, true);
    WaitFixedTimeSeconds(32);
    RestartEvent();
});

//Time Warp Status Clearing Scripts
$Event(9006042, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1699050));
    SetSpEffect(10000, 1699052);
    SetSpEffect(10000, 1699053);
    SetSpEffect(10000, 1699054);
    SetSpEffect(10000, 1699055);
    SetSpEffect(10000, 1699056);
    SetSpEffect(10000, 1699057);
    SetSpEffect(10000, 1699058);
    RestartEvent();
});

// UNUSED
$Event(9006043, Restart, function() {
});

//Remove passive FP regen while certain spells are active
$Event(9006044, Restart, function() {
    DisableNetworkSync();
    WaitFor((CharacterHasSpEffect(10000, 1528000) || // Stormcaller's Sublimity
            CharacterHasSpEffect(10000, 1416000)) && // Energy Shell
            CharacterHasSpEffect(10000, 330));
    
    ClearSpEffect(10000, 330);
    RestartIf(!CharacterHasSpEffect(10000, 1416000));
    
    EnableCharacterImmortality(10000);
    RestartEvent();
});

//Gathering Storm stacking effect
$Event(9006045, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1521100) && CharacterHasSpEffect(10000, 1521101));
    SetSpEffect(10000, 1521105);
    RestartEvent();
});

//Gathering Storm stack clean up after main effect ends
$Event(9006046, Restart, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 1521100) && CharacterHasSpEffect(10000, 1521105));
    ClearSpEffect(10000, 1521105);
    RestartEvent();
});

//Re-add passive FP regen while certain spells is cleared
$Event(9006047, Restart, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 1528000) && // Stormcaller's Sublimity
            !CharacterHasSpEffect(10000, 1416000) && // Energy Shell
            !CharacterHasSpEffect(10000, 330));
    
    SetSpEffect(10000, 330);
    RestartIf(InArea(10000, 1099009105) && EventFlag(1099009130));
    DisableCharacterImmortality(10000);
    if (CharacterHPValue(10000) <= 1)
        ForceCharacterDeath(10000, false);
    RestartEvent();
});

//Award Outer Order Gesture
$Event(9006048, Default, function() {
    EndIf(EventFlag(60846));
    WaitFor(EventFlag(1043507000));
    AwardGesture(104);
    SetEventFlagID(60846, ON);
    EndEvent();
});

//Permabuff Toggle On
$Event(9006050, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && !CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    SetSpEffect(10000, X0_4);
    RestartEvent();
});

//Permabuff Toggle Off
$Event(9006051, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    ClearSpEffect(10000, X0_4);
    RestartEvent();
});

//Tutorial finished Flags
$Event(9006052, Restart, function() {
    SetEventFlagID(101, ON);
    SetEventFlagID(102, ON);
    SetEventFlagID(10010801, ON);
    RestartEvent();
});

//Elden Benediction Greater Blessing Application 
$Event(9006053, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1679400) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X0_4);
    SetSpEffect(10000, X4_4);
    RestartEvent();
});

//Visual clean-up for Celestial Blade
$Event(9006054, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1995));
    ClearSpEffect(10000, 1981);
    ClearSpEffect(10000, 1991);
    RestartEvent();
});

//Elden Benediction Stat Buff while no other blessing active
$Event(9006055, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1679400) 
    && !CharacterHasSpEffect(10000, 1679100) 
    && !CharacterHasSpEffect(10000, 1679200) 
    && !CharacterHasSpEffect(10000, 1679300) 
    && !CharacterHasSpEffect(10000, 1679000)
    && !CharacterHasSpEffect(10000, 1679405)
    && !CharacterHasSpEffect(10000, 1679105) 
    && !CharacterHasSpEffect(10000, 1679205) 
    && !CharacterHasSpEffect(10000, 1679305) 
    && !CharacterHasSpEffect(10000, 1679005));
    SetSpEffect(10000, 1679405);
    RestartEvent();
});

//Ensha trigger setup
$Event(9006056, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(520051));
    WaitFor(EventFlag(520050));
    SetEventFlagID(400130, ON);
    SetEventFlagID(520051, ON);
    RestartEvent();
});

//Familial Comsumption Cleanup
$Event(9006057, Restart, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 1485000));
    EndIf(!CharacterHasSpEffect(10000, 1485005));
    ClearSpEffect(10000, 1485005);
    RestartEvent();
});

//Blessing Toggle On
$Event(9006058, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && !CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, X8_4));
    ClearSpEffect(10000, X4_4);
    ClearSpEffect(10000, X4_4);
    SetSpEffect(10000, X0_4);
    RestartEvent();
});

//Blessing Toggle Off
$Event(9006059, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    ClearSpEffect(10000, X0_4);
    RestartEvent();
});

//Elden Benediction Cleanup
$Event(9006060, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 1679400) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X0_4);
    RestartEvent();
});

//Remove summon debuffs when you cast Debuff immunity spell
$Event(9006061, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && CharacterHasSpEffect(10000, 100875));
    
    for (let i = 0; i < SummoningSicknessDebuffs.length; i++)
        ClearSpEffect(10000, SummoningSicknessDebuffs[i]);
    
    if (Signed(X4_4) > 0) {
        WaitFixedTimeFrames(1);
        SpawnOneshotSFX(TargetEntityType.Character, 35000, 905, 651);
        SpawnOneshotSFX(TargetEntityType.Character, 35000, 960, 651);
        PlaySE(35000, SoundType.CharacterMotion, 999997800);
        SetSpEffect(35000, X4_4); // Phantom Color
    }
    
    WaitFor(!CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 100875));
    RestartEvent();
});

//Armor of Bubbles Duration Manager
$Event(9006062, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 1513005));
    ClearSpEffect(10000, X0_4);
    RestartEvent();
});

//Blinding Veil/darkness removal
$Event(98005300, Restart, function(X0_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, 1742100) || CharacterHasSpEffect(X0_4, 1653000));
    ClearSpEffect(X0_4, 1742100);
    ClearSpEffect(X0_4, 1653000);
    RestartEvent();
});

//Keep Night after Death workaround - Base
$Event(9006063, Default, function() {
    if (EventValue(1099000120, 5) > 0) { // If you didn't die at night, skip.
        // If you did die during the night, restore time
        WaitFixedTimeFrames(1);
        for (let i = 20; i < 24; i++) {
            InitializeEvent(i - 20, 9006065, i);
        }
        for (let i = 0; i < 6; i++) {
            InitializeEvent(i + 5, 9006065, i);
        }
    }
    ClearEventValue(1099000120, 5);
    WaitFor(HPRatio(10000) <= 0 && !CharacterHasSpEffect(10000, 1509101)); // Immidiatly upon player death
    
    if (EventFlag(532)) { // Check if it is night
        // Store hour number
        for (let i = 20; i < 24; i++) {
            InitializeEvent(i - 20, 9006064, i, i + 1);
        }
        for (let i = 0; i < 6; i++) {
            InitializeEvent(i + 5, 9006064, i, i + 1);
        }
    }
});

//Keep Night after Death workaround - Store Time
$Event(9006064, Default, function(X0_4, X4_4) {
    EndIf(TimeOfDayInRange(X0_4, 0, 0, X4_4, 0, 0));
    EventValueOperation(1099000120, 5, X0_4, 0, 1, CalculationType.Assign);
});

//Keep Night after Death workaround - Restore Time
$Event(9006065, Default, function(X0_4) {
    EndIf(EventValue(1099000120, 5) != X0_4);
    SetCurrentTime(X0_4, 45, 0, false, false, false, 0, 0, 0);
});

// Developer Tool - Reload Area
$Event(9006066, Default, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 19));
    BonfirelikeRecovery();
    WaitFixedTimeFrames(1);
    TriggerAreaReload(true);
    RestartEvent();
});

// Molten Stride OR Blashemers Crest - Player lava immunity
$Event(9006067, Default, function() {
    DisableNetworkSync();
    WaitFor((CharacterHasSpEffect(10000, 1486100) || CharacterHasSpEffect(10000, 341200)) && CharacterHasSpEffect(10000, 10235));
    ClearSpEffect(10000, 10235);
    RestartEvent();
});

// No Molten Stride OR Blashemers Crest - Player lava susceptibility
$Event(9006068, Default, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 1486100) && !CharacterHasSpEffect(10000, 341200) && !CharacterHasSpEffect(10000, 10235));
    SetSpEffect(10000, 10235);
    RestartEvent();
});

// Source of Creation Spell / Bestial Fervor Improvement Handler - Original spell spEffect, Improved spell spEffect, Requiered spEffect
$Event(9006069, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X8_4) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X0_4);
    SetSpEffect(10000, X4_4);
    RestartEvent();
});

// Source of Creation Spell / Bestial Fervor Improvement Handler - Original spell spEffect, Improved spell spEffect, Requiered spEffect
$Event(9006070, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, X8_4) && CharacterHasSpEffect(10000, X4_4));
    ClearSpEffect(10000, X4_4);
    SetSpEffect(10000, X0_4);
    RestartEvent();
});

// Crucible Spell Heal Handler
$Event(9006071, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 550010));
    if (CharacterHasSpEffect(10000, 1685200))
        SetSpEffect(10000, 550005);
    else SetSpEffect(10000, 550000);
    InitializeEvent(0, 9007032, 550010);
    WaitFor(!CharacterHasSpEffect(10000, 550010));
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Bestial Fervor Resource Restore - Rend
$Event(9006072, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1685100) && CharacterHasSpEffect(10000, 1685107));
    SetSpEffect(10000, 1685108);
    InitializeEvent(0, 9007032, 1685107);
    WaitFor(!CharacterHasSpEffect(10000, 1685107));
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Bestial Fervor Resource Restore - Concussion
$Event(9006073, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1685100) && CharacterHasSpEffect(10000, 1685105));
    SetSpEffect(10000, 1685106);
    InitializeEvent(0, 9007032, 1685105);
    WaitFor(!CharacterHasSpEffect(10000, 1685105));
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Bestial Fervor Resource Restore - Both
$Event(9006074, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 1685100) && CharacterHasSpEffect(10000, 1685109));
    SetSpEffect(10000, 1685106);
    SetSpEffect(10000, 1685108);
    InitializeEvent(0, 9007032, 1685109);
    WaitFor(!CharacterHasSpEffect(10000, 1685109));
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// UNUSED
$Event(9006075, Restart, function() {
});

// UNUSED 
$Event(9006076, Restart, function() {
});

//Spirit Link/Accursed Toggle On
$Event(9006080, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && !CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    SetSpEffect(10000, X0_4);
    SetSpEffect(10000, X8_4);
    RestartEvent();
});

//Spirit Link/Accursed Toggle Off
$Event(9006081, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    ClearSpEffect(10000, X0_4);
    ClearSpEffect(10000, X8_4);
    RestartEvent();
});

// Pocket dimension tool
$Event(9006082, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 250));
    if (MapLoaded(11, 10, 0, 0) && InArea(10000, 11102700))
        WarpPlayer(31, 80, 0, 0, 1099003000, 60);
    else if (MapLoaded(31, 80, 0, 0)) {
        if (InArea(10000, 11102701)) {
            IssueShortWarpRequest(10000, TargetEntityType.Area, 11102702, -1);
            SetCameraAngle(5, 45);
        }
        else
            WarpPlayer(11, 10, 0, 0, 11102020, 60);
    }
    WaitFor(!CharacterHasSpEffect(10000, 250));
    RestartEvent();
});

// Dev tool - Testing tool
$Event(9006083, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 250) && !MapLoaded(31, 80, 0, 0) && !InArea(10000, 11102700));
    // Your Code Below
    
    PlaySE(10000, SoundType.CharacterMotion, 407008100);
    
    // Your Code Above
    WaitFor(!CharacterHasSpEffect(10000, 250));
    RestartEvent();
});
// InitializeEvent(4  , 9006084, 11000850, 11000850, 11009850, 71101, > 11009851 < , 11009852, 1099000403, 11009850); // Erdtree Sanctuary - Sigur, Night's Captain
// Completion Mark Encounter Flag Handler - Defeat EventFlag, Entity ID, Encounter Flag, [Grace Flag], [MapPoint Alive Text Disable Flag], [Map Point Cleared Flag], Map Turnin Flag, [Map Point EventFlag], [Is Capital]
$Event(9006084, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    if (Signed(X16_4) != 0 && !EventFlag(X0_4)) // Resurrection Flag Fix
        SetNetworkconnectedEventFlagID(X16_4, OFF);
    //SetEventFlagID(X8_4, ON);
    WaitFor(EventFlag(X0_4) || // Boss Killed
        EventFlag(X8_4) || // If flag is already true, needed for other flags
        EventFlag(X24_4)  || // If mass discovery flag was turned on
        CharacterTargetedBy(X4_4, 20000) || // Player targetting the boss
        CharacterTargetedBy(20000, X4_4) || // Boss targetting a player (doesnt work)
        CharacterAIState(X4_4, AIStateType.Recognition) || // Boss is triggered by something
        CharacterAIState(X4_4, AIStateType.Alert) ||
        CharacterAIState(X4_4, AIStateType.Combat) ||
        CharacterAIState(X4_4, AIStateType.PassiveAlert) ||
        CharacterAIState(X4_4, AIStateType.ActiveAlert) ||
        CharacterAIState(X4_4, AIStateType.WaitBeforeForget) ||
        HasDamageType(20000, X4_4, DamageType.Unspecified) ||        
        HasDamageType(X4_4, 20000, DamageType.Unspecified));
        //EntityInRadiusOfEntity(X4_4, 20000, 8, 1)); // Player near Boss (activates on disabled enemies)
        
    EndIf((EventFlag(X0_4) || EventFlag(X24_4)) && Signed(X32_4) == 1 && AnyBatchEventFlags(110, 112));
        
    SetNetworkconnectedEventFlagID(X8_4, ON); // Boss is encountered
    if (EventFlag(X24_4) && Signed(X28_4) > 0)
        SetEventFlagID(X28_4, ON);
    
    EndIf(Signed(X12_4) == 0);
    EndIf(Signed(X16_4) == 0);
    //AwardItemLot(998110);
    WaitFor(EventFlag(X12_4) || EventFlag(X0_4)); // Wait for Grace to be actived or boss to be defeated
    SetNetworkconnectedEventFlagID(X16_4, ON); // Force off mappoint alive text
    EndIf(Signed(X20_4) == 0 || EventFlag(X12_4)); // End if Grace was activated
    SetNetworkconnectedEventFlagID(X20_4, ON); // Map Point Clear Flag on
    WaitFor(EventFlag(X12_4));
    //AwardItemLot(998120);
    SetNetworkconnectedEventFlagID(X20_4, OFF); // Map Point Clear Flag on
});

// SpEffect To Flag Conveter ON - SpEffect, EventFlag
$Event(9006085, Restart, function(X0_4, X4_4) {
    WaitFor(!EventFlag(X4_4) && CharacterHasSpEffect(10000, X0_4));
    SetEventFlagID(X4_4, ON);
    RestartEvent();
});

// SpEffect To Flag Conveter OFF - SpEffect, EventFlag
$Event(9006086, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(X4_4) && !CharacterHasSpEffect(10000, X0_4));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

// Mount Mask Handler - Selected Mount EventFlag, Requirement EventFlag
$Event(9006087, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X0_4) && EventFlag(X4_4) && CharacterRidingMount(10000));
    ChangeCharacterDispmask(40000, 10, ON);
    WaitFor(!EventFlag(X0_4) || !EventFlag(X4_4) || !CharacterRidingMount(10000));
    ChangeCharacterDispmask(40000, 10, OFF);
    RestartEvent();
});

// Custom Spirit Summon Visual Handler - Summoning
$Event(9006088, Restart, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 100875)); // Ensure you dont have a summon
    WaitFor(CharacterHasStateInfo(10000, 357) && CharacterHasSpEffect(10000, 100875)); // When you summon
    
    WaitFixedTimeRealFrames(5);
    DisableCharacterAI(35000);
    EnableCharacterInvincibility(35000);
    
    WaitFixedTimeRealFrames(18);
    GotoIf(L0, CharacterRatioHasSpEffect(35000, 295920, Equal, 0) || CharacterRatioHasSpEffect(35000, 295921, Greater, 0)); // Ensure that you are summoning a custom spirit and you're not desummoning
    
    PlaySE(35000, SoundType.CharacterMotion, 999997800); // Summoning Sound
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 905, 662); // Visual 1
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 960, 652); // Visual 2
    
    WaitFor(!CharacterHasStateInfo(10000, 357) || ElapsedSeconds(2));
    SetSpEffect(35000, 295921); // Effect for the desummon handler to know it can do it's thing
    
L0:
    EnableCharacterAI(35000);
    DisableCharacterInvincibility(35000);
    RestartEvent();
});

// Custom Spirit Summon Visual Handler - Desummoning
$Event(9006089, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasStateInfo(10000, 357) && CharacterRatioHasSpEffect(35000, 295921, Greater, 0)); // When you summon and it's a desummon of a custom spirit
    
    DisableCharacterAI(35000);
    ForceAnimationPlayback(35000, 0, false, false, true);
    PlaySE(35000, SoundType.CharacterMotion, 999997801); // Desummon Sound
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 905, 662); // Visual 1
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 960, 652); // Visual 2
    
    // Specific Summon Visuals
    ClearSpEffect(35000, 57010); // Cemetery Shade - Black Fog
    ClearSpEffect(35000, 16513); // Horned Omen - Omenfire Weapon
    ClearSpEffect(35000, 17253); // Rotten Duelist - Rot Hammers
    WaitFixedTimeFrames(15);
    
    SetSpEffect(35000, 10124); // Fade Out
    WaitFixedTimeFrames(35);
    //ClearSpEffect(35000, 295921);
    DisableCharacter(35000);
    
    WaitFor(!CharacterHasStateInfo(10000, 357));
    RestartEvent();
});

// Spirit Summon Spiritcaller Snail Handler - Spiritcaller SpEffect, Cavelry SpEffect
$Event(9006090, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterRatioHasSpEffect(10000, X0_4) && CharacterRatioHasSpEffect(35000, 295921, Equal, 0)); // When you summon the Spiritcaller Snail
    
    WaitFixedTimeRealFrames(18);
    DisableCharacterAI(35000);
    PlaySE(35000, SoundType.CharacterMotion, 999997800); // Summon Sound
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 905, 662); // Visual 1
    SpawnOneshotSFX(TargetEntityType.Character, 35000, 960, 652); // Visual 2
    
    WaitFixedTimeFrames(215);
    RestartIf(CharacterHPValue(35000) <= 0);
    SetSpEffect(10000, X4_4); // Forced Desummon through a second SpEffect with StateInfo
    WaitFixedTimeFrames(2);
    SetSpEffect(10000, X4_4); // Summoning the Cavelry

    RestartEvent();
});

// Spirit Death Handling
$Event(9006091, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 9560));
    WaitFixedTimeRealFrames(30);
    ClearSpEffect(35000, 295921);
    WaitFor(!CharacterHasSpEffect(10000, 9560));
    RestartEvent();
});

// - - - Armor Active Abilities Region - - -

const Consumable = {
    Crimson_Flask: 0,
    Blue_Flask: 1,
    Bombs: 2,
    Weapon_Greases: 3,
    Perfumes: 4,
    Throwing_Knives: 5,
    Throwing_Stones: 6,
}

const crimsonFlaskSpEffects = [ 501000, 501001, 501002, 501003, 501004, 501005, 501006, 501007, 501008, 501009, 501010, 501011, 501012 ];  // Normal chug
const blueFlaskSpEffects = [ 501050, 501051, 501052, 501053, 501054, 501055, 501056, 501057, 501058, 501059, 501060, 501061, 501062 ];
const bombThrowSpEffects = [ 4500000, 4500001, 4500002, 4500003, 4500004, 4500005, 4500006, 4500007, 4500008, 4500009, 
                             4500010, 4500011, 4500012, 4500013, 4500014, 4500015, 4500016, 4500017, 4500018, 4500019,
                             4500020, 4500021, 4500022, 4500023, 4500024, 4500025, 4500026, 4500027, 4500028, 4500029,
                             4500030, 4500031 ];
//                            R,    qR,   L,    qL                        UNUSED
const greaseUseSpEffects = [ 3140, 3142, 3144, 3146, // Freezing Grease
                             3150, 3152, 3154, 3156, // Sophoric Grease
                             3160, 3161, 3162, 3163, // Fire Grease
                             3165, 3166, 3167, 3168, // Lightning Grease
                             3170, 3171, 3172, 3173, // Magic Grease
                             3175, 3177, 3179, 3181, // Poison Grease
                             3185, 3186, 3187, 3188, // Holy Grease
                             3190, 3192, 3194, 3196, // Blood Grease 
                             3310, 3312, 3314, 3316, // Rot Grease
                             3375,       3376,       // Holy Water Grease
                             3260,       3262,       // Dragonwound Grease
                             501690,     501691 ];   // Shield Grease
const perfumeUseSpEffects = [ 503500, 503520, 4500032, 4500033, 4500034, 4500035 ];
const throwingKnifesThrowSpEffects = [ 4500036, 4500037, 4500038, 4500039, 4500040, 4500041, 4500052 ];
const throwingStonesThrowSpEffects = [ 4500042, 4500043, 4500044, 4500045, 4500046, 4500047, 4500048, 4500049, 4500050, 4500051 ];


// Armor Active Ability Collection
$Event(9007000, Default, function() {
    // - - - Documentation - - -
    
    // - Triggers -
    // 9007001 : Wonderous Physic Trigger -                 (int) armor Passive spEffect,   (int) granted spEffect,       (boolean) allowMagicWeapons
    // 9007002 : Advanced Armor Passive (emumerated) -      (int) armor Passive spEffect,   (Consumable) Enum,            (int) granted spEffect,       (boolean) allowMagicWeapons
    // 9007003 : Advanced Armor Passive (custom spEffect) - (int) armor Passive spEffect,   (int) triggering spEffect,    (int) granted spEffect,       (boolean) allowMagicWeapons
    // 9007010 : Toggle spEffect ON if two other buffs are present - check spEffect 1, check spEffect 2, granted spEffect
    
    // - Cleanup  -
    // 9007030 : Advanced Armor Buff Cleanup -              (int) armor Passive spEffect,   (int) armor spEffect,         (boolean) allowMagicWeapons
    // 9007031 : Toggle spEffect OFF if one of the two spEffect are not present - check spEffect 1, check spEffect 2, cleared spEffect
    
    // - - - Melee - - -
    
    // - Vanguard -
    // Ronin Set
    InitializeEvent(0, 9007001, 6015000, 7000075, false); // Head
    InitializeEvent(0, 9007002, 6015010, Consumable.Crimson_Flask, 7000100, false); // Armor AND Altered Armor
    InitializeEvent(1, 9007002, 6015020, Consumable.Weapon_Greases, 7000200, false); // Arms
    InitializeEvent(2, 9007002, 6015030, Consumable.Blue_Flask, 7000300, false); // Legs
    InitializeEvent(0, 9007030, 6015000, 7000075, false); // Head
    InitializeEvent(1, 9007030, 6015010, 7000100, false); // Armor AND Altered Armor
    InitializeEvent(2, 9007030, 6015020, 7000200, false); // Arms
    InitializeEvent(3, 9007030, 6015030, 7000300, false); // Legs
    
    // Scaled Set
    InitializeEvent(1, 9007001, 6008000, 7001000, false); // Head
    InitializeEvent(3, 9007002, 6008010, Consumable.Crimson_Flask, 7001100, false); // Armor AND Altered Armor
    InitializeEvent(4, 9007002, 6008020, Consumable.Weapon_Greases, 7001200, false); // Arms
    InitializeEvent(5, 9007002, 6008030, Consumable.Blue_Flask, 7001300, false); // Legs
    
    InitializeEvent(4, 9007030, 6008000, 7001001, false); // Head
    InitializeEvent(5, 9007030, 6008010, 7001100, false); // Armor AND Altered Armor
    InitializeEvent(6, 9007030, 6008020, 7001200, false); // Arms
    InitializeEvent(7, 9007030, 6008030, 7001300, false); // Legs
    
    // Night's Cavalry Set
    InitializeEvent(2, 9007001, 6023000, 7002000, false); // Head AND Altered Head
    InitializeEvent(6, 9007002, 6023010, Consumable.Crimson_Flask, 7002100, false); // Armor AND Altered Armor
    InitializeEvent(27, 9007003, 7002100, 9000031, 7002101); // Heal on Hit with armor
    InitializeEvent(7, 9007002, 6023020, Consumable.Weapon_Greases, 7002200, false); // Arms
    InitializeEvent(8, 9007002, 6023030, Consumable.Blue_Flask, 7002300, false); // Legs
    
    InitializeEvent(8, 9007030, 6023000, 7002000, false); // Head AND Altered Head
    InitializeEvent(9, 9007030, 6023010, 7002100, false); // Armor AND Altered Armor
    InitializeEvent(10, 9007030, 6023020, 7002200, false); // Arms
    InitializeEvent(11, 9007030, 6023030, 7002300, false); // Legs
    
    
    // - Retainer -
    // Godrick Knight Set
    InitializeEvent(3, 9007001, 6177000, 7003000, false); // Head
    InitializeEvent(9, 9007002, 6177010, Consumable.Crimson_Flask, 7003100, false); // Armor AND Altered Armor
    InitializeEvent(10, 9007002, 6177020, Consumable.Weapon_Greases, 7003200, false); // Arms
    InitializeEvent(11, 9007002, 6177030, Consumable.Blue_Flask, 7003300, false); // Legs
    InitializeEvent(0, 9007003, 7003200, 8000050, 7003205, false); // Arms - Heal upon blocking
    InitializeEvent(0, 9007051, 0); // Head - Increase DMG upon blocking
    
    InitializeEvent(12, 9007030, 6177000, 7003000, false); // Head
    InitializeEvent(13, 9007030, 6177010, 7003100, false); // Armor AND Altered Armor
    InitializeEvent(14, 9007030, 6177020, 7003200, false); // Arms
    InitializeEvent(15, 9007030, 6177030, 7003300, false); // Legs
    InitializeEvent(16, 9007030, 7003000, 7003010, false); // Helm DMG increase cleanup
    InitializeEvent(17, 9007030, 7003000, 7003011, false); 
    InitializeEvent(18, 9007030, 7003000, 7003012, false);
    InitializeEvent(19, 9007030, 7003000, 7003013, false);
    InitializeEvent(20, 9007030, 7003000, 7003014, false);
    InitializeEvent(21, 9007030, 7003000, 7003015, false);
    InitializeEvent(22, 9007030, 7003000, 7003016, false);
    InitializeEvent(23, 9007030, 7003000, 7003017, false);
    InitializeEvent(24, 9007030, 7003000, 7003018, false);
    InitializeEvent(25, 9007030, 7003000, 7003019, false);
    
    // Veteran's Set
    InitializeEvent(4, 9007001, 6078000, 7004000, false); // Head
    InitializeEvent(12, 9007002, 6078010, Consumable.Crimson_Flask, 7004100, false); // Armor AND Altered Armor
    InitializeEvent(13, 9007002, 6078020, Consumable.Weapon_Greases, 7004200, false); // Arms
    InitializeEvent(14, 9007002, 6078030, Consumable.Blue_Flask, 7004300, false); // Legs
    
    InitializeEvent(26, 9007030, 6078000, 7004000, false); // Head
    InitializeEvent(27, 9007030, 6078010, 7004100, false); // Armor AND Altar Armor
    InitializeEvent(28, 9007030, 6078020, 7004200, false); // Arms
    InitializeEvent(29, 9007030, 6078030, 7004300, false); // Legs
    
    // Oathseeker Knight Set
    InitializeEvent(23, 9007001, 6600000, 7018000, false); // Head
    InitializeEvent(27, 9007001, 6600000, 7018005, false); // Head
    InitializeEvent(29, 9007001, 6600000, 7018010, false); // Head
    InitializeEvent(17, 9007003, 7018005, 7018006, 7018007, false); // Head - Damage Reduc on Attack
    InitializeEvent(54, 9007002, 6600100, Consumable.Crimson_Flask, 7018100, false); // Armor
    InitializeEvent(55, 9007002, 6600200, Consumable.Weapon_Greases, 7018200, false); // Arms
    InitializeEvent(56, 9007002, 6600300, Consumable.Blue_Flask, 7018300, false); // Legs
    InitializeEvent(12, 9007010, 7018000, 7018011, 7018010); // Head - Reapplication of *10
    InitializeEvent(19, 9007003, 7018300, 140, 7018301, false); // Legs - Jumping
    InitializeEvent(23, 9007003, 7018300, 8000050, 7018301, false); // Legs - Blocking
    InitializeEvent(20, 9007003, 7018300, 100390, 7018301, false); // Legs - Rolling
    
    InitializeEvent(147, 9007030, 6600000, 7018000, false); // Head
    InitializeEvent(173, 9007030, 7018000, 7018005, false); // Head
    InitializeEvent(188, 9007030, 7018000, 7018010, false); // Head
    InitializeEvent(12, 9007031, 6600000, 7018000, 7018007); // Head - Dmg Reduc Cleanup
    InitializeEvent(13, 9007031, 6600000, 7018000, 7018011); // Head - Stagger Immune Cleanup
    InitializeEvent(148, 9007030, 6600100, 7018100, false); // Armor
    InitializeEvent(149, 9007030, 6600200, 7018200, false); // Arms
    InitializeEvent(150, 9007030, 6600300, 7018300, false); // Legs
    InitializeEvent(14, 9007031, 6600300, 7018300, 7018301); // Legs Cleanup
    
    // Leda's Armor
    InitializeEvent(57, 9007002, 6601100, Consumable.Crimson_Flask, 7018150, false); // Armor
    InitializeEvent(58, 9007002, 6601100, Consumable.Crimson_Flask, 7018151, false); // Armor
    
    InitializeEvent(151, 9007030, 6601100, 7018150, false); // Armor
    InitializeEvent(152, 9007030, 6601100, 7018151, false); // Armor
    
    
    // - Marksman -
    InitializeEvent(11, 9007003, 650, 8000010, 700, true); // Malenia's Great Rune - Works on bows/greatbows/crossbows/balistas
    // Page Set
    InitializeEvent(16, 9007001, 6022000, 7005000, 2); // Head
    InitializeEvent(17, 9007001, 6022000, 7005002, 2); // Head - Poise
    InitializeEvent(38, 9007002, 6022010, Consumable.Crimson_Flask, 7005100, 2); // Armor
    InitializeEvent(37, 9007002, 6022030, Consumable.Blue_Flask, 7005300, 2); // Legs
    
    InitializeEvent(10, 9007003, 7005100, 8000010, 7005101, 2); // Armor - Resource Recovery on Trigger
    InitializeEvent(0, 9007045, 0); // Arms - Charge Attack
    
    InitializeEvent(113, 9007030, 6022000, 7005000, 2); // Head
    InitializeEvent(114, 9007030, 6022010, 7005100, 2); // Armor AND Altar Armor
    InitializeEvent(115, 9007030, 6022030, 7005300, 2); // Legs
    InitializeEvent(116, 9007030, 7005000, 7005101, 2); // Armor HOT
    InitializeEvent(117, 9007030, 6022000, 7005002, 2); // Head Poise
    InitializeEvent(0, 9007058, 0); // Head - Poise Damage Cleanup
    
    // High Page Set
    InitializeEvent(18, 9007001, 6199000, 7006000, 2); // Head
    InitializeEvent(35, 9007002, 6199010, Consumable.Crimson_Flask, 7006100, 2); // Armor
    InitializeEvent(36, 9007002, 6199030, Consumable.Blue_Flask, 7006300, 2); // Legs
    
    InitializeEvent(0, 9007054, 0); // Head - Buffs
    InitializeEvent(8, 9007003, 7006100, 8000010, 7006101, 2); // Armor - Resource Recovery on Trigger
    InitializeEvent(9, 9007003, 7006300, 8000010, 7006301, 2); // Legs - Resource Recovery on Trigger
    InitializeEvent(0, 9007055, 0); // Arms - Resources
    InitializeEvent(0, 9007056, 0); // Arms - Sprint
    
    InitializeEvent(112, 9007030, 6199000, 7006000, 2); // Head
    InitializeEvent(111, 9007030, 6199010, 7006100, 2); // Armor AND Altar Armor
    InitializeEvent(110, 9007030, 6199030, 7006300, 2); // Pants
    InitializeEvent(95, 9007030, 7006000, 7006001, 2); // Helm DMG increase cleanup
    InitializeEvent(96, 9007030, 7006000, 7006002, 2); 
    InitializeEvent(97, 9007030, 7006000, 7006003, 2);
    InitializeEvent(98, 9007030, 7006000, 7006004, 2);
    InitializeEvent(99, 9007030, 7006000, 7006005, 2);
    InitializeEvent(100, 9007030, 7006000, 7006006, 2);
    InitializeEvent(101, 9007030, 7006000, 7006007, 2);
    InitializeEvent(102, 9007030, 7006000, 7006008, 2);
    InitializeEvent(103, 9007030, 7006000, 7006009, 2);
    InitializeEvent(104, 9007030, 7006000, 7006010, 2);
    InitializeEvent(105, 9007030, 7006000, 7006011, 2);
    InitializeEvent(106, 9007030, 7006000, 7006012, 2);
    InitializeEvent(107, 9007030, 7006000, 7006013, 2);
    InitializeEvent(108, 9007030, 7006000, 7006014, 2);
    InitializeEvent(109, 9007030, 7006000, 7006015, 2);
    
    // Ragged Set
    InitializeEvent(24, 9007001, 6602000, 7019000, 2); // Head
    InitializeEvent(0, 9007071, 0); // Head Custom
    InitializeEvent(59, 9007002, 6602100, Consumable.Crimson_Flask, 7019100, 2); // Armor
    InitializeEvent(60, 9007002, 6602300, Consumable.Blue_Flask, 7019300, 2); // Legs
    InitializeEvent(61, 9007002, 7019300, Consumable.Throwing_Knives, 7019301, 2); // Legs - Throwing Knives
    InitializeEvent(21, 9007003, 7019300, 8000030, 7019301, 2); // Legs - Arrow/Bolt
    InitializeEvent(0, 9007057, 0); // Arms - HP
    
    InitializeEvent(153, 9007030, 6602000, 7019000, 2); // Head
    InitializeEvent(154, 9007030, 7019000, 7019001, 2); 
    InitializeEvent(155, 9007030, 7019000, 7019002, 2); 
    InitializeEvent(156, 9007030, 7019000, 7019003, 2); 
    InitializeEvent(157, 9007030, 7019000, 7019004, 2); 
    InitializeEvent(158, 9007030, 7019000, 7019005, 2); 
    InitializeEvent(159, 9007030, 7019000, 7019006, 2); 
    InitializeEvent(160, 9007030, 7019000, 7019007, 2); 
    InitializeEvent(161, 9007030, 7019000, 7019008, 2); 
    InitializeEvent(162, 9007030, 7019000, 7019009, 2); 
    InitializeEvent(163, 9007030, 7019000, 7019010, 2); 
    InitializeEvent(164, 9007030, 7019000, 7019011, 2); 
    InitializeEvent(165, 9007030, 7019000, 7019012, 2); 
    InitializeEvent(166, 9007030, 7019000, 7019013, 2); 
    InitializeEvent(167, 9007030, 7019000, 7019014, 2); 
    InitializeEvent(168, 9007030, 7019000, 7019015, 2); 
    InitializeEvent(169, 9007030, 6602100, 7019100, 2); // Armor
    InitializeEvent(170, 9007030, 6602300, 7019300, 2); // Legs Main
    InitializeEvent(15, 9007031, 6602300, 7019300, 7019301); // Legs Stack Cleanup
    
    // - Berserker -
    // Elden Lord Set
    InitializeEvent(5, 9007001, 6046000, 7007000, false); // Head
    InitializeEvent(15, 9007002, 6046010, Consumable.Crimson_Flask, 7007100, false); // Armor AND Altered Armor
    InitializeEvent(16, 9007002, 6046020, Consumable.Weapon_Greases, 7007200, false); // Arms
    InitializeEvent(17, 9007002, 6046030, Consumable.Blue_Flask, 7007300, false); // Legs
    InitializeEvent(30, 9007030, 6046000, 7007000, false); // Head
    InitializeEvent(31, 9007030, 6046010, 7007100, false); // Armor AND Altar Armor
    InitializeEvent(32, 9007030, 6046020, 7007200, false); // Arms
    InitializeEvent(33, 9007030, 6046030, 7007305, false); // Legs
    
    // Raging Wolf Set
    InitializeEvent(6, 9007001, 6086000, 7008000, false); // Head
    InitializeEvent(18, 9007002, 6086010, Consumable.Crimson_Flask, 7008100, false); // Armor AND Altered Armor
    InitializeEvent(19, 9007002, 6086020, Consumable.Weapon_Greases, 7008200, false); // Arms
    InitializeEvent(20, 9007002, 6086030, Consumable.Blue_Flask, 7008300, false); // Legs
    InitializeEvent(0, 9007042, 0); // Head - Invunerability
    InitializeEvent(0, 9007043, 0); // Head - Cleanup
    InitializeEvent(34, 9007030, 6086000, 7008000, false); // Head
    InitializeEvent(35, 9007030, 6086010, 7008100, false); // Armor AND Altar Armor
    InitializeEvent(36, 9007030, 6086020, 7008200, false); // Arms
    InitializeEvent(37, 9007030, 6086030, 7008300, false); // Legs
    
    // Freya's Set
    InitializeEvent(22, 9007001, 6603000, 7020000, false); // Head
    InitializeEvent(51, 9007002, 6603100, Consumable.Crimson_Flask, 7020100, false); // Armor
    InitializeEvent(12, 9007003, 7020100, 8000300, 7020105, false); // Recovery on Heavy
    InitializeEvent(22, 9007003, 7020100, 8000400, 7020105, false); // Recovery on Arts
    InitializeEvent(52, 9007002, 6603200, Consumable.Weapon_Greases, 7020200, false); // Arms
    InitializeEvent(53, 9007002, 6603300, Consumable.Blue_Flask, 7020300, false); // Legs
    
    InitializeEvent(143, 9007030, 6603000, 7020000, false); // Head
    InitializeEvent(13, 9007031, 6603000, 7020000, 7020105); // Head Stacks cleanup
    InitializeEvent(144, 9007030, 6603100, 7020100, false); // Armor
    InitializeEvent(145, 9007030, 6603200, 7020200, false); // Arms
    InitializeEvent(146, 9007030, 6603300, 7020300, false); // Legs
    
    
    // - Dreadnaught -
    // Lionel's Set
    InitializeEvent(7, 9007001, 6064000, 7009000, false); // Head
    InitializeEvent(8, 9007001, 6064000, 1509101, false);
    InitializeEvent(21, 9007002, 6064010, Consumable.Crimson_Flask, 7009100, false); // Armor AND Altered Armor
    InitializeEvent(22, 9007002, 6064020, Consumable.Weapon_Greases, 7009200, false); // Arms
    InitializeEvent(23, 9007002, 6064030, Consumable.Blue_Flask, 7009300, false); // Legs
    InitializeEvent(0, 9007044, 0); // Head - Death ward
    InitializeEvent(0, 9007050, 0); // Head - Death Ward Cleanup
    InitializeEvent(0, 9007053, 0); // Head - Fia's Champion Cleanup
    InitializeEvent(38, 9007030, 6064000, 7009000, false); // Head
    InitializeEvent(39, 9007030, 6064010, 7009100, false); // Armor AND Altar Armor
    InitializeEvent(40, 9007030, 6064020, 7009200, false); // Arms
    InitializeEvent(41, 9007030, 6064030, 7009300, false); // Legs
    
    // Bull-Goat Set
    InitializeEvent(9, 9007001, 6014000, 7010000, false); // Head
    InitializeEvent(24, 9007002, 6014010, Consumable.Crimson_Flask, 7010100, false); // Armor
    InitializeEvent(25, 9007002, 6014020, Consumable.Weapon_Greases, 7010200, false); // Arms
    InitializeEvent(26, 9007002, 6014030, Consumable.Blue_Flask, 7010300, false); // Legs
    InitializeEvent(0, 9007040, 0); // Arms - Damage Stack
    InitializeEvent(42, 9007030, 6014000, 7010000, false); // Head
    InitializeEvent(43, 9007030, 6014010, 7010100, false); // Armor
    InitializeEvent(44, 9007030, 6014020, 7010200, false); // Arms
    InitializeEvent(45, 9007030, 6014030, 7010300, false); // Legs
    InitializeEvent(46, 9007030, 7010200, 7010210, false); // Arms - Cleanup damage increasing buff
    InitializeEvent(47, 9007030, 7010200, 7010211, false); 
    InitializeEvent(48, 9007030, 7010200, 7010212, false);
    InitializeEvent(49, 9007030, 7010200, 7010213, false);
    InitializeEvent(50, 9007030, 7010200, 7010214, false);
    InitializeEvent(51, 9007030, 7010200, 7010215, false);
    InitializeEvent(52, 9007030, 7010200, 7010216, false);
    InitializeEvent(53, 9007030, 7010200, 7010217, false);
    InitializeEvent(54, 9007030, 7010200, 7010218, false);
    InitializeEvent(56, 9007030, 7010200, 7010219, false);
    InitializeEvent(57, 9007030, 7010200, 7010202, false); // Arms - Cleanup Damage Check
    
    // Verdigis Set
    InitializeEvent(20, 9007001, 6604000, 7021000, false); // Head
    InitializeEvent(0, 9007068, 0); // Head Stack Handler
    InitializeEvent(44, 9007002, 6604100, Consumable.Crimson_Flask, 7021100, false); // Armor
    InitializeEvent(62, 9007002, 6604100, Consumable.Crimson_Flask, 7021101, false); // Armor
    InitializeEvent(63, 9007002, 6604100, Consumable.Crimson_Flask, 101, false); // Armor
    InitializeEvent(45, 9007002, 6604200, Consumable.Weapon_Greases, 7021200, false); // Arms
    InitializeEvent(46, 9007002, 6604300, Consumable.Blue_Flask, 7021300, false); // Legs
    
    InitializeEvent(124, 9007030, 6604000, 7021000, false); // Head
    InitializeEvent(125, 9007030, 7021000, 7021001, false); // Head
    InitializeEvent(126, 9007030, 7021000, 7021002, false); // Head
    InitializeEvent(127, 9007030, 7021000, 7021003, false); // Head
    InitializeEvent(128, 9007030, 7021000, 7021004, false); // Head
    InitializeEvent(129, 9007030, 7021000, 7021005, false); // Head
    InitializeEvent(130, 9007030, 7021000, 7021006, false); // Head
    InitializeEvent(131, 9007030, 7021000, 7021007, false); // Head
    InitializeEvent(132, 9007030, 7021000, 7021008, false); // Head
    InitializeEvent(133, 9007030, 7021000, 7021009, false); // Head
    InitializeEvent(134, 9007030, 7021000, 7021010, false); // Head
    InitializeEvent(135, 9007030, 6604100, 7021100, false); // Armor
    InitializeEvent(174, 9007030, 7021100, 7021101, false); // Armor
    InitializeEvent(136, 9007030, 6604200, 7021200, false); // Arms
    InitializeEvent(137, 9007030, 6604300, 7021300, false); // Legs
    
    // - Sellsword - 
    // Kaiden Set
    InitializeEvent(10, 9007001, 6005000, 7011000, false); // Head
    InitializeEvent(14, 9007001, 6005000, 7011001, false); // Head
    InitializeEvent(27, 9007002, 6005010, Consumable.Crimson_Flask, 7011100, false); // Armor
    InitializeEvent(28, 9007002, 6005020, Consumable.Weapon_Greases, 7011200, false); // Arms
    InitializeEvent(29, 9007002, 6005030, Consumable.Blue_Flask, 7011300, false); // Legs
    InitializeEvent(0, 9007041, 0); // Legs - Damage Stack
    
    InitializeEvent(58, 9007030, 6005000, 7011000, false); // Head
    InitializeEvent(93, 9007030, 6005000, 7011001, false); // Head
    InitializeEvent(59, 9007030, 6005010, 7011100, false); // Armor
    InitializeEvent(60, 9007030, 6005020, 7011200, false); // Arms
    InitializeEvent(61, 9007030, 6005030, 7011300, false); // Legs
    InitializeEvent(62, 9007030, 7011300, 7011310, false); // Legs - Cleanup damage increasing buff
    InitializeEvent(63, 9007030, 7011300, 7011311, false); 
    InitializeEvent(64, 9007030, 7011300, 7011312, false);
    InitializeEvent(65, 9007030, 7011300, 7011313, false);
    InitializeEvent(66, 9007030, 7011300, 7011314, false);
    InitializeEvent(67, 9007030, 7011300, 7011315, false);
    InitializeEvent(68, 9007030, 7011300, 7011316, false);
    InitializeEvent(69, 9007030, 7011300, 7011317, false);
    InitializeEvent(70, 9007030, 7011300, 7011318, false);
    InitializeEvent(71, 9007030, 7011300, 7011319, false);
    InitializeEvent(72, 9007030, 7011300, 7011320, false);
    InitializeEvent(73, 9007030, 7011300, 7011321, false);
    InitializeEvent(74, 9007030, 7011300, 7011322, false);
    InitializeEvent(75, 9007030, 7011300, 7011323, false);
    InitializeEvent(76, 9007030, 7011300, 7011324, false);
    InitializeEvent(77, 9007030, 7011300, 7011301, false); // Legs - Cleanup Damage Check
    
    // Dancer's Set
    InitializeEvent(28, 9007001, 6605000, 7022000, false); // Head
    InitializeEvent(64, 9007002, 6605100, Consumable.Crimson_Flask, 7022100, false); // Armor
    InitializeEvent(0, 9007077, 0); // Armor Heal
    InitializeEvent(65, 9007002, 6605200, Consumable.Weapon_Greases, 7022200, false); // Arms - Main
    //itializeEvent(66, 9007002, 6605200, Consumable.Weapon_Greases, 7022210, false); // Arms - Acc 1
    //itializeEvent(67, 9007002, 6605200, Consumable.Weapon_Greases, 7022211, false); // Arms - Acc 2
    //itializeEvent(68, 9007002, 6605200, Consumable.Weapon_Greases, 7022212, false); // Arms - Acc 3
    InitializeEvent(72, 9007002, 6605200, Consumable.Weapon_Greases, 7022220, false); // Arms - Hit Listener
    InitializeEvent(0, 9007072, 0);
    InitializeEvent(0, 9007073, 0);
    InitializeEvent(0, 9007074, 0);
    InitializeEvent(69, 9007002, 6605300, Consumable.Blue_Flask, 7022300, false); // Legs - Main
    InitializeEvent(70, 9007002, 6605300, Consumable.Blue_Flask, 7022310, false); // Legs - Right Bleed
    InitializeEvent(71, 9007002, 6605300, Consumable.Blue_Flask, 7022315, false); // Legs - Left Bleed
    
    InitializeEvent(175, 9007030, 6605000, 7022000, false); // Head
    InitializeEvent(176, 9007030, 6605100, 7022100, false); // Armor
    InitializeEvent(187, 9007030, 7022100, 7022110, false); // Armor
    InitializeEvent(177, 9007030, 6605200, 7022200, false); // Arms - Main
    InitializeEvent(178, 9007030, 7022200, 7022210, false); // Arms - 10% Acc
    InitializeEvent(179, 9007030, 7022200, 7022211, false); // Arms - 20% Acc
    InitializeEvent(180, 9007030, 7022200, 7022212, false); // Arms - 30% Acc
    InitializeEvent(181, 9007030, 7022200, 7022213, false); // Arms - 10% Def
    InitializeEvent(182, 9007030, 7022200, 7022214, false); // Arms - 20% Def
    InitializeEvent(183, 9007030, 7022200, 7022215, false); // Arms - 30% Def
    //InitializeEvent(11, 9007034, 7022200, 7022213, 7022210);
    //InitializeEvent(12, 9007034, 7022200, 7022214, 7022211);
    //InitializeEvent(13, 9007034, 7022200, 7022215, 7022212);
    InitializeEvent(184, 9007030, 6605300, 7022300, false); // Legs - Main
    InitializeEvent(185, 9007030, 7022300, 7022310, false); // Legs - Right Bleed
    InitializeEvent(186, 9007030, 7022300, 7022315, false); // Legs - Left Bleed
    
    // Ascetic's Set
    InitializeEvent(19, 9007001, 6606000, 7023000, false); // Head
    InitializeEvent(25, 9007001, 6606000, 102000, false); // Head - Hardtear
    InitializeEvent(41, 9007002, 6606100, Consumable.Crimson_Flask, 7023100, false); // Armor
    InitializeEvent(42, 9007002, 6606200, Consumable.Weapon_Greases, 7023200, false); // Arms
    InitializeEvent(43, 9007002, 6606300, Consumable.Blue_Flask, 7023300, false); // Legs
    
    InitializeEvent(120, 9007030, 6606000, 7023000, false); // Head
    InitializeEvent(171, 9007030, 7023000, 102000, false); // Head - Hardtear
    InitializeEvent(121, 9007030, 6606100, 7023100, false); // Armor
    InitializeEvent(122, 9007030, 6606200, 7023200, false); // Arms
    InitializeEvent(123, 9007030, 6606300, 7023300, false); // Legs
    
    
    // - Rogue - 
    // Leather Set
    InitializeEvent(11, 9007001, 6140000, 7012000, false); // Head
    InitializeEvent(30, 9007002, 6140010, Consumable.Crimson_Flask, 7012100, false); // Armor
    InitializeEvent(31, 9007002, 6140030, Consumable.Blue_Flask, 7012300, false); // Legs
    InitializeEvent(73, 9007002, 6140020, Consumable.Weapon_Greases, 7012200, false); // Arms
    InitializeEvent(1, 9007003, 7012100, 350601, 7012107, false); // Armor- FP SP restore on crit
    InitializeEvent(2, 9007003, 7012000, 140, 7012005, false); // Head - Buff on Jump
    InitializeEvent(3, 9007003, 7012000, 100390, 7012005, false); // Head - Buff on Dodge
    InitializeEvent(4, 9007003, 7012000, 140, 7012006, false); // Head - Buff on Jump
    InitializeEvent(5, 9007003, 7012000, 100390, 7012006, false); // Head - Buff on Dodge
    InitializeEvent(0, 9007052, 0); // Head - Buff cleanup on expire
    InitializeEvent(78, 9007030, 6140000, 7012000, false); // Head
    InitializeEvent(79, 9007030, 6140010, 7012100, false); // Armor
    InitializeEvent(80, 9007030, 6140020, 7012200, false); // Arms
    InitializeEvent(81, 9007030, 6140030, 7012300, false); // Legs
    
    // Raptor's Set
    InitializeEvent(12, 9007001, 6093000, 7013000, false); // Head
    InitializeEvent(32, 9007002, 6093010, Consumable.Crimson_Flask, 7013100, false); // Armor
    InitializeEvent(33, 9007002, 6093020, Consumable.Weapon_Greases, 7013200, false); // Arms
    InitializeEvent(34, 9007002, 6093030, Consumable.Blue_Flask, 7013300, false); // Legs
    InitializeEvent(0, 9007048, 0); // Boots: increase damage every 5 seconds without taking damag e
    InitializeEvent(0, 9007049, 0); // Boots: remove stacks when getting hit.
    InitializeEvent(6, 9007003, 7013200, 350601, 7013205, false); // Arms - DMG increase after crit
    InitializeEvent(7, 9007003, 7013100, 350601, 7013102, false); // Armor - Bubble after crit
    InitializeEvent(82, 9007030, 6093000, 7013000, false); // Head
    InitializeEvent(83, 9007030, 6093010, 7013100, false); // Armor
    InitializeEvent(84, 9007030, 6093020, 7013200, false); // Arms
    InitializeEvent(85, 9007030, 6093030, 7013300, false); // Legs
    InitializeEvent(86, 9007030, 6093020, 7013205, false); // Legs
    InitializeEvent(87, 9007030, 7013300, 7013310, false);
    InitializeEvent(88, 9007030, 7013300, 7013311, false);
    InitializeEvent(89, 9007030, 7013300, 7013312, false);
    InitializeEvent(90, 9007030, 7013300, 7013313, false);
    InitializeEvent(91, 9007030, 7013100, 7013102, false); // Armor - Remove bubble if primary ends
    
    // Blackguard's Iron Mask
    InitializeEvent(13, 9007001, 6005100, 7014000, false); // Head
    InitializeEvent(15, 9007001, 6005100, 7014001, false); // Head
    InitializeEvent(92, 9007030, 6005100, 7014000, false); // Head
    InitializeEvent(94, 9007030, 6005100, 7014001, false); // Head
    
    // Braided Cord Set
    InitializeEvent(21, 9007001, 6607000, 7024000, false); // Head
    InitializeEvent(26, 9007001, 6607000, 7024010, false); // Head
    InitializeEvent(0, 9007069, 0); // Head Stack Handler
    InitializeEvent(47, 9007002, 6607100, Consumable.Crimson_Flask, 7024100, false); // Armor
    InitializeEvent(0, 9007070, 0); // Armor Bullet Handler
    InitializeEvent(48, 9007002, 6607200, Consumable.Weapon_Greases, 7024200, false); // Arms
    InitializeEvent(49, 9007002, 6607200, Consumable.Weapon_Greases, 7024201, false); // Arms
    InitializeEvent(50, 9007002, 6607300, Consumable.Blue_Flask, 7024300, false); // Legs
    
    InitializeEvent(138, 9007030, 6607000, 7024000, false); // Head
    InitializeEvent(172, 9007030, 7024000, 7024010, false); // Head
    InitializeEvent(8, 9007034, 7024000, 7024011, 7024001);
    InitializeEvent(9, 9007034, 7024000, 7024011, 7024002);
    InitializeEvent(10, 9007034, 7024000, 7024011, 7024003);
    InitializeEvent(139, 9007030, 6607100, 7024100, false); // Armor
    InitializeEvent(140, 9007030, 6607200, 7024200, false); // Arms
    InitializeEvent(141, 9007030, 6607200, 7024201, false); // Arms
    InitializeEvent(142, 9007030, 6607300, 7024300, false); // Legs
    
    
    // - - - Special - - -
    
    // - Perfumer -
    // Depraved Perfumer Set
    
    // Omenkiller Set
    
    // Perfumer Set
    
    
    // - Prisoner -
    InitializeEvent(0, 9007067, 0); // Jump Attack Fix
    // Drake Knight Set
    // Helm
    InitializeEvent(0, 9007004, 6006000, 7015050); // Helm Active ON (Main)
    InitializeEvent(0, 9007033, 6006000, 7015050); // Helm Active OFF (Main)
    InitializeEvent(0, 9007061, 0); // Helm Active
    //InitializeEvent(1, 9007033, 7015050, 7015025);  // Helm Active OFF (01% Resource)
    //InitializeEvent(2, 9007033, 7015050, 7015026);  // Helm Active OFF (02% Resource)
    //InitializeEvent(3, 9007033, 7015050, 7015027);  // Helm Active OFF (03% Resource)
    //InitializeEvent(4, 9007033, 7015050, 7015028);  // Helm Active OFF (04% Resource)
    //InitializeEvent(5, 9007033, 7015050, 7015029);  // Helm Active OFF (05% Resource)
    //InitializeEvent(6, 9007033, 7015050, 7015030);  // Helm Active OFF (06% Resource)
    //InitializeEvent(7, 9007033, 7015050, 7015031);  // Helm Active OFF (07% Resource)
    //InitializeEvent(8, 9007033, 7015050, 7015032);  // Helm Active OFF (08% Resource)
    //InitializeEvent(9, 9007033, 7015050, 7015033);  // Helm Active OFF (09% Resource)
    //InitializeEvent(10, 9007033, 7015050, 7015034); // Helm Active OFF (10% Resource)
    //InitializeEvent(11, 9007033, 7015050, 7015035); // Helm Active OFF (11% Resource)
    //InitializeEvent(12, 9007033, 7015050, 7015036); // Helm Active OFF (12% Resource)
    //InitializeEvent(13, 9007033, 7015050, 7015037); // Helm Active OFF (13% Resource)
    //InitializeEvent(14, 9007033, 7015050, 7015038); // Helm Active OFF (14% Resource)
    //InitializeEvent(15, 9007033, 7015050, 7015039); // Helm Active OFF (15% Resource)
    //InitializeEvent(16, 9007033, 7015050, 7015040); // Helm Active OFF (16% Resource)
    //InitializeEvent(17, 9007033, 7015050, 7015041); // Helm Active OFF (17% Resource)
    //InitializeEvent(18, 9007033, 7015050, 7015042); // Helm Active OFF (18% Resource)
    //InitializeEvent(19, 9007033, 7015050, 7015043); // Helm Active OFF (19% Resource)
    //InitializeEvent(20, 9007033, 7015050, 7015044); // Helm Active OFF (20% Resource)
    //InitializeEvent(21, 9007033, 7015050, 7015045); // Helm Active OFF (21% Resource)
    //InitializeEvent(22, 9007033, 7015050, 7015046); // Helm Active OFF (22% Resource)
    //InitializeEvent(23, 9007033, 7015050, 7015047); // Helm Active OFF (23% Resource)
    //InitializeEvent(24, 9007033, 7015050, 7015048); // Helm Active OFF (24% Resource)
    //InitializeEvent(25, 9007033, 7015050, 7015049); // Helm Active OFF (25% Resource)
    InitializeEvent(26, 9007033, 7015050, 7015051); // Helm Active OFF (01% Buff)
    InitializeEvent(27, 9007033, 7015050, 7015052); // Helm Active OFF (02% Buff)
    InitializeEvent(28, 9007033, 7015050, 7015053); // Helm Active OFF (03% Buff)
    InitializeEvent(29, 9007033, 7015050, 7015054); // Helm Active OFF (04% Buff)
    InitializeEvent(30, 9007033, 7015050, 7015055); // Helm Active OFF (05% Buff)
    InitializeEvent(31, 9007033, 7015050, 7015056); // Helm Active OFF (06% Buff)
    InitializeEvent(32, 9007033, 7015050, 7015057); // Helm Active OFF (07% Buff)
    InitializeEvent(33, 9007033, 7015050, 7015058); // Helm Active OFF (08% Buff)
    InitializeEvent(34, 9007033, 7015050, 7015059); // Helm Active OFF (09% Buff)
    InitializeEvent(35, 9007033, 7015050, 7015060); // Helm Active OFF (10% Buff)
    InitializeEvent(36, 9007033, 7015050, 7015061); // Helm Active OFF (11% Buff)
    InitializeEvent(37, 9007033, 7015050, 7015062); // Helm Active OFF (12% Buff)
    InitializeEvent(38, 9007033, 7015050, 7015063); // Helm Active OFF (13% Buff)
    InitializeEvent(39, 9007033, 7015050, 7015064); // Helm Active OFF (14% Buff)
    InitializeEvent(40, 9007033, 7015050, 7015065); // Helm Active OFF (15% Buff)
    InitializeEvent(41, 9007033, 7015050, 7015066); // Helm Active OFF (16% Buff)
    InitializeEvent(42, 9007033, 7015050, 7015067); // Helm Active OFF (17% Buff)
    InitializeEvent(43, 9007033, 7015050, 7015068); // Helm Active OFF (18% Buff)
    InitializeEvent(44, 9007033, 7015050, 7015069); // Helm Active OFF (19% Buff)
    InitializeEvent(45, 9007033, 7015050, 7015070); // Helm Active OFF (20% Buff)
    InitializeEvent(46, 9007033, 7015050, 7015071); // Helm Active OFF (21% Buff)
    InitializeEvent(47, 9007033, 7015050, 7015072); // Helm Active OFF (22% Buff)
    InitializeEvent(48, 9007033, 7015050, 7015073); // Helm Active OFF (23% Buff)
    InitializeEvent(49, 9007033, 7015050, 7015074); // Helm Active OFF (24% Buff)
    InitializeEvent(50, 9007033, 7015050, 7015075); // Helm Active OFF (25% Buff)
    InitializeEvent(0, 9007011, 6006000, 8000020, 7015000); // Helm Passive ON
    InitializeEvent(0, 9007034, 6006000, 8000020, 7015000); // Helm Passive OFF
    // Armor
    InitializeEvent(0, 9007062, 0); // Armor Active (3 Stacks)
    InitializeEvent(1, 9007011, 6006010, 8000020, 7015100); // Armor Passive ON
    InitializeEvent(1, 9007034, 6006010, 8000020, 7015100); // Armor Passive OFF
    // Greaves
    InitializeEvent(6, 9007005, 6006030, Consumable.Blue_Flask, 7015350); // Greaves Active ON (Main)
    InitializeEvent(0, 9007063, 0); // Armor Active ON (Invunerability)
    InitializeEvent(0, 9007064, 0); // Armor Active OFF (Invunerability)
    InitializeEvent(2, 9007011, 6006030, 8000020, 7015300); // Greaves Passive ON
    InitializeEvent(2, 9007034, 6006030, 8000020, 7015300); // Greaves Passive OFF
    // Gauntlets
    //InitializeEvent(1, 9007004, 6006020, 7015250); // Gauntlets Active ON
    //InitializeEvent(51, 9007033, 6006020, 7015250); // Gauntlets Active OFF
    InitializeEvent(0, 9007065, 0); // Gauntlets Active (Melee)
    InitializeEvent(0, 9007066, 0); // Gauntlets Active (Magic)
    InitializeEvent(3, 9007011, 6006020, 8000020, 7015200); // Gauntlets Passive ON
    InitializeEvent(3, 9007034, 6006020, 8000020, 7015200); // Gauntlets Passive OFF
    
    
    // Eccentric Set
    // Hood
    InitializeEvent(2, 9007004, 6094000, 7016050); // Hood Active ON (Main)
    InitializeEvent(52, 9007033, 6094000, 7016050); // Hood Active OFF (Main)
    InitializeEvent(3, 9007004, 6094000, 7016060); // Hood Active ON (Hit Check)
    InitializeEvent(53, 9007033, 7016050, 7016060); // Hood Active OFF (Hit Check)
    InitializeEvent(0, 9007006, 7016050, 100390, 7016051); // Hood Active (Dodge)
    InitializeEvent(1, 9007006, 7016050, 140, 7016051); // Hood Active (Jump)
    InitializeEvent(2, 9007006, 7016050, 7016061, 7016051); // Hood Active (Melee Hit)
    InitializeEvent(3, 9007006, 7016050, 8000010, 7016051); // Hood Active (Ammo Hit)
    InitializeEvent(4, 9007006, 7016050, 8000050, 7016051); // Hood Active (Block)
    InitializeEvent(0, 9007060, 0); // Head Active OFF (Stacks)
    InitializeEvent(4, 9007011, 6094000, 8000020, 7016000); // Hood Passive ON
    InitializeEvent(4, 9007034, 6094000, 8000020, 7016000); // Hood Passive OFF
    // Armor
    InitializeEvent(0, 9007005, 6094010, Consumable.Crimson_Flask, 7016150); // Armor Active ON
    InitializeEvent(54, 9007033, 6094010, 7016150); // Armor Active OFF
    InitializeEvent(5, 9007011, 6094010, 8000020, 7016100); // Armor Passive ON
    InitializeEvent(5, 9007034, 6094010, 8000020, 7016100); // Armor Passive OFF
    // Breeches
    InitializeEvent(1, 9007005, 6094030, Consumable.Blue_Flask, 7016350); // Breeches Active ON (HP Recovery)
    InitializeEvent(55, 9007033, 6094030, 7016350); // Breeches Active OFF (HP Recovery)
    InitializeEvent(2, 9007005, 6094030, Consumable.Blue_Flask, 7016351); // Breeches Active ON (Poise)
    InitializeEvent(56, 9007033, 6094030, 7016351); // Breeches Active OFF (Poise)
    InitializeEvent(6, 9007011, 6094030, 8000020, 7016300); // Breeches Passive ON
    InitializeEvent(6, 9007034, 6094030, 8000020, 7016300); // Breeches Passive OFF
    // Manchettes
    InitializeEvent(3, 9007005, 6094020, Consumable.Weapon_Greases, 7016250); // Manchettes Active ON
    InitializeEvent(57, 9007033, 6094020, 7016250); // Manchettes Active OFF
    InitializeEvent(7, 9007011, 6094020, 8000020, 7016200); // Manchettes Passive ON
    InitializeEvent(7, 9007034, 6094020, 8000020, 7016200); // Manchettes Passive OFF
    
    
    // All-Knowing Set
    // Helm
    InitializeEvent(4, 9007004, 6059000, 7017050); // Helm Active ON
    InitializeEvent(58, 9007033, 6059000, 7017050); // Helm Active OFF
    InitializeEvent(8, 9007010, 6059000, 8000020, 7017000); // Helm Passive ON
    InitializeEvent(8, 9007031, 6059000, 8000020, 7017000); // Helm Passive OFF
    // Armor
    InitializeEvent(4, 9007005, 6059010, Consumable.Crimson_Flask, 7017150); // Armor Active ON (Main)
    InitializeEvent(59, 9007033, 6059010, 7017150); // Armor Active OFF (Main)
    InitializeEvent(0, 9007059, 0); // Helm Active ON (**% Spell Damage)
    InitializeEvent(60, 9007033, 7017150, 7017151); // Armor Active OFF (02%)
    InitializeEvent(61, 9007033, 7017150, 7017152); // Armor Active OFF (04%)
    InitializeEvent(62, 9007033, 7017150, 7017153); // Armor Active OFF (06%)
    InitializeEvent(63, 9007033, 7017150, 7017154); // Armor Active OFF (08%)
    InitializeEvent(64, 9007033, 7017150, 7017155); // Armor Active OFF (10%)
    InitializeEvent(65, 9007033, 7017150, 7017156); // Armor Active OFF (12%)
    InitializeEvent(66, 9007033, 7017150, 7017157); // Armor Active OFF (14%)
    InitializeEvent(67, 9007033, 7017150, 7017158); // Armor Active OFF (16%)
    InitializeEvent(68, 9007033, 7017150, 7017159); // Armor Active OFF (18%)
    InitializeEvent(69, 9007033, 7017150, 7017160); // Armor Active OFF (20%)
    InitializeEvent(70, 9007033, 7017150, 7017161); // Armor Active OFF (22%)
    InitializeEvent(71, 9007033, 7017150, 7017162); // Armor Active OFF (24%)
    InitializeEvent(72, 9007033, 7017150, 7017163); // Armor Active OFF (26%)
    InitializeEvent(73, 9007033, 7017150, 7017164); // Armor Active OFF (28%)
    InitializeEvent(74, 9007033, 7017150, 7017165); // Armor Active OFF (30%)
    InitializeEvent(75, 9007033, 7017150, 7017166); // Armor Active OFF (32%)
    InitializeEvent(76, 9007033, 7017150, 7017167); // Armor Active OFF (34%)
    InitializeEvent(77, 9007033, 7017150, 7017168); // Armor Active OFF (36%)
    InitializeEvent(78, 9007033, 7017150, 7017169); // Armor Active OFF (38%)
    InitializeEvent(79, 9007033, 7017150, 7017170); // Armor Active OFF (40%)
    InitializeEvent(9, 9007010, 6059010, 8000020, 7017100); // Armor Passive ON
    InitializeEvent(9, 9007031, 6059010, 8000020, 7017100); // Armor Passive OFF
    // Greaves
    InitializeEvent(5, 9007005, 6059030, Consumable.Blue_Flask, 7017350); // Greaves Active ON
    InitializeEvent(80, 9007033, 6059030, 7017350); // Greaves Active OFF
    InitializeEvent(10, 9007010, 6059030, 8000020, 7017300); // Greaves Passive ON
    InitializeEvent(10, 9007031, 6059030, 8000020, 7017300); // Greaves Passive OFF
    // Gauntlets
    InitializeEvent(5, 9007006, 6059020, 100615, 7017250); // Gauntlets Active
    InitializeEvent(11, 9007010, 6059020, 8000020, 7017200); // Gauntlets Passive ON
    InitializeEvent(11, 9007031, 6059020, 8000020, 7017200); // Gauntlets Passive OFF
    
    
    // - Undefined OR Shared -
    // Crimson Tear Scarab
    InitializeEvent(39, 9007002, 6191000, Consumable.Crimson_Flask, 7098000, true);
    InitializeEvent(118, 9007030, 6191000, 7098000, true);
    // Cerulean Tear Scarab
    InitializeEvent(40, 9007002, 6192000, Consumable.Blue_Flask, 7099000, true);
    InitializeEvent(119, 9007030, 6192000, 7099000, true);
    
    // Omen Set
    
    // Imp Heads (?)
    
    // Blue Cloth Set
    
    
    
    // - - - Magic Sets - - -
    InitializeEvent(0, 9007012, 19980, 6639000); // Rock Heart
    InitializeEvent(0, 9007035, 19980, 6639000);
    InitializeEvent(1, 9007012, 19981, 6630000); // Dragon Priestess
    InitializeEvent(1, 9007035, 19981, 6630000);
    InitializeEvent(2, 9007012, 19981, 6630100);
    InitializeEvent(2, 9007035, 19981, 6630100);
    InitializeEvent(3, 9007012, 19982, 6636000); // Lamenters Mask
    InitializeEvent(3, 9007035, 19982, 6636000);
    
});

// - - Triggers - - (9007001-90070029)
// Wonderous Physic Trigger - (int) armor Passive spEffect, (int) granted spEffect, (boolean) allowMagicWeapons
$Event(9007001, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (X8_4 == 0) {
        WaitFor(CharacterHasSpEffect(10000, X0_4) && PlayerHasItem(ItemType.Goods, 250) && !CharacterHasSpEffect(10000, 109000) && !CharacterHasSpEffect(10000, 109001));
        WaitFor(PlayerHasItem(ItemType.Goods, 251) || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001));
        RestartIf(!CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001));
    }
    else if (X8_4 == 1) {
        WaitFor(CharacterHasSpEffect(10000, X0_4) && PlayerHasItem(ItemType.Goods, 250));
        WaitFor(PlayerHasItem(ItemType.Goods, 251) || !CharacterHasSpEffect(10000, X0_4));
        RestartIf(!CharacterHasSpEffect(10000, X0_4));
    }
    else {
        WaitFor(CharacterHasSpEffect(10000, X0_4) && PlayerHasItem(ItemType.Goods, 250) && !CharacterHasSpEffect(10000, 109000));
        WaitFor(PlayerHasItem(ItemType.Goods, 251) || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000));
        RestartIf(!CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000));
    }
    
    SetSpEffect(10000, X4_4);
    if (X8_4 != 1)
        SetSpEffect(10000, 197); // Remove all spell buff effects
    RestartEvent();
});

// Advanced Armor Passive (emumerated) - (int) armor Passive spEffect, (Consumable) Enum, (int) granted spEffect, (boolean) allowMagicWeapons
$Event(9007002, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    if (X12_4 == 0)
        WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 109000) && !CharacterHasSpEffect(10000, 109001));
    else if (X12_4 == 1)
        WaitFor(CharacterHasSpEffect(10000, X0_4));
    else
        WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 109000));
    
    if (X4_4 == 0) { // Crimson Flask
        for (let i = 0; i < crimsonFlaskSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, crimsonFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 1) { // Blue Flask
        for (let i = 0; i < blueFlaskSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 2) { // Bombs
        for (let i = 0; i < bombThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, bombThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 3) { // Weapon-Grease
        trigger |= CharacterHasSpEffect(10000, 195);
    }
    else if (X4_4 == 4) { // Perfumes
        for (let i = 0; i < perfumeUseSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, perfumeUseSpEffects[i]);
        }
    }
    else if (X4_4 == 5) { // Throwing Knives
        for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 6) { // Throwing Stones
        for (let i = 0; i < throwingStonesThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, throwingStonesThrowSpEffects[i]);
        }
    }
    else trigger |= 1 == 0;

    if (X12_4 == 0)
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001));
    else if (X12_4 == 1)
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4));
    else
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000));
    RestartIf(!trigger.Passed);
    
    SetSpEffect(10000, X8_4);
    if (X12_4 != 1)
        SetSpEffect(10000, 197); // Remove all spell buff effects
    
    if (X4_4 == 0) { // Crimson Flask
        for (let i = 0; i < crimsonFlaskSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, crimsonFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 1) { // Blue Flask
        for (let i = 0; i < blueFlaskSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 2) { // Bombs
        for (let i = 0; i < bombThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, bombThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 3) { // Weapon-Grease
        triggerDone |= !CharacterHasSpEffect(10000, 195);
    }
    else if (X4_4 == 4) { // Perfumes
        for (let i = 0; i < perfumeUseSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, perfumeUseSpEffects[i]);
        }
    }
    else if (X4_4 == 5) { // Throwing Knives
        for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 6) { // Throwing Stones
        for (let i = 0; i < throwingStonesThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, throwingStonesThrowSpEffects[i]);
        }
    }
    else triggerDone |= 1 == 0;
    
    WaitFor(triggerDone);
    RestartEvent();
});

// Advanced Armor Passive (custom spEffect) - (int) armor Passive spEffect, (int) triggering spEffect, (int) granted spEffect, (boolean) allowMagicWeapons
$Event(9007003, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    if (X12_4 == 0)
        WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 109000) && !CharacterHasSpEffect(10000, 109001));
    else if (X12_4 == 1)
       WaitFor(CharacterHasSpEffect(10000, X0_4));
    else
        WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, 109000));
    
    trigger |= CharacterHasSpEffect(10000, X4_4);
    if (X12_4 == 0)
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001));
    else if (X12_4 == 1)
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4));
    else
        WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000));
    RestartIf(!trigger.Passed);
    SetSpEffect(10000, X8_4);
    if (X12_4 != 1)
        SetSpEffect(10000, 197); // Remove all spell buff effects
    WaitFor(!CharacterHasSpEffect(10000, X4_4));
    RestartEvent();
});

// Wonderous Physic Trigger (RL1) - (int) armor Passive spEffect, (int) granted spEffect
$Event(9007004, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && PlayerHasItem(ItemType.Goods, 250) && CharacterHasSpEffect(10000, 8000020));
    WaitFor(PlayerHasItem(ItemType.Goods, 251) || !CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 8000020));
    RestartIf(!CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 8000020));
    
    SetSpEffect(10000, X4_4);
    RestartEvent();
});

// Advanced Armor Passive (RL1) (emumerated) - (int) armor Passive spEffect, (Consumable) Enum, (int) granted spEffect
$Event(9007005, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && CharacterHasSpEffect(10000, 8000020));
    
    if (X4_4 == 0) { // Crimson Flask
        for (let i = 0; i < crimsonFlaskSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, crimsonFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 1) { // Blue Flask
        for (let i = 0; i < blueFlaskSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 2) { // Bombs
        for (let i = 0; i < bombThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, bombThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 3) { // Weapon-Grease
        trigger |= CharacterHasSpEffect(10000, 195);
    }
    else if (X4_4 == 4) { // Perfumes
        for (let i = 0; i < perfumeUseSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, perfumeUseSpEffects[i]);
        }
    }
    else if (X4_4 == 5) { // Throwing Knives
        for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 6) { // Throwing Stones
        for (let i = 0; i < throwingStonesThrowSpEffects.length; i++) {
            trigger |= CharacterHasSpEffect(10000, throwingStonesThrowSpEffects[i]);
        }
    }
    else trigger |= 1 == 0;

    WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 8000020));
    RestartIf(!trigger.Passed);
    
    SetSpEffect(10000, X8_4);
    
    if (X4_4 == 0) { // Crimson Flask
        for (let i = 0; i < crimsonFlaskSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, crimsonFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 1) { // Blue Flask
        for (let i = 0; i < blueFlaskSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
        }
    }
    else if (X4_4 == 2) { // Bombs
        for (let i = 0; i < bombThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, bombThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 3) { // Weapon-Grease
        triggerDone |= !CharacterHasSpEffect(10000, 195);
    }
    else if (X4_4 == 4) { // Perfumes
        for (let i = 0; i < perfumeUseSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, perfumeUseSpEffects[i]);
        }
    }
    else if (X4_4 == 5) { // Throwing Knives
        for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
        }
    }
    else if (X4_4 == 6) { // Throwing Stones
        for (let i = 0; i < throwingStonesThrowSpEffects.length; i++) {
            triggerDone |= !CharacterHasSpEffect(10000, throwingStonesThrowSpEffects[i]);
        }
    }
    else triggerDone |= 1 == 0;
    
    WaitFor(triggerDone);
    RestartEvent();
});

// Advanced Armor Passive (RL1) (custom spEffect) - (int) armor Passive spEffect, (int) triggering spEffect, (int) granted spEffect
$Event(9007006, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && CharacterHasSpEffect(10000, 8000020));
    
    trigger |= CharacterHasSpEffect(10000, X4_4);
    WaitFor(trigger || !CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 8000020));
    RestartIf(!trigger.Passed);
    SetSpEffect(10000, X8_4);
    WaitFor(!CharacterHasSpEffect(10000, X4_4));
    RestartEvent();
});

// Toggle spEffect ON if two other buffs are present - check spEffect 1, check spEffect 2, granted spEffect
$Event(9007010, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, X8_4) && CharacterHasSpEffect(10000, X0_4) && CharacterHasSpEffect(10000, X4_4));
    SetSpEffect(10000, X8_4);
    RestartEvent();
});

// Toggle spEffect ON if spEffect1 is present and the spEffect2 is not present - check spEffect 1, check spEffect 2, granted spEffect
$Event(9007011, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, X8_4) && CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, X4_4));
    SetSpEffect(10000, X8_4);
    RestartEvent();
});

// Simple Toggle ON spEffect2 if spEffect1 is found
$Event(9007012, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && !CharacterHasSpEffect(10000, X4_4));
    SetSpEffect(10000, X4_4);
    RestartEvent();
});

// - - Cleanup - - (9007030-9007039)
// Advanced Armor Buff Cleanup - (int) armor Passive spEffect, (int) armor spEffect, (boolean) allowMagicWeapons
$Event(9007030, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4))
    
    expired |= !CharacterHasSpEffect(10000, X4_4);
    if (X8_4 == 0)
        WaitFor(expired || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001));
    else if (X8_4 == 1)
       WaitFor(expired || !CharacterHasSpEffect(10000, X0_4));
    else
        WaitFor(expired || !CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, 109000));
    RestartIf(expired.Passed);
    
    ClearSpEffect(10000, X4_4);
    
    RestartEvent();
});

// Toggle spEffect OFF if one of the two spEffect are not present - check spEffect 1, check spEffect 2, cleared spEffect
$Event(9007031, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X8_4) && (!CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, X4_4)));
    ClearSpEffect(10000, X8_4);
    RestartEvent();
});

// Clear Hit Check
$Event(9007032, Default, function(X0_4) {
    DisableNetworkSync();
    ClearSpEffect(10000, X0_4);
    RestartIf(CharacterHasSpEffect(10000, X0_4));
});

// Advanced Armor Buff Cleanup (RL1) - (int) armor Passive spEffect, (int) armor spEffect
$Event(9007033, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4))
    
    expired |= !CharacterHasSpEffect(10000, X4_4);
    WaitFor(expired || !CharacterHasSpEffect(10000, X0_4) || !CharacterHasSpEffect(10000, 8000020));
    RestartIf(expired.Passed);
    
    ClearSpEffect(10000, X4_4);
    
    RestartEvent();
});

// Toggle spEffect OFF if spEffect1 is not present, or the spEffect2 is present - check spEffect 1, check spEffect 2, cleared spEffect
$Event(9007034, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X8_4) && (!CharacterHasSpEffect(10000, X0_4) || CharacterHasSpEffect(10000, X4_4)));
    ClearSpEffect(10000, X8_4);
    RestartEvent();
});

// Simple Toggle OFF spEffect 2 if spEffect 1 is gone
$Event(9007035, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X4_4) && !CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    RestartEvent();
});

// - - Custom Events - - (9007040-9007099)

// Bull-Goat Guantlets - Undaunted Combatant Handler
$Event(9007040, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7010200) && CharacterHasSpEffect(10000, 7010202));
    GotoIf(L0, CharacterHasSpEffect(10000, 7010219));
    
    if (CharacterHasSpEffect(10000, 7010218)) {
        ClearSpEffect(10000, 7010218);
        SetSpEffect(10000, 7010219);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010217)) {
        ClearSpEffect(10000, 7010217);
        SetSpEffect(10000, 7010218);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010216)) {
        ClearSpEffect(10000, 7010216);
        SetSpEffect(10000, 7010217);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010215)) {
        ClearSpEffect(10000, 7010215);
        SetSpEffect(10000, 7010216);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010214)) {
        ClearSpEffect(10000, 7010214);
        SetSpEffect(10000, 7010215);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010213)) {
        ClearSpEffect(10000, 7010213);
        SetSpEffect(10000, 7010214);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010212)) {
        ClearSpEffect(10000, 7010212);
        SetSpEffect(10000, 7010213);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010211)) {
        ClearSpEffect(10000, 7010211);
        SetSpEffect(10000, 7010212);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7010210)) {
        ClearSpEffect(10000, 7010210);
        SetSpEffect(10000, 7010211);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else {
        SetSpEffect(10000, 7010210);
        SetSpEffect(10000, 7010205);
        InitializeEvent(0, 9007032, 7010202);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }

L0:   
    InitializeEvent(0, 9007032, 7010202);
    RestartEvent();
});

// Kaiden Trousers - Duelist's Curescendo Handler
$Event(9007041, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7011300) && CharacterHasSpEffect(10000, 7011301));
    GotoIf(L0, CharacterHasSpEffect(10000, 7011324));
           
    if (CharacterHasSpEffect(10000, 7011323)) {
        ClearSpEffect(10000, 7011323);
        SetSpEffect(10000, 7011324);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }      
    else if (CharacterHasSpEffect(10000, 7011322)) {
        ClearSpEffect(10000, 7011322);
        SetSpEffect(10000, 7011323);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }   
    else if (CharacterHasSpEffect(10000, 7011321)) {
        ClearSpEffect(10000, 7011321);
        SetSpEffect(10000, 7011322);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }    
    else if (CharacterHasSpEffect(10000, 7011320)) {
        ClearSpEffect(10000, 7011320);
        SetSpEffect(10000, 7011321);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }    
    else if (CharacterHasSpEffect(10000, 7011319)) {
        ClearSpEffect(10000, 7011319);
        SetSpEffect(10000, 7011320);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011318)) {
        ClearSpEffect(10000, 7011318);
        SetSpEffect(10000, 7011319);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011317)) {
        ClearSpEffect(10000, 7011317);
        SetSpEffect(10000, 7011318);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011316)) {
        ClearSpEffect(10000, 7011316);
        SetSpEffect(10000, 7011317);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011315)) {
        ClearSpEffect(10000, 7011315);
        SetSpEffect(10000, 7011316);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011314)) {
        ClearSpEffect(10000, 7011314);
        SetSpEffect(10000, 7011315);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011313)) {
        ClearSpEffect(10000, 7011313);
        SetSpEffect(10000, 7011314);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011312)) {
        ClearSpEffect(10000, 7011312);
        SetSpEffect(10000, 7011313);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011311)) {
        ClearSpEffect(10000, 7011311);
        SetSpEffect(10000, 7011312);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7011310)) {
        ClearSpEffect(10000, 7011310);
        SetSpEffect(10000, 7011311);
        InitializeEvent(0, 9007032, 7011301);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else {
        SetSpEffect(10000, 7011310);
        WaitFixedTimeFrames(2);
        RestartEvent();
    }

L0:   
    InitializeEvent(0, 9007032, 7011301);
    RestartEvent();
});

// Raging Wolf Helm - Shadowbeast ON Handler 
$Event(9007042, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7008000));
    EnableCharacterInvincibility(10000);
    WaitFor(!CharacterHasSpEffect(10000, 7008000));
    RestartEvent();
});

// Raging Wolf Helm - Shadowbeast OFF Handler 
$Event(9007043, Default, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7008000));
    WaitFor(!CharacterHasSpEffect(10000, 7008000));
    DisableCharacterInvincibility(10000);
    RestartEvent();
});

// Lionel's Helm - Fia's Champion - If Fia's Champion and Death Ward are active, make player immortal
$Event(9007044, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7009000) && CharacterHasSpEffect(10000, 1509101));
    SetCharacterImmortality(10000, Enabled);
    WaitFor(!CharacterHasSpEffect(10000, 1509101));
    RestartEvent();
});

// Page Gloves - Deadeye
$Event(9007045, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 8000000) && CharacterHasSpEffect(10000, 6022020) && !CharacterHasSpEffect(10000, 109000));
    WaitFor(ElapsedSeconds(1) || !CharacterHasSpEffect(10000, 8000000));
    
    GotoIf(L0, !CharacterHasSpEffect(10000, 8000000));
    SetSpEffect(10000, 7005200);
    WaitFor(ElapsedSeconds(1) || !CharacterHasSpEffect(10000, 8000000));
    
    GotoIf(L0, !CharacterHasSpEffect(10000, 8000000));
    ClearSpEffect(10000, 7005200);
    SetSpEffect(10000, 7005201);
    WaitFor(ElapsedSeconds(1) || !CharacterHasSpEffect(10000, 8000000));
    
    GotoIf(L0, !CharacterHasSpEffect(10000, 8000000));
    ClearSpEffect(10000, 7005201);
    SetSpEffect(10000, 7005202);
    WaitFor(!CharacterHasSpEffect(10000, 8000000));
L0:
    ClearSpEffect(10000, 7005200);
    ClearSpEffect(10000, 7005202);
    ClearSpEffect(10000, 7005201);
    RestartEvent();
});

// UNUSED
$Event(9007046, Restart, function() {
});

// UNUSED
$Event(9007047, Restart, function() {
});

// Raptop's Boots - Assassin's Preperation 
$Event(9007048, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7013300));
    
    nextTier |= ElapsedSeconds(5);
    for (let i = 0; i < blueFlaskSpEffects.length; i++) {
        blueFlaskReset |= CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
    }
    WaitFor(blueFlaskReset || CharacterHasSpEffect(10000, 7013302) || nextTier || !CharacterHasSpEffect(10000, 7013300));
    GotoIf(L0, !nextTier.Passed);
    GotoIf(L0, CharacterHasSpEffect(10000, 7013313)); // Max tier
    
    if (CharacterHasSpEffect(10000, 7013312)) {
        ClearSpEffect(10000, 7013312);
        SetSpEffect(10000, 7013313);
        SetSpEffect(10000, 7013305);
        InitializeEvent(0, 9007032, 7013302); // Cleanup hit data
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7013311)) {
        ClearSpEffect(10000, 7013311);
        SetSpEffect(10000, 7013312);
        SetSpEffect(10000, 7013305);
        InitializeEvent(0, 9007032, 7013302); // Cleanup hit data
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7013310)) {
        ClearSpEffect(10000, 7013310);
        SetSpEffect(10000, 7013311);
        SetSpEffect(10000, 7013305);
        InitializeEvent(0, 9007032, 7013302); // Cleanup hit data
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
    else {
        SetSpEffect(10000, 7013310);
        SetSpEffect(10000, 7013305);
        InitializeEvent(0, 9007032, 7013302); // Cleanup hit data
        WaitFixedTimeFrames(2);
        RestartEvent();
    }
L0:
    InitializeEvent(0, 9007032, 7013302); // Cleanup hit data
    RestartEvent();
});

// Raptop's Boots - Assassin's Preperation - Cleanup
$Event(9007049, Restart, function() {
    DisableNetworkSync();
    for (let i = 0; i < blueFlaskSpEffects.length; i++) {
        blueFlaskReset |= CharacterHasSpEffect(10000, blueFlaskSpEffects[i]);
    }
    WaitFor(blueFlaskReset || 
           (CharacterHasSpEffect(10000, 7013300) && CharacterHasSpEffect(10000, 7013302) && 
           !CharacterHasSpEffect(10000, 7013102) && !CharacterHasSpEffect(10000, 7013103))); // If get hit
    
    ClearSpEffect(10000, 7013310); // Remove all stacks
    ClearSpEffect(10000, 7013311);
    ClearSpEffect(10000, 7013312);
    ClearSpEffect(10000, 7013313);
    
    RestartEvent();
});

// Lionel's Helmet - Death Ward Cleanup
$Event(9007050, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7009000) && CharacterHasSpEffect(10000, 1509101) && !CharacterHasSpEffect(10000, 1509100));
    WaitFor(CharacterHasSpEffect(10000, 109000) || CharacterHasSpEffect(10000, 109001) || CharacterHasSpEffect(10000, 100690))
    ClearSpEffect(10000, 1509101);
    SetCharacterImmortality(10000, Disabled);
    RestartEvent();
});

// Godrick Knight's Helmet - Bloodline's Reckoning
$Event(9007051, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7003000) && CharacterHasSpEffect(10000, 8000050));
    RestartIf(CharacterHasSpEffect(10000, 7003019));
    
    if (CharacterHasSpEffect(10000, 7003018)) {
        ClearSpEffect(10000, 7003018);
        SetSpEffect(10000, 7003019);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003017)) {
        ClearSpEffect(10000, 7003017);
        SetSpEffect(10000, 7003018);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003016)) {
        ClearSpEffect(10000, 7003016);
        SetSpEffect(10000, 7003017);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003015)) {
        ClearSpEffect(10000, 7003015);
        SetSpEffect(10000, 7003016);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003014)) {
        ClearSpEffect(10000, 7003014);
        SetSpEffect(10000, 7003015);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003013)) {
        ClearSpEffect(10000, 7003013);
        SetSpEffect(10000, 7003014);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003012)) {
        ClearSpEffect(10000, 7003012);
        SetSpEffect(10000, 7003013);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003011)) {
        ClearSpEffect(10000, 7003011);
        SetSpEffect(10000, 7003012);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    if (CharacterHasSpEffect(10000, 7003010)) {
        ClearSpEffect(10000, 7003010);
        SetSpEffect(10000, 7003011);
        SetSpEffect(10000, 7003005);
        WaitFixedTimeFrames(20);
        RestartEvent();
    }
    SetSpEffect(10000, 7003010);
    SetSpEffect(10000, 7003005);
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Black Hood - Deadly Acrobat Cleanup
$Event(9007052, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7012000));
    WaitFor(!CharacterHasSpEffect(10000, 7012000));
    InitializeEvent(0, 9007032, 7012005);
    InitializeEvent(1, 9007032, 7012007);
    RestartEvent();
});

// Lionel's Helmet - Fia's Champion Cleanup
$Event(9007053, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7009000));
    WaitFor(!CharacterHasSpEffect(10000, 7009000));
    InitializeEvent(0, 9007032, 7009001);
    InitializeEvent(1, 9007032, 7009002);
    InitializeEvent(2, 9007032, 7009003);
    RestartEvent();
});

// High Page Hood - Pincushion
$Event(9007054, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7006000) && CharacterHasSpEffect(10000, 8000010) && !CharacterHasSpEffect(10000, 109000));
           
    if (CharacterHasSpEffect(10000, 7006015)) {
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }        
    else if (CharacterHasSpEffect(10000, 7006014)) {
        ClearSpEffect(10000, 7006014);
        SetSpEffect(10000, 7006015);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }      
    else if (CharacterHasSpEffect(10000, 7006013)) {
        ClearSpEffect(10000, 7006013);
        SetSpEffect(10000, 7006014);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }   
    else if (CharacterHasSpEffect(10000, 7006012)) {
        ClearSpEffect(10000, 7006012);
        SetSpEffect(10000, 7006013);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }    
    else if (CharacterHasSpEffect(10000, 7006011)) {
        ClearSpEffect(10000, 7006011);
        SetSpEffect(10000, 7006012);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }    
    else if (CharacterHasSpEffect(10000, 7006010)) {
        ClearSpEffect(10000, 7006010);
        SetSpEffect(10000, 7006011);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006009)) {
        ClearSpEffect(10000, 7006009);
        SetSpEffect(10000, 7006010);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006008)) {
        ClearSpEffect(10000, 7006008);
        SetSpEffect(10000, 7006009);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006007)) {
        ClearSpEffect(10000, 7006007);
        SetSpEffect(10000, 7006008);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006006)) {
        ClearSpEffect(10000, 7006006);
        SetSpEffect(10000, 7006007);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006005)) {
        ClearSpEffect(10000, 7006005);
        SetSpEffect(10000, 7006006);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006004)) {
        ClearSpEffect(10000, 7006004);
        SetSpEffect(10000, 7006005);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006003)) {
        ClearSpEffect(10000, 7006003);
        SetSpEffect(10000, 7006004);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006002)) {
        ClearSpEffect(10000, 7006002);
        SetSpEffect(10000, 7006003);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7006001)) {
        ClearSpEffect(10000, 7006001);
        SetSpEffect(10000, 7006002);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
    else {
        SetSpEffect(10000, 7006001);
        InitializeEvent(0, 9007032, 8000010);
        WaitFor(!CharacterHasSpEffect(10000, 8000010));
        RestartEvent();
    }
});

// High Page Gloves - Nimble Skirmisher Resource Recovery
$Event(9007055, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 8000000) && CharacterHasSpEffect(10000, 6199020) && !CharacterHasSpEffect(10000, 109000));
    WaitFor(ElapsedSeconds(1) || !CharacterHasSpEffect(10000, 8000000));
    RestartIf(!CharacterHasSpEffect(10000, 8000000));
    
    SetSpEffect(10000, 7006200);
    RestartEvent();
});

// High Page Gloves - Nimble Skirmisher Sprint
$Event(9007056, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 8000000) && CharacterHasSpEffect(10000, 6199020) && !CharacterHasSpEffect(10000, 109000));
    WaitFor(ElapsedSeconds(3) || !CharacterHasSpEffect(10000, 8000000));
    RestartIf(!CharacterHasSpEffect(10000, 8000000));
    
    SetSpEffect(10000, 7006201);
    RestartEvent();
});

// Ragged Gloves - Survivalist's Recuperation
$Event(9007057, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 8000000) && CharacterHasSpEffect(10000, 6602200) && !CharacterHasSpEffect(10000, 109000));
    WaitFor(ElapsedSeconds(1) || !CharacterHasSpEffect(10000, 8000000));
    RestartIf(!CharacterHasSpEffect(10000, 8000000));
    
    SetSpEffect(10000, 7019200);
    RestartEvent();
});

// High Page Hood - Sniper's Lethality Cleanup
$Event(9007058, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7005002) && CharacterHasSpEffect(10000, 8000010));
    ClearSpEffect(10000, 7005002);
    ClearSpEffect(10000, 7005003);
    RestartEvent();
});

// All-Knowing Armor - Kinetic Enervation
$Event(9007059, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7017150) && (CharacterHasSpEffect(10000, 140) || CharacterHasSpEffect(10000, 100390)));
    
    SetSpEffect(10000, 7017125); // Apply Recovery
    
    if (CharacterHasSpEffect(10000, 7017170)) {
        WaitFor(!CharacterHasSpEffect(10000, 140) && !CharacterHasSpEffect(10000, 100390));
        RestartEvent();
    }
    else if (CharacterHasSpEffect(10000, 7017169)) {
        ClearSpEffect(10000, 7017169);
        SetSpEffect(10000, 7017170);
    }
    else if (CharacterHasSpEffect(10000, 7017168)) {
        ClearSpEffect(10000, 7017168);
        SetSpEffect(10000, 7017169);
    }
    else if (CharacterHasSpEffect(10000, 7017167)) {
        ClearSpEffect(10000, 7017167);
        SetSpEffect(10000, 7017168);
    }
    else if (CharacterHasSpEffect(10000, 7017166)) {
        ClearSpEffect(10000, 7017166);
        SetSpEffect(10000, 7017167);
    }
    else if (CharacterHasSpEffect(10000, 7017165)) {
        ClearSpEffect(10000, 7017165);
        SetSpEffect(10000, 7017166);
    }
    else if (CharacterHasSpEffect(10000, 7017164)) {
        ClearSpEffect(10000, 7017164);
        SetSpEffect(10000, 7017165);
    }
    else if (CharacterHasSpEffect(10000, 7017163)) {
        ClearSpEffect(10000, 7017163);
        SetSpEffect(10000, 7017164);
    }   
    else if (CharacterHasSpEffect(10000, 7017162)) {
        ClearSpEffect(10000, 7017162);
        SetSpEffect(10000, 7017163);
    }    
    else if (CharacterHasSpEffect(10000, 7017161)) {
        ClearSpEffect(10000, 7017161);
        SetSpEffect(10000, 7017162);
    }    
    else if (CharacterHasSpEffect(10000, 7017160)) {
        ClearSpEffect(10000, 7017160);
        SetSpEffect(10000, 7017161);
    }
    else if (CharacterHasSpEffect(10000, 7017159)) {
        ClearSpEffect(10000, 7017159);
        SetSpEffect(10000, 7017160);
    }
    else if (CharacterHasSpEffect(10000, 7017158)) {
        ClearSpEffect(10000, 7017158);
        SetSpEffect(10000, 7017159);
    }
    else if (CharacterHasSpEffect(10000, 7017157)) {
        ClearSpEffect(10000, 7017157);
        SetSpEffect(10000, 7017158);
    }
    else if (CharacterHasSpEffect(10000, 7017156)) {
        ClearSpEffect(10000, 7017156);
        SetSpEffect(10000, 7017157);
    }
    else if (CharacterHasSpEffect(10000, 7017155)) {
        ClearSpEffect(10000, 7017155);
        SetSpEffect(10000, 7017156);
    }
    else if (CharacterHasSpEffect(10000, 7017154)) {
        ClearSpEffect(10000, 7017154);
        SetSpEffect(10000, 7017155);
    }
    else if (CharacterHasSpEffect(10000, 7017153)) {
        ClearSpEffect(10000, 7017153);
        SetSpEffect(10000, 7017154);
    }
    else if (CharacterHasSpEffect(10000, 7017152)) {
        ClearSpEffect(10000, 7017152);
        SetSpEffect(10000, 7017153);
    }
    else if (CharacterHasSpEffect(10000, 7017151)) {
        ClearSpEffect(10000, 7017151);
        SetSpEffect(10000, 7017152);
    }
    else {
        SetSpEffect(10000, 7017151);
    }
    WaitFor(!CharacterHasSpEffect(10000, 140) && !CharacterHasSpEffect(10000, 100390) && ElapsedFrames(20));
    RestartEvent();
});

// Eccentric's Hood - Thrill of Battle Cleanup
$Event(9007060, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7016050));
    WaitFor(!CharacterHasSpEffect(10000, 7016050));
    InitializeEvent(0, 9007032, 7016051);
    RestartEvent();
});

// Drake Knight Helm - Master of All
$Event(9007061, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7015050) && (CharacterHasSpEffect(10000, 100625) || CharacterHasSpEffect(10000, 100615)));
    
    if (CharacterHasSpEffect(10000, 7015075)) {
        SetSpEffect(10000, 7015049);
    }
    else if (CharacterHasSpEffect(10000, 7015074)) {
        ClearSpEffect(10000, 7015074);
        SetSpEffect(10000, 7015048);
        SetSpEffect(10000, 7015075);
    }
    else if (CharacterHasSpEffect(10000, 7015073)) {
        ClearSpEffect(10000, 7015073);
        SetSpEffect(10000, 7015047);
        SetSpEffect(10000, 7015074);
    }
    else if (CharacterHasSpEffect(10000, 7015072)) {
        ClearSpEffect(10000, 7015072);
        SetSpEffect(10000, 7015046);
        SetSpEffect(10000, 7015073);
    }
    else if (CharacterHasSpEffect(10000, 7015071)) {
        ClearSpEffect(10000, 7015071);
        SetSpEffect(10000, 7015045);
        SetSpEffect(10000, 7015072);
    }
    else if (CharacterHasSpEffect(10000, 7015070)) {
        ClearSpEffect(10000, 7015070);
        SetSpEffect(10000, 7015044);
        SetSpEffect(10000, 7015071);
    }
    else if (CharacterHasSpEffect(10000, 7015069)) {
        ClearSpEffect(10000, 7015069);
        SetSpEffect(10000, 7015043);
        SetSpEffect(10000, 7015070);
    }
    else if (CharacterHasSpEffect(10000, 7015068)) {
        ClearSpEffect(10000, 7015068);
        SetSpEffect(10000, 7015042);
        SetSpEffect(10000, 7015069);
    }
    else if (CharacterHasSpEffect(10000, 7015067)) {
        ClearSpEffect(10000, 7015067);
        SetSpEffect(10000, 7015041);
        SetSpEffect(10000, 7015068);
    }
    else if (CharacterHasSpEffect(10000, 7015066)) {
        ClearSpEffect(10000, 7015066);
        SetSpEffect(10000, 7015040);
        SetSpEffect(10000, 7015067);
    }
    else if (CharacterHasSpEffect(10000, 7015065)) {
        ClearSpEffect(10000, 7015065);
        SetSpEffect(10000, 7015039);
        SetSpEffect(10000, 7015066);
    }
    else if (CharacterHasSpEffect(10000, 7015064)) {
        ClearSpEffect(10000, 7015064);
        SetSpEffect(10000, 7015038);
        SetSpEffect(10000, 7015065);
    }
    else if (CharacterHasSpEffect(10000, 7015063)) {
        ClearSpEffect(10000, 7015063);
        SetSpEffect(10000, 7015037);
        SetSpEffect(10000, 7015064);
    }   
    else if (CharacterHasSpEffect(10000, 7015062)) {
        ClearSpEffect(10000, 7015062);
        SetSpEffect(10000, 7015036);
        SetSpEffect(10000, 7015063);
    }    
    else if (CharacterHasSpEffect(10000, 7015061)) {
        ClearSpEffect(10000, 7015061);
        SetSpEffect(10000, 7015035);
        SetSpEffect(10000, 7015062);
    }    
    else if (CharacterHasSpEffect(10000, 7015060)) {
        ClearSpEffect(10000, 7015060);
        SetSpEffect(10000, 7015034);
        SetSpEffect(10000, 7015061);
    }
    else if (CharacterHasSpEffect(10000, 7015059)) {
        ClearSpEffect(10000, 7015059);
        SetSpEffect(10000, 7015033);
        SetSpEffect(10000, 7015060);
    }
    else if (CharacterHasSpEffect(10000, 7015058)) {
        ClearSpEffect(10000, 7015058);
        SetSpEffect(10000, 7015032);
        SetSpEffect(10000, 7015059);
    }
    else if (CharacterHasSpEffect(10000, 7015057)) {
        ClearSpEffect(10000, 7015057);
        SetSpEffect(10000, 7015031);
        SetSpEffect(10000, 7015058);
    }
    else if (CharacterHasSpEffect(10000, 7015056)) {
        ClearSpEffect(10000, 7015056);
        SetSpEffect(10000, 7015030);
        SetSpEffect(10000, 7015057);
    }
    else if (CharacterHasSpEffect(10000, 7015055)) {
        ClearSpEffect(10000, 7015055);
        SetSpEffect(10000, 7015029);
        SetSpEffect(10000, 7015056);
    }
    else if (CharacterHasSpEffect(10000, 7015054)) {
        ClearSpEffect(10000, 7015054);
        SetSpEffect(10000, 7015028);
        SetSpEffect(10000, 7015055);
    }
    else if (CharacterHasSpEffect(10000, 7015053)) {
        ClearSpEffect(10000, 7015053);
        SetSpEffect(10000, 7015028);
        SetSpEffect(10000, 7015054);
    }
    else if (CharacterHasSpEffect(10000, 7015052)) {
        ClearSpEffect(10000, 7015052);
        SetSpEffect(10000, 7015027);
        SetSpEffect(10000, 7015053);
    }
    else if (CharacterHasSpEffect(10000, 7015051)) {
        ClearSpEffect(10000, 7015051);
        SetSpEffect(10000, 7015026);
        SetSpEffect(10000, 7015052);
    }
    else {
        SetSpEffect(10000, 7015025);
        SetSpEffect(10000, 7015051);
    }
    WaitFor(!CharacterHasSpEffect(10000, 100625) && !CharacterHasSpEffect(10000, 100615));
    RestartEvent();
});

// Drake Knight Armor - Drake's Dynamism
$Event(9007062, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 6006010) && CharacterHasSpEffect(10000, 8000020));
    for (let i = 0; i < crimsonFlaskSpEffects.length; i++) {
        trigger |= CharacterHasSpEffect(10000, crimsonFlaskSpEffects[i]);
    }
    WaitFor(trigger || !CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    RestartIf(!trigger.Passed);
    
    SetSpEffect(10000, 7015150); // 1st stack
    WaitFor(CharacterHasSpEffect(10000, 100625) || CharacterHasSpEffect(10000, 100615) || !CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    WaitFixedTimeFrames(22);
    ClearSpEffect(10000, 7015150);
    RestartIf(!CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    
    SetSpEffect(10000, 7015151); // 1st stack
    WaitFor(CharacterHasSpEffect(10000, 100625) || CharacterHasSpEffect(10000, 100615) || !CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    WaitFixedTimeFrames(22);
    ClearSpEffect(10000, 7015151);
    RestartIf(!CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    
    SetSpEffect(10000, 7015152); // 1st stack
    WaitFor(CharacterHasSpEffect(10000, 100625) || CharacterHasSpEffect(10000, 100615) || !CharacterHasSpEffect(10000, 6006010) || !CharacterHasSpEffect(10000, 8000020));
    WaitFixedTimeFrames(22);
    ClearSpEffect(10000, 7015152);
        
    RestartEvent();
});

// Drake Knight Greaves - Dimensional Shift ON
$Event(9007063, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7015350));
    EnableCharacterInvincibility(10000);
    WaitFor(!CharacterHasSpEffect(10000, 7015350));
    RestartEvent();
});

// Drake Knight Greaves - Dimensional Shift OFF
$Event(9007064, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7015350));
    WaitFor(!CharacterHasSpEffect(10000, 7015350) || CharacterHasSpEffect(10000, 100625) || CharacterHasSpEffect(10000, 100615));
    DisableCharacterInvincibility(10000);
    ClearSpEffect(10000, 7015350);
    RestartEvent();
});

// Drake Knight Gauntlets - Rhythm of War | Melee
$Event(9007065, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 6006020) && CharacterHasSpEffect(10000, 100625) && CharacterHasSpEffect(10000, 8000020));
    ClearSpEffect(10000, 100625);
    
    SetSpEffect(10000, 7015260); // Spell DMG buff
    RestartIf(!CharacterHasSpEffect(10000, 6006020) || !CharacterHasSpEffect(10000, 8000020) || !CharacterHasSpEffect(10000, 7015270)); // Give recovery if has melee buff
    SetSpEffect(10000, 7015271); // FP Recovery
    
    RestartEvent();
});

// Drake Knight Gauntlets - Rhythm of War | Magic
$Event(9007066, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 6006020) && CharacterHasSpEffect(10000, 100615) && CharacterHasSpEffect(10000, 8000020));
    ClearSpEffect(10000, 100615);
    
    SetSpEffect(10000, 7015270); // Melee SMG buff
    RestartIf(!CharacterHasSpEffect(10000, 6006020) || !CharacterHasSpEffect(10000, 8000020) || !CharacterHasSpEffect(10000, 7015260)); // Give recovery if has magic buff
    SetSpEffect(10000, 7015261); // HP Recovery
    
    RestartEvent();
});

// Weapon Attack Jump Fixer
$Event(9007067, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 98));
    SetSpEffect(10000, 100625);
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Verdegris Helmet - Decay and Rebirth
$Event(9007068, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7021000) && CharacterHasSpEffect(10000, 8000100));
    GotoIf(L0, CharacterHasSpEffect(10000, 7021010));
    
    if (CharacterHasSpEffect(10000, 7021009)) {
        ClearSpEffect(10000, 7021009);
        SetSpEffect(10000, 7021010);
    }
    else if (CharacterHasSpEffect(10000, 7021008)) {
        ClearSpEffect(10000, 7021008);
        SetSpEffect(10000, 7021009);
    }
    else if (CharacterHasSpEffect(10000, 7021007)) {
        ClearSpEffect(10000, 7021007);
        SetSpEffect(10000, 7021008);
    }
    else if (CharacterHasSpEffect(10000, 7021006)) {
        ClearSpEffect(10000, 7021006);
        SetSpEffect(10000, 7021007);
    }
    else if (CharacterHasSpEffect(10000, 7021005)) {
        ClearSpEffect(10000, 7021005);
        SetSpEffect(10000, 7021006);
    }
    else if (CharacterHasSpEffect(10000, 7021004)) {
        ClearSpEffect(10000, 7021004);
        SetSpEffect(10000, 7021005);
    }
    else if (CharacterHasSpEffect(10000, 7021003)) {
        ClearSpEffect(10000, 7021003);
        SetSpEffect(10000, 7021004);
    }
    else if (CharacterHasSpEffect(10000, 7021002)) {
        ClearSpEffect(10000, 7021002);
        SetSpEffect(10000, 7021003);
    }
    else if (CharacterHasSpEffect(10000, 7021001)) {
        ClearSpEffect(10000, 7021001);
        SetSpEffect(10000, 7021002);
    }
    else {
        SetSpEffect(10000, 7021001);
    }

L0:   
    InitializeEvent(0, 9007032, 8000100);
    WaitFor(!CharacterHasSpEffect(10000, 8000100));
    RestartEvent();
});

// Catapillar Mask - Fueled by Vengeance
$Event(9007069, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7024000) && (CharacterHasSpEffect(10000, 100390) || CharacterHasSpEffect(10000, 140)));
    GotoIf(L0, CharacterHasSpEffect(10000, 7024003));
    
    if (CharacterHasSpEffect(10000, 7024002)) {
        ClearSpEffect(10000, 7024002);
        SetSpEffect(10000, 7024003);
    }
    else if (CharacterHasSpEffect(10000, 7024001)) {
        ClearSpEffect(10000, 7024001);
        SetSpEffect(10000, 7024002);
    }
    else {
        SetSpEffect(10000, 7024001);
    }
    
L0:   
    WaitFor(!CharacterHasSpEffect(10000, 100390) && !CharacterHasSpEffect(10000, 140));
    RestartEvent();
});

// Braided Cord Robe - Vicious Tumbler
$Event(9007070, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7024100) && CharacterHasSpEffect(10000, 100390));
    SetSpEffect(10000, 7024101);
    WaitFor(!CharacterHasSpEffect(10000, 100390));
    RestartEvent();
});

// Ragged Hat - Masterful Improvisation
$Event(9007071, Restart, function() {
    DisableNetworkSync();
    trigger |= CharacterHasSpEffect(10000, 8000030);
    for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
        trigger |= CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
    }
    WaitFor(CharacterHasSpEffect(10000, 7019000) && trigger);
    GotoIf(L0, CharacterHasSpEffect(10000, 7019015));
    
    if (CharacterHasSpEffect(10000, 7019014)) {
        ClearSpEffect(10000, 7019014);
        SetSpEffect(10000, 7019015);
    }
    else if (CharacterHasSpEffect(10000, 7019013)) {
        ClearSpEffect(10000, 7019013);
        SetSpEffect(10000, 7019014);
    }
    else if (CharacterHasSpEffect(10000, 7019012)) {
        ClearSpEffect(10000, 7019012);
        SetSpEffect(10000, 7019013);
    }
    else if (CharacterHasSpEffect(10000, 7019011)) {
        ClearSpEffect(10000, 7019011);
        SetSpEffect(10000, 7019012);
    }
    else if (CharacterHasSpEffect(10000, 7019010)) {
        ClearSpEffect(10000, 7019010);
        SetSpEffect(10000, 7019011);
    }
    else if (CharacterHasSpEffect(10000, 7019009)) {
        ClearSpEffect(10000, 7019009);
        SetSpEffect(10000, 7019010);
    }
    else if (CharacterHasSpEffect(10000, 7019009)) {
        ClearSpEffect(10000, 7019009);
        SetSpEffect(10000, 7019010);
    }
    else if (CharacterHasSpEffect(10000, 7019008)) {
        ClearSpEffect(10000, 7019008);
        SetSpEffect(10000, 7019009);
    }
    else if (CharacterHasSpEffect(10000, 7019007)) {
        ClearSpEffect(10000, 7019007);
        SetSpEffect(10000, 7019008);
    }
    else if (CharacterHasSpEffect(10000, 7019006)) {
        ClearSpEffect(10000, 7019006);
        SetSpEffect(10000, 7019007);
    }
    else if (CharacterHasSpEffect(10000, 7019005)) {
        ClearSpEffect(10000, 7019005);
        SetSpEffect(10000, 7019006);
    }
    else if (CharacterHasSpEffect(10000, 7019004)) {
        ClearSpEffect(10000, 7019004);
        SetSpEffect(10000, 7019005);
    }
    else if (CharacterHasSpEffect(10000, 7019003)) {
        ClearSpEffect(10000, 7019003);
        SetSpEffect(10000, 7019004);
    }
    else if (CharacterHasSpEffect(10000, 7019002)) {
        ClearSpEffect(10000, 7019002);
        SetSpEffect(10000, 7019003);
    }
    else if (CharacterHasSpEffect(10000, 7019001)) {
        ClearSpEffect(10000, 7019001);
        SetSpEffect(10000, 7019002);
    }
    else {
        SetSpEffect(10000, 7019001);
    }

L0:
    InitializeEvent(0, 9007032, 8000030);
    for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
        InitializeEvent(i + 1, 9007032, throwingKnifesThrowSpEffects[i]);
    }
    for (let i = 0; i < throwingKnifesThrowSpEffects.length; i++) {
        cleanup &= !CharacterHasSpEffect(10000, throwingKnifesThrowSpEffects[i]);
    }
    WaitFor(!CharacterHasSpEffect(10000, 8000030) && cleanup);
    RestartEvent();
});

// Dancer's Bracers - Dancer's Grace Stack 1
$Event(9007072, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7022200));

    if (CharacterHasSpEffect(10000, 7022215)) {
        WaitFor(CharacterHasSpEffect(10000, 7022214));
    }
    
    if (CharacterHasSpEffect(10000, 7022214)) { // Apply first stack if second stack expires
        WaitFor(!CharacterHasSpEffect(10000, 7022214));
        WaitFixedTimeFrames(1);
        RestartIf(CharacterHasSpEffect(10000, 7022215));
        SetSpEffect(10000, 7022213);
        RestartEvent();
    }
    
    if (CharacterHasSpEffect(10000, 7022213)) { // Keep refeshing first stack on attack
        WaitFor(CharacterHasSpEffect(10000, 9000031));
        WaitFixedTimeFrames(1);
        RestartIf(CharacterHasSpEffect(10000, 7022214) || !CharacterHasSpEffect(10000, 7022213));
        SetSpEffect(10000, 7022213);
        WaitFor(!CharacterHasSpEffect(10000, 9000031));
        RestartEvent();
    }    
    
    WaitFor(CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    
    SetSpEffect(10000, 7022213); // Apply First Stack
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    RestartEvent();
});

// Dancer's Bracers - Dancer's Grace Stack 2
$Event(9007073, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7022200));
    
    if (CharacterHasSpEffect(10000, 7022215)) { // Apply second stack if third stack expires
        WaitFor(!CharacterHasSpEffect(10000, 7022215));
        SetSpEffect(10000, 7022214);
        RestartEvent();
    }
    
    if (CharacterHasSpEffect(10000, 7022214)) { // Keep refeshing second stack on attack
        WaitFor(CharacterHasSpEffect(10000, 9000031));
        WaitFixedTimeFrames(1);
        RestartIf(CharacterHasSpEffect(10000, 7022215) || !CharacterHasSpEffect(10000, 7022214));
        SetSpEffect(10000, 7022214);
        WaitFor(!CharacterHasSpEffect(10000, 9000031));
        RestartEvent();
    }
    
    // Handle Application of second stack whilst first stack is active
    WaitFor(CharacterHasSpEffect(10000, 7022213) && !CharacterHasSpEffect(10000, 9000031));
    // 1/4
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 2/4
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 3/4
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 4/4
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    
    SetSpEffect(10000, 7022214); // Apply Second Stack
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    RestartEvent();
});

// Dancer's Bracers - Dancer's Grace Stack 3
$Event(9007074, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7022200));
    
    if (CharacterHasSpEffect(10000, 7022215)) { // Clean up third stack if no attacks are hit
        WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
        RestartIf(CharacterHasSpEffect(10000, 9000031))
        ClearSpEffect(10000, 7022215);
        RestartEvent();
    }
        
    // Handle Application of third stack whilst second stack is active
    WaitFor(CharacterHasSpEffect(10000, 7022214) && !CharacterHasSpEffect(10000, 9000031));
    // 1/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 2/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 3/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 4/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 5/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    // 6/6
    WaitFor(ElapsedSeconds(4) || CharacterHasSpEffect(10000, 9000031));
    RestartIf(!CharacterHasSpEffect(10000, 9000031));
    
    SetSpEffect(10000, 7022215); // Apply Third Stack
    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    RestartEvent();
});
 
// Dancer's Dress - Heal Handler
$Event(9007077, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 7022100) && CharacterHasSpEffect(10000, 9000031));
    
    if (CharacterHasSpEffect(10000, 7022215))
        SetSpEffect(10000, 7022103);
    else if (CharacterHasSpEffect(10000, 7022214))
        SetSpEffect(10000, 7022102);
    else if (CharacterHasSpEffect(10000, 7022213))
        SetSpEffect(10000, 7022101);

    WaitFor(!CharacterHasSpEffect(10000, 9000031));
    RestartEvent();
});

// ---------------------------------------

// Wonderous Physic Restoration Sound
$Event(9007100, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 196));
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 220, 303130); // Sound
    WaitFor(!CharacterHasSpEffect(10000, 196));
    RestartEvent();
});

// Midra's Gaze Transmog ON handler
$Event(9007101, Restart, function() {
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(10000, 6534000) && 
        (CharacterHasSpEffect(10000, 169553400)
        || !CharacterHasStateInfo(10000, 700) && PlayerHasArmorEquipped(ArmorType.Head, 5340000, -1)));
    SetSpEffect(10000, 6534000);
    RestartEvent();
});

// Midra's Gaze Transmog OFF handler
$Event(9007102, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 6534000) && 
        ((!CharacterHasSpEffect(10000, 169553400) && !PlayerHasArmorEquipped(ArmorType.Head, 5340000, -1))
        || (PlayerHasArmorEquipped(ArmorType.Head, 5340000, -1) && CharacterHasStateInfo(10000, 700))));
    ClearSpEffect(10000, 6534000);
    RestartEvent();
});

$Event(9007103, Restart, function() {
    DisableNetworkSync();
    WaitFor(!EventFlag(6951));
    DisplayFullScreenMessage(4019);
    RestartEvent();
});

// Reveal Honse Menu
$Event(9007104, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(63000))
    SetEventFlagID(63200, ON);
    for (let i = 0; i < 4; i++)
        hasHorseItem |= PlayerHasItem(ItemType.Goods, 2500 + i);
    WaitFor(hasHorseItem);
    SetEventFlagID(63000, ON);
    EndEvent();
});

// Honse Unlock Manager
$Event(9007105, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    EndIf(EventFlag(X0_4));
    WaitFor(PlayerHasItem(ItemType.Goods, X4_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

// Honse Selector Flag Manager
$Event(9007106, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFor(ElapsedFrames(2) && !EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    
    BatchSetEventFlags(63200, 63299, OFF);
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(1099002202, ON);
    WaitFor(!EventFlag(1099002202));
    
    WaitFixedTimeFrames(3);
    DisableTextOnLoadingScreen();
    TriggerAreaReload(true);
    EndEvent();
});

// Honse SpEffect OFF - Selector EventFlag, spEffect, Target
$Event(9007107, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X0_4) && CharacterRidingMount(10000) && !CharacterHasSpEffect(X8_4, X4_4));
    WaitFor((!EventFlag(X0_4) || !CharacterRidingMount(10000)) && CharacterHasSpEffect(X8_4, X4_4));
    
    ClearSpEffect(X8_4, X4_4);
    RestartEvent();
});

// Honse SpEffect ON - Selector EventFlag, SpEffect, Target
$Event(9007108, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X0_4) && CharacterRidingMount(10000) && !CharacterHasSpEffect(X8_4, X4_4));
    SetSpEffect(X8_4, X4_4);
    RestartEvent();
});

// Honse: map reload on startup
$Event(9007109, Restart, function() {
    DisableNetworkSync();
    WaitFixedTimeFrames(2);
    EndIf(InArea(10000, 10012502));
    WaitFor(EventFlag(1099002203));
    
    SetEventFlagID(1099002203, OFF);
    WaitFixedTimeFrames(2);

    DisableTextOnLoadingScreen();
    TriggerAreaReload(true);
});

// Honse Talisman Share OFF - Talisman SpEffect, Horse SpEffect, Excemption Horse Selector Flag (6000 to ignore check)
$Event(9007110, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor((!CharacterHasSpEffect(10000, X0_4) || !CharacterRidingMount(10000)) && CharacterHasSpEffect(40000, X4_4) && !EventFlag(X8_4));
    ClearSpEffect(40000, X4_4);
    RestartEvent();
});

// Honse Talisman Share ON - Talisman SpEffect, Horse SpEffect, Excemption Horse Selector Flag (6000 to ignore check)
$Event(9007111, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, X0_4) && CharacterRidingMount(10000) && !CharacterHasSpEffect(40000, X4_4) && !EventFlag(X8_4));
    SetSpEffect(40000, X4_4);
    RestartEvent();
});

// Mass Consume Runes - eventFlag, Goods, spEffect
$Event(9007120, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X0_4));

    if (!PlayerHasItem(ItemType.Goods, X4_4)) {
        WaitFor(!EventFlag(X0_4));
        RestartEvent();
    }
    
    SetSpEffect(10000, X8_4);
    RemoveItemFromPlayer(ItemType.Goods, X4_4, 1);
    RestartEvent();
});

// Outdated Save Detector
$Event(9007130, Restart, function() {
    DisableNetworkSync(); // Seamless shenanigans 1
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld()); // Seamless 2 
    EndIf(!HasMultiplayerState(MultiplayerState.Singleplayer)); // Seamless 3
    EndIf(!EventFlag(6951)); // Dont conflict with no-dlc msg

    EndIf(EventFlag(10010600)); // Show Message only once
    SetEventFlagID(10010600, ON); // 2.1
    
    EndIf(InArea(10000, 10012680) && !EventFlag(60210)); // End if in Chapel of the Anticiaption start room and didnt pickup finger yet
    if (AnyBatchEventFlags(60900, 60926)) // Outdated Save
        DisplayFullScreenMessage(4021);
    else // Vanilla Save
        DisplayFullScreenMessage(4020);
});

// Caimar Headpiece Secret
$Event(9007140, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 6300000) && CharacterHasSpEffect(10000, 100750));
    
    WaitFixedTimeFrames(8);
    PlaySE(10000, SoundType.CharacterMotion, 407008100);
    WaitFor(!CharacterHasSpEffect(10000, 100750));
});
