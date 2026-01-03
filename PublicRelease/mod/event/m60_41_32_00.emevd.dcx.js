// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    // - - - Vanilla - - -
    RegisterBonfire(1041320000, 1041321950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005724, 1041320290, 1041320290, 70000, 0, 1, 1041325291);
    InitializeCommonEvent(0, 90005722, 1041320290, 1041320291);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320292, 10961, 181);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320293, 10961, 182);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320292);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320293);
    InitializeCommonEvent(0, 90005723, 1041320290);
    InitializeCommonEvent(0, 90005920, 1041320900, 1041321900, 1041323900);
    InitializeCommonEvent(0, 90005261, 1041329200, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329201, 1041322200, 1084227584, 1073741824, 1701);
    InitializeCommonEvent(0, 90005261, 1041329202, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329203, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329204, 1041322200, 1084227584, 1073741824, 1702);
    InitializeCommonEvent(0, 90005261, 1041329205, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329206, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005725, 4745, 4746, 4748, 1041329205, 1041320700, 1041320701, 1041326700);
    InitializeCommonEvent(0, 90005703, 1041320700, 4746, 4747, 1041329206, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320700, 4746, 4745, 1041329206, 3);
    InitializeCommonEvent(0, 90005702, 1041320700, 4748, 4745, 4749);
    InitializeCommonEvent(0, 90005703, 1041320701, 4746, 4747, 1041329207, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320701, 4746, 4745, 1041329207, 3);
    InitializeCommonEvent(0, 90005728, 1041320701, 1041322706, 1041322707);
    InitializeCommonEvent(0, 90005727, 4746, 1041320700, 1041320701, 4745, 4748);
    
    // - - - Turtle Camp - - -
    // Turtles
    InitializeEvent(0, 1041326090, 0); // Initalization
    InitializeEvent(0, 1041326091, 0); // Giant Turtle Eating 
    InitializeEvent(0, 1041326092, 0); // Giant Turtle ROAR
    
    InitializeEvent(0, 1041326094, 1041320611); // Kill Turle upon big turtle death
    InitializeEvent(1, 1041326094, 1041320612);
    InitializeEvent(2, 1041326094, 1041320613);
    InitializeEvent(3, 1041326094, 1041320614);
    InitializeEvent(4, 1041326094, 1041320615);
    InitializeEvent(5, 1041326094, 1041320616);
    InitializeEvent(6, 1041326094, 1041320617);
    
    InitializeEvent(0, 1041326095, 1041320611); // Damage Large Turle upon small Turtle death
    InitializeEvent(1, 1041326095, 1041320612);
    InitializeEvent(2, 1041326095, 1041320613);
    InitializeEvent(3, 1041326095, 1041320614);
    InitializeEvent(4, 1041326095, 1041320615);
    InitializeEvent(5, 1041326095, 1041320616);
    InitializeEvent(6, 1041326095, 1041320617);
    
    // Bell Tripwires
    InitializeEvent(0, 1041322500, 1041321500, 1041322500);
    InitializeEvent(1, 1041322500, 1041321501, 1041322501);
    InitializeEvent(2, 1041322500, 1041321502, 1041322502);
    
    RegisterLadder(1041324810, 1041324811, 1041325811);
    RegisterLadder(1041324810, 1041324811, 1041325812);
    
    InitializeCommonEvent(0, 98005308, 1041330103, 1041330203, 0, 0);
    InitializeCommonEvent(1, 98005308, 1041330228, 1041330227, 0, 0);
    
    InitializeEvent(0, 1041326097, 1041330204);
    InitializeEvent(1, 1041326097, 1041330205);
    InitializeEvent(2, 1041326097, 1041330206);
    InitializeEvent(3, 1041326097, 1041330207);
    InitializeEvent(4, 1041326097, 1041330208);
    InitializeEvent(5, 1041326097, 1041330209);
    InitializeEvent(6, 1041326097, 1041330210);
    InitializeEvent(7, 1041326097, 1041330211);
    InitializeEvent(8, 1041326097, 1041330212);
    InitializeEvent(9, 1041326097, 1041330229);
    InitializeEvent(10, 1041326097, 1041330230);
    
    InitializeEvent(0, 1041326098, 0);
    
    InitializeEvent(0, 1041326099, 1041330213);
    InitializeEvent(1, 1041326099, 1041330214);
    InitializeEvent(2, 1041326099, 1041330215);
    InitializeEvent(3, 1041326099, 1041330216);
    InitializeEvent(4, 1041326099, 1041330217);
    InitializeEvent(5, 1041326099, 1041330218);
    InitializeEvent(6, 1041326099, 1041330219);
    InitializeEvent(7, 1041326099, 1041330220);
    InitializeEvent(8, 1041326099, 1041330221);
    InitializeEvent(9, 1041326099, 1041330222);
    InitializeEvent(10, 1041326099, 1041330223);
    InitializeEvent(11, 1041326099, 1041330224);
    InitializeEvent(12, 1041326099, 1041330225);
    InitializeEvent(13, 1041326099, 1041330226);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041320700, true);
    SetCharacterBackreadState(1041320701, true);
});

