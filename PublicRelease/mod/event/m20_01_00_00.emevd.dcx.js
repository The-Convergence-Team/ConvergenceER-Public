// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 20010199, 0);
    DisableAsset(20011542);
    DisableAsset(20011544);
    DisableAsset(20011546);
    DisableAsset(20011548);
    InitializeCommonEvent(0, 90005780, 20010800, 20012160, 20012161, 20010701, 20, 20012160, 20019220, 0, 0);
    InitializeCommonEvent(0, 90005781, 20010800, 20012160, 20012161, 20010701);
    InitializeCommonEvent(0, 90005784, 20012160, 20012805, 20010701, 20012800, 20012809, 0);
    InitializeCommonEvent(0, 90005780, 20010800, 20012164, 20012165, 20010710, 20, 20012164, 22009232, 0, 0);
    InitializeCommonEvent(0, 90005781, 20010800, 20012164, 20012165, 20010710);
    InitializeCommonEvent(0, 90005784, 20012164, 20012805, 20010710, 20012800, 20012809, 0);
    if (!CeremonyActive(20)) {
        InitializeEvent(0, 20012150, 20012149, 20012168, 20012169, 20010730, 20011730, 20012780, 209530, 2080840, 4080843, 20012170, 20012171);
        InitializeEvent(1, 20012150, 20012149, 20012172, 20012173, 20010731, 20011731, 20012781, 209531, 2080850, 4080853, 20012174, 20012175);
        InitializeEvent(2, 20012150, 20012149, 20012176, 20012177, 20010732, 20011732, 20012782, 209532, 2080860, 4080863, 20012178, 20012179);
        InitializeEvent(0, 20012155, 20012149, 20012168, 20012780, 20011730, 20010730);
        InitializeEvent(1, 20012155, 20012149, 20012172, 20012781, 20011731, 20010731);
        InitializeEvent(2, 20012155, 20012149, 20012176, 20012782, 20011732, 20010732);
    }
    InitializeCommonEvent(0, 9005810, 20010800, 20010000, 20010950, 20011950, 1084227584);
    RegisterBonfire(20010002, 20011952, 0, 0, 0, 8);
    RegisterBonfire(20010003, 20011953, 0, 0, 0, 8);
    RegisterBonfire(20010004, 20011954, 0, 0, 0, 8);
    RegisterBonfire(20010005, 20011955, 0, 0, 0, 8);
    RegisterBonfire(20010006, 20011956, 0, 0, 0, 8);
    InitializeEvent(0, 20012800, 0);
    InitializeEvent(0, 20012810, 0);
    InitializeEvent(0, 20012811, 0);
    InitializeEvent(0, 20012840, 0);
    InitializeEvent(0, 20012847, 0);
    InitializeEvent(0, 20012849, 0);
    InitializeEvent(0, 20012820, 0);
    InitializeEvent(0, 20012830, 20010810, 20011580, 20011581);
    InitializeEvent(1, 20012830, 20010811, 20011582, 20011583);
    InitializeEvent(2, 20012830, 20010812, 20011584, 20011585);
    InitializeEvent(3, 20012830, 20010813, 20011586, 20011587);
    InitializeEvent(0, 20012835, 0);
    InitializeEvent(0, 20012145, 7625, 20012140, 20019257, 20012141, 20012142, 2080605, 209055, 20011140, 30010);
    if (CeremonyActive(20)) {
        InitializeEvent(0, 20012146, 7625, 20010725, 5, 20012777);
        InitializeEvent(0, 20012195, 0);
    }
    InitializeCommonEvent(0, 90005501, 20010510, 20010511, 0, 20011510, 20011511, 20011512, 20010512);
    InitializeCommonEvent(0, 90005501, 20010515, 20010516, 0, 20011515, 20011516, 20011517, 20010517);
    InitializeCommonEvent(0, 90005501, 20010520, 20010521, 0, 20011520, 20011521, 20011522, 20010522);
    InitializeCommonEvent(0, 90005501, 20010525, 20010526, 0, 20011525, 20011526, 20011527, 20010527);
    InitializeCommonEvent(0, 90005501, 20010530, 20010531, 0, 20011530, 20011531, 20011532, 20010532);
    InitializeCommonEvent(0, 90005501, 20010535, 20010536, 0, 20011535, 20011536, 20011537, 20010537);
    InitializeEvent(0, 20012510, 0);
    InitializeEvent(0, 20012580, 0);
    //InitializeEvent(0, 20012500, 0); //  Disable Warp
    InitializeEvent(0, 20012200, 20010451, 20011884, 20011894, 17, 20004220, 20010453, 20011885, 20010455, 20011886);
    InitializeEvent(1, 20012200, 20010453, 20011885, 20011895, 2, 20004221, 20010451, 20011884, 20010455, 20011886);
    InitializeEvent(2, 20012200, 20010455, 20011886, 20011896, 7, 20004222, 20010451, 20011884, 20010453, 20011885);
    InitializeEvent(0, 20010610, 0);
    InitializeCommonEvent(0, 90005615, 20019253, 0);
    InitializeEvent(0, 20010700, 20010720, 20012792, 20012149, 20012783, 1126498304, 20019523, 20012791, 4080920, 20019514, 20019515, 20019516, 20019517, 20019518, 1073741824, 0);
    InitializeEvent(1, 20010700, 20010724, 20012793, 20012149, 20012784, 1126498304, 20019524, 20012791, 4080930, 20019514, 20019515, 20019516, 20019517, 20019518, 1073741824, 0);
    InitializeEvent(2, 20010700, 20010722, 20012794, 20012149, 20012785, 1126498304, 20019525, 20012791, 4080890, 20019514, 20019515, 20019516, 20019517, 20019518, 1073741824, 0);
    InitializeEvent(3, 20010700, 20010723, 20012795, 20012149, 20012786, 1126498304, 20019526, 20012791, 4080900, 20019514, 20019515, 20019516, 20019517, 20019518, 1073741824, 0);
    InitializeEvent(4, 20010700, 20010721, 20012796, 20012149, 20012787, 1126498304, 20019527, 20012791, 4080910, 20019514, 20019515, 20019516, 20019517, 20019518, 1073741824, 1);
    InitializeEvent(0, 20010705, 20010730, 20012797, 20012149, 20012788, 1126498304, 20019528, 20012791, 4080840, 4080841, 7630, 0, 1073741824, 1);
    InitializeEvent(1, 20010705, 20010731, 20012798, 20012149, 20012789, 1126498304, 20019529, 20012791, 4080850, 4080851, 7630, 0, 1073741824, 1);
    InitializeEvent(2, 20010705, 20010732, 20012799, 20012149, 20012790, 1126498304, 20019530, 20012791, 4080860, 4080861, 7630, 0, 1073741824, 0);
    InitializeEvent(0, 20010736, 20012791, 20012783, 20012787, 20012788, 20012790, 20012712, 20012713, 20012714, 20012715, 20012716, 20012711, 1126498304, 20010720, 7625, 20019294, 7630, 1083179008);
    InitializeEvent(0, 20010708, 20012149, 20012787, 20019527, 20012738, 1084227584, 20012791, 7630);
    InitializeEvent(1, 20010708, 20012149, 20012788, 20019528, 20019243, 1084227584, 20012791, 7630);
    InitializeEvent(2, 20010708, 20012149, 20012789, 20019529, 20012726, 1084227584, 20012791, 7630);
    InitializeEvent(0, 20010711, 20012149, 20010720, 20000, 1077936128, 20019284, 20019290, 1084227584, 1106247680, 20019295, 20019533, 20019523, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(1, 20010711, 20012149, 20010720, 20000, 1077936128, 20019284, 20019291, 1084227584, 1106247680, 20019295, 20019533, 20019523, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(2, 20010711, 20012149, 20010720, 20010730, 1077936128, 20019285, 20019292, 1084227584, 1106247680, 20019295, 20019533, 20019523, 1084227584, 20019532, 20019528, 20019528, 7630, 4929);
    InitializeEvent(3, 20010711, 20012149, 20010720, 20010731, 1077936128, 20019286, 20019293, 1084227584, 1106247680, 20019295, 20019533, 20019523, 1084227584, 20019532, 20019529, 20019529, 7630, 4929);
    InitializeEvent(4, 20010711, 20012149, 20010722, 20000, 1077936128, 20012745, 20019400, 1084227584, 1106247680, 20019402, 20019533, 20019525, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(5, 20010711, 20012149, 20010722, 20000, 1077936128, 20012745, 20019401, 1084227584, 1106247680, 20019402, 20019533, 20019525, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(6, 20010711, 20012149, 20010723, 20000, 1077936128, 20012753, 20012756, 1084227584, 1106247680, 20012758, 20019533, 20019526, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(7, 20010711, 20012149, 20010723, 20000, 1077936128, 20012753, 20012757, 1084227584, 1106247680, 20012758, 20019533, 20019526, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(8, 20010711, 20012149, 20010721, 20000, 1077936128, 20012736, 20019352, 1084227584, 1106247680, 20019355, 20019533, 20019527, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(9, 20010711, 20012149, 20010721, 20000, 1077936128, 20012736, 20019353, 1084227584, 1106247680, 20019355, 20019533, 20019527, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(10, 20010711, 20012149, 20010721, 20010730, 1077936128, 20012737, 20019354, 1084227584, 1106247680, 20019355, 20019533, 20019527, 1084227584, 20019532, 20019528, 20019528, 7630, 4929);
    InitializeEvent(11, 20010711, 20012149, 20010730, 20000, 1077936128, 20019240, 20019245, 1084227584, 1106247680, 20019249, 20019533, 20019528, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(12, 20010711, 20012149, 20010730, 20000, 1077936128, 20019240, 20019246, 1084227584, 1106247680, 20019249, 20019533, 20019528, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(13, 20010711, 20012149, 20010730, 20010720, 1077936128, 20019241, 20019247, 1084227584, 1106247680, 20019249, 20019533, 20019528, 1084227584, 20019532, 20019523, 20019523, 7630, 4929);
    InitializeEvent(14, 20010711, 20012149, 20010730, 20010721, 1077936128, 20019242, 20019248, 1084227584, 1106247680, 20019249, 20019533, 20019528, 1084227584, 20019532, 20019527, 20019527, 7630, 4929);
    InitializeEvent(15, 20010711, 20012149, 20010731, 20000, 1077936128, 20012724, 20012728, 1084227584, 1106247680, 20019341, 20019533, 20019529, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(16, 20010711, 20012149, 20010731, 20000, 1077936128, 20012724, 20012729, 1084227584, 1106247680, 20019341, 20019533, 20019529, 1084227584, 20019532, 0, 0, 7630, 4929);
    InitializeEvent(17, 20010711, 20012149, 20010731, 20010723, 1077936128, 20012725, 20019340, 1084227584, 1106247680, 20019341, 20019533, 20019529, 1084227584, 20019532, 20019526, 20019526, 7630, 4929);
    InitializeEvent(0, 20010729, 20010720, 20012149, 20019287, 20019288, 20019289, 20019531, 1084227584, 7630, 20019507, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20019282, 20019283, 1092616192);
    InitializeEvent(1, 20010729, 20010721, 20012149, 20012739, 20019350, 20019351, 20019531, 1084227584, 7630, 20019507, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20012734, 20012735, 1092616192);
    InitializeEvent(0, 20010731, 20010722, 20012149, 20012748, 20012749, 20019531, 1084227584, 7630, 20019507, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20012744, 1092616192);
    InitializeEvent(1, 20010731, 20010723, 20012149, 20012754, 20012755, 20019531, 1084227584, 7630, 20019507, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20012752, 1092616192);
    InitializeEvent(0, 20010733, 20010724, 20012149, 20012761, 20019531, 1084227584, 7630, 1, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20012760, 1092616192);
    InitializeEvent(1, 20010733, 20010730, 20012149, 20019244, 20019531, 1084227584, 7630, 0, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20019239, 0);
    InitializeEvent(2, 20010733, 20010731, 20012149, 20012727, 20019531, 1084227584, 7630, 0, 20019533, 20019514, 20019515, 20019516, 20019517, 20019518, 20012723, 0);
    InitializeEvent(0, 20010738, 20019235, 20019249, 20019280, 20019295, 20019340, 20019341, 20019350, 20019355, 20019400, 20019403, 20019500, 20019549, 20012711, 20012718, 20012720, 20012799);
    InitializeEvent(0, 20010739, 7630);
    InitializeEvent(0, 20010770, 20019294, 20019500, 20019501, 20019502, 20019503, 20019504, 1106247680, 1123024896, 1123024896, 1123024896, 20012149, 20019531, 20012783, 20012787, 20012791, 7630, 20019514, 20019513, 20019535, 20019515, 20019536, 20019516, 20019517);
    InitializeEvent(0, 20010771, 20019500, 20019501, 20019502, 20019503, 20019504, 20012792, 20012793, 20012794, 20012795, 20012796, 20012785, 20012787, 20012786, 20012149, 7630);
    InitializeEvent(0, 20010772, 20019505, 20019506, 20012797, 20012798, 20012799, 20012788, 20012789, 20012790, 20012149, 7630);
    InitializeEvent(0, 20010773, 20019523, 20019524, 20019525, 20019526, 20019527, 1101004800, 1121714176, 1121714176, 1121714176, 20012783, 20012787, 20019531, 20019532, 7630, 20019513, 20019536, 20019535, 20019515, 20019514, 20019540, 20019541, 20019542);
    InitializeEvent(0, 20010774, 20019507);
    InitializeEvent(0, 20010775, 20010720, 20012783, 20010724, 20012784, 20010722, 20012785, 20010723, 20012786, 20010721, 20012787, 4929, 20012149, 20012791, 7630);
    InitializeEvent(0, 20010776, 7630, 20010720);
    InitializeEvent(0, 20010777, 20012788, 20012790, 20019403, 20012791, 7630);
    InitializeEvent(0, 20010778, 20010720, 20010724, 20010722, 20010723, 20010721, 20012783, 20012784, 20012785, 20012786, 20012787, 20019508, 20019509, 20019510, 20019511, 20019512, 20019513, 1056964608, 7630, 20012791, 20019535);
    InitializeEvent(0, 20010780, 20019505, 20019501, 1101004800, 20012788, 20012790, 7630, 1, 20019536, 20019543, 20019533);
    InitializeEvent(0, 20010781, 20019506, 20019502, 1101004800, 20012788, 20012790, 7630, 2, 20012783, 20012787, 20019505, 20019536, 20012791, 20019544, 20019533);
    InitializeEvent(0, 20010782, 20019523, 20019524, 20019525, 20019526, 20019527, 20019528, 20019529, 20019530, 1084227584, 20019536, 20019537, 7630);
    InitializeEvent(0, 20010783, 20019501, 1092616192, 20012788, 20012790, 7630, 1, 20019532, 20019540, 20019541, 20019542, 20012788, 20012789, 20012790, 20019528, 20019529, 20019530);
    InitializeEvent(0, 20010784, 20019529, 20019502, 1092616192, 20012788, 20012790, 7630, 2, 20012783, 20012787, 20019505, 20019532, 20019540, 20019541, 20019542, 20012791);
    InitializeEvent(0, 20010371, 20012780, 20012781, 20012782, 20012783, 20012784, 20012765, 20012766, 20012767, 20012768, 20012769, 7630);
    InitializeEvent(0, 20010785, 20010720, 4080922, 20012148, 1086324736);
    InitializeEvent(1, 20010785, 20010724, 4080932, 20012148, 1086324736);
    InitializeEvent(2, 20010785, 20010722, 4080892, 20012148, 1086324736);
    InitializeEvent(3, 20010785, 20010723, 4080902, 20012148, 1086324736);
    InitializeEvent(4, 20010785, 20010721, 4080912, 20012148, 1086324736);
    InitializeEvent(5, 20010785, 20010730, 4080842, 20012148, 1086324736);
    InitializeEvent(6, 20010785, 20010731, 4080852, 20012148, 1086324736);
    InitializeEvent(7, 20010785, 20010732, 4080862, 20012148, 1086324736);
    InitializeEvent(0, 20010793, 7630, 20019507);
    InitializeEvent(0, 20010740, 20010700, 4400, 4407, 90100, 4899);
    InitializeEvent(0, 20010741, 20012168, 20019224, 7625);
    InitializeEvent(0, 20010742, 20012160, 20019226, 20010800);
    InitializeEvent(0, 20010743, 20010700, 4400, 20012160, 4408, 20010800);
    InitializeEvent(0, 20010744, 20019228, 20019227, 20010800);
    InitializeEvent(0, 20010745, 20012172, 20019306, 7625);
    InitializeEvent(0, 20010746, 20012164, 20019311, 20010800);
    InitializeCommonEvent(0, 90005748, 20011760, 206020, 1030028, 1106247680, 4918);
    InitializeEvent(0, 20010760, 20010770, 4928, 4902, 90100, 1121714176);
    InitializeEvent(0, 20010761, 20011770, 20010770, 4928, 20012710, 4902, 20019257, 4893, 4894, 20012780, 20012781, 20012782);
    InitializeEvent(0, 20010762, 4928, 20012140);
    InitializeCommonEvent(0, 90005770, 4902);
    InitializeEvent(0, 20010763, 20010790, 20010800, 20010800);
    InitializeEvent(0, 20010750, 20010740, 4440, 4448, 90102);
    InitializeCommonEvent(0, 90005750, 20011740, 4350, 105940, 400598, 400598, 4448, 6102);
    InitializeEvent(1, 20010750, 20010741, 4420, 4427, 90102);
    InitializeCommonEvent(0, 90005750, 20011741, 4350, 106010, 400602, 400602, 4427, 6102);
    InitializeEvent(2, 20010750, 20010742, 4360, 4370, 90103);
    InitializeCommonEvent(0, 90005750, 20011742, 4350, 116100, 400614, 400614, 4370, 0);
    InitializeEvent(4, 20010750, 20010751, 4460, 4469, 90104);
    InitializeCommonEvent(0, 90005750, 20011751, 4350, 106320, 400634, 400634, 4469, 6102);
    InitializeEvent(5, 20010750, 20010743, 4380, 4387, 90103);
    InitializeCommonEvent(0, 90005750, 20011743, 4350, 116400, 400644, 400645, 4387, 6102);
    InitializeEvent(6, 20010750, 20010744, 4560, 4566, 90101);
    InitializeCommonEvent(0, 90005750, 20011744, 4350, 107310, 400732, 400732, 4566, 0);
    InitializeEvent(7, 20010750, 20010750, 4400, 4408, 90102);
    InitializeCommonEvent(0, 90005750, 20011750, 4350, 106220, 400624, 400624, 4408, 6102);
    InitializeCommonEvent(0, 90005715, 20010800, 0, 20010800, 20012805, 1125515264);
});

$Event(50, Default, function() {
    InitializeEvent(0, 20010519, 0);
    InitializeEvent(0, 20012144, 0);
    InitializeCommonEvent(0, 90005301, 20010455, 20010455, 20011991, 0, 2);
    InitializeCommonEvent(0, 90005261, 20010215, 20012215, 1073741824, 0, 3002);
    InitializeCommonEvent(0, 90005261, 20010216, 20012215, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010217, 20012215, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010218, 20012215, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010219, 20012215, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010300, 20012300, 1073741824, 0, 3005);
    InitializeCommonEvent(0, 90005211, 20010301, 30005, 20005, 20012303, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 20010302, 30005, 20005, 20012303, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 20010303, 30005, 20005, 20012303, 0, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 20010309, 30002, 20002, 20012308, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 20010304, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 20010305, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005211, 20010306, 30002, 20002, 20012306, 1065353216, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 20010307, 30002, 20002, 20012306, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 20010330, 20012330, 0, 1067869798, 3009);
    InitializeCommonEvent(0, 90005211, 20010331, 30000, 20000, 20012331, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 20010332, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005261, 20010333, 20012333, 0, 1050253722, 3009);
    InitializeCommonEvent(0, 90005211, 20010334, 30001, 20001, 20012334, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 20010351, 20012351, 0, 0, 3000);
    InitializeCommonEvent(0, 90005251, 20010352, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005251, 20010355, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005201, 20010364, 30000, 20000, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 20010356, 20012356, 1077936128, 1073741824, -1);
    InitializeCommonEvent(0, 90005261, 20010357, 20012356, 1077936128, 1069547520, -1);
    InitializeCommonEvent(0, 90005261, 20010365, 20012356, 1077936128, 1036831949, -1);
    InitializeCommonEvent(0, 90005261, 20010366, 20012356, 1077936128, 1036831949, -1);
    InitializeCommonEvent(0, 90005261, 20010367, 20012356, 1077936128, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 20010368, 20012356, 1077936128, 1045220557, -1);
    InitializeCommonEvent(0, 90005261, 20010369, 20012356, 1077936128, 1053609165, -1);
    InitializeCommonEvent(0, 90005261, 20010360, 20012360, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010361, 20012360, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010371, 20012371, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010375, 20012375, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005211, 20010377, 30000, 20000, 20012377, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 20010402, 20012402, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010450, 20012450, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010451, 20012451, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010452, 20012452, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010453, 20012453, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010455, 20012455, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 20010470, 20012470, 1065353216, 0, -1);
   
    InitializeCommonEvent(0, 90005301, 20010451, 20010451, 0, 0);
    InitializeCommonEvent(0, 90005301, 20010453, 20010453, 0, 0);
    InitializeCommonEvent(0, 90005301, 20010455, 20010455, 0, 0);
});

// Moved event 20010196 to common.emevd.dcx 

$Event(20010199, Default, function() {
    if (!PlayerIsInOwnWorld()) {
        DisableAsset(20011199);
        EndEvent();
    }
L0:
    DisableAsset(20011199);
    DeleteAssetfollowingSFX(20011199, true);
    EndIf(EventFlag(128));
    WaitFor(EventFlag(20010800));
    EnableAsset(20011199);
    DeleteAssetfollowingSFX(20011199, true);
    CreateAssetfollowingSFX(20011199, 100, 820680);
    WaitFor(
        PlayerIsInOwnWorld()
            && !HasMultiplayerState(MultiplayerState.Multiplayer)
            && ActionButtonInArea(209600, 20011199));
    SetEventFlagID(20010199, ON);
    SetEventFlagID(20012199, ON);
    RotateCharacter(10000, 20011199, -1, true);
    ForceAnimationPlayback(10000, 61030, false, false, false);
    WaitFixedTimeRealFrames(100);
    CreateAssetfollowingSFX(20011199, 100, 820681);
    FadeToColor(1, 6, true, 0, 0.9, 0.9, 0.9);
    WaitFixedTimeSeconds(6);
    DeleteAssetfollowingSFX(20011199, false);
    WaitFixedTimeSeconds(0.6);
    PlayCutsceneToPlayer(20010020, CutscenePlayMode.UnskippableWithWhiteFadeOutSkip, 10000);
    SpawnOneshotSFX(TargetEntityType.Asset, 20011199, 100, 820682);
    WaitFixedTimeRealFrames(60);
    ForceAnimationPlayback(10000, 61032, false, false, false);
    WaitFixedTimeRealFrames(60);
    AwardItemsIncludingClients(20011981);
    SetEventFlagID(128, ON);
    EndEvent();
});

$Event(20012144, Restart, function() {
    DisableNetworkSync();
    if (!CeremonyActive(20)) {
        if (PlayerIsInOwnWorld()) {
            if (EventFlag(7625)) {
                SetNetworkconnectedEventFlagID(20012149, ON);
            } else {
                SetNetworkconnectedEventFlagID(20012149, OFF);
            }
        }
L1:
        SetEventFlagID(7630, OFF);
        SetEventFlagID(7631, OFF);
        SetEventFlagID(7632, OFF);
        SetEventFlagID(7640, OFF);
        SetEventFlagID(7641, OFF);
        SetEventFlagID(7642, OFF);
        SetEventFlagID(7643, OFF);
        SetEventFlagID(7644, OFF);
        SetEventFlagID(7645, OFF);
        SetEventFlagID(7646, OFF);
        SetEventFlagID(7647, OFF);
        SetEventFlagID(7648, OFF);
        SetEventFlagID(7649, OFF);
        SetEventFlagID(20012168, OFF);
        SetEventFlagID(20012172, OFF);
        SetEventFlagID(20012176, OFF);
        EnableAsset(20011148);
        DeleteAssetfollowingSFX(20011148, true);
        CreateAssetfollowingSFX(20011148, 101, 806761);
        DisableAsset(20011775);
        DeleteAssetfollowingSFX(20011776, true);
        DisableAsset(20011776);
        WaitFor(EventFlag(20012149));
        DeleteAssetfollowingSFX(20011148, true);
        DisableAsset(20011148);
        EndEvent();
    }
L10:
    if (EventFlag(7630)) {
        if (EventFlag(7640)) {
            SetNetworkconnectedEventFlagID(4890, ON);
        }
        if (EventFlag(7641)) {
            SetNetworkconnectedEventFlagID(4891, ON);
        }
        if (EventFlag(7642)) {
            SetNetworkconnectedEventFlagID(4892, ON);
        }
        if (EventFlag(7643)) {
            SetNetworkconnectedEventFlagID(4895, ON);
        }
        if (EventFlag(7644)) {
            SetNetworkconnectedEventFlagID(4908, ON);
        }
        if (EventFlag(7645)) {
            SetNetworkconnectedEventFlagID(20012168, ON);
        }
        if (EventFlag(7646)) {
            SetNetworkconnectedEventFlagID(20012172, ON);
        }
        if (EventFlag(7647)) {
            SetNetworkconnectedEventFlagID(20012176, ON);
        }
        if (EventFlag(7648)) {
            SetNetworkconnectedEventFlagID(12059262, ON);
        }
        if (EventFlag(7649)) {
            SetNetworkconnectedEventFlagID(2048459275, ON);
        }
        if (EventFlag(7631)) {
            SetNetworkconnectedEventFlagID(20012190, ON);
        }
        if (EventFlag(7632)) {
            SetNetworkconnectedEventFlagID(20012191, ON);
        }
    }
L11:
    SetEventFlagID(20012148, ON);
    DeleteAssetfollowingSFX(20011775, true);
    DeleteAssetfollowingSFX(20011776, true);
    CreateAssetfollowingSFX(20011775, 101, 806761);
    CreateAssetfollowingSFX(20011776, 101, 806761);
    SetBossBGM(944000, BossBGMState.Start);
    EndEvent();
});

$Event(20012145, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    DeleteAssetfollowingSFX(X28_4, true);
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(20012149));
    WaitFor(
        EventFlag(X8_4)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.InvasionPending)
                || HasMultiplayerState(MultiplayerState.Invasion)));
    CreateAssetfollowingSFX(X28_4, 100, X32_4);
    online = HasMultiplayerState(MultiplayerState.Invasion)
        || HasMultiplayerState(MultiplayerState.InvasionPending);
    WaitFor(online || ActionButtonInArea(X24_4, X28_4) || !EventFlag(X8_4));
    RestartIf(online.Passed);
    RestartIf(!EventFlag(X8_4));
    DisplayGenericDialogAndSetEventFlags(X20_4, PromptType.YESNO, NumberofOptions.TwoButtons, X28_4, 2, X12_4, X16_4, X16_4);
    RestartIf(!EventFlag(X12_4));
    SetEventFlagID(X4_4, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(7630, ON);
        if (EventFlag(4890)) {
            SetEventFlagID(7640, ON);
        }
        if (EventFlag(4891)) {
            SetEventFlagID(7641, ON);
        }
        if (EventFlag(4892)) {
            SetEventFlagID(7642, ON);
        }
        if (EventFlag(4895)) {
            SetEventFlagID(7643, ON);
        }
        if (EventFlag(4908)) {
            SetEventFlagID(7644, ON);
        }
        if (EventFlag(20012168)) {
            SetEventFlagID(7645, ON);
        }
        if (EventFlag(20012172)) {
            SetEventFlagID(7646, ON);
        }
        if (EventFlag(20012176)) {
            SetEventFlagID(7647, ON);
        }
        if (EventFlag(12059262)) {
            SetEventFlagID(7648, ON);
        }
        if (EventFlag(2048459275)) {
            SetEventFlagID(7649, ON);
        }
    }
L10:
    WaitFixedTimeRealFrames(30);
    SetSpEffect(10000, 15);
    GotoIf(S2, NumberOfCoopClients() == 0);
    GotoIf(S0, NumberOfCoopClients() == 1);
    GotoIf(S1, NumberOfCoopClients() == 2);
S0:
    SetEventFlagID(7631, ON);
    Goto(S2);
S1:
    SetEventFlagID(7632, ON);
S2:
    WaitFixedTimeSeconds(10);
    RestartEvent();
});

$Event(20012146, Restart, function(X0_4, X4_4, X8_1, X12_4) {
    DisableNetworkSync();
    EndIf(PlayerIsInOwnWorld());
    WaitFor(EventFlag(4929));
    ForceCharacterDeath(X4_4, false);
    WaitFixedTimeSeconds(3);
    if (EventFlag(7630)) {
        SetEventFlagID(X0_4, ON);
        AwardItemsIncludingClients(10420);
    }
    DisplayBanner(X8_1);
    SetBossBGM(944000, BossBGMState.Stop1);
    WaitFixedTimeSeconds(10);
    if (X12_4 != 0) {
        SetPsuedoMultiplayerReturnPosition(X12_4);
    }
    SetSpEffect(20000, 20004820);
    IssueEndOfPseudoMultiplayerNotification(true);
});

$Event(20012195, Restart, function() {
    SetCharacterTeamType(20010195, TeamType.Enemy);
    WaitFor(EventFlag(20012102));
    SetCharacterTeamType(35000, TeamType.Enemy);
});

$Event(20012150, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    DisableNetworkSync();
    GotoIf(S0, !PlayerIsInOwnWorld());
    GotoIf(L10, !EventFlag(X20_4));
S0:
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X8_4));
    if (EventFlag(X4_4)) {
        DisableCharacter(X12_4);
        EndEvent();
    }
    SetEventFlagID(X36_4, OFF);
    SetEventFlagID(X40_4, OFF);
    DisableCharacterCollision(X12_4);
    EnableCharacterImmortality(X12_4);
    DisableCharacterAI(X12_4);
    EnableCharacterFadeOnEnable(X12_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X12_4, AuthorityLevel.Forced);
    }
    ClearSpEffect(X12_4, 18677);
    SetSpEffect(X12_4, 20004380);
    if (PlayerIsInOwnWorld()) {
        DeleteAssetfollowingSFX(X16_4, true);
        CreateAssetfollowingSFX(X16_4, 100, 30001);
    }
    if (PlayerIsInOwnWorld()) {
        online &= PlayerIsInOwnWorld();
        flagAct &= EventFlag(X20_4) && ActionButtonInArea(X24_4, X16_4);
        flagOnlineAct |= EventFlag(X0_4)
            || HasMultiplayerState(MultiplayerState.Invasion)
            || HasMultiplayerState(MultiplayerState.InvasionPending)
            || flagAct;
        WaitFor(flagOnlineAct);
        EndIf(EventFlag(X0_4));
        online2 |= HasMultiplayerState(MultiplayerState.Invasion)
            || HasMultiplayerState(MultiplayerState.InvasionPending);
        GotoIf(L10, online2);
        Goto(L20);
    }
L18:
    online &= !PlayerIsInOwnWorld();
    flagAct &= EventFlag(X36_4);
    flagOnlineAct |= EventFlag(X0_4) || flagAct;
    WaitFor(flagOnlineAct);
    EndIf(EventFlag(X0_4));
    online2 |= HasMultiplayerState(MultiplayerState.Invasion)
        || HasMultiplayerState(MultiplayerState.InvasionPending);
    GotoIf(L10, online2);
    Goto(L19);
L20:
    DisplayGenericDialogAndSetEventFlags(X28_4, PromptType.YESNO, NumberofOptions.TwoButtons, X16_4, 3, X36_4, X40_4, X40_4);
    if (!EventFlag(X36_4)) {
        ClearSpEffect(X12_4, 20004380);
        SetSpEffect(X12_4, 18677);
        DeleteAssetfollowingSFX(X16_4, true);
        WaitFixedTimeSeconds(0.5);
        RestartEvent();
    }
    SetNetworkconnectedEventFlagID(X36_4, ON);
L19:
    WaitFixedTimeSeconds(1.5);
    DisplayNetworkMessage(X32_4, false);
    SetEventFlagID(X4_4, ON);
    ClearSpEffect(X12_4, 20004380);
    SetSpEffect(X12_4, 18677);
    DeleteAssetfollowingSFX(X16_4, true);
    EndEvent();
L10:
    DeleteAssetfollowingSFX(X16_4, true);
    WaitFor(
        EventFlag(X20_4)
            && !(HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending)));
    RestartEvent();
});

