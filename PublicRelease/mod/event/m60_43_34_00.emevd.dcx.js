// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1043340000, 1043341950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005461, 1043340204);
    InitializeCommonEvent(1, 90005462, 1043340204);
    InitializeCommonEvent(0, 90005460, 1043340204);
    InitializeEvent(0, 1043342220, 1043340220, 1043341220, 1043342220);
    InitializeEvent(1, 1043342220, 1043340221, 1043341221, 1043342220);
    InitializeEvent(2, 1043342220, 1043340222, 1043341222, 1043342220);
    InitializeEvent(3, 1043342220, 1043340223, 1043341223, 1043342223);
    InitializeEvent(4, 1043342220, 1043340224, 1043341224, 1043342223);
    InitializeEvent(5, 1043342220, 1043340225, 1043341225, 1043342223);
    InitializeCommonEvent(0, 90005683, 62150, 1043341684, 210, 78196, 78196);
    InitializeCommonEvent(0, 90005300, 1043340340, 1043340340, 1043340400, 1041350100, 0);
    InitializeCommonEvent(0, 90005706, 1043340700, 930025, 1043341700);
    InitializeCommonEvent(0, 90005771, 1043340950, 1043342700);
       
    // Make enemies neutral to Necromancer class starters
    InitializeCommonEvent(0, 98005301, 60915, 1043340701);
    InitializeCommonEvent(1, 98005301, 60915, 1043340702);
    InitializeCommonEvent(2, 98005301, 60915, 1043340703);
    InitializeCommonEvent(3, 98005301, 60915, 1043340704);
    InitializeCommonEvent(4, 98005301, 60915, 1043340705);
    
    // Make enemies neutral to heretic starters
    InitializeCommonEvent(0, 98005301, 60922, 1043340725);
    InitializeEvent(0, 1043342225, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043340700, true);
    InitializeCommonEvent(0, 90005201, 1043340210, 30004, 20004, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043340212, 30004, 20004, 1043342212, 1092616192, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043340213, 30004, 20004, 1043342212, 1092616192, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043340214, 30004, 20004, 1043342212, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1043340300, 1043342300, 0, 3031);
});

//Heretic starter anims
$Event(1043342225, Default, function() {
    EndIf(!InArea(10000, 1043340985) || EventFlag(1043340920) || !EventFlag(60922));
    SetCameraAngle(20, 95);
    ForceAnimationPlayback(10000, 90007, false, false, false);
    WaitFixedTimeFrames(60);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 523913);
    ForceAnimationPlayback(10000, 63021, false, false, false);
    WaitFixedTimeFrames(30);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 900, 523912);
    SetEventFlagID(1043340920, ON);
});

$Event(1043342220, Restart, function(X0_4, X4_4, X8_4) {
    EnableAsset(X4_4);
    DisableCharacter(X0_4);
    EndIf(EventFlag(1044342300));
    EndIf(CharacterDead(X0_4));
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X4_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260)
        || InArea(10000, X8_4);
    WaitFor(dmgChrArea && chrSp);
    SetEventFlagID(1044342300, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 900, 641012);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(X4_4);
    WaitFixedTimeSeconds(0.3);
    EnableCharacter(X0_4);
});

$Event(1043343700, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30023, false, false, false);
    EndEvent();
});
