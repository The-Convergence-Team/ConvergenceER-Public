// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005600, 1048570000, 1048571950, 1084227584, 1048570480);
    InitializeCommonEvent(0, 90005211, 1048570275, 30000, 20000, 1048572277, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1048570277, 30000, 20000, 1048572277, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1048570285, 30000, 20000, 1048572285, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1048570200, 1048570200, 40526, 0, 0);
    InitializeCommonEvent(0, 90005300, 1048570250, 1048570250, 1048570900, 0, 0);
    InitializeCommonEvent(0, 90005300, 1048570251, 1048570251, 1048570910, 0, 0);
    InitializeCommonEvent(0, 90005300, 1048570252, 1048570252, 1048570920, 0, 0);
    InitializeCommonEvent(0, 90005300, 1048570253, 1048570253, 1048570930, 0, 0);
    InitializeEvent(0, 1048572820, 1048570800, 30000, 20000, 1048572800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1048570800, 904980607, 24);
    InitializeCommonEvent(0, 90005860, 1048570800, 0, 1048570800, 0, 1048570700, 0);
    
    //Original Haligtree Waygate Event Initialization
    //InitializeCommonEvent(0, 90005605, 1048571500, 15, 15002600, 0, 1048572501, 1048572502, 1048572503, 0, 0, 0, 0);
    
    //New Haligtree Waygate Event Initialization
    InitializeEvent(0, 1048572600, 1048571500, 15, 15002600, 0, 1048572501, 1048572502, 1048572503, 0, 0, 0, 0);
    
    InitializeEvent(0, 1048572300, 1048571300, 1048576300, 1048576301, 1048575300, 1048575301, 1048572300);
    InitializeEvent(0, 1048572310, 0);
    InitializeEvent(0, 1048572320, 1048571300);
    InitializeEvent(0, 1048572350, 0);
    InitializeEvent(0, 1048572355, 0);
    InitializeEvent(0, 1048572390, 0);
    InitializeEvent(0, 1048572340, 1048575310);
    InitializeEvent(0, 1048572370, 1048571370, 1048571360, 1048570370);
    InitializeEvent(1, 1048572370, 1048571371, 1048571361, 1048570371);
    InitializeEvent(2, 1048572370, 1048571372, 1048571362, 1048570372);
    InitializeEvent(3, 1048572370, 1048571373, 1048571363, 1048570373);
    InitializeCommonEvent(0, 90005261, 1048570250, 1048572250, 1084227584, 0, -1);
    InitializeEvent(0, 1048572256, 0);
    InitializeEvent(0, 1048572260, 0);
    InitializeEvent(0, 1048572270, 0);
    InitializeEvent(0, 1048572275, 1048570255);
    InitializeEvent(0, 1048572580, 0);
    InitializeEvent(0, 1048572400, 0);
    
    // NPC
    InitializeCommonEvent(0, 90005250, 1048570224, 1048572503, 0, -1);
    InitializeCommonEvent(0, 90005300, 1048570224, 1048570224, 1048570810, 0, 0);
});

$Event(1048572256, Restart, function() {
    ForceAnimationPlayback(1048570256, 30001, true, false, false);
});

