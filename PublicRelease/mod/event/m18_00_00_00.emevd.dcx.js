// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (PlayerIsInOwnWorld()) {
        //InitializeEvent(0, 18000020, 0);
        //InitializeEvent(0, 18000021, 0);
        //InitializeEvent(0, 18000022, 0);
        InitializeEvent(0, 18002023, 0);
    }
L0:
    InitializeEvent(0, 18000050, 0);
    RegisterBonfire(18000000, 18001950, 0, 0, 0, 5);
    RegisterBonfire(18000001, 18001951, 0, 0, 0, 5);
    InitializeEvent(0, 18002800, 0);
    InitializeEvent(0, 18002810, 0);
    InitializeEvent(0, 18000820, 0);
    InitializeCommonEvent(0, 90005646, 18000800, 18002190, 18002191, 18001190, 18002190, 18);
    InitializeEvent(0, 18002850, 0);
    InitializeEvent(0, 18002860, 0);
    InitializeEvent(0, 18000870, 0);
    InitializeEvent(0, 18002400, 0);
    InitializeEvent(0, 18002440, 18000600, 18001600, 18001601, 18002600, 1075125944);
    InitializeEvent(1, 18002440, 18000601, 18001602, 18001603, 18002601, 1074916229);
    InitializeEvent(2, 18002440, 18000602, 18001604, 18001605, 18002602, 1074916229);
    InitializeEvent(0, 18002450, 18000600, 18001600, 18002600);
    InitializeEvent(1, 18002450, 18000601, 18001602, 18002601);
    InitializeEvent(2, 18002450, 18000602, 18001604, 18002602);
    InitializeEvent(0, 18002410, 0);
    InitializeEvent(0, 18002411, 18002431, 18003420, 18002421, 18003421, 0, 0);
    InitializeEvent(1, 18002411, 18002432, 18003421, 18002422, 18003422, 0, 0);
    InitializeEvent(2, 18002411, 18002433, 18003422, 18002423, 18003423, 0, 0);
    InitializeEvent(3, 18002411, 18002434, 18003423, 18002424, 18003424, 0, 0);
    InitializeEvent(4, 18002411, 18002435, 18003424, 18002425, 18003425, 18002426, 18003426);
    InitializeCommonEvent(0, 90005680, 18000530, 18000531, 18000532, 18000533, 18001530);
    InitializeCommonEvent(0, 900005610, 18001650, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 18001651, 100, 800, 0);
    InitializeCommonEvent(0, 90005501, 18000510, 18001510, 0, 18001510, 18001511, 18001512, 18000511);
    InitializeCommonEvent(0, 90005501, 18000515, 18001515, 1, 18001515, 18001516, 18001517, 18000516);
    InitializeEvent(0, 18002510, 0);
    InitializeCommonEvent(0, 90005511, 18000542, 18001542, 18003542, 227010, 0);
    InitializeCommonEvent(0, 90005512, 18000542, 18002542, 18002543);
    InitializeEvent(0, 18002580, 0);
    InitializeCommonEvent(0, 90005646, 18000800, 18002840, 18002841, 18001840, 18002840, 18);
    InitializeCommonEvent(0, 90005620, 18000570, 18001570, 18001571, 18001572, 18002570, 18002571, 18002572);
    InitializeEvent(0, 18002569, 18000570, 18001573);
    InitializeCommonEvent(0, 90005570, 60809, 9, 18001640, 0, 1, 0);
    InitializeEvent(0, 18002270, 18000270);
    InitializeEvent(0, 18002650, 18002650, 1010, 710010);
    InitializeEvent(0, 18002640, 18002651, 1020, 710020, 9100, 69000);
    InitializeEvent(1, 18002640, 18002656, 1070, 710070, 9112, 69120);
    InitializeEvent(2, 18002640, 18002663, 1140, 710140, 9103, 69030);
    InitializeCommonEvent(0, 90005261, 18000202, 18002202, 1092616192, 0, 0);
    
    //Tutorial Handlers
    InitializeEvent(3, 18002640, 18002665, 1160, 710160, 9104, 69040);
    InitializeEvent(4, 18002640, 18002667, 1190, 710190, 9105, 69050);
    InitializeEvent(5, 18002640, 18002670, 1200, 710200, 9129, 69290);
    InitializeEvent(6, 18002640, 18002668, 1210, 710210, 9138, 69380);
    InitializeEvent(7, 18002640, 18002659, 1100, 710100, 9140, 69400);
    InitializeEvent(0, 18002651, 18002652, 1030, 710030);
    InitializeEvent(1, 18002651, 18002653, 1040, 710040);
    InitializeEvent(2, 18002651, 18002657, 1080, 710080);
    InitializeEvent(3, 18002651, 18002658, 1090, 710090);
    InitializeEvent(5, 18002651, 18002660, 1110, 710110);
    InitializeEvent(7, 18002651, 18002664, 1150, 710150);
    InitializeEvent(8, 18002651, 18002666, 1170, 710170);
    InitializeEvent(0, 18002654, 18002654, 1050, 710050);
    InitializeEvent(0, 18002655, 18002655, 1060, 18000655, 710060);
    InitializeEvent(0, 18002662, 18002662, 1130, 18000662, 710130);
    //InitializeEvent(0, 18002663, 1180, 710180, 9106, 69060, 18000850);
    //InitializeEvent(0, 18002665, 710660, 1660, 9122, 69220); // Cooperative Multiplayer
    
    InitializeEvent(0, 18002200, 18000200, 18002201, 18003200, 18002200);
    InitializeEvent(0, 18002211, 18000211, 18002211);
    InitializeEvent(1, 18002211, 18000220, 18000220);
    InitializeEvent(0, 18002671, 710010);
    InitializeEvent(1, 18002671, 710020);
    InitializeEvent(2, 18002671, 710030);
    InitializeEvent(3, 18002671, 710040);
    InitializeEvent(4, 18002671, 710050);
    InitializeEvent(5, 18002671, 18000655);
    InitializeEvent(6, 18002671, 18000662);
    InitializeEvent(7, 18002671, 710070);
    InitializeEvent(8, 18002671, 710080);
    InitializeEvent(9, 18002671, 710090);
    InitializeEvent(10, 18002671, 710100);
    InitializeEvent(11, 18002671, 710110);
    InitializeEvent(12, 18002671, 710120);
    InitializeEvent(13, 18002671, 710140);
    InitializeEvent(14, 18002671, 710150);
    InitializeEvent(15, 18002671, 710160);
    InitializeEvent(16, 18002671, 710170);
    InitializeEvent(17, 18002671, 710000);
    InitializeEvent(18, 18002671, 710110);
    InitializeEvent(19, 18002671, 710110);
    InitializeEvent(20, 18002671, 710210);
    InitializeEvent(21, 18002671, 710200);
    InitializeEvent(22, 18002671, 710190);
    InitializeEvent(0, 18002250, 18000850, 8041);
    InitializeEvent(1, 18002250, 18000256, 8040);
    InitializeEvent(0, 18002690, 0);
    InitializeCommonEvent(0, 90005706, 18000701, 30025, 0);
    InitializeEvent(0, 18002210, 0);
    //Warp to Shaded Castle Inner Gate
    InitializeEvent(0, 18002870, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(18000701, true);
    InitializeCommonEvent(0, 90005251, 18000201, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005250, 18000300, 18002300, 0, -1);
    InitializeCommonEvent(0, 90005251, 18000313, 1082130432, 0, -1);
    InitializeCommonEvent(0, 90005251, 18000330, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005251, 18000342, 1082130432, 0, 3000);
    InitializeCommonEvent(0, 90005251, 18000343, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 18000344, 1084227584, 1073741824, -1);
    InitializeCommonEvent(0, 90005200, 18000350, 30002, 20002, 18002350, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 18000351, 30002, 20002, 18002350, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 18000350, 18000350, 18002000, 0, 0);
    InitializeCommonEvent(0, 90005300, 18000351, 18000351, 18002010, 0, 0);
    InitializeEvent(0, 18002520, 0);
    //Elevator Initial Position Initialize
    InitializeEvent(0, 18000519, 0);
});

