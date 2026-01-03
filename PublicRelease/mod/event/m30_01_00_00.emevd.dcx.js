// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005646, 30010800, 30012840, 30012841, 30011840, 30012840, 286);
    RegisterBonfire(73001, 30011950, 0, 0, 0, 5);
    InitializeEvent(0, 30012800, 0);
    InitializeEvent(0, 30012810, 0);
    InitializeEvent(0, 30012849, 0);
    InitializeEvent(0, 30012811, 0);
    InitializeEvent(0, 30012812, 0);
    InitializeCommonEvent(0, 90005211, 30010810, 30010, 20010, 30012800, 1065353216, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010811, 30010, 20010, 30012800, 1065353216, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010812, 30010, 20010, 30012800, 1065353216, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005920, 30010520, 30011520, 30013520);
    InitializeCommonEvent(0, 90005650, 30010540, 30011540, 30011541, 30013541, 27115);
    InitializeCommonEvent(0, 90005651, 30010540, 30011540);
    InitializeEvent(0, 30012505, 0);
    InitializeEvent(0, 30012506, 0);
    InitializeCommonEvent(0, 90005670, 30012500, 30012510, 30012511, 30011500, 30012500, 30012502, 0);
    InitializeEvent(0, 30012520, 0);
    InitializeEvent(0, 30012580, 0);
    InitializeEvent(0, 30010790, 30011520, 30010800);
    InitializeEvent(0, 30012330, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 30010200, 30004, 20004, 30012200, 0, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010201, 30002, 20002, 30012201, 1065353216, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010203, 30002, 20002, 30012203, 1065353216, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010204, 30000, 20000, 30012204, 1065353216, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010205, 30000, 20000, 30012205, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010207, 30009, 20009, 30012207, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010209, 30009, 20009, 30012209, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010321, 30000, 20000, 30012315, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30010301, 30000, 20000, 30012312, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30010302, 30000, 20000, 30012312, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30010304, 30000, 20000, 30012312, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30010305, 30000, 20000, 30012312, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010303, 30000, 20000, 30012322, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010306, 30000, 20000, 30012322, 1084227584, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010312, 30000, 20000, 30012322, 1084227584, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010308, 30000, 20000, 30012322, 1084227584, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010307, 30000, 20000, 30012322, 1084227584, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010309, 30000, 20000, 30012322, 1084227584, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010310, 30000, 20000, 30012322, 1084227584, 1080452710, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30010311, 30000, 20000, 30012322, 1084227584, 1081711002, 0, 0, 0, 0);
    InitializeEvent(0, 30012340, 30010390, 701);
});

$Event(30012330, Restart, function(X0_4, X4_4) {
    SetCharacterTeamType(1044330205, 0);
    SetCharacterTeamType(1044330206, 0);
    ForceAnimationPlayback(1044330205, 30001, true, true, true)
    ForceAnimationPlayback(1044330206, 30001, true, true, true)
    
    //WaitFor(
    //    ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
    //        || CharacterType(10000, TargetType.Alive)
    //        || CharacterType(10000, TargetType.GrayPhantom)
    //        || CharacterType(10000, TargetType.WhitePhantom))
    //        && InArea(10000, 30012301)
    //       && !CharacterDead(X0_4));
    //InvokeEnemyGenerator(X4_4);
    //RestartEvent();
});

