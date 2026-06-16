// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 21000850, 21000001, 21000951, 21001951, 0);
    RegisterBonfire(21000002, 21001952, 0, 0, 0, 0);
    RegisterBonfire(21000006, 21001956, 0, 0, 0, 0);
    RegisterBonfire(21000007, 21001957, 0, 0, 0, 0);
    RegisterBonfire(21000008, 21001958, 0, 0, 0, 0);
    RegisterBonfire(21000009, 21001959, 0, 0, 0, 0);
    InitializeEvent(0, 21002850, 0);
    InitializeEvent(0, 21002860, 0);
    InitializeEvent(0, 21002861, 0);
    InitializeEvent(0, 21002899, 0);
    InitializeCommonEvent(0, 90005795, 7623, 0, 2048459292, 21002141, 21002142, 2080603, 209053, 21001735, 30010);
    if (CeremonyActive(20)) {
        InitializeCommonEvent(0, 90005799, 7623, 21000735, 5, 21002141, 21002729, 21000736);
    }
    InitializeEvent(0, 21002144, 0);
    InitializeCommonEvent(0, 90005795, 7624, 0, 2048459292, 21012151, 21012152, 2080604, 209054, 21001745, 30000);
    if (CeremonyActive(30)) {
        InitializeCommonEvent(0, 90005798, 7624, 21000745, 7, 21002151, 21002739);
    }
    InitializeEvent(0, 21002154, 0);
    InitializeEvent(0, 21002470, 21000472);
    InitializeEvent(1, 21002470, 21000473);
    InitializeEvent(0, 21002320, 0);
    InitializeEvent(0, 21002450, 0);
    InitializeCommonEvent(0, 90005301, 21000470, 21000470, 21001991, 0, 2);
    InitializeCommonEvent(0, 90005301, 21000471, 21000471, 21001993, 0, 2);
    InitializeCommonEvent(0, 90005301, 21000453, 21000453, 21001995, 0, 2);
    InitializeEvent(0, 21002206, 0);
    InitializeCommonEvent(0, 90005501, 21000510, 21000511, 0, 21001510, 21001511, 21001512, 21000512);
    InitializeCommonEvent(0, 90005501, 21000515, 21000516, 0, 21001515, 21001516, 21001517, 21000517);
    InitializeCommonEvent(0, 90005501, 21000520, 21000521, 0, 21001520, 21001521, 21001522, 21000522);
    InitializeCommonEvent(0, 90005501, 21000525, 21000526, 1, 21001525, 21001526, 21001527, 21000527);
    InitializeCommonEvent(0, 90005501, 21000530, 21000531, 0, 21001530, 21001531, 21001532, 21000532);
    InitializeCommonEvent(0, 90005501, 21000535, 21000536, 0, 21001535, 21001536, 21001537, 21000537);
    InitializeCommonEvent(0, 21002515, 21001521);
    InitializeCommonEvent(1, 21002515, 21001531);
    InitializeEvent(0, 21002510, 0);
    InitializeEvent(0, 21002520, 0);
    InitializeCommonEvent(0, 90005511, 21000560, 21001560, 21003560, -1, 0);
    InitializeCommonEvent(0, 90005512, 21000560, 21002560, 21002561);
    InitializeCommonEvent(0, 90005510, 21008562, 21001562, 21003562, 1427027, 20208036, 0);
    InitializeCommonEvent(0, 90005525, 21000570, 21001570);
    InitializeCommonEvent(0, 90005525, 21000572, 21001572);
    InitializeEvent(0, 21002580, 0);
    InitializeCommonEvent(0, 90005615, 21002690, 21009230);
    InitializeEvent(0, 21002600, 580120, 21001600, 80120);
    InitializeCommonEvent(0, 90005780, 21000850, 21002160, 21002161, 21000700, 20, 21002160, 2048459220, 1, 0);
    InitializeCommonEvent(0, 90005781, 21000850, 21002160, 21002161, 21000700);
    InitializeEvent(0, 21002890, 21002160, 21002855, 21000700, 21002850, 21002859, 0);
    InitializeCommonEvent(0, 90005780, 21000850, 21002164, 21002165, 21000720, 20, 21002164, 2046429373, 1, 0);
    InitializeCommonEvent(0, 90005781, 21000850, 21002164, 21002165, 21000720);
    InitializeEvent(1, 21002890, 21002164, 21002855, 21000720, 21002850, 21002859, 0);
    InitializeEvent(0, 21000700, 21000710, 4340, 4341, 4342, 4343, 4345, 4346, 4860, 4358, 21002707, 21002706, 21009211, 90103, 1110704128, 90100, 21009230);
    InitializeCommonEvent(0, 90005750, 21001711, 4350, 106910, 400692, 400692, 21009213, 0);
    InitializeEvent(0, 21000701, 21009208, 21002710, 21002705);
    InitializeEvent(0, 21000702, 21002710, 21002711, 21002712, 21000710, 711, 21001710, 711, 1045220557, 90212, -1, -1, 1066192077, 1075419546, 21009220, 21002715, 21009222, 1028443341, 21009210, 90213, 21009211);
    InitializeEvent(0, 21000703, 21002713, 21002714, 21002712, 21000710, 90202, 1, -1, 9600, 0, 21009210, 90201, 21009211);
    InitializeEvent(0, 21000704, 21002715, 21009221, 1028443341);
    InitializeEvent(0, 21000705, 21000710, 21009214, 21009212, 90205, 21009210, 90203, 21009211, 21009212, 1078774989, 21009213, 106900, 21009230);
    InitializeEvent(0, 21000706, 21009210, 21002706, 21009212, 21002707);
    InitializeEvent(0, 21000711, 7623, 4363, 4360, 4364, 4892, 2048459220);
    InitializeEvent(0, 21000712, 21000735, 21002744, 7623);
    InitializeEvent(0, 21000714, 21002728, 21000730, 21002726, 7623);
    InitializeEvent(1, 21000714, 21002745, 21000735, 21002746, 7623);
    InitializeCommonEvent(0, 90005769, 21000735, 21002743, 21000730, 21002722, 21002729, 7623, 7624);
    InitializeCommonEvent(0, 90005776, 400614, 7623, 116100);
    InitializeEvent(0, 21000735, 21000735, 21000730, 20);
    InitializeEvent(1, 21000712, 21000745, 21002735, 7624);
    InitializeEvent(2, 21000714, 21002758, 21000740, 21002757, 7624);
    InitializeEvent(3, 21000714, 21002737, 21000745, 21002736, 7624);
    InitializeCommonEvent(0, 90005769, 21000745, 21002732, 21000740, 21002752, 21002739, 7623, 7624);
    InitializeCommonEvent(0, 90005776, 400594, 7624, 105920);
    InitializeEvent(1, 21000735, 21000745, 21000740, 30);
    InitializeEvent(0, 21000725, 2048459220, 21010800, 21019205, 4898);
    InitializeCommonEvent(0, 90005706, 21000750, 30010, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 21000050, 0);
    InitializeEvent(0, 21002500, 0);
    InitializeCommonEvent(0, 90005221, 21000200, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000201, 30001, 20001, 21002201, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000202, 30001, 20001, 21002201, 1065353216, 1050253722, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000203, 30001, 20001, 0, 1);
    InitializeCommonEvent(0, 90005261, 21000204, 21002204, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000205, 21002205, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005251, 21000207, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000208, 30003, 20003, 21002208, 1065353216, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000209, 21002240, 1065353216, 1050253722, 0);
    InitializeCommonEvent(0, 90005211, 21000210, 30002, 20002, 21002210, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000211, 21002210, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000212, 30001, 20001, 21002212, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000213, 21002212, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000214, 21002246, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000240, 21002240, 1065353216, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 21000241, 21002241, 1065353216, 0, 3000);
    InitializeCommonEvent(0, 90005261, 21000242, 21002242, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000244, 21002244, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000246, 21002246, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000282, 21002283, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000283, 21002283, 1065353216, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 21000284, 21002284, 1065353216, 0, 3001);
    InitializeCommonEvent(0, 90005211, 21000285, 30000, 20000, 21002285, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000287, 21002287, 1065353216, 0, 3001);
    InitializeCommonEvent(0, 90005261, 21000288, 21002287, 1065353216, 1053609165, 3001);
    InitializeCommonEvent(0, 90005211, 21000290, 30000, 20000, 21002290, 1056964608, 1056964608, 1, 0, 0, 0);
    InitializeEvent(0, 21002292, 21000292, 21002292);
    InitializeEvent(0, 21002292, 21000293, 21002293);
    InitializeEvent(0, 21002292, 21000294, 21002294);
    InitializeCommonEvent(0, 90005221, 21000260, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000261, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000262, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000263, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000264, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000265, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000266, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000267, 30006, 20006, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000450, 21002450, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000451, 21002451, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000452, 21002452, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000453, 21002320, 1065353216, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 21000454, 21002454, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000300, 30002, 20002, 21002300, 1065353216, 1056964608, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000301, 30001, 20001, 21002300, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000303, 30001, 20001, 21002302, 1065353216, 1060320051, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000304, 30002, 20002, 21002302, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000305, 30001, 20001, 21002305, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000306, 30001, 20001, 21002306, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000307, 30001, 20001, 21002305, 1065353216, 1065353216, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000315, 30000, 20000, 21002320, 1065353216, 1073741824, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000316, 30001, 20001, 21002320, 1065353216, 1083179008, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000317, 30002, 20002, 21002320, 1065353216, 1078355558, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000318, 30000, 20000, 21002320, 1065353216, 1074580685, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000340, 30001, 20001, 21002306, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000350, 21002350, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000351, 21002351, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000352, 21002351, 1065353216, 0, 3022);
    InitializeCommonEvent(0, 90005211, 21000355, 30000, 20000, 21002355, 1077936128, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000356, 30000, 20000, 21002356, 1077936128, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000368, 21002368, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000369, 21002368, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 21000370, 21002368, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 21000380, 30001, 20001, 21002380, 1077936128, 1060320051, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 21000381, 30000, 20000, 0, 0);
    InitializeCommonEvent(0, 90005261, 21000382, 21002382, 1065353216, 0, 3014);
    InitializeCommonEvent(0, 90005211, 21000470, 30002, 20002, 21002470, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000471, 30002, 20002, 21002471, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000472, 30002, 20002, 21002472, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21000473, 30002, 20002, 21002473, 1065353216, 1036831949, 1, 0, 0, 0);
});

