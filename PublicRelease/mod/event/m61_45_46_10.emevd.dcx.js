// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76913, 2045461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005250, 2045460210, 2045452200, 0, 0);
    InitializeEvent(0, 2045462351, 2045460240, 30001, 20001, 2045462351, 1065353216, 0, 2045462351, 0, 0, 0);
    InitializeEvent(1, 2045462351, 2045460246, 30001, 20001, 2045462351, 1065353216, 0, 2045462351, 0, 0, 0);
    InitializeEvent(2, 2045462351, 2045460247, 30001, 20001, 2045462351, 1065353216, 0, 2045462351, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2045460252, 30001, 20001, 1101004800, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460307, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460308, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460309, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460310, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460311, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460312, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460313, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460317, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2045460318, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005250, 2045465220, 2045462220, 0, 0);
    InitializeCommonEvent(0, 90005250, 2045465221, 2045462227, 0, 0);
    InitializeEvent(0, 2045462350, 2045460350, 2045462350, 2045462351, 1065353216);
    InitializeEvent(0, 2045462540, 2045460540, 2045462540);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005301, 2045460200, 2045460200, 2045460500, 1082130432, 0);
    InitializeEvent(0, 2045462200, 2045460200, 30007, 20007, -2049505096, -2049505088);
    InitializeCommonEvent(0, 90005430, 2045460200);
    InitializeEvent(0, 2045462210, 2045460200, -2049505096, -2049505088);
    InitializeCommonEvent(0, 90005435, 2045460200, -2049505095, -2049505094, -2049505093, -2049505092);
    InitializeCommonEvent(0, 90005437, 2045460200, 2045462208, 2045462209);
    InitializeCommonEvent(0, 90005433, 2045460200, -2049505091, -2049505090, -2049505089);
    InitializeCommonEvent(0, 90005434, 2045460200, -2049505091, -2049505090, -2049505089);
    InitializeCommonEvent(0, 90005436, 2045460200, -2049505086, -2049505085);
    //Anger of the Fell God Furnace Golem Instant Kill Initialize
    InitializeCommonEvent(0, 90005438, 2045460200);
});

$Event(2045462540, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, X4_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(2045462200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(2245462199));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X12_4);
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
    areaChrSp = area && CharacterBackreadStatus(X0_4) && sp && chrSp;
    WaitFor(
        areaChrSp
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
    SetNetworkconnectedEventFlagID(X16_4, ON);
    SetNetworkconnectedEventFlagID(2245462199, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    EndEvent();
});

$Event(2045462210, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X4_4)) {
        DisableCharacterGravity(X0_4);
        SetSpEffect(X0_4, 5005);
        RequestCharacterAIReplan(X0_4);
        WaitFixedTimeFrames(1);
        if (EventFlag(X8_4)) {
            if (!CharacterHasSpEffect(X0_4, 19627)) {
                ForceAnimationPlayback(X0_4, 30010, true, false, false);
            }
        }
L1:
        WaitFor(EventFlag(X4_4) || EntityInRadiusOfEntity(X0_4, 10000, 320, 1));
        if (EventFlag(X8_4)) {
            if (!CharacterHasSpEffect(X0_4, 19627)) {
                ForceAnimationPlayback(X0_4, 20010, true, false, false);
            }
        }
    }
L0:
    SetEventFlagID(X4_4, ON);
    EnableCharacterGravity(X0_4);
    SetSpEffect(X0_4, 5006);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        (!EntityInRadiusOfEntity(X0_4, 10000, 340, 1)
            && !EntityInRadiusOfEntity(X0_4, 10001, 340, 1)
            && !EntityInRadiusOfEntity(X0_4, 10002, 340, 1)
            && !EntityInRadiusOfEntity(X0_4, 10003, 340, 1)
            && !EntityInRadiusOfEntity(X0_4, 10004, 340, 1)
            && !EntityInRadiusOfEntity(X0_4, 10005, 340, 1))
            || !EventFlag(X4_4));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(-2049505093, Restart, function(X0_4, X4_4) {
    if (!EventFlag(X4_4)) {
        DisableCharacterGravity(X0_4);
        SetSpEffect(X0_4, 5005);
        RequestCharacterAIReplan(X0_4);
        WaitFixedTimeRealFrames(1);
        if (!CharacterHasSpEffect(X0_4, 19627)) {
            ForceAnimationPlayback(X0_4, 30010, true, false, false);
        }
        WaitFor(EventFlag(X4_4) || EntityInRadiusOfEntity(X0_4, 10000, 320, 1));
        if (!CharacterHasSpEffect(X0_4, 19627)) {
            ForceAnimationPlayback(X0_4, 20010, true, false, false);
        }
    }
L0:
    SetEventFlagID(X4_4, ON);
    EnableCharacterGravity(X0_4);
    SetSpEffect(X0_4, 5006);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        (!EntityInRadiusOfEntity(X0_4, 10000, 350, 1)
            && !EntityInRadiusOfEntity(X0_4, 10001, 350, 1)
            && !EntityInRadiusOfEntity(X0_4, 10002, 350, 1)
            && !EntityInRadiusOfEntity(X0_4, 10003, 350, 1)
            && !EntityInRadiusOfEntity(X0_4, 10004, 350, 1)
            && !EntityInRadiusOfEntity(X0_4, 10005, 350, 1))
            || !EventFlag(X4_4));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(2045462350, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!CharacterHasSpEffect(X0_4, 20011469)) {
        SetSpEffect(X0_4, 20011469);
    }
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)));
    if (EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
        || InArea(10000, X8_4)
        || (HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260))) {
        SetSpEffect(X0_4, 20011468);
        SetNetworkconnectedEventFlagID(2045462350, ON);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        EndEvent();
    }
L0:
    SetSpEffect(X0_4, 20011467);
    if (!CharacterHasSpEffect(X0_4, 5025)) {
        ForceAnimationPlayback(X0_4, 3000, false, false, false);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2045462351, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        area |= InArea(10000, X12_4);
    }
    area |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1);
    areaChrSp &= area
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
            || sp5
            || EventFlag(X24_4));
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


