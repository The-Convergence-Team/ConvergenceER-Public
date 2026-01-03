// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76940, 2047471950, 0, 0, 0, 0);
    //RegisterBonfire(76965, 2047471951, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005102, 76945, 76940, 2047471980, 77900, 2, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeEvent(0, 2047472200, 2047475200, 2047472200);
    InitializeEvent(0, 2047472201, 2047475201);
    InitializeEvent(0, 2047472202, 2047475202);
    InitializeEvent(0, 2047472203, 2047475203);
    InitializeCommonEvent(0, 90005201, 2047470200, 30006, 20006, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005501, 2047470510, 2047470511, 1, 2047471510, 2047471511, 2047471512, 2047470512);
    InitializeEvent(0, 2047472510, 0);
    InitializeCommonEvent(0, 900005610, 2047472500, 100, 800, 0);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2047470800, 2047470801, 904810705, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2047470800, 30760, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2047470800, 2047470801, 2047470801); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2047470800, 2047470801, 2047470802); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2047470925, 2047471925, 2047470800);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2047470800, 76965, 2047470951, 2047471951, 1084227584);
    // Miqi fog gate
    InitializeEvent(0, 2047471500, 0);
    //Radahn & Mogh check region
    InitializeEvent(0, 2047472490, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 2047470050, 0);
});

$Event(2047471500, Restart, function() {
    if (EventFlag(2047470500)) {
        DisableAsset(2047471500);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2047472550)) {
            DeleteAssetfollowingSFX(2047471500, true);
            CreateAssetfollowingSFX(2047471500, 101, 1550);
            SetNetworkconnectedEventFlagID(2047472550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(209504, 2047471500);
        flag = EventFlag(4927);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(2020004, PromptType.YESNO, NumberofOptions.NoButtons, 2047471500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(2047470500, ON);
        DeleteAssetfollowingSFX(2047471500, true);
        DisableAsset(2047471500);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(2047471500, true);
    CreateAssetfollowingSFX(2047471500, 101, 1550);
    EndEvent();
});

$Event(2047472490, Restart, function() {
    EndIf(EventFlag(4927));
    EndIf(!EventFlag(9112) || !EventFlag(9130)); // 9112 Mogh | 9130 Radahn
    WaitFor(InArea(10000, 2047472490) && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(4927, ON);
    SetSpEffect(20000, 20004230);
});

$Event(2047470050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(2047470510, ON);
});

$Event(2047472200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 90020);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(2047472200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 90020);
    SetSpEffect(X0_4, 5650);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(2047472200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(2047472201, Restart, function(X0_4) {
    SetSpEffect(X0_4, 4404);
    EndEvent();
});

$Event(2047472202, Restart, function(X0_4) {
    SetSpEffect(X0_4, 4405);
});

$Event(2047472203, Restart, function(X0_4) {
    SetSpEffect(X0_4, 4401);
});

$Event(2047472510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2047470510, 2047470511, 1, 2047471510, 2047471511, 2047473511, 2047471512, 2047473512, 2047472511, 2047472512, 2047470512, 2047470513, 0);
});