$Event(18000020, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!(ThisEventSlot() && !EventFlag(60000))) {
        EndIf(ThisEventSlot());
        WaitFor(EventFlag(10010020) && PlayerInMap(18, 0, 0, 0));
        SetEventFlagID(101, ON);
        SetPlayerRespawnPoint(18002020);
        SaveRequest();
        DisableCharacterImmortality(10000);
        BonfirelikeRecovery();
        Unknown200461(9999);
        SetSpEffect(10000, 4291);
        SetSpEffect(10000, 4790);
        EndIf(!EventFlag(2000));
        SetEventFlagID(9021, ON);
        PlayCutsceneToPlayer(60430000, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
        WaitFixedTimeRealFrames(1);
        SetCameraAngle(6.98, 106.96);
    }
L0:
    item = PlayerHasItem(ItemType.Goods, 201)
        || PlayerHasItem(ItemType.Goods, 203)
        || PlayerHasItem(ItemType.Goods, 205)
        || PlayerHasItem(ItemType.Goods, 207)
        || PlayerHasItem(ItemType.Goods, 209)
        || PlayerHasItem(ItemType.Goods, 211)
        || PlayerHasItem(ItemType.Goods, 213)
        || PlayerHasItem(ItemType.Goods, 215)
        || PlayerHasItem(ItemType.Goods, 217)
        || PlayerHasItem(ItemType.Goods, 219);
    item2 = PlayerHasItem(ItemType.Goods, 221)
        || PlayerHasItem(ItemType.Goods, 223)
        || PlayerHasItem(ItemType.Goods, 225)
        || PlayerHasItem(ItemType.Goods, 227)
        || PlayerHasItem(ItemType.Goods, 229)
        || PlayerHasItem(ItemType.Goods, 221)
        || PlayerHasItem(ItemType.Goods, 223)
        || PlayerHasItem(ItemType.Goods, 225)
        || PlayerHasItem(ItemType.Goods, 227)
        || PlayerHasItem(ItemType.Goods, 229);
    item3 = item;
    item4 = item2;
    if (!item3) {
        //AwardItemsIncludingClients(2000);
        EndEvent();
    }
L10:
    SetEventFlagID(60000, ON);
});

