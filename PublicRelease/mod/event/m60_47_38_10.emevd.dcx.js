// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1047382210, 0);
    InitializeEvent(0, 1047382211, 1047381200, 1073741824);
    InitializeEvent(1, 1047382211, 1047381201, 1088421888);
    InitializeEvent(0, 1047382870, 0);
    InitializeCommonEvent(0, 90005605, 1047381610, 2372156, 1050360602, 0, 1047382650, 1047382654, 1047382655, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005620, 1047380570, 1047381570, 1047381571, 1047381572, 1047382570, 1047382571, 1047382572);
    InitializeEvent(0, 1047382569, 1047380570, 1047381573);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004070, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004060, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004050, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004040, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004030, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004020, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004010, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1047382500, 1047381500, 200, 0, 802004000, 1065353216, 0, 1065353216);
    }
    InitializeCommonEvent(0, 900005610, 1047381650, 100, 800, 0);
    InitializeCommonEvent(0, 90005636, 31218690, 1047380620, 1047381620, 4470, 1047382627, 1047382625, 1047382630, 1047383620, 0);
    InitializeCommonEvent(0, 90005637, 31218690, 1047380620, 1047382625);
    InitializeCommonEvent(0, 90005251, 1047380294, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380296, 1047382296, 0, -1);
    InitializeCommonEvent(0, 90005300, 1047380299, 1047380299, 1047380700, 0, 0);
    InitializeCommonEvent(0, 90005250, 1047380301, 1047382453, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380302, 1047382302, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380306, 1047382302, 0, -1);
    InitializeCommonEvent(0, 90005251, 1047380307, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380312, 1047382302, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380450, 1047382450, 0, -1);
    InitializeCommonEvent(0, 90005251, 1047382459, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005250, 1047380474, 1047382474, 0, -1);
    InitializeCommonEvent(0, 90005513, 1047380540, 1047381540, 1047381541, 1047383541, 99026, 1, 2);
    InitializeEvent(0, 1047381580, 0);
    InitializeCommonEvent(0, 90005706, 1047380701, 930025, 1047381700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1047380700, true);
    SetCharacterBackreadState(1047380701, true);
});

$Event(1047382210, Restart, function() {
    CreateBulletOwner(1047380298);
});

$Event(1047382211, Restart, function(X0_4, X4_4) {
    EnableNetworkSync();
    WaitFixedTimeSeconds(8);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 70, 1));
    WaitFixedTimeSeconds(X4_4);
    if (GameCycle() == 0) {
        ShootBullet(1047380298, X0_4, -1, 802700000, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1047380298, X0_4, -1, 802700010, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1047380298, X0_4, -1, 802700020, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1047380298, X0_4, -1, 802700030, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1047380298, X0_4, -1, 802700040, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1047380298, X0_4, -1, 802700050, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1047380298, X0_4, -1, 802700060, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1047380298, X0_4, -1, 802700070, 0, 0, 0);
        Goto(L0);
    }
L0:
    RestartEvent();
});

$Event(1047382569, Default, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        DisableAsset(X4_4);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 101, 806043);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 90011);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(X4_4);
});

$Event(1047381580, Default, function() {
    RegisterLadder(1047380580, 1047380581, 1047381580);
    RegisterLadder(1047380582, 1047380583, 1047381582);
    RegisterLadder(1047380584, 1047380585, 1047381584);
});

$Event(1047382870, Restart, function() {
    CreateAssetfollowingSFX(1047381660, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1047381660);
    RotateCharacter(10000, 1047381660, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 46, 36, 0, 1046361661, 60);
    RestartEvent();
});
