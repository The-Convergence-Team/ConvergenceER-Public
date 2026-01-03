// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 2052430800, 10000, 2052430950, 2052431950, 1084227584);
    InitializeEvent(0, 2052432800, 0);
    InitializeEvent(0, 2052432810, 0);
    InitializeEvent(0, 2052432816, 0);
    InitializeEvent(0, 2052432849, 0);
    InitializeEvent(0, 2052432820, 2052430810);
    InitializeEvent(1, 2052432820, 2052430811);
    InitializeEvent(2, 2052432820, 2052430812);
    InitializeEvent(3, 2052432820, 2052430813);
    InitializeEvent(4, 2052432820, 2052430814);
    InitializeEvent(5, 2052432820, 2052430815);
    InitializeEvent(6, 2052432820, 2052430820);
    InitializeEvent(7, 2052432820, 2052430821);
    InitializeEvent(8, 2052432820, 2052430822);
    InitializeCommonEvent(0, 90005640, 2052430540, 2052431540);
    InitializeCommonEvent(0, 900005610, 2052431601, 100, 800, 0);
});

$Event(2052432800, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2052430800));
    WaitFor(CharacterHPValue(2052430800) <= 0 || EventFlag(2052432848));
    SetNetworkconnectedEventFlagID(2052432848, ON);
    WaitFixedTimeSeconds(4);
    PlaySE(2052430800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2052430800) || EventFlag(2052432848));
    HandleBossDefeatAndDisplayBanner(2052430800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(2052430800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61161, ON);
    }
    SetEventFlagID(9161, ON);
});

