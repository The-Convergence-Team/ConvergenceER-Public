// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1036450000, 1036451950, 0, 0, 0, 5);
    RegisterBonfire(1036450001, 1036451951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005261, 1036450340, 1036452340, 1092616192, 0, 1700);
    InitializeCommonEvent(0, 90005860, 1036450800, 0, 1036450340, 0, 1036450400, 0);
    InitializeCommonEvent(0, 90005870, 1036450340, 904980604, 24);
    
    // - Nexus -
    // Setup
    InitializeEvent(0, 1036452600, 1036451600, 1036451601, 1036451602, 1036451603); // Enter
    InitializeEvent(1, 1036452600, 1036451604, 1036451605, 1036451606, 1036451607); // Exit
    InitializeEvent(0, 1036452601, 0); // Hider
    InitializeEvent(0, 1036452602, 0); // Grant Access
    
    // Portals
    // Way-Gate - Asset, areaID, blockID, regionID, indexID, initialAreaEntityID, (optional) awaited eventflag
    InitializeCommonEvent(1, 98005307, 1036451620, 60, 34, 47, 0, 1034472620, 76246); // Four Belfries
    InitializeCommonEvent(0, 98005307, 1036451621, 60, 34, 48, 0, 1034482620, 76246); // Kingsrealms Ruins
    InitializeCommonEvent(2, 98005307, 1036451622, 60, 36, 48, 0, 1036482620, 76246); // Bellum Highway
    InitializeCommonEvent(3, 98005307, 1036451623, 60, 37, 46, 0, 1037462650, 76246); // Church of Vows
    InitializeCommonEvent(4, 98005307, 1036451624, 60, 39, 45, 0, 1039452620, 76246); // Carian Study Hall
    InitializeCommonEvent(5, 98005307, 1036451625, 60, 39, 40, 0, 1039402620, 76246); // Church of Irith
    InitializeCommonEvent(6, 98005307, 1036451626, 60, 35, 42, 0, 1035422620, 76246); // Village of the Albunaurics
    InitializeCommonEvent(7, 98005307, 1036451627, 60, 33, 42, 0, 1033422620, 76246); // Converted Tower
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1036450220, 1036452220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450221, 1036452220, 1092616192, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450222, 1036452220, 1092616192, 1056964608, -1);
    InitializeCommonEvent(0, 90005251, 1036450223, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450224, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450225, 1088421888, 0, -1);
    //InitializeCommonEvent(0, 90005261, 1036450226, 1036452226, 0, 0, -1);
    //InitializeCommonEvent(0, 90005261, 1036450227, 1036452226, 0, 1065353216, -1);
    //InitializeCommonEvent(0, 90005261, 1036450228, 1036452226, 0, 1056964608, -1);
    //InitializeCommonEvent(0, 90005261, 1036450229, 1036452226, 0, 1050253722, -1);
    //InitializeCommonEvent(0, 90005261, 1036450230, 1036452226, 0, 1065353216, -1);
    //InitializeCommonEvent(0, 90005261, 1036450231, 1036452226, 0, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450241, 1036452250, 0, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1036450242, 1036452250, 0, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 1036450243, 1036452250, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450250, 1036452250, 0, 0, -1);
});

$Event(1036452200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    SetSpEffect(X0_4, 8560);
    DisableCharacter(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified) || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
    EnableCharacter(X0_4);
});

// Nexus Access - interactAsset, sealAsset, spawnPoint, centralizerRegion
$Event(1036452600, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(1036454610));
    WaitFor(ActionButtonInArea(9522, X0_4)); 
    
    RotateCharacter(10000, X4_4, -1, true);
    ForceAnimationPlayback(10000, 60470, false, false, false, Equal, 1);
    
    // Teleport Handling
    WaitFixedTimeSeconds(1.5);
    FadeToBlack(1, 0.8, false, -1);
    WaitFixedTimeSeconds(1);
    ChangeWeather(Weather.Cloudless, 300, true);
    IssueShortWarpRequest(10000, TargetEntityType.Area, X8_4, -1);
    SetCameraAngle(1, -90);
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, X12_4, 60471, false);
    FadeToBlack(0, 0.8, false, -1);
    
    RestartEvent();
});

// Nexus Hider
$Event(1036452601, Restart, function() {
    DisableAsset(1036456700);
    WaitFor(InArea(10000, 1036451700));
    EnableAsset(1036456700);
    WaitFor(!InArea(10000, 1036451700));
    RestartEvent();
});

// Nexus access granting
$Event(1036452602, Restart, function() {
    DisableCharacter(1036451608);
    DisableCharacterAI(1036451608);
    //EndIf(EventFlag(1036454610));
    
    DisableAsset(1036451601);
    SpawnMapSFX(1036452620);
    SpawnMapSFX(1036452622);
    
    WaitFor(ActionButtonInArea(6231, 1036452621));
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, 1036452620, 60810, false);
    WaitFixedTimeSeconds(2.5);
    
    // SFX Interact Point
    SpawnOneshotSFX(TargetEntityType.Area, 1036452620, -1, 526254); // VFX   - Explosion
    SpawnOneshotSFX(TargetEntityType.Area, 1036452620, -1, 526268); // Sound - Explosion
    SpawnOneshotSFX(TargetEntityType.Area, 1036452620, -1, 530151); // Sound - Explosion addative
    SpawnOneshotSFX(TargetEntityType.Area, 1036452620, -1, 523001); // Sound - Glintstone shot
    DeleteMapSFX(1036452620, false);
    DeleteMapSFX(1036452622, false);
    
    EnableCharacter(1036451608);
    WaitFixedTimeFrames(20);
    EnableCharacterAI(1036451608);
    WaitFixedTimeFrames(47);
    
    WaitFor(CharacterDead(1036451608));
    
    // SFX Gate
    WaitFixedTimeSeconds(2.5);
    ShootBullet(1036450220, 1036452628, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452629, -1, 180, 90, 0, 0);
    WaitFixedTimeFrames(15);
    ShootBullet(1036450220, 1036452627, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452630, -1, 180, 90, 0, 0);
    WaitFixedTimeFrames(15);
    ShootBullet(1036450220, 1036452626, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452631, -1, 180, 90, 0, 0);
    WaitFixedTimeFrames(15);
    ShootBullet(1036450220, 1036452625, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452632, -1, 180, 90, 0, 0);
    WaitFixedTimeFrames(15);
    ShootBullet(1036450220, 1036452624, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452633, -1, 180, 90, 0, 0);
    WaitFixedTimeFrames(15);
    ShootBullet(1036450220, 1036452623, -1, 180, 90, 0, 0);
    ShootBullet(1036450220, 1036452634, -1, 180, 90, 0, 0);
    
    // Enable Gate 
    WaitFixedTimeFrames(10);
    EnableAsset(1036451601);
    
    // Enable Teleport Interact
    WaitFixedTimeFrames(120);
    SetEventFlagID(1036454610, ON);
});
