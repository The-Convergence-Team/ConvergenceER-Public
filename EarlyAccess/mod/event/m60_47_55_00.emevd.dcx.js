// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 1047550209, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550210, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550220, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550200, 1047552211, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550211, 1047552211, 1065353216, 0, -1);
    InitializeCommonEvent(0, 20000347, 1047551801, 1047553001);
    InitializeEvent(0, 1047550001, 0);
    InitializeEvent(0, 1047550002, 0);
    InitializeEvent(0, 1047550003, 0);
});

$Event(1047550001, Default, function() {
    RegisterLadder(1047550400, 1047550401, 1047551401);
});

//Portal Blockade Events
$Event(1047550002, Restart, function() {
    if (EventFlag(1047550102)){
        DisableAsset(1047551412);
        DisableAsset(1047551411);
        DeleteMapSFX(1047551413, true);
        DisableCharacter(1047552211);
    }
    EndIf(EventFlag(1047550102));
    EnableAsset(1047551412);
    EnableAsset(1047551411);
    WaitFor(CharacterDead(1047552211));
    SetEventFlagID(1047550102, ON)
    DisableAsset(1047551412);
    DisableAsset(1047551411);
    DeleteMapSFX(1047551413, true);
    EndEvent();
});

$Event(1047550003, Restart, function() {
    if (EventFlag(1047550103)){
        DisableAsset(1047551421);
        DisableAsset(1047551422);
        DeleteMapSFX(1047551423, true);
        DisableCharacter(1047552212);
    }
    EndIf(EventFlag(1047550103));
    EnableAsset(1047551421);
    EnableAsset(1047551422);
    WaitFor(CharacterDead(1047552212));
    SetEventFlagID(1047550103, ON)
    DisableAsset(1047551421);
    DisableAsset(1047551422);
    DeleteMapSFX(1047551423, true);
    EndEvent();
});
