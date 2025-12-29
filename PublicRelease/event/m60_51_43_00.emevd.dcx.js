// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1051430000, 1051431950, 0, 0, 0, 5);
    RegisterBonfire(1051430001, 1051431951, 0, 0, 0, 5);
    //InitializeCommonEvent(0, 90005870, 1051430800, 904770600, 16);
    //InitializeCommonEvent(0, 90005860, 1051430800, 0, 1051430800, 0, 30425, 0);
    //InitializeEvent(0, 1051432209, 0);
    //InitializeEvent(0, 1051432200, 1051430800, 1113325568, 0, -1);
    InitializeEvent(0, 1051430700, 1051430700);
    InitializeCommonEvent(0, 90005703, 1051430700, 3641, 3642, 1051439201, 1051439212, 3640, 3643, -1);
    InitializeCommonEvent(0, 90005704, 1051430700, 1051439212, 3640, 1051439201, 3);
    InitializeCommonEvent(0, 90005702, 1051430700, 3643, 3640, 3643);
    InitializeEvent(0, 1051430702, 1051430700, 1063675494);
    InitializeEvent(0, 1051430703, 1051430700);
    //InitializeCommonEvent(0, 90005605, 1051431660, 13, 0, 11000000, 11002692, 13002500, 11002694, 0, 30040, 0, 0);
    InitializeEvent(0, 1051433709, 0);
    //Boss Battle setup Black Blade Kindred
    //InitializeEvent(0, 1051432800, 0);
    //InitializeEvent(0, 1051432810, 0);
    InitializeEvent(0, 1051432849, 0);
    InitializeCommonEvent(0, 90005870, 1051430800, 904770600, 16);
    InitializeCommonEvent(0, 90005860, 1051430800, 0, 1051430800, 0, 30425, 0);
    InitializeCommonEvent(0, 90005251, 1051430800, 1101004800, 0, 0);
});

$Event(1051432200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    areaFlagChrSp = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1)
        && !EventFlag(1051430210)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaFlagChrSp);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    if (areaFlagChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false, Equal, 1);
        }
    }
L1:
    SetCharacterAIState(X0_4, Enabled);
});

$Event(1051432209, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EntityInRadiusOfEntity(10000, 1051430800, 160, 1));
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1051430210, OFF);
});

$Event(1051430700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetNetworkSyncState(Disabled);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3640)) {
            SetEventFlag(TargetEventFlagType.EventFlag, 1051439202, OFF);
            SetEventFlag(TargetEventFlagType.EventFlag, 1051439212, OFF);
        }
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && EventValue(1051439230, 5) >= 1
            && (EventFlag(3645) || EventFlag(3647))) {
            BatchSetEventFlags(1051439240, 1051439249, OFF);
            RandomlySetEventFlagInRange(1051439240, 1051439249, ON);
            GotoIf(S0, EventFlag(1051439220));
            GotoIf(S1, !EventFlag(1051439240));
S0:
            SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1051432703, ON);
        }
S1:
L4:
        NoOp();
    }
L10:
    GotoIf(L5, EventFlag(3645));
    GotoIf(L6, EventFlag(3646));
    GotoIf(L7, EventFlag(3647));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(EventFlag(3645) || EventFlag(3646) || EventFlag(3647));
    RestartEvent();
L5:
L7:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    GotoIf(S2, !EventFlag(1051432704));
    ForceAnimationPlayback(X0_4, 930016, false, false, false, Equal, 1);
    Goto(L20);
S2:
    GotoIf(S3, !EventFlag(1051432703));
    ForceAnimationPlayback(X0_4, 930015, false, false, false, Equal, 1);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1051432700, 900, X0_4);
    Goto(L20);
S3:
    ForceAnimationPlayback(X0_4, 930010, false, false, false, Equal, 1);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 20034, false, false, false, Equal, 1);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3645) || EventFlag(3647)));
    RestartEvent();
L6:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L2, EventFlag(3642));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 930010, false, false, false, Equal, 1);
    Goto(L20);
L1:
L2:
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 20034, false, false, false, Equal, 1);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3646));
    RestartEvent();
});

$Event(1051430701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlag(TargetEventFlagType.EventFlag, X12_4, OFF);
    WaitFor(!EventFlag(X16_4) && EventFlag(X20_4));
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified)
        || HasDamageType(X0_4, 40000, DamageType.Unspecified);
    if (HPRatio(X0_4) >= 1) {
        hpDmg &= HPRatio(X0_4) < 0.65;
    } else {
        if (HPRatio(X0_4) >= 0.9) {
            hpDmg &= HPRatio(X0_4) < 0.55;
        } else {
            if (HPRatio(X0_4) >= 0.8) {
                hpDmg &= HPRatio(X0_4) < 0.45;
            } else {
                if (HPRatio(X0_4) >= 0.7) {
                    hpDmg &= HPRatio(X0_4) < 0.35;
                } else {
                    if (HPRatio(X0_4) >= 0.7) {
                        hpDmg &= HPRatio(X0_4) < 0.25;
                    } else {
                        hpDmg &= HPRatio(X0_4) < 0.15;
                        Goto(L10);
                    }
                }
            }
        }
    }
L10:
    hpDmg &= dmg;
    hpFlagDmg = HPRatio(X0_4) > 0 && (EventFlag(X12_4) || hpDmg);
    flag = EventFlag(X16_4) || !EventFlag(X20_4);
    WaitFor(flag || hpFlagDmg);
    RestartIf(flag.Passed);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, 20034, false, false, false, Equal, 1);
    if (Signed(1) != X28_4) {
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, X4_4, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, X8_4, ON);
    }
L9:
    SaveRequest(0);
    RestartEvent();
});

