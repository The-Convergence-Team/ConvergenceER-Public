// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76938, 2053461950, 0, 0, 0, 5);
    $InitializeEvent(0, 2053462400);
    $InitializeEvent(0, 2053462401);
    $InitializeEvent(0, 2053462405);
    $InitializeEvent(0, 2053462404);
    InitializeCommonEvent(0, 90005201, 2053460209, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 2053462600);
    $InitializeEvent(0, 2053462700); //walls_collision_setup
    $InitializeEvent(0, 2053462701); //collision_setup
    InitializeCommonEvent(0, 90005250, 2053462120, 2053462121, 0, -1); //enemy_setup_01
    InitializeCommonEvent(0, 90005250, 2053462125, 2053462124, 0, -1); //enemy_setup_02
    // Anti Horse Zone VFX
    InitializeCommonEvent(0, 900005610, 2053461650, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2053461651, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2053461652, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2053461653, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2053461654, 100, 800, 0);
    //Waygate
    InitializeCommonEvent(0, 98005307, 2053461400, 31, 83, 0, 0, 31831500, 2053460600);
});

$Event(2053462700, Restart, function() {
    //walls_collision_setup -> m61_26_23_01 (AEG270_332)
    DisableHit(2053461800);
    DisableHit(2053461801);
    DisableHit(2053461802);
    DisableHit(2053461803);
    DisableHit(2053461804);
    DisableHit(2053461805);
    DisableHit(2053461806);
    DisableHit(2053461807);
    DisableHit(2053461808);
    DisableHit(2053461809);
    DisableHit(2053461810);
    DisableHit(2053461811);
    DisableHit(2053461812);
    DisableHit(2053461813);
    DisableHit(2053461814);
    DisableHit(2053461815);
    DisableHit(2053461816);
    DisableHit(2053461817);
    DisableHit(2053461818);
    DisableHit(2053461819);
    DisableHit(2053461820);
    DisableHit(2053461821);
    DisableHit(2053461822);
    DisableHit(2053461823);
    DisableHit(2053461824);
    DisableHit(2053461825);
    DisableHit(2053461826);
    DisableHit(2053461827);
    DisableHit(2053461828);
    DisableHit(2053461829);
    DisableHit(2053461830);
    DisableHit(2053461831);
    DisableHit(2053461832);
    DisableHit(2053461833);
    DisableHit(2053461834);
    DisableHit(2053461835);
    DisableHit(2053461836);
    DisableHit(2053461837);
    DisableHit(2053461838);
    DisableHit(2053461839);
    DisableHit(2053461840);
    DisableHit(2053461841);
    DisableHit(2053461842);
    DisableHit(2053461843);
    DisableHit(2053461844);
    DisableHit(2053461845);
    DisableHit(2053461846);
    DisableHit(2053461847);
    DisableHit(2053461848);
    DisableHit(2053461849);
    DisableHit(2053461850);
    DisableHit(2053461851);
    DisableHit(2053461852);
    DisableHit(2053461853);
    DisableHit(2053461854);
    DisableHit(2053461855);
    DisableHit(2053461856);
    DisableHit(2053461857);
    DisableHit(2053461858);
    DisableHit(2053461859);
    DisableHit(2053461860);
    DisableHit(2053461861);
    DisableHit(2053461862);
    DisableHit(2053461863);
    DisableHit(2053461864);
    DisableHit(2053461865);
    DisableHit(2053461866);
    DisableHit(2053461867);
    DisableHit(2053461868);
    DisableHit(2053461869);
    DisableHit(2053461870);
    DisableHit(2053461871);
    DisableHit(2053461872);
    DisableHit(2053461873);
    DisableHit(2053461874);
    DisableHit(2053461875);
    DisableHit(2053461876);
    DisableHit(2053461877);
    DisableHit(2053461878);
    DisableHit(2053461879);
    DisableHit(2053461880);
    DisableHit(2053461881);
    DisableHit(2053461882);
    DisableHit(2053461883);
    DisableHit(2053461884);
    DisableHit(2053461885);
    DisableHit(2053461886);
    DisableHit(2053461887);
    DisableHit(2053461888);
    DisableHit(2053461889);
    DisableHit(2053461890);
    DisableHit(2053461891);
    DisableHit(2053461892);
    DisableHit(2053461893);
    DisableHit(2053461894);
    DisableHit(2053461895);
    DisableHit(2053461896);
    DisableHit(2053461897);
    DisableHit(2053461898);
    DisableHit(2053461899);
    DisableHit(2053461900);
    DisableHit(2053461901);
    DisableHit(2053461902);
    DisableHit(2053461903);
    DisableHit(2053461904);
    DisableHit(2053461905);
    DisableHit(2053461906);
    DisableHit(2053461907);
    DisableHit(2053461908);
    DisableHit(2053461910);
    DisableHit(2053461911);
    DisableHit(2053461912);
    DisableHit(2053461913);
    DisableHit(2053461914);
    DisableHit(2053461915);
    DisableHit(2053461916);
    DisableHit(2053461917);
    DisableHit(2053461918);
    DisableHit(2053461919);
    DisableHit(2053461920);
    DisableHit(2053461921);
    DisableHit(2053461922);
    DisableHit(2053461923);
    DisableHit(2053461924);
    DisableHit(2053461925);
    DisableHit(2053461926);
    DisableHit(2053461927);
    DisableHit(2053461928);
    DisableHit(2053461929);
    DisableHit(2053461930);
    DisableHit(2053461931);
    DisableHit(2053461932);
    DisableHit(2053461933);
    DisableHit(2053461934);
    DisableHit(2053461935);
    DisableHit(2053461936);
    DisableHit(2053461937);
    DisableHit(2053461938);
    DisableHit(2053461939);
    DisableHit(2053461940);
    DisableHit(2053461941);
    DisableHit(2053462086);     //large_spreading_cloth
    DisableHit(2053462091);     //stairs_01
    DisableHit(2053462093);     //stairs_02
    DisableHit(2053462102);     //wooden_beam_01
    DisableHit(2053462103);     //wooden_beam_02
    DisableHit(2053462110); //support_beam_01
    DisableHit(2053462111); //support_beam_02
    DisableHit(2053462112); //support_beam_03
    DisableHit(2053462113); //support_beam_04
    DisableHit(2053462114); //support_beam_05
    DisableHit(2053462130);     //gate_collision_01
});

