// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31220000, 31221950, 0, 0, 0, 5);
    InitializeEvent(0, 31222800, 0);
    InitializeEvent(0, 31222810, 0);
    InitializeEvent(0, 31222811, 0);
    InitializeEvent(0, 31222812, 0);
    InitializeEvent(0, 31222849, 0);
    InitializeEvent(0, 31222813, 31220800, 31222821);
    InitializeEvent(1, 31222813, 31220802, 31222820);
    InitializeCommonEvent(0, 900005610, 31221200, 100, 800, 0);
    InitializeEvent(0, 31222500, 0);
    InitializeCommonEvent(0, 90005646, 31220800, 31222840, 31222841, 31221840, 31222840, 5663);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 31220211, 31222304, 0, 0);
    InitializeCommonEvent(0, 90005250, 31220212, 31222304, 0, 0);
    InitializeEvent(0, 31222300, 0);
    InitializeEvent(0, 31222306, 0);
    InitializeEvent(0, 31222312, 0);
    InitializeEvent(0, 31222305, 0);
    InitializeEvent(0, 31222317, 0);
    InitializeEvent(0, 31222301, 0);
    InitializeEvent(0, 31222316, 0);
    InitializeEvent(0, 31222303, 0);
    InitializeEvent(0, 31222313, 0);
    InitializeEvent(0, 31222304, 0);
    InitializeEvent(0, 31222330, 0);
    InitializeEvent(0, 31222340, 31220400, 31222304, 1036831949);
    InitializeEvent(1, 31222340, 31220402, 31222305, 1036831949);
    InitializeEvent(2, 31222340, 31220403, 31222306, 1036831949);
});

$Event(31222300, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222300)
            && CharacterHasSpEffect(31220300, 15007)
            && CharacterDead(31220304));
    EnableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222301, Restart, function() {
    EndIf(EventFlag(31222301));
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222301)
            && CharacterHasSpEffect(31220302, 15007));
    EnableGenerator(31223301);
    SetNetworkconnectedEventFlagID(31222301, ON);
});

$Event(31222303, Restart, function() {
    EndIf(flagChrSpArea);
    flagChrSpArea = ThisEventSlot()
        || (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222303)
            && CharacterHasSpEffect(31220301, 15007));
    WaitFor(flagChrSpArea);
    EnableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222304, Restart, function() {
    EndIf(flagChrSpArea);
    flagChrSpArea = ThisEventSlot()
        || (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222302));
    WaitFor(flagChrSpArea);
    ForceAnimationPlayback(31220303, 3002, false, true, false);
    EnableGenerator(31223302);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222305, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31220304, AIStateType.Combat)
            || HasDamageType(31220304, 0, DamageType.Unspecified));
    ForceAnimationPlayback(31220304, 3002, false, true, false);
    EnableGenerator(31223304);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222306, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31220300, AIStateType.Combat)
            || HasDamageType(31220300, 0, DamageType.Unspecified));
    ForceAnimationPlayback(31220300, 3002, false, true, false);
    EnableGenerator(31223305);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222311, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220300, 0, DamageType.Unspecified) || CharacterDead(31220300));
    DisableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222312, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220300));
    ForceCharacterDeath(31220201, true);
    ForceCharacterDeath(31220211, true);
    ForceCharacterDeath(31220204, true);
    ForceCharacterDeath(31220212, true);
    ForceCharacterDeath(31220228, true);
    ForceCharacterDeath(31220213, true);
    ForceCharacterDeath(31220403, true);
    ForceCharacterDeath(31220230, true);
    DisableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222317, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220304));
    ForceCharacterDeath(31220227, true);
    ForceCharacterDeath(31220226, true);
    ForceCharacterDeath(31220200, true);
    ForceCharacterDeath(31220221, true);
    ForceCharacterDeath(31220222, true);
    ForceCharacterDeath(31220402, true);
    ForceCharacterDeath(31220229, true);
    DisableGenerator(31223304);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222314, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220301, 0, DamageType.Unspecified) || CharacterDead(31220301));
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222313, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220301));
    ForceCharacterDeath(31220210, true);
    ForceCharacterDeath(31220202, true);
    ForceCharacterDeath(31220220, true);
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222315, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220302, 0, DamageType.Unspecified) || CharacterDead(31220302));
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222316, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220302));
    ForceCharacterDeath(31220223, true);
    ForceCharacterDeath(31220224, true);
    ForceCharacterDeath(31220225, true);
    DisableGenerator(31223301);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222330, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220303));
    ForceCharacterDeath(31220400, true);
    DisableGenerator(31223302);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222340, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(X4_4));
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(X8_4);
    ForceAnimationPlayback(X0_4, 60502, false, false, false);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31222500, Restart, function() {
    if (EventFlag(31220500)) {
        DisableAsset(31221500);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 31222500));
    RequestAssetDestruction(31221500, 1);
    SetEventFlagID(31220500, ON);
});

