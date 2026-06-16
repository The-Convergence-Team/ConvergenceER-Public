// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1036500000, 1036501950, 0, 0, 0, 5);
    RegisterBonfire(1036500001, 1036501951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005880, 1036500800, 1036500805, 1036502800, 1036500800, 30255, 3286076, 1036502805);
    InitializeCommonEvent(0, 90005881, 1036500800, 1036500805, 1036502801, 1036502802, 20300, 1036501805, 3286076, 1036502805);
    InitializeCommonEvent(0, 90005882, 1036500800, 1036500805, 1036502800, 1036500800, 1036502806, 1036505810, 1036501800, 1036500810, 1036502810, 903600520, -1, 20001);
    InitializeCommonEvent(0, 90005883, 1036500800, 1036500805, 1036501805);
    InitializeCommonEvent(0, 90005885, 1036500800, 0, 1036502806, 1036502807, 0, 1);
    InitializeCommonEvent(0, 90005300, 1036500340, 1036500340, 0, 0, 0);
    InitializeCommonEvent(0, 90005633, 580310, 580010, 1036500600, 30016, 20016, 1036501600, 1036501610);
    
    InitializeEvent(0, 1036502580, 0); // Ladders
    // Enemy Activation
    InitializeCommonEvent(0, 90005250, 1036500113, 1036502113, 0, -1);
    InitializeCommonEvent(1, 90005250, 1036500126, 1036502126, 0, 3004);
    InitializeCommonEvent(2, 90005250, 1036500127, 1036502126, 0, -1);
    InitializeCommonEvent(3, 90005250, 1036500128, 1036502126, 0, -1);
    InitializeCommonEvent(4, 90005250, 1036500128, 1036502128, 0, -1);
    InitializeCommonEvent(4, 90005250, 1036500129, 1036502129, 0, -1);
    InitializeCommonEvent(4, 90005250, 1036500130, 1036502129, 0, -1);
    InitializeCommonEvent(4, 90005250, 1036500131, 1036502129, 0, -1);
    // Puppets
    InitializeEvent(0, 1036508770, 1036500110, 0, 0, 1, 1036502110);
    InitializeEvent(1, 1036508770, 1036500111, 0, 0, 0, 1036502111);
    InitializeEvent(2, 1036508770, 1036500112, 0, 0, 0, 1036502111);
    InitializeEvent(4, 1036508770, 1036500114, 0, 0, 0, 1036502114);
    InitializeEvent(5, 1036508770, 1036500115, 0, 0, 0, 1036502114);
    InitializeEvent(6, 1036508770, 1036500116, 0, 0, 0, 1036502114);
    InitializeEvent(7, 1036508770, 1036500117, 0, 0, 0, 1036502114);
    InitializeEvent(8, 1036508770, 1036500118, 0, 0, 1, 1036502118);
    InitializeEvent(9, 1036508770, 1036500119, 0, 0, 1, 1036502119);
    InitializeEvent(10, 1036508770, 1036500120, 0, 0, 0, 1036502120);
    InitializeEvent(11, 1036508770, 1036500121, 0, 0, 0, 1036502120);
    InitializeEvent(12, 1036508770, 1036500122, 0, 0, 0, 1036502120);
    InitializeEvent(13, 1036508770, 1036500123, 0, 0, 0, 1036502120);
    InitializeEvent(14, 1036508770, 1036500124, 0, 0, 0, 1036502124);
    InitializeEvent(15, 1036508770, 1036500125, 0, 0, 0, 1036502124);
    // Enemy in Crystal
    InitializeEvent(0, 1036508780, 1036500390, 1036500390, 1036502390, 0, 1036500710, 1036508390);
    InitializeEvent(1, 1036508780, 1036500391, 1036500391, 1036502391, 0, 1036500700, 1036508391);
    // Traps
    InitializeEvent(0, 1036502210, 1036501600, 1036502600, 1035500399);
    InitializeEvent(1, 1036502210, 1036501601, 1036502601, 1035500399);
    InitializeEvent(2, 1036502210, 1036501602, 1036502602, 1035500399);
    InitializeEvent(3, 1036502210, 1036501603, 1036502603, 1035500399);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1036500210, 1036502210, 1065353216, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1036500211, 1036502210, 1065353216, 1056964608, 1700);
    InitializeCommonEvent(0, 90005261, 1036500213, 1036502210, 1065353216, 1065353216, 1700);
    InitializeCommonEvent(0, 90005261, 1036500214, 1036502214, 1065353216, 1065353216, 1700);
    InitializeCommonEvent(0, 90005261, 1036500215, 1036502214, 1065353216, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1036500216, 1036502214, 1065353216, 1056964608, 1700);
    InitializeCommonEvent(0, 90005261, 1036500217, 1036502214, 1065353216, 1073741824, 1700);
    InitializeCommonEvent(0, 90005261, 1036500218, 1036502218, 1065353216, 1065353216, 1700);
    InitializeCommonEvent(0, 90005261, 1036500219, 1036502218, 1065353216, 1056964608, 1700);
    InitializeCommonEvent(0, 90005261, 1036500220, 1036502218, 1065353216, 0, 1700);
});

