// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005271, 2050460250, 0, -1);
    InitializeEvent(0, 2050462680, 0);
    InitializeEvent(0, 2050462690, 0);
    InitializeEvent(0, 2050462685, 0);
    InitializeEvent(0, 2050462695, 0);
    InitializeEvent(0, 2050462699, 0);
    InitializeCommonEvent(0, 90005557, 2050461680);
    InitializeCommonEvent(0, 90005557, 2050461681);
    InitializeCommonEvent(0, 90005557, 2050461682);
    InitializeCommonEvent(0, 90005557, 2050461683);
    InitializeCommonEvent(0, 90005557, 2050461684);
    InitializeCommonEvent(0, 90005557, 2050461685);
    InitializeCommonEvent(0, 90005557, 2050461686);
    InitializeCommonEvent(0, 90005557, 2050461687);
    InitializeCommonEvent(0, 90005556, 2050461688, 2050467800);
});

$Event(250, Default, function() {
    InitializeEvent(0, 2050462300, 2050460300, 30008, 20008, -2044506988);
    InitializeEvent(0, 2050462330, 2050460300, -2044504988, -2044504987, -2044506988);
    InitializeEvent(0, 2050462335, 2050460300, -2044504995, -2044504994, -2044504993, -2044504992, -2044506988);
    InitializeCommonEvent(0, 90005430, 2050460300);
    InitializeEvent(0, 2050462320, 2050460300, -2044504996, -2044506987);
    InitializeCommonEvent(0, 90005301, 2050460300, 2050460300, 2050460500, 1082130432, 0);
    InitializeEvent(0, 2050462310, 2050460310, 30007, 20007, 2050462310, -2044504978);
    InitializeCommonEvent(0, 90005430, 2050460310);
    InitializeEvent(1, 2050462320, 2050460310, -2044504986, -2044504978);
    InitializeCommonEvent(0, 90005301, 2050460310, 2050460310, 2050460510, 1082130432, 0);
    InitializeEvent(1, 2050462330, 2050460310, -2044504978, -2044504977, -2044504976);
    InitializeEvent(1, 2050462335, 2050460310, -2044504985, -2044504984, -2044504983, -2044504982, -2044504976);
    InitializeCommonEvent(0, 90005433, 2050460300, -2044504991, -2044504990, -2044504989);
    InitializeCommonEvent(0, 90005434, 2050460300, -2044504991, -2044504990, -2044504989);
    InitializeCommonEvent(0, 90005433, 2050460310, -2044504981, -2044504980, -2044504979);
    InitializeCommonEvent(0, 90005434, 2050460310, -2044504981, -2044504980, -2044504979);
    InitializeEvent(0, 2050462350, 0);
    //Anger of the Fell God Furnace Golem Instant Kill Localized Initialize
    InitializeEvent(0, 2050462340, 2050460300, -2044506988);
    InitializeEvent(1, 2050462340, 2050460310, -2044504976);  
});

$Event(2050462310, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450);
    sp2 = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp3 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp5 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp6 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = InArea(10000, X12_4) && CharacterBackreadStatus(X0_4) && sp && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(X16_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        ForceAnimationPlayback(X0_4, X8_4, true, true, false);
        SetNetworkconnectedEventFlagID(2250462320, ON);
        EndEvent();
    }
L0:
    EndEvent();
});

//Furnace Golem Unte Ruins Entrance Wake Up and Blockage Removal
$Event(2050462300, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceAssetDestruction(2050461600, 1);
        EndEvent();
    }
