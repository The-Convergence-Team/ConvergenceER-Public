// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31090000, 31091950, 0, 0, 0, 5);
    InitializeEvent(0, 31092800, 0);
    InitializeEvent(0, 31092810, 0);
    InitializeEvent(0, 31092849, 0);
    InitializeEvent(0, 31092811, 0);
    InitializeCommonEvent(0, 900005610, 31091200, 100, 800, 0);
    InitializeCommonEvent(0, 90005261, 31090200, 31092200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090201, 30001, 20001, 31092201, 1065353216, 1068708659, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090202, 30002, 20002, 31092201, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090203, 30000, 20000, 31092201, 1065353216, 1070386381, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090205, 30000, 20000, 31092201, 1065353216, 1072064102, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090214, 30002, 20002, 31092214, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090215, 30002, 20002, 31092214, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090218, 30001, 20001, 31092214, 1065353216, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090251, 30002, 20002, 31092214, 1065353216, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 31090254, 31092254, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 31090256, 30002, 20002, 31092256, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 31092301, 31090227, 1065353216);
    InitializeEvent(1, 31092301, 31090258, 1056964608);
    InitializeEvent(2, 31092301, 31090301, 1065353216);
    InitializeCommonEvent(0, 90005261, 31090350, 31092350, 1073741824, 0, 0);
    InitializeEvent(0, 31092350, 0);
    InitializeEvent(0, 31092351, 0);
    InitializeEvent(0, 31092300, 0);
    InitializeCommonEvent(0, 90005646, 31090800, 31092840, 31092841, 31091840, 31092840, 2335);
});

$Event(31092300, Restart, function() {
    EndIf(CharacterDead(31090300));
    EndIf(SpecialStandbyEndedFlag(31090300));
    DisableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 30002, false, false, false);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || EntityInRadiusOfEntity(31090300, 10000, 3, 1)
            || InArea(10000, 31092301)
            || ((CharacterHasSpEffect(31090300, 481)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90110)
                && !CharacterHasSpEffect(31090300, 90160))
                || (CharacterHasSpEffect(31090300, 482)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90120)
                    && !CharacterHasSpEffect(31090300, 90160)
                    && !CharacterHasSpEffect(31090300, 90162))
                || (CharacterHasSpEffect(31090300, 483)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90140)
                    && !CharacterHasSpEffect(31090300, 90160)
                    && !CharacterHasSpEffect(31090300, 90161))
                || (CharacterHasSpEffect(31090300, 484)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90130)
                    && !CharacterHasSpEffect(31090300, 90161)
                    && !CharacterHasSpEffect(31090300, 90162))
                || (CharacterHasSpEffect(31090300, 487)
                    && !CharacterHasSpEffect(31090300, 90100)
                    && !CharacterHasSpEffect(31090300, 90150)
                    && !CharacterHasSpEffect(31090300, 90160))));
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 20002, false, false, true);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(31090300, ON);
});

$Event(31092301, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4) || ThisEventSlot());
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || AssetDestroyed(31091550, Equal, 1)
            || AssetDestroyed(31091551, Equal, 1)
            || AssetDestroyed(31091552, Equal, 1)
            || AssetDestroyed(31091553, Equal, 1)
            || AssetDestroyed(31091554, Equal, 1)
            || AssetDestroyed(31091555, Equal, 1)
            || AssetDestroyed(31091556, Equal, 1)
            || AssetDestroyed(31091557, Equal, 1)
            || AssetDestroyed(31091558, Equal, 1)
            || EntityInRadiusOfEntity(X0_4, 10000, 3, 1)
            || InArea(10000, 31092301)
            || ((CharacterHasSpEffect(X0_4, 481)
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
    WaitFixedTimeSeconds(X4_4);
    EnableCharacterAI(X0_4);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31092350, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(!CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    SetSpEffect(31090350, 8081);
    RestartEvent();
});

$Event(31092351, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    ClearSpEffect(31090350, 8081);
    RestartEvent();
});

$Event(31092800, Restart, function() {
    EndIf(EventFlag(31090800));
    WaitFor(CharacterHPValue(31090800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31090800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31090800));
    HandleBossDefeatAndDisplayBanner(31090800, TextBannerType.EnemyFelled);
    SetEventFlagID(31090800, ON);
    SetEventFlagID(9240, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61240, ON);
    }
});

$Event(31092810, Restart, function() {
    if (EventFlag(31090800)) {
        DisableCharacter(31090800);
        DisableCharacterCollision(31090800);
        ForceCharacterDeath(31090800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31090800);
    EnableCharacterInvincibility(31090800);
    SetSpEffect(31090800, 8092);
    WaitFor(EventFlag(31092805) && InArea(10000, 31092800));
L2:
    EnableCharacterAI(31090800);
    DisableCharacterInvincibility(31090800);
    SetNetworkUpdateRate(31090800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31090800, 0, 904130310);
});

$Event(31092811, Restart, function() {
    EndIf(EventFlag(31090800));
    WaitFor(HPRatio(31090800) <= 0.6);
    SetEventFlagID(31092802, ON);
});

$Event(31092849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31090800, 31091800, 31092800, 31092805, 31095800, 10010, 0, 0);
    InitializeCommonEvent(0, 9005801, 31090800, 31091800, 31092800, 31092805, 31092806, 10010);
    InitializeCommonEvent(0, 9005811, 31090800, 31091800, 5, 0);
    InitializeCommonEvent(0, 9005822, 31090800, 931000, 31092805, 31092806, 0, 31092802, 0, 0);
});
