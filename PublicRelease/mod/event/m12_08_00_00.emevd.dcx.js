// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 12082849, 0);
    InitializeEvent(0, 12082800, 0);
    InitializeEvent(0, 12082810, 0);
    InitializeEvent(0, 12082848, 0);
});

$Event(12082848, Default, function() {
    if (!EventFlag(12080800)) {
        DeleteAssetfollowingSFX(12081848, false);
        WaitFor(PlayerIsInOwnWorld() && EventFlag(12080800));
    }
L0:
    DeleteAssetfollowingSFX(12081848, true);
    CreateAssetfollowingSFX(12081848, 190, 1300);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9526, 12081848));
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetPlayerRespawnPoint(12022200);
    SaveRequest();
    WarpPlayer(12, 2, 0, 0, 12022200, 0);
});

$Event(12082800, Default, function() {
    EndIf(EventFlag(12080800));
    WaitFor(HPRatio(12080800) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(12080800, SoundType.SFX, 77777777);
    WaitFor(CharacterDead(12080800));
    HandleBossDefeatAndDisplayBanner(12080800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(12080800, ON);
    SetEventFlagID(9132, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61132, ON);
    }
});

$Event(12082810, Restart, function() {
    if (EventFlag(12080800)) {
        DisableCharacter(12080800);
        DisableCharacterCollision(12080800);
        ForceCharacterDeath(12080800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12080800);
    EnableCharacterInvincibility(12080800);
    WaitFor(EventFlag(12082805) && InArea(10000, 12082800));
L2:
    EnableCharacterAI(12080800);
    DisableCharacterInvincibility(12080800);
    SetNetworkUpdateRate(12080800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 12080800, 0, 904670000);
});

$Event(12082849, Default, function() {
    InitializeCommonEvent(0, 9005800, 12080800, 12081800, 12082800, 12082805, 12085800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 12080800, 12081800, 12082800, 12082805, 12082806, 10000);
    InitializeCommonEvent(0, 9005811, 12080800, 12081800, 8, 0);
    InitializeCommonEvent(0, 9005822, 12080800, 467000, 12082805, 12082806, 0, 12082802, 0, 0);
});