$Event(18000021, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(102));
    EndIf(EventFlag(2002));
    SetCurrentTime(10, 30, 0, false, false, false, 0, 0, 0);
    FreezeTime(true);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1042368540));
    FreezeTime(false);
    SetEventFlagID(71801, ON);
    SetThisEventSlot(ON);
    SetEventFlagID(102, ON);
    ChangeWeather(Weather.Default, 3600, false);
});

$Event(18000022, Restart, function() {
    EndIf(EventFlag(18000021));
    EndIf(EventFlag(102));
    EndIf(EventFlag(2002));
    WaitFor(InArea(10000, 18002022));
    SetCurrentTime(10, 30, 0, false, false, false, 0, 0, 0);
});

$Event(18002023, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(710820));
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 18002680)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(710820, ON);
});

$Event(18000050, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2030));
    DisableObjAct(18001542, -1);
    flag = EventFlag(2030);
    act = ActionButtonInArea(7200, 18001542);
    WaitFor(flag || act);
    if (act.Passed) {
        DisplayFullScreenMessage(2000);
        WaitFixedTimeSeconds(1);
        RestartIf(!EventFlag(2030));
    }
L0:
    EnableObjAct(18001542, -1);
});

$Event(18002200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(InArea(10000, X4_4));
    ClearCharactersAITarget(X0_4);
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
    SetEventFlagID(X12_4, ON);
});