$Event(20012155, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(X4_4)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && EventFlag(X8_4)
                && EntityInRadiusOfEntity(10000, X12_4, 1.5, 1)
                && !(HasMultiplayerState(MultiplayerState.Invasion)
                    || HasMultiplayerState(MultiplayerState.InvasionPending)));
        if (!EventFlag(X0_4)) {
            if (!EventFlag(X4_4)) {
                EnableCharacter(X16_4);
                EnableCharacterInvincibility(X16_4);
                DisableCharacterAI(X16_4);
                WaitFixedTimeFrames(1);
                DisableCharacterCollision(X16_4);
                WaitFixedTimeFrames(1);
                WaitFor(
                    (PlayerIsInOwnWorld() && !EntityInRadiusOfEntity(10000, X12_4, 1.5, 1))
                        || HasMultiplayerState(MultiplayerState.Invasion)
                        || HasMultiplayerState(MultiplayerState.InvasionPending)
                        || !EventFlag(X8_4));
                if (!EventFlag(X0_4)) {
                    if (!EventFlag(X4_4)) {
                        WaitFixedTimeSeconds(1);
                        RestartEvent();
                    }
                }
            }
        }
    }
L1:
    EndEvent();
});

$Event(20012200, Restart, function(X0_4, X4_4, X8_4, X12_1, X16_4, X20_4, X24_4, X28_4, X32_4) {
    if (HPRatio(X0_4) <= 0) {
        EndEvent();
    }
L0:
    if (CharacterHasSpEffect(X0_4, X4_4)) {
        ChangeWeather(X12_1, -1, false);
        SetSpEffect(10000, X16_4);
    }
    WaitFor(
        (((CharacterHasSpEffect(X20_4, X24_4) || CharacterHasSpEffect(X28_4, X32_4))
            && CharacterHasSpEffect(X0_4, X4_4))
            || HPRatio(X0_4) <= 0
            || (!CharacterAIState(X0_4, AIStateType.Combat) && CharacterHasSpEffect(X0_4, X4_4))
            || (CharacterHasSpEffect(X0_4, 20011883) && !CharacterHasSpEffect(X0_4, X4_4))
            || (!WeatherActive(X12_1, 0, 0) && CharacterHasSpEffect(X0_4, X4_4)))
            && !WeatherActive(Weather.FlatClouds, 0, 0));
    if ((CharacterHasSpEffect(X20_4, X24_4) || CharacterHasSpEffect(X28_4, X32_4))
        && CharacterHasSpEffect(X0_4, X4_4)
        && WeatherActive(X12_1, 0, 0)) {
        SetSpEffect(X0_4, X8_4);
        ClearSpEffect(10000, X16_4);
        WaitFixedTimeSeconds(15);
        RestartEvent();
    }
    if (HPRatio(X0_4) <= 0) {
        if (CharacterHasSpEffect(X0_4, X4_4)) {
            ChangeWeather(Weather.Default, -1, false);
        }
        SetSpEffect(X0_4, X8_4);
        ClearSpEffect(10000, X16_4);
        EndEvent();
    }
    if (!CharacterAIState(X0_4, AIStateType.Combat) && CharacterHasSpEffect(X0_4, X4_4)) {
        if (CharacterHasSpEffect(X0_4, X4_4)) {
            ChangeWeather(Weather.Default, -1, false);
        }
        SetSpEffect(X0_4, X8_4);
        ClearSpEffect(10000, X16_4);
        WaitFixedTimeSeconds(15);
        RestartEvent();
    }
    if (!WeatherActive(X12_1, 0, 0) && CharacterHasSpEffect(X0_4, X4_4)) {
        ChangeWeather(X12_1, -1, false);
        SetSpEffect(10000, X16_4);
    }
    RestartEvent();
});

