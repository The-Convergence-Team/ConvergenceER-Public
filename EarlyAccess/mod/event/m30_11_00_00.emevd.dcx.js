// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(73011, 30111950, 0, 0, 0, 5);
    InitializeEvent(0, 30112800, 0);
    InitializeEvent(0, 30112810, 0);
    InitializeEvent(0, 30112849, 0);
    InitializeEvent(0, 30112811, 0);
    InitializeCommonEvent(0, 90005616, 30117000, 30112700);
    InitializeCommonEvent(0, 90005650, 30110540, 30111540, 30111541, 30113541, 27115);
    InitializeCommonEvent(0, 90005651, 30110540, 30111540);
    InitializeEvent(0, 30112580, 0);
    InitializeCommonEvent(0, 90005646, 30110800, 30112840, 30112841, 30111840, 30112840, 2846);
    InitializeEvent(0, 30110790, 30111520, 30110800);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 30110200, 30003, 20003, 30112200, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110201, 30003, 20003, 30112201, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110202, 30003, 20003, 30112202, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110203, 30003, 20003, 30112203, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110205, 30003, 20003, 30112205, 1065353216, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110206, 30003, 20003, 30112205, 1065353216, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30110207, 30003, 20003, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 30110208, 30003, 20003, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110209, 30003, 20003, 30112209, 1065353216, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110210, 30003, 20003, 30112209, 1065353216, 1085276160, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110211, 30003, 20003, 30112209, 1065353216, 1093140480, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110212, 30003, 20003, 30112209, 1065353216, 1098383360, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110213, 30003, 20003, 30112213, 0, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110214, 30003, 20003, 30112213, 0, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110215, 30003, 20003, 30112215, 1077936128, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110216, 30003, 20003, 30112215, 1077936128, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30110217, 30003, 20003, 30112217, 1077936128, 1091043328, 0, 0, 0, 0);
});

$Event(30112580, Default, function() {
    RegisterLadder(30110580, 30110581, 30111580);
});

$Event(30110790, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    DisableObjAct(X0_4, -1);
    if (EventFlag(X4_4)) {
        EnableObjAct(X0_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && !ThisEventSlot());
    SetThisEventSlot(ON);
    EnableObjAct(X0_4, -1);
    EndEvent();
});

$Event(30112800, Restart, function() {
    EndIf(EventFlag(30110800));
    WaitFor(CharacterHPValue(30110800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30110800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30110800));
    HandleBossDefeatAndDisplayBanner(30110800, TextBannerType.EnemyFelled);
    EnableObjAct(30111670, -1);
    SetEventFlagID(30110800, ON);
    SetEventFlagID(9203, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61203, ON);
    }
});

$Event(30112810, Restart, function() {
    if (EventFlag(30110800)) {
        DisableCharacter(30110800);
        DisableCharacterCollision(30110800);
        ForceCharacterDeath(30110800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30110800);
    EnableCharacterInvincibility(30110800);
    DisableCharacterHPBarDisplay(30110800);
    DisableObjAct(30111670, -1);
    ForceAnimationPlayback(30110800, 30000, false, false, false);
    WaitFor(EventFlag(30112805) && InArea(10000, 30112800));
L2:
    EnableCharacterAI(30110800);
    DisableCharacterInvincibility(30110800);
    SetNetworkUpdateRate(30110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(30110800, 4404);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 30110800, 0, 902100300);
    WaitFixedTimeSeconds(0.7);
    ForceAnimationPlayback(30110800, 20000, false, false, false);
});

$Event(30112811, Restart, function() {
    EndIf(EventFlag(30110800));
    WaitFor(HPRatio(30110800) <= 0.6);
    SetEventFlagID(30112802, ON);
});

$Event(30112849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30110800, 30111800, 30112800, 30112805, 30115800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30110800, 30111800, 30112800, 30112805, 30112806, 10000);
    InitializeCommonEvent(0, 9005811, 30110800, 30111800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30110800, 921500, 30112805, 30112806, 0, 30112802, 0, 0);
});

$Event(30112900, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(X8_4) && !EventFlag(700690));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
    SetEventFlagID(700690, ON);
});
