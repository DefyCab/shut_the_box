# ShutTheBox

- ID — Område — Krav — Prioritet — Kommentar
- 1.1 — Studentwebb — När du besöker roten på din studentwebb ska ditt namn och en länk till Shut the Box visas. — Skall — Webbserverns standardbeteende ska göra att rätt sida visas utan att du behöver ange filnamnet i adressen.

- 1.2 — Studentwebb — Shut the Box ska nås via sökvägen ~användarnamn/spel/. — Skall — Spelet ska kunna nås utan att ange filnamnet tex. spel.html

- 1.3 — Studentwebb — När du besöker ~användarnamn/spel/ ska spelets startsida visas automatiskt. — Skall

- 1.4 — Studentwebb — Du ska kunna ha annat innehåll på din studentwebb än Shut the Box. — Skall — Du ska alltså kunna ha en mer utförlig startsida som beskriver dig själv eller din hobby utan att detta påverkar spelets utseende eller funktion.

- 2.1 — Övergripande — Du ska utveckla webbplatsen från grunden och inte basera den på en färdig mall. — Skall

- 2.2 — Övergripande — Du ska ha en gemensam header på spelets sidor med spelets namn och aktuell användarinformation. — Skall

- 2.3 — Övergripande — Headern skall vara klickbar så att du kan ta dig tillbaka till spelets startsida. — Skall

- 2.4 — Övergripande — Du ska ha en footer på webbplatsens samtliga sidor med ditt namn. — Skall

- 2.5 — Övergripande — Du ska använda semantisk HTML för rubriker, sektioner, listor, länkar, knappar och formulärfält där dessa passar. — Skall — HTML-elementets funktion ska spegla kontrollens eller innehållets funktion.

- 2.6 — Övergripande — Du ska använda riktig HTML-text för information som förmedlas som text och inte bilder av text. — Skall

- 2.7 — Övergripande — Du ska ha tillräcklig kontrast och inte kommunicera viktig information eller tillstånd enbart med färg. — Skall

- 2.8 — Övergripande — Du bör utforma interaktiva funktioner så att de även fungerar för användare som inte enbart använder mus eller pekskärm. — Bör

- 2.9 — Övergripande — Du ska ange sidans språk i html-elementet och ge varje sida en meningsfull title. — Skall

- 2.10 — Övergripande — Du ska göra interaktiva kontroller tillräckligt stora och separerade för användning på touchskärm. — Skall — Utgå från WCAG 2.2:s target size där det är relevant.

- 2.11 — Övergripande — Du ska organisera webbplatsens resurser konsekvent i separata mappar för exempelvis CSS, JavaScript och bilder. — Skall — Alla relativa sökvägar ska fungera efter publicering.

- 2.12 — Övergripande — Du ska visa status- och felmeddelanden i gränssnittet på ett tydligt sätt. Du ska inte använda alert() för aviseringar — Skall — Meddelanden ska vara begripliga och synliga i sidans gränssnitt.

- 2.13 — Övergripande — Du ska göra webbplatsen responsiv så att innehåll och funktion fungerar på både smala och breda skärmar. — Skall — Testa åtminstone 320 px, 768 px och 1280 px viewportbredd. Spelplanen får ha en egen lösning när en tvådimensionell layout behövs för spelbarheten.

- 2.14 — Övergripande — Du ska inte lämna egen debug-loggning i produktionskoden och du får aldrig logga tokens, lösenord eller annan känslig information. — Skall

- 2.15 — Övergripande — Du ska låta API:t vara källa till sanning för spelstatus och spelregler. — Skall — Klienten ska inte själv avgöra giltiga drag eller slutresultat.

- 2.16 — Övergripande — Du ska skicka spelarens handlingar till de endpoints som anges i API-dokumentationen/Swagger. — Skall

- 2.17 — Övergripande — Du ska hantera API-fel, nätverksfel och ogiltiga svar utan att gränssnittet hamnar i ett oklart tillstånd. — Skall — Användaren ska få begriplig information och kunna försöka igen när det är möjligt.