$Event(20012210, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(10000, X4_4));
    ForceAnimationPlayback(X0_4, 3000, false, true, false);
    WaitFixedTimeSeconds(4);
    RestartEvent();
});

// Disable Warp on Entry
$Event(20012500, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(20010500));
    WaitFor((InArea(10000, 20012500) || InArea(10000, 20002500)) && EventFlag(330));
    SetSpEffect(10000, 4280);
    SetSpEffect(10000, 4282);
    WaitFor(
        (PlayerIsInOwnWorld() && EventFlag(9000))
            || (!InArea(10000, 20012500) && !InArea(10000, 20002500)));
    SetSpEffect(10000, 4281);
    SetSpEffect(10000, 4283);
    SetEventFlagID(20010500, ON);
});

$Event(20012510, Default, function() {
    InitializeCommonEvent(0, 90005500, 20010510, 20010511, 0, 20011510, 20011511, 20013511, 20011512, 20013512, 20012511, 20012512, 20010512, 20010513, 0);
    InitializeCommonEvent(0, 90005500, 20010515, 20010516, 0, 20011515, 20011516, 20013516, 20011517, 20013517, 20012516, 20012517, 20010517, 20010518, 0);
    InitializeCommonEvent(0, 90005500, 20010520, 20010521, 0, 20011520, 20011521, 20013521, 20011522, 20013522, 20012521, 20012522, 20010522, 20010523, 0);
    InitializeCommonEvent(0, 90005500, 20010525, 20010526, 0, 20011525, 20011526, 20013526, 20011527, 20013527, 20012526, 20012527, 20010527, 20010528, 0);
    InitializeCommonEvent(0, 90005500, 20010530, 20010531, 0, 20011530, 20011531, 20013531, 20011532, 20013532, 20012531, 20012532, 20010532, 20010533, 0);
    InitializeCommonEvent(0, 90005500, 20010535, 20010536, 0, 20011535, 20011536, 20013536, 20011537, 20013537, 20012536, 20012537, 20010537, 20010538, 0);
});

