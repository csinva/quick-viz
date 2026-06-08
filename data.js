window.QUIZZES = {
  capitals: {
    id: "capitals",
    title: "World capitals",
    description: "Given a capital, type the country (or flip it). Filter by continent and more.",
    csvName: "national_capitals_and_largest_cities.csv",
    defaultPrompt: "Capital",
    defaultAnswer: "Country/Dependency",
    embeddedCSV: `Country/Dependency,Continent,Capital,Capital Population,Capital % of Country,Capital Source Year,Largest City,"Largest City Population (approx, city proper)",Largest City Is Capital,Fun Fact,Aliases
China,Asia,Beijing,"21,858,000",1.5%,2018,Shanghai,"~24,900,000",No,Shanghai is China's largest city; the country runs on a single official time zone despite spanning five geographic ones.,PRC|People's Republic of China
Japan,Asia,Tokyo,"14,094,034",11.3%,2023,Tokyo,"14,094,034",Yes,"Greater Tokyo is the most populous metropolitan area on Earth, home to over 37 million people.",
Russia,Europe,Moscow,"13,274,285",9.1%,2025,Moscow,"13,274,285",Yes,"Russia spans 11 time zones, more than any other country.",Russian Federation
DR Congo,Africa,Kinshasa,"12,691,000",13.2%,2017,Kinshasa,"12,691,000",Yes,"Kinshasa is the world's largest French-speaking city, having overtaken Paris.",DRC|Democratic Republic of the Congo|Democratic Republic of Congo|Congo-Kinshasa|Zaire
Indonesia,Asia,Jakarta,"10,562,088",3.9%,2020,Jakarta,"10,562,088",Yes,Indonesia is relocating its capital to the purpose-built city of Nusantara on Borneo; Jakarta remains the largest city.,
Peru,South America,Lima,"10,151,000",30.1%,2023,Lima,"10,151,000",Yes,"Lima sits in a coastal desert and is one of the driest major capitals on Earth, rarely seeing real rain.",
Egypt,Africa,Cairo,"10,107,125",9.3%,2022,Cairo,"10,107,125",Yes,Egypt is building a New Administrative Capital east of Cairo; the Great Pyramid is the last surviving ancient wonder.,
South Korea,Asia,Seoul,"9,508,451",18.3%,2022,Seoul,"9,508,451",Yes,The Greater Seoul area is home to roughly half of South Korea's entire population.,ROK|Republic of Korea
Mexico,North America,Mexico City,"9,209,944",7.3%,2020,Mexico City,"9,209,944",Yes,Mexico City was built atop a drained lake and is slowly sinking several centimeters every year.,
United Kingdom,Europe,London,"9,002,488",13.4%,2020,London,"9,002,488",Yes,The London Underground (1863) is the world's oldest underground railway.,UK|Britain|Great Britain
Bangladesh,Asia,Dhaka,"8,906,039",5.3%,2011,Dhaka,"8,906,039",Yes,Dhaka is nicknamed the 'City of Mosques' and is one of the most densely populated cities in the world.,
Iran,Asia,Tehran,"8,693,706",9.9%,2016,Tehran,"8,693,706",Yes,"Tehran lies at the foot of the Alborz range, near Mount Damavand, the highest peak in the Middle East.",Persia
Thailand,Asia,Bangkok,"8,305,218",11.6%,2010,Bangkok,"8,305,218",Yes,Bangkok's full ceremonial name is the longest place name in the world (Krung Thep Maha Nakhon...).,Siam
Vietnam,Asia,Hanoi,"8,053,663",8.3%,2019,Ho Chi Minh City,"~9,300,000",No,"Ho Chi Minh City (formerly Saigon) is Vietnam's largest city and economic engine, bigger than the capital Hanoi.",
Iraq,Asia,Baghdad,"7,682,136",17.6%,2021,Baghdad,"7,682,136",Yes,"During the Islamic Golden Age, Baghdad's House of Wisdom made it the leading center of learning on Earth.",
Saudi Arabia,Asia,Riyadh,"7,676,654",21.4%,2018,Riyadh,"7,676,654",Yes,"Riyadh means 'the gardens,' yet Saudi Arabia has no permanent natural rivers.",KSA|Kingdom of Saudi Arabia
Hong Kong (China),Asia,Hong Kong,"7,534,200",100%,2024,Hong Kong,"7,534,200",Yes,Hong Kong has more skyscrapers than any other city in the world.,
Colombia,South America,Bogotá,"7,181,469",13.9%,2011,Bogotá,"7,181,469",Yes,"Bogotá sits about 2,640 m above sea level, making it one of the highest large capital cities.",
Chile,South America,Santiago,"6,310,000",32.4%,2012,Santiago,"6,310,000",Yes,"Chile stretches over 4,300 km north to south and contains the Atacama, the driest nonpolar desert.",
Turkey,Asia,Ankara,"5,747,325",6.8%,2021,Istanbul,"~15,700,000",No,"Istanbul straddles Europe and Asia and is far larger than the capital, Ankara.",
Singapore,Asia,Singapore,"5,917,600",100%,2023,Singapore,"5,917,600",Yes,Singapore is one of only a handful of true city-states in the world.,
Afghanistan,Asia,Kabul,"4,601,789",11.5%,2021,Kabul,"4,601,789",Yes,"At around 1,790 m elevation, Kabul is one of the highest capital cities on Earth.",
Kenya,Africa,Nairobi,"4,397,073",8.3%,2019,Nairobi,"4,397,073",Yes,"Nairobi National Park is the only national park within a capital city, with wild lions and rhinos near downtown.",
Jordan,Asia,Amman,"4,061,150",36.4%,2021,Amman,"4,061,150",Yes,Amman was known as Philadelphia in Greco-Roman times.,
Algeria,Africa,Algiers,"3,915,811",8.9%,2011,Algiers,"3,915,811",Yes,Algeria is the largest country in Africa by area.,
Germany,Europe,Berlin,"3,677,472",4.4%,2021,Berlin,"3,677,472",Yes,"Berlin has around 1,700 bridges, more than Venice.",Deutschland|FRG|Federal Republic of Germany
Spain,Europe,Madrid,"3,305,408",7.0%,2021,Madrid,"3,305,408",Yes,"At about 650 m, Madrid is the highest capital city in Europe.",España
Argentina,South America,Buenos Aires,"3,120,612",6.9%,2022,Buenos Aires,"3,120,612",Yes,"Buenos Aires has Avenida 9 de Julio, often called the widest avenue in the world.",
Ethiopia,Africa,Addis Ababa,"3,040,740",2.5%,2012,Addis Ababa,"3,040,740",Yes,Ethiopia follows its own calendar (about 7-8 years behind) and was never formally colonized.,Abyssinia
Brazil,South America,Brasília,"2,982,818",1.4%,2024,São Paulo,"~12,300,000",No,Brasília was built in about 41 months and its master plan resembles an airplane; São Paulo is the largest city.,Brasil
Guatemala,North America,Guatemala City,"2,934,841",16.7%,2020,Guatemala City,"2,934,841",Yes,Guatemala City sits in a highland valley ringed by volcanoes.,
South Africa,Africa,Pretoria,"2,921,488",4.9%,2011,Johannesburg,"~5,600,000",No,"South Africa has three capitals (Pretoria, Cape Town, Bloemfontein); Johannesburg is the largest city.",RSA
Ukraine,Europe,Kyiv,"2,920,873",6.7%,2021,Kyiv,"2,920,873",Yes,Kyiv's Arsenalna metro station is among the deepest in the world at about 105 m.,
North Korea,Asia,Pyongyang,"2,870,000",11.1%,2016,Pyongyang,"2,870,000",Yes,Pyongyang's pyramid-shaped Ryugyong Hotel stood unfinished for decades as a 105-story landmark.,DPRK|Democratic People's Republic of Korea
Uzbekistan,Asia,Tashkent,"2,860,600",8.4%,2022,Tashkent,"2,860,600",Yes,"Tashkent's metro is famous for its lavishly decorated, palace-like stations.",
Italy,Europe,Rome,"2,761,632",4.7%,2022,Rome,"2,761,632",Yes,"Rome completely surrounds another sovereign state, Vatican City.",Italia
Ecuador,South America,Quito,"2,800,388",15.7%,2020,Guayaquil,"~2,700,000",No,Quito sits on the equator (visit the Mitad del Mundo monument); Guayaquil is traditionally the largest city.,
Cameroon,Africa,Yaoundé,"2,765,568",10.2%,2015,Douala,"~2,800,000",No,Cameroon is nicknamed 'Africa in miniature'; Douala is its largest city and economic capital.,
Zambia,Africa,Lusaka,"2,731,696",14.0%,2020,Lusaka,"2,731,696",Yes,"Zambia shares Victoria Falls, one of the largest waterfalls on Earth, with Zimbabwe.",
Sudan,Africa,Khartoum,"2,682,431",5.9%,2012,Khartoum,"2,682,431",Yes,Khartoum sits where the Blue and White Nile merge to form the Nile.,
Taiwan,Asia,Taipei (de facto),"2,608,332",10.9%,2020,New Taipei City,"~4,000,000",No,Taipei 101 was the world's tallest building from 2004-2010; surrounding New Taipei City is more populous.,ROC|Republic of China
Yemen,Asia,Sanaa,"2,575,347",7.8%,2012,Sanaa,"2,575,347",Yes,"Sanaa's old city is famous for its centuries-old, gingerbread-like multi-story tower houses.",
Angola,Africa,Luanda,"2,571,861",7.5%,2020,Luanda,"2,571,861",Yes,Luanda has repeatedly ranked among the most expensive cities in the world for expatriates.,
Burkina Faso,Africa,Ouagadougou,"2,453,496",11.1%,2019,Ouagadougou,"2,453,496",Yes,"Ouagadougou hosts FESPACO, the largest film festival in Africa.",Upper Volta
Ghana,Africa,Accra,"2,388,000",7.3%,2017,Accra,"2,388,000",Yes,"The point where the equator meets the prime meridian (0,0) lies in the ocean just off Ghana's coast.",
Somalia,Africa,Mogadishu,"2,388,000",14.0%,2021,Mogadishu,"2,388,000",Yes,Mogadishu has been a major Indian Ocean trading port for over a thousand years.,
Azerbaijan,Asia,Baku,"2,303,100",22.3%,2022,Baku,"2,303,100",Yes,"Baku lies about 28 m below sea level, making it the lowest-lying national capital in the world.",
Cambodia,Asia,Phnom Penh,"2,281,951",13.8%,2019,Phnom Penh,"2,281,951",Yes,"Cambodia's flag is the only national flag that depicts a building, the temple of Angkor Wat.",Kampuchea
Venezuela,South America,Caracas,"2,245,744",8.0%,2016,Caracas,"2,245,744",Yes,"Venezuela is home to Angel Falls, the world's tallest waterfall at about 979 m.",
France,Europe,Paris,"2,139,907",3.3%,2022,Paris,"2,139,907",Yes,The Eiffel Tower can grow about 15 cm taller in summer as its iron expands in the heat.,
Cuba,North America,Havana,"2,132,183",18.9%,2020,Havana,"2,132,183",Yes,Havana's streets are full of vintage 1950s American cars kept running through decades of import limits.,
Zimbabwe,Africa,Harare,"2,123,132",13.3%,2012,Harare,"2,123,132",Yes,"Zimbabwe is named after Great Zimbabwe, an impressive medieval dry-stone city.",Rhodesia
Syria,Asia,Damascus,"2,079,000",9.7%,2019,Damascus,"2,079,000",Yes,Damascus is one of the oldest continuously inhabited cities in the world.,
Belarus,Europe,Minsk,"1,996,553",20.8%,2022,Minsk,"1,996,553",Yes,Minsk was largely rebuilt in grand Stalinist style after near-total destruction in WWII.,Byelorussia|White Russia
Austria,Europe,Vienna,"1,962,779",22.0%,2022,Vienna,"1,962,779",Yes,"Vienna repeatedly tops global 'most livable city' rankings, and its tap water flows from Alpine springs.",Österreich|Oesterreich
Poland,Europe,Warsaw,"1,863,056",4.9%,2021,Warsaw,"1,863,056",Yes,Warsaw's Old Town was painstakingly rebuilt after WWII and is now a UNESCO World Heritage Site.,Polska
Philippines,Asia,Manila,"1,846,513",1.6%,2020,Quezon City,"~2,960,000",No,"Quezon City (a former capital) is the most populous city; the Philippines has over 7,600 islands.",
Mali,Africa,Bamako,"1,809,106",8.3%,2009,Bamako,"1,809,106",Yes,Mali's Timbuktu was a fabled medieval center of trade and scholarship; Bamako sits on the Niger River.,
Malaysia,Asia,Kuala Lumpur,"1,782,500",5.3%,2019,Kuala Lumpur,"1,782,500",Yes,The Petronas Twin Towers were the tallest buildings in the world from 1998 to 2004.,
Romania,Europe,Bucharest,"1,716,983",8.9%,2021,Bucharest,"1,716,983",Yes,Bucharest's Palace of Parliament is the heaviest building in the world.,
Hungary,Europe,Budapest,"1,706,851",17.6%,2022,Budapest,"1,706,851",Yes,"Budapest was formed by merging Buda, Pest and Obuda in 1873 and has more thermal springs than any other capital.",
Congo,Africa,Brazzaville,"1,696,392",29.1%,2015,Brazzaville,"1,696,392",Yes,"Brazzaville and Kinshasa face each other across the Congo River, the closest pair of capitals of two different countries.",Republic of the Congo|Congo-Brazzaville
Serbia,Europe,Belgrade,"1,688,667",23.1%,2021,Belgrade,"1,688,667",Yes,"Sitting where the Sava meets the Danube, Belgrade has been fought over and rebuilt dozens of times.",
Uganda,Africa,Kampala,"1,680,600",3.7%,2019,Kampala,"1,680,600",Yes,"Like Rome, Kampala is said to be built on seven hills; Uganda straddles the equator.",
Guinea,Africa,Conakry,"1,660,973",12.3%,2014,Conakry,"1,660,973",Yes,Much of Conakry sits on Tombo Island and the Kaloum Peninsula.,
Kazakhstan,Asia,Astana,"1,511,807",7.9%,2024,Almaty,"~2,000,000",No,"Astana (briefly renamed Nur-Sultan) is among the coldest capitals; Almaty, the former capital, is the largest city.",
Mongolia,Asia,Ulaanbaatar,"1,466,125",43.8%,2020,Ulaanbaatar,"1,466,125",Yes,Ulaanbaatar is the coldest national capital in the world by average temperature.,
Honduras,North America,Tegucigalpa,"1,444,085",14.0%,2021,Tegucigalpa,"1,444,085",Yes,Tegucigalpa is one of the few capital cities never connected to a railway.,
Senegal,Africa,Dakar,"1,438,725",8.5%,2021,Dakar,"1,438,725",Yes,Dakar is the westernmost city of mainland Africa and lent its name to the famous Dakar Rally.,
Czech Republic,Europe,Prague,"1,357,326",12.9%,2023,Prague,"1,357,326",Yes,Prague Castle is the largest ancient castle complex in the world.,Czechia
Niger,Africa,Niamey,"1,334,984",5.3%,2020,Niamey,"1,334,984",Yes,"Niger, named after the Niger River, is among the hottest countries on Earth.",
Uruguay,South America,Montevideo,"1,319,108",38.5%,2011,Montevideo,"1,319,108",Yes,Uruguay hosted and won the very first FIFA World Cup in 1930; Montevideo holds nearly 40% of the population.,
Bulgaria,Europe,Sofia,"1,307,439",19.0%,2021,Sofia,"1,307,439",Yes,Sofia is one of Europe's oldest cities; its motto is 'It grows but does not age.',
Oman,Asia,Muscat,"1,294,101",28.6%,2021,Muscat,"1,294,101",Yes,Oman is the oldest continuously independent state in the Arab world.,
Madagascar,Africa,Antananarivo,"1,275,207",4.4%,2018,Antananarivo,"1,275,207",Yes,About 90% of Madagascar's wildlife exists nowhere else on Earth.,
Nigeria,Africa,Abuja,"1,235,880",0.6%,2011,Lagos,"~9,000,000",No,"Abuja is a purpose-built capital (since 1991); Lagos, the former capital, is one of Africa's largest cities.",
Georgia,Asia,Tbilisi,"1,201,769",32.0%,2022,Tbilisi,"1,201,769",Yes,"Tbilisi means 'warm place,' named for the natural hot sulfur springs it was founded around.",
Mauritania,Africa,Nouakchott,"1,195,600",25.9%,2019,Nouakchott,"1,195,600",Yes,Nouakchott grew from a tiny village in the late 1950s into one of the largest cities in the Sahara.,
Qatar,Asia,Doha,"1,186,023",44.1%,2020,Doha,"1,186,023",Yes,"Qatar hosted the 2022 FIFA World Cup, the first ever held in the Arab world.",
Libya,Africa,Tripoli,"1,170,000",17.4%,2019,Tripoli,"1,170,000",Yes,Tripoli was founded by the Phoenicians around the 7th century BC as Oea.,
Myanmar,Asia,Naypyidaw,"1,160,242",2.2%,2014,Yangon,"~5,200,000",No,"Naypyidaw, made capital in 2005, is known for enormous near-empty highways; Yangon is the largest city.",Burma
Rwanda,Africa,Kigali,"1,132,686",8.4%,2012,Kigali,"1,132,686",Yes,"Rwanda, the 'Land of a Thousand Hills,' banned plastic bags and Kigali is among Africa's cleanest cities.",
Mozambique,Africa,Maputo,"1,124,988",3.5%,2020,Maputo,"1,124,988",Yes,Mozambique's flag is the only national flag featuring a modern rifle (an AK-47).,
Dominican Republic,North America,Santo Domingo,"1,111,838",10.0%,2010,Santo Domingo,"1,111,838",Yes,Santo Domingo is the oldest continuously inhabited European-founded city in the Americas.,DR
Armenia,Asia,Yerevan,"1,096,100",39.3%,2021,Yerevan,"1,096,100",Yes,"Yerevan was founded in 782 BC, making it older than Rome.",
Panama,North America,Panama City,"1,086,990",25.0%,2023,Panama City,"1,086,990",Yes,Panama City is the only world capital with a tropical rainforest within its city limits.,
Kyrgyzstan,Asia,Bishkek,"1,074,075",16.5%,2021,Bishkek,"1,074,075",Yes,Bishkek sits at the foot of the snow-capped Tian Shan mountains.,Kirghizia
Sierra Leone,Africa,Freetown,"1,055,964",12.5%,2015,Freetown,"1,055,964",Yes,Freetown was founded as a home for freed and formerly enslaved people in the late 18th century.,
Nicaragua,North America,Managua,"1,055,247",15.4%,2020,Managua,"1,055,247",Yes,"Nicaragua contains Lake Nicaragua, the largest lake in Central America.",
Canada,North America,Ottawa,"1,017,449",2.7%,2021,Toronto,"~2,790,000",No,Ottawa's Rideau Canal becomes the world's largest skating rink in winter; Toronto is Canada's largest city.,
Pakistan,Asia,Islamabad,"1,014,825",0.4%,2017,Karachi,"~16,000,000",No,"Islamabad is a planned capital built in the 1960s; Karachi, the former capital, is the largest city and main port.",
Liberia,Africa,Monrovia,"1,010,970",19.5%,2008,Monrovia,"1,010,970",Yes,Monrovia is named after US President James Monroe; Liberia was settled largely by freed American slaves.,
United Arab Emirates,Asia,Abu Dhabi,"1,010,092",10.8%,2020,Dubai,"~3,600,000",No,"Abu Dhabi is the capital, but Dubai is larger and home to the Burj Khalifa, the world's tallest building.",UAE|Emirates
Malawi,Africa,Lilongwe,"989,318",5.0%,2018,Lilongwe,"989,318",Yes,Malawi is the 'Warm Heart of Africa'; Lake Malawi has more fish species than any other lake.,Nyasaland
Haiti,North America,Port-au-Prince,"987,310",8.6%,2015,Port-au-Prince,"987,310",Yes,Haiti became the first independent Black republic and abolished slavery with its 1804 revolution.,
Sweden,Europe,Stockholm,"978,770",9.4%,2021,Stockholm,"978,770",Yes,Stockholm is built across 14 islands and is sometimes called the 'Venice of the North.',Sverige
Eritrea,Africa,Asmara,"963,000",26.6%,2020,Asmara,"963,000",Yes,Asmara is a UNESCO site for its dense collection of 1930s Italian modernist architecture.,
Israel,Asia,Jerusalem,"936,425",10.5%,2019,Jerusalem,"936,425",Yes,"Jerusalem is a holy city to Judaism, Christianity and Islam (its status is internationally disputed).",
Laos,Asia,Vientiane,"927,724",12.5%,2019,Vientiane,"927,724",Yes,"Laos is, per capita, the most heavily bombed country in history.",
Chad,Africa,N'Djamena,"916,000",5.3%,2009,N'Djamena,"916,000",Yes,"Lake Chad, once one of Africa's largest lakes, has shrunk dramatically over recent decades.",
Netherlands,Europe,Amsterdam,"905,234",5.2%,2022,Amsterdam,"905,234",Yes,"Amsterdam is the constitutional capital, but the Dutch government actually sits in The Hague.",Holland
Central African Republic,Africa,Bangui,"889,231",16.3%,2020,Bangui,"889,231",Yes,Bangui sits on the Ubangi River along the border with the DR Congo.,CAR
Tajikistan,Asia,Dushanbe,"863,400",8.9%,2020,Dushanbe,"863,400",Yes,"'Dushanbe' means 'Monday' in Tajik, named after a popular Monday marketplace.",
Nepal,Asia,Kathmandu,"845,767",2.8%,2021,Kathmandu,"845,767",Yes,Nepal has the only non-rectangular national flag; the Kathmandu Valley holds seven UNESCO sites.,
Togo,Africa,Lomé,"837,437",9.7%,2010,Lomé,"837,437",Yes,Lomé sits right on the Gulf of Guinea at the border with Ghana.,
Turkmenistan,Asia,Ashgabat,"791,000",12.5%,2017,Ashgabat,"791,000",Yes,Ashgabat holds the world record for the highest concentration of white-marble buildings.,
Moldova,Europe,Chişinău,"779,300",25.5%,2019,Chişinău,"779,300",Yes,"Moldova's Mileştii Mici holds one of the largest wine collections in the world, around 2 million bottles.",
Croatia,Europe,Zagreb,"769,944",19.0%,2021,Zagreb,"769,944",Yes,Zagreb is home to the quirky and acclaimed Museum of Broken Relationships.,Hrvatska
Gabon,Africa,Libreville,"703,904",30.1%,2013,Libreville,"703,904",Yes,Libreville ('Free town') was founded for freed slaves; about 88% of Gabon is rainforest.,
Norway,Europe,Oslo,"697,010",12.9%,2021,Oslo,"697,010",Yes,"Norway has the world's longest road tunnel, the 24.5 km Laerdal Tunnel.",Norge
Macau (China),Asia,Macau,"671,900",100%,2022,Macau,"671,900",Yes,Macau is the most densely populated territory on Earth and the world's biggest gambling hub.,Macao
United States,North America,"Washington, D.C.","670,050",0.2%,2021,New York City,"~8,300,000",No,Washington D.C. belongs to no state; New York City is the largest US city.,USA|US|America|United States of America|U.S.A.|U.S.
Jamaica,North America,Kingston,"662,491",23.4%,2019,Kingston,"662,491",Yes,Kingston is the birthplace of reggae and was Bob Marley's home.,
Finland,Europe,Helsinki,"658,864",11.9%,2021,Helsinki,"658,864",Yes,"Finland has roughly 188,000 lakes, the highest density of any country.",Suomi
Tunisia,Africa,Tunis,"638,845",5.2%,2014,Tunis,"638,845",Yes,The ruins of ancient Carthage lie within greater Tunis.,
Denmark,Europe,Copenhagen,"638,117",10.9%,2021,Copenhagen,"638,117",Yes,"Copenhagen is one of the world's most bicycle-friendly cities, with bikes outnumbering cars.",
Greece,Europe,Athens,"637,798",6.1%,2021,Athens,"637,798",Yes,"Athens, around 3,400 years old, is regarded as the birthplace of democracy.",Hellas
Latvia,Europe,Riga,"605,802",32.3%,2021,Riga,"605,802",Yes,"Riga has one of Europe's finest collections of Art Nouveau architecture, a UNESCO highlight.",
Djibouti,Africa,Djibouti City,"604,013",54.6%,2012,Djibouti City,"604,013",Yes,Djibouti's Lake Assal is the lowest point in Africa and one of the saltiest bodies of water on Earth.,
Ireland,Europe,Dublin,"592,713",11.9%,2022,Dublin,"592,713",Yes,"Arthur Guinness signed a 9,000-year lease on his Dublin brewery in 1759.",Éire|Eire
Morocco,Africa,Rabat,"577,827",1.6%,2014,Casablanca,"~3,700,000",No,"Rabat is the capital, but Casablanca is far larger and home to the vast Hassan II Mosque.",
Lithuania,Europe,Vilnius,"576,195",20.7%,2022,Vilnius,"576,195",Yes,Vilnius has one of the largest surviving medieval old towns in Northern Europe.,
El Salvador,North America,San Salvador,"570,459",9.0%,2019,San Salvador,"570,459",Yes,"El Salvador, Central America's smallest country, was the first to adopt Bitcoin as legal tender.",
Albania,Europe,Tirana,"557,422",19.5%,2011,Tirana,"557,422",Yes,"Albania is dotted with roughly 170,000 Cold War bunkers; Tirana's buildings were famously repainted in bright colors.",
North Macedonia,Europe,Skopje,"544,086",25.9%,2015,Skopje,"544,086",Yes,Skopje is the birthplace of Mother Teresa.,Macedonia|FYROM|Republic of North Macedonia
South Sudan,Africa,Juba,"525,953",4.9%,2017,Juba,"525,953",Yes,"South Sudan, independent since 2011, is the world's youngest widely recognized country.",
Paraguay,South America,Asunción,"521,559",7.8%,2020,Asunción,"521,559",Yes,"Most Paraguayans speak Guaraní, an Indigenous language with official status alongside Spanish.",
Portugal,Europe,Lisbon,"509,614",5.0%,2020,Lisbon,"509,614",Yes,Lisbon is older than Rome and was largely rebuilt after a devastating 1755 earthquake and tsunami.,
Guinea-Bissau,Africa,Bissau,"492,004",23.9%,2015,Bissau,"492,004",Yes,"The nearby Bijagós Archipelago is a UNESCO biosphere reserve, home to rare saltwater hippos.",
Slovakia,Europe,Bratislava,"440,948",8.1%,2020,Bratislava,"440,948",Yes,Bratislava is the only national capital that borders two other countries (Austria and Hungary).,
Estonia,Europe,Tallinn,"438,341",33.0%,2021,Tallinn,"438,341",Yes,"Estonia pioneered digital government and e-residency, and Skype was created there.",
Australia,Oceania,Canberra,"431,380",1.7%,2020,Sydney,"~5,300,000",No,Canberra was purpose-built as a compromise between rivals Sydney and Melbourne; Sydney is the largest city.,Oz
Namibia,Africa,Windhoek,"431,000",17.0%,2020,Windhoek,"431,000",Yes,Namibia's Namib Desert is considered the oldest desert in the world.,South-West Africa
Tanzania,Africa,Dodoma,"410,956",0.6%,2012,Dar es Salaam,"~5,400,000",No,"Tanzania moved its capital to Dodoma; Dar es Salaam remains the largest city, and Kilimanjaro is Africa's highest peak.",
Papua New Guinea,Oceania,Port Moresby,"364,145",3.7%,2011,Port Moresby,"364,145",Yes,"Papua New Guinea has over 800 languages, making it the most linguistically diverse country on Earth.",PNG
Ivory Coast,Africa,Yamoussoukro,"361,893",1.3%,2020,Abidjan,"~4,700,000",No,Yamoussoukro hosts one of the world's largest churches; Abidjan is the largest city and economic hub.,Côte d'Ivoire|Cote d'Ivoire
Lebanon,Asia,Beirut,"361,366",6.5%,2014,Beirut,"361,366",Yes,"Beirut is one of the oldest continuously inhabited cities, destroyed and rebuilt many times over.",
Bolivia,South America,Sucre,"360,544",3.0%,2022,Santa Cruz de la Sierra,"~1,720,000",No,"Bolivia has two capitals (Sucre and La Paz, the world's highest seat of government); Santa Cruz is the largest city.",
Puerto Rico (US),North America,San Juan,"342,259",10.5%,2020,San Juan,"342,259",Yes,"Old San Juan is among the oldest European-founded settlements in the Americas, near glowing bioluminescent bays.",PR
Costa Rica,North America,San José,"342,188",6.6%,2018,San José,"342,188",Yes,Costa Rica abolished its military in 1948.,
Lesotho,Africa,Maseru,"330,760",14.5%,2016,Maseru,"330,760",Yes,"Lesotho is the only country entirely above 1,000 m elevation, earning it the name 'Kingdom in the Sky.'",Basutoland
Cyprus,Asia,Nicosia,"326,739",26.3%,2016,Nicosia,"326,739",Yes,"Nicosia is the world's last divided capital, split by a UN buffer zone.",
Slovenia,Europe,Ljubljana,"285,604",13.5%,2021,Ljubljana,"285,604",Yes,"Ljubljana's beloved symbol is a dragon, which appears on its coat of arms and the famous Dragon Bridge.",
Timor-Leste,Asia,Dili,"277,279",21.0%,2015,Dili,"277,279",Yes,"Timor-Leste, independent in 2002, was among the first places to greet the new millennium's sunrise.",East Timor
Bosnia and Herzegovina,Europe,Sarajevo,"275,524",8.4%,2013,Sarajevo,"275,524",Yes,The 1914 assassination in Sarajevo helped spark WWI; the city later hosted the 1984 Winter Olympics.,Bosnia|BiH
Bahamas,North America,Nassau,"274,400",67.3%,2016,Nassau,"274,400",Yes,"The Bahamas has about 700 islands, and pigs famously swim in the sea off Exuma.",The Bahamas
Botswana,Africa,Gaborone,"273,602",10.6%,2020,Gaborone,"273,602",Yes,Botswana hosts the Okavango Delta and one of the largest elephant populations on Earth.,Bechuanaland
Benin,Africa,Porto-Novo,"264,320",2.0%,2013,Cotonou,"~680,000",No,"Porto-Novo is the official capital, but Cotonou is the largest city and seat of government; Benin is the birthplace of Vodun.",Dahomey
India,Asia,New Delhi,"249,998",0.02%,2011,Mumbai,"~12,400,000",No,"New Delhi (the small NDMC municipality) is the capital, while Mumbai is India's largest city.",Bharat
Suriname,South America,Paramaribo,"240,924",39.3%,2012,Paramaribo,"240,924",Yes,Suriname is South America's smallest country; Paramaribo's wooden Dutch colonial center is a UNESCO site.,Surinam
Kosovo,Europe,Pristina,"227,466",14.3%,2024,Pristina,"227,466",Yes,"Kosovo, which declared independence in 2008, has one of the youngest populations in Europe.",
Sahrawi Arab Democratic Republic,Africa,Laayoune (claimed) / Tifariti (de facto),"217,732 / 3,000",N/a,2014,Laayoune,"~217,000",No,"Western Sahara is a disputed territory split by the Berm, a sand wall stretching roughly 2,700 km.",Western Sahara|SADR
New Zealand,Oceania,Wellington,"217,000",4.2%,2021,Auckland,"~1,470,000",No,Wellington is the southernmost capital of a sovereign state and famously windy; Auckland is the largest city.,NZ|Aotearoa
Maldives,Asia,Malé,"211,908",40.6%,2022,Malé,"211,908",Yes,"The Maldives is the world's lowest-lying country, averaging about 1.5 m above sea level.",
Bahrain,Asia,Manama,"200,000",13.7%,2020,Manama,"200,000",Yes,Bahrain is an island nation linked to Saudi Arabia by a 25 km causeway.,
Montenegro,Europe,Podgorica,"190,488",30.3%,2020,Podgorica,"190,488",Yes,Montenegro means 'Black Mountain'; Podgorica was called Titograd during the Yugoslav era.,Crna Gora
Belgium,Europe,Brussels,"187,686",1.6%,2022,Brussels,"187,686",Yes,Brussels is the de facto capital of the EU and the headquarters of NATO.,
Cape Verde,Africa,Praia,"159,050",27.1%,2017,Praia,"159,050",Yes,"Cape Verde is the birthplace of morna music, made famous worldwide by Cesária Évora.",Cabo Verde
Mauritius,Africa,Port Louis,"147,066",11.3%,2018,Port Louis,"147,066",Yes,"Mauritius was the only known home of the dodo, now an icon of extinction.",
Curaçao (Netherlands),North America,Willemstad,"136,660",71.8%,2011,Willemstad,"136,660",Yes,Willemstad's brightly colored Dutch colonial waterfront is a UNESCO World Heritage Site.,
Luxembourg,Europe,Luxembourg City,"136,208",21.3%,2025,Luxembourg City,"136,208",Yes,Luxembourg is the world's only Grand Duchy and was the first country to make all public transport free.,
Burundi,Africa,Gitega,"135,467",1.1%,2020,Bujumbura,"~500,000",No,"Burundi moved its political capital to Gitega in 2019; Bujumbura, on Lake Tanganyika, is the largest city.",
Switzerland,Europe,Bern (de facto),"134,591",1.5%,2020,Zürich,"~430,000",No,Switzerland's constitution names no official capital; Bern is the de facto seat and Zürich the largest city.,Helvetia|Schweiz|Suisse
Transnistria,Europe,Tiraspol,"133,807",38.5%,2015,Tiraspol,"133,807",Yes,Transnistria is a breakaway state recognized by almost no UN members and still uses Soviet-style symbols.,Pridnestrovie|PMR
Iceland,Europe,Reykjavík,"133,262",36.0%,2021,Reykjavík,"133,262",Yes,"Reykjavík is the world's northernmost capital of a sovereign state, heated largely by geothermal energy.",
Guyana,South America,Georgetown,"118,363",14.7%,2012,Georgetown,"118,363",Yes,"Guyana is the only English-speaking country in South America, and much of Georgetown sits below sea level.",British Guiana
Bhutan,Asia,Thimphu,"114,551",14.7%,2017,Thimphu,"114,551",Yes,Bhutan measures Gross National Happiness and is the world's only carbon-negative country.,
Comoros,Africa,Moroni,"111,326",13.5%,2016,Moroni,"111,326",Yes,"Comoros is a leading producer of ylang-ylang, a flower prized by the perfume industry.",
Barbados,North America,Bridgetown,"110,000",39.1%,2014,Bridgetown,"110,000",Yes,Barbados is the birthplace of rum and became a republic in 2021.,
Sri Lanka,Asia,Sri Jayawardenepura Kotte,"107,925",0.5%,2012,Colombo,"~750,000",No,Sri Lanka's capital has one of the longest names; Colombo is the largest city and commercial center.,Ceylon
Brunei,Asia,Bandar Seri Begawan,"100,700",22.6%,2007,Bandar Seri Begawan,"100,700",Yes,Brunei's Kampong Ayer is one of the world's largest stilt villages built over water.,Brunei Darussalam
Eswatini,Africa,Mbabane,"94,874",8.0%,2010,Manzini,"~110,000",No,"Eswatini, a rare absolute monarchy, has two capitals (Mbabane and Lobamba); Manzini is often cited as the largest city.",Swaziland
New Caledonia (France),Oceania,Nouméa,"94,285",32.8%,2019,Nouméa,"94,285",Yes,"New Caledonia is ringed by the world's largest lagoon, a UNESCO World Heritage Site.",
Fiji,Oceania,Suva,"93,970",10.2%,2017,Suva,"93,970",Yes,"The 180-degree meridian runs through Fiji, putting it among the first places to see each new day.",
Solomon Islands,Oceania,Honiara,"92,344",13.0%,2021,Honiara,"92,344",Yes,"Honiara sits on Guadalcanal, site of a pivotal World War II campaign.",
São Tomé and Príncipe,Africa,São Tomé,"71,868",32.2%,2015,São Tomé,"71,868",Yes,São Tomé and Príncipe is Africa's second-smallest country and lies almost on the equator.,STP|Sao Tome and Principe
Kiribati,Oceania,Tarawa,"70,480",54.7%,2020,Tarawa,"70,480",Yes,Kiribati spans all four hemispheres and is among the nations most threatened by rising seas.,
Kuwait,Asia,Kuwait City,"55,159",1.3%,2021,Kuwait City,"55,159",Yes,"Kuwait City has recorded some of the highest temperatures on Earth, around 54°C.",
Vanuatu,Oceania,Port Vila,"51,437",16.1%,2016,Port Vila,"51,437",Yes,Vanuatu's tradition of land diving inspired modern bungee jumping.,New Hebrides
Northern Mariana Islands (USA),Oceania,Saipan,"47,565",96.1%,2017,Saipan,"47,565",Yes,"Saipan saw fierce WWII fighting and lies near the Mariana Trench, the deepest part of the ocean.",CNMI|Northern Marianas
Samoa,Oceania,Apia,"41,611",19.0%,2021,Apia,"41,611",Yes,"Samoa skipped December 30, 2011 entirely when it jumped west across the International Date Line.",Western Samoa
Palestine,Asia,Ramallah (de facto),"38,998",0.8%,2017,Gaza City,"~600,000",No,"Ramallah is the administrative seat; East Jerusalem is claimed as capital, and Gaza City is among the largest cities.",Palestinian Territories|State of Palestine
Monaco,Europe,Monaco,"38,350",100%,2020,Monaco,"38,350",Yes,Monaco is the world's most densely populated country and hosts a Grand Prix on its city streets.,
Trinidad and Tobago,North America,Port of Spain,"37,074",2.4%,2011,Chaguanas,"~83,000",No,"Trinidad is the birthplace of the steelpan, calypso and soca; Chaguanas is the largest borough.",Trinidad|TT
Grenada,North America,St. George's,"33,734",27.1%,2012,St. George's,"33,734",Yes,"Grenada is the 'Spice Isle,' a leading nutmeg producer, with the nutmeg even appearing on its flag.",
Gambia,Africa,Banjul,"31,301",1.2%,2013,Serekunda,"~340,000",No,"The Gambia is mainland Africa's smallest country, a thin strip around its river; Serekunda is the largest town.",The Gambia
Aruba (Netherlands),North America,Oranjestad,"28,294",26.6%,2010,Oranjestad,"28,294",Yes,Aruba sits outside the hurricane belt and brands itself 'One Happy Island.',
Tonga,Oceania,Nukuʻalofa,"27,600",26.0%,2022,Nukuʻalofa,"27,600",Yes,Tonga is the only Pacific island nation never fully colonized and retains its monarchy.,
Seychelles,Africa,Victoria,"26,450",24.8%,2010,Victoria,"26,450",Yes,"Seychelles is home to the coco de mer, which produces the largest seed in the plant kingdom.",
French Polynesia (France),Oceania,Papeete,"26,926",8.9%,2017,Papeete,"26,926",Yes,"French Polynesia, including Tahiti and Bora Bora, is renowned for its prized black pearls.",Tahiti
Andorra,Europe,Andorra la Vella,"22,873",28.9%,2022,Andorra la Vella,"22,873",Yes,"Andorra la Vella is Europe's highest capital, and the country is co-ruled by France's president and a Spanish bishop.",
Antigua and Barbuda,North America,St. John's,"22,219",23.8%,2011,St. John's,"22,219",Yes,"Antigua is said to have 365 beaches, one for every day of the year.",Antigua
Belize,North America,Belmopan,"20,621",5.2%,2016,Belize City,"~57,000",No,Belmopan became capital after a hurricane devastated Belize City; Belize is the only mainly English-speaking Central American country.,British Honduras
Greenland (Denmark),North America,Nuuk,"18,800",33.4%,2021,Nuuk,"18,800",Yes,"Greenland is the world's largest island, yet it is mostly ice, while Iceland is comparatively green.",
`,
  },
  mythology: {
    id: "mythology",
    title: "Greek & Roman mythology",
    description: "Match Greek gods to their Roman counterparts. Filter by category (Olympian, Titan, primordial, \u2026).",
    csvName: "greek_roman_mythology.csv",
    defaultPrompt: "Greek",
    defaultAnswer: "Roman",
    embeddedCSV: `Greek,Roman,Domain,Category,Symbol,Aliases
Zeus,Jupiter,Sky and thunder,Olympian,Lightning bolt and eagle,Jove
Hera,Juno,Marriage and queen of the gods,Olympian,Peacock and cow
Poseidon,Neptune,Sea and earthquakes,Olympian,Trident and horse
Demeter,Ceres,Agriculture and harvest,Olympian,Wheat sheaf,Demetra
Athena,Minerva,Wisdom and strategic warfare,Olympian,Owl and olive tree,Pallas Athena|Athene
Apollo,Apollo,Sun and music and prophecy,Olympian,Lyre and laurel wreath,Phoebus|Phoibos
Artemis,Diana,Hunt and moon,Olympian,Bow and deer,Cynthia
Ares,Mars,War,Olympian,Spear and vulture
Aphrodite,Venus,Love and beauty,Olympian,Dove and seashell,Cytherea
Hephaestus,Vulcan,Fire and forge,Olympian,Hammer and anvil,Hephaistos
Hermes,Mercury,Messenger and trade and travelers,Olympian,Caduceus and winged sandals
Dionysus,Bacchus,Wine and revelry and theatre,Olympian,Grapevine and thyrsus,Dionysos|Bromius
Hestia,Vesta,Hearth and home,Olympian,Hearth fire
Hebe,Juventas,Youth,Olympian,Cup of nectar,Juventus
Hades,Pluto,Underworld and wealth,Underworld,Bident and Cerberus,Aidoneus|Plouton
Persephone,Proserpina,Spring and queen of the underworld,Underworld,Pomegranate,Kore|Proserpine
Hecate,Trivia,Magic and crossroads,Underworld,Torches and keys,Hekate
Cronus,Saturn,Time and the harvest,Titan,Sickle,Kronos
Rhea,Ops,Motherhood of the gods,Titan,Lion and drum
Helios,Sol,Sun,Titan,Solar chariot
Selene,Luna,Moon,Titan,Lunar chariot,Mene
Eos,Aurora,Dawn,Titan,Rosy fingers
Atlas,Atlas,Bearing the heavens,Titan,Celestial sphere
Prometheus,Prometheus,Forethought and fire,Titan,Fire and chained eagle
Oceanus,Oceanus,Encircling ocean,Titan,River around the earth,Okeanos
Themis,Justitia,Divine law and order,Titan,Scales of justice,Iustitia
Mnemosyne,Moneta,Memory,Titan,Reflective pool
Gaia,Terra,Earth,Primordial,Earth itself,Gaea|Ge|Tellus
Uranus,Caelus,Sky,Primordial,Star-spangled sky,Ouranos
Nyx,Nox,Night,Primordial,Starry veil
Eros,Cupid,Love and desire,Primordial,Bow and arrows,Amor
Heracles,Hercules,Heroic strength,Hero,Lion skin and club,Herakles
Asclepius,Aesculapius,Medicine and healing,Hero,Rod with serpent,Asklepios|Asclepios
Pan,Faunus,Wild and shepherds,Rustic,Panpipes and goat legs
Nike,Victoria,Victory,Personification,Wings and palm branch
Iris,Iris,Rainbow and divine messenger,Personification,Rainbow
Tyche,Fortuna,Fortune and luck,Personification,Cornucopia and wheel of fortune
Nemesis,Invidia,Retribution,Personification,Sword and scales
Hypnos,Somnus,Sleep,Personification,Poppy and inverted torch
Thanatos,Mors,Death,Personification,Inverted torch and butterfly
Boreas,Aquilo,North wind,Wind,Cold breath,Aquilon
Notus,Auster,South wind,Wind,Hot breath
Zephyrus,Favonius,West wind,Wind,Gentle breeze,Zephyros
Eurus,Vulturnus,East wind,Wind,Stormy gusts
`,
  },
  flags: {
    id: "flags",
    title: "Country flags",
    description: "See a flag, name the country. Filter by continent.",
    csvName: "country_flags.csv",
    defaultPrompt: "Flag",
    defaultAnswer: "Country",
    embeddedCSV: `Country,Continent,Flag,Aliases
China,Asia,data/flags/china.png,PRC|People's Republic of China
Japan,Asia,data/flags/japan.png,
Russia,Europe,data/flags/russia.png,Russian Federation
DR Congo,Africa,data/flags/dr-congo.png,DRC|Democratic Republic of the Congo|Democratic Republic of Congo|Congo-Kinshasa|Zaire
Indonesia,Asia,data/flags/indonesia.png,
Peru,South America,data/flags/peru.png,
Egypt,Africa,data/flags/egypt.png,
South Korea,Asia,data/flags/south-korea.png,ROK|Republic of Korea
Mexico,North America,data/flags/mexico.png,
United Kingdom,Europe,data/flags/united-kingdom.png,UK|Britain|Great Britain
Bangladesh,Asia,data/flags/bangladesh.png,
Iran,Asia,data/flags/iran.png,Persia
Thailand,Asia,data/flags/thailand.png,Siam
Vietnam,Asia,data/flags/vietnam.png,
Iraq,Asia,data/flags/iraq.png,
Saudi Arabia,Asia,data/flags/saudi-arabia.png,KSA|Kingdom of Saudi Arabia
Hong Kong (China),Asia,data/flags/hong-kong.png,
Colombia,South America,data/flags/colombia.png,
Chile,South America,data/flags/chile.png,
Turkey,Asia,data/flags/turkey.png,
Singapore,Asia,data/flags/singapore.png,
Afghanistan,Asia,data/flags/afghanistan.png,
Kenya,Africa,data/flags/kenya.png,
Jordan,Asia,data/flags/jordan.png,
Algeria,Africa,data/flags/algeria.png,
Germany,Europe,data/flags/germany.png,Deutschland|FRG|Federal Republic of Germany
Spain,Europe,data/flags/spain.png,España
Argentina,South America,data/flags/argentina.png,
Ethiopia,Africa,data/flags/ethiopia.png,Abyssinia
Brazil,South America,data/flags/brazil.png,Brasil
Guatemala,North America,data/flags/guatemala.png,
South Africa,Africa,data/flags/south-africa.png,RSA
Ukraine,Europe,data/flags/ukraine.png,
North Korea,Asia,data/flags/north-korea.png,DPRK|Democratic People's Republic of Korea
Uzbekistan,Asia,data/flags/uzbekistan.png,
Italy,Europe,data/flags/italy.png,Italia
Ecuador,South America,data/flags/ecuador.png,
Cameroon,Africa,data/flags/cameroon.png,
Zambia,Africa,data/flags/zambia.png,
Sudan,Africa,data/flags/sudan.png,
Taiwan,Asia,data/flags/taiwan.png,ROC|Republic of China
Yemen,Asia,data/flags/yemen.png,
Angola,Africa,data/flags/angola.png,
Burkina Faso,Africa,data/flags/burkina-faso.png,Upper Volta
Ghana,Africa,data/flags/ghana.png,
Somalia,Africa,data/flags/somalia.png,
Azerbaijan,Asia,data/flags/azerbaijan.png,
Cambodia,Asia,data/flags/cambodia.png,Kampuchea
Venezuela,South America,data/flags/venezuela.png,
France,Europe,data/flags/france.png,
Cuba,North America,data/flags/cuba.png,
Zimbabwe,Africa,data/flags/zimbabwe.png,Rhodesia
Syria,Asia,data/flags/syria.png,
Belarus,Europe,data/flags/belarus.png,Byelorussia|White Russia
Austria,Europe,data/flags/austria.png,Österreich|Oesterreich
Poland,Europe,data/flags/poland.png,Polska
Philippines,Asia,data/flags/philippines.png,
Mali,Africa,data/flags/mali.png,
Malaysia,Asia,data/flags/malaysia.png,
Romania,Europe,data/flags/romania.png,
Hungary,Europe,data/flags/hungary.png,
Congo,Africa,data/flags/congo.png,Republic of the Congo|Congo-Brazzaville
Serbia,Europe,data/flags/serbia.png,
Uganda,Africa,data/flags/uganda.png,
Guinea,Africa,data/flags/guinea.png,
Kazakhstan,Asia,data/flags/kazakhstan.png,
Mongolia,Asia,data/flags/mongolia.png,
Honduras,North America,data/flags/honduras.png,
Senegal,Africa,data/flags/senegal.png,
Czech Republic,Europe,data/flags/czech-republic.png,Czechia
Niger,Africa,data/flags/niger.png,
Uruguay,South America,data/flags/uruguay.png,
Bulgaria,Europe,data/flags/bulgaria.png,
Oman,Asia,data/flags/oman.png,
Madagascar,Africa,data/flags/madagascar.png,
Nigeria,Africa,data/flags/nigeria.png,
Georgia,Asia,data/flags/georgia.png,
Mauritania,Africa,data/flags/mauritania.png,
Qatar,Asia,data/flags/qatar.png,
Libya,Africa,data/flags/libya.png,
Myanmar,Asia,data/flags/myanmar.png,Burma
Rwanda,Africa,data/flags/rwanda.png,
Mozambique,Africa,data/flags/mozambique.png,
Dominican Republic,North America,data/flags/dominican-republic.png,DR
Armenia,Asia,data/flags/armenia.png,
Panama,North America,data/flags/panama.png,
Kyrgyzstan,Asia,data/flags/kyrgyzstan.png,Kirghizia
Sierra Leone,Africa,data/flags/sierra-leone.png,
Nicaragua,North America,data/flags/nicaragua.png,
Canada,North America,data/flags/canada.png,
Pakistan,Asia,data/flags/pakistan.png,
Liberia,Africa,data/flags/liberia.png,
United Arab Emirates,Asia,data/flags/united-arab-emirates.png,UAE|Emirates
Malawi,Africa,data/flags/malawi.png,Nyasaland
Haiti,North America,data/flags/haiti.png,
Sweden,Europe,data/flags/sweden.png,Sverige
Eritrea,Africa,data/flags/eritrea.png,
Israel,Asia,data/flags/israel.png,
Laos,Asia,data/flags/laos.png,
Chad,Africa,data/flags/chad.png,
Netherlands,Europe,data/flags/netherlands.png,Holland
Central African Republic,Africa,data/flags/central-african-republic.png,CAR
Tajikistan,Asia,data/flags/tajikistan.png,
Nepal,Asia,data/flags/nepal.png,
Togo,Africa,data/flags/togo.png,
Turkmenistan,Asia,data/flags/turkmenistan.png,
Moldova,Europe,data/flags/moldova.png,
Croatia,Europe,data/flags/croatia.png,Hrvatska
Gabon,Africa,data/flags/gabon.png,
Norway,Europe,data/flags/norway.png,Norge
Macau (China),Asia,data/flags/macau.png,Macao
United States,North America,data/flags/united-states.png,USA|US|America|United States of America|U.S.A.|U.S.
Jamaica,North America,data/flags/jamaica.png,
Finland,Europe,data/flags/finland.png,Suomi
Tunisia,Africa,data/flags/tunisia.png,
Denmark,Europe,data/flags/denmark.png,
Greece,Europe,data/flags/greece.png,Hellas
Latvia,Europe,data/flags/latvia.png,
Djibouti,Africa,data/flags/djibouti.png,
Ireland,Europe,data/flags/ireland.png,Éire|Eire
Morocco,Africa,data/flags/morocco.png,
Lithuania,Europe,data/flags/lithuania.png,
El Salvador,North America,data/flags/el-salvador.png,
Albania,Europe,data/flags/albania.png,
North Macedonia,Europe,data/flags/north-macedonia.png,Macedonia|FYROM|Republic of North Macedonia
South Sudan,Africa,data/flags/south-sudan.png,
Paraguay,South America,data/flags/paraguay.png,
Portugal,Europe,data/flags/portugal.png,
Guinea-Bissau,Africa,data/flags/guinea-bissau.png,
Slovakia,Europe,data/flags/slovakia.png,
Estonia,Europe,data/flags/estonia.png,
Australia,Oceania,data/flags/australia.png,Oz
Namibia,Africa,data/flags/namibia.png,South-West Africa
Tanzania,Africa,data/flags/tanzania.png,
Papua New Guinea,Oceania,data/flags/papua-new-guinea.png,PNG
Ivory Coast,Africa,data/flags/ivory-coast.png,Côte d'Ivoire|Cote d'Ivoire
Lebanon,Asia,data/flags/lebanon.png,
Bolivia,South America,data/flags/bolivia.png,
Puerto Rico (US),North America,data/flags/puerto-rico.png,PR
Costa Rica,North America,data/flags/costa-rica.png,
Lesotho,Africa,data/flags/lesotho.png,Basutoland
Cyprus,Asia,data/flags/cyprus.png,
Slovenia,Europe,data/flags/slovenia.png,
Timor-Leste,Asia,data/flags/timor-leste.png,East Timor
Bosnia and Herzegovina,Europe,data/flags/bosnia-and-herzegovina.png,Bosnia|BiH
Bahamas,North America,data/flags/bahamas.png,The Bahamas
Botswana,Africa,data/flags/botswana.png,Bechuanaland
Benin,Africa,data/flags/benin.png,Dahomey
India,Asia,data/flags/india.png,Bharat
Suriname,South America,data/flags/suriname.png,Surinam
Kosovo,Europe,data/flags/kosovo.png,
Sahrawi Arab Democratic Republic,Africa,data/flags/sahrawi-arab-democratic-republic.png,Western Sahara|SADR
New Zealand,Oceania,data/flags/new-zealand.png,NZ|Aotearoa
Maldives,Asia,data/flags/maldives.png,
Bahrain,Asia,data/flags/bahrain.png,
Montenegro,Europe,data/flags/montenegro.png,Crna Gora
Belgium,Europe,data/flags/belgium.png,
Cape Verde,Africa,data/flags/cape-verde.png,Cabo Verde
Mauritius,Africa,data/flags/mauritius.png,
Curaçao (Netherlands),North America,data/flags/curacao.png,
Luxembourg,Europe,data/flags/luxembourg.png,
Burundi,Africa,data/flags/burundi.png,
Switzerland,Europe,data/flags/switzerland.png,Helvetia|Schweiz|Suisse
Transnistria,Europe,data/flags/transnistria.png,Pridnestrovie|PMR
Iceland,Europe,data/flags/iceland.png,
Guyana,South America,data/flags/guyana.png,British Guiana
Bhutan,Asia,data/flags/bhutan.png,
Comoros,Africa,data/flags/comoros.png,
Barbados,North America,data/flags/barbados.png,
Sri Lanka,Asia,data/flags/sri-lanka.png,Ceylon
Brunei,Asia,data/flags/brunei.png,Brunei Darussalam
Eswatini,Africa,data/flags/eswatini.png,Swaziland
New Caledonia (France),Oceania,data/flags/new-caledonia.png,
Fiji,Oceania,data/flags/fiji.png,
Solomon Islands,Oceania,data/flags/solomon-islands.png,
São Tomé and Príncipe,Africa,data/flags/sao-tome-and-principe.png,STP|Sao Tome and Principe
Kiribati,Oceania,data/flags/kiribati.png,
Kuwait,Asia,data/flags/kuwait.png,
Vanuatu,Oceania,data/flags/vanuatu.png,New Hebrides
Northern Mariana Islands (USA),Oceania,data/flags/northern-mariana-islands.png,CNMI|Northern Marianas
Samoa,Oceania,data/flags/samoa.png,Western Samoa
Palestine,Asia,data/flags/palestine.png,Palestinian Territories|State of Palestine
Monaco,Europe,data/flags/monaco.png,
Trinidad and Tobago,North America,data/flags/trinidad-and-tobago.png,Trinidad|TT
Grenada,North America,data/flags/grenada.png,
Gambia,Africa,data/flags/gambia.png,The Gambia
Aruba (Netherlands),North America,data/flags/aruba.png,
Tonga,Oceania,data/flags/tonga.png,
Seychelles,Africa,data/flags/seychelles.png,
French Polynesia (France),Oceania,data/flags/french-polynesia.png,Tahiti
Andorra,Europe,data/flags/andorra.png,
Antigua and Barbuda,North America,data/flags/antigua-and-barbuda.png,Antigua
Belize,North America,data/flags/belize.png,British Honduras
Greenland (Denmark),North America,data/flags/greenland.png,
`,
  },
};