$Event(21000050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(21000525, ON);
});

$Event(21002144, Restart, function() {
    EndIf(!CeremonyActive(20));
    DisableCharacterHPBarDisplay(21000736);
    SetEventFlagID(1099002100, OFF);
    SetBossBGM(943000, BossBGMState.Start);
    WaitFor(CharacterRatioDead(21000735));
    SetBossBGM(943000, BossBGMState.Stop1);
});

$Event(21002154, Restart, function() {
    EndIf(!CeremonyActive(30));
    SetEventFlagID(1099002100, OFF);
    SetBossBGM(943000, BossBGMState.Start);
    WaitFor(CharacterRatioDead(21000745));
    SetBossBGM(943000, BossBGMState.Stop1);
});

$Event(21002206, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(21000206);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(21000206, 481)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90110)
        && !CharacterHasSpEffect(21000206, 90160);
    sp2 = CharacterHasSpEffect(21000206, 482)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90120)
        && !CharacterHasSpEffect(21000206, 90160)
        && !CharacterHasSpEffect(21000206, 90162);
    sp3 = CharacterHasSpEffect(21000206, 483)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90140)
        && !CharacterHasSpEffect(21000206, 90160)
        && !CharacterHasSpEffect(21000206, 90161);
    sp4 = CharacterHasSpEffect(21000206, 484)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90130)
        && !CharacterHasSpEffect(21000206, 90161)
        && !CharacterHasSpEffect(21000206, 90162);
    sp5 = CharacterHasSpEffect(21000206, 487)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90150)
        && !CharacterHasSpEffect(21000206, 90160);
    area = InArea(10000, 21002206) || InArea(10000, 21002207);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(21000206, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(21000206, 436)
            || CharacterHasStateInfo(21000206, 2)
            || CharacterHasStateInfo(21000206, 5)
            || CharacterHasStateInfo(21000206, 6)
            || CharacterHasStateInfo(21000206, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (InArea(10000, 21002206)) {
        ForceAnimationPlayback(21000206, 3010, false, false, false);
    }
    EnableCharacterAI(21000206);
});