- 2.18 — Övergripande — Du bör ge tydlig återkoppling medan ett API-anrop pågår och förhindra oavsiktliga dubbla anrop. — Bör

- 2.19 — Övergripande — Du bör uppdatera relevant spelstatus automatiskt utan att användaren behöver ladda om sidan när API-status förändras. — Bör — Polling eller realtidskommunikation, exempelvis SignalR, är möjliga lösningar.

- 2.20 — Övergripande — Webbsidan skall ha en favicon. — Skall

- 3.1 — Startsida — Du ska ha spelets startsida i katalogen spel på din studentwebb. — Skall

- 3.2 — Startsida — Du ska kunna starta ett singelplayer-spel direkt från spelets startsida. — Skall — Användaren ska inte behöva skapa, namnge eller konfigurera ett rum för att spela singleplayer. API:t kan skapa rum i bakgrunden.

- 3.3 — Startsida — Du ska i lobbyn se öppna multiplayer-rum som API:t tillhandahåller. — Skall

- 3.4 — Startsida — Du bör kunna skapa och starta ett multiplayer-rum från lobbyn. — Bör

- 3.5 — Startsida — När du skapar ett multiplayer-rum ska du kunna ange ett rumsnamn. — Bör — Rumsnamn gäller endast multiplayer.

- 3.6 — Startsida — När du skapar ett multiplayer-rum bör du kunna ange maximalt antal spelare inom API:ets tillåtna gränser. — Bör

- 3.7 — Startsida — Om du anger minsta antal spelare bör du kunna ange detta utan att det överstiger maximalt antal spelare. — Bör

- 3.8 — Startsida — Du bör kunna gå med i ett öppet multiplayer-rum från lobbyn. — Bör

- 3.9 — Startsida — Om du är host och väntar på speldeltagare i lobbyn bör du kunna starta detta så snart som minsta antalet spelare är anslutna. — Bör

- 3.10 — Startsida — Om du har ett aktivt spel ska du från startsidan kunna återuppta spelet utan att skapa ett nytt spel. — Skall

- 3.11 — Startsida — Du bör kunna se rumsnamn, aktuellt antal spelare och maximalt antal spelare för varje öppet multiplayer-rum i lobbyn. — Bör

- 3.12 — Startsida — Du bör kunna se vilka spelare som deltar i varje öppet multiplayer-rum. — Bör

- 3.13 — Startsida — Du bör tydligt kunna se vilken spelare som är host. Informationen bör inte förmedlas enbart genom färg. — Bör

- 3.14 — Startsida — Du kan presentera spelare med avatar, till exempel via DiceBear (dicebear.com). — Kan — Extern avatartjänst är valfri och inte ett krav.

- 3.15 — Startsida — Du ska kunna se pågående spel separat från öppna multiplayer-rum. — Skall — Ett pågående spel är inte längre ett öppet rum som går att ansluta till.

- 3.16 — Startsida — När spelare ansluter till eller lämnar ett öppet rum, eller när ett rum startar, bör startsidan uppdatera rummens status via spelhubben. — Bör — Spelhubben är SignalR. Ett rum som startar ska försvinna från listan över öppna rum och i stället kunna visas som ett pågående spel.

- 4.1 — Single player — Du ska kunna läsa in aktuell spelstatus från API:t när spelsidan öppnas eller återupptas. — Skall

- 4.2 — Single player — Du ska kunna lämna ett aktivt singleplayer-spel från spelsidan. — Skall

- 4.3 — Single player — Du ska visa aktuellt tärningsresultat som API:t anger. — Skall

- 4.4 — Single player — Du ska kunna kasta tärningarna när det är din tur och spelstatusen tillåter kast. — Skall

- 4.5 — Single player — Efter tärningskast ska du inaktivera de brickor spelaren inte får välja. — Skall — API:t avgör vilka drag som är giltiga.

