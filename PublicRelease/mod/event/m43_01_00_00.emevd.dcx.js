// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(43010000, 43011950, 0, 0, 0, 5);
    RegisterBonfire(43010001, 43011951, 0, 0, 0, 5);
    InitializeEvent(0, 43012800, 0);
    InitializeEvent(0, 43012810, 0);
    InitializeEvent(0, 43012811, 0);
    InitializeEvent(0, 43012849, 0);
    InitializeCommonEvent(0, 90005251, 43010300, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005250, 43010200, 43012200, 1065353216, 0);
    InitializeCommonEvent(0, 90005250, 43010201, 43012201, 0, 3014);
    InitializeCommonEvent(0, 90005261, 43010209, 43012209, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 43010304, 43012304, 1106247680, 0, 0);
    InitializeCommonEvent(0, 90005200, 43010205, 30014, 20014, 43012205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43010206, 30014, 20014, 43012205, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43010212, 30016, 20016, 43012212, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 43010306, 43012306, 0, 0);
    InitializeCommonEvent(0, 90005200, 43010307, 30017, 20017, 43012307, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 43010350, 43012350, 0, 3004);
    InitializeCommonEvent(0, 90005301, 43010350, 43010350, 43010900, 0, 0);
    InitializeCommonEvent(0, 90005646, 43010800, 43012840, 43012841, 43011840, 43012840, 299);
    InitializeEvent(0, 43012500, 0);
    InitializeCommonEvent(0, 90005690, 43012500);
    InitializeCommonEvent(0, 90005691, 43012500);
    InitializeCommonEvent(0, 900005610, 43011680, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 43011681, 100, 800, 0);
});

$Event(43012500, Restart, function() {
    EndIf(EventFlag(43010500));
    DisableObjAct(43011540, 447080);
    WaitFor(EventFlag(43010800));
    SetEventFlagID(43010500, ON);
    EnableObjAct(43011540, 447080);
});

$Event(43012800, Restart, function() {
    EndIf(EventFlag(43010800));
    WaitFor(CharacterHPValue(43010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(43010800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(43010800));
    HandleBossDefeatAndDisplayBanner(43010800, TextBannerType.EnemyFelled);
    SetEventFlagID(43010800, ON);
    SetEventFlagID(9281, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61281, ON);
    }
});

$Event(43012810, Restart, function() {
    if (EventFlag(43010800)) {
        DisableCharacter(43015800);
        DisableCharacterCollision(43015800);
        ForceCharacterDeath(43015800, false);
        EndEvent();
    }
L0:
    SetCharacterTeamType(43010800, TeamType.Enemy);
    DisableCharacterAI(43015800);
    EnableCharacterInvincibility(43015800);
    DisableCharacterCollision(43015800);
    WaitFor(EventFlag(43012805) && InArea(10000, 43012800));
L2:
    SetSpEffect(43010800, 20018660);
    WaitFixedTimeRealFrames(1);
    EnableCharacterCollision(43015800);
    EnableCharacterAI(43010800);
    DisableCharacterInvincibility(43015800);
    SetNetworkUpdateRate(43010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 43010800, 0, 140700);
});

$Event(43012811, Restart, function() {
    EndIf(EventFlag(43010800));
    WaitFor(HPRatio(43010800) <= 0.5);
    SetEventFlagID(43012802, ON);
});

$Event(43012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 43010800, 43011800, 43012800, 43012805, 43015800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 43010800, 43011800, 43012800, 43012805, 43012806, 10000);
    InitializeCommonEvent(0, 9005811, 43010800, 43011800, 3, 0);
    InitializeCommonEvent(0, 9005822, 43010800, 920300, 43012805, 43012806, 0, 43012802, 0, 0);
});


