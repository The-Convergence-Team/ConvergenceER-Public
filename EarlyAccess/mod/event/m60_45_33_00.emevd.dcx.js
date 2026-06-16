// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1045330000, 1045331950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005910, 1045331940, 1045330101, 1045330103, 3);
    InitializeCommonEvent(0, 9005911, 1045331941);
    InitializeCommonEvent(0, 9005912, 1045330100, 605053);
    InitializeCommonEvent(0, 90005300, 1045330200, 1045330200, 45000000, 0, 0);
    InitializeEvent(0, 1045332220, 0);
    InitializeEvent(0, 1045332250, 1045330200, 1045330201, 1045330202, 1045330205);
    InitializeEvent(0, 1045332251, 1045330200, 1045330200);
    InitializeEvent(1, 1045332251, 1045330201, 1045330201);
    InitializeEvent(2, 1045332251, 1045330202, 1045330202);
    InitializeEvent(0, 1045332252, 1045330200, 1045330200);
    InitializeEvent(1, 1045332252, 1045330201, 1045330201);
    InitializeEvent(2, 1045332252, 1045330202, 1045330202);
    InitializeEvent(0, 1045332253, 0);
    InitializeEvent(0, 1045332254, 0);
    InitializeEvent(0, 1045332255, 0);
    InitializeEvent(0, 1045332256, 0);
    InitializeCommonEvent(0, 90005300, 1045330200, 1045330200, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1045330201, 1045330201, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1045330202, 1045330202, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045330201, 0, 0, 0);
    //InitializeCommonEvent(0, 90005300, 1045330900, 1045330900, 1045330400, 0, 0);
    // Make enemies neutral to starcaller class starters
    InitializeCommonEvent(0, 98005301, 60909, 1045330901);
    InitializeCommonEvent(1, 98005301, 60909, 1045330902);
    InitializeCommonEvent(2, 98005301, 60909, 1045330903);
    InitializeCommonEvent(3, 98005301, 60909, 1045330904);
    InitializeCommonEvent(4, 98005301, 60909, 1045330905);
    InitializeCommonEvent(5, 98005301, 60909, 1045330906);
    InitializeEvent(0, 1045332921, 0); // Starcaller epic enterance
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1045330210, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330211, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330212, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330213, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330214, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330215, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330216, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330217, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330218, 1045332210, 1097859072, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1045330219, 1045332210, 1097859072, 0, 1700);
    //InitializeCommonEvent(0, 90005251, 1045330900, 1101004800, 0, 1700);
    InitializeEvent(0, 1045332265, 1045332200);
    InitializeEvent(1, 1045332265, 1045332201);
    InitializeEvent(2, 1045332265, 1045332202);
    InitializeEvent(3, 1045332265, 1045332203);
    InitializeEvent(4, 1045332265, 1045332204);
    InitializeEvent(5, 1045332265, 1045332205);
    InitializeEvent(6, 1045332265, 1045332206);
    InitializeEvent(7, 1045332265, 1045332207);
    InitializeEvent(8, 1045332265, 1045332208);
    InitializeEvent(9, 1045332265, 1045332209);
    InitializeEvent(10, 1045332265, 1045332210);
    InitializeEvent(11, 1045332265, 1045332211);
    InitializeEvent(12, 1045332265, 1045332212);
    InitializeEvent(13, 1045332265, 1045332213);
    InitializeEvent(14, 1045332265, 1045332214);
    InitializeEvent(15, 1045332265, 1045332215);
    InitializeEvent(16, 1045332265, 1045332216);
    InitializeEvent(17, 1045332265, 1045330908);
    InitializeEvent(18, 1045332265, 1045330909);
    InitializeEvent(0, 1045332922, 1045330904);
    InitializeEvent(1, 1045332922, 1045330906);
});

$Event(1045332220, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, 1045330220, 30, 1);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1045330220, 3011, false, false, false);
    WaitFixedTimeSeconds(5);
    TriggerAISound(4020, 1045332220, TargetEntityType.Area);
    EndEvent();
});

$Event(1045332250, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!EventFlag(X12_4)) {
        DeleteAssetfollowingSFX(1045331620, true);
        CreateAssetfollowingSFX(1045331620, 200, 1500);
        WaitFor(EventFlag(X0_4) && EventFlag(X4_4) && EventFlag(X8_4));
        SetEventFlagID(X12_4, ON);
        DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
    }
L0:
    PlaySE(1045331620, SoundType.SFX, 1500);
    DisableAsset(1045331620);
    DeleteAssetfollowingSFX(1045331620, true);
    EndEvent();
});

