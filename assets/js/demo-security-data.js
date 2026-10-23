/* Echter Bericht des Sicherheitschecks für underpressure.ch, erzeugt am 2026-10-23. Englisch übersetzt. */
window.UP_SEC_REPORT = {
 "de": {
  "domain": "underpressure.ch",
  "checkedAt": "2026-10-23T12:02:22.170Z",
  "score": 98,
  "grade": "A",
  "categories": [
   {
    "id": "transport",
    "title": "Verschlüsselung",
    "weight": 25,
    "score": 100,
    "applicable": true,
    "count": 3
   },
   {
    "id": "browser",
    "title": "Schutz im Browser",
    "weight": 20,
    "score": 92,
    "applicable": true,
    "count": 5
   },
   {
    "id": "mail",
    "title": "E-Mail-Schutz",
    "weight": 20,
    "score": 100,
    "applicable": true,
    "count": 4
   },
   {
    "id": "privacy",
    "title": "Datenschutz und Drittanbieter",
    "weight": 15,
    "score": 100,
    "applicable": true,
    "count": 2
   },
   {
    "id": "dns",
    "title": "Namensdienst (DNS)",
    "weight": 10,
    "score": 96,
    "applicable": true,
    "count": 3
   },
   {
    "id": "disclosure",
    "title": "Offengelegte Informationen",
    "weight": 10,
    "score": 100,
    "applicable": true,
    "count": 2
   }
  ],
  "counts": {
   "high": 0,
   "medium": 0,
   "low": 3,
   "info": 6,
   "ok": 10
  },
  "findings": [
   {
    "id": "https-ok",
    "cat": "transport",
    "sev": "ok",
    "title": "HTTPS funktioniert",
    "detail": "Die Seite lädt verschlüsselt und das Zertifikat wird vom Browser akzeptiert."
   },
   {
    "id": "http-redirect",
    "cat": "transport",
    "sev": "ok",
    "title": "http:// leitet auf https:// um",
    "detail": "Weiterleitung mit Status 301."
   },
   {
    "id": "hsts-ok",
    "cat": "transport",
    "sev": "ok",
    "title": "HSTS ist aktiv",
    "detail": "max-age 31556952 Sekunden."
   },
   {
    "id": "csp-ok",
    "cat": "browser",
    "sev": "ok",
    "title": "Content-Security-Policy ist gesetzt (Meta-Tag)",
    "detail": "Skripte sind auf definierte Quellen eingeschränkt. Die Richtlinie steht als Meta-Tag im HTML. Der Schutz vor Einbettung (frame-ancestors) wirkt nur als HTTP-Header."
   },
   {
    "id": "clickjacking",
    "cat": "browser",
    "sev": "low",
    "title": "Schutz vor Einbettung (Clickjacking) fehlt",
    "detail": "Die Seite darf von fremden Seiten in einem unsichtbaren Rahmen eingebettet werden. Besucher können so zu Klicks verleitet werden, die sie nicht beabsichtigen.",
    "fix": "Einbettung verbieten, falls sie nicht gebraucht wird.",
    "snippet": "X-Frame-Options: SAMEORIGIN\n# oder in der CSP: frame-ancestors 'self'"
   },
   {
    "id": "nosniff",
    "cat": "browser",
    "sev": "low",
    "title": "X-Content-Type-Options fehlt",
    "detail": "Ohne diesen Header darf der Browser Dateitypen erraten und dabei Inhalte als Skript ausführen, die als Bild oder Text gedacht waren.",
    "fix": "Header setzen.",
    "snippet": "X-Content-Type-Options: nosniff"
   },
   {
    "id": "referrer-ok",
    "cat": "browser",
    "sev": "ok",
    "title": "Referrer-Policy ist gesetzt",
    "detail": "über Meta-Tag"
   },
   {
    "id": "permissions",
    "cat": "browser",
    "sev": "info",
    "title": "Permissions-Policy fehlt",
    "detail": "Damit lässt sich festlegen, welche Browserfunktionen (Kamera, Mikrofon, Standort) die Seite und eingebettete Inhalte nutzen dürfen. Kein Mangel, aber eine einfache Härtung.",
    "fix": "Nicht benötigte Funktionen sperren.",
    "snippet": "Permissions-Policy: camera=(), microphone=(), geolocation=()"
   },
   {
    "id": "trackers-none",
    "cat": "privacy",
    "sev": "ok",
    "title": "Keine bekannten Tracking-Dienste auf der Startseite",
    "detail": "Beim Seitenaufruf werden keine bekannten Analyse- oder Werbedienste nachgeladen."
   },
   {
    "id": "privacy-link-ok",
    "cat": "privacy",
    "sev": "ok",
    "title": "Datenschutzerklärung ist verlinkt",
    "detail": "Auf der Startseite ist ein Link zur Datenschutzerklärung vorhanden."
   },
   {
    "id": "mail-nomx",
    "cat": "mail",
    "sev": "info",
    "title": "Domain nimmt keine E-Mails an",
    "detail": "Es gibt keinen Mail-Server-Eintrag (MX). Damit niemand die Domain als gefälschten Absender missbraucht, sollte trotzdem ein SPF-Eintrag 'v=spf1 -all' und eine DMARC-Richtlinie bestehen.",
    "snippet": "underpressure.ch.  TXT  \"v=spf1 -all\"\n_dmarc.underpressure.ch.  TXT  \"v=DMARC1; p=reject;\""
   },
   {
    "id": "spf-ok",
    "cat": "mail",
    "sev": "ok",
    "title": "SPF ist eingerichtet",
    "detail": "Mit ~all: nicht aufgeführte Absender gelten als verdächtig."
   },
   {
    "id": "dmarc-ok",
    "cat": "mail",
    "sev": "ok",
    "title": "DMARC schützt aktiv",
    "detail": "Richtlinie p=reject."
   },
   {
    "id": "dmarc-rua",
    "cat": "mail",
    "sev": "info",
    "title": "DMARC ohne Berichtsadresse",
    "detail": "Ohne rua= erfahren Sie nicht, wer Ihre Domain als Absender verwendet.",
    "fix": "Berichtsadresse ergänzen."
   },
   {
    "id": "dnssec",
    "cat": "dns",
    "sev": "low",
    "title": "DNSSEC nicht aktiv",
    "detail": "Ohne DNSSEC lassen sich DNS-Antworten theoretisch fälschen und Besucher auf falsche Server lenken. Viele Schweizer Registrare und Hoster bieten es mit einem Klick an.",
    "fix": "Bei Registrar oder DNS-Anbieter DNSSEC aktivieren."
   },
   {
    "id": "caa",
    "cat": "dns",
    "sev": "info",
    "title": "Keine CAA-Einträge",
    "detail": "Mit CAA legen Sie fest, welche Zertifizierungsstellen Zertifikate für Ihre Domain ausstellen dürfen. Kleine, wirksame Absicherung.",
    "fix": "CAA-Eintrag für Ihre Zertifizierungsstelle ergänzen.",
    "snippet": "ihre-domain.ch.  CAA  0 issue \"letsencrypt.org\""
   },
   {
    "id": "ipv6",
    "cat": "dns",
    "sev": "info",
    "title": "Kein IPv6",
    "detail": "Die Domain ist nur über IPv4 erreichbar. Kein Sicherheitsmangel, aber zunehmend Standard."
   },
   {
    "id": "version-ok",
    "cat": "disclosure",
    "sev": "ok",
    "title": "Keine Versionsangaben in den Antwortköpfen",
    "detail": "Server und Framework verraten keine Versionsnummern."
   },
   {
    "id": "securitytxt",
    "cat": "disclosure",
    "sev": "info",
    "title": "Keine security.txt gefunden",
    "detail": "Mit einer kleinen Datei unter /.well-known/security.txt erfahren Sie von entdeckten Schwachstellen, bevor sie jemand ausnutzt.",
    "fix": "Datei mit Kontaktadresse und Ablaufdatum anlegen.",
    "snippet": "Contact: mailto:sicherheit@ihre-firma.ch\nExpires: 2027-12-31T23:59:00.000Z\nPreferred-Languages: de, en"
   }
  ],
  "limitations": [
   "Geprüft werden nur öffentlich abrufbare Informationen der Startseite und des Namensdienstes.",
   "TLS-Versionen, Verschlüsselungsverfahren, Anwendungslogik, Zugriffsrechte und Software-Schwachstellen werden nicht getestet.",
   "Automatische Befunde ersetzen keine Beratung und keine rechtliche Prüfung."
  ]
 },
 "en": {
  "domain": "underpressure.ch",
  "checkedAt": "2026-10-23T12:02:22.170Z",
  "score": 98,
  "grade": "A",
  "categories": [
   {
    "id": "transport",
    "title": "Encryption",
    "weight": 25,
    "score": 100,
    "applicable": true,
    "count": 3
   },
   {
    "id": "browser",
    "title": "Protection in the browser",
    "weight": 20,
    "score": 92,
    "applicable": true,
    "count": 5
   },
   {
    "id": "mail",
    "title": "Email protection",
    "weight": 20,
    "score": 100,
    "applicable": true,
    "count": 4
   },
   {
    "id": "privacy",
    "title": "Privacy and third parties",
    "weight": 15,
    "score": 100,
    "applicable": true,
    "count": 2
   },
   {
    "id": "dns",
    "title": "Name service (DNS)",
    "weight": 10,
    "score": 96,
    "applicable": true,
    "count": 3
   },
   {
    "id": "disclosure",
    "title": "Disclosed information",
    "weight": 10,
    "score": 100,
    "applicable": true,
    "count": 2
   }
  ],
  "counts": {
   "high": 0,
   "medium": 0,
   "low": 3,
   "info": 6,
   "ok": 10
  },
  "findings": [
   {
    "id": "https-ok",
    "cat": "transport",
    "sev": "ok",
    "title": "HTTPS works",
    "detail": "The site loads encrypted and the browser accepts the certificate."
   },
   {
    "id": "http-redirect",
    "cat": "transport",
    "sev": "ok",
    "title": "http:// redirects to https://",
    "detail": "Redirect with status 301."
   },
   {
    "id": "hsts-ok",
    "cat": "transport",
    "sev": "ok",
    "title": "HSTS is active",
    "detail": "max-age 31556952 seconds."
   },
   {
    "id": "csp-ok",
    "cat": "browser",
    "sev": "ok",
    "title": "Content Security Policy is set (meta tag)",
    "detail": "Scripts are restricted to defined sources. The policy is set as a meta tag in the HTML. Protection against embedding (frame-ancestors) only works as an HTTP header."
   },
   {
    "id": "clickjacking",
    "cat": "browser",
    "sev": "low",
    "title": "Protection against embedding (clickjacking) missing",
    "detail": "Other sites may embed this page in an invisible frame. Visitors can be tricked into clicks they did not intend.",
    "fix": "Prohibit embedding if it is not needed.",
    "snippet": "X-Frame-Options: SAMEORIGIN\n# or in the CSP: frame-ancestors 'self'"
   },
   {
    "id": "nosniff",
    "cat": "browser",
    "sev": "low",
    "title": "X-Content-Type-Options missing",
    "detail": "Without this header the browser may guess file types and run content as a script that was meant as an image or text.",
    "fix": "Set the header.",
    "snippet": "X-Content-Type-Options: nosniff"
   },
   {
    "id": "referrer-ok",
    "cat": "browser",
    "sev": "ok",
    "title": "Referrer-Policy is set",
    "detail": "via meta tag"
   },
   {
    "id": "permissions",
    "cat": "browser",
    "sev": "info",
    "title": "Permissions-Policy missing",
    "detail": "It defines which browser features (camera, microphone, location) the site and embedded content may use. Not a defect, but a simple hardening.",
    "fix": "Block features that are not needed.",
    "snippet": "Permissions-Policy: camera=(), microphone=(), geolocation=()"
   },
   {
    "id": "trackers-none",
    "cat": "privacy",
    "sev": "ok",
    "title": "No known tracking services on the home page",
    "detail": "No known analytics or advertising services are loaded when the page is opened."
   },
   {
    "id": "privacy-link-ok",
    "cat": "privacy",
    "sev": "ok",
    "title": "Privacy policy is linked",
    "detail": "The home page links to the privacy policy."
   },
   {
    "id": "mail-nomx",
    "cat": "mail",
    "sev": "info",
    "title": "Domain does not accept email",
    "detail": "There is no mail server record (MX). So that nobody misuses the domain as a forged sender, an SPF record 'v=spf1 -all' and a DMARC policy should still exist.",
    "snippet": "underpressure.ch.  TXT  \"v=spf1 -all\"\n_dmarc.underpressure.ch.  TXT  \"v=DMARC1; p=reject;\""
   },
   {
    "id": "spf-ok",
    "cat": "mail",
    "sev": "ok",
    "title": "SPF is set up",
    "detail": "With ~all: senders not listed are treated as suspicious."
   },
   {
    "id": "dmarc-ok",
    "cat": "mail",
    "sev": "ok",
    "title": "DMARC protects actively",
    "detail": "Policy p=reject."
   },
   {
    "id": "dmarc-rua",
    "cat": "mail",
    "sev": "info",
    "title": "DMARC without report address",
    "detail": "Without rua= you do not learn who uses your domain as a sender.",
    "fix": "Add a report address."
   },
   {
    "id": "dnssec",
    "cat": "dns",
    "sev": "low",
    "title": "DNSSEC not active",
    "detail": "Without DNSSEC, DNS answers could in theory be forged and visitors sent to the wrong servers. Many Swiss registrars and hosts offer it with one click.",
    "fix": "Activate DNSSEC at your registrar or DNS provider."
   },
   {
    "id": "caa",
    "cat": "dns",
    "sev": "info",
    "title": "No CAA records",
    "detail": "With CAA you define which certificate authorities may issue certificates for your domain. A small, effective safeguard.",
    "fix": "Add a CAA record for your certificate authority.",
    "snippet": "your-domain.ch.  CAA  0 issue \"letsencrypt.org\""
   },
   {
    "id": "ipv6",
    "cat": "dns",
    "sev": "info",
    "title": "No IPv6",
    "detail": "The domain is only reachable via IPv4. Not a security defect, but increasingly standard."
   },
   {
    "id": "version-ok",
    "cat": "disclosure",
    "sev": "ok",
    "title": "No version information in response headers",
    "detail": "Server and framework do not reveal version numbers."
   },
   {
    "id": "securitytxt",
    "cat": "disclosure",
    "sev": "info",
    "title": "No security.txt found",
    "detail": "With a small file at /.well-known/security.txt you learn about discovered vulnerabilities before someone exploits them.",
    "fix": "Create the file with a contact address and expiry date.",
    "snippet": "Contact: mailto:security@your-company.ch\nExpires: 2027-12-31T23:59:00.000Z\nPreferred-Languages: de, en"
   }
  ],
  "limitations": [
   "Only publicly available information from the home page and the name service is checked.",
   "TLS versions, cipher suites, application logic, access rights and software vulnerabilities are not tested.",
   "Automatic findings do not replace advice or a legal review."
  ]
 }
};