$Event(2053462701, Restart, function() {  
    EnableAssetInvunerability(2053462122); //backtrack_box_01
    EnableAssetInvunerability(2053462137); //backtrack_box_02
    
    RegisterLadder(2053460106,2053460107,2053462106); //ladder
    RegisterLadder(2053460119,2053460120,2053462119); //ladder
});

$Event(2053462400, Restart, function() {
    EndIf(!CharacterHasSpEffect(2053465200, 20011076));
    WaitFor(EventFlag(2053462301));
    GotoIf(S0, 
        CharacterBackreadStatus(2053460201)
            && !CharacterHasSpEffect(2053460201, 20011075)
            && !CharacterDead(2053460201));
    Goto(S1);
S0:
    SetEventFlagID(2053462201, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S1:
    GotoIf(S2, 
        CharacterBackreadStatus(2053460202)
            && !CharacterHasSpEffect(2053460202, 20011075)
            && !CharacterDead(2053460202));
    Goto(S3);
S2:
    SetEventFlagID(2053462202, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S3:
    GotoIf(S4, 
        CharacterBackreadStatus(2053460203)
            && !CharacterHasSpEffect(2053460203, 20011075)
            && !CharacterDead(2053460203));
    Goto(S5);
S4:
    SetEventFlagID(2053462203, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S5:
    GotoIf(S6, 
        CharacterBackreadStatus(2053460204)
            && !CharacterHasSpEffect(2053460204, 20011075)
            && !CharacterDead(2053460204));
    Goto(S7);
S6:
    SetEventFlagID(2053462204, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S7:
    GotoIf(S8, 
        CharacterBackreadStatus(2053460205)
            && !CharacterHasSpEffect(2053460205, 20011075)
            && !CharacterDead(2053460205));
    Goto(S9);
S8:
    SetEventFlagID(2053462205, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S9:
    GotoIf(S10, 
        CharacterBackreadStatus(2053460206)
            && !CharacterHasSpEffect(2053460206, 20011075)
            && !CharacterDead(2053460206));
    Goto(S11);
S10:
    SetEventFlagID(2053462206, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S11:
    GotoIf(S12, 
        CharacterBackreadStatus(2053460207)
            && !CharacterHasSpEffect(2053460207, 20011075)
            && !CharacterDead(2053460207));
    Goto(S13);
S12:
    SetEventFlagID(2053462207, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S13:
    GotoIf(S14, 
        CharacterBackreadStatus(2053460208)
            && !CharacterHasSpEffect(2053460208, 20011075)
            && !CharacterDead(2053460208));
    Goto(S15);
S14:
    SetEventFlagID(2053462208, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S15:
    SetEventFlagID(2053472301, ON);
    SetEventFlagID(2053462301, OFF);
    WaitFixedTimeRealFrames(1);
L0:
    RestartEvent();
});

$Event(2053462401, Restart, function() {
    WaitFor(
        CharacterHasSpEffect(10000, 20011090) && !(!EventFlag(2053462303) || !EventFlag(2053472303)));
    SetEventFlagID(2053462301, ON);
    WaitFor(!CharacterHasSpEffect(10000, 20011090));
    RestartEvent();
});

$Event(2053462404, Restart, function() {
    areaChr = (EntityInRadiusOfEntity(10000, 2053460201, 25, 1)
        && !CharacterDead(2053460201)
        && CharacterAIState(2053460201, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460202, 25, 1)
            && !CharacterDead(2053460202)
            && CharacterAIState(2053460202, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460203, 25, 1)
            && !CharacterDead(2053460203)
            && CharacterAIState(2053460203, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460204, 25, 1)
            && !CharacterDead(2053460204)
            && CharacterAIState(2053460204, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460205, 25, 1)
            && !CharacterDead(2053460205)
            && CharacterAIState(2053460205, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460206, 25, 1)
            && !CharacterDead(2053460206)
            && CharacterAIState(2053460206, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460207, 25, 1)
            && !CharacterDead(2053460207)
            && CharacterAIState(2053460207, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460208, 25, 1)
            && !CharacterDead(2053460208)
            && CharacterAIState(2053460208, AIStateType.Combat));
    if (!areaChr) {
        SetEventFlagID(2053462303, ON);
    }
    if (areaChr) {
        SetEventFlagID(2053462303, OFF);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2053462405, Restart, function() {
    WaitFor(
        EventFlag(2053472200)
            || EventFlag(2053472201)
            || EventFlag(2053472202)
            || EventFlag(2053472205)
            || EventFlag(2053472206)
            || EventFlag(2053472208)
            || EventFlag(2053462201)
            || EventFlag(2053462202)
            || EventFlag(2053462203)
            || EventFlag(2053462204)
            || EventFlag(2053462205)
            || EventFlag(2053462206)
            || EventFlag(2053462207)
            || EventFlag(2053462208));
    if (EventFlag(2053472200)) {
        SetNetworkUpdateAuthority(2053470200, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470200, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470200, 20011073);
    } else if (EventFlag(2053472201)) {
        SetNetworkUpdateAuthority(2053470201, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470201, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470201, 20011073);
    } else if (EventFlag(2053472202)) {
        SetNetworkUpdateAuthority(2053470202, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470202, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470202, 20011073);
    } else if (EventFlag(2053472205)) {
        SetNetworkUpdateAuthority(2053470205, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470205, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470205, 20011073);
    } else if (EventFlag(2053472206)) {
        SetNetworkUpdateAuthority(2053470206, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470206, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470206, 20011073);
    } else if (EventFlag(2053472208)) {
        SetNetworkUpdateAuthority(2053470208, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470208, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470208, 20011073);
    } else if (EventFlag(2053462201)) {
        SetNetworkUpdateAuthority(2053460201, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460201, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460201, 20011073);
    } else if (EventFlag(2053462202)) {
        SetNetworkUpdateAuthority(2053460202, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460202, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460202, 20011073);
    } else if (EventFlag(2053462203)) {
        SetNetworkUpdateAuthority(2053460203, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460203, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460203, 20011073);
    } else if (EventFlag(2053462204)) {
        SetNetworkUpdateAuthority(2053460204, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460204, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460204, 20011073);
    } else if (EventFlag(2053462205)) {
        SetNetworkUpdateAuthority(2053460205, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460205, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460205, 20011073);
    } else if (EventFlag(2053462206)) {
        SetNetworkUpdateAuthority(2053460206, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460206, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460206, 20011073);
    } else if (EventFlag(2053462207)) {
        SetNetworkUpdateAuthority(2053460207, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460207, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460207, 20011073);
    } else if (EventFlag(2053462208)) {
        SetNetworkUpdateAuthority(2053460208, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460208, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460208, 20011073);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(0.2);
    SetNetworkUpdateRate(2053470200, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470201, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470202, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470205, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470206, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470208, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460201, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460202, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460203, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460204, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460205, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460206, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460207, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460208, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateAuthority(2053470200, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470201, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470202, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470205, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470206, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470208, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460201, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460202, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460203, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460204, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460205, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460206, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460207, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460208, AuthorityLevel.Normal);
    SetEventFlagID(2053472200, OFF);
    SetEventFlagID(2053472201, OFF);
    SetEventFlagID(2053472202, OFF);
    SetEventFlagID(2053472205, OFF);
    SetEventFlagID(2053472206, OFF);
    SetEventFlagID(2053472208, OFF);
    SetEventFlagID(2053462201, OFF);
    SetEventFlagID(2053462202, OFF);
    SetEventFlagID(2053462203, OFF);
    SetEventFlagID(2053462204, OFF);
    SetEventFlagID(2053462205, OFF);
    SetEventFlagID(2053462206, OFF);
    SetEventFlagID(2053462207, OFF);
    SetEventFlagID(2053462208, OFF);
    RestartEvent();
});

$Event(2053462600, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(2053460600)) {
        DisableObjAct(2053461600, 52407);
        WaitFixedTimeSeconds(1);
        EndEvent();
    }
    if (PlayerHasItem(ItemType.Goods, 2008008)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && PlayerHasItem(ItemType.Goods, 2008008)
                && ObjActEventFlag(2053463600));
        SetNetworkconnectedEventFlagID(2053460600, ON);
        WaitFixedTimeSeconds(10);
        EndEvent();
    }
L10:
    DisableObjAct(2053461600, 52407);
    WaitFor(PlayerHasItem(ItemType.Goods, 2008008));
    EnableObjAct(2053461600, 52407);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});
