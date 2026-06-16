// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1043380000, 1043381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1043381680, 100, 800, 1043388540);
    InitializeCommonEvent(0, 90005683, 62105, 1043381684, 208, 78194, 78194);
    InitializeCommonEvent(0, 90005251, 1043380260, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005460, 1043380280);
    InitializeCommonEvent(0, 90005461, 1043380280);
    InitializeCommonEvent(0, 90005462, 1043380280);
    InitializeCommonEvent(0, 90005460, 1043380280);
    InitializeCommonEvent(0, 90005300, 1043380290, 1043380290, 1043380100, 1, 0);
    $InitializeEvent(0, 1043382270);
    $InitializeEvent(1, 1043382270);
    $InitializeEvent(0, 1043383700, 1043380700, 1043370740);
    $InitializeEvent(0, 1043383701, 1043380700, 1043380701, 1043372703, 1043382701, 1043372705, 1043382702, 1043372708);
    $InitializeEvent(0, 1043383702, 1043380700);
    $InitializeEvent(0, 1043383703, 1043380700, 1043372712, 160);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1043380700, true);
});

// 雷地帯_弾丸イベント_XX -- Thunder Zone_Bullet Event_XX
$Event(1043382270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1043380270);
    WaitFor(InArea(10000, 1043382270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1043380270, 1043382271, 900, 802101000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1043380270, 1043382271, 900, 802101010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1043380270, 1043382271, 900, 802101020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1043380270, 1043382271, 900, 802101030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1043380270, 1043382271, 900, 802101040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1043380270, 1043382271, 900, 802101050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1043380270, 1043382271, 900, 802101060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1043380270, 1043382271, 900, 802101070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// チュートリアルメッセージ_バディ召喚可能範囲 -- Tutorial message_Buddy summonable range
$Event(1043382650, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 38, 0)
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
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, eventFlagId2, 1);
});

// NPC318混沌の宿主_ネリウス戦白霊_召喚解散切り替え -- NPC318 Host of Chaos_Nerius Battle Spirit_Summon and Disband Switch
$Event(1043383700, Restart, function(chrEntityId, chrEntityId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    GotoIf(L1, !EventFlag(1043372714));
    GotoIf(L2, EventFlag(1043372714));
L1:
    WaitFor(
        HasDamageType(chrEntityId2, 10000, DamageType.Unspecified)
            || HasDamageType(10000, chrEntityId2, DamageType.Unspecified));
    WaitFixedTimeSeconds(10);
    EndIf(!EventFlag(1043372714));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    SetEventFlagID(1043372717, ON);
    RestartEvent();
L2:
    WaitFor(!EventFlag(1043372714) || CharacterDead(chrEntityId));
    SetEventFlagID(1043372718, ON);
    EndEvent();
});

// NPC318混沌の宿主_召喚時ショートワープ -- NPC318 Host of Chaos_Short warp when summoning
$Event(1043383701, Restart, function(chrEntityId, chrEntityId2, areaEntityId, areaEntityId2, chrEntityId3, chrEntityId4, chrEntityId5) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableCharacter(chrEntityId2);
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    WaitFor(EventFlag(1043372717));
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterBackreadState(chrEntityId2, false);
    GotoIf(L1, InArea(10000, areaEntityId));
    GotoIf(L2, InArea(10000, areaEntityId2));
    Goto(L3);
L1:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, chrEntityId3, -1);
    Goto(L5);
L2:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, chrEntityId4, -1);
    Goto(L5);
L3:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, chrEntityId5, -1);
    Goto(L5);
L5:
    EnableCharacter(chrEntityId2);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 63010, false, false, false);
    SetSpEffect(chrEntityId, 9651);
    SetCharacterTeamType(chrEntityId, TeamType.WhitePhantom);
    DisplayBlinkingMessageWithPriority(80000, 0, false);
    EndEvent();
});

// NPC318混沌の宿主_解散時処理 -- NPC318 Host of Chaos_dissolution processing
$Event(1043383702, Restart, function(chrEntityId) {
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    WaitFor(EventFlag(1043372718));
    WaitFixedTimeFrames(1);
    GotoIf(L1, CharacterDead(chrEntityId));
    GotoIf(L2, EventFlag(1043379262));
    Goto(L3);
L1:
    DisplayBlinkingMessageWithPriority(80002, 0, false);
    EndEvent();
L2:
    SetSpEffect(chrEntityId, 18677);
    ClearCharactersAITarget(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    DisplayBlinkingMessageWithPriority(80001, 0, false);
    WaitFixedTimeSeconds(10);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId);
    EndEvent();
L3:
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    ClearCharactersAITarget(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 18677);
    DisplayBlinkingMessageWithPriority(80003, 0, false);
    WaitFixedTimeSeconds(10);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId);
    EndEvent();
});

// NPC318_混沌の宿主_ネリウス戦自動会話再生_白霊本体 -- NPC318_Host of Chaos_Nerius battle automatic conversation playback_White spirit body
$Event(1043383703, Restart, function(chrEntityId, eventFlagId, range) {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterTalkRange(chrEntityId, 17);
    WaitFixedTimeRealFrames(1);
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3625) && !EventFlag(3626));
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(!EventFlag(1043372713) && EventFlag(1043372717));
    SetCharacterTalkRange(chrEntityId, range);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    EndEvent();
});


