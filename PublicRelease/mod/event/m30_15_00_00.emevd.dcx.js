// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(301500, 30151950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 30151150, 100, 800, 0);
    InitializeCommonEvent(0, 90005200, 30150300, 30000, 20000, 30152400, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150301, 30000, 20000, 30152400, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150302, 30000, 20000, 30152400, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30150200, 30152214, 0, 3028);
    InitializeCommonEvent(0, 90005250, 30150310, 30152310, 0, 3003);
    InitializeCommonEvent(0, 90005211, 30150201, 30003, 20003, 30152213, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150303, 30000, 20000, 30152217, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150304, 30000, 20000, 30152211, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150305, 30000, 20000, 30152217, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30150306, 30000, 20000, 30152217, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30150307, 30152200, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150308, 30152200, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150309, 30152200, 0, -1);
    InitializeCommonEvent(0, 90005650, 30150540, 30151540, 30151541, 30153541, 27115);
    InitializeCommonEvent(0, 90005651, 30150540, 30151540);
    InitializeCommonEvent(0, 90005525, 30150570, 30151570);
    InitializeCommonEvent(0, 90005525, 30150571, 30151571);
    InitializeEvent(0, 30152800, 0);
    InitializeEvent(0, 30152810, 0);
    InitializeEvent(0, 30152849, 0);
    InitializeEvent(0, 30152811, 0);
    InitializeEvent(0, 30152506, 0);
    InitializeCommonEvent(0, 90005646, 30150800, 30152840, 30152841, 30151840, 30152840, 3870);
    InitializeCommonEvent(0, 91005600, 30152800, 30151695, 5);
    
    InitializeEvent(0, 30152509, 0);
    InitializeEvent(0, 30152510, 0);
    InitializeCommonEvent(0, 90005250, 30150130, 30152130, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150140, 30152140, 2, -1);
    InitializeCommonEvent(0, 90005250, 30150150, 30152150, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150151, 30152150, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150160, 30152160, 0, -1);
    InitializeCommonEvent(0, 90005250, 30150223, 30152223, 0, -1);
    InitializeCommonEvent(0, 20000343, 30150120, 30150120, 0);
});

$Event(30152520, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    DisableObjAct(X4_4, -1);
    if (EventFlag(X8_4)) {
        EnableObjAct(X4_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X8_4) && !EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    EnableObjAct(X4_4, -1);
});

$Event(30152800, Restart, function() {
    EndIf(EventFlag(30150800));
    WaitFor(CharacterHPValue(30150800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30150800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30150800));
    HandleBossDefeatAndDisplayBanner(30150800, TextBannerType.EnemyFelled);
    SetEventFlagID(30150800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61215, ON);
    }
    SetEventFlagID(9215, ON);
});

$Event(30152810, Restart, function() {
    if (EventFlag(30150800)) {
        DisableCharacter(30150800);
        DisableCharacterCollision(30150800);
        ForceCharacterDeath(30150800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30150800);
    EnableCharacterInvincibility(30150800);
    WaitFor(EventFlag(30152805) && InArea(10000, 30152800));
L2:
    SetNetworkUpdateRate(30150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30150800, 0, 903664301);
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(30150800);
    DisableCharacterInvincibility(30150800);
});

$Event(30152811, Restart, function() {
    EndIf(EventFlag(30150800));
    WaitFor(HPRatio(30150800) <= 0.6);
    SetEventFlagID(30152802, ON);
});

$Event(30152849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30150800, 30151800, 30152800, 30152805, 30155800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30150800, 30151800, 30152800, 30152805, 30152806, 10000);
    InitializeCommonEvent(0, 9005811, 30150800, 30151800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30150800, 930000, 30152805, 30152806, 0, 30152802, 0, 0);
});

$Event(30152506, Restart, function() {
    if (ThisEventSlot()) {
        DisableAsset(30151542);
        DisableAsset(30151543);
        DisableAsset(30151544);
        DisableAsset(30151545);
        EndEvent();
    }
    
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 30152542));
    WaitFixedTimeSeconds(0.05);
    RequestAssetDestruction(30151542, 1);
    RequestAssetDestruction(30151543, 1);
    RequestAssetDestruction(30151544, 1);
    RequestAssetDestruction(30151545, 1);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(30152509, Restart, function() {
    RegisterLadder(30150580, 30150581, 30151580);
    RegisterLadder(30150582, 30150583, 30151582);
});

$Event(30152510, Restart, function() {
    DisableMapPart(30151121);
    DisableHit(30151121);
    WaitFor(EventFlag(30150120));
    EnableHit(30151121);
    SetEventFlagID(1099002001, ON);
    WaitFixedTimeSeconds(2);
    CreateAssetfollowingSFX(30151120, 2, 402030);
    InitializeCommonEvent(0, 9006900, 30150120, 30151120, 30157120);
});
