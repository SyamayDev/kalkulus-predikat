// ============================================================
//  PRAKTEK KALKULUS PREDIKAT DENGAN JAVASCRIPT
//  Mata Kuliah : Logika Matematika
//  Dosen       : Dian Rachmawati, S.Si., M.Kom.
// ============================================================

console.log("=".repeat(60));
console.log("  PRAKTEK KALKULUS PREDIKAT DENGAN JAVASCRIPT");
console.log("  Logika Matematika — Dian Rachmawati, S.Si., M.Kom.");
console.log("=".repeat(60));
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 1: PREDIKAT — Pernyataan dengan Variabel
// ─────────────────────────────────────────────────────────────
// Predikat adalah fungsi yang mengembalikan true/false
// P(x) = "x adalah bilangan genap"

console.log("📌 BAGIAN 1: PREDIKAT");
console.log("-".repeat(40));

const isGenap   = (x) => x % 2 === 0;
const isPositif = (x) => x > 0;
const isGanjil  = (x) => x % 2 !== 0;
const isPrima   = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log("P(x) = 'x adalah bilangan genap'");
console.log("P(4) =", isGenap(4));   // true
console.log("P(7) =", isGenap(7));   // false
console.log("P(10) =", isGenap(10)); // true
console.log();

console.log("Q(x) = 'x adalah bilangan positif'");
console.log("Q(5) =", isPositif(5));    // true
console.log("Q(-3) =", isPositif(-3));  // false
console.log();

console.log("R(x) = 'x adalah bilangan prima'");
console.log("R(7) =", isPrima(7));    // true
console.log("R(10) =", isPrima(10));  // false
console.log("R(2) =", isPrima(2));    // true
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 2: DOMAIN (Semesta Pembicaraan)
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 2: DOMAIN (Semesta Pembicaraan)");
console.log("-".repeat(40));

const domainAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Domain:", domainAngka);
console.log();

// Predikat yang sama bisa bernilai beda tergantung domain
const domainGenap = [2, 4, 6, 8, 10];
const domainCampur = [1, 2, 3, 4, 5];

console.log("Semua genap di domain [2,4,6,8,10]?", domainGenap.every(isGenap));     // true
console.log("Semua genap di domain [1,2,3,4,5]?", domainCampur.every(isGenap));     // false
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 3: KUANTOR UNIVERSAL — ∀x P(x)
// "Untuk SEMUA x dalam domain, P(x) bernilai benar"
// Implementasi: Array.every()
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 3: KUANTOR UNIVERSAL ∀");
console.log("-".repeat(40));

// ∀x (x > 0) pada domain [1..10]
const semuaPositif = domainAngka.every(isPositif);
console.log("∀x (x > 0) pada domain [1..10]:", semuaPositif);  // true

// ∀x (x genap) pada domain [1..10]
const semuaGenap = domainAngka.every(isGenap);
console.log("∀x (x genap) pada domain [1..10]:", semuaGenap);  // false

// ∀x (x genap) pada domain [2,4,6,8,10]
const semuaGenapDomain2 = domainGenap.every(isGenap);
console.log("∀x (x genap) pada domain [2,4,6,8,10]:", semuaGenapDomain2);  // true
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 4: KUANTOR EKSISTENSIAL — ∃x P(x)
// "Ada SETIDAKNYA SATU x dalam domain, P(x) bernilai benar"
// Implementasi: Array.some()
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 4: KUANTOR EKSISTENSIAL ∃");
console.log("-".repeat(40));

// ∃x (x prima) pada domain [1..10]
const adaPrima = domainAngka.some(isPrima);
console.log("∃x (x prima) pada domain [1..10]:", adaPrima);  // true

// ∃x (x > 100) pada domain [1..10]
const adaLebihDari100 = domainAngka.some(x => x > 100);
console.log("∃x (x > 100) pada domain [1..10]:", adaLebihDari100);  // false

// ∃x (x² = 9) pada domain [1..10]
const adaKuadrat9 = domainAngka.some(x => x * x === 9);
console.log("∃x (x² = 9) pada domain [1..10]:", adaKuadrat9);  // true (x=3)
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 5: NEGASI KUANTOR
// ¬∀x P(x) ≡ ∃x ¬P(x)  →  "Tidak semua" = "Ada yang tidak"
// ¬∃x P(x) ≡ ∀x ¬P(x)  →  "Tidak ada" = "Semua tidak"
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 5: NEGASI KUANTOR");
console.log("-".repeat(40));