// - - - Vanilla - - -
$Event(1041320300, Restart, function() {
    ForceCharacterTreasure(1041320360);
    WaitFor(PlayerIsInOwnWorld() && !EventFlag(1041320321) && InArea(10000, 1041322350));
    SetEventFlagID(1041322320, ON);
});

$Event(1041320301, Restart, function() {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1041322320) && !InArea(10000, 1041322350));
    DisableCharacter(1041320350);
    DisableCharacterCollision(1041320350);
    SetEventFlagID(1041320321, ON);
    SetEventFlagID(1041322320, OFF);
});

// - - - Turtle Camp - - -
// Used EventFlags:
// 1041320690 = Permanently activated when the user approaches the big turtle, turns all turtles red and makes the tiny ones vunerable.
// 1041320691 = Permanently activated when the user completes the puzzle.
// 1041325091 = Temporarily activated when the user approaches the big turtle, used to disable the eating animation loop.
// 1041325092 = Temporarily activated to make the big turtle not be stuck inside the eating animation 3020 if approached a second time.

// Turtle initialization
$Event(1041326090, Restart, function() {
    // Disable SFX so it can be renabled to spawn multiple times
    DeleteMapSFX(1033400704, true);
    
    // Uncomment these to be able to test out the event multiple times. (does not give more items)
    //SetEventFlagID(1041320690, OFF) 
    //SetEventFlagID(1041320691, OFF)
    
    // If event is completed already, skip setup
    GotoIf(L0, EventFlag(1041320691));
    
    // Setup roar bullet
    CreateBulletOwner(1033400709);
    
    // Wait untill the big turtle has been approached at least once
    WaitFor(EventFlag(1041320690));
    
    // Change Turtle color
    SetSpEffect(1041320610, 19052);
    SetSpEffect(1041320611, 19052);
    SetSpEffect(1041320612, 19052);
    SetSpEffect(1041320613, 19052);
    SetSpEffect(1041320614, 19052);
    SetSpEffect(1041320615, 19052);
    SetSpEffect(1041320616, 19052);
    SetSpEffect(1041320617, 19052);
    
    // Make turtles vunerable (except big turtle)
    SetCharacterTeamType(1041320611, TeamType.Enemy);
    SetCharacterTeamType(1041320612, TeamType.Enemy);
    SetCharacterTeamType(1041320613, TeamType.Enemy);
    SetCharacterTeamType(1041320614, TeamType.Enemy);
    SetCharacterTeamType(1041320615, TeamType.Enemy);
    SetCharacterTeamType(1041320616, TeamType.Enemy);
    SetCharacterTeamType(1041320617, TeamType.Enemy);
    
    // Wait untill the puzzle is completed and award the Turtle Shell Shield
    WaitFor(EventFlag(1041320691));
    AwardItemLot(1041320100);
    EndEvent();
    
L0:
    // Kill Big Turtle if event has been completed, this will in turn kill the small turtles because of event 1041326094
    ForceCharacterDeath(1041320610, false);
    EndEvent();
});

