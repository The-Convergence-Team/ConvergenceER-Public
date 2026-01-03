// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32110000, 32111950, 0, 0, 0, 5);
    InitializeEvent(0, 32112800, 0);
    InitializeEvent(0, 32112810, 0);
    InitializeEvent(0, 32112811, 0);
    InitializeEvent(0, 32112849, 0);
    InitializeEvent(1, 32112820, 32110801, 32111821);
    InitializeEvent(2, 32112820, 32110802, 32111822);
    InitializeEvent(3, 32112820, 32110803, 32111823);
    InitializeEvent(4, 32112820, 32110804, 32111824);
    InitializeEvent(5, 32112820, 32110805, 32111825);
    InitializeEvent(6, 32112820, 32110806, 32111826);
    InitializeEvent(7, 32112820, 32110807, 32111827);
    InitializeEvent(8, 32112820, 32110808, 32111828);
    InitializeEvent(1, 32112830, 32110801);
    InitializeEvent(2, 32112830, 32110802);
    InitializeEvent(3, 32112830, 32110803);
    InitializeEvent(4, 32112830, 32110804);
    InitializeEvent(5, 32112830, 32110805);
    InitializeEvent(6, 32112830, 32110806);
    InitializeEvent(7, 32112830, 32110807);
    InitializeEvent(8, 32112830, 32110808);
    InitializeEvent(0, 32112510, 0);
    InitializeCommonEvent(0, 90005501, 32110510, 32110511, 0, 32111510, 32111511, 32111512, 32110512);
    InitializeEvent(0, 32112580, 0);
    InitializeCommonEvent(0, 90005511, 32110560, 32111550, 32113560, 257013, 0);
    InitializeCommonEvent(0, 90005512, 32110560, 32112550, 32112551);
    InitializeCommonEvent(0, 90005646, 32110800, 32112840, 32112841, 32111840, 32112840, 2848);
    InitializeCommonEvent(0, 900005610, 32111680, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32110519, 0);
    InitializeCommonEvent(0, 90005200, 32110200, 30007, 20007, 32112200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110201, 30007, 20007, 32112200, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110205, 30007, 20007, 32112205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110206, 30007, 20007, 32112206, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32110206, 32112206, 0, -1);
    InitializeCommonEvent(0, 90005200, 32110207, 30007, 20007, 32112206, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110208, 30007, 20007, 32112208, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32110208, 32112208, 0, -1);
    InitializeCommonEvent(0, 90005200, 32110209, 30007, 20007, 32112209, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110210, 30007, 20007, 32112209, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32110210, 32112209, 0, -1);
    InitializeCommonEvent(0, 90005201, 32110211, 30006, 20006, 1084227584, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005200, 32110215, 30007, 20007, 32112215, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32110215, 32112215, 0, -1);
    InitializeCommonEvent(0, 90005200, 32110216, 30007, 20007, 32112216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32110300, 32112300, 0, -1);
    
    // NPC
    InitializeCommonEvent(0, 90005250, 32110301, 32112301, 0, -1);
    InitializeCommonEvent(0, 90005300, 32110301, 32110301, 108900, 0, 0);
});

$Event(32112510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32110510, 32110511, 0, 32111510, 32111511, 32113511, 32111512, 32113512, 32112511, 32112512, 32110512, 32110513, 0);
});

$Event(32110519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32110510, ON);
    SetThisEventSlot(ON);
});

$Event(32112580, Default, function() {
    RegisterLadder(32110580, 32110581, 32111580);
    RegisterLadder(32110582, 32110583, 32111582);
    RegisterLadder(32110584, 32110585, 32111584);
});

$Event(32112800, Restart, function() {
    EndIf(EventFlag(32110800));
    WaitFor(CharacterHPValue(32110800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32110800));
    HandleBossDefeatAndDisplayBanner(32110800, TextBannerType.EnemyFelled);
    SetEventFlagID(32110800, ON);
    SetEventFlagID(9268, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61268, ON);
    }
});

$Event(32112810, Restart, function() {
    if (EventFlag(32110800)) {
        DisableCharacter(32110800);
        DisableCharacterCollision(32110800);
        ForceCharacterDeath(32110800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32110800);
    EnableCharacterInvincibility(32110800);
    SetCharacterEventTarget(32110800, 32110810);
    EnableCharacterDefaultBackread(32110810);
    if (!EventFlag(32110801)) {
        DisableCharacter(32110800);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32112801))
                || HasDamageType(32110800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(32110801, ON);
        EnableCharacter(32110800);
        ForceAnimationPlayback(32110800, 20016, false, false, false);
    } else {
L1:
        WaitFor(EventFlag(32112805) && InArea(10000, 32112800));
    }
L2:
    EnableCharacterAI(32110800);
    DisableCharacterInvincibility(32110800);
    SetNetworkUpdateRate(32110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32110800, 0, 904620320);
});

$Event(32112811, Restart, function() {
    EndIf(EventFlag(32110800));
    WaitFor(HPRatio(32110800) <= 0.6);
    SetEventFlagID(32112802, ON);
});

$Event(32112820, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 16714));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Asset, X4_4, 100, X0_4);
    WaitFixedTimeSeconds(1);
    ClearSpEffect(X0_4, 16714);
    RestartEvent();
});

$Event(32112830, Restart, function(X0_4) {
    if (EventFlag(32110800)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        EndEvent();
    }
L0:
    WaitFor(!CharacterHasSpEffect(X0_4, 5038) && CharacterDead(32110800));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
});

$Event(32112849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32110800, 32111800, 32112800, 32112805, 32115800, 10000, 32110801, 32112801);
    InitializeCommonEvent(0, 9005801, 32110800, 32111800, 32112800, 32112805, 32112806, 10000);
    InitializeCommonEvent(0, 9005811, 32110800, 32111800, 7, 32110801);
    InitializeCommonEvent(0, 9005822, 32110800, 920700, 32112805, 32112806, 0, 32112802, 0, 0);
});
