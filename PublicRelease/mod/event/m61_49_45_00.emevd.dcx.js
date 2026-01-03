// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(76964, 2049451950, 0, 0, 0, 0); // New Bonfire
    InitializeCommonEvent(0, 90005870, 2049450800, 905820601, 16);
    InitializeCommonEvent(0, 90005860, 2049450800, 0, 2049450800, 0, 30930, 0);
    InitializeCommonEvent(0, 90005251, 2049450300, 1108082688, 0, -1);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2049450850, 2049450851, 904810702, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2049450850, 30730, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2049450850, 2049450851, 2049450851); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2049450850, 2049450851, 2049450852); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2049450925, 2049451925, 2049450850);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2049450850, 76964, 2049450950, 2049451950, 1084227584);
    // Flag inverters for stake of marika
    InitializeCommonEvent(0, 98005303, 2049450851, 2049450853);
    InitializeCommonEvent(0, 98005304, 2049450851, 2049450853);
});
