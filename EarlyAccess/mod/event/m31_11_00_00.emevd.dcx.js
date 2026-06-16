// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31110000, 31111950, 0, 0, 0, 5);
    InitializeEvent(0, 31112800, 0);
    InitializeEvent(0, 31112801, 0);
    InitializeEvent(0, 31112802, 0);
    InitializeEvent(0, 31112810, 0);
    InitializeEvent(0, 31112811, 0);
    InitializeEvent(0, 31112849, 0);
    InitializeEvent(0, 31112803, 0);
    InitializeCommonEvent(0, 90005646, 31110800, 31112840, 31112841, 31111840, 31112840, 2847);
    InitializeCommonEvent(0, 91005600, 31112800, 31111695, 5);
    InitializeCommonEvent(0, 900005610, 31111200, 100, 800, 0);
    InitializeCommonEvent(0, 90005525, 31110600, 31111600);
    InitializeCommonEvent(0, 90005525, 31110601, 31111601);
    InitializeCommonEvent(0, 90005525, 31110602, 31111602);
    InitializeCommonEvent(0, 90005525, 31110603, 31111603);
    InitializeEvent(0, 31112400, 0);
    InitializeEvent(0, 31113700, 31110700);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 31110200, 30006, 20006, 31112200, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110201, 30003, 20003, 31112201, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110202, 30001, 20001, 31112202, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110208, 31112208, 1073741824, 0, 1707);
    InitializeEvent(0, 31112208, 0);
    InitializeEvent(0, 31112250, 31110209, 31112209, 1084227584, 0, 3031);
    InitializeCommonEvent(0, 90005211, 31110210, 30002, 20002, 31112210, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110213, 30007, 20007, 31112213, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110215, 31112215, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110216, 30002, 20002, 31112216, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110217, 30002, 20002, 31112217, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110223, 30004, 20004, 31112223, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110280, 31112280, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110285, 31112285, 1073741824, 1077936128, 0);
    InitializeCommonEvent(0, 90005261, 31110287, 31112285, 1073741824, 1080033280, 0);
    InitializeCommonEvent(0, 90005261, 31110240, 31112240, 1073741824, 0, 0);
    InitializeEvent(1, 31112250, 31110241, 31112241, 1077936128, 0, 3011);
    InitializeCommonEvent(0, 90005261, 31110242, 31112240, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005201, 31110248, 30001, 20001, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 31110249, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 31110250, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeEvent(2, 31112250, 31110251, 31112251, 1073741824, 0, 3011);
    InitializeCommonEvent(0, 90005211, 31110256, 30000, 20000, 31112256, 1065353216, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110257, 30000, 20000, 31112256, 1065353216, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110258, 31112300, 1073741824, 0, 0);
    InitializeEvent(0, 31112240, 31110258);
    InitializeCommonEvent(0, 90005261, 31110262, 31112262, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31110263, 31112262, 1073741824, 0, 0);
    InitializeEvent(0, 31112245, 31110262);
    InitializeEvent(1, 31112245, 31110263);
    InitializeCommonEvent(0, 90005261, 31110300, 31112300, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31110310, 30006, 20006, 31112213, 1073741824, 1065353216, 0, 0, 0, 0);
});

$Event(31112208, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(31110208, 8081);
    SetSpEffect(31110208, 8082);
    SetSpEffect(31110208, 5000);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(31110208, 10000, 4, 1))
            || CharacterAIState(31110208, AIStateType.Combat)
            || HasDamageType(31110208, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31110208, 436)
            || CharacterHasStateInfo(31110208, 2)
            || CharacterHasStateInfo(31110208, 5)
            || CharacterHasStateInfo(31110208, 6)
            || CharacterHasStateInfo(31110208, 260)
            || InArea(31110208, 31112207)
            || (CharacterHasSpEffect(31110208, 481)
                && !CharacterHasSpEffect(31110208, 90100)
                && !CharacterHasSpEffect(31110208, 90110)
                && !CharacterHasSpEffect(31110208, 90160))
            || (CharacterHasSpEffect(31110208, 482)
                && !CharacterHasSpEffect(31110208, 90100)
                && !CharacterHasSpEffect(31110208, 90120)
                && !CharacterHasSpEffect(31110208, 90160)
                && !CharacterHasSpEffect(31110208, 90162))
            || (CharacterHasSpEffect(31110208, 483)
                && !CharacterHasSpEffect(31110208, 90100)
                && !CharacterHasSpEffect(31110208, 90140)
                && !CharacterHasSpEffect(31110208, 90160)
                && !CharacterHasSpEffect(31110208, 90161))
            || (CharacterHasSpEffect(31110208, 484)
                && !CharacterHasSpEffect(31110208, 90100)
                && !CharacterHasSpEffect(31110208, 90130)
                && !CharacterHasSpEffect(31110208, 90161)
                && !CharacterHasSpEffect(31110208, 90162))
            || (CharacterHasSpEffect(31110208, 487)
                && !CharacterHasSpEffect(31110208, 90100)
                && !CharacterHasSpEffect(31110208, 90150)
                && !CharacterHasSpEffect(31110208, 90160)));
    ClearSpEffect(31110208, 8081);
    ClearSpEffect(31110208, 8082);
    ClearSpEffect(31110208, 5000);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31112240, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 6, 1))
            || CharacterAIState(X0_4, AIStateType.Combat)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
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
                && !CharacterHasSpEffect(X0_4, 90160)));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31112245, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(X0_4, 31112263))
            || CharacterAIState(X0_4, AIStateType.Combat)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
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
                && !CharacterHasSpEffect(X0_4, 90160)));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31112250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, X4_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || chrSpArea
            || (chrSp && EntityInRadiusOfEntity(10000, X0_4, X8_4, 1))
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
    if (chrSpArea.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(31112310, Restart, function(X0_4) {
    SetSpEffect(X0_4, 8087);
});

$Event(31112301, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(31110301, 8081);
    SetSpEffect(31110301, 8082);
    SetSpEffect(31110301, 5000);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(31110301, 10000, 4, 1))
            || CharacterAIState(31110301, AIStateType.Combat)
            || HasDamageType(31110301, 0, DamageType.Unspecified));
    ClearSpEffect(31110301, 8081);
    ClearSpEffect(31110301, 8082);
    ClearSpEffect(31110301, 5000);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31112400, Default, function() {
    DisableNetworkSync();
    if (EventFlag(31118700)) {
        DisableAsset(31111700);
        EndEvent();
    }
L0:
    WaitFor((PlayerIsInOwnWorld() && ActionButtonInArea(9533, 31111700)) || EventFlag(31118700));
    if (!EventFlag(31118700)) {
        if (!PlayerHasItem(ItemType.Goods, 8169)) {
            DisplayGenericDialog(30080, PromptType.OKCANCEL, NumberofOptions.OneButton, 31111700, 3);
            WaitFixedTimeSeconds(1.4);
            RestartEvent();
        }
L3:
        ForceAnimationPlayback(10000, 60010, false, false, false);
        WaitFixedTimeSeconds(2.8);
        DisplayGenericDialog(208169, PromptType.OKCANCEL, NumberofOptions.OneButton, 31111700, 3);
    }
L9:
    ForceAnimationPlayback(31111700, 1, false, false, false);
    SetNetworkconnectedEventFlagID(31118700, ON);
});