L4:
    EnableAssetInvunerability(2050461600);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    DisableCharacterAI(X0_4);
    WaitFixedTimeRealFrames(1);
    SetNPCPartSEAndSFX(X0_4, 30, 106, 106, 139, 117, -1);
    SetNPCPartSEAndSFX(X0_4, 31, 106, 106, 139, 117, -1);
    CreateNPCPart(X0_4, 32, NPCPartType.Part1, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 32, 106, 106, 139, 117, -1);
    CreateNPCPart(X0_4, 33, NPCPartType.Part2, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 33, 106, 106, 139, 117, -1);
    //Check for Hefty Furnace Pot or Anger of the Fell God hit
    WaitFor(CharacterHasSpEffect(X0_4, 20011135) || CharacterHasSpEffect(X0_4, 20011136));
    SetNPCPartSEAndSFX(X0_4, 30, -1, 120, -1, 120, 0);
    SetNPCPartSEAndSFX(X0_4, 31, -1, 120, -1, 120, 0);
    SetNPCPartSEAndSFX(X0_4, 32, -1, 120, -1, 120, 0);
    SetNPCPartSEAndSFX(X0_4, 33, -1, 120, -1, 120, 0);
    WaitFixedTimeSeconds(0.1);
    GotoIf(L0, !CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450));
    SetNetworkconnectedEventFlagID(X12_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    DisableAssetInvunerability(2050461600);
    RequestAssetDestruction(2050461600, 0);
    ForceAnimationPlayback(X0_4, X8_4, true, true, false);
    EnableCharacterAI(X0_4);
    SetNetworkconnectedEventFlagID(2250460309, ON);
    EndEvent();
});

$Event(2050462320, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X4_4)) {
        DisableCharacterGravity(X0_4);
        SetSpEffect(X0_4, 5005);
        RequestCharacterAIReplan(X0_4);
        WaitFixedTimeFrames(1);
        if (EventFlag(X8_4)) {
            if (!CharacterHasSpEffect(X0_4, 19627)) {
                ForceAnimationPlayback(X0_4, 30010, true, false, false);
            }
        }
L1:
        WaitFor(EventFlag(X4_4) || EntityInRadiusOfEntity(X0_4, 10000, 200, 1));
        if (EventFlag(X8_4)) {
            if (!CharacterHasSpEffect(X0_4, 19627)) {
                ForceAnimationPlayback(X0_4, 20010, true, false, false);
            }
        }
    }
L0:
    SetEventFlagID(X4_4, ON);
    EnableCharacterGravity(X0_4);
    SetSpEffect(X0_4, 5006);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        (!EntityInRadiusOfEntity(X0_4, 10000, 220, 1)
            && !EntityInRadiusOfEntity(X0_4, 10001, 220, 1)
            && !EntityInRadiusOfEntity(X0_4, 10002, 220, 1)
            && !EntityInRadiusOfEntity(X0_4, 10003, 220, 1)
            && !EntityInRadiusOfEntity(X0_4, 10004, 220, 1)
            && !EntityInRadiusOfEntity(X0_4, 10005, 220, 1))
            || !EventFlag(X4_4));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

//Furnace Golem Unte Ruins Hefty Furnace Pot Handler Localized Script
$Event(2050462330, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterBackreadStatus(X0_4) && CharacterHasSpEffect(X0_4, 20011135));
    if (!EventFlag(X8_4)) {
        if (!EventFlag(X4_4)) {
            SetEventFlagID(X4_4, ON);
            if (EventFlag(X12_4)) {
                ForceAnimationPlayback(X0_4, 20006, false, false, false);
            }
            WaitFixedTimeRealFrames(1);
            RestartEvent();
        }
L2:
        SetEventFlagID(X8_4, ON);
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
        WaitFixedTimeRealFrames(1);
        RestartEvent();
    }
L3:
    ForceAnimationPlayback(X0_4, 20009, false, true, false);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

