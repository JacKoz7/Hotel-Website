# Projekt: Strona Internetowa Hotelu Gosling
![image](https://github.com/JacKoz7/Hotel-strona-internetowa/assets/126762316/f5fa820f-db44-4061-a251-e4f167a99870)
## Opis Projektu
Projekt przedstawia responsywną stronę internetową dla Hotelu Gosling, stworzoną za pomocą HTML, CSS i JavaScript. Strona zawiera informacje o hotelu, jego udogodnieniach oraz system rezerwacji, który symuluje użytkownikom możliwość dokonywania rezerwacji online.

## Funkcjonalności
1. Responsywność: Strona została zaprojektowana z wykorzystaniem Bootstrap, aby zapewnić pełną responsywność na różnych urządzeniach.
2. Formularz Rezerwacji: Rozbudowany formularz rezerwacji zawierający pola tekstowe, przyciski typu radio i checkbox, listę wyboru oraz przyciski typu button. Formularz jest walidowany zarówno w HTML, jak i w JavaScript.
3. Komunikaty o Błędach: Jasne i czytelne komunikaty o błędach wyświetlane są w przypadku niepoprawnych danych.
4. Local Storage: Dane wprowadzone do formularza są zapisywane w lokalnym magazynie danych (localStorage). Dane te mogą być wyświetlane, modyfikowane i usuwane z poziomu interfejsu aplikacji.
5. Asynchroniczne Ładowanie Treści: Wybrane fragmenty strony są modyfikowane za pomocą treści wczytywanych z plików na serwerze w trybie asynchronicznym, z użyciem Fetch API.

![image](https://github.com/JacKoz7/Hotel-strona-internetowa/assets/126762316/ebda10f6-7973-4a75-876d-d27d204fb923)

## Struktura Strony

### index.html:
- Główna strona wprowadzająca do Hotelu Gosling z krótkim opisem i przyciskiem CTA prowadzącym do strony rezerwacji.
- Nawigacja oparta na Bootstrapie i stopka.
- Używa CSS do stylizacji i układu.
  
### Rezerwacja.html
- Strona rezerwacji zawiera szczegółowy formularz rezerwacji.
- Pola formularza obejmują imię, nazwisko, adres e-mail, daty pobytu, dodatkowe usługi i sposób zapłaty.
- JavaScript używany jest do walidacji formularza, obliczania całkowitej ceny na podstawie wyborów użytkownika oraz zapisywania danych formularza w localStorage.
  
### Onas.html
- Strona "O nas" zawiera szczegółowe informacje o hotelu, jego udogodnieniach oraz znanych gościach.
- Fetch API używany jest do asynchronicznego ładowania opinii gości z serwera i wyświetlania ich na stronie.
  
### GaleriaZdjec.html
- Strona galerii zdjęć prezentuje zdjęcia hotelu w formacie pokazu slajdów.
- JavaScript obsługuje funkcjonalność pokazu slajdów.
  
### MojeRezerwacje.html
- Strona umożliwiająca użytkownikom przeglądanie, edytowanie i usuwanie zapisanych rezerwacji.
- Dane są pobierane z localStorage i wyświetlane w przyjaznym dla użytkownika formacie.
  
### EdycjaRezerwacji.html
- Strona do edycji istniejących rezerwacji.
- Formularz jest automatycznie wypełniany danymi wybranej rezerwacji, które mogą być modyfikowane i zapisywane z powrotem do localStorage.
  
### Atrakcje.html
- Strona prezentująca atrakcje dostępne w Hotelu Gosling.
- Trzy sekcje poświęcone basenowi, saunie i siłowni, każda z opisem i zdjęciem.
- Stylizacja i układ zgodne z resztą strony, z użyciem Bootstrap i własnych stylów CSS.

![image](https://github.com/JacKoz7/Hotel-strona-internetowa/assets/126762316/0cbf32d8-7650-42b4-b786-e6335918fb43)

## Wygląd i Styl Strony
Strona Hotelu Gosling została zaprojektowana z myślą o luksusie i elegancji. Główne elementy stylu to:          

1. Kolorystyka: Stonowane kolory z dominującymi odcieniami złota, bieli i brązu, które podkreślają elegancki charakter hotelu.
2. Typografia: Użycie eleganckich fontów takich jak Raleway i Lora, które nadają stronie wyrafinowany wygląd.
3. Układ: Przemyślany układ oparty na Bootstrapie zapewnia responsywność i łatwość nawigacji.
4. Elementy Interaktywne: Przyciski i formularze z efektem powiększenia przy najechaniu kursorem, co poprawia doświadczenie użytkownika.
5. Animacje: Subtelne animacje dodane do elementów takich jak pokazy slajdów w galerii zdjęć.
   
![image](https://github.com/JacKoz7/Hotel-strona-internetowa/assets/126762316/ffa1e70d-b4ed-4866-bf2b-6df13de874ba)