$Event(18002210, Restart, function() {
    EnableNetworkSync();
    DisableAsset(18000356);
    DisableAsset(18000357);
    WaitFor(
    InArea(10000, 18001565)
            && (CharacterType(10000, TargetType.BlackPhantom)
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    EnableAsset(18000356);
    EnableAsset(18000357);
    ForceAnimationPlayback(18000356, 1, false, false, false);
    ForceAnimationPlayback(18000357, 1, false, false, false);
    if (EventFlag(50)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(51)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500010, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(52)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500020, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(53)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500030, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(54)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500040, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(55)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500050, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(56)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500060, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    if (EventFlag(57)) {
        CreateDamagingAsset(18000356, 18000356, 200, 802500070, DamageTargetType.Character, 3.8, 10, 0);
        CreateDamagingAsset(18000357, 18000357, 200, 802500000, DamageTargetType.Character, 3.8, 10, 0);
    }
    WaitFixedTimeSeconds(10);
    DisableAsset(18000356);
    DisableAsset(18000357);
    RestartEvent();
});

$Event(18002211, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X4_4));
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 3, 1));
    ForceAnimationPlayback(X0_4, 3001, false, true, false);
    SetEventFlagID(X4_4, ON);
});

$Event(18002250, Restart, function(X0_4, X4_4) {
    SetSpEffect(X0_4, X4_4);
});

$Event(18002270, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 930025, false, false, false);
    EndEvent();
});

$Event(18002400, Restart, function() {
    if (EventFlag(18000400)) {
        DisableCharacter(18000400);
        DisableCharacterCollision(18000400);
        DisableCharacterAI(18000400);
        EndEvent();
    }
    WaitFor(PlayerInMap(18, 0, 0, 0));
    DisableCharacterInvincibility(18000400);
    EnableCharacterImmortality(18000400);
    DisableLockOnPoint(18000400, 220);
    DisableCharacterHPBarDisplay(18000400);
    SetSpEffect(18000400, 5000);
    SetNetworkUpdateRate(18000400, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterDefaultBackread(18000400);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(18000400, AuthorityLevel.Forced);
    }
});

$Event(18002410, Restart, function() {
    EndIf(EventFlag(18000400));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        CountEventFlags(TargetEventFlagType.EventFlag, 18002411, 18002411) >= 0
            && InArea(10000, 18002400));
    ChangeCharacterPatrolBehavior(18000400, 18003420);
    WaitFixedTimeFrames(1);
});

$Event(18002411, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(18000400));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(18000400, X0_4));
    GotoIf(L1, InArea(10000, X8_4));
    GotoIf(S0, 0 == X16_4);
    GotoIf(L2, InArea(10000, X16_4));
S0:
    ChangeCharacterPatrolBehavior(18000400, X4_4);
    Goto(L20);
L1:
    ChangeCharacterPatrolBehavior(18000400, X12_4);
    Goto(L20);
L2:
    ChangeCharacterPatrolBehavior(18000400, X20_4);
    Goto(L20);
L20:
    WaitFor(!InArea(18000400, X0_4));
    RestartEvent();
});