$Event(20010519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(20010510, OFF);
    SetEventFlagID(20010515, OFF);
    SetEventFlagID(20010520, OFF);
    SetEventFlagID(20010525, ON);
    SetEventFlagID(20010530, ON);
    SetEventFlagID(20010535, OFF);
});

$Event(20012580, Default, function() {
    RegisterLadder(20010580, 20010581, 20011580);
    RegisterLadder(20010582, 20010583, 20011582);
});

$Event(20010610, Default, function() {
    EndIf(ThisEventSlot());
    IssueShortWarpRequest(20010375, TargetEntityType.Area, 20012611, -1);
    DisableCharacterGravity(20010375);
    WaitFor(InArea(10000, 20012610));
    EnableCharacterGravity(20010375);
    if (MapHasPermissionToUpdate(false, 0, 0, 0, 0)) {
        SetNetworkconnectedEventFlagID(20010515, ON);
    }
});

$Event(20012800, Restart, function() {
    EndIf(EventFlag(20010800));
    WaitFor(CharacterHPValue(20010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(20018000, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(20010800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(20010800));
    HandleBossDefeatAndDisplayBanner(20010800, TextBannerType.GodSlain);
    ChangeCamera(-1, -1);
    SetNetworkconnectedEventFlagID(20010800, ON);
    SetEventFlagID(9143, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61143, ON);
    }
});

$Event(20012810, Restart, function() {
    if (EventFlag(20010800)) {
        DisableCharacter(20015800);
        DisableCharacterCollision(20015800);
        ForceCharacterDeath(20015800, false);
        DisableCharacter(20010830);
        DisableCharacterCollision(20010830);
        ForceCharacterDeath(20010830, false);
        DisableCharacterDefaultBackread(20010830);
        SetCharacterTeamType(20010830, TeamType.Disabled);
        EndEvent();
    }
L0:
    DisableCharacterAI(20015800);
    DisableCharacterGravity(20010800);
    DisableCharacterCollision(20010800);
    DisableCharacterHPBarDisplay(20010800);
    EnableCharacterImmortality(20010801);
    DisableCharacter(20015810);
    DisableCharacterCollision(20015810);
    DisableCharacterCollision(20010830);
    DisableCharacterGravity(20010830);
    DisableLockOnPoint(20010830, 220);
    SetCharacterTeamType(20010830, TeamType.Disabled);
    DisableCharacterAI(20010830);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3)
            || CharacterType(10000, TargetType.BluePhantom));
    if (!EventFlag(20010801)) {
        ForceAnimationPlayback(20010801, 30010, false, false, false);
        WaitFor(EventFlag(20012805) && InArea(10000, 20012800));
        if (PlayerIsInOwnWorld()) {
            SendInvadingPhantomsHome(0);
        }
        if (PlayerIsInOwnWorld()) {
            PlayCutsceneToPlayerAndWarp(20010000, CutscenePlayMode.Skippable, 20012811, 20010000, 10000, 20010000, false);
        } else {
            PlayCutsceneToPlayer(20010000, CutscenePlayMode.Skippable, 10000);
        }
        WaitFixedTimeRealFrames(1);
        SetNetworkconnectedEventFlagID(20010801, ON);
        DeactivateGparamOverride(0);
        if (PlayerIsInOwnWorld()) {
            SetCameraAngle(-2.79, 116.75);
        }
        IssueShortWarpRequest(20010801, TargetEntityType.Area, 20012812, -1);
        ForceAnimationPlayback(20010801, 20010, false, false, false);
    } else {
L1:
        IssueShortWarpRequest(20010801, TargetEntityType.Area, 20012814, -1);
        WaitFor(EventFlag(20012805) && InArea(10000, 20012800));
    }
L2:
    CreateReferredDamagePair(20010801, 20010800);
    EnableCharacterAI(20010801);
    SetNetworkUpdateRate(20010801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 20010801, 0, 905220000);
});

$Event(20012811, Restart, function() {
    EndIf(EventFlag(20010800));
    WaitFor(HPRatio(20010801) <= 0.65);
    SetEventFlagID(20012841, ON);
    WaitFixedTimeRealFrames(1);
    DisableCharacterCollision(20010801);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(20010010, CutscenePlayMode.Skippable, 20012815, 20010000, 10000, 0, false);
    } else {
        PlayCutsceneToPlayer(20010010, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    if (PlayerIsInOwnWorld()) {
        SetCameraAngle(6, 116.57);
    }
    SetEventFlagID(20012802, ON);
    DisableCharacter(20010801);
    EnableCharacter(20010800);
    EnableCharacterAI(20010800);
    EnableCharacterCollision(20010800);
    EnableCharacterGravity(20010800);
    IssueShortWarpRequest(20010800, TargetEntityType.Area, 20012816, -1);
    DisplayBossHealthBar(Enabled, 20010800, 0, 905220001);
    ForceAnimationPlayback(20010800, 20011, false, false, false);
});

$Event(20012820, Restart, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(10000, 19680));
    SetEventFlagID(20012820, ON);
});

$Event(20012830, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(20010800));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    DisableCharacterAI(X0_4);
    DisableLockOnPoint(X0_4, 220);
    WaitFor(CharacterHasSpEffect(20010800, X4_4));
    EnableCharacter(X0_4);
    WaitFixedTimeFrames(1);
    if (CharacterHasSpEffect(20010800, 20011588)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 20010800, 228, 20010800);
        ForceAnimationPlayback(X0_4, 20002, false, false, false);
    } else if (CharacterHasSpEffect(20010800, 20011589)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 20010800, 228, 20010800);
        ForceAnimationPlayback(X0_4, 20003, false, false, false);
    } else if (CharacterHasSpEffect(20010800, 20011590)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 20010800, 228, 20010800);
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    } else if (CharacterHasSpEffect(20010800, 20011591)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 20010800, 228, 20010800);
        ForceAnimationPlayback(X0_4, 20005, false, false, false);
    } else if (CharacterHasSpEffect(20010800, 20011592)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 20010800, 228, 20010800);
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
    } else if (CharacterHasSpEffect(20010800, 20011593)) {
        if (20010810 == X0_4) {
            ForceAnimationPlayback(X0_4, 20007, false, false, false);
        }
        if (20010811 == X0_4) {
            ForceAnimationPlayback(X0_4, 20008, false, false, false);
        }
        if (20010812 == X0_4) {
            ForceAnimationPlayback(X0_4, 20009, false, false, false);
        }
        if (20010813 == X0_4) {
            ForceAnimationPlayback(X0_4, 20013, false, false, false);
        }
        Goto(L1);
    }
L1:
    EnableCharacterAI(X0_4);
    EnableCharacterCollision(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, X8_4));
    RestartEvent();
});

$Event(20012835, Restart, function() {
    EndIf(EventFlag(20010800));
    WaitFor(CharacterHasSpEffect(20010800, 20011572) && PlayerIsInOwnWorld());
    DisableCharacterAI(20010800);
    DisableCharacter(20010800);
    DisableCharacterCollision(20010800);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(20010800, AuthorityLevel.Forced);
    }
    if (InArea(10000, 20012833)) {
        WarpCharacterAndCopyFloor(20010830, TargetEntityType.Area, 20012823, -1, 10000);
        RotateCharacter(20010830, 20012822, -1, true);
        RotateCharacter(20010830, 20012822, -1, true);
    } else if (InArea(10000, 20012830)) {
        WarpCharacterAndCopyFloor(20010830, TargetEntityType.Character, 10000, 235, 10000);
        RotateCharacter(20010830, 20012820, -1, true);
        RotateCharacter(20010830, 20012820, -1, true);
    } else if (InArea(10000, 20012831)) {
        WarpCharacterAndCopyFloor(20010830, TargetEntityType.Character, 10000, 235, 10000);
        RotateCharacter(20010830, 20012821, -1, true);
        RotateCharacter(20010830, 20012821, -1, true);
    } else if (InArea(10000, 20012832)) {
        WarpCharacterAndCopyFloor(20010830, TargetEntityType.Character, 10000, 235, 10000);
        RotateCharacter(20010830, 20012822, -1, true);
        RotateCharacter(20010830, 20012822, -1, true);
        Goto(L1);
    }
L1:
    EnableCharacter(20010800);
    EnableCharacterCollision(20010800);
    EnableCharacterAI(20010800);
    ForceAnimationPlayback(20010800, 3024, false, false, false);
    WaitFixedTimeSeconds(0.4);
    WarpCharacterAndCopyFloor(20010800, TargetEntityType.Character, 20010830, 900, 20010830);
    WarpCharacterAndCopyFloor(20010810, TargetEntityType.Character, 20010830, 900, 20010830);
    WarpCharacterAndCopyFloor(20010811, TargetEntityType.Character, 20010830, 900, 20010830);
    WarpCharacterAndCopyFloor(20010812, TargetEntityType.Character, 20010830, 900, 20010830);
    WarpCharacterAndCopyFloor(20010813, TargetEntityType.Character, 20010830, 900, 20010830);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(20012840, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(20010800));
    WaitFor(EventFlag(20012841) && InArea(10000, 20012840));
    ChangeWeather(Weather.FlatClouds, -1, true);
    WaitFor(!InArea(10000, 20012840) || EventFlag(20010800));
    ChangeWeather(Weather.Default, 0.1, false);
    RestartEvent();
});

$Event(20012847, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(20010801));
    WaitFor(InArea(10000, 20012847));
    EndIf(EventFlag(20010801));
    ActivateGparamOverride(4, 3);
    WaitFor(!InArea(10000, 20012847) || EventFlag(20010801));
    EndIf(EventFlag(20010801));
    DeactivateGparamOverride(3);
    RestartEvent();
});

$Event(20012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 20010800, 20011800, 20012800, 20012805, 20015800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 20010800, 20011800, 20012800, 20012805, 20012806, 10000);
    InitializeCommonEvent(0, 9005811, 20010800, 20011800, 1590, 0);
    InitializeCommonEvent(0, 9005811, 20010800, 20011801, 0, 0);
    InitializeCommonEvent(0, 9005822, 20010800, 522000, 20012805, 20012806, 0, 20012802, 0, 0);
});

