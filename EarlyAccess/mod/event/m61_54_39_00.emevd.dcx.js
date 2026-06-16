// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2054390000, 2054391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 2054391501, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391502, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391503, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391504, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391505, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391506, 100, 800, 0);
    InitializeCommonEvent(0, 90005201, 2054390850, 30010, 20010, 1114636288, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2054390850, 905370600, 28);
    InitializeCommonEvent(0, 90005860, 2054390850, 0, 2054390850, 1, 30805, 0);
    InitializeEvent(0, 2054392800, 0);
    InitializeEvent(0, 2054392810, 0);
    InitializeEvent(0, 2054390811, 0);
    InitializeEvent(0, 2054392849, 0);
    InitializeEvent(0, 2054392815, 0);
    InitializeEvent(0, 2054392816, 0);
    InitializeEvent(0, 2054392300, 0);
    InitializeEvent(0, 2054392400, 2054390400, 2054392400);
    InitializeEvent(1, 2054392400, 2054390401, 2054392400);
    InitializeEvent(2, 2054392400, 2054390402, 2054392400);
    InitializeEvent(3, 2054392400, 2054390403, 2054392400);
    InitializeEvent(4, 2054392400, 2054390404, 2054392400);
    InitializeCommonEvent(0, 90005211, 2054390400, 30001, 20001, 2054392401, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2054390402, 30001, 20001, 2054392402, 1084227584, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2054390404, 30001, 20001, 2054392402, 1084227584, 1061997773, 0, 0, 0, 0);
    InitializeEvent(0, 2054392201, 2054390201, 2054392201);
    InitializeEvent(1, 2054392201, 2054390202, 2054392201);
    InitializeEvent(2, 2054392201, 2054390204, 2054392201);
    InitializeEvent(3, 2054392201, 2054390205, 2054392201);
    InitializeEvent(4, 2054392201, 2054390206, 2054392201);
    InitializeEvent(0, 2054392480, 0);
    InitializeEvent(0, 2054392481, 2054390700);
    InitializeEvent(0, 2054392482, 0);
    InitializeEvent(0, 2054392483, 2054390700);
    InitializeEvent(0, 2054392484, 2054390700);
    InitializeEvent(0, 2054390700, 2054392485, 2054390700, 1120403456, 2054392700, 2054390800);
    InitializeEvent(0, 2054390701, 2054392701, 2054390800, 2054390700, 2054390800, 2054392706, 2054392707);
    InitializeEvent(0, 2054390702, 2054390700, 2054392702, 2054390800, 1097859072);
    InitializeEvent(0, 2054390703, 2054390700, 2054392703, 2054390800, 1090519040);
    InitializeEvent(0, 2054390704, 2054390800, 4278, 2048429222);
    InitializeEvent(0, 2054390706, 2054390710, 2054390800, 2054390800);
    InitializeEvent(0, 2054390705, 2052409231, 2008003, 2054390800, 2054390801);
});

$Event(2054392201, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 3);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X0_4, -1, 804008500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X0_4, -1, 804008510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X0_4, -1, 804008520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X0_4, -1, 804008530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X0_4, -1, 804008540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X0_4, -1, 804008550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X0_4, -1, 804008560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X0_4, -1, 804008570, 0, 0, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            ShootBullet(X0_4, X0_4, -1, 804018500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X0_4, -1, 804018510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X0_4, -1, 804018520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X0_4, -1, 804018530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X0_4, -1, 804018540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X0_4, -1, 804018550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X0_4, -1, 804018560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X0_4, -1, 804018570, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

$Event(2054392300, Restart, function() {
    DisableCharacter(2054395421);
    DisableCharacterGravity(2054395411);
    DisableCharacterAI(2054395411);
    EndIf(!EventFlag(2054390850));
    EnableCharacter(2054395421);
    DisableCharacter(2054395411);
});

$Event(2054392400, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFor(InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 4080);
    SetSpEffect(X0_4, 4085);
    WaitFor(!InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 4080);
    ClearSpEffect(X0_4, 4085);
    RestartEvent();
});