$Event(21002292, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    EndIf(!EventFlag(21008540));
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
});

$Event(21002320, Restart, function() {
    if (CharacterDead(21000453) && EventFlag(21002320)) {
        DisableCharacter(21005320);
        DisableCharacterCollision(21005320);
        DisableGenerator(21003320);
        DisableGenerator(21003321);
        DisableGenerator(21003322);
        EndEvent();
    }
L0:
    if (!EventFlag(21002320)) {
        DisableCharacter(21005320);
        DisableCharacterCollision(21005320);
    }
    DisableGenerator(21003320);
    DisableGenerator(21003321);
    DisableGenerator(21003322);
    WaitFor(EventFlag(124) && InArea(10000, 21002320));
    WaitFixedTimeSeconds(5);
    EnableGenerator(21003320);
    EnableGenerator(21003321);
    EnableGenerator(21003322);
    EnableCharacter(21005320);
    EnableCharacterCollision(21005320);
    WaitFor(
        CharacterDead(21000453)
            || !InArea(10000, 21002320)
            || CharacterAIState(21000453, AIStateType.Combat, NotEqual, 1));
    RestartEvent();
});

$Event(21002450, Restart, function() {
    WaitFor(EventFlag(124) && InArea(10000, 21002320));
    WaitFixedTimeSeconds(2);
    hp &= CharacterRatioHPRatio(21000453) == 100;
    EndIf(hp);
    ForceAnimationPlayback(21000453, 20000, false, false, false);
    WaitFixedTimeSeconds(5);
    hp &= CharacterRatioHPRatio(21000453) == 100;
    EndIf(hp);
    ForceAnimationPlayback(21000453, 3028, false, false, false);
});