$Event(20012850, Restart, function() {
    EndIf(EventFlag(20010850));
    WaitFor(
        CharacterHPValue(20010850) <= 0
            && CharacterHPValue(20010851) <= 0
            && CharacterHPValue(20010852) <= 0
            && CharacterHPValue(20010853) <= 0
            && CharacterHPValue(20010854) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(20010850, SoundType.SFX, 888880000);
    WaitFor(
        CharacterDead(20010850)
            && CharacterDead(20010851)
            && CharacterDead(20010852)
            && CharacterDead(20010853)
            && CharacterDead(20010854));
    HandleBossDefeatAndDisplayBanner(20010850, TextBannerType.GreatEnemyFelled);
    if (PlayerIsInOwnWorld()) {
        TriggerMultiplayerEvent(0);
    }
    SetNetworkconnectedEventFlagID(20010850, ON);
});

$Event(20012860, Restart, function() {
    if (EventFlag(20010850)) {
        DisableCharacter(20015850);
        DisableCharacterCollision(20015850);
        ForceCharacterDeath(20015850, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(20015850);
    if (!EventFlag(20010851)) {
        WaitFor(EventFlag(20012855) && InArea(10000, 20012851));
        SetNetworkconnectedEventFlagID(20010851, ON);
    } else {
L1:
        WaitFor(EventFlag(20012855) && InArea(10000, 20012850));
    }
L10:
    EnableCharacterAI(20015850);
    SetNetworkUpdateRate(20015850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 20010850, 0, 141800);
    DisplayBossHealthBar(Enabled, 20010851, 1, 142500);
    DisplayBossHealthBar(Enabled, 20010852, 2, 141700);
});

$Event(20012899, Restart, function() {
    InitializeCommonEvent(0, 9005800, 20010850, 20011850, 20012850, 20012855, 20015850, 10000, 20010851, 20012851);
    InitializeCommonEvent(0, 9005801, 20010850, 20011850, 20012850, 20012855, 20012856, 10000);
    InitializeCommonEvent(0, 9005811, 20010850, 20011850, 3, 20010851);
    InitializeCommonEvent(0, 9005822, 20010850, 931000, 20012855, 20012856, 0, 20012852, 0, 0);
});

$Event(20010700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4) {
    DisableNetworkSync();
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndIf(EventFlag(X8_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X24_4);
    EndIf(!EventFlag(X12_4));
    SetCharacterBackreadState(X0_4, false);
    if (!EventFlag(X4_4)) {
        WaitFor(EventFlag(X4_4));
        RestartEvent();
    }
L0:
    flag = EventFlag(20012766);
    flag2 = EventFlag(20012767) || EventFlag(20012768) || EventFlag(20012769);
    flag3 = EventFlag(20012765);
    if (flag) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012792, -1);
    } else if (flag2) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012790, -1);
    } else if (flag3) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012791, -1);
        Goto(L1);
    }
L1:
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterTeamType(X0_4, TeamType.Human);
    EnableCharacterAI(X0_4);
    GotoIf(S0, EventFlag(20012190));
    GotoIf(S1, EventFlag(20012191));
    Goto(S2);
S0:
    SetSpEffect(X0_4, 7870);
    Goto(S2);
S1:
    SetSpEffect(X0_4, 7871);
S2:
    ForceAnimationPlayback(X0_4, 63010, false, false, false);
    SetCharacterTalkRange(X0_4, X16_4);
    DisplayNetworkMessage(X28_4, false);
    if (EventFlag(X44_4)) {
        SetEventFlagID(X48_4, ON);
        SetEventFlagID(X44_4, OFF);
    } else if (EventFlag(X40_4)) {
        SetEventFlagID(X44_4, ON);
        SetEventFlagID(X40_4, OFF);
    } else if (EventFlag(X36_4)) {
        SetEventFlagID(X40_4, ON);
        SetEventFlagID(X36_4, OFF);
    } else if (EventFlag(X32_4)) {
        SetEventFlagID(X36_4, ON);
        SetEventFlagID(X32_4, OFF);
    } else {
        SetEventFlagID(X32_4, ON);
        Goto(L2);
    }
L2:
    if (Signed(0) != X56_4) {
        WaitFixedTimeSeconds(X52_4);
    }
    SetEventFlagID(X20_4, ON);
    if (EventFlag(20019523)) {
        SetBossBGM(944000, BossBGMState.HeatUp);
    }
    EndEvent();
});

$Event(20010705, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    DisableNetworkSync();
    DisableCharacterAI(X0_4);
    DisableCharacter(X0_4);
    if (EventFlag(X8_4)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X24_4);
    if (!EventFlag(X12_4)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
    SetCharacterBackreadState(X0_4, false);
    if (!EventFlag(X4_4)) {
        WaitFor(EventFlag(X4_4));
        RestartEvent();
    }
L0:
    flag = EventFlag(20012765) || EventFlag(20012766) || EventFlag(20012767);
    flag2 = EventFlag(20012769);
    flag3 = EventFlag(20012768);
    if (flag) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012793, -1);
    } else if (flag2) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012794, -1);
    } else if (flag3) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 20012795, -1);
        Goto(L1);
    }
L1:
    WaitFixedTimeSeconds(X40_4);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    EnableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, 63010, false, false, false);
    SetCharacterTalkRange(X0_4, X16_4);
    ClearSpEffect(X0_4, 18677);
    ClearSpEffect(X0_4, 20004380);
    if (EventFlag(X36_4)) {
        DisplayNetworkMessage(X28_4, false);
    } else {
        DisplayNetworkMessage(X32_4, false);
    }
    if (Signed(0) != X48_4) {
        WaitFixedTimeSeconds(X44_4);
    }
    SetEventFlagID(X20_4, ON);
    EndEvent();
});

$Event(20010708, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!EventFlag(X24_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X20_4);
    EndIf(!EventFlag(X4_4));
    WaitFor(EventFlag(X8_4));
    SetEventFlagID(X12_4, ON);
    WaitFixedTimeSeconds(X16_4);
    SetEventFlagID(X12_4, OFF);
    EndEvent();
});

$Event(20010711, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!EventFlag(X60_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X40_4);
    if (Signed(X56_4) != 0) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X52_4);
    }
    EndIf(EventFlag(X20_4));
    if (!EventFlag(X16_4)) {
        WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X48_4);
        WaitFor(EntityInRadiusOfEntity(X8_4, X4_4, X12_4, 1) || EventFlag(X32_4));
        RestartIf(EventFlag(X48_4));
        EndIf(CharacterHPValue(X4_4) == 0 || CharacterHPValue(X8_4) == 0);
        EndIf(EventFlag(X64_4));
        GotoIf(L2, EventFlag(X32_4));
        WaitFixedTimeFrames(1);
        SetEventFlagID(X16_4, ON);
        RestartEvent();
    }
L0:
    time = ElapsedSeconds(X44_4);
    WaitFor(time || EventFlag(X32_4));
    GotoIf(L1, time.Passed);
    Goto(L2);
L1:
    SetEventFlagID(X16_4, OFF);
    flag = EventFlag(X32_4);
    WaitFor(ElapsedSeconds(X24_4) || flag);
    if (!flag.Passed) {
        RestartIf(EventFlag(X48_4));
        EndIf(EventFlag(X64_4));
        EndIf(CharacterHPValue(X4_4) == 0 || CharacterHPValue(X8_4) == 0);
        SetEventFlagID(X16_4, ON);
        WaitFixedTimeFrames(1);
        SetEventFlagID(X16_4, OFF);
        RestartEvent();
    }
L2:
    WaitFixedTimeFrames(1);
    SetEventFlagID(X16_4, OFF);
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X36_4);
    WaitFixedTimeSeconds(X28_4);
    SetEventFlagID(X32_4, OFF);
    RestartEvent();
});

$Event(20010729, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4) {
    EndIf(EventFlag(X4_4));
    EndIf(!EventFlag(X28_4));
    hp = CharacterHPValue(X0_4) == 0;
    dmgHp = HasDamageType(20000, X0_4, DamageType.Unspecified) && CharacterHPValue(20000) == 0;
    WaitFor(hp || dmgHp);
    if (dmgHp.Passed) {
        RestartIf(EventFlag(X32_4));
        SetEventFlagID(X8_4, ON);
        WaitFor(ElapsedSeconds(X24_4) || CharacterHPValue(X0_4) == 0);
        SetEventFlagID(X8_4, OFF);
        RestartEvent();
    }
    if (HasDamageType(X0_4, 20000, DamageType.Unspecified)) {
        SetEventFlagID(X12_4, ON);
    } else {
        SetEventFlagID(X16_4, ON);
    }
    WaitFixedTimeFrames(1);
    if (!(EventFlag(X60_4) || EventFlag(X64_4))) {
        WaitFixedTimeSeconds(X24_4);
        SetEventFlagID(X12_4, OFF);
        SetEventFlagID(X16_4, OFF);
    }
L0:
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X36_4);
    WaitFixedTimeSeconds(X68_4);
    if (EventFlag(X56_4)) {
        SetEventFlagID(X56_4, OFF);
        SetEventFlagID(X52_4, ON);
    } else if (EventFlag(X52_4)) {
        SetEventFlagID(X52_4, OFF);
        SetEventFlagID(X48_4, ON);
    } else if (EventFlag(X48_4)) {
        SetEventFlagID(X48_4, OFF);
        SetEventFlagID(X44_4, ON);
    } else if (EventFlag(X44_4)) {
        SetEventFlagID(X44_4, OFF);
        SetEventFlagID(X40_4, ON);
    } else if (EventFlag(X40_4)) {
        SetEventFlagID(X40_4, OFF);
        Goto(L1);
    }
L1:
    SetEventFlagID(X20_4, ON);
    EndEvent();
});

$Event(20010731, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4) {
    EndIf(EventFlag(X4_4));
    EndIf(!EventFlag(X24_4));
    hp = CharacterHPValue(X0_4) == 0;
    dmgHp = HasDamageType(20000, X0_4, DamageType.Unspecified) && CharacterHPValue(20000) == 0;
    WaitFor(hp || dmgHp);
    if (dmgHp.Passed) {
        RestartIf(EventFlag(X28_4));
        SetEventFlagID(X8_4, ON);
        WaitFor(ElapsedSeconds(X20_4) || CharacterHPValue(X0_4) == 0);
        SetEventFlagID(X8_4, OFF);
        RestartEvent();
    }
    SetEventFlagID(X12_4, ON);
    WaitFixedTimeFrames(1);
    if (!EventFlag(X56_4)) {
        WaitFixedTimeSeconds(X20_4);
        SetEventFlagID(X8_4, OFF);
        SetEventFlagID(X12_4, OFF);
    }
L0:
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X32_4);
    WaitFixedTimeSeconds(X60_4);
    if (EventFlag(X52_4)) {
        SetEventFlagID(X52_4, OFF);
        SetEventFlagID(X48_4, ON);
    } else if (EventFlag(X48_4)) {
        SetEventFlagID(X48_4, OFF);
        SetEventFlagID(X44_4, ON);
    } else if (EventFlag(X44_4)) {
        SetEventFlagID(X44_4, OFF);
        SetEventFlagID(X40_4, ON);
    } else if (EventFlag(X40_4)) {
        SetEventFlagID(X40_4, OFF);
        SetEventFlagID(X36_4, ON);
    } else if (EventFlag(X36_4)) {
        SetEventFlagID(X36_4, OFF);
        Goto(L1);
    }
L1:
    SetEventFlagID(X16_4, ON);
    EndEvent();
});

$Event(20010733, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4) {
    EndIf(EventFlag(X4_4));
    EndIf(!EventFlag(X20_4));
    WaitFor(CharacterHPValue(X0_4) == 0);
    SetEventFlagID(X8_4, ON);
    WaitFixedTimeFrames(1);
    if (!EventFlag(X52_4)) {
        WaitFixedTimeSeconds(X16_4);
        SetEventFlagID(X8_4, OFF);
    }
L0:
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X28_4);
    if (Signed(X24_4) != 0) {
        WaitFixedTimeSeconds(X56_4);
        if (EventFlag(X48_4)) {
            SetEventFlagID(X48_4, OFF);
            SetEventFlagID(X44_4, ON);
        } else if (EventFlag(X44_4)) {
            SetEventFlagID(X44_4, OFF);
            SetEventFlagID(X40_4, ON);
        } else if (EventFlag(X40_4)) {
            SetEventFlagID(X40_4, OFF);
            SetEventFlagID(X36_4, ON);
        } else if (EventFlag(X36_4)) {
            SetEventFlagID(X36_4, OFF);
            SetEventFlagID(X32_4, ON);
        } else if (EventFlag(X32_4)) {
            SetEventFlagID(X32_4, OFF);
            Goto(L1);
        }
    }
