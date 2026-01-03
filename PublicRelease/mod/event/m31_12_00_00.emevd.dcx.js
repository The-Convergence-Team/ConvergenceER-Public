// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31120000, 31121950, 0, 0, 0, 5);
    InitializeEvent(0, 31122800, 0);
    InitializeEvent(0, 31122810, 0);
    InitializeEvent(0, 31122849, 0);
    InitializeEvent(0, 31122811, 0);
    InitializeCommonEvent(0, 900005610, 31121200, 100, 800, 0);
    InitializeCommonEvent(0, 90005646, 31120800, 31122840, 31122841, 31121840, 31122840, 3103);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 31120201, 30000, 20000, 31122201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 31120213, 30000, 20000, 31122201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 31120203, 30000, 20000, 31122204, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 31120214, 30000, 20000, 31122204, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 31120200, 31122203, 0, 1700);
    InitializeCommonEvent(0, 90005250, 31120211, 31122203, 0, 1700);
    InitializeCommonEvent(0, 90005250, 31120227, 31122205, 0, 0);
    InitializeCommonEvent(0, 90005250, 31120227, 31122220, 0, 0);
    InitializeCommonEvent(0, 90005250, 31120228, 31122205, 0, 0);
    InitializeCommonEvent(0, 90005250, 31120228, 31122220, 0, 0);
});

$Event(31122800, Restart, function() {
    EndIf(EventFlag(31120800));
    WaitFor(CharacterHPValue(31120800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31120800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31120800));
    HandleBossDefeatAndDisplayBanner(31120800, TextBannerType.EnemyFelled);
    SetEventFlagID(31120800, ON);
    SetEventFlagID(9247, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61247, ON);
    }
});

$Event(31122810, Restart, function() {
    if (EventFlag(31120800)) {
        DisableCharacter(31120800);
        DisableCharacterCollision(31120800);
        ForceCharacterDeath(31120800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31120800);
    EnableCharacterInvincibility(31120800);
    DisableCharacterCollision(31120800);
    GotoIf(L1, EventFlag(31120802));
    flagArea = EventFlag(31122805) && InArea(10000, 31122800);
    dmg = HasDamageType(31120800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
L2:
    EnableCharacterAI(31120800);
    DisableCharacterInvincibility(31120800);
    EnableCharacterCollision(31120800);
    SetNetworkUpdateRate(31120800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31120800, 0, 903460310);
});

$Event(31122811, Restart, function() {
    EndIf(EventFlag(31120800));
    WaitFor(HPRatio(31120800) <= 0.6);
    SetEventFlagID(31122802, ON);
});

$Event(31122849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31120800, 31121800, 31122800, 31122805, 31125800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31120800, 31121800, 31122800, 31122805, 31122806, 10000);
    InitializeCommonEvent(0, 9005811, 31120800, 31121800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31120800, 950000, 31122805, 31122806, 0, 31122802, 0, 0);
});
