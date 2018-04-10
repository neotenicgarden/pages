// JavaScript code written by JLau.

// Pokemon as string. Pokemon must be in alphabetical order.
var str = "00026,Aegislash,N. America,Worlds 2014,August 2014,Distributed at Pokemon Worlds 2014,Fixed nature; knows Wide Guard,--\
00058,Amaura,Global,PGL,March 2015,Gift for participating in Enter the Dragon Type,Has its hidden ability,--\
00057,Arceus,Japan,Movie (JPN),March 2015,Gift for pre-ordering tickets for the 18th movie,Can be shiny; knows Blast Burn and Hydro Cannon,--\
00089,Arceus,Singapore,Manesh,December 2015,Given out on Maxsoft's Facebook page,,High IVs--\
00123,Arceus,Korea,Dahara City (KOR),December 2015,Gift for watching the 18th movie,Knows Blast Burn and Hydro Cannon,--\
00126,Arceus,Taiwan,Dahara City (TW),November 2015,Gift for watching the 18th movie,,High IVs and trained--\
00175,Arceus,Europe/America,Game Freak (ENG),August 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,High IVs --\
00076,Aromatisse,Europe,Gamescom,August 2015,Given out at Gamescom 2015 and various European events,Fixed nature; has its hidden ability,--\
00144,Articuno,Japan,Pokescrap 2016,March 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability,High IVs--\
00157,Articuno,N. America,Aldora (NA),May 2016,Given out from the Pokemon Trainer Club Newsletter,Has its hidden ability,--\
00168,Articuno,Korea,Movie,May 2016,Available from a universal serial code from 2nd movie,Has its hidden ability,--\
00193,Articuno,Europe,Aldora (EU),March 2016,Given out at various locations in Europe to tie-in with BREAKpoint,Has its hidden ability,--\
00046,Bagon,Japan,Mega Campaign,January 2015,Distributed randomly at Pokemon Centres to celebrate the 2nd Mega Campaign,In egg form; has its hidden ability,--\
00031,Beldum,Global,Steven's,November 2014,Wi-Fi event to celebrate the release of ORAS,Shiny; has its mega stone; knows Hold Back,--\
00154,Blastoise,Japan,Pokescrap 2016,April 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability and mega stone,--\
00075,Bouffalant,Europe,Gamescom,August 2015,Given out at Gamescom 2015 and various European events,Fixed nature; has its hidden ability,--\
00065,Bulbasaur,Japan,Pokemon Lab,July 2015,Given out for completing tasks at the Pokemon Lab in Tokyo,Has its mega stone,--\
00190,Bulbasaur,N. America,Worlds 2016,August 2016,Distributed at Pokemon Worlds 2016,Has its hidden ability and mega stone,--\
00048,Carvanha,Japan,Mega Campaign,January 2015,Distributed randomly at Pokemon Centres to celebrate the 2nd Mega Campaign,In egg form; has its hidden ability,--\
00005,Celebi,Global,Pokemon Bank,December 2013,Gift for downloading Pokemon Bank during its first year,Knows Hold Back,--\
00093,Celebi,Europe/America,Game Freak (ENG),March 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,High IVs--\
00037,Charizard,Japan,PC Mega Tokyo,December 2014,Distributed at Pokemon Centres to celebrate the opening of the Mega Tokyo store,Shiny; has its mega stone; knows Hold Hands,--\
00098,Charizard,UK,GAME UK (X),July 2014,Given out at GAME stores,Has its mega stone,--\
00099,Charizard,UK,GAME UK (Y),July 2014,Given out at GAME stores,Has its mega stone; knows Inferno,--\
00100,Charizard,Hong Kong/Taiwan,XY (X),July 2014,Given out on Nintendo HK/TW's Facebook page to celebrate the new anime,Has its mega stone,--\
00101,Charizard,Hong Kong/Taiwan,XY (Y),July 2014,Given out on Nintendo HK/TW's Facebook page to celebrate the new anime,Has its mega stone; knows Inferno,--\
00105,Charizard,Europe,Gamestop (X),September 2014,Given out at Gamestop stores in Germany,Has its mega stone,--\
00106,Charizard,Europe,Gamestop (Y),September 2014,Given out at Gamestop stores in Germany,Has its mega stone; knows Inferno,--\
00117,Charizard,Europe,Spring 2015,April 2015,Given out at various game stores in Europe,Shiny; has its mega stone; knows Hold Hands,--\
00137,Charizard,Japan,EXPO Gym,November 2015,Given out for completing programs at EXPOCITY in Osaka,Fixed nature; has its mega stone,--\
00153,Charizard,Japan,Pokescrap 2016,April 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability and mega stone,--\
00066,Charmander,Japan,Pokemon Lab,July 2015,Given out for completing tasks at the Pokemon Lab in Tokyo,Has its mega stone,--\
00191,Charmander,N. America,Worlds 2016,August 2016,Distributed at Pokemon Worlds 2016,Has its hidden ability and mega stone,--\
00134,Chikorita,Japan,Pokemon Lab,December 2015,Given out for completing tasks at the Pokemon Lab in Nagoya,,--\
00135,Cyndaquil,Japan,Pokemon Lab,December 2015,Given out for completing tasks at the Pokemon Lab in Nagoya,,--\
00008,Darkrai,Japan,Wonderland (JPN),April 2014,Gift for pre-ordering tickets for the 17th movie,Knows Phantom Force,High IVs--\
00050,Darkrai,UK,February 2015,February 2015,Given out at GAME stores,Knows Phantom Force,High IVs--\
00172,Darkrai,Europe/America,Game Freak (ENG),May 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,--\
00090,Delibird,Global,PGL,December 2015,Gift for participating in the Festive Feud,Has a Relic Gem; knows Happy Hour,--\
00027,Diancie,Taiwan,Movie (TW),August 2014,Gift for watching the 17th movie,Has a Normal Gem,High IVs--\
00043,Diancie,Korea,Movie (KOR),January 2015,Gift for watching the 17th movie,Has a Normal Gem,--\
00082,Diancie,Hong Kong/Taiwan,Universe,October 2015,Given out on Nintendo HK/TW's Facebook page,Has a Normal Gem,High IVs--\
00107,Diancie,Japan,Movie (JPN),July 2014,Gift for watching the 17th movie,Has a Normal Gem,--\
00128,Diancie,N. America,October 2014,October 2014,Given out at Gamestop to tie-in with Phantom Forces,Has a Normal Gem,--\
00129,Diancie,Europe,November 2014,November 2014,Given out at various game stores in Europe,Has a Normal Gem,High IVs--\
00130,Diancie,Europe/America,Hope,July 2015,Wi-Fi gift,,Somewhat high IVs--\
00188,Diancie,Korea,All-Stars,August 2016,Given out at the Pok?mon All-Stars Battle Event in South Korea,Shiny,--\
00196,Diancie,Japan,Pokemon Centre,December 2015,Distributed at Pokemon Centres in Japan,Shiny,--\
00062,Dragonite,N. America,June 2015,June 2015,Given out at Gamestop stores to tie-in with Roaring Skies,Has its hidden ability,--\
00155,Dragonite,Global,Lance's,March 2016,Gift for participating in the Kanto Classic,Knows Barrier,High IVs--\
00143,Eevee,Japan,Pokescrap 2016,March 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Shiny; has its hidden ability,--\
00006,Electabuzz,UK,GAME UK,April 2014,Given out at GAME stores to celebrate Easter,Has its hidden ability and evolution item,--\
00040,Emboar,Japan,Present (JPN),January 2015,Available from a universal serial code from Pokemon Get TV,Has its hidden ability; knows Hold Back,--\
00114,Emboar,Europe/America,Present (ENG),January 2015,Available from a universal serial code from the Pokemon website,Has its hidden ability; knows Hold Back,--\
00052,Fennekin,Japan,Serena's,February 2015,Available from a universal serial code from the Pokemon anime,Fixed nature,--\
00055,Feraligatr,Global,Pokemon Bank,February 2015,Gift for downloading Pokemon Bank during its second year,Has its hidden ability,--\
00187,Garchomp,Global,Cynthia's,August 2016,Gift for participating in the Sinnoh Classic,,--\
00184,Gardevoir,Japan,Chymia's,June 2016,Given out at various locations in Japan to tie-in with the 19th movie,Shiny; has its Mega stone,--\
00018,Gengar,Japan,Battle Championship,June 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone,--\
00110,Gengar,Japan,Halloween,September 2014,Distributed at Pokemon Centres to celebrate Halloween,Shiny; knows Sludge Wave,--\
00111,Gengar,Europe/America,October 2014,October 2014,Given out at game stores to tie-in with Phantom Forces,Shiny; knows Sludge Wave,--\
00112,Gengar,Singapore,XY,October 2014,Given out at Pokemon Day in Singapore,Shiny; knows Sludge Wave,--\
00185,Gengar,Japan,Jarvis's,July 2016,Given out at 7-Eleven stores to tie-in with the 19th movie,Shiny; has its Mega stone,--\
00087,Giratina,Korea,Dahara City (KOR), November 2015,Available from a universal serial code from the Korean official website,Fixed nature; has its hidden ability,--\
00035,Greninja,Japan,Smash Bros,December 2014,Obtained by registering Super Smash Bros 3DS and ORAS; based on Greninja from Smash Bros,Has its hidden ability,--\
00016,Gyarados,Japan,Battle Championship,May 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone,--\
00064,Gyarados,Japan,PC Hiroshima,June 2015,Distributed at Pokemon Centres to celebrate the new Hiroshima store,Shiny; has its mega stone,--\
00109,Heracross,N. America,Summer 2014,August 2014,Wi-Fi gift to promote the new mega stones,Fixed nature; mega stone acquired via serial code,--\
00150,Ho-oh,Japan,PC Kyoto,March 2016,Distributed at Pokemon Centres to celebrate the new Kyoto store,Shiny, knows Celebrate,--\
00068,Hoopa,Japan,Movie (JPN),July 2015,Gift for watching the 18th movie,,--\
00119,Hoopa,Europe,Harry,October 2015,Given out at various game stores in Europe,,High IVs--\
00121,Hoopa,N. America,McDonalds,November 2015,Distributed at McDonalds,,--\
00122,Hoopa,Korea,Movie (KOR),December 2015,Gift for watching the 18th movie,,--\
00156,Hoopa,Singapore,Manesh,August 2015,Given out at various game stores and from Maxsoft's Facebook page,,High IVs --\
00164,Hoopa,Taiwan,Mighty,November 2015,Gift for pre-ordering tickets for the 18th movie,,--\
00091,Infernape,Hong Kong/Taiwan,Jade,January 2016,Given out on Nintendo HK/TW's Facebook page to celebrate Lunar New Year,Has its hidden ability,--\
00003,Inkay,Japan,PC Tokyo Bay,November 2013,Distributed at Pokemon Centres during the launch of the Tokyo Bay Pokemon Centre,Knows Happy Hour,--\
00025,Jirachi,Japan,Tanabata 2014,August 2014,Distributed at the Tohoku Pokemon Centre to celebrate Tanabata,Shiny; knows Moonblast,--\
00088,Jirachi,Hong Kong/Taiwan,Nintendo HK,December 2015,Given out on Nintendo HK/TW's Facebook page,Shiny; knows Happy Hour,High IVs--\
00139,Jirachi,Europe/America,Game Freak (ENG),April 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,Somewhat high IVs--\
00013,Kangaskhan,Japan,Battle Championship,May 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone,--\
00059,Kangaskhan,Hong Kong/Taiwan,Spring 2015,April 2015,Given out on Nintendo HK/TW's Facebook page,Has its mega stone,--\
00033,Keldeo,Japan,Pokescrap 2014,December 2014,Obtained by redeeming scrap codes from Pokemon merchandise,,--\
00132,Kyogre,Japan,Dahara City (JPN),June 2015,Additional gift for pre-ordering tickets for the 18th movie,Fixed nature; has its hidden ability,--\
00061,Kyurem,Japan,Dahara City (JPN),June 2015,Additional gift for pre-ordering tickets for the 18th movie,,--\
00148,Landorus,Japan,Hyadain's,May 2016,Gift for participating in the Japan Championship Qualifiers; based off TV host's Landorus,Has fixed nature and IVs; nicknamed 'Lord Lando',--\
00071,Latios,Japan,7-Spot,August 2015,Given out at 7-Eleven stores,Fixed nature; has its mega stone,--\
00056,Linoone,Korea,WCSK 2015,March 2015,Available from a universal serial code from the Korean official website,,--\
00131,Linoone,Japan,Jump Festa,December 2014,Given out at Jump Festa 2015.,,--\
00072,Lugia,Japan,7-Spot,August 2015,Given out at 7-Eleven stores,Fixed nature,--\
00147,Machamp,Europe/America,VGC 2016,May 2016,Distributed at VGC Nationals 2016; based off Mark McQuillan's Machamp,Shiny; has fixed nature and IVs,--\
00063,Magikarp,Japan,PC Hiroshima,June 2015,Distributed at Pokemon Centres to celebrate the new Hiroshima store,Can be shiny; knows Celebrate and Happy Hour,--\
00007,Magmar,UK,GAME UK,April 2014,Given out at GAME stores to celebrate Easter,Has its hidden ability and evolution item,Has no ribbon--\
00077,Malamar,Europe,Gamescom,August 2015,Given out at Gamescom 2015 and various European events,Fixed nature,--\
00009,Mamoswine,Europe/America,VGC 2014,May 2014,Distributed at VGC Nationals 2014; based off Arash Ommati's Mamoswine,Shiny; has fixed nature,High Attack and Speed IVs--\
00073,Manaphy,Korea,Water Tribe,July 2015,Gift for watching the rescreening of the 9th movie,,--\
00173,Manaphy,Europe/America,Game Freak (ENG),June 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,High IVs --\
00171,Mareep,Korea,National Pokedex,June 2015,Included with the ORAS Official Guidebook Complete National Pokedex Full Guide,Knows Hold Back; has its Mega Stone,--\
00015,Mawile,Japan,Battle Championship,June 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone,--\
00053,Meganium,Global,Pokemon Bank,February 2015,Gift for downloading Pokemon Bank during its second year,Has its hidden ability,--\
00189,Meowth,Europe,Happy,August 2016,Wi-Fi event that was released without an announcement...,Knows Happy Hour,--\
00092,Mew,Europe/America,Game Freak (ENG),February 2016,Distributed at game stores to celebrate Pokemon's 20th anniversary,,High IVs--\
00141,Mew,Japan,Game Freak (JPN),February 2016,Gift for purchasing the special Pokemon Nintendo 2DS bundle,,--\
00179,Mewtwo,Japan,Pokescrap 2016,April 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Shiny; has its hidden ability and mega stone,--\
00183,Mewtwo,Hong Kong/Taiwan,Nintendo HK,June 2016,Given out at the first Hong Kong/Taiwan VGC Nationals,Shiny; has its hidden ability and mega stone,High IVs --\
00186,Mewtwo,Europe/America,Play! 2016,July 2016,Gift for acquiring at least 1 Play! Point during the 2016 season,Shiny; has its hidden ability and mega stone,--\
00182,Miltank,Global,Whitney's,May 2016,Gift for participating in the Johto Classic,,--\
00159,Moltres,N. America,Aldora (NA),May 2016,Given out from the Pokemon Trainer Club Newsletter,Has its hidden ability,--\
00170,Moltres,Korea,Movie,May 2016,Available from a universal serial code from 2nd movie,Has its hidden ability,--\
00177,Moltres,Japan,Pokescrap 2016,March 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability,--\
00195,Moltres,Europe,Aldora (EU),March 2016,Given out at various locations in Europe to tie-in with BREAKpoint,Has its hidden ability,--\
00045,Numel,Japan,Mega Campaign,January 2015,Distributed randomly at Pokemon Centres to celebrate the 2nd Mega Campaign,In egg form; has its hidden ability,--\
00030,Pachirisu,Korea,Sejun Park's,November 2014,Distributed at Korean Regionals; based on Sejun Park's Pachirisu,Fixed nature and IVs,--\
00060,Pachirisu,Europe/America,VGC 2015,May 2015,Distributed at VGC Nationals 2015; based off Sejun Park's Pachirisu,Fixed nature and IVs,--\
00133,Palkia,Japan,Dahara City (JPN),June 2015,Additional gift for pre-ordering tickets for the 18th movie,Fixed nature; has its hidden ability,--\
00069,Pancham,Japan,Serena's,July 2015,Given out at 7-Eleven stores,Fixed nature,--\
00011,Pikachu,Japan,World Cup,June 2014,Japanese World Cup team member Atsuto Uchida's Pikachu,Knows Mega Kick,--\
00019,Pikachu,Japan,Outbreakchu (Landmark),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Surf and Hold Hands; nicknamed 'Landmark',--\
00020,Pikachu,Japan,Outbreakchu (Cosmo W),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Surf and Hold Hands; nicknamed 'CosmoW',--\
00021,Pikachu,Japan,Outbreakchu (Red Brick),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Surf and Hold Hands; nicknamed 'Red Brick',--\
00022,Pikachu,Japan,Outbreakchu (Captain),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Surf and Hold Hands; nicknamed 'Captain',--\
00023,Pikachu,Japan,Outbreakchu (Pacifico),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Surf and Hold Hands; nicknamed 'Pacifico',--\
00024,Pikachu,Japan,Outbreakchu (Secret),August 2014,Distributed at various locations in Yokohama during the Pikachu Outbreakchu,Knows Heart Stamp and Hold Hands; nicknamed 'Pika<3',--\
00038,Pikachu,Japan,PC Mega Tokyo,December 2014,Distributed at Pokemon Centres to celebrate the opening of the Mega Tokyo store,Shiny; knows Hold Hands,--\
00042,Pikachu,Japan,Pokemon Cafe (JPN),January 2015,Distributed at the Pokemon ORAS Cafe in Shibuya,,--\
00070,Pikachu,Japan,Ash's,July 2015,Given out at 7-Eleven stores,Fixed nature,--\
00078,Pikachu,Japan,Yokohama,August 2015,Distributed at the Outbreakchu event of 2015,Shiny; knows Teeter Dance,Nickname: Dancer--\
00079,Pikachu,Hong Kong,Satay King,August 2015,Given out at Satay King restaurants in Hong Kong,,--\
00080,Pikachu,Global,PGL,September 2015,Gift for participating in the Pikachu Cup,Has its hidden ability; knows Endeavor,--\
00140,Pikachu,Japan,Pokemon Centre Online,February 2016,Gift for first-time purchases at the new Pokemon Centre Online website,Knows Fly, Surf and Celebrate,--\
00145,Pikachu,Japan,Tohoku,March 2016,Gift for donating to the Pokemon with You campaign,Knows Hold Hands,--\
00149,Pikachu,Singapore,Pokemon Cafe (SG),May 2016,Gift for purchasing from the Pokemon Cafe in Singapore,,--\
00108,Pinsir,N. America,Summer 2014,August 2014,Wi-Fi gift to promote the new mega stones,Fixed nature; mega stone acquired via serial code,--\
00036,Piplup,Japan,Farewell,December 2014,Distributed at the Tokyo Pokemon Centre before it closed,,--\
00142,Psyduck,Japan,Masuda's,March 2016,Given out at Junichi Masuda signing events at various Pokemon Centres,,--\
00029,Pumpkaboo,Europe/America,Spooky,October 2014,Wi-Fi gift to promote the Trick-or-Treat Friendly; Super Size,Super-size; can have its hidden ability,--\
00044,Ralts,Japan,Mega Campaign,January 2015,Distributed randomly at Pokemon Centres to celebrate the 2nd Mega Campaign,In egg form; has its hidden ability,--\
00049,Rayquaza,Japan,World Hobby Fair,January 2015,Distributed at the Winter 2015 World Hobby Fair,Shiny,--\
00116,Rayquaza,Japan,CoroCoro,March 2015,Given out at various stores in Japan,Shiny,--\
00125,Rayquaza,Hong Kong/Taiwan,Nintendo HK,September 2015,Given out on Nintendo HK/TW's Facebook page,Shiny,High IVs--\
00163,Rayquaza,Europe/America ,Galileo,August 2015,Given out at various locations in Europe to tie-in with Ancient Origins; Wi-Fi in America,Shiny,--\
00095,Regice,Global,Pokemon Bank,March 2016,Gift for downloading Pokemon Bank during its third year,Has its hidden ability,--\
00094,Regirock,Global,Pokemon Bank,March 2016,Gift for downloading Pokemon Bank during its third year,Has its hidden ability,--\
00096,Registeel,Global,Pokemon Bank,March 2016,Gift for downloading Pokemon Bank during its third year,Has its hidden ability,--\
00028,Rotom,Japan,Tretta,October 2014,Distributed at Pokemon Tretta arcade machines,Fixed nature,--\
00074,Sableye,Europe,Gamescom,August 2015,Given out at Gamescom 2015 and various European events,Fixed nature; has its hidden ability and mega stone,--\
00041,Samurott,Japan,Present (JPN),January 2015,Available from a universal serial code from CoroCoro,Has its hidden ability; knows Hold Back,--\
00115,Samurott,Europe/America,Present (ENG),January 2015,Available from a universal serial code from the Pokemon Trainer Club newsletter,Has its hidden ability; knows Hold Back,--\
00017,Scizor,Japan,Battle Championship,May 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone,--\
00039,Serperior,Japan,Present (JPN),January 2015,Available from a universal serial code from Pokemon Get TV,Has its hidden ability; knows Hold Back,--\
00113,Serperior,Europe/America,Present (ENG),January 2015,Available from a universal serial code from the Pokemon website,Has its hidden ability; knows Hold Back,--\
00081,Sharpedo,N. America,Worlds 2015,August 2015,Distributed at Pokemon Worlds 2015,Fixed nature; has its hidden ability and mega stone,--\
00032,Shaymin,Japan,Pokescrap 2014,December 2014,Obtained by redeeming scrap codes from Pokemon merchandise,,--\
00174,Shaymin,Europe/America,Game Freak (ENG),July 2016,Wi-Fi gift to celebrate Pokemon's 20th anniversary,,--\
00067,Squirtle,Japan,Pokemon Lab,July 2015,Given out for completing tasks at the Pokemon Lab in Tokyo,Has its mega stone,--\
00192,Squirtle,N. America,Worlds 2016,August 2016,Distributed at Pokemon Worlds 2016,Has its hidden ability and mega stone,--\
00047,Swablu,Japan,Mega Campaign,January 2015,Distributed randomly at Pokemon Centres to celebrate the 2nd Mega Campaign,In egg form; has its hidden ability,--\
00001,Sylveon,Japan,Birthday,October 2013,Given out at Pokemon Centres during your birth month,Knows Celebrate,Picked up on my birthday--\
00004,Sylveon,Hong Kong/Taiwan,XY,January 2014,Distributed at various locations to tie in with the 16th movie,,--\
00002,Torchic,Global,XY,October 2013,Wi-Fi event to celebrate the release of XY; initial release of Blazikenite,Has its hidden ability and mega stone,--\
00136,Totodile,Japan,Pokemon Lab,December 2015,Given out for completing tasks at the Pokemon Lab in Nagoya,,--\
00054,Typhlosion,Global,Pokemon Bank,February 2015,Gift for downloading Pokemon Bank during its second year,Has its hidden ability,--\
00014,Tyranitar,Japan,Battle Championship,May 2014,Distributed at Pokemon Centres during the Pokemon Centre Battle Championship,Has its mega stone; knows Ice Punch,--\
00051,Tyrunt,Global,PGL,February 2015,Gift for participating in the Battle of Hoenn,Has its hidden ability,--\
00152,Venusaur,Japan,Pokescrap 2016,April 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability and mega stone,--\
00034,Victini,Japan,Pokescrap 2014,December 2014,Obtained by redeeming scrap codes from Pokemon merchandise,Knows V-Create,--\
00010,Vivillon,Europe,Paris,June 2014,Available at the temporary Pokemon Centre in Paris,Poke Ball pattern,High Special Attack and Speed IVs--\
00012,Vivillon,Global,GTS,July 2014,Celebration of 100 million GTS trades,Fancy pattern; knows Hold Hands,High Special Attack and Speed IVs--\
00102,Vivillon,Japan,Pokemon Centre,August 2014,Distributed at Pokemon Centres in Japan,Poke Ball pattern,--\
00103,Vivillon,N. America,Summer 2014,August 2014,Wi-Fi gift to celebrate the Pokemon Centre's reopening,Poke Ball pattern,--\
00104,Vivillon,Europe,Summer 2014,August 2014,First available at Gamescom 2014 then as a Wi-Fi gift,Poke Ball pattern,High Special Attack and Speed IVs--\
00178,Volcanion,Japan,Nebel,April 2016,Gift for pre-ordering tickets for the 19th movie ,,--\
00127,Xerneas,Japan,XY&Z (JPN),October 2015,Available from a universal serial code from the Pokemon anime,Shiny,High IVs and trained--\
00160,Xerneas,N. America,XYZ,May 2016,Wi-Fi event to tie-in with Fates Collide,Shiny,--\
00165,Xerneas,Korea,XY&Z (KOR),March 2016,Available from a universal serial code from the Pokemon anime,Shiny,--\
00180,Xerneas,Europe,Descartes,May 2016,Given out at various locations in Europe to tie-in with Fates Collide,Shiny,--\
00084,Yveltal,Japan,XY&Z (JPN),November 2015,Available from a universal serial code from the Pokemon anime,Shiny,High IVs--\
00161,Yveltal,N. America,XYZ,May 2016,Wi-Fi event to tie-in with Fates Collide,Shiny,--\
00166,Yveltal,Korea,XY&Z (KOR),April 2016,Available from a universal serial code from the Pokemon anime,Shiny,--\
00181,Yveltal,Europe,Descartes,May 2016,Given out at various locations in Europe to tie-in with Fates Collide,Shiny,--\
00158,Zapdos,N. America,Aldora (NA),May 2016,Given out from the Pokemon Trainer Club Newsletter,Has its hidden ability,--\
00169,Zapdos,Korea,Movie,May 2016,Available from a universal serial code from 2nd movie,Has its hidden ability,--\
00176,Zapdos,Japan,Pokescrap 2016,March 2016,Obtained by redeeming scrap codes from Pokemon merchandise,Has its hidden ability,--\
00194,Zapdos,Europe,Aldora (EU),March 2016,Given out at various locations in Europe to tie-in with BREAKpoint,Has its hidden ability,--\
00086,Zoroark,Europe,Sly (EU),November 2015,Given out at game stores to tie-in with BREAKthrough,Knows Sludge Bomb,--\
00120,Zoroark,N. America,Sly (NA),November 2015,Given out at game stores to tie-in with BREAKthrough,Knows Sludge Bomb,--\
00138,Zoroark,Japan,EXPO Gym,November 2015,Given out for completing programs at EXPOCITY in Osaka,Fixed nature,--\
00085,Zygarde,Japan,XY&Z (JPN),November 2015,Available from a universal serial code from the Pokemon anime,,High IVs but wrong nature--\
00151,Zygarde,Europe,Descartes,May 2016,Wi-Fi gift to tie-in with Fates Collide,,High IVs--\
00162,Zygarde,N. America,XYZ,May 2016,Wi-Fi event to tie-in with Fates Collide,,--\
00167,Zygarde,Korea,XY&Z (KOR),April 2016,Available from a universal serial code from the Pokemon anime,,";


