// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2046412800, 0);
    InitializeEvent(0, 2046412810, 0);
    InitializeEvent(0, 2046412849, 0);
    InitializeCommonEvent(0, 900005610, 2046411550, 100, 800, 0);
});

$Event(2046412800, Restart, function() {
    EndIf(EventFlag(2046410800));
    WaitFor(CharacterHPValue(2046410800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2046410800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2046410800));
    HandleBossDefeatAndDisplayBanner(2046410800, TextBannerType.EnemyFelled);
    SetEventFlagID(2046410800, ON);
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(30820);
    EndEvent();
});

$Event(2046412810, Restart, function() {
    if (EventFlag(2046410800)) {
        DisableCharacter(2046410800);
        DisableCharacterCollision(2046410800);
        ForceCharacterDeath(2046410800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30820);
        EndEvent();
    }
L0:
    DisableCharacterAI(2046410800);
    EnableCharacterInvincibility(2046410800);
    SetCharacterTeamType(2046410800, TeamType.Enemy);
    DisableCharacter(2046410800);
    WaitFor(EventFlag(2046412805) && InArea(10000, 2046412800));
    EnableCharacter(2046410800);
    ForceAnimationPlayback(2046410800, 63100, false, true, false);
    SetSpEffect(2046410800, 20018696);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2046410800);
    DisableCharacterInvincibility(2046410800);
    SetNetworkUpdateRate(2046410800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2046410800, 0, 900000563);
});

$Event(2046412849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2046410800, 2046411800, 2046412800, 2046412805, 2046415800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2046410800, 2046411800, 2046412800, 2046412805, 2046412806, 10000);
    InitializeCommonEvent(0, 9005811, 2046410800, 2046411800, 3, 0);
    InitializeCommonEvent(0, 9005822, 2046410800, 921100, 2046412805, 2046412806, 0, 2046412802, 0, 0);
});