// ¬∀x isGenap(x) ≡ ∃x ¬isGenap(x)
const negasiUniversal = !domainAngka.every(isGenap);
const eksistensiNegasi = domainAngka.some(x => !isGenap(x));
console.log("¬∀x Genap(x):", negasiUniversal);
console.log("∃x ¬Genap(x):", eksistensiNegasi);
console.log("Keduanya sama?", negasiUniversal === eksistensiNegasi);  // true!
console.log();

// ¬∃x (x > 100) ≡ ∀x ¬(x > 100)
const negasiEksistensial = !domainAngka.some(x => x > 100);
const universalNegasi = domainAngka.every(x => !(x > 100));
console.log("¬∃x (x > 100):", negasiEksistensial);
console.log("∀x ¬(x > 100):", universalNegasi);
console.log("Keduanya sama?", negasiEksistensial === universalNegasi);  // true!
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 6: PREDIKAT DENGAN OBJEK (Lebih Realistis)
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 6: PREDIKAT DENGAN DATA MAHASISWA");
console.log("-".repeat(40));

const mahasiswa = [
  { nama: "Andi",  ipk: 3.8, semester: 4, jurusan: "Informatika" },
  { nama: "Budi",  ipk: 3.2, semester: 6, jurusan: "Matematika" },
  { nama: "Citra", ipk: 4.0, semester: 2, jurusan: "Informatika" },
  { nama: "Dewi",  ipk: 2.9, semester: 8, jurusan: "Fisika" },
  { nama: "Eka",   ipk: 3.5, semester: 4, jurusan: "Informatika" },
];

console.log("Data Mahasiswa:");
mahasiswa.forEach((m, i) => {
  console.log(`  ${i+1}. ${m.nama} — IPK: ${m.ipk}, Sem: ${m.semester}, Jurusan: ${m.jurusan}`);
});
console.log();

// Predikat untuk mahasiswa
const cumlaude     = (m) => m.ipk >= 3.5;
const lulusTepat   = (m) => m.semester <= 8;
const ipkSempurna  = (m) => m.ipk === 4.0;
const informatika  = (m) => m.jurusan === "Informatika";

// ∀x Cumlaude(x) — Apakah SEMUA mahasiswa cumlaude?
console.log("∀x Cumlaude(x):", mahasiswa.every(cumlaude));        // false
console.log("   → Tidak, karena Dewi IPK 2.9 (< 3.5)");
console.log();

// ∃x IpkSempurna(x) — Ada yang IPK 4.0?
console.log("∃x IpkSempurna(x):", mahasiswa.some(ipkSempurna));   // true
console.log("   → Ya, Citra punya IPK 4.0");
console.log();

// ∀x LulusTepat(x) — Semua lulus tepat waktu?
console.log("∀x LulusTepat(x):", mahasiswa.every(lulusTepat));    // true
console.log("   → Ya, semua semester ≤ 8");
console.log();

// ∃x (Cumlaude(x) ∧ Informatika(x)) — Ada yang cumlaude DAN informatika?
const adaCumlaudeInf = mahasiswa.some(m => cumlaude(m) && informatika(m));
console.log("∃x (Cumlaude(x) ∧ Informatika(x)):", adaCumlaudeInf);  // true
console.log("   → Ya, Andi (3.8) dan Citra (4.0) keduanya Informatika");
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 7: KUANTOR BERSARANG (Nested Quantifiers)
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 7: KUANTOR BERSARANG");
console.log("-".repeat(40));

const dosen = ["Pak Ahmad", "Bu Sari", "Pak Budi"];
const pembimbing = {
  "Andi":  "Pak Ahmad",
  "Budi":  "Bu Sari",
  "Citra": "Pak Budi",
  "Dewi":  "Pak Ahmad",
  "Eka":   "Bu Sari",
};

// ∀x ∃y Pembimbing(x, y)
// "Untuk SETIAP mahasiswa, ADA dosen yang membimbingnya"
const semuaPunyaPembimbing = mahasiswa.every(
  m => dosen.some(d => pembimbing[m.nama] === d)
);
console.log("∀x ∃y Pembimbing(x,y):", semuaPunyaPembimbing);  // true
console.log("   → Setiap mahasiswa punya dosen pembimbing");
console.log();

