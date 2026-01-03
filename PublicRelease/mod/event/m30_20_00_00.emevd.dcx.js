// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(30200000, 30201950, 0, 0, 0, 5);
    InitializeEvent(0, 30202800, 0);
    InitializeEvent(0, 30202810, 0);
    InitializeEvent(0, 30202811, 0);
    InitializeEvent(0, 30202829, 0);
    InitializeCommonEvent(0, 90005616, 30207910, 30202700);
    InitializeCommonEvent(0, 90005211, 30200200, 30002, 20002, 30202200, 1065353216, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200201, 30002, 20002, 30202201, 1065353216, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200202, 30002, 20002, 30202202, 1065353216, 1065353216, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30200210, 30202200, 1065353216, 1036831949, 0);
    InitializeCommonEvent(0, 90005261, 30200211, 30202200, 1065353216, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 30200214, 30202257, 1065353216, 1036831949, 0);
    InitializeCommonEvent(0, 90005261, 30200215, 30202257, 1065353216, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 30200216, 30202257, 1065353216, 1056964608, 0);
    InitializeCommonEvent(0, 90005261, 30200217, 30202257, 1065353216, 1050253722, 0);
    InitializeCommonEvent(0, 90005261, 30200218, 30202257, 1065353216, 1045220557, 0);
    InitializeCommonEvent(0, 90005211, 30200243, 30002, 20002, 30202243, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200244, 30002, 20002, 30202243, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200245, 30002, 20002, 30202243, 1065353216, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200250, 30002, 20002, 30202250, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200251, 30002, 20002, 30202250, 1073741824, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200252, 30000, 20000, 30202250, 1073741824, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30200253, 30202253, 0, 1061997773, 0);
    InitializeCommonEvent(0, 90005261, 30200254, 30202254, 0, 1061997773, 0);
    InitializeCommonEvent(0, 90005211, 30200255, 30001, 20001, 30202202, 1065353216, 1036831949, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 30200256, 30001, 20001, 30202202, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 30200257, 30202257, 0, 1061997773, 0);
    InitializeCommonEvent(0, 90005261, 30200260, 30202260, 1065353216, 1036831949, 0);
    InitializeCommonEvent(0, 90005261, 30200261, 30202260, 1065353216, 1045220557, 0);
    InitializeCommonEvent(0, 90005261, 30200262, 30202260, 1065353216, 1036831949, 0);
    InitializeCommonEvent(0, 90005261, 30200263, 30202260, 1065353216, 1045220557, 0);
    InitializeCommonEvent(0, 90005646, 30200800, 30202840, 30202841, 30201840, 30202840, 5150);
    InitializeCommonEvent(0, 90005525, 30200560, 30201560);
    InitializeCommonEvent(0, 90005501, 30200510, 30200511, 4, 30201510, 30201511, 30201512, 30200512);
    InitializeEvent(0, 30202510, 0);
    InitializeCommonEvent(0, 90005650, 30200540, 30201540, 30201541, 30203541, 27115);
    InitializeCommonEvent(0, 90005651, 30200540, 30201540);
    InitializeEvent(0, 30202200, 0);
    
    InitializeEvent(0, 30208860, 30200800);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005460, 30200200);
    InitializeCommonEvent(0, 90005461, 30200200);
    InitializeCommonEvent(0, 90005462, 30200200);
    InitializeCommonEvent(0, 90005460, 30200201);
    InitializeCommonEvent(0, 90005461, 30200201);
    InitializeCommonEvent(0, 90005462, 30200201);
    InitializeCommonEvent(0, 90005460, 30200202);
    InitializeCommonEvent(0, 90005461, 30200202);
    InitializeCommonEvent(0, 90005462, 30200202);
});

$Event(30202510, Default, function() {
    InitializeCommonEvent(0, 90005500, 30200510, 30200511, 4, 30201510, 30201511, 30203511, 30201512, 30203512, 30202511, 30202512, 30200512, 30200513, 0);
});

$Event(30202520, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    DisableObjAct(X4_4, -1);
    if (EventFlag(X8_4)) {
        EnableObjAct(X4_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X8_4) && !EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    EnableObjAct(X4_4, -1);
});

$Event(30202200, Restart, function() {
    DisableAsset(30201200);
    EndEvent();
});

$Event(30202800, Restart, function() {
    EndIf(EventFlag(30200800));
    WaitFor(CharacterHPValue(30200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30208000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30200800));
    HandleBossDefeatAndDisplayBanner(30200800, TextBannerType.EnemyFelled);
    EnableObjAct(30201671, -1);
    SetEventFlagID(30200800, ON);
    SetEventFlagID(9220, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61220, ON);
    }
});

$Event(30202810, Restart, function() {
    if (EventFlag(30200800)) {
        DisableCharacter(30205800);
        DisableCharacterCollision(30205800);
        ForceCharacterDeath(30205800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30205800);
    EnableCharacterInvincibility(30205800);
    DisableCharacter(30200800);
    DisableCharacterCollision(30200800);
    DisableCharacterHPBarDisplay(30200800);
    DisableObjAct(30201671, -1);
    WaitFor(EventFlag(30202805) && InArea(10000, 30202800));
    SetNetworkUpdateRate(30200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(30200801, 20010, false, false, false);
    CopyPlayerCharacterData(10000, 30200800);
    WaitFor(CharacterHasSpEffect(30200801, 16307));
    EnableCharacter(30200800);
    EnableCharacterCollision(30200800);
    DisableCharacterCollision(30200801);
    WaitFixedTimeSeconds(0.5);
    WarpCharacterAndCopyFloor(30200800, TargetEntityType.Character, 30200801, 900, 30200801);
    ForceAnimationPlayback(30200800, 63010, false, false, true);
    WaitFixedTimeSeconds(4);
    EnableCharacterAI(30205800);
    DisableCharacterInvincibility(30205800);
    SetNetworkUpdateRate(30205800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30200800, 0, 903320300);
});

$Event(30202811, Restart, function() {
    EndIf(EventFlag(30200800));
    WaitFor(HPRatio(30200800) <= 0.6);
    SetEventFlagID(30202802, ON);
});

$Event(30202829, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30200800, 30201800, 30202800, 30202805, 30205800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30200800, 30201800, 30202800, 30202805, 30202806, 10000);
    InitializeCommonEvent(0, 9005811, 30200800, 30201800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30200800, 921100, 30202805, 30202806, 0, 30202802, 0, 0);
});

// Continious gear update on mimic tear
$Event(30208860, Restart, function(X0_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld() || HPRatio(X0_4) != 1);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CopyPlayerCharacterData(10000, X0_4);
    if (CharacterHasSpEffect(10000, 6534000) && !CharacterHasSpEffect(X0_4, 6534000))
        SetSpEffect(X0_4, 6534000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
