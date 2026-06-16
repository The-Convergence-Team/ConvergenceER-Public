// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31150000, 31151950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005250, 31155800, 31152500, 0, 0);
    InitializeEvent(0, 31152800, 0);
    InitializeEvent(0, 31152810, 0);
    InitializeEvent(0, 31152820, 31150800);
    InitializeEvent(1, 31152820, 31150801);
    InitializeEvent(0, 31152849, 0);
    InitializeEvent(0, 31152816, 0);
    InitializeEvent(0, 31152830, 31150815, 31150100);
    InitializeEvent(0, 31152811, 0);
    InitializeCommonEvent(0, 90005780, 31150800, 31152160, 31152161, 31150710, 20, 31152701, 31159250, 1, 0);
    InitializeCommonEvent(0, 90005781, 31150800, 31152160, 31152161, 31150710);
    InitializeEvent(0, 31152825, 31152160, 31152805, 31150710, 31152500, 31152809, 0);
    InitializeCommonEvent(0, 90005646, 31150800, 31152840, 31152841, 31151840, 31152840, 3871);
    InitializeCommonEvent(0, 90005702, 31150700, 3943, 3940, 3944);
    InitializeEvent(0, 31153700, 31150700);
    InitializeEvent(0, 31153701, 1106247680);
    InitializeEvent(0, 31153710, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(31150700, true);
    InitializeCommonEvent(0, 90005250, 31150800, 31152800, 0, -1);
    InitializeCommonEvent(0, 90005250, 31150801, 31152800, 0, -1);
    InitializeCommonEvent(0, 90005251, 31150213, 1088421888, 0, 0);
    InitializeCommonEvent(0, 90005211, 31150217, 30000, 20000, 31152217, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31150230, 30001, 20001, 31152217, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31150219, 31152219, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 31150220, 31152219, 1073741824, 0, 0);
    InitializeEvent(0, 31152570, 0);
});

$Event(31152570, Restart, function() {
    WaitFixedTimeRealFrames(1);
    EndIf(EventFlag(31152570));
    DisableAsset(31151700);
    DeleteAssetfollowingSFX(31151700, true);
    if (EventFlag(3946)) {
        EnableAsset(31151700);
    }
});

$Event(31152650, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    SetEventFlagID(700690, ON);
});

$Event(31152800, Restart, function() {
    EndIf(EventFlag(31150800));
    WaitFor(CharacterDead(31150800) && CharacterDead(31150801));
    WaitFixedTimeSeconds(2);
    PlaySE(31150800, SoundType.SFX, 888880000);
    TriggerAISound(4132, 31152810, TargetEntityType.Area);
    TriggerAISound(4132, 31152811, TargetEntityType.Area);
    HandleBossDefeatAndDisplayBanner(31150800, TextBannerType.EnemyFelled);
    SetEventFlagID(31150800, ON);
    SetEventFlagID(9234, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61234, ON);
    }
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(20340);
    EndEvent();
});

$Event(31152810, Restart, function() {
    if (EventFlag(31150800)) {
        DisableCharacter(31150800);
        DisableCharacterCollision(31150800);
        ForceCharacterDeath(31150800, false);
        ForceCharacterDeath(31155800, false);
        DisableCharacter(31150801);
        DisableCharacterCollision(31150801);
        ForceCharacterDeath(31150801, false);
        EndEvent();
    }
L0:
    if (!EventFlag(31150815)) {
        DisableCharacter(31150800);
        EnableCharacterInvincibility(31150800);
        EnableCharacterInvincibility(31150801);
        onlineAreaChrFlag &= PlayerIsInOwnWorld()
            && InArea(10000, 31152800)
            && !CharacterDead(31150800)
            && CharacterBackreadStatus(31150800);
        WaitFor(
            HasDamageType(31150800, 10000, DamageType.Unspecified)
                || HasDamageType(31150801, 10000, DamageType.Unspecified)
                || onlineAreaChrFlag
                || (PlayerIsInOwnWorld()
                    && InArea(10000, 31152800)
                    && !CharacterDead(31150801)
                    && CharacterBackreadStatus(31150801)));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(31150815, ON);
        }
        EnableCharacter(31150800);
        DisableCharacterInvincibility(31150800);
        DisableCharacterInvincibility(31150801);
        EndEvent();
    }
L1:
    onlineAreaChrFlag &= EventFlag(31152805) && InArea(10000, 31152800);
    dmgOnlineAreaChrFlag = HasDamageType(31150800, 10000, DamageType.Unspecified);
    WaitFor(onlineAreaChrFlag);
    SetNetworkUpdateRate(31150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150800, 0, 904120310);
    SetNetworkUpdateRate(31150801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150801, 1, 904120311);
    SetEventFlagID(31152815, ON);
    SetNetworkconnectedEventFlagID(31152805, ON);
    SendInvadingPhantomsHome(0);
    ClearSpEffect(31155200, 8081);
});

