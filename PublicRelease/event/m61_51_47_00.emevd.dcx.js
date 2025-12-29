// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2051470000, 2051471950, 0, 0, 0, 0);
    //RegisterBonfire(76963, 2051471951, 0, 0, 0, 0); // New Bonfire
    InitializeCommonEvent(0, 90005638, 2051470600, 2051471600, 2051471601);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2051470800, 2051470801, 904810703, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2051470800, 30740, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2051470800, 2051470801, 2051470801); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2051470800, 2051470801, 2051470802); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2051470925, 2051471925, 2051470800);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2051470800, 76963, 2051470951, 2051471951, 1084227584);
    //Miqi Fog Gate
    InitializeEvent(0, 2051471500, 0);
    //Radahn & Mogh check region
    InitializeEvent(0, 2051472490, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 2051470200, 30003, 20003, 2051472200, 1073741824, 0, 0, 0, 0);
});

$Event(2051471500, Restart, function() {
    if (EventFlag(2051470500)) {
        DisableAsset(2051471500);
        DisableAsset(2051471501);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2051472550)) {
            DeleteAssetfollowingSFX(2051471500, true);
            CreateAssetfollowingSFX(2051471500, 101, 1550);
            DeleteAssetfollowingSFX(2051471501, true);
            CreateAssetfollowingSFX(2051471501, 101, 1550);
            SetNetworkconnectedEventFlagID(2051472550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(209504, 2051471500);
        flag = EventFlag(4927);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(2020004, PromptType.YESNO, NumberofOptions.NoButtons, 2051471500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(2051470500, ON);
        DeleteAssetfollowingSFX(2051471500, true);
        DisableAsset(2051471500);
        DeleteAssetfollowingSFX(2051471501, true);
        DisableAsset(2051471501);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(2051471500, true);
    CreateAssetfollowingSFX(2051471500, 101, 1550);
    DeleteAssetfollowingSFX(2051471501, true);
    CreateAssetfollowingSFX(2051471501, 101, 1550);
    EndEvent();
});

$Event(2051472490, Restart, function() {
    EndIf(EventFlag(4927));
    EndIf(!EventFlag(9112) || !EventFlag(9130)); // 9112 Mogh | 9130 Radahn
    WaitFor(InArea(10000, 2051472490) && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(4927, ON);
    SetSpEffect(20000, 20004230);
});
