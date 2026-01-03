// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005646, 30040800, 30042840, 30042841, 30041840, 30042840, 1054);
    RegisterBonfire(300400, 30041950, 0, 0, 0, 5);
    InitializeEvent(0, 30042800, 0);
    InitializeEvent(0, 30042810, 0);
    InitializeEvent(0, 30042849, 0);
    InitializeEvent(0, 30042811, 0);
    InitializeCommonEvent(0, 90005650, 30040540, 30041540, 30041541, 30043541, 27115);
    InitializeCommonEvent(0, 90005651, 30040540, 30041540);
    InitializeEvent(0, 30042500, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 30040200, 30001, 20001, 30042200, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040201, 30002, 20002, 30042201, 1065353216, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040202, 30010, 20010, 30042202, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040205, 30010, 20010, 30042205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040206, 30010, 20010, 30042205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30040207, 30042207, 1065353216, 0, 3004);
    InitializeCommonEvent(0, 90005200, 30040210, 30010, 20010, 30042210, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040211, 30010, 20010, 30042210, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30040212, 30003, 20003, 30042212, 0, 0, 0, 0, 0);
});

$Event(30040050, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(30042500, Default, function() {
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001070, 30042601, 30042602, 30042603);
    } else if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001060, 30042601, 30042602, 30042603);
    } else if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001050, 30042601, 30042602, 30042603);
    } else if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001040, 30042601, 30042602, 30042603);
    } else if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001030, 30042601, 30042602, 30042603);
    } else if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001020, 30042601, 30042602, 30042603);
    } else if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001010, 30042601, 30042602, 30042603);
    } else {
        InitializeCommonEvent(0, 90005660, 30040600, 30041600, 30042600, 801001000, 30042601, 30042602, 30042603);
    }
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001070, 30042606, 30042607, 30042608);
    } else if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001060, 30042606, 30042607, 30042608);
    } else if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001050, 30042606, 30042607, 30042608);
    } else if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001040, 30042606, 30042607, 30042608);
    } else if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001030, 30042606, 30042607, 30042608);
    } else if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001020, 30042606, 30042607, 30042608);
    } else if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001010, 30042606, 30042607, 30042608);
    } else {
        InitializeCommonEvent(0, 90005660, 30040605, 30041605, 30042605, 801001000, 30042606, 30042607, 30042608);
    }
});

$Event(30042650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(30, 4, 0, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(30042800, Restart, function() {
    EndIf(EventFlag(30040800));
    WaitFor(CharacterHPValue(30040800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30040800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30040800));
    HandleBossDefeatAndDisplayBanner(30040800, TextBannerType.EnemyFelled);
    SetEventFlagID(30040800, ON);
    SetEventFlagID(9204, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61204, ON);
    }
});

$Event(30042810, Restart, function() {
    if (EventFlag(30040800)) {
        DisableCharacter(30040800);
        DisableCharacterCollision(30040800);
        ForceCharacterDeath(30040800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30040800);
    EnableCharacterInvincibility(30040800);
    WaitFor(EventFlag(30042805) && InArea(10000, 30042800));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(30040801, ON);
    }
L2:
    EnableCharacterAI(30040800);
    DisableCharacterInvincibility(30040800);
    SetNetworkUpdateRate(30040800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30040800, 0, 903400300);
});

$Event(30042811, Restart, function() {
    EndIf(EventFlag(30040800));
    WaitFor(HPRatio(30040800) <= 0.6);
    SetEventFlagID(30042802, ON);
});

$Event(30042849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30040800, 30041800, 30042800, 30042805, 30045800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30040800, 30041800, 30042800, 30042805, 30042806, 10000);
    InitializeCommonEvent(0, 9005811, 30040800, 30041800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30040800, 930000, 30042805, 30042806, 0, 30042802, 0, 0);
});

$Event(30042900, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    SetEventFlagID(700690, ON);
});