$Event(2054392800, Restart, function() {
    EndIf(EventFlag(2054390800));
    WaitFor(CharacterHPValue(2054390800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2054390800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2054390800));
    HandleBossDefeatAndDisplayBanner(2054390800, TextBannerType.LegendFelled);
    ChangeCamera(-1, -1);
    DeleteAssetfollowingSFX(2054391810, true);
    ForceAnimationPlayback(2054391811, 1, false, false, false);
    DeleteAssetfollowingSFX(2054396800, true);
    SetEventFlagID(2054390800, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61163, ON);
    }
    SetEventFlagID(9163, ON);
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(5);
    ForceAnimationPlayback(2054391811, 3, false, false, false);
    EndEvent();
});

$Event(2054392810, Restart, function() {
    if (EventFlag(2054390800)) {
        DisableCharacter(2054390800);
        DisableCharacterCollision(2054390800);
        ForceCharacterDeath(2054390800, false);
        DisableAsset(2054391810);
        ForceAnimationPlayback(2054391811, 3, false, false, false);
        DisableAsset(2054396800);
        EndEvent();
    }
L0:
    DisableCharacterAI(2054390800);
    EnableCharacterInvincibility(2054390800);
    SetCharacterTeamType(2054390800, TeamType.Enemy);
    ForceAnimationPlayback(2054391811, 3, false, false, false);
    DisableCharacterCollision(2054390800);
    SetSpEffect(2054390102, 9531);
    if (!EventFlag(2054390801)) {
        EnableCharacterAI(2054390800);
        DisableCharacterInvincibility(2054390800);
        ForceAnimationPlayback(2054390800, 30000, true, false, false);
        DisableCharacterHPBarDisplay(2054390800);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 2054392817))
                || HasDamageType(2054390800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(2054390801, ON);
        SetSpEffect(2054390102, 9532);
        ForceAnimationPlayback(2054390800, 20000, false, false, true);
        WaitFixedTimeSeconds(7);
        EnableCharacterHPBarDisplay(2054390800);
    } else {
L1:
        WarpCharacterAndCopyFloor(2054390800, TargetEntityType.Area, 2054392802, -1, 2054390800);
        SetSpEffect(2054390800, 20010830);
        WaitFor(EventFlag(2054392805) && InArea(10000, 2054392800));
        SetSpEffect(2054390800, 20010827);
        SetSpEffect(2054390102, 9532);
    }
L2:
    EnableCharacterCollision(2054390800);
    EnableCharacterAI(2054390800);
    DisableCharacterInvincibility(2054390800);
    SetNetworkUpdateRate(2054390800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2054390800, 0, 905120000);
});

$Event(2054390811, Restart, function() {
    EndIf(EventFlag(2054390800));
    WaitFor(CharacterHasSpEffect(2054390800, 20010826));
    SetEventFlagID(2054392802, ON);
    WaitFixedTimeSeconds(5);
    CreateAssetfollowingSFX(2054391810, 200, 861685);
    CreateAssetfollowingSFX(2054396800, 200, 861956);
    ForceAnimationPlayback(2054391811, 2, false, true, false);
    ForceAnimationPlayback(2054391811, 0, false, true, false);
});

$Event(2054392815, Restart, function() {
    EndIf(EventFlag(2054390801));
    WaitFor(InArea(10000, 2054392818));
    PlaySE(2054392819, SoundType.CharacterMotion, 512008300);
    EndEvent();
});

$Event(2054392816, Restart, function() {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(2054390800, 20010827) && InArea(10000, 2054392801));
    ChangeCamera(5126, -1);
    EndEvent();
});

$Event(2054392849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2054390800, 2054391800, 2054392800, 2054392805, 2054395800, 10000, 2054390801, 0);
    InitializeCommonEvent(0, 9005801, 2054390800, 2054391800, 2054392800, 2054392805, 2054392806, 10000);
    InitializeCommonEvent(0, 9005811, 2054390800, 2054391800, 1560, 2054390801);
    InitializeCommonEvent(0, 9005822, 2054390800, 512000, 2054392805, 2054392806, 0, 2054392802, 0, 0);
    PlaySE(0, SoundType.EnvironmentalSound, 0);
});

