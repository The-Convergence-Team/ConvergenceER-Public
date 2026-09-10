// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.6.1
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005616, 530170, 1045392700);
    $InitializeEvent(0, 1045392281, 1045390250, 1045392280, 1045390281);
    $InitializeEvent(1, 1045392281, 1045390251, 1045392280, 1045390281);
    $InitializeEvent(2, 1045392281, 1045390252, 1045392280, 1045390281);
    $InitializeEvent(3, 1045392281, 1045390253, 1045392280, 1045390281);
    $InitializeEvent(4, 1045392281, 1045390254, 1045392280, 1045390281);
    $InitializeEvent(5, 1045392281, 1045390255, 1045392280, 1045390281);
    $InitializeEvent(6, 1045392281, 1045390256, 1045392280, 1045390281);
    $InitializeEvent(7, 1045392281, 1045390257, 1045392280, 1045390281);
    $InitializeEvent(8, 1045392281, 1045390258, 1045392280, 1045390281);
    $InitializeEvent(0, 1045392280, 1045395280, 1045392280);
    InitializeCommonEvent(0, 90005620, 1045390570, 1045391570, 1045391571, 0, 1045392570, 1045392571, 1045392572);
    InitializeCommonEvent(0, 90005621, 1045390570, 1045391573);
    $InitializeEvent(0, 1045392341, 1045390800, 1045393240, 1045393241, 1045393242, 1045393230, 1045393231, 1045393232, 15300, 15310, 15311, 15312);
    $InitializeEvent(0, 1045392342, 1045390800, 1045390800, 15302, 1045392343, 1045390350, 15310, 15311, 15312, 1045392343, 1045392344, 1045392345, 1045390351);
    $InitializeEvent(0, 1045392343, 1045390800, 1045392340, 1045392341, 1045392342, 15310, 15311, 15312);
    $InitializeEvent(0, 1045392345, 1045390800, 1045390800, 1045395230);
    $InitializeEvent(0, 1045392346, 1045390800, 1045392810);
    InitializeCommonEvent(0, 90005870, 1045390800, 904950600, 24);
    InitializeCommonEvent(0, 90005860, 1045390800, 0, 1045390800, 0, 30170, 0);
    InitializeCommonEvent(0, 90005704, 1045390700, 4041, 4040, 1044399201, 3);
    InitializeCommonEvent(0, 90005703, 1045390700, 4041, 4042, 1044399201, 4041, 4040, 4043, -1);
    InitializeCommonEvent(0, 90005702, 1045390700, 4043, 4040, 4043);
    $InitializeEvent(0, 1045390700, 1045390700);
    $InitializeEvent(0, 1045390701);
    InitializeCommonEvent(0, 90005775, 81463900, 1045399206, -1082130432);
    $InitializeCommonEvent(0, 900005590, 6953, 1045391610, 0); //Idus Sword Tarnished Edition Flag Check
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1045390700, true);
    $InitializeEvent(0, 1045392282);
});

// オオカミVSルーンベア_交戦イベント -- Wolf VS Rune Bear_Battle Event
$Event(1045392280, Restart, function(chrEntityId, areaEntityId) {
    ClearSpEffect(chrEntityId, 4800);
    ClearSpEffect(chrEntityId, 5654);
    SetSpEffect(chrEntityId, 4802);
    EndIf(EventFlag(1045392280));
    SetSpEffect(chrEntityId, 4800);
    SetSpEffect(chrEntityId, 5654);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                || HasDamageType(chrEntityId, 35000, DamageType.Unspecified)
                || HasDamageType(35000, chrEntityId, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, chrEntityId, 10, 1)
                || EntityInRadiusOfEntity(35000, chrEntityId, 10, 1)
                || InArea(10000, areaEntityId)
                || InArea(35000, areaEntityId)));
    SetNetworkconnectedEventFlagID(1045392280, ON);
    ClearSpEffect(chrEntityId, 4800);
    ClearSpEffect(chrEntityId, 5654);
});

