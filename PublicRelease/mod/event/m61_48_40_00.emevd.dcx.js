// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2048402200, 2048400200, 2048402200, 2048402201);
    InitializeEvent(1, 2048402200, 2048400201, 2048402200, 2048402202);
    InitializeCommonEvent(0, 90005639, 2048400500, 2048401500, 2048401501, 2048401502, 1073741824);
    InitializeCommonEvent(0, 90005790, 0, 2048400180, 2048402181, 2048402182, 2048400700, 23, 2048402180, 2048402181, 0, 2045429295, 0, 0);
    InitializeCommonEvent(0, 90005791, 2048400180, 2048402181, 2048402182, 2048400700);
    InitializeCommonEvent(0, 90005792, 2048400180, 2048402181, 2048402182, 2048400700, 0, 0);
    InitializeCommonEvent(0, 90005793, 2048400180, 2048402181, 2048402182, 2048400700, 2048402180, 2048402182, 0);
    InitializeCommonEvent(0, 90005774, 2048400180, 116401, 400645);
    InitializeCommonEvent(0, 90005757, 2048400710, 2048400711, 4385, 4955, 2045422710, 4383);
    InitializeCommonEvent(0, 90005759, 2045429280, 4385, 4965, 2048400710, 4955, 2045429295, 4950, 4956, 2045429281, 2045429282, 4901, 1065353216, 2045429345, 1106247680);
    InitializeCommonEvent(0, 90005778, 2048412700, 4955, 400754, 2048400710);
    InitializeCommonEvent(0, 90005779, 2048400710, 4955, 20016, 4385, 4383);
    InitializeCommonEvent(0, 90005744, 2048400710, 2048419200, 2048419200, 20015);
    InitializeCommonEvent(0, 90005766, 2048402181, 2048400700, 1120403456, 2045429277, 4965);
    InitializeCommonEvent(0, 90005767, 2045429280, 4380, 4383, 2048400700, 4901, 2048400701, 2045429297);
    InitializeCommonEvent(0, 90005777, 2048400701, 4965, 4383, 2048402181);
    InitializeCommonEvent(0, 90005774, 2045429297, 116401, 400645);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005271, 2048400256, 0, -1);
    InitializeCommonEvent(0, 90005271, 2048400250, 0, -1);
    InitializeCommonEvent(0, 90005271, 2048400251, 0, -1);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005430, -2046567096);
    InitializeCommonEvent(0, 90005432, -2046567096, -2046565096);
    InitializeCommonEvent(0, 90005435, -2046567096, -2046565095, -2046565094, -2046565093, -2046565092);
    InitializeCommonEvent(0, 90005433, -2046567096, -2046565091, -2046565090, -2046565089);
    InitializeCommonEvent(0, 90005434, -2046567096, -2046565091, -2046565090, -2046565089);
    InitializeCommonEvent(0, 90005437, -2046567096, -2046565088, -2046565087);
    InitializeCommonEvent(0, 90005301, 2048400200, -2046567096, 2048400020, 1082130432, 0);
    //Anger of the Fell God Furnace Golem Instant Kill Initialize
    InitializeCommonEvent(0, 90005438, -2046567096);
});

$Event(2048402200, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 10);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X8_4, 900, 804308100, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X8_4, 900, 804308110, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X8_4, 900, 804308120, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X8_4, 900, 804308130, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X8_4, 900, 804308140, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X8_4, 900, 804308150, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X8_4, 900, 804308160, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X8_4, 900, 804308170, 0, 0, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            ShootBullet(X0_4, X8_4, 900, 804318100, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X8_4, 900, 804318110, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X8_4, 900, 804318120, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X8_4, 900, 804318130, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X8_4, 900, 804318140, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X8_4, 900, 804318150, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X8_4, 900, 804318160, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X8_4, 900, 804318170, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


