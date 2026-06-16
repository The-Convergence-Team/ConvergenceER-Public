// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(43000000, 43001950, 0, 0, 0, 5);
    InitializeEvent(0, 43002800, 0);
    InitializeEvent(0, 43002810, 0);
    InitializeEvent(0, 43002811, 0);
    InitializeEvent(0, 43002849, 0);
    InitializeCommonEvent(0, 90005250, 43000202, 43002202, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000208, 43002202, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000209, 43002202, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000203, 43002203, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000208, 43002203, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000210, 43002203, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000203, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000204, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000205, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000206, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000207, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000209, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000211, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000212, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000213, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000214, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000215, 43002204, 0, -1);
    InitializeCommonEvent(0, 90005250, 43000216, 43002204, 0, -1);
    InitializeEvent(0, 43002300, 43005200, 43000207, 0, -1);
    InitializeEvent(0, 43002300, 43005200, 43000204, 0, -1);
    InitializeCommonEvent(0, 90005200, 43000234, 30001, 20001, 43002234, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43000235, 30003, 20003, 43002234, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43000236, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43000237, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 43000238, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 43000236, 43002237, 1036831949, 0);
    InitializeCommonEvent(0, 90005250, 43000237, 43002237, 1036831949, 0);
    InitializeCommonEvent(0, 90005250, 43000238, 43002237, 1036831949, 0);
    InitializeCommonEvent(0, 90005250, 43000240, 43002240, 0, 3001);
    InitializeCommonEvent(0, 90005250, 43000240, 43002233, 0, 0);
    InitializeCommonEvent(0, 90005250, 43000241, 43002241, 0, 3008);
    InitializeEvent(0, 43002350, 43000233, 30005, 20005, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 43002500, 0);
    InitializeEvent(0, 43002501, 0);
    InitializeCommonEvent(0, 90005646, 43000800, 43002840, 43002841, 43001840, 43002840, 43);
    InitializeCommonEvent(0, 900005610, 43001680, 100, 800, 0);
});

$Event(43002500, Restart, function() {
    if (EventFlag(43000500)) {
        DisableAsset(43001500);
        EndEvent();
    }
L0:
    EnableAssetInvunerability(43001500);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 43002500));
    DisableAssetInvunerability(43001500);
    SetEventFlagID(43000500, ON);
    EndEvent();
});

$Event(43002501, Restart, function() {
    if (EventFlag(43000500)) {
        ReproduceAssetAnimation(43001510, 101101);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(43000500));
    ForceAnimationPlayback(43001510, 101101, false, true, false);
    ReproduceAssetAnimation(43001510, 101101);
    EndEvent();
});

$Event(43002300, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(X4_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X4_4, 436)
            || CharacterHasStateInfo(X4_4, 2)
            || CharacterHasStateInfo(X4_4, 5)
            || CharacterHasStateInfo(X4_4, 6)
            || CharacterHasStateInfo(X4_4, 260)
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
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (and1.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(43002350, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
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
        CharacterDead(43000230)
            || CharacterDead(43000231)
            || CharacterDead(43000232)
            || areaChrSp
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
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
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

$Event(43002800, Restart, function() {
    EndIf(EventFlag(43000800));
    WaitFor(CharacterHPValue(43000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(43008000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(43000800));
    HandleBossDefeatAndDisplayBanner(43000800, TextBannerType.EnemyFelled);
    SetEventFlagID(43000800, ON);
    SetEventFlagID(9280, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61280, ON);
    }
});

$Event(43002810, Restart, function() {
    if (EventFlag(43000800)) {
        DisableCharacter(43000800);
        DisableCharacterCollision(43000800);
        ForceCharacterDeath(43000800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(43000800);
    EnableCharacterInvincibility(43000800);
    WaitFor(EventFlag(43002805) && InArea(10000, 43002800));
L2:
    EnableCharacterAI(43000800);
    DisableCharacterInvincibility(43000800);
    SetNetworkUpdateRate(43000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 43000800, 0, 905081430);
});

$Event(43002811, Restart, function() {
    EndIf(EventFlag(43000800));
    WaitFor(HPRatio(43000800) <= 0.6);
    SetEventFlagID(43002802, ON);
});

$Event(43002849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 43000800, 43001800, 43002800, 43002805, 43005800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 43000800, 43001800, 43002800, 43002805, 43002806, 10000);
    InitializeCommonEvent(0, 9005811, 43000800, 43001800, 4, 0);
    InitializeCommonEvent(0, 9005822, 43000800, 931000, 43002805, 43002806, 0, 43002802, 0, 0);
});


