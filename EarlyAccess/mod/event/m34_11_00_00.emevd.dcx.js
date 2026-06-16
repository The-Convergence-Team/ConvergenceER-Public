// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(34110000, 34111950, 0, 0, 0, 5);
    RegisterBonfire(34110001, 34111951, 0, 0, 0, 5);
    RegisterBonfire(34110002, 34111952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005501, 34110510, 34111510, 1, 34111510, 34111511, 34111512, 34110511);
    InitializeCommonEvent(0, 90005501, 34110515, 34111515, 0, 34111515, 34111516, 34111517, 34110516);
    InitializeCommonEvent(0, 90005501, 34110520, 34111520, 0, 34111520, 34111521, 34111522, 34110521);
    InitializeCommonEvent(0, 90005508, 34110525, 34111525, 0, 34111525, 34111526, 34111527, 34110526);
    InitializeEvent(0, 34112510, 0);
    
    //Ladders
    InitializeEvent(0, 34112580, 0);
    
    //Wooden Elevator
  
    InitializeCommonEvent(0, 90005500, 34110555, 34111555, 0, 34111555, 34111556, 34113556, 34111557, 34113557, 34112556, 34112557, 34110556, 34112557, 0);
    InitializeCommonEvent(0, 90005501, 34110555, 34111555, 0, 34111555, 34111556, 34111557, 34110556);
    InitializeCommonEvent(0, 90005502, 34110514, 34112556, 34112557);
    
    InitializeCommonEvent(0, 900005610, 34111680, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 34111681, 100, 800, 0);
    InitializeCommonEvent(0, 90005300, 34110280, 34110280, 34110400, 0, 0);
    InitializeEvent(0, 34112400, 0);
    InitializeEvent(0, 34112410, 0);
    InitializeEvent(0, 34112420, 0);
    InitializeEvent(0, 34112430, 0);
    InitializeEvent(0, 34112440, 34112440, 34112450);
    InitializeEvent(1, 34112440, 34112441, 34112451);
    InitializeEvent(2, 34112440, 34112442, 34112452);
    InitializeEvent(3, 34112440, 34112443, 34112453);
    InitializeEvent(4, 34112440, 34112444, 34112454);
    InitializeEvent(5, 34112440, 34112445, 34112455);
    InitializeEvent(6, 34112440, 34112446, 34112456);
    InitializeEvent(7, 34112440, 34112447, 34112457);
    InitializeEvent(0, 34112448, 0);
    InitializeEvent(0, 34112449, 0);
    InitializeEvent(0, 34112459, 0);
    InitializeCommonEvent(0, 90005300, 34110710, 34110710, 34110700, 0, 0);
    InitializeEvent(0, 34112460, 0);
    InitializeEvent(0, 34112465, 0);
    InitializeCommonEvent(0, 90005300, 34110711, 34110711, 34110710, 0, 0);
    InitializeEvent(0, 34112475, 34112485, 34110710, 34112411);
    InitializeEvent(1, 34112475, 34112486, 34110710, 34112421);
    InitializeEvent(2, 34112475, 34112487, 34110710, 34112431);
    InitializeEvent(3, 34112475, 34112488, 34110711, 34112466);
    InitializeCommonEvent(0, 90005706, 34110700, 930023, 0);
    
    //Godskin Matriarch Events
    //Defeat Event
    InitializeEvent(0, 34112800, 0);
    //Activation Events
    InitializeEvent(0, 34112810, 0);
    //Phase Transition
    InitializeEvent(0, 34112811, 0);
    //Fogwall and Music
    InitializeEvent(0, 34112849, 0);
    //Something
    InitializeCommonEvent(0, 90005646, 34110800, 34112840, 34112841, 34111840, 1049410300, 2699580);
    
    //Snake Summon
    //InitializeEvent(0, 34112812, 0);
    
    //Sound Dummies
    InitializeEvent(0, 34112813, 34110810);
    InitializeEvent(1, 34112813, 34110811);
    InitializeEvent(2, 34112813, 34110812);
    InitializeEvent(3, 34112813, 34110813);
    InitializeEvent(4, 34112813, 34110814);
    InitializeEvent(5, 34112813, 34110815);
    InitializeEvent(6, 34112813, 34110816);
    InitializeEvent(7, 34112813, 34110817);
    
    // Killbox Fixer in case of CE tp
    InitializeEvent(0, 34112950, 0);
    
    // Honse
    InitializeEvent(0, 34112960, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 34112150, 0);
    InitializeEvent(0, 34112151, 0);
    SetCharacterBackreadState(34110700, true);
    InitializeEvent(0, 34112519, 0);
    InitializeCommonEvent(0, 90005271, 34110200, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110201, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110202, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110205, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110206, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110207, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110210, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110211, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110215, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110216, 0, -1);
    InitializeCommonEvent(0, 90005271, 34110217, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110230, 34112230, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110231, 34112230, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110232, 34112230, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110235, 34112235, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110236, 34112235, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110237, 34112235, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110240, 34112465, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110241, 34112465, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110245, 34112245, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110246, 34112245, 0, -1);
    InitializeCommonEvent(0, 90005250, 34110247, 34112245, 0, -1);
    InitializeCommonEvent(0, 90005210, 34110400, 30004, 20004, 34112200, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110401, 30004, 20004, 34112200, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110402, 30004, 20004, 34112400, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110403, 30004, 20004, 34112400, 1097859072, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110405, 30004, 20004, 34112405, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110406, 30004, 20004, 34112405, 1101004800, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110407, 30004, 20004, 34112405, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110408, 30004, 20004, 34112405, 1101004800, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110409, 30004, 20004, 34112405, 1106247680, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110410, 30004, 20004, 34112409, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110411, 30004, 20004, 34112410, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110412, 30004, 20004, 34112410, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110413, 30004, 20004, 34112410, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110415, 30004, 20004, 34112441, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110416, 30004, 20004, 34112441, 1097859072, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110417, 30004, 20004, 34112441, 1097859072, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110418, 30004, 20004, 34112442, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110419, 30004, 20004, 34112443, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005210, 34110420, 30004, 20004, 34112443, 1101004800, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110421, 30004, 20004, 34112445, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110422, 30004, 20004, 34112445, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110423, 30004, 20004, 34112445, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110424, 30004, 20004, 34112445, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110425, 30004, 20004, 34112445, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110450, 30006, 20006, 34112465, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110451, 30006, 20006, 34112475, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34110452, 30006, 20006, 34112475, 0, 0, 0, 0, 0);
});

