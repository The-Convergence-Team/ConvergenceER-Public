// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(11050002, 11051952, 0, 0, 0, 8);
    RegisterBonfire(11050003, 11051953, 0, 0, 0, 8);
    RegisterBonfire(11050004, 11051954, 0, 0, 0, 8);
    RegisterBonfire(11050005, 11051955, 0, 0, 0, 8);
    InitializeCommonEvent(0, 9005810, 11050800, 11050000, 11050950, 11051950, 1090519040);
    InitializeCommonEvent(0, 9005810, 11050850, 11050001, 11050951, 11051951, 1090519040);
    InitializeEvent(0, 11052800, 0);
    InitializeEvent(0, 11052810, 0);
    InitializeEvent(0, 11052811, 0);
    InitializeEvent(0, 11052830, 0);
    InitializeEvent(0, 11052849, 0);
    InitializeEvent(0, 11052850, 0);
    InitializeEvent(0, 11052860, 0);
    InitializeEvent(0, 11052861, 0);
    InitializeEvent(0, 11052862, 0);
    InitializeEvent(0, 11052859, 0);
    InitializeCommonEvent(0, 90005780, 11050800, 11052160, 11052161, 11050740, 20, 11052160, 11059350, 1, 0);
    InitializeCommonEvent(0, 90005781, 11050800, 11052160, 11052161, 11050740);
    InitializeCommonEvent(0, 90005784, 11052160, 11052805, 11050740, 11052800, 11052805, 0);
    InitializeCommonEvent(0, 90005780, 11050800, 11052164, 11052165, 11050750, 20, 11052164, 10009719, 1, 0);
    InitializeCommonEvent(0, 90005781, 11050800, 11052164, 11052165, 11050750);
    InitializeCommonEvent(0, 90005784, 11052164, 11052805, 11050750, 11052800, 11052805, 0);
    InitializeCommonEvent(0, 90005501, 11050525, 11051525, 0, 11051525, 11051526, 11051527, 11050526);
    InitializeCommonEvent(0, 90005501, 11050530, 11051530, 0, 11051530, 11051531, 11051532, 11050531);
    InitializeCommonEvent(0, 90005501, 11050535, 11051535, 1, 11051535, 11051536, 11051537, 11050536);
    InitializeCommonEvent(0, 90005501, 11050610, 11051610, 2, 11051610, 11051611, 11051612, 11050611);
    InitializeEvent(0, 11052510, 0);
    InitializeCommonEvent(0, 90005511, 11050560, 11051560, 11053560, 227010, 0);
    InitializeCommonEvent(0, 90005512, 11050560, 11052560, 11052561);
    InitializeEvent(0, 11052580, 0);
    InitializeCommonEvent(0, 90005520, 11050578, 11051578, 11052578, 11052579);
    InitializeEvent(0, 11052691, 0);
    InitializeEvent(0, 11052692, 0);
    InitializeCommonEvent(0, 90005605, 11051680, 3874, 34152692, 11050000, 11052680, 11052681, 11052682, 0, 0, 0, 0);
    
    //Tutorial Handler: Duels
    //InitializeEvent(0, 11052698, 0);
    
    //Tutorial Handler: Marika's Effigy at Roundtable
    //InitializeEvent(0, 11052697, 0);
    
    InitializeEvent(0, 11052699, 0);
    InitializeEvent(0, 11053700, 11050801, 11050800, 11050800, 11052805, 1119092736);
    InitializeEvent(0, 11053705, 11050710);
    InitializeCommonEvent(0, 90005704, 11050710, 4201, 4200, 1040529251, 3);
    InitializeCommonEvent(0, 90005703, 11050710, 4201, 4202, 1040529251, 4201, 4200, 4203, -1);
    InitializeCommonEvent(0, 90005702, 11050710, 4203, 4200, 4204);
    InitializeEvent(0, 11053706, 11050705);
    InitializeCommonEvent(0, 90005750, 11051700, 6450, 4900, 9500, 9500, 11059206, 806780);
    InitializeEvent(0, 11053707, 0);
    InitializeCommonEvent(0, 90005750, 11051700, 4110, 105000, 400500, 400500, 11059305, 0);
    InitializeCommonEvent(0, 11053708, 11051740, 4110, 103700, 400370, 400370, 4208, 0, 4203);
    InitializeCommonEvent(0, 90005706, 11050721, 930025, 0);
    InitializeCommonEvent(0, 90005706, 11050720, 930010, 0);
    InitializeEvent(0, 11053710, 11050851);
    InitializeEvent(0, 11053712, 0);
    InitializeEvent(0, 11053720, 0);
    InitializeCommonEvent(0, 90005703, 11050730, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    InitializeCommonEvent(0, 90005704, 11050730, 3941, 3940, 1039409251, 3);
    InitializeCommonEvent(0, 90005702, 11050730, 3943, 3940, 3944);
    InitializeEvent(0, 11053730, 11050730);
    InitializeEvent(0, 11053731, 11050730);
    //dummy enemies
    InitializeEvent(0, 11053711, 11050858);
    InitializeEvent(1, 11053711, 11050859);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(11050705, true);
    SetCharacterBackreadState(11050710, true);
    SetCharacterBackreadState(11050715, true);
    SetCharacterBackreadState(11050720, true);
    SetCharacterBackreadState(11050721, true);
    InitializeEvent(0, 11052500, 0);
    InitializeCommonEvent(0, 90005251, 11050202, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 11050203, 1080033280, 0, 0);
    InitializeCommonEvent(0, 90005221, 11050205, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 11050206, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 11050207, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 11050208, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005261, 11050240, 11052240, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 11050250, 11052240, 1065353216, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 11050250, 11052240, 1065353216, 1045220557, 0);
    InitializeCommonEvent(0, 90005211, 11050300, 30002, 20002, 11052300, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 11050301, 30002, 20002, 11052301, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 11050302, 30002, 20002, 11052302, 1084227584, 0, 0, 0, 0, 0);
});