$Event(30012340, Restart, function(X0_4, X4_4) {
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

$Event(30012910, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        EnableCharacter(X0_4);
        EnableCharacterCollision(X0_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    WaitFixedTimeSeconds(0.3);
    WarpCharacterAndCopyFloor(30010800, TargetEntityType.Area, 30012901, -1, 30010800);
    EnableCharacterAI(X0_4);
});

$Event(30012500, Default, function() {
    if (!EventFlag(30010500)) {
        chrArea &= (CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 30012500);
        WaitFor(chrArea);
        ForceAnimationPlayback(30011500, 12, false, true, false);
    }
L0:
    chrArea &= !AllPlayersInArea(30012500);
    if (!chrArea) {
        SetEventFlagID(30010500, ON);
        ForceAnimationPlayback(30011500, 20, false, true, false);
        RestartEvent();
    }
L1:
    SetEventFlagID(30010500, OFF);
    ForceAnimationPlayback(30011500, 21, false, true, false);
    RestartEvent();
});

$Event(30012505, Default, function() {
    WaitFor(EventFlag(30012510) && InArea(10000, 30012502) && CharacterHasSpEffect(10000, 4195));
    WarpAssetToCharacter(30011501, 10000, 93);
    WaitFixedTimeFrames(1);
    if (EventFlag(50)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301200, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(51)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301210, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(52)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301220, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(53)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301230, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(54)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301240, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(55)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301250, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(56)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301260, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(57)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301270, DamageTargetType.Character, 2, 0.1, 0);
    }
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(30013501);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

$Event(30012506, Default, function() {
    WaitFor(EventFlag(30012510) && InArea(10000, 30012501));
    SetSpEffect(10000, 4195);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

$Event(30012520, End, function() {
    SetEventFlagID(30010500, OFF);
    EndEvent();
});

$Event(30012580, Default, function() {
    RegisterLadder(30010580, 30010581, 30011580);
});

$Event(30010790, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    DisableObjAct(X0_4, -1);
    if (EventFlag(X4_4)) {
        EnableObjAct(X0_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && !ThisEventSlot());
    SetThisEventSlot(ON);
    EnableObjAct(X0_4, -1);
    EndEvent();
});

$Event(30012800, Restart, function() {
    EndIf(EventFlag(30010800));
    WaitFor(CharacterHPValue(30010800) <= 0);
    ForceCharacterDeath(30015800, false);
    WaitFixedTimeSeconds(4);
    PlaySE(30010800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30010800));
    HandleBossDefeatAndDisplayBanner(30010800, TextBannerType.EnemyFelled);
    SetEventFlagID(30010800, ON);
    SetEventFlagID(9201, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61201, ON);
    }
});

$Event(30012810, Restart, function() {
    if (EventFlag(30010800)) {
        DisableCharacter(30015800);
        DisableCharacterCollision(30015800);
        ForceCharacterDeath(30015800, false);
        DisableCharacter(30010813);
        DisableCharacterCollision(30010813);
        ForceCharacterDeath(30010813, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30010800);
    EnableCharacterInvincibility(30010800);
    DisableCharacter(30010813);
    DisableCharacterCollision(30010813);
    DisableCharacterAI(30010813);
    WaitFor(EventFlag(30012805) && InArea(10000, 30012800));
L2:
    EnableCharacterAI(30010800);
    DisableCharacterInvincibility(30010800);
    DisableCharacter(30010813);
    DisableCharacterCollision(30010813);
    DisableCharacterAI(30010813);
    SetNetworkUpdateRate(30010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30010800, 0, 904260306);
});

$Event(30012811, Restart, function() {
    EndIf(EventFlag(30010800));
    WaitFor(HPRatio(30010800) <= 0.5);
    ForceAnimationPlayback(30010800, 3008, false, true, false);
    SetSpEffect(30010800, 13425);
    ClearSpEffect(30010800, 5400);
    SetSpEffect(30010800, 5401);
    SetEventFlagID(30012802, ON);
});

$Event(30012812, Restart, function() {
    EndIf(EventFlag(30010800));
    WaitFor(CharacterHasSpEffect(30010800, 5401));
    WaitRandomTimeSeconds(20, 45);
    ForceAnimationPlayback(30010800, 3008, false, true, true);
    SetEventState(30012812, 0, EventEndType.Restart);
});

$Event(30012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30010800, 30011800, 30012800, 30012805, 30015800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30010800, 30011800, 30012800, 30012805, 30012806, 10000);
    InitializeCommonEvent(0, 9005811, 30010800, 30011800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30010800, 930000, 30012805, 30012806, 0, 30012802, 0, 0);
});