$Event(31112800, Restart, function() {
    EndIf(EventFlag(31110800));
    WaitFor(CharacterDead(31110800) && CharacterDead(31110801) && CharacterDead(31110802));
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(31110800, TextBannerType.EnemyFelled);
    SetEventFlagID(31110800, ON);
    SetEventFlagID(9246, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61246, ON);
    }
});

$Event(31112801, Restart, function() {
    EndIf(EventFlag(31110800));
    WaitFor(CharacterHPValue(31110800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31110800, SoundType.SFX, 888880000);
});

$Event(31112802, Restart, function() {
    EndIf(EventFlag(31110800));
    WaitFor(CharacterHPValue(31110801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31110801, SoundType.SFX, 888880000);
});

$Event(31112803, Restart, function() {
    EndIf(EventFlag(31110800));
    WaitFor(CharacterHPValue(31110802) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31110802, SoundType.SFX, 888880000);
});

$Event(31112810, Restart, function() {
    if (EventFlag(31110800)) {
        DisableCharacter(31110800);
        DisableCharacter(31110801);
        DisableCharacter(31110802);
        DisableCharacterCollision(31110800);
        DisableCharacterCollision(31110801);
        DisableCharacterCollision(31110802);
        ForceCharacterDeath(31110800, false);
        ForceCharacterDeath(31110801, false);
        ForceCharacterDeath(31110802, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31110800);
    DisableCharacterAI(31110801);
    DisableCharacterAI(31110802);
    EnableCharacterInvincibility(31110800);
    EnableCharacterInvincibility(31110801);
    EnableCharacterInvincibility(31110802);
    ForceAnimationPlayback(31110800, 30001, false, false, false);
    ForceAnimationPlayback(31110801, 30001, false, false, false);
    ForceAnimationPlayback(31110802, 30000, false, false, false);
    WaitFor(EventFlag(31112805) && InArea(10000, 31112800));
L2:
    EnableCharacterAI(31110800);
    EnableCharacterAI(31110801);
    EnableCharacterAI(31110802);
    DisableCharacterInvincibility(31110800);
    DisableCharacterInvincibility(31110801);
    DisableCharacterInvincibility(31110802);
    SetNetworkUpdateRate(31110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(31110801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(31110802, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31110800, 0, 903350313);
    DisplayBossHealthBar(Enabled, 31110801, 1, 903350312);
    DisplayBossHealthBar(Enabled, 31110802, 2, 903350314);
    ForceAnimationPlayback(31110800, 20001, false, false, false);
    ForceAnimationPlayback(31110801, 20001, false, false, false);
    ForceAnimationPlayback(31110802, 20000, false, false, false);
});

$Event(31112811, Restart, function() {
    EndIf(EventFlag(31110800));
    WaitFor(CharacterDead(31110800) || CharacterDead(31110801) || CharacterDead(31110802));
    SetEventFlagID(31112842, ON);
});

$Event(31112849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31110800, 31111800, 31112800, 31112805, 31115800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31110800, 31111800, 31112800, 31112805, 31112806, 10000);
    InitializeCommonEvent(0, 9005811, 31110800, 31111800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31110800, 931000, 31112805, 31112806, 0, 31112842, 0, 0);
});

$Event(31113700, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndIf(EventFlag(400431));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterImmortality(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(EventFlag(14009267) && (EventFlag(1044369228) || EventFlag(14009263)));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacterImmortality(X0_4);
    EndEvent();
});
