// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(73009, 30091950, 0, 0, 0, 5);
    InitializeEvent(0, 30090100, 30090540, 30091540, 30093540, 27041);
    InitializeCommonEvent(0, 90005501, 30090510, 30091510, 2, 30091510, 30091511, 30091512, 30090511);
    InitializeEvent(0, 30092510, 0);
    InitializeCommonEvent(0, 90005680, 30090500, 30090501, 30090502, 30090503, 30091500);
    InitializeEvent(0, 30092500, 0);
    InitializeEvent(0, 30092580, 0);
    InitializeCommonEvent(0, 90005616, 30097000, 30092700);
    InitializeCommonEvent(0, 90005250, 30090200, 30092200, 1045220557, 0);
    InitializeCommonEvent(1, 90005250, 30090201, 30092200, 0, 0);
    InitializeCommonEvent(0, 90005200, 30090205, 30003, 20003, 30092205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090206, 30092206, 0, 3000);
    InitializeCommonEvent(0, 90005250, 30090219, 30092219, 0, 3026);
    InitializeCommonEvent(0, 90005200, 30090210, 30003, 20003, 30092210, 0, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005200, 30090211, 30003, 20003, 30092210, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 30090215, 30003, 20003, 30092215, 1067869798, 0, 0, 0, 0);
    InitializeCommonEvent(2, 90005200, 30090217, 30003, 20003, 30092215, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090234, 30092230, 0, 0);
    InitializeCommonEvent(0, 90005221, 30090230, 30000, 20000, 0, 0);
    InitializeCommonEvent(1, 90005221, 30090231, 30000, 20000, 0, 0);
    InitializeCommonEvent(2, 90005221, 30090232, 30000, 20000, 0, 0);
    InitializeCommonEvent(3, 90005221, 30090233, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005200, 30090235, 30000, 20000, 30092235, 0, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005200, 30090236, 30000, 20000, 30092235, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090239, 30092258, 0, 701);
    InitializeCommonEvent(0, 90005221, 30090240, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090250, 30092250, 0, 3009);
    InitializeCommonEvent(1, 90005250, 30090251, 30092250, 1077936128, 0);
    InitializeCommonEvent(0, 90005250, 30090258, 30092258, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090254, 30092254, 0, 0);
    InitializeCommonEvent(0, 90005250, 30090255, 30092254, 0, 3010);
    InitializeCommonEvent(0, 90005250, 30090270, 30092270, 0, 5003);
    InitializeCommonEvent(1, 90005250, 30090301, 30092301, 0, 5003);
    InitializeCommonEvent(0, 90005250, 30090300, 30092300, 0, -1);
    InitializeCommonEvent(0, 90005250, 30090400, 30092400, 1065353216, -1);
    InitializeEvent(0, 30092400, 30090400);
    InitializeEvent(0, 30092410, 30090400, 30092431, 30093420, 30092421, 30093421);
    InitializeCommonEvent(0, 90005250, 30090410, 30092410, 0, -1);
    InitializeEvent(1, 30092400, 30090410);
    InitializeEvent(0, 30092399, 0);
    InitializeEvent(3, 30092410, 30090410, 30092451, 30093440, 30092441, 30093441);
    InitializeEvent(4, 30092410, 30090410, 30092452, 30093441, 30092442, 30093442);
    InitializeEvent(0, 30092800, 0);
    InitializeEvent(0, 30092810, 0);
    InitializeEvent(0, 30092849, 0);
    InitializeEvent(0, 30092811, 0);
    InitializeCommonEvent(0, 90005646, 30090800, 30092840, 30092841, 30091840, 30092840, 2334);
    InitializeEvent(0, 30090790, 30091670, 30090800);
});

$Event(50, Default, function() {
    InitializeEvent(0, 30090050, 0);
    InitializeEvent(0, 30090519, 0);
});


$Event(30090050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30090500, ON);
});

$Event(30090100, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X0_4)) {
        ReproduceAssetAnimation(X4_4, 2);
        DisableObjAct(X4_4, X12_4);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && ObjActEventFlag(X8_4));
    SetNetworkconnectedEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    EndEvent();
});

$Event(30092510, Default, function() {
    InitializeCommonEvent(0, 90005500, 30090510, 30091510, 2, 30091510, 30091511, 30093511, 30091512, 30093512, 30092511, 30092512, 30090511, 30092512, 0);
});

$Event(30090519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30090510, ON);
});

$Event(30092500, Restart, function() {
    InitializeCommonEvent(0, 90005681, 30090500, 30090501, 30090502, 30090503, 30091500);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005682, 30090    502, 30091500, 30092500, 30090500, 801103270, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103260, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103250, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103240, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103230, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103220, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103210, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103200, 801103205, 100, 101, 0, 0);
    }
});