// ∃y ∀x Pembimbing(x, y)
// "Ada SATU dosen yang membimbing SEMUA mahasiswa"
const adaDosenBimbingSemua = dosen.some(
  d => mahasiswa.every(m => pembimbing[m.nama] === d)
);
console.log("∃y ∀x Pembimbing(x,y):", adaDosenBimbingSemua);  // false
console.log("   → Tidak ada satu dosen yang membimbing semua mahasiswa");
console.log();

console.log("⚠️  Perhatikan: ∀x∃y ≠ ∃y∀x — Urutan kuantor PENTING!");
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 8: UNIVERSAL INSTANTIATION
// ∀x P(x) → P(a)  (jika berlaku untuk semua, berlaku untuk satu)
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 8: ATURAN INFERENSI");
console.log("-".repeat(40));

// Universal Instantiation
const semuaLulusTepat = mahasiswa.every(lulusTepat);
if (semuaLulusTepat) {
  const andi = mahasiswa.find(m => m.nama === "Andi");
  console.log("Universal Instantiation:");
  console.log("  Premis  : ∀x LulusTepat(x) =", true);
  console.log("  Konklusi: LulusTepat(Andi) =", lulusTepat(andi));  // true
}
console.log();

// Existential Generalization
console.log("Existential Generalization:");
const citra = mahasiswa.find(m => m.nama === "Citra");
if (ipkSempurna(citra)) {
  console.log("  Premis  : IpkSempurna(Citra) =", true);
  console.log("  Konklusi: ∃x IpkSempurna(x) =", true);
}
console.log();

// ─────────────────────────────────────────────────────────────
// BAGIAN 9: TRANSLASI BAHASA SEHARI-HARI KE NOTASI PREDIKAT
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 9: TRANSLASI KE NOTASI PREDIKAT");
console.log("-".repeat(40));

const translations = [
  {
    bahasa: '"Semua kucing adalah hewan"',
    notasi: '∀x (Kucing(x) → Hewan(x))',
  },
  {
    bahasa: '"Ada siswa yang rajin"',
    notasi: '∃x (Siswa(x) ∧ Rajin(x))',
  },
  {
    bahasa: '"Tidak semua burung bisa terbang"',
    notasi: '¬∀x (Burung(x) → BisaTerbang(x))  ≡  ∃x (Burung(x) ∧ ¬BisaTerbang(x))',
  },
  {
    bahasa: '"Setiap mahasiswa mengambil setidaknya satu mata kuliah"',
    notasi: '∀x (Mahasiswa(x) → ∃y (MataKuliah(y) ∧ Mengambil(x,y)))',
  },
  {
    bahasa: '"Tidak ada orang yang sempurna"',
    notasi: '¬∃x (Orang(x) ∧ Sempurna(x))  ≡  ∀x (Orang(x) → ¬Sempurna(x))',
  },
];

translations.forEach((t, i) => {
  console.log(`  ${i+1}. ${t.bahasa}`);
  console.log(`     → ${t.notasi}`);
  console.log();
});

// ─────────────────────────────────────────────────────────────
// BAGIAN 10: EVALUASI PADA DOMAIN TERBATAS
// ─────────────────────────────────────────────────────────────

console.log("📌 BAGIAN 10: EVALUASI PADA DOMAIN TERBATAS");
console.log("-".repeat(40));

const domain = [1, 2, 3, 4, 5];
console.log("Domain D = {1, 2, 3, 4, 5}");
console.log();

// P(x) = "x > 0" → evaluasi setiap elemen
console.log("P(x) = 'x > 0'");
domain.forEach(x => {
  console.log(`  P(${x}) = ${x} > 0 = ${x > 0}`);
});
console.log("  ∀x P(x) =", domain.every(x => x > 0), "(semua > 0)");
console.log();

// Q(x) = "x genap" → evaluasi setiap elemen
console.log("Q(x) = 'x genap'");
domain.forEach(x => {
  console.log(`  Q(${x}) = ${x} genap = ${x % 2 === 0}`);
});
console.log("  ∀x Q(x) =", domain.every(x => x % 2 === 0), "(tidak semua genap)");
console.log("  ∃x Q(x) =", domain.some(x => x % 2 === 0), "(ada yang genap: 2, 4)");
console.log();

console.log("=".repeat(60));
console.log("  SELESAI! Kalkulus Predikat berhasil dipraktekkan 🎉");
console.log("=".repeat(60));
