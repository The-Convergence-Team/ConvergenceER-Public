// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1034480000, 1034481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76214, 76212, 1034481980, 77220, 2, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    InitializeCommonEvent(0, 90005460, 1034480200);
    InitializeCommonEvent(0, 90005461, 1034480200);
    InitializeCommonEvent(0, 90005462, 1034480200);
    InitializeCommonEvent(0, 90005460, 1034480201);
    InitializeCommonEvent(0, 90005461, 1034480201);
    InitializeCommonEvent(0, 90005462, 1034480201);
    InitializeCommonEvent(0, 90005525, 1034480610, 1034481610);
    InitializeCommonEvent(0, 90005525, 1034480611, 1034481611);
    InitializeEvent(0, 1034482600, 1034481620, 1034481621, 82022);
    InitializeEvent(0, 1034482800, 0);
    InitializeEvent(0, 1034482810, 0);
    InitializeEvent(0, 1034482849, 0);
    InitializeEvent(0, 1034482610, 1034481640, 1034482640, 1034480640);
    InitializeEvent(1, 1034482610, 1034481641, 1034482641, 1034480640);
    InitializeEvent(2, 1034482610, 1034481642, 1034482642, 1034480640);
    InitializeEvent(3, 1034482610, 1034481643, 1034482643, 1034480640);
    InitializeEvent(4, 1034482610, 1034481644, 1034482644, 1034480640);
    InitializeEvent(5, 1034482610, 1034481645, 1034482645, 1034480640);
    InitializeEvent(6, 1034482610, 1034481646, 1034482646, 1034480640);
    InitializeEvent(7, 1034482610, 1034481647, 1034482647, 1034480640);
    InitializeEvent(8, 1034482610, 1034481648, 1034482648, 1034480640);
    InitializeEvent(9, 1034482610, 1034481649, 1034482649, 1034480640);
    InitializeEvent(0, 1034482260, 1034480250, 1034481250, 1034480250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1034482260, 1034480251, 1034481251, 1034480251, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1034482261, 1034480250, 1034481250, 1034480250, 1034485260, 0, 0, 0, 0, 0, 1034481300, 1034482250);
    InitializeEvent(1, 1034482261, 1034480251, 1034481251, 1034480251, 1034485263, 0, 0, 0, 0, 0, 1034481310, 1034482251);
    InitializeEvent(0, 1034482262, 1034480250, 0, 1034480250, 0, 1034480260, 30010, 20010, 1101004800, 0, 0, 1034482250);
    InitializeEvent(1, 1034482262, 1034480250, 0, 1034480250, 0, 1034480261, 30010, 20010, 1101004800, 0, 0, 1034482250);
    InitializeEvent(3, 1034482262, 1034480250, 0, 1034480250, 0, 1034480262, 30010, 20010, 1101004800, 0, 0, 1034482250);
    InitializeEvent(4, 1034482262, 1034480251, 0, 1034480251, 0, 1034480263, 30010, 20010, 1101004800, 0, 0, 1034482251);
    InitializeEvent(5, 1034482262, 1034480251, 0, 1034480251, 0, 1034480264, 30010, 20010, 1101004800, 0, 0, 1034482251);
    InitializeCommonEvent(0, 90005706, 1034480700, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1034480700, true);
    InitializeCommonEvent(0, 90005251, 1034480210, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1034480210, 1034482210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034480212, 1034482210, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034480213, 1034482210, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034480214, 1034482210, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034480215, 1034482210, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034480211, 1034482211, 1097859072, 0, 0);
});

