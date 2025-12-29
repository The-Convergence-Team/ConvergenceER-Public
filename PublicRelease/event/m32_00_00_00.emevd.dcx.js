// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32000000, 32001950, 0, 0, 0, 5);
    InitializeEvent(0, 32002800, 0);
    InitializeEvent(0, 32002810, 0);
    InitializeEvent(0, 32002811, 0);
    InitializeEvent(0, 32002849, 0);
    InitializeEvent(0, 32002510, 0);
    InitializeCommonEvent(0, 90005501, 32000510, 32000511, 0, 32001510, 32001511, 32001512, 32000512);
    InitializeEvent(0, 32002580, 0);
    InitializeCommonEvent(0, 90005646, 32000800, 32002840, 32002841, 32001840, 32002840, 32);
    InitializeCommonEvent(0, 900005610, 32001680, 100, 800, 0);
    InitializeEvent(0, 32002250, 32000201, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32001201, 0, 0, 0, 32000201);
    InitializeEvent(0, 32002270, 32000201, 30005, 20005, 32000201, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(3, 32002250, 32000205, 30002, 20002, 16574, 0, 0, 0, 0, 0, 32001205, 0, 0, 0, 32000205);
    InitializeEvent(3, 32002270, 32000205, 30005, 20005, 32000205, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(4, 32002250, 32000206, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32001206, 0, 0, 0, 32000206);
    InitializeEvent(4, 32002270, 32000206, 30006, 20006, 32000206, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(5, 32002250, 32000215, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32001215, 0, 0, 0, 32000215);
    InitializeEvent(5, 32002270, 32000215, 30006, 20006, 32000215, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(1, 32002250, 32000216, 30002, 20002, 16574, 0, 0, 0, 0, 0, 32001216, 0, 0, 0, 32000216);
    InitializeEvent(1, 32002270, 32000216, 30005, 20005, 32000216, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(2, 32002250, 32000219, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32001219, 0, 0, 0, 32000219);
    InitializeEvent(2, 32002270, 32000219, 30005, 20005, 32000219, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(6, 32002300, 32000306, 32002305, 0, -1);
    InitializeEvent(15, 32002310, 32000315, 32002315, 0, -1, 32000316, 32000318);
    InitializeEvent(16, 32002310, 32000316, 32002315, 0, -1, 32000315, 32000318);
    InitializeEvent(18, 32002310, 32000318, 32002315, 0, -1, 32000315, 32000316);
    InitializeEvent(0, 32002860, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32000519, 0);
    //InitializeCommonEvent(0, 90005250, 32000210, 32002210, 0, -1);
    InitializeCommonEvent(0, 90005250, 32000211, 32002211, 0, -1);
    InitializeCommonEvent(0, 90005250, 32000212, 32002212, 0, -1);
    InitializeCommonEvent(0, 90005540, 32000460, 32003682, 32003681, 32003680, 99026, 1, 2); // New Gate
                                     //(eventflag, gate id, lever id, objecteventflag, objectparamid, anim id, anim id)
});

$Event(32002510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32000510, 32000511, 0, 32001510, 32001511, 32003511, 32001512, 32003512, 32002511, 32002512, 32000512, 32000513, 0);
});

$Event(32000519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32000510, ON);
    SetThisEventSlot(ON);
});

$Event(32002580, Default, function() {
    RegisterLadder(32000530, 32000531, 32001530);
    EndIf(EventFlag(32000461));
    WaitFor(EventFlag(32000460));
    DisplayGenericDialog(4200, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 3);
    SetEventFlagID(32000461, ON);
});

$Event(32002200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(ThisEventSlot());
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
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
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
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

$Event(32002250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(EventFlag(X52_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1)
        || AssetDestroyed(X48_4, Equal, 1))
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
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
        SetEventFlagID(X52_4, ON);
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        SetSpEffect(X0_4, 16571);
        SetSpEffect(X0_4, X12_4);
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

$Event(32002270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(ThisEventSlot());
    EndIf(!EventFlag(X12_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
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
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32002300, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    areaChrSp = InArea(10000, X4_4)
        && CharacterAIState(32000307, AIStateType.Combat)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(32002310, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaDmg = InArea(10000, X4_4)
        || HasDamageType(X16_4, 0, DamageType.Unspecified)
        || HasDamageType(X20_4, 0, DamageType.Unspecified);
    areaDmgChrSp = areaDmg && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaDmgChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaDmgChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(32002800, Restart, function() {
    EndIf(EventFlag(32000800));
    WaitFor(CharacterHPValue(32000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32000800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32000800));
    HandleBossDefeatAndDisplayBanner(32000800, TextBannerType.EnemyFelled);
    SetEventFlagID(32000800, ON);
    SetEventFlagID(9260, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61260, ON);
    }
});

$Event(32002810, Restart, function() {
    if (EventFlag(32000800)) {
        DisableCharacter(32000800);
        DisableCharacterCollision(32000800);
        ForceCharacterDeath(32000800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32000800);
    EnableCharacterInvincibility(32000800);
    if (!EventFlag(32000801)) {
        ForceAnimationPlayback(32000800, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32002801))
                || HasDamageType(32000800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(32000801, ON);
        ForceAnimationPlayback(32000800, 20000, false, true, false);
    } else {
L1:
        WaitFor(EventFlag(32002805) && InArea(10000, 32002800));
    }
L2:
    EnableCharacterAI(32000800);
    DisableCharacterInvincibility(32000800);
    SetNetworkUpdateRate(32000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32000800, 0, 903451320);
    SetSpEffect(32000800, 8089);
});

$Event(32002811, Restart, function() {
    EndIf(EventFlag(32000800));
    WaitFor(HPRatio(32000800) <= 0.6);
    SetEventFlagID(32002802, ON);
});

$Event(32002820, Restart, function(X0_4) {
    EndIf(EventFlag(32000800));
    WaitFor(CharacterDead(X0_4));
    SetSpEffect(X0_4, 4305);
});

$Event(32002849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32000800, 32001800, 32002800, 32002805, 32005800, 10000, 32000801, 32002801);
    InitializeCommonEvent(0, 9005801, 32000800, 32001800, 32002800, 32002805, 32002806, 10000);
    InitializeCommonEvent(0, 9005811, 32000800, 32001800, 7, 32000801);
    InitializeCommonEvent(0, 9005822, 32000800, 931000, 32002805, 32002806, 0, 32002802, 0, 0);
});

$Event(32002860, Restart, function() {
    WaitFor(EventFlag(32000800));
    IfActionButtonInArea(MAIN, 8100, 32000875);
    
    IssueShortWarpRequest(10000, TargetEntityType.Asset, 32000875, 121);
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, 32000875, -1, true);
    ForceAnimationPlayback(10000, 60030, false, false, false, Equal, 1);
    WaitFixedTimeFrames(80);
    WarpPlayer(60, 43, 31, 0, 1043310876, 60);
    RestartEvent();
});