- 4.6 — Single player — När spelaren har valt den första brickan bör de återstående brickor som är giltiga val markeras eller på annat sätt tydligt visas. — Bör

- 4.7 — Single player — Du ska kunna välja och avmarkera brickor och skicka ett giltigt val till API:t. — Skall

- 4.8 — Single player — Du ska tydligt kunna se vilka brickor som redan har spelats. — Skall

- 4.9 — Single player — Det ska vara tydligt vilka brickor du har valt innan du genomför ditt drag. — Skall

- 4.10 — Single player — Valda brickor bör markeras på ett sätt som inte enbart bygger på färg. — Bör

- 4.11 — Single player — Du ska tydligt kunna se vilken handling som förväntas just nu: kasta tärning eller välja brickor. — Skall

- 4.12 — Single player — När API:t tillhandahåller tidsgränser bör du visa återstående tid för aktuell spelåtgärd. — Bör

- 4.13 — Single player — När API:t anger att endast en tärning ska användas ska du visa exakt en tärning och inte en tom eller inaktiv andra tärning. — Skall

- 4.14 — Single player — Vid avslutat spel ska du omedelbart informera användaren om att spelet är avslutat. — Skall

- 4.15 — Single player — Vid avslutat spel ska du visa orsaken till avslutet på ett begripligt sätt. — Skall

- 4.16 — Single player — Vid avslutat spel ska du visa din slutsumma som hämtas från API. — Skall

- 4.17 — Single player — Vid avslutat spe kan du visa totala speltiden. Skillanden mellan started At och ended At — Kan

- 4.18 — Single player — Efter avslutat singelplayer-spel bör du kunna starta ett nytt spel utan att lämna spelsidan. — Bör

- 4.19 — Single player — Om du använder ljud eller musik ska användaren kunna stänga av det. — Kan

- 4.20 — Single player — Du kan använda ljudeffekter i spelet. — Kan

- 4.21 — Single player — Du kan använda musik i spelet. — Kan

- 4.22 — Single player — Du ska kunna återgå till samma spelstate efter omladdning eller återkomst från startsidan. — Skall — Användaren ska inte behöva skapa om ett pågående serverbaserat spel.

- 5.1 — Multiplayer — När multiplayer-spelet är igång bör du tydligt kunna se vilken spelare som har tur. — Bör

- 5.2 — Multiplayer — När det blir en annan spelares tur bör spelets status och gränssnitt uppdateras så att det tydligt framgår vem som ska agera. — Bör

- 5.3 — Multiplayer — Du bör endast kunna genomföra spelhandlingar när det är din tur. — Bör — Serverns API avgör vilka handlingar som är giltiga.

- 5.4 — Multiplayer — Om en spelare lämnar ett pågående multiplayer-spel bör detta synas för de kvarvarande spelarna och spelstatusen bör anpassas efter det. — Bör

- 5.5 — Multiplayer — Om en spelare får game-over bör spelarens status tydligt visas för övriga spelare. — Bör

- 5.6 — Multiplayer — Spelet bör kunna fortsätta för kvarvarande spelare när en enskild spelare har fått game-over, om API:ets spelregler tillåter det. — Bör

- 5.7 — Multiplayer — När multiplayer-spelet är slut bör alla spelare kunna se slutresultatet och spelarnas slutstatus enligt API:ets slutstatus. — Bör

- 5.8 — Multiplayer — Du bör kunna se alla spelares poäng under hela spelomgången. — Bör

- 5.9 — Multiplayer — Du bör kunna följa ett pågående multiplayer-spel i game.html som observatör i läsläge. — Bör — Som observatör får du inte kunna utföra spelhandlingar eller på annat sätt påverka spelet.

- 5.10 — Multiplayer — Som observatör bör spelets aktuella state hållas uppdaterat så att du kan följa spelet utan att själv ladda om sidan. — Bör — Polling eller spelhubben/SignalR är möjliga lösningar.

