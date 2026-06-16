// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1044360800, 76120, 1044360950, 1044361950, 1084227584);
    InitializeEvent(0, 1044362800, 0);
    InitializeEvent(0, 1044362810, 0);
    InitializeEvent(0, 1044362849, 0);
    InitializeCommonEvent(0, 90005300, 1044360220, 1044360220, 40112, 0, 0);
    InitializeEvent(0, 1044362500, 0);
    InitializeCommonEvent(0, 90005704, 1044360700, 3461, 3460, 1044369201, 3);
    InitializeCommonEvent(0, 1044363711, 1044360700, 3461, 3462, 1044369201, 1059481190, 3460, 3463, -1);
    InitializeEvent(0, 1044363710, 1044360700);
    InitializeEvent(0, 1044363712, 1044360700);
    InitializeEvent(0, 1044363713, 0);
    InitializeEvent(0, 1044363714, 1044360700);
    InitializeCommonEvent(0, 90005709, 1044360700, 905, 603001);
    InitializeCommonEvent(0, 90005709, 1044360700, 200, 603051);
    EnableCharacterInvincibility(1044360700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044360700, true);
    SetCharacterBackreadState(1044360710, true);
    InitializeCommonEvent(0, 90005251, 1044360250, 1106247680, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044360231, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005251, 1044360234, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005251, 1044360235, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1044360211, 1044362211, 1065353216, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1044360212, 1044362211, 1065353216, 1056964608, 1701);
    InitializeCommonEvent(0, 90005261, 1044360213, 1044362211, 1065353216, 1050253722, 1701);
    InitializeCommonEvent(0, 90005261, 1044360214, 1044362211, 1065353216, 1060320051, 1701);
    InitializeCommonEvent(0, 90005261, 1044360200, 1044362200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1044360200, 30014, 20014, 1044362200, 1092616192, 0, 0, 0, 0, 0);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005421, 1044360300, 1044361301, 1044368301);
    InitializeCommonEvent(0, 90005422, 1044368301, 1044361300, 1044363301);
    InitializeCommonEvent(0, 90005424, 1044361300, 1044360302, 1044360303, 1044360300, 1044361301);
    InitializeCommonEvent(0, 90005423, 1044360302);
    InitializeCommonEvent(0, 90005423, 1044360303);
    InitializeEvent(0, 1044362300, 0);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1044360300, 1044361300, 1044361301, 1044360301, 1044360302, 1044360303, 0);
});

$Event(1044362500, Restart, function() {
    EnableAssetInvunerability(1044361500);
});

$Event(1044362300, Restart, function() {
    CreateDamagingAsset(1044361301, 1044361300, 150, 100700, DamageTargetType.Character, 3, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 200, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 201, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 202, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 203, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 204, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 205, 100701, DamageTargetType.Character, 2, 0, 10);
});

$Event(1044362650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X8_4) && !EventFlag(X4_4) && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X12_4, 1);
});

$Event(1044362651, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9120, X8_4, 1);
});

$Event(1044362652, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0)
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
    EndIf(EventFlag(X4_4));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, X8_4, 1);
});

$Event(1044362654, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    EndIf(
        PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 33210000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 34040000));
    WaitFor(
        !EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33210000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34040000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFixedTimeSeconds(1);
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9101, X4_4, 1);
});

$Event(1044363700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(X12_4, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableAsset(X8_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    if (!EventFlag(X24_4)) {
        DisableCharacter(X0_4);
        DisableCharacter(X4_4);
        DisableAsset(X8_4);
    } else {
L0:
        GotoIf(L1, EventFlag(X16_4));
        GotoIf(L2, EventFlag(X20_4));
        Goto(L20);
L1:
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        Goto(L20);
L2:
        ForceCharacterTreasure(X0_4);
        ForceCharacterTreasure(X4_4);
        DisableCharacter(X0_4);
        DisableCharacter(X4_4);
        DisableAsset(X0_4);
        DisableAsset(X4_4);
        DisableAsset(X8_4);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X8_4, true);
        Goto(L20);
    }
L20:
    WaitFor(EventFlag(X12_4));
    RestartEvent();
});

