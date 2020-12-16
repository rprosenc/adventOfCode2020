const real = {
    rules: `departure location: 29-917 or 943-952
departure station: 50-875 or 884-954
departure platform: 41-493 or 503-949
departure track: 50-867 or 875-966
departure date: 30-655 or 679-956
departure time: 46-147 or 153-958
arrival location: 50-329 or 344-968
arrival station: 42-614 or 623-949
arrival platform: 35-849 or 860-973
arrival track: 42-202 or 214-959
class: 38-317 or 329-968
duration: 44-530 or 539-953
price: 28-713 or 727-957
route: 30-157 or 179-966
row: 38-114 or 136-969
seat: 45-441 or 465-956
train: 44-799 or 824-951
type: 41-411 or 437-953
wagon: 39-79 or 86-969
zone: 48-306 or 317-974`,
    ticket: `
191,89,73,139,71,103,109,53,97,179,59,67,79,101,113,157,61,107,181,137`,
    nearbyTickets: `917,157,627,684,64,737,544,626,363,77,742,911,781,358,138,253,545,93,95,500
626,449,570,369,219,949,270,51,690,546,114,825,291,627,875,373,829,473,393,482
639,400,88,768,350,352,583,119,407,734,228,58,64,635,600,257,847,862,472,224
624,695,636,697,690,527,297,849,764,949,570,691,70,306,76,424,752,71,561,648
301,849,904,844,687,553,216,137,353,287,592,257,588,742,197,206,346,355,507,301
55,106,865,385,259,352,574,438,787,890,511,211,866,794,847,588,944,406,376,569
68,705,902,75,390,243,895,394,907,638,522,679,291,794,884,73,474,406,366,321
385,146,561,266,733,4,260,467,180,730,480,296,912,220,887,639,269,557,764,329
359,395,787,872,392,102,551,770,568,223,654,179,863,96,599,840,154,764,238,370
611,897,758,11,760,248,280,793,137,867,739,605,359,580,100,886,945,285,185,548
741,52,654,230,189,155,824,330,629,437,234,624,227,71,827,398,403,476,364,373
350,529,231,385,217,265,487,488,695,76,858,528,548,488,696,763,593,948,217,147
265,179,542,341,564,300,395,763,700,738,389,147,291,246,542,393,530,637,503,186
327,64,297,628,569,798,72,685,77,799,764,92,727,146,482,646,101,904,190,835
646,481,643,626,218,480,470,536,784,475,568,68,196,529,296,403,863,74,235,760
844,882,860,571,188,198,264,736,825,482,373,862,651,182,286,775,626,56,587,897
590,651,385,712,608,399,746,873,473,745,685,361,603,629,562,295,699,611,92,389
76,190,620,401,96,510,238,839,273,604,688,295,906,553,567,828,514,627,62,575
187,380,145,864,710,223,864,553,636,215,791,915,539,489,841,749,651,355,507,983
297,234,778,558,615,910,409,386,344,944,736,609,779,752,76,246,226,219,825,546
107,839,409,866,503,243,365,303,3,147,825,737,255,761,252,825,288,293,777,391
554,896,705,626,489,792,138,285,626,285,312,140,643,215,290,269,491,217,491,470
366,227,294,154,883,551,576,377,74,519,730,179,903,608,530,752,66,58,254,526
371,243,787,187,467,363,462,147,379,549,192,550,889,747,214,261,471,845,781,232
68,363,639,192,728,299,627,63,261,576,487,349,146,277,738,300,514,975,244,146
587,647,472,902,861,701,465,481,92,833,256,186,207,280,92,901,736,681,234,508
593,916,710,284,106,0,73,752,729,779,400,740,788,57,384,571,186,522,741,561
483,129,520,272,222,290,253,626,409,690,196,215,106,189,138,91,734,475,237,737
439,496,643,688,891,279,690,75,56,574,297,864,646,642,184,744,349,257,597,110
775,396,92,730,763,365,909,244,524,405,903,283,22,190,746,289,763,111,344,193
587,55,5,69,62,108,743,679,143,192,290,652,526,550,473,572,377,650,544,392
251,246,787,672,466,693,860,70,824,183,777,490,136,179,705,221,685,896,713,389
624,711,651,113,50,894,759,895,103,978,264,104,467,381,196,745,361,371,758,694
272,261,256,543,734,588,772,828,250,59,359,141,650,480,55,710,216,84,284,700
901,481,217,619,767,544,214,562,574,357,215,91,753,897,527,738,154,773,99,596
651,753,783,763,743,788,788,892,409,746,878,796,785,592,63,504,389,382,488,902
220,65,107,347,89,836,350,614,358,73,756,505,767,839,597,145,83,364,297,289
452,357,861,136,484,156,862,685,386,293,241,193,735,606,903,916,563,492,864,709
111,254,255,741,666,136,242,584,438,355,644,596,469,288,473,605,771,694,489,597
386,519,65,442,861,828,185,712,600,762,743,739,385,797,582,491,268,156,905,794
397,728,229,891,611,438,144,794,96,239,921,945,250,184,907,517,914,294,900,270
558,627,751,17,728,181,59,74,410,221,862,265,691,846,265,266,796,391,53,222
306,296,264,348,184,639,57,796,545,788,475,693,564,752,200,366,862,208,110,94
566,103,532,88,684,191,347,828,76,904,491,734,264,512,767,486,280,56,693,759
650,733,430,239,195,256,294,565,505,104,829,87,731,593,944,630,141,604,733,701
52,318,220,838,507,107,251,599,378,383,396,765,402,755,352,188,365,738,292,739
696,569,358,228,193,267,710,63,905,615,100,371,393,689,552,91,516,139,290,197
77,740,68,576,515,750,835,183,989,573,843,600,847,145,703,892,791,764,76,569
754,593,885,91,778,894,623,617,487,216,513,900,144,237,944,113,946,370,708,354
623,521,487,682,686,594,906,278,389,68,617,359,295,231,830,875,113,825,186,186
793,931,518,529,679,87,367,295,525,683,76,784,901,293,247,57,195,638,947,87
428,109,519,708,265,288,605,576,639,614,513,508,53,541,93,762,838,389,860,438
483,785,556,397,762,642,680,609,753,92,347,185,323,709,866,440,329,224,750,305
211,627,53,585,74,260,629,543,895,200,239,379,610,61,765,345,586,751,611,763
196,775,886,589,154,896,105,224,406,552,574,692,598,347,637,107,373,739,650,207
688,351,68,565,199,781,197,839,388,702,865,81,647,228,480,74,56,731,394,605
576,195,157,59,83,271,298,108,587,193,180,291,553,141,916,298,350,474,730,264
216,183,229,482,0,191,75,684,180,865,746,106,103,844,481,634,96,398,581,353
540,518,730,884,783,441,263,403,100,152,269,281,796,915,948,250,684,77,774,638
712,180,224,798,602,906,704,602,400,905,483,105,686,649,190,533,835,51,650,546
51,351,753,610,267,199,105,651,239,944,84,837,640,762,650,554,346,527,915,908
614,531,702,376,780,945,491,578,395,601,286,705,515,759,948,286,264,728,521,512
654,779,360,580,736,242,795,877,437,578,269,55,226,467,361,650,491,576,911,567
87,774,19,696,713,79,237,222,103,560,690,679,512,489,624,145,353,772,775,440
508,141,156,831,280,739,224,710,703,291,344,703,590,302,227,365,574,763,985,946
396,394,760,324,467,55,292,682,227,861,87,799,635,403,782,509,266,226,768,98
402,892,93,690,465,683,607,270,947,68,797,104,793,736,138,237,357,0,185,543
55,293,300,573,904,196,241,606,912,482,212,774,296,50,841,600,890,909,827,589
554,745,897,789,240,616,711,142,710,478,752,253,641,845,795,626,66,700,729,248
112,258,689,269,102,350,0,224,108,398,559,581,511,191,195,356,574,63,901,791
843,885,513,214,343,612,79,773,258,633,867,186,405,944,650,602,762,520,845,570
944,195,519,614,747,762,395,774,138,697,701,124,263,735,903,573,739,829,792,352
191,566,643,736,362,736,256,772,554,271,600,439,839,838,209,742,906,755,653,519
274,691,225,540,525,511,712,231,157,243,793,944,279,911,890,939,398,831,99,696
911,490,755,792,833,404,512,323,771,465,893,779,917,596,61,55,472,836,795,578
943,371,271,106,475,692,829,541,580,891,745,845,303,504,681,23,391,905,263,524
52,553,511,596,890,794,293,390,98,649,320,403,597,796,396,240,708,407,830,787
374,189,539,151,566,405,223,274,902,356,541,840,379,216,740,79,490,54,764,410
864,781,506,866,916,884,137,659,489,516,527,862,364,228,471,779,468,237,263,528
249,147,72,528,495,514,156,519,64,836,406,103,493,256,222,565,276,580,255,110
832,754,395,614,480,199,265,240,224,833,299,441,239,354,757,322,603,360,351,554
264,785,406,576,265,752,519,856,743,270,487,887,370,256,629,380,915,654,829,649
188,188,473,688,154,277,834,258,559,105,902,728,379,917,547,474,774,889,592,533
739,271,587,589,326,144,831,789,193,900,114,352,566,740,729,483,698,692,834,827
614,271,751,739,356,66,390,217,297,706,190,897,137,368,346,599,564,107,192,82
380,241,113,877,405,293,284,470,379,630,485,607,270,363,758,69,789,136,54,92
113,602,470,230,788,189,768,23,685,791,370,828,705,741,221,292,846,650,469,349
379,731,904,513,789,64,375,151,263,291,861,557,783,387,366,63,286,782,89,763
375,204,875,713,302,778,146,896,227,482,560,235,54,653,704,293,736,182,114,93
378,610,440,648,843,409,199,608,727,88,59,232,82,489,623,292,179,50,283,651
411,73,264,519,112,562,944,155,235,197,474,479,466,890,388,710,636,470,590,880
544,944,82,775,528,847,361,763,710,832,375,74,864,707,224,628,527,943,641,773
136,610,189,389,235,518,701,256,386,89,911,642,630,893,142,742,697,830,99,340
302,100,647,86,702,787,828,361,480,179,152,539,154,688,291,640,354,867,835,411
492,798,601,410,691,525,826,76,300,623,735,683,727,237,8,108,367,831,99,765
137,862,227,573,748,400,787,755,915,828,60,839,142,348,371,134,685,241,191,471
228,478,782,691,911,842,193,623,553,534,744,372,99,884,523,77,91,262,512,352
691,296,67,913,186,654,738,899,900,938,374,904,66,190,262,841,352,101,304,235
907,329,911,590,529,261,230,480,75,107,433,571,515,355,915,508,89,891,524,473
184,370,279,562,393,603,353,508,728,356,561,468,402,106,188,793,618,347,369,109
90,379,760,437,521,835,999,630,759,381,217,682,67,795,468,387,280,365,384,244
757,352,399,562,90,476,385,346,394,695,300,620,196,366,541,241,198,295,747,546
509,272,749,564,363,219,505,276,514,864,884,400,222,837,510,373,945,488,317,938
589,655,888,608,897,772,546,486,995,260,220,361,509,102,507,555,691,589,523,242
651,706,397,209,264,826,867,374,78,580,410,646,489,610,517,504,507,544,597,734
14,474,765,693,795,372,74,514,705,652,655,264,902,267,96,626,387,56,95,746
349,196,221,604,198,796,238,696,743,678,201,247,104,278,111,588,241,513,582,472
839,151,195,370,543,484,637,833,382,634,908,762,784,238,92,472,702,522,648,840
191,862,774,860,541,564,154,417,184,839,295,187,773,515,563,747,485,155,862,139
703,381,488,641,138,909,734,139,909,746,498,582,688,643,362,698,913,484,230,775
254,387,527,794,381,266,521,575,612,841,561,653,629,476,348,95,396,464,279,279
626,375,888,836,732,522,786,399,607,898,587,346,434,483,684,547,300,354,654,797
948,184,795,839,799,91,64,772,612,793,334,106,186,824,199,895,627,687,400,485
600,302,791,438,183,290,979,599,550,388,703,219,61,945,746,831,689,632,503,71
181,404,790,904,371,345,895,277,713,709,70,979,560,682,357,540,99,762,833,841
863,691,229,469,226,799,107,608,885,503,439,689,631,544,759,280,487,182,632,990
388,11,602,218,945,684,836,98,840,630,275,481,642,75,190,895,754,230,59,767
232,829,636,585,946,407,906,698,303,223,486,903,947,345,279,586,343,583,473,789
362,783,837,530,527,832,894,503,788,779,549,837,275,267,867,403,328,689,693,380
860,642,743,634,871,912,596,57,398,284,146,179,944,297,290,61,362,544,585,769
376,767,539,354,430,377,51,766,687,599,227,727,55,272,748,348,219,467,156,549
349,824,356,535,767,329,59,887,908,745,700,848,747,730,699,486,55,411,582,737
82,465,105,101,138,839,74,763,519,623,526,550,79,113,268,220,654,611,707,785
76,521,867,375,607,393,840,396,283,516,439,324,90,789,628,590,712,468,849,680
690,544,409,589,744,637,247,792,864,870,97,551,598,578,827,628,570,491,905,180
283,900,648,789,733,581,73,702,247,729,581,698,629,278,57,66,203,95,637,888
764,685,539,426,782,352,374,114,630,549,889,396,519,275,232,843,298,710,703,597
229,832,513,510,136,562,193,916,904,227,527,598,503,525,729,401,593,727,93,453
503,357,437,867,244,382,732,98,944,402,262,769,516,95,775,83,291,411,469,105
225,789,488,598,264,384,471,631,259,877,866,287,290,893,249,249,228,539,493,573
828,107,763,903,391,707,253,927,91,139,949,602,293,479,916,709,886,774,155,101
734,142,394,828,387,319,765,53,225,635,491,381,747,565,705,644,469,783,221,524
700,560,452,238,788,103,438,633,545,489,612,945,486,360,571,784,179,904,741,523
596,653,901,744,300,643,693,465,383,590,507,585,680,903,763,541,542,529,728,11
64,380,774,524,251,684,473,583,76,599,177,893,154,101,235,794,98,798,777,383
684,375,637,372,377,544,404,991,199,555,762,191,140,52,505,730,78,252,51,111
785,469,836,86,138,76,252,247,377,514,847,484,223,255,452,155,105,742,154,396
405,380,595,513,506,433,218,587,758,389,692,737,302,75,539,846,561,739,217,633
592,331,139,569,623,358,75,300,654,108,493,185,141,351,294,282,902,630,833,753
602,945,796,302,944,572,493,863,407,410,395,590,901,518,327,145,733,564,378,712
581,683,373,347,701,640,108,274,732,795,792,739,191,257,897,148,736,751,752,92
547,485,610,317,345,628,646,576,690,336,559,798,600,771,274,793,746,772,767,769
509,83,791,438,103,136,863,269,779,261,478,762,223,519,568,509,289,350,686,156
478,263,978,217,471,839,216,653,235,682,194,51,200,238,524,909,679,61,587,702
216,894,201,780,731,625,279,711,11,701,564,792,219,949,834,602,903,568,262,249
50,407,360,365,643,707,885,788,106,240,226,899,367,861,886,883,572,834,255,704
340,748,847,290,378,240,369,491,300,401,281,891,712,139,636,867,695,105,371,613
568,862,234,579,113,397,629,908,62,773,769,157,401,684,842,840,234,906,604,984
216,375,923,571,648,490,548,949,511,843,834,240,154,266,638,529,680,889,290,202
687,292,902,82,303,197,272,179,472,791,298,278,735,478,586,89,773,764,547,248
769,738,654,595,770,759,624,776,437,728,281,351,465,55,438,342,526,733,757,393
373,191,884,57,864,150,492,255,363,683,70,608,385,519,355,685,62,59,279,96
607,188,92,347,460,373,354,702,513,219,349,762,224,895,624,683,408,587,750,624
546,54,793,351,558,476,900,455,411,558,138,641,399,274,302,587,734,788,731,583
649,898,209,269,244,486,356,198,397,758,707,480,709,798,366,733,238,637,112,254
503,394,745,590,867,203,571,471,777,591,139,759,704,94,643,505,682,382,560,625
197,54,542,782,845,572,590,891,490,503,474,554,113,56,99,797,66,788,390,149
635,485,739,713,352,905,52,639,909,154,544,98,447,373,188,263,746,634,243,282
690,594,267,405,535,734,796,52,585,783,272,698,348,64,602,789,303,733,748,102
786,875,58,114,686,74,397,90,228,184,699,540,691,460,571,404,745,493,562,357
259,108,146,116,139,360,842,782,752,655,648,633,490,361,272,756,744,240,235,145
57,632,337,245,375,637,795,403,762,776,232,63,681,65,910,568,734,685,54,687
739,702,350,590,685,446,481,634,388,917,180,220,372,401,221,344,648,193,305,695
652,551,393,467,480,552,61,207,105,188,540,699,748,687,574,599,707,692,379,258
385,389,54,590,228,769,756,770,336,474,653,51,909,476,72,795,555,825,389,267
549,146,915,509,398,708,357,845,522,478,893,396,531,234,105,913,155,543,94,785
53,885,706,789,69,153,571,95,366,252,868,275,779,290,544,236,654,288,890,475
736,431,381,479,358,681,765,272,746,790,265,906,299,77,641,114,230,556,829,487
270,481,244,902,291,911,362,228,109,777,531,245,790,779,888,224,111,570,759,875
793,650,146,308,357,707,351,254,563,590,623,146,752,735,605,560,746,565,611,217
291,796,865,999,522,781,773,770,317,794,296,896,781,695,89,51,654,215,832,841
243,217,260,530,885,385,704,80,578,638,57,268,736,195,200,229,292,105,110,743
289,358,319,947,479,609,290,199,771,847,284,635,592,772,179,834,375,609,575,828
565,76,884,54,752,80,706,482,388,99,602,181,260,278,375,645,908,524,774,572
710,757,649,604,519,59,641,228,385,235,87,463,749,778,825,867,909,550,67,489
729,406,592,549,860,533,565,909,740,775,771,753,760,626,280,565,480,647,228,712
392,364,58,346,521,403,349,351,113,79,754,599,681,510,885,619,777,486,611,612
290,767,732,607,848,192,706,497,684,368,600,900,885,260,401,491,833,600,791,513
439,301,570,103,207,256,557,503,917,512,769,907,387,899,912,78,52,215,835,493
69,728,757,304,119,890,913,263,112,547,269,611,628,916,265,360,303,185,789,904
439,861,137,780,362,336,411,699,626,712,833,480,609,242,905,285,549,215,60,612
478,201,733,243,910,194,829,104,229,444,291,471,685,558,654,245,410,78,680,233
228,140,263,529,833,303,249,75,906,749,913,473,651,504,634,92,733,156,999,384
567,581,372,761,885,588,778,632,460,910,523,348,519,286,585,137,370,829,599,785
691,543,599,528,492,634,639,87,740,887,588,528,278,776,909,388,694,339,588,372
589,681,152,138,219,255,52,192,691,183,397,476,373,361,794,252,792,379,288,286
64,487,945,768,478,195,891,690,363,302,271,56,254,239,263,267,982,230,843,239
295,465,485,607,147,551,609,221,89,74,68,798,332,390,848,654,890,509,228,277
980,201,487,505,690,289,61,95,383,249,292,508,548,217,607,68,705,737,840,898
696,306,684,372,98,198,365,900,831,775,796,419,105,189,270,317,193,468,102,289
621,73,604,528,51,76,522,301,541,520,214,506,764,598,466,194,594,361,353,901
756,581,101,713,559,915,793,728,986,578,112,530,245,352,647,263,189,893,834,760
95,528,383,683,773,647,680,289,594,418,727,729,846,863,695,257,64,467,305,284
144,886,488,681,546,138,777,849,182,359,363,488,302,317,364,451,700,305,570,731
783,480,441,502,697,638,79,475,611,493,235,608,60,291,777,902,513,64,390,298
64,613,359,828,611,438,388,480,479,74,106,23,54,637,351,571,252,439,947,828
100,215,75,255,566,908,282,733,318,179,734,527,254,190,592,833,842,139,680,613
8,361,112,52,753,847,329,844,368,562,768,625,72,766,329,220,638,608,372,563
353,683,144,284,511,774,694,268,374,510,625,232,99,905,288,692,988,508,223,683
273,573,271,516,92,280,515,785,506,585,398,345,515,739,193,835,486,262,655,986
291,748,517,441,345,825,283,688,358,74,700,699,758,645,794,875,68,326,226,254
471,606,377,76,222,62,98,254,700,853,192,613,777,476,642,371,352,392,647,830
143,734,833,98,245,564,491,24,186,749,277,704,398,145,257,520,585,302,613,901
898,688,281,365,782,68,90,743,302,314,399,466,709,55,378,114,712,697,843,635
67,791,867,242,640,755,66,363,512,650,439,367,76,157,334,763,145,197,729,736
635,750,59,146,282,680,384,407,564,322,730,680,642,524,546,217,591,693,791,602
385,541,70,688,765,548,144,99,363,134,179,70,639,441,481,273,180,361,157,862
357,267,831,979,262,751,580,867,90,145,180,346,757,765,564,441,539,352,631,404
186,474,564,70,92,256,180,766,522,563,946,337,478,263,833,729,54,885,610,548
145,102,492,544,711,583,843,392,264,85,488,734,507,562,710,52,503,638,347,771
269,648,367,590,179,258,569,170,913,591,780,364,154,571,353,402,707,698,553,597
398,713,579,194,509,756,611,599,727,282,665,99,144,202,945,758,74,232,194,688
87,375,910,363,295,389,794,575,249,213,305,266,686,627,587,71,142,370,481,355
610,185,131,685,860,216,864,350,827,573,58,411,540,892,830,526,863,291,519,235
439,847,571,548,905,787,836,554,263,279,304,703,732,214,136,541,410,603,884,622
897,552,840,388,897,755,275,138,590,780,115,219,475,795,243,510,475,371,87,559
759,557,364,10,283,844,93,486,682,484,766,831,368,280,473,651,477,831,844,844
383,474,571,348,201,794,611,715,181,691,76,355,692,490,282,866,913,112,736,682
296,780,90,365,149,269,111,727,909,740,113,686,137,545,748,474,766,845,782,841
611,384,86,576,796,511,408,636,552,496,754,773,554,515,708,636,763,264,145,750
390,617,744,824,60,349,641,573,466,530,904,388,605,776,579,226,352,281,713,947
636,109,180,90,782,680,97,731,733,681,448,651,947,302,756,895,628,349,510,576
243,182,477,266,480,56,596,386,634,586,56,552,688,318,560,466,649,109,440,601
257,358,58,832,370,283,516,401,558,755,585,242,614,2,505,441,147,778,578,252
179,906,251,346,946,117,833,284,222,63,861,632,540,736,648,565,388,711,373,62
694,295,833,932,611,481,267,771,94,374,243,774,202,93,556,580,525,476,250,147
473,576,513,596,655,780,776,693,779,138,473,535,107,250,579,555,107,187,63,638
896,609,60,390,948,729,706,782,697,386,404,740,437,377,548,683,758,470,701,427
403,529,768,77,929,385,557,473,367,764,349,303,735,87,478,469,492,219,360,644
628,110,772,602,943,269,469,316,789,239,74,103,646,224,778,258,713,894,218,76
245,893,379,486,631,901,180,470,756,594,579,145,618,87,368,770,780,758,708,603
249,798,829,768,593,347,887,280,749,440,995,585,566,193,370,746,146,604,787,474
186,677,485,438,514,67,860,55,539,571,216,62,472,730,295,224,945,684,378,685
767,528,471,555,380,709,636,795,604,583,91,559,185,848,651,475,355,983,543,903
587,794,13,888,244,182,279,643,588,570,352,606,109,108,599,383,354,154,946,347
286,981,790,110,596,366,519,843,283,400,687,253,585,493,530,294,762,64,142,225
490,257,630,197,262,184,482,747,226,875,765,298,909,701,224,403,448,362,543,63
542,911,290,696,865,74,529,655,946,183,518,577,679,347,70,795,512,745,711,118`
};

const test1 = {
    rules: `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50`,
    ticket: `
7,1,14`,
    nearbyTickets: `7,3,47
40,4,50
55,2,20
38,6,12`
};

const test2 = {
    rules: `class: 0-1 or 4-19
row: 0-5 or 8-19
seat: 0-13 or 16-19`,
    ticket: `
11,12,13`,
    nearbyTickets: `3,9,18
15,1,5
5,14,9`
};


module.exports = { real, test1, test2 };