$Event(31222520, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    DisableObjAct(X8_4, -1);
    if (EventFlag(X4_4)) {
        EnableObjAct(X8_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && !EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    EnableObjAct(X8_4, -1);
});

$Event(31222800, Restart, function() {
    EndIf(EventFlag(31220800));
    WaitFor(CharacterHPValue(31220800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31220800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31220800));
    HandleBossDefeatAndDisplayBanner(31220800, TextBannerType.EnemyFelled);
    ForceCharacterDeath(31220803, false);
    DisableCharacter(31220803);
    DisableCharacterCollision(31220803);
    SetEventFlagID(31220800, ON);
    SetEventFlagID(9248, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61248, ON);
    }
});

$Event(31222810, Restart, function() {
    if (EventFlag(31220800)) {
        DisableCharacter(31220801);
        DisableCharacterCollision(31220801);
        ForceCharacterDeath(31220801, false);
        DisableCharacter(31220800);
        DisableCharacterCollision(31220800);
        ForceCharacterDeath(31220800, false);
        DisableCharacter(31220802);
        DisableCharacterCollision(31220802);
        ForceCharacterDeath(31220802, false);
        DisableCharacter(31220803);
        DisableCharacterCollision(31220803);
        ForceCharacterDeath(31220803, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31220800);
    DisableCharacterAI(31220801);
    EnableCharacterInvincibility(31220800);
    EnableCharacterInvincibility(31220801);
    EnableCharacterInvincibility(31220802);
    flagArea = EventFlag(31222805) && InArea(10000, 31222800);
    dmg = HasDamageType(31220800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
    EnableCharacterCollision(31220801);
    SetNetworkUpdateRate(31220801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220801, 0, 903560310);
    WaitFixedTimeSeconds(1.5);
    EnableCharacterAI(31220801);
    DisableCharacterInvincibility(31220801);
    SetSpEffect(31220803, 297810);
    DisableCharacterCollision(31220803);
    SetNetworkUpdateRate(31220803, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(31222811, Restart, function() {
    EndIf(EventFlag(31220800));
    WaitFor(CharacterDead(31220801));
    DisplayBossHealthBar(Disabled, 31220801, 0, 903560310);
    SetEventFlagID(31222842, ON);
    WaitFixedTimeSeconds(5);
    EnableGenerator(31223307);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(31222820, ON);
    DisableCharacterInvincibility(31220802);
    EnableCharacterAI(31220802);
    EnableCharacterCollision(31220802);
    SetNetworkUpdateRate(31220802, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220802, 0, 903570310);
});

$Event(31222812, Restart, function() {
    EndIf(EventFlag(31220800));
    WaitFor(CharacterDead(31220802));
    DisplayBossHealthBar(Disabled, 31220802, 0, 903570310);
    WaitFixedTimeSeconds(5);
    EnableGenerator(31223308);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(31222821, ON);
    DisplayBossHealthBar(Enabled, 31220800, 0, 904140310);
    EnableCharacterAI(31220800);
    DisableCharacterInvincibility(31220800);
    EnableCharacterCollision(31220800);
    ForceAnimationPlayback(31220800, 3011, false, true, false);
    SetNetworkUpdateRate(31220800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220800, 0, 904140310);
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(31220800, 1702, false, false, false);
    SetSpEffect(31220800, 297811);
});

$Event(31222813, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(31220800));
    WaitFor(
        (EventFlag(X4_4) && !CharacterDead(X0_4))
            && !HasMultiplayerState(MultiplayerState.Singleplayer));
    ActivateMultiplayerdependantBuffs(X0_4);
    WaitFixedTimeSeconds(3);
    if (!(CharacterHasSpEffect(X0_4, 7820)
        || CharacterHasSpEffect(X0_4, 7821)
        || CharacterHasSpEffect(X0_4, 7822))) {
        RestartEvent();
    }
});

$Event(31222849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31220800, 31221800, 31222800, 31222805, 31225800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31220800, 31221800, 31222800, 31222805, 31222806, 10000);
    InitializeCommonEvent(0, 9005811, 31220800, 31221800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31220800, 356000, 31222805, 31222806, 0, 0, 0, 0);
});