$Event(1051430702, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    WaitFor(EventFlag(3642) && HPRatio(X0_4) <= X4_4);
    ForceAnimationPlayback(X0_4, 20039, false, false, false, Equal, 1);
    BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 3640, ON);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetEventFlag(TargetEventFlagType.EventFlag, 1051439212, ON);
    SaveRequest(0);
    WaitFixedTimeSeconds(8);
    SetEventFlag(TargetEventFlagType.EventFlag, 1051439212, OFF);
    SaveRequest(0);
});

$Event(1051430703, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(3647) && EventValue(1051439235, 5) >= 9);
    SetEventFlag(TargetEventFlagType.EventFlag, 1051439212, ON);
    SetCharacterInvincibility(X0_4, Enabled);
});

$Event(1051433705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3641));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 3640, ON);
    SaveRequest(0);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1051439201, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    EndEvent();
});

$Event(1051433706, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(1051439224));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 3642, ON);
    SaveRequest(0);
    SetEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
    EndEvent();
});

$Event(1051433707, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    SetEventFlag(TargetEventFlagType.EventFlag, X4_4, OFF);
    EndIf(!(EventFlag(1051439225) && !EventFlag(1051439227)));
    SetEventFlag(TargetEventFlagType.EventFlag, X4_4, ON);
    SetEventFlag(TargetEventFlagType.EventFlag, X0_4, ON);
    EndEvent();
});

$Event(1051433708, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    GotoIf(L1, EventFlag(1051439226));
    GotoIf(L1, EventFlag(1051439219));
    GotoIf(L1, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L2, 
        PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L3, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L4, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && PlayerHasItem(ItemType.Goods, X8_4));
    Goto(L5);
L1:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X12_4, ON);
    WaitFor(
        (PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4))
            && !EventFlag(1051439226)
            && !EventFlag(1051439219));
    RestartEvent();
L2:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X16_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || !PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L3:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X20_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, X0_4)
            || !PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L4:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X24_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || !PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L5:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, X28_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || (!PlayerHasItem(ItemType.Goods, X0_4) && !PlayerHasItem(ItemType.Goods, X4_4))
            || (!PlayerHasItem(ItemType.Goods, X0_4) && !PlayerHasItem(ItemType.Goods, X8_4))
            || (!PlayerHasItem(ItemType.Goods, X4_4) && !PlayerHasItem(ItemType.Goods, X8_4)));
    RestartEvent();
});

$Event(1051433709, Restart, function() {
    WaitFor(EventFlag(1051430800));
    WaitFixedTimeSeconds(2);
    SpawnMapSFX(1051431660);
    SpawnMapSFX(1051431661);
    SpawnMapSFX(1051431662);
    SpawnMapSFX(1051431663);
    SpawnMapSFX(1051431664);
    SpawnMapSFX(1051431665);
    SpawnMapSFX(1051431666);
    SpawnMapSFX(1051431667);
    SpawnMapSFX(1051431668);
    SpawnMapSFX(1051431669);
    SpawnMapSFX(1051431670);
    SpawnMapSFX(1051431671);
    SpawnMapSFX(1051431672);
    SpawnMapSFX(1051431673);
    SpawnMapSFX(1051431674);
    
    IfActionButtonInArea(MAIN, 6350, 1051431675);
    RotateCharacter(10000, 1051431675, -1, true);
    ForceAnimationPlayback(10000, 60010, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(2);
    
    SpawnOneshotSFX(TargetEntityType.Area, 1051431660, -1, 530365);
    SpawnOneshotSFX(TargetEntityType.Area, 1051431660, -1, 303150);
    SpawnOneshotSFX(TargetEntityType.Area, 1051431660, -1, 450153);
    WaitFixedTimeSeconds(1.5);
    
    WarpPlayer(13, 0, 0, 0, 13002500, 60);
    SaveRequest();
    SetPlayerRespawnPoint(13002500);
    RestartEvent();
});

$Event(1051432800, Restart, function() {
    EndIf(EventFlag(1051430800));
    WaitFor(CharacterHPValue(1051430800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1051430800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1051430800));
    HandleBossDefeatAndDisplayBanner(1051430800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(1051430800, ON);
    EndEvent();
});

$Event(1051432810, Restart, function() {
    if (EventFlag(1051430800)) {
        DisableCharacter(1051430800);
        DisableCharacterCollision(1051430800);
        ForceCharacterDeath(1051430800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1051430800);
    DisableLockOnPoint(1051430800, 220);
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(1051432805)
            && (InArea(10000, 1051432850)
                || HasDamageType(1051430800, 10000, DamageType.Unspecified)
                || CharacterHasStateInfo(1051430800, 436)
                || CharacterHasStateInfo(1051430800, 2)
                || CharacterHasStateInfo(1051430800, 5)
                || CharacterHasStateInfo(1051430800, 6)
                || CharacterHasStateInfo(1051430800, 260)));
    EnableCharacterAI(1051430800);
    SetNetworkUpdateRate(1051430800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1051430800, 0, 904770600);
    EnableLockOnPoint(1051430800, 220);
    SetSpEffect(1051430800, 8089);
});

$Event(1051432849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1051430800, 1051431800, 1051432850, 1051432805, 1051435800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1051430800, 1051431800, 1051432850, 1051432805, 1051432806, 10000);
    InitializeCommonEvent(0, 9005811, 1051430800, 1051431800, 0, 0);
    InitializeCommonEvent(0, 9005811, 1051430800, 1051431801, 17, 0);
    InitializeCommonEvent(0, 9005811, 1051430800, 1051431802, 17, 0);
    InitializeCommonEvent(0, 9005822, 1051430800, 10000016, 1051432805, 1051432806, 0, 0, 0, 0);
});
