// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(1, 1043362210, 1043360213, 1106247680, 430008500);
    InitializeEvent(2, 1043362210, 1043360214, 1106247680, 430008501);
    InitializeEvent(3, 1043362210, 1043360215, 1106247680, 430008502);
    InitializeEvent(5, 1043362210, 1043360217, 1106247680, 430008503);
    InitializeEvent(6, 1043362210, 1043360218, 1106247680, 430008501);
    InitializeEvent(7, 1043362210, 1043360219, 1106247680, 430008502);
    InitializeCommonEvent(0, 90005633, 580300, 580000, 1043360220, 30015, 20015, 1043361220, 1043361610);
    InitializeEvent(0, 1043362340, 1043360800, 1043362340, 1043362360);
    InitializeEvent(1, 1043362340, 1043360800, 1043362341, 1043362361);
    InitializeEvent(2, 1043362340, 1043360800, 1043362342, 1043362362);
    InitializeEvent(3, 1043362340, 1043360800, 1043362343, 1043362363);
    InitializeEvent(4, 1043362340, 1043360800, 1043362344, 1043362364);
    InitializeEvent(5, 1043362340, 1043360800, 1043362345, 1043362365);
    InitializeEvent(6, 1043362340, 1043360800, 1043362346, 1043362366);
    InitializeEvent(7, 1043362340, 1043360800, 1043362347, 1043362367);
    InitializeEvent(8, 1043362340, 1043360800, 1043362348, 1043362368);
    InitializeEvent(9, 1043362340, 1043360800, 1043362349, 1043362369);
    InitializeEvent(10, 1043362340, 1043360800, 1043362350, 1043362370);
    InitializeEvent(11, 1043362340, 1043360800, 1043362351, 1043362371);
    InitializeEvent(12, 1043362340, 1043360800, 1043362352, 1043362372);
    InitializeCommonEvent(0, 90005861, 1043360800, 0, 1043360800, 1, 30110, 30060, 0);
    InitializeCommonEvent(0, 90005870, 1043360800, 904500600, 25);
    InitializeEvent(0, 1043362511, 0);
    //InitializeEvent(0, 1043362510, 1043361510, 1043362510, 1043362500, 1043363600);
    InitializeEvent(0, 1043362380, 0);
    InitializeCommonEvent(0, 90005781, 1043360800, 1043362700, 1043362701, 1043360700);
    InitializeCommonEvent(0, 90005780, 1043360800, 1043362700, 1043362701, 1043360700, 20, 1043362700, 1043369200, 0, 0);
    InitializeCommonEvent(0, 90005783, 1043360800, 1043362700, 1043362701, 1043360700, 1043362700, 1043362100, 0);
    InitializeEvent(0, 1043363700, 0);
    InitializeEvent(0, 1043363701, 1043360700);
    InitializeEvent(0, 1043363702, 1043360700);
    InitializeEvent(0, 1043363704, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043360700, true);
    InitializeCommonEvent(0, 90005251, 1043360212, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360213, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360214, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360215, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360216, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360217, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360218, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360219, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1043360200, 1084227584, 0, -1);
});

$Event(1043362210, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitRandomTimeSeconds(4, 18);
    if (EntityInRadiusOfEntity(10000, X0_4, X4_4, 1)
        && CharacterDead(X0_4, NotEqual, 1)
        && CharacterAIState(X0_4, AIStateType.Normal)) {
        PlaySE(X0_4, SoundType.CharacterMotion, X8_4);
        WaitRandomTimeSeconds(4, 18);
    }
L0:
    RestartEvent();
});

$Event(1043362220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (EventFlag(X8_4)) {
        DisableAsset(X4_4);
        DisableAsset(X24_4);
        DisableAssetTreasure(X4_4);
        DisableCharacter(X0_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    DisableAsset(X24_4);
    DisableAssetTreasure(X4_4);
    SetSpEffect(X0_4, 10124);
    DisableCharacterInvincibility(X0_4);
    WaitFor(
        PlayerIsInOwnWorld() && EventFlag(X12_4) && EntityInRadiusOfEntity(X0_4, 10000, X16_4, 1));
    EnableAsset(X4_4);
    EnableAsset(X24_4);
    EnableAssetTreasure(X4_4);
    ClearSpEffect(X0_4, 10124);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    EndEvent();
});

$Event(1043362221, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X4_4));
    if (PlayerIsInOwnWorld()) {
        WaitFor(
            CharacterType(10000, TargetType.Alive)
                && EntityInRadiusOfEntity(X0_4, 10000, 7, 1)
                && EventFlag(X8_4));
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
        ForceAnimationPlayback(X16_4, 1, false, false, false);
        WaitFixedTimeSeconds(3.8);
    }
L0:
    DisableCharacter(X0_4);
    DisableAsset(X16_4);
    SetEventFlagID(X4_4, ON);
    EndEvent();
});

$Event(1043362340, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(1043360340)) {
        EnableCharacter(X0_4);
        EnableCharacterCollision(X0_4);
        SetNetworkconnectedEventFlagID(1043362379, ON);
        EndEvent();
    }
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 30005, true, false, false);
    WaitFor(
        !EventFlag(1043360340)
            && InArea(10000, X4_4)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 20005, true, false, false);
    SetNetworkconnectedEventFlagID(1043360340, ON);
    EndEvent();
});

