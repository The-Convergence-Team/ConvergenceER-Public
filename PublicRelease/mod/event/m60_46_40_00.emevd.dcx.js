// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1046400000, 1046401950, 0, 0, 0, 5);
    RegisterBonfire(1046400001, 1046401951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76418, 76401, 1046401981, 77400, 0, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    InitializeCommonEvent(0, 90005790, 0, 1046400180, 1046402181, 1046402182, 1046400701, 22, 1046402701, 1046402700, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1046400180, 1046402181, 1046402182, 1046400701);
    InitializeCommonEvent(0, 90005792, 1046400180, 1046402181, 1046402182, 1046400701, 1046400700, 0);
    InitializeCommonEvent(0, 90005793, 1046400180, 1046402181, 1046402182, 1046400701, 1046402701, 1046402182, 0);
    InitializeCommonEvent(0, 90005250, 1046400300, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400301, 1046402301, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400303, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400304, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005251, 1046400400, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005706, 1046400710, 930025, 0);
    InitializeCommonEvent(0, 90005631, 1046401640, 61011);
    InitializeEvent(0, 1046402501, 0); // Start seated
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1046400700, true);
    SetCharacterBackreadState(1046400710, true);
});

// Force sit anim and rotate cam on first spawn
$Event(1046402501, Restart, function() {
    EndIf(!EventFlag(60911) || EventFlag(1046400501) || !InArea(10000, 1046400985));
    SetCameraAngle(-15, 178);
    FadeToBlack(1, 0, true, 3)
    SetSpEffect(10000, 103012); // Fire Spur Me
    WaitFixedTimeSeconds(4);
    FadeToBlack(0, 3, false, 0.1)
    SetEventFlagID(1046400501, ON);
});