//Furnace Golem Unte Ruins Hefty Fire Pot Handler Localized Script
$Event(2050462335, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFor(CharacterBackreadStatus(X0_4) && CharacterHasSpEffect(X0_4, 20011113));
    if (!EventFlag(X16_4)) {
        if (!EventFlag(X12_4)) {
            if (!EventFlag(X8_4)) {
                if (!EventFlag(X4_4)) {
L0:
                    if (EventFlag(X20_4)) {
                        SetEventFlagID(X4_4, ON);
                    }
                    WaitFixedTimeRealFrames(1);
                    RestartEvent();
                }
L1:
                SetEventFlagID(X8_4, ON);
                ForceAnimationPlayback(X0_4, 20006, false, false, false);
                WaitFixedTimeRealFrames(1);
                RestartEvent();
            }
L2:
            SetEventFlagID(X12_4, ON);
            WaitFixedTimeRealFrames(1);
            RestartEvent();
        }
L3:
        SetEventFlagID(X16_4, ON);
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
        WaitFixedTimeRealFrames(1);
        RestartEvent();
    }
L4:
    ForceAnimationPlayback(X0_4, 20009, false, true, false);
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

//Furnace Golem Unte Ruins Anger of the Fell God Handler Localized Script
$Event(2050462340, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterBackreadStatus(X0_4) && CharacterHasSpEffect(X0_4, 20011136));
    if (EventFlag(X4_4)) {
        ForceAnimationPlayback(X0_4, 20009, false, true, false);
    }
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

//Furnace Golem Unte Ruins Behavior Adjustment?
$Event(2050462350, Restart, function() {
    WaitFor(
        CharacterBackreadStatus(2050460300)
            && CharacterBackreadStatus(2050460310)
            && CharacterAIState(2050460300, AIStateType.Combat)
            && CharacterAIState(2050460310, AIStateType.Combat));
    SetSpEffect(2050460310, 20011144);
    WaitFor(
        CharacterBackreadStatus(2050460300)
            && CharacterBackreadStatus(2050460310)
            && !(CharacterAIState(2050460300, AIStateType.Combat)
                && CharacterAIState(2050460310, AIStateType.Combat)));
    ClearSpEffect(2050460310, 20011144);
    RestartEvent();
});

$Event(2050462690, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    
    SetEventFlagID(2050462691, OFF);
    SetEventFlagID(2050462692, OFF);
    EndIf(EventFlag(2050460690));
    GotoIf(L10, EventFlag(2045470690));
    GotoIf(L13, EventFlag(40000690));
    
    DeleteAssetfollowingSFX(2050461690, true);
    CreateAssetfollowingSFX(2050461690, 100, 6102);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209524, 2050461690));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    SetEventFlagID(2050460690, ON);
    AwardItemsIncludingClients(2045470900);
    DeleteAssetfollowingSFX(2050461690, true);
    EndEvent();
    
L10:
    item |= PlayerHasItem(ItemType.Weapon, 2540000)
        || PlayerHasItem(ItemType.Weapon, 2540001)
        || PlayerHasItem(ItemType.Weapon, 2540002)
        || PlayerHasItem(ItemType.Weapon, 2540003)
        || PlayerHasItem(ItemType.Weapon, 2540004)
        || PlayerHasItem(ItemType.Weapon, 2540005)
        || PlayerHasItem(ItemType.Weapon, 2540006)
        || PlayerHasItem(ItemType.Weapon, 2540007)
        || PlayerHasItem(ItemType.Weapon, 2540008)
        || PlayerHasItem(ItemType.Weapon, 2540009)
        || PlayerHasItem(ItemType.Weapon, 2540010);
    onlineActItem = PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2050461691) && item;
    onlineActItem2 |= onlineActItem || !item;
    WaitFor(onlineActItem2);
    GotoIf(L0, !onlineActItem.Passed);
    
    DisplayGenericDialogAndSetEventFlags(2020025, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461691, 2, 2050462691, 2050462692, 2050462692);
    RestartIf(!EventFlag(2050462691));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    if (PlayerHasItem(ItemType.Weapon, 2540010)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540010, 1);
        AwardItemsIncludingClients(2045470600);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477600, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540009)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540009, 1);
        AwardItemsIncludingClients(2045470590);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477590, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540008)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540008, 1);
        AwardItemsIncludingClients(2045470580);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477580, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540007)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540007, 1);
        AwardItemsIncludingClients(2045470570);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477570, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540006)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540006, 1);
        AwardItemsIncludingClients(2045470560);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477560, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540005)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540005, 1);
        AwardItemsIncludingClients(2045470550);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477550, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540004)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540004, 1);
        AwardItemsIncludingClients(2045470540);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477540, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540003)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540003, 1);
        AwardItemsIncludingClients(2045470530);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477530, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540002)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540002, 1);
        AwardItemsIncludingClients(2045470520);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477520, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540001)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540001, 1);
        AwardItemsIncludingClients(2045470510);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477510, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540000)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540000, 1);
        AwardItemsIncludingClients(2045470500);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477500, OFF);
        Goto(L11);
    }
L11:
    WaitFixedTimeSeconds(2);
    RestartEvent();
