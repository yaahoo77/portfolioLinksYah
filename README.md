# portfolioLinksYah

Osobista strona z linkami (w stylu Linktree) – profil, status z Discorda, odtwarzacz muzyki i filmy z Letterboxd.

## Co jest na stronie

- **Profil** – zdjęcie, nick, cytat i lokalizacja.
- **Discord** – aktualny status i avatar pobierane na żywo z API [Lanyard](https://github.com/Phineas/lanyard).
- **Slack** i **linki do sociali** – Instagram, Spotify, Steam, Letterboxd, GitHub, e-mail.
- **Odtwarzacz muzyki** – play/pause, głośność, przewijanie, licznik czasu i kręcąca się płyta.
- **Filmy** – zwijana karta z ostatnio obejrzanym filmem (RSS z Letterboxd przez rss2json) i ulubionym filmem.
- **Ekran „click to enter”** – przeglądarki blokują autoodtwarzanie dźwięku, więc muzyka startuje po pierwszym kliknięciu.
- **Tło** – animowane cząsteczki ([particles.js](https://github.com/VincentGarreau/particles.js)).

## Struktura plików

```
index.html       – struktura strony
style.css        – wygląd
script.js        – dane z API i odtwarzacz
particles.json   – ustawienia tła
img/             – zdjęcie profilowe, płyta
audio/           – piosenka
icons/           – ikonki
```
Inspired by site guns.lol