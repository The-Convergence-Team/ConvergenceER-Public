// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1054562200, 1054565200);
    InitializeEvent(0, 1054562500, 0);
});

$Event(1054562200, Restart, function(X0_4) {
    ChangeCharacterCollisionState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    EndEvent();
});

$Event(1054562500, Restart, function() {
    EndIf(EventFlag(1254560800));
    SetCharacterTalkRange(1054560100, 300);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005870, 1054560800, 904503600, 25);
    InitializeCommonEvent(0, 90005861, 1254560800, 0, 1054560800, 1, 30510, 30066, 0);
    InitializeEvent(0, 1054562815, 0);
    InitializeEvent(0, 1054562820, 1054560800, 30003, 20003, 1054562830, 0, 0, 0, 0, 0, 0, 1054562831, 1054562832, 1054562833, 1054562834, 1054562835);
});

$Event(1054562815, Restart, function() {
    WaitFor(InArea(10000, 1054562811));
    SetNetworkSyncState(Disabled);
    if (!EventFlag(1254560800)) {
        if (!SpecialStandbyEndedFlag(1054560800)) {
            if (!InArea(10000, 1054562810)) {
                if (InArea(10000, 1054562812)) {
                    WaitFixedTimeSeconds(1);
                    RestartEvent();
                }
L3:
                ClearSpEffect(10000, 4213);
                ChangeWeather(Weather.HeavySnow, 30, false);
                WaitFixedTimeSeconds(1);
                RestartEvent();
            }
L2:
            ChangeWeather(Weather.SnowyHeavyFog, -1, false);
            WaitFixedTimeSeconds(5);
            SetSpEffect(10000, 4213);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L1:
        ChangeWeather(Weather.HeavySnow, 30, false);
        WaitFixedTimeSeconds(3);
        ClearSpEffect(10000, 4213);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    ClearSpEffect(10000, 4213);
    ChangeWeather(Weather.None, -1, false);
    EndEvent();
});

$Event(1054562820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, Equal, 1);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        area |= InArea(10000, X12_4);
    }
    area |= InArea(10000, X40_4)
        || InArea(10000, X44_4)
        || InArea(10000, X48_4)
        || InArea(10000, X52_4)
        || InArea(10000, X56_4)
        || EntityInRadiusOfEntity(10000, X0_4, X16_4, 1);
    areaMapChrSp &= area
        && !PlayerInMap(31, 22, 0, 0)
        && CharacterBackreadStatus(X0_4)
        && WeatherActive(Weather.SnowyHeavyFog, 3, 0)
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
        areaMapChrSp &= chr;
    }
L9:
    areaMapChrSp &= chrSp;
    WaitFor(
        areaMapChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    WaitFixedTimeSeconds(0.1);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1054562820, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            SetCharacterGravity(X0_4, Enabled);
            SetCharacterMaphit(X0_4, true);
        }
        GotoIf(L5, InArea(10000, X12_4));
        GotoIf(L6, InArea(10000, X40_4));
        GotoIf(L7, InArea(10000, X44_4));
        area2 |= InArea(10000, X48_4);
        GotoIf(L8, area2);
        area2 |= InArea(10000, X52_4);
        GotoIf(L9, area2);
        area2 |= InArea(10000, X56_4);
        GotoIf(L10, area2);
        Goto(L14);
L5:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562820, -1, X0_4);
        Goto(L14);
L6:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562821, -1, X0_4);
        Goto(L14);
L7:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562822, -1, X0_4);
        Goto(L14);
L8:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562823, -1, X0_4);
        Goto(L14);
L9:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562824, -1, X0_4);
        Goto(L14);
L10:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1054562825, -1, X0_4);
        Goto(L14);
L14:
        SetSpEffect(X0_4, 10206);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false, Equal, 1);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        SetCharacterGravity(X0_4, Enabled);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});
