// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2050450000, 2050451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005251, 2050450200, 1103626240, 0, -1);
    InitializeCommonEvent(0, 90005300, 2050450390, 2050450390, 40900, 0, 0);
    InitializeCommonEvent(0, 90005570, 60864, 115, 2050451680, 2, 2, 0);
    $InitializeEvent(0, 2050450700, 2050450700, 4500, 4505, 2051459725, 2051452719, 2051459210, 90102, 55);
    $InitializeEvent(0, 2050450701, 2050451700, 206040, 1030030, 30, 0, 2051452719, 4505, 2051459725);
    InitializeCommonEvent(0, 90005750, 2050451701, 4350, 106650, 400666, 400666, 2051450800, 0);
    InitializeCommonEvent(0, 9006900, 2050450720, 2050451720, 2050459250); // Weapon Dupe
    DisableMapPart(2050451720);
    
    $InitializeEvent(0, 2050450702); // Disable Scarab AI until pots are broken
    $InitializeCommonEvent(0, 20000350, 2050451702, 2050451703, 2055550107, 2055550117, 2050450080, 2050451703); // Shrine Init
    InitializeCommonEvent(0, 90005300, 2050454704, 2050451704, 0, 0, 1);
});

$Event(2050450700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, animationId, range) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterTalkRange(chrEntityId, 17);
    GotoIf(S0, !EventFlag(eventFlagId2));
    GotoIf(L20, EventFlag(eventFlagId3));
S0:
    flag = EventFlag(eventFlagId2) && EventFlag(eventFlagId4);
    if (!flag) {
        WaitFor(flag);
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    Goto(L20);
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacterInvincibility(chrEntityId);
    WaitFixedTimeRealFrames(1);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, 2050452717, -1);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(eventFlagId5, ON);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    SetCharacterTalkRange(chrEntityId, range);
    Goto(L20);
L20:
    WaitFor(!EventFlag(eventFlagId2) || !EventFlag(eventFlagId4));
    RestartEvent();
});

$Event(2050450701, Restart, function(entityId, actionButtonParameterId, messageId, displayDistance, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    flag = !EventFlag(eventFlagId2)
        || !EventFlag(eventFlagId3)
        || (EventFlag(eventFlagId2) && EventFlag(eventFlagId4));
    if (!flag) {
        WaitFor(flag);
        RestartEvent();
    }
L0:
    WaitFor(
        ActionButtonInArea(actionButtonParameterId, entityId)
            || (EventFlag(eventFlagId2) && !EventFlag(eventFlagId4)));
    RestartIf(EventFlag(eventFlagId2) && !EventFlag(eventFlagId4));
    DisplayGenericDialog(messageId, PromptType.YESNO, NumberofOptions.NoButtons, 0, displayDistance);
    if (eventFlagId != 0) {
        SetEventFlagID(eventFlagId, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


$Event(2050450702, Restart, function() {
    EndIf(EventFlag(2050450390));
    DisableCharacterAI(2050450390);
    WaitFor(AssetDestroyed(2050451390) && AssetDestroyed(2050451391));
    EnableCharacterAI(2050450390);
});