$Event(21002470, Restart, function(X0_4) {
    if (ThisEventSlot() || EventFlag(124)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        EndEvent();
    }
L0:
    EnableCharacterImmortality(X0_4);
    WaitFor(
        EventFlag(124)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    if (!EventFlag(124)) {
        ForceAnimationPlayback(X0_4, 20003, false, true, false);
    }
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(21002500, Restart, function() {
    DisableCharacterCollision(21000509);
    DisableCharacterGravity(21000509);
    DisableLockOnPoint(21000509, 220);
    SetCharacterTeamType(21000509, TeamType.Disabled);
    DisableCharacterAI(21000509);
    if (EventFlag(124)) {
        DisableObjAct(21001500, -1);
        ForceAnimationPlayback(21001500, 12, false, false, false);
        DisableAssetInvunerability(21001502);
        DisableAsset(21006500);
        DisableHit(21007500);
        WarpAssetToCharacter(21001509, 21000509, -1);
        ReproduceAssetAnimation(21001509, 10);
        EnableCharacter(21005500);
        WaitFixedTimeSeconds(1);
        EnableCharacter(21005470);
        EndEvent();
    }
L0:
    DisableCharacter(21005500);
    DisableCharacter(21005470);
    EnableAssetInvunerability(21001502);
    WaitFor(PlayerIsInOwnWorld() && ObjActEventFlag(21003500));
    SetNetworkconnectedEventFlagID(124, ON);
    SetNetworkconnectedEventFlagID(9021, ON);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(21000020, CutscenePlayMode.Skippable, 21002500, 21000000, 10000, 21000000, false);
    } else {
        PlayCutsceneToPlayer(21000020, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    DisableAssetInvunerability(21001502);
    DisableAsset(21006500);
    DisableHit(21007500);
    WarpAssetToCharacter(21001509, 21000509, -1);
    ReproduceAssetAnimation(21001509, 10);
    EnableCharacter(21005500);
    WaitFixedTimeSeconds(1);
    EnableCharacter(21005470);
});

$Event(21002505, Restart, function() {
    DisableNetworkSync();
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9710, 21001576));
    WaitFixedTimeSeconds(0.1);
    SetEventFlagID(9021, ON);
    SetPlayerRespawnPoint(2049472020);
    SaveRequest();
    PlayCutsceneToPlayerAndWarp(21000000, CutscenePlayMode.Skippable, 2049472020, 61494700, 10000, 21000000, false);
    WaitFixedTimeRealFrames(1);
    PlayCutsceneToPlayer(21000010, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeFrames(1);
    WaitFixedTimeSeconds(1);
});

$Event(21002510, Default, function() {
    InitializeCommonEvent(0, 90005500, 21000510, 21000511, 0, 21001510, 21001511, 21003511, 21001512, 21003512, 21002511, 21002512, 21000512, 21000513, 0);
    InitializeCommonEvent(0, 90005500, 21000515, 21000516, 0, 21001515, 21001516, 21003516, 21001517, 21003517, 21002516, 21002517, 21000517, 21000518, 0);
    InitializeCommonEvent(0, 90005500, 21000520, 21000521, 0, 21001520, 21001521, 21003521, 21001522, 21003522, 21002521, 21002522, 21000522, 21000523, 0);
    InitializeCommonEvent(0, 90005500, 21000525, 21000526, 1, 21001525, 21001526, 21003526, 21001527, 21003527, 21002526, 21002527, 21000527, 21000528, 0);
    InitializeCommonEvent(0, 90005500, 21000530, 21000531, 0, 21001530, 21001531, 21003531, 21001532, 21003532, 21002531, 21002532, 21000532, 21000533, 0);
    InitializeCommonEvent(0, 90005500, 21000535, 21000536, 0, 21001535, 21001536, 21003536, 21001537, 21003537, 21002536, 21002537, 21000537, 21000538, 0);
});

$Event(21002515, Restart, function(X0_4) {
    DisableNetworkSync();
    if (EventFlag(124)) {
        EnableObjAct(X0_4, -1);
        EndEvent();
    }
    WaitFixedTimeFrames(2);
    DisableObjAct(X0_4, -1);
    WaitFor(ActionButtonInArea(8301, X0_4) || EventFlag(124));
    if (!EventFlag(124)) {
        DisplayGenericDialog(4000, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 3);
    }
    RestartEvent();
});

$Event(21002520, Restart, function() {
    DisableNetworkSync();
    if (EventFlag(21000850)) {
        EnableObjAct(21001540, -1);
    } else {
        WaitFixedTimeFrames(1);
        DisableObjAct(21001540, -1);
        flagOnlineAct &= EventFlag(21000850);
        WaitFor(flagOnlineAct);
        EnableObjAct(21001540, -1);
    }
L0:
    flagOnlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(7101, 21001540);
    WaitFor(flagOnlineAct || EventFlag(21008540));
    EndIf(EventFlag(21008540));
    DisplayGenericDialog(4010, PromptType.OKCANCEL, NumberofOptions.OneButton, 21001540, 3);
    RestartEvent();
});

$Event(21002580, Restart, function() {
    RegisterLadder(21000580, 21000581, 21001580);
    RegisterLadder(21000582, 21000583, 21001582);
    RegisterLadder(21000584, 21000585, 21001584);
    RegisterLadder(21000586, 21000587, 21001586);
});

$Event(21002600, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    DeleteAssetfollowingSFX(X4_4, false);
    CreateAssetfollowingSFX(X4_4, 200, 806845);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9310, X4_4));
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 806841);
    WaitFixedTimeSeconds(0.1);
    AwardItemsIncludingClients(X8_4);
});

