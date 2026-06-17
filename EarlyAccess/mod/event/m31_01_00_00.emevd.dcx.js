// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31010000, 31011950, 0, 0, 0, 5);
    InitializeEvent(0, 31012800, 0);
    InitializeEvent(0, 31012810, 0);
    InitializeEvent(0, 31012849, 0);
    InitializeEvent(0, 31012811, 0);
    InitializeEvent(0, 31012830, 0);
    InitializeCommonEvent(0, 90005646, 31010800, 31012840, 31012841, 31011840, 31012840, 287);
    InitializeEvent(0, 31012500, 0);
    InitializeCommonEvent(0, 900005610, 31011200, 100, 800, 0);
    InitializeEvent(0, 31012501, 32080101);
    InitializeEvent(1, 31012501, 32080102);
    InitializeEvent(2, 31012501, 32080103);
    //collision
    InitializeEvent(0, 31012600, 0);
});

$Event(50, Default, function() {
    //InitializeCommonEvent(0, 90005261, 31010201, 31012201, 1073741824, 0, 0);
    //InitializeCommonEvent(0, 90005261, 31010202, 31012201, 1073741824, 0, 0);
    //InitializeEvent(0, 31012200, 31010201, 31013201);
    //InitializeEvent(1, 31012200, 31010202, 31013202);
    //InitializeEvent(0, 31012230, 31010201);
    //InitializeEvent(1, 31012230, 31010202);
    //InitializeEvent(0, 31012207, 31010207, 31012207, 1073741824, 1088421888, 0);
    //InitializeEvent(1, 31012207, 31010208, 31012207, 1073741824, 1092616192, 0);
    //InitializeEvent(2, 31012207, 31010209, 31012207, 1073741824, 1097859072, 0);
    //InitializeCommonEvent(0, 90005261, 31010221, 31012221, 1073741824, 0, 0);
    //InitializeCommonEvent(0, 90005261, 31010222, 31012221, 1073741824, 0, 0);
    //InitializeEvent(3, 31012207, 31010300, 31012207, 1077936128, 1077936128, 0);
    //InitializeEvent(0, 31012220, 31010207);
    //InitializeEvent(1, 31012220, 31010208);
    //InitializeEvent(2, 31012220, 31010209);
    //InitializeEvent(3, 31012220, 31010300);
    //no_damage_fall
    InitializeCommonEvent(0, 90005690, 31012208);
    InitializeCommonEvent(0, 90005691, 31012208);
    //kill_boxes
    InitializeCommonEvent(0, 9005999, 31012209); //shaft_kill_box
    InitializeCommonEvent(0, 9005999, 31012210); //cave_kill_box
    //shortcut_door
    InitializeCommonEvent(0, 90005511, 31010560, 31011550, 31013560, 257013, 0);
    InitializeCommonEvent(0, 90005512, 31010560, 31012550, 31012551);
    //pot_drop_loot
    InitializeCommonEvent(0, 90005639, 40001418, 31014302, 31014301, 31014300, 1073741824);
    //enemies
    InitializeCommonEvent(0, 90005250, 31010014, 31012211, 0, -1);
    InitializeCommonEvent(1, 90005250, 31010015, 31012211, 0, -1);
    InitializeCommonEvent(2, 90005250, 31010016, 31012211, 0, -1);
    InitializeCommonEvent(3, 90005250, 31010017, 31012211, 0, -1);
    InitializeCommonEvent(4, 90005250, 31010018, 31012211, 0, -1);
    InitializeCommonEvent(0, 90005250, 31010010, 31012213, 0, -1);
    InitializeCommonEvent(1, 90005250, 31010011, 31012213, 0, -1);
    InitializeCommonEvent(0, 90005251, 31010005, 1082130432, 0, 3000);
    //One time kill astel
    InitializeCommonEvent(0, 90005300, 31010700, 31010700, 31010120, 1080033280, 0);
    //Followers stop idle
    InitializeEvent(0, 31012502, 31010300);
    InitializeEvent(0, 31012465, 0);
});

/*
ID Events Flags in Use
31018560 -- shortcut_door
31018601 -- chest
*/

