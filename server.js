// server.js
// Serveur web pour la page de pairing (index.html).
// N'importe pas la logique de pair.js autrement que via son export existant :
//   module.exports = startpairing;
// => Aucune modification de pair.js n'est nécessaire.

const express = require('express');
const path = require('path');
const fs = require('fs');

const startPairing = require('./pair'); // fonction déjà exportée par pair.js

const app = express();
app.use(express.json());

// Sert index.html (et tout autre fichier statique) depuis le dossier public/.
app.use(express.static(path.join(__dirname, 'public')));

const PAIRING_FILE = path.join(__dirname, 'nexstore', 'pairing', 'pairing.json');

// pair.js écrit le code généré dans nexstore/pairing/pairing.json après ~3s.
// On attend/relit ce fichier jusqu'à obtenir un code frais pour CE numéro.
function waitForCode(number, sinceTime, timeoutMs = 20000, intervalMs = 1000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      if (fs.existsSync(PAIRING_FILE)) {
        try {
          const data = JSON.parse(fs.readFileSync(PAIRING_FILE, 'utf8'));
          const ts = new Date(data.timestamp).getTime();
          if (data.number === number && ts >= sinceTime) {
            return resolve(data.code);
          }
        } catch (e) {
          // fichier en cours d'écriture, on retente au prochain tick
        }
      }

      if (Date.now() - start > timeoutMs) {
        return reject(new Error('Délai dépassé : le code n\'a pas été généré à temps. Réessayez.'));
      }

      setTimeout(check, intervalMs);
    };

    check();
  });
}

app.post('/api/pair', async (req, res) => {
  const phone = (req.body && req.body.phone || '').replace(/[^0-9]/g, '');

  if (!phone || phone.length < 8) {
    return res.status(400).json({
      error: "Numéro invalide. Entrez uniquement des chiffres avec l'indicatif (ex: 22890000000)."
    });
  }

  const requestTime = Date.now();

  try {
    await startPairing(phone);           // déclenche pair.js sans le modifier
    const code = await waitForCode(phone, requestTime);
    res.json({ code });
  } catch (err) {
    console.error('Erreur pairing:', err.message);
    res.status(500).json({
      error: 'Impossible de générer le code pour le moment. Réessayez dans quelques secondes.'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Serveur de pairing en ligne : http://localhost:${PORT}`);
});
