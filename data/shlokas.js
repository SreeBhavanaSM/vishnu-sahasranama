/* ==========================================
   VISHNU SAHASRANAMA DATA
   data/shlokas.js
========================================== */

const SHLOKAS = [


{
  id: 0,
  icon: "🙏",
  title: "0",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `श्रीपरमात्मने नमः ।
नारायणं नमस्कृत्य नरं चैव नरोत्तमम् ।
देवीं सरस्वतीं व्यासं ततो जयमुदीरयेत् ॥

ॐ अथ सकलसौभाग्यदायकं श्रीविष्णुसहस्रनामस्तोत्रम् ।
      हरिः ॐ ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Śrī Paramātmane Namaḥ |
Nārāyaṇaṃ Namaskṛtya Naraṃ Caiva Narottamam |
Devīṃ Sarasvatīṃ Vyāsaṃ Tato Jayamudīrayet ||

Oṃ Atha Sakalasaubhāgyadāyakaṃ Śrī Viṣṇusahasranāmastotram |
      Hariḥ Oṃ ||`,
    kn: `ಶ್ರೀ ಪರಮಾತ್ಮನೇ ನಮಃ ।
ನಾರಾಯಣಂ ನಮಸ್ಕೃತ್ಯ ನರಂ ಚೈವ ನರೋತ್ತಮಂ ।
ದೇವೀಂ ಸರಸ್ವತೀಂ ವ್ಯಾಸಂ ತತೋ ಜಯಮುದೀರಯೇತ್ ॥

ಓಂ ಅಥ ಸಕಲಸೌಭಾಗ್ಯದಾಯಕಂ ಶ್ರೀವಿಷ್ಣುಸಹಸ್ರನಾಮಸ್ತೋತ್ರಮ್ ।
      ಹರಿಃ ಓಂ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Śrī = auspicious/divine prefix (reverence)
Parama = supreme/highest · ātman = Self/Soul
Paramātmane = to the Supreme Self (Dative)
Namaḥ = salutation/bow
────────────────────
Nārāyaṇam = Nārāyaṇa (He who dwells in the waters / refuge of all beings)
Namaskṛtya = having offered salutations (root: namas + kṛ)
Naram = Nara (the primordial human / sage)
Ca = and · Eva = indeed/also
Narottamam = Nara + uttama = the best among humans (Nārāyaṇa himself)
────────────────────
Devīm = the Goddess (accusative)
Sarasvatīm = Sarasvatī — Goddess of speech, learning, wisdom
Vyāsam = Sage Vyāsa — compiler of the Mahābhārata
Tataḥ = then/thereafter
Jaya = victory (also the original name of the Mahābhārata)
Udīrayet = should proclaim/recite (causative of ud + īr)
────────────────────
Oṃ = the primordial sound, the sacred syllable
Atha = now/here begins (auspicious commencement)
Sakala = all/complete · saubhāgya = good fortune/auspiciousness
Dāyakam = bestower/giver (root: dā)
Sakalasaubhāgyadāyakam = that which bestows all auspiciousness
Śrī Viṣṇu = Lord Viṣṇu (the all-pervading)
Sahasra = thousand · nāma = names
Stotra = hymn of praise
Śrī Viṣṇusahasranāmastotram = the hymn of the thousand names of Viṣṇu
────────────────────
Hariḥ = Hari (one who removes afflictions — root: hṛ)
Oṃ = the cosmic sound, the absolute
────────────────────`,
    kn: `────────────────────
ಶ್ರೀ = ಮಂಗಲಕರ ಪೂರ್ವಪ್ರತ್ಯಯ (ಗೌರವ)
ಪರಮ = ಸರ್ವೋಚ್ಚ · ಆತ್ಮನ್ = ಆತ್ಮ
ಪರಮಾತ್ಮನೇ = ಪರಮಾತ್ಮನಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
ನಮಃ = ನಮಸ್ಕಾರ
────────────────────
ನಾರಾಯಣಂ = ನಾರಾಯಣ (ಜಲದಲ್ಲಿ ನೆಲೆಸಿದವನು / ಸರ್ವರ ಆಶ್ರಯ)
ನಮಸ್ಕೃತ್ಯ = ನಮಸ್ಕರಿಸಿ (ಧಾತು: ನಮಸ್ + ಕೃ)
ನರಂ = ನರ (ಆದಿ ಮಾನವ / ಋಷಿ)
ಚ = ಮತ್ತು · ಏವ = ನಿಜವಾಗಿಯೂ
ನರೋತ್ತಮಂ = ನರ + ಉತ್ತಮ = ಮಾನವರಲ್ಲಿ ಶ್ರೇಷ್ಠ
────────────────────
ದೇವೀಂ = ದೇವಿಯನ್ನು (ಕರ್ಮಕಾರಕ)
ಸರಸ್ವತೀಂ = ಸರಸ್ವತಿ — ವಾಕ್, ವಿದ್ಯೆ, ಜ್ಞಾನದ ದೇವಿ
ವ್ಯಾಸಂ = ವೇದವ್ಯಾಸ ಋಷಿ — ಮಹಾಭಾರತದ ಕರ್ತೃ
ತತಃ = ತರುವಾಯ/ನಂತರ
ಜಯ = ವಿಜಯ (ಮಹಾಭಾರತದ ಮೂಲ ಹೆಸರು)
ಉದೀರಯೇತ್ = ಉಚ್ಚರಿಸಬೇಕು/ಘೋಷಿಸಬೇಕು
────────────────────
ಓಂ = ಆದಿ ನಾದ, ಪವಿತ್ರ ಅಕ್ಷರ
ಅಥ = ಈಗ/ಆರಂಭ (ಮಂಗಲಕರ ಪ್ರಾರಂಭ)
ಸಕಲ = ಎಲ್ಲಾ · ಸೌಭಾಗ್ಯ = ಮಂಗಳ/ಅದೃಷ್ಟ
ದಾಯಕಂ = ನೀಡುವ (ಧಾತು: ದಾ)
ಸಕಲಸೌಭಾಗ್ಯದಾಯಕಂ = ಎಲ್ಲ ಮಂಗಳಗಳನ್ನು ನೀಡುವ
ಶ್ರೀ ವಿಷ್ಣು = ವ್ಯಾಪಕ ಭಗವಂತ
ಸಹಸ್ರ = ಸಾವಿರ · ನಾಮ = ಹೆಸರು
ಸ್ತೋತ್ರ = ಸ್ತುತಿ
ಶ್ರೀವಿಷ್ಣುಸಹಸ್ರನಾಮಸ್ತೋತ್ರಮ್ = ವಿಷ್ಣುವಿನ ಸಾವಿರ ನಾಮಗಳ ಸ್ತೋತ್ರ
────────────────────
ಹರಿಃ = ಹರಿ (ಕಷ್ಟಗಳನ್ನು ನಿವಾರಿಸುವವನು — ಹೃ ಧಾತು)
ಓಂ = ಬ್ರಹ್ಮನಾದ, ಸರ್ವಾತ್ಮಕ ಶಬ್ದ
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Salutations to the Supreme Self.
Having bowed to Nārāyaṇa and Nara — the greatest among humans —
and to Goddess Sarasvatī and Sage Vyāsa,
let Jaya (the Mahābhārata / this hymn of victory) be proclaimed.

Oṃ. Now begins the Śrī Viṣṇu Sahasranāma Stotra —
the hymn of a thousand names of Viṣṇu —
the bestower of all auspiciousness.
Hari Oṃ.`,
    kn: `ಪರಮಾತ್ಮನಿಗೆ ನಮಸ್ಕಾರ.
ನಾರಾಯಣನಿಗೆ, ನರೋತ್ತಮನಾದ ನರನಿಗೆ,
ದೇವಿ ಸರಸ್ವತಿಗೆ ಮತ್ತು ಋಷಿ ವ್ಯಾಸರಿಗೆ ನಮಸ್ಕರಿಸಿ,
ಜಯವನ್ನು (ಮಹಾಭಾರತವನ್ನು / ಈ ಸ್ತೋತ್ರವನ್ನು) ಉಚ್ಚರಿಸಬೇಕು.

ಓಂ. ಇಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ ಶ್ರೀ ವಿಷ್ಣು ಸಹಸ್ರನಾಮ ಸ್ತೋತ್ರ —
ಎಲ್ಲ ಸೌಭಾಗ್ಯವನ್ನು ನೀಡುವ ವಿಷ್ಣುವಿನ ಸಾವಿರ ನಾಮಗಳ ಸ್ತುತಿ.
ಹರಿಃ ಓಂ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Every sacred text begins with surrender and lineage.
Three bow before us here — Nārāyaṇa (the divine), Nara (the human), Sarasvatī (wisdom), Vyāsa (the transmitter).
This is not mere ritual — it is an acknowledgment:
knowledge flows from the divine, through the human, purified by wisdom, preserved by tradition.
Hari removes what burdens us. Oṃ grounds us in the infinite.
Begin here. Begin with humility.`,
    kn: `ಪ್ರತಿ ಪವಿತ್ರ ಗ್ರಂಥವೂ ಶರಣಾಗತಿ ಮತ್ತು ಪರಂಪರೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.
ಇಲ್ಲಿ ಮೂರು ನಮಸ್ಕಾರಗಳು — ನಾರಾಯಣ (ದೈವ), ನರ (ಮಾನವ), ಸರಸ್ವತಿ (ಜ್ಞಾನ), ವ್ಯಾಸ (ಪರಂಪರೆ).
ಇದು ಕೇವಲ ಆಚರಣೆಯಲ್ಲ — ಇದೊಂದು ಸ್ವೀಕೃತಿ:
ಜ್ಞಾನ ದೈವದಿಂದ ಹರಿದು, ಮಾನವನ ಮೂಲಕ, ಜ್ಞಾನದಿಂದ ಶುದ್ಧವಾಗಿ, ಪರಂಪರೆಯಿಂದ ಸಂರಕ್ಷಿತವಾಗಿದೆ.
ಹರಿ ನಮ್ಮ ಭಾರವನ್ನು ನಿವಾರಿಸುತ್ತಾನೆ. ಓಂ ನಮ್ಮನ್ನು ಅನಂತದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತದೆ.
ಇಲ್ಲಿಂದ ಆರಂಭಿಸಿ. ವಿನಮ್ರತೆಯಿಂದ ಆರಂಭಿಸಿ.`
  }
},

/* ==========================================
   SHLOKA 1
========================================== */

