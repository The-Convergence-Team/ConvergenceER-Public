// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    DisableAsset(15001702);
    InitializeCommonEvent(0, 9005810, 15000800, 15000000, 15000950, 15001950, 0);
    InitializeCommonEvent(0, 9005810, 15000850, 15000005, 15000955, 15001955, 0);
    RegisterBonfire(15000001, 15001951, 0, 0, 0, 8);
    RegisterBonfire(15000002, 15001952, 0, 0, 0, 8);
    RegisterBonfire(15000003, 15001953, 0, 0, 0, 8);
    RegisterBonfire(15000004, 15001954, 0, 0, 0, 8);
    RegisterBonfire(15000006, 15001956, 0, 0, 0, 8);
    RegisterBonfire(15000007, 15001957, 0, 0, 0, 8);
    RegisterBonfire(15000008, 15001958, 0, 0, 0, 8);
    InitializeEvent(0, 15002800, 0);
    InitializeEvent(0, 15002810, 0);
    InitializeEvent(0, 15002811, 0);
    InitializeEvent(0, 15002820, 15000802, 3030, 18451);
    InitializeEvent(1, 15002820, 15000803, 3031, 18452);
    InitializeEvent(2, 15002820, 15000804, 3032, 18453);
    InitializeEvent(3, 15002820, 15000805, 3033, 18454);
    InitializeEvent(0, 15002830, 18410, 18420);
    InitializeEvent(1, 15002830, 18411, 18421);
    InitializeEvent(2, 15002830, 18412, 18422);
    InitializeEvent(3, 15002830, 18413, 18423);
    InitializeEvent(4, 15002830, 18414, 18424);
    InitializeEvent(5, 15002830, 18415, 18425);
    InitializeEvent(6, 15002830, 18416, 18426);
    InitializeEvent(7, 15002830, 18417, 18427);
    InitializeEvent(8, 15002830, 18418, 18428);
    InitializeEvent(9, 15002830, 18419, 18429);
    InitializeEvent(0, 15002848, 18031, 2122);
    InitializeEvent(0, 15002849, 0);
    InitializeEvent(0, 15002850, 0);
    InitializeEvent(0, 15002860, 0);
    InitializeEvent(0, 15002861, 0);
    InitializeEvent(0, 15002899, 0);
    InitializeCommonEvent(0, 90005300, 15000395, 15000395, 108600, 0, 0); //NPC DEATH ITEM REWARD
    InitializeCommonEvent(0, 20000345, 15004001, 15002002); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004002, 15002003); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004003, 15002004); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004004, 15002005); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004005, 15002006); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004006, 15002007); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004007, 15002008); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004008, 15002009); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004009, 15002010); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004010, 15002011); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004013, 15002012); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004012, 15002013); // Collision Removal when in box
    InitializeCommonEvent(0, 20000345, 15004013, 15002014); // Collision Removal when in box
    InitializeCommonEvent(0, 90005511, 15004920, 15002920, 15002921, 99020, 0); //door1
    InitializeCommonEvent(0, 90005512, 15004920, 15003921, 15003922); //door1    
    InitializeCommonEvent(1, 90005511, 15004921, 15002922, 15002923, 99020, 0); //door2
    InitializeCommonEvent(1, 90005512, 15004921, 15003923, 15003924); //door2
    InitializeCommonEvent(2, 90005511, 15004922, 15002924, 15002925, 99020, 0); //door3
    InitializeCommonEvent(2, 90005512, 15004922, 15003925, 15003926); //door3
    InitializeCommonEvent(0, 90005795, 7610, 0, 15009208, 15002141, 15002142, 80610, 9060, 15001705, 30000);
    if (CeremonyActive(20)) {
        InitializeCommonEvent(0, 90005797, 7610, 15005706, 7, 15002142, 4823);
    }
    InitializeEvent(0, 15002145, 0);
    InitializeCommonEvent(0, 90005795, 7611, 0, 15009209, 15002151, 15002152, 80611, 9061, 15001706, 30010);
    if (CeremonyActive(30)) {
        InitializeCommonEvent(0, 90005796, 7611, 15000702, 5, 15002151);
    }
    //NPC: Squilla
    InitializeCommonEvent(0, 90005250, 15000389, 15002389, 0, -1);
    InitializeCommonEvent(0, 90005300, 15000389, 15000389, 108600, 0, 0);
    InitializeEvent(0, 15002155, 0);
    InitializeCommonEvent(0, 90005300, 15000390, 15000390, 15001250, 0, 0);
    InitializeCommonEvent(0, 90005300, 15000391, 15000391, 15001260, 0, 0);
    InitializeCommonEvent(0, 90005300, 15000392, 15000392, 15001270, 0, 0);
    InitializeCommonEvent(0, 90005300, 15000393, 15000393, 15001280, 0, 0);
    InitializeCommonEvent(0, 90005300, 15000394, 15000394, 15001290, 0, 0);
    InitializeCommonEvent(0, 90005300, 15000398, 15000398, 15001200, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000495, 30000, 20000, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 15000497, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005221, 15000498, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000400, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000401, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000402, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000418, 30000, 20000, 15002418, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000403, 30000, 20000, 15002403, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000404, 30000, 20000, 15002404, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000405, 30000, 20000, 15002404, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000406, 30000, 20000, 15002404, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000414, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000415, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000431, 30000, 20000, 15002403, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000360, 15002360, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000361, 30005, 20005, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000362, 30005, 20005, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000363, 30002, 20002, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000364, 15002364, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000365, 30001, 20001, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000366, 15002387, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000367, 15002387, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005251, 15000368, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000369, 15002369, 1065353216, 1050253722, 3008);
    InitializeCommonEvent(0, 90005261, 15000371, 15002371, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005201, 15000372, 30004, 20004, 1068708659, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000380, 15002380, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000381, 15002381, 1036831949, 0, -1);
    InitializeCommonEvent(0, 90005201, 15000382, 30005, 20005, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000383, 15002383, 1036831949, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000387, 30001, 20001, 15002387, 1065353216, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000340, 15002340, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000450, 15002450, 1065353216, 0, 3021);
    InitializeCommonEvent(0, 90005261, 15000451, 15002450, 1065353216, 1045220557, 3021);
    InitializeCommonEvent(0, 90005261, 15000452, 15002450, 1065353216, 1045220557, 3021);
    InitializeCommonEvent(0, 90005261, 15000453, 15002450, 1065353216, 1036831949, 3021);
    InitializeCommonEvent(0, 90005221, 15000454, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000455, 15002455, 1065353216, 0, 3037);
    InitializeCommonEvent(0, 90005261, 15000456, 15002456, 1065353216, 0, 3037);
    InitializeCommonEvent(0, 90005221, 15000457, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000458, 30006, 20006, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000459, 30006, 20006, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000470, 15002470, 1065353216, 0, 3037);
    InitializeCommonEvent(0, 90005261, 15000471, 15002470, 1065353216, 1056964608, 3037);
    InitializeCommonEvent(0, 90005211, 15000330, 30000, 20000, 15002330, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000331, 30000, 20000, 15002331, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000332, 30000, 20000, 15002332, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000334, 30000, 20000, 15002334, 1065353216, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000202, 30005, 20005, 15002202, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005213, 15000203, 30002, 20002, 15002203, 1065353216, 1056964608, 0, 0, 0, 0, 15000204, 1056964608);
    InitializeCommonEvent(0, 90005213, 15000204, 30001, 20001, 15002203, 1065353216, 0, 1, 1, 1, 0, 15000203, 1065353216);
    InitializeCommonEvent(0, 90005211, 15000205, 30002, 20002, 15002205, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000206, 30002, 20002, 15002206, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000207, 30002, 20002, 15002206, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000208, 30003, 20003, 15002208, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000209, 30001, 20001, 15002208, 1065353216, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000210, 30005, 20005, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000212, 30005, 20005, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000216, 30002, 20002, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 15000217, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000218, 30004, 20004, 15002218, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000219, 30003, 20003, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000221, 15002221, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000222, 15002221, 1065353216, 1036831949, -1);
    InitializeCommonEvent(0, 90005261, 15000226, 15002226, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000227, 15002227, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000228, 30002, 20002, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000229, 30002, 20002, 0, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 15000233, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000234, 30003, 20003, 15002234, 1065353216, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000235, 30005, 20005, 15002235, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000236, 30003, 20003, 15002236, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000238, 30005, 20005, 15002238, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000250, 30003, 20003, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000251, 30002, 20002, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000252, 30002, 20002, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000255, 30003, 20003, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 15000256, 30004, 20004, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 15000257, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005250, 15000258, 15002258, 0, -1);
    InitializeCommonEvent(0, 90005250, 15000259, 15002258, 0.2, -1);
    InitializeCommonEvent(0, 90005261, 15000260, 15002260, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000261, 15002260, 1065353216, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 15000262, 15002260, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000263, 15002260, 1065353216, 1050253722, -1);
    InitializeCommonEvent(0, 90005211, 15000266, 30010, 20010, 15002266, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000270, 30000, 20000, 15002270, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000272, 30000, 20000, 15002272, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000273, 30000, 20000, 15002273, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000274, 30000, 20000, 15002274, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000275, 15002275, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000276, 15002275, 1065353216, 0, -1);
    InitializeEvent(0, 15002310, 15000310, 15000344);
    InitializeEvent(1, 15002310, 15000311, 15000345);
    InitializeEvent(2, 15002310, 15000312, 15000346);
    InitializeCommonEvent(0, 90005211, 15000322, 30000, 20000, 15002322, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000323, 30000, 20000, 15002323, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000324, 30000, 20000, 15002324, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000326, 30001, 20001, 15002326, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000327, 30001, 20001, 15002327, 1065353216, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000328, 30001, 20001, 15002327, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000329, 30001, 20001, 15002327, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000344, 15002344, 1065353216, 1050253722, 30002);
    InitializeCommonEvent(0, 90005261, 15000345, 15002345, 1065353216, 1050253722, 30002);
    InitializeCommonEvent(0, 90005261, 15000346, 15002346, 1065353216, 0, 30002);
    InitializeEvent(0, 15002344, 15000344, 15003344);
    InitializeEvent(1, 15002344, 15000345, 15003345);
    InitializeEvent(2, 15002344, 15000346, 15003346);
    InitializeCommonEvent(0, 90005261, 15000280, 15002280, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000281, 15002281, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000282, 15002282, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000295, 30000, 20001, 0, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000296, 15002296, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000297, 30000, 20001, 0, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000298, 30000, 20001, 0, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000299, 30000, 20001, 0, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000283, 15002283, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000284, 15002284, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000285, 15002285, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000287, 15002280, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000288, 30002, 20005, 15002288, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000289, 30000, 20001, 15002288, 1065353216, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000290, 30000, 20001, 15002288, 1065353216, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000291, 30002, 20005, 15002281, 1065353216, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000292, 15002292, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000293, 15002291, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005201, 15000582, 30001, 20001, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000583, 30001, 20001, 15002275, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000584, 30001, 20001, 15002275, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000585, 30000, 20000, 15002278, 1065353216, 1036831949, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000586, 30000, 20000, 15002278, 1065353216, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000587, 30000, 20000, 15002278, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000589, 30001, 20001, 15002275, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 15000300, 15002300, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000356, 15002356, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000515, 15002356, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000516, 15002356, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000517, 15002356, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 15000392, 15002392, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005211, 15000398, 30002, 20002, 15002398, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005501, 15000520, 15001520, 0, 15001520, 15001521, 15001522, 15000521);
    InitializeCommonEvent(0, 90005501, 15000525, 15001525, 0, 15001525, 15001526, 15001527, 15000526);
    InitializeEvent(0, 15002520, 0);
    InitializeCommonEvent(0, 90005501, 15000620, 15001620, 0, 15001620, 15001621, 15001622, 15000621);
    InitializeCommonEvent(0, 90005501, 15000625, 15001625, 0, 15001625, 15001626, 15001627, 15000626);
    InitializeEvent(0, 15002620, 0);
    InitializeCommonEvent(0, 90005620, 15000570, 15001570, 15001571, 0, 15002570, 15002571, 15002572);
    InitializeCommonEvent(0, 90005621, 15000570, 15001573);
    InitializeCommonEvent(0, 90005620, 15000575, 15001575, 15001576, 0, 15002575, 15002576, 15002577);
    InitializeCommonEvent(0, 90005621, 15000575, 15001578);
    InitializeEvent(0, 15002580, 0);
    InitializeEvent(0, 15002680, 0);
    InitializeEvent(0, 15000700, 0);
    InitializeEvent(0, 15000701, 0);
    InitializeEvent(0, 15000702, 15001702, 15001703);
    InitializeEvent(0, 15000710, 15000700);
    InitializeCommonEvent(0, 90005704, 15000700, 4181, 4180, 15002901, 3);
    InitializeCommonEvent(0, 90005703, 15000700, 4181, 4182, 15002901, 1059481190, 4180, 4184, -1);
    InitializeCommonEvent(0, 90005702, 15000700, 4183, 4180, 4184);
    InitializeEvent(0, 15000711, 15000703);
    InitializeCommonEvent(0, 90005708, 15000703, 4180, 0);
    InitializeCommonEvent(0, 90005702, 15000703, 4183, 4180, 4184);
    InitializeCommonEvent(0, 90005750, 15001701, 4350, 103210, 400321, 400321, 4192, 0);
    InitializeCommonEvent(0, 90005752, 15001704, 200, 120, 1077936128);
    InitializeEvent(0, 15000712, 15001700);
    InitializeEvent(0, 15000713, 15001703);
    InitializeEvent(0, 15000715, 0);
    InitializeEvent(0, 15000716, 0);
    InitializeEvent(0, 15002144, 0);
    InitializeCommonEvent(0, 90005774, 7611, 103220, 400323);
    InitializeCommonEvent(0, 90005774, 7610, 104800, 400480);
    InitializeCommonEvent(0, 90005211, 15000717, 30005, 20005, 15002578, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 15000718, 30004, 20004, 0, 1065353216, 0, 0, 0, 0, 0); //kneeling soldier in lower area
    InitializeCommonEvent(0, 90005211, 15000719, 30004, 20004, 15002579, 1065353216, 0, 0, 0, 0, 0); //kaboom 1
  // bubble blowing parkour guy
  InitializeCommonEvent(0, 90005261, 15000720, 15002720, 1065353216, 0, 3005);
  // bubble blowing guys 2
  InitializeCommonEvent(0, 90005261, 15000721, 15002721, 1065353216, 0, 3005);
  InitializeCommonEvent(0, 90005250, 15000722, 15002722, 0, -1); //3some 1
  InitializeCommonEvent(0, 90005250, 15000723, 15002722, 0, -1); //3some 2
  InitializeCommonEvent(0, 90005250, 15000724, 15002722, 0, -1); //3some 2
  InitializeCommonEvent(0, 90005250, 15000725, 15002725, 0, -1); //Scaly 1
  InitializeCommonEvent(0, 90005211, 15000726, 30001, 20001, 0, 1065353216, 0 ,0 ,0 ,0, 0); // Standoff 1
  InitializeCommonEvent(0, 90005250, 15000727, 15002727, 0, -1); //Taunt 1
  InitializeCommonEvent(0, 90005211, 15000728, 30002, 20002, 0, 1065353216, 0 ,0 ,0 ,0, 0); // Taunt 2
  InitializeCommonEvent(0, 90005250, 15000729, 15002729, 0, -1); //Taunt 3
  InitializeCommonEvent(0, 90005250, 15000730, 15002730, 0, -1); //Page Boo
  InitializeCommonEvent(0, 90005250, 15000731, 15002731, 0, -1); //Axe Walk
  InitializeCommonEvent(0, 90005250, 15000732, 15002732, 0, 3020); //Omen KICKA attack (funny)
  InitializeCommonEvent(0, 90005250, 15000733, 15002733, 0, -1); //Misbegotten Upper Activation 1
  InitializeCommonEvent(0, 90005250, 15000734, 15002733, 0, -1); //Misbegotten Upper Activation 1
  InitializeCommonEvent(0, 90005250, 15000735, 15002735, 0, -1); //Page Lower Town Activation 1
  InitializeCommonEvent(0, 90005250, 15000736, 15002735, 0, -1); //Page Lower Town Activation 2
  InitializeCommonEvent(0, 90005250, 15000737, 15002737, 0, -1); //Misbegotten Upper Activation 1
  InitializeCommonEvent(0, 90005250, 15000738, 15002737, 0, -1); //Misbegotten Upper Activation 1
  InitializeCommonEvent(0, 90005250, 15000739, 15002737, 0, -1); //Misbegotten Upper Activation 1
  InitializeCommonEvent(0, 90005250, 15000740, 15002740, 0, -1); //walk 1
  InitializeCommonEvent(0, 90005250, 15000741, 15002740, 0, -1); //walk 1
  InitializeCommonEvent(0, 90005250, 15000742, 15002742, 0, -1); //Misbegotten Upper Activation 2
  InitializeCommonEvent(0, 90005250, 15000743, 15002743, 0, 3020); //Storeroom Ambush
  InitializeCommonEvent(0, 90005250, 15000744, 15002743, 0, 3020); //Storeroom Ambush
});