$Event(1036502580, Default, function() {
    RegisterLadder(1036500580, 1036500581, 1036501580);
});

// Custom Puppet Appearance Logic
$Event(1036508760, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(CharacterDead(X0_4));
    if (X12_4 == 1)
        SetSpEffect(X0_4, 10124);
    EnableCharacterInvincibility(X0_4);
    DisableCharacterAI(X0_4);
    if (Signed(X4_4) > 0)
        ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 15, 1));
    if (X12_4 == 1) {
        ClearSpEffect(X0_4, 10124);
        PlaySE(X0_4, SoundType.CharacterMotion, 999997800);
        WaitFor(ElapsedFrames(22) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    }
    DisableCharacterInvincibility(X0_4);
    EnableCharacterAI(X0_4);
    if (Signed(X8_4) > 0)
        ForceAnimationPlayback(X0_4, X8_4, false, false, false);    
});

// Custom Puppet Appearance Logic
$Event(1036508770, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(CharacterDead(X0_4));
    if (X12_4 == 1)
        SetSpEffect(X0_4, 10124);
    EnableCharacterInvincibility(X0_4);
    DisableCharacterAI(X0_4);
    if (Signed(X4_4) > 0)
        ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    WaitFor(InArea(10000, X16_4));
    DisableCharacterInvincibility(X0_4);
    if (X12_4 == 1) {
        ClearSpEffect(X0_4, 10124);
        PlaySE(X0_4, SoundType.CharacterMotion, 999997800);
        WaitFor(ElapsedFrames(22) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    }
    EnableCharacterAI(X0_4);
    if (Signed(X8_4) > 0)
        ForceAnimationPlayback(X0_4, X8_4, false, false, false);    
});

// Enemies Trapped in Crystal - Flag, Enemy, Asset
$Event(1036508780, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X0_4)) {
        DisableAsset(X8_4);
        DisableCharacter(X4_4);
        DisableCharacterCollision(X4_4);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
    DisableCharacter(X4_4);
    EnableCharacterFadeOnEnable(X4_4);
    SpawnMapSFX(X20_4);
    WaitForAssetDestroyed(DestructionState.Destroyed, X8_4, Equal, 1);
    DeleteMapSFX(X20_4, false);
    WaitFixedTimeFrames(2);
    EnableCharacter(X4_4);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 220, 510230);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 220, 510160);
    if (Signed(X12_4) > 0) 
        ForceAnimationPlayback(X4_4, X12_4, false, false, true);
    WaitFor(CharacterDead(X4_4));
    SetEventFlagID(X0_4, ON);
    WaitFixedTimeSeconds(2);
    AwardItemsIncludingClients(X16_4);
});


$Event(1036502210, Restart, function(X0_4, X4_4, X8_4) {
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
        ShootBullet(X8_4, X0_4, 100, 802402100, 0, 0, 0);
    }
    else if (EventFlag(51)) {
        ShootBullet(X8_4, X0_4, 100, 802402110, 0, 0, 0);
    }
    else if (EventFlag(52)) {
        ShootBullet(X8_4, X0_4, 100, 802402120, 0, 0, 0);
    }
    else if (EventFlag(53)) {
        ShootBullet(X8_4, X0_4, 100, 802402130, 0, 0, 0);
    }
    else if (EventFlag(54)) {
        ShootBullet(X8_4, X0_4, 100, 802402140, 0, 0, 0);
    }
    else if (EventFlag(55)) {
        ShootBullet(X8_4, X0_4, 100, 802402150, 0, 0, 0);
    }
    else if (EventFlag(56)) {
        ShootBullet(X8_4, X0_4, 100, 802402160, 0, 0, 0);
    }
    else if (EventFlag(57)) {
        ShootBullet(X8_4, X0_4, 100, 802402170, 0, 0, 0);
    }
    EndEvent();
});
