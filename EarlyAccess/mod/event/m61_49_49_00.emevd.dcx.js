// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005391, 2049490200, 2049492200, 2049490200, 2049490210, 0);
    InitializeCommonEvent(1, 90005391, 2049490201, 2049492201, 2049490210, 2049490220, 0);
    InitializeEvent(0, 2049491000, 2049490201, 2049492201, 2049490210, 2049490220, 0, 2049490610);
    
    InitializeCommonEvent(2, 90005391, 2049490202, 2049492202, 2049490201, 2049490211, 0);
    InitializeCommonEvent(3, 90005391, 2049490203, 2049492203, 2049490211, 2049490221, 0);
    InitializeEvent(0, 2049491000, 2049490203, 2049492203, 2049490211, 2049490221, 0, 2049490620);
    
    InitializeCommonEvent(4, 90005391, 2049490204, 2049492204, 2049490202, 2049490212, 0);
    InitializeCommonEvent(5, 90005391, 2049490205, 2049492205, 2049490212, 2049490222, 0);
    InitializeEvent(0, 2049491000, 2049490205, 2049492205, 2049490212, 2049490222, 0, 2049490630);
});

$Event(2049491000, Restart, function(eventFlagId, eventFlagId2, entityId, chrEntityId, value, itemLotId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(1);
    if (Signed(value) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, entityId, 960, 601111);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, entityId, 960, 601110);
    }
L3:
    WaitFixedTimeSeconds(3);
    DisableCharacter(chrEntityId);
    EndIf(!PlayerIsInOwnWorld());
    if (Signed(itemLotId) != 0) {
        AwardItemsIncludingClients(itemLotId);
    }
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});