L13:
    ClearCompiledConditionGroupState();
    
    onlineActItem2 |= PlayerHasItem(ItemType.Weapon, 2540000)
        || PlayerHasItem(ItemType.Weapon, 2540001)
        || PlayerHasItem(ItemType.Weapon, 2540002)
        || PlayerHasItem(ItemType.Weapon, 2540003)
        || PlayerHasItem(ItemType.Weapon, 2540004)
        || PlayerHasItem(ItemType.Weapon, 2540005)
        || PlayerHasItem(ItemType.Weapon, 2540006)
        || PlayerHasItem(ItemType.Weapon, 2540007)
        || PlayerHasItem(ItemType.Weapon, 2540008)
        || PlayerHasItem(ItemType.Weapon, 2540009)
        || PlayerHasItem(ItemType.Weapon, 2540010);
    onlineActItem3 = PlayerIsInOwnWorld() && ActionButtonInArea(209526, 2050461692) && onlineActItem2;
    WaitFor(onlineActItem3 || !onlineActItem2);
    GotoIf(L0, !onlineActItem3.Passed);
    
    DisplayGenericDialogAndSetEventFlags(2020026, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461692, 2, 2050462691, 2050462692, 2050462692);
    RestartIf(!EventFlag(2050462691));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    if (PlayerHasItem(ItemType.Weapon, 2540010)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540010, 1);
        AwardItemsIncludingClients(2045470800);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477800, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540009)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540009, 1);
        AwardItemsIncludingClients(2045470790);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477790, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540008)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540008, 1);
        AwardItemsIncludingClients(2045470780);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477780, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540007)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540007, 1);
        AwardItemsIncludingClients(2045470770);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477770, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540006)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540006, 1);
        AwardItemsIncludingClients(2045470760);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477760, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540005)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540005, 1);
        AwardItemsIncludingClients(2045470750);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477750, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540004)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540004, 1);
        AwardItemsIncludingClients(2045470740);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477740, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540003)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540003, 1);
        AwardItemsIncludingClients(2045470730);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477730, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540002)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540002, 1);
        AwardItemsIncludingClients(2045470720);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477720, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540001)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540001, 1);
        AwardItemsIncludingClients(2045470710);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477710, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540000)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540000, 1);
        AwardItemsIncludingClients(2045470700);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477700, OFF);
        Goto(L14);
    }
L14:
    WaitFixedTimeSeconds(2);
    RestartEvent();
L0:
    ClearCompiledConditionGroupState();
    
    item |= PlayerHasItem(ItemType.Weapon, 2540000)
        || PlayerHasItem(ItemType.Weapon, 2540001)
        || PlayerHasItem(ItemType.Weapon, 2540002)
        || PlayerHasItem(ItemType.Weapon, 2540003)
        || PlayerHasItem(ItemType.Weapon, 2540004)
        || PlayerHasItem(ItemType.Weapon, 2540005)
        || PlayerHasItem(ItemType.Weapon, 2540006)
        || PlayerHasItem(ItemType.Weapon, 2540007)
        || PlayerHasItem(ItemType.Weapon, 2540008)
        || PlayerHasItem(ItemType.Weapon, 2540009)
        || PlayerHasItem(ItemType.Weapon, 2540010);
    WaitFor(item);
    RestartEvent();
});

$Event(2050462680, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    
    SetEventFlagID(2050462691, OFF);
    SetEventFlagID(2050462692, OFF);
    EndIf(EventFlag(2050460690));
    GotoIf(L10, EventFlag(2045470690));
    GotoIf(L13, EventFlag(40000690));
    
    DeleteAssetfollowingSFX(2050461690, true);
    CreateAssetfollowingSFX(2050461690, 100, 6102);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209524, 2050461690));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    SetEventFlagID(2050460690, ON);
    AwardItemsIncludingClients(2045470900);
    DeleteAssetfollowingSFX(2050461690, true);
    EndEvent();
    
