// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2050400200, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400201, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400202, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400203, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400204, 2050402200, 0, 0);
    $InitializeEvent(0, 2050402200, 2050400201);
    $InitializeEvent(0, 2050402210, 2050400201, 2050400202);
    $InitializeEvent(1, 2050402210, 2050400202, 2050400203);
    $InitializeEvent(2, 2050402210, 2050400203, 2050400204);
    $InitializeEvent(3, 2050402210, 2050400204, 2050400205);
    InitializeCommonEvent(0, 90005261, 2050400210, 2050402210, 1092616192, 0, 1703);
    
    //elevator
    $InitializeEvent(0, 2050402205);
    //Deactive Tower when in Region
    $InitializeEvent(0, 2050402206);
});

$Event(2050402200, Restart, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    sp = !CharacterHasSpEffect(chrEntityId, 20011075);
    SetSpEffect(chrEntityId, 20011073);
});

$Event(2050402205, Restart, function() {
    DisableHit(2050401800);
    DisableHit(2050401801);
    DisableHit(2050401802);
    DisableHit(2050401803);
    DisableHit(2050401804);
    DisableHit(2050401805);
    DisableHit(2050401806);
});

$Event(2050402206, Restart, function() {
    WaitFor(InArea(10000, 2050402215));
    DisableAsset(2050401807);
    WaitFor(!InArea(10000, 2050402215));
    EnableAsset(2050401807);
    RestartEvent();
});

$Event(2050402210, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 20011075));
    ClearSpEffect(chrEntityId, 20011076);
    WaitFixedTimeSeconds(10);
    SetSpEffect(chrEntityId2, 20011073);
});