$Event(50, Default, function() {
    SetCharacterBackreadState(15000700, true);
    SetCharacterBackreadState(15000701, true);
    SetCharacterBackreadState(15000702, true);
    SetCharacterBackreadState(15000703, true);
    SetCharacterBackreadState(15000705, true);
    SetCharacterBackreadState(15000706, true);
    SetCharacterBackreadState(15000707, true);
    SetCharacterBackreadState(15000708, true);
    SetCharacterBackreadState(15000709, true);
    SetCharacterBackreadState(15000710, true);
    SetCharacterBackreadState(15000711, true);
    SetCharacterBackreadState(15000712, true);
    InitializeEvent(0, 15000050, 0);
    InitializeEvent(4, 15002200, 15000204, 15001204);
    InitializeEvent(9, 15002200, 15000209, 15001209);
    InitializeEvent(0, 15002550, 0);

});

$Event(15000050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(15000525, ON);
    SetEventFlagID(15000625, ON);
});

//NPC ENCOUNTER
$Event(15002144, Restart, function() {
    DisableCharacter(15000395);
    EndIf(EventFlag(15000395));
    WaitFor(InArea(10000, 15002395));
    SpawnOneshotSFX(TargetEntityType.Character, 15000395, 237, 525032);
    EnableCharacter(15000395);
});