$Event(34112150, Restart, function() {
    if (!EventFlag(370)) {
        EnableCharacter(34115150);
        EnableCharacterCollision(34115150);
        DisableCharacter(34115160);
        DisableCharacterCollision(34115160);
        EnableAsset(34116150);
        DisableAsset(34116160);
        EnableHit(34114150);
        EnableHit(34114151);
        EnableHit(34114152);
        EnableHit(34114153);
        onlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(9720, 34111150);
        WaitFor(onlineAct);
        if (!(PlayerIsInOwnWorld() && PlayerHasItem(ItemType.Goods, 8111))) {
            WaitFixedTimeSeconds(0.1);
            if (PlayerIsInOwnWorld()) {
                DisplayGenericDialog(20040, PromptType.OKCANCEL, NumberofOptions.OneButton, 34111150, 3);
            }
            RestartEvent();
        }
L1:
        SetNetworkconnectedEventFlagID(370, ON);
        SetEventFlagID(9021, ON);
        if (PlayerIsInOwnWorld()) {
            PlayCutsceneToPlayer(34110000, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayerAndWarp(34110000, CutscenePlayMode.Skippable, 34112505, 34110000, 10000, 0, false);
        }
        WaitFixedTimeRealFrames(1);
        ReproduceAssetAnimation(34111505, 1);
        RemoveItemFromPlayer(ItemType.Goods, 8111, 1);
        DisableCharacter(34115150);
        DisableCharacterCollision(34115150);
        EnableCharacter(34115160);
        EnableCharacterCollision(34115160);
        DisableAsset(34116150);
        EnableAsset(34116160);
        DisableHit(34114150);
        DisableHit(34114151);
        DisableHit(34114152);
        DisableHit(34114153);
        if (EventFlag(34110510)) {
            DisableObjAct(34111512, 27002);
        }
        if (EventFlag(34110510)) {
            ForceAnimationPlayback(34111610, 10, false, false, false);
        }
        if (EventFlag(34110515)) {
            ForceAnimationPlayback(34111615, 10, false, false, false);
        }
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L0:
    DisableCharacter(34115150);
    DisableCharacterCollision(34115150);
    EnableCharacter(34115160);
    EnableCharacterCollision(34115160);
    DisableAsset(34116150);
    EnableAsset(34116160);
    DisableHit(34114150);
    DisableHit(34114151);
    DisableHit(34114152);
    DisableHit(34114153);
    onlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(9721, 34111150);
    WaitFor(onlineAct);
    SetNetworkconnectedEventFlagID(370, OFF);
    EnableAsset(34116150);
    SetEventFlagID(9021, ON);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayer(34110001, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayerAndWarp(34110001, CutscenePlayMode.Skippable, 34112505, 34110000, 10000, 0, false);
    }
    WaitFixedTimeRealFrames(1);
    ReproduceAssetAnimation(34111505, 0);
    SetEventFlagID(34112155, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8111, 34112155, 1);
    EnableCharacter(34115150);
    EnableCharacterCollision(34115150);
    DisableCharacter(34115160);
    DisableCharacterCollision(34115160);
    EnableAsset(34116150);
    DisableAsset(34116160);
    EnableHit(34114150);
    EnableHit(34114151);
    EnableHit(34114152);
    EnableHit(34114153);
    if (EventFlag(34110510)) {
        EnableObjAct(34111512, 27002);
    }
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(34112151, Default, function() {
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9730, 34111160));
    SetEventFlagID(9021, ON);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(34110010, CutscenePlayMode.Skippable, 34112160, 34110000, 10000, 0, false);
    } else {
        PlayCutsceneToPlayerAndWarp(34110010, CutscenePlayMode.Skippable, 34112160, 34110000, 10000, 0, false);
    }
    WaitFixedTimeRealFrames(1);
    SetCameraAngle(-0.24, -104.95);
    SetEventFlagID(34110520, ON);
    RestartEvent();
});

$Event(34112152, Restart, function() {
    WaitFor(!EventFlag(34110520));
    ReproduceAssetAnimation(34111520, 10);
});

$Event(34112510, Default, function() {
    InitializeEvent(0, 34112900, 34110510, 34111510, 1, 34111510, 34111511, 34113511, 34111512, 34113512, 34112511, 34112512, 34110511, 34112512, 0);
    InitializeCommonEvent(0, 90005500, 34110515, 34111515, 0, 34111515, 34111516, 34113516, 34111517, 34113517, 34112516, 34112517, 34110516, 34112517, 0);
    InitializeEvent(0, 34112910, 34110520, 34111520, 0, 34111520, 0, 0, 0, 0, 34112521, 34112522, 34110521, 0, 0);
    InitializeCommonEvent(0, 90005507, 34110525, 34111525, 0, 34111525, 34111526, 34112528, 34111527, 34112529, 34112526, 34112527, 34110526, 34112527, 0);
});

$Event(34112519, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(InArea(10000, 34112152));
    SetEventFlagID(34110520, ON);
    SetThisEventSlot(ON);
});

//Ladders
$Event(34112580, Restart, function() {
    RegisterLadder(34110530, 34110531, 34111530);
    RegisterLadder(34110532, 34110533, 34111532);
    RegisterLadder(34110534, 34110535, 34111533);
    RegisterLadder(34110536, 34110537, 34111534);
    RegisterLadder(34110538, 34110539, 34111535);
    RegisterLadder(34110540, 34110541, 34111536);
});