$Event(18002440, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X12_4)) {
        DisableAsset(X4_4);
        DeleteAssetEvent(X0_4);
        DisableAsset(X8_4);
        EndEvent();
    }
    EnableAsset(X4_4);
    WaitFor(AssetDestroyed(X8_4, Equal, 1));
    RequestAssetDestruction(X4_4, 0);
    DeleteAssetEvent(X0_4);
    CreateDamagingAsset(X0_4, X4_4, 200, 200500, DamageTargetType.Character, 2, 0, 0.1);
    SetEventFlagID(X12_4, ON);
    WaitFixedTimeSeconds(X16_4);
    if (!CharacterHasSpEffect(18000400, 19300)) {
        if (EventFlag(50)) {
            ShootBullet(18000600, X4_4, 200, 803301800, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(18000600, X4_4, 200, 803301810, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(18000600, X4_4, 200, 803301820, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(18000600, X4_4, 200, 803301830, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(18000600, X4_4, 200, 803301840, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(18000600, X4_4, 200, 803301850, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(18000600, X4_4, 200, 803301860, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(18000600, X4_4, 200, 803301870, 0, 0, 0);
        }
        DisableAsset(X4_4);
        DeleteAssetEvent(X0_4);
    }
L0:
    NoOp();
});

$Event(18002450, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(18000400));
    WaitFor(CharacterHasSpEffect(18000400, 19300) && EventFlag(X8_4));
    if (EventFlag(50)) {
        ShootBullet(18000600, X4_4, 200, 803301800, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(18000600, X4_4, 200, 803301810, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(18000600, X4_4, 200, 803301820, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(18000600, X4_4, 200, 803301830, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(18000600, X4_4, 200, 803301840, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(18000600, X4_4, 200, 803301850, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(18000600, X4_4, 200, 803301860, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(18000600, X4_4, 200, 803301870, 0, 0, 0);
    }
    DisableAsset(X4_4);
    DeleteAssetEvent(X0_4);
    DisableCharacterImmortality(18000400);
    ForceCharacterDeath(18000400, true);
    ClearSpEffect(18000400, 19300);
    WaitFixedTimeSeconds(3);
    EndIf(EventFlag(18000400));
    if (PlayerIsInOwnWorld()) {
        AwardItemsIncludingClients(18000900);
    }
    SetEventFlagID(18000400, ON);
});

$Event(18002510, Default, function() {
    InitializeCommonEvent(0, 90005500, 18000510, 18001510, 0, 18001510, 18001511, 18003511, 18001512, 18003512, 18002511, 18002512, 18000511, 18002512, 0);
    InitializeCommonEvent(0, 90005500, 18000515, 18001515, 1, 18001515, 18001516, 18003516, 18001517, 18003517, 18002516, 18002517, 18000516, 18002517, 0);
    InitializeCommonEvent(0, 90005681, 18000530, 18000531, 18000532, 18000533, 18001530);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100770, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100760, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100750, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100740, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100730, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100720, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100710, 801100705, 102, 0, 0, 0);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005682, 18000532, 18001530, 18002530, 18000530, 801100700, 801100705, 102, 0, 0, 0);
    }
});

//Elevator Initial Position
$Event(18000519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(18000510, ON);
});

$Event(18002520, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(18000530, ON);
});

$Event(18002569, Default, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        DisableAsset(X4_4);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 101, 806043);
    WaitFor(EventFlag(X0_4));
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 90011);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(X4_4);
});

$Event(18002580, Restart, function() {
    RegisterLadder(18000580, 18000581, 18001580);
});

$Event(18002640, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(X8_4) && InArea(10000, X0_4) && PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, X12_4, X8_4, 1);
    SetEventFlagID(X16_4, ON);
});

$Event(18002650, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(X8_4) && InArea(10000, X0_4) && HPRatio(10000) < 100 && PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(2);
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
});

$Event(18002651, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(X8_4) && InArea(10000, X0_4) && PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
});

$Event(18002654, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(X8_4)
            && InArea(10000, X0_4)
            && !PlayerHasItem(ItemType.Weapon, 33000000)
            && !PlayerHasItem(ItemType.Weapon, 33040000)
            && !PlayerHasItem(ItemType.Weapon, 33050000)
            && !PlayerHasItem(ItemType.Weapon, 33060000)
            && !PlayerHasItem(ItemType.Weapon, 33090000)
            && !PlayerHasItem(ItemType.Weapon, 33120000)
            && !PlayerHasItem(ItemType.Weapon, 33130000)
            && !PlayerHasItem(ItemType.Weapon, 33170000)
            && !PlayerHasItem(ItemType.Weapon, 33180000)
            && !PlayerHasItem(ItemType.Weapon, 33190000)
            && !PlayerHasItem(ItemType.Weapon, 33200000)
            && !PlayerHasItem(ItemType.Weapon, 33210000)
            && !PlayerHasItem(ItemType.Weapon, 33230000)
            && !PlayerHasItem(ItemType.Weapon, 33240000)
            && !PlayerHasItem(ItemType.Weapon, 33250000)
            && !PlayerHasItem(ItemType.Weapon, 33260000)
            && !PlayerHasItem(ItemType.Weapon, 33270000)
            && !PlayerHasItem(ItemType.Weapon, 33280000)
            && !PlayerHasItem(ItemType.Weapon, 34000000)
            && !PlayerHasItem(ItemType.Weapon, 34010000)
            && !PlayerHasItem(ItemType.Weapon, 34020000)
            && !PlayerHasItem(ItemType.Weapon, 34030000)
            && !PlayerHasItem(ItemType.Weapon, 34040000)
            && !PlayerHasItem(ItemType.Weapon, 34060000)
            && !PlayerHasItem(ItemType.Weapon, 34070000)
            && !PlayerHasItem(ItemType.Weapon, 34080000)
            && !PlayerHasItem(ItemType.Weapon, 34090000)
            && PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
});

