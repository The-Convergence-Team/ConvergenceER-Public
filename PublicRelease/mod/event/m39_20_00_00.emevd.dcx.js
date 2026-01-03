// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(39200001, 39201951, 0, 0, 0, 5);
    RegisterBonfire(39200002, 39201952, 0, 0, 0, 5);
    InitializeEvent(0, 39202800, 0);
    InitializeEvent(0, 39202810, 0);
    InitializeEvent(0, 39202829, 0);
    InitializeCommonEvent(0, 9005810, 39200800, 39200000, 39200950, 39201950, 1084227584);
    InitializeCommonEvent(0, 900005610, 39201640, 100, 800, 0);
    InitializeEvent(0, 39202670, 0);
    InitializeCommonEvent(0, 90005501, 39200510, 39201510, 0, 39201510, 39201511, 39201512, 39200511);
    InitializeCommonEvent(0, 90005501, 39200515, 39201515, 0, 39201515, 39201516, 39201517, 39200516);
    InitializeCommonEvent(0, 90005501, 39200520, 39201520, 0, 39201520, 39201521, 39201522, 39200521);
    InitializeCommonEvent(0, 90005501, 39200525, 39201525, 1, 39201525, 39201526, 39201527, 39200526);
    InitializeEvent(0, 39202500, 0);
    InitializeCommonEvent(0, 90005502, 39200514, 39201521, 39202522);
    InitializeEvent(0, 39202580, 0);
    InitializeCommonEvent(0, 90005780, 39200800, 39202160, 39202161, 39200700, 20, 39202700, 0, 1, 0);
    InitializeCommonEvent(0, 90005781, 39200800, 39202160, 39202161, 39200700);
    InitializeCommonEvent(0, 90005782, 39202160, 39202805, 39200700, 39202805, 39202808, 0);
    InitializeCommonEvent(0, 90005780, 39200800, 39202164, 39202165, 39200705, 20, 39202705, 1042559206, 1, 0);
    InitializeCommonEvent(0, 90005781, 39200800, 39202164, 39202165, 39200705);
    InitializeCommonEvent(0, 90005782, 39202164, 39202805, 39200705, 39202805, 39202809, 0);
    InitializeCommonEvent(0, 90005780, 39200800, 39202168, 39202169, 39200710, 20, 39202720, 39209250, 1, 0);
    InitializeCommonEvent(0, 90005781, 39200800, 39202168, 39202169, 39200710);
    InitializeCommonEvent(0, 90005782, 39202168, 39202805, 39200710, 39202805, 39202810, 0);
    InitializeCommonEvent(0, 90005795, 7606, 0, 39209200, 39202141, 39202142, 80606, 9000, 39201700, 30010);
    if (CeremonyActive(50)) {
        InitializeCommonEvent(0, 90005796, 7606, 39200701, 5, 39202141);
        InitializeEvent(0, 39202145, 0);
    }
    InitializeEvent(0, 39203700, 0);
    InitializeEvent(0, 39203701, 0);
    InitializeCommonEvent(0, 90005774, 7606, 39200500, 39207500);
    InitializeEvent(0, 39203710, 0);
    InitializeEvent(0, 39203720, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(39200701, true);
    InitializeCommonEvent(0, 90005250, 39200268, 39202268, 0, -1);
    InitializeCommonEvent(0, 90005271, 39200254, 0, -1);
    InitializeCommonEvent(0, 90005271, 39200277, 0, -1);
    InitializeEvent(0, 39202280, 39200259, 30004, 20004, 39201600, 16576, 1036831949, 0);
    InitializeEvent(1, 39202280, 39200260, 30000, 20000, 39201601, 16572, 1036831949, 0);
    InitializeEvent(2, 39202280, 39200269, 30000, 20000, 39201602, 16572, 1036831949, 0);
    InitializeEvent(4, 39202280, 39200264, 30000, 20000, 39201604, 16572, 1036831949, 0);
    InitializeEvent(0, 39202260, 39200259, 39202260);
    InitializeEvent(1, 39202260, 39200260, 39202260);
    InitializeEvent(2, 39202260, 39200269, 39202260);
    InitializeEvent(0, 39202230, 39200244, 30002, 20002, 16574, 0, 0, 0, 0, 0, 39201605, 0, 0, 0, 39200244);
    InitializeEvent(0, 39202240, 39200244, 30005, 20005, 39200244, 1077936128, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005250, 39200205, 39202214, 0, -1);
    InitializeCommonEvent(0, 90005261, 39200203, 39202203, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 39200204, 39202203, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 39200213, 39202203, 1073741824, 0, -1);
    InitializeEvent(0, 39202200, 0);
    InitializeCommonEvent(0, 90005250, 39200206, 39202356, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200216, 39202356, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200300, 39202301, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200301, 39202301, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200303, 39202301, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200304, 39202301, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200307, 39202350, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200308, 39202350, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200309, 39202350, 0, -1);
    InitializeEvent(0, 39202302, 0);
    InitializeEvent(0, 39202351, 0);
    InitializeEvent(0, 39202318, 0);
    InitializeCommonEvent(0, 90005250, 39200350, 39202350, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200360, 39202360, 0, -1);
    InitializeCommonEvent(0, 90005250, 39200364, 39202360, 0, -1);
    InitializeCommonEvent(0, 90005460, 39200380);
    InitializeCommonEvent(0, 90005461, 39200380);
    InitializeCommonEvent(0, 90005462, 39200380);
    InitializeCommonEvent(0, 90005300, 39200290, 39200290, 40290, 0, 0);
});

