// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 1052550390, 1052552390, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052550354, 1052552354, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052550390, 1052550390, 1052550700, 0, 0);
    InitializeEvent(0, 1052552270, 1052550270, 30001, 20001, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1052552270, 1052550280, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052550282, 1052552282, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052550300, 1052550300, 40516, 0, 0);
    InitializeEvent(0, 1052552580, 0);
    InitializeCommonEvent(0, 900005610, 1052551500, 100, 800, 0);
    InitializeCommonEvent(0, 90005540, 1052550260, 1052551252, 1052551251, 1052551250, -1, 1, 2); // New Gates
    InitializeCommonEvent(0, 90005540, 1052550240, 1052551232, 1052551231, 1052551230, -1, 1, 2);
    InitializeEvent(0, 1052552590, 0); // doggy ambush
    InitializeCommonEvent(0, 90005520, 1052550590, 1052551591, 1052551592, 1052551593); //Kick Ladder
});

$Event(1052552270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        areaHp |= InArea(10000, X12_4);
    }
    areaHp |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1) || HPRatio(1052550390) <= 0.55;
    areaHpChrSp &= areaHp
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
        areaHpChrSp &= chr;
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
    areaHpChrSp &= chrSp;
    WaitFor(
        areaHpChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
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

$Event(1052552580, Default, function() {
    RegisterLadder(1052550580, 1052550851, 1052551580);
    RegisterLadder(1052550582, 1052550853, 1052551582);
});

$Event(1052552590, Restart, function() {
    DisableCharacterAI(1052551282);
    DisableCharacterAI(1052551281);
    WaitFor(InArea(10000, 1052551280) || HasDamageType(1052551282, 10000, DamageType.Unspecified) || HasDamageType(1052551281, 10000, DamageType.Unspecified))
    EnableCharacterAI(1052551282);
    EnableCharacterAI(1052551281);
});