$Event(2052432810, Restart, function() {
    if (EventFlag(2052430800)) {
        DisableCharacter(2052430810);
        DisableCharacterCollision(2052430810);
        ForceCharacterDeath(2052430810, false);
        DisableCharacter(2052430811);
        DisableCharacterCollision(2052430811);
        ForceCharacterDeath(2052430811, false);
        DisableCharacter(2052430812);
        DisableCharacterCollision(2052430812);
        ForceCharacterDeath(2052430812, false);
        DisableCharacter(2052430813);
        DisableCharacterCollision(2052430813);
        ForceCharacterDeath(2052430813, false);
        DisableCharacter(2052430814);
        DisableCharacterCollision(2052430814);
        ForceCharacterDeath(2052430814, false);
        DisableCharacter(2052430815);
        DisableCharacterCollision(2052430815);
        ForceCharacterDeath(2052430815, false);
        DisableCharacter(2052430820);
        DisableCharacterCollision(2052430820);
        ForceCharacterDeath(2052430820, false);
        DisableCharacter(2052430821);
        DisableCharacterCollision(2052430821);
        ForceCharacterDeath(2052430821, false);
        DisableCharacter(2052430822);
        DisableCharacterCollision(2052430822);
        ForceCharacterDeath(2052430822, false);
        DisableCharacter(2052430800);
        DisableCharacterCollision(2052430800);
        ForceCharacterDeath(2052430800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(2052430800);
    EnableCharacterInvincibility(2052430800);
    DisableCharacterAI(2052430810);
    DisableCharacterAI(2052430811);
    DisableCharacterAI(2052430812);
    DisableCharacterAI(2052430813);
    DisableCharacterAI(2052430814);
    DisableCharacterAI(2052430815);
    DisableCharacterAI(2052430820);
    DisableCharacterAI(2052430821);
    DisableCharacterAI(2052430822);
    DisableCharacterHPBarDisplay(2052430800);
    DisableCharacterHPBarDisplay(2052430810);
    DisableCharacterHPBarDisplay(2052430811);
    DisableCharacterHPBarDisplay(2052430812);
    DisableCharacterHPBarDisplay(2052430813);
    DisableCharacterHPBarDisplay(2052430814);
    DisableCharacterHPBarDisplay(2052430815);
    DisableCharacterHPBarDisplay(2052430820);
    DisableCharacterHPBarDisplay(2052430821);
    DisableCharacterHPBarDisplay(2052430822);
    WaitFor(
        (PlayerIsInOwnWorld() && InArea(10000, 2052432800))
            || HasDamageType(2052430800, 0, DamageType.Unspecified)
            || HasDamageType(2052430810, 0, DamageType.Unspecified)
            || HasDamageType(2052430811, 0, DamageType.Unspecified)
            || HasDamageType(2052430812, 0, DamageType.Unspecified)
            || HasDamageType(2052430813, 0, DamageType.Unspecified)
            || HasDamageType(2052430814, 0, DamageType.Unspecified)
            || HasDamageType(2052430815, 0, DamageType.Unspecified)
            || HasDamageType(2052430820, 0, DamageType.Unspecified)
            || HasDamageType(2052430821, 0, DamageType.Unspecified)
            || HasDamageType(2052430822, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(2052430800, 436)
            || CharacterHasStateInfo(2052430800, 2)
            || CharacterHasStateInfo(2052430800, 5)
            || CharacterHasStateInfo(2052430800, 6)
            || CharacterHasStateInfo(2052430800, 260)
            || CharacterHasStateInfo(2052430810, 436)
            || CharacterHasStateInfo(2052430810, 2)
            || CharacterHasStateInfo(2052430810, 5)
            || CharacterHasStateInfo(2052430810, 6)
            || CharacterHasStateInfo(2052430810, 260)
            || CharacterHasStateInfo(2052430811, 436)
            || CharacterHasStateInfo(2052430811, 2)
            || CharacterHasStateInfo(2052430811, 5)
            || CharacterHasStateInfo(2052430811, 6)
            || CharacterHasStateInfo(2052430811, 260)
            || CharacterHasStateInfo(2052430812, 436)
            || CharacterHasStateInfo(2052430812, 2)
            || CharacterHasStateInfo(2052430812, 5)
            || CharacterHasStateInfo(2052430812, 6)
            || CharacterHasStateInfo(2052430812, 260)
            || CharacterHasStateInfo(2052430813, 436)
            || CharacterHasStateInfo(2052430813, 2)
            || CharacterHasStateInfo(2052430813, 5)
            || CharacterHasStateInfo(2052430813, 6)
            || CharacterHasStateInfo(2052430813, 260)
            || CharacterHasStateInfo(2052430814, 436)
            || CharacterHasStateInfo(2052430814, 2)
            || CharacterHasStateInfo(2052430814, 5)
            || CharacterHasStateInfo(2052430814, 6)
            || CharacterHasStateInfo(2052430814, 260)
            || CharacterHasStateInfo(2052430815, 436)
            || CharacterHasStateInfo(2052430815, 2)
            || CharacterHasStateInfo(2052430815, 5)
            || CharacterHasStateInfo(2052430815, 6)
            || CharacterHasStateInfo(2052430815, 260)
            || CharacterHasStateInfo(2052430820, 436)
            || CharacterHasStateInfo(2052430820, 2)
            || CharacterHasStateInfo(2052430820, 5)
            || CharacterHasStateInfo(2052430820, 6)
            || CharacterHasStateInfo(2052430820, 260)
            || CharacterHasStateInfo(2052430821, 436)
            || CharacterHasStateInfo(2052430821, 2)
            || CharacterHasStateInfo(2052430821, 5)
            || CharacterHasStateInfo(2052430821, 6)
            || CharacterHasStateInfo(2052430821, 260)
            || CharacterHasStateInfo(2052430822, 436)
            || CharacterHasStateInfo(2052430822, 2)
            || CharacterHasStateInfo(2052430822, 5)
            || CharacterHasStateInfo(2052430822, 6)
            || CharacterHasStateInfo(2052430822, 260)
            || EventFlag(2052432801));
    SetNetworkconnectedEventFlagID(2052432801, ON);
    SetNetworkUpdateRate(2052430800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(2052430810, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430811, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430812, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430813, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430814, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430815, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430820, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430821, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2052430822, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    EnableCharacterAI(2052430800);
    DisableCharacterInvincibility(2052430800);
    EnableCharacterAI(2052430810);
    EnableCharacterAI(2052430811);
    EnableCharacterAI(2052430812);
    EnableCharacterAI(2052430813);
    EnableCharacterAI(2052430814);
    EnableCharacterAI(2052430815);
    EnableCharacterAI(2052430820);
    EnableCharacterAI(2052430821);
    EnableCharacterAI(2052430822);
    DisplayBossHealthBar(Enabled, 2052430800, 1, 905320000);
    SetCharacterEventTarget(2052430810, 2052430800);
    SetCharacterEventTarget(2052430811, 2052430800);
    SetCharacterEventTarget(2052430812, 2052430800);
    SetCharacterEventTarget(2052430813, 2052430800);
    SetCharacterEventTarget(2052430814, 2052430800);
    SetCharacterEventTarget(2052430815, 2052430800);
    SetCharacterEventTarget(2052430820, 2052430800);
    SetCharacterEventTarget(2052430821, 2052430800);
    SetCharacterEventTarget(2052430822, 2052430800);
});

$Event(2052432816, Default, function() {
    EndIf(EventFlag(2052430800));
    EndIf(EventFlag(2052432802));
    WaitFor(CharacterHasSpEffect(2052430800, 20011848));
    SetNetworkconnectedEventFlagID(2052432802, ON);
    EndEvent();
});

$Event(2052432820, Restart, function(X0_4) {
    EndIf(EventFlag(2052430800));
    WaitFor(CharacterHPValue(2052430800) <= 0);
    if (CharacterHasSpEffect(X0_4, 20013255)) {
        DisableCharacterAI(X0_4);
        DisableCharacter(X0_4);
        EndEvent();
    }
L0:
    DisableCharacterAI(X0_4);
    ForceCharacterDeath(X0_4, false);
    WaitFixedTimeSeconds(6);
    DisableCharacter(X0_4);
});

$Event(2052432849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2052430800, 2052431800, 2052432800, 2052432805, 2052435800, 210000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2052430800, 2052431800, 2052432800, 2052432805, 2052432806, 210000);
    InitializeCommonEvent(0, 9005811, 2052430800, 2052431800, 3, 0);
    InitializeCommonEvent(0, 9005811, 2052430800, 2052431801, 3, 0);
    InitializeCommonEvent(0, 9005822, 2052430800, 942000, 2052432805, 2052432806, 0, 2052432802, 0, 0);
});


