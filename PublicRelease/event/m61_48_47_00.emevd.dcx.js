// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76912, 2048471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005301, 2048470500, 2048470500, 40910, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048470501, 2048470501, 40912, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048470502, 2048470502, 40914, 0, 0);
    InitializeEvent(0, 2048471500, 0); //Miqi Fog Gate
});

$Event(2048470200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

$Event(2048471500, Restart, function() {
    if (EventFlag(2048470510)) {
        DisableAsset(2048471500);
        DisableAsset(2048471501);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2048472550)) {
            DeleteAssetfollowingSFX(2048471500, true);
            CreateAssetfollowingSFX(2048471500, 101, 19);
            DeleteAssetfollowingSFX(2048471501, true);
            CreateAssetfollowingSFX(2048471501, 101, 19);
            SetNetworkconnectedEventFlagID(2048472550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(209504, 2048471500);
        flag = EventFlag(4927);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(2020004, PromptType.YESNO, NumberofOptions.NoButtons, 2048471500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(2048470510, ON);
        DeleteAssetfollowingSFX(2048471500, true);
        DisableAsset(2048471500);
        DeleteAssetfollowingSFX(2048471501, true);
        DisableAsset(2048471501);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(2048471500, true);
    CreateAssetfollowingSFX(2048471500, 101, 19);
    DeleteAssetfollowingSFX(2048471501, true);
    CreateAssetfollowingSFX(2048471501, 101, 19);
    EndEvent();
});