$Event(39202145, Restart, function() {
    EndIf(!CeremonyActive(50));
    SetCharacterBackreadState(39200701, false);
    SetCharacterTeamType(39200701, TeamType.Human);
    SetEventFlagID(39202104, ON);
    DeleteAssetfollowingSFX(39201702, true);
    CreateAssetfollowingSFX(39201702, 200, 806700);
    DeleteAssetfollowingSFX(39201701, true);
    CreateAssetfollowingSFX(39201701, 200, 806700);
});

$Event(39202500, Default, function() {
    InitializeCommonEvent(0, 90005500, 39200510, 39201510, 0, 39201510, 39201511, 39203511, 39201512, 39203512, 39202511, 39202512, 39200511, 39202512, 0);
    InitializeCommonEvent(0, 90005500, 39200515, 39201515, 0, 39201515, 39201516, 39203516, 39201517, 39203517, 39202516, 39202517, 39200516, 39202517, 0);
    InitializeCommonEvent(0, 90005500, 39200520, 39201520, 0, 39201520, 39201521, 39203521, 39201522, 39203522, 39202521, 39202522, 39200521, 39202522, 0);
    InitializeCommonEvent(0, 90005500, 39200525, 39201525, 1, 39201525, 39201526, 39203526, 39201527, 39203527, 39202526, 39202527, 39200526, 39202527, 0);
});

$Event(39202580, Restart, function() {
    RegisterLadder(39200530, 39200531, 3901530);
    RegisterLadder(39200532, 39200533, 3901532);
    RegisterLadder(39200534, 39200535, 3901534);
    RegisterLadder(39200536, 39200537, 3901536);
    RegisterLadder(39200538, 39200539, 3901538);
    RegisterLadder(39200540, 39200541, 3901540);
});

$Event(39202670, Restart, function() {
    DisableAsset(39201670);
    DisableAsset(39201671);
});