$Event(11052500, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11050500));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(9116) && PlayerInMap(11, 5, 0, 0));
    PlayCutsceneToPlayer(13000060, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(11050500, ON);
    ForceAnimationPlayback(10000, 0, false, false, false);
    WaitFixedTimeSeconds(1);
    DisplayAreaWelcomeMessage(11050);
});

$Event(11052510, Default, function() {
    InitializeCommonEvent(0, 90005500, 11050525, 11051525, 0, 11051525, 11051526, 11053526, 11051527, 11053527, 11052526, 11052527, 11050526, 11052527, 0);
    InitializeCommonEvent(0, 90005505, 11050530, 11051530, 0, 11051530, 11051531, 11053531, 11051532, 11053532, 11050531, 11052532, 0);
    InitializeCommonEvent(0, 90005500, 11050610, 11051610, 2, 11051610, 11051611, 11053611, 11051612, 11053612, 11052611, 11052612, 11050611, 11052612, 0);
});

$Event(11052580, Restart, function() {
    RegisterLadder(11050580, 11050581, 11051580);
    RegisterLadder(11050582, 11050583, 11051582);
    RegisterLadder(11050584, 11050585, 11051584);
    RegisterLadder(11050586, 11050587, 11051586);
    RegisterLadder(11050588, 11050589, 11051588);
    RegisterLadder(11050590, 11050591, 11051590);
    RegisterLadder(11050592, 11050593, 11051592);
    RegisterLadder(11050594, 11050595, 11051594);
    RegisterLadder(11050596, 11050597, 11051596);
});

$Event(11052691, Restart, function() {
    EnableAssetInvunerability(11051691);
    SetEventFlagID(71123, ON);
});

$Event(11052692, Restart, function() {
    DisableObjAct(11051535, -1);
    DisableObjAct(11051536, -1);
    DisableObjAct(11051537, -1);
});

//Tutorial Handler: Marika's Effigy at Roundtable
$Event(11052697, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        EventFlag(710880)
            && !EventFlag(69480)
            && !EventFlag(2051)
            && !EventFlag(2052)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(1880, true, true);
    if (!EventFlag(69480)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9153, 710880, 1);
    }
    SetEventFlagID(69480, ON);
});

$Event(11052696, Restart, function() {
    WaitFor(EventFlag(11058556));
    SetEventFlagID(11008556, ON);
});

//Tutorial Handler: Duels
$Event(11052698, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(710850)
            && InArea(10000, 11052698)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(710850, ON);
    SetEventFlagID(60350, ON);
    if (!EventFlag(6080)) {
        SetEventFlagID(6080, ON);
        StartPS5Activity(7);
    }
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1850, true, true);
    if (!EventFlag(69450)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9150, 710850, 1);
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(69450, ON);
});