L10:
    item |= PlayerHasItem(ItemType.Weapon, 2540011)
        || PlayerHasItem(ItemType.Weapon, 2540012)
        || PlayerHasItem(ItemType.Weapon, 2540013)
        || PlayerHasItem(ItemType.Weapon, 2540014)
        || PlayerHasItem(ItemType.Weapon, 2540015);
    onlineActItem = PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2050461691) && item;
    lineActItem2 |= onlineActItem || !item;
    WaitFor(onlineActItem || !item);
    GotoIf(L0, !onlineActItem.Passed);
    
    DisplayGenericDialogAndSetEventFlags(2020025, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461691, 2, 2050462691, 2050462692, 2050462692);
    RestartIf(!EventFlag(2050462691));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    ClearCompiledConditionGroupState();
    
    if (PlayerHasItem(ItemType.Weapon, 2540015)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540015, 1);
        AwardItemsIncludingClients(2045470650);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477650, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540014)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540014, 1);
        AwardItemsIncludingClients(2045470640);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477640, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540013)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540013, 1);
        AwardItemsIncludingClients(2045470630);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477630, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540012)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540012, 1);
        AwardItemsIncludingClients(2045470620);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477620, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540011)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540011, 1);
        AwardItemsIncludingClients(2045470610);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477610, OFF);
    }
L11:
    WaitFixedTimeSeconds(2);
    RestartEvent();
L13:
    ClearCompiledConditionGroupState();
    
    onlineActItem2 |= PlayerHasItem(ItemType.Weapon, 2540011)
        || PlayerHasItem(ItemType.Weapon, 2540012)
        || PlayerHasItem(ItemType.Weapon, 2540013)
        || PlayerHasItem(ItemType.Weapon, 2540014)
        || PlayerHasItem(ItemType.Weapon, 2540015);
    onlineActItem3 = PlayerIsInOwnWorld() && ActionButtonInArea(209526, 2050461692) && onlineActItem2;
    WaitFor(onlineActItem3 || !onlineActItem2);
    GotoIf(L0, !onlineActItem3.Passed);
    
    DisplayGenericDialogAndSetEventFlags(2020026, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461692, 2, 2050462691, 2050462692, 2050462692);
    RestartIf(!EventFlag(2050462691));
    ForceAnimationPlayback(10000, 60071, false, false, false);
    
    ClearCompiledConditionGroupState();
    
    if (PlayerHasItem(ItemType.Weapon, 2540015)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540015, 1);
        AwardItemsIncludingClients(2045470850);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477850, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540014)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540014, 1);
        AwardItemsIncludingClients(2045470840);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477840, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540013)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540013, 1);
        AwardItemsIncludingClients(2045470830);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477830, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540012)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540012, 1);
        AwardItemsIncludingClients(2045470820);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477820, OFF);
    } else if (PlayerHasItem(ItemType.Weapon, 2540011)) {
        RemoveItemFromPlayer(ItemType.Weapon, 2540011, 1);
        AwardItemsIncludingClients(2045470810);
        WaitFixedTimeRealFrames(1);
        SetEventFlagID(2045477810, OFF);
    }
L14:
    WaitFixedTimeSeconds(2);
    RestartEvent();
L0:
    ClearCompiledConditionGroupState();
    
    item |= PlayerHasItem(ItemType.Weapon, 2540011)
        || PlayerHasItem(ItemType.Weapon, 2540012)
        || PlayerHasItem(ItemType.Weapon, 2540013)
        || PlayerHasItem(ItemType.Weapon, 2540014)
        || PlayerHasItem(ItemType.Weapon, 2540015);
    WaitFor(item);
    RestartEvent();
});

