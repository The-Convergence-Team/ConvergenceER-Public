// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2054390000, 2054391950, 0, 0, 0, 5);
    RegisterBonfire(2054390001, 2054391951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 2054391501, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391502, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391503, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391504, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391505, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2054391506, 100, 800, 0);
    InitializeCommonEvent(0, 90005201, 2054390850, 30010, 20010, 1114636288, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2054390850, 905370600, 28);
    InitializeCommonEvent(0, 90005860, 2054390850, 0, 2054390850, 1, 30805, 0);
    $InitializeEvent(0, 2054392800);
    $InitializeEvent(0, 2054392810);
    $InitializeEvent(0, 2054390811);
    $InitializeEvent(0, 2054392849);
    $InitializeEvent(0, 2054392815);
    $InitializeEvent(0, 2054392816);
    $InitializeEvent(0, 2054392400, 2054390400, 2054392400);
    $InitializeEvent(1, 2054392400, 2054390401, 2054392400);
    $InitializeEvent(2, 2054392400, 2054390402, 2054392400);
    $InitializeEvent(3, 2054392400, 2054390403, 2054392400);
    $InitializeEvent(4, 2054392400, 2054390404, 2054392400);
    InitializeCommonEvent(0, 90005211, 2054390400, 30001, 20001, 2054392401, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2054390402, 30001, 20001, 2054392402, 1084227584, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2054390404, 30001, 20001, 2054392402, 1084227584, 1061997773, 0, 0, 0, 0);
    $InitializeEvent(0, 2054392201, 2054390201, 2054392201);
    $InitializeEvent(1, 2054392201, 2054390202, 2054392201);
    $InitializeEvent(2, 2054392201, 2054390204, 2054392201);
    $InitializeEvent(3, 2054392201, 2054390205, 2054392201);
    $InitializeEvent(4, 2054392201, 2054390206, 2054392201);
    $InitializeEvent(0, 2054392480);
    $InitializeEvent(0, 2054392481, 2054390700);
    $InitializeEvent(0, 2054392482);
    $InitializeEvent(0, 2054392483, 2054390700);
    $InitializeEvent(0, 2054392484, 2054390700);
    $InitializeEvent(0, 2054390700, 2054392485, 2054390700, 100, 2054392700, 2054390800);
    $InitializeEvent(0, 2054390701, 2054392701, 2054390800, 2054390700, 2054390800, 2054392706, 2054392707);
    $InitializeEvent(0, 2054390702, 2054390700, 2054392702, 2054390800, 15);
    $InitializeEvent(0, 2054390703, 2054390700, 2054392703, 2054390800, 8);
    $InitializeEvent(0, 2054390704, 2054390800, 4278, 2048429222);
    $InitializeEvent(0, 2054390706, 2054390710, 2054390800, 2054390800);
    $InitializeEvent(0, 2054390705, 2052409231, 2008003, 2054390800, 2054390801);
    
    $InitializeEvent(0, 2054392300); // Activate fire march
    $InitializeCommonEvent(0, 20000350, 2054391701, 2050391704, 2055550106, 2055550116, 2054390080, 2054391703); // Shrine Init
    InitializeCommonEvent(0, 90005300, 2054394702, 2054391702, 0, 0, 1); // Fire Knight otk
    $InitializeEvent(0, 2054392310); // Fire knight ranged rain
});

