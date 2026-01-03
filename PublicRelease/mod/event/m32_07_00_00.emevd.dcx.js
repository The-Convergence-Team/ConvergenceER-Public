// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32070000, 32071950, 0, 0, 0, 5);
    RegisterBonfire(32070001, 32071951, 0, 0, 0, 5);
    InitializeEvent(0, 32072810, 0);
    InitializeEvent(0, 32072800, 0);
    InitializeEvent(0, 32072811, 0);
    InitializeEvent(0, 32072849, 0);
    InitializeEvent(0, 32072200, 32070200, 30004, 20004, 32070310, 16576, 1065353216, 0, 0, 0, 0, 32071608, 0, 0, 0);
    InitializeEvent(1, 32072200, 32070201, 30000, 20000, 32070310, 16572, 1065353216, 0, 0, 0, 0, 32071609, 0, 0, 0);
    InitializeEvent(2, 32072200, 32070202, 30004, 20004, 32070310, 16576, 0, 0, 0, 0, 0, 32071600, 32071601, 0, 0);
    InitializeEvent(3, 32072200, 32070203, 30002, 20002, 32070310, 16574, 0, 0, 0, 0, 0, 32071602, 32071603, 32071604, 0);
    InitializeEvent(4, 32072200, 32070210, 30002, 20002, 32070316, 16574, 1065353216, 0, 0, 0, 0, 32071610, 0, 0, 0);
    InitializeCommonEvent(0, 90005511, 32070560, 32071560, 32073560, 27043, 0);
    InitializeCommonEvent(0, 90005512, 32070560, 32072560, 32072561);
    InitializeEvent(0, 32072580, 0);
    InitializeCommonEvent(0, 90005646, 32070800, 32072840, 32072841, 32071840, 32072840, 1824);
    InitializeCommonEvent(0, 900005610, 32071680, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 32071681, 100, 800, 0);
    InitializeCommonEvent(0, 90005703, 32070700, 3661, 3662, 1043399301, 3661, 3660, 3663, -1);
    InitializeCommonEvent(0, 90005704, 32070700, 3661, 3660, 1043399301, 3);
    InitializeCommonEvent(0, 90005702, 32070700, 3663, 3660, 3663);
    InitializeEvent(0, 32073700, 32070700);
    InitializeEvent(0, 32073701, 0);
    InitializeEvent(0, 32073702, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32072820, 0);
    InitializeCommonEvent(0, 90005250, 32070204, 32072204, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070350, 32072306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070300, 32072300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070301, 32072300, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070306, 32072306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070307, 32072306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070308, 32072308, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070309, 32072309, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070310, 32072309, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070315, 32072315, 0, -1);
    InitializeCommonEvent(0, 90005250, 32070316, 32072316, 0, -1);
});

$Event(32072580, Restart, function() {
    RegisterLadder(32070530, 32070531, 32071530);
    RegisterLadder(32070532, 32070533, 32071532);
});

$Event(32072200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(ThisEventSlot());
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1)
        || AssetDestroyed(X52_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    assetChrSp &= chrSp;
    chrSp2 = CharacterAIState(X12_4, AIStateType.Combat) && CharacterHasSpEffect(10000, 10004);
    WaitFor(
        assetChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || chrSp2
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X16_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32072800, Restart, function() {
    EndIf(EventFlag(32070800));
    WaitFor(CharacterHPValue(32070800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32070800));
    HandleBossDefeatAndDisplayBanner(32070800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(32070800, ON);
    SetEventFlagID(9266, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61266, ON);
    }
});

$Event(32072810, Restart, function() {
    if (EventFlag(32070800)) {
        DisableCharacter(32070800);
        DisableCharacterCollision(32070800);
        ForceCharacterDeath(32070800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32070800);
    EnableCharacterInvincibility(32070800);
    if (!EventFlag(32070801)) {
        ForceAnimationPlayback(32070800, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32072801))
                || HasDamageType(32070800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(32070801, ON);
        WaitFixedTimeSeconds(0.3);
        ForceAnimationPlayback(32070800, 20000, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32070800, 30000, true, false, false);
        WaitFor(EventFlag(32072805) && InArea(10000, 32072800));
        WaitFixedTimeSeconds(0.3);
        ForceAnimationPlayback(32070800, 20000, false, false, false);
    }
L2:
    EnableCharacterAI(32070800);
    DisableCharacterInvincibility(32070800);
    SetNetworkUpdateRate(32070800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32070800, 0, 904910320);
});

$Event(32072811, Restart, function() {
    EndIf(EventFlag(32070800));
    WaitFor(HPRatio(32070800) <= 0.6);
    SetEventFlagID(32072802, ON);
});

$Event(32072820, Restart, function() {
    EndIf(EventFlag(32070800));
    EndIf(EventFlag(32070801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32078540));
    SetEventFlagID(32078540, OFF);
});

$Event(32072849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32070800, 32071800, 32072800, 32072805, 32075800, 10000, 32070801, 32072801);
    InitializeCommonEvent(0, 9005801, 32070800, 32071800, 32072800, 32072805, 32072806, 10000);
    InitializeCommonEvent(0, 9005811, 32070800, 32071800, 7, 32070801);
    InitializeCommonEvent(0, 9005822, 32070800, 920900, 32072805, 32072806, 0, 32072802, 0, 0);
});

$Event(32073700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3660)) {
            SetEventFlagID(1043399303, OFF);
        }
    }
L19:
    if (!EventFlag(3666)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3666));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3660));
    GotoIf(L2, EventFlag(3661));
    GotoIf(L4, EventFlag(3663));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3666));
    RestartEvent();
});

$Event(32073701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(AnyBatchEventFlags(3666, 3671));
    WaitFor(InArea(20000, 32072700));
    SetEventFlagID(32009203, ON);
    SetEventFlagID(3678, ON);
    EndEvent();
});

$Event(32073702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(AnyBatchEventFlags(3666, 3671));
    WaitFor(InArea(20000, 32072701) && !EventFlag(1043399305));
    SetEventFlagID(32009203, ON);
    EndEvent();
});
