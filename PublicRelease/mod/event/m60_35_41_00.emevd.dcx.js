// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005525, 1035410612, 1035411612);
    InitializeCommonEvent(0, 90005525, 1035410611, 1035411611);
    InitializeCommonEvent(0, 90005620, 1035410570, 1035411570, 1035411571, 0, 1035412570, 1035412571, 1035412572);
    InitializeCommonEvent(0, 90005621, 1035410570, 1035411573);
    $InitializeEvent(0, 1035412610, 1035410610, 1035410610);
    $InitializeEvent(0, 1035412611, 1035410610, 1035410610);
    InitializeCommonEvent(0, 90005251, 1035410610, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035410610, 1035410610, 0, 0, 0);
    DisableHit(1035410001);
    DisableHit(1035410002);
    DisableHit(1035410003);
    DisableHit(1035410004);
    DisableHit(1035410005);
    DisableHit(1035410006);
    DisableHit(1035410007);
    DisableHit(1035410008);
    DisableHit(1035410009);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1035410200, 1035412200, 1065353216, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1035410201, 1035412200, 1065353216, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1035410202, 1035412200, 1065353216, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1035410203, 1035412203, 1065353216, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1035410204, 1035412203, 1065353216, 1073741824, 1705);
    InitializeCommonEvent(0, 90005261, 1035410205, 1035412203, 1065353216, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1035410206, 1035412203, 1065353216, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1035410340, 1035412340, 1065353216, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1035410350, 1035412350, 1065353216, 0, 1700);
});

$Event(1035412610, Restart, function(eventFlagId, chrEntityId) {
    EndIf(EventFlag(eventFlagId));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(chrEntityId);
    }
    WaitFor(EventFlag(1034432616));
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterImmortality(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
});

$Event(1035412611, Restart, function(eventFlagId, entityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(entityId, 20008, false, false, false);
    SetEventFlagID(eventFlagId, ON);
});