$Event(34112900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    if (!(((EventFlag(X0_4) && EventFlag(X4_4)) || (!EventFlag(X0_4) && !EventFlag(X4_4)))
        && EventFlag(X40_4))) {
        if (EventFlag(X4_4)) {
            if (PlayerIsInOwnWorld()) {
                if (EventFlag(370)) {
                    DisableObjAct(X24_4, -1);
                } else {
                    EnableObjAct(X24_4, -1);
                }
                DisableObjAct(X16_4, -1);
            }
            obj = ObjActEventFlag(X28_4);
            flag = !EventFlag(X0_4);
            areaFlag &= InArea(10000, X32_4);
            if (X48_4 != 0) {
                areaFlag &= EventFlag(X48_4);
            }
            WaitFor((obj || flag || areaFlag) && !EventFlag(370));
            if (PlayerIsInOwnWorld()) {
                DisableObjAct(X24_4, -1);
            }
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(X40_4, ON);
                SetNetworkconnectedEventFlagID(X0_4, OFF);
            }
            SetEventFlagID(X4_4, OFF);
            if (!obj.Passed) {
                GotoIf(L1, EventFlag(X44_4));
                GotoIf(S9, X8_4 == 10);
                GotoIf(S8, X8_4 == 9);
                GotoIf(S7, X8_4 == 8);
                GotoIf(S6, X8_4 == 7);
                GotoIf(S5, X8_4 == 6);
                GotoIf(S4, X8_4 == 5);
                GotoIf(S3, X8_4 == 4);
                GotoIf(S2, X8_4 == 3);
                GotoIf(S1, X8_4 == 2);
                GotoIf(S0, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 21, false, true, true);
                Goto(L2);
S0:
                ForceAnimationPlayback(X12_4, 1000021, false, true, true);
                Goto(L2);
S1:
                ForceAnimationPlayback(X12_4, 2000021, false, true, true);
                Goto(L2);
S2:
                ForceAnimationPlayback(X12_4, 3000021, false, true, true);
                Goto(L2);
S3:
                ForceAnimationPlayback(X12_4, 4000021, false, true, true);
                Goto(L2);
S4:
                ForceAnimationPlayback(X12_4, 5000021, false, true, true);
                Goto(L2);
S5:
                ForceAnimationPlayback(X12_4, 6000021, false, true, true);
                Goto(L2);
S6:
                ForceAnimationPlayback(X12_4, 7000021, false, true, true);
                Goto(L2);
S7:
                ForceAnimationPlayback(X12_4, 8000021, false, true, true);
                Goto(L2);
S8:
                ForceAnimationPlayback(X12_4, 9000021, false, true, true);
                Goto(L2);
S9:
                ForceAnimationPlayback(X12_4, 10000021, false, true, true);
            } else {
L1:
                SetNetworkconnectedEventFlagID(X44_4, ON);
                WaitFixedTimeSeconds(2);
                GotoIf(S19, X8_4 == 10);
                GotoIf(S18, X8_4 == 9);
                GotoIf(S17, X8_4 == 8);
                GotoIf(S16, X8_4 == 7);
                GotoIf(S15, X8_4 == 6);
                GotoIf(S14, X8_4 == 5);
                GotoIf(S13, X8_4 == 4);
                GotoIf(S12, X8_4 == 3);
                GotoIf(S11, X8_4 == 2);
                GotoIf(S10, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 21, false, true, true);
                Goto(L11);
S10:
                ForceAnimationPlayback(X12_4, 1000021, false, true, true);
                Goto(L11);
S11:
                ForceAnimationPlayback(X12_4, 2000021, false, true, true);
                Goto(L11);
S12:
                ForceAnimationPlayback(X12_4, 3000021, false, true, true);
                Goto(L11);
S13:
                ForceAnimationPlayback(X12_4, 4000021, false, true, true);
                Goto(L11);
S14:
                ForceAnimationPlayback(X12_4, 5000021, false, true, true);
                Goto(L11);
S15:
                ForceAnimationPlayback(X12_4, 6000021, false, true, true);
                Goto(L11);
S16:
                ForceAnimationPlayback(X12_4, 7000021, false, true, true);
                Goto(L11);
S17:
                ForceAnimationPlayback(X12_4, 8000021, false, true, true);
                Goto(L11);
S18:
                ForceAnimationPlayback(X12_4, 9000021, false, true, true);
                Goto(L11);
S19:
                ForceAnimationPlayback(X12_4, 10000021, false, true, true);
L11:
                ForceAnimationPlayback(X24_4, 3, false, false, true);
                SetNetworkconnectedEventFlagID(X44_4, OFF);
            }
L2:
            WaitFor(
                AssetBackread(X12_4, Equal, 1) && (!AllPlayersInArea(X36_4) || EventFlag(X0_4)));
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(X40_4, OFF);
                GotoIf(S29, X8_4 == 10);
                GotoIf(S28, X8_4 == 9);
                GotoIf(S27, X8_4 == 8);
                GotoIf(S26, X8_4 == 7);
                GotoIf(S25, X8_4 == 6);
                GotoIf(S24, X8_4 == 5);
                GotoIf(S23, X8_4 == 4);
                GotoIf(S22, X8_4 == 3);
                GotoIf(S21, X8_4 == 2);
                GotoIf(S20, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 110, false, false, true);
                Goto(L12);
S20:
                ForceAnimationPlayback(X12_4, 1000110, false, false, true);
                Goto(L12);
S21:
                ForceAnimationPlayback(X12_4, 2000110, false, false, true);
                Goto(L12);
S22:
                ForceAnimationPlayback(X12_4, 3000110, false, false, true);
                Goto(L12);
S23:
                ForceAnimationPlayback(X12_4, 4000110, false, false, true);
                Goto(L12);
S24:
                ForceAnimationPlayback(X12_4, 5000110, false, false, true);
                Goto(L12);
S25:
                ForceAnimationPlayback(X12_4, 6000110, false, false, true);
                Goto(L12);
S26:
                ForceAnimationPlayback(X12_4, 7000110, false, false, true);
                Goto(L12);
S27:
                ForceAnimationPlayback(X12_4, 8000110, false, false, true);
                Goto(L12);
S28:
                ForceAnimationPlayback(X12_4, 9000110, false, false, true);
                Goto(L12);
S29:
                ForceAnimationPlayback(X12_4, 10000110, false, false, true);
            } else {
L3:
                GotoIf(S39, X8_4 == 10);
                GotoIf(S38, X8_4 == 9);
                GotoIf(S37, X8_4 == 8);
                GotoIf(S36, X8_4 == 7);
                GotoIf(S35, X8_4 == 6);
                GotoIf(S34, X8_4 == 5);
                GotoIf(S33, X8_4 == 4);
                GotoIf(S32, X8_4 == 3);
                GotoIf(S31, X8_4 == 2);
                GotoIf(S30, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 110, false, true, true);
                Goto(L12);
S30:
                ForceAnimationPlayback(X12_4, 1000110, false, true, true);
                Goto(L12);
S31:
                ForceAnimationPlayback(X12_4, 2000110, false, true, true);
                Goto(L12);
S32:
                ForceAnimationPlayback(X12_4, 3000110, false, true, true);
                Goto(L12);
S33:
                ForceAnimationPlayback(X12_4, 4000110, false, true, true);
                Goto(L12);
S34:
                ForceAnimationPlayback(X12_4, 5000110, false, false, true);
                Goto(L12);
S35:
                ForceAnimationPlayback(X12_4, 6000110, false, false, true);
                Goto(L12);
S36:
                ForceAnimationPlayback(X12_4, 7000110, false, false, true);
                Goto(L12);
S37:
                ForceAnimationPlayback(X12_4, 8000110, false, false, true);
                Goto(L12);
S38:
                ForceAnimationPlayback(X12_4, 9000110, false, false, true);
                Goto(L12);
S39:
                ForceAnimationPlayback(X12_4, 10000110, false, false, true);
            }
L12:
            RestartEvent();
        }
L0:
        if (PlayerIsInOwnWorld()) {
            EnableObjAct(X16_4, -1);
            DisableObjAct(X24_4, -1);
        }
        obj2 = ObjActEventFlag(X20_4);
        flag2 = EventFlag(X0_4);
        areaSpFlag &= InArea(10000, X36_4) && !CharacterHasSpEffect(10000, 4800);
        if (X48_4 != 0) {
            areaSpFlag &= EventFlag(X48_4);
        }
        WaitFor((obj2 || flag2 || areaSpFlag) && !EventFlag(370));
        if (PlayerIsInOwnWorld()) {
            DisableObjAct(X16_4, -1);
        }
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(X40_4, ON);
            SetNetworkconnectedEventFlagID(X0_4, ON);
        }
        SetEventFlagID(X4_4, ON);
        if (!obj2.Passed) {
            GotoIf(L4, EventFlag(X44_4));
            GotoIf(S49, X8_4 == 10);
            GotoIf(S48, X8_4 == 9);
            GotoIf(S47, X8_4 == 8);
            GotoIf(S46, X8_4 == 7);
            GotoIf(S45, X8_4 == 6);
            GotoIf(S44, X8_4 == 5);
            GotoIf(S43, X8_4 == 4);
            GotoIf(S42, X8_4 == 3);
            GotoIf(S41, X8_4 == 2);
            GotoIf(S40, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 12, false, true, true);
            Goto(L5);
S40:
            ForceAnimationPlayback(X12_4, 1000012, false, true, true);
            Goto(L5);
S41:
            ForceAnimationPlayback(X12_4, 2000012, false, true, true);
            Goto(L5);
S42:
            ForceAnimationPlayback(X12_4, 3000012, false, true, true);
            Goto(L5);
S43:
            ForceAnimationPlayback(X12_4, 4000012, false, true, true);
            Goto(L5);
S44:
            ForceAnimationPlayback(X12_4, 5000012, false, true, true);
            Goto(L5);
S45:
            ForceAnimationPlayback(X12_4, 6000012, false, true, true);
            Goto(L5);
S46:
            ForceAnimationPlayback(X12_4, 7000012, false, true, true);
            Goto(L5);
S47:
            ForceAnimationPlayback(X12_4, 8000012, false, true, true);
            Goto(L5);
S48:
            ForceAnimationPlayback(X12_4, 9000012, false, true, true);
            Goto(L5);
S49:
            ForceAnimationPlayback(X12_4, 10000012, false, true, true);
        } else {
L4:
            SetNetworkconnectedEventFlagID(X44_4, ON);
            WaitFixedTimeSeconds(2);
            GotoIf(S59, X8_4 == 10);
            GotoIf(S58, X8_4 == 9);
            GotoIf(S57, X8_4 == 8);
            GotoIf(S56, X8_4 == 7);
            GotoIf(S55, X8_4 == 6);
            GotoIf(S54, X8_4 == 5);
            GotoIf(S53, X8_4 == 4);
            GotoIf(S52, X8_4 == 3);
            GotoIf(S51, X8_4 == 2);
            GotoIf(S50, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 12, false, true, true);
            Goto(L14);
S50:
            ForceAnimationPlayback(X12_4, 1000012, false, true, true);
            Goto(L14);
S51:
            ForceAnimationPlayback(X12_4, 2000012, false, true, true);
            Goto(L14);
S52:
            ForceAnimationPlayback(X12_4, 3000012, false, true, true);
            Goto(L14);
S53:
            ForceAnimationPlayback(X12_4, 4000012, false, true, true);
            Goto(L14);
S54:
            ForceAnimationPlayback(X12_4, 5000012, false, true, true);
            Goto(L14);
S55:
            ForceAnimationPlayback(X12_4, 6000012, false, true, true);
            Goto(L14);
S56:
            ForceAnimationPlayback(X12_4, 7000012, false, true, true);
            Goto(L14);
S57:
            ForceAnimationPlayback(X12_4, 8000012, false, true, true);
            Goto(L14);
S58:
            ForceAnimationPlayback(X12_4, 9000012, false, true, true);
            Goto(L14);
S59:
            ForceAnimationPlayback(X12_4, 10000012, false, true, true);
L14:
            ForceAnimationPlayback(X16_4, 3, false, false, true);
            SetNetworkconnectedEventFlagID(X44_4, OFF);
        }