$Event(15002145, Restart, function() {
    EndIf(!CeremonyActive(20));
    SetCharacterBackreadState(15000701, false);
    SetCharacterBackreadState(15000706, false);
    SetCharacterBackreadState(15000708, false);
    SetCharacterBackreadState(15000710, false);
    SetCharacterBackreadState(15000712, false);
    SetCharacterTeamType(15000701, TeamType.Human);
    SetCharacterTeamType(15000706, TeamType.Enemy);
    SetCharacterTeamType(15000708, TeamType.Enemy);
    SetCharacterTeamType(15000710, TeamType.Enemy);
    SetCharacterTeamType(15000712, TeamType.Enemy);
    CreateAssetfollowingSFX(15001710, 200, 806700);
});

$Event(15002155, Restart, function() {
    EndIf(!CeremonyActive(30));
    SetCharacterBackreadState(15000702, false);
    SetCharacterBackreadState(15000705, false);
    CreateAssetfollowingSFX(15001710, 200, 806700);
});

$Event(15002200, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    EnableAssetInvunerability(X4_4);
    WaitFixedTimeSeconds(0.1);
    WaitFor(!CharacterHasSpEffect(X0_4, 5080));
    DisableAssetInvunerability(X4_4);
});

$Event(15002310, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterDead(X4_4));
    ForceCharacterDeath(X0_4, false);
});