$Event(2054392201, Restart, function(chrEntityId, areaEntityId) {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    CreateBulletOwner(chrEntityId);
    WaitFor(InArea(10000, areaEntityId));
    WaitRandomTimeSeconds(1, 3);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804008570, 0, 0, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(chrEntityId, chrEntityId, -1, 804018570, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

$Event(2054392300, Restart, function() {
    //DisableCharacter(2054395421);
    //DisableCharacterGravity(2054395411);
    //DisableCharacterAI(2054395411);
    //EndIf(!EventFlag(2054390850));
    //EnableCharacter(2054395421);
    //DisableCharacter(2054395411);
    
    DisableCharacter(2054395411)
    DisableCharacterAI(2054395411);
    WaitFor(InArea(20000, 2054392421));
    EnableCharacter(2054395411);
    EnableCharacterAI(2054395411);
    SetNetworkUpdateRate(2054395411, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
});

$Event(2054392310, Restart, function() {
    EndIf(CharacterDead(2054391702));
    WaitFor(InArea(10000, 2054392851));
    SetSpEffect(10000, 20011739);
    WaitFixedTimeSeconds(2.5);
    RestartEvent();
});

$Event(2054392400, Restart, function(chrEntityId, areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(chrEntityId, areaEntityId));
    SetSpEffect(chrEntityId, 4080);
    SetSpEffect(chrEntityId, 4085);
    WaitFor(!InArea(chrEntityId, areaEntityId));
    ClearSpEffect(chrEntityId, 4080);
    ClearSpEffect(chrEntityId, 4085);
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
    //if (EventFlag(2054390801)) { //Edited to make Bayle behave as if every encounter is the first encounter
    EnableCharacterAI(2054390800);
    DisableCharacterInvincibility(2054390800);
    ForceAnimationPlayback(2054390800, 30000, true, false, false);
    DisableCharacterHPBarDisplay(2054390800);
    WaitFor(
        (PlayerIsInOwnWorld() && InArea(10000, 2054392817))
            || HasDamageType(2054390800, 10000, DamageType.Unspecified)
            || EventFlag(2054392485));
    SetNetworkconnectedEventFlagID(2054390801, ON);
    SetSpEffect(2054390102, 9532);
    ForceAnimationPlayback(2054390800, 20000, false, false, true);
    WaitFixedTimeSeconds(7);
    EnableCharacterHPBarDisplay(2054390800);
//    } else {
//L1:
//        WarpCharacterAndCopyFloor(2054390800, TargetEntityType.Area, 2054392802, -1, 2054390800);
//        SetSpEffect(2054390800, 20010830);
//        WaitFor(EventFlag(2054392805) && InArea(10000, 2054392800));
//        SetSpEffect(2054390800, 20010827);
//        SetSpEffect(2054390102, 9532);
//    }
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
        //DisplayGenericDialogAndSetEventFlags(2080800, PromptType.YESNO, NumberofOptions.TwoButtons, 2054391480, 3, 2054392488, 2054392489, 2054392489);
        //RestartIf(!EventFlag(2054392488));
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

$Event(2054392481, Restart, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterFadeOnEnable(chrEntityId);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    EndIf(EventFlag(2054390800));
    DisableCharacter(chrEntityId);
    SetSpEffect(chrEntityId, 18677);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    DisableCharacterAI(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    WaitFor(EventFlag(2052409231) && EventFlag(2054392481) && CharacterBackreadStatus(chrEntityId));
    if (EventFlag(2054390800)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
        DisableCharacterGravity(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (PlayerIsInOwnWorld()) {
        DisplayNetworkMessage(4080100, false);
    } else {
        DisplayNetworkMessage(4080110, false);
    }
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetSpEffect(chrEntityId, 110);
    SetSpEffect(chrEntityId, 111);
    CreateAssetfollowingSFX(2054391480, 100, 30320);
    ClearSpEffect(chrEntityId, 4380);
    ClearSpEffect(chrEntityId, 18677);
    EnableCharacterInvincibility(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 90205, false, true, false);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    SetCharacterMaphit(chrEntityId, true);
    EnableCharacterGravity(chrEntityId);
    DisableCharacterInvincibility(chrEntityId);
    EnableCharacterAI(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    EnableCharacterHPBarDisplay(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.WhitePhantom);
    SetCharacterEventTarget(chrEntityId, 2054390800);
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

$Event(2054392483, Restart, function(chrEntityId) {
    EndIf(EventFlag(2054390800));
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(2054392481)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && EventFlag(2052409231)
                && EntityInRadiusOfEntity(10000, 2054391480, 1.5, 1));
        if (!EventFlag(2054390800)) {
            if (!EventFlag(2054392481)) {
                EnableCharacter(chrEntityId);
                EnableCharacterInvincibility(chrEntityId);
                DisableCharacterAI(chrEntityId);
                SetSpEffect(chrEntityId, 4380);
                WaitFixedTimeFrames(1);
                ClearSpEffect(chrEntityId, 18677);
                DisableCharacterInvincibility(chrEntityId);
                DisableCharacterCollision(chrEntityId);
                SetCharacterMaphit(chrEntityId, false);
                DisableCharacterGravity(chrEntityId);
                WaitFixedTimeFrames(1);
                ForceAnimationPlayback(chrEntityId, 63040, true, false, false);
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

$Event(2054392484, Restart, function(chrEntityId) {
    EndIf(EventFlag(2054390800));
    onlineFlagHpChr = PlayerIsInOwnWorld()
        && EventFlag(2052409231)
        && HPRatio(chrEntityId) > 0
        && EventFlag(2054392481)
        && CharacterBackreadStatus(chrEntityId)
        && EventFlag(2054390800);
    onlineChrHpFlag = PlayerIsInOwnWorld()
        && CharacterBackreadStatus(chrEntityId)
        && HPRatio(chrEntityId) <= 0
        && EventFlag(2054392481);
    flag = !EventFlag(2054392481) && EventFlag(2054390800);
    WaitFor(onlineFlagHpChr || onlineChrHpFlag || flag);
    SetEventFlagID(2054392485, OFF);
    SetEventFlagID(2054392486, ON);
    EndIf(flag.Passed);
    if (HPRatio(chrEntityId) <= 0) {
        DisplayNetworkMessage(4080802, false);
        EndEvent();
    }
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(2054399208));
    WaitFixedTimeSeconds(2);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    DisableCharacterCollision(chrEntityId);
    EnableCharacterInvincibility(chrEntityId);
    SetSpEffect(chrEntityId, 18677);
    RequestCharacterAIReplan(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    DisableCharacterInvincibility(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Enabled);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    if (HPRatio(chrEntityId) <= 0) {
        DisplayNetworkMessage(4080802, false);
        EndEvent();
    }
});

$Event(2054390700, Restart, function(eventFlagId, chrEntityId, range, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId));
    SetCharacterTalkRange(chrEntityId, range);
    SetEventFlagID(eventFlagId2, ON);
});

$Event(2054390701, Restart, function(eventFlagId, eventFlagId2, chrEntityId, entityId, eventFlagId3, eventFlagId4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    GotoIf(L0, !EventFlag(eventFlagId3));
    GotoIf(L1, EventFlag(eventFlagId3) && !EventFlag(eventFlagId4));
    flagDmg &= EventFlag(eventFlagId3) && EventFlag(eventFlagId4);
    if (!flagDmg) {
        EndEvent();
L0:
        flagDmg &= HasDamageType(entityId, chrEntityId, DamageType.Unspecified);
        WaitFor(flagDmg);
        SetEventFlagID(eventFlagId3, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
L1:
        flagDmg &= HasDamageType(entityId, chrEntityId, DamageType.Unspecified);
        WaitFor(flagDmg);
        SetEventFlagID(eventFlagId4, ON);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    flagDmg &= HasDamageType(entityId, chrEntityId, DamageType.Unspecified);
    WaitFor(flagDmg);
    SetEventFlagID(eventFlagId, ON);
});

$Event(2054390702, Restart, function(chrEntityId, eventFlagId, eventFlagId2, timeSeconds) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId2) && CharacterHPValue(chrEntityId) != 0);
    SetEventFlagID(eventFlagId, ON);
    EnableCharacterDefaultBackread(chrEntityId);
    WaitFixedTimeSeconds(timeSeconds);
    DisableCharacterDefaultBackread(chrEntityId);
});

$Event(2054390703, Restart, function(chrEntityId, eventFlagId, eventFlagId2, timeSeconds) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId2));
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    SetEventFlagID(eventFlagId, ON);
    EnableCharacterDefaultBackread(chrEntityId);
    WaitFixedTimeSeconds(timeSeconds);
    DisableCharacterDefaultBackread(chrEntityId);
});

$Event(2054390704, Restart, function(eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId3, ON);
    }
});

$Event(2054390705, Restart, function(eventFlagId, itemId, eventFlagId2, eventFlagId3) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId, OFF);
    EndIf(EventFlag(eventFlagId2));
    WaitFor(PlayerHasItem(ItemType.Goods, itemId) && EventFlag(eventFlagId3));
    SetEventFlagID(eventFlagId, ON);
});

$Event(2054390706, Restart, function(chrEntityId, eventFlagId, chrEntityId2) {
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId);
    EnableCharacterInvincibility(chrEntityId);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    EnableCharacter(chrEntityId);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, chrEntityId2, 10);
    WaitFixedTimeSeconds(20);
    DisableCharacter(chrEntityId);
});
