// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 1044530810, 1044530000, 1044530950, 1044531950, 1084227584); //guardian grace
    InitializeCommonEvent(0, 90005870, 1044530800, 904980605, 24);
    InitializeCommonEvent(0, 90005860, 1044530800, 0, 1044530800, 0, 1044530300, 0);
    //Erdtree Warps - Enemy, Obj, Guardian
    InitializeCommonEvent(0, 9005995, 1044530750, 1044530725, 1044530810)
    //Erdtree Boss
    InitializeCommonEvent(0, 90005876, 1044530810, 1044530811, 904810657, 920900);
    InitializeCommonEvent(0, 90005875, 1044530810, 1044530200, 920900);
    InitializeCommonEvent(0, 90005890, 1044530810, 1044530811, 1044530811);
    InitializeCommonEvent(0, 90005891, 1044530810, 1044530811, 1044530812);
    //InitializeCommonEvent(0, 90005870, 1044530801, 904810603, 18);
    //InitializeCommonEvent(0, 90005251, 1044530801, 1101004800, 0, 0);
    InitializeEvent(0, 1044532206, 1044530400);
    InitializeEvent(1, 1044532206, 1044530401);
    InitializeEvent(2, 1044532206, 1044530402);
    InitializeEvent(3, 1044532206, 1044530403);
    InitializeEvent(4, 1044532206, 1044530404);
    InitializeEvent(5, 1044532206, 1044530405);
    InitializeEvent(0, 1044530815, 0);
    InitializeEvent(0, 98005303, 1044530811, 1044530813);
    InitializeEvent(0, 98005304, 1044530811, 1044530813);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1044530450, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530400, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530401, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530402, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530403, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530404, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    //InitializeCommonEvent(0, 90005200, 1044530405, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530200, 30014, 20014, 1106247680, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530201, 30014, 20014, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530220, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530223, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530224, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530225, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530226, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530227, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530213, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530217, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530231, 30016, 20016, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530232, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530233, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530234, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530205, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530206, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530237, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530800, 30000, 20000, 1106247680, 0, 0, 0, 0, 0);
});

$Event(1044532206, Restart, function(X0_4) {
    if (EventFlag(1044530810)) {
        DisableCharacter(X0_4);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
    DisableCharacterAI(X0_4);
    EnableCharacterInvincibility(X0_4);
    WaitFor(InArea(10000, 1044530811));
    DisableCharacterInvincibility(X0_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedSeconds(6) || 
        HasDamageType(X0_4, 10000, DamageType.Unspecified) || HasDamageType(1044530810, 10000, DamageType.Unspecified) || 
        EntityInRadiusOfEntity(X0_4, 10000, 4, 1) || EntityInRadiusOfEntity(1044530810, 10000, 4, 1));
    EnableCharacterAI(X0_4);
    WaitFor(EventFlag(1044530810));
    ForceCharacterDeath(X0_4, false);
});

$Event(1044530815, Restart, function() {
    EndIf(EventFlag(1044530810));
    WaitFor(HPRatio(1044530810) <= 0.6);
    SetSpEffect(1044530810, 16517);
    SetSpEffect(1044530810, 16515);
    WaitFixedTimeFrames(118);
    ClearSpEffect(1044530810, 16515);
});