$Event(15002344, Restart, function(X0_4, X4_4) {
    DisableGenerator(X4_4);
    WaitFor(!CharacterDead(X0_4) && CharacterHasSpEffect(X0_4, 15007));
    EnableGenerator(X4_4);
    WaitFor(!(!CharacterDead(X0_4) && CharacterHasSpEffect(X0_4, 15007)));
    DisableGenerator(X4_4);
});

$Event(15002520, Default, function() {
    InitializeCommonEvent(0, 90005500, 15000520, 15001520, 0, 15001520, 15001521, 15003521, 15001522, 15003522, 15002521, 15002522, 15000521, 15002522, 15000523);
    InitializeCommonEvent(0, 90015502, 15000523, 15001521, 15002522);
    InitializeCommonEvent(0, 90005500, 15000525, 15001525, 0, 15001525, 15001526, 15003526, 15001527, 15003527, 15002526, 15002527, 15000526, 15002527, 0);
});

$Event(15002620, Default, function() {
    InitializeCommonEvent(0, 90005500, 15000620, 15001620, 0, 15001620, 15001621, 15003621, 15001622, 15003622, 15002621, 15002622, 15000621, 15002622, 15000623);
    InitializeCommonEvent(0, 90005502, 15000623, 15001621, 15002622);
    InitializeCommonEvent(0, 90005500, 15000625, 15001625, 0, 15001625, 15001626, 15003626, 15001627, 15003627, 15002626, 15002627, 15000626, 15002627, 0);
});