$Event(21002850, Restart, function() {
    EndIf(EventFlag(21000850));
    WaitFor(CharacterHPValue(21000850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(21000850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(21000850));
    HandleBossDefeatAndDisplayBanner(21000850, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(21000850, ON);
    SetEventFlagID(9144, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61144, ON);
    }
});

$Event(21002860, Restart, function() {
    if (EventFlag(21000850)) {
        DisableCharacter(21005850);
        DisableCharacterCollision(21005850);
        ForceCharacterDeath(21005850, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(21005850);
    EnableCharacterInvincibility(21005850);
    if (!EventFlag(21000851)) {
        SetSpEffect(21000100, 9531);
        ForceAnimationPlayback(21000850, 30000, false, false, false);
        DisableCharacterCollision(21000850);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 21002851))
                || HasDamageType(21000850, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(21000851, ON);
        ForceAnimationPlayback(21000850, 20000, false, false, false);
        EnableCharacterCollision(21000850);
    } else {
L1:
        ForceAnimationPlayback(21000850, 30000, false, false, false);
        DisableCharacterCollision(21000850);
        WaitFor(EventFlag(21002855) && InArea(10000, 21002850));
        ForceAnimationPlayback(21000850, 20000, false, false, false);
        EnableCharacterCollision(21000850);
    }
L2:
    EnableCharacterAI(21005850);
    DisableCharacterInvincibility(21005850);
    SetNetworkUpdateRate(21005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(21000100, 9532);
    WaitFixedTimeSeconds(0.5);
    DisplayBossHealthBar(Enabled, 21000850, 0, 905010000);
});

$Event(21002861, Restart, function() {
    EndIf(EventFlag(21000850));
    WaitFor(CharacterHasSpEffect(21000850, 10010050));
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(21002852, ON);
});

$Event(21002890, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X0_4) && EventFlag(X4_4));
    if (!InArea(X8_4, 21002890)) {
        RequestCharacterAICommand(X8_4, 10, 0);
        RequestCharacterAIReplan(X8_4);
        SetEventPoint(X8_4, X16_4, 0);
        WaitFor(InArea(X8_4, X16_4));
        if (Signed(X20_4) != 0) {
            RotateCharacter(X8_4, X12_4, X20_4, true);
        } else {
            RotateCharacter(X8_4, X12_4, 60060, true);
        }
        time = ElapsedSeconds(3);
        WaitFor(time || InArea(X8_4, X12_4));
        RestartIf(time.Passed);
        RequestCharacterAICommand(X8_4, -1, 0);
        RequestCharacterAIReplan(X8_4);
        SetNetworkUpdateRate(X8_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    }
L10:
    EndEvent();
});

$Event(21002899, Restart, function() {
    InitializeCommonEvent(0, 9005800, 21000850, 21001850, 21002850, 21002855, 21005850, 10000, 21000851, 21002851);
    InitializeCommonEvent(0, 9005801, 21000850, 21001850, 21002850, 21002855, 21002856, 10000);
    InitializeCommonEvent(0, 9005811, 21000850, 21001850, 5, 21000851);
    InitializeCommonEvent(0, 9005822, 21000850, 920600, 21002855, 21002856, 0, 21002852, 0, 0);
    InitializeCommonEvent(0, 9005812, 21000850, 21001851, 5, 21000851, 0);
    InitializeCommonEvent(0, 9005812, 21000850, 21001852, 5, 21000851, 0);
});

$Event(21000700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    SetEventFlagID(X60_4, OFF);
    if (!EventFlag(X24_4)) {
        WaitFor(EventFlag(X24_4) || (EventFlag(X20_4) && EventFlag(X28_4)));
        if (EventFlag(X28_4)) {
            SetEventFlagID(X32_4, ON);
            WaitFixedTimeFrames(1);
        }
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X4_4));
    GotoIf(L2, EventFlag(X8_4));
    GotoIf(L3, EventFlag(X12_4));
    GotoIf(L4, EventFlag(X16_4));
L1:
    EndIf(EventFlag(X36_4) && EventFlag(X40_4));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetEventFlagID(X60_4, ON);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    EnableCharacterInvincibility(X0_4);
    WaitFor(CharacterBackreadStatus(X0_4));
    ResetCharacterPosition(X0_4);
    GotoIf(S0, !(EventFlag(X36_4) && EventFlag(X44_4)));
    ForceAnimationPlayback(X0_4, X48_4, false, false, false);
    Goto(L20);
S0:
    SetCharacterTalkRange(X0_4, X52_4);
    ForceAnimationPlayback(X0_4, X56_4, false, false, false);
    Goto(L20);
L2:
    Goto(L20);
L3:
    Goto(L20);
L4:
    Goto(L20);
L20:
    WaitFor(!EventFlag(X24_4));
    RestartEvent();
});