$Event(31012465, Restart, function() {
    WaitFor(ActionButtonInArea(9100, 31012468));
    RotateCharacter(10000, 31012467, -1, false);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 31012466, -1);
    WaitFixedTimeSeconds(0.02);
    RotateCharacter(10000, 31012467, 62000, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(31012600, Restart, function() {
    //shaft
    DisableMapPart(31014000); //wall_collision_01
    DisableMapPart(31014001); //wall_collision_02
    DisableMapPart(31014002); //wall_collision_03
    DisableMapPart(31014003); //wall_collision_04
    DisableMapPart(31014004); //wall_collision_05
    DisableMapPart(31014005); //wall_collision_06
    //lobby
    DisableHit(31014006); //entrance_roof_collision_01
    DisableHit(31014007); //entrance_roof_collision_02
    //hub
    DisableMapPart(31014301); //pot_drop_loot_rock
    //sewers
    RegisterLadder(31010008,31010009,31014008); //ladder
    //cave
    EnableAssetInvunerability(31014009); //rope
    //boss_room
    DisableHit(31014010); //boss_room_curtain
    EnableAssetInvunerability(31014011); //fence
    EnableAssetInvunerability(31014012); //support_beam_01
    EnableAssetInvunerability(31014013); //support_beam_02
    EnableAssetInvunerability(31014014); //support_beam_03
    EnableAssetInvunerability(31014015); //support_beam_04
    EnableAssetInvunerability(31014016); //support_beam_05
    EnableAssetInvunerability(31014017); //support_beam_06
    EnableAssetInvunerability(31014018); //rope_01
    EnableAssetInvunerability(31014019); //rope_02
});

$Event(31012500, Restart, function() {
    if (EventFlag(31010500)) {
        DisableAsset(31011500);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 31012500));
    RequestAssetDestruction(31011500, 1);
    SetEventFlagID(31010500, ON);
});

$Event(31012501, Restart, function(X0_4) {
    CreateAssetfollowingSFX(X0_4, 201, 529984);
    CreateAssetfollowingSFX(X0_4, 201, 800500);
    
    if (EventFlag(31010800)) {
        SetEventFlagID(31010801, ON);
    }
});

$Event(31012502, Restart, function(X0_4) {
    if (!EventFlag(31010700)) {
        ForceAnimationPlayback(31010013, 700, false, false, false);
        ForceAnimationPlayback(31010012, 700, false, false, false);
        ForceAnimationPlayback(31010011, 700, false, false, false);
        ForceAnimationPlayback(31010010, 700, false, false, false);
    }
});

/*
$Event(31012200, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31010207, AIStateType.Combat)
            || CharacterAIState(31010208, AIStateType.Combat)
            || CharacterAIState(31010209, AIStateType.Combat)
            || CharacterAIState(31010300, AIStateType.Combat));
    EnableCharacterAI(X0_4);
    SetSpEffect(X0_4, 5000);
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    SetNetworkconnectedThisEventSlot(ON);
});
*/

/*
$Event(31012207, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4);
    area2 = area || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = area2 && chrSp;
    dmg = HasDamageType(X0_4, 0, DamageType.Unspecified);
    WaitFor(
        CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || dmg
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});
*/

$Event(31012220, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, 1.5, 1) && chrSp;
    WaitFor(
        CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    EnableCharacterAI(X0_4);
});

/*
$Event(31012230, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, 7, 1))
            || HasDamageType(31010201, 0, DamageType.Unspecified)
            || HasDamageType(31010202, 0, DamageType.Unspecified));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});
*/

$Event(31012800, Restart, function() {
    EndIf(EventFlag(31010800));
    WaitFor(CharacterHPValue(31010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31010800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31010800));
    HandleBossDefeatAndDisplayBanner(31010800, TextBannerType.EnemyFelled);
    SetEventFlagID(31010800, ON);
    SetEventFlagID(9231, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61231, ON);
    }
});

$Event(31012810, Restart, function() {
    if (EventFlag(31010800)) {
        DisableCharacter(31010800);
        DisableCharacterCollision(31010800);
        ForceCharacterDeath(31010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31010800);
    EnableCharacterInvincibility(31010800);
    ForceAnimationPlayback(31010800, 30002, false, false, false);
    if (!EventFlag(31010801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 31012801))
                || HasDamageType(31010800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(31010801, ON);
    } else {
L1:
        WaitFor(EventFlag(31012805) && InArea(10000, 31012800));
    }
L2:
    EnableCharacterAI(31010800);
    DisableCharacterInvincibility(31010800);
    ForceAnimationPlayback(31010800, 20002, false, false, false);
    SetNetworkUpdateRate(31010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31010800, 0, 904630315);
});

$Event(31012811, Restart, function() {
    EndIf(EventFlag(31010800));
    WaitFor(HPRatio(31010800) <= 0.6);
    SetEventFlagID(31012802, ON);
});

$Event(31012830, Restart, function() {
    EndIf(EventFlag(31010801));
    SetSpEffect(31010100, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 31010801);
    SetSpEffect(31010100, 9532);
});

$Event(31012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31010800, 31011800, 31012800, 31012805, 31015800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31010800, 31011800, 31012800, 31012805, 31012806, 10000);
    InitializeCommonEvent(0, 9005811, 31010800, 31011800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31010800, 931000, 31012805, 31012806, 0, 31012802, 0, 0);
});
