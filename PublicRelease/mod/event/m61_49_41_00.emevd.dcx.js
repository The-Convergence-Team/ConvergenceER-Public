// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(76966, 2049411950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2049410800, 30000, 20000, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2049410800, 905580601, 25);
    InitializeCommonEvent(0, 90005860, 2049410800, 0, 2049410800, 1, 30850, 0);
    InitializeCommonEvent(0, 90005734, 4265, 2048429222, 2049412710, 2049412710, 2048429222, -1);
    InitializeEvent(0, 2049410700, 2048429224, 4260, 4265, 2048429222);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2049410850, 2049410851, 904810706, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2049410850, 30770, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2049410850, 2049410851, 2049410851); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2049410850, 2049410851, 2049410852); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2049410925, 2049411925, 2049410850);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2049410850, 76966, 2049410950, 2049411950, 1084227584);
});

$Event(2049412200, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011451) && CharacterHasSpEffect(X0_4, 20011450));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(X0_4, X4_4);
    ClearSpEffect(X0_4, 20011450);
    RestartEvent();
});

$Event(2049412201, Restart, function(X0_4) {
    WaitFor(
        !CharacterHasSpEffect(X0_4, 20011450) && CharacterRatioAIState(X0_4, AIStateType.Normal));
    SetSpEffect(X0_4, 20011450);
    ClearSpEffect(X0_4, 20011452);
    RestartEvent();
});

$Event(2049412202, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011453) || CharacterHasSpEffect(X0_4, 20011451));
    if (!CharacterHasSpEffect(X0_4, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049412203, Restart, function(X0_4) {
    chrSp |= CharacterAIState(X0_4, AIStateType.PassiveAlert)
        || CharacterAIState(X0_4, AIStateType.ActiveAlert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(chrSp);
    chr = CharacterAIState(X0_4, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(X0_4, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(X0_4, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(X0_4, 20011458);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(X0_4, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(X0_4, 20011462);
    }
    Goto(L20);
L1:
    SetSpEffect(X0_4, 20011459);
    Goto(L20);
L2:
    SetSpEffect(X0_4, 20011460);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(X0_4, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(X0_4, 20011462);
    }
    Goto(L20);
L20:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2049410700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlagID(X0_4, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4) || !EventFlag(X8_4));
    WaitFor(EventFlag(X4_4) && EventFlag(X8_4) && EventFlag(X12_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X12_4));
    RestartEvent();
});