$Event(30092300, Restart, function(X0_4, X4_4) {
    WaitFor(
        EntityInRadiusOfEntity(X0_4, 10000, 2.4, 1) || EntityInRadiusOfEntity(X0_4, X4_4, 2.4, 1));
    CreateDamagingAsset(X0_4, X0_4, 100, 103000, DamageTargetType.Character, 2.3, 1, 0);
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(X0_4);
    WaitFixedTimeSeconds(0.7);
    RestartEvent();
});

$Event(30092305, Restart, function(X0_4, X4_4) {
    WaitFor(
        EntityInRadiusOfEntity(X0_4, 10000, 3.1, 1) || EntityInRadiusOfEntity(X0_4, X4_4, 3.1, 1));
    CreateDamagingAsset(X0_4, X0_4, 100, 103000, DamageTargetType.Character, 3.1, 1, 0);
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(X0_4);
    WaitFixedTimeSeconds(0.7);
    RestartEvent();
});

$Event(30092399, Restart, function() {
    ChangeCharacterDispmask(30090410, 10, OFF);
    ChangeCharacterDispmask(30090410, 11, OFF);
    ChangeCharacterHitmask(30090410, 5, OFF);
    AttachAssetToCharacter(30090410, 110, 30091410);
});

$Event(30092400, Restart, function(X0_4) {
    EnableCharacterInvincibility(X0_4);
    DisableLockOnPoint(X0_4, 220);
    DisableCharacterHPBarDisplay(X0_4);
    SetSpEffect(X0_4, 5000);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    EndEvent();
});

$Event(30092410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(X0_4, X4_4));
    if (!InArea(10000, X12_4)) {
        ChangeCharacterPatrolBehavior(X0_4, X8_4);
    } else {
L1:
        ChangeCharacterPatrolBehavior(X0_4, X16_4);
        Goto(L20);
    }
L20:
    WaitFor(!InArea(X0_4, X4_4));
    RestartEvent();
});

$Event(30092580, Default, function() {
    RegisterLadder(30090580, 30090581, 30091580);
    RegisterLadder(30090582, 30090583, 30091582);
});

$Event(30092610, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    flagArea &= EventFlag(X0_4);
    if (X8_4 != 0) {
        flagArea &= InArea(10000, X8_4);
    }
    WaitFor(flagArea);
    CreateBulletOwner(X12_4);
    if (Signed(X24_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X24_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X24_4, 801103200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X24_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X24_4, 801103205, 0, 0, 0);
        }
    }
L1:
    if (Signed(X28_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801103200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X28_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X28_4, 801103205, 0, 0, 0);
        }
    }
L2:
    if (Signed(X32_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801103200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X32_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X32_4, 801103205, 0, 0, 0);
        }
    }
L3:
    if (Signed(X36_4) != 0) {
        if (Signed(X16_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X16_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801103200, 0, 0, 0);
        }
        if (Signed(X20_4) != 0) {
            ShootBullet(X12_4, X4_4, X36_4, X20_4, 0, 0, 0);
        } else {
            ShootBullet(X12_4, X4_4, X36_4, 801103205, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

$Event(30090790, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    DisableObjAct(X0_4, -1);
    if (EventFlag(X4_4)) {
        EnableObjAct(X0_4, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && !ThisEventSlot());
    SetThisEventSlot(ON);
    EnableObjAct(X0_4, -1);
    EndEvent();
});

$Event(30092800, Restart, function() {
    EndIf(EventFlag(30090800));
    WaitFor(CharacterHPValue(30090800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30090800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30090800));
    HandleBossDefeatAndDisplayBanner(30090800, TextBannerType.EnemyFelled);
    EnableObjAct(30091520, -1);
    SetEventFlagID(30090800, ON);
    SetEventFlagID(9209, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61209, ON);
    }
});

$Event(30092810, Restart, function() {
    if (EventFlag(30090800)) {
        DisableCharacter(30090800);
        DisableCharacterCollision(30090800);
        ForceCharacterDeath(30090800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30090800);
    EnableCharacterInvincibility(30090800);
    EnableObjAct(30091520, -1);
    WaitFor(EventFlag(30092805) && InArea(10000, 30092800));
L2:
    EnableCharacterAI(30090800);
    DisableCharacterInvincibility(30090800);
    SetNetworkUpdateRate(30090800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30090800, 0, 903181300);
});

$Event(30092811, Restart, function() {
    EndIf(EventFlag(30090800));
    WaitFor(HPRatio(30090800) <= 0.6);
    SetEventFlagID(30092802, ON);
});

$Event(30092849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 30090800, 30091800, 30092800, 30092805, 30095800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 30090800, 30091800, 30092800, 30092805, 30092806, 10000);
    InitializeCommonEvent(0, 9005811, 30090800, 30091800, 3, 0);
    InitializeCommonEvent(0, 9005822, 30090800, 921400, 30092805, 30092806, 0, 30092802, 0, 0);
});
