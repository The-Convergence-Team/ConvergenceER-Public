// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1051560000, 1051561950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76503, 1051561980, 77500, 2, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeCommonEvent(0, 90005300, 1051560210, 1051560210, 1051560700, 0, 0);
    InitializeEvent(0, 1051562200, 1051565200);
    InitializeEvent(0, 1051562500, 0);
    InitializeEvent(0, 1051562510, 0); // Shut by seal message
    InitializeCommonEvent(0, 90005704, 1051560700, 3841, 3840, 1051569201, 1);
    InitializeCommonEvent(0, 90005703, 1051560700, 3841, 3842, 1051569201, 3841, 3840, 3844, -1);
    InitializeEvent(0, 1051563700, 1051560700);
    InitializeEvent(0, 1051563701, 1051560700, 1088421888);
    InitializeEvent(0, 1051563702, 1092616192, 1094713344, 1101004800, 1051569206);
    InitializeEvent(0, 1051563703, 1051561702);
    InitializeEvent(0, 1051563704, 1051560700);
    InitializeEvent(0, 1051563710, 1051560705);
    InitializeCommonEvent(0, 90005704, 1051560705, 4181, 4180, 1051569251, 3);
    InitializeCommonEvent(0, 90005703, 1051560705, 4181, 4182, 1051569251, 4181, 4180, 4182, -1);
    InitializeCommonEvent(0, 90005702, 1051560705, 4183, 4180, 4184);
    InitializeEvent(0, 1051563715, 1051560720);
    InitializeCommonEvent(0, 90005704, 1051560720, 4201, 4200, 1040529251, 3);
    InitializeCommonEvent(0, 90005703, 1051560720, 4201, 4202, 1040529251, 4201, 4200, 4203, -1);
    InitializeCommonEvent(0, 90005702, 1051560720, 4203, 4200, 4204);
    InitializeEvent(0, 1051563716, 1051560710);
    InitializeEvent(0, 1051563717, 1051560710);
    InitializeEvent(0, 1051563720, 1051560715, 1051562700, 1125842944);
    InitializeCommonEvent(0, 90005725, 4795, 4796, 4798, 1051569405, 1051560725, 1051560726, 1051566700);
    InitializeCommonEvent(0, 90005703, 1051560725, 4796, 4797, 1051569406, 4796, 4795, 4799, 0);
    InitializeCommonEvent(0, 90005704, 1051560725, 4796, 4795, 1051569406, 3);
    InitializeCommonEvent(0, 90005702, 1051560725, 4798, 4795, 4799);
    InitializeCommonEvent(0, 90005703, 1051560726, 4796, 4797, 1051569407, 4796, 4795, 4799, 0);
    InitializeCommonEvent(0, 90005704, 1051560726, 4796, 4795, 1051569407, 3);
    InitializeCommonEvent(0, 90005728, 1051560726, 1051562746, 1051562747);
    InitializeCommonEvent(0, 90005727, 4796, 1051560725, 1051560726, 4795, 4798);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1051560700, true);
    SetCharacterBackreadState(1051560705, true);
    SetCharacterBackreadState(1051560710, true);
    SetCharacterBackreadState(1051560715, true);
    SetCharacterBackreadState(1051560720, true);
    SetCharacterBackreadState(1051560725, true);
    SetCharacterBackreadState(1051560726, true);
});

$Event(1051562200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1051562500, Restart, function() {
    if (!EventFlag(1051569206)) {
        DeleteAssetfollowingSFX(1051561500, true);
        CreateAssetfollowingSFX(1051561500, 200, 1503);
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1051569206);
        DisplayBlinkingMessage(30030);
    }
L0:
    DisableAsset(1051561500);
    DeleteAssetfollowingSFX(1051561500, true);
    RegisterLadder(1051560580, 1051560581, 1051561580);
    PlaySE(1051561500, SoundType.SFX, 1500);
    EndEvent();
});

$Event(1051562510, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1051569206));
    WaitFor(ActionButtonInArea(9320, 1051561500) || EventFlag(1051569206));
    EndIf(EventFlag(1051569206));
    DisplayBlinkingMessage(30031);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1051563700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3840)) {
            SetEventFlagID(1051569204, OFF);
        }
    }
L10:
    if (!EventFlag(3845)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterTalkRange(X0_4, 17);
        WaitFor(EventFlag(3845));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3840));
    GotoIf(L2, EventFlag(3841));
    GotoIf(L3, EventFlag(3842));
    GotoIf(L4, EventFlag(3843));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 930000, false, false, false);
    SetCharacterTalkRange(X0_4, 30);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3845));
    RestartEvent();
});