$Event(1048572260, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 416));
    SetSpEffect(20000, 14508);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1048572270, Restart, function() {
    WaitFor(CharacterHasSpEffect(1048570255, 14507));
    SetSpEffect(1048570254, 14507);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1048572275, Restart, function(X0_4) {
    EnableCharacterInvincibility(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1048572300, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    GotoIf(L5, EventFlag(1048572308));
    GotoIf(L6, EventFlag(1048572309));
    DeactivateGparamOverride(0);
    DisableAsset(X4_4);
    EnableAsset(X8_4);
    EnableCharacter(X12_4);
    DisableCharacterInvincibility(X12_4);
    DisableCharacter(X16_4);
    EnableCharacterInvincibility(X16_4);
    ClearSpEffect(10000, 190);
    EnableAssetTreasure(1048571256);
    SetEventFlagID(1048572308, ON);
    SetEventFlagID(1048572309, OFF);
    SetEventFlagID(1048572305, ON);
    SetEventFlagID(1048572308, ON);
    SetEventFlagID(1048572309, OFF);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L5:
    EndIf(EventFlag(1048572309));
    DeactivateGparamOverride(0);
    DisableAsset(X4_4);
    EnableAsset(X8_4);
    EnableCharacter(X12_4);
    DisableCharacterInvincibility(X12_4);
    DisableCharacter(X16_4);
    EnableCharacterInvincibility(X16_4);
    ClearSpEffect(10000, 190);
    EnableAssetTreasure(1048571256);
    Goto(L7);
L6:
    ActivateGparamOverride(0, 0);
    EnableAsset(X4_4);
    DisableAsset(X8_4);
    DisableCharacter(X12_4);
    EnableCharacterInvincibility(X12_4);
    EnableCharacter(X16_4);
    DisableCharacterInvincibility(X16_4);
    SetSpEffect(10000, 190);
    DisableAssetTreasure(1048571256);
    DeleteAssetfollowingSFX(1048571950, true);
    SetSpEffect(10000, 514);
L7:
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1048572309));
    EndIf(EventFlag(1048570350));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1048570310);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && ActionButtonInArea(9527, X0_4));
    DisplayGenericDialogAndSetEventFlags(30021, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, 1048572306, 1048572307, 0);
    if (!EventFlag(1048572306)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 60450, false, false, false);
    WaitFixedTimeSeconds(1);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, X20_4, -1, 10000, false, true);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(10000, 60451, false, false, true);
    SetEventFlagID(1048572305, ON);
    ActivateGparamOverride(0, 1.5);
    ShootBullet(1048570310, 1048572310, 100, 100930, 0, 90, 0);
    EnableAsset(X4_4);
    DisableAsset(X8_4);
    DisableCharacter(X12_4);
    DisableCharacter(1248550350);
    DisableCharacter(1248550351);
    DisableCharacter(1248550360);
    DisableCharacter(1248550361);
    EnableCharacterInvincibility(X12_4);
    EnableCharacterInvincibility(1248550350);
    EnableCharacterInvincibility(1248550351);
    EnableCharacterInvincibility(1248550360);
    EnableCharacterInvincibility(1248550361);
    EnableCharacter(X16_4);
    DisableCharacterInvincibility(X16_4);
    SetSpEffect(10000, 190);
    DisableAssetTreasure(1048571256);
    DeleteAssetfollowingSFX(1048571950, true);
    SetSpEffect(10000, 514);
    SetEventFlagID(1048572308, OFF);
    SetEventFlagID(1048572309, ON);
    Goto(L1);
L1:
    SetEventFlagID(1048572306, OFF);
    SetEventFlagID(1048572307, OFF);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1048572310, Restart, function() {
    DisableNetworkSync();
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 1048571310));
    DisplayGenericDialog(60100, PromptType.OKCANCEL, NumberofOptions.OneButton, 1048571310, 3);
    WaitFixedTimeSeconds(1);
    SetNetworkconnectedEventFlagID(1048570310, ON);
    RestartEvent();
});

$Event(1048572320, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 0, true, false, false);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1048570350));
    ForceAnimationPlayback(X0_4, 10, true, false, false);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1048570310);
    EndIf(EventFlag(1048572309));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && EventFlag(1048570310));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, 1, true, false, false);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending))
            || EventFlag(1048572309));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1048572340, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1048572350, Restart, function() {
    if (!EventFlag(1048570350)) {
        DeleteAssetfollowingSFX(1048571350, false);
        CreateAssetfollowingSFX(1048571350, 200, 1505);
        WaitFor(
            PlayerIsInOwnWorld()
                && EventFlag(1048570370)
                && EventFlag(1048570371)
                && EventFlag(1048570372)
                && EventFlag(1048570373));
        SetEventFlagID(1048570350, ON);
        WaitFixedTimeSeconds(2.3);
        DisplayGenericDialog(30020, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
        DisableAsset(1048571350);
        DeleteAssetfollowingSFX(1048571350, true);
        PlaySE(1048571350, SoundType.SFX, 1500);
        SetSpEffect(20000, 8870);
        WaitFixedTimeSeconds(4.5);
        WarpPlayer(60, 48, 57, 0, 1048572301, 0);
        EndEvent();
        EndEvent();
    }
L0:
    DisableAsset(1048571350);
    DeleteAssetfollowingSFX(1048571350, true);
    PlaySE(1048571350, SoundType.SFX, 1500);
    EndEvent();
});

$Event(1048572355, Restart, function() {
    if (!EventFlag(1048570350)) {
        DeleteAssetfollowingSFX(1048571380, false);
        DeleteAssetfollowingSFX(1048571381, false);
        DeleteAssetfollowingSFX(1048571382, false);
        DeleteAssetfollowingSFX(1048571383, false);
        DeleteAssetfollowingSFX(1048571384, false);
        DeleteAssetfollowingSFX(1048571385, false);
        CreateAssetfollowingSFX(1048571380, 200, 1503);
        CreateAssetfollowingSFX(1048571381, 200, 1503);
        CreateAssetfollowingSFX(1048571382, 200, 1503);
        CreateAssetfollowingSFX(1048571383, 200, 1503);
        CreateAssetfollowingSFX(1048571384, 200, 1503);
        CreateAssetfollowingSFX(1048571385, 200, 1503);
        WaitFor(EventFlag(1048572309));
    }
L0:
    DisableAsset(1048571380);
    DisableAsset(1048571381);
    DisableAsset(1048571382);
    DisableAsset(1048571383);
    DisableAsset(1048571384);
    DisableAsset(1048571385);
    DeleteAssetfollowingSFX(1048571380, false);
    DeleteAssetfollowingSFX(1048571381, false);
    DeleteAssetfollowingSFX(1048571382, false);
    DeleteAssetfollowingSFX(1048571383, false);
    DeleteAssetfollowingSFX(1048571384, false);
    DeleteAssetfollowingSFX(1048571385, false);
    EndEvent();
});