$Event(15002550, Restart, function() {
    EnableAssetInvunerability(15001550);
    EnableAssetInvunerability(15001551);
    EnableAssetInvunerability(15001552);
    DisableMapPart(15001450); //in use
    DisableMapPart(15001451); //in use
    DisableMapPart(15001452); //in use
    DisableHit(15001453); //in use
    DisableHit(15001454); //
    DisableHit(15001455); //
    DisableMapPart(15001456); //
    DisableMapPart(15001457); //
    DisableMapPart(15001458); //
    DisableMapPart(15001459); //
    DisableMapPart(15001460); // 
    DisableMapPart(15001461); //
    DisableMapPart(15001462); //
    DisableHit(15001463); //
    DisableHit(15001464); //
    DisableMapPart(15001465); //
    DisableMapPart(15001466); //
    DisableMapPart(15001467); //
    DisableMapPart(15001468); //
    DisableMapPart(15001469); //
    DisableMapPart(15001470);//
    DisableMapPart(15001471);//
    DisableMapPart(15001472);//
    DisableMapPart(15001473);//
    DisableMapPart(15001474);//
    DisableMapPart(15001475);//
    DisableMapPart(15001476);//
    DisableMapPart(15001477);//
    DisableMapPart(15001478);//
    DisableMapPart(15001479);//
    DisableHit(15001480);// 
    DisableHit(15001481);// 
    DisableMapPart(15001482);//
    DisableMapPart(15001483);//
    DisableHit(15001484); //
    DisableHit(15001485); //
    DisableHit(15001486); //
    DisableMapPart(15001487); //
    EnableAssetInvunerability(15001488);//
    DisableMapPart(15001489); //
    DisableHit(15001490); //
    EnableAssetInvunerability(15001491);//
    DisableHit(15001492); //
    DisableHit(15001493); //
    DisableHit(15001494); //
    DisableHit(15001495); //
    DisableHit(15001496); //
    DisableHit(15001497); //
    DisableMapPart(15001498); //
    DisableMapPart(15001499); //
    DisableMapPart(15001500); //
    DisableHit(15001501); //
    DisableHit(15001502); //
    DisableHit(15001503); //
    DisableMapPart(15001504); //
    DisableMapPart(15001505); //
    DisableHit(15001506); //
    DisableHit(15001507); //
    DisableHit(15001508); //
    DisableHit(15001509); //
    DisableHit(15001510); //
    DisableHit(15001511); //
    DisableHit(15001512); //
    DisableHit(15001513); // 
    DisableMapPart(15001514); //
    DisableHit(15001515); // 
    DisableMapPart(15001516); //
    DisableMapPart(15001517); //
    DisableMapPart(15001518); //
    DisableMapPart(15001519); //
    DisableMapPart(15001523); //
    DisableMapPart(15001524); //
    DisableMapPart(15001715); //
    DisableHit(15001716); // 
    DisableHit(15001717); // 
    DisableMapPart(15001718); //
    DisableMapPart(15001719); //
    DisableMapPart(15001723); //
    DisableMapPart(15001724); //
    EnableAssetInvunerability(15001725); //
    EnableAssetInvunerability(15001726); //
    DisableMapPart(15001727); //
    DisableMapPart(15001728); //
    DisableMapPart(15001729); //
    DisableMapPart(15001730); //
    DisableMapPart(15001731); //
    DisableHit(15001732); //
    DisableHit(15001733); //
    DisableMapPart(15001734); //
    EnableAssetInvunerability(15001735); //
    DisableMapPart(15001736); //
    DisableMapPart(15001737); //
    DisableMapPart(15001738); //
    DisableHit(15001739); //
    DisableHit(15001740); //
    DisableHit(15001741); //
    DisableHit(15001742); //
    DisableHit(15001743); //
    DisableHit(15001744); //
    DisableHit(15001745); //
    DisableHit(15001746); //
    DisableHit(15001747); //
    DisableHit(15001748); //
    DisableMapPart(15001749); //
    DisableHit(15001750); //
    DisableHit(15001751); //
    DisableMapPart(15001752); //
    DisableMapPart(15001753); //
    DisableMapPart(15001754); //
    EnableAssetInvunerability(15001755); //
    DisableMapPart(15001756); //
    DisableMapPart(15001757); //
    DisableMapPart(15001759); //
    DisableMapPart(15001758); //
    DisableMapPart(15001759); //
    
    EnableAssetInvunerability(15001760); //
    
    DisableMapPart(15001761); //
    EnableAssetInvunerability(15001762); //
    //15001763 in use
    EnableAssetInvunerability(15001763); //
    EnableAssetInvunerability(15001764); //
    EnableAssetInvunerability(15001765); //
    EnableAssetInvunerability(15001766); //
    EnableAssetInvunerability(15001767); //
    EnableAssetInvunerability(15001768); //
    EnableAssetInvunerability(15001769); //
    EnableAssetInvunerability(15001770); //
    DisableMapPart(15001771); //
    DisableMapPart(15001772); //
    DisableMapPart(15001773); //
    DisableHit(15001774);//
    DisableHit(15001775);//
    DisableHit(15001776);//
    DisableHit(15001777);//
    DisableHit(15001778);//
    DisableHit(15001779);//
    DisableMapPart(15001780); //
    DisableMapPart(15001781); //
    DisableMapPart(15001782); //
    DisableMapPart(15001783); //
    DisableMapPart(15001784); //
});