$Event(1044363701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X0_4));
    if (!EventFlag(X4_4)) {
        BatchSetNetworkconnectedEventFlags(X12_4, X16_4, OFF);
        SetNetworkconnectedEventFlagID(X8_4, ON);
        SetNetworkconnectedEventFlagID(X12_4, ON);
        EndEvent();
    }
    EndIf(EventFlag(X8_4));
    BatchSetNetworkconnectedEventFlags(X12_4, X16_4, OFF);
    RandomlySetEventFlagInRange(X12_4, X16_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, ON);
});

$Event(1044363702, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EventFlag(X8_4) && EventFlag(X20_4));
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X8_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X12_4, ON);
});

$Event(1044363710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3460)) {
            SetEventFlagID(1041339253, OFF);
        }
    }
L19:
    if (!(EventFlag(3465) && !EventFlag(1044369231))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3465) && !EventFlag(1044369231));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3460));
    GotoIf(L2, EventFlag(3461));
    GotoIf(L4, EventFlag(3463));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90105, false, false, false);
    DisableCharacterInvincibility(X0_4);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3465) && !EventFlag(1044369231)));
    RestartEvent();
});

$Event(1044363711, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    SetEventFlagID(X12_4, OFF);
    WaitFor(
        !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && (((HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 40000, DamageType.Unspecified))
                && HPRatio(X0_4) < X16_4)
                || EventFlag(X12_4)));
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    if (Signed(1) != X28_4) {
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlagID(X4_4, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlagID(X8_4, ON);
    }
L9:
    SaveRequest();
});

$Event(1044363712, Restart, function(X0_4) {
    EndIf(EventFlag(3461));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 3461);
    ForceAnimationPlayback(X0_4, 90207, false, false, false);
    EndEvent();
});

$Event(1044363713, Restart, function() {
    if (!(EventFlag(1044369236) && EventFlag(1044369230))) {
        WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 100500, 100749) >= 3);
        SetNetworkconnectedEventFlagID(1044369237, ON);
        WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 100500, 100749) >= 6);
        SetNetworkconnectedEventFlagID(1044369235, ON);
    }
L20:
    EndEvent();
});

$Event(1044363714, Default, function(X0_4) {
    EndIf(!EventFlag(3465));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1044369231) && EntityInRadiusOfEntity(X0_4, 20000, 50, 1));
    SetNetworkconnectedEventFlagID(3478, ON);
    EndEvent();
});

$Event(1044362800, Restart, function() {
    EndIf(EventFlag(1044360800));
    WaitFor(CharacterHPValue(1044360800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1044360800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1044360800));
    HandleBossDefeatAndDisplayBanner(1044360800, TextBannerType.EnemyFelled);
    EnableObjAct(1044361560, -1);
    SetEventFlagID(1044360800, ON);
});

$Event(1044362810, Restart, function() {
    if (EventFlag(1044360800)) {
        DisableCharacter(1044360800);
        DisableCharacterCollision(1044360800);
        ForceCharacterDeath(1044360800, false);
        EndEvent();
    }
L0:
    EnableCharacterInvincibility(1044360800);
    DisableCharacterAI(1044360800);
    WaitFor(EventFlag(1044362805) && InArea(10000, 1044362800));
L2:
    DisableCharacterInvincibility(1044360800);
    EnableCharacterAI(1044360800);
    SetNetworkUpdateRate(1044360800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1044360800, 0, 904340540);
    DisableObjAct(1044361560, -1);
});

$Event(1044362849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1044360800, 1044361800, 1044362800, 1044362805, 1044365800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1044360800, 1044361800, 1044362800, 1044362805, 1044362806, 10000);
    InitializeCommonEvent(0, 9005811, 1044360800, 1044361800, 3, 0);
    InitializeCommonEvent(0, 9005822, 1044360800, 920900, 1044362805, 1044362806, 0, 1044362802, 0, 0);
    InitializeCommonEvent(0, 9005812, 1044360800, 1044361801, 3, 0, 0);
});