{
  id: 1,
  icon: "🪷",
  title: "1",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।
प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Śuklāmbaradharaṃ Viṣṇuṃ Śaśivarṇaṃ Caturbhujam |
Prasannavadanaṃ Dhyāyet Sarvavighnopaśāntaye ||`,
    kn: `ಶುಕ್ಲಾಂಬರಧರಂ ವಿಷ್ಣುಂ ಶಶಿವರ್ಣಂ ಚತುರ್ಭುಜಮ್ ।
ಪ್ರಸನ್ನವದನಂ ಧ್ಯಾಯೇತ್ ಸರ್ವವಿಘ್ನೋಪಶಾಂತಯೇ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Śukla = white (purity, sattvic quality)
Āmbara = garment / sky (root: ambu — to clothe/surround)
Śuklāmbara = robed in white
  SANDHI: Śukla + āmbara → Śuklāmbara (a+ā = ā)
Dharam = wearing / bearing (root: dhṛ — to hold, to wear)
Śuklāmbaradharam = the one robed in white
────────────────────
Viṣṇum = Viṣṇu (accusative — the object of meditation)
  root: viṣ — to pervade, to be all-pervasive
  He who pervades all existence
────────────────────
Śaśi = moon (śaśa = hare; the moon bears the mark of a hare)
Varṇam = colour / complexion / quality
Śaśivarṇam = moon-complexioned (cool, luminous, serene)
────────────────────
Catur = four
Bhujam = arm (root: bhuj — to enjoy / to curve)
Caturbhujam = four-armed
  The four arms hold: śaṅkha (conch), cakra (discus),
  gadā (mace), padma (lotus)
────────────────────
Prasanna = serene / pleased / clear (root: pra + sad — to settle, to clarify)
Vadanam = face / mouth (root: vad — to speak)
Prasannavadanam = ever-gracious, serene-faced
────────────────────
Dhyāyet = one should meditate upon
  (root: dhyai — to contemplate; optative 3rd person singular)
  The optative mood = gentle injunction, not command
────────────────────
Sarva = all / every
Vighna = obstacle / impediment (vi + ghna — that which strikes against progress)
Upa = removal / towards (prefix indicating proximity/resolution)
Śānti = peace / cessation (root: śam — to be calm, to cease)
Sarvavighnopaśāntaye = for the removal/pacification of all obstacles
  SANDHI: Sarva + vighna + upa + śānti + aye (dative suffix)
  vighna + upa → vighnopa (a+u = o, guṇa sandhi)
────────────────────`,
    kn: `────────────────────
ಶುಕ್ಲ = ಬಿಳಿ (ಶುದ್ಧತೆ, ಸಾತ್ವಿಕ ಗುಣ)
ಅಂಬರ = ವಸ್ತ್ರ / ಆಕಾಶ (ಆವರಿಸುವ ಅರ್ಥ)
ಶುಕ್ಲಾಂಬರ = ಬಿಳಿ ವಸ್ತ್ರ ಧರಿಸಿದ
  ಸಂಧಿ: ಶುಕ್ಲ + ಅಂಬರ → ಶುಕ್ಲಾಂಬರ (ಅ+ಆ = ಆ)
ಧರಂ = ಧರಿಸಿದ (ಧೃ ಧಾತು — ಹಿಡಿ, ಧರಿಸು)
ಶುಕ್ಲಾಂಬರಧರಂ = ಬಿಳಿ ವಸ್ತ್ರ ಧರಿಸಿದವನು
────────────────────
ವಿಷ್ಣುಂ = ವಿಷ್ಣು (ಕರ್ಮಕಾರಕ — ಧ್ಯಾನದ ವಿಷಯ)
  ವಿಷ್ ಧಾತು — ವ್ಯಾಪಿಸು, ಸರ್ವತ್ರ ಇರು
  ಸಮಸ್ತ ಅಸ್ತಿತ್ವದಲ್ಲಿ ವ್ಯಾಪಿಸಿರುವವನು
────────────────────
ಶಶಿ = ಚಂದ್ರ (ಶಶ = ಮೊಲ; ಚಂದ್ರನಲ್ಲಿ ಮೊಲದ ಗುರುತು)
ವರ್ಣಂ = ಬಣ್ಣ / ಕಾಂತಿ / ಗುಣ
ಶಶಿವರ್ಣಂ = ಚಂದ್ರನಂತೆ ಕಾಂತಿಯುಳ್ಳ (ಶೀತಲ, ಪ್ರಕಾಶಮಾನ)
────────────────────
ಚತುರ್ = ನಾಲ್ಕು
ಭುಜಂ = ತೋಳು (ಭುಜ್ ಧಾತು — ಆನಂದಿಸು / ಬಾಗು)
ಚತುರ್ಭುಜಂ = ನಾಲ್ಕು ತೋಳುಳ್ಳ
  ನಾಲ್ಕು ತೋಳುಗಳಲ್ಲಿ: ಶಂಖ, ಚಕ್ರ, ಗದೆ, ಪದ್ಮ
────────────────────
ಪ್ರಸನ್ನ = ಪ್ರಸನ್ನ / ಶಾಂತ / ನಿರ್ಮಲ (ಪ್ರ + ಸದ್ ಧಾತು)
ವದನಂ = ಮುಖ (ವದ್ ಧಾತು — ಮಾತನಾಡು)
ಪ್ರಸನ್ನವದನಂ = ಪ್ರಸನ್ನ ಮುಖದ
────────────────────
ಧ್ಯಾಯೇತ್ = ಧ್ಯಾನಿಸಬೇಕು
  (ಧ್ಯೈ ಧಾತು — ಚಿಂತಿಸು; ವಿಧ್ಯರ್ಥ ತೃತೀಯ ಪುರುಷ ಏಕವಚನ)
  ವಿಧ್ಯರ್ಥ = ಮೃದು ಆಜ್ಞೆ, ಆದೇಶವಲ್ಲ
────────────────────
ಸರ್ವ = ಎಲ್ಲ
ವಿಘ್ನ = ಅಡೆತಡೆ (ವಿ + ಘ್ನ — ಪ್ರಗತಿಗೆ ವಿರೋಧಿಸುವ)
ಉಪ = ನಿವಾರಣೆ / ಹತ್ತಿರ (ಪ್ರತ್ಯಯ)
ಶಾಂತಿ = ಶಾಂತಿ / ನಿಲುಗಡೆ (ಶಮ್ ಧಾತು)
ಸರ್ವವಿಘ್ನೋಪಶಾಂತಯೇ = ಎಲ್ಲ ಅಡೆತಡೆಗಳ ನಿವಾರಣೆಗಾಗಿ
  ಸಂಧಿ: ವಿಘ್ನ + ಉಪ → ವಿಘ್ನೋಪ (ಅ+ಉ = ಓ, ಗುಣ ಸಂಧಿ)
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Meditate upon Viṣṇu —
clothed in white, moon-bright in complexion,
four-armed, ever serene of face.
May all obstacles be removed.`,
    kn: `ವಿಷ್ಣುವನ್ನು ಧ್ಯಾನಿಸಬೇಕು —
ಬಿಳಿ ವಸ್ತ್ರಧಾರಿ, ಚಂದ್ರನಂತೆ ಕಾಂತಿಯುಳ್ಳ,
ನಾಲ್ಕು ಭುಜಗಳನ್ನು ಹೊಂದಿದ,
ಪ್ರಸನ್ನ ಮುಖದ.
ಎಲ್ಲಾ ಅಡೆತಡೆಗಳು ನಿವಾರಣೆಯಾಗಲಿ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Purity is the beginning of all sacred practice.
White = purity of mind and intention
Moon = calm, cool, reflective awareness
Four arms = completeness of divine action — protection, grace, power, liberation
Serene face = the stillness that underlies all creation
Dhyāyet — "one should meditate" — is an invitation, not a command.
The verse does not say who should meditate.
It is addressed to all — always.
Before knowledge, stillness comes first.`,
    kn: `ಪವಿತ್ರ ಅಭ್ಯಾಸದ ಆರಂಭ ಶುದ್ಧತೆ.
ಬಿಳಿ = ಮನಸ್ಸಿನ ಮತ್ತು ಉದ್ದೇಶದ ಶುದ್ಧತೆ
ಚಂದ್ರ = ಶಾಂತ, ಶೀತಲ, ಪ್ರತಿಫಲಿಸುವ ಪ್ರಜ್ಞೆ
ನಾಲ್ಕು ಭುಜ = ದೈವಿಕ ಕಾರ್ಯದ ಸಂಪೂರ್ಣತೆ — ರಕ್ಷಣೆ, ಕರುಣೆ, ಶಕ್ತಿ, ಮೋಕ್ಷ
ಪ್ರಸನ್ನ ಮುಖ = ಸಮಸ್ತ ಸೃಷ್ಟಿಯ ಅಡಿಯಲ್ಲಿರುವ ಸ್ಥಿರತೆ
ಧ್ಯಾಯೇತ್ — "ಧ್ಯಾನಿಸಬೇಕು" — ಆಹ್ವಾನ, ಆದೇಶವಲ್ಲ.
ಯಾರು ಧ್ಯಾನಿಸಬೇಕೆಂದು ಶ್ಲೋಕ ಹೇಳುವುದಿಲ್ಲ.
ಇದು ಎಲ್ಲರಿಗೂ — ಯಾವಾಗಲೂ.
ಜ್ಞಾನಕ್ಕಿಂತ ಮೊದಲು ಶಾಂತಿ ಅಗತ್ಯ.`
  }
},

/* ==========================================
   SHLOKA 2
========================================== */

{
  id: 2,
  icon: "🐘",
  title: "2",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `यस्य द्विरदवक्त्राद्याः पारिषद्याः परः शतम् ।
विघ्नं निघ्नन्ति सततं विष्वक्सेनं तमाश्रये ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Yasya Dviradavaktrādyāḥ Pāriṣadyāḥ Paraḥ Śatam |
Vighnaṃ Nighnanti Satataṃ Viṣvaksenaṃ Tamāśraye ||`,
    kn: `ಯಸ್ಯ ದ್ವಿರದವಕ್ತ್ರಾದ್ಯಾಃ ಪಾರಿಷದ್ಯಾಃ ಪರಃ ಶತಮ್ ।
ವಿಘ್ನಂ ನಿಘ್ನನ್ತಿ ಸತತಂ ವಿಷ್ವಕ್ಸೇನಂ ತಮಾಶ್ರಯೇ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Yasya = whose (genitive of yaḥ — he whose)
────────────────────
Dvi = two · rada = tusk (root: rad — to bite/tear)
Dviradam = elephant (lit. twice-tusked)
Vaktra = face/mouth (root: vac — to speak)
Dviradavaktra = elephant-faced (Gaṇeśa)
Ādyāḥ = and others like him / beginning with (ādi + āḥ plural suffix)
Dviradavaktrādyāḥ = those headed by the elephant-faced one
────────────────────
Pāriṣad = attendant/member of divine assembly (root: pari + sad — to sit around)
Pāriṣadyāḥ = the attendants/retinue (plural nominative)
────────────────────
Paraḥ = more than · Śatam = hundred
Paraḥ Śatam = more than a hundred
────────────────────
Vighnam = obstacle/impediment (vi + ghna — that which strikes against)
Nighnanti = they strike down / destroy
  (ni = down + han = to strike, 3rd person plural present)
Satatam = always/continuously (root: sat — ever-existing)
────────────────────
Viṣvaksena = Viṣṇu's commander of armies
  viṣvak = in all directions · sena = army
  (He who commands armies in all directions)
Tam = him (accusative)
Āśraye = I take refuge in / I surrender to
  (root: ā + śri — to resort to, lean upon)
────────────────────
SANDHI NOTE:
Dviradavaktrā + ādyāḥ → Dviradavaktrādyāḥ (vowel sandhi: ā+ā = ā)
Tam + āśraye → Tamāśraye (vowel sandhi: a+ā = ā)
────────────────────`,
    kn: `────────────────────
ಯಸ್ಯ = ಯಾರ (ಷಷ್ಠೀ ವಿಭಕ್ತಿ — ಯಃ ಶಬ್ದ)
────────────────────
ದ್ವಿ = ಎರಡು · ರದ = ದಂತ (ರದ್ ಧಾತು — ಕಡಿಯು)
ದ್ವಿರದ = ಆನೆ (ಎರಡು ದಂತಗಳುಳ್ಳ)
ವಕ್ತ್ರ = ಮುಖ (ವಚ್ ಧಾತು — ಮಾತನಾಡು)
ದ್ವಿರದವಕ್ತ್ರ = ಆನೆ ಮುಖದವನು (ಗಣೇಶ)
ಆದ್ಯಾಃ = ಮೊದಲಾದ / ಇವರಿಂದ ಆರಂಭಿಸಿ (ಆದಿ + ಆಃ ಬಹುವಚನ)
ದ್ವಿರದವಕ್ತ್ರಾದ್ಯಾಃ = ಗಣೇಶ ಮೊದಲಾದವರು
────────────────────
ಪಾರಿಷದ = ಸಭಾ ಸದಸ್ಯ/ಪರಿಚಾರಕ (ಪರಿ + ಸದ್ — ಸುತ್ತ ಕೂಡುವ)
ಪಾರಿಷದ್ಯಾಃ = ದಿವ್ಯ ಪರಿಚಾರಕರು (ಬಹುವಚನ)
────────────────────
ಪರಃ = ಹೆಚ್ಚು · ಶತಮ್ = ನೂರು
ಪರಃ ಶತಮ್ = ನೂರಕ್ಕೂ ಹೆಚ್ಚು
────────────────────
ವಿಘ್ನಂ = ಅಡೆತಡೆ (ವಿ + ಘ್ನ — ವಿರೋಧಿಸುವ)
ನಿಘ್ನನ್ತಿ = ನಾಶ ಮಾಡುತ್ತಾರೆ
  (ನಿ = ಕೆಳಗೆ + ಹನ್ = ಹೊಡೆ, ಪ್ರಥಮ ಪುರುಷ ಬಹುವಚನ)
ಸತತಂ = ಯಾವಾಗಲೂ/ನಿರಂತರ (ಸತ್ ಧಾತು)
────────────────────
ವಿಷ್ವಕ್ಸೇನ = ವಿಷ್ಣುವಿನ ಸೇನಾಧಿಪತಿ
  ವಿಷ್ವಕ್ = ಎಲ್ಲ ದಿಕ್ಕಿನಲ್ಲಿ · ಸೇನಾ = ಸೇನೆ
  (ಎಲ್ಲ ದಿಕ್ಕಿನ ಸೇನೆಯ ನಾಯಕ)
ತಮ್ = ಅವನನ್ನು (ಕರ್ಮಕಾರಕ)
ಆಶ್ರಯೇ = ಶರಣು ಹೋಗುತ್ತೇನೆ
  (ಆ + ಶ್ರಿ ಧಾತು — ಒರಗು, ಆಶ್ರಯಿಸು)
────────────────────
ಸಂಧಿ ಟಿಪ್ಪಣಿ:
ದ್ವಿರದವಕ್ತ್ರಾ + ಆದ್ಯಾಃ → ದ್ವಿರದವಕ್ತ್ರಾದ್ಯಾಃ (ಸ್ವರ ಸಂಧಿ: ಆ+ಆ = ಆ)
ತಮ್ + ಆಶ್ರಯೇ → ತಮಾಶ್ರಯೇ (ಸ್ವರ ಸಂಧಿ: ಅ+ಆ = ಆ)
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `I take refuge in Viṣvaksena —
whose attendants, more than a hundred,
headed by the elephant-faced Gaṇeśa,
continuously destroy all obstacles.`,
    kn: `ನಾನು ವಿಷ್ವಕ್ಸೇನನಲ್ಲಿ ಶರಣು ಹೋಗುತ್ತೇನೆ —
ಯಾರ ನೂರಕ್ಕೂ ಹೆಚ್ಚು ಪಾರಿಷದ್ಯರು,
ಗಜಮುಖ ಗಣೇಶ ಮೊದಲಾದವರು,
ಎಲ್ಲಾ ವಿಘ್ನಗಳನ್ನು ನಿರಂತರ ನಾಶ ಮಾಡುತ್ತಾರೆ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Before beginning the thousand names of Viṣṇu,
the poet bows to Viṣvaksena — Viṣṇu's own commander.
This is a layered act of humility:
even Viṣṇu's attendants, led by Gaṇeśa, are greater than any obstacle.
The path to the infinite is guarded — not blocked.
Surrender to the guardian before you enter the sacred.
Gaṇeśa clears the way; Viṣvaksena commands the clearing.
Protection precedes revelation.`,
    kn: `ವಿಷ್ಣುವಿನ ಸಾವಿರ ನಾಮಗಳನ್ನು ಆರಂಭಿಸುವ ಮೊದಲು,
ಕವಿ ವಿಷ್ಣುವಿನ ಸ್ವಂತ ಸೇನಾಧಿಪತಿ ವಿಷ್ವಕ್ಸೇನನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತಾನೆ.
ಇದು ವಿನಮ್ರತೆಯ ಒಂದು ಆಳವಾದ ಸಂಕೇತ:
ವಿಷ್ಣುವಿನ ಪಾರಿಷದ್ಯರು ಸಹ, ಗಣೇಶ ಸಹಿತ, ಯಾವ ವಿಘ್ನಕ್ಕಿಂತಲೂ ಶಕ್ತಿಶಾಲಿ.
ಅನಂತದ ಮಾರ್ಗ ರಕ್ಷಿತವಾಗಿದೆ — ತಡೆಯಲ್ಪಟ್ಟಿಲ್ಲ.
ಪವಿತ್ರ ಸ್ಥಳದೊಳಗೆ ಪ್ರವೇಶಿಸುವ ಮೊದಲು ರಕ್ಷಕನಿಗೆ ಶರಣಾಗಿ.
ಗಣೇಶ ದಾರಿ ಮಾಡಿಕೊಡುತ್ತಾನೆ; ವಿಷ್ವಕ್ಸೇನ ಆ ಮಾರ್ಗ ನಿರ್ಮಿಸುತ್ತಾನೆ.
ರಕ್ಷಣೆ ಜ್ಞಾನೋದಯಕ್ಕಿಂತ ಮೊದಲು ಬರುತ್ತದೆ.`
  }
},