$Event(2054392480, Restart, function() {
    EndIf(EventFlag(2054390800));
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(2052409231)) {
        online = PlayerIsInOwnWorld();
        WaitFor(
            EventFlag(2054390800)
                || (EventFlag(2052409231) && ActionButtonInArea(209520, 2054391480)));
        EndIf(EventFlag(2054390800));
        DisplayGenericDialogAndSetEventFlags(2080800, PromptType.YESNO, NumberofOptions.TwoButtons, 2054391480, 3, 2054392488, 2054392489, 2054392489);
        RestartIf(!EventFlag(2054392488));
L1:
        WaitFixedTimeFrames(1);
        WaitFixedTimeSeconds(1);
        SetNetworkconnectedEventFlagID(2054392481, ON);
        SetNetworkconnectedEventFlagID(2054392485, ON);
        EndEvent();
    }
L10:
    WaitFor(EventFlag(2052409231));
    RestartEvent();
});

$Event(2054392481, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    DisableCharacterGravity(X0_4);
    DisableCharacterAI(X0_4);
    EnableCharacterFadeOnEnable(X0_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    EndIf(EventFlag(2054390800));
    DisableCharacter(X0_4);
    SetSpEffect(X0_4, 18677);
    DisableCharacterCollision(X0_4);
    DisableCharacterGravity(X0_4);
    DisableCharacterAI(X0_4);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    WaitFor(EventFlag(2052409231) && EventFlag(2054392481) && CharacterBackreadStatus(X0_4));
    if (EventFlag(2054390800)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        SetCharacterMaphit(X0_4, false);
        DisableCharacterGravity(X0_4);
        DisableCharacterAI(X0_4);
        EndEvent();
    }
    if (PlayerIsInOwnWorld()) {
        DisplayNetworkMessage(4080100, false);
    } else {
        DisplayNetworkMessage(4080110, false);
    }
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetSpEffect(X0_4, 110);
    SetSpEffect(X0_4, 111);
    CreateAssetfollowingSFX(2054391480, 100, 30320);
    ClearSpEffect(X0_4, 4380);
    ClearSpEffect(X0_4, 18677);
    EnableCharacterInvincibility(X0_4);
    ForceAnimationPlayback(X0_4, 90205, false, true, false);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    SetCharacterMaphit(X0_4, true);
    EnableCharacterGravity(X0_4);
    DisableCharacterInvincibility(X0_4);
    EnableCharacterAI(X0_4);
    RequestCharacterAIReplan(X0_4);
    ClearCharactersAITarget(X0_4);
    EnableCharacterHPBarDisplay(X0_4);
    SetCharacterTeamType(X0_4, TeamType.WhitePhantom);
    SetCharacterEventTarget(X0_4, 2054390800);
    if (PlayerIsInOwnWorld()) {
        DisplayNetworkMessage(4080800, false);
        GotoIf(S0, PlayerIsInOwnWorld());
    }
    DisplayNetworkMessage(4080801, false);
S0:
    DeleteAssetfollowingSFX(2054391480, true);
    EndEvent();
});

$Event(2054392482, Restart, function() {
    GotoIf(L2, EventFlag(2054390800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(2052409231));
    CreateAssetfollowingSFX(2054391480, 100, 30101);
    WaitFor(EventFlag(2054392481) || EventFlag(2054390800));
    DeleteAssetfollowingSFX(2054391480, true);
    EndEvent();
});

$Event(2054392483, Restart, function(X0_4) {
    EndIf(EventFlag(2054390800));
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(2054392481)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && EventFlag(2052409231)
                && EntityInRadiusOfEntity(10000, 2054391480, 1.5, 1));
        if (!EventFlag(2054390800)) {
            if (!EventFlag(2054392481)) {
                EnableCharacter(X0_4);
                EnableCharacterInvincibility(X0_4);
                DisableCharacterAI(X0_4);
                SetSpEffect(X0_4, 4380);
                WaitFixedTimeFrames(1);
                ClearSpEffect(X0_4, 18677);
                DisableCharacterInvincibility(X0_4);
                DisableCharacterCollision(X0_4);
                SetCharacterMaphit(X0_4, false);
                DisableCharacterGravity(X0_4);
                WaitFixedTimeFrames(1);
                ForceAnimationPlayback(X0_4, 63040, true, false, false);
                WaitFor(
                    (PlayerIsInOwnWorld() && !EntityInRadiusOfEntity(10000, 2054391480, 1.5, 1))
                        || !EventFlag(2052409231));
                if (!EventFlag(2054390800)) {
                    if (!EventFlag(2054392481)) {
                        WaitFixedTimeSeconds(1);
                        RestartEvent();
                    }
                }
            }
        }
    }
L1:
    EndEvent();
});