$Event(15002580, Restart, function() {
    RegisterLadder(15000580, 15000581, 15001580);
    RegisterLadder(15000582, 15000583, 15001582);
    RegisterLadder(15000584, 15000585, 15001584);
    RegisterLadder(15000586, 15000587, 15001586);
    RegisterLadder(15000588, 15000589, 15001588);
    RegisterLadder(15000590, 15000591, 15001590);
    RegisterLadder(15000592, 15000593, 15001592);
});

$Event(15002680, Restart, function() {
    RegisterLadder(15000680, 15000681, 15001680);
    RegisterLadder(15000682, 15000683, 15001682);
    RegisterLadder(15000684, 15000685, 15001684);
    RegisterLadder(15000686, 15000687, 15001686);
    RegisterLadder(15000688, 15000689, 15001688);
    RegisterLadder(15000690, 15000691, 15001690);
    RegisterLadder(15000692, 15000693, 15001692);
    RegisterLadder(15000694, 15000695, 15001694);
    RegisterLadder(15000696, 15000697, 15001696);
    RegisterLadder(15000698, 15000699, 15001698);
    
});

$Event(15002800, Restart, function() {
    EndIf(EventFlag(15000800));
    WaitFor(CharacterHPValue(15000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(15008000, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(15000800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(15000800));
    HandleBossDefeatAndDisplayBanner(15000800, TextBannerType.DemigodFelled);
    if (PlayerIsInOwnWorld()) {
        TriggerMultiplayerEvent(0);
    }
    ChangeCamera(-1, -1);
    SetNetworkconnectedEventFlagID(15000800, ON);
    SetEventFlagID(9120, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61120, ON);
    }
});

$Event(15002810, Restart, function() {
    if (EventFlag(15000800)) {
        DisableCharacter(15005800);
        DisableCharacterCollision(15005800);
        ForceCharacterDeath(15005800, false);
        EnableAssetTreasure(15001810);
        DisableAsset(15001820);
        EndEvent();
    }
L0:
    DisableCharacterAI(15005800);
    EnableCharacterInvincibility(15005800);
    EnableCharacterImmortality(15000800);
    DisableCharacter(15000801);
    DisableCharacterCollision(15000801);
    EnableLockOnPoint(0, -1);
    DisableCharacter(15000802);
    DisableCharacterCollision(15000802);
    EnableLockOnPoint(15000802, 220);
    DisableCharacter(15000803);
    DisableCharacterCollision(15000803);
    EnableLockOnPoint(15000803, 220);
    DisableCharacter(15000804);
    DisableCharacterCollision(15000804);
    EnableLockOnPoint(15000804, 220);
    DisableCharacter(15000805);
    DisableCharacterCollision(15000805);
    EnableLockOnPoint(15000805, 220);
    DisableAssetTreasure(15001810);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3)
            || CharacterType(10000, TargetType.BluePhantom));
    if (!EventFlag(15000801)) {
        SetSpEffect(15000800, 5402);
        DisableCharacterCollision(15000800);
        DisableCharacterGravity(15000800);
        ChangeCharacterDispmask(15000800, 0, OFF);
        ChangeCharacterDispmask(15000800, 12, OFF);
        ChangeCharacterDispmask(15000800, 13, OFF);
        ForceAnimationPlayback(15000800, 30000, false, false, false);
        WaitFor(EventFlag(15002805) && InArea(10000, 15002800));
        if (PlayerIsInOwnWorld()) {
            SendInvadingPhantomsHome(0);
        }
        SetNetworkconnectedEventFlagID(15000801, ON);
        if (PlayerIsInOwnWorld()) {
            PlayCutsceneToPlayerAndWarp(15000000, CutscenePlayMode.Skippable, 15002811, 15000000, 10000, 0, false);
        } else {
            PlayCutsceneToPlayer(15000000, CutscenePlayMode.Skippable, 10000);
        }
        WaitFixedTimeRealFrames(1);
        if (PlayerIsInOwnWorld()) {
            SetCameraAngle(13.07, 34.48);
        }
        SetSpEffect(15000800, 5400);
        IssueShortWarpRequest(15000800, TargetEntityType.Area, 15002812, -1);
        EnableCharacterGravity(15000800);
        EnableCharacterCollision(15000800);
        ChangeCharacterDispmask(15000800, 0, ON);
        ChangeCharacterDispmask(15000800, 12, ON);
        ChangeCharacterDispmask(15000800, 13, ON);
        DisableAsset(15001820);
        ForceAnimationPlayback(15000800, 3006, false, false, false);
    } else {
L1:
        IssueShortWarpRequest(15000800, TargetEntityType.Area, 15002814, -1);
        DisableAsset(15001820);
        WaitFor(EventFlag(15002805) && InArea(10000, 15002800));
    }
L2:
    EnableCharacterAI(15005800);
    DisableCharacterInvincibility(15005800);
    EnableCharacterImmortality(15000800);
    SetNetworkUpdateRate(15005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 15000800, 0, 902120000);
    ClearSpEffect(15000800, 16141);
});