// Forms the main database of Pokemon, pkmnDB.
var pkmnDB = str.split("--");
for (i = 0; i < pkmnDB.length; i++) {
  pkmnDB[i] = pkmnDB[i].split(",");
  pkmnDB[i] = {pictureID:pkmnDB[i][0], pokemon:pkmnDB[i][1], region:pkmnDB[i][2], event:pkmnDB[i][3], date:pkmnDB[i][4], description:pkmnDB[i][5], feature:pkmnDB[i][6], comment:pkmnDB[i][7]};
}


// Forms unique list of Pokemon in array pkmnList (but Pokemon must be in alphabetical order).
// Also obtains count of Pokemon in array pkmnCount and coordinates of Pokemon from main database in pkmnDBCoord.
var pkmnList = [pkmnDB[0].pokemon]; // Initialize first Pokemon in list.
var pkmnCount = []; // Store count of unique Pokemon.
var count = 1; // Initialize counter.
var pkmnDBCoord = [0]; // Store location of each unique Pokemon. Initialize location.
//var pkmnPreload = [0]; //// Initialize preload state.
// Check each Pokemon. If same as previous, move on. Otherwise add to pkmnList.
for (i = 1; i < pkmnDB.length; i++) {
  if (pkmnDB[i].pokemon == pkmnDB[i-1].pokemon) {
    count++;
  } else {
    pkmnCount.push(count); // Add count.
    count = 1; // Reset counter.
    pkmnList.push(pkmnDB[i].pokemon); // Add new Pokemon to list.
    pkmnDBCoord.push(i); // Add coordinate of new Pokemon.
//    pkmnPreload.push(0); // Add another 0.
  }
}
pkmnCount.push(count); // Add count of final Pokemon.