$Event(39202200, Restart, function() {
    EndIf(ThisEventSlot());
    EndIf(SpecialStandbyEndedFlag(39200207));
    EndIf(SpecialStandbyEndedFlag(39200208));
    DisableCharacterAI(39200207);
    DisableCharacterAI(39200208);
    WaitFor(
        HasDamageType(39200207, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(39200207, 436)
            || CharacterHasStateInfo(39200207, 2)
            || CharacterHasStateInfo(39200207, 5)
            || CharacterHasStateInfo(39200207, 6)
            || CharacterHasStateInfo(39200207, 260)
            || HasDamageType(39200208, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(39200208, 436)
            || CharacterHasStateInfo(39200208, 2)
            || CharacterHasStateInfo(39200208, 5)
            || CharacterHasStateInfo(39200208, 6)
            || CharacterHasStateInfo(39200208, 260)
            || (InArea(10000, 39202207)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(39200207, ON);
    SetSpecialStandbyEndedFlag(39200208, ON);
    if (!InArea(10000, 39202356)) {
        EnableCharacterAI(39200207);
        EnableCharacterAI(39200208);
        EndEvent();
    }
L10:
    EnableCharacterAI(39200207);
    EnableCharacterAI(39200208);
    ChangeCharacterPatrolBehavior(39200207, 39203207);
    ChangeCharacterPatrolBehavior(39200208, 39203208);
    EndEvent();
});

$Event(39202280, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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
    asset = AssetDestroyed(X12_4, Equal, 1);
    sp = CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450);
    sp2 = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp3 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp5 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp6 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    assetChrSp = asset && CharacterBackreadStatus(X0_4) && sp && chrSp;
    WaitFor(
        assetChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
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

$Event(39202220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
    }
L9:
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(39202230, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(EventFlag(X52_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
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
    WaitFor(
        assetChrSp
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
    SetEventFlagID(X52_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(39202240, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(!EventFlag(X12_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
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
        areaChrSp &= chr;
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
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
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

$Event(39202260, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.Every5Frames);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(InArea(10000, X4_4) && CharacterBackreadStatus(X0_4));
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.Every2Frames);
});

$Event(39202302, Restart, function() {
    EndIf(CharacterDead(39200302) || ThisEventSlot());
    WaitFor(InArea(10000, 39202301));
    SetSpEffect(39200302, 8080);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(39202306, Restart, function() {
    EndIf(CharacterDead(39200306) || ThisEventSlot());
    dmg = HasDamageType(39202306, 10000, DamageType.Unspecified);
    WaitFor(dmg || InArea(10000, 39202306));
    SetSpEffect(39200306, 8080);
    if (!dmg.Passed) {
        ForceAnimationPlayback(39200306, 3000, false, false, false);
    }
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(39202318, Restart, function() {
    EndIf(CharacterDead(39200318) || ThisEventSlot());
    WaitFor(InArea(10000, 39202318));
    SetSpEffect(39200318, 8080);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(39202351, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(39200307, 8033);
    SetSpEffect(39200307, 8081);
    SetSpEffect(39200308, 8033);
    SetSpEffect(39200308, 8081);
    SetSpEffect(39200309, 8033);
    SetSpEffect(39200309, 8081);
    SetSpEffect(39200310, 8033);
    SetSpEffect(39200310, 8081);
    SetSpEffect(39200311, 8033);
    SetSpEffect(39200311, 8081);
    SetSpEffect(39200312, 8033);
    SetSpEffect(39200312, 8081);
    WaitFor(
        HasDamageType(39200308, 0, DamageType.Unspecified)
            || HasDamageType(39200309, 0, DamageType.Unspecified)
            || HasDamageType(39200311, 0, DamageType.Unspecified)
            || HasDamageType(39200312, 0, DamageType.Unspecified)
            || HasDamageType(39200350, 0, DamageType.Unspecified)
            || (InArea(10000, 39202350) && CharacterAIState(39200350, AIStateType.Combat)));
    ClearSpEffect(39200307, 8033);
    ClearSpEffect(39200307, 8081);
    ClearSpEffect(39200308, 8033);
    ClearSpEffect(39200308, 8081);
    ClearSpEffect(39200309, 8033);
    ClearSpEffect(39200309, 8081);
    ClearSpEffect(39200310, 8033);
    ClearSpEffect(39200310, 8081);
    ClearSpEffect(39200311, 8033);
    ClearSpEffect(39200311, 8081);
    ClearSpEffect(39200312, 8033);
    ClearSpEffect(39200312, 8081);
    SetSpEffect(39200307, 8080);
    SetSpEffect(39200308, 8080);
    SetSpEffect(39200309, 8080);
    SetSpEffect(39200310, 8080);
    SetSpEffect(39200311, 8080);
    SetSpEffect(39200312, 8080);
    SetSpEffect(39200350, 8080);
    ChangeCharacterPatrolBehavior(39200307, 39203307);
    ChangeCharacterPatrolBehavior(39200310, 39203310);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(39202800, Restart, function() {
    EndIf(EventFlag(39200800));
    WaitFor(CharacterHPValue(39200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(39200800, SoundType.SFX, 888880000);
    WaitFor(CharacterHPValue(39200800) == 0);
    HandleBossDefeatAndDisplayBanner(39200800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(39200800, ON);
    SetEventFlagID(9126, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61126, ON);
    }
});

$Event(39202810, Restart, function() {
    if (EventFlag(39200800)) {
        DisableCharacter(39200800);
        DisableCharacterCollision(39200800);
        ForceCharacterDeath(39200800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(39200800);
    EnableCharacterInvincibility(39200800);
    if (!EventFlag(39200801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 39202801))
                || HasDamageType(39200800, 10000, DamageType.Unspecified)
                || CharacterHasStateInfo(39200800, 436)
                || CharacterHasStateInfo(39200800, 2)
                || CharacterHasStateInfo(39200800, 5)
                || CharacterHasStateInfo(39200800, 6)
                || CharacterHasStateInfo(39200800, 260));
        SetNetworkconnectedEventFlagID(39200801, ON);
        DisableCharacterHPBarDisplay(39200800);
        EnableCharacterAI(39200800);
        ForceAnimationPlayback(39200800, 3004, false, false, false);
        WaitFixedTimeSeconds(8);
    } else {
L1:
        WaitFor(EventFlag(39202805));
    }
L2:
    EnableCharacterAI(39200800);
    DisableCharacterInvincibility(39200800);
    SetNetworkUpdateRate(39200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterHPBarDisplay(39200800);
    DisplayBossHealthBar(Enabled, 39200800, 0, 904910000);
});

$Event(39202829, Restart, function() {
    InitializeCommonEvent(0, 9005800, 39200800, 39201800, 39202800, 39202805, 39200800, 10000, 0, 39202801);
    InitializeCommonEvent(0, 9005801, 39200800, 39201800, 39202800, 39202805, 39202806, 10000);
    InitializeCommonEvent(0, 9005811, 39200800, 39201800, 5, 0);
    InitializeCommonEvent(0, 9005811, 39200800, 39201801, 5, 0);
    InitializeCommonEvent(0, 9005822, 39200800, 920900, 39202805, 39202806, 0, 39202802, 0, 0);
});

$Event(39203700, Restart, function() {
    EndIf(!EventFlag(39200800));
    EndIf(!EventFlag(400180));
    SetEventFlagID(39209200, ON);
    EndEvent();
});

$Event(39203701, Restart, function() {
    EndIf(EventFlag(39209201));
    EndIf(!EventFlag(400180));
    WaitFor(EventFlag(39202141));
    SetEventFlagID(39209201, ON);
    EndEvent();
});

$Event(39203710, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(4181, 4183));
    SetNetworkconnectedEventFlagID(1042559206, OFF);
    EndEvent();
});

$Event(39203720, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(39209250, OFF);
    EndIf(EventFlag(39200800));
    EndIf(!EventFlag(4140));
    EndIf(EventFlag(4147));
    EndIf(EventFlag(1044529259));
    EndIf(!EventFlag(1036439210));
    SetEventFlagID(39209250, ON);
    EndEvent();
});