L1:
    if (Signed(X24_4) != 0) {
        SetEventFlagID(X12_4, ON);
        EndEvent();
    }
});

$Event(20010736, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4) {
    EndIf(EventFlag(X52_4));
    EndIf(!EventFlag(X60_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    WaitFixedTimeSeconds(X64_4);
    SetCharacterBackreadState(X48_4, false);
    SetCharacterTalkRange(X48_4, X44_4);
    flagChr = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) >= 4
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= 1
            || CharacterType(10002, TargetType.Invader)
            || CharacterType(10003, TargetType.Invader)
            || CharacterType(10004, TargetType.Invader)
            || CharacterType(10005, TargetType.Invader));
    flagChr2 = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) >= 4
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) == 0
            || CharacterType(10002, TargetType.Invader, Equal, 0)
            || CharacterType(10003, TargetType.Invader, Equal, 0)
            || CharacterType(10004, TargetType.Invader, Equal, 0)
            || CharacterType(10005, TargetType.Invader, Equal, 0));
    flagChr3 = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) == 3
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= 1
            || CharacterType(10002, TargetType.Invader)
            || CharacterType(10003, TargetType.Invader)
            || CharacterType(10004, TargetType.Invader)
            || CharacterType(10005, TargetType.Invader));
    flagChr4 = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) == 3
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) == 0
            || CharacterType(10002, TargetType.Invader, Equal, 0)
            || CharacterType(10003, TargetType.Invader, Equal, 0)
            || CharacterType(10004, TargetType.Invader, Equal, 0)
            || CharacterType(10005, TargetType.Invader, Equal, 0));
    flagChr5 = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) == 2
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= 1
            || CharacterType(10002, TargetType.Invader)
            || CharacterType(10003, TargetType.Invader)
            || CharacterType(10004, TargetType.Invader)
            || CharacterType(10005, TargetType.Invader));
    flagChr6 = CountEventFlags(TargetEventFlagType.EventFlag, X4_4, X8_4) == 2
        && (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) == 0
            || CharacterType(10002, TargetType.Invader, Equal, 0)
            || CharacterType(10003, TargetType.Invader, Equal, 0)
            || CharacterType(10004, TargetType.Invader, Equal, 0)
            || CharacterType(10005, TargetType.Invader, Equal, 0));
    if (flagChr) {
        SetEventFlagID(X40_4, ON);
    } else if (flagChr2) {
        SetEventFlagID(X20_4, ON);
    } else if (flagChr3) {
        SetEventFlagID(X24_4, ON);
    } else if (flagChr4) {
        SetEventFlagID(X28_4, ON);
    } else if (flagChr5) {
        SetEventFlagID(X32_4, ON);
    } else if (flagChr6) {
        SetEventFlagID(X36_4, ON);
        Goto(L0);
    }
L0:
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X56_4);
    DisableCharacterDefaultBackread(X0_4);
    EndEvent();
});

$Event(20010371, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(!EventFlag(X40_4));
    flagArea = !EventFlag(X20_4) && InArea(20000, X0_4);
    flagArea2 = !EventFlag(X24_4) && InArea(20000, X4_4);
    flagArea3 = !EventFlag(X28_4) && InArea(20000, X8_4);
    flagArea4 = !EventFlag(X32_4) && InArea(20000, X12_4);
    flagArea5 = !EventFlag(X36_4) && InArea(20000, X16_4);
    flagArea6 = EventFlag(X20_4) && !InArea(20000, X0_4);
    flagArea7 = EventFlag(X24_4) && !InArea(20000, X4_4);
    flagArea8 = EventFlag(X28_4) && !InArea(20000, X8_4);
    flagArea9 = EventFlag(X32_4) && !InArea(20000, X12_4);
    flagArea10 = EventFlag(X36_4) && !InArea(20000, X16_4);
    WaitFor(
        flagArea
            || flagArea2
            || flagArea3
            || flagArea4
            || flagArea5
            || flagArea6
            || flagArea7
            || flagArea8
            || flagArea9
            || flagArea10);
    if (flagArea.Passed) {
        SetNetworkconnectedEventFlagID(X20_4, ON);
    } else if (flagArea2.Passed) {
        SetNetworkconnectedEventFlagID(X24_4, ON);
    } else if (flagArea3.Passed) {
        SetNetworkconnectedEventFlagID(X28_4, ON);
    } else if (flagArea4.Passed) {
        SetNetworkconnectedEventFlagID(X32_4, ON);
    } else if (flagArea5.Passed) {
        SetNetworkconnectedEventFlagID(X36_4, ON);
    } else if (flagArea6.Passed) {
        SetNetworkconnectedEventFlagID(X20_4, OFF);
    } else if (flagArea7.Passed) {
        SetNetworkconnectedEventFlagID(X24_4, OFF);
    } else if (flagArea8.Passed) {
        SetNetworkconnectedEventFlagID(X28_4, OFF);
    } else if (flagArea9.Passed) {
        SetNetworkconnectedEventFlagID(X32_4, OFF);
    } else if (flagArea10.Passed) {
        SetNetworkconnectedEventFlagID(X36_4, OFF);
        Goto(L0);
    }
L0:
    RestartEvent();
});

$Event(20010738, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4) {
    BatchSetEventFlags(X0_4, X4_4, OFF);
    BatchSetEventFlags(X8_4, X12_4, OFF);
    BatchSetEventFlags(X16_4, X20_4, OFF);
    BatchSetEventFlags(X24_4, X28_4, OFF);
    BatchSetEventFlags(X32_4, X36_4, OFF);
    BatchSetEventFlags(X40_4, X44_4, OFF);
    BatchSetEventFlags(X48_4, X52_4, OFF);
    BatchSetEventFlags(X56_4, X60_4, OFF);
    EndEvent();
});

$Event(20010739, Restart, function(X0_4) {
    SetEventFlagID(20012791, OFF);
    WaitFixedTimeFrames(2);
    EndIf(!EventFlag(X0_4));
    if (EventFlag(7640)) {
        SetNetworkconnectedEventFlagID(20012783, ON);
    }
    if (EventFlag(7644)) {
        SetNetworkconnectedEventFlagID(20012784, ON);
    }
    if (EventFlag(7642)) {
        SetNetworkconnectedEventFlagID(20012785, ON);
    }
    if (EventFlag(7643)) {
        SetNetworkconnectedEventFlagID(20012786, ON);
    }
    if (EventFlag(7641)) {
        SetNetworkconnectedEventFlagID(20012787, ON);
    }
    if (EventFlag(7645)) {
        SetNetworkconnectedEventFlagID(20012788, ON);
    }
    if (EventFlag(7646)) {
        SetNetworkconnectedEventFlagID(20012789, ON);
    }
    if (EventFlag(7647)) {
        SetNetworkconnectedEventFlagID(20012790, ON);
    }
    if (AnyBatchEventFlags(20012788, 20012790)) {
        SetEventFlagID(20019403, ON);
    }
    SetNetworkconnectedEventFlagID(20012791, ON);
    EndEvent();
});

$Event(20010770, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4, X72_4, X76_4, X80_4, X84_4, X88_4) {
    EndIf(EventFlag(X40_4));
    EndIf(!EventFlag(X60_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X56_4);
    flag = EventFlag(X0_4) && !EventFlag(X4_4);
    flagTime = EventFlag(X4_4)
        && !EventFlag(X8_4)
        && EventFlag(X80_4)
        && (ElapsedSeconds(X24_4) || EventFlag(X68_4));
    flagTime2 = EventFlag(X8_4)
        && !EventFlag(X12_4)
        && CountEventFlags(TargetEventFlagType.EventFlag, X48_4, X52_4) >= 3
        && EventFlag(X80_4)
        && (ElapsedSeconds(X28_4) || EventFlag(X72_4) || EventFlag(X44_4));
    flagTime3 = EventFlag(X12_4)
        && !EventFlag(X16_4)
        && CountEventFlags(TargetEventFlagType.EventFlag, X48_4, X52_4) >= 4
        && EventFlag(X80_4)
        && (ElapsedSeconds(X32_4)
            || EventFlag(X64_4)
            || EventFlag(X76_4)
            || (!EventFlag(X64_4) && !EventFlag(X76_4) && !EventFlag(X84_4)));
    flagTime4 = EventFlag(X16_4)
        && !EventFlag(X20_4)
        && CountEventFlags(TargetEventFlagType.EventFlag, X48_4, X52_4) == 5
        && EventFlag(X80_4)
        && (ElapsedSeconds(X36_4)
            || EventFlag(X64_4)
            || EventFlag(X76_4)
            || (!EventFlag(X64_4) && !EventFlag(X76_4) && !EventFlag(X84_4) && !EventFlag(X88_4)));
    WaitFor(flag || flagTime || flagTime2 || flagTime3 || flagTime4);
    SetEventFlagID(X68_4, OFF);
    SetEventFlagID(X44_4, OFF);
    SetEventFlagID(X80_4, OFF);
    if (flag.Passed) {
        SetEventFlagID(X4_4, ON);
    } else if (flagTime.Passed) {
        SetEventFlagID(X8_4, ON);
    } else if (flagTime2.Passed) {
        SetEventFlagID(X12_4, ON);
    } else if (flagTime3.Passed) {
        SetEventFlagID(X16_4, ON);
    } else if (flagTime4.Passed) {
        SetEventFlagID(X20_4, ON);
    }
L0:
    RestartEvent();
});

$Event(20010771, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4) {
    EndIf(EventFlag(X52_4));
    EndIf(!EventFlag(X56_4));
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X12_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X16_4));
    if (!EventFlag(X16_4)) {
        GotoIf(L3, EventFlag(X12_4));
        GotoIf(L2, EventFlag(X8_4));
        GotoIf(L1, EventFlag(X4_4));
        if (!EventFlag(X0_4)) {
            RestartEvent();
        }
L0:
        GotoIf(S0, !EventFlag(X44_4));
        SetNetworkconnectedEventFlagID(X36_4, ON);
        Goto(L5);
S0:
        GotoIf(S1, !EventFlag(X40_4));
        SetNetworkconnectedEventFlagID(X28_4, ON);
        Goto(L5);
S1:
        GotoIf(S2, !EventFlag(X48_4));
        SetNetworkconnectedEventFlagID(X32_4, ON);
        Goto(L5);
S2:
        SetNetworkconnectedEventFlagID(X24_4, ON);
        Goto(L5);
L1:
        GotoIf(L6, EventFlag(X44_4));
        Goto(L7);
L6:
        GotoIf(S3, !EventFlag(X40_4));
        SetNetworkconnectedEventFlagID(X28_4, ON);
        Goto(L5);
S3:
        GotoIf(S4, !EventFlag(X48_4));
        SetNetworkconnectedEventFlagID(X32_4, ON);
        Goto(L5);
S4:
        SetNetworkconnectedEventFlagID(X24_4, ON);
        Goto(L5);
L7:
        GotoIf(S5, !(EventFlag(X40_4) && EventFlag(X48_4)));
        SetNetworkconnectedEventFlagID(X32_4, ON);
        Goto(L5);
S5:
        GotoIf(S6, !(!EventFlag(X40_4) && !EventFlag(X48_4)));
        SetNetworkconnectedEventFlagID(X20_4, ON);
        Goto(L5);
S6:
        SetNetworkconnectedEventFlagID(X24_4, ON);
        Goto(L5);
L2:
        GotoIf(S7, !(EventFlag(X40_4) && EventFlag(X44_4) && EventFlag(X48_4)));
        SetNetworkconnectedEventFlagID(X32_4, ON);
        Goto(L5);
S7:
        GotoIf(S8, 
            !((!EventFlag(X40_4) && EventFlag(X44_4) && EventFlag(X48_4))
                || (EventFlag(X40_4) && !EventFlag(X44_4) && EventFlag(X48_4))
                || (EventFlag(X40_4) && EventFlag(X44_4) && !EventFlag(X48_4))));
        SetNetworkconnectedEventFlagID(X24_4, ON);
        Goto(L5);
S8:
        SetNetworkconnectedEventFlagID(X20_4, ON);
        Goto(L5);
L3:
        GotoIf(S9, !(EventFlag(X40_4) && EventFlag(X44_4) && EventFlag(X48_4)));
        SetNetworkconnectedEventFlagID(X24_4, ON);
        Goto(L5);
S9:
        SetNetworkconnectedEventFlagID(X20_4, ON);
    } else {
L4:
        SetNetworkconnectedEventFlagID(X20_4, ON);
        Goto(L5);
    }
