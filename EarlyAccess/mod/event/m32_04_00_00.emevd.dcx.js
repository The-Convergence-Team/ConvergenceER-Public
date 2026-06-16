// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32040000, 32041950, 0, 0, 0, 5);
    InitializeEvent(0, 32042800, 0);
    InitializeEvent(0, 32042810, 0);
    InitializeEvent(0, 32042811, 0);
    InitializeEvent(0, 32042849, 0);
    InitializeEvent(0, 32042200, 32040206, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041682, 0, 0, 0);
    InitializeEvent(0, 32042250, 32040207, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32041207, 0, 0, 0, 32040207);
    InitializeEvent(0, 32042270, 32040207, 30005, 20005, 32040207, 1077936128, 0, 0, 1, 0, 0);
    InitializeEvent(2, 32042200, 32040210, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041681, 0, 0, 0);
    InitializeEvent(3, 32042200, 32040211, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041680, 0, 0, 0);
    InitializeEvent(0, 32042510, 0);
    InitializeCommonEvent(0, 90005501, 32040510, 32040511, 0, 32041510, 32041511, 32041512, 32040512);
    InitializeEvent(0, 32042580, 0);
    InitializeCommonEvent(0, 90005646, 32040800, 32042840, 32042841, 32041840, 32042840, 1056);
    InitializeEvent(0, 32049570, 32040570, 32041570, 32042570, 32042571, 32042572);
    InitializeEvent(0, 32042569, 32040570, 32041570, 32041571, 32041572, 32041573);
    InitializeCommonEvent(0, 900005610, 32041690, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32040519, 0);
    InitializeCommonEvent(0, 90005250, 32040200, 32042200, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040217, 32042217, 0, -1);
    InitializeCommonEvent(0, 90005201, 32040221, 30005, 20005, 1077936128, 0, 0, 1, 0, 0);
    InitializeCommonEvent(0, 90005251, 32040250, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040302, 32042213, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040303, 32042213, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040306, 32042305, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040350, 32042305, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040351, 32042351, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040400, 32042200, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040410, 32042410, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040411, 32042410, 0, -1);
    InitializeCommonEvent(0, 90005250, 32040412, 32042217, 0, -1);
});

$Event(32042510, Default, function() {
    InitializeCommonEvent(0, 90005500, 32040510, 32040511, 0, 32041510, 32041511, 32043511, 32041512, 32043512, 32042511, 32042512, 32040512, 32040513, 0);
});

$Event(32040519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32040510, ON);
    SetThisEventSlot(ON);
});

$Event(32049570, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    WaitFor(ActionButtonInArea(9220, X4_4));
    DisplayGenericDialogAndSetEventFlags(108000, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 3, X8_4, X12_4, X12_4);
    if (!EventFlag(X8_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    StoreItemAmountHeldInEventValue(ItemType.Goods, 8000, X16_4, 2);
    if (EventValue(X16_4, 6) < 2) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.5);
        DisplayGenericDialog(308000, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, X4_4, 191);
    ForceAnimationPlayback(10000, 60810, false, false, false);
    WaitFixedTimeSeconds(1.33);
    ForceAnimationPlayback(10000, 60811, false, false, false);
    WaitFixedTimeSeconds(1.5);
    DisplayGenericDialog(208000, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8000, 2);
    SetNetworkconnectedEventFlagID(X0_4, ON);
});

$Event(32042569, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    if (EventFlag(X0_4)) {
        DeleteAssetfollowingSFX(X4_4, true);
        DeleteAssetfollowingSFX(X16_4, true);
        EnableAsset(X8_4);
        EnableAsset(X12_4);
        DisableAsset(X16_4);
        EndEvent();
    }
    DeleteAssetfollowingSFX(X4_4, true);
    DeleteAssetfollowingSFX(X16_4, true);
    DisableAsset(X8_4);
    DisableAsset(X12_4);
    CreateAssetfollowingSFX(X4_4, 200, 806040);
    CreateAssetfollowingSFX(X4_4, 201, 806040);
    CreateAssetfollowingSFX(X16_4, 101, 806042);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X8_4);
    WaitFixedTimeSeconds(1.33);
    EnableAsset(X12_4);
    WaitFixedTimeSeconds(0.5);
    DeleteAssetfollowingSFX(X4_4, true);
    DeleteAssetfollowingSFX(X16_4, false);
    DisableAsset(X16_4);
});

$Event(32042580, Restart, function() {
    RegisterLadder(32040530, 32040531, 32041530);
    RegisterLadder(32040532, 32040533, 32041532);
});

$Event(32042200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
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

$Event(32042250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
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

$Event(32042270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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

$Event(32042800, Restart, function() {
    EndIf(EventFlag(32040800));
    WaitFor(CharacterHPValue(32040800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32040800));
    HandleBossDefeatAndDisplayBanner(32040800, TextBannerType.EnemyFelled);
    SetEventFlagID(32040800, ON);
    SetEventFlagID(9263, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61263, ON);
    }
});

$Event(32042810, Restart, function() {
    if (EventFlag(32040800)) {
        DisableCharacter(32040800);
        DisableCharacterCollision(32040800);
        ForceCharacterDeath(32040800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32040800);
    EnableCharacterInvincibility(32040800);
    ForceAnimationPlayback(32040800, 30000, true, false, false);
    WaitFor(EventFlag(32042805) && InArea(10000, 32042800));
    ForceAnimationPlayback(32040800, 20000, false, false, false);
L2:
    EnableCharacterAI(32040800);
    DisableCharacterInvincibility(32040800);
    SetNetworkUpdateRate(32040800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32040800, 0, 904600321);
});

$Event(32042811, Restart, function() {
    EndIf(EventFlag(32040800));
    WaitFor(HPRatio(32040800) <= 0.6);
    SetEventFlagID(32042802, ON);
});

$Event(32042849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32040800, 32041800, 32042800, 32042805, 32045800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 32040800, 32041800, 32042800, 32042805, 32042806, 10000);
    InitializeCommonEvent(0, 9005811, 32040800, 32041800, 3, 0);
    InitializeCommonEvent(0, 9005822, 32040800, 931000, 32042805, 32042806, 0, 32042802, 0, 0);
});