L5:
        WaitFor(AssetBackread(X12_4, Equal, 1) && (!AllPlayersInArea(X32_4) || !EventFlag(X0_4)));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(X40_4, OFF);
            GotoIf(S69, X8_4 == 10);
            GotoIf(S68, X8_4 == 9);
            GotoIf(S67, X8_4 == 8);
            GotoIf(S66, X8_4 == 7);
            GotoIf(S65, X8_4 == 6);
            GotoIf(S64, X8_4 == 5);
            GotoIf(S63, X8_4 == 4);
            GotoIf(S62, X8_4 == 3);
            GotoIf(S61, X8_4 == 2);
            GotoIf(S60, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 120, false, false, true);
            Goto(L15);
S60:
            ForceAnimationPlayback(X12_4, 1000120, false, false, true);
            Goto(L15);
S61:
            ForceAnimationPlayback(X12_4, 2000120, false, false, true);
            Goto(L15);
S62:
            ForceAnimationPlayback(X12_4, 3000120, false, false, true);
            Goto(L15);
S63:
            ForceAnimationPlayback(X12_4, 4000120, false, false, true);
            Goto(L15);
S64:
            ForceAnimationPlayback(X12_4, 5000120, false, false, true);
            Goto(L15);
S65:
            ForceAnimationPlayback(X12_4, 6000120, false, false, true);
            Goto(L15);
S66:
            ForceAnimationPlayback(X12_4, 7000120, false, false, true);
            Goto(L15);
S67:
            ForceAnimationPlayback(X12_4, 8000120, false, false, true);
            Goto(L15);
S68:
            ForceAnimationPlayback(X12_4, 9000120, false, false, true);
            Goto(L15);
S69:
            ForceAnimationPlayback(X12_4, 10000120, false, false, true);
        } else {
L6:
            GotoIf(S79, X8_4 == 10);
            GotoIf(S78, X8_4 == 9);
            GotoIf(S77, X8_4 == 8);
            GotoIf(S76, X8_4 == 7);
            GotoIf(S75, X8_4 == 6);
            GotoIf(S74, X8_4 == 5);
            GotoIf(S73, X8_4 == 4);
            GotoIf(S72, X8_4 == 3);
            GotoIf(S71, X8_4 == 2);
            GotoIf(S70, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 120, false, false, true);
            Goto(L15);
S70:
            ForceAnimationPlayback(X12_4, 1000120, false, false, true);
            Goto(L15);
S71:
            ForceAnimationPlayback(X12_4, 2000120, false, false, true);
            Goto(L15);
S72:
            ForceAnimationPlayback(X12_4, 3000120, false, false, true);
            Goto(L15);
S73:
            ForceAnimationPlayback(X12_4, 4000120, false, false, true);
            Goto(L15);
S74:
            ForceAnimationPlayback(X12_4, 5000120, false, false, true);
            Goto(L15);
S75:
            ForceAnimationPlayback(X12_4, 6000120, false, false, true);
            Goto(L15);
S76:
            ForceAnimationPlayback(X12_4, 7000120, false, false, true);
            Goto(L15);
S77:
            ForceAnimationPlayback(X12_4, 8000120, false, false, true);
            Goto(L15);
S78:
            ForceAnimationPlayback(X12_4, 9000120, false, false, true);
            Goto(L15);
S79:
            ForceAnimationPlayback(X12_4, 10000120, false, false, true);
        }
L15:
        RestartEvent();
    }
L9:
    WaitFor(!EventFlag(X40_4));
    RestartEvent();
});

$Event(34112910, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(InArea(10000, 34112152));
    if (!(((EventFlag(X0_4) && EventFlag(X4_4)) || (!EventFlag(X0_4) && !EventFlag(X4_4)))
        && EventFlag(X40_4))) {
        if (EventFlag(X4_4)) {
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                EnableObjAct(X24_4, -1);
                DisableObjAct(X16_4, -1);
            }
            obj = ObjActEventFlag(X28_4);
            flag = !EventFlag(X0_4);
            areaFlag &= InArea(10000, X32_4);
            if (X48_4 != 0) {
                areaFlag &= EventFlag(X48_4);
            }
            WaitFor(obj || flag || areaFlag);
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                DisableObjAct(X24_4, -1);
            }
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                SetNetworkconnectedEventFlagID(X40_4, ON);
                SetNetworkconnectedEventFlagID(X0_4, OFF);
            }
            SetEventFlagID(X4_4, OFF);
            if (!obj.Passed) {
                GotoIf(L1, EventFlag(X44_4));
                GotoIf(S9, X8_4 == 10);
                GotoIf(S8, X8_4 == 9);
                GotoIf(S7, X8_4 == 8);
                GotoIf(S6, X8_4 == 7);
                GotoIf(S5, X8_4 == 6);
                GotoIf(S4, X8_4 == 5);
                GotoIf(S3, X8_4 == 4);
                GotoIf(S2, X8_4 == 3);
                GotoIf(S1, X8_4 == 2);
                GotoIf(S0, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 21, false, true, true);
                Goto(L2);
S0:
                ForceAnimationPlayback(X12_4, 1000021, false, true, true);
                Goto(L2);
S1:
                ForceAnimationPlayback(X12_4, 2000021, false, true, true);
                Goto(L2);
S2:
                ForceAnimationPlayback(X12_4, 3000021, false, true, true);
                Goto(L2);
S3:
                ForceAnimationPlayback(X12_4, 4000021, false, true, true);
                Goto(L2);
S4:
                ForceAnimationPlayback(X12_4, 5000021, false, true, true);
                Goto(L2);
S5:
                ForceAnimationPlayback(X12_4, 6000021, false, true, true);
                Goto(L2);
S6:
                ForceAnimationPlayback(X12_4, 7000021, false, true, true);
                Goto(L2);
S7:
                ForceAnimationPlayback(X12_4, 8000021, false, true, true);
                Goto(L2);
S8:
                ForceAnimationPlayback(X12_4, 9000021, false, true, true);
                Goto(L2);
S9:
                ForceAnimationPlayback(X12_4, 10000021, false, true, true);
            } else {
L1:
                if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                    SetNetworkconnectedEventFlagID(X44_4, ON);
                }
                WaitFixedTimeSeconds(2);
                GotoIf(S19, X8_4 == 10);
                GotoIf(S18, X8_4 == 9);
                GotoIf(S17, X8_4 == 8);
                GotoIf(S16, X8_4 == 7);
                GotoIf(S15, X8_4 == 6);
                GotoIf(S14, X8_4 == 5);
                GotoIf(S13, X8_4 == 4);
                GotoIf(S12, X8_4 == 3);
                GotoIf(S11, X8_4 == 2);
                GotoIf(S10, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 21, false, true, true);
                Goto(L11);
S10:
                ForceAnimationPlayback(X12_4, 1000021, false, true, true);
                Goto(L11);
S11:
                ForceAnimationPlayback(X12_4, 2000021, false, true, true);
                Goto(L11);
S12:
                ForceAnimationPlayback(X12_4, 3000021, false, true, true);
                Goto(L11);
S13:
                ForceAnimationPlayback(X12_4, 4000021, false, true, true);
                Goto(L11);
S14:
                ForceAnimationPlayback(X12_4, 5000021, false, true, true);
                Goto(L11);
S15:
                ForceAnimationPlayback(X12_4, 6000021, false, true, true);
                Goto(L11);
S16:
                ForceAnimationPlayback(X12_4, 7000021, false, true, true);
                Goto(L11);