$Event(1051563701, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1051569206));
    WaitFor(
        (CharacterHasSpEffect(35000, 14200) || CharacterHasSpEffect(35000, 14201))
            && CharacterHasSpEffect(35000, 297000)
            && !EventFlag(3841)
            && EntityInRadiusOfEntity(X0_4, 35000, X4_4, 1));
    SetEventFlagID(1051562708, ON);
    DisableCharacterCollision(X0_4);
    EnableCharacterImmortality(X0_4);
    WaitFor(EventFlag(1051562709));
    ForceAnimationPlayback(X0_4, 20002, false, false, false);
    SetSpEffect(10000, 9560);
    SetSpEffect(10000, 236000);
    WaitFixedTimeSeconds(2);
    SetEventFlagID(1051569206, ON);
    if (!EventFlag(60829)) {
        SetEventFlagID(60829, ON);
        AwardGesture(72);
    }
    WaitFixedTimeSeconds(8);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1051563702, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X12_4));
    SetEventFlagID(1051562702, ON);
    WaitFor(EventFlag(1051562703));
    WaitFixedTimeSeconds(X0_4);
    EndIf(EventFlag(X12_4));
    SetEventFlagID(1051562704, ON);
    WaitFor(EventFlag(1051562705));
    WaitFixedTimeSeconds(X4_4);
    EndIf(EventFlag(X12_4));
    SetEventFlagID(1051562706, ON);
    WaitFor(EventFlag(1051562707));
    WaitFixedTimeSeconds(X8_4);
    EndIf(EventFlag(X12_4));
    SetEventFlagID(1051562702, OFF);
    SetEventFlagID(1051562703, OFF);
    SetEventFlagID(1051562704, OFF);
    SetEventFlagID(1051562705, OFF);
    SetEventFlagID(1051562706, OFF);
    SetEventFlagID(1051562707, OFF);
    RestartEvent();
});

$Event(1051563703, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(ActionButtonInArea(6590, X0_4));
    DisplayGenericDialog(30090, PromptType.YESNO, NumberofOptions.OneButton, 0, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1051563704, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    BatchSetNetworkconnectedEventFlags(3840, 3844, OFF);
    SetNetworkconnectedEventFlagID(3840, ON);
    SaveRequest();
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    flag = !EventFlag(3840);
    flag2 = EventFlag(1051569206);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    sp = CharacterHasSpEffect(X0_4, 14200);
    time = ElapsedSeconds(10);
    WaitFor(sp || time);
    RestartIf(time.Passed);
    WaitFor(CharacterHasSpEffect(X0_4, 14201));
    RestartEvent();
});

$Event(1051563710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    if (!EventFlag(4189)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4189));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
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
    WaitFor(!EventFlag(4189));
    RestartEvent();
});

$Event(1051563715, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4200)) {
            SetEventFlagID(1040529253, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(4209) || EventFlag(4211))) {
        WaitFor(EventFlag(4209) || EventFlag(4211));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90102, false, false, false);
    if (EventFlag(4211)) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1051562710, -1);
    }
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(4209) || EventFlag(4211)));
    RestartEvent();
});

$Event(1051563716, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(
        (EventFlag(4209) && !EventFlag(4203))
            || (!EventFlag(4217) && EventFlag(4203) && EventFlag(11009555) && !EventFlag(11059304)));
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930009, false, false, false);
    SetNetworkconnectedEventFlagID(1040549254, OFF);
    SetNetworkconnectedEventFlagID(11009554, OFF);
    SetNetworkconnectedEventFlagID(1051569454, ON);
    SetNetworkconnectedEventFlagID(11059304, OFF);
    if (!mainGroupAbuse) {
    }
L20:
    WaitFor(
        !((EventFlag(4209) && !EventFlag(4203))
            || (!EventFlag(4217) && EventFlag(4203) && EventFlag(11009555) && !EventFlag(11059304))));
    RestartEvent();
});

$Event(1051563717, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EnableCharacterImmortality(X0_4);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(1040542710, ON);
    ForceAnimationPlayback(X0_4, 20014, false, true, true);
    EndEvent();
});

$Event(1051563720, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4100));
    EndIf(!EventFlag(4106));
    EndIf(EventFlag(1051569301));
    EndIf(EventFlag(1047589205));
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    if (!EventFlag(1051562720)) {
        SetEventFlagID(1051569300, OFF);
    }
    WaitFor(InArea(10000, X4_4));
    SetCharacterTalkRange(X0_4, X8_4);
    SetEventFlagID(1051569300, ON);
    WaitFixedTimeSeconds(30);
    SetCharacterTalkRange(X0_4, 17);
    EndEvent();
});
