// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 1046360250, 1046362250, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1046360240, 1046362240, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1046360300, 1046362300, 1092616192, 0, 0);
    InitializeCommonEvent(0, 900005610, 1046361650, 100, 800, 0);
    InitializeEvent(0, 1046362260, 1046365260, 1046362260);
    InitializeEvent(0, 1046362203, 0);
    InitializeEvent(0, 1046362300, 0);
    InitializeEvent(0, 1046362310, 0);
    InitializeCommonEvent(0, 90005704, 1046360700, 3581, 3580, 1046369201, 3);
    InitializeCommonEvent(0, 90005703, 1046360700, 3581, 3582, 1046369201, 3581, 3580, 3583, -1);
    InitializeCommonEvent(0, 90005702, 1046360700, 3583, 3580, 3583);
    InitializeEvent(0, 1046360700, 1046360700);
    InitializeEvent(0, 1046362870, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1046360700, true);
    InitializeEvent(0, 1046362220, 0);
});

$Event(1046362203, Default, function() {
    RegisterLadder(46360580, 46360851, 1046361580);
});

$Event(1046362220, Restart, function() {
    ForceCharacterTreasure(1046365120);
});

$Event(1046362260, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1046362260));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5650);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1046362260, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(1046362300, Restart, function() {
    if (EventFlag(1046360705) && !EventFlag(1046362320)) {
        SetNetworkconnectedEventFlagID(1046360320, ON);
    }
L0:
    SetNetworkconnectedEventFlagID(1046362320, ON);
    if (EventFlag(1046360320)) {
        DisableCharacter(1046365300);
        DisableCharacterCollision(1046365300);
        DisableCharacterAI(1046365300);
        SetCharacterMaphit(1046365300, false);
        DisableCharacterGravity(1046365300);
        EndEvent();
    }
L1:
    WaitFor(PlayerIsInOwnWorld() && CharacterDead(1046360250));
    SetNetworkconnectedEventFlagID(1046360705, ON);
    AwardItemsIncludingClients(1046360700);
});

$Event(1046362310, Restart, function() {
    DisableCharacter(1046365310);
    DisableCharacterCollision(1046365310);
    DisableCharacterAI(1046365310);
    SetCharacterMaphit(1046365310, false);
    DisableCharacterGravity(1046365310);
    if (EventFlag(1046360706) && !EventFlag(1046362330)) {
        SetNetworkconnectedEventFlagID(1046360330, ON);
    }
L0:
    SetNetworkconnectedEventFlagID(1046362330, ON);
    if (EventFlag(1046360330)) {
        DisableCharacter(1046365300);
        DisableCharacterCollision(1046365300);
        DisableCharacterAI(1046365300);
        SetCharacterMaphit(1046365300, false);
        DisableCharacterGravity(1046365300);
        EnableCharacter(1046365310);
        EnableCharacterCollision(1046365310);
        EnableCharacterAI(1046365310);
        SetCharacterMaphit(1046365310, true);
        EnableCharacterGravity(1046365310);
        EndEvent();
    }
L1:
    NoOp();
});

$Event(1046362620, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) && PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, false);
});

$Event(1046360700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3580) && EventFlag(1045389203)) {
            SetEventFlagID(1045389203, OFF);
        }
    }
L19:
    if (!EventFlag(3586)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3586));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3580));
    GotoIf(L2, EventFlag(3581));
    GotoIf(L4, EventFlag(3583));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3586));
    RestartEvent();
});

$Event(1046362870, Restart, function() {
    CreateAssetfollowingSFX(1046361660, 200, 806870);
    IfActionButtonInArea(MAIN, 9140, 1046361660);
    RotateCharacter(10000, 1046361660, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false, Equal, 1);
    WaitFixedTimeSeconds(3);
    WarpPlayer(60, 47, 38, 0, 1047381661, 60);
    RestartEvent();
});