$Event(1034482260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasDamageType(X8_4, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    IssueShortWarpRequest(X8_4, TargetEntityType.Asset, X4_4, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1034482261, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X40_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
            DisableCharacter(X12_4);
            DisableCharacterCollision(X12_4);
            ForceCharacterDeath(X12_4, false);
            EndEvent();
        }
L1:
        DisableAsset(X4_4);
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X8_4, 436)
        || CharacterHasStateInfo(X8_4, 2)
        || CharacterHasStateInfo(X8_4, 5)
        || CharacterHasStateInfo(X8_4, 6)
        || CharacterHasStateInfo(X8_4, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(X4_4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(X36_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
});

$Event(1034482262, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    EndIf(SpecialStandbyEndedFlag(X16_4));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || HasDamageType(X16_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X16_4, 436)
        || CharacterHasStateInfo(X16_4, 2)
        || CharacterHasStateInfo(X16_4, 5)
        || CharacterHasStateInfo(X16_4, 6)
        || CharacterHasStateInfo(X16_4, 260)
        || EntityInRadiusOfEntity(X16_4, 20000, X28_4, 1);
    WaitFor(
        (CharacterHasSpEffect(X0_4, 481)
            && !CharacterHasSpEffect(X0_4, 90100)
            && !CharacterHasSpEffect(X0_4, 90110)
            && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (dmgChrArea && chrSp));
    SetNetworkconnectedEventFlagID(X40_4, ON);
    SetSpecialStandbyEndedFlag(X16_4, ON);
    WaitFixedTimeSeconds(X32_4);
    ForceAnimationPlayback(X16_4, X24_4, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1034482600, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1034482610, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(AssetDestroyed(X0_4, Equal, 1));
    CreateBulletOwner(X8_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgArea = HasDamageType(X0_4, 20000, DamageType.Unspecified) || EntityInRadiusOfEntity(X0_4, 20000, 2, 1);
    WaitFor(dmgArea && chrSp);
    RequestAssetDestruction(X0_4, 0);
    if (EventFlag(50)) {
        ShootBullet(X8_4, X0_4, 100, 802402000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X8_4, X0_4, 100, 802402010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X8_4, X0_4, 100, 802402020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X8_4, X0_4, 100, 802402030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X8_4, X0_4, 100, 802402040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X8_4, X0_4, 100, 802402050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X8_4, X0_4, 100, 802402060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(X8_4, X0_4, 100, 802402070, 0, 0, 0);
    }
    EndEvent();
});

$Event(1034482800, Restart, function() {
    EndIf(EventFlag(1034480800));
    WaitFor(CharacterHPValue(1034480800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1034480800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1034480800));
    HandleBossDefeatAndDisplayBanner(1034480800, TextBannerType.EnemyFelled);
    EnableObjAct(1034481540, -1);
    SetEventFlagID(1034480800, ON);
    EndEvent();
});

$Event(1034482810, Restart, function() {
    if (EventFlag(1034480800)) {
        DisableCharacter(1034480800);
        DisableCharacterCollision(1034480800);
        ForceCharacterDeath(1034480800, false);
        EnableObjAct(1034481540, -1);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(1034480800, 30000, true, false, false);
    DisableCharacterAI(1034480800);
    EnableCharacterInvincibility(1034480800);
    WaitFor(EventFlag(1034482805) && InArea(10000, 1034482800));
L2:
    DisableCharacterInvincibility(1034480800);
    EnableCharacterAI(1034480800);
    SetNetworkUpdateRate(1034480800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(1034480800, 20000, false, false, false);
    DisplayBossHealthBar(Enabled, 1034480800, 0, 904020540);
    DisableObjAct(1034481540, -1);
});

$Event(1034482849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1034480800, 1034481800, 1034482800, 1034482805, 1034485800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1034480800, 1034481800, 1034482800, 1034482805, 1034482806, 10000);
    InitializeCommonEvent(0, 9005811, 1034480800, 1034481800, 3, 0);
    InitializeCommonEvent(0, 9005822, 1034480800, 920900, 1034482805, 1034482806, 0, 1034482802, 0, 0);
    InitializeCommonEvent(0, 9005812, 1034480800, 1034481801, 3, 0, 0);
});