$Event(1043362380, Restart, function() {
    if (EventFlag(1043360380)) {
        DisableCharacter(1043365340);
        DisableCharacterCollision(1043365340);
        DisableCharacterAI(1043365340);
        DisableCharacterGravity(1043365340);
        ReproduceAssetDestruction(1043361300, 1);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1043362379) || EventFlag(1043360341));
    DisableCharacter(1043365340);
    DisableCharacterCollision(1043365340);
    DisableCharacterAI(1043365340);
    DisableCharacterGravity(1043365340);
    ReproduceAssetDestruction(1043361300, 1);
    SetEventFlagID(1043360380, ON);
});

$Event(1043362510, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            if (!EventFlag(X8_4)) {
                WaitFor(
                    ObjActEventFlag(X12_4)
                        || HasMultiplayerState(MultiplayerState.MultiplayerPending)
                        || HasMultiplayerState(MultiplayerState.Multiplayer));
                if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
                    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                        SetEventFlagID(X8_4, ON);
                        WaitFixedTimeSeconds(1.3);
                        WaitFixedTimeSeconds(0.9);
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L20, !InArea(10000, X4_4));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        FadeToBlack(0, 0, true, -1);
                        DisplayGenericDialog(20700, PromptType.YESNO, NumberofOptions.OneButton, 0, 5);
                        WaitFixedTimeSeconds(0.7);
                        SetSpEffect(10000, 4090);
                        PlaySE(10000, SoundType.CharacterMotion, 8700);
                        WaitFixedTimeSeconds(2.7);
                        DisableCharacter(10000);
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.Multiplayer));
                        SetSpEffect(10000, 4091);
                        FadeToBlack(0, 0, false, -1);
                        SetEventFlagID(32080650, ON);
                        WarpPlayer(32, 8, 0, 0, 32082650, 60);
                        SaveRequest();
                        SetPlayerRespawnPoint(32082650);
                        EndEvent();
L20:
                        SetSpEffect(10000, 4091);
                        EnableCharacter(10000);
                        FadeToBlack(0, 0, false, -1);
                        WaitFixedTimeSeconds(4.4);
L19:
                        ForceAnimationPlayback(X0_4, 2, false, true, false);
                        SetEventFlagID(X8_4, OFF);
                        EnableObjAct(X0_4, -1);
                        RestartEvent();
                    }
                }
            }
L0:
            ReproduceAssetAnimation(X0_4, 2);
            SetEventFlagID(X8_4, OFF);
            EnableObjAct(X0_4, -1);
            RestartEvent();
L3:
            DisableObjAct(X0_4, -1);
            SetSpEffect(10000, 4091);
            EnableCharacter(10000);
            ForceAnimationPlayback(10000, 60131, false, false, false);
            FadeToBlack(0, 0, false, -1);
L2:
            DisableObjAct(X0_4, -1);
            ForceAnimationPlayback(X0_4, 2, false, true, false);
            SetEventFlagID(X8_4, OFF);
        }
    }
L1:
    DisableObjAct(X0_4, -1);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && !HasMultiplayerState(MultiplayerState.Multiplayer));
    EnableObjAct(X0_4, -1);
    RestartEvent();
});

$Event(1043362511, Restart, function() {
    CreateAssetfollowingSFX(1043361510, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1043361510);
    RotateCharacter(10000, 1043361510, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 37, 51, 0, 1037512651, 60);
    RestartEvent();
});

$Event(1043362651, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X8_4) && !EventFlag(X4_4) && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X12_4, 1);
});

$Event(1043362652, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(EventFlag(X4_4));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, X8_4, 1);
});

$Event(1043362653, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 36, 0)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9116));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    ShowTutorialPopup(X12_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9116, X4_4, 1);
});

$Event(1043362654, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 43, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(1043363700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043359258));
    EndIf(EventFlag(1043360800));
    WaitFor(HasDamageType(1043360800, 10000, DamageType.Unspecified));
    SetEventFlagID(1043359258, ON);
    EndEvent();
});

$Event(1043363701, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    if (EventFlag(1043360800)) {
        SetCharacterBackreadState(X0_4, true);
    }
    EndEvent();
});

$Event(1043363702, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    if (!(EventFlag(3625) || EventFlag(3626))) {
        SetEventFlagID(1043369200, OFF);
        EndEvent();
    }
    WaitFor(
        EntityInRadiusOfEntity(X0_4, 20000, 10, 1) && EventFlag(1043360340) && EventFlag(1043359256));
    EndIf(!EventFlag(3620));
    EndIf(EventFlag(1043360800));
    SetEventFlagID(1043369200, ON);
    EndEvent();
});

$Event(1043363703, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    EndIf(!(EventFlag(3625) || EventFlag(3626)));
    WaitFor(
        (!EntityInRadiusOfEntity(10000, X4_4, 80, 1) && EventFlag(1043362700))
            || EventFlag(1043360800));
    EndIf(EventFlag(1043360800));
    SendNPCSummonHome(X0_4);
    SetEventFlagID(1043369200, OFF);
    EndEvent();
});

$Event(1043363704, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    EndIf(!(EventFlag(3625) || EventFlag(3626)));
    WaitFor(EventFlag(1043360800));
    if (EventFlag(1043362700)) {
        SetEventFlagID(1043369201, ON);
    }
    SetEventFlagID(1043369200, OFF);
    EndEvent();
});
