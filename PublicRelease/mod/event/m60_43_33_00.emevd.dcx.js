// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1043330800, 1043330000, 1043330950, 1043331950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 90005600, 1043330000, 1043331950, 1084227584, 1043330480);
    InitializeCommonEvent(0, 90005870, 1043330800, 904810600, 18);
    InitializeCommonEvent(0, 90005860, 1043330800, 0, 1043330800, 0, 30180, 0);
    InitializeCommonEvent(0, 90005251, 1043330800, 1101004800, 0, 0);
    InitializeCommonEvent(0, 900005610, 1043331680, 100, 800, 1043338600);
    InitializeCommonEvent(0, 90005550, 1043330530, 1043331530, 1043333530);
    InitializeEvent(0, 1043332270, 0);
    InitializeEvent(1, 1043332270, 0);
    InitializeCommonEvent(0, 90005724, 1043330290, 1043330290, 70500, 0, 1, 1043335291);
    InitializeCommonEvent(0, 90005722, 1043330290, 1043330291);
    InitializeCommonEvent(0, 90005720, 1043330290, 1043330292, 10961, 181);
    InitializeCommonEvent(0, 90005720, 1043330290, 1043330293, 10961, 182);
    InitializeCommonEvent(0, 90005721, 1043330290, 1043330292);
    InitializeCommonEvent(0, 90005721, 1043330290, 1043330293);
    InitializeCommonEvent(0, 90005723, 1043330290);
    InitializeEvent(0, 1043332230, 1043330230, 1043332230);
    InitializeEvent(1, 1043332230, 1043330231, 1043332230);
    InitializeEvent(2, 1043332230, 1043330232, 1043332230);
    InitializeEvent(3, 1043332230, 1043330233, 1043332233);
    InitializeEvent(4, 1043332230, 1043330234, 1043332233);
    InitializeEvent(5, 1043332230, 1043330235, 1043332233);
    InitializeEvent(6, 1043332230, 1043330236, 1043332233);
    InitializeEvent(7, 1043332230, 1043330237, 1043332233);
    InitializeEvent(8, 1043332230, 1043330238, 1043332233);
    InitializeEvent(9, 1043332230, 1043330239, 1043332233);
    InitializeEvent(10, 1043332230, 1043330240, 1043332233);
    InitializeEvent(11, 1043332230, 1043330241, 1043332233);
    InitializeCommonEvent(0, 90005300, 1043330221, 1043330221, 40136, 0, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1043330700, 1043330725, 1043330800);
    InitializeEvent(0, 1043330051, 0);
    InitializeCommonEvent(0, 90005890, 1043330800, 1043330801, 1043330801);
    InitializeCommonEvent(0, 90005891, 1043330800, 1043330801, 1043330802);
    InitializeEvent(0, 98005303, 1043330801, 1043330803);
    InitializeEvent(0, 98005304, 1043330801, 1043330803);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1043330050, 0);
    InitializeCommonEvent(0, 90005261, 1043330210, 1043332210, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1043330211, 1043332211, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043330200, 1084227584, 0, 3005);
    InitializeCommonEvent(0, 90005261, 1043330201, 1043332200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043330202, 1043332200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043330203, 1043332200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043330204, 1043332200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043330250, 30000, 20000, 1092616192, 0, 0, 0, 0, 0);
});

$Event(1043330050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlag(TargetEventFlagType.EventFlag, 1043330610, ON);
});

$Event(1043330051, Restart, function() {
    DeleteAssetfollowingSFX(1043331950, true);
});

$Event(1043332230, Restart, function(X0_4, X4_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
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
    areaChrSp = InArea(10000, X4_4) && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SetSpEffect(X0_4, 8080);
});

$Event(1043332270, Restart, function() {
    SetNetworkSyncState(Disabled);
    CreateBulletOwner(1043330270);
    WaitFor(InArea(10000, 1043332270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1043330270, 1043332271, 900, 802101200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1043330270, 1043332271, 900, 802101210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1043330270, 1043332271, 900, 802101220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1043330270, 1043332271, 900, 802101230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1043330270, 1043332271, 900, 802101240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1043330270, 1043332271, 900, 802101250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1043330270, 1043332271, 900, 802101260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1043330270, 1043332271, 900, 802101270, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1043332650, Default, function() {
    InitializeCommonEvent(0, 90005500, 1043330650, 1043330651, 0, 1043331650, 1043331651, 1043332651, 1043331652, 1043332652, 1043332651, 1043332652, 1043330652, 1043332653, 0);
});

$Event(1043330510, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlag(TargetEventFlagType.EventFlag, 1043330650, ON);
});

$Event(1043332520, Restart, function() {
    RegisterLadder(1043330530, 1043330531, 1043331653);
});

$Event(1043332680, Restart, function() {
    WaitFor(EventFlag(1043338600));
    CreateAssetfollowingSFX(1043331680, 100, 800);
});
