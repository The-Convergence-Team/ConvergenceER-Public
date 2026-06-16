// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76944, 2044451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 2044450800, 76945, 2044450951, 2044451951, 1084227584);
    InitializeCommonEvent(0, 90005102, 76945, 76945, 2044451981, 77900, 6, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeEvent(0, 2044450800, 0);
    InitializeEvent(0, 2044452810, 0);
    InitializeEvent(0, 2044452811, 0);
    InitializeEvent(0, 2044452849, 0);
    InitializeEvent(0, 2044452820, 0);
    InitializeEvent(0, 2044452821, 0);
    InitializeCommonEvent(0, 90005221, 2044450301, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2044450306, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005501, 2044450510, 2044450511, 0, 2044451510, 2044451511, 2044451512, 2044450512);
    InitializeCommonEvent(0, 90005501, 2044450515, 2044450516, 2, 2044451515, 2044451516, 2044451517, 2044450517);
    InitializeEvent(0, 2044452510, 0);
    InitializeCommonEvent(0, 900005610, 2044451699, 100, 800, 0);
});

$Event(2044450050, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(2044452510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2044450510, 2044450511, 0, 2044451510, 2044451511, 2044453511, 2044451512, 2044453512, 2044452511, 2044452512, 2044450512, 2044450513, 0);
    InitializeCommonEvent(0, 90005500, 2044450515, 2044450516, 2, 2044451515, 2044451516, 2044453516, 2044451517, 2044453517, 2044452516, 2044452517, 2044450517, 2044450518, 0);
});

$Event(2044450800, Default, function() {
    if (EventFlag(2044450800)) {
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(2044450800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2044450800, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(2044450800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(2044450800));
    HandleBossDefeatAndDisplayBanner(2044450800, TextBannerType.LegendFelled);
    SetNetworkconnectedEventFlagID(2044450800, ON);
    SetEventFlagID(9160, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61160, ON);
    }
});

$Event(2044452810, Restart, function() {
    if (EventFlag(2044450800)) {
        DisableCharacter(2044450800);
        DisableCharacterCollision(2044450800);
        ForceCharacterDeath(2044450800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(2044450800);
    EnableCharacterInvincibility(2044450800);
    CreateBulletOwner(2044450820);
    WaitFor(EventFlag(2044452805) && InArea(10000, 2044452800));
L2:
    EnableCharacterAI(2044450800);
    DisableCharacterInvincibility(2044450800);
    SetNetworkUpdateRate(2044450800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2044450800, 0, 905030000);
});

$Event(2044452811, Restart, function() {
    EndIf(EventFlag(2044450800));
    WaitFor(CharacterHasSpEffect(2044450800, 10010050));
    SetEventFlagID(2044452802, ON);
});

$Event(2044452820, Restart, function() {
    EndIf(EventFlag(2044450800));
    WaitFor(CharacterHasSpEffect(2044450800, 20010470));
    if (!EventFlag(70)) {
        GotoIf(S0, !EventFlag(50));
        ShootBullet(2044450820, 2044451820, -1, 804409400, 0, 0, 0);
        Goto(L10);
S0:
        GotoIf(S1, !EventFlag(51));
        ShootBullet(2044450820, 2044451820, -1, 804409410, 0, 0, 0);
        Goto(L10);
S1:
        GotoIf(S2, !EventFlag(52));
        ShootBullet(2044450820, 2044451820, -1, 804409420, 0, 0, 0);
        Goto(L10);
S2:
        GotoIf(S3, !EventFlag(53));
        ShootBullet(2044450820, 2044451820, -1, 804409430, 0, 0, 0);
        Goto(L10);
S3:
        GotoIf(S4, !EventFlag(54));
        ShootBullet(2044450820, 2044451820, -1, 804409440, 0, 0, 0);
        Goto(L10);
S4:
        GotoIf(S5, !EventFlag(55));
        ShootBullet(2044450820, 2044451820, -1, 804409450, 0, 0, 0);
        Goto(L10);
S5:
        GotoIf(S6, !EventFlag(56));
        ShootBullet(2044450820, 2044451820, -1, 804409460, 0, 0, 0);
        Goto(L10);
S6:
        ShootBullet(2044450820, 2044451820, -1, 804409470, 0, 0, 0);
    } else {
L5:
        if (EventFlag(50)) {
            ShootBullet(2044450820, 2044451820, -1, 804419400, 0, 0, 0);
        } else if (EventFlag(51)) {
            ShootBullet(2044450820, 2044451820, -1, 804419410, 0, 0, 0);
        } else if (EventFlag(52)) {
            ShootBullet(2044450820, 2044451820, -1, 804419420, 0, 0, 0);
        } else if (EventFlag(53)) {
            ShootBullet(2044450820, 2044451820, -1, 804419430, 0, 0, 0);
        } else if (EventFlag(54)) {
            ShootBullet(2044450820, 2044451820, -1, 804419440, 0, 0, 0);
        } else if (EventFlag(55)) {
            ShootBullet(2044450820, 2044451820, -1, 804419450, 0, 0, 0);
        } else if (EventFlag(56)) {
            ShootBullet(2044450820, 2044451820, -1, 804419460, 0, 0, 0);
        } else {
            ShootBullet(2044450820, 2044451820, -1, 804419470, 0, 0, 0);
            Goto(L10);
        }
    }
L10:
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

$Event(2044452821, Restart, function() {
    EndIf(EventFlag(2044450800));
    WaitFor(CharacterHasSpEffect(2044450800, 20010471));
    ShootBullet(2044450820, 2044450800, 210, 250300205, 0, 0, 0);
    WaitFixedTimeRealFrames(1);
    RestartEvent();
});

$Event(2044452849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2044450800, 2044451800, 2044452800, 2044452805, 2044455800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2044450800, 2044451800, 2044452800, 2044452805, 2044452806, 10000);
    InitializeCommonEvent(0, 9005811, 2044450800, 2044451800, 5, 0);
    InitializeCommonEvent(0, 9005811, 2044450800, 2044451801, 5, 0);
    InitializeCommonEvent(0, 9005822, 2044450800, 503000, 2044452805, 2044452806, 2044452805, 2044452802, 0, 0);
});