$Event(15002811, Restart, function() {
    EndIf(EventFlag(15000800));
    WaitFor(
        CharacterHPValue(15000800) <= 1
            && !CharacterHasSpEffect(15000800, 18480)
            && HasDamageType(15000800, 0, DamageType.Unspecified));
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(15000010, CutscenePlayMode.Skippable, 15002815, 15000000, 10000, 0, false);
    } else {
        PlayCutsceneToPlayer(15000010, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(15002802, ON);
    if (PlayerIsInOwnWorld()) {
        ChangeCamera(2121, 2121);
    }
    IssueShortWarpRequest(15000800, TargetEntityType.Area, 15002816, -1);
    SetCameraAngle(-29, 68.8);
    DisplayBossHealthBar(Enabled, 15000800, 0, 902120001);
    SetSpEffect(15000800, 18000);
    SetSpEffect(15000800, 18001);
    SetSpEffect(15000800, 18002);
    ClearSpEffect(15000800, 18015);
    SetSpEffect(15000800, 18016);
    ChangeCharacterDispmask(15000800, 10, OFF);
    ChangeCharacterDispmask(15000800, 11, ON);
    ChangeCharacterDispmask(15000800, 12, OFF);
    CreateNPCPart(15000800, 10, NPCPartType.Part1, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(15000800, 10, 109, 109, 139, 139, 0);
    CreateNPCPart(15000800, 310, NPCPartType.WeakPoint, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(15000800, 310, 110, 110, 139, 139, 0);
    SetSpEffect(15000800, 18400);
    SetSpEffect(15000801, 18400);
    DisableCharacterHPBarDisplay(15000801);
    ForceAnimationPlayback(15000800, 20002, false, false, false);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(15000800);
    WaitFixedTimeSeconds(3.2);
    DisableCharacterImmortality(15000800);
    if (PlayerIsInOwnWorld()) {
        ChangeCamera(2120, 2120);
    }
});

$Event(15002820, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(15000800));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    DisableCharacterAI(X0_4);
    WaitFor(
        (!EventFlag(15002803) && CharacterHasSpEffect(15000800, X8_4))
            || (EventFlag(15002803) && CharacterHasSpEffect(15000801, X8_4)));
    EnableCharacter(X0_4);
    WaitFixedTimeFrames(1);
    if (!EventFlag(15002803)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 15000800, 228, 15000800);
    } else {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 15000801, 228, 15000801);
    }
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    EnableCharacterAI(X0_4);
    WaitFixedTimeSeconds(0.7);
    EnableCharacterCollision(X0_4);
    WaitFixedTimeSeconds(0.3);
    WaitFor(!CharacterHasSpEffect(X0_4, 5029));
    RestartEvent();
});

$Event(15002830, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(15000800));
    WaitFor(!PlayerIsInOwnWorld() && CharacterHasSpEffect(10000, X4_4));
    if (PlayerIsInOwnWorld()) {
        SetSpEffect(15000800, X0_4);
    }
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});

$Event(15002840, Default, function(X0_4, X4_4, X8_1) {
    EndIf(EventFlag(15000800));
    WaitFor(CharacterHasSpEffect(X0_4, 18037));
    EnableCharacter(X4_4);
    SetSpEffect(X4_4, 18401);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 228, X4_4);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAIReplan(X4_4);
    WaitFixedTimeSeconds(0.7);
    EnableCharacterCollision(X4_4);
    ClearSpEffect(X4_4, 18401);
    WaitFor(!CharacterHasSpEffect(X0_4, 5029));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    SetNetworkconnectedEventFlagID(15002803, X8_1);
    RestartEvent();
});

$Event(15002842, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(15000800));
    SetSpEffect(X0_4, X4_4);
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    WaitFor(
        (!EventFlag(15002803) && CharacterHasSpEffect(15000800, X8_4))
            || (EventFlag(15002803) && CharacterHasSpEffect(15000801, X8_4)));
    EnableCharacter(X0_4);
    WaitFixedTimeFrames(1);
    EnableCharacterAI(X0_4);
    if (!EventFlag(15002803)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 15000800, 228, 15000800);
    } else {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 15000801, 228, 15000801);
    }
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.7);
    EnableCharacterCollision(X0_4);
    WaitFixedTimeSeconds(2);
    WaitFor(!CharacterHasSpEffect(X0_4, 5029));
    RestartEvent();
});

$Event(15002848, Default, function(X0_4, X4_4) {
    DisableNetworkSync();
    EndIf(EventFlag(15000800));
    flagSp &= EventFlag(15002810);
    if (PlayerIsInOwnWorld()) {
        flagSp &= EventFlag(15002805);
    } else {
        flagSp &= EventFlag(15002806);
    }
    flagSp &= !CharacterHasSpEffect(15000800, X0_4) && !CharacterHasSpEffect(15000800, 18032);
    WaitFor(flagSp || EventFlag(15000800));
    EndIf(EventFlag(15000800));
    ChangeCamera(2120, 2120);
    WaitFor(
        (EventFlag(15002810)
            && CharacterHasSpEffect(15000800, X0_4)
            && !CharacterHasSpEffect(15000800, 18032))
            || EventFlag(15000800));
    EndIf(EventFlag(15000800));
    ChangeCamera(X4_4, X4_4);
    RestartEvent();
});

$Event(15002849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 15000800, 15001800, 15002800, 15002805, 15005800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 15000800, 15001800, 15002800, 15002805, 15002806, 10000);
    InitializeCommonEvent(0, 9005811, 15000800, 15001800, 5, 0);
    InitializeCommonEvent(0, 9005822, 15002800, 212000, 15002805, 15002806, 0, 15002802, 1, 1);
});