S17:
                ForceAnimationPlayback(X12_4, 8000021, false, true, true);
                Goto(L11);
S18:
                ForceAnimationPlayback(X12_4, 9000021, false, true, true);
                Goto(L11);
S19:
                ForceAnimationPlayback(X12_4, 10000021, false, true, true);
L11:
                ForceAnimationPlayback(X24_4, 3, false, false, true);
                if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                    SetNetworkconnectedEventFlagID(X44_4, OFF);
                }
            }
L2:
            WaitFor(
                AssetBackread(X12_4, Equal, 1) && (!AllPlayersInArea(X36_4) || EventFlag(X0_4)));
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                SetNetworkconnectedEventFlagID(X40_4, OFF);
                GotoIf(S29, X8_4 == 10);
                GotoIf(S28, X8_4 == 9);
                GotoIf(S27, X8_4 == 8);
                GotoIf(S26, X8_4 == 7);
                GotoIf(S25, X8_4 == 6);
                GotoIf(S24, X8_4 == 5);
                GotoIf(S23, X8_4 == 4);
                GotoIf(S22, X8_4 == 3);
                GotoIf(S21, X8_4 == 2);
                GotoIf(S20, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 110, false, false, true);
                Goto(L12);
S20:
                ForceAnimationPlayback(X12_4, 1000110, false, false, true);
                Goto(L12);
S21:
                ForceAnimationPlayback(X12_4, 2000110, false, false, true);
                Goto(L12);
S22:
                ForceAnimationPlayback(X12_4, 3000110, false, false, true);
                Goto(L12);
S23:
                ForceAnimationPlayback(X12_4, 4000110, false, false, true);
                Goto(L12);
S24:
                ForceAnimationPlayback(X12_4, 5000110, false, false, true);
                Goto(L12);
S25:
                ForceAnimationPlayback(X12_4, 6000110, false, false, true);
                Goto(L12);
S26:
                ForceAnimationPlayback(X12_4, 7000110, false, false, true);
                Goto(L12);
S27:
                ForceAnimationPlayback(X12_4, 8000110, false, false, true);
                Goto(L12);
S28:
                ForceAnimationPlayback(X12_4, 9000110, false, false, true);
                Goto(L12);
S29:
                ForceAnimationPlayback(X12_4, 10000110, false, false, true);
            } else {
L3:
                GotoIf(S39, X8_4 == 10);
                GotoIf(S38, X8_4 == 9);
                GotoIf(S37, X8_4 == 8);
                GotoIf(S36, X8_4 == 7);
                GotoIf(S35, X8_4 == 6);
                GotoIf(S34, X8_4 == 5);
                GotoIf(S33, X8_4 == 4);
                GotoIf(S32, X8_4 == 3);
                GotoIf(S31, X8_4 == 2);
                GotoIf(S30, X8_4 == 1);
                ForceAnimationPlayback(X12_4, 110, false, true, true);
                Goto(L12);
S30:
                ForceAnimationPlayback(X12_4, 1000110, false, true, true);
                Goto(L12);
S31:
                ForceAnimationPlayback(X12_4, 2000110, false, true, true);
                Goto(L12);
S32:
                ForceAnimationPlayback(X12_4, 3000110, false, true, true);
                Goto(L12);
S33:
                ForceAnimationPlayback(X12_4, 4000110, false, true, true);
                Goto(L12);
S34:
                ForceAnimationPlayback(X12_4, 5000110, false, true, true);
                Goto(L12);
S35:
                ForceAnimationPlayback(X12_4, 6000110, false, true, true);
                Goto(L12);
S36:
                ForceAnimationPlayback(X12_4, 7000110, false, true, true);
                Goto(L12);
S37:
                ForceAnimationPlayback(X12_4, 8000110, false, true, true);
                Goto(L12);
S38:
                ForceAnimationPlayback(X12_4, 9000110, false, true, true);
                Goto(L12);
S39:
                ForceAnimationPlayback(X12_4, 10000110, false, true, true);
            }
L12:
            SaveRequest();
            RestartEvent();
        }
L0:
        if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
            EnableObjAct(X16_4, -1);
            DisableObjAct(X24_4, -1);
        }
        obj2 = ObjActEventFlag(X20_4);
        flag2 = EventFlag(X0_4);
        areaSpFlag &= InArea(10000, X36_4) && !CharacterHasSpEffect(10000, 4800);
        if (X48_4 != 0) {
            areaSpFlag &= EventFlag(X48_4);
        }
        WaitFor(obj2 || flag2 || areaSpFlag);
        if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
            DisableObjAct(X16_4, -1);
        }
        if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
            SetNetworkconnectedEventFlagID(X40_4, ON);
            SetNetworkconnectedEventFlagID(X0_4, ON);
        }
        SetEventFlagID(X4_4, ON);
        if (!obj2.Passed) {
            GotoIf(L4, EventFlag(X44_4));
            GotoIf(S49, X8_4 == 10);
            GotoIf(S48, X8_4 == 9);
            GotoIf(S47, X8_4 == 8);
            GotoIf(S46, X8_4 == 7);
            GotoIf(S45, X8_4 == 6);
            GotoIf(S44, X8_4 == 5);
            GotoIf(S43, X8_4 == 4);
            GotoIf(S42, X8_4 == 3);
            GotoIf(S41, X8_4 == 2);
            GotoIf(S40, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 12, false, true, true);
            Goto(L5);
S40:
            ForceAnimationPlayback(X12_4, 1000012, false, true, true);
            Goto(L5);
S41:
            ForceAnimationPlayback(X12_4, 2000012, false, true, true);
            Goto(L5);
S42:
            ForceAnimationPlayback(X12_4, 3000012, false, true, true);
            Goto(L5);
S43:
            ForceAnimationPlayback(X12_4, 4000012, false, true, true);
            Goto(L5);
S44:
            ForceAnimationPlayback(X12_4, 5000012, false, true, true);
            Goto(L5);
S45:
            ForceAnimationPlayback(X12_4, 6000012, false, true, true);
            Goto(L5);
S46:
            ForceAnimationPlayback(X12_4, 7000012, false, true, true);
            Goto(L5);
S47:
            ForceAnimationPlayback(X12_4, 8000012, false, true, true);
            Goto(L5);
S48:
            ForceAnimationPlayback(X12_4, 9000012, false, true, true);
            Goto(L5);
S49:
            ForceAnimationPlayback(X12_4, 10000012, false, true, true);
        } else {
L4:
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                SetNetworkconnectedEventFlagID(X44_4, ON);
            }
            WaitFixedTimeSeconds(2);
            GotoIf(S59, X8_4 == 10);
            GotoIf(S58, X8_4 == 9);
            GotoIf(S57, X8_4 == 8);
            GotoIf(S56, X8_4 == 7);
            GotoIf(S55, X8_4 == 6);
            GotoIf(S54, X8_4 == 5);
            GotoIf(S53, X8_4 == 4);
            GotoIf(S52, X8_4 == 3);
            GotoIf(S51, X8_4 == 2);
            GotoIf(S50, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 12, false, true, true);
            Goto(L14);
S50:
            ForceAnimationPlayback(X12_4, 1000012, false, true, true);
            Goto(L14);
S51:
            ForceAnimationPlayback(X12_4, 2000012, false, true, true);
            Goto(L14);
S52:
            ForceAnimationPlayback(X12_4, 3000012, false, true, true);
            Goto(L14);
S53:
            ForceAnimationPlayback(X12_4, 4000012, false, true, true);
            Goto(L14);
S54:
            ForceAnimationPlayback(X12_4, 5000012, false, true, true);
            Goto(L14);
S55:
            ForceAnimationPlayback(X12_4, 6000012, false, true, true);
            Goto(L14);
S56:
            ForceAnimationPlayback(X12_4, 7000012, false, true, true);
            Goto(L14);
S57:
            ForceAnimationPlayback(X12_4, 8000012, false, true, true);
            Goto(L14);
