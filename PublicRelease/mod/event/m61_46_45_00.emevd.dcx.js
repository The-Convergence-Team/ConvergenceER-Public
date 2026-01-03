// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2046452800, 0);
    InitializeEvent(0, 2046452810, 0);
    InitializeEvent(0, 2046452849, 0);
    InitializeCommonEvent(0, 90005250, 2046450200, 2046452200, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450319, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450320, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450321, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450322, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450323, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450325, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450329, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450332, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450336, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450339, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450340, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450341, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450342, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450343, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450344, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450345, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450352, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450353, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450354, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450355, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450356, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046450365, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 900005610, 2046451599, 100, 800, 0);
    InitializeEvent(0, 2046452550, 580410, 580110, 2046450550, 30015, 20015, 2046451550, 2046451560);
});

$Event(2046452550, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetSpEffect(X0_4, 10124);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    DisableAsset(X20_4);
    DisableAsset(X24_4);
    DisableAssetTreasure(X24_4);
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X4_4)
            && EntityInRadiusOfEntity(X8_4, 10000, 15, 1)
            && EventFlag(330));
    EnableCharacter(X8_4);
    ClearSpEffect(X0_4, 10124);
    ForceAnimationPlayback(X8_4, X12_4, false, false, false);
    EnableAsset(X20_4);
    EnableAsset(X24_4);
    ForceAnimationPlayback(X20_4, 2, false, false, false);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EntityInRadiusOfEntity(X8_4, 10000, 5, 1));
    ForceAnimationPlayback(X8_4, X16_4, false, false, false);
    ForceAnimationPlayback(X20_4, 1, false, false, false);
    WaitFixedTimeSeconds(3.8);
    DisableCharacter(X8_4);
    DisableAsset(X20_4);
    EnableAssetTreasure(X24_4);
});

$Event(2046452800, Restart, function() {
    Unknown200476(2046450800, 30900);
    EndIf(EventFlag(2046450800));
    WaitFor(CharacterHPValue(2046450800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2046450800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2046450800));
    HandleBossDefeatAndDisplayBanner(2046450800, TextBannerType.EnemyFelled);
    SetEventFlagID(2046450800, ON);
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(30900);
    EndEvent();
});

$Event(2046452810, Restart, function() {
    if (EventFlag(2046450800)) {
        DisableCharacter(2046450800);
        DisableCharacterCollision(2046450800);
        ForceCharacterDeath(2046450800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30900);
        EndEvent();
    }
L0:
    DisableCharacterAI(2046450800);
    EnableCharacterInvincibility(2046450800);
    SetCharacterTeamType(2046450800, TeamType.Enemy);
    DisableCharacter(2046450800);
    WaitFor(EventFlag(2046452805) && InArea(10000, 2046452800));
    EnableCharacter(2046450800);
    ForceAnimationPlayback(2046450800, 63100, false, true, false);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2046450800);
    DisableCharacterInvincibility(2046450800);
    SetNetworkUpdateRate(2046450800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2046450800, 0, 900000560);
});

$Event(2046452849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2046450800, 2046451800, 2046452800, 2046452805, 2046455800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2046450800, 2046451800, 2046452800, 2046452805, 2046452806, 10000);
    InitializeCommonEvent(0, 9005811, 2046450800, 2046451800, 3, 0);
    InitializeCommonEvent(0, 9005822, 2046450800, 921100, 2046452805, 2046452806, 0, 2046452802, 0, 0);
});


