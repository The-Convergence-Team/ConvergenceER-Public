// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2046382800, 0);
    InitializeEvent(0, 2046382810, 0);
    InitializeEvent(0, 2046382849, 0);
    InitializeCommonEvent(0, 90005201, 2046380210, 30001, 20001, 1094713344, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 2046380350, 2046382350, 0, 0);
    InitializeCommonEvent(0, 900005610, 2046381500, 100, 800, 0);
});

$Event(2046382800, Restart, function() {
    Unknown200476(2046380800, 30810);
    EndIf(EventFlag(2046380800));
    WaitFor(CharacterHPValue(2046380800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2046380800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2046380800));
    HandleBossDefeatAndDisplayBanner(2046380800, TextBannerType.EnemyFelled);
    SetEventFlagID(2046380800, ON);
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(30810);
    EndEvent();
});

$Event(2046382810, Restart, function() {
    if (EventFlag(2046380800)) {
        DisableCharacter(2046380800);
        DisableCharacterCollision(2046380800);
        ForceCharacterDeath(2046380800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30810);
        EndEvent();
    }
L0:
    DisableCharacterAI(2046380800);
    EnableCharacterInvincibility(2046380800);
    SetCharacterTeamType(2046380800, TeamType.Enemy);
    DisableCharacter(2046380800);
    WaitFor(EventFlag(2046382805) && InArea(10000, 2046382800));
    EnableCharacter(2046380800);
    ForceAnimationPlayback(2046380800, 63100, false, true, false);
    SetSpEffect(2046380800, 20018712);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2046380800);
    DisableCharacterInvincibility(2046380800);
    SetNetworkUpdateRate(2046380800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2046380800, 0, 900000561);
});

$Event(2046382849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2046380800, 2046381800, 2046382800, 2046382805, 2046385800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2046380800, 2046381800, 2046382800, 2046382805, 2046382806, 10000);
    InitializeCommonEvent(0, 9005811, 2046380800, 2046381800, 3, 0);
    InitializeCommonEvent(0, 9005822, 2046380800, 921100, 2046382805, 2046382806, 0, 2046382802, 0, 0);
});