S58:
            ForceAnimationPlayback(X12_4, 9000012, false, true, true);
            Goto(L14);
S59:
            ForceAnimationPlayback(X12_4, 10000012, false, true, true);
L14:
            ForceAnimationPlayback(X16_4, 3, false, false, true);
            if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
                SetNetworkconnectedEventFlagID(X44_4, OFF);
            }
        }
L5:
        WaitFor(AssetBackread(X12_4, Equal, 1) && (!AllPlayersInArea(X32_4) || !EventFlag(X0_4)));
        if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
            SetNetworkconnectedEventFlagID(X40_4, OFF);
            GotoIf(S69, X8_4 == 10);
            GotoIf(S68, X8_4 == 9);
            GotoIf(S67, X8_4 == 8);
            GotoIf(S66, X8_4 == 7);
            GotoIf(S65, X8_4 == 6);
            GotoIf(S64, X8_4 == 5);
            GotoIf(S63, X8_4 == 4);
            GotoIf(S62, X8_4 == 3);
            GotoIf(S61, X8_4 == 2);
            GotoIf(S60, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 120, false, false, true);
            Goto(L15);
S60:
            ForceAnimationPlayback(X12_4, 1000120, false, false, true);
            Goto(L15);
S61:
            ForceAnimationPlayback(X12_4, 2000120, false, false, true);
            Goto(L15);
S62:
            ForceAnimationPlayback(X12_4, 3000120, false, false, true);
            Goto(L15);
S63:
            ForceAnimationPlayback(X12_4, 4000120, false, false, true);
            Goto(L15);
S64:
            ForceAnimationPlayback(X12_4, 5000120, false, false, true);
            Goto(L15);
S65:
            ForceAnimationPlayback(X12_4, 6000120, false, false, true);
            Goto(L15);
S66:
            ForceAnimationPlayback(X12_4, 7000120, false, false, true);
            Goto(L15);
S67:
            ForceAnimationPlayback(X12_4, 8000120, false, false, true);
            Goto(L15);
S68:
            ForceAnimationPlayback(X12_4, 9000120, false, false, true);
            Goto(L15);
S69:
            ForceAnimationPlayback(X12_4, 10000120, false, false, true);
        } else {
L6:
            GotoIf(S79, X8_4 == 10);
            GotoIf(S78, X8_4 == 9);
            GotoIf(S77, X8_4 == 8);
            GotoIf(S76, X8_4 == 7);
            GotoIf(S75, X8_4 == 6);
            GotoIf(S74, X8_4 == 5);
            GotoIf(S73, X8_4 == 4);
            GotoIf(S72, X8_4 == 3);
            GotoIf(S71, X8_4 == 2);
            GotoIf(S70, X8_4 == 1);
            ForceAnimationPlayback(X12_4, 120, false, true, true);
            Goto(L15);
S70:
            ForceAnimationPlayback(X12_4, 1000120, false, true, true);
            Goto(L15);
S71:
            ForceAnimationPlayback(X12_4, 2000120, false, true, true);
            Goto(L15);
S72:
            ForceAnimationPlayback(X12_4, 3000120, false, true, true);
            Goto(L15);
S73:
            ForceAnimationPlayback(X12_4, 4000120, false, true, true);
            Goto(L15);
S74:
            ForceAnimationPlayback(X12_4, 5000120, false, true, true);
            Goto(L15);
S75:
            ForceAnimationPlayback(X12_4, 6000120, false, true, true);
            Goto(L15);
S76:
            ForceAnimationPlayback(X12_4, 7000120, false, true, true);
            Goto(L15);
S77:
            ForceAnimationPlayback(X12_4, 8000120, false, true, true);
            Goto(L15);
S78:
            ForceAnimationPlayback(X12_4, 9000120, false, true, true);
            Goto(L15);
S79:
            ForceAnimationPlayback(X12_4, 10000120, false, true, true);
        }
L15:
        SaveRequest();
        RestartEvent();
    }
L9:
    WaitFor(!EventFlag(X40_4));
    RestartEvent();
});

$Event(34112400, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(ThisEventSlot());
    DisableCharacter(34110710);
    DisableCharacterCollision(34110710);
    EnableCharacterFadeOnEnable(34110710);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 34112400));
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600921);
    WaitFixedTimeSeconds(0.5);
    EnableCharacter(34110710);
    EnableCharacterCollision(34110710);
    SetNetworkconnectedThisEventSlot(ON);
    EndEvent();
});

$Event(34112410, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(EventFlag(34115410));
    //EndIf(ThisEventSlot());
    EnableCharacterFadeOnEnable(34110710);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && HPRatio(34110710) <= 0.8
            && !CharacterHasSpEffect(34110710, 19385)
            && CharacterHPValue(34110710) > 0);
    gotAttacked |= HasDamageType(34110710, 10000, DamageType.Unspecified);
    WaitFor(gotAttacked || ElapsedSeconds(4));
    RestartIf(gotAttacked.Passed);
    DisableLockOnPoint(34110710, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600921);
    SetSpEffect(34110710, 4240);
    WaitFixedTimeSeconds(0.5);
    if (CharacterHasSpEffect(34110710, 19385)) {
        EnableLockOnPoint(34110710, 220);
        SetNetworkconnectedEventFlagID(34112485, ON);
        EndEvent();
    }
    WarpCharacterAndCopyFloor(34110710, TargetEntityType.Area, 34112411, -1, 34110710);
    SetCharacterHome(34110710, 34112411);
    EnableLockOnPoint(34110710, 220);
    //SetNetworkconnectedThisEventSlot(ON);
    SetNetworkconnectedEventFlagID(34115410, ON);
    SetSpEffect(34110710, 4241);
    EndEvent();
});

$Event(34112420, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(EventFlag(34115420));
    //EndIf(ThisEventSlot());
    EnableCharacterFadeOnEnable(34110710);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && HPRatio(34110710) <= 0.6
            && !CharacterHasSpEffect(34110710, 19385)
            && CharacterHPValue(34110710) > 0
            //&& EventFlag(34112410));
            && EventFlag(34115410));
    gotAttacked |= HasDamageType(34110710, 10000, DamageType.Unspecified);
    WaitFor(gotAttacked || ElapsedSeconds(4));
    RestartIf(gotAttacked.Passed);
    DisableLockOnPoint(34110710, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600921);
    SetSpEffect(34110710, 4240);
    WaitFixedTimeSeconds(0.5);
    if (CharacterHasSpEffect(34110710, 19385)) {
        EnableLockOnPoint(34110710, 220);
        SetNetworkconnectedEventFlagID(34112486, ON);
        EndEvent();
    }
    WarpCharacterAndCopyFloor(34110710, TargetEntityType.Area, 34112421, -1, 34110710);
    SetCharacterHome(34110710, 34112421);
    EnableLockOnPoint(34110710, 220);
    //SetNetworkconnectedThisEventSlot(ON);
    SetNetworkconnectedEventFlagID(34115420, ON);
    SetSpEffect(34110710, 4241);
    EndEvent();
});

$Event(34112430, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(EventFlag(34115430));
    //EndIf(ThisEventSlot());
    EnableCharacterFadeOnEnable(34110710);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && HPRatio(34110710) <= 0.4
            && !CharacterHasSpEffect(34110710, 19385)
            && CharacterHPValue(34110710) > 0
            //&& EventFlag(34112420));
            && EventFlag(34115420));
    gotAttacked |= HasDamageType(34110710, 10000, DamageType.Unspecified);
    WaitFor(gotAttacked || ElapsedSeconds(4));
    RestartIf(gotAttacked.Passed);
    DisableLockOnPoint(34110710, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600921);
    SetSpEffect(34110710, 4240);
    WaitFixedTimeSeconds(0.5);
    if (CharacterHasSpEffect(34110710, 19385)) {
        EnableLockOnPoint(34110710, 220);
        SetNetworkconnectedEventFlagID(34112487, ON);
        EndEvent();
    }
    WarpCharacterAndCopyFloor(34110710, TargetEntityType.Area, 34112431, -1, 34110710);
    SetCharacterHome(34110710, 34112431);
    WaitFixedTimeSeconds(1);
    RequestCharacterAIReplan(34110710);
    WaitFixedTimeSeconds(0.1);
    DisableCharacterAI(34110710);
    //SetNetworkconnectedThisEventSlot(ON);
    SetNetworkconnectedEventFlagID(34115430, ON);
    EndEvent();
});

