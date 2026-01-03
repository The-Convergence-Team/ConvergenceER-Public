// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1038470000, 1038471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005400, 1038470340, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005401, 0, 1038470340);
    // Make enemies neutral to nox class starters
    InitializeCommonEvent(0, 98005301, 60917, 1038470251);
    InitializeCommonEvent(1, 98005301, 60917, 1038470252);
    InitializeCommonEvent(2, 98005301, 60917, 1038470253);
    InitializeCommonEvent(3, 98005301, 60917, 1038470254);
    InitializeCommonEvent(4, 98005301, 60917, 1038470255);
    InitializeEvent(0, 1038470350, 0); // Nox gives item
    InitializeCommonEvent(0, 20000343, 1038470251, 1038470251, 1038470050); // Nox One time Kill
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038470700, true);
    InitializeCommonEvent(0, 90005251, 1038470250, 1106247680, 0, 1700);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005451, 1038470400, 1038476420);
    InitializeCommonEvent(0, 90005452, 1038470400, 1238470400);
    InitializeCommonEvent(0, 90005454, 1038470400, 1238472400, 1238470400);
    InitializeCommonEvent(0, 90005458, 1038470400, 1038471401);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471420, 101, 0);
    InitializeCommonEvent(1, 90005453, 1038470400, 1038471421, 102, 1036831949);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471422, 103, 1045220557);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471423, 104, 1050253722);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471424, 105, 1053609165);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471425, 106, 1056964608);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471426, 107, 1058642330);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471427, 108, 1060320051);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471428, 109, 1061997773);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471429, 110, 1063675494);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471430, 111, 1065353216);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471436, 117, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471437, 118, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471438, 119, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471439, 120, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471440, 121, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471441, 122, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471442, 123, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471443, 124, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471444, 125, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471445, 126, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471446, 127, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471447, 128, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471452, 133, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471453, 134, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471454, 135, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471455, 136, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471456, 137, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471457, 138, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471458, 139, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471459, 140, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471460, 141, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471461, 142, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471468, 149, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471469, 150, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471470, 151, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471471, 152, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471472, 153, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471473, 154, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471474, 155, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471475, 156, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471476, 157, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471477, 158, 0);
    InitializeCommonEvent(0, 90005453, 1038470400, 1038471478, 159, 0);
    InitializeCommonEvent(0, 90005456, 1038470400, 1038471410, 1038471418, 1238470400);
    InitializeCommonEvent(0, 9006900, 1038470400, 1038471418, 1038479200); // Weapon Duplication at the Walking Masoleum
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005450, 1038470400, 1038471400, 1038471410, 1038471418);
});

$Event(1038470350, Default, function() {
    EndIf(EventFlag(1038477050) || !EventFlag(60917));
    
    madeEnemy |= CharacterTargetedBy(1038470251, 10000);
    WaitFor(madeEnemy || ActionButtonInArea(6255, 1038470251));
    EndIf(madeEnemy.Passed);
    AwardItemLot(1038470050);
});