- 5.11 — Multiplayer — Om du implementerar multiplayer ska kommunikationen med spelhubben ske med SignalR. — Bör — SignalR är ett krav för multiplayerområdet; i kravtexten används begreppet spelhubben.

- 5.12 — Multiplayer — När multiplayer-läget kräver att en annan spelare väntar bör gränssnittet tydligt visa detta och förhindra spelhandlingar tills det är spelarens tur. — Bör

- 6.1 — CSS — Du ska dela upp startsidans CSS i separata filer så att site.css endast innehåller CSS som är gemensam för startsidan och spelsidan. — Skall — Du väljer själv hur den startsidespecifika CSS:en delas upp. Det krävs ingen särskild filindelning utöver game.css.

- 6.2 — CSS — Du ska ha game.css för styling som endast hör till spelsidan. — Skall

- 6.3 — CSS — Du ska endast lägga webbplatsens generella regler i site.css. — Skall — Du ska kunna förklara varför en regel hör till gemensam styling eller till game.css.

- 6.4 — CSS — Du ska få startsidan och spelsidan att visuellt upplevas som delar av samma webbplats genom gemensamma designprinciper och gemensamma CSS-regler. — Skall

- 6.5 — CSS — Du får använda AI för att generera game.html och game.css enligt kursens AI-regler. — Skall — Du ansvarar för att kontrollera, anpassa, förstå och kunna förklara den kod du använder.

- 6.6 — CSS — Delar av AI-genererad game.css ska flyttas till site.css när de beskriver webbplatsgemensam layout och design. — Skall — Du ska själv kunna identifiera vilka regler som är gemensamma och motivera varför de hör hemma i site.css.

- 6.7 — CSS — Du ska själv utforma startsidans gränssnitt och startsidespecifik CSS. — Skall — AI får användas som stöd enligt kursens AI-regler, men du ska kunna förklara och försvara den lösning du lämnar in.

- 6.8 — CSS — Du ska kunna visa var gemensam styling, startsidesspecifik styling och spelspecifik styling finns och förklara varför uppdelningen ser ut som den gör. — Skall — Kan bedömas i kodgranskning och muntlig redovisning.

- 7.1 — GitHub — Du ska ha projektet i kursens tillhandahållna GitHub-repository. — Skall — Du når repot via grupp1.dsvkurs.miun.se

- 7.2 — GitHub — Vid inlämning så ska all kod ligga i main branch — Skall

- 7.3 — GitHub — Du ska göra arbetsprocessen möjlig att följa via versionshistoriken och gruppmedlemmarnas arbete ska vara synligt i repositoryt. — Skall — Du måste kontinuerligt pusha kod till github så att versionshistoriken lagras på github.com

- 8.1 — Release — Du ska skapa en release av spelet när du bedömer att lösningen uppfyller kursens krav och är färdig för leverans. — Skall — Release markerar den version du betraktar som färdig.

- 8.2 — Release — Du får fortsätta utveckla spelet efter att du har skapat releasen. — Kan

- 9.1 — Publicering — Du ska publicera spelet på studentwebben enligt instruktionerna i 
Canvas. — Skall — Tidpunkt och praktiska instruktioner anges i Canvas, inte här.

- 9.2 — Publicering — Du ska inte publicera spelet på studentwebben före kursvecka 8 (läs mer i Canvas). — Skall — Tidpunkt och praktiska instruktioner anges i Canvas, inte i detta kravdokument.

- 9.3 — Publicering — Du ska se till att den publicerade webbplatsen fungerar i sin helhet, inklusive CSS, JavaScript, bilder och övriga resurser. — Skall

- 10.1 — Testning — Du ska testa webbplatsen vid minst 320 px, 768 px och 1280 px viewportbredd samt i minst två moderna webbläsare. — Skall — Kontrollera både startsida och spelsidan.

- 10.2 — Testning — Du ska kontrollera att inga egna debug-loggar eller känsliga uppgifter finns i produktionskoden eller konsolen. — Skall
