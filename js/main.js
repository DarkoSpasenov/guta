(function () {
  "use strict";

  var TRANSLATIONS = {"fr":{"languageName":"Français","languageChooser":"Choisir la langue","skipContent":"Aller au contenu","logoHome":"GUTA Chapes SA — Accueil","mainNav":"Navigation principale","mobileNav":"Navigation mobile","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","navHome":"Accueil","navAbout":"À propos","navServices":"Services","navProjects":"Réalisations","navContact":"Contact","quoteRequest":"Demander un devis","ourProjects":"Nos réalisations","discover":"Découvrir","heroAlt":"Chantier de construction avec échafaudages, réalisé par GUTA Chapes SA","heroEyebrow":"GUTA Chapes SA · Suisse romande & alémanique","heroTitle":"Des sols conçus<br>pour durer.","heroText":"Chapes, isolation et solutions de sol pour vos projets en Suisse romande et alémanique.","trustLabel":"Points de confiance","trustHistoryText":"Reprise de la logistique, puis passage en SA.","trustRegionTitle":"Suisse romande & alémanique","trustRegionText":"Intervention sur de nombreux projets dans les régions francophones et germanophones.","trustServicesTitle":"Chapes & isolation","trustServicesText":"Des solutions adaptées à chaque chantier.","aboutAlt":"Équipe GUTA Chapes SA en réunion de suivi de chantier avec plans d'exécution","aboutBadge":"Rachat de la logistique","aboutEyebrow":"À propos de nous","aboutTitle":"Une histoire construite sur le terrain","aboutP1":"Notre histoire débute en 2005, avec le rachat de la logistique de Franco Gaiardo Chapes, sans acquisition du nom de l'entreprise. Cette reprise nous a permis de poursuivre notre activité avec les moyens et l'expérience nécessaires au métier.","aboutP2":"En 2007, l'entreprise franchit une nouvelle étape et devient GUTA Chapes SA. Depuis, nous développons notre savoir-faire chantier après chantier, dans le domaine des chapes et de l'isolation en Suisse romande et alémanique.","timeline2005":"Rachat de la logistique de Franco Gaiardo Chapes, sans reprise du nom.","timeline2007":"L'entreprise devient GUTA Chapes SA.","aboutP3":"Chaque projet de construction ou de rénovation a ses propres exigences. Nous mettons notre savoir-faire au service de vos besoins, avec un travail soigné et professionnel du début à la fin du chantier.","aboutPoint1":"Expérience du métier","aboutPoint2":"Solutions adaptées au chantier","aboutPoint3":"Travail professionnel","aboutPoint4":"Respect des exigences du projet","servicesEyebrow":"Nos services","servicesTitle":"Des solutions complètes pour vos projets","servicesIntro":"Nous proposons une gamme complète de prestations dans le domaine des chapes et de l'isolation, adaptées aux besoins de chaque chantier.","service1Alt":"Chape ciment finie, surface lisse et régulière","service1Title":"Chapes","service1Text":"Chapes ciment et solutions traditionnelles pour tous types de sols.","service2Alt":"Isolation de sol avant pose de chape, charpente bois apparente","service2Title":"Isolation","service2Text":"Isolation thermique et acoustique pour améliorer le confort de vos sols.","service3Alt":"Livraison de matériaux sur un chantier de construction","service3Title":"Chapes fluides","service3Text":"Solutions fluides et autonivelantes adaptées aux exigences du chantier.","service4Alt":"Ponçage et préparation d'une dalle en béton sur chantier","service4Title":"Rénovation & préparation des supports","service4Text":"Préparation, ragréage et rénovation des supports avant pose.","featureAlt":"Vue aérienne d'un chantier de construction en Suisse, en bordure de lac","featureEyebrow":"Un savoir-faire construit sur le terrain","featureTitle":"Des solutions adaptées à chaque chantier.","featureText":"Chaque projet présente ses propres contraintes : accès, délais, matériaux ou configuration des lieux. Nous choisissons la solution technique la plus adaptée aux exigences réelles de votre chantier.","projectsEyebrow":"Nos réalisations","projectsTitle":"Découvrez une sélection de chantiers réalisés par GUTA Chapes SA","galleryCaption":"Réalisation GUTA Chapes","galleryAlt1":"Chantier de construction avec échafaudages","galleryAlt2":"Vue aérienne d'un chantier de construction en bordure de lac","galleryAlt3":"Chape ciment finie, surface lisse et régulière","galleryAlt4":"Ponçage et préparation d'une dalle en béton sur chantier","galleryAlt5":"Isolation de sol avant pose de chape, charpente bois apparente","galleryAlt6":"Camion-grue livrant des matériaux sur un chantier de construction","galleryAlt7":"Réunion de suivi de chantier avec plans d'exécution","galleryAlt8":"Matériaux et résines utilisés sur un chantier GUTA Chapes","prevPhoto":"Photo précédente","nextPhoto":"Photo suivante","lightboxLabel":"Visionneuse d'image","close":"Fermer","prevImage":"Image précédente","nextImage":"Image suivante","zoomPhoto":"Agrandir la photo","processEyebrow":"Notre démarche","processTitle":"Votre projet, simplement.","process1Title":"Contact","process1Text":"Vous nous présentez votre projet et vos besoins.","process2Title":"Analyse","process2Text":"Les besoins et contraintes du chantier sont étudiés.","process3Title":"Intervention","process3Text":"Les travaux sont réalisés selon les exigences définies.","process4Title":"Finalisation","process4Text":"Le chantier est finalisé et contrôlé.","ctaEyebrow":"Votre projet","ctaTitle":"Un projet de construction ou de rénovation ?","ctaText":"Parlez-nous de votre projet et obtenez les informations nécessaires pour votre chantier.","contactEyebrow":"Contact","contactTitle":"Contactez-nous","contactIntro":"N'hésitez pas à nous contacter pour toute question ou demande de devis.","address":"Adresse","phone":"Téléphone","emailLabel":"E-mail","openingHours":"Horaires d'ouverture","mapTitle":"Localisation de GUTA Chapes SA","monday":"Lundi","tuesday":"Mardi","wednesday":"Mercredi","thursday":"Jeudi","friday":"Vendredi","saturday":"Samedi","sunday":"Dimanche","hoursOpen":"08:00 – 17:30","closed":"Fermé","fullName":"Nom et prénom","company":"Société","projectLocation":"Localité du chantier","projectType":"Type de projet","message":"Message","attachments":"Joindre des photos ou documents","errName":"Merci d'indiquer votre nom et prénom.","errPhone":"Merci d'indiquer un numéro de téléphone valide.","errEmail":"Merci d'indiquer une adresse e-mail valide.","errLocation":"Merci d'indiquer la localité du chantier.","errMessage":"Merci de décrire brièvement votre projet.","messagePlaceholder":"Décrivez votre projet…","selectOption":"Sélectionner…","typeTraditional":"Chape traditionnelle","typeFluid":"Chape fluide","typeThermal":"Isolation thermique","typeAcoustic":"Isolation acoustique","typeOther":"Autre","filePrompt":"Cliquez pour sélectionner un ou plusieurs fichiers","sendRequest":"Envoyer ma demande","formNote":"En validant, votre messagerie s'ouvrira avec un e-mail pré-rempli à destination de GUTA Chapes SA. Les fichiers joints devront être ajoutés manuellement à cet e-mail.","footerDescription":"Entreprise suisse spécialisée dans les chapes et l'isolation, active en Suisse romande et alémanique depuis 2007.","navigation":"Navigation","footerService4":"Rénovation des supports","contactDetails":"Coordonnées","footerHours":"Lun–Ven : 08:00 – 17:30","rightsReserved":"Tous droits réservés","call":"Appeler","quoteShort":"Devis","filesSelected":"{count} fichier(s) sélectionné(s) : {names}","formInvalid":"Merci de corriger les champs indiqués ci-dessus avant d'envoyer votre demande.","mailHeading":"Nouvelle demande de devis — GUTA Chapes SA","mailName":"Nom et prénom","mailCompany":"Société","mailPhone":"Téléphone","mailEmail":"E-mail","mailLocation":"Localité du chantier","mailType":"Type de projet","mailMessage":"Message","mailFiles":"Fichiers à joindre manuellement","mailSubject":"Demande de devis","mailReady":"Votre messagerie va s'ouvrir avec les informations pré-remplies. Merci de vérifier le message puis de l'envoyer{files}.","mailReadyFiles":" en joignant vos fichiers manuellement","seoTitle":"GUTA Chapes SA | Chapes & isolation en Suisse romande et alémanique","seoDescription":"GUTA Chapes SA réalise des chapes, chapes fluides et solutions d'isolation thermique et acoustique en Suisse romande et alémanique. Basée à Farvagny-le-Petit (FR). Demandez votre devis.","seoOgDescription":"Experts en chapes, chapes fluides et isolation thermique et acoustique, actifs en Suisse romande et alémanique depuis 2007.","seoTwitterDescription":"Chapes, chapes fluides et isolation thermique et acoustique en Suisse romande et alémanique.","ogLocale":"fr_CH"},"de":{"languageName":"Deutsch","languageChooser":"Sprache wählen","skipContent":"Zum Inhalt springen","logoHome":"GUTA Chapes SA — Startseite","mainNav":"Hauptnavigation","mobileNav":"Mobile Navigation","openMenu":"Menü öffnen","closeMenu":"Menü schliessen","navHome":"Startseite","navAbout":"Über uns","navServices":"Leistungen","navProjects":"Referenzen","navContact":"Kontakt","quoteRequest":"Offerte anfragen","ourProjects":"Unsere Referenzen","discover":"Entdecken","heroAlt":"Baustelle mit Gerüst, ausgeführt von GUTA Chapes SA","heroEyebrow":"GUTA Chapes SA · Westschweiz & Deutschschweiz","heroTitle":"Böden, die für<br>lange Zeit gemacht sind.","heroText":"Estriche, Dämmung und Bodenlösungen für Ihre Projekte in der West- und Deutschschweiz.","trustLabel":"Vertrauensmerkmale","trustHistoryText":"Übernahme der Logistik, danach Umwandlung in eine AG.","trustRegionTitle":"West- & Deutschschweiz","trustRegionText":"Einsätze bei zahlreichen Projekten in französisch- und deutschsprachigen Regionen.","trustServicesTitle":"Estriche & Dämmung","trustServicesText":"Passende Lösungen für jede Baustelle.","aboutAlt":"Team von GUTA Chapes SA bei einer Baustellenbesprechung mit Ausführungsplänen","aboutBadge":"Übernahme der Logistik","aboutEyebrow":"Über uns","aboutTitle":"Eine Geschichte, die auf der Baustelle gewachsen ist","aboutP1":"Unsere Geschichte beginnt 2005 mit der Übernahme der Logistik von Franco Gaiardo Chapes, ohne den Firmennamen zu erwerben. Diese Übernahme ermöglichte uns, unsere Tätigkeit mit den für das Handwerk notwendigen Mitteln und Erfahrungen weiterzuführen.","aboutP2":"2007 folgt der nächste Schritt: Das Unternehmen wird zur GUTA Chapes SA. Seither entwickeln wir unser Know-how Baustelle für Baustelle im Bereich Estriche und Dämmung in der West- und Deutschschweiz weiter.","timeline2005":"Übernahme der Logistik von Franco Gaiardo Chapes, ohne Übernahme des Namens.","timeline2007":"Das Unternehmen wird zur GUTA Chapes SA.","aboutP3":"Jedes Bau- oder Renovationsprojekt hat eigene Anforderungen. Wir stellen unser Fachwissen in Ihren Dienst und sorgen vom Anfang bis zum Ende der Arbeiten für eine sorgfältige und professionelle Ausführung.","aboutPoint1":"Erfahrung im Handwerk","aboutPoint2":"Baustellengerechte Lösungen","aboutPoint3":"Professionelle Ausführung","aboutPoint4":"Einhaltung der Projektanforderungen","servicesEyebrow":"Unsere Leistungen","servicesTitle":"Komplette Lösungen für Ihre Projekte","servicesIntro":"Wir bieten ein umfassendes Leistungsspektrum rund um Estriche und Dämmung, abgestimmt auf die Anforderungen jeder Baustelle.","service1Alt":"Fertiger Zementestrich mit glatter und gleichmässiger Oberfläche","service1Title":"Estriche","service1Text":"Zementestriche und traditionelle Lösungen für verschiedenste Bodenarten.","service2Alt":"Bodendämmung vor dem Einbau des Estrichs mit sichtbarer Holzkonstruktion","service2Title":"Dämmung","service2Text":"Wärme- und Schalldämmung für mehr Komfort bei Ihren Böden.","service3Alt":"Materiallieferung auf einer Baustelle","service3Title":"Fliessestriche","service3Text":"Fliessende und selbstnivellierende Lösungen, abgestimmt auf die Anforderungen der Baustelle.","service4Alt":"Schleifen und Vorbereitung einer Betonplatte auf der Baustelle","service4Title":"Sanierung & Untergrundvorbereitung","service4Text":"Vorbereitung, Ausgleich und Sanierung von Untergründen vor der Verlegung.","featureAlt":"Luftaufnahme einer Baustelle in der Schweiz am See","featureEyebrow":"Know-how aus der Praxis","featureTitle":"Passende Lösungen für jede Baustelle.","featureText":"Jedes Projekt bringt eigene Rahmenbedingungen mit sich: Zugang, Termine, Materialien oder räumliche Gegebenheiten. Wir wählen die technische Lösung, die den tatsächlichen Anforderungen Ihrer Baustelle am besten entspricht.","projectsEyebrow":"Unsere Referenzen","projectsTitle":"Entdecken Sie eine Auswahl von Baustellen der GUTA Chapes SA","galleryCaption":"Projekt GUTA Chapes","galleryAlt1":"Baustelle mit Gerüst","galleryAlt2":"Luftaufnahme einer Baustelle am See","galleryAlt3":"Fertiger Zementestrich mit glatter Oberfläche","galleryAlt4":"Schleifen und Vorbereitung einer Betonplatte auf der Baustelle","galleryAlt5":"Bodendämmung vor dem Estricheinbau mit sichtbarer Holzkonstruktion","galleryAlt6":"Kranlastwagen bei der Materiallieferung auf einer Baustelle","galleryAlt7":"Baustellenbesprechung mit Ausführungsplänen","galleryAlt8":"Materialien und Harze auf einer Baustelle von GUTA Chapes","prevPhoto":"Vorheriges Foto","nextPhoto":"Nächstes Foto","lightboxLabel":"Bildanzeige","close":"Schliessen","prevImage":"Vorheriges Bild","nextImage":"Nächstes Bild","zoomPhoto":"Foto vergrössern","processEyebrow":"Unser Vorgehen","processTitle":"Ihr Projekt, unkompliziert.","process1Title":"Kontakt","process1Text":"Sie stellen uns Ihr Projekt und Ihre Bedürfnisse vor.","process2Title":"Analyse","process2Text":"Wir prüfen die Anforderungen und Rahmenbedingungen der Baustelle.","process3Title":"Ausführung","process3Text":"Die Arbeiten werden gemäss den definierten Anforderungen ausgeführt.","process4Title":"Abschluss","process4Text":"Die Baustelle wird abgeschlossen und kontrolliert.","ctaEyebrow":"Ihr Projekt","ctaTitle":"Ein Bau- oder Renovationsprojekt?","ctaText":"Erzählen Sie uns von Ihrem Projekt und erhalten Sie die nötigen Informationen für Ihre Baustelle.","contactEyebrow":"Kontakt","contactTitle":"Kontaktieren Sie uns","contactIntro":"Kontaktieren Sie uns gerne bei Fragen oder für eine Offertanfrage.","address":"Adresse","phone":"Telefon","emailLabel":"E-Mail","openingHours":"Öffnungszeiten","mapTitle":"Standort der GUTA Chapes SA","monday":"Montag","tuesday":"Dienstag","wednesday":"Mittwoch","thursday":"Donnerstag","friday":"Freitag","saturday":"Samstag","sunday":"Sonntag","hoursOpen":"08:00 – 17:30","closed":"Geschlossen","fullName":"Vor- und Nachname","company":"Unternehmen","projectLocation":"Ort der Baustelle","projectType":"Projektart","message":"Nachricht","attachments":"Fotos oder Dokumente anhängen","errName":"Bitte geben Sie Ihren Vor- und Nachnamen an.","errPhone":"Bitte geben Sie eine gültige Telefonnummer an.","errEmail":"Bitte geben Sie eine gültige E-Mail-Adresse an.","errLocation":"Bitte geben Sie den Ort der Baustelle an.","errMessage":"Bitte beschreiben Sie Ihr Projekt kurz.","messagePlaceholder":"Beschreiben Sie Ihr Projekt…","selectOption":"Auswählen…","typeTraditional":"Traditioneller Estrich","typeFluid":"Fliessestrich","typeThermal":"Wärmedämmung","typeAcoustic":"Schalldämmung","typeOther":"Andere","filePrompt":"Klicken Sie, um eine oder mehrere Dateien auszuwählen","sendRequest":"Anfrage senden","formNote":"Nach dem Bestätigen öffnet sich Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht an GUTA Chapes SA. Anhänge müssen der E-Mail manuell hinzugefügt werden.","footerDescription":"Schweizer Unternehmen für Estriche und Dämmung, seit 2007 in der West- und Deutschschweiz tätig.","navigation":"Navigation","footerService4":"Untergrundsanierung","contactDetails":"Kontaktdaten","footerHours":"Mo–Fr: 08:00 – 17:30","rightsReserved":"Alle Rechte vorbehalten","call":"Anrufen","quoteShort":"Offerte","filesSelected":"{count} Datei(en) ausgewählt: {names}","formInvalid":"Bitte korrigieren Sie die markierten Felder, bevor Sie Ihre Anfrage senden.","mailHeading":"Neue Offertanfrage — GUTA Chapes SA","mailName":"Vor- und Nachname","mailCompany":"Unternehmen","mailPhone":"Telefon","mailEmail":"E-Mail","mailLocation":"Ort der Baustelle","mailType":"Projektart","mailMessage":"Nachricht","mailFiles":"Dateien manuell anhängen","mailSubject":"Offertanfrage","mailReady":"Ihr E-Mail-Programm wird mit den vorausgefüllten Angaben geöffnet. Bitte prüfen Sie die Nachricht und senden Sie sie anschliessend{files}.","mailReadyFiles":"; fügen Sie Ihre Dateien manuell als Anhang hinzu","seoTitle":"GUTA Chapes SA | Estriche & Dämmung in der West- und Deutschschweiz","seoDescription":"GUTA Chapes SA realisiert Estriche, Fliessestriche sowie Wärme- und Schalldämmungen in der West- und Deutschschweiz. Sitz in Farvagny-le-Petit (FR). Offerte anfragen.","seoOgDescription":"Spezialisten für Estriche, Fliessestriche sowie Wärme- und Schalldämmung in der West- und Deutschschweiz seit 2007.","seoTwitterDescription":"Estriche, Fliessestriche sowie Wärme- und Schalldämmung in der West- und Deutschschweiz.","ogLocale":"de_CH"},"en":{"languageName":"English","languageChooser":"Choose language","skipContent":"Skip to content","logoHome":"GUTA Chapes SA — Home","mainNav":"Main navigation","mobileNav":"Mobile navigation","openMenu":"Open menu","closeMenu":"Close menu","navHome":"Home","navAbout":"About us","navServices":"Services","navProjects":"Projects","navContact":"Contact","quoteRequest":"Request a quote","ourProjects":"Our projects","discover":"Discover","heroAlt":"Construction site with scaffolding, completed by GUTA Chapes SA","heroEyebrow":"GUTA Chapes SA · French- & German-speaking Switzerland","heroTitle":"Floors designed<br>to last.","heroText":"Screeds, insulation and flooring solutions for your projects across French- and German-speaking Switzerland.","trustLabel":"Key strengths","trustHistoryText":"Takeover of the logistics operations, followed by incorporation as a limited company.","trustRegionTitle":"French & German-speaking Switzerland","trustRegionText":"Work on numerous projects across French- and German-speaking regions.","trustServicesTitle":"Screeds & insulation","trustServicesText":"Solutions tailored to each construction site.","aboutAlt":"GUTA Chapes SA team at a construction-site coordination meeting with execution plans","aboutBadge":"Logistics takeover","aboutEyebrow":"About us","aboutTitle":"A story built on site","aboutP1":"Our story began in 2005 with the takeover of the logistics operations of Franco Gaiardo Chapes, without acquiring the company name. This takeover allowed us to continue our activity with the equipment and experience needed for the trade.","aboutP2":"In 2007, the company took another step forward and became GUTA Chapes SA. Since then, we have continued to develop our expertise from one site to the next in screeds and insulation throughout French- and German-speaking Switzerland.","timeline2005":"Takeover of the logistics operations of Franco Gaiardo Chapes, without taking over the name.","timeline2007":"The company becomes GUTA Chapes SA.","aboutP3":"Every construction or renovation project has its own requirements. We put our expertise at the service of your needs, with careful and professional workmanship from the start to the completion of the site.","aboutPoint1":"Trade experience","aboutPoint2":"Site-specific solutions","aboutPoint3":"Professional workmanship","aboutPoint4":"Compliance with project requirements","servicesEyebrow":"Our services","servicesTitle":"Complete solutions for your projects","servicesIntro":"We provide a complete range of screed and insulation services, tailored to the needs of each construction site.","service1Alt":"Finished cement screed with a smooth and even surface","service1Title":"Screeds","service1Text":"Cement screeds and traditional solutions for all types of floors.","service2Alt":"Floor insulation before screed installation with exposed timber structure","service2Title":"Insulation","service2Text":"Thermal and acoustic insulation to improve floor comfort.","service3Alt":"Material delivery on a construction site","service3Title":"Flowing screeds","service3Text":"Flowing and self-levelling solutions tailored to site requirements.","service4Alt":"Grinding and preparation of a concrete slab on site","service4Title":"Renovation & substrate preparation","service4Text":"Preparation, levelling and renovation of substrates before installation.","featureAlt":"Aerial view of a construction site by a lake in Switzerland","featureEyebrow":"Expertise built in the field","featureTitle":"Solutions tailored to every site.","featureText":"Every project has its own constraints: access, deadlines, materials or site configuration. We select the technical solution best suited to the real requirements of your construction site.","projectsEyebrow":"Our projects","projectsTitle":"Discover a selection of projects completed by GUTA Chapes SA","galleryCaption":"GUTA Chapes project","galleryAlt1":"Construction site with scaffolding","galleryAlt2":"Aerial view of a construction site by a lake","galleryAlt3":"Finished cement screed with a smooth and even surface","galleryAlt4":"Grinding and preparation of a concrete slab on site","galleryAlt5":"Floor insulation before screed installation with exposed timber structure","galleryAlt6":"Crane truck delivering materials to a construction site","galleryAlt7":"Construction-site coordination meeting with execution plans","galleryAlt8":"Materials and resins used on a GUTA Chapes construction site","prevPhoto":"Previous photo","nextPhoto":"Next photo","lightboxLabel":"Image viewer","close":"Close","prevImage":"Previous image","nextImage":"Next image","zoomPhoto":"Enlarge photo","processEyebrow":"Our process","processTitle":"Your project, made simple.","process1Title":"Contact","process1Text":"You tell us about your project and your needs.","process2Title":"Assessment","process2Text":"We assess the needs and constraints of the construction site.","process3Title":"Execution","process3Text":"The work is carried out according to the defined requirements.","process4Title":"Completion","process4Text":"The work is completed and checked.","ctaEyebrow":"Your project","ctaTitle":"Planning a construction or renovation project?","ctaText":"Tell us about your project and get the information you need for your construction site.","contactEyebrow":"Contact","contactTitle":"Contact us","contactIntro":"Feel free to contact us with any questions or to request a quote.","address":"Address","phone":"Phone","emailLabel":"Email","openingHours":"Opening hours","mapTitle":"GUTA Chapes SA location","monday":"Monday","tuesday":"Tuesday","wednesday":"Wednesday","thursday":"Thursday","friday":"Friday","saturday":"Saturday","sunday":"Sunday","hoursOpen":"08:00 – 17:30","closed":"Closed","fullName":"Full name","company":"Company","projectLocation":"Construction site location","projectType":"Project type","message":"Message","attachments":"Attach photos or documents","errName":"Please enter your full name.","errPhone":"Please enter a valid phone number.","errEmail":"Please enter a valid email address.","errLocation":"Please enter the construction site location.","errMessage":"Please briefly describe your project.","messagePlaceholder":"Describe your project…","selectOption":"Select…","typeTraditional":"Traditional screed","typeFluid":"Flowing screed","typeThermal":"Thermal insulation","typeAcoustic":"Acoustic insulation","typeOther":"Other","filePrompt":"Click to select one or more files","sendRequest":"Send my request","formNote":"After confirmation, your email application will open with a pre-filled email addressed to GUTA Chapes SA. Any attachments must be added to the email manually.","footerDescription":"Swiss company specialising in screeds and insulation, active across French- and German-speaking Switzerland since 2007.","navigation":"Navigation","footerService4":"Substrate renovation","contactDetails":"Contact details","footerHours":"Mon–Fri: 08:00 – 17:30","rightsReserved":"All rights reserved","call":"Call","quoteShort":"Quote","filesSelected":"{count} file(s) selected: {names}","formInvalid":"Please correct the highlighted fields before sending your request.","mailHeading":"New quote request — GUTA Chapes SA","mailName":"Full name","mailCompany":"Company","mailPhone":"Phone","mailEmail":"Email","mailLocation":"Construction site location","mailType":"Project type","mailMessage":"Message","mailFiles":"Files to attach manually","mailSubject":"Quote request","mailReady":"Your email application will open with the information pre-filled. Please check the message and send it{files}.","mailReadyFiles":" after manually attaching your files","seoTitle":"GUTA Chapes SA | Screeds & insulation across French- and German-speaking Switzerland","seoDescription":"GUTA Chapes SA provides screeds, flowing screeds, thermal insulation and acoustic insulation across French- and German-speaking Switzerland. Based in Farvagny-le-Petit (FR). Request a quote.","seoOgDescription":"Screed, flowing screed, thermal and acoustic insulation specialists serving French- and German-speaking Switzerland since 2007.","seoTwitterDescription":"Screeds, flowing screeds, thermal and acoustic insulation across French- and German-speaking Switzerland.","ogLocale":"en_CH"},"sq":{"languageName":"Shqip","languageChooser":"Zgjidhni gjuhën","skipContent":"Kalo te përmbajtja","logoHome":"GUTA Chapes SA — Ballina","mainNav":"Navigimi kryesor","mobileNav":"Navigimi në celular","openMenu":"Hap menynë","closeMenu":"Mbyll menynë","navHome":"Ballina","navAbout":"Rreth nesh","navServices":"Shërbimet","navProjects":"Projektet","navContact":"Kontakt","quoteRequest":"Kërko ofertë","ourProjects":"Projektet tona","discover":"Zbulo","heroAlt":"Kantier ndërtimi me skela, realizuar nga GUTA Chapes SA","heroEyebrow":"GUTA Chapes SA · Zvicra frëngjisht- & gjermanishtfolëse","heroTitle":"Dysheme të projektuara<br>për të zgjatur.","heroText":"Estrih, izolim dhe zgjidhje për dysheme për projektet tuaja në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse.","trustLabel":"Pikat e besimit","trustHistoryText":"Marrja e logjistikës, më pas kalimi në shoqëri aksionare.","trustRegionTitle":"Zvicra frëngjisht- & gjermanishtfolëse","trustRegionText":"Ndërhyrje në projekte të shumta në rajonet frëngjishtfolëse dhe gjermanishtfolëse.","trustServicesTitle":"Estrih & izolim","trustServicesText":"Zgjidhje të përshtatura për çdo kantier.","aboutAlt":"Ekipi i GUTA Chapes SA në një takim koordinimi në kantier me planet e zbatimit","aboutBadge":"Marrja e logjistikës","aboutEyebrow":"Rreth nesh","aboutTitle":"Një histori e ndërtuar në terren","aboutP1":"Historia jonë fillon në vitin 2005 me marrjen e logjistikës së Franco Gaiardo Chapes, pa blerë emrin e kompanisë. Kjo na lejoi të vazhdonim aktivitetin me mjetet dhe përvojën e nevojshme për profesionin.","aboutP2":"Në vitin 2007, kompania kalon në një etapë të re dhe bëhet GUTA Chapes SA. Që atëherë, ne zhvillojmë vazhdimisht përvojën tonë nga një kantier në tjetrin në fushën e estrihut dhe izolimit në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse.","timeline2005":"Marrja e logjistikës së Franco Gaiardo Chapes, pa marrë emrin e kompanisë.","timeline2007":"Kompania bëhet GUTA Chapes SA.","aboutP3":"Çdo projekt ndërtimi ose rinovimi ka kërkesat e veta. Ne vendosim përvojën tonë në shërbim të nevojave tuaja, me punë të kujdesshme dhe profesionale nga fillimi deri në përfundimin e kantierit.","aboutPoint1":"Përvojë profesionale","aboutPoint2":"Zgjidhje të përshtatura për kantierin","aboutPoint3":"Punë profesionale","aboutPoint4":"Respektim i kërkesave të projektit","servicesEyebrow":"Shërbimet tona","servicesTitle":"Zgjidhje të plota për projektet tuaja","servicesIntro":"Ne ofrojmë një gamë të plotë shërbimesh në fushën e estrihut dhe izolimit, të përshtatura për nevojat e çdo kantieri.","service1Alt":"Estrih çimentoje i përfunduar, me sipërfaqe të lëmuar dhe të rregullt","service1Title":"Estrih","service1Text":"Estrih çimentoje dhe zgjidhje tradicionale për lloje të ndryshme dyshemesh.","service2Alt":"Izolim dyshemeje para vendosjes së estrihut, me konstruksion druri të dukshëm","service2Title":"Izolim","service2Text":"Izolim termik dhe akustik për të përmirësuar komoditetin e dyshemeve tuaja.","service3Alt":"Dorëzim materialesh në një kantier ndërtimi","service3Title":"Estrih i lëngshëm","service3Text":"Zgjidhje të lëngshme dhe vetëniveluese të përshtatura me kërkesat e kantierit.","service4Alt":"Lëmim dhe përgatitje e një pllake betoni në kantier","service4Title":"Rinovim & përgatitje e bazamenteve","service4Text":"Përgatitje, nivelim dhe rinovim i bazamenteve para vendosjes.","featureAlt":"Pamje ajrore e një kantieri ndërtimi pranë liqenit në Zvicër","featureEyebrow":"Përvojë e ndërtuar në terren","featureTitle":"Zgjidhje të përshtatura për çdo kantier.","featureText":"Çdo projekt ka kufizimet e veta: qasja, afatet, materialet ose konfigurimi i hapësirës. Ne zgjedhim zgjidhjen teknike më të përshtatshme me kërkesat reale të kantierit tuaj.","projectsEyebrow":"Projektet tona","projectsTitle":"Zbuloni një përzgjedhje projektesh të realizuara nga GUTA Chapes SA","galleryCaption":"Projekt GUTA Chapes","galleryAlt1":"Kantier ndërtimi me skela","galleryAlt2":"Pamje ajrore e një kantieri ndërtimi pranë liqenit","galleryAlt3":"Estrih çimentoje i përfunduar, me sipërfaqe të lëmuar","galleryAlt4":"Lëmim dhe përgatitje e një pllake betoni në kantier","galleryAlt5":"Izolim dyshemeje para vendosjes së estrihut me konstruksion druri të dukshëm","galleryAlt6":"Kamion-vinç që dorëzon materiale në një kantier ndërtimi","galleryAlt7":"Takim koordinimi në kantier me planet e zbatimit","galleryAlt8":"Materiale dhe rrëshira të përdorura në një kantier të GUTA Chapes","prevPhoto":"Fotoja e mëparshme","nextPhoto":"Fotoja tjetër","lightboxLabel":"Shikues imazhesh","close":"Mbyll","prevImage":"Imazhi i mëparshëm","nextImage":"Imazhi tjetër","zoomPhoto":"Zmadho foton","processEyebrow":"Procesi ynë","processTitle":"Projekti juaj, thjesht.","process1Title":"Kontakt","process1Text":"Ju na prezantoni projektin dhe nevojat tuaja.","process2Title":"Analizë","process2Text":"Analizohen nevojat dhe kufizimet e kantierit.","process3Title":"Realizim","process3Text":"Punimet kryhen sipas kërkesave të përcaktuara.","process4Title":"Përfundim","process4Text":"Kantieri përfundon dhe kontrollohet.","ctaEyebrow":"Projekti juaj","ctaTitle":"Keni një projekt ndërtimi ose rinovimi?","ctaText":"Na tregoni për projektin tuaj dhe merrni informacionin e nevojshëm për kantierin.","contactEyebrow":"Kontakt","contactTitle":"Na kontaktoni","contactIntro":"Mos hezitoni të na kontaktoni për çdo pyetje ose kërkesë për ofertë.","address":"Adresa","phone":"Telefoni","emailLabel":"E-mail","openingHours":"Orari i hapjes","mapTitle":"Vendndodhja e GUTA Chapes SA","monday":"E hënë","tuesday":"E martë","wednesday":"E mërkurë","thursday":"E enjte","friday":"E premte","saturday":"E shtunë","sunday":"E diel","hoursOpen":"08:00 – 17:30","closed":"Mbyllur","fullName":"Emri dhe mbiemri","company":"Kompania","projectLocation":"Vendndodhja e kantierit","projectType":"Lloji i projektit","message":"Mesazhi","attachments":"Bashkëngjit foto ose dokumente","errName":"Ju lutemi shkruani emrin dhe mbiemrin.","errPhone":"Ju lutemi shkruani një numër telefoni të vlefshëm.","errEmail":"Ju lutemi shkruani një adresë e-mail të vlefshme.","errLocation":"Ju lutemi shkruani vendndodhjen e kantierit.","errMessage":"Ju lutemi përshkruani shkurtimisht projektin tuaj.","messagePlaceholder":"Përshkruani projektin tuaj…","selectOption":"Zgjidhni…","typeTraditional":"Estrih tradicional","typeFluid":"Estrih i lëngshëm","typeThermal":"Izolim termik","typeAcoustic":"Izolim akustik","typeOther":"Tjetër","filePrompt":"Klikoni për të zgjedhur një ose më shumë skedarë","sendRequest":"Dërgo kërkesën","formNote":"Pas konfirmimit, programi juaj i e-mailit do të hapet me një mesazh të paraplotësuar për GUTA Chapes SA. Skedarët duhet të shtohen manualisht si bashkëngjitje.","footerDescription":"Kompani zvicerane e specializuar në estrih dhe izolim, aktive në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse që nga viti 2007.","navigation":"Navigimi","footerService4":"Rinovim i bazamenteve","contactDetails":"Të dhënat e kontaktit","footerHours":"Hën–Pre: 08:00 – 17:30","rightsReserved":"Të gjitha të drejtat e rezervuara","call":"Telefono","quoteShort":"Ofertë","filesSelected":"{count} skedar(ë) të zgjedhur: {names}","formInvalid":"Ju lutemi korrigjoni fushat e shënuara para se të dërgoni kërkesën.","mailHeading":"Kërkesë e re për ofertë — GUTA Chapes SA","mailName":"Emri dhe mbiemri","mailCompany":"Kompania","mailPhone":"Telefoni","mailEmail":"E-mail","mailLocation":"Vendndodhja e kantierit","mailType":"Lloji i projektit","mailMessage":"Mesazhi","mailFiles":"Skedarët për t’u bashkëngjitur manualisht","mailSubject":"Kërkesë për ofertë","mailReady":"Programi juaj i e-mailit do të hapet me informacionin e paraplotësuar. Ju lutemi kontrolloni mesazhin dhe dërgojeni{files}.","mailReadyFiles":" pasi t’i bashkëngjitni skedarët manualisht","seoTitle":"GUTA Chapes SA | Estrih & izolim në Zvicrën frëngjisht- dhe gjermanishtfolëse","seoDescription":"GUTA Chapes SA realizon estrih, estrih të lëngshëm, izolim termik dhe akustik në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse. Me bazë në Farvagny-le-Petit (FR). Kërkoni ofertë.","seoOgDescription":"Ekspertë në estrih, estrih të lëngshëm, izolim termik dhe akustik në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse që nga viti 2007.","seoTwitterDescription":"Estrih, estrih i lëngshëm, izolim termik dhe akustik në Zvicrën frëngjishtfolëse dhe gjermanishtfolëse.","ogLocale":"sq_AL"}};
  var SUPPORTED_LANGS = ["fr", "de", "en", "sq"];
  var currentLang = "fr";

  function t(key) {
    var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    return dict[key] || TRANSLATIONS.fr[key] || key;
  }

  function format(template, vars) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : "";
    });
  }

  function updateMeta() {
    document.title = t("seoTitle");
    var desc = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    var twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (desc) desc.setAttribute("content", t("seoDescription"));
    if (ogTitle) ogTitle.setAttribute("content", t("seoTitle"));
    if (ogDesc) ogDesc.setAttribute("content", t("seoOgDescription"));
    if (ogLocale) ogLocale.setAttribute("content", t("ogLocale"));
    if (twitterTitle) twitterTitle.setAttribute("content", t("seoTitle"));
    if (twitterDesc) twitterDesc.setAttribute("content", t("seoTwitterDescription"));
  }

  function applyLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = "fr";
    currentLang = lang;
    document.documentElement.lang = lang === "fr" ? "fr-CH" : lang === "de" ? "de-CH" : lang === "en" ? "en" : "sq";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-i18n-caption]").forEach(function (el) {
      el.setAttribute("data-caption", t(el.getAttribute("data-i18n-caption")));
    });
    document.querySelectorAll("[data-i18n-tail]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-tail");
      var line = el.querySelector(".line");
      el.textContent = " ";
      if (line) el.appendChild(line);
      el.appendChild(document.createTextNode(" " + t(key)));
    });

    var languageSelect = document.getElementById("languageSelect");
    if (languageSelect) languageSelect.value = lang;
    try { localStorage.setItem("gutaLanguage", lang); } catch (e) {}
    updateMeta();

    // Refresh dynamic gallery accessibility and caption if lightbox is open.
    document.querySelectorAll(".gallery__item").forEach(function (item) {
      item.setAttribute("aria-label", t("zoomPhoto"));
    });
    var lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.classList.contains("is-open")) showImage(currentIndex);
  }

  function getInitialLanguage() {
    try {
      var saved = localStorage.getItem("gutaLanguage");
      if (SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var browserLang = (navigator.language || "").toLowerCase().split("-")[0];
    return SUPPORTED_LANGS.indexOf(browserLang) !== -1 ? browserLang : "fr";
  }

  var languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", function () { applyLanguage(this.value); });
  }

  /* Sticky header shadow on scroll */
  var header = document.getElementById("header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* Mobile navigation panel */
  var burgerBtn = document.getElementById("burgerBtn");
  var navMobile = document.getElementById("navMobile");
  var navMobileClose = document.getElementById("navMobileClose");
  var navMobileLinks = document.querySelectorAll(".nav-mobile-link");
  function openMobileNav() {
    navMobile.classList.add("is-open"); burgerBtn.classList.add("is-active");
    burgerBtn.setAttribute("aria-expanded", "true"); document.body.classList.add("nav-open");
  }
  function closeMobileNav() {
    navMobile.classList.remove("is-open"); burgerBtn.classList.remove("is-active");
    burgerBtn.setAttribute("aria-expanded", "false"); document.body.classList.remove("nav-open");
  }
  if (burgerBtn && navMobile && navMobileClose) {
    burgerBtn.addEventListener("click", function () { navMobile.classList.contains("is-open") ? closeMobileNav() : openMobileNav(); });
    navMobileClose.addEventListener("click", closeMobileNav);
    navMobileLinks.forEach(function (link) { link.addEventListener("click", closeMobileNav); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && navMobile.classList.contains("is-open")) closeMobileNav(); });
  }

  /* Scroll reveal animations */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* Footer dynamic year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Opening hours — highlight current day */
  var hoursTable = document.getElementById("hoursTable");
  if (hoursTable) {
    var row = hoursTable.querySelector('tr[data-day="' + new Date().getDay() + '"]');
    if (row) row.classList.add("is-today");
  }

  /* Gallery slider */
  var galleryTrack = document.getElementById("galleryGrid");
  var galleryPrev = document.getElementById("galleryPrev");
  var galleryNext = document.getElementById("galleryNext");
  var galleryProgressBar = document.getElementById("galleryProgressBar");
  if (galleryTrack && galleryPrev && galleryNext) {
    function scrollGalleryBy(direction) {
      var item = galleryTrack.querySelector(".gallery__item"); if (!item) return;
      var gap = parseFloat(getComputedStyle(galleryTrack).gap) || 20;
      galleryTrack.scrollBy({ left: direction * (item.getBoundingClientRect().width + gap), behavior: "smooth" });
    }
    galleryPrev.addEventListener("click", function () { scrollGalleryBy(-1); });
    galleryNext.addEventListener("click", function () { scrollGalleryBy(1); });
    function updateGalleryProgress() {
      if (!galleryProgressBar) return;
      var maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
      var ratio = maxScroll > 0 ? galleryTrack.scrollLeft / maxScroll : 0;
      var itemCount = galleryTrack.querySelectorAll(".gallery__item").length || 1;
      var barWidth = Math.max(100 / itemCount, 8);
      galleryProgressBar.style.width = barWidth + "%";
      galleryProgressBar.style.left = (ratio * (100 - barWidth)) + "%";
    }
    updateGalleryProgress(); galleryTrack.addEventListener("scroll", updateGalleryProgress, { passive: true }); window.addEventListener("resize", updateGalleryProgress);
  }

  /* Gallery lightbox */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery__item"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var currentIndex = 0;
  var lastFocusedEl = null;
  function showImage(index) {
    if (!galleryItems.length || !lightboxImg || !lightboxCaption) return;
    if (index < 0) index = galleryItems.length - 1; if (index >= galleryItems.length) index = 0;
    currentIndex = index;
    var item = galleryItems[currentIndex];
    lightboxImg.src = item.getAttribute("data-full");
    lightboxImg.alt = item.querySelector("img").getAttribute("alt");
    lightboxCaption.textContent = item.getAttribute("data-caption") || "";
  }
  function openLightbox(index) { lastFocusedEl = document.activeElement; showImage(index); lightbox.classList.add("is-open"); document.body.classList.add("nav-open"); lightboxClose.focus(); }
  function closeLightbox() { lightbox.classList.remove("is-open"); document.body.classList.remove("nav-open"); if (lastFocusedEl) lastFocusedEl.focus(); }
  if (lightbox && lightboxClose && lightboxPrev && lightboxNext) {
    galleryItems.forEach(function (item, index) {
      item.setAttribute("tabindex", "0"); item.setAttribute("role", "button");
      item.addEventListener("click", function () { openLightbox(index); });
      item.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(index); } });
    });
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", function () { showImage(currentIndex - 1); });
    lightboxNext.addEventListener("click", function () { showImage(currentIndex + 1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) { if (!lightbox.classList.contains("is-open")) return; if (e.key === "Escape") closeLightbox(); if (e.key === "ArrowLeft") showImage(currentIndex - 1); if (e.key === "ArrowRight") showImage(currentIndex + 1); });
    var touchStartX = 0, touchEndX = 0;
    lightbox.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) { touchEndX = e.changedTouches[0].screenX; var delta = touchEndX - touchStartX; if (Math.abs(delta) > 40) showImage(delta < 0 ? currentIndex + 1 : currentIndex - 1); }, { passive: true });
  }

  /* File input */
  var filesInput = document.getElementById("files");
  var fileList = document.getElementById("fileList");
  if (filesInput && fileList) {
    filesInput.addEventListener("change", function () {
      if (filesInput.files.length === 0) { fileList.textContent = ""; return; }
      var names = Array.prototype.map.call(filesInput.files, function (f) { return f.name; });
      fileList.textContent = format(t("filesSelected"), { count: names.length, names: names.join(", ") });
    });
  }

  /* Quote form */
  var form = document.getElementById("quoteForm");
  var feedback = document.getElementById("formFeedback");
  function setFieldError(input, hasError) { var group = input.closest(".form-group"); if (group) group.classList.toggle("has-error", hasError); }
  function isValidEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
  function isValidPhone(value) { var digits = value.replace(/[\s().-]/g, ""); return /^\+?[0-9]{9,13}$/.test(digits); }
  if (form && feedback) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fullName = document.getElementById("fullName"), phone = document.getElementById("phone"), email = document.getElementById("email"), location = document.getElementById("location"), message = document.getElementById("message"), projectType = document.getElementById("projectType"), company = document.getElementById("company");
      var valid = true;
      [fullName, phone, email, location, message].forEach(function (input) { setFieldError(input, false); });
      if (!fullName.value.trim()) { setFieldError(fullName, true); valid = false; }
      if (!phone.value.trim() || !isValidPhone(phone.value)) { setFieldError(phone, true); valid = false; }
      if (!email.value.trim() || !isValidEmail(email.value)) { setFieldError(email, true); valid = false; }
      if (!location.value.trim()) { setFieldError(location, true); valid = false; }
      if (!message.value.trim()) { setFieldError(message, true); valid = false; }
      feedback.classList.remove("is-visible", "is-success", "is-error");
      if (!valid) { feedback.textContent = t("formInvalid"); feedback.classList.add("is-visible", "is-error"); return; }
      var typeText = projectType.selectedIndex > 0 ? projectType.options[projectType.selectedIndex].textContent : "-";
      var lines = [t("mailHeading"), "", t("mailName") + " : " + fullName.value.trim(), t("mailCompany") + " : " + (company.value.trim() || "-"), t("mailPhone") + " : " + phone.value.trim(), t("mailEmail") + " : " + email.value.trim(), t("mailLocation") + " : " + location.value.trim(), t("mailType") + " : " + typeText, "", t("mailMessage") + " :", message.value.trim()];
      if (filesInput && filesInput.files.length > 0) { var names = Array.prototype.map.call(filesInput.files, function (f) { return f.name; }); lines.push("", t("mailFiles") + " : " + names.join(", ")); }
      var subject = encodeURIComponent(t("mailSubject") + " — " + fullName.value.trim());
      var body = encodeURIComponent(lines.join("\n"));
      feedback.textContent = format(t("mailReady"), { files: filesInput && filesInput.files.length > 0 ? t("mailReadyFiles") : "" });
      feedback.classList.add("is-visible", "is-success");
      window.location.href = "mailto:info@gutachapes.ch?subject=" + subject + "&body=" + body;
    });
  }

  applyLanguage(getInitialLanguage());
})();