// Generates the Pokemon sprites.
function GenerateImages() {
var tempString = "";
for (i = 0; i < pkmnList.length; i++) {
  tempString += '<img src="Sprites/' + pkmnList[i] + '.png" alt="" onclick="ChangePkmn(' + i + ')"> '
}
document.getElementById("pokemonicons").innerHTML = tempString;
}


// Restores event information
function RestorePkmn() {
document.getElementById("pkmnevent").innerHTML = "Choose an event";
document.getElementById("region").innerHTML = "";
document.getElementById("date").innerHTML = "";
document.getElementById("description").innerHTML = "";
document.getElementById("feature").innerHTML = "";
document.getElementById("comment").innerHTML = "";
}


var loadedTable = []; // Initialize temporary table.
// var images = []; // Initialize temporary image preloader.

// Loads Pokemon information in a temporary table. Also preloads Pokemon screenshots. Does it even work?
function LoadTable(x) {
var start = pkmnDBCoord[x];
var end = start + pkmnCount[x];
for (i = start; i < end; i++) {
  loadedTable.push(pkmnDB[i])
}
//if ( pkmnPreload[x] == 0 ) {
//  pkmnPreload[x] = 1;
//  images = [];
//    for (i = 0; i < loadedTable.length; i++) {
//      images[i] = new Image();
//      images[i].src = "Screens/" + loadedTable[x].pictureID + ".png";
//    }
//} else {
//}

}


// Changes Pokemon text and event list. x refers to index in pkmnList.
function ChangePkmn(x) {
document.getElementById("eventlist").innerHTML = "Please wait for loading...";
RestorePkmn();
loadedTable = [];
LoadTable(x);
document.getElementById("eventlistheader").innerHTML = 'Choose an event below';
document.getElementById("pkmn").innerHTML = pkmnList[x];

var tempString2 = "";
for (i=0; i < loadedTable.length; i++) {
  tempString2 += "<span onclick='ChangeEvent(" + i + ")'>" + loadedTable[i].event + "</span><br>"; 
}
document.getElementById("eventlist").innerHTML = tempString2;
}


// ChangeEvent now references the loadedTable numbers. Brings up event information.
function ChangeEvent(x) {
document.getElementById("picture").src = "Screens/" + loadedTable[x].pictureID + ".png";
document.getElementById("pkmnevent").innerHTML = loadedTable[x].event;
document.getElementById("region").innerHTML = loadedTable[x].region;
document.getElementById("date").innerHTML = loadedTable[x].date;
document.getElementById("description").innerHTML = loadedTable[x].description;
document.getElementById("feature").innerHTML = loadedTable[x].feature;
document.getElementById("comment").innerHTML = loadedTable[x].comment;
}