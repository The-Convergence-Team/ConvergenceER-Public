// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1252520800, 1053520000, 1053520950, 1053521950, 1084227584);
    InitializeEvent(0, 1053521000, 0);
    InitializeEvent(0, 1053521001, 0);
    InitializeEvent(0, 1053521005, 0);
});

$Event(1053521000, Default, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1053527700));
    EnableAsset(1053521000);
    CreateAssetfollowingSFX(1053521001, 90, 803430);
    CreateAssetfollowingSFX(1053521003, 90, 402002);
    ForceAnimationPlayback(1053521000, 0, false, false, false);
    if (EventFlag(1053527700)) {
        DisableAsset(1053521000);
        DeleteAssetfollowingSFX(1053521001, true);
        DeleteAssetfollowingSFX(1053521003, true);
        EndEvent();
   }
    EnableObjAct(1053521000, 99340);
});

$Event(1053521001, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1053527700));
    if ((!PlayerHasItemIncludingBBox(ItemType.Weapon, 3120000)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120001)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120002)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120003)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120004)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120005)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120006)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120007)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120008)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120009)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120010))) {
    WaitFor(ActionButtonInArea(9532, 1053521001));
    DeleteAssetfollowingSFX(1053521001, true);
    DeleteAssetfollowingSFX(1053521003, true);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 1053521002, -1);
    ForceAnimationPlayback(10000, 60530, false, false, false);
    ForceAnimationPlayback(1053521000, 1, false, false, false);
    WaitFixedTimeSeconds(2.8);
    DisableAsset(1053521000);
    WaitFixedTimeSeconds(0.1);
    AwardItemLot(1053520700);
    }
    EndEvent();
});

$Event(1053521005, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld());
    if ((!PlayerHasItemIncludingBBox(ItemType.Weapon, 3120000)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120001)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120002)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120003)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120004)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120005)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120006)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120007)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120008)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120009)
        || !PlayerHasItemIncludingBBox(ItemType.Weapon, 3120010))) {
        SetEventFlagID(1053521011, ON);
    }
});
   
$Event(1053521006, Restart, function() {
    EndIf(!EventFlag(1053527700));
    DisableAsset(1053521000);
    DeleteAssetfollowingSFX(1053521001, true);
    DeleteAssetfollowingSFX(1053521003, true);
    RestartEvent();
});
