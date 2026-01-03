// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1035440001, 1035441950, 0, 0, 0, 5);
    
    //Tutorial Handler: Invasion Multiplayer
    //InitializeEvent(0, 1035442650, 710680, 1680, 9124, 69240);
    
    InitializeEvent(0, 1035443700, 1053440700, 1035441701);
    InitializeEvent(0, 1035443701, 1053440700);
    InitializeCommonEvent(0, 90005704, 1053440700, 3181, 3180, 1035449201, 3);
    InitializeCommonEvent(0, 90005703, 1053440700, 3181, 3182, 1035449201, 3181, 3180, 3184, -1);
    InitializeCommonEvent(0, 90005702, 1053440700, 3183, 3180, 3184);
    InitializeCommonEvent(0, 90005740, 1035442705, 1035442706, 1035442707, 1053440700, 700, 1035441700, 700, 1045220557, 90201, -1, -1, 1066192077);
    InitializeCommonEvent(0, 90005741, 1035442708, 1035442709, 1035442707, 1053440700, 90203, 0, -1, -1, 1056964608);
    
    InitializeEvent(0, 1035443702, 0); // Epic bloodflame enterance
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1053440700, true);
    InitializeCommonEvent(0, 90005261, 1035440200, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440201, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440202, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440203, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440204, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440210, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005211, 1035440220, 30000, 20000, 1035442220, 1092616192, 0, 0, 0, 0, 0);
});

//Tutorial Handler: Invasion Multiplayer
$Event(1035442650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(1035443700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3180)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3188)) {
        if (!EventFlag(3189)) {
            if (!EventFlag(3190)) {
                DisableCharacter(X0_4);
                SetCharacterBackreadState(X0_4, true);
                DisableAsset(X4_4);
                WaitFor(EventFlag(3188) || EventFlag(3189) || EventFlag(3190));
                RestartEvent();
            }
        }
    }
L5:
    EnableAsset(X4_4);
    GotoIf(L1, EventFlag(3180));
    GotoIf(L2, EventFlag(3181));
    GotoIf(L3, EventFlag(3182));
    GotoIf(L4, EventFlag(3183));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3188) || EventFlag(3189) || EventFlag(3190)));
    RestartEvent();
});

$Event(1035443701, Restart, function(X0_4) {
    EndIf(EventFlag(3181));
    EndIf(EventFlag(3183));
    WaitFor(CharacterHasSpEffect(X0_4, 90) || EventFlag(3181));
    EndIf(CharacterHasSpEffect(X0_4, 90));
    ForceAnimationPlayback(X0_4, 90205, false, false, false);
    EndEvent();
});


$Event(1035443702, Default, function() {
    EndIf(!EventFlag(60923) || EventFlag(1035440920) || !InArea(10000, 1035440970));
    
    ForceAnimationPlayback(10000, 90007, false, false, false);
    WaitFixedTimeFrames(80);
    ForceAnimationPlayback(10000, 63010, false, false, false);
    WaitFixedTimeFrames(30);
    
    PlaySE(10000, SoundType.CharacterMotion, 355001000);  
    SetSpEffect(10000, 9000010);
    PlaySE(10000, SoundType.SFX, 635507);
    SetSpEffect(10000, 9000011);
    WaitFixedTimeFrames(60);
    
    ClearSpEffect(10000, 9000010);
    WaitFixedTimeFrames(28);
    ClearSpEffect(10000, 9000011);
    
    SetEventFlagID(1035440920, ON);
});
