// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(301200, 30121950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 30121150, 100, 800, 0);
    InitializeCommonEvent(0, 90005201, 30120200, 30000, 20000, 1088421888, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30120201, 30000, 20000, 30122201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30120250, 30122250, 0, 0);
    InitializeCommonEvent(1, 90005250, 30120251, 30122250, 0, 0);
    InitializeCommonEvent(0, 90005250, 30120205, 30122205, 0, 3000);
    InitializeCommonEvent(0, 90005250, 30120208, 30122208, 0, -1);
    InitializeCommonEvent(0, 90005271, 30120209, 0, -1);
    InitializeCommonEvent(0, 90005271, 30120210, 0, -1);
    InitializeCommonEvent(0, 90005271, 30120211, 0, -1);
    InitializeCommonEvent(0, 90005271, 30120212, 0, -1);
    InitializeEvent(0, 30122300, 30120213);
    InitializeEvent(1, 30122300, 30120214);
    InitializeEvent(2, 30122300, 30120215);
    InitializeEvent(3, 30122300, 30120216);
    InitializeEvent(4, 30122300, 30120217);
    InitializeEvent(5, 30122300, 30120218);
    InitializeEvent(6, 30122300, 30120219);
    InitializeEvent(7, 30122300, 30120220);
    InitializeEvent(8, 30122300, 30120221);
    InitializeEvent(9, 30122300, 30120222);
    InitializeEvent(10, 30122300, 30120223);
    InitializeEvent(11, 30122300, 30120224);
    InitializeEvent(0, 30122502, 30120500, 0, -1);
    InitializeCommonEvent(0, 90005250, 30120500, 30122502, 0, 0);
    InitializeEvent(0, 30122500, 0);
    InitializeEvent(0, 30122501, 0);
    InitializeCommonEvent(0, 90005650, 30120540, 30121540, 30121541, 30123541, 27115);
    InitializeCommonEvent(0, 90005651, 30120540, 30121540);
    InitializeEvent(0, 30122800, 0);
    InitializeEvent(0, 30122810, 0);
    InitializeEvent(0, 30122849, 0);
    InitializeEvent(0, 30122811, 0);
    InitializeCommonEvent(0, 90005646, 30120800, 30122840, 30122841, 30121840, 30122840, 3102);
    InitializeCommonEvent(0, 91005600, 30122800, 30121695, 5);
});

$Event(30122520, Restart, function(X0_4, X4_4, X8_4) {
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

$Event(30122300, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(30122500, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, 30122500)
            && CharacterBackreadStatus(30120500)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetNetworkconnectedThisEventSlot(ON);
    EndEvent();
});

$Event(30122501, Restart, function() {
    EndIf(EventFlag(30122502));
    WaitFor(
        InArea(10000, 30122501)
            && CharacterBackreadStatus(30120500)
            && EventFlag(30122500)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetNetworkconnectedEventFlagID(30122502, ON);
    WaitFixedTimeSeconds(0);
    ForceAnimationPlayback(30120500, 3024, true, true, false);
    EnableCharacterAI(30120500);
    EndEvent();
});

$Event(30122502, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(30122502));
    DisableCharacterAI(X0_4);
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(30122502, ON);
    if (and1.Passed) {
        WaitFixedTimeSeconds(X4_4);
        if (Signed(X8_4) != -1) {
            ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(30122800, Restart, function() {
    EndIf(EventFlag(30120800));
    WaitFor(CharacterHPValue(30120800) <= 0 && CharacterHPValue(30120801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30100800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30120800) && CharacterDead(30120801));
    HandleBossDefeatAndDisplayBanner(30120800, TextBannerType.EnemyFelled);
    SetEventFlagID(30120800, ON);
    SetEventFlagID(9211, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61211, ON);
    }
});

$Event(30122810, Restart, function() {
    if (EventFlag(30120800)) {
        DisableCharacter(30120800);
        DisableCharacterCollision(30120800);
        ForceCharacterDeath(30120800, false);
        DisableCharacter(30120801);
        DisableCharacterCollision(30120801);
        ForceCharacterDeath(30120801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30120800);
    DisableCharacterAI(30120801);
    EnableCharacterInvincibility(30120800);
    EnableCharacterInvincibility(30120801);
    ForceAnimationPlayback(30120800, 30001, true, false, false);
    WaitFor(EventFlag(30122805) && InArea(10000, 30122800));
    ForceAnimationPlayback(30120800, 20001, false, false, false);
L2:
    EnableCharacterAI(30120800);
    DisableCharacterInvincibility(30120800);
    DisableCharacterInvincibility(30120801);
    SetNetworkUpdateRate(30120800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30120800, 0, 903460300);
    EnableCharacterAI(30120801);
    SetNetworkUpdateRate(30120801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30120801, 1, 903700300);
});

$Event(30122811, Restart, function() {
    EndIf(EventFlag(30120800));
    WaitFor(HPRatio(30120800) <= 0.6 || CharacterDead(30120801));
    SetEventFlagID(30122802, ON);
});

$Event(30122849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30120800, 30121800, 30122800, 30122805, 30125800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30120800, 30121800, 30122800, 30122805, 30122806, 10000);
    InitializeCommonEvent(0, 9005811, 30120800, 30121800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30120800, 930000, 30122805, 30122806, 0, 30122802, 0, 0);
});