$Event(21000701, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(InArea(20000, X4_4) || EventFlag(X0_4) || EventFlag(X8_4));
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X8_4));
    SetEventFlagID(X8_4, ON);
    EndEvent();
});

$Event(21000702, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_2, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4, X72_4, X76_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X60_4, OFF);
    WaitFor(EventFlag(X0_4));
    if (Signed(X16_4) != 0) {
        GotoIf(L0, X20_4 == 0);
        WarpAssetToCharacter(X20_4, X12_4, X24_2);
        WaitFixedTimeRealFrames(1);
        area &= EntityInRadiusOfEntity(10000, X20_4, X28_4, 1);
        GotoIf(S0, !area);
        SetEventFlagID(X4_4, ON);
        SetEventFlagID(X60_4, ON);
        Goto(L15);
S0:
        GotoIf(S1, 
            !(EntityInRadiusOfEntity(10000, X20_4, X44_4, 1)
                && EntityInRadiusOfEntity(10000, X12_4, X44_4, 1)));
        SetEventFlagID(X4_4, ON);
        SetEventFlagID(X60_4, ON);
        Goto(L15);
S1:
        RotateCharacter(10000, X20_4, -1, true);
        RotateCharacter(10000, X20_4, 90006, false);
        Goto(L8);
    }