// ストームオオカミ出現_XX -- Storm wolf appears_XX
$Event(1045392281, Restart, function(chrEntityId, areaEntityId, chrEntityId2) {
    EndIf(CharacterDead(chrEntityId));
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    DisableCharacter(chrEntityId);
    CreateBulletOwner(chrEntityId2);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp = InArea(10000, areaEntityId) && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    PlaySE(areaEntityId, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    if (!(!InArea(10000, areaEntityId)
        && (CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom)))) {
        WaitRandomTimeSeconds(0, 0.5);
        ShootBullet(chrEntityId2, 10000, 900, 100920, 0, 0, 0);
    }
L0:
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    SetSpEffect(chrEntityId, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(chrEntityId, 8090);
});

// ルーンベア滝_オオカミ死体化 -- Runebear Falls_Wolf Corpse
$Event(1045392282, Restart, function() {
    ForceCharacterTreasure(1045395282);
});

// 夜の王の眷属土葬スケルトン呼び -- Night King's Heir Burial Skeleton Call
$Event(1045392341, Restart, function(eventFlagId, generatorEntityId, generatorEntityId2, generatorEntityId3, generatorEntityId4, generatorEntityId5, generatorEntityId6, spEffectId, spEffectId2, spEffectId3, spEffectId4) {
    if (EventFlag(1045390800)) {
        DisableGenerator(generatorEntityId);
        DisableGenerator(generatorEntityId2);
        DisableGenerator(generatorEntityId3);
        DisableGenerator(generatorEntityId4);
        DisableGenerator(generatorEntityId5);
        DisableGenerator(generatorEntityId6);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasSpEffect(eventFlagId, spEffectId) && !EventFlag(eventFlagId));
    if (CharacterHasSpEffect(eventFlagId, spEffectId2)) {
        EnableGenerator(generatorEntityId);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
    if (CharacterHasSpEffect(eventFlagId, spEffectId3)) {
        EnableGenerator(generatorEntityId2);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
    if (CharacterHasSpEffect(eventFlagId, spEffectId4)) {
        EnableGenerator(generatorEntityId3);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
    WaitFixedTimeSeconds(1);
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
    DisableGenerator(generatorEntityId3);
    DisableGenerator(generatorEntityId4);
    DisableGenerator(generatorEntityId5);
    DisableGenerator(generatorEntityId6);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 夜の王の眷属ワープ処理 -- Night King's Heir Warp Process
$Event(1045392342, Restart, function(chrEntityId, eventFlagId, spEffectId, entityId, eventFlagId2, spEffectId2, spEffectId3, spEffectId4, entityId2, entityId3, entityId4, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId3, OFF);
    RandomlySetEventFlagInRange(eventFlagId2, eventFlagId3, ON);
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, spEffectId2));
    GotoIf(L2, CharacterHasSpEffect(chrEntityId, spEffectId3));
    GotoIf(L3, CharacterHasSpEffect(chrEntityId, spEffectId4));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId, -1, chrEntityId);
    Goto(L0);
L1:
    GotoIf(S0, EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId3, -1, chrEntityId);
    Goto(L0);
S0:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId4, -1, chrEntityId);
    Goto(L0);
L2:
    GotoIf(S1, EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId2, -1, chrEntityId);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId4, -1, chrEntityId);
    Goto(L0);
L3:
    GotoIf(S2, EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId2, -1, chrEntityId);
    Goto(L0);
S2:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, entityId3, -1, chrEntityId);
    Goto(L0);
L0:
    ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// 夜の王の眷属領域検索 -- Night King's Heir Area Search
$Event(1045392343, Restart, function(chrEntityId, areaEntityId, areaEntityId2, areaEntityId3, spEffectId, spEffectId2, spEffectId3) {
    EndIf(EventFlag(1045390800));
    area = InArea(chrEntityId, areaEntityId);
    area2 = InArea(chrEntityId, areaEntityId2);
    area3 = InArea(chrEntityId, areaEntityId3);
    WaitFor(area || area2 || area3);
    if (area.Passed) {
        SetSpEffect(chrEntityId, spEffectId);
    }
L2:
    if (area2.Passed) {
        SetSpEffect(chrEntityId, spEffectId2);
    }
L3:
    if (area3.Passed) {
        SetSpEffect(chrEntityId, spEffectId3);
    }
L4:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 夜の王の眷属死亡時イベント -- Night King's Follower Death Event
$Event(1045392345, Restart, function(eventFlagId, chrEntityId, chrEntityId2) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(mainGroupAbuse);
    ForceCharacterDeath(chrEntityId2, false);
    DisableGenerator(1045393230);
    DisableGenerator(1045393231);
    DisableGenerator(1045393232);
    DisableGenerator(1045393240);
    DisableGenerator(1045393241);
    DisableGenerator(1045393242);
    WaitFixedTimeSeconds(2);
    ForceCharacterDeath(chrEntityId2, false);
    WaitFixedTimeSeconds(7);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    EndEvent();
});

// 夜の王の眷属_ターゲットクリアイベント -- Heir of the Night King_Target Clear Event
$Event(1045392346, Restart, function(chrEntityId, areaEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(1045390800));
    WaitFor(CharacterTargetedBy(chrEntityId, 20000) && !InArea(20000, areaEntityId));
    ClearCharactersAITarget(chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// NPC319ダヴィド_NPC初期化イベント -- NPC319 David_NPC initialization event
$Event(1045390700, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4040)) {
            SetEventFlagID(1044399202, OFF);
        }
    }
L19:
    if (!EventFlag(4046)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(4046));
        RestartEvent();
    }
L6:
    GotoIf(L0, EventFlag(4040));
    GotoIf(L1, EventFlag(4041));
    GotoIf(L3, EventFlag(4043));
L0:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90105, false, false, false);
    Goto(L20);
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4046));
    RestartEvent();
});

// NPC319ダヴィド_ボス撃破時リアルタイム遷移 -- NPC319 David_Real-time transition when defeating the boss
$Event(1045390701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045390800));
    WaitFor(EventFlag(1045390800));
    EndIf(!EventFlag(4045));
    SetEventFlagID(4058, ON);
});


