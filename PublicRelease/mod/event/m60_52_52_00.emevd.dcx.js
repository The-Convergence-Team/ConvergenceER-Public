// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.5
// ==/EMEVD==

$Event(200, Default, function() {
    InitializeEvent(0, 1052520800, 0);
    InitializeEvent(0, 1052522810, 0);
    InitializeEvent(0, 1052522811, 0);
    InitializeEvent(0, 1052522812, 0);
    InitializeEvent(0, 1052522815, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0);
    InitializeEvent(0, 1052522816, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0);
    InitializeEvent(0, 1052522817, 0);
    InitializeEvent(0, 1052522849, 0);
    InitializeEvent(0, 1052522350, 0);
});

$Event(1052520800, Restart, function() {
    EndIf(EventFlag(1252520800));
    WaitFor(CharacterHPValue(1052520800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1052520800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1052520800));
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(1052520800, TextBannerType.LegendFelled);
    SetEventFlagID(1252520800, ON);
    SetEventFlagID(9131, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61131, ON);
    }
    ChangeCamera(0, 0);
});

$Event(1052522810, Restart, function() {
    if (EventFlag(1252520800)) {
        DisableCharacter(1052525800);
        DisableCharacterCollision(1052525800);
        ForceCharacterDeath(1052525800, true);
        EndEvent();
    }
L0:
    DisableCharacterGravity(1052520800);
    DisableCharacterCollision(1052520800);
    EnableCharacterInvincibility(1052520800);
    EnableCharacterInvincibility(1052520801);
    DisableCharacterAI(1052520800);
    DisableCharacterAI(1052520801);
    DisableLockOnPoint(1052520800, 221);
    DisableLockOnPoint(1052520800, 222);
    DisableLockOnPoint(1052520800, 225);
    DisableLockOnPoint(1052520800, 226);
    DisableLockOnPoint(1052520800, 227);
    DisableLockOnPoint(1052520801, 221);
    DisableLockOnPoint(1052520801, 223);
    DisableLockOnPoint(1052520801, 224);
    DisableLockOnPoint(1052520801, 225);
    DisableLockOnPoint(1052520801, 226);
    DisableLockOnPoint(1052520801, 227);
    if (!EventFlag(1252520801)) {
        if (PlayerIsInOwnWorld()) {
            SetEventFlagID(1252520804, OFF);
        }
        cond |= HasDamageType(1052520801, 0, DamageType.Unspecified)
            || EntityInRadiusOfEntity(1052520801, 10000, 120, 1)
            || EntityInRadiusOfEntity(1052520801, 1052530700, 120, 1)
            || EntityInRadiusOfEntity(1052520801, 1052530701, 120, 1);
        WaitFor(cond);
        SetEventFlagID(1252520801, ON);
        if (PlayerIsInOwnWorld()) {
            SendInvadingPhantomsHome(0);
        }
    } else {
L1:
        cond |= HasDamageType(1052520801, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(1052520801, 436)
            || CharacterHasStateInfo(1052520801, 2)
            || CharacterHasStateInfo(1052520801, 5)
            || CharacterHasStateInfo(1052520801, 6)
            || CharacterHasStateInfo(1052520801, 260)
            || EntityInRadiusOfEntity(1052520801, 10000, 120, 1)
            || ((InArea(10000, 1052532800) || InArea(10000, 1052532801)) && EventFlag(1252522805));
        WaitFor(cond);
    }
L2:
    SetNetworkconnectedEventFlagID(1252520804, ON);
    CreateReferredDamagePair(1052520801, 1052520800);
    EnableCharacterAI(1052520801);
    DisableCharacterInvincibility(1052520800);
    DisableCharacterInvincibility(1052520801);
    DisplayBossHealthBar(Enabled, 1052520800, 0, 904760000);
    DisableCharacterHPBarDisplay(1052520801);
    ChangeCamera(4762, 4762);
    SetNetworkUpdateRate(1052520801, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(1052522811, Restart, function() {
    EndIf(EventFlag(1252520800));
    WaitFor(HPRatio(1052520801) <= 0);
    SetCharacterTeamType(1052520801, TeamType.Object);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(60520010, CutscenePlayMode.Skippable, 1052522810, 60525200, 10000, 65001, false, false);
    } else {
        PlayCutsceneToPlayer(60520010, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    if (PlayerIsInOwnWorld()) {
        //SetCameraAngle(-32.53, -43.56);
        ChangeCamera(4762, 4762);
    }
    EnableCharacter(1052520800);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(1052520800, 20000, false, false, false);
    WarpCharacterAndCopyFloor(1052520800, TargetEntityType.Area, 1052522815, -1, 1052520801);
    EnableCharacterGravity(1052520800);
    WaitFixedTimeFrames(1);
    DisableCharacter(1052520801);
    DisableCharacterCollision(1052520801);
    WaitFixedTimeFrames(1);
    EnableCharacterCollision(1052520800);
    SetEventFlagID(1252522802, ON);
});

$Event(1052522812, Default, function() {
    EndIf(EventFlag(1252520800));
    WaitFor(
        (HasDamageType(1052520800, 0, DamageType.Unspecified)
            || EntityInRadiusOfEntity(1052520800, 10000, 70, 1))
            && EventFlag(1252522802));
    EnableCharacterAI(1052520800);
    SetNetworkUpdateRate(1052520800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeFrames(1);
    SetSpEffect(1052520800, 12780);
});

$Event(1052522815, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(1252520800));
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(1052520801));
    CreateNPCPart(1052520801, 9, NPCPartType.Part9, X0_4, 1, 1.5, false, false);
    if (!EventFlag(1052522828)) {
        if (!EventFlag(1052522827)) {
            if (!EventFlag(1052522826)) {
                if (!EventFlag(1052522825)) {
                    if (!EventFlag(1052522824)) {
                        if (!EventFlag(1052522823)) {
                            if (!EventFlag(1052522822)) {
                                if (!EventFlag(1052522821)) {
                                    if (!EventFlag(1052522820)) {
                                        WaitFor(NPCPartHP(1052520801, 9) <= X4_4);
                                        SetNetworkconnectedEventFlagID(1052522820, ON);
                                        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                                    }
L10:
                                    SetSpEffect(1052520801, 12730);
                                    WaitFor(NPCPartHP(1052520801, 9) <= X8_4);
                                    SetNetworkconnectedEventFlagID(1052522820, ON);
                                    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                                }
L11:
                                SetSpEffect(1052520801, 12731);
                                WaitFor(NPCPartHP(1052520801, 9) <= X12_4);
                                SetNetworkconnectedEventFlagID(1052522822, ON);
                                SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                            }
L12:
                            SetSpEffect(1052520801, 12732);
                            WaitFor(NPCPartHP(1052520801, 9) <= X16_4);
                            SetNetworkconnectedEventFlagID(1052522823, ON);
                            SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                        }
L13:
                        SetSpEffect(1052520801, 12733);
                        WaitFor(NPCPartHP(1052520801, 9) <= X20_4);
                        SetNetworkconnectedEventFlagID(1052522824, ON);
                        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                    }
L14:
                    SetSpEffect(1052520801, 12734);
                    WaitFor(NPCPartHP(1052520801, 9) <= X24_4);
                    SetNetworkconnectedEventFlagID(1052522825, ON);
                    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
                }
L15:
                SetSpEffect(1052520801, 12735);
                WaitFor(NPCPartHP(1052520801, 9) <= X28_4);
                SetNetworkconnectedEventFlagID(1052522826, ON);
                SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
            }
L16:
            SetSpEffect(1052520801, 12736);
            WaitFor(NPCPartHP(1052520801, 9) <= X32_4);
            SetNetworkconnectedEventFlagID(1052522827, ON);
            SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
        }
L17:
        SetSpEffect(1052520801, 12737);
        WaitFor(NPCPartHP(1052520801, 9) <= X36_4);
        SetNetworkconnectedEventFlagID(1052522828, ON);
        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    }
L18:
    SetSpEffect(1052520801, 12738);
    SetNetworkconnectedThisEventSlot(ON);
    EndIf(CharacterHasSpEffect(1052520801, 12752));
    SetSpEffect(1052520801, 12750);
});

$Event(1052522816, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(1252520800));
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(1052520801));
    CreateNPCPart(1052520801, 8, NPCPartType.Part8, X0_4, 1, 1.5, false, false);
    if (!EventFlag(1052522838)) {
        if (!EventFlag(1052522837)) {
            if (!EventFlag(1052522836)) {
                if (!EventFlag(1052522835)) {
                    if (!EventFlag(1052522834)) {
                        if (!EventFlag(1052522833)) {
                            if (!EventFlag(1052522832)) {
                                if (!EventFlag(1052522831)) {
                                    if (!EventFlag(1052522830)) {
                                        WaitFor(NPCPartHP(1052520801, 8) <= X4_4);
                                        SetNetworkconnectedEventFlagID(1052522830, ON);
                                        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                                    }
L10:
                                    SetSpEffect(1052520801, 12740);
                                    WaitFor(NPCPartHP(1052520801, 8) <= X8_4);
                                    SetNetworkconnectedEventFlagID(1052522831, ON);
                                    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                                }
L11:
                                SetSpEffect(1052520801, 12741);
                                WaitFor(NPCPartHP(1052520801, 8) <= X12_4);
                                SetNetworkconnectedEventFlagID(1052522832, ON);
                                SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                            }
L12:
                            SetSpEffect(1052520801, 12742);
                            WaitFor(NPCPartHP(1052520801, 8) <= X16_4);
                            SetNetworkconnectedEventFlagID(1052522833, ON);
                            SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                        }
L13:
                        SetSpEffect(1052520801, 12743);
                        WaitFor(NPCPartHP(1052520801, 8) <= X20_4);
                        SetNetworkconnectedEventFlagID(1052522834, ON);
                        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                    }
L14:
                    SetSpEffect(1052520801, 12744);
                    WaitFor(NPCPartHP(1052520801, 8) <= X24_4);
                    SetNetworkconnectedEventFlagID(1052522835, ON);
                    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
                }
L15:
                SetSpEffect(1052520801, 12745);
                WaitFor(NPCPartHP(1052520801, 8) <= X28_4);
                SetNetworkconnectedEventFlagID(1052522836, ON);
                SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
            }
L16:
            SetSpEffect(1052520801, 12746);
            WaitFor(NPCPartHP(1052520801, 8) <= X32_4);
            SetNetworkconnectedEventFlagID(1052522837, ON);
            SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
        }
L17:
        SetSpEffect(1052520801, 12747);
        WaitFor(NPCPartHP(1052520801, 8) <= X36_4);
        SetNetworkconnectedEventFlagID(1052522838, ON);
        SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    }
L18:
    SetSpEffect(1052520801, 12748);
    SetNetworkconnectedThisEventSlot(ON);
    EndIf(CharacterHasSpEffect(1052520801, 12752));
    SetSpEffect(1052520801, 12750);
});