$Event(11052699, Default, function() {
    EndIf(EventFlag(11008556));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(11051699, 227030);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(11051699, 227030);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(11051699, 227030);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(11051699, 227030);
    RestartEvent();
});

$Event(11052800, Default, function() {
    EndIf(EventFlag(11050800));
    WaitFor(CharacterHPValue(11050800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(11058000, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(11050800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(11050800));
    HandleBossDefeatAndDisplayBanner(11050800, TextBannerType.LegendFelled);
    SetEventFlagID(11050800, ON);
    SetNetworkconnectedEventFlagID(11050800, ON);
    SetEventFlagID(9107, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61107, ON);
    }
    ChangeCamera(-1, -1);
    WaitFor(InArea(10000, 11052840));
    SuppressSE(SoundType.BGM, 0, false);
});

$Event(11052810, Restart, function() {
    if (EventFlag(11050800)) {
        DisableCharacter(11055800);
        DisableCharacterCollision(11055800);
        ForceCharacterDeath(11055800, false);
        DisableAsset(11051820);
        EndEvent();
    }
L0:
    DisableCharacterAI(11055800);
    DisableCharacterGravity(11050800);
    DisableCharacterCollision(11050800);
    EnableCharacterImmortality(11050801);
    DisableCharacterCollision(11050801);
    EnableCharacterInvincibility(11050801);
    EnableCharacterInvincibility(11050800);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3)
            || CharacterType(10000, TargetType.BluePhantom));
    if (!EventFlag(11050801)) {
        DisableCharacterCollision(11050801);
        ForceAnimationPlayback(11050801, 30010, false, false, false);
        WaitFor(EventFlag(11052805) && InArea(10000, 11052801));
        SendInvadingPhantomsHome(0);
        WaitFixedTimeFrames(1);
        SetEventFlagID(9021, ON);
        if (PlayerIsInOwnWorld()) {
            PlayCutsceneToPlayerAndWarp(11050010, CutscenePlayMode.Skippable, 11052811, 11050000, 10000, 0, false);
        } else {
            PlayCutsceneToPlayer(11050010, CutscenePlayMode.Skippable, 10000);
        }
        WaitFixedTimeRealFrames(1);
        SetNetworkconnectedEventFlagID(11050801, ON);
        if (!PlayerIsInOwnWorld()) {
            SetBossBGM(472000, BossBGMState.Stop2);
        }
        if (PlayerIsInOwnWorld()) {
            SetCameraAngle(7.5, -37.16);
        }
        DisableAsset(11051820);
        EnableCharacter(11050801);
        EnableCharacterCollision(11050801);
        WarpCharacterAndCopyFloor(11050801, TargetEntityType.Area, 11052815, -1, 11050801);
        ForceAnimationPlayback(11050801, 20020, false, false, false);
    } else {
L1:
        DisableAsset(11051820);
        WaitFor(EventFlag(11052805) && InArea(10000, 11052800));
    }
L2:
    EnableCharacterCollision(11050801);
    EnableCharacterAI(11050801);
    DisableCharacterInvincibility(11050801);
    DisableCharacterInvincibility(11050800);
    EnableCharacterImmortality(11050801);
    SetNetworkUpdateRate(11050801, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(11050801, 11050800);
    DisableCharacterHPBarDisplay(11050801);
    DisplayBossHealthBar(Enabled, 11050800, 0, 904720000);
});

$Event(11052811, Restart, function() {
    EndIf(EventFlag(11050800));
    WaitFor(CharacterHPValue(11050801) <= 1);
    DisableCharacterCollision(11050801);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(11050020, CutscenePlayMode.Skippable, 11052816, 11050000, 10000, 0, false);
    } else {
        PlayCutsceneToPlayer(11050020, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(11052802, ON);
    DisableCharacter(11050801);
    if (PlayerIsInOwnWorld()) {
        SetCameraAngle(8.09, -37.16);
    }
    EnableCharacter(11050800);
    WaitFixedTimeFrames(1);
    EnableCharacterGravity(11050800);
    WarpCharacterAndCopyFloor(11050800, TargetEntityType.Area, 11052815, -1, 11050800);
    WaitFixedTimeFrames(1);
    EnableCharacterCollision(11050800);
    ForceAnimationPlayback(11050800, 20020, false, false, false);
    EnableCharacterAI(11050800);
    DisplayBossHealthBar(Enabled, 11050800, 0, 904720001);
});

$Event(11052830, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(11050800));
    WaitFor(
        (PlayerIsInOwnWorld() && EventFlag(11052805) && !EventFlag(11050800))
            || (!PlayerIsInOwnWorld() && EventFlag(11052806) && !EventFlag(11050800)));
    ChangeCamera(4721, 4721);
    WaitFor(CharacterHasSpEffect(11050800, 12298) && !EventFlag(11050800));
    ChangeCamera(4725, 4725);
    WaitFor(!(CharacterHasSpEffect(11050800, 12298) && !EventFlag(11050800)));
    RestartEvent();
});