// Loop giant turtle eating animation
$Event(1041326091, Restart, function() {
    EndIf(EventFlag(1041320691));
    WaitFor(!EventFlag(1041325091))
    ForceAnimationPlayback(1041320610, 3021, false, false, false);
    WaitFixedTimeFrames(64);
    RestartEvent();
});

// When in range of giant turtle mouth, do ROAR
$Event(1041326092, Restart, function() {
    EndIf(EventFlag(1041320691));
    WaitFor(InArea(10000, 1033400700));
    EndIf(EventFlag(1041320691));
    
    // Disable eating animation loop
    SetEventFlagID(1041325091, ON);
    // Preventative measure in case someone dodges the bullet but moves out, and then moves back in.
    // This could cause the effect to occur while the 'return to eating anim' is on cooldown.
    SetEventFlagID(1041325092, ON);
    
    // Raise head amim
    ForceAnimationPlayback(1041320610, 30003, false, false, false); // Might need Roar inside of animation
    WaitFixedTimeFrames(12);
    
    // Permanently change turtle color and vunerability, see Event 1041326090
    SetEventFlagID(1041320690, ON)
    
    // Keep roaring untill the player is outside the zone
    InitializeEvent(0, 1041326093, 0);
    WaitFor(!InArea(10000, 1033400700));
    
    // Return to eating anim
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(1041320610, 3020, false, false, false);
    // Wait 52 frames or untill the 1041325092 flag is set to ON
    InitializeEvent(1, 1041326096, 1041325092);
    
    // Enable eating animation loop
    SetEventFlagID(1041325091, OFF);
    
    RestartEvent();
});
    
//Roar SFX, Bullet and Sound, loop as long as the player is inside the zone
$Event(1041326093, Restart, function() {
    // Roar sound (attempts)
    //PlaySE(1041320610, SoundType.SFX, 999999002);
    
    // Roar FX
    SpawnMapSFX(1033400704);
    WaitFixedTimeFrames(5);
    DeleteMapSFX(1033400704, true);
    SpawnMapSFX(1033400704);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(1033400704, true);
    
    // Do knockback
    ShootBullet(1033400709, 1033400709, 220, 120, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    
    // Only continue if the player has not left the area yet
    if (InArea(10000, 1033400700))
        RestartEvent();
});

//Kill all small turtles upon Large Turtle's death
$Event(1041326094, Restart, function(X0_4) {
    if (!EventFlag(1041320691)) {
        WaitFor(CharacterDead(1041320610));
        SetEventFlagID(1041320691, ON);
    }
    ForceCharacterDeath(X0_4, false);
});

//When a small Turtle is killed, apply spEffect to Large Turtle, which causes damage
$Event(1041326095, Restart, function(X0_4) {
    EndIf(EventFlag(1041320691));
    WaitFor(CharacterDead(X0_4));
    if (HPRatio(1041320610) >= 0.5) {
        SetSpEffect(1041320610, 4401); // Lower healt 10%
        EndEvent();
    }
    // Instant kill after the last turtle
    WaitFixedTimeSeconds(1.2);
    SetSpEffect(1041320610, 4409); // Lower healt 90%
});

//Wait 52 frames, but break if X0_4 event flag is true
$Event(1041326096, Restart, function(X0_4) {
    SetEventFlagID(X0_4, OFF);
    for (let i = 0; i < 52; i++) {
        WaitFixedTimeFrames(1);
        EndIf(EventFlag(X0_4));
    }
});

$Event(1041326097, Restart, function(X0_4) {
    SetAssetInvulnerability(X0_4, Enabled);
});

$Event(1041326098, Restart, function() {
    WaitFor(InArea(10000, 1041332203));
    WarpPlayer(60, 47, 41, 0, 1047412204, 60);
});

$Event(1041326099, Restart, function(X0_4) {
    SetAssetInvulnerability(X0_4, Enabled);
    DisableMapPart(X0_4);
});

// Bell Tripwire
$Event(1041322500, Restart, function(X0_4, X4_4) {
    WaitFor(
        HasDamageType(X0_4, 20000, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(X0_4, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