$Event(2050462695, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(2050462693, OFF);
    SetEventFlagID(2050462694, OFF);
    EndIf(EventFlag(2050460690));
    GotoIf(L10, EventFlag(2045470690));
    GotoIf(L13, EventFlag(40000690));
    EndEvent();
L10:
    cond &= PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2050461691);
    item = !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010)
        && (PlayerHasItem(ItemType.Weapon, 2560000)
            || PlayerHasItem(ItemType.Weapon, 2560001)
            || PlayerHasItem(ItemType.Weapon, 2560002)
            || PlayerHasItem(ItemType.Weapon, 2560003)
            || PlayerHasItem(ItemType.Weapon, 2560004)
            || PlayerHasItem(ItemType.Weapon, 2560005)
            || PlayerHasItem(ItemType.Weapon, 2560006)
            || PlayerHasItem(ItemType.Weapon, 2560007)
            || PlayerHasItem(ItemType.Weapon, 2560008)
            || PlayerHasItem(ItemType.Weapon, 2560009)
            || PlayerHasItem(ItemType.Weapon, 2560010));
    cond &= item;
    onlineActItem |= cond || !item;
    WaitFor(onlineActItem);
    if (cond.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020027, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461691, 2, 2050462693, 2050462694, 2050462694);
        RestartIf(!EventFlag(2050462693));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2560010)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560010, 1);
            AwardItemsIncludingClients(2045470600);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477600, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560009)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560009, 1);
            AwardItemsIncludingClients(2045470590);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477590, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560008)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560008, 1);
            AwardItemsIncludingClients(2045470580);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477580, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560007)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560007, 1);
            AwardItemsIncludingClients(2045470570);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477570, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560006)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560006, 1);
            AwardItemsIncludingClients(2045470560);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477560, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560005)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560005, 1);
            AwardItemsIncludingClients(2045470550);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477550, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560004)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560004, 1);
            AwardItemsIncludingClients(2045470540);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477540, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560003)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560003, 1);
            AwardItemsIncludingClients(2045470530);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477530, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560002)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560002, 1);
            AwardItemsIncludingClients(2045470520);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477520, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560001)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560001, 1);
            AwardItemsIncludingClients(2045470510);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477510, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560000)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560000, 1);
            AwardItemsIncludingClients(2045470500);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477500, OFF);
            Goto(L11);
        }
L11:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L0:
    ClearCompiledConditionGroupState();
    cond &= !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010);
    cond &= PlayerHasItem(ItemType.Weapon, 2560000)
        || PlayerHasItem(ItemType.Weapon, 2560001)
        || PlayerHasItem(ItemType.Weapon, 2560002)
        || PlayerHasItem(ItemType.Weapon, 2560003)
        || PlayerHasItem(ItemType.Weapon, 2560004)
        || PlayerHasItem(ItemType.Weapon, 2560005)
        || PlayerHasItem(ItemType.Weapon, 2560006)
        || PlayerHasItem(ItemType.Weapon, 2560007)
        || PlayerHasItem(ItemType.Weapon, 2560008)
        || PlayerHasItem(ItemType.Weapon, 2560009)
        || PlayerHasItem(ItemType.Weapon, 2560010);
    WaitFor(cond);
    RestartEvent();
L13:
    cond &= !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010);
    onlineActItem |= PlayerHasItem(ItemType.Weapon, 2550000)
        || PlayerHasItem(ItemType.Weapon, 2550001)
        || PlayerHasItem(ItemType.Weapon, 2550002)
        || PlayerHasItem(ItemType.Weapon, 2550003)
        || PlayerHasItem(ItemType.Weapon, 2550004)
        || PlayerHasItem(ItemType.Weapon, 2550005)
        || PlayerHasItem(ItemType.Weapon, 2550006)
        || PlayerHasItem(ItemType.Weapon, 2550007)
        || PlayerHasItem(ItemType.Weapon, 2550008)
        || PlayerHasItem(ItemType.Weapon, 2550009)
        || PlayerHasItem(ItemType.Weapon, 2550010);
    cond &= onlineActItem;
    onlineActItem2 = PlayerIsInOwnWorld() && ActionButtonInArea(209526, 2050461692) && cond;
    WaitFor(onlineActItem2 || !cond);
    if (onlineActItem2.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020028, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461692, 2, 2050462693, 2050462694, 2050462694);
        RestartIf(!EventFlag(2050462693));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2550010)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550010, 1);
            AwardItemsIncludingClients(2045470800);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477800, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550009)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550009, 1);
            AwardItemsIncludingClients(2045470790);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477790, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550008)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550008, 1);
            AwardItemsIncludingClients(2045470780);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477780, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550007)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550007, 1);
            AwardItemsIncludingClients(2045470770);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477770, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550006)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550006, 1);
            AwardItemsIncludingClients(2045470760);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477760, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550005)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550005, 1);
            AwardItemsIncludingClients(2045470750);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477750, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550004)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550004, 1);
            AwardItemsIncludingClients(2045470740);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477740, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550003)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550003, 1);
            AwardItemsIncludingClients(2045470730);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477730, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550002)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550002, 1);
            AwardItemsIncludingClients(2045470720);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477720, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550001)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550001, 1);
            AwardItemsIncludingClients(2045470710);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477710, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550000)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550000, 1);
            AwardItemsIncludingClients(2045470700);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477700, OFF);
            Goto(L14);
        }
