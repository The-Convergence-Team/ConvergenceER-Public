// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1043522500, 1043520700, 1043520701, 1043520505, 1043522500, 1043522500);
    InitializeEvent(0, 1043522501, 0);
    InitializeEvent(0, 1043522505, 1043520505, 1043520700, 1043520701, 1043522500);
    InitializeEvent(0, 1043522510, 0);
    InitializeEvent(0, 1043522515, 0);
    InitializeCommonEvent(0, 90005300, 1043520506, 1043520701, 1043520500, 0, 0);
    InitializeCommonEvent(0, 90005300, 1043520400, 1043520400, 40316, 0, 0);
    InitializeCommonEvent(0, 90005631, 1043521401, 61032);
    InitializeCommonEvent(0, 90005705, 1043520710);
    
    InitializeEvent(0, 1043522520, 0); // Honse Obtain
    InitializeEvent(0, 1043522521, 0); // Seal
    InitializeEvent(0, 1043522522, 0); // Sound Tease
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043520705, true);
    SetCharacterBackreadState(1043520710, true);
});

$Event(1043522500, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableCharacter(X4_4);
    DisableCharacterGravity(X4_4);
    DisableCharacterCollision(X4_4);
    DisableCharacterAI(X4_4);
    EndIf(EventFlag(X8_4));
    ForceAnimationPlayback(X0_4, 30029, true, false, true);
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || (InArea(10000, X12_4)
                && CharacterBackreadStatus(X0_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.5);
    if (CharacterHPValue(X0_4) != 0) {
        EnableCharacterAI(X0_4);
        ForceAnimationPlayback(X0_4, 20030, true, false, true);
        DisableLockOnPoint(X0_4, 220);
        SetSpEffect(X0_4, 9730);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 900, 636615);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, 900);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        WaitFixedTimeSeconds(1);
        SetEventFlagID(X16_4, ON);
        EndEvent();
    }
L0:
    SetEventFlagID(1043522506, ON);
    EndEvent();
});

$Event(1043522501, Restart, function() {
    EndIf(EventFlag(1043520506));
    CreateBulletOwner(1043520701);
    WaitFor(CharacterDead(1043520701));
    ShootBullet(1043520701, 1043520701, 220, 125, 0, 0, 0);
    EndEvent();
});

$Event(1043522505, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X12_4) && !EventFlag(1043522700) && !EventFlag(1043522506));
    EnableCharacter(X8_4);
    EnableCharacterGravity(X8_4);
    SetSpEffect(X8_4, 9732);
    ForceCharacterDeath(X4_4, false);
    DisableCharacterGravity(X4_4);
    DisableCharacter(X4_4);
    DisableCharacterAI(X4_4);
    WaitFixedTimeSeconds(0.4);
    EnableCharacterAI(X8_4);
    EnableCharacterCollision(X8_4);
    WaitFor(CharacterDead(X8_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X8_4, 900);
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterGravity(X4_4);
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1043522510, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1043522700));
    SetNetworkconnectedEventFlagID(1043522700, ON);
    WaitFor(!EventFlag(1043522700));
    SetNetworkconnectedEventFlagID(1043522700, OFF);
    EndEvent();
});

$Event(1043522515, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043520505));
    SetCharacterTalkRange(1043520700, 150);
    SetCharacterTalkRange(1043520701, 150);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1043520505);
    SetCharacterTalkRange(1043520700, 17);
    SetCharacterTalkRange(1043520701, 17);
    EndEvent();
});

// Honse Obtain
$Event(1043522520, Restart, function() {
    if (EventFlag(1043520520) || EventFlag(63202)) {
        DisableCharacter(1043520520);
        EndEvent();
    }
    
    SetCharacterTeamType(1043520520, 0);
    WaitFor(ActionButtonInArea(6255, 1043520520));
    
    WaitFixedTimeFrames(20);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 220, 234);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 220, 303200);
    
    WaitFixedTimeFrames(40);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 900, 524881);
    WaitFixedTimeFrames(10);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 900, 524881);
    WaitFixedTimeFrames(6);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 900, 524881);
    
    WaitFixedTimeFrames(15);
    SetSpEffect(1043520520, 10124);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 1, 450782);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 2, 450782);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 3, 450782);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 4, 450782);
    SpawnOneshotSFX(TargetEntityType.Character, 1043520520, 900, 524882);
    if (InArea(10000, 1043520523))
        SetSpEffect(10000, 3000); // Full Heal
    
    WaitFixedTimeFrames(20);
    DisableCharacter(1043520520);
    
    WaitFixedTimeSeconds(1.5);
    AwardItemsIncludingClients(1043520100);
    SetEventFlagID(1043520520, ON);
    EndEvent();
});

// Guardhouse Seal
$Event(1043522521, Restart, function() {
    if (EventFlag(1041510800) || EventFlag(1043520520) || EventFlag(63102)) {
        DisableAsset(1043520521);
        EndEvent();
    }
    
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(1043522522)) {
            DeleteAssetfollowingSFX(1043520521, true);
            CreateAssetfollowingSFX(1043520521, 101, 1540);
            SetNetworkconnectedEventFlagID(1043522522, ON);
        }
L2:
        flag |= EventFlag(1041510800);
        WaitFor(ActionButtonInArea(9503, 1043520521) || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(20800, PromptType.YESNO, NumberofOptions.OneButton, 1043520521, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        DeleteAssetfollowingSFX(1043520521, true);
        DisableAsset(1043520521);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(1043520521, true);
    CreateAssetfollowingSFX(1043520521, 101, 1540);
    EndEvent();
});

// Horse Suggesiton Sound
$Event(1043522522, Restart, function() {
    EndIf(EventFlag(1041510800) || EventFlag(1043520520) || EventFlag(63102));
    
    WaitFor(InArea(10000, 1043520522));
    EndIf(EventFlag(1041510800) || EventFlag(1043520520) || EventFlag(63102));
    WaitRandomTimeFrames(0, 50);
    
    PlaySE(1043520520, SoundType.CharacterMotion, 800008008);
    WaitRandomTimeSeconds(10, 40);
    RestartEvent();
});