$Event(31152816, Restart, function() {
    EndIf(EventFlag(31150815) || EventFlag(31150800));
    WaitFor(
        CharacterAIState(31150801, AIStateType.Combat)
            || CharacterAIState(31150800, AIStateType.Combat));
    SetNetworkUpdateRate(31150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150800, 0, 904120310);
    SetNetworkUpdateRate(31150801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150801, 1, 904120311);
    SetEventFlagID(31152815, ON);
    ClearSpEffect(31155200, 8081);
    SetCharacterAIId(0, 0);
});

$Event(31152811, Restart, function() {
    EndIf(EventFlag(31150800));
    WaitFor(CharacterDead(31150800) || CharacterDead(31150801));
    SetEventFlagID(31152842, ON);
});

$Event(31152820, Restart, function(X0_4) {
    EndIf(EventFlag(31150800));
    WaitFor(CharacterHasSpEffect(X0_4, 4306));
    SetSpEffect(X0_4, 4305);
});

$Event(31152825, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X0_4) && EventFlag(X4_4));
    DisableHit(31151835);
    RequestCharacterAICommand(X8_4, 10, 0);
    RequestCharacterAIReplan(X8_4);
    SetEventPoint(X8_4, X16_4, 0);
    time = ElapsedSeconds(4);
    WaitFor(time || InArea(X8_4, X16_4));
    RestartIf(time.Passed);
    if (Signed(X20_4) != 0) {
        RotateCharacter(X8_4, X12_4, X20_4, true);
    } else {
        RotateCharacter(X8_4, X12_4, 60060, true);
    }
    time2 = ElapsedSeconds(3);
    WaitFor(time2 || InArea(X8_4, X4_4));
    RestartIf(time2.Passed);
    RequestCharacterAICommand(X8_4, -1, 0);
    RequestCharacterAIReplan(X8_4);
    SetNetworkUpdateRate(X8_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(2);
    EnableHit(31151835);
});

$Event(31152830, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    SetSpEffect(X4_4, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    SetSpEffect(X4_4, 9532);
});

$Event(31152849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31150800, 31151800, 31152804, 31152805, 31155800, 10000, 31150815, 31152500);
    InitializeCommonEvent(0, 9005801, 31150800, 31151800, 31152804, 31152805, 31152806, 10000);
    InitializeCommonEvent(0, 9005811, 31150800, 31151800, 3, 31150815);
    InitializeCommonEvent(0, 9005812, 31150800, 31151801, 3, 31150815, 806760);
    InitializeCommonEvent(0, 9005822, 31150800, 931000, 31152805, 31152806, 31152815, 31152842, 0, 0);
});

$Event(31153700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(31159200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    GotoIf(L20, !EventFlag(3946));
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 930020, false, false, false);
    GotoIf(L20, mainGroupAbuse);
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
    WaitFor(EventFlag(31159200));
    RestartEvent();
});

$Event(31153701, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3946));
    EndIf(EventFlag(31159205));
    WaitFor(EventFlag(31152700));
    WaitFixedTimeSeconds(X0_4);
    SetEventFlagID(31152700, OFF);
    RestartEvent();
});

$Event(31153710, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(31159250, OFF);
    EndIf(EventFlag(31150800));
    EndIf(EventFlag(7602));
    SetEventFlagID(31159250, ON);
    EndEvent();
});