$Event(11052849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 11050800, 11051800, 11052800, 11052805, 11055800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 11050800, 11051800, 11052800, 11052805, 11052806, 10000);
    InitializeCommonEvent(0, 9005811, 11050800, 11051800, 17, 0);
    InitializeCommonEvent(0, 9005813, 11050800, 11051801, 18, 11050801, 18);
    InitializeCommonEvent(0, 9005822, 11050800, 472000, 11052805, 11052806, 11050801, 11052802, 1, 1);
});

$Event(11052850, Restart, function() {
    EndIf(EventFlag(11050850));
    WaitFor(CharacterHPValue(11050850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(11058050, SoundType.SFX, 888880000);
    SetSpEffect(20000, 1899);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(11050850) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(11050850));
    HandleBossDefeatAndDisplayBanner(11050850, TextBannerType.GreatEnemyFelled);
    DisableCharacterDefaultBackread(11050850);
    SetNetworkconnectedEventFlagID(11050850, ON);
    SetEventFlagID(11055840, ON); //music handler eventflag
    SetEventFlagID(11052852, OFF);
    SetEventFlagID(11052855, OFF);
    SetEventFlagID(9106, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61106, ON);
    }
    WaitFixedTimeSeconds(6);
    SetEventFlagID(11055840, OFF); //music handler eventflag
});

$Event(11052862, Restart, function() {
    if (EventFlag(11050850)) {
        DisableCharacter(11050850);
        DisableCharacterCollision(11050850);
        ForceCharacterDeath(11050850, false);
        EndEvent(); 
    } else {
L1:
        if (EventFlag(11050858)) {
            cond = EventFlag(11052855);
        WaitFor(InArea(10000, 11052850) || InArea(10000, 11052855));
        WaitFor(cond);
        DisplayBossHealthBar(Enabled, 11050850, 0, 904720003);
        EnableLockOnPoint(11050850, 220);
        EndEvent(); 
    }
    EndEvent(); 
    }
});