{
  id: 3,
  icon: "🧘",
  title: "3",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `व्यासं वसिष्ठनप्तारं शक्तेः पौत्रमकल्मषम् ।
पराशरात्मजं वन्दे शुकतातं तपोनिधिम् ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Vyāsaṃ Vasiṣṭhanaptāraṃ Śakteḥ Pautramakalmṣam |
Parāśarātmajaṃ Vande Śukatātaṃ Taponidhim ||`,
    kn: `ವ್ಯಾಸಂ ವಸಿಷ್ಠನಪ್ತಾರಂ ಶಕ್ತೇಃ ಪೌತ್ರಮಕಲ್ಮಷಮ್ ।
ಪರಾಶರಾತ್ಮಜಂ ವಂದೇ ಶುಕತಾತಂ ತಪೋನಿಧಿಮ್ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Vyāsam = Vyāsa (accusative) — the one who divided/expanded
  (root: vi + as — to spread, arrange, compile)
  He who divided the one Veda into four
────────────────────
Vasiṣṭha = the great sage Vasiṣṭha (one of the saptarṣis)
Naptāram = grandson (naptṛ — descendant, grandchild)
Vasiṣṭhanaptāram = grandson of Vasiṣṭha
────────────────────
Śakteḥ = of Śakti (genitive) — son of Vasiṣṭha, father of Parāśara
Pautram = grandson (pautra — son's son)
Śakteḥ Pautram = grandson of Śakti
────────────────────
Akalmṣam = a + kalmṣa = without blemish/impurity
  kalmṣa = sin, stain, impurity
  Akalmṣam = the spotless, the pure one
────────────────────
Parāśara = the sage Parāśara (Vyāsa's father)
  parā = beyond · śara = arrow/affliction
  (one who has gone beyond affliction)
Ātmajam = son (ātma = self · ja = born of)
Parāśarātmajam = son of Parāśara
  SANDHI: Parāśara + ātmajam → Parāśarātmajam (a+ā = ā)
────────────────────
Vande = I salute / I bow to
  (root: vand — to worship, to reverence; ātmanepada 1st person)
────────────────────
Śuka = Śukadeva — Vyāsa's enlightened son
  (śuka = parrot; he who speaks the truth clearly like a parrot)
Tātam = father (endearing term — dear father)
Śukatātam = father of Śuka (Vyāsa)
────────────────────
Tapas = austerity/penance · nidhi = treasure/storehouse
Taponidhim = treasure-house of austerity
  (one in whom tapas is abundantly stored)
────────────────────
LINEAGE SUMMARY:
Vasiṣṭha → Śakti → Parāśara → Vyāsa → Śukadeva
────────────────────`,
    kn: `────────────────────
ವ್ಯಾಸಂ = ವ್ಯಾಸ (ಕರ್ಮಕಾರಕ) — ವಿಸ್ತರಿಸಿದವನು
  (ವಿ + ಅಸ್ ಧಾತು — ಹರಡು, ವಿಂಗಡಿಸು)
  ಒಂದೇ ವೇದವನ್ನು ನಾಲ್ಕಾಗಿ ವಿಭಾಗಿಸಿದ ಮಹರ್ಷಿ
────────────────────
ವಸಿಷ್ಠ = ಮಹರ್ಷಿ ವಸಿಷ್ಠ (ಸಪ್ತರ್ಷಿಗಳಲ್ಲಿ ಒಬ್ಬರು)
ನಪ್ತಾರಂ = ಮೊಮ್ಮಗ (ನಪ್ತೃ — ವಂಶಜ)
ವಸಿಷ್ಠನಪ್ತಾರಂ = ವಸಿಷ್ಠರ ಮೊಮ್ಮಗ
────────────────────
ಶಕ್ತೇಃ = ಶಕ್ತಿಯ (ಷಷ್ಠೀ ವಿಭಕ್ತಿ) — ವಸಿಷ್ಠರ ಪುತ್ರ, ಪರಾಶರರ ತಂದೆ
ಪೌತ್ರಂ = ಮೊಮ್ಮಗ (ಪುತ್ರನ ಪುತ್ರ)
ಶಕ್ತೇಃ ಪೌತ್ರಂ = ಶಕ್ತಿಯ ಮೊಮ್ಮಗ
────────────────────
ಅಕಲ್ಮಷಂ = ಅ + ಕಲ್ಮಷ = ನಿಷ್ಕಲ್ಮಷ
  ಕಲ್ಮಷ = ಪಾಪ, ಕಲ್ಮಶ, ಮಾಲಿನ್ಯ
  ಅಕಲ್ಮಷಂ = ನಿರ್ಮಲ, ಶುದ್ಧ
────────────────────
ಪರಾಶರ = ಮಹರ್ಷಿ ಪರಾಶರ (ವ್ಯಾಸರ ತಂದೆ)
  ಪರಾ = ಆಚೆ · ಶರ = ಬಾಣ/ಕಷ್ಟ
  (ಕಷ್ಟಗಳನ್ನು ಮೀರಿದವನು)
ಆತ್ಮಜಂ = ಪುತ್ರ (ಆತ್ಮ = ಸ್ವಯಂ · ಜ = ಜನಿಸಿದ)
ಪರಾಶರಾತ್ಮಜಂ = ಪರಾಶರರ ಪುತ್ರ
  ಸಂಧಿ: ಪರಾಶರ + ಆತ್ಮಜಂ → ಪರಾಶರಾತ್ಮಜಂ (ಅ+ಆ = ಆ)
────────────────────
ವಂದೇ = ನಾನು ವಂದಿಸುತ್ತೇನೆ / ನಮಸ್ಕರಿಸುತ್ತೇನೆ
  (ವಂದ್ ಧಾತು — ಪೂಜಿಸು; ಆತ್ಮನೇಪದ ಉತ್ತಮ ಪುರುಷ)
────────────────────
ಶುಕ = ಶುಕದೇವ — ವ್ಯಾಸರ ಜ್ಞಾನಿ ಪುತ್ರ
  (ಶುಕ = ಗಿಳಿ; ಸತ್ಯವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನುಡಿಯುವವನು)
ತಾತಂ = ತಂದೆ (ಪ್ರೀತಿಯ ಸಂಬೋಧನ)
ಶುಕತಾತಂ = ಶುಕನ ತಂದೆ (ವ್ಯಾಸ)
────────────────────
ತಪಸ್ = ತಪಸ್ಸು · ನಿಧಿ = ನಿಧಿ/ಭಂಡಾರ
ತಪೋನಿಧಿಂ = ತಪಸ್ಸಿನ ನಿಧಿ
  (ಯಾರಲ್ಲಿ ತಪಸ್ಸು ಸಮೃದ್ಧವಾಗಿ ಸಂಗ್ರಹಿತವಾಗಿದೆಯೋ ಅವನು)
────────────────────
ವಂಶಾವಳಿ ಸಾರಾಂಶ:
ವಸಿಷ್ಠ → ಶಕ್ತಿ → ಪರಾಶರ → ವ್ಯಾಸ → ಶುಕದೇವ
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `I bow to Vyāsa —
grandson of Vasiṣṭha, grandson of Śakti,
son of Parāśara, spotless and pure,
father of Śuka, a treasury of austerity.`,
    kn: `ನಾನು ವ್ಯಾಸರಿಗೆ ವಂದಿಸುತ್ತೇನೆ —
ವಸಿಷ್ಠರ ಮೊಮ್ಮಗ, ಶಕ್ತಿಯ ಮೊಮ್ಮಗ,
ಪರಾಶರರ ಪುತ್ರ, ನಿಷ್ಕಲ್ಮಷ ಮತ್ತು ಶುದ್ಧ,
ಶುಕನ ತಂದೆ, ತಪಸ್ಸಿನ ನಿಧಿ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Vyāsa is introduced not by his works, but by his lineage and his purity.
Five identities anchor him: grandson, grandson, son, father, ascetic.
He is the meeting point of two rivers —
the wisdom flowing down from Vasiṣṭha through Śakti and Parāśara,
and the wisdom flowing forward to Śuka.
Akalmṣam — spotless — is the heart of this verse.
A vessel must be clean before it can carry the sacred.
Vyāsa was that vessel for all of humanity.`,
    kn: `ವ್ಯಾಸರನ್ನು ಅವರ ಕೃತಿಗಳಿಂದಲ್ಲ, ಬದಲಾಗಿ ಅವರ ವಂಶ ಮತ್ತು ಶುದ್ಧತೆಯಿಂದ ಪರಿಚಯಿಸಲಾಗಿದೆ.
ಐದು ಪರಿಚಯಗಳು — ಮೊಮ್ಮಗ, ಮೊಮ್ಮಗ, ಪುತ್ರ, ತಂದೆ, ತಪಸ್ವಿ.
ಅವರು ಎರಡು ನದಿಗಳ ಸಂಗಮ ಸ್ಥಾನ —
ವಸಿಷ್ಠರಿಂದ ಶಕ್ತಿ ಮತ್ತು ಪರಾಶರರ ಮೂಲಕ ಹರಿದು ಬಂದ ಜ್ಞಾನ,
ಮತ್ತು ಮುಂದೆ ಶುಕನಿಗೆ ಹರಿದ ಜ್ಞಾನ.
ಅಕಲ್ಮಷಂ — ನಿರ್ಮಲ — ಇದು ಈ ಶ್ಲೋಕದ ಹೃದಯ.
ಪವಿತ್ರ ವಸ್ತುವನ್ನು ಹೊತ್ತುಕೊಳ್ಳಲು ಪಾತ್ರೆ ಶುದ್ಧವಾಗಿರಬೇಕು.
ವ್ಯಾಸರು ಇಡೀ ಮಾನವಜಾತಿಗೆ ಆ ಶುದ್ಧ ಪಾತ್ರೆಯಾಗಿದ್ದರು.`
  }
},
{
  id: 4,
  icon: "🕉️",
  title: "4",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `व्यासाय विष्णुरूपाय व्यासरूपाय विष्णवे ।
नमो वै ब्रह्मनिधये वासिष्ठाय नमो नमः ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Vyāsāya Viṣṇurūpāya Vyāsarūpāya Viṣṇave |
Namo Vai Brahmanidhaye Vāsiṣṭhāya Namo Namaḥ ||`,
    kn: `ವ್ಯಾಸಾಯ ವಿಷ್ಣುರೂಪಾಯ ವ್ಯಾಸರೂಪಾಯ ವಿಷ್ಣವೇ ।
ನಮೋ ವೈ ಬ್ರಹ್ಮನಿಧಯೇ ವಾಸಿಷ್ಠಾಯ ನಮೋ ನಮಃ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Vyāsāya = to Vyāsa (dative — the one being honoured)
Viṣṇu = the all-pervading Lord
Rūpāya = to the one who has the form of (rūpa = form)
Viṣṇurūpāya = to the one who is Viṣṇu in form
  (Vyāsa is Viṣṇu manifested as the sage)
────────────────────
Vyāsarūpāya = to the one who has the form of Vyāsa
Viṣṇave = to Viṣṇu (dative of Viṣṇu)
  (Viṣṇu manifested as Vyāsa)
────────────────────
POETIC MIRROR (chiasmus):
  Vyāsa [who is] Viṣṇu-formed ↔ Viṣṇu [who is] Vyāsa-formed
  They are one and the same — seen from two directions.
────────────────────
Namaḥ = salutation/bow
Vai = indeed/truly (emphatic particle)
Brahma = the Absolute / the Veda
Nidhi = treasure/repository
Brahmanidhaye = to the treasure-house of Brahman/the Vedas
  (dative of brahmanidhi)
────────────────────
Vāsiṣṭhāya = to the one of Vasiṣṭha's lineage
  (vāsiṣṭha = descendant of Vasiṣṭha; dative)
Namo Namaḥ = salutations, again and again
  (the repetition signals deepest reverence)
────────────────────
SANDHI NOTE:
Namo + vai → Namo vai (visarga sandhi: namaḥ before v becomes namo)
Namo + namaḥ → Namo namaḥ (same visarga sandhi rule)
────────────────────`,
    kn: `────────────────────
ವ್ಯಾಸಾಯ = ವ್ಯಾಸರಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
ವಿಷ್ಣು = ಸರ್ವವ್ಯಾಪಿ ಭಗವಂತ
ರೂಪಾಯ = ರೂಪ ಹೊಂದಿದವನಿಗೆ (ರೂಪ = ಸ್ವರೂಪ)
ವಿಷ್ಣುರೂಪಾಯ = ವಿಷ್ಣುವಿನ ರೂಪದಲ್ಲಿರುವವನಿಗೆ
  (ವ್ಯಾಸರು ಋಷಿಯ ರೂಪದಲ್ಲಿ ಅವತರಿಸಿದ ವಿಷ್ಣು)
────────────────────
ವ್ಯಾಸರೂಪಾಯ = ವ್ಯಾಸನ ರೂಪದಲ್ಲಿರುವವನಿಗೆ
ವಿಷ್ಣವೇ = ವಿಷ್ಣುವಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
  (ವ್ಯಾಸನ ರೂಪದಲ್ಲಿ ಅವತರಿಸಿದ ವಿಷ್ಣು)
────────────────────
ಕಾವ್ಯ ದರ್ಪಣ (ಚಿಯಾಸ್ಮಸ್):
  ವ್ಯಾಸ [ಅವನೇ] ವಿಷ್ಣು-ರೂಪ ↔ ವಿಷ್ಣು [ಅವನೇ] ವ್ಯಾಸ-ರೂಪ
  ಎರಡು ದಿಕ್ಕಿನಿಂದ ನೋಡಿದ ಒಂದೇ ಸತ್ಯ.
────────────────────
ನಮಃ = ನಮಸ್ಕಾರ
ವೈ = ನಿಜವಾಗಿಯೂ (ಒತ್ತಾಯ ಸೂಚಕ)
ಬ್ರಹ್ಮ = ಪರಮಾತ್ಮ / ವೇದ
ನಿಧಿ = ನಿಧಿ / ಭಂಡಾರ
ಬ್ರಹ್ಮನಿಧಯೇ = ಬ್ರಹ್ಮ/ವೇದಗಳ ನಿಧಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
────────────────────
ವಾಸಿಷ್ಠಾಯ = ವಸಿಷ್ಠ ವಂಶಜನಿಗೆ
  (ವಾಸಿಷ್ಠ = ವಸಿಷ್ಠರ ವಂಶಸ್ಥ; ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
ನಮೋ ನಮಃ = ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ
  (ಪುನರಾವರ್ತನೆ ಗಾಢ ಭಕ್ತಿಯ ಸಂಕೇತ)
────────────────────
ಸಂಧಿ ಟಿಪ್ಪಣಿ:
ನಮಃ + ವೈ → ನಮೋ ವೈ (ವಿಸರ್ಗ ಸಂಧಿ: ವ್ ಮೊದಲು ಃ = ಓ)
ನಮಃ + ನಮಃ → ನಮೋ ನಮಃ (ಅದೇ ವಿಸರ್ಗ ಸಂಧಿ ನಿಯಮ)
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Salutations to Vyāsa who is Viṣṇu in form,
salutations to Viṣṇu who appears as Vyāsa.
Truly, salutations to the treasury of Brahman,
to the one of Vasiṣṭha's lineage — salutations, again and again.`,
    kn: `ವಿಷ್ಣುರೂಪಿ ವ್ಯಾಸರಿಗೆ ನಮಸ್ಕಾರ,
ವ್ಯಾಸರೂಪಿ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.
ನಿಜವಾಗಿಯೂ ಬ್ರಹ್ಮದ ನಿಧಿಗೆ ನಮಸ್ಕಾರ,
ವಸಿಷ್ಠ ವಂಶಜನಿಗೆ — ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `This verse is a perfect mirror — a chiasmus.
Vyāsa is Viṣṇu. Viṣṇu is Vyāsa.
The sage and the divine are not two things looking at each other —
they are one reality seen from two directions.
This is Advaita expressed not in philosophy, but in grammar.
The repetition of Namo Namaḥ is not redundancy — it is reverence deepening.
When you bow twice, the second bow is humbler than the first.
The Vedas are not just scriptures here — they are Brahman itself, stored in a human form.`,
    kn: `ಈ ಶ್ಲೋಕ ಒಂದು ಪರಿಪೂರ್ಣ ದರ್ಪಣ — ಚಿಯಾಸ್ಮಸ್.
ವ್ಯಾಸರೇ ವಿಷ್ಣು. ವಿಷ್ಣುವೇ ವ್ಯಾಸ.
ಋಷಿ ಮತ್ತು ದೈವ ಎರಡು ಬೇರೆ ವಸ್ತುಗಳಲ್ಲ —
ಎರಡು ದಿಕ್ಕಿನಿಂದ ಕಂಡ ಒಂದೇ ಸತ್ಯ.
ಇದು ತತ್ವಶಾಸ್ತ್ರದಲ್ಲಲ್ಲ, ವ್ಯಾಕರಣದಲ್ಲಿ ವ್ಯಕ್ತವಾದ ಅದ್ವೈತ.
ನಮೋ ನಮಃ ಎಂಬ ಪುನರಾವರ್ತನೆ ಅನಾವಶ್ಯಕವಲ್ಲ — ಇದು ಗಾಢವಾಗುವ ಭಕ್ತಿ.
ಎರಡು ಬಾರಿ ನಮಸ್ಕರಿಸಿದಾಗ, ಎರಡನೆಯ ನಮಸ್ಕಾರ ಮೊದಲಿಗಿಂತ ಹೆಚ್ಚು ವಿನಮ್ರ.
ವೇದಗಳು ಇಲ್ಲಿ ಕೇವಲ ಗ್ರಂಥಗಳಲ್ಲ — ಅವು ಮಾನವ ರೂಪದಲ್ಲಿ ಸಂಗ್ರಹಿತವಾದ ಬ್ರಹ್ಮನೇ ಆಗಿವೆ.`
  }
},

{
  id: 5,
  icon: "✨",
  title: "5",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `अविकाराय शुद्धाय नित्याय परमात्मने ।
सदैकरूपरूपाय विष्णवे सर्वजिष्णवे ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Avikārāya Śuddhāya Nityāya Paramātmane |
Sadaikarūparūpāya Viṣṇave Sarvajīṣṇave ||`,
    kn: `ಅವಿಕಾರಾಯ ಶುದ್ಧಾಯ ನಿತ್ಯಾಯ ಪರಮಾತ್ಮನೇ ।
ಸದೈಕರೂಪರೂಪಾಯ ವಿಷ್ಣವೇ ಸರ್ವಜಿಷ್ಣವೇ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
A = not / without (negative prefix)
Vikāra = change / modification / distortion
  (root: vi + kṛ — to alter, to transform)
Avikārāya = to the one who is changeless / immutable
  (dative — the one being saluted)
────────────────────
Śuddhāya = to the one who is pure / untainted
  (root: śudh — to purify; past passive participle as adjective)
  Pure not merely of sin — pure of all limitation
────────────────────
Nityāya = to the one who is eternal / permanent
  (root: ni + tyā — that which always remains)
  Not merely long-lasting — beyond time itself
────────────────────
Parama = supreme / highest
Ātmane = to the Self / Soul (dative of ātman)
Paramātmane = to the Supreme Self
  The Self that underlies all individual selves
────────────────────
Sadā = always / at all times (adverb of eternity)
Eka = one / singular / alone
Rūpa = form / appearance (root: rū — to flow into shape)
Sadaikarūpa = always of one form / ever unchanging in appearance
  SANDHI: Sadā + eka → Sadaika (ā+e = ai, vṛddhi sandhi)
Rūpāya = to the one who has that form (dative)
Sadaikarūparūpāya = to the one whose form is always and only one
  (The repetition of rūpa is deliberate — form itself is his nature)
────────────────────
Viṣṇave = to Viṣṇu (dative)
  root: viṣ — to pervade
────────────────────
Sarva = all
Jiṣṇu = victorious / conquering (root: ji — to conquer)
Sarvajīṣṇave = to the one who is victorious over all / all-conquering
  (dative of sarvajīṣṇu)
────────────────────
STRUCTURAL NOTE:
Five attributes cascade in dative:
Avikāra (changeless) → Śuddha (pure) → Nitya (eternal)
→ Paramātman (Supreme Self) → Sadaikarūpa (ever one-formed)
Each refines the previous — together they define the Absolute.
────────────────────`,
    kn: `────────────────────
ಅ = ಇಲ್ಲದ / ರಹಿತ (ನಿಷೇಧ ಪ್ರತ್ಯಯ)
ವಿಕಾರ = ಬದಲಾವಣೆ / ವಿಕೃತಿ
  (ವಿ + ಕೃ ಧಾತು — ಪರಿವರ್ತಿಸು)
ಅವಿಕಾರಾಯ = ಬದಲಾಗದವನಿಗೆ / ನಿರ್ವಿಕಾರನಿಗೆ
  (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
────────────────────
ಶುದ್ಧಾಯ = ಶುದ್ಧನಿಗೆ / ನಿರ್ಮಲನಿಗೆ
  (ಶುಧ್ ಧಾತು — ಶುದ್ಧಿಗೊಳಿಸು)
  ಕೇವಲ ಪಾಪರಹಿತವಲ್ಲ — ಎಲ್ಲ ಮಿತಿಗಳಿಂದ ಮುಕ್ತ
────────────────────
ನಿತ್ಯಾಯ = ನಿತ್ಯನಿಗೆ / ಶಾಶ್ವತನಿಗೆ
  (ನಿ + ತ್ಯಾ — ಯಾವಾಗಲೂ ಉಳಿಯುವ)
  ದೀರ್ಘಕಾಲ ಮಾತ್ರವಲ್ಲ — ಕಾಲಾತೀತ
────────────────────
ಪರಮ = ಸರ್ವೋಚ್ಚ
ಆತ್ಮನೇ = ಆತ್ಮನಿಗೆ (ಆತ್ಮನ್ ಶಬ್ದ, ಚತುರ್ಥೀ)
ಪರಮಾತ್ಮನೇ = ಪರಮಾತ್ಮನಿಗೆ
  ಎಲ್ಲ ವ್ಯಕ್ತಿಗತ ಆತ್ಮಗಳಿಗೆ ಆಧಾರವಾದ ಆತ್ಮ
────────────────────
ಸದಾ = ಯಾವಾಗಲೂ (ಶಾಶ್ವತ ಕಾಲ ಕ್ರಿಯಾವಿಶೇಷಣ)
ಏಕ = ಒಂದು / ಏಕಮೇವ
ರೂಪ = ರೂಪ / ಸ್ವರೂಪ (ರೂ ಧಾತು)
ಸದೈಕರೂಪ = ಯಾವಾಗಲೂ ಒಂದೇ ರೂಪದ
  ಸಂಧಿ: ಸದಾ + ಏಕ → ಸದೈಕ (ಆ+ಏ = ಐ, ವೃದ್ಧಿ ಸಂಧಿ)
ರೂಪಾಯ = ಆ ರೂಪವುಳ್ಳವನಿಗೆ
ಸದೈಕರೂಪರೂಪಾಯ = ಯಾರ ರೂಪ ಯಾವಾಗಲೂ ಒಂದೇ ಆಗಿರುವನಿಗೆ
  (ರೂಪ ಪದದ ಪುನರಾವರ್ತನೆ ಉದ್ದೇಶಪೂರ್ವಕ — ರೂಪವೇ ಅವನ ಸ್ವಭಾವ)
────────────────────
ವಿಷ್ಣವೇ = ವಿಷ್ಣುವಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
  ವಿಷ್ ಧಾತು — ವ್ಯಾಪಿಸು
────────────────────
ಸರ್ವ = ಎಲ್ಲ
ಜಿಷ್ಣು = ವಿಜಯಶಾಲಿ (ಜಿ ಧಾತು — ಜಯಿಸು)
ಸರ್ವಜಿಷ್ಣವೇ = ಎಲ್ಲವನ್ನೂ ಜಯಿಸಿದವನಿಗೆ
────────────────────
ರಚನಾ ಟಿಪ್ಪಣಿ:
ಐದು ವಿಶೇಷಣಗಳು ಚತುರ್ಥೀ ವಿಭಕ್ತಿಯಲ್ಲಿ:
ಅವಿಕಾರ → ಶುದ್ಧ → ನಿತ್ಯ → ಪರಮಾತ್ಮ → ಸದೈಕರೂಪ
ಪ್ರತಿಯೊಂದೂ ಹಿಂದಿನದನ್ನು ಪರಿಷ್ಕರಿಸುತ್ತದೆ —
ಒಟ್ಟಾಗಿ ಅವು ಪರಮ ತತ್ವವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತವೆ.
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Salutations to Viṣṇu —
the changeless, the pure, the eternal,
the Supreme Self,
ever of one unchanging form,
the all-conquering one.`,
    kn: `ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ —
ನಿರ್ವಿಕಾರ, ಶುದ್ಧ, ನಿತ್ಯ,
ಪರಮಾತ್ಮ,
ಯಾವಾಗಲೂ ಒಂದೇ ರೂಪದ,
ಸರ್ವಜಯಶಾಲಿ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `The world we live in is defined by change —
seasons shift, bodies age, empires fall, minds waver.
This verse points to what does not change.
Avikāra — the changeless — is not emptiness; it is the ground beneath all change.
Śuddha — the pure — not clean from washing, but never touched by impurity at all.
Nitya — the eternal — not old, but outside of time entirely.
Sadaikarūparūpāya is the most profound: his form is always, only, one.
Diversity in creation. Unity in the creator.
The all-conquering one does not fight —
he simply is, while all else passes.`,
    kn: `ನಾವು ವಾಸಿಸುವ ಜಗತ್ತು ಬದಲಾವಣೆಯಿಂದ ವ್ಯಾಖ್ಯಾನಿತವಾಗಿದೆ —
ಋತುಗಳು ಬದಲಾಗುತ್ತವೆ, ದೇಹ ಮುಪ್ಪಾಗುತ್ತದೆ, ಸಾಮ್ರಾಜ್ಯಗಳು ಅಳಿಯುತ್ತವೆ, ಮನಸ್ಸು ತೂಗಾಡುತ್ತದೆ.
ಈ ಶ್ಲೋಕ ಬದಲಾಗದ್ದನ್ನು ತೋರಿಸುತ್ತದೆ.
ಅವಿಕಾರ — ನಿರ್ವಿಕಾರ — ಶೂನ್ಯವಲ್ಲ; ಎಲ್ಲ ಬದಲಾವಣೆಯ ಅಡಿಯಲ್ಲಿರುವ ಭೂಮಿ.
ಶುದ್ಧ — ತೊಳೆದು ಶುದ್ಧವಾದದ್ದಲ್ಲ, ಮಾಲಿನ್ಯ ಎಂದೂ ಸ್ಪರ್ಶಿಸದ್ದು.
ನಿತ್ಯ — ಹಳೆಯದಲ್ಲ, ಕಾಲದ ಹೊರಗಿರುವದು.
ಸದೈಕರೂಪರೂಪಾಯ ಅತ್ಯಂತ ಗಹನ: ಅವನ ರೂಪ ಯಾವಾಗಲೂ, ಕೇವಲ, ಒಂದೇ.
ಸೃಷ್ಟಿಯಲ್ಲಿ ವೈವಿಧ್ಯ. ಸ್ರಷ್ಟನಲ್ಲಿ ಏಕತೆ.
ಸರ್ವಜಯಶಾಲಿ ಯುದ್ಧ ಮಾಡುವುದಿಲ್ಲ —
ಅವನು ಇರುತ್ತಾನೆ, ಉಳಿದೆಲ್ಲವೂ ಕಳೆದುಹೋಗುತ್ತದೆ.`
  }
},
{
  id: 6,
  icon: "🌊",
  title: "6",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `यस्य स्मरणमात्रेण जन्मसंसारबन्धनात् ।
विमुच्यते नमस्तस्मै विष्णवे प्रभविष्णवे ॥
ॐ नमो विष्णवे प्रभविष्णवे ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Yasya Smaraṇamātreṇa Janmasaṃsārabandhanāt |
Vimucyate Namastasmai Viṣṇave Prabhaviṣṇave ||
Oṃ Namo Viṣṇave Prabhaviṣṇave ||`,
    kn: `ಯಸ್ಯ ಸ್ಮರಣಮಾತ್ರೇಣ ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ ।
ವಿಮುಚ್ಯತೇ ನಮಸ್ತಸ್ಮೈ ವಿಷ್ಣವೇ ಪ್ರಭವಿಷ್ಣವೇ ॥
ಓಂ ನಮೋ ವಿಷ್ಣವೇ ಪ್ರಭವಿಷ್ಣವೇ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Yasya = whose (genitive of yaḥ — he whose)
────────────────────
Smaraṇa = remembrance / recollection
  (root: smṛ — to remember, to call to mind)
Mātreṇa = by merely / by alone (instrumental of mātra)
  mātra = measure, only, just
Smaraṇamātreṇa = by the mere act of remembering
  SANDHI: Smaraṇa + mātreṇa → Smaraṇamātreṇa (a+m = am, no change)
────────────────────
Janma = birth (root: jan — to be born)
Saṃsāra = the cycle of worldly existence
  (root: saṃ + sṛ — to flow together, to wander)
  The endless wheel of birth, death, and rebirth
Bandhana = bondage / binding / fetter
  (root: bandh — to bind, to tie)
Janmasaṃsārabandhanāt = from the bondage of birth and the cycle of saṃsāra
  (ablative — the source of liberation)
────────────────────
Vimucyate = one is liberated / one is released
  (root: vi + muc — to release, to set free)
  (passive present — it happens of itself, to the one who remembers)
  Not "he liberates" — "one becomes liberated"
────────────────────
Namaḥ = salutation
Tasmai = to that one (dative of tat — that)
Namastasmai = salutations to that one
  SANDHI: Namaḥ + tasmai → Namastasmai (visarga + t = st)
────────────────────
Viṣṇave = to Viṣṇu (dative)
────────────────────
Pra = forth / forward / exceedingly (prefix of intensity)
Bhaviṣṇu = one who is / who becomes / who exists powerfully
  (root: bhū — to be, to become; future active participle)
Prabhaviṣṇave = to the supremely powerful one / to the one who eminently is
  (He who is existence itself in its fullest expression)
────────────────────
GRAMMATICAL HIGHLIGHT:
Vimucyate is passive voice — liberation is not earned, it happens.
The mere act of remembrance (smaraṇamātreṇa) is sufficient.
No ritual, no pilgrimage, no penance — only remembrance.
────────────────────
Oṃ = the primordial syllable, the cosmic sound
Namaḥ = salutation (visarga sandhi: namaḥ + v = namo)
Viṣṇave = to Viṣṇu (dative)
Prabhaviṣṇave = to the supremely powerful one (dative)
  (This seals the invocation from the previous verse — a closing benediction)
────────────────────`,
    kn: `────────────────────
ಯಸ್ಯ = ಯಾರ (ಯಃ ಶಬ್ದ ಷಷ್ಠೀ ವಿಭಕ್ತಿ)
────────────────────
ಸ್ಮರಣ = ನೆನಪು / ಸ್ಮರಣೆ
  (ಸ್ಮೃ ಧಾತು — ನೆನಪಿಸಿಕೊಳ್ಳು)
ಮಾತ್ರೇಣ = ಕೇವಲ / ಮಾತ್ರ (ಮಾತ್ರ ಶಬ್ದ, ತೃತೀಯಾ ವಿಭಕ್ತಿ)
ಸ್ಮರಣಮಾತ್ರೇಣ = ಕೇವಲ ನೆನಪಿಸಿಕೊಳ್ಳುವುದರಿಂದ
────────────────────
ಜನ್ಮ = ಜನ್ಮ (ಜನ್ ಧಾತು — ಹುಟ್ಟು)
ಸಂಸಾರ = ಪ್ರಪಂಚದ ಚಕ್ರ
  (ಸಂ + ಸೃ ಧಾತು — ಒಟ್ಟಾಗಿ ಹರಿ, ಅಲೆದಾಡು)
  ಜನ್ಮ-ಮರಣ-ಪುನರ್ಜನ್ಮದ ಅಂತ್ಯವಿಲ್ಲದ ಚಕ್ರ
ಬಂಧನ = ಬಂಧನ / ಕಟ್ಟು
  (ಬಂಧ್ ಧಾತು — ಕಟ್ಟು, ಬಂಧಿಸು)
ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ = ಜನ್ಮ ಮತ್ತು ಸಂಸಾರದ ಬಂಧನದಿಂದ
  (ಪಂಚಮೀ ವಿಭಕ್ತಿ — ಮುಕ್ತಿಯ ಮೂಲ)
────────────────────
ವಿಮುಚ್ಯತೇ = ಮುಕ್ತನಾಗುತ್ತಾನೆ / ಬಿಡುಗಡೆ ಹೊಂದುತ್ತಾನೆ
  (ವಿ + ಮುಚ್ ಧಾತು — ಬಿಡು, ಮುಕ್ತಗೊಳಿಸು)
  (ಕರ್ಮಣಿ ಪ್ರಯೋಗ — ತಾನಾಗಿಯೇ ಆಗುತ್ತದೆ)
  "ಅವನು ಮುಕ್ತಗೊಳಿಸುತ್ತಾನೆ" ಅಲ್ಲ — "ಮುಕ್ತನಾಗುತ್ತಾನೆ"
────────────────────
ನಮಃ = ನಮಸ್ಕಾರ
ತಸ್ಮೈ = ಅವನಿಗೆ (ತತ್ ಶಬ್ದ, ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
ನಮಸ್ತಸ್ಮೈ = ಅವನಿಗೆ ನಮಸ್ಕಾರ
  ಸಂಧಿ: ನಮಃ + ತಸ್ಮೈ → ನಮಸ್ತಸ್ಮೈ (ವಿಸರ್ಗ + ತ = ಸ್ತ)
────────────────────
ವಿಷ್ಣವೇ = ವಿಷ್ಣುವಿಗೆ (ಚತುರ್ಥೀ ವಿಭಕ್ತಿ)
────────────────────
ಪ್ರ = ಮುಂದೆ / ಅತ್ಯಧಿಕ (ತೀವ್ರತೆಯ ಪ್ರತ್ಯಯ)
ಭವಿಷ್ಣು = ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ / ಶಕ್ತಿಯುತನಾಗಿ ಇರುವ
  (ಭೂ ಧಾತು — ಇರು, ಆಗು; ಭವಿಷ್ಯ ಕೃದಂತ)
ಪ್ರಭವಿಷ್ಣವೇ = ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿಯಾದವನಿಗೆ
  (ಅಸ್ತಿತ್ವವೇ ತಾನಾದವನು)
────────────────────
ವ್ಯಾಕರಣ ವಿಶೇಷ:
ವಿಮುಚ್ಯತೇ ಕರ್ಮಣಿ ಪ್ರಯೋಗ — ಮುಕ್ತಿ ಗಳಿಸುವುದಲ್ಲ, ಆಗುತ್ತದೆ.
ಸ್ಮರಣಮಾತ್ರೇಣ — ಕೇವಲ ನೆನಪು ಸಾಕು.
ಯಾವ ಆಚರಣೆ, ತೀರ್ಥಯಾತ್ರೆ, ತಪಸ್ಸು ಬೇಡ — ಕೇವಲ ಸ್ಮರಣೆ.
────────────────────
ಓಂ = ಆದಿ ಅಕ್ಷರ, ಬ್ರಹ್ಮನಾದ
ನಮಃ = ನಮಸ್ಕಾರ (ವಿಸರ್ಗ ಸಂಧಿ: ನಮಃ + ವ = ನಮೋ)
ವಿಷ್ಣವೇ = ವಿಷ್ಣುವಿಗೆ (ಚತುರ್ಥೀ)
ಪ್ರಭವಿಷ್ಣವೇ = ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿಯಾದವನಿಗೆ
  (ಹಿಂದಿನ ಶ್ಲೋಕದ ಆಹ್ವಾನವನ್ನು ಮುಚ್ಚುವ ಮಂಗಲ ವಾಕ್ಯ)
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `By the mere remembrance of whom
one is liberated from the bondage
of birth and the cycle of saṃsāra —
salutations to that Viṣṇu,
the supremely powerful one.
Oṃ. Salutations to Viṣṇu, the supremely powerful.`,
    kn: `ಯಾರ ಕೇವಲ ಸ್ಮರಣೆಯಿಂದ
ಜನ್ಮ ಮತ್ತು ಸಂಸಾರದ ಬಂಧನದಿಂದ
ಮುಕ್ತನಾಗುತ್ತಾನೆ —
ಆ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ,
ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿಯಾದವನಿಗೆ.
ಓಂ. ವಿಷ್ಣುವಿಗೆ, ಪ್ರಭವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `This verse makes an extraordinary claim — liberation by remembrance alone.
Not by knowing all the thousand names.
Not by performing elaborate rituals.
Not by years of penance.
Simply by remembering.
Smaraṇa is not an intellectual act — it is a turning of attention.
The moment you turn toward the source, the river begins to flow homeward.
Vimucyate is passive — you do not liberate yourself.
You remember, and liberation happens.
Janmasaṃsārabandhanāt — three words fused into one chain:
birth → world → bondage.
One remembrance breaks all three.
Prabhaviṣṇu — He who supremely is.
To remember existence itself is to be freed from the illusion of limitation.`,
    kn: `ಈ ಶ್ಲೋಕ ಅಸಾಧಾರಣ ಹೇಳಿಕೆ ನೀಡುತ್ತದೆ — ಕೇವಲ ಸ್ಮರಣೆಯಿಂದ ಮುಕ್ತಿ.
ಸಾವಿರ ನಾಮಗಳ ಜ್ಞಾನದಿಂದಲ್ಲ.
ವಿಸ್ತಾರವಾದ ಆಚರಣೆಗಳಿಂದಲ್ಲ.
ವರ್ಷಗಳ ತಪಸ್ಸಿನಿಂದಲ್ಲ.
ಕೇವಲ ನೆನಪಿಸಿಕೊಳ್ಳುವುದರಿಂದ.
ಸ್ಮರಣ ಬೌದ್ಧಿಕ ಕ್ರಿಯೆಯಲ್ಲ — ಇದು ಗಮನದ ತಿರುವು.
ಮೂಲದ ಕಡೆ ತಿರುಗಿದ ಕ್ಷಣ, ನದಿ ಮನೆ ಕಡೆ ಹರಿಯಲು ಆರಂಭಿಸುತ್ತದೆ.
ವಿಮುಚ್ಯತೇ ಕರ್ಮಣಿ ಪ್ರಯೋಗ — ನೀವು ನಿಮ್ಮನ್ನು ಮುಕ್ತಗೊಳಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ.
ನೀವು ನೆನಪಿಸಿಕೊಳ್ಳುತ್ತೀರಿ, ಮುಕ್ತಿ ಆಗುತ್ತದೆ.
ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ — ಮೂರು ಪದಗಳು ಒಂದೇ ಸರಪಳಿಯಾಗಿ ಬೆಸೆದಿವೆ:
ಜನ್ಮ → ಪ್ರಪಂಚ → ಬಂಧನ.
ಒಂದು ಸ್ಮರಣೆ ಮೂರನ್ನೂ ಮುರಿಯುತ್ತದೆ.
ಪ್ರಭವಿಷ್ಣು — ಅತ್ಯಂತ ಶ್ರೇಷ್ಠವಾಗಿ ಇರುವವನು.
ಅಸ್ತಿತ್ವವನ್ನೇ ನೆನಪಿಸಿಕೊಳ್ಳುವುದು ಮಿತಿಯ ಭ್ರಮೆಯಿಂದ ಮುಕ್ತಗೊಳಿಸುತ್ತದೆ.`
  }
},