$Event(15002850, Restart, function() {
    EndIf(EventFlag(15000850));
    WaitFor(CharacterHPValue(15000850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(15000850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(15000850));
    HandleBossDefeatAndDisplayBanner(15000850, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(15000850, ON);
    SetEventFlagID(15005865, ON); //music handler flag
    SetEventFlagID(15002852, OFF);
    SetEventFlagID(15002855, OFF);
    SetEventFlagID(9119, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61119, ON);
    }
    WaitFixedTimeSeconds(6);
    SetEventFlagID(15005865, OFF); //music handler flag
});

$Event(15002860, Restart, function() {
    if (EventFlag(15000850)) {
        DisableCharacter(15005850);
        DisableCharacterCollision(15005850);
        ForceCharacterDeath(15005850, false);
        EndEvent();
    }
L0:
    SetCurrentTime(17, 59, 0, false, false, false, 0, 0, 0) // Forced morning as long as Loretta is alive
    DisableCharacterAI(15005850);
    EnableCharacterInvincibility(15005850);
    ForceAnimationPlayback(15000850, 30001, false, false, false);
    if (!EventFlag(15000851)) {
        SetSpEffect(15000110, 9531);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 15002851))
                || HasDamageType(15000850, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(15000851, ON);
    } else {
L1:
        WarpCharacterAndCopyFloor(15000850, TargetEntityType.Area, 15002860, -1, 15000850);
        WaitFor(EventFlag(15002855) && InArea(10000, 15002850));
    }
L2:
    ForceAnimationPlayback(15000850, 20011, false, false, false);
    ForceAnimationPlayback(15000850, 3005, false, false, false);
    EnableCharacterAI(15005850);
    DisableCharacterInvincibility(15005850);
    SetNetworkUpdateRate(15005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(15000110, 9532);
    WaitFixedTimeSeconds(2);
    DisplayBossHealthBar(Enabled, 15000850, 0, 903252000);
});

$Event(15002861, Restart, function() {
    EndIf(EventFlag(15000850));
    WaitFor(HPRatio(15000850) <= 0.55);
    WaitFixedTimeFrames(1);
});

$Event(15002899, Restart, function() {
    InitializeCommonEvent(0, 9005800, 15000850, 15001850, 15002850, 15002855, 15005850, 10000, 15000851, 15002851);
    InitializeCommonEvent(0, 9005801, 15000850, 15001850, 15002850, 15002855, 15002856, 10000);
    InitializeCommonEvent(0, 9005811, 15000850, 15001850, 3, 15000851);
    InitializeCommonEvent(0, 9005811, 15000850, 15001851, 3, 0);
    InitializeCommonEvent(0, 9005822, 15000850, 921600, 15002855, 15002856, 0, 15002852, 0, 0);
});

$Event(15000700, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(15000800));
    EndIf(EventFlag(15002700));
    WaitFor(EventFlag(15002805));
    SetCharacterTalkRange(15000800, 100);
    WaitFor(EventFlag(15002701));
    SetCharacterTalkRange(15000800, 17);
});

$Event(15000701, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(15000800));
    EndIf(EventFlag(15002700));
    WaitFor(PlayerIsInOwnWorld() && CharacterHPValue(15000800) == 0);
    EnableCharacterDefaultBackread(15000800);
    WaitFor(ElapsedSeconds(100) || EventFlag(15002701));
    DisableCharacterDefaultBackread(15000800);
});

$Event(15000702, Restart, function(X0_4, X4_4) {
    DisableAsset(X0_4);
    DisableAsset(X4_4);
    if (!EventFlag(15000800)) {
        WaitFor(EventFlag(15000800) && EventFlag(9000));
        WaitFixedTimeSeconds(1);
    }
L19:
    EnableAsset(X0_4);
    EnableAsset(X4_4);
    SetNetworkconnectedEventFlagID(15009212, ON);
L20:
    EndEvent();
});

$Event(15000710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    if (!EventFlag(4190)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4190));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
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
    WaitFor(!EventFlag(4190));
    RestartEvent();
});

$Event(15000711, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    if (!(EventFlag(4191) || EventFlag(4192))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(15001704);
        WaitFor(EventFlag(4191) || EventFlag(4192));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    EnableAsset(15001704);
    if (!EventFlag(4191)) {
        ForceAnimationPlayback(X0_4, 90104, false, false, false);
        SetCharacterTeamType(X0_4, TeamType.Disabled);
        DisableAsset(15001704);
    }
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
    WaitFor(!EventFlag(4191) && !EventFlag(4192));
    RestartEvent();
});

$Event(15000712, Restart, function(X0_4) {
    DisableAsset(X0_4);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 4194);
    EnableAsset(X0_4);
    EndEvent();
});

$Event(15000713, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400324));
    WaitFor(
        PlayerHasItem(ItemType.Goods, 8196)
            && !EventFlag(400324)
            && EventFlag(15009212)
            && ActionButtonInArea(6519, X0_4));
    AwardItemLot(103240);
    RemoveItemFromPlayer(ItemType.Goods, 8196, 1);
    EndEvent();
});

$Event(15000714, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400323));
    WaitFor(ElapsedSeconds(2) && EventFlag(7611));
    AwardItemLot(103220);
    EndEvent();
});

$Event(15000715, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4190));
    WaitFor(
        EventFlag(4190)
            && EventFlag(15009206)
            && (EntityInRadiusOfEntity(15001952, 20000, 5, 1)
                || EntityInRadiusOfEntity(15001953, 20000, 12, 1)));
    SetNetworkconnectedEventFlagID(15009213, ON);
    SetNetworkconnectedEventFlagID(4198, ON);
    SetNetworkconnectedEventFlagID(4178, ON);
    EndEvent();
});

$Event(15000716, Restart, function() {
    EndIf(EventFlag(15000398));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 15000398);
    SetNetworkconnectedEventFlagID(4198, ON);
    EndEvent();
});