L5:
    RestartEvent();
});

$Event(20010772, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X32_4));
    EndIf(!EventFlag(X36_4));
    WaitFixedTimeFrames(1);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4));
    if (!EventFlag(X4_4)) {
        if (!EventFlag(X0_4)) {
        }
L0:
        GotoIf(S0, !EventFlag(X20_4));
        SetNetworkconnectedEventFlagID(X8_4, ON);
        Goto(L2);
S0:
        GotoIf(S1, !EventFlag(X28_4));
        SetNetworkconnectedEventFlagID(X16_4, ON);
        Goto(L2);
S1:
        if (EventFlag(X24_4)) {
            SetNetworkconnectedEventFlagID(X12_4, ON);
        }
    } else {
L1:
        if (EventFlag(X20_4) && EventFlag(X24_4)) {
            SetNetworkconnectedEventFlagID(X12_4, ON);
        } else {
            if (!EventFlag(X20_4) && EventFlag(X24_4) && EventFlag(X28_4)) {
                SetNetworkconnectedEventFlagID(X12_4, ON);
            }
            Goto(L2);
        }
    }
L2:
    RestartEvent();
});

$Event(20010773, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4, X72_4, X76_4, X80_4, X84_4) {
    EndIf(!EventFlag(X52_4));
    WaitFixedTimeFrames(1);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    WaitFor(
        (EventFlag(X0_4)
            && !EventFlag(X4_4)
            && EventFlag(X60_4)
            && (ElapsedSeconds(X20_4) || EventFlag(X56_4)))
            || (EventFlag(X4_4)
                && !EventFlag(X8_4)
                && CountEventFlags(TargetEventFlagType.EventFlag, X36_4, X40_4) >= 3
                && EventFlag(X60_4)
                && (ElapsedSeconds(X24_4) || EventFlag(X64_4) || EventFlag(X44_4)))
            || (EventFlag(X8_4)
                && !EventFlag(X12_4)
                && CountEventFlags(TargetEventFlagType.EventFlag, X36_4, X40_4) >= 4
                && EventFlag(X60_4)
                && (ElapsedSeconds(X28_4) || EventFlag(X68_4) || EventFlag(X72_4)))
            || (EventFlag(X12_4)
                && !EventFlag(X16_4)
                && CountEventFlags(TargetEventFlagType.EventFlag, X36_4, X40_4) == 5
                && EventFlag(X60_4)
                && (ElapsedSeconds(X32_4) || EventFlag(X68_4) || EventFlag(X72_4))));
    SetEventFlagID(X48_4, ON);
    SetEventFlagID(X76_4, ON);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X12_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X16_4));
    SetEventFlagID(X76_4, OFF);
    if (!EventFlag(X76_4) && !EventFlag(X80_4) && !EventFlag(X84_4)) {
        SetEventFlagID(X48_4, OFF);
    }
    RestartEvent();
});

$Event(20010774, Restart, function(X0_4) {
    EndIf(EventFlag(7625));
    EndIf(!EventFlag(7630));
    WaitFixedTimeFrames(1);
    WaitFor(
        !EventFlag(20019533)
            && (EventFlag(20019284)
                || EventFlag(20019285)
                || EventFlag(20019286)
                || EventFlag(20019287)
                || EventFlag(20019288)
                || EventFlag(20019289)
                || EventFlag(20019240)
                || EventFlag(20019241)
                || EventFlag(20019242)
                || EventFlag(20019243)
                || EventFlag(20019244)
                || EventFlag(20012724)
                || EventFlag(20012725)
                || EventFlag(20012726)
                || EventFlag(20012727)
                || EventFlag(20012736)
                || EventFlag(20012737)
                || EventFlag(20012738)
                || EventFlag(20012739)
                || EventFlag(20019350)
                || EventFlag(20019351)
                || EventFlag(20012745)
                || EventFlag(20012748)
                || EventFlag(20012749)
                || EventFlag(20012753)
                || EventFlag(20012754)
                || EventFlag(20012755)
                || EventFlag(20012761)));
    if (EventFlag(20019287)) {
        SetEventFlagID(20019281, ON);
    } else if (EventFlag(20019288)) {
        SetEventFlagID(20019282, ON);
    } else if (EventFlag(20019289)) {
        SetEventFlagID(20019283, ON);
    } else if (EventFlag(20012761)) {
        SetEventFlagID(20012760, ON);
    } else if (EventFlag(20019244)) {
        SetEventFlagID(20019239, ON);
    } else if (EventFlag(20012739)) {
        SetEventFlagID(20012733, ON);
    } else if (EventFlag(20019350)) {
        SetEventFlagID(20012734, ON);
    } else if (EventFlag(20019351)) {
        SetEventFlagID(20012735, ON);
    } else if (EventFlag(20012754)) {
        SetEventFlagID(20012751, ON);
    } else if (EventFlag(20012755)) {
        SetEventFlagID(20012752, ON);
    } else if (EventFlag(20012727)) {
        SetEventFlagID(20012723, ON);
    } else if (EventFlag(20012748)) {
        SetEventFlagID(20012743, ON);
    } else if (EventFlag(20012749)) {
        SetEventFlagID(20012744, ON);
    } else if (EventFlag(20019243)) {
        SetEventFlagID(20019238, ON);
    } else if (EventFlag(20012738)) {
        SetEventFlagID(20012732, ON);
    } else if (EventFlag(20012726)) {
        SetEventFlagID(20012722, ON);
    } else {
        if (!EventFlag(X0_4)) {
            if (EventFlag(20019284)) {
                SetEventFlagID(20012717, ON);
                Goto(L0);
            }
        }
        if (EventFlag(20019285)) {
            SetEventFlagID(20012718, ON);
        } else if (EventFlag(20019286)) {
            SetEventFlagID(20019280, ON);
        } else {
            if (!EventFlag(X0_4)) {
                if (EventFlag(20019240)) {
                    SetEventFlagID(20019235, ON);
                    Goto(L0);
                }
            }
            if (EventFlag(20019241)) {
                SetEventFlagID(20019236, ON);
            } else if (EventFlag(20019242)) {
                SetEventFlagID(20019237, ON);
            } else {
                if (!EventFlag(X0_4)) {
                    if (EventFlag(20012736)) {
                        SetEventFlagID(20012730, ON);
                        Goto(L0);
                    }
                }
                if (EventFlag(20012737)) {
                    SetEventFlagID(20012731, ON);
                } else {
                    if (!EventFlag(X0_4)) {
                        if (EventFlag(20012753)) {
                            SetEventFlagID(20012750, ON);
                            Goto(L0);
                        }
                    }
                    if (!EventFlag(X0_4)) {
                        if (EventFlag(20012724)) {
                            SetEventFlagID(20012720, ON);
                            Goto(L0);
                        }
                    }
                    if (EventFlag(20012725)) {
                        SetEventFlagID(20012721, ON);
                    } else if (!EventFlag(X0_4)) {
                        if (EventFlag(20012745)) {
                            SetEventFlagID(20012740, ON);
                            Goto(L0);
                        }
                    }
                }
            }
        }
    }
L0:
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(20010775, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(EventFlag(X44_4));
    EndIf(!EventFlag(X52_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X48_4);
    WaitFor(
        (CharacterHPValue(X0_4) == 0 || !EventFlag(X4_4))
            && (CharacterHPValue(X8_4) == 0 || !EventFlag(X12_4))
            && (CharacterHPValue(X16_4) == 0 || !EventFlag(X20_4))
            && (CharacterHPValue(X24_4) == 0 || !EventFlag(X28_4))
            && (CharacterHPValue(X32_4) == 0 || !EventFlag(X36_4)));
    SetNetworkconnectedEventFlagID(X40_4, ON);
    EndEvent();
});

$Event(20010776, Restart, function(X0_4, X4_4) {
    EndIf(!EventFlag(X0_4));
    EnableCharacterDefaultBackread(X4_4);
    EndEvent();
});

$Event(20010777, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!EventFlag(X16_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X12_4);
    if (AnyBatchEventFlags(X0_4, X4_4)
        || CharacterType(10002, TargetType.Invader)
        || CharacterType(10003, TargetType.Invader)
        || CharacterType(10004, TargetType.Invader)
        || CharacterType(10005, TargetType.Invader)) {
        SetEventFlagID(X8_4, ON);
    }
    EndEvent();
});

$Event(20010778, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4, X72_4, X76_4) {
    EndIf(!EventFlag(X68_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X72_4);
    if (EventFlag(X20_4)) {
        hpFlag = HPRatio(X0_4) <= X64_4 && !EventFlag(X40_4);
        hpFlag2 |= hpFlag;
    }
    if (EventFlag(X24_4)) {
        hpFlag3 = HPRatio(X4_4) <= X64_4 && !EventFlag(X44_4);
        hpFlag2 |= hpFlag3;
    }
    if (EventFlag(X28_4)) {
        hpFlag4 = HPRatio(X8_4) <= X64_4 && !EventFlag(X48_4);
        hpFlag2 |= hpFlag4;
    }
    if (EventFlag(X32_4)) {
        hpFlag5 = HPRatio(X12_4) <= X64_4 && !EventFlag(X52_4);
        hpFlag2 |= hpFlag5;
    }
    if (EventFlag(X36_4)) {
        hpFlag6 = HPRatio(X16_4) <= X64_4 && !EventFlag(X56_4);
        hpFlag2 |= hpFlag6;
    }
    if (EventFlag(X20_4)) {
        cond &= HPRatio(X0_4) > X64_4 && EventFlag(X40_4);
        hpFlag7 |= cond;
    }
    if (EventFlag(X24_4)) {
        hpFlag8 = HPRatio(X4_4) > X64_4 && EventFlag(X44_4);
        hpFlag7 |= hpFlag8;
    }
    if (EventFlag(X28_4)) {
        hpFlag9 = HPRatio(X8_4) > X64_4 && EventFlag(X48_4);
        hpFlag7 |= hpFlag9;
    }
    if (EventFlag(X32_4)) {
        hpFlag10 = HPRatio(X12_4) > X64_4 && EventFlag(X52_4);
        hpFlag7 |= hpFlag10;
    }
    if (EventFlag(X36_4)) {
        hpFlag11 = HPRatio(X16_4) > X64_4 && EventFlag(X56_4);
        hpFlag7 |= hpFlag11;
    }
    WaitFor(hpFlag2 || hpFlag7);
    if (EventFlag(X20_4)) {
        GotoIf(S0, EventFlag(X40_4));
        GotoIf(S0, !hpFlag.Passed);
        SetEventFlagID(X40_4, ON);
        Goto(L0);
    }
S0:
    if (EventFlag(X24_4)) {
        if (!EventFlag(X44_4)) {
            GotoIf(S1, !hpFlag3.Passed);
            SetEventFlagID(X44_4, ON);
            Goto(L0);
        }
    }
S1:
    if (EventFlag(X28_4)) {
        if (!EventFlag(X48_4)) {
            GotoIf(S2, !hpFlag4.Passed);
            SetEventFlagID(X48_4, ON);
            Goto(L0);
        }
    }
S2:
    if (EventFlag(X32_4)) {
        if (!EventFlag(X52_4)) {
            GotoIf(S3, !hpFlag5.Passed);
            SetEventFlagID(X52_4, ON);
            Goto(L0);
        }
    }
S3:
    if (EventFlag(X36_4)) {
        if (!EventFlag(X56_4)) {
            GotoIf(S4, !hpFlag6.Passed);
            SetEventFlagID(X56_4, ON);
            Goto(L0);
        }
    }
S4:
    if (EventFlag(X20_4)) {
        if (EventFlag(X40_4)) {
            if (cond.Passed) {
                SetEventFlagID(X40_4, OFF);
                Goto(L1);
            }
        }
    }
    if (EventFlag(X24_4)) {
        if (EventFlag(X44_4)) {
            if (hpFlag8.Passed) {
                SetEventFlagID(X44_4, OFF);
                Goto(L1);
            }
        }
    }
    if (EventFlag(X28_4)) {
        if (EventFlag(X48_4)) {
            if (hpFlag9.Passed) {
                SetEventFlagID(X48_4, OFF);
                Goto(L1);
            }
        }
    }
    if (EventFlag(X32_4)) {
        if (EventFlag(X52_4)) {
            if (hpFlag10.Passed) {
                SetEventFlagID(X52_4, OFF);
                Goto(L1);
            }
        }
    }
    if (EventFlag(X36_4)) {
        GotoIf(S5, !EventFlag(X56_4));
        GotoIf(S5, !hpFlag11.Passed);
        SetEventFlagID(X56_4, OFF);
    } else {
S5:
L0:
        SetEventFlagID(X60_4, ON);
    }
L1:
    cond &= CountEventFlags(TargetEventFlagType.EventFlag, X40_4, X56_4) >= 2;
    if (cond) {
        SetEventFlagID(X76_4, ON);
    } else {
        SetEventFlagID(X76_4, OFF);
    }
    RestartEvent();
});

$Event(20010779, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(X28_4));
    WaitFor(EventFlag(X0_4) || EventFlag(X4_4));
    GotoIf(L0, EventFlag(X0_4));
    GotoIf(L1, EventFlag(X4_4));
L0:
    if (EventFlag(X20_4)) {
        SetEventFlagID(X24_4, ON);
        SetEventFlagID(X20_4, OFF);
        RestartEvent();
    }
    if (EventFlag(X16_4)) {
        SetEventFlagID(X20_4, ON);
        SetEventFlagID(X16_4, OFF);
        RestartEvent();
    }
    if (EventFlag(X12_4)) {
        SetEventFlagID(X16_4, ON);
        SetEventFlagID(X12_4, OFF);
        RestartEvent();
    }
    if (EventFlag(X8_4)) {
        SetEventFlagID(X12_4, ON);
        SetEventFlagID(X8_4, OFF);
        RestartEvent();
    }
    SetEventFlagID(X8_4, ON);
    RestartEvent();
L1:
    if (EventFlag(X24_4)) {
        SetEventFlagID(X24_4, OFF);
        SetEventFlagID(X20_4, ON);
        RestartEvent();
    }
    if (EventFlag(X20_4)) {
        SetEventFlagID(X20_4, OFF);
        SetEventFlagID(X16_4, ON);
        RestartEvent();
    }
    if (EventFlag(X16_4)) {
        SetEventFlagID(X16_4, OFF);
        SetEventFlagID(X12_4, ON);
        RestartEvent();
    }
    if (EventFlag(X12_4)) {
        SetEventFlagID(X12_4, OFF);
        SetEventFlagID(X8_4, ON);
        RestartEvent();
    }
    if (EventFlag(X8_4)) {
        SetEventFlagID(X8_4, OFF);
        RestartEvent();
    }
});