L14:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ClearCompiledConditionGroupState();
    cond &= !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010);
    cond &= PlayerHasItem(ItemType.Weapon, 2550000)
        || PlayerHasItem(ItemType.Weapon, 2550001)
        || PlayerHasItem(ItemType.Weapon, 2550002)
        || PlayerHasItem(ItemType.Weapon, 2550003)
        || PlayerHasItem(ItemType.Weapon, 2550004)
        || PlayerHasItem(ItemType.Weapon, 2550005)
        || PlayerHasItem(ItemType.Weapon, 2550006)
        || PlayerHasItem(ItemType.Weapon, 2550007)
        || PlayerHasItem(ItemType.Weapon, 2550008)
        || PlayerHasItem(ItemType.Weapon, 2550009)
        || PlayerHasItem(ItemType.Weapon, 2550010);
    WaitFor(cond);
    RestartEvent();
});

$Event(2050462685, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(2050462693, OFF);
    SetEventFlagID(2050462694, OFF);
    EndIf(EventFlag(2050460690));
    GotoIf(L10, EventFlag(2045470690));
    GotoIf(L13, EventFlag(40000690));
    EndEvent();
L10:
    cond &= PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2050461691);
    item = !PlayerHasItem(ItemType.Weapon, 2540011)
        && !PlayerHasItem(ItemType.Weapon, 2540012)
        && !PlayerHasItem(ItemType.Weapon, 2540013)
        && !PlayerHasItem(ItemType.Weapon, 2540014)
        && !PlayerHasItem(ItemType.Weapon, 2540015)
        && (PlayerHasItem(ItemType.Weapon, 2560000)
            || PlayerHasItem(ItemType.Weapon, 2560011)
            || PlayerHasItem(ItemType.Weapon, 2560012)
            || PlayerHasItem(ItemType.Weapon, 2560013)
            || PlayerHasItem(ItemType.Weapon, 2560014)
            || PlayerHasItem(ItemType.Weapon, 2560015));
    cond &= item;
    onlineActItem |= cond || !item;
    WaitFor(onlineActItem);
    if (cond.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020027, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461691, 2, 2050462693, 2050462694, 2050462694);
        RestartIf(!EventFlag(2050462693));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2560015)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560015, 1);
            AwardItemsIncludingClients(2045470650);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477650, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560014)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560014, 1);
            AwardItemsIncludingClients(2045470640);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477640, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560013)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560013, 1);
            AwardItemsIncludingClients(2045470630);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477630, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560012)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560012, 1);
            AwardItemsIncludingClients(2045470620);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477620, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560011)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560011, 1);
            AwardItemsIncludingClients(2045470610);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477610, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560010)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560010, 1);
            AwardItemsIncludingClients(2045470600);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477600, OFF);
            Goto(L11);
        }
L11:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L0:
    ClearCompiledConditionGroupState();
    cond &= !PlayerHasItem(ItemType.Weapon, 2540011)
        && !PlayerHasItem(ItemType.Weapon, 2540012)
        && !PlayerHasItem(ItemType.Weapon, 2540013)
        && !PlayerHasItem(ItemType.Weapon, 2540014)
        && !PlayerHasItem(ItemType.Weapon, 2540015);
    cond &= PlayerHasItem(ItemType.Weapon, 2560011)
        || PlayerHasItem(ItemType.Weapon, 2560012)
        || PlayerHasItem(ItemType.Weapon, 2560013)
        || PlayerHasItem(ItemType.Weapon, 2560014)
        || PlayerHasItem(ItemType.Weapon, 2560015);
    WaitFor(cond);
    RestartEvent();