$Event(1045332251, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    DisableCharacterCollision(X4_4);
    ForceAnimationPlayback(X4_4, 20008, false, false, false);
    SetEventFlagID(X0_4, ON);
});

$Event(1045332252, Restart, function(X0_4, X4_4) {
    DisableCharacter(X4_4);
    EndIf(EventFlag(X0_4));
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(X4_4);
    }
    WaitFor(EventFlag(1045332621));
    EnableCharacter(X4_4);
    EnableCharacterImmortality(X4_4);
    DisableCharacterHPBarDisplay(X4_4);
});

$Event(1045332253, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1045330205));
    WaitFor(ActionButtonInArea(9320, 1033401610) || EventFlag(1045330205));
    EndIf(EventFlag(1045330205));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.OneButton, 1045331620, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1045332254, Restart, function() {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9210, 1045331621));
    DisplayGenericDialog(60011, PromptType.OKCANCEL, NumberofOptions.OneButton, 1045331621, 3);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1045332621, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1045332255, Restart, function() {
    RegisterLadder(45330580, 45330851, 1045331580);
});

$Event(1045332256, Restart, function() {
    EndIf(EventFlag(1045330202));
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkUpdateAuthority(10000, AuthorityLevel.Forced);
    SetSpEffect(1045330202, 11434);
    IssueShortWarpRequest(1045330202, TargetEntityType.Area, 1045331202, -1);
    if (HasDamageType(1045330202, 10000, DamageType.Unspecified)) {
        ForceCharacterDeath(1045330202, false);
        EndEvent();
    }
    WaitFixedTimeSeconds(7);
    RestartEvent();
});

$Event(1045332260, Restart, function(X0_4, X4_1, X5_1, X8_4) {
    DeleteMapSFX(X0_4, false);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    EndIf(EventFlag(1045330900));
    WaitUntilRandomTimeOfDay(X4_1, X5_1, 0, 1, 0, 0);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SpawnMapSFX(X0_4);
    WaitFor(
        (TimeOfDayInRange(1, 0, 1, 20, 59, 59) && CharacterAIState(1045330900, AIStateType.Normal))
            || EventFlag(1045330900));
    RestartEvent();
});

$Event(1045332265, Restart, function(X0_4) {
    if (!EventFlag(1045337010) || !EventFlag(1045337020)) {
        WaitFor(EventFlag(1045337010) && EventFlag(1045337020));
    }
L0:
    DeleteMapSFX(X0_4, false);
    EndEvent();
});

$Event(1045332900, Restart, function() {
    EndIf(EventFlag(1045330900));
    WaitFixedTimeFrames(1);
    RestartIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045332901));
    DisableCharacter(1045330900);
    DisableCharacterCollision(1045330900);
    DeleteAssetfollowingSFX(1045331900, true);
    WaitFor(TimeOfDayInRange(0, 0, 0, 1, 0, 0));
    CreateAssetfollowingSFX(1045331900, 100, 806901);
    WaitFor(TimeOfDayInRange(1, 0, 1, 23, 59, 59));
    RestartEvent();
});

$Event(1045332920, Restart, function() {
    EndIf(EventFlag(1045330900));
    WaitFixedTimeFrames(1);
    RestartIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && TimeOfDayInRange(0, 0, 0, 1, 0, 0)
            && ActionButtonInArea(9250, 1045331901));
    WaitFixedTimeSeconds(2);
    SetEventFlagID(1045332901, ON);
    DeleteAssetfollowingSFX(1045331900, true);
    SpawnOneshotSFX(TargetEntityType.Asset, 1045331900, -1, 806910);
    EnableCharacter(1045330900);
    EnableCharacterCollision(1045330900);
});

// Epic Enterance of player
$Event(1045332921, Restart, function() {
    EndIf(!EventFlag(60909) || EventFlag(1045330920));
    
    ForceAnimationPlayback(10000, 90007, false, false, false);
    SetCameraAngle(25, 180);
    SpawnMapSFX(1045330907);
    WaitFixedTimeFrames(80);
    ForceAnimationPlayback(10000, 90005, false, false, false);
    WaitFixedTimeFrames(36);
    DeleteMapSFX(1045330907, true);
    SpawnOneshotSFX(TargetEntityType.Area, 1045330907, -1, 636052);
    WaitFixedTimeFrames(43);
    ForceAnimationPlayback(10000, 0, false, false, false);
    
    SetEventFlagID(1045330920, ON);
});

// Disable AI so they dont walk away
$Event(1045332922, Restart, function(X0_4) {
    DisableCharacterAI(X0_4);
    WaitFor((EventFlag(1045337010) && EventFlag(1045337020)) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    EnableCharacterAI(X0_4);
});