$Event(1052522817, Restart, function() {
    EndIf(EventFlag(1252520800));
    WaitFor(CharacterHasSpEffect(1052520801, 12752));
    SetNPCPartHP(1052520801, 8, 0, false);
    SetNPCPartHP(1052520801, 9, 0, false);
    WaitFixedTimeFrames(1);
    CreateNPCPart(1052520801, 8, NPCPartType.Part8, 99999, 1, 2, false, false);
    CreateNPCPart(1052520801, 9, NPCPartType.Part9, 99999, 1, 2, false, false);
});

$Event(1052522849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1252520800, 1052531800, 1052532800, 1252522805, 1052525800, 10000, 1252520801, 0);
    InitializeCommonEvent(0, 9005800, 1252520800, 1052531801, 1052532801, 1252522805, 1052525800, 10000, 1252520801, 0);
    InitializeCommonEvent(0, 9005801, 1252520800, 1052531800, 1052532800, 1252522805, 1252522806, 10000);
    InitializeCommonEvent(0, 9005801, 1252520800, 1052531801, 1052532801, 1252522805, 1252522806, 10000);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531800, 9, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531801, 10, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052521800, 0, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531802, 0, 1252520804);
    InitializeCommonEvent(0, 9005822, 1252520800, 476000, 1252522805, 1252522806, 0, 1252522802, 1, 1);
});