$Event(20010780, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(!EventFlag(X20_4));
    if (!EventFlag(X32_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
        WaitFor(ElapsedSeconds(X8_4) && EventFlag(X28_4));
        SetEventFlagID(X32_4, ON);
    }
L0:
    WaitFixedTimeFrames(1);
    if (EventFlag(X28_4)) {
        if (!EventFlag(X36_4)) {
            if (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= X24_4) {
                SetEventFlagID(X0_4, ON);
                SetEventFlagID(X28_4, OFF);
            }
            EndEvent();
        }
    }
L1:
    WaitFor(EventFlag(X28_4) && !EventFlag(X36_4));
    RestartEvent();
});

$Event(20010781, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(!EventFlag(X20_4));
    if (!EventFlag(X48_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X44_4);
        if (CountEventFlags(TargetEventFlagType.EventFlag, X28_4, X32_4) < 3) {
            WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X36_4);
        } else {
L0:
            WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
            Goto(L1);
        }
L1:
        WaitFor(ElapsedSeconds(X8_4) && EventFlag(X40_4) && EventFlag(X36_4));
        SetEventFlagID(X48_4, ON);
    }
L2:
    WaitFixedTimeFrames(1);
    if (EventFlag(X40_4)) {
        if (!EventFlag(X52_4)) {
            if (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= X24_4) {
                SetEventFlagID(X0_4, ON);
                SetEventFlagID(X40_4, OFF);
            }
            EndEvent();
        }
    }
L3:
    WaitFor(EventFlag(X40_4) && !EventFlag(X52_4));
    RestartEvent();
});

$Event(20010782, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(!EventFlag(X44_4));
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X20_4);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X12_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X16_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X24_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X28_4)
            || flag);
    GotoIf(L0, flag.Passed);
    Goto(L1);
L0:
    WaitFixedTimeSeconds(X32_4);
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X40_4);
    SetEventFlagID(X36_4, ON);
    Goto(L2);
L1:
    WaitFixedTimeSeconds(X32_4);
    SetEventFlagID(X36_4, ON);
    Goto(L2);
L2:
    RestartEvent();
});

$Event(20010783, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4) {
    EndIf(!EventFlag(X16_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    WaitFor(ElapsedSeconds(X4_4));
    if (CountEventFlags(TargetEventFlagType.EventFlag, X8_4, X12_4) >= X20_4) {
        SetEventFlagID(X24_4, ON);
        SetEventFlagID(X32_4, ON);
    }
    if (EventFlag(X40_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X52_4);
    } else if (EventFlag(X48_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X60_4);
    } else if (EventFlag(X44_4)) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X56_4);
        Goto(L0);
    }
L0:
    SetEventFlagID(X32_4, OFF);
    if (!EventFlag(X28_4) && !EventFlag(X32_4) && !EventFlag(X36_4)) {
        SetEventFlagID(X24_4, OFF);
    }
    EndEvent();
});

$Event(20010784, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4) {
    EndIf(!EventFlag(X20_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X56_4);
    if (CountEventFlags(TargetEventFlagType.EventFlag, X28_4, X32_4) > 2) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
    } else {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X36_4);
    }
    WaitFor(ElapsedSeconds(X8_4));
    if (CountEventFlags(TargetEventFlagType.EventFlag, X12_4, X16_4) >= X24_4) {
        SetEventFlagID(X40_4, ON);
        SetEventFlagID(X52_4, ON);
    }
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X0_4);
    SetEventFlagID(X52_4, OFF);
    if (!EventFlag(X44_4) && !EventFlag(X48_4) && !EventFlag(X52_4)) {
        SetEventFlagID(X40_4, OFF);
    }
    EndEvent();
});

$Event(20010785, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X8_4) && CharacterHPValue(X0_4) == 0);
    WaitFixedTimeSeconds(X12_4);
    DisplayNetworkMessage(X4_4, false);
    EndEvent();
});

$Event(20010793, Restart, function(X0_4, X4_4) {
    EndIf(!EventFlag(X0_4));
    WaitFor(CharacterHPValue(20000) == 0);
    WaitFixedTimeFrames(1);
    SetEventFlagID(X4_4, ON);
    EndEvent();
});

$Event(20010740, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacterInvincibility(X0_4);
    flag = EventFlag(X8_4) && !EventFlag(X16_4);
    if (!flag) {
        WaitFor(flag);
        RestartEvent();
    }
L0:
    if (!EventFlag(X4_4)) {
    }
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    WaitFor(CharacterBackreadStatus(X0_4));
    ResetCharacterPosition(X0_4);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X8_4) || EventFlag(X16_4));
    RestartEvent();
});

$Event(20010741, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (!EventFlag(X8_4)) {
        SetEventFlagID(X4_4, OFF);
        WaitFor(EventFlag(X0_4));
        WaitFixedTimeFrames(1);
        SetEventFlagID(X4_4, ON);
        EndEvent();
    }
L20:
    EndEvent();
});

$Event(20010742, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    hp = CharacterHPValue(10000) <= 0;
    flag = EventFlag(X8_4);
    WaitFor(hp || flag);
    if (flag) {
        SetEventFlagID(X4_4, ON);
        EndEvent();
    }
});

$Event(20010743, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X4_4));
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X8_4) || EventFlag(X16_4));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    flag = !EventFlag(X8_4);
    flag2 = EventFlag(X12_4);
    RestartEvent();
});

$Event(20010744, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X8_4));
    EndIf(!EventFlag(X4_4));
    WaitFor(EventFlag(X8_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(20010745, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (!EventFlag(X8_4)) {
        SetEventFlagID(X4_4, OFF);
        WaitFor(EventFlag(X0_4));
        WaitFixedTimeFrames(1);
        SetEventFlagID(X4_4, ON);
        EndEvent();
    }
L20:
    EndEvent();
});

$Event(20010746, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    hp = CharacterHPValue(10000) <= 0;
    flag = EventFlag(X8_4);
    WaitFor(hp || flag);
    if (flag) {
        SetEventFlagID(X4_4, ON);
        EndEvent();
    }
});

$Event(20010750, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(X4_4) && EventFlag(X8_4))) {
        WaitFor(EventFlag(X4_4) && EventFlag(X8_4));
        RestartEvent();
    }
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    WaitFor(CharacterBackreadStatus(X0_4));
    ResetCharacterPosition(X0_4);
    ForceAnimationPlayback(X0_4, X12_4, true, false, false);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
});

$Event(20010760, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(!EventFlag(X4_4) && !EventFlag(X8_4))) {
        WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
        RestartEvent();
    }
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    WaitFor(CharacterBackreadStatus(X0_4));
    ResetCharacterPosition(X0_4);
    SetCharacterTalkRange(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X12_4, true, false, false);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
});

$Event(20010761, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (EventFlag(X16_4) && !EventFlag(X20_4)) {
        SetEventFlagID(X20_4, ON);
        if (EventFlag(X24_4)) {
            SetEventFlagID(X32_4, ON);
        } else {
            SetEventFlagID(X40_4, ON);
        }
        if (EventFlag(X28_4)) {
            SetEventFlagID(X36_4, ON);
        }
    }
    if (!EventFlag(X8_4)) {
        if (!EventFlag(X16_4)) {
            EnableCharacterInvincibility(X4_4);
            EnableCharacterImmortality(X0_4);
            DisableCharacter(X0_4);
            WaitFor(EventFlag(X16_4));
            SetSpEffect(X4_4, 9910);
            DisableCharacterCollision(X4_4);
            SpawnOneshotSFX(TargetEntityType.Character, X4_4, 200, 604220);
            SetEventFlagID(4418, ON);
            SetEventFlagID(4438, ON);
            SetEventFlagID(4378, ON);
            SetEventFlagID(4398, ON);
            SetEventFlagID(4478, ON);
            SetEventFlagID(4578, ON);
            SetEventFlagID(4458, ON);
            SetEventFlagID(X12_4, ON);
            WaitFixedTimeRealFrames(5);
            if (EventFlag(X16_4)) {
                SetEventFlagID(X20_4, ON);
                if (EventFlag(X24_4)) {
                    SetEventFlagID(X32_4, ON);
                } else {
                    SetEventFlagID(X40_4, ON);
                }
                if (EventFlag(X28_4)) {
                    SetEventFlagID(X36_4, ON);
                }
            }
            WaitFixedTimeSeconds(5);
            DisableCharacter(X4_4);
            SetCharacterBackreadState(X4_4, true);
            EndEvent();
        }
L19:
        SetEventFlagID(X20_4, ON);
        if (EventFlag(X24_4)) {
            SetEventFlagID(X32_4, ON);
        } else {
            SetEventFlagID(X40_4, ON);
        }
        if (EventFlag(X28_4)) {
            SetEventFlagID(X36_4, ON);
        }
        EndEvent();
    }
L20:
    DisableCharacter(X0_4);
    if (!EventFlag(7625)) {
        SetEventFlagID(X20_4, ON);
        if (EventFlag(X24_4)) {
            SetEventFlagID(X32_4, ON);
        } else {
            SetEventFlagID(X40_4, ON);
        }
        if (EventFlag(X28_4)) {
            SetEventFlagID(X36_4, ON);
        }
    }
    WaitFor(!EventFlag(X8_4));
    EnableCharacter(X0_4);
    RestartEvent();
});

$Event(20010762, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    SetEventFlagID(X0_4, ON);
});

$Event(20010763, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    EnableCharacterInvincibility(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(CharacterHPValue(X8_4) <= 0);
    EnableCharacter(X0_4);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X8_4, 6);
    WaitFixedTimeSeconds(20);
    DisableCharacter(X0_4);
});
