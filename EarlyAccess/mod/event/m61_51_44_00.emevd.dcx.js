// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2051440000, 2051441950, 0, 0, 0, 5);
    //RegisterBonfire(76967, 2051441951, 0, 0, 0, 0); // New Bonfire
    InitializeEvent(0, 2051442800, 0);
    InitializeEvent(0, 2051442810, 0);
    InitializeEvent(0, 2051442849, 0);
    InitializeCommonEvent(0, 90005250, 2051440200, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440202, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440203, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440204, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005301, 2051440300, 2051440300, 2051440500, 1077936128, 0);
    InitializeCommonEvent(0, 90005301, 2051440310, 2051440310, 2051440510, 1077936128, 0);
    InitializeCommonEvent(0, 900005610, 2051441270, 100, 800, 0);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2051440850, 2051440851, 904810704, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2051440850, 30750, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2051440850, 2051440851, 2051440851); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2051440850, 2051440851, 2051440852); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2051440925, 2051441925, 2051440850);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2051440850, 76967, 2051440951, 2051441951, 1084227584);
    InitializeEvent(0, 2051442490, 0);
});

$Event(2051442490, Restart, function() {
    EndIf(EventFlag(4927) || !EventFlag(9112) || !EventFlag(9130)); // 9112 Mogh | 9130 Radahn
    WaitFor(InArea(10000, 2051442490) && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(4927, ON);
    SetSpEffect(20000, 20004230);
});

$Event(2051442800, Restart, function() {
    Unknown200476(2051440800, 30830);
    EndIf(EventFlag(2051440800));
    WaitFor(CharacterHPValue(2051440800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2051440800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2051440800));
    HandleBossDefeatAndDisplayBanner(2051440800, TextBannerType.EnemyFelled);
    SetEventFlagID(2051440800, ON);
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(30830);
    EndEvent();
});

$Event(2051442810, Restart, function() {
    if (EventFlag(2051440800)) {
        DisableCharacter(2051440800);
        DisableCharacterCollision(2051440800);
        ForceCharacterDeath(2051440800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30830);
        EndEvent();
    }
L0:
    DisableCharacterAI(2051440800);
    EnableCharacterInvincibility(2051440800);
    SetCharacterTeamType(2051440800, TeamType.Enemy);
    DisableCharacter(2051440800);
    WaitFor(EventFlag(2051442805) && InArea(10000, 2051442800));
    EnableCharacter(2051440800);
    ForceAnimationPlayback(2051440800, 63100, false, true, false);
    SetSpEffect(2051440800, 20018695);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2051440800);
    DisableCharacterInvincibility(2051440800);
    SetNetworkUpdateRate(2051440800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2051440800, 0, 900000562);
});

$Event(2051442849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2051440800, 2051441800, 2051442800, 2051442805, 2051445800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2051440800, 2051441800, 2051442800, 2051442805, 2051442806, 10000);
    InitializeCommonEvent(0, 9005811, 2051440800, 2051441800, 3, 0);
    InitializeCommonEvent(0, 9005822, 2051440800, 921100, 2051442805, 2051442806, 0, 2051442802, 0, 0);
});
