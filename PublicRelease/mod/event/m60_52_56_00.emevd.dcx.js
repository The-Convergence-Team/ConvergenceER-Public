// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1052560000, 1052561950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 1052560800, 1052560001, 1052560951, 1052561951, 0); //guardian grace
    InitializeCommonEvent(0, 90005100, 76510, 76520, 1052561980, 77500, 5, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    //InitializeCommonEvent(0, 90005860, 1052560800, 0, 1052560800, 0, 30525, 0);
    //InitializeEvent(0, 1052562815, 1052560800, 904810601, 18);
    //InitializeCommonEvent(0, 90005211, 1052560800, 30000, 20000, 1052562800, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1052560211, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    //InitializeEvent(0, 1052562820, 0);
    //InitializeEvent(0, 1052562821, 0);
    //InitializeEvent(0, 1052562830, 0);
    InitializeCommonEvent(0, 90005771, 1052560950, 1052562700);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1052560750, 1052560725, 1052560800);
    InitializeCommonEvent(0, 90005876, 1052560800, 1052560801, 904810659, 920900);
    InitializeCommonEvent(0, 90005875, 1052560800, 30525, 920900);
    InitializeCommonEvent(0, 90005890, 1052560800, 1052560801, 1052560801);
    InitializeCommonEvent(0, 90005891, 1052560800, 1052560801, 1052560802);
    InitializeEvent(0, 98005303, 1052560801, 1052560804);
    InitializeEvent(0, 98005304, 1052560801, 1052560804);
});

$Event(1052562815, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlag(TargetEventFlagType.EventFlag, 9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 0, X4_4);
    WaitFor(
        !((CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else {
        GotoIf(S0, EventFlag(9000));
        WaitFixedTimeSeconds(1);
    }
S0:
    DisplayBossHealthBar(Disabled, 1052560803, 0, X4_4);
    SetEventFlag(TargetEventFlagType.EventFlag, 9290, OFF);
    RestartEvent();
L1:
    SetEventFlag(TargetEventFlagType.EventFlag, 9291, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 1, X4_4);
    WaitFor(
        !((CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else {
        GotoIf(S1, EventFlag(9000));
        WaitFixedTimeSeconds(1);
    }
S1:
    DisplayBossHealthBar(Disabled, 1052560803, 1, X4_4);
    SetEventFlag(TargetEventFlagType.EventFlag, 9291, OFF);
    RestartEvent();
});

$Event(1052562820, Restart, function() {
    SetSpEffect(1052560800, 17320);
    SetSpEffect(1052560801, 17321);
    SetSpEffect(1052560802, 17322);
    SetCharacterHPBarDisplay(1052560800, Disabled);
    SetCharacterHPBarDisplay(1052560801, Disabled);
    SetCharacterHPBarDisplay(1052560802, Disabled);
    SetCharacterHPBarDisplay(1052560803, Disabled);
    SetCharacterGravity(1052560803, Disabled);
    ChangeCharacterCollisionState(1052560803, Disabled);
    CreateReferredDamagePair(1052560800, 1052560803);
    CreateReferredDamagePair(1052560801, 1052560803);
    CreateReferredDamagePair(1052560802, 1052560803);
});

$Event(1052562821, Restart, function() {
    if (EventFlag(1052560800)) {
        ChangeCharacterCollisionState(1052560800, Disabled);
        ChangeCharacterCollisionState(1052560801, Disabled);
        ChangeCharacterCollisionState(1052560802, Disabled);
        ChangeCharacterCollisionState(1052560803, Disabled);
        ForceCharacterDeath(1052560800, false);
        ForceCharacterDeath(1052560801, false);
        ForceCharacterDeath(1052560802, false);
        ForceCharacterDeath(1052560803, false);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterHPValue(1052560800) == 0
            || CharacterHPValue(1052560801) == 0
            || CharacterHPValue(1052560802) == 0
            || CharacterHPValue(1052560803) == 0);
    ForceCharacterDeath(1052560800, false);
    ForceCharacterDeath(1052560801, false);
    ForceCharacterDeath(1052560802, false);
    ForceCharacterDeath(1052560803, false);
});

$Event(1052562830, Restart, function() {
    ChangeCharacterEnableState(1052560801, Disabled);
    ChangeCharacterEnableState(1052560802, Disabled);
    if (!EventFlag(1052562830)) {
        WaitFor(CharacterHasSpEffect(1052560800, 17325) || CharacterHasSpEffect(1052560801, 17326));
        SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052562830, ON);
        ChangeCharacterEnableState(1052560801, Enabled);
        WarpCharacterAndCopyFloor(1052560801, TargetEntityType.Character, 1052560800, 900, 1052560800);
        ForceAnimationPlayback(1052560801, 20020, false, true, false, Equal, 1);
        WaitFixedTimeSeconds(5);
        SetSpEffect(1052560800, 17327);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(1052560801, Enabled);
    SetSpEffect(1052560800, 17327);
    EndEvent();
});