$Event(18002655, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(X8_4)
            && InArea(10000, X0_4)
            && PlayerIsInOwnWorld()
            && (PlayerHasItem(ItemType.Weapon, 33000000)
                || PlayerHasItem(ItemType.Weapon, 33040000)
                || PlayerHasItem(ItemType.Weapon, 33050000)
                || PlayerHasItem(ItemType.Weapon, 33060000)
                || PlayerHasItem(ItemType.Weapon, 33090000)
                || PlayerHasItem(ItemType.Weapon, 33120000)
                || PlayerHasItem(ItemType.Weapon, 33130000)
                || PlayerHasItem(ItemType.Weapon, 33170000)
                || PlayerHasItem(ItemType.Weapon, 33180000)
                || PlayerHasItem(ItemType.Weapon, 33190000)
                || PlayerHasItem(ItemType.Weapon, 33200000)
                || PlayerHasItem(ItemType.Weapon, 33210000)
                || PlayerHasItem(ItemType.Weapon, 33230000)
                || PlayerHasItem(ItemType.Weapon, 33240000)
                || PlayerHasItem(ItemType.Weapon, 33250000)
                || PlayerHasItem(ItemType.Weapon, 33260000)
                || PlayerHasItem(ItemType.Weapon, 33270000)
                || PlayerHasItem(ItemType.Weapon, 33280000)
                || PlayerHasItem(ItemType.Weapon, 34000000)
                || PlayerHasItem(ItemType.Weapon, 34010000)
                || PlayerHasItem(ItemType.Weapon, 34020000)
                || PlayerHasItem(ItemType.Weapon, 34030000)
                || PlayerHasItem(ItemType.Weapon, 34040000)
                || PlayerHasItem(ItemType.Weapon, 34060000)
                || PlayerHasItem(ItemType.Weapon, 34070000)
                || PlayerHasItem(ItemType.Weapon, 34080000)
                || PlayerHasItem(ItemType.Weapon, 34090000)));
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    SetEventFlagID(X12_4, ON);
});

$Event(18002662, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(X8_4)
            && InArea(10000, X0_4)
            && PlayerIsInOwnWorld()
            && (PlayerHasItem(ItemType.Weapon, 40000000)
                || PlayerHasItem(ItemType.Weapon, 40010000)
                || PlayerHasItem(ItemType.Weapon, 40020000)
                || PlayerHasItem(ItemType.Weapon, 40030000)
                || PlayerHasItem(ItemType.Weapon, 40050000)
                || PlayerHasItem(ItemType.Weapon, 41000000)
                || PlayerHasItem(ItemType.Weapon, 41010000)
                || PlayerHasItem(ItemType.Weapon, 41020000)
                || PlayerHasItem(ItemType.Weapon, 41030000)
                || PlayerHasItem(ItemType.Weapon, 41040000)
                || PlayerHasItem(ItemType.Weapon, 41060000)
                || PlayerHasItem(ItemType.Weapon, 41070000)
                || PlayerHasItem(ItemType.Weapon, 42000000)
                || PlayerHasItem(ItemType.Weapon, 42000000)
                || PlayerHasItem(ItemType.Weapon, 42030000)
                || PlayerHasItem(ItemType.Weapon, 42040000)
                || PlayerHasItem(ItemType.Weapon, 43000000)
                || PlayerHasItem(ItemType.Weapon, 43020000)
                || PlayerHasItem(ItemType.Weapon, 43030000)
                || PlayerHasItem(ItemType.Weapon, 43050000)
                || PlayerHasItem(ItemType.Weapon, 43060000)
                || PlayerHasItem(ItemType.Weapon, 43080000)
                || PlayerHasItem(ItemType.Weapon, 43100000)
                || PlayerHasItem(ItemType.Weapon, 43110000)));
    SetEventFlagID(X8_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    SetEventFlagID(X12_4, ON);
});