L0:
    RotateCharacter(10000, X12_4, -1, true);
    area &= EntityInRadiusOfEntity(10000, X12_4, X28_4, 1);
    GotoIf(L9, area);
    RotateCharacter(10000, X12_4, 90006, false);
    Goto(L8);
L8:
    SetEventFlagID(X52_4, ON);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(X52_4, OFF);
    sp = !CharacterHasSpEffect(10000, 9900);
    flagTime = !EventFlag(X0_4) || ElapsedSeconds(X48_4);
    spFlagTimeArea |= sp || flagTime;
    if (Signed(X16_4) != 0) {
        GotoIf(S2, X20_4 == 0);
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, X20_4, X28_4, 1);
    } else {
S2:
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, X12_4, X28_4, 1);
    }
    WaitFor(spFlagTimeArea);
    if (!sp.Passed) {
        if (!flagTime.Passed) {
L9:
            SetEventFlagID(X4_4, ON);
            if (Signed(X16_4) != 0) {
                RequestCharacterAnimationReset(10000, Disabled);
                GotoIf(S3, EventFlag(X60_4));
                RotateCharacter(10000, X12_4, -1, true);
                RotateCharacter(10000, X12_4, X32_4, false);
                Goto(S4);
            }
S3:
            Goto(L15);
S4:
            SetEventFlagID(X56_4, ON);
            WaitFixedTimeSeconds(X64_4);
L15:
            if (X8_4 != 0) {
                SetEventFlagID(X8_4, ON);
            }
            if (Signed(X16_4) != 0) {
                IssueShortWarpRequest(10000, TargetEntityType.Character, X12_4, X16_4);
            }
            if (Signed(X40_4) != -1) {
                RotateCharacter(10000, X12_4, X32_4, false);
                Goto(S5);
            }
            GotoIf(S6, !EventFlag(X68_4));
S5:
            RotateCharacter(10000, X12_4, X32_4, true);
S6:
            if (EventFlag(X76_4)) {
                RotateCharacter(10000, X12_4, X72_4, true);
            }
            Goto(L8);
L8:
            WaitFixedTimeRealFrames(1);
            sp2 = !CharacterHasSpEffect(10000, 9900);
            WaitFor(!EventFlag(X0_4) || sp2);
            if (!sp2.Passed) {
                if (Signed(X36_4) != -1) {
                    if (Signed(X40_4) != -1) {
                        sp3 = !CharacterHasSpEffect(10000, 9900);
                        WaitFor(CharacterHasSpEffect(10000, X40_4) || sp3);
                        GotoIf(L20, sp3.Passed);
                    }
L10:
                    SetEventFlagID(X4_4, OFF);
                    ForceAnimationPlayback(10000, X36_4, false, true, false);
                    RestartEvent();
                }
L18:
                SetEventFlagID(X4_4, OFF);
                RestartEvent();
            }
        }
L19:
        SetEventFlagID(X0_4, OFF);
        ForceAnimationPlayback(10000, 0, false, false, false);
        RestartEvent();
    }