$Event(1052522350, Restart, function() {
    DisableNetworkSync();
    EndIf(AllBatchEventFlags(1052520354, 1052520358));
    EndIf((PlayerHasItem(ItemType.Goods, 8060) || EventFlag(1052520354)) &&
            (PlayerHasItem(ItemType.Goods, 8061) || EventFlag(1052520355)) &&
            (PlayerHasItem(ItemType.Goods, 8062) || EventFlag(1052520356)) &&
            (PlayerHasItem(ItemType.Goods, 8063) || EventFlag(1052520357)) &&
            (PlayerHasItem(ItemType.Goods, 8064) || EventFlag(1052520358)));
    
    WaitFor(ActionButtonInArea(9110, 1052521360));
    SetSpEffect(10000, 101200);
    WaitFixedTimeFrames(1);
    
    if (!PlayerHasItem(ItemType.Goods, 8060) && !EventFlag(1052520354)) {
        ShowTutorialPopup(3000, true, true);
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
    }
    if (!PlayerHasItem(ItemType.Goods, 8061) && !EventFlag(1052520355)) {
        ShowTutorialPopup(3001, true, true);
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
    }
    if (!PlayerHasItem(ItemType.Goods, 8062) && !EventFlag(1052520356)) {
        ShowTutorialPopup(3002, true, true);
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
    }
    if ((!PlayerHasItem(ItemType.Goods, 8063) && !EventFlag(1052520357)) || 
        (!PlayerHasItem(ItemType.Goods, 8064) && !EventFlag(1052520358))) {
        ShowTutorialPopup(3003, true, true);
        SetSpEffect(10000, 101200);
        WaitFixedTimeRealFrames(1);
    }
    RestartEvent();
});