$Event(18002663, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(X4_4) && EntityInRadiusOfEntity(X16_4, 10000, 10, 1) && PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X4_4, 1);
    SetEventFlagID(X12_4, ON);
});

//Tutorial Handler: Cooperative Multiplayer
$Event(18002665, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    SetEventFlagID(X0_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(18002671, Restart, function(X0_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 18002671) || !PlayerInMap(18, 0, 0, 0));
    SetEventFlagID(X0_4, OFF);
});

$Event(18002690, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(18007090));
    WaitFor(EventFlag(18007090));
    AwardGesture(9);
});

$Event(18002800, Restart, function() {
    EndIf(EventFlag(18000800));
    WaitFor(CharacterHPValue(18000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(18000800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(18000800));
    HandleBossDefeatAndDisplayBanner(18000800, TextBannerType.EnemyFelled);
    SetEventFlagID(18000800, ON);
    SetEventFlagID(9128, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61128, ON);
    }
});

$Event(18002810, Restart, function() {
    if (EventFlag(18000800)) {
        DisableCharacter(18000800);
        DisableCharacterCollision(18000800);
        ForceCharacterDeath(18000800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(18000800);
    EnableCharacterInvincibility(18000800);
    WaitFor(EventFlag(18002805) && InArea(10000, 18002800));
L2:
    EnableCharacterAI(18000800);
    DisableCharacterInvincibility(18000800);
    SetNetworkUpdateRate(18000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 18000800, 0, 904640000);
});

$Event(18000820, Restart, function() {
    InitializeCommonEvent(0, 9005800, 18000800, 18001800, 18002800, 18002805, 18005800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 18000800, 18001800, 18002800, 18002805, 18002806, 10000);
    InitializeCommonEvent(0, 9005811, 18000800, 18001800, 3, 0);
    InitializeCommonEvent(0, 9005822, 18000800, 920600, 18002805, 18002806, 0, 18002802, 0, 0);
});

$Event(18002850, Restart, function() {
    EndIf(EventFlag(18000850));
    WaitFor(CharacterHPValue(18000850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(18000850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(18000850));
    HandleBossDefeatAndDisplayBanner(18000850, TextBannerType.EnemyFelled);
    AwardItemsIncludingClients(10750);
    SetEventFlagID(18000850, ON);
});

$Event(18002860, Restart, function() {
    if (EventFlag(18000850)) {
        DisableCharacter(18000850);
        DisableCharacterCollision(18000850);
        ForceCharacterDeath(18000850, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(18000850);
    EnableCharacterInvincibility(18000850);
    WaitFor(EventFlag(18002855) && InArea(10000, 18002850));
L2:
    EnableCharacterAI(18000850);
    DisableCharacterInvincibility(18000850);
    SetNetworkUpdateRate(18000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 18000850, 0, 904311000);
});

$Event(18000870, Restart, function() {
    InitializeCommonEvent(0, 9005800, 18000850, 18001850, 18002850, 18002855, 18005850, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 18000850, 18001850, 18002850, 18002855, 18002856, 10000);
    InitializeCommonEvent(0, 9005811, 18000850, 18001850, 3, 0);
    InitializeCommonEvent(0, 9005811, 18000850, 18001851, 4, 0);
    InitializeCommonEvent(0, 9005822, 18000850, 931000, 18002855, 18002856, 0, 18002852, 0, 0);
});

$Event(18002870, Default, function() {
    CreateAssetfollowingSFX(18001660, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 18001660);
    RotateCharacter(10000, 18001660, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 39, 54, 0, 1039540981, 60);
    RestartEvent();
});