$Event(11052860, Restart, function() {
    if (EventFlag(11050850)) {
        DisableCharacter(11055850);
        DisableCharacterCollision(11055850);
        ForceCharacterDeath(11055850, false);
        EndEvent();
    }
L0:
    DisableCharacter(11055851);
    DisableCharacterCollision(11055851);
    DisableCharacterAI(11055851);
    EnableCharacterDefaultBackread(11050851);
    GotoIf(L8, EventFlag(9120) && EventFlag(9122) && EventFlag(9112));
    GotoIf(L7, !EventFlag(9120) && EventFlag(9122) && EventFlag(9112));
    GotoIf(L6, EventFlag(9120) && !EventFlag(9122) && EventFlag(9112));
    GotoIf(L5, EventFlag(9120) && EventFlag(9122) && !EventFlag(9112));
    GotoIf(L4, !EventFlag(9120) && !EventFlag(9122) && EventFlag(9112));
    GotoIf(L3, EventFlag(9120) && !EventFlag(9122) && !EventFlag(9112));
    GotoIf(L2, !EventFlag(9120) && EventFlag(9122) && !EventFlag(9112));
    Goto(L1);
L2:
    CopyPlayerCharacterData(11050851, 11050851);
    Goto(L1);
L3:
    CopyPlayerCharacterData(11050852, 11050851);
    Goto(L1);
L4:
    CopyPlayerCharacterData(11050853, 11050851);
    Goto(L1);
L5:
    CopyPlayerCharacterData(11050854, 11050851);
    Goto(L1);
L6:
    CopyPlayerCharacterData(11050855, 11050851);
    Goto(L1);
L7:
    CopyPlayerCharacterData(11050856, 11050851);
    Goto(L1);
L8:
    CopyPlayerCharacterData(11050857, 11050851);
    Goto(L1);
L1:
    if (!EventFlag(11050851)) {
        ForceAnimationPlayback(11050851, 90102, true, false, false);
        if (PlayerIsInOwnWorld()) {
            SetEventFlagID(11050854, OFF);
        }
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterHasSpEffect(11050851, 9770))
                || HasDamageType(11050851, 0, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(11050851, ON); // SET TO ON
        SetSpEffect(11050851, 9644);
    } else {
L1_:
        cond = EventFlag(11052855); // SET TO OFF
        WaitFor(InArea(10000, 11052850) || InArea(10000, 11052855));
        WaitFor(cond);
    }
L10:
    //SetCharacterTeamType(11050851, TeamType.FriendlyNPC);
    EnableCharacterAI(11050851);
    SetNetworkUpdateRate(11055850, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(11052861, Restart, function() {
    EndIf(EventFlag(11050850));
    WaitFor(HPRatio(11050850) <= 0.6);
    SetEventFlagID(11052852, ON);
    //SetEventFlagID(11052855, OFF);
});

$Event(11052859, Restart, function() {
    //InitializeCommonEvent(0, 9005800, 11050850, 11051850, 11052850, 11052855, 11055850, 10000, 11050850, 0);
    //InitializeCommonEvent(0, 9005800, 11050850, 11051851, 11052855, 11052855, 11055850, 10000, 6000, 0);
    //InitializeCommonEvent(0, 9005800, 11050850, 11051851, 11052855, 11052855, 11055850, 10000, 11050850, 0);
    InitializeCommonEvent(0, 9005800, 11050850, 11051850, 11052850, 11052855, 11055850, 10000, 11050851, 0);
    InitializeCommonEvent(0, 9005801, 11050850, 11051850, 11052850, 11052855, 11052856, 10000);
    InitializeCommonEvent(0, 9005801, 11050850, 11051851, 11052855, 11052855, 11052856, 10000);
    InitializeCommonEvent(0, 9005811, 11050850, 11051850, 5, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051851, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051852, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051853, 8, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051854, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051855, 5, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051856, 5, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051857, 5, 11050854);
    InitializeCommonEvent(0, 9005822, 11050850, 921600, 11052855, 11052856, 0, 11052852, 0, 0);
});

$Event(11053700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterTalkRange(X0_4, 17);
    if (0 != X4_4) {
        SetCharacterTalkRange(X4_4, 17);
    }
    EndIf(EventFlag(X8_4));
    GotoIf(L1, !EventFlag(X12_4));
    Goto(L2);
L1:
    WaitFor(EventFlag(X12_4));
    Goto(L2);
L2:
    SetCharacterTalkRange(X0_4, X16_4);
    if (0 != X4_4) {
        SetCharacterTalkRange(X4_4, X16_4);
    }
    EndEvent();
});

$Event(11053705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(11059200, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    GotoIf(L20, !EventFlag(4210));
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90102, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(11059200));
    RestartEvent();
});

$Event(11053706, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(11059200, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!((!EventFlag(4203) && (EventFlag(4210) || EventFlag(4211)))
        || (EventFlag(4203) && !EventFlag(4217) && EventFlag(118) && EventFlag(11009555)))) {
        SetNetworkconnectedEventFlagID(1040549254, OFF);
        SetNetworkconnectedEventFlagID(11009554, OFF);
        SetNetworkconnectedEventFlagID(1051569454, OFF);
        SetNetworkconnectedEventFlagID(11059304, OFF);
    } else {
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        SetCharacterTeamType(X0_4, TeamType.Disabled);
        ForceAnimationPlayback(X0_4, 930002, false, false, false);
        SetNetworkconnectedEventFlagID(1040549254, OFF);
        SetNetworkconnectedEventFlagID(11009554, OFF);
        SetNetworkconnectedEventFlagID(1051569454, OFF);
        SetNetworkconnectedEventFlagID(11059304, ON);
        SetNetworkconnectedEventFlagID(11059206, ON);
        GotoIf(L20, mainGroupAbuse);
    }
L20:
    WaitFor(EventFlag(11059200));
    RestartEvent();
});