L13:
    cond &= !PlayerHasItem(ItemType.Weapon, 2540011)
        && !PlayerHasItem(ItemType.Weapon, 2540012)
        && !PlayerHasItem(ItemType.Weapon, 2540013)
        && !PlayerHasItem(ItemType.Weapon, 2540014)
        && !PlayerHasItem(ItemType.Weapon, 2540015);
    onlineActItem |= PlayerHasItem(ItemType.Weapon, 2550011)
        || PlayerHasItem(ItemType.Weapon, 2550012)
        || PlayerHasItem(ItemType.Weapon, 2550013)
        || PlayerHasItem(ItemType.Weapon, 2550014)
        || PlayerHasItem(ItemType.Weapon, 2550015);
    cond &= onlineActItem;
    onlineActItem2 = PlayerIsInOwnWorld() && ActionButtonInArea(209526, 2050461692) && cond;
    WaitFor(onlineActItem2 || !cond);
    if (onlineActItem2.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020028, PromptType.YESNO, NumberofOptions.TwoButtons, 2050461692, 2, 2050462693, 2050462694, 2050462694);
        RestartIf(!EventFlag(2050462693));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2550005)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550005, 1);
            AwardItemsIncludingClients(2045470750);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477750, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550004)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550004, 1);
            AwardItemsIncludingClients(2045470740);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477740, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550003)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550003, 1);
            AwardItemsIncludingClients(2045470730);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477730, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550002)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550002, 1);
            AwardItemsIncludingClients(2045470720);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477720, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550001)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550001, 1);
            AwardItemsIncludingClients(2045470710);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477710, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2550000)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2550000, 1);
            AwardItemsIncludingClients(2045470700);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477700, OFF);
            Goto(L14);
        }
L14:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ClearCompiledConditionGroupState();
    cond &= !PlayerHasItem(ItemType.Weapon, 2540011)
        && !PlayerHasItem(ItemType.Weapon, 2540012)
        && !PlayerHasItem(ItemType.Weapon, 2540013)
        && !PlayerHasItem(ItemType.Weapon, 2540014)
        && !PlayerHasItem(ItemType.Weapon, 2540015);
    cond &= PlayerHasItem(ItemType.Weapon, 2550011)
        || PlayerHasItem(ItemType.Weapon, 2550012)
        || PlayerHasItem(ItemType.Weapon, 2550013)
        || PlayerHasItem(ItemType.Weapon, 2550014)
        || PlayerHasItem(ItemType.Weapon, 2550015);
    WaitFor(cond);
    RestartEvent();
});

$Event(2050462699, Restart, function() {
    GotoIf(L15, !PlayerIsInOwnWorld());
    GotoIf(L1, EventFlag(2050460690));
    GotoIf(L10, EventFlag(2045470690));
    GotoIf(L11, EventFlag(40000690));
L1:
    SetNetworkconnectedEventFlagID(2050462696, ON);
    SetNetworkconnectedEventFlagID(2050462697, OFF);
    SetNetworkconnectedEventFlagID(2050462698, OFF);
    EnableAsset(2050461690);
    DisableAsset(2050461691);
    DisableAsset(2050461692);
    EndEvent();
L10:
    SetNetworkconnectedEventFlagID(2050462696, OFF);
    SetNetworkconnectedEventFlagID(2050462697, ON);
    SetNetworkconnectedEventFlagID(2050462698, OFF);
    DisableAsset(2050461690);
    EnableAsset(2050461691);
    DisableAsset(2050461692);
    EndEvent();
L11:
    SetNetworkconnectedEventFlagID(2050462696, OFF);
    SetNetworkconnectedEventFlagID(2050462697, OFF);
    SetNetworkconnectedEventFlagID(2050462698, ON);
    DisableAsset(2050461690);
    DisableAsset(2050461691);
    EnableAsset(2050461692);
    EndEvent();
L15:
    EnableAsset(2045472690);
    DisableAsset(2045472691);
    DisableAsset(2045472692);
    WaitFor(EventFlag(2045472696) || EventFlag(2045472697) || EventFlag(2045472698));
    EndIf(EventFlag(2045472696));
    if (!EventFlag(2045472698)) {
        DisableAsset(2045471690);
        EnableAsset(2045471691);
        DisableAsset(2045471692);
        EndEvent();
    }
L16:
    DisableAsset(2045471690);
    DisableAsset(2045471691);
    EnableAsset(2045471692);
    EndEvent();
});