$Event(34112439, Restart, function() {
    EndIf(EventFlag(34110710));
    WaitFor(AllBatchEventFlags(34112440, 34112447));
    DisableCharacter(34110710);
});

$Event(34112440, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(34110710));
    EndIf(EventFlag(34112448));
    EndIf(EventFlag(34112459));
    EnableCharacterFadeOnEnable(34110710);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4)
            && EventFlag(34115410)
            && EventFlag(34115420)
            && EventFlag(34115430)
            && !EventFlag(34112448)
            && !CharacterHasSpEffect(34110710, 19385));
    gotAttacked |= HasDamageType(34110710, 10000, DamageType.Unspecified);
    WaitFor(gotAttacked || ElapsedSeconds(4));
    RestartIf(gotAttacked.Passed);
    WaitFixedTimeSeconds(4);
    EndIf(EventFlag(34112459));
    SetSpEffect(34110710, 4240);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110710, 151, 600921);
    WaitFixedTimeSeconds(0.5);
    if (CharacterHasSpEffect(34110710, 19385)) {
        SetSpEffect(34110710, 4241);
        RestartEvent();
    }
    WarpCharacterAndCopyFloor(34110710, TargetEntityType.Area, X4_4, -1, 34110710);
    SetCharacterHome(34110710, X4_4);
    SetSpEffect(34110710, 4241);
    WaitFixedTimeSeconds(4);
    RestartEvent();
});

$Event(34112448, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 34112448));
    ClearCharactersAITarget(34110710);
    SetSpEffect(34110710, 8082);
    SetThisEventSlot(ON);
});

$Event(34112449, Restart, function() {
    EndIf(EventFlag(34110710));
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 34112449)
            && EventFlag(34112410)
            && EventFlag(34112420)
            && EventFlag(34112430));
    EnableLockOnPoint(34110710, 220);
    EnableCharacterAI(34110710);
    SetCharacterAIId(34110710, 523520200);
    SetThisEventSlot(ON);
});

$Event(34112459, Restart, function() {
    EndIf(EventFlag(34110710));
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && HasDamageType(34110710, 10000, DamageType.Unspecified)
            && EventFlag(34112410)
            && EventFlag(34112420)
            && EventFlag(34112430));
    SetThisEventSlot(ON);
});

$Event(34112460, Restart, function() {
    EndIf(EventFlag(34110711));
    EndIf(ThisEventSlot());
    DisableCharacter(34110711);
    DisableCharacterCollision(34110711);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 34112460)
            && EventFlag(370));
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 151, 600921);
    WaitFixedTimeSeconds(0.5);
    EnableCharacter(34110711);
    EnableCharacterCollision(34110711);
    SetThisEventSlot(ON);
});

$Event(34112465, Restart, function() {
    EndIf(EventFlag(34110711));
    EndIf(EventFlag(34112496));
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && HPRatio(34110711) <= 0.3
            && !CharacterHasSpEffect(34110710, 19385)
            && CharacterHPValue(34110711) > 0
            && !EventFlag(34112496));
    EndIf(CharacterHPValue(34110711) == 0);
    DisableLockOnPoint(34110711, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 151, 600921);
    WaitFixedTimeSeconds(0.5);
    SetSpEffect(34110710, 4240);
    if (CharacterHasSpEffect(34110711, 19385)) {
        EnableLockOnPoint(34110711, 220);
        SetNetworkconnectedEventFlagID(34112488, ON);
        EndEvent();
    }
    WarpCharacterAndCopyFloor(34110711, TargetEntityType.Area, 34112466, -1, 34110711);
    SetCharacterHome(34110711, 34112466);
    EnableLockOnPoint(34110711, 220);
    SetThisEventSlot(ON);
    SetSpEffect(34110710, 4241);
});

$Event(34112475, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    WaitFor(EventFlag(X0_4) && !CharacterHasSpEffect(X4_4, 19385));
    DisableLockOnPoint(X4_4, 220);
    SetSpEffect(X4_4, 4240);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 150, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 151, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 152, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 153, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 154, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 155, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 156, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 157, 600920);
    SpawnOneshotSFX(TargetEntityType.Character, X4_4, 151, 600921);
    WaitFixedTimeSeconds(0.5);
    EndIf(CharacterHPValue(X4_4) == 0);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    SetCharacterHome(X4_4, X8_4);
    EnableLockOnPoint(X4_4, 220);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpEffect(X4_4, 4241);
});

$Event(34112492, Restart, function() {
    EndIf(flagArea);
    flagArea = EventFlag(34110711) || ThisEventSlot() || InArea(10000, 34112482) || InArea(10000, 34112483);
    WaitFor(flagArea);
    DisableLockOnPoint(34110711, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 220, 806910);
    WarpCharacterAndCopyFloor(34110711, TargetEntityType.Area, 34112492, -1, 34110711);
    EnableLockOnPoint(34110711, 220);
    SetThisEventSlot(ON);
});

$Event(34112493, Restart, function() {
    EndIf(EventFlag(34110711) || ThisEventSlot());
    WaitFor(InArea(10000, 34112490));
    DisableLockOnPoint(34110711, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 220, 806910);
    WarpCharacterAndCopyFloor(34110711, TargetEntityType.Area, 34112493, -1, 34110711);
    EnableLockOnPoint(34110711, 220);
    SetThisEventSlot(ON);
});

$Event(34112496, Restart, function() {
    EndIf(EventFlag(34110711));
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 34112482) || InArea(10000, 34112483)));
    DisableLockOnPoint(34110711, 220);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110711, 220, 806910);
    WarpCharacterAndCopyFloor(34110711, TargetEntityType.Area, 34112496, -1, 34110711);
    EnableLockOnPoint(34110711, 220);
    SetThisEventSlot(ON);
});

$Event(34112499, Restart, function() {
    SetSpEffect(34110710, 8090);
    SetSpEffect(34110711, 8090);
    SetSpEffect(34110712, 8090);
});

$Event(34112690, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, InArea(10000, 34112690));
    GotoIf(L1, InArea(10000, 34112691));
    ChangeWeather(Weather.None, -1, false);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L0:
    cond |= WeatherActive(Weather.RainyClouds, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.RainyClouds, -1, false);
    Goto(L2);
L1:
    cond |= WeatherActive(Weather.HeavyFog, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.HeavyFog, -1, false);
L2:
    RestartEvent();
});

//Godskin Matriarch Events
//Defeat Event
$Event(34112800, Restart, function() {
    //SetEventFlagID(34110800, OFF);
    EndIf(EventFlag(34110800));
    WaitFor(CharacterHPValue(34110800) <= 0);
    SetEventFlagID(34112804, ON);
    WaitFixedTimeSeconds(4);
    DeleteMapSFX(34115800, true);
    DeleteMapSFX(34115820, true);
    DeleteMapSFX(34115821, true);
    DeleteMapSFX(34115822, true);
    DeleteMapSFX(34115823, true);
    DeleteMapSFX(34115824, true);
    DeleteMapSFX(34115825, true);
    DeleteMapSFX(34115826, true);
    ChangeWeather(Weather.Default, 10, false);
    PlaySE(34110800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34110800));
    HandleBossDefeatAndDisplayBanner(34110800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(34110800, ON);
    SetEventFlagID(34115840, ON); //music handler eventflag
    SetEventFlagID(34112802, OFF);
    SetEventFlagID(34112805, OFF);
    SetEventFlagID(9186, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61186, ON);
    }
    WaitFixedTimeSeconds(6);
    SetEventFlagID(34112807, OFF);
    SetEventFlagID(34115840, OFF); //music handler eventflag
    WaitFixedTimeSeconds(9);
    SetEventFlagID(34112804, OFF);
});

