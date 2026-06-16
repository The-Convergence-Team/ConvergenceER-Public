// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //InitializeCommonEvent(0, 9005810, 12040800, 71240, 12040950, 12041950, 1084227584);
    RegisterBonfire(12040000, 12041950, 0, 0, 0, 5);
    InitializeEvent(0, 12042680, 0);
    InitializeEvent(0, 12042400, 0);
    InitializeEvent(0, 12042849, 0);
    InitializeEvent(0, 12042800, 0);
    InitializeEvent(0, 12042810, 0);
});

$Event(12042400, Default, function() {
    if (EventFlag(114)) {
        DisableAsset(12041400);
        EndEvent();
    }
L0:
    GotoIf(S0, PlayerIsInOwnWorld());
    Goto(L10);
S0:
    if (!ThisEventSlot()) {
        DeleteMapSFX(12041400, true);
        CreateAssetfollowingSFX(12041400, 101, 1507);
    }
    WaitFor((PlayerIsInOwnWorld() && ActionButtonInArea(9506, 12041400)) || EventFlag(114));
    if (!EventFlag(114)) {
        if (PlayerIsInOwnWorld()) {
            DisplayGenericDialog(20006, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
        }
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    DeleteMapSFX(12041400, true);
    DisableAsset(12041400);
    EndEvent();
L10:
    DeleteMapSFX(12041400, true);
    CreateAssetfollowingSFX(12041400, 101, 1507);
    WaitFor(EventFlag(114));
    DeleteMapSFX(12041400, true);
    DisableAsset(12041400);
    EndEvent();
});

$Event(12042680, Restart, function() {
    DisableNetworkSync();
    if (!ThisEventSlot()) {
        DeleteMapSFX(12043680, false);
    }
    WaitFor(
        (!PlayerInMap(12, 4, -1, -1) && InArea(10000, 12042680))
            || (PlayerInMap(12, 4, -1, -1) && !InArea(10000, 1034412680)));
    SpawnMapSFX(12043680);
    WaitFixedTimeSeconds(1);
    WaitFor(
        (PlayerInMap(12, 4, -1, -1) && InArea(10000, 1034412680))
            || (!PlayerInMap(12, 4, -1, -1) && !InArea(10000, 12042680)));
    DeleteMapSFX(12043680, true);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(12042800, Default, function() {
    EndIf(EventFlag(12040800));
    WaitFor(HPRatio(12040800) <= 0);
    WaitFixedTimeSeconds(5);
    PlaySE(12040800, SoundType.SFX, 77777777);
    WaitFor(CharacterDead(12040800));
    HandleBossDefeatAndDisplayBanner(12040800, TextBannerType.LegendFelled);
    SetEventFlagID(12040800, ON);
    SetEventFlagID(9108, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61108, ON);
    }
});

$Event(12042810, Restart, function() {
    if (EventFlag(12040800)) {
        DisableCharacter(12040800);
        DisableCharacterCollision(12040800);
        ForceCharacterDeath(12040800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12040800);
    EnableCharacterInvincibility(12040800);
    ModifyNavimeshConnectionBitflag(12044300, NavimeshType.Solid, BitopType.Add);
    ModifyNavimeshConnectionBitflag(12044301, NavimeshType.Solid, BitopType.Add);
    WaitFor(EventFlag(12042805) && InArea(10000, 12042800));
L2:
    EnableCharacterAI(12040800);
    DisableCharacterInvincibility(12040800);
    SetNetworkUpdateRate(12040800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 12040800, 0, 904620001);
    SetCharacterEventTarget(12040800, 12040810);
});

$Event(12042849, Default, function() {
    InitializeCommonEvent(0, 9005811, 12040800, 12041801, 8, 0);
    InitializeCommonEvent(0, 9005800, 12040800, 12041800, 12042800, 12042805, 12045800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 12040800, 12041800, 12042800, 12042805, 12042806, 10000);
    InitializeCommonEvent(0, 9005811, 12040800, 12041800, 8, 0);
    InitializeCommonEvent(0, 9005822, 12040800, 920700, 12042805, 12042806, 0, 12042802, 0, 0);
});
