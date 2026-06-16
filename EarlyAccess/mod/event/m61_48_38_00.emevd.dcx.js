// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(76962, 2048381950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048380800, 2048380800, 2048380020, 1084227584, 0);
    InitializeEvent(0, 2048382806, 0);
    InitializeEvent(0, 2048382815, 2048380810);
    InitializeEvent(0, 2048382807, 2048380800, 2048380810);
    InitializeEvent(0, 2048382809, 2048380800, 2048383800, 2048383801, 2048383802, 15300, 15310, 15311, 15312);
    InitializeEvent(0, 2048382801, 2048380800, 2048382810, 15310, 2048380800);
    InitializeEvent(1, 2048382801, 2048380800, 2048382811, 15311, 2048380800);
    InitializeEvent(2, 2048382801, 2048380800, 2048382812, 15312, 2048380800);
    InitializeEvent(0, 2048382800, 2048380800, 2048380800, 15302, 15310, 15311, 15312, 2048382800, 2048382801, 2048382802);
    InitializeEvent(0, 2048382808, 2048380800, 2048380800, 2048385200);
    InitializeEvent(0, 2048382870, 2048380850, 30005, 20005, 2048382850, 2048380870, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2048380850, 905860601, 22);
    InitializeCommonEvent(0, 90005860, 2048380850, 0, 2048380850, 1, 30840, 0);
    InitializeEvent(0, 2048382865, 0);
    InitializeEvent(0, 2048382871, 0);
    InitializeEvent(0, 2048382866, 2048380851, 5032, 2048380850);
    InitializeEvent(1, 2048382866, 2048380852, 5026, 2048380850);
    InitializeEvent(3, 2048382866, 2048380854, 5026, 2048380850);
    InitializeEvent(6, 2048382866, 2048380857, 5029, 2048380850);
    InitializeEvent(5, 2048382866, 2048380856, 5032, 2048380850);
    InitializeEvent(4, 2048382866, 2048380855, 5033, 2048380850);
    InitializeEvent(2, 2048382866, 2048380853, 5034, 2048380850);
    InitializeEvent(7, 2048382866, 2048380858, 5030, 2048380850);
    InitializeEvent(8, 2048382866, 2048380859, 5028, 2048380850);
    InitializeCommonEvent(0, 90005211, 2048380306, 30016, 20016, 2048382300, 0, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2048380307, 30016, 20016, 2048382300, 0, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2048380308, 30016, 20016, 2048382300, 0, 1082130432, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005780, 2048380850, 2048382160, 2048382161, 2048380700, 20, 2048382701, 2051459751, 0, 0);
    InitializeCommonEvent(0, 90005781, 2048380850, 2048382160, 2048382161, 2048380700);
    InitializeCommonEvent(0, 90005783, 2048380850, 2048382160, 2048382161, 2048380700, 2048382701, 2048382400, 1);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2048380860, 2048380861, 904810701, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2048380860, 30720, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2048380860, 2048380861, 2048380861); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2048380860, 2048380861, 2048380862); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2048380925, 2048381925, 2048380860);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2048380860, 76962, 2048380950, 2048381950, 1084227584);
});

$Event(2048382800, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(EventFlag(X4_4));
    WaitFor(CharacterHasSpEffect(X0_4, X8_4));
    GotoIf(L1, CharacterHasSpEffect(X0_4, X12_4));
    GotoIf(L2, CharacterHasSpEffect(X0_4, X16_4));
    GotoIf(L3, CharacterHasSpEffect(X0_4, X20_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X24_4, -1, X0_4);
    Goto(L0);
L1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X28_4, -1, X0_4);
    Goto(L0);
L2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X32_4, -1, X0_4);
    Goto(L0);
L3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X28_4, -1, X0_4);
    Goto(L0);
L0:
    ForceAnimationPlayback(X0_4, 3022, true, false, false);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(2048382801, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(InArea(X0_4, X4_4) && CharacterHasSpEffect(X0_4, X8_4, Equal, 0));
    SetSpEffect(X0_4, X8_4);
    RestartEvent();
});

$Event(2048382805, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(HPRatio(X0_4) <= 0.2 && CharacterHasSpEffect(X0_4, X4_4));
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
});

$Event(2048382806, Restart, function() {
    SetSpEffect(2048380800, 20011750);
    EndEvent();
});

$Event(2048382807, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2048380800));
    SetCharacterEventTarget(X0_4, X4_4);
    SetCharacterEventTarget(X4_4, X0_4);
    WaitFor(CharacterDead(X4_4));
    WaitFixedTimeSeconds(5);
    WaitFor(!CharacterDead(X4_4));
    RestartEvent();
});

$Event(2048382808, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X4_4));
    WaitFor(mainGroupAbuse);
    ForceCharacterDeath(X8_4, false);
    DisableGenerator(2048383800);
    DisableGenerator(2048383801);
    DisableGenerator(2048383802);
    WaitFixedTimeSeconds(2);
    ForceCharacterDeath(X8_4, false);
    WaitFixedTimeSeconds(7);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    EndEvent();
});

$Event(2048382809, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (EventFlag(2048380800)) {
        DisableGenerator(X4_4);
        DisableGenerator(X8_4);
        DisableGenerator(X12_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasSpEffect(X0_4, X16_4) && !EventFlag(X0_4));
    if (CharacterHasSpEffect(X0_4, X20_4)) {
        EnableGenerator(X4_4);
    }
    if (CharacterHasSpEffect(X0_4, X24_4)) {
        EnableGenerator(X8_4);
    }
    if (CharacterHasSpEffect(X0_4, X28_4)) {
        EnableGenerator(X12_4);
    }
    WaitFixedTimeSeconds(1);
    DisableGenerator(X4_4);
    DisableGenerator(X8_4);
    DisableGenerator(X12_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2048382815, Restart, function(X0_4) {
    EndIf(EventFlag(2048380800));
    SetSpEffect(X0_4, 20012650);
});

$Event(2048382865, Restart, function() {
    EndIf(EventFlag(2048380850));
    WaitFor(CharacterHasSpEffect(2048380850, 5036));
    ForceAnimationPlayback(2048380850, 3019, false, false, false);
});

$Event(2048382866, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacterAI(X0_4);
    EnableCharacterDefaultBackread(X0_4);
    EnableCharacterInvincibility(X0_4);
    EndIf(EventFlag(2048380850));
    WaitFor(CharacterHasSpEffect(2048380850, 20011653));
    WaitRandomTimeSeconds(0, 0.3);
    EnableCharacterAI(X0_4);
    SetCharacterEventTarget(X0_4, X8_4);
    SetSpEffect(2048380850, 20011667);
    WaitFixedTimeRealFrames(1);
    SetSpEffect(X0_4, X4_4);
    DisableCharacterInvincibility(X0_4);
    ForceAnimationPlayback(X0_4, 20003, false, false, false);
});

$Event(2048382351, Restart, function(X0_4) {
    WaitFor(EventFlag(2048380850));
    ForceCharacterDeath(X0_4, false);
    DisableCharacterCollision(X0_4);
    DisableCharacter(X0_4);
});

$Event(2048382870, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(EventFlag(X16_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
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
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SetNetworkconnectedEventFlagID(X16_4, ON);
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

$Event(2048382871, Default, function() {
    EndIf(EventFlag(2048380870));
    SetSpEffect(2048380102, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 2048380870);
    SetSpEffect(2048380102, 9532);
});
