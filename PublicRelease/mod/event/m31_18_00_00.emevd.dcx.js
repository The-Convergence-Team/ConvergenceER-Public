// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(311800, 31181950, 0, 0, 0, 5);
    InitializeEvent(0, 31182800, 0);
    InitializeEvent(0, 31182801, 0);
    InitializeEvent(0, 31182802, 0);
    InitializeEvent(0, 31182810, 0);
    InitializeEvent(0, 31182849, 0);
    InitializeEvent(0, 31182811, 0);
    InitializeCommonEvent(0, 90005646, 31180800, 31182840, 31182841, 31181840, 31182840, 4639);
    InitializeEvent(0, 31182500, 31181500, 200, 800023, 402001);
    InitializeEvent(1, 31182500, 31181501, 200, 800023, 402001);
    InitializeEvent(2, 31182500, 31181502, 200, 800023, 402001);
    InitializeEvent(3, 31182500, 31181503, 200, 800023, 402001);
    InitializeEvent(4, 31182500, 31181504, 200, 800023, 402001);
    InitializeEvent(5, 31182500, 31181505, 200, 800023, 402001);
    InitializeEvent(6, 31182500, 31181506, 200, 800023, 402001);
    InitializeEvent(7, 31182500, 31181507, 200, 800023, 402001);
    InitializeEvent(8, 31182500, 31181508, 200, 800023, 402001);
    InitializeEvent(0, 31182515, 0);
    InitializeCommonEvent(0, 900005610, 31181200, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31180200, 31182200, 1073741824, 1079613850, 0);
    InitializeCommonEvent(0, 90005261, 31180202, 31182200, 1073741824, 1077936128, 0);
    InitializeCommonEvent(0, 90005211, 31180203, 30000, 20000, 31182203, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31180207, 30000, 20000, 31182207, 1073741824, 1073741824, 0, 0, 0, 0);
    InitializeEvent(0, 31182200, 31180200, 31182250);
    InitializeEvent(1, 31182200, 31180201, 31182251);
    InitializeEvent(2, 31182200, 31180202, 31182252);
    InitializeEvent(3, 31182200, 31180207, 31182257);
    InitializeCommonEvent(0, 90005261, 31180300, 31182300, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31180306, 31182306, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31180307, 31182307, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31180310, 30000, 20000, 31182310, 0, 1091567616, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31180311, 30000, 20000, 31182310, 0, 1092616192, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31180314, 31182314, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 31180315, 31182314, 1092616192, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 31180351, 31182351, 1073741824, 0, 3001);
    InitializeCommonEvent(0, 90005261, 31180355, 31182355, 1073741824, 0, 0);
    InitializeEvent(0, 31182402, 31180400, 31182400, 1077936128, 0, 3012, 32052401);
    InitializeCommonEvent(0, 90005300, 31180400, 31180400, 0, 0, 0);
    InitializeEvent(0, 31182400, 0);
});

$Event(31182500, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    CreateAssetfollowingSFX(X0_4, X4_4, X8_4);
    CreateAssetfollowingSFX(X0_4, X4_4, X12_4);
});

$Event(31182515, Restart, function() {
    SpawnOneshotSFX(TargetEntityType.Area, 31182515, -1, 802020);
});

$Event(31182200, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8082);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chrSp && EntityInRadiusOfEntity(10000, X0_4, 6, 1))
            || (chrSp && InArea(10000, X4_4))
            || (CharacterAIState(X0_4, AIStateType.Alert)
                || CharacterAIState(X0_4, AIStateType.Combat))
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || (CharacterHasStateInfo(X0_4, 436)
                || CharacterHasStateInfo(X0_4, 2)
                || CharacterHasStateInfo(X0_4, 5)
                || CharacterHasStateInfo(X0_4, 6)
                || CharacterHasStateInfo(X0_4, 260)
                || (CharacterHasSpEffect(X0_4, 481)
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
                    && !CharacterHasSpEffect(X0_4, 90160))));
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31182400, Restart, function() {
    EndIf(CharacterDead(31180400));
    ForceAnimationPlayback(31180400, 0, false, false, false);
});

$Event(31182401, Restart, function() {
    EndIf(EventFlag(31180400));
    chr = CharacterDead(31180400);
    SetEventFlagID(31180400, ON);
});

$Event(31182402, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = (InArea(10000, X20_4) || InArea(10000, X4_4)) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
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
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (!InArea(10000, X20_4)) {
            if (Signed(X16_4) != -1) {
                ForceAnimationPlayback(X0_4, X16_4, true, false, false);
            }
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31182800, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterDead(31180800) && CharacterDead(31180801));
    HandleBossDefeatAndDisplayBanner(31180800, TextBannerType.EnemyFelled);
    SetEventFlagID(31180800, ON);
    SetEventFlagID(9241, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61241, ON);
    }
});

$Event(31182801, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterHPValue(31180800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31180800, SoundType.SFX, 888880000);
});

$Event(31182802, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterHPValue(31180801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31180801, SoundType.SFX, 888880000);
});

$Event(31182810, Restart, function() {
    if (EventFlag(31180800)) {
        DisableCharacter(31180800);
        DisableCharacter(31180801);
        DisableCharacterCollision(31180800);
        DisableCharacterCollision(31180801);
        ForceCharacterDeath(31180800, false);
        ForceCharacterDeath(31180801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31180800);
    DisableCharacterAI(31180801);
    EnableCharacterInvincibility(31180800);
    EnableCharacterInvincibility(31180801);
    ForceAnimationPlayback(31180800, 30001, false, false, false);
    WaitFor(EventFlag(31182805) && InArea(10000, 31182800));
L2:
    DisplayBossHealthBar(Enabled, 31180800, 0, 904480310);
    DisplayBossHealthBar(Enabled, 31180801, 1, 904820310);
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(31180800);
    DisableCharacterInvincibility(31180800);
    EnableCharacterCollision(31180800);
    SetNetworkUpdateRate(31180800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(31180800, 20001, false, false, false);
    EnableCharacterAI(31180801);
    DisableCharacterInvincibility(31180801);
    EnableCharacterCollision(31180801);
    SetNetworkUpdateRate(31180801, true, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(31182811, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterDead(31180800) || CharacterDead(31180801));
    SetEventFlagID(31182842, ON);
});

$Event(31182849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31180800, 31181800, 31182800, 31182805, 31185800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31180800, 31181800, 31182800, 31182805, 31182806, 10000);
    InitializeCommonEvent(0, 9005811, 31180800, 31181800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31180800, 920900, 31182805, 31182806, 0, 31182842, 0, 0);
});