L20:
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(21000703, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (X8_4 != 0) {
        cond &= EventFlag(X8_4);
    }
    cond &= EventFlag(X0_4);
    WaitFor(cond);
    SetEventFlagID(X4_4, ON);
    if (X8_4 != 0) {
        SetEventFlagID(X8_4, OFF);
    }
    if (X20_4 != 1) {
        if (Signed(X28_4) != -1) {
            if (EventFlag(X36_4)) {
                ForceAnimationPlayback(X12_4, X16_4, false, false, false);
            }
            if (EventFlag(X44_4)) {
                ForceAnimationPlayback(X12_4, X40_4, false, false, false);
            }
            Goto(S0);
        }
        GotoIf(S1, !EventFlag(X36_4));
S0:
        ForceAnimationPlayback(X12_4, X16_4, false, false, false);
S1:
        if (EventFlag(X44_4)) {
            ForceAnimationPlayback(X12_4, X40_4, false, false, false);
        }
    } else {
L0:
        if (Signed(X28_4) != -1) {
            if (EventFlag(X36_4)) {
                RotateCharacter(X12_4, 10000, X16_4, false);
            }
            if (EventFlag(X44_4)) {
                RotateCharacter(X12_4, 10000, X40_4, false);
            }
            Goto(S2);
        }
        GotoIf(S3, !EventFlag(X36_4));
S2:
        RotateCharacter(X12_4, 10000, X16_4, false);
S3:
        if (EventFlag(X44_4)) {
            RotateCharacter(X12_4, 10000, X40_4, false);
        }
        Goto(L10);
    }
L10:
    cond &= !EventFlag(X0_4);
    if (Signed(X28_4) != -1) {
        cond &= CharacterHasSpEffect(X12_4, X28_4);
    }
    WaitFor(cond);
    if (Signed(X24_4) != -1) {
        SetEventFlagID(X4_4, OFF);
        WaitFixedTimeSeconds(X32_4);
        RestartEvent();
    }
L19:
    SetEventFlagID(X4_4, OFF);
    WaitFixedTimeSeconds(X32_4);
    RestartEvent();
L20:
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(21000704, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X0_4));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(X8_4);
L0:
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(21000705, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    if (!EventFlag(X8_4)) {
        WaitFor(EventFlag(X4_4));
        if (EventFlag(X16_4)) {
            ForceAnimationPlayback(X0_4, X12_4, false, false, false);
        }
        if (EventFlag(X24_4)) {
            ForceAnimationPlayback(X0_4, X20_4, false, false, false);
        }
        SetEventFlagID(X28_4, ON);
        WaitFixedTimeSeconds(X32_4);
        if (EventFlag(X16_4)) {
            DisableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, true);
            AwardItemLot(X40_4);
            SetEventFlagID(X44_4, OFF);
        }
    }
L1:
    if (EventFlag(X24_4)) {
        SetEventFlagID(X36_4, ON);
    }
    WaitFor(!EventFlag(X4_4) || EventFlag(X8_4));
    RestartIf(!EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
});

$Event(21000706, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4) && EventFlag(X12_4));
    if (EventFlag(X0_4)) {
        SetNetworkconnectedEventFlagID(X4_4, ON);
    }
    if (EventFlag(X8_4)) {
        SetNetworkconnectedEventFlagID(X12_4, ON);
    }
    RestartIf(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4));
});

$Event(21000711, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(X4_4) && EventFlag(X0_4));
    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X16_4, OFF);
    SetNetworkconnectedEventFlagID(X20_4, OFF);
    SaveRequest();
    SetEventFlagID(4378, ON);
});

$Event(21000712, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X8_4));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) && !CharacterDead(X0_4));
    SetEventFlagID(X4_4, ON);
});

$Event(21000714, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X12_4));
    WaitFor(CharacterHPValue(10000) <= 0 || CharacterHPValue(X4_4) <= 0);
    if (CharacterHPValue(10000) <= 0) {
        SetEventFlagID(X0_4, ON);
    }
    if (CharacterHPValue(X4_4) <= 0) {
        SetEventFlagID(X8_4, ON);
    }
});

$Event(21000725, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4));
    SetEventFlagID(X0_4, OFF);
    EndEvent();
});

$Event(21000735, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!CeremonyActive(X8_4));
    WaitFor(CharacterHPValue(X0_4) <= 0 || CharacterDead(X0_4));
    DisableCharacterAI(X4_4);
});


