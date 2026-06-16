// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31050000, 31051950, 0, 0, 0, 5);
    InitializeEvent(0, 31052800, 0);
    InitializeEvent(0, 31052810, 0);
    InitializeEvent(0, 31052849, 0);
    InitializeEvent(0, 31052811, 0);
    InitializeEvent(0, 31052830, 31050801, 31050100);
    InitializeCommonEvent(0, 90005646, 31050800, 31052840, 31052841, 31051840, 31052840, 1311);
    InitializeCommonEvent(0, 900005610, 31051550, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31050200, 31052200, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005251, 31050201, 1073741824, 0, 1700);
    InitializeCommonEvent(0, 90005261, 31050203, 31052203, 1073741824, 0, 1700);
    InitializeCommonEvent(0, 90005211, 31050205, 30002, 20002, 31052205, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050206, 30001, 20001, 31052205, 1073741824, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050209, 30002, 20002, 31052209, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31050230, 31052230, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31050251, 31052251, 1084227584, 0, 3005);
    InitializeCommonEvent(0, 90005261, 31050254, 31052254, 1073741824, 0, 3005);
    InitializeCommonEvent(0, 90005261, 31050257, 31052257, 1073741824, 0, 3003);
    InitializeCommonEvent(0, 90005261, 31050280, 31052280, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31050300, 31052300, 1073741824, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 31050301, 31052301, 1073741824, 0, 0);
    InitializeEvent(0, 31052301, 0);
    InitializeCommonEvent(0, 90005261, 31050302, 31052300, 1073741824, 1036831949, 0);
    InitializeCommonEvent(0, 90005211, 31050304, 30000, 20000, 31052305, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050305, 30000, 20000, 31052305, 1073741824, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050306, 30000, 20000, 31052305, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050307, 30000, 20000, 31052305, 1073741824, 1060320051, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050308, 30000, 20000, 31052305, 1073741824, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050309, 30000, 20000, 31052305, 1073741824, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31050310, 30000, 20000, 31052305, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31050315, 31052315, 1073741824, 0, 3012);
    InitializeCommonEvent(0, 90005261, 31050316, 31052316, 1073741824, 0, 3012);
    InitializeCommonEvent(0, 90005261, 31050317, 31052317, 1073741824, 0, 3012);
});

$Event(31052301, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(31050301, 8081);
    SetSpEffect(31050301, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(31050301, 10000, 4, 1))
            || CharacterAIState(31050301, AIStateType.Combat)
            || HasDamageType(31050301, 0, DamageType.Unspecified));
    ClearSpEffect(31050301, 8081);
    ClearSpEffect(31050301, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31052800, Restart, function() {
    EndIf(EventFlag(31050800));
    WaitFor(CharacterHPValue(31050800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31050800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31050800));
    HandleBossDefeatAndDisplayBanner(31050800, TextBannerType.EnemyFelled);
    SetEventFlagID(31050800, ON);
    SetEventFlagID(9237, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61237, ON);
    }
});

$Event(31052810, Restart, function() {
    if (EventFlag(31050800)) {
        DisableCharacter(31050800);
        DisableCharacterCollision(31050800);
        ForceCharacterDeath(31050800, false);
        EndEvent();
    }
L0:
    DisableCharacter(31050800);
    EnableCharacterInvincibility(31050800);
    if (!EventFlag(31050801)) {
        WaitFor(PlayerIsInOwnWorld() && InArea(10000, 31052801));
        SetNetworkconnectedEventFlagID(31050801, ON);
    } else {
L1:
        WaitFor(EventFlag(31052805) && InArea(10000, 31052800));
    }
L2:
    EnableCharacter(31050800);
    DisableCharacterInvincibility(31050800);
    WaitFixedTimeSeconds(1);
    EnableCharacterAI(31050800);
    SetNetworkUpdateRate(31050800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(31050800, 3013, false, false, false);
    DisplayBossHealthBar(Enabled, 31050800, 0, 904290310);
});

$Event(31052811, Restart, function() {
    EndIf(EventFlag(31050800));
    WaitFor(HPRatio(31050800) <= 0.6);
    SetEventFlagID(31052802, ON);
});

$Event(31052830, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    SetSpEffect(X4_4, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    SetSpEffect(X4_4, 9532);
});

$Event(31052849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31050800, 31051800, 31052800, 31052805, 31055800, 10000, 31050801, 31052801);
    InitializeCommonEvent(0, 9005801, 31050800, 31051800, 31052800, 31052805, 31052806, 10000);
    InitializeCommonEvent(0, 9005811, 31050800, 31051800, 5, 31050801);
    InitializeCommonEvent(0, 9005811, 31050800, 31051801, 3, 31050801);
    InitializeCommonEvent(0, 9005822, 31050800, 931000, 31052805, 31052806, 0, 31052802, 0, 0);
});