$Event(1048572370, Restart, function(X0_4, X4_4, X8_4) {
    DeleteAssetfollowingSFX(X0_4, true);
    if (!EventFlag(X8_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1048572309);
        WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9528, X0_4));
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 60550, false, false, false);
        SetEventFlagID(X8_4, ON);
        WaitFixedTimeSeconds(1.2);
    }
L0:
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X4_4, 200, 806061);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1048572309);
    CreateAssetfollowingSFX(X0_4, 200, 806060);
    EndEvent();
    GotoIf(L0, EventFlag(1048572309));
});

$Event(1048572390, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1048570350));
    WaitFor(ActionButtonInArea(9529, 1048571350) || EventFlag(1048570350));
    EndIf(EventFlag(1048570350));
    DisplayGenericDialog(30023, PromptType.OKCANCEL, NumberofOptions.OneButton, 1048571350, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1048572400, Restart, function() {
    DisableAsset(1048576305);
});

$Event(1048572580, Restart, function() {
    RegisterLadder(1048570580, 1048570581, 1048571580);
    RegisterLadder(1048570582, 1048570583, 1048571582);
    RegisterLadder(1048570584, 1048570585, 1048571584);
    RegisterLadder(1048570586, 1048570587, 1048571586);
    RegisterLadder(1048570588, 1048570589, 1048571588);
    RegisterLadder(1048570590, 1048570591, 1048571590);
    RegisterLadder(1048570592, 1048570593, 1048571592);
    RegisterLadder(1048570594, 1048570595, 1048571594);
    RegisterLadder(1048570596, 1048570597, 1048571596);
});

$Event(1048572820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
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
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(X0_4, ON);
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        EnableCharacterAI(X0_4);
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

// Event 90005605 From Common_Func Warp to Haligtree
$Event(1048572600, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X20_4, OFF);
    SetEventFlagID(X24_4, OFF);
    if (!ThisEventSlot()) {
        DeleteAssetfollowingSFX(X0_4, true);
        SetEventFlagID(X16_4, OFF);
        WaitFixedTimeFrames(1);
    }
    onlineFlag |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag |= !EventFlag(X28_4);
    }
    if (!onlineFlag) {
        if (!EventFlag(X16_4)) {
            CreateAssetfollowingSFX(X0_4, 200, 806870);
            SetEventFlagID(X16_4, ON);
        }
    }
L1:
    onlineFlagAct &= PlayerIsInOwnWorld()
        && !(HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    if (X28_4 != 0) {
        if (Signed(X32_4) == 0) {
            onlineFlagAct &= EventFlag(X28_4) && EventFlag(X16_4);
        }
    }
    onlineFlagAct &= ActionButtonInArea(9140, X0_4);
    onlineFlag2 |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag2 |= !EventFlag(X28_4);
    }
    onlineFlag3 = onlineFlag2 && EventFlag(X16_4);
    onlineFlag4 |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag4 |= !EventFlag(X28_4);
    }
    onlineFlag5 = !onlineFlag4 && !EventFlag(X16_4);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X28_4);
    onlineFlagAct2 |= onlineFlagAct || onlineFlag3 || onlineFlag5;
    if (X28_4 != 0) {
        onlineFlagAct2 |= flag;
    }
    WaitFor(onlineFlagAct2);
    if (!onlineFlagAct.Passed) {
        if (onlineFlag3.Passed) {
            DeleteAssetfollowingSFX(X0_4, true);
            SetEventFlagID(X16_4, OFF);
        }
L2:
        WaitFixedTimeSeconds(0.033);
        RestartEvent();
    }
L3:
    if (!(X28_4 == 0 || Signed(X32_4) == 0)) {
        if (!EventFlag(X28_4)) {
            DisplayGenericDialog(X32_4, PromptType.YESNO, NumberofOptions.NoButtons, X0_4, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
    }
L4:
    //DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X20_4, X24_4, X24_4);
    //if (!EventFlag(X20_4)) {
    //    WaitFixedTimeSeconds(1);
    //    RestartEvent();
    //}
L6:
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, X12_4);
    SetPlayerRespawnPoint(15002600);
    RestartEvent();
    WaitFixedTimeSeconds(X36_4);
    WaitFixedTimeSeconds(X40_4);
});
