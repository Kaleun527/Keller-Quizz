import { Question, Category } from "./types";

const getCategory = (index: number): Category => {
  if (index === 0 || index >= 117) return "Trivia & Historie";
  if (index <= 26) return "Staffel 1 & 2";
  if (index <= 53) return "Staffel 3 & 4";
  if (index <= 79) return "Staffel 5 & 6";
  return "Staffel 7 & 8";
};

const rawData = [
  {
    "frage": "In welcher Stadt ist Kommissar Keller in den meisten Fällen im Einsatz?",
    "optionen": ["Hamburg", "Berlin", "München", "Frankfurt"],
    "antwort": "München",
    "schwierigkeitsgrad": 1,
    "fakt": "München bildet die atmosphärische Kulisse für das Team, das oft auch im Umland wie in Grünwald oder Schwabing ermittelt."
  },
  {
    "frage": "Welche Zugnummer trägt der Fernzug, in dem in 'Der Tod fährt 1. Klasse' gemordet wird?",
    "optionen": ["D 364", "ICE 500", "TEE 12", "D 110"],
    "antwort": "D 364",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Strecke führte von Dortmund über Köln und Frankfurt direkt nach München."
  },
  {
    "frage": "Wieviele Kugeln trafen das Opfer Erika Nagold in der Folge 'Tod einer Zeugin' ins Herz?",
    "optionen": ["Eine", "Zwei", "Drei", "Vier"],
    "antwort": "Zwei",
    "schwierigkeitsgrad": 5,
    "fakt": "Der Mörder nutzte ein Tonband mit Schussgeräuschen, um die Tatzeit akustisch zu manipulieren."
  },
  {
    "frage": "Mit welcher spezifischen Pistole wurde Dr. Steiner in 'Toter Herr im Regen' erschossen?",
    "optionen": ["Luger P08", "Walther 7,65", "Colt 45", "Smith & Wesson"],
    "antwort": "Walther 7,65",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Waffe gehörte ursprünglich dem Vater der Verdächtigen und war ein altes Erbstück."
  },
  {
    "frage": "Was wurde Ewald Kerski in 'Keiner hörte den Schuss' aus der Tasche geraubt?",
    "optionen": ["Bargeld", "Rohdiamanten", "Ein Notizbuch", "Aktendokumente"],
    "antwort": "Rohdiamanten",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Beute hatte einen Wert von 450.000 Mark, was für das Jahr 1969 eine gewaltige Summe war."
  },
  {
    "frage": "In 'Schrei vor dem Fenster' spielt Irene Pauli ihren eigenen Tod auf der Bühne. Welches Stück wird aufgeführt?",
    "optionen": ["Faust", "Maria Stuart", "Hamlet", "Die Räuber"],
    "antwort": "Maria Stuart",
    "schwierigkeitsgrad": 4,
    "fakt": "Während sie die sterbende Königin spielte, wurde ihr Ehemann in ihrer Wohnung tatsächlich erschossen."
  },
  {
    "frage": "Welchen Promillewert hatte das Opfer Erich Thiemann in 'Die Schrecklichen'?",
    "optionen": ["1,5", "2,1", "2,8", "3,2"],
    "antwort": "2,8",
    "schwierigkeitsgrad": 5,
    "fakt": "Thiemann war ein Möbelhändler aus Nürnberg, der in München Opfer einer Bande alter Raubmörder wurde."
  },
  {
    "frage": "Was ist die Besonderheit der 'Waggonspringer' bei ihren Diebstählen?",
    "optionen": ["Sie nutzen Hubschrauber", "Sie springen während der Fahrt auf Güterzüge", "Sie graben Tunnel", "Sie bestechen die Lokführer"],
    "antwort": "Sie springen während der Fahrt auf Güterzüge",
    "schwierigkeitsgrad": 2,
    "fakt": "Die Bande hatte einen Informanten in Frankfurt, der ihnen genau mitteilte, in welchem Waggon wertvolle Fracht lag."
  },
  {
    "frage": "In welcher Bar spielte Werner Fellner in 'Tod eines Klavierspielers' abends Klavier?",
    "optionen": ["Kabinett", "Pacific", "Moulin Rouge", "Blue Note"],
    "antwort": "Pacific",
    "schwierigkeitsgrad": 3,
    "fakt": "Obwohl er dort spielte, war Fellner von Beruf eigentlich Feinmechaniker, was ihn für den geplanten Einbruch wertvoll machte."
  },
  {
    "frage": "Welches mysteriöse Wort steht im Erpresserbrief in 'Die Pistole im Park'?",
    "optionen": ["Bonnea", "Stuttgart", "Schubelik", "König"],
    "antwort": "Bonnea",
    "schwierigkeitsgrad": 5,
    "fakt": "Bonnea war der Name einer Tarnfirma in der Schweiz, die Wegner zur Steuerhinterziehung nutzte."
  },
  {
    "frage": "Mit welcher Waffe wurde Theodor Matussek in 'Ratten der Großstadt' getötet?",
    "optionen": ["Messer", "Pistole", "Flasche", "Hammer"],
    "antwort": "Flasche",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Wirt wurde am frühen Morgen erschlagen, als er den ersten Gästen öffnen wollte."
  },
  {
    "frage": "Wo wird die Leiche von Irmgard Panofsky in 'Die Tote im Dornbusch' gefunden?",
    "optionen": ["In der Isar", "An der Autobahn", "Im Englischen Garten", "Im Keller"],
    "antwort": "An der Autobahn",
    "schwierigkeitsgrad": 2,
    "fakt": "Sie war eine ehemalige 'Miss Ostsee' und wurde per Anhalter von einem Lastwagen mitgenommen."
  },
  {
    "frage": "Wie täuscht der Ganove Mills in 'Der Tote von Zimmer 17' sein Alibi vor?",
    "optionen": ["Doppelgänger", "Spritzte sich ein Mittel für Fieber", "Kino-Besuch", "Versteck im Schrank"],
    "antwort": "Spritzte sich ein Mittel für Fieber",
    "schwierigkeitsgrad": 4,
    "fakt": "Durch das künstliche Fieber ließ er sich in heiße Tücher einwickeln, um als schwerkrank zu gelten."
  },
  {
    "frage": "In '… wie die Wölfe' gewinnt eine alte Dame im Lotto. Wie hoch war der Gewinn?",
    "optionen": ["1.000 Mark", "3.000 Mark", "5.000 Mark", "10.000 Mark"],
    "antwort": "3.000 Mark",
    "schwierigkeitsgrad": 2,
    "fakt": "Frau Kluge zeigte das Geld stolz allen Nachbarn im Haus, was schließlich zu ihrem gewaltsamen Tod führte."
  },
  {
    "frage": "Welche körperliche Behinderung simuliert der Vater in 'Parkplatz-Hyänen'?",
    "optionen": ["Blindheit", "Taubheit", "Lähmung der Beine", "Stummheit"],
    "antwort": "Lähmung der Beine",
    "schwierigkeitsgrad": 4,
    "fakt": "Er behauptete, von einem Auto überfahren worden zu sein, um von der Versicherung zu leben."
  },
  {
    "frage": "Wer gesteht in 'Tödlicher Irrtum' den Mord zuerst gegenüber einem Pfarrer?",
    "optionen": ["Der Ehemann", "Der Nachbar", "Ein Unbekannter im Beichtstuhl", "Der Hausmeister"],
    "antwort": "Ein Unbekannter im Beichtstuhl",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Mörder weinte während der Beichte und hatte die falsche Frau (Frau Heubel statt Frau Dönhoff) erwürgt."
  },
  {
    "frage": "Wie lange saß Albert Kossitz im Zuchthaus, bevor er in 'In letzter Minute' entlassen wurde?",
    "optionen": ["4 Jahre", "6 Jahre", "8 Jahre", "10 Jahre"],
    "antwort": "6 Jahre",
    "schwierigkeitsgrad": 3,
    "fakt": "Er wurde wegen guter Führung zwei Jahre früher aus der Haftanstalt Landsberg entlassen."
  },
  {
    "frage": "Was sammelte das Opfer im Wald in der Folge 'Das Ungeheuer'?",
    "optionen": ["Beeren", "Blumen", "Steinpilze", "Kastanien"],
    "antwort": "Steinpilze",
    "schwierigkeitsgrad": 2,
    "fakt": "In der Küche des Verdächtigen Vollmer wurden die gleichen Pilze gefunden."
  },
  {
    "frage": "Welches amtliche Kennzeichen trug der Wagen des Mörders in 'Messer im Rücken'?",
    "optionen": ["WX 690", "M-TK 110", "S-ER 42", "B-AK 77"],
    "antwort": "WX 690",
    "schwierigkeitsgrad": 5,
    "fakt": "Das Kennzeichen wurde auf einem vergrößerten Foto identifiziert, das zufällig am Tatort gemacht wurde."
  },
  {
    "frage": "Wer wird in 'Eine Kugel für den Kommissar' zum Ziel eines Attentats?",
    "optionen": ["Harry Klein", "Robert Heines", "Kommissar Keller", "Erwin Rehbein"],
    "antwort": "Kommissar Keller",
    "schwierigkeitsgrad": 1,
    "fakt": "Keller erlitt einen Streifschuss am Arm, als aus einem vorbeifahrenden Wagen auf ihn geschossen wurde."
  },
  {
    "frage": "Welchen Beruf übte der Mörder von Lisa Bassenge in 'Lisa Bassenges Mörder' aus?",
    "optionen": ["Bäcker", "Lokführer", "Kellner", "Lehrer"],
    "antwort": "Lokführer",
    "schwierigkeitsgrad": 4,
    "fakt": "Leo ließ die Lokpfeife immer zweimal ertönen, wenn er an Lisas Fenster vorbeifuhr."
  },
  {
    "frage": "In welcher Straße wohnte das Opfer Heinze in 'Tod eines Ladenbesitzers'?",
    "optionen": ["Goethestraße", "Schillerstraße", "Felix-Dahn-Straße", "Keine Angabe im Transkript"],
    "antwort": "Keine Angabe im Transkript",
    "schwierigkeitsgrad": 5,
    "fakt": "Heinze führte einen kleinen Kramladen und gab den Bewohnern des nahegelegenen Altersheims Kredit für Schnaps."
  },
  {
    "frage": "Mit welcher Tatwaffe wurde der Ladenbesitzer Heinze erschlagen?",
    "optionen": ["Eisenstange", "Stuhlbein", "Hammer", "Flasche"],
    "antwort": "Stuhlbein",
    "schwierigkeitsgrad": 3,
    "fakt": "Das Stuhlbein wurde nach der Tat sorgfältig abgewischt, um Spuren zu beseitigen."
  },
  {
    "frage": "In 'Die andere Seite der Straße' passiert dem Zeugen Gallus an der Haustür ein Missgeschick. Welches?",
    "optionen": ["Er stürzt", "Er bricht den Schlüssel ab", "Er verliert seine Brille", "Er wird überfallen"],
    "antwort": "Er bricht den Schlüssel ab",
    "schwierigkeitsgrad": 4,
    "fakt": "Durch den abgebrochenen Schlüssel konnte er nicht rechtzeitig ins Haus gelangen, um Bofinger zu helfen."
  },
  {
    "frage": "Aus welchem Land stammte die Rauschgiftsendung im Fall 'Der Mord an Frau Klett'?",
    "optionen": ["Türkei", "Afghanistan", "Libanon", "Marokko"],
    "antwort": "Afghanistan",
    "schwierigkeitsgrad": 5,
    "fakt": "Es handelte sich um eine Sendung im Wert von 80.000 Mark, die Frau Klett unterschlagen wollte."
  },
  {
    "frage": "Womit wurde Josef Schubelik in 'Die kleine Schubelik' ermordet?",
    "optionen": ["Messerstich", "Gift", "Erstickt mit einem Kissen", "Erschlagen"],
    "antwort": "Erstickt mit einem Kissen",
    "schwierigkeitsgrad": 3,
    "fakt": "Seine Ehefrau drückte ihm das Kissen aufs Gesicht, während er völlig betrunken im Bett lag."
  },
  {
    "frage": "In welches Hotel reisten die drei Freunde in 'Drei Tote reisen nach Wien'?",
    "optionen": ["Hotel Sacher", "Hotel Belvedere", "Hotel Imperial", "Hotel Central"],
    "antwort": "Hotel Belvedere",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Neffe Jochen Roth erfand einen 'Mann aus Wien', um von seinem Erbschaftsmotiv abzulenken."
  },
  {
    "frage": "Wohin wollte Maria Kaiser in 'Der Moormörder' angeblich auswandern?",
    "optionen": ["USA", "Australien", "Kanada", "Südafrika"],
    "antwort": "Kanada",
    "schwierigkeitsgrad": 3,
    "fakt": "Sie kündigte ihre Stelle und hob 23.000 Mark von ihrem Konto ab, bevor sie im Moor erschlagen wurde."
  },
  {
    "frage": "Wie heißt der Hund, der in 'Lagankes Verwandte' den Einbruch bemerkte?",
    "optionen": ["Bello", "Trixi", "Rex", "Waldi"],
    "antwort": "Trixi",
    "schwierigkeitsgrad": 3,
    "fakt": "Trixi schlug an, weil sie die Einbrecher im Geschäft unter der Wohnung hörte."
  },
  {
    "frage": "Welches Geschenk kaufte die Schwester für den Fahrer in 'Die Anhalterin'?",
    "optionen": ["Einen Rosenkranz", "Einen Stofflöwen", "Einen Würfel", "Ein Hufeisen"],
    "antwort": "Einen Stofflöwen",
    "schwierigkeitsgrad": 3,
    "fakt": "Der kleine Löwe sollte an der Windschutzscheibe hängen, da der Fahrer kein Geld für die Mitnahme annahm."
  },
  {
    "frage": "Welche Währung wird bei der Hotelrechnung in 'Drei Tote reisen nach Wien' explizit erwähnt?",
    "optionen": ["Mark", "Franken", "Schillinge", "Lire"],
    "antwort": "Schillinge",
    "schwierigkeitsgrad": 5,
    "fakt": "Die Rechnung im Belvedere belief sich auf 1.100 Schillinge."
  },
  {
    "frage": "In 'Lisa Bassenges Mörder' hat Lisas Bruder Alfred eine körperliche Beeinträchtigung. Welche?",
    "optionen": ["Er ist blind", "Er nutzt Krücken / ist gelähmt", "Er ist taub", "Er hat nur einen Arm"],
    "antwort": "Er nutzt Krücken / ist gelähmt",
    "schwierigkeitsgrad": 3,
    "fakt": "Obwohl er kaum laufen konnte, war er ein zentraler Zeuge in der Wohnung."
  },
  {
    "frage": "Was fehlt im Buch des Ladenbesitzers Heinze nach dem Mord?",
    "optionen": ["Geldnotizen", "Die Seiten mit den Schulden", "Adressen der Lieferanten", "Rezepturen"],
    "antwort": "Die Seiten mit den Schulden",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Mörder wollte die Beweise vernichten, wer bei Heinze für Schnaps angeschrieben hatte."
  },
  {
    "frage": "Wie hoch war der Betrag, den Frau Klett im Rauschgiftfall unterschlagen hatte?",
    "optionen": ["10.000 Mark", "30.000 Mark", "80.000 Mark", "100.000 Mark"],
    "antwort": "80.000 Mark",
    "schwierigkeitsgrad": 4,
    "fakt": "Sie sagte zu ihrem Mann, dass sie das Geld nie wieder hergeben würde."
  },
  {
    "frage": "In 'Der Moormörder' wurde das Opfer mit welchem Betrag auf dem Konto beschrieben?",
    "optionen": ["12.000 Mark", "23.000 Mark", "50.000 Mark", "5.000 Mark"],
    "antwort": "23.000 Mark",
    "schwierigkeitsgrad": 5,
    "fakt": "Maria Kaiser hatte das gesamte Geld abgehoben, um angeblich ein neues Leben zu beginnen."
  },
  {
    "frage": "Wie hieß der Neffe, der in 'Drei Tote reisen nach Wien' der wahre Mörder war?",
    "optionen": ["Alfred", "Jochen Roth", "Karl", "Willi"],
    "antwort": "Jochen Roth",
    "schwierigkeitsgrad": 4,
    "fakt": "Er wollte das Erbe seines Onkels antreten und inszenierte ein aufwendiges Ablenkungsmanöver."
  },
  {
    "frage": "Welche Waffe wird im Fall 'Der Papierblumenmörder' gesucht?",
    "optionen": ["Eine Armbrust", "Eine verrostete Walther 7,65", "Ein Küchenmesser", "Ein Jagdgewehr"],
    "antwort": "Eine verrostete Walther 7,65",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Pistole stammte aus dem Krieg und versagte beim zweiten Schussversuch aufgrund von Rost."
  },
  {
    "frage": "In welcher Folge bricht ein Zeuge vor Schreck seinen Hausschlüssel ab?",
    "optionen": ["Lagankes Verwandte", "Die andere Seite der Straße", "Tod einer Zeugin", "Messer im Rücken"],
    "antwort": "Die andere Seite der Straße",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Vorfall passierte direkt vor der Haustür, während gegenüber die Schüsse fielen."
  },
  {
    "frage": "Wer ist das Opfer in der Folge 'Lisa Bassenges Mörder'?",
    "optionen": ["Eine Sekretärin", "Eine Serviererin", "Eine Schauspielerin", "Eine Lehrerin"],
    "antwort": "Eine Serviererin",
    "schwierigkeitsgrad": 1,
    "fakt": "Lisa arbeitete in einem Lokal am Bahnhof und war erst 22 Jahre alt."
  },
  {
    "frage": "Wieviele Messerstiche erlitt Frau Klett laut Befund?",
    "optionen": ["3", "6 bis 7", "12", "Einen einzigen"],
    "antwort": "6 bis 7",
    "schwierigkeitsgrad": 5,
    "fakt": "Sie wurde nicht am Fundort ermordet, sondern dort nur in einer Mülltonne entsorgt."
  },
  {
    "frage": "Welche Droge konsumierte Sibille Larassa in der Folge 'Grau-roter Morgen'?",
    "optionen": ["Kokain", "LSD", "Harte Drogen (Heroin)", "Haschisch"],
    "antwort": "Harte Drogen (Heroin)",
    "schwierigkeitsgrad": 1,
    "fakt": "Sibille ging sehr schnell zu harten Drogen über, nachdem sie musikalisch und fotografisch begabt war."
  },
  {
    "frage": "Wie heißt der mehrfache Mörder, der in 'Ein Amoklauf' aus dem Gefängnis entflieht?",
    "optionen": ["Neumann", "Weißmann", "Lansky", "Derrick"],
    "antwort": "Weißmann",
    "schwierigkeitsgrad": 2,
    "fakt": "Erich Weißmann hatte zweieinhalb Jahre zuvor seine Kinder und seinen Schwiegervater erschossen."
  },
  {
    "frage": "Was ist der Beruf von Kabisch, dem flüchtigen Patienten in 'Traum eines Wahnsinnigen'?",
    "optionen": ["Chirurg", "Verwandlungskünstler", "Bankräuber", "Lehrer"],
    "antwort": "Verwandlungskünstler",
    "schwierigkeitsgrad": 3,
    "fakt": "Kabisch trat früher in Berlin auf und konnte sich mit wenigen Hilfsmitteln in andere Menschen verwandeln."
  },
  {
    "frage": "In 'Schwester Ignatia' wird ein Millionär ermordet. Wie ist sein Name?",
    "optionen": ["Poschmann", "Basseck", "Lansky", "Kurusch"],
    "antwort": "Poschmann",
    "schwierigkeitsgrad": 2,
    "fakt": "Das Opfer, Robert Poschmann, war ein erfolgreicher Kaufherr, der allein in einem großen Haus lebte."
  },
  {
    "frage": "Welches Beweismittel findet der Vater in 'Toter gesucht' in der Heizung?",
    "optionen": ["Eine Pistole", "Ein blutiges Hemd", "Einen Koffer", "Ein Testament"],
    "antwort": "Ein blutiges Hemd",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Vater fand das Hemd in der Heizung, bevor es vollständig zu Asche verbrannt war."
  },
  {
    "frage": "Welche Musik hört Dr. Rotter in 'Als die Blumen Trauer trugen' ununterbrochen?",
    "optionen": ["Opernarien", "Platten der Sängerin Jenny", "Beat-Musik", "Klassische Klaviermusik"],
    "antwort": "Platten der Sängerin Jenny",
    "schwierigkeitsgrad": 4,
    "fakt": "Jenny war eine junge Sängerin, die an den Folgen einer illegalen Abtreibung starb."
  },
  {
    "frage": "Welche Tatwaffe wurde im Fall 'Der Tod des Herrn Kurusch' verwendet?",
    "optionen": ["Ein Hammer", "Ein Messer", "Eine Pistole", "Ein Giftbecher"],
    "antwort": "Ein Hammer",
    "schwierigkeitsgrad": 1,
    "fakt": "Der Verdächtige hatte den Hammer kurz zuvor in einem Haushaltswarengeschäft gekauft."
  },
  {
    "frage": "Wie werden die Schnürsenkel des Verdächtigen in 'Kellner Windeck' platziert?",
    "optionen": ["Gekreuzt", "Nach innen eingeschlagen", "Offen gelassen", "Doppelt verknotet"],
    "antwort": "Nach innen eingeschlagen",
    "schwierigkeitsgrad": 5,
    "fakt": "Dieses Detail an den abgestellten Schuhen war ein entscheidender Hinweis auf die Identität des Täters."
  },
  {
    "frage": "Wer war Richard Ebinger, das Opfer in 'Ein rätselhafter Mord'?",
    "optionen": ["Ein Polizist", "Ein Student", "Ein Arzt", "Ein Kellner"],
    "antwort": "Ein Student",
    "schwierigkeitsgrad": 1,
    "fakt": "Der 23-jährige Ebinger wurde aus einem Fenster heraus in den Rücken geschossen."
  },
  {
    "frage": "Wer ist das Ziel des Mordanschlags in 'Überlegungen eines Mörders'?",
    "optionen": ["Georg Tabeller", "Erika Tabeller", "Nora Tabeller", "Antonio der Gärtner"],
    "antwort": "Erika Tabeller",
    "schwierigkeitsgrad": 3,
    "fakt": "Erika war die zweite Frau von Georg Tabeller und wurde durch das Fenster der Terrasse beschossen."
  },
  {
    "frage": "Wo versteckt der Hausmeister den Brillantring in 'Die Tote im Park'?",
    "optionen": ["Im Keller", "Im Küchenschrank", "Unter dem Teppich", "Im Auto"],
    "antwort": "Im Küchenschrank",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Hausmeister behauptete, den Ring im Treppenhaus gefunden zu haben."
  },
  {
    "frage": "Wie viel Geld trägt Franz Berners in 'Toter gesucht' plötzlich bei sich?",
    "optionen": ["100 Mark", "520 Mark", "2000 Mark", "5000 Mark"],
    "antwort": "520 Mark",
    "schwierigkeitsgrad": 4,
    "fakt": "Franz zeigte dem Kommissar demonstrativ 520 Mark, um zu beweisen, dass er über Geld verfüge."
  },
  {
    "frage": "Wie lange ist die Gemeindeschwester in 'Schwester Ignatia' bereits in ihrer Gemeinde tätig?",
    "optionen": ["5 Jahre", "10 Jahre", "20 Jahre", "30 Jahre"],
    "antwort": "20 Jahre",
    "schwierigkeitsgrad": 4,
    "fakt": "Schwester Ignatia kannte durch ihre 20-jährige Dienstzeit fast jeden Menschen in der Gemeinde."
  },
  {
    "frage": "Welches Rauschgift wird in der Folge 'Mykonos' transportiert?",
    "optionen": ["LSD", "Schwarzer Afghane", "Kokain", "Morphium"],
    "antwort": "Schwarzer Afghane",
    "schwierigkeitsgrad": 2,
    "fakt": "Es handelte sich um 4 kg Rauschgift, das in kleinen Säckchen abgepackt war."
  },
  {
    "frage": "Welches markante Merkmal weist die Erde an den Schuhen des Opfers in 'Der Tennisplatz' auf?",
    "optionen": ["Blauer Lack", "Roter Sand", "Weißer Kalk", "Schwarzer Humus"],
    "antwort": "Roter Sand",
    "schwierigkeitsgrad": 1,
    "fakt": "Die spektrographische Analyse bestätigte, dass der Sand exakt von einem bestimmten Privatplatz stammte."
  },
  {
    "frage": "Wie heißt die Erziehungsanstalt, aus der das Mädchen in 'Fluchtwege' flieht?",
    "optionen": ["Bockelberg", "Marienau", "Steinhof", "Grünwald"],
    "antwort": "Bockelberg",
    "schwierigkeitsgrad": 4,
    "fakt": "Gabriele war aus Bockelberg geflohen und wurde per Anhalter nach München mitgenommen."
  },
  {
    "frage": "Wo findet die letzte Vorstellung des Humoristen in 'Das Ende eines Humoristen' statt?",
    "optionen": ["Circus Krone", "Herkulessaal", "Evangelischer Gemeindesaal", "Ein Gasthof in Italkirchen"],
    "antwort": "Evangelischer Gemeindesaal",
    "schwierigkeitsgrad": 4,
    "fakt": "Trotz des Todes seiner Tochter wollte der Humorist die Vorstellung nicht absagen."
  },
  {
    "frage": "Welchen Beruf übte Dr. Kerrutt in der Folge 'Blinde Spiele' aus?",
    "optionen": ["Rechtsanwalt", "Zahnarzt", "Automobilhändler", "Architekt"],
    "antwort": "Zahnarzt",
    "schwierigkeitsgrad": 2,
    "fakt": "Dr. Kerrutt war mit der Frau verheiratet, die die Wochenenden mit dem Opfer Rauda verbrachte."
  },
  {
    "frage": "Welche Farbe haben die Stiefel der verdächtigen Mädchen in 'Rudek'?",
    "optionen": ["Schwarz", "Rot", "Weiß", "Braun"],
    "antwort": "Weiß",
    "schwierigkeitsgrad": 3,
    "fakt": "Mehrere Taxifahrer erinnerten sich an junge Mädchen mit auffälligen weißen Stiefeln."
  },
  {
    "frage": "Wie heißt der Landgerichtsrat, der eine Beziehung zum Opfer in 'Tod eines Hippiemädchens' hatte?",
    "optionen": ["Dr. Schöne", "Dr. Tucher", "Dr. Rotter", "Dr. Wiegand"],
    "antwort": "Dr. Tucher",
    "schwierigkeitsgrad": 3,
    "fakt": "Dr. Tucher behauptete zunächst, sein Interesse an Karin sei rein 'beruflicher' Natur gewesen."
  },
  {
    "frage": "Wie viele Sekunden vergingen in 'Das Komplott' angeblich zwischen dem Anruf des Chefs und dem Fund der Leiche?",
    "optionen": ["30 Sekunden", "54 Sekunden", "90 Sekunden", "120 Sekunden"],
    "antwort": "54 Sekunden",
    "schwierigkeitsgrad": 4,
    "fakt": "Die extrem kurze Zeitspanne machte die Aussage des Angestellten Steintaler für die Polizei unglaubwürdig."
  },
  {
    "frage": "In welcher bizarren Situation wird Herr Arzberg in 'Schwarzes Dreieck' aufgefunden?",
    "optionen": ["In der Garage", "In der Badewanne", "Im Ehebett", "In der Kirche"],
    "antwort": "In der Badewanne",
    "schwierigkeitsgrad": 1,
    "fakt": "Ein defekter elektrischer Rasierapparat im Badewasser sollte einen Unfall vortäuschen."
  },
  {
    "frage": "Was soll Professor Triberg in 'Der Geigenspieler' laut einer telefonischen Warnung auf keinen Fall tun?",
    "optionen": ["Das Konzert spielen", "Den Wein trinken", "Den Zug nehmen", "Die Tür öffnen"],
    "antwort": "Den Zug nehmen",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Anruf erreichte den Pförtner des Herkulessaals während des laufenden Konzerts."
  },
  {
    "frage": "Was ist der Beruf des Opfers Mario Basseck in 'Die Nacht, in der Basseck starb'?",
    "optionen": ["Buchhändler", "Barbesitzer", "Taxifahrer", "Polizist"],
    "antwort": "Barbesitzer",
    "schwierigkeitsgrad": 2,
    "fakt": "Basseck wurde in seiner Wohnung erschossen, kurz nachdem er sein Lokal verlassen hatte."
  },
  {
    "frage": "Wo findet Karin Winter in 'Der Tod von Karin W.' Zuflucht, bevor sie stirbt?",
    "optionen": ["In einem Krankenhaus", "In einem Lokal (beim Wirt)", "Bei ihrer Tante", "Im Polizeirevier"],
    "antwort": "In einem Lokal (beim Wirt)",
    "schwierigkeitsgrad": 3,
    "fakt": "Sie schleppte sich schwer verletzt in das Lokal, um ihre Mutter anzurufen."
  },
  {
    "frage": "Wo wurde das geraubte Geld in der Folge 'Das Komplott' versteckt?",
    "optionen": ["In einem Tresor", "In einem Kellerloch", "Auf der Heizung", "Im Aktenkoffer"],
    "antwort": "Auf der Heizung",
    "schwierigkeitsgrad": 5,
    "fakt": "Das Geld lag eingewickelt in Zeitungspapier völlig offen auf der Heizung im Revisionsbüro."
  },
  {
    "frage": "Was zeichnet der kranke Sohn Ulrich im Garten in 'Herr und Frau Brandes'?",
    "optionen": ["Ein Boot", "Sein Selbstporträt", "Ein Gewehr", "Eine tote Taube"],
    "antwort": "Ein Gewehr",
    "schwierigkeitsgrad": 2,
    "fakt": "Ulrich zeichnete das Gewehr aus freien Stücken, was den Kommissar stutzig machte."
  },
  {
    "frage": "Wo wurde die Leiche von Herrn Kapp in 'Tod eines Buchhändlers' gefunden?",
    "optionen": ["In seinem Laden", "In der Isar", "Im Englischen Garten", "In seiner Garage"],
    "antwort": "In der Isar",
    "schwierigkeitsgrad": 1,
    "fakt": "Herr Kapp war ein Buchhändler, der jeden Samstag betrunken aus München zurückkehrte."
  },
  {
    "frage": "Was war das Geheimnis zwischen dem Opfer Domann und der Mutter in 'Domanns Mörder'?",
    "optionen": ["Sie waren verwandt", "Er war ihr Liebhaber", "Er schuldete ihr Geld", "Er erpresste sie"],
    "antwort": "Er war ihr Liebhaber",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Student Domann war gleichzeitig mit der Mutter und der Tochter der Familie befreundet."
  },
  {
    "frage": "Welchem Nebenberuf ging die ermordete Alma Geibel in 'Ein Anteil am Leben' nach?",
    "optionen": ["Putzfrau", "Kellnerin", "Fotomodell", "Sekretärin"],
    "antwort": "Kellnerin",
    "schwierigkeitsgrad": 2,
    "fakt": "Alma arbeitete als Kellnerin in der 'Stimme', einem Lokal mit exklusiven Stammgästen."
  },
  {
    "frage": "Welches markante körperliche Merkmal hatte das Opfer in 'Spur von kleinen Füßen'?",
    "optionen": ["Eine Tätowierung", "Sehr kleine Füße", "Rote Haare", "Eine Narbe im Gesicht"],
    "antwort": "Sehr kleine Füße",
    "schwierigkeitsgrad": 3,
    "fakt": "Das etwa 20-jährige Mädchen wurde durch einen Herzschuss getötet und von einer Brücke geworfen."
  },
  {
    "frage": "Welches Kartenspiel spielten die drei Brüder York angeblich zur Tatzeit?",
    "optionen": ["Poker", "Skat", "Bridge", "Rommé"],
    "antwort": "Skat",
    "schwierigkeitsgrad": 2,
    "fakt": "Die Brüder behaupteten, den ganzen Abend Skat gespielt und das Haus nicht verlassen zu haben."
  },
  {
    "frage": "Wer ist der tote Landstreicher in 'Tod eines Landstreichers' in Wirklichkeit?",
    "optionen": ["Ein Unbekannter", "Albert Scherr", "Ein geflohener Sträfling", "Ein reicher Erbe"],
    "antwort": "Albert Scherr",
    "schwierigkeitsgrad": 5,
    "fakt": "Er war der Bruder des Wirtes und vor 20 Jahren nach einem Mordfall geflüchtet."
  },
  {
    "frage": "Wie viele Messerstiche erlitt das Opfer Heidi Hansen in 'Ein Funken in der Kälte'?",
    "optionen": ["Einen", "Zwei", "Vier", "Zehn"],
    "antwort": "Vier",
    "schwierigkeitsgrad": 4,
    "fakt": "Die 70-jährige Prostituierte wurde aus einem fahrenden Auto auf die Straße geworfen."
  },
  {
    "frage": "Wie heißt das in 'Sonderbare Vorfälle...' ermordete Dienstmädchen?",
    "optionen": ["Erna", "Maria", "Mathilde", "Karin"],
    "antwort": "Erna",
    "schwierigkeitsgrad": 3,
    "fakt": "Erna Weise wurde im Wohnzimmer erwürgt und dann sorgfältig in ihr Bett zurückgelegt."
  },
  {
    "frage": "Wer findet in der Folge 'Sommerpension' die Leiche im Moor?",
    "optionen": ["Ein Bauer", "Ein Jäger mit seinem Hund", "Ein Wanderer", "Die Wirtin"],
    "antwort": "Ein Jäger mit seinem Hund",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Jäger fand zuerst einen Schuh und dann den Toten im Sumpf."
  },
  {
    "frage": "Für welche Firma arbeitete Lansky in 'Die Nacht mit Lansky' angeblich 20 Jahre lang?",
    "optionen": ["Gering und Co.", "Bachmann AG", "Rossmann Textilien", "Müller & Söhne"],
    "antwort": "Gering und Co.",
    "schwierigkeitsgrad": 5,
    "fakt": "Lansky verheimlichte seiner Familie ein Jahr lang, dass er entlassen worden war."
  },
  {
    "frage": "Wer ist laut Geständnis in 'Herr und Frau Brandes' der wahre Mörder von Andreas Haupt?",
    "optionen": ["Der kranke Sohn", "Dr. Brandes", "Frau Brandes", "Die Haushälterin"],
    "antwort": "Frau Brandes",
    "schwierigkeitsgrad": 1,
    "fakt": "Frau Brandes gestand den Mord, als der Verdacht gezielt auf ihren Sohn gelenkt wurde."
  },
  {
    "frage": "Wie lautet der Spitzname des Verdächtigen in 'Ein Funken in der Kälte'?",
    "optionen": ["Der Fuchs", "Die Ratte", "Der Schläfer", "Der flinke Max"],
    "antwort": "Die Ratte",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Mann namens Schlichter war stadtbekannt und bereits mehrfach vorbestraft."
  },
  {
    "frage": "Was wurde in 'Drei Brüder' aus dem Laden des Opfers gestohlen?",
    "optionen": ["Gold", "Zigaretten", "Schnapsflaschen", "Bargeld"],
    "antwort": "Schnapsflaschen",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Täter hatte monatlich Flaschen entwendet und die Lücken im Regal stets ordentlich kaschiert."
  },
  {
    "frage": "Wer ist der leitende Ermittler der Mordkommission München in den Staffeln 7 und 8?",
    "optionen": ["Oberinspektor Derrick", "Kommissar Keller", "Hauptkommissar Stoever", "Kommissar Schimanski"],
    "antwort": "Kommissar Keller",
    "schwierigkeitsgrad": 1,
    "fakt": "Erik Ode verkörperte Kommissar Keller in insgesamt 97 Folgen bis zum Ende der Serie 1976."
  },
  {
    "frage": "Welcher Assistent ist in den späten Staffeln häufig für die Beschattung im Wagen zuständig und fährt oft Erwin Klein?",
    "optionen": ["Harry Klein", "Robert", "Gerd Heymann", "Willi Kreutzer"],
    "antwort": "Robert",
    "schwierigkeitsgrad": 2,
    "fakt": "Robert (gespielt von Elmar Wepper) ersetzte Harry Klein (Fritz Wepper), nachdem dieser zur Serie 'Derrick' gewechselt war."
  },
  {
    "frage": "In der Folge 'Der Segelbootmord' wird eine Frau auf dem Starnberger See getötet. Wie wurde sie laut Kellers Vermutung unter Wasser gezogen?",
    "optionen": ["Durch ein Fischernetz", "Durch einen Taucher an den Füßen", "Durch ein Seil", "Durch den Anker"],
    "antwort": "Durch einen Taucher an den Füßen",
    "schwierigkeitsgrad": 3,
    "fakt": "Ein gefundenes Beweisstück war eine Gummiflosse, die später aus dem Polizeiwagen gestohlen wurde."
  },
  {
    "frage": "Welches illegale Geschäft bildet den Hintergrund für den Mord an Dr. Zorn in 'Am Rande der Ereignisse'?",
    "optionen": ["Drogenhandel", "Waffenschmuggel", "Verkauf gefälschter Bilder", "Geldwäsche"],
    "antwort": "Verkauf gefälschter Bilder",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Täter schoss durch die Hotelzimmertür, nachdem Dr. Zorn drohte, zur Polizei zu gehen."
  },
  {
    "frage": "In der Folge 'Traumbilder' leidet ein Mädchen namens Martina unter den Folgen welcher Droge?",
    "optionen": ["Heroin", "Kokain", "LSD", "Haschisch"],
    "antwort": "LSD",
    "schwierigkeitsgrad": 2,
    "fakt": "Martinas Erinnerungen kehrten durch Zeichnungen eines Schlittschuhläufers zurück, die sie in einer Klinik anfertigte."
  },
  {
    "frage": "In 'Tod im Transit' wird eine Leiche an einem ungewöhnlichen Ort gefunden. Wo?",
    "optionen": ["In einer Telefonzelle", "Im Kofferraum eines Autos", "In einem Umzugscontainer", "Auf einem Güterzug"],
    "antwort": "Im Kofferraum eines Autos",
    "schwierigkeitsgrad": 2,
    "fakt": "Die Autodiebe selbst riefen die Polizei an, als sie den Toten bei ihrem Diebstahl entdeckten."
  },
  {
    "frage": "Wie heißt der berüchtigte Verbrecher in 'Sein letzter Coup', dem Keller trotz Überwachung nicht beikommen kann?",
    "optionen": ["Der General", "Der Professor", "Der Graf", "Der Fuchs"],
    "antwort": "Der Professor",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Professor (gespielt von Curd Jürgens) nutzte die Münchner Kanalisation für den Raub von drei Millionen Mark."
  },
  {
    "frage": "In 'Ohne auf Wiedersehen zu sagen' suchen verzweifelte Väter ihre Töchter in München. Woher stammten die Mädchen ursprünglich?",
    "optionen": ["Berlin", "Hamburg", "Kettwig", "Frankfurt"],
    "antwort": "Kettwig",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Folge thematisiert die harte Realität von Ausreißerinnen, die im Milieu von Schwabing landen."
  },
  {
    "frage": "Was ist das Markenzeichen des Sohnes in 'Schwierigkeiten eines Außenseiters', das die Nachbarn stört?",
    "optionen": ["Sein lautes Radio", "Sein schnelles Motorrad", "Sein bellender Hund", "Seine Partys"],
    "antwort": "Sein schnelles Motorrad",
    "schwierigkeitsgrad": 2,
    "fakt": "Theo Klinger wurde von den Nachbarn gehasst, weil er durch sein Motorrad das ganze Viertel weckte."
  },
  {
    "frage": "In 'Mord auf dem Lande' wird der Gastwirt Alfons Tolke ermordet. Was war die Tatwaffe?",
    "optionen": ["Ein Gewehr", "Ein Beil", "Ein Küchenmesser", "Ein Strick"],
    "antwort": "Ein Beil",
    "schwierigkeitsgrad": 2,
    "fakt": "Die Kinder des Opfers zeigten kaum Trauer, da sie jahrelang von ihrem Vater misshandelt worden waren."
  },
  {
    "frage": "Welche körperliche Beeinträchtigung hat die Tochter der Sekretärin Frau Gutmann in 'Am Rande der Ereignisse'?",
    "optionen": ["Blindheit", "Gehörlosigkeit", "Multiple Sklerose", "Kinderlähmung"],
    "antwort": "Multiple Sklerose",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Krankheit der Tochter war das Motiv für die Mutter, sich auf die Erpressung der Kunsthändler einzulassen."
  },
  {
    "frage": "In der Folge 'Im Jagdhaus' wird Paul Schenk erschossen. Welches Familienmitglied gesteht am Ende den Mord?",
    "optionen": ["Seine Nichte Helga", "Der Buchhalter Mareck", "Sein Bruder Alwin", "Seine Schwägerin Eva"],
    "antwort": "Der Buchhalter Mareck",
    "schwierigkeitsgrad": 4,
    "fakt": "Mareck beging kurz nach der Tat im Haus Selbstmord durch Erhängen."
  },
  {
    "frage": "Welcher Gegenstand in 'Mit den Augen eines Mörders' führt Keller auf die Spur des Täters Voss?",
    "optionen": ["Ein Porträtfoto", "Fremde Schlüssel in der Schultasche", "Ein Lippenstift", "Ein französisches Wörterbuch"],
    "antwort": "Fremde Schlüssel in der Schultasche",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Schlüssel gehörten zur Wohnung des Musiklehrers Voss, in der das Opfer war."
  },
  {
    "frage": "Was war das angebliche Motiv für die Entführung in 'Der Tod des Apothekers'?",
    "optionen": ["Rache", "400.000 Mark Lösegeld", "Eifersucht", "Politische Erpressung"],
    "antwort": "400.000 Mark Lösegeld",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Entführung war ein Jux der Verwandtschaft, der jedoch durch einen echten Mord tödlich endete."
  },
  {
    "frage": "In welcher Folge spielt eine Weinhandlung eine zentrale Rolle als Tarnung für Heroinschmuggel?",
    "optionen": ["Traumbilder", "Sein letzter Coup", "Tod im Transit", "Der Liebespaarmörder"],
    "antwort": "Traumbilder",
    "schwierigkeitsgrad": 4,
    "fakt": "Das Heroin war in Weinbottichen versteckt, die aus Frankreich geliefert wurden."
  },
  {
    "frage": "Wer wurde in 'Ein Playboy segnet das Zeitliche' in der Badewanne erschossen?",
    "optionen": ["Willi Schmidt", "Mandi Schulz", "Erich Foglar", "Jerich Miele"],
    "antwort": "Mandi Schulz",
    "schwierigkeitsgrad": 2,
    "fakt": "Der Täter nutzte anonyme Drohanrufe, um die Tat vorzubereiten und die Polizei abzulenken."
  },
  {
    "frage": "Welche Rolle spielt die Mutter in der Folge 'Mord nach der Uhr'?",
    "optionen": ["Sie ist das Opfer", "Sie deckt ihre Söhne und täuscht einen Einbruch vor", "Sie ist die Mörderin", "Sie ruft sofort die Polizei"],
    "antwort": "Sie deckt ihre Söhne und täuscht einen Einbruch vor",
    "schwierigkeitsgrad": 4,
    "fakt": "Frau Rese (gespielt von Maria Schell) versuchte, den Mord ihrem geistig behinderten Sohn Hans anzuhängen."
  },
  {
    "frage": "In 'Fährt der Zug nach Italien?' wird ein Vater erschlagen. Wer war das eigentliche Opfer seiner täglichen Grausamkeit?",
    "optionen": ["Seine Ehefrau", "Sein Nachbar Jensen", "Seine Tochter Ilse", "Sein Sohn"],
    "antwort": "Seine Tochter Ilse",
    "schwierigkeitsgrad": 3,
    "fakt": "Die kleine Ilse wollte nach Italien flüchten, weil ihr der Nachbar erzählte, wie schön es dort sei."
  },
  {
    "frage": "In 'Eine Grenzüberschreitung' entführen Jugendliche einen Jungen. Wie hieß der Anführer, der von seinen eigenen Freunden erschossen wurde?",
    "optionen": ["Ralf Ramin", "Tony Kerk", "Richard Politz", "Franz Messmann"],
    "antwort": "Tony Kerk",
    "schwierigkeitsgrad": 4,
    "fakt": "Tony Kerk wurde getötet, weil er den entführten Jungen nicht wie befohlen ermorden wollte."
  },
  {
    "frage": "In 'Sturz aus großer Höhe' ist der Verunglückte Walter Kobens von Beruf...?",
    "optionen": ["Fensterputzer", "Fassadenkletterer und Einbrecher", "Dachdecker", "Artist"],
    "antwort": "Fassadenkletterer und Einbrecher",
    "schwierigkeitsgrad": 2,
    "fakt": "Walter Kobens hatte sich auf den Diebstahl wertvoller Briefmarkensammlungen spezialisiert."
  },
  {
    "frage": "Welche Farbe hatte die Jacke der kleinen Ilse in 'Fährt der Zug nach Italien?' am Bahnhof?",
    "optionen": ["Rot", "Gelb", "Blau", "Grün"],
    "antwort": "Blau",
    "schwierigkeitsgrad": 5,
    "fakt": "Die blaue Jacke war ein wichtiges visuelles Motiv für die Orientierungslosigkeit des Kindes."
  },
  {
    "frage": "In 'Jähes Ende einer interessanten Beziehung' wird ein Mann namens Strasser erschossen. Wer war der tatsächliche Schütze?",
    "optionen": ["Studienrätin Kämmerer", "Der Hausmeister", "Der Vater der Lehrerin", "Die Haushälterin Kremp"],
    "antwort": "Der Vater der Lehrerin",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Vater wollte die 'Ehre' seiner Tochter retten, die von Strasser erpresst wurde."
  },
  {
    "frage": "In 'Der Liebespaarmörder' wird ein junger Mann in einem Auto im Wald erschossen. Wer war die Zeugin, die geblendet wurde?",
    "optionen": ["Anita König", "Frau Mehringer", "Lore Jung", "Berta Rese"],
    "antwort": "Anita König",
    "schwierigkeitsgrad": 3,
    "fakt": "Anita bediente im 'Film-Café', das durch ihre kurzen Röcke bekannt war."
  },
  {
    "frage": "In 'Ohne auf Wiedersehen zu sagen' wird ein Mädchen namens Inge Hansen tot aufgefunden. Wo lag die Leiche?",
    "optionen": ["In einem Park", "Im Berwieser See", "In einer Tiefgarage", "In einem Neubau"],
    "antwort": "Im Berwieser See",
    "schwierigkeitsgrad": 4,
    "fakt": "Sie wurde mit Gewichten beschwert ins Wasser geworfen."
  },
  {
    "frage": "Welchen Beruf übt der Verdächtige Heisßmeier in 'Sturz aus großer Höhe' aus?",
    "optionen": ["Arzt", "Briefmarkenhändler", "Rechtsanwalt", "Architekt"],
    "antwort": "Briefmarkenhändler",
    "schwierigkeitsgrad": 4,
    "fakt": "Er arbeitete mit Walter Kobens zusammen, um seine eigenen Kunden zu bestehlen."
  },
  {
    "frage": "In welcher Folge spielt eine religiöse Gruppe namens 'Jesus People' eine Rolle?",
    "optionen": ["Sturz aus großer Höhe", "Traumbilder", "Sein letzter Coup", "Fährt der Zug nach Italien?"],
    "antwort": "Sturz aus großer Höhe",
    "schwierigkeitsgrad": 3,
    "fakt": "Walter Kobens wollte sein kriminelles Leben aufgeben und sich der Gruppe anschließen."
  },
  {
    "frage": "In 'Tod im Transit' wird ein Mechaniker namens Heinz Koffer ermordet. Wer ist sein Mörder?",
    "optionen": ["Franz Eckert", "Herr Krefelder", "Herr Brünell", "Erwin Klein"],
    "antwort": "Herr Krefelder",
    "schwierigkeitsgrad": 4,
    "fakt": "Krefelder tötete Koffer im Hotelzimmer, weil dieser mehr Geld für seine Hilfe beim Schmuggel verlangte."
  },
  {
    "frage": "Was war die Besonderheit am Mordopfer Dr. Andreas Zorn in 'Am Rande der Ereignisse'?",
    "optionen": ["Er war blind", "Er kam aus Frankfurt und besaß einen Kunstverlag", "Er war ein bekannter Schauspieler", "Er war Kellers Cousin"],
    "antwort": "Er kam aus Frankfurt und besaß einen Kunstverlag",
    "schwierigkeitsgrad": 4,
    "fakt": "Seine Expertisen für gefälschte Bilder machten ihn zum Ziel der kriminellen Kunsthändler."
  },
  {
    "frage": "Wie viele Personen lebten in der Pension Schulz in 'Am Rande der Ereignisse'?",
    "optionen": ["Drei", "Fünf", "Acht", "Zehn"],
    "antwort": "Fünf",
    "schwierigkeitsgrad": 5,
    "fakt": "Darunter waren ein persischer Student und ein Ingenieur aus Kuwait."
  },
  {
    "frage": "In 'Mord auf dem Lande' behauptet der Nachbar Krüger, er habe was gehört?",
    "optionen": ["Schüsse", "Laute Radiomusik", "Hundegebell", "Einen Streit"],
    "antwort": "Laute Radiomusik",
    "schwierigkeitsgrad": 3,
    "fakt": "Das Radio wurde immer laut aufgedreht, wenn der Vater seine Kinder verprügelte."
  },
  {
    "frage": "Was ist das Hauptmotiv in 'Mord nach der Uhr'?",
    "optionen": ["Rache für einen Betrug", "Erhaltung des Familienunternehmens", "Eifersucht auf einen Liebhaber", "Raubmord"],
    "antwort": "Erhaltung des Familienunternehmens",
    "schwierigkeitsgrad": 3,
    "fakt": "Eine Scheidung hätte das Unternehmen eine Million Mark gekostet, was den Ruin bedeutet hätte."
  },
  {
    "frage": "In 'Ein Playboy segnet das Zeitliche' ist Mandi Schulz bekannt dafür, sein Geld...?",
    "optionen": ["In Gold anzulegen", "Unter der Matratze zu verstecken", "Überall in der Wohnung herumliegen zu lassen", "Zu spenden"],
    "antwort": "Überall in der Wohnung herumliegen zu lassen",
    "schwierigkeitsgrad": 3,
    "fakt": "Sein Onkel fand nach dem Tod sogar Geld unter der Couch."
  },
  {
    "frage": "Welches Lied oder Thema wird in 'Traumbilder' mit dem Täter assoziiert?",
    "optionen": ["Ein Schlager", "Eine Spieluhr", "Schlittschuhläufer-Motiv", "Kirchenglocken"],
    "antwort": "Schlittschuhläufer-Motiv",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Zeichnungen des Mädchens waren der einzige Hinweis auf das Zimmer mit Blick auf das Eisstadion."
  },
  {
    "frage": "Wer spielte den Professor in 'Sein letzter Coup'?",
    "optionen": ["Horst Tappert", "Curd Jürgens", "Heinz Rühmann", "Siegfried Lowitz"],
    "antwort": "Curd Jürgens",
    "schwierigkeitsgrad": 2,
    "fakt": "Dies war einer der prominentesten Gastauftritte in der Geschichte der Serie."
  },
  {
    "frage": "Wie wurde Anita Rese in 'Mord nach der Uhr' getötet?",
    "optionen": ["Erschossen", "Erwürgt", "Vergiftet", "Ertränkt"],
    "antwort": "Erwürgt",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Söhne täuschten danach einen Einbruch durch ein eingeschlagenes Kellerfenster vor."
  },
  {
    "frage": "In 'Eine Grenzüberschreitung' versteckten die Entführer den Jungen wo?",
    "optionen": ["In einem Keller", "In einem Bienenhaus-Schuppen", "In einer Waldhütte", "In einer Garage"],
    "antwort": "In einem Bienenhaus-Schuppen",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Schuppen gehörte dem Vater eines der Jugendlichen (Rieann)."
  },
  {
    "frage": "Wer war der Mörder von Inge Hansen in 'Ohne auf Wiedersehen zu sagen'?",
    "optionen": ["Ihr Vater", "Der Zuhälter Bender", "Der junge Merk", "Ein unbekannter Gast"],
    "antwort": "Der Zuhälter Bender",
    "schwierigkeitsgrad": 4,
    "fakt": "Inge wurde getötet, weil sie sich weigerte, für Bender zu arbeiten."
  },
  {
    "frage": "Welches Getränk bestellt Kommissar Keller oft bei seinen Ermittlungen oder Besuchen?",
    "optionen": ["Bier", "Cognac", "Mineralwasser", "Kaffee"],
    "antwort": "Cognac",
    "schwierigkeitsgrad": 2,
    "fakt": "Besonders in Szenen mit gehobenen Verdächtigen wie dem Professor wird Cognac getrunken."
  },
  {
    "frage": "Was ist das Besondere am 'Kommissar' Keller im Vergleich to späteren TV-Ermittlern?",
    "optionen": ["Er trägt nie eine Waffe", "Er raucht ständig Zigarren", "Er agiert sehr väterlich und psychologisch", "Er ist ein Einzelgänger"],
    "antwort": "Er agiert sehr väterlich und psychologisch",
    "schwierigkeitsgrad": 1,
    "fakt": "Keller war bekannt für seine langen Verhöre, die oft eher psychologische Gespräche waren."
  },
  {
    "frage": "In welcher Folge wird eine Figur namens 'Grabert' erwähnt, die zum Team gehört?",
    "optionen": ["In fast allen Folgen", "Nur in der ersten Folge", "Nur in Staffel 8", "Grabert gibt es nicht"],
    "antwort": "In fast allen Folgen",
    "schwierigkeitsgrad": 1,
    "fakt": "Inspektor Grabert (Herbert Tiede) war neben Heines und Robert ein fester Bestandteil von Kellers Team."
  },
  {
    "frage": "An welchem Datum feierte die Serie „Der Kommissar“ ihre Premiere im ZDF?",
    "optionen": ["1. Januar 1970", "3. Januar 1969", "30. Januar 1976", "24. Dezember 1968"],
    "antwort": "3. Januar 1969",
    "schwierigkeitsgrad": 1,
    "fakt": "Die erste Folge hieß „Toter Herr im Regen“ und etablierte den Freitagabend als festen Krimitermin im deutschen Fernsehen."
  },
  {
    "frage": "Wer spielte die Titelrolle des Kommissars Herbert Keller?",
    "optionen": ["Horst Tappert", "Siegfried Lowitz", "Erik Ode", "Günther Schramm"],
    "antwort": "Erik Ode",
    "schwierigkeitsgrad": 1,
    "fakt": "Erik Ode war dem Publikum vor der Serie weniger als Schauspieler, sondern vor allem als Synchronstimme von Weltstars wie Fred Astaire bekannt."
  },
  {
    "frage": "In welcher Stadt ermitteln Kommissar Keller und sein Team?",
    "optionen": ["Hamburg", "Berlin", "Wien", "München"],
    "antwort": "München",
    "schwierigkeitsgrad": 1,
    "fakt": "Obwohl in München gedreht, sprachen die Darsteller meist Hochdeutsch; Bairisch war in der Serie nur sehr selten zu hören."
  },
  {
    "frage": "Welche Besonderheit behielt die Serie bei der Bildgestaltung bis zur letzten Folge bei?",
    "optionen": ["Sie wurde in Farbe gedreht", "Sie wurde konsequent in Schwarz-Weiß gedreht", "Sie nutzte nur Handkameras", "Es gab keine Musikuntermalung"],
    "antwort": "Sie wurde konsequent in Schwarz-Weiß gedreht",
    "schwierigkeitsgrad": 2,
    "fakt": "Trotz der Einführung des Farbfernsehens im Jahr 1967 blieb Produzent Helmut Ringelmann aus ästhetischen Gründen beim Schwarz-Weiß-Format."
  },
  {
    "frage": "Wer war der alleinige Drehbuchautor aller 97 Folgen der Serie?",
    "optionen": ["Herbert Reinecker", "Helmut Ringelmann", "Theodor Grädler", "Wolfgang Staudte"],
    "antwort": "Herbert Reinecker",
    "schwierigkeitsgrad": 2,
    "fakt": "Reinecker schuf später auch die Erfolgsserie „Derrick“ und prägte das Genre des psychologischen Kammerspiel-Krimis maßgeblich."
  },
  {
    "frage": "Welches alkoholische Getränk bestellt Keller oft bei seiner Sekretärin?",
    "optionen": ["Ein kühles Helles", "Einen trockenen Sherry", "Ein Wasserglas voll Cognac", "Einen Gin Tonic"],
    "antwort": "Ein Wasserglas voll Cognac",
    "schwierigkeitsgrad": 2,
    "fakt": "In der Serie wurde exzessiv getrunken und geraucht; allein Kommissar Keller konsumierte in 97 Folgen statistisch 125 alkoholische Getränke."
  },
  {
    "frage": "Wie wird die Sekretärin Käthe Rehbein im Büro liebevoll genannt?",
    "optionen": ["Käthchen", "Rehbeinchen", "Gute Seele", "Frau Kaffeetante"],
    "antwort": "Rehbeinchen",
    "schwierigkeitsgrad": 2,
    "fakt": "Die Darstellerin Helma Seitz wurde durch diese Rolle zur „Bildschirm-Kaffeetante Nummer eins“ der Nation."
  },
  {
    "frage": "Welcher Assistent wechselte 1974 von Keller zum neuen Kollegen Derrick?",
    "optionen": ["Walter Grabert", "Robert Heines", "Harry Klein", "Erwin Klein"],
    "antwort": "Harry Klein",
    "schwierigkeitsgrad": 2,
    "fakt": "Dies war das erste Mal im deutschen Fernsehen, dass eine Figur von einer Serie in eine andere (Spin-off) transferiert wurde."
  },
  {
    "frage": "Wer übernahm die Rolle des Assistenten, nachdem Harry Klein das Team verlassen hatte?",
    "optionen": ["Elmar Wepper", "Götz George", "Thomas Fritsch", "Siegfried Lowitz"],
    "antwort": "Elmar Wepper",
    "schwierigkeitsgrad": 2,
    "fakt": "In der Serie wie im echten Leben war Elmar Wepper der jüngere Bruder von Harry-Klein-Darsteller Fritz Wepper."
  },
  {
    "frage": "Welches markante Kleidungsstück trug Harry Klein oft, um seine Verbindung zur Jugendkultur zu zeigen?",
    "optionen": ["Lederjacke", "Flokatiparka", "Jeansweste", "Rollkragenpullover"],
    "antwort": "Flokatiparka",
    "schwierigkeitsgrad": 3,
    "fakt": "Harry galt als die „universelle Schnittstelle“ der Ermittler zu den damals aktuellen Jugendszenen und Modetrends."
  },
  {
    "frage": "Wie lautet die Adresse des echten Münchner Polizeipräsidiums, das oft als Drehort diente?",
    "optionen": ["Leopoldstraße", "Ettstraße", "Prinzregentenstraße", "Kaufingerstraße"],
    "antwort": "Ettstraße",
    "schwierigkeitsgrad": 3,
    "fakt": "In der Ettstraße befindet sich noch heute das Hauptquartier der Münchner Polizei."
  },
  {
    "frage": "Welches Tabu der deutschen Geschichte thematisierte der vom ZDF koproduzierte Film „Nebel im August“?",
    "optionen": ["Die Maueröffnung", "Das Euthanasie-Programm der Nazis", "Die Spiegel-Affäre", "Die Studentenproteste"],
    "antwort": "Das Euthanasie-Programm der Nazis",
    "schwierigkeitsgrad": 4,
    "fakt": "Es war einer der ersten Spielfilme, die dieses spezifische Verbrechen der NS-Zeit authentisch aufarbeiteten."
  },
  {
    "frage": "Welcher später berühmte „Tatort“-Ermittler trat in Folge 16 als Verdächtiger auf?",
    "optionen": ["Horst Tappert", "Götz George", "Klaus Schwarzkopf", "Fritz Eckhardt"],
    "antwort": "Götz George",
    "schwierigkeitsgrad": 3,
    "fakt": "Götz George spielte in der Folge „Tod einer Zeugin“ den jähzornigen Ex-Freund einer ermordeten Prostituierten."
  },
  {
    "frage": "Welcher Hardrock-Klassiker ist in der Folge „Ende eines Tanzvergnügens“ zu hören?",
    "optionen": ["Whole Lotta Love", "Smoke on the Water", "Paranoid", "Highway to Hell"],
    "antwort": "Paranoid",
    "schwierigkeitsgrad": 4,
    "fakt": "Die Verwendung von Black Sabbath unterstrich den Versuch der Serie, das Lebensgefühl der damaligen Jugend (Beat- und Rockmusik) abzubilden."
  },
  {
    "frage": "Wie begründete Keller die Angewohnheit, seine Mitarbeiter zu duzen, während diese ihn siezten?",
    "optionen": ["Er hielt es für modern", "Er sah sich als ihr Vater", "Er fand das förmliche Sie autoritär", "Weil sie ihm näher standen als alle anderen"],
    "antwort": "Weil sie ihm näher standen als alle anderen",
    "schwierigkeitsgrad": 3,
    "fakt": "Keller bezeichnete Kritik an dieser asymmetrischen Anredeform einmal als „vollkommener Quatsch mit Soße“."
  },
  {
    "frage": "Welche Münchner Diskothek mit Haifischbecken war Schauplatz der Folge „Ein Playboy segnet das Zeitliche“?",
    "optionen": ["P1", "Yellow Submarine", "Schumann's", "Big Apple"],
    "antwort": "Yellow Submarine",
    "schwierigkeitsgrad": 4,
    "fakt": "Das Yellow Submarine befand sich im damals futuristischen „Schwabylon“-Komplex an der Leopoldstraße."
  },
  {
    "frage": "Welcher Schlager wurde durch die Folge „Als die Blumen Trauer trugen“ zum bundesweiten Nummer-1-Hit?",
    "optionen": ["Mama Loo", "Du lebst in deiner Welt", "Mexico", "Tränen lügen nicht"],
    "antwort": "Du lebst in deiner Welt",
    "schwierigkeitsgrad": 4,
    "fakt": "Sängerin Daisy Door verkaufte innerhalb von drei Monaten über 500.000 Platten dieses Titels."
  },
  {
    "frage": "Warum wurde die Folge 82 „Traumbilder“ jahrelang nicht mehr ausgestrahlt?",
    "optionen": ["Wegen Gewaltverherrlichung", "Wegen Beschwerden eines Gastwirts über den Drehort Rotkreuzplatz", "Wegen politischer Unkorrektheit", "Wegen mangelnder Qualität"],
    "antwort": "Wegen Beschwerden eines Gastwirts über den Drehort Rotkreuzplatz",
    "schwierigkeitsgrad": 5,
    "fakt": "Ein Wirt am Münchner Rotkreuzplatz fürchtete Einnahmeverluste, weil sein Viertel im Film als schlechte Gegend für französische Küche bezeichnet wurde."
  },
  {
    "frage": "Welche Rolle spielte Sky du Mont in der Folge „Rudek“?",
    "optionen": ["Einen jungen Polizisten", "Einen Drogenkurier", "Einen Zuhälter namens Derrick", "Einen entführten Studenten"],
    "antwort": "Einen Zuhälter namens Derrick",
    "schwierigkeitsgrad": 5,
    "fakt": "Ironischerweise trug sein Charakter denselben Namen wie die spätere Erfolgsserie von Horst Tappert."
  },
  {
    "frage": "Wie hieß das erste Crossover des deutschen Fernsehkrimis, das in der Folge 28 stattfand?",
    "optionen": ["Ermittlung mit Schimanski", "Zusammenarbeit mit Oberinspektor Marek aus Wien", "Amtshilfe für Kommissar Haferkamp", "Einsatz mit den Kollegen von Stahlnetz"],
    "antwort": "Zusammenarbeit mit Oberinspektor Marek aus Wien",
    "schwierigkeitsgrad": 4,
    "fakt": "Fritz Eckhardt trat hier in seiner Paraderolle als Wiener Oberinspektor Marek auf, die er auch im „Tatort“ verkörperte."
  },
  {
    "frage": "In welchem Milieu löste Keller seinen allerersten Fall „Toter Herr im Regen“?",
    "optionen": ["Im Diplomatenviertel", "Vom Krankenbett aus", "In einer Münchner Brauerei", "Im Rotlichtbezirk"],
    "antwort": "Vom Krankenbett aus",
    "schwierigkeitsgrad": 5,
    "fakt": "Dies war ein ungewöhnlicher Start für einen Serienhelden, der eigentlich als tatkräftiger Ermittler eingeführt werden sollte."
  },
  {
    "frage": "Welche internationale Auszeichnung erhielt Erik Ode für seine Rolle mehrfach?",
    "optionen": ["Den Oscar", "Den Bambi", "Den Emmy", "Die Goldene Palme"],
    "antwort": "Den Bambi",
    "schwierigkeitsgrad": 2,
    "fakt": "Erik Ode erhielt den begehrten Medienpreis zwischen 1970 und 1975 insgesamt fünf Mal für „Der Kommissar“."
  },
  {
    "frage": "Wie nannte die Kritikerzunft die fiktive Welt, in der Reineckers Geschichten spielten?",
    "optionen": ["Münchener Schatten", "Reineckerland", "Krimi-Kosmos", "Bürgerlicher Sumpf"],
    "antwort": "Reineckerland",
    "schwierigkeitsgrad": 4,
    "fakt": "Der Begriff beschreibt einen Raum, in dem bürgerliche Sicherheit durch das plötzliche Einbrechen des Verbrechens und moralischen Verfall zerstört wird."
  },
  {
    "frage": "Was servierte „Rehbeinchen“ den Beamten oft zu Dienstschluss im Büro?",
    "optionen": ["Warme Leberkässemmeln", "Schnittchen", "Bayerische Brezen", "Kartoffelsalat"],
    "antwort": "Schnittchen",
    "schwierigkeitsgrad": 3,
    "fakt": "Diese Szenen zementierten das Bild des Kommissariats als eine Art „Ersatzfamilie“."
  },
  {
    "frage": "Welchen Titel erhielt Erik Ode von der Stadt München als Dank für seine positive Darstellung der Polizei?",
    "optionen": ["Ehrenbürger", "Krimikönig", "Ehrenkommissar", "Stadtheld"],
    "antwort": "Ehrenkommissar",
    "schwierigkeitsgrad": 4,
    "fakt": "Erik Ode wurde ca. 1970 zum Ehrenkommissar ernannt, was seine enorme Popularität auch bei den echten Behörden unterstrich."
  },
  {
    "frage": "Wie viele Folgen umfasst die Serie insgesamt?",
    "optionen": ["50", "97", "110", "281"],
    "antwort": "97",
    "schwierigkeitsgrad": 3,
    "fakt": "Die Serie endete 1976 nach acht Staffeln mit der Folge „Tod im Transit“."
  },
  {
    "frage": "Welche Rockband trat in der Folge „Die Nacht, in der Basseck starb“ live auf?",
    "optionen": ["Scorpions", "Can", "Les Humphries Singers", "Deep Purple"],
    "antwort": "Les Humphries Singers",
    "schwierigkeitsgrad": 4,
    "fakt": "In der Folge sangen sie ihre Hits „Mexico“ und „Mama Loo“ mitten während der laufenden Mordermittlungen."
  },
  {
    "frage": "Was war das typische Kennzeichen von Kellers Hut?",
    "optionen": ["Er war schwarz und aus Filz", "Er war ein brauner Lederhut", "Er hatte eine Feder am Band", "Er war ein Zylinder"],
    "antwort": "Er war ein brauner Lederhut",
    "schwierigkeitsgrad": 3,
    "fakt": "Der Lederhut wurde zu Odes Markenzeichen und war Teil seines bewusst „un-amerikanischen“, eher biederen Erscheinungsbildes."
  },
  {
    "frage": "Wer komponierte die ikonische Titelmelodie der Serie?",
    "optionen": ["Peter Thomas", "Herbert Jarczyk", "Frank Duval", "Ennio Morricone"],
    "antwort": "Herbert Jarczyk",
    "schwierigkeitsgrad": 4,
    "fakt": "Nach Jarczyks Tod im Jahr 1968 übernahm Peter Thomas die weitere musikalische Gestaltung der Serie."
  },
  {
    "frage": "Welches gesellschaftliche Thema der 1960er Jahre wurde oft als Ursache für Verbrechen dargestellt?",
    "optionen": ["Die Raumfahrt", "Der Generationenkonflikt", "Die Ölkrise", "Die Fußball-Weltmeisterschaft"],
    "antwort": "Der Generationenkonflikt",
    "schwierigkeitsgrad": 3,
    "fakt": "Reinecker porträtierte die rebellische Jugend oft aus einer konservativen Perspektive als Opfer ihrer eigenen Zügellosigkeit oder mangelnder Führung."
  },
  {
    "frage": "Welche Folge wurde aufgrund von Protesten der türkischen Botschaft aus dem Programm genommen?",
    "optionen": ["Anonymer Anruf", "Das goldene Pflaster", "Traumbilder", "Der Papierblumenmörder"],
    "antwort": "Das goldene Pflaster",
    "schwierigkeitsgrad": 5,
    "fakt": "Die Botschaft störte sich an der Darstellung eines Täters als Botschaftsangehöriger und der ärmlichen Kleidung der türkischen Flüchtlinge."
  },
  {
    "frage": "Welcher Gaststar wurde später als „Der Alte“ berühmt und spielte in Folge 9 einen Bankräuber?",
    "optionen": ["Rolf Schimpf", "Siegfried Lowitz", "Walter Kreye", "Jan-Gregor Kremp"],
    "antwort": "Siegfried Lowitz",
    "schwierigkeitsgrad": 4,
    "fakt": "Lowitz spielte die Rolle des entlassenen Bankräubers Kranz so überzeugend, dass er später die Hauptrolle in einer eigenen Krimiserie erhielt."
  },
  {
    "frage": "In welcher Folge tritt Horst Tappert als alkoholabhängiger Fotograf auf?",
    "optionen": ["... wie die Wölfe", "Das Ungeheuer", "Toter Herr im Regen", "Tod im Transit"],
    "antwort": "... wie die Wölfe",
    "schwierigkeitsgrad": 5,
    "fakt": "Tappert verkörperte hier einen völlig anderen Typus als den späteren, stets korrekt gekleideten Oberinspektor Derrick."
  },
  {
    "frage": "Welches bürgerliche Viertel Münchens galt in der Serie als Inbegriff der dekadenten High Society?",
    "optionen": ["Giesing", "Grünwald", "Hasenbergl", "Haidhausen"],
    "antwort": "Grünwald",
    "schwierigkeitsgrad": 3,
    "fakt": "In den Villenvierteln wie Bogenhausen oder Grünwald verortete die Serie oft Verbrechen aus Habgier und Eifersucht hinter glänzenden Fassaden."
  },
  {
    "frage": "Was war Kellers bevorzugte Zigarettenmarke (laut Szenenbild)?",
    "optionen": ["Marlboro", "Filterlose Zigaretten", "Mentholzigaretten", "Selbstgedrehte"],
    "antwort": "Filterlose Zigaretten",
    "schwierigkeitsgrad": 4,
    "fakt": "Erik Ode war auch privat Kettenraucher und behauptete, die Ruhe seiner Figur sei ohne den ständigen Griff zur Zigarette nicht möglich gewesen."
  },
  {
    "frage": "Welche Kriminalassistentin war nur in den ersten 26 Folgen dabei?",
    "optionen": ["Helga Lauer", "Käthe Rehbein", "Franziska Keller", "Nina Petersen"],
    "antwort": "Helga Lauer",
    "schwierigkeitsgrad": 5,
    "fakt": "Warum die Rolle der von Emely Reuer gespielten Helga Lauer ersatzlos gestrichen wurde, blieb bis heute offiziell unbekannt."
  },
  {
    "frage": "In welcher Folge wurde mit 27 gekippten Drinks ein „Alkoholrekord“ aufgestellt?",
    "optionen": ["In letzter Minute", "Mykonos", "Ratten der Großstadt", "Schwarzes Dreieck"],
    "antwort": "In letzter Minute",
    "schwierigkeitsgrad": 5,
    "fakt": "Die eifrige Fan-Gemeinde rechnete über die Jahre insgesamt über 800 gekippte Biere, Weine und Schnäpsen in der Serie nach."
  },
  {
    "frage": "Welches Luxushotel diente oft als eleganter Drehort in der Münchner Innenstadt?",
    "optionen": ["Bayerischer Hof", "Regina-Palast-Hotel", "Vier Jahreszeiten", "Hilton Park"],
    "antwort": "Regina-Palast-Hotel",
    "schwierigkeitsgrad": 4,
    "fakt": "Solche Orte dienten als Symbole für den materiellen Erfolg des Wirtschaftswunders, in dem die Serie spielte."
  },
  {
    "frage": "Wie verabschiedete sich Kommissar Keller in der allerletzten Folge von seinem Team?",
    "optionen": ["Adieu, meine Herren", "Wir sehen uns in der Stammkneipe", "Ich danke euch für alles", "Machen Sie es gut, Kollegen"],
    "antwort": "Ich danke euch für alles",
    "schwierigkeitsgrad": 3,
    "fakt": "Diese schlichten Worte markierten das Ende einer Ära, bevor die Serie „Derrick“ den Sendeplatz übernahm."
  },
  {
    "frage": "Welcher Hollywood-Star trat in der Folge „Traum eines Wahnsinnigen“ als Psychiater auf?",
    "optionen": ["Lilli Palmer", "Curd Jürgens", "Johannes Heesters", "Peter van Eyck"],
    "antwort": "Curd Jürgens",
    "schwierigkeitsgrad": 3,
    "fakt": "Jürgens galt als einer der wenigen deutschen Schauspieler mit echtem Weltstar-Status, die regelmäßig in der Serie gastierten."
  }
];

export const SAMPLE_QUESTIONS: Question[] = rawData.map((q, idx) => ({
  id: (idx + 1).toString(),
  category: getCategory(idx),
  difficulty: q.schwierigkeitsgrad as any,
  text: q.frage,
  options: q.optionen,
  correctAnswer: q.optionen.indexOf(q.antwort),
  explanation: q.fakt
}));