{
  id: 7,
  icon: "🙏",
  title: "7",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `श्रीवैशम्पायन उवाच ---
श्रुत्वा धर्मानशेषेण पावनानि च सर्वशः ।
युधिष्ठिरः शान्तनवं पुनरेवाभ्यभाषत ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Śrī Vaiśampāyana Uvāca ---
Śrutvā Dharmānaśeṣeṇa Pāvanāni Ca Sarvaśaḥ |
Yudhiṣṭhiraḥ Śāntanavaṃ Punareva Abhyabhāṣata ||`,
    kn: `ಶ್ರೀ ವೈಶಂಪಾಯನ ಉವಾಚ ---
ಶ್ರುತ್ವಾ ಧರ್ಮಾನಶೇಷೇಣ ಪಾವನಾನಿ ಚ ಸರ್ವಶಃ ।
ಯುಧಿಷ್ಠಿರಃ ಶಾಂತನವಂ ಪುನರೇವಾಭ್ಯಭಾಷತ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Śrī = auspicious (honorific prefix)
Vaiśampāyana = the sage Vaiśampāyana
  (disciple of Vyāsa, narrator of the Mahābhārata to King Janamejaya)
Uvāca = said / spoke
  (root: vac — to speak; perfect tense 3rd person singular)
────────────────────
Śrutvā = having heard (root: śru — to hear; absolutive/gerund)
  (action completed before the main verb — "after hearing")
Dharmān = the dharmas / righteous teachings (accusative plural of dharma)
  (root: dhṛ — that which holds / sustains)
Aśeṣeṇa = completely / without remainder
  (a + śeṣa = without remainder; instrumental singular)
  SANDHI: Dharmān + aśeṣeṇa → Dharmānaśeṣeṇa (n+a = na)
────────────────────
Pāvanāni = the purifying ones / sacred teachings (accusative plural)
  (root: pū — to purify; pāvana = that which purifies)
Ca = and
Sarvaśaḥ = in every way / entirely / completely
  (sarva + śas suffix = in all respects)
────────────────────
Yudhiṣṭhiraḥ = Yudhiṣṭhira (nominative — the subject)
  yuddha = battle · sthira = firm/steady
  (He who stands firm in battle — the eldest Pāṇḍava, king of dharma)
────────────────────
Śāntanavam = the son of Śāntanu (accusative)
  (Śāntanu → Śāntanava = Bhīṣma, born of Śāntanu and Gaṅgā)
  Bhīṣma — the grand-uncle, lying on the bed of arrows at Kurukṣetra
────────────────────
Punar = again
Eva = indeed / precisely (emphatic)
Abhyabhāṣata = addressed / spoke to
  (root: abhi + bhāṣ — to speak toward; imperfect 3rd person singular)
  SANDHI: Punar + eva → Punareva (r+e, no change)
  Punareva + abhyabhāṣata → Punarevābhyabhāṣata (a+a = ā)
────────────────────
CONTEXT NOTE:
The scene: Kurukṣetra. The war is over.
Bhīṣma lies on a bed of arrows, awaiting his chosen death.
Yudhiṣṭhira, tormented by the violence he has witnessed,
approaches him — the eldest, the wisest — with his deepest questions.
Vaiśampāyana narrates this to Janamejaya, great-grandson of Arjuna.
────────────────────`,
    kn: `────────────────────
ಶ್ರೀ = ಮಂಗಲಕರ (ಗೌರವ ಪ್ರತ್ಯಯ)
ವೈಶಂಪಾಯನ = ಮಹರ್ಷಿ ವೈಶಂಪಾಯನ
  (ವ್ಯಾಸರ ಶಿಷ್ಯ, ಮಹಾಭಾರತವನ್ನು ಜನಮೇಜಯ ರಾಜನಿಗೆ ನಿವೇದಿಸಿದವರು)
ಉವಾಚ = ಹೇಳಿದರು (ವಚ್ ಧಾತು; ಲಿಟ್ ಲಕಾರ, ಪ್ರಥಮ ಪುರುಷ)
────────────────────
ಶ್ರುತ್ವಾ = ಕೇಳಿದ ನಂತರ (ಶ್ರು ಧಾತು; ಕ್ತ್ವಾ ಪ್ರತ್ಯಯ)
ಧರ್ಮಾನ್ = ಧರ್ಮಗಳನ್ನು (ಕರ್ಮಕಾರಕ ಬಹುವಚನ)
  (ಧೃ ಧಾತು — ಧಾರಣ ಮಾಡು, ನಿಲ್ಲಿಸು)
ಅಶೇಷೇಣ = ಸಂಪೂರ್ಣವಾಗಿ (ಅ + ಶೇಷ = ಉಳಿಕೆಯಿಲ್ಲದ)
  ಸಂಧಿ: ಧರ್ಮಾನ್ + ಅಶೇಷೇಣ → ಧರ್ಮಾನಶೇಷೇಣ
────────────────────
ಪಾವನಾನಿ = ಪವಿತ್ರೀಕರಿಸುವ ವಿಷಯಗಳನ್ನು (ಕರ್ಮಕಾರಕ ಬಹುವಚನ)
  (ಪೂ ಧಾತು — ಶುದ್ಧಿಗೊಳಿಸು; ಪಾವನ = ಶುದ್ಧಿಗೊಳಿಸುವ)
ಚ = ಮತ್ತು
ಸರ್ವಶಃ = ಎಲ್ಲ ರೀತಿಯಲ್ಲೂ (ಸರ್ವ + ಶಸ್ ಪ್ರತ್ಯಯ)
────────────────────
ಯುಧಿಷ್ಠಿರಃ = ಯುಧಿಷ್ಠಿರ (ಪ್ರಥಮಾ ವಿಭಕ್ತಿ — ಕರ್ತ)
  ಯುದ್ಧ = ಯುದ್ಧ · ಸ್ಥಿರ = ಸ್ಥಿರ/ದೃಢ
  (ಯುದ್ಧದಲ್ಲಿ ದೃಢನಾದವನು — ಧರ್ಮರಾಜ)
────────────────────
ಶಾಂತನವಂ = ಶಂತನುವಿನ ಪುತ್ರನನ್ನು (ಕರ್ಮಕಾರಕ)
  (ಶಂತನು → ಶಾಂತನವ = ಭೀಷ್ಮ)
  ಭೀಷ್ಮ — ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಶರಶಯ್ಯೆಯ ಮೇಲೆ ಮಲಗಿರುವ ಮಹಾಪಿತಾಮಹ
────────────────────
ಪುನರ್ = ಮತ್ತೆ
ಏವ = ನಿಜವಾಗಿಯೂ (ಒತ್ತಾಯ ಸೂಚಕ)
ಅಭ್ಯಭಾಷತ = ಮಾತನಾಡಿಸಿದನು
  (ಅಭಿ + ಭಾಷ್ ಧಾತು; ಲಂಗ್ ಲಕಾರ, ಪ್ರಥಮ ಪುರುಷ)
  ಸಂಧಿ: ಪುನರೇವ + ಅಭ್ಯಭಾಷತ → ಪುನರೇವಾಭ್ಯಭಾಷತ (ಅ+ಅ = ಆ)
────────────────────
ಸಂದರ್ಭ ಟಿಪ್ಪಣಿ:
ಸ್ಥಳ: ಕುರುಕ್ಷೇತ್ರ. ಯುದ್ಧ ಮುಗಿದಿದೆ.
ಭೀಷ್ಮರು ಶರಶಯ್ಯೆಯ ಮೇಲೆ, ತಮ್ಮ ಆಯ್ದ ಮರಣಕ್ಕಾಗಿ ಕಾಯುತ್ತಿದ್ದಾರೆ.
ಯುಧಿಷ್ಠಿರ, ಕಂಡ ಹಿಂಸೆಯಿಂದ ತತ್ತರಿಸಿ,
ಹಿರಿಯ, ಜ್ಞಾನಿ ಭೀಷ್ಮರ ಬಳಿ ತನ್ನ ಆಳವಾದ ಪ್ರಶ್ನೆಗಳನ್ನು ಹಿಡಿದು ಬರುತ್ತಾನೆ.
ವೈಶಂಪಾಯನರು ಇದನ್ನು ಅರ್ಜುನನ ಮರಿಮೊಮ್ಮಗ ಜನಮೇಜಯನಿಗೆ ನಿವೇದಿಸುತ್ತಾರೆ.
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Śrī Vaiśampāyana said:
Having heard all the teachings on dharma completely,
and all the purifying truths in every way,
Yudhiṣṭhira once again addressed
the son of Śāntanu — Bhīṣma.`,
    kn: `ಶ್ರೀ ವೈಶಂಪಾಯನರು ಹೇಳಿದರು:
ಧರ್ಮದ ಎಲ್ಲ ಬೋಧನೆಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕೇಳಿದ ನಂತರ,
ಮತ್ತು ಎಲ್ಲ ಪಾವನ ಸತ್ಯಗಳನ್ನು ಎಲ್ಲ ರೀತಿಯಲ್ಲಿ ಕೇಳಿದ ನಂತರ,
ಯುಧಿಷ್ಠಿರ ಮತ್ತೊಮ್ಮೆ
ಶಂತನುವಿನ ಪುತ್ರ ಭೀಷ್ಮರನ್ನು ಮಾತನಾಡಿಸಿದನು.`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Punareva — "once again."
This single word carries the weight of a soul that is not yet at peace.
Yudhiṣṭhira has heard everything — dharma in all its forms, sacred purifying wisdom —
and still he returns.
This is the mark of a sincere seeker:
not that he has no answers, but that the answers have not yet settled into his bones.
The great teacher Bhīṣma lies dying, an arrow-bed his throne.
And the king who won the war comes to him — not to celebrate, but to ask.
Victory without peace is its own kind of bondage.
The question that follows will unlock the entire Sahasranāma.`,
    kn: `ಪುನರೇವ — "ಮತ್ತೊಮ್ಮೆ."
ಈ ಒಂದು ಪದ ಶಾಂತಿಯಿಲ್ಲದ ಆತ್ಮದ ಭಾರವನ್ನು ಹೊತ್ತಿದೆ.
ಯುಧಿಷ್ಠಿರ ಎಲ್ಲವನ್ನೂ ಕೇಳಿದ್ದಾನೆ — ಎಲ್ಲ ರೂಪದ ಧರ್ಮ, ಪವಿತ್ರ ಜ್ಞಾನ —
ಆದರೂ ಮತ್ತೆ ಬರುತ್ತಾನೆ.
ಇದು ನಿಜವಾದ ಸಾಧಕನ ಲಕ್ಷಣ:
ಅವನಿಗೆ ಉತ್ತರಗಳಿಲ್ಲ ಎಂದಲ್ಲ, ಉತ್ತರಗಳು ಇನ್ನೂ ಅವನ ಮೂಳೆಯಲ್ಲಿ ಇಳಿದಿಲ್ಲ.
ಮಹಾಗುರು ಭೀಷ್ಮರು ಸಾಯುತ್ತಿದ್ದಾರೆ, ಶರಶಯ್ಯೆ ಅವರ ಸಿಂಹಾಸನ.
ಯುದ್ಧ ಗೆದ್ದ ರಾಜ ಅವರ ಬಳಿ ಬರುತ್ತಾನೆ — ಸಂಭ್ರಮಿಸಲಲ್ಲ, ಕೇಳಲು.
ಶಾಂತಿಯಿಲ್ಲದ ವಿಜಯ ಒಂದು ಬಗೆಯ ಬಂಧನ.
ಮುಂದೆ ಬರುವ ಪ್ರಶ್ನೆ ಇಡೀ ಸಹಸ್ರನಾಮವನ್ನು ತೆರೆಯುತ್ತದೆ.`
  }
},
{
  id: 8,
  icon: "👑",
  title: "8",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `युधिष्ठिर उवाच ---
किमेकं दैवतं लोके किं वाप्येकं परायणम् ।
स्तुवन्तः कं कमर्चन्तः प्राप्नुयुर्मानवाः शुभम् ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Yudhiṣṭhira Uvāca ---
Kimekam Daivataṃ Loke Kiṃ Vāpyekaṃ Parāyaṇam |
Stuvantaḥ Kaṃ Kamarcantaḥ Prāpnuyurmānavāḥ Śubham ||`,
    kn: `ಯುಧಿಷ್ಠಿರ ಉವಾಚ ---
ಕಿಮೇಕಂ ದೈವತಂ ಲೋಕೇ ಕಿಂ ವಾಪ್ಯೇಕಂ ಪರಾಯಣಮ್ ।
ಸ್ತುವಂತಃ ಕಂ ಕಮರ್ಚಂತಃ ಪ್ರಾಪ್ನುಯುರ್ಮಾನವಾಃ ಶುಭಮ್ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Yudhiṣṭhira = Yudhiṣṭhira (nominative)
Uvāca = said (root: vac; perfect tense)
────────────────────
Kim = what? (interrogative pronoun, nominative singular neuter)
Ekam = one / single / alone
Daivatam = deity / divine being
  (root: div — to shine; daiva = pertaining to the divine)
Loke = in the world (locative of loka)
Kimekam Daivatam Loke = What is the one deity in this world?
  SANDHI: Kim + ekam → Kimekam (m+e = me — the m becomes an anusvāra before vowel)
────────────────────
Kim = what?
Vā = or (disjunctive particle)
Api = also / even
Ekam = one
Parāyaṇam = the supreme refuge / the ultimate resort
  parā = beyond/supreme · ayana = path/refuge (root: i — to go)
  (That toward which one ultimately goes / the final shelter)
  SANDHI: Vā + api → Vāpi (ā+a = ā, absorbed); Vāpi + ekam → Vāpyekam (i+e = ye)
────────────────────
Stuvantaḥ = those who praise / while praising
  (root: stu — to praise, to laud; present active participle, nominative plural)
Kam = whom? (accusative of kaḥ — who?)
  (the object of praise)
────────────────────
Kam = whom? (accusative — repeated for the second question)
Arcantaḥ = those who worship / while worshipping
  (root: arc — to worship, to honour with rites; present active participle)
  SANDHI: Kam + arcantaḥ → Kamarcantaḥ (m+a = ma)
────────────────────
Prāpnuyuḥ = they would attain / may they obtain
  (root: pra + āp — to reach, to attain; optative 3rd person plural)
  The optative mood = possibility, aspiration, wish
Mānavāḥ = human beings (nominative plural of mānava)
  (root: manu — descended from Manu, the progenitor)
Śubham = auspiciousness / well-being / the good
  (root: śubh — to shine, to be auspicious)
  SANDHI: Prāpnuyuḥ + mānavāḥ → Prāpnuyurmānavāḥ (ḥ+m = r)
────────────────────
STRUCTURAL NOTE — FOUR QUESTIONS IN TWO VERSES:
This verse asks two of the four great questions:
Q1: Who is the one God in this world?
Q2: Who is the one supreme refuge?
Q3 (next verse): Who is the one supreme dharma?
Q4 (next verse): By chanting whom is one liberated?
The entire Sahasranāma is Bhīṣma's answer to these four questions.
────────────────────`,
    kn: `────────────────────
ಯುಧಿಷ್ಠಿರ = ಯುಧಿಷ್ಠಿರ (ಪ್ರಥಮಾ ವಿಭಕ್ತಿ)
ಉವಾಚ = ಹೇಳಿದನು (ವಚ್ ಧಾತು; ಲಿಟ್ ಲಕಾರ)
────────────────────
ಕಿಮ್ = ಯಾವುದು? (ಪ್ರಶ್ನಾರ್ಥಕ ಸರ್ವನಾಮ, ಪ್ರಥಮಾ ನಪುಂಸಕ)
ಏಕಂ = ಒಂದು / ಏಕ
ದೈವತಂ = ದೇವತೆ / ದೈವಿಕ ಶಕ್ತಿ
  (ದಿವ್ ಧಾತು — ಪ್ರಕಾಶಿಸು)
ಲೋಕೇ = ಈ ಜಗತ್ತಿನಲ್ಲಿ (ಲೋಕ ಶಬ್ದ, ಸಪ್ತಮೀ ವಿಭಕ್ತಿ)
ಕಿಮೇಕಂ ದೈವತಂ ಲೋಕೇ = ಈ ಜಗತ್ತಿನಲ್ಲಿ ಒಂದೇ ದೇವತೆ ಯಾವುದು?
  ಸಂಧಿ: ಕಿಮ್ + ಏಕಂ → ಕಿಮೇಕಂ
────────────────────
ಕಿಮ್ = ಯಾವುದು?
ವಾ = ಅಥವಾ
ಅಪಿ = ಸಹ / ಕೂಡ
ಏಕಂ = ಒಂದು
ಪರಾಯಣಂ = ಪರಮ ಆಶ್ರಯ / ಅಂತಿಮ ಗತಿ
  ಪರಾ = ಆಚೆ/ಶ್ರೇಷ್ಠ · ಅಯನ = ಮಾರ್ಗ/ಆಶ್ರಯ (ಇ ಧಾತು — ಹೋಗು)
  ಸಂಧಿ: ವಾ + ಅಪಿ → ವಾಪಿ; ವಾಪಿ + ಏಕಂ → ವಾಪ್ಯೇಕಂ (ಇ+ಏ = ಯೇ)
────────────────────
ಸ್ತುವಂತಃ = ಸ್ತುತಿಸುತ್ತಾ (ಸ್ತು ಧಾತು; ವರ್ತಮಾನ ಕೃದಂತ, ಪ್ರಥಮಾ ಬಹುವಚನ)
ಕಂ = ಯಾರನ್ನು? (ಕಃ ಶಬ್ದ, ದ್ವಿತೀಯಾ — ಸ್ತುತಿಯ ವಿಷಯ)
────────────────────
ಕಂ = ಯಾರನ್ನು? (ಮರಳಿ ದ್ವಿತೀಯಾ — ಎರಡನೇ ಪ್ರಶ್ನೆಗೆ)
ಅರ್ಚಂತಃ = ಪೂಜಿಸುತ್ತಾ (ಅರ್ಚ್ ಧಾತು; ವರ್ತಮಾನ ಕೃದಂತ)
  ಸಂಧಿ: ಕಂ + ಅರ್ಚಂತಃ → ಕಮರ್ಚಂತಃ
────────────────────
ಪ್ರಾಪ್ನುಯುಃ = ಪಡೆಯಬಹುದು / ಪಡೆಯಲಿ
  (ಪ್ರ + ಆಪ್ ಧಾತು; ವಿಧ್ಯರ್ಥ ತೃತೀಯ ಪುರುಷ ಬಹುವಚನ)
ಮಾನವಾಃ = ಮಾನವರು (ಪ್ರಥಮಾ ಬಹುವಚನ)
  (ಮನು → ಮಾನವ = ಮನುವಿನ ವಂಶಜರು)
ಶುಭಂ = ಮಂಗಳ / ಒಳಿತು / ಶ್ರೇಯಸ್ಸು
  ಸಂಧಿ: ಪ್ರಾಪ್ನುಯುಃ + ಮಾನವಾಃ → ಪ್ರಾಪ್ನುಯುರ್ಮಾನವಾಃ (ಃ+ಮ = ರ್)
────────────────────
ರಚನಾ ಟಿಪ್ಪಣಿ — ಎರಡು ಶ್ಲೋಕಗಳಲ್ಲಿ ನಾಲ್ಕು ಮಹಾ ಪ್ರಶ್ನೆಗಳು:
ಪ್ರ.೧: ಈ ಜಗತ್ತಿನ ಒಂದೇ ದೇವರು ಯಾರು?
ಪ್ರ.೨: ಒಂದೇ ಪರಮ ಆಶ್ರಯ ಯಾವುದು?
ಪ್ರ.೩ (ಮುಂದಿನ ಶ್ಲೋಕ): ಒಂದೇ ಪರಮ ಧರ್ಮ ಯಾವುದು?
ಪ್ರ.೪ (ಮುಂದಿನ ಶ್ಲೋಕ): ಯಾರನ್ನು ಜಪಿಸುವುದರಿಂದ ಮುಕ್ತಿ ದೊರೆಯುತ್ತದೆ?
ಇಡೀ ಸಹಸ್ರನಾಮ ಈ ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳಿಗೆ ಭೀಷ್ಮರ ಉತ್ತರ.
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Yudhiṣṭhira said:
What is the one deity in this world?
What alone is the supreme refuge?
By praising whom, by worshipping whom,
may human beings attain auspiciousness?`,
    kn: `ಯುಧಿಷ್ಠಿರ ಹೇಳಿದನು:
ಈ ಜಗತ್ತಿನಲ್ಲಿ ಒಂದೇ ದೇವತೆ ಯಾವುದು?
ಒಂದೇ ಪರಮ ಆಶ್ರಯ ಯಾವುದು?
ಯಾರನ್ನು ಸ್ತುತಿಸುತ್ತಾ, ಯಾರನ್ನು ಪೂಜಿಸುತ್ತಾ,
ಮಾನವರು ಶ್ರೇಯಸ್ಸು ಪಡೆಯಬಹುದು?`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Notice the precision of Yudhiṣṭhira's questions — he asks for the one.
Not the best among many. Not the greatest of a group.
The singular. The non-negotiable. The irreducible.
Kimekam — "what is the ONE?" — is a question that cuts through all theology.
He asks not for doctrine but for direction.
Not for a catalogue of gods but for the single pole star.
Stuvantaḥ, arcantaḥ — praise and worship.
Two distinct paths, one goal: śubham — the good, the auspicious, true well-being.
This question, asked by a broken king to a dying grandfather,
is the seed from which the entire Sahasranāma blooms.`,
    kn: `ಯುಧಿಷ್ಠಿರನ ಪ್ರಶ್ನೆಗಳ ನಿಖರತೆ ಗಮನಿಸಿ — ಅವನು ಒಂದನ್ನೇ ಕೇಳುತ್ತಾನೆ.
ಅನೇಕರಲ್ಲಿ ಉತ್ತಮವಾದದ್ದಲ್ಲ. ಗುಂಪಿನಲ್ಲಿ ಶ್ರೇಷ್ಠವಾದದ್ದಲ್ಲ.
ಏಕ. ಅನಿರಾಕರಣೀಯ. ಅವಿಭಾಜ್ಯ.
ಕಿಮೇಕಂ — "ಒಂದು ಯಾವುದು?" — ಎಲ್ಲ ದೇವತಾಶಾಸ್ತ್ರವನ್ನು ಕತ್ತರಿಸುವ ಪ್ರಶ್ನೆ.
ಅವನು ಸಿದ್ಧಾಂತ ಕೇಳುವುದಿಲ್ಲ, ದಿಕ್ಕು ಕೇಳುತ್ತಾನೆ.
ದೇವತೆಗಳ ಪಟ್ಟಿ ಬೇಡ, ಒಂದೇ ಧ್ರುವತಾರೆ ಬೇಕು.
ಸ್ತುವಂತಃ, ಅರ್ಚಂತಃ — ಸ್ತುತಿ ಮತ್ತು ಪೂಜೆ.
ಎರಡು ಬೇರೆ ಮಾರ್ಗಗಳು, ಒಂದೇ ಗುರಿ: ಶುಭಂ — ಒಳಿತು, ಮಂಗಳ.
ಒಡೆದ ರಾಜ ಸಾಯುತ್ತಿರುವ ಅಜ್ಜನಿಗೆ ಕೇಳಿದ ಈ ಪ್ರಶ್ನೆ,
ಇಡೀ ಸಹಸ್ರನಾಮ ಅರಳುವ ಬೀಜ.`
  }
},
{
  id: 9,
  icon: "🔱",
  title: "9",
  /* ========================= ORIGINAL SHLOKA ========================= */
  verse: `को धर्मः सर्वधर्माणां भवतः परमो मतः ।
किं जपन्मुच्यते जन्तुर्जन्मसंसारबन्धनात् ॥`,
  /* ========================= TRANSLITERATION ========================= */
  transliteration: {
    en: `Ko Dharmaḥ Sarvadharmaṇāṃ Bhavataḥ Paramo Mataḥ |
Kiṃ Japanmucyate Janturjanmasaṃsārabandhanāt ||`,
    kn: `ಕೋ ಧರ್ಮಃ ಸರ್ವಧರ್ಮಾಣಾಂ ಭವತಃ ಪರಮೋ ಮತಃ ।
ಕಿಂ ಜಪನ್ಮುಚ್ಯತೇ ಜಂತುರ್ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ ॥`
  },
  /* ========================= WORD BREAKDOWN + SANDHI ========================= */
  breakdown: {
    en: `────────────────────
Kaḥ = who? / which? (interrogative, nominative masculine singular)
Dharmaḥ = dharma (nominative) — the subject of the question
  (root: dhṛ — to hold, to sustain; that which holds the universe together)
  SANDHI: Kaḥ + dharmaḥ → Ko dharmaḥ (visarga before dh becomes o)
────────────────────
Sarvadharmāṇām = of all the dharmas (genitive plural)
  (among all the paths of righteous conduct)
────────────────────
Bhavataḥ = in your view / according to you (genitive of bhavān — honorific "you")
  bhavān = the respected one / your honour (used to address elders)
  Bhavataḥ = "of you" = in your esteemed opinion
────────────────────
Paramaḥ = the highest / the supreme (nominative)
  (root: para — beyond, transcendent; superlative implied)
Mataḥ = considered / held to be / regarded as
  (root: man — to think; past passive participle)
Paramo Mataḥ = what is held to be supreme
  SANDHI: Paramaḥ + mataḥ → Paramo mataḥ (visarga before m = o)
────────────────────
Kim = what? (interrogative neuter)
Japan = while chanting / by chanting
  (root: jap — to mutter, to repeat softly; present active participle)
  Japa = the sacred practice of repetitive chanting of a name or mantra
Mucyate = one is liberated / released
  (root: muc — to release; passive present 3rd person singular)
  SANDHI: Japan + mucyate → Japanmucyate (n+m = nm, no change in devanāgarī)
────────────────────
Jantuḥ = a living being / creature / person
  (root: jan — to be born; that which is born)
  A deliberately humble, universal word — not "great soul" but simply "any being"
  SANDHI: Mucyate + jantuḥ → Mucyate janturjanma (ḥ+j = rj)
────────────────────
Janma = birth
Saṃsāra = the cycle of worldly existence
Bandhana = bondage / fetter
Janmasaṃsārabandhanāt = from the bondage of birth and the cycle of saṃsāra
  (ablative — source of liberation; identical to verse 6 — deliberate echo)
────────────────────
ECHO NOTE:
Janmasaṃsārabandhanāt appears identically in verse 6.
There it described what Viṣṇu's remembrance breaks.
Here Yudhiṣṭhira asks: by chanting what is one freed from the same?
The question mirrors its own answer — already planted in the preceding verse.
────────────────────`,
    kn: `────────────────────
ಕಃ = ಯಾವುದು? (ಪ್ರಶ್ನಾರ್ಥಕ, ಪ್ರಥಮಾ ಪುಲ್ಲಿಂಗ ಏಕವಚನ)
ಧರ್ಮಃ = ಧರ್ಮ (ಪ್ರಥಮಾ — ಪ್ರಶ್ನೆಯ ವಿಷಯ)
  (ಧೃ ಧಾತು — ಧಾರಣ ಮಾಡು; ವಿಶ್ವವನ್ನು ಧರಿಸಿರುವದು)
  ಸಂಧಿ: ಕಃ + ಧರ್ಮಃ → ಕೋ ಧರ್ಮಃ (ವಿಸರ್ಗ + ಧ = ಓ)
────────────────────
ಸರ್ವಧರ್ಮಾಣಾಂ = ಎಲ್ಲ ಧರ್ಮಗಳಲ್ಲಿ (ಷಷ್ಠೀ ಬಹುವಚನ)
  (ಎಲ್ಲ ಸದಾಚಾರ ಮಾರ್ಗಗಳಲ್ಲಿ)
────────────────────
ಭವತಃ = ನಿಮ್ಮ ದೃಷ್ಟಿಯಲ್ಲಿ (ಭವಾನ್ ಶಬ್ದ ಷಷ್ಠೀ — ಗೌರವಾರ್ಥ "ನೀವು")
  ಭವಾನ್ = ಗೌರವಾನ್ವಿತ ವ್ಯಕ್ತಿ (ಹಿರಿಯರನ್ನು ಸಂಬೋಧಿಸಲು)
────────────────────
ಪರಮಃ = ಸರ್ವೋಚ್ಚ / ಶ್ರೇಷ್ಠ (ಪ್ರಥಮಾ)
ಮತಃ = ಪರಿಗಣಿತ / ಭಾವಿಸಲ್ಪಟ್ಟ
  (ಮನ್ ಧಾತು; ಭೂತ ಕರ್ಮಣಿ ಕೃದಂತ)
  ಸಂಧಿ: ಪರಮಃ + ಮತಃ → ಪರಮೋ ಮತಃ (ವಿಸರ್ಗ + ಮ = ಓ)
────────────────────
ಕಿಮ್ = ಏನನ್ನು? (ಪ್ರಶ್ನಾರ್ಥಕ ನಪುಂಸಕ)
ಜಪನ್ = ಜಪಿಸುತ್ತಾ (ಜಪ್ ಧಾತು; ವರ್ತಮಾನ ಕೃದಂತ)
  ಜಪ = ನಾಮ ಅಥವಾ ಮಂತ್ರದ ಮೃದು ಪುನರಾವರ್ತನೆ
ಮುಚ್ಯತೇ = ಮುಕ್ತನಾಗುತ್ತಾನೆ (ಮುಚ್ ಧಾತು; ಕರ್ಮಣಿ ವರ್ತಮಾನ)
────────────────────
ಜಂತುಃ = ಜೀವಿ / ಪ್ರಾಣಿ / ಮಾನವ
  (ಜನ್ ಧಾತು — ಹುಟ್ಟು; ಹುಟ್ಟಿದ ಯಾವುದೇ ಜೀವಿ)
  ಉದ್ದೇಶಪೂರ್ವಕ ವಿನಮ್ರ, ಸಾರ್ವತ್ರಿಕ ಪದ — "ಮಹಾತ್ಮ" ಅಲ್ಲ, ಕೇವಲ "ಯಾವ ಜೀವಿಯಾದರೂ"
────────────────────
ಜನ್ಮ = ಜನ್ಮ
ಸಂಸಾರ = ಲೌಕಿಕ ಅಸ್ತಿತ್ವದ ಚಕ್ರ
ಬಂಧನ = ಬಂಧನ
ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ = ಜನ್ಮ ಮತ್ತು ಸಂಸಾರದ ಬಂಧನದಿಂದ
  (ಪಂಚಮೀ ವಿಭಕ್ತಿ — ೬ನೇ ಶ್ಲೋಕದಲ್ಲಿ ಬಂದ ಅದೇ ಪದ — ಉದ್ದೇಶಪೂರ್ವಕ ಪ್ರತಿಧ್ವನಿ)
────────────────────
ಪ್ರತಿಧ್ವನಿ ಟಿಪ್ಪಣಿ:
ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ ೬ನೇ ಶ್ಲೋಕದಲ್ಲಿ ಬಂದಿದೆ.
ಅಲ್ಲಿ ವಿಷ್ಣುವಿನ ಸ್ಮರಣೆ ಅದನ್ನು ಮುರಿಯುತ್ತದೆ ಎಂದಿದೆ.
ಇಲ್ಲಿ ಯುಧಿಷ್ಠಿರ ಕೇಳುತ್ತಾನೆ: ಏನನ್ನು ಜಪಿಸಿದರೆ ಅದೇ ಬಂಧನ ಕಳಚುತ್ತದೆ?
ಪ್ರಶ್ನೆ ತನ್ನ ಉತ್ತರವನ್ನೇ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ — ಹಿಂದಿನ ಶ್ಲೋಕದಲ್ಲೇ ಬಿತ್ತಲ್ಪಟ್ಟಿದೆ.
────────────────────`
  },
  /* ========================= MEANING ========================= */
  meaning: {
    en: `Which dharma among all dharmas
is considered the supreme in your view?
By chanting what is any living being
liberated from the bondage of birth and the cycle of saṃsāra?`,
    kn: `ಎಲ್ಲ ಧರ್ಮಗಳಲ್ಲಿ ಯಾವ ಧರ್ಮವು
ನಿಮ್ಮ ದೃಷ್ಟಿಯಲ್ಲಿ ಪರಮ ಶ್ರೇಷ್ಠ ಎಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿದೆ?
ಯಾವುದನ್ನು ಜಪಿಸುವುದರಿಂದ ಯಾವ ಜೀವಿಯಾದರೂ
ಜನ್ಮ ಮತ್ತು ಸಂಸಾರದ ಬಂಧನದಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ?`
  },
  /* ========================= REFLECTION ========================= */
  reflection: {
    en: `Jantuḥ — "any creature" — is a master stroke.
Yudhiṣṭhira does not ask for a path for kings or scholars or the already virtuous.
He asks for any being. Any life. The lowest and the highest alike.
The question is perfectly universal.
Bhavataḥ — "in your view" — is the mark of a true student:
he does not seek an abstract philosophical answer;
he seeks what this elder, this warrior-sage who has lived through everything, actually believes.
And then the echo: Janmasaṃsārabandhanāt —
the same chain of three words that appeared in verse 6.
The poet has already planted the answer inside the question.
The Sahasranāma is not Bhīṣma's invention — it is the universe answering itself.`,
    kn: `ಜಂತುಃ — "ಯಾವ ಜೀವಿಯಾದರೂ" — ಇದು ಮಹಾಕವಿಯ ಅದ್ಭುತ ಆಯ್ಕೆ.
ಯುಧಿಷ್ಠಿರ ರಾಜರಿಗೋ, ವಿದ್ವಾಂಸರಿಗೋ, ಈಗಾಗಲೇ ಸದಾಚಾರಿಗಳಿಗೋ ಮಾರ್ಗ ಕೇಳುವುದಿಲ್ಲ.
ಅವನು ಯಾವ ಜೀವಿಗೂ ಕೇಳುತ್ತಾನೆ. ಯಾವ ಜೀವನಕ್ಕೂ. ಕೆಳಗಿನವನಿಗೂ ಮೇಲಿನವನಿಗೂ.
ಪ್ರಶ್ನೆ ಸಂಪೂರ್ಣ ಸಾರ್ವತ್ರಿಕ.
ಭವತಃ — "ನಿಮ್ಮ ದೃಷ್ಟಿಯಲ್ಲಿ" — ಇದು ನಿಜವಾದ ಶಿಷ್ಯನ ಲಕ್ಷಣ:
ಅವನು ಅಮೂರ್ತ ತಾತ್ವಿಕ ಉತ್ತರ ಕೇಳುವುದಿಲ್ಲ;
ಎಲ್ಲವನ್ನೂ ಅನುಭವಿಸಿದ ಈ ಹಿರಿಯ, ಯೋಧ-ಮುನಿ ನಿಜವಾಗಿ ಏನು ನಂಬುತ್ತಾರೆ ಎಂದು ಕೇಳುತ್ತಾನೆ.
ಮತ್ತು ಪ್ರತಿಧ್ವನಿ: ಜನ್ಮಸಂಸಾರಬಂಧನಾತ್ —
೬ನೇ ಶ್ಲೋಕದಲ್ಲಿ ಬಂದ ಅದೇ ಮೂರು ಪದಗಳ ಸರಪಳಿ.
ಕವಿ ಪ್ರಶ್ನೆಯ ಒಳಗೇ ಉತ್ತರವನ್ನು ಬಿತ್ತಿದ್ದಾನೆ.
ಸಹಸ್ರನಾಮ ಭೀಷ್ಮರ ಆವಿಷ್ಕಾರವಲ್ಲ — ವಿಶ್ವ ತನಗೆ ತಾನೇ ಉತ್ತರಿಸಿಕೊಳ್ಳುವ ರೀತಿ.`
  }
},

];