//Activation
$Event(34112810, Restart, function() {
    //SetEventFlagID(34110800, OFF);
    if (EventFlag(34110800)) {
        DisableCharacter(34110800);
        DisableCharacterCollision(34110800);
        ForceCharacterDeath(34110800, false);
        DeleteMapSFX(34115810, true);
        DeleteMapSFX(34115811, true);
        DeleteMapSFX(34115812, true);
        DeleteMapSFX(34115813, true);
        DeleteMapSFX(34115814, true);
        DeleteMapSFX(34115815, true);
        DeleteMapSFX(34115816, true);
        DeleteMapSFX(34115820, true);
        DeleteMapSFX(34115821, true);
        DeleteMapSFX(34115822, true);
        DeleteMapSFX(34115823, true);
        DeleteMapSFX(34115824, true);
        DeleteMapSFX(34115825, true);
        DeleteMapSFX(34115826, true);
        EndEvent();
    }
L0:
    DeleteMapSFX(34115810, true);
    DeleteMapSFX(34115811, true);
    DeleteMapSFX(34115812, true);
    DeleteMapSFX(34115813, true);
    DeleteMapSFX(34115814, true);
    DeleteMapSFX(34115815, true);
    DeleteMapSFX(34115816, true);
    DeleteMapSFX(34115820, true);
    DeleteMapSFX(34115821, true);
    DeleteMapSFX(34115822, true);
    DeleteMapSFX(34115823, true);
    DeleteMapSFX(34115824, true);
    DeleteMapSFX(34115825, true);
    DeleteMapSFX(34115826, true);
    ForceAnimationPlayback(34110800, 700, true, false, false, 0, 1);
    DisableCharacterAI(34110800);
    EnableCharacterInvincibility(34110800);
    DisableCharacterCollision(34110800);
    flagArea = EventFlag(34112805) && InArea(10000, 34112800);
    dmg = HasDamageType(34110800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(34110800, 1700, false, false, false, 0, 1);
    EnableCharacterAI(34110800);
    DisableCharacterInvincibility(34110800);
    EnableCharacterCollision(34110800);
    SetNetworkUpdateRate(34110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34110800, 0, 902035000);
    SpawnMapSFX(34115810);
    SpawnMapSFX(34115811);
    SpawnMapSFX(34115812);
    SpawnMapSFX(34115813);
    SpawnMapSFX(34115814);
    SpawnMapSFX(34115815);
    SpawnMapSFX(34115816);
});

//Phase Change
$Event(34112811, Restart, function() {
    //SetEventFlagID(34110800, OFF);
    DeleteMapSFX(34115800, true);
    WaitFor(CharacterHasSpEffect(34110800, 19955));
    SetEventFlagID(34112802, ON);
    SetEventFlagID(34112803, ON);
    WaitFor(CharacterHasSpEffect(34110800, 15520));
    SetEventFlagID(34112805, OFF);
    SetEventFlagID(34112803, OFF);
    RequestCharacterAIReplan(34110800);
    SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    SpawnMapSFX(34115800);
    DeleteMapSFX(34115810, true);
    DeleteMapSFX(34115811, true);
    DeleteMapSFX(34115812, true);
    DeleteMapSFX(34115813, true);
    DeleteMapSFX(34115814, true);
    DeleteMapSFX(34115815, true);
    DeleteMapSFX(34115816, true);
    SpawnMapSFX(34115820);
    SpawnMapSFX(34115821);
    SpawnMapSFX(34115822);
    SpawnMapSFX(34115823);
    SpawnMapSFX(34115824);
    SpawnMapSFX(34115825);
    SpawnMapSFX(34115826);
    ChangeWeather(Weather.Rain, -1, false);
    WaitFor(HPRatio(34110800) <= 0.25);
    SetEventFlagID(34112805, OFF);
    SetEventFlagID(34112807, ON);
    EndEvent();
});

//Snake Summon
//$Event(34112812, Restart, function() {
//    DisableCharacterHPBarDisplay(34110801);
//    DisableCharacterGravity(34110801);
//    SetCharacterMaphit(34110801, Disabled);
//    SetCharacterImmortality(34110801, Enabled);
//    SetCharacterInvincibility(34110801, Enabled);
//    IfCharacterHasSpEffect(MAIN, 34110800, 15521, true, Equal, 1);
//    IssueShortWarpRequest(34110801, TargetEntityType.Character, 34110800, 180);
//    WaitFixedTimeFrames(1);
//    ForceAnimationPlayback(34110801, 3000, false, true, false, 0, 1);
//    WaitFixedTimeFrames(1);
//    IssueShortWarpRequest(34110801, TargetEntityType.Area, 34111801, -1);
//    RestartEvent();
//});

//Sound Dummies
$Event(34112813, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    DisableCharacterAI(X0_4);
    DisableCharacterGravity(X0_4);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
});

//Fogwall and Music
$Event(34112849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 34110800, 34111800, 34112800, 34112805, 34115800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 34110800, 34111800, 34112800, 34112805, 34112806, 10000);
    InitializeCommonEvent(0, 9005811, 34110800, 34111800, 3, 0);
    InitializeCommonEvent(0, 930000, 34110800, 930000, 34112805, 34112806, 0, 34132802, 0, 0);
    InitializeCommonEvent(0, 9005822, 34110800, 921600, 34112805, 34112806, 0, 34112802, 0, 0);
});

//Disable Killboxes if cheated
$Event(34112950, Restart, function() {
    WaitFor(InArea(10000, 34112498) && !EventFlag(370));
    
    DisableHit(34114150);
    DisableHit(34114151);
    DisableHit(34114152);
    DisableHit(34114153);
    
    WaitFor(!InArea(10000, 34112498) || EventFlag(370));
    RestartIf(EventFlag(370));
    
    EnableHit(34114150);
    EnableHit(34114151);
    EnableHit(34114152);
    EnableHit(34114153);
    RestartEvent();
});

//Honse Obtain
$Event(34112960, Restart, function() {
    if (EventFlag(34110960) || EventFlag(63104)) {
        DisableCharacter(34110960);
        DeleteMapSFX(34110963, false);
        DeleteMapSFX(34110964, false);
        DeleteMapSFX(34110965, false);
        DeleteMapSFX(34110966, false);
        DeleteMapSFX(34110967, false);
        EndEvent();
    }
    SetCharacterTeamType(34110960, 0);
    WaitFor(ActionButtonInArea(6255, 34110960));
    
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 210, 523805); // Sigil (honse)
    SpawnOneshotSFX(TargetEntityType.Character, 34110961, 220, 523805); // Sigil (knight)
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 220, 500061); // Sound
    
    WaitFixedTimeFrames(35);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 1, 523763); // Magic Thrust
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 2, 523763);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 3, 523763);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 4, 523763);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 220, 530151); // Sound
    
    WaitFixedTimeFrames(4);
    SetSpEffect(34110960, 100910); // Increasing Glow
    ForceAnimationPlayback(34110960, 20010, false, false, false);
    WaitFixedTimeFrames(10);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 220, 303300); // Sound
    
    WaitFixedTimeFrames(27);
    SetSpEffect(34110960, 10124); // Fade
    WaitFixedTimeFrames(3);
    SpawnOneshotSFX(TargetEntityType.Character, 34110960, 91, 523804); // Explosion
    if (InArea(10000, 34110962)) {
        ShootBullet(34110963, 34110960, 220, 120, 0, 0, 0);
    }
    
    WaitFixedTimeFrames(20);
    DisableCharacter(34110960);
    
    WaitFixedTimeSeconds(1.8);
    AwardItemsIncludingClients(34110150);
    SetEventFlagID(34110960, ON);
    EndEvent();
});