$Event(11053707, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400500));
    EndIf(!EventFlag(9500));
    SetNetworkconnectedEventFlagID(11059305, ON);
    EndEvent();
});

$Event(11053708, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X20_4) && EventFlag(X28_4) && !AllBatchEventFlags(X12_4, X16_4));
    if (Signed(X24_4) != 0) {
        CreateAssetfollowingSFX(X0_4, 90, X24_4);
    } else {
        CreateAssetfollowingSFX(X0_4, 90, 6101);
    }
    flag = !EventFlag(X20_4) || AllBatchEventFlags(X12_4, X16_4);
    WaitFor(ActionButtonInArea(X4_4, X0_4) || flag);
    if (!flag.Passed) {
        DeleteAssetfollowingSFX(X0_4, true);
        AwardItemsIncludingClients(X8_4);
        EzstateInstructionRequest(10000, 60070, 0);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(X0_4, true);
    RestartEvent();
});

$Event(11053710, Restart, function(X0_4) {
    DisableLockOnPoint(11050850, 220);
    GotoIf(L1, EventFlag(11050858));
    ForceAnimationPlayback(11050850, 30010, true, false, false);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedThisEventSlot(OFF);
    }
    WaitFor(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedThisEventSlot(ON);
        SetNetworkconnectedEventFlagID(11050854, ON);
    }
L0:
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(11050850, 20011, false, false, false);
    DisplayBossHealthBar(Enabled, 11050850, 0, 904720003);
    EnableLockOnPoint(11050850, 220);
    //SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    WaitFor(CharacterHPValue(X0_4) <= 0);
    SetEventFlagID(11050858, ON);
    EndEvent();
L1:
    DisableCharacter(11050851);
    DisableCharacterHPBarDisplay(11050851);
    DisableCharacterAI(11050851);
    DisableCharacterGravity(11050851);
    DisableCharacterCollision(11050851);
    SetCharacterImmortality(11050851, Enabled);
    SetCharacterInvincibility(11050851, Enabled);
    SetCharacterBackreadState(11050851, false);
});

//Dummy enemies
$Event(11053711, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    DisableCharacterAI(X0_4);
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X0_4);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
});

//gideon death check
//$Event(11053712, Restart, function(X0_4) {
//    WaitFor(EventFlag(11050858));
//    DisableCharacter(11050851);
//    DisableCharacterAI(11050851);
//    DisableCharacterGravity(11050851);
//    DisableCharacterCollision(11050851);
//    SetCharacterImmortality(11050851, Enabled);
//    SetCharacterInvincibility(11050851, Enabled);
//    SetCharacterBackreadState(11050851, false);
//});

//Making sure gideon stays dead and doesnt bug the fight
$Event(11053712, Restart, function(X0_4) {
    EndIf(EventFlag(11050858) && EventFlag(11050851));
    WaitFor(EventFlag(11050851));
    SetEventFlagID(11050858, ON);
});

$Event(11053720, Restart, function() {
    SetEventFlagID(11059350, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3631));
    EndIf(EventFlag(11050800));
    EndIf(!EventFlag(35000500));
    EndIf(EventFlag(3621));
    EndIf(EventFlag(1049539212));
    EndIf(EventFlag(116));
    SetEventFlagID(11059350, ON);
    EndEvent();
});

$Event(11053730, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3947)) {
        WaitFor(EventFlag(3947));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    if (!EventFlag(3957)) {
        if (!EventFlag(11109819)) {
            WaitFor(EventFlag(71122) && EventFlag(9000));
        }
    }
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    SetNetworkconnectedEventFlagID(11109819, ON);
    SetNetworkconnectedEventFlagID(3957, ON);
    Goto(L20);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3947));
    RestartEvent();
});

$Event(11053731, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3943) || !EventFlag(3947) || EventFlag(1039409259));
    WaitFor(EntityInRadiusOfEntity(X0_4, 20000, 4, 1) && CharacterHasSpEffect(20000, 9690));
    SetNetworkconnectedEventFlagID(1039402710, ON);
    EndEvent();
});
