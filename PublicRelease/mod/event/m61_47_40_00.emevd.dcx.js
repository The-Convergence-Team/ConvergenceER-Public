// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //RegisterBonfire(76961, 2047401950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 2047400300, 2047402300, 0, 3004);
    InitializeCommonEvent(0, 90005211, 2047400400, 30016, 20016, 2047402400, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047400401, 30016, 20016, 2047402400, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047400402, 30016, 20016, 2047402400, 0, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005301, 2047400499, 2047400499, 2047400980, 0, 0);
    InitializeCommonEvent(0, 90005271, 2047400250, 0, -1);
    InitializeCommonEvent(0, 90005271, 2047400252, 0, -1);
    InitializeCommonEvent(0, 90005271, 2047400257, 0, -1);
    InitializeCommonEvent(0, 90005557, 2047401670);
    InitializeCommonEvent(0, 90005557, 2047401671);
    InitializeCommonEvent(0, 90005557, 2047401672);
    InitializeCommonEvent(0, 90005557, 2047401673);
    InitializeCommonEvent(0, 90005557, 2047401674);
    InitializeCommonEvent(0, 90005557, 2047401675);
    InitializeCommonEvent(0, 90005557, 2047401676);
    InitializeCommonEvent(0, 90005557, 2047401677);
    InitializeCommonEvent(0, 90005557, 2047401678);
    InitializeCommonEvent(0, 90005557, 2047401679);
    InitializeCommonEvent(0, 90005556, 2047401689, 2047407900);
    //Erdtree boss fight
    InitializeCommonEvent(0, 90005876, 2047400800, 2047400801, 904810700, 921200); //boss, zone start, msg, ost
    InitializeCommonEvent(0, 90005875, 2047400800, 30710, 921200); //boss death, itemlot, ost
    InitializeCommonEvent(0, 90005890, 2047400800, 2047400801, 2047400801); //Boss Defeat Flag, Zoning Event Flag, Outer Zone
    InitializeCommonEvent(0, 90005891, 2047400800, 2047400801, 2047400802); //Boss Defeat Flag, Zoning Event Flag, Wall Asset
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 2047400925, 2047401925, 2047400800);
    //grace unlock
    InitializeCommonEvent(0, 9005810, 2047400800, 76961, 2047400950, 2047401950, 1084227584);
    InitializeEvent(0, 2047402200, 2047400450, 2047402450, 2047402460, 1073741824);
    InitializeEvent(1, 2047402200, 2047400451, 2047402451, 2047402461, 1073741824);
    InitializeEvent(2, 2047402200, 2047400452, 2047402452, 2047402462, 1073741824);
    InitializeEvent(0, 2047402250, 0); //Monstrous Spider Scorpion sleep check + removal
});

$Event(2047402499, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X0_4)) {
        if (Signed(X16_4) != 0) {
            DisableCharacter(X4_4);
            ForceCharacterTreasure(X4_4);
            EndEvent();
        }
        DisableCharacter(X4_4);
        DisableCharacterCollision(X4_4);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterRatioDead(X4_4));
    WaitFixedTimeSeconds(X12_4);
    SetEventFlagID(X0_4, ON);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(X16_4) == 1);
    AwardItemsIncludingClients(X8_4);
    EndEvent();
});

$Event(2047402200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!CharacterHasSpEffect(X0_4, 20011469)) {
        SetSpEffect(X0_4, 20011469);
    }
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)));
    if (EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
        || InArea(10000, X8_4)
        || (HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260))) {
        SetSpEffect(X0_4, 20011468);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        EndEvent();
    }
L0:
    SetSpEffect(X0_4, 20011467);
    if (!CharacterHasSpEffect(X0_4, 5025)) {
        ForceAnimationPlayback(X0_4, 3000, false, false, false);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

//Monstrous Spider Scorpion sleep check + removal
$Event(2047402250, Restart, function() {
    EndIf(EventFlag(2047400800));
    WaitFor(CharacterHasSpEffect(2047400800, 54) && (HasDamageType(2047400800, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(2047400800, 436)
            || CharacterHasStateInfo(2047400800, 2)
            || CharacterHasStateInfo(2047400800, 5)
            || CharacterHasStateInfo(2047400800, 6)
            || CharacterHasStateInfo(2047400800, 260)))
    ForceAnimationPlayback(2047400800, 12002, false, false, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});