$Event(2054392484, Restart, function(X0_4) {
    EndIf(EventFlag(2054390800));
    onlineFlagHpChr = PlayerIsInOwnWorld()
        && EventFlag(2052409231)
        && HPRatio(X0_4) > 0
        && EventFlag(2054392481)
        && CharacterBackreadStatus(X0_4)
        && EventFlag(2054390800);
    onlineChrHpFlag = PlayerIsInOwnWorld()
        && CharacterBackreadStatus(X0_4)
        && HPRatio(X0_4) <= 0
        && EventFlag(2054392481);
    flag = !EventFlag(2054392481) && EventFlag(2054390800);
    WaitFor(onlineFlagHpChr || onlineChrHpFlag || flag);
    SetEventFlagID(2054392485, OFF);
    SetEventFlagID(2054392486, ON);
    EndIf(flag.Passed);
    if (HPRatio(X0_4) <= 0) {
        DisplayNetworkMessage(4080802, false);
        EndEvent();
    }
    DisableCharacterAI(X0_4);
    WaitFor(EventFlag(2054399208));
    WaitFixedTimeSeconds(2);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    DisableCharacterCollision(X0_4);
    EnableCharacterInvincibility(X0_4);
    SetSpEffect(X0_4, 18677);
    RequestCharacterAIReplan(X0_4);
    ClearCharactersAITarget(X0_4);
    DisableCharacterInvincibility(X0_4);
    RequestCharacterAnimationReset(X0_4, Enabled);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    if (HPRatio(X0_4) <= 0) {
        DisplayNetworkMessage(4080802, false);
        EndEvent();
    }
});

$Event(2054390700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X16_4));
    WaitFor(EventFlag(X0_4));
    SetCharacterTalkRange(X4_4, X8_4);
    SetEventFlagID(X12_4, ON);
});

$Event(2054390701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X0_4));
    GotoIf(L0, !EventFlag(X16_4));
    GotoIf(L1, EventFlag(X16_4) && !EventFlag(X20_4));
    flagDmg &= EventFlag(X16_4) && EventFlag(X20_4);
    if (!flagDmg) {
        EndEvent();
L0:
        flagDmg &= HasDamageType(X12_4, X8_4, DamageType.Unspecified);
        WaitFor(flagDmg);
        SetEventFlagID(X16_4, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
L1:
        flagDmg &= HasDamageType(X12_4, X8_4, DamageType.Unspecified);
        WaitFor(flagDmg);
        SetEventFlagID(X20_4, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    flagDmg &= HasDamageType(X12_4, X8_4, DamageType.Unspecified);
    WaitFor(flagDmg);
    SetEventFlagID(X0_4, ON);
});

$Event(2054390702, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X8_4) && CharacterHPValue(X0_4) != 0);
    SetEventFlagID(X4_4, ON);
    EnableCharacterDefaultBackread(X0_4);
    WaitFixedTimeSeconds(X12_4);
    DisableCharacterDefaultBackread(X0_4);
});

$Event(2054390703, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X8_4));
    WaitFor(CharacterHPValue(X0_4) <= 0);
    SetEventFlagID(X4_4, ON);
    EnableCharacterDefaultBackread(X0_4);
    WaitFixedTimeSeconds(X12_4);
    DisableCharacterDefaultBackread(X0_4);
});

$Event(2054390704, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    SetEventFlagID(X4_4, ON);
    if (!EventFlag(X8_4)) {
        SetEventFlagID(X8_4, ON);
    }
});

$Event(2054390705, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    EndIf(EventFlag(X8_4));
    WaitFor(PlayerHasItem(ItemType.Goods, X4_4) && EventFlag(X12_4));
    SetEventFlagID(X0_4, ON);
});

$Event(2054390706, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    EnableCharacterInvincibility(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(CharacterHPValue(X8_4) <= 0);
    EnableCharacter(X0_4);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X8_4, 10);
    WaitFixedTimeSeconds(20);
    DisableCharacter(X0_4);
});


